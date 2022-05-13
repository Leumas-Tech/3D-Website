const Ac = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const o of r.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerpolicy && (r.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = e(i);
    fetch(i.href, r);
  }
};
Ac();
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const ho = "140",
  zn = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  On = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  Cc = 0,
  Uo = 1,
  Lc = 2,
  bl = 1,
  Rc = 2,
  zi = 3,
  Wi = 0,
  De = 1,
  ui = 2,
  wl = 1,
  un = 0,
  li = 1,
  Ho = 2,
  Vo = 3,
  ko = 4,
  Pc = 5,
  ii = 100,
  Dc = 101,
  Ic = 102,
  Go = 103,
  Wo = 104,
  Fc = 200,
  Nc = 201,
  Bc = 202,
  zc = 203,
  Sl = 204,
  El = 205,
  Oc = 206,
  Uc = 207,
  Hc = 208,
  Vc = 209,
  kc = 210,
  Gc = 0,
  Wc = 1,
  qc = 2,
  Js = 3,
  Xc = 4,
  jc = 5,
  Yc = 6,
  Zc = 7,
  Jr = 0,
  Jc = 1,
  $c = 2,
  tn = 0,
  Kc = 1,
  Qc = 2,
  th = 3,
  eh = 4,
  nh = 5,
  Tl = 300,
  di = 301,
  fi = 302,
  $s = 303,
  Ks = 304,
  $r = 306,
  Qs = 1e3,
  Re = 1001,
  to = 1002,
  ae = 1003,
  qo = 1004,
  Xo = 1005,
  ve = 1006,
  ih = 1007,
  Kr = 1008,
  Pn = 1009,
  rh = 1010,
  sh = 1011,
  qi = 1012,
  oh = 1013,
  Hr = 1014,
  Tn = 1015,
  Xi = 1016,
  ah = 1017,
  lh = 1018,
  ci = 1020,
  ch = 1021,
  hh = 1022,
  Pe = 1023,
  uh = 1024,
  dh = 1025,
  Cn = 1026,
  pi = 1027,
  fh = 1028,
  ph = 1029,
  mh = 1030,
  gh = 1031,
  _h = 1033,
  hs = 33776,
  us = 33777,
  ds = 33778,
  fs = 33779,
  jo = 35840,
  Yo = 35841,
  Zo = 35842,
  Jo = 35843,
  xh = 36196,
  $o = 37492,
  Ko = 37496,
  Qo = 37808,
  ta = 37809,
  ea = 37810,
  na = 37811,
  ia = 37812,
  ra = 37813,
  sa = 37814,
  oa = 37815,
  aa = 37816,
  la = 37817,
  ca = 37818,
  ha = 37819,
  ua = 37820,
  da = 37821,
  fa = 36492,
  yh = 2200,
  vh = 2201,
  Mh = 2202,
  Gr = 2300,
  Wr = 2301,
  ps = 2302,
  ri = 2400,
  si = 2401,
  qr = 2402,
  uo = 2500,
  Al = 2501,
  bh = 0,
  pn = 3e3,
  Zt = 3001,
  wh = 3200,
  Sh = 3201,
  _i = 0,
  Eh = 1,
  Ke = "srgb",
  An = "srgb-linear",
  ms = 7680,
  Th = 519,
  ji = 35044,
  Xr = 35048,
  pa = "300 es",
  eo = 1035;
class _n {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e);
  }
  hasEventListener(t, e) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[t] !== void 0 && n[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    if (this._listeners === void 0) return;
    const i = this._listeners[t];
    if (i !== void 0) {
      const r = i.indexOf(e);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0) return;
    const n = this._listeners[t.type];
    if (n !== void 0) {
      t.target = this;
      const i = n.slice(0);
      for (let r = 0, o = i.length; r < o; r++) i[r].call(this, t);
      t.target = null;
    }
  }
}
const ue = [];
for (let s = 0; s < 256; s++) ue[s] = (s < 16 ? "0" : "") + s.toString(16);
let ma = 1234567;
const Hi = Math.PI / 180,
  Yi = 180 / Math.PI;
function Ie() {
  const s = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    ue[s & 255] +
    ue[(s >> 8) & 255] +
    ue[(s >> 16) & 255] +
    ue[(s >> 24) & 255] +
    "-" +
    ue[t & 255] +
    ue[(t >> 8) & 255] +
    "-" +
    ue[((t >> 16) & 15) | 64] +
    ue[(t >> 24) & 255] +
    "-" +
    ue[(e & 63) | 128] +
    ue[(e >> 8) & 255] +
    "-" +
    ue[(e >> 16) & 255] +
    ue[(e >> 24) & 255] +
    ue[n & 255] +
    ue[(n >> 8) & 255] +
    ue[(n >> 16) & 255] +
    ue[(n >> 24) & 255]
  ).toLowerCase();
}
function le(s, t, e) {
  return Math.max(t, Math.min(e, s));
}
function fo(s, t) {
  return ((s % t) + t) % t;
}
function Ah(s, t, e, n, i) {
  return n + ((s - t) * (i - n)) / (e - t);
}
function Ch(s, t, e) {
  return s !== t ? (e - s) / (t - s) : 0;
}
function Vi(s, t, e) {
  return (1 - e) * s + e * t;
}
function Lh(s, t, e, n) {
  return Vi(s, t, 1 - Math.exp(-e * n));
}
function Rh(s, t = 1) {
  return t - Math.abs(fo(s, t * 2) - t);
}
function Ph(s, t, e) {
  return s <= t
    ? 0
    : s >= e
    ? 1
    : ((s = (s - t) / (e - t)), s * s * (3 - 2 * s));
}
function Dh(s, t, e) {
  return s <= t
    ? 0
    : s >= e
    ? 1
    : ((s = (s - t) / (e - t)), s * s * s * (s * (s * 6 - 15) + 10));
}
function Ih(s, t) {
  return s + Math.floor(Math.random() * (t - s + 1));
}
function Fh(s, t) {
  return s + Math.random() * (t - s);
}
function Nh(s) {
  return s * (0.5 - Math.random());
}
function Bh(s) {
  s !== void 0 && (ma = s);
  let t = (ma += 1831565813);
  return (
    (t = Math.imul(t ^ (t >>> 15), t | 1)),
    (t ^= t + Math.imul(t ^ (t >>> 7), t | 61)),
    ((t ^ (t >>> 14)) >>> 0) / 4294967296
  );
}
function zh(s) {
  return s * Hi;
}
function Oh(s) {
  return s * Yi;
}
function no(s) {
  return (s & (s - 1)) === 0 && s !== 0;
}
function Uh(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function jr(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function Hh(s, t, e, n, i) {
  const r = Math.cos,
    o = Math.sin,
    a = r(e / 2),
    l = o(e / 2),
    c = r((t + n) / 2),
    h = o((t + n) / 2),
    u = r((t - n) / 2),
    d = o((t - n) / 2),
    p = r((n - t) / 2),
    g = o((n - t) / 2);
  switch (i) {
    case "XYX":
      s.set(a * h, l * u, l * d, a * c);
      break;
    case "YZY":
      s.set(l * d, a * h, l * u, a * c);
      break;
    case "ZXZ":
      s.set(l * u, l * d, a * h, a * c);
      break;
    case "XZX":
      s.set(a * h, l * g, l * p, a * c);
      break;
    case "YXY":
      s.set(l * p, a * h, l * g, a * c);
      break;
    case "ZYZ":
      s.set(l * g, l * p, a * h, a * c);
      break;
    default:
      console.warn(
        "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          i
      );
  }
}
function Vh(s, t) {
  switch (t.constructor) {
    case Float32Array:
      return s;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function kh(s, t) {
  switch (t.constructor) {
    case Float32Array:
      return s;
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
var Gh = Object.freeze({
  __proto__: null,
  DEG2RAD: Hi,
  RAD2DEG: Yi,
  generateUUID: Ie,
  clamp: le,
  euclideanModulo: fo,
  mapLinear: Ah,
  inverseLerp: Ch,
  lerp: Vi,
  damp: Lh,
  pingpong: Rh,
  smoothstep: Ph,
  smootherstep: Dh,
  randInt: Ih,
  randFloat: Fh,
  randFloatSpread: Nh,
  seededRandom: Bh,
  degToRad: zh,
  radToDeg: Oh,
  isPowerOfTwo: no,
  ceilPowerOfTwo: Uh,
  floorPowerOfTwo: jr,
  setQuaternionFromProperEuler: Hh,
  normalize: kh,
  denormalize: Vh,
});
class Z {
  constructor(t = 0, e = 0) {
    (this.x = t), (this.y = e);
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return (this.x = t), (this.y = e), this;
  }
  setScalar(t) {
    return (this.x = t), (this.y = t), this;
  }
  setX(t) {
    return (this.x = t), this;
  }
  setY(t) {
    return (this.y = t), this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return (this.x = t.x), (this.y = t.y), this;
  }
  add(t, e) {
    return e !== void 0
      ? (console.warn(
          "THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(t, e))
      : ((this.x += t.x), (this.y += t.y), this);
  }
  addScalar(t) {
    return (this.x += t), (this.y += t), this;
  }
  addVectors(t, e) {
    return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
  }
  addScaledVector(t, e) {
    return (this.x += t.x * e), (this.y += t.y * e), this;
  }
  sub(t, e) {
    return e !== void 0
      ? (console.warn(
          "THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(t, e))
      : ((this.x -= t.x), (this.y -= t.y), this);
  }
  subScalar(t) {
    return (this.x -= t), (this.y -= t), this;
  }
  subVectors(t, e) {
    return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
  }
  multiply(t) {
    return (this.x *= t.x), (this.y *= t.y), this;
  }
  multiplyScalar(t) {
    return (this.x *= t), (this.y *= t), this;
  }
  divide(t) {
    return (this.x /= t.x), (this.y /= t.y), this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x,
      n = this.y,
      i = t.elements;
    return (
      (this.x = i[0] * e + i[3] * n + i[6]),
      (this.y = i[1] * e + i[4] * n + i[7]),
      this
    );
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), this
    );
  }
  clamp(t, e) {
    return (
      (this.x = Math.max(t.x, Math.min(e.x, this.x))),
      (this.y = Math.max(t.y, Math.min(e.y, this.y))),
      this
    );
  }
  clampScalar(t, e) {
    return (
      (this.x = Math.max(t, Math.min(e, this.x))),
      (this.y = Math.max(t, Math.min(e, this.y))),
      this
    );
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(t, Math.min(e, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x,
      n = this.y - t.y;
    return e * e + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this;
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n), (this.y = t.y + (e.y - t.y) * n), this
    );
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return (this.x = t[e]), (this.y = t[e + 1]), this;
  }
  toArray(t = [], e = 0) {
    return (t[e] = this.x), (t[e + 1] = this.y), t;
  }
  fromBufferAttribute(t, e, n) {
    return (
      n !== void 0 &&
        console.warn(
          "THREE.Vector2: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = t.getX(e)),
      (this.y = t.getY(e)),
      this
    );
  }
  rotateAround(t, e) {
    const n = Math.cos(e),
      i = Math.sin(e),
      r = this.x - t.x,
      o = this.y - t.y;
    return (this.x = r * n - o * i + t.x), (this.y = r * i + o * n + t.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
Z.prototype.isVector2 = !0;
class de {
  constructor() {
    (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      arguments.length > 0 &&
        console.error(
          "THREE.Matrix3: the constructor no longer reads arguments. use .set() instead."
        );
  }
  set(t, e, n, i, r, o, a, l, c) {
    const h = this.elements;
    return (
      (h[0] = t),
      (h[1] = i),
      (h[2] = a),
      (h[3] = e),
      (h[4] = r),
      (h[5] = l),
      (h[6] = n),
      (h[7] = o),
      (h[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(t) {
    const e = this.elements,
      n = t.elements;
    return (
      (e[0] = n[0]),
      (e[1] = n[1]),
      (e[2] = n[2]),
      (e[3] = n[3]),
      (e[4] = n[4]),
      (e[5] = n[5]),
      (e[6] = n[6]),
      (e[7] = n[7]),
      (e[8] = n[8]),
      this
    );
  }
  extractBasis(t, e, n) {
    return (
      t.setFromMatrix3Column(this, 0),
      e.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return (
      this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
    );
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements,
      i = e.elements,
      r = this.elements,
      o = n[0],
      a = n[3],
      l = n[6],
      c = n[1],
      h = n[4],
      u = n[7],
      d = n[2],
      p = n[5],
      g = n[8],
      m = i[0],
      f = i[3],
      _ = i[6],
      w = i[1],
      C = i[4],
      T = i[7],
      y = i[2],
      L = i[5],
      I = i[8];
    return (
      (r[0] = o * m + a * w + l * y),
      (r[3] = o * f + a * C + l * L),
      (r[6] = o * _ + a * T + l * I),
      (r[1] = c * m + h * w + u * y),
      (r[4] = c * f + h * C + u * L),
      (r[7] = c * _ + h * T + u * I),
      (r[2] = d * m + p * w + g * y),
      (r[5] = d * f + p * C + g * L),
      (r[8] = d * _ + p * T + g * I),
      this
    );
  }
  multiplyScalar(t) {
    const e = this.elements;
    return (
      (e[0] *= t),
      (e[3] *= t),
      (e[6] *= t),
      (e[1] *= t),
      (e[4] *= t),
      (e[7] *= t),
      (e[2] *= t),
      (e[5] *= t),
      (e[8] *= t),
      this
    );
  }
  determinant() {
    const t = this.elements,
      e = t[0],
      n = t[1],
      i = t[2],
      r = t[3],
      o = t[4],
      a = t[5],
      l = t[6],
      c = t[7],
      h = t[8];
    return (
      e * o * h - e * a * c - n * r * h + n * a * l + i * r * c - i * o * l
    );
  }
  invert() {
    const t = this.elements,
      e = t[0],
      n = t[1],
      i = t[2],
      r = t[3],
      o = t[4],
      a = t[5],
      l = t[6],
      c = t[7],
      h = t[8],
      u = h * o - a * c,
      d = a * l - h * r,
      p = c * r - o * l,
      g = e * u + n * d + i * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const m = 1 / g;
    return (
      (t[0] = u * m),
      (t[1] = (i * c - h * n) * m),
      (t[2] = (a * n - i * o) * m),
      (t[3] = d * m),
      (t[4] = (h * e - i * l) * m),
      (t[5] = (i * r - a * e) * m),
      (t[6] = p * m),
      (t[7] = (n * l - c * e) * m),
      (t[8] = (o * e - n * r) * m),
      this
    );
  }
  transpose() {
    let t;
    const e = this.elements;
    return (
      (t = e[1]),
      (e[1] = e[3]),
      (e[3] = t),
      (t = e[2]),
      (e[2] = e[6]),
      (e[6] = t),
      (t = e[5]),
      (e[5] = e[7]),
      (e[7] = t),
      this
    );
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return (
      (t[0] = e[0]),
      (t[1] = e[3]),
      (t[2] = e[6]),
      (t[3] = e[1]),
      (t[4] = e[4]),
      (t[5] = e[7]),
      (t[6] = e[2]),
      (t[7] = e[5]),
      (t[8] = e[8]),
      this
    );
  }
  setUvTransform(t, e, n, i, r, o, a) {
    const l = Math.cos(r),
      c = Math.sin(r);
    return (
      this.set(
        n * l,
        n * c,
        -n * (l * o + c * a) + o + t,
        -i * c,
        i * l,
        -i * (-c * o + l * a) + a + e,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(t, e) {
    const n = this.elements;
    return (
      (n[0] *= t),
      (n[3] *= t),
      (n[6] *= t),
      (n[1] *= e),
      (n[4] *= e),
      (n[7] *= e),
      this
    );
  }
  rotate(t) {
    const e = Math.cos(t),
      n = Math.sin(t),
      i = this.elements,
      r = i[0],
      o = i[3],
      a = i[6],
      l = i[1],
      c = i[4],
      h = i[7];
    return (
      (i[0] = e * r + n * l),
      (i[3] = e * o + n * c),
      (i[6] = e * a + n * h),
      (i[1] = -n * r + e * l),
      (i[4] = -n * o + e * c),
      (i[7] = -n * a + e * h),
      this
    );
  }
  translate(t, e) {
    const n = this.elements;
    return (
      (n[0] += t * n[2]),
      (n[3] += t * n[5]),
      (n[6] += t * n[8]),
      (n[1] += e * n[2]),
      (n[4] += e * n[5]),
      (n[7] += e * n[8]),
      this
    );
  }
  equals(t) {
    const e = this.elements,
      n = t.elements;
    for (let i = 0; i < 9; i++) if (e[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return (
      (t[e] = n[0]),
      (t[e + 1] = n[1]),
      (t[e + 2] = n[2]),
      (t[e + 3] = n[3]),
      (t[e + 4] = n[4]),
      (t[e + 5] = n[5]),
      (t[e + 6] = n[6]),
      (t[e + 7] = n[7]),
      (t[e + 8] = n[8]),
      t
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
de.prototype.isMatrix3 = !0;
function Cl(s) {
  for (let t = s.length - 1; t >= 0; --t) if (s[t] > 65535) return !0;
  return !1;
}
function Zi(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function Ln(s) {
  return s < 0.04045
    ? s * 0.0773993808
    : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function Vr(s) {
  return s < 0.0031308 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
const gs = { [Ke]: { [An]: Ln }, [An]: { [Ke]: Vr } },
  Te = {
    legacyMode: !0,
    get workingColorSpace() {
      return An;
    },
    set workingColorSpace(s) {
      console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function (s, t, e) {
      if (this.legacyMode || t === e || !t || !e) return s;
      if (gs[t] && gs[t][e] !== void 0) {
        const n = gs[t][e];
        return (s.r = n(s.r)), (s.g = n(s.g)), (s.b = n(s.b)), s;
      }
      throw new Error("Unsupported color space conversion.");
    },
    fromWorkingColorSpace: function (s, t) {
      return this.convert(s, this.workingColorSpace, t);
    },
    toWorkingColorSpace: function (s, t) {
      return this.convert(s, t, this.workingColorSpace);
    },
  },
  Ll = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  ie = { r: 0, g: 0, b: 0 },
  Ae = { h: 0, s: 0, l: 0 },
  lr = { h: 0, s: 0, l: 0 };
function _s(s, t, e) {
  return (
    e < 0 && (e += 1),
    e > 1 && (e -= 1),
    e < 1 / 6
      ? s + (t - s) * 6 * e
      : e < 1 / 2
      ? t
      : e < 2 / 3
      ? s + (t - s) * 6 * (2 / 3 - e)
      : s
  );
}
function cr(s, t) {
  return (t.r = s.r), (t.g = s.g), (t.b = s.b), t;
}
class xt {
  constructor(t, e, n) {
    return e === void 0 && n === void 0 ? this.set(t) : this.setRGB(t, e, n);
  }
  set(t) {
    return (
      t && t.isColor
        ? this.copy(t)
        : typeof t == "number"
        ? this.setHex(t)
        : typeof t == "string" && this.setStyle(t),
      this
    );
  }
  setScalar(t) {
    return (this.r = t), (this.g = t), (this.b = t), this;
  }
  setHex(t, e = Ke) {
    return (
      (t = Math.floor(t)),
      (this.r = ((t >> 16) & 255) / 255),
      (this.g = ((t >> 8) & 255) / 255),
      (this.b = (t & 255) / 255),
      Te.toWorkingColorSpace(this, e),
      this
    );
  }
  setRGB(t, e, n, i = An) {
    return (
      (this.r = t),
      (this.g = e),
      (this.b = n),
      Te.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(t, e, n, i = An) {
    if (((t = fo(t, 1)), (e = le(e, 0, 1)), (n = le(n, 0, 1)), e === 0))
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + e) : n + e - n * e,
        o = 2 * n - r;
      (this.r = _s(o, r, t + 1 / 3)),
        (this.g = _s(o, r, t)),
        (this.b = _s(o, r, t - 1 / 3));
    }
    return Te.toWorkingColorSpace(this, i), this;
  }
  setStyle(t, e = Ke) {
    function n(r) {
      r !== void 0 &&
        parseFloat(r) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + t + " will be ignored."
        );
    }
    let i;
    if ((i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t))) {
      let r;
      const o = i[1],
        a = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (
            (r =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              (this.r = Math.min(255, parseInt(r[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(r[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(r[3], 10)) / 255),
              Te.toWorkingColorSpace(this, e),
              n(r[4]),
              this
            );
          if (
            (r =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              (this.r = Math.min(100, parseInt(r[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(r[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(r[3], 10)) / 100),
              Te.toWorkingColorSpace(this, e),
              n(r[4]),
              this
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (r =
              /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          ) {
            const l = parseFloat(r[1]) / 360,
              c = parseInt(r[2], 10) / 100,
              h = parseInt(r[3], 10) / 100;
            return n(r[4]), this.setHSL(l, c, h, e);
          }
          break;
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(t))) {
      const r = i[1],
        o = r.length;
      if (o === 3)
        return (
          (this.r = parseInt(r.charAt(0) + r.charAt(0), 16) / 255),
          (this.g = parseInt(r.charAt(1) + r.charAt(1), 16) / 255),
          (this.b = parseInt(r.charAt(2) + r.charAt(2), 16) / 255),
          Te.toWorkingColorSpace(this, e),
          this
        );
      if (o === 6)
        return (
          (this.r = parseInt(r.charAt(0) + r.charAt(1), 16) / 255),
          (this.g = parseInt(r.charAt(2) + r.charAt(3), 16) / 255),
          (this.b = parseInt(r.charAt(4) + r.charAt(5), 16) / 255),
          Te.toWorkingColorSpace(this, e),
          this
        );
    }
    return t && t.length > 0 ? this.setColorName(t, e) : this;
  }
  setColorName(t, e = Ke) {
    const n = Ll[t.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, e)
        : console.warn("THREE.Color: Unknown color " + t),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
  }
  copySRGBToLinear(t) {
    return (this.r = Ln(t.r)), (this.g = Ln(t.g)), (this.b = Ln(t.b)), this;
  }
  copyLinearToSRGB(t) {
    return (this.r = Vr(t.r)), (this.g = Vr(t.g)), (this.b = Vr(t.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = Ke) {
    return (
      Te.fromWorkingColorSpace(cr(this, ie), t),
      (le(ie.r * 255, 0, 255) << 16) ^
        (le(ie.g * 255, 0, 255) << 8) ^
        (le(ie.b * 255, 0, 255) << 0)
    );
  }
  getHexString(t = Ke) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = An) {
    Te.fromWorkingColorSpace(cr(this, ie), e);
    const n = ie.r,
      i = ie.g,
      r = ie.b,
      o = Math.max(n, i, r),
      a = Math.min(n, i, r);
    let l, c;
    const h = (a + o) / 2;
    if (a === o) (l = 0), (c = 0);
    else {
      const u = o - a;
      switch (((c = h <= 0.5 ? u / (o + a) : u / (2 - o - a)), o)) {
        case n:
          l = (i - r) / u + (i < r ? 6 : 0);
          break;
        case i:
          l = (r - n) / u + 2;
          break;
        case r:
          l = (n - i) / u + 4;
          break;
      }
      l /= 6;
    }
    return (t.h = l), (t.s = c), (t.l = h), t;
  }
  getRGB(t, e = An) {
    return (
      Te.fromWorkingColorSpace(cr(this, ie), e),
      (t.r = ie.r),
      (t.g = ie.g),
      (t.b = ie.b),
      t
    );
  }
  getStyle(t = Ke) {
    return (
      Te.fromWorkingColorSpace(cr(this, ie), t),
      t !== Ke
        ? `color(${t} ${ie.r} ${ie.g} ${ie.b})`
        : `rgb(${(ie.r * 255) | 0},${(ie.g * 255) | 0},${(ie.b * 255) | 0})`
    );
  }
  offsetHSL(t, e, n) {
    return (
      this.getHSL(Ae),
      (Ae.h += t),
      (Ae.s += e),
      (Ae.l += n),
      this.setHSL(Ae.h, Ae.s, Ae.l),
      this
    );
  }
  add(t) {
    return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
  }
  addColors(t, e) {
    return (
      (this.r = t.r + e.r), (this.g = t.g + e.g), (this.b = t.b + e.b), this
    );
  }
  addScalar(t) {
    return (this.r += t), (this.g += t), (this.b += t), this;
  }
  sub(t) {
    return (
      (this.r = Math.max(0, this.r - t.r)),
      (this.g = Math.max(0, this.g - t.g)),
      (this.b = Math.max(0, this.b - t.b)),
      this
    );
  }
  multiply(t) {
    return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
  }
  multiplyScalar(t) {
    return (this.r *= t), (this.g *= t), (this.b *= t), this;
  }
  lerp(t, e) {
    return (
      (this.r += (t.r - this.r) * e),
      (this.g += (t.g - this.g) * e),
      (this.b += (t.b - this.b) * e),
      this
    );
  }
  lerpColors(t, e, n) {
    return (
      (this.r = t.r + (e.r - t.r) * n),
      (this.g = t.g + (e.g - t.g) * n),
      (this.b = t.b + (e.b - t.b) * n),
      this
    );
  }
  lerpHSL(t, e) {
    this.getHSL(Ae), t.getHSL(lr);
    const n = Vi(Ae.h, lr.h, e),
      i = Vi(Ae.s, lr.s, e),
      r = Vi(Ae.l, lr.l, e);
    return this.setHSL(n, i, r), this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return (this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this;
  }
  toArray(t = [], e = 0) {
    return (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t;
  }
  fromBufferAttribute(t, e) {
    return (
      (this.r = t.getX(e)),
      (this.g = t.getY(e)),
      (this.b = t.getZ(e)),
      t.normalized === !0 &&
        ((this.r /= 255), (this.g /= 255), (this.b /= 255)),
      this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
xt.NAMES = Ll;
xt.prototype.isColor = !0;
xt.prototype.r = 1;
xt.prototype.g = 1;
xt.prototype.b = 1;
let Un;
class Dn {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement == "undefined")
      return t.src;
    let e;
    if (t instanceof HTMLCanvasElement) e = t;
    else {
      Un === void 0 && (Un = Zi("canvas")),
        (Un.width = t.width),
        (Un.height = t.height);
      const n = Un.getContext("2d");
      t instanceof ImageData
        ? n.putImageData(t, 0, 0)
        : n.drawImage(t, 0, 0, t.width, t.height),
        (e = Un);
    }
    return e.width > 2048 || e.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          t
        ),
        e.toDataURL("image/jpeg", 0.6))
      : e.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (
      (typeof HTMLImageElement != "undefined" &&
        t instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement != "undefined" &&
        t instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap != "undefined" && t instanceof ImageBitmap)
    ) {
      const e = Zi("canvas");
      (e.width = t.width), (e.height = t.height);
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const i = n.getImageData(0, 0, t.width, t.height),
        r = i.data;
      for (let o = 0; o < r.length; o++) r[o] = Ln(r[o] / 255) * 255;
      return n.putImageData(i, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray
          ? (e[n] = Math.floor(Ln(e[n] / 255) * 255))
          : (e[n] = Ln(e[n]));
      return { data: e, width: t.width, height: t.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        t
      );
  }
}
class po {
  constructor(t = null) {
    (this.uuid = Ie()), (this.data = t), (this.version = 0);
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let o = 0, a = i.length; o < a; o++)
          i[o].isDataTexture ? r.push(xs(i[o].image)) : r.push(xs(i[o]));
      } else r = xs(i);
      n.url = r;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function xs(s) {
  return (typeof HTMLImageElement != "undefined" &&
    s instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement != "undefined" &&
      s instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap != "undefined" && s instanceof ImageBitmap)
    ? Dn.getDataURL(s)
    : s.data
    ? {
        data: Array.prototype.slice.call(s.data),
        width: s.width,
        height: s.height,
        type: s.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
po.prototype.isSource = !0;
let Wh = 0;
class he extends _n {
  constructor(
    t = he.DEFAULT_IMAGE,
    e = he.DEFAULT_MAPPING,
    n = Re,
    i = Re,
    r = ve,
    o = Kr,
    a = Pe,
    l = Pn,
    c = 1,
    h = pn
  ) {
    super(),
      Object.defineProperty(this, "id", { value: Wh++ }),
      (this.uuid = Ie()),
      (this.name = ""),
      (this.source = new po(t)),
      (this.mipmaps = []),
      (this.mapping = e),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = r),
      (this.minFilter = o),
      (this.anisotropy = c),
      (this.format = a),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new Z(0, 0)),
      (this.repeat = new Z(1, 1)),
      (this.center = new Z(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new de()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.encoding = h),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(t) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return (
      (this.name = t.name),
      (this.source = t.source),
      (this.mipmaps = t.mipmaps.slice(0)),
      (this.mapping = t.mapping),
      (this.wrapS = t.wrapS),
      (this.wrapT = t.wrapT),
      (this.magFilter = t.magFilter),
      (this.minFilter = t.minFilter),
      (this.anisotropy = t.anisotropy),
      (this.format = t.format),
      (this.internalFormat = t.internalFormat),
      (this.type = t.type),
      this.offset.copy(t.offset),
      this.repeat.copy(t.repeat),
      this.center.copy(t.center),
      (this.rotation = t.rotation),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      this.matrix.copy(t.matrix),
      (this.generateMipmaps = t.generateMipmaps),
      (this.premultiplyAlpha = t.premultiplyAlpha),
      (this.flipY = t.flipY),
      (this.unpackAlignment = t.unpackAlignment),
      (this.encoding = t.encoding),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
    const n = {
      metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData),
      e || (t.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== Tl) return t;
    if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
      switch (this.wrapS) {
        case Qs:
          t.x = t.x - Math.floor(t.x);
          break;
        case Re:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case to:
          Math.abs(Math.floor(t.x) % 2) === 1
            ? (t.x = Math.ceil(t.x) - t.x)
            : (t.x = t.x - Math.floor(t.x));
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case Qs:
          t.y = t.y - Math.floor(t.y);
          break;
        case Re:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case to:
          Math.abs(Math.floor(t.y) % 2) === 1
            ? (t.y = Math.ceil(t.y) - t.y)
            : (t.y = t.y - Math.floor(t.y));
          break;
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
}
he.DEFAULT_IMAGE = null;
he.DEFAULT_MAPPING = Tl;
he.prototype.isTexture = !0;
class jt {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    (this.x = t), (this.y = e), (this.z = n), (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, n, i) {
    return (this.x = t), (this.y = e), (this.z = n), (this.w = i), this;
  }
  setScalar(t) {
    return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
  }
  setX(t) {
    return (this.x = t), this;
  }
  setY(t) {
    return (this.y = t), this;
  }
  setZ(t) {
    return (this.z = t), this;
  }
  setW(t) {
    return (this.w = t), this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return (
      (this.x = t.x),
      (this.y = t.y),
      (this.z = t.z),
      (this.w = t.w !== void 0 ? t.w : 1),
      this
    );
  }
  add(t, e) {
    return e !== void 0
      ? (console.warn(
          "THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(t, e))
      : ((this.x += t.x),
        (this.y += t.y),
        (this.z += t.z),
        (this.w += t.w),
        this);
  }
  addScalar(t) {
    return (this.x += t), (this.y += t), (this.z += t), (this.w += t), this;
  }
  addVectors(t, e) {
    return (
      (this.x = t.x + e.x),
      (this.y = t.y + e.y),
      (this.z = t.z + e.z),
      (this.w = t.w + e.w),
      this
    );
  }
  addScaledVector(t, e) {
    return (
      (this.x += t.x * e),
      (this.y += t.y * e),
      (this.z += t.z * e),
      (this.w += t.w * e),
      this
    );
  }
  sub(t, e) {
    return e !== void 0
      ? (console.warn(
          "THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(t, e))
      : ((this.x -= t.x),
        (this.y -= t.y),
        (this.z -= t.z),
        (this.w -= t.w),
        this);
  }
  subScalar(t) {
    return (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this;
  }
  subVectors(t, e) {
    return (
      (this.x = t.x - e.x),
      (this.y = t.y - e.y),
      (this.z = t.z - e.z),
      (this.w = t.w - e.w),
      this
    );
  }
  multiply(t) {
    return (
      (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), (this.w *= t.w), this
    );
  }
  multiplyScalar(t) {
    return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this;
  }
  applyMatrix4(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      r = this.w,
      o = t.elements;
    return (
      (this.x = o[0] * e + o[4] * n + o[8] * i + o[12] * r),
      (this.y = o[1] * e + o[5] * n + o[9] * i + o[13] * r),
      (this.z = o[2] * e + o[6] * n + o[10] * i + o[14] * r),
      (this.w = o[3] * e + o[7] * n + o[11] * i + o[15] * r),
      this
    );
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return (
      e < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, n, i, r;
    const l = t.elements,
      c = l[0],
      h = l[4],
      u = l[8],
      d = l[1],
      p = l[5],
      g = l[9],
      m = l[2],
      f = l[6],
      _ = l[10];
    if (
      Math.abs(h - d) < 0.01 &&
      Math.abs(u - m) < 0.01 &&
      Math.abs(g - f) < 0.01
    ) {
      if (
        Math.abs(h + d) < 0.1 &&
        Math.abs(u + m) < 0.1 &&
        Math.abs(g + f) < 0.1 &&
        Math.abs(c + p + _ - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const C = (c + 1) / 2,
        T = (p + 1) / 2,
        y = (_ + 1) / 2,
        L = (h + d) / 4,
        I = (u + m) / 4,
        v = (g + f) / 4;
      return (
        C > T && C > y
          ? C < 0.01
            ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
            : ((n = Math.sqrt(C)), (i = L / n), (r = I / n))
          : T > y
          ? T < 0.01
            ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
            : ((i = Math.sqrt(T)), (n = L / i), (r = v / i))
          : y < 0.01
          ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
          : ((r = Math.sqrt(y)), (n = I / r), (i = v / r)),
        this.set(n, i, r, e),
        this
      );
    }
    let w = Math.sqrt(
      (f - g) * (f - g) + (u - m) * (u - m) + (d - h) * (d - h)
    );
    return (
      Math.abs(w) < 0.001 && (w = 1),
      (this.x = (f - g) / w),
      (this.y = (u - m) / w),
      (this.z = (d - h) / w),
      (this.w = Math.acos((c + p + _ - 1) / 2)),
      this
    );
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      (this.z = Math.min(this.z, t.z)),
      (this.w = Math.min(this.w, t.w)),
      this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)),
      (this.y = Math.max(this.y, t.y)),
      (this.z = Math.max(this.z, t.z)),
      (this.w = Math.max(this.w, t.w)),
      this
    );
  }
  clamp(t, e) {
    return (
      (this.x = Math.max(t.x, Math.min(e.x, this.x))),
      (this.y = Math.max(t.y, Math.min(e.y, this.y))),
      (this.z = Math.max(t.z, Math.min(e.z, this.z))),
      (this.w = Math.max(t.w, Math.min(e.w, this.w))),
      this
    );
  }
  clampScalar(t, e) {
    return (
      (this.x = Math.max(t, Math.min(e, this.x))),
      (this.y = Math.max(t, Math.min(e, this.y))),
      (this.z = Math.max(t, Math.min(e, this.z))),
      (this.w = Math.max(t, Math.min(e, this.w))),
      this
    );
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(t, Math.min(e, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (
      (this.x += (t.x - this.x) * e),
      (this.y += (t.y - this.y) * e),
      (this.z += (t.z - this.z) * e),
      (this.w += (t.w - this.w) * e),
      this
    );
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n),
      (this.y = t.y + (e.y - t.y) * n),
      (this.z = t.z + (e.z - t.z) * n),
      (this.w = t.w + (e.w - t.w) * n),
      this
    );
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return (
      (this.x = t[e]),
      (this.y = t[e + 1]),
      (this.z = t[e + 2]),
      (this.w = t[e + 3]),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this.x),
      (t[e + 1] = this.y),
      (t[e + 2] = this.z),
      (t[e + 3] = this.w),
      t
    );
  }
  fromBufferAttribute(t, e, n) {
    return (
      n !== void 0 &&
        console.warn(
          "THREE.Vector4: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = t.getX(e)),
      (this.y = t.getY(e)),
      (this.z = t.getZ(e)),
      (this.w = t.getW(e)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
jt.prototype.isVector4 = !0;
class we extends _n {
  constructor(t, e, n = {}) {
    super(),
      (this.width = t),
      (this.height = e),
      (this.depth = 1),
      (this.scissor = new jt(0, 0, t, e)),
      (this.scissorTest = !1),
      (this.viewport = new jt(0, 0, t, e));
    const i = { width: t, height: e, depth: 1 };
    (this.texture = new he(
      i,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps =
        n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
      (this.texture.internalFormat =
        n.internalFormat !== void 0 ? n.internalFormat : null),
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : ve),
      (this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0),
      (this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1),
      (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null),
      (this.samples = n.samples !== void 0 ? n.samples : 0);
  }
  setSize(t, e, n = 1) {
    (this.width !== t || this.height !== e || this.depth !== n) &&
      ((this.width = t),
      (this.height = e),
      (this.depth = n),
      (this.texture.image.width = t),
      (this.texture.image.height = e),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, t, e),
      this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    (this.width = t.width),
      (this.height = t.height),
      (this.depth = t.depth),
      this.viewport.copy(t.viewport),
      (this.texture = t.texture.clone()),
      (this.texture.isRenderTargetTexture = !0);
    const e = Object.assign({}, t.texture.image);
    return (
      (this.texture.source = new po(e)),
      (this.depthBuffer = t.depthBuffer),
      (this.stencilBuffer = t.stencilBuffer),
      t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()),
      (this.samples = t.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
we.prototype.isWebGLRenderTarget = !0;
class Qr extends he {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null),
      (this.image = { data: t, width: e, height: n, depth: i }),
      (this.magFilter = ae),
      (this.minFilter = ae),
      (this.wrapR = Re),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
Qr.prototype.isDataArrayTexture = !0;
class qh extends we {
  constructor(t, e, n) {
    super(t, e),
      (this.depth = n),
      (this.texture = new Qr(null, t, e, n)),
      (this.texture.isRenderTargetTexture = !0);
  }
}
qh.prototype.isWebGLArrayRenderTarget = !0;
class mo extends he {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null),
      (this.image = { data: t, width: e, height: n, depth: i }),
      (this.magFilter = ae),
      (this.minFilter = ae),
      (this.wrapR = Re),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
mo.prototype.isData3DTexture = !0;
class Xh extends we {
  constructor(t, e, n) {
    super(t, e),
      (this.depth = n),
      (this.texture = new mo(null, t, e, n)),
      (this.texture.isRenderTargetTexture = !0);
  }
}
Xh.prototype.isWebGL3DRenderTarget = !0;
class jh extends we {
  constructor(t, e, n, i = {}) {
    super(t, e, i);
    const r = this.texture;
    this.texture = [];
    for (let o = 0; o < n; o++)
      (this.texture[o] = r.clone()),
        (this.texture[o].isRenderTargetTexture = !0);
  }
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      (this.width = t), (this.height = e), (this.depth = n);
      for (let i = 0, r = this.texture.length; i < r; i++)
        (this.texture[i].image.width = t),
          (this.texture[i].image.height = e),
          (this.texture[i].image.depth = n);
      this.dispose();
    }
    return this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e), this;
  }
  copy(t) {
    this.dispose(),
      (this.width = t.width),
      (this.height = t.height),
      (this.depth = t.depth),
      this.viewport.set(0, 0, this.width, this.height),
      this.scissor.set(0, 0, this.width, this.height),
      (this.depthBuffer = t.depthBuffer),
      (this.stencilBuffer = t.stencilBuffer),
      t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()),
      (this.texture.length = 0);
    for (let e = 0, n = t.texture.length; e < n; e++)
      (this.texture[e] = t.texture[e].clone()),
        (this.texture[e].isRenderTargetTexture = !0);
    return this;
  }
}
jh.prototype.isWebGLMultipleRenderTargets = !0;
class pe {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    (this._x = t), (this._y = e), (this._z = n), (this._w = i);
  }
  static slerp(t, e, n, i) {
    return (
      console.warn(
        "THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."
      ),
      n.slerpQuaternions(t, e, i)
    );
  }
  static slerpFlat(t, e, n, i, r, o, a) {
    let l = n[i + 0],
      c = n[i + 1],
      h = n[i + 2],
      u = n[i + 3];
    const d = r[o + 0],
      p = r[o + 1],
      g = r[o + 2],
      m = r[o + 3];
    if (a === 0) {
      (t[e + 0] = l), (t[e + 1] = c), (t[e + 2] = h), (t[e + 3] = u);
      return;
    }
    if (a === 1) {
      (t[e + 0] = d), (t[e + 1] = p), (t[e + 2] = g), (t[e + 3] = m);
      return;
    }
    if (u !== m || l !== d || c !== p || h !== g) {
      let f = 1 - a;
      const _ = l * d + c * p + h * g + u * m,
        w = _ >= 0 ? 1 : -1,
        C = 1 - _ * _;
      if (C > Number.EPSILON) {
        const y = Math.sqrt(C),
          L = Math.atan2(y, _ * w);
        (f = Math.sin(f * L) / y), (a = Math.sin(a * L) / y);
      }
      const T = a * w;
      if (
        ((l = l * f + d * T),
        (c = c * f + p * T),
        (h = h * f + g * T),
        (u = u * f + m * T),
        f === 1 - a)
      ) {
        const y = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        (l *= y), (c *= y), (h *= y), (u *= y);
      }
    }
    (t[e] = l), (t[e + 1] = c), (t[e + 2] = h), (t[e + 3] = u);
  }
  static multiplyQuaternionsFlat(t, e, n, i, r, o) {
    const a = n[i],
      l = n[i + 1],
      c = n[i + 2],
      h = n[i + 3],
      u = r[o],
      d = r[o + 1],
      p = r[o + 2],
      g = r[o + 3];
    return (
      (t[e] = a * g + h * u + l * p - c * d),
      (t[e + 1] = l * g + h * d + c * u - a * p),
      (t[e + 2] = c * g + h * p + a * d - l * u),
      (t[e + 3] = h * g - a * u - l * d - c * p),
      t
    );
  }
  get x() {
    return this._x;
  }
  set x(t) {
    (this._x = t), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    (this._y = t), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    (this._z = t), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    (this._w = t), this._onChangeCallback();
  }
  set(t, e, n, i) {
    return (
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return (
      (this._x = t.x),
      (this._y = t.y),
      (this._z = t.z),
      (this._w = t.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(t, e) {
    if (!(t && t.isEuler))
      throw new Error(
        "THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
      );
    const n = t._x,
      i = t._y,
      r = t._z,
      o = t._order,
      a = Math.cos,
      l = Math.sin,
      c = a(n / 2),
      h = a(i / 2),
      u = a(r / 2),
      d = l(n / 2),
      p = l(i / 2),
      g = l(r / 2);
    switch (o) {
      case "XYZ":
        (this._x = d * h * u + c * p * g),
          (this._y = c * p * u - d * h * g),
          (this._z = c * h * g + d * p * u),
          (this._w = c * h * u - d * p * g);
        break;
      case "YXZ":
        (this._x = d * h * u + c * p * g),
          (this._y = c * p * u - d * h * g),
          (this._z = c * h * g - d * p * u),
          (this._w = c * h * u + d * p * g);
        break;
      case "ZXY":
        (this._x = d * h * u - c * p * g),
          (this._y = c * p * u + d * h * g),
          (this._z = c * h * g + d * p * u),
          (this._w = c * h * u - d * p * g);
        break;
      case "ZYX":
        (this._x = d * h * u - c * p * g),
          (this._y = c * p * u + d * h * g),
          (this._z = c * h * g - d * p * u),
          (this._w = c * h * u + d * p * g);
        break;
      case "YZX":
        (this._x = d * h * u + c * p * g),
          (this._y = c * p * u + d * h * g),
          (this._z = c * h * g - d * p * u),
          (this._w = c * h * u - d * p * g);
        break;
      case "XZY":
        (this._x = d * h * u - c * p * g),
          (this._y = c * p * u - d * h * g),
          (this._z = c * h * g + d * p * u),
          (this._w = c * h * u + d * p * g);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o
        );
    }
    return e !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const n = e / 2,
      i = Math.sin(n);
    return (
      (this._x = t.x * i),
      (this._y = t.y * i),
      (this._z = t.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(t) {
    const e = t.elements,
      n = e[0],
      i = e[4],
      r = e[8],
      o = e[1],
      a = e[5],
      l = e[9],
      c = e[2],
      h = e[6],
      u = e[10],
      d = n + a + u;
    if (d > 0) {
      const p = 0.5 / Math.sqrt(d + 1);
      (this._w = 0.25 / p),
        (this._x = (h - l) * p),
        (this._y = (r - c) * p),
        (this._z = (o - i) * p);
    } else if (n > a && n > u) {
      const p = 2 * Math.sqrt(1 + n - a - u);
      (this._w = (h - l) / p),
        (this._x = 0.25 * p),
        (this._y = (i + o) / p),
        (this._z = (r + c) / p);
    } else if (a > u) {
      const p = 2 * Math.sqrt(1 + a - n - u);
      (this._w = (r - c) / p),
        (this._x = (i + o) / p),
        (this._y = 0.25 * p),
        (this._z = (l + h) / p);
    } else {
      const p = 2 * Math.sqrt(1 + u - n - a);
      (this._w = (o - i) / p),
        (this._x = (r + c) / p),
        (this._y = (l + h) / p),
        (this._z = 0.25 * p);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(t.x) > Math.abs(t.z)
            ? ((this._x = -t.y), (this._y = t.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -t.z), (this._z = t.y), (this._w = n)))
        : ((this._x = t.y * e.z - t.z * e.y),
          (this._y = t.z * e.x - t.x * e.z),
          (this._z = t.x * e.y - t.y * e.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(le(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const n = this.angleTo(t);
    if (n === 0) return this;
    const i = Math.min(1, e / n);
    return this.slerp(t, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let t = this.length();
    return (
      t === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((t = 1 / t),
          (this._x = this._x * t),
          (this._y = this._y * t),
          (this._z = this._z * t),
          (this._w = this._w * t)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(t, e) {
    return e !== void 0
      ? (console.warn(
          "THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
        ),
        this.multiplyQuaternions(t, e))
      : this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const n = t._x,
      i = t._y,
      r = t._z,
      o = t._w,
      a = e._x,
      l = e._y,
      c = e._z,
      h = e._w;
    return (
      (this._x = n * h + o * a + i * c - r * l),
      (this._y = i * h + o * l + r * a - n * c),
      (this._z = r * h + o * c + n * l - i * a),
      (this._w = o * h - n * a - i * l - r * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(t, e) {
    if (e === 0) return this;
    if (e === 1) return this.copy(t);
    const n = this._x,
      i = this._y,
      r = this._z,
      o = this._w;
    let a = o * t._w + n * t._x + i * t._y + r * t._z;
    if (
      (a < 0
        ? ((this._w = -t._w),
          (this._x = -t._x),
          (this._y = -t._y),
          (this._z = -t._z),
          (a = -a))
        : this.copy(t),
      a >= 1)
    )
      return (this._w = o), (this._x = n), (this._y = i), (this._z = r), this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const p = 1 - e;
      return (
        (this._w = p * o + e * this._w),
        (this._x = p * n + e * this._x),
        (this._y = p * i + e * this._y),
        (this._z = p * r + e * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const c = Math.sqrt(l),
      h = Math.atan2(c, a),
      u = Math.sin((1 - e) * h) / c,
      d = Math.sin(e * h) / c;
    return (
      (this._w = o * u + this._w * d),
      (this._x = n * u + this._x * d),
      (this._y = i * u + this._y * d),
      (this._z = r * u + this._z * d),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  random() {
    const t = Math.random(),
      e = Math.sqrt(1 - t),
      n = Math.sqrt(t),
      i = 2 * Math.PI * Math.random(),
      r = 2 * Math.PI * Math.random();
    return this.set(
      e * Math.cos(i),
      n * Math.sin(r),
      n * Math.cos(r),
      e * Math.sin(i)
    );
  }
  equals(t) {
    return (
      t._x === this._x &&
      t._y === this._y &&
      t._z === this._z &&
      t._w === this._w
    );
  }
  fromArray(t, e = 0) {
    return (
      (this._x = t[e]),
      (this._y = t[e + 1]),
      (this._z = t[e + 2]),
      (this._w = t[e + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this._x),
      (t[e + 1] = this._y),
      (t[e + 2] = this._z),
      (t[e + 3] = this._w),
      t
    );
  }
  fromBufferAttribute(t, e) {
    return (
      (this._x = t.getX(e)),
      (this._y = t.getY(e)),
      (this._z = t.getZ(e)),
      (this._w = t.getW(e)),
      this
    );
  }
  _onChange(t) {
    return (this._onChangeCallback = t), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
pe.prototype.isQuaternion = !0;
class E {
  constructor(t = 0, e = 0, n = 0) {
    (this.x = t), (this.y = e), (this.z = n);
  }
  set(t, e, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = t),
      (this.y = e),
      (this.z = n),
      this
    );
  }
  setScalar(t) {
    return (this.x = t), (this.y = t), (this.z = t), this;
  }
  setX(t) {
    return (this.x = t), this;
  }
  setY(t) {
    return (this.y = t), this;
  }
  setZ(t) {
    return (this.z = t), this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
  }
  add(t, e) {
    return e !== void 0
      ? (console.warn(
          "THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(t, e))
      : ((this.x += t.x), (this.y += t.y), (this.z += t.z), this);
  }
  addScalar(t) {
    return (this.x += t), (this.y += t), (this.z += t), this;
  }
  addVectors(t, e) {
    return (
      (this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), this
    );
  }
  addScaledVector(t, e) {
    return (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this;
  }
  sub(t, e) {
    return e !== void 0
      ? (console.warn(
          "THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(t, e))
      : ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this);
  }
  subScalar(t) {
    return (this.x -= t), (this.y -= t), (this.z -= t), this;
  }
  subVectors(t, e) {
    return (
      (this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), this
    );
  }
  multiply(t, e) {
    return e !== void 0
      ? (console.warn(
          "THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
        ),
        this.multiplyVectors(t, e))
      : ((this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this);
  }
  multiplyScalar(t) {
    return (this.x *= t), (this.y *= t), (this.z *= t), this;
  }
  multiplyVectors(t, e) {
    return (
      (this.x = t.x * e.x), (this.y = t.y * e.y), (this.z = t.z * e.z), this
    );
  }
  applyEuler(t) {
    return (
      (t && t.isEuler) ||
        console.error(
          "THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."
        ),
      this.applyQuaternion(ga.setFromEuler(t))
    );
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(ga.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      r = t.elements;
    return (
      (this.x = r[0] * e + r[3] * n + r[6] * i),
      (this.y = r[1] * e + r[4] * n + r[7] * i),
      (this.z = r[2] * e + r[5] * n + r[8] * i),
      this
    );
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      r = t.elements,
      o = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
    return (
      (this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * o),
      (this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * o),
      (this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * o),
      this
    );
  }
  applyQuaternion(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      r = t.x,
      o = t.y,
      a = t.z,
      l = t.w,
      c = l * e + o * i - a * n,
      h = l * n + a * e - r * i,
      u = l * i + r * n - o * e,
      d = -r * e - o * n - a * i;
    return (
      (this.x = c * l + d * -r + h * -a - u * -o),
      (this.y = h * l + d * -o + u * -r - c * -a),
      (this.z = u * l + d * -a + c * -o - h * -r),
      this
    );
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
      t.projectionMatrix
    );
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
      t.matrixWorld
    );
  }
  transformDirection(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      r = t.elements;
    return (
      (this.x = r[0] * e + r[4] * n + r[8] * i),
      (this.y = r[1] * e + r[5] * n + r[9] * i),
      (this.z = r[2] * e + r[6] * n + r[10] * i),
      this.normalize()
    );
  }
  divide(t) {
    return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      (this.z = Math.min(this.z, t.z)),
      this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)),
      (this.y = Math.max(this.y, t.y)),
      (this.z = Math.max(this.z, t.z)),
      this
    );
  }
  clamp(t, e) {
    return (
      (this.x = Math.max(t.x, Math.min(e.x, this.x))),
      (this.y = Math.max(t.y, Math.min(e.y, this.y))),
      (this.z = Math.max(t.z, Math.min(e.z, this.z))),
      this
    );
  }
  clampScalar(t, e) {
    return (
      (this.x = Math.max(t, Math.min(e, this.x))),
      (this.y = Math.max(t, Math.min(e, this.y))),
      (this.z = Math.max(t, Math.min(e, this.z))),
      this
    );
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(t, Math.min(e, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (
      (this.x += (t.x - this.x) * e),
      (this.y += (t.y - this.y) * e),
      (this.z += (t.z - this.z) * e),
      this
    );
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n),
      (this.y = t.y + (e.y - t.y) * n),
      (this.z = t.z + (e.z - t.z) * n),
      this
    );
  }
  cross(t, e) {
    return e !== void 0
      ? (console.warn(
          "THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
        ),
        this.crossVectors(t, e))
      : this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const n = t.x,
      i = t.y,
      r = t.z,
      o = e.x,
      a = e.y,
      l = e.z;
    return (
      (this.x = i * l - r * a),
      (this.y = r * o - n * l),
      (this.z = n * a - i * o),
      this
    );
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return ys.copy(this).projectOnVector(t), this.sub(ys);
  }
  reflect(t) {
    return this.sub(ys.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(le(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x,
      n = this.y - t.y,
      i = this.z - t.z;
    return e * e + n * n + i * i;
  }
  manhattanDistanceTo(t) {
    return (
      Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
    );
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, n) {
    const i = Math.sin(e) * t;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(e) * t),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, n) {
    return (
      (this.x = t * Math.sin(e)), (this.y = n), (this.z = t * Math.cos(e)), this
    );
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(),
      n = this.setFromMatrixColumn(t, 1).length(),
      i = this.setFromMatrixColumn(t, 2).length();
    return (this.x = e), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  setFromEuler(t) {
    return (this.x = t._x), (this.y = t._y), (this.z = t._z), this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this;
  }
  toArray(t = [], e = 0) {
    return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t;
  }
  fromBufferAttribute(t, e, n) {
    return (
      n !== void 0 &&
        console.warn(
          "THREE.Vector3: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = t.getX(e)),
      (this.y = t.getY(e)),
      (this.z = t.getZ(e)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const t = (Math.random() - 0.5) * 2,
      e = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - t ** 2);
    return (
      (this.x = n * Math.cos(e)), (this.y = n * Math.sin(e)), (this.z = t), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
E.prototype.isVector3 = !0;
const ys = new E(),
  ga = new pe();
class Ne {
  constructor(
    t = new E(1 / 0, 1 / 0, 1 / 0),
    e = new E(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.min = t), (this.max = e);
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    let e = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      r = -1 / 0,
      o = -1 / 0,
      a = -1 / 0;
    for (let l = 0, c = t.length; l < c; l += 3) {
      const h = t[l],
        u = t[l + 1],
        d = t[l + 2];
      h < e && (e = h),
        u < n && (n = u),
        d < i && (i = d),
        h > r && (r = h),
        u > o && (o = u),
        d > a && (a = d);
    }
    return this.min.set(e, n, i), this.max.set(r, o, a), this;
  }
  setFromBufferAttribute(t) {
    let e = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      r = -1 / 0,
      o = -1 / 0,
      a = -1 / 0;
    for (let l = 0, c = t.count; l < c; l++) {
      const h = t.getX(l),
        u = t.getY(l),
        d = t.getZ(l);
      h < e && (e = h),
        u < n && (n = u),
        d < i && (i = d),
        h > r && (r = h),
        u > o && (o = u),
        d > a && (a = d);
    }
    return this.min.set(e, n, i), this.max.set(r, o, a), this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = Mn.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  setFromObject(t, e = !1) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(t) {
    return this.isEmpty()
      ? t.set(0, 0, 0)
      : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = !1) {
    t.updateWorldMatrix(!1, !1);
    const n = t.geometry;
    if (n !== void 0)
      if (e && n.attributes != null && n.attributes.position !== void 0) {
        const r = n.attributes.position;
        for (let o = 0, a = r.count; o < a; o++)
          Mn.fromBufferAttribute(r, o).applyMatrix4(t.matrixWorld),
            this.expandByPoint(Mn);
      } else
        n.boundingBox === null && n.computeBoundingBox(),
          vs.copy(n.boundingBox),
          vs.applyMatrix4(t.matrixWorld),
          this.union(vs);
    const i = t.children;
    for (let r = 0, o = i.length; r < o; r++) this.expandByObject(i[r], e);
    return this;
  }
  containsPoint(t) {
    return !(
      t.x < this.min.x ||
      t.x > this.max.x ||
      t.y < this.min.y ||
      t.y > this.max.y ||
      t.z < this.min.z ||
      t.z > this.max.z
    );
  }
  containsBox(t) {
    return (
      this.min.x <= t.min.x &&
      t.max.x <= this.max.x &&
      this.min.y <= t.min.y &&
      t.max.y <= this.max.y &&
      this.min.z <= t.min.z &&
      t.max.z <= this.max.z
    );
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(t) {
    return !(
      t.max.x < this.min.x ||
      t.min.x > this.max.x ||
      t.max.y < this.min.y ||
      t.min.y > this.max.y ||
      t.max.z < this.min.z ||
      t.min.z > this.max.z
    );
  }
  intersectsSphere(t) {
    return (
      this.clampPoint(t.center, Mn),
      Mn.distanceToSquared(t.center) <= t.radius * t.radius
    );
  }
  intersectsPlane(t) {
    let e, n;
    return (
      t.normal.x > 0
        ? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x))
        : ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
      t.normal.y > 0
        ? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y))
        : ((e += t.normal.y * this.max.y), (n += t.normal.y * this.min.y)),
      t.normal.z > 0
        ? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z))
        : ((e += t.normal.z * this.max.z), (n += t.normal.z * this.min.z)),
      e <= -t.constant && n >= -t.constant
    );
  }
  intersectsTriangle(t) {
    if (this.isEmpty()) return !1;
    this.getCenter(Li),
      hr.subVectors(this.max, Li),
      Hn.subVectors(t.a, Li),
      Vn.subVectors(t.b, Li),
      kn.subVectors(t.c, Li),
      nn.subVectors(Vn, Hn),
      rn.subVectors(kn, Vn),
      bn.subVectors(Hn, kn);
    let e = [
      0,
      -nn.z,
      nn.y,
      0,
      -rn.z,
      rn.y,
      0,
      -bn.z,
      bn.y,
      nn.z,
      0,
      -nn.x,
      rn.z,
      0,
      -rn.x,
      bn.z,
      0,
      -bn.x,
      -nn.y,
      nn.x,
      0,
      -rn.y,
      rn.x,
      0,
      -bn.y,
      bn.x,
      0,
    ];
    return !Ms(e, Hn, Vn, kn, hr) ||
      ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Ms(e, Hn, Vn, kn, hr))
      ? !1
      : (ur.crossVectors(nn, rn),
        (e = [ur.x, ur.y, ur.z]),
        Ms(e, Hn, Vn, kn, hr));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return Mn.copy(t).clamp(this.min, this.max).sub(t).length();
  }
  getBoundingSphere(t) {
    return (
      this.getCenter(t.center), (t.radius = this.getSize(Mn).length() * 0.5), t
    );
  }
  intersect(t) {
    return (
      this.min.max(t.min),
      this.max.min(t.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty()
      ? this
      : (Xe[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
        Xe[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
        Xe[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
        Xe[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
        Xe[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
        Xe[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
        Xe[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
        Xe[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
        this.setFromPoints(Xe),
        this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
Ne.prototype.isBox3 = !0;
const Xe = [
    new E(),
    new E(),
    new E(),
    new E(),
    new E(),
    new E(),
    new E(),
    new E(),
  ],
  Mn = new E(),
  vs = new Ne(),
  Hn = new E(),
  Vn = new E(),
  kn = new E(),
  nn = new E(),
  rn = new E(),
  bn = new E(),
  Li = new E(),
  hr = new E(),
  ur = new E(),
  wn = new E();
function Ms(s, t, e, n, i) {
  for (let r = 0, o = s.length - 3; r <= o; r += 3) {
    wn.fromArray(s, r);
    const a =
        i.x * Math.abs(wn.x) + i.y * Math.abs(wn.y) + i.z * Math.abs(wn.z),
      l = t.dot(wn),
      c = e.dot(wn),
      h = n.dot(wn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a) return !1;
  }
  return !0;
}
const Yh = new Ne(),
  _a = new E(),
  dr = new E(),
  bs = new E();
class xi {
  constructor(t = new E(), e = -1) {
    (this.center = t), (this.radius = e);
  }
  set(t, e) {
    return this.center.copy(t), (this.radius = e), this;
  }
  setFromPoints(t, e) {
    const n = this.center;
    e !== void 0 ? n.copy(e) : Yh.setFromPoints(t).getCenter(n);
    let i = 0;
    for (let r = 0, o = t.length; r < o; r++)
      i = Math.max(i, n.distanceToSquared(t[r]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(t) {
    return this.center.copy(t.center), (this.radius = t.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const n = this.center.distanceToSquared(t);
    return (
      e.copy(t),
      n > this.radius * this.radius &&
        (e.sub(this.center).normalize(),
        e.multiplyScalar(this.radius).add(this.center)),
      e
    );
  }
  getBoundingBox(t) {
    return this.isEmpty()
      ? (t.makeEmpty(), t)
      : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return (
      this.center.applyMatrix4(t),
      (this.radius = this.radius * t.getMaxScaleOnAxis()),
      this
    );
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    bs.subVectors(t, this.center);
    const e = bs.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e),
        i = (n - this.radius) * 0.5;
      this.center.add(bs.multiplyScalar(i / n)), (this.radius += i);
    }
    return this;
  }
  union(t) {
    return (
      this.center.equals(t.center) === !0
        ? dr.set(0, 0, 1).multiplyScalar(t.radius)
        : dr
            .subVectors(t.center, this.center)
            .normalize()
            .multiplyScalar(t.radius),
      this.expandByPoint(_a.copy(t.center).add(dr)),
      this.expandByPoint(_a.copy(t.center).sub(dr)),
      this
    );
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const je = new E(),
  ws = new E(),
  fr = new E(),
  sn = new E(),
  Ss = new E(),
  pr = new E(),
  Es = new E();
class yi {
  constructor(t = new E(), e = new E(0, 0, -1)) {
    (this.origin = t), (this.direction = e);
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.direction).multiplyScalar(t).add(this.origin);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, je)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return n < 0
      ? e.copy(this.origin)
      : e.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = je.subVectors(t, this.origin).dot(this.direction);
    return e < 0
      ? this.origin.distanceToSquared(t)
      : (je.copy(this.direction).multiplyScalar(e).add(this.origin),
        je.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, i) {
    ws.copy(t).add(e).multiplyScalar(0.5),
      fr.copy(e).sub(t).normalize(),
      sn.copy(this.origin).sub(ws);
    const r = t.distanceTo(e) * 0.5,
      o = -this.direction.dot(fr),
      a = sn.dot(this.direction),
      l = -sn.dot(fr),
      c = sn.lengthSq(),
      h = Math.abs(1 - o * o);
    let u, d, p, g;
    if (h > 0)
      if (((u = o * l - a), (d = o * a - l), (g = r * h), u >= 0))
        if (d >= -g)
          if (d <= g) {
            const m = 1 / h;
            (u *= m),
              (d *= m),
              (p = u * (u + o * d + 2 * a) + d * (o * u + d + 2 * l) + c);
          } else
            (d = r),
              (u = Math.max(0, -(o * d + a))),
              (p = -u * u + d * (d + 2 * l) + c);
        else
          (d = -r),
            (u = Math.max(0, -(o * d + a))),
            (p = -u * u + d * (d + 2 * l) + c);
      else
        d <= -g
          ? ((u = Math.max(0, -(-o * r + a))),
            (d = u > 0 ? -r : Math.min(Math.max(-r, -l), r)),
            (p = -u * u + d * (d + 2 * l) + c))
          : d <= g
          ? ((u = 0),
            (d = Math.min(Math.max(-r, -l), r)),
            (p = d * (d + 2 * l) + c))
          : ((u = Math.max(0, -(o * r + a))),
            (d = u > 0 ? r : Math.min(Math.max(-r, -l), r)),
            (p = -u * u + d * (d + 2 * l) + c));
    else
      (d = o > 0 ? -r : r),
        (u = Math.max(0, -(o * d + a))),
        (p = -u * u + d * (d + 2 * l) + c);
    return (
      n && n.copy(this.direction).multiplyScalar(u).add(this.origin),
      i && i.copy(fr).multiplyScalar(d).add(ws),
      p
    );
  }
  intersectSphere(t, e) {
    je.subVectors(t.center, this.origin);
    const n = je.dot(this.direction),
      i = je.dot(je) - n * n,
      r = t.radius * t.radius;
    if (i > r) return null;
    const o = Math.sqrt(r - i),
      a = n - o,
      l = n + o;
    return a < 0 && l < 0 ? null : a < 0 ? this.at(l, e) : this.at(a, e);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0) return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null;
  }
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return n === null ? null : this.at(n, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let n, i, r, o, a, l;
    const c = 1 / this.direction.x,
      h = 1 / this.direction.y,
      u = 1 / this.direction.z,
      d = this.origin;
    return (
      c >= 0
        ? ((n = (t.min.x - d.x) * c), (i = (t.max.x - d.x) * c))
        : ((n = (t.max.x - d.x) * c), (i = (t.min.x - d.x) * c)),
      h >= 0
        ? ((r = (t.min.y - d.y) * h), (o = (t.max.y - d.y) * h))
        : ((r = (t.max.y - d.y) * h), (o = (t.min.y - d.y) * h)),
      n > o ||
      r > i ||
      ((r > n || n !== n) && (n = r),
      (o < i || i !== i) && (i = o),
      u >= 0
        ? ((a = (t.min.z - d.z) * u), (l = (t.max.z - d.z) * u))
        : ((a = (t.max.z - d.z) * u), (l = (t.min.z - d.z) * u)),
      n > l || a > i) ||
      ((a > n || n !== n) && (n = a), (l < i || i !== i) && (i = l), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, e)
    );
  }
  intersectsBox(t) {
    return this.intersectBox(t, je) !== null;
  }
  intersectTriangle(t, e, n, i, r) {
    Ss.subVectors(e, t), pr.subVectors(n, t), Es.crossVectors(Ss, pr);
    let o = this.direction.dot(Es),
      a;
    if (o > 0) {
      if (i) return null;
      a = 1;
    } else if (o < 0) (a = -1), (o = -o);
    else return null;
    sn.subVectors(this.origin, t);
    const l = a * this.direction.dot(pr.crossVectors(sn, pr));
    if (l < 0) return null;
    const c = a * this.direction.dot(Ss.cross(sn));
    if (c < 0 || l + c > o) return null;
    const h = -a * sn.dot(Es);
    return h < 0 ? null : this.at(h / o, r);
  }
  applyMatrix4(t) {
    return (
      this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
    );
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class bt {
  constructor() {
    (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      arguments.length > 0 &&
        console.error(
          "THREE.Matrix4: the constructor no longer reads arguments. use .set() instead."
        );
  }
  set(t, e, n, i, r, o, a, l, c, h, u, d, p, g, m, f) {
    const _ = this.elements;
    return (
      (_[0] = t),
      (_[4] = e),
      (_[8] = n),
      (_[12] = i),
      (_[1] = r),
      (_[5] = o),
      (_[9] = a),
      (_[13] = l),
      (_[2] = c),
      (_[6] = h),
      (_[10] = u),
      (_[14] = d),
      (_[3] = p),
      (_[7] = g),
      (_[11] = m),
      (_[15] = f),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new bt().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements,
      n = t.elements;
    return (
      (e[0] = n[0]),
      (e[1] = n[1]),
      (e[2] = n[2]),
      (e[3] = n[3]),
      (e[4] = n[4]),
      (e[5] = n[5]),
      (e[6] = n[6]),
      (e[7] = n[7]),
      (e[8] = n[8]),
      (e[9] = n[9]),
      (e[10] = n[10]),
      (e[11] = n[11]),
      (e[12] = n[12]),
      (e[13] = n[13]),
      (e[14] = n[14]),
      (e[15] = n[15]),
      this
    );
  }
  copyPosition(t) {
    const e = this.elements,
      n = t.elements;
    return (e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return (
      this.set(
        e[0],
        e[3],
        e[6],
        0,
        e[1],
        e[4],
        e[7],
        0,
        e[2],
        e[5],
        e[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(t, e, n) {
    return (
      t.setFromMatrixColumn(this, 0),
      e.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(t, e, n) {
    return (
      this.set(
        t.x,
        e.x,
        n.x,
        0,
        t.y,
        e.y,
        n.y,
        0,
        t.z,
        e.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(t) {
    const e = this.elements,
      n = t.elements,
      i = 1 / Gn.setFromMatrixColumn(t, 0).length(),
      r = 1 / Gn.setFromMatrixColumn(t, 1).length(),
      o = 1 / Gn.setFromMatrixColumn(t, 2).length();
    return (
      (e[0] = n[0] * i),
      (e[1] = n[1] * i),
      (e[2] = n[2] * i),
      (e[3] = 0),
      (e[4] = n[4] * r),
      (e[5] = n[5] * r),
      (e[6] = n[6] * r),
      (e[7] = 0),
      (e[8] = n[8] * o),
      (e[9] = n[9] * o),
      (e[10] = n[10] * o),
      (e[11] = 0),
      (e[12] = 0),
      (e[13] = 0),
      (e[14] = 0),
      (e[15] = 1),
      this
    );
  }
  makeRotationFromEuler(t) {
    (t && t.isEuler) ||
      console.error(
        "THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
      );
    const e = this.elements,
      n = t.x,
      i = t.y,
      r = t.z,
      o = Math.cos(n),
      a = Math.sin(n),
      l = Math.cos(i),
      c = Math.sin(i),
      h = Math.cos(r),
      u = Math.sin(r);
    if (t.order === "XYZ") {
      const d = o * h,
        p = o * u,
        g = a * h,
        m = a * u;
      (e[0] = l * h),
        (e[4] = -l * u),
        (e[8] = c),
        (e[1] = p + g * c),
        (e[5] = d - m * c),
        (e[9] = -a * l),
        (e[2] = m - d * c),
        (e[6] = g + p * c),
        (e[10] = o * l);
    } else if (t.order === "YXZ") {
      const d = l * h,
        p = l * u,
        g = c * h,
        m = c * u;
      (e[0] = d + m * a),
        (e[4] = g * a - p),
        (e[8] = o * c),
        (e[1] = o * u),
        (e[5] = o * h),
        (e[9] = -a),
        (e[2] = p * a - g),
        (e[6] = m + d * a),
        (e[10] = o * l);
    } else if (t.order === "ZXY") {
      const d = l * h,
        p = l * u,
        g = c * h,
        m = c * u;
      (e[0] = d - m * a),
        (e[4] = -o * u),
        (e[8] = g + p * a),
        (e[1] = p + g * a),
        (e[5] = o * h),
        (e[9] = m - d * a),
        (e[2] = -o * c),
        (e[6] = a),
        (e[10] = o * l);
    } else if (t.order === "ZYX") {
      const d = o * h,
        p = o * u,
        g = a * h,
        m = a * u;
      (e[0] = l * h),
        (e[4] = g * c - p),
        (e[8] = d * c + m),
        (e[1] = l * u),
        (e[5] = m * c + d),
        (e[9] = p * c - g),
        (e[2] = -c),
        (e[6] = a * l),
        (e[10] = o * l);
    } else if (t.order === "YZX") {
      const d = o * l,
        p = o * c,
        g = a * l,
        m = a * c;
      (e[0] = l * h),
        (e[4] = m - d * u),
        (e[8] = g * u + p),
        (e[1] = u),
        (e[5] = o * h),
        (e[9] = -a * h),
        (e[2] = -c * h),
        (e[6] = p * u + g),
        (e[10] = d - m * u);
    } else if (t.order === "XZY") {
      const d = o * l,
        p = o * c,
        g = a * l,
        m = a * c;
      (e[0] = l * h),
        (e[4] = -u),
        (e[8] = c * h),
        (e[1] = d * u + m),
        (e[5] = o * h),
        (e[9] = p * u - g),
        (e[2] = g * u - p),
        (e[6] = a * h),
        (e[10] = m * u + d);
    }
    return (
      (e[3] = 0),
      (e[7] = 0),
      (e[11] = 0),
      (e[12] = 0),
      (e[13] = 0),
      (e[14] = 0),
      (e[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Zh, t, Jh);
  }
  lookAt(t, e, n) {
    const i = this.elements;
    return (
      Me.subVectors(t, e),
      Me.lengthSq() === 0 && (Me.z = 1),
      Me.normalize(),
      on.crossVectors(n, Me),
      on.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (Me.x += 1e-4) : (Me.z += 1e-4),
        Me.normalize(),
        on.crossVectors(n, Me)),
      on.normalize(),
      mr.crossVectors(Me, on),
      (i[0] = on.x),
      (i[4] = mr.x),
      (i[8] = Me.x),
      (i[1] = on.y),
      (i[5] = mr.y),
      (i[9] = Me.y),
      (i[2] = on.z),
      (i[6] = mr.z),
      (i[10] = Me.z),
      this
    );
  }
  multiply(t, e) {
    return e !== void 0
      ? (console.warn(
          "THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
        ),
        this.multiplyMatrices(t, e))
      : this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements,
      i = e.elements,
      r = this.elements,
      o = n[0],
      a = n[4],
      l = n[8],
      c = n[12],
      h = n[1],
      u = n[5],
      d = n[9],
      p = n[13],
      g = n[2],
      m = n[6],
      f = n[10],
      _ = n[14],
      w = n[3],
      C = n[7],
      T = n[11],
      y = n[15],
      L = i[0],
      I = i[4],
      v = i[8],
      R = i[12],
      B = i[1],
      F = i[5],
      ut = i[9],
      K = i[13],
      P = i[2],
      k = i[6],
      z = i[10],
      G = i[14],
      X = i[3],
      H = i[7],
      W = i[11],
      Q = i[15];
    return (
      (r[0] = o * L + a * B + l * P + c * X),
      (r[4] = o * I + a * F + l * k + c * H),
      (r[8] = o * v + a * ut + l * z + c * W),
      (r[12] = o * R + a * K + l * G + c * Q),
      (r[1] = h * L + u * B + d * P + p * X),
      (r[5] = h * I + u * F + d * k + p * H),
      (r[9] = h * v + u * ut + d * z + p * W),
      (r[13] = h * R + u * K + d * G + p * Q),
      (r[2] = g * L + m * B + f * P + _ * X),
      (r[6] = g * I + m * F + f * k + _ * H),
      (r[10] = g * v + m * ut + f * z + _ * W),
      (r[14] = g * R + m * K + f * G + _ * Q),
      (r[3] = w * L + C * B + T * P + y * X),
      (r[7] = w * I + C * F + T * k + y * H),
      (r[11] = w * v + C * ut + T * z + y * W),
      (r[15] = w * R + C * K + T * G + y * Q),
      this
    );
  }
  multiplyScalar(t) {
    const e = this.elements;
    return (
      (e[0] *= t),
      (e[4] *= t),
      (e[8] *= t),
      (e[12] *= t),
      (e[1] *= t),
      (e[5] *= t),
      (e[9] *= t),
      (e[13] *= t),
      (e[2] *= t),
      (e[6] *= t),
      (e[10] *= t),
      (e[14] *= t),
      (e[3] *= t),
      (e[7] *= t),
      (e[11] *= t),
      (e[15] *= t),
      this
    );
  }
  determinant() {
    const t = this.elements,
      e = t[0],
      n = t[4],
      i = t[8],
      r = t[12],
      o = t[1],
      a = t[5],
      l = t[9],
      c = t[13],
      h = t[2],
      u = t[6],
      d = t[10],
      p = t[14],
      g = t[3],
      m = t[7],
      f = t[11],
      _ = t[15];
    return (
      g *
        (+r * l * u -
          i * c * u -
          r * a * d +
          n * c * d +
          i * a * p -
          n * l * p) +
      m *
        (+e * l * p -
          e * c * d +
          r * o * d -
          i * o * p +
          i * c * h -
          r * l * h) +
      f *
        (+e * c * u -
          e * a * p -
          r * o * u +
          n * o * p +
          r * a * h -
          n * c * h) +
      _ *
        (-i * a * h - e * l * u + e * a * d + i * o * u - n * o * d + n * l * h)
    );
  }
  transpose() {
    const t = this.elements;
    let e;
    return (
      (e = t[1]),
      (t[1] = t[4]),
      (t[4] = e),
      (e = t[2]),
      (t[2] = t[8]),
      (t[8] = e),
      (e = t[6]),
      (t[6] = t[9]),
      (t[9] = e),
      (e = t[3]),
      (t[3] = t[12]),
      (t[12] = e),
      (e = t[7]),
      (t[7] = t[13]),
      (t[13] = e),
      (e = t[11]),
      (t[11] = t[14]),
      (t[14] = e),
      this
    );
  }
  setPosition(t, e, n) {
    const i = this.elements;
    return (
      t.isVector3
        ? ((i[12] = t.x), (i[13] = t.y), (i[14] = t.z))
        : ((i[12] = t), (i[13] = e), (i[14] = n)),
      this
    );
  }
  invert() {
    const t = this.elements,
      e = t[0],
      n = t[1],
      i = t[2],
      r = t[3],
      o = t[4],
      a = t[5],
      l = t[6],
      c = t[7],
      h = t[8],
      u = t[9],
      d = t[10],
      p = t[11],
      g = t[12],
      m = t[13],
      f = t[14],
      _ = t[15],
      w = u * f * c - m * d * c + m * l * p - a * f * p - u * l * _ + a * d * _,
      C = g * d * c - h * f * c - g * l * p + o * f * p + h * l * _ - o * d * _,
      T = h * m * c - g * u * c + g * a * p - o * m * p - h * a * _ + o * u * _,
      y = g * u * l - h * m * l - g * a * d + o * m * d + h * a * f - o * u * f,
      L = e * w + n * C + i * T + r * y;
    if (L === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const I = 1 / L;
    return (
      (t[0] = w * I),
      (t[1] =
        (m * d * r -
          u * f * r -
          m * i * p +
          n * f * p +
          u * i * _ -
          n * d * _) *
        I),
      (t[2] =
        (a * f * r -
          m * l * r +
          m * i * c -
          n * f * c -
          a * i * _ +
          n * l * _) *
        I),
      (t[3] =
        (u * l * r -
          a * d * r -
          u * i * c +
          n * d * c +
          a * i * p -
          n * l * p) *
        I),
      (t[4] = C * I),
      (t[5] =
        (h * f * r -
          g * d * r +
          g * i * p -
          e * f * p -
          h * i * _ +
          e * d * _) *
        I),
      (t[6] =
        (g * l * r -
          o * f * r -
          g * i * c +
          e * f * c +
          o * i * _ -
          e * l * _) *
        I),
      (t[7] =
        (o * d * r -
          h * l * r +
          h * i * c -
          e * d * c -
          o * i * p +
          e * l * p) *
        I),
      (t[8] = T * I),
      (t[9] =
        (g * u * r -
          h * m * r -
          g * n * p +
          e * m * p +
          h * n * _ -
          e * u * _) *
        I),
      (t[10] =
        (o * m * r -
          g * a * r +
          g * n * c -
          e * m * c -
          o * n * _ +
          e * a * _) *
        I),
      (t[11] =
        (h * a * r -
          o * u * r -
          h * n * c +
          e * u * c +
          o * n * p -
          e * a * p) *
        I),
      (t[12] = y * I),
      (t[13] =
        (h * m * i -
          g * u * i +
          g * n * d -
          e * m * d -
          h * n * f +
          e * u * f) *
        I),
      (t[14] =
        (g * a * i -
          o * m * i -
          g * n * l +
          e * m * l +
          o * n * f -
          e * a * f) *
        I),
      (t[15] =
        (o * u * i -
          h * a * i +
          h * n * l -
          e * u * l -
          o * n * d +
          e * a * d) *
        I),
      this
    );
  }
  scale(t) {
    const e = this.elements,
      n = t.x,
      i = t.y,
      r = t.z;
    return (
      (e[0] *= n),
      (e[4] *= i),
      (e[8] *= r),
      (e[1] *= n),
      (e[5] *= i),
      (e[9] *= r),
      (e[2] *= n),
      (e[6] *= i),
      (e[10] *= r),
      (e[3] *= n),
      (e[7] *= i),
      (e[11] *= r),
      this
    );
  }
  getMaxScaleOnAxis() {
    const t = this.elements,
      e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
      n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
      i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, i));
  }
  makeTranslation(t, e, n) {
    return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(t) {
    const e = Math.cos(t),
      n = Math.sin(t);
    return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t),
      n = Math.sin(t);
    return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t),
      n = Math.sin(t);
    return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(t, e) {
    const n = Math.cos(e),
      i = Math.sin(e),
      r = 1 - n,
      o = t.x,
      a = t.y,
      l = t.z,
      c = r * o,
      h = r * a;
    return (
      this.set(
        c * o + n,
        c * a - i * l,
        c * l + i * a,
        0,
        c * a + i * l,
        h * a + n,
        h * l - i * o,
        0,
        c * l - i * a,
        h * l + i * o,
        r * l * l + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(t, e, n) {
    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, e, n, i, r, o) {
    return this.set(1, n, r, 0, t, 1, o, 0, e, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, e, n) {
    const i = this.elements,
      r = e._x,
      o = e._y,
      a = e._z,
      l = e._w,
      c = r + r,
      h = o + o,
      u = a + a,
      d = r * c,
      p = r * h,
      g = r * u,
      m = o * h,
      f = o * u,
      _ = a * u,
      w = l * c,
      C = l * h,
      T = l * u,
      y = n.x,
      L = n.y,
      I = n.z;
    return (
      (i[0] = (1 - (m + _)) * y),
      (i[1] = (p + T) * y),
      (i[2] = (g - C) * y),
      (i[3] = 0),
      (i[4] = (p - T) * L),
      (i[5] = (1 - (d + _)) * L),
      (i[6] = (f + w) * L),
      (i[7] = 0),
      (i[8] = (g + C) * I),
      (i[9] = (f - w) * I),
      (i[10] = (1 - (d + m)) * I),
      (i[11] = 0),
      (i[12] = t.x),
      (i[13] = t.y),
      (i[14] = t.z),
      (i[15] = 1),
      this
    );
  }
  decompose(t, e, n) {
    const i = this.elements;
    let r = Gn.set(i[0], i[1], i[2]).length();
    const o = Gn.set(i[4], i[5], i[6]).length(),
      a = Gn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r),
      (t.x = i[12]),
      (t.y = i[13]),
      (t.z = i[14]),
      Ce.copy(this);
    const c = 1 / r,
      h = 1 / o,
      u = 1 / a;
    return (
      (Ce.elements[0] *= c),
      (Ce.elements[1] *= c),
      (Ce.elements[2] *= c),
      (Ce.elements[4] *= h),
      (Ce.elements[5] *= h),
      (Ce.elements[6] *= h),
      (Ce.elements[8] *= u),
      (Ce.elements[9] *= u),
      (Ce.elements[10] *= u),
      e.setFromRotationMatrix(Ce),
      (n.x = r),
      (n.y = o),
      (n.z = a),
      this
    );
  }
  makePerspective(t, e, n, i, r, o) {
    o === void 0 &&
      console.warn(
        "THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
      );
    const a = this.elements,
      l = (2 * r) / (e - t),
      c = (2 * r) / (n - i),
      h = (e + t) / (e - t),
      u = (n + i) / (n - i),
      d = -(o + r) / (o - r),
      p = (-2 * o * r) / (o - r);
    return (
      (a[0] = l),
      (a[4] = 0),
      (a[8] = h),
      (a[12] = 0),
      (a[1] = 0),
      (a[5] = c),
      (a[9] = u),
      (a[13] = 0),
      (a[2] = 0),
      (a[6] = 0),
      (a[10] = d),
      (a[14] = p),
      (a[3] = 0),
      (a[7] = 0),
      (a[11] = -1),
      (a[15] = 0),
      this
    );
  }
  makeOrthographic(t, e, n, i, r, o) {
    const a = this.elements,
      l = 1 / (e - t),
      c = 1 / (n - i),
      h = 1 / (o - r),
      u = (e + t) * l,
      d = (n + i) * c,
      p = (o + r) * h;
    return (
      (a[0] = 2 * l),
      (a[4] = 0),
      (a[8] = 0),
      (a[12] = -u),
      (a[1] = 0),
      (a[5] = 2 * c),
      (a[9] = 0),
      (a[13] = -d),
      (a[2] = 0),
      (a[6] = 0),
      (a[10] = -2 * h),
      (a[14] = -p),
      (a[3] = 0),
      (a[7] = 0),
      (a[11] = 0),
      (a[15] = 1),
      this
    );
  }
  equals(t) {
    const e = this.elements,
      n = t.elements;
    for (let i = 0; i < 16; i++) if (e[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return (
      (t[e] = n[0]),
      (t[e + 1] = n[1]),
      (t[e + 2] = n[2]),
      (t[e + 3] = n[3]),
      (t[e + 4] = n[4]),
      (t[e + 5] = n[5]),
      (t[e + 6] = n[6]),
      (t[e + 7] = n[7]),
      (t[e + 8] = n[8]),
      (t[e + 9] = n[9]),
      (t[e + 10] = n[10]),
      (t[e + 11] = n[11]),
      (t[e + 12] = n[12]),
      (t[e + 13] = n[13]),
      (t[e + 14] = n[14]),
      (t[e + 15] = n[15]),
      t
    );
  }
}
bt.prototype.isMatrix4 = !0;
const Gn = new E(),
  Ce = new bt(),
  Zh = new E(0, 0, 0),
  Jh = new E(1, 1, 1),
  on = new E(),
  mr = new E(),
  Me = new E(),
  xa = new bt(),
  ya = new pe();
class In {
  constructor(t = 0, e = 0, n = 0, i = In.DefaultOrder) {
    (this._x = t), (this._y = e), (this._z = n), (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(t) {
    (this._x = t), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    (this._y = t), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    (this._z = t), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    (this._order = t), this._onChangeCallback();
  }
  set(t, e, n, i = this._order) {
    return (
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return (
      (this._x = t._x),
      (this._y = t._y),
      (this._z = t._z),
      (this._order = t._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(t, e = this._order, n = !0) {
    const i = t.elements,
      r = i[0],
      o = i[4],
      a = i[8],
      l = i[1],
      c = i[5],
      h = i[9],
      u = i[2],
      d = i[6],
      p = i[10];
    switch (e) {
      case "XYZ":
        (this._y = Math.asin(le(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(-h, p)), (this._z = Math.atan2(-o, r)))
            : ((this._x = Math.atan2(d, c)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-le(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(a, p)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-u, r)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(le(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._y = Math.atan2(-u, p)), (this._z = Math.atan2(-o, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, r)));
        break;
      case "ZYX":
        (this._y = Math.asin(-le(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._x = Math.atan2(d, p)), (this._z = Math.atan2(l, r)))
            : ((this._x = 0), (this._z = Math.atan2(-o, c)));
        break;
      case "YZX":
        (this._z = Math.asin(le(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-h, c)), (this._y = Math.atan2(-u, r)))
            : ((this._x = 0), (this._y = Math.atan2(a, p)));
        break;
      case "XZY":
        (this._z = Math.asin(-le(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(d, c)), (this._y = Math.atan2(a, r)))
            : ((this._x = Math.atan2(-h, p)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            e
        );
    }
    return (this._order = e), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, n) {
    return (
      xa.makeRotationFromQuaternion(t), this.setFromRotationMatrix(xa, e, n)
    );
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return ya.setFromEuler(this), this.setFromQuaternion(ya, t);
  }
  equals(t) {
    return (
      t._x === this._x &&
      t._y === this._y &&
      t._z === this._z &&
      t._order === this._order
    );
  }
  fromArray(t) {
    return (
      (this._x = t[0]),
      (this._y = t[1]),
      (this._z = t[2]),
      t[3] !== void 0 && (this._order = t[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this._x),
      (t[e + 1] = this._y),
      (t[e + 2] = this._z),
      (t[e + 3] = this._order),
      t
    );
  }
  _onChange(t) {
    return (this._onChangeCallback = t), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
In.prototype.isEuler = !0;
In.DefaultOrder = "XYZ";
In.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class Rl {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = ((1 << t) | 0) >>> 0;
  }
  enable(t) {
    this.mask |= (1 << t) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= (1 << t) | 0;
  }
  disable(t) {
    this.mask &= ~((1 << t) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & ((1 << t) | 0)) !== 0;
  }
}
let $h = 0;
const va = new E(),
  Wn = new pe(),
  Ye = new bt(),
  gr = new E(),
  Ri = new E(),
  Kh = new E(),
  Qh = new pe(),
  Ma = new E(1, 0, 0),
  ba = new E(0, 1, 0),
  wa = new E(0, 0, 1),
  tu = { type: "added" },
  Sa = { type: "removed" };
class Wt extends _n {
  constructor() {
    super(),
      Object.defineProperty(this, "id", { value: $h++ }),
      (this.uuid = Ie()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = Wt.DefaultUp.clone());
    const t = new E(),
      e = new In(),
      n = new pe(),
      i = new E(1, 1, 1);
    function r() {
      n.setFromEuler(e, !1);
    }
    function o() {
      e.setFromQuaternion(n, void 0, !1);
    }
    e._onChange(r),
      n._onChange(o),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: t },
        rotation: { configurable: !0, enumerable: !0, value: e },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new bt() },
        normalMatrix: { value: new de() },
      }),
      (this.matrix = new bt()),
      (this.matrixWorld = new bt()),
      (this.matrixAutoUpdate = Wt.DefaultMatrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new Rl()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(t),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return Wn.setFromAxisAngle(t, e), this.quaternion.multiply(Wn), this;
  }
  rotateOnWorldAxis(t, e) {
    return Wn.setFromAxisAngle(t, e), this.quaternion.premultiply(Wn), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(Ma, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(ba, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(wa, t);
  }
  translateOnAxis(t, e) {
    return (
      va.copy(t).applyQuaternion(this.quaternion),
      this.position.add(va.multiplyScalar(e)),
      this
    );
  }
  translateX(t) {
    return this.translateOnAxis(Ma, t);
  }
  translateY(t) {
    return this.translateOnAxis(ba, t);
  }
  translateZ(t) {
    return this.translateOnAxis(wa, t);
  }
  localToWorld(t) {
    return t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return t.applyMatrix4(Ye.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, n) {
    t.isVector3 ? gr.copy(t) : gr.set(t, e, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      Ri.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? Ye.lookAt(Ri, gr, this.up)
        : Ye.lookAt(gr, Ri, this.up),
      this.quaternion.setFromRotationMatrix(Ye),
      i &&
        (Ye.extractRotation(i.matrixWorld),
        Wn.setFromRotationMatrix(Ye),
        this.quaternion.premultiply(Wn.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return t === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          t
        ),
        this)
      : (t && t.isObject3D
          ? (t.parent !== null && t.parent.remove(t),
            (t.parent = this),
            this.children.push(t),
            t.dispatchEvent(tu))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              t
            ),
        this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const e = this.children.indexOf(t);
    return (
      e !== -1 &&
        ((t.parent = null), this.children.splice(e, 1), t.dispatchEvent(Sa)),
      this
    );
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    for (let t = 0; t < this.children.length; t++) {
      const e = this.children[t];
      (e.parent = null), e.dispatchEvent(Sa);
    }
    return (this.children.length = 0), this;
  }
  attach(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      Ye.copy(this.matrixWorld).invert(),
      t.parent !== null &&
        (t.parent.updateWorldMatrix(!0, !1), Ye.multiply(t.parent.matrixWorld)),
      t.applyMatrix4(Ye),
      this.add(t),
      t.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(t, e);
      if (o !== void 0) return o;
    }
  }
  getWorldPosition(t) {
    return (
      this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(t) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ri, t, Kh), t
    );
  }
  getWorldScale(t) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ri, Qh, t), t
    );
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {}
  traverse(t) {
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1) return;
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || t) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (t = !0));
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    const n = this.parent;
    if (
      (t === !0 && n !== null && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      e === !0)
    ) {
      const i = this.children;
      for (let r = 0, o = i.length; r < o; r++) i[r].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string",
      n = {};
    e &&
      ((t = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (i.instanceColor = this.instanceColor.toJSON()));
    function r(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(t)), l.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(t).uuid)),
        this.environment &&
          this.environment.isTexture &&
          (i.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(t.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const u = l[c];
            r(t.shapes, u);
          }
        else r(t.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (r(t.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(r(t.materials, this.material[l]));
        i.material = a;
      } else i.material = r(t.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++)
        i.children.push(this.children[a].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        i.animations.push(r(t.animations, l));
      }
    }
    if (e) {
      const a = o(t.geometries),
        l = o(t.materials),
        c = o(t.textures),
        h = o(t.images),
        u = o(t.shapes),
        d = o(t.skeletons),
        p = o(t.animations),
        g = o(t.nodes);
      a.length > 0 && (n.geometries = a),
        l.length > 0 && (n.materials = l),
        c.length > 0 && (n.textures = c),
        h.length > 0 && (n.images = h),
        u.length > 0 && (n.shapes = u),
        d.length > 0 && (n.skeletons = d),
        p.length > 0 && (n.animations = p),
        g.length > 0 && (n.nodes = g);
    }
    return (n.object = i), n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const h = a[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = !0) {
    if (
      ((this.name = t.name),
      this.up.copy(t.up),
      this.position.copy(t.position),
      (this.rotation.order = t.rotation.order),
      this.quaternion.copy(t.quaternion),
      this.scale.copy(t.scale),
      this.matrix.copy(t.matrix),
      this.matrixWorld.copy(t.matrixWorld),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
      (this.layers.mask = t.layers.mask),
      (this.visible = t.visible),
      (this.castShadow = t.castShadow),
      (this.receiveShadow = t.receiveShadow),
      (this.frustumCulled = t.frustumCulled),
      (this.renderOrder = t.renderOrder),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      e === !0)
    )
      for (let n = 0; n < t.children.length; n++) {
        const i = t.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
Wt.DefaultUp = new E(0, 1, 0);
Wt.DefaultMatrixAutoUpdate = !0;
Wt.prototype.isObject3D = !0;
const Le = new E(),
  Ze = new E(),
  Ts = new E(),
  Je = new E(),
  qn = new E(),
  Xn = new E(),
  Ea = new E(),
  As = new E(),
  Cs = new E(),
  Ls = new E();
class ne {
  constructor(t = new E(), e = new E(), n = new E()) {
    (this.a = t), (this.b = e), (this.c = n);
  }
  static getNormal(t, e, n, i) {
    i.subVectors(n, e), Le.subVectors(t, e), i.cross(Le);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(t, e, n, i, r) {
    Le.subVectors(i, e), Ze.subVectors(n, e), Ts.subVectors(t, e);
    const o = Le.dot(Le),
      a = Le.dot(Ze),
      l = Le.dot(Ts),
      c = Ze.dot(Ze),
      h = Ze.dot(Ts),
      u = o * c - a * a;
    if (u === 0) return r.set(-2, -1, -1);
    const d = 1 / u,
      p = (c * l - a * h) * d,
      g = (o * h - a * l) * d;
    return r.set(1 - p - g, g, p);
  }
  static containsPoint(t, e, n, i) {
    return (
      this.getBarycoord(t, e, n, i, Je),
      Je.x >= 0 && Je.y >= 0 && Je.x + Je.y <= 1
    );
  }
  static getUV(t, e, n, i, r, o, a, l) {
    return (
      this.getBarycoord(t, e, n, i, Je),
      l.set(0, 0),
      l.addScaledVector(r, Je.x),
      l.addScaledVector(o, Je.y),
      l.addScaledVector(a, Je.z),
      l
    );
  }
  static isFrontFacing(t, e, n, i) {
    return Le.subVectors(n, e), Ze.subVectors(t, e), Le.cross(Ze).dot(i) < 0;
  }
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
  }
  setFromPointsAndIndices(t, e, n, i) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
  }
  setFromAttributeAndIndices(t, e, n, i) {
    return (
      this.a.fromBufferAttribute(t, e),
      this.b.fromBufferAttribute(t, n),
      this.c.fromBufferAttribute(t, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return (
      Le.subVectors(this.c, this.b),
      Ze.subVectors(this.a, this.b),
      Le.cross(Ze).length() * 0.5
    );
  }
  getMidpoint(t) {
    return t
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return ne.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return ne.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getUV(t, e, n, i, r) {
    return ne.getUV(t, this.a, this.b, this.c, e, n, i, r);
  }
  containsPoint(t) {
    return ne.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return ne.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const n = this.a,
      i = this.b,
      r = this.c;
    let o, a;
    qn.subVectors(i, n), Xn.subVectors(r, n), As.subVectors(t, n);
    const l = qn.dot(As),
      c = Xn.dot(As);
    if (l <= 0 && c <= 0) return e.copy(n);
    Cs.subVectors(t, i);
    const h = qn.dot(Cs),
      u = Xn.dot(Cs);
    if (h >= 0 && u <= h) return e.copy(i);
    const d = l * u - h * c;
    if (d <= 0 && l >= 0 && h <= 0)
      return (o = l / (l - h)), e.copy(n).addScaledVector(qn, o);
    Ls.subVectors(t, r);
    const p = qn.dot(Ls),
      g = Xn.dot(Ls);
    if (g >= 0 && p <= g) return e.copy(r);
    const m = p * c - l * g;
    if (m <= 0 && c >= 0 && g <= 0)
      return (a = c / (c - g)), e.copy(n).addScaledVector(Xn, a);
    const f = h * g - p * u;
    if (f <= 0 && u - h >= 0 && p - g >= 0)
      return (
        Ea.subVectors(r, i),
        (a = (u - h) / (u - h + (p - g))),
        e.copy(i).addScaledVector(Ea, a)
      );
    const _ = 1 / (f + m + d);
    return (
      (o = m * _),
      (a = d * _),
      e.copy(n).addScaledVector(qn, o).addScaledVector(Xn, a)
    );
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
let eu = 0;
class se extends _n {
  constructor() {
    super(),
      Object.defineProperty(this, "id", { value: eu++ }),
      (this.uuid = Ie()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = li),
      (this.side = Wi),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = Sl),
      (this.blendDst = El),
      (this.blendEquation = ii),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = Js),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = Th),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = ms),
      (this.stencilZFail = ms),
      (this.stencilZPass = ms),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, (this._alphaTest = t);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (t !== void 0)
      for (const e in t) {
        const n = t[e];
        if (n === void 0) {
          console.warn("THREE.Material: '" + e + "' parameter is undefined.");
          continue;
        }
        if (e === "shading") {
          console.warn(
            "THREE." +
              this.type +
              ": .shading has been removed. Use the boolean .flatShading instead."
          ),
            (this.flatShading = n === wl);
          continue;
        }
        const i = this[e];
        if (i === void 0) {
          console.warn(
            "THREE." +
              this.type +
              ": '" +
              e +
              "' is not a property of this material."
          );
          continue;
        }
        i && i.isColor
          ? i.set(n)
          : i && i.isVector3 && n && n.isVector3
          ? i.copy(n)
          : (this[e] = n);
      }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    e && (t = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(t).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(t).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(t).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(t).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(t).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(t).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(t).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(t).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(t).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(t).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(t).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
      this.attenuationDistance !== void 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== li && (n.blending = this.blending),
      this.side !== Wi && (n.side = this.side),
      this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = this.transparent),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.stencilWrite = this.stencilWrite),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
      this.premultipliedAlpha === !0 &&
        (n.premultipliedAlpha = this.premultipliedAlpha),
      this.wireframe === !0 && (n.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = this.flatShading),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);
    function i(r) {
      const o = [];
      for (const a in r) {
        const l = r[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (e) {
      const r = i(t.textures),
        o = i(t.images);
      r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    (this.name = t.name),
      (this.blending = t.blending),
      (this.side = t.side),
      (this.vertexColors = t.vertexColors),
      (this.opacity = t.opacity),
      (this.transparent = t.transparent),
      (this.blendSrc = t.blendSrc),
      (this.blendDst = t.blendDst),
      (this.blendEquation = t.blendEquation),
      (this.blendSrcAlpha = t.blendSrcAlpha),
      (this.blendDstAlpha = t.blendDstAlpha),
      (this.blendEquationAlpha = t.blendEquationAlpha),
      (this.depthFunc = t.depthFunc),
      (this.depthTest = t.depthTest),
      (this.depthWrite = t.depthWrite),
      (this.stencilWriteMask = t.stencilWriteMask),
      (this.stencilFunc = t.stencilFunc),
      (this.stencilRef = t.stencilRef),
      (this.stencilFuncMask = t.stencilFuncMask),
      (this.stencilFail = t.stencilFail),
      (this.stencilZFail = t.stencilZFail),
      (this.stencilZPass = t.stencilZPass),
      (this.stencilWrite = t.stencilWrite);
    const e = t.clippingPlanes;
    let n = null;
    if (e !== null) {
      const i = e.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r) n[r] = e[r].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = t.clipIntersection),
      (this.clipShadows = t.clipShadows),
      (this.shadowSide = t.shadowSide),
      (this.colorWrite = t.colorWrite),
      (this.precision = t.precision),
      (this.polygonOffset = t.polygonOffset),
      (this.polygonOffsetFactor = t.polygonOffsetFactor),
      (this.polygonOffsetUnits = t.polygonOffsetUnits),
      (this.dithering = t.dithering),
      (this.alphaTest = t.alphaTest),
      (this.alphaToCoverage = t.alphaToCoverage),
      (this.premultipliedAlpha = t.premultipliedAlpha),
      (this.visible = t.visible),
      (this.toneMapped = t.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
}
se.prototype.isMaterial = !0;
se.fromType = function () {
  return null;
};
class vi extends se {
  constructor(t) {
    super(),
      (this.type = "MeshBasicMaterial"),
      (this.color = new xt(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Jr),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      (this.specularMap = t.specularMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      (this.combine = t.combine),
      (this.reflectivity = t.reflectivity),
      (this.refractionRatio = t.refractionRatio),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.fog = t.fog),
      this
    );
  }
}
vi.prototype.isMeshBasicMaterial = !0;
const ee = new E(),
  _r = new Z();
class re {
  constructor(t, e, n) {
    if (Array.isArray(t))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.name = ""),
      (this.array = t),
      (this.itemSize = e),
      (this.count = t !== void 0 ? t.length / e : 0),
      (this.normalized = n === !0),
      (this.usage = ji),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return (this.usage = t), this;
  }
  copy(t) {
    return (
      (this.name = t.name),
      (this.array = new t.array.constructor(t.array)),
      (this.itemSize = t.itemSize),
      (this.count = t.count),
      (this.normalized = t.normalized),
      (this.usage = t.usage),
      this
    );
  }
  copyAt(t, e, n) {
    (t *= this.itemSize), (n *= e.itemSize);
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[t + i] = e.array[n + i];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  copyColorsArray(t) {
    const e = this.array;
    let n = 0;
    for (let i = 0, r = t.length; i < r; i++) {
      let o = t[i];
      o === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyColorsArray(): color is undefined",
          i
        ),
        (o = new xt())),
        (e[n++] = o.r),
        (e[n++] = o.g),
        (e[n++] = o.b);
    }
    return this;
  }
  copyVector2sArray(t) {
    const e = this.array;
    let n = 0;
    for (let i = 0, r = t.length; i < r; i++) {
      let o = t[i];
      o === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
          i
        ),
        (o = new Z())),
        (e[n++] = o.x),
        (e[n++] = o.y);
    }
    return this;
  }
  copyVector3sArray(t) {
    const e = this.array;
    let n = 0;
    for (let i = 0, r = t.length; i < r; i++) {
      let o = t[i];
      o === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyVector3sArray(): vector is undefined",
          i
        ),
        (o = new E())),
        (e[n++] = o.x),
        (e[n++] = o.y),
        (e[n++] = o.z);
    }
    return this;
  }
  copyVector4sArray(t) {
    const e = this.array;
    let n = 0;
    for (let i = 0, r = t.length; i < r; i++) {
      let o = t[i];
      o === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyVector4sArray(): vector is undefined",
          i
        ),
        (o = new jt())),
        (e[n++] = o.x),
        (e[n++] = o.y),
        (e[n++] = o.z),
        (e[n++] = o.w);
    }
    return this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let e = 0, n = this.count; e < n; e++)
        _r.fromBufferAttribute(this, e),
          _r.applyMatrix3(t),
          this.setXY(e, _r.x, _r.y);
    else if (this.itemSize === 3)
      for (let e = 0, n = this.count; e < n; e++)
        ee.fromBufferAttribute(this, e),
          ee.applyMatrix3(t),
          this.setXYZ(e, ee.x, ee.y, ee.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++)
      ee.fromBufferAttribute(this, e),
        ee.applyMatrix4(t),
        this.setXYZ(e, ee.x, ee.y, ee.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      ee.fromBufferAttribute(this, e),
        ee.applyNormalMatrix(t),
        this.setXYZ(e, ee.x, ee.y, ee.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      ee.fromBufferAttribute(this, e),
        ee.transformDirection(t),
        this.setXYZ(e, ee.x, ee.y, ee.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getX(t) {
    return this.array[t * this.itemSize];
  }
  setX(t, e) {
    return (this.array[t * this.itemSize] = e), this;
  }
  getY(t) {
    return this.array[t * this.itemSize + 1];
  }
  setY(t, e) {
    return (this.array[t * this.itemSize + 1] = e), this;
  }
  getZ(t) {
    return this.array[t * this.itemSize + 2];
  }
  setZ(t, e) {
    return (this.array[t * this.itemSize + 2] = e), this;
  }
  getW(t) {
    return this.array[t * this.itemSize + 3];
  }
  setW(t, e) {
    return (this.array[t * this.itemSize + 3] = e), this;
  }
  setXY(t, e, n) {
    return (
      (t *= this.itemSize),
      (this.array[t + 0] = e),
      (this.array[t + 1] = n),
      this
    );
  }
  setXYZ(t, e, n, i) {
    return (
      (t *= this.itemSize),
      (this.array[t + 0] = e),
      (this.array[t + 1] = n),
      (this.array[t + 2] = i),
      this
    );
  }
  setXYZW(t, e, n, i, r) {
    return (
      (t *= this.itemSize),
      (this.array[t + 0] = e),
      (this.array[t + 1] = n),
      (this.array[t + 2] = i),
      (this.array[t + 3] = r),
      this
    );
  }
  onUpload(t) {
    return (this.onUploadCallback = t), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.prototype.slice.call(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (t.name = this.name),
      this.usage !== ji && (t.usage = this.usage),
      (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
        (t.updateRange = this.updateRange),
      t
    );
  }
}
re.prototype.isBufferAttribute = !0;
class Pl extends re {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class Dl extends re {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class nu extends re {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
nu.prototype.isFloat16BufferAttribute = !0;
class $t extends re {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
let iu = 0;
const Se = new bt(),
  Rs = new Wt(),
  jn = new E(),
  be = new Ne(),
  Pi = new Ne(),
  oe = new E();
class Yt extends _n {
  constructor() {
    super(),
      Object.defineProperty(this, "id", { value: iu++ }),
      (this.uuid = Ie()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return (
      Array.isArray(t)
        ? (this.index = new (Cl(t) ? Dl : Pl)(t, 1))
        : (this.index = t),
      this
    );
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return (this.attributes[t] = e), this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, n = 0) {
    this.groups.push({ start: t, count: e, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    (this.drawRange.start = t), (this.drawRange.count = e);
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), (e.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new de().getNormalMatrix(t);
      n.applyNormalMatrix(r), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      i !== void 0 && (i.transformDirection(t), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(t) {
    return Se.makeRotationFromQuaternion(t), this.applyMatrix4(Se), this;
  }
  rotateX(t) {
    return Se.makeRotationX(t), this.applyMatrix4(Se), this;
  }
  rotateY(t) {
    return Se.makeRotationY(t), this.applyMatrix4(Se), this;
  }
  rotateZ(t) {
    return Se.makeRotationZ(t), this.applyMatrix4(Se), this;
  }
  translate(t, e, n) {
    return Se.makeTranslation(t, e, n), this.applyMatrix4(Se), this;
  }
  scale(t, e, n) {
    return Se.makeScale(t, e, n), this.applyMatrix4(Se), this;
  }
  lookAt(t) {
    return Rs.lookAt(t), Rs.updateMatrix(), this.applyMatrix4(Rs.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(jn).negate(),
      this.translate(jn.x, jn.y, jn.z),
      this
    );
  }
  setFromPoints(t) {
    const e = [];
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      e.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new $t(e, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Ne());
    const t = this.attributes.position,
      e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new E(-1 / 0, -1 / 0, -1 / 0),
          new E(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (t !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(t), e))
        for (let n = 0, i = e.length; n < i; n++) {
          const r = e[n];
          be.setFromBufferAttribute(r),
            this.morphTargetsRelative
              ? (oe.addVectors(this.boundingBox.min, be.min),
                this.boundingBox.expandByPoint(oe),
                oe.addVectors(this.boundingBox.max, be.max),
                this.boundingBox.expandByPoint(oe))
              : (this.boundingBox.expandByPoint(be.min),
                this.boundingBox.expandByPoint(be.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new xi());
    const t = this.attributes.position,
      e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new E(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if ((be.setFromBufferAttribute(t), e))
        for (let r = 0, o = e.length; r < o; r++) {
          const a = e[r];
          Pi.setFromBufferAttribute(a),
            this.morphTargetsRelative
              ? (oe.addVectors(be.min, Pi.min),
                be.expandByPoint(oe),
                oe.addVectors(be.max, Pi.max),
                be.expandByPoint(oe))
              : (be.expandByPoint(Pi.min), be.expandByPoint(Pi.max));
        }
      be.getCenter(n);
      let i = 0;
      for (let r = 0, o = t.count; r < o; r++)
        oe.fromBufferAttribute(t, r),
          (i = Math.max(i, n.distanceToSquared(oe)));
      if (e)
        for (let r = 0, o = e.length; r < o; r++) {
          const a = e[r],
            l = this.morphTargetsRelative;
          for (let c = 0, h = a.count; c < h; c++)
            oe.fromBufferAttribute(a, c),
              l && (jn.fromBufferAttribute(t, c), oe.add(jn)),
              (i = Math.max(i, n.distanceToSquared(oe)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const t = this.index,
      e = this.attributes;
    if (
      t === null ||
      e.position === void 0 ||
      e.normal === void 0 ||
      e.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = t.array,
      i = e.position.array,
      r = e.normal.array,
      o = e.uv.array,
      a = i.length / 3;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new re(new Float32Array(4 * a), 4));
    const l = this.getAttribute("tangent").array,
      c = [],
      h = [];
    for (let B = 0; B < a; B++) (c[B] = new E()), (h[B] = new E());
    const u = new E(),
      d = new E(),
      p = new E(),
      g = new Z(),
      m = new Z(),
      f = new Z(),
      _ = new E(),
      w = new E();
    function C(B, F, ut) {
      u.fromArray(i, B * 3),
        d.fromArray(i, F * 3),
        p.fromArray(i, ut * 3),
        g.fromArray(o, B * 2),
        m.fromArray(o, F * 2),
        f.fromArray(o, ut * 2),
        d.sub(u),
        p.sub(u),
        m.sub(g),
        f.sub(g);
      const K = 1 / (m.x * f.y - f.x * m.y);
      !isFinite(K) ||
        (_.copy(d)
          .multiplyScalar(f.y)
          .addScaledVector(p, -m.y)
          .multiplyScalar(K),
        w
          .copy(p)
          .multiplyScalar(m.x)
          .addScaledVector(d, -f.x)
          .multiplyScalar(K),
        c[B].add(_),
        c[F].add(_),
        c[ut].add(_),
        h[B].add(w),
        h[F].add(w),
        h[ut].add(w));
    }
    let T = this.groups;
    T.length === 0 && (T = [{ start: 0, count: n.length }]);
    for (let B = 0, F = T.length; B < F; ++B) {
      const ut = T[B],
        K = ut.start,
        P = ut.count;
      for (let k = K, z = K + P; k < z; k += 3) C(n[k + 0], n[k + 1], n[k + 2]);
    }
    const y = new E(),
      L = new E(),
      I = new E(),
      v = new E();
    function R(B) {
      I.fromArray(r, B * 3), v.copy(I);
      const F = c[B];
      y.copy(F),
        y.sub(I.multiplyScalar(I.dot(F))).normalize(),
        L.crossVectors(v, F);
      const K = L.dot(h[B]) < 0 ? -1 : 1;
      (l[B * 4] = y.x),
        (l[B * 4 + 1] = y.y),
        (l[B * 4 + 2] = y.z),
        (l[B * 4 + 3] = K);
    }
    for (let B = 0, F = T.length; B < F; ++B) {
      const ut = T[B],
        K = ut.start,
        P = ut.count;
      for (let k = K, z = K + P; k < z; k += 3)
        R(n[k + 0]), R(n[k + 1]), R(n[k + 2]);
    }
  }
  computeVertexNormals() {
    const t = this.index,
      e = this.getAttribute("position");
    if (e !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new re(new Float32Array(e.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let d = 0, p = n.count; d < p; d++) n.setXYZ(d, 0, 0, 0);
      const i = new E(),
        r = new E(),
        o = new E(),
        a = new E(),
        l = new E(),
        c = new E(),
        h = new E(),
        u = new E();
      if (t)
        for (let d = 0, p = t.count; d < p; d += 3) {
          const g = t.getX(d + 0),
            m = t.getX(d + 1),
            f = t.getX(d + 2);
          i.fromBufferAttribute(e, g),
            r.fromBufferAttribute(e, m),
            o.fromBufferAttribute(e, f),
            h.subVectors(o, r),
            u.subVectors(i, r),
            h.cross(u),
            a.fromBufferAttribute(n, g),
            l.fromBufferAttribute(n, m),
            c.fromBufferAttribute(n, f),
            a.add(h),
            l.add(h),
            c.add(h),
            n.setXYZ(g, a.x, a.y, a.z),
            n.setXYZ(m, l.x, l.y, l.z),
            n.setXYZ(f, c.x, c.y, c.z);
        }
      else
        for (let d = 0, p = e.count; d < p; d += 3)
          i.fromBufferAttribute(e, d + 0),
            r.fromBufferAttribute(e, d + 1),
            o.fromBufferAttribute(e, d + 2),
            h.subVectors(o, r),
            u.subVectors(i, r),
            h.cross(u),
            n.setXYZ(d + 0, h.x, h.y, h.z),
            n.setXYZ(d + 1, h.x, h.y, h.z),
            n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  merge(t, e) {
    if (!(t && t.isBufferGeometry)) {
      console.error(
        "THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
        t
      );
      return;
    }
    e === void 0 &&
      ((e = 0),
      console.warn(
        "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
      ));
    const n = this.attributes;
    for (const i in n) {
      if (t.attributes[i] === void 0) continue;
      const o = n[i].array,
        a = t.attributes[i],
        l = a.array,
        c = a.itemSize * e,
        h = Math.min(l.length, o.length - c);
      for (let u = 0, d = c; u < h; u++, d++) o[d] = l[u];
    }
    return this;
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++)
      oe.fromBufferAttribute(t, e),
        oe.normalize(),
        t.setXYZ(e, oe.x, oe.y, oe.z);
  }
  toNonIndexed() {
    function t(a, l) {
      const c = a.array,
        h = a.itemSize,
        u = a.normalized,
        d = new c.constructor(l.length * h);
      let p = 0,
        g = 0;
      for (let m = 0, f = l.length; m < f; m++) {
        a.isInterleavedBufferAttribute
          ? (p = l[m] * a.data.stride + a.offset)
          : (p = l[m] * h);
        for (let _ = 0; _ < h; _++) d[g++] = c[p++];
      }
      return new re(d, h, u);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const e = new Yt(),
      n = this.index.array,
      i = this.attributes;
    for (const a in i) {
      const l = i[a],
        c = t(l, n);
      e.setAttribute(a, c);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const l = [],
        c = r[a];
      for (let h = 0, u = c.length; h < u; h++) {
        const d = c[h],
          p = t(d, n);
        l.push(p);
      }
      e.morphAttributes[a] = l;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      e.addGroup(c.start, c.count, c.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((t.uuid = this.uuid),
      (t.type = this.type),
      this.name !== "" && (t.name = this.name),
      Object.keys(this.userData).length > 0 && (t.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (t[c] = l[c]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null &&
      (t.data.index = {
        type: e.array.constructor.name,
        array: Array.prototype.slice.call(e.array),
      });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      t.data.attributes[l] = c.toJSON(t.data);
    }
    const i = {};
    let r = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        h = [];
      for (let u = 0, d = c.length; u < d; u++) {
        const p = c[u];
        h.push(p.toJSON(t.data));
      }
      h.length > 0 && ((i[l] = h), (r = !0));
    }
    r &&
      ((t.data.morphAttributes = i),
      (t.data.morphTargetsRelative = this.morphTargetsRelative));
    const o = this.groups;
    o.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return (
      a !== null &&
        (t.data.boundingSphere = {
          center: a.center.toArray(),
          radius: a.radius,
        }),
      t
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const e = {};
    this.name = t.name;
    const n = t.index;
    n !== null && this.setIndex(n.clone(e));
    const i = t.attributes;
    for (const c in i) {
      const h = i[c];
      this.setAttribute(c, h.clone(e));
    }
    const r = t.morphAttributes;
    for (const c in r) {
      const h = [],
        u = r[c];
      for (let d = 0, p = u.length; d < p; d++) h.push(u[d].clone(e));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const o = t.groups;
    for (let c = 0, h = o.length; c < h; c++) {
      const u = o[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const a = t.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = t.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = t.drawRange.start),
      (this.drawRange.count = t.drawRange.count),
      (this.userData = t.userData),
      t.parameters !== void 0 &&
        (this.parameters = Object.assign({}, t.parameters)),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
Yt.prototype.isBufferGeometry = !0;
const Ta = new bt(),
  Yn = new yi(),
  Ps = new xi(),
  an = new E(),
  ln = new E(),
  cn = new E(),
  Ds = new E(),
  Is = new E(),
  Fs = new E(),
  xr = new E(),
  yr = new E(),
  vr = new E(),
  Mr = new Z(),
  br = new Z(),
  wr = new Z(),
  Ns = new E(),
  Sr = new E();
class ce extends Wt {
  constructor(t = new Yt(), e = new vi()) {
    super(),
      (this.type = "Mesh"),
      (this.geometry = t),
      (this.material = e),
      this.updateMorphTargets();
  }
  copy(t) {
    return (
      super.copy(t),
      t.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
      t.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          t.morphTargetDictionary
        )),
      (this.material = t.material),
      (this.geometry = t.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry;
    if (t.isBufferGeometry) {
      const e = t.morphAttributes,
        n = Object.keys(e);
      if (n.length > 0) {
        const i = e[n[0]];
        if (i !== void 0) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let r = 0, o = i.length; r < o; r++) {
            const a = i[r].name || String(r);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[a] = r);
          }
        }
      }
    } else {
      const e = t.morphTargets;
      e !== void 0 &&
        e.length > 0 &&
        console.error(
          "THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    }
  }
  raycast(t, e) {
    const n = this.geometry,
      i = this.material,
      r = this.matrixWorld;
    if (
      i === void 0 ||
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Ps.copy(n.boundingSphere),
      Ps.applyMatrix4(r),
      t.ray.intersectsSphere(Ps) === !1) ||
      (Ta.copy(r).invert(),
      Yn.copy(t.ray).applyMatrix4(Ta),
      n.boundingBox !== null && Yn.intersectsBox(n.boundingBox) === !1)
    )
      return;
    let o;
    if (n.isBufferGeometry) {
      const a = n.index,
        l = n.attributes.position,
        c = n.morphAttributes.position,
        h = n.morphTargetsRelative,
        u = n.attributes.uv,
        d = n.attributes.uv2,
        p = n.groups,
        g = n.drawRange;
      if (a !== null)
        if (Array.isArray(i))
          for (let m = 0, f = p.length; m < f; m++) {
            const _ = p[m],
              w = i[_.materialIndex],
              C = Math.max(_.start, g.start),
              T = Math.min(
                a.count,
                Math.min(_.start + _.count, g.start + g.count)
              );
            for (let y = C, L = T; y < L; y += 3) {
              const I = a.getX(y),
                v = a.getX(y + 1),
                R = a.getX(y + 2);
              (o = Er(this, w, t, Yn, l, c, h, u, d, I, v, R)),
                o &&
                  ((o.faceIndex = Math.floor(y / 3)),
                  (o.face.materialIndex = _.materialIndex),
                  e.push(o));
            }
          }
        else {
          const m = Math.max(0, g.start),
            f = Math.min(a.count, g.start + g.count);
          for (let _ = m, w = f; _ < w; _ += 3) {
            const C = a.getX(_),
              T = a.getX(_ + 1),
              y = a.getX(_ + 2);
            (o = Er(this, i, t, Yn, l, c, h, u, d, C, T, y)),
              o && ((o.faceIndex = Math.floor(_ / 3)), e.push(o));
          }
        }
      else if (l !== void 0)
        if (Array.isArray(i))
          for (let m = 0, f = p.length; m < f; m++) {
            const _ = p[m],
              w = i[_.materialIndex],
              C = Math.max(_.start, g.start),
              T = Math.min(
                l.count,
                Math.min(_.start + _.count, g.start + g.count)
              );
            for (let y = C, L = T; y < L; y += 3) {
              const I = y,
                v = y + 1,
                R = y + 2;
              (o = Er(this, w, t, Yn, l, c, h, u, d, I, v, R)),
                o &&
                  ((o.faceIndex = Math.floor(y / 3)),
                  (o.face.materialIndex = _.materialIndex),
                  e.push(o));
            }
          }
        else {
          const m = Math.max(0, g.start),
            f = Math.min(l.count, g.start + g.count);
          for (let _ = m, w = f; _ < w; _ += 3) {
            const C = _,
              T = _ + 1,
              y = _ + 2;
            (o = Er(this, i, t, Yn, l, c, h, u, d, C, T, y)),
              o && ((o.faceIndex = Math.floor(_ / 3)), e.push(o));
          }
        }
    } else
      n.isGeometry &&
        console.error(
          "THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
        );
  }
}
ce.prototype.isMesh = !0;
function ru(s, t, e, n, i, r, o, a) {
  let l;
  if (
    (t.side === De
      ? (l = n.intersectTriangle(o, r, i, !0, a))
      : (l = n.intersectTriangle(i, r, o, t.side !== ui, a)),
    l === null)
  )
    return null;
  Sr.copy(a), Sr.applyMatrix4(s.matrixWorld);
  const c = e.ray.origin.distanceTo(Sr);
  return c < e.near || c > e.far
    ? null
    : { distance: c, point: Sr.clone(), object: s };
}
function Er(s, t, e, n, i, r, o, a, l, c, h, u) {
  an.fromBufferAttribute(i, c),
    ln.fromBufferAttribute(i, h),
    cn.fromBufferAttribute(i, u);
  const d = s.morphTargetInfluences;
  if (r && d) {
    xr.set(0, 0, 0), yr.set(0, 0, 0), vr.set(0, 0, 0);
    for (let g = 0, m = r.length; g < m; g++) {
      const f = d[g],
        _ = r[g];
      f !== 0 &&
        (Ds.fromBufferAttribute(_, c),
        Is.fromBufferAttribute(_, h),
        Fs.fromBufferAttribute(_, u),
        o
          ? (xr.addScaledVector(Ds, f),
            yr.addScaledVector(Is, f),
            vr.addScaledVector(Fs, f))
          : (xr.addScaledVector(Ds.sub(an), f),
            yr.addScaledVector(Is.sub(ln), f),
            vr.addScaledVector(Fs.sub(cn), f)));
    }
    an.add(xr), ln.add(yr), cn.add(vr);
  }
  s.isSkinnedMesh &&
    (s.boneTransform(c, an), s.boneTransform(h, ln), s.boneTransform(u, cn));
  const p = ru(s, t, e, n, an, ln, cn, Ns);
  if (p) {
    a &&
      (Mr.fromBufferAttribute(a, c),
      br.fromBufferAttribute(a, h),
      wr.fromBufferAttribute(a, u),
      (p.uv = ne.getUV(Ns, an, ln, cn, Mr, br, wr, new Z()))),
      l &&
        (Mr.fromBufferAttribute(l, c),
        br.fromBufferAttribute(l, h),
        wr.fromBufferAttribute(l, u),
        (p.uv2 = ne.getUV(Ns, an, ln, cn, Mr, br, wr, new Z())));
    const g = { a: c, b: h, c: u, normal: new E(), materialIndex: 0 };
    ne.getNormal(an, ln, cn, g.normal), (p.face = g);
  }
  return p;
}
class Mi extends Yt {
  constructor(t = 1, e = 1, n = 1, i = 1, r = 1, o = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: t,
        height: e,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: o,
      });
    const a = this;
    (i = Math.floor(i)), (r = Math.floor(r)), (o = Math.floor(o));
    const l = [],
      c = [],
      h = [],
      u = [];
    let d = 0,
      p = 0;
    g("z", "y", "x", -1, -1, n, e, t, o, r, 0),
      g("z", "y", "x", 1, -1, n, e, -t, o, r, 1),
      g("x", "z", "y", 1, 1, t, n, e, i, o, 2),
      g("x", "z", "y", 1, -1, t, n, -e, i, o, 3),
      g("x", "y", "z", 1, -1, t, e, n, i, r, 4),
      g("x", "y", "z", -1, -1, t, e, -n, i, r, 5),
      this.setIndex(l),
      this.setAttribute("position", new $t(c, 3)),
      this.setAttribute("normal", new $t(h, 3)),
      this.setAttribute("uv", new $t(u, 2));
    function g(m, f, _, w, C, T, y, L, I, v, R) {
      const B = T / I,
        F = y / v,
        ut = T / 2,
        K = y / 2,
        P = L / 2,
        k = I + 1,
        z = v + 1;
      let G = 0,
        X = 0;
      const H = new E();
      for (let W = 0; W < z; W++) {
        const Q = W * F - K;
        for (let J = 0; J < k; J++) {
          const et = J * B - ut;
          (H[m] = et * w),
            (H[f] = Q * C),
            (H[_] = P),
            c.push(H.x, H.y, H.z),
            (H[m] = 0),
            (H[f] = 0),
            (H[_] = L > 0 ? 1 : -1),
            h.push(H.x, H.y, H.z),
            u.push(J / I),
            u.push(1 - W / v),
            (G += 1);
        }
      }
      for (let W = 0; W < v; W++)
        for (let Q = 0; Q < I; Q++) {
          const J = d + Q + k * W,
            et = d + Q + k * (W + 1),
            mt = d + (Q + 1) + k * (W + 1),
            yt = d + (Q + 1) + k * W;
          l.push(J, et, yt), l.push(et, mt, yt), (X += 6);
        }
      a.addGroup(p, X, R), (p += X), (d += G);
    }
  }
  static fromJSON(t) {
    return new Mi(
      t.width,
      t.height,
      t.depth,
      t.widthSegments,
      t.heightSegments,
      t.depthSegments
    );
  }
}
function mi(s) {
  const t = {};
  for (const e in s) {
    t[e] = {};
    for (const n in s[e]) {
      const i = s[e][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? (t[e][n] = i.clone())
        : Array.isArray(i)
        ? (t[e][n] = i.slice())
        : (t[e][n] = i);
    }
  }
  return t;
}
function fe(s) {
  const t = {};
  for (let e = 0; e < s.length; e++) {
    const n = mi(s[e]);
    for (const i in n) t[i] = n[i];
  }
  return t;
}
const su = { clone: mi, merge: fe };
var ou = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  au = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Fe extends se {
  constructor(t) {
    super(),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.vertexShader = ou),
      (this.fragmentShader = au),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      t !== void 0 &&
        (t.attributes !== void 0 &&
          console.error(
            "THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."
          ),
        this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      (this.fragmentShader = t.fragmentShader),
      (this.vertexShader = t.vertexShader),
      (this.uniforms = mi(t.uniforms)),
      (this.defines = Object.assign({}, t.defines)),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.fog = t.fog),
      (this.lights = t.lights),
      (this.clipping = t.clipping),
      (this.extensions = Object.assign({}, t.extensions)),
      (this.glslVersion = t.glslVersion),
      this
    );
  }
  toJSON(t) {
    const e = super.toJSON(t);
    (e.glslVersion = this.glslVersion), (e.uniforms = {});
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture
        ? (e.uniforms[i] = { type: "t", value: o.toJSON(t).uuid })
        : o && o.isColor
        ? (e.uniforms[i] = { type: "c", value: o.getHex() })
        : o && o.isVector2
        ? (e.uniforms[i] = { type: "v2", value: o.toArray() })
        : o && o.isVector3
        ? (e.uniforms[i] = { type: "v3", value: o.toArray() })
        : o && o.isVector4
        ? (e.uniforms[i] = { type: "v4", value: o.toArray() })
        : o && o.isMatrix3
        ? (e.uniforms[i] = { type: "m3", value: o.toArray() })
        : o && o.isMatrix4
        ? (e.uniforms[i] = { type: "m4", value: o.toArray() })
        : (e.uniforms[i] = { value: o });
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines),
      (e.vertexShader = this.vertexShader),
      (e.fragmentShader = this.fragmentShader);
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
}
Fe.prototype.isShaderMaterial = !0;
class go extends Wt {
  constructor() {
    super(),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new bt()),
      (this.projectionMatrix = new bt()),
      (this.projectionMatrixInverse = new bt());
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      this.matrixWorldInverse.copy(t.matrixWorldInverse),
      this.projectionMatrix.copy(t.projectionMatrix),
      this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
      this
    );
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(-e[8], -e[9], -e[10]).normalize();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
go.prototype.isCamera = !0;
class _e extends go {
  constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
    super(),
      (this.type = "PerspectiveCamera"),
      (this.fov = t),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = e),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.fov = t.fov),
      (this.zoom = t.zoom),
      (this.near = t.near),
      (this.far = t.far),
      (this.focus = t.focus),
      (this.aspect = t.aspect),
      (this.view = t.view === null ? null : Object.assign({}, t.view)),
      (this.filmGauge = t.filmGauge),
      (this.filmOffset = t.filmOffset),
      this
    );
  }
  setFocalLength(t) {
    const e = (0.5 * this.getFilmHeight()) / t;
    (this.fov = Yi * 2 * Math.atan(e)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const t = Math.tan(Hi * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / t;
  }
  getEffectiveFOV() {
    return Yi * 2 * Math.atan(Math.tan(Hi * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(t, e, n, i, r, o) {
    (this.aspect = t / e),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = t),
      (this.view.fullHeight = e),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = (t * Math.tan(Hi * 0.5 * this.fov)) / this.zoom,
      n = 2 * e,
      i = this.aspect * n,
      r = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth,
        c = o.fullHeight;
      (r += (o.offsetX * i) / l),
        (e -= (o.offsetY * n) / c),
        (i *= o.width / l),
        (n *= o.height / c);
    }
    const a = this.filmOffset;
    a !== 0 && (r += (t * a) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      (e.object.fov = this.fov),
      (e.object.zoom = this.zoom),
      (e.object.near = this.near),
      (e.object.far = this.far),
      (e.object.focus = this.focus),
      (e.object.aspect = this.aspect),
      this.view !== null && (e.object.view = Object.assign({}, this.view)),
      (e.object.filmGauge = this.filmGauge),
      (e.object.filmOffset = this.filmOffset),
      e
    );
  }
}
_e.prototype.isPerspectiveCamera = !0;
const Zn = 90,
  Jn = 1;
class _o extends Wt {
  constructor(t, e, n) {
    if (
      (super(), (this.type = "CubeCamera"), n.isWebGLCubeRenderTarget !== !0)
    ) {
      console.error(
        "THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."
      );
      return;
    }
    this.renderTarget = n;
    const i = new _e(Zn, Jn, t, e);
    (i.layers = this.layers),
      i.up.set(0, -1, 0),
      i.lookAt(new E(1, 0, 0)),
      this.add(i);
    const r = new _e(Zn, Jn, t, e);
    (r.layers = this.layers),
      r.up.set(0, -1, 0),
      r.lookAt(new E(-1, 0, 0)),
      this.add(r);
    const o = new _e(Zn, Jn, t, e);
    (o.layers = this.layers),
      o.up.set(0, 0, 1),
      o.lookAt(new E(0, 1, 0)),
      this.add(o);
    const a = new _e(Zn, Jn, t, e);
    (a.layers = this.layers),
      a.up.set(0, 0, -1),
      a.lookAt(new E(0, -1, 0)),
      this.add(a);
    const l = new _e(Zn, Jn, t, e);
    (l.layers = this.layers),
      l.up.set(0, -1, 0),
      l.lookAt(new E(0, 0, 1)),
      this.add(l);
    const c = new _e(Zn, Jn, t, e);
    (c.layers = this.layers),
      c.up.set(0, -1, 0),
      c.lookAt(new E(0, 0, -1)),
      this.add(c);
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget,
      [i, r, o, a, l, c] = this.children,
      h = t.getRenderTarget(),
      u = t.toneMapping,
      d = t.xr.enabled;
    (t.toneMapping = tn), (t.xr.enabled = !1);
    const p = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      t.setRenderTarget(n, 0),
      t.render(e, i),
      t.setRenderTarget(n, 1),
      t.render(e, r),
      t.setRenderTarget(n, 2),
      t.render(e, o),
      t.setRenderTarget(n, 3),
      t.render(e, a),
      t.setRenderTarget(n, 4),
      t.render(e, l),
      (n.texture.generateMipmaps = p),
      t.setRenderTarget(n, 5),
      t.render(e, c),
      t.setRenderTarget(h),
      (t.toneMapping = u),
      (t.xr.enabled = d),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class ts extends he {
  constructor(t, e, n, i, r, o, a, l, c, h) {
    (t = t !== void 0 ? t : []),
      (e = e !== void 0 ? e : di),
      super(t, e, n, i, r, o, a, l, c, h),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
ts.prototype.isCubeTexture = !0;
class Il extends we {
  constructor(t, e = {}) {
    super(t, t, e);
    const n = { width: t, height: t, depth: 1 },
      i = [n, n, n, n, n, n];
    (this.texture = new ts(
      i,
      e.mapping,
      e.wrapS,
      e.wrapT,
      e.magFilter,
      e.minFilter,
      e.format,
      e.type,
      e.anisotropy,
      e.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        e.generateMipmaps !== void 0 ? e.generateMipmaps : !1),
      (this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : ve);
  }
  fromEquirectangularTexture(t, e) {
    (this.texture.type = e.type),
      (this.texture.encoding = e.encoding),
      (this.texture.generateMipmaps = e.generateMipmaps),
      (this.texture.minFilter = e.minFilter),
      (this.texture.magFilter = e.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new Mi(5, 5, 5),
      r = new Fe({
        name: "CubemapFromEquirect",
        uniforms: mi(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: De,
        blending: un,
      });
    r.uniforms.tEquirect.value = e;
    const o = new ce(i, r),
      a = e.minFilter;
    return (
      e.minFilter === Kr && (e.minFilter = ve),
      new _o(1, 10, this).update(t, o),
      (e.minFilter = a),
      o.geometry.dispose(),
      o.material.dispose(),
      this
    );
  }
  clear(t, e, n, i) {
    const r = t.getRenderTarget();
    for (let o = 0; o < 6; o++) t.setRenderTarget(this, o), t.clear(e, n, i);
    t.setRenderTarget(r);
  }
}
Il.prototype.isWebGLCubeRenderTarget = !0;
const Bs = new E(),
  lu = new E(),
  cu = new de();
class Qe {
  constructor(t = new E(1, 0, 0), e = 0) {
    (this.normal = t), (this.constant = e);
  }
  set(t, e) {
    return this.normal.copy(t), (this.constant = e), this;
  }
  setComponents(t, e, n, i) {
    return this.normal.set(t, e, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), (this.constant = -e.dot(this.normal)), this;
  }
  setFromCoplanarPoints(t, e, n) {
    const i = Bs.subVectors(n, e).cross(lu.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), (this.constant = t.constant), this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), (this.constant *= t), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t);
  }
  intersectLine(t, e) {
    const n = t.delta(Bs),
      i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const r = -(t.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start),
      n = this.distanceToPoint(t.end);
    return (e < 0 && n > 0) || (n < 0 && e > 0);
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const n = e || cu.getNormalMatrix(t),
      i = this.coplanarPoint(Bs).applyMatrix4(t),
      r = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(r)), this;
  }
  translate(t) {
    return (this.constant -= t.dot(this.normal)), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
Qe.prototype.isPlane = !0;
const $n = new xi(),
  Tr = new E();
class es {
  constructor(
    t = new Qe(),
    e = new Qe(),
    n = new Qe(),
    i = new Qe(),
    r = new Qe(),
    o = new Qe()
  ) {
    this.planes = [t, e, n, i, r, o];
  }
  set(t, e, n, i, r, o) {
    const a = this.planes;
    return (
      a[0].copy(t),
      a[1].copy(e),
      a[2].copy(n),
      a[3].copy(i),
      a[4].copy(r),
      a[5].copy(o),
      this
    );
  }
  copy(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
    return this;
  }
  setFromProjectionMatrix(t) {
    const e = this.planes,
      n = t.elements,
      i = n[0],
      r = n[1],
      o = n[2],
      a = n[3],
      l = n[4],
      c = n[5],
      h = n[6],
      u = n[7],
      d = n[8],
      p = n[9],
      g = n[10],
      m = n[11],
      f = n[12],
      _ = n[13],
      w = n[14],
      C = n[15];
    return (
      e[0].setComponents(a - i, u - l, m - d, C - f).normalize(),
      e[1].setComponents(a + i, u + l, m + d, C + f).normalize(),
      e[2].setComponents(a + r, u + c, m + p, C + _).normalize(),
      e[3].setComponents(a - r, u - c, m - p, C - _).normalize(),
      e[4].setComponents(a - o, u - h, m - g, C - w).normalize(),
      e[5].setComponents(a + o, u + h, m + g, C + w).normalize(),
      this
    );
  }
  intersectsObject(t) {
    const e = t.geometry;
    return (
      e.boundingSphere === null && e.computeBoundingSphere(),
      $n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
      this.intersectsSphere($n)
    );
  }
  intersectsSprite(t) {
    return (
      $n.center.set(0, 0, 0),
      ($n.radius = 0.7071067811865476),
      $n.applyMatrix4(t.matrixWorld),
      this.intersectsSphere($n)
    );
  }
  intersectsSphere(t) {
    const e = this.planes,
      n = t.center,
      i = -t.radius;
    for (let r = 0; r < 6; r++) if (e[r].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = e[n];
      if (
        ((Tr.x = i.normal.x > 0 ? t.max.x : t.min.x),
        (Tr.y = i.normal.y > 0 ? t.max.y : t.min.y),
        (Tr.z = i.normal.z > 0 ? t.max.z : t.min.z),
        i.distanceToPoint(Tr) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Fl() {
  let s = null,
    t = !1,
    e = null,
    n = null;
  function i(r, o) {
    e(r, o), (n = s.requestAnimationFrame(i));
  }
  return {
    start: function () {
      t !== !0 && e !== null && ((n = s.requestAnimationFrame(i)), (t = !0));
    },
    stop: function () {
      s.cancelAnimationFrame(n), (t = !1);
    },
    setAnimationLoop: function (r) {
      e = r;
    },
    setContext: function (r) {
      s = r;
    },
  };
}
function hu(s, t) {
  const e = t.isWebGL2,
    n = new WeakMap();
  function i(c, h) {
    const u = c.array,
      d = c.usage,
      p = s.createBuffer();
    s.bindBuffer(h, p), s.bufferData(h, u, d), c.onUploadCallback();
    let g;
    if (u instanceof Float32Array) g = 5126;
    else if (u instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (e) g = 5131;
        else
          throw new Error(
            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
          );
      else g = 5123;
    else if (u instanceof Int16Array) g = 5122;
    else if (u instanceof Uint32Array) g = 5125;
    else if (u instanceof Int32Array) g = 5124;
    else if (u instanceof Int8Array) g = 5120;
    else if (u instanceof Uint8Array) g = 5121;
    else if (u instanceof Uint8ClampedArray) g = 5121;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + u
      );
    return {
      buffer: p,
      type: g,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: c.version,
    };
  }
  function r(c, h, u) {
    const d = h.array,
      p = h.updateRange;
    s.bindBuffer(u, c),
      p.count === -1
        ? s.bufferSubData(u, 0, d)
        : (e
            ? s.bufferSubData(
                u,
                p.offset * d.BYTES_PER_ELEMENT,
                d,
                p.offset,
                p.count
              )
            : s.bufferSubData(
                u,
                p.offset * d.BYTES_PER_ELEMENT,
                d.subarray(p.offset, p.offset + p.count)
              ),
          (p.count = -1));
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = n.get(c);
    h && (s.deleteBuffer(h.buffer), n.delete(c));
  }
  function l(c, h) {
    if (c.isGLBufferAttribute) {
      const d = n.get(c);
      (!d || d.version < c.version) &&
        n.set(c, {
          buffer: c.buffer,
          type: c.type,
          bytesPerElement: c.elementSize,
          version: c.version,
        });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u === void 0
      ? n.set(c, i(c, h))
      : u.version < c.version && (r(u.buffer, c, h), (u.version = c.version));
  }
  return { get: o, remove: a, update: l };
}
class xo extends Yt {
  constructor(t = 1, e = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: t,
        height: e,
        widthSegments: n,
        heightSegments: i,
      });
    const r = t / 2,
      o = e / 2,
      a = Math.floor(n),
      l = Math.floor(i),
      c = a + 1,
      h = l + 1,
      u = t / a,
      d = e / l,
      p = [],
      g = [],
      m = [],
      f = [];
    for (let _ = 0; _ < h; _++) {
      const w = _ * d - o;
      for (let C = 0; C < c; C++) {
        const T = C * u - r;
        g.push(T, -w, 0), m.push(0, 0, 1), f.push(C / a), f.push(1 - _ / l);
      }
    }
    for (let _ = 0; _ < l; _++)
      for (let w = 0; w < a; w++) {
        const C = w + c * _,
          T = w + c * (_ + 1),
          y = w + 1 + c * (_ + 1),
          L = w + 1 + c * _;
        p.push(C, T, L), p.push(T, y, L);
      }
    this.setIndex(p),
      this.setAttribute("position", new $t(g, 3)),
      this.setAttribute("normal", new $t(m, 3)),
      this.setAttribute("uv", new $t(f, 2));
  }
  static fromJSON(t) {
    return new xo(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
var uu = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
  du = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  fu = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  pu = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  mu = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  gu = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  _u = "vec3 transformed = vec3( position );",
  xu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  yu = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,
  vu = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  Mu = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
  bu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  wu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  Su = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Eu = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  Tu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  Au = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  Cu = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  Lu = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,
  Ru = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  Pu = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  Du = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  Iu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
  Fu = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  Nu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  Bu = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  zu = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  Ou = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  Uu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  Hu = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  Vu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  ku = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  Gu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  Wu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  qu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  Xu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  ju = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,
  Yu = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  Zu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Ju = `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,
  $u = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  Ku = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,
  Qu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  td = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,
  ed = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  nd = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,
  id = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,
  rd = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  sd = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  od = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  ad = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
  ld = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  cd = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  hd = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  ud = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  dd = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  fd = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  pd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  md = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  gd = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  _d = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  xd = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  yd = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  vd = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  Md = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  bd = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
  wd = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  Sd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Ed = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Td = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  Ad = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,
  Cd = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
  Ld = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
  Rd = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
  Pd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  Dd = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
  Id = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  Fd = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Nd = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  Bd = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  zd = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  Od = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  Ud = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  Hd = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  Vd = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,
  kd = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  Gd = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Wd = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,
  qd = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Xd = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  jd = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Yd = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  Zd = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  Jd = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  $d = `#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,
  Kd = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,
  Qd = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
  tf = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
  ef = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
  nf = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
  rf = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
  sf = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
  of = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const af = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  lf = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  cf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  hf = `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  uf = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  df = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  ff = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  pf = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  mf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  gf = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  _f = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  xf = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  yf = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  vf = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Mf = `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  bf = `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  wf = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  Sf = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Ef = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  Tf = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  Af = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Cf = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Lf = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  Rf = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Pf = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Df = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  If = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  Ff = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Nf = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Bf = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  zf = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Of = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  Ft = {
    alphamap_fragment: uu,
    alphamap_pars_fragment: du,
    alphatest_fragment: fu,
    alphatest_pars_fragment: pu,
    aomap_fragment: mu,
    aomap_pars_fragment: gu,
    begin_vertex: _u,
    beginnormal_vertex: xu,
    bsdfs: yu,
    bumpmap_pars_fragment: vu,
    clipping_planes_fragment: Mu,
    clipping_planes_pars_fragment: bu,
    clipping_planes_pars_vertex: wu,
    clipping_planes_vertex: Su,
    color_fragment: Eu,
    color_pars_fragment: Tu,
    color_pars_vertex: Au,
    color_vertex: Cu,
    common: Lu,
    cube_uv_reflection_fragment: Ru,
    defaultnormal_vertex: Pu,
    displacementmap_pars_vertex: Du,
    displacementmap_vertex: Iu,
    emissivemap_fragment: Fu,
    emissivemap_pars_fragment: Nu,
    encodings_fragment: Bu,
    encodings_pars_fragment: zu,
    envmap_fragment: Ou,
    envmap_common_pars_fragment: Uu,
    envmap_pars_fragment: Hu,
    envmap_pars_vertex: Vu,
    envmap_physical_pars_fragment: Ku,
    envmap_vertex: ku,
    fog_vertex: Gu,
    fog_pars_vertex: Wu,
    fog_fragment: qu,
    fog_pars_fragment: Xu,
    gradientmap_pars_fragment: ju,
    lightmap_fragment: Yu,
    lightmap_pars_fragment: Zu,
    lights_lambert_vertex: Ju,
    lights_pars_begin: $u,
    lights_toon_fragment: Qu,
    lights_toon_pars_fragment: td,
    lights_phong_fragment: ed,
    lights_phong_pars_fragment: nd,
    lights_physical_fragment: id,
    lights_physical_pars_fragment: rd,
    lights_fragment_begin: sd,
    lights_fragment_maps: od,
    lights_fragment_end: ad,
    logdepthbuf_fragment: ld,
    logdepthbuf_pars_fragment: cd,
    logdepthbuf_pars_vertex: hd,
    logdepthbuf_vertex: ud,
    map_fragment: dd,
    map_pars_fragment: fd,
    map_particle_fragment: pd,
    map_particle_pars_fragment: md,
    metalnessmap_fragment: gd,
    metalnessmap_pars_fragment: _d,
    morphcolor_vertex: xd,
    morphnormal_vertex: yd,
    morphtarget_pars_vertex: vd,
    morphtarget_vertex: Md,
    normal_fragment_begin: bd,
    normal_fragment_maps: wd,
    normal_pars_fragment: Sd,
    normal_pars_vertex: Ed,
    normal_vertex: Td,
    normalmap_pars_fragment: Ad,
    clearcoat_normal_fragment_begin: Cd,
    clearcoat_normal_fragment_maps: Ld,
    clearcoat_pars_fragment: Rd,
    output_fragment: Pd,
    packing: Dd,
    premultiplied_alpha_fragment: Id,
    project_vertex: Fd,
    dithering_fragment: Nd,
    dithering_pars_fragment: Bd,
    roughnessmap_fragment: zd,
    roughnessmap_pars_fragment: Od,
    shadowmap_pars_fragment: Ud,
    shadowmap_pars_vertex: Hd,
    shadowmap_vertex: Vd,
    shadowmask_pars_fragment: kd,
    skinbase_vertex: Gd,
    skinning_pars_vertex: Wd,
    skinning_vertex: qd,
    skinnormal_vertex: Xd,
    specularmap_fragment: jd,
    specularmap_pars_fragment: Yd,
    tonemapping_fragment: Zd,
    tonemapping_pars_fragment: Jd,
    transmission_fragment: $d,
    transmission_pars_fragment: Kd,
    uv_pars_fragment: Qd,
    uv_pars_vertex: tf,
    uv_vertex: ef,
    uv2_pars_fragment: nf,
    uv2_pars_vertex: rf,
    uv2_vertex: sf,
    worldpos_vertex: of,
    background_vert: af,
    background_frag: lf,
    cube_vert: cf,
    cube_frag: hf,
    depth_vert: uf,
    depth_frag: df,
    distanceRGBA_vert: ff,
    distanceRGBA_frag: pf,
    equirect_vert: mf,
    equirect_frag: gf,
    linedashed_vert: _f,
    linedashed_frag: xf,
    meshbasic_vert: yf,
    meshbasic_frag: vf,
    meshlambert_vert: Mf,
    meshlambert_frag: bf,
    meshmatcap_vert: wf,
    meshmatcap_frag: Sf,
    meshnormal_vert: Ef,
    meshnormal_frag: Tf,
    meshphong_vert: Af,
    meshphong_frag: Cf,
    meshphysical_vert: Lf,
    meshphysical_frag: Rf,
    meshtoon_vert: Pf,
    meshtoon_frag: Df,
    points_vert: If,
    points_frag: Ff,
    shadow_vert: Nf,
    shadow_frag: Bf,
    sprite_vert: zf,
    sprite_frag: Of,
  },
  ht = {
    common: {
      diffuse: { value: new xt(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      uvTransform: { value: new de() },
      uv2Transform: { value: new de() },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
    },
    specularmap: { specularMap: { value: null } },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
    lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
    emissivemap: { emissiveMap: { value: null } },
    bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
    normalmap: {
      normalMap: { value: null },
      normalScale: { value: new Z(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    roughnessmap: { roughnessMap: { value: null } },
    metalnessmap: { metalnessMap: { value: null } },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new xt(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotShadowMap: { value: [] },
      spotShadowMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new xt(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new de() },
    },
    sprite: {
      diffuse: { value: new xt(16777215) },
      opacity: { value: 1 },
      center: { value: new Z(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new de() },
    },
  },
  Ge = {
    basic: {
      uniforms: fe([
        ht.common,
        ht.specularmap,
        ht.envmap,
        ht.aomap,
        ht.lightmap,
        ht.fog,
      ]),
      vertexShader: Ft.meshbasic_vert,
      fragmentShader: Ft.meshbasic_frag,
    },
    lambert: {
      uniforms: fe([
        ht.common,
        ht.specularmap,
        ht.envmap,
        ht.aomap,
        ht.lightmap,
        ht.emissivemap,
        ht.fog,
        ht.lights,
        { emissive: { value: new xt(0) } },
      ]),
      vertexShader: Ft.meshlambert_vert,
      fragmentShader: Ft.meshlambert_frag,
    },
    phong: {
      uniforms: fe([
        ht.common,
        ht.specularmap,
        ht.envmap,
        ht.aomap,
        ht.lightmap,
        ht.emissivemap,
        ht.bumpmap,
        ht.normalmap,
        ht.displacementmap,
        ht.fog,
        ht.lights,
        {
          emissive: { value: new xt(0) },
          specular: { value: new xt(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Ft.meshphong_vert,
      fragmentShader: Ft.meshphong_frag,
    },
    standard: {
      uniforms: fe([
        ht.common,
        ht.envmap,
        ht.aomap,
        ht.lightmap,
        ht.emissivemap,
        ht.bumpmap,
        ht.normalmap,
        ht.displacementmap,
        ht.roughnessmap,
        ht.metalnessmap,
        ht.fog,
        ht.lights,
        {
          emissive: { value: new xt(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Ft.meshphysical_vert,
      fragmentShader: Ft.meshphysical_frag,
    },
    toon: {
      uniforms: fe([
        ht.common,
        ht.aomap,
        ht.lightmap,
        ht.emissivemap,
        ht.bumpmap,
        ht.normalmap,
        ht.displacementmap,
        ht.gradientmap,
        ht.fog,
        ht.lights,
        { emissive: { value: new xt(0) } },
      ]),
      vertexShader: Ft.meshtoon_vert,
      fragmentShader: Ft.meshtoon_frag,
    },
    matcap: {
      uniforms: fe([
        ht.common,
        ht.bumpmap,
        ht.normalmap,
        ht.displacementmap,
        ht.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Ft.meshmatcap_vert,
      fragmentShader: Ft.meshmatcap_frag,
    },
    points: {
      uniforms: fe([ht.points, ht.fog]),
      vertexShader: Ft.points_vert,
      fragmentShader: Ft.points_frag,
    },
    dashed: {
      uniforms: fe([
        ht.common,
        ht.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Ft.linedashed_vert,
      fragmentShader: Ft.linedashed_frag,
    },
    depth: {
      uniforms: fe([ht.common, ht.displacementmap]),
      vertexShader: Ft.depth_vert,
      fragmentShader: Ft.depth_frag,
    },
    normal: {
      uniforms: fe([
        ht.common,
        ht.bumpmap,
        ht.normalmap,
        ht.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Ft.meshnormal_vert,
      fragmentShader: Ft.meshnormal_frag,
    },
    sprite: {
      uniforms: fe([ht.sprite, ht.fog]),
      vertexShader: Ft.sprite_vert,
      fragmentShader: Ft.sprite_frag,
    },
    background: {
      uniforms: { uvTransform: { value: new de() }, t2D: { value: null } },
      vertexShader: Ft.background_vert,
      fragmentShader: Ft.background_frag,
    },
    cube: {
      uniforms: fe([ht.envmap, { opacity: { value: 1 } }]),
      vertexShader: Ft.cube_vert,
      fragmentShader: Ft.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Ft.equirect_vert,
      fragmentShader: Ft.equirect_frag,
    },
    distanceRGBA: {
      uniforms: fe([
        ht.common,
        ht.displacementmap,
        {
          referencePosition: { value: new E() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Ft.distanceRGBA_vert,
      fragmentShader: Ft.distanceRGBA_frag,
    },
    shadow: {
      uniforms: fe([
        ht.lights,
        ht.fog,
        { color: { value: new xt(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Ft.shadow_vert,
      fragmentShader: Ft.shadow_frag,
    },
  };
Ge.physical = {
  uniforms: fe([
    Ge.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new Z(1, 1) },
      clearcoatNormalMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: new xt(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: new Z() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new xt(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: new xt(1, 1, 1) },
      specularColorMap: { value: null },
    },
  ]),
  vertexShader: Ft.meshphysical_vert,
  fragmentShader: Ft.meshphysical_frag,
};
function Uf(s, t, e, n, i, r) {
  const o = new xt(0);
  let a = i === !0 ? 0 : 1,
    l,
    c,
    h = null,
    u = 0,
    d = null;
  function p(m, f) {
    let _ = !1,
      w = f.isScene === !0 ? f.background : null;
    w && w.isTexture && (w = t.get(w));
    const C = s.xr,
      T = C.getSession && C.getSession();
    T && T.environmentBlendMode === "additive" && (w = null),
      w === null ? g(o, a) : w && w.isColor && (g(w, 1), (_ = !0)),
      (s.autoClear || _) &&
        s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil),
      w && (w.isCubeTexture || w.mapping === $r)
        ? (c === void 0 &&
            ((c = new ce(
              new Mi(1, 1, 1),
              new Fe({
                name: "BackgroundCubeMaterial",
                uniforms: mi(Ge.cube.uniforms),
                vertexShader: Ge.cube.vertexShader,
                fragmentShader: Ge.cube.fragmentShader,
                side: De,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            c.geometry.deleteAttribute("normal"),
            c.geometry.deleteAttribute("uv"),
            (c.onBeforeRender = function (y, L, I) {
              this.matrixWorld.copyPosition(I.matrixWorld);
            }),
            Object.defineProperty(c.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            n.update(c)),
          (c.material.uniforms.envMap.value = w),
          (c.material.uniforms.flipEnvMap.value =
            w.isCubeTexture && w.isRenderTargetTexture === !1 ? -1 : 1),
          (h !== w || u !== w.version || d !== s.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (h = w),
            (u = w.version),
            (d = s.toneMapping)),
          c.layers.enableAll(),
          m.unshift(c, c.geometry, c.material, 0, 0, null))
        : w &&
          w.isTexture &&
          (l === void 0 &&
            ((l = new ce(
              new xo(2, 2),
              new Fe({
                name: "BackgroundMaterial",
                uniforms: mi(Ge.background.uniforms),
                vertexShader: Ge.background.vertexShader,
                fragmentShader: Ge.background.fragmentShader,
                side: Wi,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            l.geometry.deleteAttribute("normal"),
            Object.defineProperty(l.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            n.update(l)),
          (l.material.uniforms.t2D.value = w),
          w.matrixAutoUpdate === !0 && w.updateMatrix(),
          l.material.uniforms.uvTransform.value.copy(w.matrix),
          (h !== w || u !== w.version || d !== s.toneMapping) &&
            ((l.material.needsUpdate = !0),
            (h = w),
            (u = w.version),
            (d = s.toneMapping)),
          l.layers.enableAll(),
          m.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function g(m, f) {
    e.buffers.color.setClear(m.r, m.g, m.b, f, r);
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (m, f = 1) {
      o.set(m), (a = f), g(o, a);
    },
    getClearAlpha: function () {
      return a;
    },
    setClearAlpha: function (m) {
      (a = m), g(o, a);
    },
    render: p,
  };
}
function Hf(s, t, e, n) {
  const i = s.getParameter(34921),
    r = n.isWebGL2 ? null : t.get("OES_vertex_array_object"),
    o = n.isWebGL2 || r !== null,
    a = {},
    l = f(null);
  let c = l,
    h = !1;
  function u(P, k, z, G, X) {
    let H = !1;
    if (o) {
      const W = m(G, z, k);
      c !== W && ((c = W), p(c.object)),
        (H = _(P, G, z, X)),
        H && w(P, G, z, X);
    } else {
      const W = k.wireframe === !0;
      (c.geometry !== G.id || c.program !== z.id || c.wireframe !== W) &&
        ((c.geometry = G.id), (c.program = z.id), (c.wireframe = W), (H = !0));
    }
    X !== null && e.update(X, 34963),
      (H || h) &&
        ((h = !1),
        v(P, k, z, G),
        X !== null && s.bindBuffer(34963, e.get(X).buffer));
  }
  function d() {
    return n.isWebGL2 ? s.createVertexArray() : r.createVertexArrayOES();
  }
  function p(P) {
    return n.isWebGL2 ? s.bindVertexArray(P) : r.bindVertexArrayOES(P);
  }
  function g(P) {
    return n.isWebGL2 ? s.deleteVertexArray(P) : r.deleteVertexArrayOES(P);
  }
  function m(P, k, z) {
    const G = z.wireframe === !0;
    let X = a[P.id];
    X === void 0 && ((X = {}), (a[P.id] = X));
    let H = X[k.id];
    H === void 0 && ((H = {}), (X[k.id] = H));
    let W = H[G];
    return W === void 0 && ((W = f(d())), (H[G] = W)), W;
  }
  function f(P) {
    const k = [],
      z = [],
      G = [];
    for (let X = 0; X < i; X++) (k[X] = 0), (z[X] = 0), (G[X] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: k,
      enabledAttributes: z,
      attributeDivisors: G,
      object: P,
      attributes: {},
      index: null,
    };
  }
  function _(P, k, z, G) {
    const X = c.attributes,
      H = k.attributes;
    let W = 0;
    const Q = z.getAttributes();
    for (const J in Q)
      if (Q[J].location >= 0) {
        const mt = X[J];
        let yt = H[J];
        if (
          (yt === void 0 &&
            (J === "instanceMatrix" &&
              P.instanceMatrix &&
              (yt = P.instanceMatrix),
            J === "instanceColor" && P.instanceColor && (yt = P.instanceColor)),
          mt === void 0 || mt.attribute !== yt || (yt && mt.data !== yt.data))
        )
          return !0;
        W++;
      }
    return c.attributesNum !== W || c.index !== G;
  }
  function w(P, k, z, G) {
    const X = {},
      H = k.attributes;
    let W = 0;
    const Q = z.getAttributes();
    for (const J in Q)
      if (Q[J].location >= 0) {
        let mt = H[J];
        mt === void 0 &&
          (J === "instanceMatrix" &&
            P.instanceMatrix &&
            (mt = P.instanceMatrix),
          J === "instanceColor" && P.instanceColor && (mt = P.instanceColor));
        const yt = {};
        (yt.attribute = mt),
          mt && mt.data && (yt.data = mt.data),
          (X[J] = yt),
          W++;
      }
    (c.attributes = X), (c.attributesNum = W), (c.index = G);
  }
  function C() {
    const P = c.newAttributes;
    for (let k = 0, z = P.length; k < z; k++) P[k] = 0;
  }
  function T(P) {
    y(P, 0);
  }
  function y(P, k) {
    const z = c.newAttributes,
      G = c.enabledAttributes,
      X = c.attributeDivisors;
    (z[P] = 1),
      G[P] === 0 && (s.enableVertexAttribArray(P), (G[P] = 1)),
      X[P] !== k &&
        ((n.isWebGL2 ? s : t.get("ANGLE_instanced_arrays"))[
          n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](P, k),
        (X[P] = k));
  }
  function L() {
    const P = c.newAttributes,
      k = c.enabledAttributes;
    for (let z = 0, G = k.length; z < G; z++)
      k[z] !== P[z] && (s.disableVertexAttribArray(z), (k[z] = 0));
  }
  function I(P, k, z, G, X, H) {
    n.isWebGL2 === !0 && (z === 5124 || z === 5125)
      ? s.vertexAttribIPointer(P, k, z, X, H)
      : s.vertexAttribPointer(P, k, z, G, X, H);
  }
  function v(P, k, z, G) {
    if (
      n.isWebGL2 === !1 &&
      (P.isInstancedMesh || G.isInstancedBufferGeometry) &&
      t.get("ANGLE_instanced_arrays") === null
    )
      return;
    C();
    const X = G.attributes,
      H = z.getAttributes(),
      W = k.defaultAttributeValues;
    for (const Q in H) {
      const J = H[Q];
      if (J.location >= 0) {
        let et = X[Q];
        if (
          (et === void 0 &&
            (Q === "instanceMatrix" &&
              P.instanceMatrix &&
              (et = P.instanceMatrix),
            Q === "instanceColor" && P.instanceColor && (et = P.instanceColor)),
          et !== void 0)
        ) {
          const mt = et.normalized,
            yt = et.itemSize,
            V = e.get(et);
          if (V === void 0) continue;
          const zt = V.buffer,
            Et = V.type,
            Lt = V.bytesPerElement;
          if (et.isInterleavedBufferAttribute) {
            const rt = et.data,
              Dt = rt.stride,
              j = et.offset;
            if (rt.isInstancedInterleavedBuffer) {
              for (let q = 0; q < J.locationSize; q++)
                y(J.location + q, rt.meshPerAttribute);
              P.isInstancedMesh !== !0 &&
                G._maxInstanceCount === void 0 &&
                (G._maxInstanceCount = rt.meshPerAttribute * rt.count);
            } else for (let q = 0; q < J.locationSize; q++) T(J.location + q);
            s.bindBuffer(34962, zt);
            for (let q = 0; q < J.locationSize; q++)
              I(
                J.location + q,
                yt / J.locationSize,
                Et,
                mt,
                Dt * Lt,
                (j + (yt / J.locationSize) * q) * Lt
              );
          } else {
            if (et.isInstancedBufferAttribute) {
              for (let rt = 0; rt < J.locationSize; rt++)
                y(J.location + rt, et.meshPerAttribute);
              P.isInstancedMesh !== !0 &&
                G._maxInstanceCount === void 0 &&
                (G._maxInstanceCount = et.meshPerAttribute * et.count);
            } else
              for (let rt = 0; rt < J.locationSize; rt++) T(J.location + rt);
            s.bindBuffer(34962, zt);
            for (let rt = 0; rt < J.locationSize; rt++)
              I(
                J.location + rt,
                yt / J.locationSize,
                Et,
                mt,
                yt * Lt,
                (yt / J.locationSize) * rt * Lt
              );
          }
        } else if (W !== void 0) {
          const mt = W[Q];
          if (mt !== void 0)
            switch (mt.length) {
              case 2:
                s.vertexAttrib2fv(J.location, mt);
                break;
              case 3:
                s.vertexAttrib3fv(J.location, mt);
                break;
              case 4:
                s.vertexAttrib4fv(J.location, mt);
                break;
              default:
                s.vertexAttrib1fv(J.location, mt);
            }
        }
      }
    }
    L();
  }
  function R() {
    ut();
    for (const P in a) {
      const k = a[P];
      for (const z in k) {
        const G = k[z];
        for (const X in G) g(G[X].object), delete G[X];
        delete k[z];
      }
      delete a[P];
    }
  }
  function B(P) {
    if (a[P.id] === void 0) return;
    const k = a[P.id];
    for (const z in k) {
      const G = k[z];
      for (const X in G) g(G[X].object), delete G[X];
      delete k[z];
    }
    delete a[P.id];
  }
  function F(P) {
    for (const k in a) {
      const z = a[k];
      if (z[P.id] === void 0) continue;
      const G = z[P.id];
      for (const X in G) g(G[X].object), delete G[X];
      delete z[P.id];
    }
  }
  function ut() {
    K(), (h = !0), c !== l && ((c = l), p(c.object));
  }
  function K() {
    (l.geometry = null), (l.program = null), (l.wireframe = !1);
  }
  return {
    setup: u,
    reset: ut,
    resetDefaultState: K,
    dispose: R,
    releaseStatesOfGeometry: B,
    releaseStatesOfProgram: F,
    initAttributes: C,
    enableAttribute: T,
    disableUnusedAttributes: L,
  };
}
function Vf(s, t, e, n) {
  const i = n.isWebGL2;
  let r;
  function o(c) {
    r = c;
  }
  function a(c, h) {
    s.drawArrays(r, c, h), e.update(h, r, 1);
  }
  function l(c, h, u) {
    if (u === 0) return;
    let d, p;
    if (i) (d = s), (p = "drawArraysInstanced");
    else if (
      ((d = t.get("ANGLE_instanced_arrays")),
      (p = "drawArraysInstancedANGLE"),
      d === null)
    ) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    d[p](r, c, h, u), e.update(h, r, u);
  }
  (this.setMode = o), (this.render = a), (this.renderInstances = l);
}
function kf(s, t, e) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      const I = t.get("EXT_texture_filter_anisotropic");
      n = s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function r(I) {
    if (I === "highp") {
      if (
        s.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        s.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return "highp";
      I = "mediump";
    }
    return I === "mediump" &&
      s.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      s.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? "mediump"
      : "lowp";
  }
  const o =
    (typeof WebGL2RenderingContext != "undefined" &&
      s instanceof WebGL2RenderingContext) ||
    (typeof WebGL2ComputeRenderingContext != "undefined" &&
      s instanceof WebGL2ComputeRenderingContext);
  let a = e.precision !== void 0 ? e.precision : "highp";
  const l = r(a);
  l !== a &&
    (console.warn(
      "THREE.WebGLRenderer:",
      a,
      "not supported, using",
      l,
      "instead."
    ),
    (a = l));
  const c = o || t.has("WEBGL_draw_buffers"),
    h = e.logarithmicDepthBuffer === !0,
    u = s.getParameter(34930),
    d = s.getParameter(35660),
    p = s.getParameter(3379),
    g = s.getParameter(34076),
    m = s.getParameter(34921),
    f = s.getParameter(36347),
    _ = s.getParameter(36348),
    w = s.getParameter(36349),
    C = d > 0,
    T = o || t.has("OES_texture_float"),
    y = C && T,
    L = o ? s.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
    getMaxAnisotropy: i,
    getMaxPrecision: r,
    precision: a,
    logarithmicDepthBuffer: h,
    maxTextures: u,
    maxVertexTextures: d,
    maxTextureSize: p,
    maxCubemapSize: g,
    maxAttributes: m,
    maxVertexUniforms: f,
    maxVaryings: _,
    maxFragmentUniforms: w,
    vertexTextures: C,
    floatFragmentTextures: T,
    floatVertexTextures: y,
    maxSamples: L,
  };
}
function Gf(s) {
  const t = this;
  let e = null,
    n = 0,
    i = !1,
    r = !1;
  const o = new Qe(),
    a = new de(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (u, d, p) {
      const g = u.length !== 0 || d || n !== 0 || i;
      return (i = d), (e = h(u, p, 0)), (n = u.length), g;
    }),
    (this.beginShadows = function () {
      (r = !0), h(null);
    }),
    (this.endShadows = function () {
      (r = !1), c();
    }),
    (this.setState = function (u, d, p) {
      const g = u.clippingPlanes,
        m = u.clipIntersection,
        f = u.clipShadows,
        _ = s.get(u);
      if (!i || g === null || g.length === 0 || (r && !f)) r ? h(null) : c();
      else {
        const w = r ? 0 : n,
          C = w * 4;
        let T = _.clippingState || null;
        (l.value = T), (T = h(g, d, C, p));
        for (let y = 0; y !== C; ++y) T[y] = e[y];
        (_.clippingState = T),
          (this.numIntersection = m ? this.numPlanes : 0),
          (this.numPlanes += w);
      }
    });
  function c() {
    l.value !== e && ((l.value = e), (l.needsUpdate = n > 0)),
      (t.numPlanes = n),
      (t.numIntersection = 0);
  }
  function h(u, d, p, g) {
    const m = u !== null ? u.length : 0;
    let f = null;
    if (m !== 0) {
      if (((f = l.value), g !== !0 || f === null)) {
        const _ = p + m * 4,
          w = d.matrixWorldInverse;
        a.getNormalMatrix(w),
          (f === null || f.length < _) && (f = new Float32Array(_));
        for (let C = 0, T = p; C !== m; ++C, T += 4)
          o.copy(u[C]).applyMatrix4(w, a),
            o.normal.toArray(f, T),
            (f[T + 3] = o.constant);
      }
      (l.value = f), (l.needsUpdate = !0);
    }
    return (t.numPlanes = m), (t.numIntersection = 0), f;
  }
}
function Wf(s) {
  let t = new WeakMap();
  function e(o, a) {
    return a === $s ? (o.mapping = di) : a === Ks && (o.mapping = fi), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === $s || a === Ks)
        if (t.has(o)) {
          const l = t.get(o).texture;
          return e(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new Il(l.height / 2);
            return (
              c.fromEquirectangularTexture(s, o),
              t.set(o, c),
              o.addEventListener("dispose", i),
              e(c.texture, o.mapping)
            );
          } else return null;
        }
    }
    return o;
  }
  function i(o) {
    const a = o.target;
    a.removeEventListener("dispose", i);
    const l = t.get(a);
    l !== void 0 && (t.delete(a), l.dispose());
  }
  function r() {
    t = new WeakMap();
  }
  return { get: n, dispose: r };
}
class yo extends go {
  constructor(t = -1, e = 1, n = 1, i = -1, r = 0.1, o = 2e3) {
    super(),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = t),
      (this.right = e),
      (this.top = n),
      (this.bottom = i),
      (this.near = r),
      (this.far = o),
      this.updateProjectionMatrix();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.left = t.left),
      (this.right = t.right),
      (this.top = t.top),
      (this.bottom = t.bottom),
      (this.near = t.near),
      (this.far = t.far),
      (this.zoom = t.zoom),
      (this.view = t.view === null ? null : Object.assign({}, t.view)),
      this
    );
  }
  setViewOffset(t, e, n, i, r, o) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = t),
      (this.view.fullHeight = e),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom),
      e = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let r = n - t,
      o = n + t,
      a = i + e,
      l = i - e;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (r += c * this.view.offsetX),
        (o = r + c * this.view.width),
        (a -= h * this.view.offsetY),
        (l = a - h * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(r, o, a, l, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      (e.object.zoom = this.zoom),
      (e.object.left = this.left),
      (e.object.right = this.right),
      (e.object.top = this.top),
      (e.object.bottom = this.bottom),
      (e.object.near = this.near),
      (e.object.far = this.far),
      this.view !== null && (e.object.view = Object.assign({}, this.view)),
      e
    );
  }
}
yo.prototype.isOrthographicCamera = !0;
const oi = 4,
  Aa = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  En = 20,
  zs = new yo(),
  Ca = new xt();
let Os = null;
const Sn = (1 + Math.sqrt(5)) / 2,
  Kn = 1 / Sn,
  La = [
    new E(1, 1, 1),
    new E(-1, 1, 1),
    new E(1, 1, -1),
    new E(-1, 1, -1),
    new E(0, Sn, Kn),
    new E(0, Sn, -Kn),
    new E(Kn, 0, Sn),
    new E(-Kn, 0, Sn),
    new E(Sn, Kn, 0),
    new E(-Sn, Kn, 0),
  ];
class Ra {
  constructor(t) {
    (this._renderer = t),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(t, e = 0, n = 0.1, i = 100) {
    (Os = this._renderer.getRenderTarget()), this._setSize(256);
    const r = this._allocateTargets();
    return (
      (r.depthBuffer = !0),
      this._sceneToCubeUV(t, n, i, r),
      e > 0 && this._blur(r, 0, 0, e),
      this._applyPMREM(r),
      this._cleanup(r),
      r
    );
  }
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = Ia()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = Da()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(t) {
    (this._lodMax = Math.floor(Math.log2(t))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let t = 0; t < this._lodPlanes.length; t++)
      this._lodPlanes[t].dispose();
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(Os),
      (t.scissorTest = !1),
      Ar(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === di || t.mapping === fi
      ? this._setSize(
          t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width
        )
      : this._setSize(t.image.width / 4),
      (Os = this._renderer.getRenderTarget());
    const n = e || this._allocateTargets();
    return (
      this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112),
      e = 4 * this._cubeSize,
      n = {
        magFilter: ve,
        minFilter: ve,
        generateMipmaps: !1,
        type: Xi,
        format: Pe,
        encoding: pn,
        depthBuffer: !1,
      },
      i = Pa(t, e, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = Pa(t, e, n));
      const { _lodMax: r } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = qf(r)),
        (this._blurMaterial = Xf(r, t, e));
    }
    return i;
  }
  _compileMaterial(t) {
    const e = new ce(this._lodPlanes[0], t);
    this._renderer.compile(e, zs);
  }
  _sceneToCubeUV(t, e, n, i) {
    const a = new _e(90, 1, e, n),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      h = this._renderer,
      u = h.autoClear,
      d = h.toneMapping;
    h.getClearColor(Ca), (h.toneMapping = tn), (h.autoClear = !1);
    const p = new vi({
        name: "PMREM.Background",
        side: De,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new ce(new Mi(), p);
    let m = !1;
    const f = t.background;
    f
      ? f.isColor && (p.color.copy(f), (t.background = null), (m = !0))
      : (p.color.copy(Ca), (m = !0));
    for (let _ = 0; _ < 6; _++) {
      const w = _ % 3;
      w === 0
        ? (a.up.set(0, l[_], 0), a.lookAt(c[_], 0, 0))
        : w === 1
        ? (a.up.set(0, 0, l[_]), a.lookAt(0, c[_], 0))
        : (a.up.set(0, l[_], 0), a.lookAt(0, 0, c[_]));
      const C = this._cubeSize;
      Ar(i, w * C, _ > 2 ? C : 0, C, C),
        h.setRenderTarget(i),
        m && h.render(g, a),
        h.render(t, a);
    }
    g.geometry.dispose(),
      g.material.dispose(),
      (h.toneMapping = d),
      (h.autoClear = u),
      (t.background = f);
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer,
      i = t.mapping === di || t.mapping === fi;
    i
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ia()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          t.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = Da());
    const r = i ? this._cubemapMaterial : this._equirectMaterial,
      o = new ce(this._lodPlanes[0], r),
      a = r.uniforms;
    a.envMap.value = t;
    const l = this._cubeSize;
    Ar(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(o, zs);
  }
  _applyPMREM(t) {
    const e = this._renderer,
      n = e.autoClear;
    e.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const r = Math.sqrt(
          this._sigmas[i] * this._sigmas[i] -
            this._sigmas[i - 1] * this._sigmas[i - 1]
        ),
        o = La[(i - 1) % La.length];
      this._blur(t, i - 1, i, r, o);
    }
    e.autoClear = n;
  }
  _blur(t, e, n, i, r) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(t, o, e, n, i, "latitudinal", r),
      this._halfBlur(o, t, n, n, i, "longitudinal", r);
  }
  _halfBlur(t, e, n, i, r, o, a) {
    const l = this._renderer,
      c = this._blurMaterial;
    o !== "latitudinal" &&
      o !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const h = 3,
      u = new ce(this._lodPlanes[i], c),
      d = c.uniforms,
      p = this._sizeLods[n] - 1,
      g = isFinite(r) ? Math.PI / (2 * p) : (2 * Math.PI) / (2 * En - 1),
      m = r / g,
      f = isFinite(r) ? 1 + Math.floor(h * m) : En;
    f > En &&
      console.warn(
        `sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${En}`
      );
    const _ = [];
    let w = 0;
    for (let I = 0; I < En; ++I) {
      const v = I / m,
        R = Math.exp((-v * v) / 2);
      _.push(R), I === 0 ? (w += R) : I < f && (w += 2 * R);
    }
    for (let I = 0; I < _.length; I++) _[I] = _[I] / w;
    (d.envMap.value = t.texture),
      (d.samples.value = f),
      (d.weights.value = _),
      (d.latitudinal.value = o === "latitudinal"),
      a && (d.poleAxis.value = a);
    const { _lodMax: C } = this;
    (d.dTheta.value = g), (d.mipInt.value = C - n);
    const T = this._sizeLods[i],
      y = 3 * T * (i > C - oi ? i - C + oi : 0),
      L = 4 * (this._cubeSize - T);
    Ar(e, y, L, 3 * T, 2 * T), l.setRenderTarget(e), l.render(u, zs);
  }
}
function qf(s) {
  const t = [],
    e = [],
    n = [];
  let i = s;
  const r = s - oi + 1 + Aa.length;
  for (let o = 0; o < r; o++) {
    const a = Math.pow(2, i);
    e.push(a);
    let l = 1 / a;
    o > s - oi ? (l = Aa[o - s + oi - 1]) : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2),
      h = -c,
      u = 1 + c,
      d = [h, h, u, h, u, u, h, h, u, u, h, u],
      p = 6,
      g = 6,
      m = 3,
      f = 2,
      _ = 1,
      w = new Float32Array(m * g * p),
      C = new Float32Array(f * g * p),
      T = new Float32Array(_ * g * p);
    for (let L = 0; L < p; L++) {
      const I = ((L % 3) * 2) / 3 - 1,
        v = L > 2 ? 0 : -1,
        R = [
          I,
          v,
          0,
          I + 2 / 3,
          v,
          0,
          I + 2 / 3,
          v + 1,
          0,
          I,
          v,
          0,
          I + 2 / 3,
          v + 1,
          0,
          I,
          v + 1,
          0,
        ];
      w.set(R, m * g * L), C.set(d, f * g * L);
      const B = [L, L, L, L, L, L];
      T.set(B, _ * g * L);
    }
    const y = new Yt();
    y.setAttribute("position", new re(w, m)),
      y.setAttribute("uv", new re(C, f)),
      y.setAttribute("faceIndex", new re(T, _)),
      t.push(y),
      i > oi && i--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function Pa(s, t, e) {
  const n = new we(s, t, e);
  return (
    (n.texture.mapping = $r),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function Ar(s, t, e, n, i) {
  s.viewport.set(t, e, n, i), s.scissor.set(t, e, n, i);
}
function Xf(s, t, e) {
  const n = new Float32Array(En),
    i = new E(0, 1, 0);
  return new Fe({
    name: "SphericalGaussianBlur",
    defines: {
      n: En,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / e,
      CUBEUV_MAX_MIP: `${s}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i },
    },
    vertexShader: vo(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: un,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Da() {
  return new Fe({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: vo(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: un,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Ia() {
  return new Fe({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: vo(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: un,
    depthTest: !1,
    depthWrite: !1,
  });
}
function vo() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function jf(s) {
  let t = new WeakMap(),
    e = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping,
        c = l === $s || l === Ks,
        h = l === di || l === fi;
      if (c || h)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let u = t.get(a);
          return (
            e === null && (e = new Ra(s)),
            (u = c ? e.fromEquirectangular(a, u) : e.fromCubemap(a, u)),
            t.set(a, u),
            u.texture
          );
        } else {
          if (t.has(a)) return t.get(a).texture;
          {
            const u = a.image;
            if ((c && u && u.height > 0) || (h && u && i(u))) {
              e === null && (e = new Ra(s));
              const d = c ? e.fromEquirectangular(a) : e.fromCubemap(a);
              return t.set(a, d), a.addEventListener("dispose", r), d.texture;
            } else return null;
          }
        }
    }
    return a;
  }
  function i(a) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++) a[h] !== void 0 && l++;
    return l === c;
  }
  function r(a) {
    const l = a.target;
    l.removeEventListener("dispose", r);
    const c = t.get(l);
    c !== void 0 && (t.delete(l), c.dispose());
  }
  function o() {
    (t = new WeakMap()), e !== null && (e.dispose(), (e = null));
  }
  return { get: n, dispose: o };
}
function Yf(s) {
  const t = {};
  function e(n) {
    if (t[n] !== void 0) return t[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          s.getExtension("WEBGL_depth_texture") ||
          s.getExtension("MOZ_WEBGL_depth_texture") ||
          s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          s.getExtension("EXT_texture_filter_anisotropic") ||
          s.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          s.getExtension("WEBGL_compressed_texture_s3tc") ||
          s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          s.getExtension("WEBGL_compressed_texture_pvrtc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s.getExtension(n);
    }
    return (t[n] = i), i;
  }
  return {
    has: function (n) {
      return e(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? e("EXT_color_buffer_float")
        : (e("WEBGL_depth_texture"),
          e("OES_texture_float"),
          e("OES_texture_half_float"),
          e("OES_texture_half_float_linear"),
          e("OES_standard_derivatives"),
          e("OES_element_index_uint"),
          e("OES_vertex_array_object"),
          e("ANGLE_instanced_arrays")),
        e("OES_texture_float_linear"),
        e("EXT_color_buffer_half_float"),
        e("WEBGL_multisampled_render_to_texture");
    },
    get: function (n) {
      const i = e(n);
      return (
        i === null &&
          console.warn(
            "THREE.WebGLRenderer: " + n + " extension not supported."
          ),
        i
      );
    },
  };
}
function Zf(s, t, e, n) {
  const i = {},
    r = new WeakMap();
  function o(u) {
    const d = u.target;
    d.index !== null && t.remove(d.index);
    for (const g in d.attributes) t.remove(d.attributes[g]);
    d.removeEventListener("dispose", o), delete i[d.id];
    const p = r.get(d);
    p && (t.remove(p), r.delete(d)),
      n.releaseStatesOfGeometry(d),
      d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount,
      e.memory.geometries--;
  }
  function a(u, d) {
    return (
      i[d.id] === !0 ||
        (d.addEventListener("dispose", o),
        (i[d.id] = !0),
        e.memory.geometries++),
      d
    );
  }
  function l(u) {
    const d = u.attributes;
    for (const g in d) t.update(d[g], 34962);
    const p = u.morphAttributes;
    for (const g in p) {
      const m = p[g];
      for (let f = 0, _ = m.length; f < _; f++) t.update(m[f], 34962);
    }
  }
  function c(u) {
    const d = [],
      p = u.index,
      g = u.attributes.position;
    let m = 0;
    if (p !== null) {
      const w = p.array;
      m = p.version;
      for (let C = 0, T = w.length; C < T; C += 3) {
        const y = w[C + 0],
          L = w[C + 1],
          I = w[C + 2];
        d.push(y, L, L, I, I, y);
      }
    } else {
      const w = g.array;
      m = g.version;
      for (let C = 0, T = w.length / 3 - 1; C < T; C += 3) {
        const y = C + 0,
          L = C + 1,
          I = C + 2;
        d.push(y, L, L, I, I, y);
      }
    }
    const f = new (Cl(d) ? Dl : Pl)(d, 1);
    f.version = m;
    const _ = r.get(u);
    _ && t.remove(_), r.set(u, f);
  }
  function h(u) {
    const d = r.get(u);
    if (d) {
      const p = u.index;
      p !== null && d.version < p.version && c(u);
    } else c(u);
    return r.get(u);
  }
  return { get: a, update: l, getWireframeAttribute: h };
}
function Jf(s, t, e, n) {
  const i = n.isWebGL2;
  let r;
  function o(d) {
    r = d;
  }
  let a, l;
  function c(d) {
    (a = d.type), (l = d.bytesPerElement);
  }
  function h(d, p) {
    s.drawElements(r, p, a, d * l), e.update(p, r, 1);
  }
  function u(d, p, g) {
    if (g === 0) return;
    let m, f;
    if (i) (m = s), (f = "drawElementsInstanced");
    else if (
      ((m = t.get("ANGLE_instanced_arrays")),
      (f = "drawElementsInstancedANGLE"),
      m === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    m[f](r, p, a, d * l, g), e.update(p, r, g);
  }
  (this.setMode = o),
    (this.setIndex = c),
    (this.render = h),
    (this.renderInstances = u);
}
function $f(s) {
  const t = { geometries: 0, textures: 0 },
    e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, o, a) {
    switch ((e.calls++, o)) {
      case 4:
        e.triangles += a * (r / 3);
        break;
      case 1:
        e.lines += a * (r / 2);
        break;
      case 3:
        e.lines += a * (r - 1);
        break;
      case 2:
        e.lines += a * r;
        break;
      case 0:
        e.points += a * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    e.frame++, (e.calls = 0), (e.triangles = 0), (e.points = 0), (e.lines = 0);
  }
  return {
    memory: t,
    render: e,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  };
}
function Kf(s, t) {
  return s[0] - t[0];
}
function Qf(s, t) {
  return Math.abs(t[1]) - Math.abs(s[1]);
}
function Us(s, t) {
  let e = 1;
  const n = t.isInterleavedBufferAttribute ? t.data.array : t.array;
  n instanceof Int8Array
    ? (e = 127)
    : n instanceof Int16Array
    ? (e = 32767)
    : n instanceof Int32Array
    ? (e = 2147483647)
    : console.error(
        "THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",
        n
      ),
    s.divideScalar(e);
}
function tp(s, t, e) {
  const n = {},
    i = new Float32Array(8),
    r = new WeakMap(),
    o = new jt(),
    a = [];
  for (let c = 0; c < 8; c++) a[c] = [c, 0];
  function l(c, h, u, d) {
    const p = c.morphTargetInfluences;
    if (t.isWebGL2 === !0) {
      const m =
          h.morphAttributes.position ||
          h.morphAttributes.normal ||
          h.morphAttributes.color,
        f = m !== void 0 ? m.length : 0;
      let _ = r.get(h);
      if (_ === void 0 || _.count !== f) {
        let z = function () {
          P.dispose(), r.delete(h), h.removeEventListener("dispose", z);
        };
        var g = z;
        _ !== void 0 && _.texture.dispose();
        const T = h.morphAttributes.position !== void 0,
          y = h.morphAttributes.normal !== void 0,
          L = h.morphAttributes.color !== void 0,
          I = h.morphAttributes.position || [],
          v = h.morphAttributes.normal || [],
          R = h.morphAttributes.color || [];
        let B = 0;
        T === !0 && (B = 1), y === !0 && (B = 2), L === !0 && (B = 3);
        let F = h.attributes.position.count * B,
          ut = 1;
        F > t.maxTextureSize &&
          ((ut = Math.ceil(F / t.maxTextureSize)), (F = t.maxTextureSize));
        const K = new Float32Array(F * ut * 4 * f),
          P = new Qr(K, F, ut, f);
        (P.type = Tn), (P.needsUpdate = !0);
        const k = B * 4;
        for (let G = 0; G < f; G++) {
          const X = I[G],
            H = v[G],
            W = R[G],
            Q = F * ut * 4 * G;
          for (let J = 0; J < X.count; J++) {
            const et = J * k;
            T === !0 &&
              (o.fromBufferAttribute(X, J),
              X.normalized === !0 && Us(o, X),
              (K[Q + et + 0] = o.x),
              (K[Q + et + 1] = o.y),
              (K[Q + et + 2] = o.z),
              (K[Q + et + 3] = 0)),
              y === !0 &&
                (o.fromBufferAttribute(H, J),
                H.normalized === !0 && Us(o, H),
                (K[Q + et + 4] = o.x),
                (K[Q + et + 5] = o.y),
                (K[Q + et + 6] = o.z),
                (K[Q + et + 7] = 0)),
              L === !0 &&
                (o.fromBufferAttribute(W, J),
                W.normalized === !0 && Us(o, W),
                (K[Q + et + 8] = o.x),
                (K[Q + et + 9] = o.y),
                (K[Q + et + 10] = o.z),
                (K[Q + et + 11] = W.itemSize === 4 ? o.w : 1));
          }
        }
        (_ = { count: f, texture: P, size: new Z(F, ut) }),
          r.set(h, _),
          h.addEventListener("dispose", z);
      }
      let w = 0;
      for (let T = 0; T < p.length; T++) w += p[T];
      const C = h.morphTargetsRelative ? 1 : 1 - w;
      d.getUniforms().setValue(s, "morphTargetBaseInfluence", C),
        d.getUniforms().setValue(s, "morphTargetInfluences", p),
        d.getUniforms().setValue(s, "morphTargetsTexture", _.texture, e),
        d.getUniforms().setValue(s, "morphTargetsTextureSize", _.size);
    } else {
      const m = p === void 0 ? 0 : p.length;
      let f = n[h.id];
      if (f === void 0 || f.length !== m) {
        f = [];
        for (let y = 0; y < m; y++) f[y] = [y, 0];
        n[h.id] = f;
      }
      for (let y = 0; y < m; y++) {
        const L = f[y];
        (L[0] = y), (L[1] = p[y]);
      }
      f.sort(Qf);
      for (let y = 0; y < 8; y++)
        y < m && f[y][1]
          ? ((a[y][0] = f[y][0]), (a[y][1] = f[y][1]))
          : ((a[y][0] = Number.MAX_SAFE_INTEGER), (a[y][1] = 0));
      a.sort(Kf);
      const _ = h.morphAttributes.position,
        w = h.morphAttributes.normal;
      let C = 0;
      for (let y = 0; y < 8; y++) {
        const L = a[y],
          I = L[0],
          v = L[1];
        I !== Number.MAX_SAFE_INTEGER && v
          ? (_ &&
              h.getAttribute("morphTarget" + y) !== _[I] &&
              h.setAttribute("morphTarget" + y, _[I]),
            w &&
              h.getAttribute("morphNormal" + y) !== w[I] &&
              h.setAttribute("morphNormal" + y, w[I]),
            (i[y] = v),
            (C += v))
          : (_ &&
              h.hasAttribute("morphTarget" + y) === !0 &&
              h.deleteAttribute("morphTarget" + y),
            w &&
              h.hasAttribute("morphNormal" + y) === !0 &&
              h.deleteAttribute("morphNormal" + y),
            (i[y] = 0));
      }
      const T = h.morphTargetsRelative ? 1 : 1 - C;
      d.getUniforms().setValue(s, "morphTargetBaseInfluence", T),
        d.getUniforms().setValue(s, "morphTargetInfluences", i);
    }
  }
  return { update: l };
}
function ep(s, t, e, n) {
  let i = new WeakMap();
  function r(l) {
    const c = n.render.frame,
      h = l.geometry,
      u = t.get(l, h);
    return (
      i.get(u) !== c && (t.update(u), i.set(u, c)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", a) === !1 &&
          l.addEventListener("dispose", a),
        e.update(l.instanceMatrix, 34962),
        l.instanceColor !== null && e.update(l.instanceColor, 34962)),
      u
    );
  }
  function o() {
    i = new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a),
      e.remove(c.instanceMatrix),
      c.instanceColor !== null && e.remove(c.instanceColor);
  }
  return { update: r, dispose: o };
}
const Nl = new he(),
  Bl = new Qr(),
  zl = new mo(),
  Ol = new ts(),
  Fa = [],
  Na = [],
  Ba = new Float32Array(16),
  za = new Float32Array(9),
  Oa = new Float32Array(4);
function bi(s, t, e) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = t * e;
  let r = Fa[i];
  if ((r === void 0 && ((r = new Float32Array(i)), (Fa[i] = r)), t !== 0)) {
    n.toArray(r, 0);
    for (let o = 1, a = 0; o !== t; ++o) (a += e), s[o].toArray(r, a);
  }
  return r;
}
function xe(s, t) {
  if (s.length !== t.length) return !1;
  for (let e = 0, n = s.length; e < n; e++) if (s[e] !== t[e]) return !1;
  return !0;
}
function ye(s, t) {
  for (let e = 0, n = t.length; e < n; e++) s[e] = t[e];
}
function ns(s, t) {
  let e = Na[t];
  e === void 0 && ((e = new Int32Array(t)), (Na[t] = e));
  for (let n = 0; n !== t; ++n) e[n] = s.allocateTextureUnit();
  return e;
}
function np(s, t) {
  const e = this.cache;
  e[0] !== t && (s.uniform1f(this.addr, t), (e[0] = t));
}
function ip(s, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) &&
      (s.uniform2f(this.addr, t.x, t.y), (e[0] = t.x), (e[1] = t.y));
  else {
    if (xe(e, t)) return;
    s.uniform2fv(this.addr, t), ye(e, t);
  }
}
function rp(s, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) &&
      (s.uniform3f(this.addr, t.x, t.y, t.z),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z));
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) &&
      (s.uniform3f(this.addr, t.r, t.g, t.b),
      (e[0] = t.r),
      (e[1] = t.g),
      (e[2] = t.b));
  else {
    if (xe(e, t)) return;
    s.uniform3fv(this.addr, t), ye(e, t);
  }
}
function sp(s, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) &&
      (s.uniform4f(this.addr, t.x, t.y, t.z, t.w),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z),
      (e[3] = t.w));
  else {
    if (xe(e, t)) return;
    s.uniform4fv(this.addr, t), ye(e, t);
  }
}
function op(s, t) {
  const e = this.cache,
    n = t.elements;
  if (n === void 0) {
    if (xe(e, t)) return;
    s.uniformMatrix2fv(this.addr, !1, t), ye(e, t);
  } else {
    if (xe(e, n)) return;
    Oa.set(n), s.uniformMatrix2fv(this.addr, !1, Oa), ye(e, n);
  }
}
function ap(s, t) {
  const e = this.cache,
    n = t.elements;
  if (n === void 0) {
    if (xe(e, t)) return;
    s.uniformMatrix3fv(this.addr, !1, t), ye(e, t);
  } else {
    if (xe(e, n)) return;
    za.set(n), s.uniformMatrix3fv(this.addr, !1, za), ye(e, n);
  }
}
function lp(s, t) {
  const e = this.cache,
    n = t.elements;
  if (n === void 0) {
    if (xe(e, t)) return;
    s.uniformMatrix4fv(this.addr, !1, t), ye(e, t);
  } else {
    if (xe(e, n)) return;
    Ba.set(n), s.uniformMatrix4fv(this.addr, !1, Ba), ye(e, n);
  }
}
function cp(s, t) {
  const e = this.cache;
  e[0] !== t && (s.uniform1i(this.addr, t), (e[0] = t));
}
function hp(s, t) {
  const e = this.cache;
  xe(e, t) || (s.uniform2iv(this.addr, t), ye(e, t));
}
function up(s, t) {
  const e = this.cache;
  xe(e, t) || (s.uniform3iv(this.addr, t), ye(e, t));
}
function dp(s, t) {
  const e = this.cache;
  xe(e, t) || (s.uniform4iv(this.addr, t), ye(e, t));
}
function fp(s, t) {
  const e = this.cache;
  e[0] !== t && (s.uniform1ui(this.addr, t), (e[0] = t));
}
function pp(s, t) {
  const e = this.cache;
  xe(e, t) || (s.uniform2uiv(this.addr, t), ye(e, t));
}
function mp(s, t) {
  const e = this.cache;
  xe(e, t) || (s.uniform3uiv(this.addr, t), ye(e, t));
}
function gp(s, t) {
  const e = this.cache;
  xe(e, t) || (s.uniform4uiv(this.addr, t), ye(e, t));
}
function _p(s, t, e) {
  const n = this.cache,
    i = e.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    e.setTexture2D(t || Nl, i);
}
function xp(s, t, e) {
  const n = this.cache,
    i = e.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    e.setTexture3D(t || zl, i);
}
function yp(s, t, e) {
  const n = this.cache,
    i = e.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    e.setTextureCube(t || Ol, i);
}
function vp(s, t, e) {
  const n = this.cache,
    i = e.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    e.setTexture2DArray(t || Bl, i);
}
function Mp(s) {
  switch (s) {
    case 5126:
      return np;
    case 35664:
      return ip;
    case 35665:
      return rp;
    case 35666:
      return sp;
    case 35674:
      return op;
    case 35675:
      return ap;
    case 35676:
      return lp;
    case 5124:
    case 35670:
      return cp;
    case 35667:
    case 35671:
      return hp;
    case 35668:
    case 35672:
      return up;
    case 35669:
    case 35673:
      return dp;
    case 5125:
      return fp;
    case 36294:
      return pp;
    case 36295:
      return mp;
    case 36296:
      return gp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return _p;
    case 35679:
    case 36299:
    case 36307:
      return xp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return yp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return vp;
  }
}
function bp(s, t) {
  s.uniform1fv(this.addr, t);
}
function wp(s, t) {
  const e = bi(t, this.size, 2);
  s.uniform2fv(this.addr, e);
}
function Sp(s, t) {
  const e = bi(t, this.size, 3);
  s.uniform3fv(this.addr, e);
}
function Ep(s, t) {
  const e = bi(t, this.size, 4);
  s.uniform4fv(this.addr, e);
}
function Tp(s, t) {
  const e = bi(t, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, e);
}
function Ap(s, t) {
  const e = bi(t, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, e);
}
function Cp(s, t) {
  const e = bi(t, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, e);
}
function Lp(s, t) {
  s.uniform1iv(this.addr, t);
}
function Rp(s, t) {
  s.uniform2iv(this.addr, t);
}
function Pp(s, t) {
  s.uniform3iv(this.addr, t);
}
function Dp(s, t) {
  s.uniform4iv(this.addr, t);
}
function Ip(s, t) {
  s.uniform1uiv(this.addr, t);
}
function Fp(s, t) {
  s.uniform2uiv(this.addr, t);
}
function Np(s, t) {
  s.uniform3uiv(this.addr, t);
}
function Bp(s, t) {
  s.uniform4uiv(this.addr, t);
}
function zp(s, t, e) {
  const n = t.length,
    i = ns(e, n);
  s.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r) e.setTexture2D(t[r] || Nl, i[r]);
}
function Op(s, t, e) {
  const n = t.length,
    i = ns(e, n);
  s.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r) e.setTexture3D(t[r] || zl, i[r]);
}
function Up(s, t, e) {
  const n = t.length,
    i = ns(e, n);
  s.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r) e.setTextureCube(t[r] || Ol, i[r]);
}
function Hp(s, t, e) {
  const n = t.length,
    i = ns(e, n);
  s.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r) e.setTexture2DArray(t[r] || Bl, i[r]);
}
function Vp(s) {
  switch (s) {
    case 5126:
      return bp;
    case 35664:
      return wp;
    case 35665:
      return Sp;
    case 35666:
      return Ep;
    case 35674:
      return Tp;
    case 35675:
      return Ap;
    case 35676:
      return Cp;
    case 5124:
    case 35670:
      return Lp;
    case 35667:
    case 35671:
      return Rp;
    case 35668:
    case 35672:
      return Pp;
    case 35669:
    case 35673:
      return Dp;
    case 5125:
      return Ip;
    case 36294:
      return Fp;
    case 36295:
      return Np;
    case 36296:
      return Bp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return zp;
    case 35679:
    case 36299:
    case 36307:
      return Op;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Up;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Hp;
  }
}
function kp(s, t, e) {
  (this.id = s),
    (this.addr = e),
    (this.cache = []),
    (this.setValue = Mp(t.type));
}
function Gp(s, t, e) {
  (this.id = s),
    (this.addr = e),
    (this.cache = []),
    (this.size = t.size),
    (this.setValue = Vp(t.type));
}
function Ul(s) {
  (this.id = s), (this.seq = []), (this.map = {});
}
Ul.prototype.setValue = function (s, t, e) {
  const n = this.seq;
  for (let i = 0, r = n.length; i !== r; ++i) {
    const o = n[i];
    o.setValue(s, t[o.id], e);
  }
};
const Hs = /(\w+)(\])?(\[|\.)?/g;
function Ua(s, t) {
  s.seq.push(t), (s.map[t.id] = t);
}
function Wp(s, t, e) {
  const n = s.name,
    i = n.length;
  for (Hs.lastIndex = 0; ; ) {
    const r = Hs.exec(n),
      o = Hs.lastIndex;
    let a = r[1];
    const l = r[2] === "]",
      c = r[3];
    if ((l && (a = a | 0), c === void 0 || (c === "[" && o + 2 === i))) {
      Ua(e, c === void 0 ? new kp(a, s, t) : new Gp(a, s, t));
      break;
    } else {
      let u = e.map[a];
      u === void 0 && ((u = new Ul(a)), Ua(e, u)), (e = u);
    }
  }
}
function dn(s, t) {
  (this.seq = []), (this.map = {});
  const e = s.getProgramParameter(t, 35718);
  for (let n = 0; n < e; ++n) {
    const i = s.getActiveUniform(t, n),
      r = s.getUniformLocation(t, i.name);
    Wp(i, r, this);
  }
}
dn.prototype.setValue = function (s, t, e, n) {
  const i = this.map[t];
  i !== void 0 && i.setValue(s, e, n);
};
dn.prototype.setOptional = function (s, t, e) {
  const n = t[e];
  n !== void 0 && this.setValue(s, e, n);
};
dn.upload = function (s, t, e, n) {
  for (let i = 0, r = t.length; i !== r; ++i) {
    const o = t[i],
      a = e[o.id];
    a.needsUpdate !== !1 && o.setValue(s, a.value, n);
  }
};
dn.seqWithValue = function (s, t) {
  const e = [];
  for (let n = 0, i = s.length; n !== i; ++n) {
    const r = s[n];
    r.id in t && e.push(r);
  }
  return e;
};
function Ha(s, t, e) {
  const n = s.createShader(t);
  return s.shaderSource(n, e), s.compileShader(n), n;
}
let qp = 0;
function Xp(s, t) {
  const e = s.split(`
`),
    n = [],
    i = Math.max(t - 6, 0),
    r = Math.min(t + 6, e.length);
  for (let o = i; o < r; o++) n.push(o + 1 + ": " + e[o]);
  return n.join(`
`);
}
function jp(s) {
  switch (s) {
    case pn:
      return ["Linear", "( value )"];
    case Zt:
      return ["sRGB", "( value )"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported encoding:", s),
        ["Linear", "( value )"]
      );
  }
}
function Va(s, t, e) {
  const n = s.getShaderParameter(t, 35713),
    i = s.getShaderInfoLog(t).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const o = parseInt(r[0]);
    return (
      e.toUpperCase() +
      `

` +
      i +
      `

` +
      Xp(s.getShaderSource(t), o)
    );
  } else return i;
}
function Yp(s, t) {
  const e = jp(t);
  return "vec4 " + s + "( vec4 value ) { return LinearTo" + e[0] + e[1] + "; }";
}
function Zp(s, t) {
  let e;
  switch (t) {
    case Kc:
      e = "Linear";
      break;
    case Qc:
      e = "Reinhard";
      break;
    case th:
      e = "OptimizedCineon";
      break;
    case eh:
      e = "ACESFilmic";
      break;
    case nh:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t),
        (e = "Linear");
  }
  return (
    "vec3 " + s + "( vec3 color ) { return " + e + "ToneMapping( color ); }"
  );
}
function Jp(s) {
  return [
    s.extensionDerivatives ||
    !!s.envMapCubeUVHeight ||
    s.bumpMap ||
    s.tangentSpaceNormalMap ||
    s.clearcoatNormalMap ||
    s.flatShading ||
    s.shaderID === "physical"
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (s.extensionFragDepth || s.logarithmicDepthBuffer) &&
    s.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    s.extensionDrawBuffers && s.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (s.extensionShaderTextureLOD || s.envMap || s.transmission) &&
    s.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ].filter(Oi).join(`
`);
}
function $p(s) {
  const t = [];
  for (const e in s) {
    const n = s[e];
    n !== !1 && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function Kp(s, t) {
  const e = {},
    n = s.getProgramParameter(t, 35721);
  for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(t, i),
      o = r.name;
    let a = 1;
    r.type === 35674 && (a = 2),
      r.type === 35675 && (a = 3),
      r.type === 35676 && (a = 4),
      (e[o] = {
        type: r.type,
        location: s.getAttribLocation(t, o),
        locationSize: a,
      });
  }
  return e;
}
function Oi(s) {
  return s !== "";
}
function ka(s, t) {
  return s
    .replace(/NUM_DIR_LIGHTS/g, t.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights)
    .replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, t.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Ga(s, t) {
  return s
    .replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      t.numClippingPlanes - t.numClipIntersection
    );
}
const Qp = /^[ \t]*#include +<([\w\d./]+)>/gm;
function io(s) {
  return s.replace(Qp, tm);
}
function tm(s, t) {
  const e = Ft[t];
  if (e === void 0) throw new Error("Can not resolve #include <" + t + ">");
  return io(e);
}
const em =
    /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
  nm =
    /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Wa(s) {
  return s.replace(nm, Hl).replace(em, im);
}
function im(s, t, e, n) {
  return (
    console.warn(
      "WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."
    ),
    Hl(s, t, e, n)
  );
}
function Hl(s, t, e, n) {
  let i = "";
  for (let r = parseInt(t); r < parseInt(e); r++)
    i += n
      .replace(/\[\s*i\s*\]/g, "[ " + r + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function qa(s) {
  let t =
    "precision " +
    s.precision +
    ` float;
precision ` +
    s.precision +
    " int;";
  return (
    s.precision === "highp"
      ? (t += `
#define HIGH_PRECISION`)
      : s.precision === "mediump"
      ? (t += `
#define MEDIUM_PRECISION`)
      : s.precision === "lowp" &&
        (t += `
#define LOW_PRECISION`),
    t
  );
}
function rm(s) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return (
    s.shadowMapType === bl
      ? (t = "SHADOWMAP_TYPE_PCF")
      : s.shadowMapType === Rc
      ? (t = "SHADOWMAP_TYPE_PCF_SOFT")
      : s.shadowMapType === zi && (t = "SHADOWMAP_TYPE_VSM"),
    t
  );
}
function sm(s) {
  let t = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case di:
      case fi:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case $r:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return t;
}
function om(s) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case fi:
        t = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return t;
}
function am(s) {
  let t = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case Jr:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Jc:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case $c:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function lm(s) {
  const t = s.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2,
    n = 1 / t;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)),
    texelHeight: n,
    maxMip: e,
  };
}
function cm(s, t, e, n) {
  const i = s.getContext(),
    r = e.defines;
  let o = e.vertexShader,
    a = e.fragmentShader;
  const l = rm(e),
    c = sm(e),
    h = om(e),
    u = am(e),
    d = lm(e),
    p = e.isWebGL2 ? "" : Jp(e),
    g = $p(r),
    m = i.createProgram();
  let f,
    _,
    w = e.glslVersion
      ? "#version " +
        e.glslVersion +
        `
`
      : "";
  e.isRawShaderMaterial
    ? ((f = [g].filter(Oi).join(`
`)),
      f.length > 0 &&
        (f += `
`),
      (_ = [p, g].filter(Oi).join(`
`)),
      _.length > 0 &&
        (_ += `
`))
    : ((f = [
        qa(e),
        "#define SHADER_NAME " + e.shaderName,
        g,
        e.instancing ? "#define USE_INSTANCING" : "",
        e.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        e.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
        e.useFog && e.fog ? "#define USE_FOG" : "",
        e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
        e.map ? "#define USE_MAP" : "",
        e.envMap ? "#define USE_ENVMAP" : "",
        e.envMap ? "#define " + h : "",
        e.lightMap ? "#define USE_LIGHTMAP" : "",
        e.aoMap ? "#define USE_AOMAP" : "",
        e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        e.bumpMap ? "#define USE_BUMPMAP" : "",
        e.normalMap ? "#define USE_NORMALMAP" : "",
        e.normalMap && e.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        e.normalMap && e.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        e.displacementMap && e.supportsVertexTextures
          ? "#define USE_DISPLACEMENTMAP"
          : "",
        e.specularMap ? "#define USE_SPECULARMAP" : "",
        e.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        e.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        e.metalnessMap ? "#define USE_METALNESSMAP" : "",
        e.alphaMap ? "#define USE_ALPHAMAP" : "",
        e.transmission ? "#define USE_TRANSMISSION" : "",
        e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        e.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        e.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        e.vertexTangents ? "#define USE_TANGENT" : "",
        e.vertexColors ? "#define USE_COLOR" : "",
        e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        e.vertexUvs ? "#define USE_UV" : "",
        e.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        e.flatShading ? "#define FLAT_SHADED" : "",
        e.skinning ? "#define USE_SKINNING" : "",
        e.morphTargets ? "#define USE_MORPHTARGETS" : "",
        e.morphNormals && e.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        e.morphColors && e.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        e.morphTargetsCount > 0 && e.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE"
          : "",
        e.morphTargetsCount > 0 && e.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride
          : "",
        e.morphTargetsCount > 0 && e.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount
          : "",
        e.doubleSided ? "#define DOUBLE_SIDED" : "",
        e.flipSided ? "#define FLIP_SIDED" : "",
        e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        e.shadowMapEnabled ? "#define " + l : "",
        e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        e.logarithmicDepthBuffer && e.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(Oi).join(`
`)),
      (_ = [
        p,
        qa(e),
        "#define SHADER_NAME " + e.shaderName,
        g,
        e.useFog && e.fog ? "#define USE_FOG" : "",
        e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
        e.map ? "#define USE_MAP" : "",
        e.matcap ? "#define USE_MATCAP" : "",
        e.envMap ? "#define USE_ENVMAP" : "",
        e.envMap ? "#define " + c : "",
        e.envMap ? "#define " + h : "",
        e.envMap ? "#define " + u : "",
        d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
        d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
        d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
        e.lightMap ? "#define USE_LIGHTMAP" : "",
        e.aoMap ? "#define USE_AOMAP" : "",
        e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        e.bumpMap ? "#define USE_BUMPMAP" : "",
        e.normalMap ? "#define USE_NORMALMAP" : "",
        e.normalMap && e.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        e.normalMap && e.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        e.clearcoat ? "#define USE_CLEARCOAT" : "",
        e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        e.specularMap ? "#define USE_SPECULARMAP" : "",
        e.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        e.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        e.metalnessMap ? "#define USE_METALNESSMAP" : "",
        e.alphaMap ? "#define USE_ALPHAMAP" : "",
        e.alphaTest ? "#define USE_ALPHATEST" : "",
        e.sheen ? "#define USE_SHEEN" : "",
        e.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        e.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        e.transmission ? "#define USE_TRANSMISSION" : "",
        e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        e.vertexTangents ? "#define USE_TANGENT" : "",
        e.vertexColors || e.instancingColor ? "#define USE_COLOR" : "",
        e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        e.vertexUvs ? "#define USE_UV" : "",
        e.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        e.gradientMap ? "#define USE_GRADIENTMAP" : "",
        e.flatShading ? "#define FLAT_SHADED" : "",
        e.doubleSided ? "#define DOUBLE_SIDED" : "",
        e.flipSided ? "#define FLIP_SIDED" : "",
        e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        e.shadowMapEnabled ? "#define " + l : "",
        e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        e.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
        e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        e.logarithmicDepthBuffer && e.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        e.toneMapping !== tn ? "#define TONE_MAPPING" : "",
        e.toneMapping !== tn ? Ft.tonemapping_pars_fragment : "",
        e.toneMapping !== tn ? Zp("toneMapping", e.toneMapping) : "",
        e.dithering ? "#define DITHERING" : "",
        e.opaque ? "#define OPAQUE" : "",
        Ft.encodings_pars_fragment,
        Yp("linearToOutputTexel", e.outputEncoding),
        e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
        `
`,
      ].filter(Oi).join(`
`))),
    (o = io(o)),
    (o = ka(o, e)),
    (o = Ga(o, e)),
    (a = io(a)),
    (a = ka(a, e)),
    (a = Ga(a, e)),
    (o = Wa(o)),
    (a = Wa(a)),
    e.isWebGL2 &&
      e.isRawShaderMaterial !== !0 &&
      ((w = `#version 300 es
`),
      (f =
        [
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        f),
      (_ =
        [
          "#define varying in",
          e.glslVersion === pa
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          e.glslVersion === pa ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        _));
  const C = w + f + o,
    T = w + _ + a,
    y = Ha(i, 35633, C),
    L = Ha(i, 35632, T);
  if (
    (i.attachShader(m, y),
    i.attachShader(m, L),
    e.index0AttributeName !== void 0
      ? i.bindAttribLocation(m, 0, e.index0AttributeName)
      : e.morphTargets === !0 && i.bindAttribLocation(m, 0, "position"),
    i.linkProgram(m),
    s.debug.checkShaderErrors)
  ) {
    const R = i.getProgramInfoLog(m).trim(),
      B = i.getShaderInfoLog(y).trim(),
      F = i.getShaderInfoLog(L).trim();
    let ut = !0,
      K = !0;
    if (i.getProgramParameter(m, 35714) === !1) {
      ut = !1;
      const P = Va(i, y, "vertex"),
        k = Va(i, L, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " +
          i.getError() +
          " - VALIDATE_STATUS " +
          i.getProgramParameter(m, 35715) +
          `

Program Info Log: ` +
          R +
          `
` +
          P +
          `
` +
          k
      );
    } else
      R !== ""
        ? console.warn("THREE.WebGLProgram: Program Info Log:", R)
        : (B === "" || F === "") && (K = !1);
    K &&
      (this.diagnostics = {
        runnable: ut,
        programLog: R,
        vertexShader: { log: B, prefix: f },
        fragmentShader: { log: F, prefix: _ },
      });
  }
  i.deleteShader(y), i.deleteShader(L);
  let I;
  this.getUniforms = function () {
    return I === void 0 && (I = new dn(i, m)), I;
  };
  let v;
  return (
    (this.getAttributes = function () {
      return v === void 0 && (v = Kp(i, m)), v;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(m),
        (this.program = void 0);
    }),
    (this.name = e.shaderName),
    (this.id = qp++),
    (this.cacheKey = t),
    (this.usedTimes = 1),
    (this.program = m),
    (this.vertexShader = y),
    (this.fragmentShader = L),
    this
  );
}
let hm = 0;
class um {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(t) {
    const e = t.vertexShader,
      n = t.fragmentShader,
      i = this._getShaderStage(e),
      r = this._getShaderStage(n),
      o = this._getShaderCacheForMaterial(t);
    return (
      o.has(i) === !1 && (o.add(i), i.usedTimes++),
      o.has(r) === !1 && (o.add(r), r.usedTimes++),
      this
    );
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const n of e)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(t), this;
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache;
    return e.has(t) === !1 && e.set(t, new Set()), e.get(t);
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    if (e.has(t) === !1) {
      const n = new dm(t);
      e.set(t, n);
    }
    return e.get(t);
  }
}
class dm {
  constructor(t) {
    (this.id = hm++), (this.code = t), (this.usedTimes = 0);
  }
}
function fm(s, t, e, n, i, r, o) {
  const a = new Rl(),
    l = new um(),
    c = [],
    h = i.isWebGL2,
    u = i.logarithmicDepthBuffer,
    d = i.vertexTextures;
  let p = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function m(v, R, B, F, ut) {
    const K = F.fog,
      P = ut.geometry,
      k = v.isMeshStandardMaterial ? F.environment : null,
      z = (v.isMeshStandardMaterial ? e : t).get(v.envMap || k),
      G = !!z && z.mapping === $r ? z.image.height : null,
      X = g[v.type];
    v.precision !== null &&
      ((p = i.getMaxPrecision(v.precision)),
      p !== v.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          v.precision,
          "not supported, using",
          p,
          "instead."
        ));
    const H =
        P.morphAttributes.position ||
        P.morphAttributes.normal ||
        P.morphAttributes.color,
      W = H !== void 0 ? H.length : 0;
    let Q = 0;
    P.morphAttributes.position !== void 0 && (Q = 1),
      P.morphAttributes.normal !== void 0 && (Q = 2),
      P.morphAttributes.color !== void 0 && (Q = 3);
    let J, et, mt, yt;
    if (X) {
      const rt = Ge[X];
      (J = rt.vertexShader), (et = rt.fragmentShader);
    } else
      (J = v.vertexShader),
        (et = v.fragmentShader),
        l.update(v),
        (mt = l.getVertexShaderID(v)),
        (yt = l.getFragmentShaderID(v));
    const V = s.getRenderTarget(),
      zt = v.alphaTest > 0,
      Et = v.clearcoat > 0;
    return {
      isWebGL2: h,
      shaderID: X,
      shaderName: v.type,
      vertexShader: J,
      fragmentShader: et,
      defines: v.defines,
      customVertexShaderID: mt,
      customFragmentShaderID: yt,
      isRawShaderMaterial: v.isRawShaderMaterial === !0,
      glslVersion: v.glslVersion,
      precision: p,
      instancing: ut.isInstancedMesh === !0,
      instancingColor: ut.isInstancedMesh === !0 && ut.instanceColor !== null,
      supportsVertexTextures: d,
      outputEncoding:
        V === null
          ? s.outputEncoding
          : V.isXRRenderTarget === !0
          ? V.texture.encoding
          : pn,
      map: !!v.map,
      matcap: !!v.matcap,
      envMap: !!z,
      envMapMode: z && z.mapping,
      envMapCubeUVHeight: G,
      lightMap: !!v.lightMap,
      aoMap: !!v.aoMap,
      emissiveMap: !!v.emissiveMap,
      bumpMap: !!v.bumpMap,
      normalMap: !!v.normalMap,
      objectSpaceNormalMap: v.normalMapType === Eh,
      tangentSpaceNormalMap: v.normalMapType === _i,
      decodeVideoTexture:
        !!v.map && v.map.isVideoTexture === !0 && v.map.encoding === Zt,
      clearcoat: Et,
      clearcoatMap: Et && !!v.clearcoatMap,
      clearcoatRoughnessMap: Et && !!v.clearcoatRoughnessMap,
      clearcoatNormalMap: Et && !!v.clearcoatNormalMap,
      displacementMap: !!v.displacementMap,
      roughnessMap: !!v.roughnessMap,
      metalnessMap: !!v.metalnessMap,
      specularMap: !!v.specularMap,
      specularIntensityMap: !!v.specularIntensityMap,
      specularColorMap: !!v.specularColorMap,
      opaque: v.transparent === !1 && v.blending === li,
      alphaMap: !!v.alphaMap,
      alphaTest: zt,
      gradientMap: !!v.gradientMap,
      sheen: v.sheen > 0,
      sheenColorMap: !!v.sheenColorMap,
      sheenRoughnessMap: !!v.sheenRoughnessMap,
      transmission: v.transmission > 0,
      transmissionMap: !!v.transmissionMap,
      thicknessMap: !!v.thicknessMap,
      combine: v.combine,
      vertexTangents: !!v.normalMap && !!P.attributes.tangent,
      vertexColors: v.vertexColors,
      vertexAlphas:
        v.vertexColors === !0 &&
        !!P.attributes.color &&
        P.attributes.color.itemSize === 4,
      vertexUvs:
        !!v.map ||
        !!v.bumpMap ||
        !!v.normalMap ||
        !!v.specularMap ||
        !!v.alphaMap ||
        !!v.emissiveMap ||
        !!v.roughnessMap ||
        !!v.metalnessMap ||
        !!v.clearcoatMap ||
        !!v.clearcoatRoughnessMap ||
        !!v.clearcoatNormalMap ||
        !!v.displacementMap ||
        !!v.transmissionMap ||
        !!v.thicknessMap ||
        !!v.specularIntensityMap ||
        !!v.specularColorMap ||
        !!v.sheenColorMap ||
        !!v.sheenRoughnessMap,
      uvsVertexOnly:
        !(
          !!v.map ||
          !!v.bumpMap ||
          !!v.normalMap ||
          !!v.specularMap ||
          !!v.alphaMap ||
          !!v.emissiveMap ||
          !!v.roughnessMap ||
          !!v.metalnessMap ||
          !!v.clearcoatNormalMap ||
          v.transmission > 0 ||
          !!v.transmissionMap ||
          !!v.thicknessMap ||
          !!v.specularIntensityMap ||
          !!v.specularColorMap ||
          v.sheen > 0 ||
          !!v.sheenColorMap ||
          !!v.sheenRoughnessMap
        ) && !!v.displacementMap,
      fog: !!K,
      useFog: v.fog === !0,
      fogExp2: K && K.isFogExp2,
      flatShading: !!v.flatShading,
      sizeAttenuation: v.sizeAttenuation,
      logarithmicDepthBuffer: u,
      skinning: ut.isSkinnedMesh === !0,
      morphTargets: P.morphAttributes.position !== void 0,
      morphNormals: P.morphAttributes.normal !== void 0,
      morphColors: P.morphAttributes.color !== void 0,
      morphTargetsCount: W,
      morphTextureStride: Q,
      numDirLights: R.directional.length,
      numPointLights: R.point.length,
      numSpotLights: R.spot.length,
      numRectAreaLights: R.rectArea.length,
      numHemiLights: R.hemi.length,
      numDirLightShadows: R.directionalShadowMap.length,
      numPointLightShadows: R.pointShadowMap.length,
      numSpotLightShadows: R.spotShadowMap.length,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: v.dithering,
      shadowMapEnabled: s.shadowMap.enabled && B.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: v.toneMapped ? s.toneMapping : tn,
      physicallyCorrectLights: s.physicallyCorrectLights,
      premultipliedAlpha: v.premultipliedAlpha,
      doubleSided: v.side === ui,
      flipSided: v.side === De,
      useDepthPacking: !!v.depthPacking,
      depthPacking: v.depthPacking || 0,
      index0AttributeName: v.index0AttributeName,
      extensionDerivatives: v.extensions && v.extensions.derivatives,
      extensionFragDepth: v.extensions && v.extensions.fragDepth,
      extensionDrawBuffers: v.extensions && v.extensions.drawBuffers,
      extensionShaderTextureLOD: v.extensions && v.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: v.customProgramCacheKey(),
    };
  }
  function f(v) {
    const R = [];
    if (
      (v.shaderID
        ? R.push(v.shaderID)
        : (R.push(v.customVertexShaderID), R.push(v.customFragmentShaderID)),
      v.defines !== void 0)
    )
      for (const B in v.defines) R.push(B), R.push(v.defines[B]);
    return (
      v.isRawShaderMaterial === !1 &&
        (_(R, v), w(R, v), R.push(s.outputEncoding)),
      R.push(v.customProgramCacheKey),
      R.join()
    );
  }
  function _(v, R) {
    v.push(R.precision),
      v.push(R.outputEncoding),
      v.push(R.envMapMode),
      v.push(R.envMapCubeUVHeight),
      v.push(R.combine),
      v.push(R.vertexUvs),
      v.push(R.fogExp2),
      v.push(R.sizeAttenuation),
      v.push(R.morphTargetsCount),
      v.push(R.morphAttributeCount),
      v.push(R.numDirLights),
      v.push(R.numPointLights),
      v.push(R.numSpotLights),
      v.push(R.numHemiLights),
      v.push(R.numRectAreaLights),
      v.push(R.numDirLightShadows),
      v.push(R.numPointLightShadows),
      v.push(R.numSpotLightShadows),
      v.push(R.shadowMapType),
      v.push(R.toneMapping),
      v.push(R.numClippingPlanes),
      v.push(R.numClipIntersection),
      v.push(R.depthPacking);
  }
  function w(v, R) {
    a.disableAll(),
      R.isWebGL2 && a.enable(0),
      R.supportsVertexTextures && a.enable(1),
      R.instancing && a.enable(2),
      R.instancingColor && a.enable(3),
      R.map && a.enable(4),
      R.matcap && a.enable(5),
      R.envMap && a.enable(6),
      R.lightMap && a.enable(7),
      R.aoMap && a.enable(8),
      R.emissiveMap && a.enable(9),
      R.bumpMap && a.enable(10),
      R.normalMap && a.enable(11),
      R.objectSpaceNormalMap && a.enable(12),
      R.tangentSpaceNormalMap && a.enable(13),
      R.clearcoat && a.enable(14),
      R.clearcoatMap && a.enable(15),
      R.clearcoatRoughnessMap && a.enable(16),
      R.clearcoatNormalMap && a.enable(17),
      R.displacementMap && a.enable(18),
      R.specularMap && a.enable(19),
      R.roughnessMap && a.enable(20),
      R.metalnessMap && a.enable(21),
      R.gradientMap && a.enable(22),
      R.alphaMap && a.enable(23),
      R.alphaTest && a.enable(24),
      R.vertexColors && a.enable(25),
      R.vertexAlphas && a.enable(26),
      R.vertexUvs && a.enable(27),
      R.vertexTangents && a.enable(28),
      R.uvsVertexOnly && a.enable(29),
      R.fog && a.enable(30),
      v.push(a.mask),
      a.disableAll(),
      R.useFog && a.enable(0),
      R.flatShading && a.enable(1),
      R.logarithmicDepthBuffer && a.enable(2),
      R.skinning && a.enable(3),
      R.morphTargets && a.enable(4),
      R.morphNormals && a.enable(5),
      R.morphColors && a.enable(6),
      R.premultipliedAlpha && a.enable(7),
      R.shadowMapEnabled && a.enable(8),
      R.physicallyCorrectLights && a.enable(9),
      R.doubleSided && a.enable(10),
      R.flipSided && a.enable(11),
      R.useDepthPacking && a.enable(12),
      R.dithering && a.enable(13),
      R.specularIntensityMap && a.enable(14),
      R.specularColorMap && a.enable(15),
      R.transmission && a.enable(16),
      R.transmissionMap && a.enable(17),
      R.thicknessMap && a.enable(18),
      R.sheen && a.enable(19),
      R.sheenColorMap && a.enable(20),
      R.sheenRoughnessMap && a.enable(21),
      R.decodeVideoTexture && a.enable(22),
      R.opaque && a.enable(23),
      v.push(a.mask);
  }
  function C(v) {
    const R = g[v.type];
    let B;
    if (R) {
      const F = Ge[R];
      B = su.clone(F.uniforms);
    } else B = v.uniforms;
    return B;
  }
  function T(v, R) {
    let B;
    for (let F = 0, ut = c.length; F < ut; F++) {
      const K = c[F];
      if (K.cacheKey === R) {
        (B = K), ++B.usedTimes;
        break;
      }
    }
    return B === void 0 && ((B = new cm(s, R, v, r)), c.push(B)), B;
  }
  function y(v) {
    if (--v.usedTimes === 0) {
      const R = c.indexOf(v);
      (c[R] = c[c.length - 1]), c.pop(), v.destroy();
    }
  }
  function L(v) {
    l.remove(v);
  }
  function I() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: f,
    getUniforms: C,
    acquireProgram: T,
    releaseProgram: y,
    releaseShaderCache: L,
    programs: c,
    dispose: I,
  };
}
function pm() {
  let s = new WeakMap();
  function t(r) {
    let o = s.get(r);
    return o === void 0 && ((o = {}), s.set(r, o)), o;
  }
  function e(r) {
    s.delete(r);
  }
  function n(r, o, a) {
    s.get(r)[o] = a;
  }
  function i() {
    s = new WeakMap();
  }
  return { get: t, remove: e, update: n, dispose: i };
}
function mm(s, t) {
  return s.groupOrder !== t.groupOrder
    ? s.groupOrder - t.groupOrder
    : s.renderOrder !== t.renderOrder
    ? s.renderOrder - t.renderOrder
    : s.material.id !== t.material.id
    ? s.material.id - t.material.id
    : s.z !== t.z
    ? s.z - t.z
    : s.id - t.id;
}
function Xa(s, t) {
  return s.groupOrder !== t.groupOrder
    ? s.groupOrder - t.groupOrder
    : s.renderOrder !== t.renderOrder
    ? s.renderOrder - t.renderOrder
    : s.z !== t.z
    ? t.z - s.z
    : s.id - t.id;
}
function ja() {
  const s = [];
  let t = 0;
  const e = [],
    n = [],
    i = [];
  function r() {
    (t = 0), (e.length = 0), (n.length = 0), (i.length = 0);
  }
  function o(u, d, p, g, m, f) {
    let _ = s[t];
    return (
      _ === void 0
        ? ((_ = {
            id: u.id,
            object: u,
            geometry: d,
            material: p,
            groupOrder: g,
            renderOrder: u.renderOrder,
            z: m,
            group: f,
          }),
          (s[t] = _))
        : ((_.id = u.id),
          (_.object = u),
          (_.geometry = d),
          (_.material = p),
          (_.groupOrder = g),
          (_.renderOrder = u.renderOrder),
          (_.z = m),
          (_.group = f)),
      t++,
      _
    );
  }
  function a(u, d, p, g, m, f) {
    const _ = o(u, d, p, g, m, f);
    p.transmission > 0
      ? n.push(_)
      : p.transparent === !0
      ? i.push(_)
      : e.push(_);
  }
  function l(u, d, p, g, m, f) {
    const _ = o(u, d, p, g, m, f);
    p.transmission > 0
      ? n.unshift(_)
      : p.transparent === !0
      ? i.unshift(_)
      : e.unshift(_);
  }
  function c(u, d) {
    e.length > 1 && e.sort(u || mm),
      n.length > 1 && n.sort(d || Xa),
      i.length > 1 && i.sort(d || Xa);
  }
  function h() {
    for (let u = t, d = s.length; u < d; u++) {
      const p = s[u];
      if (p.id === null) break;
      (p.id = null),
        (p.object = null),
        (p.geometry = null),
        (p.material = null),
        (p.group = null);
    }
  }
  return {
    opaque: e,
    transmissive: n,
    transparent: i,
    init: r,
    push: a,
    unshift: l,
    finish: h,
    sort: c,
  };
}
function gm() {
  let s = new WeakMap();
  function t(n, i) {
    let r;
    return (
      s.has(n) === !1
        ? ((r = new ja()), s.set(n, [r]))
        : i >= s.get(n).length
        ? ((r = new ja()), s.get(n).push(r))
        : (r = s.get(n)[i]),
      r
    );
  }
  function e() {
    s = new WeakMap();
  }
  return { get: t, dispose: e };
}
function _m() {
  const s = {};
  return {
    get: function (t) {
      if (s[t.id] !== void 0) return s[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = { direction: new E(), color: new xt() };
          break;
        case "SpotLight":
          e = {
            position: new E(),
            direction: new E(),
            color: new xt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          e = { position: new E(), color: new xt(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          e = { direction: new E(), skyColor: new xt(), groundColor: new xt() };
          break;
        case "RectAreaLight":
          e = {
            color: new xt(),
            position: new E(),
            halfWidth: new E(),
            halfHeight: new E(),
          };
          break;
      }
      return (s[t.id] = e), e;
    },
  };
}
function xm() {
  const s = {};
  return {
    get: function (t) {
      if (s[t.id] !== void 0) return s[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Z(),
          };
          break;
        case "SpotLight":
          e = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Z(),
          };
          break;
        case "PointLight":
          e = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Z(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (s[t.id] = e), e;
    },
  };
}
let ym = 0;
function vm(s, t) {
  return (t.castShadow ? 1 : 0) - (s.castShadow ? 1 : 0);
}
function Mm(s, t) {
  const e = new _m(),
    n = xm(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadow: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
    };
  for (let h = 0; h < 9; h++) i.probe.push(new E());
  const r = new E(),
    o = new bt(),
    a = new bt();
  function l(h, u) {
    let d = 0,
      p = 0,
      g = 0;
    for (let R = 0; R < 9; R++) i.probe[R].set(0, 0, 0);
    let m = 0,
      f = 0,
      _ = 0,
      w = 0,
      C = 0,
      T = 0,
      y = 0,
      L = 0;
    h.sort(vm);
    const I = u !== !0 ? Math.PI : 1;
    for (let R = 0, B = h.length; R < B; R++) {
      const F = h[R],
        ut = F.color,
        K = F.intensity,
        P = F.distance,
        k = F.shadow && F.shadow.map ? F.shadow.map.texture : null;
      if (F.isAmbientLight)
        (d += ut.r * K * I), (p += ut.g * K * I), (g += ut.b * K * I);
      else if (F.isLightProbe)
        for (let z = 0; z < 9; z++)
          i.probe[z].addScaledVector(F.sh.coefficients[z], K);
      else if (F.isDirectionalLight) {
        const z = e.get(F);
        if (
          (z.color.copy(F.color).multiplyScalar(F.intensity * I), F.castShadow)
        ) {
          const G = F.shadow,
            X = n.get(F);
          (X.shadowBias = G.bias),
            (X.shadowNormalBias = G.normalBias),
            (X.shadowRadius = G.radius),
            (X.shadowMapSize = G.mapSize),
            (i.directionalShadow[m] = X),
            (i.directionalShadowMap[m] = k),
            (i.directionalShadowMatrix[m] = F.shadow.matrix),
            T++;
        }
        (i.directional[m] = z), m++;
      } else if (F.isSpotLight) {
        const z = e.get(F);
        if (
          (z.position.setFromMatrixPosition(F.matrixWorld),
          z.color.copy(ut).multiplyScalar(K * I),
          (z.distance = P),
          (z.coneCos = Math.cos(F.angle)),
          (z.penumbraCos = Math.cos(F.angle * (1 - F.penumbra))),
          (z.decay = F.decay),
          F.castShadow)
        ) {
          const G = F.shadow,
            X = n.get(F);
          (X.shadowBias = G.bias),
            (X.shadowNormalBias = G.normalBias),
            (X.shadowRadius = G.radius),
            (X.shadowMapSize = G.mapSize),
            (i.spotShadow[_] = X),
            (i.spotShadowMap[_] = k),
            (i.spotShadowMatrix[_] = F.shadow.matrix),
            L++;
        }
        (i.spot[_] = z), _++;
      } else if (F.isRectAreaLight) {
        const z = e.get(F);
        z.color.copy(ut).multiplyScalar(K),
          z.halfWidth.set(F.width * 0.5, 0, 0),
          z.halfHeight.set(0, F.height * 0.5, 0),
          (i.rectArea[w] = z),
          w++;
      } else if (F.isPointLight) {
        const z = e.get(F);
        if (
          (z.color.copy(F.color).multiplyScalar(F.intensity * I),
          (z.distance = F.distance),
          (z.decay = F.decay),
          F.castShadow)
        ) {
          const G = F.shadow,
            X = n.get(F);
          (X.shadowBias = G.bias),
            (X.shadowNormalBias = G.normalBias),
            (X.shadowRadius = G.radius),
            (X.shadowMapSize = G.mapSize),
            (X.shadowCameraNear = G.camera.near),
            (X.shadowCameraFar = G.camera.far),
            (i.pointShadow[f] = X),
            (i.pointShadowMap[f] = k),
            (i.pointShadowMatrix[f] = F.shadow.matrix),
            y++;
        }
        (i.point[f] = z), f++;
      } else if (F.isHemisphereLight) {
        const z = e.get(F);
        z.skyColor.copy(F.color).multiplyScalar(K * I),
          z.groundColor.copy(F.groundColor).multiplyScalar(K * I),
          (i.hemi[C] = z),
          C++;
      }
    }
    w > 0 &&
      (t.isWebGL2 || s.has("OES_texture_float_linear") === !0
        ? ((i.rectAreaLTC1 = ht.LTC_FLOAT_1), (i.rectAreaLTC2 = ht.LTC_FLOAT_2))
        : s.has("OES_texture_half_float_linear") === !0
        ? ((i.rectAreaLTC1 = ht.LTC_HALF_1), (i.rectAreaLTC2 = ht.LTC_HALF_2))
        : console.error(
            "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
          )),
      (i.ambient[0] = d),
      (i.ambient[1] = p),
      (i.ambient[2] = g);
    const v = i.hash;
    (v.directionalLength !== m ||
      v.pointLength !== f ||
      v.spotLength !== _ ||
      v.rectAreaLength !== w ||
      v.hemiLength !== C ||
      v.numDirectionalShadows !== T ||
      v.numPointShadows !== y ||
      v.numSpotShadows !== L) &&
      ((i.directional.length = m),
      (i.spot.length = _),
      (i.rectArea.length = w),
      (i.point.length = f),
      (i.hemi.length = C),
      (i.directionalShadow.length = T),
      (i.directionalShadowMap.length = T),
      (i.pointShadow.length = y),
      (i.pointShadowMap.length = y),
      (i.spotShadow.length = L),
      (i.spotShadowMap.length = L),
      (i.directionalShadowMatrix.length = T),
      (i.pointShadowMatrix.length = y),
      (i.spotShadowMatrix.length = L),
      (v.directionalLength = m),
      (v.pointLength = f),
      (v.spotLength = _),
      (v.rectAreaLength = w),
      (v.hemiLength = C),
      (v.numDirectionalShadows = T),
      (v.numPointShadows = y),
      (v.numSpotShadows = L),
      (i.version = ym++));
  }
  function c(h, u) {
    let d = 0,
      p = 0,
      g = 0,
      m = 0,
      f = 0;
    const _ = u.matrixWorldInverse;
    for (let w = 0, C = h.length; w < C; w++) {
      const T = h[w];
      if (T.isDirectionalLight) {
        const y = i.directional[d];
        y.direction.setFromMatrixPosition(T.matrixWorld),
          r.setFromMatrixPosition(T.target.matrixWorld),
          y.direction.sub(r),
          y.direction.transformDirection(_),
          d++;
      } else if (T.isSpotLight) {
        const y = i.spot[g];
        y.position.setFromMatrixPosition(T.matrixWorld),
          y.position.applyMatrix4(_),
          y.direction.setFromMatrixPosition(T.matrixWorld),
          r.setFromMatrixPosition(T.target.matrixWorld),
          y.direction.sub(r),
          y.direction.transformDirection(_),
          g++;
      } else if (T.isRectAreaLight) {
        const y = i.rectArea[m];
        y.position.setFromMatrixPosition(T.matrixWorld),
          y.position.applyMatrix4(_),
          a.identity(),
          o.copy(T.matrixWorld),
          o.premultiply(_),
          a.extractRotation(o),
          y.halfWidth.set(T.width * 0.5, 0, 0),
          y.halfHeight.set(0, T.height * 0.5, 0),
          y.halfWidth.applyMatrix4(a),
          y.halfHeight.applyMatrix4(a),
          m++;
      } else if (T.isPointLight) {
        const y = i.point[p];
        y.position.setFromMatrixPosition(T.matrixWorld),
          y.position.applyMatrix4(_),
          p++;
      } else if (T.isHemisphereLight) {
        const y = i.hemi[f];
        y.direction.setFromMatrixPosition(T.matrixWorld),
          y.direction.transformDirection(_),
          f++;
      }
    }
  }
  return { setup: l, setupView: c, state: i };
}
function Ya(s, t) {
  const e = new Mm(s, t),
    n = [],
    i = [];
  function r() {
    (n.length = 0), (i.length = 0);
  }
  function o(u) {
    n.push(u);
  }
  function a(u) {
    i.push(u);
  }
  function l(u) {
    e.setup(n, u);
  }
  function c(u) {
    e.setupView(n, u);
  }
  return {
    init: r,
    state: { lightsArray: n, shadowsArray: i, lights: e },
    setupLights: l,
    setupLightsView: c,
    pushLight: o,
    pushShadow: a,
  };
}
function bm(s, t) {
  let e = new WeakMap();
  function n(r, o = 0) {
    let a;
    return (
      e.has(r) === !1
        ? ((a = new Ya(s, t)), e.set(r, [a]))
        : o >= e.get(r).length
        ? ((a = new Ya(s, t)), e.get(r).push(a))
        : (a = e.get(r)[o]),
      a
    );
  }
  function i() {
    e = new WeakMap();
  }
  return { get: n, dispose: i };
}
class Mo extends se {
  constructor(t) {
    super(),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = wh),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.depthPacking = t.depthPacking),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      this
    );
  }
}
Mo.prototype.isMeshDepthMaterial = !0;
class bo extends se {
  constructor(t) {
    super(),
      (this.type = "MeshDistanceMaterial"),
      (this.referencePosition = new E()),
      (this.nearDistance = 1),
      (this.farDistance = 1e3),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.referencePosition.copy(t.referencePosition),
      (this.nearDistance = t.nearDistance),
      (this.farDistance = t.farDistance),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      this
    );
  }
}
bo.prototype.isMeshDistanceMaterial = !0;
const wm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  Sm = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Vl(s, t, e) {
  let n = new es();
  const i = new Z(),
    r = new Z(),
    o = new jt(),
    a = new Mo({ depthPacking: Sh }),
    l = new bo(),
    c = {},
    h = e.maxTextureSize,
    u = { 0: De, 1: Wi, 2: ui },
    d = new Fe({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Z() },
        radius: { value: 4 },
      },
      vertexShader: wm,
      fragmentShader: Sm,
    }),
    p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new Yt();
  g.setAttribute(
    "position",
    new re(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const m = new ce(g, d),
    f = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = bl),
    (this.render = function (T, y, L) {
      if (
        f.enabled === !1 ||
        (f.autoUpdate === !1 && f.needsUpdate === !1) ||
        T.length === 0
      )
        return;
      const I = s.getRenderTarget(),
        v = s.getActiveCubeFace(),
        R = s.getActiveMipmapLevel(),
        B = s.state;
      B.setBlending(un),
        B.buffers.color.setClear(1, 1, 1, 1),
        B.buffers.depth.setTest(!0),
        B.setScissorTest(!1);
      for (let F = 0, ut = T.length; F < ut; F++) {
        const K = T[F],
          P = K.shadow;
        if (P === void 0) {
          console.warn("THREE.WebGLShadowMap:", K, "has no shadow.");
          continue;
        }
        if (P.autoUpdate === !1 && P.needsUpdate === !1) continue;
        i.copy(P.mapSize);
        const k = P.getFrameExtents();
        if (
          (i.multiply(k),
          r.copy(P.mapSize),
          (i.x > h || i.y > h) &&
            (i.x > h &&
              ((r.x = Math.floor(h / k.x)),
              (i.x = r.x * k.x),
              (P.mapSize.x = r.x)),
            i.y > h &&
              ((r.y = Math.floor(h / k.y)),
              (i.y = r.y * k.y),
              (P.mapSize.y = r.y))),
          P.map === null &&
            !P.isPointLightShadow &&
            this.type === zi &&
            ((P.map = new we(i.x, i.y)),
            (P.map.texture.name = K.name + ".shadowMap"),
            (P.mapPass = new we(i.x, i.y)),
            P.camera.updateProjectionMatrix()),
          P.map === null)
        ) {
          const G = { minFilter: ae, magFilter: ae, format: Pe };
          (P.map = new we(i.x, i.y, G)),
            (P.map.texture.name = K.name + ".shadowMap"),
            P.camera.updateProjectionMatrix();
        }
        s.setRenderTarget(P.map), s.clear();
        const z = P.getViewportCount();
        for (let G = 0; G < z; G++) {
          const X = P.getViewport(G);
          o.set(r.x * X.x, r.y * X.y, r.x * X.z, r.y * X.w),
            B.viewport(o),
            P.updateMatrices(K, G),
            (n = P.getFrustum()),
            C(y, L, P.camera, K, this.type);
        }
        !P.isPointLightShadow && this.type === zi && _(P, L),
          (P.needsUpdate = !1);
      }
      (f.needsUpdate = !1), s.setRenderTarget(I, v, R);
    });
  function _(T, y) {
    const L = t.update(m);
    d.defines.VSM_SAMPLES !== T.blurSamples &&
      ((d.defines.VSM_SAMPLES = T.blurSamples),
      (p.defines.VSM_SAMPLES = T.blurSamples),
      (d.needsUpdate = !0),
      (p.needsUpdate = !0)),
      (d.uniforms.shadow_pass.value = T.map.texture),
      (d.uniforms.resolution.value = T.mapSize),
      (d.uniforms.radius.value = T.radius),
      s.setRenderTarget(T.mapPass),
      s.clear(),
      s.renderBufferDirect(y, null, L, d, m, null),
      (p.uniforms.shadow_pass.value = T.mapPass.texture),
      (p.uniforms.resolution.value = T.mapSize),
      (p.uniforms.radius.value = T.radius),
      s.setRenderTarget(T.map),
      s.clear(),
      s.renderBufferDirect(y, null, L, p, m, null);
  }
  function w(T, y, L, I, v, R) {
    let B = null;
    const F =
      L.isPointLight === !0 ? T.customDistanceMaterial : T.customDepthMaterial;
    if (
      (F !== void 0 ? (B = F) : (B = L.isPointLight === !0 ? l : a),
      (s.localClippingEnabled &&
        y.clipShadows === !0 &&
        y.clippingPlanes.length !== 0) ||
        (y.displacementMap && y.displacementScale !== 0) ||
        (y.alphaMap && y.alphaTest > 0))
    ) {
      const ut = B.uuid,
        K = y.uuid;
      let P = c[ut];
      P === void 0 && ((P = {}), (c[ut] = P));
      let k = P[K];
      k === void 0 && ((k = B.clone()), (P[K] = k)), (B = k);
    }
    return (
      (B.visible = y.visible),
      (B.wireframe = y.wireframe),
      R === zi
        ? (B.side = y.shadowSide !== null ? y.shadowSide : y.side)
        : (B.side = y.shadowSide !== null ? y.shadowSide : u[y.side]),
      (B.alphaMap = y.alphaMap),
      (B.alphaTest = y.alphaTest),
      (B.clipShadows = y.clipShadows),
      (B.clippingPlanes = y.clippingPlanes),
      (B.clipIntersection = y.clipIntersection),
      (B.displacementMap = y.displacementMap),
      (B.displacementScale = y.displacementScale),
      (B.displacementBias = y.displacementBias),
      (B.wireframeLinewidth = y.wireframeLinewidth),
      (B.linewidth = y.linewidth),
      L.isPointLight === !0 &&
        B.isMeshDistanceMaterial === !0 &&
        (B.referencePosition.setFromMatrixPosition(L.matrixWorld),
        (B.nearDistance = I),
        (B.farDistance = v)),
      B
    );
  }
  function C(T, y, L, I, v) {
    if (T.visible === !1) return;
    if (
      T.layers.test(y.layers) &&
      (T.isMesh || T.isLine || T.isPoints) &&
      (T.castShadow || (T.receiveShadow && v === zi)) &&
      (!T.frustumCulled || n.intersectsObject(T))
    ) {
      T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse, T.matrixWorld);
      const F = t.update(T),
        ut = T.material;
      if (Array.isArray(ut)) {
        const K = F.groups;
        for (let P = 0, k = K.length; P < k; P++) {
          const z = K[P],
            G = ut[z.materialIndex];
          if (G && G.visible) {
            const X = w(T, G, I, L.near, L.far, v);
            s.renderBufferDirect(L, null, F, X, T, z);
          }
        }
      } else if (ut.visible) {
        const K = w(T, ut, I, L.near, L.far, v);
        s.renderBufferDirect(L, null, F, K, T, null);
      }
    }
    const B = T.children;
    for (let F = 0, ut = B.length; F < ut; F++) C(B[F], y, L, I, v);
  }
}
function Em(s, t, e) {
  const n = e.isWebGL2;
  function i() {
    let A = !1;
    const st = new jt();
    let it = null;
    const St = new jt(0, 0, 0, 0);
    return {
      setMask: function (dt) {
        it !== dt && !A && (s.colorMask(dt, dt, dt, dt), (it = dt));
      },
      setLocked: function (dt) {
        A = dt;
      },
      setClear: function (dt, _t, ot, Tt, Vt) {
        Vt === !0 && ((dt *= Tt), (_t *= Tt), (ot *= Tt)),
          st.set(dt, _t, ot, Tt),
          St.equals(st) === !1 && (s.clearColor(dt, _t, ot, Tt), St.copy(st));
      },
      reset: function () {
        (A = !1), (it = null), St.set(-1, 0, 0, 0);
      },
    };
  }
  function r() {
    let A = !1,
      st = null,
      it = null,
      St = null;
    return {
      setTest: function (dt) {
        dt ? yt(2929) : V(2929);
      },
      setMask: function (dt) {
        st !== dt && !A && (s.depthMask(dt), (st = dt));
      },
      setFunc: function (dt) {
        if (it !== dt) {
          if (dt)
            switch (dt) {
              case Gc:
                s.depthFunc(512);
                break;
              case Wc:
                s.depthFunc(519);
                break;
              case qc:
                s.depthFunc(513);
                break;
              case Js:
                s.depthFunc(515);
                break;
              case Xc:
                s.depthFunc(514);
                break;
              case jc:
                s.depthFunc(518);
                break;
              case Yc:
                s.depthFunc(516);
                break;
              case Zc:
                s.depthFunc(517);
                break;
              default:
                s.depthFunc(515);
            }
          else s.depthFunc(515);
          it = dt;
        }
      },
      setLocked: function (dt) {
        A = dt;
      },
      setClear: function (dt) {
        St !== dt && (s.clearDepth(dt), (St = dt));
      },
      reset: function () {
        (A = !1), (st = null), (it = null), (St = null);
      },
    };
  }
  function o() {
    let A = !1,
      st = null,
      it = null,
      St = null,
      dt = null,
      _t = null,
      ot = null,
      Tt = null,
      Vt = null;
    return {
      setTest: function (Nt) {
        A || (Nt ? yt(2960) : V(2960));
      },
      setMask: function (Nt) {
        st !== Nt && !A && (s.stencilMask(Nt), (st = Nt));
      },
      setFunc: function (Nt, Be, ze) {
        (it !== Nt || St !== Be || dt !== ze) &&
          (s.stencilFunc(Nt, Be, ze), (it = Nt), (St = Be), (dt = ze));
      },
      setOp: function (Nt, Be, ze) {
        (_t !== Nt || ot !== Be || Tt !== ze) &&
          (s.stencilOp(Nt, Be, ze), (_t = Nt), (ot = Be), (Tt = ze));
      },
      setLocked: function (Nt) {
        A = Nt;
      },
      setClear: function (Nt) {
        Vt !== Nt && (s.clearStencil(Nt), (Vt = Nt));
      },
      reset: function () {
        (A = !1),
          (st = null),
          (it = null),
          (St = null),
          (dt = null),
          (_t = null),
          (ot = null),
          (Tt = null),
          (Vt = null);
      },
    };
  }
  const a = new i(),
    l = new r(),
    c = new o();
  let h = {},
    u = {},
    d = new WeakMap(),
    p = [],
    g = null,
    m = !1,
    f = null,
    _ = null,
    w = null,
    C = null,
    T = null,
    y = null,
    L = null,
    I = !1,
    v = null,
    R = null,
    B = null,
    F = null,
    ut = null;
  const K = s.getParameter(35661);
  let P = !1,
    k = 0;
  const z = s.getParameter(7938);
  z.indexOf("WebGL") !== -1
    ? ((k = parseFloat(/^WebGL (\d)/.exec(z)[1])), (P = k >= 1))
    : z.indexOf("OpenGL ES") !== -1 &&
      ((k = parseFloat(/^OpenGL ES (\d)/.exec(z)[1])), (P = k >= 2));
  let G = null,
    X = {};
  const H = s.getParameter(3088),
    W = s.getParameter(2978),
    Q = new jt().fromArray(H),
    J = new jt().fromArray(W);
  function et(A, st, it) {
    const St = new Uint8Array(4),
      dt = s.createTexture();
    s.bindTexture(A, dt),
      s.texParameteri(A, 10241, 9728),
      s.texParameteri(A, 10240, 9728);
    for (let _t = 0; _t < it; _t++)
      s.texImage2D(st + _t, 0, 6408, 1, 1, 0, 6408, 5121, St);
    return dt;
  }
  const mt = {};
  (mt[3553] = et(3553, 3553, 1)),
    (mt[34067] = et(34067, 34069, 6)),
    a.setClear(0, 0, 0, 1),
    l.setClear(1),
    c.setClear(0),
    yt(2929),
    l.setFunc(Js),
    nt(!1),
    pt(Uo),
    yt(2884),
    j(un);
  function yt(A) {
    h[A] !== !0 && (s.enable(A), (h[A] = !0));
  }
  function V(A) {
    h[A] !== !1 && (s.disable(A), (h[A] = !1));
  }
  function zt(A, st) {
    return u[A] !== st
      ? (s.bindFramebuffer(A, st),
        (u[A] = st),
        n && (A === 36009 && (u[36160] = st), A === 36160 && (u[36009] = st)),
        !0)
      : !1;
  }
  function Et(A, st) {
    let it = p,
      St = !1;
    if (A)
      if (
        ((it = d.get(st)),
        it === void 0 && ((it = []), d.set(st, it)),
        A.isWebGLMultipleRenderTargets)
      ) {
        const dt = A.texture;
        if (it.length !== dt.length || it[0] !== 36064) {
          for (let _t = 0, ot = dt.length; _t < ot; _t++) it[_t] = 36064 + _t;
          (it.length = dt.length), (St = !0);
        }
      } else it[0] !== 36064 && ((it[0] = 36064), (St = !0));
    else it[0] !== 1029 && ((it[0] = 1029), (St = !0));
    St &&
      (e.isWebGL2
        ? s.drawBuffers(it)
        : t.get("WEBGL_draw_buffers").drawBuffersWEBGL(it));
  }
  function Lt(A) {
    return g !== A ? (s.useProgram(A), (g = A), !0) : !1;
  }
  const rt = { [ii]: 32774, [Dc]: 32778, [Ic]: 32779 };
  if (n) (rt[Go] = 32775), (rt[Wo] = 32776);
  else {
    const A = t.get("EXT_blend_minmax");
    A !== null && ((rt[Go] = A.MIN_EXT), (rt[Wo] = A.MAX_EXT));
  }
  const Dt = {
    [Fc]: 0,
    [Nc]: 1,
    [Bc]: 768,
    [Sl]: 770,
    [kc]: 776,
    [Hc]: 774,
    [Oc]: 772,
    [zc]: 769,
    [El]: 771,
    [Vc]: 775,
    [Uc]: 773,
  };
  function j(A, st, it, St, dt, _t, ot, Tt) {
    if (A === un) {
      m === !0 && (V(3042), (m = !1));
      return;
    }
    if ((m === !1 && (yt(3042), (m = !0)), A !== Pc)) {
      if (A !== f || Tt !== I) {
        if (
          ((_ !== ii || T !== ii) &&
            (s.blendEquation(32774), (_ = ii), (T = ii)),
          Tt)
        )
          switch (A) {
            case li:
              s.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Ho:
              s.blendFunc(1, 1);
              break;
            case Vo:
              s.blendFuncSeparate(0, 769, 0, 1);
              break;
            case ko:
              s.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", A);
              break;
          }
        else
          switch (A) {
            case li:
              s.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Ho:
              s.blendFunc(770, 1);
              break;
            case Vo:
              s.blendFuncSeparate(0, 769, 0, 1);
              break;
            case ko:
              s.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", A);
              break;
          }
        (w = null), (C = null), (y = null), (L = null), (f = A), (I = Tt);
      }
      return;
    }
    (dt = dt || st),
      (_t = _t || it),
      (ot = ot || St),
      (st !== _ || dt !== T) &&
        (s.blendEquationSeparate(rt[st], rt[dt]), (_ = st), (T = dt)),
      (it !== w || St !== C || _t !== y || ot !== L) &&
        (s.blendFuncSeparate(Dt[it], Dt[St], Dt[_t], Dt[ot]),
        (w = it),
        (C = St),
        (y = _t),
        (L = ot)),
      (f = A),
      (I = null);
  }
  function q(A, st) {
    A.side === ui ? V(2884) : yt(2884);
    let it = A.side === De;
    st && (it = !it),
      nt(it),
      A.blending === li && A.transparent === !1
        ? j(un)
        : j(
            A.blending,
            A.blendEquation,
            A.blendSrc,
            A.blendDst,
            A.blendEquationAlpha,
            A.blendSrcAlpha,
            A.blendDstAlpha,
            A.premultipliedAlpha
          ),
      l.setFunc(A.depthFunc),
      l.setTest(A.depthTest),
      l.setMask(A.depthWrite),
      a.setMask(A.colorWrite);
    const St = A.stencilWrite;
    c.setTest(St),
      St &&
        (c.setMask(A.stencilWriteMask),
        c.setFunc(A.stencilFunc, A.stencilRef, A.stencilFuncMask),
        c.setOp(A.stencilFail, A.stencilZFail, A.stencilZPass)),
      Ct(A.polygonOffset, A.polygonOffsetFactor, A.polygonOffsetUnits),
      A.alphaToCoverage === !0 ? yt(32926) : V(32926);
  }
  function nt(A) {
    v !== A && (A ? s.frontFace(2304) : s.frontFace(2305), (v = A));
  }
  function pt(A) {
    A !== Cc
      ? (yt(2884),
        A !== R &&
          (A === Uo
            ? s.cullFace(1029)
            : A === Lc
            ? s.cullFace(1028)
            : s.cullFace(1032)))
      : V(2884),
      (R = A);
  }
  function lt(A) {
    A !== B && (P && s.lineWidth(A), (B = A));
  }
  function Ct(A, st, it) {
    A
      ? (yt(32823),
        (F !== st || ut !== it) &&
          (s.polygonOffset(st, it), (F = st), (ut = it)))
      : V(32823);
  }
  function wt(A) {
    A ? yt(3089) : V(3089);
  }
  function vt(A) {
    A === void 0 && (A = 33984 + K - 1),
      G !== A && (s.activeTexture(A), (G = A));
  }
  function Xt(A, st) {
    G === null && vt();
    let it = X[G];
    it === void 0 && ((it = { type: void 0, texture: void 0 }), (X[G] = it)),
      (it.type !== A || it.texture !== st) &&
        (s.bindTexture(A, st || mt[A]), (it.type = A), (it.texture = st));
  }
  function Ut() {
    const A = X[G];
    A !== void 0 &&
      A.type !== void 0 &&
      (s.bindTexture(A.type, null), (A.type = void 0), (A.texture = void 0));
  }
  function S() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function x() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function O() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function $() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function ct() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function ft() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function Mt() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function M() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function tt(A) {
    Q.equals(A) === !1 && (s.scissor(A.x, A.y, A.z, A.w), Q.copy(A));
  }
  function gt(A) {
    J.equals(A) === !1 && (s.viewport(A.x, A.y, A.z, A.w), J.copy(A));
  }
  function at() {
    s.disable(3042),
      s.disable(2884),
      s.disable(2929),
      s.disable(32823),
      s.disable(3089),
      s.disable(2960),
      s.disable(32926),
      s.blendEquation(32774),
      s.blendFunc(1, 0),
      s.blendFuncSeparate(1, 0, 1, 0),
      s.colorMask(!0, !0, !0, !0),
      s.clearColor(0, 0, 0, 0),
      s.depthMask(!0),
      s.depthFunc(513),
      s.clearDepth(1),
      s.stencilMask(4294967295),
      s.stencilFunc(519, 0, 4294967295),
      s.stencilOp(7680, 7680, 7680),
      s.clearStencil(0),
      s.cullFace(1029),
      s.frontFace(2305),
      s.polygonOffset(0, 0),
      s.activeTexture(33984),
      s.bindFramebuffer(36160, null),
      n === !0 &&
        (s.bindFramebuffer(36009, null), s.bindFramebuffer(36008, null)),
      s.useProgram(null),
      s.lineWidth(1),
      s.scissor(0, 0, s.canvas.width, s.canvas.height),
      s.viewport(0, 0, s.canvas.width, s.canvas.height),
      (h = {}),
      (G = null),
      (X = {}),
      (u = {}),
      (d = new WeakMap()),
      (p = []),
      (g = null),
      (m = !1),
      (f = null),
      (_ = null),
      (w = null),
      (C = null),
      (T = null),
      (y = null),
      (L = null),
      (I = !1),
      (v = null),
      (R = null),
      (B = null),
      (F = null),
      (ut = null),
      Q.set(0, 0, s.canvas.width, s.canvas.height),
      J.set(0, 0, s.canvas.width, s.canvas.height),
      a.reset(),
      l.reset(),
      c.reset();
  }
  return {
    buffers: { color: a, depth: l, stencil: c },
    enable: yt,
    disable: V,
    bindFramebuffer: zt,
    drawBuffers: Et,
    useProgram: Lt,
    setBlending: j,
    setMaterial: q,
    setFlipSided: nt,
    setCullFace: pt,
    setLineWidth: lt,
    setPolygonOffset: Ct,
    setScissorTest: wt,
    activeTexture: vt,
    bindTexture: Xt,
    unbindTexture: Ut,
    compressedTexImage2D: S,
    texImage2D: Mt,
    texImage3D: M,
    texStorage2D: ct,
    texStorage3D: ft,
    texSubImage2D: x,
    texSubImage3D: O,
    compressedTexSubImage2D: $,
    scissor: tt,
    viewport: gt,
    reset: at,
  };
}
function Tm(s, t, e, n, i, r, o) {
  const a = i.isWebGL2,
    l = i.maxTextures,
    c = i.maxCubemapSize,
    h = i.maxTextureSize,
    u = i.maxSamples,
    d = t.has("WEBGL_multisampled_render_to_texture")
      ? t.get("WEBGL_multisampled_render_to_texture")
      : null,
    p = /OculusBrowser/g.test(navigator.userAgent),
    g = new WeakMap();
  let m;
  const f = new WeakMap();
  let _ = !1;
  try {
    _ =
      typeof OffscreenCanvas != "undefined" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function w(S, x) {
    return _ ? new OffscreenCanvas(S, x) : Zi("canvas");
  }
  function C(S, x, O, $) {
    let ct = 1;
    if (
      ((S.width > $ || S.height > $) && (ct = $ / Math.max(S.width, S.height)),
      ct < 1 || x === !0)
    )
      if (
        (typeof HTMLImageElement != "undefined" &&
          S instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement != "undefined" &&
          S instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap != "undefined" && S instanceof ImageBitmap)
      ) {
        const ft = x ? jr : Math.floor,
          Mt = ft(ct * S.width),
          M = ft(ct * S.height);
        m === void 0 && (m = w(Mt, M));
        const tt = O ? w(Mt, M) : m;
        return (
          (tt.width = Mt),
          (tt.height = M),
          tt.getContext("2d").drawImage(S, 0, 0, Mt, M),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              S.width +
              "x" +
              S.height +
              ") to (" +
              Mt +
              "x" +
              M +
              ")."
          ),
          tt
        );
      } else
        return (
          "data" in S &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                S.width +
                "x" +
                S.height +
                ")."
            ),
          S
        );
    return S;
  }
  function T(S) {
    return no(S.width) && no(S.height);
  }
  function y(S) {
    return a
      ? !1
      : S.wrapS !== Re ||
          S.wrapT !== Re ||
          (S.minFilter !== ae && S.minFilter !== ve);
  }
  function L(S, x) {
    return S.generateMipmaps && x && S.minFilter !== ae && S.minFilter !== ve;
  }
  function I(S) {
    s.generateMipmap(S);
  }
  function v(S, x, O, $, ct = !1) {
    if (a === !1) return x;
    if (S !== null) {
      if (s[S] !== void 0) return s[S];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          S +
          "'"
      );
    }
    let ft = x;
    return (
      x === 6403 &&
        (O === 5126 && (ft = 33326),
        O === 5131 && (ft = 33325),
        O === 5121 && (ft = 33321)),
      x === 33319 &&
        (O === 5126 && (ft = 33328),
        O === 5131 && (ft = 33327),
        O === 5121 && (ft = 33323)),
      x === 6408 &&
        (O === 5126 && (ft = 34836),
        O === 5131 && (ft = 34842),
        O === 5121 && (ft = $ === Zt && ct === !1 ? 35907 : 32856),
        O === 32819 && (ft = 32854),
        O === 32820 && (ft = 32855)),
      (ft === 33325 ||
        ft === 33326 ||
        ft === 33327 ||
        ft === 33328 ||
        ft === 34842 ||
        ft === 34836) &&
        t.get("EXT_color_buffer_float"),
      ft
    );
  }
  function R(S, x, O) {
    return L(S, O) === !0 ||
      (S.isFramebufferTexture && S.minFilter !== ae && S.minFilter !== ve)
      ? Math.log2(Math.max(x.width, x.height)) + 1
      : S.mipmaps !== void 0 && S.mipmaps.length > 0
      ? S.mipmaps.length
      : S.isCompressedTexture && Array.isArray(S.image)
      ? x.mipmaps.length
      : 1;
  }
  function B(S) {
    return S === ae || S === qo || S === Xo ? 9728 : 9729;
  }
  function F(S) {
    const x = S.target;
    x.removeEventListener("dispose", F), K(x), x.isVideoTexture && g.delete(x);
  }
  function ut(S) {
    const x = S.target;
    x.removeEventListener("dispose", ut), k(x);
  }
  function K(S) {
    const x = n.get(S);
    if (x.__webglInit === void 0) return;
    const O = S.source,
      $ = f.get(O);
    if ($) {
      const ct = $[x.__cacheKey];
      ct.usedTimes--,
        ct.usedTimes === 0 && P(S),
        Object.keys($).length === 0 && f.delete(O);
    }
    n.remove(S);
  }
  function P(S) {
    const x = n.get(S);
    s.deleteTexture(x.__webglTexture);
    const O = S.source,
      $ = f.get(O);
    delete $[x.__cacheKey], o.memory.textures--;
  }
  function k(S) {
    const x = S.texture,
      O = n.get(S),
      $ = n.get(x);
    if (
      ($.__webglTexture !== void 0 &&
        (s.deleteTexture($.__webglTexture), o.memory.textures--),
      S.depthTexture && S.depthTexture.dispose(),
      S.isWebGLCubeRenderTarget)
    )
      for (let ct = 0; ct < 6; ct++)
        s.deleteFramebuffer(O.__webglFramebuffer[ct]),
          O.__webglDepthbuffer &&
            s.deleteRenderbuffer(O.__webglDepthbuffer[ct]);
    else
      s.deleteFramebuffer(O.__webglFramebuffer),
        O.__webglDepthbuffer && s.deleteRenderbuffer(O.__webglDepthbuffer),
        O.__webglMultisampledFramebuffer &&
          s.deleteFramebuffer(O.__webglMultisampledFramebuffer),
        O.__webglColorRenderbuffer &&
          s.deleteRenderbuffer(O.__webglColorRenderbuffer),
        O.__webglDepthRenderbuffer &&
          s.deleteRenderbuffer(O.__webglDepthRenderbuffer);
    if (S.isWebGLMultipleRenderTargets)
      for (let ct = 0, ft = x.length; ct < ft; ct++) {
        const Mt = n.get(x[ct]);
        Mt.__webglTexture &&
          (s.deleteTexture(Mt.__webglTexture), o.memory.textures--),
          n.remove(x[ct]);
      }
    n.remove(x), n.remove(S);
  }
  let z = 0;
  function G() {
    z = 0;
  }
  function X() {
    const S = z;
    return (
      S >= l &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            S +
            " texture units while this GPU supports only " +
            l
        ),
      (z += 1),
      S
    );
  }
  function H(S) {
    const x = [];
    return (
      x.push(S.wrapS),
      x.push(S.wrapT),
      x.push(S.magFilter),
      x.push(S.minFilter),
      x.push(S.anisotropy),
      x.push(S.internalFormat),
      x.push(S.format),
      x.push(S.type),
      x.push(S.generateMipmaps),
      x.push(S.premultiplyAlpha),
      x.push(S.flipY),
      x.push(S.unpackAlignment),
      x.push(S.encoding),
      x.join()
    );
  }
  function W(S, x) {
    const O = n.get(S);
    if (
      (S.isVideoTexture && Xt(S),
      S.isRenderTargetTexture === !1 &&
        S.version > 0 &&
        O.__version !== S.version)
    ) {
      const $ = S.image;
      if ($ === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if ($.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        Et(O, S, x);
        return;
      }
    }
    e.activeTexture(33984 + x), e.bindTexture(3553, O.__webglTexture);
  }
  function Q(S, x) {
    const O = n.get(S);
    if (S.version > 0 && O.__version !== S.version) {
      Et(O, S, x);
      return;
    }
    e.activeTexture(33984 + x), e.bindTexture(35866, O.__webglTexture);
  }
  function J(S, x) {
    const O = n.get(S);
    if (S.version > 0 && O.__version !== S.version) {
      Et(O, S, x);
      return;
    }
    e.activeTexture(33984 + x), e.bindTexture(32879, O.__webglTexture);
  }
  function et(S, x) {
    const O = n.get(S);
    if (S.version > 0 && O.__version !== S.version) {
      Lt(O, S, x);
      return;
    }
    e.activeTexture(33984 + x), e.bindTexture(34067, O.__webglTexture);
  }
  const mt = { [Qs]: 10497, [Re]: 33071, [to]: 33648 },
    yt = {
      [ae]: 9728,
      [qo]: 9984,
      [Xo]: 9986,
      [ve]: 9729,
      [ih]: 9985,
      [Kr]: 9987,
    };
  function V(S, x, O) {
    if (
      (O
        ? (s.texParameteri(S, 10242, mt[x.wrapS]),
          s.texParameteri(S, 10243, mt[x.wrapT]),
          (S === 32879 || S === 35866) &&
            s.texParameteri(S, 32882, mt[x.wrapR]),
          s.texParameteri(S, 10240, yt[x.magFilter]),
          s.texParameteri(S, 10241, yt[x.minFilter]))
        : (s.texParameteri(S, 10242, 33071),
          s.texParameteri(S, 10243, 33071),
          (S === 32879 || S === 35866) && s.texParameteri(S, 32882, 33071),
          (x.wrapS !== Re || x.wrapT !== Re) &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          s.texParameteri(S, 10240, B(x.magFilter)),
          s.texParameteri(S, 10241, B(x.minFilter)),
          x.minFilter !== ae &&
            x.minFilter !== ve &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      t.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      const $ = t.get("EXT_texture_filter_anisotropic");
      if (
        (x.type === Tn && t.has("OES_texture_float_linear") === !1) ||
        (a === !1 &&
          x.type === Xi &&
          t.has("OES_texture_half_float_linear") === !1)
      )
        return;
      (x.anisotropy > 1 || n.get(x).__currentAnisotropy) &&
        (s.texParameterf(
          S,
          $.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(x.anisotropy, i.getMaxAnisotropy())
        ),
        (n.get(x).__currentAnisotropy = x.anisotropy));
    }
  }
  function zt(S, x) {
    let O = !1;
    S.__webglInit === void 0 &&
      ((S.__webglInit = !0), x.addEventListener("dispose", F));
    const $ = x.source;
    let ct = f.get($);
    ct === void 0 && ((ct = {}), f.set($, ct));
    const ft = H(x);
    if (ft !== S.__cacheKey) {
      ct[ft] === void 0 &&
        ((ct[ft] = { texture: s.createTexture(), usedTimes: 0 }),
        o.memory.textures++,
        (O = !0)),
        ct[ft].usedTimes++;
      const Mt = ct[S.__cacheKey];
      Mt !== void 0 &&
        (ct[S.__cacheKey].usedTimes--, Mt.usedTimes === 0 && P(x)),
        (S.__cacheKey = ft),
        (S.__webglTexture = ct[ft].texture);
    }
    return O;
  }
  function Et(S, x, O) {
    let $ = 3553;
    x.isDataArrayTexture && ($ = 35866), x.isData3DTexture && ($ = 32879);
    const ct = zt(S, x),
      ft = x.source;
    if (
      (e.activeTexture(33984 + O),
      e.bindTexture($, S.__webglTexture),
      ft.version !== ft.__currentVersion || ct === !0)
    ) {
      s.pixelStorei(37440, x.flipY),
        s.pixelStorei(37441, x.premultiplyAlpha),
        s.pixelStorei(3317, x.unpackAlignment),
        s.pixelStorei(37443, 0);
      const Mt = y(x) && T(x.image) === !1;
      let M = C(x.image, Mt, !1, h);
      M = Ut(x, M);
      const tt = T(M) || a,
        gt = r.convert(x.format, x.encoding);
      let at = r.convert(x.type),
        A = v(x.internalFormat, gt, at, x.encoding, x.isVideoTexture);
      V($, x, tt);
      let st;
      const it = x.mipmaps,
        St = a && x.isVideoTexture !== !0,
        dt = S.__version === void 0 || ct === !0,
        _t = R(x, M, tt);
      if (x.isDepthTexture)
        (A = 6402),
          a
            ? x.type === Tn
              ? (A = 36012)
              : x.type === Hr
              ? (A = 33190)
              : x.type === ci
              ? (A = 35056)
              : (A = 33189)
            : x.type === Tn &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          x.format === Cn &&
            A === 6402 &&
            x.type !== qi &&
            x.type !== Hr &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (x.type = qi),
            (at = r.convert(x.type))),
          x.format === pi &&
            A === 6402 &&
            ((A = 34041),
            x.type !== ci &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (x.type = ci),
              (at = r.convert(x.type)))),
          dt &&
            (St
              ? e.texStorage2D(3553, 1, A, M.width, M.height)
              : e.texImage2D(3553, 0, A, M.width, M.height, 0, gt, at, null));
      else if (x.isDataTexture)
        if (it.length > 0 && tt) {
          St && dt && e.texStorage2D(3553, _t, A, it[0].width, it[0].height);
          for (let ot = 0, Tt = it.length; ot < Tt; ot++)
            (st = it[ot]),
              St
                ? e.texSubImage2D(
                    3553,
                    ot,
                    0,
                    0,
                    st.width,
                    st.height,
                    gt,
                    at,
                    st.data
                  )
                : e.texImage2D(
                    3553,
                    ot,
                    A,
                    st.width,
                    st.height,
                    0,
                    gt,
                    at,
                    st.data
                  );
          x.generateMipmaps = !1;
        } else
          St
            ? (dt && e.texStorage2D(3553, _t, A, M.width, M.height),
              e.texSubImage2D(3553, 0, 0, 0, M.width, M.height, gt, at, M.data))
            : e.texImage2D(3553, 0, A, M.width, M.height, 0, gt, at, M.data);
      else if (x.isCompressedTexture) {
        St && dt && e.texStorage2D(3553, _t, A, it[0].width, it[0].height);
        for (let ot = 0, Tt = it.length; ot < Tt; ot++)
          (st = it[ot]),
            x.format !== Pe
              ? gt !== null
                ? St
                  ? e.compressedTexSubImage2D(
                      3553,
                      ot,
                      0,
                      0,
                      st.width,
                      st.height,
                      gt,
                      st.data
                    )
                  : e.compressedTexImage2D(
                      3553,
                      ot,
                      A,
                      st.width,
                      st.height,
                      0,
                      st.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                  )
              : St
              ? e.texSubImage2D(
                  3553,
                  ot,
                  0,
                  0,
                  st.width,
                  st.height,
                  gt,
                  at,
                  st.data
                )
              : e.texImage2D(
                  3553,
                  ot,
                  A,
                  st.width,
                  st.height,
                  0,
                  gt,
                  at,
                  st.data
                );
      } else if (x.isDataArrayTexture)
        St
          ? (dt && e.texStorage3D(35866, _t, A, M.width, M.height, M.depth),
            e.texSubImage3D(
              35866,
              0,
              0,
              0,
              0,
              M.width,
              M.height,
              M.depth,
              gt,
              at,
              M.data
            ))
          : e.texImage3D(
              35866,
              0,
              A,
              M.width,
              M.height,
              M.depth,
              0,
              gt,
              at,
              M.data
            );
      else if (x.isData3DTexture)
        St
          ? (dt && e.texStorage3D(32879, _t, A, M.width, M.height, M.depth),
            e.texSubImage3D(
              32879,
              0,
              0,
              0,
              0,
              M.width,
              M.height,
              M.depth,
              gt,
              at,
              M.data
            ))
          : e.texImage3D(
              32879,
              0,
              A,
              M.width,
              M.height,
              M.depth,
              0,
              gt,
              at,
              M.data
            );
      else if (x.isFramebufferTexture) {
        if (dt)
          if (St) e.texStorage2D(3553, _t, A, M.width, M.height);
          else {
            let ot = M.width,
              Tt = M.height;
            for (let Vt = 0; Vt < _t; Vt++)
              e.texImage2D(3553, Vt, A, ot, Tt, 0, gt, at, null),
                (ot >>= 1),
                (Tt >>= 1);
          }
      } else if (it.length > 0 && tt) {
        St && dt && e.texStorage2D(3553, _t, A, it[0].width, it[0].height);
        for (let ot = 0, Tt = it.length; ot < Tt; ot++)
          (st = it[ot]),
            St
              ? e.texSubImage2D(3553, ot, 0, 0, gt, at, st)
              : e.texImage2D(3553, ot, A, gt, at, st);
        x.generateMipmaps = !1;
      } else
        St
          ? (dt && e.texStorage2D(3553, _t, A, M.width, M.height),
            e.texSubImage2D(3553, 0, 0, 0, gt, at, M))
          : e.texImage2D(3553, 0, A, gt, at, M);
      L(x, tt) && I($),
        (ft.__currentVersion = ft.version),
        x.onUpdate && x.onUpdate(x);
    }
    S.__version = x.version;
  }
  function Lt(S, x, O) {
    if (x.image.length !== 6) return;
    const $ = zt(S, x),
      ct = x.source;
    if (
      (e.activeTexture(33984 + O),
      e.bindTexture(34067, S.__webglTexture),
      ct.version !== ct.__currentVersion || $ === !0)
    ) {
      s.pixelStorei(37440, x.flipY),
        s.pixelStorei(37441, x.premultiplyAlpha),
        s.pixelStorei(3317, x.unpackAlignment),
        s.pixelStorei(37443, 0);
      const ft = x.isCompressedTexture || x.image[0].isCompressedTexture,
        Mt = x.image[0] && x.image[0].isDataTexture,
        M = [];
      for (let ot = 0; ot < 6; ot++)
        !ft && !Mt
          ? (M[ot] = C(x.image[ot], !1, !0, c))
          : (M[ot] = Mt ? x.image[ot].image : x.image[ot]),
          (M[ot] = Ut(x, M[ot]));
      const tt = M[0],
        gt = T(tt) || a,
        at = r.convert(x.format, x.encoding),
        A = r.convert(x.type),
        st = v(x.internalFormat, at, A, x.encoding),
        it = a && x.isVideoTexture !== !0,
        St = S.__version === void 0;
      let dt = R(x, tt, gt);
      V(34067, x, gt);
      let _t;
      if (ft) {
        it && St && e.texStorage2D(34067, dt, st, tt.width, tt.height);
        for (let ot = 0; ot < 6; ot++) {
          _t = M[ot].mipmaps;
          for (let Tt = 0; Tt < _t.length; Tt++) {
            const Vt = _t[Tt];
            x.format !== Pe
              ? at !== null
                ? it
                  ? e.compressedTexSubImage2D(
                      34069 + ot,
                      Tt,
                      0,
                      0,
                      Vt.width,
                      Vt.height,
                      at,
                      Vt.data
                    )
                  : e.compressedTexImage2D(
                      34069 + ot,
                      Tt,
                      st,
                      Vt.width,
                      Vt.height,
                      0,
                      Vt.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : it
              ? e.texSubImage2D(
                  34069 + ot,
                  Tt,
                  0,
                  0,
                  Vt.width,
                  Vt.height,
                  at,
                  A,
                  Vt.data
                )
              : e.texImage2D(
                  34069 + ot,
                  Tt,
                  st,
                  Vt.width,
                  Vt.height,
                  0,
                  at,
                  A,
                  Vt.data
                );
          }
        }
      } else {
        (_t = x.mipmaps),
          it &&
            St &&
            (_t.length > 0 && dt++,
            e.texStorage2D(34067, dt, st, M[0].width, M[0].height));
        for (let ot = 0; ot < 6; ot++)
          if (Mt) {
            it
              ? e.texSubImage2D(
                  34069 + ot,
                  0,
                  0,
                  0,
                  M[ot].width,
                  M[ot].height,
                  at,
                  A,
                  M[ot].data
                )
              : e.texImage2D(
                  34069 + ot,
                  0,
                  st,
                  M[ot].width,
                  M[ot].height,
                  0,
                  at,
                  A,
                  M[ot].data
                );
            for (let Tt = 0; Tt < _t.length; Tt++) {
              const Nt = _t[Tt].image[ot].image;
              it
                ? e.texSubImage2D(
                    34069 + ot,
                    Tt + 1,
                    0,
                    0,
                    Nt.width,
                    Nt.height,
                    at,
                    A,
                    Nt.data
                  )
                : e.texImage2D(
                    34069 + ot,
                    Tt + 1,
                    st,
                    Nt.width,
                    Nt.height,
                    0,
                    at,
                    A,
                    Nt.data
                  );
            }
          } else {
            it
              ? e.texSubImage2D(34069 + ot, 0, 0, 0, at, A, M[ot])
              : e.texImage2D(34069 + ot, 0, st, at, A, M[ot]);
            for (let Tt = 0; Tt < _t.length; Tt++) {
              const Vt = _t[Tt];
              it
                ? e.texSubImage2D(34069 + ot, Tt + 1, 0, 0, at, A, Vt.image[ot])
                : e.texImage2D(34069 + ot, Tt + 1, st, at, A, Vt.image[ot]);
            }
          }
      }
      L(x, gt) && I(34067),
        (ct.__currentVersion = ct.version),
        x.onUpdate && x.onUpdate(x);
    }
    S.__version = x.version;
  }
  function rt(S, x, O, $, ct) {
    const ft = r.convert(O.format, O.encoding),
      Mt = r.convert(O.type),
      M = v(O.internalFormat, ft, Mt, O.encoding);
    n.get(x).__hasExternalTextures ||
      (ct === 32879 || ct === 35866
        ? e.texImage3D(ct, 0, M, x.width, x.height, x.depth, 0, ft, Mt, null)
        : e.texImage2D(ct, 0, M, x.width, x.height, 0, ft, Mt, null)),
      e.bindFramebuffer(36160, S),
      vt(x)
        ? d.framebufferTexture2DMultisampleEXT(
            36160,
            $,
            ct,
            n.get(O).__webglTexture,
            0,
            wt(x)
          )
        : s.framebufferTexture2D(36160, $, ct, n.get(O).__webglTexture, 0),
      e.bindFramebuffer(36160, null);
  }
  function Dt(S, x, O) {
    if ((s.bindRenderbuffer(36161, S), x.depthBuffer && !x.stencilBuffer)) {
      let $ = 33189;
      if (O || vt(x)) {
        const ct = x.depthTexture;
        ct &&
          ct.isDepthTexture &&
          (ct.type === Tn ? ($ = 36012) : ct.type === Hr && ($ = 33190));
        const ft = wt(x);
        vt(x)
          ? d.renderbufferStorageMultisampleEXT(36161, ft, $, x.width, x.height)
          : s.renderbufferStorageMultisample(36161, ft, $, x.width, x.height);
      } else s.renderbufferStorage(36161, $, x.width, x.height);
      s.framebufferRenderbuffer(36160, 36096, 36161, S);
    } else if (x.depthBuffer && x.stencilBuffer) {
      const $ = wt(x);
      O && vt(x) === !1
        ? s.renderbufferStorageMultisample(36161, $, 35056, x.width, x.height)
        : vt(x)
        ? d.renderbufferStorageMultisampleEXT(
            36161,
            $,
            35056,
            x.width,
            x.height
          )
        : s.renderbufferStorage(36161, 34041, x.width, x.height),
        s.framebufferRenderbuffer(36160, 33306, 36161, S);
    } else {
      const $ =
          x.isWebGLMultipleRenderTargets === !0 ? x.texture[0] : x.texture,
        ct = r.convert($.format, $.encoding),
        ft = r.convert($.type),
        Mt = v($.internalFormat, ct, ft, $.encoding),
        M = wt(x);
      O && vt(x) === !1
        ? s.renderbufferStorageMultisample(36161, M, Mt, x.width, x.height)
        : vt(x)
        ? d.renderbufferStorageMultisampleEXT(36161, M, Mt, x.width, x.height)
        : s.renderbufferStorage(36161, Mt, x.width, x.height);
    }
    s.bindRenderbuffer(36161, null);
  }
  function j(S, x) {
    if (x && x.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (e.bindFramebuffer(36160, S),
      !(x.depthTexture && x.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!n.get(x.depthTexture).__webglTexture ||
      x.depthTexture.image.width !== x.width ||
      x.depthTexture.image.height !== x.height) &&
      ((x.depthTexture.image.width = x.width),
      (x.depthTexture.image.height = x.height),
      (x.depthTexture.needsUpdate = !0)),
      W(x.depthTexture, 0);
    const $ = n.get(x.depthTexture).__webglTexture,
      ct = wt(x);
    if (x.depthTexture.format === Cn)
      vt(x)
        ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, $, 0, ct)
        : s.framebufferTexture2D(36160, 36096, 3553, $, 0);
    else if (x.depthTexture.format === pi)
      vt(x)
        ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, $, 0, ct)
        : s.framebufferTexture2D(36160, 33306, 3553, $, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function q(S) {
    const x = n.get(S),
      O = S.isWebGLCubeRenderTarget === !0;
    if (S.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (O)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      j(x.__webglFramebuffer, S);
    } else if (O) {
      x.__webglDepthbuffer = [];
      for (let $ = 0; $ < 6; $++)
        e.bindFramebuffer(36160, x.__webglFramebuffer[$]),
          (x.__webglDepthbuffer[$] = s.createRenderbuffer()),
          Dt(x.__webglDepthbuffer[$], S, !1);
    } else
      e.bindFramebuffer(36160, x.__webglFramebuffer),
        (x.__webglDepthbuffer = s.createRenderbuffer()),
        Dt(x.__webglDepthbuffer, S, !1);
    e.bindFramebuffer(36160, null);
  }
  function nt(S, x, O) {
    const $ = n.get(S);
    x !== void 0 && rt($.__webglFramebuffer, S, S.texture, 36064, 3553),
      O !== void 0 && q(S);
  }
  function pt(S) {
    const x = S.texture,
      O = n.get(S),
      $ = n.get(x);
    S.addEventListener("dispose", ut),
      S.isWebGLMultipleRenderTargets !== !0 &&
        ($.__webglTexture === void 0 && ($.__webglTexture = s.createTexture()),
        ($.__version = x.version),
        o.memory.textures++);
    const ct = S.isWebGLCubeRenderTarget === !0,
      ft = S.isWebGLMultipleRenderTargets === !0,
      Mt = T(S) || a;
    if (ct) {
      O.__webglFramebuffer = [];
      for (let M = 0; M < 6; M++)
        O.__webglFramebuffer[M] = s.createFramebuffer();
    } else if (((O.__webglFramebuffer = s.createFramebuffer()), ft))
      if (i.drawBuffers) {
        const M = S.texture;
        for (let tt = 0, gt = M.length; tt < gt; tt++) {
          const at = n.get(M[tt]);
          at.__webglTexture === void 0 &&
            ((at.__webglTexture = s.createTexture()), o.memory.textures++);
        }
      } else
        console.warn(
          "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
        );
    else if (a && S.samples > 0 && vt(S) === !1) {
      (O.__webglMultisampledFramebuffer = s.createFramebuffer()),
        (O.__webglColorRenderbuffer = s.createRenderbuffer()),
        s.bindRenderbuffer(36161, O.__webglColorRenderbuffer);
      const M = r.convert(x.format, x.encoding),
        tt = r.convert(x.type),
        gt = v(x.internalFormat, M, tt, x.encoding),
        at = wt(S);
      s.renderbufferStorageMultisample(36161, at, gt, S.width, S.height),
        e.bindFramebuffer(36160, O.__webglMultisampledFramebuffer),
        s.framebufferRenderbuffer(
          36160,
          36064,
          36161,
          O.__webglColorRenderbuffer
        ),
        s.bindRenderbuffer(36161, null),
        S.depthBuffer &&
          ((O.__webglDepthRenderbuffer = s.createRenderbuffer()),
          Dt(O.__webglDepthRenderbuffer, S, !0)),
        e.bindFramebuffer(36160, null);
    }
    if (ct) {
      e.bindTexture(34067, $.__webglTexture), V(34067, x, Mt);
      for (let M = 0; M < 6; M++)
        rt(O.__webglFramebuffer[M], S, x, 36064, 34069 + M);
      L(x, Mt) && I(34067), e.unbindTexture();
    } else if (ft) {
      const M = S.texture;
      for (let tt = 0, gt = M.length; tt < gt; tt++) {
        const at = M[tt],
          A = n.get(at);
        e.bindTexture(3553, A.__webglTexture),
          V(3553, at, Mt),
          rt(O.__webglFramebuffer, S, at, 36064 + tt, 3553),
          L(at, Mt) && I(3553);
      }
      e.unbindTexture();
    } else {
      let M = 3553;
      (S.isWebGL3DRenderTarget || S.isWebGLArrayRenderTarget) &&
        (a
          ? (M = S.isWebGL3DRenderTarget ? 32879 : 35866)
          : console.error(
              "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
            )),
        e.bindTexture(M, $.__webglTexture),
        V(M, x, Mt),
        rt(O.__webglFramebuffer, S, x, 36064, M),
        L(x, Mt) && I(M),
        e.unbindTexture();
    }
    S.depthBuffer && q(S);
  }
  function lt(S) {
    const x = T(S) || a,
      O = S.isWebGLMultipleRenderTargets === !0 ? S.texture : [S.texture];
    for (let $ = 0, ct = O.length; $ < ct; $++) {
      const ft = O[$];
      if (L(ft, x)) {
        const Mt = S.isWebGLCubeRenderTarget ? 34067 : 3553,
          M = n.get(ft).__webglTexture;
        e.bindTexture(Mt, M), I(Mt), e.unbindTexture();
      }
    }
  }
  function Ct(S) {
    if (a && S.samples > 0 && vt(S) === !1) {
      const x = S.width,
        O = S.height;
      let $ = 16384;
      const ct = [36064],
        ft = S.stencilBuffer ? 33306 : 36096;
      S.depthBuffer && ct.push(ft);
      const Mt = n.get(S),
        M = Mt.__ignoreDepthValues !== void 0 ? Mt.__ignoreDepthValues : !1;
      M === !1 && (S.depthBuffer && ($ |= 256), S.stencilBuffer && ($ |= 1024)),
        e.bindFramebuffer(36008, Mt.__webglMultisampledFramebuffer),
        e.bindFramebuffer(36009, Mt.__webglFramebuffer),
        M === !0 &&
          (s.invalidateFramebuffer(36008, [ft]),
          s.invalidateFramebuffer(36009, [ft])),
        s.blitFramebuffer(0, 0, x, O, 0, 0, x, O, $, 9728),
        p && s.invalidateFramebuffer(36008, ct),
        e.bindFramebuffer(36008, null),
        e.bindFramebuffer(36009, Mt.__webglMultisampledFramebuffer);
    }
  }
  function wt(S) {
    return Math.min(u, S.samples);
  }
  function vt(S) {
    const x = n.get(S);
    return (
      a &&
      S.samples > 0 &&
      t.has("WEBGL_multisampled_render_to_texture") === !0 &&
      x.__useRenderToTexture !== !1
    );
  }
  function Xt(S) {
    const x = o.render.frame;
    g.get(S) !== x && (g.set(S, x), S.update());
  }
  function Ut(S, x) {
    const O = S.encoding,
      $ = S.format,
      ct = S.type;
    return (
      S.isCompressedTexture === !0 ||
        S.isVideoTexture === !0 ||
        S.format === eo ||
        (O !== pn &&
          (O === Zt
            ? a === !1
              ? t.has("EXT_sRGB") === !0 && $ === Pe
                ? ((S.format = eo),
                  (S.minFilter = ve),
                  (S.generateMipmaps = !1))
                : (x = Dn.sRGBToLinear(x))
              : ($ !== Pe || ct !== Pn) &&
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture encoding:",
                O
              ))),
      x
    );
  }
  (this.allocateTextureUnit = X),
    (this.resetTextureUnits = G),
    (this.setTexture2D = W),
    (this.setTexture2DArray = Q),
    (this.setTexture3D = J),
    (this.setTextureCube = et),
    (this.rebindTextures = nt),
    (this.setupRenderTarget = pt),
    (this.updateRenderTargetMipmap = lt),
    (this.updateMultisampleRenderTarget = Ct),
    (this.setupDepthRenderbuffer = q),
    (this.setupFrameBufferTexture = rt),
    (this.useMultisampledRTT = vt);
}
function Am(s, t, e) {
  const n = e.isWebGL2;
  function i(r, o = null) {
    let a;
    if (r === Pn) return 5121;
    if (r === ah) return 32819;
    if (r === lh) return 32820;
    if (r === rh) return 5120;
    if (r === sh) return 5122;
    if (r === qi) return 5123;
    if (r === oh) return 5124;
    if (r === Hr) return 5125;
    if (r === Tn) return 5126;
    if (r === Xi)
      return n
        ? 5131
        : ((a = t.get("OES_texture_half_float")),
          a !== null ? a.HALF_FLOAT_OES : null);
    if (r === ch) return 6406;
    if (r === Pe) return 6408;
    if (r === uh) return 6409;
    if (r === dh) return 6410;
    if (r === Cn) return 6402;
    if (r === pi) return 34041;
    if (r === fh) return 6403;
    if (r === hh)
      return (
        console.warn(
          "THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"
        ),
        6408
      );
    if (r === eo)
      return (a = t.get("EXT_sRGB")), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (r === ph) return 36244;
    if (r === mh) return 33319;
    if (r === gh) return 33320;
    if (r === _h) return 36249;
    if (r === hs || r === us || r === ds || r === fs)
      if (o === Zt)
        if (((a = t.get("WEBGL_compressed_texture_s3tc_srgb")), a !== null)) {
          if (r === hs) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === us) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === ds) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === fs) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((a = t.get("WEBGL_compressed_texture_s3tc")), a !== null)) {
        if (r === hs) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === us) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === ds) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === fs) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (r === jo || r === Yo || r === Zo || r === Jo)
      if (((a = t.get("WEBGL_compressed_texture_pvrtc")), a !== null)) {
        if (r === jo) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === Yo) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === Zo) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === Jo) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (r === xh)
      return (
        (a = t.get("WEBGL_compressed_texture_etc1")),
        a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (r === $o || r === Ko)
      if (((a = t.get("WEBGL_compressed_texture_etc")), a !== null)) {
        if (r === $o)
          return o === Zt ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (r === Ko)
          return o === Zt
            ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      r === Qo ||
      r === ta ||
      r === ea ||
      r === na ||
      r === ia ||
      r === ra ||
      r === sa ||
      r === oa ||
      r === aa ||
      r === la ||
      r === ca ||
      r === ha ||
      r === ua ||
      r === da
    )
      if (((a = t.get("WEBGL_compressed_texture_astc")), a !== null)) {
        if (r === Qo)
          return o === Zt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === ta)
          return o === Zt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === ea)
          return o === Zt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === na)
          return o === Zt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === ia)
          return o === Zt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === ra)
          return o === Zt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === sa)
          return o === Zt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === oa)
          return o === Zt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === aa)
          return o === Zt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === la)
          return o === Zt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === ca)
          return o === Zt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === ha)
          return o === Zt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === ua)
          return o === Zt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === da)
          return o === Zt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (r === fa)
      if (((a = t.get("EXT_texture_compression_bptc")), a !== null)) {
        if (r === fa)
          return o === Zt
            ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else return null;
    return r === ci
      ? n
        ? 34042
        : ((a = t.get("WEBGL_depth_texture")),
          a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null)
      : s[r] !== void 0
      ? s[r]
      : null;
  }
  return { convert: i };
}
class kl extends _e {
  constructor(t = []) {
    super(), (this.cameras = t);
  }
}
kl.prototype.isArrayCamera = !0;
class Ui extends Wt {
  constructor() {
    super(), (this.type = "Group");
  }
}
Ui.prototype.isGroup = !0;
const Cm = { type: "move" };
class Vs {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Ui()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Ui()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new E()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new E())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Ui()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new E()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new E())),
      this._grip
    );
  }
  dispatchEvent(t) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(t),
      this._grip !== null && this._grip.dispatchEvent(t),
      this._hand !== null && this._hand.dispatchEvent(t),
      this
    );
  }
  disconnect(t) {
    return (
      this.dispatchEvent({ type: "disconnected", data: t }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(t, e, n) {
    let i = null,
      r = null,
      o = null;
    const a = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred")
      if (
        (a !== null &&
          ((i = e.getPose(t.targetRaySpace, n)),
          i !== null &&
            (a.matrix.fromArray(i.transform.matrix),
            a.matrix.decompose(a.position, a.rotation, a.scale),
            i.linearVelocity
              ? ((a.hasLinearVelocity = !0),
                a.linearVelocity.copy(i.linearVelocity))
              : (a.hasLinearVelocity = !1),
            i.angularVelocity
              ? ((a.hasAngularVelocity = !0),
                a.angularVelocity.copy(i.angularVelocity))
              : (a.hasAngularVelocity = !1),
            this.dispatchEvent(Cm))),
        c && t.hand)
      ) {
        o = !0;
        for (const m of t.hand.values()) {
          const f = e.getJointPose(m, n);
          if (c.joints[m.jointName] === void 0) {
            const w = new Ui();
            (w.matrixAutoUpdate = !1),
              (w.visible = !1),
              (c.joints[m.jointName] = w),
              c.add(w);
          }
          const _ = c.joints[m.jointName];
          f !== null &&
            (_.matrix.fromArray(f.transform.matrix),
            _.matrix.decompose(_.position, _.rotation, _.scale),
            (_.jointRadius = f.radius)),
            (_.visible = f !== null);
        }
        const h = c.joints["index-finger-tip"],
          u = c.joints["thumb-tip"],
          d = h.position.distanceTo(u.position),
          p = 0.02,
          g = 0.005;
        c.inputState.pinching && d > p + g
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: t.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            d <= p - g &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: t.handedness,
              target: this,
            }));
      } else
        l !== null &&
          t.gripSpace &&
          ((r = e.getPose(t.gripSpace, n)),
          r !== null &&
            (l.matrix.fromArray(r.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            r.linearVelocity
              ? ((l.hasLinearVelocity = !0),
                l.linearVelocity.copy(r.linearVelocity))
              : (l.hasLinearVelocity = !1),
            r.angularVelocity
              ? ((l.hasAngularVelocity = !0),
                l.angularVelocity.copy(r.angularVelocity))
              : (l.hasAngularVelocity = !1)));
    return (
      a !== null && (a.visible = i !== null),
      l !== null && (l.visible = r !== null),
      c !== null && (c.visible = o !== null),
      this
    );
  }
}
class Gl extends he {
  constructor(t, e, n, i, r, o, a, l, c, h) {
    if (((h = h !== void 0 ? h : Cn), h !== Cn && h !== pi))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    n === void 0 && h === Cn && (n = qi),
      n === void 0 && h === pi && (n = ci),
      super(null, i, r, o, a, l, h, n, c),
      (this.image = { width: t, height: e }),
      (this.magFilter = a !== void 0 ? a : ae),
      (this.minFilter = l !== void 0 ? l : ae),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
Gl.prototype.isDepthTexture = !0;
class Lm extends _n {
  constructor(t, e) {
    super();
    const n = this;
    let i = null,
      r = 1,
      o = null,
      a = "local-floor",
      l = null,
      c = null,
      h = null,
      u = null,
      d = null,
      p = null;
    const g = e.getContextAttributes();
    let m = null,
      f = null;
    const _ = [],
      w = new Map(),
      C = new _e();
    C.layers.enable(1), (C.viewport = new jt());
    const T = new _e();
    T.layers.enable(2), (T.viewport = new jt());
    const y = [C, T],
      L = new kl();
    L.layers.enable(1), L.layers.enable(2);
    let I = null,
      v = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (H) {
        let W = _[H];
        return (
          W === void 0 && ((W = new Vs()), (_[H] = W)), W.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (H) {
        let W = _[H];
        return W === void 0 && ((W = new Vs()), (_[H] = W)), W.getGripSpace();
      }),
      (this.getHand = function (H) {
        let W = _[H];
        return W === void 0 && ((W = new Vs()), (_[H] = W)), W.getHandSpace();
      });
    function R(H) {
      const W = w.get(H.inputSource);
      W && W.dispatchEvent({ type: H.type, data: H.inputSource });
    }
    function B() {
      w.forEach(function (H, W) {
        H.disconnect(W);
      }),
        w.clear(),
        (I = null),
        (v = null),
        t.setRenderTarget(m),
        (d = null),
        (u = null),
        (h = null),
        (i = null),
        (f = null),
        X.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (H) {
      (r = H),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (H) {
        (a = H),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return l || o;
      }),
      (this.setReferenceSpace = function (H) {
        l = H;
      }),
      (this.getBaseLayer = function () {
        return u !== null ? u : d;
      }),
      (this.getBinding = function () {
        return h;
      }),
      (this.getFrame = function () {
        return p;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (H) {
        if (((i = H), i !== null)) {
          if (
            ((m = t.getRenderTarget()),
            i.addEventListener("select", R),
            i.addEventListener("selectstart", R),
            i.addEventListener("selectend", R),
            i.addEventListener("squeeze", R),
            i.addEventListener("squeezestart", R),
            i.addEventListener("squeezeend", R),
            i.addEventListener("end", B),
            i.addEventListener("inputsourceschange", F),
            g.xrCompatible !== !0 && (await e.makeXRCompatible()),
            i.renderState.layers === void 0 || t.capabilities.isWebGL2 === !1)
          ) {
            const W = {
              antialias: i.renderState.layers === void 0 ? g.antialias : !0,
              alpha: g.alpha,
              depth: g.depth,
              stencil: g.stencil,
              framebufferScaleFactor: r,
            };
            (d = new XRWebGLLayer(i, e, W)),
              i.updateRenderState({ baseLayer: d }),
              (f = new we(d.framebufferWidth, d.framebufferHeight, {
                format: Pe,
                type: Pn,
                encoding: t.outputEncoding,
              }));
          } else {
            let W = null,
              Q = null,
              J = null;
            g.depth &&
              ((J = g.stencil ? 35056 : 33190),
              (W = g.stencil ? pi : Cn),
              (Q = g.stencil ? ci : qi));
            const et = {
              colorFormat: t.outputEncoding === Zt ? 35907 : 32856,
              depthFormat: J,
              scaleFactor: r,
            };
            (h = new XRWebGLBinding(i, e)),
              (u = h.createProjectionLayer(et)),
              i.updateRenderState({ layers: [u] }),
              (f = new we(u.textureWidth, u.textureHeight, {
                format: Pe,
                type: Pn,
                depthTexture: new Gl(
                  u.textureWidth,
                  u.textureHeight,
                  Q,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  W
                ),
                stencilBuffer: g.stencil,
                encoding: t.outputEncoding,
                samples: g.antialias ? 4 : 0,
              }));
            const mt = t.properties.get(f);
            mt.__ignoreDepthValues = u.ignoreDepthValues;
          }
          (f.isXRRenderTarget = !0),
            this.setFoveation(1),
            (o = await i.requestReferenceSpace(a)),
            X.setContext(i),
            X.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      });
    function F(H) {
      const W = i.inputSources;
      for (let Q = 0; Q < W.length; Q++) {
        const J = W[Q].handedness === "right" ? 1 : 0;
        w.set(W[Q], _[J]);
      }
      for (let Q = 0; Q < H.removed.length; Q++) {
        const J = H.removed[Q],
          et = w.get(J);
        et &&
          (et.dispatchEvent({ type: "disconnected", data: J }), w.delete(J));
      }
      for (let Q = 0; Q < H.added.length; Q++) {
        const J = H.added[Q],
          et = w.get(J);
        et && et.dispatchEvent({ type: "connected", data: J });
      }
    }
    const ut = new E(),
      K = new E();
    function P(H, W, Q) {
      ut.setFromMatrixPosition(W.matrixWorld),
        K.setFromMatrixPosition(Q.matrixWorld);
      const J = ut.distanceTo(K),
        et = W.projectionMatrix.elements,
        mt = Q.projectionMatrix.elements,
        yt = et[14] / (et[10] - 1),
        V = et[14] / (et[10] + 1),
        zt = (et[9] + 1) / et[5],
        Et = (et[9] - 1) / et[5],
        Lt = (et[8] - 1) / et[0],
        rt = (mt[8] + 1) / mt[0],
        Dt = yt * Lt,
        j = yt * rt,
        q = J / (-Lt + rt),
        nt = q * -Lt;
      W.matrixWorld.decompose(H.position, H.quaternion, H.scale),
        H.translateX(nt),
        H.translateZ(q),
        H.matrixWorld.compose(H.position, H.quaternion, H.scale),
        H.matrixWorldInverse.copy(H.matrixWorld).invert();
      const pt = yt + q,
        lt = V + q,
        Ct = Dt - nt,
        wt = j + (J - nt),
        vt = ((zt * V) / lt) * pt,
        Xt = ((Et * V) / lt) * pt;
      H.projectionMatrix.makePerspective(Ct, wt, vt, Xt, pt, lt);
    }
    function k(H, W) {
      W === null
        ? H.matrixWorld.copy(H.matrix)
        : H.matrixWorld.multiplyMatrices(W.matrixWorld, H.matrix),
        H.matrixWorldInverse.copy(H.matrixWorld).invert();
    }
    (this.updateCamera = function (H) {
      if (i === null) return;
      (L.near = T.near = C.near = H.near),
        (L.far = T.far = C.far = H.far),
        (I !== L.near || v !== L.far) &&
          (i.updateRenderState({ depthNear: L.near, depthFar: L.far }),
          (I = L.near),
          (v = L.far));
      const W = H.parent,
        Q = L.cameras;
      k(L, W);
      for (let et = 0; et < Q.length; et++) k(Q[et], W);
      L.matrixWorld.decompose(L.position, L.quaternion, L.scale),
        H.position.copy(L.position),
        H.quaternion.copy(L.quaternion),
        H.scale.copy(L.scale),
        H.matrix.copy(L.matrix),
        H.matrixWorld.copy(L.matrixWorld);
      const J = H.children;
      for (let et = 0, mt = J.length; et < mt; et++)
        J[et].updateMatrixWorld(!0);
      Q.length === 2 ? P(L, C, T) : L.projectionMatrix.copy(C.projectionMatrix);
    }),
      (this.getCamera = function () {
        return L;
      }),
      (this.getFoveation = function () {
        if (u !== null) return u.fixedFoveation;
        if (d !== null) return d.fixedFoveation;
      }),
      (this.setFoveation = function (H) {
        u !== null && (u.fixedFoveation = H),
          d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = H);
      });
    let z = null;
    function G(H, W) {
      if (((c = W.getViewerPose(l || o)), (p = W), c !== null)) {
        const J = c.views;
        d !== null &&
          (t.setRenderTargetFramebuffer(f, d.framebuffer),
          t.setRenderTarget(f));
        let et = !1;
        J.length !== L.cameras.length && ((L.cameras.length = 0), (et = !0));
        for (let mt = 0; mt < J.length; mt++) {
          const yt = J[mt];
          let V = null;
          if (d !== null) V = d.getViewport(yt);
          else {
            const Et = h.getViewSubImage(u, yt);
            (V = Et.viewport),
              mt === 0 &&
                (t.setRenderTargetTextures(
                  f,
                  Et.colorTexture,
                  u.ignoreDepthValues ? void 0 : Et.depthStencilTexture
                ),
                t.setRenderTarget(f));
          }
          const zt = y[mt];
          zt.matrix.fromArray(yt.transform.matrix),
            zt.projectionMatrix.fromArray(yt.projectionMatrix),
            zt.viewport.set(V.x, V.y, V.width, V.height),
            mt === 0 && L.matrix.copy(zt.matrix),
            et === !0 && L.cameras.push(zt);
        }
      }
      const Q = i.inputSources;
      for (let J = 0; J < _.length; J++) {
        const et = Q[J],
          mt = w.get(et);
        mt !== void 0 && mt.update(et, W, l || o);
      }
      z && z(H, W), (p = null);
    }
    const X = new Fl();
    X.setAnimationLoop(G),
      (this.setAnimationLoop = function (H) {
        z = H;
      }),
      (this.dispose = function () {});
  }
}
function Rm(s, t) {
  function e(m, f) {
    m.fogColor.value.copy(f.color),
      f.isFog
        ? ((m.fogNear.value = f.near), (m.fogFar.value = f.far))
        : f.isFogExp2 && (m.fogDensity.value = f.density);
  }
  function n(m, f, _, w, C) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial
      ? i(m, f)
      : f.isMeshToonMaterial
      ? (i(m, f), h(m, f))
      : f.isMeshPhongMaterial
      ? (i(m, f), c(m, f))
      : f.isMeshStandardMaterial
      ? (i(m, f), u(m, f), f.isMeshPhysicalMaterial && d(m, f, C))
      : f.isMeshMatcapMaterial
      ? (i(m, f), p(m, f))
      : f.isMeshDepthMaterial
      ? i(m, f)
      : f.isMeshDistanceMaterial
      ? (i(m, f), g(m, f))
      : f.isMeshNormalMaterial
      ? i(m, f)
      : f.isLineBasicMaterial
      ? (r(m, f), f.isLineDashedMaterial && o(m, f))
      : f.isPointsMaterial
      ? a(m, f, _, w)
      : f.isSpriteMaterial
      ? l(m, f)
      : f.isShadowMaterial
      ? (m.color.value.copy(f.color), (m.opacity.value = f.opacity))
      : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function i(m, f) {
    (m.opacity.value = f.opacity),
      f.color && m.diffuse.value.copy(f.color),
      f.emissive &&
        m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),
      f.map && (m.map.value = f.map),
      f.alphaMap && (m.alphaMap.value = f.alphaMap),
      f.bumpMap &&
        ((m.bumpMap.value = f.bumpMap),
        (m.bumpScale.value = f.bumpScale),
        f.side === De && (m.bumpScale.value *= -1)),
      f.displacementMap &&
        ((m.displacementMap.value = f.displacementMap),
        (m.displacementScale.value = f.displacementScale),
        (m.displacementBias.value = f.displacementBias)),
      f.emissiveMap && (m.emissiveMap.value = f.emissiveMap),
      f.normalMap &&
        ((m.normalMap.value = f.normalMap),
        m.normalScale.value.copy(f.normalScale),
        f.side === De && m.normalScale.value.negate()),
      f.specularMap && (m.specularMap.value = f.specularMap),
      f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
    const _ = t.get(f).envMap;
    if (
      (_ &&
        ((m.envMap.value = _),
        (m.flipEnvMap.value =
          _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1),
        (m.reflectivity.value = f.reflectivity),
        (m.ior.value = f.ior),
        (m.refractionRatio.value = f.refractionRatio)),
      f.lightMap)
    ) {
      m.lightMap.value = f.lightMap;
      const T = s.physicallyCorrectLights !== !0 ? Math.PI : 1;
      m.lightMapIntensity.value = f.lightMapIntensity * T;
    }
    f.aoMap &&
      ((m.aoMap.value = f.aoMap), (m.aoMapIntensity.value = f.aoMapIntensity));
    let w;
    f.map
      ? (w = f.map)
      : f.specularMap
      ? (w = f.specularMap)
      : f.displacementMap
      ? (w = f.displacementMap)
      : f.normalMap
      ? (w = f.normalMap)
      : f.bumpMap
      ? (w = f.bumpMap)
      : f.roughnessMap
      ? (w = f.roughnessMap)
      : f.metalnessMap
      ? (w = f.metalnessMap)
      : f.alphaMap
      ? (w = f.alphaMap)
      : f.emissiveMap
      ? (w = f.emissiveMap)
      : f.clearcoatMap
      ? (w = f.clearcoatMap)
      : f.clearcoatNormalMap
      ? (w = f.clearcoatNormalMap)
      : f.clearcoatRoughnessMap
      ? (w = f.clearcoatRoughnessMap)
      : f.specularIntensityMap
      ? (w = f.specularIntensityMap)
      : f.specularColorMap
      ? (w = f.specularColorMap)
      : f.transmissionMap
      ? (w = f.transmissionMap)
      : f.thicknessMap
      ? (w = f.thicknessMap)
      : f.sheenColorMap
      ? (w = f.sheenColorMap)
      : f.sheenRoughnessMap && (w = f.sheenRoughnessMap),
      w !== void 0 &&
        (w.isWebGLRenderTarget && (w = w.texture),
        w.matrixAutoUpdate === !0 && w.updateMatrix(),
        m.uvTransform.value.copy(w.matrix));
    let C;
    f.aoMap ? (C = f.aoMap) : f.lightMap && (C = f.lightMap),
      C !== void 0 &&
        (C.isWebGLRenderTarget && (C = C.texture),
        C.matrixAutoUpdate === !0 && C.updateMatrix(),
        m.uv2Transform.value.copy(C.matrix));
  }
  function r(m, f) {
    m.diffuse.value.copy(f.color), (m.opacity.value = f.opacity);
  }
  function o(m, f) {
    (m.dashSize.value = f.dashSize),
      (m.totalSize.value = f.dashSize + f.gapSize),
      (m.scale.value = f.scale);
  }
  function a(m, f, _, w) {
    m.diffuse.value.copy(f.color),
      (m.opacity.value = f.opacity),
      (m.size.value = f.size * _),
      (m.scale.value = w * 0.5),
      f.map && (m.map.value = f.map),
      f.alphaMap && (m.alphaMap.value = f.alphaMap),
      f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
    let C;
    f.map ? (C = f.map) : f.alphaMap && (C = f.alphaMap),
      C !== void 0 &&
        (C.matrixAutoUpdate === !0 && C.updateMatrix(),
        m.uvTransform.value.copy(C.matrix));
  }
  function l(m, f) {
    m.diffuse.value.copy(f.color),
      (m.opacity.value = f.opacity),
      (m.rotation.value = f.rotation),
      f.map && (m.map.value = f.map),
      f.alphaMap && (m.alphaMap.value = f.alphaMap),
      f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
    let _;
    f.map ? (_ = f.map) : f.alphaMap && (_ = f.alphaMap),
      _ !== void 0 &&
        (_.matrixAutoUpdate === !0 && _.updateMatrix(),
        m.uvTransform.value.copy(_.matrix));
  }
  function c(m, f) {
    m.specular.value.copy(f.specular),
      (m.shininess.value = Math.max(f.shininess, 1e-4));
  }
  function h(m, f) {
    f.gradientMap && (m.gradientMap.value = f.gradientMap);
  }
  function u(m, f) {
    (m.roughness.value = f.roughness),
      (m.metalness.value = f.metalness),
      f.roughnessMap && (m.roughnessMap.value = f.roughnessMap),
      f.metalnessMap && (m.metalnessMap.value = f.metalnessMap),
      t.get(f).envMap && (m.envMapIntensity.value = f.envMapIntensity);
  }
  function d(m, f, _) {
    (m.ior.value = f.ior),
      f.sheen > 0 &&
        (m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),
        (m.sheenRoughness.value = f.sheenRoughness),
        f.sheenColorMap && (m.sheenColorMap.value = f.sheenColorMap),
        f.sheenRoughnessMap &&
          (m.sheenRoughnessMap.value = f.sheenRoughnessMap)),
      f.clearcoat > 0 &&
        ((m.clearcoat.value = f.clearcoat),
        (m.clearcoatRoughness.value = f.clearcoatRoughness),
        f.clearcoatMap && (m.clearcoatMap.value = f.clearcoatMap),
        f.clearcoatRoughnessMap &&
          (m.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap),
        f.clearcoatNormalMap &&
          (m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),
          (m.clearcoatNormalMap.value = f.clearcoatNormalMap),
          f.side === De && m.clearcoatNormalScale.value.negate())),
      f.transmission > 0 &&
        ((m.transmission.value = f.transmission),
        (m.transmissionSamplerMap.value = _.texture),
        m.transmissionSamplerSize.value.set(_.width, _.height),
        f.transmissionMap && (m.transmissionMap.value = f.transmissionMap),
        (m.thickness.value = f.thickness),
        f.thicknessMap && (m.thicknessMap.value = f.thicknessMap),
        (m.attenuationDistance.value = f.attenuationDistance),
        m.attenuationColor.value.copy(f.attenuationColor)),
      (m.specularIntensity.value = f.specularIntensity),
      m.specularColor.value.copy(f.specularColor),
      f.specularIntensityMap &&
        (m.specularIntensityMap.value = f.specularIntensityMap),
      f.specularColorMap && (m.specularColorMap.value = f.specularColorMap);
  }
  function p(m, f) {
    f.matcap && (m.matcap.value = f.matcap);
  }
  function g(m, f) {
    m.referencePosition.value.copy(f.referencePosition),
      (m.nearDistance.value = f.nearDistance),
      (m.farDistance.value = f.farDistance);
  }
  return { refreshFogUniforms: e, refreshMaterialUniforms: n };
}
function Pm() {
  const s = Zi("canvas");
  return (s.style.display = "block"), s;
}
function qt(s = {}) {
  const t = s.canvas !== void 0 ? s.canvas : Pm(),
    e = s.context !== void 0 ? s.context : null,
    n = s.depth !== void 0 ? s.depth : !0,
    i = s.stencil !== void 0 ? s.stencil : !0,
    r = s.antialias !== void 0 ? s.antialias : !1,
    o = s.premultipliedAlpha !== void 0 ? s.premultipliedAlpha : !0,
    a = s.preserveDrawingBuffer !== void 0 ? s.preserveDrawingBuffer : !1,
    l = s.powerPreference !== void 0 ? s.powerPreference : "default",
    c =
      s.failIfMajorPerformanceCaveat !== void 0
        ? s.failIfMajorPerformanceCaveat
        : !1;
  let h;
  e !== null
    ? (h = e.getContextAttributes().alpha)
    : (h = s.alpha !== void 0 ? s.alpha : !1);
  let u = null,
    d = null;
  const p = [],
    g = [];
  (this.domElement = t),
    (this.debug = { checkShaderErrors: !0 }),
    (this.autoClear = !0),
    (this.autoClearColor = !0),
    (this.autoClearDepth = !0),
    (this.autoClearStencil = !0),
    (this.sortObjects = !0),
    (this.clippingPlanes = []),
    (this.localClippingEnabled = !1),
    (this.outputEncoding = pn),
    (this.physicallyCorrectLights = !1),
    (this.toneMapping = tn),
    (this.toneMappingExposure = 1);
  const m = this;
  let f = !1,
    _ = 0,
    w = 0,
    C = null,
    T = -1,
    y = null;
  const L = new jt(),
    I = new jt();
  let v = null,
    R = t.width,
    B = t.height,
    F = 1,
    ut = null,
    K = null;
  const P = new jt(0, 0, R, B),
    k = new jt(0, 0, R, B);
  let z = !1;
  const G = new es();
  let X = !1,
    H = !1,
    W = null;
  const Q = new bt(),
    J = new Z(),
    et = new E(),
    mt = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };
  function yt() {
    return C === null ? F : 1;
  }
  let V = e;
  function zt(b, D) {
    for (let U = 0; U < b.length; U++) {
      const N = b[U],
        Y = t.getContext(N, D);
      if (Y !== null) return Y;
    }
    return null;
  }
  try {
    const b = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: r,
      premultipliedAlpha: o,
      preserveDrawingBuffer: a,
      powerPreference: l,
      failIfMajorPerformanceCaveat: c,
    };
    if (
      ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${ho}`),
      t.addEventListener("webglcontextlost", A, !1),
      t.addEventListener("webglcontextrestored", st, !1),
      V === null)
    ) {
      const D = ["webgl2", "webgl", "experimental-webgl"];
      if ((m.isWebGL1Renderer === !0 && D.shift(), (V = zt(D, b)), V === null))
        throw zt(D)
          ? new Error(
              "Error creating WebGL context with your selected attributes."
            )
          : new Error("Error creating WebGL context.");
    }
    V.getShaderPrecisionFormat === void 0 &&
      (V.getShaderPrecisionFormat = function () {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
  } catch (b) {
    throw (console.error("THREE.WebGLRenderer: " + b.message), b);
  }
  let Et,
    Lt,
    rt,
    Dt,
    j,
    q,
    nt,
    pt,
    lt,
    Ct,
    wt,
    vt,
    Xt,
    Ut,
    S,
    x,
    O,
    $,
    ct,
    ft,
    Mt,
    M,
    tt;
  function gt() {
    (Et = new Yf(V)),
      (Lt = new kf(V, Et, s)),
      Et.init(Lt),
      (M = new Am(V, Et, Lt)),
      (rt = new Em(V, Et, Lt)),
      (Dt = new $f(V)),
      (j = new pm()),
      (q = new Tm(V, Et, rt, j, Lt, M, Dt)),
      (nt = new Wf(m)),
      (pt = new jf(m)),
      (lt = new hu(V, Lt)),
      (tt = new Hf(V, Et, lt, Lt)),
      (Ct = new Zf(V, lt, Dt, tt)),
      (wt = new ep(V, Ct, lt, Dt)),
      (ct = new tp(V, Lt, q)),
      (x = new Gf(j)),
      (vt = new fm(m, nt, pt, Et, Lt, tt, x)),
      (Xt = new Rm(m, j)),
      (Ut = new gm()),
      (S = new bm(Et, Lt)),
      ($ = new Uf(m, nt, rt, wt, h, o)),
      (O = new Vl(m, wt, Lt)),
      (ft = new Vf(V, Et, Dt, Lt)),
      (Mt = new Jf(V, Et, Dt, Lt)),
      (Dt.programs = vt.programs),
      (m.capabilities = Lt),
      (m.extensions = Et),
      (m.properties = j),
      (m.renderLists = Ut),
      (m.shadowMap = O),
      (m.state = rt),
      (m.info = Dt);
  }
  gt();
  const at = new Lm(m, V);
  (this.xr = at),
    (this.getContext = function () {
      return V;
    }),
    (this.getContextAttributes = function () {
      return V.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      const b = Et.get("WEBGL_lose_context");
      b && b.loseContext();
    }),
    (this.forceContextRestore = function () {
      const b = Et.get("WEBGL_lose_context");
      b && b.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return F;
    }),
    (this.setPixelRatio = function (b) {
      b !== void 0 && ((F = b), this.setSize(R, B, !1));
    }),
    (this.getSize = function (b) {
      return b.set(R, B);
    }),
    (this.setSize = function (b, D, U) {
      if (at.isPresenting) {
        console.warn(
          "THREE.WebGLRenderer: Can't change size while VR device is presenting."
        );
        return;
      }
      (R = b),
        (B = D),
        (t.width = Math.floor(b * F)),
        (t.height = Math.floor(D * F)),
        U !== !1 && ((t.style.width = b + "px"), (t.style.height = D + "px")),
        this.setViewport(0, 0, b, D);
    }),
    (this.getDrawingBufferSize = function (b) {
      return b.set(R * F, B * F).floor();
    }),
    (this.setDrawingBufferSize = function (b, D, U) {
      (R = b),
        (B = D),
        (F = U),
        (t.width = Math.floor(b * U)),
        (t.height = Math.floor(D * U)),
        this.setViewport(0, 0, b, D);
    }),
    (this.getCurrentViewport = function (b) {
      return b.copy(L);
    }),
    (this.getViewport = function (b) {
      return b.copy(P);
    }),
    (this.setViewport = function (b, D, U, N) {
      b.isVector4 ? P.set(b.x, b.y, b.z, b.w) : P.set(b, D, U, N),
        rt.viewport(L.copy(P).multiplyScalar(F).floor());
    }),
    (this.getScissor = function (b) {
      return b.copy(k);
    }),
    (this.setScissor = function (b, D, U, N) {
      b.isVector4 ? k.set(b.x, b.y, b.z, b.w) : k.set(b, D, U, N),
        rt.scissor(I.copy(k).multiplyScalar(F).floor());
    }),
    (this.getScissorTest = function () {
      return z;
    }),
    (this.setScissorTest = function (b) {
      rt.setScissorTest((z = b));
    }),
    (this.setOpaqueSort = function (b) {
      ut = b;
    }),
    (this.setTransparentSort = function (b) {
      K = b;
    }),
    (this.getClearColor = function (b) {
      return b.copy($.getClearColor());
    }),
    (this.setClearColor = function () {
      $.setClearColor.apply($, arguments);
    }),
    (this.getClearAlpha = function () {
      return $.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      $.setClearAlpha.apply($, arguments);
    }),
    (this.clear = function (b = !0, D = !0, U = !0) {
      let N = 0;
      b && (N |= 16384), D && (N |= 256), U && (N |= 1024), V.clear(N);
    }),
    (this.clearColor = function () {
      this.clear(!0, !1, !1);
    }),
    (this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }),
    (this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }),
    (this.dispose = function () {
      t.removeEventListener("webglcontextlost", A, !1),
        t.removeEventListener("webglcontextrestored", st, !1),
        Ut.dispose(),
        S.dispose(),
        j.dispose(),
        nt.dispose(),
        pt.dispose(),
        wt.dispose(),
        tt.dispose(),
        vt.dispose(),
        at.dispose(),
        at.removeEventListener("sessionstart", Tt),
        at.removeEventListener("sessionend", Vt),
        W && (W.dispose(), (W = null)),
        Nt.stop();
    });
  function A(b) {
    b.preventDefault(),
      console.log("THREE.WebGLRenderer: Context Lost."),
      (f = !0);
  }
  function st() {
    console.log("THREE.WebGLRenderer: Context Restored."), (f = !1);
    const b = Dt.autoReset,
      D = O.enabled,
      U = O.autoUpdate,
      N = O.needsUpdate,
      Y = O.type;
    gt(),
      (Dt.autoReset = b),
      (O.enabled = D),
      (O.autoUpdate = U),
      (O.needsUpdate = N),
      (O.type = Y);
  }
  function it(b) {
    const D = b.target;
    D.removeEventListener("dispose", it), St(D);
  }
  function St(b) {
    dt(b), j.remove(b);
  }
  function dt(b) {
    const D = j.get(b).programs;
    D !== void 0 &&
      (D.forEach(function (U) {
        vt.releaseProgram(U);
      }),
      b.isShaderMaterial && vt.releaseShaderCache(b));
  }
  (this.renderBufferDirect = function (b, D, U, N, Y, At) {
    D === null && (D = mt);
    const Rt = Y.isMesh && Y.matrixWorld.determinant() < 0,
      It = Sc(b, D, U, N, Y);
    rt.setMaterial(N, Rt);
    let Pt = U.index;
    const kt = U.attributes.position;
    if (Pt === null) {
      if (kt === void 0 || kt.count === 0) return;
    } else if (Pt.count === 0) return;
    let Bt = 1;
    N.wireframe === !0 && ((Pt = Ct.getWireframeAttribute(U)), (Bt = 2)),
      tt.setup(Y, N, It, U, Pt);
    let Ot,
      Qt = ft;
    Pt !== null && ((Ot = lt.get(Pt)), (Qt = Mt), Qt.setIndex(Ot));
    const vn = Pt !== null ? Pt.count : kt.count,
      Fn = U.drawRange.start * Bt,
      Nn = U.drawRange.count * Bt,
      Oe = At !== null ? At.start * Bt : 0,
      Ht = At !== null ? At.count * Bt : 1 / 0,
      Bn = Math.max(Fn, Oe),
      te = Math.min(vn, Fn + Nn, Oe + Ht) - 1,
      Ue = Math.max(0, te - Bn + 1);
    if (Ue !== 0) {
      if (Y.isMesh)
        N.wireframe === !0
          ? (rt.setLineWidth(N.wireframeLinewidth * yt()), Qt.setMode(1))
          : Qt.setMode(4);
      else if (Y.isLine) {
        let en = N.linewidth;
        en === void 0 && (en = 1),
          rt.setLineWidth(en * yt()),
          Y.isLineSegments
            ? Qt.setMode(1)
            : Y.isLineLoop
            ? Qt.setMode(2)
            : Qt.setMode(3);
      } else Y.isPoints ? Qt.setMode(0) : Y.isSprite && Qt.setMode(4);
      if (Y.isInstancedMesh) Qt.renderInstances(Bn, Ue, Y.count);
      else if (U.isInstancedBufferGeometry) {
        const en = Math.min(U.instanceCount, U._maxInstanceCount);
        Qt.renderInstances(Bn, Ue, en);
      } else Qt.render(Bn, Ue);
    }
  }),
    (this.compile = function (b, D) {
      (d = S.get(b)),
        d.init(),
        g.push(d),
        b.traverseVisible(function (U) {
          U.isLight &&
            U.layers.test(D.layers) &&
            (d.pushLight(U), U.castShadow && d.pushShadow(U));
        }),
        d.setupLights(m.physicallyCorrectLights),
        b.traverse(function (U) {
          const N = U.material;
          if (N)
            if (Array.isArray(N))
              for (let Y = 0; Y < N.length; Y++) {
                const At = N[Y];
                as(At, b, U);
              }
            else as(N, b, U);
        }),
        g.pop(),
        (d = null);
    });
  let _t = null;
  function ot(b) {
    _t && _t(b);
  }
  function Tt() {
    Nt.stop();
  }
  function Vt() {
    Nt.start();
  }
  const Nt = new Fl();
  Nt.setAnimationLoop(ot),
    typeof self != "undefined" && Nt.setContext(self),
    (this.setAnimationLoop = function (b) {
      (_t = b), at.setAnimationLoop(b), b === null ? Nt.stop() : Nt.start();
    }),
    at.addEventListener("sessionstart", Tt),
    at.addEventListener("sessionend", Vt),
    (this.render = function (b, D) {
      if (D !== void 0 && D.isCamera !== !0) {
        console.error(
          "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
        );
        return;
      }
      if (f === !0) return;
      b.autoUpdate === !0 && b.updateMatrixWorld(),
        D.parent === null && D.updateMatrixWorld(),
        at.enabled === !0 &&
          at.isPresenting === !0 &&
          (at.cameraAutoUpdate === !0 && at.updateCamera(D),
          (D = at.getCamera())),
        b.isScene === !0 && b.onBeforeRender(m, b, D, C),
        (d = S.get(b, g.length)),
        d.init(),
        g.push(d),
        Q.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse),
        G.setFromProjectionMatrix(Q),
        (H = this.localClippingEnabled),
        (X = x.init(this.clippingPlanes, H, D)),
        (u = Ut.get(b, p.length)),
        u.init(),
        p.push(u),
        Be(b, D, 0, m.sortObjects),
        u.finish(),
        m.sortObjects === !0 && u.sort(ut, K),
        X === !0 && x.beginShadows();
      const U = d.state.shadowsArray;
      if (
        (O.render(U, b, D),
        X === !0 && x.endShadows(),
        this.info.autoReset === !0 && this.info.reset(),
        $.render(u, b),
        d.setupLights(m.physicallyCorrectLights),
        D.isArrayCamera)
      ) {
        const N = D.cameras;
        for (let Y = 0, At = N.length; Y < At; Y++) {
          const Rt = N[Y];
          ze(u, b, Rt, Rt.viewport);
        }
      } else ze(u, b, D);
      C !== null &&
        (q.updateMultisampleRenderTarget(C), q.updateRenderTargetMipmap(C)),
        b.isScene === !0 && b.onAfterRender(m, b, D),
        tt.resetDefaultState(),
        (T = -1),
        (y = null),
        g.pop(),
        g.length > 0 ? (d = g[g.length - 1]) : (d = null),
        p.pop(),
        p.length > 0 ? (u = p[p.length - 1]) : (u = null);
    });
  function Be(b, D, U, N) {
    if (b.visible === !1) return;
    if (b.layers.test(D.layers)) {
      if (b.isGroup) U = b.renderOrder;
      else if (b.isLOD) b.autoUpdate === !0 && b.update(D);
      else if (b.isLight) d.pushLight(b), b.castShadow && d.pushShadow(b);
      else if (b.isSprite) {
        if (!b.frustumCulled || G.intersectsSprite(b)) {
          N && et.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Q);
          const Rt = wt.update(b),
            It = b.material;
          It.visible && u.push(b, Rt, It, U, et.z, null);
        }
      } else if (
        (b.isMesh || b.isLine || b.isPoints) &&
        (b.isSkinnedMesh &&
          b.skeleton.frame !== Dt.render.frame &&
          (b.skeleton.update(), (b.skeleton.frame = Dt.render.frame)),
        !b.frustumCulled || G.intersectsObject(b))
      ) {
        N && et.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Q);
        const Rt = wt.update(b),
          It = b.material;
        if (Array.isArray(It)) {
          const Pt = Rt.groups;
          for (let kt = 0, Bt = Pt.length; kt < Bt; kt++) {
            const Ot = Pt[kt],
              Qt = It[Ot.materialIndex];
            Qt && Qt.visible && u.push(b, Rt, Qt, U, et.z, Ot);
          }
        } else It.visible && u.push(b, Rt, It, U, et.z, null);
      }
    }
    const At = b.children;
    for (let Rt = 0, It = At.length; Rt < It; Rt++) Be(At[Rt], D, U, N);
  }
  function ze(b, D, U, N) {
    const Y = b.opaque,
      At = b.transmissive,
      Rt = b.transparent;
    d.setupLightsView(U),
      At.length > 0 && bc(Y, D, U),
      N && rt.viewport(L.copy(N)),
      Y.length > 0 && ar(Y, D, U),
      At.length > 0 && ar(At, D, U),
      Rt.length > 0 && ar(Rt, D, U),
      rt.buffers.depth.setTest(!0),
      rt.buffers.depth.setMask(!0),
      rt.buffers.color.setMask(!0),
      rt.setPolygonOffset(!1);
  }
  function bc(b, D, U) {
    const N = Lt.isWebGL2;
    W === null &&
      (W = new we(1, 1, {
        generateMipmaps: !0,
        type: Et.has("EXT_color_buffer_half_float") ? Xi : Pn,
        minFilter: Kr,
        samples: N && r === !0 ? 4 : 0,
      })),
      m.getDrawingBufferSize(J),
      N ? W.setSize(J.x, J.y) : W.setSize(jr(J.x), jr(J.y));
    const Y = m.getRenderTarget();
    m.setRenderTarget(W), m.clear();
    const At = m.toneMapping;
    (m.toneMapping = tn),
      ar(b, D, U),
      (m.toneMapping = At),
      q.updateMultisampleRenderTarget(W),
      q.updateRenderTargetMipmap(W),
      m.setRenderTarget(Y);
  }
  function ar(b, D, U) {
    const N = D.isScene === !0 ? D.overrideMaterial : null;
    for (let Y = 0, At = b.length; Y < At; Y++) {
      const Rt = b[Y],
        It = Rt.object,
        Pt = Rt.geometry,
        kt = N === null ? Rt.material : N,
        Bt = Rt.group;
      It.layers.test(U.layers) && wc(It, D, U, Pt, kt, Bt);
    }
  }
  function wc(b, D, U, N, Y, At) {
    b.onBeforeRender(m, D, U, N, Y, At),
      b.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, b.matrixWorld),
      b.normalMatrix.getNormalMatrix(b.modelViewMatrix),
      Y.onBeforeRender(m, D, U, N, b, At),
      Y.transparent === !0 && Y.side === ui
        ? ((Y.side = De),
          (Y.needsUpdate = !0),
          m.renderBufferDirect(U, D, N, Y, b, At),
          (Y.side = Wi),
          (Y.needsUpdate = !0),
          m.renderBufferDirect(U, D, N, Y, b, At),
          (Y.side = ui))
        : m.renderBufferDirect(U, D, N, Y, b, At),
      b.onAfterRender(m, D, U, N, Y, At);
  }
  function as(b, D, U) {
    D.isScene !== !0 && (D = mt);
    const N = j.get(b),
      Y = d.state.lights,
      At = d.state.shadowsArray,
      Rt = Y.state.version,
      It = vt.getParameters(b, Y.state, At, D, U),
      Pt = vt.getProgramCacheKey(It);
    let kt = N.programs;
    (N.environment = b.isMeshStandardMaterial ? D.environment : null),
      (N.fog = D.fog),
      (N.envMap = (b.isMeshStandardMaterial ? pt : nt).get(
        b.envMap || N.environment
      )),
      kt === void 0 &&
        (b.addEventListener("dispose", it),
        (kt = new Map()),
        (N.programs = kt));
    let Bt = kt.get(Pt);
    if (Bt !== void 0) {
      if (N.currentProgram === Bt && N.lightsStateVersion === Rt)
        return Oo(b, It), Bt;
    } else
      (It.uniforms = vt.getUniforms(b)),
        b.onBuild(U, It, m),
        b.onBeforeCompile(It, m),
        (Bt = vt.acquireProgram(It, Pt)),
        kt.set(Pt, Bt),
        (N.uniforms = It.uniforms);
    const Ot = N.uniforms;
    ((!b.isShaderMaterial && !b.isRawShaderMaterial) || b.clipping === !0) &&
      (Ot.clippingPlanes = x.uniform),
      Oo(b, It),
      (N.needsLights = Tc(b)),
      (N.lightsStateVersion = Rt),
      N.needsLights &&
        ((Ot.ambientLightColor.value = Y.state.ambient),
        (Ot.lightProbe.value = Y.state.probe),
        (Ot.directionalLights.value = Y.state.directional),
        (Ot.directionalLightShadows.value = Y.state.directionalShadow),
        (Ot.spotLights.value = Y.state.spot),
        (Ot.spotLightShadows.value = Y.state.spotShadow),
        (Ot.rectAreaLights.value = Y.state.rectArea),
        (Ot.ltc_1.value = Y.state.rectAreaLTC1),
        (Ot.ltc_2.value = Y.state.rectAreaLTC2),
        (Ot.pointLights.value = Y.state.point),
        (Ot.pointLightShadows.value = Y.state.pointShadow),
        (Ot.hemisphereLights.value = Y.state.hemi),
        (Ot.directionalShadowMap.value = Y.state.directionalShadowMap),
        (Ot.directionalShadowMatrix.value = Y.state.directionalShadowMatrix),
        (Ot.spotShadowMap.value = Y.state.spotShadowMap),
        (Ot.spotShadowMatrix.value = Y.state.spotShadowMatrix),
        (Ot.pointShadowMap.value = Y.state.pointShadowMap),
        (Ot.pointShadowMatrix.value = Y.state.pointShadowMatrix));
    const Qt = Bt.getUniforms(),
      vn = dn.seqWithValue(Qt.seq, Ot);
    return (N.currentProgram = Bt), (N.uniformsList = vn), Bt;
  }
  function Oo(b, D) {
    const U = j.get(b);
    (U.outputEncoding = D.outputEncoding),
      (U.instancing = D.instancing),
      (U.skinning = D.skinning),
      (U.morphTargets = D.morphTargets),
      (U.morphNormals = D.morphNormals),
      (U.morphColors = D.morphColors),
      (U.morphTargetsCount = D.morphTargetsCount),
      (U.numClippingPlanes = D.numClippingPlanes),
      (U.numIntersection = D.numClipIntersection),
      (U.vertexAlphas = D.vertexAlphas),
      (U.vertexTangents = D.vertexTangents),
      (U.toneMapping = D.toneMapping);
  }
  function Sc(b, D, U, N, Y) {
    D.isScene !== !0 && (D = mt), q.resetTextureUnits();
    const At = D.fog,
      Rt = N.isMeshStandardMaterial ? D.environment : null,
      It =
        C === null
          ? m.outputEncoding
          : C.isXRRenderTarget === !0
          ? C.texture.encoding
          : pn,
      Pt = (N.isMeshStandardMaterial ? pt : nt).get(N.envMap || Rt),
      kt =
        N.vertexColors === !0 &&
        !!U.attributes.color &&
        U.attributes.color.itemSize === 4,
      Bt = !!N.normalMap && !!U.attributes.tangent,
      Ot = !!U.morphAttributes.position,
      Qt = !!U.morphAttributes.normal,
      vn = !!U.morphAttributes.color,
      Fn = N.toneMapped ? m.toneMapping : tn,
      Nn =
        U.morphAttributes.position ||
        U.morphAttributes.normal ||
        U.morphAttributes.color,
      Oe = Nn !== void 0 ? Nn.length : 0,
      Ht = j.get(N),
      Bn = d.state.lights;
    if (X === !0 && (H === !0 || b !== y)) {
      const He = b === y && N.id === T;
      x.setState(N, b, He);
    }
    let te = !1;
    N.version === Ht.__version
      ? ((Ht.needsLights && Ht.lightsStateVersion !== Bn.state.version) ||
          Ht.outputEncoding !== It ||
          (Y.isInstancedMesh && Ht.instancing === !1) ||
          (!Y.isInstancedMesh && Ht.instancing === !0) ||
          (Y.isSkinnedMesh && Ht.skinning === !1) ||
          (!Y.isSkinnedMesh && Ht.skinning === !0) ||
          Ht.envMap !== Pt ||
          (N.fog === !0 && Ht.fog !== At) ||
          (Ht.numClippingPlanes !== void 0 &&
            (Ht.numClippingPlanes !== x.numPlanes ||
              Ht.numIntersection !== x.numIntersection)) ||
          Ht.vertexAlphas !== kt ||
          Ht.vertexTangents !== Bt ||
          Ht.morphTargets !== Ot ||
          Ht.morphNormals !== Qt ||
          Ht.morphColors !== vn ||
          Ht.toneMapping !== Fn ||
          (Lt.isWebGL2 === !0 && Ht.morphTargetsCount !== Oe)) &&
        (te = !0)
      : ((te = !0), (Ht.__version = N.version));
    let Ue = Ht.currentProgram;
    te === !0 && (Ue = as(N, D, Y));
    let en = !1,
      Ai = !1,
      ls = !1;
    const me = Ue.getUniforms(),
      Ci = Ht.uniforms;
    if (
      (rt.useProgram(Ue.program) && ((en = !0), (Ai = !0), (ls = !0)),
      N.id !== T && ((T = N.id), (Ai = !0)),
      en || y !== b)
    ) {
      if (
        (me.setValue(V, "projectionMatrix", b.projectionMatrix),
        Lt.logarithmicDepthBuffer &&
          me.setValue(V, "logDepthBufFC", 2 / (Math.log(b.far + 1) / Math.LN2)),
        y !== b && ((y = b), (Ai = !0), (ls = !0)),
        N.isShaderMaterial ||
          N.isMeshPhongMaterial ||
          N.isMeshToonMaterial ||
          N.isMeshStandardMaterial ||
          N.envMap)
      ) {
        const He = me.map.cameraPosition;
        He !== void 0 &&
          He.setValue(V, et.setFromMatrixPosition(b.matrixWorld));
      }
      (N.isMeshPhongMaterial ||
        N.isMeshToonMaterial ||
        N.isMeshLambertMaterial ||
        N.isMeshBasicMaterial ||
        N.isMeshStandardMaterial ||
        N.isShaderMaterial) &&
        me.setValue(V, "isOrthographic", b.isOrthographicCamera === !0),
        (N.isMeshPhongMaterial ||
          N.isMeshToonMaterial ||
          N.isMeshLambertMaterial ||
          N.isMeshBasicMaterial ||
          N.isMeshStandardMaterial ||
          N.isShaderMaterial ||
          N.isShadowMaterial ||
          Y.isSkinnedMesh) &&
          me.setValue(V, "viewMatrix", b.matrixWorldInverse);
    }
    if (Y.isSkinnedMesh) {
      me.setOptional(V, Y, "bindMatrix"),
        me.setOptional(V, Y, "bindMatrixInverse");
      const He = Y.skeleton;
      He &&
        (Lt.floatVertexTextures
          ? (He.boneTexture === null && He.computeBoneTexture(),
            me.setValue(V, "boneTexture", He.boneTexture, q),
            me.setValue(V, "boneTextureSize", He.boneTextureSize))
          : console.warn(
              "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
            ));
    }
    const cs = U.morphAttributes;
    return (
      (cs.position !== void 0 ||
        cs.normal !== void 0 ||
        (cs.color !== void 0 && Lt.isWebGL2 === !0)) &&
        ct.update(Y, U, N, Ue),
      (Ai || Ht.receiveShadow !== Y.receiveShadow) &&
        ((Ht.receiveShadow = Y.receiveShadow),
        me.setValue(V, "receiveShadow", Y.receiveShadow)),
      Ai &&
        (me.setValue(V, "toneMappingExposure", m.toneMappingExposure),
        Ht.needsLights && Ec(Ci, ls),
        At && N.fog === !0 && Xt.refreshFogUniforms(Ci, At),
        Xt.refreshMaterialUniforms(Ci, N, F, B, W),
        dn.upload(V, Ht.uniformsList, Ci, q)),
      N.isShaderMaterial &&
        N.uniformsNeedUpdate === !0 &&
        (dn.upload(V, Ht.uniformsList, Ci, q), (N.uniformsNeedUpdate = !1)),
      N.isSpriteMaterial && me.setValue(V, "center", Y.center),
      me.setValue(V, "modelViewMatrix", Y.modelViewMatrix),
      me.setValue(V, "normalMatrix", Y.normalMatrix),
      me.setValue(V, "modelMatrix", Y.matrixWorld),
      Ue
    );
  }
  function Ec(b, D) {
    (b.ambientLightColor.needsUpdate = D),
      (b.lightProbe.needsUpdate = D),
      (b.directionalLights.needsUpdate = D),
      (b.directionalLightShadows.needsUpdate = D),
      (b.pointLights.needsUpdate = D),
      (b.pointLightShadows.needsUpdate = D),
      (b.spotLights.needsUpdate = D),
      (b.spotLightShadows.needsUpdate = D),
      (b.rectAreaLights.needsUpdate = D),
      (b.hemisphereLights.needsUpdate = D);
  }
  function Tc(b) {
    return (
      b.isMeshLambertMaterial ||
      b.isMeshToonMaterial ||
      b.isMeshPhongMaterial ||
      b.isMeshStandardMaterial ||
      b.isShadowMaterial ||
      (b.isShaderMaterial && b.lights === !0)
    );
  }
  (this.getActiveCubeFace = function () {
    return _;
  }),
    (this.getActiveMipmapLevel = function () {
      return w;
    }),
    (this.getRenderTarget = function () {
      return C;
    }),
    (this.setRenderTargetTextures = function (b, D, U) {
      (j.get(b.texture).__webglTexture = D),
        (j.get(b.depthTexture).__webglTexture = U);
      const N = j.get(b);
      (N.__hasExternalTextures = !0),
        N.__hasExternalTextures &&
          ((N.__autoAllocateDepthBuffer = U === void 0),
          N.__autoAllocateDepthBuffer ||
            (Et.has("WEBGL_multisampled_render_to_texture") === !0 &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ),
              (N.__useRenderToTexture = !1))));
    }),
    (this.setRenderTargetFramebuffer = function (b, D) {
      const U = j.get(b);
      (U.__webglFramebuffer = D), (U.__useDefaultFramebuffer = D === void 0);
    }),
    (this.setRenderTarget = function (b, D = 0, U = 0) {
      (C = b), (_ = D), (w = U);
      let N = !0;
      if (b) {
        const Pt = j.get(b);
        Pt.__useDefaultFramebuffer !== void 0
          ? (rt.bindFramebuffer(36160, null), (N = !1))
          : Pt.__webglFramebuffer === void 0
          ? q.setupRenderTarget(b)
          : Pt.__hasExternalTextures &&
            q.rebindTextures(
              b,
              j.get(b.texture).__webglTexture,
              j.get(b.depthTexture).__webglTexture
            );
      }
      let Y = null,
        At = !1,
        Rt = !1;
      if (b) {
        const Pt = b.texture;
        (Pt.isData3DTexture || Pt.isDataArrayTexture) && (Rt = !0);
        const kt = j.get(b).__webglFramebuffer;
        b.isWebGLCubeRenderTarget
          ? ((Y = kt[D]), (At = !0))
          : Lt.isWebGL2 && b.samples > 0 && q.useMultisampledRTT(b) === !1
          ? (Y = j.get(b).__webglMultisampledFramebuffer)
          : (Y = kt),
          L.copy(b.viewport),
          I.copy(b.scissor),
          (v = b.scissorTest);
      } else
        L.copy(P).multiplyScalar(F).floor(),
          I.copy(k).multiplyScalar(F).floor(),
          (v = z);
      if (
        (rt.bindFramebuffer(36160, Y) &&
          Lt.drawBuffers &&
          N &&
          rt.drawBuffers(b, Y),
        rt.viewport(L),
        rt.scissor(I),
        rt.setScissorTest(v),
        At)
      ) {
        const Pt = j.get(b.texture);
        V.framebufferTexture2D(36160, 36064, 34069 + D, Pt.__webglTexture, U);
      } else if (Rt) {
        const Pt = j.get(b.texture),
          kt = D || 0;
        V.framebufferTextureLayer(36160, 36064, Pt.__webglTexture, U || 0, kt);
      }
      T = -1;
    }),
    (this.readRenderTargetPixels = function (b, D, U, N, Y, At, Rt) {
      if (!(b && b.isWebGLRenderTarget)) {
        console.error(
          "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
        );
        return;
      }
      let It = j.get(b).__webglFramebuffer;
      if ((b.isWebGLCubeRenderTarget && Rt !== void 0 && (It = It[Rt]), It)) {
        rt.bindFramebuffer(36160, It);
        try {
          const Pt = b.texture,
            kt = Pt.format,
            Bt = Pt.type;
          if (kt !== Pe && M.convert(kt) !== V.getParameter(35739)) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
            );
            return;
          }
          const Ot =
            Bt === Xi &&
            (Et.has("EXT_color_buffer_half_float") ||
              (Lt.isWebGL2 && Et.has("EXT_color_buffer_float")));
          if (
            Bt !== Pn &&
            M.convert(Bt) !== V.getParameter(35738) &&
            !(
              Bt === Tn &&
              (Lt.isWebGL2 ||
                Et.has("OES_texture_float") ||
                Et.has("WEBGL_color_buffer_float"))
            ) &&
            !Ot
          ) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
            );
            return;
          }
          D >= 0 &&
            D <= b.width - N &&
            U >= 0 &&
            U <= b.height - Y &&
            V.readPixels(D, U, N, Y, M.convert(kt), M.convert(Bt), At);
        } finally {
          const Pt = C !== null ? j.get(C).__webglFramebuffer : null;
          rt.bindFramebuffer(36160, Pt);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (b, D, U = 0) {
      if (D.isFramebufferTexture !== !0) {
        console.error(
          "THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture."
        );
        return;
      }
      const N = Math.pow(2, -U),
        Y = Math.floor(D.image.width * N),
        At = Math.floor(D.image.height * N);
      q.setTexture2D(D, 0),
        V.copyTexSubImage2D(3553, U, 0, 0, b.x, b.y, Y, At),
        rt.unbindTexture();
    }),
    (this.copyTextureToTexture = function (b, D, U, N = 0) {
      const Y = D.image.width,
        At = D.image.height,
        Rt = M.convert(U.format),
        It = M.convert(U.type);
      q.setTexture2D(U, 0),
        V.pixelStorei(37440, U.flipY),
        V.pixelStorei(37441, U.premultiplyAlpha),
        V.pixelStorei(3317, U.unpackAlignment),
        D.isDataTexture
          ? V.texSubImage2D(3553, N, b.x, b.y, Y, At, Rt, It, D.image.data)
          : D.isCompressedTexture
          ? V.compressedTexSubImage2D(
              3553,
              N,
              b.x,
              b.y,
              D.mipmaps[0].width,
              D.mipmaps[0].height,
              Rt,
              D.mipmaps[0].data
            )
          : V.texSubImage2D(3553, N, b.x, b.y, Rt, It, D.image),
        N === 0 && U.generateMipmaps && V.generateMipmap(3553),
        rt.unbindTexture();
    }),
    (this.copyTextureToTexture3D = function (b, D, U, N, Y = 0) {
      if (m.isWebGL1Renderer) {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
        );
        return;
      }
      const At = b.max.x - b.min.x + 1,
        Rt = b.max.y - b.min.y + 1,
        It = b.max.z - b.min.z + 1,
        Pt = M.convert(N.format),
        kt = M.convert(N.type);
      let Bt;
      if (N.isData3DTexture) q.setTexture3D(N, 0), (Bt = 32879);
      else if (N.isDataArrayTexture) q.setTexture2DArray(N, 0), (Bt = 35866);
      else {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
        );
        return;
      }
      V.pixelStorei(37440, N.flipY),
        V.pixelStorei(37441, N.premultiplyAlpha),
        V.pixelStorei(3317, N.unpackAlignment);
      const Ot = V.getParameter(3314),
        Qt = V.getParameter(32878),
        vn = V.getParameter(3316),
        Fn = V.getParameter(3315),
        Nn = V.getParameter(32877),
        Oe = U.isCompressedTexture ? U.mipmaps[0] : U.image;
      V.pixelStorei(3314, Oe.width),
        V.pixelStorei(32878, Oe.height),
        V.pixelStorei(3316, b.min.x),
        V.pixelStorei(3315, b.min.y),
        V.pixelStorei(32877, b.min.z),
        U.isDataTexture || U.isData3DTexture
          ? V.texSubImage3D(Bt, Y, D.x, D.y, D.z, At, Rt, It, Pt, kt, Oe.data)
          : U.isCompressedTexture
          ? (console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
            ),
            V.compressedTexSubImage3D(
              Bt,
              Y,
              D.x,
              D.y,
              D.z,
              At,
              Rt,
              It,
              Pt,
              Oe.data
            ))
          : V.texSubImage3D(Bt, Y, D.x, D.y, D.z, At, Rt, It, Pt, kt, Oe),
        V.pixelStorei(3314, Ot),
        V.pixelStorei(32878, Qt),
        V.pixelStorei(3316, vn),
        V.pixelStorei(3315, Fn),
        V.pixelStorei(32877, Nn),
        Y === 0 && N.generateMipmaps && V.generateMipmap(Bt),
        rt.unbindTexture();
    }),
    (this.initTexture = function (b) {
      q.setTexture2D(b, 0), rt.unbindTexture();
    }),
    (this.resetState = function () {
      (_ = 0), (w = 0), (C = null), rt.reset(), tt.reset();
    }),
    typeof __THREE_DEVTOOLS__ != "undefined" &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("observe", { detail: this })
      );
}
qt.prototype.isWebGLRenderer = !0;
class Dm extends qt {}
Dm.prototype.isWebGL1Renderer = !0;
class wo extends Wt {
  constructor() {
    super(),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.overrideMaterial = null),
      (this.autoUpdate = !0),
      typeof __THREE_DEVTOOLS__ != "undefined" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      t.background !== null && (this.background = t.background.clone()),
      t.environment !== null && (this.environment = t.environment.clone()),
      t.fog !== null && (this.fog = t.fog.clone()),
      t.overrideMaterial !== null &&
        (this.overrideMaterial = t.overrideMaterial.clone()),
      (this.autoUpdate = t.autoUpdate),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      this
    );
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), e;
  }
}
wo.prototype.isScene = !0;
class tr {
  constructor(t, e) {
    (this.array = t),
      (this.stride = e),
      (this.count = t !== void 0 ? t.length / e : 0),
      (this.usage = ji),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0),
      (this.uuid = Ie());
  }
  onUploadCallback() {}
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return (this.usage = t), this;
  }
  copy(t) {
    return (
      (this.array = new t.array.constructor(t.array)),
      (this.count = t.count),
      (this.stride = t.stride),
      (this.usage = t.usage),
      this
    );
  }
  copyAt(t, e, n) {
    (t *= this.stride), (n *= e.stride);
    for (let i = 0, r = this.stride; i < r; i++)
      this.array[t + i] = e.array[n + i];
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  clone(t) {
    t.arrayBuffers === void 0 && (t.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ie()),
      t.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const e = new this.array.constructor(
        t.arrayBuffers[this.array.buffer._uuid]
      ),
      n = new this.constructor(e, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(t) {
    return (this.onUploadCallback = t), this;
  }
  toJSON(t) {
    return (
      t.arrayBuffers === void 0 && (t.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ie()),
      t.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(
          new Uint32Array(this.array.buffer)
        )),
      {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      }
    );
  }
}
tr.prototype.isInterleavedBuffer = !0;
const ge = new E();
class Ji {
  constructor(t, e, n, i = !1) {
    (this.name = ""),
      (this.data = t),
      (this.itemSize = e),
      (this.offset = n),
      (this.normalized = i === !0);
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(t) {
    this.data.needsUpdate = t;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.data.count; e < n; e++)
      ge.fromBufferAttribute(this, e),
        ge.applyMatrix4(t),
        this.setXYZ(e, ge.x, ge.y, ge.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      ge.fromBufferAttribute(this, e),
        ge.applyNormalMatrix(t),
        this.setXYZ(e, ge.x, ge.y, ge.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      ge.fromBufferAttribute(this, e),
        ge.transformDirection(t),
        this.setXYZ(e, ge.x, ge.y, ge.z);
    return this;
  }
  setX(t, e) {
    return (this.data.array[t * this.data.stride + this.offset] = e), this;
  }
  setY(t, e) {
    return (this.data.array[t * this.data.stride + this.offset + 1] = e), this;
  }
  setZ(t, e) {
    return (this.data.array[t * this.data.stride + this.offset + 2] = e), this;
  }
  setW(t, e) {
    return (this.data.array[t * this.data.stride + this.offset + 3] = e), this;
  }
  getX(t) {
    return this.data.array[t * this.data.stride + this.offset];
  }
  getY(t) {
    return this.data.array[t * this.data.stride + this.offset + 1];
  }
  getZ(t) {
    return this.data.array[t * this.data.stride + this.offset + 2];
  }
  getW(t) {
    return this.data.array[t * this.data.stride + this.offset + 3];
  }
  setXY(t, e, n) {
    return (
      (t = t * this.data.stride + this.offset),
      (this.data.array[t + 0] = e),
      (this.data.array[t + 1] = n),
      this
    );
  }
  setXYZ(t, e, n, i) {
    return (
      (t = t * this.data.stride + this.offset),
      (this.data.array[t + 0] = e),
      (this.data.array[t + 1] = n),
      (this.data.array[t + 2] = i),
      this
    );
  }
  setXYZW(t, e, n, i, r) {
    return (
      (t = t * this.data.stride + this.offset),
      (this.data.array[t + 0] = e),
      (this.data.array[t + 1] = n),
      (this.data.array[t + 2] = i),
      (this.data.array[t + 3] = r),
      this
    );
  }
  clone(t) {
    if (t === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data."
      );
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) e.push(this.data.array[i + r]);
      }
      return new re(
        new this.array.constructor(e),
        this.itemSize,
        this.normalized
      );
    } else
      return (
        t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}),
        t.interleavedBuffers[this.data.uuid] === void 0 &&
          (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
        new Ji(
          t.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized
        )
      );
  }
  toJSON(t) {
    if (t === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data."
      );
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) e.push(this.data.array[i + r]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: e,
        normalized: this.normalized,
      };
    } else
      return (
        t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}),
        t.interleavedBuffers[this.data.uuid] === void 0 &&
          (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
  }
}
Ji.prototype.isInterleavedBufferAttribute = !0;
class So extends se {
  constructor(t) {
    super(),
      (this.type = "SpriteMaterial"),
      (this.color = new xt(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.rotation = 0),
      (this.sizeAttenuation = !0),
      (this.transparent = !0),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.rotation = t.rotation),
      (this.sizeAttenuation = t.sizeAttenuation),
      (this.fog = t.fog),
      this
    );
  }
}
So.prototype.isSpriteMaterial = !0;
let Qn;
const Di = new E(),
  ti = new E(),
  ei = new E(),
  ni = new Z(),
  Ii = new Z(),
  Wl = new bt(),
  Cr = new E(),
  Fi = new E(),
  Lr = new E(),
  Za = new Z(),
  ks = new Z(),
  Ja = new Z();
class Im extends Wt {
  constructor(t) {
    if ((super(), (this.type = "Sprite"), Qn === void 0)) {
      Qn = new Yt();
      const e = new Float32Array([
          -0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5,
          0, 0, 1,
        ]),
        n = new tr(e, 5);
      Qn.setIndex([0, 1, 2, 0, 2, 3]),
        Qn.setAttribute("position", new Ji(n, 3, 0, !1)),
        Qn.setAttribute("uv", new Ji(n, 2, 3, !1));
    }
    (this.geometry = Qn),
      (this.material = t !== void 0 ? t : new So()),
      (this.center = new Z(0.5, 0.5));
  }
  raycast(t, e) {
    t.camera === null &&
      console.error(
        'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'
      ),
      ti.setFromMatrixScale(this.matrixWorld),
      Wl.copy(t.camera.matrixWorld),
      this.modelViewMatrix.multiplyMatrices(
        t.camera.matrixWorldInverse,
        this.matrixWorld
      ),
      ei.setFromMatrixPosition(this.modelViewMatrix),
      t.camera.isPerspectiveCamera &&
        this.material.sizeAttenuation === !1 &&
        ti.multiplyScalar(-ei.z);
    const n = this.material.rotation;
    let i, r;
    n !== 0 && ((r = Math.cos(n)), (i = Math.sin(n)));
    const o = this.center;
    Rr(Cr.set(-0.5, -0.5, 0), ei, o, ti, i, r),
      Rr(Fi.set(0.5, -0.5, 0), ei, o, ti, i, r),
      Rr(Lr.set(0.5, 0.5, 0), ei, o, ti, i, r),
      Za.set(0, 0),
      ks.set(1, 0),
      Ja.set(1, 1);
    let a = t.ray.intersectTriangle(Cr, Fi, Lr, !1, Di);
    if (
      a === null &&
      (Rr(Fi.set(-0.5, 0.5, 0), ei, o, ti, i, r),
      ks.set(0, 1),
      (a = t.ray.intersectTriangle(Cr, Lr, Fi, !1, Di)),
      a === null)
    )
      return;
    const l = t.ray.origin.distanceTo(Di);
    l < t.near ||
      l > t.far ||
      e.push({
        distance: l,
        point: Di.clone(),
        uv: ne.getUV(Di, Cr, Fi, Lr, Za, ks, Ja, new Z()),
        face: null,
        object: this,
      });
  }
  copy(t) {
    return (
      super.copy(t),
      t.center !== void 0 && this.center.copy(t.center),
      (this.material = t.material),
      this
    );
  }
}
Im.prototype.isSprite = !0;
function Rr(s, t, e, n, i, r) {
  ni.subVectors(s, e).addScalar(0.5).multiply(n),
    i !== void 0
      ? ((Ii.x = r * ni.x - i * ni.y), (Ii.y = i * ni.x + r * ni.y))
      : Ii.copy(ni),
    s.copy(t),
    (s.x += Ii.x),
    (s.y += Ii.y),
    s.applyMatrix4(Wl);
}
const $a = new E(),
  Ka = new jt(),
  Qa = new jt(),
  Fm = new E(),
  tl = new bt();
class ql extends ce {
  constructor(t, e) {
    super(t, e),
      (this.type = "SkinnedMesh"),
      (this.bindMode = "attached"),
      (this.bindMatrix = new bt()),
      (this.bindMatrixInverse = new bt());
  }
  copy(t) {
    return (
      super.copy(t),
      (this.bindMode = t.bindMode),
      this.bindMatrix.copy(t.bindMatrix),
      this.bindMatrixInverse.copy(t.bindMatrixInverse),
      (this.skeleton = t.skeleton),
      this
    );
  }
  bind(t, e) {
    (this.skeleton = t),
      e === void 0 &&
        (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        (e = this.matrixWorld)),
      this.bindMatrix.copy(e),
      this.bindMatrixInverse.copy(e).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const t = new jt(),
      e = this.geometry.attributes.skinWeight;
    for (let n = 0, i = e.count; n < i; n++) {
      t.fromBufferAttribute(e, n);
      const r = 1 / t.manhattanLength();
      r !== 1 / 0 ? t.multiplyScalar(r) : t.set(1, 0, 0, 0),
        e.setXYZW(n, t.x, t.y, t.z, t.w);
    }
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t),
      this.bindMode === "attached"
        ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
        : this.bindMode === "detached"
        ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
        : console.warn(
            "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
          );
  }
  boneTransform(t, e) {
    const n = this.skeleton,
      i = this.geometry;
    Ka.fromBufferAttribute(i.attributes.skinIndex, t),
      Qa.fromBufferAttribute(i.attributes.skinWeight, t),
      $a.copy(e).applyMatrix4(this.bindMatrix),
      e.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const o = Qa.getComponent(r);
      if (o !== 0) {
        const a = Ka.getComponent(r);
        tl.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]),
          e.addScaledVector(Fm.copy($a).applyMatrix4(tl), o);
      }
    }
    return e.applyMatrix4(this.bindMatrixInverse);
  }
}
ql.prototype.isSkinnedMesh = !0;
class Nm extends Wt {
  constructor() {
    super(), (this.type = "Bone");
  }
}
Nm.prototype.isBone = !0;
class Bm extends he {
  constructor(t = null, e = 1, n = 1, i, r, o, a, l, c = ae, h = ae, u, d) {
    super(null, o, a, l, c, h, i, r, u, d),
      (this.image = { data: t, width: e, height: n }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
Bm.prototype.isDataTexture = !0;
class ro extends re {
  constructor(t, e, n, i = 1) {
    typeof n == "number" &&
      ((i = n),
      (n = !1),
      console.error(
        "THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."
      )),
      super(t, e, n),
      (this.meshPerAttribute = i);
  }
  copy(t) {
    return super.copy(t), (this.meshPerAttribute = t.meshPerAttribute), this;
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.meshPerAttribute = this.meshPerAttribute),
      (t.isInstancedBufferAttribute = !0),
      t
    );
  }
}
ro.prototype.isInstancedBufferAttribute = !0;
const el = new bt(),
  nl = new bt(),
  Pr = [],
  Ni = new ce();
class zm extends ce {
  constructor(t, e, n) {
    super(t, e),
      (this.instanceMatrix = new ro(new Float32Array(n * 16), 16)),
      (this.instanceColor = null),
      (this.count = n),
      (this.frustumCulled = !1);
  }
  copy(t) {
    return (
      super.copy(t),
      this.instanceMatrix.copy(t.instanceMatrix),
      t.instanceColor !== null &&
        (this.instanceColor = t.instanceColor.clone()),
      (this.count = t.count),
      this
    );
  }
  getColorAt(t, e) {
    e.fromArray(this.instanceColor.array, t * 3);
  }
  getMatrixAt(t, e) {
    e.fromArray(this.instanceMatrix.array, t * 16);
  }
  raycast(t, e) {
    const n = this.matrixWorld,
      i = this.count;
    if (
      ((Ni.geometry = this.geometry),
      (Ni.material = this.material),
      Ni.material !== void 0)
    )
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, el),
          nl.multiplyMatrices(n, el),
          (Ni.matrixWorld = nl),
          Ni.raycast(t, Pr);
        for (let o = 0, a = Pr.length; o < a; o++) {
          const l = Pr[o];
          (l.instanceId = r), (l.object = this), e.push(l);
        }
        Pr.length = 0;
      }
  }
  setColorAt(t, e) {
    this.instanceColor === null &&
      (this.instanceColor = new ro(
        new Float32Array(this.instanceMatrix.count * 3),
        3
      )),
      e.toArray(this.instanceColor.array, t * 3);
  }
  setMatrixAt(t, e) {
    e.toArray(this.instanceMatrix.array, t * 16);
  }
  updateMorphTargets() {}
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
zm.prototype.isInstancedMesh = !0;
class wi extends se {
  constructor(t) {
    super(),
      (this.type = "LineBasicMaterial"),
      (this.color = new xt(16777215)),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.linewidth = t.linewidth),
      (this.linecap = t.linecap),
      (this.linejoin = t.linejoin),
      (this.fog = t.fog),
      this
    );
  }
}
wi.prototype.isLineBasicMaterial = !0;
const il = new E(),
  rl = new E(),
  sl = new bt(),
  Gs = new yi(),
  Dr = new xi();
class Eo extends Wt {
  constructor(t = new Yt(), e = new wi()) {
    super(),
      (this.type = "Line"),
      (this.geometry = t),
      (this.material = e),
      this.updateMorphTargets();
  }
  copy(t) {
    return (
      super.copy(t),
      (this.material = t.material),
      (this.geometry = t.geometry),
      this
    );
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.isBufferGeometry)
      if (t.index === null) {
        const e = t.attributes.position,
          n = [0];
        for (let i = 1, r = e.count; i < r; i++)
          il.fromBufferAttribute(e, i - 1),
            rl.fromBufferAttribute(e, i),
            (n[i] = n[i - 1]),
            (n[i] += il.distanceTo(rl));
        t.setAttribute("lineDistance", new $t(n, 1));
      } else
        console.warn(
          "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
        );
    else
      t.isGeometry &&
        console.error(
          "THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    return this;
  }
  raycast(t, e) {
    const n = this.geometry,
      i = this.matrixWorld,
      r = t.params.Line.threshold,
      o = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Dr.copy(n.boundingSphere),
      Dr.applyMatrix4(i),
      (Dr.radius += r),
      t.ray.intersectsSphere(Dr) === !1)
    )
      return;
    sl.copy(i).invert(), Gs.copy(t.ray).applyMatrix4(sl);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = a * a,
      c = new E(),
      h = new E(),
      u = new E(),
      d = new E(),
      p = this.isLineSegments ? 2 : 1;
    if (n.isBufferGeometry) {
      const g = n.index,
        f = n.attributes.position;
      if (g !== null) {
        const _ = Math.max(0, o.start),
          w = Math.min(g.count, o.start + o.count);
        for (let C = _, T = w - 1; C < T; C += p) {
          const y = g.getX(C),
            L = g.getX(C + 1);
          if (
            (c.fromBufferAttribute(f, y),
            h.fromBufferAttribute(f, L),
            Gs.distanceSqToSegment(c, h, d, u) > l)
          )
            continue;
          d.applyMatrix4(this.matrixWorld);
          const v = t.ray.origin.distanceTo(d);
          v < t.near ||
            v > t.far ||
            e.push({
              distance: v,
              point: u.clone().applyMatrix4(this.matrixWorld),
              index: C,
              face: null,
              faceIndex: null,
              object: this,
            });
        }
      } else {
        const _ = Math.max(0, o.start),
          w = Math.min(f.count, o.start + o.count);
        for (let C = _, T = w - 1; C < T; C += p) {
          if (
            (c.fromBufferAttribute(f, C),
            h.fromBufferAttribute(f, C + 1),
            Gs.distanceSqToSegment(c, h, d, u) > l)
          )
            continue;
          d.applyMatrix4(this.matrixWorld);
          const L = t.ray.origin.distanceTo(d);
          L < t.near ||
            L > t.far ||
            e.push({
              distance: L,
              point: u.clone().applyMatrix4(this.matrixWorld),
              index: C,
              face: null,
              faceIndex: null,
              object: this,
            });
        }
      }
    } else
      n.isGeometry &&
        console.error(
          "THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
        );
  }
  updateMorphTargets() {
    const t = this.geometry;
    if (t.isBufferGeometry) {
      const e = t.morphAttributes,
        n = Object.keys(e);
      if (n.length > 0) {
        const i = e[n[0]];
        if (i !== void 0) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let r = 0, o = i.length; r < o; r++) {
            const a = i[r].name || String(r);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[a] = r);
          }
        }
      }
    } else {
      const e = t.morphTargets;
      e !== void 0 &&
        e.length > 0 &&
        console.error(
          "THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    }
  }
}
Eo.prototype.isLine = !0;
const ol = new E(),
  al = new E();
class To extends Eo {
  constructor(t, e) {
    super(t, e), (this.type = "LineSegments");
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.isBufferGeometry)
      if (t.index === null) {
        const e = t.attributes.position,
          n = [];
        for (let i = 0, r = e.count; i < r; i += 2)
          ol.fromBufferAttribute(e, i),
            al.fromBufferAttribute(e, i + 1),
            (n[i] = i === 0 ? 0 : n[i - 1]),
            (n[i + 1] = n[i] + ol.distanceTo(al));
        t.setAttribute("lineDistance", new $t(n, 1));
      } else
        console.warn(
          "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
        );
    else
      t.isGeometry &&
        console.error(
          "THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    return this;
  }
}
To.prototype.isLineSegments = !0;
class Om extends Eo {
  constructor(t, e) {
    super(t, e), (this.type = "LineLoop");
  }
}
Om.prototype.isLineLoop = !0;
class Ao extends se {
  constructor(t) {
    super(),
      (this.type = "PointsMaterial"),
      (this.color = new xt(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.size = t.size),
      (this.sizeAttenuation = t.sizeAttenuation),
      (this.fog = t.fog),
      this
    );
  }
}
Ao.prototype.isPointsMaterial = !0;
const ll = new bt(),
  so = new yi(),
  Ir = new xi(),
  Fr = new E();
class Um extends Wt {
  constructor(t = new Yt(), e = new Ao()) {
    super(),
      (this.type = "Points"),
      (this.geometry = t),
      (this.material = e),
      this.updateMorphTargets();
  }
  copy(t) {
    return (
      super.copy(t),
      (this.material = t.material),
      (this.geometry = t.geometry),
      this
    );
  }
  raycast(t, e) {
    const n = this.geometry,
      i = this.matrixWorld,
      r = t.params.Points.threshold,
      o = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Ir.copy(n.boundingSphere),
      Ir.applyMatrix4(i),
      (Ir.radius += r),
      t.ray.intersectsSphere(Ir) === !1)
    )
      return;
    ll.copy(i).invert(), so.copy(t.ray).applyMatrix4(ll);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = a * a;
    if (n.isBufferGeometry) {
      const c = n.index,
        u = n.attributes.position;
      if (c !== null) {
        const d = Math.max(0, o.start),
          p = Math.min(c.count, o.start + o.count);
        for (let g = d, m = p; g < m; g++) {
          const f = c.getX(g);
          Fr.fromBufferAttribute(u, f), cl(Fr, f, l, i, t, e, this);
        }
      } else {
        const d = Math.max(0, o.start),
          p = Math.min(u.count, o.start + o.count);
        for (let g = d, m = p; g < m; g++)
          Fr.fromBufferAttribute(u, g), cl(Fr, g, l, i, t, e, this);
      }
    } else
      console.error(
        "THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
      );
  }
  updateMorphTargets() {
    const t = this.geometry;
    if (t.isBufferGeometry) {
      const e = t.morphAttributes,
        n = Object.keys(e);
      if (n.length > 0) {
        const i = e[n[0]];
        if (i !== void 0) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let r = 0, o = i.length; r < o; r++) {
            const a = i[r].name || String(r);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[a] = r);
          }
        }
      }
    } else {
      const e = t.morphTargets;
      e !== void 0 &&
        e.length > 0 &&
        console.error(
          "THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    }
  }
}
Um.prototype.isPoints = !0;
function cl(s, t, e, n, i, r, o) {
  const a = so.distanceSqToPoint(s);
  if (a < e) {
    const l = new E();
    so.closestPointToPoint(s, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    r.push({
      distance: c,
      distanceToRay: Math.sqrt(a),
      point: l,
      index: t,
      face: null,
      object: o,
    });
  }
}
class Hm extends he {
  constructor(t, e, n, i, r, o, a, l, c) {
    super(t, e, n, i, r, o, a, l, c),
      (this.minFilter = o !== void 0 ? o : ve),
      (this.magFilter = r !== void 0 ? r : ve),
      (this.generateMipmaps = !1);
    const h = this;
    function u() {
      (h.needsUpdate = !0), t.requestVideoFrameCallback(u);
    }
    "requestVideoFrameCallback" in t && t.requestVideoFrameCallback(u);
  }
  clone() {
    return new this.constructor(this.image).copy(this);
  }
  update() {
    const t = this.image;
    "requestVideoFrameCallback" in t === !1 &&
      t.readyState >= t.HAVE_CURRENT_DATA &&
      (this.needsUpdate = !0);
  }
}
Hm.prototype.isVideoTexture = !0;
class Vm extends he {
  constructor(t, e, n) {
    super({ width: t, height: e }),
      (this.format = n),
      (this.magFilter = ae),
      (this.minFilter = ae),
      (this.generateMipmaps = !1),
      (this.needsUpdate = !0);
  }
}
Vm.prototype.isFramebufferTexture = !0;
class km extends he {
  constructor(t, e, n, i, r, o, a, l, c, h, u, d) {
    super(null, o, a, l, c, h, i, r, u, d),
      (this.image = { width: e, height: n }),
      (this.mipmaps = t),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
km.prototype.isCompressedTexture = !0;
class Gm extends he {
  constructor(t, e, n, i, r, o, a, l, c) {
    super(t, e, n, i, r, o, a, l, c), (this.needsUpdate = !0);
  }
}
Gm.prototype.isCanvasTexture = !0;
class Ee {
  constructor() {
    (this.type = "Curve"), (this.arcLengthDivisions = 200);
  }
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  getPointAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getPoint(n, e);
  }
  getPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
    return e;
  }
  getSpacedPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
    return e;
  }
  getLength() {
    const t = this.getLengths();
    return t[t.length - 1];
  }
  getLengths(t = this.arcLengthDivisions) {
    if (
      this.cacheArcLengths &&
      this.cacheArcLengths.length === t + 1 &&
      !this.needsUpdate
    )
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const e = [];
    let n,
      i = this.getPoint(0),
      r = 0;
    e.push(0);
    for (let o = 1; o <= t; o++)
      (n = this.getPoint(o / t)), (r += n.distanceTo(i)), e.push(r), (i = n);
    return (this.cacheArcLengths = e), e;
  }
  updateArcLengths() {
    (this.needsUpdate = !0), this.getLengths();
  }
  getUtoTmapping(t, e) {
    const n = this.getLengths();
    let i = 0;
    const r = n.length;
    let o;
    e ? (o = e) : (o = t * n[r - 1]);
    let a = 0,
      l = r - 1,
      c;
    for (; a <= l; )
      if (((i = Math.floor(a + (l - a) / 2)), (c = n[i] - o), c < 0)) a = i + 1;
      else if (c > 0) l = i - 1;
      else {
        l = i;
        break;
      }
    if (((i = l), n[i] === o)) return i / (r - 1);
    const h = n[i],
      d = n[i + 1] - h,
      p = (o - h) / d;
    return (i + p) / (r - 1);
  }
  getTangent(t, e) {
    let i = t - 1e-4,
      r = t + 1e-4;
    i < 0 && (i = 0), r > 1 && (r = 1);
    const o = this.getPoint(i),
      a = this.getPoint(r),
      l = e || (o.isVector2 ? new Z() : new E());
    return l.copy(a).sub(o).normalize(), l;
  }
  getTangentAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getTangent(n, e);
  }
  computeFrenetFrames(t, e) {
    const n = new E(),
      i = [],
      r = [],
      o = [],
      a = new E(),
      l = new bt();
    for (let p = 0; p <= t; p++) {
      const g = p / t;
      i[p] = this.getTangentAt(g, new E());
    }
    (r[0] = new E()), (o[0] = new E());
    let c = Number.MAX_VALUE;
    const h = Math.abs(i[0].x),
      u = Math.abs(i[0].y),
      d = Math.abs(i[0].z);
    h <= c && ((c = h), n.set(1, 0, 0)),
      u <= c && ((c = u), n.set(0, 1, 0)),
      d <= c && n.set(0, 0, 1),
      a.crossVectors(i[0], n).normalize(),
      r[0].crossVectors(i[0], a),
      o[0].crossVectors(i[0], r[0]);
    for (let p = 1; p <= t; p++) {
      if (
        ((r[p] = r[p - 1].clone()),
        (o[p] = o[p - 1].clone()),
        a.crossVectors(i[p - 1], i[p]),
        a.length() > Number.EPSILON)
      ) {
        a.normalize();
        const g = Math.acos(le(i[p - 1].dot(i[p]), -1, 1));
        r[p].applyMatrix4(l.makeRotationAxis(a, g));
      }
      o[p].crossVectors(i[p], r[p]);
    }
    if (e === !0) {
      let p = Math.acos(le(r[0].dot(r[t]), -1, 1));
      (p /= t), i[0].dot(a.crossVectors(r[0], r[t])) > 0 && (p = -p);
      for (let g = 1; g <= t; g++)
        r[g].applyMatrix4(l.makeRotationAxis(i[g], p * g)),
          o[g].crossVectors(i[g], r[g]);
    }
    return { tangents: i, normals: r, binormals: o };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return (this.arcLengthDivisions = t.arcLengthDivisions), this;
  }
  toJSON() {
    const t = {
      metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" },
    };
    return (
      (t.arcLengthDivisions = this.arcLengthDivisions), (t.type = this.type), t
    );
  }
  fromJSON(t) {
    return (this.arcLengthDivisions = t.arcLengthDivisions), this;
  }
}
class is extends Ee {
  constructor(
    t = 0,
    e = 0,
    n = 1,
    i = 1,
    r = 0,
    o = Math.PI * 2,
    a = !1,
    l = 0
  ) {
    super(),
      (this.type = "EllipseCurve"),
      (this.aX = t),
      (this.aY = e),
      (this.xRadius = n),
      (this.yRadius = i),
      (this.aStartAngle = r),
      (this.aEndAngle = o),
      (this.aClockwise = a),
      (this.aRotation = l);
  }
  getPoint(t, e) {
    const n = e || new Z(),
      i = Math.PI * 2;
    let r = this.aEndAngle - this.aStartAngle;
    const o = Math.abs(r) < Number.EPSILON;
    for (; r < 0; ) r += i;
    for (; r > i; ) r -= i;
    r < Number.EPSILON && (o ? (r = 0) : (r = i)),
      this.aClockwise === !0 && !o && (r === i ? (r = -i) : (r = r - i));
    const a = this.aStartAngle + t * r;
    let l = this.aX + this.xRadius * Math.cos(a),
      c = this.aY + this.yRadius * Math.sin(a);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation),
        u = Math.sin(this.aRotation),
        d = l - this.aX,
        p = c - this.aY;
      (l = d * h - p * u + this.aX), (c = d * u + p * h + this.aY);
    }
    return n.set(l, c);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.aX = t.aX),
      (this.aY = t.aY),
      (this.xRadius = t.xRadius),
      (this.yRadius = t.yRadius),
      (this.aStartAngle = t.aStartAngle),
      (this.aEndAngle = t.aEndAngle),
      (this.aClockwise = t.aClockwise),
      (this.aRotation = t.aRotation),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.aX = this.aX),
      (t.aY = this.aY),
      (t.xRadius = this.xRadius),
      (t.yRadius = this.yRadius),
      (t.aStartAngle = this.aStartAngle),
      (t.aEndAngle = this.aEndAngle),
      (t.aClockwise = this.aClockwise),
      (t.aRotation = this.aRotation),
      t
    );
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      (this.aX = t.aX),
      (this.aY = t.aY),
      (this.xRadius = t.xRadius),
      (this.yRadius = t.yRadius),
      (this.aStartAngle = t.aStartAngle),
      (this.aEndAngle = t.aEndAngle),
      (this.aClockwise = t.aClockwise),
      (this.aRotation = t.aRotation),
      this
    );
  }
}
is.prototype.isEllipseCurve = !0;
class Xl extends is {
  constructor(t, e, n, i, r, o) {
    super(t, e, n, n, i, r, o), (this.type = "ArcCurve");
  }
}
Xl.prototype.isArcCurve = !0;
function Co() {
  let s = 0,
    t = 0,
    e = 0,
    n = 0;
  function i(r, o, a, l) {
    (s = r),
      (t = a),
      (e = -3 * r + 3 * o - 2 * a - l),
      (n = 2 * r - 2 * o + a + l);
  }
  return {
    initCatmullRom: function (r, o, a, l, c) {
      i(o, a, c * (a - r), c * (l - o));
    },
    initNonuniformCatmullRom: function (r, o, a, l, c, h, u) {
      let d = (o - r) / c - (a - r) / (c + h) + (a - o) / h,
        p = (a - o) / h - (l - o) / (h + u) + (l - a) / u;
      (d *= h), (p *= h), i(o, a, d, p);
    },
    calc: function (r) {
      const o = r * r,
        a = o * r;
      return s + t * r + e * o + n * a;
    },
  };
}
const Nr = new E(),
  Ws = new Co(),
  qs = new Co(),
  Xs = new Co();
class jl extends Ee {
  constructor(t = [], e = !1, n = "centripetal", i = 0.5) {
    super(),
      (this.type = "CatmullRomCurve3"),
      (this.points = t),
      (this.closed = e),
      (this.curveType = n),
      (this.tension = i);
  }
  getPoint(t, e = new E()) {
    const n = e,
      i = this.points,
      r = i.length,
      o = (r - (this.closed ? 0 : 1)) * t;
    let a = Math.floor(o),
      l = o - a;
    this.closed
      ? (a += a > 0 ? 0 : (Math.floor(Math.abs(a) / r) + 1) * r)
      : l === 0 && a === r - 1 && ((a = r - 2), (l = 1));
    let c, h;
    this.closed || a > 0
      ? (c = i[(a - 1) % r])
      : (Nr.subVectors(i[0], i[1]).add(i[0]), (c = Nr));
    const u = i[a % r],
      d = i[(a + 1) % r];
    if (
      (this.closed || a + 2 < r
        ? (h = i[(a + 2) % r])
        : (Nr.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), (h = Nr)),
      this.curveType === "centripetal" || this.curveType === "chordal")
    ) {
      const p = this.curveType === "chordal" ? 0.5 : 0.25;
      let g = Math.pow(c.distanceToSquared(u), p),
        m = Math.pow(u.distanceToSquared(d), p),
        f = Math.pow(d.distanceToSquared(h), p);
      m < 1e-4 && (m = 1),
        g < 1e-4 && (g = m),
        f < 1e-4 && (f = m),
        Ws.initNonuniformCatmullRom(c.x, u.x, d.x, h.x, g, m, f),
        qs.initNonuniformCatmullRom(c.y, u.y, d.y, h.y, g, m, f),
        Xs.initNonuniformCatmullRom(c.z, u.z, d.z, h.z, g, m, f);
    } else
      this.curveType === "catmullrom" &&
        (Ws.initCatmullRom(c.x, u.x, d.x, h.x, this.tension),
        qs.initCatmullRom(c.y, u.y, d.y, h.y, this.tension),
        Xs.initCatmullRom(c.z, u.z, d.z, h.z, this.tension));
    return n.set(Ws.calc(l), qs.calc(l), Xs.calc(l)), n;
  }
  copy(t) {
    super.copy(t), (this.points = []);
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(i.clone());
    }
    return (
      (this.closed = t.closed),
      (this.curveType = t.curveType),
      (this.tension = t.tension),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const i = this.points[e];
      t.points.push(i.toArray());
    }
    return (
      (t.closed = this.closed),
      (t.curveType = this.curveType),
      (t.tension = this.tension),
      t
    );
  }
  fromJSON(t) {
    super.fromJSON(t), (this.points = []);
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(new E().fromArray(i));
    }
    return (
      (this.closed = t.closed),
      (this.curveType = t.curveType),
      (this.tension = t.tension),
      this
    );
  }
}
jl.prototype.isCatmullRomCurve3 = !0;
function hl(s, t, e, n, i) {
  const r = (n - t) * 0.5,
    o = (i - e) * 0.5,
    a = s * s,
    l = s * a;
  return (
    (2 * e - 2 * n + r + o) * l + (-3 * e + 3 * n - 2 * r - o) * a + r * s + e
  );
}
function Wm(s, t) {
  const e = 1 - s;
  return e * e * t;
}
function qm(s, t) {
  return 2 * (1 - s) * s * t;
}
function Xm(s, t) {
  return s * s * t;
}
function ki(s, t, e, n) {
  return Wm(s, t) + qm(s, e) + Xm(s, n);
}
function jm(s, t) {
  const e = 1 - s;
  return e * e * e * t;
}
function Ym(s, t) {
  const e = 1 - s;
  return 3 * e * e * s * t;
}
function Zm(s, t) {
  return 3 * (1 - s) * s * s * t;
}
function Jm(s, t) {
  return s * s * s * t;
}
function Gi(s, t, e, n, i) {
  return jm(s, t) + Ym(s, e) + Zm(s, n) + Jm(s, i);
}
class Lo extends Ee {
  constructor(t = new Z(), e = new Z(), n = new Z(), i = new Z()) {
    super(),
      (this.type = "CubicBezierCurve"),
      (this.v0 = t),
      (this.v1 = e),
      (this.v2 = n),
      (this.v3 = i);
  }
  getPoint(t, e = new Z()) {
    const n = e,
      i = this.v0,
      r = this.v1,
      o = this.v2,
      a = this.v3;
    return n.set(Gi(t, i.x, r.x, o.x, a.x), Gi(t, i.y, r.y, o.y, a.y)), n;
  }
  copy(t) {
    return (
      super.copy(t),
      this.v0.copy(t.v0),
      this.v1.copy(t.v1),
      this.v2.copy(t.v2),
      this.v3.copy(t.v3),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.v0 = this.v0.toArray()),
      (t.v1 = this.v1.toArray()),
      (t.v2 = this.v2.toArray()),
      (t.v3 = this.v3.toArray()),
      t
    );
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v0.fromArray(t.v0),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this.v3.fromArray(t.v3),
      this
    );
  }
}
Lo.prototype.isCubicBezierCurve = !0;
class Yl extends Ee {
  constructor(t = new E(), e = new E(), n = new E(), i = new E()) {
    super(),
      (this.type = "CubicBezierCurve3"),
      (this.v0 = t),
      (this.v1 = e),
      (this.v2 = n),
      (this.v3 = i);
  }
  getPoint(t, e = new E()) {
    const n = e,
      i = this.v0,
      r = this.v1,
      o = this.v2,
      a = this.v3;
    return (
      n.set(
        Gi(t, i.x, r.x, o.x, a.x),
        Gi(t, i.y, r.y, o.y, a.y),
        Gi(t, i.z, r.z, o.z, a.z)
      ),
      n
    );
  }
  copy(t) {
    return (
      super.copy(t),
      this.v0.copy(t.v0),
      this.v1.copy(t.v1),
      this.v2.copy(t.v2),
      this.v3.copy(t.v3),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.v0 = this.v0.toArray()),
      (t.v1 = this.v1.toArray()),
      (t.v2 = this.v2.toArray()),
      (t.v3 = this.v3.toArray()),
      t
    );
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v0.fromArray(t.v0),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this.v3.fromArray(t.v3),
      this
    );
  }
}
Yl.prototype.isCubicBezierCurve3 = !0;
class rs extends Ee {
  constructor(t = new Z(), e = new Z()) {
    super(), (this.type = "LineCurve"), (this.v1 = t), (this.v2 = e);
  }
  getPoint(t, e = new Z()) {
    const n = e;
    return (
      t === 1
        ? n.copy(this.v2)
        : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
      n
    );
  }
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e) {
    const n = e || new Z();
    return n.copy(this.v2).sub(this.v1).normalize(), n;
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
  }
  fromJSON(t) {
    return (
      super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    );
  }
}
rs.prototype.isLineCurve = !0;
class $m extends Ee {
  constructor(t = new E(), e = new E()) {
    super(),
      (this.type = "LineCurve3"),
      (this.isLineCurve3 = !0),
      (this.v1 = t),
      (this.v2 = e);
  }
  getPoint(t, e = new E()) {
    const n = e;
    return (
      t === 1
        ? n.copy(this.v2)
        : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
      n
    );
  }
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
  }
  fromJSON(t) {
    return (
      super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    );
  }
}
class Ro extends Ee {
  constructor(t = new Z(), e = new Z(), n = new Z()) {
    super(),
      (this.type = "QuadraticBezierCurve"),
      (this.v0 = t),
      (this.v1 = e),
      (this.v2 = n);
  }
  getPoint(t, e = new Z()) {
    const n = e,
      i = this.v0,
      r = this.v1,
      o = this.v2;
    return n.set(ki(t, i.x, r.x, o.x), ki(t, i.y, r.y, o.y)), n;
  }
  copy(t) {
    return (
      super.copy(t),
      this.v0.copy(t.v0),
      this.v1.copy(t.v1),
      this.v2.copy(t.v2),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.v0 = this.v0.toArray()),
      (t.v1 = this.v1.toArray()),
      (t.v2 = this.v2.toArray()),
      t
    );
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v0.fromArray(t.v0),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this
    );
  }
}
Ro.prototype.isQuadraticBezierCurve = !0;
class Zl extends Ee {
  constructor(t = new E(), e = new E(), n = new E()) {
    super(),
      (this.type = "QuadraticBezierCurve3"),
      (this.v0 = t),
      (this.v1 = e),
      (this.v2 = n);
  }
  getPoint(t, e = new E()) {
    const n = e,
      i = this.v0,
      r = this.v1,
      o = this.v2;
    return (
      n.set(ki(t, i.x, r.x, o.x), ki(t, i.y, r.y, o.y), ki(t, i.z, r.z, o.z)), n
    );
  }
  copy(t) {
    return (
      super.copy(t),
      this.v0.copy(t.v0),
      this.v1.copy(t.v1),
      this.v2.copy(t.v2),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.v0 = this.v0.toArray()),
      (t.v1 = this.v1.toArray()),
      (t.v2 = this.v2.toArray()),
      t
    );
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v0.fromArray(t.v0),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this
    );
  }
}
Zl.prototype.isQuadraticBezierCurve3 = !0;
class Po extends Ee {
  constructor(t = []) {
    super(), (this.type = "SplineCurve"), (this.points = t);
  }
  getPoint(t, e = new Z()) {
    const n = e,
      i = this.points,
      r = (i.length - 1) * t,
      o = Math.floor(r),
      a = r - o,
      l = i[o === 0 ? o : o - 1],
      c = i[o],
      h = i[o > i.length - 2 ? i.length - 1 : o + 1],
      u = i[o > i.length - 3 ? i.length - 1 : o + 2];
    return n.set(hl(a, l.x, c.x, h.x, u.x), hl(a, l.y, c.y, h.y, u.y)), n;
  }
  copy(t) {
    super.copy(t), (this.points = []);
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const i = this.points[e];
      t.points.push(i.toArray());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), (this.points = []);
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(new Z().fromArray(i));
    }
    return this;
  }
}
Po.prototype.isSplineCurve = !0;
var Jl = Object.freeze({
  __proto__: null,
  ArcCurve: Xl,
  CatmullRomCurve3: jl,
  CubicBezierCurve: Lo,
  CubicBezierCurve3: Yl,
  EllipseCurve: is,
  LineCurve: rs,
  LineCurve3: $m,
  QuadraticBezierCurve: Ro,
  QuadraticBezierCurve3: Zl,
  SplineCurve: Po,
});
class Km extends Ee {
  constructor() {
    super(),
      (this.type = "CurvePath"),
      (this.curves = []),
      (this.autoClose = !1);
  }
  add(t) {
    this.curves.push(t);
  }
  closePath() {
    const t = this.curves[0].getPoint(0),
      e = this.curves[this.curves.length - 1].getPoint(1);
    t.equals(e) || this.curves.push(new rs(e, t));
  }
  getPoint(t, e) {
    const n = t * this.getLength(),
      i = this.getCurveLengths();
    let r = 0;
    for (; r < i.length; ) {
      if (i[r] >= n) {
        const o = i[r] - n,
          a = this.curves[r],
          l = a.getLength(),
          c = l === 0 ? 0 : 1 - o / l;
        return a.getPointAt(c, e);
      }
      r++;
    }
    return null;
  }
  getLength() {
    const t = this.getCurveLengths();
    return t[t.length - 1];
  }
  updateArcLengths() {
    (this.needsUpdate = !0), (this.cacheLengths = null), this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const t = [];
    let e = 0;
    for (let n = 0, i = this.curves.length; n < i; n++)
      (e += this.curves[n].getLength()), t.push(e);
    return (this.cacheLengths = t), t;
  }
  getSpacedPoints(t = 40) {
    const e = [];
    for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
    return this.autoClose && e.push(e[0]), e;
  }
  getPoints(t = 12) {
    const e = [];
    let n;
    for (let i = 0, r = this.curves; i < r.length; i++) {
      const o = r[i],
        a = o.isEllipseCurve
          ? t * 2
          : o.isLineCurve || o.isLineCurve3
          ? 1
          : o.isSplineCurve
          ? t * o.points.length
          : t,
        l = o.getPoints(a);
      for (let c = 0; c < l.length; c++) {
        const h = l[c];
        (n && n.equals(h)) || (e.push(h), (n = h));
      }
    }
    return (
      this.autoClose &&
        e.length > 1 &&
        !e[e.length - 1].equals(e[0]) &&
        e.push(e[0]),
      e
    );
  }
  copy(t) {
    super.copy(t), (this.curves = []);
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const i = t.curves[e];
      this.curves.push(i.clone());
    }
    return (this.autoClose = t.autoClose), this;
  }
  toJSON() {
    const t = super.toJSON();
    (t.autoClose = this.autoClose), (t.curves = []);
    for (let e = 0, n = this.curves.length; e < n; e++) {
      const i = this.curves[e];
      t.curves.push(i.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), (this.autoClose = t.autoClose), (this.curves = []);
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const i = t.curves[e];
      this.curves.push(new Jl[i.type]().fromJSON(i));
    }
    return this;
  }
}
class oo extends Km {
  constructor(t) {
    super(),
      (this.type = "Path"),
      (this.currentPoint = new Z()),
      t && this.setFromPoints(t);
  }
  setFromPoints(t) {
    this.moveTo(t[0].x, t[0].y);
    for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
    return this;
  }
  moveTo(t, e) {
    return this.currentPoint.set(t, e), this;
  }
  lineTo(t, e) {
    const n = new rs(this.currentPoint.clone(), new Z(t, e));
    return this.curves.push(n), this.currentPoint.set(t, e), this;
  }
  quadraticCurveTo(t, e, n, i) {
    const r = new Ro(this.currentPoint.clone(), new Z(t, e), new Z(n, i));
    return this.curves.push(r), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(t, e, n, i, r, o) {
    const a = new Lo(
      this.currentPoint.clone(),
      new Z(t, e),
      new Z(n, i),
      new Z(r, o)
    );
    return this.curves.push(a), this.currentPoint.set(r, o), this;
  }
  splineThru(t) {
    const e = [this.currentPoint.clone()].concat(t),
      n = new Po(e);
    return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this;
  }
  arc(t, e, n, i, r, o) {
    const a = this.currentPoint.x,
      l = this.currentPoint.y;
    return this.absarc(t + a, e + l, n, i, r, o), this;
  }
  absarc(t, e, n, i, r, o) {
    return this.absellipse(t, e, n, n, i, r, o), this;
  }
  ellipse(t, e, n, i, r, o, a, l) {
    const c = this.currentPoint.x,
      h = this.currentPoint.y;
    return this.absellipse(t + c, e + h, n, i, r, o, a, l), this;
  }
  absellipse(t, e, n, i, r, o, a, l) {
    const c = new is(t, e, n, i, r, o, a, l);
    if (this.curves.length > 0) {
      const u = c.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(c);
    const h = c.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(t) {
    return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
  }
  toJSON() {
    const t = super.toJSON();
    return (t.currentPoint = this.currentPoint.toArray()), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this;
  }
}
new E();
new E();
new E();
new ne();
class er extends oo {
  constructor(t) {
    super(t), (this.uuid = Ie()), (this.type = "Shape"), (this.holes = []);
  }
  getPointsHoles(t) {
    const e = [];
    for (let n = 0, i = this.holes.length; n < i; n++)
      e[n] = this.holes[n].getPoints(t);
    return e;
  }
  extractPoints(t) {
    return { shape: this.getPoints(t), holes: this.getPointsHoles(t) };
  }
  copy(t) {
    super.copy(t), (this.holes = []);
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const i = t.holes[e];
      this.holes.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    (t.uuid = this.uuid), (t.holes = []);
    for (let e = 0, n = this.holes.length; e < n; e++) {
      const i = this.holes[e];
      t.holes.push(i.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), (this.uuid = t.uuid), (this.holes = []);
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const i = t.holes[e];
      this.holes.push(new oo().fromJSON(i));
    }
    return this;
  }
}
const Qm = {
  triangulate: function (s, t, e = 2) {
    const n = t && t.length,
      i = n ? t[0] * e : s.length;
    let r = $l(s, 0, i, e, !0);
    const o = [];
    if (!r || r.next === r.prev) return o;
    let a, l, c, h, u, d, p;
    if ((n && (r = rg(s, t, r, e)), s.length > 80 * e)) {
      (a = c = s[0]), (l = h = s[1]);
      for (let g = e; g < i; g += e)
        (u = s[g]),
          (d = s[g + 1]),
          u < a && (a = u),
          d < l && (l = d),
          u > c && (c = u),
          d > h && (h = d);
      (p = Math.max(c - a, h - l)), (p = p !== 0 ? 1 / p : 0);
    }
    return $i(r, o, e, a, l, p), o;
  },
};
function $l(s, t, e, n, i) {
  let r, o;
  if (i === mg(s, t, e, n) > 0)
    for (r = t; r < e; r += n) o = ul(r, s[r], s[r + 1], o);
  else for (r = e - n; r >= t; r -= n) o = ul(r, s[r], s[r + 1], o);
  return o && ss(o, o.next) && (Qi(o), (o = o.next)), o;
}
function mn(s, t) {
  if (!s) return s;
  t || (t = s);
  let e = s,
    n;
  do
    if (
      ((n = !1), !e.steiner && (ss(e, e.next) || Kt(e.prev, e, e.next) === 0))
    ) {
      if ((Qi(e), (e = t = e.prev), e === e.next)) break;
      n = !0;
    } else e = e.next;
  while (n || e !== t);
  return t;
}
function $i(s, t, e, n, i, r, o) {
  if (!s) return;
  !o && r && cg(s, n, i, r);
  let a = s,
    l,
    c;
  for (; s.prev !== s.next; ) {
    if (((l = s.prev), (c = s.next), r ? eg(s, n, i, r) : tg(s))) {
      t.push(l.i / e),
        t.push(s.i / e),
        t.push(c.i / e),
        Qi(s),
        (s = c.next),
        (a = c.next);
      continue;
    }
    if (((s = c), s === a)) {
      o
        ? o === 1
          ? ((s = ng(mn(s), t, e)), $i(s, t, e, n, i, r, 2))
          : o === 2 && ig(s, t, e, n, i, r)
        : $i(mn(s), t, e, n, i, r, 1);
      break;
    }
  }
}
function tg(s) {
  const t = s.prev,
    e = s,
    n = s.next;
  if (Kt(t, e, n) >= 0) return !1;
  let i = s.next.next;
  for (; i !== s.prev; ) {
    if (
      ai(t.x, t.y, e.x, e.y, n.x, n.y, i.x, i.y) &&
      Kt(i.prev, i, i.next) >= 0
    )
      return !1;
    i = i.next;
  }
  return !0;
}
function eg(s, t, e, n) {
  const i = s.prev,
    r = s,
    o = s.next;
  if (Kt(i, r, o) >= 0) return !1;
  const a = i.x < r.x ? (i.x < o.x ? i.x : o.x) : r.x < o.x ? r.x : o.x,
    l = i.y < r.y ? (i.y < o.y ? i.y : o.y) : r.y < o.y ? r.y : o.y,
    c = i.x > r.x ? (i.x > o.x ? i.x : o.x) : r.x > o.x ? r.x : o.x,
    h = i.y > r.y ? (i.y > o.y ? i.y : o.y) : r.y > o.y ? r.y : o.y,
    u = ao(a, l, t, e, n),
    d = ao(c, h, t, e, n);
  let p = s.prevZ,
    g = s.nextZ;
  for (; p && p.z >= u && g && g.z <= d; ) {
    if (
      (p !== s.prev &&
        p !== s.next &&
        ai(i.x, i.y, r.x, r.y, o.x, o.y, p.x, p.y) &&
        Kt(p.prev, p, p.next) >= 0) ||
      ((p = p.prevZ),
      g !== s.prev &&
        g !== s.next &&
        ai(i.x, i.y, r.x, r.y, o.x, o.y, g.x, g.y) &&
        Kt(g.prev, g, g.next) >= 0)
    )
      return !1;
    g = g.nextZ;
  }
  for (; p && p.z >= u; ) {
    if (
      p !== s.prev &&
      p !== s.next &&
      ai(i.x, i.y, r.x, r.y, o.x, o.y, p.x, p.y) &&
      Kt(p.prev, p, p.next) >= 0
    )
      return !1;
    p = p.prevZ;
  }
  for (; g && g.z <= d; ) {
    if (
      g !== s.prev &&
      g !== s.next &&
      ai(i.x, i.y, r.x, r.y, o.x, o.y, g.x, g.y) &&
      Kt(g.prev, g, g.next) >= 0
    )
      return !1;
    g = g.nextZ;
  }
  return !0;
}
function ng(s, t, e) {
  let n = s;
  do {
    const i = n.prev,
      r = n.next.next;
    !ss(i, r) &&
      Kl(i, n, n.next, r) &&
      Ki(i, r) &&
      Ki(r, i) &&
      (t.push(i.i / e),
      t.push(n.i / e),
      t.push(r.i / e),
      Qi(n),
      Qi(n.next),
      (n = s = r)),
      (n = n.next);
  } while (n !== s);
  return mn(n);
}
function ig(s, t, e, n, i, r) {
  let o = s;
  do {
    let a = o.next.next;
    for (; a !== o.prev; ) {
      if (o.i !== a.i && dg(o, a)) {
        let l = Ql(o, a);
        (o = mn(o, o.next)),
          (l = mn(l, l.next)),
          $i(o, t, e, n, i, r),
          $i(l, t, e, n, i, r);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== s);
}
function rg(s, t, e, n) {
  const i = [];
  let r, o, a, l, c;
  for (r = 0, o = t.length; r < o; r++)
    (a = t[r] * n),
      (l = r < o - 1 ? t[r + 1] * n : s.length),
      (c = $l(s, a, l, n, !1)),
      c === c.next && (c.steiner = !0),
      i.push(ug(c));
  for (i.sort(sg), r = 0; r < i.length; r++) og(i[r], e), (e = mn(e, e.next));
  return e;
}
function sg(s, t) {
  return s.x - t.x;
}
function og(s, t) {
  if (((t = ag(s, t)), t)) {
    const e = Ql(t, s);
    mn(t, t.next), mn(e, e.next);
  }
}
function ag(s, t) {
  let e = t;
  const n = s.x,
    i = s.y;
  let r = -1 / 0,
    o;
  do {
    if (i <= e.y && i >= e.next.y && e.next.y !== e.y) {
      const d = e.x + ((i - e.y) * (e.next.x - e.x)) / (e.next.y - e.y);
      if (d <= n && d > r) {
        if (((r = d), d === n)) {
          if (i === e.y) return e;
          if (i === e.next.y) return e.next;
        }
        o = e.x < e.next.x ? e : e.next;
      }
    }
    e = e.next;
  } while (e !== t);
  if (!o) return null;
  if (n === r) return o;
  const a = o,
    l = o.x,
    c = o.y;
  let h = 1 / 0,
    u;
  e = o;
  do
    n >= e.x &&
      e.x >= l &&
      n !== e.x &&
      ai(i < c ? n : r, i, l, c, i < c ? r : n, i, e.x, e.y) &&
      ((u = Math.abs(i - e.y) / (n - e.x)),
      Ki(e, s) &&
        (u < h || (u === h && (e.x > o.x || (e.x === o.x && lg(o, e))))) &&
        ((o = e), (h = u))),
      (e = e.next);
  while (e !== a);
  return o;
}
function lg(s, t) {
  return Kt(s.prev, s, t.prev) < 0 && Kt(t.next, s, s.next) < 0;
}
function cg(s, t, e, n) {
  let i = s;
  do
    i.z === null && (i.z = ao(i.x, i.y, t, e, n)),
      (i.prevZ = i.prev),
      (i.nextZ = i.next),
      (i = i.next);
  while (i !== s);
  (i.prevZ.nextZ = null), (i.prevZ = null), hg(i);
}
function hg(s) {
  let t,
    e,
    n,
    i,
    r,
    o,
    a,
    l,
    c = 1;
  do {
    for (e = s, s = null, r = null, o = 0; e; ) {
      for (o++, n = e, a = 0, t = 0; t < c && (a++, (n = n.nextZ), !!n); t++);
      for (l = c; a > 0 || (l > 0 && n); )
        a !== 0 && (l === 0 || !n || e.z <= n.z)
          ? ((i = e), (e = e.nextZ), a--)
          : ((i = n), (n = n.nextZ), l--),
          r ? (r.nextZ = i) : (s = i),
          (i.prevZ = r),
          (r = i);
      e = n;
    }
    (r.nextZ = null), (c *= 2);
  } while (o > 1);
  return s;
}
function ao(s, t, e, n, i) {
  return (
    (s = 32767 * (s - e) * i),
    (t = 32767 * (t - n) * i),
    (s = (s | (s << 8)) & 16711935),
    (s = (s | (s << 4)) & 252645135),
    (s = (s | (s << 2)) & 858993459),
    (s = (s | (s << 1)) & 1431655765),
    (t = (t | (t << 8)) & 16711935),
    (t = (t | (t << 4)) & 252645135),
    (t = (t | (t << 2)) & 858993459),
    (t = (t | (t << 1)) & 1431655765),
    s | (t << 1)
  );
}
function ug(s) {
  let t = s,
    e = s;
  do (t.x < e.x || (t.x === e.x && t.y < e.y)) && (e = t), (t = t.next);
  while (t !== s);
  return e;
}
function ai(s, t, e, n, i, r, o, a) {
  return (
    (i - o) * (t - a) - (s - o) * (r - a) >= 0 &&
    (s - o) * (n - a) - (e - o) * (t - a) >= 0 &&
    (e - o) * (r - a) - (i - o) * (n - a) >= 0
  );
}
function dg(s, t) {
  return (
    s.next.i !== t.i &&
    s.prev.i !== t.i &&
    !fg(s, t) &&
    ((Ki(s, t) &&
      Ki(t, s) &&
      pg(s, t) &&
      (Kt(s.prev, s, t.prev) || Kt(s, t.prev, t))) ||
      (ss(s, t) && Kt(s.prev, s, s.next) > 0 && Kt(t.prev, t, t.next) > 0))
  );
}
function Kt(s, t, e) {
  return (t.y - s.y) * (e.x - t.x) - (t.x - s.x) * (e.y - t.y);
}
function ss(s, t) {
  return s.x === t.x && s.y === t.y;
}
function Kl(s, t, e, n) {
  const i = zr(Kt(s, t, e)),
    r = zr(Kt(s, t, n)),
    o = zr(Kt(e, n, s)),
    a = zr(Kt(e, n, t));
  return !!(
    (i !== r && o !== a) ||
    (i === 0 && Br(s, e, t)) ||
    (r === 0 && Br(s, n, t)) ||
    (o === 0 && Br(e, s, n)) ||
    (a === 0 && Br(e, t, n))
  );
}
function Br(s, t, e) {
  return (
    t.x <= Math.max(s.x, e.x) &&
    t.x >= Math.min(s.x, e.x) &&
    t.y <= Math.max(s.y, e.y) &&
    t.y >= Math.min(s.y, e.y)
  );
}
function zr(s) {
  return s > 0 ? 1 : s < 0 ? -1 : 0;
}
function fg(s, t) {
  let e = s;
  do {
    if (
      e.i !== s.i &&
      e.next.i !== s.i &&
      e.i !== t.i &&
      e.next.i !== t.i &&
      Kl(e, e.next, s, t)
    )
      return !0;
    e = e.next;
  } while (e !== s);
  return !1;
}
function Ki(s, t) {
  return Kt(s.prev, s, s.next) < 0
    ? Kt(s, t, s.next) >= 0 && Kt(s, s.prev, t) >= 0
    : Kt(s, t, s.prev) < 0 || Kt(s, s.next, t) < 0;
}
function pg(s, t) {
  let e = s,
    n = !1;
  const i = (s.x + t.x) / 2,
    r = (s.y + t.y) / 2;
  do
    e.y > r != e.next.y > r &&
      e.next.y !== e.y &&
      i < ((e.next.x - e.x) * (r - e.y)) / (e.next.y - e.y) + e.x &&
      (n = !n),
      (e = e.next);
  while (e !== s);
  return n;
}
function Ql(s, t) {
  const e = new lo(s.i, s.x, s.y),
    n = new lo(t.i, t.x, t.y),
    i = s.next,
    r = t.prev;
  return (
    (s.next = t),
    (t.prev = s),
    (e.next = i),
    (i.prev = e),
    (n.next = e),
    (e.prev = n),
    (r.next = n),
    (n.prev = r),
    n
  );
}
function ul(s, t, e, n) {
  const i = new lo(s, t, e);
  return (
    n
      ? ((i.next = n.next), (i.prev = n), (n.next.prev = i), (n.next = i))
      : ((i.prev = i), (i.next = i)),
    i
  );
}
function Qi(s) {
  (s.next.prev = s.prev),
    (s.prev.next = s.next),
    s.prevZ && (s.prevZ.nextZ = s.nextZ),
    s.nextZ && (s.nextZ.prevZ = s.prevZ);
}
function lo(s, t, e) {
  (this.i = s),
    (this.x = t),
    (this.y = e),
    (this.prev = null),
    (this.next = null),
    (this.z = null),
    (this.prevZ = null),
    (this.nextZ = null),
    (this.steiner = !1);
}
function mg(s, t, e, n) {
  let i = 0;
  for (let r = t, o = e - n; r < e; r += n)
    (i += (s[o] - s[r]) * (s[r + 1] + s[o + 1])), (o = r);
  return i;
}
class fn {
  static area(t) {
    const e = t.length;
    let n = 0;
    for (let i = e - 1, r = 0; r < e; i = r++)
      n += t[i].x * t[r].y - t[r].x * t[i].y;
    return n * 0.5;
  }
  static isClockWise(t) {
    return fn.area(t) < 0;
  }
  static triangulateShape(t, e) {
    const n = [],
      i = [],
      r = [];
    dl(t), fl(n, t);
    let o = t.length;
    e.forEach(dl);
    for (let l = 0; l < e.length; l++)
      i.push(o), (o += e[l].length), fl(n, e[l]);
    const a = Qm.triangulate(n, i);
    for (let l = 0; l < a.length; l += 3) r.push(a.slice(l, l + 3));
    return r;
  }
}
function dl(s) {
  const t = s.length;
  t > 2 && s[t - 1].equals(s[0]) && s.pop();
}
function fl(s, t) {
  for (let e = 0; e < t.length; e++) s.push(t[e].x), s.push(t[e].y);
}
class Si extends Yt {
  constructor(
    t = new er([
      new Z(0.5, 0.5),
      new Z(-0.5, 0.5),
      new Z(-0.5, -0.5),
      new Z(0.5, -0.5),
    ]),
    e = {}
  ) {
    super(),
      (this.type = "ExtrudeGeometry"),
      (this.parameters = { shapes: t, options: e }),
      (t = Array.isArray(t) ? t : [t]);
    const n = this,
      i = [],
      r = [];
    for (let a = 0, l = t.length; a < l; a++) {
      const c = t[a];
      o(c);
    }
    this.setAttribute("position", new $t(i, 3)),
      this.setAttribute("uv", new $t(r, 2)),
      this.computeVertexNormals();
    function o(a) {
      const l = [],
        c = e.curveSegments !== void 0 ? e.curveSegments : 12,
        h = e.steps !== void 0 ? e.steps : 1;
      let u = e.depth !== void 0 ? e.depth : 1,
        d = e.bevelEnabled !== void 0 ? e.bevelEnabled : !0,
        p = e.bevelThickness !== void 0 ? e.bevelThickness : 0.2,
        g = e.bevelSize !== void 0 ? e.bevelSize : p - 0.1,
        m = e.bevelOffset !== void 0 ? e.bevelOffset : 0,
        f = e.bevelSegments !== void 0 ? e.bevelSegments : 3;
      const _ = e.extrudePath,
        w = e.UVGenerator !== void 0 ? e.UVGenerator : gg;
      e.amount !== void 0 &&
        (console.warn(
          "THREE.ExtrudeBufferGeometry: amount has been renamed to depth."
        ),
        (u = e.amount));
      let C,
        T = !1,
        y,
        L,
        I,
        v;
      _ &&
        ((C = _.getSpacedPoints(h)),
        (T = !0),
        (d = !1),
        (y = _.computeFrenetFrames(h, !1)),
        (L = new E()),
        (I = new E()),
        (v = new E())),
        d || ((f = 0), (p = 0), (g = 0), (m = 0));
      const R = a.extractPoints(c);
      let B = R.shape;
      const F = R.holes;
      if (!fn.isClockWise(B)) {
        B = B.reverse();
        for (let j = 0, q = F.length; j < q; j++) {
          const nt = F[j];
          fn.isClockWise(nt) && (F[j] = nt.reverse());
        }
      }
      const K = fn.triangulateShape(B, F),
        P = B;
      for (let j = 0, q = F.length; j < q; j++) {
        const nt = F[j];
        B = B.concat(nt);
      }
      function k(j, q, nt) {
        return (
          q || console.error("THREE.ExtrudeGeometry: vec does not exist"),
          q.clone().multiplyScalar(nt).add(j)
        );
      }
      const z = B.length,
        G = K.length;
      function X(j, q, nt) {
        let pt, lt, Ct;
        const wt = j.x - q.x,
          vt = j.y - q.y,
          Xt = nt.x - j.x,
          Ut = nt.y - j.y,
          S = wt * wt + vt * vt,
          x = wt * Ut - vt * Xt;
        if (Math.abs(x) > Number.EPSILON) {
          const O = Math.sqrt(S),
            $ = Math.sqrt(Xt * Xt + Ut * Ut),
            ct = q.x - vt / O,
            ft = q.y + wt / O,
            Mt = nt.x - Ut / $,
            M = nt.y + Xt / $,
            tt = ((Mt - ct) * Ut - (M - ft) * Xt) / (wt * Ut - vt * Xt);
          (pt = ct + wt * tt - j.x), (lt = ft + vt * tt - j.y);
          const gt = pt * pt + lt * lt;
          if (gt <= 2) return new Z(pt, lt);
          Ct = Math.sqrt(gt / 2);
        } else {
          let O = !1;
          wt > Number.EPSILON
            ? Xt > Number.EPSILON && (O = !0)
            : wt < -Number.EPSILON
            ? Xt < -Number.EPSILON && (O = !0)
            : Math.sign(vt) === Math.sign(Ut) && (O = !0),
            O
              ? ((pt = -vt), (lt = wt), (Ct = Math.sqrt(S)))
              : ((pt = wt), (lt = vt), (Ct = Math.sqrt(S / 2)));
        }
        return new Z(pt / Ct, lt / Ct);
      }
      const H = [];
      for (
        let j = 0, q = P.length, nt = q - 1, pt = j + 1;
        j < q;
        j++, nt++, pt++
      )
        nt === q && (nt = 0),
          pt === q && (pt = 0),
          (H[j] = X(P[j], P[nt], P[pt]));
      const W = [];
      let Q,
        J = H.concat();
      for (let j = 0, q = F.length; j < q; j++) {
        const nt = F[j];
        Q = [];
        for (
          let pt = 0, lt = nt.length, Ct = lt - 1, wt = pt + 1;
          pt < lt;
          pt++, Ct++, wt++
        )
          Ct === lt && (Ct = 0),
            wt === lt && (wt = 0),
            (Q[pt] = X(nt[pt], nt[Ct], nt[wt]));
        W.push(Q), (J = J.concat(Q));
      }
      for (let j = 0; j < f; j++) {
        const q = j / f,
          nt = p * Math.cos((q * Math.PI) / 2),
          pt = g * Math.sin((q * Math.PI) / 2) + m;
        for (let lt = 0, Ct = P.length; lt < Ct; lt++) {
          const wt = k(P[lt], H[lt], pt);
          zt(wt.x, wt.y, -nt);
        }
        for (let lt = 0, Ct = F.length; lt < Ct; lt++) {
          const wt = F[lt];
          Q = W[lt];
          for (let vt = 0, Xt = wt.length; vt < Xt; vt++) {
            const Ut = k(wt[vt], Q[vt], pt);
            zt(Ut.x, Ut.y, -nt);
          }
        }
      }
      const et = g + m;
      for (let j = 0; j < z; j++) {
        const q = d ? k(B[j], J[j], et) : B[j];
        T
          ? (I.copy(y.normals[0]).multiplyScalar(q.x),
            L.copy(y.binormals[0]).multiplyScalar(q.y),
            v.copy(C[0]).add(I).add(L),
            zt(v.x, v.y, v.z))
          : zt(q.x, q.y, 0);
      }
      for (let j = 1; j <= h; j++)
        for (let q = 0; q < z; q++) {
          const nt = d ? k(B[q], J[q], et) : B[q];
          T
            ? (I.copy(y.normals[j]).multiplyScalar(nt.x),
              L.copy(y.binormals[j]).multiplyScalar(nt.y),
              v.copy(C[j]).add(I).add(L),
              zt(v.x, v.y, v.z))
            : zt(nt.x, nt.y, (u / h) * j);
        }
      for (let j = f - 1; j >= 0; j--) {
        const q = j / f,
          nt = p * Math.cos((q * Math.PI) / 2),
          pt = g * Math.sin((q * Math.PI) / 2) + m;
        for (let lt = 0, Ct = P.length; lt < Ct; lt++) {
          const wt = k(P[lt], H[lt], pt);
          zt(wt.x, wt.y, u + nt);
        }
        for (let lt = 0, Ct = F.length; lt < Ct; lt++) {
          const wt = F[lt];
          Q = W[lt];
          for (let vt = 0, Xt = wt.length; vt < Xt; vt++) {
            const Ut = k(wt[vt], Q[vt], pt);
            T
              ? zt(Ut.x, Ut.y + C[h - 1].y, C[h - 1].x + nt)
              : zt(Ut.x, Ut.y, u + nt);
          }
        }
      }
      mt(), yt();
      function mt() {
        const j = i.length / 3;
        if (d) {
          let q = 0,
            nt = z * q;
          for (let pt = 0; pt < G; pt++) {
            const lt = K[pt];
            Et(lt[2] + nt, lt[1] + nt, lt[0] + nt);
          }
          (q = h + f * 2), (nt = z * q);
          for (let pt = 0; pt < G; pt++) {
            const lt = K[pt];
            Et(lt[0] + nt, lt[1] + nt, lt[2] + nt);
          }
        } else {
          for (let q = 0; q < G; q++) {
            const nt = K[q];
            Et(nt[2], nt[1], nt[0]);
          }
          for (let q = 0; q < G; q++) {
            const nt = K[q];
            Et(nt[0] + z * h, nt[1] + z * h, nt[2] + z * h);
          }
        }
        n.addGroup(j, i.length / 3 - j, 0);
      }
      function yt() {
        const j = i.length / 3;
        let q = 0;
        V(P, q), (q += P.length);
        for (let nt = 0, pt = F.length; nt < pt; nt++) {
          const lt = F[nt];
          V(lt, q), (q += lt.length);
        }
        n.addGroup(j, i.length / 3 - j, 1);
      }
      function V(j, q) {
        let nt = j.length;
        for (; --nt >= 0; ) {
          const pt = nt;
          let lt = nt - 1;
          lt < 0 && (lt = j.length - 1);
          for (let Ct = 0, wt = h + f * 2; Ct < wt; Ct++) {
            const vt = z * Ct,
              Xt = z * (Ct + 1),
              Ut = q + pt + vt,
              S = q + lt + vt,
              x = q + lt + Xt,
              O = q + pt + Xt;
            Lt(Ut, S, x, O);
          }
        }
      }
      function zt(j, q, nt) {
        l.push(j), l.push(q), l.push(nt);
      }
      function Et(j, q, nt) {
        rt(j), rt(q), rt(nt);
        const pt = i.length / 3,
          lt = w.generateTopUV(n, i, pt - 3, pt - 2, pt - 1);
        Dt(lt[0]), Dt(lt[1]), Dt(lt[2]);
      }
      function Lt(j, q, nt, pt) {
        rt(j), rt(q), rt(pt), rt(q), rt(nt), rt(pt);
        const lt = i.length / 3,
          Ct = w.generateSideWallUV(n, i, lt - 6, lt - 3, lt - 2, lt - 1);
        Dt(Ct[0]), Dt(Ct[1]), Dt(Ct[3]), Dt(Ct[1]), Dt(Ct[2]), Dt(Ct[3]);
      }
      function rt(j) {
        i.push(l[j * 3 + 0]), i.push(l[j * 3 + 1]), i.push(l[j * 3 + 2]);
      }
      function Dt(j) {
        r.push(j.x), r.push(j.y);
      }
    }
  }
  toJSON() {
    const t = super.toJSON(),
      e = this.parameters.shapes,
      n = this.parameters.options;
    return _g(e, n, t);
  }
  static fromJSON(t, e) {
    const n = [];
    for (let r = 0, o = t.shapes.length; r < o; r++) {
      const a = e[t.shapes[r]];
      n.push(a);
    }
    const i = t.options.extrudePath;
    return (
      i !== void 0 && (t.options.extrudePath = new Jl[i.type]().fromJSON(i)),
      new Si(n, t.options)
    );
  }
}
const gg = {
  generateTopUV: function (s, t, e, n, i) {
    const r = t[e * 3],
      o = t[e * 3 + 1],
      a = t[n * 3],
      l = t[n * 3 + 1],
      c = t[i * 3],
      h = t[i * 3 + 1];
    return [new Z(r, o), new Z(a, l), new Z(c, h)];
  },
  generateSideWallUV: function (s, t, e, n, i, r) {
    const o = t[e * 3],
      a = t[e * 3 + 1],
      l = t[e * 3 + 2],
      c = t[n * 3],
      h = t[n * 3 + 1],
      u = t[n * 3 + 2],
      d = t[i * 3],
      p = t[i * 3 + 1],
      g = t[i * 3 + 2],
      m = t[r * 3],
      f = t[r * 3 + 1],
      _ = t[r * 3 + 2];
    return Math.abs(a - h) < Math.abs(o - c)
      ? [new Z(o, 1 - l), new Z(c, 1 - u), new Z(d, 1 - g), new Z(m, 1 - _)]
      : [new Z(a, 1 - l), new Z(h, 1 - u), new Z(p, 1 - g), new Z(f, 1 - _)];
  },
};
function _g(s, t, e) {
  if (((e.shapes = []), Array.isArray(s)))
    for (let n = 0, i = s.length; n < i; n++) {
      const r = s[n];
      e.shapes.push(r.uuid);
    }
  else e.shapes.push(s.uuid);
  return (
    t.extrudePath !== void 0 &&
      (e.options.extrudePath = t.extrudePath.toJSON()),
    e
  );
}
class Do extends Yt {
  constructor(
    t = new er([new Z(0, 0.5), new Z(-0.5, -0.5), new Z(0.5, -0.5)]),
    e = 12
  ) {
    super(),
      (this.type = "ShapeGeometry"),
      (this.parameters = { shapes: t, curveSegments: e });
    const n = [],
      i = [],
      r = [],
      o = [];
    let a = 0,
      l = 0;
    if (Array.isArray(t) === !1) c(t);
    else
      for (let h = 0; h < t.length; h++)
        c(t[h]), this.addGroup(a, l, h), (a += l), (l = 0);
    this.setIndex(n),
      this.setAttribute("position", new $t(i, 3)),
      this.setAttribute("normal", new $t(r, 3)),
      this.setAttribute("uv", new $t(o, 2));
    function c(h) {
      const u = i.length / 3,
        d = h.extractPoints(e);
      let p = d.shape;
      const g = d.holes;
      fn.isClockWise(p) === !1 && (p = p.reverse());
      for (let f = 0, _ = g.length; f < _; f++) {
        const w = g[f];
        fn.isClockWise(w) === !0 && (g[f] = w.reverse());
      }
      const m = fn.triangulateShape(p, g);
      for (let f = 0, _ = g.length; f < _; f++) {
        const w = g[f];
        p = p.concat(w);
      }
      for (let f = 0, _ = p.length; f < _; f++) {
        const w = p[f];
        i.push(w.x, w.y, 0), r.push(0, 0, 1), o.push(w.x, w.y);
      }
      for (let f = 0, _ = m.length; f < _; f++) {
        const w = m[f],
          C = w[0] + u,
          T = w[1] + u,
          y = w[2] + u;
        n.push(C, T, y), (l += 3);
      }
    }
  }
  toJSON() {
    const t = super.toJSON(),
      e = this.parameters.shapes;
    return xg(e, t);
  }
  static fromJSON(t, e) {
    const n = [];
    for (let i = 0, r = t.shapes.length; i < r; i++) {
      const o = e[t.shapes[i]];
      n.push(o);
    }
    return new Do(n, t.curveSegments);
  }
}
function xg(s, t) {
  if (((t.shapes = []), Array.isArray(s)))
    for (let e = 0, n = s.length; e < n; e++) {
      const i = s[e];
      t.shapes.push(i.uuid);
    }
  else t.shapes.push(s.uuid);
  return t;
}
class os extends Yt {
  constructor(
    t = 1,
    e = 32,
    n = 16,
    i = 0,
    r = Math.PI * 2,
    o = 0,
    a = Math.PI
  ) {
    super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: t,
        widthSegments: e,
        heightSegments: n,
        phiStart: i,
        phiLength: r,
        thetaStart: o,
        thetaLength: a,
      }),
      (e = Math.max(3, Math.floor(e))),
      (n = Math.max(2, Math.floor(n)));
    const l = Math.min(o + a, Math.PI);
    let c = 0;
    const h = [],
      u = new E(),
      d = new E(),
      p = [],
      g = [],
      m = [],
      f = [];
    for (let _ = 0; _ <= n; _++) {
      const w = [],
        C = _ / n;
      let T = 0;
      _ == 0 && o == 0
        ? (T = 0.5 / e)
        : _ == n && l == Math.PI && (T = -0.5 / e);
      for (let y = 0; y <= e; y++) {
        const L = y / e;
        (u.x = -t * Math.cos(i + L * r) * Math.sin(o + C * a)),
          (u.y = t * Math.cos(o + C * a)),
          (u.z = t * Math.sin(i + L * r) * Math.sin(o + C * a)),
          g.push(u.x, u.y, u.z),
          d.copy(u).normalize(),
          m.push(d.x, d.y, d.z),
          f.push(L + T, 1 - C),
          w.push(c++);
      }
      h.push(w);
    }
    for (let _ = 0; _ < n; _++)
      for (let w = 0; w < e; w++) {
        const C = h[_][w + 1],
          T = h[_][w],
          y = h[_ + 1][w],
          L = h[_ + 1][w + 1];
        (_ !== 0 || o > 0) && p.push(C, T, L),
          (_ !== n - 1 || l < Math.PI) && p.push(T, y, L);
      }
    this.setIndex(p),
      this.setAttribute("position", new $t(g, 3)),
      this.setAttribute("normal", new $t(m, 3)),
      this.setAttribute("uv", new $t(f, 2));
  }
  static fromJSON(t) {
    return new os(
      t.radius,
      t.widthSegments,
      t.heightSegments,
      t.phiStart,
      t.phiLength,
      t.thetaStart,
      t.thetaLength
    );
  }
}
class Io extends Yt {
  constructor(t = 1, e = 0.4, n = 8, i = 6, r = Math.PI * 2) {
    super(),
      (this.type = "TorusGeometry"),
      (this.parameters = {
        radius: t,
        tube: e,
        radialSegments: n,
        tubularSegments: i,
        arc: r,
      }),
      (n = Math.floor(n)),
      (i = Math.floor(i));
    const o = [],
      a = [],
      l = [],
      c = [],
      h = new E(),
      u = new E(),
      d = new E();
    for (let p = 0; p <= n; p++)
      for (let g = 0; g <= i; g++) {
        const m = (g / i) * r,
          f = (p / n) * Math.PI * 2;
        (u.x = (t + e * Math.cos(f)) * Math.cos(m)),
          (u.y = (t + e * Math.cos(f)) * Math.sin(m)),
          (u.z = e * Math.sin(f)),
          a.push(u.x, u.y, u.z),
          (h.x = t * Math.cos(m)),
          (h.y = t * Math.sin(m)),
          d.subVectors(u, h).normalize(),
          l.push(d.x, d.y, d.z),
          c.push(g / i),
          c.push(p / n);
      }
    for (let p = 1; p <= n; p++)
      for (let g = 1; g <= i; g++) {
        const m = (i + 1) * p + g - 1,
          f = (i + 1) * (p - 1) + g - 1,
          _ = (i + 1) * (p - 1) + g,
          w = (i + 1) * p + g;
        o.push(m, f, w), o.push(f, _, w);
      }
    this.setIndex(o),
      this.setAttribute("position", new $t(a, 3)),
      this.setAttribute("normal", new $t(l, 3)),
      this.setAttribute("uv", new $t(c, 2));
  }
  static fromJSON(t) {
    return new Io(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc);
  }
}
class tc extends se {
  constructor(t) {
    super(),
      (this.type = "ShadowMaterial"),
      (this.color = new xt(0)),
      (this.transparent = !0),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), (this.fog = t.fog), this;
  }
}
tc.prototype.isShadowMaterial = !0;
class ec extends Fe {
  constructor(t) {
    super(t), (this.type = "RawShaderMaterial");
  }
}
ec.prototype.isRawShaderMaterial = !0;
class nr extends se {
  constructor(t) {
    super(),
      (this.defines = { STANDARD: "" }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new xt(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new xt(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = _i),
      (this.normalScale = new Z(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.defines = { STANDARD: "" }),
      this.color.copy(t.color),
      (this.roughness = t.roughness),
      (this.metalness = t.metalness),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      this.emissive.copy(t.emissive),
      (this.emissiveMap = t.emissiveMap),
      (this.emissiveIntensity = t.emissiveIntensity),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.roughnessMap = t.roughnessMap),
      (this.metalnessMap = t.metalnessMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      (this.envMapIntensity = t.envMapIntensity),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.flatShading = t.flatShading),
      (this.fog = t.fog),
      this
    );
  }
}
nr.prototype.isMeshStandardMaterial = !0;
class nc extends nr {
  constructor(t) {
    super(),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.type = "MeshPhysicalMaterial"),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new Z(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.ior = 1.5),
      Object.defineProperty(this, "reflectivity", {
        get: function () {
          return le((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
        },
        set: function (e) {
          this.ior = (1 + 0.4 * e) / (1 - 0.4 * e);
        },
      }),
      (this.sheenColor = new xt(0)),
      (this.sheenColorMap = null),
      (this.sheenRoughness = 1),
      (this.sheenRoughnessMap = null),
      (this.transmissionMap = null),
      (this.thickness = 0),
      (this.thicknessMap = null),
      (this.attenuationDistance = 0),
      (this.attenuationColor = new xt(1, 1, 1)),
      (this.specularIntensity = 1),
      (this.specularIntensityMap = null),
      (this.specularColor = new xt(1, 1, 1)),
      (this.specularColorMap = null),
      (this._sheen = 0),
      (this._clearcoat = 0),
      (this._transmission = 0),
      this.setValues(t);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(t) {
    this._sheen > 0 != t > 0 && this.version++, (this._sheen = t);
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(t) {
    this._clearcoat > 0 != t > 0 && this.version++, (this._clearcoat = t);
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(t) {
    this._transmission > 0 != t > 0 && this.version++, (this._transmission = t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.clearcoat = t.clearcoat),
      (this.clearcoatMap = t.clearcoatMap),
      (this.clearcoatRoughness = t.clearcoatRoughness),
      (this.clearcoatRoughnessMap = t.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = t.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(t.clearcoatNormalScale),
      (this.ior = t.ior),
      (this.sheen = t.sheen),
      this.sheenColor.copy(t.sheenColor),
      (this.sheenColorMap = t.sheenColorMap),
      (this.sheenRoughness = t.sheenRoughness),
      (this.sheenRoughnessMap = t.sheenRoughnessMap),
      (this.transmission = t.transmission),
      (this.transmissionMap = t.transmissionMap),
      (this.thickness = t.thickness),
      (this.thicknessMap = t.thicknessMap),
      (this.attenuationDistance = t.attenuationDistance),
      this.attenuationColor.copy(t.attenuationColor),
      (this.specularIntensity = t.specularIntensity),
      (this.specularIntensityMap = t.specularIntensityMap),
      this.specularColor.copy(t.specularColor),
      (this.specularColorMap = t.specularColorMap),
      this
    );
  }
}
nc.prototype.isMeshPhysicalMaterial = !0;
class ic extends se {
  constructor(t) {
    super(),
      (this.type = "MeshPhongMaterial"),
      (this.color = new xt(16777215)),
      (this.specular = new xt(1118481)),
      (this.shininess = 30),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new xt(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = _i),
      (this.normalScale = new Z(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Jr),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      this.specular.copy(t.specular),
      (this.shininess = t.shininess),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      this.emissive.copy(t.emissive),
      (this.emissiveMap = t.emissiveMap),
      (this.emissiveIntensity = t.emissiveIntensity),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.specularMap = t.specularMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      (this.combine = t.combine),
      (this.reflectivity = t.reflectivity),
      (this.refractionRatio = t.refractionRatio),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.flatShading = t.flatShading),
      (this.fog = t.fog),
      this
    );
  }
}
ic.prototype.isMeshPhongMaterial = !0;
class rc extends se {
  constructor(t) {
    super(),
      (this.defines = { TOON: "" }),
      (this.type = "MeshToonMaterial"),
      (this.color = new xt(16777215)),
      (this.map = null),
      (this.gradientMap = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new xt(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = _i),
      (this.normalScale = new Z(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.alphaMap = null),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.gradientMap = t.gradientMap),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      this.emissive.copy(t.emissive),
      (this.emissiveMap = t.emissiveMap),
      (this.emissiveIntensity = t.emissiveIntensity),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.alphaMap = t.alphaMap),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.fog = t.fog),
      this
    );
  }
}
rc.prototype.isMeshToonMaterial = !0;
class sc extends se {
  constructor(t) {
    super(),
      (this.type = "MeshNormalMaterial"),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = _i),
      (this.normalScale = new Z(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.flatShading = !1),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.flatShading = t.flatShading),
      this
    );
  }
}
sc.prototype.isMeshNormalMaterial = !0;
class oc extends se {
  constructor(t) {
    super(),
      (this.type = "MeshLambertMaterial"),
      (this.color = new xt(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new xt(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Jr),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      this.emissive.copy(t.emissive),
      (this.emissiveMap = t.emissiveMap),
      (this.emissiveIntensity = t.emissiveIntensity),
      (this.specularMap = t.specularMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      (this.combine = t.combine),
      (this.reflectivity = t.reflectivity),
      (this.refractionRatio = t.refractionRatio),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.fog = t.fog),
      this
    );
  }
}
oc.prototype.isMeshLambertMaterial = !0;
class ac extends se {
  constructor(t) {
    super(),
      (this.defines = { MATCAP: "" }),
      (this.type = "MeshMatcapMaterial"),
      (this.color = new xt(16777215)),
      (this.matcap = null),
      (this.map = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = _i),
      (this.normalScale = new Z(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.alphaMap = null),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.defines = { MATCAP: "" }),
      this.color.copy(t.color),
      (this.matcap = t.matcap),
      (this.map = t.map),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.alphaMap = t.alphaMap),
      (this.flatShading = t.flatShading),
      (this.fog = t.fog),
      this
    );
  }
}
ac.prototype.isMeshMatcapMaterial = !0;
class lc extends wi {
  constructor(t) {
    super(),
      (this.type = "LineDashedMaterial"),
      (this.scale = 1),
      (this.dashSize = 3),
      (this.gapSize = 1),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.scale = t.scale),
      (this.dashSize = t.dashSize),
      (this.gapSize = t.gapSize),
      this
    );
  }
}
lc.prototype.isLineDashedMaterial = !0;
const yg = {
  ShadowMaterial: tc,
  SpriteMaterial: So,
  RawShaderMaterial: ec,
  ShaderMaterial: Fe,
  PointsMaterial: Ao,
  MeshPhysicalMaterial: nc,
  MeshStandardMaterial: nr,
  MeshPhongMaterial: ic,
  MeshToonMaterial: rc,
  MeshNormalMaterial: sc,
  MeshLambertMaterial: oc,
  MeshDepthMaterial: Mo,
  MeshDistanceMaterial: bo,
  MeshBasicMaterial: vi,
  MeshMatcapMaterial: ac,
  LineDashedMaterial: lc,
  LineBasicMaterial: wi,
  Material: se,
};
se.fromType = function (s) {
  return new yg[s]();
};
const Jt = {
  arraySlice: function (s, t, e) {
    return Jt.isTypedArray(s)
      ? new s.constructor(s.subarray(t, e !== void 0 ? e : s.length))
      : s.slice(t, e);
  },
  convertArray: function (s, t, e) {
    return !s || (!e && s.constructor === t)
      ? s
      : typeof t.BYTES_PER_ELEMENT == "number"
      ? new t(s)
      : Array.prototype.slice.call(s);
  },
  isTypedArray: function (s) {
    return ArrayBuffer.isView(s) && !(s instanceof DataView);
  },
  getKeyframeOrder: function (s) {
    function t(i, r) {
      return s[i] - s[r];
    }
    const e = s.length,
      n = new Array(e);
    for (let i = 0; i !== e; ++i) n[i] = i;
    return n.sort(t), n;
  },
  sortedArray: function (s, t, e) {
    const n = s.length,
      i = new s.constructor(n);
    for (let r = 0, o = 0; o !== n; ++r) {
      const a = e[r] * t;
      for (let l = 0; l !== t; ++l) i[o++] = s[a + l];
    }
    return i;
  },
  flattenJSON: function (s, t, e, n) {
    let i = 1,
      r = s[0];
    for (; r !== void 0 && r[n] === void 0; ) r = s[i++];
    if (r === void 0) return;
    let o = r[n];
    if (o !== void 0)
      if (Array.isArray(o))
        do
          (o = r[n]),
            o !== void 0 && (t.push(r.time), e.push.apply(e, o)),
            (r = s[i++]);
        while (r !== void 0);
      else if (o.toArray !== void 0)
        do
          (o = r[n]),
            o !== void 0 && (t.push(r.time), o.toArray(e, e.length)),
            (r = s[i++]);
        while (r !== void 0);
      else
        do
          (o = r[n]), o !== void 0 && (t.push(r.time), e.push(o)), (r = s[i++]);
        while (r !== void 0);
  },
  subclip: function (s, t, e, n, i = 30) {
    const r = s.clone();
    r.name = t;
    const o = [];
    for (let l = 0; l < r.tracks.length; ++l) {
      const c = r.tracks[l],
        h = c.getValueSize(),
        u = [],
        d = [];
      for (let p = 0; p < c.times.length; ++p) {
        const g = c.times[p] * i;
        if (!(g < e || g >= n)) {
          u.push(c.times[p]);
          for (let m = 0; m < h; ++m) d.push(c.values[p * h + m]);
        }
      }
      u.length !== 0 &&
        ((c.times = Jt.convertArray(u, c.times.constructor)),
        (c.values = Jt.convertArray(d, c.values.constructor)),
        o.push(c));
    }
    r.tracks = o;
    let a = 1 / 0;
    for (let l = 0; l < r.tracks.length; ++l)
      a > r.tracks[l].times[0] && (a = r.tracks[l].times[0]);
    for (let l = 0; l < r.tracks.length; ++l) r.tracks[l].shift(-1 * a);
    return r.resetDuration(), r;
  },
  makeClipAdditive: function (s, t = 0, e = s, n = 30) {
    n <= 0 && (n = 30);
    const i = e.tracks.length,
      r = t / n;
    for (let o = 0; o < i; ++o) {
      const a = e.tracks[o],
        l = a.ValueTypeName;
      if (l === "bool" || l === "string") continue;
      const c = s.tracks.find(function (_) {
        return _.name === a.name && _.ValueTypeName === l;
      });
      if (c === void 0) continue;
      let h = 0;
      const u = a.getValueSize();
      a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
        (h = u / 3);
      let d = 0;
      const p = c.getValueSize();
      c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
        (d = p / 3);
      const g = a.times.length - 1;
      let m;
      if (r <= a.times[0]) {
        const _ = h,
          w = u - h;
        m = Jt.arraySlice(a.values, _, w);
      } else if (r >= a.times[g]) {
        const _ = g * u + h,
          w = _ + u - h;
        m = Jt.arraySlice(a.values, _, w);
      } else {
        const _ = a.createInterpolant(),
          w = h,
          C = u - h;
        _.evaluate(r), (m = Jt.arraySlice(_.resultBuffer, w, C));
      }
      l === "quaternion" &&
        new pe().fromArray(m).normalize().conjugate().toArray(m);
      const f = c.times.length;
      for (let _ = 0; _ < f; ++_) {
        const w = _ * p + d;
        if (l === "quaternion")
          pe.multiplyQuaternionsFlat(c.values, w, m, 0, c.values, w);
        else {
          const C = p - d * 2;
          for (let T = 0; T < C; ++T) c.values[w + T] -= m[T];
        }
      }
    }
    return (s.blendMode = Al), s;
  },
};
class gn {
  constructor(t, e, n, i) {
    (this.parameterPositions = t),
      (this._cachedIndex = 0),
      (this.resultBuffer = i !== void 0 ? i : new e.constructor(n)),
      (this.sampleValues = e),
      (this.valueSize = n),
      (this.settings = null),
      (this.DefaultSettings_ = {});
  }
  evaluate(t) {
    const e = this.parameterPositions;
    let n = this._cachedIndex,
      i = e[n],
      r = e[n - 1];
    t: {
      e: {
        let o;
        n: {
          i: if (!(t < i)) {
            for (let a = n + 2; ; ) {
              if (i === void 0) {
                if (t < r) break i;
                return (
                  (n = e.length),
                  (this._cachedIndex = n),
                  this.afterEnd_(n - 1, t, r)
                );
              }
              if (n === a) break;
              if (((r = i), (i = e[++n]), t < i)) break e;
            }
            o = e.length;
            break n;
          }
          if (!(t >= r)) {
            const a = e[1];
            t < a && ((n = 2), (r = a));
            for (let l = n - 2; ; ) {
              if (r === void 0)
                return (this._cachedIndex = 0), this.beforeStart_(0, t, i);
              if (n === l) break;
              if (((i = r), (r = e[--n - 1]), t >= r)) break e;
            }
            (o = n), (n = 0);
            break n;
          }
          break t;
        }
        for (; n < o; ) {
          const a = (n + o) >>> 1;
          t < e[a] ? (o = a) : (n = a + 1);
        }
        if (((i = e[n]), (r = e[n - 1]), r === void 0))
          return (this._cachedIndex = 0), this.beforeStart_(0, t, i);
        if (i === void 0)
          return (
            (n = e.length), (this._cachedIndex = n), this.afterEnd_(n - 1, r, t)
          );
      }
      (this._cachedIndex = n), this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, t, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(t) {
    const e = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      r = t * i;
    for (let o = 0; o !== i; ++o) e[o] = n[r + o];
    return e;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {}
}
gn.prototype.beforeStart_ = gn.prototype.copySampleValue_;
gn.prototype.afterEnd_ = gn.prototype.copySampleValue_;
class vg extends gn {
  constructor(t, e, n, i) {
    super(t, e, n, i),
      (this._weightPrev = -0),
      (this._offsetPrev = -0),
      (this._weightNext = -0),
      (this._offsetNext = -0),
      (this.DefaultSettings_ = { endingStart: ri, endingEnd: ri });
  }
  intervalChanged_(t, e, n) {
    const i = this.parameterPositions;
    let r = t - 2,
      o = t + 1,
      a = i[r],
      l = i[o];
    if (a === void 0)
      switch (this.getSettings_().endingStart) {
        case si:
          (r = t), (a = 2 * e - n);
          break;
        case qr:
          (r = i.length - 2), (a = e + i[r] - i[r + 1]);
          break;
        default:
          (r = t), (a = n);
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case si:
          (o = t), (l = 2 * n - e);
          break;
        case qr:
          (o = 1), (l = n + i[1] - i[0]);
          break;
        default:
          (o = t - 1), (l = e);
      }
    const c = (n - e) * 0.5,
      h = this.valueSize;
    (this._weightPrev = c / (e - a)),
      (this._weightNext = c / (l - n)),
      (this._offsetPrev = r * h),
      (this._offsetNext = o * h);
  }
  interpolate_(t, e, n, i) {
    const r = this.resultBuffer,
      o = this.sampleValues,
      a = this.valueSize,
      l = t * a,
      c = l - a,
      h = this._offsetPrev,
      u = this._offsetNext,
      d = this._weightPrev,
      p = this._weightNext,
      g = (n - e) / (i - e),
      m = g * g,
      f = m * g,
      _ = -d * f + 2 * d * m - d * g,
      w = (1 + d) * f + (-1.5 - 2 * d) * m + (-0.5 + d) * g + 1,
      C = (-1 - p) * f + (1.5 + p) * m + 0.5 * g,
      T = p * f - p * m;
    for (let y = 0; y !== a; ++y)
      r[y] = _ * o[h + y] + w * o[c + y] + C * o[l + y] + T * o[u + y];
    return r;
  }
}
class cc extends gn {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  interpolate_(t, e, n, i) {
    const r = this.resultBuffer,
      o = this.sampleValues,
      a = this.valueSize,
      l = t * a,
      c = l - a,
      h = (n - e) / (i - e),
      u = 1 - h;
    for (let d = 0; d !== a; ++d) r[d] = o[c + d] * u + o[l + d] * h;
    return r;
  }
}
class Mg extends gn {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  interpolate_(t) {
    return this.copySampleValue_(t - 1);
  }
}
class qe {
  constructor(t, e, n, i) {
    if (t === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (e === void 0 || e.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
    (this.name = t),
      (this.times = Jt.convertArray(e, this.TimeBufferType)),
      (this.values = Jt.convertArray(n, this.ValueBufferType)),
      this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(t) {
    const e = t.constructor;
    let n;
    if (e.toJSON !== this.toJSON) n = e.toJSON(t);
    else {
      n = {
        name: t.name,
        times: Jt.convertArray(t.times, Array),
        values: Jt.convertArray(t.values, Array),
      };
      const i = t.getInterpolation();
      i !== t.DefaultInterpolation && (n.interpolation = i);
    }
    return (n.type = t.ValueTypeName), n;
  }
  InterpolantFactoryMethodDiscrete(t) {
    return new Mg(this.times, this.values, this.getValueSize(), t);
  }
  InterpolantFactoryMethodLinear(t) {
    return new cc(this.times, this.values, this.getValueSize(), t);
  }
  InterpolantFactoryMethodSmooth(t) {
    return new vg(this.times, this.values, this.getValueSize(), t);
  }
  setInterpolation(t) {
    let e;
    switch (t) {
      case Gr:
        e = this.InterpolantFactoryMethodDiscrete;
        break;
      case Wr:
        e = this.InterpolantFactoryMethodLinear;
        break;
      case ps:
        e = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (e === void 0) {
      const n =
        "unsupported interpolation for " +
        this.ValueTypeName +
        " keyframe track named " +
        this.name;
      if (this.createInterpolant === void 0)
        if (t !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return (this.createInterpolant = e), this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Gr;
      case this.InterpolantFactoryMethodLinear:
        return Wr;
      case this.InterpolantFactoryMethodSmooth:
        return ps;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(t) {
    if (t !== 0) {
      const e = this.times;
      for (let n = 0, i = e.length; n !== i; ++n) e[n] += t;
    }
    return this;
  }
  scale(t) {
    if (t !== 1) {
      const e = this.times;
      for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t;
    }
    return this;
  }
  trim(t, e) {
    const n = this.times,
      i = n.length;
    let r = 0,
      o = i - 1;
    for (; r !== i && n[r] < t; ) ++r;
    for (; o !== -1 && n[o] > e; ) --o;
    if ((++o, r !== 0 || o !== i)) {
      r >= o && ((o = Math.max(o, 1)), (r = o - 1));
      const a = this.getValueSize();
      (this.times = Jt.arraySlice(n, r, o)),
        (this.values = Jt.arraySlice(this.values, r * a, o * a));
    }
    return this;
  }
  validate() {
    let t = !0;
    const e = this.getValueSize();
    e - Math.floor(e) !== 0 &&
      (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
      (t = !1));
    const n = this.times,
      i = this.values,
      r = n.length;
    r === 0 &&
      (console.error("THREE.KeyframeTrack: Track is empty.", this), (t = !1));
    let o = null;
    for (let a = 0; a !== r; a++) {
      const l = n[a];
      if (typeof l == "number" && isNaN(l)) {
        console.error(
          "THREE.KeyframeTrack: Time is not a valid number.",
          this,
          a,
          l
        ),
          (t = !1);
        break;
      }
      if (o !== null && o > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, a, l, o),
          (t = !1);
        break;
      }
      o = l;
    }
    if (i !== void 0 && Jt.isTypedArray(i))
      for (let a = 0, l = i.length; a !== l; ++a) {
        const c = i[a];
        if (isNaN(c)) {
          console.error(
            "THREE.KeyframeTrack: Value is not a valid number.",
            this,
            a,
            c
          ),
            (t = !1);
          break;
        }
      }
    return t;
  }
  optimize() {
    const t = Jt.arraySlice(this.times),
      e = Jt.arraySlice(this.values),
      n = this.getValueSize(),
      i = this.getInterpolation() === ps,
      r = t.length - 1;
    let o = 1;
    for (let a = 1; a < r; ++a) {
      let l = !1;
      const c = t[a],
        h = t[a + 1];
      if (c !== h && (a !== 1 || c !== t[0]))
        if (i) l = !0;
        else {
          const u = a * n,
            d = u - n,
            p = u + n;
          for (let g = 0; g !== n; ++g) {
            const m = e[u + g];
            if (m !== e[d + g] || m !== e[p + g]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (a !== o) {
          t[o] = t[a];
          const u = a * n,
            d = o * n;
          for (let p = 0; p !== n; ++p) e[d + p] = e[u + p];
        }
        ++o;
      }
    }
    if (r > 0) {
      t[o] = t[r];
      for (let a = r * n, l = o * n, c = 0; c !== n; ++c) e[l + c] = e[a + c];
      ++o;
    }
    return (
      o !== t.length
        ? ((this.times = Jt.arraySlice(t, 0, o)),
          (this.values = Jt.arraySlice(e, 0, o * n)))
        : ((this.times = t), (this.values = e)),
      this
    );
  }
  clone() {
    const t = Jt.arraySlice(this.times, 0),
      e = Jt.arraySlice(this.values, 0),
      n = this.constructor,
      i = new n(this.name, t, e);
    return (i.createInterpolant = this.createInterpolant), i;
  }
}
qe.prototype.TimeBufferType = Float32Array;
qe.prototype.ValueBufferType = Float32Array;
qe.prototype.DefaultInterpolation = Wr;
class Ei extends qe {}
Ei.prototype.ValueTypeName = "bool";
Ei.prototype.ValueBufferType = Array;
Ei.prototype.DefaultInterpolation = Gr;
Ei.prototype.InterpolantFactoryMethodLinear = void 0;
Ei.prototype.InterpolantFactoryMethodSmooth = void 0;
class hc extends qe {}
hc.prototype.ValueTypeName = "color";
class Yr extends qe {}
Yr.prototype.ValueTypeName = "number";
class bg extends gn {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  interpolate_(t, e, n, i) {
    const r = this.resultBuffer,
      o = this.sampleValues,
      a = this.valueSize,
      l = (n - e) / (i - e);
    let c = t * a;
    for (let h = c + a; c !== h; c += 4) pe.slerpFlat(r, 0, o, c - a, o, c, l);
    return r;
  }
}
class ir extends qe {
  InterpolantFactoryMethodLinear(t) {
    return new bg(this.times, this.values, this.getValueSize(), t);
  }
}
ir.prototype.ValueTypeName = "quaternion";
ir.prototype.DefaultInterpolation = Wr;
ir.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ti extends qe {}
Ti.prototype.ValueTypeName = "string";
Ti.prototype.ValueBufferType = Array;
Ti.prototype.DefaultInterpolation = Gr;
Ti.prototype.InterpolantFactoryMethodLinear = void 0;
Ti.prototype.InterpolantFactoryMethodSmooth = void 0;
class Zr extends qe {}
Zr.prototype.ValueTypeName = "vector";
class pl {
  constructor(t, e = -1, n, i = uo) {
    (this.name = t),
      (this.tracks = n),
      (this.duration = e),
      (this.blendMode = i),
      (this.uuid = Ie()),
      this.duration < 0 && this.resetDuration();
  }
  static parse(t) {
    const e = [],
      n = t.tracks,
      i = 1 / (t.fps || 1);
    for (let o = 0, a = n.length; o !== a; ++o) e.push(Sg(n[o]).scale(i));
    const r = new this(t.name, t.duration, e, t.blendMode);
    return (r.uuid = t.uuid), r;
  }
  static toJSON(t) {
    const e = [],
      n = t.tracks,
      i = {
        name: t.name,
        duration: t.duration,
        tracks: e,
        uuid: t.uuid,
        blendMode: t.blendMode,
      };
    for (let r = 0, o = n.length; r !== o; ++r) e.push(qe.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(t, e, n, i) {
    const r = e.length,
      o = [];
    for (let a = 0; a < r; a++) {
      let l = [],
        c = [];
      l.push((a + r - 1) % r, a, (a + 1) % r), c.push(0, 1, 0);
      const h = Jt.getKeyframeOrder(l);
      (l = Jt.sortedArray(l, 1, h)),
        (c = Jt.sortedArray(c, 1, h)),
        !i && l[0] === 0 && (l.push(r), c.push(c[0])),
        o.push(
          new Yr(".morphTargetInfluences[" + e[a].name + "]", l, c).scale(1 / n)
        );
    }
    return new this(t, -1, o);
  }
  static findByName(t, e) {
    let n = t;
    if (!Array.isArray(t)) {
      const i = t;
      n = (i.geometry && i.geometry.animations) || i.animations;
    }
    for (let i = 0; i < n.length; i++) if (n[i].name === e) return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(t, e, n) {
    const i = {},
      r = /^([\w-]*?)([\d]+)$/;
    for (let a = 0, l = t.length; a < l; a++) {
      const c = t[a],
        h = c.name.match(r);
      if (h && h.length > 1) {
        const u = h[1];
        let d = i[u];
        d || (i[u] = d = []), d.push(c);
      }
    }
    const o = [];
    for (const a in i)
      o.push(this.CreateFromMorphTargetSequence(a, i[a], e, n));
    return o;
  }
  static parseAnimation(t, e) {
    if (!t)
      return (
        console.error("THREE.AnimationClip: No animation in JSONLoader data."),
        null
      );
    const n = function (u, d, p, g, m) {
        if (p.length !== 0) {
          const f = [],
            _ = [];
          Jt.flattenJSON(p, f, _, g), f.length !== 0 && m.push(new u(d, f, _));
        }
      },
      i = [],
      r = t.name || "default",
      o = t.fps || 30,
      a = t.blendMode;
    let l = t.length || -1;
    const c = t.hierarchy || [];
    for (let u = 0; u < c.length; u++) {
      const d = c[u].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const p = {};
          let g;
          for (g = 0; g < d.length; g++)
            if (d[g].morphTargets)
              for (let m = 0; m < d[g].morphTargets.length; m++)
                p[d[g].morphTargets[m]] = -1;
          for (const m in p) {
            const f = [],
              _ = [];
            for (let w = 0; w !== d[g].morphTargets.length; ++w) {
              const C = d[g];
              f.push(C.time), _.push(C.morphTarget === m ? 1 : 0);
            }
            i.push(new Yr(".morphTargetInfluence[" + m + "]", f, _));
          }
          l = p.length * o;
        } else {
          const p = ".bones[" + e[u].name + "]";
          n(Zr, p + ".position", d, "pos", i),
            n(ir, p + ".quaternion", d, "rot", i),
            n(Zr, p + ".scale", d, "scl", i);
        }
    }
    return i.length === 0 ? null : new this(r, l, i, a);
  }
  resetDuration() {
    const t = this.tracks;
    let e = 0;
    for (let n = 0, i = t.length; n !== i; ++n) {
      const r = this.tracks[n];
      e = Math.max(e, r.times[r.times.length - 1]);
    }
    return (this.duration = e), this;
  }
  trim() {
    for (let t = 0; t < this.tracks.length; t++)
      this.tracks[t].trim(0, this.duration);
    return this;
  }
  validate() {
    let t = !0;
    for (let e = 0; e < this.tracks.length; e++)
      t = t && this.tracks[e].validate();
    return t;
  }
  optimize() {
    for (let t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
    return this;
  }
  clone() {
    const t = [];
    for (let e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone());
    return new this.constructor(this.name, this.duration, t, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function wg(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Yr;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Zr;
    case "color":
      return hc;
    case "quaternion":
      return ir;
    case "bool":
    case "boolean":
      return Ei;
    case "string":
      return Ti;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function Sg(s) {
  if (s.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const t = wg(s.type);
  if (s.times === void 0) {
    const e = [],
      n = [];
    Jt.flattenJSON(s.keys, e, n, "value"), (s.times = e), (s.values = n);
  }
  return t.parse !== void 0
    ? t.parse(s)
    : new t(s.name, s.times, s.values, s.interpolation);
}
const gi = {
  enabled: !1,
  files: {},
  add: function (s, t) {
    this.enabled !== !1 && (this.files[s] = t);
  },
  get: function (s) {
    if (this.enabled !== !1) return this.files[s];
  },
  remove: function (s) {
    delete this.files[s];
  },
  clear: function () {
    this.files = {};
  },
};
class Eg {
  constructor(t, e, n) {
    const i = this;
    let r = !1,
      o = 0,
      a = 0,
      l;
    const c = [];
    (this.onStart = void 0),
      (this.onLoad = t),
      (this.onProgress = e),
      (this.onError = n),
      (this.itemStart = function (h) {
        a++, r === !1 && i.onStart !== void 0 && i.onStart(h, o, a), (r = !0);
      }),
      (this.itemEnd = function (h) {
        o++,
          i.onProgress !== void 0 && i.onProgress(h, o, a),
          o === a && ((r = !1), i.onLoad !== void 0 && i.onLoad());
      }),
      (this.itemError = function (h) {
        i.onError !== void 0 && i.onError(h);
      }),
      (this.resolveURL = function (h) {
        return l ? l(h) : h;
      }),
      (this.setURLModifier = function (h) {
        return (l = h), this;
      }),
      (this.addHandler = function (h, u) {
        return c.push(h, u), this;
      }),
      (this.removeHandler = function (h) {
        const u = c.indexOf(h);
        return u !== -1 && c.splice(u, 2), this;
      }),
      (this.getHandler = function (h) {
        for (let u = 0, d = c.length; u < d; u += 2) {
          const p = c[u],
            g = c[u + 1];
          if ((p.global && (p.lastIndex = 0), p.test(h))) return g;
        }
        return null;
      });
  }
}
const Tg = new Eg();
class xn {
  constructor(t) {
    (this.manager = t !== void 0 ? t : Tg),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(t, e) {
    const n = this;
    return new Promise(function (i, r) {
      n.load(t, i, e, r);
    });
  }
  parse() {}
  setCrossOrigin(t) {
    return (this.crossOrigin = t), this;
  }
  setWithCredentials(t) {
    return (this.withCredentials = t), this;
  }
  setPath(t) {
    return (this.path = t), this;
  }
  setResourcePath(t) {
    return (this.resourcePath = t), this;
  }
  setRequestHeader(t) {
    return (this.requestHeader = t), this;
  }
}
const $e = {};
class Ag extends xn {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    t === void 0 && (t = ""),
      this.path !== void 0 && (t = this.path + t),
      (t = this.manager.resolveURL(t));
    const r = gi.get(t);
    if (r !== void 0)
      return (
        this.manager.itemStart(t),
        setTimeout(() => {
          e && e(r), this.manager.itemEnd(t);
        }, 0),
        r
      );
    if ($e[t] !== void 0) {
      $e[t].push({ onLoad: e, onProgress: n, onError: i });
      return;
    }
    ($e[t] = []), $e[t].push({ onLoad: e, onProgress: n, onError: i });
    const o = new Request(t, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin",
      }),
      a = this.mimeType,
      l = this.responseType;
    fetch(o)
      .then((c) => {
        if (c.status === 200 || c.status === 0) {
          if (
            (c.status === 0 &&
              console.warn("THREE.FileLoader: HTTP Status 0 received."),
            typeof ReadableStream == "undefined" ||
              c.body === void 0 ||
              c.body.getReader === void 0)
          )
            return c;
          const h = $e[t],
            u = c.body.getReader(),
            d = c.headers.get("Content-Length"),
            p = d ? parseInt(d) : 0,
            g = p !== 0;
          let m = 0;
          const f = new ReadableStream({
            start(_) {
              w();
              function w() {
                u.read().then(({ done: C, value: T }) => {
                  if (C) _.close();
                  else {
                    m += T.byteLength;
                    const y = new ProgressEvent("progress", {
                      lengthComputable: g,
                      loaded: m,
                      total: p,
                    });
                    for (let L = 0, I = h.length; L < I; L++) {
                      const v = h[L];
                      v.onProgress && v.onProgress(y);
                    }
                    _.enqueue(T), w();
                  }
                });
              }
            },
          });
          return new Response(f);
        } else
          throw Error(
            `fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`
          );
      })
      .then((c) => {
        switch (l) {
          case "arraybuffer":
            return c.arrayBuffer();
          case "blob":
            return c.blob();
          case "document":
            return c.text().then((h) => new DOMParser().parseFromString(h, a));
          case "json":
            return c.json();
          default:
            if (a === void 0) return c.text();
            {
              const u = /charset="?([^;"\s]*)"?/i.exec(a),
                d = u && u[1] ? u[1].toLowerCase() : void 0,
                p = new TextDecoder(d);
              return c.arrayBuffer().then((g) => p.decode(g));
            }
        }
      })
      .then((c) => {
        gi.add(t, c);
        const h = $e[t];
        delete $e[t];
        for (let u = 0, d = h.length; u < d; u++) {
          const p = h[u];
          p.onLoad && p.onLoad(c);
        }
      })
      .catch((c) => {
        const h = $e[t];
        if (h === void 0) throw (this.manager.itemError(t), c);
        delete $e[t];
        for (let u = 0, d = h.length; u < d; u++) {
          const p = h[u];
          p.onError && p.onError(c);
        }
        this.manager.itemError(t);
      })
      .finally(() => {
        this.manager.itemEnd(t);
      }),
      this.manager.itemStart(t);
  }
  setResponseType(t) {
    return (this.responseType = t), this;
  }
  setMimeType(t) {
    return (this.mimeType = t), this;
  }
}
class uc extends xn {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    this.path !== void 0 && (t = this.path + t),
      (t = this.manager.resolveURL(t));
    const r = this,
      o = gi.get(t);
    if (o !== void 0)
      return (
        r.manager.itemStart(t),
        setTimeout(function () {
          e && e(o), r.manager.itemEnd(t);
        }, 0),
        o
      );
    const a = Zi("img");
    function l() {
      h(), gi.add(t, this), e && e(this), r.manager.itemEnd(t);
    }
    function c(u) {
      h(), i && i(u), r.manager.itemError(t), r.manager.itemEnd(t);
    }
    function h() {
      a.removeEventListener("load", l, !1),
        a.removeEventListener("error", c, !1);
    }
    return (
      a.addEventListener("load", l, !1),
      a.addEventListener("error", c, !1),
      t.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (a.crossOrigin = this.crossOrigin),
      r.manager.itemStart(t),
      (a.src = t),
      a
    );
  }
}
class Cg extends xn {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = new ts(),
      o = new uc(this.manager);
    o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
    let a = 0;
    function l(c) {
      o.load(
        t[c],
        function (h) {
          (r.images[c] = h), a++, a === 6 && ((r.needsUpdate = !0), e && e(r));
        },
        void 0,
        i
      );
    }
    for (let c = 0; c < t.length; ++c) l(c);
    return r;
  }
}
class rr extends xn {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = new he(),
      o = new uc(this.manager);
    return (
      o.setCrossOrigin(this.crossOrigin),
      o.setPath(this.path),
      o.load(
        t,
        function (a) {
          (r.image = a), (r.needsUpdate = !0), e !== void 0 && e(r);
        },
        n,
        i
      ),
      r
    );
  }
}
class We extends Wt {
  constructor(t, e = 1) {
    super(),
      (this.type = "Light"),
      (this.color = new xt(t)),
      (this.intensity = e);
  }
  dispose() {}
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.intensity = t.intensity),
      this
    );
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      (e.object.color = this.color.getHex()),
      (e.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (e.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (e.object.distance = this.distance),
      this.angle !== void 0 && (e.object.angle = this.angle),
      this.decay !== void 0 && (e.object.decay = this.decay),
      this.penumbra !== void 0 && (e.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()),
      e
    );
  }
}
We.prototype.isLight = !0;
class Lg extends We {
  constructor(t, e, n) {
    super(t, n),
      (this.type = "HemisphereLight"),
      this.position.copy(Wt.DefaultUp),
      this.updateMatrix(),
      (this.groundColor = new xt(e));
  }
  copy(t) {
    return (
      We.prototype.copy.call(this, t),
      this.groundColor.copy(t.groundColor),
      this
    );
  }
}
Lg.prototype.isHemisphereLight = !0;
const ml = new bt(),
  gl = new E(),
  _l = new E();
class Fo {
  constructor(t) {
    (this.camera = t),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new Z(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new bt()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new es()),
      (this._frameExtents = new Z(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new jt(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(t) {
    const e = this.camera,
      n = this.matrix;
    gl.setFromMatrixPosition(t.matrixWorld),
      e.position.copy(gl),
      _l.setFromMatrixPosition(t.target.matrixWorld),
      e.lookAt(_l),
      e.updateMatrixWorld(),
      ml.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(ml),
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(e.projectionMatrix),
      n.multiply(e.matrixWorldInverse);
  }
  getViewport(t) {
    return this._viewports[t];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(t) {
    return (
      (this.camera = t.camera.clone()),
      (this.bias = t.bias),
      (this.radius = t.radius),
      this.mapSize.copy(t.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const t = {};
    return (
      this.bias !== 0 && (t.bias = this.bias),
      this.normalBias !== 0 && (t.normalBias = this.normalBias),
      this.radius !== 1 && (t.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (t.mapSize = this.mapSize.toArray()),
      (t.camera = this.camera.toJSON(!1).object),
      delete t.camera.matrix,
      t
    );
  }
}
class dc extends Fo {
  constructor() {
    super(new _e(50, 1, 0.5, 500)), (this.focus = 1);
  }
  updateMatrices(t) {
    const e = this.camera,
      n = Yi * 2 * t.angle * this.focus,
      i = this.mapSize.width / this.mapSize.height,
      r = t.distance || e.far;
    (n !== e.fov || i !== e.aspect || r !== e.far) &&
      ((e.fov = n), (e.aspect = i), (e.far = r), e.updateProjectionMatrix()),
      super.updateMatrices(t);
  }
  copy(t) {
    return super.copy(t), (this.focus = t.focus), this;
  }
}
dc.prototype.isSpotLightShadow = !0;
class Rg extends We {
  constructor(t, e, n = 0, i = Math.PI / 3, r = 0, o = 1) {
    super(t, e),
      (this.type = "SpotLight"),
      this.position.copy(Wt.DefaultUp),
      this.updateMatrix(),
      (this.target = new Wt()),
      (this.distance = n),
      (this.angle = i),
      (this.penumbra = r),
      (this.decay = o),
      (this.shadow = new dc());
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(t) {
    this.intensity = t / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return (
      super.copy(t),
      (this.distance = t.distance),
      (this.angle = t.angle),
      (this.penumbra = t.penumbra),
      (this.decay = t.decay),
      (this.target = t.target.clone()),
      (this.shadow = t.shadow.clone()),
      this
    );
  }
}
Rg.prototype.isSpotLight = !0;
const xl = new bt(),
  Bi = new E(),
  js = new E();
class fc extends Fo {
  constructor() {
    super(new _e(90, 1, 0.5, 500)),
      (this._frameExtents = new Z(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new jt(2, 1, 1, 1),
        new jt(0, 1, 1, 1),
        new jt(3, 1, 1, 1),
        new jt(1, 1, 1, 1),
        new jt(3, 0, 1, 1),
        new jt(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new E(1, 0, 0),
        new E(-1, 0, 0),
        new E(0, 0, 1),
        new E(0, 0, -1),
        new E(0, 1, 0),
        new E(0, -1, 0),
      ]),
      (this._cubeUps = [
        new E(0, 1, 0),
        new E(0, 1, 0),
        new E(0, 1, 0),
        new E(0, 1, 0),
        new E(0, 0, 1),
        new E(0, 0, -1),
      ]);
  }
  updateMatrices(t, e = 0) {
    const n = this.camera,
      i = this.matrix,
      r = t.distance || n.far;
    r !== n.far && ((n.far = r), n.updateProjectionMatrix()),
      Bi.setFromMatrixPosition(t.matrixWorld),
      n.position.copy(Bi),
      js.copy(n.position),
      js.add(this._cubeDirections[e]),
      n.up.copy(this._cubeUps[e]),
      n.lookAt(js),
      n.updateMatrixWorld(),
      i.makeTranslation(-Bi.x, -Bi.y, -Bi.z),
      xl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(xl);
  }
}
fc.prototype.isPointLightShadow = !0;
class pc extends We {
  constructor(t, e, n = 0, i = 1) {
    super(t, e),
      (this.type = "PointLight"),
      (this.distance = n),
      (this.decay = i),
      (this.shadow = new fc());
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(t) {
    this.intensity = t / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return (
      super.copy(t),
      (this.distance = t.distance),
      (this.decay = t.decay),
      (this.shadow = t.shadow.clone()),
      this
    );
  }
}
pc.prototype.isPointLight = !0;
class mc extends Fo {
  constructor() {
    super(new yo(-5, 5, 5, -5, 0.5, 500));
  }
}
mc.prototype.isDirectionalLightShadow = !0;
class Pg extends We {
  constructor(t, e) {
    super(t, e),
      (this.type = "DirectionalLight"),
      this.position.copy(Wt.DefaultUp),
      this.updateMatrix(),
      (this.target = new Wt()),
      (this.shadow = new mc());
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return (
      super.copy(t),
      (this.target = t.target.clone()),
      (this.shadow = t.shadow.clone()),
      this
    );
  }
}
Pg.prototype.isDirectionalLight = !0;
class gc extends We {
  constructor(t, e) {
    super(t, e), (this.type = "AmbientLight");
  }
}
gc.prototype.isAmbientLight = !0;
class Dg extends We {
  constructor(t, e, n = 10, i = 10) {
    super(t, e),
      (this.type = "RectAreaLight"),
      (this.width = n),
      (this.height = i);
  }
  get power() {
    return this.intensity * this.width * this.height * Math.PI;
  }
  set power(t) {
    this.intensity = t / (this.width * this.height * Math.PI);
  }
  copy(t) {
    return (
      super.copy(t), (this.width = t.width), (this.height = t.height), this
    );
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (e.object.width = this.width), (e.object.height = this.height), e;
  }
}
Dg.prototype.isRectAreaLight = !0;
class _c {
  constructor() {
    this.coefficients = [];
    for (let t = 0; t < 9; t++) this.coefficients.push(new E());
  }
  set(t) {
    for (let e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
    return this;
  }
  zero() {
    for (let t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
    return this;
  }
  getAt(t, e) {
    const n = t.x,
      i = t.y,
      r = t.z,
      o = this.coefficients;
    return (
      e.copy(o[0]).multiplyScalar(0.282095),
      e.addScaledVector(o[1], 0.488603 * i),
      e.addScaledVector(o[2], 0.488603 * r),
      e.addScaledVector(o[3], 0.488603 * n),
      e.addScaledVector(o[4], 1.092548 * (n * i)),
      e.addScaledVector(o[5], 1.092548 * (i * r)),
      e.addScaledVector(o[6], 0.315392 * (3 * r * r - 1)),
      e.addScaledVector(o[7], 1.092548 * (n * r)),
      e.addScaledVector(o[8], 0.546274 * (n * n - i * i)),
      e
    );
  }
  getIrradianceAt(t, e) {
    const n = t.x,
      i = t.y,
      r = t.z,
      o = this.coefficients;
    return (
      e.copy(o[0]).multiplyScalar(0.886227),
      e.addScaledVector(o[1], 2 * 0.511664 * i),
      e.addScaledVector(o[2], 2 * 0.511664 * r),
      e.addScaledVector(o[3], 2 * 0.511664 * n),
      e.addScaledVector(o[4], 2 * 0.429043 * n * i),
      e.addScaledVector(o[5], 2 * 0.429043 * i * r),
      e.addScaledVector(o[6], 0.743125 * r * r - 0.247708),
      e.addScaledVector(o[7], 2 * 0.429043 * n * r),
      e.addScaledVector(o[8], 0.429043 * (n * n - i * i)),
      e
    );
  }
  add(t) {
    for (let e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]);
    return this;
  }
  addScaledSH(t, e) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].addScaledVector(t.coefficients[n], e);
    return this;
  }
  scale(t) {
    for (let e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
    return this;
  }
  lerp(t, e) {
    for (let n = 0; n < 9; n++) this.coefficients[n].lerp(t.coefficients[n], e);
    return this;
  }
  equals(t) {
    for (let e = 0; e < 9; e++)
      if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
    return !0;
  }
  copy(t) {
    return this.set(t.coefficients);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  fromArray(t, e = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++) n[i].fromArray(t, e + i * 3);
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++) n[i].toArray(t, e + i * 3);
    return t;
  }
  static getBasisAt(t, e) {
    const n = t.x,
      i = t.y,
      r = t.z;
    (e[0] = 0.282095),
      (e[1] = 0.488603 * i),
      (e[2] = 0.488603 * r),
      (e[3] = 0.488603 * n),
      (e[4] = 1.092548 * n * i),
      (e[5] = 1.092548 * i * r),
      (e[6] = 0.315392 * (3 * r * r - 1)),
      (e[7] = 1.092548 * n * r),
      (e[8] = 0.546274 * (n * n - i * i));
  }
}
_c.prototype.isSphericalHarmonics3 = !0;
class No extends We {
  constructor(t = new _c(), e = 1) {
    super(void 0, e), (this.sh = t);
  }
  copy(t) {
    return super.copy(t), this.sh.copy(t.sh), this;
  }
  fromJSON(t) {
    return (this.intensity = t.intensity), this.sh.fromArray(t.sh), this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (e.object.sh = this.sh.toArray()), e;
  }
}
No.prototype.isLightProbe = !0;
class Ig {
  static decodeText(t) {
    if (typeof TextDecoder != "undefined") return new TextDecoder().decode(t);
    let e = "";
    for (let n = 0, i = t.length; n < i; n++) e += String.fromCharCode(t[n]);
    try {
      return decodeURIComponent(escape(e));
    } catch {
      return e;
    }
  }
  static extractUrlBase(t) {
    const e = t.lastIndexOf("/");
    return e === -1 ? "./" : t.slice(0, e + 1);
  }
  static resolveURL(t, e) {
    return typeof t != "string" || t === ""
      ? ""
      : (/^https?:\/\//i.test(e) &&
          /^\//.test(t) &&
          (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
        /^(https?:)?\/\//i.test(t) ||
        /^data:.*,.*$/i.test(t) ||
        /^blob:.*$/i.test(t)
          ? t
          : e + t);
  }
}
class Fg extends Yt {
  constructor() {
    super(),
      (this.type = "InstancedBufferGeometry"),
      (this.instanceCount = 1 / 0);
  }
  copy(t) {
    return super.copy(t), (this.instanceCount = t.instanceCount), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const t = super.toJSON(this);
    return (
      (t.instanceCount = this.instanceCount),
      (t.isInstancedBufferGeometry = !0),
      t
    );
  }
}
Fg.prototype.isInstancedBufferGeometry = !0;
class Ng extends xn {
  constructor(t) {
    super(t),
      typeof createImageBitmap == "undefined" &&
        console.warn(
          "THREE.ImageBitmapLoader: createImageBitmap() not supported."
        ),
      typeof fetch == "undefined" &&
        console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
      (this.options = { premultiplyAlpha: "none" });
  }
  setOptions(t) {
    return (this.options = t), this;
  }
  load(t, e, n, i) {
    t === void 0 && (t = ""),
      this.path !== void 0 && (t = this.path + t),
      (t = this.manager.resolveURL(t));
    const r = this,
      o = gi.get(t);
    if (o !== void 0)
      return (
        r.manager.itemStart(t),
        setTimeout(function () {
          e && e(o), r.manager.itemEnd(t);
        }, 0),
        o
      );
    const a = {};
    (a.credentials =
      this.crossOrigin === "anonymous" ? "same-origin" : "include"),
      (a.headers = this.requestHeader),
      fetch(t, a)
        .then(function (l) {
          return l.blob();
        })
        .then(function (l) {
          return createImageBitmap(
            l,
            Object.assign(r.options, { colorSpaceConversion: "none" })
          );
        })
        .then(function (l) {
          gi.add(t, l), e && e(l), r.manager.itemEnd(t);
        })
        .catch(function (l) {
          i && i(l), r.manager.itemError(t), r.manager.itemEnd(t);
        }),
      r.manager.itemStart(t);
  }
}
Ng.prototype.isImageBitmapLoader = !0;
let Or;
const Bg = {
  getContext: function () {
    return (
      Or === void 0 &&
        (Or = new (window.AudioContext || window.webkitAudioContext)()),
      Or
    );
  },
  setContext: function (s) {
    Or = s;
  },
};
class zg extends xn {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = this,
      o = new Ag(this.manager);
    o.setResponseType("arraybuffer"),
      o.setPath(this.path),
      o.setRequestHeader(this.requestHeader),
      o.setWithCredentials(this.withCredentials),
      o.load(
        t,
        function (a) {
          try {
            const l = a.slice(0);
            Bg.getContext().decodeAudioData(l, function (h) {
              e(h);
            });
          } catch (l) {
            i ? i(l) : console.error(l), r.manager.itemError(t);
          }
        },
        n,
        i
      );
  }
}
class Og extends No {
  constructor(t, e, n = 1) {
    super(void 0, n);
    const i = new xt().set(t),
      r = new xt().set(e),
      o = new E(i.r, i.g, i.b),
      a = new E(r.r, r.g, r.b),
      l = Math.sqrt(Math.PI),
      c = l * Math.sqrt(0.75);
    this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),
      this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c);
  }
}
Og.prototype.isHemisphereLightProbe = !0;
class Ug extends No {
  constructor(t, e = 1) {
    super(void 0, e);
    const n = new xt().set(t);
    this.sh.coefficients[0]
      .set(n.r, n.g, n.b)
      .multiplyScalar(2 * Math.sqrt(Math.PI));
  }
}
Ug.prototype.isAmbientLightProbe = !0;
class Hg extends Wt {
  constructor(t) {
    super(),
      (this.type = "Audio"),
      (this.listener = t),
      (this.context = t.context),
      (this.gain = this.context.createGain()),
      this.gain.connect(t.getInput()),
      (this.autoplay = !1),
      (this.buffer = null),
      (this.detune = 0),
      (this.loop = !1),
      (this.loopStart = 0),
      (this.loopEnd = 0),
      (this.offset = 0),
      (this.duration = void 0),
      (this.playbackRate = 1),
      (this.isPlaying = !1),
      (this.hasPlaybackControl = !0),
      (this.source = null),
      (this.sourceType = "empty"),
      (this._startedAt = 0),
      (this._progress = 0),
      (this._connected = !1),
      (this.filters = []);
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(t) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "audioNode"),
      (this.source = t),
      this.connect(),
      this
    );
  }
  setMediaElementSource(t) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "mediaNode"),
      (this.source = this.context.createMediaElementSource(t)),
      this.connect(),
      this
    );
  }
  setMediaStreamSource(t) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "mediaStreamNode"),
      (this.source = this.context.createMediaStreamSource(t)),
      this.connect(),
      this
    );
  }
  setBuffer(t) {
    return (
      (this.buffer = t),
      (this.sourceType = "buffer"),
      this.autoplay && this.play(),
      this
    );
  }
  play(t = 0) {
    if (this.isPlaying === !0) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + t;
    const e = this.context.createBufferSource();
    return (
      (e.buffer = this.buffer),
      (e.loop = this.loop),
      (e.loopStart = this.loopStart),
      (e.loopEnd = this.loopEnd),
      (e.onended = this.onEnded.bind(this)),
      e.start(this._startedAt, this._progress + this.offset, this.duration),
      (this.isPlaying = !0),
      (this.source = e),
      this.setDetune(this.detune),
      this.setPlaybackRate(this.playbackRate),
      this.connect()
    );
  }
  pause() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      this.isPlaying === !0 &&
        ((this._progress +=
          Math.max(this.context.currentTime - this._startedAt, 0) *
          this.playbackRate),
        this.loop === !0 &&
          (this._progress =
            this._progress % (this.duration || this.buffer.duration)),
        this.source.stop(),
        (this.source.onended = null),
        (this.isPlaying = !1)),
      this
    );
  }
  stop() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      (this._progress = 0),
      this.source.stop(),
      (this.source.onended = null),
      (this.isPlaying = !1),
      this
    );
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let t = 1, e = this.filters.length; t < e; t++)
        this.filters[t - 1].connect(this.filters[t]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else this.source.connect(this.getOutput());
    return (this._connected = !0), this;
  }
  disconnect() {
    if (this.filters.length > 0) {
      this.source.disconnect(this.filters[0]);
      for (let t = 1, e = this.filters.length; t < e; t++)
        this.filters[t - 1].disconnect(this.filters[t]);
      this.filters[this.filters.length - 1].disconnect(this.getOutput());
    } else this.source.disconnect(this.getOutput());
    return (this._connected = !1), this;
  }
  getFilters() {
    return this.filters;
  }
  setFilters(t) {
    return (
      t || (t = []),
      this._connected === !0
        ? (this.disconnect(), (this.filters = t.slice()), this.connect())
        : (this.filters = t.slice()),
      this
    );
  }
  setDetune(t) {
    if (((this.detune = t), this.source.detune !== void 0))
      return (
        this.isPlaying === !0 &&
          this.source.detune.setTargetAtTime(
            this.detune,
            this.context.currentTime,
            0.01
          ),
        this
      );
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(t) {
    return this.setFilters(t ? [t] : []);
  }
  setPlaybackRate(t) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      (this.playbackRate = t),
      this.isPlaying === !0 &&
        this.source.playbackRate.setTargetAtTime(
          this.playbackRate,
          this.context.currentTime,
          0.01
        ),
      this
    );
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = !1;
  }
  getLoop() {
    return this.hasPlaybackControl === !1
      ? (console.warn("THREE.Audio: this Audio has no playback control."), !1)
      : this.loop;
  }
  setLoop(t) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      (this.loop = t),
      this.isPlaying === !0 && (this.source.loop = this.loop),
      this
    );
  }
  setLoopStart(t) {
    return (this.loopStart = t), this;
  }
  setLoopEnd(t) {
    return (this.loopEnd = t), this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(t) {
    return (
      this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01), this
    );
  }
}
class Vg {
  constructor(t, e, n) {
    (this.binding = t), (this.valueSize = n);
    let i, r, o;
    switch (e) {
      case "quaternion":
        (i = this._slerp),
          (r = this._slerpAdditive),
          (o = this._setAdditiveIdentityQuaternion),
          (this.buffer = new Float64Array(n * 6)),
          (this._workIndex = 5);
        break;
      case "string":
      case "bool":
        (i = this._select),
          (r = this._select),
          (o = this._setAdditiveIdentityOther),
          (this.buffer = new Array(n * 5));
        break;
      default:
        (i = this._lerp),
          (r = this._lerpAdditive),
          (o = this._setAdditiveIdentityNumeric),
          (this.buffer = new Float64Array(n * 5));
    }
    (this._mixBufferRegion = i),
      (this._mixBufferRegionAdditive = r),
      (this._setIdentity = o),
      (this._origIndex = 3),
      (this._addIndex = 4),
      (this.cumulativeWeight = 0),
      (this.cumulativeWeightAdditive = 0),
      (this.useCount = 0),
      (this.referenceCount = 0);
  }
  accumulate(t, e) {
    const n = this.buffer,
      i = this.valueSize,
      r = t * i + i;
    let o = this.cumulativeWeight;
    if (o === 0) {
      for (let a = 0; a !== i; ++a) n[r + a] = n[a];
      o = e;
    } else {
      o += e;
      const a = e / o;
      this._mixBufferRegion(n, r, 0, a, i);
    }
    this.cumulativeWeight = o;
  }
  accumulateAdditive(t) {
    const e = this.buffer,
      n = this.valueSize,
      i = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(),
      this._mixBufferRegionAdditive(e, i, 0, t, n),
      (this.cumulativeWeightAdditive += t);
  }
  apply(t) {
    const e = this.valueSize,
      n = this.buffer,
      i = t * e + e,
      r = this.cumulativeWeight,
      o = this.cumulativeWeightAdditive,
      a = this.binding;
    if (
      ((this.cumulativeWeight = 0), (this.cumulativeWeightAdditive = 0), r < 1)
    ) {
      const l = e * this._origIndex;
      this._mixBufferRegion(n, i, l, 1 - r, e);
    }
    o > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
    for (let l = e, c = e + e; l !== c; ++l)
      if (n[l] !== n[l + e]) {
        a.setValue(n, i);
        break;
      }
  }
  saveOriginalState() {
    const t = this.binding,
      e = this.buffer,
      n = this.valueSize,
      i = n * this._origIndex;
    t.getValue(e, i);
    for (let r = n, o = i; r !== o; ++r) e[r] = e[i + (r % n)];
    this._setIdentity(),
      (this.cumulativeWeight = 0),
      (this.cumulativeWeightAdditive = 0);
  }
  restoreOriginalState() {
    const t = this.valueSize * 3;
    this.binding.setValue(this.buffer, t);
  }
  _setAdditiveIdentityNumeric() {
    const t = this._addIndex * this.valueSize,
      e = t + this.valueSize;
    for (let n = t; n < e; n++) this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(),
      (this.buffer[this._addIndex * this.valueSize + 3] = 1);
  }
  _setAdditiveIdentityOther() {
    const t = this._origIndex * this.valueSize,
      e = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++)
      this.buffer[e + n] = this.buffer[t + n];
  }
  _select(t, e, n, i, r) {
    if (i >= 0.5) for (let o = 0; o !== r; ++o) t[e + o] = t[n + o];
  }
  _slerp(t, e, n, i) {
    pe.slerpFlat(t, e, t, e, t, n, i);
  }
  _slerpAdditive(t, e, n, i, r) {
    const o = this._workIndex * r;
    pe.multiplyQuaternionsFlat(t, o, t, e, t, n),
      pe.slerpFlat(t, e, t, e, t, o, i);
  }
  _lerp(t, e, n, i, r) {
    const o = 1 - i;
    for (let a = 0; a !== r; ++a) {
      const l = e + a;
      t[l] = t[l] * o + t[n + a] * i;
    }
  }
  _lerpAdditive(t, e, n, i, r) {
    for (let o = 0; o !== r; ++o) {
      const a = e + o;
      t[a] = t[a] + t[n + o] * i;
    }
  }
}
const Bo = "\\[\\]\\.:\\/",
  kg = new RegExp("[" + Bo + "]", "g"),
  zo = "[^" + Bo + "]",
  Gg = "[^" + Bo.replace("\\.", "") + "]",
  Wg = /((?:WC+[\/:])*)/.source.replace("WC", zo),
  qg = /(WCOD+)?/.source.replace("WCOD", Gg),
  Xg = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", zo),
  jg = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", zo),
  Yg = new RegExp("^" + Wg + qg + Xg + jg + "$"),
  Zg = ["material", "materials", "bones"];
class Jg {
  constructor(t, e, n) {
    const i = n || Gt.parseTrackName(e);
    (this._targetGroup = t), (this._bindings = t.subscribe_(e, i));
  }
  getValue(t, e) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_,
      i = this._bindings[n];
    i !== void 0 && i.getValue(t, e);
  }
  setValue(t, e) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
      n[i].setValue(t, e);
  }
  bind() {
    const t = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
      t[e].bind();
  }
  unbind() {
    const t = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
      t[e].unbind();
  }
}
class Gt {
  constructor(t, e, n) {
    (this.path = e),
      (this.parsedPath = n || Gt.parseTrackName(e)),
      (this.node = Gt.findNode(t, this.parsedPath.nodeName) || t),
      (this.rootNode = t),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
  static create(t, e, n) {
    return t && t.isAnimationObjectGroup
      ? new Gt.Composite(t, e, n)
      : new Gt(t, e, n);
  }
  static sanitizeNodeName(t) {
    return t.replace(/\s/g, "_").replace(kg, "");
  }
  static parseTrackName(t) {
    const e = Yg.exec(t);
    if (e === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + t);
    const n = {
        nodeName: e[2],
        objectName: e[3],
        objectIndex: e[4],
        propertyName: e[5],
        propertyIndex: e[6],
      },
      i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      Zg.indexOf(r) !== -1 &&
        ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = r));
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error(
        "PropertyBinding: can not parse propertyName from trackName: " + t
      );
    return n;
  }
  static findNode(t, e) {
    if (
      e === void 0 ||
      e === "" ||
      e === "." ||
      e === -1 ||
      e === t.name ||
      e === t.uuid
    )
      return t;
    if (t.skeleton) {
      const n = t.skeleton.getBoneByName(e);
      if (n !== void 0) return n;
    }
    if (t.children) {
      const n = function (r) {
          for (let o = 0; o < r.length; o++) {
            const a = r[o];
            if (a.name === e || a.uuid === e) return a;
            const l = n(a.children);
            if (l) return l;
          }
          return null;
        },
        i = n(t.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(t, e) {
    t[e] = this.targetObject[this.propertyName];
  }
  _getValue_array(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i];
  }
  _getValue_arrayElement(t, e) {
    t[e] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(t, e) {
    this.resolvedProperty.toArray(t, e);
  }
  _setValue_direct(t, e) {
    this.targetObject[this.propertyName] = t[e];
  }
  _setValue_direct_setNeedsUpdate(t, e) {
    (this.targetObject[this.propertyName] = t[e]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
    (this.targetObject[this.propertyName] = t[e]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_array(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
  }
  _setValue_array_setNeedsUpdate(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e];
  }
  _setValue_arrayElement_setNeedsUpdate(t, e) {
    (this.resolvedProperty[this.propertyIndex] = t[e]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
    (this.resolvedProperty[this.propertyIndex] = t[e]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_fromArray(t, e) {
    this.resolvedProperty.fromArray(t, e);
  }
  _setValue_fromArray_setNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e), (this.targetObject.needsUpdate = !0);
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _getValue_unbound(t, e) {
    this.bind(), this.getValue(t, e);
  }
  _setValue_unbound(t, e) {
    this.bind(), this.setValue(t, e);
  }
  bind() {
    let t = this.node;
    const e = this.parsedPath,
      n = e.objectName,
      i = e.propertyName;
    let r = e.propertyIndex;
    if (
      (t ||
        ((t = Gt.findNode(this.rootNode, e.nodeName) || this.rootNode),
        (this.node = t)),
      (this.getValue = this._getValue_unavailable),
      (this.setValue = this._setValue_unavailable),
      !t)
    ) {
      console.error(
        "THREE.PropertyBinding: Trying to update node for track: " +
          this.path +
          " but it wasn't found."
      );
      return;
    }
    if (n) {
      let c = e.objectIndex;
      switch (n) {
        case "materials":
          if (!t.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!t.material.materials) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
              this
            );
            return;
          }
          t = t.material.materials;
          break;
        case "bones":
          if (!t.skeleton) {
            console.error(
              "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
              this
            );
            return;
          }
          t = t.skeleton.bones;
          for (let h = 0; h < t.length; h++)
            if (t[h].name === c) {
              c = h;
              break;
            }
          break;
        default:
          if (t[n] === void 0) {
            console.error(
              "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
              this
            );
            return;
          }
          t = t[n];
      }
      if (c !== void 0) {
        if (t[c] === void 0) {
          console.error(
            "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
            this,
            t
          );
          return;
        }
        t = t[c];
      }
    }
    const o = t[i];
    if (o === void 0) {
      const c = e.nodeName;
      console.error(
        "THREE.PropertyBinding: Trying to update property for track: " +
          c +
          "." +
          i +
          " but it wasn't found.",
        t
      );
      return;
    }
    let a = this.Versioning.None;
    (this.targetObject = t),
      t.needsUpdate !== void 0
        ? (a = this.Versioning.NeedsUpdate)
        : t.matrixWorldNeedsUpdate !== void 0 &&
          (a = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!t.geometry) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
            this
          );
          return;
        }
        if (t.geometry.isBufferGeometry) {
          if (!t.geometry.morphAttributes) {
            console.error(
              "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
              this
            );
            return;
          }
          t.morphTargetDictionary[r] !== void 0 &&
            (r = t.morphTargetDictionary[r]);
        } else {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",
            this
          );
          return;
        }
      }
      (l = this.BindingType.ArrayElement),
        (this.resolvedProperty = o),
        (this.propertyIndex = r);
    } else
      o.fromArray !== void 0 && o.toArray !== void 0
        ? ((l = this.BindingType.HasFromToArray), (this.resolvedProperty = o))
        : Array.isArray(o)
        ? ((l = this.BindingType.EntireArray), (this.resolvedProperty = o))
        : (this.propertyName = i);
    (this.getValue = this.GetterByBindingType[l]),
      (this.setValue = this.SetterByBindingTypeAndVersioning[l][a]);
  }
  unbind() {
    (this.node = null),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
}
Gt.Composite = Jg;
Gt.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3,
};
Gt.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2,
};
Gt.prototype.GetterByBindingType = [
  Gt.prototype._getValue_direct,
  Gt.prototype._getValue_array,
  Gt.prototype._getValue_arrayElement,
  Gt.prototype._getValue_toArray,
];
Gt.prototype.SetterByBindingTypeAndVersioning = [
  [
    Gt.prototype._setValue_direct,
    Gt.prototype._setValue_direct_setNeedsUpdate,
    Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
  ],
  [
    Gt.prototype._setValue_array,
    Gt.prototype._setValue_array_setNeedsUpdate,
    Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate,
  ],
  [
    Gt.prototype._setValue_arrayElement,
    Gt.prototype._setValue_arrayElement_setNeedsUpdate,
    Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
  ],
  [
    Gt.prototype._setValue_fromArray,
    Gt.prototype._setValue_fromArray_setNeedsUpdate,
    Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
  ],
];
class $g {
  constructor(t, e, n = null, i = e.blendMode) {
    (this._mixer = t),
      (this._clip = e),
      (this._localRoot = n),
      (this.blendMode = i);
    const r = e.tracks,
      o = r.length,
      a = new Array(o),
      l = { endingStart: ri, endingEnd: ri };
    for (let c = 0; c !== o; ++c) {
      const h = r[c].createInterpolant(null);
      (a[c] = h), (h.settings = l);
    }
    (this._interpolantSettings = l),
      (this._interpolants = a),
      (this._propertyBindings = new Array(o)),
      (this._cacheIndex = null),
      (this._byClipCacheIndex = null),
      (this._timeScaleInterpolant = null),
      (this._weightInterpolant = null),
      (this.loop = vh),
      (this._loopCount = -1),
      (this._startTime = null),
      (this.time = 0),
      (this.timeScale = 1),
      (this._effectiveTimeScale = 1),
      (this.weight = 1),
      (this._effectiveWeight = 1),
      (this.repetitions = 1 / 0),
      (this.paused = !1),
      (this.enabled = !0),
      (this.clampWhenFinished = !1),
      (this.zeroSlopeAtStart = !0),
      (this.zeroSlopeAtEnd = !0);
  }
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return (
      (this.paused = !1),
      (this.enabled = !0),
      (this.time = 0),
      (this._loopCount = -1),
      (this._startTime = null),
      this.stopFading().stopWarping()
    );
  }
  isRunning() {
    return (
      this.enabled &&
      !this.paused &&
      this.timeScale !== 0 &&
      this._startTime === null &&
      this._mixer._isActiveAction(this)
    );
  }
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(t) {
    return (this._startTime = t), this;
  }
  setLoop(t, e) {
    return (this.loop = t), (this.repetitions = e), this;
  }
  setEffectiveWeight(t) {
    return (
      (this.weight = t),
      (this._effectiveWeight = this.enabled ? t : 0),
      this.stopFading()
    );
  }
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(t) {
    return this._scheduleFading(t, 0, 1);
  }
  fadeOut(t) {
    return this._scheduleFading(t, 1, 0);
  }
  crossFadeFrom(t, e, n) {
    if ((t.fadeOut(e), this.fadeIn(e), n)) {
      const i = this._clip.duration,
        r = t._clip.duration,
        o = r / i,
        a = i / r;
      t.warp(1, o, e), this.warp(a, 1, e);
    }
    return this;
  }
  crossFadeTo(t, e, n) {
    return t.crossFadeFrom(this, e, n);
  }
  stopFading() {
    const t = this._weightInterpolant;
    return (
      t !== null &&
        ((this._weightInterpolant = null),
        this._mixer._takeBackControlInterpolant(t)),
      this
    );
  }
  setEffectiveTimeScale(t) {
    return (
      (this.timeScale = t),
      (this._effectiveTimeScale = this.paused ? 0 : t),
      this.stopWarping()
    );
  }
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(t) {
    return (this.timeScale = this._clip.duration / t), this.stopWarping();
  }
  syncWith(t) {
    return (
      (this.time = t.time), (this.timeScale = t.timeScale), this.stopWarping()
    );
  }
  halt(t) {
    return this.warp(this._effectiveTimeScale, 0, t);
  }
  warp(t, e, n) {
    const i = this._mixer,
      r = i.time,
      o = this.timeScale;
    let a = this._timeScaleInterpolant;
    a === null &&
      ((a = i._lendControlInterpolant()), (this._timeScaleInterpolant = a));
    const l = a.parameterPositions,
      c = a.sampleValues;
    return (l[0] = r), (l[1] = r + n), (c[0] = t / o), (c[1] = e / o), this;
  }
  stopWarping() {
    const t = this._timeScaleInterpolant;
    return (
      t !== null &&
        ((this._timeScaleInterpolant = null),
        this._mixer._takeBackControlInterpolant(t)),
      this
    );
  }
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  _update(t, e, n, i) {
    if (!this.enabled) {
      this._updateWeight(t);
      return;
    }
    const r = this._startTime;
    if (r !== null) {
      const l = (t - r) * n;
      if (l < 0 || n === 0) return;
      (this._startTime = null), (e = n * l);
    }
    e *= this._updateTimeScale(t);
    const o = this._updateTime(e),
      a = this._updateWeight(t);
    if (a > 0) {
      const l = this._interpolants,
        c = this._propertyBindings;
      switch (this.blendMode) {
        case Al:
          for (let h = 0, u = l.length; h !== u; ++h)
            l[h].evaluate(o), c[h].accumulateAdditive(a);
          break;
        case uo:
        default:
          for (let h = 0, u = l.length; h !== u; ++h)
            l[h].evaluate(o), c[h].accumulate(i, a);
      }
    }
  }
  _updateWeight(t) {
    let e = 0;
    if (this.enabled) {
      e = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const i = n.evaluate(t)[0];
        (e *= i),
          t > n.parameterPositions[1] &&
            (this.stopFading(), i === 0 && (this.enabled = !1));
      }
    }
    return (this._effectiveWeight = e), e;
  }
  _updateTimeScale(t) {
    let e = 0;
    if (!this.paused) {
      e = this.timeScale;
      const n = this._timeScaleInterpolant;
      n !== null &&
        ((e *= n.evaluate(t)[0]),
        t > n.parameterPositions[1] &&
          (this.stopWarping(),
          e === 0 ? (this.paused = !0) : (this.timeScale = e)));
    }
    return (this._effectiveTimeScale = e), e;
  }
  _updateTime(t) {
    const e = this._clip.duration,
      n = this.loop;
    let i = this.time + t,
      r = this._loopCount;
    const o = n === Mh;
    if (t === 0) return r === -1 ? i : o && (r & 1) === 1 ? e - i : i;
    if (n === yh) {
      r === -1 && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
      t: {
        if (i >= e) i = e;
        else if (i < 0) i = 0;
        else {
          this.time = i;
          break t;
        }
        this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
          (this.time = i),
          this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: t < 0 ? -1 : 1,
          });
      }
    } else {
      if (
        (r === -1 &&
          (t >= 0
            ? ((r = 0), this._setEndings(!0, this.repetitions === 0, o))
            : this._setEndings(this.repetitions === 0, !0, o)),
        i >= e || i < 0)
      ) {
        const a = Math.floor(i / e);
        (i -= e * a), (r += Math.abs(a));
        const l = this.repetitions - r;
        if (l <= 0)
          this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
            (i = t > 0 ? e : 0),
            (this.time = i),
            this._mixer.dispatchEvent({
              type: "finished",
              action: this,
              direction: t > 0 ? 1 : -1,
            });
        else {
          if (l === 1) {
            const c = t < 0;
            this._setEndings(c, !c, o);
          } else this._setEndings(!1, !1, o);
          (this._loopCount = r),
            (this.time = i),
            this._mixer.dispatchEvent({
              type: "loop",
              action: this,
              loopDelta: a,
            });
        }
      } else this.time = i;
      if (o && (r & 1) === 1) return e - i;
    }
    return i;
  }
  _setEndings(t, e, n) {
    const i = this._interpolantSettings;
    n
      ? ((i.endingStart = si), (i.endingEnd = si))
      : (t
          ? (i.endingStart = this.zeroSlopeAtStart ? si : ri)
          : (i.endingStart = qr),
        e ? (i.endingEnd = this.zeroSlopeAtEnd ? si : ri) : (i.endingEnd = qr));
  }
  _scheduleFading(t, e, n) {
    const i = this._mixer,
      r = i.time;
    let o = this._weightInterpolant;
    o === null &&
      ((o = i._lendControlInterpolant()), (this._weightInterpolant = o));
    const a = o.parameterPositions,
      l = o.sampleValues;
    return (a[0] = r), (l[0] = e), (a[1] = r + t), (l[1] = n), this;
  }
}
class Kg extends _n {
  constructor(t) {
    super(),
      (this._root = t),
      this._initMemoryManager(),
      (this._accuIndex = 0),
      (this.time = 0),
      (this.timeScale = 1);
  }
  _bindAction(t, e) {
    const n = t._localRoot || this._root,
      i = t._clip.tracks,
      r = i.length,
      o = t._propertyBindings,
      a = t._interpolants,
      l = n.uuid,
      c = this._bindingsByRootAndName;
    let h = c[l];
    h === void 0 && ((h = {}), (c[l] = h));
    for (let u = 0; u !== r; ++u) {
      const d = i[u],
        p = d.name;
      let g = h[p];
      if (g !== void 0) ++g.referenceCount, (o[u] = g);
      else {
        if (((g = o[u]), g !== void 0)) {
          g._cacheIndex === null &&
            (++g.referenceCount, this._addInactiveBinding(g, l, p));
          continue;
        }
        const m = e && e._propertyBindings[u].binding.parsedPath;
        (g = new Vg(Gt.create(n, p, m), d.ValueTypeName, d.getValueSize())),
          ++g.referenceCount,
          this._addInactiveBinding(g, l, p),
          (o[u] = g);
      }
      a[u].resultBuffer = g.buffer;
    }
  }
  _activateAction(t) {
    if (!this._isActiveAction(t)) {
      if (t._cacheIndex === null) {
        const n = (t._localRoot || this._root).uuid,
          i = t._clip.uuid,
          r = this._actionsByClip[i];
        this._bindAction(t, r && r.knownActions[0]),
          this._addInactiveAction(t, i, n);
      }
      const e = t._propertyBindings;
      for (let n = 0, i = e.length; n !== i; ++n) {
        const r = e[n];
        r.useCount++ === 0 && (this._lendBinding(r), r.saveOriginalState());
      }
      this._lendAction(t);
    }
  }
  _deactivateAction(t) {
    if (this._isActiveAction(t)) {
      const e = t._propertyBindings;
      for (let n = 0, i = e.length; n !== i; ++n) {
        const r = e[n];
        --r.useCount === 0 &&
          (r.restoreOriginalState(), this._takeBackBinding(r));
      }
      this._takeBackAction(t);
    }
  }
  _initMemoryManager() {
    (this._actions = []),
      (this._nActiveActions = 0),
      (this._actionsByClip = {}),
      (this._bindings = []),
      (this._nActiveBindings = 0),
      (this._bindingsByRootAndName = {}),
      (this._controlInterpolants = []),
      (this._nActiveControlInterpolants = 0);
    const t = this;
    this.stats = {
      actions: {
        get total() {
          return t._actions.length;
        },
        get inUse() {
          return t._nActiveActions;
        },
      },
      bindings: {
        get total() {
          return t._bindings.length;
        },
        get inUse() {
          return t._nActiveBindings;
        },
      },
      controlInterpolants: {
        get total() {
          return t._controlInterpolants.length;
        },
        get inUse() {
          return t._nActiveControlInterpolants;
        },
      },
    };
  }
  _isActiveAction(t) {
    const e = t._cacheIndex;
    return e !== null && e < this._nActiveActions;
  }
  _addInactiveAction(t, e, n) {
    const i = this._actions,
      r = this._actionsByClip;
    let o = r[e];
    if (o === void 0)
      (o = { knownActions: [t], actionByRoot: {} }),
        (t._byClipCacheIndex = 0),
        (r[e] = o);
    else {
      const a = o.knownActions;
      (t._byClipCacheIndex = a.length), a.push(t);
    }
    (t._cacheIndex = i.length), i.push(t), (o.actionByRoot[n] = t);
  }
  _removeInactiveAction(t) {
    const e = this._actions,
      n = e[e.length - 1],
      i = t._cacheIndex;
    (n._cacheIndex = i), (e[i] = n), e.pop(), (t._cacheIndex = null);
    const r = t._clip.uuid,
      o = this._actionsByClip,
      a = o[r],
      l = a.knownActions,
      c = l[l.length - 1],
      h = t._byClipCacheIndex;
    (c._byClipCacheIndex = h),
      (l[h] = c),
      l.pop(),
      (t._byClipCacheIndex = null);
    const u = a.actionByRoot,
      d = (t._localRoot || this._root).uuid;
    delete u[d],
      l.length === 0 && delete o[r],
      this._removeInactiveBindingsForAction(t);
  }
  _removeInactiveBindingsForAction(t) {
    const e = t._propertyBindings;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = e[n];
      --r.referenceCount === 0 && this._removeInactiveBinding(r);
    }
  }
  _lendAction(t) {
    const e = this._actions,
      n = t._cacheIndex,
      i = this._nActiveActions++,
      r = e[i];
    (t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
  }
  _takeBackAction(t) {
    const e = this._actions,
      n = t._cacheIndex,
      i = --this._nActiveActions,
      r = e[i];
    (t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
  }
  _addInactiveBinding(t, e, n) {
    const i = this._bindingsByRootAndName,
      r = this._bindings;
    let o = i[e];
    o === void 0 && ((o = {}), (i[e] = o)),
      (o[n] = t),
      (t._cacheIndex = r.length),
      r.push(t);
  }
  _removeInactiveBinding(t) {
    const e = this._bindings,
      n = t.binding,
      i = n.rootNode.uuid,
      r = n.path,
      o = this._bindingsByRootAndName,
      a = o[i],
      l = e[e.length - 1],
      c = t._cacheIndex;
    (l._cacheIndex = c),
      (e[c] = l),
      e.pop(),
      delete a[r],
      Object.keys(a).length === 0 && delete o[i];
  }
  _lendBinding(t) {
    const e = this._bindings,
      n = t._cacheIndex,
      i = this._nActiveBindings++,
      r = e[i];
    (t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
  }
  _takeBackBinding(t) {
    const e = this._bindings,
      n = t._cacheIndex,
      i = --this._nActiveBindings,
      r = e[i];
    (t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
  }
  _lendControlInterpolant() {
    const t = this._controlInterpolants,
      e = this._nActiveControlInterpolants++;
    let n = t[e];
    return (
      n === void 0 &&
        ((n = new cc(
          new Float32Array(2),
          new Float32Array(2),
          1,
          this._controlInterpolantsResultBuffer
        )),
        (n.__cacheIndex = e),
        (t[e] = n)),
      n
    );
  }
  _takeBackControlInterpolant(t) {
    const e = this._controlInterpolants,
      n = t.__cacheIndex,
      i = --this._nActiveControlInterpolants,
      r = e[i];
    (t.__cacheIndex = i), (e[i] = t), (r.__cacheIndex = n), (e[n] = r);
  }
  clipAction(t, e, n) {
    const i = e || this._root,
      r = i.uuid;
    let o = typeof t == "string" ? pl.findByName(i, t) : t;
    const a = o !== null ? o.uuid : t,
      l = this._actionsByClip[a];
    let c = null;
    if (
      (n === void 0 && (o !== null ? (n = o.blendMode) : (n = uo)),
      l !== void 0)
    ) {
      const u = l.actionByRoot[r];
      if (u !== void 0 && u.blendMode === n) return u;
      (c = l.knownActions[0]), o === null && (o = c._clip);
    }
    if (o === null) return null;
    const h = new $g(this, o, e, n);
    return this._bindAction(h, c), this._addInactiveAction(h, a, r), h;
  }
  existingAction(t, e) {
    const n = e || this._root,
      i = n.uuid,
      r = typeof t == "string" ? pl.findByName(n, t) : t,
      o = r ? r.uuid : t,
      a = this._actionsByClip[o];
    return (a !== void 0 && a.actionByRoot[i]) || null;
  }
  stopAllAction() {
    const t = this._actions,
      e = this._nActiveActions;
    for (let n = e - 1; n >= 0; --n) t[n].stop();
    return this;
  }
  update(t) {
    t *= this.timeScale;
    const e = this._actions,
      n = this._nActiveActions,
      i = (this.time += t),
      r = Math.sign(t),
      o = (this._accuIndex ^= 1);
    for (let c = 0; c !== n; ++c) e[c]._update(i, t, r, o);
    const a = this._bindings,
      l = this._nActiveBindings;
    for (let c = 0; c !== l; ++c) a[c].apply(o);
    return this;
  }
  setTime(t) {
    this.time = 0;
    for (let e = 0; e < this._actions.length; e++) this._actions[e].time = 0;
    return this.update(t);
  }
  getRoot() {
    return this._root;
  }
  uncacheClip(t) {
    const e = this._actions,
      n = t.uuid,
      i = this._actionsByClip,
      r = i[n];
    if (r !== void 0) {
      const o = r.knownActions;
      for (let a = 0, l = o.length; a !== l; ++a) {
        const c = o[a];
        this._deactivateAction(c);
        const h = c._cacheIndex,
          u = e[e.length - 1];
        (c._cacheIndex = null),
          (c._byClipCacheIndex = null),
          (u._cacheIndex = h),
          (e[h] = u),
          e.pop(),
          this._removeInactiveBindingsForAction(c);
      }
      delete i[n];
    }
  }
  uncacheRoot(t) {
    const e = t.uuid,
      n = this._actionsByClip;
    for (const o in n) {
      const a = n[o].actionByRoot,
        l = a[e];
      l !== void 0 &&
        (this._deactivateAction(l), this._removeInactiveAction(l));
    }
    const i = this._bindingsByRootAndName,
      r = i[e];
    if (r !== void 0)
      for (const o in r) {
        const a = r[o];
        a.restoreOriginalState(), this._removeInactiveBinding(a);
      }
  }
  uncacheAction(t, e) {
    const n = this.existingAction(t, e);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
Kg.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
class Qg extends tr {
  constructor(t, e, n = 1) {
    super(t, e), (this.meshPerAttribute = n);
  }
  copy(t) {
    return super.copy(t), (this.meshPerAttribute = t.meshPerAttribute), this;
  }
  clone(t) {
    const e = super.clone(t);
    return (e.meshPerAttribute = this.meshPerAttribute), e;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      (e.isInstancedInterleavedBuffer = !0),
      (e.meshPerAttribute = this.meshPerAttribute),
      e
    );
  }
}
Qg.prototype.isInstancedInterleavedBuffer = !0;
class yl {
  constructor(t = 1, e = 0, n = 0) {
    return (this.radius = t), (this.phi = e), (this.theta = n), this;
  }
  set(t, e, n) {
    return (this.radius = t), (this.phi = e), (this.theta = n), this;
  }
  copy(t) {
    return (
      (this.radius = t.radius), (this.phi = t.phi), (this.theta = t.theta), this
    );
  }
  makeSafe() {
    return (
      (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
    );
  }
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  setFromCartesianCoords(t, e, n) {
    return (
      (this.radius = Math.sqrt(t * t + e * e + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(t, n)),
          (this.phi = Math.acos(le(e / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const hn = new E(),
  Ur = new bt(),
  Ys = new bt();
class t_ extends To {
  constructor(t) {
    const e = xc(t),
      n = new Yt(),
      i = [],
      r = [],
      o = new xt(0, 0, 1),
      a = new xt(0, 1, 0);
    for (let c = 0; c < e.length; c++) {
      const h = e[c];
      h.parent &&
        h.parent.isBone &&
        (i.push(0, 0, 0),
        i.push(0, 0, 0),
        r.push(o.r, o.g, o.b),
        r.push(a.r, a.g, a.b));
    }
    n.setAttribute("position", new $t(i, 3)),
      n.setAttribute("color", new $t(r, 3));
    const l = new wi({
      vertexColors: !0,
      depthTest: !1,
      depthWrite: !1,
      toneMapped: !1,
      transparent: !0,
    });
    super(n, l),
      (this.type = "SkeletonHelper"),
      (this.isSkeletonHelper = !0),
      (this.root = t),
      (this.bones = e),
      (this.matrix = t.matrixWorld),
      (this.matrixAutoUpdate = !1);
  }
  updateMatrixWorld(t) {
    const e = this.bones,
      n = this.geometry,
      i = n.getAttribute("position");
    Ys.copy(this.root.matrixWorld).invert();
    for (let r = 0, o = 0; r < e.length; r++) {
      const a = e[r];
      a.parent &&
        a.parent.isBone &&
        (Ur.multiplyMatrices(Ys, a.matrixWorld),
        hn.setFromMatrixPosition(Ur),
        i.setXYZ(o, hn.x, hn.y, hn.z),
        Ur.multiplyMatrices(Ys, a.parent.matrixWorld),
        hn.setFromMatrixPosition(Ur),
        i.setXYZ(o + 1, hn.x, hn.y, hn.z),
        (o += 2));
    }
    (n.getAttribute("position").needsUpdate = !0), super.updateMatrixWorld(t);
  }
}
function xc(s) {
  const t = [];
  s.isBone === !0 && t.push(s);
  for (let e = 0; e < s.children.length; e++)
    t.push.apply(t, xc(s.children[e]));
  return t;
}
class e_ extends To {
  constructor(t = 10, e = 10, n = 4473924, i = 8947848) {
    (n = new xt(n)), (i = new xt(i));
    const r = e / 2,
      o = t / e,
      a = t / 2,
      l = [],
      c = [];
    for (let d = 0, p = 0, g = -a; d <= e; d++, g += o) {
      l.push(-a, 0, g, a, 0, g), l.push(g, 0, -a, g, 0, a);
      const m = d === r ? n : i;
      m.toArray(c, p),
        (p += 3),
        m.toArray(c, p),
        (p += 3),
        m.toArray(c, p),
        (p += 3),
        m.toArray(c, p),
        (p += 3);
    }
    const h = new Yt();
    h.setAttribute("position", new $t(l, 3)),
      h.setAttribute("color", new $t(c, 3));
    const u = new wi({ vertexColors: !0, toneMapped: !1 });
    super(h, u), (this.type = "GridHelper");
  }
}
const Ve = new Uint32Array(512),
  ke = new Uint32Array(512);
for (let s = 0; s < 256; ++s) {
  const t = s - 127;
  t < -27
    ? ((Ve[s] = 0), (Ve[s | 256] = 32768), (ke[s] = 24), (ke[s | 256] = 24))
    : t < -14
    ? ((Ve[s] = 1024 >> (-t - 14)),
      (Ve[s | 256] = (1024 >> (-t - 14)) | 32768),
      (ke[s] = -t - 1),
      (ke[s | 256] = -t - 1))
    : t <= 15
    ? ((Ve[s] = (t + 15) << 10),
      (Ve[s | 256] = ((t + 15) << 10) | 32768),
      (ke[s] = 13),
      (ke[s | 256] = 13))
    : t < 128
    ? ((Ve[s] = 31744), (Ve[s | 256] = 64512), (ke[s] = 24), (ke[s | 256] = 24))
    : ((Ve[s] = 31744),
      (Ve[s | 256] = 64512),
      (ke[s] = 13),
      (ke[s | 256] = 13));
}
const yc = new Uint32Array(2048),
  sr = new Uint32Array(64),
  n_ = new Uint32Array(64);
for (let s = 1; s < 1024; ++s) {
  let t = s << 13,
    e = 0;
  for (; (t & 8388608) === 0; ) (t <<= 1), (e -= 8388608);
  (t &= -8388609), (e += 947912704), (yc[s] = t | e);
}
for (let s = 1024; s < 2048; ++s) yc[s] = 939524096 + ((s - 1024) << 13);
for (let s = 1; s < 31; ++s) sr[s] = s << 23;
sr[31] = 1199570944;
sr[32] = 2147483648;
for (let s = 33; s < 63; ++s) sr[s] = 2147483648 + ((s - 32) << 23);
sr[63] = 3347054592;
for (let s = 1; s < 64; ++s) s !== 32 && (n_[s] = 1024);
Ee.create = function (s, t) {
  return (
    console.log("THREE.Curve.create() has been deprecated"),
    (s.prototype = Object.create(Ee.prototype)),
    (s.prototype.constructor = s),
    (s.prototype.getPoint = t),
    s
  );
};
oo.prototype.fromPoints = function (s) {
  return (
    console.warn(
      "THREE.Path: .fromPoints() has been renamed to .setFromPoints()."
    ),
    this.setFromPoints(s)
  );
};
e_.prototype.setColors = function () {
  console.error(
    "THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead."
  );
};
t_.prototype.update = function () {
  console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
};
xn.prototype.extractUrlBase = function (s) {
  return (
    console.warn(
      "THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."
    ),
    Ig.extractUrlBase(s)
  );
};
xn.Handlers = {
  add: function () {
    console.error(
      "THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead."
    );
  },
  get: function () {
    console.error(
      "THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead."
    );
  },
};
Ne.prototype.center = function (s) {
  return (
    console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),
    this.getCenter(s)
  );
};
Ne.prototype.empty = function () {
  return (
    console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
    this.isEmpty()
  );
};
Ne.prototype.isIntersectionBox = function (s) {
  return (
    console.warn(
      "THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."
    ),
    this.intersectsBox(s)
  );
};
Ne.prototype.isIntersectionSphere = function (s) {
  return (
    console.warn(
      "THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."
    ),
    this.intersectsSphere(s)
  );
};
Ne.prototype.size = function (s) {
  return (
    console.warn("THREE.Box3: .size() has been renamed to .getSize()."),
    this.getSize(s)
  );
};
In.prototype.toVector3 = function () {
  console.error(
    "THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead"
  );
};
xi.prototype.empty = function () {
  return (
    console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),
    this.isEmpty()
  );
};
es.prototype.setFromMatrix = function (s) {
  return (
    console.warn(
      "THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."
    ),
    this.setFromProjectionMatrix(s)
  );
};
de.prototype.flattenToArrayOffset = function (s, t) {
  return (
    console.warn(
      "THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
    ),
    this.toArray(s, t)
  );
};
de.prototype.multiplyVector3 = function (s) {
  return (
    console.warn(
      "THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."
    ),
    s.applyMatrix3(this)
  );
};
de.prototype.multiplyVector3Array = function () {
  console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
};
de.prototype.applyToBufferAttribute = function (s) {
  return (
    console.warn(
      "THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."
    ),
    s.applyMatrix3(this)
  );
};
de.prototype.applyToVector3Array = function () {
  console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
};
de.prototype.getInverse = function (s) {
  return (
    console.warn(
      "THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."
    ),
    this.copy(s).invert()
  );
};
bt.prototype.extractPosition = function (s) {
  return (
    console.warn(
      "THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."
    ),
    this.copyPosition(s)
  );
};
bt.prototype.flattenToArrayOffset = function (s, t) {
  return (
    console.warn(
      "THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
    ),
    this.toArray(s, t)
  );
};
bt.prototype.getPosition = function () {
  return (
    console.warn(
      "THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."
    ),
    new E().setFromMatrixColumn(this, 3)
  );
};
bt.prototype.setRotationFromQuaternion = function (s) {
  return (
    console.warn(
      "THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."
    ),
    this.makeRotationFromQuaternion(s)
  );
};
bt.prototype.multiplyToArray = function () {
  console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
};
bt.prototype.multiplyVector3 = function (s) {
  return (
    console.warn(
      "THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."
    ),
    s.applyMatrix4(this)
  );
};
bt.prototype.multiplyVector4 = function (s) {
  return (
    console.warn(
      "THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."
    ),
    s.applyMatrix4(this)
  );
};
bt.prototype.multiplyVector3Array = function () {
  console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
};
bt.prototype.rotateAxis = function (s) {
  console.warn(
    "THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."
  ),
    s.transformDirection(this);
};
bt.prototype.crossVector = function (s) {
  return (
    console.warn(
      "THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."
    ),
    s.applyMatrix4(this)
  );
};
bt.prototype.translate = function () {
  console.error("THREE.Matrix4: .translate() has been removed.");
};
bt.prototype.rotateX = function () {
  console.error("THREE.Matrix4: .rotateX() has been removed.");
};
bt.prototype.rotateY = function () {
  console.error("THREE.Matrix4: .rotateY() has been removed.");
};
bt.prototype.rotateZ = function () {
  console.error("THREE.Matrix4: .rotateZ() has been removed.");
};
bt.prototype.rotateByAxis = function () {
  console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
};
bt.prototype.applyToBufferAttribute = function (s) {
  return (
    console.warn(
      "THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."
    ),
    s.applyMatrix4(this)
  );
};
bt.prototype.applyToVector3Array = function () {
  console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
};
bt.prototype.makeFrustum = function (s, t, e, n, i, r) {
  return (
    console.warn(
      "THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."
    ),
    this.makePerspective(s, t, n, e, i, r)
  );
};
bt.prototype.getInverse = function (s) {
  return (
    console.warn(
      "THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."
    ),
    this.copy(s).invert()
  );
};
Qe.prototype.isIntersectionLine = function (s) {
  return (
    console.warn(
      "THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."
    ),
    this.intersectsLine(s)
  );
};
pe.prototype.multiplyVector3 = function (s) {
  return (
    console.warn(
      "THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."
    ),
    s.applyQuaternion(this)
  );
};
pe.prototype.inverse = function () {
  return (
    console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),
    this.invert()
  );
};
yi.prototype.isIntersectionBox = function (s) {
  return (
    console.warn(
      "THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."
    ),
    this.intersectsBox(s)
  );
};
yi.prototype.isIntersectionPlane = function (s) {
  return (
    console.warn(
      "THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."
    ),
    this.intersectsPlane(s)
  );
};
yi.prototype.isIntersectionSphere = function (s) {
  return (
    console.warn(
      "THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."
    ),
    this.intersectsSphere(s)
  );
};
ne.prototype.area = function () {
  return (
    console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),
    this.getArea()
  );
};
ne.prototype.barycoordFromPoint = function (s, t) {
  return (
    console.warn(
      "THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
    ),
    this.getBarycoord(s, t)
  );
};
ne.prototype.midpoint = function (s) {
  return (
    console.warn(
      "THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."
    ),
    this.getMidpoint(s)
  );
};
ne.prototypenormal = function (s) {
  return (
    console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
    this.getNormal(s)
  );
};
ne.prototype.plane = function (s) {
  return (
    console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),
    this.getPlane(s)
  );
};
ne.barycoordFromPoint = function (s, t, e, n, i) {
  return (
    console.warn(
      "THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
    ),
    ne.getBarycoord(s, t, e, n, i)
  );
};
ne.normal = function (s, t, e, n) {
  return (
    console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
    ne.getNormal(s, t, e, n)
  );
};
er.prototype.extractAllPoints = function (s) {
  return (
    console.warn(
      "THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."
    ),
    this.extractPoints(s)
  );
};
er.prototype.extrude = function (s) {
  return (
    console.warn(
      "THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."
    ),
    new Si(this, s)
  );
};
er.prototype.makeGeometry = function (s) {
  return (
    console.warn(
      "THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."
    ),
    new Do(this, s)
  );
};
Z.prototype.fromAttribute = function (s, t, e) {
  return (
    console.warn(
      "THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."
    ),
    this.fromBufferAttribute(s, t, e)
  );
};
Z.prototype.distanceToManhattan = function (s) {
  return (
    console.warn(
      "THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
    ),
    this.manhattanDistanceTo(s)
  );
};
Z.prototype.lengthManhattan = function () {
  return (
    console.warn(
      "THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."
    ),
    this.manhattanLength()
  );
};
E.prototype.setEulerFromRotationMatrix = function () {
  console.error(
    "THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead."
  );
};
E.prototype.setEulerFromQuaternion = function () {
  console.error(
    "THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead."
  );
};
E.prototype.getPositionFromMatrix = function (s) {
  return (
    console.warn(
      "THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."
    ),
    this.setFromMatrixPosition(s)
  );
};
E.prototype.getScaleFromMatrix = function (s) {
  return (
    console.warn(
      "THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."
    ),
    this.setFromMatrixScale(s)
  );
};
E.prototype.getColumnFromMatrix = function (s, t) {
  return (
    console.warn(
      "THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."
    ),
    this.setFromMatrixColumn(t, s)
  );
};
E.prototype.applyProjection = function (s) {
  return (
    console.warn(
      "THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."
    ),
    this.applyMatrix4(s)
  );
};
E.prototype.fromAttribute = function (s, t, e) {
  return (
    console.warn(
      "THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."
    ),
    this.fromBufferAttribute(s, t, e)
  );
};
E.prototype.distanceToManhattan = function (s) {
  return (
    console.warn(
      "THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
    ),
    this.manhattanDistanceTo(s)
  );
};
E.prototype.lengthManhattan = function () {
  return (
    console.warn(
      "THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."
    ),
    this.manhattanLength()
  );
};
jt.prototype.fromAttribute = function (s, t, e) {
  return (
    console.warn(
      "THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."
    ),
    this.fromBufferAttribute(s, t, e)
  );
};
jt.prototype.lengthManhattan = function () {
  return (
    console.warn(
      "THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."
    ),
    this.manhattanLength()
  );
};
Wt.prototype.getChildByName = function (s) {
  return (
    console.warn(
      "THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."
    ),
    this.getObjectByName(s)
  );
};
Wt.prototype.renderDepth = function () {
  console.warn(
    "THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead."
  );
};
Wt.prototype.translate = function (s, t) {
  return (
    console.warn(
      "THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."
    ),
    this.translateOnAxis(t, s)
  );
};
Wt.prototype.getWorldRotation = function () {
  console.error(
    "THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead."
  );
};
Wt.prototype.applyMatrix = function (s) {
  return (
    console.warn(
      "THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."
    ),
    this.applyMatrix4(s)
  );
};
Object.defineProperties(Wt.prototype, {
  eulerOrder: {
    get: function () {
      return (
        console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
        this.rotation.order
      );
    },
    set: function (s) {
      console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
        (this.rotation.order = s);
    },
  },
  useQuaternion: {
    get: function () {
      console.warn(
        "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
      );
    },
    set: function () {
      console.warn(
        "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
      );
    },
  },
});
ce.prototype.setDrawMode = function () {
  console.error(
    "THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
  );
};
Object.defineProperties(ce.prototype, {
  drawMode: {
    get: function () {
      return (
        console.error(
          "THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."
        ),
        bh
      );
    },
    set: function () {
      console.error(
        "THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
      );
    },
  },
});
ql.prototype.initBones = function () {
  console.error("THREE.SkinnedMesh: initBones() has been removed.");
};
_e.prototype.setLens = function (s, t) {
  console.warn(
    "THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."
  ),
    t !== void 0 && (this.filmGauge = t),
    this.setFocalLength(s);
};
Object.defineProperties(We.prototype, {
  onlyShadow: {
    set: function () {
      console.warn("THREE.Light: .onlyShadow has been removed.");
    },
  },
  shadowCameraFov: {
    set: function (s) {
      console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),
        (this.shadow.camera.fov = s);
    },
  },
  shadowCameraLeft: {
    set: function (s) {
      console.warn(
        "THREE.Light: .shadowCameraLeft is now .shadow.camera.left."
      ),
        (this.shadow.camera.left = s);
    },
  },
  shadowCameraRight: {
    set: function (s) {
      console.warn(
        "THREE.Light: .shadowCameraRight is now .shadow.camera.right."
      ),
        (this.shadow.camera.right = s);
    },
  },
  shadowCameraTop: {
    set: function (s) {
      console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),
        (this.shadow.camera.top = s);
    },
  },
  shadowCameraBottom: {
    set: function (s) {
      console.warn(
        "THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."
      ),
        (this.shadow.camera.bottom = s);
    },
  },
  shadowCameraNear: {
    set: function (s) {
      console.warn(
        "THREE.Light: .shadowCameraNear is now .shadow.camera.near."
      ),
        (this.shadow.camera.near = s);
    },
  },
  shadowCameraFar: {
    set: function (s) {
      console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),
        (this.shadow.camera.far = s);
    },
  },
  shadowCameraVisible: {
    set: function () {
      console.warn(
        "THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead."
      );
    },
  },
  shadowBias: {
    set: function (s) {
      console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
        (this.shadow.bias = s);
    },
  },
  shadowDarkness: {
    set: function () {
      console.warn("THREE.Light: .shadowDarkness has been removed.");
    },
  },
  shadowMapWidth: {
    set: function (s) {
      console.warn(
        "THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."
      ),
        (this.shadow.mapSize.width = s);
    },
  },
  shadowMapHeight: {
    set: function (s) {
      console.warn(
        "THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."
      ),
        (this.shadow.mapSize.height = s);
    },
  },
});
Object.defineProperties(re.prototype, {
  length: {
    get: function () {
      return (
        console.warn(
          "THREE.BufferAttribute: .length has been deprecated. Use .count instead."
        ),
        this.array.length
      );
    },
  },
  dynamic: {
    get: function () {
      return (
        console.warn(
          "THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
        ),
        this.usage === Xr
      );
    },
    set: function () {
      console.warn(
        "THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
      ),
        this.setUsage(Xr);
    },
  },
});
re.prototype.setDynamic = function (s) {
  return (
    console.warn(
      "THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."
    ),
    this.setUsage(s === !0 ? Xr : ji),
    this
  );
};
(re.prototype.copyIndicesArray = function () {
  console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
}),
  (re.prototype.setArray = function () {
    console.error(
      "THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
    );
  });
Yt.prototype.addIndex = function (s) {
  console.warn(
    "THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."
  ),
    this.setIndex(s);
};
Yt.prototype.addAttribute = function (s, t) {
  return (
    console.warn(
      "THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."
    ),
    !(t && t.isBufferAttribute) && !(t && t.isInterleavedBufferAttribute)
      ? (console.warn(
          "THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."
        ),
        this.setAttribute(s, new re(arguments[1], arguments[2])))
      : s === "index"
      ? (console.warn(
          "THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."
        ),
        this.setIndex(t),
        this)
      : this.setAttribute(s, t)
  );
};
Yt.prototype.addDrawCall = function (s, t, e) {
  e !== void 0 &&
    console.warn(
      "THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."
    ),
    console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),
    this.addGroup(s, t);
};
Yt.prototype.clearDrawCalls = function () {
  console.warn(
    "THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."
  ),
    this.clearGroups();
};
Yt.prototype.computeOffsets = function () {
  console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
};
Yt.prototype.removeAttribute = function (s) {
  return (
    console.warn(
      "THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."
    ),
    this.deleteAttribute(s)
  );
};
Yt.prototype.applyMatrix = function (s) {
  return (
    console.warn(
      "THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."
    ),
    this.applyMatrix4(s)
  );
};
Object.defineProperties(Yt.prototype, {
  drawcalls: {
    get: function () {
      return (
        console.error(
          "THREE.BufferGeometry: .drawcalls has been renamed to .groups."
        ),
        this.groups
      );
    },
  },
  offsets: {
    get: function () {
      return (
        console.warn(
          "THREE.BufferGeometry: .offsets has been renamed to .groups."
        ),
        this.groups
      );
    },
  },
});
tr.prototype.setDynamic = function (s) {
  return (
    console.warn(
      "THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."
    ),
    this.setUsage(s === !0 ? Xr : ji),
    this
  );
};
tr.prototype.setArray = function () {
  console.error(
    "THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
  );
};
Si.prototype.getArrays = function () {
  console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");
};
Si.prototype.addShapeList = function () {
  console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.");
};
Si.prototype.addShape = function () {
  console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
};
wo.prototype.dispose = function () {
  console.error("THREE.Scene: .dispose() has been removed.");
};
Object.defineProperties(se.prototype, {
  wrapAround: {
    get: function () {
      console.warn("THREE.Material: .wrapAround has been removed.");
    },
    set: function () {
      console.warn("THREE.Material: .wrapAround has been removed.");
    },
  },
  overdraw: {
    get: function () {
      console.warn("THREE.Material: .overdraw has been removed.");
    },
    set: function () {
      console.warn("THREE.Material: .overdraw has been removed.");
    },
  },
  wrapRGB: {
    get: function () {
      return (
        console.warn("THREE.Material: .wrapRGB has been removed."), new xt()
      );
    },
  },
  shading: {
    get: function () {
      console.error(
        "THREE." +
          this.type +
          ": .shading has been removed. Use the boolean .flatShading instead."
      );
    },
    set: function (s) {
      console.warn(
        "THREE." +
          this.type +
          ": .shading has been removed. Use the boolean .flatShading instead."
      ),
        (this.flatShading = s === wl);
    },
  },
  stencilMask: {
    get: function () {
      return (
        console.warn(
          "THREE." +
            this.type +
            ": .stencilMask has been removed. Use .stencilFuncMask instead."
        ),
        this.stencilFuncMask
      );
    },
    set: function (s) {
      console.warn(
        "THREE." +
          this.type +
          ": .stencilMask has been removed. Use .stencilFuncMask instead."
      ),
        (this.stencilFuncMask = s);
    },
  },
  vertexTangents: {
    get: function () {
      console.warn(
        "THREE." + this.type + ": .vertexTangents has been removed."
      );
    },
    set: function () {
      console.warn(
        "THREE." + this.type + ": .vertexTangents has been removed."
      );
    },
  },
});
Object.defineProperties(Fe.prototype, {
  derivatives: {
    get: function () {
      return (
        console.warn(
          "THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
        ),
        this.extensions.derivatives
      );
    },
    set: function (s) {
      console.warn(
        "THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
      ),
        (this.extensions.derivatives = s);
    },
  },
});
qt.prototype.clearTarget = function (s, t, e, n) {
  console.warn(
    "THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."
  ),
    this.setRenderTarget(s),
    this.clear(t, e, n);
};
qt.prototype.animate = function (s) {
  console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),
    this.setAnimationLoop(s);
};
qt.prototype.getCurrentRenderTarget = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."
    ),
    this.getRenderTarget()
  );
};
qt.prototype.getMaxAnisotropy = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."
    ),
    this.capabilities.getMaxAnisotropy()
  );
};
qt.prototype.getPrecision = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."
    ),
    this.capabilities.precision
  );
};
qt.prototype.resetGLState = function () {
  return (
    console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),
    this.state.reset()
  );
};
qt.prototype.supportsFloatTextures = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."
    ),
    this.extensions.get("OES_texture_float")
  );
};
qt.prototype.supportsHalfFloatTextures = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."
    ),
    this.extensions.get("OES_texture_half_float")
  );
};
qt.prototype.supportsStandardDerivatives = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."
    ),
    this.extensions.get("OES_standard_derivatives")
  );
};
qt.prototype.supportsCompressedTextureS3TC = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."
    ),
    this.extensions.get("WEBGL_compressed_texture_s3tc")
  );
};
qt.prototype.supportsCompressedTexturePVRTC = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."
    ),
    this.extensions.get("WEBGL_compressed_texture_pvrtc")
  );
};
qt.prototype.supportsBlendMinMax = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."
    ),
    this.extensions.get("EXT_blend_minmax")
  );
};
qt.prototype.supportsVertexTextures = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."
    ),
    this.capabilities.vertexTextures
  );
};
qt.prototype.supportsInstancedArrays = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."
    ),
    this.extensions.get("ANGLE_instanced_arrays")
  );
};
qt.prototype.enableScissorTest = function (s) {
  console.warn(
    "THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."
  ),
    this.setScissorTest(s);
};
qt.prototype.initMaterial = function () {
  console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
};
qt.prototype.addPrePlugin = function () {
  console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
};
qt.prototype.addPostPlugin = function () {
  console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
};
qt.prototype.updateShadowMap = function () {
  console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
};
qt.prototype.setFaceCulling = function () {
  console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
};
qt.prototype.allocTextureUnit = function () {
  console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
};
qt.prototype.setTexture = function () {
  console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
};
qt.prototype.setTexture2D = function () {
  console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
};
qt.prototype.setTextureCube = function () {
  console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
};
qt.prototype.getActiveMipMapLevel = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."
    ),
    this.getActiveMipmapLevel()
  );
};
Object.defineProperties(qt.prototype, {
  shadowMapEnabled: {
    get: function () {
      return this.shadowMap.enabled;
    },
    set: function (s) {
      console.warn(
        "THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."
      ),
        (this.shadowMap.enabled = s);
    },
  },
  shadowMapType: {
    get: function () {
      return this.shadowMap.type;
    },
    set: function (s) {
      console.warn(
        "THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."
      ),
        (this.shadowMap.type = s);
    },
  },
  shadowMapCullFace: {
    get: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
      );
    },
  },
  context: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."
        ),
        this.getContext()
      );
    },
  },
  vr: {
    get: function () {
      return (
        console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),
        this.xr
      );
    },
  },
  gammaInput: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
        ),
        !1
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
      );
    },
  },
  gammaOutput: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
        ),
        !1
      );
    },
    set: function (s) {
      console.warn(
        "THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
      ),
        (this.outputEncoding = s === !0 ? Zt : pn);
    },
  },
  toneMappingWhitePoint: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."
        ),
        1
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."
      );
    },
  },
  gammaFactor: {
    get: function () {
      return (
        console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2
      );
    },
    set: function () {
      console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
    },
  },
});
Object.defineProperties(Vl.prototype, {
  cullFace: {
    get: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
      );
    },
  },
  renderReverseSided: {
    get: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
      );
    },
  },
  renderSingleSided: {
    get: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
      );
    },
  },
});
Object.defineProperties(we.prototype, {
  wrapS: {
    get: function () {
      return (
        console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
        this.texture.wrapS
      );
    },
    set: function (s) {
      console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
        (this.texture.wrapS = s);
    },
  },
  wrapT: {
    get: function () {
      return (
        console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
        this.texture.wrapT
      );
    },
    set: function (s) {
      console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
        (this.texture.wrapT = s);
    },
  },
  magFilter: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
        ),
        this.texture.magFilter
      );
    },
    set: function (s) {
      console.warn(
        "THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
      ),
        (this.texture.magFilter = s);
    },
  },
  minFilter: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
        ),
        this.texture.minFilter
      );
    },
    set: function (s) {
      console.warn(
        "THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
      ),
        (this.texture.minFilter = s);
    },
  },
  anisotropy: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
        ),
        this.texture.anisotropy
      );
    },
    set: function (s) {
      console.warn(
        "THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
      ),
        (this.texture.anisotropy = s);
    },
  },
  offset: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .offset is now .texture.offset."
        ),
        this.texture.offset
      );
    },
    set: function (s) {
      console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
        (this.texture.offset = s);
    },
  },
  repeat: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .repeat is now .texture.repeat."
        ),
        this.texture.repeat
      );
    },
    set: function (s) {
      console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
        (this.texture.repeat = s);
    },
  },
  format: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .format is now .texture.format."
        ),
        this.texture.format
      );
    },
    set: function (s) {
      console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
        (this.texture.format = s);
    },
  },
  type: {
    get: function () {
      return (
        console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
        this.texture.type
      );
    },
    set: function (s) {
      console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
        (this.texture.type = s);
    },
  },
  generateMipmaps: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
        ),
        this.texture.generateMipmaps
      );
    },
    set: function (s) {
      console.warn(
        "THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
      ),
        (this.texture.generateMipmaps = s);
    },
  },
});
Hg.prototype.load = function (s) {
  console.warn(
    "THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead."
  );
  const t = this;
  return (
    new zg().load(s, function (n) {
      t.setBuffer(n);
    }),
    this
  );
};
_o.prototype.updateCubeMap = function (s, t) {
  return (
    console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),
    this.update(s, t)
  );
};
_o.prototype.clear = function (s, t, e, n) {
  return (
    console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),
    this.renderTarget.clear(s, t, e, n)
  );
};
Dn.crossOrigin = void 0;
Dn.loadTexture = function (s, t, e, n) {
  console.warn(
    "THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead."
  );
  const i = new rr();
  i.setCrossOrigin(this.crossOrigin);
  const r = i.load(s, e, void 0, n);
  return t && (r.mapping = t), r;
};
Dn.loadTextureCube = function (s, t, e, n) {
  console.warn(
    "THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead."
  );
  const i = new Cg();
  i.setCrossOrigin(this.crossOrigin);
  const r = i.load(s, e, void 0, n);
  return t && (r.mapping = t), r;
};
Dn.loadCompressedTexture = function () {
  console.error(
    "THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead."
  );
};
Dn.loadCompressedTextureCube = function () {
  console.error(
    "THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead."
  );
};
typeof __THREE_DEVTOOLS__ != "undefined" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: ho } })
  );
typeof window != "undefined" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = ho));
const vl = { type: "change" },
  Zs = { type: "start" },
  Ml = { type: "end" };
class i_ extends _n {
  constructor(t, e) {
    super(),
      e === void 0 &&
        console.warn(
          'THREE.OrbitControls: The second parameter "domElement" is now mandatory.'
        ),
      e === document &&
        console.error(
          'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'
        ),
      (this.object = t),
      (this.domElement = e),
      (this.domElement.style.touchAction = "none"),
      (this.enabled = !0),
      (this.target = new E()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      (this.mouseButtons = {
        LEFT: zn.ROTATE,
        MIDDLE: zn.DOLLY,
        RIGHT: zn.PAN,
      }),
      (this.touches = { ONE: On.ROTATE, TWO: On.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this.getPolarAngle = function () {
        return a.phi;
      }),
      (this.getAzimuthalAngle = function () {
        return a.theta;
      }),
      (this.getDistance = function () {
        return this.object.position.distanceTo(this.target);
      }),
      (this.listenToKeyEvents = function (M) {
        M.addEventListener("keydown", Ut), (this._domElementKeyEvents = M);
      }),
      (this.saveState = function () {
        n.target0.copy(n.target),
          n.position0.copy(n.object.position),
          (n.zoom0 = n.object.zoom);
      }),
      (this.reset = function () {
        n.target.copy(n.target0),
          n.object.position.copy(n.position0),
          (n.object.zoom = n.zoom0),
          n.object.updateProjectionMatrix(),
          n.dispatchEvent(vl),
          n.update(),
          (r = i.NONE);
      }),
      (this.update = (function () {
        const M = new E(),
          tt = new pe().setFromUnitVectors(t.up, new E(0, 1, 0)),
          gt = tt.clone().invert(),
          at = new E(),
          A = new pe(),
          st = 2 * Math.PI;
        return function () {
          const St = n.object.position;
          M.copy(St).sub(n.target),
            M.applyQuaternion(tt),
            a.setFromVector3(M),
            n.autoRotate && r === i.NONE && R(I()),
            n.enableDamping
              ? ((a.theta += l.theta * n.dampingFactor),
                (a.phi += l.phi * n.dampingFactor))
              : ((a.theta += l.theta), (a.phi += l.phi));
          let dt = n.minAzimuthAngle,
            _t = n.maxAzimuthAngle;
          return (
            isFinite(dt) &&
              isFinite(_t) &&
              (dt < -Math.PI ? (dt += st) : dt > Math.PI && (dt -= st),
              _t < -Math.PI ? (_t += st) : _t > Math.PI && (_t -= st),
              dt <= _t
                ? (a.theta = Math.max(dt, Math.min(_t, a.theta)))
                : (a.theta =
                    a.theta > (dt + _t) / 2
                      ? Math.max(dt, a.theta)
                      : Math.min(_t, a.theta))),
            (a.phi = Math.max(
              n.minPolarAngle,
              Math.min(n.maxPolarAngle, a.phi)
            )),
            a.makeSafe(),
            (a.radius *= c),
            (a.radius = Math.max(
              n.minDistance,
              Math.min(n.maxDistance, a.radius)
            )),
            n.enableDamping === !0
              ? n.target.addScaledVector(h, n.dampingFactor)
              : n.target.add(h),
            M.setFromSpherical(a),
            M.applyQuaternion(gt),
            St.copy(n.target).add(M),
            n.object.lookAt(n.target),
            n.enableDamping === !0
              ? ((l.theta *= 1 - n.dampingFactor),
                (l.phi *= 1 - n.dampingFactor),
                h.multiplyScalar(1 - n.dampingFactor))
              : (l.set(0, 0, 0), h.set(0, 0, 0)),
            (c = 1),
            u ||
            at.distanceToSquared(n.object.position) > o ||
            8 * (1 - A.dot(n.object.quaternion)) > o
              ? (n.dispatchEvent(vl),
                at.copy(n.object.position),
                A.copy(n.object.quaternion),
                (u = !1),
                !0)
              : !1
          );
        };
      })()),
      (this.dispose = function () {
        n.domElement.removeEventListener("contextmenu", O),
          n.domElement.removeEventListener("pointerdown", nt),
          n.domElement.removeEventListener("pointercancel", Ct),
          n.domElement.removeEventListener("wheel", Xt),
          n.domElement.removeEventListener("pointermove", pt),
          n.domElement.removeEventListener("pointerup", lt),
          n._domElementKeyEvents !== null &&
            n._domElementKeyEvents.removeEventListener("keydown", Ut);
      });
    const n = this,
      i = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6,
      };
    let r = i.NONE;
    const o = 1e-6,
      a = new yl(),
      l = new yl();
    let c = 1;
    const h = new E();
    let u = !1;
    const d = new Z(),
      p = new Z(),
      g = new Z(),
      m = new Z(),
      f = new Z(),
      _ = new Z(),
      w = new Z(),
      C = new Z(),
      T = new Z(),
      y = [],
      L = {};
    function I() {
      return ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
    }
    function v() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function R(M) {
      l.theta -= M;
    }
    function B(M) {
      l.phi -= M;
    }
    const F = (function () {
        const M = new E();
        return function (gt, at) {
          M.setFromMatrixColumn(at, 0), M.multiplyScalar(-gt), h.add(M);
        };
      })(),
      ut = (function () {
        const M = new E();
        return function (gt, at) {
          n.screenSpacePanning === !0
            ? M.setFromMatrixColumn(at, 1)
            : (M.setFromMatrixColumn(at, 0), M.crossVectors(n.object.up, M)),
            M.multiplyScalar(gt),
            h.add(M);
        };
      })(),
      K = (function () {
        const M = new E();
        return function (gt, at) {
          const A = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const st = n.object.position;
            M.copy(st).sub(n.target);
            let it = M.length();
            (it *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
              F((2 * gt * it) / A.clientHeight, n.object.matrix),
              ut((2 * at * it) / A.clientHeight, n.object.matrix);
          } else
            n.object.isOrthographicCamera
              ? (F(
                  (gt * (n.object.right - n.object.left)) /
                    n.object.zoom /
                    A.clientWidth,
                  n.object.matrix
                ),
                ut(
                  (at * (n.object.top - n.object.bottom)) /
                    n.object.zoom /
                    A.clientHeight,
                  n.object.matrix
                ))
              : (console.warn(
                  "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                ),
                (n.enablePan = !1));
        };
      })();
    function P(M) {
      n.object.isPerspectiveCamera
        ? (c /= M)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom * M)
          )),
          n.object.updateProjectionMatrix(),
          (u = !0))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function k(M) {
      n.object.isPerspectiveCamera
        ? (c *= M)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom / M)
          )),
          n.object.updateProjectionMatrix(),
          (u = !0))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function z(M) {
      d.set(M.clientX, M.clientY);
    }
    function G(M) {
      w.set(M.clientX, M.clientY);
    }
    function X(M) {
      m.set(M.clientX, M.clientY);
    }
    function H(M) {
      p.set(M.clientX, M.clientY),
        g.subVectors(p, d).multiplyScalar(n.rotateSpeed);
      const tt = n.domElement;
      R((2 * Math.PI * g.x) / tt.clientHeight),
        B((2 * Math.PI * g.y) / tt.clientHeight),
        d.copy(p),
        n.update();
    }
    function W(M) {
      C.set(M.clientX, M.clientY),
        T.subVectors(C, w),
        T.y > 0 ? P(v()) : T.y < 0 && k(v()),
        w.copy(C),
        n.update();
    }
    function Q(M) {
      f.set(M.clientX, M.clientY),
        _.subVectors(f, m).multiplyScalar(n.panSpeed),
        K(_.x, _.y),
        m.copy(f),
        n.update();
    }
    function J(M) {
      M.deltaY < 0 ? k(v()) : M.deltaY > 0 && P(v()), n.update();
    }
    function et(M) {
      let tt = !1;
      switch (M.code) {
        case n.keys.UP:
          K(0, n.keyPanSpeed), (tt = !0);
          break;
        case n.keys.BOTTOM:
          K(0, -n.keyPanSpeed), (tt = !0);
          break;
        case n.keys.LEFT:
          K(n.keyPanSpeed, 0), (tt = !0);
          break;
        case n.keys.RIGHT:
          K(-n.keyPanSpeed, 0), (tt = !0);
          break;
      }
      tt && (M.preventDefault(), n.update());
    }
    function mt() {
      if (y.length === 1) d.set(y[0].pageX, y[0].pageY);
      else {
        const M = 0.5 * (y[0].pageX + y[1].pageX),
          tt = 0.5 * (y[0].pageY + y[1].pageY);
        d.set(M, tt);
      }
    }
    function yt() {
      if (y.length === 1) m.set(y[0].pageX, y[0].pageY);
      else {
        const M = 0.5 * (y[0].pageX + y[1].pageX),
          tt = 0.5 * (y[0].pageY + y[1].pageY);
        m.set(M, tt);
      }
    }
    function V() {
      const M = y[0].pageX - y[1].pageX,
        tt = y[0].pageY - y[1].pageY,
        gt = Math.sqrt(M * M + tt * tt);
      w.set(0, gt);
    }
    function zt() {
      n.enableZoom && V(), n.enablePan && yt();
    }
    function Et() {
      n.enableZoom && V(), n.enableRotate && mt();
    }
    function Lt(M) {
      if (y.length == 1) p.set(M.pageX, M.pageY);
      else {
        const gt = Mt(M),
          at = 0.5 * (M.pageX + gt.x),
          A = 0.5 * (M.pageY + gt.y);
        p.set(at, A);
      }
      g.subVectors(p, d).multiplyScalar(n.rotateSpeed);
      const tt = n.domElement;
      R((2 * Math.PI * g.x) / tt.clientHeight),
        B((2 * Math.PI * g.y) / tt.clientHeight),
        d.copy(p);
    }
    function rt(M) {
      if (y.length === 1) f.set(M.pageX, M.pageY);
      else {
        const tt = Mt(M),
          gt = 0.5 * (M.pageX + tt.x),
          at = 0.5 * (M.pageY + tt.y);
        f.set(gt, at);
      }
      _.subVectors(f, m).multiplyScalar(n.panSpeed), K(_.x, _.y), m.copy(f);
    }
    function Dt(M) {
      const tt = Mt(M),
        gt = M.pageX - tt.x,
        at = M.pageY - tt.y,
        A = Math.sqrt(gt * gt + at * at);
      C.set(0, A),
        T.set(0, Math.pow(C.y / w.y, n.zoomSpeed)),
        P(T.y),
        w.copy(C);
    }
    function j(M) {
      n.enableZoom && Dt(M), n.enablePan && rt(M);
    }
    function q(M) {
      n.enableZoom && Dt(M), n.enableRotate && Lt(M);
    }
    function nt(M) {
      n.enabled !== !1 &&
        (y.length === 0 &&
          (n.domElement.setPointerCapture(M.pointerId),
          n.domElement.addEventListener("pointermove", pt),
          n.domElement.addEventListener("pointerup", lt)),
        $(M),
        M.pointerType === "touch" ? S(M) : wt(M));
    }
    function pt(M) {
      n.enabled !== !1 && (M.pointerType === "touch" ? x(M) : vt(M));
    }
    function lt(M) {
      ct(M),
        y.length === 0 &&
          (n.domElement.releasePointerCapture(M.pointerId),
          n.domElement.removeEventListener("pointermove", pt),
          n.domElement.removeEventListener("pointerup", lt)),
        n.dispatchEvent(Ml),
        (r = i.NONE);
    }
    function Ct(M) {
      ct(M);
    }
    function wt(M) {
      let tt;
      switch (M.button) {
        case 0:
          tt = n.mouseButtons.LEFT;
          break;
        case 1:
          tt = n.mouseButtons.MIDDLE;
          break;
        case 2:
          tt = n.mouseButtons.RIGHT;
          break;
        default:
          tt = -1;
      }
      switch (tt) {
        case zn.DOLLY:
          if (n.enableZoom === !1) return;
          G(M), (r = i.DOLLY);
          break;
        case zn.ROTATE:
          if (M.ctrlKey || M.metaKey || M.shiftKey) {
            if (n.enablePan === !1) return;
            X(M), (r = i.PAN);
          } else {
            if (n.enableRotate === !1) return;
            z(M), (r = i.ROTATE);
          }
          break;
        case zn.PAN:
          if (M.ctrlKey || M.metaKey || M.shiftKey) {
            if (n.enableRotate === !1) return;
            z(M), (r = i.ROTATE);
          } else {
            if (n.enablePan === !1) return;
            X(M), (r = i.PAN);
          }
          break;
        default:
          r = i.NONE;
      }
      r !== i.NONE && n.dispatchEvent(Zs);
    }
    function vt(M) {
      if (n.enabled !== !1)
        switch (r) {
          case i.ROTATE:
            if (n.enableRotate === !1) return;
            H(M);
            break;
          case i.DOLLY:
            if (n.enableZoom === !1) return;
            W(M);
            break;
          case i.PAN:
            if (n.enablePan === !1) return;
            Q(M);
            break;
        }
    }
    function Xt(M) {
      n.enabled === !1 ||
        n.enableZoom === !1 ||
        r !== i.NONE ||
        (M.preventDefault(), n.dispatchEvent(Zs), J(M), n.dispatchEvent(Ml));
    }
    function Ut(M) {
      n.enabled === !1 || n.enablePan === !1 || et(M);
    }
    function S(M) {
      switch ((ft(M), y.length)) {
        case 1:
          switch (n.touches.ONE) {
            case On.ROTATE:
              if (n.enableRotate === !1) return;
              mt(), (r = i.TOUCH_ROTATE);
              break;
            case On.PAN:
              if (n.enablePan === !1) return;
              yt(), (r = i.TOUCH_PAN);
              break;
            default:
              r = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case On.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              zt(), (r = i.TOUCH_DOLLY_PAN);
              break;
            case On.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              Et(), (r = i.TOUCH_DOLLY_ROTATE);
              break;
            default:
              r = i.NONE;
          }
          break;
        default:
          r = i.NONE;
      }
      r !== i.NONE && n.dispatchEvent(Zs);
    }
    function x(M) {
      switch ((ft(M), r)) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          Lt(M), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1) return;
          rt(M), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          j(M), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          q(M), n.update();
          break;
        default:
          r = i.NONE;
      }
    }
    function O(M) {
      n.enabled !== !1 && M.preventDefault();
    }
    function $(M) {
      y.push(M);
    }
    function ct(M) {
      delete L[M.pointerId];
      for (let tt = 0; tt < y.length; tt++)
        if (y[tt].pointerId == M.pointerId) {
          y.splice(tt, 1);
          return;
        }
    }
    function ft(M) {
      let tt = L[M.pointerId];
      tt === void 0 && ((tt = new Z()), (L[M.pointerId] = tt)),
        tt.set(M.pageX, M.pageY);
    }
    function Mt(M) {
      const tt = M.pointerId === y[0].pointerId ? y[1] : y[0];
      return L[tt.pointerId];
    }
    n.domElement.addEventListener("contextmenu", O),
      n.domElement.addEventListener("pointerdown", nt),
      n.domElement.addEventListener("pointercancel", Ct),
      n.domElement.addEventListener("wheel", Xt, { passive: !1 }),
      this.update();
  }
}
const yn = new wo(),
  Rn = new _e(75, window.innerWidth / window.innerHeight, 0.1, 1e3),
  or = new qt({ canvas: document.querySelector("#bg") });
or.setPixelRatio(window.devicePixelRatio);
or.setSize(window.innerWidth, window.innerHeight);
Rn.position.setZ(30);
or.render(yn, Rn);
const r_ = new Io(10, 3, 16, 100),
  s_ = new nr({ color: 39168 }),
  kr = new ce(r_, s_);
yn.add(kr);
const vc = new pc(16777215);
vc.position.set(5, 5, 5);
const o_ = new gc(16777215);
yn.add(vc, o_);
const a_ = new i_(Rn, or.domElement);
function l_() {
  const s = new os(0.25, 24, 24),
    t = new vi({ color: 16777215 }),
    e = new ce(s, t),
    [n, i, r] = Array(3)
      .fill()
      .map(() => Gh.randFloatSpread(100));
  e.position.set(n, i, r), yn.add(e);
}
Array(200).fill().forEach(l_);
const c_ = new rr().load("./space.jpg");
yn.background = c_;
const h_ = new rr().load("./my-pic.png"),
  co = new ce(new Mi(3, 3, 3), new vi({ map: h_ }));
yn.add(co);
const u_ = new rr().load("./moon.jpg"),
  d_ = new rr().load("./normal.jpg"),
  hi = new ce(new os(3, 32, 32), new nr({ map: u_, normalMap: d_ }));
yn.add(hi);
hi.position.z = 30;
hi.position.setX(-10);
function f_() {
  const s = document.body.getBoundingClientRect().top;
  (hi.rotation.x += 0.05),
    (hi.rotation.y += 0.075),
    (hi.rotation.z += 0.05),
    (co.rotation.y += 0.01),
    (co.rotation.z += 0.01),
    (Rn.position.z = s * -0.01),
    (Rn.position.x = s * -2e-4),
    (Rn.position.y = s * 2e-4);
}
document.body.onscroll = f_;
function Mc() {
  requestAnimationFrame(Mc),
    (kr.rotation.x += 0.01),
    (kr.rotation.y += 0.005),
    (kr.rotation.z += 0.01),
    a_.update(),
    or.render(yn, Rn);
}
Mc();
