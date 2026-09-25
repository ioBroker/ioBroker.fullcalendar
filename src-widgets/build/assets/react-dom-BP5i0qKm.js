import {t as e} from "./rolldown-runtime-Dd_uD5pT.js";
import {t} from "./react.production-DNV6vxBb.js";
var n = e((e2, n2) => {
  n2.exports = t();
}), r = e((e2) => {
  var t2 = n();
  function r2(e3) {
    var t3 = `https://react.dev/errors/` + e3;
    if (1 < arguments.length) {
      t3 += `?args[]=` + encodeURIComponent(arguments[1]);
      for (var n2 = 2; n2 < arguments.length; n2++)
        t3 += `&args[]=` + encodeURIComponent(arguments[n2]);
    }
    return `Minified React error #` + e3 + `; visit ` + t3 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  function i2() {
  }
  var a = {d: {f: i2, r: function() {
    throw Error(r2(522));
  }, D: i2, C: i2, L: i2, m: i2, X: i2, S: i2, M: i2}, p: 0, findDOMNode: null}, o = Symbol.for(`react.portal`), s = Symbol.for(`react.recoverable`), c = Symbol.for(`react.optimistic_key`);
  function l(e3, t3, n2) {
    var r3 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {$$typeof: o, key: r3 == null ? null : r3 === c ? c : `` + r3, children: e3, containerInfo: t3, implementation: n2};
  }
  var u = t2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(e3, t3) {
    if (e3 === `font`)
      return ``;
    if (typeof t3 == `string`)
      return t3 === `use-credentials` ? t3 : ``;
  }
  e2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, e2.browser = function(e3) {
    return {$$typeof: s, _reason: e3};
  }, e2.createPortal = function(e3, t3) {
    var n2 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!t3 || t3.nodeType !== 1 && t3.nodeType !== 9 && t3.nodeType !== 11)
      throw Error(r2(299));
    return l(e3, t3, null, n2);
  }, e2.flushSync = function(e3) {
    var t3 = u.T, n2 = a.p;
    try {
      if (u.T = null, a.p = 2, e3)
        return e3();
    } finally {
      u.T = t3, a.p = n2, a.d.f();
    }
  }, e2.preconnect = function(e3, t3) {
    typeof e3 == `string` && (t3 ? (t3 = t3.crossOrigin, t3 = typeof t3 == `string` ? t3 === `use-credentials` ? t3 : `` : void 0) : t3 = null, a.d.C(e3, t3));
  }, e2.prefetchDNS = function(e3) {
    typeof e3 == `string` && a.d.D(e3);
  }, e2.preinit = function(e3, t3) {
    if (typeof e3 == `string` && t3 && typeof t3.as == `string`) {
      var n2 = t3.as, r3 = d(n2, t3.crossOrigin), i3 = typeof t3.integrity == `string` ? t3.integrity : void 0, o2 = typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0;
      n2 === `style` ? a.d.S(e3, typeof t3.precedence == `string` ? t3.precedence : void 0, {crossOrigin: r3, integrity: i3, fetchPriority: o2}) : n2 === `script` && a.d.X(e3, {crossOrigin: r3, integrity: i3, fetchPriority: o2, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0});
    }
  }, e2.preinitModule = function(e3, t3) {
    if (typeof e3 == `string`) {
      if (typeof t3 == `object` && t3) {
        if (t3.as == null || t3.as === `script`) {
          var n2 = d(t3.as, t3.crossOrigin);
          a.d.M(e3, {crossOrigin: n2, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0, fetchPriority: typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0});
        }
      } else
        t3 ?? a.d.M(e3);
    }
  }, e2.preload = function(e3, t3) {
    if (typeof e3 == `string` && typeof t3 == `object` && t3 && typeof t3.as == `string`) {
      var n2 = t3.as, r3 = d(n2, t3.crossOrigin);
      a.d.L(e3, n2, {crossOrigin: r3, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0, type: typeof t3.type == `string` ? t3.type : void 0, fetchPriority: typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0, referrerPolicy: typeof t3.referrerPolicy == `string` ? t3.referrerPolicy : void 0, imageSrcSet: typeof t3.imageSrcSet == `string` ? t3.imageSrcSet : void 0, imageSizes: typeof t3.imageSizes == `string` ? t3.imageSizes : void 0, media: typeof t3.media == `string` ? t3.media : void 0});
    }
  }, e2.preloadModule = function(e3, t3) {
    if (typeof e3 == `string`) {
      if (t3) {
        var n2 = d(t3.as, t3.crossOrigin);
        a.d.m(e3, {as: typeof t3.as == `string` && t3.as !== `script` ? t3.as : void 0, crossOrigin: n2, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0, fetchPriority: typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0});
      } else
        a.d.m(e3);
    }
  }, e2.requestFormReset = function(e3) {
    a.d.r(e3);
  }, e2.unstable_batchedUpdates = function(e3, t3) {
    return e3(t3);
  }, e2.useFormState = function(e3, t3, n2) {
    return u.H.useFormState(e3, t3, n2);
  }, e2.useFormStatus = function() {
    return u.H.useHostTransitionStatus();
  }, e2.version = `19.3.0`;
}), i = e((e2, t2) => {
  function n2() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`)
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2);
      } catch (e3) {
        console.error(e3);
      }
  }
  n2(), t2.exports = r();
});
export {
  n,
  i as t
};
