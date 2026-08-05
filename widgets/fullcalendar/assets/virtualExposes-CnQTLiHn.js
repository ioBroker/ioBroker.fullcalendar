const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./FullCalendar-DRKqq0fW.css"])))=>i.map(i=>d[i]);
import { _ as s } from "./preload-helper-PPVm8Dsz.js";
let p;
let __tla = (async () => {
  const m = {}, o = /* @__PURE__ */ new Set();
  let a = Promise.resolve();
  async function i(t) {
    const e = a.then(t, t);
    return a = e.then(() => {
    }, () => {
    }), e;
  }
  async function l(t) {
    if (typeof document > "u") return;
    const e = m[t] || [];
    await Promise.all(e.map((u) => {
      const r = new URL(u, import.meta.url).href;
      return o.has(r) || (o.add(r), document.querySelector(`link[rel="stylesheet"][data-mf-href="${r}"]`)) ? Promise.resolve() : new Promise((d, c) => {
        const n = document.createElement("link");
        n.rel = "stylesheet", n.href = r, n.setAttribute("data-mf-href", r), n.onload = () => d(), n.onerror = () => c(new Error(`[Module Federation] Failed to load CSS asset: ${r}`)), document.head.appendChild(n);
      });
    }));
  }
  p = {
    "./FullCalendar": async () => {
      await l("./FullCalendar");
      const t = await i(() => s(() => import("./FullCalendar-BaLoLt6w.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), __vite__mapDeps([0]), import.meta.url)), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    },
    "./translations": async () => {
      await l("./translations");
      const t = await i(() => s(() => import("./translations-CS-x783U.js"), [], import.meta.url)), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    }
  };
})();
export {
  __tla,
  p as default
};
