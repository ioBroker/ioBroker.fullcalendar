var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e2, t2, n2) => () => {
  if (n2)
    throw n2[0];
  try {
    return e2 && (t2 = e2(e2 = 0)), t2;
  } catch (e3) {
    throw n2 = [e3], e3;
  }
}, s = (e2, t2) => () => (t2 || (e2((t2 = {exports: {}}).exports, t2), e2 = null), t2.exports), c = (e2, n2) => {
  let r2 = {};
  for (var i2 in e2)
    t(r2, i2, {get: e2[i2], enumerable: true});
  return n2 || t(r2, Symbol.toStringTag, {value: `Module`}), r2;
}, l = (e2, i2, o2, s2) => {
  if (i2 && typeof i2 == `object` || typeof i2 == `function`)
    for (var c2 = r(i2), l2 = 0, u2 = c2.length, d2; l2 < u2; l2++)
      d2 = c2[l2], !a.call(e2, d2) && d2 !== o2 && t(e2, d2, {get: ((e3) => i2[e3]).bind(null, d2), enumerable: !(s2 = n(i2, d2)) || s2.enumerable});
  return e2;
}, u = (n2, r2, o2) => (o2 = n2 == null ? {} : e(i(n2)), l(r2 || !n2 || !n2.__esModule || !a.call(n2, `default`) ? t(o2, `default`, {value: n2, enumerable: true}) : o2, n2)), d = (e2) => a.call(e2, `module.exports`) ? e2[`module.exports`] : l(t({}, `__esModule`, {value: true}), e2), f = ((e2) => typeof require < `u` ? require : typeof Proxy < `u` ? new Proxy(e2, {get: (e3, t2) => (typeof require < `u` ? require : e3)[t2]}) : e2)(function(e2) {
  if (typeof require < `u`)
    return require.apply(this, arguments);
  throw Error('Calling `require` for "' + e2 + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
export {
  d as a,
  f as i,
  o as n,
  u as o,
  c as r,
  s as t
};
