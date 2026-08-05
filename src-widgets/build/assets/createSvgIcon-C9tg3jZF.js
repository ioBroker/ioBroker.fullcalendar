import { i as d, o as I, u as _, __tla as __tla_0 } from "./__mfe_internal__fullcalendar__loadShare__react__loadShare__.js-Bs1ZpPYs.js";
import { d as C, u as w, g as b, a as R, j as l, c as T, b as j, __tla as __tla_1 } from "./createStyled-CeU44wOQ.js";
import { __tla as __tla_2 } from "./__mfe_internal__fullcalendar__loadShare__prop_mf_2_types__loadShare__.js-DBhwUaK5.js";
import { z as M, __tla as __tla_3 } from "./__mfe_internal__fullcalendar__loadShare___mf_0_mui_mf_1_system__loadShare__.js-CWZ1l9AA.js";
import { c as n, __tla as __tla_4 } from "./getColorSchemeSelector-bFPhxf4L.js";
import { T as $, u as N, __tla as __tla_5 } from "./defaultTheme-vD2G7H8v.js";
let c, A, J, K, B, P, D, E, U;
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
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })()
]).then(async () => {
  A = function(o) {
    return o !== "ownerState" && o !== "theme" && o !== "sx" && o !== "as";
  };
  D = (o) => A(o) && o !== "classes";
  E = C({
    themeId: $,
    defaultTheme: N,
    rootShouldForwardProp: D
  });
  P = M;
  U = function(o) {
    return w(o);
  };
  B = function(o) {
    return b("MuiSvgIcon", o);
  };
  let F, k;
  J = R("MuiSvgIcon", [
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
  F = (o) => {
    const { color: t, fontSize: s, classes: r } = o, e = {
      root: [
        "root",
        t !== "inherit" && `color${n(t)}`,
        `fontSize${n(s)}`
      ]
    };
    return j(e, B, r);
  };
  k = E("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (o, t) => {
      const { ownerState: s } = o;
      return [
        t.root,
        s.color !== "inherit" && t[`color${n(s.color)}`],
        t[`fontSize${n(s.fontSize)}`]
      ];
    }
  })(P(({ theme: o }) => {
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
          props: (t) => !t.hasSvgAsChild,
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
        ...Object.entries((o.vars ?? o).palette).filter(([, t]) => t && t.main).map(([t]) => {
          var _a2, _b2;
          return {
            props: {
              color: t
            },
            style: {
              color: (_b2 = (_a2 = (o.vars ?? o).palette) == null ? void 0 : _a2[t]) == null ? void 0 : _b2.main
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
  c = d(function(t, s) {
    const r = U({
      props: t,
      name: "MuiSvgIcon"
    }), { children: e, className: v, color: g = "inherit", component: p = "svg", fontSize: y = "medium", htmlColor: h, inheritViewBox: m = false, titleAccess: i, viewBox: f = "0 0 24 24", ...z } = r, a = I(e) && e.type === "svg", u = {
      ...r,
      color: g,
      component: p,
      fontSize: y,
      instanceFontSize: t.fontSize,
      inheritViewBox: m,
      viewBox: f,
      hasSvgAsChild: a
    }, S = {};
    m || (S.viewBox = f);
    const x = F(u);
    return l.jsxs(k, {
      as: p,
      className: T(x.root, v),
      focusable: "false",
      color: h,
      "aria-hidden": i ? void 0 : true,
      role: i ? "img" : void 0,
      ref: s,
      ...S,
      ...z,
      ...a && e.props,
      ownerState: u,
      children: [
        a ? e.props.children : e,
        i ? l.jsx("title", {
          children: i
        }) : null
      ]
    });
  });
  c.muiName = "SvgIcon";
  K = function(o, t) {
    function s(r, e) {
      return l.jsx(c, {
        "data-testid": `${t}Icon`,
        ref: e,
        ...r,
        children: o
      });
    }
    return s.muiName = c.muiName, _(d(s));
  };
});
export {
  c as S,
  __tla,
  A as a,
  J as b,
  K as c,
  B as g,
  P as m,
  D as r,
  E as s,
  U as u
};
