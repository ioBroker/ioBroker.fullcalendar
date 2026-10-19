var e = function(e2, t2) {
  return new URL(e2, t2).href;
}, t = {}, n = function(e2) {
  return e2.pathname.endsWith(`.css`);
}, r = function(e2, t2, n2) {
  if (t2 in e2)
    return e2[t2];
  let r2 = n2();
  if (!r2) {
    e2[t2] = void 0;
    return;
  }
  let i2 = r2.then(() => {
    e2[t2] = void 0;
  }, (n3) => {
    throw e2[t2] = void 0, n3;
  });
  return e2[t2] = i2, i2;
}, i = function(i2, a, o) {
  let s = Promise.resolve();
  if (a && a.length > 0) {
    let u = function(e2) {
      return Promise.all(e2.map((e3) => Promise.resolve(e3).then((e4) => ({status: `fulfilled`, value: e4}), (e4) => ({status: `rejected`, reason: e4}))));
    }, d = function(e2) {
      return import.meta.resolve ? new URL(import.meta.resolve(e2)) : new URL(e2, import.meta.url);
    };
    let i3, c2 = document.querySelector(`meta[property=csp-nonce]`), l = c2?.nonce || c2?.getAttribute(`nonce`);
    s = u(a.map((a2) => {
      a2 = e(a2, o);
      let s2 = d(a2), c3 = n(s2);
      return r(t, s2.href, () => {
        if (i3 === void 0) {
          i3 = {all: new Set(), styles: new Set()};
          let e3 = document.getElementsByTagName(`link`);
          for (let t2 = e3.length - 1; t2 >= 0; t2--) {
            let n2 = e3[t2];
            i3.all.add(n2.href), n2.rel === `stylesheet` && i3.styles.add(n2.href);
          }
        }
        if ((c3 ? i3.styles : i3.all).has(s2.href))
          return;
        let e2 = document.createElement(`link`);
        if (e2.rel = c3 ? `stylesheet` : `modulepreload`, c3 || (e2.as = `script`), e2.crossOrigin = ``, e2.href = s2.href, l && e2.setAttribute(`nonce`, l), document.head.appendChild(e2), c3)
          return new Promise((t2, n2) => {
            e2.addEventListener(`load`, t2), e2.addEventListener(`error`, () => n2(Error(`Unable to preload CSS for ${s2}`)));
          });
      });
    }).filter((e2) => e2 !== void 0));
  }
  function c(e2) {
    let t2 = new Event(`vite:preloadError`, {cancelable: true});
    if (t2.payload = e2, window.dispatchEvent(t2), !t2.defaultPrevented)
      throw e2;
  }
  return s.then((e2) => {
    for (let t2 of e2 || [])
      t2.status === `rejected` && c(t2.reason);
    return i2().catch(c);
  });
};
export {
  i as t
};
