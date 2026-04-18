import { m as v, k as E, n as S, __tla as __tla_0 } from "./getColorSchemeSelector-C1WqGkJ4.js";
import { f as u, a as h, __tla as __tla_1 } from "./fullcalendar__loadShare__react__loadShare__-tokQnSgq.js";
import { T as b, r as _, j as w, __tla as __tla_2 } from "./DefaultPropsProvider-XYnvdTOt.js";
let H, F, I, Y, U, V, j, x, y, B, z, J;
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
  })()
]).then(async () => {
  function Q(e) {
    return Object.keys(e).length === 0;
  }
  y = function(e = null) {
    const t = u.useContext(b);
    return !t || Q(t) ? e : t;
  };
  const R = v();
  j = function(e = R) {
    return y(e);
  };
  const C = (e) => {
    var _a;
    const t = {
      systemProps: {},
      otherProps: {}
    }, s = ((_a = e == null ? void 0 : e.theme) == null ? void 0 : _a.unstable_sxConfig) ?? S;
    return Object.keys(e).forEach((n) => {
      s[n] ? t.systemProps[n] = e[n] : t.otherProps[n] = e[n];
    }), t;
  };
  V = function(e) {
    const { sx: t, ...s } = e, { systemProps: n, otherProps: r } = C(s);
    let o;
    return Array.isArray(t) ? o = [
      n,
      ...t
    ] : typeof t == "function" ? o = (...i) => {
      const a = t(...i);
      return E(a) ? {
        ...n,
        ...a
      } : n;
    } : o = {
      ...n,
      ...t
    }, {
      ...r,
      sx: o
    };
  };
  x = function(e) {
    const { theme: t, name: s, props: n } = e;
    return !t || !t.components || !t.components[s] || !t.components[s].defaultProps ? n : _(t.components[s].defaultProps, n);
  };
  Y = function({ props: e, name: t, defaultTheme: s, themeId: n }) {
    let r = j(s);
    return n && (r = r[n] || r), x({
      theme: r,
      name: t,
      props: e
    });
  };
  I = typeof window < "u" ? u.useLayoutEffect : u.useEffect;
  function M(e, t, s, n, r) {
    const [o, i] = u.useState(() => r && s ? s(e).matches : n ? n(e).matches : t);
    return I(() => {
      if (!s) return;
      const a = s(e), c = () => {
        i(a.matches);
      };
      return c(), a.addEventListener("change", c), () => {
        a.removeEventListener("change", c);
      };
    }, [
      e,
      s
    ]), o;
  }
  const T = {
    ...h
  }, P = T.useSyncExternalStore;
  function L(e, t, s, n, r) {
    const o = u.useCallback(() => t, [
      t
    ]), i = u.useMemo(() => {
      if (r && s) return () => s(e).matches;
      if (n !== null) {
        const { matches: f } = n(e);
        return () => f;
      }
      return o;
    }, [
      o,
      e,
      n,
      r,
      s
    ]), [a, c] = u.useMemo(() => {
      if (s === null) return [
        o,
        () => () => {
        }
      ];
      const f = s(e);
      return [
        () => f.matches,
        (l) => (f.addEventListener("change", l), () => {
          f.removeEventListener("change", l);
        })
      ];
    }, [
      o,
      s,
      e
    ]);
    return P(c, a, i);
  }
  U = function(e = {}) {
    const { themeId: t } = e;
    return function(n, r = {}) {
      let o = y();
      o && t && (o = o[t] || o);
      const i = typeof window < "u" && typeof window.matchMedia < "u", { defaultMatches: a = false, matchMedia: c = i ? window.matchMedia : null, ssrMatchMedia: m = null, noSsr: f = false } = x({
        name: "MuiUseMediaQuery",
        props: r,
        theme: o
      });
      let l = typeof n == "function" ? n(o) : n;
      return l = l.replace(/^@media( ?)/m, ""), l.includes("print") && console.warn([
        "MUI: You have provided a `print` query to the `useMediaQuery` hook.",
        "Using the print media query to modify print styles can lead to unexpected results.",
        "Consider using the `displayPrint` field in the `sx` prop instead.",
        "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."
      ].join(`
`)), (P !== void 0 ? L : M)(l, a, c, m, f);
    };
  };
  z = U();
  B = function(e, t) {
    var _a, _b, _c;
    return u.isValidElement(e) && t.indexOf(e.type.muiName ?? ((_c = (_b = (_a = e.type) == null ? void 0 : _a._payload) == null ? void 0 : _b.value) == null ? void 0 : _c.muiName)) !== -1;
  };
  let d = 0;
  function k(e) {
    const [t, s] = u.useState(e), n = e || t;
    return u.useEffect(() => {
      t == null && (d += 1, s(`mui-${d}`));
    }, [
      t
    ]), n;
  }
  const O = {
    ...h
  }, p = O.useId;
  F = function(e) {
    if (p !== void 0) {
      const t = p();
      return e ?? t;
    }
    return k(e);
  };
  const g = u.createContext();
  H = function({ value: e, ...t }) {
    return w.jsx(g.Provider, {
      value: e ?? true,
      ...t
    });
  };
  J = () => u.useContext(g) ?? false;
});
export {
  H as R,
  __tla,
  F as a,
  I as b,
  Y as c,
  U as d,
  V as e,
  j as f,
  x as g,
  y as h,
  B as i,
  z as j,
  J as u
};
