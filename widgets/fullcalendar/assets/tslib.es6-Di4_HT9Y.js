import { f as l } from "./fullcalendar__mf_v__runtimeInit__mf_v__-CdxiMOBu.js";
let j, f, A, O, E, x;
let __tla = (async () => {
  const { initPromise: m } = l, d = m.then((e) => e.loadShare("@mui/material", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), y = await d.then((e) => e());
  x = y;
  const { initPromise: S } = l, g = S.then((e) => e.loadShare("@mui/icons-material", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), v = await g.then((e) => e());
  let u;
  O = v;
  u = function(e, r) {
    return u = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(n, t) {
      n.__proto__ = t;
    } || function(n, t) {
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a]);
    }, u(e, r);
  };
  j = function(e, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    u(e, r);
    function n() {
      this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
  f = function() {
    return f = Object.assign || function(r) {
      for (var n, t = 1, a = arguments.length; t < a; t++) {
        n = arguments[t];
        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
      }
      return r;
    }, f.apply(this, arguments);
  };
  E = function(e, r, n, t) {
    function a(o) {
      return o instanceof n ? o : new n(function(s) {
        s(o);
      });
    }
    return new (n || (n = Promise))(function(o, s) {
      function p(i) {
        try {
          _(t.next(i));
        } catch (c) {
          s(c);
        }
      }
      function h(i) {
        try {
          _(t.throw(i));
        } catch (c) {
          s(c);
        }
      }
      function _(i) {
        i.done ? o(i.value) : a(i.value).then(p, h);
      }
      _((t = t.apply(e, r || [])).next());
    });
  };
  A = function(e, r, n) {
    if (n || arguments.length === 2) for (var t = 0, a = r.length, o; t < a; t++) (o || !(t in r)) && (o || (o = Array.prototype.slice.call(r, 0, t)), o[t] = r[t]);
    return e.concat(o || Array.prototype.slice.call(r));
  };
})();
export {
  j as _,
  __tla,
  f as a,
  A as b,
  O as c,
  E as d,
  x as f
};
