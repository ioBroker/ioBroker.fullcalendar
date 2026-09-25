import {g as e, h as t} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare__react__loadShare__.js-CvmZdlJR.js";
function n(e2) {
  var t2 = Object.create(null);
  return function(n2) {
    return t2[n2] === void 0 && (t2[n2] = e2(n2)), t2[n2];
  };
}
function r() {
  return r = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        ({}).hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, r.apply(null, arguments);
}
function i(e2, t2, n2) {
  var r2 = ``;
  return n2.split(` `).forEach(function(n3) {
    e2[n3] === void 0 ? n3 && (r2 += n3 + ` `) : t2.push(e2[n3] + `;`);
  }), r2;
}
var a = function(e2, t2, n2) {
  var r2 = e2.key + `-` + t2.name;
  n2 === false && e2.registered[r2] === void 0 && (e2.registered[r2] = t2.styles);
}, o = function(e2, t2, n2) {
  a(e2, t2, n2);
  var r2 = e2.key + `-` + t2.name;
  if (e2.inserted[t2.name] === void 0) {
    var i2 = t2;
    do
      e2.insert(t2 === i2 ? `.` + r2 : ``, i2, e2.sheet, true), i2 = i2.next;
    while (i2 !== void 0);
  }
};
function s(e2) {
  for (var t2 = 0, n2, r2 = 0, i2 = e2.length; i2 >= 4; ++r2, i2 -= 4)
    n2 = e2.charCodeAt(r2) & 255 | (e2.charCodeAt(++r2) & 255) << 8 | (e2.charCodeAt(++r2) & 255) << 16 | (e2.charCodeAt(++r2) & 255) << 24, n2 = (n2 & 65535) * 1540483477 + ((n2 >>> 16) * 59797 << 16), n2 ^= n2 >>> 24, t2 = (n2 & 65535) * 1540483477 + ((n2 >>> 16) * 59797 << 16) ^ (t2 & 65535) * 1540483477 + ((t2 >>> 16) * 59797 << 16);
  switch (i2) {
    case 3:
      t2 ^= (e2.charCodeAt(r2 + 2) & 255) << 16;
    case 2:
      t2 ^= (e2.charCodeAt(r2 + 1) & 255) << 8;
    case 1:
      t2 ^= e2.charCodeAt(r2) & 255, t2 = (t2 & 65535) * 1540483477 + ((t2 >>> 16) * 59797 << 16);
  }
  return t2 ^= t2 >>> 13, t2 = (t2 & 65535) * 1540483477 + ((t2 >>> 16) * 59797 << 16), ((t2 ^ t2 >>> 15) >>> 0).toString(36);
}
var c = {animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1}, l = /[A-Z]|^ms/g, u = /_EMO_([^_]+?)_([^]*?)_EMO_/g, d = function(e2) {
  return e2.charCodeAt(1) === 45;
}, f = function(e2) {
  return e2 != null && typeof e2 != `boolean`;
}, p = n(function(e2) {
  return d(e2) ? e2 : e2.replace(l, `-$&`).toLowerCase();
}), m = function(e2, t2) {
  switch (e2) {
    case `animation`:
    case `animationName`:
      if (typeof t2 == `string`)
        return t2.replace(u, function(e3, t3, n2) {
          return v = {name: t3, styles: n2, next: v}, t3;
        });
  }
  return c[e2] !== 1 && !d(e2) && typeof t2 == `number` && t2 !== 0 ? t2 + `px` : t2;
};
function h(e2, t2, n2) {
  if (n2 == null)
    return ``;
  var r2 = n2;
  if (r2.__emotion_styles !== void 0)
    return r2;
  switch (typeof n2) {
    case `boolean`:
      return ``;
    case `object`:
      var i2 = n2;
      if (i2.anim === 1)
        return v = {name: i2.name, styles: i2.styles, next: v}, i2.name;
      var a2 = n2;
      if (a2.styles !== void 0) {
        var o2 = a2.next;
        if (o2 !== void 0)
          for (; o2 !== void 0; )
            v = {name: o2.name, styles: o2.styles, next: v}, o2 = o2.next;
        return a2.styles + `;`;
      }
      return g(e2, t2, n2);
    case `function`:
      if (e2 !== void 0) {
        var s2 = v, c2 = n2(e2);
        return v = s2, h(e2, t2, c2);
      }
  }
  var l2 = n2;
  if (t2 == null)
    return l2;
  var u2 = t2[l2];
  return u2 === void 0 ? l2 : u2;
}
function g(e2, t2, n2) {
  var r2 = ``;
  if (Array.isArray(n2))
    for (var i2 = 0; i2 < n2.length; i2++)
      r2 += h(e2, t2, n2[i2]) + `;`;
  else
    for (var a2 in n2) {
      var o2 = n2[a2];
      if (typeof o2 != `object`) {
        var s2 = o2;
        t2 != null && t2[s2] !== void 0 ? r2 += a2 + `{` + t2[s2] + `}` : f(s2) && (r2 += p(a2) + `:` + m(a2, s2) + `;`);
      } else if (Array.isArray(o2) && typeof o2[0] == `string` && (t2 == null || t2[o2[0]] === void 0))
        for (var c2 = 0; c2 < o2.length; c2++)
          f(o2[c2]) && (r2 += p(a2) + `:` + m(a2, o2[c2]) + `;`);
      else {
        var l2 = h(e2, t2, o2);
        switch (a2) {
          case `animation`:
          case `animationName`:
            r2 += p(a2) + `:` + l2 + `;`;
            break;
          default:
            r2 += a2 + `{` + l2 + `}`;
        }
      }
    }
  return r2;
}
var _ = /label:\s*([^\s;{]+)\s*(;|$)/g, v;
function y(e2, t2, n2) {
  if (e2.length === 1 && typeof e2[0] == `object` && e2[0] !== null && e2[0].styles !== void 0)
    return e2[0];
  var r2 = true, i2 = ``;
  v = void 0;
  var a2 = e2[0];
  a2 == null || a2.raw === void 0 ? (r2 = false, i2 += h(n2, t2, a2)) : i2 += a2[0];
  for (var o2 = 1; o2 < e2.length; o2++)
    i2 += h(n2, t2, e2[o2]), r2 && (i2 += a2[o2]);
  _.lastIndex = 0;
  for (var c2 = ``, l2; (l2 = _.exec(i2)) !== null; )
    c2 += `-` + l2[1];
  return {name: s(i2) + c2, styles: i2, next: v};
}
var b = function(e2) {
  return e2();
}, x = t || false, S = x || b, C = x || e;
export {
  o as a,
  n as c,
  i,
  C as n,
  a as o,
  y as r,
  r as s,
  S as t
};
