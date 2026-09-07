const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./FullCalendar-D2pd7lzL.js","./useMediaQuery-B-iXjaF3.js","./useMediaQuery-H8Q1C5b6.js","./FullCalendar-DRKqq0fW.css"])))=>i.map(i=>d[i]);
import {n as e, t} from "./vite-preload-helper-r6RKwCfh.js";
let s;
let __tla = (async () => {
  e();
  var n = {}, r = new Set(), i = new Map();
  function a(e2, t2) {
    let n2 = i.get(e2);
    return n2 || (n2 = Promise.resolve().then(t2).catch((t3) => {
      throw i.delete(e2), t3;
    }), i.set(e2, n2)), n2;
  }
  async function o(e2) {
    if (typeof document > `u`)
      return;
    let t2 = n[e2] || [];
    await Promise.all(t2.map((e3) => {
      let t3 = new URL(e3, import.meta.url).href;
      return r.has(t3) || (r.add(t3), document.querySelector(`link[rel="stylesheet"][href="${t3}"]`)) ? Promise.resolve() : new Promise((e4, n2) => {
        let r2 = document.createElement(`link`);
        r2.rel = `stylesheet`, r2.href = t3, r2.onload = () => e4(), r2.onerror = () => n2(Error(`[Module Federation] Failed to load CSS asset: ${t3}`)), document.head.appendChild(r2);
      });
    }));
  }
  s = {
    "./FullCalendar": async () => {
      await o(`./FullCalendar`), await Promise.all([]);
      let e2 = await a(`./FullCalendar`, () => t(() => import("./FullCalendar-D2pd7lzL.js").then(async (m) => {
        await m.__tla;
        return m;
      }), __vite__mapDeps([0,1,2,3]), import.meta.url)), n2 = e2 && e2.__mf_remote_dependency_pending;
      n2 && typeof n2.then == `function` && await n2;
      let r2 = {};
      return Object.assign(r2, e2), Object.defineProperty(r2, "__esModule", {
        value: true,
        enumerable: false
      }), r2;
    },
    "./translations": async () => {
      await o(`./translations`), await Promise.all([]);
      let e2 = await a(`./translations`, () => t(() => import("./translations-e8MhG2Cb.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url)), n2 = e2 && e2.__mf_remote_dependency_pending;
      n2 && typeof n2.then == `function` && await n2;
      let r2 = {};
      return Object.assign(r2, e2), Object.defineProperty(r2, "__esModule", {
        value: true,
        enumerable: false
      }), r2;
    }
  };
})();
export {
  __tla,
  s as t
};
