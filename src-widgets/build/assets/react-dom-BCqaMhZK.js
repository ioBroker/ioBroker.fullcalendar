import {a as e, t} from "./rolldown-runtime-C0FnF6B9.js";
import {T as n, w as r} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__loadShare__react__loadShare__.js-lnQNf7YY.js";
var i = t((t2) => {
  var i2 = (n(), e(r));
  function a2(e2) {
    var t3 = `https://react.dev/errors/` + e2;
    if (1 < arguments.length) {
      t3 += `?args[]=` + encodeURIComponent(arguments[1]);
      for (var n2 = 2; n2 < arguments.length; n2++)
        t3 += `&args[]=` + encodeURIComponent(arguments[n2]);
    }
    return `Minified React error #` + e2 + `; visit ` + t3 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  function o() {
  }
  var s = {d: {f: o, r: function() {
    throw Error(a2(522));
  }, D: o, C: o, L: o, m: o, X: o, S: o, M: o}, p: 0, findDOMNode: null}, c = Symbol.for(`react.portal`);
  function l(e2, t3, n2) {
    var r2 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {$$typeof: c, key: r2 == null ? null : `` + r2, children: e2, containerInfo: t3, implementation: n2};
  }
  var u = i2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(e2, t3) {
    if (e2 === `font`)
      return ``;
    if (typeof t3 == `string`)
      return t3 === `use-credentials` ? t3 : ``;
  }
  t2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, t2.createPortal = function(e2, t3) {
    var n2 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!t3 || t3.nodeType !== 1 && t3.nodeType !== 9 && t3.nodeType !== 11)
      throw Error(a2(299));
    return l(e2, t3, null, n2);
  }, t2.flushSync = function(e2) {
    var t3 = u.T, n2 = s.p;
    try {
      if (u.T = null, s.p = 2, e2)
        return e2();
    } finally {
      u.T = t3, s.p = n2, s.d.f();
    }
  }, t2.preconnect = function(e2, t3) {
    typeof e2 == `string` && (t3 ? (t3 = t3.crossOrigin, t3 = typeof t3 == `string` ? t3 === `use-credentials` ? t3 : `` : void 0) : t3 = null, s.d.C(e2, t3));
  }, t2.prefetchDNS = function(e2) {
    typeof e2 == `string` && s.d.D(e2);
  }, t2.preinit = function(e2, t3) {
    if (typeof e2 == `string` && t3 && typeof t3.as == `string`) {
      var n2 = t3.as, r2 = d(n2, t3.crossOrigin), i3 = typeof t3.integrity == `string` ? t3.integrity : void 0, a3 = typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0;
      n2 === `style` ? s.d.S(e2, typeof t3.precedence == `string` ? t3.precedence : void 0, {crossOrigin: r2, integrity: i3, fetchPriority: a3}) : n2 === `script` && s.d.X(e2, {crossOrigin: r2, integrity: i3, fetchPriority: a3, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0});
    }
  }, t2.preinitModule = function(e2, t3) {
    if (typeof e2 == `string`) {
      if (typeof t3 == `object` && t3) {
        if (t3.as == null || t3.as === `script`) {
          var n2 = d(t3.as, t3.crossOrigin);
          s.d.M(e2, {crossOrigin: n2, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0});
        }
      } else
        t3 ?? s.d.M(e2);
    }
  }, t2.preload = function(e2, t3) {
    if (typeof e2 == `string` && typeof t3 == `object` && t3 && typeof t3.as == `string`) {
      var n2 = t3.as, r2 = d(n2, t3.crossOrigin);
      s.d.L(e2, n2, {crossOrigin: r2, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0, type: typeof t3.type == `string` ? t3.type : void 0, fetchPriority: typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0, referrerPolicy: typeof t3.referrerPolicy == `string` ? t3.referrerPolicy : void 0, imageSrcSet: typeof t3.imageSrcSet == `string` ? t3.imageSrcSet : void 0, imageSizes: typeof t3.imageSizes == `string` ? t3.imageSizes : void 0, media: typeof t3.media == `string` ? t3.media : void 0});
    }
  }, t2.preloadModule = function(e2, t3) {
    if (typeof e2 == `string`) {
      if (t3) {
        var n2 = d(t3.as, t3.crossOrigin);
        s.d.m(e2, {as: typeof t3.as == `string` && t3.as !== `script` ? t3.as : void 0, crossOrigin: n2, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0});
      } else
        s.d.m(e2);
    }
  }, t2.requestFormReset = function(e2) {
    s.d.r(e2);
  }, t2.unstable_batchedUpdates = function(e2, t3) {
    return e2(t3);
  }, t2.useFormState = function(e2, t3, n2) {
    return u.H.useFormState(e2, t3, n2);
  }, t2.useFormStatus = function() {
    return u.H.useHostTransitionStatus();
  }, t2.version = `19.2.8`;
}), a = t((e2, t2) => {
  function n2() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2);
      } catch (e3) {
        console.error(e3);
      }
  }
  n2(), t2.exports = i();
});
export {
  a as t
};
