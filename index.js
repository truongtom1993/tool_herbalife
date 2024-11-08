'use strict';

!(function () {
	var __webpack_modules__ = {
		1: function (t, e, n) {
			/*
			trong function (t, e, n) thì 
			t = __webpack_module_cache__[funcID] = {
						id: funcID,
						loaded: false,
						exports: {},
					}

			e = t.exports = { cache }
			n = __webpack_require__(funcID)
			*/

			var i;
			void 0 ===
				(i = function (t) {
					// bien t chinh la bien n o tren (func __webpack_require__)
					'use strict';
					const d = function (t) {
						console.info(`🟠 pageTest/index.js	Line:8	ID:8c8092_8`, this);
					};
					return console.info(`🟠 pageTest/index.js	Line:11	ID:c8f8c6_11`, this), d;
				}.call(e, n, e, t)) || (t.exports = i);
		},
	};
	var __webpack_module_cache__ = {};
	/**
	 * A function to require a module by its id and cache it if necessary.
	 * @param {number} funcID - The module id to require.
	 * @returns {object} The exports of the required module.
	 */
	function __webpack_require__(funcID) {
		// Check if the module is already in the cache
		var e = __webpack_module_cache__[funcID];
		if (void 0 !== e) {
			// Return the cached exports if available
			return e.exports;
		}

		// Create a new module (and put it into the cache)
		var n = (__webpack_module_cache__[funcID] = {
			id: funcID,
			loaded: false,
			exports: {},
		});

		// Execute the module function
		__webpack_modules__[funcID].call(n.exports, n, n.exports, __webpack_require__);

		// Mark the module as loaded
		n.loaded = true;

		// Return the exports of the module
		return n.exports;
	}

	__webpack_require__(1);

	__webpack_require__.amdD = function () {
		console.info(`🟠 pageTest/index.js	Line:62	ID:7d830d_62`);

		throw new Error('define cannot be used indirect');
	};

	__webpack_require__.d = function (t, e) {
		console.info(`🟠 pageTest/index.js	Line:66	ID:58cd0a_66`);

		for (var n in e)
			__webpack_require__.o(e, n) &&
				!__webpack_require__.o(t, n) &&
				Object.defineProperty(t, n, {
					enumerable: !0,
					get: e[n],
				});
	};

	__webpack_require__.g = (function () {
		console.info(`🟠 pageTest/index.js	Line:76	ID:3af802_76`);

		if ('object' == typeof globalThis) return globalThis;
		try {
			return this || new Function('return this')();
		} catch (t) {
			if ('object' == typeof window) return window;
		}
	})();

	__webpack_require__.o = function (t, e) {
		console.info(`🟠 pageTest/index.js	Line:85	ID:59bfe1_85`);

		return Object.prototype.hasOwnProperty.call(t, e);
	};

	__webpack_require__.r = function (t) {
		console.info(`🟠 pageTest/index.js	Line:97	ID:8032d7_97`);

		'undefined' != typeof Symbol &&
			Symbol.toStringTag &&
			Object.defineProperty(t, Symbol.toStringTag, {
				value: 'Module',
			}),
			Object.defineProperty(t, '__esModule', {
				value: !0,
			});
	};

	__webpack_require__.nmd = function (t) {
		/* biến đổi t = {
						id: funcID,
						loaded: false,
						exports: {},
					} bằng cách thêm vào key t.paths và t.children = []
		*/
		t.paths = [];
		t.children || (t.children = []);
		return t;
	};
})();
