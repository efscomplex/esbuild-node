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

// node_modules/axios/lib/helpers/bind.js
var require_bind = __commonJS((exports2, module2) => {
  "use strict";
  module2.exports = function bind(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      return fn.apply(thisArg, args);
    };
  };
});

// node_modules/axios/lib/utils.js
var require_utils = __commonJS((exports2, module2) => {
  "use strict";
  var bind = require_bind();
  var toString = Object.prototype.toString;
  function isArray(val) {
    return toString.call(val) === "[object Array]";
  }
  function isUndefined(val) {
    return typeof val === "undefined";
  }
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
  }
  function isArrayBuffer(val) {
    return toString.call(val) === "[object ArrayBuffer]";
  }
  function isFormData(val) {
    return typeof FormData !== "undefined" && val instanceof FormData;
  }
  function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && val.buffer instanceof ArrayBuffer;
    }
    return result;
  }
  function isString(val) {
    return typeof val === "string";
  }
  function isNumber(val) {
    return typeof val === "number";
  }
  function isObject(val) {
    return val !== null && typeof val === "object";
  }
  function isPlainObject(val) {
    if (toString.call(val) !== "[object Object]") {
      return false;
    }
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
  }
  function isDate(val) {
    return toString.call(val) === "[object Date]";
  }
  function isFile(val) {
    return toString.call(val) === "[object File]";
  }
  function isBlob(val) {
    return toString.call(val) === "[object Blob]";
  }
  function isFunction(val) {
    return toString.call(val) === "[object Function]";
  }
  function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
  }
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
  }
  function trim(str) {
    return str.replace(/^\s*/, "").replace(/\s*$/, "");
  }
  function isStandardBrowserEnv() {
    if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
      return false;
    }
    return typeof window !== "undefined" && typeof document !== "undefined";
  }
  function forEach(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function merge() {
    var result = {};
    function assignValue(val, key) {
      if (isPlainObject(result[key]) && isPlainObject(val)) {
        result[key] = merge(result[key], val);
      } else if (isPlainObject(val)) {
        result[key] = merge({}, val);
      } else if (isArray(val)) {
        result[key] = val.slice();
      } else {
        result[key] = val;
      }
    }
    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }
  function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
      if (thisArg && typeof val === "function") {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }
  function stripBOM(content) {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  }
  module2.exports = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isObject,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isFunction,
    isStream,
    isURLSearchParams,
    isStandardBrowserEnv,
    forEach,
    merge,
    extend,
    trim,
    stripBOM
  };
});

// node_modules/axios/lib/helpers/buildURL.js
var require_buildURL = __commonJS((exports2, module2) => {
  "use strict";
  var utils = require_utils();
  function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  module2.exports = function buildURL(url, params, paramsSerializer) {
    if (!params) {
      return url;
    }
    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];
      utils.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (utils.isArray(val)) {
          key = key + "[]";
        } else {
          val = [val];
        }
        utils.forEach(val, function parseValue(v) {
          if (utils.isDate(v)) {
            v = v.toISOString();
          } else if (utils.isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(encode(key) + "=" + encode(v));
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      var hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  };
});

// node_modules/axios/lib/core/InterceptorManager.js
var require_InterceptorManager = __commonJS((exports2, module2) => {
  "use strict";
  var utils = require_utils();
  function InterceptorManager() {
    this.handlers = [];
  }
  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected
    });
    return this.handlers.length - 1;
  };
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };
  module2.exports = InterceptorManager;
});

// node_modules/axios/lib/core/transformData.js
var require_transformData = __commonJS((exports2, module2) => {
  "use strict";
  var utils = require_utils();
  module2.exports = function transformData(data, headers, fns) {
    utils.forEach(fns, function transform(fn) {
      data = fn(data, headers);
    });
    return data;
  };
});

// node_modules/axios/lib/cancel/isCancel.js
var require_isCancel = __commonJS((exports2, module2) => {
  "use strict";
  module2.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
  };
});

// node_modules/axios/lib/helpers/normalizeHeaderName.js
var require_normalizeHeaderName = __commonJS((exports2, module2) => {
  "use strict";
  var utils = require_utils();
  module2.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
      if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
        headers[normalizedName] = value;
        delete headers[name];
      }
    });
  };
});

// node_modules/axios/lib/core/enhanceError.js
var require_enhanceError = __commonJS((exports2, module2) => {
  "use strict";
  module2.exports = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) {
      error.code = code;
    }
    error.request = request;
    error.response = response;
    error.isAxiosError = true;
    error.toJSON = function toJSON() {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: this.config,
        code: this.code
      };
    };
    return error;
  };
});

// node_modules/axios/lib/core/createError.js
var require_createError = __commonJS((exports2, module2) => {
  "use strict";
  var enhanceError = require_enhanceError();
  module2.exports = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
  };
});

// node_modules/axios/lib/core/settle.js
var require_settle = __commonJS((exports2, module2) => {
  "use strict";
  var createError = require_createError();
  module2.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
    }
  };
});

// node_modules/axios/lib/helpers/cookies.js
var require_cookies = __commonJS((exports2, module2) => {
  "use strict";
  var utils = require_utils();
  module2.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + "=" + encodeURIComponent(value));
        if (utils.isNumber(expires)) {
          cookie.push("expires=" + new Date(expires).toGMTString());
        }
        if (utils.isString(path)) {
          cookie.push("path=" + path);
        }
        if (utils.isString(domain)) {
          cookie.push("domain=" + domain);
        }
        if (secure === true) {
          cookie.push("secure");
        }
        document.cookie = cookie.join("; ");
      },
      read: function read(name) {
        var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove: function remove(name) {
        this.write(name, "", Date.now() - 864e5);
      }
    };
  }() : function nonStandardBrowserEnv() {
    return {
      write: function write() {
      },
      read: function read() {
        return null;
      },
      remove: function remove() {
      }
    };
  }();
});

// node_modules/axios/lib/helpers/isAbsoluteURL.js
var require_isAbsoluteURL = __commonJS((exports2, module2) => {
  "use strict";
  module2.exports = function isAbsoluteURL(url) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  };
});

// node_modules/axios/lib/helpers/combineURLs.js
var require_combineURLs = __commonJS((exports2, module2) => {
  "use strict";
  module2.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  };
});

// node_modules/axios/lib/core/buildFullPath.js
var require_buildFullPath = __commonJS((exports2, module2) => {
  "use strict";
  var isAbsoluteURL = require_isAbsoluteURL();
  var combineURLs = require_combineURLs();
  module2.exports = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  };
});

// node_modules/axios/lib/helpers/parseHeaders.js
var require_parseHeaders = __commonJS((exports2, module2) => {
  "use strict";
  var utils = require_utils();
  var ignoreDuplicateOf = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  module2.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) {
      return parsed;
    }
    utils.forEach(headers.split("\n"), function parser(line) {
      i = line.indexOf(":");
      key = utils.trim(line.substr(0, i)).toLowerCase();
      val = utils.trim(line.substr(i + 1));
      if (key) {
        if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
          return;
        }
        if (key === "set-cookie") {
          parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
        }
      }
    });
    return parsed;
  };
});

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var require_isURLSameOrigin = __commonJS((exports2, module2) => {
  "use strict";
  var utils = require_utils();
  module2.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement("a");
    var originURL;
    function resolveURL(url) {
      var href = url;
      if (msie) {
        urlParsingNode.setAttribute("href", href);
        href = urlParsingNode.href;
      }
      urlParsingNode.setAttribute("href", href);
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
      };
    }
    originURL = resolveURL(window.location.href);
    return function isURLSameOrigin(requestURL) {
      var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }() : function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  }();
});

// node_modules/axios/lib/adapters/xhr.js
var require_xhr = __commonJS((exports2, module2) => {
  "use strict";
  var utils = require_utils();
  var settle = require_settle();
  var cookies = require_cookies();
  var buildURL = require_buildURL();
  var buildFullPath = require_buildFullPath();
  var parseHeaders = require_parseHeaders();
  var isURLSameOrigin = require_isURLSameOrigin();
  var createError = require_createError();
  module2.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config.data;
      var requestHeaders = config.headers;
      if (utils.isFormData(requestData)) {
        delete requestHeaders["Content-Type"];
      }
      var request = new XMLHttpRequest();
      if (config.auth) {
        var username = config.auth.username || "";
        var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
        requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
      }
      var fullPath = buildFullPath(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
      request.timeout = config.timeout;
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
        var responseData = !config.responseType || config.responseType === "text" ? request.responseText : request.response;
        var response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };
        settle(resolve, reject, response);
        request = null;
      };
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(createError("Request aborted", config, "ECONNABORTED", request));
        request = null;
      };
      request.onerror = function handleError() {
        reject(createError("Network Error", config, null, request));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        var timeoutErrorMessage = "timeout of " + config.timeout + "ms exceeded";
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(createError(timeoutErrorMessage, config, "ECONNABORTED", request));
        request = null;
      };
      if (utils.isStandardBrowserEnv()) {
        var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
        if (xsrfValue) {
          requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
      }
      if ("setRequestHeader" in request) {
        utils.forEach(requestHeaders, function setRequestHeader(val, key) {
          if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
            delete requestHeaders[key];
          } else {
            request.setRequestHeader(key, val);
          }
        });
      }
      if (!utils.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }
      if (config.responseType) {
        try {
          request.responseType = config.responseType;
        } catch (e) {
          if (config.responseType !== "json") {
            throw e;
          }
        }
      }
      if (typeof config.onDownloadProgress === "function") {
        request.addEventListener("progress", config.onDownloadProgress);
      }
      if (typeof config.onUploadProgress === "function" && request.upload) {
        request.upload.addEventListener("progress", config.onUploadProgress);
      }
      if (config.cancelToken) {
        config.cancelToken.promise.then(function onCanceled(cancel) {
          if (!request) {
            return;
          }
          request.abort();
          reject(cancel);
          request = null;
        });
      }
      if (!requestData) {
        requestData = null;
      }
      request.send(requestData);
    });
  };
});

// node_modules/ms/index.js
var require_ms = __commonJS((exports2, module2) => {
  var s = 1e3;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var y = d * 365.25;
  module2.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
      return parse(val);
    } else if (type === "number" && isNaN(val) === false) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
  };
  function parse(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
      return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch (type) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n * y;
      case "days":
      case "day":
      case "d":
        return n * d;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n * h;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n * m;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n * s;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n;
      default:
        return void 0;
    }
  }
  function fmtShort(ms) {
    if (ms >= d) {
      return Math.round(ms / d) + "d";
    }
    if (ms >= h) {
      return Math.round(ms / h) + "h";
    }
    if (ms >= m) {
      return Math.round(ms / m) + "m";
    }
    if (ms >= s) {
      return Math.round(ms / s) + "s";
    }
    return ms + "ms";
  }
  function fmtLong(ms) {
    return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
  }
  function plural(ms, n, name) {
    if (ms < n) {
      return;
    }
    if (ms < n * 1.5) {
      return Math.floor(ms / n) + " " + name;
    }
    return Math.ceil(ms / n) + " " + name + "s";
  }
});

// node_modules/debug/src/debug.js
var require_debug = __commonJS((exports2, module2) => {
  exports2 = module2.exports = createDebug.debug = createDebug["default"] = createDebug;
  exports2.coerce = coerce;
  exports2.disable = disable;
  exports2.enable = enable;
  exports2.enabled = enabled;
  exports2.humanize = require_ms();
  exports2.names = [];
  exports2.skips = [];
  exports2.formatters = {};
  var prevTime;
  function selectColor(namespace) {
    var hash = 0, i;
    for (i in namespace) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0;
    }
    return exports2.colors[Math.abs(hash) % exports2.colors.length];
  }
  function createDebug(namespace) {
    function debug() {
      if (!debug.enabled)
        return;
      var self = debug;
      var curr = +new Date();
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      args[0] = exports2.coerce(args[0]);
      if (typeof args[0] !== "string") {
        args.unshift("%O");
      }
      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
        if (match === "%%")
          return match;
        index++;
        var formatter = exports2.formatters[format];
        if (typeof formatter === "function") {
          var val = args[index];
          match = formatter.call(self, val);
          args.splice(index, 1);
          index--;
        }
        return match;
      });
      exports2.formatArgs.call(self, args);
      var logFn = debug.log || exports2.log || console.log.bind(console);
      logFn.apply(self, args);
    }
    debug.namespace = namespace;
    debug.enabled = exports2.enabled(namespace);
    debug.useColors = exports2.useColors();
    debug.color = selectColor(namespace);
    if (typeof exports2.init === "function") {
      exports2.init(debug);
    }
    return debug;
  }
  function enable(namespaces) {
    exports2.save(namespaces);
    exports2.names = [];
    exports2.skips = [];
    var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
    var len = split.length;
    for (var i = 0; i < len; i++) {
      if (!split[i])
        continue;
      namespaces = split[i].replace(/\*/g, ".*?");
      if (namespaces[0] === "-") {
        exports2.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
      } else {
        exports2.names.push(new RegExp("^" + namespaces + "$"));
      }
    }
  }
  function disable() {
    exports2.enable("");
  }
  function enabled(name) {
    var i, len;
    for (i = 0, len = exports2.skips.length; i < len; i++) {
      if (exports2.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = exports2.names.length; i < len; i++) {
      if (exports2.names[i].test(name)) {
        return true;
      }
    }
    return false;
  }
  function coerce(val) {
    if (val instanceof Error)
      return val.stack || val.message;
    return val;
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS((exports2, module2) => {
  exports2 = module2.exports = require_debug();
  exports2.log = log;
  exports2.formatArgs = formatArgs;
  exports2.save = save;
  exports2.load = load;
  exports2.useColors = useColors;
  exports2.storage = typeof chrome != "undefined" && typeof chrome.storage != "undefined" ? chrome.storage.local : localstorage();
  exports2.colors = [
    "lightseagreen",
    "forestgreen",
    "goldenrod",
    "dodgerblue",
    "darkorchid",
    "crimson"
  ];
  function useColors() {
    if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
      return true;
    }
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  exports2.formatters.j = function(v) {
    try {
      return JSON.stringify(v);
    } catch (err) {
      return "[UnexpectedJSONParseError]: " + err.message;
    }
  };
  function formatArgs(args) {
    var useColors2 = this.useColors;
    args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports2.humanize(this.diff);
    if (!useColors2)
      return;
    var c = "color: " + this.color;
    args.splice(1, 0, c, "color: inherit");
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function(match) {
      if (match === "%%")
        return;
      index++;
      if (match === "%c") {
        lastC = index;
      }
    });
    args.splice(lastC, 0, c);
  }
  function log() {
    return typeof console === "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
  }
  function save(namespaces) {
    try {
      if (namespaces == null) {
        exports2.storage.removeItem("debug");
      } else {
        exports2.storage.debug = namespaces;
      }
    } catch (e) {
    }
  }
  function load() {
    var r;
    try {
      r = exports2.storage.debug;
    } catch (e) {
    }
    if (!r && typeof process !== "undefined" && "env" in process) {
      r = process.env.DEBUG;
    }
    return r;
  }
  exports2.enable(load());
  function localstorage() {
    try {
      return window.localStorage;
    } catch (e) {
    }
  }
});

// node_modules/debug/src/node.js
var require_node = __commonJS((exports2, module2) => {
  var tty = require("tty");
  var util = require("util");
  exports2 = module2.exports = require_debug();
  exports2.init = init;
  exports2.log = log;
  exports2.formatArgs = formatArgs;
  exports2.save = save;
  exports2.load = load;
  exports2.useColors = useColors;
  exports2.colors = [6, 2, 3, 4, 5, 1];
  exports2.inspectOpts = Object.keys(process.env).filter(function(key) {
    return /^debug_/i.test(key);
  }).reduce(function(obj, key) {
    var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function(_, k) {
      return k.toUpperCase();
    });
    var val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val))
      val = true;
    else if (/^(no|off|false|disabled)$/i.test(val))
      val = false;
    else if (val === "null")
      val = null;
    else
      val = Number(val);
    obj[prop] = val;
    return obj;
  }, {});
  var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
  if (fd !== 1 && fd !== 2) {
    util.deprecate(function() {
    }, "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
  }
  var stream = fd === 1 ? process.stdout : fd === 2 ? process.stderr : createWritableStdioStream(fd);
  function useColors() {
    return "colors" in exports2.inspectOpts ? Boolean(exports2.inspectOpts.colors) : tty.isatty(fd);
  }
  exports2.formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split("\n").map(function(str) {
      return str.trim();
    }).join(" ");
  };
  exports2.formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
  };
  function formatArgs(args) {
    var name = this.namespace;
    var useColors2 = this.useColors;
    if (useColors2) {
      var c = this.color;
      var prefix = "  [3" + c + ";1m" + name + " [0m";
      args[0] = prefix + args[0].split("\n").join("\n" + prefix);
      args.push("[3" + c + "m+" + exports2.humanize(this.diff) + "[0m");
    } else {
      args[0] = new Date().toUTCString() + " " + name + " " + args[0];
    }
  }
  function log() {
    return stream.write(util.format.apply(util, arguments) + "\n");
  }
  function save(namespaces) {
    if (namespaces == null) {
      delete process.env.DEBUG;
    } else {
      process.env.DEBUG = namespaces;
    }
  }
  function load() {
    return process.env.DEBUG;
  }
  function createWritableStdioStream(fd2) {
    var stream2;
    var tty_wrap = process.binding("tty_wrap");
    switch (tty_wrap.guessHandleType(fd2)) {
      case "TTY":
        stream2 = new tty.WriteStream(fd2);
        stream2._type = "tty";
        if (stream2._handle && stream2._handle.unref) {
          stream2._handle.unref();
        }
        break;
      case "FILE":
        var fs = require("fs");
        stream2 = new fs.SyncWriteStream(fd2, {autoClose: false});
        stream2._type = "fs";
        break;
      case "PIPE":
      case "TCP":
        var net = require("net");
        stream2 = new net.Socket({
          fd: fd2,
          readable: false,
          writable: true
        });
        stream2.readable = false;
        stream2.read = null;
        stream2._type = "pipe";
        if (stream2._handle && stream2._handle.unref) {
          stream2._handle.unref();
        }
        break;
      default:
        throw new Error("Implement me. Unknown stream file type!");
    }
    stream2.fd = fd2;
    stream2._isStdio = true;
    return stream2;
  }
  function init(debug) {
    debug.inspectOpts = {};
    var keys = Object.keys(exports2.inspectOpts);
    for (var i = 0; i < keys.length; i++) {
      debug.inspectOpts[keys[i]] = exports2.inspectOpts[keys[i]];
    }
  }
  exports2.enable(load());
});

// node_modules/debug/src/index.js
var require_src = __commonJS((exports2, module2) => {
  if (typeof process !== "undefined" && process.type === "renderer") {
    module2.exports = require_browser();
  } else {
    module2.exports = require_node();
  }
});

// node_modules/follow-redirects/debug.js
var require_debug2 = __commonJS((exports2, module2) => {
  var debug;
  module2.exports = function() {
    if (!debug) {
      try {
        debug = require_src()("follow-redirects");
      } catch (error) {
        debug = function() {
        };
      }
    }
    debug.apply(null, arguments);
  };
});

// node_modules/follow-redirects/index.js
var require_follow_redirects = __commonJS((exports2, module2) => {
  var url = require("url");
  var URL = url.URL;
  var http = require("http");
  var https = require("https");
  var Writable = require("stream").Writable;
  var assert = require("assert");
  var debug = require_debug2();
  var eventHandlers = Object.create(null);
  ["abort", "aborted", "connect", "error", "socket", "timeout"].forEach(function(event) {
    eventHandlers[event] = function(arg1, arg2, arg3) {
      this._redirectable.emit(event, arg1, arg2, arg3);
    };
  });
  var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "");
  var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded");
  var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
  var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
  function RedirectableRequest(options, responseCallback) {
    Writable.call(this);
    this._sanitizeOptions(options);
    this._options = options;
    this._ended = false;
    this._ending = false;
    this._redirectCount = 0;
    this._redirects = [];
    this._requestBodyLength = 0;
    this._requestBodyBuffers = [];
    if (responseCallback) {
      this.on("response", responseCallback);
    }
    var self = this;
    this._onNativeResponse = function(response) {
      self._processResponse(response);
    };
    this._performRequest();
  }
  RedirectableRequest.prototype = Object.create(Writable.prototype);
  RedirectableRequest.prototype.abort = function() {
    this._currentRequest.removeAllListeners();
    this._currentRequest.on("error", noop);
    this._currentRequest.abort();
    this.emit("abort");
    this.removeAllListeners();
  };
  RedirectableRequest.prototype.write = function(data, encoding, callback) {
    if (this._ending) {
      throw new WriteAfterEndError();
    }
    if (!(typeof data === "string" || typeof data === "object" && "length" in data)) {
      throw new TypeError("data should be a string, Buffer or Uint8Array");
    }
    if (typeof encoding === "function") {
      callback = encoding;
      encoding = null;
    }
    if (data.length === 0) {
      if (callback) {
        callback();
      }
      return;
    }
    if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
      this._requestBodyLength += data.length;
      this._requestBodyBuffers.push({data, encoding});
      this._currentRequest.write(data, encoding, callback);
    } else {
      this.emit("error", new MaxBodyLengthExceededError());
      this.abort();
    }
  };
  RedirectableRequest.prototype.end = function(data, encoding, callback) {
    if (typeof data === "function") {
      callback = data;
      data = encoding = null;
    } else if (typeof encoding === "function") {
      callback = encoding;
      encoding = null;
    }
    if (!data) {
      this._ended = this._ending = true;
      this._currentRequest.end(null, null, callback);
    } else {
      var self = this;
      var currentRequest = this._currentRequest;
      this.write(data, encoding, function() {
        self._ended = true;
        currentRequest.end(null, null, callback);
      });
      this._ending = true;
    }
  };
  RedirectableRequest.prototype.setHeader = function(name, value) {
    this._options.headers[name] = value;
    this._currentRequest.setHeader(name, value);
  };
  RedirectableRequest.prototype.removeHeader = function(name) {
    delete this._options.headers[name];
    this._currentRequest.removeHeader(name);
  };
  RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
    var self = this;
    if (callback) {
      this.on("timeout", callback);
    }
    function startTimer() {
      if (self._timeout) {
        clearTimeout(self._timeout);
      }
      self._timeout = setTimeout(function() {
        self.emit("timeout");
        clearTimer();
      }, msecs);
    }
    function clearTimer() {
      clearTimeout(this._timeout);
      if (callback) {
        self.removeListener("timeout", callback);
      }
      if (!this.socket) {
        self._currentRequest.removeListener("socket", startTimer);
      }
    }
    if (this.socket) {
      startTimer();
    } else {
      this._currentRequest.once("socket", startTimer);
    }
    this.once("response", clearTimer);
    this.once("error", clearTimer);
    return this;
  };
  [
    "flushHeaders",
    "getHeader",
    "setNoDelay",
    "setSocketKeepAlive"
  ].forEach(function(method) {
    RedirectableRequest.prototype[method] = function(a, b) {
      return this._currentRequest[method](a, b);
    };
  });
  ["aborted", "connection", "socket"].forEach(function(property) {
    Object.defineProperty(RedirectableRequest.prototype, property, {
      get: function() {
        return this._currentRequest[property];
      }
    });
  });
  RedirectableRequest.prototype._sanitizeOptions = function(options) {
    if (!options.headers) {
      options.headers = {};
    }
    if (options.host) {
      if (!options.hostname) {
        options.hostname = options.host;
      }
      delete options.host;
    }
    if (!options.pathname && options.path) {
      var searchPos = options.path.indexOf("?");
      if (searchPos < 0) {
        options.pathname = options.path;
      } else {
        options.pathname = options.path.substring(0, searchPos);
        options.search = options.path.substring(searchPos);
      }
    }
  };
  RedirectableRequest.prototype._performRequest = function() {
    var protocol = this._options.protocol;
    var nativeProtocol = this._options.nativeProtocols[protocol];
    if (!nativeProtocol) {
      this.emit("error", new TypeError("Unsupported protocol " + protocol));
      return;
    }
    if (this._options.agents) {
      var scheme = protocol.substr(0, protocol.length - 1);
      this._options.agent = this._options.agents[scheme];
    }
    var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
    this._currentUrl = url.format(this._options);
    request._redirectable = this;
    for (var event in eventHandlers) {
      if (event) {
        request.on(event, eventHandlers[event]);
      }
    }
    if (this._isRedirect) {
      var i = 0;
      var self = this;
      var buffers = this._requestBodyBuffers;
      (function writeNext(error) {
        if (request === self._currentRequest) {
          if (error) {
            self.emit("error", error);
          } else if (i < buffers.length) {
            var buffer = buffers[i++];
            if (!request.finished) {
              request.write(buffer.data, buffer.encoding, writeNext);
            }
          } else if (self._ended) {
            request.end();
          }
        }
      })();
    }
  };
  RedirectableRequest.prototype._processResponse = function(response) {
    var statusCode = response.statusCode;
    if (this._options.trackRedirects) {
      this._redirects.push({
        url: this._currentUrl,
        headers: response.headers,
        statusCode
      });
    }
    var location = response.headers.location;
    if (location && this._options.followRedirects !== false && statusCode >= 300 && statusCode < 400) {
      this._currentRequest.removeAllListeners();
      this._currentRequest.on("error", noop);
      this._currentRequest.abort();
      response.destroy();
      if (++this._redirectCount > this._options.maxRedirects) {
        this.emit("error", new TooManyRedirectsError());
        return;
      }
      if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
        this._options.method = "GET";
        this._requestBodyBuffers = [];
        removeMatchingHeaders(/^content-/i, this._options.headers);
      }
      var previousHostName = removeMatchingHeaders(/^host$/i, this._options.headers) || url.parse(this._currentUrl).hostname;
      var redirectUrl = url.resolve(this._currentUrl, location);
      debug("redirecting to", redirectUrl);
      this._isRedirect = true;
      var redirectUrlParts = url.parse(redirectUrl);
      Object.assign(this._options, redirectUrlParts);
      if (redirectUrlParts.hostname !== previousHostName) {
        removeMatchingHeaders(/^authorization$/i, this._options.headers);
      }
      if (typeof this._options.beforeRedirect === "function") {
        var responseDetails = {headers: response.headers};
        try {
          this._options.beforeRedirect.call(null, this._options, responseDetails);
        } catch (err) {
          this.emit("error", err);
          return;
        }
        this._sanitizeOptions(this._options);
      }
      try {
        this._performRequest();
      } catch (cause) {
        var error = new RedirectionError("Redirected request failed: " + cause.message);
        error.cause = cause;
        this.emit("error", error);
      }
    } else {
      response.responseUrl = this._currentUrl;
      response.redirects = this._redirects;
      this.emit("response", response);
      this._requestBodyBuffers = [];
    }
  };
  function wrap(protocols) {
    var exports3 = {
      maxRedirects: 21,
      maxBodyLength: 10 * 1024 * 1024
    };
    var nativeProtocols = {};
    Object.keys(protocols).forEach(function(scheme) {
      var protocol = scheme + ":";
      var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
      var wrappedProtocol = exports3[scheme] = Object.create(nativeProtocol);
      function request(input, options, callback) {
        if (typeof input === "string") {
          var urlStr = input;
          try {
            input = urlToOptions(new URL(urlStr));
          } catch (err) {
            input = url.parse(urlStr);
          }
        } else if (URL && input instanceof URL) {
          input = urlToOptions(input);
        } else {
          callback = options;
          options = input;
          input = {protocol};
        }
        if (typeof options === "function") {
          callback = options;
          options = null;
        }
        options = Object.assign({
          maxRedirects: exports3.maxRedirects,
          maxBodyLength: exports3.maxBodyLength
        }, input, options);
        options.nativeProtocols = nativeProtocols;
        assert.equal(options.protocol, protocol, "protocol mismatch");
        debug("options", options);
        return new RedirectableRequest(options, callback);
      }
      function get(input, options, callback) {
        var wrappedRequest = wrappedProtocol.request(input, options, callback);
        wrappedRequest.end();
        return wrappedRequest;
      }
      Object.defineProperties(wrappedProtocol, {
        request: {value: request, configurable: true, enumerable: true, writable: true},
        get: {value: get, configurable: true, enumerable: true, writable: true}
      });
    });
    return exports3;
  }
  function noop() {
  }
  function urlToOptions(urlObject) {
    var options = {
      protocol: urlObject.protocol,
      hostname: urlObject.hostname.startsWith("[") ? urlObject.hostname.slice(1, -1) : urlObject.hostname,
      hash: urlObject.hash,
      search: urlObject.search,
      pathname: urlObject.pathname,
      path: urlObject.pathname + urlObject.search,
      href: urlObject.href
    };
    if (urlObject.port !== "") {
      options.port = Number(urlObject.port);
    }
    return options;
  }
  function removeMatchingHeaders(regex, headers) {
    var lastValue;
    for (var header in headers) {
      if (regex.test(header)) {
        lastValue = headers[header];
        delete headers[header];
      }
    }
    return lastValue;
  }
  function createErrorType(code, defaultMessage) {
    function CustomError(message) {
      Error.captureStackTrace(this, this.constructor);
      this.message = message || defaultMessage;
    }
    CustomError.prototype = new Error();
    CustomError.prototype.constructor = CustomError;
    CustomError.prototype.name = "Error [" + code + "]";
    CustomError.prototype.code = code;
    return CustomError;
  }
  module2.exports = wrap({http, https});
  module2.exports.wrap = wrap;
});

// node_modules/axios/package.json
var require_package = __commonJS((exports2, module2) => {
  module2.exports = {
    name: "axios",
    version: "0.21.1",
    description: "Promise based HTTP client for the browser and node.js",
    main: "index.js",
    scripts: {
      test: "grunt test && bundlesize",
      start: "node ./sandbox/server.js",
      build: "NODE_ENV=production grunt build",
      preversion: "npm test",
      version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
      postversion: "git push && git push --tags",
      examples: "node ./examples/server.js",
      coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
      fix: "eslint --fix lib/**/*.js"
    },
    repository: {
      type: "git",
      url: "https://github.com/axios/axios.git"
    },
    keywords: [
      "xhr",
      "http",
      "ajax",
      "promise",
      "node"
    ],
    author: "Matt Zabriskie",
    license: "MIT",
    bugs: {
      url: "https://github.com/axios/axios/issues"
    },
    homepage: "https://github.com/axios/axios",
    devDependencies: {
      bundlesize: "^0.17.0",
      coveralls: "^3.0.0",
      "es6-promise": "^4.2.4",
      grunt: "^1.0.2",
      "grunt-banner": "^0.6.0",
      "grunt-cli": "^1.2.0",
      "grunt-contrib-clean": "^1.1.0",
      "grunt-contrib-watch": "^1.0.0",
      "grunt-eslint": "^20.1.0",
      "grunt-karma": "^2.0.0",
      "grunt-mocha-test": "^0.13.3",
      "grunt-ts": "^6.0.0-beta.19",
      "grunt-webpack": "^1.0.18",
      "istanbul-instrumenter-loader": "^1.0.0",
      "jasmine-core": "^2.4.1",
      karma: "^1.3.0",
      "karma-chrome-launcher": "^2.2.0",
      "karma-coverage": "^1.1.1",
      "karma-firefox-launcher": "^1.1.0",
      "karma-jasmine": "^1.1.1",
      "karma-jasmine-ajax": "^0.1.13",
      "karma-opera-launcher": "^1.0.0",
      "karma-safari-launcher": "^1.0.0",
      "karma-sauce-launcher": "^1.2.0",
      "karma-sinon": "^1.0.5",
      "karma-sourcemap-loader": "^0.3.7",
      "karma-webpack": "^1.7.0",
      "load-grunt-tasks": "^3.5.2",
      minimist: "^1.2.0",
      mocha: "^5.2.0",
      sinon: "^4.5.0",
      typescript: "^2.8.1",
      "url-search-params": "^0.10.0",
      webpack: "^1.13.1",
      "webpack-dev-server": "^1.14.1"
    },
    browser: {
      "./lib/adapters/http.js": "./lib/adapters/xhr.js"
    },
    jsdelivr: "dist/axios.min.js",
    unpkg: "dist/axios.min.js",
    typings: "./index.d.ts",
    dependencies: {
      "follow-redirects": "^1.10.0"
    },
    bundlesize: [
      {
        path: "./dist/axios.min.js",
        threshold: "5kB"
      }
    ]
  };
});

// node_modules/axios/lib/adapters/http.js
var require_http = __commonJS((exports2, module2) => {
  "use strict";
  var utils = require_utils();
  var settle = require_settle();
  var buildFullPath = require_buildFullPath();
  var buildURL = require_buildURL();
  var http = require("http");
  var https = require("https");
  var httpFollow = require_follow_redirects().http;
  var httpsFollow = require_follow_redirects().https;
  var url = require("url");
  var zlib = require("zlib");
  var pkg = require_package();
  var createError = require_createError();
  var enhanceError = require_enhanceError();
  var isHttps = /https:?/;
  function setProxy(options, proxy, location) {
    options.hostname = proxy.host;
    options.host = proxy.host;
    options.port = proxy.port;
    options.path = location;
    if (proxy.auth) {
      var base64 = Buffer.from(proxy.auth.username + ":" + proxy.auth.password, "utf8").toString("base64");
      options.headers["Proxy-Authorization"] = "Basic " + base64;
    }
    options.beforeRedirect = function beforeRedirect(redirection) {
      redirection.headers.host = redirection.host;
      setProxy(redirection, proxy, redirection.href);
    };
  }
  module2.exports = function httpAdapter(config) {
    return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
      var resolve = function resolve2(value) {
        resolvePromise(value);
      };
      var reject = function reject2(value) {
        rejectPromise(value);
      };
      var data = config.data;
      var headers = config.headers;
      if (!headers["User-Agent"] && !headers["user-agent"]) {
        headers["User-Agent"] = "axios/" + pkg.version;
      }
      if (data && !utils.isStream(data)) {
        if (Buffer.isBuffer(data)) {
        } else if (utils.isArrayBuffer(data)) {
          data = Buffer.from(new Uint8Array(data));
        } else if (utils.isString(data)) {
          data = Buffer.from(data, "utf-8");
        } else {
          return reject(createError("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", config));
        }
        headers["Content-Length"] = data.length;
      }
      var auth = void 0;
      if (config.auth) {
        var username = config.auth.username || "";
        var password = config.auth.password || "";
        auth = username + ":" + password;
      }
      var fullPath = buildFullPath(config.baseURL, config.url);
      var parsed = url.parse(fullPath);
      var protocol = parsed.protocol || "http:";
      if (!auth && parsed.auth) {
        var urlAuth = parsed.auth.split(":");
        var urlUsername = urlAuth[0] || "";
        var urlPassword = urlAuth[1] || "";
        auth = urlUsername + ":" + urlPassword;
      }
      if (auth) {
        delete headers.Authorization;
      }
      var isHttpsRequest = isHttps.test(protocol);
      var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
      var options = {
        path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ""),
        method: config.method.toUpperCase(),
        headers,
        agent,
        agents: {http: config.httpAgent, https: config.httpsAgent},
        auth
      };
      if (config.socketPath) {
        options.socketPath = config.socketPath;
      } else {
        options.hostname = parsed.hostname;
        options.port = parsed.port;
      }
      var proxy = config.proxy;
      if (!proxy && proxy !== false) {
        var proxyEnv = protocol.slice(0, -1) + "_proxy";
        var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
        if (proxyUrl) {
          var parsedProxyUrl = url.parse(proxyUrl);
          var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
          var shouldProxy = true;
          if (noProxyEnv) {
            var noProxy = noProxyEnv.split(",").map(function trim(s) {
              return s.trim();
            });
            shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
              if (!proxyElement) {
                return false;
              }
              if (proxyElement === "*") {
                return true;
              }
              if (proxyElement[0] === "." && parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
                return true;
              }
              return parsed.hostname === proxyElement;
            });
          }
          if (shouldProxy) {
            proxy = {
              host: parsedProxyUrl.hostname,
              port: parsedProxyUrl.port,
              protocol: parsedProxyUrl.protocol
            };
            if (parsedProxyUrl.auth) {
              var proxyUrlAuth = parsedProxyUrl.auth.split(":");
              proxy.auth = {
                username: proxyUrlAuth[0],
                password: proxyUrlAuth[1]
              };
            }
          }
        }
      }
      if (proxy) {
        options.headers.host = parsed.hostname + (parsed.port ? ":" + parsed.port : "");
        setProxy(options, proxy, protocol + "//" + parsed.hostname + (parsed.port ? ":" + parsed.port : "") + options.path);
      }
      var transport;
      var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
      if (config.transport) {
        transport = config.transport;
      } else if (config.maxRedirects === 0) {
        transport = isHttpsProxy ? https : http;
      } else {
        if (config.maxRedirects) {
          options.maxRedirects = config.maxRedirects;
        }
        transport = isHttpsProxy ? httpsFollow : httpFollow;
      }
      if (config.maxBodyLength > -1) {
        options.maxBodyLength = config.maxBodyLength;
      }
      var req = transport.request(options, function handleResponse(res) {
        if (req.aborted)
          return;
        var stream = res;
        var lastRequest = res.req || req;
        if (res.statusCode !== 204 && lastRequest.method !== "HEAD" && config.decompress !== false) {
          switch (res.headers["content-encoding"]) {
            case "gzip":
            case "compress":
            case "deflate":
              stream = stream.pipe(zlib.createUnzip());
              delete res.headers["content-encoding"];
              break;
          }
        }
        var response = {
          status: res.statusCode,
          statusText: res.statusMessage,
          headers: res.headers,
          config,
          request: lastRequest
        };
        if (config.responseType === "stream") {
          response.data = stream;
          settle(resolve, reject, response);
        } else {
          var responseBuffer = [];
          stream.on("data", function handleStreamData(chunk) {
            responseBuffer.push(chunk);
            if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
              stream.destroy();
              reject(createError("maxContentLength size of " + config.maxContentLength + " exceeded", config, null, lastRequest));
            }
          });
          stream.on("error", function handleStreamError(err) {
            if (req.aborted)
              return;
            reject(enhanceError(err, config, null, lastRequest));
          });
          stream.on("end", function handleStreamEnd() {
            var responseData = Buffer.concat(responseBuffer);
            if (config.responseType !== "arraybuffer") {
              responseData = responseData.toString(config.responseEncoding);
              if (!config.responseEncoding || config.responseEncoding === "utf8") {
                responseData = utils.stripBOM(responseData);
              }
            }
            response.data = responseData;
            settle(resolve, reject, response);
          });
        }
      });
      req.on("error", function handleRequestError(err) {
        if (req.aborted && err.code !== "ERR_FR_TOO_MANY_REDIRECTS")
          return;
        reject(enhanceError(err, config, null, req));
      });
      if (config.timeout) {
        req.setTimeout(config.timeout, function handleRequestTimeout() {
          req.abort();
          reject(createError("timeout of " + config.timeout + "ms exceeded", config, "ECONNABORTED", req));
        });
      }
      if (config.cancelToken) {
        config.cancelToken.promise.then(function onCanceled(cancel) {
          if (req.aborted)
            return;
          req.abort();
          reject(cancel);
        });
      }
      if (utils.isStream(data)) {
        data.on("error", function handleStreamError(err) {
          reject(enhanceError(err, config, null, req));
        }).pipe(req);
      } else {
        req.end(data);
      }
    });
  };
});

// node_modules/axios/lib/defaults.js
var require_defaults = __commonJS((exports2, module2) => {
  "use strict";
  var utils = require_utils();
  var normalizeHeaderName = require_normalizeHeaderName();
  var DEFAULT_CONTENT_TYPE = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
      headers["Content-Type"] = value;
    }
  }
  function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== "undefined") {
      adapter = require_xhr();
    } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
      adapter = require_http();
    }
    return adapter;
  }
  var defaults = {
    adapter: getDefaultAdapter(),
    transformRequest: [function transformRequest(data, headers) {
      normalizeHeaderName(headers, "Accept");
      normalizeHeaderName(headers, "Content-Type");
      if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
        return data;
      }
      if (utils.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils.isURLSearchParams(data)) {
        setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
        return data.toString();
      }
      if (utils.isObject(data)) {
        setContentTypeIfUnset(headers, "application/json;charset=utf-8");
        return JSON.stringify(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch (e) {
        }
      }
      return data;
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  defaults.headers = {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  };
  utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
  });
  utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
  });
  module2.exports = defaults;
});

// node_modules/axios/lib/core/dispatchRequest.js
var require_dispatchRequest = __commonJS((exports2, module2) => {
  "use strict";
  var utils = require_utils();
  var transformData = require_transformData();
  var isCancel = require_isCancel();
  var defaults = require_defaults();
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
  }
  module2.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = config.headers || {};
    config.data = transformData(config.data, config.headers, config.transformRequest);
    config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
    utils.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
      delete config.headers[method];
    });
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData(response.data, response.headers, config.transformResponse);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
        }
      }
      return Promise.reject(reason);
    });
  };
});

// node_modules/axios/lib/core/mergeConfig.js
var require_mergeConfig = __commonJS((exports2, module2) => {
  "use strict";
  var utils = require_utils();
  module2.exports = function mergeConfig(config1, config2) {
    config2 = config2 || {};
    var config = {};
    var valueFromConfig2Keys = ["url", "method", "data"];
    var mergeDeepPropertiesKeys = ["headers", "auth", "proxy", "params"];
    var defaultToConfig2Keys = [
      "baseURL",
      "transformRequest",
      "transformResponse",
      "paramsSerializer",
      "timeout",
      "timeoutMessage",
      "withCredentials",
      "adapter",
      "responseType",
      "xsrfCookieName",
      "xsrfHeaderName",
      "onUploadProgress",
      "onDownloadProgress",
      "decompress",
      "maxContentLength",
      "maxBodyLength",
      "maxRedirects",
      "transport",
      "httpAgent",
      "httpsAgent",
      "cancelToken",
      "socketPath",
      "responseEncoding"
    ];
    var directMergeKeys = ["validateStatus"];
    function getMergedValue(target, source) {
      if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
        return utils.merge(target, source);
      } else if (utils.isPlainObject(source)) {
        return utils.merge({}, source);
      } else if (utils.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(prop) {
      if (!utils.isUndefined(config2[prop])) {
        config[prop] = getMergedValue(config1[prop], config2[prop]);
      } else if (!utils.isUndefined(config1[prop])) {
        config[prop] = getMergedValue(void 0, config1[prop]);
      }
    }
    utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
      if (!utils.isUndefined(config2[prop])) {
        config[prop] = getMergedValue(void 0, config2[prop]);
      }
    });
    utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
    utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
      if (!utils.isUndefined(config2[prop])) {
        config[prop] = getMergedValue(void 0, config2[prop]);
      } else if (!utils.isUndefined(config1[prop])) {
        config[prop] = getMergedValue(void 0, config1[prop]);
      }
    });
    utils.forEach(directMergeKeys, function merge(prop) {
      if (prop in config2) {
        config[prop] = getMergedValue(config1[prop], config2[prop]);
      } else if (prop in config1) {
        config[prop] = getMergedValue(void 0, config1[prop]);
      }
    });
    var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
    var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });
    utils.forEach(otherKeys, mergeDeepProperties);
    return config;
  };
});

// node_modules/axios/lib/core/Axios.js
var require_Axios = __commonJS((exports2, module2) => {
  "use strict";
  var utils = require_utils();
  var buildURL = require_buildURL();
  var InterceptorManager = require_InterceptorManager();
  var dispatchRequest = require_dispatchRequest();
  var mergeConfig = require_mergeConfig();
  function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  Axios.prototype.request = function request(config) {
    if (typeof config === "string") {
      config = arguments[1] || {};
      config.url = arguments[0];
    } else {
      config = config || {};
    }
    config = mergeConfig(this.defaults, config);
    if (config.method) {
      config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {
      config.method = this.defaults.method.toLowerCase();
    } else {
      config.method = "get";
    }
    var chain = [dispatchRequest, void 0];
    var promise = Promise.resolve(config);
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  };
  Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
  };
  utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
    Axios.prototype[method] = function(url, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });
  utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    Axios.prototype[method] = function(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        url,
        data
      }));
    };
  });
  module2.exports = Axios;
});

// node_modules/axios/lib/cancel/Cancel.js
var require_Cancel = __commonJS((exports2, module2) => {
  "use strict";
  function Cancel(message) {
    this.message = message;
  }
  Cancel.prototype.toString = function toString() {
    return "Cancel" + (this.message ? ": " + this.message : "");
  };
  Cancel.prototype.__CANCEL__ = true;
  module2.exports = Cancel;
});

// node_modules/axios/lib/cancel/CancelToken.js
var require_CancelToken = __commonJS((exports2, module2) => {
  "use strict";
  var Cancel = require_Cancel();
  function CancelToken(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    var token = this;
    executor(function cancel(message) {
      if (token.reason) {
        return;
      }
      token.reason = new Cancel(message);
      resolvePromise(token.reason);
    });
  }
  CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  };
  CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  };
  module2.exports = CancelToken;
});

// node_modules/axios/lib/helpers/spread.js
var require_spread = __commonJS((exports2, module2) => {
  "use strict";
  module2.exports = function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  };
});

// node_modules/axios/lib/helpers/isAxiosError.js
var require_isAxiosError = __commonJS((exports2, module2) => {
  "use strict";
  module2.exports = function isAxiosError(payload) {
    return typeof payload === "object" && payload.isAxiosError === true;
  };
});

// node_modules/axios/lib/axios.js
var require_axios = __commonJS((exports2, module2) => {
  "use strict";
  var utils = require_utils();
  var bind = require_bind();
  var Axios = require_Axios();
  var mergeConfig = require_mergeConfig();
  var defaults = require_defaults();
  function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
    utils.extend(instance, Axios.prototype, context);
    utils.extend(instance, context);
    return instance;
  }
  var axios2 = createInstance(defaults);
  axios2.Axios = Axios;
  axios2.create = function create(instanceConfig) {
    return createInstance(mergeConfig(axios2.defaults, instanceConfig));
  };
  axios2.Cancel = require_Cancel();
  axios2.CancelToken = require_CancelToken();
  axios2.isCancel = require_isCancel();
  axios2.all = function all(promises) {
    return Promise.all(promises);
  };
  axios2.spread = require_spread();
  axios2.isAxiosError = require_isAxiosError();
  module2.exports = axios2;
  module2.exports.default = axios2;
});

// node_modules/axios/index.js
var require_axios2 = __commonJS((exports2, module2) => {
  module2.exports = require_axios();
});

// react-shim.js
var React = __toModule(require_react());

// src/index.ts
var import_express = __toModule(require("express"));

// src/app/index.tsx
var import_react4 = __toModule(require_react());
var import_server = __toModule(require_server());

// src/app/components/Characters.tsx
var import_react = __toModule(require_react());

// src/app/services/api/queries.ts
var import_axios = __toModule(require_axios2());
var RICK_URL = "https://rickandmortyapi.com/api";
var getCharacters = async (set) => {
  try {
    const res = await import_axios.default.get(`${RICK_URL}/characters`);
    return set(res.data);
  } catch (error) {
    return new Error("Ups! something was wrong!!");
  }
};

// src/app/components/Characters.tsx
function Characters() {
  const [characters, setCharacters] = (0, import_react.useState)();
  (0, import_react.useMemo)(() => {
    getCharacters(setCharacters);
  }, []);
  const avatars = characters?.results?.map((avatar) => /* @__PURE__ */ import_react.default.createElement("h1", null, avatar.name));
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, import_react.Children.toArray(avatars || [/* @__PURE__ */ import_react.default.createElement("h1", null, "fetching data, wait a moment please...")]));
}

// src/app/components/Layout.tsx
var import_react3 = __toModule(require_react());

// src/app/components/Header.tsx
var import_react2 = __toModule(require_react());
function Header() {
  return /* @__PURE__ */ import_react2.default.createElement("header", null, "this is a header");
}

// src/app/components/Layout.tsx
function Layout({children}) {
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(Header, null), /* @__PURE__ */ import_react3.default.createElement("main", null, children), /* @__PURE__ */ import_react3.default.createElement("footer", null, " @copyright"));
}

// src/app/App.tsx
function App() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "root"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Characters, null)));
}

// src/app/index.tsx
var app_default = import_server.default.renderToString(/* @__PURE__ */ import_react4.default.createElement(App, null));

// src/index.ts
var app = (0, import_express.default)();
console.log(app_default);
app.use("*", (_, res) => {
  res.send(app_default);
});
app.listen(3e3, () => {
  console.log("server listen on port 3000!");
});
