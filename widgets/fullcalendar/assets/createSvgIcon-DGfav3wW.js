import { f as a, __tla as __tla_0 } from "./fullcalendar__loadShare__react__loadShare__-tokQnSgq.js";
import { d as x, u as I, g as w, a as C, j as c, b, c as R, __tla as __tla_1 } from "./DefaultPropsProvider-XYnvdTOt.js";
import { c as i, __tla as __tla_2 } from "./getColorSchemeSelector-C1WqGkJ4.js";
import { T, v as j, f as M, __tla as __tla_3 } from "./defaultTheme-CaQBKbzT.js";
let f, $, L, O, P, A, E, N, D;
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
  $ = function(o) {
    return o !== "ownerState" && o !== "theme" && o !== "sx" && o !== "as";
  };
  E = (o) => $(o) && o !== "classes";
  N = x({
    themeId: T,
    defaultTheme: j,
    rootShouldForwardProp: E
  });
  A = M.unstable_memoTheme;
  D = function(o) {
    return I(o);
  };
  P = function(o) {
    return w("MuiSvgIcon", o);
  };
  let U, B;
  L = C("MuiSvgIcon", [
    "root",
    "colorPrimary",
    "colorSecondary",
    "colorAction",
    "colorError",
    "colorDisabled",
    "fontSizeInherit",
    "fontSizeSmall",
    "fontSizeMedium",
    "fontSizeLarge"
  ]);
  U = (o) => {
    const { color: e, fontSize: t, classes: r } = o, s = {
      root: [
        "root",
        e !== "inherit" && `color${i(e)}`,
        `fontSize${i(t)}`
      ]
    };
    return R(s, P, r);
  };
  B = N("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (o, e) => {
      const { ownerState: t } = o;
      return [
        e.root,
        t.color !== "inherit" && e[`color${i(t.color)}`],
        e[`fontSize${i(t.fontSize)}`]
      ];
    }
  })(A(({ theme: o }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      flexShrink: 0,
      transition: (_d = (_a = o.transitions) == null ? void 0 : _a.create) == null ? void 0 : _d.call(_a, "fill", {
        duration: (_c = (_b = (o.vars ?? o).transitions) == null ? void 0 : _b.duration) == null ? void 0 : _c.shorter
      }),
      variants: [
        {
          props: (e) => !e.hasSvgAsChild,
          style: {
            fill: "currentColor"
          }
        },
        {
          props: {
            fontSize: "inherit"
          },
          style: {
            fontSize: "inherit"
          }
        },
        {
          props: {
            fontSize: "small"
          },
          style: {
            fontSize: ((_f = (_e = o.typography) == null ? void 0 : _e.pxToRem) == null ? void 0 : _f.call(_e, 20)) || "1.25rem"
          }
        },
        {
          props: {
            fontSize: "medium"
          },
          style: {
            fontSize: ((_h = (_g = o.typography) == null ? void 0 : _g.pxToRem) == null ? void 0 : _h.call(_g, 24)) || "1.5rem"
          }
        },
        {
          props: {
            fontSize: "large"
          },
          style: {
            fontSize: ((_j = (_i = o.typography) == null ? void 0 : _i.pxToRem) == null ? void 0 : _j.call(_i, 35)) || "2.1875rem"
          }
        },
        ...Object.entries((o.vars ?? o).palette).filter(([, e]) => e && e.main).map(([e]) => {
          var _a2, _b2;
          return {
            props: {
              color: e
            },
            style: {
              color: (_b2 = (_a2 = (o.vars ?? o).palette) == null ? void 0 : _a2[e]) == null ? void 0 : _b2.main
            }
          };
        }),
        {
          props: {
            color: "action"
          },
          style: {
            color: (_l = (_k = (o.vars ?? o).palette) == null ? void 0 : _k.action) == null ? void 0 : _l.active
          }
        },
        {
          props: {
            color: "disabled"
          },
          style: {
            color: (_n = (_m = (o.vars ?? o).palette) == null ? void 0 : _m.action) == null ? void 0 : _n.disabled
          }
        },
        {
          props: {
            color: "inherit"
          },
          style: {
            color: void 0
          }
        }
      ]
    };
  }));
  f = a.forwardRef(function(e, t) {
    const r = D({
      props: e,
      name: "MuiSvgIcon"
    }), { children: s, className: v, color: g = "inherit", component: m = "svg", fontSize: h = "medium", htmlColor: y, inheritViewBox: p = false, titleAccess: n, viewBox: d = "0 0 24 24", ..._ } = r, l = a.isValidElement(s) && s.type === "svg", S = {
      ...r,
      color: g,
      component: m,
      fontSize: h,
      instanceFontSize: e.fontSize,
      inheritViewBox: p,
      viewBox: d,
      hasSvgAsChild: l
    }, u = {};
    p || (u.viewBox = d);
    const z = U(S);
    return c.jsxs(B, {
      as: m,
      className: b(z.root, v),
      focusable: "false",
      color: y,
      "aria-hidden": n ? void 0 : true,
      role: n ? "img" : void 0,
      ref: t,
      ...u,
      ..._,
      ...l && s.props,
      ownerState: S,
      children: [
        l ? s.props.children : s,
        n ? c.jsx("title", {
          children: n
        }) : null
      ]
    });
  });
  f.muiName = "SvgIcon";
  O = function(o, e) {
    function t(r, s) {
      return c.jsx(f, {
        "data-testid": `${e}Icon`,
        ref: s,
        ...r,
        children: o
      });
    }
    return t.muiName = f.muiName, a.memo(a.forwardRef(t));
  };
});
export {
  f as S,
  __tla,
  $ as a,
  L as b,
  O as c,
  P as g,
  A as m,
  E as r,
  N as s,
  D as u
};
