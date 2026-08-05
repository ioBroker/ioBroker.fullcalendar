import { i as q, t as F, o as H, r as I, __tla as __tla_0 } from "./__mfe_internal__fullcalendar__loadShare__react__loadShare__.js-Bs1ZpPYs.js";
import { __tla as __tla_1 } from "./__mfe_internal__fullcalendar__loadShare__prop_mf_2_types__loadShare__.js-DBhwUaK5.js";
import { d as J, j as Q, c as X, b as Y, g as Z, __tla as __tla_2 } from "./createStyled-CeU44wOQ.js";
import { f as V, e as v, i as ee, c as te, __tla as __tla_3 } from "./useMediaQuery-C_yfHz9r.js";
import { m as ne, __tla as __tla_4 } from "./getColorSchemeSelector-bFPhxf4L.js";
let me, ge, ke, pe, se, S;
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
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })()
]).then(async () => {
  let re;
  se = J();
  re = (e, t) => e.filter((n) => t.includes(n));
  S = (e, t, n) => {
    const o = e.keys[0];
    Array.isArray(t) ? t.forEach((r, s) => {
      n((u, g) => {
        s <= e.keys.length - 1 && (s === 0 ? Object.assign(u, g) : u[e.up(e.keys[s])] = g);
      }, r);
    }) : t && typeof t == "object" ? (Object.keys(t).length > e.keys.length ? e.keys : re(e.keys, Object.keys(t))).forEach((s) => {
      if (e.keys.includes(s)) {
        const u = t[s];
        u !== void 0 && n((g, b) => {
          o === s ? Object.assign(g, b) : g[e.up(s)] = b;
        }, u);
      }
    }) : (typeof t == "number" || typeof t == "string") && n((r, s) => {
      Object.assign(r, s);
    }, t);
  };
  function $(e) {
    return `--Grid-${e}Spacing`;
  }
  function h(e) {
    return `--Grid-parent-${e}Spacing`;
  }
  let C, y, oe, ie, ce, ae, fe, le, ue;
  C = "--Grid-columns";
  y = "--Grid-parent-columns";
  oe = ({ theme: e, ownerState: t }) => {
    const n = {};
    return S(e.breakpoints, t.size, (o, r) => {
      let s = {};
      r === "grow" && (s = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      }), r === "auto" && (s = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      }), typeof r == "number" && (s = {
        flexGrow: 0,
        flexBasis: "auto",
        width: `calc(100% * ${r} / var(${y}) - (var(${y}) - ${r}) * (var(${h("column")}) / var(${y})))`
      }), o(n, s);
    }), n;
  };
  ie = ({ theme: e, ownerState: t }) => {
    const n = {};
    return S(e.breakpoints, t.offset, (o, r) => {
      let s = {};
      r === "auto" && (s = {
        marginLeft: "auto"
      }), typeof r == "number" && (s = {
        marginLeft: r === 0 ? "0px" : `calc(100% * ${r} / var(${y}) + var(${h("column")}) * ${r} / var(${y}))`
      }), o(n, s);
    }), n;
  };
  ce = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const n = {
      [C]: 12
    };
    return S(e.breakpoints, t.columns, (o, r) => {
      const s = r ?? 12;
      o(n, {
        [C]: s,
        "> *": {
          [y]: s
        }
      });
    }), n;
  };
  ae = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const n = {};
    return S(e.breakpoints, t.rowSpacing, (o, r) => {
      var _a;
      const s = typeof r == "string" ? r : (_a = e.spacing) == null ? void 0 : _a.call(e, r);
      o(n, {
        [$("row")]: s,
        "> *": {
          [h("row")]: s
        }
      });
    }), n;
  };
  fe = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const n = {};
    return S(e.breakpoints, t.columnSpacing, (o, r) => {
      var _a;
      const s = typeof r == "string" ? r : (_a = e.spacing) == null ? void 0 : _a.call(e, r);
      o(n, {
        [$("column")]: s,
        "> *": {
          [h("column")]: s
        }
      });
    }), n;
  };
  le = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const n = {};
    return S(e.breakpoints, t.direction, (o, r) => {
      o(n, {
        flexDirection: r
      });
    }), n;
  };
  ue = ({ ownerState: e }) => ({
    minWidth: 0,
    boxSizing: "border-box",
    ...e.container && {
      display: "flex",
      flexWrap: "wrap",
      ...e.wrap && e.wrap !== "wrap" && {
        flexWrap: e.wrap
      },
      gap: `var(${$("row")}) var(${$("column")})`
    }
  });
  me = (e) => {
    const t = [];
    return Object.entries(e).forEach(([n, o]) => {
      o !== false && o !== void 0 && t.push(`grid-${n}-${String(o)}`);
    }), t;
  };
  ge = (e, t = "xs") => {
    function n(o) {
      return o === void 0 ? false : typeof o == "string" && !Number.isNaN(Number(o)) || typeof o == "number" && o > 0;
    }
    if (n(e)) return [
      `spacing-${t}-${String(e)}`
    ];
    if (typeof e == "object" && !Array.isArray(e)) {
      const o = [];
      return Object.entries(e).forEach(([r, s]) => {
        n(s) && o.push(`spacing-${r}-${String(s)}`);
      }), o;
    }
    return [];
  };
  pe = (e) => e === void 0 ? [] : typeof e == "object" ? Object.entries(e).map(([t, n]) => `direction-${t}-${n}`) : [
    `direction-xs-${String(e)}`
  ];
  function de(e, t) {
    e.item !== void 0 && delete e.item, e.zeroMinWidth !== void 0 && delete e.zeroMinWidth, t.keys.forEach((n) => {
      e[n] !== void 0 && delete e[n];
    });
  }
  const ye = ne(), Se = se("div", {
    name: "MuiGrid",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  });
  function be(e) {
    return te({
      props: e,
      name: "MuiGrid",
      defaultTheme: ye
    });
  }
  ke = function(e = {}) {
    const { createStyledComponent: t = Se, useThemeProps: n = be, useTheme: o = V, componentName: r = "MuiGrid" } = e, s = (f, c) => {
      const { container: p, direction: a, spacing: l, wrap: i, size: G } = f, x = {
        root: [
          "root",
          p && "container",
          i !== "wrap" && `wrap-xs-${String(i)}`,
          ...pe(a),
          ...me(G),
          ...p ? ge(l, c.breakpoints.keys[0]) : []
        ]
      };
      return Y(x, (w) => Z(r, w), {});
    };
    function u(f, c, p = () => true) {
      const a = {};
      return f === null || (Array.isArray(f) ? f.forEach((l, i) => {
        l !== null && p(l) && c.keys[i] && (a[c.keys[i]] = l);
      }) : typeof f == "object" ? Object.keys(f).forEach((l) => {
        const i = f[l];
        i != null && p(i) && (a[l] = i);
      }) : a[c.keys[0]] = f), a;
    }
    const g = t(ce, fe, ae, oe, le, ue, ie), b = q(function(c, p) {
      const a = o(), l = n(c), i = v(l);
      de(i, a.breakpoints);
      const { className: G, children: x, columns: w = 12, container: j = false, component: N = "div", direction: z = "row", wrap: O = "wrap", size: E = {}, offset: P = {}, spacing: k = 0, rowSpacing: T = k, columnSpacing: W = k, unstable_level: d = 0, ...A } = i, B = u(E, a.breakpoints, (m) => m !== false), M = u(P, a.breakpoints), R = c.columns ?? (d ? void 0 : w), D = c.spacing ?? (d ? void 0 : k), L = c.rowSpacing ?? c.spacing ?? (d ? void 0 : T), K = c.columnSpacing ?? c.spacing ?? (d ? void 0 : W), _ = {
        ...i,
        level: d,
        columns: R,
        container: j,
        direction: z,
        wrap: O,
        spacing: D,
        rowSpacing: L,
        columnSpacing: K,
        size: B,
        offset: M
      }, U = s(_, a);
      return Q.jsx(g, {
        ref: p,
        as: N,
        ownerState: _,
        className: X(U.root, G),
        ...A,
        children: F.map(x, (m) => {
          var _a;
          return H(m) && ee(m, [
            "Grid"
          ]) && j && m.props.container ? I(m, {
            unstable_level: ((_a = m.props) == null ? void 0 : _a.unstable_level) ?? d + 1
          }) : m;
        })
      });
    });
    return b.muiName = "Grid", b;
  };
});
export {
  __tla,
  me as a,
  ge as b,
  ke as c,
  pe as g,
  se as s,
  S as t
};
