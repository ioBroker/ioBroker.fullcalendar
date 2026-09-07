import {n as e} from "./rolldown-runtime-C0FnF6B9.js";
var t, n, r, i, a = e(() => {
  t = `modulepreload`, n = function(e2, t2) {
    return new URL(e2, t2).href;
  }, r = {}, i = function(e2, i2, a2) {
    let o = Promise.resolve();
    if (i2 && i2.length > 0) {
      let l = function(e4) {
        return Promise.all(e4.map((e5) => Promise.resolve(e5).then((e6) => ({status: `fulfilled`, value: e6}), (e6) => ({status: `rejected`, reason: e6}))));
      }, u = function(e4) {
        return import.meta.resolve ? import.meta.resolve(e4) : new URL(e4, import.meta.url).href;
      };
      let e3 = document.getElementsByTagName(`link`), s2 = document.querySelector(`meta[property=csp-nonce]`), c = s2?.nonce || s2?.getAttribute(`nonce`);
      o = l(i2.map((i3) => {
        if (i3 = n(i3, a2), i3 = u(i3), i3 in r)
          return;
        r[i3] = true;
        let o2 = i3.endsWith(`.css`);
        for (let t2 = e3.length - 1; t2 >= 0; t2--) {
          let n2 = e3[t2];
          if (n2.href === i3 && (!o2 || n2.rel === `stylesheet`))
            return;
        }
        let s3 = document.createElement(`link`);
        if (s3.rel = o2 ? `stylesheet` : t, o2 || (s3.as = `script`), s3.crossOrigin = ``, s3.href = i3, c && s3.setAttribute(`nonce`, c), document.head.appendChild(s3), o2)
          return new Promise((e4, t2) => {
            s3.addEventListener(`load`, e4), s3.addEventListener(`error`, () => t2(Error(`Unable to preload CSS for ${i3}`)));
          });
      }));
    }
    function s(e3) {
      let t2 = new Event(`vite:preloadError`, {cancelable: true});
      if (t2.payload = e3, window.dispatchEvent(t2), !t2.defaultPrevented)
        throw e3;
    }
    return o.then((t2) => {
      for (let e3 of t2 || [])
        e3.status === `rejected` && s(e3.reason);
      return e2().catch(s);
    });
  };
});
export {
  a as n,
  i as t
};
