!(function () {
	var __webpack_modules__ = {
		1: function (t, e, n) {
			console.info(`🟠 pageTest/index.js	Line:4	ID:3dbd2b_4`, )
			
			var i;
			void 0 ===
				(i = function (t) {
					'use strict';
					var d = function (t) {
						console.info(`🟠 pageTest/index.js	Line:8	ID:8c8092_8`, this);
					};
					return console.info(`🟠 pageTest/index.js	Line:11	ID:c8f8c6_11`, this), d;
				}.call(e, n, e, t)) || (t.exports = i);
		},
	};
	var __webpack_module_cache__ = {};
	function __webpack_require__(t) {
		// t=3847
		var e = __webpack_module_cache__[t];
		if (void 0 !== e) return e.exports;
		var n = (__webpack_module_cache__[t] = {
			id: t,
			loaded: !1,
			exports: {},
		});
		// dang gọi các function số với tham số tương tứng (t, e n)
		__webpack_modules__[t].call(n.exports, n, n.exports, __webpack_require__);
		n.loaded = !0;
		return n.exports;
	}
	
	__webpack_require__(1)
})();
