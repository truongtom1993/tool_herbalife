(function () {
	'use strict';

	angular
			.module('advantageNX')
			.controller('PlayerController', PlayerController);

	PlayerController.$inject = ['$stateParams', '$scope', '$element', '$sessionStorage',
	 '$timeout', '$window', '$rootScope', '$q',
	 'contentStreamingService', 'pdfState',
	 'catalogueService', 'user', 'apiService', 'learningRecordStoreService'];

	function PlayerController($stateParams, $scope, $element, $sessionStorage, $timeout, //jshint ignore: line
	 $window, $rootScope, $q, contentStreamingService,
	 pdfState, catalogueService, user, apiService, learningRecordStoreService) {
			var vm = this;
			var titleId = decodeURIComponent($stateParams.titleId);

			vm.allowFrameScrolling = allowFrameScrolling;

			vm.frameStyle = {};

			activate();

			var isReloaded = false;

			function activate() {

					contentStreamingService.preparePlayerLaunch(titleId).then(function (launchData) {
							var launchUrl = launchData.url;

							vm.contentType = launchData.type;

							if (launchData.maxDimensions !== null && launchData.maxDimensions !== undefined) {
									vm.frameStyle = buildIFrameStyle(launchData.maxDimensions);
							}

							if (vm.contentType === 'scorm') {
									launchScorm(launchUrl);
							} else if (vm.contentType === 'pdf') {
									launchPdf(launchUrl);
							} else if (vm.contentType === 'tincan') {
									buildXapiURL(titleId, launchUrl).then(function (extras) {
											var url = _.includes(launchUrl, '?') ?
											 (launchUrl + '&' + extras) : (launchUrl + '?' + extras);
											$sessionStorage.contentType = 'tincan';
											launchScorm(url);
									});
							}
					});
			}

			/**
			 * Build the URL for xApi content type
			 *
			 * @param  {String} tId   The ID of the title taht is to be launched
			 * @return {Promise}      A promise that contains the URL parameters
			 */
			function buildXapiURL(tId, launchUrl) {
					var deferred = $q.defer();
					catalogueService.getCatalogue().then(function (res) {
							var title = _.find(res.titles, ['id', tId]);
							var userInfo = JSON.stringify(user.getAgentObjectSynchronously());
							var activityID = catalogueService.buildTitleActivityId(title);
							var params =
							'titleid=http://xapi.intuition.com/context/titleid/' + tId +
							'&auth=' + 'Bearer ' + $sessionStorage.token +
							'&actor=' + userInfo +
							'&endpoint=' + getEndpoint(title.content.resources[0]);
							deferred.resolve(params + '&tincan=true&activity_id=' + activityID +
							'&sessionid=' + apiService.getSessionId() +
							'&platform=' + learningRecordStoreService.getPlatformMetadata());
					}, function (err) {
							deferred.resolve('');
					});
					return deferred.promise;
			}

			/**
			 * Get the Endpoint based on the evironment currently used.
			 * Because web client is not aware on wether this is INT, UAT or LIVE
			 * this information is retrieved from the resources section of the
			 * title object.
			 *
			 * @return {String}               The endpoint for TinCan type
			 */
			function getCurrentEnv(res) {
					return res.links.resource.substr(0, (res.links.resource.indexOf('.com') + 4));
			}

			/**
			 * Get the Endpoint based on the evironment currently used.
			 * Because web client is not aware on wether this is INT, UAT or LIVE
			 * this information is retrieved from the resources section of the
			 * title object.
			 *
			 * @return {String}               The endpoint for TinCan type
			 */
			function getEndpoint(res) {
					var val = res.links.resource.substr(0, (res.links.resource.indexOf('.com') + 4));
					return val + '/lrs/';
			}

			vm.playerFrame = function () {
					var scripts = getStreamFrame()[0].contentDocument.getElementsByTagName('script');
					for (var i = 0; i < scripts.length; i++) {
							var url = _.includes(scripts[i].src, '?') ?
					 (scripts[i].src + '&token=' + $sessionStorage.token) :
					 (scripts[i].src + '?token=' + $sessionStorage.token);
							scripts[i].src = url;
					}

					var css = getStreamFrame()[0].contentDocument.getElementsByTagName('link');
					for (var j = 0; j < css.length; j++) {
							var urlj = _.includes(css[j].href, '?') ?
					 (css[j].href + '&token=' + $sessionStorage.token) :
					 (css[j].href + '?token=' + $sessionStorage.token);
							css[i].href = urlj;
					}
					getStreamFrame()[0].contentWindow.location.reload();
			};

			/**
			 * Sets Max Dimensiosn for the iFrame
			 * and centers the iFrame on the screen
			 *
			 * @param  {Object} maxDimensions Contains width and Height
			 * @return {Object}               Contains complete style for iFrame
			 */
			function buildIFrameStyle(maxDimensions) {
					var styleObj = maxDimensions;
					styleObj.display = 'inline-block';
					styleObj.left = '50%';
					styleObj.transform = 'translateX(-50%)';
					return styleObj;
			}

			function allowFrameScrolling() {
					// If content is too big for frame, user should have a possibility to scroll it
					// getStreamFrame().contents().find('html, body').css({ overflow: 'visible' });

					// call this methos so on scope destroy the page title is changed
					setContentCloseListener();
			}

			function launchScorm(launchUrl) {
					// If url is set directly to frame, new item is created in browser history,
					// causing browser "Back" button to malfunction in Firefox and Safari
					var url = _.includes(launchUrl, '?') ?
					 (launchUrl + '&token=' + $sessionStorage.token) :
					 (launchUrl + '?token=' + $sessionStorage.token);
					getStreamFrame()[0].contentWindow.location.replace(url);
			}

			function launchPdf(launchUrl) {
					vm.url = launchUrl;
			}

			function getStreamFrame() {
					return $element.find('iframe#stream-frame-player');
			}

			// from here starts the imeplementation of PDF functions
			// This is needed in order for tracking to work

			vm.initListeners = function () {
					setPageChangeListener();
					setContentCloseListener();
					setPagesInitListener();
					initSinglePagePDF();
					setInitialPage();
			};

			function setInitialPage() {
					var initialPage = pdfState.getInitialPage();

					PDFViewerApplication.pdfLinkService.pdfHistory.clearHistoryState();
					PDFViewerApplication.pdfViewer.currentPageNumber = initialPage;
			}

			/**
			 * It is used to initialise PDF files with 1 page.
			 * The timeout is used in order to be sure that the file will be
			 * loaded before the method gets called.
			 * @return {void} Does not return anything (void function).
			 */
			function initSinglePagePDF() {
					$timeout(function () {
							if (PDFViewerApplication.pdfViewer.pagesCount === 1) {
									// the first page is set as 0
									handleNavigationToLastPage(0);
							}
					}, 10);
			}

			function setPageChangeListener() {
					PDFViewerApplication.pdfViewer.eventBus.on('pagechange',
							function (metadata) {
									var pageNumber = metadata.pageNumber;
									handlePageChange(pageNumber);

									if (pageNumber === PDFViewerApplication.pdfViewer.pagesCount) {
											handleNavigationToLastPage(pageNumber);
									}
							});
			}

			function setPagesInitListener() {
					PDFViewerApplication.pdfViewer.eventBus.on('pagesinit',
							function () {
									var initialPage = pdfState.getInitialPage();

									PDFViewerApplication.pdfLinkService.pdfHistory.clearHistoryState();
									PDFViewerApplication.pdfViewer.currentPageNumber = initialPage;
							});

			}

			function handlePageChange(pageNumber) {
					pdfState.update(pageNumber);
			}

			function handleNavigationToLastPage(pageNumber) {
					pdfState.complete(pageNumber);
			}

			function setContentCloseListener() {
					$scope.$on('$destroy', function () {
							$window.document.title = $rootScope.pageTitle;
							if (vm.contentType === 'pdf') {
									//Ensure all listeners from event bus are removed
									PDFViewerApplication.pdfViewer.eventBus._listeners = Object.create(null);
									pdfState.exit(PDFViewerApplication.pdfViewer.currentPageNumber);
							}
					});
			}
	}
})();
