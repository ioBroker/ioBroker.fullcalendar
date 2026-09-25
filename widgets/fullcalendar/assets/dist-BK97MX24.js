var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
import {a as e, i as t, o as n, r, t as i} from "./utils-jR9fY54i.js";
function a(e2) {
  let i2 = new (t() || r)(__spreadValues({id: `${e2.name}@${e2.version || Date.now()}`}, e2));
  return n(i2), i2;
}
var o = null;
function s(e2) {
  let t2 = i(e2.name, e2.version), n2 = __spreadProps(__spreadValues({}, e2), {id: e2.id || ``});
  return t2 ? (t2.initOptions(n2), o || (o = t2), t2) : (o = a(n2), o);
}
e(r);
export {
  s as t
};
