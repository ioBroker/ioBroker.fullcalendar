import {o as e, t} from "./rolldown-runtime-C0FnF6B9.js";
var n = t((e2) => {
  var t2 = Symbol.for(`react.transitional.element`), n2 = Symbol.for(`react.fragment`);
  function r2(e3, n3, r3) {
    var i2 = null;
    if (r3 !== void 0 && (i2 = `` + r3), n3.key !== void 0 && (i2 = `` + n3.key), `key` in n3)
      for (var a2 in r3 = {}, n3)
        a2 !== `key` && (r3[a2] = n3[a2]);
    else
      r3 = n3;
    return n3 = r3.ref, {$$typeof: t2, type: e3, key: i2, ref: n3 === void 0 ? null : n3, props: r3};
  }
  e2.Fragment = n2, e2.jsx = r2, e2.jsxs = r2;
}), r = e(t((e2, t2) => {
  t2.exports = n();
})()), i = r.default ?? r, a = i.Fragment, o = i.jsx, s = i.jsxs;
export {
  a as Fragment,
  i as default,
  o as jsx,
  s as jsxs
};
