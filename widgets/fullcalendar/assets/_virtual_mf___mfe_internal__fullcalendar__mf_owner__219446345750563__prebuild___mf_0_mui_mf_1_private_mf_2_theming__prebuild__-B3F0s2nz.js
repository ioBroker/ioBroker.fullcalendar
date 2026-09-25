var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
import {n as e} from "./rolldown-runtime-Dd_uD5pT.js";
import {_ as t, d as n, r} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare__react__loadShare__.js-CvmZdlJR.js";
import {n as i} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-dKY8wLF8.js";
var a = r(null);
function o() {
  return n(a);
}
var s = typeof Symbol == `function` && Symbol.for ? Symbol.for(`mui.nested`) : `__THEME_NESTED__`;
function c(e2, t2) {
  return typeof t2 == `function` ? t2(e2) : __spreadValues(__spreadValues({}, e2), t2);
}
function l(e2) {
  let {children: n2, theme: r2} = e2, l2 = o(), u2 = t(() => {
    let e3 = l2 === null ? __spreadValues({}, r2) : c(l2, r2);
    return e3 != null && (e3[s] = l2 !== null), e3;
  }, [r2, l2]);
  return i(a.Provider, {value: u2, children: n2});
}
var u = e({ThemeProvider: () => l, unstable_nested: () => s, useTheme: () => o}), d = u, f = d.ThemeProvider, p = d.useTheme, m = d.unstable_nested, h = Reflect.get(u, `default`) ?? u;
export {
  f as ThemeProvider,
  h as default,
  m as unstable_nested,
  p as useTheme
};
