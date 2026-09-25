var e = function(e2, t2) {
  return new URL(e2, t2).href;
}, t = {}, n = function(n2, r, i) {
  let a = Promise.resolve();
  if (r && r.length > 0) {
    let c = function(e2) {
      return Promise.all(e2.map((e3) => Promise.resolve(e3).then((e4) => ({status: `fulfilled`, value: e4}), (e4) => ({status: `rejected`, reason: e4}))));
    }, l = function(e2) {
      return import.meta.resolve ? import.meta.resolve(e2) : new URL(e2, import.meta.url).href;
    };
    let n3 = document.getElementsByTagName(`link`), o2 = document.querySelector(`meta[property=csp-nonce]`), s = o2?.nonce || o2?.getAttribute(`nonce`);
    a = c(r.map((r2) => {
      if (r2 = e(r2, i), r2 = l(r2), r2 in t)
        return;
      t[r2] = true;
      let a2 = r2.endsWith(`.css`);
      for (let e2 = n3.length - 1; e2 >= 0; e2--) {
        let t2 = n3[e2];
        if (t2.href === r2 && (!a2 || t2.rel === `stylesheet`))
          return;
      }
      let o3 = document.createElement(`link`);
      if (o3.rel = a2 ? `stylesheet` : `modulepreload`, a2 || (o3.as = `script`), o3.crossOrigin = ``, o3.href = r2, s && o3.setAttribute(`nonce`, s), document.head.appendChild(o3), a2)
        return new Promise((e2, t2) => {
          o3.addEventListener(`load`, e2), o3.addEventListener(`error`, () => t2(Error(`Unable to preload CSS for ${r2}`)));
        });
    }).filter((e2) => e2 !== void 0));
  }
  function o(e2) {
    let t2 = new Event(`vite:preloadError`, {cancelable: true});
    if (t2.payload = e2, window.dispatchEvent(t2), !t2.defaultPrevented)
      throw e2;
  }
  return a.then((e2) => {
    for (let t2 of e2 || [])
      t2.status === `rejected` && o(t2.reason);
    return n2().catch(o);
  });
};
export {
  n as t
};
