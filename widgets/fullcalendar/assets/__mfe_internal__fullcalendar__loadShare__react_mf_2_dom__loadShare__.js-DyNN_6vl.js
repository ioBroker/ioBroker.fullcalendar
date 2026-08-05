let m, h, d;
let __tla = (async () => {
  const o = "__mf_init____mf__virtual/__mfe_internal__fullcalendar__mf_v__runtimeInit__mf_v__.js__";
  let t = globalThis[o];
  if (!t) {
    let _, n;
    const i = new Promise((r, s) => {
      _ = r, n = s;
    });
    t = globalThis[o] = {
      initPromise: i,
      initResolve: _,
      initReject: n
    }, typeof window > "u" && _({
      loadRemote: function() {
        return Promise.resolve(void 0);
      },
      loadShare: function() {
        return Promise.resolve(void 0);
      }
    });
  }
  let f, a, e, l, u, c, R, P, S, b, v, p, E;
  f = t.initPromise;
  a = f.then((_) => _.loadShare("react-dom", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  }));
  e = await a.then((_) => typeof _ == "function" ? _() : _);
  m = e.__esModule ? e.default : e.default ?? e;
  ({ __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: l, createPortal: d, createRoot: u, findDOMNode: c, flushSync: h, hydrate: R, hydrateRoot: P, render: S, unmountComponentAtNode: b, unstable_batchedUpdates: v, unstable_renderSubtreeIntoContainer: p, version: E } = e);
})();
export {
  m as R,
  h as _,
  __tla,
  d as a
};
