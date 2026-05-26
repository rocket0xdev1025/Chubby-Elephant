(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const r of o.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && s(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function s(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function ls(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ee = {},
  At = [],
  Ve = () => {},
  di = () => !1,
  Tn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  cs = (e) => e.startsWith("onUpdate:"),
  fe = Object.assign,
  as = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Mo = Object.prototype.hasOwnProperty,
  Y = (e, t) => Mo.call(e, t),
  L = Array.isArray,
  Ot = (e) => en(e) === "[object Map]",
  hi = (e) => en(e) === "[object Set]",
  Os = (e) => en(e) === "[object Date]",
  U = (e) => typeof e == "function",
  ce = (e) => typeof e == "string",
  qe = (e) => typeof e == "symbol",
  Q = (e) => e !== null && typeof e == "object",
  pi = (e) => (Q(e) || U(e)) && U(e.then) && U(e.catch),
  gi = Object.prototype.toString,
  en = (e) => gi.call(e),
  Io = (e) => en(e).slice(8, -1),
  mi = (e) => en(e) === "[object Object]",
  us = (e) =>
    ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  zt = ls(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  En = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Po = /-\w/g,
  De = En((e) => e.replace(Po, (t) => t.slice(1).toUpperCase())),
  Ao = /\B([A-Z])/g,
  pt = En((e) => e.replace(Ao, "-$1").toLowerCase()),
  _i = En((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Dn = En((e) => (e ? `on${_i(e)}` : "")),
  We = (e, t) => !Object.is(e, t),
  hn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  yi = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    });
  },
  fs = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let ks;
const Mn = () =>
  ks ||
  (ks =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Me(e) {
  if (L(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        i = ce(s) ? $o(s) : Me(s);
      if (i) for (const o in i) t[o] = i[o];
    }
    return t;
  } else if (ce(e) || Q(e)) return e;
}
const Oo = /;(?![^(]*\))/g,
  ko = /:([^]+)/,
  Fo = /\/\*[^]*?\*\//g;
function $o(e) {
  const t = {};
  return (
    e
      .replace(Fo, "")
      .split(Oo)
      .forEach((n) => {
        if (n) {
          const s = n.split(ko);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function Ct(e) {
  let t = "";
  if (ce(e)) t = e;
  else if (L(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ct(e[n]);
      s && (t += s + " ");
    }
  else if (Q(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Do =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Ro = ls(Do);
function vi(e) {
  return !!e || e === "";
}
function Lo(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++) n = ds(e[s], t[s]);
  return n;
}
function ds(e, t) {
  if (e === t) return !0;
  let n = Os(e),
    s = Os(t);
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1;
  if (((n = qe(e)), (s = qe(t)), n || s)) return e === t;
  if (((n = L(e)), (s = L(t)), n || s)) return n && s ? Lo(e, t) : !1;
  if (((n = Q(e)), (s = Q(t)), n || s)) {
    if (!n || !s) return !1;
    const i = Object.keys(e).length,
      o = Object.keys(t).length;
    if (i !== o) return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r),
        c = t.hasOwnProperty(r);
      if ((l && !c) || (!l && c) || !ds(e[r], t[r])) return !1;
    }
  }
  return String(e) === String(t);
}
const bi = (e) => !!(e && e.__v_isRef === !0),
  ye = (e) =>
    ce(e)
      ? e
      : e == null
      ? ""
      : L(e) || (Q(e) && (e.toString === gi || !U(e.toString)))
      ? bi(e)
        ? ye(e.value)
        : JSON.stringify(e, wi, 2)
      : String(e),
  wi = (e, t) =>
    bi(t)
      ? wi(e, t.value)
      : Ot(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, i], o) => ((n[Rn(s, o) + " =>"] = i), n),
            {}
          ),
        }
      : hi(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => Rn(n)) }
      : qe(t)
      ? Rn(t)
      : Q(t) && !L(t) && !mi(t)
      ? String(t)
      : t,
  Rn = (e, t = "") => {
    var n;
    return qe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
let Te;
class Uo {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.__v_skip = !0),
      (this.parent = Te),
      !t && Te && (this.index = (Te.scopes || (Te.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Te;
      try {
        return (Te = this), t();
      } finally {
        Te = n;
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = Te), (Te = this));
  }
  off() {
    this._on > 0 &&
      --this._on === 0 &&
      ((Te = this.prevScope), (this.prevScope = void 0));
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function jo() {
  return Te;
}
let ne;
const Ln = new WeakSet();
class xi {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Te && Te.active && Te.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Ln.has(this) && (Ln.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Ci(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), Fs(this), Ti(this);
    const t = ne,
      n = Re;
    (ne = this), (Re = !0);
    try {
      return this.fn();
    } finally {
      Ei(this), (ne = t), (Re = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) gs(t);
      (this.deps = this.depsTail = void 0),
        Fs(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? Ln.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    Gn(this) && this.run();
  }
  get dirty() {
    return Gn(this);
  }
}
let Si = 0,
  Kt,
  Bt;
function Ci(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = Bt), (Bt = e);
    return;
  }
  (e.next = Kt), (Kt = e);
}
function hs() {
  Si++;
}
function ps() {
  if (--Si > 0) return;
  if (Bt) {
    let t = Bt;
    for (Bt = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; Kt; ) {
    let t = Kt;
    for (Kt = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ti(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function Ei(e) {
  let t,
    n = e.depsTail,
    s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), gs(s), No(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = i);
  }
  (e.deps = t), (e.depsTail = n);
}
function Gn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Mi(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Mi(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === Gt) ||
    ((e.globalVersion = Gt),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !Gn(e)))
  )
    return;
  e.flags |= 2;
  const t = e.dep,
    n = ne,
    s = Re;
  (ne = e), (Re = !0);
  try {
    Ti(e);
    const i = e.fn(e._value);
    (t.version === 0 || We(i, e._value)) &&
      ((e.flags |= 128), (e._value = i), t.version++);
  } catch (i) {
    throw (t.version++, i);
  } finally {
    (ne = n), (Re = s), Ei(e), (e.flags &= -3);
  }
}
function gs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (
    (s && ((s.nextSub = i), (e.prevSub = void 0)),
    i && ((i.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) gs(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function No(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let Re = !0;
const Ii = [];
function st() {
  Ii.push(Re), (Re = !1);
}
function it() {
  const e = Ii.pop();
  Re = e === void 0 ? !0 : e;
}
function Fs(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = ne;
    ne = void 0;
    try {
      t();
    } finally {
      ne = n;
    }
  }
}
let Gt = 0;
class Ho {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class ms {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0);
  }
  track(t) {
    if (!ne || !Re || ne === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ne)
      (n = this.activeLink = new Ho(ne, this)),
        ne.deps
          ? ((n.prevDep = ne.depsTail),
            (ne.depsTail.nextDep = n),
            (ne.depsTail = n))
          : (ne.deps = ne.depsTail = n),
        Pi(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep;
      (s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = ne.depsTail),
        (n.nextDep = void 0),
        (ne.depsTail.nextDep = n),
        (ne.depsTail = n),
        ne.deps === n && (ne.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Gt++, this.notify(t);
  }
  notify(t) {
    hs();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ps();
    }
  }
}
function Pi(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep) Pi(s);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const Xn = new WeakMap(),
  bt = Symbol(""),
  Zn = Symbol(""),
  Xt = Symbol("");
function de(e, t, n) {
  if (Re && ne) {
    let s = Xn.get(e);
    s || Xn.set(e, (s = new Map()));
    let i = s.get(n);
    i || (s.set(n, (i = new ms())), (i.map = s), (i.key = n)), i.track();
  }
}
function tt(e, t, n, s, i, o) {
  const r = Xn.get(e);
  if (!r) {
    Gt++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if ((hs(), t === "clear")) r.forEach(l);
  else {
    const c = L(e),
      d = c && us(n);
    if (c && n === "length") {
      const f = Number(s);
      r.forEach((p, m) => {
        (m === "length" || m === Xt || (!qe(m) && m >= f)) && l(p);
      });
    } else
      switch (
        ((n !== void 0 || r.has(void 0)) && l(r.get(n)), d && l(r.get(Xt)), t)
      ) {
        case "add":
          c ? d && l(r.get("length")) : (l(r.get(bt)), Ot(e) && l(r.get(Zn)));
          break;
        case "delete":
          c || (l(r.get(bt)), Ot(e) && l(r.get(Zn)));
          break;
        case "set":
          Ot(e) && l(r.get(bt));
          break;
      }
  }
  ps();
}
function Mt(e) {
  const t = q(e);
  return t === e ? t : (de(t, "iterate", Xt), ke(e) ? t : t.map(Le));
}
function In(e) {
  return de((e = q(e)), "iterate", Xt), e;
}
function Ke(e, t) {
  return ot(e) ? Dt(wt(e) ? Le(t) : t) : Le(t);
}
const zo = {
  __proto__: null,
  [Symbol.iterator]() {
    return Un(this, Symbol.iterator, (e) => Ke(this, e));
  },
  concat(...e) {
    return Mt(this).concat(...e.map((t) => (L(t) ? Mt(t) : t)));
  },
  entries() {
    return Un(this, "entries", (e) => ((e[1] = Ke(this, e[1])), e));
  },
  every(e, t) {
    return Je(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Je(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Ke(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Je(this, "find", e, t, (n) => Ke(this, n), arguments);
  },
  findIndex(e, t) {
    return Je(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Je(this, "findLast", e, t, (n) => Ke(this, n), arguments);
  },
  findLastIndex(e, t) {
    return Je(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return Je(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return jn(this, "includes", e);
  },
  indexOf(...e) {
    return jn(this, "indexOf", e);
  },
  join(e) {
    return Mt(this).join(e);
  },
  lastIndexOf(...e) {
    return jn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Je(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ut(this, "pop");
  },
  push(...e) {
    return Ut(this, "push", e);
  },
  reduce(e, ...t) {
    return $s(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return $s(this, "reduceRight", e, t);
  },
  shift() {
    return Ut(this, "shift");
  },
  some(e, t) {
    return Je(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ut(this, "splice", e);
  },
  toReversed() {
    return Mt(this).toReversed();
  },
  toSorted(e) {
    return Mt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Mt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ut(this, "unshift", e);
  },
  values() {
    return Un(this, "values", (e) => Ke(this, e));
  },
};
function Un(e, t, n) {
  const s = In(e),
    i = s[t]();
  return (
    s !== e &&
      !ke(e) &&
      ((i._next = i.next),
      (i.next = () => {
        const o = i._next();
        return o.done || (o.value = n(o.value)), o;
      })),
    i
  );
}
const Ko = Array.prototype;
function Je(e, t, n, s, i, o) {
  const r = In(e),
    l = r !== e && !ke(e),
    c = r[t];
  if (c !== Ko[t]) {
    const p = c.apply(e, o);
    return l ? Le(p) : p;
  }
  let d = n;
  r !== e &&
    (l
      ? (d = function (p, m) {
          return n.call(this, Ke(e, p), m, e);
        })
      : n.length > 2 &&
        (d = function (p, m) {
          return n.call(this, p, m, e);
        }));
  const f = c.call(r, d, s);
  return l && i ? i(f) : f;
}
function $s(e, t, n, s) {
  const i = In(e),
    o = i !== e && !ke(e);
  let r = n,
    l = !1;
  i !== e &&
    (o
      ? ((l = s.length === 0),
        (r = function (d, f, p) {
          return (
            l && ((l = !1), (d = Ke(e, d))), n.call(this, d, Ke(e, f), p, e)
          );
        }))
      : n.length > 3 &&
        (r = function (d, f, p) {
          return n.call(this, d, f, p, e);
        }));
  const c = i[t](r, ...s);
  return l ? Ke(e, c) : c;
}
function jn(e, t, n) {
  const s = q(e);
  de(s, "iterate", Xt);
  const i = s[t](...n);
  return (i === -1 || i === !1) && vs(n[0])
    ? ((n[0] = q(n[0])), s[t](...n))
    : i;
}
function Ut(e, t, n = []) {
  st(), hs();
  const s = q(e)[t].apply(e, n);
  return ps(), it(), s;
}
const Bo = ls("__proto__,__v_isRef,__isVue"),
  Ai = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(qe)
  );
function Wo(e) {
  qe(e) || (e = String(e));
  const t = q(this);
  return de(t, "has", e), t.hasOwnProperty(e);
}
class Oi {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly,
      o = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw")
      return s === (i ? (o ? tr : Di) : o ? $i : Fi).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const r = L(t);
    if (!i) {
      let c;
      if (r && (c = zo[n])) return c;
      if (n === "hasOwnProperty") return Wo;
    }
    const l = Reflect.get(t, n, he(t) ? t : s);
    if ((qe(n) ? Ai.has(n) : Bo(n)) || (i || de(t, "get", n), o)) return l;
    if (he(l)) {
      const c = r && us(n) ? l : l.value;
      return i && Q(c) ? Qn(c) : c;
    }
    return Q(l) ? (i ? Qn(l) : tn(l)) : l;
  }
}
class ki extends Oi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let o = t[n];
    const r = L(t) && us(n);
    if (!this._isShallow) {
      const d = ot(o);
      if ((!ke(s) && !ot(s) && ((o = q(o)), (s = q(s))), !r && he(o) && !he(s)))
        return d || (o.value = s), !0;
    }
    const l = r ? Number(n) < t.length : Y(t, n),
      c = Reflect.set(t, n, s, he(t) ? t : i);
    return (
      t === q(i) && (l ? We(s, o) && tt(t, "set", n, s) : tt(t, "add", n, s)), c
    );
  }
  deleteProperty(t, n) {
    const s = Y(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && tt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!qe(n) || !Ai.has(n)) && de(t, "has", n), s;
  }
  ownKeys(t) {
    return de(t, "iterate", L(t) ? "length" : bt), Reflect.ownKeys(t);
  }
}
class Vo extends Oi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const qo = new ki(),
  Yo = new Vo(),
  Go = new ki(!0);
const Jn = (e) => e,
  cn = (e) => Reflect.getPrototypeOf(e);
function Xo(e, t, n) {
  return function (...s) {
    const i = this.__v_raw,
      o = q(i),
      r = Ot(o),
      l = e === "entries" || (e === Symbol.iterator && r),
      c = e === "keys" && r,
      d = i[e](...s),
      f = n ? Jn : t ? Dt : Le;
    return (
      !t && de(o, "iterate", c ? Zn : bt),
      fe(Object.create(d), {
        next() {
          const { value: p, done: m } = d.next();
          return m
            ? { value: p, done: m }
            : { value: l ? [f(p[0]), f(p[1])] : f(p), done: m };
        },
      })
    );
  };
}
function an(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Zo(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw,
        r = q(o),
        l = q(i);
      e || (We(i, l) && de(r, "get", i), de(r, "get", l));
      const { has: c } = cn(r),
        d = t ? Jn : e ? Dt : Le;
      if (c.call(r, i)) return d(o.get(i));
      if (c.call(r, l)) return d(o.get(l));
      o !== r && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && de(q(i), "iterate", bt), i.size;
    },
    has(i) {
      const o = this.__v_raw,
        r = q(o),
        l = q(i);
      return (
        e || (We(i, l) && de(r, "has", i), de(r, "has", l)),
        i === l ? o.has(i) : o.has(i) || o.has(l)
      );
    },
    forEach(i, o) {
      const r = this,
        l = r.__v_raw,
        c = q(l),
        d = t ? Jn : e ? Dt : Le;
      return (
        !e && de(c, "iterate", bt),
        l.forEach((f, p) => i.call(o, d(f), d(p), r))
      );
    },
  };
  return (
    fe(
      n,
      e
        ? {
            add: an("add"),
            set: an("set"),
            delete: an("delete"),
            clear: an("clear"),
          }
        : {
            add(i) {
              const o = q(this),
                r = cn(o),
                l = q(i),
                c = !t && !ke(i) && !ot(i) ? l : i;
              return (
                r.has.call(o, c) ||
                  (We(i, c) && r.has.call(o, i)) ||
                  (We(l, c) && r.has.call(o, l)) ||
                  (o.add(c), tt(o, "add", c, c)),
                this
              );
            },
            set(i, o) {
              !t && !ke(o) && !ot(o) && (o = q(o));
              const r = q(this),
                { has: l, get: c } = cn(r);
              let d = l.call(r, i);
              d || ((i = q(i)), (d = l.call(r, i)));
              const f = c.call(r, i);
              return (
                r.set(i, o),
                d ? We(o, f) && tt(r, "set", i, o) : tt(r, "add", i, o),
                this
              );
            },
            delete(i) {
              const o = q(this),
                { has: r, get: l } = cn(o);
              let c = r.call(o, i);
              c || ((i = q(i)), (c = r.call(o, i))), l && l.call(o, i);
              const d = o.delete(i);
              return c && tt(o, "delete", i, void 0), d;
            },
            clear() {
              const i = q(this),
                o = i.size !== 0,
                r = i.clear();
              return o && tt(i, "clear", void 0, void 0), r;
            },
          }
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      n[i] = Xo(i, e, t);
    }),
    n
  );
}
function _s(e, t) {
  const n = Zo(e, t);
  return (s, i, o) =>
    i === "__v_isReactive"
      ? !e
      : i === "__v_isReadonly"
      ? e
      : i === "__v_raw"
      ? s
      : Reflect.get(Y(n, i) && i in s ? n : s, i, o);
}
const Jo = { get: _s(!1, !1) },
  Qo = { get: _s(!1, !0) },
  er = { get: _s(!0, !1) };
const Fi = new WeakMap(),
  $i = new WeakMap(),
  Di = new WeakMap(),
  tr = new WeakMap();
function nr(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function sr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : nr(Io(e));
}
function tn(e) {
  return ot(e) ? e : ys(e, !1, qo, Jo, Fi);
}
function ir(e) {
  return ys(e, !1, Go, Qo, $i);
}
function Qn(e) {
  return ys(e, !0, Yo, er, Di);
}
function ys(e, t, n, s, i) {
  if (!Q(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = sr(e);
  if (o === 0) return e;
  const r = i.get(e);
  if (r) return r;
  const l = new Proxy(e, o === 2 ? s : n);
  return i.set(e, l), l;
}
function wt(e) {
  return ot(e) ? wt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ot(e) {
  return !!(e && e.__v_isReadonly);
}
function ke(e) {
  return !!(e && e.__v_isShallow);
}
function vs(e) {
  return e ? !!e.__v_raw : !1;
}
function q(e) {
  const t = e && e.__v_raw;
  return t ? q(t) : e;
}
function or(e) {
  return (
    !Y(e, "__v_skip") && Object.isExtensible(e) && yi(e, "__v_skip", !0), e
  );
}
const Le = (e) => (Q(e) ? tn(e) : e),
  Dt = (e) => (Q(e) ? Qn(e) : e);
function he(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function V(e) {
  return rr(e, !1);
}
function rr(e, t) {
  return he(e) ? e : new lr(e, t);
}
class lr {
  constructor(t, n) {
    (this.dep = new ms()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : q(t)),
      (this._value = n ? t : Le(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || ke(t) || ot(t);
    (t = s ? t : q(t)),
      We(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : Le(t)),
        this.dep.trigger());
  }
}
function Ee(e) {
  return he(e) ? e.value : e;
}
const cr = {
  get: (e, t, n) => (t === "__v_raw" ? e : Ee(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const i = e[t];
    return he(i) && !he(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function Ri(e) {
  return wt(e) ? e : new Proxy(e, cr);
}
class ar {
  constructor(t, n, s) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new ms(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Gt - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && ne !== this))
      return Ci(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Mi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function ur(e, t, n = !1) {
  let s, i;
  return U(e) ? (s = e) : ((s = e.get), (i = e.set)), new ar(s, i, n);
}
const un = {},
  _n = new WeakMap();
let vt;
function fr(e, t = !1, n = vt) {
  if (n) {
    let s = _n.get(n);
    s || _n.set(n, (s = [])), s.push(e);
  }
}
function dr(e, t, n = ee) {
  const {
      immediate: s,
      deep: i,
      once: o,
      scheduler: r,
      augmentJob: l,
      call: c,
    } = n,
    d = (E) => (i ? E : ke(E) || i === !1 || i === 0 ? nt(E, 1) : nt(E));
  let f,
    p,
    m,
    x,
    O = !1,
    P = !1;
  if (
    (he(e)
      ? ((p = () => e.value), (O = ke(e)))
      : wt(e)
      ? ((p = () => d(e)), (O = !0))
      : L(e)
      ? ((P = !0),
        (O = e.some((E) => wt(E) || ke(E))),
        (p = () =>
          e.map((E) => {
            if (he(E)) return E.value;
            if (wt(E)) return d(E);
            if (U(E)) return c ? c(E, 2) : E();
          })))
      : U(e)
      ? t
        ? (p = c ? () => c(e, 2) : e)
        : (p = () => {
            if (m) {
              st();
              try {
                m();
              } finally {
                it();
              }
            }
            const E = vt;
            vt = f;
            try {
              return c ? c(e, 3, [x]) : e(x);
            } finally {
              vt = E;
            }
          })
      : (p = Ve),
    t && i)
  ) {
    const E = p,
      H = i === !0 ? 1 / 0 : i;
    p = () => nt(E(), H);
  }
  const B = jo(),
    z = () => {
      f.stop(), B && B.active && as(B.effects, f);
    };
  if (o && t) {
    const E = t;
    t = (...H) => {
      E(...H), z();
    };
  }
  let j = P ? new Array(e.length).fill(un) : un;
  const D = (E) => {
    if (!(!(f.flags & 1) || (!f.dirty && !E)))
      if (t) {
        const H = f.run();
        if (i || O || (P ? H.some((ue, be) => We(ue, j[be])) : We(H, j))) {
          m && m();
          const ue = vt;
          vt = f;
          try {
            const be = [H, j === un ? void 0 : P && j[0] === un ? [] : j, x];
            (j = H), c ? c(t, 3, be) : t(...be);
          } finally {
            vt = ue;
          }
        }
      } else f.run();
  };
  return (
    l && l(D),
    (f = new xi(p)),
    (f.scheduler = r ? () => r(D, !1) : D),
    (x = (E) => fr(E, !1, f)),
    (m = f.onStop =
      () => {
        const E = _n.get(f);
        if (E) {
          if (c) c(E, 4);
          else for (const H of E) H();
          _n.delete(f);
        }
      }),
    t ? (s ? D(!0) : (j = f.run())) : r ? r(D.bind(null, !0), !0) : f.run(),
    (z.pause = f.pause.bind(f)),
    (z.resume = f.resume.bind(f)),
    (z.stop = z),
    z
  );
}
function nt(e, t = 1 / 0, n) {
  if (
    t <= 0 ||
    !Q(e) ||
    e.__v_skip ||
    ((n = n || new Map()), (n.get(e) || 0) >= t)
  )
    return e;
  if ((n.set(e, t), t--, he(e))) nt(e.value, t, n);
  else if (L(e)) for (let s = 0; s < e.length; s++) nt(e[s], t, n);
  else if (hi(e) || Ot(e))
    e.forEach((s) => {
      nt(s, t, n);
    });
  else if (mi(e)) {
    for (const s in e) nt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && nt(e[s], t, n);
  }
  return e;
}
function nn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Pn(i, t, n);
  }
}
function Ye(e, t, n, s) {
  if (U(e)) {
    const i = nn(e, t, n, s);
    return (
      i &&
        pi(i) &&
        i.catch((o) => {
          Pn(o, t, n);
        }),
      i
    );
  }
  if (L(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++) i.push(Ye(e[o], t, n, s));
    return i;
  }
}
function Pn(e, t, n, s = !0) {
  const i = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: r } =
      (t && t.appContext.config) || ee;
  if (t) {
    let l = t.parent;
    const c = t.proxy,
      d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let p = 0; p < f.length; p++) if (f[p](e, c, d) === !1) return;
      }
      l = l.parent;
    }
    if (o) {
      st(), nn(o, null, 10, [e, c, d]), it();
      return;
    }
  }
  hr(e, n, i, s, r);
}
function hr(e, t, n, s = !0, i = !1) {
  if (i) throw e;
  console.error(e);
}
const ge = [];
let ze = -1;
const kt = [];
let ft = null,
  It = 0;
const Li = Promise.resolve();
let yn = null;
function pr(e) {
  const t = yn || Li;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function gr(e) {
  let t = ze + 1,
    n = ge.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      i = ge[s],
      o = Zt(i);
    o < e || (o === e && i.flags & 2) ? (t = s + 1) : (n = s);
  }
  return t;
}
function bs(e) {
  if (!(e.flags & 1)) {
    const t = Zt(e),
      n = ge[ge.length - 1];
    !n || (!(e.flags & 2) && t >= Zt(n)) ? ge.push(e) : ge.splice(gr(t), 0, e),
      (e.flags |= 1),
      Ui();
  }
}
function Ui() {
  yn || (yn = Li.then(Ni));
}
function mr(e) {
  L(e)
    ? kt.push(...e)
    : ft && e.id === -1
    ? ft.splice(It + 1, 0, e)
    : e.flags & 1 || (kt.push(e), (e.flags |= 1)),
    Ui();
}
function Ds(e, t, n = ze + 1) {
  for (; n < ge.length; n++) {
    const s = ge[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue;
      ge.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ji(e) {
  if (kt.length) {
    const t = [...new Set(kt)].sort((n, s) => Zt(n) - Zt(s));
    if (((kt.length = 0), ft)) {
      ft.push(...t);
      return;
    }
    for (ft = t, It = 0; It < ft.length; It++) {
      const n = ft[It];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (ft = null), (It = 0);
  }
}
const Zt = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function Ni(e) {
  try {
    for (ze = 0; ze < ge.length; ze++) {
      const t = ge[ze];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        nn(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ze < ge.length; ze++) {
      const t = ge[ze];
      t && (t.flags &= -2);
    }
    (ze = -1),
      (ge.length = 0),
      ji(),
      (yn = null),
      (ge.length || kt.length) && Ni();
  }
}
let Oe = null,
  Hi = null;
function vn(e) {
  const t = Oe;
  return (Oe = e), (Hi = (e && e.type.__scopeId) || null), t;
}
function _r(e, t = Oe, n) {
  if (!t || e._n) return e;
  const s = (...i) => {
    s._d && Vs(-1);
    const o = vn(t);
    let r;
    try {
      r = e(...i);
    } finally {
      vn(o), s._d && Vs(1);
    }
    return r;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function fn(e, t) {
  if (Oe === null) return e;
  const n = Fn(Oe),
    s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, r, l, c = ee] = t[i];
    o &&
      (U(o) && (o = { mounted: o, updated: o }),
      o.deep && nt(r),
      s.push({
        dir: o,
        instance: n,
        value: r,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      }));
  }
  return e;
}
function _t(e, t, n, s) {
  const i = e.dirs,
    o = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const l = i[r];
    o && (l.oldValue = o[r].value);
    let c = l.dir[s];
    c && (st(), Ye(c, n, 8, [e.el, l, e, t]), it());
  }
}
function yr(e, t) {
  if (ve) {
    let n = ve.provides;
    const s = ve.parent && ve.parent.provides;
    s === n && (n = ve.provides = Object.create(s)), (n[e] = t);
  }
}
function pn(e, t, n = !1) {
  const s = ml();
  if (s || $t) {
    let i = $t
      ? $t._context.provides
      : s
      ? s.parent == null || s.ce
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : void 0;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && U(t) ? t.call(s && s.proxy) : t;
  }
}
const vr = Symbol.for("v-scx"),
  br = () => pn(vr);
function Ft(e, t, n) {
  return zi(e, t, n);
}
function zi(e, t, n = ee) {
  const { immediate: s, deep: i, flush: o, once: r } = n,
    l = fe({}, n),
    c = (t && s) || (!t && o !== "post");
  let d;
  if (Qt) {
    if (o === "sync") {
      const x = br();
      d = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!c) {
      const x = () => {};
      return (x.stop = Ve), (x.resume = Ve), (x.pause = Ve), x;
    }
  }
  const f = ve;
  l.call = (x, O, P) => Ye(x, f, O, P);
  let p = !1;
  o === "post"
    ? (l.scheduler = (x) => {
        Ce(x, f && f.suspense);
      })
    : o !== "sync" &&
      ((p = !0),
      (l.scheduler = (x, O) => {
        O ? x() : bs(x);
      })),
    (l.augmentJob = (x) => {
      t && (x.flags |= 4),
        p && ((x.flags |= 2), f && ((x.id = f.uid), (x.i = f)));
    });
  const m = dr(e, t, l);
  return Qt && (d ? d.push(m) : c && m()), m;
}
function wr(e, t, n) {
  const s = this.proxy,
    i = ce(e) ? (e.includes(".") ? Ki(s, e) : () => s[e]) : e.bind(s, s);
  let o;
  U(t) ? (o = t) : ((o = t.handler), (n = t));
  const r = rn(this),
    l = zi(i, o.bind(s), n);
  return r(), l;
}
function Ki(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++) s = s[n[i]];
    return s;
  };
}
const xr = Symbol("_vte"),
  Sr = (e) => e.__isTeleport,
  Cr = Symbol("_leaveCb");
function ws(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), ws(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function rt(e, t) {
  return U(e) ? fe({ name: e.name }, t, { setup: e }) : e;
}
function Bi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Rs(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const bn = new WeakMap();
function Wt(e, t, n, s, i = !1) {
  if (L(e)) {
    e.forEach((P, B) => Wt(P, t && (L(t) ? t[B] : t), n, s, i));
    return;
  }
  if (Vt(s) && !i) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      Wt(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? Fn(s.component) : s.el,
    r = i ? null : o,
    { i: l, r: c } = e,
    d = t && t.r,
    f = l.refs === ee ? (l.refs = {}) : l.refs,
    p = l.setupState,
    m = q(p),
    x = p === ee ? di : (P) => (Rs(f, P) ? !1 : Y(m, P)),
    O = (P, B) => !(B && Rs(f, B));
  if (d != null && d !== c) {
    if ((Ls(t), ce(d))) (f[d] = null), x(d) && (p[d] = null);
    else if (he(d)) {
      const P = t;
      O(d, P.k) && (d.value = null), P.k && (f[P.k] = null);
    }
  }
  if (U(c)) nn(c, l, 12, [r, f]);
  else {
    const P = ce(c),
      B = he(c);
    if (P || B) {
      const z = () => {
        if (e.f) {
          const j = P ? (x(c) ? p[c] : f[c]) : O() || !e.k ? c.value : f[e.k];
          if (i) L(j) && as(j, o);
          else if (L(j)) j.includes(o) || j.push(o);
          else if (P) (f[c] = [o]), x(c) && (p[c] = f[c]);
          else {
            const D = [o];
            O(c, e.k) && (c.value = D), e.k && (f[e.k] = D);
          }
        } else
          P
            ? ((f[c] = r), x(c) && (p[c] = r))
            : B && (O(c, e.k) && (c.value = r), e.k && (f[e.k] = r));
      };
      if (r) {
        const j = () => {
          z(), bn.delete(e);
        };
        (j.id = -1), bn.set(e, j), Ce(j, n);
      } else Ls(e), z();
    }
  }
}
function Ls(e) {
  const t = bn.get(e);
  t && ((t.flags |= 8), bn.delete(e));
}
Mn().requestIdleCallback;
Mn().cancelIdleCallback;
const Vt = (e) => !!e.type.__asyncLoader,
  Wi = (e) => e.type.__isKeepAlive;
function Tr(e, t) {
  Vi(e, "a", t);
}
function Er(e, t) {
  Vi(e, "da", t);
}
function Vi(e, t, n = ve) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let i = n;
      for (; i; ) {
        if (i.isDeactivated) return;
        i = i.parent;
      }
      return e();
    });
  if ((An(t, s, n), n)) {
    let i = n.parent;
    for (; i && i.parent; )
      Wi(i.parent.vnode) && Mr(s, t, n, i), (i = i.parent);
  }
}
function Mr(e, t, n, s) {
  const i = An(t, e, s, !0);
  qi(() => {
    as(s[t], i);
  }, n);
}
function An(e, t, n = ve, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...r) => {
          st();
          const l = rn(n),
            c = Ye(t, n, e, r);
          return l(), it(), c;
        });
    return s ? i.unshift(o) : i.push(o), o;
  }
}
const lt =
    (e) =>
    (t, n = ve) => {
      (!Qt || e === "sp") && An(e, (...s) => t(...s), n);
    },
  Ir = lt("bm"),
  sn = lt("m"),
  Pr = lt("bu"),
  Ar = lt("u"),
  Tt = lt("bum"),
  qi = lt("um"),
  Or = lt("sp"),
  kr = lt("rtg"),
  Fr = lt("rtc");
function $r(e, t = ve) {
  An("ec", e, t);
}
const Dr = Symbol.for("v-ndc");
function on(e, t, n, s) {
  let i;
  const o = n,
    r = L(e);
  if (r || ce(e)) {
    const l = r && wt(e);
    let c = !1,
      d = !1;
    l && ((c = !ke(e)), (d = ot(e)), (e = In(e))), (i = new Array(e.length));
    for (let f = 0, p = e.length; f < p; f++)
      i[f] = t(c ? (d ? Dt(Le(e[f])) : Le(e[f])) : e[f], f, void 0, o);
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++) i[l] = t(l + 1, l, void 0, o);
  } else if (Q(e))
    if (e[Symbol.iterator]) i = Array.from(e, (l, c) => t(l, c, void 0, o));
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let c = 0, d = l.length; c < d; c++) {
        const f = l[c];
        i[c] = t(e[f], f, c, o);
      }
    }
  else i = [];
  return i;
}
const es = (e) => (e ? (go(e) ? Fn(e) : es(e.parent)) : null),
  qt = fe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => es(e.parent),
    $root: (e) => es(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Gi(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        bs(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = pr.bind(e.proxy)),
    $watch: (e) => wr.bind(e),
  }),
  Nn = (e, t) => e !== ee && !e.__isScriptSetup && Y(e, t),
  Rr = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: s,
        data: i,
        props: o,
        accessCache: r,
        type: l,
        appContext: c,
      } = e;
      if (t[0] !== "$") {
        const m = r[t];
        if (m !== void 0)
          switch (m) {
            case 1:
              return s[t];
            case 2:
              return i[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (Nn(s, t)) return (r[t] = 1), s[t];
          if (i !== ee && Y(i, t)) return (r[t] = 2), i[t];
          if (Y(o, t)) return (r[t] = 3), o[t];
          if (n !== ee && Y(n, t)) return (r[t] = 4), n[t];
          ts && (r[t] = 0);
        }
      }
      const d = qt[t];
      let f, p;
      if (d) return t === "$attrs" && de(e.attrs, "get", ""), d(e);
      if ((f = l.__cssModules) && (f = f[t])) return f;
      if (n !== ee && Y(n, t)) return (r[t] = 4), n[t];
      if (((p = c.config.globalProperties), Y(p, t))) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: i, ctx: o } = e;
      return Nn(i, t)
        ? ((i[t] = n), !0)
        : s !== ee && Y(s, t)
        ? ((s[t] = n), !0)
        : Y(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: i,
          props: o,
          type: r,
        },
      },
      l
    ) {
      let c;
      return !!(
        n[l] ||
        (e !== ee && l[0] !== "$" && Y(e, l)) ||
        Nn(t, l) ||
        Y(o, l) ||
        Y(s, l) ||
        Y(qt, l) ||
        Y(i.config.globalProperties, l) ||
        ((c = r.__cssModules) && c[l])
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Y(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Us(e) {
  return L(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let ts = !0;
function Lr(e) {
  const t = Gi(e),
    n = e.proxy,
    s = e.ctx;
  (ts = !1), t.beforeCreate && js(t.beforeCreate, e, "bc");
  const {
    data: i,
    computed: o,
    methods: r,
    watch: l,
    provide: c,
    inject: d,
    created: f,
    beforeMount: p,
    mounted: m,
    beforeUpdate: x,
    updated: O,
    activated: P,
    deactivated: B,
    beforeDestroy: z,
    beforeUnmount: j,
    destroyed: D,
    unmounted: E,
    render: H,
    renderTracked: ue,
    renderTriggered: be,
    errorCaptured: we,
    serverPrefetch: Fe,
    expose: Ae,
    inheritAttrs: Ge,
    components: Xe,
    directives: ct,
    filters: mt,
  } = t;
  if ((d && Ur(d, s, null), r))
    for (const G in r) {
      const W = r[G];
      U(W) && (s[G] = W.bind(n));
    }
  if (i) {
    const G = i.call(n, n);
    Q(G) && (e.data = tn(G));
  }
  if (((ts = !0), o))
    for (const G in o) {
      const W = o[G],
        h = U(W) ? W.bind(n, n) : U(W.get) ? W.get.bind(n, n) : Ve,
        M = !U(W) && U(W.set) ? W.set.bind(n) : Ve,
        A = se({ get: h, set: M });
      Object.defineProperty(s, G, {
        enumerable: !0,
        configurable: !0,
        get: () => A.value,
        set: (k) => (A.value = k),
      });
    }
  if (l) for (const G in l) Yi(l[G], s, n, G);
  if (c) {
    const G = U(c) ? c.call(n) : c;
    Reflect.ownKeys(G).forEach((W) => {
      yr(W, G[W]);
    });
  }
  f && js(f, e, "c");
  function re(G, W) {
    L(W) ? W.forEach((h) => G(h.bind(n))) : W && G(W.bind(n));
  }
  if (
    (re(Ir, p),
    re(sn, m),
    re(Pr, x),
    re(Ar, O),
    re(Tr, P),
    re(Er, B),
    re($r, we),
    re(Fr, ue),
    re(kr, be),
    re(Tt, j),
    re(qi, E),
    re(Or, Fe),
    L(Ae))
  )
    if (Ae.length) {
      const G = e.exposed || (e.exposed = {});
      Ae.forEach((W) => {
        Object.defineProperty(G, W, {
          get: () => n[W],
          set: (h) => (n[W] = h),
          enumerable: !0,
        });
      });
    } else e.exposed || (e.exposed = {});
  H && e.render === Ve && (e.render = H),
    Ge != null && (e.inheritAttrs = Ge),
    Xe && (e.components = Xe),
    ct && (e.directives = ct),
    Fe && Bi(e);
}
function Ur(e, t, n = Ve) {
  L(e) && (e = ns(e));
  for (const s in e) {
    const i = e[s];
    let o;
    Q(i)
      ? "default" in i
        ? (o = pn(i.from || s, i.default, !0))
        : (o = pn(i.from || s))
      : (o = pn(i)),
      he(o)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (r) => (o.value = r),
          })
        : (t[s] = o);
  }
}
function js(e, t, n) {
  Ye(L(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Yi(e, t, n, s) {
  let i = s.includes(".") ? Ki(n, s) : () => n[s];
  if (ce(e)) {
    const o = t[e];
    U(o) && Ft(i, o);
  } else if (U(e)) Ft(i, e.bind(n));
  else if (Q(e))
    if (L(e)) e.forEach((o) => Yi(o, t, n, s));
    else {
      const o = U(e.handler) ? e.handler.bind(n) : t[e.handler];
      U(o) && Ft(i, o, e);
    }
}
function Gi(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: i,
      optionsCache: o,
      config: { optionMergeStrategies: r },
    } = e.appContext,
    l = o.get(t);
  let c;
  return (
    l
      ? (c = l)
      : !i.length && !n && !s
      ? (c = t)
      : ((c = {}), i.length && i.forEach((d) => wn(c, d, r, !0)), wn(c, t, r)),
    Q(t) && o.set(t, c),
    c
  );
}
function wn(e, t, n, s = !1) {
  const { mixins: i, extends: o } = t;
  o && wn(e, o, n, !0), i && i.forEach((r) => wn(e, r, n, !0));
  for (const r in t)
    if (!(s && r === "expose")) {
      const l = jr[r] || (n && n[r]);
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const jr = {
  data: Ns,
  props: Hs,
  emits: Hs,
  methods: Ht,
  computed: Ht,
  beforeCreate: pe,
  created: pe,
  beforeMount: pe,
  mounted: pe,
  beforeUpdate: pe,
  updated: pe,
  beforeDestroy: pe,
  beforeUnmount: pe,
  destroyed: pe,
  unmounted: pe,
  activated: pe,
  deactivated: pe,
  errorCaptured: pe,
  serverPrefetch: pe,
  components: Ht,
  directives: Ht,
  watch: Hr,
  provide: Ns,
  inject: Nr,
};
function Ns(e, t) {
  return t
    ? e
      ? function () {
          return fe(
            U(e) ? e.call(this, this) : e,
            U(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Nr(e, t) {
  return Ht(ns(e), ns(t));
}
function ns(e) {
  if (L(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function pe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ht(e, t) {
  return e ? fe(Object.create(null), e, t) : t;
}
function Hs(e, t) {
  return e
    ? L(e) && L(t)
      ? [...new Set([...e, ...t])]
      : fe(Object.create(null), Us(e), Us(t ?? {}))
    : t;
}
function Hr(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = fe(Object.create(null), e);
  for (const s in t) n[s] = pe(e[s], t[s]);
  return n;
}
function Xi() {
  return {
    app: null,
    config: {
      isNativeTag: di,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let zr = 0;
function Kr(e, t) {
  return function (s, i = null) {
    U(s) || (s = fe({}, s)), i != null && !Q(i) && (i = null);
    const o = Xi(),
      r = new WeakSet(),
      l = [];
    let c = !1;
    const d = (o.app = {
      _uid: zr++,
      _component: s,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: xl,
      get config() {
        return o.config;
      },
      set config(f) {},
      use(f, ...p) {
        return (
          r.has(f) ||
            (f && U(f.install)
              ? (r.add(f), f.install(d, ...p))
              : U(f) && (r.add(f), f(d, ...p))),
          d
        );
      },
      mixin(f) {
        return o.mixins.includes(f) || o.mixins.push(f), d;
      },
      component(f, p) {
        return p ? ((o.components[f] = p), d) : o.components[f];
      },
      directive(f, p) {
        return p ? ((o.directives[f] = p), d) : o.directives[f];
      },
      mount(f, p, m) {
        if (!c) {
          const x = d._ceVNode || _e(s, i);
          return (
            (x.appContext = o),
            m === !0 ? (m = "svg") : m === !1 && (m = void 0),
            e(x, f, m),
            (c = !0),
            (d._container = f),
            (f.__vue_app__ = d),
            Fn(x.component)
          );
        }
      },
      onUnmount(f) {
        l.push(f);
      },
      unmount() {
        c &&
          (Ye(l, d._instance, 16),
          e(null, d._container),
          delete d._container.__vue_app__);
      },
      provide(f, p) {
        return (o.provides[f] = p), d;
      },
      runWithContext(f) {
        const p = $t;
        $t = d;
        try {
          return f();
        } finally {
          $t = p;
        }
      },
    });
    return d;
  };
}
let $t = null;
const Br = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${De(t)}Modifiers`] || e[`${pt(t)}Modifiers`];
function Wr(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ee;
  let i = n;
  const o = t.startsWith("update:"),
    r = o && Br(s, t.slice(7));
  r &&
    (r.trim && (i = n.map((f) => (ce(f) ? f.trim() : f))),
    r.number && (i = n.map(fs)));
  let l,
    c = s[(l = Dn(t))] || s[(l = Dn(De(t)))];
  !c && o && (c = s[(l = Dn(pt(t)))]), c && Ye(c, e, 6, i);
  const d = s[l + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Ye(d, e, 6, i);
  }
}
const Vr = new WeakMap();
function Zi(e, t, n = !1) {
  const s = n ? Vr : t.emitsCache,
    i = s.get(e);
  if (i !== void 0) return i;
  const o = e.emits;
  let r = {},
    l = !1;
  if (!U(e)) {
    const c = (d) => {
      const f = Zi(d, t, !0);
      f && ((l = !0), fe(r, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !o && !l
    ? (Q(e) && s.set(e, null), null)
    : (L(o) ? o.forEach((c) => (r[c] = null)) : fe(r, o),
      Q(e) && s.set(e, r),
      r);
}
function On(e, t) {
  return !e || !Tn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, pt(t)) || Y(e, t));
}
function zs(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: i,
      propsOptions: [o],
      slots: r,
      attrs: l,
      emit: c,
      render: d,
      renderCache: f,
      props: p,
      data: m,
      setupState: x,
      ctx: O,
      inheritAttrs: P,
    } = e,
    B = vn(e);
  let z, j;
  try {
    if (n.shapeFlag & 4) {
      const E = i || s,
        H = E;
      (z = Be(d.call(H, E, f, p, x, m, O))), (j = l);
    } else {
      const E = t;
      (z = Be(
        E.length > 1 ? E(p, { attrs: l, slots: r, emit: c }) : E(p, null)
      )),
        (j = t.props ? l : qr(l));
    }
  } catch (E) {
    (Yt.length = 0), Pn(E, e, 1), (z = _e(ht));
  }
  let D = z;
  if (j && P !== !1) {
    const E = Object.keys(j),
      { shapeFlag: H } = D;
    E.length &&
      H & 7 &&
      (o && E.some(cs) && (j = Yr(j, o)), (D = Rt(D, j, !1, !0)));
  }
  return (
    n.dirs &&
      ((D = Rt(D, null, !1, !0)),
      (D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs)),
    n.transition && ws(D, n.transition),
    (z = D),
    vn(B),
    z
  );
}
const qr = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Tn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Yr = (e, t) => {
    const n = {};
    for (const s in e) (!cs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Gr(e, t, n) {
  const { props: s, children: i, component: o } = e,
    { props: r, children: l, patchFlag: c } = t,
    d = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return s ? Ks(s, r, d) : !!r;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const m = f[p];
        if (Ji(r, s, m) && !On(d, m)) return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable)
      ? !0
      : s === r
      ? !1
      : s
      ? r
        ? Ks(s, r, d)
        : !0
      : !!r;
  return !1;
}
function Ks(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let i = 0; i < s.length; i++) {
    const o = s[i];
    if (Ji(t, e, o) && !On(n, o)) return !0;
  }
  return !1;
}
function Ji(e, t, n) {
  const s = e[n],
    i = t[n];
  return n === "style" && Q(s) && Q(i) ? !ds(s, i) : s !== i;
}
function Xr({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Qi = {},
  eo = () => Object.create(Qi),
  to = (e) => Object.getPrototypeOf(e) === Qi;
function Zr(e, t, n, s = !1) {
  const i = {},
    o = eo();
  (e.propsDefaults = Object.create(null)), no(e, t, i, o);
  for (const r in e.propsOptions[0]) r in i || (i[r] = void 0);
  n ? (e.props = s ? i : ir(i)) : e.type.props ? (e.props = i) : (e.props = o),
    (e.attrs = o);
}
function Jr(e, t, n, s) {
  const {
      props: i,
      attrs: o,
      vnode: { patchFlag: r },
    } = e,
    l = q(i),
    [c] = e.propsOptions;
  let d = !1;
  if ((s || r > 0) && !(r & 16)) {
    if (r & 8) {
      const f = e.vnode.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        let m = f[p];
        if (On(e.emitsOptions, m)) continue;
        const x = t[m];
        if (c)
          if (Y(o, m)) x !== o[m] && ((o[m] = x), (d = !0));
          else {
            const O = De(m);
            i[O] = ss(c, l, O, x, e, !1);
          }
        else x !== o[m] && ((o[m] = x), (d = !0));
      }
    }
  } else {
    no(e, t, i, o) && (d = !0);
    let f;
    for (const p in l)
      (!t || (!Y(t, p) && ((f = pt(p)) === p || !Y(t, f)))) &&
        (c
          ? n &&
            (n[p] !== void 0 || n[f] !== void 0) &&
            (i[p] = ss(c, l, p, void 0, e, !0))
          : delete i[p]);
    if (o !== l) for (const p in o) (!t || !Y(t, p)) && (delete o[p], (d = !0));
  }
  d && tt(e.attrs, "set", "");
}
function no(e, t, n, s) {
  const [i, o] = e.propsOptions;
  let r = !1,
    l;
  if (t)
    for (let c in t) {
      if (zt(c)) continue;
      const d = t[c];
      let f;
      i && Y(i, (f = De(c)))
        ? !o || !o.includes(f)
          ? (n[f] = d)
          : ((l || (l = {}))[f] = d)
        : On(e.emitsOptions, c) ||
          ((!(c in s) || d !== s[c]) && ((s[c] = d), (r = !0)));
    }
  if (o) {
    const c = q(n),
      d = l || ee;
    for (let f = 0; f < o.length; f++) {
      const p = o[f];
      n[p] = ss(i, c, p, d[p], e, !Y(d, p));
    }
  }
  return r;
}
function ss(e, t, n, s, i, o) {
  const r = e[n];
  if (r != null) {
    const l = Y(r, "default");
    if (l && s === void 0) {
      const c = r.default;
      if (r.type !== Function && !r.skipFactory && U(c)) {
        const { propsDefaults: d } = i;
        if (n in d) s = d[n];
        else {
          const f = rn(i);
          (s = d[n] = c.call(null, t)), f();
        }
      } else s = c;
      i.ce && i.ce._setProp(n, s);
    }
    r[0] &&
      (o && !l ? (s = !1) : r[1] && (s === "" || s === pt(n)) && (s = !0));
  }
  return s;
}
const Qr = new WeakMap();
function so(e, t, n = !1) {
  const s = n ? Qr : t.propsCache,
    i = s.get(e);
  if (i) return i;
  const o = e.props,
    r = {},
    l = [];
  let c = !1;
  if (!U(e)) {
    const f = (p) => {
      c = !0;
      const [m, x] = so(p, t, !0);
      fe(r, m), x && l.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f);
  }
  if (!o && !c) return Q(e) && s.set(e, At), At;
  if (L(o))
    for (let f = 0; f < o.length; f++) {
      const p = De(o[f]);
      Bs(p) && (r[p] = ee);
    }
  else if (o)
    for (const f in o) {
      const p = De(f);
      if (Bs(p)) {
        const m = o[f],
          x = (r[p] = L(m) || U(m) ? { type: m } : fe({}, m)),
          O = x.type;
        let P = !1,
          B = !0;
        if (L(O))
          for (let z = 0; z < O.length; ++z) {
            const j = O[z],
              D = U(j) && j.name;
            if (D === "Boolean") {
              P = !0;
              break;
            } else D === "String" && (B = !1);
          }
        else P = U(O) && O.name === "Boolean";
        (x[0] = P), (x[1] = B), (P || Y(x, "default")) && l.push(p);
      }
    }
  const d = [r, l];
  return Q(e) && s.set(e, d), d;
}
function Bs(e) {
  return e[0] !== "$" && !zt(e);
}
const xs = (e) => e === "_" || e === "_ctx" || e === "$stable",
  Ss = (e) => (L(e) ? e.map(Be) : [Be(e)]),
  el = (e, t, n) => {
    if (t._n) return t;
    const s = _r((...i) => Ss(t(...i)), n);
    return (s._c = !1), s;
  },
  io = (e, t, n) => {
    const s = e._ctx;
    for (const i in e) {
      if (xs(i)) continue;
      const o = e[i];
      if (U(o)) t[i] = el(i, o, s);
      else if (o != null) {
        const r = Ss(o);
        t[i] = () => r;
      }
    }
  },
  oo = (e, t) => {
    const n = Ss(t);
    e.slots.default = () => n;
  },
  ro = (e, t, n) => {
    for (const s in t) (n || !xs(s)) && (e[s] = t[s]);
  },
  tl = (e, t, n) => {
    const s = (e.slots = eo());
    if (e.vnode.shapeFlag & 32) {
      const i = t._;
      i ? (ro(s, t, n), n && yi(s, "_", i, !0)) : io(t, s);
    } else t && oo(e, t);
  },
  nl = (e, t, n) => {
    const { vnode: s, slots: i } = e;
    let o = !0,
      r = ee;
    if (s.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (o = !1)
          : ro(i, t, n)
        : ((o = !t.$stable), io(t, i)),
        (r = t);
    } else t && (oo(e, t), (r = { default: 1 }));
    if (o) for (const l in i) !xs(l) && r[l] == null && delete i[l];
  },
  Ce = ll;
function sl(e) {
  return il(e);
}
function il(e, t) {
  const n = Mn();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: i,
      patchProp: o,
      createElement: r,
      createText: l,
      createComment: c,
      setText: d,
      setElementText: f,
      parentNode: p,
      nextSibling: m,
      setScopeId: x = Ve,
      insertStaticContent: O,
    } = e,
    P = (
      a,
      u,
      g,
      b = null,
      _ = null,
      y = null,
      T = void 0,
      C = null,
      S = !!u.dynamicChildren
    ) => {
      if (a === u) return;
      a && !jt(a, u) && ((b = ae(a)), k(a, _, y, !0), (a = null)),
        u.patchFlag === -2 && ((S = !1), (u.dynamicChildren = null));
      const { type: v, ref: $, shapeFlag: I } = u;
      switch (v) {
        case kn:
          B(a, u, g, b);
          break;
        case ht:
          z(a, u, g, b);
          break;
        case zn:
          a == null && j(u, g, b, T);
          break;
        case me:
          Xe(a, u, g, b, _, y, T, C, S);
          break;
        default:
          I & 1
            ? H(a, u, g, b, _, y, T, C, S)
            : I & 6
            ? ct(a, u, g, b, _, y, T, C, S)
            : (I & 64 || I & 128) && v.process(a, u, g, b, _, y, T, C, S, Ze);
      }
      $ != null && _
        ? Wt($, a && a.ref, y, u || a, !u)
        : $ == null && a && a.ref != null && Wt(a.ref, null, y, a, !0);
    },
    B = (a, u, g, b) => {
      if (a == null) s((u.el = l(u.children)), g, b);
      else {
        const _ = (u.el = a.el);
        u.children !== a.children && d(_, u.children);
      }
    },
    z = (a, u, g, b) => {
      a == null ? s((u.el = c(u.children || "")), g, b) : (u.el = a.el);
    },
    j = (a, u, g, b) => {
      [a.el, a.anchor] = O(a.children, u, g, b, a.el, a.anchor);
    },
    D = ({ el: a, anchor: u }, g, b) => {
      let _;
      for (; a && a !== u; ) (_ = m(a)), s(a, g, b), (a = _);
      s(u, g, b);
    },
    E = ({ el: a, anchor: u }) => {
      let g;
      for (; a && a !== u; ) (g = m(a)), i(a), (a = g);
      i(u);
    },
    H = (a, u, g, b, _, y, T, C, S) => {
      if (
        (u.type === "svg" ? (T = "svg") : u.type === "math" && (T = "mathml"),
        a == null)
      )
        ue(u, g, b, _, y, T, C, S);
      else {
        const v = a.el && a.el._isVueCE ? a.el : null;
        try {
          v && v._beginPatch(), Fe(a, u, _, y, T, C, S);
        } finally {
          v && v._endPatch();
        }
      }
    },
    ue = (a, u, g, b, _, y, T, C) => {
      let S, v;
      const { props: $, shapeFlag: I, transition: F, dirs: R } = a;
      if (
        ((S = a.el = r(a.type, y, $ && $.is, $)),
        I & 8
          ? f(S, a.children)
          : I & 16 && we(a.children, S, null, b, _, Hn(a, y), T, C),
        R && _t(a, null, b, "created"),
        be(S, a, a.scopeId, T, b),
        $)
      ) {
        for (const te in $)
          te !== "value" && !zt(te) && o(S, te, null, $[te], y, b);
        "value" in $ && o(S, "value", null, $.value, y),
          (v = $.onVnodeBeforeMount) && He(v, b, a);
      }
      R && _t(a, null, b, "beforeMount");
      const K = ol(_, F);
      K && F.beforeEnter(S),
        s(S, u, g),
        ((v = $ && $.onVnodeMounted) || K || R) &&
          Ce(() => {
            v && He(v, b, a), K && F.enter(S), R && _t(a, null, b, "mounted");
          }, _);
    },
    be = (a, u, g, b, _) => {
      if ((g && x(a, g), b)) for (let y = 0; y < b.length; y++) x(a, b[y]);
      if (_) {
        let y = _.subTree;
        if (
          u === y ||
          (uo(y.type) && (y.ssContent === u || y.ssFallback === u))
        ) {
          const T = _.vnode;
          be(a, T, T.scopeId, T.slotScopeIds, _.parent);
        }
      }
    },
    we = (a, u, g, b, _, y, T, C, S = 0) => {
      for (let v = S; v < a.length; v++) {
        const $ = (a[v] = C ? et(a[v]) : Be(a[v]));
        P(null, $, u, g, b, _, y, T, C);
      }
    },
    Fe = (a, u, g, b, _, y, T) => {
      const C = (u.el = a.el);
      let { patchFlag: S, dynamicChildren: v, dirs: $ } = u;
      S |= a.patchFlag & 16;
      const I = a.props || ee,
        F = u.props || ee;
      let R;
      if (
        (g && yt(g, !1),
        (R = F.onVnodeBeforeUpdate) && He(R, g, u, a),
        $ && _t(u, a, g, "beforeUpdate"),
        g && yt(g, !0),
        ((I.innerHTML && F.innerHTML == null) ||
          (I.textContent && F.textContent == null)) &&
          f(C, ""),
        v
          ? Ae(a.dynamicChildren, v, C, g, b, Hn(u, _), y)
          : T || W(a, u, C, null, g, b, Hn(u, _), y, !1),
        S > 0)
      ) {
        if (S & 16) Ge(C, I, F, g, _);
        else if (
          (S & 2 && I.class !== F.class && o(C, "class", null, F.class, _),
          S & 4 && o(C, "style", I.style, F.style, _),
          S & 8)
        ) {
          const K = u.dynamicProps;
          for (let te = 0; te < K.length; te++) {
            const Z = K[te],
              xe = I[Z],
              Se = F[Z];
            (Se !== xe || Z === "value") && o(C, Z, xe, Se, _, g);
          }
        }
        S & 1 && a.children !== u.children && f(C, u.children);
      } else !T && v == null && Ge(C, I, F, g, _);
      ((R = F.onVnodeUpdated) || $) &&
        Ce(() => {
          R && He(R, g, u, a), $ && _t(u, a, g, "updated");
        }, b);
    },
    Ae = (a, u, g, b, _, y, T) => {
      for (let C = 0; C < u.length; C++) {
        const S = a[C],
          v = u[C],
          $ =
            S.el && (S.type === me || !jt(S, v) || S.shapeFlag & 198)
              ? p(S.el)
              : g;
        P(S, v, $, null, b, _, y, T, !0);
      }
    },
    Ge = (a, u, g, b, _) => {
      if (u !== g) {
        if (u !== ee)
          for (const y in u) !zt(y) && !(y in g) && o(a, y, u[y], null, _, b);
        for (const y in g) {
          if (zt(y)) continue;
          const T = g[y],
            C = u[y];
          T !== C && y !== "value" && o(a, y, C, T, _, b);
        }
        "value" in g && o(a, "value", u.value, g.value, _);
      }
    },
    Xe = (a, u, g, b, _, y, T, C, S) => {
      const v = (u.el = a ? a.el : l("")),
        $ = (u.anchor = a ? a.anchor : l(""));
      let { patchFlag: I, dynamicChildren: F, slotScopeIds: R } = u;
      R && (C = C ? C.concat(R) : R),
        a == null
          ? (s(v, g, b), s($, g, b), we(u.children || [], g, $, _, y, T, C, S))
          : I > 0 &&
            I & 64 &&
            F &&
            a.dynamicChildren &&
            a.dynamicChildren.length === F.length
          ? (Ae(a.dynamicChildren, F, g, _, y, T, C),
            (u.key != null || (_ && u === _.subTree)) && lo(a, u, !0))
          : W(a, u, g, $, _, y, T, C, S);
    },
    ct = (a, u, g, b, _, y, T, C, S) => {
      (u.slotScopeIds = C),
        a == null
          ? u.shapeFlag & 512
            ? _.ctx.activate(u, g, b, T, S)
            : mt(u, g, b, _, y, T, S)
          : at(a, u, S);
    },
    mt = (a, u, g, b, _, y, T) => {
      const C = (a.component = gl(a, b, _));
      if ((Wi(a) && (C.ctx.renderer = Ze), _l(C, !1, T), C.asyncDep)) {
        if ((_ && _.registerDep(C, re, T), !a.el)) {
          const S = (C.subTree = _e(ht));
          z(null, S, u, g), (a.placeholder = S.el);
        }
      } else re(C, a, u, g, _, y, T);
    },
    at = (a, u, g) => {
      const b = (u.component = a.component);
      if (Gr(a, u, g))
        if (b.asyncDep && !b.asyncResolved) {
          G(b, u, g);
          return;
        } else (b.next = u), b.update();
      else (u.el = a.el), (b.vnode = u);
    },
    re = (a, u, g, b, _, y, T) => {
      const C = () => {
        if (a.isMounted) {
          let { next: I, bu: F, u: R, parent: K, vnode: te } = a;
          {
            const je = co(a);
            if (je) {
              I && ((I.el = te.el), G(a, I, T)),
                je.asyncDep.then(() => {
                  Ce(() => {
                    a.isUnmounted || v();
                  }, _);
                });
              return;
            }
          }
          let Z = I,
            xe;
          yt(a, !1),
            I ? ((I.el = te.el), G(a, I, T)) : (I = te),
            F && hn(F),
            (xe = I.props && I.props.onVnodeBeforeUpdate) && He(xe, K, I, te),
            yt(a, !0);
          const Se = zs(a),
            Ue = a.subTree;
          (a.subTree = Se),
            P(Ue, Se, p(Ue.el), ae(Ue), a, _, y),
            (I.el = Se.el),
            Z === null && Xr(a, Se.el),
            R && Ce(R, _),
            (xe = I.props && I.props.onVnodeUpdated) &&
              Ce(() => He(xe, K, I, te), _);
        } else {
          let I;
          const { el: F, props: R } = u,
            { bm: K, m: te, parent: Z, root: xe, type: Se } = a,
            Ue = Vt(u);
          yt(a, !1),
            K && hn(K),
            !Ue && (I = R && R.onVnodeBeforeMount) && He(I, Z, u),
            yt(a, !0);
          {
            xe.ce &&
              xe.ce._hasShadowRoot() &&
              xe.ce._injectChildStyle(Se, a.parent ? a.parent.type : void 0);
            const je = (a.subTree = zs(a));
            P(null, je, g, b, a, _, y), (u.el = je.el);
          }
          if ((te && Ce(te, _), !Ue && (I = R && R.onVnodeMounted))) {
            const je = u;
            Ce(() => He(I, Z, je), _);
          }
          (u.shapeFlag & 256 ||
            (Z && Vt(Z.vnode) && Z.vnode.shapeFlag & 256)) &&
            a.a &&
            Ce(a.a, _),
            (a.isMounted = !0),
            (u = g = b = null);
        }
      };
      a.scope.on();
      const S = (a.effect = new xi(C));
      a.scope.off();
      const v = (a.update = S.run.bind(S)),
        $ = (a.job = S.runIfDirty.bind(S));
      ($.i = a), ($.id = a.uid), (S.scheduler = () => bs($)), yt(a, !0), v();
    },
    G = (a, u, g) => {
      u.component = a;
      const b = a.vnode.props;
      (a.vnode = u),
        (a.next = null),
        Jr(a, u.props, b, g),
        nl(a, u.children, g),
        st(),
        Ds(a),
        it();
    },
    W = (a, u, g, b, _, y, T, C, S = !1) => {
      const v = a && a.children,
        $ = a ? a.shapeFlag : 0,
        I = u.children,
        { patchFlag: F, shapeFlag: R } = u;
      if (F > 0) {
        if (F & 128) {
          M(v, I, g, b, _, y, T, C, S);
          return;
        } else if (F & 256) {
          h(v, I, g, b, _, y, T, C, S);
          return;
        }
      }
      R & 8
        ? ($ & 16 && le(v, _, y), I !== v && f(g, I))
        : $ & 16
        ? R & 16
          ? M(v, I, g, b, _, y, T, C, S)
          : le(v, _, y, !0)
        : ($ & 8 && f(g, ""), R & 16 && we(I, g, b, _, y, T, C, S));
    },
    h = (a, u, g, b, _, y, T, C, S) => {
      (a = a || At), (u = u || At);
      const v = a.length,
        $ = u.length,
        I = Math.min(v, $);
      let F;
      for (F = 0; F < I; F++) {
        const R = (u[F] = S ? et(u[F]) : Be(u[F]));
        P(a[F], R, g, null, _, y, T, C, S);
      }
      v > $ ? le(a, _, y, !0, !1, I) : we(u, g, b, _, y, T, C, S, I);
    },
    M = (a, u, g, b, _, y, T, C, S) => {
      let v = 0;
      const $ = u.length;
      let I = a.length - 1,
        F = $ - 1;
      for (; v <= I && v <= F; ) {
        const R = a[v],
          K = (u[v] = S ? et(u[v]) : Be(u[v]));
        if (jt(R, K)) P(R, K, g, null, _, y, T, C, S);
        else break;
        v++;
      }
      for (; v <= I && v <= F; ) {
        const R = a[I],
          K = (u[F] = S ? et(u[F]) : Be(u[F]));
        if (jt(R, K)) P(R, K, g, null, _, y, T, C, S);
        else break;
        I--, F--;
      }
      if (v > I) {
        if (v <= F) {
          const R = F + 1,
            K = R < $ ? u[R].el : b;
          for (; v <= F; )
            P(null, (u[v] = S ? et(u[v]) : Be(u[v])), g, K, _, y, T, C, S), v++;
        }
      } else if (v > F) for (; v <= I; ) k(a[v], _, y, !0), v++;
      else {
        const R = v,
          K = v,
          te = new Map();
        for (v = K; v <= F; v++) {
          const Ie = (u[v] = S ? et(u[v]) : Be(u[v]));
          Ie.key != null && te.set(Ie.key, v);
        }
        let Z,
          xe = 0;
        const Se = F - K + 1;
        let Ue = !1,
          je = 0;
        const Lt = new Array(Se);
        for (v = 0; v < Se; v++) Lt[v] = 0;
        for (v = R; v <= I; v++) {
          const Ie = a[v];
          if (xe >= Se) {
            k(Ie, _, y, !0);
            continue;
          }
          let Ne;
          if (Ie.key != null) Ne = te.get(Ie.key);
          else
            for (Z = K; Z <= F; Z++)
              if (Lt[Z - K] === 0 && jt(Ie, u[Z])) {
                Ne = Z;
                break;
              }
          Ne === void 0
            ? k(Ie, _, y, !0)
            : ((Lt[Ne - K] = v + 1),
              Ne >= je ? (je = Ne) : (Ue = !0),
              P(Ie, u[Ne], g, null, _, y, T, C, S),
              xe++);
        }
        const Is = Ue ? rl(Lt) : At;
        for (Z = Is.length - 1, v = Se - 1; v >= 0; v--) {
          const Ie = K + v,
            Ne = u[Ie],
            Ps = u[Ie + 1],
            As = Ie + 1 < $ ? Ps.el || ao(Ps) : b;
          Lt[v] === 0
            ? P(null, Ne, g, As, _, y, T, C, S)
            : Ue && (Z < 0 || v !== Is[Z] ? A(Ne, g, As, 2) : Z--);
        }
      }
    },
    A = (a, u, g, b, _ = null) => {
      const { el: y, type: T, transition: C, children: S, shapeFlag: v } = a;
      if (v & 6) {
        A(a.component.subTree, u, g, b);
        return;
      }
      if (v & 128) {
        a.suspense.move(u, g, b);
        return;
      }
      if (v & 64) {
        T.move(a, u, g, Ze);
        return;
      }
      if (T === me) {
        s(y, u, g);
        for (let I = 0; I < S.length; I++) A(S[I], u, g, b);
        s(a.anchor, u, g);
        return;
      }
      if (T === zn) {
        D(a, u, g);
        return;
      }
      if (b !== 2 && v & 1 && C)
        if (b === 0) C.beforeEnter(y), s(y, u, g), Ce(() => C.enter(y), _);
        else {
          const { leave: I, delayLeave: F, afterLeave: R } = C,
            K = () => {
              a.ctx.isUnmounted ? i(y) : s(y, u, g);
            },
            te = () => {
              y._isLeaving && y[Cr](!0),
                I(y, () => {
                  K(), R && R();
                });
            };
          F ? F(y, K, te) : te();
        }
      else s(y, u, g);
    },
    k = (a, u, g, b = !1, _ = !1) => {
      const {
        type: y,
        props: T,
        ref: C,
        children: S,
        dynamicChildren: v,
        shapeFlag: $,
        patchFlag: I,
        dirs: F,
        cacheIndex: R,
      } = a;
      if (
        (I === -2 && (_ = !1),
        C != null && (st(), Wt(C, null, g, a, !0), it()),
        R != null && (u.renderCache[R] = void 0),
        $ & 256)
      ) {
        u.ctx.deactivate(a);
        return;
      }
      const K = $ & 1 && F,
        te = !Vt(a);
      let Z;
      if ((te && (Z = T && T.onVnodeBeforeUnmount) && He(Z, u, a), $ & 6))
        ie(a.component, g, b);
      else {
        if ($ & 128) {
          a.suspense.unmount(g, b);
          return;
        }
        K && _t(a, null, u, "beforeUnmount"),
          $ & 64
            ? a.type.remove(a, u, g, Ze, b)
            : v && !v.hasOnce && (y !== me || (I > 0 && I & 64))
            ? le(v, u, g, !1, !0)
            : ((y === me && I & 384) || (!_ && $ & 16)) && le(S, u, g),
          b && N(a);
      }
      ((te && (Z = T && T.onVnodeUnmounted)) || K) &&
        Ce(() => {
          Z && He(Z, u, a), K && _t(a, null, u, "unmounted");
        }, g);
    },
    N = (a) => {
      const { type: u, el: g, anchor: b, transition: _ } = a;
      if (u === me) {
        X(g, b);
        return;
      }
      if (u === zn) {
        E(a);
        return;
      }
      const y = () => {
        i(g), _ && !_.persisted && _.afterLeave && _.afterLeave();
      };
      if (a.shapeFlag & 1 && _ && !_.persisted) {
        const { leave: T, delayLeave: C } = _,
          S = () => T(g, y);
        C ? C(a.el, y, S) : S();
      } else y();
    },
    X = (a, u) => {
      let g;
      for (; a !== u; ) (g = m(a)), i(a), (a = g);
      i(u);
    },
    ie = (a, u, g) => {
      const { bum: b, scope: _, job: y, subTree: T, um: C, m: S, a: v } = a;
      Ws(S),
        Ws(v),
        b && hn(b),
        _.stop(),
        y && ((y.flags |= 8), k(T, a, u, g)),
        C && Ce(C, u),
        Ce(() => {
          a.isUnmounted = !0;
        }, u);
    },
    le = (a, u, g, b = !1, _ = !1, y = 0) => {
      for (let T = y; T < a.length; T++) k(a[T], u, g, b, _);
    },
    ae = (a) => {
      if (a.shapeFlag & 6) return ae(a.component.subTree);
      if (a.shapeFlag & 128) return a.suspense.next();
      const u = m(a.anchor || a.el),
        g = u && u[xr];
      return g ? m(g) : u;
    };
  let $e = !1;
  const ut = (a, u, g) => {
      let b;
      a == null
        ? u._vnode && (k(u._vnode, null, null, !0), (b = u._vnode.component))
        : P(u._vnode || null, a, u, null, null, null, g),
        (u._vnode = a),
        $e || (($e = !0), Ds(b), ji(), ($e = !1));
    },
    Ze = { p: P, um: k, m: A, r: N, mt, mc: we, pc: W, pbc: Ae, n: ae, o: e };
  return { render: ut, hydrate: void 0, createApp: Kr(ut) };
}
function Hn({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function yt({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function ol(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function lo(e, t, n = !1) {
  const s = e.children,
    i = t.children;
  if (L(s) && L(i))
    for (let o = 0; o < s.length; o++) {
      const r = s[o];
      let l = i[o];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = i[o] = et(i[o])), (l.el = r.el)),
        !n && l.patchFlag !== -2 && lo(r, l)),
        l.type === kn &&
          (l.patchFlag === -1 && (l = i[o] = et(l)), (l.el = r.el)),
        l.type === ht && !l.el && (l.el = r.el);
    }
}
function rl(e) {
  const t = e.slice(),
    n = [0];
  let s, i, o, r, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const d = e[s];
    if (d !== 0) {
      if (((i = n[n.length - 1]), e[i] < d)) {
        (t[s] = i), n.push(s);
        continue;
      }
      for (o = 0, r = n.length - 1; o < r; )
        (l = (o + r) >> 1), e[n[l]] < d ? (o = l + 1) : (r = l);
      d < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s));
    }
  }
  for (o = n.length, r = n[o - 1]; o-- > 0; ) (n[o] = r), (r = t[r]);
  return n;
}
function co(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : co(t);
}
function Ws(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function ao(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? ao(t.subTree) : null;
}
const uo = (e) => e.__isSuspense;
function ll(e, t) {
  t && t.pendingBranch
    ? L(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : mr(e);
}
const me = Symbol.for("v-fgt"),
  kn = Symbol.for("v-txt"),
  ht = Symbol.for("v-cmt"),
  zn = Symbol.for("v-stc"),
  Yt = [];
let Pe = null;
function J(e = !1) {
  Yt.push((Pe = e ? null : []));
}
function cl() {
  Yt.pop(), (Pe = Yt[Yt.length - 1] || null);
}
let Jt = 1;
function Vs(e, t = !1) {
  (Jt += e), e < 0 && Pe && t && (Pe.hasOnce = !0);
}
function fo(e) {
  return (
    (e.dynamicChildren = Jt > 0 ? Pe || At : null),
    cl(),
    Jt > 0 && Pe && Pe.push(e),
    e
  );
}
function oe(e, t, n, s, i, o) {
  return fo(w(e, t, n, s, i, o, !0));
}
function is(e, t, n, s, i) {
  return fo(_e(e, t, n, s, i, !0));
}
function ho(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function jt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const po = ({ key: e }) => e ?? null,
  gn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? ce(e) || he(e) || U(e)
        ? { i: Oe, r: e, k: t, f: !!n }
        : e
      : null
  );
function w(
  e,
  t = null,
  n = null,
  s = 0,
  i = null,
  o = e === me ? 0 : 1,
  r = !1,
  l = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && po(t),
    ref: t && gn(t),
    scopeId: Hi,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Oe,
  };
  return (
    l
      ? (Cs(c, n), o & 128 && e.normalize(c))
      : n && (c.shapeFlag |= ce(n) ? 8 : 16),
    Jt > 0 &&
      !r &&
      Pe &&
      (c.patchFlag > 0 || o & 6) &&
      c.patchFlag !== 32 &&
      Pe.push(c),
    c
  );
}
const _e = al;
function al(e, t = null, n = null, s = 0, i = null, o = !1) {
  if (((!e || e === Dr) && (e = ht), ho(e))) {
    const l = Rt(e, t, !0);
    return (
      n && Cs(l, n),
      Jt > 0 &&
        !o &&
        Pe &&
        (l.shapeFlag & 6 ? (Pe[Pe.indexOf(e)] = l) : Pe.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((wl(e) && (e = e.__vccOpts), t)) {
    t = ul(t);
    let { class: l, style: c } = t;
    l && !ce(l) && (t.class = Ct(l)),
      Q(c) && (vs(c) && !L(c) && (c = fe({}, c)), (t.style = Me(c)));
  }
  const r = ce(e) ? 1 : uo(e) ? 128 : Sr(e) ? 64 : Q(e) ? 4 : U(e) ? 2 : 0;
  return w(e, t, n, s, i, r, o, !0);
}
function ul(e) {
  return e ? (vs(e) || to(e) ? fe({}, e) : e) : null;
}
function Rt(e, t, n = !1, s = !1) {
  const { props: i, ref: o, patchFlag: r, children: l, transition: c } = e,
    d = t ? dl(i || {}, t) : i,
    f = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: d,
      key: d && po(d),
      ref:
        t && t.ref
          ? n && o
            ? L(o)
              ? o.concat(gn(t))
              : [o, gn(t)]
            : gn(t)
          : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== me ? (r === -1 ? 16 : r | 16) : r,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Rt(e.ssContent),
      ssFallback: e.ssFallback && Rt(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return c && s && ws(f, c.clone(f)), f;
}
function fl(e = " ", t = 0) {
  return _e(kn, null, e, t);
}
function xt(e = "", t = !1) {
  return t ? (J(), is(ht, null, e)) : _e(ht, null, e);
}
function Be(e) {
  return e == null || typeof e == "boolean"
    ? _e(ht)
    : L(e)
    ? _e(me, null, e.slice())
    : ho(e)
    ? et(e)
    : _e(kn, null, String(e));
}
function et(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Rt(e);
}
function Cs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (L(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Cs(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !to(t)
        ? (t._ctx = Oe)
        : i === 3 &&
          Oe &&
          (Oe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    U(t)
      ? ((t = { default: t, _ctx: Oe }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [fl(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function dl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Ct([t.class, s.class]));
      else if (i === "style") t.style = Me([t.style, s.style]);
      else if (Tn(i)) {
        const o = t[i],
          r = s[i];
        r &&
          o !== r &&
          !(L(o) && o.includes(r)) &&
          (t[i] = o ? [].concat(o, r) : r);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function He(e, t, n, s = null) {
  Ye(e, t, 7, [n, s]);
}
const hl = Xi();
let pl = 0;
function gl(e, t, n) {
  const s = e.type,
    i = (t ? t.appContext : e.appContext) || hl,
    o = {
      uid: pl++,
      vnode: e,
      type: s,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Uo(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: so(s, i),
      emitsOptions: Zi(s, i),
      emit: null,
      emitted: null,
      propsDefaults: ee,
      inheritAttrs: s.inheritAttrs,
      ctx: ee,
      data: ee,
      props: ee,
      attrs: ee,
      slots: ee,
      refs: ee,
      setupState: ee,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Wr.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let ve = null;
const ml = () => ve || Oe;
let xn, os;
{
  const e = Mn(),
    t = (n, s) => {
      let i;
      return (
        (i = e[n]) || (i = e[n] = []),
        i.push(s),
        (o) => {
          i.length > 1 ? i.forEach((r) => r(o)) : i[0](o);
        }
      );
    };
  (xn = t("__VUE_INSTANCE_SETTERS__", (n) => (ve = n))),
    (os = t("__VUE_SSR_SETTERS__", (n) => (Qt = n)));
}
const rn = (e) => {
    const t = ve;
    return (
      xn(e),
      e.scope.on(),
      () => {
        e.scope.off(), xn(t);
      }
    );
  },
  qs = () => {
    ve && ve.scope.off(), xn(null);
  };
function go(e) {
  return e.vnode.shapeFlag & 4;
}
let Qt = !1;
function _l(e, t = !1, n = !1) {
  t && os(t);
  const { props: s, children: i } = e.vnode,
    o = go(e);
  Zr(e, s, o, t), tl(e, i, n || t);
  const r = o ? yl(e, t) : void 0;
  return t && os(!1), r;
}
function yl(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Rr));
  const { setup: s } = n;
  if (s) {
    st();
    const i = (e.setupContext = s.length > 1 ? bl(e) : null),
      o = rn(e),
      r = nn(s, e, 0, [e.props, i]),
      l = pi(r);
    if ((it(), o(), (l || e.sp) && !Vt(e) && Bi(e), l)) {
      if ((r.then(qs, qs), t))
        return r
          .then((c) => {
            Ys(e, c);
          })
          .catch((c) => {
            Pn(c, e, 0);
          });
      e.asyncDep = r;
    } else Ys(e, r);
  } else mo(e);
}
function Ys(e, t, n) {
  U(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Q(t) && (e.setupState = Ri(t)),
    mo(e);
}
function mo(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Ve);
  {
    const i = rn(e);
    st();
    try {
      Lr(e);
    } finally {
      it(), i();
    }
  }
}
const vl = {
  get(e, t) {
    return de(e, "get", ""), e[t];
  },
};
function bl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, vl),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Fn(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Ri(or(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in qt) return qt[n](e);
          },
          has(t, n) {
            return n in t || n in qt;
          },
        }))
    : e.proxy;
}
function wl(e) {
  return U(e) && "__vccOpts" in e;
}
const se = (e, t) => ur(e, t, Qt),
  xl = "3.5.30";
let rs;
const Gs = typeof window < "u" && window.trustedTypes;
if (Gs)
  try {
    rs = Gs.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const _o = rs ? (e) => rs.createHTML(e) : (e) => e,
  Sl = "http://www.w3.org/2000/svg",
  Cl = "http://www.w3.org/1998/Math/MathML",
  Qe = typeof document < "u" ? document : null,
  Xs = Qe && Qe.createElement("template"),
  Tl = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const i =
        t === "svg"
          ? Qe.createElementNS(Sl, e)
          : t === "mathml"
          ? Qe.createElementNS(Cl, e)
          : n
          ? Qe.createElement(e, { is: n })
          : Qe.createElement(e);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          i.setAttribute("multiple", s.multiple),
        i
      );
    },
    createText: (e) => Qe.createTextNode(e),
    createComment: (e) => Qe.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Qe.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, i, o) {
      const r = n ? n.previousSibling : t.lastChild;
      if (i && (i === o || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), n),
            !(i === o || !(i = i.nextSibling));

        );
      else {
        Xs.innerHTML = _o(
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
            ? `<math>${e}</math>`
            : e
        );
        const l = Xs.content;
        if (s === "svg" || s === "mathml") {
          const c = l.firstChild;
          for (; c.firstChild; ) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, n);
      }
      return [
        r ? r.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  El = Symbol("_vtc");
function Ml(e, t, n) {
  const s = e[El];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const Zs = Symbol("_vod"),
  Il = Symbol("_vsh"),
  Pl = Symbol(""),
  Al = /(?:^|;)\s*display\s*:/;
function Ol(e, t, n) {
  const s = e.style,
    i = ce(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (ce(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && mn(s, l, "");
        }
      else for (const r in t) n[r] == null && mn(s, r, "");
    for (const r in n) r === "display" && (o = !0), mn(s, r, n[r]);
  } else if (i) {
    if (t !== n) {
      const r = s[Pl];
      r && (n += ";" + r), (s.cssText = n), (o = Al.test(n));
    }
  } else t && e.removeAttribute("style");
  Zs in e && ((e[Zs] = o ? s.display : ""), e[Il] && (s.display = "none"));
}
const Js = /\s*!important$/;
function mn(e, t, n) {
  if (L(n)) n.forEach((s) => mn(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = kl(e, t);
    Js.test(n)
      ? e.setProperty(pt(s), n.replace(Js, ""), "important")
      : (e[s] = n);
  }
}
const Qs = ["Webkit", "Moz", "ms"],
  Kn = {};
function kl(e, t) {
  const n = Kn[t];
  if (n) return n;
  let s = De(t);
  if (s !== "filter" && s in e) return (Kn[t] = s);
  s = _i(s);
  for (let i = 0; i < Qs.length; i++) {
    const o = Qs[i] + s;
    if (o in e) return (Kn[t] = o);
  }
  return t;
}
const ei = "http://www.w3.org/1999/xlink";
function ti(e, t, n, s, i, o = Ro(t)) {
  s && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(ei, t.slice(6, t.length))
      : e.setAttributeNS(ei, t, n)
    : n == null || (o && !vi(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, o ? "" : qe(n) ? String(n) : n);
}
function ni(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? _o(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value,
      c = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    (l !== c || !("_value" in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean"
      ? (n = vi(n))
      : n == null && l === "string"
      ? ((n = ""), (r = !0))
      : l === "number" && ((n = 0), (r = !0));
  }
  try {
    e[t] = n;
  } catch {}
  r && e.removeAttribute(i || t);
}
function Pt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Fl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const si = Symbol("_vei");
function $l(e, t, n, s, i = null) {
  const o = e[si] || (e[si] = {}),
    r = o[t];
  if (s && r) r.value = s;
  else {
    const [l, c] = Dl(t);
    if (s) {
      const d = (o[t] = Ul(s, i));
      Pt(e, l, d, c);
    } else r && (Fl(e, l, r, c), (o[t] = void 0));
  }
}
const ii = /(?:Once|Passive|Capture)$/;
function Dl(e) {
  let t;
  if (ii.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(ii)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : pt(e.slice(2)), t];
}
let Bn = 0;
const Rl = Promise.resolve(),
  Ll = () => Bn || (Rl.then(() => (Bn = 0)), (Bn = Date.now()));
function Ul(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    Ye(jl(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = Ll()), n;
}
function jl(e, t) {
  if (L(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (i) => !i._stopped && s && s(i))
    );
  } else return t;
}
const oi = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Nl = (e, t, n, s, i, o) => {
    const r = i === "svg";
    t === "class"
      ? Ml(e, s, r)
      : t === "style"
      ? Ol(e, n, s)
      : Tn(t)
      ? cs(t) || $l(e, t, n, s, o)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Hl(e, t, s, r)
        )
      ? (ni(e, t, s),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          ti(e, t, s, r, o, t !== "value"))
      : e._isVueCE &&
        (zl(e, t) || (e._def.__asyncLoader && (/[A-Z]/.test(t) || !ce(s))))
      ? ni(e, De(t), s, o, t)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        ti(e, t, s, r));
  };
function Hl(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && oi(t) && U(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "autocorrect" ||
    (t === "sandbox" && e.tagName === "IFRAME") ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return oi(t) && ce(n) ? !1 : t in e;
}
function zl(e, t) {
  const n = e._def.props;
  if (!n) return !1;
  const s = De(t);
  return Array.isArray(n)
    ? n.some((i) => De(i) === s)
    : Object.keys(n).some((i) => De(i) === s);
}
const ri = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return L(t) ? (n) => hn(t, n) : t;
};
function Kl(e) {
  e.target.composing = !0;
}
function li(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const Wn = Symbol("_assign");
function ci(e, t, n) {
  return t && (e = e.trim()), n && (e = fs(e)), e;
}
const dn = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
      e[Wn] = ri(i);
      const o = s || (i.props && i.props.type === "number");
      Pt(e, t ? "change" : "input", (r) => {
        r.target.composing || e[Wn](ci(e.value, n, o));
      }),
        (n || o) &&
          Pt(e, "change", () => {
            e.value = ci(e.value, n, o);
          }),
        t ||
          (Pt(e, "compositionstart", Kl),
          Pt(e, "compositionend", li),
          Pt(e, "change", li));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: o } },
      r
    ) {
      if (((e[Wn] = ri(r)), e.composing)) return;
      const l =
          (o || e.type === "number") && !/^0\d/.test(e.value)
            ? fs(e.value)
            : e.value,
        c = t ?? "";
      l !== c &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          ((s && t === n) || (i && e.value.trim() === c))) ||
          (e.value = c));
    },
  },
  Bl = ["ctrl", "shift", "alt", "meta"],
  Wl = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => Bl.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  yo = (e, t) => {
    if (!e) return e;
    const n = e._withMods || (e._withMods = {}),
      s = t.join(".");
    return (
      n[s] ||
      (n[s] = (i, ...o) => {
        for (let r = 0; r < t.length; r++) {
          const l = Wl[t[r]];
          if (l && l(i, t)) return;
        }
        return e(i, ...o);
      })
    );
  },
  Vl = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  ql = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join(".");
    return (
      n[s] ||
      (n[s] = (i) => {
        if (!("key" in i)) return;
        const o = pt(i.key);
        if (t.some((r) => r === o || Vl[r] === o)) return e(i);
      })
    );
  },
  Yl = fe({ patchProp: Nl }, Tl);
let ai;
function Gl() {
  return ai || (ai = sl(Yl));
}
const Xl = (...e) => {
  const t = Gl().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const i = Jl(s);
      if (!i) return;
      const o = t._component;
      !U(o) && !o.render && !o.template && (o.template = i.innerHTML),
        i.nodeType === 1 && (i.textContent = "");
      const r = n(i, !1, Zl(i));
      return (
        i instanceof Element &&
          (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")),
        r
      );
    }),
    t
  );
};
function Zl(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Jl(e) {
  return ce(e) ? document.querySelector(e) : e;
}
const Ql = ["id"],
  ec = { class: "about__panel" },
  tc = { class: "about__roulette" },
  nc = { class: "about__quote" },
  sc = { class: "about__media" },
  ic = ["src", "alt"],
  oc = { class: "about__caption" },
  rc = rt({
    __name: "AboutSection",
    props: { sectionId: {}, aboutScene: {} },
    setup(e) {
      const t = e,
        n = [
          "Dickey does not freeze. Markets do.",
          "If confidence had a warning label, it would say: Handle Dickey with care.",
          "Close your mouth. Dickey can smell weak conviction.",
          "Some fold under pressure. Dickey folds pressure itself.",
          "The room gets awkward when Dickey starts being right again.",
          "Cartoon face. Steel backbone. Terrible influence.",
          "Dickey is permanently switched to bold mode.",
        ],
        s = V(0),
        i = se(() => n[s.value]),
        o = () => {
          let r = s.value;
          for (; r === s.value && n.length > 1; )
            r = Math.floor(Math.random() * n.length);
          s.value = r;
        };
      return (r, l) => (
        J(),
        oe(
          "section",
          { id: t.sectionId, class: "about" },
          [
            w("div", ec, [
              l[0] ||
                (l[0] = w(
                  "p",
                  { class: "about__eyebrow" },
                  "About ชั้ง",
                  -1
                )),
              l[1] ||
                (l[1] = w(
                  "h2",
                  { class: "about__title" },
                  "The Chubby Elephant",
                  -1
                )),
              l[2] ||
                (l[2] = w(
                  "p",
                  { class: "about__description" },
                  "This baby elephant is absolutely taking over X right now.Over 1.5M views in just 4 hours, and the internet can’t get enough of the tiny elephant yelling “ช้าง” in the cutest way possible. 😭🐘The chunky little elephant energy, the scream, the chaos — it’s basically the perfect meme template. Feels like we just unlocked the next global cute animal obsession overnight.",
                  -1
                )),
            ]),
            w("figure", sc, [
              w(
                "img",
                {
                  src: t.aboutScene.src,
                  alt: t.aboutScene.alt,
                  class: "about__image",
                },
                null,
                8,
                ic
              ),
              w("figcaption", oc, ye(t.aboutScene.quote), 1),
            ]),
          ],
          8,
          Ql
        )
      );
    },
  }),
  gt = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, i] of t) n[s] = i;
    return n;
  },
  lc = gt(rc, [["__scopeId", "data-v-d1590810"]]),
  cc = { class: "sky-overlay", "aria-hidden": "true" },
  ui = 1536,
  fi = 1024,
  ac = rt({
    __name: "BackgroundSkyOverlay",
    setup(e) {
      const t = [
          { nx: 0.1569, ny: 0.1315, size: 2.8, intensity: 0.95 },
          { nx: 0.5454, ny: 0.2342, size: 2.6, intensity: 0.93 },
          { nx: 0.5861, ny: 0.1129, size: 2.2, intensity: 0.9 },
          { nx: 0.2028, ny: 0.0939, size: 2.25, intensity: 0.9 },
          { nx: 0.6221, ny: 0.0786, size: 2.15, intensity: 0.87 },
          { nx: 0.6129, ny: 0.189, size: 2.1, intensity: 0.86 },
          { nx: 0.7269, ny: 0.0524, size: 2.05, intensity: 0.85 },
          { nx: 0.4477, ny: 0.059, size: 2.05, intensity: 0.85 },
          { nx: 0.6548, ny: 0.0317, size: 1.95, intensity: 0.84 },
          { nx: 0.5156, ny: 0.1213, size: 1.95, intensity: 0.83 },
          { nx: 0.5768, ny: 0.2822, size: 1.9, intensity: 0.82 },
          { nx: 0.1865, ny: 0.2983, size: 1.85, intensity: 0.81 },
          { nx: 0.6232, ny: 0.3605, size: 1.8, intensity: 0.78 },
          { nx: 0.1714, ny: 0.3641, size: 1.72, intensity: 0.76 },
          { nx: 0.5096, ny: 0.3701, size: 1.64, intensity: 0.74 },
          { nx: 0.3857, ny: 0.4044, size: 1.58, intensity: 0.72 },
          { nx: 0.2244, ny: 0.3936, size: 1.5, intensity: 0.69 },
        ],
        n = { nx: 0.3145, ny: 0.2215, size: 172, intensity: 0.72 },
        s = V(typeof window < "u" ? window.innerWidth : 1536),
        i = V(typeof window < "u" ? window.innerHeight : 1024),
        o = se(() => {
          const m = Math.max(s.value / ui, i.value / fi),
            x = ui * m,
            O = fi * m,
            P = (s.value - x) / 2,
            B = (i.value - O) / 2;
          return { scale: m, renderW: x, renderH: O, offsetX: P, offsetY: B };
        }),
        r = (m) => {
          const x = o.value.offsetX + m.nx * o.value.renderW,
            O = o.value.offsetY + m.ny * o.value.renderH,
            P = x >= -40 && x <= s.value + 40 && O >= -40 && O <= i.value + 40;
          return { x, y: O, visible: P };
        },
        l = se(() =>
          t
            .map((m, x) => {
              const O = r(m);
              return {
                id: `star-${x}`,
                x: O.x,
                y: O.y,
                visible: O.visible,
                size: m.size ?? 1.8,
                intensity: m.intensity ?? 0.82,
                duration: 4.8 + (x % 5) * 0.9,
                delay: -0.35 * x,
              };
            })
            .filter((m) => m.visible)
        ),
        c = se(() => ({ ...r(n), size: n.size, intensity: n.intensity })),
        d = (m) => ({
          left: `${m.x.toFixed(2)}px`,
          top: `${m.y.toFixed(2)}px`,
          "--star-size": `${m.size}px`,
          "--star-opacity": m.intensity.toFixed(3),
          "--twinkle-duration": `${m.duration.toFixed(2)}s`,
          "--twinkle-delay": `${m.delay.toFixed(2)}s`,
        }),
        f = se(() => ({
          left: `${c.value.x.toFixed(2)}px`,
          top: `${c.value.y.toFixed(2)}px`,
          "--moon-size": `${c.value.size}px`,
          "--moon-opacity": c.value.intensity.toFixed(3),
        })),
        p = () => {
          (s.value = window.innerWidth), (i.value = window.innerHeight);
        };
      return (
        sn(() => {
          window.addEventListener("resize", p),
            window.addEventListener("orientationchange", p);
        }),
        Tt(() => {
          window.removeEventListener("resize", p),
            window.removeEventListener("orientationchange", p);
        }),
        (m, x) => (
          J(),
          oe("div", cc, [
            (J(!0),
            oe(
              me,
              null,
              on(
                l.value,
                (O) => (
                  J(),
                  oe(
                    "span",
                    { key: O.id, class: "sky-star", style: Me(d(O)) },
                    null,
                    4
                  )
                )
              ),
              128
            )),
            w("span", { class: "moon-glow", style: Me(f.value) }, null, 4),
          ])
        )
      );
    },
  }),
  uc = gt(ac, [["__scopeId", "data-v-8e4bc7fd"]]),
  dt = {
    contract: "0xcomingsoon",
    twitterUrl: "https://x.com/ChubbyElephantX",
    telegramUrl: "https://t.me/ChubbyElephant",
    adminPassword: "2323",
  },
  Ts = "dickey_admin_unlocked",
  $n = "dickey_admin_password",
  Es = "/api/site-config",
  Et = typeof window < "u",
  Sn = (e, t) => (typeof e != "string" ? t : e.trim() || t),
  Cn = (e, t) => {
    const n = Sn(e, t);
    return n.startsWith("http://") || n.startsWith("https://")
      ? n
      : `https://${n.replace(/^\/+/, "")}`;
  },
  vo = (e) => ({
    contract: Sn(e.contract, dt.contract),
    twitterUrl: Cn(e.twitterUrl, dt.twitterUrl),
    telegramUrl: Cn(e.telegramUrl, dt.telegramUrl),
  }),
  bo = (e) => (!e || typeof e != "object" ? null : vo(e)),
  wo = () => {
    if (!Et) return { ...dt };
    const e = window.DICKEY_CONFIG ?? {};
    return {
      contract: Sn(e.contract, dt.contract),
      twitterUrl: Cn(e.twitterUrl, dt.twitterUrl),
      telegramUrl: Cn(e.telegramUrl, dt.telegramUrl),
      adminPassword: Sn(e.adminPassword, dt.adminPassword),
    };
  },
  St = V(wo()),
  fc = V(
    Et && new URLSearchParams(window.location.search).get("admin") === "1"
  ),
  Ms = V(
    Et &&
      window.sessionStorage.getItem(Ts) === "1" &&
      !!window.sessionStorage.getItem($n)
  ),
  xo = V(!1),
  dc = se(() => ({
    contract: St.value.contract,
    twitterUrl: St.value.twitterUrl,
    telegramUrl: St.value.telegramUrl,
  })),
  So = () => {
    (Ms.value = !1),
      Et &&
        (window.sessionStorage.removeItem(Ts),
        window.sessionStorage.removeItem($n));
  },
  Co = () => (Et ? window.sessionStorage.getItem($n) ?? "" : ""),
  To = (e) => {
    St.value = { ...St.value, ...e };
  },
  hc = async () => {
    if (Et)
      try {
        const e = await fetch(Es, {
          method: "GET",
          headers: { Accept: "application/json" },
          cache: "no-store",
        });
        if (!e.ok) throw new Error("Remote config fetch failed.");
        const t = await e.json(),
          n = bo(t.config);
        n && To(n);
      } catch {
      } finally {
        xo.value = !0;
      }
  };
hc();
const pc = async (e) => {
    const t = vo(e),
      n = Co(),
      s = await fetch(Es, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-password": n },
        body: JSON.stringify(t),
      });
    if (!s.ok)
      throw s.status === 401
        ? (So(), new Error("Session expired. Enter password again."))
        : new Error("Save failed.");
    const i = await s.json(),
      o = bo(i.config);
    To(o ?? t);
  },
  gc = async () => {
    const e = Co(),
      t = await fetch(Es, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-password": e },
        body: JSON.stringify({ reset: !0 }),
      });
    if (!t.ok)
      throw t.status === 401
        ? (So(), new Error("Session expired. Enter password again."))
        : new Error("Reset failed.");
    St.value = wo();
  },
  mc = (e) => {
    const t = e.trim();
    return t !== St.value.adminPassword
      ? !1
      : ((Ms.value = !0),
        Et &&
          (window.sessionStorage.setItem(Ts, "1"),
          window.sessionStorage.setItem($n, t)),
        !0);
  },
  Eo = () => ({
    publicConfig: dc,
    isRemoteReady: xo,
    canShowAdminPanel: fc,
    isAdminUnlocked: Ms,
    saveConfig: pc,
    resetConfig: gc,
    unlockAdmin: mc,
  }),
  _c = { class: "config-panel", "aria-label": "Admin config panel" },
  yc = { class: "config-panel__card" },
  vc = { key: 0, class: "config-panel__auth" },
  bc = { key: 0, class: "config-panel__error" },
  wc = { class: "config-panel__status" },
  xc = { class: "config-panel__field" },
  Sc = { class: "config-panel__field" },
  Cc = { class: "config-panel__field" },
  Tc = { class: "config-panel__actions" },
  Ec = ["disabled"],
  Mc = ["disabled"],
  Ic = { key: 0, class: "config-panel__error" },
  Pc = { key: 1, class: "config-panel__ok" },
  Ac = rt({
    __name: "ConfigPanel",
    setup(e) {
      const {
          publicConfig: t,
          isAdminUnlocked: n,
          isRemoteReady: s,
          unlockAdmin: i,
          saveConfig: o,
          resetConfig: r,
        } = Eo(),
        l = V(""),
        c = V(""),
        d = V(""),
        f = V(""),
        p = V(!1),
        m = tn({
          contract: t.value.contract,
          twitterUrl: t.value.twitterUrl,
          telegramUrl: t.value.telegramUrl,
        });
      let x = null;
      const O = () => {
          x !== null && (window.clearTimeout(x), (x = null));
        },
        P = (D) => {
          (d.value = D),
            O(),
            (x = window.setTimeout(() => {
              (d.value = ""), (x = null);
            }, 1400));
        };
      Ft(
        t,
        (D) => {
          (m.contract = D.contract),
            (m.twitterUrl = D.twitterUrl),
            (m.telegramUrl = D.telegramUrl);
        },
        { deep: !0 }
      );
      const B = () => {
          if (((c.value = ""), (f.value = ""), !i(l.value))) {
            c.value = "Wrong password.";
            return;
          }
          l.value = "";
        },
        z = () => {
          (f.value = ""),
            (p.value = !0),
            o({
              contract: m.contract,
              twitterUrl: m.twitterUrl,
              telegramUrl: m.telegramUrl,
            })
              .then(() => {
                P("Saved globally");
              })
              .catch((D) => {
                f.value = D instanceof Error ? D.message : "Save failed.";
              })
              .finally(() => {
                p.value = !1;
              });
        },
        j = () => {
          (f.value = ""),
            (p.value = !0),
            r()
              .then(() => {
                P("Reset to config.js");
              })
              .catch((D) => {
                f.value = D instanceof Error ? D.message : "Reset failed.";
              })
              .finally(() => {
                p.value = !1;
              });
        };
      return (
        Tt(() => {
          O();
        }),
        (D, E) => (
          J(),
          oe("aside", _c, [
            w("div", yc, [
              E[7] ||
                (E[7] = w(
                  "p",
                  { class: "config-panel__label" },
                  "Admin Panel",
                  -1
                )),
              Ee(n)
                ? (J(),
                  oe(
                    "form",
                    {
                      key: 1,
                      class: "config-panel__form",
                      onSubmit: yo(z, ["prevent"]),
                    },
                    [
                      w(
                        "p",
                        wc,
                        ye(Ee(s) ? "Redis sync online" : "Connecting Redis..."),
                        1
                      ),
                      w("label", xc, [
                        E[4] || (E[4] = w("span", null, "Contract", -1)),
                        fn(
                          w(
                            "input",
                            {
                              "onUpdate:modelValue":
                                E[1] || (E[1] = (H) => (m.contract = H)),
                              type: "text",
                              class: "config-panel__input",
                              autocomplete: "off",
                            },
                            null,
                            512
                          ),
                          [[dn, m.contract]]
                        ),
                      ]),
                      w("label", Sc, [
                        E[5] || (E[5] = w("span", null, "Twitter", -1)),
                        fn(
                          w(
                            "input",
                            {
                              "onUpdate:modelValue":
                                E[2] || (E[2] = (H) => (m.twitterUrl = H)),
                              type: "text",
                              class: "config-panel__input",
                              autocomplete: "off",
                            },
                            null,
                            512
                          ),
                          [[dn, m.twitterUrl]]
                        ),
                      ]),
                      w("label", Cc, [
                        E[6] || (E[6] = w("span", null, "Telegram", -1)),
                        fn(
                          w(
                            "input",
                            {
                              "onUpdate:modelValue":
                                E[3] || (E[3] = (H) => (m.telegramUrl = H)),
                              type: "text",
                              class: "config-panel__input",
                              autocomplete: "off",
                            },
                            null,
                            512
                          ),
                          [[dn, m.telegramUrl]]
                        ),
                      ]),
                      w("div", Tc, [
                        w(
                          "button",
                          {
                            type: "submit",
                            class:
                              "config-panel__btn config-panel__btn--primary",
                            disabled: p.value,
                          },
                          ye(p.value ? "Saving..." : "Save"),
                          9,
                          Ec
                        ),
                        w(
                          "button",
                          {
                            type: "button",
                            class: "config-panel__btn",
                            disabled: p.value,
                            onClick: j,
                          },
                          " Reset ",
                          8,
                          Mc
                        ),
                      ]),
                      f.value ? (J(), oe("p", Ic, ye(f.value), 1)) : xt("", !0),
                      d.value ? (J(), oe("p", Pc, ye(d.value), 1)) : xt("", !0),
                    ],
                    32
                  ))
                : (J(),
                  oe("div", vc, [
                    fn(
                      w(
                        "input",
                        {
                          "onUpdate:modelValue":
                            E[0] || (E[0] = (H) => (l.value = H)),
                          type: "password",
                          class: "config-panel__input",
                          placeholder: "Password",
                          autocomplete: "off",
                          onKeyup: ql(B, ["enter"]),
                        },
                        null,
                        544
                      ),
                      [[dn, l.value]]
                    ),
                    w(
                      "button",
                      {
                        type: "button",
                        class: "config-panel__btn config-panel__btn--primary",
                        onClick: B,
                      },
                      " Unlock "
                    ),
                    c.value ? (J(), oe("p", bc, ye(c.value), 1)) : xt("", !0),
                  ])),
            ]),
          ])
        )
      );
    },
  }),
  Oc = gt(Ac, [["__scopeId", "data-v-5d41fc3a"]]),
  kc = { class: "floating-nav", "aria-label": "Primary" },
  Fc = { class: "tab-list" },
  $c = ["onClick"],
  Dc = { class: "tab-label" },
  Rc = rt({
    __name: "FloatingComicNav",
    props: { sections: {}, activeSection: {} },
    emits: ["navigate"],
    setup(e, { emit: t }) {
      const n = t,
        s = ["-3deg", "2deg", "-2deg", "3deg", "-1deg"],
        i = (o) => s[o % s.length];
      return (o, r) => (
        J(),
        oe("nav", kc, [
          w("ul", Fc, [
            (J(!0),
            oe(
              me,
              null,
              on(
                e.sections,
                (l, c) => (
                  J(),
                  oe("li", { key: l.id, class: "tab-item" }, [
                    w(
                      "button",
                      {
                        type: "button",
                        class: Ct([
                          "tab-button",
                          { "tab-button--active": e.activeSection === l.id },
                        ]),
                        style: Me({ "--tilt": i(c) }),
                        onClick: (d) => n("navigate", l.id),
                      },
                      [
                        r[0] ||
                          (r[0] = w(
                            "span",
                            { class: "tab-dot", "aria-hidden": "true" },
                            null,
                            -1
                          )),
                        w("span", Dc, ye(l.label), 1),
                      ],
                      14,
                      $c
                    ),
                  ])
                )
              ),
              128
            )),
          ]),
        ])
      );
    },
  }),
  Lc = gt(Rc, [["__scopeId", "data-v-b9a23f1d"]]),
  Uc = ["id"],
  jc = ["onClick"],
  Nc = ["src", "alt"],
  Hc = { class: "lightbox__shell" },
  zc = ["src", "alt"],
  Kc = { class: "lightbox__meta" },
  Bc = { class: "lightbox__title" },
  Wc = { class: "lightbox__quote" },
  Vc = { class: "lightbox__actions" },
  qc = rt({
    __name: "GallerySection",
    props: { sectionId: {}, scenes: {} },
    setup(e) {
      const t = e,
        n = V(null),
        s = V(typeof window < "u" ? window.innerWidth : 1200),
        i = V(-10),
        o = V(16),
        r = V(0),
        l = V(0),
        c = V(0),
        d = tn({ active: !1, id: -1, x: 0, y: 0, ts: 0 }),
        f = (h, M, A) => Math.min(A, Math.max(M, h)),
        p = se(() => t.scenes),
        m = se(() => (s.value < 520 ? 160 : s.value < 980 ? 212 : 262)),
        x = se(() =>
          s.value < 520
            ? { width: 116, height: 142 }
            : s.value < 980
            ? { width: 132, height: 162 }
            : { width: 144, height: 178 }
        ),
        O = se(() => (s.value < 768 ? 0.06 : 0.045)),
        P = se(() => ({
          "--sphere-radius": `${m.value}px`,
          "--card-width": `${x.value.width}px`,
          "--card-height": `${x.value.height}px`,
        })),
        B = se(() => ({
          "--rot-x": `${i.value.toFixed(3)}deg`,
          "--rot-y": `${o.value.toFixed(3)}deg`,
        })),
        z = se(() => {
          const h = p.value.length;
          if (!h) return [];
          const M = [],
            A = Math.PI * (3 - Math.sqrt(5)),
            k = 2 / h;
          for (let N = 0; N < h; N += 1) {
            const X = p.value[N];
            if (!X) continue;
            const ie = N * k - 1 + k / 2,
              le = Math.sqrt(1 - ie * ie),
              ae = N * A;
            M.push({
              scene: X,
              x: Math.cos(ae) * le,
              y: ie,
              z: Math.sin(ae) * le,
            });
          }
          return M;
        }),
        j = (h, M, A) => {
          const k = (M * Math.PI) / 180,
            N = (A * Math.PI) / 180,
            X = Math.cos(k),
            ie = Math.sin(k),
            le = Math.cos(N),
            ae = Math.sin(N),
            $e = h.y * ie + h.z * X;
          return { z: -h.x * ae + $e * le };
        },
        D = se(() =>
          z.value.map((h) => {
            const M = j(h, i.value, o.value),
              A = (M.z + 1) / 2;
            return { ...h, depth: A, frontFacing: M.z > 0.08 };
          })
        ),
        E = (h) => {
          const M = h.x * m.value,
            A = h.y * m.value,
            k = h.z * m.value,
            N = 0.74 + h.depth * 0.34,
            X = 0.28 + h.depth * 0.72,
            ie = 0.62 + h.depth * 0.5;
          return {
            transform: `translate3d(${M.toFixed(2)}px, ${A.toFixed(
              2
            )}px, ${k.toFixed(2)}px) scale(${N.toFixed(3)})`,
            opacity: X.toFixed(3),
            filter: `brightness(${ie.toFixed(3)})`,
            zIndex: String(100 + Math.round(h.depth * 900)),
            pointerEvents: h.frontFacing ? "auto" : "none",
          };
        },
        H = se(() =>
          n.value ? p.value.findIndex((h) => h.id === n.value) : -1
        ),
        ue = se(() => {
          const h = H.value;
          return h >= 0 ? p.value[h] : null;
        }),
        be = (h) => {
          h.frontFacing && (n.value = h.scene.id);
        },
        we = () => {
          n.value = null;
        },
        Fe = (h) => {
          if (!p.value.length) return;
          const A =
              ((H.value < 0 ? 0 : H.value) + h + p.value.length) %
              p.value.length,
            k = p.value[A];
          k && (n.value = k.id);
        },
        Ae = (h) => {
          if (n.value) {
            if (h.key === "Escape") {
              we();
              return;
            }
            if (h.key === "ArrowRight") {
              h.preventDefault(), Fe(1);
              return;
            }
            h.key === "ArrowLeft" && (h.preventDefault(), Fe(-1));
          }
        };
      Ft(p, (h) => {
        if (!n.value) return;
        h.some((A) => A.id === n.value) || (n.value = h[0]?.id ?? null);
      }),
        Ft(n, (h) => {
          document.body.style.overflow = h ? "hidden" : "";
        });
      const Ge = (h) => {
          h.currentTarget.setPointerCapture(h.pointerId),
            (d.active = !0),
            (d.id = h.pointerId),
            (d.x = h.clientX),
            (d.y = h.clientY),
            (d.ts = h.timeStamp),
            (r.value = 0),
            (l.value = 0),
            (c.value = h.timeStamp + 550);
        },
        Xe = (h) => {
          if (!d.active || d.id !== h.pointerId) return;
          h.preventDefault();
          const M = h.clientX - d.x,
            A = h.clientY - d.y,
            k = Math.max(8, h.timeStamp - d.ts),
            N = s.value < 768 ? 0.2 : 0.18;
          (o.value += M * N),
            (i.value = f(i.value - A * N, -70, 70)),
            (l.value = (M / k) * 2.4),
            (r.value = (-A / k) * 2.2),
            (d.x = h.clientX),
            (d.y = h.clientY),
            (d.ts = h.timeStamp),
            (c.value = h.timeStamp + 550);
        },
        ct = (h) => {
          if (d.id !== h.pointerId) return;
          const M = h.currentTarget;
          M.hasPointerCapture(h.pointerId) &&
            M.releasePointerCapture(h.pointerId),
            (d.active = !1),
            (d.id = -1),
            (c.value = h.timeStamp + 300);
        },
        mt = (h) => {
          d.id === h.pointerId &&
            ((d.active = !1), (d.id = -1), (c.value = h.timeStamp + 280));
        };
      let at = 0,
        re = 0;
      const G = (h) => {
          const M = re ? Math.min(2.2, (h - re) / 16.6667) : 1;
          if (((re = h), !d.active))
            if (Math.abs(r.value) > 0.002 || Math.abs(l.value) > 0.002) {
              (i.value = f(i.value + r.value * M, -70, 70)),
                (o.value += l.value * M);
              const k = Math.pow(0.91, M);
              (r.value *= k), (l.value *= k);
            } else h > c.value && (o.value += O.value * M);
          at = window.requestAnimationFrame(G);
        },
        W = () => {
          s.value = window.innerWidth;
        };
      return (
        sn(() => {
          window.addEventListener("keydown", Ae),
            window.addEventListener("resize", W),
            (at = window.requestAnimationFrame(G));
        }),
        Tt(() => {
          window.removeEventListener("keydown", Ae),
            window.removeEventListener("resize", W),
            window.cancelAnimationFrame(at),
            (document.body.style.overflow = "");
        }),
        (h, M) => (
          J(),
          oe(
            "section",
            { id: t.sectionId, class: "gallery" },
            [
              M[2] ||
                (M[2] = w(
                  "div",
                  { class: "gallery__header" },
                  [
                    w("p", { class: "gallery__eyebrow" }, "Gallery"),
                    w("h2", { class: "gallery__title" }, "ชั้ง"),
                    w(
                      "p",
                      { class: "gallery__hint" },
                      "Drag up/down/sideways to spin the sphere."
                    ),
                  ],
                  -1
                )),
              w(
                "div",
                {
                  class: "sphere-stage",
                  style: Me(P.value),
                  onPointerdown: Ge,
                  onPointermove: Xe,
                  onPointerup: ct,
                  onPointercancel: mt,
                },
                [
                  w(
                    "div",
                    { class: "sphere-track", style: Me(B.value) },
                    [
                      (J(!0),
                      oe(
                        me,
                        null,
                        on(
                          D.value,
                          (A) => (
                            J(),
                            oe(
                              "button",
                              {
                                key: A.scene.id,
                                type: "button",
                                class: "sphere-node",
                                style: Me(E(A)),
                                onClick: (k) => be(A),
                              },
                              [
                                w(
                                  "img",
                                  {
                                    src: A.scene.src,
                                    alt: A.scene.alt,
                                    class: "sphere-node__image",
                                    loading: "lazy",
                                  },
                                  null,
                                  8,
                                  Nc
                                ),
                              ],
                              12,
                              jc
                            )
                          )
                        ),
                        128
                      )),
                    ],
                    4
                  ),
                ],
                36
              ),
              ue.value
                ? (J(),
                  oe(
                    "div",
                    {
                      key: 0,
                      class: "lightbox",
                      role: "dialog",
                      "aria-modal": "true",
                      onClick: yo(we, ["self"]),
                    },
                    [
                      w("div", Hc, [
                        w(
                          "button",
                          {
                            type: "button",
                            class: "lightbox__close",
                            onClick: we,
                            "aria-label": "Close gallery",
                          },
                          " × "
                        ),
                        w(
                          "img",
                          {
                            src: ue.value.src,
                            alt: ue.value.alt,
                            class: "lightbox__image",
                          },
                          null,
                          8,
                          zc
                        ),
                        w("div", Kc, [
                          w("h3", Bc, ye(ue.value.title), 1),
                          w("p", Wc, ye(ue.value.quote), 1),
                        ]),
                        w("div", Vc, [
                          w(
                            "button",
                            {
                              type: "button",
                              class: "lightbox__arrow",
                              "aria-label": "Previous",
                              onClick: M[0] || (M[0] = (A) => Fe(-1)),
                            },
                            " ← "
                          ),
                          w(
                            "button",
                            {
                              type: "button",
                              class: "lightbox__arrow",
                              "aria-label": "Next",
                              onClick: M[1] || (M[1] = (A) => Fe(1)),
                            },
                            " → "
                          ),
                        ]),
                      ]),
                    ]
                  ))
                : xt("", !0),
            ],
            8,
            Uc
          )
        )
      );
    },
  }),
  Yc = gt(qc, [["__scopeId", "data-v-d771d501"]]),
  Gc = ["id"],
  Xc = { class: "hero__copy" },
  Zc = { class: "hero__bubbles" },
  Jc = { class: "hero__actions" },
  Qc = ["href"],
  ea = ["href"],
  ta = ["aria-label", "title"],
  na = { class: "hero__art" },
  sa = ["src", "alt"],
  ia = { key: 0, class: "hero__sticker" },
  oa = rt({
    __name: "HeroSection",
    props: {
      sectionId: {},
      heroScene: {},
      contractAddress: {},
      twitterUrl: {},
      telegramUrl: {},
    },
    setup(e) {
      const t = e,
        n = [
          "Built for the timeline, allergic to mediocrity.",
          "Literally a new cute animal meme template just unlocked",
          "This baby elephant is exploding on X ",
        ],
        s = V(!1);
      let i = null;
      const o = async () => {
        try {
          if (navigator.clipboard?.writeText)
            await navigator.clipboard.writeText(t.contractAddress);
          else {
            const r = document.createElement("textarea");
            (r.value = t.contractAddress),
              r.setAttribute("readonly", ""),
              (r.style.position = "absolute"),
              (r.style.left = "-9999px"),
              document.body.appendChild(r),
              r.select(),
              document.execCommand("copy"),
              r.remove();
          }
          (s.value = !0),
            i !== null && window.clearTimeout(i),
            (i = window.setTimeout(() => {
              (s.value = !1), (i = null);
            }, 1300));
        } catch {
          s.value = !1;
        }
      };
      return (
        Tt(() => {
          i !== null && window.clearTimeout(i);
        }),
        (r, l) => (
          J(),
          oe(
            "section",
            { id: t.sectionId, class: "hero" },
            [
              w("div", Xc, [
                l[2] ||
                  (l[2] = w("h1", { class: "hero__title" }, "ชั้ง", -1)),
                w("div", Zc, [
                  (J(),
                  oe(
                    me,
                    null,
                    on(n, (c) =>
                      w("p", { key: c, class: "hero__bubble" }, ye(c), 1)
                    ),
                    64
                  )),
                ]),
                w("div", Jc, [
                  w(
                    "a",
                    {
                      href: t.twitterUrl,
                      target: "_blank",
                      rel: "noreferrer",
                      class: "hero__btn hero__btn--primary",
                      "aria-label": "Twitter / X",
                      title: "Twitter / X",
                    },
                    [
                      ...(l[0] ||
                        (l[0] = [
                          w(
                            "svg",
                            {
                              viewBox: "0 0 24 24",
                              "aria-hidden": "true",
                              class: "hero__btn-icon",
                            },
                            [
                              w("path", {
                                d: "M18.901 2H21.99l-6.74 7.704L23.5 22h-6.463l-5.058-6.962L5.886 22H2.795l7.21-8.241L.5 2h6.627l4.572 6.292L18.901 2Zm-1.084 18.13h1.712L6.196 3.774H4.36L17.817 20.13Z",
                                fill: "currentColor",
                              }),
                            ],
                            -1
                          ),
                        ])),
                    ],
                    8,
                    Qc
                  ),
                  w(
                    "a",
                    {
                      href: t.telegramUrl,
                      target: "_blank",
                      rel: "noreferrer",
                      class: "hero__btn hero__btn--ghost",
                      "aria-label": "Telegram",
                      title: "Telegram",
                    },
                    [
                      ...(l[1] ||
                        (l[1] = [
                          w(
                            "svg",
                            {
                              viewBox: "0 0 24 24",
                              "aria-hidden": "true",
                              class: "hero__btn-icon",
                            },
                            [
                              w("path", {
                                d: "M21.94 4.18a1.2 1.2 0 0 0-1.26-.2L2.76 10.8a1.2 1.2 0 0 0 .07 2.26l4.16 1.36 1.6 5.1a1.2 1.2 0 0 0 2.03.47l2.35-2.45 4.15 3.06a1.2 1.2 0 0 0 1.9-.69L22.98 5.3a1.2 1.2 0 0 0-1.04-1.12ZM9.2 13.5l8.95-5.4-7 6.85-.27 2.75L9.2 13.5Z",
                                fill: "currentColor",
                              }),
                            ],
                            -1
                          ),
                        ])),
                    ],
                    8,
                    ea
                  ),
                ]),
                w(
                  "button",
                  {
                    type: "button",
                    class: Ct([
                      "hero__contract",
                      { "hero__contract--copied": s.value },
                    ]),
                    "aria-label": s.value ? "Contract copied" : "Copy contract",
                    title: s.value ? "Copied" : "Click to copy contract",
                    onClick: o,
                  },
                  ye(t.contractAddress),
                  11,
                  ta
                ),
              ]),
              w("div", na, [
                w(
                  "img",
                  {
                    src: t.heroScene.src,
                    alt: t.heroScene.alt,
                    class: "hero__image",
                  },
                  null,
                  8,
                  sa
                ),
                t.heroScene.mood
                  ? (J(), oe("div", ia, ye(t.heroScene.mood), 1))
                  : xt("", !0),
              ]),
            ],
            8,
            Gc
          )
        )
      );
    },
  }),
  ra = gt(oa, [["__scopeId", "data-v-e56b1740"]]),
  la = { class: "loader-overlay__content" },
  ca = ["src", "alt"],
  Vn = 900,
  aa = 3e3,
  qn = 700,
  Yn = 3.2,
  ua = rt({
    __name: "LoaderSphereOverlay",
    props: { scenes: {}, exiting: { type: Boolean } },
    setup(e) {
      const t = e,
        n = aa - qn,
        s = V(typeof window < "u" ? window.innerWidth : 1200),
        i = V(!1),
        o = V("spin-up"),
        r = V(-12),
        l = V(14),
        c = V(0.14),
        d = V(0.04),
        f = V(0);
      let p = 0,
        m = 0,
        x = 0,
        O = null;
      const P = (h, M, A) => Math.min(A, Math.max(M, h)),
        B = (h) => 1 - Math.pow(1 - h, 3),
        z = (h) => (h >= 1 ? 1 : 1 - Math.pow(2, -10 * h)),
        j = (h) => {
          let M = 2166136261;
          for (let A = 0; A < h.length; A += 1)
            (M ^= h.charCodeAt(A)), (M = Math.imul(M, 16777619));
          return M >>> 0;
        },
        D = (h) => {
          const M = Math.imul(h ^ (h >>> 15), 2246822519) >>> 0;
          return Math.imul(M ^ (M >>> 13), 3266489917) >>> 0;
        },
        E = (h) => (h & 65535) / 65535,
        H = se(() => (s.value < 520 ? 124 : s.value < 980 ? 168 : 218)),
        ue = se(() =>
          s.value < 520
            ? { width: 90, height: 112 }
            : s.value < 980
            ? { width: 102, height: 126 }
            : { width: 112, height: 138 }
        ),
        be = se(() => ({
          "--sphere-radius": `${H.value}px`,
          "--card-width": `${ue.value.width}px`,
          "--card-height": `${ue.value.height}px`,
        })),
        we = se(() => ({
          "--rot-x": `${r.value.toFixed(3)}deg`,
          "--rot-y": `${l.value.toFixed(3)}deg`,
          "--burst-track-scale": `${(
            1 +
            f.value * (i.value ? 0.05 : 0.14)
          ).toFixed(3)}`,
        })),
        Fe = se(() => ({
          "--shock-power": c.value.toFixed(3),
          "--shock-scale": (1 + c.value * 0.52).toFixed(3),
          "--shock-opacity": (0.1 + c.value * 0.58).toFixed(3),
        })),
        Ae = se(() => ({ opacity: d.value.toFixed(3) })),
        Ge = se(() =>
          Xe.value.reduce((h, M, A) => {
            const k = j(`${M.scene.id}:${A}`),
              N = D(k),
              X = D(N),
              ie = D(X),
              le = D(ie),
              ae = D(le),
              $e = E(N) * 0.34 - 0.17,
              ut = E(X) * 0.34 - 0.17,
              Ze = E(ie) * 0.34 - 0.17,
              ln = M.x + $e,
              a = M.y + ut,
              u = M.z + Ze,
              g = Math.hypot(ln, a, u) || 1;
            return (
              (h[M.scene.id] = {
                dx: ln / g,
                dy: a / g,
                dz: u / g,
                spinY: (380 + E(le) * 660) * (E(X) > 0.5 ? 1 : -1),
                spinZ: (260 + E(ae) * 640) * (E(ie) > 0.5 ? 1 : -1),
              }),
              h
            );
          }, {})
        ),
        Xe = se(() => {
          const h = t.scenes.length;
          if (!h) return [];
          const M = [],
            A = Math.PI * (3 - Math.sqrt(5)),
            k = 2 / h;
          for (let N = 0; N < h; N += 1) {
            const X = t.scenes[N];
            if (!X) continue;
            const ie = N * k - 1 + k / 2,
              le = Math.sqrt(1 - ie * ie),
              ae = N * A;
            M.push({
              scene: X,
              x: Math.cos(ae) * le,
              y: ie,
              z: Math.sin(ae) * le,
            });
          }
          return M;
        }),
        ct = (h, M, A) => {
          const k = (M * Math.PI) / 180,
            N = (A * Math.PI) / 180,
            X = Math.cos(k),
            ie = Math.sin(k),
            le = Math.cos(N),
            ae = Math.sin(N),
            $e = h.y * ie + h.z * X;
          return { z: -h.x * ae + $e * le };
        },
        mt = se(() =>
          Xe.value.map((h) => {
            const M = ct(h, r.value, l.value),
              A = { dx: h.x, dy: h.y, dz: h.z, spinY: 620, spinZ: 520 };
            return {
              ...h,
              depth: (M.z + 1) / 2,
              burst: Ge.value[h.scene.id] ?? A,
            };
          })
        ),
        at = (h) => {
          const M = h.x * H.value,
            A = h.y * H.value,
            k = h.z * H.value,
            N = i.value ? 0.42 : 1,
            X = z(f.value * N),
            ie = H.value * (0.32 + 2.65 * X),
            le = h.burst.dx * ie,
            ae = h.burst.dy * ie,
            $e = h.burst.dz * ie,
            ut = h.burst.spinY * X,
            Ze = h.burst.spinZ * X,
            a = (0.68 + h.depth * 0.38) * (1 - X * 0.22),
            u = P(0.26 + h.depth * 0.74 - X * 0.7, 0, 1),
            g = 0.6 + h.depth * 0.52 + X * 0.24,
            b = 0.15 + X * 1.35;
          return {
            transform: `translate3d(${(M + le).toFixed(2)}px, ${(
              A + ae
            ).toFixed(2)}px, ${(k + $e).toFixed(2)}px) rotateY(${ut.toFixed(
              2
            )}deg) rotateZ(${Ze.toFixed(2)}deg) scale(${a.toFixed(3)})`,
            opacity: u.toFixed(3),
            filter: `brightness(${g.toFixed(3)}) blur(${b.toFixed(2)}px)`,
            zIndex: String(100 + Math.round((h.depth + X * 0.6) * 900)),
          };
        },
        re = () => {
          s.value = window.innerWidth;
        },
        G = (h) => {
          i.value = h.matches;
        },
        W = (h) => {
          x || (x = h);
          const M = m ? Math.min(2.2, (h - m) / 16.6667) : 1;
          m = h;
          const A = h - x;
          if (i.value) {
            o.value = A < n ? "turbo" : "burst";
            const k = P((A - n) / qn, 0, 1),
              N = z(k);
            (f.value = k),
              (l.value += (0.038 + 0.05 * (1 - k)) * M),
              (r.value = -10 + Math.sin(h * 0.0012) * 0.85),
              (c.value = 0.08 + (1 - N) * 0.11),
              (d.value = 0.02 + (1 - N) * 0.025);
          } else if (A < Vn) {
            o.value = "spin-up";
            const k = P(A / Vn, 0, 1),
              N = (0.3 + 1.05 * B(k)) * Yn;
            (f.value = 0),
              (l.value += N * M),
              (r.value = -8 + Math.sin(h * 0.0095) * (0.32 + 0.34 * k)),
              (c.value = 0.12 + 0.14 * k),
              (d.value = 0.04 + 0.04 * k);
          } else if (A < n) {
            o.value = "turbo";
            const k = A - Vn,
              N = (Math.sin((k / 700) * Math.PI * 2 - Math.PI / 2) + 1) / 2;
            (f.value = 0),
              (l.value += (1.45 + Math.sin(h * 0.0045) * 0.12) * Yn * M),
              (r.value = -8 + Math.sin(h * 0.01) * 0.74),
              (c.value = 0.28 + 0.72 * N),
              (d.value = 0.06 + 0.1 * N);
          } else {
            o.value = "burst";
            const k = P((A - n) / qn, 0, 1),
              N = z(k),
              X = Math.exp(-7.8 * k),
              ie = (1.72 * (1 - k) + 0.2 * k) * Yn;
            (f.value = k),
              (l.value += ie * M),
              (r.value = -8 + Math.sin(h * 0.009) * (0.52 * (1 - N))),
              (c.value = 0.2 + 0.95 * X),
              (d.value = 0.03 + 0.34 * X);
          }
          p = window.requestAnimationFrame(W);
        };
      return (
        sn(() => {
          (O = window.matchMedia("(prefers-reduced-motion: reduce)")),
            (i.value = O.matches),
            O.addEventListener("change", G),
            window.addEventListener("resize", re),
            (p = window.requestAnimationFrame(W));
        }),
        Tt(() => {
          O?.removeEventListener("change", G),
            window.removeEventListener("resize", re),
            window.cancelAnimationFrame(p);
        }),
        (h, M) => (
          J(),
          oe(
            "div",
            {
              class: Ct([
                "loader-overlay",
                [
                  `loader-overlay--phase-${o.value}`,
                  { "loader-overlay--exit": t.exiting },
                ],
              ]),
              "aria-hidden": "true",
            },
            [
              M[1] ||
                (M[1] = w(
                  "div",
                  { class: "loader-overlay__backdrop" },
                  null,
                  -1
                )),
              w(
                "div",
                { class: "loader-overlay__flash", style: Me(Ae.value) },
                null,
                4
              ),
              w("div", la, [
                w(
                  "div",
                  { class: "loader-shockwave", style: Me(Fe.value) },
                  [
                    ...(M[0] ||
                      (M[0] = [
                        w(
                          "span",
                          {
                            class:
                              "loader-shockwave__ring loader-shockwave__ring--a",
                          },
                          null,
                          -1
                        ),
                        w(
                          "span",
                          {
                            class:
                              "loader-shockwave__ring loader-shockwave__ring--b",
                          },
                          null,
                          -1
                        ),
                      ])),
                  ],
                  4
                ),
                w(
                  "div",
                  { class: "loader-sphere", style: Me(be.value) },
                  [
                    w(
                      "div",
                      { class: "loader-sphere__track", style: Me(we.value) },
                      [
                        (J(!0),
                        oe(
                          me,
                          null,
                          on(
                            mt.value,
                            (A) => (
                              J(),
                              oe(
                                "article",
                                {
                                  key: A.scene.id,
                                  class: "loader-node",
                                  style: Me(at(A)),
                                },
                                [
                                  w(
                                    "img",
                                    {
                                      src: A.scene.src,
                                      alt: A.scene.alt,
                                      class: "loader-node__image",
                                      loading: "eager",
                                    },
                                    null,
                                    8,
                                    ca
                                  ),
                                ],
                                4
                              )
                            )
                          ),
                          128
                        )),
                      ],
                      4
                    ),
                  ],
                  4
                ),
              ]),
            ],
            2
          )
        )
      );
    },
  }),
  fa = gt(ua, [["__scopeId", "data-v-487d4e10"]]),
  da = { class: "site-footer" },
  ha = { class: "site-footer__actions" },
  pa = { class: "site-footer__social" },
  ga = ["href"],
  ma = ["href"],
  _a = { class: "site-footer__legal" },
  ya = rt({
    __name: "SiteFooter",
    props: { twitterUrl: {}, telegramUrl: {} },
    setup(e) {
      const t = e,
        n = new Date().getFullYear();
      return (s, i) => (
        J(),
        oe("footer", da, [
          i[3] ||
            (i[3] = w("div", { class: "site-footer__badge" }, "ชั้ง", -1)),
          i[4] ||
            (i[4] = w(
              "p",
              { class: "site-footer__line" },
              " Built loud, drawn bold, and allergic to boring timelines. ",
              -1
            )),
          w("div", ha, [
            w("div", pa, [
              w(
                "a",
                {
                  class: "site-footer__link site-footer__link--icon",
                  href: t.twitterUrl,
                  target: "_blank",
                  rel: "noreferrer",
                  "aria-label": "Twitter / X",
                  title: "Twitter / X",
                },
                [
                  ...(i[0] ||
                    (i[0] = [
                      w(
                        "svg",
                        {
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true",
                          class: "site-footer__icon",
                        },
                        [
                          w("path", {
                            d: "M18.901 2H21.99l-6.74 7.704L23.5 22h-6.463l-5.058-6.962L5.886 22H2.795l7.21-8.241L.5 2h6.627l4.572 6.292L18.901 2Zm-1.084 18.13h1.712L6.196 3.774H4.36L17.817 20.13Z",
                            fill: "currentColor",
                          }),
                        ],
                        -1
                      ),
                    ])),
                ],
                8,
                ga
              ),
              w(
                "a",
                {
                  class: "site-footer__link site-footer__link--icon",
                  href: t.telegramUrl,
                  target: "_blank",
                  rel: "noreferrer",
                  "aria-label": "Telegram",
                  title: "Telegram",
                },
                [
                  ...(i[1] ||
                    (i[1] = [
                      w(
                        "svg",
                        {
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true",
                          class: "site-footer__icon",
                        },
                        [
                          w("path", {
                            d: "M21.94 4.18a1.2 1.2 0 0 0-1.26-.2L2.76 10.8a1.2 1.2 0 0 0 .07 2.26l4.16 1.36 1.6 5.1a1.2 1.2 0 0 0 2.03.47l2.35-2.45 4.15 3.06a1.2 1.2 0 0 0 1.9-.69L22.98 5.3a1.2 1.2 0 0 0-1.04-1.12ZM9.2 13.5l8.95-5.4-7 6.85-.27 2.75L9.2 13.5Z",
                            fill: "currentColor",
                          }),
                        ],
                        -1
                      ),
                    ])),
                ],
                8,
                ma
              ),
            ]),
            i[2] ||
              (i[2] = w(
                "a",
                {
                  class: "site-footer__link site-footer__link--ghost",
                  href: "#hero",
                },
                "Back to Top",
                -1
              )),
          ]),
          w(
            "p",
            _a,
            "© " + ye(Ee(n)) + " ชั้ง. No promises. Just presence.",
            1
          ),
        ])
      );
    },
  }),
  va = gt(ya, [["__scopeId", "data-v-d68dc296"]]),
  Nt = [
    {
      id: "red-carpet-arrival",
      title: "Red Carpet Arrival",
      category: "attitude",
      mood: "",
      src: "/media/scenes/attitude/red-carpet-arrival.jpg",
      alt: "Dickey stepping out of a white car onto a red carpet with flashing cameras.",
      quote: "When the world panics, Dickey exits the limo smiling.",
    },
    {
      id: "dock-umbrella-flip",
      title: "Dock Umbrella Flip",
      category: "adventure",
      mood: "sunset rebellion",
      src: "/media/scenes/adventure/dock-umbrella-flip.jpg",
      alt: "Dickey relaxing on a dock chair under an umbrella while making a rebellious gesture.",
      quote: "Storm forecast? Dickey calls it beach weather.",
    },
    {
      id: "burger-counter-flip",
      title: "Burger Counter Flip",
      category: "attitude",
      mood: "service with savage energy",
      src: "/media/scenes/attitude/burger-counter-flip.jpg",
      alt: "Dickey in a fast-food uniform behind a counter with burgers, making a rebellious gesture.",
      quote: "Fast food, slow fear, zero apologies.",
    },
    {
      id: "tree-peek-flip",
      title: "Tree Peek Flip",
      category: "attitude",
      mood: "ambush humor",
      src: "/media/scenes/attitude/tree-peek-flip.jpg",
      alt: "Dickey peeking from behind a tree with a cheeky rebellious gesture.",
      quote: "Close your mouth. Dickey hears hesitation from miles away.",
    },
    {
      id: "trader-desk-flip",
      title: "Trader Desk Flip",
      category: "luxury",
      mood: "boardroom mischief",
      src: "/media/scenes/luxury/trader-desk-flip.jpg",
      alt: "Dickey in a suit at a trading desk with market screens and a sell sign.",
      quote: "Candles drop. Dickey does not.",
    },
    {
      id: "waterfall-meditation-flip",
      title: "Waterfall Meditation Flip",
      category: "attitude",
      mood: "zen chaos",
      src: "/media/scenes/attitude/waterfall-meditation-flip.jpg",
      alt: "Dickey meditating by a waterfall while making rebellious gestures.",
      quote: "Inner peace, outer disrespect.",
    },
    {
      id: "lounge-chair-flip",
      title: "Lounge Chair Flip",
      category: "attitude",
      mood: "late-night interview energy",
      src: "/media/scenes/attitude/lounge-chair-flip.jpg",
      alt: "Dickey lounging confidently in an armchair with a dark curtain backdrop.",
      quote: "Polite society called. Dickey put them on mute.",
    },
    {
      id: "golden-boost-space",
      title: "Golden Boost Space",
      category: "space",
      mood: "cosmic acceleration",
      src: "/media/scenes/space/golden-boost-space.jpg",
      alt: "Dickey flying in space on glowing golden blocks with a dramatic trail.",
      quote: "Gravity is optional when conviction is loud.",
    },
    {
      id: "beach-wave-greeting",
      title: "Beach Wave Greeting",
      category: "adventure",
      mood: "vacation confidence",
      src: "/media/scenes/adventure/beach-wave-greeting.jpg",
      alt: "Dickey standing on a sunny beach and waving with confidence.",
      quote: "Even paradise gets louder when Dickey arrives.",
    },
    {
      id: "living-room-chaos-jump",
      title: "Living Room Chaos Jump",
      category: "adventure",
      mood: "home turf madness",
      src: "/media/scenes/adventure/living-room-chaos-jump.jpg",
      alt: "Dickey jumping enthusiastically in a cozy living room.",
      quote: "Domestic? Yes. Predictable? Never.",
    },
    {
      id: "yacht-sunset-cool",
      title: "Yacht Sunset Cool",
      category: "luxury",
      mood: "quiet flex",
      src: "/media/scenes/luxury/yacht-sunset-cool.jpg",
      alt: "Dickey wearing sunglasses and relaxing on a yacht at sunset.",
      quote: "Soft ocean, hard standards.",
    },
    {
      id: "vault-breakout",
      title: "Vault Breakout",
      category: "attitude",
      mood: "secured confidence",
      src: "/media/scenes/attitude/vault-breakout.jpg",
      alt: "Dickey standing in front of an open vault illuminated from inside.",
      quote:
        "Security update: Dickey is inside the vault and still unimpressed.",
    },
    {
      id: "rocket-launch-rage",
      title: "Rocket Launch Rage",
      category: "space",
      mood: "maximum ignition",
      src: "/media/scenes/space/rocket-launch-rage.jpg",
      alt: "Dickey strapped to a rocket blasting off at sunset.",
      quote: "Countdown finished. Excuses did not.",
    },
    {
      id: "luxury-treasure-lounge",
      title: "Luxury Treasure Lounge",
      category: "luxury",
      mood: "golden chaos",
      src: "/media/scenes/luxury/luxury-treasure-lounge.jpg",
      alt: "Dickey lounging on piles of gems, jewelry, and luxury items.",
      quote: "Wealth is cool. Swagger is mandatory.",
    },
    {
      id: "boss-spotlight-throne",
      title: "Boss Spotlight Throne",
      category: "luxury",
      mood: "executive menace",
      src: "/media/scenes/luxury/boss-spotlight-throne.jpg",
      alt: "Dickey in a dark suit sitting on a chair under a spotlight.",
      quote: "Dickey is the only one still solid when everyone melts.",
    },
    {
      id: "summit-flag-silhouette",
      title: "Summit Flag Silhouette",
      category: "space",
      mood: "mythic ambition",
      src: "/media/scenes/space/summit-flag-silhouette.jpg",
      alt: "Dickey silhouette on a mountain peak holding a white flag under dramatic clouds.",
      quote: "Every summit is just another starting line.",
    },
    {
      id: "gamer-command-center",
      title: "Gamer Command Center",
      category: "attitude",
      mood: "night shift intensity",
      src: "/media/scenes/attitude/gamer-command-center.jpg",
      alt: "Dickey in front of multiple monitors in a blue-lit gaming room.",
      quote: "Sleep mode disabled. Focus mode permanent.",
    },
    {
      id: "astronaut-nebula-drift",
      title: "Astronaut Nebula Drift",
      category: "space",
      mood: "curious cosmic wonder",
      src: "/media/scenes/space/astronaut-nebula-drift.jpg",
      alt: "Dickey floating as an astronaut near a colorful glowing planet in deep space.",
      quote: "Unknown universe. Familiar confidence.",
    },
    {
      id: "moonlit-beach-meditation",
      title: "Moonlit Beach Meditation",
      category: "adventure",
      mood: "quiet night confidence",
      src: "/media/scenes/adventure/moonlit-beach-meditation.jpg",
      alt: "Dickey sitting calmly on a beach at dusk with a crescent moon overhead.",
      quote: "Low tide, high standards.",
    },
  ],
  ba = { class: "page-layout" },
  wa = { class: "content-frame" },
  xa = 3e3,
  Sa = 350,
  Ca = "hero",
  Ta = rt({
    __name: "App",
    setup(e) {
      const t = [
          { id: "hero", label: "Kickoff" },
          { id: "about", label: "Lore" },
          { id: "gallery", label: "Scenes" },
        ],
        n = V("hero"),
        s = Nt[0],
        i = V(!0),
        o = V(!1);
      let r = null,
        l = null;
      if (!s) throw new Error("Scene catalog cannot be empty.");
      const c = () => {
          const O = window.scrollY + window.innerHeight * 0.36;
          let P = Ca;
          t.forEach((B) => {
            const z = document.getElementById(B.id);
            if (!z) return;
            const j = z.offsetTop;
            O >= j - 120 && (P = B.id);
          }),
            (n.value = P);
        },
        d = (O) => {
          const P = document.getElementById(O);
          P && P.scrollIntoView({ behavior: "smooth", block: "start" });
        };
      sn(() => {
        c(),
          window.addEventListener("scroll", c, { passive: !0 }),
          window.addEventListener("resize", c),
          document.body.classList.add("is-loading"),
          (r = window.setTimeout(() => {
            (o.value = !0),
              (l = window.setTimeout(() => {
                (i.value = !1),
                  (o.value = !1),
                  document.body.classList.remove("is-loading");
              }, Sa));
          }, xa));
      }),
        Tt(() => {
          window.removeEventListener("scroll", c),
            window.removeEventListener("resize", c),
            r !== null && (window.clearTimeout(r), (r = null)),
            l !== null && (window.clearTimeout(l), (l = null)),
            document.body.classList.remove("is-loading");
        });
      const f = Nt.find((O) => O.id === "red-carpet-arrival") ?? s,
        p = Nt.find((O) => O.id === "moonlit-beach-meditation") ?? s,
        { publicConfig: m, canShowAdminPanel: x } = Eo();
      return (O, P) => (
        J(),
        oe(
          me,
          null,
          [
            i.value
              ? (J(),
                is(fa, { key: 0, scenes: Ee(Nt), exiting: o.value }, null, 8, [
                  "scenes",
                  "exiting",
                ]))
              : xt("", !0),
            _e(uc),
            w(
              "div",
              { class: Ct(["app-shell", { "app-shell--locked": i.value }]) },
              [
                _e(
                  Lc,
                  { sections: t, "active-section": n.value, onNavigate: d },
                  null,
                  8,
                  ["active-section"]
                ),
                w("div", ba, [
                  w("main", wa, [
                    _e(
                      ra,
                      {
                        "section-id": "hero",
                        "hero-scene": Ee(f),
                        "contract-address": Ee(m).contract,
                        "twitter-url": Ee(m).twitterUrl,
                        "telegram-url": Ee(m).telegramUrl,
                      },
                      null,
                      8,
                      [
                        "hero-scene",
                        "contract-address",
                        "twitter-url",
                        "telegram-url",
                      ]
                    ),
                    _e(
                      lc,
                      { "section-id": "about", "about-scene": Ee(p) },
                      null,
                      8,
                      ["about-scene"]
                    ),
                    _e(
                      Yc,
                      { "section-id": "gallery", scenes: Ee(Nt) },
                      null,
                      8,
                      ["scenes"]
                    ),
                  ]),
                  _e(
                    va,
                    {
                      "twitter-url": Ee(m).twitterUrl,
                      "telegram-url": Ee(m).telegramUrl,
                    },
                    null,
                    8,
                    ["twitter-url", "telegram-url"]
                  ),
                ]),
                Ee(x) ? (J(), is(Oc, { key: 0 })) : xt("", !0),
              ],
              2
            ),
          ],
          64
        )
      );
    },
  });
Xl(Ta).mount("#app");
