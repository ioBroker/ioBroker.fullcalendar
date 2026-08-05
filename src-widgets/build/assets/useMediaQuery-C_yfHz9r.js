import { o as E, s as S, j as h, R as y, l as _, d as x, f as R, k as j, e as m, __tla as __tla_0 } from "./__mfe_internal__fullcalendar__loadShare__react__loadShare__.js-Bs1ZpPYs.js";
import { __tla as __tla_1 } from "./__mfe_internal__fullcalendar__loadShare__prop_mf_2_types__loadShare__.js-DBhwUaK5.js";
import { T as w, j as Q, r as I, __tla as __tla_2 } from "./createStyled-CeU44wOQ.js";
import { m as T, k as M, n as L, __tla as __tla_3 } from "./getColorSchemeSelector-bFPhxf4L.js";
let Z, U, X, te, z, ee, N, v, P, W, ne, q;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })()
]).then(async () => {
  W = function(e, t) {
    var _a, _b, _c;
    return E(e) && t.indexOf(e.type.muiName ?? ((_c = (_b = (_a = e.type) == null ? void 0 : _a._payload) == null ? void 0 : _b.value) == null ? void 0 : _c.muiName)) !== -1;
  };
  U = typeof window < "u" ? S : h;
  let d = 0;
  function k(e) {
    const [t, s] = _(e), n = e || t;
    return h(() => {
      t == null && (d += 1, s(`mui-${d}`));
    }, [
      t
    ]), n;
  }
  const C = {
    ...y
  }, p = C.useId;
  X = function(e) {
    if (p !== void 0) {
      const t = p();
      return e ?? t;
    }
    return k(e);
  };
  function O(e) {
    return Object.keys(e).length === 0;
  }
  P = function(e = null) {
    const t = x(w);
    return !t || O(t) ? e : t;
  };
  const g = R();
  Z = function({ value: e, ...t }) {
    return Q.jsx(g.Provider, {
      value: e ?? true,
      ...t
    });
  };
  let D;
  q = () => x(g) ?? false;
  D = T();
  N = function(e = D) {
    return P(e);
  };
  const $ = (e) => {
    var _a;
    const t = {
      systemProps: {},
      otherProps: {}
    }, s = ((_a = e == null ? void 0 : e.theme) == null ? void 0 : _a.unstable_sxConfig) ?? L;
    return Object.keys(e).forEach((n) => {
      s[n] ? t.systemProps[n] = e[n] : t.otherProps[n] = e[n];
    }), t;
  };
  ee = function(e) {
    const { sx: t, ...s } = e, { systemProps: n, otherProps: r } = $(s);
    let o;
    return Array.isArray(t) ? o = [
      n,
      ...t
    ] : typeof t == "function" ? o = (...a) => {
      const u = t(...a);
      return M(u) ? {
        ...n,
        ...u
      } : n;
    } : o = {
      ...n,
      ...t
    }, {
      ...r,
      sx: o
    };
  };
  v = function(e) {
    const { theme: t, name: s, props: n } = e;
    return !t || !t.components || !t.components[s] || !t.components[s].defaultProps ? n : I(t.components[s].defaultProps, n);
  };
  te = function({ props: e, name: t, defaultTheme: s, themeId: n }) {
    let r = N(s);
    return n && (r = r[n] || r), v({
      theme: r,
      name: t,
      props: e
    });
  };
  function A(e, t, s, n, r) {
    const [o, a] = _(() => r && s ? s(e).matches : n ? n(e).matches : t);
    return U(() => {
      if (!s) return;
      const u = s(e), i = () => {
        a(u.matches);
      };
      return i(), u.addEventListener("change", i), () => {
        u.removeEventListener("change", i);
      };
    }, [
      e,
      s
    ]), o;
  }
  const G = {
    ...y
  }, b = G.useSyncExternalStore;
  function Y(e, t, s, n, r) {
    const o = j(() => t, [
      t
    ]), a = m(() => {
      if (r && s) return () => s(e).matches;
      if (n !== null) {
        const { matches: c } = n(e);
        return () => c;
      }
      return o;
    }, [
      o,
      e,
      n,
      r,
      s
    ]), [u, i] = m(() => {
      if (s === null) return [
        o,
        () => () => {
        }
      ];
      const c = s(e);
      return [
        () => c.matches,
        (f) => (c.addEventListener("change", f), () => {
          c.removeEventListener("change", f);
        })
      ];
    }, [
      o,
      s,
      e
    ]);
    return b(i, u, a);
  }
  z = function(e = {}) {
    const { themeId: t } = e;
    return function(n, r = {}) {
      let o = P();
      o && t && (o = o[t] || o);
      const a = typeof window < "u" && typeof window.matchMedia < "u", { defaultMatches: u = false, matchMedia: i = a ? window.matchMedia : null, ssrMatchMedia: l = null, noSsr: c = false } = v({
        name: "MuiUseMediaQuery",
        props: r,
        theme: o
      });
      let f = typeof n == "function" ? n(o) : n;
      return f = f.replace(/^@media( ?)/m, ""), f.includes("print") && console.warn([
        "MUI: You have provided a `print` query to the `useMediaQuery` hook.",
        "Using the print media query to modify print styles can lead to unexpected results.",
        "Consider using the `displayPrint` field in the `sx` prop instead.",
        "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."
      ].join(`
`)), (b !== void 0 ? Y : A)(f, u, i, l, c);
    };
  };
  ne = z();
});
export {
  Z as R,
  __tla,
  U as a,
  X as b,
  te as c,
  z as d,
  ee as e,
  N as f,
  v as g,
  P as h,
  W as i,
  ne as j,
  q as u
};
