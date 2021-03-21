var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module2) => () => {
  if (!module2) {
    module2 = {exports: {}};
    callback(module2.exports, module2);
  }
  return module2.exports;
};
var __exportStar = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __exportStar(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// node_modules/object-assign/index.js
var require_object_assign = __commonJS((exports2, module2) => {
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  "use strict";
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === void 0) {
      throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
      var test1 = new String("abc");
      test1[5] = "de";
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      }
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2["_" + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
        return test2[n];
      });
      if (order2.join("") !== "0123456789") {
        return false;
      }
      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function(letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }
  module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
    return to;
  };
});

// node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS((exports2) => {
  /** @license React v17.0.1
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  "use strict";
  var l = require_object_assign();
  var n = 60103;
  var p = 60106;
  exports2.Fragment = 60107;
  exports2.StrictMode = 60108;
  exports2.Profiler = 60114;
  var q = 60109;
  var r = 60110;
  var t = 60112;
  exports2.Suspense = 60113;
  var u = 60115;
  var v = 60116;
  if (typeof Symbol === "function" && Symbol.for) {
    w = Symbol.for;
    n = w("react.element");
    p = w("react.portal");
    exports2.Fragment = w("react.fragment");
    exports2.StrictMode = w("react.strict_mode");
    exports2.Profiler = w("react.profiler");
    q = w("react.provider");
    r = w("react.context");
    t = w("react.forward_ref");
    exports2.Suspense = w("react.suspense");
    u = w("react.memo");
    v = w("react.lazy");
  }
  var w;
  var x = typeof Symbol === "function" && Symbol.iterator;
  function y(a) {
    if (a === null || typeof a !== "object")
      return null;
    a = x && a[x] || a["@@iterator"];
    return typeof a === "function" ? a : null;
  }
  function z(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var A = {isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  }};
  var B = {};
  function C(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = B;
    this.updater = c || A;
  }
  C.prototype.isReactComponent = {};
  C.prototype.setState = function(a, b) {
    if (typeof a !== "object" && typeof a !== "function" && a != null)
      throw Error(z(85));
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  C.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function D() {
  }
  D.prototype = C.prototype;
  function E(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = B;
    this.updater = c || A;
  }
  var F = E.prototype = new D();
  F.constructor = E;
  l(F, C.prototype);
  F.isPureReactComponent = true;
  var G = {current: null};
  var H = Object.prototype.hasOwnProperty;
  var I = {key: true, ref: true, __self: true, __source: true};
  function J(a, b, c) {
    var e, d = {}, k = null, h = null;
    if (b != null)
      for (e in b.ref !== void 0 && (h = b.ref), b.key !== void 0 && (k = "" + b.key), b)
        H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
    var g = arguments.length - 2;
    if (g === 1)
      d.children = c;
    else if (1 < g) {
      for (var f = Array(g), m = 0; m < g; m++)
        f[m] = arguments[m + 2];
      d.children = f;
    }
    if (a && a.defaultProps)
      for (e in g = a.defaultProps, g)
        d[e] === void 0 && (d[e] = g[e]);
    return {$$typeof: n, type: a, key: k, ref: h, props: d, _owner: G.current};
  }
  function K(a, b) {
    return {$$typeof: n, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner};
  }
  function L(a) {
    return typeof a === "object" && a !== null && a.$$typeof === n;
  }
  function escape(a) {
    var b = {"=": "=0", ":": "=2"};
    return "$" + a.replace(/[=:]/g, function(a2) {
      return b[a2];
    });
  }
  var M = /\/+/g;
  function N(a, b) {
    return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
  }
  function O(a, b, c, e, d) {
    var k = typeof a;
    if (k === "undefined" || k === "boolean")
      a = null;
    var h = false;
    if (a === null)
      h = true;
    else
      switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case n:
            case p:
              h = true;
          }
      }
    if (h)
      return h = a, d = d(h), a = e === "" ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", a != null && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function(a2) {
        return a2;
      })) : d != null && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
    h = 0;
    e = e === "" ? "." : e + ":";
    if (Array.isArray(a))
      for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = e + N(k, g);
        h += O(k, b, c, f, d);
      }
    else if (f = y(a), typeof f === "function")
      for (a = f.call(a), g = 0; !(k = a.next()).done; )
        k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);
    else if (k === "object")
      throw b = "" + a, Error(z(31, b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
    return h;
  }
  function P(a, b, c) {
    if (a == null)
      return a;
    var e = [], d = 0;
    O(a, e, "", "", function(a2) {
      return b.call(c, a2, d++);
    });
    return e;
  }
  function Q(a) {
    if (a._status === -1) {
      var b = a._result;
      b = b();
      a._status = 0;
      a._result = b;
      b.then(function(b2) {
        a._status === 0 && (b2 = b2.default, a._status = 1, a._result = b2);
      }, function(b2) {
        a._status === 0 && (a._status = 2, a._result = b2);
      });
    }
    if (a._status === 1)
      return a._result;
    throw a._result;
  }
  var R = {current: null};
  function S() {
    var a = R.current;
    if (a === null)
      throw Error(z(321));
    return a;
  }
  var T = {ReactCurrentDispatcher: R, ReactCurrentBatchConfig: {transition: 0}, ReactCurrentOwner: G, IsSomeRendererActing: {current: false}, assign: l};
  exports2.Children = {map: P, forEach: function(a, b, c) {
    P(a, function() {
      b.apply(this, arguments);
    }, c);
  }, count: function(a) {
    var b = 0;
    P(a, function() {
      b++;
    });
    return b;
  }, toArray: function(a) {
    return P(a, function(a2) {
      return a2;
    }) || [];
  }, only: function(a) {
    if (!L(a))
      throw Error(z(143));
    return a;
  }};
  exports2.Component = C;
  exports2.PureComponent = E;
  exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;
  exports2.cloneElement = function(a, b, c) {
    if (a === null || a === void 0)
      throw Error(z(267, a));
    var e = l({}, a.props), d = a.key, k = a.ref, h = a._owner;
    if (b != null) {
      b.ref !== void 0 && (k = b.ref, h = G.current);
      b.key !== void 0 && (d = "" + b.key);
      if (a.type && a.type.defaultProps)
        var g = a.type.defaultProps;
      for (f in b)
        H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = b[f] === void 0 && g !== void 0 ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (f === 1)
      e.children = c;
    else if (1 < f) {
      g = Array(f);
      for (var m = 0; m < f; m++)
        g[m] = arguments[m + 2];
      e.children = g;
    }
    return {
      $$typeof: n,
      type: a.type,
      key: d,
      ref: k,
      props: e,
      _owner: h
    };
  };
  exports2.createContext = function(a, b) {
    b === void 0 && (b = null);
    a = {$$typeof: r, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null};
    a.Provider = {$$typeof: q, _context: a};
    return a.Consumer = a;
  };
  exports2.createElement = J;
  exports2.createFactory = function(a) {
    var b = J.bind(null, a);
    b.type = a;
    return b;
  };
  exports2.createRef = function() {
    return {current: null};
  };
  exports2.forwardRef = function(a) {
    return {$$typeof: t, render: a};
  };
  exports2.isValidElement = L;
  exports2.lazy = function(a) {
    return {$$typeof: v, _payload: {_status: -1, _result: a}, _init: Q};
  };
  exports2.memo = function(a, b) {
    return {$$typeof: u, type: a, compare: b === void 0 ? null : b};
  };
  exports2.useCallback = function(a, b) {
    return S().useCallback(a, b);
  };
  exports2.useContext = function(a, b) {
    return S().useContext(a, b);
  };
  exports2.useDebugValue = function() {
  };
  exports2.useEffect = function(a, b) {
    return S().useEffect(a, b);
  };
  exports2.useImperativeHandle = function(a, b, c) {
    return S().useImperativeHandle(a, b, c);
  };
  exports2.useLayoutEffect = function(a, b) {
    return S().useLayoutEffect(a, b);
  };
  exports2.useMemo = function(a, b) {
    return S().useMemo(a, b);
  };
  exports2.useReducer = function(a, b, c) {
    return S().useReducer(a, b, c);
  };
  exports2.useRef = function(a) {
    return S().useRef(a);
  };
  exports2.useState = function(a) {
    return S().useState(a);
  };
  exports2.version = "17.0.1";
});

// node_modules/react/index.js
var require_react = __commonJS((exports2, module2) => {
  "use strict";
  if (true) {
    module2.exports = require_react_production_min();
  } else {
    module2.exports = null;
  }
});

// node_modules/react-dom/cjs/react-dom-server.node.production.min.js
var require_react_dom_server_node_production_min = __commonJS((exports2) => {
  /** @license React v17.0.1
   * react-dom-server.node.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  "use strict";
  var l = require_object_assign();
  var n = require_react();
  var aa = require("stream");
  function p(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var q = 60106;
  var r = 60107;
  var u = 60108;
  var z = 60114;
  var B = 60109;
  var ba = 60110;
  var ca = 60112;
  var D = 60113;
  var da = 60120;
  var ea = 60115;
  var fa = 60116;
  var ha = 60121;
  var ia = 60117;
  var ja = 60119;
  var ka = 60129;
  var la = 60131;
  if (typeof Symbol === "function" && Symbol.for) {
    E = Symbol.for;
    q = E("react.portal");
    r = E("react.fragment");
    u = E("react.strict_mode");
    z = E("react.profiler");
    B = E("react.provider");
    ba = E("react.context");
    ca = E("react.forward_ref");
    D = E("react.suspense");
    da = E("react.suspense_list");
    ea = E("react.memo");
    fa = E("react.lazy");
    ha = E("react.block");
    ia = E("react.fundamental");
    ja = E("react.scope");
    ka = E("react.debug_trace_mode");
    la = E("react.legacy_hidden");
  }
  var E;
  function F(a) {
    if (a == null)
      return null;
    if (typeof a === "function")
      return a.displayName || a.name || null;
    if (typeof a === "string")
      return a;
    switch (a) {
      case r:
        return "Fragment";
      case q:
        return "Portal";
      case z:
        return "Profiler";
      case u:
        return "StrictMode";
      case D:
        return "Suspense";
      case da:
        return "SuspenseList";
    }
    if (typeof a === "object")
      switch (a.$$typeof) {
        case ba:
          return (a.displayName || "Context") + ".Consumer";
        case B:
          return (a._context.displayName || "Context") + ".Provider";
        case ca:
          var b = a.render;
          b = b.displayName || b.name || "";
          return a.displayName || (b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef");
        case ea:
          return F(a.type);
        case ha:
          return F(a._render);
        case fa:
          b = a._payload;
          a = a._init;
          try {
            return F(a(b));
          } catch (c) {
          }
      }
    return null;
  }
  var ma = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  var na = {};
  function I(a, b) {
    for (var c = a._threadCount | 0; c <= b; c++)
      a[c] = a._currentValue2, a._threadCount = c + 1;
  }
  function oa(a, b, c, d) {
    if (d && (d = a.contextType, typeof d === "object" && d !== null))
      return I(d, c), d[c];
    if (a = a.contextTypes) {
      c = {};
      for (var f in a)
        c[f] = b[f];
      b = c;
    } else
      b = na;
    return b;
  }
  for (var J = new Uint16Array(16), K = 0; 15 > K; K++)
    J[K] = K + 1;
  J[15] = 0;
  var pa = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
  var qa = Object.prototype.hasOwnProperty;
  var ra = {};
  var sa = {};
  function ta(a) {
    if (qa.call(sa, a))
      return true;
    if (qa.call(ra, a))
      return false;
    if (pa.test(a))
      return sa[a] = true;
    ra[a] = true;
    return false;
  }
  function ua(a, b, c, d) {
    if (c !== null && c.type === 0)
      return false;
    switch (typeof b) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d)
          return false;
        if (c !== null)
          return !c.acceptsBooleans;
        a = a.toLowerCase().slice(0, 5);
        return a !== "data-" && a !== "aria-";
      default:
        return false;
    }
  }
  function va(a, b, c, d) {
    if (b === null || typeof b === "undefined" || ua(a, b, c, d))
      return true;
    if (d)
      return false;
    if (c !== null)
      switch (c.type) {
        case 3:
          return !b;
        case 4:
          return b === false;
        case 5:
          return isNaN(b);
        case 6:
          return isNaN(b) || 1 > b;
      }
    return false;
  }
  function M(a, b, c, d, f, h, t) {
    this.acceptsBooleans = b === 2 || b === 3 || b === 4;
    this.attributeName = d;
    this.attributeNamespace = f;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = h;
    this.removeEmptyString = t;
  }
  var N = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    N[a] = new M(a, 0, false, a, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var b = a[0];
    N[b] = new M(b, 1, false, a[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    N[a] = new M(a, 2, false, a.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    N[a] = new M(a, 2, false, a, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    N[a] = new M(a, 3, false, a.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    N[a] = new M(a, 3, true, a, null, false, false);
  });
  ["capture", "download"].forEach(function(a) {
    N[a] = new M(a, 4, false, a, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a) {
    N[a] = new M(a, 6, false, a, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a) {
    N[a] = new M(a, 5, false, a.toLowerCase(), null, false, false);
  });
  var wa = /[\-:]([a-z])/g;
  function xa(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace(wa, xa);
    N[b] = new M(b, 1, false, a, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace(wa, xa);
    N[b] = new M(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var b = a.replace(wa, xa);
    N[b] = new M(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a) {
    N[a] = new M(a, 1, false, a.toLowerCase(), null, false, false);
  });
  N.xlinkHref = new M("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a) {
    N[a] = new M(a, 1, false, a.toLowerCase(), null, true, true);
  });
  var ya = /["'&<>]/;
  function O(a) {
    if (typeof a === "boolean" || typeof a === "number")
      return "" + a;
    a = "" + a;
    var b = ya.exec(a);
    if (b) {
      var c = "", d, f = 0;
      for (d = b.index; d < a.length; d++) {
        switch (a.charCodeAt(d)) {
          case 34:
            b = "&quot;";
            break;
          case 38:
            b = "&amp;";
            break;
          case 39:
            b = "&#x27;";
            break;
          case 60:
            b = "&lt;";
            break;
          case 62:
            b = "&gt;";
            break;
          default:
            continue;
        }
        f !== d && (c += a.substring(f, d));
        f = d + 1;
        c += b;
      }
      a = f !== d ? c + a.substring(f, d) : c;
    }
    return a;
  }
  function za(a, b) {
    var c = N.hasOwnProperty(a) ? N[a] : null;
    var d;
    if (d = a !== "style")
      d = c !== null ? c.type === 0 : !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? false : true;
    if (d || va(a, b, c, false))
      return "";
    if (c !== null) {
      a = c.attributeName;
      d = c.type;
      if (d === 3 || d === 4 && b === true)
        return a + '=""';
      c.sanitizeURL && (b = "" + b);
      return a + '="' + (O(b) + '"');
    }
    return ta(a) ? a + '="' + (O(b) + '"') : "";
  }
  function Aa(a, b) {
    return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var Ba = typeof Object.is === "function" ? Object.is : Aa;
  var P = null;
  var Q = null;
  var R = null;
  var S = false;
  var T = false;
  var U = null;
  var V = 0;
  function W() {
    if (P === null)
      throw Error(p(321));
    return P;
  }
  function Ca() {
    if (0 < V)
      throw Error(p(312));
    return {memoizedState: null, queue: null, next: null};
  }
  function Da() {
    R === null ? Q === null ? (S = false, Q = R = Ca()) : (S = true, R = Q) : R.next === null ? (S = false, R = R.next = Ca()) : (S = true, R = R.next);
    return R;
  }
  function Ea(a, b, c, d) {
    for (; T; )
      T = false, V += 1, R = null, c = a(b, d);
    Fa();
    return c;
  }
  function Fa() {
    P = null;
    T = false;
    Q = null;
    V = 0;
    R = U = null;
  }
  function Ga(a, b) {
    return typeof b === "function" ? b(a) : b;
  }
  function Ha(a, b, c) {
    P = W();
    R = Da();
    if (S) {
      var d = R.queue;
      b = d.dispatch;
      if (U !== null && (c = U.get(d), c !== void 0)) {
        U.delete(d);
        d = R.memoizedState;
        do
          d = a(d, c.action), c = c.next;
        while (c !== null);
        R.memoizedState = d;
        return [d, b];
      }
      return [R.memoizedState, b];
    }
    a = a === Ga ? typeof b === "function" ? b() : b : c !== void 0 ? c(b) : b;
    R.memoizedState = a;
    a = R.queue = {last: null, dispatch: null};
    a = a.dispatch = Ia.bind(null, P, a);
    return [R.memoizedState, a];
  }
  function Ja(a, b) {
    P = W();
    R = Da();
    b = b === void 0 ? null : b;
    if (R !== null) {
      var c = R.memoizedState;
      if (c !== null && b !== null) {
        var d = c[1];
        a:
          if (d === null)
            d = false;
          else {
            for (var f = 0; f < d.length && f < b.length; f++)
              if (!Ba(b[f], d[f])) {
                d = false;
                break a;
              }
            d = true;
          }
        if (d)
          return c[0];
      }
    }
    a = a();
    R.memoizedState = [a, b];
    return a;
  }
  function Ia(a, b, c) {
    if (!(25 > V))
      throw Error(p(301));
    if (a === P)
      if (T = true, a = {action: c, next: null}, U === null && (U = new Map()), c = U.get(b), c === void 0)
        U.set(b, a);
      else {
        for (b = c; b.next !== null; )
          b = b.next;
        b.next = a;
      }
  }
  function Ka() {
  }
  var X = null;
  var La = {readContext: function(a) {
    var b = X.threadID;
    I(a, b);
    return a[b];
  }, useContext: function(a) {
    W();
    var b = X.threadID;
    I(a, b);
    return a[b];
  }, useMemo: Ja, useReducer: Ha, useRef: function(a) {
    P = W();
    R = Da();
    var b = R.memoizedState;
    return b === null ? (a = {current: a}, R.memoizedState = a) : b;
  }, useState: function(a) {
    return Ha(Ga, a);
  }, useLayoutEffect: function() {
  }, useCallback: function(a, b) {
    return Ja(function() {
      return a;
    }, b);
  }, useImperativeHandle: Ka, useEffect: Ka, useDebugValue: Ka, useDeferredValue: function(a) {
    W();
    return a;
  }, useTransition: function() {
    W();
    return [function(a) {
      a();
    }, false];
  }, useOpaqueIdentifier: function() {
    return (X.identifierPrefix || "") + "R:" + (X.uniqueID++).toString(36);
  }, useMutableSource: function(a, b) {
    W();
    return b(a._source);
  }};
  var Ma = {html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg"};
  function Na(a) {
    switch (a) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  var Oa = {area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true};
  var Pa = l({menuitem: true}, Oa);
  var Y = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  };
  var Qa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Y).forEach(function(a) {
    Qa.forEach(function(b) {
      b = b + a.charAt(0).toUpperCase() + a.substring(1);
      Y[b] = Y[a];
    });
  });
  var Ra = /([A-Z])/g;
  var Sa = /^ms-/;
  var Z = n.Children.toArray;
  var Ta = ma.ReactCurrentDispatcher;
  var Ua = {listing: true, pre: true, textarea: true};
  var Va = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
  var Wa = {};
  var Xa = {};
  function Ya(a) {
    if (a === void 0 || a === null)
      return a;
    var b = "";
    n.Children.forEach(a, function(a2) {
      a2 != null && (b += a2);
    });
    return b;
  }
  var Za = Object.prototype.hasOwnProperty;
  var $a = {children: null, dangerouslySetInnerHTML: null, suppressContentEditableWarning: null, suppressHydrationWarning: null};
  function ab(a, b) {
    if (a === void 0)
      throw Error(p(152, F(b) || "Component"));
  }
  function bb(a, b, c) {
    function d(d2, h2) {
      var e = h2.prototype && h2.prototype.isReactComponent, f2 = oa(h2, b, c, e), t = [], g = false, m = {isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
        if (t === null)
          return null;
      }, enqueueReplaceState: function(a2, b2) {
        g = true;
        t = [b2];
      }, enqueueSetState: function(a2, b2) {
        if (t === null)
          return null;
        t.push(b2);
      }};
      if (e) {
        if (e = new h2(d2.props, f2, m), typeof h2.getDerivedStateFromProps === "function") {
          var k = h2.getDerivedStateFromProps.call(null, d2.props, e.state);
          k != null && (e.state = l({}, e.state, k));
        }
      } else if (P = {}, e = h2(d2.props, f2, m), e = Ea(h2, d2.props, e, f2), e == null || e.render == null) {
        a = e;
        ab(a, h2);
        return;
      }
      e.props = d2.props;
      e.context = f2;
      e.updater = m;
      m = e.state;
      m === void 0 && (e.state = m = null);
      if (typeof e.UNSAFE_componentWillMount === "function" || typeof e.componentWillMount === "function")
        if (typeof e.componentWillMount === "function" && typeof h2.getDerivedStateFromProps !== "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && typeof h2.getDerivedStateFromProps !== "function" && e.UNSAFE_componentWillMount(), t.length) {
          m = t;
          var v = g;
          t = null;
          g = false;
          if (v && m.length === 1)
            e.state = m[0];
          else {
            k = v ? m[0] : e.state;
            var H = true;
            for (v = v ? 1 : 0; v < m.length; v++) {
              var x = m[v];
              x = typeof x === "function" ? x.call(e, k, d2.props, f2) : x;
              x != null && (H ? (H = false, k = l({}, k, x)) : l(k, x));
            }
            e.state = k;
          }
        } else
          t = null;
      a = e.render();
      ab(a, h2);
      if (typeof e.getChildContext === "function" && (d2 = h2.childContextTypes, typeof d2 === "object")) {
        var y = e.getChildContext();
        for (var A in y)
          if (!(A in d2))
            throw Error(p(108, F(h2) || "Unknown", A));
      }
      y && (b = l({}, b, y));
    }
    for (; n.isValidElement(a); ) {
      var f = a, h = f.type;
      if (typeof h !== "function")
        break;
      d(f, h);
    }
    return {child: a, context: b};
  }
  var cb = function() {
    function a(a2, b2, f) {
      n.isValidElement(a2) ? a2.type !== r ? a2 = [a2] : (a2 = a2.props.children, a2 = n.isValidElement(a2) ? [a2] : Z(a2)) : a2 = Z(a2);
      a2 = {type: null, domNamespace: Ma.html, children: a2, childIndex: 0, context: na, footer: ""};
      var c = J[0];
      if (c === 0) {
        var d = J;
        c = d.length;
        var g = 2 * c;
        if (!(65536 >= g))
          throw Error(p(304));
        var e = new Uint16Array(g);
        e.set(d);
        J = e;
        J[0] = c + 1;
        for (d = c; d < g - 1; d++)
          J[d] = d + 1;
        J[g - 1] = 0;
      } else
        J[0] = J[c];
      this.threadID = c;
      this.stack = [a2];
      this.exhausted = false;
      this.currentSelectValue = null;
      this.previousWasTextNode = false;
      this.makeStaticMarkup = b2;
      this.suspenseDepth = 0;
      this.contextIndex = -1;
      this.contextStack = [];
      this.contextValueStack = [];
      this.uniqueID = 0;
      this.identifierPrefix = f && f.identifierPrefix || "";
    }
    var b = a.prototype;
    b.destroy = function() {
      if (!this.exhausted) {
        this.exhausted = true;
        this.clearProviders();
        var a2 = this.threadID;
        J[a2] = J[0];
        J[0] = a2;
      }
    };
    b.pushProvider = function(a2) {
      var b2 = ++this.contextIndex, c = a2.type._context, h = this.threadID;
      I(c, h);
      var t = c[h];
      this.contextStack[b2] = c;
      this.contextValueStack[b2] = t;
      c[h] = a2.props.value;
    };
    b.popProvider = function() {
      var a2 = this.contextIndex, b2 = this.contextStack[a2], f = this.contextValueStack[a2];
      this.contextStack[a2] = null;
      this.contextValueStack[a2] = null;
      this.contextIndex--;
      b2[this.threadID] = f;
    };
    b.clearProviders = function() {
      for (var a2 = this.contextIndex; 0 <= a2; a2--)
        this.contextStack[a2][this.threadID] = this.contextValueStack[a2];
    };
    b.read = function(a2) {
      if (this.exhausted)
        return null;
      var b2 = X;
      X = this;
      var c = Ta.current;
      Ta.current = La;
      try {
        for (var h = [""], t = false; h[0].length < a2; ) {
          if (this.stack.length === 0) {
            this.exhausted = true;
            var g = this.threadID;
            J[g] = J[0];
            J[0] = g;
            break;
          }
          var e = this.stack[this.stack.length - 1];
          if (t || e.childIndex >= e.children.length) {
            var L = e.footer;
            L !== "" && (this.previousWasTextNode = false);
            this.stack.pop();
            if (e.type === "select")
              this.currentSelectValue = null;
            else if (e.type != null && e.type.type != null && e.type.type.$$typeof === B)
              this.popProvider(e.type);
            else if (e.type === D) {
              this.suspenseDepth--;
              var G = h.pop();
              if (t) {
                t = false;
                var C = e.fallbackFrame;
                if (!C)
                  throw Error(p(303));
                this.stack.push(C);
                h[this.suspenseDepth] += "<!--$!-->";
                continue;
              } else
                h[this.suspenseDepth] += G;
            }
            h[this.suspenseDepth] += L;
          } else {
            var m = e.children[e.childIndex++], k = "";
            try {
              k += this.render(m, e.context, e.domNamespace);
            } catch (v) {
              if (v != null && typeof v.then === "function")
                throw Error(p(294));
              throw v;
            } finally {
            }
            h.length <= this.suspenseDepth && h.push("");
            h[this.suspenseDepth] += k;
          }
        }
        return h[0];
      } finally {
        Ta.current = c, X = b2, Fa();
      }
    };
    b.render = function(a2, b2, f) {
      if (typeof a2 === "string" || typeof a2 === "number") {
        f = "" + a2;
        if (f === "")
          return "";
        if (this.makeStaticMarkup)
          return O(f);
        if (this.previousWasTextNode)
          return "<!-- -->" + O(f);
        this.previousWasTextNode = true;
        return O(f);
      }
      b2 = bb(a2, b2, this.threadID);
      a2 = b2.child;
      b2 = b2.context;
      if (a2 === null || a2 === false)
        return "";
      if (!n.isValidElement(a2)) {
        if (a2 != null && a2.$$typeof != null) {
          f = a2.$$typeof;
          if (f === q)
            throw Error(p(257));
          throw Error(p(258, f.toString()));
        }
        a2 = Z(a2);
        this.stack.push({type: null, domNamespace: f, children: a2, childIndex: 0, context: b2, footer: ""});
        return "";
      }
      var c = a2.type;
      if (typeof c === "string")
        return this.renderDOM(a2, b2, f);
      switch (c) {
        case la:
        case ka:
        case u:
        case z:
        case da:
        case r:
          return a2 = Z(a2.props.children), this.stack.push({
            type: null,
            domNamespace: f,
            children: a2,
            childIndex: 0,
            context: b2,
            footer: ""
          }), "";
        case D:
          throw Error(p(294));
        case ja:
          throw Error(p(343));
      }
      if (typeof c === "object" && c !== null)
        switch (c.$$typeof) {
          case ca:
            P = {};
            var d = c.render(a2.props, a2.ref);
            d = Ea(c.render, a2.props, d, a2.ref);
            d = Z(d);
            this.stack.push({type: null, domNamespace: f, children: d, childIndex: 0, context: b2, footer: ""});
            return "";
          case ea:
            return a2 = [n.createElement(c.type, l({ref: a2.ref}, a2.props))], this.stack.push({type: null, domNamespace: f, children: a2, childIndex: 0, context: b2, footer: ""}), "";
          case B:
            return c = Z(a2.props.children), f = {type: a2, domNamespace: f, children: c, childIndex: 0, context: b2, footer: ""}, this.pushProvider(a2), this.stack.push(f), "";
          case ba:
            c = a2.type;
            d = a2.props;
            var g = this.threadID;
            I(c, g);
            c = Z(d.children(c[g]));
            this.stack.push({type: a2, domNamespace: f, children: c, childIndex: 0, context: b2, footer: ""});
            return "";
          case ia:
            throw Error(p(338));
          case fa:
            return c = a2.type, d = c._init, c = d(c._payload), a2 = [n.createElement(c, l({ref: a2.ref}, a2.props))], this.stack.push({
              type: null,
              domNamespace: f,
              children: a2,
              childIndex: 0,
              context: b2,
              footer: ""
            }), "";
        }
      throw Error(p(130, c == null ? c : typeof c, ""));
    };
    b.renderDOM = function(a2, b2, f) {
      var c = a2.type.toLowerCase();
      f === Ma.html && Na(c);
      if (!Wa.hasOwnProperty(c)) {
        if (!Va.test(c))
          throw Error(p(65, c));
        Wa[c] = true;
      }
      var d = a2.props;
      if (c === "input")
        d = l({type: void 0}, d, {defaultChecked: void 0, defaultValue: void 0, value: d.value != null ? d.value : d.defaultValue, checked: d.checked != null ? d.checked : d.defaultChecked});
      else if (c === "textarea") {
        var g = d.value;
        if (g == null) {
          g = d.defaultValue;
          var e = d.children;
          if (e != null) {
            if (g != null)
              throw Error(p(92));
            if (Array.isArray(e)) {
              if (!(1 >= e.length))
                throw Error(p(93));
              e = e[0];
            }
            g = "" + e;
          }
          g == null && (g = "");
        }
        d = l({}, d, {value: void 0, children: "" + g});
      } else if (c === "select")
        this.currentSelectValue = d.value != null ? d.value : d.defaultValue, d = l({}, d, {value: void 0});
      else if (c === "option") {
        e = this.currentSelectValue;
        var L = Ya(d.children);
        if (e != null) {
          var G = d.value != null ? d.value + "" : L;
          g = false;
          if (Array.isArray(e))
            for (var C = 0; C < e.length; C++) {
              if ("" + e[C] === G) {
                g = true;
                break;
              }
            }
          else
            g = "" + e === G;
          d = l({selected: void 0, children: void 0}, d, {selected: g, children: L});
        }
      }
      if (g = d) {
        if (Pa[c] && (g.children != null || g.dangerouslySetInnerHTML != null))
          throw Error(p(137, c));
        if (g.dangerouslySetInnerHTML != null) {
          if (g.children != null)
            throw Error(p(60));
          if (!(typeof g.dangerouslySetInnerHTML === "object" && "__html" in g.dangerouslySetInnerHTML))
            throw Error(p(61));
        }
        if (g.style != null && typeof g.style !== "object")
          throw Error(p(62));
      }
      g = d;
      e = this.makeStaticMarkup;
      L = this.stack.length === 1;
      G = "<" + a2.type;
      b:
        if (c.indexOf("-") === -1)
          C = typeof g.is === "string";
        else
          switch (c) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              C = false;
              break b;
            default:
              C = true;
          }
      for (w in g)
        if (Za.call(g, w)) {
          var m = g[w];
          if (m != null) {
            if (w === "style") {
              var k = void 0, v = "", H = "";
              for (k in m)
                if (m.hasOwnProperty(k)) {
                  var x = k.indexOf("--") === 0, y = m[k];
                  if (y != null) {
                    if (x)
                      var A = k;
                    else if (A = k, Xa.hasOwnProperty(A))
                      A = Xa[A];
                    else {
                      var eb = A.replace(Ra, "-$1").toLowerCase().replace(Sa, "-ms-");
                      A = Xa[A] = eb;
                    }
                    v += H + A + ":";
                    H = k;
                    x = y == null || typeof y === "boolean" || y === "" ? "" : x || typeof y !== "number" || y === 0 || Y.hasOwnProperty(H) && Y[H] ? ("" + y).trim() : y + "px";
                    v += x;
                    H = ";";
                  }
                }
              m = v || null;
            }
            k = null;
            C ? $a.hasOwnProperty(w) || (k = w, k = ta(k) && m != null ? k + '="' + (O(m) + '"') : "") : k = za(w, m);
            k && (G += " " + k);
          }
        }
      e || L && (G += ' data-reactroot=""');
      var w = G;
      g = "";
      Oa.hasOwnProperty(c) ? w += "/>" : (w += ">", g = "</" + a2.type + ">");
      a: {
        e = d.dangerouslySetInnerHTML;
        if (e != null) {
          if (e.__html != null) {
            e = e.__html;
            break a;
          }
        } else if (e = d.children, typeof e === "string" || typeof e === "number") {
          e = O(e);
          break a;
        }
        e = null;
      }
      e != null ? (d = [], Ua.hasOwnProperty(c) && e.charAt(0) === "\n" && (w += "\n"), w += e) : d = Z(d.children);
      a2 = a2.type;
      f = f == null || f === "http://www.w3.org/1999/xhtml" ? Na(a2) : f === "http://www.w3.org/2000/svg" && a2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : f;
      this.stack.push({domNamespace: f, type: c, children: d, childIndex: 0, context: b2, footer: g});
      this.previousWasTextNode = false;
      return w;
    };
    return a;
  }();
  function db(a, b) {
    a.prototype = Object.create(b.prototype);
    a.prototype.constructor = a;
    a.__proto__ = b;
  }
  var fb = function(a) {
    function b(b2, c2, h) {
      var d = a.call(this, {}) || this;
      d.partialRenderer = new cb(b2, c2, h);
      return d;
    }
    db(b, a);
    var c = b.prototype;
    c._destroy = function(a2, b2) {
      this.partialRenderer.destroy();
      b2(a2);
    };
    c._read = function(a2) {
      try {
        this.push(this.partialRenderer.read(a2));
      } catch (f) {
        this.destroy(f);
      }
    };
    return b;
  }(aa.Readable);
  exports2.renderToNodeStream = function(a, b) {
    return new fb(a, false, b);
  };
  exports2.renderToStaticMarkup = function(a, b) {
    a = new cb(a, true, b);
    try {
      return a.read(Infinity);
    } finally {
      a.destroy();
    }
  };
  exports2.renderToStaticNodeStream = function(a, b) {
    return new fb(a, true, b);
  };
  exports2.renderToString = function(a, b) {
    a = new cb(a, false, b);
    try {
      return a.read(Infinity);
    } finally {
      a.destroy();
    }
  };
  exports2.version = "17.0.1";
});

// node_modules/react-dom/server.node.js
var require_server_node = __commonJS((exports2, module2) => {
  "use strict";
  if (true) {
    module2.exports = require_react_dom_server_node_production_min();
  } else {
    module2.exports = null;
  }
});

// node_modules/react-dom/server.js
var require_server = __commonJS((exports2, module2) => {
  "use strict";
  module2.exports = require_server_node();
});

// src/index.ts
var import_express = __toModule(require("express"));

// src/app/index.tsx
var import_react = __toModule(require_react());
var import_server = __toModule(require_server());
var App = /* @__PURE__ */ import_react.default.createElement("h1", null, "hello world from my react server side app!");
var app_default = import_server.default.renderToString(App);

// src/index.ts
var app = (0, import_express.default)();
console.log(app_default);
app.use("*", (_, res) => {
  res.send(app_default);
});
app.listen(3e3, () => {
  console.log("server listen on port 3000!");
});
