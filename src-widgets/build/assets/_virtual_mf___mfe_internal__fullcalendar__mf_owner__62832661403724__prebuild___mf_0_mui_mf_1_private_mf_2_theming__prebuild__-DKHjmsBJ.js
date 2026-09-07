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
import {r as e} from "./rolldown-runtime-C0FnF6B9.js";
import {T as t, _ as n, d as r, r as i} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__loadShare__react__loadShare__.js-lnQNf7YY.js";
import {n as a} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-CE8M302w.js";
t();
var o = i(null);
t();
function s() {
  return r(o);
}
var c = typeof Symbol == `function` && Symbol.for ? Symbol.for(`mui.nested`) : `__THEME_NESTED__`;
t();
function l(e2, t2) {
  return typeof t2 == `function` ? t2(e2) : __spreadValues(__spreadValues({}, e2), t2);
}
function u(e2) {
  let {children: t2, theme: r2} = e2, i2 = s(), u2 = n(() => {
    let e3 = i2 === null ? __spreadValues({}, r2) : l(i2, r2);
    return e3 != null && (e3[c] = i2 !== null), e3;
  }, [r2, i2]);
  return a(o.Provider, {value: u2, children: t2});
}
var d = e({ThemeProvider: () => u, unstable_nested: () => c, useTheme: () => s}), f = d, p = f.ThemeProvider, m = f.useTheme, h = f.unstable_nested, g = Reflect.get(d, `default`) ?? d;
export {
  p as ThemeProvider,
  g as default,
  h as unstable_nested,
  m as useTheme
};
