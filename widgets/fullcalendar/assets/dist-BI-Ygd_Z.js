import { a as e, i as t, o as n, r, t as i } from "./utils-BRGuweMc.js";
function a(e2) {
  let i2 = new (t() || r)({ id: `${e2.name}@${e2.version || Date.now()}`, ...e2 });
  return n(i2), i2;
}
var o = null;
function s(e2) {
  let t2 = i(e2.name, e2.version), n2 = { ...e2, id: e2.id || `` };
  return t2 ? (t2.initOptions(n2), o || (o = t2), t2) : (o = a(n2), o);
}
e(r);
export {
  s as t
};
