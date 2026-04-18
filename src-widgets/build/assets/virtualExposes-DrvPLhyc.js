const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./FullCalendar-Ct_HXqsn.js","./DefaultPropsProvider-XYnvdTOt.js","./fullcalendar__loadShare__react__loadShare__-tokQnSgq.js","./_commonjsHelpers-Cpj98o6Y.js","./fullcalendar__mf_v__runtimeInit__mf_v__-CdxiMOBu.js","./getColorSchemeSelector-C1WqGkJ4.js","./TextField-CpmA-DnZ.js","./defaultTheme-CaQBKbzT.js","./index-DvUGxIFq.js","./createSvgIcon-DGfav3wW.js","./useTheme-6qHn8Vyq.js","./tslib.es6-Di4_HT9Y.js","./FullCalendar-DRKqq0fW.css"])))=>i.map(i=>d[i]);
import { _ as r } from "./preload-helper-PPVm8Dsz.js";
let a;
let __tla = (async () => {
  a = {
    "./FullCalendar": async () => {
      const t = await r(() => import("./FullCalendar-Ct_HXqsn.js").then(async (m) => {
        await m.__tla;
        return m;
      }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]), import.meta.url), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    },
    "./translations": async () => {
      const t = await r(() => import("./translations-CS-x783U.js"), [], import.meta.url), e = {};
      return Object.assign(e, t), Object.defineProperty(e, "__esModule", {
        value: true,
        enumerable: false
      }), e;
    }
  };
})();
export {
  __tla,
  a as default
};
