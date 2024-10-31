/* Copyright 2015-2024 Quantum Metric, Inc. All rights reserved. For US patents see https://www.quantummetric.com/legal/patents/. For EULA see https://www.quantummetric.com/legal/eula release-candidate 0db7d4827051c80cfc35eeeff11d87cdd742ed7b */
(function () {
	var setInterval = window['__zone_symbol__setInterval'] || window.setInterval;
	var clearInterval = window['__zone_symbol__clearInterval'] || window.clearInterval;
	var setTimeout = window['__zone_symbol__setTimeout'] || window.setTimeout;
	var console = window['console'];
	var clearTimeout = window['__zone_symbol__clearTimeout'] || window.clearTimeout;
	var MutationObserver = window['__zone_symbol__MutationObserver'] || window.MutationObserver;
	var queueMicrotask = window['__zone_symbol__queueMicrotask'] || window.queueMicrotask;
	var Promise = window['__zone_symbol__Promise'] || window.Promise;
	('use strict');
	function aa(a) {
		var b = 0;
		return function () {
			return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
		};
	}
	function ba(a) {
		a = [
			'object' == typeof globalThis && globalThis,
			a,
			'object' == typeof window && window,
			'object' == typeof self && self,
			'object' == typeof global && global,
		];
		for (var b = 0; b < a.length; ++b) {
			var c = a[b];
			if (c && c.Math == Math) return c;
		}
		throw Error('Cannot find global object');
	}
	var ca = ba(this),
		da =
			'function' == typeof Object.defineProperties
				? Object.defineProperty
				: function (a, b, c) {
						if (a == Array.prototype || a == Object.prototype) return a;
						a[b] = c.value;
						return a;
				  };
	function ea(a, b) {
		if (b) {
			var c = ca;
			a = a.split('.');
			for (var d = 0; d < a.length - 1; d++) {
				var e = a[d];
				e in c || (c[e] = {});
				c = c[e];
			}
			a = a[a.length - 1];
			d = c[a];
			b = b(d);
			b != d && null != b && da(c, a, { configurable: !0, writable: !0, value: b });
		}
	}
	function fa() {
		fa = function () {};
		ca._QuantumMetricSymbol || (ca._QuantumMetricSymbol = ha);
	}
	function ia(a, b) {
		this.A = a;
		da(this, 'description', { configurable: !0, writable: !0, value: b });
	}
	ia.prototype.toString = function () {
		return this.A;
	};
	var ha = (function () {
		function a(c) {
			if (this instanceof a) throw new TypeError('_QuantumMetricSymbol is not a constructor');
			return new ia('jscomp_symbol_' + (c || '') + '_' + b++, c);
		}
		var b = 0;
		return a;
	})();
	function ja() {
		fa();
		var a = ca._QuantumMetricSymbol.iterator;
		a || (a = ca._QuantumMetricSymbol.iterator = ca._QuantumMetricSymbol('_QuantumMetricSymbol.iterator'));
		'function' != typeof Array.prototype[a] &&
			da(Array.prototype, a, {
				configurable: !0,
				writable: !0,
				value: function () {
					return ka(aa(this));
				},
			});
		ja = function () {};
	}
	function ka(a) {
		ja();
		a = { next: a };
		a[ca._QuantumMetricSymbol.iterator] = function () {
			return this;
		};
		return a;
	}
	function la(a) {
		function b(d) {
			return a.next(d);
		}
		function c(d) {
			return a.throw(d);
		}
		return new Promise(function (d, e) {
			function f(g) {
				g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
			}
			f(a.next());
		});
	}
	function C(a) {
		return la(a());
	}
	ea('Object.entries', function (a) {
		return a
			? a
			: function (b) {
					var c = [],
						d;
					for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
					return c;
			  };
	});
	ea('String.prototype.matchAll', function (a) {
		if (a) return a;
		ja();
		return function (b) {
			if (b instanceof RegExp && !b.global) throw new TypeError('RegExp passed into String.prototype.matchAll() must have global tag.');
			var c = new RegExp(b, b instanceof RegExp ? void 0 : 'g'),
				d = this,
				e = !1,
				f = {
					next: function () {
						var g = {},
							h = c.lastIndex;
						if (e) return { value: void 0, done: !0 };
						var k = c.exec(d);
						if (!k) return (e = !0), { value: void 0, done: !0 };
						c.lastIndex === h && (c.lastIndex += 1);
						g.value = k;
						g.done = !1;
						return g;
					},
				};
			f[_QuantumMetricSymbol.iterator] = function () {
				return f;
			};
			return f;
		};
	});
	ea('Object.fromEntries', function (a) {
		return a
			? a
			: function (b) {
					var c = {};
					ja();
					if (!(_QuantumMetricSymbol.iterator in b)) throw new TypeError('' + b + ' is not iterable');
					b = b[_QuantumMetricSymbol.iterator].call(b);
					for (var d = b.next(); !d.done; d = b.next()) {
						d = d.value;
						if (Object(d) !== d) throw new TypeError('iterable for fromEntries should yield objects');
						c[d[0]] = d[1];
					}
					return c;
			  };
	});
	ea('Array.prototype.flatMap', function (a) {
		return a
			? a
			: function (b, c) {
					for (var d = [], e = 0; e < this.length; e++) {
						var f = b.call(c, this[e], e, this);
						Array.isArray(f) ? d.push.apply(d, f) : d.push(f);
					}
					return d;
			  };
	});
	ea('Array.prototype.includes', function (a) {
		return a
			? a
			: function (b, c) {
					var d = this;
					d instanceof String && (d = String(d));
					var e = d.length;
					c = c || 0;
					for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
						var f = d[c];
						if (f === b || Object.is(f, b)) return !0;
					}
					return !1;
			  };
	});
	ea('Promise.prototype.finally', function (a) {
		return a
			? a
			: function (b) {
					return this.then(
						function (c) {
							return Promise.resolve(b()).then(function () {
								return c;
							});
						},
						function (c) {
							return Promise.resolve(b()).then(function () {
								throw c;
							});
						},
					);
			  };
	});
	function ma(a) {
		for (var b = '', c = 0; c < a.length; c++) b += String.fromCharCode(a[c]);
		return b;
	}
	var na = ma([83, 72, 65, 45, 50, 53, 54]),
		oa = ma([65, 69, 83, 45, 67, 66, 67]),
		qa = ma([82, 83, 65, 45, 79, 65, 69, 80]),
		ra = ma([82, 83, 65, 45, 79, 65, 69, 80, 45, 50, 53, 54]),
		sa = ma([65, 50, 53, 54, 67, 66, 67]);
	const ta = /\s*,\s*/,
		ua = { utm_source: -56, utm_medium: -57, utm_campaign: -58, utm_term: -59, utm_content: -60, utm_id: -61 },
		va = /quantum/i,
		wa =
			/cvv|cvc|month|year|birth|cid|csc|cvn|sensitive|security|ccnumber|card.*identification|verification|^aba$|^tin$|routing|ssn|itin|account.*number|acct.*num|card.*num|card.*#|card.*no|cc.*num|nummer|n.m.ro|credito|\u4fe1\u7528\u5361|\uce74\ub4dc|\u30ab\u30fc\u30c9\u756a|\u041d\u043e\u043c\u0435\u0440.*\u043a\u0430\u0440\u0442\u044b/i,
		xa = [
			{
				re: {
					p: '/b/ss/([^/]+)/(\\d+)/([^/]+)/.+',
					f: '',
				},
				rep: '/b/ss/$1/$2/$3/{id}',
			},
			{ re: { p: '/akam/.+', f: '' }, rep: '/akam/{pixel}' },
			{ re: { p: '(http[s]?://)[^\\.]+\\.safeframe\\.googlesyndication\\.com', f: '' }, rep: '$1REPLACED.safeframe.googlesyndication.com' },
		],
		Da = /zoom|toggle|prev|next|forward|backward|qty|down|up|right|left|arrow|plus|minus|increase|decrease|carousel|quantity|chevron/i,
		Ea = () => {},
		Fa = new Set('button fieldset optgroup option select textarea input'.split(' '));
	function Ga(a, b, c, d) {
		b &&
			c &&
			b != c &&
			(d[b.toUpperCase()] && d[c.toUpperCase()]
				? ((a = (d[c.toUpperCase()] / d[b.toUpperCase()]) * a), (a = D(100 * a) / 100))
				: (a = 'QM%20Conversion:%20' + b + '%20to%20' + c));
		return a;
	}
	function Ha(a) {
		var b = /\D/g,
			c = /(?:([,.]?(?:[0-9]+[,.]?)+[0-9]*))([^_\-0-9]|$)/.exec(a);
		if (
			c &&
			!(2 > c.length) &&
			((a = c[1]),
			0 < a.length && '.' == a[a.length - 1] && (a = a.substring(0, a.length - 1)),
			(c = !1),
			(a.lastIndexOf(',') != a.length - 3 && a.lastIndexOf('.') != a.length - 3) || 2 == a.length || (c = !0),
			(a = a.replace(b, '')))
		)
			return (b = parseFloat(a)), Math.floor(c ? b : 100 * b);
	}
	function Ia(a, b) {
		try {
			const c = a({ test: [{ age: 100, old: !0, s: '[id="t"]' }] });
			return '{"test":[{"age":100,"old":true,"s":"[id=\\"t\\"]"}]}' != c ? !1 : 100 == b(c).test[0].age ? !0 : !1;
		} catch (c) {
			return !1;
		}
	}
	function Ja(a, b) {
		if (Array.isArray(a)) {
			Object.setPrototypeOf(a, b.Rg);
			for (let c = 0; c < a.length; ++c) Ja(a[c], b);
		}
		if ('object' === typeof a && null !== a) {
			Object.setPrototypeOf(a, b.ph);
			for (const c in a) Ja(a[c], b);
		}
	}
	function Ka(a, b) {
		return a ? Object.getOwnPropertyDescriptor(a, b) || Ka(Object.getPrototypeOf(a), b) : null;
	}
	function Ma(a) {
		return C(function* () {
			let b = '';
			const c = window.TextDecoder && new window.TextDecoder();
			try {
				const d = a.getReader();
				for (;;) {
					const { value: e, done: f } = yield d.read();
					if (f) break;
					let g = '';
					if (c) g = c.decode(e);
					else for (let h = 0; h < e.length; h++) g += String.fromCharCode(parseInt(e[h], 10));
					b += g;
				}
			} catch (d) {}
			return b;
		});
	}
	function Na(a, b, c) {
		return 'string' === typeof b
			? b in a
				? a[b]
				: c
			: Array.isArray(b) && 'undefined' !== typeof a
			? 0 === b.length
				? a
				: a
				? Na(a[b[0]], b.slice(1), c)
				: c
			: c;
	}
	const Oa = (a, b) => {
		b = void 0 === b ? a.length : b;
		const c = Array(b);
		for (let d = 0; d < a.length && d < b; ++d) c[d] = a[d];
		return c;
	};
	function D(a, b) {
		b = void 0 === b ? 0 : b;
		return Number(`${Math.round(Number(`${a}e${b}`))}e-${b}`);
	}
	const Pa = a =>
			a.reduce(
				(b, c) => {
					if ('string' === typeof c) return b.global.add(c), b;
					b.selected.push(c);
					return b;
				},
				{ global: new window.Set(), selected: [] },
			),
		Qa = () => {
			let a = new Date().getTime();
			const b = window.performance;
			let c = (b && b.now && 1e3 * b.now()) || 0;
			return 'xxxxxxxxxxxx4xxxxxxxxxxxxxxxxxxx'.replace(/x/g, function (d) {
				var e = 16 * Math.random();
				0 < a ? ((e = (a + e) % 16 | 0), (a = Math.floor(a / 16))) : ((e = (c + e) % 16 | 0), (c = Math.floor(c / 16)));
				return ('x' === d ? e : (e & 3) | 8).toString(16);
			});
		},
		Ra = a => {
			let b = '',
				c = !0;
			for (const d in a) a.hasOwnProperty(d) && (c ? (c = !1) : (b += '&'), (b += encodeURIComponent(d) + '=' + encodeURIComponent(a[d])));
			return b;
		},
		Sa = a =>
			Object.entries(a).reduce(
				(b, c) => {
					const d = c[0];
					c = c[1];
					d.startsWith('event:') ? b.E.push(c) : (b[d] = c);
					return b;
				},
				{ E: [] },
			),
		Ta = a => 'string' === typeof a && 's' !== a && 'exp' !== a,
		Ua = a => {
			if (!a || 'object' !== typeof a) return !1;
			for (const b in a) if (Ta(b)) return !0;
		},
		Va = (a, b) => {
			if (!a || 'string' !== typeof a) return a;
			b.forEach(c => {
				Array.from(a.matchAll(c))
					.reverse()
					.forEach(d => {
						d.indices.forEach((e, f, g) => {
							e && !f ^ (1 < g.length) && (a = a.slice(0, e[0]) + '*****' + a.slice(e[1]));
						});
					});
			});
			return a;
		},
		Wa = (a, b) =>
			Array.isArray(b) || null === b || void 0 === b || 'number' === typeof b || 'string' === typeof b || 'boolean' === typeof b
				? b
				: Object.fromEntries(
						Object.keys(b)
							.sort()
							.map(c => [c, Wa(c, b[c])]),
				  ),
		E = a => {
			const b = /^[a-fA-F0-9]+$/.test(a);
			b || console.warn('QM: invalid cookie ID', a);
			return b;
		},
		Xa = a =>
			null === a || void 0 === a
				? ''
				: (a = a
						.toString()
						.replace(/"|\r?\n|\r|\t|\\/g, '')
						.replace(/[\u0000-\u001F]+/g, '')
						.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '')
						.trim()),
		Ya = a =>
			a.split(/;\s*/).reduce((b, c) => {
				const d = c.indexOf('='),
					e = c.slice(0, d).trim();
				c = c.slice(d + 1).trim();
				e && (b[e] = c);
				return b;
			}, {}),
		Za = a => {
			let b = 0;
			for (; a.parentNode; ) ++b, (a = a.parentNode), 11 === a.nodeType && (a = a.host);
			return b;
		};
	function $a(a) {
		a.J.Td ||
			window.addEventListener('storage', b => {
				'QEventChannel' === b.key && b.newValue && a.L(a.A.Pa(b.newValue));
			});
		window.addEventListener('pagehide', () => {
			try {
				a.A.Storage.removeItem.call(window.localStorage, 'QEventChannel');
			} catch (b) {}
		});
	}
	class ab {
		constructor(a, b, c) {
			this.J = a;
			this.L = c;
			this.A = b;
			$a(this);
		}
	}
	function F(a, b) {
		for (var c = a + '|', d = 1; d < arguments.length; ++d) {
			var e = arguments[d];
			c += e.length.toString() + '|' + e;
		}
		return c;
	}
	function G(a) {
		var b = a.lf;
		return b ? b : (a.lf = a.aa());
	}
	class bb {
		constructor() {
			this.J = this.lf = null;
		}
		aa() {
			return 'Hashable';
		}
	}
	function cb(a) {
		for (var b = {}, c = 0; c < arguments.length; ++c) {
			var d = db(arguments[c]),
				e;
			for (e in d) b[e] = d[e];
		}
		return b;
	}
	function db(a) {
		var b = a.mf;
		return b ? b : (a.mf = a.ha());
	}
	function H(a, b) {
		db(a)[b] && ((a.vd = void 0), a.Ia(b));
	}
	class I extends bb {
		constructor() {
			super();
			this.vd = void 0;
			this.mf = null;
		}
		evaluate() {
			var a = this.vd;
			return void 0 !== a ? a : (this.vd = this.ba());
		}
		ba() {
			return null;
		}
		ha() {
			return {};
		}
		Ia() {}
		aa() {
			return 'Eval';
		}
	}
	class eb extends I {
		constructor() {
			super();
		}
	}
	class fb extends eb {
		constructor(a, b, c) {
			super();
			this.ib = b;
			this.Sa = [];
			for (var d = 2; d < arguments.length; ++d) this.Sa.push(arguments[d]);
		}
		ba() {
			if (this.ib == gb) return !this.Sa[0].evaluate();
			if (this.ib == hb) {
				for (var a = 0; a < this.Sa.length; ++a) if (!this.Sa[a].evaluate()) return !1;
				return !0;
			}
			for (a = 0; a < this.Sa.length; ++a) if (this.Sa[a].evaluate()) return !0;
			return !1;
		}
		aa() {
			return F.apply(
				this,
				['L' + this.ib.toString()].concat(
					this.Sa.map(function (a) {
						return G(a);
					}),
				),
			);
		}
		ha() {
			return cb.apply(this, this.Sa);
		}
		Ia(a) {
			for (var b = 0; b < this.Sa.length; ++b) H(this.Sa[b], a);
		}
	}
	var gb = 0,
		hb = 1;
	class ib extends bb {
		constructor() {
			super();
		}
		evaluate() {
			return !1;
		}
	}
	class jb extends eb {
		constructor(a, b, c) {
			super();
			this.value = b;
			this.A = c;
		}
		ba() {
			return this.A.evaluate(this.value.evaluate());
		}
		aa() {
			return F('V', G(this.value), G(this.A));
		}
		ha() {
			return db(this.value);
		}
		Ia(a) {
			H(this.value, a);
		}
	}
	class mb extends I {
		constructor(a, b, c) {
			super();
			this.A = b;
			this.value = c;
		}
		ba() {
			var a = this.A.evaluate();
			return a ? { vb: a, value: this.value.ba() } : { vb: a, value: '' };
		}
		aa() {
			return F('EE', G(this.A), G(this.value));
		}
		ha() {
			return cb(this.A);
		}
		Ia(a) {
			H(this.A, a);
			H(this.value, a);
		}
	}
	class nb extends eb {
		constructor(a, b) {
			super();
			this.event = b;
		}
		ba() {
			return this.event.evaluate().vb;
		}
		aa() {
			return F('E', G(this.event));
		}
		ha() {
			return db(this.event);
		}
		Ia(a) {
			H(this.event, a);
		}
	}
	class ob extends eb {
		constructor(a, b) {
			super();
			this.R = a;
			this.A = b;
		}
		ba() {
			var a = this.A;
			return this.R.tb.some(function (b) {
				return b.id == a;
			});
		}
		aa() {
			return F('SE', this.A.toString());
		}
		ha() {
			return { eventinfo: !0, event: !0 };
		}
	}
	class pb extends I {
		constructor(a, b) {
			super();
			this.event = b;
		}
		ba() {
			return this.event.evaluate().value;
		}
		aa() {
			return F('EV', G(this.event));
		}
		ha() {
			return db(this.event);
		}
		Ia(a) {
			H(this.event, a);
		}
	}
	class qb extends I {
		constructor() {
			super();
		}
		ba() {
			return { vb: !0, value: '' };
		}
		aa() {
			return F('HE');
		}
		ha() {
			return { eventinfo: !0 };
		}
	}
	class rb extends I {
		constructor(a, b, c) {
			super();
			this.key = b;
			this.value = c;
		}
		ba() {
			return this.value.evaluate()[this.key];
		}
		aa() {
			return F('DictionaryValue', this.key, G(this.value));
		}
		ha() {
			return db(this.value);
		}
		Ia(a) {
			H(this.value, a);
		}
	}
	class sb extends I {
		constructor(a, b) {
			super();
			this.value = b;
		}
		ba() {
			for (var a = this.value.evaluate(), b = 0, c = 0; c < a.length; ++c)
				try {
					b += parseFloat(a[c]);
				} catch (d) {}
			return b;
		}
		aa() {
			return F('SumValue', G(this.value));
		}
		ha() {
			return db(this.value);
		}
		Ia(a) {
			H(this.value, a);
		}
	}
	class tb extends I {
		constructor(a, b) {
			super();
			this.value = b;
		}
		ba() {
			return this.value;
		}
		aa() {
			return F('LV', this.value.toString());
		}
	}
	class ub extends I {
		constructor(a, b, c, d) {
			super();
			this.src = b;
			this.L = new RegExp(b);
			this.A = c;
			this.value = d;
		}
		ba() {
			var a = this.L.exec(this.value.evaluate());
			return a ? ((a = a[this.A]) ? a : '') : '';
		}
		aa() {
			return F('RE', this.src, this.A.toString(), G(this.value));
		}
		ha() {
			return db(this.value);
		}
		Ia(a) {
			H(this.value, a);
		}
	}
	class vb extends I {
		constructor(a, b) {
			super();
			this.value = b;
		}
		ba() {
			try {
				return parseFloat(this.value.evaluate());
			} catch (a) {
				return NaN;
			}
		}
		aa() {
			return F('PF', G(this.value));
		}
		ha() {
			return db(this.value);
		}
		Ia(a) {
			H(this.value, a);
		}
	}
	class wb extends I {
		constructor(a, b, c) {
			super();
			this.R = a;
			this.A = c;
			this.value = b;
		}
		ba() {
			try {
				var a = this.value.evaluate();
				var b = Ha(a);
				if (this.A) {
					var c = this.A.ba();
					if (c) {
						let d = Ga(b, c, this.R.J.g.G.targetCurrency, this.R.J.Ad);
						if ('string' === typeof d) {
							J(this.R.J, `currency_conversion=${d}`);
							return;
						}
						b = d;
					}
				}
			} catch (d) {
				return;
			}
			return 'number' === typeof b ? D(b) : void 0;
		}
		aa() {
			return F('Cur', G(this.value));
		}
		ha() {
			return db(this.value);
		}
		Ia(a) {
			H(this.value, a);
		}
	}
	class xb extends ib {
		constructor(a, b) {
			super();
			this.value = b;
		}
		evaluate(a) {
			return a == this.value;
		}
		aa() {
			return F('Is', this.value.toString());
		}
	}
	class yb extends ib {
		constructor(a, b) {
			super();
			this.value = b;
		}
		evaluate(a) {
			return a && 'undefined' != a ? -1 != a.indexOf(this.value) : !1;
		}
		aa() {
			return F('Contains', this.value.toString());
		}
	}
	class zb extends ib {
		constructor(a, b, c) {
			super();
			this.start = b;
			this.A = c;
		}
		evaluate(a) {
			return this.start <= a && a <= this.A;
		}
		aa() {
			return F('Between', this.start.toString(), this.A.toString());
		}
	}
	class Ab extends ib {
		constructor(a, b, c) {
			super();
			this.ib = b;
			this.value = c;
		}
		evaluate(a) {
			return this.ib == Bb ? a < this.value : this.ib == Cb ? a <= this.value : this.ib == Db ? a >= this.value : a > this.value;
		}
		aa() {
			return F('Compare', this.ib.toString(), this.value.toString());
		}
	}
	var Bb = 0,
		Cb = 1,
		Db = 2;
	class Eb extends ib {
		constructor() {
			super();
		}
		evaluate(a) {
			return !!a;
		}
		aa() {
			return F('IsTrue');
		}
	}
	class Fb extends ib {
		constructor() {
			super();
		}
		evaluate(a) {
			return null != a && 0 != a.length;
		}
		aa() {
			return F('IsNotNull');
		}
	}
	class Gb extends ib {
		constructor(a, b) {
			super();
			this.key = b;
		}
		evaluate(a) {
			return void 0 !== a[this.key];
		}
		aa() {
			return F('HasKey', this.key);
		}
	}
	class Hb extends ib {
		constructor(a, b) {
			super();
			this.ta = b;
		}
		evaluate(a) {
			try {
				if (!(a instanceof Element)) return !1;
			} catch (b) {}
			return this.J.fa(a, this.ta);
		}
		aa() {
			return F('Matches', this.ta);
		}
	}
	class Ib extends ib {
		constructor(a, b, c) {
			super();
			this.key = b;
			this.A = c;
		}
		evaluate(a) {
			try {
				var b = a[this.key];
				b || 'value' != this.key || (b = a.innerText);
				b = b ? b.toLowerCase() : b;
				return b === (this.A ? this.A.toLowerCase() : this.A);
			} catch (c) {
				return a[this.key] === this.A;
			}
		}
		aa() {
			return F('KeyValue', this.key, this.A);
		}
	}
	class L extends I {
		constructor(a) {
			super();
			this.R = a;
			this.J = a.J;
		}
	}
	class Jb extends L {
		constructor(a) {
			super(a);
		}
		ba() {
			return this.R.Yd;
		}
		aa() {
			return 'FormSubmitted';
		}
		ha() {
			return { formSubmitted: !0 };
		}
	}
	class Kb extends L {
		constructor(a) {
			super(a);
		}
		ba() {
			return this.R.Wd.filled ? this.R.Wd.name : null;
		}
		aa() {
			return 'FormFieldFilledValue';
		}
		ha() {
			return { form: !0 };
		}
	}
	class Lb extends L {
		constructor(a, b) {
			super(a);
			this.ta = b;
		}
		ba() {
			var a = this.R.Yd,
				b = a.elements;
			if (a) for (a = 0; a < b.length; ++a) if (this.J.fa(b[a], this.ta)) return b[a].value;
			return null;
		}
		aa() {
			return F('FFSV', this.ta);
		}
		ha() {
			return { formSubmitted: !0 };
		}
	}
	class Mb extends L {
		constructor(a, b) {
			super(a);
			this.A = b;
			this.L = { eventinfo: !0, event: !0 };
		}
		ba() {
			for (var a = this.A, b = this.R.tb, c = b.length - 1; 0 <= c; --c) {
				var d = b[c];
				if (d.id == a) return d.value;
			}
		}
		aa() {
			return F('SEV', this.A.toString());
		}
		ha() {
			return this.L;
		}
	}
	class Nb extends L {
		constructor(a, b) {
			super(a);
			this.A = b;
		}
		ba() {
			for (var a = this.A, b = this.R.tb, c = b.length - 1; 0 <= c; --c) {
				var d = b[c];
				if (d.id == a) return d.timeStamp;
			}
		}
		aa() {
			return F('SETV', this.A.toString());
		}
		ha() {
			return { eventinfo: !0, event: !0 };
		}
	}
	class Ob extends L {
		constructor(a) {
			super(a);
		}
		ba() {
			return this.R.Ua && this.R.Ua.s;
		}
		aa() {
			return 'FirstHitInSessionValue';
		}
		ha() {
			return { eventinfo: !0 };
		}
	}
	class Pb extends L {
		constructor(a) {
			super(a);
		}
		ba() {
			var a = this.R.Ua;
			if (a) return a.e + D(this.J.uc / 1e3);
		}
		aa() {
			return 'SessionEngagementTimeValue';
		}
		ha() {
			return { eventinfo: !0, engagement: !0 };
		}
	}
	class Qb extends eb {
		constructor(a, b) {
			super();
			this.R = a;
			this.ta = b;
		}
		ba() {
			return this.J.fa(this.R.Uf, this.ta);
		}
		aa() {
			return F('FFV', this.ta);
		}
		ha() {
			return { fieldFilled: !0 };
		}
	}
	class Rb extends L {
		constructor(a) {
			super(a);
		}
		ba() {
			return this.R.Tf;
		}
		aa() {
			return 'ElementClickedValue';
		}
		ha() {
			return { clicked: !0 };
		}
	}
	class Sb extends L {
		constructor(a) {
			super(a);
		}
		ba() {
			return this.R.ob;
		}
		aa() {
			return 'ElementClickedNode';
		}
		ha() {
			return { clicked: !0 };
		}
	}
	class Tb extends eb {
		constructor(a, b) {
			super();
			this.R = a;
			this.ta = b;
		}
		ba() {
			return !!Ub(this.R.J, document, this.ta)[0];
		}
		aa() {
			return F('CV', this.ta);
		}
		ha() {
			return { pageready: !0, dom: !0, eventinfo: !0 };
		}
	}
	class Vb extends L {
		constructor(a, b) {
			super(a);
			this.ta = b;
		}
		ba() {
			var a = Ub(this.J, document, this.ta)[0];
			if (a) return ('INPUT' != a.nodeName && 'SELECT' != a.nodeName && 'TEXTAREA' != a.nodeName) || !a.value ? this.J.B.D.textContent(a) : a.value;
		}
		aa() {
			return F('CI', this.ta);
		}
		ha() {
			return { dom: !0, pageready: !0, eventinfo: !0, clicked: !0, formSubmitted: !0, fieldFilled: !0 };
		}
	}
	class Wb extends L {
		constructor(a, b) {
			super(a);
			this.ta = b;
		}
		ba() {
			var a = Ub(this.J, document, this.ta)[0];
			if (a) return a.value;
		}
		aa() {
			return F('Cv', this.ta);
		}
		ha() {
			return { dom: !0, pageready: !0, clicked: !0, formSubmitted: !0, eventinfo: !0 };
		}
	}
	class Xb extends eb {
		constructor(a, b) {
			super();
			this.R = a;
			this.A = b;
		}
		ba() {
			return Yb(this.A);
		}
		aa() {
			return F('CoP', this.A);
		}
		ha() {
			return { eventinfo: !0 };
		}
	}
	class Zb extends I {
		constructor(a, b) {
			super();
			this.R = a;
			this.A = b;
		}
		ba() {
			return Yb(this.A);
		}
		aa() {
			return F('CoV', this.A);
		}
		ha() {
			return { eventinfo: !0 };
		}
	}
	class $b extends I {
		constructor(a, b) {
			super();
			this.R = a;
			this.A = b;
		}
		ba() {
			var a = '';
			try {
				if ('object' === typeof this.A && null !== this.A && this.A.hasOwnProperty('fn')) return this.A.fn.call({ api: this.R.J.ja });
				a = window[this.J.Cf](this.A);
			} catch (b) {
				console.error('QTM: JSEvent: ', b, this.A);
			}
			return a;
		}
		aa() {
			const a = 'object' === typeof this.A && null !== this.A && this.A.hasOwnProperty('fn') ? this.A.fn.toString() : this.A;
			return F('JSE', a);
		}
		ha() {
			return { pageready: !0, eventinfo: !0 };
		}
	}
	class ac extends $b {
		constructor(a, b) {
			super(a, b);
		}
		aa() {
			const a = 'object' === typeof this.A && null !== this.A && this.A.hasOwnProperty('fn') ? this.A.fn.toString() : this.A;
			return F('JSEX', a);
		}
		ha() {
			return { pageready: !0, eventinfo: !0, dom: !0, clicked: !0 };
		}
	}
	class bc extends L {
		constructor(a, b) {
			super(a);
			this.A = b;
			this.L = new RegExp(b);
		}
		ba() {
			if (this.R.Ga) return this.L.test(this.R.Ga.responseURL) ? this.R.Ga.data : void 0;
		}
		aa() {
			return F('XHRRequest', this.A);
		}
		ha() {
			return { xhr: !0 };
		}
	}
	class cc extends L {
		constructor(a, b) {
			super(a);
			this.A = b;
			this.L = new RegExp(b);
		}
		ba() {
			if (this.R.Ga && this.L.test(this.R.Ga.qurl)) return this.R.Ga.qresponse;
		}
		aa() {
			return F('XHRResponse', this.A);
		}
		ha() {
			return { xhr: !0 };
		}
	}
	function dc(a) {
		var b = {};
		try {
			if (!a) return b;
			var c = a.split('\r\n');
			a = 0;
			for (var d = c.length; a < d; a++) {
				var e = c[a],
					f = e.indexOf(': ');
				0 < f && (b[e.substring(0, f).toLowerCase()] = e.substring(f + 2));
			}
		} catch (g) {
			console.error('QM Header Parse: ', g);
		}
		return b;
	}
	class ec extends L {
		constructor(a, b, c) {
			super(a);
			this.L = b;
			this.A = c;
			this.O = new RegExp(b);
		}
		ba() {
			if (this.O.test(this.R.Ga.responseURL)) {
				var a = this.R.Ga.rh;
				if (!a) {
					var b = this.R.Ga.getAllResponseHeaders();
					b && ((a = dc(b)), (this.R.Ga.rh = a));
				}
				return a ? a[this.A] : void 0;
			}
		}
		aa() {
			return F('XHRResponseHeader', this.L, this.A);
		}
		ha() {
			return { xhr: !0 };
		}
	}
	class fc extends ec {
		constructor(a, b, c) {
			super(a, b, c);
		}
		ba() {
			if (this.O.test(this.R.Ga.responseURL)) {
				var a = this.R.Ga.sh;
				if (!a) {
					var b = this.R.Ga.reqHeaders;
					b && ((a = dc(b)), (this.R.Ga.sh = a));
				}
				return a ? a[this.A] : void 0;
			}
		}
		aa() {
			return F('XHRRequestHeader', this.L, this.A);
		}
	}
	const gc = /^\d+$/;
	class hc extends I {
		constructor(a, b, c) {
			super();
			this.key = b;
			this.L = this.key.split('.');
			this.A = c;
		}
		ba() {
			var a = this.A.evaluate();
			if (a && 'string' == typeof a)
				try {
					for (var b = this.L, c = 0; c < b.length; c++) {
						let e = b[c];
						if (!gc.test(e) && 0 > a.indexOf(e)) return;
					}
					var d = JSON.parse(a);
					for (c = 0; c < b.length && ((d = d[b[c]]), void 0 !== d); c++);
					return d;
				} catch (e) {}
		}
		aa() {
			return F('JSONPath', this.key, G(this.A));
		}
		ha() {
			return db(this.A);
		}
		Ia(a) {
			H(this.A, a);
		}
	}
	class jc extends hc {
		constructor(a, b, c, d) {
			super(a, b, d);
			this.value = c;
		}
		ba() {
			var a = super.ba();
			if ('undefined' !== typeof a) return a == this.value;
		}
		aa() {
			return F('JSONPathValue', this.key, this.value, G(this.A));
		}
	}
	class kc extends I {
		constructor(a, b, c, d) {
			super();
			this.A = b;
			this.value = c;
			this.Ta = d;
		}
		ba() {
			const a = this.A.evaluate();
			return a ? { vb: a, value: this.value.ba(), Ta: this.Ta.ba() } : { vb: a, value: '', Ta: null };
		}
		aa() {
			return F('EE', G(this.A), G(this.value), G(this.Ta));
		}
		ha() {
			return cb(this.A);
		}
		Ia(a) {
			H(this.A, a);
			H(this.value, a);
			H(this.Ta, a);
		}
	}
	var lc = {
		LogicalClause: fb,
		ValueClause: jb,
		EventClause: nb,
		SessionEventClause: ob,
		EventValue: pb,
		E: mb,
		MDE: kc,
		HE: qb,
		Is: xb,
		Contains: yb,
		Between: zb,
		Compare: Ab,
		IsTrue: Eb,
		IsNotNull: Fb,
		HasKey: Gb,
		KeyValue: Ib,
		Matches: Hb,
		DV: rb,
		Sum: sb,
		V: tb,
		RE: ub,
		PF: vb,
		CV: wb,
		FormSubmitted: Jb,
		FormFieldFilled: Kb,
		FormFieldSubmittedValue: Lb,
		FieldFilledNode: Qb,
		SEventValue: Mb,
		EventTimestamp: Nb,
		FirstHit: Ob,
		SessionEngagementTime: Pb,
		ElementClicked: Rb,
		ElementClickedNode: Sb,
		CookiePresent: Xb,
		CookieValue: Zb,
		JSValue: $b,
		JSValueEx: ac,
		XHRRequest: bc,
		XHRResponse: cc,
		XHRResponseHeader: ec,
		XHRRequestHeader: fc,
		JSONPath: hc,
		JSONPathValue: jc,
		SelectorPresent: Tb,
		SelectorText: Vb,
		SelectorValue: Wb,
	};
	const mc = new window.Map([
		[-56, { oa: 2 }],
		[-57, { oa: 2 }],
		[-58, { oa: 2 }],
		[-59, { oa: 2 }],
		[-60, { oa: 2 }],
		[-61, { oa: 2 }],
	]);
	function nc(a, b) {
		var c = b.r;
		if (c) return a.cache[c];
		c = b.t;
		var d = b.v;
		if (!c || !d) return b;
		for (var e = [a], f = 0; f < d.length; ++f) e.push(nc(a, d[f]));
		c = new lc[c](...e);
		c.J = a.J;
		b = b.id;
		d = G(c);
		if ((e = a.cache[d])) return (a.cache[b] = e);
		b && (a.cache[b] = c);
		return (a.cache[d] = c);
	}
	function oc(a, b) {
		var c = b.id,
			d;
		for (d in b.gg) b.gg.hasOwnProperty(d) && delete a.W[d][c];
		delete a.L[c];
	}
	function pc(a, b, c, d) {
		d = void 0 === d ? null : d;
		var e = b.id;
		b.jd && (e = b.jd);
		if (1 !== a.ia[e]) {
			if (b.nd) {
				var f = b.event,
					g = null,
					h = f.ha(),
					k;
				for (k in h) h.hasOwnProperty(k) && (g = k);
				H(f, g);
				f = f.evaluate();
				f.vb && (c = Xa(f.value));
			}
			a.O.has(`${e}:${d ? d.hash : c}`) || (null === c && a.O.has(`${e}:`)) || M(a, b, c, d);
		}
	}
	function qc(a) {
		for (var b = 0; b < a.$.length; b++) pc(a, a.$[b].event, a.$[b].value, a.$[b].qb);
	}
	function rc(a, b) {
		var c = null;
		a.tb.forEach(function (d) {
			d.id == b && (c = d);
		});
		return c;
	}
	function sc(a, b, c) {
		C(function* () {
			var d = null;
			try {
				var e = a.W[b];
				if (e) {
					var f = !1,
						g;
					for (g in e)
						if (e.hasOwnProperty(g)) {
							var h = e[g];
							d = g;
							if (!h.nd || a.Ua) {
								if ('dom' == b) {
									if (3 <= h.Df)
										if (h.eh) continue;
										else if (500 > c - h.ga) continue;
									h.Df++;
								}
								var k = h.event;
								H(k, b);
								h.ga = !h.ga || h.ga < c ? c : h.ga;
								var l = k.evaluate();
								l.vb && (l.Ta && (l.Ta = { hash: yield tc(a.J.B.D.stringify(l.Ta, Wa)), value: l.Ta }), (f = M(a, h, l.value, l.Ta)));
							}
						}
					if (f) for (g in a.L) a.L.hasOwnProperty(g) && a.L[g] && H(a.L[g].event, 'event');
				}
			} catch (n) {
				a.na ||
					((a.na = !0),
					console.error('Error evaluating Quantum Event: ', n),
					(e = Error()),
					uc(a.J, 'EventEngine--' + n + ':' + b + ':EventId=' + d + '\n' + (e.stack ? e.stack.toString() : '')));
			}
		});
	}
	function vc(a, b) {
		a.Ua = b;
		b.E.forEach(function (c) {
			c = { id: c.i, value: c.v, timeStamp: c.t, hash: c.h };
			a.tb.push(c);
			var d = c.id,
				e = a.kc[d];
			!e && 0 > d && mc.has(d) && (e = Object.assign(c, mc.get(d)));
			if ((e && !e.oa) || !e) e && oc(a, e), (a.ia[d] = 1);
			e && 2 === e.oa && a.O.add(`${d}:${c.hash || c.value}`);
			e && 2 === e.xa && (a.A[d] || (a.A[d] = {}), (a.A[d][c.hash || c.value] = 1));
		});
		qc(a);
		sc(a, 'eventinfo', a.J.cb);
	}
	function wc(a, b) {
		a.Tf = (b.id ? '#' + b.id : b instanceof HTMLElement && a.J.B.D.innerText(b)) || a.J.B.D.textContent(b);
		a.ob = b;
		a.J.ja.lastClicked = b;
		sc(a, 'clicked', new Date().getTime());
	}
	function xc(a, b) {
		a.Uf = b;
		a.J.ja.lastField = b;
		sc(a, 'fieldFilled', new Date().getTime());
	}
	function M(a, b, c, d) {
		d = void 0 === d ? null : d;
		0 !== b.id && (c = Xa(c));
		if (b.gh && !c) return !1;
		if (b.nd && !a.Ua) return a.$.push({ event: b, value: c, qb: d }), !1;
		var e = b.id;
		b.jd && (e = b.jd);
		var f = d ? d.hash : c;
		if ((0 !== e && a.O.has(`${e}:${f}`)) || (null === c && a.O.has(`${e}:`)) || (0 !== e && a.A[e] && (1 === a.A[e].x || a.A[e][f]))) return !1;
		b.xa ? 2 == b.xa && (a.A[e] || (a.A[e] = {}), (a.A[e][f] = 1)) : (oc(a, b), (a.A[e] = { x: 1 }));
		if (b.oa) 2 === b.oa && a.O.add(`${e}:${f}`);
		else {
			if (a.ia[e]) return !1;
			a.ia[e] = 1;
		}
		if (0 != b.id) {
			const g = { id: e, value: c, timeStamp: b.ga };
			null !== d && (g.hash = d.hash);
			a.tb.push(g);
			f = a.pa;
			try {
				f.A.Storage.setItem.call(window.localStorage, 'QEventChannel', f.A.stringify(g));
			} catch (h) {}
		}
		e = { i: e, f: b.flags, v: c, t: b.ga ? b.ga : new Date().getTime() };
		null !== d && ((e.h = d.hash), (e.ev = d.value));
		0 < (b.flags & 64) ? a.J.Z.set('cv', c) : 0 < (b.flags & 128) && a.Ua && (a.Ua.abn = c);
		0 < (b.flags & 1) && a.J.Z.set('cv', null);
		yc(a, b, e, c, d);
		return !0;
	}
	function yc(a, b, c, d, e) {
		e = void 0 === e ? null : e;
		C(function* () {
			if (a.J.g.G.publicKeyString && (b.flags & 2 || b.flags & 4 || b.flags & 8 || b.flags & 16 || b.flags & 256) && !e) {
				var f = yield a.J.sa.encrypt(d);
				d = yield zc(a.J.sa, d);
				f && ((c.qenc = f), (c.v = d));
			}
			Ac(a.J, 'E', c);
		});
	}
	class Bc {
		constructor(a, b) {
			this.cache = {};
			this.Ua = null;
			this.tb = [];
			this.J = a;
			this.W = {};
			this.L = {};
			this.kc = {};
			this.Ga = this.Wd = this.Yd = this.Uf = this.ob = this.Tf = null;
			this.O = new Set();
			this.A = [];
			this.$ = [];
			this.ia = {};
			this.na = !1;
			this.qa = b;
			this.pa = new ab(this.J, this.J.B.D, this.ra.bind(this));
			a = this.J.ya;
			var c = this.qa;
			b = null;
			try {
				this.W = {};
				this.L = {};
				this.kc = {};
				var d = c.events;
				if (d) {
					c = [];
					for (var e = 0; e < d.length; ++e)
						try {
							if ((b = d[e])) {
								if (c[b.u]) {
									if ('n' == c[b.u]) continue;
								} else if (new RegExp(b.u).test(a)) c[b.u] = 'y';
								else {
									c[b.u] = 'n';
									continue;
								}
								var f = b.i,
									g = {
										id: f,
										jd: b.oid,
										xa: !!b.m,
										oa: b.s,
										flags: b.f,
										nd: b.sessionInfoReq,
										eh: b.evalAlways ? !b.evalAlways : !0,
										gh: b.excludeBlank,
										Df: 0,
										event: nc(this, b.v),
									};
								if (2 == g.oa || 0 == g.oa) g.nd = !0;
								0 < g.xa && 2 == g.oa && (g.xa = 2);
								var h = (g.gg = db(g.event)),
									k;
								for (k in h)
									if (h.hasOwnProperty(k)) {
										var l = this.W[k];
										l || (l = this.W[k] = {});
										l[f] = g;
									}
								this.L[f] = g;
								this.kc[f] = g;
							}
						} catch (n) {
							console.error('QM: failed to load event:', n);
						}
				}
			} catch (n) {
				console.log('Error loading Quantum events: ', b, n), uc(this.J, n);
			}
		}
		ge() {
			sc(this, 'pageready', this.J.cb);
			sc(this, 'dom', this.J.cb);
		}
		wa() {
			sc(this, 'engagement', new Date().getTime());
		}
		ra(a) {
			this.tb.push(a);
		}
	}
	const Cc = new Map(),
		Dc = /,(?!(?:[^[\]]+\])|(?:[^()]+\)))\s*/g,
		Ec = /(?:^|\s)S#(?:\s|$)/,
		Fc = a => {
			Cc.has(a) || Cc.set(a, a.split(Dc));
			return Cc.get(a);
		};
	const Gc = a => a.every(b => 'object' === typeof b && b && 'pred' in b),
		Hc = a => {
			const b = {},
				c = { operator: 'default' };
			for (const d in a) {
				if (!a.hasOwnProperty(d)) continue;
				const e = a[d];
				Array.isArray(e) && 0 < e.length && Gc(e)
					? (b[d] = e)
					: (b[d] = Array.isArray(e) && 0 < e.length ? [{ pred: c, rules: [{ pred: c, value: e }] }] : [{ pred: c, value: e }]);
			}
			return b;
		},
		Ic = a => {
			const b = [],
				c = [];
			for (const d of a) Ec.exec(d) ? b.push(d) : c.push(d);
			return { bc: b, jc: c };
		},
		Jc = a => a.reduce((b, c) => b + String.fromCharCode(c), '');
	const Kc = {
			publishInterval: 5e3,
			sendInterval: 1e3,
			sendRetries: 10,
			unthrottledDataCapMobile: 1072864,
			throttledBytesPerSecondMobile: 102400,
			reportURL: '',
			hashResourceURL: '',
			hashUploadPercent: 1,
			resourceUploadDelay: 2e3,
			urlMonitorBlacklist: [],
			syncURL: '',
			fallbackReportURLS: [],
			fallbackReportURLDelay: 200,
			sessionTimeoutMinutes: 30,
			maxSessionDuration: 0,
			cookieDomain: null,
			sessionCookieName: 'QuantumMetricSessionID',
			sessionVar: null,
			userCookieName: 'QuantumMetricUserID',
			sessionStoreNamespace: 'QM_S',
			userStoreNamespace: 'QM_U',
			sessionPersistenceMediums: ['cookie', 'localStorage'],
			userPersistenceMediums: ['cookie', 'localStorage'],
			publicKeyString: null,
			dataScrubRE: [],
			dataScrubWhiteList: ['[data-qm-allow]'],
			dataScrubBlackList: ['*'],
			scrubDocumentTitlePatterns: [],
			dataEncryptWhiteList: ['[data-qm-allow]'],
			encryptScrubList: ['[data-qm-encrypt]'],
			maskSensitiveWindowDialogs: [],
			encryptSensitiveWindowDialogs: [],
			excludeDOMList: [],
			apiDefinitions: [],
			xhrHookWhiteListDetails: [],
			xhrHookBlackListDetails: [],
			xhrPerformanceWhitelistDetails: [],
			xhrPerformanceSlow: 3e3,
			encryptXHR: !0,
			checkBlankPages: !0,
			pbpThreshold: 3e3,
			maxSyncSize: 10485760,
			xhrHookWhiteList: [],
			xhrHookBlackList: [],
			xhrErrorBlacklist: [
				{ p: 'appdynamics', f: 'i' },
				{ p: 'aws-origin', f: 'i' },
				{ p: 'bam', f: 'i' },
				{ p: 'bam-cell', f: 'i' },
				{ p: 'cdnbasket', f: 'i' },
				{ p: 'cdnwidget', f: 'i' },
				{ p: 'chtbl', f: 'i' },
				{ p: 'clarity', f: 'i' },
				{ p: 'clearbit', f: 'i' },
				{ p: 'demdex', f: 'i' },
				{ p: 'doubleclick', f: 'i' },
				{ p: 'facebook', f: 'i' },
				{ p: 'google', f: 'i' },
				{ p: 'google-analytics', f: 'i' },
				{ p: 'hotjar', f: 'i' },
				{ p: 'instagram', f: 'i' },
				{ p: 'iperceptions', f: 'i' },
				{
					p: 'litix',
					f: 'i',
				},
				{ p: 'omtrdc', f: 'i' },
				{ p: 'pinterest', f: 'i' },
				{ p: 'snowplowanalytics', f: 'i' },
				{ p: 'tealium', f: 'i' },
				{ p: 'tvpixel', f: 'i' },
				{ p: 'yimg', f: 'i' },
				{ p: 'linkedin', f: 'i' },
			],
			dataScrubXHRRegExes: [
				{ p: '"firstName":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"lastName":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"cvv_code":"?([^,"}]+)"?,?,?', f: 'i' },
				{ p: '"cvvCode":"?([^,"}]+)"?,?,?', f: 'i' },
				{ p: '"expiration_date":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"expirationDate":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"account_no":"?([^,"}]+)"?,?', f: 'i' },
				{
					p: '"routingNumber":"?([^,"}]+)"?,?',
					f: 'i',
				},
				{ p: '"date_of_birth":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"dateOfBirth":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"countryOfBirth":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"new_password":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"gender":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"accountNo":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"accountNumber":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"confirm_password":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"confirmPassword":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"addr_Line1":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"addr_Line2":"?([^,"}]+)"?,?', f: 'i' },
				{
					p: '"addrLine1":"?([^,"}]+)"?,?',
					f: 'i',
				},
				{ p: '"addrLine2":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"password":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"dob":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"newPassword":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"loginToken":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"card_number":"?([^,"}]+)"?,?,?', f: 'i' },
				{ p: '"address":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"name":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"nationality":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"routing_number":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"account_number":"?([^,"}]+)"?,?', f: 'i' },
				{ p: '"givenName":"?([^,"}]+)"?,?', f: 'i' },
				{
					p: '"familyName":"?([^,"}]+)"?,?',
					f: 'i',
				},
			],
			isPivot: !1,
			visibleURL: Jc([
				104, 116, 116, 112, 115, 58, 47, 47, 101, 120, 116, 101, 114, 110, 97, 108, 46, 113, 117, 97, 110, 116, 117, 109, 109, 101, 116, 114, 105, 99, 46, 99,
				111, 109, 47, 118, 105, 115, 105, 98, 108, 101, 47, 108, 97, 116, 101, 115, 116, 47, 98, 111, 111, 116, 115, 116, 114, 97, 112, 46, 98, 117, 110, 100,
				108, 101, 46, 106, 115,
			]),
			visibleQueryParamName: 'qm-visible',
			bookmarkToolbarURL: Jc([
				104, 116, 116, 112, 115, 58, 47, 47, 101, 120, 116, 101, 114, 110, 97, 108, 46, 113, 117, 97, 110, 116, 117, 109, 109, 101, 116, 114, 105, 99, 46, 99,
				111, 109, 47, 105, 110, 116, 101, 114, 97, 99, 116, 105, 111, 110, 115, 45, 114, 101, 99, 111, 114, 100, 101, 114, 47, 108, 97, 116, 101, 115, 116, 47,
				98, 117, 110, 100, 108, 101, 46, 106, 115,
			]),
			bookmarkToolbarQueryParamName: 'qm-bookmark-toolbar-id',
			bookmarkServiceURL: Jc([
				104, 116, 116, 112, 115, 58, 47, 47, 114, 108, 46, 113, 117, 97, 110, 116, 117, 109, 109, 101, 116, 114, 105, 99, 46, 99, 111, 109, 47, 117, 47, 114,
				101, 112, 108, 97, 121,
			]),
			excludeRageRE: [
				{ p: '\\bzoom\\b', f: 'i' },
				{ p: '\\btoggle\\b', f: 'i' },
				{ p: '\\bprev\\b', f: 'i' },
				{ p: '\\bnext\\b', f: 'i' },
				{ p: '\\bforward\\b', f: 'i' },
				{ p: '\\bbackward\\b', f: 'i' },
				{ p: '\\bqty\\b', f: 'i' },
				{ p: '\\bdown\\b', f: 'i' },
				{ p: '\\bup\\b', f: 'i' },
				{ p: '\\bright\\b', f: 'i' },
				{ p: '\\bleft\\b', f: 'i' },
				{ p: '\\barrow\\b', f: 'i' },
				{ p: '\\bplus\\b', f: 'i' },
				{ p: '\\bminus\\b', f: 'i' },
				{ p: '\\bincrease\\b', f: 'i' },
				{ p: '\\bdecrease\\b', f: 'i' },
				{ p: '\\bcarousel\\b', f: 'i' },
				{ p: '\\bquantity\\b', f: 'i' },
				{ p: '\\bchevron\\b', f: 'i' },
			],
			excludeRageCSS: [],
			replaceURLRegExes: [],
			enableWorkerCompression: !0,
			enableCompression: !0,
			urlTransforms: [],
			monitorAllHashChanges: !1,
			maskInputs: !1,
			abnSegmentCookie: '',
			ignoreChangesList: [],
			blacklistedURLs: [],
			whitelistedURLs: [],
			maximumChangeValue: 536432,
			disableFormSubmitFields: !1,
			scrubInputAttributes: ['defaultValue', 'placeholder'],
			forceDeferFetchAborts: !1,
			monitorXHRSetCookies: !1,
			maxXHRDataLength: 20480,
			excludeXHRHeaderRegEx: [{ p: 'Authorization', f: 'i' }],
			percentSampling: null,
			enabledCookie: 'QuantumMetricEnabled',
			logReqCookiesForXHR: !1,
			spinnerMaxSeconds: 6,
			spinnerMinimumThreshold: 3,
			spinnerSelectorList: [
				'[class*=spinner]:not([class*=hide]):not([class*=hidden]):not([class*=inactive]):not([class*=disabled])',
				'[class*=loading]:not([class*=hide]):not([class*=hidden]):not([class*=inactive]):not([class*=disabled])',
				'[class*=loader]:not([class*=hide]):not([class*=hidden]):not([class*=inactive]):not([class*=disabled])',
			],
			stripHTMLComments: !1,
			maxNumOOBEventsPerHit: 5e3,
			targetCurrency: 'USD',
			startOffset: 0,
			startImmediatePathPatterns: [],
			allowClearCookies: !1,
			captureCookiesReplay: !0,
			waitForSessionIdPathPatterns: [],
			startWithoutParentPathPatterns: [],
			maxIframeSyncRetries: 10,
			waitForParentMaxRetries: 20,
			waitForParentRetryDelay: 250,
			maxWaitForSessionIdRetries: 2e4,
			queryParamForSessionId: '',
			queryParamForUserId: '',
			nestedStitchingQueryParams: [],
			logResourcePercent: 0,
			autoDetectSDK: !1,
			maxResourcesPerHit: 500,
			logLongTasks: !1,
			longTaskDurationThreshold: 800,
			allowedResourceTypes: 'css img script link iframe xmlhttprequest fetch'.split(' '),
			horizonEnabled: !1,
			maxStoredEventLength: 255,
			hookPrompt: !0,
			blockFrequentReloads: [],
			domChangedThrottleDuration: 100,
			spaTransitionStartMarkerName: 'QuantumMetricTransitionStart',
			spaTransitionStopMarkerName: 'QuantumMetricTransitionStop',
			spaLocationChangedTimeout: 1e3,
			ignoreAttributes:
				'data-city data-postal-code data-email data-accountnumber data-phone data-address data-address1 data-last-name data-first-name data-user-firstname data-user-lastname data-user-email data-addressone data-addresstwo data-postalcode data-countrycode taxidnumber accountnumber lastname middlename firstname address address1 address2 city statecode zip ssn taxId consumerID birthdate personalemail businessemail idnumber email user-info password data-user-phonenumber data-user-birthdate account-number account-alias'.split(
					' ',
				),
			transformAttributesForNodesList: [],
			logMarkers: !1,
			webVitalsSnapshotBuffer: 1e3,
			performanceMarkerWhitelist: [],
			performanceMeasureWhitelist: [],
			resourcePathBlacklist: [{ p: 'googleads.g.doubleclick.net', f: 'i' }],
			sampleReplay: 0,
			replayEnabled: !0,
			hookFetch: !0,
			hookFetchExtra: !1,
			sameSiteFlag: 'None',
			cleanseJSON: !0,
			disableErrorHooking: !1,
			xhrEncryptWhiteListDetails: [],
			xhrEncryptBlackListDetails: [],
			encryptNodeAttributes: [],
			syncEndpointsWithSDK: [],
			maskSensitiveQueryParams:
				'user userid user-id username alias clientid accountnumber invoicenumber id accountid customer_id customerid authcode authtoken bankclearingcode bankcountry ordertoken token passcode password vin confirmationno confirmation-number confirmationnumber confirmation dateofbirth email email_address emailaddress emailid loginemail loginid login_hint loginhint title name fname sname gname first_name firstname last_name lastname surname location address address1 address2 orderemail password phone phonenumber phone_number po postcode referrerid routingnumber state transactionid transid txtpassword txtuserid utm_email ssn'.split(
					' ',
				),
			forceElementCSSUpload: ['[data-fela-type]', '[data-emotion]'],
			forceElementCSSInline: [],
			ignoreElementCSSSerialization: [],
			reportFailedImages: !1,
			slowLoadingImageThreshold: 2500,
			useFallbackSDKSync: !1,
			imageTrackingIgnoreList:
				'img[alt*="tracking"] img[alt*="pixel"] img[alt*="beacon"] img[alt*="analytics"] img[alt*="spy"] img[alt*="tracker"] img[alt*="conversion"] img[alt*="1x1"] img[src*="utm_"] img[src*="google-analytics.com/"] img[src*="doubleclick.net/"] img[src*="facebook.com/tr/"] img[height="1"] [width="1"] img[height="0"] [width="0"] img[src=""] img[src*="blank.gif"]'.split(
					' ',
				),
			validateFrameSrcCSP: !1,
			waitForNativeCapture: !1,
			elementVeinAttributes: ['id', 'class', 'name'],
			temp: {},
			maxMDELength: 20480,
			maxSDKWaitTime: 6e3,
			hoverTargets: [],
		},
		Lc = {};
	function N(a) {
		function b(c, d, e, f) {
			d = void 0 === d ? '' : d;
			e = void 0 === e ? 50 : e;
			f = void 0 === f ? 200 : f;
			let g = 0,
				h = null,
				k = !1;
			return function () {
				h ||
					(h = setTimeout(() => {
						g = 0;
						h = null;
						k = !1;
					}, f));
				g++;
				if (g > e) k || ((k = !0), J(this.J, `RATE_LIM=API calls to ${d} exceeded configured rate limits.`));
				else return c.apply(this, arguments);
			};
		}
		this.J = a;
		this.O = null;
		this.A = [];
		this.L = [];
		['sendEvent'].forEach(c => {
			this[c] = b(this[c], c);
		});
	}
	N.prototype.Qb = function () {
		const a = window.QuantumMetricOnload;
		if (a)
			if (a instanceof Array)
				for (let b = 0; b < a.length; b++) {
					if ('function' === typeof a[b])
						try {
							a[b](this);
						} catch (c) {}
				}
			else if ('function' === typeof a)
				try {
					a(this);
				} catch (b) {}
	};
	var Mc = !1;
	N.prototype.lastUrl = function () {
		const a = this.J.Z.get('lastUrl', !1);
		return a ? new URL(a) : !1;
	};
	N.prototype.get = function (a, b, c) {
		return Na(a, b, c);
	};
	N.prototype.getSessionVar = function (a, b) {
		return a ? this.J.Z.get(`${this.J.Ff}.${a}`, b) : b;
	};
	N.prototype.setSessionVar = function (a, b) {
		if (a) return this.J.Z.set(`${this.J.Ff}.${a}`, b);
	};
	var Nc = { rage: -2, frustration: -5 };
	N.prototype.addEventListener = function (a, b) {
		if (a instanceof Array) for (var c = 0; c < a.length; c++) this.addEventListener(a[c], b);
		else (a = Nc[a] || a), (c = this.L[a]) || (c = this.L[a] = []), c.push(b);
		'start' === a && this.J.va && b({ sessionID: this.J.ea, userID: this.J.Ha, hitID: this.J.va, url: this.J.la.$a.bb }, a);
	};
	N.prototype.removeEventListener = function (a, b) {
		try {
			var c = this.L[a];
			c &&
				(this.L[a] = c.filter(function (d) {
					return d != b;
				}));
		} catch (d) {}
	};
	N.prototype.identifyUser = function (a) {
		var b = this.J.R;
		b ? (Oc(this, b, a), (this.O = null)) : (this.O = a);
	};
	N.prototype.sendEvent = function (a, b, c, d) {
		Pc(this, { id: a, flags: void 0 === b ? 0 : b, ga: new Date().getTime() }, void 0 === c ? '' : c, void 0 === d ? null : d);
	};
	N.prototype.setUserFirst = function (a) {
		Pc(this, { id: 0, oa: 1, flags: 8, ga: new Date().getTime() }, a);
	};
	N.prototype.setUserLast = function (a) {
		Pc(this, { id: 0, oa: 1, flags: 16, ga: new Date().getTime() }, a);
	};
	N.prototype.getPrevEventData = function (a) {
		var b = this.J.R;
		return b ? rc(b, a) : null;
	};
	N.prototype.getCartValue = function () {
		return this.J.Z.get('cv', null);
	};
	N.prototype.setCart = function (a) {
		-1 !== String(a).indexOf('.')
			? Pc(this, { id: -18, flags: 0, ga: new Date().getTime() }, 'Invalid cart value format: ' + a)
			: Pc(this, { id: 0, oa: 2, flags: 64, ga: new Date().getTime() }, a);
	};
	N.prototype.getSessionID = function () {
		return this.J.ea;
	};
	N.prototype.getSession = function () {
		return this.getSessionID();
	};
	N.prototype.getUserID = function () {
		return this.J.Ha;
	};
	N.prototype.getConfig = function () {
		return this.J.g.G;
	};
	N.prototype.getRawConfig = function () {
		return this.J.g.dg;
	};
	N.prototype._localOverride = function (a, b) {
		switch (a) {
			case 'transformAttributesForNodesList':
				this.J.g.K.kb = b;
				break;
			default:
				console.warn('invalid local override');
		}
	};
	N.prototype.getReplay = function () {
		const a = this.getSub(),
			b = this.getSessionID();
		var c = D(Date.now() / 1e3);
		return `https://${a}.quantummetric.com/#/replay/cookie:${b}?ts=${c - 43200}-${c + 43200}`;
	};
	N.prototype.getSub = function () {
		var a = this.J.sub;
		if (a) return a;
		({ reportURL: a } = this.J.g.G);
		if (-1 < a.indexOf('-app')) a = (a || '').split('-app')[0].replace(/https:\/\//, '');
		else if (-1 < a.indexOf('ingest')) {
			{
				let b = (a || '').match(/ingest.+(?:quantummetric|qmengineering)\.com\/horizon\/(\w+)\/?/);
				a = b ? b[1] : (b = (a || '').match(/ingest.+(?:quantummetric|qmengineering)\.com\/(\w+)\/?/)) ? b[1] : null;
			}
		} else a = null;
		return a;
	};
	N.prototype.setMVTCampaignAndValue = function (a, b) {
		Pc(this, { id: -20, flags: 0, ga: new Date().getTime() }, a);
		Pc(this, { id: -21, flags: 0, ga: new Date().getTime() }, b);
	};
	N.prototype.setApplicationVersion = function (a) {
		Pc(this, { id: -9999, oa: 1, flags: 2048, ga: new Date().getTime() }, a);
	};
	N.prototype.setABNSegment = function (a) {
		Pc(this, { id: -100, flags: 128, ga: new Date().getTime() }, a);
	};
	N.prototype.getABNSegment = function () {
		return Qc(this.J);
	};
	N.prototype.logOOBData = function (a, b) {
		'xhr' == a && b ? this.J.gb(b.status, b.responseURL, b.start, b.method, b.getData, b) : Ac(this.J, a, b);
	};
	N.prototype.logData = function (a, b) {
		if (b) {
			b = O(this.J, b);
			if (void 0 === b) return;
			a.I = b;
		}
		P(this.J, a);
	};
	Object.defineProperty(N.prototype, 'conversionRates', {
		get: function () {
			return this.J.Ad;
		},
		set: function (a) {
			this.J.Ad = a;
		},
	});
	N.prototype.currencyConvertFromToValue = function (a, b, c) {
		10 > new Date().getTime() % 100 && Rc(this.J.pb, 'currencyConvertFromToValue', !0);
		b = Ga(a, b, c, this.conversionRates);
		'string' === typeof b ? J(this.J, `currency_conversion=${b}`) : (a = b);
		return D(a);
	};
	N.prototype.getCurrencyValue = function (a) {
		10 > new Date().getTime() % 100 && Rc(this.J.pb, 'getCurrencyValue', !0);
		return Ha(a);
	};
	Object.defineProperty(N.prototype, 'targetCurrency', {
		get: function () {
			return this.J.g.G.targetCurrency;
		},
	});
	N.prototype.newSession = function () {
		Sc(this.J);
	};
	N.prototype.switchSession = function (a) {
		var b = this.J;
		E(a) && (b.Z.archive(`${'QM:s:'}${b.ea}`), (b.Pc = a), Sc(b));
	};
	N.prototype.newPage = function () {
		this.J.Nh || Tc(this.J, 64);
	};
	N.prototype.stopPage = function () {
		this.J.stop();
	};
	N.prototype.stopSession = function () {
		Uc(this.J, !1);
	};
	N.prototype.startSession = function () {
		Uc(this.J, !0);
	};
	N.prototype.optInUser = function () {
		Vc(this.J, !1);
	};
	N.prototype.optOutUser = function () {
		Vc(this.J, !0);
	};
	N.prototype.isOn = function () {
		var a = this.J;
		return a.Ld && !a.Ea;
	};
	N.prototype.isUserEnabled = function () {
		return Wc(this.J);
	};
	N.prototype.uploadRL = function () {
		this.J.g.K.rc = !0;
		this.J.B.Qa.ca = new this.J.B.D.da.contentWindow.WeakMap();
		Xc(this.J);
	};
	N.prototype.querySelectorCrossingShadowDOM = function (a, b) {
		return Ub(this.J, a, b)[0];
	};
	N.prototype.querySelectorAllCrossingShadowDOM = function (a, b) {
		return Ub(this.J, a, b);
	};
	N.prototype.installQMVisible = function () {
		return Yc(this.J);
	};
	function Zc(a, b, c, d) {
		if (a.J.Da) {
			var e = a.L[b];
			if (e) {
				'number' === typeof b
					? (c = { id: c.i, value: c.v, ts: c.t, i: c.i, v: c.v, ev: c.ev })
					: 'api' === b && (c = { url: c.u, method: c.m, status: c.st, responseTime: c.r, xhr: d });
				for (var f = 0; f < e.length; f++)
					try {
						e[f](c, b);
					} catch (g) {
						Mc || ((Mc = !0), console.warn('QM: API Listener caught exception: ' + g));
					}
			}
			'number' === typeof b && Zc(a, 'event', c, d);
		}
	}
	N.prototype.ge = function () {
		const a = this;
		C(function* () {
			a.O && Oc(a, a.J.R, a.O);
			a.O = null;
			if (0 < a.A.length) {
				for (var b = 0; b < a.A.length; b++) {
					const e = a.A[b];
					var c = e.event,
						d = a.J.R.kc[c.id];
					if (d) c = d;
					else if (0 < c.id) {
						J(a.J, 'Cannot send unsupported event (id: ' + c.id + ')');
						return;
					}
					e.qb && (e.qb = { hash: yield tc(a.J.B.D.stringify(e.qb, Wa)), value: e.qb });
					pc(a.J.R, c, e.value, e.qb);
				}
				a.A = [];
			}
		});
	};
	function Oc(a, b, c) {
		a.J.Da && M(b, { id: 0, oa: 1, flags: 6, ga: new Date().getTime() }, c);
	}
	function Pc(a, b, c, d) {
		c = void 0 === c ? '' : c;
		d = void 0 === d ? null : d;
		C(function* () {
			if (a.J.Da) {
				var e = a.J.R;
				if (e) {
					var f = e.kc[b.id];
					if (f) (f.ga = b.ga), (b = f);
					else if (0 < b.id) {
						J(a.J, 'Cannot send unsupported event (id: ' + b.id + ')');
						return;
					}
					null !== d &&
						((f = a.J.B.D.stringify(d, Wa)),
						f.length > a.J.g.G.maxMDELength && ((d = { error: 'Too much data' }), (f = a.J.B.D.stringify(d, Wa))),
						(d = { hash: yield tc(f), value: d }));
					pc(e, b, c, d);
				} else a.A.push({ event: b, value: c, qb: d });
			}
		});
	}
	N.prototype.enableReplay = function (a) {
		a = !!a;
		a !== this.J.g.K.ka &&
			((this.J.g.K.ka = a),
			this.J.Z.set('replayEnabled', a),
			a ? (delete Lc.replayEnabled, this.newPage()) : (Lc.replayEnabled = !1),
			P(this.J, { t: 're', v: a }));
	};
	function $c(a, b) {
		'persist' in a.A || (a.A.persist = []);
		a.A.persist.push(b);
	}
	function ad(a, b) {
		'persist' in a.A && a.A.persist.forEach(c => c(b));
	}
	class bd {
		constructor() {
			this.A = {};
		}
	}
	function Rc(a, b, c) {
		b = { t: 'm', n: b, v: c, sub: a.A.ja.getSub() };
		a.log(b);
	}
	class cd {
		constructor(a) {
			this.A = a;
			this.L = '';
			if (a.g.G.hashResourceURL)
				try {
					const b = new URL(a.g.G.hashResourceURL);
					b.pathname = 'u/cos/api/v1/logs';
					this.L = b.toString();
				} catch (b) {}
		}
		log(a) {
			this.L &&
				dd(
					this.A,
					'POST',
					this.L,
					function () {},
					function () {},
					this.A.B.D.stringify(a),
					'application/json',
				);
		}
	}
	const ed = /[?&]+([^=&]+)(?:=([^&]*))?/gi;
	function fd(a) {
		if ('string' === typeof a && 0 < a.length) {
			try {
				return new URL(a);
			} catch (b) {}
			try {
				return new URL(a, window.location.origin);
			} catch (b) {}
		}
		throw Error(`Invalid URL: ${a}`);
	}
	function gd(a, b, c) {
		var d = c;
		c = c.split('?');
		var e = c[1];
		a.size && e && ((d = e.split('#')), (e = d[1]), (a = hd(a, `?${d[0]}`)), (d = `${c[0]}${a}`), e && (d += `#${e}`));
		for (a = 0; a < b.length; ++a)
			try {
				const f = b[a];
				d = d.replace(f[0], f[1]);
			} catch (f) {}
		return d;
	}
	function hd(a, b) {
		let c = '?';
		id(b).forEach((d, e) => {
			1 < c.length && (c += '&');
			a.has(e.toLowerCase()) && (d = '*****');
			c += encodeURIComponent(e);
			d && (c += `=${encodeURIComponent(d)}`);
		});
		return c;
	}
	function id(a = null) {
		const b = new window.Map();
		!a && window.location && 'string' == typeof window.location.search && (a = window.location.search);
		if (a)
			try {
				a.replace(ed, (c, d, e) => {
					b.set(decodeURIComponent(d), e ? decodeURIComponent(e) : '');
				});
			} catch (c) {}
		return b;
	}
	function jd(a) {
		try {
			return 'function' == typeof window.QuantumMetricOnNewPageTitle ? window.QuantumMetricOnNewPageTitle(a) : a;
		} catch (b) {}
	}
	function kd(a) {
		a.L !== document.title ? ((a.L = document.title), (a.A = jd(a.L))) : a.A || (a.A = jd(a.L));
		return a.A;
	}
	class ld {
		constructor(a, b) {
			const c = fd(window.location.href);
			this.timestamp = new Date().getTime();
			this.Nb = b;
			this.Ca = c;
			this.O = gd(a.g.K.Lb, a.g.K.Tb, c.href);
			a: {
				a = this.O;
				try {
					var d = 'function' == typeof window.QuantumMetricOnNewPageUrl ? window.QuantumMetricOnNewPageUrl(a) : a;
					break a;
				} catch (e) {}
				d = void 0;
			}
			this.bb = d;
			this.L = document.title;
			this.A = '';
		}
	}
	const md = (a, b) => {
			try {
				return new RegExp(a, b);
			} catch (c) {}
		},
		R = a =>
			a
				.reduce((b, c) => {
					const d = b.find(e => e.f === c.f);
					if (!d) return b.push(Object.assign({}, c)), b;
					d.p = d.p + '|' + c.p;
					return b;
				}, [])
				.flatMap(b => md(b.p, b.f) || []),
		T = (a, b) => {
			for (let c = 0; c < b.length; c++) if (b[c].test(a)) return !0;
			return !1;
		};
	function nd(a, b = -1) {
		a.Xa = 0 <= b ? b : a.W.now();
		return a.Xa;
	}
	class od {
		constructor(a, b, c = null) {
			this.J = a;
			this.W = a.ma;
			this.origin = c;
			this.L = b;
			this.O = !1;
			this.A = {};
			this.ia = this.$ = this.duration = this.ic = this.Xa = 0;
			this.na = new Date().getTime();
			this.pa = [1, 16, 4, 2, 8, 64];
			this.A.t = 's';
			this.A['@'] = ['w'];
			this.J.ng = window.screen ? window.screen.width : void 0;
			this.J.mg = window.screen ? window.screen.height : void 0;
			this.A.x = this.J.ng;
			this.A.y = this.J.mg;
			this.J.Ub = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			this.J.wb = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			this.A.w = this.J.Ub;
			this.A.h = this.J.wb;
		}
		gd() {
			return this.pa.includes(this.L.Nb);
		}
		xd(a) {
			this.ic += a;
		}
		ue(a) {
			this.duration = a;
		}
		me() {
			this.$ += 1;
		}
		od() {}
		Md(a) {
			a && (this.O = !0);
			this.A[')'] = this.J.nb;
			this.A.s = this.J.Nf;
			a = kd(this.L);
			T(this.L.bb, this.J.g.K.se) ? (this.A.pt = this.L.bb) : (this.A.pt = a);
			this.A.url = this.L.bb;
			this.A.ourl = this.L.O;
			this.J.customElements.size && (this.A.cea = Array.from(this.J.customElements));
			if ((a = navigator.connection || navigator.mozConnection || navigator.webkitConnection))
				a.effectiveType && (this.A.ce = a.effectiveType), a.downlink && (this.A.cd = D(a.downlink)), a.rtt && (this.A.cr = a.rtt);
			this.te();
			this.A.z = this.J.fc;
			this.J.ua && (this.A.QF = this.J.ua);
			window.screen.orientation ? (({ orientation: a } = window.screen), (a = a.angle)) : (a = window.orientation);
			this.A.o = a;
			this.gd() && !this.O
				? ((this.A.spa_d = this.duration ? parseInt(this.duration, 10) : null),
				  (this.A.spa_x = this.$),
				  (this.A.spa_m = this.ic),
				  (a = this.W.timeOrigin && this.W.getEntriesByType('navigation')[0] ? this.W.timeOrigin + this.Xa : this.na),
				  (this.A.pto = D(a)),
				  this.origin && (this.A.r = this.origin.bb))
				: (pd(this.J, this.A),
				  (this.A.n = { type: qd(this.J, 'type'), redirectCount: qd(this.J, 'redirectCount') }),
				  document.referrer && ((a = gd(this.J.g.K.Lb, this.J.g.K.Tb, document.referrer)), (this.A.r = a), this.J.Z.set('lastUrl', fd(a).toString())));
			return this.A;
		}
		za(a) {
			this.A.c = a;
		}
		te() {
			this.A.els = this.ia;
		}
	}
	function rd(a) {
		return a.A[a.Ja];
	}
	function sd(a) {
		if (0 < a.Ja) {
			if (rd(a)) return !0;
			a.Ja = 0;
		}
		return !1;
	}
	function td(a, b) {
		return a.get(b) ? a.get(b).O : !1;
	}
	function ud(a) {
		if (sd(a)) return nd(rd(a));
		a.O = a.J.ma.now();
		return a.O;
	}
	function vd(a) {
		return wd(a, a.$a, a.L);
	}
	function wd(a, b, c) {
		a.Ja = Date.now();
		b = new od(a.J, b, c);
		b.od(a.W);
		a.W = '';
		a.A[a.Ja] = b;
		0 <= a.O && (nd(b, a.O), (a.O = -1));
		return a.Ja;
	}
	function xd(a, b) {
		delete a.A[b];
		if (a.Ja === b) {
			{
				b = Object.keys(a.A);
				let c = Number.parseInt(b[0], void 0);
				if (1 < b.length)
					for (let d = 1; d < b.length; d++) {
						let e = Number.parseInt(b[d], void 0);
						e > c && (c = e);
					}
				b = c;
			}
			a.Ja = b || 0;
		}
	}
	function yd(a) {
		return a.L ? a.L.Ca : null;
	}
	function zd(a, b) {
		a.L = a.$a;
		a.$a = b;
		return vd(a);
	}
	function Ad(a, b) {
		const c = a.$a,
			d = b.Ca.pathname === c.Ca.pathname && b.Ca.search === c.Ca.search && b.Ca.hash !== c.Ca.hash;
		if ((4 === b.Nb && d) || T(b.Ca.href, a.J.g.K.wh) || (16 === b.Nb && !a.J.g.G.monitorAllHashChanges)) return !1;
		a = c.Ca.origin === b.Ca.origin && c.Ca.pathname === b.Ca.pathname && c.Ca.search === b.Ca.search && c.Ca.hash === b.Ca.hash;
		return 1 === b.Nb || (!a && c.bb !== b.bb) ? !0 : !1;
	}
	class Bd {
		constructor(a) {
			this.J = a;
			this.$a = new ld(a, 32);
			this.L = null;
			this.A = {};
			this.Ja = 0;
			this.W = '';
			this.O = -1;
			this.$ = !1;
		}
		gd(a) {
			return sd(this) ? ((a = this.get(a)) ? a.gd() : !1) : !1;
		}
		get(a) {
			return this.A[a];
		}
		od(a) {
			sd(this) ? rd(this).od(a) : (this.W = a);
		}
		ue(a) {
			sd(this) && rd(this).ue(a);
		}
		me() {
			sd(this) && rd(this).me();
		}
		xd(a) {
			sd(this) && rd(this).xd(a);
		}
		te(a) {
			sd(this) && (rd(this).ia = a);
		}
		za(a, b) {
			this.get(a).za(b);
		}
		Md(a) {
			var b = this.A[a];
			xd(this, a);
			a = b.Md(!this.$);
			this.$ = !0;
			{
				let c = Date.now() - 1e4;
				for (let d of Object.keys(this.A)) d <= c && (delete this.A[d], (b = Number.parseInt(d, void 0)), this.Ja === b && (this.Ja = 0));
			}
			return a;
		}
	}
	const Cd = (a => {
		let b = void 0 === a ? 0 : a;
		return () => b++;
	})(1);
	function Dd(a, b) {
		return function () {
			b.ca.get(this) || Ed(b, this);
			return a.apply(this, arguments);
		};
	}
	function Ed(a, b) {
		const c = b.effect.getKeyframes(),
			d = b.effect.getTiming(),
			e = Cd(),
			f = O(a.J, b.effect.target);
		a.ca.set(b, e);
		b.effect && a.ca.set(b.effect, e);
		a.log({ t: 'wa', v: 'c', I: f, i: e, a: [c, d] });
		Fd(a, b, e);
	}
	function Gd(a) {
		const b = Object.getOwnPropertyDescriptor(Element.prototype, 'animate'),
			c = Object.getOwnPropertyDescriptor(Animation.prototype, 'play'),
			d = Object.getOwnPropertyDescriptor(Animation.prototype, 'pause'),
			e = Object.getOwnPropertyDescriptor(Animation.prototype, 'reverse'),
			f = Object.getOwnPropertyDescriptor(Animation.prototype, 'cancel'),
			g = Object.getOwnPropertyDescriptor(Animation.prototype, 'finish'),
			h = Object.getOwnPropertyDescriptor(Animation.prototype, 'updatePlaybackRate'),
			k = Object.getOwnPropertyDescriptor(Animation.prototype, 'currentTime'),
			l = Object.getOwnPropertyDescriptor(Animation.prototype, 'effect'),
			n = Object.getOwnPropertyDescriptor(Animation.prototype, 'startTime'),
			m = Object.getOwnPropertyDescriptor(Animation.prototype, 'playbackRate'),
			u = Object.getOwnPropertyDescriptor(window, 'Animation'),
			w = Object.getOwnPropertyDescriptor(KeyframeEffect.prototype, 'setKeyframes'),
			t = Object.getOwnPropertyDescriptor(KeyframeEffect.prototype, 'target'),
			r = Object.getOwnPropertyDescriptor(KeyframeEffect.prototype, 'composite'),
			y = Object.getOwnPropertyDescriptor(KeyframeEffect.prototype, 'pseudoElement'),
			A = Object.getOwnPropertyDescriptor(window.AnimationEffect.prototype, 'updateTiming');
		if (b && b.configurable) {
			const v = b.value;
			Object.defineProperty(
				Element.prototype,
				'animate',
				Object.assign({}, b, {
					value: function () {
						const q = v.apply(this, arguments);
						try {
							const p = Cd(),
								x = O(a.J, this);
							a.ca.set(q, p);
							a.ca.set(q.effect, p);
							a.log({ t: 'wa', v: 'c', I: x, i: p, a: Array.prototype.slice.apply(arguments) });
						} catch (p) {}
						return q;
					},
				}),
			);
		}
		if (c && c.configurable) {
			const v = c.value;
			Object.defineProperty(
				Animation.prototype,
				'play',
				Object.assign({}, c, {
					value: Dd(function () {
						const q = v.apply(this, arguments);
						try {
							const p = a.ca.get(this);
							if (!p) return q;
							a.log({ t: 'wa', v: 'p', i: p });
						} catch (p) {}
						return q;
					}, a),
				}),
			);
		}
		if (d && d.configurable) {
			const v = d.value;
			Object.defineProperty(
				Animation.prototype,
				'pause',
				Object.assign({}, d, {
					value: Dd(function () {
						const q = v.apply(this, arguments);
						try {
							const p = a.ca.get(this);
							if (!p) return q;
							a.log({ t: 'wa', v: 's', i: p });
						} catch (p) {}
						return q;
					}, a),
				}),
			);
		}
		if (e && e.configurable) {
			const v = e.value;
			Object.defineProperty(
				Animation.prototype,
				'reverse',
				Object.assign({}, e, {
					value: Dd(function () {
						const q = v.apply(this, arguments);
						try {
							const p = a.ca.get(this);
							if (!p) return q;
							a.log({ t: 'wa', v: 'r', i: p });
						} catch (p) {}
						return q;
					}, a),
				}),
			);
		}
		if (f && f.configurable) {
			const v = f.value;
			Object.defineProperty(
				Animation.prototype,
				'cancel',
				Object.assign({}, f, {
					value: Dd(function () {
						const q = v.apply(this, arguments);
						try {
							const p = a.ca.get(this);
							if (!p) return q;
							a.log({ t: 'wa', v: 'x', i: p });
						} catch (p) {}
						return q;
					}, a),
				}),
			);
		}
		if (g && g.configurable) {
			const v = g.value;
			Object.defineProperty(
				Animation.prototype,
				'finish',
				Object.assign({}, g, {
					value: Dd(function () {
						const q = v.apply(this, arguments);
						try {
							const p = a.ca.get(this);
							if (!p) return q;
							a.log({ t: 'wa', v: 'f', i: p });
						} catch (p) {}
						return q;
					}, a),
				}),
			);
		}
		if (h && h.writable) {
			const v = h.value;
			Object.defineProperty(
				Animation.prototype,
				'updatePlaybackRate',
				Object.assign({}, h, {
					value: Dd(function (q) {
						const p = this.currentTime,
							x = v.apply(this, arguments);
						try {
							const B = a.ca.get(this);
							if (!B) return x;
							const Q = this.currentTime;
							a.log({ t: 'wa', v: 'a', i: B, p: 'playbackRate', n: q });
							p !== Q &&
								a.log({
									t: 'wa',
									v: 'a',
									i: B,
									p: 'currentTime',
									n: Q,
								});
							'running' !== this.playState && a.log({ t: 'wa', v: 's', i: B });
							'running' === this.playState && a.log({ t: 'wa', v: 'p', i: B });
						} catch (B) {}
						return x;
					}, a),
				}),
			);
		}
		if (k && k.configurable) {
			const v = k.set;
			Object.defineProperty(
				Animation.prototype,
				'currentTime',
				Object.assign({}, k, {
					set: Dd(function (q) {
						const p = v.call(this, q);
						try {
							const x = a.ca.get(this);
							if (!x) return p;
							a.log({ t: 'wa', v: 'a', i: x, p: 'currentTime', n: q });
						} catch (x) {}
						return p;
					}, a),
				}),
			);
		}
		if (l && l.configurable) {
			const v = l.set;
			Object.defineProperty(
				Animation.prototype,
				'effect',
				Object.assign({}, l, {
					set: Dd(function (q) {
						const p = this.effect,
							x = v.call(this, q);
						try {
							const B = a.ca.get(this);
							if (!B) return x;
							a.ca.set(q, B);
							a.ca.delete(p);
							const Q = O(a.J, q.target),
								S = [q.getKeyframes(), q.getTiming()];
							a.log({ t: 'wa', v: 'e', i: B, I: Q, a: S });
							this.effect.pseudoElement && a.log({ t: 'wa', v: ':', i: B, n: this.effect.pseudoElement });
						} catch (B) {}
						return x;
					}, a),
				}),
			);
		}
		if (n && n.configurable) {
			const v = n.set;
			Object.defineProperty(
				Animation.prototype,
				'startTime',
				Object.assign({}, n, {
					set: Dd(function (q) {
						q = v.call(this, q);
						try {
							const p = a.ca.get(this);
							if (!p) return q;
							a.log({ t: 'wa', v: 'a', i: p, p: 'currentTime', n: this.currentTime });
						} catch (p) {}
						return q;
					}, a),
				}),
			);
		}
		if (m && m.configurable) {
			const v = m.set;
			Object.defineProperty(
				Animation.prototype,
				'playbackRate',
				Object.assign({}, m, {
					set: Dd(function (q) {
						const p = v.call(this, q);
						try {
							const x = a.ca.get(this);
							if (!x) return p;
							a.log({ t: 'wa', v: 'a', i: x, p: 'playbackRate', n: q });
						} catch (x) {}
						return p;
					}, a),
				}),
			);
		}
		if (u && u.configurable) {
			const v = window.Animation;
			Object.defineProperty(
				window,
				'Animation',
				Object.assign({}, b, {
					value: function () {
						try {
							var q = Oa(arguments, arguments.length + 1);
							q.unshift(v);
						} catch (p) {}
						q = new (v.bind.apply(v, q))();
						try {
							const p = Cd(),
								x = q.effect ? O(a.J, q.effect.target) : '',
								B = q.effect ? [q.effect.getKeyframes(), q.effect.getTiming()] : [];
							a.ca.set(q, p);
							q.effect && a.ca.set(q.effect, p);
							a.log({ t: 'wa', v: 'c', I: x, i: p, a: B, p: 'c' });
							q.effect && q.effect.pseudoElement && a.log({ t: 'wa', v: ':', i: p, n: q.effect.pseudoElement });
						} catch (p) {}
						return q;
					},
				}),
			);
		}
		if (w && w.configurable) {
			const v = w.value;
			Object.defineProperty(
				KeyframeEffect.prototype,
				'setKeyframes',
				Object.assign({}, w, {
					value: function () {
						const q = v.apply(this, arguments);
						try {
							const p = a.ca.get(this);
							if (!p) return q;
							a.log({ t: 'wa', v: 'k', i: p, a: Array.prototype.slice.apply(arguments) });
						} catch (p) {}
						return q;
					},
				}),
			);
		}
		if (t && t.configurable) {
			const v = t.set;
			Object.defineProperty(
				KeyframeEffect.prototype,
				'target',
				Object.assign({}, t, {
					set: function (q) {
						const p = v.call(this, q);
						try {
							const x = a.ca.get(this);
							if (!x) return p;
							const B = O(a.J, q);
							a.log({ t: 'wa', v: '@', i: x, I: B });
						} catch (x) {}
						return p;
					},
				}),
			);
		}
		if (r && r.configurable) {
			const v = r.set;
			Object.defineProperty(
				KeyframeEffect.prototype,
				'composite',
				Object.assign({}, r, {
					set: function (q) {
						const p = v.call(this, q);
						try {
							const x = a.ca.get(this);
							if (!x) return p;
							a.log({ t: 'wa', v: '=', i: x, n: q });
						} catch (x) {}
						return p;
					},
				}),
			);
		}
		if (y && y.configurable) {
			const v = y.set;
			Object.defineProperty(
				KeyframeEffect.prototype,
				'pseudoElement',
				Object.assign({}, y, {
					set: function (q) {
						const p = v.call(this, q);
						try {
							const x = a.ca.get(this);
							if (!x) return p;
							a.log({ t: 'wa', v: ':', i: x, n: q });
						} catch (x) {}
						return p;
					},
				}),
			);
		}
		if (A && A.configurable) {
			const v = A.value;
			Object.defineProperty(
				window.AnimationEffect.prototype,
				'updateTiming',
				Object.assign({}, A, {
					value: function () {
						const q = v.apply(this, arguments);
						try {
							const p = a.ca.get(this);
							a.log({ t: 'wa', v: 'u', i: p, a: Array.prototype.slice.apply(arguments) });
						} catch (p) {}
						return q;
					},
				}),
			);
		}
	}
	function Fd(a, b, c) {
		const d = b.playbackRate,
			e = b.playState;
		a.log({ t: 'wa', v: 'a', i: c, p: 'currentTime', n: b.currentTime });
		1 !== d && a.log({ t: 'wa', v: 'a', i: c, p: 'playbackRate', n: d });
		'paused' === e && a.log({ t: 'wa', v: 's', i: c });
	}
	class Hd {
		constructor(a) {
			this.J = a;
			this.ca = new this.J.B.D.da.contentWindow.WeakMap();
			this.A = null;
		}
		log(a) {
			Id(this.J, a);
			this.A && clearTimeout(this.A);
			this.A = setTimeout(() => {
				Jd(this.J, this.J.Ma, this.J.Ba);
				this.A = null;
			}, 50);
		}
	}
	class Kd {
		constructor() {
			this.resolve = null;
			this.md = new Promise(a => {
				this.resolve = a;
			});
		}
	}
	const Ld = /content:\s+"?(.+?)"?;/,
		Md = /[^\u0000-\u00ff]/,
		Od = (a, b, c = 0) => {
			if (10 < c) return [];
			let d = [];
			try {
				if (!b.cache.has(a) || b.cache.get(a).length !== a.cssRules.length) {
					const e = a.cssRules;
					for (let f = 0; f < e.length; ++f) {
						const g = e[f],
							h = b.hh(g).replace(Ld, Nd);
						if (g instanceof CSSImportRule) {
							let k = [];
							try {
								g.styleSheet && g.styleSheet.cssRules && (k = Od(g.styleSheet, b, c + 1));
							} catch (l) {
								k = [h];
							}
							d = d.concat(k);
						} else d.push(h);
					}
					b.cache.set(a, d);
				}
			} catch (e) {
				b.cache.set(a, []);
			}
			return b.cache.get(a);
		},
		Nd = (a, b) => (Md.test(b) ? `content: "\\${b.charCodeAt(0).toString(16)}";` : a);
	const Pd = a => a.cssText,
		Qd = a => {
			var b = a.cssText;
			if (a instanceof CSSStyleRule && ((b.includes('grid-template:') && a.style.gridTemplateAreas) || a.style.all)) {
				b = a.selectorText;
				a = a.style;
				var c = '';
				for (let d = 0; d < a.length; ++d) {
					const e = a[d],
						f = a.getPropertyValue(e),
						g = a.getPropertyPriority(e);
					c += `${e}:${f}${g ? ' !important' : ''};`;
				}
				a = c;
				return `${b} { ${a} }`;
			}
			if (a instanceof CSSMediaRule && b.includes('grid-template:')) {
				b = '';
				for (c = 0; c < a.cssRules.length; c++) b += Qd(a.cssRules[c]);
				return `@media ${a.conditionText} { ${b} }`;
			}
			if (a instanceof window.CSSSupportsRule && b.includes('grid-template:')) {
				b = '';
				for (c = 0; c < a.cssRules.length; c++) b += Qd(a.cssRules[c]);
				return `@supports ${a.conditionText} { ${b} }`;
			}
			return b;
		},
		Rd = a => Qd(a),
		Sd = a => Qd(a);
	function Td(a, b, c) {
		c = c.map(d => ({ hash: d, data: b[d], contentType: 'text/css' }));
		dd(
			a.A,
			'POST',
			`${a.A.g.G.hashResourceURL}/hashes`,
			function () {},
			function () {},
			a.A.B.D.stringify(c),
			'application/json',
		);
	}
	function Ud(a, b) {
		const c = Object.keys(b);
		if (0 !== c.length) {
			var d = a.A;
			dd(
				d,
				'POST',
				`${d.g.G.hashResourceURL}/hash-check`,
				function (e) {
					return C(function* () {
						try {
							if (200 == e.status) {
								var f = yield e.json();
								f.length && Td(a, b, f);
							}
						} catch (g) {}
					});
				},
				function () {},
				d.B.D.stringify(c),
				'application/json',
			);
		}
	}
	function Vd(a, b, c) {
		a.De[b] = c;
		a.oe ||
			(a.oe = setTimeout(
				() =>
					C(function* () {
						try {
							const d = Object.assign({}, a.De);
							a.De = Object.create(null);
							Ud(a, d);
						} catch (d) {
						} finally {
							a.oe = null;
						}
					}),
				a.A.g.G.resourceUploadDelay,
			));
	}
	class Wd {
		constructor(a) {
			this.De = Object.create(null);
			this.oe = null;
			this.A = a;
		}
	}
	const Xd = a =>
		new Promise(b => {
			function c(k) {
				e || ((e = !0), clearTimeout(f), (f = null), b(k));
			}
			function d() {
				if (a.sheet) return c('polling');
				g++;
				10 > g ? (f = setTimeout(d, 500)) : b(!1);
			}
			let e = !1,
				f,
				g = 0;
			const h = () => {
				c('node.addEventListener');
				a.removeEventListener('load', h, !1);
			};
			a.addEventListener('load', h, !1);
			f = setTimeout(d, 500);
		});
	const Yd = /\//g;
	function Zd(a) {
		'Safari' === a.A.Za.Ya && (a.L = Sd);
		'Chrome' === a.A.Za.Ya && (a.L = Rd);
	}
	function $d(a, b) {
		a.W.delete(b);
		a.ca.delete(b);
		b.ownerNode && a.ca.delete(b.ownerNode);
	}
	function ae(a) {
		return C(function* () {
			return (yield tc(a)).replace(Yd, '~');
		});
	}
	function be(a, b) {
		return C(function* () {
			const c = a.register(b);
			b.ownerNode && a.register(b.ownerNode, c);
			var d = Od(b, { hh: a.L, cache: a.W });
			if (!d.length) return { v: '' };
			d = d.join('');
			if (!a.A.g.G.hashResourceURL) return (c.vh = d), { v: d };
			if (a.A.g.K.Jf && a.A.fa(b.ownerNode, a.A.g.K.Jf)) return (c.vh = d), { v: d };
			c.hash = yield ae(d);
			(b.ownerNode ? a.A.g.K.rc || (a.A.g.K.bd && a.A.fa(b.ownerNode, a.A.g.K.bd)) : a.A.g.K.rc) && Vd(a.$, c.hash, d);
			return { h: c.hash };
		});
	}
	function ce(a, b) {
		return C(function* () {
			const c = b.cloneNode(!1);
			c.setAttribute('crossorigin', 'anonymous');
			c.removeAttribute('onload');
			c.addEventListener('error', () => J(a.A, 'CORS_LINK=' + encodeURIComponent(b.href)));
			const d = a.A.B.D.da.contentDocument;
			d.head.appendChild(c);
			if (!(yield Xd(c))) return { v: '' };
			const e = yield be(a, c.sheet);
			d.head.removeChild(c);
			return e;
		});
	}
	function de(a, b) {
		return C(function* () {
			if (a.A.g.K.ed && a.A.fa(b, a.A.g.K.ed)) var c = { v: '' };
			else if (yield Xd(b)) {
				try {
					c = !b.sheet.cssRules;
				} catch (d) {
					c = !0;
				}
				c = c ? ce(a, b) : be(a, b.sheet);
			} else c = { v: '' };
			return c;
		});
	}
	function ee(a, b) {
		return b instanceof CSSStyleSheet ? be(a, b) : b instanceof HTMLLinkElement ? de(a, b) : Promise.resolve({ v: '' });
	}
	function fe(a, b) {
		const c = a.register(b);
		c.Ed || ((c.Ed = new Kd()), a.O.push(b));
		return c.Ed.md;
	}
	function ge(a) {
		const b = a.O;
		a.O = [];
		const c = [];
		b.forEach(d => {
			const e = a.ca.get(d).Ed;
			c.push(e.md);
			ee(a, d).then(e.resolve);
		});
		return Promise.all(c);
	}
	class he {
		constructor(a) {
			this.A = a;
			this.ca = new this.A.B.D.da.contentWindow.WeakMap();
			this.O = [];
			this.W = new this.A.B.D.da.contentWindow.WeakMap();
			this.L = Pd;
			this.$ = new Wd(a);
		}
		register(a, b) {
			b = void 0 === b ? {} : b;
			this.ca.has(a) || this.ca.set(a, b);
			return this.ca.get(a);
		}
	}
	function ie(a) {
		a.ab = new MutationObserver(function (b) {
			b.every(c => 0 === c.removedNodes.length) ||
				(a.isConnected(a.O) || document.documentElement.appendChild(a.O), a.isConnected(a.da) || a.O.appendChild(a.da));
		});
		a.ab.observe(document.documentElement, { childList: !0 });
		a.ab.observe(a.O, { childList: !0, subtree: !0 });
	}
	function je(a) {
		a.Storage.setItem = a.da.contentWindow.Storage.prototype.setItem;
		a.Storage.getItem = a.da.contentWindow.Storage.prototype.getItem;
		a.Storage.removeItem = a.da.contentWindow.Storage.prototype.removeItem;
	}
	function ke(a) {
		a.stringify = a.da.contentWindow.JSON.stringify;
		a.Pa = a.da.contentWindow.JSON.parse;
		if (!Ia(a.stringify, a.Pa)) {
			const b = { Rg: a.da.contentWindow.Array.prototype, ph: a.da.contentWindow.Object.prototype };
			a.stringify = function () {
				this.J.G.cleanseJSON && Ja(arguments[0], b);
				return this.da.contentWindow.JSON.stringify.apply(null, arguments);
			};
			a.Pa = a.da.contentWindow.JSON.parse;
		}
	}
	function le(a) {
		const b = {
				HTMLElement: null,
				Element: null,
				Node: null,
				Document: null,
				DocumentFragment: null,
				ShadowRoot: null,
				MutationObserver: null,
				JSON: null,
				XMLHttpRequest: null,
				EventTarget: null,
				Event: null,
				Window: null,
				Date: null,
			},
			c = a.da.contentWindow;
		for (const z of Object.keys(b)) b[z] = c[z];
		const d = (Object.getOwnPropertyDescriptor(b.HTMLElement.prototype, 'innerText') || {}).get;
		a.innerText = z => d.call(z);
		const e = (Object.getOwnPropertyDescriptor(b.Element.prototype, 'children') || Object.getOwnPropertyDescriptor(b.HTMLElement.prototype, 'children') || {})
			.get;
		a.children = z => (z.children && e.call(z)) || void 0;
		const f =
			(Object.getOwnPropertyDescriptor(b.Element.prototype, 'shadowRoot') || {}).get ||
			function () {
				return null;
			};
		a.shadowRoot = z => f.call(z);
		const g = (Object.getOwnPropertyDescriptor(b.Document.prototype, 'adoptedStyleSheets') || {}).get;
		if (g)
			if (b.ShadowRoot) {
				const z = (Object.getOwnPropertyDescriptor(b.ShadowRoot.prototype, 'adoptedStyleSheets') || {}).get;
				a.ia = K => {
					if (me(a.J, K)) return z.call(K);
					if (K instanceof Document) return g.call(K);
				};
			} else
				a.ia = z => {
					if (z instanceof Document) return g.call(z);
				};
		const h = b.Document.prototype.getElementsByTagName;
		a.ad = (z, K) => h.call(z, K);
		const k = b.Element.prototype.querySelector,
			l = b.Document.prototype.querySelector,
			n = b.DocumentFragment.prototype.querySelector;
		a.ra = (z, K) =>
			K ? (z instanceof Document || z instanceof HTMLDocument ? l.call(z, K) : z instanceof DocumentFragment ? n.call(z, K) : k.call(z, K)) : null;
		const m = b.Element.prototype.querySelectorAll,
			u = b.Document.prototype.querySelectorAll,
			w = b.DocumentFragment.prototype.querySelectorAll;
		a.A = (z, K) =>
			K
				? z instanceof Document || z instanceof HTMLDocument
					? u.call(z, K)
					: z instanceof DocumentFragment
					? w.call(z, K)
					: m.call(z, K)
				: u.call(document, null);
		const t = b.Document.prototype.createNodeIterator;
		a.pa = (z, K, ya, La) => t.call(z, K, ya, La);
		const r = (Object.getOwnPropertyDescriptor(b.Node.prototype, 'isConnected') || {}).get;
		r && (a.isConnected = z => r.call(z));
		const y = (Object.getOwnPropertyDescriptor(b.Node.prototype, 'parentNode') || {}).get;
		a.parentNode = z => y.call(z);
		const A = (
			Object.getOwnPropertyDescriptor(b.Node.prototype, 'parentElement') ||
			Object.getOwnPropertyDescriptor(b.HTMLElement.prototype, 'parentElement') ||
			{}
		).get;
		a.parentElement = z => A.call(z);
		const v = (Object.getOwnPropertyDescriptor(b.Node.prototype, 'childNodes') || {}).get;
		a.childNodes = z => v.call(z);
		const q = (Object.getOwnPropertyDescriptor(b.Node.prototype, 'firstChild') || {}).get;
		a.Aa = z => q.call(z);
		Object.getOwnPropertyDescriptor(b.Node.prototype, 'lastChild');
		const p = (Object.getOwnPropertyDescriptor(b.Node.prototype, 'textContent') || {}).get;
		a.textContent = z => p.call(z);
		const x = b.Node.prototype.appendChild;
		a.appendChild = (z, K) => x.call(z, K);
		const B = b.Node.prototype.compareDocumentPosition;
		a.na = (z, K) => B.call(z, K);
		Object.getOwnPropertyDescriptor(b.Node.prototype, 'nextSibling');
		Object.getOwnPropertyDescriptor(b.Node.prototype, 'previousSibling');
		const Q = (Object.getOwnPropertyDescriptor(b.Node.prototype, 'nodeName') || {}).get;
		a.nodeName = z => Q.call(z);
		const S = b.Element.prototype.contains || b.HTMLElement.prototype.contains;
		a.$ = (z, K) => S.call(z, K);
		const za = b.Node.prototype.getRootNode;
		a.getRootNode = z => za.call(z);
		a.Ka = b.Date.now;
		a.wa = b.MutationObserver;
		if (b.EventTarget) {
			const z = b.EventTarget.prototype.addEventListener;
			a.addEventListener = (K, ya, La, kb, lb) => {
				try {
					return z.call(K, ya, La, kb, lb);
				} catch (ic) {
					return K.addEventListener(ya, La, kb, lb);
				}
			};
		} else {
			const z = b.Window.prototype.addEventListener,
				K = b.Node.prototype.addEventListener;
			a.addEventListener = (ya, La, kb, lb, ic) => (ya instanceof Window ? z.call(ya, La, kb, lb, ic) : K.call(ya, La, kb, lb, ic));
		}
		const pa = (Object.getOwnPropertyDescriptor(b.Event.prototype, 'target') || {}).get;
		a.L = z => pa.call(z);
		const Aa = (Object.getOwnPropertyDescriptor(b.Event.prototype, 'composed') || {}).get;
		a.Ea = z => Aa.call(z);
		const Ba = b.Event.prototype.composedPath;
		a.qa = z => Ba.call(z);
		const Ca = (Object.getOwnPropertyDescriptor(b.Element.prototype, 'tagName') || {}).get;
		a.tagName = z => (z && 1 === z.nodeType ? ((z = Ca.call(z)), 'string' == typeof z ? z : '') : '');
		const mh = Object.getOwnPropertyDescriptor(c, 'parent').get;
		a.W = z => mh.call(z);
		const nh = c.Object.prototype.toString;
		a.toString = z => nh.call(z);
		je(a);
	}
	class ne {
		constructor(a) {
			this.J = a;
			this.Ka = this.wa = this.Pa = this.stringify = this.da = this.ab = this.O = null;
			this.Storage = { setItem: null, getItem: null, removeItem: null };
			this.O = document.createElement('b');
			this.O.style.position = 'absolute';
			this.O.style.left = '-1000px';
			document.documentElement.appendChild(this.O);
			this.da = document.createElement('iframe');
			this.da.style.display = 'none';
			this.O.appendChild(this.da);
			try {
				this.da.contentWindow.scroll(0, 0);
			} catch (b) {
				Object.defineProperties(this.da, {
					contentWindow: { value: window },
					contentDocument: { value: document },
				}),
					this.da.setAttribute('data-qm-cross-origin', '');
			}
			ie(this);
			je(this);
			ke(this);
		}
		innerText(a) {
			return a.innerText;
		}
		children(a) {
			return a.children;
		}
		shadowRoot(a) {
			return a.shadowRoot;
		}
		ia(a) {
			return a.adoptedStyleSheets;
		}
		ad(a, b) {
			return a.getElementsByTagName(b);
		}
		ra(a, b) {
			return a.querySelector(b);
		}
		A(a, b) {
			return a.querySelectorAll(b);
		}
		pa(a, b, c, d) {
			return a.createNodeIterator(b, c, d);
		}
		isConnected(a) {
			let b = a.isConnected;
			void 0 === b && (b = this.J.Sd(document, a));
			return b;
		}
		parentNode(a) {
			return a.parentNode;
		}
		parentElement(a) {
			return a.parentElement;
		}
		childNodes(a) {
			return a.childNodes;
		}
		Aa(a) {
			return a.firstChild;
		}
		textContent(a) {
			return a.textContent;
		}
		appendChild(a, b) {
			return a.appendChild(b);
		}
		na(a, b) {
			return a.compareDocumentPosition(b);
		}
		$(a, b) {
			return a.contains(b);
		}
		getRootNode(a) {
			return a.getRootNode();
		}
		addEventListener(a, b, c, d, e) {
			return a.addEventListener(b, c, d, e);
		}
		toString(a) {
			return Object.prototype.toString.call(a);
		}
		L(a) {
			return a.target;
		}
		Ea(a) {
			return a.composed;
		}
		qa(a) {
			return a.composedPath();
		}
		tagName(a) {
			return a.tagName;
		}
		nodeName(a) {
			return a.nodeName;
		}
		W(a) {
			return a.windowParent;
		}
	}
	function oe(a, b) {
		const c = a.A.get(b);
		if (!c.interval) {
			const d = setInterval(() => {
				pe(a, b);
			}, 1e3);
			c.interval = d;
		}
	}
	function qe(a) {
		var b = document;
		b && (a.A.set(b, { jb: new window.Set(), interval: null, Zc: null }), oe(a, b));
	}
	function pe(a, b) {
		re(a, b);
		try {
			const c = Date.now(),
				d = a.A.get(b);
			d.jb.forEach(e => {
				const f = U(a.J, e);
				let g;
				'undefined' == typeof f.rg && (f.rg = c);
				const h = (c - f.rg) / 1e3;
				a.J.B.D.isConnected(e)
					? !f.we &&
					  h >= a.J.g.G.spinnerMaxSeconds &&
					  a.J.fa(e, a.J.g.K.xe) &&
					  ((g = `${se(a.J, e, 0, 0)}: Load exceeded ${a.J.g.G.spinnerMaxSeconds} seconds`), (f.we = !0), d.jb.delete(e))
					: (!f.we && h >= a.J.g.G.spinnerMinimumThreshold && ((g = `${se(a.J, e, 0, 0)}: ${D(h, 0)} spin seconds`), (f.we = !0)), d.jb.delete(e));
				g && V(a.J, -22, g);
			});
			oe(a, b);
		} catch (c) {}
		te(a);
	}
	function ue(a, b) {
		const c = a.A.get(b);
		c &&
			(a.L(c),
			(c.Zc = setTimeout(() => {
				pe(a, b);
			}, 300)));
	}
	function ve(a) {
		a.A.forEach(a.L);
		a.A.clear();
	}
	function te(a) {
		const b = [];
		a.A.forEach((c, d) => {
			a.J.B.D.isConnected(d) || b.push(d);
		});
		b.forEach(c => {
			a.A.delete(c);
		});
	}
	function re(a, b) {
		const c = a.A.get(b);
		c &&
			Ub(a.J, b, a.J.g.K.xe).forEach(d => {
				c.jb.add(d);
			});
	}
	class we {
		constructor(a) {
			this.J = a;
			this.A = new window.Map();
		}
		L(a) {
			a.interval && (clearInterval(a.interval), (a.interval = null));
			a.Zc && (clearTimeout(a.Zc), (a.Zc = null));
		}
	}
	function xe(a, b, c) {
		b = gd(a.J.g.K.Lb, a.J.g.K.Tb, b).slice(-a.J.Hh);
		M(a.J.R, { id: c, oa: 2, flags: 0, ga: Date.now() }, b);
	}
	function ye(a, b) {
		b.complete && 0 === b.naturalHeight
			? xe(a, b.src, -62)
			: a.J.ma.getEntriesByName(b.src).forEach(c => {
					c.duration > a.J.g.G.slowLoadingImageThreshold && xe(a, b.src, -63);
			  });
	}
	class ze {
		constructor(a) {
			this.J = a;
			this.Qb = this.Qb.bind(this);
			this.A = this.A.bind(this);
		}
		A(a) {
			let b;
			xe(this, null != (b = a.target.src) ? b : a.target.srcset.split(', ')[0], -62);
		}
		Qb(a) {
			ye(this, a.target);
		}
	}
	const Ae = [/^(query|mutation)\s+?([\w\d]+)/, /^(query|mutation).*?{\s*?([\w\d]+)/, /^(?!query|mutation)\{([\w\d]+)[\s{(]+/];
	function Be(a, b) {
		return Object.keys(b).find(c => a.has(c));
	}
	function Ce(a) {
		var { qh: b, ld: c } = a;
		return [b, c].filter(d => d).join('/');
	}
	function De(a) {
		if ('string' === typeof a)
			try {
				return JSON.parse(a);
			} catch (b) {}
		else if ('object' === typeof a) return a;
	}
	function Ee(a, b) {
		var [c, d] = b;
		if ((a = De(a))) {
			if ((b = Be(c, a)))
				for (let e = 0; e < Ae.length; e++) {
					const f = Ae[e].exec(a[b]);
					if (f && !(1 >= f.length)) {
						if (2 === f.length) return { ld: f[1] };
						{
							const [g, h] = f.slice(1);
							if (h && g) return { ld: h, qh: g };
						}
						return;
					}
				}
			if ((b = Be(d, a))) return { ld: a[b] };
		}
	}
	const Fe = [
		{
			path: /(graphql|gql)/i,
			parse: function (a, b, c) {
				const d = new window.Set(['query']),
					e = new window.Set(['operationName']);
				var f = new window.Set(['error', 'errors']),
					g = new window.Set(['status', 'code', 'errorCode']);
				a = {};
				if (b) {
					a: {
						var [h, k] = [f, g];
						if ((f = De(b)))
							if ((b = Be(h, f)))
								for (b = f[b], Array.isArray(b) || (b = [b]), f = 0; f < b.length; f++)
									if ((g = Be(k, b[f])))
										if (((g = parseInt(b[f][g], 10)), !isNaN(g))) {
											b = g;
											break a;
										}
						b = void 0;
					}
					b && (a.status = b);
				}
				c && ((c = Ee(c, [d, e]) || {}), c.ld && Object.assign(a, Object.assign({}, c, { path: Ce(c) })));
				return a;
			},
		},
	];
	function Ge(a = '') {
		return a.split('?')[0];
	}
	function He(a, b = []) {
		a.A = [].concat(b, Fe);
	}
	function Ie(a, b) {
		const c = Ge(b);
		let d = a.cache.get(c);
		d || ((d = a.A.find(e => b.match(e.path))) && a.cache.set(c, d));
		return d;
	}
	class Je {
		constructor() {
			this.A = [];
			this.cache = new window.Map();
		}
	}
	let Ke;
	window.addEventListener(
		'qm-shopify',
		() => {
			Le();
			Ke = document.body.appendChild(document.createElement('qm-shopify-checkout'));
		},
		{ once: !0 },
	);
	window.addEventListener('qm-shopify', a => {
		let { name: b, context: c, data: d } = a.detail;
		switch (b) {
			case 'page_viewed':
				document.title = c.document.title;
				Ke.setAttribute('title', c.document.title);
				history.pushState('', '', c.window.location.pathname);
				Ke.removeAttribute('input-id');
				break;
			case 'input_focused':
			case 'input_changed':
				Ke.setAttribute('input-id', d.element.id);
		}
	});
	function Le() {
		const a = new Worker(URL.createObjectURL(new Blob(['onmessage=e=>setTimeout(p=>p.postMessage(null),e.data,e.ports[0])'])));
		setTimeout = (b, c, ...d) => {
			const e = new MessageChannel();
			e.port1.onmessage = () => b(...d);
			a.postMessage(0 | c, [e.port2]);
			return 0;
		};
	}
	class Me {
		constructor(a, b) {
			this.A = a;
			if ((this.ja = b)) {
				if (!/checkout/.test(this.ja.init.context.window.location.pathname)) return this.A.stop();
				Le();
				this.A.start();
				setTimeout(() => this.start(), 50);
			}
		}
		start() {
			let a = document.createElement('qm-shopify-checkout');
			this.ja.analytics.subscribe('page_viewed', b => {
				document.title = b.context.document.title;
				a.setAttribute('title', b.context.document.title);
				a.removeAttribute('input-id');
				history.pushState('', '', b.context.window.location.pathname);
			});
			this.ja.analytics.subscribe('input_focused', b => {
				a.setAttribute('input-id', b.data.element.id);
			});
			this.ja.analytics.subscribe('input_changed', b => {
				a.setAttribute('input-id', b.data.element.id);
			});
			this.ja.analytics.subscribe('all_events', b => {
				P(this.A, { t: 'shp', I: b.name });
				Zc(this.A.ja, 'shopify', { name: b.name, data: b.data });
			});
			document.body.appendChild(a);
		}
	}
	const Ne = Object.freeze({ start: null, $c: 0 });
	class Oe {
		constructor(a, b) {
			this.J = a;
			const [, , c, d] = Pe(this.J, b);
			this.W = this.$ = 0;
			this.Ea = d;
			this.Aa = c;
			this.ia = this.na = this.pa = 0;
			this.L = [];
			this.wa = Qe(this.J.B.Fe, b);
			this.qa = this.ra = 0;
			this.A = Object.assign({}, Ne);
			this.Na = !('onscrollend' in window);
			this.O = null;
			b == document && (b = document.documentElement);
			this.cache(b);
		}
		cache(a) {
			const [b, c, d, e] = Pe(this.J, a);
			this.ra = c;
			this.qa = b;
			this.pa = e;
			this.na = d;
		}
		fe(a) {
			const b = this.J.B.D.da.contentWindow.Date.now(),
				[c, d] = Pe(this.J, a);
			this.A.$c += Math.abs(this.ra - d) + Math.abs(this.qa - c);
			this.ia += this.A.$c;
			c > this.W && (this.W = c);
			d > this.$ && (this.$ = d);
			this.A.start || (this.A.start = b);
			this.cache(a);
			this.Na &&
				(this.O && clearTimeout(this.O),
				(this.O = setTimeout(() => {
					this.kd();
				}, 150)));
		}
		kd() {
			const a = (this.J.B.D.da.contentWindow.Date.now() - this.A.start) / 1e3,
				b = this.A.$c;
			b && a && (this.L.splice(0, 0, D(b / a, 2)), (this.L = this.L.slice(0, 20)));
			this.A = Object.assign({}, Ne);
			this.O && (this.O = null);
		}
		toJSON() {
			const a = this.L.length ? D(this.L.reduce((b, c) => b + c, 0) / this.L.length, 2) : 0;
			return {
				ev: this.wa,
				d: this.ia,
				my: this.$,
				mx: this.W,
				iy: this.Ea,
				ix: this.Aa,
				ay: this.pa,
				ax: this.na,
				av: a,
			};
		}
	}
	function Re(a, b) {
		let c = a.O.get(b);
		c || ((c = new Oe(a.J, b)), a.O.set(b, c));
		return c;
	}
	function Se(a, b) {
		a.ra.add(b);
		a.timeout && clearTimeout(a.timeout);
		a.timeout = setTimeout(a.ia, 1500);
	}
	function Te(a, b) {
		let { scrollHeight: c, clientHeight: d, scrollWidth: e, clientWidth: f } = b;
		if (c <= d && e <= f) return !1;
		let { overflowX: g, overflowY: h } = a.J.B.D.da.contentWindow.getComputedStyle(b);
		return [g, h].some(k => /^(?:auto|scroll)$/.test(k));
	}
	class Ue {
		constructor(a) {
			this.J = a;
			this.O = new this.J.B.D.da.contentWindow.WeakMap();
			this.ra = new this.J.B.D.da.contentWindow.Set();
			this.Ea = this.Na = this.md = this.timeout = null;
			this.na = this.Aa = this.A = this.W = this.L = 0;
			this.wa = this.pa = null;
			this.qa = [];
			this.$ = this.$.bind(this);
			this.ia = this.ia.bind(this);
		}
		ia() {
			const a = Array.from(this.ra).map(b => this.O.get(b).toJSON());
			W(this.J, 'sts', a);
			this.timeout = null;
			this.ra = new this.J.B.D.da.contentWindow.Set();
		}
		fe(a) {
			Re(this, a).fe(a);
			Se(this, a);
		}
		kd(a) {
			(a = this.O.get(a)) && a.kd();
		}
		cache(a) {
			Re(this, a);
			Se(this, a);
		}
		$() {
			this.qa.forEach(a => {
				this.J.B.D.isConnected(a) && Te(this, a) && this.cache(a);
			});
			this.qa = [];
			this.wa = null;
		}
	}
	function Ve(a) {
		const b = a.A.Tg;
		a.A.Tg = function () {
			b.call(this);
			this.g.G.hashUploadPercent = 100;
			this.g.G.percentSampling = 100;
			this.g.G.sampleReplay = 100;
			this.g.G.publishInterval = 500;
		};
	}
	function We(a) {
		if (!a.L) {
			var b = id(),
				c = a.A.Z.get('isRecording', !1);
			if (b.get(a.A.g.G.bookmarkToolbarQueryParamName) || c)
				Ve(a),
					(c = a.A.og),
					(b = document.createElement(ma(c))),
					(b.type = 'text/javascript'),
					(b.async = 1),
					(b.src = a.A.g.G.bookmarkToolbarURL),
					(b.crossOrigin = 'anonymous'),
					(c = a.A.B.D.ad(document, ma(c))[0]),
					c.parentNode.insertBefore(b, c),
					a.A.Z.set('isRecording', !0),
					a.A.ja.getSessionVar('sst', null) || a.A.ja.setSessionVar('sst', Date.now());
		}
	}
	function Xe(a, b) {
		const c = b.action;
		if (c)
			switch (c) {
				case 'recorder-cleanup':
					a.L = !0;
					Ye(a.A);
					setTimeout(() => {
						window.close();
					}, 350);
					break;
				default:
					console.warn('QM: Unknown recorder action');
			}
		else console.warn('QM: Missing recorder action:', b);
	}
	class Ze {
		constructor(a) {
			this.A = a;
			this.L = !1;
		}
	}
	function $e(a) {
		let b = '';
		for (let c = 0; c < a.length; c += 2) b += String.fromCharCode((a[c] << 8) | a[c + 1]);
		return b;
	}
	function af(a) {
		let b = new Uint8Array(2 * a.length);
		for (let c = 0; c < a.length; c++) {
			let d = a.charCodeAt(c),
				e = 2 * c;
			b[e] = (d >> 8) & 255;
			b[e + 1] = d & 255;
		}
		return b;
	}
	function bf(a) {
		a = new Uint8Array(a);
		let b = '';
		for (let c = 0; c <= a.length; c += 65e3) b += String.fromCharCode.apply(null, a.slice(c, c + 65e3));
		return btoa(b);
	}
	function cf(a) {
		a = atob(a)
			.split('')
			.map(b => b.charCodeAt(0));
		return new Uint8Array(a);
	}
	function df(a) {
		return a.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
	}
	class ef {
		constructor(a) {
			this.O = a;
			this.L = this.A = null;
			this.importKey();
		}
		importKey() {
			const a = this;
			return C(function* () {
				try {
					if (a.O && !a.L) {
						var b = { kty: 'RSA', alg: ra, ext: !1, key_ops: ['encrypt'], e: 'AQAB', n: df(bf(a.O[0])) };
						a.A = new Promise((c, d) => {
							try {
								ff.importKey('jwk', b, { name: qa, hash: { name: na } }, !1, ['encrypt'])
									.then(e => {
										a.L = e;
										c(e);
									})
									.catch(e => {
										d(e);
									});
							} catch (e) {
								d(e);
							}
						});
					}
				} catch (c) {}
			});
		}
		encrypt(a) {
			const b = this;
			return C(function* () {
				!b.L && b.A && (yield b.A);
				try {
					if ((!b.L && b.A && (yield b.A, (b.A = null)), b.L))
						try {
							return yield ff.encrypt({ name: qa }, b.L, a);
						} catch (c) {
							return new ArrayBuffer(0);
						}
				} catch (c) {
					return new ArrayBuffer(0);
				}
			});
		}
	}
	class gf {
		constructor(a) {
			this.O = a;
			this.L = this.A = null;
			this.W = new Uint8Array(16);
			this.importKey();
		}
		importKey() {
			const a = this;
			return C(function* () {
				a.O &&
					!a.L &&
					(df(bf(a.O)),
					(a.A = new Promise(b => {
						try {
							ff.importKey('raw', a.O, oa, !1, ['encrypt'])
								.then(c => {
									a.L = c;
									b();
								})
								.catch(() => {
									b();
								});
						} catch (c) {
							b();
						}
					})));
			});
		}
		encrypt(a) {
			const b = this;
			return C(function* () {
				!b.L && b.A && (yield b.A);
				try {
					!b.L && b.A && (yield b.A, (b.A = null));
					if (b.L) {
						const c = af(a);
						return yield ff.encrypt({ name: oa, iv: b.W }, b.L, c);
					}
					return new ArrayBuffer(0);
				} catch (c) {
					return new ArrayBuffer(0);
				}
			});
		}
	} /*
	 MIT
	*/
	var hf = null,
		ff = null;
	class jf {
		constructor(a, b, c, d) {
			Object.defineProperties(this, {
				Pg: { value: a },
				type: { value: a.type, enumerable: !0 },
				extractable: { value: void 0 === c ? a.extractable : c, enumerable: !0 },
				algorithm: { value: void 0 === b ? a.algorithm : b, enumerable: !0 },
				usages: { value: void 0 === d ? a.usages : d, enumerable: !0 },
			});
		}
	}
	function kf() {
		function a(l) {
			var n = { name: (l.name || l || '').toUpperCase().replace('V', 'v') };
			switch (n.name) {
				case oa:
					l.length && (n.length = l.length);
					break;
				case qa:
					l.hash && (n.hash = a(l.hash)),
						l.publicExponent && (n.publicExponent = new Uint8Array(l.publicExponent)),
						l.modulusLength && (n.modulusLength = l.modulusLength);
			}
			return n;
		}
		function b(l) {
			if (l instanceof ArrayBuffer || l instanceof Uint8Array) l = JSON.parse(decodeURIComponent(escape($e(l))));
			var n = { kty: l.kty, alg: l.alg, ext: l.ext || l.extractable };
			switch (n.kty) {
				case 'oct':
					n.k = l.k;
				case 'RSA':
					'n e d p q dp dq qi oth'.split(' ').forEach(function (m) {
						m in l && (n[m] = l[m]);
					});
			}
			return n;
		}
		function c(l) {
			l = b(l);
			h && ((l.extractable = l.ext), delete l.ext);
			l = unescape(encodeURIComponent(JSON.stringify(l)));
			for (var n = new Uint8Array(l.length), m = 0, u = l.length; m < u; m++) n[m] = l.charCodeAt(m);
			return n.buffer;
		}
		var d = window.crypto || window.msCrypto;
		if (d) {
			var e = d.subtle || d.webkitSubtle;
			if (e) {
				var f = window.Crypto || d.constructor || Object,
					g = -1 < window.navigator.userAgent.indexOf('Edge/'),
					h = !!window.msCrypto && !g;
				g = !d.subtle && !!d.webkitSubtle;
				if (h || g) {
					['generateKey', 'importKey'].forEach(function (l) {
						var n = e[l];
						e[l] = function (m, u, w) {
							var t = [].slice.call(arguments);
							switch (l) {
								case 'generateKey':
									var r = a(m);
									var y = u;
									var A = w;
									break;
								case 'importKey':
									(r = a(w)),
										(y = t[3]),
										(A = t[4]),
										'jwk' === m &&
											((u = b(u)), u.alg || (u.alg = { Ch: { Dh: ra }, Bh: { 256: sa } }[r.name][(r.hash || {}).name || r.length || '']), (t[1] = c(u)));
							}
							try {
								var v = n.apply(e, t);
							} catch (q) {
								return Promise.resolve();
							}
							h &&
								(v = new Promise(function (q, p) {
									v.onabort = v.onerror = function (x) {
										p(x);
									};
									v.oncomplete = function (x) {
										q(x.target.result);
									};
								}));
							return (v = v.then(function (q) {
								0 == r.name.search('RSA') &&
									(r.modulusLength || (r.modulusLength = (q.publicKey || q).algorithm.modulusLength),
									r.publicExponent || (r.publicExponent = (q.publicKey || q).algorithm.publicExponent));
								q.publicKey && q.privateKey
									? (q = { publicKey: new jf(q.publicKey, r, y, !1), privateKey: new jf(q.privateKey, r, y, !1) })
									: (q = new jf(q, r, y, A));
								return q;
							}));
						};
					});
					['encrypt'].forEach(function (l) {
						var n = e[l];
						e[l] = function (m, u, w, t) {
							var r = [].slice.call(arguments);
							a(m);
							h && u.algorithm.hash && (r[0].hash = r[0].hash || u.algorithm.hash);
							r[1] = u.Pg;
							try {
								var y = n.apply(e, r);
							} catch (A) {
								return Promise.reject(A);
							}
							h &&
								(y = new Promise(function (A, v) {
									y.onabort = y.onerror = function (q) {
										v(q);
									};
									y.oncomplete = function (q) {
										A(q.target.result);
									};
								}));
							return y;
						};
					});
					if (h) {
						var k = e.digest;
						e.digest = function (l, n) {
							try {
								var m = k.call(e, l, n);
							} catch (u) {
								return Promise.reject(u);
							}
							return (m = new Promise(function (u, w) {
								m.onabort = m.onerror = function (t) {
									w(t);
								};
								m.oncomplete = function (t) {
									u(t.target.result);
								};
							}));
						};
						hf = Object.create(d, {
							getRandomValues: {
								value: function (l) {
									return d.getRandomValues(l);
								},
							},
							subtle: { value: e },
						});
					}
					g && ((d.subtle = e), (hf = f));
				}
			}
		}
	}
	function tc(a) {
		if ('object' == typeof msCrypto)
			var b = new Promise(c => {
				var d = lf(a);
				d = msCrypto.subtle.digest('SHA-256', d);
				c(d);
			});
		else (b = 'TextEncoder' in window ? new TextEncoder().encode(a) : lf(a)), (b = crypto.subtle.digest('SHA-256', b));
		return b.then(c => btoa(String.fromCharCode.apply(null, new Uint8Array(c, 0, 8))));
	}
	function zc(a, b) {
		return C(function* () {
			if (b && a.supports) {
				const c = yield ff.digest('SHA-256', af(b.toString().toLowerCase()));
				return bf(c);
			}
			return '';
		});
	}
	function mf(a) {
		return C(function* () {
			if (window.crypto || hf) (hf = window.crypto || hf), (ff = hf.subtle);
			if (ff) {
				a.supports = !0;
				if (!a.A || 32 != a.A.length) {
					a.A = new Uint8Array(32);
					hf.getRandomValues(a.A);
					try {
						var b = JSON.parse(atob(a.W)).map(cf);
					} catch (c) {}
					b = new ef(b);
					a.O = yield b.encrypt(a.A);
				}
				a.L = new gf(a.A);
				a.$ && (a.ia(), (a.$ = !1));
			}
		});
	}
	function nf(a) {
		return a.O && a.W ? 'v2:' + bf(a.O) : '';
	}
	function lf(a) {
		a = unescape(encodeURIComponent(a));
		const b = new Uint8Array(a.length);
		for (let c = 0; c < a.length; ++c) b[c] = a.charCodeAt(c);
		return b;
	}
	class of {
		constructor(a, b) {
			a && (kf(), (this.W = a), (this.L = this.O = this.A = this.publicKey = null), (this.ia = b), (this.$ = !0), (this.supports = !1), (this.na = mf(this)));
		}
		encrypt(a) {
			const b = this;
			return C(function* () {
				if (!a || 0 == a.trim().length) return '';
				if (!b.W || !b.supports) return '*';
				try {
					if ((b.L || (yield b.na), a && 'string' == typeof a && b.L)) {
						try {
							var c = yield b.L.encrypt(a);
						} catch (d) {}
						return bf(c);
					}
				} catch (d) {}
				return '*';
			});
		}
	}
	function pf(a, b) {
		a.A = {};
		try {
			const c = qf(a);
			for (let d = 0; d < c.length; d++) {
				const e = a.O.Storage.getItem.call(window[c[d]], b);
				if (e) {
					a.A = a.O.Pa(e);
					break;
				}
			}
		} catch (c) {}
		rf(a.A) && a.clear();
	}
	function sf(a) {
		try {
			window.addEventListener('storage', b => {
				b.key == a.L && pf(a, a.L);
			});
		} catch (b) {}
	}
	function rf(a) {
		return (a = Na(a, ['exp'], !1)) && Date.now() > new Date(a).getTime() ? !0 : !1;
	}
	function qf(a) {
		return a.J.g.G[a.$].filter(b => 'localStorage' == b || 'sessionStorage' == b);
	}
	function tf(a, b, c, d) {
		c = void 0 === c ? null : c;
		d = void 0 === d ? !0 : d;
		try {
			const e = a.O.stringify(a.A),
				f = qf(a);
			for (let g = 0; g < f.length; g++) a.O.Storage.setItem.call(window[f[g]], c || a.L, e);
			d && ad(a.W, b);
		} catch (e) {}
	}
	class uf {
		constructor(a, b, c, d) {
			this.J = a;
			this.L = b;
			this.$ = c;
			this.A = null;
			this.W = new bd();
			this.O = d;
			pf(this, this.L);
			sf(this);
		}
		get(a, b) {
			rf(this.A) && this.clear();
			return Na(this.A, a, b);
		}
		set(a, b) {
			if ('string' !== typeof a) throw Error('path must be a string');
			this.J.set(this.A, a, b);
			tf(this, { t: 'set', path: a, value: b });
			return !0;
		}
		Sb(a) {
			return this.J.Sb(this.A, a) ? (tf(this, 'unset'), !0) : !1;
		}
		import(a) {
			this.A = Object.assign({}, this.A, a);
			tf(this, 'import');
		}
		clear() {
			this.A = {};
			tf(this, 'clear');
		}
		archive(a) {
			tf(this, 'archive', a, !1);
		}
		restore(a) {
			pf(this, a);
			tf(this, 'restore', this.L, !0);
		}
	}
	const wf = a => {
			const { operator: b } = a;
			if ('and' === b) return vf(a.contents.map(wf));
			if ('or' === b) return xf(a.contents.map(wf));
			if ('not' === b) return yf(wf(a.contents));
			if ('contains' === b) return zf(a);
			if ('equals' === b) return Af(a);
			if ('starts_with' === b) return Bf(a);
			if ('ends_with' === b) return Cf(a);
			if ('regex' === b) return Df(a);
			if ('default' === b) return Ef();
			throw Error(`Unrecognized operator "${b}"`);
		},
		vf = a => b => a.every(c => c(b)),
		xf = a => b => a.some(c => c(b)),
		yf = a => b => !a(b),
		zf = a => b => b[a.facet].includes(a.value),
		Af = a => b => b[a.facet] === a.value,
		Bf = a => b => b[a.facet].startsWith(a.value),
		Cf = a => b => b[a.facet].endsWith(a.value),
		Df = a => {
			const b = new RegExp(a.value);
			return c => b.test(c[a.facet]);
		},
		Ef = () => () => !0;
	const Ff = a => {
		a = Object.assign({}, a);
		a.syncURL || (a.syncURL = a.reportURL);
		if (a.fallbackReportURLS && a.fallbackReportURLS.length) {
			a.fallbackReportURLS.push(a.reportURL);
			var b = window.sessionStorage.getItem('qm-nidx');
			b && isFinite(+b) && ((a.reportURL = a.fallbackReportURLS[parseInt(b, 10)]), (a.syncURL = a.reportURL));
		}
		b = new window.Set(a.excludeXHRHeaderRegEx.map(d => d.p + '|' + d.f));
		const c = Oa(Kc.excludeXHRHeaderRegEx);
		for (let d = 0; d < c.length; ++d) {
			const e = c[d];
			b.has(e.p + '|' + e.f) || a.excludeXHRHeaderRegEx.push(e);
		}
		a.spaTransitionStartMarkerName &&
			((b = a.performanceMarkerWhitelist.map(d => d.p)),
			-1 === b.indexOf(a.spaTransitionStartMarkerName) && a.performanceMarkerWhitelist.push({ p: a.spaTransitionStartMarkerName, f: '' }),
			-1 === b.indexOf(a.spaTransitionStopMarkerName) && a.performanceMarkerWhitelist.push({ p: a.spaTransitionStopMarkerName, f: '' }));
		!a.hookFetch && a.hookFetchExtra && (a.hookFetchExtra = !1);
		return a;
	};
	const Gf = (a, b) => {
		b.Cd = 0 < a.dataScrubRE.length ? R(a.dataScrubRE) : [wa];
		b.se = R(a.scrubDocumentTitlePatterns);
		b.wh = R(a.urlMonitorBlacklist);
		b.tf = R(a.blacklistedURLs);
		b.ye = R(a.startImmediatePathPatterns);
		b.He = R(a.waitForSessionIdPathPatterns);
		b.tg = R(a.startWithoutParentPathPatterns);
		if (0 < a.dataScrubWhiteList.length) {
			b.eb = a.dataScrubWhiteList.join(',');
			const { bc: f, jc: g } = Ic(a.dataScrubWhiteList);
			b.vf = f.join(',');
			b.wf = g.join(',');
		}
		a.dataScrubWhiteList && 0 < a.dataScrubWhiteList.length && (b.bh = a.dataScrubWhiteList);
		b.Zg = a.dataScrubBlackList;
		a.dataEncryptWhiteList && 0 < a.dataEncryptWhiteList.length && (b.Yg = a.dataEncryptWhiteList);
		b.$d = R(a.maskSensitiveWindowDialogs);
		b.Bf = R(a.encryptSensitiveWindowDialogs);
		a.excludeDOMList && 0 < a.excludeDOMList.length && (b.Bb = a.excludeDOMList.join(','));
		b.Fg = R(a.xhrHookWhiteListDetails);
		b.Dg = R(a.xhrHookBlackListDetails);
		b.Gg = R(a.xhrPerformanceWhitelistDetails);
		b.Eg = R(a.xhrHookWhiteList);
		b.Cg = R(a.xhrHookBlackList);
		b.Bg = R(a.xhrErrorBlacklist);
		b.Dd = a.dataScrubXHRRegExes.reduce((f, g) => {
			const h = 'd' + (g.f.includes('g') ? g.f : g.f + 'g');
			(g = md(g.p, h)) && f.push(g);
			return f;
		}, []);
		var c = R(a.excludeRageRE);
		b.Ef = c.length ? c : [Da];
		b.Gd = a.excludeRageCSS.join(',');
		b.ne = R(a.replaceURLRegExes.map(f => Object.assign({}, f, { f: f.f.includes('g') ? f.f : f.f + 'g' })));
		c = xa.concat(a.urlTransforms);
		var d = [];
		for (var e = 0; e < c.length; e++) {
			const { re: f, rep: g } = c[e],
				h = md(f.p, f.f);
			h && d.push([h, g]);
		}
		b.Tb = d;
		b.Pd = a.ignoreChangesList.join(',');
		b.Hd = R(a.excludeXHRHeaderRegEx);
		b.xe = a.spinnerSelectorList.join(',');
		b.rc = new Date().getTime() % 100 < a.hashUploadPercent;
		b.kb = [];
		for (c = 0; c < a.transformAttributesForNodesList.length; ++c) {
			const {
				sel: f,
				attr: g,
				re: { p: h, f: k },
				rep: l,
				newAttr: n,
			} = a.transformAttributesForNodesList[c];
			(d = md(h, k)) && b.kb.push({ ta: f, pf: g, hg: d, ig: l, Zf: n });
		}
		b.ie = R(a.performanceMarkerWhitelist);
		b.je = R(a.performanceMeasureWhitelist);
		b.jg = R(a.resourcePathBlacklist);
		c = b.Z ? b.Z.get('replayEnabled', !0) : !0;
		b.ka = b.Qf && a.replayEnabled && !!c;
		c = Pa(a.ignoreAttributes);
		b.Kf = c.global;
		b.pg = c.selected;
		b.dc = !b.Rd && a.hookFetch;
		b.Mf = !b.Rd && a.hookFetchExtra;
		b.Ag = R(a.xhrEncryptWhiteListDetails);
		b.zg = R(a.xhrEncryptBlackListDetails);
		for (c = 0; c < Kc.forceElementCSSUpload.length; ++c)
			(d = Kc.forceElementCSSUpload[c]), a.forceElementCSSUpload.includes(d) || a.forceElementCSSUpload.push(d);
		b.bd = a.forceElementCSSUpload.join(',');
		b.Jf = a.forceElementCSSInline.join(',');
		b.ed = a.ignoreElementCSSSerialization.join(',');
		b.Lb = new window.Set(a.maskSensitiveQueryParams.map(f => f.toLowerCase()));
		b.yg = R(a.whitelistedURLs);
		c = Array.from(new window.Set(a.imageTrackingIgnoreList.concat(Kc.imageTrackingIgnoreList)));
		b.Qd = c.join(',');
		c = [];
		for (d = 0; d < a.blockFrequentReloads.length; ++d) {
			const { re: f, count: g } = a.blockFrequentReloads[d];
			(e = md(f.p, f.f)) && c.push({ re: e, count: g });
		}
		b.Wc = c;
		b.ug = R(a.syncEndpointsWithSDK);
		b.ub = a.dataScrubBlackList.includes('*');
		0 > a.sessionPersistenceMediums.indexOf('localStorage') &&
			0 > a.sessionPersistenceMediums.indexOf('sessionStorage') &&
			a.sessionPersistenceMediums.push('localStorage');
		b.dd = a.hoverTargets.join(',');
	};
	const Hf = a => a[a.length - 1],
		If = a => ('value' in a ? { pred: wf(a.pred), value: a.value } : { pred: wf(a.pred), rules: a.rules.map(If) }),
		Jf = (a, b) => ('value' in a ? a.value : a.rules.reduce((c, d) => (d.pred(b) ? c.concat(d.value) : c), []));
	function Kf(a) {
		var b = { url: window.location.href };
		const c = {};
		for (const d in a.A) {
			const e =
				a.A[d].find(f => {
					({ pred: f } = f);
					return f(b);
				}) || Hf(a.A[d]);
			c[d] = Jf(e, b);
		}
		return c;
	}
	function Lf(a) {
		var b = [...a.G.dataScrubWhiteList];
		if ('function' == typeof window.QuantumMetricConfigureDataScrubWhiteList)
			try {
				b = window.QuantumMetricConfigureDataScrubWhiteList(b);
			} catch (g) {
				console.error('QM: Unable to reconfigure encryption scrub white list because:', g);
			}
		const { bc: c, jc: d } = Ic(b);
		a.K.eb = b.join(',');
		a.K.vf = c.join(',');
		a.K.wf = d.join(',');
		b = [...a.G.dataScrubBlackList];
		if ('function' == typeof window.QuantumMetricConfigureDataScrubBlockList)
			try {
				b = window.QuantumMetricConfigureDataScrubBlockList(b);
			} catch (g) {
				console.error('QM: Unable to reconfigure data scrub block list because:', g);
			}
		a.K.ub = b.includes('*');
		a.K.fb = b.join(',');
		a.K.Yc = b.length ? b.join(' *,') + ' *' : '';
		const { bc: e, jc: f } = Ic(b);
		a.K.$g = e.join(',');
		a.K.ah = f.join(',');
	}
	function Mf(a) {
		var b = [...a.G.encryptScrubList];
		if ('function' == typeof window.QuantumMetricConfigureEncryptScrubList)
			try {
				b = window.QuantumMetricConfigureEncryptScrubList(b);
			} catch (g) {
				console.error('QM: Unable to reconfigure encryption scrub list because:', g);
			}
		a.K.Ra = b.join(',');
		a.K.Bd = b.length ? b.join(' *,') + ' *' : '';
		const { bc: c, jc: d } = Ic(b);
		a.K.Wg = c.join(',');
		a.K.Xg = d.join(',');
		b = [...a.G.dataEncryptWhiteList];
		if ('function' == typeof window.QuantumMetricConfigureDataEncryptWhiteList)
			try {
				b = window.QuantumMetricConfigureDataEncryptWhiteList(b);
			} catch (g) {
				console.error('QM: Unable to reconfigure encryption scrub white list because:', g);
			}
		a.K.mb = b.join(',');
		const { bc: e, jc: f } = Ic(b);
		a.K.Ug = e.join(',');
		a.K.Vg = f.join(',');
	}
	function Nf(a) {
		a.G = Ff(Object.assign({}, Kc, Kf(a), Lc));
		Gf(a.G, a.K);
		Lf(a);
		Mf(a);
	}
	class Of {
		constructor(a) {
			this.dg = a;
			this.G = {};
			this.K = {
				eb: '',
				vf: '',
				wf: '',
				Ra: '',
				Wg: '',
				Xg: '',
				Bd: '',
				mb: '',
				Ug: '',
				Vg: '',
				ub: !1,
				fb: '',
				$g: '',
				ah: '',
				Yc: '',
				Cd: [wa],
				se: [],
				tf: [],
				yg: [],
				ug: [],
				bd: '',
				ed: '',
				rc: !1,
				Zg: [],
				bh: [],
				Fh: [],
				Yg: [],
				ye: [],
				He: [],
				tg: [],
				Wc: [],
				$d: [],
				Bf: [],
				Bb: '',
				Ef: [Da],
				Gd: null,
				Fg: [],
				Dg: [],
				Ag: [],
				zg: [],
				Gg: [],
				Eg: [],
				Cg: [],
				Bg: [],
				Dd: [],
				ne: [],
				Tb: [],
				xe: '.loading,.loader,.spinner',
				Hd: [],
				dc: !0,
				Mf: !1,
				Kf: null,
				pg: null,
				kb: [],
				Qd: '',
				Qf: !0,
				jg: [],
				ie: [],
				je: [],
				ka: !0,
				Pd: '',
				Lb: new window.Set(),
				dd: '',
			};
			const b = {};
			for (const c in a) (a = c), (b[a] = this.dg[a].map(If));
			this.A = b;
		}
	}
	function Pf(a, b, c) {
		return new Promise(function (d, e) {
			function f(u) {
				d({ fd: u });
			}
			function g(u) {
				return u === eval.toString().length;
			}
			function h() {
				var u = String(Math.random());
				try {
					window.indexedDB.open(u, 1).onupgradeneeded = function (w) {
						var t, r;
						w = null === (t = w.target) || void 0 === t ? void 0 : t.result;
						try {
							w.createObjectStore('test', { autoIncrement: !0 }).put(new Blob()), f(!1);
						} catch (y) {
							return (
								(t = y),
								y instanceof Error && (t = null !== (r = y.message) && void 0 !== r ? r : y),
								'string' !== typeof t ? f(!1) : f(/BlobURLs are not yet supported/.test(t))
							);
						} finally {
							w.close(), window.indexedDB.deleteDatabase(u);
						}
					};
				} catch (w) {
					return f(!1);
				}
			}
			function k() {
				var u = window.openDatabase,
					w = window.localStorage;
				try {
					u(null, null, null, null);
				} catch (t) {
					return f(!0);
				}
				try {
					w.setItem('test', '1'), w.removeItem('test');
				} catch (t) {
					return f(!0);
				}
				return f(!1);
			}
			function l() {
				var u = window;
				return void 0 !== u.performance && void 0 !== u.performance.memory && void 0 !== u.performance.memory.jsHeapSizeLimit
					? performance.memory.jsHeapSizeLimit
					: 1073741824;
			}
			function n() {
				navigator.webkitTemporaryStorage.queryUsageAndQuota(
					function (u, w) {
						u = Math.round(w / 1048576);
						w = 2 * Math.round(l() / 1048576);
						f(u < w);
					},
					function (u) {
						e(Error('detectIncognito somehow failed to query storage quota: ' + u.message));
					},
				);
			}
			function m() {
				var u = window.webkitRequestFileSystem;
				u(
					0,
					1,
					function () {
						f(!1);
					},
					function () {
						f(!0);
					},
				);
			}
			a
				? void 0 !== navigator.maxTouchPoints
					? h()
					: k()
				: b
				? void 0 !== self.Promise && void 0 !== self.Promise.allSettled
					? n()
					: m()
				: c
				? f(void 0 === navigator.serviceWorker)
				: void 0 !== navigator.msSaveBlob && g(39)
				? f(void 0 === window.indexedDB)
				: e(Error('detectIncognito cannot determine the browser'));
		});
	}
	class Qf {
		constructor(a) {
			this.J = a;
			this.A = document.createElement('b');
			this.A.style.position = 'absolute';
			this.A.style.left = '-1001px';
			document.documentElement.appendChild(this.A);
			this.L = document.createElement('iframe');
			this.L.style.display = 'none';
			this.L.src = 'https://cdn.quantummetric.com/helpers/blank';
			this.A.appendChild(this.L);
		}
	}
	class Rf {
		constructor(a, b) {
			this.A = b;
			this.L = a;
		}
		transform(a, b) {
			if (!a.hasAttribute(b)) return null;
			const c = a.getAttribute(b),
				d = this.L.find(({ pf: e, ta: f }) => e === b && this.A.fa(a, f));
			return d ? { name: d.Zf || b, value: c.replace(d.hg, d.ig) } : { name: b, value: c };
		}
	}
	const Sf = ':checked :empty :host :invalid :last-child :modal :nth-child(n) :only-child :read-only'.split(' ').sort(),
		Tf = { '"': '&quot;', '>': '&gt;', ':': '&#58;', '\u00a7': '&sect;', '[': '&#91;', ']': '&#93;', '&': '&amp;' },
		Uf = /:|>|"|\u00a7|\[|]|&/g;
	function Qe(a, b) {
		return Vf(a, b, { rf: a.A.g.G.elementVeinAttributes, Sg: a.A.g.K.kb });
	}
	function Vf(a, b, c) {
		if (b === document) return 'html';
		var d = new Rf(c.Sg, a.A);
		const e = X(a.A, b).toLowerCase();
		var f = a.A.B.D.parentNode(b);
		let g = a.A.B.D.parentElement(b),
			h = '>';
		g || ((g = f && f.host) && (h = '>\u00a7>'));
		f = g ? Array.from(a.A.B.D.children(g)) : [b];
		const k = f.indexOf(b);
		let l = e;
		var n = {};
		for (let m = 0; m < c.rf.length; ++m) {
			const u = c.rf[m];
			if (b.hasAttribute(u))
				switch (u) {
					case 'class': {
						if (0 === b.classList.length) continue;
						const { name: w, value: t } = d.transform(b, u);
						if ('class' === w) {
							n[w] = t
								.split(' ')
								.sort()
								.join(' ')
								.replace(Uf, function (r) {
									return Tf[r];
								});
							continue;
						}
						n[w] = t.replace(Uf, function (r) {
							return Tf[r];
						});
						break;
					}
					default: {
						const { name: w, value: t } = d.transform(b, u);
						n[w] = t.replace(Uf, function (r) {
							return Tf[r];
						});
					}
				}
		}
		Object.entries(n)
			.sort(([m], [u]) => (m < u ? -1 : 1))
			.forEach(([m, u]) => {
				l += `[${m}="${u}"]`;
			});
		for (d = 0; d < Sf.length; ++d)
			switch (((n = Sf[d]), n)) {
				case ':checked':
					!0 === b.checked && (l += n);
					break;
				case ':empty':
					a.A.matchesSelector(b, ':empty') && (l += n);
					break;
				case ':host':
					b.shadowRoot && (l += n);
					break;
				case ':invalid':
					b.validity && !b.validity.valid && (l += n);
					break;
				case ':last-child':
					f.length - 1 === k && (l += n);
					break;
				case ':modal':
					'dialog' === e && a.A.B.supports.be && a.A.matchesSelector(b, ':modal') && (l += n);
					break;
				case ':nth-child(n)':
					l += `:nth-child(${k + 1})`;
					break;
				case ':only-child':
					1 === f.length && (l += n);
					break;
				case ':read-only':
					['input', 'textarea'].includes(e) && a.A.matchesSelector(b, n) && (l += n);
			}
		return g ? `${Vf(a, g, c)}${h}${l}` : l;
	}
	class Wf {
		constructor(a) {
			this.A = a;
		}
	}
	const Xf = /[^\s]/g,
		Yf = a => ('string' !== typeof a ? a : a ? a.replace(Xf, '*') : '');
	const Zf = /(?:\s{2,}|\n|\t|\r)/g;
	function $f(a, b) {
		const c = a.A;
		let d = '';
		d = ('slot' === c.B.D.tagName(b).toLowerCase() ? b.assignedNodes() : [b]).reduce((e, f) => {
			if (100 < e.length) return e;
			if (3 === f.nodeType) {
				var g = a.A,
					h = g.B.D.textContent(f);
				3 === f.nodeType && (ag(g, f) || bg(g, f)) && (h = Yf(h));
				f = h;
				return `${e} ${f}`;
			}
			for (f = document.createTreeWalker(f, NodeFilter.SHOW_TEXT); f.nextNode() && 100 > e.length; )
				if (((g = f.currentNode), (h = X(c, c.B.D.parentNode(g))), 'style' !== h && 'script' !== h)) {
					h = c.B.D.textContent(g);
					if (ag(c, g) || bg(c, g)) h = Yf(h);
					h.length && (e = `${e} ${h}`);
				}
			return e;
		}, '');
		d = d.replace(Zf, ' ').trim().substring(0, 100);
		return Xa(d);
	}
	class cg {
		constructor(a) {
			this.A = a;
		}
	}
	function dg(a, b) {
		a.A.push(b);
		return a.A.length - 1;
	}
	function eg(a) {
		return a.mode[a.mode.length - 1];
	}
	class fg {
		constructor(a) {
			this.D = a.D;
			this.ca = a.ca;
			this.hd = a.hd;
			this.qd = a.qd;
			this.pd = a.pd;
			this.url = a.url;
			this.sd = a.sd;
			this.lb = a.lb;
			this.Vc = a.Vc;
			this.Va = a.Va;
			this.supports = a.supports;
			this.mode = [null];
			this.Ob = 0;
			this.namespaceURI = null;
			this.A = [];
			this.rd = [];
		}
	}
	const hg = (a, b) => {
			const c = [];
			for (let d = 0; d < a.length; ++d) {
				const e = gg(a[d], b);
				null !== e && c.push(e);
			}
			return c;
		},
		ig = (a, b) => {
			const c = eg(b),
				d = {};
			a.nodeValue &&
				('scrub' === c ? (d.vm = Yf(a.nodeValue)) : 'encrypt' === c ? ((d.vm = Yf(a.nodeValue)), (d.ve = dg(b, a.nodeValue))) : (d.v = a.nodeValue));
			return d;
		},
		jg = (a, b) => {
			const c = {};
			b.rd.push({ node: a, Wa: c });
			a = b.D.childNodes(a);
			a.length && (c.C = hg(a, b));
			return c;
		},
		gg = (a, b) => {
			var c = a.nodeType,
				d = b.sd[c];
			d && (1 === c && b.Ob++, d(a));
			switch (a.nodeType) {
				case 1:
					c = b.namespaceURI;
					d = eg(b);
					if (1 !== a.nodeType) var e = null;
					else (e = b.ca.get(a) || {}), (e = !1 === e.qe ? !1 : b.hd || !0 === e.qe ? !0 : b.lb(a));
					if (e) b.mode.push('scrub');
					else {
						var f = b.ca.get(a) || {};
						f = !0 === f.encrypt ? !0 : !1 === f.encrypt ? !1 : b.Vc(a);
						'scrub' === d && !1 === e
							? f
								? b.mode.push('encrypt')
								: b.mode.push(null)
							: f && 'scrub' !== d
							? b.mode.push('encrypt')
							: 'encrypt' === d && !1 === f
							? b.mode.push(null)
							: b.mode.push(d);
					}
					var g = eg(b);
					d = b.ca.get(a) || {};
					var h = !1,
						k = null;
					a instanceof HTMLElement || 'http://www.w3.org/1999/xhtml' === a.namespaceURI || (k = a.namespaceURI);
					e = k ? b.D.tagName(a) : b.D.tagName(a).toUpperCase();
					f = { n: e };
					'SCRIPT' === e && (h = !0);
					'DIALOG' === e && b.supports.be && a.matches(':modal') && (f.m = !0);
					(('STYLE' === e && a.sheet && a.sheet.cssRules.length) || 'LINK' === e) && b.rd.push({ node: a, Wa: f });
					k !== c && ((b.namespaceURI = k), (f.N = k));
					b.bg = e;
					f.a = h ? [] : hg(a.attributes, b);
					b.bg = null;
					h = {};
					if ('INPUT' === e) {
						const n = a.type.toLowerCase();
						if ('checkbox' === n || 'radio' === n) {
							const m = a.getAttribute('checked'),
								u = a.checked;
							null !== m && !1 === u && (h.checked = !1);
							null === m && !0 === u && (h.checked = !0);
						}
						if ('date' === n || 'datetime-local' === n || 'month' === n || 'number' === n || 'time' === n || 'week' === n) {
							for (var l of f.a)
								if ('type' === l[2].n.toLowerCase()) {
									l[2].v = 'text';
									break;
								}
							f.a.push({ 2: { n: 'data-qm-original-type', v: n } });
						}
					}
					(('STYLE' === e && !k) || 'LINK' === e) && a.disabled && (h.disabled = !0);
					Object.keys(h).length && (f.po = h);
					a.value && ('scrub' === g ? (f.vm = Yf(a.value)) : 'encrypt' === g ? ((f.vm = Yf(a.value)), (f.ve = dg(b, a.value))) : (f.v = a.value));
					(l = b.D.shadowRoot(a)) && (f.sr = gg(l, b));
					a = b.D.childNodes(a);
					a.length && !d.fh && ('TITLE' === e && b.pd && (a = [document.createTextNode(b.url)]), (f.C = hg(a, b)));
					b.namespaceURI = c;
					b.mode.pop();
					b = f;
					return { 1: b };
				case 2:
					c = eg(b);
					l = b.ca.get(a.ownerElement) || {};
					d = a.name;
					e = a.value;
					if (b.Va.has(a.name) || (l.Va && l.Va.includes(a.name)) || ('IFRAME' === b.bg && ('sandbox' === d || 'srcdoc' === d))) b = null;
					else {
						f = l.Be || [];
						for (const { pf: n, hg: m, ig: u, Zf: w } of f) a.name === n && (w && (d = w), (e = e.replace(m, u)));
						f = { n: d };
						'integrity' === d
							? (f.v = '')
							: (e &&
									((g = !0),
									(k = d.toLowerCase()),
									'data-select-value' === k || 'placeholder' === k || 'value' === k || 'label' === k
										? 'scrub' === c
											? ((f.vm = Yf(e)), (g = !1))
											: 'encrypt' === c && ((f.ve = dg(b, e)), (g = !1))
										: l.cc && l.cc.includes(d) && ((f.ve = dg(b, e)), (g = !1)),
									g && (f.v = e)),
							  a.namespaceURI && (f.N = a.namespaceURI));
						b = f;
					}
					return null === b ? null : { 2: b };
				case 3:
					return { 3: 'SCRIPT' === b.D.tagName(b.D.parentNode(a)) ? { v: ' ' } : ig(a, b) };
				case 4:
					return { 4: ig(a, b) };
				case 5:
					return { 5: {} };
				case 6:
					return { 6: { p: a.publicId, s: a.systemId } };
				case 7:
					return { 7: { t: a.target, d: a.data } };
				case 8:
					return { 8: b.qd ? { v: '' } : ig(a, b) };
				case 9:
					return { 9: jg(a, b) };
				case 10:
					return (b = { n: a.name, p: a.publicId, s: a.systemId }), a.lh && (b.is = a.lh), { a: b };
				case 11:
					return { b: jg(a, b) };
				case 12:
					return (
						(c = {
							p: a.publicId,
							s: a.systemId,
						}),
						(a = b.D.childNodes(a)),
						a.length && (c.C = hg(a, b)),
						(b = c),
						{ c: b }
					);
			}
		},
		kg = (a, b) => ({ Wa: gg(a, b), Ob: b.Ob });
	class lg {
		constructor() {
			this.be = !0;
			try {
				document.documentElement.matches(':modal');
			} catch (a) {
				this.be = !1;
			}
		}
	}
	const mg = a => a.map(b => ({ re: 'string' === typeof b[0] ? { p: b[0], f: '' } : { p: b[0][0], f: b[0][1] }, rep: b[1] }));
	function ng(a) {
		a.ignoreAttributes || (a.ignoreAttributes = []);
		a.removeAttributesForNodesList && ((a.ignoreAttributes = a.ignoreAttributes.concat(a.removeAttributesForNodesList)), delete a.removeAttributesForNodesList);
		a.transformAttributesForNodesList || (a.transformAttributesForNodesList = []);
		if (!('stripHrefs' in a) || a.stripHrefs) {
			var b = a.transformAttributesForNodesList.find(e => 'object' === typeof e && null !== e && 'pred' in e && 'default' === e.pred.operator);
			b
				? b.rules[0].value.push({
						sel: 'a',
						attr: 'href',
						re: { p: '^.+$', f: '' },
						rep: '',
				  })
				: a.transformAttributesForNodesList.push(['a', ['href', '^.+$', '']]);
		}
		a.ignoreAttributes &&
			(a.ignoreAttributes = a.ignoreAttributes.map(e => ('string' == typeof e ? e : Array.isArray(e) ? { sel: e[0], attrs: e[1].split(ta) } : e)));
		var c = e => f => ({ p: f, f: e });
		b = c('');
		c = c('g');
		a.dataScrubRE &&
			Array.isArray(a.dataScrubRE) &&
			0 < a.dataScrubRE.length &&
			'string' === typeof a.dataScrubRE[0] &&
			(a.dataScrubRE = [{ p: a.dataScrubRE.join('|'), f: 'i' }]);
		a.scrubDocumentTitlePatterns &&
			a.scrubDocumentTitlePatterns.length &&
			'string' === typeof a.scrubDocumentTitlePatterns[0] &&
			(a.scrubDocumentTitlePatterns = a.scrubDocumentTitlePatterns.map(b));
		a.encryptSensitiveWindowDialogs &&
			a.encryptSensitiveWindowDialogs.length &&
			'string' === typeof a.encryptSensitiveWindowDialogs[0] &&
			(a.encryptSensitiveWindowDialogs = a.encryptSensitiveWindowDialogs.map(b));
		a.blacklistedURLs && a.blacklistedURLs.length && 'string' === typeof a.blacklistedURLs[0] && (a.blacklistedURLs = a.blacklistedURLs.map(b));
		a.whitelistedURLs && a.whitelistedURLs.length && 'string' === typeof a.whitelistedURLs[0] && (a.whitelistedURLs = a.whitelistedURLs.map(b));
		a.dataScrubXHRRegExes &&
			a.dataScrubXHRRegExes.length &&
			'string' === typeof a.dataScrubXHRRegExes[0] &&
			(a.dataScrubXHRRegExes = a.dataScrubXHRRegExes.map(c));
		a.xhrHookWhiteListDetails &&
			a.xhrHookWhiteListDetails.length &&
			'string' === typeof a.xhrHookWhiteListDetails[0] &&
			(a.xhrHookWhiteListDetails = a.xhrHookWhiteListDetails.map(b));
		a.xhrHookBlackListDetails &&
			a.xhrHookBlackListDetails.length &&
			'string' === typeof a.xhrHookBlackListDetails[0] &&
			(a.xhrHookBlackListDetails = a.xhrHookBlackListDetails.map(b));
		a.xhrHookWhiteList && a.xhrHookWhiteList.length && 'string' === typeof a.xhrHookWhiteList[0] && (a.xhrHookWhiteList = a.xhrHookWhiteList.map(b));
		a.xhrHookBlackList && a.xhrHookBlackList.length && 'string' === typeof a.xhrHookBlackList[0] && (a.xhrHookBlackList = a.xhrHookBlackList.map(b));
		a.urlTransforms && a.urlTransforms.length && Array.isArray(a.urlTransforms[0]) && (a.urlTransforms = mg(a.urlTransforms));
		a.xhrPerformanceWhitelistDetails &&
			a.xhrPerformanceWhitelistDetails.length &&
			'string' === typeof a.xhrPerformanceWhitelistDetails[0] &&
			(a.xhrPerformanceWhitelistDetails = a.xhrPerformanceWhitelistDetails.map(b));
		a.resourcePathBlacklist &&
			a.resourcePathBlacklist.length &&
			'string' === typeof a.resourcePathBlacklist[0] &&
			(a.resourcePathBlacklist = a.resourcePathBlacklist.map(b));
		a.replaceURLRegExes && a.replaceURLRegExes.length && 'string' === typeof a.replaceURLRegExes[0] && (a.replaceURLRegExes = a.replaceURLRegExes.map(c));
		a.urlMonitorBlacklist &&
			a.urlMonitorBlacklist.length &&
			'string' === typeof a.urlMonitorBlacklist[0] &&
			(a.urlMonitorBlacklist = a.urlMonitorBlacklist.map(b));
		a.excludeRageRE &&
			Array.isArray(a.excludeRageRE) &&
			'string' === typeof a.excludeRageRE[0] &&
			(a.excludeRageRE = [{ p: a.excludeRageRE.join('|'), f: 'i' }]);
		'excludeXHRHeaderRegEx' in a && 'string' === typeof a.excludeXHRHeaderRegEx && (a.excludeXHRHeaderRegEx = [a.excludeXHRHeaderRegEx]);
		'excludeXHRHeaderRegEx' in a &&
			Array.isArray(a.excludeXHRHeaderRegEx) &&
			(a.excludeXHRHeaderRegEx = a.excludeXHRHeaderRegEx.reduce((e, f) => {
				'string' === typeof f && e.push({ p: f, f: '' });
				'object' === typeof f && null !== f && 'p' in f && 'f' in f && e.push(f);
				return e;
			}, []));
		if ('blockFrequentReloads' in a && !Array.isArray(a.blockFrequentReloads)) {
			c = a.blockFrequentReloads;
			a.blockFrequentReloads = [];
			for (var d in c) void 0 !== c[d].count && a.blockFrequentReloads.push({ re: { p: d, f: c[d].flags }, count: parseInt(c[d].count, 10) });
		}
		if ('encryptNodeAttributes' in a && !Array.isArray(a.encryptNodeAttributes)) {
			d = a.encryptNodeAttributes;
			a.encryptNodeAttributes = [];
			for (const e in d) Array.isArray(d[e]) && a.encryptNodeAttributes.push({ sel: e, attrs: d[e] });
		}
		'transformAttributesForNodesList' in a &&
			a.transformAttributesForNodesList.length &&
			Array.isArray(a.transformAttributesForNodesList[0]) &&
			(a.transformAttributesForNodesList = a.transformAttributesForNodesList.reduce((e, f) => {
				e.push({ sel: f[0], attr: f[1][0], re: { p: f[1][1], f: f[1][3] || '' }, rep: f[1][2], newAttr: f[1][4] });
				return e;
			}, []));
		a.performanceMarkerWhitelist &&
			a.performanceMarkerWhitelist.length &&
			'string' === typeof a.performanceMarkerWhitelist[0] &&
			(a.performanceMarkerWhitelist = a.performanceMarkerWhitelist.map(b));
		a.performanceMeasureWhitelist &&
			a.performanceMeasureWhitelist.length &&
			'string' === typeof a.performanceMeasureWhitelist[0] &&
			(a.performanceMeasureWhitelist = a.performanceMeasureWhitelist.map(b));
		a.startImmediatePathPatterns &&
			a.startImmediatePathPatterns.length &&
			'string' === typeof a.startImmediatePathPatterns[0] &&
			(a.startImmediatePathPatterns = a.startImmediatePathPatterns.map(b));
		a.waitForSessionIdPathPatterns &&
			a.waitForSessionIdPathPatterns.length &&
			'string' === typeof a.waitForSessionIdPathPatterns[0] &&
			(a.waitForSessionIdPathPatterns = a.waitForSessionIdPathPatterns.map(b));
		a.xhrErrorBlacklist && a.xhrErrorBlacklist.length && 'string' === typeof a.xhrErrorBlacklist[0] && (a.xhrErrorBlacklist = a.xhrErrorBlacklist.map(b));
		a.xhrEncryptWhiteListDetails &&
			a.xhrEncryptWhiteListDetails.length &&
			'string' === typeof a.xhrEncryptWhiteListDetails[0] &&
			(a.xhrEncryptWhiteListDetails = a.xhrEncryptWhiteListDetails.map(b));
		a.xhrEncryptBlackListDetails &&
			a.xhrEncryptBlackListDetails.length &&
			'string' === typeof a.xhrEncryptBlackListDetails[0] &&
			(a.xhrEncryptBlackListDetails = a.xhrEncryptBlackListDetails.map(b));
		a.syncEndpointsWithSDK &&
			a.syncEndpointsWithSDK.length &&
			'string' === typeof a.syncEndpointsWithSDK[0] &&
			(a.syncEndpointsWithSDK = a.syncEndpointsWithSDK.map(b));
		a.nestedStitchingQueryParams &&
			a.nestedStitchingQueryParams.length &&
			(a.nestedStitchingQueryParams = a.nestedStitchingQueryParams.map(e => ('string' === typeof e ? [e] : e)));
		return a;
	}
	function og(a, b) {
		const c = a.cache.get(b);
		if (c && null !== c.start)
			if (null !== c.timeout) clearTimeout(c.timeout), (c.timeout = null), (c.start = null);
			else {
				var d = a.A.B.D.Ka() - c.start;
				c.start = null;
				a.log(b, { duration: d });
			}
	}
	function pg(a) {
		a.cache.forEach((b, c) => {
			b && null !== b.start && og(a, c);
		});
	}
	function qg(a) {
		a.cache.forEach(b => {
			null !== b.timeout && clearTimeout(b.timeout);
		});
		a.cache.clear();
	}
	class rg {
		constructor(a) {
			this.A = a;
			this.cache = new Map();
		}
		start(a) {
			if (this.A.g.K.dd) {
				var b = this.cache.get(a);
				b || (b = { start: null, timeout: null, Ge: {} });
				null === b.timeout &&
					((b.start = this.A.B.D.Ka()),
					(b.timeout = setTimeout(() => {
						this.A.B.yf.closest(a, this.A.g.K.dd) || (b.start = null);
						b.timeout = null;
					}, 250)),
					this.cache.set(a, b));
			}
		}
		log(a, b) {
			const c = Qe(this.A.B.Fe, a);
			a = this.cache.get(a);
			c in a.Ge || (a.Ge[c] = { vg: 0, total: 0 });
			a = a.Ge[c];
			a.vg++;
			a.total += b.duration;
			W(this.A, 'hv', { c: a.vg, t: a.total, ev: c });
		}
	}
	class sg {
		constructor() {}
		closest(a, b) {
			return b
				? Fc(b)
						.map(c => ({ node: a, Kd: c.split(Ec) }))
						.sort((c, d) => d.Kd.length - c.Kd.length)
						.map(({ node: c, Kd: d }) => {
							var e = c;
							c = d.length - 1;
							a: for (; e; ) {
								let f = e.closest(d[c]);
								if (f) {
									--c;
									for (e = f; 0 <= c; ) {
										e = e.getRootNode ? e.getRootNode().host : null;
										if (!e) return null;
										if (!e.matches(d[c])) {
											c = d.length - 1;
											continue a;
										}
										--c;
									}
									e = f;
									break;
								} else e = e.getRootNode ? e.getRootNode().host : null;
							}
							return e;
						})
						.reduce(
							(c, d) => {
								if (!d) return c;
								if (!c) return { node: d, depth: Za(d) };
								const e = Za(d);
								return e > c.depth
									? {
											node: d,
											depth: e,
									  }
									: c;
							},
							{ node: null, depth: 0 },
						).node
				: null;
		}
	}
	function tg(a) {
		let b = [],
			c = null;
		return null === a || void 0 === a
			? function (d, e) {
					if (this.g.K.ka) {
						var f = this;
						Y(f, function () {
							ug(f, e, d);
						});
					}
			  }
			: function (d, e) {
					const f = this;
					b.push({ ic: e, documentElement: d });
					c ||
						(c = setTimeout(() => {
							f.g.K.ka &&
								Y(f, function () {
									const g = b;
									b = [];
									c = null;
									g.forEach(h => {
										var { ic: k, documentElement: l } = h;
										ug(f, k, l);
									});
								});
						}, a));
			  };
	}
	function vg(a, b) {
		if (0 === a.A.length) a.A.push(b);
		else {
			var c = a.A[a.A.length - 1];
			0 === c[1].length && 0 === b[1].length ? (c[0] = c[0].concat(b[0])) : a.A.push(b);
		}
	}
	function wg(a, b) {
		return C(function* () {
			a.O = !0;
			const c = a.A.shift();
			c[1].length ? yield b(c) : b(c);
			0 < a.A.length ? setTimeout(() => wg(a, b), 0) : ((a.O = !1), xg(a));
		});
	}
	function yg(a, b) {
		a.O || wg(a, b);
	}
	function zg(a, b) {
		a.L.done && a.L.done.push(b);
	}
	function Ag(a, b) {
		a.L.done && (a.L.done = a.L.done.filter(c => b !== c));
	}
	function xg(a) {
		a.L.done.forEach(b => {
			b(!0);
		});
	}
	class Bg {
		constructor() {
			this.A = [];
			this.O = !1;
			this.L = { done: [] };
		}
	}
	class Cg {
		constructor(a, b) {
			this.J = a;
			this.Xc = [];
			this.A = 0;
			this.L = b;
		}
		send(a, b) {
			this.Xc.push({ sb: b, data: a });
			Dg(this.J, this);
		}
	}
	function J(a, b) {
		dd(a, 'GET', a.g.G.reportURL + '?' + Ra({ QUANTUM_WARNING: a.ya || window.location.href, hit: a.va, s: a.ea }) + '&' + b, Ea);
	}
	function Yb(a) {
		let b = Object.entries(Ya(document.cookie));
		for (let c of b) {
			let [d, e] = c;
			if (decodeURIComponent(d) === a) return decodeURIComponent(e);
		}
		return null;
	}
	function uc(a, b) {
		if (!a.Wb && !a.$e) {
			a.$e = !0;
			a.W < a.g.G.sendRetries && (V(a, -39, 'QuantumError: ' + Xa(b.toString())), Eg(a));
			var c = { QUANTUM_ERROR: b.toString().substring(0, 1e3), hit: a.va, s: a.ea, v: '0db7d482', u: a.ya };
			try {
				dd(a, 'GET', a.g.G.reportURL + '?' + Ra(c), Ea),
					Zc(a.ja, 'error', { error: b.toString(), version: '0db7d482', session: a.ea, hit: a.va, pageURL: a.ya });
			} catch (d) {}
		}
	}
	function Ac(a, b, c) {
		if (a.Da && (0 == (c.f & 126976) && Fg(a, b, c), !(a.Lf++ > a.g.G.maxNumOOBEventsPerHit))) {
			var d = a.O;
			a.Na = !0;
			var e;
			b in d ? (e = d[b]) : (d[b] = e = []);
			e.push(c);
		}
	}
	function Qc(a) {
		if ((a = a.R.Ua)) return a.abn;
	}
	function O(a, b, c) {
		c = void 0 === c ? !1 : c;
		if (b) {
			if (b == document.documentElement || b == document) return '';
			if (11 == b.nodeType) {
				var d = O(a, b.host, c);
				return d ? `${d} S#` : void 0;
			}
			if (1 == b.nodeType) {
				d = a.B.D.tagName(b).toLowerCase();
				if ((('body' == d && b === document.body) || 'head' == d || 'html' == d) && (!b.getRootNode || a.B.D.getRootNode(b) === document))
					return '<' + d.toUpperCase();
				U(a, b);
			}
			if (
				a.B.D.parentNode(b) &&
				((d = a.B.D.parentNode(b)), (d = O(a, d, c)), void 0 !== d && (c ? ((a = U(a, b)), (a = a.Ih || a.index)) : (a = U(a, b).index), void 0 !== a))
			)
				return d + ' ' + a;
		}
	}
	function P(a, b) {
		a.Da && (a.Mb.O || !a.nb ? Id(a, b) : Gg(a, b));
	}
	function Sc(a) {
		a.ra ? (a.Qc = !0) : a.Ud ? Ye(a) : Hg(a, a.B.D.W(window), 'new_session');
	}
	function Tc(a, b) {
		b = new ld(a, b);
		if (64 === b.Nb || Ad(a.la, b)) {
			const c = zd(a.la, b);
			a.Z.set('lastUrl', yd(a.la));
			a.Xa = ud(a.la);
			a.Nc = null;
			a.Ke ||
				(a.stop(),
				(a.Uc = !0),
				a.pa && clearTimeout(a.pa),
				(a.pa = setTimeout(
					function () {
						Ig(a, c, !0);
					},
					64 === b.Nb ? 0 : a.g.G.spaLocationChangedTimeout,
				)));
		}
	}
	function Uc(a, b) {
		a.za({ [a.g.G.enabledCookie]: b });
		b ? ((a.Ea = !1), Ig(a, vd(a.la), !1)) : a.stop();
	}
	function Vc(a, b) {
		try {
			b ? (a.za({ [a.g.G.enabledCookie]: !b, expires: 'Fri, 31 Dec 2099 23:59:59 GMT' }), a.stop()) : a.za({ [a.g.G.enabledCookie]: !b, expires: Jg() });
		} catch (c) {}
	}
	function Wc(a) {
		var b = !0,
			c = Yb(a.g.G.enabledCookie);
		c
			? 'false' === c && (b = !1)
			: a.g.G.percentSampling &&
			  100 > a.g.G.percentSampling &&
			  ((c = !0),
			  a.g.G.percentSampling && 100 > a.g.G.percentSampling && (c = new Date().getTime() % 100 < a.g.G.percentSampling),
			  c || (b = !1),
			  a.za({ [a.g.G.enabledCookie]: b }));
		return b;
	}
	function Xc(a) {
		var b = document.documentElement;
		return C(function* () {
			const { Wa: c, Ob: d, Jd: e } = Kg(a, b);
			Lg(a, d);
			a.la.te(d);
			yield e;
			var f = document.doctype,
				g = '';
			f &&
				((g = '<!DOCTYPE'),
				f.name && (g += ' ' + f.name.toString()),
				f.publicId && (g += ' PUBLIC "' + f.publicId.toString() + '"'),
				f.systemId && (g += ' "' + f.systemId.toString() + '"'),
				(g += '>'));
			return `${g}<html><head></head><body><!--QMJSONHTML:${a.B.D.stringify(c).replace(/--\x3e/g, 'QMCOMMENTEND->')}--></body></html>`;
		});
	}
	function Ub(a, b, c) {
		var d = Fc(c);
		c = [];
		const e = [];
		for (const f of d) {
			d = f.split(Ec);
			if (2 > d.length) {
				e.push(f);
				continue;
			}
			let g = [...a.B.D.A(b, d[0])];
			for (let h = 1; h < d.length; ++h) {
				const k = d[h];
				g = [].concat(...g.map(l => (a.B.D.shadowRoot(l) ? [...a.B.D.A(a.B.D.shadowRoot(l), k)] : [])));
			}
			c = c.concat(g);
		}
		0 < e.length && (c = c.concat([...a.B.D.A(b, e.join(','))]));
		return c;
	}
	function Yc(a) {
		const b = document.createElement(a.Ie);
		b.type = 'text/javascript';
		b.async = 1;
		b.src = a.g.G.visibleURL;
		b.crossOrigin = 'anonymous';
		const c = a.B.D.ad(document, a.Ie)[0];
		c.parentNode.insertBefore(b, c);
		Mg(a, !0);
	}
	function dd(a, b, c, d, e, f, g) {
		function h(k, l) {
			if (e)
				try {
					e(k, void 0 === l ? null : l);
				} catch (n) {
					J(this, `doFetch=${n.message}`);
				}
		}
		a.B.D.da.contentWindow
			.fetch(c, { method: b, headers: { 'Content-Type': void 0 === g ? 'text/plain' : g }, body: f, credentials: 'omit' })
			.then(function (k) {
				if (d)
					try {
						d(k);
					} catch (l) {
						h(l, k);
					}
			})
			.catch(h);
	}
	function pd(a, b) {
		var c = -1 < window.location.href.indexOf('about:srcdoc');
		if (a.ma.timing && !c) {
			let d = (b.p = {});
			const e = Ng(a);
			if (e) {
				c = Og(a) ? a.ma.timeOrigin : e.navigationStart;
				b.pto = D(c);
				for (const g in a.L)
					if (a.L.hasOwnProperty(g)) {
						d[a.L[g]] = null;
						try {
							let h = e[g];
							'number' === typeof h &&
								(0 < h
									? (Og(a) || (h = Math.max(h - c, 0)),
									  14e6 > h ? (d[a.L[g]] = Math.max(D(h), 0)) : J(a, `hit_network_timing_offset=${encodeURIComponent(b.url)}&value=${h}&key=${g}`))
									: a.Gb.push(g));
						} catch (h) {}
					}
				let f = !1;
				a.Rf.forEach((g, h) => {
					0 !== h && ((h = d[a.L[a.Rf[h - 1]]] || 0), (g = d[a.L[g]]), null !== g && null !== h && g < h && (f = !0));
				});
				if (f) {
					d = {};
					for (const g in a.L) a.L.hasOwnProperty(g) && (d[a.L[g]] = null);
					b.p = d;
					return;
				}
			}
			try {
				if (a.ma.getEntriesByType) {
					if (!d[a.L['first-paint']]) {
						const f = new window.PerformanceObserver(g => {
							g = g.getEntries();
							for (let k = 0; k < g.length; k++) {
								var h = g[k];
								'first-paint' == h.name &&
									((h = D(h.startTime)), 14e6 > h && Pg(a, h) && (P(a, { t: 'mt', v: { u: h } }), Qg(a, 65536, { u: h })), f.disconnect());
							}
						});
						f.observe({ type: 'paint', buffered: !0 });
					}
					if (!d[a.L['first-contentful-paint']]) {
						const f = new window.PerformanceObserver(g => {
							g = g.getEntries();
							for (let k = 0; k < g.length; k++) {
								var h = g[k];
								'first-contentful-paint' == h.name &&
									((h = D(h.startTime)), 14e6 > h && Pg(a, h) && (P(a, { t: 'mt', v: { v: h } }), Qg(a, 65536, { v: h })), f.disconnect());
							}
						});
						f.observe({ type: 'paint', buffered: !0 });
					}
				}
			} catch (f) {}
		}
	}
	function qd(a, b) {
		if (!a.ma) return null;
		let c = null;
		a.ma && a.ma.navigation && b in a.ma.navigation && (c = a.ma.navigation[b]);
		if (void 0 == c && a.ma.getEntriesByType) {
			const d = a.ma.getEntriesByType('navigation');
			for (let e = 0; e < d.length; ++e) {
				const f = d[e];
				if (b in f && f.hasOwnProperty(b)) return f[b];
			}
		}
		switch (b) {
			case 'type':
				return a.Ig[c];
			default:
				return c;
		}
	}
	function Id(a, b) {
		Rg(a, b);
		a.Ma.push(b);
		Jd(a, a.Ma, a.Ba);
	}
	function Jd(a, b, c) {
		C(function* () {
			!a.nb ||
				(0 === b.length && 0 === c.length) ||
				(vg(a.Mb, [[...b], [...c]]),
				(b.length = 0),
				(c.length = 0),
				yg(a.Mb, function (d) {
					return C(function* () {
						const e = d[0],
							f = d[1];
						f.length && (yield Promise.all(f));
						e.forEach(g => Gg(a, g));
					});
				}));
		});
	}
	function me(a, b) {
		return window.ShadowRoot ? -1 < a.B.D.toString(b).indexOf('ShadowRoot') : !1;
	}
	function U(a, b) {
		if (!b) return {};
		let c = a.Mc.get(b);
		c || ((c = {}), a.Mc.set(b, c));
		return c;
	}
	function se(a, b, c, d) {
		const e = new Rf(a.g.K.kb, a);
		(a = a.g.G.elementVeinAttributes.reduce((f, g) => {
			if (f) return f;
			g = e.transform(b, g);
			return null === g ? f : g.value;
		}, null)) || (a = `${c}x${d}`);
		return `${b.nodeName}[${a}]`;
	}
	function V(a, b, c, d) {
		var e = void 0 === e ? new Date().getTime() : e;
		Ac(a, 'E', { i: b, f: void 0 === d ? 0 : d, v: void 0 === c ? '' : c, t: e });
	}
	function Pe(a, b) {
		let c = 0,
			d = 0,
			e = 0,
			f = 0;
		if (b)
			try {
				b == document
					? a.ef
						? ((c = document.documentElement.scrollLeft || document.body.scrollLeft),
						  (d = document.documentElement.scrollTop || document.body.scrollTop),
						  (e = document.documentElement.scrollWidth || document.body.scrollWidth),
						  (f = document.documentElement.scrollHeight || document.body.scrollHeight))
						: ((c = document.body.scrollLeft), (d = document.body.scrollTop), (e = document.body.scrollWidth), (f = document.body.scrollHeight))
					: ((c = b.scrollLeft), (d = b.scrollTop), (e = b.scrollWidth), (f = b.scrollHeight));
			} catch (g) {}
		return [c, d, e, f];
	}
	function W(a, b, c) {
		a.Da && ((a.O[b] = c), (a.Na = !0));
	}
	function Ye(a) {
		Sg(a);
		Y(a, function () {
			a.Qc = !1;
			a.$b = new window.Set(a.na);
			a.na.clear();
			Ig(a, vd(a.la), !1);
		});
	}
	function X(a, b) {
		return a.B.D.nodeName(b).toLowerCase();
	}
	function ag(a, b) {
		return (b = a.B.D.parentNode(b)) ? a.hb(b) : !1;
	}
	function bg(a, b) {
		if ((b = a.B.D.parentNode(b)) && a.g.K.Ra) {
			{
				var c = void 0 === c ? null : c;
				const d = U(a, b);
				void 0 === d.Pf && (d.Pf = Tg(a, b, c));
				a = d.Pf;
			}
		} else a = !1;
		return a;
	}
	function Y(a, b) {
		try {
			++a.oc, b(), --a.oc;
		} catch (c) {
			Ug(a, c);
		}
	}
	function ug(a, b, c) {
		c = void 0 === c ? null : c;
		a.la.xd(b.length);
		if (a.Da) {
			a.de = new Date().getTime();
			var d = new a.B.D.da.contentWindow.WeakMap(),
				e = [],
				f = [],
				g = [],
				h = [],
				k = 0;
			0 < a.g.K.Pd.length && (b = Vg(a, b));
			b.forEach(function (t) {
				if ('childList' == t.type) {
					for (var r = 0; r < t.removedNodes.length; ++r) {
						var y = a,
							A = t.removedNodes[r],
							v = d;
						e.push({ type: 'r', target: t.target, node: A });
						Wg(y, A, v);
					}
					for (r = 0; r < t.addedNodes.length; ++r) (y = a), (A = t.addedNodes[r]), (v = d), e.push({ type: 'a', target: t.target, node: A }), Wg(y, A, v);
				} else 'characterData' == t.type ? f.push(t) : 'attributes' == t.type && g.push(t);
			});
			e = Xg(a, e, d, c, h);
			f.forEach(function (t) {
				var r = t.target,
					y = r.nodeValue;
				y != t.oldValue && 1 != d.get(r) && a.B.D.$(c.documentElement || c, r) && (t = Yg(a, r, a.Ba)) && (y && (k += y.length), Id(a, t));
			});
			g.forEach(function (t) {
				var r = t.target,
					y = r.hasAttribute(t.attributeName) ? r.getAttribute(t.attributeName) : null;
				if (
					y != t.oldValue &&
					'script' != a.B.D.tagName(r).toLowerCase() &&
					!(
						('iframe' == a.B.D.tagName(r).toLowerCase() && 'srcdoc' == t.attributeName) ||
						(0 < a.g.K.Bb.length && a.fa(r, a.g.K.Bb)) ||
						'muted' == t.attributeName ||
						1 == d.get(r) ||
						(r !== (c || document.documentElement) && !a.B.D.$(c.documentElement || c, r))
					)
				) {
					var A = Zg(a, r, t.attributeName, y, a.Ba);
					'LINK' === a.B.D.tagName(r).toUpperCase() &&
						r.href &&
						r.rel.toLowerCase().includes('stylesheet') &&
						a.B.D.isConnected(r) &&
						'href' === t.attributeName &&
						a.g.G.hashResourceURL &&
						((t = ee(a.B.Qa, r).then(v => {
							v.h && (A.v = `${a.g.G.hashResourceURL}/${v.h}`);
						})),
						a.Ba.push(t));
					A && (y ? y.length < a.g.G.maximumChangeValue / 3 && ((k += y.length), Id(a, A)) : Id(a, A));
				}
			});
			b = [];
			for (var l = [], n = 0; n < e.length; ++n) {
				var m = e[n];
				'a' == m.type ? a.B.D.parentNode(m.node) === m.target && $g(b, m) : $g(l, m);
			}
			l.forEach(function (t) {
				t.depth = ah(a, t.target);
			});
			l.sort(function (t, r) {
				return r.depth - t.depth;
			});
			l.forEach(function (t) {
				var r = [];
				a.na.forEach(A => {
					a.B.D.isConnected(A) || a.na.delete(A);
				});
				t.list.forEach(function (A) {
					A = U(a, A.node);
					A.parent === t.target && ((A = A.index), void 0 !== A && r.push(A));
				});
				r.sort(function (A, v) {
					return A - v;
				});
				var y = a.removedNodes(t.target, r);
				y && Id(a, y);
			});
			var u = [];
			l.forEach(function (t) {
				bh(a, t.target);
				u.push(t.target);
			});
			b.forEach(function (t) {
				t.depth = ah(a, t.target);
			});
			b.sort(function (t, r) {
				return t.depth - r.depth;
			});
			l.forEach(function (t) {
				t.list.forEach(function (r) {
					ch(a, r.node);
				});
			});
			var w = [];
			b.forEach(function (t) {
				-1 == u.indexOf(t.target) && bh(a, t.target);
				t.list.forEach(function (r) {
					r.index = U(a, r.node).index;
				});
				t.list.sort(function (r, y) {
					return r.index - y.index;
				});
				t.list.forEach(function (r) {
					var y = r.node;
					dh(a, y);
					if (3 === r.node.nodeType && 'STYLE' === a.B.D.tagName(r.target)) Id(a, { t: 'ssa', v: r.node.data, I: O(a, r.target) });
					else {
						{
							var A = U(a, y).index;
							r = a.Ba;
							const p = O(a, t.target);
							if (void 0 === p) r = null;
							else {
								var { Wa: v, Jd: q } = Kg(a, y);
								A = { t: 'a', p, i: A, j: [v] };
								r.push(q);
								r = A;
							}
						}
						r && Id(a, r);
						w.push(y);
					}
				});
			});
			ue(a.B.jb, c);
			k < a.g.G.maximumChangeValue
				? (w.forEach(function (t) {
						eh(a, t);
				  }),
				  Jd(a, a.Ma, a.Ba),
				  h.forEach(t => {
						!a.B.D.$(c.documentElement || c, t) && ch(a, t);
				  }),
				  fh(a))
				: J(a, 'size=' + k);
		} else b.forEach(a.xh.bind(a));
	}
	function Dg(a, b) {
		a.ra || a.A || gh(a, b, !1);
	}
	function bh(a, b) {
		if (a.B.D.Aa(b))
			for (var c = a.B.D.childNodes(b), d = 0; d < c.length; d++) {
				var e = U(a, c[d]);
				e.index = d;
				e.parent = b;
			}
	}
	function hh(a, b) {
		bh(a, b);
		b = a.B.D.childNodes(b);
		for (var c = 0; c < b.length; c++) hh(a, b[c]);
	}
	function dh(a, b) {
		var c = b.ownerDocument;
		if (a.Re && c && c.createNodeIterator) for (b = a.B.D.pa(c, b, NodeFilter.SHOW_ALL); (c = b.nextNode()); ) bh(a, c);
		else hh(a, b);
	}
	function eh(a, b) {
		if (b && 1 === b.nodeType) {
			var c = X(a, b);
			if ('option' == c && b.selected) {
				c = O(a, b);
				if (void 0 === c) return;
				Id(a, { t: '_', I: c });
			} else if ('input' == c && b.checked) {
				c = O(a, b);
				if (void 0 === c) return;
				U(a, b).hc = !0;
				Id(a, { t: '_', I: c });
			}
			if ((b = a.B.D.children(b))) for (c = 0; c < b.length; ++c) eh(a, b[c]);
		}
	}
	function ih(a) {
		var b = document.createTextNode('x');
		if (b.contains) {
			var c = document.createElement('div');
			a.B.D.appendChild(c, b);
			a.B.D.$(c, b) || (a.Sd = a.hf);
		} else a.Sd = a.hf;
	}
	function jh(a, b) {
		a = U(a, b);
		b = a.lc;
		b || (b = a.lc = {});
		return b;
	}
	function ch(a, b, c) {
		c = void 0 === c ? !1 : c;
		var d,
			e = a.Mc.get(b);
		e && (c ? (d = e.lc) : e.lc && e.lc.th && a.Od.delete(b), e.ab && (e.ab.disconnect(), delete e.ab), d && a.Mc.set(b, { lc: d }));
		if ((d = a.B.D.childNodes(b))) for (e = 0; e < d.length; ++e) ch(a, d[e], c);
		1 === b.nodeType && (b = a.B.D.shadowRoot(b)) && ch(a, b, c);
	}
	function kh(a) {
		W(a, 'ekey', { ekey: nf(a.sa) });
	}
	function Fg(a, b, c) {
		function d(g) {
			Zc(f.ja, g.i, g);
			g.tt = g.t;
			g.t = 'oe';
			P(f, g);
			var h = f;
			g = { i: g.i, v: g.v, t: g.tt, f: g.f, h: g.h };
			var k = g.f;
			if (
				0 !== g.i &&
				0 >= (k & 64) &&
				0 >= (k & 128) &&
				0 >= (k & 512) &&
				0 >= (k & 1024) &&
				0 >= (k & 2048) &&
				0 >= (k & 4096) &&
				0 >= (k & 8192) &&
				0 >= (k & 16384) &&
				0 >= (k & 32768) &&
				0 >= (k & 65536) &&
				'undefined' !== typeof g.i &&
				'undefined' !== typeof g.v &&
				'undefined' !== typeof g.t &&
				(h.Ec.push({ i: g.i, v: g.v.toString().substr(0, h.g.G.maxStoredEventLength), t: g.t, h: g.h }), h.R && null !== h.R.Ua)
			) {
				for (g = 0; g < h.Ec.length; ++g) (k = h.Ec[g]), h.Z.set(`event:${Qa()}`, k);
				h.Ec = [];
			}
		}
		function e(g, h) {
			g = f.B.D.Pa(f.B.D.stringify(g));
			g.i = h;
			d(g);
		}
		if (a.Da) {
			var f = a;
			switch (b) {
				case 'E':
					d(f.B.D.Pa(f.B.D.stringify(c)));
					break;
				case 'pf':
					e(c, -5);
					break;
				case 'cje':
					e(c, -4);
					break;
				case 'ape':
					e(c, -3);
					break;
				case 'rc':
					e(c, -2);
					break;
				case 'ifr':
					e(c, -1);
			}
		}
	}
	function lh(a) {
		var b = a.O.form;
		b || (a.O.form = b = {});
		a.Na = !0;
		return b;
	}
	function Gg(a, b) {
		if (a.Da) {
			var c = 's' == b.t;
			Rg(a, b);
			a.Dc && ((b.ekey = nf(a.sa)), (a.Dc = !1));
			c ? a.$.unshift(b) : a.$.push(b);
		}
	}
	function Rg(a, b) {
		if (!b.hasOwnProperty('d')) {
			const c = 's' == b.t,
				d = a.B.D.Ka();
			0 < a.Ic || c ? ((b.d = d - a.Ic), (a.Ic = d)) : (b.d = 1);
		}
	}
	function Kg(a, b) {
		var c = oh(a, b);
		c = {
			D: a.B.D,
			ca: c,
			hd: a.g.K.ub,
			sd: {
				[1]: f => {
					if (a.ec(f)) {
						var g = f.localName;
						!a.customElements.has(g) && window.customElements.get(g) && (a.customElements.add(g), P(a, { t: 'CE', n: g }));
					}
					g = a.B.pc;
					g.qa.push(f);
					g.wa || (g.wa = setTimeout(g.$, 200));
					switch (a.B.D.tagName(f).toUpperCase()) {
						case 'INPUT':
							if (((g = f.type.toLowerCase()), 'checkbox' === g || 'radio' === g)) U(a, f).hc = f.checked;
						case 'SELECT':
						case 'TEXTAREA':
							ph(a, f);
							break;
						case 'IMG':
							if (!(!a.g.G.reportFailedImages || (a.g.K.Qd && a.fa(f, a.g.K.Qd)))) {
								{
									g = a.B.ih;
									var h = f.ownerDocument.location.href,
										k = f.complete,
										l = f.srcset.split(', ');
									const n = 1 === l.length ? l[0].split(' ')[0] : '';
									l = f.src !== h;
									h = !!f.src || n !== h;
									k = (f.src.length || f.srcset.length) && l && h && k;
									f.removeEventListener('error', g.A);
									f.removeEventListener('load', g.Qb);
									k && ye(g, f);
									g.J.B.D.addEventListener(f, 'error', g.A);
									g.J.B.D.addEventListener(f, 'load', g.Qb);
								}
							}
					}
				},
				[11]: f => {
					qh(a, f.host);
				},
			},
			Va: a.g.K.Kf,
			lb: a.lb.bind(a),
			Vc: f => !!a.g.G.publicKeyString && rh(a, f),
			qd: a.g.G.stripHTMLComments,
			pd: T(a.ya, a.g.K.se),
			url: a.ya,
			supports: a.B.supports,
		};
		c = new fg(c);
		if (3 === b.nodeType) {
			let f = null;
			ag(a, b) ? (f = 'scrub') : bg(a, b) && (f = 'encrypt');
			null !== f && (c.mode = [f]);
		}
		const { Wa: d, Ob: e } = kg(b, c);
		b = c.A.length ? a.sa.encrypt(a.B.D.stringify(c.A)) : null;
		c.rd.forEach(f => {
			var { node: g, Wa: h } = f;
			11 === g.nodeType
				? ((f = (a.B.D.ia(g) || []).map(k => fe(a.B.Qa, k))),
				  Promise.all(f).then(k => {
						h.S = k;
				  }))
				: ('STYLE' === a.B.D.tagName(g) &&
						fe(a.B.Qa, g.sheet).then(k => {
							h.S = k;
							h.C = [];
						}),
				  'LINK' === a.B.D.tagName(g) &&
						g.href &&
						g.rel.toLowerCase().includes('stylesheet') &&
						fe(a.B.Qa, g).then(k => {
							if ('' !== k.v) {
								for (let l = 0; l < h.a.length; ++l) {
									const n = h.a[l];
									'href' === n[2].n && (n[2].n = 'data-original-src');
									'data-original-src' === n[2].n && n[2].v.startsWith('data:') && (n[2].v = '');
								}
								h.S = k;
							}
						}));
		});
		b = Promise.all([b, ge(a.B.Qa)]).then(f => {
			d.E = f[0];
		});
		return { Wa: d, Ob: e, Jd: b };
	}
	function Yg(a, b, c) {
		var d = O(a, b);
		if (void 0 === d) return null;
		var e = b.data,
			f = !1,
			g = a.B.D.parentNode(b),
			h = { t: 't', I: d, v: e };
		g &&
			(a.g.K.fb && (a.fa(g, a.g.K.fb) || a.fa(g, a.g.K.Yc)) && ((e = Yf(e)), (f = !0)),
			!f &&
				a.g.G.publicKeyString &&
				a.g.K.Ra &&
				(a.fa(g, a.g.K.Ra) || a.fa(g, a.g.K.Bd)) &&
				((a = a.sa.encrypt(b.data)),
				c.push(a),
				(e = ' '),
				a.then(k => {
					h.v = k;
				}),
				(h.etn = '1')));
		h.v = e;
		return h;
	}
	function Zg(a, b, c, d, e) {
		var f = O(a, b);
		if (void 0 === f) return null;
		let g = { t: 'T', I: f, n: c, v: d };
		var h = c.toLowerCase();
		f = !1;
		for (let k = 0; k < a.g.G.ignoreAttributes.length; k++) {
			const l = a.g.G.ignoreAttributes[k];
			if ('string' === typeof l) {
				if (l === c) return null;
			} else if (-1 !== l.attrs.indexOf(c) && a.fa(b, l.sel)) return null;
		}
		(h = 'data-select-value' == h || 'placeholder' == h || 'value' == h || 'label' == h) && a.hb(b) && ((d = Yf(d)), (f = !0));
		h &&
			!f &&
			a.g.G.publicKeyString &&
			a.g.K.Ra &&
			!sh(a, b) &&
			a.fa(b, `${a.g.K.Ra},input,select`) &&
			((f = a.sa.encrypt(d)),
			(d = ' '),
			e.push(f),
			f.then(k => {
				g.v = k;
			}),
			(f = !0));
		if ((h = new Rf(a.g.K.kb, a).transform(b, g.n))) (g.n = h.name), (d = f ? d : h.value);
		if (a.g.G.publicKeyString && !f)
			for (f = 0; f < a.g.G.encryptNodeAttributes.length; ++f) {
				const { sel: k, attrs: l } = a.g.G.encryptNodeAttributes[f];
				a.matchesSelector(b, k) &&
					l.forEach(n => {
						n === c &&
							((n = a.sa.encrypt(d)),
							e.push(n),
							n.then(m => {
								g.v = m;
							}));
					});
			}
		g.v = d;
		return g;
	}
	function th(a, b, c, d) {
		(b = Zg(a, b, c, d, [])) && P(a, b);
	}
	function sh(a, b) {
		var c;
		if ((c = void 0 === c ? null : c)) {
			if (c.dh.has(b)) return !0;
		} else if (a.g.K.mb && a.fa(b, a.g.K.mb)) return !0;
		return !1;
	}
	function uh(a, b) {
		b = void 0 === b ? document : b;
		Y(a, function () {
			const c = U(a, b);
			c.ab ||
				((c.ab = new (a.B.D.wa || MutationObserver)(d => {
					a.Of(b, d);
				})),
				c.ab.observe(b, { childList: !0, attributes: !0, characterData: !0, subtree: !0, attributeOldValue: !0, characterDataOldValue: !0 }));
		});
	}
	function Vg(a, b) {
		const c = [];
		b.forEach(function (d) {
			let e = !1;
			1 == d.target.nodeType && a.fa(d.target, a.g.K.Pd) && (e = !0);
			e || c.push(d);
		});
		return c;
	}
	function Xg(a, b, c, d, e) {
		const f = [];
		for (let g = 0; g < b.length; ++g) {
			const h = b[g].target,
				k = b[g].node,
				l = b[g].type;
			1 == c.get(h) ? 'r' == l && e.push(k) : a.B.D.$(d.documentElement || d, h) ? f.push(b[g]) : 'r' == l && e.push(k);
		}
		return f;
	}
	function ah(a, b) {
		for (var c = 0; b && b != document; ) ++c, (b = a.B.D.parentNode(b));
		return c;
	}
	function $g(a, b) {
		for (var c = b.target, d, e = 0; e < a.length; ++e)
			if (a[e].target == c) {
				d = a[e];
				break;
			}
		d || ((d = { target: b.target, list: [] }), a.push(d));
		for (e = 0; e < d.list.length; ++e) if (d.list[e].node == b.node) return;
		d.list.push(b);
	}
	function Wg(a, b, c) {
		if (1 !== c.get(b) && (c.set(b, 1), (b = a.B.D.childNodes(b)))) for (let d = 0; d < b.length; ++d) Wg(a, b[d], c);
	}
	function fh(a) {
		a.R &&
			!a.Ab &&
			(a.Ab = setTimeout(() => {
				sc(a.R, 'dom', new Date().getTime());
				a.Ab = null;
			}, a.g.G.domChangedThrottleDuration));
	}
	function vh(a) {
		const b = 6e4 * a.g.G.sessionTimeoutMinutes;
		return new Date(a.B.D.Ka() + b);
	}
	function wh(a, b) {
		if (b) {
			const c = vh(a);
			a.g.G.sessionPersistenceMediums.forEach(d => {
				try {
					switch (d) {
						case 'cookie':
							a.za({ [a.g.G.sessionCookieName]: b, expires: c.toUTCString() });
							break;
						default:
							const f = a.Z.get('s');
							f && f !== b && a.Z.clear();
							a.Z.set('s', b);
							var e = a.Z;
							e.A.exp = c.getTime();
							tf(e, 'exp');
					}
				} catch (f) {}
			});
		}
	}
	function xh(a) {
		if (null === a.Ce) {
			a.Ce = setTimeout(() => {
				a.Ce = null;
			}, 1e3);
			a.Je && clearTimeout(a.Je);
			var b = 6e4 * a.g.G.sessionTimeoutMinutes;
			wh(a, a.ea);
			a.Je = setTimeout(function () {
				Y(a, function () {
					a.qa = !0;
					a.A && (clearTimeout(a.A), (a.A = void 0));
					a.Pb && clearTimeout(a.Pb);
					a.ia && clearTimeout(a.ia);
				});
			}, b);
		}
	}
	function yh(a) {
		if (0 < a.g.G.maxSessionDuration) {
			null !== a.Rc && (Zc(a.ja, 'max-session-duration-exceeded', { sessionID: a.Rc }), (a.Rc = null));
			const { nh: b, oh: c } = zh(a);
			if (b > a.g.G.maxSessionDuration) return (a.Rc = a.ea), Eg(a), Sc(a), !0;
			a.ia && (clearTimeout(a.ia), (a.ia = null));
			a.ia = setTimeout(() => {
				yh(a);
			}, c);
		}
		return !1;
	}
	function Ah(a) {
		var [, b] = a.Jc,
			c = document.documentElement.scrollHeight;
		if (0 != c) {
			var d = b + a.wb;
			d > a.zc && ((a.zc = d), W(a, 'sd', a.zc));
			d = 10 * D((d / c) * 10);
			100 < d && (d = 100);
			d > a.Lc && ((a.Lc = d), W(a, 'xs', a.Lc));
			var e = new Date().getTime();
			d = e - a.Eb;
			if (1e3 < d) {
				a.Eb = e;
				e = Math.floor((b / c) * 10);
				b = Math.floor(((b + a.wb) / c) * 10);
				10 == b && (b = 9);
				for (c = e; c <= b && !((a.wa[c] += d), 0 > c || 10 < c); c++);
				a.wa.totalTime += d;
				Bh(a);
			}
		}
	}
	function Ch(a) {
		a.qa
			? ((a.qa = !1), Sc(a))
			: a.nc ||
			  (yh(a),
			  a.wc
					? (a.nc = setTimeout(
							b => {
								a.nc = null;
								let c = b - a.wc;
								6e4 < c && (c = 6e4);
								a.uc += c;
								W(a, 'e', D(a.uc / 1e3));
								a.wc = b;
								xh(a);
								Ah(a);
							},
							500,
							new Date().getTime(),
					  ))
					: (a.wc = a.cb));
	}
	function Sg(a) {
		a.za({ [a.g.G.sessionCookieName]: '', expires: Jg() });
		a.Z.clear();
	}
	function Ig(a, b, c) {
		c = void 0 === c ? !0 : c;
		C(function* () {
			a.la.Ja !== b
				? xd(a.la, b)
				: !a.Ee &&
				  a.jf &&
				  ((a.Ee = !0),
				  Jd(a, a.Ma, a.Ba),
				  a.Mb.O &&
						(yield new Promise(d => {
							const e = () => {
								Ag(a.Mb, e);
								d();
							};
							zg(a.Mb, e);
						})),
				  window.removeEventListener('resize', a.mc),
				  Dh(a),
				  c && (Bh(a, !0), Eh(a), Eg(a)),
				  ch(a, document.documentElement, !0),
				  (a.$ = []),
				  (a.Ma.length = 0),
				  (a.Ma = []),
				  (a.O = {}),
				  (a.Na = !1),
				  (a.sb = 0),
				  (a.le = 0),
				  (a.va = void 0),
				  (a.ea = void 0),
				  (a.Rb = !1),
				  (a.Sc = void 0),
				  (a.Ha = void 0),
				  (a.nb = null),
				  (a.Kb = null),
				  (a.Zb = 0),
				  (a.wg = 0),
				  (a.df = 0),
				  (a.Ac = 0),
				  (a.Xb = 0),
				  (a.Hc = 0),
				  a.A && (clearTimeout(a.A), (a.A = void 0), (a.ra = !1)),
				  a.pa && (clearTimeout(a.pa), (a.pa = null)),
				  a.Ab && (clearTimeout(a.Ab), (a.Ab = null)),
				  a.ia && (clearTimeout(a.ia), (a.ia = null)),
				  (a.de = 0),
				  (a.ae = void 0),
				  (a.Gc = 0),
				  (a.he = null),
				  (a.Ic = 0),
				  (a.Te = 0),
				  (a.Jc = [0, 0]),
				  (a.Aa = null),
				  (a.qa = !1),
				  (a.Lg = NaN),
				  (a.Mg = NaN),
				  (a.cb = void 0),
				  (a.Jb = void 0),
				  (a.Wb = void 0),
				  (a.wc = 0),
				  (a.xc = null),
				  (a.yc = null),
				  a.nc && clearTimeout(a.nc),
				  (a.nc = null),
				  (a.uc = 0),
				  Fh(a),
				  (a.ff = 0),
				  (a.W = 0),
				  (a.Lf = 0),
				  (a.ke = 0),
				  (a.Gb = []),
				  Gh(a),
				  Mf(a.g),
				  Lf(a.g),
				  ve(a.B.jb),
				  qg(a.B.Fb),
				  a.ua && !a.Db && (a.ua = new Date().getTime()),
				  yield Hh(a, b),
				  (a.Ee = !1));
		});
	}
	function Hg(a, b, c, d) {
		d = void 0 === d ? {} : d;
		a = { namespace: 'quantum', scope: a.sub, type: c };
		for (var e in d) d.hasOwnProperty(e) && (a[e] = d[e]);
		b.postMessage(a, '*');
	}
	function Ih(a, b, c) {
		c = void 0 === c ? 50 : c;
		const d = new Rf(a.g.K.kb, a);
		if (0 == c || !b) return '';
		var e = me(a, a.B.D.parentNode(b));
		if (!U(a, b).sg) {
			var f = function () {
					for (var u = 0, w = 0, t = n.length; w < t && 100 > w; w++)
						if (n[w] == b) {
							u = w + 1;
							break;
						}
					return Ih(a, l, c - 1) + m + k + ':nth-child(' + u + ')';
				},
				g = function () {
					var u = 0,
						w = b.classList;
					if (0 !== w.length) {
						var { name: t, value: r } = d.transform(b, 'class');
						w = r.split(' ');
						for (let q = 0; q < w.length; q++) {
							for (var y = `${k}[${t}~="${w[q].trim()}"]`, A = 0, v = n.length; A < v && 1 >= u && A < c; A++) a.fa(n[A], y) && (u += 1);
							if (1 == u) return Ih(a, l, c - 1) + m + y;
						}
					}
				},
				h = function () {
					for (var u = 0, w = 0, t = n.length; w < t && 1 >= u && 100 > w; w++) a.B.D.tagName(n[w]).toLowerCase() == k && (u += 1);
					if (1 == u) return Ih(a, l, c - 1) + m + k;
				},
				k = X(a, b),
				l = a.B.D.parentElement(b);
			if (!l)
				if (e) l = a.B.D.parentNode(b).host;
				else return 'html' == k ? 'html' : '';
			var n = e ? a.B.D.shadowRoot(l).children : a.B.D.children(l);
			const m = e ? ' S# ' : ' > ';
			e =
				(function () {
					var u = a.B.D.getRootNode(b);
					if ('head' == k || 'body' == k || 'html' == k) return k;
					const w = me(a, u);
					if (b.id && !/"|'|&|object /.test(b.id) && 1 === a.B.D.A(u, `[id="${b.id}"]`).length) {
						const { name: t, value: r } = d.transform(b, 'id'),
							y = `[${t}="${r}"]`,
							A = 1 === a.B.D.A(u, y).length;
						if (w && A) return Ih(a, u.host, c - 1) + ' S# ' + y;
						if (A) return y;
					}
					if (b.attributes && b.attributes.name) {
						const { name: t, value: r } = d.transform(b, 'name');
						u = `${k}[${t}="${r}"]`;
						return w ? Ih(a, l, c - 1) + m + u : u;
					}
				})() ||
				h() ||
				g() ||
				f();
			U(a, b).sg = e;
		}
		return U(a, b).sg;
	}
	function Jh(a, b, c, d) {
		Ch(a);
		const e = O(a, b);
		void 0 !== e && ((a.yc = e), 'mouse' === a.xc && a.B.Fb.start(b), a.g.K.ka && P(a, { t: 'O', I: e, x: c, y: d }));
	}
	function Kh(a, b, c, d) {
		Ch(a);
		const e = O(a, b);
		void 0 !== e && (og(a.B.Fb, b), (a.yc = null), a.g.K.ka && P(a, { t: 'X', I: e, x: c, y: d }));
	}
	function Lh(a, b, c) {
		return T(c, a.g.K.Ef) || (a.g.K.Gd && a.fa(b, a.g.K.Gd)) ? !1 : !0;
	}
	function Mh(a, b) {
		var c = new Date().getTime();
		b = Xa(b);
		100 > c - a.vc ? ((b = { v: b, t: new Date().getTime() }), W(a, 'cje', b), Fg(a, 'cje', b)) : a.kf[b] || (V(a, -18, b), (a.kf[b] = 1));
	}
	function Nh(a) {
		let b;
		window.location && 'string' == typeof window.location.search && (b = window.location.search);
		if (void 0 !== b && -1 !== b.indexOf('utm_')) {
			var c = a.B.D.Ka();
			id(b).forEach((d, e) => {
				e = ua[e];
				void 0 !== e && M(a.R, { id: e, oa: 2, flags: 0, ga: c }, d);
			});
		}
	}
	function Oh(a, b, c, d) {
		var e = X(a, b);
		if ('select' === e) return Array.from(0 > b.selectedIndex ? b.options : b.selectedOptions, h => Oh(a, h, c, d)).join(' ');
		var f = a.fa(b, a.g.K.fb) || a.fa(b, a.g.K.Ra);
		e = 'input' == e || 'textarea' == e;
		const g = sh(a, b) || (a.g.K.eb && a.fa(b, a.g.K.eb));
		if ((f || e) && !g) return se(a, b, c, d);
		f = $f(a.Og, b);
		return f.length ? f : se(a, b, c, d);
	}
	function Eg(a) {
		a.Le && (Ph(a), a.A && clearTimeout(a.A), (a.ra = !1), (a.A = null), gh(a, a.Vb, !0), a.A && clearTimeout(a.A), (a.ra = !1), (a.A = null), gh(a, a.Cb, !0));
	}
	function Qh(a, b, c, d) {
		if (b) {
			Ch(a);
			++a.Zb;
			W(a, 'c', a.Zb);
			var e = O(a, b);
			if (void 0 !== e) {
				if ('input' == X(a, b)) {
					var f = U(a, b);
					!!f.hc != b.checked && (th(a, b, 'checked', b.checked), (f.hc = b.checked));
				}
				var g = se(a, b, c, d);
				wc(a.R, b);
				f = Oh(a, b, c, d);
				a.g.K.ka && P(a, { t: 'b', I: e, v: f });
				var h = new Date().getTime(),
					k = !1;
				if (a.ob == b && 2e3 > h - a.vc && a.de < a.vc) {
					if (3 == ++a.Ze) {
						if (g && Lh(a, b, g)) {
							k = !0;
							var l = { t: new Date().getTime(), v: f };
							W(a, 'pf', l);
							Fg(a, 'pf', l);
						}
						a.Ae = 10;
					}
				} else a.Ze = 0;
				k ||
					(a.ob == b && 30 > Math.abs(a.Vd - c) && 30 > Math.abs(a.Zd - d) && 2e3 > h - a.vc
						? 3 == ++a.Ae && g && Lh(a, b, g) && ((g = { t: new Date().getTime(), v: f }), W(a, 'rc', g), Fg(a, 'rc', g))
						: (a.Ae = 0));
				a.ob = b;
				a.vc = h;
				a.Vd = c;
				a.Zd = d;
				a.Jb && 1 == a.wg++ && (V(a, -9, f), Eg(a));
				if (a.Da) {
					h = '';
					try {
						h = Ih(a, b);
					} catch (t) {
						J(a, `stable_selector=${t.message}`);
					}
					g = b;
					for (k = 0; 50 > g.offsetHeight && a.B.D.parentNode(g) && 10 > k++; )
						if (300 > a.B.D.parentNode(g).offsetHeight) g = a.B.D.parentNode(g);
						else break;
					k = g;
					g = h;
					if (k != b)
						try {
							g = Ih(a, k);
						} catch (t) {}
					l = b.getBoundingClientRect();
					k = c - (l.left + window.pageXOffset);
					var n = d - (l.top + window.pageYOffset);
					k = 0 == l.width ? 0 : Math.min(100, (k / l.width) * 100);
					var m = 0 == l.height ? 0 : Math.min(100, (n / l.height) * 100),
						u = new Date().getTime() - a.cb;
					(l = a.O.qc) || (a.O.qc = l = []);
					n = Qe(a.B.Fe, b);
					{
						var w = a.B.Fb;
						const t = w.cache.get(b);
						t && null !== t.start
							? null === t.timeout || w.A.B.yf.closest(b, w.A.g.K.dd)
								? (null !== t.timeout && (clearTimeout(t.timeout), (t.timeout = null)), (w = w.A.B.D.Ka() - t.start))
								: (clearTimeout(t.timeout), (t.timeout = null), (w = t.start = null))
							: (w = null);
					}
					f = { t: 'H', n: f, x: D(k), y: D(m), tc: u, ts: new Date().getTime() };
					g.length && h.length ? ((f.PP = g), (f.P = h)) : J(a, 'STABLE_PATH=' + `Could not generate stable selector: ${O(a, b)}`);
					n.length ? (f.ev = n) : J(a, 'ELEMENT_VEIN=' + `Could not generate element vein: ${O(a, b)}`);
					null !== w && (f.h = w);
					l.push(f);
					a.Na = !0;
					a.g.K.ka && ((b = { t: 'L', I: e, P: h || '', ev: n, x: c, y: d }), null !== w && (b.h = w), P(a, b));
				}
			}
		}
	}
	function Ph(a) {
		a.Aa && (Rh(a, a.Aa), Sh(a, a.Aa));
		Th(a);
		Uh(a);
	}
	function Vh(a, b, c, d) {
		if (!d) return 0;
		b = Math.abs(b - d[0]) / a.Ub;
		a = Math.abs(c - d[1]) / a.wb;
		return Math.sqrt(b * b + a * a);
	}
	function Wh() {
		return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	}
	function Xh(a, b) {
		if (b) {
			b = b.split('?')[0];
			for (var c = 0; c < a.g.K.ne.length; c++) b = b.replace(a.g.K.ne[c], '');
			return b;
		}
		return '';
	}
	function Bh(a, b) {
		var c = a.Eb - a.ee;
		if (3e4 <= c || (0 < c && (void 0 === b ? 0 : b))) for (a.ee = a.Eb, b = a.wa.totalTime, c = 0; 10 > c; c++) W(a, 'sd' + c, D((a.wa[c] / b) * 100));
	}
	function Yh(a, b, c) {
		(void 0 === c ? 0 : c) && Ch(a);
		a.xc = 'scroll';
		var d, e;
		[d, e] = Pe(a, b);
		if (b === document) {
			c = '';
			var f = Vh(a, d, e, a.Jc);
			f && ((a.Xb += f), W(a, 's', a.Xb));
			a.Jc = [d, e];
			if (a.fc && ((f = d), a.fc && 0 < f)) {
				var g = Wh();
				a.sf == g ? a.uf != f && a.Ub == g && 5 == a.Ah++ && V(a, -6, Xh(a, a.ya)) : (a.sf = g);
				a.uf = f;
			}
			Ah(a);
		} else if (((c = O(a, b)), void 0 === c)) return;
		a.B.pc.fe(b);
		a.g.K.ka && P(a, { t: 'S', I: c, x: d, y: e });
	}
	function Zh(a, b) {
		const c = b.pageX,
			d = b.pageY,
			e = b.clientX,
			f = b.clientY;
		'scroll' === a.xc && ((b = a.B.D.qa(b)[0]), a.B.Fb.start(b));
		a.xc = 'mouse';
		b = new Date().getTime();
		if (100 > b - a.Me)
			a.yd && clearTimeout(a.yd),
				(a.yd = setTimeout(function () {
					a.g.K.ka && P(a, { t: 'm', x: c, y: d });
				}, 100));
		else {
			var g = Vh(a, e, f, a.nf);
			g && ((a.Ac += g), W(a, 'm', a.Ac));
			a.nf = [e, f];
			a.Me = b;
			a.g.K.ka && P(a, { t: 'm', x: c, y: d });
		}
	}
	function $h(a, b) {
		if ('number' == typeof b.selectionStart && 'number' == typeof b.selectionEnd) return [b.selectionStart, b.selectionEnd - b.selectionStart];
		var c = document.selection.createRange();
		if (!c || (a.B.D.parentNode(c) && a.B.D.parentNode(c) != b)) return [0, 0];
		a = b.value.length;
		var d = b.createTextRange();
		d.moveToBookmark(c.getBookmark());
		c = b.createTextRange();
		c.collapse(!1);
		if (-1 < d.compareEndPoints('StartToEnd', c)) return [a, 0];
		b = b.value.replace(/\r\n/g, '\n');
		var e = -d.moveStart('character', -a);
		e += b.slice(0, e).split('\n').length - 1;
		if (-1 < d.compareEndPoints('EndToEnd', c)) return [e, a - e];
		a = -d.moveEnd('character', -a);
		a += b.slice(0, a).split('\n').length - 1;
		return [e, a - e];
	}
	function ai(a, b) {
		return (void 0 === b ? 0 : b) ? [Yf(a), !0] : [a, !1];
	}
	function bi(a, b) {
		if (!a.La(b)) {
			var c = a.Oa(b);
			1 === c.state && ((c.state = 2), ++c.Hf, ci(a, b, c));
			!b.value && c.filled ? ((c.filled = !1), ci(a, b, c)) : b.value && !c.filled && ((c.filled = !0), ci(a, b, c));
			if ((c = di(a, b))) {
				c = a.Oa(c);
				var d = c.zf;
				c.zf = b;
				d != b && (d && ci(a, d, a.Oa(d)), ci(a, b, a.Oa(b)));
			}
		}
	}
	function ei(a, b) {
		C(function* () {
			var c = O(a, b);
			if (void 0 !== c && 'hidden' !== b.type && (bi(a, b), a.g.K.ka)) {
				c = { t: 'C', I: c };
				if ('checkbox' === b.getAttribute('type') || 'radio' === b.getAttribute('type')) c.v = b.checked.toString();
				else {
					var d = fi(b);
					if (a.La(b) && 0 < b.value.length) {
						d = '****';
						var e = !0;
					} else [d, e] = ai(d, a.hb(b));
					!a.g.G.publicKeyString || e || sh(a, b) ? (c.v = d) : ((c.qenc = yield a.sa.encrypt(d)), (c.v = Yf(d)));
				}
				P(a, c);
			}
		});
	}
	function gi(a, b, c) {
		if (!a.La(b)) {
			var d = O(a, b);
			if (void 0 !== d)
				try {
					c || (c = $h(a, b)), (U(a, b).rb = c), a.g.K.ka && P(a, { t: '*', I: d, s: c[0], l: c[1] });
				} catch (e) {}
		}
	}
	function hi(a, b, c, d) {
		C(function* () {
			Ch(a);
			var e = a.hb(c);
			if (!a.La(c)) {
				var f = O(a, c);
				if (void 0 !== f) {
					var g = X(a, c);
					if ('input' == g || 'textarea' == g) {
						g = U(a, c);
						try {
							var h = $h(a, c),
								k = g.mh;
							if (k)
								if (k[0] < h[0]) {
									if (g.Fa != c.value) {
										f = { t: ']', I: f };
										var [l, n] = ai(c.value.substring(k[0], h[0]), e);
										!a.g.G.publicKeyString || n || sh(a, c)
											? ((f.v = l), (g.Fa = c.value))
											: (1 < l.length && ((f.qenc = yield a.sa.encrypt(l)), (g.Fa = c.value)), (f.v = Yf(l)));
										a.g.K.ka && P(a, f);
										g.rb[0] = h[0];
										g.rb[1] = 0;
										bi(a, c);
									}
								} else
									(k[0] > h[0] || k[1] > h[1] || 46 == d.keyCode) &&
										g.Fa != c.value &&
										(P(a, { t: ']', I: f, x: h[0] }), (g.rb[0] = h[0]), (g.rb[1] = 0), (g.Fa = c.value), bi(a, c));
							else ei(a, c), (g.Fa = c.value), bi(a, c);
							(g.rb && g.rb[0] == h[0] && g.rb[1] == h[1]) || gi(a, c, h);
							g.mh = h;
						} catch (m) {
							g.Fa != c.value && (ei(a, c), (g.Fa = c.value));
						}
					} else {
						h = ((d.shiftKey ? 1 : 0) << 0) | ((d.ctrlKey ? 1 : 0) << 1) | ((d.altKey ? 1 : 0) << 2) | ((d.metaKey ? 1 : 0) << 3);
						f = { t: b, I: f, c: d.keyCode };
						if (a.g.G.maskInputs || e || (a.g.G.publicKeyString && !sh(a, c))) (h = 1), (f.c = 56);
						h && (f.f = h);
						a.g.K.ka && P(a, f);
					}
				}
			}
		});
	}
	function ii(a, b) {
		var c = a.Oa(b);
		c.state = 1;
		c.Xd = new Date().getTime();
		c.$f = !1;
		a.Aa = b;
		setTimeout(function () {
			Rh(a, b);
		}, 10);
	}
	function ji(a, b) {
		a.Oa(b).state = 0;
		a.Aa == b && (a.Aa = null);
		var c = b.value;
		if (!a.La(b) && a.Sf.test(c) && !a.Ue && !ki(a, b)) {
			a.Ue = !0;
			const d = a.g.G.publicKeyString && Tg(a, b) ? 256 : 0;
			d
				? a.sa.encrypt(c).then(e => {
						V(a, -8, e, d);
				  })
				: V(a, -8, c, d);
		}
		setTimeout(function () {
			Rh(a, b);
		}, 1e3);
		xc(a.R, b);
		Sh(a, b);
	}
	function fi(a) {
		const b = a.getAttribute('type');
		a = 'checkbox' == b || 'radio' == b ? a.checked.toString() : a.value;
		return null == a ? '' : a;
	}
	function Rh(a, b) {
		var c = U(a, b),
			d = fi(b);
		d != c.Fa && ((c.Fa = d), ei(a, b));
	}
	function li(a, b) {
		return a.replace(b, function (c) {
			let d = '';
			for (let e = 0; e < c.length; ++e) d += '*';
			return d;
		});
	}
	function mi(a) {
		if (!a.Pe) {
			var b = function (h) {
					return function (k) {
						const [l, n] = c(k);
						M(d.R, { id: h, oa: 1, xa: 1, flags: n ? 256 : 0, ga: d.B.D.Ka() }, l);
					};
				},
				c = function (h) {
					if (!h) return ['', !1];
					h = h
						.toString()
						.replace(/"|\r?\n|\r|\t/g, '')
						.replace(d.zh, '')
						.trim();
					for (var k = 0; k < d.g.K.$d.length; ++k) {
						const l = d.g.K.$d[k];
						if (l.test(h)) {
							h = li(h, l);
							break;
						}
					}
					k = T(h, d.g.K.Bf);
					return [h, k];
				},
				d = a,
				e = window.alert;
			window.alert = function (h) {
				Y(d, function () {
					b(-23)(h);
				});
				return e.apply(window, arguments);
			};
			var f = window.confirm;
			window.confirm = function (h) {
				Y(d, function () {
					b(-47)(h);
				});
				return f.apply(window, arguments);
			};
			if (a.g.G.hookPrompt && 0 == !window.location.href.indexOf('capacitor:')) {
				var g = window.prompt;
				window.prompt = function (h) {
					Y(d, function () {
						b(-48)(h);
					});
					return g.apply(window, arguments);
				};
			}
			a.Pe = !0;
		}
	}
	function ni(a, b) {
		b = a.B.D.A(document, void 0 === b ? 'input' : b);
		for (var c = 0; c < b.length; ++c) a.Yf(b[c]);
		a.Od.forEach(a.Yf.bind(a));
	}
	function oi() {
		return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	}
	function pi(a, b, c, d) {
		Ch(a);
		if (a.g.K.ka && ((c = O(a, c)), void 0 !== c && void 0 !== d.touches)) {
			for (var e = [], f = 0; f < d.touches.length; ++f) {
				var g = d.touches[f];
				e.push({ p: [g.pageX, g.pageY], r: [g.radiusX, g.radiusY], a: g.rotationAngle, f: g.force });
			}
			P(a, { t: b, I: c, T: e });
		}
	}
	function qi(a, b) {
		if (b.getAttribute) {
			var c = b.getAttribute('id');
			if (c) {
				try {
					var d = a.B.D.A(document, 'label[for="' + c.replace(/"/g, '\\"') + '"]');
				} catch (f) {}
				if (d && 0 < d.length && (d = a.B.D.textContent(d[0]) || a.B.D.innerText(d[0])) && ((d = d.trim()), 30 > d.length)) return d;
			}
			if ((d = b.getAttribute('title')) || (d = b.getAttribute('name'))) return d;
			if ((d = b.getAttribute('placeholder'))) return "'" + d + "'";
			if ('form' == X(a, b) && b.querySelector) {
				var e = a.B.D.ra(b, 'input[type=submit]');
				e && (d = e.value);
				if (d) return '|' + d;
			}
			if ((d = c)) return '#' + d;
			if ((d = b.getAttribute('class'))) return '.' + d;
			if ((d = b.getAttribute('action'))) return '!' + d;
		}
		return (d = O(a, b)) ? '@' + d : '';
	}
	function di(a, b) {
		for (b = a.B.D.parentNode(b); b; ) {
			if ('form' == b.nodeName.toLowerCase() || b == document) return b;
			b = a.B.D.parentNode(b);
		}
		return null;
	}
	function ki(a, b, c) {
		c = void 0 === c ? null : c;
		if (1 !== b.nodeType) return null;
		if (c) {
			if (c.Jh.has(b)) return !1;
			if (a.g.K.ub || c.Kh.has(b)) return !0;
		} else {
			if (a.g.K.eb && a.fa(b, a.g.K.eb)) return !1;
			if (a.g.K.ub || (a.g.K.fb && a.fa(b, a.g.K.fb)) || (a.g.K.Yc && a.fa(b, a.g.K.Yc))) return !0;
		}
		return a.lb(b);
	}
	function Tg(a, b, c) {
		if ((c = void 0 === c ? null : c)) {
			if (c.dh.has(b)) return !1;
			if (c.Eh.has(b)) return !0;
		} else {
			if (a.g.K.mb && a.fa(b, a.g.K.mb)) return !1;
			if ((a.g.K.Ra && a.fa(b, a.g.K.Ra)) || a.fa(b, a.g.K.Bd)) return !0;
		}
		return rh(a, b);
	}
	function Sh(a, b) {
		var c = a.Oa(b);
		if (!c.$f) {
			var d = new Date().getTime();
			c.If = (c.If || 0) + (d - c.Xd);
			ci(a, b, c);
			1 == c.state ? (c.Xd = d) : (c.$f = !0);
		}
	}
	function ci(a, b, c) {
		C(function* () {
			if (!a.hb(b) && !a.g.G.maskInputs) {
				var d = di(a, b);
				if (d) {
					var e = a.Oa(d);
					e.Wf || ri(a, d, e);
					d = { c: c.Hf || 0, '?': !!c.filled, d: b == e.zf, t: c.If || 0 };
					var f = b.value || '';
					f && 100 < f.length && (f = f.substring(0, 99));
					a.g.G.publicKeyString ? ((d.qenc = yield a.sa.encrypt(f)), (d.v = yield zc(a.sa, f))) : (d.v = f);
					if (!(a.g.G.disableFormSubmitFields || (c.Fa && c.Fa == d.v))) {
						var g = lh(a);
						(f = g.f) || (g.f = f = {});
						(g = f[e.id]) || (f[e.id] = g = {});
						g[c.name] = d;
						c.Fa = d.v;
					}
					e = a.R;
					e.Wd = c;
					sc(e, 'form', new Date().getTime());
				}
			}
		});
	}
	function ri(a, b, c) {
		c.id = ++a.Te;
		if (!a.g.G.disableFormSubmitFields) {
			var d = lh(a),
				e = d.F;
			e || (d.F = e = []);
			c.Wf = !0;
			a = (b.getAttribute && Xh(a, b.getAttribute('action'))) || '';
			e.push({ i: c.id, n: c.name, a, ts: new Date().getTime() });
		}
	}
	function Ug(a, b) {
		var c = b.toString();
		b.stack && (c += '\n' + b.stack.toString());
		uc(a, c);
		a.Ea = !0;
		a.$ = [];
		a.O = {};
	}
	function si(a, b, c) {
		c = void 0 === c ? !1 : c;
		var d = jh(a, b);
		if (
			!d.kh &&
			((d.kh = !0),
			(d = {
				wheel: function (e) {
					var f = a.B.pc,
						g = f.J.B.D.da.contentWindow.Date.now();
					({ deltaY: e } = e);
					0 < e
						? (2500 < g - f.Ea && ((f.na = 0), (f.A = 0)), (f.Ea = g), 1 == f.L && f.na++, (f.A += Math.abs(e)), (f.L = -1))
						: 0 > e && (2500 < g - f.Na && ((f.Aa = 0), (f.W = 0)), (f.Na = g), -1 == f.L && f.Aa++, (f.W += Math.abs(e)), (f.L = 1));
					!Math.abs(e) ||
						3 > f.Aa ||
						3 > f.na ||
						50 > f.W ||
						50 > f.A ||
						((g = f.J.B.D.da.contentWindow.Date.now()),
						(f.pa && 5e3 > g - f.pa) || (M(f.J.R, { flags: 0, id: -64, ga: new Date().getTime(), oa: 1, xa: 1 }, ''), (f.pa = g)));
				},
				click: function (e) {
					if (ti(e)) {
						let g = e.pageX;
						var f = e.pageY;
						'' === e.pointerType &&
							((f = e.target.getBoundingClientRect()), (g = f.left + window.scrollX + f.width / 2), (f = f.top + window.scrollY + f.height / 2));
						Qh(a, Z(a, e), g, f);
					}
				},
				dblclick: function (e) {
					Qh(a, Z(a, e), e.pageX, e.pageY);
				},
				contextmenu: function (e) {
					var f = Z(a, e),
						g = e.pageX;
					e = e.pageY;
					Ch(a);
					f = O(a, f);
					void 0 !== f && a.g.K.ka && P(a, { t: 'R', I: f, x: g, y: e });
				},
				mousedown: function (e) {
					var f = Z(a, e),
						g = e.pageX;
					e = e.pageY;
					Ch(a);
					f = O(a, f);
					void 0 !== f && P(a, { t: 'D', I: f, x: g, y: e });
				},
				mouseup: function (e) {
					var f = Z(a, e),
						g = e.pageX;
					e = e.pageY;
					Ch(a);
					f = O(a, f);
					void 0 !== f && P(a, { t: 'U', I: f, x: g, y: e });
				},
				pointerup: function (e) {
					var f = Z(a, e);
					if (ti(e) && f != document) {
						{
							var g = e.pageX;
							e = e.pageY;
							const h = X(a, f);
							1 == f.nodeType && Fa.has(h) && f.disabled && ((f = Oh(a, f, g, e)), V(a, -49, f));
						}
					}
				},
				keypress: function (e) {
					const f = Z(a, e);
					a.B.D.tagName(f) && hi(a, '[', f, e);
				},
				keyup: function (e) {
					const f = Z(a, e);
					e instanceof KeyboardEvent && f && a.B.D.tagName(f) && (++a.Hc, W(a, 'k', a.Hc), hi(a, '}', f, e));
				},
				paste: function (e) {
					e = Z(a, e);
					M(a.R, { flags: 0, kg: 2, id: -28, ga: new Date().getTime() }, se(a, e, 0, 0));
				},
				cut: function (e) {
					ui(a, Z(a, e));
				},
				copy: function (e) {
					ui(a, Z(a, e));
				},
				touchstart: function (e) {
					var f = Z(a, e);
					pi(a, '!', f, e);
				},
				touchmove: function (e) {
					var f = Z(a, e);
					pi(a, '@', f, e);
				},
				touchend: function (e) {
					var f = Z(a, e);
					pi(a, '#', f, e);
				},
				touchcancel: function (e) {
					var f = Z(a, e);
					pi(a, '$', f, e);
				},
			}),
			vi(a, b, {
				scroll: function (e) {
					e = a.B.D.L(e);
					a.B.D.tagName(e) && Yh(a, e, !1);
				},
				scrollend: function (e) {
					e = a.B.D.L(e);
					a.B.pc.kd(e);
				},
				select: function (e) {
					e = a.B.D.L(e);
					var f = X(a, e);
					('input' != f && 'textarea' != f) || gi(a, e);
				},
				play: function (e) {
					wi(a, a.B.D.L(e), !0);
				},
				pause: function (e) {
					wi(a, a.B.D.L(e), !1);
				},
				reset: function (e) {
					e = a.B.D.L(e);
					'form' != X(a, e) || a.La(e) || ((e = O(a, e)), void 0 !== e && a.g.K.ka && P(a, { t: 'E', I: e }));
				},
				change: function (e) {
					e = a.B.D.L(e);
					var f = X(a, e);
					('input' != f && 'textarea' != f && 'select' != f && 'option' != f) || Rh(a, e);
				},
				submit: function (e) {
					e = a.B.D.L(e);
					if ('form' == X(a, e)) {
						var f = O(a, e);
						if (void 0 !== f) {
							P(a, { t: 'SU', I: f });
							if (!a.g.G.disableFormSubmitFields) {
								f = a.Oa(e);
								f.Wf || ri(a, e, f);
								if (!a.g.G.disableFormSubmitFields) {
									var g = lh(a),
										h = g.S;
									h || (g.S = h = {});
									h[f.id] = new Date().getTime();
								}
								f = a.R;
								f.Yd = e;
								sc(f, 'formSubmitted', new Date().getTime());
							}
							Ph(a);
						}
					}
				},
				unhandledrejection: function (e) {
					try {
						a.g.G.disableErrorHooking || Mh(a, 'Unhandled rejection (promise: ' + e.promise + ', reason: ' + e.reason + ').');
					} catch (f) {}
				},
				focus: function (e) {
					a.g.K.ka &&
						((e = e.composedPath ? e.composedPath() : [e.target]),
						(e.find(f => me(a, f)) || document) === b &&
							e
								.filter((f, g) => 0 === g || me(a, f))
								.forEach(f => {
									me(a, f) && (f = f.host);
									if (f) {
										var g = X(a, f);
										('input' != g && 'textarea' != g) || ii(a, f);
										f = O(a, f);
										void 0 !== f && a.g.K.ka && P(a, { t: 'F', I: f });
									}
								}));
				},
				blur: function (e) {
					a.g.K.ka &&
						((e = e.composedPath ? e.composedPath() : [e.target]),
						(e.find(f => me(a, f)) || document) === b &&
							e
								.filter((f, g) => 0 === g || me(a, f))
								.forEach(f => {
									me(a, f) && (f = f.host);
									if (f) {
										var g = X(a, f);
										('input' != g && 'textarea' != g) || ji(a, f);
										f = O(a, f);
										void 0 !== f && a.g.K.ka && P(a, { t: 'B', I: f });
									}
								}));
				},
				mouseover: function (e) {
					((e.composedPath ? e.composedPath() : [e.target]).find(f => me(a, f)) || document) === b && Jh(a, Z(a, e), e.pageX, e.pageY);
				},
				mouseout: function (e) {
					((e.composedPath ? e.composedPath() : [e.target]).find(f => me(a, f)) || document) === b && Kh(a, Z(a, e), e.pageX, e.pageY);
				},
			}),
			!c)
		) {
			vi(a, b, d);
			a.B.D.addEventListener(
				window,
				'focus',
				function () {
					setTimeout(() => {
						a.g.K.ka && P(a, { t: 'wf' });
					}, 0);
				},
				!0,
			);
			let e = null;
			a.B.D.addEventListener(
				window,
				'blur',
				function () {
					pg(a.B.Fb);
					null === e &&
						(e = setTimeout(() => {
							e = null;
							var f = document.activeElement;
							'iframe' == X(a, f) && (W(a, 'c', ++a.Zb), wc(a.R, f), W(a, 'ifr', { c: ++a.df, t: new Date().getTime() }), Ph(a));
							a.g.K.ka && P(a, { t: 'wb' });
						}, 0));
				},
				!0,
			);
		}
	}
	function xi(a) {
		a.gf ||
			((a.gf = !0),
			document.addEventListener &&
				a.B.D.addEventListener(
					document,
					'mousemove',
					function (b) {
						Y(a, function () {
							Zh(a, b);
						});
					},
					!1,
				),
			window.addEventListener &&
				(a.B.D.addEventListener(
					window,
					'load',
					function () {
						Y(a, function () {
							P(a, { t: '~' });
						});
					},
					!1,
				),
				a.B.D.addEventListener(
					window,
					'DOMContentLoaded',
					function () {
						Y(a, function () {
							P(a, { t: '`' });
						});
					},
					!1,
				),
				a.B.D.addEventListener(
					window,
					'resize',
					function () {
						Y(a, function () {
							Ch(a);
							a.Ub = Wh();
							a.wb = oi();
							a.g.K.ka && P(a, { t: '+', w: a.Ub, h: a.wb });
							Yh(a, document);
						});
					},
					!1,
				),
				a.B.D.addEventListener(
					window,
					'pagehide',
					() => {
						Y(a, function () {
							if (!a.Jb) {
								Jd(a, a.Ma, a.Ba);
								a.Jb = new Date().getTime();
								Bh(a, !0);
								Eh(a);
								var b = a.R.ob;
								if (b) {
									const d = Oh(a, b, a.Vd, a.Zd);
									var c = '';
									try {
										c = Ih(a, b);
									} catch (e) {}
									b = yi(a, b);
									W(a, 'out', { t: 'OUT', u: b || '', n: d, P: c || '', ts: new Date().getTime() });
								}
								a.Wb = new Date().getTime();
								P(a, { t: 'f' });
								Eg(a);
							}
						});
					},
					!1,
				),
				a.B.D.addEventListener(
					window,
					'orientationchange',
					function () {
						Y(a, function () {
							try {
								let b;
								if (window.screen.orientation) {
									const { orientation: c } = window.screen;
									b = c.angle;
								} else b = window.orientation;
								Ch(a);
								P(a, { t: '/', o: b });
								V(a, -41, b);
								Yh(a, document);
							} catch (b) {}
						});
					},
					!1,
				),
				a.B.D.addEventListener(
					window,
					'scroll',
					function () {
						Y(a, function () {
							Yh(a, document, !0);
						});
					},
					!1,
				),
				a.g.G.validateFrameSrcCSP &&
					'SecurityPolicyViolationEvent' in window &&
					(a.B.D.addEventListener(
						window,
						'securitypolicyviolation',
						b => {
							(va.test(b.blockedURI) || va.test(b.documentURI) || va.test(b.sourceFile)) &&
								J(a, 'CSP_VIOLATION=' + `violation on: ${window.location.href}; directive violated: ${b.violatedDirective}`);
						},
						!1,
					),
					setTimeout(() => {
						a.B.Oh = new Qf(a);
					}, 2500))),
			si(a, document));
	}
	function wi(a, b, c) {
		b = O(a, b);
		void 0 !== b && a.g.K.ka && P(a, { t: 'M', I: b, p: c });
	}
	function ui(a, b) {
		M(a.R, { flags: 0, kg: 2, id: -29, ga: new Date().getTime() }, se(a, b, 0, 0));
	}
	function ti(a) {
		return !1 !== a.isTrusted || (a.forwardedTouchEvent && 1 == a.forwardedTouchEvent) || (a.isIonicTap && 1 == a.isIonicTap) ? !0 : !1;
	}
	function vi(a, b, c) {
		for (const d of Object.keys(c))
			a.B.D.addEventListener(
				b,
				d,
				function (e) {
					Y(a, function () {
						c[d](e);
					});
				},
				!0,
			);
	}
	function Z(a, b) {
		return !a.B.D.Ea(b) || a.Td ? a.B.D.L(b) : (a = a.B.D.qa(b)) && a.length ? a[0] : null;
	}
	function zi(a, b) {
		return b ? ('select' === X(a, b) ? b : zi(a, a.B.D.parentNode(b))) : null;
	}
	function Ng(a) {
		return Og(a) ? a.ma.getEntriesByType('navigation')[0] : a.ma.timing;
	}
	function Og(a) {
		return !!a.ma.timeOrigin && !!a.ma.getEntriesByType('navigation')[0];
	}
	function Ai(a) {
		a.Xe = 'visible' === document.visibilityState;
		if (!a.Xe && a.ma) {
			var b = Ng(a);
			b = Og(a) ? a.ma.timeOrigin : b.navigationStart;
			a.We = a.B.D.Ka() - b;
		}
	}
	function Bi(a) {
		a.Sc ||
			(a.Sc = setTimeout(function () {
				Ci(a);
			}, a.g.G.publishInterval));
	}
	function Uh(a) {
		if (0 != a.$.length && a.Rb) {
			var b = 0 == a.sb && a.Rb;
			if ((a.ea && a.va) || b) {
				b = a.sb;
				a.$[0].SN = b;
				a.sb += a.$.length;
				var c = a.B.D.stringify(a.$);
				a.Cb.send(c, b);
				a.$ = [];
			}
		}
		Bi(a);
	}
	function Di(a) {
		a.Pb && clearTimeout(a.Pb);
		a.Pb = setTimeout(function () {
			Y(a, function () {
				W(a, 'p', 1);
				a.Pb = null;
				a.qa || Di(a);
			});
		}, 3e4);
	}
	function Th(a) {
		if (a.Na && a.va) {
			var b = a.le;
			a.le = b + 1;
			var c = a.B.D.stringify(a.O);
			a.Vb.send(c, b);
			a.O = {};
			Di(a);
			a.Na = !1;
		}
	}
	function Ei(a) {
		if (!a.Za) {
			a.Za = {};
			try {
				var b = (function () {
					var c = navigator.userAgent,
						d = c.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
					if (/trident/i.test(d[1])) {
						var e = /\brv[ :]+(\d+)/g.exec(c) || [];
						return 'IE ' + (e[1] || '');
					}
					if ('Chrome' === d[1] && ((e = c.match(/\b(OPR|Edge)\/(\d+)/)), null != e)) return e.slice(1).join(' ').replace('OPR', 'Opera');
					d = d[2] ? [d[1], d[2]] : [navigator.appName, navigator.appVersion, '-?'];
					null != (e = c.match(/version\/(\d+)/i)) && d.splice(1, 1, e[1]);
					return d.join(' ');
				})().split(' ');
				2 == b.length && ((a.Za.Ya = b[0]), (a.Za.version = b[1]));
			} catch (c) {}
		}
		return a.Za;
	}
	function Fi(a, b, c) {
		var d = 'undefined' !== typeof navigator.onLine ? navigator.onLine : null;
		c
			? ((b = c.headers.entries()),
			  (b = Array.from(b)
					.map(e => {
						var [f, g] = e;
						return `${f}=${g}`;
					})
					.join(',')),
			  (d = `status:${c.status}:type:${c.type}:redirected:${c.redirected}:headers:${b}:online:${d}`))
			: ((c = Ei(a)), (d = `error:${b.message}:online:${d}:browser:${c.Ya}:version:${c.version}`));
		return d;
	}
	function Gi(a, b) {
		return C(function* () {
			let c = new TextEncoder().encode(b),
				{ readable: d, writable: e } = new window.CompressionStream('deflate'),
				f = e.getWriter();
			f.write(c);
			f.close();
			return new Uint8Array(yield new a.B.D.da.contentWindow.Response(d).arrayBuffer());
		});
	}
	function Hi(a, b, c) {
		if (!b || -5 == b) {
			if (-5 != b) {
				if (0 < a.oc) throw Error(c);
				uc(a, c + '\n' + Error().stack.toString());
			}
			a.Ea = !0;
			a.$ = [];
			a.O = {};
		}
	}
	function Ii(a, b, c) {
		c = void 0 === c ? !1 : c;
		try {
			var d = b.split('/');
			if (3 !== d.length || -1 < b.indexOf('DOCTYPE')) throw Error('Invalid session response');
			a.ea = d[0];
			a.Ha = d[1];
			a.va = d[2];
		} catch (e) {
			Hi(a, !1, `BSR:${b}`);
		}
		Ji(a);
		Ki(a, c);
		a.na.forEach(e => {
			a.B.D.isConnected(e) ? Hg(a, e.contentWindow, 'register_new_hit') : a.na.delete(e);
		});
		a.$b.size &&
			(a.$b.forEach(e => {
				a.B.D.isConnected(e) && Hg(a, e.contentWindow, 'parent_reset', { parentHitId: a.va });
			}),
			a.$b.clear());
		a.zb.length && (P(a, { t: 'qr', v: a.zb }), Qg(a, 4096, a.zb, { xa: 1 }), (a.zb = []));
		a.Cc.length && (P(a, { t: 'lt', v: a.Cc }), Qg(a, 32768, a.Cc), (a.Cc = []));
		a.xb.length && (P(a, { t: 'markers', v: a.xb }), Qg(a, 8192, a.xb, { xa: 1 }), (a.xb = []));
		a.yb.length && (P(a, { t: 'mesures', v: a.yb }), Qg(a, 16384, a.yb, { xa: 1 }), (a.yb = []));
	}
	function Li(a) {
		a.he != a.Cb ? (Dg(a, a.Cb), Dg(a, a.Vb)) : (Dg(a, a.Vb), Dg(a, a.Cb));
	}
	function Mi(a, b, c, d, e, f, g) {
		C(function* () {
			if (!a.qa && g == a.ya) {
				a.ra = !0;
				var h = c,
					k = !!a.ea,
					l = b.L(e);
				l.S = b.A;
				l.N = e;
				0 == e && a.Oc && (l.pid = a.Oc);
				f && (l.M = 1);
				l.Q || ((l.P = a.ff++), 0 < a.W && (l.E = a.W));
				var n = !1;
				l.z = 2;
				if (a.g.G.enableCompression && 'CompressionStream' in window && 'TextEncoder' in window && !a.Jb)
					try {
						(c = yield Gi(a, c)), (l.z = 1);
					} catch (u) {}
				var m = Ra(l);
				a.Jb && navigator.sendBeacon && navigator.sendBeacon(a.g.G.reportURL + '?' + m, c) && (n = !0);
				n ||
					dd(
						a,
						'POST',
						a.g.G.reportURL + '?' + m,
						function (u) {
							Y(a, function () {
								const w = this;
								return C(function* () {
									if (200 != u.status) throw (J(w, 'XHR_STATUS=' + u.status + '-for-' + d + '-' + b.A + '-' + g), Error('!200'));
									if (0 == e && !l.Q) {
										const t = yield u.text();
										if ('<>' == t) {
											Hi(a, -5, 'conn4');
											return;
										}
										Ii(a, t, k);
										a.g.G.fallbackReportURLS && -1 !== a.Fc && a.B.D.Storage.setItem.call(window.sessionStorage, 'qm-nidx', a.Fc.toString());
										a.va && Zc(a.ja, 'start', { sessionID: a.ea, userID: a.Ha, hitID: a.va, url: a.la.$a.bb });
									}
									b.A += d;
									a.Gc += c.length;
									a.ra = !1;
									a.he = b;
									a.Qc ? Ye(a) : Li(a);
									a.W = 0;
								});
							});
						},
						function (u, w) {
							if (a.g.G.fallbackReportURLS && a.g.G.fallbackReportURLS.length) {
								a.Fc++;
								const t = a.g.G.fallbackReportURLS[a.Fc];
								if (t) {
									Lc.reportURL = a.g.G.reportURL = t;
									Lc.syncURL = a.g.G.reportURL;
									setTimeout(() => {
										Mi(a, b, h, d, e, f, g);
									}, a.g.G.fallbackReportURLDelay);
									return;
								}
							}
							a.W < a.g.G.sendRetries
								? (++a.W,
								  setTimeout(() => {
										Mi(a, b, h, d, e, f, g);
								  }, 1500 * a.W))
								: Hi(a, 0, `conn2:${Fi(a, u, w)}`);
						},
						c,
						'text/plain',
					);
				a.ae = new Date().getTime();
			}
		});
	}
	function Ni(a) {
		a.A ||
			(a.A = setTimeout(function () {
				a.A = void 0;
				Li(a);
			}, a.g.G.sendInterval));
	}
	function gh(a, b, c) {
		if (((void 0 !== c && c) || !a.ra) && !a.qa && !a.Qc && 0 < b.Xc.length) {
			var d = 8 * a.ac - a.Gc;
			c = a.ae;
			c || (c = a.cb);
			c = Math.floor(((new Date().getTime() - c) / 1e3) * a.ud * 8);
			c > a.ac && (c = a.ac);
			d < c && (d = c);
			if (0 < d) {
				c = b.Xc[0];
				var e = c.data,
					f = e.length;
				d = d < f ? d : f;
				if (0 < d) {
					var g = e;
					'string' == typeof g ? d < e.length && (g = g.substring(0, d)) : (g = e.subarray(0, d));
					f -= d;
					Mi(a, b, g, d, c.sb, 0 < f, a.ya);
					0 < f ? ((c.data = 'string' == typeof g ? e.substring(d) : e.subarray(d)), Ni(a)) : b.Xc.shift();
				}
			} else Ni(a);
		}
	}
	function Ji(a) {
		try {
			wh(a, a.ea), Oi(a, a.Ha);
		} catch (f) {}
		try {
			if (a.g.G.sessionVar)
				for (var b = window, c = a.g.G.sessionVar.split('.'), d = 0; d < c.length; d++) {
					var e = c[d];
					if (d == c.length - 1) b[e] = a.ea;
					else if (((b = b[e]), !b)) {
						console.error(' - QM (extra) session failed - ' + e + ".  Object path doesn't exist: " + a.g.G.sessionVar);
						break;
					}
				}
		} catch (f) {}
		try {
			Pi(a);
		} catch (f) {}
	}
	function Ki(a, b) {
		const c = () => {
			if (null !== a.Hb)
				try {
					Qi(a);
				} catch (u) {
					J(a, `Unable to bridge with network interceptor: ${u.message}`);
				}
			Ph(a);
			if (a.g.G.abnSegmentCookie) {
				var e = Yb(a.g.G.abnSegmentCookie);
				e && e && Qc(a) != e && M(a.R, { flags: 128, id: -100, ga: new Date().getTime() }, e);
			}
			try {
				var f = window.doNotTrack || window.navigator.doNotTrack || window.navigator.msDoNotTrack;
				if (f) {
					e = !1;
					switch (typeof f) {
						case 'number':
							1 == f && (e = !0);
							break;
						case 'string':
							e = '1' === f.charAt(0) || 'yes' === f;
					}
					e &&
						M(
							a.R,
							{
								flags: 0,
								id: -45,
								ga: new Date().getTime(),
								xa: 0,
							},
							'',
						);
				}
			} catch (u) {}
			M(a.R, { id: -9998, xa: 0, flags: 512, ga: new Date().getTime() }, '1.35.14');
			P(a, { t: 'git', v: '0db7d482' });
			a.Db || Ri(a) || M(a.R, { id: -9997, xa: 0, flags: 1024, ga: new Date().getTime() }, 'web');
			Nh(a);
			'reload' != qd(a, 'type') || a.Kc
				? 'back_forward' != qd(a, 'type') || a.Kc || ((f = { flags: 0, id: -30, ga: new Date().getTime() }), M(a.R, f, a.ya), (a.Kc = !0))
				: ((f = { flags: 0, id: -10, ga: new Date().getTime() }), M(a.R, f, a.ya), (a.Kc = !0));
			f = a.Z.get('slr', null);
			null === f && ((f = a.g.G.logResourcePercent ? new Date().getTime() % 100 < a.g.G.logResourcePercent : !1), a.Z.set('slr', f));
			a.cg = f;
			a.af || ((a.af = !0), a.cg && Si(a), a.g.G.logLongTasks && Ti(a), a.g.G.logMarkers && a.g.K.ie.length && Ui(a), a.g.K.je.length && Vi(a));
			a.fd && M(a.R, { flags: 0, id: -26, ga: new Date().getTime(), oa: 0 }, '');
			if (a.g.G.checkBlankPages)
				try {
					if ('object' === typeof window.sessionStorage && a.ma) {
						var g = window.location.hostname;
						if (document.referrer && 0 <= document.referrer.indexOf(g)) {
							var h = a.B.D.Storage.getItem.call(window.sessionStorage, 'qm_last_page'),
								k = a.B.D.Storage.getItem.call(window.sessionStorage, 'qm_last_period');
							if (k) {
								var l = new Date().getTime(),
									n = l - parseInt(k, 10) - (a.ma && a.ma.timing.navigationStart ? l - a.ma.timing.navigationStart : 5e3);
								if (n > a.g.G.pbpThreshold && 6e4 > n) {
									var m = 'reload' == qd(a, 'type');
									g = !1;
									h && 0 <= h.indexOf(document.referrer) && (g = !0);
									h = 'Gap';
									m && (h += ' Reload');
									g && (h += ' Ref_Match');
									M(a.R, { flags: 0, kg: 1, id: -27, ga: new Date().getTime() }, h);
								}
							}
						}
						a.B.D.Storage.setItem.call(window.sessionStorage, 'qm_last_page', document.location.toString());
						a.B.D.Storage.removeItem.call(window.sessionStorage, 'qm_last_period');
					}
				} catch (u) {}
			!Yb(a.g.G.sessionCookieName) && a.wd && M(a.R, { flags: 0, id: -55, ga: new Date().getTime(), oa: 0 }, '');
			a.wd || M(a.R, { flags: 0, id: -33, ga: new Date().getTime(), oa: 0 }, '');
			a.Z.set('eSync', !0);
		};
		if (void 0 === b ? 0 : b) {
			b = a.Z.get('eSync', !1);
			var d = a.Z.get([], {});
			if (
				b &&
				Ua(d) &&
				((b = Sa(d)), a.cf || (document.referrer && new URL(document.referrer).host === window.location.host) || (!document.referrer && !a.g.G.temp.enableKVS))
			) {
				vc(a.R, b);
				c();
				return;
			}
			a.g.G.horizonEnabled
				? a.g.G.temp.enableKVS
					? ((b = Ra({ s: a.ea, Q: 5 })),
					  dd(
							a,
							'GET',
							a.g.G.reportURL + '?' + b,
							function (e) {
								Y(a, function () {
									return C(function* () {
										let f,
											g,
											h = yield e.text();
										h = h.replace(/[\u0000-\u001F\f]/gm, '');
										if ('' === h) vc(a.R, { E: [] });
										else {
											try {
												f = a.B.D.Pa(h);
											} catch (k) {
												g = k.toString();
											}
											Hi(a, f, 'BEI-' + g + '-' + h);
											a.Z.import(f);
											f = Sa(f);
											vc(a.R, f);
										}
										c();
									});
								});
							},
							function () {
								Y(a, function () {
									vc(a.R, { E: [] });
									c();
								});
							},
					  ))
					: (vc(a.R, { E: [] }), c())
				: ((b = a.g.G.reportURL + '?' + Ra({ s: a.ea, H: a.va, Q: 3 })),
				  dd(a, 'GET', b, function (e) {
						Y(a, function () {
							return C(function* () {
								var f = '';
								try {
									f = yield e.text();
									var g = a.B.D.Pa(f.replace(/(\n|\r|\f)/gm, ' ').replace(/[\u0000-\u001F]+/g, ''));
								} catch (k) {
									var h = k.toString();
								}
								Hi(a, g, 'BEI-' + h + '-' + f);
								if (!h) {
									vc(a.R, g);
									f = g;
									h = Object.assign({}, f);
									g = f.E;
									f = f.cv;
									h = (delete h.E, delete h.cv, delete h.s, h);
									f && (h.cv = f);
									if (g) for (f = 0; f < g.length; ++f) h[`event:${Qa()}`] = g[f];
									g = h;
									a.Z.import(g);
									c();
								}
							});
						});
				  }));
		} else vc(a.R, { E: [] }), c();
	}
	function Qg(a, b, c, d) {
		d = void 0 === d ? {} : d;
		M(a.R, { id: 0, oa: d.oa || 1, xa: d.xa || null, flags: b, ga: new Date().getTime() }, c);
	}
	function Ri(a) {
		return a.B.D.W(window) !== window;
	}
	function Wi(a, b) {
		var c = { T: 'B', u: a.ya, t: a.cb, v: new Date().getTime() },
			d = a.ua;
		d && (c.QF = d);
		a.va && (c.H = a.va);
		a.ea && (c.s = a.ea);
		0 === b && a.Ha && (c.U = a.Ha);
		a.Wb && (c.f = a.Wb);
		return c;
	}
	function Fh(a) {
		a.Cb = new Cg(a, function (b) {
			return Wi(a, b);
		});
		a.Vb = new Cg(a, function (b) {
			b = Wi(a, b);
			b.Q = 2;
			return b;
		});
	}
	function Ci(a) {
		Y(a, function () {
			a.Sc = void 0;
			Uh(a);
			Th(a);
		});
	}
	function Eh(a) {
		W(a, 'c', a.Zb);
		W(a, 'm', a.Ac);
		W(a, 's', a.Xb);
		W(a, 'k', a.Hc);
	}
	function Xi(a, b) {
		return 'string' !== typeof b
			? null
			: b.split('\r\n').reduce((c, d) => {
					if (!d) return c;
					const e = d.split(':')[0];
					for (let f = 0; f < a.g.K.Hd.length; ++f) if (a.g.K.Hd[f].test(e)) return c;
					return c + d + '\r\n';
			  }, '');
	}
	function Yi(a, b) {
		return C(function* () {
			var c = null;
			try {
				(c = b.qresponse && b.qresponse.length ? b.qresponse : '' == b.responseType || 'text' == b.responseType ? b.responseText : b.response),
					'blob' === b.responseType && 'application/json' === b.getResponseHeader('Content-Type') && (c = yield c.text().then(a.B.D.Pa)),
					'object' == typeof c && (c = a.B.D.stringify(c));
			} catch (d) {}
			return c;
		});
	}
	function Zi(a) {
		a = Ya(a);
		var b = Ya(document.cookie),
			c = '',
			d;
		for (d in b) b.hasOwnProperty(d) && ((a[d] && a[d] == b[d]) || (c += 'set-cookie: ' + d + '=' + decodeURIComponent(b[d]) + '\r\n'));
		return c;
	}
	function $i(a, b, c, d) {
		b = { t: 'pc', I: O(a, b), p: c, v: d };
		P(a, b);
	}
	function aj(a) {
		if (!a.eg) {
			a.eg = !0;
			var b = Ka(HTMLStyleElement.prototype, 'disabled');
			b.configurable &&
				Object.defineProperty(
					HTMLStyleElement.prototype,
					'disabled',
					Object.assign({}, b, {
						set: function (c) {
							try {
								$i(a, this, 'disabled', c);
							} catch (d) {}
							return b.set.call(this, c);
						},
					}),
				);
		}
	}
	function bj(a, b, c, d, e, f, g) {
		c = void 0 === c ? '' : c;
		d = void 0 === d ? null : d;
		e = void 0 === e ? 0 : e;
		f = void 0 === f ? null : f;
		g = void 0 === g ? null : g;
		return new Promise((h, k) => {
			try {
				if ('object' == typeof b && b.constructor && 'Response' === b.constructor.name && !b.Qg) {
					let l = {
						response: '',
						getAllResponseHeaders: function () {
							let n = '';
							if (b.headers && 'function' == typeof b.headers.entries) {
								const m = b.headers.entries();
								let u = 0,
									w = m.next();
								for (; !w.done && 1e3 > u; ) (n += `${w.value[0]}: ${w.value[1]}\r\n`), (w = m.next()), u++;
							}
							a.g.G.monitorXHRSetCookies && g && (n += Zi(g));
							return n;
						},
					};
					f && (l.reqHeaders = f);
					if (b.text && 'function' === typeof b.clone) {
						const n = b.clone();
						n.text()
							.then(function (m) {
								l.response = m;
								a.gb(n.status, n.url, e, c, d, l);
							})
							.catch(m => {
								'AbortError' === m.name && ((l.response = a.Oe), a.gb(n.status, n.url, e, c, d, l));
							})
							.finally(h);
					}
					b.Qg = 1;
				}
			} catch (l) {
				k(l);
			}
		});
	}
	function cj(a) {
		if (null === a.Hb && window.fetch && a.g.K.dc && !a.Ye) {
			a.Ye = !0;
			var b = window._o_Fetch || window.fetch;
			window.fetch = function (c, d) {
				try {
					if (a.Nd) return J(a, `Detected recursive fetch on: ${window.location.href}`), a.B.D.da.contentWindow.fetch.apply(this, arguments);
					a.Nd = !0;
					var e = new Date().getTime();
					let m;
					try {
						var f = function (p) {
							var x = null;
							try {
								if (p)
									if (((x = ''), 'function' == typeof p.entries)) {
										const B = p.entries();
										let Q = B.next();
										for (p = 0; !Q.done && 1e3 > p; ) (x += `${Q.value[0]}: ${Q.value[1]}\r\n`), (Q = B.next()), p++;
									} else for (let B in p) p.hasOwnProperty(B) && (x += `${B}: ${p.get ? p.get(B) : p[B]}\r\n`);
							} catch (B) {}
							return x;
						};
						m = c instanceof Request ? c : new Request(c, d);
						var g = null,
							h = null,
							k = null,
							l = null;
						if ('string' === typeof c) 'object' === typeof d ? ((h = d.body), (g = d.method), (k = f(m.headers))) : (g = 'GET');
						else if ('object' === typeof c && c.constructor && 'Request' === c.constructor.name && 'function' === typeof c.clone) {
							g = (d && d.method) || c.method;
							var n = c.clone();
							d && d.body && 'string' == typeof d.body && d.body.length
								? (h = d.body)
								: window.ReadableStream && n.body instanceof window.ReadableStream
								? Ma(n.body).then(p => (h = p))
								: n.text().then(function (p) {
										h = p;
								  });
							k = f((d && d.headers) || n.headers);
						}
						a.g.G.monitorXHRSetCookies && (l = document.cookie);
					} catch (p) {}
					let u = !1,
						w = !1,
						t = !1,
						r,
						y = d && d.signal && d.signal instanceof AbortSignal;
					try {
						y &&
							((r = new AbortController()),
							d.signal.addEventListener('abort', function () {
								w = !0;
								v();
							}),
							(d.signal = r.signal));
					} catch (p) {}
					let A = !1;
					const v = () => {
						A || !w || (u && !t) || (r.abort(), (A = !0));
					};
					let q = b.apply(this, arguments);
					try {
						q.then(function (p) {
							try {
								a.g.G.forceDeferFetchAborts && (u = !0),
									p.qmre_f ||
										((p.qmre_f = 1),
										bj(a, p.clone(), g, h, e, k, l).finally(() => {
											t = !0;
											v();
										}));
							} catch (x) {}
							y &&
								['arrayBuffer', 'blob', 'formData', 'json', 'text'].forEach(
									(x => B => {
										const Q = x[B];
										x[B] = function () {
											u = !0;
											return Q.call(this, arguments);
										};
									})(p),
								);
							return p;
						}).catch(p => {
							'AbortError' === p.name &&
								m &&
								((p = {
									response: '',
									getAllResponseHeaders: function () {
										let x = '';
										a.g.G.monitorXHRSetCookies && l && (x += Zi(l));
										return x;
									},
								}),
								k && (p.reqHeaders = k),
								(p.response = a.Oe),
								a.gb(-1, m.url, e, g, h, p));
						});
					} catch (p) {}
					return q;
				} finally {
					a.Nd = !1;
				}
			};
			window._o_Fetch && (window.QuantumMetricFetch = window.fetch);
			if (window.Promise && a.g.K.Mf && !a.Vf) {
				a.Vf = !0;
				const c = window.Promise.prototype.then;
				window.Promise.prototype.then = function (d, e) {
					const f = new Date().getTime();
					return c.call(
						this,
						function (g) {
							g &&
								'object' == typeof g &&
								g.constructor &&
								'Response' === g.constructor.name &&
								'function' === typeof g.clone &&
								!g.qmre_f &&
								((g.qmre_f = 1), bj(a, g.clone(), null, null, f, null));
							return d ? d(g) : g;
						},
						e,
					);
				};
			}
		}
	}
	function dj(a, b, c) {
		var d = U(a, b),
			e = d.url,
			f = d.method,
			g = new Date().getTime();
		if (4 === b.readyState) a.gb(b.status, e, g, f, c, b);
		else {
			var h = function () {
				Y(a, function () {
					e = e || b.responseURL;
					4 == b.readyState &&
						(b.qaborted || ((b.qresponse = b.response), a.gb(b.status, e, g, f, c, b)), b.removeEventListener && b.removeEventListener('readystatechange', h));
				});
			};
			b.addEventListener && a.B.D.addEventListener(b, 'readystatechange', h, !1);
		}
	}
	function ej(a) {
		function b(n, m) {
			var u = this;
			Y(f, function () {
				var w = U(f, u);
				w.method = n;
				w.url = m;
			});
			return g.apply(this, arguments);
		}
		function c(n) {
			var m = this;
			Y(f, () => {
				setTimeout(function () {
					dj(f, m, n);
				}, 0);
			});
			return h.apply(this, arguments);
		}
		function d(n, m) {
			try {
				this.reqHeaders = (this.reqHeaders || '') + (n + ': ' + m + '\r\n');
			} catch (u) {}
			return k.apply(this, arguments);
		}
		function e() {
			var n = this;
			Y(f, function () {
				n.qaborted = !0;
			});
			return l.apply(this, arguments);
		}
		var f = a;
		if (null === a.Hb) {
			a = window.XMLHttpRequest.prototype;
			var g = a.open,
				h = a.send,
				k = a.setRequestHeader,
				l = a.abort;
			if (g && h && k && ((a.open = b), (a.send = c), (a.setRequestHeader = d), (a.abort = e), a.open != b))
				try {
					Object.defineProperty(a, 'open', { value: b, writable: !0, enumerable: !0, configurable: !0 }),
						Object.defineProperty(a, 'send', { value: c, writable: !0, enumerable: !0, configurable: !0 }),
						Object.defineProperty(a, 'setRequestHeader', { value: d, writable: !0, enumerable: !0, configurable: !0 }),
						Object.defineProperty(a, 'abort', { value: e, writable: !0, enumerable: !0, configurable: !0 });
				} catch (n) {}
		}
	}
	function fj(a) {
		if (void 0 !== a.ea) return a.ea;
		for (let b = 0; b < a.g.G.sessionPersistenceMediums.length; b++) {
			const c = a.g.G.sessionPersistenceMediums[b];
			try {
				switch (c) {
					case 'cookie':
						const d = Ya(document.cookie)[a.g.G.sessionCookieName].trim();
						if (d && E(d)) return d;
						break;
					default:
						const e = a.Z.get('s', !1);
						if (e && E(e)) return e;
				}
			} catch (d) {}
		}
		return null;
	}
	function gj(a) {
		a.cb = new Date().getTime();
		try {
			a.Pc && ((a.ea = a.Pc), (a.Pc = void 0), a.Z.restore(`${'QM:s:'}${a.ea}`));
			a.ea = fj(a);
			a: {
				for (let c = 0; c < a.g.G.userPersistenceMediums.length; c++) {
					const d = a.g.G.userPersistenceMediums[c];
					try {
						switch (d) {
							case 'cookie':
								const e = Ya(document.cookie)[a.g.G.userCookieName];
								if (e && E(e)) {
									var b = e.trim();
									break a;
								}
								break;
							default:
								const f = a.Bc.get('u', !1);
								if (f && E(f)) {
									b = f;
									break a;
								}
						}
					} catch (e) {}
				}
				b = null;
			}
			a.Ha = b;
			a.Z.get('s', null) && a.Z.get('s') !== a.ea && a.Z.clear();
		} catch (c) {}
	}
	function Jg() {
		return 'Thu, 01 Jan 1970 00:00:00 GMT';
	}
	function hj(a) {
		try {
			var b = a.g.G.cookieDomain;
			if (null !== b && void 0 !== b) return a.g.G.cookieDomain;
			var c = a.B.D.Storage.getItem.call(window.sessionStorage, 'qmd');
			if (null !== c && void 0 !== c) return (a.g.G.cookieDomain = c);
			const d = window.location.host.split(':')[0].split('.');
			b = null;
			for (c = 2; c <= d.length; c++) {
				const e = d.slice(Math.max(d.length - c, 0)).join('.');
				a.za({ ['qm-rc']: '', domain: e });
				if (-1 < document.cookie.indexOf('qm-rc')) {
					b = e;
					break;
				}
			}
			if (null !== b)
				return a.za({ ['qm-rc']: '', expires: Jg(), domain: b }), a.B.D.Storage.setItem.call(window.sessionStorage, 'qmd', b), (a.g.G.cookieDomain = b);
		} catch (d) {}
		return window.location.host;
	}
	function Oi(a, b) {
		if (b) {
			const c = new Date(a.B.D.Ka() + 31536e6);
			a.g.G.userPersistenceMediums.forEach(d => {
				try {
					switch (d) {
						case 'cookie':
							a.za({ [a.g.G.userCookieName]: b, expires: c.toUTCString() });
							break;
						default:
							a.Bc.set('u', b, c);
							var e = a.Bc;
							e.A.exp = c.getTime();
							tf(e, 'exp');
					}
				} catch (f) {}
			});
		}
	}
	function Pi(a) {
		C(function* () {
			if (a.Kb && a.ea) return ij(a, a.Kb.data, a.Kb.hash);
		});
	}
	function Si(a) {
		if (a.ma.getEntriesByType)
			try {
				(a.Xf = new window.PerformanceObserver(function (b) {
					b = b.getEntries();
					if (a.Da)
						try {
							const f = a.ma.timing.domInteractive - a.ma.timing.requestStart;
							let g = [];
							a: for (let h = 0; h < b.length && !(a.ke > a.g.G.maxResourcesPerHit); h++) {
								const k = b[h],
									l = k.initiatorType;
								if (-1 < a.g.G.allowedResourceTypes.indexOf(l)) {
									const n = {};
									try {
										let m = gd(a.g.K.Lb, a.g.K.Tb, k.name);
										if (
											-1 < m.indexOf(a.g.G.syncURL) ||
											(a.g.G.hashResourceURL && -1 < m.indexOf(a.g.G.hashResourceURL)) ||
											-1 < m.indexOf(a.g.G.reportURL) ||
											(-1 < m.indexOf('quantummetric.com') && !a.g.G.isPivot) ||
											T(m, a.g.K.jg)
										)
											continue a;
										for (const w in a.pe)
											if (a.pe.hasOwnProperty(w)) {
												const t = a.pe[w];
												n[t] = null;
												if ('undefined' !== typeof k[w]) {
													let r = k[w];
													if ('number' == typeof r) {
														if (-1 < a.Hg.indexOf(w) && ((r -= a.Xa), 14e6 < r)) continue a;
														r = Math.max(D(r), 0);
													}
													n[t] = r;
												}
											}
										n.st = [];
										if (k.serverTiming) {
											const w = k.serverTiming;
											for (var c = 0; c < w.length; c++) {
												const t = w[c];
												try {
													n.st.push({ d: t.description, n: t.name, v: t.duration });
												} catch (r) {}
											}
										}
										n.cr = 'xmlhttprequest' !== l && k.requestStart < f ? 1 : 0;
										n.xo = !m.match(a.Se);
										if ('script' == l) {
											c = !1;
											var d = a.B.D.ra(document, "script[src='" + k.name + "']");
											!d || (null == d.getAttribute('async') && null == d.getAttribute('defer')) || (c = !0);
											var e = c ? 1 : 0;
										} else e = null;
										n.as = e;
										n.co = 'css' == l || 'script' == l ? (k.decodedBodySize > 1.1 * k.transferSize ? 1 : 0) : null;
										let u = Na(k, ['duration'], !1);
										0 != u ? (u = 10 > u ? 1 : 0) : (u = null);
										n.c = u;
										m && 1024 < m.length && (m = m.substring(0, 1024));
										n.p = m;
										g.push(n);
										a.ke++;
									} catch (m) {}
								}
							}
							g.length && (a.Da ? (P(a, { t: 'qr', v: g }), Qg(a, 4096, g, { xa: 1 })) : (a.zb = a.zb.concat(g)));
						} catch (f) {
							console.error('QM:: could not process resource timings:', f);
						}
				})),
					a.Xf.observe({ type: 'resource', buffered: !0 });
			} catch (b) {}
	}
	function Ti(a) {
		if (a.ma.getEntriesByType)
			try {
				(a.xf = new window.PerformanceObserver(function (b) {
					b = b.getEntries();
					if (b.length) {
						let d = [];
						for (let e = 0; e < b.length; e++) {
							var c = b[e];
							const f = c.duration;
							c = c.startTime;
							f >= a.g.G.longTaskDurationThreshold && d.push({ d: f, st: Math.max(D(c - a.Xa)) });
						}
						d.length && (P(a, { t: 'lt', v: d }), Qg(a, 32768, d));
					}
				})),
					a.xf.observe({ type: 'longtask', buffered: !0 });
			} catch (b) {}
	}
	function Ui(a) {
		a.Af = new window.PerformanceObserver(function (b) {
			b = b.getEntries();
			let c = [];
			for (let d = 0; d < b.length; d++) {
				const e = b[d],
					f = e.name;
				if (T(f, a.g.K.ie)) {
					let g = f;
					g && 255 < g.length && (g = g.substring(0, 255));
					c.push({ n: g, v: Math.max(D(e.startTime - this.Xa), 0) });
				}
				a.g.G.spaTransitionStartMarkerName &&
					f == a.g.G.spaTransitionStartMarkerName &&
					(a.la.od(a.g.G.spaTransitionStopMarkerName),
					(a.Ke = !0),
					(a.Xa = ud(a.la)),
					a.pa && clearTimeout(a.pa),
					a.g.G.temp.stopLoggingSpaMarkers || Rc(a.pb, 'spaMarker', !0));
				if (a.g.G.spaTransitionStopMarkerName && f == a.g.G.spaTransitionStopMarkerName) {
					const g = a.ma.getEntriesByName(String(a.g.G.spaTransitionStartMarkerName));
					a.Ke = !1;
					g &&
						g.length &&
						sd(a.la) &&
						(setTimeout(() => {
							Y(a, function () {
								a.la.ue(e.startTime - g[g.length - 1].startTime);
								Ig(a, a.la.Ja, !0);
							});
						}, 0),
						(a.Nc = null));
				}
			}
			c.length && (a.Da ? (P(a, { t: 'markers', v: c }), Qg(a, 8192, c, { xa: 1 })) : (a.xb = a.xb.concat(c)));
		});
		a.Af.observe({ type: 'mark', buffered: !0 });
	}
	function Vi(a) {
		try {
			(a.Gf = new window.PerformanceObserver(function (b) {
				b = b.getEntries();
				let c = [];
				for (let d = 0; d < b.length; d++) {
					const e = b[d];
					if (T(e.name, a.g.K.je)) {
						let f = e.name;
						f && 255 < f.length && (f = f.substring(0, 255));
						c.push({ n: f, v: Math.max(D(e.startTime - this.Xa), 0), d: D(e.duration) });
					}
				}
				c.length && (a.Da ? (P(a, { t: 'mesures', v: c }), Qg(a, 16384, c, { xa: 1 })) : (a.yb = a.yb.concat(c)));
			})),
				a.Gf.observe({ type: 'measure', buffered: !0 });
		} catch (b) {}
	}
	function Pg(a, b) {
		const c = Ng(a).loadEventEnd || Infinity;
		return b < a.We && b < c;
	}
	function jj(a) {
		const b = new Promise(e => {
				let f;
				const g = new window.PerformanceObserver(h => {
					h = h.getEntries().reduce(
						(k, l) => {
							const n = l.startTime;
							n > k.startTime && Pg(a, n) && (k = l);
							return k;
						},
						{ startTime: null },
					);
					clearTimeout(f);
					e(h.startTime);
					g.disconnect();
				});
				g.observe({ type: 'largest-contentful-paint', buffered: !0 });
				f = setTimeout(() => {
					e(null);
					g.disconnect();
				}, 200);
			}),
			c = new Promise(e => {
				let f;
				const g = new window.PerformanceObserver(h => {
					let k = null;
					for (const l of h.getEntries()) Pg(a, l.processingStart) && (k = l.processingStart - l.startTime);
					clearTimeout(f);
					e(k);
					g.disconnect();
				});
				g.observe({ type: 'first-input', buffered: !0 });
				f = setTimeout(() => {
					e(null);
					g.disconnect();
				}, 200);
			}),
			d = new Promise(e => {
				let f;
				const g = new window.PerformanceObserver(h => {
					let k = 0;
					for (const l of h.getEntries()) !l.hadRecentInput && Pg(a, l.startTime) && (k += l.value);
					clearTimeout(f);
					e(k);
					g.disconnect();
				});
				g.observe({ type: 'layout-shift', buffered: !0 });
				f = setTimeout(() => {
					e(null);
					g.disconnect();
				}, 200);
			});
		Promise.all([b, c, d])
			.then(e => {
				var [f, g, h] = e;
				e = {
					'largest-contentful-paint': f ? D(f, 3) : null,
					'first-input-delay': g ? D(g, 3) : null,
					'cumulative-layout-shift': h ? D(h, 3) : null,
				};
				const k = {};
				for (const l in e) e.hasOwnProperty(l) && (k[a.L[l]] = e[l]);
				P(a, { t: 'mt', v: k });
				Qg(a, 65536, k);
			})
			.catch(() => {});
	}
	function kj(a) {
		if (a.Gb && a.Gb.length)
			try {
				let b = {};
				const c = Ng(a),
					d = Og(a) ? a.ma.timeOrigin : c.navigationStart;
				let e = [];
				a.Gb.forEach(f => {
					let g = c[f];
					'number' === typeof g && (Og(a) || (g = Math.max(g - d, 0)), 0 < g && 14e6 > g ? (b[a.L[f]] = D(g)) : e.push(f));
				});
				P(a, { t: 'mt', v: b });
				Qg(a, 65536, b);
				a.Gb = e;
			} catch (b) {}
	}
	function lj(a) {
		C(function* () {
			var b = yield a.sa.encrypt(document.cookie);
			P(a, { t: 'c', encrypted_cookies: b });
		});
	}
	function mj(a) {
		return C(function* () {
			try {
				const b = Ei(a),
					{ fd: c } = yield Pf('Safari' == b.Ya, 'Chrome' == b.Ya, 'Firefox' == b.Ya);
				a.fd = c;
			} catch (b) {}
		});
	}
	function nj(a, b) {
		a.g.G.captureCookiesReplay
			? a.g.G.publicKeyString && !a.g.G.allowClearCookies
				? setTimeout(() => {
						lj(a);
				  }, 1e3)
				: a.la.za(b, document.cookie)
			: a.la.za(b, '');
		if (!a.la.gd(b)) {
			var c = Ng(a),
				d = c.domComplete;
			c = Og(a) ? a.ma.timeOrigin : c.navigationStart;
			d = D(c + d + a.g.G.webVitalsSnapshotBuffer, 0);
			d = a.B.D.Ka() - d;
			setTimeout(() => {
				jj(a);
			}, Math.abs(Math.min(d, 0)));
		}
		b = a.la.Md(b);
		a.Rb = !0;
		Gg(a, b);
		[, b] = Pe(a, document);
		a.B.pc.cache(document);
		0 != b && Yh(a, document);
		(Ri(a) && !a.Db) || We(a.B.fg);
	}
	function yi(a, b, c) {
		c = void 0 === c ? 0 : c;
		return b && a.B.D.tagName(b) && 'a' == a.B.D.tagName(b).toLowerCase() && b.getAttribute('href')
			? b.getAttribute('href')
			: a.B.D.parentNode(b) && 10 > c++
			? yi(a, a.B.D.parentNode(b), c)
			: null;
	}
	function ij(a, b, c) {
		return C(function* () {
			if (a.ea) {
				a.Kb = null;
				var d = b,
					e = Wi(a);
				e.Q = 1;
				e.Y = 1;
				e.X = c;
				e.z = 2;
				if (a.g.G.enableCompression && 'CompressionStream' in window && 'TextEncoder' in window)
					try {
						(b = yield Gi(a, b)), (e.z = 1);
					} catch (f) {}
				e = Ra(e);
				dd(
					a,
					'POST',
					a.g.G.syncURL + '?' + e,
					() => {},
					(f, g) => {
						Y(a, function () {
							a.W < a.g.G.sendRetries
								? (setTimeout(() => {
										ij(a, d, c);
								  }, 1e3),
								  ++a.W)
								: Hi(a, 0, `connHSC:${Fi(a, f, g)}`);
						});
					},
					b,
					'text/plain',
				);
			} else a.Kb = { data: b, hash: c };
		});
	}
	function rh(a, b) {
		a = X(a, b);
		return 'input' === a || 'textarea' === a ? !0 : null;
	}
	function oj(a, b) {
		const c = Ka(b, 'checked');
		c &&
			c.configurable &&
			Object.defineProperty(
				b,
				'checked',
				Object.assign({}, c, {
					set: function () {
						const d = c.set.apply(this, arguments),
							e = arguments[0];
						try {
							const f = U(a, b);
							if (f.hc === e) return d;
							f.hc = e;
							$i(a, b, 'checked', e);
						} catch (f) {}
						return d;
					},
				}),
			);
	}
	function pj(a, b) {
		try {
			Rh(a, b);
		} catch (c) {}
	}
	function qj(a, b) {
		const c = a.B.D.A(b, 'option');
		for (let e = 0; e < c.length; e++) rj(a, c[e]);
		const d = Ka(HTMLSelectElement.prototype, 'selectedIndex');
		Object.defineProperty(
			b,
			'selectedIndex',
			Object.assign({}, d, {
				set(e) {
					e = d.set.call(this, e);
					pj(a, b);
					return e;
				},
			}),
		);
	}
	function ph(a, b) {
		const c = jh(a, b);
		if (!c.jh) {
			('checkbox' !== b.type.toLowerCase() && 'radio' !== b.type.toLowerCase()) || oj(a, b);
			'select' === b.nodeName.toLowerCase() && qj(a, b);
			var d = !0,
				e = !0,
				f = Ka(b, 'value');
			f && !f.configurable && (e = !1);
			if (f && e)
				try {
					Object.defineProperty(b, 'value', {
						configurable: !0,
						set: function () {
							const g = f.set.apply(this, arguments);
							pj(a, b);
							return g;
						},
						get: function () {
							return f.get.apply(this);
						},
					}),
						(d = !1);
				} catch (g) {}
			d && ((c.th = !0), a.Od.add(b));
			b.addEventListener('input', () => {
				pj(a, b);
			});
			c.jh = !0;
		}
	}
	function rj(a, b) {
		let c = Ka(HTMLOptionElement.prototype, 'selected');
		Object.defineProperty(
			b,
			'selected',
			Object.assign({}, c, {
				set(d) {
					c.set.call(this, d);
					(d = zi(a, b)) && pj(a, d);
				},
			}),
		);
	}
	function sj(a, b) {
		C(function* () {
			const c = O(a, b);
			var d = [];
			const e = a.B.D.ia(b);
			if (e) {
				for (let g = 0; g < e.length; ++g)
					try {
						d.push(fe(a.B.Qa, e[g]));
					} catch (h) {}
				d = Promise.all(d);
				a.Ba.push(d);
				ge(a.B.Qa);
				const f = { t: 'as', I: c, S: [] };
				d.then(g => {
					f.S = g;
				});
				Id(a, f);
			}
		});
	}
	function qh(a, b) {
		const c = U(a, b),
			d = a.B.D.shadowRoot(b);
		if (!c.qg) {
			const e = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), 'adoptedStyleSheets');
			e &&
				Object.defineProperty(d, 'adoptedStyleSheets', {
					set: function (f) {
						const g = e.set.apply(this, arguments);
						Y(a, function () {
							sj(a, d);
						});
						return g;
					},
					get: function () {
						return e.get.apply(this);
					},
					enumerable: e.enumerable,
					configurable: !0,
				});
			si(a, d, !0);
			c.qg = !0;
		}
		dh(a, d);
		uh(a, d);
	}
	function tj(a, b) {
		return b && 'object' == typeof b && 'quantum' == b.namespace && b.scope === a.sub;
	}
	function uj(a) {
		var b = document.documentElement;
		return C(function* () {
			var c = new fg({
				ca: new WeakMap(),
				hd: !1,
				sd: {},
				Va: new Set(),
				lb: () => !1,
				Vc: () => !1,
				qd: !1,
				pd: !1,
				url: a.ya,
				D: a.B.D,
				supports: a.B.supports,
			});
			const { Wa: d } = kg(b, c),
				e = new he({
					B: { D: { da: { contentWindow: a.B.D.da.contentWindow } } },
					g: { K: { ed: '*', bd: '', rc: !1 }, G: { hashResourceURL: '' } },
					Za: { Ya: a.Za.Ya },
					fa: a.fa.bind(a),
				});
			c.rd.forEach(k => {
				var { node: l, Wa: n } = k;
				11 === l.nodeType
					? ((k = a.B.D.ia(l).map(m => fe(e, m))),
					  Promise.all(k).then(m => {
							n.S = m;
					  }))
					: ('STYLE' === a.B.D.tagName(l) &&
							fe(e, l.sheet).then(m => {
								n.S = m;
								n.C = [];
							}),
					  'LINK' === a.B.D.tagName(l) && fe(e, l));
			});
			c = ge(e);
			const f = yield Promise.all(
					Array.from(a.na).map((k, l) => {
						const n = new Kd(),
							m = u => {
								tj(a, u.data) &&
									'page-freeze-complete' === u.data.type &&
									u.data.id === l &&
									n.resolve({ dom: u.data.dom, qf: u.data.qf, hoveredElement: u.data.hoveredElement });
							};
						window.addEventListener('message', m);
						Hg(a, k.contentWindow, 'page-freeze', { id: l });
						return Promise.race([
							n.md,
							new Promise(u => {
								setTimeout(u, 5e3, {});
							}),
						]).then(u => {
							window.removeEventListener('message', m);
							return u;
						});
					}),
				),
				g = f.find(k => k.hoveredElement),
				h = a.yc && [a.yc];
			h && g && g.hoveredElement && h.push(...g.hoveredElement);
			return c.then(() => ({ json: d, iframes: f, hoveredElement: h }));
		});
	}
	function oh(a, b) {
		const c = new a.B.D.da.contentWindow.WeakMap();
		if (1 !== b.nodeType) return c;
		var d = a.g.K.ub;
		if (a.g.G.publicKeyString) {
			var e = Ub(a, b, a.g.K.Ra);
			a.fa(b, a.g.K.Ra) && e.push(b);
			e.forEach(f => {
				c.set(f, { encrypt: !0 });
			});
			e = Ub(a, b, a.g.K.mb);
			a.fa(b, a.g.K.mb) && e.push(b);
			e.forEach(f => {
				c.has(f) || c.set(f, {});
				c.get(f).encrypt = !1;
			});
			a.g.G.encryptNodeAttributes.forEach(f => {
				const { sel: g, attrs: h } = f;
				f = Ub(a, b, g);
				a.fa(b, g) && f.push(b);
				f.forEach(k => {
					c.has(k) || c.set(k, {});
					k = c.get(k);
					k.cc ? (k.cc = k.cc.concat(h)) : (k.cc = h);
				});
			});
		}
		d ||
			((d = Ub(a, b, a.g.K.fb)),
			a.fa(b, a.g.K.fb) && d.push(b),
			d.forEach(f => {
				c.has(f) || c.set(f, {});
				c.get(f).qe = !0;
			}));
		d = Ub(a, b, a.g.K.eb);
		a.fa(b, a.g.K.eb) && d.push(b);
		d.forEach(f => {
			c.has(f) || c.set(f, {});
			c.get(f).qe = !1;
		});
		a.g.K.pg.forEach(f => {
			const { sel: g, attrs: h } = f;
			f = Ub(a, b, g);
			a.fa(b, g) && f.push(b);
			f.forEach(k => {
				c.has(k) || c.set(k, {});
				k = c.get(k);
				k.Va ? (k.Va = k.Va.concat(h)) : (k.Va = h);
			});
		});
		a.g.K.kb.forEach(f => {
			const g = f.ta,
				h = Ub(a, b, g);
			a.fa(b, g) && h.push(b);
			h.forEach(k => {
				c.has(k) || c.set(k, {});
				k = c.get(k);
				k.Be ? k.Be.push(f) : (k.Be = [f]);
			});
		});
		a.g.K.Bb &&
			((d = Ub(a, b, a.g.K.Bb)),
			a.fa(b, a.g.K.Bb) && d.push(b),
			d.forEach(f => {
				c.has(f) || c.set(f, {});
				c.get(f).fh = !0;
			}));
		return c;
	}
	function Lg(a, b) {
		25e3 > b ||
			setTimeout(() => {
				J(a, 'DOM_SIZE=' + b);
			}, 1);
	}
	function vj(a, b) {
		Y(a, function () {
			a.Ib.length < a.g.G.maxSyncSize ? ij(a, a.Ib, b) : J(a, 'ZSYNC_2LG=' + a.Ib.length + '-' + a.ya);
		});
	}
	function wj(a) {
		a.bf ||
			((a.bf = !0),
			window.addEventListener('error', b => {
				const c = b.message,
					d = b.filename,
					e = b.lineno,
					f = b.colno;
				b = b.error;
				const g = [];
				c && g.push(c);
				d && g.push(d);
				e && g.push(e);
				f && g.push(f);
				b && b.stack && g.push(b.stack);
				Mh(a, g.toString());
			}));
	}
	function xj(a) {
		if ('undefined' === typeof HTMLElement) a.matchesSelector = a.Id;
		else {
			var b = HTMLElement.prototype;
			void 0 === b
				? (a.matchesSelector = a.Id)
				: 'function' === typeof b.matches
				? (a.matchesSelector = function (c, d) {
						return d && 0 < d.length && c.matches ? c.matches(d) : !1;
				  })
				: 'function' === typeof b.msMatchesSelector
				? (a.matchesSelector = function (c, d) {
						return c.msMatchesSelector && d ? c.msMatchesSelector(d) : !1;
				  })
				: 'function' === typeof b.mozMatchesSelector
				? (a.matchesSelector = function (c, d) {
						return c.mozMatchesSelector && d ? c.mozMatchesSelector(d) : !1;
				  })
				: 'function' === typeof b.webkitMatchesSelector
				? (a.matchesSelector = function (c, d) {
						return c.webkitMatchesSelector && d ? c.webkitMatchesSelector(d) : !1;
				  })
				: 'function' === typeof b.oMatchesSelector
				? (a.matchesSelector = function (c, d) {
						return c.oMatchesSelector ? c.oMatchesSelector(d) : !1;
				  })
				: (a.matchesSelector = a.Id);
		}
	}
	function yj(a) {
		if (!a.Ve && ((a.Ve = !0), void 0 != window.HTMLDialogElement)) {
			const b = HTMLDialogElement.prototype.showModal;
			HTMLDialogElement.prototype.showModal = function () {
				try {
					const c = O(a, this);
					Id(a, { t: 'DO', I: c });
					Jd(a, a.Ma, a.Ba);
				} catch (c) {}
				return b.call(this);
			};
		}
	}
	function zj(a, b, c, d) {
		var e = O(a, b);
		void 0 !== e && ($d(a.B.Qa, b.sheet), a.g.K.ka && (Id(a, { t: 'SI', I: e, i: d, v: c }), Jd(a, a.Ma, a.Ba)));
	}
	function Aj(a, b, c) {
		var d = O(a, b);
		void 0 !== d && ($d(a.B.Qa, b.sheet), a.g.K.ka && (Id(a, { t: 'SD', I: d, i: c }), Jd(a, a.Ma, a.Ba)));
	}
	function Bj(a) {
		if (!a.lg && ((a.lg = !0), 'undefined' !== typeof CSSStyleSheet)) {
			var b = CSSStyleSheet.prototype.insertRule;
			b &&
				(CSSStyleSheet.prototype.insertRule = function (d, e) {
					const f = b.call(this, d, e),
						g = this.ownerNode;
					if (!g || g.sheet != this) return f;
					void 0 !== U(a, this.ownerNode).index && a.nb ? zj(a, this.ownerNode, d, e) : a.Yb.push({ ze: this, type: 'a', uh: d, index: e });
					return f;
				});
			var c = CSSStyleSheet.prototype.deleteRule;
			c &&
				(CSSStyleSheet.prototype.deleteRule = function (d) {
					const e = c.call(this, d),
						f = this.ownerNode;
					if (!f || f.sheet != this) return e;
					void 0 !== U(a, this.ownerNode).index && a.nb ? Aj(a, this.ownerNode, d) : a.Yb.push({ ze: this, type: 'r', index: d });
					return e;
				});
		}
	}
	function Cj(a) {
		function b(h) {
			try {
				Tc(c, h);
			} catch (k) {}
		}
		var c = a;
		a.la = new Bd(a);
		a.B.D.addEventListener(
			window,
			'hashchange',
			function () {
				Tc(c, 16);
			},
			!1,
		);
		var d = window.history,
			e = d.go,
			f = d.pushState,
			g = d.replaceState;
		d.go = function () {
			var h = e.apply(d, arguments);
			b(1);
			return h;
		};
		d.pushState = function () {
			var h = f.apply(d, arguments);
			b(2);
			return h;
		};
		d.replaceState = function () {
			var h = g.apply(d, arguments);
			b(8);
			return h;
		};
		a.B.D.addEventListener(
			window,
			'popstate',
			function () {
				b(4);
			},
			!1,
		);
	}
	function Dj(a) {
		for (var b = [], c = 0; c < a.Yb.length; ++c) {
			var d = a.Yb[c],
				e = d.ze.ownerNode;
			e && e.sheet == d.ze && (a.B.D.isConnected(e) ? ('a' == d.type ? zj(a, e, d.uh, d.index) : Aj(a, e, d.index)) : b.push(d));
		}
		a.Yb = b;
	}
	function zh(a) {
		let b = a.Z.get('sst', !1);
		b || ((b = a.B.D.Ka()), a.Z.set('sst', b));
		b = parseInt(b, 10);
		const c = a.B.D.Ka();
		return { nh: Math.ceil((c - b) / 6e4), oh: 6e4 * a.g.G.maxSessionDuration - (c - b) };
	}
	function Qi(a) {
		if (!a.Qe) {
			const b = a.Hb.getEntries();
			for (const c of b) ('fetch' !== c.type || a.g.K.dc) && a.gb.apply(a, c.args);
			a.Hb.onAPI(function (c) {
				('fetch' !== c.type || a.g.K.dc) && a.gb.apply(a, c.args);
			});
			a.Qe = !0;
		}
	}
	function Ej(a) {
		a.B.D.addEventListener(window, 'load', function () {
			setTimeout(function () {
				kj(a);
			}, 5);
		});
		if (T(window.location.href, a.g.K.ye))
			setTimeout(function () {
				a.start();
			}, 0);
		else if ('complete' == document.readyState)
			setTimeout(function () {
				a.start();
			}, a.g.G.startOffset || 0);
		else {
			var b = !1,
				c = function (d) {
					try {
						b ||
							('readystatechange' == d.type && 'complete' != document.readyState) ||
							((b = !0),
							setTimeout(function () {
								a.start();
							}, a.g.G.startOffset || 0));
					} catch (e) {}
				};
			a.B.D.addEventListener(document, 'DOMContentLoaded', c, !1);
			a.B.D.addEventListener(document, 'readystatechange', c, !1);
		}
	}
	function Fj(a) {
		return T(a.ya, a.g.K.yg) ? !1 : T(a.ya, a.g.K.tf);
	}
	function Dh(a) {
		if (JSON && JSON.stringify && !a.Ld) {
			a.Ld = !0;
			Ej(a);
			try {
				navigator.vendor &&
					0 == navigator.vendor.indexOf('Apple') &&
					'function' == typeof document.hasStorageAccess &&
					document.requestStorageAccess().then(
						function () {},
						function () {
							a.wd = !1;
						},
					);
			} catch (b) {}
		}
	}
	function Gh(a) {
		a.sa
			? ((a.Dc = !0), kh(a))
			: (a.sa = new of(a.g.G.publicKeyString, function () {
					a.Dc = !0;
					kh(a);
			  }));
	}
	function Mg(a, b) {
		b ? (a.Z.set('visible', !0), Rc(a.pb, 'visibleInstalled', !0), (a.ja.freeze = () => uj(a))) : (a.Z.Sb('visible'), delete a.ja.freeze);
	}
	function Gj(a, b) {
		const c = b.action;
		if (c)
			switch (c) {
				case 'close':
					Mg(a, !1);
					break;
				case 'install':
					Yc(a);
					break;
				case 'start':
					Mg(a, !0);
			}
		else console.warn('Invalid visible action:', b);
	}
	function Hj(a, b) {
		try {
			const e = b.data;
			switch (e.type) {
				case 'set_frame_id': {
					const f = e.id,
						g = e.register;
					if (f) {
						var c = function (l) {
							l = void 0 === l ? 0 : l;
							if (!(l > k)) {
								for (let m = 0; m < h.length; m++)
									if (h[m].contentWindow === b.source) {
										var n = h[m];
										break;
									}
								n && a.Rb && a.va
									? (n.setAttribute('qframe', f),
									  a.na.add(n),
									  g && (P(a, { t: 'rnh', v: f }), Hg(a, n.contentWindow, 'confirm_hit_assignment')),
									  Hg(a, n.contentWindow, 'set_parent_id', { id: a.va }),
									  Ph(a))
									: setTimeout(c, 150, l + 1);
							}
						};
						const h = a.B.D.A(document, 'iframe,frame'),
							k = a.g.G.maxIframeSyncRetries;
						c();
					}
					break;
				}
				case 'set_parent_id':
					var d = e.id;
					d && (a.Nc = d);
					break;
				case 'register_new_hit':
					if (a.Nc) {
						const f = (a.ua = new Date().getTime());
						Hg(a, a.B.D.W(window), 'set_frame_id', { id: f, register: !0 });
					}
					break;
				case 'confirm_hit_assignment':
					P(a, { t: 'chr', v: a.ua });
					break;
				case 'request_session_id': {
					const f = b.source.window;
					a.ea && a.va && Hg(a, f, 'session_id', { id: a.ea, user: a.Ha, hit: a.va, state: a.Z.get([], {}) });
					break;
				}
				case 'new_session':
					if (!a.Ud) {
						Hg(a, a.B.D.W(window), 'new_session');
						break;
					}
					Sc(a);
					break;
				case 'parent_reset':
					a.Oc = e.parentHitId;
					a.$b = new Set(a.na);
					Ig(a, vd(a.la), !1);
					break;
				case 'sub_frame_size': {
					const { w: f, h: g } = e,
						h = b.source;
					Hg(a, h, 'received_frame_size');
					if (a.g.K.ka) {
						const k = a.B.D.ad(document, 'iframe');
						for (d = 0; d < k.length; d++)
							if (k[d].contentWindow === h) {
								const l = O(a, k[d]);
								P(a, { t: 'i+', Mh: f, Gh: g, I: l });
								break;
							}
					}
					break;
				}
				case 'qm-visible':
					Gj(a, e);
					break;
				case 'qm-recorder':
					Xe(a.B.fg, e);
					break;
				case 'page-freeze':
					uj(a).then(f => {
						var g = Object.assign({}, f);
						f = f.hoveredElement;
						g = (delete g.hoveredElement, g);
						Hg(a, a.B.D.W(window), 'page-freeze-complete', { dom: g, id: e.id, qf: a.ua.toString(), hoveredElement: f });
					});
			}
		} catch (e) {}
	}
	function Ij(a) {
		window.addEventListener(
			'message',
			function (b) {
				tj(a, b.data) && Hj(a, b);
			},
			!1,
		);
	}
	function Jj(a, b) {
		const c = () => {
			try {
				const d = b.shift();
				d && (d(), setTimeout(c, 0));
			} catch (d) {
				Ug(a, d);
			}
		};
		setTimeout(c, 0);
	}
	function Hh(a, b) {
		return C(function* () {
			try {
				Nf(a.g);
				a.ya = a.la.$a.bb;
				kd(a.la.$a);
				if (Fj(a)) xd(a.la, b), a.stop(), (a.td = !0);
				else if (a.td || a.Uc) (a.td = !1), (a.Ea = !1);
				a.Uc = !1;
				if (Wc(a) && !a.Rb && a.Da) {
					gj(a);
					dh(a, document.documentElement);
					ni(a, 'input, select, option, textarea');
					a.R = new Bc(a, a.Fd);
					qe(a.B.jb);
					var c = Qa();
					a.nb = c;
					if (a.g.K.ka) {
						const e = Xc(a);
						Kj(a);
						eh(a, document.documentElement);
						uh(a, document);
						Bj(a);
						yj(a);
						a.Ib = yield e.catch(f => {
							J(a, `SYNC_ERR=${f.message}`);
							return '';
						});
						a.Nf = a.Ib.length;
						if (a.la.Ja !== b) {
							td(a.la, b) && (rd(a.la).O = !0);
							xd(a.la, b);
							return;
						}
						Dj(a);
						setTimeout(function () {
							vj(a, c);
							a.Ib = '';
						}, 1);
					}
					a.R.ge();
					if (Ri(a))
						try {
							a.ua || (a.ua = new Date().getTime());
						} catch (e) {}
					nj(a, b);
					a.g.K.ka && th(a, document.documentElement, 'class', document.documentElement.className);
					a.g.G.disableErrorHooking || wj(a);
					xi(a);
					Di(a);
					a.ag || (a.ag = setInterval(a.Jg.bind(a), 1e3));
					a.zd && clearTimeout(a.zd);
					a.zd = setTimeout(() => {
						const e = a.B.D.innerText(document.body);
						'string' == typeof e &&
							100 > e.length &&
							0 == e.replace(/\s/g, '').length &&
							M(
								a.R,
								{
									flags: 0,
									id: -46,
									ga: new Date().getTime(),
								},
								a.ya,
							);
					}, 6e3);
					a.ja.ge();
					try {
						window.dispatchEvent(new Event('QM-PAGE-READY'));
					} catch (e) {}
					Lj(a);
					a.sa.$ = !0;
					Ri(a) && a.ua && Hg(a, window.parent.window, 'set_frame_id', { id: a.ua });
					Jd(a, a.Ma, a.Ba);
					var d = oi();
					d && ((a.zc = d), W(a, 'sd', d));
					Ph(a);
					Ch(a);
				}
			} catch (e) {
				Ug(a, e);
			}
		});
	}
	function Lj(a) {
		for (var b = 0; 10 > b; b++) a.wa[b] = 0;
		a.wa.totalTime = 0;
		a.Lc = 0;
		a.zc = 0;
		a.Eb = new Date().getTime();
		a.ee = a.Eb;
	}
	function Kj(a) {
		if (!a.Ne) {
			var b = Element.prototype.attachShadow;
			Element.prototype.attachShadow = function (c) {
				const d = b.call(this, c);
				if ('closed' === c.mode) return d;
				try {
					const e = U(a, this);
					if (a.B.D.isConnected(this) && !e.qg) {
						const f = O(a, this);
						if (!f) return d;
						const g = { t: 'SA', p: f },
							{ Wa: h, Jd: k } = Kg(a, a.B.D.shadowRoot(this));
						a.Ba.push(
							k.then(() => {
								g.v = h;
							}),
						);
						P(a, g);
						Jd(a, a.Ma, a.Ba);
						qh(a, this);
					}
				} catch (e) {
					console.error(e);
				}
				return d;
			};
			Element.prototype.attachShadow.toString = () => '[native code]';
			if (window.customElements && window.customElements.define) {
				const c = Object.getPrototypeOf(window.customElements),
					d = c.define;
				c.define = function (e, f, g) {
					const h = d.apply(this, arguments);
					a.customElements.add(e);
					P(a, { t: 'CE', n: e });
					return h;
				};
			}
			a.Ne = !0;
		}
	}
	function Mj(a, b) {
		let c = a.Z.get('replayEnabled', null);
		null == c && ((c = new Date().getTime() % 100 < b), a.Z.set('replayEnabled', c));
		return c;
	}
	function Nj() {
		if (window.QMSDK) return !0;
		var a = window.navigator.standalone,
			b = window.navigator.userAgent.toLowerCase(),
			c = /safari/.test(b);
		if (/iphone|ipod|ipad/.test(b)) {
			if ((!a && c) || (a && !c)) return !1;
			if (!a && !c) return !0;
		} else return !1;
	}
	function Oj() {
		var a = navigator.userAgent;
		if (-1 < a.indexOf('Android') && (-1 < a.indexOf('; wv)') || /Version\/[0-9]+.[0-9]+/.test(a))) return !0;
	}
	function Pj(a, b) {
		var c = (b = void 0 === b ? {} : b),
			d = Object.assign({}, c);
		b = c.eventDefinitions;
		c = c.sub;
		let e = (delete d.eventDefinitions, delete d.sub, d);
		if (!window[`QuantumMetricAPI_${c}`])
			if ('data:' == window.location.protocol) console.warn('QM blocked in data: protocol environments');
			else {
				a.ja = new N(a);
				window.QuantumMetricAPI = a.ja;
				[`QuantumMetricAPI_${c}`].forEach(r => {
					Object.defineProperty(window, r, {
						configurable: !1,
						enumerable: !0,
						get: () => a.ja,
						set: () => {
							J(a, `api_tamper=${encodeURIComponent(Error().stack.toString())}`);
						},
					});
				});
				var f = !1,
					g = 10 > a.B.D.da.contentWindow.Date.now() % 100;
				d = id();
				var h = d.get('web-vitals-buffer');
				void 0 !== h && ((f = !0), (Lc.webVitalsSnapshotBuffer = parseInt(h, 10)));
				le(a.B.D);
				e = Hc(ng(e));
				a.g = new Of(e);
				Nf(a.g);
				try {
					var k = fd(a.g.G.reportURL);
					if (k.href !== a.g.G.reportURL && k.href !== a.g.G.reportURL + '/' && k.pathname !== a.g.G.reportURL) throw Error('URL is malformed');
				} catch (r) {
					console.error('QM: reportURL is malformed');
					return;
				}
				a.Z = new uf(a, a.g.G.sessionStoreNamespace, 'sessionPersistenceMediums', a.B.D);
				a.Bc = new uf(a, a.g.G.userStoreNamespace, 'userPersistenceMediums', a.B.D);
				k = () => {
					let r = {},
						y = null,
						A = 0;
					const v = q => {
						if (a.ea && Object.keys(r).length) {
							var p = Ra({ s: a.ea, Q: 5 });
							p = a.g.G.reportURL + '?' + p;
							var x = Object.assign({}, r);
							r = {};
							y = null;
							switch (q) {
								case 0:
									dd(
										a,
										'PATCH',
										p,
										() => {
											A = 0;
										},
										() => {
											r = Object.assign({}, x, r);
											!y && 5 > A && (A++, (y = setTimeout(v, a.g.G.publishInterval, 0)));
										},
										a.B.D.stringify(x),
										'application/json',
									);
									break;
								case 1:
									navigator.sendBeacon(p, a.B.D.stringify(x));
							}
						}
					};
					a.B.D.addEventListener(document, 'visibilitychange', () => {
						'hidden' == document.visibilityState && (clearTimeout(y), v(1));
					});
					return q => {
						q && 'object' === typeof q && 'set' === q.t && Ta(q.path) && ((r[q.path] = q.value), y || (y = setTimeout(v, a.g.G.publishInterval, 0)));
					};
				};
				a.g.G.horizonEnabled && a.g.G.temp.enableKVS && $c(a.Z.W, k());
				a.sub = c;
				a.pb = new cd(a);
				g && f && Rc(a.pb, 'wo', 'web-vitals-buffer');
				a.Sf = new RegExp(ma(a.Kg), 'i');
				k = Ei(a);
				a.Rd = 'Safari' == k.Ya && 11 >= k.version;
				a.g.G.sampleReplay && (a.g.K.Qf = Mj(a, a.g.G.sampleReplay));
				null !== a.Z.get('replayEnabled', null) && (a.g.K.ka = a.Z.get('replayEnabled'));
				a.Fd = b || a.Fd;
				a.Of = tg(a.g.G.mutationThrottle);
				try {
					a.B.D.pa(document, document.documentElement, NodeFilter.SHOW_ALL, null), (a.Re = !0);
				} catch (r) {}
				a.Se = new RegExp(window.location.host);
				a.Tc = window.chrome ? !0 : !1;
				try {
					var l = function () {
						Dh(m);
						--m.oc;
					};
					++a.oc;
					a.ma = window.performance;
					Ai(a);
					Zd(a.B.Qa);
					He(a.B.ja, a.g.G.apiDefinitions);
					ih(a);
					try {
						const v = window.location.href;
						var n = a.Z.get('lru', null);
						a.g.K.Wc.length && (n ? n !== window.location.href && a.Z.Sb('lru') : a.Z.set('lru', window.location.href));
						if ('reload' == qd(a, 'type') || window.location.href == document.referrer || window.location.href == n)
							for (n = 0; n < a.g.K.Wc.length; ++n) {
								const { re: q, count: p } = a.g.K.Wc[n],
									x = ['bfr', q.source].join(':');
								if (q.test(v)) {
									const B = a.Z.get(x, 0);
									if (B >= p) return;
									a.Z.set(x, B + 1);
								} else a.Z.Sb(x);
							}
						else a.Z.Sb(['bfr']);
					} catch (v) {
						console.warn('QM: issue handling `blockFrequentReloads` config.');
					}
					a.Tc && (a.za({ 'qm-ssc': !0 }), Yb('qm-ssc') || (a.Tc = !1), a.za({ 'qm-ssc': !0, expires: Jg() }));
					if (window.QMSDK)
						try {
							a.za({ [a.g.G.enabledCookie]: !0 });
						} catch (v) {}
					a.B.D.addEventListener(
						document,
						'visibilitychange',
						() => {
							Y(a, () => {
								Ai(a);
							});
						},
						!0,
					);
					var m = a;
					const r = d.get(a.g.G.bookmarkToolbarQueryParamName);
					try {
						if ('string' == typeof r) {
							const v = r.replace(/-/g, '');
							E(v) ? ((m.ea = v), Ji(m)) : console.warn('QM: bookmark recording ID is incorrect format');
						}
					} catch (v) {
						console.error('QM: unable to initialize recorder:', v);
					}
					const y = window.QM_SDK_USER_ID || window.QM_USER_ID;
					y && E(y) && (m.Ha = y.toString());
					const A = window.QM_SDK_SESSION_ID || window.QM_SESSION_ID;
					A && E(A) && ((m.ea = A.toString()), Ji(m));
					try {
						for (const v of a.g.G.nestedStitchingQueryParams) {
							let q = v;
							const p = fd(window.location.href);
							let x = !1;
							q.reduce((B, Q, S) => {
								try {
									if (B) {
										var za = null,
											pa = id(B.search).get(Q);
										pa && (za = fd(pa));
										if (S == q.length - 1) {
											const Aa = id(za.search),
												Ba = Aa.get(a.g.G.queryParamForSessionId),
												Ca = Aa.get(a.g.G.queryParamForUserId);
											if (Ba && Ca && E(Ba) && E(Ca)) return (m.ea = Ba), (m.Ha = Ca), Ji(m), (x = !0), null;
										}
										return za;
									}
								} catch (Aa) {}
							}, p);
							if (x) break;
						}
					} catch (v) {}
					if (m.g.G.queryParamForSessionId || m.g.G.queryParamForUserId) {
						const v = id(),
							q = v.get(m.g.G.queryParamForSessionId),
							p = v.get(m.g.G.queryParamForUserId);
						q && p && E(q) && E(p) && ((m.ea = q), (m.Ha = p), Ji(m));
					}
					if (r || a.Z.get('isRecording')) (a.g.K.ye = [/(?:)/]), (a.g.G.startOffset = 0), l();
					else if (m.g.G.autoDetectSDK && (Nj() || Oj()))
						if (
							('QMFrameId' in window && (m.ua = window.QMFrameId),
							Object.defineProperty(window, 'QMFrameId', {
								set: function (v) {
									return (m.ua = v);
								},
								get: function () {
									return m.ua;
								},
							}),
							m.g.G.useFallbackSDKSync)
						) {
							Rc(m.pb, 'usesFallbackSDKSync', !0);
							'QMFrameId' in window && (m.ua = window.QMFrameId);
							const v = fj(m);
							if (v && m.ua) (m.ea = v), (m.Db = !0), Ji(m), setTimeout(l, 0);
							else
								var u = 0,
									w = Math.floor(m.g.G.maxWaitForSessionIdRetries / 250),
									t = setInterval(function () {
										u++;
										u > w &&
											(console.warn('QM:: Timed out trying to get session & QMFrameId from SDK. Continuing on with new session'), t && clearInterval(t), l());
										const q = fj(m);
										q && m.ua && ((m.Db = !0), (m.ea = q), Ji(m), setTimeout(l, 0), t && clearInterval(t));
									}, 250);
						} else
							(function () {
								return C(function* () {
									var v = window.QMSDK;
									let q = window.QMSDKv4;
									if (!q)
										try {
											q = window.webkit.messageHandlers.QMSDKv4;
										} catch (x) {}
									if (v || q || m.g.G.waitForNativeCapture) {
										if (v)
											if (v.sync) {
												var p = v.sync();
												'string' === typeof p && (p = m.B.D.Pa(p));
											} else (v.config && v.config.reportURL) || (p = v);
										p ||
											(p = yield Promise.race([
												new Promise(x => {
													window.addEventListener(
														'qm_sdk_start',
														B => {
															({ detail: B } = B);
															x({
																sessionId: B.sessionId,
																userId: B.userId,
																frameId: B.frameId,
																config: { reportURL: B.config && B.config.reportURL ? B.config.reportURL : B.reportURL },
															});
														},
														{ once: !0 },
													);
													window.dispatchEvent(new CustomEvent('qm_sdk_ready'));
												}),
												new Promise(x =>
													C(function* () {
														q ||
															(q = yield new Promise(B => {
																Object.defineProperty(window, 'QMSDKv4', { set: B });
															}));
														q.start = x;
														q.postMessage(JSON.stringify({}));
													}),
												),
												new Promise((x, B) => {
													x = m.g.G.maxSDKWaitTime;
													setTimeout(B, x, Error(`SDK not loaded within ${x}ms.`));
												}),
											]));
										if (p) {
											v = p.sessionId;
											const x = p.userId,
												B = p.frameId;
											v &&
												x &&
												B &&
												((m.Db = !0),
												(m.ea = v),
												(m.Ha = x),
												(m.ua = window.QMFrameId = B),
												Ji(m),
												(p = p.config) &&
													p.reportURL &&
													T(p.reportURL, m.g.K.ug) &&
													((Lc.reportURL = m.g.G.reportURL = p.reportURL), p.syncURL && (Lc.syncURL = m.g.G.syncURL = p.syncURL)));
										}
									}
								});
							})().then(l, v => {
								J(m, v.message);
							});
					else {
						if (window !== a.B.D.W(window) || (null !== window.opener && window !== window.opener)) {
							const v = window.location.href;
							if ((m.g.K.He.length ? T(v, m.g.K.He) : !T(v, m.g.K.tg)) && !m.ea) {
								let q = null,
									p = function (Q) {
										try {
											const S = Q.data;
											tj(m, S) &&
												'session_id' == S.type &&
												E(S.id) &&
												E(S.user) &&
												((m.ea = S.id),
												(m.Ha = S.user),
												(m.Oc = S.hit),
												(m.Ud = !1),
												S.state && (m.Z.import(S.state), (m.cf = !0)),
												Ji(m),
												null !== q && (clearInterval(q), (q = null)),
												window.removeEventListener('message', p),
												setTimeout(l, 0));
										} catch (S) {}
									};
								m.B.D.addEventListener(window, 'message', p, !1);
								let x = 0;
								const B = window.opener ? window.opener : m.B.D.W(window);
								q = setInterval(function () {
									Hg(m, B, 'request_session_id');
									x++;
									x > m.g.G.waitForParentMaxRetries && (l(), null !== q && (clearInterval(q), (q = null)));
								}, m.g.G.waitForParentRetryDelay);
								return;
							}
						}
						l();
					}
				} catch (r) {
					Ug(a, r);
				}
			}
	}
	class Qj {
		constructor() {
			this.Za = null;
			this.ff = 0;
			this.ja = null;
			this.Ad = {};
			this.ob = null;
			this.Ze = this.Ae = this.vc = this.Zd = this.Vd = 0;
			this.Fc = -1;
			this.fc = 0;
			this.wa = [];
			this.Ah = this.uf = this.sf = this.Eb = this.ee = this.zc = this.Lc = 0;
			this.R = null;
			this.Fd = { events: [] };
			this.Mb = new Bg();
			this.Ba = [];
			this.Ma = [];
			this.Od = new window.Set();
			this.ma = null;
			this.Ig = { 0: 'navigate', 1: 'reload', 2: 'back_forward' };
			this.Kc = !1;
			this.pa = null;
			this.Nd = this.Re = !1;
			this.Oe = 'QM: fetch aborted.';
			this.Ve = this.lg = this.eg = this.Pe = this.Vf = this.Ye = !1;
			this.matchesSelector = void 0;
			this.Se = null;
			this.pe = {
				connectStart: 'cs',
				connectEnd: 'ce',
				decodedBodySize: 'dbs',
				domainLookupStart: 'dls',
				domainLookupEnd: 'dle',
				encodedBodySize: 'ebs',
				fetchStart: 'fs',
				initiatorType: 'it',
				nextHopProtocol: 'nhp',
				redirectStart: 'rds',
				redirectEnd: 'rde',
				requestStart: 'rqs',
				responseStart: 'rps',
				responseEnd: 'rpe',
				secureConnectionStart: 'scs',
				transferSize: 'tz',
				workerStart: 'ws',
			};
			this.Hg =
				'connectStart connectEnd domainLookupStart domainLookupEnd fetchStart redirectStart redirectEnd requestStart responseStart responseEnd secureConnectionStart workerStart'.split(
					' ',
				);
			this.L = {
				connectStart: 'a',
				connectEnd: 'b',
				domComplete: 'c',
				domContentLoadedEventStart: 'd',
				domContentLoadedEventEnd: 'e',
				domInteractive: 'f',
				domainLookupStart: 'g',
				domainLookupEnd: 'h',
				fetchStart: 'i',
				loadEventStart: 'j',
				loadEventEnd: 'k',
				redirectStart: 'l',
				redirectEnd: 'm',
				requestStart: 'n',
				responseStart: 'o',
				responseEnd: 'p',
				secureConnectionStart: 'q',
				transferSize: 'r',
				encodedBodySize: 's',
				decodedBodySize: 't',
				'first-paint': 'u',
				'first-contentful-paint': 'v',
				'largest-contentful-paint': 'w',
				'first-input-delay': 'x',
				'cumulative-layout-shift': 'y',
			};
			this.Rf =
				'redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart connectEnd requestStart responseStart responseEnd domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd'.split(
					' ',
				);
			this.Ff = 'ext';
			this.Ld = !1;
			this.wd = !0;
			this.Uc = this.td = this.Ea = this.Le = !1;
			this.Lf = 0;
			this.Tc = !0;
			this.Xa = 0;
			this.cg = !1;
			this.Gf = this.Af = this.xf = this.Xf = null;
			this.ke = 0;
			this.af = this.Ke = !1;
			this.zb = [];
			this.Cc = [];
			this.xb = [];
			this.yb = [];
			this.Gb = [];
			this.Xe = !1;
			this.We = Infinity;
			this.oc = 0;
			this.$e = !1;
			this.kf = [];
			this.$ = [];
			this.Ec = [];
			this.O = {};
			this.Na = !1;
			this.le = this.sb = 0;
			this.ya = '';
			this.la = null;
			this.ea = void 0;
			this.Ee = this.fd = this.Rb = !1;
			this.va = this.Ha = void 0;
			this.Ud = !0;
			this.cb = 0;
			this.A = this.Pb = this.Sc = this.Wb = this.Jb = void 0;
			this.Qc = this.ra = !1;
			this.Pc = void 0;
			this.Mg = this.Lg = NaN;
			this.wc = this.Me = 0;
			this.xc = null;
			this.uc = 0;
			this.Ce = this.Je = this.ia = null;
			this.qa = !1;
			this.df = this.wg = this.Zb = 0;
			this.na = new window.Set();
			this.$b = new window.Set();
			this.Oc = this.Nc = null;
			this.mg = this.ng = this.wb = this.Ub = this.Hc = this.Xb = this.Ac = 0;
			this.yc = this.nf = null;
			this.Jc = [0, 0];
			this.Aa = null;
			this.Ic = this.Te = 0;
			this.ef = !1;
			this.yd = void 0;
			this.W = this.Gc = this.ud = this.ac = 0;
			this.ae = void 0;
			this.de = 0;
			this.he = this.Vb = this.Cb = null;
			this.Yb = [];
			this.xg = !1;
			this.Kb = this.nb = this.Ib = null;
			this.Nf = 0;
			this.Dc = !1;
			this.zd = this.sa = null;
			this.customElements = new window.Set();
			this.zh = /\n|\r|\f|[\u0000-\u001F]+/g;
			this.Kg = [
				100, 105, 99, 107, 115, 104, 105, 116, 124, 102, 117, 99, 107, 124, 106, 97, 99, 107, 97, 115, 115, 124, 99, 117, 110, 116, 124, 112, 117, 115, 115,
				121, 124, 100, 111, 117, 99, 104, 101, 124, 115, 108, 117, 116, 124, 98, 97, 115, 116, 97, 114, 100, 124, 119, 104, 111, 114, 101, 124, 98, 105, 116,
				99, 104, 124, 97, 115, 115, 104, 111, 108, 101, 124, 115, 116, 117, 112, 105, 100, 124, 100, 117, 109, 98, 97, 115, 115,
			];
			this.yh = [101, 118, 97, 108];
			this.og = [115, 99, 114, 105, 112, 116];
			this.Ie = this.Cf = '';
			this.Sf = null;
			this.Ue = !1;
			this.Ng = 0;
			this.sc = this.ag = null;
			this.Db = !1;
			this.Bc = this.Z = null;
			this.Ne = !1;
			this.Ab = this.Rc = null;
			this.bf = this.gf = this.Rd = !1;
			this.sub = '';
			this.ua = void 0;
			this.g = this.Of = null;
			this.B = {};
			this.B.D = new ne(this);
			this.B.animation = new Hd(this);
			this.B.Qa = new he(this);
			this.B.jb = new we(this);
			this.B.ih = new ze(this);
			this.B.ja = new Je();
			this.B.Fe = new Wf(this);
			this.B.fg = new Ze(this);
			this.B.supports = new lg();
			this.B.yf = new sg();
			this.B.Fb = new rg(this);
			this.B.pc = new Ue(this);
			console = this.B.D.da.contentWindow.console;
			this.B.Lh = new Me(this, window.QuantumMetricShopifyApi);
			this.Mc = new this.B.D.da.contentWindow.WeakMap();
			this.Td = !1;
			try {
				URL.revokeObjectURL(URL.createObjectURL(new Blob([], { type: 'text/javascript' })));
			} catch (a) {
				this.Td = a.message.includes('Lightning Web Security');
			}
			this.mc = this.mc.bind(this);
			this.Hb = null;
			this.jf = this.Qe = !1;
			this.pb = null;
			this.cf = !1;
			this.Og = new cg(this);
		}
		removedNodes(a, b) {
			if (0 == b.length) return null;
			a = O(this, a);
			return void 0 === a ? null : { t: 'r', p: a, i: b };
		}
		Sd(a, b) {
			return null === a ? !this.B.D.$(document.documentElement, b) : this.B.D.$(a.documentElement || a, b);
		}
		hf(a, b) {
			return null === a ? !(this.B.D.na(document.documentElement, b) & 16) : this.B.D.na(a, b) & 16;
		}
		xh(a) {
			if ('childList' == a.type) for (let b = 0; b < a.removedNodes.length; ++b) ch(this, a.removedNodes[b]);
		}
		get Da() {
			return this.qa ? !1 : this.Uc ? !0 : !this.Ea;
		}
		Yf(a) {
			if ('hidden' != a.type) {
				const b = U(this, a);
				void 0 == b.Fa || null == b.Fa ? (b.Fa = fi(a)) : Rh(this, a);
			}
		}
		Jg() {
			var a = this;
			Y(a, function () {
				a.g.G.maskInputs || ni(a);
				if (a.g.G.checkBlankPages)
					try {
						'object' === typeof window.sessionStorage && a.B.D.Storage.setItem.call(window.sessionStorage, 'qm_last_period', new Date().getTime().toString());
					} catch (b) {}
			});
		}
		Oa(a) {
			var b = U(this, a);
			return b.Oa ? b.Oa : (b.Oa = { Hf: 0, Xd: new Date().getTime(), name: qi(this, a) });
		}
		gb(a, b, c, d, e, f) {
			const g = this;
			return C(function* () {
				try {
					if (!(-1 < b.indexOf('data:'))) {
						var h = f.qend || new Date().getTime(),
							k = !1;
						if (b && 'string' === typeof b) {
							g.la.me();
							var l;
							if ((l = g.Da)) {
								var n = b;
								l = T(n, g.g.K.Eg) || !T(n, g.g.K.Cg);
							}
							if (l) {
								a: {
									var m = fd(b).href;
									l = e;
									var u = f.response;
									if (m && m.length) {
										var w = Ie(g.B.ja, m);
										if (w) {
											var t = w.parse(m, u, l);
											{
												const pa = t.path,
													Aa = t.status;
												u = {};
												Aa && (u.status = Aa);
												if (pa) {
													const [Ba, Ca] = m.split('?');
													u.url = `${Ba}${Ba.endsWith('/') ? '' : '/'}${pa}${Ca ? `?${Ca}` : ''}`;
												}
												var r = u;
											}
											break a;
										}
									}
									r = void 0;
								}
								r && (r.url && (b = r.url), r.status && (a = r.status));
								b = gd(g.g.K.Lb, g.g.K.Tb, fd(b).href);
								if (!(0 <= b.indexOf('quantummetric.com')) || g.g.G.isPivot) {
									var y = (yield Yi(g, f)) || '';
									try {
										var A = f.getAllResponseHeaders();
									} catch (pa) {}
									var v = Xi(g, A),
										q = Xi(g, f.reqHeaders);
									f.qrequest = e;
									f.qurl = b;
									f.qstatus = a;
									f.qreqheaders = f.reqHeaders;
									f.qrespheaders = A;
									f.qresponse = y;
									'responseURL' in f || (f.responseURL = b);
									r = b;
									if (!T(r, g.g.K.Dg) && T(r, g.g.K.Fg)) {
										var p = { t: 'xhr', m: d, u: b, st: a, s: c, r: h - c };
										e instanceof window.FormData && (e = yield new Request('', { method: d, body: e }).text());
										var x = e ? e.toString() : '';
										m = r = !1;
										x.length > g.g.G.maxXHRDataLength ? (r = !0) : (x = Va(x, g.g.K.Dd));
										y.length > g.g.G.maxXHRDataLength ? (m = !0) : (y = Va(y, g.g.K.Dd));
										var B;
										A = b;
										(B = !g.g.G.publicKeyString || T(A, g.g.K.Ag) ? !1 : T(A, g.g.K.zg) ? !0 : g.g.G.encryptXHR)
											? ((p.resHeaders_enc = yield g.sa.encrypt(v)),
											  x && (r ? (p.req = 'QM: Too much data (' + x.length + ') to encrypt request') : (p.req_enc = yield g.sa.encrypt(x))),
											  y && (m ? (p.res = 'QM: Too much data (' + y.length + ') to encrypt response') : (p.res_enc = yield g.sa.encrypt(y))))
											: ((p.resHeaders = v),
											  (p.req = r ? 'QM: XHR Req data too long (' + x.length + ')' : x),
											  (p.res = m ? 'QM: XHR Res data too long (' + y.length + ')' : y));
										k = !0;
										g.g.G.logReqCookiesForXHR &&
											new RegExp(window.location.hostname, 'i').test(b) &&
											(q || (q = ''), (q += 'cookie: ' + document.cookie + '\r\n'));
										q && (B ? (p.reqHeaders_enc = yield g.sa.encrypt(q)) : (p.reqHeaders = q));
										Zc(g.ja, 'api', p, f);
										P(g, p);
									}
									var Q = T(b, g.g.K.Gg);
									if (!T(b, g.g.K.Bg))
										if (500 <= a) {
											var S = { v: Xh(g, b), c: a, t: new Date().getTime() };
											g.O.ape = S;
											Fg(g, 'ape', S);
										} else
											403 == a || 401 == a
												? V(g, -13, Xh(g, b))
												: 404 == a
												? V(g, -14, Xh(g, b))
												: 400 <= a
												? V(g, -15, Xh(g, b))
												: 310 == a
												? V(g, -16, Xh(g, b))
												: 300 <= a
												? V(g, -17, Xh(g, b))
												: 0 == a && V(g, -11, Xh(g, b));
									Q &&
										((p = { m: d, u: Xh(g, b), c: a, s: e ? e.length : 0, S: y ? y.length : 0, r: h - c, ts: D(new Date().getTime() / 1e3) }),
										Q ? Ac(g, 'x', p) : Fg(g, 'x', p),
										h - c > g.g.G.xhrPerformanceSlow && 3 >= g.Ng++ && V(g, -7, Xh(g, b)),
										k || ((p.t = 'xhr'), (p.st = a), P(g, p), Zc(g.ja, 'api', p, f)));
									if (g.R) {
										f.data = e ? e.toString() : '';
										g.ja && (g.ja.lastXHR = f);
										var za = g.R;
										za.Ga = f;
										sc(za, 'xhr', new Date().getTime());
										k || Q || Zc(g.ja, 'api', { m: d, u: b, st: a, r: h - c }, f);
									}
								}
							}
						}
					}
				} catch (pa) {
					J(g, pa.message.slice(-256));
				}
			});
		}
		za(a) {
			a.path = '/';
			if (!a.domain) {
				var b = this.g.G.cookieDomain || hj(this);
				a.domain = b;
			}
			b = [];
			for (let c in a) a.hasOwnProperty(c) && b.push(`${c}=${a[c]}`);
			'https:' == window.location.protocol && (b.push('secure'), this.Tc && b.push(`samesite=${this.g.G.sameSiteFlag}`));
			b.push('');
			document.cookie = b.join(';');
		}
		set(a, b, c) {
			try {
				if ('string' == typeof b) return (a[b] = c), !0;
				if (!Array.isArray(b)) return console.warn('QM: cannot call `set` when path is not an array'), !1;
				let d = -1,
					{ length: e } = b,
					f = e - 1;
				for (; null != a && ++d < e; ) {
					const g = b[d];
					let h = c;
					if (d != f) {
						const k = a[g];
						h = 'object' == typeof k ? k : isFinite(b[d + 1]) ? [] : {};
					}
					a[g] = h;
					a = a[g];
				}
				return !0;
			} catch (d) {
				return !1;
			}
		}
		Sb(a, b) {
			try {
				if ('string' == typeof b) return delete a[b], !0;
				if (!Array.isArray(b)) return console.warn('QM: cannot call `unset` when path is not an array'), !1;
				const c = b.pop(),
					d = Na(a, b, null);
				if (!d) return !1;
				delete d[c];
				return !0;
			} catch (c) {
				return !1;
			}
		}
		fa(a, b) {
			if (!a.getRootNode) return this.matchesSelector(a, b);
			b = Fc(b);
			for (const c of b) {
				a: {
					b = a;
					const d = c.split(Ec);
					for (let e = d.length - 1; 0 <= e; --e) {
						if (!this.matchesSelector(b, d[e])) {
							b = !1;
							break a;
						}
						b = this.B.D.getRootNode(b).host;
						if (!b && 0 !== e) {
							b = !1;
							break a;
						}
					}
					b = !0;
				}
				if (b) return !0;
			}
		}
		Id(a, b) {
			var c = this.B.D.parentNode(a) || a.document;
			if (c && b && 0 < b.length) for (b = this.B.D.A(c, b), c = 0; c < b.length; ++c) if (b[c] == a) return !0;
			return !1;
		}
		hb(a, b) {
			b = void 0 === b ? null : b;
			var c = U(this, a);
			void 0 === c.hb && (c.hb = ki(this, a, b));
			return c.hb;
		}
		lb(a) {
			var b = X(this, a);
			b = 'input' === b || 'select' === b || 'textarea' === b;
			if (!b) return null;
			if (this.g.K.ub || (this.g.G.maskInputs && b) || this.La(a)) return !0;
			if ((b = a.getAttribute('autocomplete'))) if (((b = b.toLowerCase()), 'cc-number' === b || 'cc-csc' === b)) return !0;
			if ((b = a.getAttribute('x-autocompletetype'))) if (((b = b.toLowerCase()), 'cc-number' === b || 'cc-csc' === b)) return !0;
			b = a.getAttribute('title');
			if (!(a.id || a.name || b || a.className)) return null;
			for (let c = 0; c < this.g.K.Cd.length; ++c) {
				const d = this.g.K.Cd[c];
				if ((a.id && d.test(a.id)) || (a.name && d.test(a.name)) || (b && d.test(b)) || (a.className && d.test(a.className))) return !0;
			}
			return null;
		}
		La(a) {
			var b = U(this, a);
			if (void 0 === b.La)
				try {
					if (((b.La = a.type && 'password' == a.type.toLowerCase()), !b.La && 'input' == X(this, a))) {
						var c = a.className || '';
						a.attributes.name && a.attributes.name.value && (c += a.attributes.name.value);
						a.id && (c += a.id);
						0 <= c.toLowerCase().indexOf('password') && (b.La = !0);
					}
				} catch (d) {
					b.La = !1;
				}
			return b.La;
		}
		mc() {
			function a(d) {
				d = d.data;
				tj(b, d) && 'received_frame_size' == d.type && (window.removeEventListener('message', a), b.sc && clearInterval(b.sc));
			}
			var b = this;
			if (!b.sc) {
				var c = 0;
				b.sc = setInterval(() => {
					c++;
					if (40 < c) clearInterval(b.sc);
					else {
						var d = { w: Wh(), h: oi() };
						Hg(b, this.B.D.W(window), 'sub_frame_size', d);
					}
				}, 500);
				b.B.D.addEventListener(window, 'message', a, !0);
			}
		}
		start() {
			this.Le ||
				((this.Le = !0),
				Jj(this, [
					() => xj(this),
					() => {
						this.Cf = ma(this.yh);
						this.Ie = ma(this.og);
					},
					() => {
						const a = window.QuantumMetricNetworkInterceptor;
						a && (this.Hb = a);
					},
					() => Gh(this),
					() => Cj(this),
					() => {
						!this.xg && this.g.K.dc && (Hi(this, 'undefined' !== typeof XMLHttpRequest, 'XMLHttpRequest must exist.'), ej(this), (this.xg = !0));
					},
					() => cj(this),
					() => aj(this),
					() => {
						{
							const a = window.navigator.userAgent,
								b = !!a.match(/WebKit/i);
							(a.match(/iPad/i) || a.match(/iPhone/i)) &&
								b &&
								!a.match(/CriOS/i) &&
								Ri(this) &&
								(this.mc(), this.B.D.addEventListener(window, 'resize', this.mc, !0));
						}
					},
					() => {
						var a = navigator.userAgent || navigator.vendor || window.opera;
						this.fc =
							/uiwebview|(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
								a,
							) ||
							/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
								a.substr(0, 4),
							)
								? !0
								: !1;
					},
					() => {
						this.fc
							? ((this.ac = this.g.G.unthrottledDataCapMobile), (this.ud = this.g.G.throttledBytesPerSecondMobile))
							: ((this.ac = 10485760), (this.ud = 512e3));
					},
					() => Ij(this),
					() => Fh(this),
					() => mj(this),
					() => {
						this.ja.Qb();
					},
					() => mi(this),
					() => {
						if (Element.prototype.animate && document.getAnimations) {
							{
								var a = this.B.animation;
								const e = document.getAnimations();
								try {
									for (let f = 0; f < e.length; f++) {
										var b = e[f];
										if (b instanceof window.CSSTransition || 'CSSTransition' === b.constructor.name) {
											{
												var c = a,
													d = b.transitionProperty;
												const g = Cd(),
													h = O(c.J, b.effect.target);
												c.ca.set(b, g);
												c.log({ t: 'wa', v: '>', I: h, p: d, i: g });
												Fd(c, b, g);
											}
											break;
										}
										if (b instanceof window.CSSAnimation || 'CSSAnimation' === b.constructor.name) {
											{
												d = a;
												c = b.animationName;
												const g = Cd(),
													h = O(d.J, b.effect.target);
												d.ca.set(b, g);
												d.log({ t: 'wa', v: '>', I: h, a: c, i: g });
												Fd(d, b, g);
											}
											break;
										}
										Ed(a, b);
									}
								} catch (f) {}
							}
							Gd(this.B.animation);
						}
					},
					() => xh(this),
					() => {
						const a = id().get(this.g.G.visibleQueryParamName);
						if ((null !== a && 'true' == a) || this.Z.get('visible')) return Yc(this);
					},
					() => {
						this.jf = !0;
						this.ef = 'CSS1Compat' == document.compatMode;
						if (!yh(this)) {
							var a = Hh;
							var b = this.la;
							var c = wd(b, b.$a, b.L);
							b.get(c).O = !0;
							b = c;
							a(this, b);
						}
						for (a = 0; a < this.g.G.sessionPersistenceMediums.length; a++)
							if (((b = this.g.G.sessionPersistenceMediums[a]), 'cookie' !== b))
								for (var d in window[b])
									0 == d.indexOf('QM:s:') && ((c = this.B.D.Pa(this.B.D.Storage.getItem.call(window[b], d))), rf(c) && window[b].removeItem(d));
					},
				]));
		}
		stop() {
			this.Ea = !0;
		}
		ec(a) {
			const b = U(this, a);
			if (void 0 === b.ec)
				try {
					b.ec = a instanceof window.HTMLElement && window.customElements.get(a.localName);
				} catch (c) {
					b.ec = !1;
				}
			return b.ec;
		}
	}
	'undefined' !== typeof window &&
		(window.QuantumMetricInstrumentationStart = function (a) {
			Pj(new Qj(), a);
		});
})();
window.QuantumMetricInstrumentationStart({
	abnSegmentCookie: [{ pred: { operator: 'default' }, value: 'ABnTarget' }],
	blacklistedURLs: [
		{
			pred: { operator: 'default' },
			rules: [
				{
					pred: { operator: 'default' },
					value: [
						{ f: '', p: 'soya-zhuoya.cn' },
						{ f: '', p: 'com.android.providers.downloads.documents' },
						{ f: '', p: 'goherbalife.su' },
					],
				},
			],
		},
	],
	dataEncryptWhiteList: [
		{
			pred: { operator: 'default' },
			rules: [
				{
					pred: { operator: 'default' },
					value: [
						'input.qty',
						'#globalSearch',
						'#search',
						'SearchText',
						'#invoice-date',
						'#first-name',
						'#last-name',
						'#individual-products',
						'[data-testid=promoCodeInputBox]',
					],
				},
			],
		},
	],
	dataScrubBlackList: [
		{
			pred: { facet: 'url', operator: 'contains', value: '/u/account' },
			rules: [
				{
					pred: { operator: 'default' },
					value: [
						'.sensitive',
						'input[autocomplete="cc-number"]',
						'input[autocomplete="cc-csc"]',
						'input[x-autocompletetype="cc-number"]',
						'input[x-autocompletetype="cc-csc"]',
						'[data-qm-block]',
						'[data-testid=savedAddress]',
						'[data-testid=addressPanel]',
					],
				},
			],
		},
		{
			pred: {
				contents: [
					{ facet: 'url', operator: 'contains', value: '/u/checkout' },
					{ facet: 'url', operator: 'contains', value: 'confirmation' },
				],
				operator: 'or',
			},
			rules: [
				{
					pred: { operator: 'default' },
					value: [
						'.sensitive',
						'input[autocomplete="cc-number"]',
						'input[autocomplete="cc-csc"]',
						'input[x-autocompletetype="cc-number"]',
						'input[x-autocompletetype="cc-csc"]',
						'[data-qm-block]',
						'[aria-label=heading-checkout] .body-lg-bold',
						'[data-testid=mailSaved]',
						'[data-testid=checkout-distributor-section]',
						'ul li span',
						'[data-testid=order-confirmation-section] p',
						'[data-testid=address-list]',
						'[data-testid*=name]',
						'[data-testid*=Name]',
						'[data-testid*=Number]',
						'[data-testid*=postalCode]',
						'[data-testid*=phone]',
						'[data-testid*=city]',
						'[data-testid*=region]',
					],
				},
			],
		},
		{
			pred: { operator: 'default' },
			rules: [
				{
					pred: { operator: 'default' },
					value: [
						'[name="CreditCard.CardNumber"]',
						'[name="CreditCard.ExpirationMonth"]',
						'[name="CreditCard.ExpirationYear"]',
						'[name="CreditCard.Cvv"]',
						'.payment-details',
						'#Password',
						'.cc-info',
						'.card-details ul li:first-child',
						'form[name="selectedCardsForm"] .card-details',
						'[data-testid=sponsor-names]',
						'[data-testid=confirmation-container]',
						'button.MuiPickersYear-yearButton',
						'.h1-header-profile',
					],
				},
			],
		},
	],
	dataScrubWhiteList: [{ pred: { operator: 'default' }, rules: [{ pred: { operator: 'default' }, value: ['[data-testid=promoCodeInputBox]'] }] }],
	dataScrubXHRRegExes: [
		{
			pred: { operator: 'default' },
			rules: [
				{
					pred: { operator: 'default' },
					value: [
						{ f: '', p: 'CreditCardManagement' },
						{ f: '', p: 'PaymentInfo' },
					],
				},
			],
		},
	],
	enableWorkerCompression: [{ pred: { operator: 'default' }, value: false }],
	encryptScrubList: [
		{
			pred: { operator: 'default' },
			rules: [
				{
					pred: { operator: 'default' },
					value: [
						'.account-name',
						'#ship-to',
						'.shipping-details > div > div',
						'.address-info',
						'#select-address > li > label',
						'div.ds-info aside',
						'.receipt-details',
						'.read-only[data-bind*=FullAddress]',
						'.read-only[data-bind*=Country]',
						'.read-only[data-bind*=EmailAddress]',
						'.read-only[data-bind*=PhoneNumber]',
						'#address-recipient',
						'#full-address',
						'#address-PhoneNumber',
						'a.edit-address>span[data-bind="html: DisplayedInfo"]',
						'span#ContentArea_AccountContent_mailing_address',
						'span#ctl00_ctl00_ContentArea_AccountContent_rpt_email_view_ctl00_lblEmailValue',
						'span#ctl00_ctl00_ContentArea_AccountContent_rpt_email_view_ctl00_lblPrefName',
						'span#ctl00_ctl00_ContentArea_AccountContent_rpt_phone_view_ctl00_formattedNumber',
						'div.about-me h4',
						'div.profileData span[data-bind="text: Name, visible: loaded"]',
						'p#ctl00_ctl00_ContentArea_ProductsContent_ctl02_pAddress',
						'select#ctl00_ctl00_ContentArea_ProductsContent_ctl02_DropdownNickName',
						'#contactsIndexSearchBox',
						'.complete-steps>a',
						'td.customer-name',
						'span[data-bind="text: DetailModel.contactModel.Email.Address"]',
						'span[data-bind="text: DetailModel.contactModel.PhoneWithMask"]',
						'.member-info',
						'table.rgMasterTable.rgClipCells>tbody>tr>td:nth-of-type(5)',
						'table.rgMasterTable.rgClipCells>tbody>tr>td:nth-of-type(6)',
						'table.rgMasterTable.rgClipCells>tbody>tr>td:nth-of-type(7)',
						'table.rgMasterTable>tbody>tr>td:nth-of-type(2)',
						'table.rgMasterTable>tbody>tr>td:nth-of-type(4)',
						'#ContentArea_BizworksContent_ReportDefinitionText',
						'p.queryLegend',
						'table.rgMasterTable.rgClipCells>tbody>tr>td:nth-of-type(9)',
						'table.rgMasterTable.rgClipCells>tbody>tr>td:nth-of-type(10)',
						'table.rgMasterTable.rgClipCells>tbody>tr>td:nth-of-type(12)',
						'table.rgMasterTable.rgClipCells>tbody>tr>td:nth-of-type(13)',
						'table.rgMasterTable.rgClipCells>tbody>tr>td:nth-of-type(11)',
						'table.rgMasterTable.rgClipCells>tbody>tr>td:nth-of-type(14)',
						'table.rgMasterTable.rgClipCells>tbody>tr>td:nth-of-type(8)',
						'table.rgMasterTable.rgClipCells>tbody>tr>td:nth-of-type(15)',
						'tr.rgRow td:nth-of-type(5)',
						'#leads-recent>table.leads-table>tbody.k-widget.k-listview>tr>td:nth-of-type(1)',
						'#contactsListView>tr>td:nth-of-type(1)',
						'table.reminders-table>tbody>tr>td:nth-of-type(2)',
						'table.reminders-table>tbody>tr>td:nth-of-type(4)',
						'tbody>tr>td:nth-of-type(6)',
						'#operators-list>div.row.operatorSelected>a',
						'ul.columnList>li:nth-of-type(1)>p>strong',
						'ul.columnList>li:nth-of-type(6)>p',
						'#usernameField>span.value',
						'#emailLabel.value',
						'div.sponsor-info>ul>li>h5',
						'table.scrollable-table>tbody>tr>td[data-label="Sponsor Details"]',
						'tbody>tr>td:nth-of-type(6):not([data-label="Order Number"])',
						'tbody.set-all>tr>td:nth-of-type(2):not([data-label="Membership type"]):not([data-label="Tipo de Membresía"])',
						'table.scrollable-table>tbody>tr>td[data-label="Detalles del Patrocinador"]',
						'a[class="operator-name"]',
						'span[class="name-avatar"]',
						'.operator-dsid',
						'label[class="info-label"] ~ p',
						'label[class="info-label "] ~ p',
						'label[class="info-label"] ~ textarea',
						'span[class=".info"]',
						'.content p strong',
						'[for=emailVerify]',
					],
				},
			],
		},
	],
	eventStoreURL: [{ pred: { operator: 'default' }, value: 'https://herbalife-app.quantummetric.com/q3' }],
	excludeDOMList: [{ pred: { operator: 'default' }, rules: [{ pred: { operator: 'default' }, value: ['.payment-method-additional-info'] }] }],
	excludeRageRE: [
		{
			pred: { operator: 'default' },
			rules: [
				{
					pred: { operator: 'default' },
					value: [
						{ f: '', p: 'next' },
						{ f: '', p: 'zoom' },
						{ f: '', p: 'prev' },
						{ f: '', p: 'qty' },
						{ f: '', p: 'forward' },
						{ f: '', p: 'backward' },
						{ f: '', p: 'up' },
						{ f: '', p: 'down' },
						{ f: '', p: 'toggle' },
						{ f: '', p: '.plus.btn-increment' },
						{ f: '', p: '.minus.btn-increment' },
						{ f: '', p: 'right' },
						{ f: '', p: 'left' },
						{ f: '', p: 'plan' },
						{ f: '', p: 'plus' },
						{ f: '', p: 'minus' },
						{ f: '', p: 'product-row' },
						{ f: '', p: 'icon-add' },
						{ f: 'i', p: '[data-testid=ArrowRightIcon]' },
						{ f: 'i', p: '[data-testid=ArrowLeftIcon]' },
					],
				},
			],
		},
	],
	hashResourceURL: [{ pred: { operator: 'default' }, value: 'https://rl.quantummetric.com/herbalife' }],
	hashUploadPercent: [{ pred: { operator: 'default' }, value: 100 }],
	horizonEnabled: [{ pred: { operator: 'default' }, value: true }],
	ignoreChangesList: [{ pred: { operator: 'default' }, rules: [{ pred: { operator: 'default' }, value: ['#pieChart'] }] }],
	ignoreElementCSSSerialization: [{ pred: { operator: 'default' }, rules: [{ pred: { operator: 'default' }, value: ['link[href*="pong.css"]'] }] }],
	logResourcePercent: [{ pred: { operator: 'default' }, value: 1 }],
	maxXHRDataLength: [{ pred: { operator: 'default' }, value: 50000 }],
	monitorAllHashChanges: [{ pred: { operator: 'default' }, value: false }],
	reportURL: [{ pred: { operator: 'default' }, value: 'https://ingest.quantummetric.com/horizon/herbalife' }],
	resetCartAfterConv: [{ pred: { operator: 'default' }, value: true }],
	spinnerMaxSeconds: [{ pred: { operator: 'default' }, value: 12 }],
	spinnerMinimumThreshold: [{ pred: { operator: 'default' }, value: 5 }],
	spinnerSelectorList: [
		{
			pred: { operator: 'default' },
			rules: [
				{
					pred: { operator: 'default' },
					value: [
						'#loading[style="display: block;"]',
						'.k-loading-image',
						'.btn-orange[data-bind="visible: Processing"]',
						'.loader:not([style*=none]):not(.small)',
						'.loading',
						'.spinner',
						'.h-loading-image',
					],
				},
			],
		},
	],
	transformAttributesForNodesList: [
		{ pred: { operator: 'default' }, rules: [{ pred: { operator: 'default' }, value: [{ attr: 'href', re: { f: '', p: '^.+$' }, rep: '', sel: 'a' }] }] },
	],
	xhrHookWhiteListDetails: [{ pred: { operator: 'default' }, rules: [{ pred: { operator: 'default' }, value: [{ f: '', p: 'herbalife' }] }] }],
	xhrPerformanceWhitelistDetails: [{ pred: { operator: 'default' }, rules: [{ pred: { operator: 'default' }, value: [{ f: '', p: 'herbalife' }] }] }],
	eventDefinitions: {
		events: [
			{
				u: '.*',
				i: 1,
				m: 0,
				s: 0,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#ShopNow.forward, #ShopNow.forward *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: 'pwd',
				i: 2,
				m: 0,
				s: 0,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#BuyNowReg.forward, #BuyNowReg.forward *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{ u: 'connect-member', i: 3, m: 0, s: 0, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{
				u: 'connect-member',
				i: 4,
				m: 0,
				s: 0,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#connectme-now.forward, #connectme-now.forward *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: 'connect-member',
				i: 5,
				m: 0,
				s: 0,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#link-search, #link-search *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/ProductsList',
				i: 6,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.subcategory-title > h3'] },
						{ t: 'SelectorText', v: ['.subcategory-title > h3'] },
					],
				},
				x: 'QCC',
			},
			{
				u: '/Product/Details',
				i: 7,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.product-content'] },
						{
							t: 'JSValueEx',
							v: [
								"(document.querySelector('h2.title') ? document.querySelector('h2.title').innerText : \"\") + (document.querySelector('div.sku') ? \" | \" + document.querySelector('div.sku').innerText : \"\")",
							],
						},
					],
				},
				x: 'QCC',
			},
			{
				u: '\\.goherbalife\\.com/',
				i: 8,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{
									t: 'Matches',
									v: [
										'[data-bind="click: AddToCart"],[data-bind*="click: BuyNow"],a[data-bind="click: AddComboToCart"],[data-bind="click: AddToCart"] *,[data-bind*="click: BuyNow"] *,a[data-bind="click: AddComboToCart"] *',
									],
								},
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/Product/Details',
				i: 9,
				m: 1,
				s: 2,
				f: 64,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.confirm-msg:not([style="display: none;"]):not([style="display:none;"]) > .add-confirm > span'] },
						{ t: 'CV', v: [{ t: 'SelectorText', v: ['.confirm-msg:not([style="display: none;"]):not([style="display:none;"]) > .add-confirm > span'] }] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{ u: '\\.goherbalife\\.com/Cart/Home/', i: 10, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{
				u: '/Cart/Home|/Cart/Checkout/DeliverySelect|/Cart/Checkout/Payment',
				i: 11,
				m: 1,
				s: 1,
				f: 64,
				v: {
					t: 'E',
					v: [
						{ t: 'JSONPath', v: ['pricing.total', { t: 'XHRResponse', v: ['.goherbalife.com/Cart/API/CartV1/'] }] },
						{
							t: 'CV',
							v: [
								{ t: 'JSONPath', v: ['pricing.total', { t: 'XHRResponse', v: ['.goherbalife.com/Cart/API/CartV1/'] }] },
								{ t: 'JSValueEx', v: ["window._AnalyticsFacts_ && window._AnalyticsFacts_.CurrencyCode ? window._AnalyticsFacts_.CurrencyCode : 'USD';"] },
							],
						},
					],
				},
				x: 'QXJ',
				evalAlways: true,
			},
			{
				u: '\\.goherbalife\\.com/Cart/Home/',
				i: 12,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['a[data-bind*="click: OnProceedToCheckout"],a[data-bind*="click: OnProceedToCheckout"] *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{ u: '\\.goherbalife\\.com/Cart/Checkout/DeliverySelect/', i: 13, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{ u: '\\.goherbalife\\.com/Cart/Checkout/Payment/', i: 14, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{
				u: '/PaymentInfo/Index',
				i: 15,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.btn-checkout-full:not(.disabled),.btn-checkout-full:not(.disabled) *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '.*',
				i: 17,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.notification-error[data-bind]:not([style="display: none;"]):not([style="display:none"]):not(.ng-hide)'] },
						{ t: 'SelectorText', v: ['.notification-error[data-bind]:not([style="display: none;"]):not([style="display:none"]):not(.ng-hide)'] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: 'findMem',
				i: 19,
				m: 0,
				s: 0,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.forward.store-link, .forward.store-link *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '.goherbalife.com\\/.*\\/Confirmation',
				i: 21,
				m: 0,
				s: 2,
				f: 1,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['#grand-total > .value'] },
						{
							t: 'CV',
							v: [
								{ t: 'SelectorText', v: ['#grand-total > .value'] },
								{ t: 'JSValueEx', v: ["window._AnalyticsFacts_ && window._AnalyticsFacts_.CurrencyCode ? window._AnalyticsFacts_.CurrencyCode : 'USD'"] },
							],
						},
					],
				},
				x: 'QCC',
			},
			{
				u: '.*',
				i: 25,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'CookiePresent', v: ['ASP.NET_SessionId'] },
						{ t: 'CookieValue', v: ['ASP.NET_SessionId'] },
					],
				},
				x: 'QCK',
			},
			{
				u: '.*',
				i: 26,
				m: 0,
				s: 0,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['!!window._AnalyticsFacts_ && !!(window._AnalyticsFacts_.Id)'] },
						{ t: 'JSValue', v: ['window._AnalyticsFacts_.Id'] },
					],
				},
				x: 'QJS',
				evalAlways: true,
			},
			{
				u: '.*',
				i: 27,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['!!window._AnalyticsFacts_ && !!window._AnalyticsFacts_.OrderId'] },
						{ t: 'JSValue', v: ['window._AnalyticsFacts_.OrderId'] },
					],
				},
				x: 'QJS',
				evalAlways: true,
			},
			{
				u: '.*',
				i: 28,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['!!window._AnalyticsFacts_ && !!window._AnalyticsFacts_.CountryCode'] },
						{ t: 'JSValue', v: ['window._AnalyticsFacts_.CountryCode'] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 29,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['!!window._AnalyticsFacts_ && !!(window._AnalyticsFacts_.ReceiptId)'] },
						{ t: 'JSValue', v: ['window._AnalyticsFacts_.ReceiptId'] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 31,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['!!window._AnalyticsFacts_ && !!window._AnalyticsFacts_.SiteId'] },
						{ t: 'JSValue', v: ['window._AnalyticsFacts_.SiteId;'] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 33,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['!!window._AnalyticsFacts_ && !!window._AnalyticsFacts_.SiteName'] },
						{ t: 'JSValue', v: ['window._AnalyticsFacts_.SiteName'] },
					],
				},
				x: 'QJS',
			},
			{
				u: '\\.goherbalife\\.com',
				i: 34,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['!!window._AnalyticsFacts_ && !!window._AnalyticsFacts_.OrderId'] },
						{ t: 'JSValue', v: ['window._AnalyticsFacts_.OrderId'] },
					],
				},
				x: 'QJS',
			},
			{
				sessionInfoReq: true,
				evalAlways: false,
				excludeBlank: true,
				i: 35,
				f: 36,
				m: 0,
				s: 2,
				u: '.*',
				x: 'QJS',
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['try{!!window._AnalyticsFacts_.ClientID || !!window.AnalyticsFacts_.ClientID || !!window.ClientID;}catch(err){}'] },
						{ t: 'JSValue', v: ['try{window._AnalyticsFacts_.ClientID || window.AnalyticsFacts_.ClientID || window.ClientID;}catch(err){}'] },
					],
				},
			},
			{
				u: '.*',
				i: 36,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['#modal-browsescheme-invalid[style="display: block;"] h4'] },
						{ t: 'SelectorText', v: ['#modal-browsescheme-invalid[style="display: block;"] h4'] },
					],
				},
				x: 'QCC',
			},
			{
				u: '.*',
				i: 37,
				m: 0,
				s: 0,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 38,
				m: 0,
				s: 0,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['!!window._AnalyticsFacts_ && !!window._AnalyticsFacts_.IsPresidentsTeam'] },
						{ t: 'JSValue', v: ['window._AnalyticsFacts_.IsPresidentsTeam'] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*\\.myherbalife\\.com.*',
				i: 39,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.receipt-header #invoiceId,div.value[data-bind="invisible: isDraft, text: invoice.DisplayMemberInvoiceNumber"]'] },
						{ t: 'SelectorText', v: ['.receipt-header #invoiceId,div.value[data-bind="invisible: isDraft, text: invoice.DisplayMemberInvoiceNumber"]'] },
					],
				},
				x: 'QCC',
				evalAlways: true,
				sessionInfoReq: true,
			},
			{
				u: '.*\\.myherbalife\\.com.*',
				i: 41,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['!!window._AnalyticsFacts_ && !!window._AnalyticsFacts_.OrderId'] },
						{ t: 'JSValue', v: ['window._AnalyticsFacts_.OrderId'] },
					],
				},
				x: 'QJS',
				evalAlways: true,
			},
			{
				u: '.*\\.myherbalife\\.com.*',
				i: 42,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['div#product,#ctl00_ctl00_ContentArea_ProductsContent_ctl00_divProductDetail'] },
						{ t: 'JSValueEx', v: ["(!!document.querySelector('div.sku') ? document.querySelector('div.sku').innerText : \"\")"] },
					],
				},
				x: 'QCC',
			},
			{
				u: '.*\\.myherbalife\\.com.*',
				i: 43,
				m: 0,
				s: 0,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{
									t: 'Matches',
									v: [
										'.btn-add-cart,.btn-add-cart-large,.btn-add-cart-small,[name*="addCart"], .btn-add-cart,.btn-add-cart-large,.btn-add-cart-small,[name*="addCart"] *',
									],
								},
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '.myherbalife.com\\/.*\\/Cart\\/Home',
				i: 44,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['#shopping-cart'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 45,
				f: 0,
				m: 0,
				s: 1,
				u: '.*\\.myherbalife\\.com.*',
				x: 'QCE',
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{
									t: 'Matches',
									v: [
										'#btn-go-checkout,#btn-catalog-go-checkout,[name="CheckoutButton"],.floating-checkout [id=summary-form],#btn-go-checkout *,#btn-catalog-go-checkout *,[name="CheckoutButton"] *,.floating-checkout [id=summary-form] *',
									],
								},
							],
						},
						{ t: 'V', v: [''] },
					],
				},
			},
			{
				u: '/Shop/Catalog',
				i: 46,
				m: 0,
				s: 2,
				f: 64,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['#vpw-subtotal'] },
						{
							t: 'CV',
							v: [
								{ t: 'SelectorText', v: ['#vpw-subtotal'] },
								{ t: 'JSValueEx', v: ["window._AnalyticsFacts_ && window._AnalyticsFacts_.CurrencyCode ? window._AnalyticsFacts_.CurrencyCode : 'USD'"] },
							],
						},
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
			},
			{
				sessionInfoReq: true,
				evalAlways: true,
				excludeBlank: true,
				i: 47,
				f: 64,
				m: 1,
				s: 2,
				u: '^(?!.*?\\/Confirm).*\\/Cart|\\/ShoppingCart',
				x: 'QJS',
				v: {
					t: 'E',
					v: [
						{
							t: 'JSValueEx',
							v: [
								"!!document.querySelector('#pricing-discounted-subtotal,#ctl00_ctl00_ContentArea_ctl02_uxSubtotal,#pricing-amount-due') && (document.querySelector('#pricing-discounted-subtotal,#ctl00_ctl00_ContentArea_ctl02_uxSubtotal,#pricing-amount-due').innerText !== \"\")",
							],
						},
						{
							t: 'CV',
							v: [
								{ t: 'SelectorText', v: ['#pricing-discounted-subtotal,#ctl00_ctl00_ContentArea_ctl02_uxSubtotal,#pricing-amount-due'] },
								{ t: 'JSValueEx', v: ["window._AnalyticsFacts_ && window._AnalyticsFacts_.CurrencyCode ? window._AnalyticsFacts_.CurrencyCode : 'USD'"] },
							],
						},
					],
				},
			},
			{
				u: '.myherbalife.com\\/.*\\/Confirmation',
				i: 48,
				m: 0,
				s: 1,
				f: 1,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['!!window.QuantumMetricAPI && !!window.QuantumMetricAPI.getCartValue && !!window.QuantumMetricAPI.getCartValue()'] },
						{ t: 'CV', v: [{ t: 'JSValue', v: ['(parseFloat(window.QuantumMetricAPI.getCartValue())/100).toFixed(2)'] }] },
					],
				},
				x: 'QJS',
				sessionInfoReq: true,
			},
			{
				u: '/Receipt',
				i: 49,
				m: 0,
				s: 2,
				f: 64,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValueEx', v: ["!!document.querySelector('span#totalAmount') && (document.querySelector('span#totalAmount').innerText !== \"\")"] },
						{
							t: 'CV',
							v: [
								{ t: 'SelectorText', v: ['span#totalAmount'] },
								{ t: 'JSValueEx', v: ["window._AnalyticsFacts_ && window._AnalyticsFacts_.CurrencyCode ? window._AnalyticsFacts_.CurrencyCode : 'USD'"] },
							],
						},
					],
				},
				x: 'QJS',
			},
			{
				u: '.*\\.myherbalife\\.com.*',
				i: 50,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.notification-success:not([style="display: none;"]):not([style="display:none"])'] },
						{ t: 'SelectorText', v: ['.notification-success:not([style="display: none;"]):not([style="display:none"])'] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: '/Confirm',
				i: 51,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.OrderNumberDisplay'] },
						{ t: 'SelectorText', v: ['.OrderNumberDisplay'] },
					],
				},
				x: 'QCC',
			},
			{
				u: '.*\\.myherbalife\\.com.*',
				i: 52,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.receipt-header #invoiceId,div.value[data-bind="invisible: isDraft, text: invoice.DisplayMemberInvoiceNumber"]'] },
						{ t: 'SelectorText', v: ['.receipt-header span#invoiceId,div.value[data-bind="invisible: isDraft, text: invoice.DisplayMemberInvoiceNumber"]'] },
					],
				},
				x: 'QCC',
				evalAlways: true,
				sessionInfoReq: true,
			},
			{
				u: '.*\\.myherbalife\\.com.*',
				i: 53,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['!!window._AnalyticsFacts_ && !!window._AnalyticsFacts_.OrderIntention'] },
						{ t: 'JSValue', v: ['window._AnalyticsFacts_.OrderIntention'] },
					],
				},
				x: 'QJS',
			},
			{
				u: '/Receipts',
				i: 54,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.hmsReceiptNumber:not(:empty)'] },
						{ t: 'SelectorText', v: ['.hmsReceiptNumber:not(:empty)'] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: '.*\\.myherbalife\\.com.*',
				i: 56,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.k-window[style*="display: block"] #modal-browsescheme-invalid h4'] },
						{ t: 'SelectorText', v: ['.k-window[style*="display: block"] #modal-browsescheme-invalid h4'] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				f: 0,
				i: 57,
				evalAlways: false,
				m: 1,
				s: 1,
				u: '.*\\.myherbalife\\.com.*',
				v: {
					t: 'E',
					v: [
						{
							t: 'JSValue',
							v: [
								{
									fn: function () {
										return false;
									},
								},
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
				sessionInfoReq: false,
				excludeBlank: false,
			},
			{
				u: '.*',
				i: 58,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['!!window._AnalyticsFacts_ && !!window._AnalyticsFacts_.LanguageCode > 0;'] },
						{ t: 'JSValue', v: ['window._AnalyticsFacts_.LanguageCode'] },
					],
				},
				x: 'QJS',
			},
			{
				u: '/Shop/Catalog/Items',
				i: 60,
				m: 0,
				s: 0,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'CookiePresent', v: ['ABnTarget'] },
						{ t: 'CookieValue', v: ['ABnTarget'] },
					],
				},
				x: 'QCK',
			},
			{
				u: '/BizworksPlus/',
				i: 62,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.widget,.widget *'] },
							],
						},
						{ t: 'SelectorText', v: ['.widget__header--minireport'] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/Confirmation',
				i: 63,
				m: 0,
				s: 0,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['!!window._AnalyticsFacts_ && !!window._AnalyticsFacts_.CurrencyCode > 0;'] },
						{ t: 'JSValue', v: ['window._AnalyticsFacts_.CurrencyCode'] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 64,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ["!!window.location && !!window.location.href && window.location.href.indexOf('?') > 0;"] },
						{ t: 'JSValue', v: ["window.location.href.replace(/.*\\?/g,'');"] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 66,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.serverStamp, #_Stamp'] },
						{ t: 'JSValueEx', v: ['document.querySelector(\'.serverStamp, #_Stamp\').innerText.split("|")[2].trim();'] },
					],
				},
				x: 'QCC',
			},
			{
				u: 'accounts\\.myherbalife\\.com',
				i: 67,
				m: 1,
				s: 1,
				f: 256,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'FormFieldSubmittedValue', v: ['input#Username'] },
								{ t: 'IsNotNull', v: [] },
							],
						},
						{ t: 'JSValueEx', v: ["document.querySelector('input#Username').getAttribute('value')"] },
					],
				},
				x: 'QFF',
			},
			{
				sessionInfoReq: false,
				evalAlways: true,
				excludeBlank: false,
				i: 68,
				f: 0,
				m: 0,
				s: 1,
				u: '.*',
				x: 'QCC',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.field-validation-error:not([style*=none])'] },
						{ t: 'SelectorText', v: ['.field-validation-error:not([style*=none])'] },
					],
				},
			},
			{
				u: '/en-US/Shop/Catalog/Items/',
				i: 69,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'SelectorText', v: ['body'] },
								{ t: 'Contains', v: ['Sorry, product not found.'] },
							],
						},
						{ t: 'JSValueEx', v: ["!!window.location.pathname&&!!window.location.pathname.split('/Ds/')[1]&&window.location.pathname.split('/Ds/')[1]"] },
					],
				},
				x: 'QPC',
			},
			{ u: '/Shop/Receipts/Consumption/NutritionClub', i: 70, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{
				u: '/Shop/Receipts/Consumption/NutritionClub',
				i: 71,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#btn-owner-mode,#btn-owner-mode *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/Shop/Receipts/Consumption/NutritionClub',
				i: 72,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#btn-sell-consumptions,#btn-sell-consumptions *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/Shop/Receipts/Consumption/NutritionClub',
				i: 73,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#btn-view-reports,#btn-view-reports *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/Shop/Receipts/Consumption/NutritionClub',
				i: 74,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['[data-id="2"],[data-id="2"] *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 75,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ["!!window.location && !!window.location.hash && window.location.hash.indexOf('SelectOperator') > 0"] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 76,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ["!!window.location && !!window.location.hash && window.location.hash.indexOf('SelectCustomer') > 0"] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 77,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ["!!window.location && !!window.location.hash && window.location.hash.indexOf('SellConsumptionOrder') > 0"] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 78,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ["!!window.location && !!window.location.hash && window.location.hash.indexOf('ConsumptionPaymentCash') > 0"] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 79,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ["!!window.location && !!window.location.hash && window.location.hash.indexOf('ConsumptionPaymentOfflineCC') > 0"] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 80,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ["!!window.location && !!window.location.hash && window.location.hash.indexOf('PaymentFormRepository') > 0"] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 81,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ["!!window.location && !!window.location.hash && window.location.hash.indexOf('ConsumptionPaymentCheque') > 0"] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 82,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ["!!window.location && !!window.location.hash && window.location.hash.indexOf('ConsumptionPaymentPrepaidCard') > 0"] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 83,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ["!!window.location && !!window.location.hash && window.location.hash.indexOf('ReceiptMethod') > 0"] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{ u: '/Shop/Receipts/Invoice/Print/DS/', i: 84, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 85,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#single-customer-payments-desktop .pay-button.cash,#single-customer-payments-desktop .pay-button.cash *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 86,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#single-customer-payments-desktop .pay-button.offline-cc,#single-customer-payments-desktop .pay-button.offline-cc *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 87,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#single-customer-payments-desktop .pay-button.cheque,#single-customer-payments-desktop .pay-button.cheque *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 88,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{
									t: 'Matches',
									v: ['#single-customer-payments-desktop .pay-button.prepaid-card,#single-customer-payments-desktop .pay-button.prepaid-card *'],
								},
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 89,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#options .icon-print,#options .icon-print *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 90,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#options .icon-email,#options .icon-email *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 91,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#options .icon-mobile-phone-ln-1,#options .icon-mobile-phone-ln-1 *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 92,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#options .icon-cart-ln-5,#options .icon-cart-ln-5 *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 93,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#ConsumptionPaymentCash .btn-primary,#ConsumptionPaymentCash .btn-primary *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{ u: '/Shop/Receipts/ConsumptionPlan/List/DS/', i: 94, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{
				u: '/Shop/Receipts/ConsumptionPlan/List/DS/',
				i: 95,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['[name="addConsumptionPlan"],[name="addConsumptionPlan"] *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '.*',
				i: 97,
				m: 0,
				s: 0,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.btn-logout,.btn-logout *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 98,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['[href="#!WaitingRoom"],[href="#!WaitingRoom"] *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 99,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#ContinueToMultipleSell,#ContinueToMultipleSell *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 100,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['[data-bind="click: hideProfitFunc"],[data-bind="click: hideProfitFunc"] *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/Shop/Receipts/Consumption/Index/DS/',
				i: 101,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['[data-bind="click: showProfitOnly"],[data-bind="click: showProfitOnly"] *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '.*',
				i: 102,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ["!!window.location.href && window.location.href.indexOf('Error') > -1"] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
				sessionInfoReq: true,
			},
			{
				u: '.*',
				i: 103,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.error-page'] },
						{ t: 'JSValueEx', v: ['window.location.href'] },
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
			},
			{
				u: '.*',
				i: 104,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['!!window.BOOMR && !!window.BOOMR.config_url;'] },
						{ t: 'JSValue', v: ["window.BOOMR.config_url.split('si=')[1].split('&')[0];"] },
					],
				},
				x: 'QJS',
				sessionInfoReq: true,
			},
			{
				u: '/404\\.aspx',
				i: 105,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
			},
			{
				u: '/500\\.aspx',
				i: 106,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{ t: 'JSValueEx', v: ['document.referrer'] },
					],
				},
				x: 'QCC',
			},
			{
				u: '.*',
				i: 108,
				m: 0,
				s: 2,
				f: 4,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['!!window._AnalyticsFacts_ && !!window._AnalyticsFacts_.PrimaryEmail'] },
						{ t: 'JSValue', v: ['window._AnalyticsFacts_.PrimaryEmail'] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 109,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['div#incident,div#incident *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '\\.goherbalife\\.com/Cart/Checkout/DeliverySelect/',
				i: 110,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['a[data-bind*="click: ContinueCheckoutPayment"],a[data-bind*="click: ContinueCheckoutPayment"] *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '\\.goherbalife\\.com/Cart/Checkout/Payment/',
				i: 111,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['a[data-bind*="click: SubmitOrder"],a[data-bind*="click: SubmitOrder"] *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/Catalog/Home/Index/',
				i: 112,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['a[href*="/wellness/Home/Index/"].btn-primary,a[href*="/wellness/Home/Index/"].btn-primary *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				f: 0,
				i: 113,
				evalAlways: false,
				m: 1,
				s: 1,
				u: '.*',
				v: {
					t: 'E',
					v: [
						{
							t: 'JSValue',
							v: [
								{
									fn: function () {
										return false;
									},
								},
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
				sessionInfoReq: false,
				excludeBlank: false,
			},
			{
				f: 0,
				i: 114,
				evalAlways: false,
				m: 1,
				s: 1,
				u: '.*',
				v: {
					t: 'E',
					v: [
						{
							t: 'JSValue',
							v: [
								{
									fn: function () {
										return false;
									},
								},
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
				sessionInfoReq: false,
				excludeBlank: false,
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 115,
				f: 0,
				m: 1,
				s: 1,
				u: '.*',
				x: 'QJS',
				v: {
					t: 'E',
					v: [
						{
							t: 'JSValue',
							v: [
								{
									fn: function () {
										return false;
									},
								},
							],
						},
						{ t: 'V', v: [''] },
					],
				},
			},
			{
				f: 0,
				i: 116,
				evalAlways: false,
				m: 1,
				s: 1,
				u: '.*',
				v: {
					t: 'E',
					v: [
						{
							t: 'JSValue',
							v: [
								{
									fn: function () {
										return false;
									},
								},
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
				sessionInfoReq: false,
				excludeBlank: false,
			},
			{
				f: 0,
				i: 117,
				evalAlways: false,
				m: 1,
				s: 1,
				u: '.*',
				v: {
					t: 'E',
					v: [
						{
							t: 'JSValue',
							v: [
								{
									fn: function () {
										return false;
									},
								},
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
				sessionInfoReq: false,
				excludeBlank: false,
			},
			{
				f: 0,
				i: 118,
				evalAlways: false,
				m: 1,
				s: 1,
				u: '.*',
				v: {
					t: 'E',
					v: [
						{
							t: 'JSValue',
							v: [
								{
									fn: function () {
										return false;
									},
								},
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
				sessionInfoReq: false,
				excludeBlank: false,
			},
			{
				f: 0,
				i: 119,
				evalAlways: false,
				m: 1,
				s: 1,
				u: '.*',
				v: {
					t: 'E',
					v: [
						{
							t: 'JSValue',
							v: [
								{
									fn: function () {
										return false;
									},
								},
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
				sessionInfoReq: false,
				excludeBlank: false,
			},
			{
				f: 0,
				i: 120,
				evalAlways: false,
				m: 1,
				s: 1,
				u: '.*',
				v: {
					t: 'E',
					v: [
						{
							t: 'JSValue',
							v: [
								{
									fn: function () {
										return false;
									},
								},
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
				sessionInfoReq: false,
				excludeBlank: false,
			},
			{
				u: 'wellness\\/Home\\/Index\\/.*\\/#\\/WpTemplateResult',
				i: 121,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.goherbalife.com/Account/Authentication/Login?code=',
				i: 122,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['document.title.indexOf("Error") > -1'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
				evalAlways: true,
			},
			{
				f: 0,
				i: 123,
				evalAlways: false,
				m: 1,
				s: 1,
				u: '.*',
				v: {
					t: 'E',
					v: [
						{
							t: 'JSValue',
							v: [
								{
									fn: function () {
										return false;
									},
								},
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
				sessionInfoReq: false,
				excludeBlank: false,
			},
			{
				u: '/Shop/Catalog/Items/Search/',
				i: 124,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSONPathValue', v: ['Hits', '0', { t: 'XHRResponse', v: ['Shop\\/Catalog\\/API\\/Search\\/V2\\/.*categoryId=\\d*'] }] },
						{ t: 'JSONPath', v: ['Query.Filters.categories', { t: 'XHRResponse', v: ['Shop\\/Catalog\\/API\\/Search\\/V2\\/.*categoryId=\\d*'] }] },
					],
				},
				x: 'QXJ',
			},
			{
				u: '.*',
				i: 125,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['h2.text-danger'] },
						{ t: 'SelectorText', v: ['h2.text-danger'] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: '/Shop/Cart/Confirmation/Index',
				i: 126,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['section#payments-section>div a[href*="paynearme.com"]'] },
						{ t: 'SelectorText', v: ['section#payments-section>div a[href*="paynearme.com"]'] },
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
			},
			{
				u: '/Shop/Receipts/Invoice/Create',
				i: 127,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['li>div.tile>h5,li>div.tile>h5 *'] },
							],
						},
						{ t: 'JSValueEx', v: ["window.QuantumMetricAPI.lastClicked.closest('div.tile').innerText.trim()"] },
					],
				},
				x: 'QCE',
			},
			{
				u: '\\.myherbalife\\.com',
				i: 128,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'KeyValue', v: ['value', 'Support Center'] },
							],
						},
						{ t: 'JSValueEx', v: ['window.location.href'] },
					],
				},
				x: 'QCE',
				sessionInfoReq: true,
			},
			{
				u: 'accounts\\.myherbalife\\.com/ForgotUserName',
				i: 129,
				m: 1,
				s: 1,
				f: 256,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'FormFieldSubmittedValue', v: ['#Email'] },
								{ t: 'IsNotNull', v: [] },
							],
						},
						{ t: 'SelectorText', v: ['#Email'] },
					],
				},
				x: 'QFF',
			},
			{
				u: '.*',
				i: 130,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'SelectorText', v: ['.error'] },
								{ t: 'Contains', v: ['An error occurred while processing your request'] },
							],
						},
						{ t: 'JSValueEx', v: ['window.location.href'] },
					],
				},
				x: 'QPC',
				evalAlways: true,
				sessionInfoReq: true,
			},
			{
				u: 'accounts\\.myherbalife\\.com/Account/Create',
				i: 131,
				m: 0,
				s: 2,
				f: 6,
				v: {
					t: 'E',
					v: [
						{ t: 'JSONPath', v: ['model.Email', { t: 'XHRRequest', v: ['/CreateAccount'] }] },
						{ t: 'JSONPath', v: ['model.Email', { t: 'XHRRequest', v: ['/CreateAccount'] }] },
					],
				},
				x: 'QXJ',
			},
			{
				u: '(onlinecontract.myherbalife.com\\/olc4\\/Contract\\/BasicInfo\\/|SignUp\\/GeneralInformation\\/Distributor|onlinecontract.myherbalife.com)',
				i: 132,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'FieldFilledNode', v: ['input#SponsorInfo_SponsorId, #trSponsorId #txtSponsorID'] },
						{ t: 'SelectorText', v: ['input#SponsorInfo_SponsorId, #trSponsorId #txtSponsorID'] },
					],
				},
				x: 'QFL',
			},
			{
				u: 'onlinecontract\\.myherbalife\\.com/olc4/Contract/BasicInfo/',
				i: 133,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'FormFieldSubmittedValue', v: ['form#BasicInfoForm input#SponsorInfo_ThreeDigitsLastName'] },
								{ t: 'IsNotNull', v: [] },
							],
						},
						{ t: 'SelectorText', v: ['form#BasicInfoForm input#SponsorInfo_ThreeDigitsLastName'] },
					],
				},
				x: 'QFF',
			},
			{
				u: 'onlinecontract\\.myherbalife\\.com/olc4/Contract/',
				i: 134,
				m: 1,
				s: 2,
				f: 8,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'FormFieldSubmittedValue', v: ['form#BasicInfoForm input#BasicInfoDetails_FirstName'] },
								{ t: 'IsNotNull', v: [] },
							],
						},
						{ t: 'SelectorText', v: ['form#BasicInfoForm input#BasicInfoDetails_FirstName'] },
					],
				},
				x: 'QFF',
			},
			{
				u: 'onlinecontract\\.myherbalife\\.com/olc4/Contract/BasicInfo/',
				i: 135,
				m: 1,
				s: 2,
				f: 16,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'FormFieldSubmittedValue', v: ['form#BasicInfoForm input#BasicInfoDetails_LastName'] },
								{ t: 'IsNotNull', v: [] },
							],
						},
						{ t: 'SelectorText', v: ['form#BasicInfoForm input#BasicInfoDetails_LastName'] },
					],
				},
				x: 'QFF',
			},
			{
				u: 'onlinecontract\\.myherbalife\\.com/olc4/Contract/BasicInfo/',
				i: 136,
				m: 1,
				s: 2,
				f: 256,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'FormFieldSubmittedValue', v: ['form#BasicInfoForm select#BasicInfoDetails_Year'] },
								{ t: 'IsNotNull', v: [] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"!!document.querySelector('form#BasicInfoForm select#BasicInfoDetails_Month').value && !!document.querySelector('form#BasicInfoForm select#BasicInfoDetails_Day').value && !!document.querySelector('form#BasicInfoForm select#BasicInfoDetails_Year').value && document.querySelector('form#BasicInfoForm select#BasicInfoDetails_Month').value + \"-\" + document.querySelector('form#BasicInfoForm select#BasicInfoDetails_Day').value + \"-\" + document.querySelector('form#BasicInfoForm select#BasicInfoDetails_Year').value",
							],
						},
					],
				},
				x: 'QFF',
			},
			{
				u: 'onlinecontract\\.myherbalife\\.com/olc4/Contract/BasicInfo/',
				i: 137,
				m: 1,
				s: 2,
				f: 256,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'FormFieldSubmittedValue', v: ['#PersonalInfoForm input#PhoneInfo_PrimaryPhone'] },
								{ t: 'IsNotNull', v: [] },
							],
						},
						{ t: 'SelectorText', v: ['#PersonalInfoForm input#PhoneInfo_PrimaryPhone'] },
					],
				},
				x: 'QFF',
			},
			{
				u: '\\.myherbalife\\.com',
				i: 138,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['a[rel="Apply Online"],a[rel="Apply Online"] *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '\\.myherbalife\\.com/Account/Create',
				i: 139,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{ t: 'JSValueEx', v: ['(function(){try{return document.referrer}catch(err){}})()'] },
					],
				},
				x: 'QCC',
			},
			{
				u: '\\.myherbalife\\.com/Account/Create',
				i: 140,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#register-form a#create-account,#register-form a#create-account *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				f: 0,
				i: 141,
				evalAlways: true,
				m: 0,
				s: 1,
				u: '/account/membershiptype',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['#chooseProgram'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
				sessionInfoReq: false,
				excludeBlank: false,
			},
			{
				u: '.*',
				i: 142,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: 'onlinecontract\\.myherbalife\\.com/olc4/Contract/',
				i: 143,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['form#BasicInfoForm '] },
						{
							t: 'JSValueEx',
							v: [
								"(function(){\n    try {\n        if (!!window.QuantumMetricAPI) {\n            var type = window.location.pathname.split('BasicInfo/')[1];\n            var id = type === \"Distributor\" ? 441 : 440;\n            window.localStorage.setItem('qm_oc_40_flow', type);\n            window.QuantumMetricAPI.sendEvent(id, 0); \n        };\n    } catch (err) {\n        window.QuantumMetricAPI.sendEvent(418, 0, '143: ' + err.message);\n    };\n})();",
							],
						},
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: 'onlinecontract\\.myherbalife\\.com/olc4/Contract/',
				i: 145,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['form#PersonalInfoForm '] },
						{
							t: 'JSValueEx',
							v: [
								"(function(){\n    try {\n        if (!!window.QuantumMetricAPI) {\n            var type = window.localStorage.getItem('qm_oc_40_flow');\n            var id = type === \"Member\" ? 442 : 443;\n            window.QuantumMetricAPI.sendEvent(id, 0); \n        };\n    } catch (err) {\n        window.QuantumMetricAPI.sendEvent(418, 0, '145: ' + err.message);\n    };\n})();",
							],
						},
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: 'onlinecontract\\.myherbalife\\.com/olc4/Contract/PersonalInfo',
				i: 147,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['#AccountInfoForm'] },
						{
							t: 'JSValueEx',
							v: [
								"(function(){\n    try {\n        if (!!window.QuantumMetricAPI) {\n            var type = window.localStorage.getItem('qm_oc_40_flow');\n            var id = type === \"Member\" ? 444 : 445;\n            window.QuantumMetricAPI.sendEvent(id, 0); \n        };\n    } catch (err) {\n        window.QuantumMetricAPI.sendEvent(418, 0, '147: ' + err.message);\n    };",
							],
						},
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: 'onlinecontract\\.myherbalife\\.com/olc4/Contract/AccountInfo',
				i: 149,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['#GoldStandarsForm input#cancelButton'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: 'onlinecontract\\.myherbalife\\.com/olc4/Contract/',
				i: 151,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['form#AgreementsForm'] },
						{
							t: 'JSValueEx',
							v: [
								"(function(){\n    try {\n        if (!!window.QuantumMetricAPI) {\n            var type = window.localStorage.getItem('qm_oc_40_flow');\n            var id = type === \"Member\" ? 446 : 447;\n            window.QuantumMetricAPI.sendEvent(id, 0); \n        };\n    } catch (err) {\n        window.QuantumMetricAPI.sendEvent(418, 0, '145: ' + err.message);\n    };\n})();",
							],
						},
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: 'onlinecontract\\.myherbalife\\.com/olc4/Contract/',
				i: 153,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['form#SummaryForm'] },
						{
							t: 'JSValueEx',
							v: [
								"(function(){\n    try {\n        if (!!window.QuantumMetricAPI) {\n            var type = window.localStorage.getItem('qm_oc_40_flow');\n            var id = type === \"Member\" ? 448 : 449;\n            window.QuantumMetricAPI.sendEvent(id, 0); \n        };\n    } catch (err) {\n        window.QuantumMetricAPI.sendEvent(418, 0, '145: ' + err.message);\n    };\n})();",
							],
						},
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: 'onlinecontract\\.myherbalife\\.com/olc4/',
				i: 155,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['#ShippingForm'] },
						{
							t: 'JSValueEx',
							v: [
								"(function(){\n    try {\n        if (!!window.QuantumMetricAPI) {\n            var type = window.localStorage.getItem('qm_oc_40_flow');\n            var id = type === \"Member\" ? 450 : 451;\n            window.QuantumMetricAPI.sendEvent(id, 0); \n        };\n    } catch (err) {\n        window.QuantumMetricAPI.sendEvent(418, 0, '145: ' + err.message);\n    };\n})();",
							],
						},
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: 'onlinecontract\\.myherbalife\\.com/olc4/',
				i: 157,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['#PaymentForm'] },
						{
							t: 'JSValueEx',
							v: [
								"(function(){\n    try {\n        if (!!window.QuantumMetricAPI &&  !!window._AnalyticsFacts_) {\n            var el = !!document.querySelector('.order-summary div:last-child span:first-child') ? document.querySelector('.order-summary div:last-child span:first-child') : document.querySelector('#estimate div:last-child span:first-child'); \n            var total = el.innerText.replace(',', '.').replace(/[^\\d.-]/g, '');\n            var curr = Math.round(window.QuantumMetricAPI.currencyConvertFromToValue(total, window._AnalyticsFacts_.CurrencyCode, \"USD\"))*100;\n            window.localStorage.setItem('qm_oc_total', curr);\n            var type = window.localStorage.getItem('qm_oc_40_flow');\n            var id = type === \"Member\" ? 452 : 453;\n            window.QuantumMetricAPI.sendEvent(id, 0); \n        };\n    } catch (err) {\n        window.QuantumMetricAPI.sendEvent(418, 0, '157: ' + err.message);\n    };\n})();",
							],
						},
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: '/account/membershiptype|/Profile',
				i: 159,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{
									t: 'Matches',
									v: [
										'#chooseProgram a[href="https://us.onlinecontract.myherbalife.com/olc4/Contract/BasicInfo/Member"],#chooseProgram a#choice-1,#chooseProgram a[href="https://us.onlinecontract.myherbalife.com/olc4/Contract/BasicInfo/Distributor"],#chooseProgram a#choice-2,#chooseProgram a[href="https://us.onlinecontract.myherbalife.com/olc4/Contract/BasicInfo/Member"] *,#chooseProgram a#choice-1 *,#chooseProgram a[href="https://us.onlinecontract.myherbalife.com/olc4/Contract/BasicInfo/Distributor"] *,#chooseProgram a#choice-2 *',
									],
								},
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"(function(){    if(!!QuantumMetricAPI.lastClicked){        var memberType = QuantumMetricAPI.lastClicked.closest('a').href.split('/');        return memberType[memberType.length-1];    } })();",
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: 'onlinecontract\\.myherbalife\\.com/olc4/Contract/',
				i: 161,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['form#CustomSurveyOptionsForm'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: 'onlinecontract\\.myherbalife\\.com',
				i: 162,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['div#headernumbers img[src*="numbers-1-on"]'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: 'onlinecontract\\.myherbalife\\.com',
				i: 163,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['div#headernumbers img[src*="numbers-2-on"]'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: 'onlinecontract\\.myherbalife\\.com',
				i: 164,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['div#headernumbers img[src*="numbers-3-on"]'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: 'onlinecontract\\.myherbalife\\.com',
				i: 165,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['div#headernumbers img[src*="numbers-4-on"]'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: '\\.onlinecontract\\.myherbalife\\.com',
				i: 166,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['div#headernumbers img[src*="numbers-5-on"]'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: '/account/membershiptype/|/Profile',
				i: 167,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{
									t: 'Matches',
									v: [
										'#chooseProgram a[href="https://us.onlinecontract.myherbalife.com/olc4/Contract/BasicInfo/Member"],#chooseProgram a[href="https://us.onlinecontract.myherbalife.com/olc4/Contract/BasicInfo/Distributor"],#chooseProgram a#choice-1,#chooseProgram a#choice-2,#chooseProgram a[href="https://us.onlinecontract.myherbalife.com/olc4/Contract/BasicInfo/Member"] *,#chooseProgram a[href="https://us.onlinecontract.myherbalife.com/olc4/Contract/BasicInfo/Distributor"] *,#chooseProgram a#choice-1 *,#chooseProgram a#choice-2 *',
									],
								},
							],
						},
						{
							t: 'JSValueEx',
							v: [
								'(function() {     if (!!QuantumMetricAPI.lastClicked) {         let tag = QuantumMetricAPI.lastClicked.closest(\'a\');         let memberType;          if (!!tag && tag.href.includes(\'/Member\') || tag.id === "choice-1") {             memberType = "Member"         } else if (!!tag && tag.href.includes(\'/Distributor\') || tag.id === "choice-2") {             memberType = "Distributor"         } else {             memberType = "Undefined";         };          return memberType;     } })();',
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: 'onlinecontract\\.myherbalife\\.com',
				i: 168,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['section.container.content2.step3 section#confirmation'] },
						{ t: 'SelectorText', v: ['section.container.content2.step3 section#confirmation div.newDistributor label'] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: 'onlinecontract\\.myherbalife\\.com',
				i: 169,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['#welcome:not(.hide)'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: '\\.goherbalife\\.com',
				i: 171,
				m: 0,
				s: 0,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'JSValue',
							v: [
								'if (window.location.href.indexOf("zuswstage") < 0 && window.location.href.indexOf("/ru-RU/") < 0 && window.location.href.indexOf("/uk-UA/") < 0 && window.location.href.indexOf("zuswqa") < 0) {   !!window._AnalyticsFacts_ && !!window._AnalyticsFacts_.SiteName && window._AnalyticsFacts_.SiteName != window.location.hostname.split(".goherbalife")[0] } else {   false }',
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '/account/reinstatedistributor_ds\\.html|/account/ReinstateDistributor_DS\\.html|/account/reinstatePreferredmember_PM\\.html|/account/reinstatepreferredmember_PM\\.html|/account/reinstatedistributor\\.html|/account/reinstatepreferredmember\\.html|/account/reinstateDistributor\\.html|/account/ReinstatePreferredMember_PM\\.html|/account/ReinstateDistributor\\.html',
				i: 172,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{ t: 'JSValueEx', v: ["document.querySelector('main.landing-reinstament>.wrapper>.table>.column-one>.elements>a').id.split('Reinstate').pop()"] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: '/account/Reinstatement_FAQs_copy\\.html|/account/Reinstatement_FAQs\\.html',
				i: 173,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{ t: 'JSValueEx', v: ['!!window.location.href && window.location.href'] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: '/rein/reinstatement/sponsorassignation',
				i: 174,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{ t: 'JSValueEx', v: ['if (!!QuantumMetricAPI.getPrevEventData(172)) { \twindow.Date.now() - QuantumMetricAPI.getPrevEventData(172).timeStamp }'] },
					],
				},
				x: 'QCC',
				evalAlways: true,
				sessionInfoReq: true,
			},
			{
				u: '/rein/Reinstatement/Agreements',
				i: 175,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{ t: 'JSValueEx', v: ['if (!!QuantumMetricAPI.getPrevEventData(174)) { \twindow.Date.now() - QuantumMetricAPI.getPrevEventData(174).timeStamp }'] },
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
			},
			{
				u: '/rein/Reinstatement/ContactInfo',
				i: 176,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{ t: 'JSValueEx', v: ['if (!!QuantumMetricAPI.getPrevEventData(175)) { \twindow.Date.now() - QuantumMetricAPI.getPrevEventData(175).timeStamp }'] },
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
			},
			{
				u: 'rein/Reinstatement/Confirmation',
				i: 178,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{ t: 'JSValueEx', v: ['if (!!QuantumMetricAPI.getPrevEventData(194)) { \twindow.Date.now() - QuantumMetricAPI.getPrevEventData(194).timeStamp }'] },
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
			},
			{
				u: '/olc4/Conversion/Confirmation|/olc4/Contract/Payment',
				i: 181,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['#congratsHeader'] },
						{
							t: 'JSValueEx',
							v: [
								"(function(){\n    try {\n        if (!!window.QuantumMetricAPI) {\n            var total = window.localStorage.getItem('qm_oc_total');\n            if (!!total) window.QuantumMetricAPI.sendEvent(438, 0, total); \n            var type = window.localStorage.getItem('qm_oc_40_flow');\n            var id = type === \"Member\" ? 454 : 455;\n            if (!!type) window.QuantumMetricAPI.sendEvent(id, 0, total); \n            return document.querySelector('h3').innerText;\n        };\n    } catch (err) {\n        window.QuantumMetricAPI.sendEvent(418, 0, '181: ' + err.message);\n    };\n})();",
							],
						},
					],
				},
				x: 'QCC',
			},
			{
				u: '/account/membershiptype/|/Profile',
				i: 182,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{
									t: 'Matches',
									v: [
										'#chooseProgram a[href="https://us.onlinecontract.myherbalife.com/olc4/Contract/BasicInfo/Member"],#chooseProgram a[href="https://us.onlinecontract.myherbalife.com/olc4/Contract/BasicInfo/Distributor"],#chooseProgram a#choice-1,#chooseProgram a#choice-2,#chooseProgram a[href="https://us.onlinecontract.myherbalife.com/olc4/Contract/BasicInfo/Member"] *,#chooseProgram a[href="https://us.onlinecontract.myherbalife.com/olc4/Contract/BasicInfo/Distributor"] *,#chooseProgram a#choice-1 *,#chooseProgram a#choice-2 *',
									],
								},
							],
						},
						{
							t: 'JSValueEx',
							v: [
								'(function(){if(!!QuantumMetricAPI.lastClicked){if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector} if(!Element.prototype.closest){Element.prototype.closest=function(s){var el=this;do{if(el.matches(s))return el;el=el.parentElement||el.parentNode}while(el!==null&&el.nodeType===1);return null}} var tag=QuantumMetricAPI.lastClicked.closest(\'a\');var memberType;if(!!tag&&tag.href.includes(\'/Member\')||tag.id==="choice-1"){memberType="Member"}else if(!!tag&&tag.href.includes(\'/Distributor\')||tag.id==="choice-2"){memberType="Distributor"}else{memberType="Undefined"};return memberType}})()',
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: '/hpms/PaymentInfo/',
				i: 183,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['!!document.referrer && document.referrer.indexOf("/ContactInfo") > -1'] },
						{ t: 'JSValue', v: ['window.location.href.split("ReferenceId=OLR-")[1].split("&")[0]'] },
					],
				},
				x: 'QJS',
				evalAlways: true,
				sessionInfoReq: true,
			},
			{
				u: '/Account/Overview/Ds|/Account/mb/Points|/account/ds/overview|/bizworks/accountoverview\\.aspx',
				i: 184,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.bottomActBtns>.btnForward,.notification-info>a,.bottomActBtns>.btnForward *,.notification-info>a *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
				sessionInfoReq: true,
			},
			{
				u: '/rein/ErrorMessage/Show|/rein/reinstatement/Failed',
				i: 187,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{
							t: 'JSValueEx',
							v: [
								"var ret;  (!!document.querySelector('.content>p') && !!document.querySelector('.content>p').innerText) ?  ret = !!document.querySelector('.content>p').innerText :  (!!document.querySelector('.olc-form>h4') && document.querySelector('.olc-form>h4').innerText) ?  ret = document.querySelector('.olc-form>h4').innerText : ret",
							],
						},
					],
				},
				x: 'QCC',
			},
			{ u: '/pages/accessdenied_reinstatement\\.html', i: 188, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{
				u: '/account/reinstatedistributor_ds\\.html|/account/ReinstateDistributor_DS\\.html|/account/reinstatePreferredmember_PM\\.html|/account/reinstatepreferredmember_PM\\.html|/account/reinstatedistributor\\.html|/account/reinstatepreferredmember\\.html|/account/reinstateDistributor\\.html|/account/ReinstatePreferredMember_PM\\.html',
				i: 189,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['div.convertion-block>a.btn,div.convertion-block>a.btn *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/account/reinstatedistributor_ds\\.html|/account/ReinstateDistributor_DS\\.html|/account/reinstatePreferredmember_PM\\.html|/account/reinstatepreferredmember_PM\\.html|/account/reinstatedistributor\\.html|/account/reinstatepreferredmember\\.html|/account/reinstateDistributor\\.html|/account/ReinstatePreferredMember_PM\\.html|/account/ReinstateDistributor\\.html',
				i: 190,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{
							t: 'JSValueEx',
							v: [
								"(function () {         if (!document.querySelector('div.convertion-block>a.btn')) {             window.localStorage.setItem('conversion', false);         }         else if (!!document.querySelector('div.convertion-block>a.btn') && !('HLmembership' in localStorage)) {             var a = document.querySelector('main.landing-reinstament>.wrapper>.hero-banner').innerText.toLowerCase();             window.localStorage.setItem('HLmembership', a);         }         return document.querySelector('main.landing-reinstament>.wrapper>.table>.column-one>.elements>a').id.split('Reinstate').pop();     })()",
							],
						},
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: 'rein/Reinstatement/Confirmation',
				i: 191,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{
							t: 'JSValueEx',
							v: [
								"(function () {         var ret = null;         if (!!window.localStorage.getItem('HLmembership')) {             var a = window.localStorage.getItem('HLmembership');             var b = document.querySelector('tbody.set-all>tr>td:nth-of-type(2)').innerText.toLowerCase();             if (a.indexOf(b) > -1) {                 ret = 'no conversion';             }             else {                 ret = 'conversion' + \" | \" + \"to \" + b;             }           } else if (!!window.localStorage.getItem('conversion')) {             ret = 'no conversion';         }         return ret;     })()",
							],
						},
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
			},
			{ u: '/pages/account/reinstatement_maintenance\\.html', i: 192, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE', sessionInfoReq: true },
			{
				u: '/rein/Reinstatement/GoldStandars',
				i: 193,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{ t: 'JSValueEx', v: ['if (!!QuantumMetricAPI.getPrevEventData(174)) { \twindow.Date.now() - QuantumMetricAPI.getPrevEventData(174).timeStamp }'] },
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
			},
			{
				u: '/hpms/PaymentInfo/',
				i: 194,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['!!document.referrer && document.referrer.indexOf("/ContactInfo") > -1'] },
						{ t: 'JSValue', v: ['if (!!QuantumMetricAPI.getPrevEventData(176)) { \twindow.Date.now() - QuantumMetricAPI.getPrevEventData(176).timeStamp }'] },
					],
				},
				x: 'QJS',
				evalAlways: true,
				sessionInfoReq: true,
			},
			{
				u: '/rein/Reinstatement/Agreements',
				i: 195,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{ t: 'JSValueEx', v: ['if (!!QuantumMetricAPI.getPrevEventData(193)) { \twindow.Date.now() - QuantumMetricAPI.getPrevEventData(193).timeStamp }'] },
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
			},
			{
				u: '.*',
				i: 196,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{
									t: 'Matches',
									v: [
										'#ctl00_ctl00_ContentArea_ProductsContent_ctl00_DynamicButton2,#ctl00_ctl00_ContentArea_ProductsContent_ctl00_CheckoutButton,#ctl00_ctl00_ContentArea_ProductsContent_CheckoutButton,#ctl00_ctl00_ContentArea_ProductsContent_AddToCart,#ctl00_ctl00_ContentArea_ProductsContent_CheckoutButton1,#ctl00_ctl00_ContentArea_ProductsContent_CheckoutButton2,#ctl00_ctl00_ContentArea_ctl04_CntrlProductDetail_ctl01_DynamicButton2,#ctl00_ctl00_ContentArea_ctl04_CntrlProductDetail_ctl01_CheckoutButton,a[name*="addCart"][onclick="DisableAddtoCart();"],#ctl00_ctl00_ContentArea_ProductsContent_ctl00_DynamicButton2 *,#ctl00_ctl00_ContentArea_ProductsContent_ctl00_CheckoutButton *,#ctl00_ctl00_ContentArea_ProductsContent_CheckoutButton *,#ctl00_ctl00_ContentArea_ProductsContent_AddToCart *,#ctl00_ctl00_ContentArea_ProductsContent_CheckoutButton1 *,#ctl00_ctl00_ContentArea_ProductsContent_CheckoutButton2 *,#ctl00_ctl00_ContentArea_ctl04_CntrlProductDetail_ctl01_DynamicButton2 *,#ctl00_ctl00_ContentArea_ctl04_CntrlProductDetail_ctl01_CheckoutButton *,a[name*="addCart"][onclick="DisableAddtoCart();"] *',
									],
								},
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '(Ordering|ordering)\\/(ShoppingCart|Shoppingcart)\\.aspx',
				i: 197,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{ t: 'JSValueEx', v: ['try{Date.now() - QuantumMetricAPI.getPrevEventData(196).timeStamp}catch(err){null}'] },
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
			},
			{
				u: 'Ordering/Checkout\\.aspx',
				i: 198,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{ t: 'JSValueEx', v: ['try{Date.now() - QuantumMetricAPI.getPrevEventData(197).timeStamp}catch(err){null}'] },
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
			},
			{
				u: 'Ordering/Checkout\\.aspx',
				i: 199,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['a.forward[name="checkoutButton"],a.forward[name="checkoutButton"] *'] },
							],
						},
						{ t: 'JSValueEx', v: ['try{Date.now() - QuantumMetricAPI.getPrevEventData(198).timeStamp}catch(err){null}'] },
					],
				},
				x: 'QCE',
			},
			{
				u: 'Ordering/Confirm\\.aspx',
				i: 200,
				m: 0,
				s: 1,
				f: 1,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{
							t: 'CV',
							v: [
								{
									t: 'JSValueEx',
									v: [
										" try{document.querySelector('#ctl00_ctl00_ContentArea_ProductsContent_ctl30_lblGrandTotal').innerHTML.replace(\"&nbsp;\", '')}catch(err){0}",
									],
								},
								{ t: 'JSValueEx', v: ["window._AnalyticsFacts_ && window._AnalyticsFacts_.CurrencyCode ? window._AnalyticsFacts_.CurrencyCode : 'USD'"] },
							],
						},
					],
				},
				x: 'QCC',
			},
			{
				u: 'Ordering/Checkout\\.aspx',
				i: 201,
				m: 0,
				s: 1,
				f: 64,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{
							t: 'CV',
							v: [
								{
									t: 'JSValueEx',
									v: [
										"try{document.querySelector('#ctl00_ctl00_ContentArea_ProductsContent_ctl11_txtGrandTotal').innerHTML.replace(\"&nbsp;\", '')}catch(err){0}",
									],
								},
								{ t: 'JSValueEx', v: ["window._AnalyticsFacts_ && window._AnalyticsFacts_.CurrencyCode ? window._AnalyticsFacts_.CurrencyCode : 'USD'"] },
							],
						},
					],
				},
				x: 'QCC',
			},
			{
				u: '.*',
				i: 203,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'JSONPath',
							v: [
								'Id',
								{
									t: 'XHRResponse',
									v: [
										'(https|http)\\:\\/\\/www\\.myherbalife\\.com\\/.*/Shop\\/Cart\\/Api\\/ActiveCart\\/V1\\?OrderCategory\\=RSO\\&BrowseScheme\\=Ds\\&clearExistingItems\\=false',
									],
								},
							],
						},
						{
							t: 'JSONPath',
							v: [
								'',
								{
									t: 'XHRResponse',
									v: [
										'(https|http)\\:\\/\\/www\\.myherbalife\\.com\\/.*/Shop\\/Cart\\/Api\\/ActiveCart\\/V1\\?OrderCategory\\=RSO\\&BrowseScheme\\=Ds\\&clearExistingItems\\=false',
									],
								},
							],
						},
					],
				},
				x: 'QXJ',
			},
			{
				u: 'Shop/Cart/Checkout/Index',
				i: 204,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{ t: 'JSValueEx', v: ['try{Date.now() - QuantumMetricAPI.getPrevEventData(45).timeStamp}catch(err){null}'] },
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
			},
			{
				u: 'Shop/Cart/Checkout/Index',
				i: 205,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['a#btn-continue-checkout,a#btn-continue-checkout *'] },
							],
						},
						{ t: 'JSValueEx', v: ['try{Date.now() - QuantumMetricAPI.getPrevEventData(204).timeStamp}catch(err){null}'] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/hpms/PaymentInfo/Index',
				i: 206,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{ t: 'JSValueEx', v: ['try{Date.now() - QuantumMetricAPI.getPrevEventData(205).timeStamp}catch(err){null}'] },
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
			},
			{
				u: 'hpms/PaymentInfo/Index',
				i: 207,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['a.btn-checkout-full,a.btn-checkout-full *'] },
							],
						},
						{ t: 'JSValueEx', v: ['try{Date.now() - QuantumMetricAPI.getPrevEventData(206).timeStamp}catch(err){null}'] },
					],
				},
				x: 'QCE',
			},
			{
				u: '^https:\\/\\/([A-z]{2,4}\\.|)accounts\\.myherbalife\\.com|\\.com(\\/|)$|\\/Logout',
				i: 208,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{
							t: 'JSValueEx',
							v: [
								"if ((typeof window.loadScript !== 'undefined' && (typeof window.LeftNavViewModel === 'undefined' || typeof window.SearchViewModel === 'undefined' || typeof window.NotificationsPrevViewModel === 'undefined')) || (!!window.location.href && (!!window.location.href.match(/:\\/\\/[A-z]{2,5}\\.myherbalife\\.com|\\/Ordering\\/|\\.aspx$/) && !window.location.href.match(/myherbalife\\.com\\/[A-z]{2,4}-[A-Z]{2,5}\\/|\\/Shop\\/|\\.asp$/)))) { 'green' } else { 'black' };",
							],
						},
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
			},
			{
				u: '/Receipts/Invoice/Create',
				i: 210,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#modal-select-receipt-type li,#modal-select-receipt-type li *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"QuantumMetricAPI.lastClicked.closest('#modal-select-receipt-type li').getAttribute(\"data-bind\").split('css')[1].split('Disable')[1].split('}')[0]",
							],
						},
					],
				},
				x: 'QCE',
			},
			{ u: '/nc/operations/clubsetup', i: 211, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE', evalAlways: true, sessionInfoReq: true },
			{
				u: '/nc/operations/consumptions',
				i: 213,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.btn.white-btn.consump-create-btn,.btn.white-btn.consump-create-btn *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
				sessionInfoReq: true,
			},
			{
				u: '/nc/operations/',
				i: 214,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.btn.white-btn.import-consump,.btn.white-btn.import-consump *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
				sessionInfoReq: true,
			},
			{
				u: '/nc/operations/',
				i: 220,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['button.navbar-toggler,button.navbar-toggler *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
				sessionInfoReq: true,
			},
			{
				u: '/nc/operations/',
				i: 226,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['span.input-error:not([hidden]):not(:empty)'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
				evalAlways: true,
				sessionInfoReq: true,
			},
			{
				u: 'Shop/Cart/Checkout/Index',
				i: 227,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['a#btn-continue-checkout,a#btn-continue-checkout *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"!window.sessionStorage.qE ? window.sessionStorage.qE = '': null ; window.sessionStorage.qE += 'id:227,conv:0,val:,ts:'+Date.now().toString()+';'; null;",
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/',
				i: 228,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['div.toast.toast-error'] },
						{ t: 'JSValueEx', v: ["document.querySelector('div.toast.toast-error').innerText"] },
					],
				},
				x: 'QCC',
				evalAlways: true,
				sessionInfoReq: true,
			},
			{
				u: 'hpms/PaymentInfo/Index',
				i: 229,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['a.btn-checkout-full,a.btn-checkout-full *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"!window.sessionStorage.qE ? window.sessionStorage.qE = '': null ; window.sessionStorage.qE += 'id:229,conv:0,val:,ts:'+Date.now().toString()+';'; null;",
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: 'myherbalife\\.com',
				i: 230,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{
									t: 'Matches',
									v: [
										'#btn-go-checkout,#btn-catalog-go-checkout,[name="CheckoutButton"],#btn-go-checkout *,#btn-catalog-go-checkout *,[name="CheckoutButton"] *',
									],
								},
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"!window.sessionStorage.qE ? window.sessionStorage.qE = '': null ; window.sessionStorage.qE += 'id:230,conv:0,val:,ts:'+Date.now().toString()+';'; null;",
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: '/operations/consumptions/create/1',
				i: 234,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{
									t: 'Matches',
									v: [
										'#type-aloe-container,#type-tea-container,#type-shake-container,#type-other-container,#type-aloe-container *,#type-tea-container *,#type-shake-container *,#type-other-container *',
									],
								},
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var lastClicked=QuantumMetricAPI.lastClicked.closest('div');var type=lastClicked.children[0].innerText;return type}}catch(err){}})()",
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: '/operations/consumptions/create/2',
				i: 236,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.create-consump-next-btn,.create-consump-next-btn *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/operations/consumptions/create/4',
				i: 237,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.create-consump-next-btn,.create-consump-next-btn *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/operations/consumptions/create/5',
				i: 238,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.create-consump-next-btn,.create-consump-next-btn *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/operations/consumptions/create/6',
				i: 239,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.create-consump-complete-btn,.create-consump-complete-btn *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '\\.*',
				i: 240,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{
							t: 'JSValueEx',
							v: [
								'(function(){try{var location=window.location.href;var hash=location.indexOf(\'#\')>-1?("Hash: "+location):"No Hash";return hash}catch(err){}})()',
							],
						},
					],
				},
				x: 'QCC',
			},
			{ u: '/nc/operations/menu/items/create/landing', i: 241, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE', evalAlways: true },
			{
				u: '/nc/operations/menu/items/create/landing',
				i: 242,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#img-upload-input,.insert-btn,#img-upload-input *,.insert-btn *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/menu/items/create/landing',
				i: 243,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.ingredient-container button,.ingredient-container button *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '\\/nc\\/operations\\/consumptions\\/create\\/5$',
				i: 244,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
			},
			{
				u: '/nc/operations/menu/items/create/landing',
				i: 245,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSONPath', v: ['message', { t: 'XHRResponse', v: ['/nc/core/api/CreateConsumptionPlan'] }] },
						{
							t: 'JSValueEx',
							v: [
								"(function(){\n    try {\n        if (!!window.QuantumMetricAPI && !!window.QuantumMetricAPI.lastXHR) {\n            var req = JSON.parse(QuantumMetricAPI.lastXHR.qrequest);\n\n            req.categories.forEach(function(c) {\n                window.QuantumMetricAPI.sendEvent(474, 0, c);\n            });\n\n            var hlCount = 0;\n            var nhlCount = 0;\n\n            req.consumptionItems.forEach(function(c) {\n                if (c.isHLItem === true) {\n                    window.QuantumMetricAPI.sendEvent(475, 0, c.name);\n                    hlCount += 1;\n                } else {\n                    window.QuantumMetricAPI.sendEvent(476, 0, c.name);\n                    nhlCount += 1;\n                }\n            });\n\n            var taxType = document.querySelector('.radio-selections input:checked+div');\n\n            if (!!taxType) window.QuantumMetricAPI.sendEvent(480, 0, taxType.textContent);\n            window.QuantumMetricAPI.sendEvent(477, 0, req.consumptionItems.length);\n            window.QuantumMetricAPI.sendEvent(478, 0, hlCount);\n            window.QuantumMetricAPI.sendEvent(479, 0, nhlCount);\n        };\n    } catch (err) {}\n})();",
							],
						},
					],
				},
				x: 'QXJ',
			},
			{
				u: '/nc/operations',
				i: 246,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.consumption-container'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: '/operations/manage/operators',
				i: 247,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ["!!document.querySelector('.slide-menu-container')"] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
				evalAlways: true,
			},
			{ u: '\\/operations\\/clubmodel(\\/?)+$', i: 248, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE', evalAlways: true },
			{
				u: '/nc/operations/payments/types',
				i: 249,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.actual-step'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
			},
			{
				u: '/nc/operations/setuptax',
				i: 250,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.actual-step'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
			},
			{ u: '/operations/receipts', i: 251, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE', evalAlways: true },
			{
				u: '/operations/clubsetup',
				i: 252,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.progress-congrats'] },
						{
							t: 'JSValueEx',
							v: ['(function(){if(!!QuantumMetricAPI.getPrevEventData(246)){return window.Date.now()-QuantumMetricAPI.getPrevEventData(246).timeStamp}})()'],
						},
					],
				},
				x: 'QCC',
			},
			{
				u: '/nc/operations',
				i: 253,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.btn.outside-notch.slide-menu,.btn.outside-notch.slide-menu *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations',
				i: 254,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.bm-item-list .progress-active-step,.bm-item-list .progress-active-step *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"(function(){try{if(!!QuantumMetricAPI.lastClicked){var lastClicked=QuantumMetricAPI.lastClicked.closest('a');return lastClicked.innerText}}catch(err){}})()",
							],
						},
					],
				},
				x: 'QCE',
				excludeBlank: true,
			},
			{
				u: '/nc/operations',
				i: 255,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.get-started,.get-started *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '.*',
				i: 256,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['div.menu .row,div.settings .row.setting-menu,div.menu .row *,div.settings .row.setting-menu *'] },
							],
						},
						{ t: 'JSValueEx', v: ["window.QuantumMetricAPI.lastClicked.closest('.row').innerText"] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/',
				i: 258,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.btn.white-btn.consump-combo-create-btn.consump-btns,.btn.white-btn.consump-combo-create-btn.consump-btns *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{ u: '/nc/operations/payments', i: 259, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{
				u: '/nc/operations/payments',
				i: 260,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.select-card,.select-card *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var parent=QuantumMetricAPI.lastClicked.closest('.payment-card');var site=parent.querySelector('.payment-site');return site.href}}catch(err){}})()",
							],
						},
					],
				},
				x: 'QCE',
			},
			{ u: '/nc/operations/payments/setup/1', i: 261, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{
				u: '/nc/operations/payments/setup/1',
				i: 262,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['input[type="checkbox"],input[type="checkbox"] *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/payments/setup/1',
				i: 263,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#paymentFooterButton,#paymentFooterButton *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{ u: '/nc/operations/reports/sales', i: 264, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{ u: '/nc/operations/reports/customers', i: 265, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{ u: '/nc/operations/reports/volume', i: 266, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{
				u: '/nc/operations/reports/sales',
				i: 267,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.export-dropdown #dropdownMenuButton,.export-dropdown #dropdownMenuButton *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/reports/sales',
				i: 268,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.export-dropdown .dropdown-item,.export-dropdown .dropdown-item *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								'(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var lastClicked=QuantumMetricAPI.lastClicked;return lastClicked.innerText}}catch(err){}})()',
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/reports/sales',
				i: 269,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.filter-by-section .dropdown-item,.filter-by-section .dropdown-item *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								'(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var lastClicked=QuantumMetricAPI.lastClicked;return lastClicked.innerText}}catch(err){}})()',
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/reports/sales',
				i: 270,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.report-three-boxes .card1,.report-three-boxes .card1 *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var parent=QuantumMetricAPI.lastClicked.closest('.card1');return parent.querySelector('.card-name').innerText}}catch(err){}})()",
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: '.*',
				i: 271,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.btn.white-btn.consump-create-btn.consump-btns,.btn.white-btn.consump-create-btn.consump-btns *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
				sessionInfoReq: true,
			},
			{
				u: '/operations/clubmodel',
				i: 272,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.create-model,.create-model *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/operations/clubmodel/create/1',
				i: 273,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.vp-container button,.vp-container button *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"(function(){try{if(!!QuantumMetricAPI.lastClicked){var button=QuantumMetricAPI.lastClicked;var type=button.querySelector('span').innerText;return type}}catch(err){}})()",
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: '/operations/clubmodel/create/1',
				i: 274,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.pay-container button,.pay-container button *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"(function(){try{if(!!QuantumMetricAPI.lastClicked){var button=QuantumMetricAPI.lastClicked;var type=button.querySelector('span').innerText;return type}}catch(err){}})()",
							],
						},
					],
				},
				x: 'QCE',
			},
			{ u: '/operations/clubmodel/create/1', i: 275, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{
				u: '/operations/clubmodel/create/1',
				i: 276,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.complete-btn,.complete-btn *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{ u: '/operations/clubmodel/create/2', i: 277, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{
				u: '/operations/clubmodel/create/2',
				i: 278,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.btn.green-btn,.btn.green-btn *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"(function(){try{var checked=document.querySelector('input[name=\"shareradio\"]:checked + .p-success-o');return!!checked?checked.querySelector('label').innerText:''}catch(err){}})()",
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: '/operations/payments/types',
				i: 279,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.toggle .react-switch-bg,.toggle .react-switch-bg *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var parent=QuantumMetricAPI.lastClicked.closest('.row');return parent.querySelector('.text span').innerText}}catch(err){}})()",
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: '.*',
				i: 281,
				m: 1,
				s: 2,
				f: 256,
				v: {
					t: 'E',
					v: [
						{ t: 'JSONPath', v: ['email', { t: 'XHRRequest', v: ['Account/GetAccountType'] }] },
						{ t: 'JSONPath', v: ['email', { t: 'XHRRequest', v: ['Account/GetAccountType'] }] },
					],
				},
				x: 'QXJ',
			},
			{
				u: 'accounts\\.myherbalife\\.com/Account/Create',
				i: 282,
				m: 0,
				s: 1,
				f: 256,
				v: {
					t: 'E',
					v: [
						{ t: 'FieldFilledNode', v: ['#cEmail'] },
						{ t: 'SelectorText', v: ['#cEmail'] },
					],
				},
				x: 'QFL',
			},
			{
				u: 'accounts\\.myherbalife\\.com/Account/Create',
				i: 283,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'FieldFilledNode', v: ['#Password'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QFL',
			},
			{
				u: 'accounts\\.myherbalife\\.com/Account/Create',
				i: 284,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'FieldFilledNode', v: ['#cpassword'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QFL',
			},
			{
				u: 'accounts\\.myherbalife\\.com/Account/Create',
				i: 285,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['span.err'] },
						{ t: 'SelectorText', v: ['span.err'] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: 'accounts\\.myherbalife\\.com/Account/Create',
				i: 286,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['span.error[style="display: inline;"]'] },
						{ t: 'SelectorText', v: ['span.error[style="display: inline;"]'] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: '.*',
				i: 287,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{
									t: 'Matches',
									v: ['div#optanon-popup-body input.optanon-status[id="116617"][checked],div#optanon-popup-body input.optanon-status[id="116617"][checked] *'],
								},
							],
						},
						{ t: 'JSValueEx', v: ['if (!!window._AnalyticsFacts_ && !!(window._AnalyticsFacts_.Id)){     window._AnalyticsFacts_.Id }'] },
					],
				},
				x: 'QCE',
			},
			{
				u: 'myherbalife\\.com',
				i: 288,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.myhl-login .btnForward,.myhl-login .btnForward *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '.*',
				i: 289,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{
									t: 'Matches',
									v: ['div#optanon-popup-body input.optanon-status[id="116619"][checked],div#optanon-popup-body input.optanon-status[id="116619"][checked] *'],
								},
							],
						},
						{ t: 'JSValueEx', v: ['if (!!window._AnalyticsFacts_ && !!(window._AnalyticsFacts_.Id)){     window._AnalyticsFacts_.Id }'] },
					],
				},
				x: 'QCE',
			},
			{ u: '/nc/operations/manage/operators', i: 290, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{
				u: '/nc/operations/manage/operators',
				i: 291,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.mo-add-button,.mo-add-button *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/manage/operators',
				i: 292,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.manage-operator-save-btn,.manage-operator-save-btn *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/manage/operators',
				i: 293,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.fa-sync-alt,.fa-sync-alt *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/manage/operators',
				i: 294,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.operator-select-button-group .btn,.operator-select-button-group .btn *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								'(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var lastClicked=QuantumMetricAPI.lastClicked;return lastClicked.innerText}}catch(err){}})()',
							],
						},
					],
				},
				x: 'QCE',
			},
			{ u: '/nc/operations/manage/employee', i: 295, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{
				u: '/nc/operations/manage/employee',
				i: 296,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.manage-operator-save-btn,.manage-operator-save-btn *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/manage/employee',
				i: 297,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'JSValueEx',
							v: [
								"(function(){try{var errors=document.querySelectorAll('.input-error');for(var i=0;i<errors.length;i++){if(!errors[i].hidden){return!0}}}catch(err){}})()",
							],
						},
						{
							t: 'JSValueEx',
							v: [
								'(function(){try{var errors=document.querySelectorAll(\'.input-error\');var string;for(var i=0;i<errors.length;i++){if(!errors[i].hidden){if(!string){string=errors[i].innerText}else{string+=" | "+errors[i].innerText}}};return string}catch(err){}})()',
							],
						},
					],
				},
				x: 'QJS',
			},
			{
				u: '/nc/operations/manage/operators',
				i: 298,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.btn.green-btn.loading-btn,.btn.green-btn.loading-btn *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/manage/operators',
				i: 299,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'FieldFilledNode', v: ['.DSID-input input'] },
						{ t: 'SelectorText', v: ['.DSID-input input'] },
					],
				},
				x: 'QFL',
			},
			{
				u: '/nc/operations/manage/operators',
				i: 300,
				m: 1,
				s: 2,
				f: 256,
				v: {
					t: 'E',
					v: [
						{ t: 'FieldFilledNode', v: ['.lname-input input'] },
						{ t: 'SelectorText', v: ['.lname-input input'] },
					],
				},
				x: 'QFL',
			},
			{
				u: '/nc/operations/manage/operators',
				i: 301,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.popup-error-msg'] },
						{ t: 'JSValueEx', v: ["(function(){try{return document.querySelector('.popup-error-msg span').innerText}catch(err){}})()"] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: '/nc/operations/manage/employee',
				i: 302,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'JSONPathValue',
							v: ['message', 'Successfully saved club operator profile', { t: 'XHRResponse', v: ['nc\\/core\\/api\\/SaveClubOperatorProfile'] }],
						},
						{ t: 'JSONPath', v: ['operatorRoleType', { t: 'XHRRequest', v: ['/nc/core/api/SaveClubOperatorProfile'] }] },
					],
				},
				x: 'QXJ',
			},
			{
				u: '/nc/operations/dashboard',
				i: 303,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.club-profile,.club-profile *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/clubprofile',
				i: 304,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{ t: 'JSValueEx', v: ['(function(){try{return document.referrer}catch(err){}})()'] },
					],
				},
				x: 'QCC',
			},
			{
				u: '/nc/operations/clubprofile',
				i: 305,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.profile-photos button,.profile-photos button *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/clubprofile',
				i: 306,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.custom-file.img-upload input,.custom-file.img-upload input *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/clubprofile',
				i: 307,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['button.brand-target,button.brand-target *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/reports/customers',
				i: 309,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.export-dropdown .dropdown-item,.export-dropdown .dropdown-item *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								'(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var lastClicked=QuantumMetricAPI.lastClicked;return lastClicked.innerText}}catch(err){}})()',
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/reports/volume',
				i: 310,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.export-dropdown .dropdown-item,.export-dropdown .dropdown-item *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								'(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var lastClicked=QuantumMetricAPI.lastClicked;return lastClicked.innerText}}catch(err){}})()',
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/reports/volume',
				i: 311,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.sales-total .dropdown-item,.sales-total .dropdown-item *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								'(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var lastClicked=QuantumMetricAPI.lastClicked;return lastClicked.innerText}}catch(err){}})()',
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/reports/customers',
				i: 312,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.sales-total .dropdown-item,.sales-total .dropdown-item *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								'(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var lastClicked=QuantumMetricAPI.lastClicked;return lastClicked.innerText}}catch(err){}})()',
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: 'accounts\\.myherbalife\\.com/Account/Create',
				i: 313,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['#dsinfo-form[style*="display: block;"]'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: 'accounts\\.myherbalife\\.com/Account/Create',
				i: 314,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'FieldFilledNode', v: ['#memberId'] },
						{ t: 'SelectorText', v: ['#memberId'] },
					],
				},
				x: 'QFL',
			},
			{
				u: 'accounts\\.myherbalife\\.com/Account/Create',
				i: 315,
				m: 1,
				s: 2,
				f: 256,
				v: {
					t: 'E',
					v: [
						{ t: 'FieldFilledNode', v: ['#pin'] },
						{ t: 'SelectorText', v: ['#pin'] },
					],
				},
				x: 'QFL',
			},
			{
				u: 'accounts\\.myherbalife\\.com/Account/Create',
				i: 316,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#verify-account,#verify-account *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: 'accounts\\.myherbalife\\.com/Account/Create',
				i: 317,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ["!document.querySelector('#verify-error:empty')"] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
				evalAlways: true,
			},
			{
				u: 'https://accounts\\.myherbalife\\.com/Account/Create',
				i: 318,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#forgot-pin,#forgot-pin *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: 'accounts\\.myherbalife\\.com/Account/Create',
				i: 319,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#back-verify,#back-verify *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{ u: 'accounts\\.myherbalife\\.com/account/securityquestions', i: 320, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{
				u: 'accounts\\.myherbalife\\.com/account/securityquestions',
				i: 321,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#submit-qa,#submit-qa *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '\\/Home\\/Default',
				i: 322,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{ t: 'JSValueEx', v: ['(function(){try{return document.referrer}catch(err){}})()'] },
					],
				},
				x: 'QCC',
			},
			{
				u: '/nc/operations/manage/employee',
				i: 323,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'FieldFilledNode', v: ['input[placeholder="Email"]'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QFL',
			},
			{
				u: '/nc/operations/manage/employee',
				i: 324,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'FieldFilledNode', v: ['.phone-mask'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QFL',
			},
			{
				u: '/nc/operations/manage/employee',
				i: 325,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'FieldFilledNode', v: ['input[placeholder*="First name"]'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QFL',
			},
			{
				u: '.*',
				i: 326,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['a[data-title*="HN MyClub"],a[data-title*="HN MyClub"] *'] },
							],
						},
						{ t: 'JSValueEx', v: ['(function(){try{return window.location.pathname}catch(err){}})()'] },
					],
				},
				x: 'QCE',
			},
			{
				u: '.*',
				i: 327,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{
									t: 'Matches',
									v: [
										'#mainSideNav a[href="https://www.myherbalife.com/nc/operations/myclubs"],#mainSideNav a[href="https://www.myherbalife.com/nc/operations/myclubs"] *',
									],
								},
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/clubprofile',
				i: 328,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#guid-container,#guid-container *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/dashboard',
				i: 329,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.dashboard-content .row .col-6.col-md-3,.dashboard-content .row .col-6.col-md-3 *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var lastClicked=QuantumMetricAPI.lastClicked.closest('.dashboard-content .row .col-6.col-md-3').querySelector('h5.basic-info-label').innerText;return lastClicked}}catch(err){}})()",
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/clubprofile',
				i: 330,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.timings span.edit-pen,.timings span.edit-pen *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/clubprofile',
				i: 331,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.edit-operation-hours .save,.edit-operation-hours .save *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/clubprofile',
				i: 332,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.club-description .edit-pen span,.club-description .edit-pen span *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/clubprofile',
				i: 333,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.club-description button.save,.club-description button.save *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/clubprofile',
				i: 334,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.club-amenities .edit-pen span,.club-amenities .edit-pen span *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/clubprofile',
				i: 335,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.club-amenities button.save,.club-amenities button.save *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/clubprofile',
				i: 336,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.address-contact .edit-pen,.address-contact .edit-pen *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/clubprofile',
				i: 337,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.address-contact .save-address,.address-contact .save-address *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/clubprofile',
				i: 338,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.edit-logo-container .save-log-btn,.edit-logo-container .save-log-btn *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/clubprofile',
				i: 339,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.btn-save-brand,.btn-save-brand *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/clubprofile',
				i: 340,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.club-photo-save,.club-photo-save *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{ u: '/nc/operations/dashboard', i: 341, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{
				u: '.*',
				i: 342,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 343,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 346,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 347,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 348,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 349,
				m: 0,
				s: 0,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '/nc/operations/consumptions',
				i: 350,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.message-info'] },
						{ t: 'SelectorText', v: ['.message-info'] },
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: '/nc/operations/consumptions',
				i: 351,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.button-import button,.button-import button *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{ u: '/nc/operations/consumptions/ImportPos', i: 352, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{
				u: '/nc/operations/consumptions/ImportPos',
				i: 353,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.button-right button,.button-right button *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								'(function(){try{var resp=JSON.parse(!!QuantumMetricAPI.lastXHR&&!!QuantumMetricAPI.lastXHR.response&&QuantumMetricAPI.lastXHR.response);return resp.data.length}catch(err){}})();',
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/consumptions/',
				i: 354,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.button-import select option,.button-import select option *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								'(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var lastClicked=QuantumMetricAPI.lastClicked;return lastClicked.innerText}}catch(err){}})();',
							],
						},
					],
				},
				x: 'QCE',
			},
			{ u: '/(C|c)ustomer(d|D)irect', i: 355, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{ u: '\\/(Receipt|receipt)\\/(Index|index)', i: 356, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{
				u: '/Shop/Catalog',
				i: 357,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#modal-order-type a.btn-select,#modal-order-type a.btn-select *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '\\/hnconnect.myherbalife.com\\/s\\/\\?',
				i: 358,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{
							t: 'JSValueEx',
							v: [
								'(function(){try{if(document.referrer===""){return"No Referrer"}else{var url=new URL(document.referrer);return url.host+url.pathname}}catch(err){}})();',
							],
						},
					],
				},
				x: 'QCC',
			},
			{
				u: 'hnconnect\\.myherbalife\\.com/s/contact-list',
				i: 359,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{
							t: 'JSValueEx',
							v: [
								'(function(){try{var referrer;if(document.referrer===""){referrer="No Referrer"}else{var url=new URL(document.referrer);referrer=url.host+url.pathname};QuantumMetricAPI.sendEvent(360,0,referrer);var description=decodeURI(window.location.search.split("pfl_listDescription=")[1].split(\'&\')[0]);return description}catch(err){}})();',
							],
						},
					],
				},
				x: 'QCC',
			},
			{
				u: '.*',
				i: 360,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: 'hnconnect\\.myherbalife\\.com/s/contact-list',
				i: 361,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['input.cb-all-contactListTable,input.cb-all-contactListTable *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: 'hnconnect\\.myherbalife\\.com/s/contact-list',
				i: 362,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#bulkActions .hrbl-dropdown.slds-dropdown  li,#bulkActions .hrbl-dropdown.slds-dropdown  li *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var item=QuantumMetricAPI.lastClicked.closest('.slds-dropdown__item');return item.querySelector('span.label-container').innerText}}catch(err){}})();",
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: 'hnconnect\\.myherbalife\\.com/s/contact-list',
				i: 363,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'FieldFilledNode', v: ['input[name="search"]'] },
						{ t: 'SelectorText', v: ['input[name="search"]'] },
					],
				},
				x: 'QFL',
			},
			{
				u: 'hnconnect\\.myherbalife\\.com/s/contact-list',
				i: 364,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.searchboxWrapper .search-background,.searchboxWrapper .search-background *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: 'hnconnect\\.myherbalife\\.com/s/contact-list',
				i: 365,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.breadcrumbs.container a,.breadcrumbs.container a *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var item=QuantumMetricAPI.lastClicked.closest('ul');return item.querySelector('a').href}}catch(err){}})();",
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: 'hnconnect\\.myherbalife\\.com/s/contact-list',
				i: 366,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['a.full-name-container,a.full-name-container *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: 'hnconnect\\.myherbalife\\.com/s/contact-list',
				i: 367,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['button.js_toggleFilterDrawer,button.js_toggleFilterDrawer *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: 'hnconnect\\.myherbalife\\.com/s/contact-list',
				i: 368,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['button[data-action="applyFilters"],button[data-action="applyFilters"] *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: 'hnconnect\\.myherbalife\\.com/s/contact-list',
				i: 369,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['th[role="gridcell"] .hrbl-dropdown li,th[role="gridcell"] .hrbl-dropdown li *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var item=QuantumMetricAPI.lastClicked.closest('li');return item.querySelector('span.label-container').innerText}}catch(err){}})();",
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: 'hnconnect\\.myherbalife\\.com/s/contact-list',
				i: 370,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.slds-hint-parent label.slds-checkbox,.slds-hint-parent label.slds-checkbox *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '.*',
				i: 371,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ["document.referrer.indexOf('/s/contact-list') > -1 && !!QuantumMetricAPI.getPrevEventData(359)"] },
						{
							t: 'JSValue',
							v: [
								'(function(){try{var delta=Date.now()-QuantumMetricAPI.getPrevEventData(359).timeStamp;var currentLocation=window.location.hostname+window.location.pathname;QuantumMetricAPI.sendEvent(372,0,currentLocation);return delta}catch(err){}})();',
							],
						},
					],
				},
				x: 'QJS',
				sessionInfoReq: true,
			},
			{
				u: '.*',
				i: 372,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 373,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ["document.referrer.indexOf('/s/?') > -1 && !!QuantumMetricAPI.getPrevEventData(358)"] },
						{
							t: 'JSValue',
							v: [
								'(function(){try{var delta=Date.now()-QuantumMetricAPI.getPrevEventData(358).timeStamp;var currentLocation=window.location.hostname+window.location.pathname;QuantumMetricAPI.sendEvent(374,0,currentLocation);return delta}catch(err){}})();',
							],
						},
					],
				},
				x: 'QJS',
				sessionInfoReq: true,
			},
			{
				u: '.*',
				i: 374,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '\\/hnconnect.myherbalife.com\\/s\\/\\?',
				i: 375,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#customers .hrbl-widget-row a,#customers .hrbl-widget-row a *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var row=QuantumMetricAPI.lastClicked.closest('.hrbl-widget-row');return row.querySelector('label').innerText}}catch(err){}})();",
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: '\\/hnconnect.myherbalife.com\\/s\\/\\?',
				i: 376,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#pmsegment .hrbl-widget-row a,#pmsegment .hrbl-widget-row a *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var row=QuantumMetricAPI.lastClicked.closest('.hrbl-widget-row');return row.querySelector('label').innerText}}catch(err){}})();",
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: '\\/hnconnect.myherbalife.com\\/s\\/\\?',
				i: 377,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#leads .hrbl-widget-row a,#leads .hrbl-widget-row a *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var row=QuantumMetricAPI.lastClicked.closest('.hrbl-widget-row');return row.querySelector('label').innerText}}catch(err){}})();",
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: '\\/hnconnect.myherbalife.com\\/s\\/\\?',
				i: 378,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#profit .label a,#profit .label a *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '\\/hnconnect.myherbalife.com\\/s\\/\\?',
				i: 379,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#profit .slds-radio_button,#profit .slds-radio_button *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var row=QuantumMetricAPI.lastClicked.closest('.slds-radio_button');return row.querySelector('label span').innerText}}catch(err){}})();",
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: '\\/hnconnect.myherbalife.com\\/s\\/\\?',
				i: 380,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#leads .hero,#leads .hero *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '\\/hnconnect.myherbalife.com\\/s\\/\\?',
				i: 381,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#leads .slds-radio_button,#leads .slds-radio_button *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var row=QuantumMetricAPI.lastClicked.closest('.slds-radio_button');return row.querySelector('label span').innerText}}catch(err){}})();",
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: '\\/hnconnect.myherbalife.com\\/s\\/\\?',
				i: 382,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#customers .slds-radio_button,#customers .slds-radio_button *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var row=QuantumMetricAPI.lastClicked.closest('.slds-radio_button');return row.querySelector('label span').innerText}}catch(err){}})();",
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: '\\/hnconnect.myherbalife.com\\/s\\/\\?',
				i: 383,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#pmsegment .slds-radio_button,#pmsegment .slds-radio_button *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"(function(){try{if(!!QuantumMetricAPI&&!!QuantumMetricAPI.lastClicked){var row=QuantumMetricAPI.lastClicked.closest('.slds-radio_button');return row.querySelector('label span').innerText}}catch(err){}})();",
							],
						},
					],
				},
				x: 'QCE',
			},
			{
				u: 'pages/BusinessEssentials/BuildingYourBusiness/MarketingPlan/marketing_plan_category\\.html',
				i: 384,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{
									t: 'Matches',
									v: [
										'[href*="/pages/BusinessEssentials/BuildingYourBusiness/MarketingPlan/herbalife_marketing_plan.html"],[href*="/pages/BusinessEssentials/BuildingYourBusiness/MarketingPlan/herbalife_marketing_plan.html"] *',
									],
								},
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: 'pages/StandAlone/congrulations-becoming-own-boss\\.html',
				i: 385,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['[href="http://hrbl.me/enUS-SMP"],[href="http://hrbl.me/enUS-SMP"] *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: 'pages/DocumentsAndPolicies/what_you_need_to_know\\.html',
				i: 386,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{
									t: 'Matches',
									v: [
										'[href="http://edge.myherbalife.com/vmba/media/6414470D-E3D0-4B24-8A9C-F48CD27BDF8C/Web/General/Original/SalesAndMarketingPlan.pdf"],[href="http://edge.myherbalife.com/vmba/media/6414470D-E3D0-4B24-8A9C-F48CD27BDF8C/Web/General/Original/SalesAndMarketingPlan.pdf"] *',
									],
								},
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/pages/BusinessEssentials/Recognition/MarketingPlanRecognition/marketing_plan_recognition_category\\.html',
				i: 387,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{
									t: 'Matches',
									v: [
										'[href="https://edge.myherbalife.com/vmba/media/41262193-316B-4851-96A9-19BC1A25F2BC/Web/General/Original/Steps_To_Success_2017.pdf"],[href="https://edge.myherbalife.com/vmba/media/41262193-316B-4851-96A9-19BC1A25F2BC/Web/General/Original/Steps_To_Success_2017.pdf"] *',
									],
								},
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '.*',
				i: 388,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '\\/(H|h)ome\\/(D|d)efault',
				i: 389,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['a[data-url="https://www.surveymonkey.com/r/78YVQ3Z"],a[data-url="https://www.surveymonkey.com/r/78YVQ3Z"] *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '.*',
				i: 390,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 391,
				m: 0,
				s: 0,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['#requalMethods'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
			},
			{
				u: 'https://www\\.myherbalife\\.com/hpms/PaymentInfo/ResponseHandler',
				i: 392,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'SelectorText', v: ['body'] },
								{ t: 'Contains', v: ['Oops!'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QPC',
			},
			{ u: '/nc/operations/menu/combos/create/landing', i: 393, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{ u: '\\/operations\\/consumptions\\/create\\/4(\\?type=combo)', i: 394, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{ u: '\\/operations\\/consumptions\\/create\\/5(\\?type=combo)', i: 395, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{
				u: '/nc/operations/menu/combos/create/landing',
				i: 396,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSONPath', v: ['message', { t: 'XHRResponse', v: ['/nc/core/api/CreateMembership'] }] },
						{ t: 'JSONPath', v: ['message', { t: 'XHRResponse', v: ['/nc/core/api/CreateMembership'] }] },
					],
				},
				x: 'QXJ',
			},
			{ u: '/nc/operations/consumptions/copy/1', i: 397, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{
				u: '\\/operations\\/consumptions(\\/?)$',
				i: 398,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#dropdownMenuButton,#dropdownMenuButton *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '.*',
				i: 400,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
				sessionInfoReq: true,
			},
			{
				u: '\\/nc\\/operations\\/club(i|I)nformation',
				i: 402,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.actual-step'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
			},
			{
				u: '/nc/operations/manage/operators',
				i: 403,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.actual-step'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
			},
			{
				u: '\\/operations\\/clubmodel(\\/?)+$',
				i: 404,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.actual-step'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
			},
			{
				u: '/nc/operations/myclubs',
				i: 405,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#setup-club-button,#setup-club-button *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: '/nc/operations/payments',
				i: 406,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.clover-status-pending'] },
						{
							t: 'JSValueEx',
							v: [
								"(function(){try{var status=document.querySelector('.clover-status-pending');var text=!!status?status.querySelector('p').textContent:'new';return text}catch(err){}})();",
							],
						},
					],
				},
				x: 'QCC',
				evalAlways: true,
			},
			{
				u: '/nc/operations/payments',
				i: 407,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.payment-card-tile-clover #Login,.payment-card-tile-clover #Login *'] },
							],
						},
						{ t: 'JSValueEx', v: ["(function(){try{var pending=!!document.querySelector('.clover-status-pending')\nreturn pending?1:2}catch(err){}})();"] },
					],
				},
				x: 'QCE',
			},
			{
				u: '\\/(P|p)ayment(I|i)nfo\\/(I|i)ndex',
				i: 408,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'JSValue',
							v: [
								"!!document.querySelector('#general-notification-error') && document.querySelector('#general-notification-error').textContent.trim() !== \"\";",
							],
						},
						{
							t: 'JSValue',
							v: [
								"(function() {\n    try {\n        var error = document.querySelector('#general-notification-error');\n        if (!!error) {\n            var parsed = error.textContent.replace(/[*]/g, '').trim();\n            return parsed;\n        }\n    } catch (err) {}\n})();",
							],
						},
					],
				},
				x: 'QJS',
				evalAlways: true,
			},
			{
				u: '/SignUp/GeneralInformation',
				i: 409,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{
							t: 'JSValueEx',
							v: [
								"(function(){\n    try {\n        if (!!window.QuantumMetricAPI) {\n            var type = window.location.pathname.split('GeneralInformation/')[1];\n            var id = type === \"Member\" ? 421 : 422;\n            window.localStorage.setItem('qm_oc_45_flow', type);\n            window.QuantumMetricAPI.sendEvent(id, 0); \n        };\n    } catch (err) {\n        window.QuantumMetricAPI.sendEvent(409, 0, '409: ' + err.message);\n    };\n})();",
							],
						},
					],
				},
				x: 'QCC',
			},
			{
				u: '/SignUp/Agreements',
				i: 410,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{
							t: 'JSValueEx',
							v: [
								"(function(){\n    try {\n        if (!!window.QuantumMetricAPI) {\n            var type = window.localStorage.getItem('qm_oc_45_flow');\n            var id = type === \"Member\" ? 423 : 424;\n            window.QuantumMetricAPI.sendEvent(id, 0); \n        };\n    } catch (err) {\n        window.QuantumMetricAPI.sendEvent(410, 0, '410: ' + err.message);\n    };\n})();",
							],
						},
					],
				},
				x: 'QCC',
			},
			{
				u: '/SignUp/Shipping',
				i: 411,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{
							t: 'JSValueEx',
							v: [
								"(function(){\n    try {\n        if (!!window.QuantumMetricAPI) {\n            var type = window.localStorage.getItem('qm_oc_45_flow');\n            var id = type === \"Member\" ? 425 : 426;\n            window.QuantumMetricAPI.sendEvent(id, 0); \n        };\n    } catch (err) {\n        window.QuantumMetricAPI.sendEvent(411, 0, '410: ' + err.message);\n    };\n})();",
							],
						},
					],
				},
				x: 'QCC',
			},
			{
				u: '/SignUp/Payment',
				i: 412,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['body'] },
						{
							t: 'JSValueEx',
							v: [
								"(function(){\n    try {\n        if (!!window.QuantumMetricAPI) {\n            var el = !!document.querySelector('.payment-info:last-child div') ? document.querySelector('.payment-info:last-child div') : document.querySelector('.summary-content div:last-child .currency-item:last-child');\n            var total = el.innerText.replace(/(?!-)\\D+/g, '');\n            var curr = window.QuantumMetricAPI.currencyConvertFromToValue(total, window._AnalyticsFacts_.CurrencyCode, \"USD\");\n            var type = window.localStorage.getItem('qm_oc_45_flow');\n            window.localStorage.setItem('qm_oc_total', curr);\n            var id = type === \"Member\" ? 427 : 428;\n            window.QuantumMetricAPI.sendEvent(id, 0); \n        };\n    } catch (err) {\n        window.QuantumMetricAPI.sendEvent(418, 0, '412: ' + err.message);\n    };\n})();",
							],
						},
					],
				},
				x: 'QCC',
			},
			{
				u: '/SignUp/Complete',
				i: 413,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValueEx', v: ['!!window._AnalyticsFacts_ && !!window._AnalyticsFacts_.OrderId'] },
						{
							t: 'JSValueEx',
							v: [
								"\n(function(){\n    try {\n        if (!!window.QuantumMetricAPI) {\n            var type = window.localStorage.getItem('qm_oc_45_flow');\n            var total = window.localStorage.getItem('qm_oc_total');\n            var id = type === \"Member\" ? 429 : 430;\n            window.QuantumMetricAPI.sendEvent(id, 0, total); \n            return total;\n        };\n    } catch (err) {\n        window.QuantumMetricAPI.sendEvent(413, 0, '410: ' + err.message);\n    };\n})();",
							],
						},
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 414,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 416,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 417,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 418,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 419,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 420,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 421,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 422,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 423,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 424,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 425,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 426,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 427,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 428,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 429,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 430,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: 'accounts\\.myherbalife\\.com',
				i: 433,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.login-body'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
			},
			{
				u: 'accounts\\.myherbalife\\.com',
				i: 434,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.login-body #submit,.login-body #submit *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{
				u: 'accounts\\.myherbalife\\.com',
				i: 435,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.login-body .field-validation-error'] },
						{ t: 'SelectorText', v: ['.login-body .field-validation-error'] },
					],
				},
				x: 'QCC',
			},
			{
				u: '.*',
				i: 436,
				m: 1,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSONPath', v: ['checkNonOlc', { t: 'XHRRequest', v: ['Account/GetAccountType'] }] },
						{ t: 'JSONPath', v: ['checkNonOlc', { t: 'XHRRequest', v: ['Account/GetAccountType'] }] },
					],
				},
				x: 'QXJ',
			},
			{
				u: '/SignUp/(Payment|Complete)',
				i: 437,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValueEx', v: ["!!document.querySelector('#bt-creation-error') && document.querySelector('#bt-creation-error').innerText !== \"\""] },
						{ t: 'SelectorText', v: ['#bt-creation-error'] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 438,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 439,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 440,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 441,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 442,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 443,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 444,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 445,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 446,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 447,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 448,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 449,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 450,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 451,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 452,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 453,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 454,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 455,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '(articles|articulos).(myherbalife|herbalife).(com|com.co)\\/([a-zA-Z]{2})-([a-zA-Z]{2})\\/content',
				i: 456,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['h2'] },
						{ t: 'SelectorText', v: ['h2'] },
					],
				},
				x: 'QCC',
			},
			{
				u: '(articles|articulos).(myherbalife|herbalife).(com|com.co)\\/([a-zA-Z]{2})-([a-zA-Z]{2})\\/([?])',
				i: 457,
				m: 0,
				s: 1,
				f: 0,
				v: { t: 'HE', v: [] },
				x: 'QHE',
			},
			{
				u: '(articles|articulos).(myherbalife|herbalife).(com|com.co)\\/([a-zA-Z]{2})-([a-zA-Z]{2})\\/content',
				i: 458,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['!!window._AnalyticsFacts_ && !!window._AnalyticsFacts_.ArticleCategories'] },
						{ t: 'JSValue', v: ['window._AnalyticsFacts_.ArticleCategories'] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 459,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ["!!window.location.href && window.location.href.indexOf('cmp=') > -1"] },
						{
							t: 'JSValue',
							v: [
								"(function(){\n    try {\n        return window.location.href.split('cmp=')[1].split('&')[0];\n    } catch (err) {\n         window.QuantumMetricAPI.sendEvent(418, 0, \"Campaign Code: \" + err.message);\n    };\n})();",
							],
						},
					],
				},
				x: 'QJS',
				sessionInfoReq: true,
			},
			{
				u: '.*',
				i: 460,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['!!window._AnalyticsFacts_ && !!window._AnalyticsFacts_.BrowseScheme'] },
						{ t: 'JSValue', v: ['window._AnalyticsFacts_.BrowseScheme.toUpperCase()'] },
					],
				},
				x: 'QJS',
				sessionInfoReq: true,
			},
			{
				u: '.myherbalife.com\\/.*\\/Confirmation',
				i: 462,
				m: 0,
				s: 2,
				f: 1,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['#grand-total .value'] },
						{
							t: 'CV',
							v: [
								{ t: 'SelectorText', v: ['#grand-total .value'] },
								{ t: 'JSValueEx', v: ["window._AnalyticsFacts_ && window._AnalyticsFacts_.CurrencyCode ? window._AnalyticsFacts_.CurrencyCode : 'USD'"] },
							],
						},
					],
				},
				x: 'QCC',
			},
			{
				u: '.myherbalife.com\\/.*\\/Confirmation',
				i: 463,
				m: 0,
				s: 2,
				f: 1,
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['#grand-total-title > .value'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: true,
				i: 464,
				f: 1,
				m: 0,
				s: 2,
				u: '.myherbalife.com\\/.*\\/Shop\\/Cart\\/Confirm.*',
				x: 'QCC',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.order-confirmation'] },
						{
							t: 'CV',
							v: [
								{
									t: 'JSValueEx',
									v: [
										{
											fn: function () {
												if (!!window.QuantumMetricAPI && !!window.QuantumMetricAPI.getCartValue && !!window.QuantumMetricAPI.getCartValue()) {
													return (parseFloat(window.QuantumMetricAPI.getCartValue()) / 100).toFixed(2);
												}
											},
										},
									],
								},
							],
						},
					],
				},
			},
			{
				u: '.*',
				i: 465,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSONPathValue', v: ['paymentStatus', 'Declined', { t: 'XHRResponse', v: ['/hpms/Checkout/CreditCardCheckout'] }] },
						{ t: 'JSONPath', v: ['paymentDetails[0].errorMessage', { t: 'XHRResponse', v: ['/hpms/Checkout/CreditCardCheckout'] }] },
					],
				},
				x: 'QXJ',
			},
			{
				u: '.*',
				i: 466,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSONPathValue', v: ['paymentStatus', 'Declined', { t: 'XHRResponse', v: ['/hpms/Checkout/PayNearMeCheckout'] }] },
						{ t: 'JSONPath', v: ['paymentDetails[0].errorMessage', { t: 'XHRResponse', v: ['/hpms/Checkout/PayNearMeCheckout'] }] },
					],
				},
				x: 'QXJ',
			},
			{
				u: '/nc',
				i: 467,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValueEx', v: ['!!window._AnalyticsFacts_ && !!window._AnalyticsFacts_.club && !!window._AnalyticsFacts_.club.clubId'] },
						{ t: 'JSValueEx', v: ['window._AnalyticsFacts_.club.clubId'] },
					],
				},
				x: 'QJS',
			},
			{
				u: '/nc',
				i: 468,
				m: 0,
				s: 2,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValueEx', v: ['!!window._AnalyticsFacts_ && !!window._AnalyticsFacts_.club && !!window._AnalyticsFacts_.club.clubName'] },
						{ t: 'JSValueEx', v: ['window._AnalyticsFacts_.club.clubName'] },
					],
				},
				x: 'QJS',
			},
			{
				u: '/nc/operations/menu/category/create/landing',
				i: 469,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSONPath', v: ['message', { t: 'XHRResponse', v: ['/nc/core/api/CreateConsumptionCategory'] }] },
						{ t: 'JSONPath', v: ['message', { t: 'XHRResponse', v: ['/nc/core/api/CreateConsumptionCategory'] }] },
					],
				},
				x: 'QXJ',
			},
			{
				u: '.*',
				i: 470,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSONPath', v: ['message', { t: 'XHRResponse', v: ['/nc/core/api/SaveConsumptionAddon'] }] },
						{ t: 'JSONPath', v: ['message', { t: 'XHRResponse', v: ['/nc/core/api/SaveConsumptionAddon'] }] },
					],
				},
				x: 'QXJ',
			},
			{
				u: '/nc/operations/menu/items/create/landing',
				i: 471,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'FieldFilledNode', v: ['#CreatePricingItemPrice2 input, #CreatePricingCustomerPrice input'] },
						{ t: 'SelectorText', v: ['#CreatePricingItemPrice2 input, #CreatePricingCustomerPrice input'] },
					],
				},
				x: 'QFL',
			},
			{
				u: '/nc/operations/menu/combos/create/landing',
				i: 472,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['#img-upload-input,#img-upload-input *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCE',
			},
			{ u: '/nc/operations/menu/combos/create/addItems/', i: 473, m: 0, s: 1, f: 0, v: { t: 'HE', v: [] }, x: 'QHE' },
			{
				u: '.*',
				i: 474,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 475,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 476,
				m: 1,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 477,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 478,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 479,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				u: '.*',
				i: 480,
				m: 0,
				s: 1,
				f: 0,
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 481,
				f: 0,
				m: 1,
				s: 1,
				u: '/nc/operations/payments/discounts/create',
				x: 'QXJ',
				v: {
					t: 'E',
					v: [
						{ t: 'JSONPath', v: ['message', { t: 'XHRResponse', v: ['/nc/core/api/SaveClubDiscounts'] }] },
						{
							t: 'JSValueEx',
							v: [
								'(function(){\n    try {\n        if (!!window.QuantumMetricAPI && !!window.QuantumMetricAPI.lastXHR) {\n            var req = JSON.parse(QuantumMetricAPI.lastXHR.qrequest);\n            return (req.discounts[0].amount > 0) ? "$" : "%";\n        };\n    } catch (err) {}\n})();',
							],
						},
					],
				},
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 482,
				f: 0,
				m: 0,
				s: 1,
				u: '.*',
				x: 'QCC',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.serverStamp,#_Stamp'] },
						{
							t: 'JSValueEx',
							v: [
								'try{var server=document.querySelector(\'.serverStamp, #_Stamp\').innerText.split("|")[2].trim();server.slice(0,4).toLowerCase();}catch(err){};',
							],
						},
					],
				},
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 483,
				f: 0,
				m: 0,
				s: 0,
				u: '.*',
				x: 'QJS',
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['!!window._AnalyticsFacts_ && !!window._AnalyticsFacts_.SubtypeCode'] },
						{ t: 'JSValue', v: ['try{window._AnalyticsFacts_.SubtypeCode}catch(err){};'] },
					],
				},
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 484,
				f: 0,
				m: 0,
				s: 0,
				u: '/ForgotPassword/ValidateAnswer',
				x: 'QCC',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.forgot-password-success'] },
						{ t: 'V', v: [''] },
					],
				},
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 485,
				f: 0,
				m: 0,
				s: 0,
				u: '/ResetPassword',
				x: 'QCC',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.confirmation-msg'] },
						{ t: 'V', v: [''] },
					],
				},
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 486,
				f: 0,
				m: 0,
				s: 0,
				u: '/ForgotPassword/ValidateUser',
				x: 'QHE',
				v: { t: 'HE', v: [] },
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 487,
				f: 0,
				m: 0,
				s: 0,
				u: '/Account/PasswordExpired',
				x: 'QHE',
				v: { t: 'HE', v: [] },
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 488,
				f: 0,
				m: 0,
				s: 0,
				u: '/ResetPasswordSuccess',
				x: 'QPC',
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'SelectorText', v: ['#TrackingCode'] },
								{ t: 'Contains', v: ['m_us_en_eml_resetpassword_btn_xxx_flogin-update_021020'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 489,
				f: 0,
				m: 0,
				s: 0,
				u: '/ResetPasswordSuccess',
				x: 'QPC',
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'SelectorText', v: ['#TrackingCode'] },
								{ t: 'Contains', v: ['m_us_en_eml_resetpassword_btn_xxx_forgot-pass_2021020'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
			},
			{
				sessionInfoReq: true,
				evalAlways: false,
				excludeBlank: false,
				i: 490,
				f: 0,
				m: 0,
				s: 2,
				u: '.*',
				x: 'QCK',
				v: {
					t: 'E',
					v: [
						{ t: 'CookiePresent', v: ['dtCookie'] },
						{ t: 'CookieValue', v: ['dtCookie'] },
					],
				},
			},
			{
				sessionInfoReq: true,
				evalAlways: false,
				excludeBlank: false,
				i: 491,
				f: 0,
				m: 0,
				s: 2,
				u: '.*',
				x: 'QCK',
				v: {
					t: 'E',
					v: [
						{ t: 'CookiePresent', v: ['rxVisitor'] },
						{ t: 'CookieValue', v: ['rxVisitor'] },
					],
				},
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 492,
				f: 0,
				m: 0,
				s: 0,
				u: '/Profile/LoginPreferences',
				x: 'QCC',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.field-validation-error'] },
						{ t: 'V', v: [''] },
					],
				},
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 493,
				f: 0,
				m: 0,
				s: 0,
				u: '/Profile/LoginPreferences',
				x: 'QCE',
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'KeyValue', v: ['value', '#btn-update-password'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: true,
				i: 494,
				f: 0,
				m: 0,
				s: 0,
				u: '.*',
				x: 'QCC',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['#_Stamp'] },
						{
							t: 'JSValueEx',
							v: [
								'(function(){\n    try{\n        var build=document.querySelector(\'#_Stamp\').innerText.split("|")[5].trim();\n        return build;\n    } catch(err) {};\n})();',
							],
						},
					],
				},
			},
			{
				sessionInfoReq: true,
				evalAlways: false,
				excludeBlank: true,
				i: 499,
				f: 256,
				m: 0,
				s: 2,
				u: '.*',
				x: 'QJS',
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['try{!!window._AnalyticsFacts_.ClientID || !!window.AnalyticsFacts_.ClientID || !!window.ClientID;}catch(err){}'] },
						{ t: 'JSValue', v: ['try{window._AnalyticsFacts_.ClientID || window.AnalyticsFacts_.ClientID || window.ClientID;}catch(err){}'] },
					],
				},
			},
			{
				sessionInfoReq: true,
				evalAlways: false,
				excludeBlank: true,
				i: 500,
				f: 256,
				m: 0,
				s: 2,
				u: '.*',
				x: 'QJS',
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['try{!!window._AnalyticsFacts_.Id || !!window._AnalyticsFacts_Id;}catch(err){}'] },
						{ t: 'JSValue', v: ['try{window._AnalyticsFacts_.Id || window._AnalyticsFacts_Id;}catch(err){}'] },
					],
				},
			},
			{
				f: 0,
				i: 505,
				evalAlways: true,
				m: 1,
				s: 2,
				u: 'joinherbalife\\.online',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.error-msg[role=alert]'] },
						{ t: 'SelectorText', v: ['.error-msg[role=alert],[class^=_errorPageWrapper][role=alert]'] },
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
				excludeBlank: true,
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 506,
				f: 0,
				m: 0,
				s: 1,
				u: 'joinherbalife\\.online/register',
				x: 'QHE',
				v: { t: 'HE', v: [] },
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 507,
				f: 0,
				m: 0,
				s: 1,
				u: 'joinherbalife\\.online/personalinfo',
				x: 'QHE',
				v: { t: 'HE', v: [] },
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 508,
				f: 0,
				m: 0,
				s: 1,
				u: 'joinherbalife\\.online/guarantees',
				x: 'QHE',
				v: { t: 'HE', v: [] },
			},
			{
				f: 0,
				i: 509,
				evalAlways: false,
				m: 1,
				s: 1,
				u: 'joinherbalife\\.online',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['[class^=_notFoundPage]'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QCC',
				sessionInfoReq: false,
				excludeBlank: false,
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 510,
				f: 0,
				m: 0,
				s: 1,
				u: 'joinherbalife\\.online/agreement',
				x: 'QHE',
				v: { t: 'HE', v: [] },
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 511,
				f: 0,
				m: 0,
				s: 1,
				u: 'joinherbalife\\.online/payment',
				x: 'QHE',
				v: { t: 'HE', v: [] },
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 512,
				f: 0,
				m: 0,
				s: 1,
				u: 'joinherbalife\\.online/confirmation',
				x: 'QHE',
				v: { t: 'HE', v: [] },
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 513,
				f: 38,
				m: 1,
				s: 1,
				u: 'accounts\\.myherbalife\\.com',
				x: 'QFF',
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'FormFieldSubmittedValue', v: ['input#Username,input#email'] },
								{ t: 'IsNotNull', v: [] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								"(function(){  \n  if(!!document.querySelector('input#Username') &&!! document.querySelector('input#Username').getAttribute(\"input#Username\")){return document.querySelector('input#Username').getAttribute('value');\n}\n})();",
							],
						},
					],
				},
			},
			{
				f: 0,
				i: 514,
				evalAlways: false,
				m: 0,
				s: 1,
				u: 'herbalife\\.com',
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['QuantumMetricAPI.get(window.__NEXT_DATA__,["props", "pageProps","globalProps","props","isDsSite"],false);'] },
						{ t: 'V', v: [''] },
					],
				},
				x: 'QJS',
				sessionInfoReq: false,
				excludeBlank: false,
			},
			{
				sessionInfoReq: true,
				evalAlways: false,
				excludeBlank: true,
				i: 515,
				f: 64,
				m: 1,
				s: 2,
				u: 'cart',
				x: 'QCC',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['[data-testid=checkoutWrapper] [data-testid=totalPrice]'] },
						{
							t: 'CV',
							v: [
								{
									t: 'JSValueEx',
									v: [
										'(function(){\n  try{\nvar e = document.querySelector("[data-testid=checkoutWrapper] [data-testid=totalPrice]").innerText;\n    if(!!e){\nvar numbersWithDecimals = e.match(/\\d+([.,]\\d+)?/g).pop();\n      if(!!numbersWithDecimals){\n        return parseFloat(numbersWithDecimals).toFixed(2);\n      }\n    }\n    \n  }catch(err){QuantumMetricAPI.sendEvent(418,0,"HL1 Cart Error="+err);}\n})();',
									],
								},
								{
									t: 'JSValueEx',
									v: [
										'(function(){    \n  try{\n    if(!!window.sessionStorage.getItem("qmCurrency")){\n      return window.sessionStorage.getItem("qmCurrency");\n    }\n     }catch(error){QuantumMetricAPI.sendEvent(418,0,"HL1 Cart Currency Error="+error);}\n           })();',
									],
								},
							],
						},
					],
				},
			},
			{
				f: 1,
				i: 516,
				evalAlways: false,
				m: 1,
				s: 2,
				u: 'order-confirmation',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['[class*=primary][data-testid*=orderTotalPrice]'] },
						{
							t: 'CV',
							v: [
								{
									t: 'JSValueEx',
									v: [
										'(function(){\n  try{\nvar e = document.querySelector("[class*=primary][data-testid*=orderTotalPrice]").innerText;\n    if(!!e){\nvar numbersWithDecimals = e.match(/\\d+(\\.\\d+)?/g).pop();\n      if(!!numbersWithDecimals){\n        return parseFloat(numbersWithDecimals).toFixed(2);\n      }\n    }\n    \n  }catch(err){QuantumMetricAPI.sendEvent(418,0,"HL1 Conversion Error="+err);}\n})();',
									],
								},
								{
									t: 'JSValueEx',
									v: [
										'(function(){    \n  try{\n    if(!!window.sessionStorage.getItem("qmCurrency")){\n      return window.sessionStorage.getItem("qmCurrency");\n    }\n     }catch(error){QuantumMetricAPI.sendEvent(418,0,"HL1 Conversion Currency Error="+error);}\n           })();',
									],
								},
							],
						},
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
				excludeBlank: true,
			},
			{
				sessionInfoReq: true,
				evalAlways: true,
				excludeBlank: true,
				i: 517,
				f: 0,
				m: 1,
				s: 2,
				u: '/checkout',
				x: 'QCC',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['[data-testid=checkoutPaymentSection]'] },
						{ t: 'JSValueEx', v: ['true;'] },
					],
				},
			},
			{
				sessionInfoReq: true,
				evalAlways: true,
				excludeBlank: true,
				i: 518,
				f: 0,
				m: 1,
				s: 2,
				u: '/checkout',
				x: 'QCC',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['[data-testid=shipping-address-section-checkout]'] },
						{ t: 'JSValueEx', v: ['true;'] },
					],
				},
			},
			{ sessionInfoReq: false, evalAlways: false, excludeBlank: false, i: 519, f: 0, m: 0, s: 1, u: '/u/cart', x: 'QHE', v: { t: 'HE', v: [] } },
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 520,
				f: 0,
				m: 1,
				s: 1,
				u: '/u/checkout',
				x: 'QCE',
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['[data-testid=placeOrderButton],[data-testid=placeOrderButton] *'] },
							],
						},
						{ t: 'V', v: [''] },
					],
				},
			},
			{
				sessionInfoReq: true,
				evalAlways: false,
				excludeBlank: false,
				i: 521,
				f: 0,
				m: 1,
				s: 2,
				u: 'order-confirmation',
				x: 'QJS',
				v: {
					t: 'E',
					v: [
						{
							t: 'JSValue',
							v: [
								'(function(){\n  try{\nvar keyRegex = /[?&]key=([^&]+)/;\nvar url = document.location.href;\nvar match = url.match(keyRegex);\n\nif (match && match[1]) {\nreturn true;} \n  }catch(err){}\n})();',
							],
						},
						{
							t: 'JSValue',
							v: [
								'(function(){\n  try{\nvar keyRegex = /[?&]key=([^&]+)/;\nvar url = document.location.href;\nvar match = url.match(keyRegex);\n\nif (match && match[1]) {\n    var keyValue = match[1];\n    return keyValue;\n} \n  }catch(err){}\n  \n})();',
							],
						},
					],
				},
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: true,
				i: 522,
				f: 0,
				m: 1,
				s: 1,
				u: '/u/checkout',
				x: 'QXJ',
				v: {
					t: 'E',
					v: [
						{ t: 'JSONPath', v: ['errorDescription.0.message', { t: 'XHRResponse', v: ['/carts/cartpage/'] }] },
						{ t: 'JSONPath', v: ['errorDescription.0.message', { t: 'XHRResponse', v: ['/carts/cartpage/'] }] },
					],
				},
			},
			{
				f: 0,
				i: 523,
				evalAlways: true,
				m: 1,
				s: 2,
				u: '/u/checkout',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['[data-testid=formError] [class*=error-red]'] },
						{
							t: 'JSValueEx',
							v: [
								'(function(){\n  try{\n    var e = document.querySelectorAll("[data-testid=formError]");\n    if(!!e){\n      for(var i = 0; i<e.length; i++){\n        if(!!e[i].getAttribute("id")){\n          QuantumMetricAPI.sendEvent(523,0,e[i].getAttribute("id"));\n        }\n      }\n    }\n  }catch(err){}\n})();',
							],
						},
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
				excludeBlank: true,
			},
			{
				sessionInfoReq: false,
				evalAlways: false,
				excludeBlank: false,
				i: 524,
				f: 0,
				m: 1,
				s: 1,
				u: '.*',
				x: 'QJS',
				v: {
					t: 'E',
					v: [
						{ t: 'JSValue', v: ['false;'] },
						{ t: 'V', v: [''] },
					],
				},
			},
			{
				sessionInfoReq: true,
				evalAlways: true,
				excludeBlank: true,
				i: 525,
				f: 0,
				m: 1,
				s: 2,
				u: '.*(\\/u\\/checkout|\\/products\\/).*',
				x: 'QCC',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['[data-testid=Toast-msg-tag][class*=error-red]'] },
						{ t: 'SelectorText', v: ['[data-testid=Toast-msg-tag][class*=error-red]'] },
					],
				},
			},
			{
				f: 0,
				i: 526,
				evalAlways: false,
				m: 1,
				s: 1,
				u: '.*',
				v: {
					t: 'E',
					v: [
						{
							t: 'JSValue',
							v: [
								{
									fn: function () {
										return !!document.title;
									},
								},
							],
						},
						{
							t: 'JSValue',
							v: [
								{
									fn: function () {
										return document.title;
									},
								},
							],
						},
					],
				},
				x: 'QJS',
				sessionInfoReq: true,
				excludeBlank: true,
			},
			{
				f: 0,
				i: 527,
				evalAlways: false,
				m: 1,
				s: 2,
				u: '/checkout',
				v: {
					t: 'E',
					v: [
						{ t: 'JSONPath', v: ['errorDescription.0.message', { t: 'XHRResponse', v: ['/carts/cartpage/'] }] },
						{ t: 'JSONPath', v: ['actions.0.code', { t: 'XHRRequest', v: ['/carts/cartpage/'] }] },
					],
				},
				x: 'QXJ',
				sessionInfoReq: true,
				excludeBlank: true,
			},
			{
				sessionInfoReq: true,
				evalAlways: false,
				excludeBlank: true,
				i: 528,
				f: 0,
				m: 1,
				s: 2,
				u: 'joinherbalife',
				x: 'QJS',
				v: {
					t: 'E',
					v: [
						{
							t: 'JSValue',
							v: [
								{
									fn: function () {
										return (
											!!sessionStorage.getItem('authentication-storage') &&
											!!JSON.parse(sessionStorage.getItem('authentication-storage')).state &&
											!!JSON.parse(sessionStorage.getItem('authentication-storage')).state.token
										);
									},
								},
							],
						},
						{
							t: 'JSValue',
							v: [
								{
									fn: function () {
										try {
											var token = JSON.parse(sessionStorage.getItem('authentication-storage')).state.token;
											var base64Url = token.split('.')[1];
											var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
											var jsonPayload = decodeURIComponent(
												window
													.atob(base64)
													.split('')
													.map(function (c) {
														return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
													})
													.join(''),
											);
											return JSON.parse(jsonPayload).registrationId;
										} catch (err) {
											QuantumMetricAPI.sendEvent(418, 0, 'Registration ID error=' + err);
										}
									},
								},
							],
						},
					],
				},
			},
			{
				sessionInfoReq: true,
				evalAlways: false,
				excludeBlank: true,
				i: 529,
				f: 0,
				m: 1,
				s: 2,
				u: 'joinherbalife',
				x: 'QJS',
				v: {
					t: 'E',
					v: [
						{
							t: 'JSValue',
							v: [
								{
									fn: function () {
										return (
											!!sessionStorage.getItem('profile-storage') &&
											!!JSON.parse(sessionStorage.getItem('profile-storage')).state &&
											!!JSON.parse(sessionStorage.getItem('profile-storage')).state.country
										);
									},
								},
							],
						},
						{
							t: 'JSValue',
							v: [
								{
									fn: function () {
										try {
											return JSON.parse(sessionStorage.getItem('profile-storage')).state.country;
										} catch (err) {}
									},
								},
							],
						},
					],
				},
			},
			{
				f: 0,
				i: 530,
				evalAlways: true,
				m: 1,
				s: 2,
				u: '/dssb/es-es/setup',
				v: {
					t: 'E',
					v: [
						{
							t: 'JSValueEx',
							v: [
								{
									fn: function () {
										for (var i = 1; i <= 87; i++) {
											var eVarKey = 'eVar' + i;
											if (window.s_omntr.hasOwnProperty(eVarKey) && window.s_omntr[eVarKey]) {
												return true;
											}
										}
									},
								},
							],
						},
						{
							t: 'JSValueEx',
							v: [
								{
									fn: function () {
										var concatenatedString = '';
										for (var i = 1; i <= 87; i++) {
											var eVarKey = 'eVar' + i;
											if (window.s_omntr.hasOwnProperty(eVarKey) && window.s_omntr[eVarKey]) {
												concatenatedString += window.s_omntr.eVarKey;
											}
										}
										return concatenatedString;
									},
								},
							],
						},
					],
				},
				x: 'QJS',
				sessionInfoReq: true,
				excludeBlank: true,
			},
			{
				f: 0,
				i: 531,
				evalAlways: true,
				m: 1,
				s: 2,
				u: '.*\\/dssb.*\\/setup.*',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['[data-testid=at-editProfile-topInformation]'] },
						{
							t: 'JSValueEx',
							v: [
								{
									fn: function () {
										return true;
									},
								},
							],
						},
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
				excludeBlank: true,
			},
			{
				f: 0,
				i: 532,
				evalAlways: true,
				m: 1,
				s: 2,
				u: '.*\\/dssb.*\\/setup.*',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['[data-testid=at-bizinfo-title-businessInfoLabel]'] },
						{
							t: 'JSValueEx',
							v: [
								{
									fn: function () {
										return true;
									},
								},
							],
						},
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
				excludeBlank: true,
			},
			{
				f: 0,
				i: 533,
				evalAlways: true,
				m: 1,
				s: 2,
				u: '.*\\/dssb.*\\/setup.*',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['[data-testid=at-onboardingSetup-paymentPartner-container]'] },
						{
							t: 'JSValueEx',
							v: [
								{
									fn: function () {
										return true;
									},
								},
							],
						},
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
				excludeBlank: true,
			},
			{
				f: 0,
				i: 534,
				evalAlways: true,
				m: 1,
				s: 2,
				u: '.*\\/dssb.*\\/setup.*',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['[data-testid=at-onboardingSetup-shippingFees-breadcrumb-title]'] },
						{
							t: 'JSValueEx',
							v: [
								{
									fn: function () {
										return true;
									},
								},
							],
						},
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
				excludeBlank: true,
			},
			{
				f: 0,
				i: 535,
				evalAlways: true,
				m: 1,
				s: 2,
				u: '.*\\/dssb.*\\/setup.*',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['[data-testid=at-onboardingSetup-termsConditions-breadcrumb-title]'] },
						{
							t: 'JSValueEx',
							v: [
								{
									fn: function () {
										return true;
									},
								},
							],
						},
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
				excludeBlank: true,
			},
			{
				f: 0,
				i: 536,
				evalAlways: true,
				m: 1,
				s: 2,
				u: '.*\\/dssb.*\\/setup.*',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['[data-testid=at-onboardingSetup-congratulations-siteHasBeenCreatedLabel]'] },
						{
							t: 'JSValueEx',
							v: [
								{
									fn: function () {
										return true;
									},
								},
							],
						},
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
				excludeBlank: true,
			},
			{
				f: 0,
				i: 537,
				evalAlways: false,
				m: 1,
				s: 2,
				u: 'hnjourney',
				v: {
					t: 'E',
					v: [
						{
							t: 'JSValue',
							v: [
								{
									fn: function () {
										return !!window.sessionStorage.getItem('points');
									},
								},
							],
						},
						{
							t: 'JSValue',
							v: [
								{
									fn: function () {
										return window.sessionStorage.getItem('points');
									},
								},
							],
						},
					],
				},
				x: 'QJS',
				sessionInfoReq: true,
				excludeBlank: true,
			},
			{
				f: 0,
				i: 538,
				evalAlways: false,
				m: 0,
				s: 1,
				u: 'hnjourney\\.intuition\\.com/title/',
				v: { t: 'HE', v: [] },
				x: 'QHE',
				sessionInfoReq: false,
				excludeBlank: false,
			},
			{
				f: 0,
				i: 539,
				evalAlways: false,
				m: 1,
				s: 2,
				u: 'hnjourney\\.intuition\\.com/title/',
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.title-preview-container .play-btn,.title-preview-container .play-btn *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								{
									fn: function () {
										return !!document.querySelector('.title.page-title') && document.querySelector('.title.page-title').innerText;
									},
								},
							],
						},
					],
				},
				x: 'QCE',
				sessionInfoReq: true,
				excludeBlank: true,
			},
			{
				f: 0,
				i: 540,
				evalAlways: true,
				m: 1,
				s: 1,
				u: '.*',
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['[aria-label*=Lesson] [role=button],[aria-label*=Lesson] [role=button] *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								{
									fn: function () {
										if (!!QuantumMetricAPI.lastClicked && !!QuantumMetricAPI.lastClicked.innerText && QuantumMetricAPI.lastClicked.innerText === 'EXIT') {
											return true;
										}
									},
								},
							],
						},
					],
				},
				x: 'QCE',
				sessionInfoReq: true,
				excludeBlank: true,
			},
			{
				f: 0,
				i: 541,
				evalAlways: true,
				m: 1,
				s: 2,
				u: 'hnjourney\\.intuition\\.com/player',
				v: {
					t: 'E',
					v: [
						{ t: 'SelectorPresent', v: ['.container-content-launch'] },
						{
							t: 'JSValueEx',
							v: [
								{
									fn: function () {
										try {
											var iframe = document.querySelector('.container-content-launch iframe');

											if (!!iframe && (!!iframe.contentDocument || !!iframe.contentWindow.document)) {
												var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
												var e = iframeDoc.querySelector('body #content iframe');
												if (!!e && (!!e.contentDocument || !!e.contentWindow.document)) {
													var iframeDoc1 = e.contentDocument || iframe.contentWindow.document;
													var scriptSrc = 'https://cdn.quantummetric.com/qscripts/quantum-herbalife.js';
													var scripts = iframeDoc1.getElementsByTagName('script');
													var scriptExists = false;
													if (!!scripts) {
														for (var i = 0; i < scripts.length; i++) {
															if (scripts[i].src && scripts[i].src.indexOf(scriptSrc) !== -1) {
																scriptExists = true;
																break;
															}
														}
													}
													if (!scriptExists) {
														// Create a new script element
														var script = iframeDoc1.createElement('script');
														script.type = 'text/javascript';
														script.src = 'https://cdn.quantummetric.com/qscripts/quantum-herbalife.js'; // Replace with the path to your .js file

														// Append the script to the iframe's head or body
														iframeDoc1.head.appendChild(script);
														return document.querySelector('.last-item').innerText;
													}
												}
											}
										} catch (err) {
											QuantumMetricAPI.sendEvent(418, 0, 'iframe error=' + err);
										}
									},
								},
							],
						},
					],
				},
				x: 'QCC',
				sessionInfoReq: true,
				excludeBlank: false,
			},
			{
				f: 0,
				i: 542,
				evalAlways: false,
				m: 1,
				s: 1,
				u: '^https:\\/\\/www\\.herbalife\\.com\\/[a-z]{2}-[a-z]{2}$',
				v: {
					t: 'E',
					v: [
						{
							t: 'ValueClause',
							v: [
								{ t: 'ElementClickedNode', v: [] },
								{ t: 'Matches', v: ['.nav-main-items,.nav-main-items *'] },
							],
						},
						{
							t: 'JSValueEx',
							v: [
								{
									fn: function () {
										try {
											var e = document.querySelectorAll('.nav-main-items.is-active:not(.nav-main-expand-content) li.li__bold > :first-child');
											var delimiter = ', ';
											var concatenatedText = '';
											for (var i = 0; i < e.length; i++) {
												concatenatedText += e[i].innerText;
												if (i < e.length - 1) {
													concatenatedText += delimiter;
												}
											}

											return concatenatedText;
										} catch (err) {
											QuantumMetricAPI.sendEvent(418, 0, 'HL Navigation Error=' + err);
										}
									},
								},
							],
						},
					],
				},
				x: 'QCE',
				sessionInfoReq: false,
				excludeBlank: true,
			},
		],
	},
	publicKeyString:
		'WyJ0aU9zQWhpN2cwVmxFbDA4RzEzdjZTcEFYanNhc3k2OWF4c2pNNkRlZFdxTlJJU3FTZzc1UlI1RGdxT1MzdlRGaHFVRmVTT09jTUlCSnlmYk5RZkswbC9vdWFtbkRNVzhxc0ZMeHh3dTkzYVZpa2VoeUE2VVg0MmN3d1N0S29hV0pjUWNlNEVsZmFMRU9ZcEF1NkZjQXpuaVJDZEUvL0lHSURJSXZDRXZJVERQZ0h5Mzd2WVpWMGxJdDQ2MW9aTFVHSWpsTm5wTStiNVZGVWk2TWxjMkNTU2MwK2dEeStGYU5yQnp3K0wzbW1qUGNZSEhpSHR2T0lEVUhBMnJRa1dHM3NhSmk5Nmdkay9iRWh5Zkh0c0hHZGJWOVFVV2t3cUNyY1B2VDVTV0lPYklua29oeUFRT1JENmd1bVB1bTRHbmUvUGNXWThNeWFVVGRHd1hpU00wQ3c9PSIsIkFRQUIiXQ==',
	sub: 'herbalife',
});
!(function () {
	if (new RegExp('.*\\.myherbalife.com.*').test(window.location.href)) {
		var e = console.error;
		console.error = function () {
			window.QuantumMetricAPI && window.QuantumMetricAPI.sendEvent && QuantumMetricAPI.sendEvent(57, 0, arguments[0]), e.apply(this, arguments);
		};
	}
})(),
	(function () {
		if (new RegExp('.*\\.herbalife.com.*').test(window.location.href)) {
			var e = console.error;
			console.error = function () {
				window.QuantumMetricAPI && window.QuantumMetricAPI.sendEvent && QuantumMetricAPI.sendEvent(37, 0, arguments[0]), e.apply(this, arguments);
			};
		}
	})(),
	QuantumMetricAPI.addEventListener('event', function (e) {
		e.c && e.c >= 500 && QuantumMetricAPI.getPrevEventData(66) && QuantumMetricAPI.sendEvent(142, 0, QuantumMetricAPI.getPrevEventData(66).value);
	}),
	Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
	Element.prototype.closest ||
		(Element.prototype.closest = function (e) {
			var t = this;
			do {
				if (t.matches(e)) return t;
				t = t.parentElement || t.parentNode;
			} while (null !== t && 1 === t.nodeType);
			return null;
		}),
	(function () {
		function e() {
			try {
				'complete' === document.readyState &&
					'undefined' != typeof QuantumMetricAPI &&
					window.sessionStorage &&
					sessionStorage.qE &&
					(sessionStorage.qE.split(';').forEach(function (e) {
						var t = e.split('id:')[1] ? e.split('id:')[1].split(',')[0] : null,
							n = e.split('conv:')[1] ? e.split('conv:')[1].split(',')[0] : null,
							r = e.split('val:')[1] ? e.split('val:')[1].split(',')[0] : null,
							a = e.split('ts:')[1] ? e.split('ts:')[1].split(',')[0] : null,
							i = QuantumMetricAPI.getPrevEventData(parseInt(t)),
							o = parseInt(a / 1e3) - 1 < parseInt(i.timeStamp / 1e3) < parseInt(a / 1e3) + 1;
						t && (!i || (i.timeStamp && !o)) && QuantumMetricAPI.sendEvent(parseInt(t), parseInt(n), r);
					}),
					delete window.sessionStorage.qE);
			} catch (e) {}
		}
		document.removeEventListener('readystatechange', e), document.addEventListener('readystatechange', e);
	})(),
	QuantumMetricAPI.addEventListener([-2, -4, -5, -18, -10], function (e) {
		try {
			var t = '';
			switch (e.id) {
				case -2:
				case -5:
					t = 'Frustration';
					break;
				case -4:
				case -18:
					t = 'JavaScript Error';
					break;
				case -10:
					t = 'Page Reload';
			}
			if (t) {
				var n = {
						event: { time: Date.now(), 'Page URL': window.location.href, 'QM Session Cookie': QuantumMetricAPI.getSessionID(), Error: t, 'Error Detail': e.v },
					},
					r = new XMLHttpRequest();
				r.open('POST', 'https://http-inputs-hrbl.splunkcloud.com/services/collector/event', !0),
					r.setRequestHeader('Content-Type', 'text/plain'),
					r.setRequestHeader('Authorization', 'Splunk C721E193-495F-4784-8299-5AE121CC370B'),
					r.send(JSON.stringify(n));
			}
		} catch (e) {}
	}),
	QuantumMetricAPI.addEventListener('api', function (e) {
		try {
			if (e.status && e.status >= 400) {
				var t = {
						event: {
							time: Date.now(),
							'Page URL': window.location.href,
							'QM Session Cookie': QuantumMetricAPI.getSessionID(),
							Error: 'API Error',
							'Error Detail': { 'API Method': e.method, 'API URL': e.url, 'API Status': e.status, 'API response time': e.responseTime },
						},
					},
					n = new XMLHttpRequest();
				n.open('POST', 'https://http-inputs-hrbl.splunkcloud.com/services/collector/event', !0),
					n.setRequestHeader('Content-Type', 'text/plain'),
					n.setRequestHeader('Authorization', 'Splunk C721E193-495F-4784-8299-5AE121CC370B'),
					n.send(JSON.stringify(t));
			}
		} catch (e) {}
	}),
	window.location.pathname.indexOf('wellness/Home') &&
		window.addEventListener('hashchange', function () {
			try {
				for (
					var e,
						t = window.location.hash,
						n = [
							{ hash: 'WpTemplateSingleLineText', eid: 113 },
							{ hash: 'WpTemplateGender', eid: 114 },
							{ hash: 'WpTemplateAgeRange', eid: 115 },
							{ hash: 'WpTemplateHeightWeight', eid: 116 },
							{ hash: 'WpTemplateSort', eid: 117 },
							{ hash: 'WpTemplateEatFrequency', eid: 118 },
							{ hash: 'WpTemplateWaterFrequency', eid: 119 },
							{ hash: 'WpTemplateActivity', eid: 120 },
							{ hash: 'WpTemplateResult', eid: 121 },
							{ hash: 'WpTemplateLogin', eid: 123 },
						],
						r = 0;
					r < n.length;
					r++
				)
					if (t.indexOf(n[r].hash) > -1) {
						e = n[r];
						break;
					}
				e && window.QuantumMetricAPI.sendEvent(e.eid, 0);
			} catch (e) {
				window.QuantumMetricAPI.sendEvent(418, 0, 'Wellness Script: ' + e.message);
			}
		}),
	(function () {
		var e = 1e3 * Math.floor(document.cookie.length / 1e3);
		e >= 3e3 &&
			(QuantumMetricAPI.sendEvent(349, 0, 'Cookie Length over ' + e),
			document.cookie
				.split(' ')
				.map(function (e) {
					var t = e.split(/=(.+)/);
					return (t[1] = encodeURIComponent('<q></q>' + t[1]).length), t.splice(0, 2);
				})
				.sort(function (e, t) {
					return t[1] - e[1];
				})
				.splice(0, 3)
				.forEach(function (e) {
					QuantumMetricAPI.sendEvent(343, 0, e[0]);
				}));
		QuantumMetricAPI.addEventListener([-24], function () {
			var e = document.cookie.split(';').length;
			QuantumMetricAPI.sendEvent(342, 0, e);
		});
	})(),
	(function () {
		try {
			QuantumMetricAPI.addEventListener('api', function (e) {
				var t = e.url;
				if (t && t.indexOf('ca.myherbalife.com/cde/tokenizer.svc/gettoken') > 0 && e.xhr)
					try {
						QuantumMetricAPI.sendEvent(388, 0, e.xhr.response);
					} catch (e) {}
			});
		} catch (e) {}
	})();
try {
	QuantumMetricAPI.addEventListener('api', function (e) {
		e.url.includes('BannedWord') &&
			(e.xhr && e.xhr.response
				? QuantumMetricAPI.sendEvent(390, 0, JSON.parse(e.xhr.response))
				: QuantumMetricAPI.sendEvent(390, 0, 'couldnt capture banned word'));
	});
} catch (e) {}
!(function () {
	try {
		QuantumMetricAPI.addEventListener('api', function (e) {
			var t = e.url;
			if (
				(t.includes('BannedWord') &&
					(e.xhr && e.xhr.response
						? QuantumMetricAPI.sendEvent(390, 0, JSON.parse(e.xhr.response))
						: QuantumMetricAPI.sendEvent(390, 0, 'couldnt capture banned word')),
				t.match(/api\/Sponsor\/\d+/))
			) {
				var n = t.split('Sponsor/')[1].split('/'),
					r = n[0],
					a = n[1],
					i = window._AnalyticsFacts_.CountryCode;
				r &&
					a &&
					i &&
					(window.QuantumMetricAPI.sendEvent(420, 0, r), window.QuantumMetricAPI.sendEvent(419, 0, a), window.QuantumMetricAPI.sendEvent(416, 0, i));
			}
			if (t.match(/api\/Sponsor\/Validate/)) {
				var o = JSON.parse(e.xhr.qrequest),
					s = o.Sponsorid,
					u = window._AnalyticsFacts_.CountryCode,
					c = o.LastNameThreeDigts;
				if (s && c && u) {
					window.QuantumMetricAPI.sendEvent(420, 0, s), window.QuantumMetricAPI.sendEvent(419, 0, c);
					var d = window.QuantumMetricAPI.getPrevEventData(409) ? 414 : 417;
					window.QuantumMetricAPI.sendEvent(d, 0, u);
				}
			}
		});
	} catch (e) {
		window.QuantumMetricAPI.sendEvent(418, 0, 'API Listener: ' + e.message);
	}
})(),
	window.QuantumMetricAPI &&
		window.QuantumMetricAPI.addEventListener('start', function () {
			var e = !!window.QuantumMetricAPI && window.QuantumMetricAPI.getSession(),
				t = !!window.localStorage.getItem('qm_slug') && window.localStorage.getItem('qm_slug'),
				n = !!window.localStorage.getItem('qm_fraud');
			(t && e === t && !1 !== n) || (localStorage.setItem('qm_slug', e), localStorage.setItem('qm_fraud', JSON.stringify([])));
		}),
	window.QuantumMetricAPI.addEventListener([26, 66], function (e) {
		if (26 === e.id) {
			var t = JSON.parse(localStorage.getItem('qm_fraud'));
			-1 === t.indexOf(e.v) && t.push(e.v), t.length > 1 && QuantumMetricAPI.sendEvent(439, 0, t.length), localStorage.setItem(JSON.stringify(t));
		} else if (66 === e.id) {
			var n = !!localStorage.getItem('qm_ws') && localStorage.getItem('qm_ws');
			if (!1 === n) {
				var r = !!window.QuantumMetricAPI && window.QuantumMetricAPI.getSession();
				localStorage.setItem('qm_slug', r),
					localStorage.setItem('qm_ws', JSON.stringify([e.v])),
					QuantumMetricAPI.sendEvent(346, 0, 1),
					QuantumMetricAPI.sendEvent(347, 0, e.v);
			} else if (-1 === n.indexOf(e.v)) {
				var a = JSON.parse(localStorage.getItem('qm_ws'));
				a.push(e.v),
					localStorage.setItem('qm_ws', JSON.stringify(a)),
					QuantumMetricAPI.sendEvent(346, 0, a.length),
					QuantumMetricAPI.sendEvent(347, 0, a.join(' | '));
			}
		}
	}),
	window.QuantumMetricAPI.addEventListener('start', function () {
		window.QuantumMetricAPI && !window.qm_replay && (window.qm_replay = window.QuantumMetricAPI.getReplay());
	});
try {
	QuantumMetricAPI.addEventListener('api', function (e) {
		if (e.url.includes('carts') && e.xhr && e.xhr.response) {
			var t = JSON.parse(e.xhr.response);
			t && t.cart && t.cart.totalPrice && t.cart.totalPrice.currencyCode && window.sessionStorage.setItem('qmCurrency', t.cart.totalPrice.currencyCode);
		}
	});
} catch (e) {}
try {
	QuantumMetricAPI.addEventListener('api', function (e) {
		if (e.url.includes('/search') && e.xhr && e.xhr.response && e.xhr.request) {
			var t = JSON.parse(e.xhr.response),
				n = JSON.parse(e.xhr.request);
			n && n.q && t.totalCount && 0 === t.totalCount && QuantumMetricAPI.sendEvent(524, 0, n.q);
		}
	});
} catch (e) {}
window.QuantumMetricAPI.addEventListener(526, function (e) {
	e.value && 'Goodbye' === e.value && QuantumMetricAPI.sendEvent(540, 0, '');
});
(function () {
	if (window.QuantumMetricAPI)
		window.QuantumMetricAPI.conversionRates = {
			AED: 3.672975,
			AFN: 67.001088,
			ALL: 90.59766,
			AMD: 386.286016,
			ANG: 1.798884,
			AOA: 912,
			ARS: 988.777325,
			AUD: 1.520593,
			AWG: 1.8025,
			AZN: 1.7,
			BAM: 1.808414,
			BBD: 2,
			BDT: 119.279264,
			BGN: 1.80256,
			BHD: 0.37698,
			BIF: 2899.576311,
			BMD: 1,
			BND: 1.321198,
			BOB: 6.897633,
			BRL: 5.7641,
			BSD: 1,
			BTC: 0.000013807579,
			BTN: 83.931857,
			BWP: 13.380119,
			BYN: 3.266509,
			BZD: 2.011905,
			CAD: 1.391645,
			CDF: 2839.966966,
			CHF: 0.865527,
			CLF: 0.034858,
			CLP: 961.538462,
			CNH: 7.12736,
			CNY: 7.1197,
			COP: 4380.301792,
			CRC: 511.406336,
			CUC: 1,
			CUP: 25.75,
			CVE: 101.680154,
			CZK: 23.373101,
			DJF: 177.741526,
			DKK: 6.870122,
			DOP: 60.103651,
			DZD: 133.357586,
			EGP: 48.8012,
			ERN: 15,
			ETB: 122.371846,
			EUR: 0.920862,
			FJD: 2.278,
			FKP: 0.769429,
			GBP: 0.769429,
			GEL: 2.745,
			GGP: 0.769429,
			GHS: 16.270299,
			GIP: 0.769429,
			GMD: 69.5,
			GNF: 8608.052117,
			GTQ: 7.714652,
			GYD: 208.828645,
			HKD: 7.77247,
			HNL: 25.182118,
			HRK: 6.938127,
			HTG: 131.714009,
			HUF: 375.720931,
			IDR: 15703.489325,
			ILS: 3.722725,
			IMP: 0.769429,
			INR: 84.092301,
			IQD: 1307.597335,
			IRR: 42092.5,
			ISK: 136.75,
			JEP: 0.769429,
			JMD: 158.014144,
			JOD: 0.7093,
			JPY: 152.24275,
			KES: 128.76,
			KGS: 85.8,
			KHR: 4052.660913,
			KMF: 454.500313,
			KPW: 900,
			KRW: 1378.302592,
			KWD: 0.306471,
			KYD: 0.831781,
			KZT: 487.765685,
			LAK: 21898.846482,
			LBP: 89394.970549,
			LKR: 293.238276,
			LRD: 191.645535,
			LSL: 17.567847,
			LYD: 4.817122,
			MAD: 9.839639,
			MDL: 17.911714,
			MGA: 4607.471835,
			MKD: 56.737557,
			MMK: 2098,
			MNT: 3398,
			MOP: 7.990096,
			MRU: 39.686112,
			MUR: 46.110006,
			MVR: 15.35,
			MWK: 1730.739781,
			MXN: 20.145528,
			MYR: 4.3788,
			MZN: 63.899993,
			NAD: 17.567766,
			NGN: 1641.74,
			NIO: 36.727448,
			NOK: 10.955465,
			NPR: 134.28712,
			NZD: 1.671595,
			OMR: 0.384982,
			PAB: 1,
			PEN: 3.764282,
			PGK: 3.999225,
			PHP: 58.099996,
			PKR: 277.27738,
			PLN: 4.008101,
			PYG: 7898.150182,
			QAR: 3.639793,
			RON: 4.5812,
			RSD: 107.771,
			RUB: 97.131695,
			RWF: 1358.281346,
			SAR: 3.755726,
			SBD: 8.330037,
			SCR: 13.796409,
			SDG: 601.5,
			SEK: 10.67258,
			SGD: 1.321597,
			SHP: 0.769429,
			SLL: 20969.5,
			SOS: 570.422713,
			SRD: 34.367,
			SSP: 130.26,
			STD: 22281.8,
			STN: 22.591889,
			SVC: 8.73362,
			SYP: 2512.53,
			SZL: 17.563498,
			THB: 33.71,
			TJS: 10.620326,
			TMT: 3.51,
			TND: 3.099785,
			TOP: 2.38378,
			TRY: 34.253215,
			TTD: 6.773144,
			TWD: 31.948003,
			TZS: 2710,
			UAH: 41.298,
			UGX: 3658.128868,
			USD: 1,
			UYU: 41.200729,
			UZS: 12750.39162,
			VES: 42.509083,
			VND: 25274.874239,
			VUV: 118.722,
			WST: 2.8,
			XAF: 604.0462,
			XAG: 0.02965467,
			XAU: 0.00035944,
			XCD: 2.70255,
			XDR: 0.750242,
			XOF: 604.0462,
			XPD: 0.00087429,
			XPF: 109.888126,
			XPT: 0.00099389,
			YER: 250.325088,
			ZAR: 17.673864,
			ZMW: 26.575928,
			ZWL: 322,
		};
})();
