import { n as e } from "./rolldown-runtime-COiEfhsA.js";
import { E as t, b as n, f as r, o as i } from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__loadShare__shared-CD90XqsH.js";
var a = r(null);
function o() {
  return n(a);
}
var s = typeof Symbol == `function` && Symbol.for ? /* @__PURE__ */ Symbol.for(`mui.nested`) : `__THEME_NESTED__`;
function c(e2, t2) {
  return typeof t2 == `function` ? t2(e2) : { ...e2, ...t2 };
}
function l(e2) {
  let { children: n2, theme: r2 } = e2, l2 = o(), u2 = t(() => {
    let e3 = l2 === null ? { ...r2 } : c(l2, r2);
    return e3 != null && (e3[s] = l2 !== null), e3;
  }, [r2, l2]);
  return i(a.Provider, { value: u2, children: n2 });
}
var u = e({ ThemeProvider: () => l, unstable_nested: () => s, useTheme: () => o }), d = u, f = d.ThemeProvider, p = d.useTheme, m = d.unstable_nested, h = Reflect.get(u, `default`) ?? u;
export {
  f as ThemeProvider,
  h as default,
  m as unstable_nested,
  p as useTheme
};
