var p = function(o, n) {
  return p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, t) {
    r.__proto__ = t;
  } || function(r, t) {
    for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (r[c] = t[c]);
  }, p(o, n);
};
function _(o, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  p(o, n);
  function r() {
    this.constructor = o;
  }
  o.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
}
var f = function() {
  return f = Object.assign || function(n) {
    for (var r, t = 1, c = arguments.length; t < c; t++) {
      r = arguments[t];
      for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (n[e] = r[e]);
    }
    return n;
  }, f.apply(this, arguments);
};
function h(o, n, r, t) {
  function c(e) {
    return e instanceof r ? e : new r(function(s) {
      s(e);
    });
  }
  return new (r || (r = Promise))(function(e, s) {
    function l(a) {
      try {
        u(t.next(a));
      } catch (i) {
        s(i);
      }
    }
    function y(a) {
      try {
        u(t.throw(a));
      } catch (i) {
        s(i);
      }
    }
    function u(a) {
      a.done ? e(a.value) : c(a.value).then(l, y);
    }
    u((t = t.apply(o, n || [])).next());
  });
}
function d(o, n, r) {
  if (r || arguments.length === 2) for (var t = 0, c = n.length, e; t < c; t++) (e || !(t in n)) && (e || (e = Array.prototype.slice.call(n, 0, t)), e[t] = n[t]);
  return o.concat(e || Array.prototype.slice.call(n));
}
export {
  _,
  f as a,
  d as b,
  h as c
};
