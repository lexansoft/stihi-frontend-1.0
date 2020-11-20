var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
      r = e.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      a = n.concat,
      s = n.push,
      u = n.indexOf,
      l = {},
      c = l.toString,
      f = l.hasOwnProperty,
      p = f.toString,
      d = p.call(Object),
      h = {},
      g = function e(t) {
    return "function" == typeof t && "number" != typeof t.nodeType;
  },
      y = function e(t) {
    return null != t && t === t.window;
  },
      v = { type: !0, src: !0, noModule: !0 };function m(e, t, n) {
    var i,
        o = (t = t || r).createElement("script");if (o.text = e, n) for (i in v) {
      n[i] && (o[i] = n[i]);
    }t.head.appendChild(o).parentNode.removeChild(o);
  }function x(e) {
    return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? l[c.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
  }var b = "3.3.1",
      w = function w(e, t) {
    return new w.fn.init(e, t);
  },
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn = w.prototype = { jquery: "3.3.1", constructor: w, length: 0, toArray: function toArray() {
      return o.call(this);
    }, get: function get(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = w.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return w.each(this, e);
    }, map: function map(e) {
      return this.pushStack(w.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function slice() {
      return this.pushStack(o.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: s, sort: n.sort, splice: n.splice }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }return a;
  }, w.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
      var t, n;return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, globalEval: function globalEval(e) {
      m(e);
    }, each: function each(e, t) {
      var n,
          r = 0;if (C(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(T, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : u.call(t, e, n);
    }, merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }return e.length = i, e;
    }, grep: function grep(e, t, n) {
      for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) {
        (r = !t(e[o], o)) !== s && i.push(e[o]);
      }return i;
    }, map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          s = [];if (C(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && s.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && s.push(i);
      }return a.apply([], s);
    }, guid: 1, support: h }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase();
  });function C(e) {
    var t = !!e && "length" in e && e.length,
        n = x(e);return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }var E = function (e) {
    var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y,
        v,
        m,
        x,
        b = "sizzle" + 1 * new Date(),
        w = e.document,
        T = 0,
        C = 0,
        E = ae(),
        k = ae(),
        S = ae(),
        D = function D(e, t) {
      return e === t && (f = !0), 0;
    },
        N = {}.hasOwnProperty,
        A = [],
        j = A.pop,
        q = A.push,
        L = A.push,
        H = A.slice,
        O = function O(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }return -1;
    },
        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
        W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
        $ = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        F = new RegExp("^" + M + "*," + M + "*"),
        _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        X = new RegExp(W),
        U = new RegExp("^" + R + "$"),
        V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + I), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
        G = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ee = function ee(e, t, n) {
      var r = "0x" + t - 65536;return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function ne(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        re = function re() {
      p();
    },
        ie = me(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, { dir: "parentNode", next: "legend" });try {
      L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
    } catch (e) {
      L = { apply: A.length ? function (e, t) {
          q.apply(e, H.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;while (e[n++] = t[r++]) {}e.length = n - 1;
        } };
    }function oe(e, t, r, i) {
      var o,
          s,
          l,
          c,
          f,
          h,
          v,
          m = t && t.ownerDocument,
          T = t ? t.nodeType : 9;if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
        if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
          if (9 === T) {
            if (!(l = t.getElementById(o))) return r;if (l.id === o) return r.push(l), r;
          } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
        } else {
          if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
        }if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) m = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;while (s--) {
              h[s] = "#" + c + " " + ve(h[s]);
            }v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
          }if (v) try {
            return L.apply(r, m.querySelectorAll(v)), r;
          } catch (e) {} finally {
            c === b && t.removeAttribute("id");
          }
        }
      }return u(e.replace(B, "$1"), t, r, i);
    }function ae() {
      var e = [];function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
      }return t;
    }function se(e) {
      return e[b] = !0, e;
    }function ue(e) {
      var t = d.createElement("fieldset");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function le(e, t) {
      var n = e.split("|"),
          i = n.length;while (i--) {
        r.attrHandle[n[i]] = t;
      }
    }function ce(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }function de(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function he(e) {
      return se(function (t) {
        return t = +t, se(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;while (a--) {
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }n = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, p = oe.setDocument = function (e) {
      var t,
          i,
          a = e ? e.ownerDocument || e : w;return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = ue(function (e) {
        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
      }), n.getById ? (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n = t.getElementById(e);return n ? [n] : [];
        }
      }) : (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n,
              r,
              i,
              o = t.getElementById(e);if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];i = t.getElementsByName(e), r = 0;while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }return [];
        }
      }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }return r;
        }return o;
      }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
      }), ue(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = d.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
      })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
        n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
      }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }return !1;
      }, D = t ? function (e, t) {
        if (e === t) return f = !0, 0;var r = !e.compareDocumentPosition - !t.compareDocumentPosition;return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;if (i === o) return ce(e, t);n = e;while (n = n.parentNode) {
          a.unshift(n);
        }n = t;while (n = n.parentNode) {
          s.unshift(n);
        }while (a[r] === s[r]) {
          r++;
        }return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
      }, d) : d;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
        var r = m.call(e, t);if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {}return oe(t, d, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== d && p(e);var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          r = [],
          i = 0,
          o = 0;if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
        while (t = e[o++]) {
          t === e[o] && (i = r.push(o));
        }while (i--) {
          e.splice(r[i], 1);
        }
      }return c = null, e;
    }, i = oe.getText = function (e) {
      var t,
          n = "",
          r = 0,
          o = e.nodeType;if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += i(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else while (t = e[r++]) {
        n += i(t);
      }return n;
    }, (r = oe.selectors = { cacheLength: 50, createPseudo: se, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(Z, ee).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = E[e + " "];return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = oe.attr(r, e);return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
          };
        }, CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                f,
                p,
                d,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                y = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                m = !u && !s,
                x = !1;if (y) {
              if (o) {
                while (g) {
                  p = t;while (p = p[g]) {
                    if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                  }h = g = "only" === e && !h && "nextSibling";
                }return !0;
              }if (h = [a ? y.firstChild : y.lastChild], a && m) {
                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                  if (1 === p.nodeType && ++x && p === t) {
                    c[e] = [T, d, x];break;
                  }
                }
              } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
              }return (x -= i) === r || x % r == 0 && x / r >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
            var r,
                o = i(e, t),
                a = o.length;while (a--) {
              e[r = O(e, o[a])] = !(n[r] = o[a]);
            }
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        } }, pseudos: { not: se(function (e) {
          var t = [],
              n = [],
              r = s(e.replace(B, "$1"));return r[b] ? se(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;while (s--) {
              (o = a[s]) && (e[s] = !(t[s] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
          };
        }), has: se(function (e) {
          return function (t) {
            return oe(e, t).length > 0;
          };
        }), contains: se(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
          };
        }), lang: se(function (e) {
          return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
            var n;do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === h;
        }, focus: function focus(e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: de(!1), disabled: de(!0), checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !r.pseudos.empty(e);
        }, header: function header(e) {
          return Y.test(e.nodeName);
        }, input: function input(e) {
          return G.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: he(function () {
          return [0];
        }), last: he(function (e, t) {
          return [t - 1];
        }), eq: he(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), even: he(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }return e;
        }), odd: he(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }return e;
        }), lt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) {
            e.push(r);
          }return e;
        }), gt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }return e;
        }) } }).pseudos.nth = r.pseudos.eq;for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      r.pseudos[t] = fe(t);
    }for (t in { submit: !0, reset: !0 }) {
      r.pseudos[t] = pe(t);
    }function ye() {}ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function (e, t) {
      var n,
          i,
          o,
          a,
          s,
          u,
          l,
          c = k[e + " "];if (c) return t ? 0 : c.slice(0);s = e, u = [], l = r.preFilter;while (s) {
        n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(B, " ") }), s = s.slice(n.length));for (a in r.filter) {
          !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length));
        }if (!n) break;
      }return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
    };function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }return r;
    }function me(e, t, n) {
      var r = t.dir,
          i = t.next,
          o = i || r,
          a = n && "parentNode" === o,
          s = C++;return t.first ? function (t, n, i) {
        while (t = t[r]) {
          if (1 === t.nodeType || a) return e(t, n, i);
        }return !1;
      } : function (t, n, u) {
        var l,
            c,
            f,
            p = [T, s];if (u) {
          while (t = t[r]) {
            if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
          }
        } else while (t = t[r]) {
          if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
            if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];if (c[o] = p, p[2] = e(t, n, u)) return !0;
          }
        }return !1;
      };
    }function xe(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;while (i--) {
          if (!e[i](t, n, r)) return !1;
        }return !0;
      } : e[0];
    }function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) {
        oe(e, t[r], n);
      }return n;
    }function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }return a;
    }function Te(e, t, n, r, i, o) {
      return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
        var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || "*", s.nodeType ? [s] : s, []),
            y = !e || !o && t ? g : we(g, p, e, s, u),
            v = n ? i || (o ? e : h || r) ? [] : a : y;if (n && n(y, v, s, u), r) {
          l = we(v, d), r(l, [], s, u), c = l.length;while (c--) {
            (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
          }
        }if (o) {
          if (i || e) {
            if (i) {
              l = [], c = v.length;while (c--) {
                (f = v[c]) && l.push(y[c] = f);
              }i(null, v = [], l, u);
            }c = v.length;while (c--) {
              (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
            }
          }
        } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
      });
    }function Ce(e) {
      for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
        return e === t;
      }, s, !0), f = me(function (e) {
        return O(t, e) > -1;
      }, s, !0), p = [function (e, n, r) {
        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));return t = null, i;
      }]; u < o; u++) {
        if (n = r.relative[e[u].type]) p = [me(xe(p), n)];else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o; i++) {
              if (r.relative[e[i].type]) break;
            }return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
          }p.push(n);
        }
      }return xe(p);
    }function Ee(e, t) {
      var n = t.length > 0,
          i = e.length > 0,
          o = function o(_o, a, s, u, c) {
        var f,
            h,
            y,
            v = 0,
            m = "0",
            x = _o && [],
            b = [],
            w = l,
            C = _o || i && r.find.TAG("*", c),
            E = T += null == w ? 1 : Math.random() || .1,
            k = C.length;for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
          if (i && f) {
            h = 0, a || f.ownerDocument === d || (p(f), s = !g);while (y = e[h++]) {
              if (y(f, a || d, s)) {
                u.push(f);break;
              }
            }c && (T = E);
          }n && ((f = !y && f) && v--, _o && x.push(f));
        }if (v += m, n && m !== v) {
          h = 0;while (y = t[h++]) {
            y(x, b, a, s);
          }if (_o) {
            if (v > 0) while (m--) {
              x[m] || b[m] || (b[m] = j.call(u));
            }b = we(b);
          }L.apply(u, b), c && !_o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
        }return c && (T = E, l = w), x;
      };return n ? se(o) : o;
    }return s = oe.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = S[e + " "];if (!o) {
        t || (t = a(e)), n = t.length;while (n--) {
          (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
        }(o = S(e, Ee(i, r))).selector = e;
      }return o;
    }, u = oe.select = function (e, t, n, i) {
      var o,
          u,
          l,
          c,
          f,
          p = "function" == typeof e && e,
          d = !i && a(e = p.selector || e);if (n = n || [], 1 === d.length) {
        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
          if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;p && (t = t.parentNode), e = e.slice(u.shift().value.length);
        }o = V.needsContext.test(e) ? 0 : u.length;while (o--) {
          if (l = u[o], r.relative[c = l.type]) break;if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
            if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;break;
          }
        }
      }return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
    }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
      return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
    }), ue(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || le("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && ue(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || le("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ue(function (e) {
      return null == e.getAttribute("disabled");
    }) || le(P, function (e, t, n) {
      var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), oe;
  }(e);w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;var k = function k(e, t, n) {
    var r = [],
        i = void 0 !== n;while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && w(e).is(n)) break;r.push(e);
      }
    }return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }return n;
  },
      D = w.expr.match.needsContext;function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e, t, n) {
    return g(t) ? w.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return u.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }w.filter = function (e, t, n) {
    var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({ find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (w.contains(i[t], this)) return !0;
        }
      }));for (n = this.pushStack([]), t = 0; t < r; t++) {
        w.find(e, i[t], n);
      }return r > 1 ? w.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    }, is: function is(e) {
      return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
    } });var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init = function (e, t, n) {
    var i, o;if (!e) return this;if (n = n || q, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (i[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) {
          g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        }return this;
      }return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, q = w(r);var H = /^(?:parents|prev(?:Until|All))/,
      O = { children: !0, contents: !0, next: !0, prev: !0 };w.fn.extend({ has: function has(e) {
      var t = w(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (w.contains(this, t[e])) return !0;
        }
      });
    }, closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && w(e);if (!D.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
            o.push(n);break;
          }
        }
      }return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    }, index: function index(e) {
      return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } });function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {}return e;
  }w.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return k(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return k(e, "parentNode", n);
    }, next: function next(e) {
      return P(e, "nextSibling");
    }, prev: function prev(e) {
      return P(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return k(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return k(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return k(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return k(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return S(e.firstChild);
    }, contents: function contents(e) {
      return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    } }, function (e, t) {
    w.fn[e] = function (n, r) {
      var i = w.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
    };
  });var M = /[^\x20\t\r\n\f]+/g;function R(e) {
    var t = {};return w.each(e.match(M) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);var t,
        n,
        r,
        i,
        o = [],
        a = [],
        s = -1,
        u = function u() {
      for (i = i || e.once, r = t = !0; a.length; s = -1) {
        n = a.shift();while (++s < o.length) {
          !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
        }
      }e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
    },
        l = { add: function add() {
        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
          w.each(n, function (n, r) {
            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
          });
        }(arguments), n && !t && u()), this;
      }, remove: function remove() {
        return w.each(arguments, function (e, t) {
          var n;while ((n = w.inArray(t, o, n)) > -1) {
            o.splice(n, 1), n <= s && s--;
          }
        }), this;
      }, has: function has(e) {
        return e ? w.inArray(e, o) > -1 : o.length > 0;
      }, empty: function empty() {
        return o && (o = []), this;
      }, disable: function disable() {
        return i = a = [], o = n = "", this;
      }, disabled: function disabled() {
        return !o;
      }, lock: function lock() {
        return i = a = [], n || t || (o = n = ""), this;
      }, locked: function locked() {
        return !!i;
      }, fireWith: function fireWith(e, n) {
        return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
      }, fire: function fire() {
        return l.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!r;
      } };return l;
  };function I(e) {
    return e;
  }function W(e) {
    throw e;
  }function $(e, t, n, r) {
    var i;try {
      e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }w.extend({ Deferred: function Deferred(t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          r = "pending",
          i = { state: function state() {
          return r;
        }, always: function always() {
          return o.done(arguments).fail(arguments), this;
        }, "catch": function _catch(e) {
          return i.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return w.Deferred(function (t) {
            w.each(n, function (n, r) {
              var i = g(e[r[4]]) && e[r[4]];o[r[1]](function () {
                var e = i && i.apply(this, arguments);e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function then(t, r, i) {
          var o = 0;function a(t, n, r, i) {
            return function () {
              var s = this,
                  u = arguments,
                  l = function l() {
                var e, l;if (!(t < o)) {
                  if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");l = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
                }
              },
                  c = i ? l : function () {
                try {
                  l();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u));
                }
              };t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
            };
          }return w.Deferred(function (e) {
            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? w.extend(e, i) : i;
        } },
          o = {};return w.each(n, function (e, t) {
        var a = t[2],
            s = t[5];i[t[1]] = a.add, s && a.add(function () {
          r = s;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = a.fireWith;
      }), i.promise(o), t && t.call(o, o), o;
    }, when: function when(e) {
      var t = arguments.length,
          n = t,
          r = Array(n),
          i = o.call(arguments),
          a = w.Deferred(),
          s = function s(e) {
        return function (n) {
          r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
        };
      };if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();while (n--) {
        $(i[n], s(n), a.reject);
      }return a.promise();
    } });var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var F = w.Deferred();w.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
    } }), w.ready.then = F.then;function _() {
    r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
  }"complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));var z = function z(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;if ("object" === x(n)) {
      i = !0;for (s in n) {
        z(e, t, s, n[s], !0, o, a);
      }
    } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(w(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      X = /^-ms-/,
      U = /-([a-z])/g;function V(e, t) {
    return t.toUpperCase();
  }function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }var Y = function Y(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };function Q() {
    this.expando = w.expando + Q.uid++;
  }Q.uid = 1, Q.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var r,
          i = this.cache(e);if ("string" == typeof t) i[G(t)] = n;else for (r in t) {
        i[G(r)] = t[r];
      }return i;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function remove(e, t) {
      var n,
          r = e[this.expando];if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;while (n--) {
            delete r[t[n]];
          }
        }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !w.isEmptyObject(t);
    } };var J = new Q(),
      K = new Q(),
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ee = /[A-Z]/g;function te(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
  }function ne(e, t, n) {
    var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = te(n);
      } catch (e) {}K.set(e, t, n);
    } else n = void 0;return n;
  }w.extend({ hasData: function hasData(e) {
      return K.hasData(e) || J.hasData(e);
    }, data: function data(e, t, n) {
      return K.access(e, t, n);
    }, removeData: function removeData(e, t) {
      K.remove(e, t);
    }, _data: function _data(e, t, n) {
      return J.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      J.remove(e, t);
    } }), w.fn.extend({ data: function data(e, t) {
      var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;if (void 0 === e) {
        if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
          n = a.length;while (n--) {
            a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
          }J.set(o, "hasDataAttrs", !0);
        }return i;
      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
        K.set(this, e);
      }) : z(this, function (t) {
        var n;if (o && void 0 === t) {
          if (void 0 !== (n = K.get(o, e))) return n;if (void 0 !== (n = ne(o, e))) return n;
        } else this.each(function () {
          K.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        K.remove(this, e);
      });
    } }), w.extend({ queue: function queue(e, t, n) {
      var r;if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function a() {
        w.dequeue(e, t);
      };"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return J.get(e, n) || J.access(e, n, { empty: w.Callbacks("once memory").add(function () {
          J.remove(e, [t + "queue", n]);
        }) });
    } }), w.fn.extend({ queue: function queue(e, t) {
      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = w.queue(this, e, t);w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };"string" != typeof e && (t = e, e = void 0), e = e || "fx";while (a--) {
        (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }return s(), i.promise(t);
    } });var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
  },
      se = function se(e, t, n, r) {
    var i,
        o,
        a = {};for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }i = n.apply(e, r || []);for (o in t) {
      e.style[o] = a[o];
    }return i;
  };function ue(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return w.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;while (a--) {
        w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }c *= 2, w.style(e, t, c + l), n = n || [];
    }return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }var le = {};function ce(e) {
    var t,
        n = e.ownerDocument,
        r = e.nodeName,
        i = le[r];return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
  }function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++) {
      (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
    }for (o = 0; o < a; o++) {
      null != i[o] && (e[o].style.display = i[o]);
    }return e;
  }w.fn.extend({ show: function show() {
      return fe(this, !0);
    }, hide: function hide() {
      return fe(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? w(this).show() : w(this).hide();
      });
    } });var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;function ye(e, t) {
    var n;return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
  }function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
  }var me = /<|&#?\w+;/;function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];while (c--) {
          a = a.lastChild;
        }w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }f.textContent = "", d = 0;while (o = p[d++]) {
      if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
        c = 0;while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }return f;
  }!function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
        t = r.createElement("input");t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();var be = r.documentElement,
      we = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;function Ee() {
    return !0;
  }function ke() {
    return !1;
  }function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }function De(e, t, n, r, i, o) {
    var a, s;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
      "string" != typeof n && (r = r || n, n = void 0);for (s in t) {
        De(e, s, n, r, t[s], o);
      }return e;
    }if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;else if (!i) return e;return 1 === o && (a = i, (i = function i(e) {
      return w().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, i, r, n);
    });
  }w.event = { global: {}, add: function add(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.get(e);if (y) {
        n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
          return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
        }), l = (t = (t || "").match(M) || [""]).length;while (l--) {
          d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
        }
      }
    }, remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.hasData(e) && J.get(e);if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;while (l--) {
          if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
            f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
          } else for (d in u) {
            w.event.remove(e, d + t[l], n, r, !0);
          }
        }w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t = w.event.fix(e),
          n,
          r,
          i,
          o,
          a,
          s,
          u = new Array(arguments.length),
          l = (J.get(this, "events") || {})[t.type] || [],
          c = w.event.special[t.type] || {};for (u[0] = t, n = 1; n < arguments.length; n++) {
        u[n] = arguments[n];
      }if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
        s = w.event.handlers.call(this, t, l), n = 0;while ((o = s[n++]) && !t.isPropagationStopped()) {
          t.currentTarget = o.elem, r = 0;while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) {
            t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
          }
        }return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
          }o.length && s.push({ elem: l, handlers: o });
        }
      }return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
    }, addProp: function addProp(e, t) {
      Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function set(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function fix(e) {
      return e[w.expando] ? e : new w.Event(e);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== Se() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === Se() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
        }, _default: function _default(e) {
          return N(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    w.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      } };
  }), w.fn.extend({ on: function on(e, t, n, r) {
      return De(this, e, t, n, r);
    }, one: function one(e, t, n, r) {
      return De(this, e, t, n, r, 1);
    }, off: function off(e, t, n) {
      var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        for (i in e) {
          this.off(i, t, e[i]);
        }return this;
      }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    } });var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      je = /checked\s*(?:[^=]|=\s*.checked.)/i,
      qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
  }function He(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function Oe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }function Pe(e, t) {
    var n, r, i, o, a, s, u, l;if (1 === t.nodeType) {
      if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};for (i in l) {
          for (n = 0, r = l[i].length; n < r; n++) {
            w.event.add(t, i, l[i][n]);
          }
        }
      }K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
    }
  }function Me(e, t) {
    var n = t.nodeName.toLowerCase();"input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }function Re(e, t, n, r) {
    t = a.apply([], t);var i,
        o,
        s,
        u,
        l,
        c,
        f = 0,
        p = e.length,
        d = p - 1,
        y = t[0],
        v = g(y);if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
      var o = e.eq(i);v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
    });if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) {
        l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
      }if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) {
        l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
      }
    }return e;
  }function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
    }return e;
  }w.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(Ne, "<$1></$2>");
    }, clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s = e.cloneNode(!0),
          u = w.contains(e.ownerDocument, e);if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) {
        Me(o[r], a[r]);
      }if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) {
        Pe(o[r], a[r]);
      } else Pe(e, s);return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
    }, cleanData: function cleanData(e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (Y(n)) {
          if (t = n[J.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            }n[J.expando] = void 0;
          }n[K.expando] && (n[K.expando] = void 0);
        }
      }
    } }), w.fn.extend({ detach: function detach(e) {
      return Ie(this, e, !0);
    }, remove: function remove(e) {
      return Ie(this, e);
    }, text: function text(e) {
      return z(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return Re(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
      });
    }, prepend: function prepend() {
      return Re(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Le(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    }, html: function html(e) {
      return z(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = [];return Re(this, arguments, function (t) {
        var n = this.parentNode;w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
      }, e);
    } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    w.fn[e] = function (e) {
      for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) {
        n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
      }return this.pushStack(r);
    };
  });var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      $e = function $e(t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Be = new RegExp(oe.join("|"), "i");!function () {
    function t() {
      if (c) {
        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);var t = e.getComputedStyle(c);i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null;
      }
    }function n(e) {
      return Math.round(parseFloat(e));
    }var i,
        o,
        a,
        s,
        u,
        l = r.createElement("div"),
        c = r.createElement("div");c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, { boxSizingReliable: function boxSizingReliable() {
        return t(), o;
      }, pixelBoxStyles: function pixelBoxStyles() {
        return t(), s;
      }, pixelPosition: function pixelPosition() {
        return t(), i;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return t(), u;
      }, scrollboxSize: function scrollboxSize() {
        return t(), a;
      } }));
  }();function Fe(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }function _e(e, t) {
    return { get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
      } };
  }var ze = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ue = { position: "absolute", visibility: "hidden", display: "block" },
      Ve = { letterSpacing: "0", fontWeight: "400" },
      Ge = ["Webkit", "Moz", "ms"],
      Ye = r.createElement("div").style;function Qe(e) {
    if (e in Ye) return e;var t = e[0].toUpperCase() + e.slice(1),
        n = Ge.length;while (n--) {
      if ((e = Ge[n] + t) in Ye) return e;
    }
  }function Je(e) {
    var t = w.cssProps[e];return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }function Ke(e, t, n) {
    var r = ie.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;if (n === (r ? "border" : "content")) return 0;for (; a < 4; a += 2) {
      "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
    }return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
  }function et(e, t, n) {
    var r = $e(e),
        i = Fe(e, t, r),
        o = "border-box" === w.css(e, "boxSizing", !1, r),
        a = o;if (We.test(i)) {
      if (!n) return i;i = "auto";
    }return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
  }w.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = Fe(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = G(t),
            u = Xe.test(t),
            l = e.style;if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];"string" == (o = typeof n === "undefined" ? "undefined" : _typeof(n)) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    }, css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = G(t);return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    } }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = { get: function get(e, n, r) {
        if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
          return et(e, t, r);
        });
      }, set: function set(e, n, r) {
        var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s);
      } };
  }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    w.cssHooks[e + t] = { expand: function expand(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
          i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
        }return i;
      } }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
  }), w.fn.extend({ css: function css(e, t) {
      return z(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;if (Array.isArray(t)) {
          for (r = $e(e), i = t.length; a < i; a++) {
            o[t[a]] = w.css(e, t[a], !1, r);
          }return o;
        }return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    } });function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }w.Tween = tt, tt.prototype = { constructor: tt, init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = tt.propHooks[this.prop];return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = tt.propHooks[this.prop];return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
    } }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = { _default: { get: function get(e) {
        var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      }, set: function set(e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
      } } }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, w.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }, _default: "swing" }, w.fx = tt.prototype.init, w.fx.step = {};var nt,
      rt,
      it = /^(?:toggle|show|hide)$/,
      ot = /queueHooks$/;function at() {
    rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
  }function st() {
    return e.setTimeout(function () {
      nt = void 0;
    }), nt = Date.now();
  }function ut(e, t) {
    var n,
        r = 0,
        i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = oe[r])] = i["padding" + n] = e;
    }return t && (i.opacity = i.width = e), i;
  }function lt(e, t, n) {
    for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }function ct(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ae(e),
        y = J.get(e, "fxshow");n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
      a.unqueued || s();
    }), a.unqueued++, p.always(function () {
      p.always(function () {
        a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
      });
    }));for (r in t) {
      if (i = t[r], it.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !y || void 0 === y[r]) continue;g = !0;
        }d[r] = y && y[r] || w.style(e, r);
      }
    }if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1;for (r in d) {
        u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", { display: l }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
          g || fe([e]), J.remove(e, "fxshow");for (r in d) {
            w.style(e, r, d[r]);
          }
        })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }
  }function ft(e, t) {
    var n, r, i, o, a;for (n in e) {
      if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
        o = a.expand(o), delete e[r];for (n in o) {
          n in e || (e[n] = o[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }function pt(e, t, n) {
    var r,
        i,
        o = 0,
        a = pt.prefilters.length,
        s = w.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (i) return !1;for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) {
        l.tweens[o].run(r);
      }return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
    },
        l = s.promise({ elem: e, props: w.extend({}, t), opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n), originalProperties: t, originalOptions: n, startTime: nt || st(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(r), r;
      }, stop: function stop(t) {
        var n = 0,
            r = t ? l.tweens.length : 0;if (i) return this;for (i = !0; n < r; n++) {
          l.tweens[n].run(1);
        }return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
      } }),
        c = l.props;for (ft(c, l.opts.specialEasing); o < a; o++) {
      if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
    }return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l;
  }w.Animation = w.extend(pt, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return ue(n.elem, e, ie.exec(t), n), n;
      }] }, tweener: function tweener(e, t) {
      g(e) ? (t = e, e = ["*"]) : e = e.match(M);for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
      }
    }, prefilters: [ct], prefilter: function prefilter(e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    } }), w.speed = function (e, t, n) {
    var r = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? w.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t };return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
    }, r;
  }, w.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
    }, animate: function animate(e, t, n, r) {
      var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function a() {
        var t = pt(this, w.extend({}, e), o);(i || J.get(this, "finish")) && t.stop(!0);
      };return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    }, stop: function stop(e, t, n) {
      var r = function r(e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            i = null != e && e + "queueHooks",
            o = w.timers,
            a = J.get(this);if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
          a[i] && a[i].stop && ot.test(i) && r(a[i]);
        }for (i = o.length; i--;) {
          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        }!t && n || w.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = J.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = w.timers,
            a = r ? r.length : 0;for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }for (t = 0; t < a; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }delete n.finish;
      });
    } }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = w.fn[t];w.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
    };
  }), w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    w.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        n = w.timers;for (nt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }n.length || w.fx.stop(), nt = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function () {
    rt || (rt = !0, at());
  }, w.fx.stop = function () {
    rt = null;
  }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function (t, n) {
    return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);r.stop = function () {
        e.clearTimeout(i);
      };
    });
  }, function () {
    var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
  }();var dt,
      ht = w.expr.attrHandle;w.fn.extend({ attr: function attr(e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    } }), w.extend({ attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!h.radioValue && "radio" === t && N(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(M);if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    } }), dt = { set: function set(e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ht[t] || w.find.attr;ht[t] = function (e, t, r) {
      var i,
          o,
          a = t.toLowerCase();return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
    };
  });var gt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;w.fn.extend({ prop: function prop(e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    } }), w.extend({ prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = w.find.attr(e, "tabindex");return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), h.optSelected || (w.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function set(e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = this;
  });function vt(e) {
    return (e.match(M) || []).join(" ");
  }function mt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }w.fn.extend({ addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;if (g(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, mt(this)));
      });if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;while (o = t[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;if (g(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, mt(this)));
      });if (!arguments.length) return this.attr("class", "");if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;while (o = t[a++]) {
            while (r.indexOf(" " + o + " ") > -1) {
              r = r.replace(" " + o + " ", " ");
            }
          }i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e === "undefined" ? "undefined" : _typeof(e),
          r = "string" === n || Array.isArray(e);return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, mt(this), t), t);
      }) : this.each(function () {
        var t, i, o, a;if (r) {
          i = 0, o = w(this), a = xt(e);while (t = a[i++]) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          }
        } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;t = " " + e + " ";while (n = this[r++]) {
        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
      }return !1;
    } });var bt = /\r/g;w.fn.extend({ val: function val(e) {
      var t,
          n,
          r,
          i = this[0];{
        if (arguments.length) return r = g(e), this.each(function (n) {
          var i;1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
            return null == e ? "" : e + "";
          })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        });if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
      }
    } }), w.extend({ valHooks: { option: { get: function get(e) {
          var t = w.find.attr(e, "value");return null != t ? t : vt(w.text(e));
        } }, select: { get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
              if (t = w(n).val(), a) return t;s.push(t);
            }
          }return s;
        }, set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;while (a--) {
            ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
          }return n || (e.selectedIndex = -1), o;
        } } } }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      } }, h.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), h.focusin = "onfocusin" in e;var wt = /^(?:focusinfocus|focusoutblur)$/,
      Tt = function Tt(e) {
    e.stopPropagation();
  };w.extend(w.event, { trigger: function trigger(t, n, i, o) {
      var a,
          s,
          u,
          l,
          c,
          p,
          d,
          h,
          v = [i || r],
          m = f.call(t, "type") ? t.type : t,
          x = f.call(t, "namespace") ? t.namespace.split(".") : [];if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!o && !d.noBubble && !y(i)) {
          for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) {
            v.push(s), u = s;
          }u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
        }a = 0;while ((s = v[a++]) && !t.isPropagationStopped()) {
          h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
        }return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result;
      }
    }, simulate: function simulate(e, t, n) {
      var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });w.event.trigger(r, null, t);
    } }), w.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return w.event.trigger(e, t, n, !0);
    } }), h.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function n(e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };w.event.special[t] = { setup: function setup() {
        var r = this.ownerDocument || this,
            i = J.access(r, t);i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
      }, teardown: function teardown() {
        var r = this.ownerDocument || this,
            i = J.access(r, t) - 1;i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
      } };
  });var Ct = e.location,
      Et = Date.now(),
      kt = /\?/;w.parseXML = function (t) {
    var n;if (!t || "string" != typeof t) return null;try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  };var St = /\[\]$/,
      Dt = /\r?\n/g,
      Nt = /^(?:submit|button|image|reset|file)$/i,
      At = /^(?:input|select|textarea|keygen)/i;function jt(e, t, n, r) {
    var i;if (Array.isArray(t)) w.each(t, function (t, i) {
      n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && null != i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x(t)) r(e, t);else for (i in t) {
      jt(e + "[" + i + "]", t[i], n, r);
    }
  }w.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = g(t) ? t() : t;r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      jt(n, e[n], t, i);
    }return r.join("&");
  }, w.fn.extend({ serialize: function serialize() {
      return w.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = w.prop(this, "elements");return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = w(this).val();return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return { name: t.name, value: e.replace(Dt, "\r\n") };
        }) : { name: t.name, value: n.replace(Dt, "\r\n") };
      }).get();
    } });var qt = /%20/g,
      Lt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Mt = /^(?:GET|HEAD)$/,
      Rt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Bt = r.createElement("a");Bt.href = Ct.href;function Ft(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var r,
          i = 0,
          o = t.toLowerCase().match(M) || [];if (g(n)) while (r = o[i++]) {
        "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }function _t(e, t, n, r) {
    var i = {},
        o = e === Wt;function a(s) {
      var u;return i[s] = !0, w.each(e[s] || [], function (e, s) {
        var l = s(t, n, r);return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
      }), u;
    }return a(t.dataTypes[0]) || !i["*"] && a("*");
  }function zt(e, t) {
    var n,
        r,
        i = w.ajaxSettings.flatOptions || {};for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }return r && w.extend(!0, e, r), e;
  }function Xt(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.contents,
        u = e.dataTypes;while ("*" === u[0]) {
      u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    }if (r) for (i in s) {
      if (s[i] && s[i].test(r)) {
        u.unshift(i);break;
      }
    }if (u[0] in n) o = u[0];else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;break;
        }a || (a = i);
      }o = o || a;
    }if (o) return o !== u[0] && u.unshift(o), n[o];
  }function Ut(e, t, n, r) {
    var i,
        o,
        a,
        s,
        u,
        l = {},
        c = e.dataTypes.slice();if (c[1]) for (a in e.converters) {
      l[a.toLowerCase()] = e.converters[a];
    }o = c.shift();while (o) {
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
          if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));break;
          }
        }if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
          t = a(t);
        } catch (e) {
          return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
        }
      }
    }return { state: "success", data: t };
  }w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ct.href, type: "GET", isLocal: Pt.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    }, ajaxPrefilter: Ft(It), ajaxTransport: Ft(Wt), ajax: function ajax(t, n) {
      "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = w.ajaxSetup({}, n),
          g = h.context || h,
          y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
          v = w.Deferred(),
          m = w.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          T = {},
          C = "canceled",
          E = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (c) {
            if (!s) {
              s = {};while (t = Ot.exec(a)) {
                s[t[1].toLowerCase()] = t[2];
              }
            }t = s[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return c ? a : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == c && (h.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (c) E.always(e[E.status]);else for (t in e) {
            x[t] = [x[t], e[t]];
          }return this;
        }, abort: function abort(e) {
          var t = e || C;return i && i.abort(t), k(0, t), this;
        } };if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
        l = r.createElement("a");try {
          l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
        } catch (e) {
          h.crossDomain = !0;
        }
      }if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;(f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);for (p in h.headers) {
        E.setRequestHeader(p, h.headers[p]);
      }if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
        if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;h.async && h.timeout > 0 && (u = e.setTimeout(function () {
          E.abort("timeout");
        }, h.timeout));try {
          c = !1, i.send(b, k);
        } catch (e) {
          if (c) throw e;k(-1, e);
        }
      } else k(-1, "No Transport");function k(t, n, r, s) {
        var l,
            p,
            d,
            b,
            T,
            C = n;c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
      }return E;
    }, getJSON: function getJSON(e, t, n) {
      return w.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return w.get(e, void 0, t, "script");
    } }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, n, r, i) {
      return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e));
    };
  }), w._evalUrl = function (e) {
    return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, w.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;while (e.firstElementChild) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this;
    }, wrapInner: function wrapInner(e) {
      return g(e) ? this.each(function (t) {
        w(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = w(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = g(e);return this.each(function (n) {
        w(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        w(this).replaceWith(this.childNodes);
      }), this;
    } }), w.expr.pseudos.hidden = function (e) {
    return !w.expr.pseudos.visible(e);
  }, w.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, w.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };var Vt = { 0: 200, 1223: 204 },
      Gt = w.ajaxSettings.xhr();h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
    var _n, r;if (h.cors || Gt && !t.crossDomain) return { send: function send(i, o) {
        var a,
            s = t.xhr();if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
          s[a] = t.xhrFields[a];
        }t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");for (a in i) {
          s.setRequestHeader(a, i[a]);
        }_n = function n(e) {
          return function () {
            _n && (_n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
          };
        }, s.onload = _n(), r = s.onerror = s.ontimeout = _n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            _n && r();
          });
        }, _n = _n("abort");try {
          s.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n) throw e;
        }
      }, abort: function abort() {
        _n && _n();
      } };
  }), w.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
        return w.globalEval(e), e;
      } } }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), w.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n2;return { send: function send(i, o) {
          t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n2 = function n(e) {
            t.remove(), _n2 = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), r.head.appendChild(t[0]);
        }, abort: function abort() {
          _n2 && _n2();
        } };
    }
  });var Yt = [],
      Qt = /(=)\?(?=&|$)|\?\?/;w.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = Yt.pop() || w.expando + "_" + Et++;return this[e] = !0, e;
    } }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
        o,
        a,
        s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return a || w.error(i + " was not called"), a[0];
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
      a = arguments;
    }, r.always(function () {
      void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
    }), "script";
  }), h.createHTMLDocument = function () {
    var e = r.implementation.createHTMLDocument("").body;return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  }(), w.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];"boolean" == typeof t && (n = t, t = !1);var i, o, a;return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
  }, w.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (i = "POST"), a.length > 0 && w.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) {
      o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    w.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), w.expr.pseudos.animated = function (e) {
    return w.grep(w.timers, function (t) {
      return e === t.elem;
    }).length;
  }, w.offset = { setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, "position"),
          f = w(e),
          p = {};"static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
    } }, w.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });var t,
          n,
          r = this[0];if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) {
            e = e.parentNode;
          }e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
        }return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;while (e && "static" === w.css(e, "position")) {
          e = e.offsetParent;
        }return e || be;
      });
    } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;w.fn[e] = function (r) {
      return z(this, function (e, r, i) {
        var o;if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
      }, e, r, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
      if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({ Height: "height", Width: "width" }, function (e, t) {
    w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
      w.fn[r] = function (i, o) {
        var a = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");return z(this, function (t, n, i) {
          var o;return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
        }, t, a ? i : void 0, a);
      };
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), w.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), w.fn.extend({ bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } }), w.proxy = function (e, t) {
    var n, r, i;if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function i() {
      return e.apply(t || this, r.concat(o.call(arguments)));
    }, i.guid = e.guid = e.guid || w.guid++, i;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
    var t = w.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return w;
  });var Jt = e.jQuery,
      Kt = e.$;return w.noConflict = function (t) {
    return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
  }, t || (e.jQuery = e.$ = w), w;
});

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : window.jQuery || window.Zepto);
}(function (a) {
  var b,
      c,
      d,
      e,
      f,
      g,
      h = "Close",
      i = "BeforeClose",
      j = "AfterClose",
      k = "BeforeAppend",
      l = "MarkupParse",
      m = "Open",
      n = "Change",
      o = "mfp",
      p = "." + o,
      q = "mfp-ready",
      r = "mfp-removing",
      s = "mfp-prevent-close",
      t = function t() {},
      u = !!window.jQuery,
      v = a(window),
      w = function w(a, c) {
    b.ev.on(o + a + p, c);
  },
      x = function x(b, c, d, e) {
    var f = document.createElement("div");return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f;
  },
      y = function y(c, d) {
    b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
  },
      z = function z(c) {
    return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn;
  },
      A = function A() {
    a.magnificPopup.instance || (b = new t(), b.init(), a.magnificPopup.instance = b);
  },
      B = function B() {
    var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];if (void 0 !== a.transition) return !0;for (; b.length;) {
      if (b.pop() + "Transition" in a) return !0;
    }return !1;
  };t.prototype = { constructor: t, init: function init() {
      var c = navigator.appVersion;b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {};
    }, open: function open(c) {
      var e;if (c.isObj === !1) {
        b.items = c.items.toArray(), b.index = 0;var g,
            h = c.items;for (e = 0; e < h.length; e++) {
          if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
            b.index = e;break;
          }
        }
      } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;if (b.isOpen) return void b.updateItemHTML();b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
        b.close();
      }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
        b._checkIfClose(a.target) && b.close();
      }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));var i = a.magnificPopup.modules;for (e = 0; e < i.length; e++) {
        var j = i[e];j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b);
      }y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
        c.close_replaceWith = z(d.type);
      }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
        27 === a.keyCode && b.close();
      }), v.on("resize" + p, function () {
        b.updateSize();
      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);var k = b.wH = v.height(),
          n = {};if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();o && (n.marginRight = o);
      }b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");var r = b.st.mainClass;return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
        b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
      }, 16), b.isOpen = !0, b.updateSize(k), y(m), c;
    }, close: function close() {
      b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
        b._close();
      }, b.st.removalDelay)) : b._close());
    }, _close: function _close() {
      y(h);var c = r + " " + q + " ";if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
        var e = { marginRight: "" };b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e);
      }d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j);
    }, updateSize: function updateSize(a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
            d = window.innerHeight * c;b.wrap.css("height", d), b.wH = d;
      } else b.wH = a || v.height();b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    }, updateItemHTML: function updateItemHTML() {
      var c = b.items[b.index];b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));var d = c.type;if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
        var f = b.st[d] ? b.st[d].markup : !1;y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0;
      }e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange");
    }, appendContent: function appendContent(a, c) {
      b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content);
    }, parseEl: function parseEl(c) {
      var d,
          e = b.items[c];if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) {
        for (var f = b.types, g = 0; g < f.length; g++) {
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];break;
          }
        }e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"));
      }return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c];
    }, addGroup: function addGroup(a, c) {
      var d = function d(_d) {
        _d.mfpEl = this, b._openClick(_d, a, c);
      };c || (c = {});var e = "click.magnificPopup";c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)));
    }, _openClick: function _openClick(c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;if (g) if (a.isFunction(g)) {
          if (!g.call(b)) return !0;
        } else if (v.width() < g) return !0;c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
      }
    }, updateStatus: function updateStatus(a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);var e = { status: a, text: d };y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
          a.stopImmediatePropagation();
        }), b.container.addClass("mfp-s-" + a), c = a;
      }
    }, _checkIfClose: function _checkIfClose(c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
            e = b.st.closeOnBgClick;if (d && e) return !0;if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;return !1;
      }
    }, _addClassToMFP: function _addClassToMFP(a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    }, _removeClassFromMFP: function _removeClassFromMFP(a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    }, _hasScrollBar: function _hasScrollBar(a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
    }, _setFocus: function _setFocus() {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    }, _onFocusIn: function _onFocusIn(c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
    }, _parseMarkup: function _parseMarkup(b, c, d) {
      var e;d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
        if (void 0 === d || d === !1) return !0;if (e = c.split("_"), e.length > 1) {
          var f = b.find(p + "-" + e[0]);if (f.length > 0) {
            var g = e[1];"replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d);
          }
        } else b.find(p + "-" + c).html(d);
      });
    }, _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a);
      }return b.scrollbarSize;
    } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function open(b, c) {
      return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b);
    }, close: function close() {
      return a.magnificPopup.instance && a.magnificPopup.instance.close();
    }, registerModule: function registerModule(b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
    }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, a.fn.magnificPopup = function (c) {
    A();var d = a(this);if ("string" == typeof c) {
      if ("open" === c) {
        var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f);
      } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
    } else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);return d;
  };var C,
      D,
      E,
      F = "inline",
      G = function G() {
    E && (D.after(E.addClass(C)).detach(), E = null);
  };a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function initInline() {
        b.types.push(F), w(h + "." + F, function () {
          G();
        });
      }, getInline: function getInline(c, d) {
        if (G(), c.src) {
          var e = b.st.inline,
              f = a(c.src);if (f.length) {
            var g = f[0].parentNode;g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), f = a("<div>");return c.inlineElement = f, f;
        }return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      } } });var H,
      I = "ajax",
      J = function J() {
    H && a(document.body).removeClass(H);
  },
      K = function K() {
    J(), b.req && b.req.abort();
  };a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function initAjax() {
        b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K);
      }, getAjax: function getAjax(c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");var d = a.extend({ url: c.src, success: function success(d, e, f) {
            var g = { data: d, xhr: f };y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
              b.wrap.addClass(q);
            }, 16), b.updateStatus("ready"), y("AjaxContentAdded");
          }, error: function error() {
            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
          } }, b.st.ajax.settings);return b.req = a.ajax(d), "";
      } } });var L,
      M = function M(c) {
    if (c.data && void 0 !== c.data.title) return c.data.title;var d = b.st.image.titleSrc;if (d) {
      if (a.isFunction(d)) return d.call(b, c);if (c.el) return c.el.attr(d) || "";
    }return "";
  };a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function initImage() {
        var c = b.st.image,
            d = ".image";b.types.push("image"), w(m + d, function () {
          "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
        }), w(h + d, function () {
          c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
        }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage);
      }, resizeImage: function resizeImage() {
        var a = b.currItem;if (a && a.img && b.st.image.verticalFit) {
          var c = 0;b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c);
        }
      }, _onImageHasSize: function _onImageHasSize(a) {
        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1));
      }, findImageSize: function findImageSize(a) {
        var c = 0,
            d = a.img[0],
            e = function e(f) {
          L && clearInterval(L), L = setInterval(function () {
            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
          }, f);
        };e(1);
      }, getImage: function getImage(c, d) {
        var e = 0,
            f = function f() {
          c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()));
        },
            g = function g() {
          c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0);
        },
            h = b.st.image,
            i = d.find(".mfp-img");if (i.length) {
          var j = document.createElement("img");j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1);
        }return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d);
      } } });var N,
      O = function O() {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
  };a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function opener(a) {
        return a.is("img") ? a : a.find("img");
      } }, proto: { initZoom: function initZoom() {
        var a,
            c = b.st.zoom,
            d = ".zoom";if (c.enabled && b.supportsTransition) {
          var e,
              f,
              g = c.duration,
              j = function j(a) {
            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                f = "transition";return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b;
          },
              k = function k() {
            b.content.css("visibility", "visible");
          };w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                f.css(b._getOffset(!0)), e = setTimeout(function () {
                  k(), setTimeout(function () {
                    f.remove(), a = f = null, y("ZoomAnimationEnded");
                  }, 16);
                }, g);
              }, 16);
            }
          }), w(i + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.st.removalDelay = g, !a) {
                if (a = b._getItemToZoom(), !a) return;f = j(a);
              }f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                f.css(b._getOffset());
              }, 16);
            }
          }), w(h + d, function () {
            b._allowZoom() && (k(), f && f.remove(), a = null);
          });
        }
      }, _allowZoom: function _allowZoom() {
        return "image" === b.currItem.type;
      }, _getItemToZoom: function _getItemToZoom() {
        return b.currItem.hasSize ? b.currItem.img : !1;
      }, _getOffset: function _getOffset(c) {
        var d;d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);var e = d.offset(),
            f = parseInt(d.css("padding-top"), 10),
            g = parseInt(d.css("padding-bottom"), 10);e.top -= a(window).scrollTop() - f;var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f };return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h;
      } } });var P = "iframe",
      Q = "//about:blank",
      R = function R(a) {
    if (b.currTemplate[P]) {
      var c = b.currTemplate[P].find("iframe");c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
    }
  };a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function initIframe() {
        b.types.push(P), w("BeforeChange", function (a, b, c) {
          b !== c && (b === P ? R() : c === P && R(!0));
        }), w(h + "." + P, function () {
          R();
        });
      }, getIframe: function getIframe(c, d) {
        var e = c.src,
            f = b.st.iframe;a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0;
        });var g = {};return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
      } } });var S = function S(a) {
    var c = b.items.length;return a > c - 1 ? a - c : 0 > a ? c + a : a;
  },
      T = function T(a, b, c) {
    return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
  };a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function initGallery() {
        var c = b.st.gallery,
            e = ".mfp-gallery";return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
          c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
            return b.items.length > 1 ? (b.next(), !1) : void 0;
          }), d.on("keydown" + e, function (a) {
            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
          });
        }), w("UpdateStatus" + e, function (a, c) {
          c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
        }), w(l + e, function (a, d, e, f) {
          var g = b.items.length;e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
        }), w("BuildControls" + e, function () {
          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
            var d = c.arrowMarkup,
                e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);e.click(function () {
              b.prev();
            }), f.click(function () {
              b.next();
            }), b.container.append(e.add(f));
          }
        }), w(n + e, function () {
          b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
            b.preloadNearbyImages(), b._preloadTimeout = null;
          }, 16);
        }), void w(h + e, function () {
          d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null;
        })) : !1;
      }, next: function next() {
        b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML();
      }, prev: function prev() {
        b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML();
      }, goTo: function goTo(a) {
        b.direction = a >= b.index, b.index = a, b.updateItemHTML();
      }, preloadNearbyImages: function preloadNearbyImages() {
        var a,
            c = b.st.gallery.preload,
            d = Math.min(c[0], b.items.length),
            e = Math.min(c[1], b.items.length);for (a = 1; a <= (b.direction ? e : d); a++) {
          b._preloadItem(b.index + a);
        }for (a = 1; a <= (b.direction ? d : e); a++) {
          b._preloadItem(b.index - a);
        }
      }, _preloadItem: function _preloadItem(c) {
        if (c = S(c), !b.items[c].preloaded) {
          var d = b.items[c];d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
            d.hasSize = !0;
          }).on("error.mfploader", function () {
            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d);
          }).attr("src", d.src)), d.preloaded = !0;
        }
      } } });var U = "retina";a.magnificPopup.registerModule(U, { options: { replaceSrc: function replaceSrc(a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      }, ratio: 1 }, proto: { initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
              c = a.ratio;c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
            b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" });
          }), w("ElementParse." + U, function (b, d) {
            d.src = a.replaceSrc(d, c);
          }));
        }
      } } }), A();
});
;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.jquery_mmenu_all_js = factory(root.jQuery);
  }
})(this, function (jQuery) {
  /*
   * jQuery mmenu v7.0.2
   * @requires jQuery 1.7.0 or later
   *
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   * www.frebsite.nl
   *
   * License: CC-BY-NC-4.0
   * http://creativecommons.org/licenses/by-nc/4.0/
   */
  !function (e) {
    function t() {
      e[n].glbl || (l = { $wndw: e(window), $docu: e(document), $html: e("html"), $body: e("body") }, s = {}, a = {}, r = {}, e.each([s, a, r], function (e, t) {
        t.add = function (e) {
          e = e.split(" ");for (var n = 0, i = e.length; n < i; n++) {
            t[e[n]] = t.mm(e[n]);
          }
        };
      }), s.mm = function (e) {
        return "mm-" + e;
      }, s.add("wrapper menu panels panel nopanel navbar listview nolistview listitem btn hidden"), s.umm = function (e) {
        return "mm-" == e.slice(0, 3) && (e = e.slice(3)), e;
      }, a.mm = function (e) {
        return "mm-" + e;
      }, a.add("parent child title"), r.mm = function (e) {
        return e + ".mm";
      }, r.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"), e[n]._c = s, e[n]._d = a, e[n]._e = r, e[n].glbl = l);
    }var n = "mmenu",
        i = "7.0.2";if (!(e[n] && e[n].version > i)) {
      e[n] = function (e, t, n) {
        return this.$menu = e, this._api = ["bind", "getInstance", "initPanels", "openPanel", "closePanel", "closeAllPanels", "setSelected"], this.opts = t, this.conf = n, this.vars = {}, this.cbck = {}, this.mtch = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initHooks(), this._initWrappers(), this._initAddons(), this._initExtensions(), this._initMenu(), this._initPanels(), this._initOpened(), this._initAnchors(), this._initMatchMedia(), "function" == typeof this.___debug && this.___debug(), this;
      }, e[n].version = i, e[n].uniqueId = 0, e[n].wrappers = {}, e[n].addons = {}, e[n].defaults = { hooks: {}, extensions: [], wrappers: [], navbar: { add: !0, title: "Menu", titleLink: "parent" }, onClick: { setSelected: !0 }, slidingSubmenus: !0 }, e[n].configuration = { classNames: { divider: "Divider", inset: "Inset", nolistview: "NoListview", nopanel: "NoPanel", panel: "Panel", selected: "Selected", spacer: "Spacer", vertical: "Vertical" }, clone: !1, openingInterval: 25, panelNodetype: "ul, ol, div", transitionDuration: 400 }, e[n].prototype = { getInstance: function getInstance() {
          return this;
        }, initPanels: function initPanels(e) {
          this._initPanels(e);
        }, openPanel: function openPanel(t, i) {
          if (this.trigger("openPanel:before", t), t && t.length && (t.is("." + s.panel) || (t = t.closest("." + s.panel)), t.is("." + s.panel))) {
            var r = this;if ("boolean" != typeof i && (i = !0), t.parent("." + s.listitem + "_vertical").length) t.parents("." + s.listitem + "_vertical").addClass(s.listitem + "_opened").children("." + s.panel).removeClass(s.hidden), this.openPanel(t.parents("." + s.panel).not(function () {
              return e(this).parent("." + s.listitem + "_vertical").length;
            }).first()), this.trigger("openPanel:start", t), this.trigger("openPanel:finish", t);else {
              if (t.hasClass(s.panel + "_opened")) return;var l = this.$pnls.children("." + s.panel),
                  o = this.$pnls.children("." + s.panel + "_opened");if (!e[n].support.csstransitions) return o.addClass(s.hidden).removeClass(s.panel + "_opened"), t.removeClass(s.hidden).addClass(s.panel + "_opened"), this.trigger("openPanel:start", t), void this.trigger("openPanel:finish", t);l.not(t).removeClass(s.panel + "_opened-parent");for (var d = t.data(a.parent); d;) {
                d = d.closest("." + s.panel), d.parent("." + s.listitem + "_vertical").length || d.addClass(s.panel + "_opened-parent"), d = d.data(a.parent);
              }l.removeClass(s.panel + "_highest").not(o).not(t).addClass(s.hidden), t.removeClass(s.hidden);var c = function c() {
                o.removeClass(s.panel + "_opened"), t.addClass(s.panel + "_opened"), t.hasClass(s.panel + "_opened-parent") ? (o.addClass(s.panel + "_highest"), t.removeClass(s.panel + "_opened-parent")) : (o.addClass(s.panel + "_opened-parent"), t.addClass(s.panel + "_highest")), r.trigger("openPanel:start", t);
              },
                  h = function h() {
                o.removeClass(s.panel + "_highest").addClass(s.hidden), t.removeClass(s.panel + "_highest"), r.trigger("openPanel:finish", t);
              };i && !t.hasClass(s.panel + "_noanimation") ? setTimeout(function () {
                r.__transitionend(t, function () {
                  h();
                }, r.conf.transitionDuration), c();
              }, r.conf.openingInterval) : (c(), h());
            }this.trigger("openPanel:after", t);
          }
        }, closePanel: function closePanel(e) {
          this.trigger("closePanel:before", e);var t = e.parent();t.hasClass(s.listitem + "_vertical") && (t.removeClass(s.listitem + "_opened"), e.addClass(s.hidden), this.trigger("closePanel", e)), this.trigger("closePanel:after", e);
        }, closeAllPanels: function closeAllPanels(e) {
          this.trigger("closeAllPanels:before"), this.$pnls.find("." + s.listview).children().removeClass(s.listitem + "_selected").filter("." + s.listitem + "_vertical").removeClass(s.listitem + "_opened");var t = this.$pnls.children("." + s.panel),
              n = e && e.length ? e : t.first();this.$pnls.children("." + s.panel).not(n).removeClass(s.panel + "_opened").removeClass(s.panel + "_opened-parent").removeClass(s.panel + "_highest").addClass(s.hidden), this.openPanel(n, !1), this.trigger("closeAllPanels:after");
        }, togglePanel: function togglePanel(e) {
          var t = e.parent();t.hasClass(s.listitem + "_vertical") && this[t.hasClass(s.listitem + "_opened") ? "closePanel" : "openPanel"](e);
        }, setSelected: function setSelected(e) {
          this.trigger("setSelected:before", e), this.$menu.find("." + s.listitem + "_selected").removeClass(s.listitem + "_selected"), e.addClass(s.listitem + "_selected"), this.trigger("setSelected:after", e);
        }, bind: function bind(e, t) {
          this.cbck[e] = this.cbck[e] || [], this.cbck[e].push(t);
        }, trigger: function trigger() {
          var e = this,
              t = Array.prototype.slice.call(arguments),
              n = t.shift();if (this.cbck[n]) for (var i = 0, s = this.cbck[n].length; i < s; i++) {
            this.cbck[n][i].apply(e, t);
          }
        }, matchMedia: function matchMedia(e, t, n) {
          var i = { yes: t, no: n };this.mtch[e] = this.mtch[e] || [], this.mtch[e].push(i);
        }, _initHooks: function _initHooks() {
          for (var e in this.opts.hooks) {
            this.bind(e, this.opts.hooks[e]);
          }
        }, _initWrappers: function _initWrappers() {
          this.trigger("initWrappers:before");for (var t = 0; t < this.opts.wrappers.length; t++) {
            var i = e[n].wrappers[this.opts.wrappers[t]];"function" == typeof i && i.call(this);
          }this.trigger("initWrappers:after");
        }, _initAddons: function _initAddons() {
          this.trigger("initAddons:before");var t;for (t in e[n].addons) {
            e[n].addons[t].add.call(this), e[n].addons[t].add = function () {};
          }for (t in e[n].addons) {
            e[n].addons[t].setup.call(this);
          }this.trigger("initAddons:after");
        }, _initExtensions: function _initExtensions() {
          this.trigger("initExtensions:before");var e = this;this.opts.extensions.constructor === Array && (this.opts.extensions = { all: this.opts.extensions });for (var t in this.opts.extensions) {
            this.opts.extensions[t] = this.opts.extensions[t].length ? s.menu + "_" + this.opts.extensions[t].join(" " + s.menu + "_") : "", this.opts.extensions[t] && !function (t) {
              e.matchMedia(t, function () {
                this.$menu.addClass(this.opts.extensions[t]);
              }, function () {
                this.$menu.removeClass(this.opts.extensions[t]);
              });
            }(t);
          }this.trigger("initExtensions:after");
        }, _initMenu: function _initMenu() {
          this.trigger("initMenu:before");this.conf.clone && (this.$orig = this.$menu, this.$menu = this.$orig.clone(), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function () {
            e(this).attr("id", s.mm(e(this).attr("id")));
          })), this.$menu.attr("id", this.$menu.attr("id") || this.__getUniqueId()), this.$pnls = e('<div class="' + s.panels + '" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu), this.$menu.addClass(s.menu).parent().addClass(s.wrapper), this.trigger("initMenu:after");
        }, _initPanels: function _initPanels(t) {
          this.trigger("initPanels:before", t), t = t || this.$pnls.children(this.conf.panelNodetype);var n = e(),
              i = this,
              a = function a(t) {
            t.filter(i.conf.panelNodetype).each(function (t) {
              var r = i._initPanel(e(this));if (r) {
                i._initNavbar(r), i._initListview(r), n = n.add(r);var l = r.children("." + s.listview).children("li").children(i.conf.panelNodeType).add(r.children("." + i.conf.classNames.panel));l.length && a(l);
              }
            });
          };a(t), this.trigger("initPanels:after", n);
        }, _initPanel: function _initPanel(e) {
          this.trigger("initPanel:before", e);if (e.hasClass(s.panel)) return e;if (this.__refactorClass(e, this.conf.classNames.panel, s.panel), this.__refactorClass(e, this.conf.classNames.nopanel, s.nopanel), this.__refactorClass(e, this.conf.classNames.inset, s.listview + "_inset"), e.filter("." + s.listview + "_inset").addClass(s.nopanel), e.hasClass(s.nopanel)) return !1;var t = e.hasClass(this.conf.classNames.vertical) || !this.opts.slidingSubmenus;e.removeClass(this.conf.classNames.vertical);var n = e.attr("id") || this.__getUniqueId();e.is("ul, ol") && (e.removeAttr("id"), e.wrap("<div />"), e = e.parent()), e.attr("id", n), e.addClass(s.panel + " " + s.hidden);var i = e.parent("li");return t ? i.addClass(s.listitem + "_vertical") : e.appendTo(this.$pnls), i.length && (i.data(a.child, e), e.data(a.parent, i)), this.trigger("initPanel:after", e), e;
        }, _initNavbar: function _initNavbar(t) {
          if (this.trigger("initNavbar:before", t), !t.children("." + s.navbar).length) {
            var n = t.data(a.parent),
                i = e('<div class="' + s.navbar + '" />'),
                r = this.__getPanelTitle(t, this.opts.navbar.title),
                l = "";if (n && n.length) {
              if (n.hasClass(s.listitem + "_vertical")) return;if (n.parent().is("." + s.listview)) var o = n.children("a, span").not("." + s.btn + "_next");else var o = n.closest("." + s.panel).find('a[href="#' + t.attr("id") + '"]');o = o.first(), n = o.closest("." + s.panel);var d = n.attr("id");switch (r = this.__getPanelTitle(t, e("<span>" + o.text() + "</span>").text()), this.opts.navbar.titleLink) {case "anchor":
                  l = o.attr("href");break;case "parent":
                  l = "#" + d;}i.append('<a class="' + s.btn + " " + s.btn + "_prev " + s.navbar + '__btn" href="#' + d + '" />');
            } else if (!this.opts.navbar.title) return;this.opts.navbar.add && t.addClass(s.panel + "_has-navbar"), i.append('<a class="' + s.navbar + '__title"' + (l.length ? ' href="' + l + '"' : "") + ">" + r + "</a>").prependTo(t), this.trigger("initNavbar:after", t);
          }
        }, _initListview: function _initListview(t) {
          this.trigger("initListview:before", t);var n = this.__childAddBack(t, "ul, ol");this.__refactorClass(n, this.conf.classNames.nolistview, s.nolistview);var i = n.not("." + s.nolistview).addClass(s.listview).children().addClass(s.listitem);this.__refactorClass(i, this.conf.classNames.selected, s.listitem + "_selected"), this.__refactorClass(i, this.conf.classNames.divider, s.listitem + "_divider"), this.__refactorClass(i, this.conf.classNames.spacer, s.listitem + "_spacer");var r = t.data(a.parent);if (r && r.is("." + s.listitem) && !r.children("." + s.btn + "_next").length) {
            var l = r.children("a, span").first(),
                o = e('<a class="' + s.btn + '_next" href="#' + t.attr("id") + '" />').insertBefore(l);l.is("span") && o.addClass(s.btn + "_fullwidth");
          }this.trigger("initListview:after", t);
        }, _initOpened: function _initOpened() {
          this.trigger("initOpened:before");var e = this.$pnls.find("." + s.listitem + "_selected").removeClass(s.listitem + "_selected").last().addClass(s.listitem + "_selected"),
              t = e.length ? e.closest("." + s.panel) : this.$pnls.children("." + s.panel).first();this.openPanel(t, !1), this.trigger("initOpened:after");
        }, _initAnchors: function _initAnchors() {
          this.trigger("initAnchors:before");var t = this;l.$body.on(r.click + "-oncanvas", "a[href]", function (i) {
            var a = e(this),
                r = a.attr("href"),
                l = t.$menu.find(a).length,
                o = a.is("." + s.listitem + " > a"),
                d = a.is('[rel="external"]') || a.is('[target="_blank"]');if (l && r.length > 1 && "#" == r.slice(0, 1)) try {
              var c = t.$menu.find(r);if (c.is("." + s.panel)) return t[a.parent().hasClass(s.listitem + "_vertical") ? "togglePanel" : "openPanel"](c), void i.preventDefault();
            } catch (h) {}var f = { close: null, setSelected: null, preventDefault: "#" == r.slice(0, 1) };for (var p in e[n].addons) {
              var u = e[n].addons[p].clickAnchor.call(t, a, l, o, d);if (u) {
                if ("boolean" == typeof u) return void i.preventDefault();"object" == (typeof u === "undefined" ? "undefined" : _typeof(u)) && (f = e.extend({}, f, u));
              }
            }l && o && !d && (t.__valueOrFn(a, t.opts.onClick.setSelected, f.setSelected) && t.setSelected(e(i.target).parent()), t.__valueOrFn(a, t.opts.onClick.preventDefault, f.preventDefault) && i.preventDefault(), t.__valueOrFn(a, t.opts.onClick.close, f.close) && t.opts.offCanvas && "function" == typeof t.close && t.close());
          }), this.trigger("initAnchors:after");
        }, _initMatchMedia: function _initMatchMedia() {
          var e = this;for (var t in this.mtch) {
            !function () {
              var n = t,
                  i = window.matchMedia(n);e._fireMatchMedia(n, i), i.addListener(function (t) {
                e._fireMatchMedia(n, t);
              });
            }();
          }
        }, _fireMatchMedia: function _fireMatchMedia(e, t) {
          for (var n = t.matches ? "yes" : "no", i = 0; i < this.mtch[e].length; i++) {
            this.mtch[e][i][n].call(this);
          }
        }, _getOriginalMenuId: function _getOriginalMenuId() {
          var e = this.$menu.attr("id");return this.conf.clone && e && e.length && (e = s.umm(e)), e;
        }, __api: function __api() {
          var t = this,
              n = {};return e.each(this._api, function (e) {
            var i = this;n[i] = function () {
              var e = t[i].apply(t, arguments);return "undefined" == typeof e ? n : e;
            };
          }), n;
        }, __valueOrFn: function __valueOrFn(e, t, n) {
          if ("function" == typeof t) {
            var i = t.call(e[0]);if ("undefined" != typeof i) return i;
          }return "function" != typeof t && "undefined" != typeof t || "undefined" == typeof n ? t : n;
        }, __getPanelTitle: function __getPanelTitle(t, i) {
          var s;return "function" == typeof this.opts.navbar.title && (s = this.opts.navbar.title.call(t[0])), "undefined" == typeof s && (s = t.data(a.title)), "undefined" != typeof s ? s : "string" == typeof i ? e[n].i18n(i) : e[n].i18n(e[n].defaults.navbar.title);
        }, __refactorClass: function __refactorClass(e, t, n) {
          return e.filter("." + t).removeClass(t).addClass(n);
        }, __findAddBack: function __findAddBack(e, t) {
          return e.find(t).add(e.filter(t));
        }, __childAddBack: function __childAddBack(e, t) {
          return e.children(t).add(e.filter(t));
        }, __filterListItems: function __filterListItems(e) {
          return e.not("." + s.listitem + "_divider").not("." + s.hidden);
        }, __filterListItemAnchors: function __filterListItemAnchors(e) {
          return this.__filterListItems(e).children("a").not("." + s.btn + "_next");
        }, __openPanelWoAnimation: function __openPanelWoAnimation(e) {
          e.hasClass(s.panel + "_noanimation") || (e.addClass(s.panel + "_noanimation"), this.__transitionend(e, function () {
            e.removeClass(s.panel + "_noanimation");
          }, this.conf.openingInterval), this.openPanel(e));
        }, __transitionend: function __transitionend(e, t, n) {
          var i = !1,
              s = function s(n) {
            "undefined" != typeof n && n.target != e[0] || (i || (e.off(r.transitionend), e.off(r.webkitTransitionEnd), t.call(e[0])), i = !0);
          };e.on(r.transitionend, s), e.on(r.webkitTransitionEnd, s), setTimeout(s, 1.1 * n);
        }, __getUniqueId: function __getUniqueId() {
          return s.mm(e[n].uniqueId++);
        } }, e.fn[n] = function (i, s) {
        t(), i = e.extend(!0, {}, e[n].defaults, i), s = e.extend(!0, {}, e[n].configuration, s);var a = e();return this.each(function () {
          var t = e(this);if (!t.data(n)) {
            var r = new e[n](t, i, s);r.$menu.data(n, r.__api()), a = a.add(r.$menu);
          }
        }), a;
      }, e[n].i18n = function () {
        var t = {};return function (n) {
          switch (typeof n === "undefined" ? "undefined" : _typeof(n)) {case "object":
              return e.extend(t, n), t;case "string":
              return t[n] || n;case "undefined":default:
              return t;}
        };
      }(), e[n].support = { touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1, csstransitions: function () {
          return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransitions || Modernizr.csstransitions;
        }(), csstransforms: function () {
          return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransforms || Modernizr.csstransforms;
        }(), csstransforms3d: function () {
          return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransforms3d || Modernizr.csstransforms3d;
        }() };var s, a, r, l;
    }
  }(jQuery);
  /*
   * jQuery mmenu offCanvas add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (e) {
    var t = "mmenu",
        n = "offCanvas";e[t].addons[n] = { setup: function setup() {
        if (this.opts[n]) {
          var i = this.opts[n],
              s = this.conf[n];r = e[t].glbl, this._api = e.merge(this._api, ["open", "close", "setPage"]), "object" != (typeof i === "undefined" ? "undefined" : _typeof(i)) && (i = {}), i = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], i), "string" != typeof s.pageSelector && (s.pageSelector = "> " + s.pageNodetype), this.vars.opened = !1;var a = [o.menu + "_offcanvas"];e[t].support.csstransforms || a.push(o["no-csstransforms"]), e[t].support.csstransforms3d || a.push(o["no-csstransforms3d"]), this.bind("initMenu:after", function () {
            var e = this;this.setPage(r.$page), this._initBlocker(), this["_initWindow_" + n](), this.$menu.addClass(a.join(" ")).parent("." + o.wrapper).removeClass(o.wrapper), this.$menu[s.menuInsertMethod](s.menuInsertSelector);var t = window.location.hash;if (t) {
              var i = this._getOriginalMenuId();i && i == t.slice(1) && setTimeout(function () {
                e.open();
              }, 1e3);
            }
          }), this.bind("open:start:sr-aria", function () {
            this.__sr_aria(this.$menu, "hidden", !1);
          }), this.bind("close:finish:sr-aria", function () {
            this.__sr_aria(this.$menu, "hidden", !0);
          }), this.bind("initMenu:after:sr-aria", function () {
            this.__sr_aria(this.$menu, "hidden", !0);
          });
        }
      }, add: function add() {
        o = e[t]._c, i = e[t]._d, s = e[t]._e, o.add("slideout page no-csstransforms3d"), i.add("style");
      }, clickAnchor: function clickAnchor(e, t) {
        var i = this;if (this.opts[n]) {
          var s = this._getOriginalMenuId();if (s && e.is('[href="#' + s + '"]')) {
            if (t) return this.open(), !0;var a = e.closest("." + o.menu);if (a.length) {
              var p = a.data("mmenu");if (p && p.close) return p.close(), i.__transitionend(a, function () {
                i.open();
              }, i.conf.transitionDuration), !0;
            }return this.open(), !0;
          }if (r.$page) return s = r.$page.first().attr("id"), s && e.is('[href="#' + s + '"]') ? (this.close(), !0) : void 0;
        }
      } }, e[t].defaults[n] = { blockUI: !0, moveBackground: !0 }, e[t].configuration[n] = { pageNodetype: "div", pageSelector: null, noPageSelector: [], wrapPageIfNeeded: !0, menuInsertMethod: "prependTo", menuInsertSelector: "body" }, e[t].prototype.open = function () {
      if (this.trigger("open:before"), !this.vars.opened) {
        var e = this;this._openSetup(), setTimeout(function () {
          e._openFinish();
        }, this.conf.openingInterval), this.trigger("open:after");
      }
    }, e[t].prototype._openSetup = function () {
      var t = this,
          a = this.opts[n];this.closeAllOthers(), r.$page.each(function () {
        e(this).data(i.style, e(this).attr("style") || "");
      }), r.$wndw.trigger(s.resize + "-" + n, [!0]);var p = [o.wrapper + "_opened"];a.blockUI && p.push(o.wrapper + "_blocking"), "modal" == a.blockUI && p.push(o.wrapper + "_modal"), a.moveBackground && p.push(o.wrapper + "_background"), r.$html.addClass(p.join(" ")), setTimeout(function () {
        t.vars.opened = !0;
      }, this.conf.openingInterval), this.$menu.addClass(o.menu + "_opened");
    }, e[t].prototype._openFinish = function () {
      var e = this;this.__transitionend(r.$page.first(), function () {
        e.trigger("open:finish");
      }, this.conf.transitionDuration), this.trigger("open:start"), r.$html.addClass(o.wrapper + "_opening");
    }, e[t].prototype.close = function () {
      if (this.trigger("close:before"), this.vars.opened) {
        var t = this;this.__transitionend(r.$page.first(), function () {
          t.$menu.removeClass(o.menu + "_opened");var n = [o.wrapper + "_opened", o.wrapper + "_blocking", o.wrapper + "_modal", o.wrapper + "_background"];r.$html.removeClass(n.join(" ")), r.$page.each(function () {
            e(this).attr("style", e(this).data(i.style));
          }), t.vars.opened = !1, t.trigger("close:finish");
        }, this.conf.transitionDuration), this.trigger("close:start"), r.$html.removeClass(o.wrapper + "_opening"), this.trigger("close:after");
      }
    }, e[t].prototype.closeAllOthers = function () {
      r.$body.find("." + o.menu + "_offcanvas").not(this.$menu).each(function () {
        var n = e(this).data(t);n && n.close && n.close();
      });
    }, e[t].prototype.setPage = function (t) {
      this.trigger("setPage:before", t);var i = this,
          s = this.conf[n];t && t.length || (t = r.$body.find(s.pageSelector), s.noPageSelector.length && (t = t.not(s.noPageSelector.join(", "))), t.length > 1 && s.wrapPageIfNeeded && (t = t.wrapAll("<" + this.conf[n].pageNodetype + " />").parent())), t.each(function () {
        e(this).attr("id", e(this).attr("id") || i.__getUniqueId());
      }), t.addClass(o.page + " " + o.slideout), r.$page = t, this.trigger("setPage:after", t);
    }, e[t].prototype["_initWindow_" + n] = function () {
      r.$wndw.off(s.keydown + "-" + n).on(s.keydown + "-" + n, function (e) {
        if (r.$html.hasClass(o.wrapper + "_opened") && 9 == e.keyCode) return e.preventDefault(), !1;
      });var e = 0;r.$wndw.off(s.resize + "-" + n).on(s.resize + "-" + n, function (t, n) {
        if (1 == r.$page.length && (n || r.$html.hasClass(o.wrapper + "_opened"))) {
          var i = r.$wndw.height();(n || i != e) && (e = i, r.$page.css("minHeight", i));
        }
      });
    }, e[t].prototype._initBlocker = function () {
      var t = this;this.opts[n].blockUI && (r.$blck || (r.$blck = e('<div class="' + o.page + "__blocker " + o.slideout + '" />')), r.$blck.appendTo(r.$body).off(s.touchstart + "-" + n + " " + s.touchmove + "-" + n).on(s.touchstart + "-" + n + " " + s.touchmove + "-" + n, function (e) {
        e.preventDefault(), e.stopPropagation(), r.$blck.trigger(s.mousedown + "-" + n);
      }).off(s.mousedown + "-" + n).on(s.mousedown + "-" + n, function (e) {
        e.preventDefault(), r.$html.hasClass(o.wrapper + "_modal") || (t.closeAllOthers(), t.close());
      }));
    };var o, i, s, r;
  }(jQuery);
  /*
   * jQuery mmenu scrollBugFix add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (o) {
    var t = "mmenu",
        n = "scrollBugFix";o[t].addons[n] = { setup: function setup() {
        var r = this.opts[n];this.conf[n];i = o[t].glbl, o[t].support.touch && this.opts.offCanvas && this.opts.offCanvas.blockUI && ("boolean" == typeof r && (r = { fix: r }), "object" != (typeof r === "undefined" ? "undefined" : _typeof(r)) && (r = {}), r = this.opts[n] = o.extend(!0, {}, o[t].defaults[n], r), r.fix && (this.bind("open:start", function () {
          this.$pnls.children("." + e.panel + "_opened").scrollTop(0);
        }), this.bind("initMenu:after", function () {
          this["_initWindow_" + n]();
        })));
      }, add: function add() {
        e = o[t]._c, r = o[t]._d, s = o[t]._e;
      }, clickAnchor: function clickAnchor(o, t) {} }, o[t].defaults[n] = { fix: !0 }, o[t].prototype["_initWindow_" + n] = function () {
      var t = this;i.$docu.off(s.touchmove + "-" + n).on(s.touchmove + "-" + n, function (o) {
        i.$html.hasClass(e.wrapper + "_opened") && o.preventDefault();
      });var r = !1;i.$body.off(s.touchstart + "-" + n).on(s.touchstart + "-" + n, "." + e.panels + "> ." + e.panel, function (o) {
        i.$html.hasClass(e.wrapper + "_opened") && (r || (r = !0, 0 === o.currentTarget.scrollTop ? o.currentTarget.scrollTop = 1 : o.currentTarget.scrollHeight === o.currentTarget.scrollTop + o.currentTarget.offsetHeight && (o.currentTarget.scrollTop -= 1), r = !1));
      }).off(s.touchmove + "-" + n).on(s.touchmove + "-" + n, "." + e.panels + "> ." + e.panel, function (t) {
        i.$html.hasClass(e.wrapper + "_opened") && o(this)[0].scrollHeight > o(this).innerHeight() && t.stopPropagation();
      }), i.$wndw.off(s.orientationchange + "-" + n).on(s.orientationchange + "-" + n, function () {
        t.$pnls.children("." + e.panel + "_opened").scrollTop(0).css({ "-webkit-overflow-scrolling": "auto" }).css({ "-webkit-overflow-scrolling": "touch" });
      });
    };var e, r, s, i;
  }(jQuery);
  /*
   * jQuery mmenu screenReader add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (t) {
    var i = "mmenu",
        n = "screenReader";t[i].addons[n] = { setup: function setup() {
        var a = this,
            o = this.opts[n],
            h = this.conf[n];s = t[i].glbl, "boolean" == typeof o && (o = { aria: o, text: o }), "object" != (typeof o === "undefined" ? "undefined" : _typeof(o)) && (o = {}), o = this.opts[n] = t.extend(!0, {}, t[i].defaults[n], o), o.aria && (this.bind("initAddons:after", function () {
          this.bind("initMenu:after", function () {
            this.trigger("initMenu:after:sr-aria");
          }), this.bind("initNavbar:after", function () {
            this.trigger("initNavbar:after:sr-aria", arguments[0]);
          }), this.bind("openPanel:start", function () {
            this.trigger("openPanel:start:sr-aria", arguments[0]);
          }), this.bind("close:start", function () {
            this.trigger("close:start:sr-aria");
          }), this.bind("close:finish", function () {
            this.trigger("close:finish:sr-aria");
          }), this.bind("open:start", function () {
            this.trigger("open:start:sr-aria");
          }), this.bind("initOpened:after", function () {
            this.trigger("initOpened:after:sr-aria");
          });
        }), this.bind("updateListview", function () {
          this.$pnls.find("." + e.listview).children().each(function () {
            a.__sr_aria(t(this), "hidden", t(this).is("." + e.hidden));
          });
        }), this.bind("openPanel:start", function (t) {
          var i = this.$menu.find("." + e.panel).not(t).not(t.parents("." + e.panel)),
              n = t.add(t.find("." + e.listitem + "_vertical ." + e.listitem + "_opened").children("." + e.panel));this.__sr_aria(i, "hidden", !0), this.__sr_aria(n, "hidden", !1);
        }), this.bind("closePanel", function (t) {
          this.__sr_aria(t, "hidden", !0);
        }), this.bind("initPanels:after", function (i) {
          var n = i.find("." + e.btn).each(function () {
            a.__sr_aria(t(this), "owns", t(this).attr("href").replace("#", ""));
          });this.__sr_aria(n, "haspopup", !0);
        }), this.bind("initNavbar:after", function (t) {
          var i = t.children("." + e.navbar);this.__sr_aria(i, "hidden", !t.hasClass(e.panel + "_has-navbar"));
        }), o.text && (this.bind("initlistview:after", function (t) {
          var i = t.find("." + e.listview).find("." + e.btn + "_fullwidth").parent().children("span");this.__sr_aria(i, "hidden", !0);
        }), "parent" == this.opts.navbar.titleLink && this.bind("initNavbar:after", function (t) {
          var i = t.children("." + e.navbar),
              n = !!i.children("." + e.btn + "_prev").length;this.__sr_aria(i.children("." + e.title), "hidden", n);
        }))), o.text && (this.bind("initAddons:after", function () {
          this.bind("setPage:after", function () {
            this.trigger("setPage:after:sr-text", arguments[0]);
          });
        }), this.bind("initNavbar:after", function (n) {
          var r = n.children("." + e.navbar),
              a = r.children("." + e.title).text(),
              s = t[i].i18n(h.text.closeSubmenu);a && (s += " (" + a + ")"), r.children("." + e.btn + "_prev").html(this.__sr_text(s));
        }), this.bind("initListview:after", function (n) {
          var s = n.data(r.parent);if (s && s.length) {
            var o = s.children("." + e.btn + "_next"),
                d = o.nextAll("span, a").first().text(),
                l = t[i].i18n(h.text[o.parent().is("." + e.listitem + "_vertical") ? "toggleSubmenu" : "openSubmenu"]);d && (l += " (" + d + ")"), o.html(a.__sr_text(l));
          }
        }));
      }, add: function add() {
        e = t[i]._c, r = t[i]._d, a = t[i]._e, e.add("sronly");
      }, clickAnchor: function clickAnchor(t, i) {} }, t[i].defaults[n] = { aria: !0, text: !0 }, t[i].configuration[n] = { text: { closeMenu: "Close menu", closeSubmenu: "Close submenu", openSubmenu: "Open submenu", toggleSubmenu: "Toggle submenu" } }, t[i].prototype.__sr_aria = function (t, i, n) {
      t.prop("aria-" + i, n)[n ? "attr" : "removeAttr"]("aria-" + i, n);
    }, t[i].prototype.__sr_role = function (t, i) {
      t.prop("role", i)[i ? "attr" : "removeAttr"]("role", i);
    }, t[i].prototype.__sr_text = function (t) {
      return '<span class="' + e.sronly + '">' + t + "</span>";
    };var e, r, a, s;
  }(jQuery);
  /*
   * jQuery mmenu autoHeight add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (t) {
    var e = "mmenu",
        i = "autoHeight";t[e].addons[i] = { setup: function setup() {
        var h = this.opts[i];this.conf[i];if (a = t[e].glbl, "boolean" == typeof h && h && (h = { height: "auto" }), "string" == typeof h && (h = { height: h }), "object" != (typeof h === "undefined" ? "undefined" : _typeof(h)) && (h = {}), h = this.opts[i] = t.extend(!0, {}, t[e].defaults[i], h), "auto" == h.height || "highest" == h.height) {
          this.bind("initMenu:after", function () {
            this.$menu.addClass(n.menu + "_autoheight");
          });var s = function s(e) {
            if (!this.opts.offCanvas || this.vars.opened) {
              var i = Math.max(parseInt(this.$pnls.css("top"), 10), 0) || 0,
                  s = Math.max(parseInt(this.$pnls.css("bottom"), 10), 0) || 0,
                  a = 0;this.$menu.addClass(n.menu + "_autoheight-measuring"), "auto" == h.height ? (e = e || this.$pnls.children("." + n.panel + "_opened"), e.parent("." + n.listitem + "_vertical").length && (e = e.parents("." + n.panel).not(function () {
                return t(this).parent("." + n.listitem + "_vertical").length;
              })), e.length || (e = this.$pnls.children("." + n.panel)), a = e.first().outerHeight()) : "highest" == h.height && this.$pnls.children("." + n.panel).each(function () {
                var e = t(this);e.parent("." + n.listitem + "_vertical").length && (e = e.parents("." + n.panel).not(function () {
                  return t(this).parent("." + n.listitem + "_vertical").length;
                })), a = Math.max(a, e.first().outerHeight());
              }), this.$menu.height(a + i + s).removeClass(n.menu + "_autoheight-measuring");
            }
          };this.opts.offCanvas && this.bind("open:start", s), "highest" == h.height && this.bind("initPanels:after", s), "auto" == h.height && (this.bind("updateListview", s), this.bind("openPanel:start", s), this.bind("closePanel", s));
        }
      }, add: function add() {
        n = t[e]._c, h = t[e]._d, s = t[e]._e, s.add("resize");
      }, clickAnchor: function clickAnchor(t, e) {} }, t[e].defaults[i] = { height: "default" };var n, h, s, a;
  }(jQuery);
  /*
   * jQuery mmenu backButton add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (n) {
    var t = "mmenu",
        o = "backButton";n[t].addons[o] = { setup: function setup() {
        function e() {
          l = [c], this.$pnls.children("." + i.panel + "_opened-parent").add(s.$pnls.children("." + i.panel + "_opened")).each(function () {
            l.push("#" + n(this).attr("id"));
          });
        }if (this.opts.offCanvas) {
          var s = this,
              h = this.opts[o];this.conf[o];a = n[t].glbl, "boolean" == typeof h && (h = { close: h }), "object" != (typeof h === "undefined" ? "undefined" : _typeof(h)) && (h = {}), h = n.extend(!0, {}, n[t].defaults[o], h);var c = "#" + this.$menu.attr("id");if (h.close) {
            var l = [];this.bind("open:finish", function () {
              history.pushState(null, document.title, c);
            }), this.bind("open:finish", e), this.bind("openPanel:finish", e), this.bind("close:finish", function () {
              l = [], history.back(), history.pushState(null, document.title, location.pathname + location.search);
            }), n(window).on("popstate", function (t) {
              if (s.vars.opened && l.length) {
                l = l.slice(0, -1);var o = l[l.length - 1];o == c ? s.close() : (s.openPanel(n(o)), history.pushState(null, document.title, c));
              }
            });
          }h.open && n(window).on("popstate", function (n) {
            s.vars.opened || location.hash != c || s.open();
          });
        }
      }, add: function add() {
        return window.history && window.history.pushState ? (i = n[t]._c, e = n[t]._d, void (s = n[t]._e)) : void (n[t].addons[o].setup = function () {});
      }, clickAnchor: function clickAnchor(n, t) {} }, n[t].defaults[o] = { close: !1, open: !1 };var i, e, s, a;
  }(jQuery);
  /*
   * jQuery mmenu columns add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (e) {
    var n = "mmenu",
        i = "columns";e[n].addons[i] = { setup: function setup() {
        function l(e) {
          var n = e.data(s.parent);if (n && (n = n.closest("." + a.panel), n.length)) {
            var i = n.attr("class");if (i && (i = i.split(a.panel + "_columns-")[1])) for (i = parseInt(i.split(" ")[0], 10) + 1; i > 0;) {
              var l = this.$pnls.children("." + a.panel + "_columns-" + i);if (!l.length) {
                i = -1;break;
              }i++, l.removeClass(r).addClass(a.hidden);
            }
          }
        }var o = this.opts[i];this.conf[i];if (t = e[n].glbl, "boolean" == typeof o && (o = { add: o }), "number" == typeof o && (o = { add: !0, visible: o }), "object" != (typeof o === "undefined" ? "undefined" : _typeof(o)) && (o = {}), "number" == typeof o.visible && (o.visible = { min: o.visible, max: o.visible }), o = this.opts[i] = e.extend(!0, {}, e[n].defaults[i], o), o.add) {
          o.visible.min = Math.max(1, Math.min(6, o.visible.min)), o.visible.max = Math.max(o.visible.min, Math.min(6, o.visible.max));for (var d = "", p = "", m = 0; m <= o.visible.max; m++) {
            d += " " + a.menu + "_columns-" + m, p += " " + a.panel + "_columns-" + m;
          }d.length && (d = d.slice(1), p = p.slice(1));var r = p + " " + a.panel + "_opened " + a.panel + "_opened-parent " + a.panel + "_highest",
              c = function c(n) {
            var i = this.$pnls.children("." + a.panel + "_opened-parent").length;n.hasClass(a.panel + "_opened-parent") || i++, i = Math.min(o.visible.max, Math.max(o.visible.min, i)), this.$menu.removeClass(d).addClass(a.menu + "_columns-" + i), this.$pnls.children("." + a.panel).removeClass(p).filter("." + a.panel + "_opened-parent").add(n).slice(-o.visible.max).each(function (n) {
              e(this).addClass(a.panel + "_columns-" + n);
            });
          };this.bind("openPanel:before", l), this.bind("openPanel:start", c);
        }
      }, add: function add() {
        a = e[n]._c, s = e[n]._d, l = e[n]._e;
      }, clickAnchor: function clickAnchor(e, n) {} }, e[n].defaults[i] = { add: !1, visible: { min: 1, max: 3 } };var a, s, l, t;
  }(jQuery);
  /*
   * jQuery mmenu counters add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (t) {
    var e = "mmenu",
        n = "counters";t[e].addons[n] = { setup: function setup() {
        var s = this,
            d = this.opts[n];this.conf[n];if (c = t[e].glbl, "boolean" == typeof d && (d = { add: d, update: d }), "object" != (typeof d === "undefined" ? "undefined" : _typeof(d)) && (d = {}), d = this.opts[n] = t.extend(!0, {}, t[e].defaults[n], d), this.bind("initListview:after", function (t) {
          var e = this.conf.classNames[n].counter;this.__refactorClass(t.find("." + e), e, i.counter);
        }), d.add && this.bind("initListview:after", function (e) {
          var n;switch (d.addTo) {case "panels":
              n = e;break;default:
              n = e.filter(d.addTo);}n.each(function () {
            var e = t(this).data(a.parent);e && (e.children("." + i.counter).length || e.prepend(t('<em class="' + i.counter + '" />')));
          });
        }), d.update) {
          var r = function r(e) {
            e = e || this.$pnls.children("." + i.panel), e.each(function () {
              var e = t(this),
                  n = e.data(a.parent);if (n) {
                var c = n.children("em." + i.counter);c.length && (e = e.children("." + i.listview), e.length && c.html(s.__filterListItems(e.children()).length));
              }
            });
          };this.bind("initListview:after", r), this.bind("updateListview", r);
        }
      }, add: function add() {
        i = t[e]._c, a = t[e]._d, s = t[e]._e, i.add("counter");
      }, clickAnchor: function clickAnchor(t, e) {} }, t[e].defaults[n] = { add: !1, addTo: "panels", count: !1 }, t[e].configuration.classNames[n] = { counter: "Counter" };var i, a, s, c;
  }(jQuery);
  /*
   * jQuery mmenu dividers add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (i) {
    var e = "mmenu",
        t = "dividers";i[e].addons[t] = { setup: function setup() {
        var s = this,
            a = this.opts[t];this.conf[t];if (l = i[e].glbl, "boolean" == typeof a && (a = { add: a, fixed: a }), "object" != (typeof a === "undefined" ? "undefined" : _typeof(a)) && (a = {}), a = this.opts[t] = i.extend(!0, {}, i[e].defaults[t], a), a.type && this.bind("initMenu:after", function () {
          this.$menu.addClass(n.menu + "_" + t + "-" + a.type);
        }), a.add && this.bind("initListview:after", function (e) {
          var t;switch (a.addTo) {case "panels":
              t = e;break;default:
              t = e.filter(a.addTo);}t.length && (t.children("." + n.listitem + "_divider").remove(), t.find("." + n.listview).each(function () {
            var e = "";s.__filterListItems(i(this).children()).each(function () {
              var t = i.trim(i(this).children("a, span").text()).slice(0, 1).toLowerCase();t != e && t.length && (e = t, i('<li class="' + n.listitem + " " + n.listitem + '_divider">' + t + "</li>").insertBefore(this));
            });
          }));
        }), a.fixed) {
          this.bind("initPanels:after", function () {
            "undefined" == typeof this.$fixeddivider && (this.$fixeddivider = i('<ul class="' + n.listview + " " + n.listview + '_fixeddivider"><li class="' + n.listitem + " " + n.listitem + '_divider"></li></ul>').appendTo(this.$pnls).children());
          });var o = function o(e) {
            if (e = e || this.$pnls.children("." + n.panel + "_opened"), !e.is(":hidden")) {
              var t = e.find("." + n.listitem + "_divider").not("." + n.hidden),
                  s = e.scrollTop() || 0,
                  d = "";t.each(function () {
                i(this).position().top + s < s + 1 && (d = i(this).text());
              }), this.$fixeddivider.text(d), this.$pnls[d.length ? "addClass" : "removeClass"](n.panel + "_dividers");
            }
          };this.bind("open:start", o), this.bind("openPanel:start", o), this.bind("updateListview", o), this.bind("initPanel:after", function (i) {
            i.off(d.scroll + "-" + t + " " + d.touchmove + "-" + t).on(d.scroll + "-" + t + " " + d.touchmove + "-" + t, function (e) {
              i.hasClass(n.panel + "_opened") && o.call(s, i);
            });
          });
        }
      }, add: function add() {
        n = i[e]._c, s = i[e]._d, d = i[e]._e, d.add("scroll");
      }, clickAnchor: function clickAnchor(i, e) {} }, i[e].defaults[t] = { add: !1, addTo: "panels", fixed: !1, type: null };var n, s, d, l;
  }(jQuery);
  /*
   * jQuery mmenu drag add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (e) {
    function n(e, n, t) {
      return e < n && (e = n), e > t && (e = t), e;
    }function t(t, o, i) {
      var r,
          p,
          d,
          f = this,
          c = { events: "panleft panright", typeLower: "x", typeUpper: "X", open_dir: "right", close_dir: "left", negative: !1 },
          m = "width",
          l = c.open_dir,
          u = function u(e) {
        e <= t.maxStartPos && (g = 1);
      },
          h = function h() {
        return e("." + s.slideout);
      },
          g = 0,
          v = 0,
          b = 0,
          w = this.opts.extensions.all,
          _ = "undefined" == typeof w ? "left" : w.indexOf(s.mm("position-right")) > -1 ? "right" : w.indexOf(s.mm("position-top")) > -1 ? "top" : w.indexOf(s.mm("position-bottom")) > -1 ? "bottom" : "left",
          y = "undefined" == typeof w ? "back" : w.indexOf(s.mm("position-top")) > -1 || w.indexOf(s.mm("position-bottom")) > -1 || w.indexOf(s.mm("position-front")) > -1 ? "front" : "back";switch (_) {case "top":case "bottom":
          c.events = "panup pandown", c.typeLower = "y", c.typeUpper = "Y", m = "height";}switch (_) {case "right":case "bottom":
          c.negative = !0, u = function u(e) {
            e >= i.$wndw[m]() - t.maxStartPos && (g = 1);
          };}switch (_) {case "right":
          c.open_dir = "left", c.close_dir = "right";break;case "top":
          c.open_dir = "down", c.close_dir = "up";break;case "bottom":
          c.open_dir = "up", c.close_dir = "down";}switch (y) {case "front":
          h = function h() {
            return f.$menu;
          };}var x,
          O = this.__valueOrFn(this.$menu, t.node, i.$page);"string" == typeof O && (O = e(O));var $ = new Hammer(O[0], this.opts[a].vendors.hammer);$.on("panstart", function (e) {
        u(e.center[c.typeLower]), x = h(), l = c.open_dir;
      }), $.on(c.events + " panend", function (e) {
        g > 0 && e.preventDefault();
      }), $.on(c.events, function (e) {
        if (r = e["delta" + c.typeUpper], c.negative && (r = -r), r != v && (l = r >= v ? c.open_dir : c.close_dir), v = r, v > t.threshold && 1 == g) {
          if (i.$html.hasClass(s.wrapper + "_opened")) return;g = 2, f._openSetup(), f.trigger("open:start"), i.$html.addClass(s.dragging), b = n(i.$wndw[m]() * o[m].perc, o[m].min, o[m].max);
        }2 == g && (p = n(v, 10, b) - ("front" == y ? b : 0), c.negative && (p = -p), d = "translate" + c.typeUpper + "(" + p + "px )", x.css({ "-webkit-transform": "-webkit-" + d, transform: d }));
      }), $.on("panend", function (e) {
        2 == g && (i.$html.removeClass(s.dragging), x.css("transform", ""), f[l == c.open_dir ? "_openFinish" : "close"]()), g = 0;
      });
    }function o(e, n, t, o) {
      var i = this,
          p = e.data(r.parent);if (p) {
        p = p.closest("." + s.panel);var d = new Hammer(e[0], i.opts[a].vendors.hammer),
            f = null;d.on("panright", function (e) {
          f || (i.openPanel(p), f = setTimeout(function () {
            clearTimeout(f), f = null;
          }, i.conf.openingInterval + i.conf.transitionDuration));
        });
      }
    }var i = "mmenu",
        a = "drag";e[i].addons[a] = { setup: function setup() {
        if (this.opts.offCanvas) {
          var n = this.opts[a],
              s = this.conf[a];d = e[i].glbl, "boolean" == typeof n && (n = { menu: n, panels: n }), "object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) && (n = {}), "boolean" == typeof n.menu && (n.menu = { open: n.menu }), "object" != _typeof(n.menu) && (n.menu = {}), "boolean" == typeof n.panels && (n.panels = { close: n.panels }), "object" != _typeof(n.panels) && (n.panels = {}), n = this.opts[a] = e.extend(!0, {}, e[i].defaults[a], n), n.menu.open && this.bind("setPage:after", function () {
            t.call(this, n.menu, s.menu, d);
          }), n.panels.close && this.bind("initPanel:after", function (e) {
            o.call(this, e, n.panels, s.panels, d);
          });
        }
      }, add: function add() {
        return "function" != typeof Hammer || Hammer.VERSION < 2 ? (e[i].addons[a].add = function () {}, void (e[i].addons[a].setup = function () {})) : (s = e[i]._c, r = e[i]._d, p = e[i]._e, void s.add("dragging"));
      }, clickAnchor: function clickAnchor(e, n) {} }, e[i].defaults[a] = { menu: { open: !1, maxStartPos: 100, threshold: 50 }, panels: { close: !1 }, vendors: { hammer: {} } }, e[i].configuration[a] = { menu: { width: { perc: .8, min: 140, max: 440 }, height: { perc: .8, min: 140, max: 880 } }, panels: {} };var s, r, p, d;
  }(jQuery);
  /*
   * jQuery mmenu dropdown add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (t) {
    var o = "mmenu",
        e = "dropdown";t[o].addons[e] = { setup: function setup() {
        if (this.opts.offCanvas) {
          var r = this,
              f = this.opts[e],
              p = this.conf[e];if (a = t[o].glbl, "boolean" == typeof f && f && (f = { drop: f }), "object" != (typeof f === "undefined" ? "undefined" : _typeof(f)) && (f = {}), "string" == typeof f.position && (f.position = { of: f.position }), f = this.opts[e] = t.extend(!0, {}, t[o].defaults[e], f), f.drop) {
            var l;this.bind("initMenu:after", function () {
              if (this.$menu.addClass(i.menu + "_" + e), "string" != typeof f.position.of) {
                var o = this._getOriginalMenuId();o && o.length && (f.position.of = '[href="#' + o + '"]');
              }"string" == typeof f.position.of && (l = t(f.position.of), f.event = f.event.split(" "), 1 == f.event.length && (f.event[1] = f.event[0]), "hover" == f.event[0] && l.on(s.mouseenter + "-" + e, function () {
                r.open();
              }), "hover" == f.event[1] && this.$menu.on(s.mouseleave + "-" + e, function () {
                r.close();
              }));
            }), this.bind("open:start", function () {
              this.$menu.data(n.style, this.$menu.attr("style") || ""), a.$html.addClass(i.wrapper + "_dropdown");
            }), this.bind("close:finish", function () {
              this.$menu.attr("style", this.$menu.data(n.style)), a.$html.removeClass(i.wrapper + "_dropdown");
            });var h = function h(t, o) {
              var e = o[0],
                  n = o[1],
                  s = "x" == t ? "scrollLeft" : "scrollTop",
                  r = "x" == t ? "outerWidth" : "outerHeight",
                  h = "x" == t ? "left" : "top",
                  u = "x" == t ? "right" : "bottom",
                  d = "x" == t ? "width" : "height",
                  c = "x" == t ? "maxWidth" : "maxHeight",
                  m = null,
                  v = a.$wndw[s](),
                  x = l.offset()[h] -= v,
                  b = x + l[r](),
                  w = a.$wndw[d](),
                  g = p.offset.button[t] + p.offset.viewport[t];if (f.position[t]) switch (f.position[t]) {case "left":case "bottom":
                  m = "after";break;case "right":case "top":
                  m = "before";}null === m && (m = x + (b - x) / 2 < w / 2 ? "after" : "before");var $, y;return "after" == m ? ($ = "x" == t ? x : b, y = w - ($ + g), e[h] = $ + p.offset.button[t], e[u] = "auto", f.tip && n.push(i.menu + "_tip-" + ("x" == t ? "left" : "top"))) : ($ = "x" == t ? b : x, y = $ - g, e[u] = "calc( 100% - " + ($ - p.offset.button[t]) + "px )", e[h] = "auto", f.tip && n.push(i.menu + "_tip-" + ("x" == t ? "right" : "bottom"))), e[c] = Math.min(p[d].max, y), [e, n];
            },
                u = function u(t) {
              if (this.vars.opened) {
                this.$menu.attr("style", this.$menu.data(n.style));var o = [{}, []];o = h.call(this, "y", o), o = h.call(this, "x", o), this.$menu.css(o[0]), f.tip && this.$menu.removeClass(i.tipleft + " " + i.tipright + " " + i.tiptop + " " + i.tipbottom).addClass(o[1].join(" "));
              }
            };this.bind("open:start", u), a.$wndw.on(s.resize + "-" + e, function (t) {
              u.call(r);
            }), this.opts.offCanvas.blockUI || a.$wndw.on(s.scroll + "-" + e, function (t) {
              u.call(r);
            });
          }
        }
      }, add: function add() {
        i = t[o]._c, n = t[o]._d, s = t[o]._e, i.add("dropdown"), s.add("mouseenter mouseleave resize scroll");
      }, clickAnchor: function clickAnchor(t, o) {} }, t[o].defaults[e] = { drop: !1, event: "click", position: {}, tip: !0 }, t[o].configuration[e] = { offset: { button: { x: -5, y: 5 }, viewport: { x: 20, y: 20 } }, height: { max: 880 }, width: { max: 440 } };var i, n, s, a;
  }(jQuery);
  /*
   * jQuery mmenu fixedElements add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (s) {
    var t = "mmenu",
        i = "fixedElements";s[t].addons[i] = { setup: function setup() {
        if (this.opts.offCanvas) {
          var n = (this.opts[i], this.conf[i]);c = s[t].glbl;var o = function o(t) {
            var o = this.conf.classNames[i].fixed,
                f = t.find("." + o);this.__refactorClass(f, o, e.slideout), f[n.elemInsertMethod](n.elemInsertSelector);var a = this.conf.classNames[i].sticky,
                r = t.find("." + a);this.__refactorClass(r, a, e.sticky), r = t.find("." + e.sticky), r.length && (this.bind("open:start", function () {
              if ("hidden" == c.$html.css("overflow")) {
                var t = c.$wndw.scrollTop() + n.sticky.offset;r.each(function () {
                  s(this).css("top", parseInt(s(this).css("top"), 10) + t);
                });
              }
            }), this.bind("close:finish", function () {
              r.css("top", "");
            }));
          };this.bind("setPage:after", o);
        }
      }, add: function add() {
        e = s[t]._c, n = s[t]._d, o = s[t]._e, e.add("sticky");
      }, clickAnchor: function clickAnchor(s, t) {} }, s[t].configuration[i] = { sticky: { offset: 0 }, elemInsertMethod: "appendTo", elemInsertSelector: "body" }, s[t].configuration.classNames[i] = { fixed: "Fixed", sticky: "Sticky" };var e, n, o, c;
  }(jQuery);
  /*
   * jQuery mmenu iconbar add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (a) {
    var t = "mmenu",
        n = "iconbar";a[t].addons[n] = { setup: function setup() {
        function s(a) {
          f.removeClass(e.iconbar + "__tab_selected");var t = f.filter('[href="#' + a.attr("id") + '"]');if (t.length) t.addClass(e.iconbar + "__tab_selected");else {
            var n = a.data(i.parent);n && n.length && s(n.closest("." + e.panel));
          }
        }var d = this,
            c = this.opts[n];this.conf[n];if (r = a[t].glbl, c instanceof Array && (c = { add: !0, top: c }), c.add) {
          var l = null;if (a.each(["top", "bottom"], function (t, n) {
            var i = c[n];i instanceof Array || (i = [i]);for (var o = a('<div class="' + e.iconbar + "__" + n + '" />'), r = 0, s = i.length; r < s; r++) {
              o.append(i[r]);
            }o.children().length && (l || (l = a('<div class="' + e.iconbar + '" />')), l.append(o));
          }), l && (this.bind("initMenu:after", function () {
            this.$menu.addClass(e.menu + "_iconbar-" + c.size).prepend(l);
          }), "tabs" == c.type)) {
            l.addClass(e.iconbar + "_tabs");var f = l.find("a");f.on(o.click + "-" + n, function (t) {
              var n = a(this);if (n.hasClass(e.iconbar + "__tab_selected")) return void t.stopImmediatePropagation();try {
                var i = a(n.attr("href"));i.hasClass(e.panel) && (t.preventDefault(), t.stopImmediatePropagation(), d.__openPanelWoAnimation(i));
              } catch (o) {}
            }), this.bind("openPanel:start", s);
          }
        }
      }, add: function add() {
        e = a[t]._c, i = a[t]._d, o = a[t]._e, e.add(n);
      }, clickAnchor: function clickAnchor(a, t) {} }, a[t].defaults[n] = { add: !1, size: 40, top: [], bottom: [] }, a[t].configuration[n] = {};var e, i, o, r;
  }(jQuery);
  /*
   * jQuery mmenu iconPanels add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (e) {
    var i = "mmenu",
        n = "iconPanels";e[i].addons[n] = { setup: function setup() {
        var a = this,
            l = this.opts[n],
            d = (this.conf[n], !1);if (s = e[i].glbl, "boolean" == typeof l && (l = { add: l }), "number" != typeof l && "string" != typeof l || (l = { add: !0, visible: l }), "object" != (typeof l === "undefined" ? "undefined" : _typeof(l)) && (l = {}), "first" == l.visible && (d = !0, l.visible = 1), l = this.opts[n] = e.extend(!0, {}, e[i].defaults[n], l), l.visible = Math.min(3, Math.max(1, l.visible)), l.visible++, l.add) {
          for (var r = "", o = 0; o <= l.visible; o++) {
            r += " " + t.panel + "_iconpanel-" + o;
          }r.length && (r = r.slice(1));var c = function c(i) {
            if (!i.parent("." + t.listitem + "_vertical").length) {
              var n = a.$pnls.children("." + t.panel).removeClass(r);d && n.removeClass(t.panel + "_iconpanel-first").first().addClass(t.panel + "_iconpanel-first"), n.filter("." + t.panel + "_opened-parent").removeClass(t.hidden).not(function () {
                return e(this).parent("." + t.listitem + "_vertical").length;
              }).add(i).slice(-l.visible).each(function (i) {
                e(this).addClass(t.panel + "_iconpanel-" + i);
              });
            }
          };this.bind("initMenu:after", function () {
            var e = [t.menu + "_iconpanel-" + l.size];l.hideNavbar && e.push(t.menu + "_hidenavbar"), l.hideDivider && e.push(t.menu + "_hidedivider"), this.$menu.addClass(e.join(" "));
          }), this.bind("openPanel:start", c), this.bind("initPanels:after", function (e) {
            c.call(a, a.$pnls.children("." + t.panel + "_opened"));
          }), this.bind("initListview:after", function (e) {
            !l.blockPanel || e.parent("." + t.listitem + "_vertical").length || e.children("." + t.panel + "__blocker").length || e.prepend('<a href="#' + e.closest("." + t.panel).attr("id") + '" class="' + t.panel + '__blocker" />');
          });
        }
      }, add: function add() {
        t = e[i]._c, a = e[i]._d, l = e[i]._e;
      }, clickAnchor: function clickAnchor(e, i) {} }, e[i].defaults[n] = { add: !1, blockPanel: !0, hideDivider: !1, hideNavbar: !0, size: 40, visible: 3 };var t, a, l, s;
  }(jQuery);
  /*
   * jQuery mmenu keyboardNavigation add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (n) {
    function e(e, t) {
      e = e || this.$pnls.children("." + i.panel + "_opened");var a = n(),
          s = this.$menu.children("." + i.mm("navbars_top") + ", ." + i.mm("navbars_bottom")).children("." + i.navbar);s.find(r).filter(":focus").length || ("default" == t && (a = e.children("." + i.listview).find("a[href]").not("." + i.hidden), a.length || (a = e.find(r).not("." + i.hidden)), a.length || (a = s.find(r).not("." + i.hidden))), a.length || (a = this.$menu.children("." + i.tabstart)), a.first().focus());
    }var t = "mmenu",
        a = "keyboardNavigation";n[t].addons[a] = { setup: function setup() {
        if (!n[t].support.touch) {
          var s = this.opts[a];this.conf[a];if (d = n[t].glbl, "boolean" != typeof s && "string" != typeof s || (s = { enable: s }), "object" != (typeof s === "undefined" ? "undefined" : _typeof(s)) && (s = {}), s = this.opts[a] = n.extend(!0, {}, n[t].defaults[a], s), s.enable) {
            var o = n('<button class="' + i.tabstart + '" tabindex="0" type="button" />'),
                r = n('<button class="' + i.tabend + '" tabindex="0" type="button" />');this.bind("initMenu:after", function () {
              s.enhance && this.$menu.addClass(i.menu + "_keyboardfocus"), this["_initWindow_" + a](s.enhance);
            }), this.bind("initOpened:before", function () {
              this.$menu.prepend(o).append(r).children("." + i.mm("navbars-top") + ", ." + i.mm("navbars-bottom")).children("." + i.navbar).children("a." + i.title).attr("tabindex", -1);
            }), this.bind("open:finish", function () {
              e.call(this, null, s.enable);
            }), this.bind("openPanel:finish", function (n) {
              e.call(this, n, s.enable);
            }), this.bind("initOpened:after:sr-aria", function () {
              var n = this.$menu.children("." + i.tabstart + ", ." + i.tabend);this.__sr_aria(n, "hidden", !0), this.__sr_role(n, "presentation");
            });
          }
        }
      }, add: function add() {
        i = n[t]._c, s = n[t]._d, o = n[t]._e, i.add("tabstart tabend"), o.add("focusin keydown");
      }, clickAnchor: function clickAnchor(n, e) {} }, n[t].defaults[a] = { enable: !1, enhance: !1 }, n[t].configuration[a] = {}, n[t].prototype["_initWindow_" + a] = function (e) {
      d.$wndw.off(o.keydown + "-offCanvas"), d.$wndw.off(o.focusin + "-" + a).on(o.focusin + "-" + a, function (e) {
        if (d.$html.hasClass(i.wrapper + "_opened")) {
          var t = n(e.target);t.is("." + i.tabend) && t.parent().find("." + i.tabstart).focus();
        }
      }), d.$wndw.off(o.keydown + "-" + a).on(o.keydown + "-" + a, function (e) {
        var t = n(e.target),
            a = t.closest("." + i.menu);if (a.length) {
          a.data("mmenu");if (t.is("input, textarea")) ;else switch (e.keyCode) {case 13:
              (t.is(".mm-toggle") || t.is(".mm-check")) && t.trigger(o.click);break;case 32:case 37:case 38:case 39:case 40:
              e.preventDefault();}
        }
      }), e && d.$wndw.off(o.keydown + "-" + a).on(o.keydown + "-" + a, function (e) {
        var t = n(e.target),
            a = t.closest("." + i.menu);if (a.length) {
          var o = a.data("mmenu");if (t.is("input")) switch (e.keyCode) {case 27:
              t.val("");} else switch (e.keyCode) {case 8:
              var d = a.find("." + i.panel + "_opened").data(s.parent);d && d.length && o.openPanel(d.closest("." + i.panel));break;case 27:
              a.hasClass(i.menu + "_offcanvas") && o.close();}
        }
      });
    };var i,
        s,
        o,
        d,
        r = "input, select, textarea, button, label, a[href]";
  }(jQuery);
  /*
   * jQuery mmenu lazySubmenus add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (n) {
    var e = "mmenu",
        i = "lazySubmenus";n[e].addons[i] = { setup: function setup() {
        var t = this.opts[i];this.conf[i];a = n[e].glbl, "boolean" == typeof t && (t = { load: t }), "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && (t = {}), t = this.opts[i] = n.extend(!0, {}, n[e].defaults[i], t), t.load && (this.bind("initMenu:after", function () {
          this.$pnls.find("li").children(this.conf.panelNodetype).not("." + l.inset).not("." + l.nolistview).not("." + l.nopanel).addClass(l.panel + "_lazysubmenu " + l.nolistview + " " + l.nopanel);
        }), this.bind("initPanels:before", function (n) {
          n = n || this.$pnls.children(this.conf.panelNodetype), this.__findAddBack(n, "." + l.panel + "_lazysubmenu").not("." + l.panel + "_lazysubmenu ." + l.panel + "_lazysubmenu").removeClass(l.panel + "_lazysubmenu " + l.nolistview + " " + l.nopanel);
        }), this.bind("initOpened:before", function () {
          var n = this.$pnls.find("." + this.conf.classNames.selected).parents("." + l.panel + "_lazysubmenu");n.length && (n.removeClass(l.panel + "_lazysubmenu " + l.nolistview + " " + l.nopanel), this.initPanels(n.last()));
        }), this.bind("openPanel:before", function (n) {
          var e = this.__findAddBack(n, "." + l.panel + "_lazysubmenu").not("." + l.panel + "_lazysubmenu ." + l.panel + "_lazysubmenu");e.length && this.initPanels(e);
        }));
      }, add: function add() {
        l = n[e]._c, t = n[e]._d, s = n[e]._e;
      }, clickAnchor: function clickAnchor(n, e) {} }, n[e].defaults[i] = { load: !1 }, n[e].configuration[i] = {};var l, t, s, a;
  }(jQuery);
  /*
   * jQuery mmenu navbar add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (n) {
    var t = "mmenu",
        a = "navbars";n[t].addons[a] = { setup: function setup() {
        var o = this,
            r = this.opts[a],
            i = this.conf[a];if (s = n[t].glbl, "undefined" != typeof r) {
          r instanceof Array || (r = [r]);var c = {},
              d = {};r.length && (n.each(r, function (s) {
            var f = r[s];"boolean" == typeof f && f && (f = {}), "object" != (typeof f === "undefined" ? "undefined" : _typeof(f)) && (f = {}), "undefined" == typeof f.content && (f.content = ["prev", "title"]), f.content instanceof Array || (f.content = [f.content]), f = n.extend(!0, {}, o.opts.navbar, f);var l = n('<div class="' + e.navbar + '" />'),
                u = f.height;"number" != typeof u ? u = 1 : (u = Math.min(4, Math.max(1, u)), u > 1 && l.addClass(e.navbar + "_size-" + u));var v = f.position;switch (v) {case "bottom":
                break;default:
                v = "top";}c[v] || (c[v] = 0), c[v] += u, d[v] || (d[v] = n('<div class="' + e.navbars + "_" + v + '" />')), d[v].append(l);for (var p = 0, b = f.content.length; p < b; p++) {
              var h = n[t].addons[a][f.content[p]] || null;h ? h.call(o, l, f, i) : (h = f.content[p], h instanceof n || (h = n(f.content[p])), l.append(h));
            }var m = n[t].addons[a][f.type] || null;m && m.call(o, l, f, i), l.children("." + e.btn).length && l.addClass(e.navbar + "_has-btns");
          }), this.bind("initMenu:after", function () {
            for (var n in c) {
              this.$menu.addClass(e.menu + "_navbar_" + n + "-" + c[n]), this.$menu["bottom" == n ? "append" : "prepend"](d[n]);
            }
          }));
        }
      }, add: function add() {
        e = n[t]._c, o = n[t]._d, r = n[t]._e, e.add(a);
      }, clickAnchor: function clickAnchor(n, t) {} }, n[t].configuration[a] = { breadcrumbs: { separator: "/", removeFirst: !1 } }, n[t].configuration.classNames[a] = {};var e, o, r, s;
  }(jQuery);
  /*
   * jQuery mmenu pageScroll add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (t) {
    function e(t) {
      a && a.length && a.is(":visible") && o.$html.add(o.$body).animate({ scrollTop: a.offset().top + t }), a = !1;
    }function i(t) {
      try {
        return !("#" == t || "#" != t.slice(0, 1) || !o.$page.find(t).length);
      } catch (e) {
        return !1;
      }
    }var s = "mmenu",
        n = "pageScroll";t[s].addons[n] = { setup: function setup() {
        var r = this,
            a = this.opts[n],
            c = this.conf[n];if (o = t[s].glbl, "boolean" == typeof a && (a = { scroll: a }), a = this.opts[n] = t.extend(!0, {}, t[s].defaults[n], a), a.scroll && this.bind("close:finish", function () {
          e(c.scrollOffset);
        }), a.update) {
          var r = this,
              d = [],
              h = [];r.bind("initListview:after", function (e) {
            r.__filterListItemAnchors(e.find("." + l.listview).children("li")).each(function () {
              var e = t(this).attr("href");i(e) && d.push(e);
            }), h = d.reverse();
          });var p = -1;o.$wndw.on(f.scroll + "-" + n, function (e) {
            for (var i = o.$wndw.scrollTop(), s = 0; s < h.length; s++) {
              if (t(h[s]).offset().top < i + c.updateOffset) {
                p !== s && (p = s, r.setSelected(r.__filterListItemAnchors(r.$pnls.children("." + l.panel + "_opened").find("." + l.listview).children("li")).filter('[href="' + h[s] + '"]').parent()));break;
              }
            }
          });
        }
      }, add: function add() {
        l = t[s]._c, r = t[s]._d, f = t[s]._e;
      }, clickAnchor: function clickAnchor(s, r, f) {
        if (a = !1, r && f && this.opts.offCanvas && this.opts[n].scroll && o.$page && o.$page.length) {
          var c = s.attr("href");if (i(c)) {
            if (a = t(c), !this.$menu.hasClass(l.mm("sidebar-expanded")) || !o.$html.is('[class*="' + l.mm("sidebar-expanded") + '"]')) return { close: !0 };e(this.conf[n].scrollOffset);
          }
        }
      } }, t[s].defaults[n] = { scroll: !1, update: !1 }, t[s].configuration[n] = { scrollOffset: 0, updateOffset: 50 };var l,
        r,
        f,
        o,
        a = !1;
  }(jQuery);
  /*
   * jQuery mmenu RTL add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (t) {
    var e = "mmenu",
        n = "rtl";t[e].addons[n] = { setup: function setup() {
        var u = this.opts[n];this.conf[n];i = t[e].glbl, "object" != (typeof u === "undefined" ? "undefined" : _typeof(u)) && (u = { use: u }), u = this.opts[n] = t.extend(!0, {}, t[e].defaults[n], u), "boolean" != typeof u.use && (u.use = "rtl" == (i.$html.attr("dir") || "").toLowerCase()), u.use && this.bind("initMenu:after", function () {
          this.$menu.addClass(s.menu + "_rtl");
        });
      }, add: function add() {
        s = t[e]._c, u = t[e]._d, o = t[e]._e;
      }, clickAnchor: function clickAnchor(t, e) {} }, t[e].defaults[n] = { use: "detect" };var s, u, o, i;
  }(jQuery);
  /*
   * jQuery mmenu searchfield add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (e) {
    function n(e, n) {
      if (n) for (var s in n) {
        e.attr(s, n[s]);
      }
    }function s(e) {
      switch (e) {case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:
          return !0;}return !1;
    }var a = "mmenu",
        t = "searchfield";e[a].addons[t] = { setup: function setup() {
        var n = this,
            s = this.opts[t],
            i = this.conf[t];r = e[a].glbl, "boolean" == typeof s && (s = { add: s }), "object" != (typeof s === "undefined" ? "undefined" : _typeof(s)) && (s = {}), "boolean" == typeof s.panel && (s.panel = { add: s.panel }), "object" != _typeof(s.panel) && (s.panel = {}), s.add && ("panel" == s.addTo && (s.panel.add = !0), s.panel.add && (s.showSubPanels = !1, s.panel.splash && (s.cancel = !0)), s = this.opts[t] = e.extend(!0, {}, e[a].defaults[t], s), i = this.conf[t] = e.extend(!0, {}, e[a].configuration[t], i), this.bind("close:start", function () {
          this.$menu.find("." + l.searchfield).children("input").blur();
        }), this.bind("initPanels:after", function (a) {
          var t = e();s.panel.add && (t = this._initSearchPanel(a));var l;switch (s.addTo) {case "panels":
              l = a;break;case "panel":
              l = t;break;default:
              l = this.$menu.find(s.addTo);}if (l.each(function () {
            var a = n._initSearchfield(e(this));s.search && n._initSearching(a);
          }), s.noResults) {
            var i = s.panel.add ? t : a;i.each(function () {
              n._initNoResultsMsg(e(this));
            });
          }
        }));
      }, add: function add() {
        l = e[a]._c, i = e[a]._d, d = e[a]._e, l.add("searchfield"), i.add("searchfield"), d.add("input focus blur");
      }, clickAnchor: function clickAnchor(e, n) {
        if (e.hasClass(l.searchfield + "__btn")) {
          if (e.hasClass(l.btn + "_clear")) {
            var s = e.closest("." + l.searchfield).find("input");return s.val(""), this.search(s), !0;
          }if (e.hasClass(l.btn + "_next")) return e.closest("." + l.searchfield).submit(), !0;
        }
      } }, e[a].defaults[t] = { add: !1, addTo: "panels", noResults: "No results found.", placeholder: "Search", panel: { add: !1, dividers: !0, fx: "none", id: null, splash: null, title: "Search" }, search: !0, showTextItems: !1, showSubPanels: !0 }, e[a].configuration[t] = { clear: !1, form: !1, input: !1, submit: !1 };var l, i, d, r;e[a].prototype._initSearchPanel = function (n) {
      var s = this.opts[t];this.conf[t];if (this.$pnls.children("." + l.panel + "_search").length) return e();var a = e('<div class="' + l.panel + '_search " />').append("<ul />").appendTo(this.$pnls);switch (s.panel.id && a.attr("id", s.panel.id), s.panel.title && a.attr("data-mm-title", s.panel.title), s.panel.fx) {case !1:
          break;case "none":
          a.addClass(l.panel + "_noanimation");break;default:
          a.addClass(l.panel + "_fx-" + s.panel.fx);}return s.panel.splash && a.append('<div class="' + l.panel + '__searchsplash">' + s.panel.splash + "</div>"), this._initPanels(a), a;
    }, e[a].prototype._initSearchfield = function (s) {
      var i = this.opts[t],
          d = this.conf[t];if (!s.parent("." + l.listitem + "_vertical").length && !s.find("." + l.searchfield).length) {
        var r = e("<" + (d.form ? "form" : "div") + ' class="' + l.searchfield + '" />'),
            h = e('<div class="' + l.searchfield + '__input" />'),
            c = e('<input placeholder="' + e[a].i18n(i.placeholder) + '" type="text" autocomplete="off" />');return h.append(c).appendTo(r), s.hasClass(l.searchfield) ? s.replaceWith(r) : (s.prepend(r), s.hasClass(l.panel) && s.addClass(l.panel + "_has-searchfield")), n(c, d.input), d.clear && e('<a class="' + l.btn + " " + l.btn + "_clear " + l.searchfield + '__btn" href="#" />').appendTo(h), n(r, d.form), d.form && d.submit && !d.clear && e('<a class="' + l.btn + " " + l.btn + "_next " + l.searchfield + '__btn" href="#" />').appendTo(h), i.cancel && e('<a href="#" class="' + l.searchfield + '__cancel">' + e[a].i18n("cancel") + "</a>").appendTo(r), r;
      }
    }, e[a].prototype._initSearching = function (n) {
      var a = this,
          r = this.opts[t],
          h = (this.conf[t], {});n.closest("." + l.panel + "_search").length ? (h.$pnls = this.$pnls.find("." + l.panel), h.$nrsp = n.closest("." + l.panel)) : n.closest("." + l.panel).length ? (h.$pnls = n.closest("." + l.panel), h.$nrsp = h.$pnls) : (h.$pnls = this.$pnls.find("." + l.panel), h.$nrsp = this.$menu), r.panel.add && (h.$pnls = h.$pnls.not("." + l.panel + "_search"));var c = n.find("input"),
          p = n.find("." + l.searchfield + "__cancel"),
          o = this.$pnls.children("." + l.panel + "_search"),
          f = h.$pnls.find("." + l.listitem);h.$itms = f.not("." + l.listitem + "_divider"), h.$dvdr = f.filter("." + l.listitem + "_divider"), r.panel.add && r.panel.splash && c.off(d.focus + "-" + t + "-splash").on(d.focus + "-" + t + "-splash", function (e) {
        a.openPanel(o);
      }), r.cancel && (c.off(d.focus + "-" + t + "-cancel").on(d.focus + "-" + t + "-cancel", function (e) {
        p.addClass(l.searchfield + "__cancel-active");
      }), p.off(d.click + "-" + t + "-splash").on(d.click + "-" + t + "-splash", function (n) {
        n.preventDefault(), e(this).removeClass(l.searchfield + "__cancel-active"), o.hasClass(l.panel + "_opened") && a.openPanel(a.$pnls.children("." + l.panel + "_opened-parent").last());
      })), r.panel.add && "panel" == r.addTo && this.bind("openPanel:finish", function (e) {
        e[0] === o[0] && c.focus();
      }), c.data(i.searchfield, h).off(d.input + "-" + t).on(d.input + "-" + t, function (e) {
        s(e.keyCode) || a.search(c);
      }), this.search(c);
    }, e[a].prototype._initNoResultsMsg = function (n) {
      var s = this.opts[t];this.conf[t];if (n.closest("." + l.panel).length || (n = this.$pnls.children("." + l.panel).first()), !n.children("." + l.panel + "__noresultsmsg").length) {
        var i = n.children("." + l.listview).first(),
            d = e('<div class="' + l.panel + "__noresultsmsg " + l.hidden + '" />').append(e[a].i18n(s.noResults));i.length ? d.insertAfter(i) : d.prependTo(n);
      }
    }, e[a].prototype.search = function (n, s) {
      var a = this,
          d = this.opts[t];this.conf[t];n = n || this.$menu.find("." + l.searchfield).chidren("input").first(), s = s || n.val(), s = s.toLowerCase().trim();var r = "a",
          h = "a, span",
          c = n.data(i.searchfield),
          p = n.closest("." + l.searchfield),
          o = p.find("." + l.btn),
          f = this.$pnls.children("." + l.panel + "_search"),
          u = c.$pnls,
          _ = c.$itms,
          v = c.$dvdr,
          m = c.$nrsp;if (_.removeClass(l.listitem + "_nosubitems").find("." + l.btn + "_fullwidth-search").removeClass(l.btn + "_fullwidth-search " + l.btn + "_fullwidth"), f.children("." + l.listview).empty(), u.scrollTop(0), s.length) {
        if (_.add(v).addClass(l.hidden), _.each(function () {
          var n = e(this),
              a = r;(d.showTextItems || d.showSubPanels && n.find("." + l.btn + "_next")) && (a = h), n.children(a).not("." + l.btn + "_next").text().toLowerCase().indexOf(s) > -1 && n.removeClass(l.hidden);
        }), d.panel.add) {
          var b = e();u.each(function () {
            var n = a.__filterListItems(e(this).find("." + l.listitem)).clone(!0);n.length && (d.panel.dividers && (b = b.add('<li class="' + l.listitem + " " + l.listitem + '_divider">' + e(this).find("." + l.navbar + "__title").text() + "</li>")), b = b.add(n));
          }), b.find("." + l.mm("toggle")).remove().end().find("." + l.mm("check")).remove().end().find("." + l.btn).remove(), f.children("." + l.listview).append(b), this.openPanel(f);
        } else d.showSubPanels && u.each(function (n) {
          var s = e(this);a.__filterListItems(s.find("." + l.listitem)).each(function () {
            var n = e(this),
                s = n.data(i.child);s && s.find("." + l.listview).children().removeClass(l.hidden);
          });
        }), e(u.get().reverse()).each(function (s) {
          var t = e(this),
              d = t.data(i.parent);d && (a.__filterListItems(t.find("." + l.listitem)).length ? d.hasClass(l.hidden) && d.removeClass(l.hidden).children("." + l.btn + "_next").not("." + l.btn + "_fullwidth").addClass(l.btn + "_fullwidth").addClass(l.btn + "_fullwidth-search") : n.closest("." + l.panel).length || ((t.hasClass(l.panel + "_opened") || t.hasClass(l.panel + "_opened-parent")) && setTimeout(function () {
            a.openPanel(d.closest("." + l.panel));
          }, (s + 1) * (1.5 * a.conf.openingInterval)), d.addClass(l.listitem + "_nosubitems")));
        }), this.__filterListItems(u.find("." + l.listitem)).each(function () {
          e(this).prevAll("." + l.listitem + "_divider").first().removeClass(l.hidden);
        });o.removeClass(l.hidden), m.find("." + l.panel + "__noresultsmsg")[_.not("." + l.hidden).length ? "addClass" : "removeClass"](l.hidden), d.panel.add && (d.panel.splash && f.find("." + l.panel + "__searchsplash").addClass(l.hidden), _.add(v).removeClass(l.hidden));
      } else _.add(v).removeClass(l.hidden), o.addClass(l.hidden), m.find("." + l.panel + "__noresultsmsg").addClass(l.hidden), d.panel.add && (d.panel.splash ? f.find("." + l.panel + "__searchsplash").removeClass(l.hidden) : n.closest("." + l.panel + "_search").length || this.openPanel(this.$pnls.children("." + l.panel + "_opened-parent").last()));this.trigger("updateListview");
    };
  }(jQuery);
  /*
   * jQuery mmenu sectionIndexer add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (e) {
    var a = "mmenu",
        n = "sectionIndexer";e[a].addons[n] = { setup: function setup() {
        var r = this,
            d = this.opts[n];this.conf[n];s = e[a].glbl, "boolean" == typeof d && (d = { add: d }), "object" != (typeof d === "undefined" ? "undefined" : _typeof(d)) && (d = {}), d = this.opts[n] = e.extend(!0, {}, e[a].defaults[n], d);var h = null;this.bind("initPanels:after", function (a) {
          if (d.add) {
            var s;switch (d.addTo) {case "panels":
                s = a;break;default:
                s = e(d.addTo, this.$menu).filter("." + i.panel);}s.find("." + i.listitem + "_divider").closest("." + i.panel).addClass(i.panel + "_has-sectionindexer"), h || (h = e('<div class="' + i.sectionindexer + '" />').prependTo(this.$menu).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'), h.on(t.mouseover + "-" + n + " " + t.touchstart + "-" + n, "a", function (a) {
              var n = e(a.target).attr("href").slice(1),
                  t = r.$pnls.children("." + i.panel + "_opened"),
                  s = t.find("." + i.listview),
                  d = -1,
                  h = t.scrollTop();t.scrollTop(0), s.children("." + i.listitem + "_divider").not("." + i.hidden).each(function () {
                d < 0 && n == e(this).text().slice(0, 1).toLowerCase() && (d = e(this).position().top);
              }), t.scrollTop(d > -1 ? d : h);
            }));var o = function o(e) {
              e = e || this.$pnls.children("." + i.panel + "_opened"), this.$menu[(e.hasClass(i.panel + "_has-sectionindexer") ? "add" : "remove") + "Class"](i.menu + "_has-sectionindexer");
            };this.bind("openPanel:start", o), this.bind("initPanels:after", o);
          }
        });
      }, add: function add() {
        i = e[a]._c, r = e[a]._d, t = e[a]._e, i.add("sectionindexer"), t.add("mouseover");
      }, clickAnchor: function clickAnchor(e, a) {
        if (e.parent().is("." + i.indexer)) return !0;
      } }, e[a].defaults[n] = { add: !1, addTo: "panels" };var i, r, t, s;
  }(jQuery);
  /*
   * jQuery mmenu setSelected add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (e) {
    var t = "mmenu",
        n = "setSelected";e[t].addons[n] = { setup: function setup() {
        var a = this,
            r = this.opts[n];this.conf[n];if (l = e[t].glbl, "boolean" == typeof r && (r = { hover: r, parent: r }), "object" != (typeof r === "undefined" ? "undefined" : _typeof(r)) && (r = {}), r = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], r), "detect" == r.current) {
          var d = function d(e) {
            e = e.split("?")[0].split("#")[0];var t = a.$menu.find('a[href="' + e + '"], a[href="' + e + '/"]');t.length ? a.setSelected(t.parent(), !0) : (e = e.split("/").slice(0, -1), e.length && d(e.join("/")));
          };this.bind("initMenu:after", function () {
            d(window.location.href);
          });
        } else r.current || this.bind("initListview:after", function (e) {
          e.find("." + i.listview).children("." + i.listitem + "_selected").removeClass(i.listitem + "_selected");
        });r.hover && this.bind("initMenu:after", function () {
          this.$menu.addClass(i.menu + "_selected-hover");
        }), r.parent && (this.bind("openPanel:finish", function (e) {
          this.$pnls.find("." + i.listview).find("." + i.listitem + "_selected-parent").removeClass(i.listitem + "_selected-parent");for (var t = e.data(s.parent); t;) {
            t.not("." + i.listitem + "_vertical").addClass(i.listitem + "_selected-parent"), t = t.closest("." + i.panel).data(s.parent);
          }
        }), this.bind("initMenu:after", function () {
          this.$menu.addClass(i.menu + "_selected-parent");
        }));
      }, add: function add() {
        i = e[t]._c, s = e[t]._d, a = e[t]._e;
      }, clickAnchor: function clickAnchor(e, t) {} }, e[t].defaults[n] = { current: !0, hover: !1, parent: !1 };var i, s, a, l;
  }(jQuery);
  /*
   * jQuery mmenu sidebar add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (e) {
    var s = "mmenu",
        d = "sidebar";e[s].addons[d] = { setup: function setup() {
        if (this.opts.offCanvas) {
          var n = this.opts[d];this.conf[d];l = e[s].glbl, ("string" == typeof n || "boolean" == typeof n && n || "number" == typeof n) && (n = { expanded: n }), "object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) && (n = {}), "boolean" == typeof n.collapsed && n.collapsed && (n.collapsed = "all"), "string" != typeof n.collapsed && "number" != typeof n.collapsed || (n.collapsed = { use: n.collapsed }), "object" != _typeof(n.collapsed) && (n.collapsed = {}), "number" == typeof n.collapsed.use && (n.collapsed.use = "(min-width: " + n.collapsed.use + "px)"), "boolean" == typeof n.expanded && n.expanded && (n.expanded = "all"), "string" != typeof n.expanded && "number" != typeof n.expanded || (n.expanded = { use: n.expanded }), "object" != _typeof(n.expanded) && (n.expanded = {}), "number" == typeof n.expanded.use && (n.expanded.use = "(min-width: " + n.expanded.use + "px)"), n = this.opts[d] = e.extend(!0, {}, e[s].defaults[d], n);var t = a.wrapper + "_sidebar-collapsed-" + n.collapsed.size,
              i = a.wrapper + "_sidebar-expanded-" + n.expanded.size;n.collapsed.use && (this.bind("initMenu:after", function () {
            this.$menu.addClass(a.menu + "_sidebar-collapsed"), n.collapsed.blockMenu && this.opts.offCanvas && !this.$menu.children("." + a.menu + "__blocker").length && this.$menu.prepend('<a class="' + a.menu + '__blocker" href="#' + this.$menu.attr("id") + '" />'), n.collapsed.hideNavbar && this.$menu.addClass(a.menu + "_hidenavbar"), n.collapsed.hideDivider && this.$menu.addClass(a.menu + "_hidedivider");
          }), "boolean" == typeof n.collapsed.use ? this.bind("initMenu:after", function () {
            l.$html.addClass(t);
          }) : this.matchMedia(n.collapsed.use, function () {
            l.$html.addClass(t);
          }, function () {
            l.$html.removeClass(t);
          })), n.expanded.use && (this.bind("initMenu:after", function () {
            this.$menu.addClass(a.menu + "_sidebar-expanded");
          }), "boolean" == typeof n.expanded.use ? this.bind("initMenu:after", function () {
            l.$html.addClass(i), this.open();
          }) : this.matchMedia(n.expanded.use, function () {
            l.$html.addClass(i), l.$html.hasClass(a.wrapper + "_sidebar-closed") || this.open();
          }, function () {
            l.$html.removeClass(i), this.close();
          }), this.bind("close:start", function () {
            l.$html.hasClass(i) && l.$html.addClass(a.wrapper + "_sidebar-closed");
          }), this.bind("open:start", function () {
            l.$html.removeClass(a.wrapper + "_sidebar-closed");
          }));
        }
      }, add: function add() {
        a = e[s]._c, n = e[s]._d, t = e[s]._e;
      }, clickAnchor: function clickAnchor(e, s, n) {
        if (this.opts[d].expanded.use && l.$html.is('[class*="' + a.wrapper + '_sidebar-expanded-"]') && s && n) return { close: !1 };
      } }, e[s].defaults[d] = { collapsed: { use: !1, size: 40, blockMenu: !0, hideDivider: !1, hideNavbar: !0 }, expanded: { use: !1, size: 30 } }, e[s].configuration[d] = {};var a, n, t, l;
  }(jQuery);
  /*
   * jQuery mmenu toggles add-on
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (t) {
    var e = "mmenu",
        c = "toggles";t[e].addons[c] = { setup: function setup() {
        var s = this;this.opts[c], this.conf[c];a = t[e].glbl, this.bind("initPanels:after", function (e) {
          this.__refactorClass(e.find("input"), this.conf.classNames[c].toggle, n.toggle), this.__refactorClass(e.find("input"), this.conf.classNames[c].check, n.check), e.find("input." + n.toggle + ", input." + n.check).each(function () {
            var e = t(this),
                c = e.closest("li"),
                i = e.hasClass(n.toggle) ? "toggle" : "check",
                a = e.attr("id") || s.__getUniqueId();c.children('label[for="' + a + '"]').length || (e.attr("id", a), c.prepend(e), t('<label for="' + a + '" class="' + n[i] + '"></label>').insertBefore(c.children("a, span").last()));
          });
        });
      }, add: function add() {
        n = t[e]._c, s = t[e]._d, i = t[e]._e, n.add("toggle check");
      }, clickAnchor: function clickAnchor(t, e) {} }, t[e].configuration.classNames[c] = { toggle: "Toggle", check: "Check" };var n, s, i, a;
  }(jQuery);
  /*
   * jQuery mmenu navbar add-on breadcrumbs content
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (a) {
    var r = "mmenu",
        n = "navbars",
        e = "breadcrumbs";a[r].addons[n][e] = function (n, e, s) {
      var t = this,
          i = a[r]._c,
          b = a[r]._d;i.add("separator");var c = a('<span class="' + i.navbar + '__breadcrumbs" />').appendTo(n);this.bind("initNavbar:after", function (r) {
        if (!r.children("." + i.navbar).children("." + i.navbar + "__breadcrumbs").length) {
          r.removeClass(i.panel + "_has-navbar");for (var n = [], e = a('<span class="' + i.navbar + '__breadcrumbs"></span>'), t = r, c = !0; t && t.length;) {
            if (t.is("." + i.panel) || (t = t.closest("." + i.panel)), !t.parent("." + i.listitem + "_vertical").length) {
              var d = t.children("." + i.navbar).children("." + i.navbar + "__title").text();d.length && n.unshift(c ? "<span>" + d + "</span>" : '<a href="#' + t.attr("id") + '">' + d + "</a>"), c = !1;
            }t = t.data(b.parent);
          }s.breadcrumbs.removeFirst && n.shift(), e.append(n.join('<span class="' + i.separator + '">' + s.breadcrumbs.separator + "</span>")).appendTo(r.children("." + i.navbar));
        }
      }), this.bind("openPanel:start", function (a) {
        var r = a.find("." + i.navbar + "__breadcrumbs");r.length && c.html(r.html() || "");
      }), this.bind("initNavbar:after:sr-aria", function (r) {
        r.children("." + i.navbar).children("." + i.breadcrumbs).children("a").each(function () {
          t.__sr_aria(a(this), "owns", a(this).attr("href").slice(1));
        });
      });
    };
  }(jQuery);
  /*
   * jQuery mmenu navbar add-on close content
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (t) {
    var e = "mmenu",
        n = "navbars",
        a = "close";t[e].addons[n][a] = function (n, a) {
      var s = t[e]._c;t[e].glbl;s.add("close");var r = t('<a class="' + s.btn + " " + s.btn + "_close " + s.navbar + '__btn" href="#" />').appendTo(n);this.bind("setPage:after", function (t) {
        r.attr("href", "#" + t.attr("id"));
      }), this.bind("setPage:after:sr-text", function (n) {
        r.html(this.__sr_text(t[e].i18n(this.conf.screenReader.text.closeMenu))), this.__sr_aria(r, "owns", r.attr("href").slice(1));
      });
    };
  }(jQuery);
  /*
   * jQuery mmenu navbar add-on next content
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (a) {
    var n = "mmenu",
        t = "navbars",
        e = "next";a[n].addons[t][e] = function (e, s) {
      var r,
          i,
          h,
          d = a[n]._c,
          o = a('<a class="' + d.btn + " " + d.btn + "_next " + d.navbar + '__btn" href="#" />').appendTo(e);this.bind("openPanel:start", function (a) {
        r = a.find("." + this.conf.classNames[t].panelNext), i = r.attr("href"), h = r.html(), i ? o.attr("href", i) : o.removeAttr("href"), o[i || h ? "removeClass" : "addClass"](d.hidden), o.html(h);
      }), this.bind("openPanel:start:sr-aria", function (a) {
        this.__sr_aria(o, "hidden", o.hasClass(d.hidden)), this.__sr_aria(o, "owns", (o.attr("href") || "").slice(1));
      });
    }, a[n].configuration.classNames[t].panelNext = "Next";
  }(jQuery);
  /*
   * jQuery mmenu navbar add-on prev content
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (a) {
    var n = "mmenu",
        r = "navbars",
        e = "prev";a[n].addons[r][e] = function (e, t) {
      var i = a[n]._c,
          s = a('<a class="' + i.btn + " " + i.btn + "_prev " + i.navbar + '__btn" href="#" />').appendTo(e);this.bind("initNavbar:after", function (a) {
        a.removeClass(i.panel + "_has-navbar");
      });var h, l, d;this.bind("openPanel:start", function (a) {
        a.parent("." + i.listitem + "_vertical").length || (h = a.find("." + this.conf.classNames[r].panelPrev), h.length || (h = a.children("." + i.navbar).children("." + i.btn + "_prev")), l = h.attr("href"), d = h.html(), l ? s.attr("href", l) : s.removeAttr("href"), s[l || d ? "removeClass" : "addClass"](i.hidden), s.html(d));
      }), this.bind("initNavbar:after:sr-aria", function (a) {
        var n = a.children("." + i.navbar);this.__sr_aria(n, "hidden", !0);
      }), this.bind("openPanel:start:sr-aria", function (a) {
        this.__sr_aria(s, "hidden", s.hasClass(i.hidden)), this.__sr_aria(s, "owns", (s.attr("href") || "").slice(1));
      });
    }, a[n].configuration.classNames[r].panelPrev = "Prev";
  }(jQuery);
  /*
   * jQuery mmenu navbar add-on searchfield content
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (s) {
    var e = "mmenu",
        a = "navbars",
        d = "searchfield";s[e].addons[a][d] = function (a, d) {
      var i = s[e]._c,
          t = s('<div class="' + i.searchfield + '" />').appendTo(a);"object" != _typeof(this.opts.searchfield) && (this.opts.searchfield = {}), this.opts.searchfield.add = !0, this.opts.searchfield.addTo = t;
    };
  }(jQuery);
  /*
   * jQuery mmenu navbar add-on tabs content
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (a) {
    var t = "mmenu",
        e = "navbars",
        n = "tabs";a[t].addons[e][n] = function (n, s, r) {
      function i(a) {
        c.removeClass(d.navbar + "__tab_selected");var t = c.filter('[href="#' + a.attr("id") + '"]');if (t.length) t.addClass(d.navbar + "__tab_selected");else {
          var e = a.data(l.parent);e && e.length && i(e.closest("." + d.panel));
        }
      }var d = a[t]._c,
          l = a[t]._d,
          o = a[t]._e,
          _ = this,
          c = n.children("a");n.addClass(d.navbar + "_tabs").parent().addClass(d.navbars + "_has-tabs"), c.on(o.click + "-" + e, function (t) {
        t.preventDefault();var e = a(this);if (e.hasClass(d.navbar + "__tab_selected")) return void t.stopImmediatePropagation();try {
          _.__openPanelWoAnimation(a(e.attr("href"))), t.stopImmediatePropagation();
        } catch (n) {}
      }), this.bind("openPanel:start", i);
    };
  }(jQuery);
  /*
   * jQuery mmenu navbar add-on title content
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (t) {
    var a = "mmenu",
        e = "navbars",
        n = "title";t[a].addons[e][n] = function (n, i) {
      var r,
          s,
          l,
          h = t[a]._c,
          d = t('<a class="' + h.navbar + '__title" />').appendTo(n);this.bind("openPanel:start", function (t) {
        t.parent("." + h.listitem + "_vertical").length || (l = t.find("." + this.conf.classNames[e].panelTitle), l.length || (l = t.children("." + h.navbar).children("." + h.navbar + "__title")), r = l.attr("href"), s = l.html() || i.title, r ? d.attr("href", r) : d.removeAttr("href"), d[r || s ? "removeClass" : "addClass"](h.hidden), d.html(s));
      });var o;this.bind("openPanel:start:sr-aria", function (t) {
        if (this.opts.screenReader.text && (o || (o = this.$menu.children("." + h.navbars + "_top, ." + h.navbars + "_bottom").children("." + h.navbar).children("." + h.btn + "_prev")), o.length)) {
          var a = !0;"parent" == this.opts.navbar.titleLink && (a = !o.hasClass(h.hidden)), this.__sr_aria(d, "hidden", a);
        }
      });
    }, t[a].configuration.classNames[e].panelTitle = "Title";
  }(jQuery);
  /*
   * jQuery mmenu Angular wrapper
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (e) {
    var n = "mmenu",
        t = "angular";e[n].wrappers[t] = function () {
      this.opts.onClick = { close: !0, preventDefault: !1, setSelected: !0 };
    };
  }(jQuery);
  /*
   * jQuery mmenu Bootstrap 3 wrapper
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (n) {
    var e = "mmenu",
        a = "bootstrap3";n[e].wrappers[a] = function () {
      this.$menu.hasClass("navbar-collapse") && (this.conf.classNames.selected = "active", this.conf.classNames.divider = "divider", this.conf.clone = !0, this.opts.initMenu = function (n) {
        for (var e = "", a = ["nav-tabs", "nav-pills", "navbar-nav"], t = 0; t < a.length; t++) {
          if (n.find("." + a[t]).length) {
            e = a[t];break;
          }
        }e.length && (i.menu.call(this), i.dropdown.call(this), i[e.split("nav-").join("").split("-nav").join("")].call(this));
      });
    };var i = { menu: function menu() {
        this.$menu.children().removeClass("nav").find(".sr-only").remove().end().find(".divider:empty").remove();for (var n = ["role", "aria-haspopup", "aria-expanded"], e = 0; e < n.length; e++) {
          this.$menu.find("[" + n[e] + "]").removeAttr(n[e]);
        }
      }, dropdown: function dropdown() {
        var e = this.$menu.find(".dropdown");e.removeClass("dropdown"), e.children(".dropdown-toggle").find(".caret").remove().end().each(function () {
          n(this).replaceWith("<span>" + n(this).html() + "</span>");
        }), e.children(".dropdown-menu").removeClass("dropdown-menu");
      }, tabs: function tabs() {
        this.$menu.children().removeClass("nav-tabs");
      }, pills: function pills() {
        this.$menu.children().removeClass("nav-pills");
      }, navbar: function navbar() {
        var n = this;this.$menu.removeClass("collapse navbar-collapse").wrapInner("<div />").children().children().removeClass("navbar-left navbar-right navbar-nav navbar-text navbar-btn");var e = this.$menu.find(".navbar-form");this.conf.searchform = { form: { action: e.attr("action"), method: e.attr("method") }, input: { name: e.find("input").attr("name") }, submit: !0 }, e.remove(), (this.$orig || this.$menu).closest(".navbar").find(".navbar-header").find(".navbar-toggle").off("click").on("click", function (e) {
          n.open(), e.stopImmediatePropagation(), e.preventDefault();
        });
      } };
  }(jQuery);
  /*
   * jQuery mmenu Bootstrap 4 wrapper
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (n) {
    function e(e) {
      for (var a = n("<a />"), t = ["href", "title", "target"], r = 0; r < t.length; r++) {
        "undefined" != typeof e.attr(t[r]) && a.attr(t[r], e.attr(t[r]));
      }return a.html(e.html()), a.find(".sr-only").remove(), a;
    }function a(a) {
      var t = n("<ul />");return a.find(".dropdown-item, .dropdown-divider").each(function () {
        var a = n(this),
            r = n("<li />");a.hasClass("dropdown-divider") ? r.addClass("Divider") : r.append(e(a)), t.append(r);
      }), t;
    }function t(t) {
      var r = n("<ul />");return t.find(".nav-item").each(function () {
        var t = n(this),
            i = n("<li />");if (t.hasClass("active") && i.addClass("Selected"), !t.hasClass("nav-link")) {
          var o = t.children(".dropdown-menu");o.length && i.append(a(o)), t = t.children(".nav-link");
        }i.prepend(e(t)), r.append(i);
      }), r;
    }var r = "mmenu",
        i = "bootstrap4";n[r].wrappers[i] = function () {
      var e = this;if (this.$menu.hasClass("navbar-collapse")) {
        this.conf.clone = !1;var r = n("<nav />"),
            i = n("<div />");r.append(i), this.$menu.children().each(function () {
          var r = n(this);switch (!0) {case r.hasClass("navbar-nav"):
              i.append(t(r));break;case r.hasClass("dropdown-menu"):
              i.append(a(r));break;case r.hasClass("form-inline"):
              e.conf.searchfield.form = { action: r.attr("action") || null, method: r.attr("method") || null }, e.conf.searchfield.input = { name: r.find("input").attr("name") || null }, e.conf.searchfield.clear = !1, e.conf.searchfield.submit = !0;break;default:
              i.append(r.clone(!0));}
        }), this.bind("initMenu:before", function () {
          r.prependTo("body"), this.$menu = r;
        }), this.$menu.parent().find(".navbar-toggler").removeAttr("data-target").removeAttr("aria-controls").off("click").on("click", function (n) {
          n.preventDefault(), n.stopImmediatePropagation(), e.open();
        });
      }
    };
  }(jQuery);
  /*
   * jQuery mmenu jQuery Mobile wrapper
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (e) {
    var n = "mmenu",
        t = "jqueryMobile";e[n].wrappers[t] = function () {
      var n = this;this.opts.onClick.close = !1, this.conf.offCanvas.pageSelector = "div.ui-page-active", e("body").on("pagecontainerchange", function (e, t) {
        "function" == typeof n.close && (n.close(), n.setPage(t.toPage));
      }), this.bind("initAnchors:after", function () {
        e("body").on("click", ".mm-listview a", function (n) {
          n.isDefaultPrevented() || (n.preventDefault(), e("body").pagecontainer("change", this.href));
        });
      });
    };
  }(jQuery);
  /*
   * jQuery mmenu Magento wrapper
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (e) {
    var n = "mmenu",
        a = "magento";e[n].wrappers[a] = function () {
      this.conf.classNames.selected = "active";
    };
  }(jQuery);
  /*
   * jQuery mmenu Olark wrapper
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (n) {
    var o = "mmenu",
        a = "olark";n[o].wrappers[a] = function () {
      this.conf.offCanvas.noPageSelector.push("#olark");
    };
  }(jQuery);
  /*
   * jQuery mmenu Turbolinks wrapper
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (n) {
    var t = "mmenu",
        o = "turbolinks";n[t].wrappers[o] = function () {
      var o, r;n(document).on("turbolinks:before-visit", function () {
        r = n("html"), o = r.attr("class"), o = n.grep(o.split(/\s+/), function (n) {
          return !/mm-/.test(n);
        }).join(" ");
      }).on("turbolinks:load", function () {
        "undefined" != typeof r && (r.attr("class", o), n[t].glbl = !1);
      });
    };
  }(jQuery);
  /*
   * jQuery mmenu WordPress wrapper
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  !function (s) {
    var e = "mmenu",
        n = "wordpress";s[e].wrappers[n] = function () {
      this.conf.classNames.selected = "current-menu-item", s("#wpadminbar").css("position", "fixed").addClass("mm-slideout");
    };
  }(jQuery);
  return true;
});

!function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.dropdown = function (a) {
    var o,
        s = e(this),
        r = e(n),
        l = s.selector || "",
        c = "ontouchstart" in n.documentElement,
        u = new Date().getTime(),
        d = [],
        v = arguments[0],
        f = "string" == typeof v,
        m = [].slice.call(arguments, 1);return s.each(function (h) {
      var g,
          p,
          b,
          w,
          x,
          C,
          S,
          y,
          A = e.isPlainObject(a) ? e.extend(!0, {}, e.fn.dropdown.settings, a) : e.extend({}, e.fn.dropdown.settings),
          T = A.className,
          k = A.message,
          L = A.fields,
          I = A.keys,
          D = A.metadata,
          q = A.namespace,
          R = A.regExp,
          O = A.selector,
          V = A.error,
          E = A.templates,
          M = "." + q,
          F = "module-" + q,
          z = e(this),
          P = e(A.context),
          H = z.find(O.text),
          j = z.find(O.search),
          N = z.find(O.sizer),
          U = z.find(O.input),
          K = z.find(O.icon),
          W = z.prev().find(O.text).length > 0 ? z.prev().find(O.text) : z.prev(),
          B = z.children(O.menu),
          $ = B.find(O.item),
          Q = !1,
          X = !1,
          Y = !1,
          G = this,
          J = z.data(F);y = { initialize: function initialize() {
          y.debug("Initializing dropdown", A), y.is.alreadySetup() ? y.setup.reference() : (y.setup.layout(), A.values && y.change.values(A.values), y.refreshData(), y.save.defaults(), y.restore.selected(), y.create.id(), y.bind.events(), y.observeChanges(), y.instantiate());
        }, instantiate: function instantiate() {
          y.verbose("Storing instance of dropdown", y), J = y, z.data(F, y);
        }, destroy: function destroy() {
          y.verbose("Destroying previous dropdown", z), y.remove.tabbable(), z.off(M).removeData(F), B.off(M), r.off(w), y.disconnect.menuObserver(), y.disconnect.selectObserver();
        }, observeChanges: function observeChanges() {
          "MutationObserver" in t && (C = new MutationObserver(y.event.select.mutation), S = new MutationObserver(y.event.menu.mutation), y.debug("Setting up mutation observer", C, S), y.observe.select(), y.observe.menu());
        }, disconnect: { menuObserver: function menuObserver() {
            S && S.disconnect();
          }, selectObserver: function selectObserver() {
            C && C.disconnect();
          } }, observe: { select: function select() {
            y.has.input() && C.observe(z[0], { childList: !0, subtree: !0 });
          }, menu: function menu() {
            y.has.menu() && S.observe(B[0], { childList: !0, subtree: !0 });
          } }, create: { id: function id() {
            x = (Math.random().toString(16) + "000000000").substr(2, 8), w = "." + x, y.verbose("Creating unique id for element", x);
          }, userChoice: function userChoice(t) {
            var n, a, o;return !!(t = t || y.get.userValues()) && (t = e.isArray(t) ? t : [t], e.each(t, function (t, s) {
              !1 === y.get.item(s) && (o = A.templates.addition(y.add.variables(k.addResult, s)), a = e("<div />").html(o).attr("data-" + D.value, s).attr("data-" + D.text, s).addClass(T.addition).addClass(T.item), A.hideAdditions && a.addClass(T.hidden), n = n === i ? a : n.add(a), y.verbose("Creating user choices for value", s, a));
            }), n);
          }, userLabels: function userLabels(t) {
            var n = y.get.userValues();n && (y.debug("Adding user labels", n), e.each(n, function (e, t) {
              y.verbose("Adding custom user value"), y.add.label(t, t);
            }));
          }, menu: function menu() {
            B = e("<div />").addClass(T.menu).appendTo(z);
          }, sizer: function sizer() {
            N = e("<span />").addClass(T.sizer).insertAfter(j);
          } }, search: function search(e) {
          e = e !== i ? e : y.get.query(), y.verbose("Searching for query", e), y.has.minCharacters(e) ? y.filter(e) : y.hide();
        }, select: { firstUnfiltered: function firstUnfiltered() {
            y.verbose("Selecting first non-filtered element"), y.remove.selectedItem(), $.not(O.unselectable).not(O.addition + O.hidden).eq(0).addClass(T.selected);
          }, nextAvailable: function nextAvailable(e) {
            var t = (e = e.eq(0)).nextAll(O.item).not(O.unselectable).eq(0),
                n = e.prevAll(O.item).not(O.unselectable).eq(0);t.length > 0 ? (y.verbose("Moving selection to", t), t.addClass(T.selected)) : (y.verbose("Moving selection to", n), n.addClass(T.selected));
          } }, setup: { api: function api() {
            var e = { debug: A.debug, urlData: { value: y.get.value(), query: y.get.query() }, on: !1 };y.verbose("First request, initializing API"), z.api(e);
          }, layout: function layout() {
            z.is("select") && (y.setup.select(), y.setup.returnedObject()), y.has.menu() || y.create.menu(), y.is.search() && !y.has.search() && (y.verbose("Adding search input"), j = e("<input />").addClass(T.search).prop("autocomplete", "off").insertBefore(H)), y.is.multiple() && y.is.searchSelection() && !y.has.sizer() && y.create.sizer(), A.allowTab && y.set.tabbable();
          }, select: function select() {
            var t = y.get.selectValues();y.debug("Dropdown initialized on a select", t), z.is("select") && (U = z), U.parent(O.dropdown).length > 0 ? (y.debug("UI dropdown already exists. Creating dropdown menu only"), z = U.closest(O.dropdown), y.has.menu() || y.create.menu(), B = z.children(O.menu), y.setup.menu(t)) : (y.debug("Creating entire dropdown from select"), z = e("<div />").attr("class", U.attr("class")).addClass(T.selection).addClass(T.dropdown).html(E.dropdown(t)).insertBefore(U), U.hasClass(T.multiple) && !1 === U.prop("multiple") && (y.error(V.missingMultiple), U.prop("multiple", !0)), U.is("[multiple]") && y.set.multiple(), U.prop("disabled") && (y.debug("Disabling dropdown"), z.addClass(T.disabled)), U.removeAttr("class").detach().prependTo(z)), y.refresh();
          }, menu: function menu(e) {
            B.html(E.menu(e, L)), $ = B.find(O.item);
          }, reference: function reference() {
            y.debug("Dropdown behavior was called on select, replacing with closest dropdown"), z = z.parent(O.dropdown), J = z.data(F), G = z.get(0), y.refresh(), y.setup.returnedObject();
          }, returnedObject: function returnedObject() {
            var e = s.slice(0, h),
                t = s.slice(h + 1);s = e.add(z).add(t);
          } }, refresh: function refresh() {
          y.refreshSelectors(), y.refreshData();
        }, refreshItems: function refreshItems() {
          $ = B.find(O.item);
        }, refreshSelectors: function refreshSelectors() {
          y.verbose("Refreshing selector cache"), H = z.find(O.text), j = z.find(O.search), U = z.find(O.input), K = z.find(O.icon), W = z.prev().find(O.text).length > 0 ? z.prev().find(O.text) : z.prev(), B = z.children(O.menu), $ = B.find(O.item);
        }, refreshData: function refreshData() {
          y.verbose("Refreshing cached metadata"), $.removeData(D.text).removeData(D.value);
        }, clearData: function clearData() {
          y.verbose("Clearing metadata"), $.removeData(D.text).removeData(D.value), z.removeData(D.defaultText).removeData(D.defaultValue).removeData(D.placeholderText);
        }, toggle: function toggle() {
          y.verbose("Toggling menu visibility"), y.is.active() ? y.hide() : y.show();
        }, show: function show(t) {
          if (t = e.isFunction(t) ? t : function () {}, !y.can.show() && y.is.remote() && (y.debug("No API results retrieved, searching before show"), y.queryRemote(y.get.query(), y.show)), y.can.show() && !y.is.active()) {
            if (y.debug("Showing dropdown"), !y.has.message() || y.has.maxSelections() || y.has.allResultsFiltered() || y.remove.message(), y.is.allFiltered()) return !0;!1 !== A.onShow.call(G) && y.animate.show(function () {
              y.can.click() && y.bind.intent(), y.has.menuSearch() && y.focusSearch(), y.set.visible(), t.call(G);
            });
          }
        }, hide: function hide(t) {
          t = e.isFunction(t) ? t : function () {}, y.is.active() && !y.is.animatingOutward() && (y.debug("Hiding dropdown"), !1 !== A.onHide.call(G) && y.animate.hide(function () {
            y.remove.visible(), t.call(G);
          }));
        }, hideOthers: function hideOthers() {
          y.verbose("Finding other dropdowns to hide"), s.not(z).has(O.menu + "." + T.visible).dropdown("hide");
        }, hideMenu: function hideMenu() {
          y.verbose("Hiding menu  instantaneously"), y.remove.active(), y.remove.visible(), B.transition("hide");
        }, hideSubMenus: function hideSubMenus() {
          var e = B.children(O.item).find(O.menu);y.verbose("Hiding sub menus", e), e.transition("hide");
        }, bind: { events: function events() {
            c && y.bind.touchEvents(), y.bind.keyboardEvents(), y.bind.inputEvents(), y.bind.mouseEvents();
          }, touchEvents: function touchEvents() {
            y.debug("Touch device detected binding additional touch events"), y.is.searchSelection() || y.is.single() && z.on("touchstart" + M, y.event.test.toggle), B.on("touchstart" + M, O.item, y.event.item.mouseenter);
          }, keyboardEvents: function keyboardEvents() {
            y.verbose("Binding keyboard events"), z.on("keydown" + M, y.event.keydown), y.has.search() && z.on(y.get.inputEvent() + M, O.search, y.event.input), y.is.multiple() && r.on("keydown" + w, y.event.document.keydown);
          }, inputEvents: function inputEvents() {
            y.verbose("Binding input change events"), z.on("change" + M, O.input, y.event.change);
          }, mouseEvents: function mouseEvents() {
            y.verbose("Binding mouse events"), y.is.multiple() && z.on("click" + M, O.label, y.event.label.click).on("click" + M, O.remove, y.event.remove.click), y.is.searchSelection() ? (z.on("mousedown" + M, y.event.mousedown).on("mouseup" + M, y.event.mouseup).on("mousedown" + M, O.menu, y.event.menu.mousedown).on("mouseup" + M, O.menu, y.event.menu.mouseup).on("click" + M, O.icon, y.event.icon.click).on("focus" + M, O.search, y.event.search.focus).on("click" + M, O.search, y.event.search.focus).on("blur" + M, O.search, y.event.search.blur).on("click" + M, O.text, y.event.text.focus), y.is.multiple() && z.on("click" + M, y.event.click)) : ("click" == A.on ? z.on("click" + M, O.icon, y.event.icon.click).on("click" + M, y.event.test.toggle) : "hover" == A.on ? z.on("mouseenter" + M, y.delay.show).on("mouseleave" + M, y.delay.hide) : z.on(A.on + M, y.toggle), z.on("mousedown" + M, y.event.mousedown).on("mouseup" + M, y.event.mouseup).on("focus" + M, y.event.focus), y.has.menuSearch() ? z.on("blur" + M, O.search, y.event.search.blur) : z.on("blur" + M, y.event.blur)), B.on("mouseenter" + M, O.item, y.event.item.mouseenter).on("mouseleave" + M, O.item, y.event.item.mouseleave).on("click" + M, O.item, y.event.item.click);
          }, intent: function intent() {
            y.verbose("Binding hide intent event to document"), c && r.on("touchstart" + w, y.event.test.touch).on("touchmove" + w, y.event.test.touch), r.on("click" + w, y.event.test.hide);
          } }, unbind: { intent: function intent() {
            y.verbose("Removing hide intent event from document"), c && r.off("touchstart" + w).off("touchmove" + w), r.off("click" + w);
          } }, filter: function filter(e) {
          var t = e !== i ? e : y.get.query(),
              n = function n() {
            y.is.multiple() && y.filterActive(), (e || !e && 0 == y.get.activeItem().length) && y.select.firstUnfiltered(), y.has.allResultsFiltered() ? A.onNoResults.call(G, t) ? A.allowAdditions ? A.hideAdditions && (y.verbose("User addition with no menu, setting empty style"), y.set.empty(), y.hideMenu()) : (y.verbose("All items filtered, showing message", t), y.add.message(k.noResults)) : (y.verbose("All items filtered, hiding dropdown", t), y.hideMenu()) : (y.remove.empty(), y.remove.message()), A.allowAdditions && y.add.userSuggestion(e), y.is.searchSelection() && y.can.show() && y.is.focusedOnSearch() && y.show();
          };A.useLabels && y.has.maxSelections() || (A.apiSettings ? y.can.useAPI() ? y.queryRemote(t, function () {
            A.filterRemoteData && y.filterItems(t), n();
          }) : y.error(V.noAPI) : (y.filterItems(t), n()));
        }, queryRemote: function queryRemote(t, n) {
          var i = { errorDuration: !1, cache: "local", throttle: A.throttle, urlData: { query: t }, onError: function onError() {
              y.add.message(k.serverError), n();
            }, onFailure: function onFailure() {
              y.add.message(k.serverError), n();
            }, onSuccess: function onSuccess(e) {
              y.remove.message(), y.setup.menu({ values: e[L.remoteValues] }), n();
            } };z.api("get request") || y.setup.api(), i = e.extend(!0, {}, i, A.apiSettings), z.api("setting", i).api("query");
        }, filterItems: function filterItems(t) {
          var n = t !== i ? t : y.get.query(),
              a = null,
              o = y.escape.string(n),
              s = new RegExp("^" + o, "igm");y.has.query() && (a = [], y.verbose("Searching for matching values", n), $.each(function () {
            var t,
                i,
                o = e(this);if ("both" == A.match || "text" == A.match) {
              if (-1 !== (t = String(y.get.choiceText(o, !1))).search(s)) return a.push(this), !0;if ("exact" === A.fullTextSearch && y.exactSearch(n, t)) return a.push(this), !0;if (!0 === A.fullTextSearch && y.fuzzySearch(n, t)) return a.push(this), !0;
            }if ("both" == A.match || "value" == A.match) {
              if (-1 !== (i = String(y.get.choiceValue(o, t))).search(s)) return a.push(this), !0;if ("exact" === A.fullTextSearch && y.exactSearch(n, i)) return a.push(this), !0;if (!0 === A.fullTextSearch && y.fuzzySearch(n, i)) return a.push(this), !0;
            }
          })), y.debug("Showing only matched items", n), y.remove.filteredItem(), a && $.not(a).addClass(T.filtered);
        }, fuzzySearch: function fuzzySearch(e, t) {
          var n = t.length,
              i = e.length;if (e = e.toLowerCase(), t = t.toLowerCase(), i > n) return !1;if (i === n) return e === t;e: for (var a = 0, o = 0; a < i; a++) {
            for (var s = e.charCodeAt(a); o < n;) {
              if (t.charCodeAt(o++) === s) continue e;
            }return !1;
          }return !0;
        }, exactSearch: function exactSearch(e, t) {
          return e = e.toLowerCase(), (t = t.toLowerCase()).indexOf(e) > -1;
        }, filterActive: function filterActive() {
          A.useLabels && $.filter("." + T.active).addClass(T.filtered);
        }, focusSearch: function focusSearch(e) {
          y.has.search() && !y.is.focusedOnSearch() && (e ? (z.off("focus" + M, O.search), j.focus(), z.on("focus" + M, O.search, y.event.search.focus)) : j.focus());
        }, forceSelection: function forceSelection() {
          var e = $.not(T.filtered).filter("." + T.selected).eq(0),
              t = $.not(T.filtered).filter("." + T.active).eq(0),
              n = e.length > 0 ? e : t;if (n.length > 0 && !y.is.multiple()) return y.debug("Forcing partial selection to selected item", n), void y.event.item.click.call(n, {}, !0);A.allowAdditions ? (y.set.selected(y.get.query()), y.remove.searchTerm()) : y.remove.searchTerm();
        }, change: { values: function values(t) {
            A.allowAdditions || y.clear(), y.debug("Creating dropdown with specified values", t), y.setup.menu({ values: t }), e.each(t, function (e, t) {
              if (1 == t.selected) return y.debug("Setting initial selection to", t.value), y.set.selected(t.value), !0;
            });
          } }, event: { change: function change() {
            Y || (y.debug("Input changed, updating selection"), y.set.selected());
          }, focus: function focus() {
            A.showOnFocus && !Q && y.is.hidden() && !p && y.show();
          }, blur: function blur(e) {
            p = n.activeElement === this, Q || p || (y.remove.activeLabel(), y.hide());
          }, mousedown: function mousedown() {
            y.is.searchSelection() ? b = !0 : Q = !0;
          }, mouseup: function mouseup() {
            y.is.searchSelection() ? b = !1 : Q = !1;
          }, click: function click(t) {
            e(t.target).is(z) && (y.is.focusedOnSearch() ? y.show() : y.focusSearch());
          }, search: { focus: function focus() {
              Q = !0, y.is.multiple() && y.remove.activeLabel(), A.showOnFocus && y.search();
            }, blur: function blur(e) {
              p = n.activeElement === this, y.is.searchSelection() && !b && (X || p || (A.forceSelection && y.forceSelection(), y.hide())), b = !1;
            } }, icon: { click: function click(e) {
              y.toggle();
            } }, text: { focus: function focus(e) {
              Q = !0, y.focusSearch();
            } }, input: function input(e) {
            (y.is.multiple() || y.is.searchSelection()) && y.set.filtered(), clearTimeout(y.timer), y.timer = setTimeout(y.search, A.delay.search);
          }, label: { click: function click(t) {
              var n = e(this),
                  i = z.find(O.label),
                  a = i.filter("." + T.active),
                  o = n.nextAll("." + T.active),
                  s = n.prevAll("." + T.active),
                  r = o.length > 0 ? n.nextUntil(o).add(a).add(n) : n.prevUntil(s).add(a).add(n);t.shiftKey ? (a.removeClass(T.active), r.addClass(T.active)) : t.ctrlKey ? n.toggleClass(T.active) : (a.removeClass(T.active), n.addClass(T.active)), A.onLabelSelect.apply(this, i.filter("." + T.active));
            } }, remove: { click: function click() {
              var t = e(this).parent();t.hasClass(T.active) ? y.remove.activeLabels() : y.remove.activeLabels(t);
            } }, test: { toggle: function toggle(e) {
              var t = y.is.multiple() ? y.show : y.toggle;y.is.bubbledLabelClick(e) || y.is.bubbledIconClick(e) || y.determine.eventOnElement(e, t) && e.preventDefault();
            }, touch: function touch(e) {
              y.determine.eventOnElement(e, function () {
                "touchstart" == e.type ? y.timer = setTimeout(function () {
                  y.hide();
                }, A.delay.touch) : "touchmove" == e.type && clearTimeout(y.timer);
              }), e.stopPropagation();
            }, hide: function hide(e) {
              y.determine.eventInModule(e, y.hide);
            } }, select: { mutation: function mutation(t) {
              y.debug("<select> modified, recreating menu");var n = !1;e.each(t, function (t, i) {
                if (e(i.target).is("select") || e(i.addedNodes).is("select")) return n = !0, !0;
              }), n && (y.disconnect.selectObserver(), y.refresh(), y.setup.select(), y.set.selected(), y.observe.select());
            } }, menu: { mutation: function mutation(t) {
              var n = t[0],
                  i = n.addedNodes ? e(n.addedNodes[0]) : e(!1),
                  a = n.removedNodes ? e(n.removedNodes[0]) : e(!1),
                  o = i.add(a),
                  s = o.is(O.addition) || o.closest(O.addition).length > 0,
                  r = o.is(O.message) || o.closest(O.message).length > 0;s || r ? (y.debug("Updating item selector cache"), y.refreshItems()) : (y.debug("Menu modified, updating selector cache"), y.refresh());
            }, mousedown: function mousedown() {
              X = !0;
            }, mouseup: function mouseup() {
              X = !1;
            } }, item: { mouseenter: function mouseenter(t) {
              var n = e(t.target),
                  i = e(this),
                  a = i.children(O.menu),
                  o = i.siblings(O.item).children(O.menu),
                  s = a.length > 0;!(a.find(n).length > 0) && s && (clearTimeout(y.itemTimer), y.itemTimer = setTimeout(function () {
                y.verbose("Showing sub-menu", a), e.each(o, function () {
                  y.animate.hide(!1, e(this));
                }), y.animate.show(!1, a);
              }, A.delay.show), t.preventDefault());
            }, mouseleave: function mouseleave(t) {
              var n = e(this).children(O.menu);n.length > 0 && (clearTimeout(y.itemTimer), y.itemTimer = setTimeout(function () {
                y.verbose("Hiding sub-menu", n), y.animate.hide(!1, n);
              }, A.delay.hide));
            }, click: function click(t, i) {
              var a = e(this),
                  o = e(t ? t.target : ""),
                  s = a.find(O.menu),
                  r = y.get.choiceText(a),
                  l = y.get.choiceValue(a, r),
                  c = s.length > 0,
                  u = s.find(o).length > 0;y.has.menuSearch() && e(n.activeElement).blur(), u || c && !A.allowCategorySelection || (y.is.searchSelection() && (A.allowAdditions && y.remove.userAddition(), y.remove.searchTerm(), y.is.focusedOnSearch() || 1 == i || y.focusSearch(!0)), A.useLabels || (y.remove.filteredItem(), y.set.scrollPosition(a)), y.determine.selectAction.call(this, r, l));
            } }, document: { keydown: function keydown(e) {
              var t = e.which;if (y.is.inObject(t, I)) {
                var n = z.find(O.label),
                    i = n.filter("." + T.active),
                    a = (i.data(D.value), n.index(i)),
                    o = n.length,
                    s = i.length > 0,
                    r = i.length > 1,
                    l = 0 === a,
                    c = a + 1 == o,
                    u = y.is.searchSelection(),
                    d = y.is.focusedOnSearch(),
                    v = y.is.focused(),
                    f = d && 0 === y.get.caretPosition();if (u && !s && !d) return;t == I.leftArrow ? !v && !f || s ? s && (e.shiftKey ? y.verbose("Adding previous label to selection") : (y.verbose("Selecting previous label"), n.removeClass(T.active)), l && !r ? i.addClass(T.active) : i.prev(O.siblingLabel).addClass(T.active).end(), e.preventDefault()) : (y.verbose("Selecting previous label"), n.last().addClass(T.active)) : t == I.rightArrow ? (v && !s && n.first().addClass(T.active), s && (e.shiftKey ? y.verbose("Adding next label to selection") : (y.verbose("Selecting next label"), n.removeClass(T.active)), c ? u ? d ? n.removeClass(T.active) : y.focusSearch() : r ? i.next(O.siblingLabel).addClass(T.active) : i.addClass(T.active) : i.next(O.siblingLabel).addClass(T.active), e.preventDefault())) : t == I.deleteKey || t == I.backspace ? s ? (y.verbose("Removing active labels"), c && u && !d && y.focusSearch(), i.last().next(O.siblingLabel).addClass(T.active), y.remove.activeLabels(i), e.preventDefault()) : f && !s && t == I.backspace && (y.verbose("Removing last label on input backspace"), i = n.last().addClass(T.active), y.remove.activeLabels(i)) : i.removeClass(T.active);
              }
            } }, keydown: function keydown(e) {
            var t = e.which;if (y.is.inObject(t, I)) {
              var n,
                  i = $.not(O.unselectable).filter("." + T.selected).eq(0),
                  a = B.children("." + T.active).eq(0),
                  o = i.length > 0 ? i : a,
                  s = o.length > 0 ? o.siblings(":not(." + T.filtered + ")").addBack() : B.children(":not(." + T.filtered + ")"),
                  r = o.children(O.menu),
                  l = o.closest(O.menu),
                  c = l.hasClass(T.visible) || l.hasClass(T.animating) || l.parent(O.menu).length > 0,
                  u = r.length > 0,
                  d = o.length > 0,
                  v = o.not(O.unselectable).length > 0,
                  f = t == I.delimiter && A.allowAdditions && y.is.multiple();if (A.allowAdditions && A.hideAdditions && (t == I.enter || f) && v && (y.verbose("Selecting item from keyboard shortcut", o), y.event.item.click.call(o, e), y.is.searchSelection() && y.remove.searchTerm()), y.is.visible()) {
                if ((t == I.enter || f) && (t == I.enter && d && u && !A.allowCategorySelection ? (y.verbose("Pressed enter on unselectable category, opening sub menu"), t = I.rightArrow) : v && (y.verbose("Selecting item from keyboard shortcut", o), y.event.item.click.call(o, e), y.is.searchSelection() && y.remove.searchTerm()), e.preventDefault()), d && (t == I.leftArrow && l[0] !== B[0] && (y.verbose("Left key pressed, closing sub-menu"), y.animate.hide(!1, l), o.removeClass(T.selected), l.closest(O.item).addClass(T.selected), e.preventDefault()), t == I.rightArrow && u && (y.verbose("Right key pressed, opening sub-menu"), y.animate.show(!1, r), o.removeClass(T.selected), r.find(O.item).eq(0).addClass(T.selected), e.preventDefault())), t == I.upArrow) {
                  if (n = d && c ? o.prevAll(O.item + ":not(" + O.unselectable + ")").eq(0) : $.eq(0), s.index(n) < 0) return y.verbose("Up key pressed but reached top of current menu"), void e.preventDefault();y.verbose("Up key pressed, changing active item"), o.removeClass(T.selected), n.addClass(T.selected), y.set.scrollPosition(n), A.selectOnKeydown && y.is.single() && y.set.selectedItem(n), e.preventDefault();
                }if (t == I.downArrow) {
                  if (0 === (n = d && c ? n = o.nextAll(O.item + ":not(" + O.unselectable + ")").eq(0) : $.eq(0)).length) return y.verbose("Down key pressed but reached bottom of current menu"), void e.preventDefault();y.verbose("Down key pressed, changing active item"), $.removeClass(T.selected), n.addClass(T.selected), y.set.scrollPosition(n), A.selectOnKeydown && y.is.single() && y.set.selectedItem(n), e.preventDefault();
                }t == I.pageUp && (y.scrollPage("up"), e.preventDefault()), t == I.pageDown && (y.scrollPage("down"), e.preventDefault()), t == I.escape && (y.verbose("Escape key pressed, closing dropdown"), y.hide());
              } else f && e.preventDefault(), t != I.downArrow || y.is.visible() || (y.verbose("Down key pressed, showing dropdown"), y.show(), e.preventDefault());
            } else y.has.search() || y.set.selectedLetter(String.fromCharCode(t));
          } }, trigger: { change: function change() {
            var e = n.createEvent("HTMLEvents"),
                t = U[0];t && (y.verbose("Triggering native change event"), e.initEvent("change", !0, !1), t.dispatchEvent(e));
          } }, determine: { selectAction: function selectAction(t, n) {
            y.verbose("Determining action", A.action), e.isFunction(y.action[A.action]) ? (y.verbose("Triggering preset action", A.action, t, n), y.action[A.action].call(G, t, n, this)) : e.isFunction(A.action) ? (y.verbose("Triggering user action", A.action, t, n), A.action.call(G, t, n, this)) : y.error(V.action, A.action);
          }, eventInModule: function eventInModule(t, i) {
            var a = e(t.target),
                o = a.closest(n.documentElement).length > 0,
                s = a.closest(z).length > 0;return i = e.isFunction(i) ? i : function () {}, o && !s ? (y.verbose("Triggering event", i), i(), !0) : (y.verbose("Event occurred in dropdown, canceling callback"), !1);
          }, eventOnElement: function eventOnElement(t, i) {
            var a = e(t.target),
                o = a.closest(O.siblingLabel),
                s = n.body.contains(t.target),
                r = 0 === z.find(o).length,
                l = 0 === a.closest(B).length;return i = e.isFunction(i) ? i : function () {}, s && r && l ? (y.verbose("Triggering event", i), i(), !0) : (y.verbose("Event occurred in dropdown menu, canceling callback"), !1);
          } }, action: { nothing: function nothing() {}, activate: function activate(t, n, a) {
            if (n = n !== i ? n : t, y.can.activate(e(a))) {
              if (y.set.selected(n, e(a)), y.is.multiple() && !y.is.allFiltered()) return;y.hideAndClear();
            }
          }, select: function select(t, n, a) {
            if (n = n !== i ? n : t, y.can.activate(e(a))) {
              if (y.set.value(n, t, e(a)), y.is.multiple() && !y.is.allFiltered()) return;y.hideAndClear();
            }
          }, combo: function combo(t, n, a) {
            n = n !== i ? n : t, y.set.selected(n, e(a)), y.hideAndClear();
          }, hide: function hide(e, t, n) {
            y.set.value(t, e), y.hideAndClear();
          } }, get: { id: function id() {
            return x;
          }, defaultText: function defaultText() {
            return z.data(D.defaultText);
          }, defaultValue: function defaultValue() {
            return z.data(D.defaultValue);
          }, placeholderText: function placeholderText() {
            return "auto" != A.placeholder && "string" == typeof A.placeholder ? A.placeholder : z.data(D.placeholderText) || "";
          }, text: function text() {
            return H.text();
          }, query: function query() {
            return e.trim(j.val());
          }, searchWidth: function searchWidth(e) {
            return e = e !== i ? e : j.val(), N.text(e), Math.ceil(N.width() + 1);
          }, selectionCount: function selectionCount() {
            var t = y.get.values();return y.is.multiple() ? e.isArray(t) ? t.length : 0 : "" !== y.get.value() ? 1 : 0;
          }, transition: function transition(e) {
            return "auto" == A.transition ? y.is.upward(e) ? "slide up" : "slide down" : A.transition;
          }, userValues: function userValues() {
            var t = y.get.values();return !!t && (t = e.isArray(t) ? t : [t], e.grep(t, function (e) {
              return !1 === y.get.item(e);
            }));
          }, uniqueArray: function uniqueArray(t) {
            return e.grep(t, function (n, i) {
              return e.inArray(n, t) === i;
            });
          }, caretPosition: function caretPosition() {
            var e,
                t,
                i = j.get(0);return "selectionStart" in i ? i.selectionStart : n.selection ? (i.focus(), t = (e = n.selection.createRange()).text.length, e.moveStart("character", -i.value.length), e.text.length - t) : void 0;
          }, value: function value() {
            var t = U.length > 0 ? U.val() : z.data(D.value),
                n = e.isArray(t) && 1 === t.length && "" === t[0];return t === i || n ? "" : t;
          }, values: function values() {
            var e = y.get.value();return "" === e ? "" : !y.has.selectInput() && y.is.multiple() ? "string" == typeof e ? e.split(A.delimiter) : "" : e;
          }, remoteValues: function remoteValues() {
            var t = y.get.values(),
                n = !1;return t && ("string" == typeof t && (t = [t]), e.each(t, function (e, t) {
              var i = y.read.remoteData(t);y.verbose("Restoring value from session data", i, t), i && (n || (n = {}), n[t] = i);
            })), n;
          }, choiceText: function choiceText(t, n) {
            if (n = n !== i ? n : A.preserveHTML, t) return t.find(O.menu).length > 0 && (y.verbose("Retrieving text of element with sub-menu"), (t = t.clone()).find(O.menu).remove(), t.find(O.menuIcon).remove()), t.data(D.text) !== i ? t.data(D.text) : n ? e.trim(t.html()) : e.trim(t.text());
          }, choiceValue: function choiceValue(t, n) {
            return n = n || y.get.choiceText(t), !!t && (t.data(D.value) !== i ? String(t.data(D.value)) : "string" == typeof n ? e.trim(n.toLowerCase()) : String(n));
          }, inputEvent: function inputEvent() {
            var e = j[0];return !!e && (e.oninput !== i ? "input" : e.onpropertychange !== i ? "propertychange" : "keyup");
          }, selectValues: function selectValues() {
            var t = { values: [] };return z.find("option").each(function () {
              var n = e(this),
                  a = n.html(),
                  o = n.attr("disabled"),
                  s = n.attr("value") !== i ? n.attr("value") : a;"auto" === A.placeholder && "" === s ? t.placeholder = a : t.values.push({ name: a, value: s, disabled: o });
            }), A.placeholder && "auto" !== A.placeholder && (y.debug("Setting placeholder value to", A.placeholder), t.placeholder = A.placeholder), A.sortSelect ? (t.values.sort(function (e, t) {
              return e.name > t.name ? 1 : -1;
            }), y.debug("Retrieved and sorted values from select", t)) : y.debug("Retrieved values from select", t), t;
          }, activeItem: function activeItem() {
            return $.filter("." + T.active);
          }, selectedItem: function selectedItem() {
            var e = $.not(O.unselectable).filter("." + T.selected);return e.length > 0 ? e : $.eq(0);
          }, itemWithAdditions: function itemWithAdditions(e) {
            var t = y.get.item(e),
                n = y.create.userChoice(e);return n && n.length > 0 && (t = t.length > 0 ? t.add(n) : n), t;
          }, item: function item(t, n) {
            var a,
                o,
                s = !1;return t = t !== i ? t : y.get.values() !== i ? y.get.values() : y.get.text(), a = o ? t.length > 0 : t !== i && null !== t, o = y.is.multiple() && e.isArray(t), n = "" === t || 0 === t || n || !1, a && $.each(function () {
              var a = e(this),
                  r = y.get.choiceText(a),
                  l = y.get.choiceValue(a, r);if (null !== l && l !== i) if (o) -1 === e.inArray(String(l), t) && -1 === e.inArray(r, t) || (s = s ? s.add(a) : a);else if (n) {
                if (y.verbose("Ambiguous dropdown value using strict type check", a, t), l === t || r === t) return s = a, !0;
              } else if (String(l) == String(t) || r == t) return y.verbose("Found select item by value", l, t), s = a, !0;
            }), s;
          } }, check: { maxSelections: function maxSelections(e) {
            return !A.maxSelections || ((e = e !== i ? e : y.get.selectionCount()) >= A.maxSelections ? (y.debug("Maximum selection count reached"), A.useLabels && ($.addClass(T.filtered), y.add.message(k.maxSelections)), !0) : (y.verbose("No longer at maximum selection count"), y.remove.message(), y.remove.filteredItem(), y.is.searchSelection() && y.filterItems(), !1));
          } }, restore: { defaults: function defaults() {
            y.clear(), y.restore.defaultText(), y.restore.defaultValue();
          }, defaultText: function defaultText() {
            var e = y.get.defaultText();e === y.get.placeholderText ? (y.debug("Restoring default placeholder text", e), y.set.placeholderText(e)) : (y.debug("Restoring default text", e), y.set.text(e));
          }, placeholderText: function placeholderText() {
            y.set.placeholderText();
          }, defaultValue: function defaultValue() {
            var e = y.get.defaultValue();e !== i && (y.debug("Restoring default value", e), "" !== e ? (y.set.value(e), y.set.selected()) : (y.remove.activeItem(), y.remove.selectedItem()));
          }, labels: function labels() {
            A.allowAdditions && (A.useLabels || (y.error(V.labels), A.useLabels = !0), y.debug("Restoring selected values"), y.create.userLabels()), y.check.maxSelections();
          }, selected: function selected() {
            y.restore.values(), y.is.multiple() ? (y.debug("Restoring previously selected values and labels"), y.restore.labels()) : y.debug("Restoring previously selected values");
          }, values: function values() {
            y.set.initialLoad(), A.apiSettings && A.saveRemoteData && y.get.remoteValues() ? y.restore.remoteValues() : y.set.selected(), y.remove.initialLoad();
          }, remoteValues: function remoteValues() {
            var t = y.get.remoteValues();y.debug("Recreating selected from session data", t), t && (y.is.single() ? e.each(t, function (e, t) {
              y.set.text(t);
            }) : e.each(t, function (e, t) {
              y.add.label(e, t);
            }));
          } }, read: { remoteData: function remoteData(e) {
            var n;if (t.Storage !== i) return (n = sessionStorage.getItem(e)) !== i && n;y.error(V.noStorage);
          } }, save: { defaults: function defaults() {
            y.save.defaultText(), y.save.placeholderText(), y.save.defaultValue();
          }, defaultValue: function defaultValue() {
            var e = y.get.value();y.verbose("Saving default value as", e), z.data(D.defaultValue, e);
          }, defaultText: function defaultText() {
            var e = y.get.text();y.verbose("Saving default text as", e), z.data(D.defaultText, e);
          }, placeholderText: function placeholderText() {
            var e;!1 !== A.placeholder && H.hasClass(T.placeholder) && (e = y.get.text(), y.verbose("Saving placeholder text as", e), z.data(D.placeholderText, e));
          }, remoteData: function remoteData(e, n) {
            t.Storage !== i ? (y.verbose("Saving remote data to session storage", n, e), sessionStorage.setItem(n, e)) : y.error(V.noStorage);
          } }, clear: function clear() {
          y.is.multiple() && A.useLabels ? y.remove.labels() : (y.remove.activeItem(), y.remove.selectedItem()), y.set.placeholderText(), y.clearValue();
        }, clearValue: function clearValue() {
          y.set.value("");
        }, scrollPage: function scrollPage(e, t) {
          var n,
              i,
              a = t || y.get.selectedItem(),
              o = a.closest(O.menu),
              s = o.outerHeight(),
              r = o.scrollTop(),
              l = $.eq(0).outerHeight(),
              c = Math.floor(s / l),
              u = (o.prop("scrollHeight"), "up" == e ? r - l * c : r + l * c),
              d = $.not(O.unselectable);i = "up" == e ? d.index(a) - c : d.index(a) + c, (n = ("up" == e ? i >= 0 : i < d.length) ? d.eq(i) : "up" == e ? d.first() : d.last()).length > 0 && (y.debug("Scrolling page", e, n), a.removeClass(T.selected), n.addClass(T.selected), A.selectOnKeydown && y.is.single() && y.set.selectedItem(n), o.scrollTop(u));
        }, set: { filtered: function filtered() {
            var e = y.is.multiple(),
                t = y.is.searchSelection(),
                n = e && t,
                i = t ? y.get.query() : "",
                a = "string" == typeof i && i.length > 0,
                o = y.get.searchWidth(),
                s = "" !== i;e && a && (y.verbose("Adjusting input width", o, A.glyphWidth), j.css("width", o)), a || n && s ? (y.verbose("Hiding placeholder text"), H.addClass(T.filtered)) : (!e || n && !s) && (y.verbose("Showing placeholder text"), H.removeClass(T.filtered));
          }, empty: function empty() {
            z.addClass(T.empty);
          }, loading: function loading() {
            z.addClass(T.loading);
          }, placeholderText: function placeholderText(e) {
            e = e || y.get.placeholderText(), y.debug("Setting placeholder text", e), y.set.text(e), H.addClass(T.placeholder);
          }, tabbable: function tabbable() {
            y.is.searchSelection() ? (y.debug("Added tabindex to searchable dropdown"), j.val("").attr("tabindex", 0), B.attr("tabindex", -1)) : (y.debug("Added tabindex to dropdown"), z.attr("tabindex") === i && (z.attr("tabindex", 0), B.attr("tabindex", -1)));
          }, initialLoad: function initialLoad() {
            y.verbose("Setting initial load"), g = !0;
          }, activeItem: function activeItem(e) {
            A.allowAdditions && e.filter(O.addition).length > 0 ? e.addClass(T.filtered) : e.addClass(T.active);
          }, partialSearch: function partialSearch(e) {
            var t = y.get.query().length;j.val(e.substr(0, t));
          }, scrollPosition: function scrollPosition(e, t) {
            var n, a, o, s, r, l;n = (e = e || y.get.selectedItem()).closest(O.menu), a = e && e.length > 0, t = t !== i && t, e && n.length > 0 && a && (e.position().top, n.addClass(T.loading), o = (s = n.scrollTop()) - n.offset().top + e.offset().top, t || (l = s + n.height() < o + 5, r = o - 5 < s), y.debug("Scrolling to active item", o), (t || r || l) && n.scrollTop(o), n.removeClass(T.loading));
          }, text: function text(e) {
            "select" !== A.action && ("combo" == A.action ? (y.debug("Changing combo button text", e, W), A.preserveHTML ? W.html(e) : W.text(e)) : (e !== y.get.placeholderText() && H.removeClass(T.placeholder), y.debug("Changing text", e, H), H.removeClass(T.filtered), A.preserveHTML ? H.html(e) : H.text(e)));
          }, selectedItem: function selectedItem(e) {
            var t = y.get.choiceValue(e),
                n = y.get.choiceText(e, !1),
                i = y.get.choiceText(e, !0);y.debug("Setting user selection to item", e), y.remove.activeItem(), y.set.partialSearch(n), y.set.activeItem(e), y.set.selected(t, e), y.set.text(i);
          }, selectedLetter: function selectedLetter(t) {
            var n,
                i = $.filter("." + T.selected),
                a = !1;i.length > 0 && y.has.firstLetter(i, t) && (n = i.nextAll($).eq(0), y.has.firstLetter(n, t) && (a = n)), a || $.each(function () {
              if (y.has.firstLetter(e(this), t)) return a = e(this), !1;
            }), a && (y.verbose("Scrolling to next value with letter", t), y.set.scrollPosition(a), i.removeClass(T.selected), a.addClass(T.selected), A.selectOnKeydown && y.is.single() && y.set.selectedItem(a));
          }, direction: function direction(e) {
            "auto" == A.direction ? (y.remove.upward(), y.can.openDownward(e) ? y.remove.upward(e) : y.set.upward(e), y.is.leftward(e) || y.can.openRightward(e) || y.set.leftward(e)) : "upward" == A.direction && y.set.upward(e);
          }, upward: function upward(e) {
            (e || z).addClass(T.upward);
          }, leftward: function leftward(e) {
            (e || B).addClass(T.leftward);
          }, value: function value(e, t, n) {
            var a = y.escape.value(e),
                o = U.length > 0,
                s = y.get.values(),
                r = e !== i ? String(e) : e;if (o) {
              if (!A.allowReselection && r == s && (y.verbose("Skipping value update already same value", e, s), !y.is.initialLoad())) return;y.is.single() && y.has.selectInput() && y.can.extendSelect() && (y.debug("Adding user option", e), y.add.optionValue(e)), y.debug("Updating input value", a, s), Y = !0, U.val(a), !1 === A.fireOnInit && y.is.initialLoad() ? y.debug("Input native change event ignored on initial load") : y.trigger.change(), Y = !1;
            } else y.verbose("Storing value in metadata", a, U), a !== s && z.data(D.value, r);!1 === A.fireOnInit && y.is.initialLoad() ? y.verbose("No callback on initial load", A.onChange) : A.onChange.call(G, e, t, n);
          }, active: function active() {
            z.addClass(T.active);
          }, multiple: function multiple() {
            z.addClass(T.multiple);
          }, visible: function visible() {
            z.addClass(T.visible);
          }, exactly: function exactly(e, t) {
            y.debug("Setting selected to exact values"), y.clear(), y.set.selected(e, t);
          }, selected: function selected(t, n) {
            var i = y.is.multiple();(n = A.allowAdditions ? n || y.get.itemWithAdditions(t) : n || y.get.item(t)) && (y.debug("Setting selected menu item to", n), y.is.multiple() && y.remove.searchWidth(), y.is.single() ? (y.remove.activeItem(), y.remove.selectedItem()) : A.useLabels && y.remove.selectedItem(), n.each(function () {
              var t = e(this),
                  a = y.get.choiceText(t),
                  o = y.get.choiceValue(t, a),
                  s = t.hasClass(T.filtered),
                  r = t.hasClass(T.active),
                  l = t.hasClass(T.addition),
                  c = i && 1 == n.length;i ? !r || l ? (A.apiSettings && A.saveRemoteData && y.save.remoteData(a, o), A.useLabels ? (y.add.label(o, a, c), y.add.value(o, a, t), y.set.activeItem(t), y.filterActive(), y.select.nextAvailable(n)) : (y.add.value(o, a, t), y.set.text(y.add.variables(k.count)), y.set.activeItem(t))) : s || (y.debug("Selected active value, removing label"), y.remove.selected(o)) : (A.apiSettings && A.saveRemoteData && y.save.remoteData(a, o), y.set.text(a), y.set.value(o, a, t), t.addClass(T.active).addClass(T.selected));
            }));
          } }, add: { label: function label(t, n, i) {
            var a,
                o = y.is.searchSelection() ? j : H,
                s = y.escape.value(t);A.ignoreCase && (s = s.toLowerCase()), a = e("<a />").addClass(T.label).attr("data-" + D.value, s).html(E.label(s, n)), a = A.onLabelCreate.call(a, s, n), y.has.label(t) ? y.debug("User selection already exists, skipping", s) : (A.label.variation && a.addClass(A.label.variation), !0 === i ? (y.debug("Animating in label", a), a.addClass(T.hidden).insertBefore(o).transition(A.label.transition, A.label.duration)) : (y.debug("Adding selection label", a), a.insertBefore(o)));
          }, message: function message(t) {
            var n = B.children(O.message),
                i = A.templates.message(y.add.variables(t));n.length > 0 ? n.html(i) : n = e("<div/>").html(i).addClass(T.message).appendTo(B);
          }, optionValue: function optionValue(t) {
            var n = y.escape.value(t);U.find('option[value="' + y.escape.string(n) + '"]').length > 0 || (y.disconnect.selectObserver(), y.is.single() && (y.verbose("Removing previous user addition"), U.find("option." + T.addition).remove()), e("<option/>").prop("value", n).addClass(T.addition).html(t).appendTo(U), y.verbose("Adding user addition as an <option>", t), y.observe.select());
          }, userSuggestion: function userSuggestion(e) {
            var t,
                n = B.children(O.addition),
                i = y.get.item(e),
                a = i && i.not(O.addition).length,
                o = n.length > 0;A.useLabels && y.has.maxSelections() || ("" === e || a ? n.remove() : (o ? (n.data(D.value, e).data(D.text, e).attr("data-" + D.value, e).attr("data-" + D.text, e).removeClass(T.filtered), A.hideAdditions || (t = A.templates.addition(y.add.variables(k.addResult, e)), n.html(t)), y.verbose("Replacing user suggestion with new value", n)) : ((n = y.create.userChoice(e)).prependTo(B), y.verbose("Adding item choice to menu corresponding with user choice addition", n)), A.hideAdditions && !y.is.allFiltered() || n.addClass(T.selected).siblings().removeClass(T.selected), y.refreshItems()));
          }, variables: function variables(e, t) {
            var n,
                i,
                a = -1 !== e.search("{count}"),
                o = -1 !== e.search("{maxCount}"),
                s = -1 !== e.search("{term}");return y.verbose("Adding templated variables to message", e), a && (n = y.get.selectionCount(), e = e.replace("{count}", n)), o && (n = y.get.selectionCount(), e = e.replace("{maxCount}", A.maxSelections)), s && (i = t || y.get.query(), e = e.replace("{term}", i)), e;
          }, value: function value(t, n, i) {
            var a,
                o = y.get.values();y.has.value(t) ? y.debug("Value already selected") : "" !== t ? (e.isArray(o) ? (a = o.concat([t]), a = y.get.uniqueArray(a)) : a = [t], y.has.selectInput() ? y.can.extendSelect() && (y.debug("Adding value to select", t, a, U), y.add.optionValue(t)) : (a = a.join(A.delimiter), y.debug("Setting hidden input to delimited value", a, U)), !1 === A.fireOnInit && y.is.initialLoad() ? y.verbose("Skipping onadd callback on initial load", A.onAdd) : A.onAdd.call(G, t, n, i), y.set.value(a, t, n, i), y.check.maxSelections()) : y.debug("Cannot select blank values from multiselect");
          } }, remove: { active: function active() {
            z.removeClass(T.active);
          }, activeLabel: function activeLabel() {
            z.find(O.label).removeClass(T.active);
          }, empty: function empty() {
            z.removeClass(T.empty);
          }, loading: function loading() {
            z.removeClass(T.loading);
          }, initialLoad: function initialLoad() {
            g = !1;
          }, upward: function upward(e) {
            (e || z).removeClass(T.upward);
          }, leftward: function leftward(e) {
            (e || B).removeClass(T.leftward);
          }, visible: function visible() {
            z.removeClass(T.visible);
          }, activeItem: function activeItem() {
            $.removeClass(T.active);
          }, filteredItem: function filteredItem() {
            A.useLabels && y.has.maxSelections() || (A.useLabels && y.is.multiple() ? $.not("." + T.active).removeClass(T.filtered) : $.removeClass(T.filtered), y.remove.empty());
          }, optionValue: function optionValue(e) {
            var t = y.escape.value(e),
                n = U.find('option[value="' + y.escape.string(t) + '"]');n.length > 0 && n.hasClass(T.addition) && (C && (C.disconnect(), y.verbose("Temporarily disconnecting mutation observer")), n.remove(), y.verbose("Removing user addition as an <option>", t), C && C.observe(U[0], { childList: !0, subtree: !0 }));
          }, message: function message() {
            B.children(O.message).remove();
          }, searchWidth: function searchWidth() {
            j.css("width", "");
          }, searchTerm: function searchTerm() {
            y.verbose("Cleared search term"), j.val(""), y.set.filtered();
          }, userAddition: function userAddition() {
            $.filter(O.addition).remove();
          }, selected: function selected(t, n) {
            if (!(n = A.allowAdditions ? n || y.get.itemWithAdditions(t) : n || y.get.item(t))) return !1;n.each(function () {
              var t = e(this),
                  n = y.get.choiceText(t),
                  i = y.get.choiceValue(t, n);y.is.multiple() ? A.useLabels ? (y.remove.value(i, n, t), y.remove.label(i)) : (y.remove.value(i, n, t), 0 === y.get.selectionCount() ? y.set.placeholderText() : y.set.text(y.add.variables(k.count))) : y.remove.value(i, n, t), t.removeClass(T.filtered).removeClass(T.active), A.useLabels && t.removeClass(T.selected);
            });
          }, selectedItem: function selectedItem() {
            $.removeClass(T.selected);
          }, value: function value(e, t, n) {
            var i,
                a = y.get.values();y.has.selectInput() ? (y.verbose("Input is <select> removing selected option", e), i = y.remove.arrayValue(e, a), y.remove.optionValue(e)) : (y.verbose("Removing from delimited values", e), i = (i = y.remove.arrayValue(e, a)).join(A.delimiter)), !1 === A.fireOnInit && y.is.initialLoad() ? y.verbose("No callback on initial load", A.onRemove) : A.onRemove.call(G, e, t, n), y.set.value(i, t, n), y.check.maxSelections();
          }, arrayValue: function arrayValue(t, n) {
            return e.isArray(n) || (n = [n]), n = e.grep(n, function (e) {
              return t != e;
            }), y.verbose("Removed value from delimited string", t, n), n;
          }, label: function label(e, t) {
            var n = z.find(O.label).filter("[data-" + D.value + '="' + y.escape.string(e) + '"]');y.verbose("Removing label", n), n.remove();
          }, activeLabels: function activeLabels(e) {
            e = e || z.find(O.label).filter("." + T.active), y.verbose("Removing active label selections", e), y.remove.labels(e);
          }, labels: function labels(t) {
            t = t || z.find(O.label), y.verbose("Removing labels", t), t.each(function () {
              var t = e(this),
                  n = t.data(D.value),
                  a = n !== i ? String(n) : n,
                  o = y.is.userValue(a);!1 !== A.onLabelRemove.call(t, n) ? (y.remove.message(), o ? (y.remove.value(a), y.remove.label(a)) : y.remove.selected(a)) : y.debug("Label remove callback cancelled removal");
            });
          }, tabbable: function tabbable() {
            y.is.searchSelection() ? (y.debug("Searchable dropdown initialized"), j.removeAttr("tabindex"), B.removeAttr("tabindex")) : (y.debug("Simple selection dropdown initialized"), z.removeAttr("tabindex"), B.removeAttr("tabindex"));
          } }, has: { menuSearch: function menuSearch() {
            return y.has.search() && j.closest(B).length > 0;
          }, search: function search() {
            return j.length > 0;
          }, sizer: function sizer() {
            return N.length > 0;
          }, selectInput: function selectInput() {
            return U.is("select");
          }, minCharacters: function minCharacters(e) {
            return !A.minCharacters || (e = e !== i ? String(e) : String(y.get.query())).length >= A.minCharacters;
          }, firstLetter: function firstLetter(e, t) {
            var n;return !(!e || 0 === e.length || "string" != typeof t) && (n = y.get.choiceText(e, !1), (t = t.toLowerCase()) == String(n).charAt(0).toLowerCase());
          }, input: function input() {
            return U.length > 0;
          }, items: function items() {
            return $.length > 0;
          }, menu: function menu() {
            return B.length > 0;
          }, message: function message() {
            return 0 !== B.children(O.message).length;
          }, label: function label(e) {
            var t = y.escape.value(e),
                n = z.find(O.label);return A.ignoreCase && (t = t.toLowerCase()), n.filter("[data-" + D.value + '="' + y.escape.string(t) + '"]').length > 0;
          }, maxSelections: function maxSelections() {
            return A.maxSelections && y.get.selectionCount() >= A.maxSelections;
          }, allResultsFiltered: function allResultsFiltered() {
            var e = $.not(O.addition);return e.filter(O.unselectable).length === e.length;
          }, userSuggestion: function userSuggestion() {
            return B.children(O.addition).length > 0;
          }, query: function query() {
            return "" !== y.get.query();
          }, value: function value(e) {
            return A.ignoreCase ? y.has.valueIgnoringCase(e) : y.has.valueMatchingCase(e);
          }, valueMatchingCase: function valueMatchingCase(t) {
            var n = y.get.values();return !!(e.isArray(n) ? n && -1 !== e.inArray(t, n) : n == t);
          }, valueIgnoringCase: function valueIgnoringCase(t) {
            var n = y.get.values(),
                i = !1;return e.isArray(n) || (n = [n]), e.each(n, function (e, n) {
              if (String(t).toLowerCase() == String(n).toLowerCase()) return i = !0, !1;
            }), i;
          } }, is: { active: function active() {
            return z.hasClass(T.active);
          }, animatingInward: function animatingInward() {
            return B.transition("is inward");
          }, animatingOutward: function animatingOutward() {
            return B.transition("is outward");
          }, bubbledLabelClick: function bubbledLabelClick(t) {
            return e(t.target).is("select, input") && z.closest("label").length > 0;
          }, bubbledIconClick: function bubbledIconClick(t) {
            return e(t.target).closest(K).length > 0;
          }, alreadySetup: function alreadySetup() {
            return z.is("select") && z.parent(O.dropdown).data(F) !== i && 0 === z.prev().length;
          }, animating: function animating(e) {
            return e ? e.transition && e.transition("is animating") : B.transition && B.transition("is animating");
          }, leftward: function leftward(e) {
            return (e || B).hasClass(T.leftward);
          }, disabled: function disabled() {
            return z.hasClass(T.disabled);
          }, focused: function focused() {
            return n.activeElement === z[0];
          }, focusedOnSearch: function focusedOnSearch() {
            return n.activeElement === j[0];
          }, allFiltered: function allFiltered() {
            return (y.is.multiple() || y.has.search()) && !(0 == A.hideAdditions && y.has.userSuggestion()) && !y.has.message() && y.has.allResultsFiltered();
          }, hidden: function hidden(e) {
            return !y.is.visible(e);
          }, initialLoad: function initialLoad() {
            return g;
          }, inObject: function inObject(t, n) {
            var i = !1;return e.each(n, function (e, n) {
              if (n == t) return i = !0, !0;
            }), i;
          }, multiple: function multiple() {
            return z.hasClass(T.multiple);
          }, remote: function remote() {
            return A.apiSettings && y.can.useAPI();
          }, single: function single() {
            return !y.is.multiple();
          }, selectMutation: function selectMutation(t) {
            var n = !1;return e.each(t, function (t, i) {
              if (i.target && e(i.target).is("select")) return n = !0, !0;
            }), n;
          }, search: function search() {
            return z.hasClass(T.search);
          }, searchSelection: function searchSelection() {
            return y.has.search() && 1 === j.parent(O.dropdown).length;
          }, selection: function selection() {
            return z.hasClass(T.selection);
          }, userValue: function userValue(t) {
            return -1 !== e.inArray(t, y.get.userValues());
          }, upward: function upward(e) {
            return (e || z).hasClass(T.upward);
          }, visible: function visible(e) {
            return e ? e.hasClass(T.visible) : B.hasClass(T.visible);
          }, verticallyScrollableContext: function verticallyScrollableContext() {
            var e = P.get(0) !== t && P.css("overflow-y");return "auto" == e || "scroll" == e;
          }, horizontallyScrollableContext: function horizontallyScrollableContext() {
            var e = P.get(0) !== t && P.css("overflow-X");return "auto" == e || "scroll" == e;
          } }, can: { activate: function activate(e) {
            return !!A.useLabels || !y.has.maxSelections() || !(!y.has.maxSelections() || !e.hasClass(T.active));
          }, openDownward: function openDownward(e) {
            var n,
                i,
                a = e || B,
                o = !0;return a.addClass(T.loading), i = { context: { offset: P.get(0) === t ? { top: 0, left: 0 } : P.offset(), scrollTop: P.scrollTop(), height: P.outerHeight() }, menu: { offset: a.offset(), height: a.outerHeight() } }, y.is.verticallyScrollableContext() && (i.menu.offset.top += i.context.scrollTop), (n = { above: i.context.scrollTop <= i.menu.offset.top - i.context.offset.top - i.menu.height, below: i.context.scrollTop + i.context.height >= i.menu.offset.top - i.context.offset.top + i.menu.height }).below ? (y.verbose("Dropdown can fit in context downward", n), o = !0) : n.below || n.above ? (y.verbose("Dropdown cannot fit below, opening upward", n), o = !1) : (y.verbose("Dropdown cannot fit in either direction, favoring downward", n), o = !0), a.removeClass(T.loading), o;
          }, openRightward: function openRightward(e) {
            var n,
                i,
                a = e || B,
                o = !0;return a.addClass(T.loading), i = { context: { offset: P.get(0) === t ? { top: 0, left: 0 } : P.offset(), scrollLeft: P.scrollLeft(), width: P.outerWidth() }, menu: { offset: a.offset(), width: a.outerWidth() } }, y.is.horizontallyScrollableContext() && (i.menu.offset.left += i.context.scrollLeft), (n = i.menu.offset.left - i.context.offset.left + i.menu.width >= i.context.scrollLeft + i.context.width) && (y.verbose("Dropdown cannot fit in context rightward", n), o = !1), a.removeClass(T.loading), o;
          }, click: function click() {
            return c || "click" == A.on;
          }, extendSelect: function extendSelect() {
            return A.allowAdditions || A.apiSettings;
          }, show: function show() {
            return !y.is.disabled() && (y.has.items() || y.has.message());
          }, useAPI: function useAPI() {
            return e.fn.api !== i;
          } }, animate: { show: function show(t, n) {
            var a,
                o = n || B,
                s = n ? function () {} : function () {
              y.hideSubMenus(), y.hideOthers(), y.set.active();
            };t = e.isFunction(t) ? t : function () {}, y.verbose("Doing menu show animation", o), y.set.direction(n), a = y.get.transition(n), y.is.selection() && y.set.scrollPosition(y.get.selectedItem(), !0), (y.is.hidden(o) || y.is.animating(o)) && ("none" == a ? (s(), o.transition("show"), t.call(G)) : e.fn.transition !== i && z.transition("is supported") ? o.transition({ animation: a + " in", debug: A.debug, verbose: A.verbose, duration: A.duration, queue: !0, onStart: s, onComplete: function onComplete() {
                t.call(G);
              } }) : y.error(V.noTransition, a));
          }, hide: function hide(t, n) {
            var a = n || B,
                o = (n ? A.duration : A.duration, n ? function () {} : function () {
              y.can.click() && y.unbind.intent(), y.remove.active();
            }),
                s = y.get.transition(n);t = e.isFunction(t) ? t : function () {}, (y.is.visible(a) || y.is.animating(a)) && (y.verbose("Doing menu hide animation", a), "none" == s ? (o(), a.transition("hide"), t.call(G)) : e.fn.transition !== i && z.transition("is supported") ? a.transition({ animation: s + " out", duration: A.duration, debug: A.debug, verbose: A.verbose, queue: !1, onStart: o, onComplete: function onComplete() {
                t.call(G);
              } }) : y.error(V.transition));
          } }, hideAndClear: function hideAndClear() {
          y.remove.searchTerm(), y.has.maxSelections() || (y.has.search() ? y.hide(function () {
            y.remove.filteredItem();
          }) : y.hide());
        }, delay: { show: function show() {
            y.verbose("Delaying show event to ensure user intent"), clearTimeout(y.timer), y.timer = setTimeout(y.show, A.delay.show);
          }, hide: function hide() {
            y.verbose("Delaying hide event to ensure user intent"), clearTimeout(y.timer), y.timer = setTimeout(y.hide, A.delay.hide);
          } }, escape: { value: function value(t) {
            var n = e.isArray(t),
                i = "string" == typeof t,
                a = !i && !n,
                o = i && -1 !== t.search(R.quote),
                s = [];return a || !o ? t : (y.debug("Encoding quote values for use in select", t), n ? (e.each(t, function (e, t) {
              s.push(t.replace(R.quote, "&quot;"));
            }), s) : t.replace(R.quote, "&quot;"));
          }, string: function string(e) {
            return (e = String(e)).replace(R.escape, "\\$&");
          } }, setting: function setting(t, n) {
          if (y.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, A, t);else {
            if (n === i) return A[t];e.isPlainObject(A[t]) ? e.extend(!0, A[t], n) : A[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, y, t);else {
            if (n === i) return y[t];y[t] = n;
          }
        }, debug: function debug() {
          !A.silent && A.debug && (A.performance ? y.performance.log(arguments) : (y.debug = Function.prototype.bind.call(console.info, console, A.name + ":"), y.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !A.silent && A.verbose && A.debug && (A.performance ? y.performance.log(arguments) : (y.verbose = Function.prototype.bind.call(console.info, console, A.name + ":"), y.verbose.apply(console, arguments)));
        }, error: function error() {
          A.silent || (y.error = Function.prototype.bind.call(console.error, console, A.name + ":"), y.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n;A.performance && (n = (t = new Date().getTime()) - (u || t), u = t, d.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: G, "Execution Time": n })), clearTimeout(y.performance.timer), y.performance.timer = setTimeout(y.performance.display, 500);
          }, display: function display() {
            var t = A.name + ":",
                n = 0;u = !1, clearTimeout(y.performance.timer), e.each(d, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", l && (t += " '" + l + "'"), (console.group !== i || console.table !== i) && d.length > 0 && (console.groupCollapsed(t), console.table ? console.table(d) : e.each(d, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), d = [];
          } }, invoke: function invoke(t, n, a) {
          var s,
              r,
              l,
              c = J;return n = n || m, a = G || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (n, a) {
            var o = n != s ? a + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[o]) && n != s) c = c[o];else {
              if (c[o] !== i) return r = c[o], !1;if (!e.isPlainObject(c[a]) || n == s) return c[a] !== i ? (r = c[a], !1) : (y.error(V.method, t), !1);c = c[a];
            }
          })), e.isFunction(r) ? l = r.apply(a, n) : r !== i && (l = r), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), r;
        } }, f ? (J === i && y.initialize(), y.invoke(v)) : (J !== i && J.invoke("destroy"), y.initialize());
    }), o !== i ? o : s;
  }, e.fn.dropdown.settings = { silent: !1, debug: !1, verbose: !1, performance: !0, on: "click", action: "activate", values: !1, apiSettings: !1, selectOnKeydown: !0, minCharacters: 0, filterRemoteData: !1, saveRemoteData: !0, throttle: 200, context: t, direction: "auto", keepOnScreen: !0, match: "both", fullTextSearch: !1, placeholder: "auto", preserveHTML: !0, sortSelect: !1, forceSelection: !0, allowAdditions: !1, ignoreCase: !1, hideAdditions: !0, maxSelections: !1, useLabels: !0, delimiter: ",", showOnFocus: !0, allowReselection: !1, allowTab: !0, allowCategorySelection: !1, fireOnInit: !1, transition: "auto", duration: 200, glyphWidth: 1.037, label: { transition: "scale", duration: 200, variation: !1 }, delay: { hide: 300, show: 200, search: 20, touch: 50 }, onChange: function onChange(e, t, n) {}, onAdd: function onAdd(e, t, n) {}, onRemove: function onRemove(e, t, n) {}, onLabelSelect: function onLabelSelect(e) {}, onLabelCreate: function onLabelCreate(t, n) {
      return e(this);
    }, onLabelRemove: function onLabelRemove(e) {
      return !0;
    }, onNoResults: function onNoResults(e) {
      return !0;
    }, onShow: function onShow() {}, onHide: function onHide() {}, name: "Dropdown", namespace: "dropdown", message: { addResult: "Add <b>{term}</b>", count: "{count} selected", maxSelections: "Max {maxCount} selections", noResults: "No results found.", serverError: "There was an error contacting the server" }, error: { action: "You called a dropdown action that was not defined", alreadySetup: "Once a select has been initialized behaviors must be called on the created ui dropdown", labels: "Allowing user additions currently requires the use of labels.", missingMultiple: "<select> requires multiple property to be set to correctly preserve multiple values", method: "The method you called is not defined.", noAPI: "The API module is required to load resources remotely", noStorage: "Saving remote data requires session storage", noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>" }, regExp: { escape: /[-[\]{}()*+?.,\\^$|#\s]/g, quote: /"/g }, metadata: { defaultText: "defaultText", defaultValue: "defaultValue", placeholderText: "placeholder", text: "text", value: "value" }, fields: { remoteValues: "results", values: "values", disabled: "disabled", name: "name", value: "value", text: "text" }, keys: { backspace: 8, delimiter: 188, deleteKey: 46, enter: 13, escape: 27, pageUp: 33, pageDown: 34, leftArrow: 37, upArrow: 38, rightArrow: 39, downArrow: 40 }, selector: { addition: ".addition", dropdown: ".ui.dropdown", hidden: ".hidden", icon: "> .dropdown.icon", input: '> input[type="hidden"], > select', item: ".item", label: "> .label", remove: "> .label > .delete.icon", siblingLabel: ".label", menu: ".menu", message: ".message", menuIcon: ".dropdown.icon", search: "input.search, .menu > .search > input, .menu input.search", sizer: "> input.sizer", text: "> .text:not(.icon)", unselectable: ".disabled, .filtered" }, className: { active: "active", addition: "addition", animating: "animating", disabled: "disabled", empty: "empty", dropdown: "ui dropdown", filtered: "filtered", hidden: "hidden transition", item: "item", label: "ui label", loading: "loading", menu: "menu", message: "message", multiple: "multiple", placeholder: "default", sizer: "sizer", search: "search", selected: "selected", selection: "selection", upward: "upward", leftward: "left", visible: "visible" } }, e.fn.dropdown.settings.templates = { dropdown: function dropdown(t) {
      var n = t.placeholder || !1,
          i = (t.values, "");return i += '<i class="dropdown icon"></i>', t.placeholder ? i += '<div class="default text">' + n + "</div>" : i += '<div class="text"></div>', i += '<div class="menu">', e.each(t.values, function (e, t) {
        i += t.disabled ? '<div class="disabled item" data-value="' + t.value + '">' + t.name + "</div>" : '<div class="item" data-value="' + t.value + '">' + t.name + "</div>";
      }), i += "</div>";
    }, menu: function menu(t, n) {
      var i = t[n.values] || {},
          a = "";return e.each(i, function (e, t) {
        var i = t[n.text] ? 'data-text="' + t[n.text] + '"' : "",
            o = t[n.disabled] ? "disabled " : "";a += '<div class="' + o + 'item" data-value="' + t[n.value] + '"' + i + ">", a += t[n.name], a += "</div>";
      }), a;
    }, label: function label(e, t) {
      return t + '<i class="delete icon"></i>';
    }, message: function message(e) {
      return e;
    }, addition: function addition(e) {
      return e;
    } };
}(jQuery, window, document);
!function (t, e, o, n) {
  "use strict";
  e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), t.fn.popup = function (i) {
    var r,
        a = t(this),
        s = t(o),
        p = t(e),
        l = t("body"),
        u = a.selector || "",
        c = new Date().getTime(),
        d = [],
        f = arguments[0],
        g = "string" == typeof f,
        h = [].slice.call(arguments, 1);return a.each(function () {
      var a,
          m,
          v,
          b,
          w,
          y,
          P = t.isPlainObject(i) ? t.extend(!0, {}, t.fn.popup.settings, i) : t.extend({}, t.fn.popup.settings),
          C = P.selector,
          T = P.className,
          x = P.error,
          k = P.metadata,
          E = P.namespace,
          S = "." + P.namespace,
          A = "module-" + E,
          F = t(this),
          O = t(P.context),
          D = t(P.scrollContext),
          j = t(P.boundary),
          H = P.target ? t(P.target) : F,
          R = 0,
          N = !1,
          V = !1,
          W = this,
          M = F.data(A);y = { initialize: function initialize() {
          y.debug("Initializing", F), y.createID(), y.bind.events(), !y.exists() && P.preserve && y.create(), P.observeChanges && y.observeChanges(), y.instantiate();
        }, instantiate: function instantiate() {
          y.verbose("Storing instance", y), M = y, F.data(A, M);
        }, observeChanges: function observeChanges() {
          "MutationObserver" in e && ((v = new MutationObserver(y.event.documentChanged)).observe(o, { childList: !0, subtree: !0 }), y.debug("Setting up mutation observer", v));
        }, refresh: function refresh() {
          P.popup ? a = t(P.popup).eq(0) : P.inline && (a = H.nextAll(C.popup).eq(0), P.popup = a), P.popup ? (a.addClass(T.loading), m = y.get.offsetParent(), a.removeClass(T.loading), P.movePopup && y.has.popup() && y.get.offsetParent(a)[0] !== m[0] && (y.debug("Moving popup to the same offset parent as target"), a.detach().appendTo(m))) : m = P.inline ? y.get.offsetParent(H) : y.has.popup() ? y.get.offsetParent(a) : l, m.is("html") && m[0] !== l[0] && (y.debug("Setting page as offset parent"), m = l), y.get.variation() && y.set.variation();
        }, reposition: function reposition() {
          y.refresh(), y.set.position();
        }, destroy: function destroy() {
          y.debug("Destroying previous module"), v && v.disconnect(), a && !P.preserve && y.removePopup(), clearTimeout(y.hideTimer), clearTimeout(y.showTimer), y.unbind.close(), y.unbind.events(), F.removeData(A);
        }, event: { start: function start(e) {
            var o = t.isPlainObject(P.delay) ? P.delay.show : P.delay;clearTimeout(y.hideTimer), V || (y.showTimer = setTimeout(y.show, o));
          }, end: function end() {
            var e = t.isPlainObject(P.delay) ? P.delay.hide : P.delay;clearTimeout(y.showTimer), y.hideTimer = setTimeout(y.hide, e);
          }, touchstart: function touchstart(t) {
            V = !0, y.show();
          }, resize: function resize() {
            y.is.visible() && y.set.position();
          }, documentChanged: function documentChanged(e) {
            [].forEach.call(e, function (e) {
              e.removedNodes && [].forEach.call(e.removedNodes, function (e) {
                (e == W || t(e).find(W).length > 0) && (y.debug("Element removed from DOM, tearing down events"), y.destroy());
              });
            });
          }, hideGracefully: function hideGracefully(e) {
            var n = t(e.target),
                i = t.contains(o.documentElement, e.target),
                r = n.closest(C.popup).length > 0;e && !r && i ? (y.debug("Click occurred outside popup hiding popup"), y.hide()) : y.debug("Click was inside popup, keeping popup open");
          } }, create: function create() {
          var e = y.get.html(),
              o = y.get.title(),
              n = y.get.content();e || n || o ? (y.debug("Creating pop-up html"), e || (e = P.templates.popup({ title: o, content: n })), a = t("<div/>").addClass(T.popup).data(k.activator, F).html(e), P.inline ? (y.verbose("Inserting popup element inline", a), a.insertAfter(F)) : (y.verbose("Appending popup element to body", a), a.appendTo(O)), y.refresh(), y.set.variation(), P.hoverable && y.bind.popup(), P.onCreate.call(a, W)) : 0 !== H.next(C.popup).length ? (y.verbose("Pre-existing popup found"), P.inline = !0, P.popup = H.next(C.popup).data(k.activator, F), y.refresh(), P.hoverable && y.bind.popup()) : P.popup ? (t(P.popup).data(k.activator, F), y.verbose("Used popup specified in settings"), y.refresh(), P.hoverable && y.bind.popup()) : y.debug("No content specified skipping display", W);
        }, createID: function createID() {
          w = (Math.random().toString(16) + "000000000").substr(2, 8), b = "." + w, y.verbose("Creating unique id for element", w);
        }, toggle: function toggle() {
          y.debug("Toggling pop-up"), y.is.hidden() ? (y.debug("Popup is hidden, showing pop-up"), y.unbind.close(), y.show()) : (y.debug("Popup is visible, hiding pop-up"), y.hide());
        }, show: function show(t) {
          if (t = t || function () {}, y.debug("Showing pop-up", P.transition), y.is.hidden() && (!y.is.active() || !y.is.dropdown())) {
            if (y.exists() || y.create(), !1 === P.onShow.call(a, W)) return void y.debug("onShow callback returned false, cancelling popup animation");P.preserve || P.popup || y.refresh(), a && y.set.position() && (y.save.conditions(), P.exclusive && y.hideAll(), y.animate.show(t));
          }
        }, hide: function hide(t) {
          if (t = t || function () {}, y.is.visible() || y.is.animating()) {
            if (!1 === P.onHide.call(a, W)) return void y.debug("onHide callback returned false, cancelling popup animation");y.remove.visible(), y.unbind.close(), y.restore.conditions(), y.animate.hide(t);
          }
        }, hideAll: function hideAll() {
          t(C.popup).filter("." + T.popupVisible).each(function () {
            t(this).data(k.activator).popup("hide");
          });
        }, exists: function exists() {
          return !!a && (P.inline || P.popup ? y.has.popup() : a.closest(O).length >= 1);
        }, removePopup: function removePopup() {
          y.has.popup() && !P.popup && (y.debug("Removing popup", a), a.remove(), a = n, P.onRemove.call(a, W));
        }, save: { conditions: function conditions() {
            y.cache = { title: F.attr("title") }, y.cache.title && F.removeAttr("title"), y.verbose("Saving original attributes", y.cache.title);
          } }, restore: { conditions: function conditions() {
            return y.cache && y.cache.title && (F.attr("title", y.cache.title), y.verbose("Restoring original attributes", y.cache.title)), !0;
          } }, supports: { svg: function svg() {
            return "undefined" == typeof SVGGraphicsElement;
          } }, animate: { show: function show(e) {
            e = t.isFunction(e) ? e : function () {}, P.transition && t.fn.transition !== n && F.transition("is supported") ? (y.set.visible(), a.transition({ animation: P.transition + " in", queue: !1, debug: P.debug, verbose: P.verbose, duration: P.duration, onComplete: function onComplete() {
                y.bind.close(), e.call(a, W), P.onVisible.call(a, W);
              } })) : y.error(x.noTransition);
          }, hide: function hide(e) {
            e = t.isFunction(e) ? e : function () {}, y.debug("Hiding pop-up"), !1 !== P.onHide.call(a, W) ? P.transition && t.fn.transition !== n && F.transition("is supported") ? a.transition({ animation: P.transition + " out", queue: !1, duration: P.duration, debug: P.debug, verbose: P.verbose, onComplete: function onComplete() {
                y.reset(), e.call(a, W), P.onHidden.call(a, W);
              } }) : y.error(x.noTransition) : y.debug("onHide callback returned false, cancelling popup animation");
          } }, change: { content: function content(t) {
            a.html(t);
          } }, get: { html: function html() {
            return F.removeData(k.html), F.data(k.html) || P.html;
          }, title: function title() {
            return F.removeData(k.title), F.data(k.title) || P.title;
          }, content: function content() {
            return F.removeData(k.content), F.data(k.content) || P.content || F.attr("title");
          }, variation: function variation() {
            return F.removeData(k.variation), F.data(k.variation) || P.variation;
          }, popup: function popup() {
            return a;
          }, popupOffset: function popupOffset() {
            return a.offset();
          }, calculations: function calculations() {
            var t,
                o = y.get.offsetParent(a),
                n = H[0],
                i = j[0] == e,
                r = P.inline || P.popup && P.movePopup ? H.position() : H.offset(),
                s = i ? { top: 0, left: 0 } : j.offset(),
                l = {},
                u = i ? { top: p.scrollTop(), left: p.scrollLeft() } : { top: 0, left: 0 };if (l = { target: { element: H[0], width: H.outerWidth(), height: H.outerHeight(), top: r.top, left: r.left, margin: {} }, popup: { width: a.outerWidth(), height: a.outerHeight() }, parent: { width: m.outerWidth(), height: m.outerHeight() }, screen: { top: s.top, left: s.left, scroll: { top: u.top, left: u.left }, width: j.width(), height: j.height() } }, o.get(0) !== m.get(0)) {
              var c = o.offset();l.target.top -= c.top, l.target.left -= c.left, l.parent.width = o.outerWidth(), l.parent.height = o.outerHeight();
            }return P.setFluidWidth && y.is.fluid() && (l.container = { width: a.parent().outerWidth() }, l.popup.width = l.container.width), l.target.margin.top = P.inline ? parseInt(e.getComputedStyle(n).getPropertyValue("margin-top"), 10) : 0, l.target.margin.left = P.inline ? y.is.rtl() ? parseInt(e.getComputedStyle(n).getPropertyValue("margin-right"), 10) : parseInt(e.getComputedStyle(n).getPropertyValue("margin-left"), 10) : 0, t = l.screen, l.boundary = { top: t.top + t.scroll.top, bottom: t.top + t.scroll.top + t.height, left: t.left + t.scroll.left, right: t.left + t.scroll.left + t.width }, l;
          }, id: function id() {
            return w;
          }, startEvent: function startEvent() {
            return "hover" == P.on ? "mouseenter" : "focus" == P.on && "focus";
          }, scrollEvent: function scrollEvent() {
            return "scroll";
          }, endEvent: function endEvent() {
            return "hover" == P.on ? "mouseleave" : "focus" == P.on && "blur";
          }, distanceFromBoundary: function distanceFromBoundary(t, e) {
            var o,
                n,
                i = {};return o = (e = e || y.get.calculations()).popup, n = e.boundary, t && (i = { top: t.top - n.top, left: t.left - n.left, right: n.right - (t.left + o.width), bottom: n.bottom - (t.top + o.height) }, y.verbose("Distance from boundaries determined", t, i)), i;
          }, offsetParent: function offsetParent(e) {
            var o = (e !== n ? e[0] : H[0]).parentNode,
                i = t(o);if (o) for (var r = "none" === i.css("transform"), a = "static" === i.css("position"), s = i.is("body"); o && !s && a && r;) {
              o = o.parentNode, r = "none" === (i = t(o)).css("transform"), a = "static" === i.css("position"), s = i.is("body");
            }return i && i.length > 0 ? i : t();
          }, positions: function positions() {
            return { "top left": !1, "top center": !1, "top right": !1, "bottom left": !1, "bottom center": !1, "bottom right": !1, "left center": !1, "right center": !1 };
          }, nextPosition: function nextPosition(t) {
            var e = t.split(" "),
                o = e[0],
                n = e[1],
                i = "top" == o || "bottom" == o,
                r = !1,
                a = !1,
                s = !1;return N || (y.verbose("All available positions available"), N = y.get.positions()), y.debug("Recording last position tried", t), N[t] = !0, "opposite" === P.prefer && (s = (s = [{ top: "bottom", bottom: "top", left: "right", right: "left" }[o], n]).join(" "), r = !0 === N[s], y.debug("Trying opposite strategy", s)), "adjacent" === P.prefer && i && (s = (s = [o, { left: "center", center: "right", right: "left" }[n]]).join(" "), a = !0 === N[s], y.debug("Trying adjacent strategy", s)), (a || r) && (y.debug("Using backup position", s), s = { "top left": "top center", "top center": "top right", "top right": "right center", "right center": "bottom right", "bottom right": "bottom center", "bottom center": "bottom left", "bottom left": "left center", "left center": "top left" }[t]), s;
          } }, set: { position: function position(t, e) {
            if (0 !== H.length && 0 !== a.length) {
              var o, i, r, s, p, l, u, c;if (e = e || y.get.calculations(), t = t || F.data(k.position) || P.position, o = F.data(k.offset) || P.offset, i = P.distanceAway, r = e.target, s = e.popup, p = e.parent, y.should.centerArrow(e) && (y.verbose("Adjusting offset to center arrow on small target element"), "top left" != t && "bottom left" != t || (o += r.width / 2, o -= P.arrowPixelsFromEdge), "top right" != t && "bottom right" != t || (o -= r.width / 2, o += P.arrowPixelsFromEdge)), 0 === r.width && 0 === r.height && !y.is.svg(r.element)) return y.debug("Popup target is hidden, no action taken"), !1;switch (P.inline && (y.debug("Adding margin to calculation", r.margin), "left center" == t || "right center" == t ? (o += r.margin.top, i += -r.margin.left) : "top left" == t || "top center" == t || "top right" == t ? (o += r.margin.left, i -= r.margin.top) : (o += r.margin.left, i += r.margin.top)), y.debug("Determining popup position from calculations", t, e), y.is.rtl() && (t = t.replace(/left|right/g, function (t) {
                return "left" == t ? "right" : "left";
              }), y.debug("RTL: Popup position updated", t)), R == P.maxSearchDepth && "string" == typeof P.lastResort && (t = P.lastResort), t) {case "top left":
                  l = { top: "auto", bottom: p.height - r.top + i, left: r.left + o, right: "auto" };break;case "top center":
                  l = { bottom: p.height - r.top + i, left: r.left + r.width / 2 - s.width / 2 + o, top: "auto", right: "auto" };break;case "top right":
                  l = { bottom: p.height - r.top + i, right: p.width - r.left - r.width - o, top: "auto", left: "auto" };break;case "left center":
                  l = { top: r.top + r.height / 2 - s.height / 2 + o, right: p.width - r.left + i, left: "auto", bottom: "auto" };break;case "right center":
                  l = { top: r.top + r.height / 2 - s.height / 2 + o, left: r.left + r.width + i, bottom: "auto", right: "auto" };break;case "bottom left":
                  l = { top: r.top + r.height + i, left: r.left + o, bottom: "auto", right: "auto" };break;case "bottom center":
                  l = { top: r.top + r.height + i, left: r.left + r.width / 2 - s.width / 2 + o, bottom: "auto", right: "auto" };break;case "bottom right":
                  l = { top: r.top + r.height + i, right: p.width - r.left - r.width - o, left: "auto", bottom: "auto" };}if (l === n && y.error(x.invalidPosition, t), y.debug("Calculated popup positioning values", l), a.css(l).removeClass(T.position).addClass(t).addClass(T.loading), u = y.get.popupOffset(), c = y.get.distanceFromBoundary(u, e), y.is.offstage(c, t)) {
                if (y.debug("Position is outside viewport", t), R < P.maxSearchDepth) return R++, t = y.get.nextPosition(t), y.debug("Trying new position", t), !!a && y.set.position(t, e);if (!P.lastResort) return y.debug("Popup could not find a position to display", a), y.error(x.cannotPlace, W), y.remove.attempts(), y.remove.loading(), y.reset(), P.onUnplaceable.call(a, W), !1;y.debug("No position found, showing with last position");
              }return y.debug("Position is on stage", t), y.remove.attempts(), y.remove.loading(), P.setFluidWidth && y.is.fluid() && y.set.fluidWidth(e), !0;
            }y.error(x.notFound);
          }, fluidWidth: function fluidWidth(t) {
            t = t || y.get.calculations(), y.debug("Automatically setting element width to parent width", t.parent.width), a.css("width", t.container.width);
          }, variation: function variation(t) {
            (t = t || y.get.variation()) && y.has.popup() && (y.verbose("Adding variation to popup", t), a.addClass(t));
          }, visible: function visible() {
            F.addClass(T.visible);
          } }, remove: { loading: function loading() {
            a.removeClass(T.loading);
          }, variation: function variation(t) {
            (t = t || y.get.variation()) && (y.verbose("Removing variation", t), a.removeClass(t));
          }, visible: function visible() {
            F.removeClass(T.visible);
          }, attempts: function attempts() {
            y.verbose("Resetting all searched positions"), R = 0, N = !1;
          } }, bind: { events: function events() {
            y.debug("Binding popup events to module"), "click" == P.on && F.on("click" + S, y.toggle), "hover" == P.on && F.on("touchstart" + S, y.event.touchstart), y.get.startEvent() && F.on(y.get.startEvent() + S, y.event.start).on(y.get.endEvent() + S, y.event.end), P.target && y.debug("Target set to element", H), p.on("resize" + b, y.event.resize);
          }, popup: function popup() {
            y.verbose("Allowing hover events on popup to prevent closing"), a && y.has.popup() && a.on("mouseenter" + S, y.event.start).on("mouseleave" + S, y.event.end);
          }, close: function close() {
            (!0 === P.hideOnScroll || "auto" == P.hideOnScroll && "click" != P.on) && y.bind.closeOnScroll(), "hover" == P.on && V && y.bind.touchClose(), "click" == P.on && P.closable && y.bind.clickaway();
          }, closeOnScroll: function closeOnScroll() {
            y.verbose("Binding scroll close event to document"), D.one(y.get.scrollEvent() + b, y.event.hideGracefully);
          }, touchClose: function touchClose() {
            y.verbose("Binding popup touchclose event to document"), s.on("touchstart" + b, function (t) {
              y.verbose("Touched away from popup"), y.event.hideGracefully.call(W, t);
            });
          }, clickaway: function clickaway() {
            y.verbose("Binding popup close event to document"), s.on("click" + b, function (t) {
              y.verbose("Clicked away from popup"), y.event.hideGracefully.call(W, t);
            });
          } }, unbind: { events: function events() {
            p.off(b), F.off(S);
          }, close: function close() {
            s.off(b), D.off(b);
          } }, has: { popup: function popup() {
            return a && a.length > 0;
          } }, should: { centerArrow: function centerArrow(t) {
            return !y.is.basic() && t.target.width <= 2 * P.arrowPixelsFromEdge;
          } }, is: { offstage: function offstage(e, o) {
            var n = [];return t.each(e, function (t, e) {
              e < -P.jitter && (y.debug("Position exceeds allowable distance from edge", t, e, o), n.push(t));
            }), n.length > 0;
          }, svg: function svg(t) {
            return y.supports.svg() && t instanceof SVGGraphicsElement;
          }, basic: function basic() {
            return F.hasClass(T.basic);
          }, active: function active() {
            return F.hasClass(T.active);
          }, animating: function animating() {
            return a !== n && a.hasClass(T.animating);
          }, fluid: function fluid() {
            return a !== n && a.hasClass(T.fluid);
          }, visible: function visible() {
            return a !== n && a.hasClass(T.popupVisible);
          }, dropdown: function dropdown() {
            return F.hasClass(T.dropdown);
          }, hidden: function hidden() {
            return !y.is.visible();
          }, rtl: function rtl() {
            return "rtl" == F.css("direction");
          } }, reset: function reset() {
          y.remove.visible(), P.preserve ? t.fn.transition !== n && a.transition("remove transition") : y.removePopup();
        }, setting: function setting(e, o) {
          if (t.isPlainObject(e)) t.extend(!0, P, e);else {
            if (o === n) return P[e];P[e] = o;
          }
        }, internal: function internal(e, o) {
          if (t.isPlainObject(e)) t.extend(!0, y, e);else {
            if (o === n) return y[e];y[e] = o;
          }
        }, debug: function debug() {
          !P.silent && P.debug && (P.performance ? y.performance.log(arguments) : (y.debug = Function.prototype.bind.call(console.info, console, P.name + ":"), y.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !P.silent && P.verbose && P.debug && (P.performance ? y.performance.log(arguments) : (y.verbose = Function.prototype.bind.call(console.info, console, P.name + ":"), y.verbose.apply(console, arguments)));
        }, error: function error() {
          P.silent || (y.error = Function.prototype.bind.call(console.error, console, P.name + ":"), y.error.apply(console, arguments));
        }, performance: { log: function log(t) {
            var e, o;P.performance && (o = (e = new Date().getTime()) - (c || e), c = e, d.push({ Name: t[0], Arguments: [].slice.call(t, 1) || "", Element: W, "Execution Time": o })), clearTimeout(y.performance.timer), y.performance.timer = setTimeout(y.performance.display, 500);
          }, display: function display() {
            var e = P.name + ":",
                o = 0;c = !1, clearTimeout(y.performance.timer), t.each(d, function (t, e) {
              o += e["Execution Time"];
            }), e += " " + o + "ms", u && (e += " '" + u + "'"), (console.group !== n || console.table !== n) && d.length > 0 && (console.groupCollapsed(e), console.table ? console.table(d) : t.each(d, function (t, e) {
              console.log(e.Name + ": " + e["Execution Time"] + "ms");
            }), console.groupEnd()), d = [];
          } }, invoke: function invoke(e, o, i) {
          var a,
              s,
              p,
              l = M;return o = o || h, i = W || i, "string" == typeof e && l !== n && (e = e.split(/[\. ]/), a = e.length - 1, t.each(e, function (o, i) {
            var r = o != a ? i + e[o + 1].charAt(0).toUpperCase() + e[o + 1].slice(1) : e;if (t.isPlainObject(l[r]) && o != a) l = l[r];else {
              if (l[r] !== n) return s = l[r], !1;if (!t.isPlainObject(l[i]) || o == a) return l[i] !== n && (s = l[i], !1);l = l[i];
            }
          })), t.isFunction(s) ? p = s.apply(i, o) : s !== n && (p = s), t.isArray(r) ? r.push(p) : r !== n ? r = [r, p] : p !== n && (r = p), s;
        } }, g ? (M === n && y.initialize(), y.invoke(f)) : (M !== n && M.invoke("destroy"), y.initialize());
    }), r !== n ? r : this;
  }, t.fn.popup.settings = { name: "Popup", silent: !1, debug: !1, verbose: !1, performance: !0, namespace: "popup", observeChanges: !0, onCreate: function onCreate() {}, onRemove: function onRemove() {}, onShow: function onShow() {}, onVisible: function onVisible() {}, onHide: function onHide() {}, onUnplaceable: function onUnplaceable() {}, onHidden: function onHidden() {}, on: "hover", boundary: e, addTouchEvents: !0, position: "top left", variation: "", movePopup: !0, target: !1, popup: !1, inline: !1, preserve: !1, hoverable: !1, content: !1, html: !1, title: !1, closable: !0, hideOnScroll: "auto", exclusive: !1, context: "body", scrollContext: e, prefer: "opposite", lastResort: !1, arrowPixelsFromEdge: 20, delay: { show: 50, hide: 70 }, setFluidWidth: !0, duration: 200, transition: "scale", distanceAway: 0, jitter: 2, offset: 0, maxSearchDepth: 15, error: { invalidPosition: "The position you specified is not a valid position", cannotPlace: "Popup does not fit within the boundaries of the viewport", method: "The method you called is not defined.", noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>", notFound: "The target or popup you specified does not exist on the page" }, metadata: { activator: "activator", content: "content", html: "html", offset: "offset", position: "position", title: "title", variation: "variation" }, className: { active: "active", basic: "basic", animating: "animating", dropdown: "dropdown", fluid: "fluid", loading: "loading", popup: "ui popup", position: "top left center bottom right", visible: "visible", popupVisible: "visible" }, selector: { popup: ".ui.popup" }, templates: { escape: function escape(t) {
        var e = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" };return (/[&<>"'`]/.test(t) ? t.replace(/[&<>"'`]/g, function (t) {
            return e[t];
          }) : t
        );
      }, popup: function popup(e) {
        var o = "",
            i = t.fn.popup.settings.templates.escape;return (typeof e === "undefined" ? "undefined" : _typeof(e)) !== n && (_typeof(e.title) !== n && e.title && (e.title = i(e.title), o += '<div class="header">' + e.title + "</div>"), _typeof(e.content) !== n && e.content && (e.content = i(e.content), o += '<div class="content">' + e.content + "</div>")), o;
      } } };
}(jQuery, window, document);
!function (n, e, i, t) {
  "use strict";
  e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), n.fn.transition = function () {
    var a,
        o = n(this),
        r = o.selector || "",
        s = new Date().getTime(),
        l = [],
        u = arguments,
        d = u[0],
        c = [].slice.call(arguments, 1),
        m = "string" == typeof d;e.requestAnimationFrame || e.mozRequestAnimationFrame || e.webkitRequestAnimationFrame || e.msRequestAnimationFrame;return o.each(function (e) {
      var f,
          p,
          g,
          v,
          b,
          y,
          h,
          w,
          C,
          A = n(this),
          S = this;(C = { initialize: function initialize() {
          f = C.get.settings.apply(S, u), v = f.className, g = f.error, b = f.metadata, w = "." + f.namespace, h = "module-" + f.namespace, p = A.data(h) || C, y = C.get.animationEndEvent(), m && (m = C.invoke(d)), !1 === m && (C.verbose("Converted arguments into settings object", f), f.interval ? C.delay(f.animate) : C.animate(), C.instantiate());
        }, instantiate: function instantiate() {
          C.verbose("Storing instance of module", C), p = C, A.data(h, p);
        }, destroy: function destroy() {
          C.verbose("Destroying previous module for", S), A.removeData(h);
        }, refresh: function refresh() {
          C.verbose("Refreshing display type on next animation"), delete C.displayType;
        }, forceRepaint: function forceRepaint() {
          C.verbose("Forcing element repaint");var n = A.parent(),
              e = A.next();0 === e.length ? A.detach().appendTo(n) : A.detach().insertBefore(e);
        }, repaint: function repaint() {
          C.verbose("Repainting element");S.offsetWidth;
        }, delay: function delay(n) {
          var i,
              a = C.get.animationDirection();a || (a = C.can.transition() ? C.get.direction() : "static"), n = n !== t ? n : f.interval, i = "auto" == f.reverse && a == v.outward || 1 == f.reverse ? (o.length - e) * f.interval : e * f.interval, C.debug("Delaying animation by", i), setTimeout(C.animate, i);
        }, animate: function animate(n) {
          if (f = n || f, !C.is.supported()) return C.error(g.support), !1;if (C.debug("Preparing animation", f.animation), C.is.animating()) {
            if (f.queue) return !f.allowRepeats && C.has.direction() && C.is.occurring() && !0 !== C.queuing ? C.debug("Animation is currently occurring, preventing queueing same animation", f.animation) : C.queue(f.animation), !1;if (!f.allowRepeats && C.is.occurring()) return C.debug("Animation is already occurring, will not execute repeated animation", f.animation), !1;C.debug("New animation started, completing previous early", f.animation), p.complete();
          }C.can.animate() ? C.set.animating(f.animation) : C.error(g.noAnimation, f.animation, S);
        }, reset: function reset() {
          C.debug("Resetting animation to beginning conditions"), C.remove.animationCallbacks(), C.restore.conditions(), C.remove.animating();
        }, queue: function queue(n) {
          C.debug("Queueing animation of", n), C.queuing = !0, A.one(y + ".queue" + w, function () {
            C.queuing = !1, C.repaint(), C.animate.apply(this, f);
          });
        }, complete: function complete(n) {
          C.debug("Animation complete", f.animation), C.remove.completeCallback(), C.remove.failSafe(), C.is.looping() || (C.is.outward() ? (C.verbose("Animation is outward, hiding element"), C.restore.conditions(), C.hide()) : C.is.inward() ? (C.verbose("Animation is outward, showing element"), C.restore.conditions(), C.show()) : (C.verbose("Static animation completed"), C.restore.conditions(), f.onComplete.call(S)));
        }, force: { visible: function visible() {
            var n = A.attr("style"),
                e = C.get.userStyle(),
                i = C.get.displayType(),
                a = e + "display: " + i + " !important;",
                o = A.css("display"),
                r = n === t || "" === n;o !== i ? (C.verbose("Overriding default display to show element", i), A.attr("style", a)) : r && A.removeAttr("style");
          }, hidden: function hidden() {
            var n = A.attr("style"),
                e = A.css("display"),
                i = n === t || "" === n;"none" === e || C.is.hidden() ? i && A.removeAttr("style") : (C.verbose("Overriding default display to hide element"), A.css("display", "none"));
          } }, has: { direction: function direction(e) {
            var i = !1;return "string" == typeof (e = e || f.animation) && (e = e.split(" "), n.each(e, function (n, e) {
              e !== v.inward && e !== v.outward || (i = !0);
            })), i;
          }, inlineDisplay: function inlineDisplay() {
            var e = A.attr("style") || "";return n.isArray(e.match(/display.*?;/, ""));
          } }, set: { animating: function animating(n) {
            var e;C.remove.completeCallback(), n = n || f.animation, e = C.get.animationClass(n), C.save.animation(e), C.force.visible(), C.remove.hidden(), C.remove.direction(), C.start.animation(e);
          }, duration: function duration(n, e) {
            ((e = "number" == typeof (e = e || f.duration) ? e + "ms" : e) || 0 === e) && (C.verbose("Setting animation duration", e), A.css({ "animation-duration": e }));
          }, direction: function direction(n) {
            (n = n || C.get.direction()) == v.inward ? C.set.inward() : C.set.outward();
          }, looping: function looping() {
            C.debug("Transition set to loop"), A.addClass(v.looping);
          }, hidden: function hidden() {
            A.addClass(v.transition).addClass(v.hidden);
          }, inward: function inward() {
            C.debug("Setting direction to inward"), A.removeClass(v.outward).addClass(v.inward);
          }, outward: function outward() {
            C.debug("Setting direction to outward"), A.removeClass(v.inward).addClass(v.outward);
          }, visible: function visible() {
            A.addClass(v.transition).addClass(v.visible);
          } }, start: { animation: function animation(n) {
            n = n || C.get.animationClass(), C.debug("Starting tween", n), A.addClass(n).one(y + ".complete" + w, C.complete), f.useFailSafe && C.add.failSafe(), C.set.duration(f.duration), f.onStart.call(S);
          } }, save: { animation: function animation(n) {
            C.cache || (C.cache = {}), C.cache.animation = n;
          }, displayType: function displayType(n) {
            "none" !== n && A.data(b.displayType, n);
          }, transitionExists: function transitionExists(e, i) {
            n.fn.transition.exists[e] = i, C.verbose("Saving existence of transition", e, i);
          } }, restore: { conditions: function conditions() {
            var n = C.get.currentAnimation();n && (A.removeClass(n), C.verbose("Removing animation class", C.cache)), C.remove.duration();
          } }, add: { failSafe: function failSafe() {
            var n = C.get.duration();C.timer = setTimeout(function () {
              A.triggerHandler(y);
            }, n + f.failSafeDelay), C.verbose("Adding fail safe timer", C.timer);
          } }, remove: { animating: function animating() {
            A.removeClass(v.animating);
          }, animationCallbacks: function animationCallbacks() {
            C.remove.queueCallback(), C.remove.completeCallback();
          }, queueCallback: function queueCallback() {
            A.off(".queue" + w);
          }, completeCallback: function completeCallback() {
            A.off(".complete" + w);
          }, display: function display() {
            A.css("display", "");
          }, direction: function direction() {
            A.removeClass(v.inward).removeClass(v.outward);
          }, duration: function duration() {
            A.css("animation-duration", "");
          }, failSafe: function failSafe() {
            C.verbose("Removing fail safe timer", C.timer), C.timer && clearTimeout(C.timer);
          }, hidden: function hidden() {
            A.removeClass(v.hidden);
          }, visible: function visible() {
            A.removeClass(v.visible);
          }, looping: function looping() {
            C.debug("Transitions are no longer looping"), C.is.looping() && (C.reset(), A.removeClass(v.looping));
          }, transition: function transition() {
            A.removeClass(v.visible).removeClass(v.hidden);
          } }, get: { settings: function settings(e, i, t) {
            return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? n.extend(!0, {}, n.fn.transition.settings, e) : "function" == typeof t ? n.extend({}, n.fn.transition.settings, { animation: e, onComplete: t, duration: i }) : "string" == typeof i || "number" == typeof i ? n.extend({}, n.fn.transition.settings, { animation: e, duration: i }) : "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) ? n.extend({}, n.fn.transition.settings, i, { animation: e }) : "function" == typeof i ? n.extend({}, n.fn.transition.settings, { animation: e, onComplete: i }) : n.extend({}, n.fn.transition.settings, { animation: e });
          }, animationClass: function animationClass(n) {
            var e = n || f.animation,
                i = C.can.transition() && !C.has.direction() ? C.get.direction() + " " : "";return v.animating + " " + v.transition + " " + i + e;
          }, currentAnimation: function currentAnimation() {
            return !(!C.cache || C.cache.animation === t) && C.cache.animation;
          }, currentDirection: function currentDirection() {
            return C.is.inward() ? v.inward : v.outward;
          }, direction: function direction() {
            return C.is.hidden() || !C.is.visible() ? v.inward : v.outward;
          }, animationDirection: function animationDirection(e) {
            var i;return "string" == typeof (e = e || f.animation) && (e = e.split(" "), n.each(e, function (n, e) {
              e === v.inward ? i = v.inward : e === v.outward && (i = v.outward);
            })), i || !1;
          }, duration: function duration(n) {
            return !1 === (n = n || f.duration) && (n = A.css("animation-duration") || 0), "string" == typeof n ? n.indexOf("ms") > -1 ? parseFloat(n) : 1e3 * parseFloat(n) : n;
          }, displayType: function displayType(n) {
            return n = n === t || n, f.displayType ? f.displayType : (n && A.data(b.displayType) === t && C.can.transition(!0), A.data(b.displayType));
          }, userStyle: function userStyle(n) {
            return (n = n || A.attr("style") || "").replace(/display.*?;/, "");
          }, transitionExists: function transitionExists(e) {
            return n.fn.transition.exists[e];
          }, animationStartEvent: function animationStartEvent() {
            var n,
                e = i.createElement("div"),
                a = { animation: "animationstart", OAnimation: "oAnimationStart", MozAnimation: "mozAnimationStart", WebkitAnimation: "webkitAnimationStart" };for (n in a) {
              if (e.style[n] !== t) return a[n];
            }return !1;
          }, animationEndEvent: function animationEndEvent() {
            var n,
                e = i.createElement("div"),
                a = { animation: "animationend", OAnimation: "oAnimationEnd", MozAnimation: "mozAnimationEnd", WebkitAnimation: "webkitAnimationEnd" };for (n in a) {
              if (e.style[n] !== t) return a[n];
            }return !1;
          } }, can: { transition: function transition(e) {
            var i,
                a,
                o,
                r,
                s,
                l,
                u = f.animation,
                d = C.get.transitionExists(u),
                c = C.get.displayType(!1);if (d === t || e) {
              if (C.verbose("Determining whether animation exists"), i = A.attr("class"), a = A.prop("tagName"), r = (o = n("<" + a + " />").addClass(i).insertAfter(A)).addClass(u).removeClass(v.inward).removeClass(v.outward).addClass(v.animating).addClass(v.transition).css("animationName"), s = o.addClass(v.inward).css("animationName"), c || (c = o.attr("class", i).removeAttr("style").removeClass(v.hidden).removeClass(v.visible).show().css("display"), C.verbose("Determining final display state", c), C.save.displayType(c)), o.remove(), r != s) C.debug("Direction exists for animation", u), l = !0;else {
                if ("none" == r || !r) return void C.debug("No animation defined in css", u);C.debug("Static animation found", u, c), l = !1;
              }C.save.transitionExists(u, l);
            }return d !== t ? d : l;
          }, animate: function animate() {
            return C.can.transition() !== t;
          } }, is: { animating: function animating() {
            return A.hasClass(v.animating);
          }, inward: function inward() {
            return A.hasClass(v.inward);
          }, outward: function outward() {
            return A.hasClass(v.outward);
          }, looping: function looping() {
            return A.hasClass(v.looping);
          }, occurring: function occurring(n) {
            return n = "." + (n = n || f.animation).replace(" ", "."), A.filter(n).length > 0;
          }, visible: function visible() {
            return A.is(":visible");
          }, hidden: function hidden() {
            return "hidden" === A.css("visibility");
          }, supported: function supported() {
            return !1 !== y;
          } }, hide: function hide() {
          C.verbose("Hiding element"), C.is.animating() && C.reset(), S.blur(), C.remove.display(), C.remove.visible(), C.set.hidden(), C.force.hidden(), f.onHide.call(S), f.onComplete.call(S);
        }, show: function show(n) {
          C.verbose("Showing element", n), C.remove.hidden(), C.set.visible(), C.force.visible(), f.onShow.call(S), f.onComplete.call(S);
        }, toggle: function toggle() {
          C.is.visible() ? C.hide() : C.show();
        }, stop: function stop() {
          C.debug("Stopping current animation"), A.triggerHandler(y);
        }, stopAll: function stopAll() {
          C.debug("Stopping all animation"), C.remove.queueCallback(), A.triggerHandler(y);
        }, clear: { queue: function queue() {
            C.debug("Clearing animation queue"), C.remove.queueCallback();
          } }, enable: function enable() {
          C.verbose("Starting animation"), A.removeClass(v.disabled);
        }, disable: function disable() {
          C.debug("Stopping animation"), A.addClass(v.disabled);
        }, setting: function setting(e, i) {
          if (C.debug("Changing setting", e, i), n.isPlainObject(e)) n.extend(!0, f, e);else {
            if (i === t) return f[e];n.isPlainObject(f[e]) ? n.extend(!0, f[e], i) : f[e] = i;
          }
        }, internal: function internal(e, i) {
          if (n.isPlainObject(e)) n.extend(!0, C, e);else {
            if (i === t) return C[e];C[e] = i;
          }
        }, debug: function debug() {
          !f.silent && f.debug && (f.performance ? C.performance.log(arguments) : (C.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), C.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !f.silent && f.verbose && f.debug && (f.performance ? C.performance.log(arguments) : (C.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), C.verbose.apply(console, arguments)));
        }, error: function error() {
          f.silent || (C.error = Function.prototype.bind.call(console.error, console, f.name + ":"), C.error.apply(console, arguments));
        }, performance: { log: function log(n) {
            var e, i;f.performance && (i = (e = new Date().getTime()) - (s || e), s = e, l.push({ Name: n[0], Arguments: [].slice.call(n, 1) || "", Element: S, "Execution Time": i })), clearTimeout(C.performance.timer), C.performance.timer = setTimeout(C.performance.display, 500);
          }, display: function display() {
            var e = f.name + ":",
                i = 0;s = !1, clearTimeout(C.performance.timer), n.each(l, function (n, e) {
              i += e["Execution Time"];
            }), e += " " + i + "ms", r && (e += " '" + r + "'"), o.length > 1 && (e += " (" + o.length + ")"), (console.group !== t || console.table !== t) && l.length > 0 && (console.groupCollapsed(e), console.table ? console.table(l) : n.each(l, function (n, e) {
              console.log(e.Name + ": " + e["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function invoke(e, i, o) {
          var r,
              s,
              l,
              u = p;return i = i || c, o = S || o, "string" == typeof e && u !== t && (e = e.split(/[\. ]/), r = e.length - 1, n.each(e, function (i, a) {
            var o = i != r ? a + e[i + 1].charAt(0).toUpperCase() + e[i + 1].slice(1) : e;if (n.isPlainObject(u[o]) && i != r) u = u[o];else {
              if (u[o] !== t) return s = u[o], !1;if (!n.isPlainObject(u[a]) || i == r) return u[a] !== t && (s = u[a], !1);u = u[a];
            }
          })), n.isFunction(s) ? l = s.apply(o, i) : s !== t && (l = s), n.isArray(a) ? a.push(l) : a !== t ? a = [a, l] : l !== t && (a = l), s !== t && s;
        } }).initialize();
    }), a !== t ? a : this;
  }, n.fn.transition.exists = {}, n.fn.transition.settings = { name: "Transition", silent: !1, debug: !1, verbose: !1, performance: !0, namespace: "transition", interval: 0, reverse: "auto", onStart: function onStart() {}, onComplete: function onComplete() {}, onShow: function onShow() {}, onHide: function onHide() {}, useFailSafe: !0, failSafeDelay: 100, allowRepeats: !1, displayType: !1, animation: "fade", duration: !1, queue: !0, metadata: { displayType: "display" }, className: { animating: "animating", disabled: "disabled", hidden: "hidden", inward: "in", loading: "loading", looping: "looping", outward: "out", transition: "transition", visible: "visible" }, error: { noAnimation: "Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.", repeated: "That animation is already occurring, cancelling repeated animation", method: "The method you called is not defined", support: "This browser does not support CSS animations" } };
}(jQuery, window, document);
// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
})(function ($) {
  var slice = Array.prototype.slice; // save ref to original slice()
  var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
    topSpacing: 0,
    bottomSpacing: 0,
    className: 'is-sticky',
    wrapperClassName: 'sticky-wrapper',
    center: false,
    getWidthFrom: '',
    widthFromWrapper: true, // works only when .getWidthFrom is empty
    responsiveWidth: false,
    zIndex: 'inherit'
  },
      $window = $(window),
      $document = $(document),
      sticked = [],
      windowHeight = $window.height(),
      scroller = function scroller() {
    var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = scrollTop > dwh ? dwh - scrollTop : 0;

    for (var i = 0, l = sticked.length; i < l; i++) {
      var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

      //update height in case of dynamic content
      s.stickyWrapper.css('height', s.stickyElement.outerHeight());

      if (scrollTop <= etse) {
        if (s.currentTop !== null) {
          s.stickyElement.css({
            'width': '',
            'position': '',
            'top': '',
            'z-index': ''
          });
          s.stickyElement.parent().removeClass(s.className);
          s.stickyElement.trigger('sticky-end', [s]);
          s.currentTop = null;
        }
      } else {
        var newTop = documentHeight - s.stickyElement.outerHeight() - s.topSpacing - s.bottomSpacing - scrollTop - extra;
        if (newTop < 0) {
          newTop = newTop + s.topSpacing;
        } else {
          newTop = s.topSpacing;
        }
        if (s.currentTop !== newTop) {
          var newWidth;
          if (s.getWidthFrom) {
            padding = s.stickyElement.innerWidth() - s.stickyElement.width();
            newWidth = $(s.getWidthFrom).width() - padding || null;
          } else if (s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
          }
          if (newWidth == null) {
            newWidth = s.stickyElement.width();
          }
          s.stickyElement.css('width', newWidth).css('position', 'fixed').css('top', newTop).css('z-index', s.zIndex);

          s.stickyElement.parent().addClass(s.className);

          if (s.currentTop === null) {
            s.stickyElement.trigger('sticky-start', [s]);
          } else {
            // sticky is started but it have to be repositioned
            s.stickyElement.trigger('sticky-update', [s]);
          }

          if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
            // just reached bottom || just started to stick but bottom is already reached
            s.stickyElement.trigger('sticky-bottom-reached', [s]);
          } else if (s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
            // sticky is started && sticked at topSpacing && overflowing from top just finished
            s.stickyElement.trigger('sticky-bottom-unreached', [s]);
          }

          s.currentTop = newTop;
        }

        // Check if sticky has reached end of container and stop sticking
        var stickyWrapperContainer = s.stickyWrapper.parent();
        var unstick = s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight() && s.stickyElement.offset().top <= s.topSpacing;

        if (unstick) {
          s.stickyElement.css('position', 'absolute').css('top', '').css('bottom', 0).css('z-index', '');
        } else {
          s.stickyElement.css('position', 'fixed').css('top', newTop).css('bottom', '').css('z-index', s.zIndex);
        }
      }
    }
  },
      resizer = function resizer() {
    windowHeight = $window.height();

    for (var i = 0, l = sticked.length; i < l; i++) {
      var s = sticked[i];
      var newWidth = null;
      if (s.getWidthFrom) {
        if (s.responsiveWidth) {
          newWidth = $(s.getWidthFrom).width();
        }
      } else if (s.widthFromWrapper) {
        newWidth = s.stickyWrapper.width();
      }
      if (newWidth != null) {
        s.stickyElement.css('width', newWidth);
      }
    }
  },
      methods = {
    init: function init(options) {
      return this.each(function () {
        var o = $.extend({}, defaults, options);
        var stickyElement = $(this);

        var stickyId = stickyElement.attr('id');
        var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
        var wrapper = $('<div></div>').attr('id', wrapperId).addClass(o.wrapperClassName);

        stickyElement.wrapAll(function () {
          if ($(this).parent("#" + wrapperId).length == 0) {
            return wrapper;
          }
        });

        var stickyWrapper = stickyElement.parent();

        if (o.center) {
          stickyWrapper.css({ width: stickyElement.outerWidth(), marginLeft: "auto", marginRight: "auto" });
        }

        if (stickyElement.css("float") === "right") {
          stickyElement.css({ "float": "none" }).parent().css({ "float": "right" });
        }

        o.stickyElement = stickyElement;
        o.stickyWrapper = stickyWrapper;
        o.currentTop = null;

        sticked.push(o);

        methods.setWrapperHeight(this);
        methods.setupChangeListeners(this);
      });
    },

    setWrapperHeight: function setWrapperHeight(stickyElement) {
      var element = $(stickyElement);
      var stickyWrapper = element.parent();
      if (stickyWrapper) {
        stickyWrapper.css('height', element.outerHeight());
      }
    },

    setupChangeListeners: function setupChangeListeners(stickyElement) {
      if (window.MutationObserver) {
        var mutationObserver = new window.MutationObserver(function (mutations) {
          if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
            methods.setWrapperHeight(stickyElement);
          }
        });
        mutationObserver.observe(stickyElement, { subtree: true, childList: true });
      } else {
        if (window.addEventListener) {
          stickyElement.addEventListener('DOMNodeInserted', function () {
            methods.setWrapperHeight(stickyElement);
          }, false);
          stickyElement.addEventListener('DOMNodeRemoved', function () {
            methods.setWrapperHeight(stickyElement);
          }, false);
        } else if (window.attachEvent) {
          stickyElement.attachEvent('onDOMNodeInserted', function () {
            methods.setWrapperHeight(stickyElement);
          });
          stickyElement.attachEvent('onDOMNodeRemoved', function () {
            methods.setWrapperHeight(stickyElement);
          });
        }
      }
    },
    update: scroller,
    unstick: function unstick(options) {
      return this.each(function () {
        var that = this;
        var unstickyElement = $(that);

        var removeIdx = -1;
        var i = sticked.length;
        while (i-- > 0) {
          if (sticked[i].stickyElement.get(0) === that) {
            splice.call(sticked, i, 1);
            removeIdx = i;
          }
        }
        if (removeIdx !== -1) {
          unstickyElement.unwrap();
          unstickyElement.css({
            'width': '',
            'position': '',
            'top': '',
            'float': '',
            'z-index': ''
          });
        }
      });
    }
  };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if ((typeof method === "undefined" ? "undefined" : _typeof(method)) === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if ((typeof method === "undefined" ? "undefined" : _typeof(method)) === 'object' || !method) {
      return methods.unstick.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function () {
    setTimeout(scroller, 0);
  });
});

/*! nouislider - 11.1.0 - 2018-04-02 11:18:13 */

!function (a) {
  "function" == typeof define && define.amd ? define([], a) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = a() : window.noUiSlider = a();
}(function () {
  "use strict";
  function a(a) {
    return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && "function" == typeof a.to && "function" == typeof a.from;
  }function b(a) {
    a.parentElement.removeChild(a);
  }function c(a) {
    return null !== a && void 0 !== a;
  }function d(a) {
    a.preventDefault();
  }function e(a) {
    return a.filter(function (a) {
      return !this[a] && (this[a] = !0);
    }, {});
  }function f(a, b) {
    return Math.round(a / b) * b;
  }function g(a, b) {
    var c = a.getBoundingClientRect(),
        d = a.ownerDocument,
        e = d.documentElement,
        f = p(d);return (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (f.x = 0), b ? c.top + f.y - e.clientTop : c.left + f.x - e.clientLeft
    );
  }function h(a) {
    return "number" == typeof a && !isNaN(a) && isFinite(a);
  }function i(a, b, c) {
    c > 0 && (m(a, b), setTimeout(function () {
      n(a, b);
    }, c));
  }function j(a) {
    return Math.max(Math.min(a, 100), 0);
  }function k(a) {
    return Array.isArray(a) ? a : [a];
  }function l(a) {
    a = String(a);var b = a.split(".");return b.length > 1 ? b[1].length : 0;
  }function m(a, b) {
    a.classList ? a.classList.add(b) : a.className += " " + b;
  }function n(a, b) {
    a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"), " ");
  }function o(a, b) {
    return a.classList ? a.classList.contains(b) : new RegExp("\\b" + b + "\\b").test(a.className);
  }function p(a) {
    var b = void 0 !== window.pageXOffset,
        c = "CSS1Compat" === (a.compatMode || "");return { x: b ? window.pageXOffset : c ? a.documentElement.scrollLeft : a.body.scrollLeft, y: b ? window.pageYOffset : c ? a.documentElement.scrollTop : a.body.scrollTop };
  }function q() {
    return window.navigator.pointerEnabled ? { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" } : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" };
  }function r() {
    var a = !1;try {
      var b = Object.defineProperty({}, "passive", { get: function get() {
          a = !0;
        } });window.addEventListener("test", null, b);
    } catch (a) {}return a;
  }function s() {
    return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
  }function t(a, b) {
    return 100 / (b - a);
  }function u(a, b) {
    return 100 * b / (a[1] - a[0]);
  }function v(a, b) {
    return u(a, a[0] < 0 ? b + Math.abs(a[0]) : b - a[0]);
  }function w(a, b) {
    return b * (a[1] - a[0]) / 100 + a[0];
  }function x(a, b) {
    for (var c = 1; a >= b[c];) {
      c += 1;
    }return c;
  }function y(a, b, c) {
    if (c >= a.slice(-1)[0]) return 100;var d = x(c, a),
        e = a[d - 1],
        f = a[d],
        g = b[d - 1],
        h = b[d];return g + v([e, f], c) / t(g, h);
  }function z(a, b, c) {
    if (c >= 100) return a.slice(-1)[0];var d = x(c, b),
        e = a[d - 1],
        f = a[d],
        g = b[d - 1];return w([e, f], (c - g) * t(g, b[d]));
  }function A(a, b, c, d) {
    if (100 === d) return d;var e = x(d, a),
        g = a[e - 1],
        h = a[e];return c ? d - g > (h - g) / 2 ? h : g : b[e - 1] ? a[e - 1] + f(d - a[e - 1], b[e - 1]) : d;
  }function B(a, b, c) {
    var d;if ("number" == typeof b && (b = [b]), !Array.isArray(b)) throw new Error("noUiSlider (" + $ + "): 'range' contains invalid value.");if (d = "min" === a ? 0 : "max" === a ? 100 : parseFloat(a), !h(d) || !h(b[0])) throw new Error("noUiSlider (" + $ + "): 'range' value isn't numeric.");c.xPct.push(d), c.xVal.push(b[0]), d ? c.xSteps.push(!isNaN(b[1]) && b[1]) : isNaN(b[1]) || (c.xSteps[0] = b[1]), c.xHighestCompleteStep.push(0);
  }function C(a, b, c) {
    if (!b) return !0;c.xSteps[a] = u([c.xVal[a], c.xVal[a + 1]], b) / t(c.xPct[a], c.xPct[a + 1]);var d = (c.xVal[a + 1] - c.xVal[a]) / c.xNumSteps[a],
        e = Math.ceil(Number(d.toFixed(3)) - 1),
        f = c.xVal[a] + c.xNumSteps[a] * e;c.xHighestCompleteStep[a] = f;
  }function D(a, b, c) {
    this.xPct = [], this.xVal = [], this.xSteps = [c || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = b;var d,
        e = [];for (d in a) {
      a.hasOwnProperty(d) && e.push([a[d], d]);
    }for (e.length && "object" == _typeof(e[0][0]) ? e.sort(function (a, b) {
      return a[0][0] - b[0][0];
    }) : e.sort(function (a, b) {
      return a[0] - b[0];
    }), d = 0; d < e.length; d++) {
      B(e[d][1], e[d][0], this);
    }for (this.xNumSteps = this.xSteps.slice(0), d = 0; d < this.xNumSteps.length; d++) {
      C(d, this.xNumSteps[d], this);
    }
  }function E(b) {
    if (a(b)) return !0;throw new Error("noUiSlider (" + $ + "): 'format' requires 'to' and 'from' methods.");
  }function F(a, b) {
    if (!h(b)) throw new Error("noUiSlider (" + $ + "): 'step' is not numeric.");a.singleStep = b;
  }function G(a, b) {
    if ("object" != (typeof b === "undefined" ? "undefined" : _typeof(b)) || Array.isArray(b)) throw new Error("noUiSlider (" + $ + "): 'range' is not an object.");if (void 0 === b.min || void 0 === b.max) throw new Error("noUiSlider (" + $ + "): Missing 'min' or 'max' in 'range'.");if (b.min === b.max) throw new Error("noUiSlider (" + $ + "): 'range' 'min' and 'max' cannot be equal.");a.spectrum = new D(b, a.snap, a.singleStep);
  }function H(a, b) {
    if (b = k(b), !Array.isArray(b) || !b.length) throw new Error("noUiSlider (" + $ + "): 'start' option is incorrect.");a.handles = b.length, a.start = b;
  }function I(a, b) {
    if (a.snap = b, "boolean" != typeof b) throw new Error("noUiSlider (" + $ + "): 'snap' option must be a boolean.");
  }function J(a, b) {
    if (a.animate = b, "boolean" != typeof b) throw new Error("noUiSlider (" + $ + "): 'animate' option must be a boolean.");
  }function K(a, b) {
    if (a.animationDuration = b, "number" != typeof b) throw new Error("noUiSlider (" + $ + "): 'animationDuration' option must be a number.");
  }function L(a, b) {
    var c,
        d = [!1];if ("lower" === b ? b = [!0, !1] : "upper" === b && (b = [!1, !0]), !0 === b || !1 === b) {
      for (c = 1; c < a.handles; c++) {
        d.push(b);
      }d.push(!1);
    } else {
      if (!Array.isArray(b) || !b.length || b.length !== a.handles + 1) throw new Error("noUiSlider (" + $ + "): 'connect' option doesn't match handle count.");d = b;
    }a.connect = d;
  }function M(a, b) {
    switch (b) {case "horizontal":
        a.ort = 0;break;case "vertical":
        a.ort = 1;break;default:
        throw new Error("noUiSlider (" + $ + "): 'orientation' option is invalid.");}
  }function N(a, b) {
    if (!h(b)) throw new Error("noUiSlider (" + $ + "): 'margin' option must be numeric.");if (0 !== b && (a.margin = a.spectrum.getMargin(b), !a.margin)) throw new Error("noUiSlider (" + $ + "): 'margin' option is only supported on linear sliders.");
  }function O(a, b) {
    if (!h(b)) throw new Error("noUiSlider (" + $ + "): 'limit' option must be numeric.");if (a.limit = a.spectrum.getMargin(b), !a.limit || a.handles < 2) throw new Error("noUiSlider (" + $ + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
  }function P(a, b) {
    if (!h(b) && !Array.isArray(b)) throw new Error("noUiSlider (" + $ + "): 'padding' option must be numeric or array of exactly 2 numbers.");if (Array.isArray(b) && 2 !== b.length && !h(b[0]) && !h(b[1])) throw new Error("noUiSlider (" + $ + "): 'padding' option must be numeric or array of exactly 2 numbers.");if (0 !== b) {
      if (Array.isArray(b) || (b = [b, b]), a.padding = [a.spectrum.getMargin(b[0]), a.spectrum.getMargin(b[1])], !1 === a.padding[0] || !1 === a.padding[1]) throw new Error("noUiSlider (" + $ + "): 'padding' option is only supported on linear sliders.");if (a.padding[0] < 0 || a.padding[1] < 0) throw new Error("noUiSlider (" + $ + "): 'padding' option must be a positive number(s).");if (a.padding[0] + a.padding[1] >= 100) throw new Error("noUiSlider (" + $ + "): 'padding' option must not exceed 100% of the range.");
    }
  }function Q(a, b) {
    switch (b) {case "ltr":
        a.dir = 0;break;case "rtl":
        a.dir = 1;break;default:
        throw new Error("noUiSlider (" + $ + "): 'direction' option was not recognized.");}
  }function R(a, b) {
    if ("string" != typeof b) throw new Error("noUiSlider (" + $ + "): 'behaviour' must be a string containing options.");var c = b.indexOf("tap") >= 0,
        d = b.indexOf("drag") >= 0,
        e = b.indexOf("fixed") >= 0,
        f = b.indexOf("snap") >= 0,
        g = b.indexOf("hover") >= 0;if (e) {
      if (2 !== a.handles) throw new Error("noUiSlider (" + $ + "): 'fixed' behaviour must be used with 2 handles");N(a, a.start[1] - a.start[0]);
    }a.events = { tap: c || f, drag: d, fixed: e, snap: f, hover: g };
  }function S(a, b) {
    if (!1 !== b) if (!0 === b) {
      a.tooltips = [];for (var c = 0; c < a.handles; c++) {
        a.tooltips.push(!0);
      }
    } else {
      if (a.tooltips = k(b), a.tooltips.length !== a.handles) throw new Error("noUiSlider (" + $ + "): must pass a formatter for all handles.");a.tooltips.forEach(function (a) {
        if ("boolean" != typeof a && ("object" != (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" != typeof a.to)) throw new Error("noUiSlider (" + $ + "): 'tooltips' must be passed a formatter or 'false'.");
      });
    }
  }function T(a, b) {
    a.ariaFormat = b, E(b);
  }function U(a, b) {
    a.format = b, E(b);
  }function V(a, b) {
    if ("string" != typeof b && !1 !== b) throw new Error("noUiSlider (" + $ + "): 'cssPrefix' must be a string or `false`.");a.cssPrefix = b;
  }function W(a, b) {
    if ("object" != (typeof b === "undefined" ? "undefined" : _typeof(b))) throw new Error("noUiSlider (" + $ + "): 'cssClasses' must be an object.");if ("string" == typeof a.cssPrefix) {
      a.cssClasses = {};for (var c in b) {
        b.hasOwnProperty(c) && (a.cssClasses[c] = a.cssPrefix + b[c]);
      }
    } else a.cssClasses = b;
  }function X(a) {
    var b = { margin: 0, limit: 0, padding: 0, animate: !0, animationDuration: 300, ariaFormat: _, format: _ },
        d = { step: { r: !1, t: F }, start: { r: !0, t: H }, connect: { r: !0, t: L }, direction: { r: !0, t: Q }, snap: { r: !1, t: I }, animate: { r: !1, t: J }, animationDuration: { r: !1, t: K }, range: { r: !0, t: G }, orientation: { r: !1, t: M }, margin: { r: !1, t: N }, limit: { r: !1, t: O }, padding: { r: !1, t: P }, behaviour: { r: !0, t: R }, ariaFormat: { r: !1, t: T }, format: { r: !1, t: U }, tooltips: { r: !1, t: S }, cssPrefix: { r: !0, t: V }, cssClasses: { r: !0, t: W } },
        e = { connect: !1, direction: "ltr", behaviour: "tap", orientation: "horizontal", cssPrefix: "noUi-", cssClasses: { target: "target", base: "base", origin: "origin", handle: "handle", handleLower: "handle-lower", handleUpper: "handle-upper", horizontal: "horizontal", vertical: "vertical", background: "background", connect: "connect", connects: "connects", ltr: "ltr", rtl: "rtl", draggable: "draggable", drag: "state-drag", tap: "state-tap", active: "active", tooltip: "tooltip", pips: "pips", pipsHorizontal: "pips-horizontal", pipsVertical: "pips-vertical", marker: "marker", markerHorizontal: "marker-horizontal", markerVertical: "marker-vertical", markerNormal: "marker-normal", markerLarge: "marker-large", markerSub: "marker-sub", value: "value", valueHorizontal: "value-horizontal", valueVertical: "value-vertical", valueNormal: "value-normal", valueLarge: "value-large", valueSub: "value-sub" } };a.format && !a.ariaFormat && (a.ariaFormat = a.format), Object.keys(d).forEach(function (f) {
      if (!c(a[f]) && void 0 === e[f]) {
        if (d[f].r) throw new Error("noUiSlider (" + $ + "): '" + f + "' is required.");return !0;
      }d[f].t(b, c(a[f]) ? a[f] : e[f]);
    }), b.pips = a.pips;var f = document.createElement("div"),
        g = void 0 !== f.style.msTransform,
        h = void 0 !== f.style.transform;b.transformRule = h ? "transform" : g ? "msTransform" : "webkitTransform";var i = [["left", "top"], ["right", "bottom"]];return b.style = i[b.dir][b.ort], b;
  }function Y(a, c, f) {
    function h(a, b) {
      var c = ya.createElement("div");return b && m(c, b), a.appendChild(c), c;
    }function l(a, b) {
      var d = h(a, c.cssClasses.origin),
          e = h(d, c.cssClasses.handle);return e.setAttribute("data-handle", b), e.setAttribute("tabindex", "0"), e.setAttribute("role", "slider"), e.setAttribute("aria-orientation", c.ort ? "vertical" : "horizontal"), 0 === b ? m(e, c.cssClasses.handleLower) : b === c.handles - 1 && m(e, c.cssClasses.handleUpper), d;
    }function t(a, b) {
      return !!b && h(a, c.cssClasses.connect);
    }function u(a, b) {
      var d = h(b, c.cssClasses.connects);ka = [], la = [], la.push(t(d, a[0]));for (var e = 0; e < c.handles; e++) {
        ka.push(l(b, e)), ta[e] = e, la.push(t(d, a[e + 1]));
      }
    }function v(a) {
      m(a, c.cssClasses.target), 0 === c.dir ? m(a, c.cssClasses.ltr) : m(a, c.cssClasses.rtl), 0 === c.ort ? m(a, c.cssClasses.horizontal) : m(a, c.cssClasses.vertical), ja = h(a, c.cssClasses.base);
    }function w(a, b) {
      return !!c.tooltips[b] && h(a.firstChild, c.cssClasses.tooltip);
    }function x() {
      var a = ka.map(w);Q("update", function (b, d, e) {
        if (a[d]) {
          var f = b[d];!0 !== c.tooltips[d] && (f = c.tooltips[d].to(e[d])), a[d].innerHTML = f;
        }
      });
    }function y() {
      Q("update", function (a, b, d, e, f) {
        ta.forEach(function (a) {
          var b = ka[a],
              e = U(sa, a, 0, !0, !0, !0),
              g = U(sa, a, 100, !0, !0, !0),
              h = f[a],
              i = c.ariaFormat.to(d[a]);b.children[0].setAttribute("aria-valuemin", e.toFixed(1)), b.children[0].setAttribute("aria-valuemax", g.toFixed(1)), b.children[0].setAttribute("aria-valuenow", h.toFixed(1)), b.children[0].setAttribute("aria-valuetext", i);
        });
      });
    }function z(a, b, c) {
      if ("range" === a || "steps" === a) return va.xVal;if ("count" === a) {
        if (b < 2) throw new Error("noUiSlider (" + $ + "): 'values' (>= 2) required for mode 'count'.");var d = b - 1,
            e = 100 / d;for (b = []; d--;) {
          b[d] = d * e;
        }b.push(100), a = "positions";
      }return "positions" === a ? b.map(function (a) {
        return va.fromStepping(c ? va.getStep(a) : a);
      }) : "values" === a ? c ? b.map(function (a) {
        return va.fromStepping(va.getStep(va.toStepping(a)));
      }) : b : void 0;
    }function A(a, b, c) {
      function d(a, b) {
        return (a + b).toFixed(7) / 1;
      }var f = {},
          g = va.xVal[0],
          h = va.xVal[va.xVal.length - 1],
          i = !1,
          j = !1,
          k = 0;return c = e(c.slice().sort(function (a, b) {
        return a - b;
      })), c[0] !== g && (c.unshift(g), i = !0), c[c.length - 1] !== h && (c.push(h), j = !0), c.forEach(function (e, g) {
        var h,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = e,
            v = c[g + 1];if ("steps" === b && (h = va.xNumSteps[g]), h || (h = v - u), !1 !== u && void 0 !== v) for (h = Math.max(h, 1e-7), l = u; l <= v; l = d(l, h)) {
          for (n = va.toStepping(l), o = n - k, r = o / a, s = Math.round(r), t = o / s, m = 1; m <= s; m += 1) {
            p = k + m * t, f[p.toFixed(5)] = ["x", 0];
          }q = c.indexOf(l) > -1 ? 1 : "steps" === b ? 2 : 0, !g && i && (q = 0), l === v && j || (f[n.toFixed(5)] = [l, q]), k = n;
        }
      }), f;
    }function B(a, b, d) {
      function e(a, b) {
        var d = b === c.cssClasses.value,
            e = d ? k : l,
            f = d ? i : j;return b + " " + e[c.ort] + " " + f[a];
      }function f(a, f) {
        f[1] = f[1] && b ? b(f[0], f[1]) : f[1];var i = h(g, !1);i.className = e(f[1], c.cssClasses.marker), i.style[c.style] = a + "%", f[1] && (i = h(g, !1), i.className = e(f[1], c.cssClasses.value), i.setAttribute("data-value", f[0]), i.style[c.style] = a + "%", i.innerText = d.to(f[0]));
      }var g = ya.createElement("div"),
          i = [c.cssClasses.valueNormal, c.cssClasses.valueLarge, c.cssClasses.valueSub],
          j = [c.cssClasses.markerNormal, c.cssClasses.markerLarge, c.cssClasses.markerSub],
          k = [c.cssClasses.valueHorizontal, c.cssClasses.valueVertical],
          l = [c.cssClasses.markerHorizontal, c.cssClasses.markerVertical];return m(g, c.cssClasses.pips), m(g, 0 === c.ort ? c.cssClasses.pipsHorizontal : c.cssClasses.pipsVertical), Object.keys(a).forEach(function (b) {
        f(b, a[b]);
      }), g;
    }function C() {
      na && (b(na), na = null);
    }function D(a) {
      C();var b = a.mode,
          c = a.density || 1,
          d = a.filter || !1,
          e = a.values || !1,
          f = a.stepped || !1,
          g = z(b, e, f),
          h = A(c, b, g),
          i = a.format || { to: Math.round };return na = ra.appendChild(B(h, d, i));
    }function E() {
      var a = ja.getBoundingClientRect(),
          b = "offset" + ["Width", "Height"][c.ort];return 0 === c.ort ? a.width || ja[b] : a.height || ja[b];
    }function F(a, b, d, e) {
      var f = function f(_f) {
        return !!(_f = G(_f, e.pageOffset, e.target || b)) && !(ra.hasAttribute("disabled") && !e.doNotReject) && !(o(ra, c.cssClasses.tap) && !e.doNotReject) && !(a === oa.start && void 0 !== _f.buttons && _f.buttons > 1) && (!e.hover || !_f.buttons) && (qa || _f.preventDefault(), _f.calcPoint = _f.points[c.ort], void d(_f, e));
      },
          g = [];return a.split(" ").forEach(function (a) {
        b.addEventListener(a, f, !!qa && { passive: !0 }), g.push([a, f]);
      }), g;
    }function G(a, b, c) {
      var d,
          e,
          f = 0 === a.type.indexOf("touch"),
          g = 0 === a.type.indexOf("mouse"),
          h = 0 === a.type.indexOf("pointer");if (0 === a.type.indexOf("MSPointer") && (h = !0), f) {
        var i = function i(a) {
          return a.target === c || c.contains(a.target);
        };if ("touchstart" === a.type) {
          var j = Array.prototype.filter.call(a.touches, i);if (j.length > 1) return !1;d = j[0].pageX, e = j[0].pageY;
        } else {
          var k = Array.prototype.find.call(a.changedTouches, i);if (!k) return !1;d = k.pageX, e = k.pageY;
        }
      }return b = b || p(ya), (g || h) && (d = a.clientX + b.x, e = a.clientY + b.y), a.pageOffset = b, a.points = [d, e], a.cursor = g || h, a;
    }function H(a) {
      var b = a - g(ja, c.ort),
          d = 100 * b / E();return d = j(d), c.dir ? 100 - d : d;
    }function I(a) {
      var b = 100,
          c = !1;return ka.forEach(function (d, e) {
        if (!d.hasAttribute("disabled")) {
          var f = Math.abs(sa[e] - a);(f < b || 100 === f && 100 === b) && (c = e, b = f);
        }
      }), c;
    }function J(a, b) {
      "mouseout" === a.type && "HTML" === a.target.nodeName && null === a.relatedTarget && L(a, b);
    }function K(a, b) {
      if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === a.buttons && 0 !== b.buttonsProperty) return L(a, b);var d = (c.dir ? -1 : 1) * (a.calcPoint - b.startCalcPoint);W(d > 0, 100 * d / b.baseSize, b.locations, b.handleNumbers);
    }function L(a, b) {
      b.handle && (n(b.handle, c.cssClasses.active), ua -= 1), b.listeners.forEach(function (a) {
        za.removeEventListener(a[0], a[1]);
      }), 0 === ua && (n(ra, c.cssClasses.drag), _(), a.cursor && (Aa.style.cursor = "", Aa.removeEventListener("selectstart", d))), b.handleNumbers.forEach(function (a) {
        S("change", a), S("set", a), S("end", a);
      });
    }function M(a, b) {
      var e;if (1 === b.handleNumbers.length) {
        var f = ka[b.handleNumbers[0]];if (f.hasAttribute("disabled")) return !1;e = f.children[0], ua += 1, m(e, c.cssClasses.active);
      }a.stopPropagation();var g = [],
          h = F(oa.move, za, K, { target: a.target, handle: e, listeners: g, startCalcPoint: a.calcPoint, baseSize: E(), pageOffset: a.pageOffset, handleNumbers: b.handleNumbers, buttonsProperty: a.buttons, locations: sa.slice() }),
          i = F(oa.end, za, L, { target: a.target, handle: e, listeners: g, doNotReject: !0, handleNumbers: b.handleNumbers }),
          j = F("mouseout", za, J, { target: a.target, handle: e, listeners: g, doNotReject: !0, handleNumbers: b.handleNumbers });g.push.apply(g, h.concat(i, j)), a.cursor && (Aa.style.cursor = getComputedStyle(a.target).cursor, ka.length > 1 && m(ra, c.cssClasses.drag), Aa.addEventListener("selectstart", d, !1)), b.handleNumbers.forEach(function (a) {
        S("start", a);
      });
    }function N(a) {
      a.stopPropagation();var b = H(a.calcPoint),
          d = I(b);if (!1 === d) return !1;c.events.snap || i(ra, c.cssClasses.tap, c.animationDuration), aa(d, b, !0, !0), _(), S("slide", d, !0), S("update", d, !0), S("change", d, !0), S("set", d, !0), c.events.snap && M(a, { handleNumbers: [d] });
    }function O(a) {
      var b = H(a.calcPoint),
          c = va.getStep(b),
          d = va.fromStepping(c);Object.keys(xa).forEach(function (a) {
        "hover" === a.split(".")[0] && xa[a].forEach(function (a) {
          a.call(ma, d);
        });
      });
    }function P(a) {
      a.fixed || ka.forEach(function (a, b) {
        F(oa.start, a.children[0], M, { handleNumbers: [b] });
      }), a.tap && F(oa.start, ja, N, {}), a.hover && F(oa.move, ja, O, { hover: !0 }), a.drag && la.forEach(function (b, d) {
        if (!1 !== b && 0 !== d && d !== la.length - 1) {
          var e = ka[d - 1],
              f = ka[d],
              g = [b];m(b, c.cssClasses.draggable), a.fixed && (g.push(e.children[0]), g.push(f.children[0])), g.forEach(function (a) {
            F(oa.start, a, M, { handles: [e, f], handleNumbers: [d - 1, d] });
          });
        }
      });
    }function Q(a, b) {
      xa[a] = xa[a] || [], xa[a].push(b), "update" === a.split(".")[0] && ka.forEach(function (a, b) {
        S("update", b);
      });
    }function R(a) {
      var b = a && a.split(".")[0],
          c = b && a.substring(b.length);Object.keys(xa).forEach(function (a) {
        var d = a.split(".")[0],
            e = a.substring(d.length);b && b !== d || c && c !== e || delete xa[a];
      });
    }function S(a, b, d) {
      Object.keys(xa).forEach(function (e) {
        var f = e.split(".")[0];a === f && xa[e].forEach(function (a) {
          a.call(ma, wa.map(c.format.to), b, wa.slice(), d || !1, sa.slice());
        });
      });
    }function T(a) {
      return a + "%";
    }function U(a, b, d, e, f, g) {
      return ka.length > 1 && (e && b > 0 && (d = Math.max(d, a[b - 1] + c.margin)), f && b < ka.length - 1 && (d = Math.min(d, a[b + 1] - c.margin))), ka.length > 1 && c.limit && (e && b > 0 && (d = Math.min(d, a[b - 1] + c.limit)), f && b < ka.length - 1 && (d = Math.max(d, a[b + 1] - c.limit))), c.padding && (0 === b && (d = Math.max(d, c.padding[0])), b === ka.length - 1 && (d = Math.min(d, 100 - c.padding[1]))), d = va.getStep(d), !((d = j(d)) === a[b] && !g) && d;
    }function V(a, b) {
      var d = c.ort;return (d ? b : a) + ", " + (d ? a : b);
    }function W(a, b, c, d) {
      var e = c.slice(),
          f = [!a, a],
          g = [a, !a];d = d.slice(), a && d.reverse(), d.length > 1 ? d.forEach(function (a, c) {
        var d = U(e, a, e[a] + b, f[c], g[c], !1);!1 === d ? b = 0 : (b = d - e[a], e[a] = d);
      }) : f = g = [!0];var h = !1;d.forEach(function (a, d) {
        h = aa(a, c[a] + b, f[d], g[d]) || h;
      }), h && d.forEach(function (a) {
        S("update", a), S("slide", a);
      });
    }function Y(a, b) {
      return c.dir ? 100 - a - b : a;
    }function Z(a, b) {
      sa[a] = b, wa[a] = va.fromStepping(b);var d = "translate(" + V(T(Y(b, 0) - Ba), "0") + ")";ka[a].style[c.transformRule] = d, ba(a), ba(a + 1);
    }function _() {
      ta.forEach(function (a) {
        var b = sa[a] > 50 ? -1 : 1,
            c = 3 + (ka.length + b * a);ka[a].style.zIndex = c;
      });
    }function aa(a, b, c, d) {
      return !1 !== (b = U(sa, a, b, c, d, !1)) && (Z(a, b), !0);
    }function ba(a) {
      if (la[a]) {
        var b = 0,
            d = 100;0 !== a && (b = sa[a - 1]), a !== la.length - 1 && (d = sa[a]);var e = d - b,
            f = "translate(" + V(T(Y(b, e)), "0") + ")",
            g = "scale(" + V(e / 100, "1") + ")";la[a].style[c.transformRule] = f + " " + g;
      }
    }function ca(a, b) {
      return null === a || !1 === a || void 0 === a ? sa[b] : ("number" == typeof a && (a = String(a)), a = c.format.from(a), a = va.toStepping(a), !1 === a || isNaN(a) ? sa[b] : a);
    }function da(a, b) {
      var d = k(a),
          e = void 0 === sa[0];b = void 0 === b || !!b, c.animate && !e && i(ra, c.cssClasses.tap, c.animationDuration), ta.forEach(function (a) {
        aa(a, ca(d[a], a), !0, !1);
      }), ta.forEach(function (a) {
        aa(a, sa[a], !0, !0);
      }), _(), ta.forEach(function (a) {
        S("update", a), null !== d[a] && b && S("set", a);
      });
    }function ea(a) {
      da(c.start, a);
    }function fa() {
      var a = wa.map(c.format.to);return 1 === a.length ? a[0] : a;
    }function ga() {
      for (var a in c.cssClasses) {
        c.cssClasses.hasOwnProperty(a) && n(ra, c.cssClasses[a]);
      }for (; ra.firstChild;) {
        ra.removeChild(ra.firstChild);
      }delete ra.noUiSlider;
    }function ha() {
      return sa.map(function (a, b) {
        var c = va.getNearbySteps(a),
            d = wa[b],
            e = c.thisStep.step,
            f = null;!1 !== e && d + e > c.stepAfter.startValue && (e = c.stepAfter.startValue - d), f = d > c.thisStep.startValue ? c.thisStep.step : !1 !== c.stepBefore.step && d - c.stepBefore.highestStep, 100 === a ? e = null : 0 === a && (f = null);var g = va.countStepDecimals();return null !== e && !1 !== e && (e = Number(e.toFixed(g))), null !== f && !1 !== f && (f = Number(f.toFixed(g))), [f, e];
      });
    }function ia(a, b) {
      var d = fa(),
          e = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];e.forEach(function (b) {
        void 0 !== a[b] && (f[b] = a[b]);
      });var g = X(f);e.forEach(function (b) {
        void 0 !== a[b] && (c[b] = g[b]);
      }), va = g.spectrum, c.margin = g.margin, c.limit = g.limit, c.padding = g.padding, c.pips && D(c.pips), sa = [], da(a.start || d, b);
    }var ja,
        ka,
        la,
        ma,
        na,
        oa = q(),
        pa = s(),
        qa = pa && r(),
        ra = a,
        sa = [],
        ta = [],
        ua = 0,
        va = c.spectrum,
        wa = [],
        xa = {},
        ya = a.ownerDocument,
        za = ya.documentElement,
        Aa = ya.body,
        Ba = "rtl" === ya.dir || 1 === c.ort ? 0 : 100;return v(ra), u(c.connect, ja), P(c.events), da(c.start), ma = { destroy: ga, steps: ha, on: Q, off: R, get: fa, set: da, reset: ea, __moveHandles: function __moveHandles(a, b, c) {
        W(a, b, sa, c);
      }, options: f, updateOptions: ia, target: ra, removePips: C, pips: D }, c.pips && D(c.pips), c.tooltips && x(), y(), ma;
  }function Z(a, b) {
    if (!a || !a.nodeName) throw new Error("noUiSlider (" + $ + "): create requires a single element, got: " + a);if (a.noUiSlider) throw new Error("noUiSlider (" + $ + "): Slider was already initialized.");var c = X(b, a),
        d = Y(a, c, b);return a.noUiSlider = d, d;
  }var $ = "11.1.0";D.prototype.getMargin = function (a) {
    var b = this.xNumSteps[0];if (b && a / b % 1 != 0) throw new Error("noUiSlider (" + $ + "): 'limit', 'margin' and 'padding' must be divisible by step.");return 2 === this.xPct.length && u(this.xVal, a);
  }, D.prototype.toStepping = function (a) {
    return a = y(this.xVal, this.xPct, a);
  }, D.prototype.fromStepping = function (a) {
    return z(this.xVal, this.xPct, a);
  }, D.prototype.getStep = function (a) {
    return a = A(this.xPct, this.xSteps, this.snap, a);
  }, D.prototype.getNearbySteps = function (a) {
    var b = x(a, this.xPct);return { stepBefore: { startValue: this.xVal[b - 2], step: this.xNumSteps[b - 2], highestStep: this.xHighestCompleteStep[b - 2] }, thisStep: { startValue: this.xVal[b - 1], step: this.xNumSteps[b - 1], highestStep: this.xHighestCompleteStep[b - 1] }, stepAfter: { startValue: this.xVal[b - 0], step: this.xNumSteps[b - 0], highestStep: this.xHighestCompleteStep[b - 0] } };
  }, D.prototype.countStepDecimals = function () {
    var a = this.xNumSteps.map(l);return Math.max.apply(null, a);
  }, D.prototype.convert = function (a) {
    return this.getStep(this.toStepping(a));
  };var _ = { to: function to(a) {
      return void 0 !== a && a.toFixed(2);
    }, from: Number };return { version: $, create: Z };
});
/*! Select2 4.0.5 | https://github.com/select2/select2/blob/master/LICENSE.md */!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = function (b, c) {
    return void 0 === c && (c = "undefined" != typeof window ? require("jquery") : require("jquery")(b)), a(c), c;
  } : a(jQuery);
}(function (a) {
  var b = function () {
    if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;var b;return function () {
      if (!b || !b.requirejs) {
        b ? c = b : b = {};var a, c, d;!function (b) {
          function e(a, b) {
            return v.call(a, b);
          }function f(a, b) {
            var c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o = b && b.split("/"),
                p = t.map,
                q = p && p["*"] || {};if (a) {
              for (a = a.split("/"), g = a.length - 1, t.nodeIdCompat && x.test(a[g]) && (a[g] = a[g].replace(x, "")), "." === a[0].charAt(0) && o && (n = o.slice(0, o.length - 1), a = n.concat(a)), k = 0; k < a.length; k++) {
                if ("." === (m = a[k])) a.splice(k, 1), k -= 1;else if (".." === m) {
                  if (0 === k || 1 === k && ".." === a[2] || ".." === a[k - 1]) continue;k > 0 && (a.splice(k - 1, 2), k -= 2);
                }
              }a = a.join("/");
            }if ((o || q) && p) {
              for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                if (d = c.slice(0, k).join("/"), o) for (l = o.length; l > 0; l -= 1) {
                  if ((e = p[o.slice(0, l).join("/")]) && (e = e[d])) {
                    f = e, h = k;break;
                  }
                }if (f) break;!i && q && q[d] && (i = q[d], j = k);
              }!f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"));
            }return a;
          }function g(a, c) {
            return function () {
              var d = w.call(arguments, 0);return "string" != typeof d[0] && 1 === d.length && d.push(null), _o2.apply(b, d.concat([a, c]));
            };
          }function h(a) {
            return function (b) {
              return f(b, a);
            };
          }function i(a) {
            return function (b) {
              r[a] = b;
            };
          }function j(a) {
            if (e(s, a)) {
              var c = s[a];delete s[a], u[a] = !0, n.apply(b, c);
            }if (!e(r, a) && !e(u, a)) throw new Error("No " + a);return r[a];
          }function k(a) {
            var b,
                c = a ? a.indexOf("!") : -1;return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a];
          }function l(a) {
            return a ? k(a) : [];
          }function m(a) {
            return function () {
              return t && t.config && t.config[a] || {};
            };
          }var n,
              _o2,
              p,
              q,
              r = {},
              s = {},
              t = {},
              u = {},
              v = Object.prototype.hasOwnProperty,
              w = [].slice,
              x = /\.js$/;p = function p(a, b) {
            var c,
                d = k(a),
                e = d[0],
                g = b[1];return a = d[1], e && (e = f(e, g), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(g)) : f(a, g) : (a = f(a, g), d = k(a), e = d[0], a = d[1], e && (c = j(e))), { f: e ? e + "!" + a : a, n: a, pr: e, p: c };
          }, q = { require: function require(a) {
              return g(a);
            }, exports: function exports(a) {
              var b = r[a];return void 0 !== b ? b : r[a] = {};
            }, module: function module(a) {
              return { id: a, uri: "", exports: r[a], config: m(a) };
            } }, n = function n(a, c, d, f) {
            var h,
                k,
                m,
                n,
                o,
                t,
                v,
                w = [],
                x = typeof d === "undefined" ? "undefined" : _typeof(d);if (f = f || a, t = l(f), "undefined" === x || "function" === x) {
              for (c = !c.length && d.length ? ["require", "exports", "module"] : c, o = 0; o < c.length; o += 1) {
                if (n = p(c[o], t), "require" === (k = n.f)) w[o] = q.require(a);else if ("exports" === k) w[o] = q.exports(a), v = !0;else if ("module" === k) h = w[o] = q.module(a);else if (e(r, k) || e(s, k) || e(u, k)) w[o] = j(k);else {
                  if (!n.p) throw new Error(a + " missing " + k);n.p.load(n.n, g(f, !0), i(k), {}), w[o] = r[k];
                }
              }m = d ? d.apply(r[a], w) : void 0, a && (h && h.exports !== b && h.exports !== r[a] ? r[a] = h.exports : m === b && v || (r[a] = m));
            } else a && (r[a] = d);
          }, a = c = _o2 = function o(a, c, d, e, f) {
            if ("string" == typeof a) return q[a] ? q[a](c) : j(p(a, l(c)).f);if (!a.splice) {
              if (t = a, t.deps && _o2(t.deps, t.callback), !c) return;c.splice ? (a = c, c = d, d = null) : a = b;
            }return c = c || function () {}, "function" == typeof d && (d = e, e = f), e ? n(b, a, c, d) : setTimeout(function () {
              n(b, a, c, d);
            }, 4), _o2;
          }, _o2.config = function (a) {
            return _o2(a);
          }, a._defined = r, d = function d(a, b, c) {
            if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");b.splice || (c = b, b = []), e(r, a) || e(s, a) || (s[a] = [a, b, c]);
          }, d.amd = { jQuery: !0 };
        }(), b.requirejs = a, b.require = c, b.define = d;
      }
    }(), b.define("almond", function () {}), b.define("jquery", [], function () {
      var b = a || $;return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b;
    }), b.define("select2/utils", ["jquery"], function (a) {
      function b(a) {
        var b = a.prototype,
            c = [];for (var d in b) {
          "function" == typeof b[d] && "constructor" !== d && c.push(d);
        }return c;
      }var c = {};c.Extend = function (a, b) {
        function c() {
          this.constructor = a;
        }var d = {}.hasOwnProperty;for (var e in b) {
          d.call(b, e) && (a[e] = b[e]);
        }return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
      }, c.Decorate = function (a, c) {
        function d() {
          var b = Array.prototype.unshift,
              d = c.prototype.constructor.length,
              e = a.prototype.constructor;d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments);
        }function e() {
          this.constructor = d;
        }var f = b(c),
            g = b(a);c.displayName = a.displayName, d.prototype = new e();for (var h = 0; h < g.length; h++) {
          var i = g[h];d.prototype[i] = a.prototype[i];
        }for (var j = function j(a) {
          var b = function b() {};(a in d.prototype) && (b = d.prototype[a]);var e = c.prototype[a];return function () {
            return Array.prototype.unshift.call(arguments, b), e.apply(this, arguments);
          };
        }, k = 0; k < f.length; k++) {
          var l = f[k];d.prototype[l] = j(l);
        }return d;
      };var d = function d() {
        this.listeners = {};
      };return d.prototype.on = function (a, b) {
        this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b];
      }, d.prototype.trigger = function (a) {
        var b = Array.prototype.slice,
            c = b.call(arguments, 1);this.listeners = this.listeners || {}, null == c && (c = []), 0 === c.length && c.push({}), c[0]._type = a, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
      }, d.prototype.invoke = function (a, b) {
        for (var c = 0, d = a.length; c < d; c++) {
          a[c].apply(this, b);
        }
      }, c.Observable = d, c.generateChars = function (a) {
        for (var b = "", c = 0; c < a; c++) {
          b += Math.floor(36 * Math.random()).toString(36);
        }return b;
      }, c.bind = function (a, b) {
        return function () {
          a.apply(b, arguments);
        };
      }, c._convertData = function (a) {
        for (var b in a) {
          var c = b.split("-"),
              d = a;if (1 !== c.length) {
            for (var e = 0; e < c.length; e++) {
              var f = c[e];f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f];
            }delete a[b];
          }
        }return a;
      }, c.hasScroll = function (b, c) {
        var d = a(c),
            e = c.style.overflowX,
            f = c.style.overflowY;return (e !== f || "hidden" !== f && "visible" !== f) && ("scroll" === e || "scroll" === f || d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth);
      }, c.escapeMarkup = function (a) {
        var b = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" };return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function (a) {
          return b[a];
        });
      }, c.appendMany = function (b, c) {
        if ("1.7" === a.fn.jquery.substr(0, 3)) {
          var d = a();a.map(c, function (a) {
            d = d.add(a);
          }), c = d;
        }b.append(c);
      }, c;
    }), b.define("select2/results", ["jquery", "./utils"], function (a, b) {
      function c(a, b, d) {
        this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this);
      }return b.Extend(c, b.Observable), c.prototype.render = function () {
        var b = a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b;
      }, c.prototype.clear = function () {
        this.$results.empty();
      }, c.prototype.displayMessage = function (b) {
        var c = this.options.get("escapeMarkup");this.clear(), this.hideLoading();var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
            e = this.options.get("translations").get(b.message);d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d);
      }, c.prototype.hideMessages = function () {
        this.$results.find(".select2-results__message").remove();
      }, c.prototype.append = function (a) {
        this.hideLoading();var b = [];if (null == a.results || 0 === a.results.length) return void (0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" }));a.results = this.sort(a.results);for (var c = 0; c < a.results.length; c++) {
          var d = a.results[c],
              e = this.option(d);b.push(e);
        }this.$results.append(b);
      }, c.prototype.position = function (a, b) {
        b.find(".select2-results").append(a);
      }, c.prototype.sort = function (a) {
        return this.options.get("sorter")(a);
      }, c.prototype.highlightFirstItem = function () {
        var a = this.$results.find(".select2-results__option[aria-selected]"),
            b = a.filter("[aria-selected=true]");b.length > 0 ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter"), this.ensureHighlightVisible();
      }, c.prototype.setClasses = function () {
        var b = this;this.data.current(function (c) {
          var d = a.map(c, function (a) {
            return a.id.toString();
          });b.$results.find(".select2-results__option[aria-selected]").each(function () {
            var b = a(this),
                c = a.data(this, "data"),
                e = "" + c.id;null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false");
          });
        });
      }, c.prototype.showLoading = function (a) {
        this.hideLoading();var b = this.options.get("translations").get("searching"),
            c = { disabled: !0, loading: !0, text: b(a) },
            d = this.option(c);d.className += " loading-results", this.$results.prepend(d);
      }, c.prototype.hideLoading = function () {
        this.$results.find(".loading-results").remove();
      }, c.prototype.option = function (b) {
        var c = document.createElement("li");c.className = "select2-results__option";var d = { role: "treeitem", "aria-selected": "false" };b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);for (var e in d) {
          var f = d[e];c.setAttribute(e, f);
        }if (b.children) {
          var g = a(c),
              h = document.createElement("strong");h.className = "select2-results__group";a(h);this.template(b, h);for (var i = [], j = 0; j < b.children.length; j++) {
            var k = b.children[j],
                l = this.option(k);i.push(l);
          }var m = a("<ul></ul>", { class: "select2-results__options select2-results__options--nested" });m.append(i), g.append(h), g.append(m);
        } else this.template(b, c);return a.data(c, "data", b), c;
      }, c.prototype.bind = function (b, c) {
        var d = this,
            e = b.id + "-results";this.$results.attr("id", e), b.on("results:all", function (a) {
          d.clear(), d.append(a.data), b.isOpen() && (d.setClasses(), d.highlightFirstItem());
        }), b.on("results:append", function (a) {
          d.append(a.data), b.isOpen() && d.setClasses();
        }), b.on("query", function (a) {
          d.hideMessages(), d.showLoading(a);
        }), b.on("select", function () {
          b.isOpen() && (d.setClasses(), d.highlightFirstItem());
        }), b.on("unselect", function () {
          b.isOpen() && (d.setClasses(), d.highlightFirstItem());
        }), b.on("open", function () {
          d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible();
        }), b.on("close", function () {
          d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant");
        }), b.on("results:toggle", function () {
          var a = d.getHighlightedResults();0 !== a.length && a.trigger("mouseup");
        }), b.on("results:select", function () {
          var a = d.getHighlightedResults();if (0 !== a.length) {
            var b = a.data("data");"true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", { data: b });
          }
        }), b.on("results:previous", function () {
          var a = d.getHighlightedResults(),
              b = d.$results.find("[aria-selected]"),
              c = b.index(a);if (0 !== c) {
            var e = c - 1;0 === a.length && (e = 0);var f = b.eq(e);f.trigger("mouseenter");var g = d.$results.offset().top,
                h = f.offset().top,
                i = d.$results.scrollTop() + (h - g);0 === e ? d.$results.scrollTop(0) : h - g < 0 && d.$results.scrollTop(i);
          }
        }), b.on("results:next", function () {
          var a = d.getHighlightedResults(),
              b = d.$results.find("[aria-selected]"),
              c = b.index(a),
              e = c + 1;if (!(e >= b.length)) {
            var f = b.eq(e);f.trigger("mouseenter");var g = d.$results.offset().top + d.$results.outerHeight(!1),
                h = f.offset().top + f.outerHeight(!1),
                i = d.$results.scrollTop() + h - g;0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i);
          }
        }), b.on("results:focus", function (a) {
          a.element.addClass("select2-results__option--highlighted");
        }), b.on("results:message", function (a) {
          d.displayMessage(a);
        }), a.fn.mousewheel && this.$results.on("mousewheel", function (a) {
          var b = d.$results.scrollTop(),
              c = d.$results.get(0).scrollHeight - b + a.deltaY,
              e = a.deltaY > 0 && b - a.deltaY <= 0,
              f = a.deltaY < 0 && c <= d.$results.height();e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation());
        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (b) {
          var c = a(this),
              e = c.data("data");if ("true" === c.attr("aria-selected")) return void (d.options.get("multiple") ? d.trigger("unselect", { originalEvent: b, data: e }) : d.trigger("close", {}));d.trigger("select", { originalEvent: b, data: e });
        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (b) {
          var c = a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", { data: c, element: a(this) });
        });
      }, c.prototype.getHighlightedResults = function () {
        return this.$results.find(".select2-results__option--highlighted");
      }, c.prototype.destroy = function () {
        this.$results.remove();
      }, c.prototype.ensureHighlightVisible = function () {
        var a = this.getHighlightedResults();if (0 !== a.length) {
          var b = this.$results.find("[aria-selected]"),
              c = b.index(a),
              d = this.$results.offset().top,
              e = a.offset().top,
              f = this.$results.scrollTop() + (e - d),
              g = e - d;f -= 2 * a.outerHeight(!1), c <= 2 ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || g < 0) && this.$results.scrollTop(f);
        }
      }, c.prototype.template = function (b, c) {
        var d = this.options.get("templateResult"),
            e = this.options.get("escapeMarkup"),
            f = d(b, c);null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f);
      }, c;
    }), b.define("select2/keys", [], function () {
      return { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 };
    }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (a, b, c) {
      function d(a, b) {
        this.$element = a, this.options = b, d.__super__.constructor.call(this);
      }return b.Extend(d, b.Observable), d.prototype.render = function () {
        var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b;
      }, d.prototype.bind = function (a, b) {
        var d = this,
            e = (a.id, a.id + "-results");this.container = a, this.$selection.on("focus", function (a) {
          d.trigger("focus", a);
        }), this.$selection.on("blur", function (a) {
          d._handleBlur(a);
        }), this.$selection.on("keydown", function (a) {
          d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault();
        }), a.on("results:focus", function (a) {
          d.$selection.attr("aria-activedescendant", a.data._resultId);
        }), a.on("selection:update", function (a) {
          d.update(a.data);
        }), a.on("open", function () {
          d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a);
        }), a.on("close", function () {
          d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a);
        }), a.on("enable", function () {
          d.$selection.attr("tabindex", d._tabindex);
        }), a.on("disable", function () {
          d.$selection.attr("tabindex", "-1");
        });
      }, d.prototype._handleBlur = function (b) {
        var c = this;window.setTimeout(function () {
          document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b);
        }, 1);
      }, d.prototype._attachCloseHandler = function (b) {
        a(document.body).on("mousedown.select2." + b.id, function (b) {
          var c = a(b.target),
              d = c.closest(".select2");a(".select2.select2-container--open").each(function () {
            var b = a(this);this != d[0] && b.data("element").select2("close");
          });
        });
      }, d.prototype._detachCloseHandler = function (b) {
        a(document.body).off("mousedown.select2." + b.id);
      }, d.prototype.position = function (a, b) {
        b.find(".selection").append(a);
      }, d.prototype.destroy = function () {
        this._detachCloseHandler(this.container);
      }, d.prototype.update = function (a) {
        throw new Error("The `update` method must be defined in child classes.");
      }, d;
    }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (a, b, c, d) {
      function e() {
        e.__super__.constructor.apply(this, arguments);
      }return c.Extend(e, b), e.prototype.render = function () {
        var a = e.__super__.render.call(this);return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a;
      }, e.prototype.bind = function (a, b) {
        var c = this;e.__super__.bind.apply(this, arguments);var d = a.id + "-container";this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function (a) {
          1 === a.which && c.trigger("toggle", { originalEvent: a });
        }), this.$selection.on("focus", function (a) {}), this.$selection.on("blur", function (a) {}), a.on("focus", function (b) {
          a.isOpen() || c.$selection.focus();
        }), a.on("selection:update", function (a) {
          c.update(a.data);
        });
      }, e.prototype.clear = function () {
        this.$selection.find(".select2-selection__rendered").empty();
      }, e.prototype.display = function (a, b) {
        var c = this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a, b));
      }, e.prototype.selectionContainer = function () {
        return a("<span></span>");
      }, e.prototype.update = function (a) {
        if (0 === a.length) return void this.clear();var b = a[0],
            c = this.$selection.find(".select2-selection__rendered"),
            d = this.display(b, c);c.empty().append(d), c.prop("title", b.title || b.text);
      }, e;
    }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (a, b, c) {
      function d(a, b) {
        d.__super__.constructor.apply(this, arguments);
      }return c.Extend(d, b), d.prototype.render = function () {
        var a = d.__super__.render.call(this);return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a;
      }, d.prototype.bind = function (b, c) {
        var e = this;d.__super__.bind.apply(this, arguments), this.$selection.on("click", function (a) {
          e.trigger("toggle", { originalEvent: a });
        }), this.$selection.on("click", ".select2-selection__choice__remove", function (b) {
          if (!e.options.get("disabled")) {
            var c = a(this),
                d = c.parent(),
                f = d.data("data");e.trigger("unselect", { originalEvent: b, data: f });
          }
        });
      }, d.prototype.clear = function () {
        this.$selection.find(".select2-selection__rendered").empty();
      }, d.prototype.display = function (a, b) {
        var c = this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a, b));
      }, d.prototype.selectionContainer = function () {
        return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
      }, d.prototype.update = function (a) {
        if (this.clear(), 0 !== a.length) {
          for (var b = [], d = 0; d < a.length; d++) {
            var e = a[d],
                f = this.selectionContainer(),
                g = this.display(e, f);f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f);
          }var h = this.$selection.find(".select2-selection__rendered");c.appendMany(h, b);
        }
      }, d;
    }), b.define("select2/selection/placeholder", ["../utils"], function (a) {
      function b(a, b, c) {
        this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c);
      }return b.prototype.normalizePlaceholder = function (a, b) {
        return "string" == typeof b && (b = { id: "", text: b }), b;
      }, b.prototype.createPlaceholder = function (a, b) {
        var c = this.selectionContainer();return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c;
      }, b.prototype.update = function (a, b) {
        var c = 1 == b.length && b[0].id != this.placeholder.id;if (b.length > 1 || c) return a.call(this, b);this.clear();var d = this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(d);
      }, b;
    }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function (a, b) {
      function c() {}return c.prototype.bind = function (a, b, c) {
        var d = this;a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (a) {
          d._handleClear(a);
        }), b.on("keypress", function (a) {
          d._handleKeyboardClear(a, b);
        });
      }, c.prototype._handleClear = function (a, b) {
        if (!this.options.get("disabled")) {
          var c = this.$selection.find(".select2-selection__clear");if (0 !== c.length) {
            b.stopPropagation();for (var d = c.data("data"), e = 0; e < d.length; e++) {
              var f = { data: d[e] };if (this.trigger("unselect", f), f.prevented) return;
            }this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {});
          }
        }
      }, c.prototype._handleKeyboardClear = function (a, c, d) {
        d.isOpen() || c.which != b.DELETE && c.which != b.BACKSPACE || this._handleClear(c);
      }, c.prototype.update = function (b, c) {
        if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
          var d = a('<span class="select2-selection__clear">&times;</span>');d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d);
        }
      }, c;
    }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (a, b, c) {
      function d(a, b, c) {
        a.call(this, b, c);
      }return d.prototype.render = function (b) {
        var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer = c, this.$search = c.find("input");var d = b.call(this);return this._transferTabIndex(), d;
      }, d.prototype.bind = function (a, b, d) {
        var e = this;a.call(this, b, d), b.on("open", function () {
          e.$search.trigger("focus");
        }), b.on("close", function () {
          e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus");
        }), b.on("enable", function () {
          e.$search.prop("disabled", !1), e._transferTabIndex();
        }), b.on("disable", function () {
          e.$search.prop("disabled", !0);
        }), b.on("focus", function (a) {
          e.$search.trigger("focus");
        }), b.on("results:focus", function (a) {
          e.$search.attr("aria-activedescendant", a.id);
        }), this.$selection.on("focusin", ".select2-search--inline", function (a) {
          e.trigger("focus", a);
        }), this.$selection.on("focusout", ".select2-search--inline", function (a) {
          e._handleBlur(a);
        }), this.$selection.on("keydown", ".select2-search--inline", function (a) {
          if (a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented(), a.which === c.BACKSPACE && "" === e.$search.val()) {
            var b = e.$searchContainer.prev(".select2-selection__choice");if (b.length > 0) {
              var d = b.data("data");e.searchRemoveChoice(d), a.preventDefault();
            }
          }
        });var f = document.documentMode,
            g = f && f <= 11;this.$selection.on("input.searchcheck", ".select2-search--inline", function (a) {
          if (g) return void e.$selection.off("input.search input.searchcheck");e.$selection.off("keyup.search");
        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (a) {
          if (g && "input" === a.type) return void e.$selection.off("input.search input.searchcheck");var b = a.which;b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a);
        });
      }, d.prototype._transferTabIndex = function (a) {
        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
      }, d.prototype.createPlaceholder = function (a, b) {
        this.$search.attr("placeholder", b.text);
      }, d.prototype.update = function (a, b) {
        var c = this.$search[0] == document.activeElement;this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus();
      }, d.prototype.handleSearch = function () {
        if (this.resizeSearch(), !this._keyUpPrevented) {
          var a = this.$search.val();this.trigger("query", { term: a });
        }this._keyUpPrevented = !1;
      }, d.prototype.searchRemoveChoice = function (a, b) {
        this.trigger("unselect", { data: b }), this.$search.val(b.text), this.handleSearch();
      }, d.prototype.resizeSearch = function () {
        this.$search.css("width", "25px");var a = "";if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth();else {
          a = .75 * (this.$search.val().length + 1) + "em";
        }this.$search.css("width", a);
      }, d;
    }), b.define("select2/selection/eventRelay", ["jquery"], function (a) {
      function b() {}return b.prototype.bind = function (b, c, d) {
        var e = this,
            f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
            g = ["opening", "closing", "selecting", "unselecting"];b.call(this, c, d), c.on("*", function (b, c) {
          if (-1 !== a.inArray(b, f)) {
            c = c || {};var d = a.Event("select2:" + b, { params: c });e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented());
          }
        });
      }, b;
    }), b.define("select2/translation", ["jquery", "require"], function (a, b) {
      function c(a) {
        this.dict = a || {};
      }return c.prototype.all = function () {
        return this.dict;
      }, c.prototype.get = function (a) {
        return this.dict[a];
      }, c.prototype.extend = function (b) {
        this.dict = a.extend({}, b.all(), this.dict);
      }, c._cache = {}, c.loadPath = function (a) {
        if (!(a in c._cache)) {
          var d = b(a);c._cache[a] = d;
        }return new c(c._cache[a]);
      }, c;
    }), b.define("select2/diacritics", [], function () {
      return { "Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "Ǡ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "Ạ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "Ḡ": "G", "Ğ": "G", "Ġ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "Ꞡ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "Ƞ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "Ơ": "O", "Ờ": "O", "Ớ": "O", "Ỡ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "Ṡ": "S", "Š": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "Ꝡ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "à": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "ɠ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "ⓠ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z", "Ά": "Α", "Έ": "Ε", "Ή": "Η", "Ί": "Ι", "Ϊ": "Ι", "Ό": "Ο", "Ύ": "Υ", "Ϋ": "Υ", "Ώ": "Ω", "ά": "α", "έ": "ε", "ή": "η", "ί": "ι", "ϊ": "ι", "ΐ": "ι", "ό": "ο", "ύ": "υ", "ϋ": "υ", "ΰ": "υ", "ω": "ω", "ς": "σ" };
    }), b.define("select2/data/base", ["../utils"], function (a) {
      function b(a, c) {
        b.__super__.constructor.call(this);
      }return a.Extend(b, a.Observable), b.prototype.current = function (a) {
        throw new Error("The `current` method must be defined in child classes.");
      }, b.prototype.query = function (a, b) {
        throw new Error("The `query` method must be defined in child classes.");
      }, b.prototype.bind = function (a, b) {}, b.prototype.destroy = function () {}, b.prototype.generateResultId = function (b, c) {
        var d = b.id + "-result-";return d += a.generateChars(4), null != c.id ? d += "-" + c.id.toString() : d += "-" + a.generateChars(4), d;
      }, b;
    }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function (a, b, c) {
      function d(a, b) {
        this.$element = a, this.options = b, d.__super__.constructor.call(this);
      }return b.Extend(d, a), d.prototype.current = function (a) {
        var b = [],
            d = this;this.$element.find(":selected").each(function () {
          var a = c(this),
              e = d.item(a);b.push(e);
        }), a(b);
      }, d.prototype.select = function (a) {
        var b = this;if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");if (this.$element.prop("multiple")) this.current(function (d) {
          var e = [];a = [a], a.push.apply(a, d);for (var f = 0; f < a.length; f++) {
            var g = a[f].id;-1 === c.inArray(g, e) && e.push(g);
          }b.$element.val(e), b.$element.trigger("change");
        });else {
          var d = a.id;this.$element.val(d), this.$element.trigger("change");
        }
      }, d.prototype.unselect = function (a) {
        var b = this;if (this.$element.prop("multiple")) {
          if (a.selected = !1, c(a.element).is("option")) return a.element.selected = !1, void this.$element.trigger("change");this.current(function (d) {
            for (var e = [], f = 0; f < d.length; f++) {
              var g = d[f].id;g !== a.id && -1 === c.inArray(g, e) && e.push(g);
            }b.$element.val(e), b.$element.trigger("change");
          });
        }
      }, d.prototype.bind = function (a, b) {
        var c = this;this.container = a, a.on("select", function (a) {
          c.select(a.data);
        }), a.on("unselect", function (a) {
          c.unselect(a.data);
        });
      }, d.prototype.destroy = function () {
        this.$element.find("*").each(function () {
          c.removeData(this, "data");
        });
      }, d.prototype.query = function (a, b) {
        var d = [],
            e = this;this.$element.children().each(function () {
          var b = c(this);if (b.is("option") || b.is("optgroup")) {
            var f = e.item(b),
                g = e.matches(a, f);null !== g && d.push(g);
          }
        }), b({ results: d });
      }, d.prototype.addOptions = function (a) {
        b.appendMany(this.$element, a);
      }, d.prototype.option = function (a) {
        var b;a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), void 0 !== a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);var d = c(b),
            e = this._normalizeItem(a);return e.element = b, c.data(b, "data", e), d;
      }, d.prototype.item = function (a) {
        var b = {};if (null != (b = c.data(a[0], "data"))) return b;if (a.is("option")) b = { id: a.val(), text: a.text(), disabled: a.prop("disabled"), selected: a.prop("selected"), title: a.prop("title") };else if (a.is("optgroup")) {
          b = { text: a.prop("label"), children: [], title: a.prop("title") };for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
            var g = c(d[f]),
                h = this.item(g);e.push(h);
          }b.children = e;
        }return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b;
      }, d.prototype._normalizeItem = function (a) {
        c.isPlainObject(a) || (a = { id: a, text: a }), a = c.extend({}, { text: "" }, a);var b = { selected: !1, disabled: !1 };return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a);
      }, d.prototype.matches = function (a, b) {
        return this.options.get("matcher")(a, b);
      }, d;
    }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function (a, b, c) {
      function d(a, b) {
        var c = b.get("data") || [];d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c));
      }return b.Extend(d, a), d.prototype.select = function (a) {
        var b = this.$element.find("option").filter(function (b, c) {
          return c.value == a.id.toString();
        });0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a);
      }, d.prototype.convertToOptions = function (a) {
        function d(a) {
          return function () {
            return c(this).val() == a.id;
          };
        }for (var e = this, f = this.$element.find("option"), g = f.map(function () {
          return e.item(c(this)).id;
        }).get(), h = [], i = 0; i < a.length; i++) {
          var j = this._normalizeItem(a[i]);if (c.inArray(j.id, g) >= 0) {
            var k = f.filter(d(j)),
                l = this.item(k),
                m = c.extend(!0, {}, j, l),
                n = this.option(m);k.replaceWith(n);
          } else {
            var o = this.option(j);if (j.children) {
              var p = this.convertToOptions(j.children);b.appendMany(o, p);
            }h.push(o);
          }
        }return h;
      }, d;
    }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (a, b, c) {
      function d(a, b) {
        this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b);
      }return b.Extend(d, a), d.prototype._applyDefaults = function (a) {
        var b = { data: function data(a) {
            return c.extend({}, a, { q: a.term });
          }, transport: function transport(a, b, d) {
            var e = c.ajax(a);return e.then(b), e.fail(d), e;
          } };return c.extend({}, b, a, !0);
      }, d.prototype.processResults = function (a) {
        return a;
      }, d.prototype.query = function (a, b) {
        function d() {
          var d = f.transport(f, function (d) {
            var f = e.processResults(d, a);e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f);
          }, function () {
            d.status && "0" === d.status || e.trigger("results:message", { message: "errorLoading" });
          });e._request = d;
        }var e = this;null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);var f = c.extend({ type: "GET" }, this.ajaxOptions);"function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d();
      }, d;
    }), b.define("select2/data/tags", ["jquery"], function (a) {
      function b(b, c, d) {
        var e = d.get("tags"),
            f = d.get("createTag");void 0 !== f && (this.createTag = f);var g = d.get("insertTag");if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e)) for (var h = 0; h < e.length; h++) {
          var i = e[h],
              j = this._normalizeItem(i),
              k = this.option(j);this.$element.append(k);
        }
      }return b.prototype.query = function (a, b, c) {
        function d(a, f) {
          for (var g = a.results, h = 0; h < g.length; h++) {
            var i = g[h],
                j = null != i.children && !d({ results: i.children }, !0);if ((i.text || "").toUpperCase() === (b.term || "").toUpperCase() || j) return !f && (a.data = g, void c(a));
          }if (f) return !0;var k = e.createTag(b);if (null != k) {
            var l = e.option(k);l.attr("data-select2-tag", !0), e.addOptions([l]), e.insertTag(g, k);
          }a.results = g, c(a);
        }var e = this;if (this._removeOldTags(), null == b.term || null != b.page) return void a.call(this, b, c);a.call(this, b, d);
      }, b.prototype.createTag = function (b, c) {
        var d = a.trim(c.term);return "" === d ? null : { id: d, text: d };
      }, b.prototype.insertTag = function (a, b, c) {
        b.unshift(c);
      }, b.prototype._removeOldTags = function (b) {
        this._lastTag;this.$element.find("option[data-select2-tag]").each(function () {
          this.selected || a(this).remove();
        });
      }, b;
    }), b.define("select2/data/tokenizer", ["jquery"], function (a) {
      function b(a, b, c) {
        var d = c.get("tokenizer");void 0 !== d && (this.tokenizer = d), a.call(this, b, c);
      }return b.prototype.bind = function (a, b, c) {
        a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field");
      }, b.prototype.query = function (b, c, d) {
        function e(b) {
          var c = g._normalizeItem(b);if (!g.$element.find("option").filter(function () {
            return a(this).val() === c.id;
          }).length) {
            var d = g.option(c);d.attr("data-select2-tag", !0), g._removeOldTags(), g.addOptions([d]);
          }f(c);
        }function f(a) {
          g.trigger("select", { data: a });
        }var g = this;c.term = c.term || "";var h = this.tokenizer(c, this.options, e);h.term !== c.term && (this.$search.length && (this.$search.val(h.term), this.$search.focus()), c.term = h.term), b.call(this, c, d);
      }, b.prototype.tokenizer = function (b, c, d, e) {
        for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function (a) {
          return { id: a.term, text: a.term };
        }; h < g.length;) {
          var j = g[h];if (-1 !== a.inArray(j, f)) {
            var k = g.substr(0, h),
                l = a.extend({}, c, { term: k }),
                m = i(l);null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++;
          } else h++;
        }return { term: g };
      }, b;
    }), b.define("select2/data/minimumInputLength", [], function () {
      function a(a, b, c) {
        this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c);
      }return a.prototype.query = function (a, b, c) {
        if (b.term = b.term || "", b.term.length < this.minimumInputLength) return void this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: b.term, params: b } });a.call(this, b, c);
      }, a;
    }), b.define("select2/data/maximumInputLength", [], function () {
      function a(a, b, c) {
        this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c);
      }return a.prototype.query = function (a, b, c) {
        if (b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength) return void this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: b.term, params: b } });a.call(this, b, c);
      }, a;
    }), b.define("select2/data/maximumSelectionLength", [], function () {
      function a(a, b, c) {
        this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c);
      }return a.prototype.query = function (a, b, c) {
        var d = this;this.current(function (e) {
          var f = null != e ? e.length : 0;if (d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength) return void d.trigger("results:message", { message: "maximumSelected", args: { maximum: d.maximumSelectionLength } });a.call(d, b, c);
        });
      }, a;
    }), b.define("select2/dropdown", ["jquery", "./utils"], function (a, b) {
      function c(a, b) {
        this.$element = a, this.options = b, c.__super__.constructor.call(this);
      }return b.Extend(c, b.Observable), c.prototype.render = function () {
        var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b;
      }, c.prototype.bind = function () {}, c.prototype.position = function (a, b) {}, c.prototype.destroy = function () {
        this.$dropdown.remove();
      }, c;
    }), b.define("select2/dropdown/search", ["jquery", "../utils"], function (a, b) {
      function c() {}return c.prototype.render = function (b) {
        var c = b.call(this),
            d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c;
      }, c.prototype.bind = function (b, c, d) {
        var e = this;b.call(this, c, d), this.$search.on("keydown", function (a) {
          e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
        }), this.$search.on("input", function (b) {
          a(this).off("keyup");
        }), this.$search.on("keyup input", function (a) {
          e.handleSearch(a);
        }), c.on("open", function () {
          e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function () {
            e.$search.focus();
          }, 0);
        }), c.on("close", function () {
          e.$search.attr("tabindex", -1), e.$search.val("");
        }), c.on("focus", function () {
          c.isOpen() || e.$search.focus();
        }), c.on("results:all", function (a) {
          if (null == a.query.term || "" === a.query.term) {
            e.showSearch(a) ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide");
          }
        });
      }, c.prototype.handleSearch = function (a) {
        if (!this._keyUpPrevented) {
          var b = this.$search.val();this.trigger("query", { term: b });
        }this._keyUpPrevented = !1;
      }, c.prototype.showSearch = function (a, b) {
        return !0;
      }, c;
    }), b.define("select2/dropdown/hidePlaceholder", [], function () {
      function a(a, b, c, d) {
        this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d);
      }return a.prototype.append = function (a, b) {
        b.results = this.removePlaceholder(b.results), a.call(this, b);
      }, a.prototype.normalizePlaceholder = function (a, b) {
        return "string" == typeof b && (b = { id: "", text: b }), b;
      }, a.prototype.removePlaceholder = function (a, b) {
        for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
          var e = b[d];this.placeholder.id === e.id && c.splice(d, 1);
        }return c;
      }, a;
    }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function (a) {
      function b(a, b, c, d) {
        this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1;
      }return b.prototype.append = function (a, b) {
        this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore);
      }, b.prototype.bind = function (b, c, d) {
        var e = this;b.call(this, c, d), c.on("query", function (a) {
          e.lastParams = a, e.loading = !0;
        }), c.on("query:append", function (a) {
          e.lastParams = a, e.loading = !0;
        }), this.$results.on("scroll", function () {
          var b = a.contains(document.documentElement, e.$loadingMore[0]);if (!e.loading && b) {
            e.$results.offset().top + e.$results.outerHeight(!1) + 50 >= e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1) && e.loadMore();
          }
        });
      }, b.prototype.loadMore = function () {
        this.loading = !0;var b = a.extend({}, { page: 1 }, this.lastParams);b.page++, this.trigger("query:append", b);
      }, b.prototype.showLoadingMore = function (a, b) {
        return b.pagination && b.pagination.more;
      }, b.prototype.createLoadingMore = function () {
        var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
            c = this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)), b;
      }, b;
    }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (a, b) {
      function c(b, c, d) {
        this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d);
      }return c.prototype.bind = function (a, b, c) {
        var d = this,
            e = !1;a.call(this, b, c), b.on("open", function () {
          d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function () {
            d._positionDropdown(), d._resizeDropdown();
          }), b.on("results:append", function () {
            d._positionDropdown(), d._resizeDropdown();
          }));
        }), b.on("close", function () {
          d._hideDropdown(), d._detachPositioningHandler(b);
        }), this.$dropdownContainer.on("mousedown", function (a) {
          a.stopPropagation();
        });
      }, c.prototype.destroy = function (a) {
        a.call(this), this.$dropdownContainer.remove();
      }, c.prototype.position = function (a, b, c) {
        b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({ position: "absolute", top: -999999 }), this.$container = c;
      }, c.prototype.render = function (b) {
        var c = a("<span></span>"),
            d = b.call(this);return c.append(d), this.$dropdownContainer = c, c;
      }, c.prototype._hideDropdown = function (a) {
        this.$dropdownContainer.detach();
      }, c.prototype._attachPositioningHandler = function (c, d) {
        var e = this,
            f = "scroll.select2." + d.id,
            g = "resize.select2." + d.id,
            h = "orientationchange.select2." + d.id,
            i = this.$container.parents().filter(b.hasScroll);i.each(function () {
          a(this).data("select2-scroll-position", { x: a(this).scrollLeft(), y: a(this).scrollTop() });
        }), i.on(f, function (b) {
          var c = a(this).data("select2-scroll-position");a(this).scrollTop(c.y);
        }), a(window).on(f + " " + g + " " + h, function (a) {
          e._positionDropdown(), e._resizeDropdown();
        });
      }, c.prototype._detachPositioningHandler = function (c, d) {
        var e = "scroll.select2." + d.id,
            f = "resize.select2." + d.id,
            g = "orientationchange.select2." + d.id;this.$container.parents().filter(b.hasScroll).off(e), a(window).off(e + " " + f + " " + g);
      }, c.prototype._positionDropdown = function () {
        var b = a(window),
            c = this.$dropdown.hasClass("select2-dropdown--above"),
            d = this.$dropdown.hasClass("select2-dropdown--below"),
            e = null,
            f = this.$container.offset();f.bottom = f.top + this.$container.outerHeight(!1);var g = { height: this.$container.outerHeight(!1) };g.top = f.top, g.bottom = f.top + g.height;var h = { height: this.$dropdown.outerHeight(!1) },
            i = { top: b.scrollTop(), bottom: b.scrollTop() + b.height() },
            j = i.top < f.top - h.height,
            k = i.bottom > f.bottom + h.height,
            l = { left: f.left, top: g.bottom },
            m = this.$dropdownParent;"static" === m.css("position") && (m = m.offsetParent());var n = m.offset();l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - n.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l);
      }, c.prototype._resizeDropdown = function () {
        var a = { width: this.$container.outerWidth(!1) + "px" };this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", a.width = "auto"), this.$dropdown.css(a);
      }, c.prototype._showDropdown = function (a) {
        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
      }, c;
    }), b.define("select2/dropdown/minimumResultsForSearch", [], function () {
      function a(b) {
        for (var c = 0, d = 0; d < b.length; d++) {
          var e = b[d];e.children ? c += a(e.children) : c++;
        }return c;
      }function b(a, b, c, d) {
        this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d);
      }return b.prototype.showSearch = function (b, c) {
        return !(a(c.data.results) < this.minimumResultsForSearch) && b.call(this, c);
      }, b;
    }), b.define("select2/dropdown/selectOnClose", [], function () {
      function a() {}return a.prototype.bind = function (a, b, c) {
        var d = this;a.call(this, b, c), b.on("close", function (a) {
          d._handleSelectOnClose(a);
        });
      }, a.prototype._handleSelectOnClose = function (a, b) {
        if (b && null != b.originalSelect2Event) {
          var c = b.originalSelect2Event;if ("select" === c._type || "unselect" === c._type) return;
        }var d = this.getHighlightedResults();if (!(d.length < 1)) {
          var e = d.data("data");null != e.element && e.element.selected || null == e.element && e.selected || this.trigger("select", { data: e });
        }
      }, a;
    }), b.define("select2/dropdown/closeOnSelect", [], function () {
      function a() {}return a.prototype.bind = function (a, b, c) {
        var d = this;a.call(this, b, c), b.on("select", function (a) {
          d._selectTriggered(a);
        }), b.on("unselect", function (a) {
          d._selectTriggered(a);
        });
      }, a.prototype._selectTriggered = function (a, b) {
        var c = b.originalEvent;c && c.ctrlKey || this.trigger("close", { originalEvent: c, originalSelect2Event: b });
      }, a;
    }), b.define("select2/i18n/en", [], function () {
      return { errorLoading: function errorLoading() {
          return "The results could not be loaded.";
        }, inputTooLong: function inputTooLong(a) {
          var b = a.input.length - a.maximum,
              c = "Please delete " + b + " character";return 1 != b && (c += "s"), c;
        }, inputTooShort: function inputTooShort(a) {
          return "Please enter " + (a.minimum - a.input.length) + " or more characters";
        }, loadingMore: function loadingMore() {
          return "Loading more results…";
        }, maximumSelected: function maximumSelected(a) {
          var b = "You can only select " + a.maximum + " item";return 1 != a.maximum && (b += "s"), b;
        }, noResults: function noResults() {
          return "No results found";
        }, searching: function searching() {
          return "Searching…";
        } };
    }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
      function D() {
        this.reset();
      }return D.prototype.apply = function (l) {
        if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) {
          if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), null == l.tokenSeparators && null == l.tokenizer || (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
            var C = b(l.amdBase + "compat/query");l.dataAdapter = j.Decorate(l.dataAdapter, C);
          }if (null != l.initSelection) {
            var D = b(l.amdBase + "compat/initSelection");l.dataAdapter = j.Decorate(l.dataAdapter, D);
          }
        }if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
          if (l.multiple) l.dropdownAdapter = u;else {
            var E = j.Decorate(u, v);l.dropdownAdapter = E;
          }if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
            var F = b(l.amdBase + "compat/dropdownCss");l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F);
          }l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y);
        }if (null == l.selectionAdapter) {
          if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
            var G = b(l.amdBase + "compat/containerCss");l.selectionAdapter = j.Decorate(l.selectionAdapter, G);
          }l.selectionAdapter = j.Decorate(l.selectionAdapter, i);
        }if ("string" == typeof l.language) if (l.language.indexOf("-") > 0) {
          var H = l.language.split("-"),
              I = H[0];l.language = [l.language, I];
        } else l.language = [l.language];if (a.isArray(l.language)) {
          var J = new k();l.language.push("en");for (var K = l.language, L = 0; L < K.length; L++) {
            var M = K[L],
                N = {};try {
              N = k.loadPath(M);
            } catch (a) {
              try {
                M = this.defaults.amdLanguageBase + M, N = k.loadPath(M);
              } catch (a) {
                l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');continue;
              }
            }J.extend(N);
          }l.translations = J;
        } else {
          var O = k.loadPath(this.defaults.amdLanguageBase + "en"),
              P = new k(l.language);P.extend(O), l.translations = P;
        }return l;
      }, D.prototype.reset = function () {
        function b(a) {
          function b(a) {
            return l[a] || a;
          }return a.replace(/[^\u0000-\u007E]/g, b);
        }function c(d, e) {
          if ("" === a.trim(d.term)) return e;if (e.children && e.children.length > 0) {
            for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
              null == c(d, e.children[g]) && f.children.splice(g, 1);
            }return f.children.length > 0 ? f : c(d, f);
          }var h = b(e.text).toUpperCase(),
              i = b(d.term).toUpperCase();return h.indexOf(i) > -1 ? e : null;
        }this.defaults = { amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: j.escapeMarkup, language: C, matcher: c, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, sorter: function sorter(a) {
            return a;
          }, templateResult: function templateResult(a) {
            return a.text;
          }, templateSelection: function templateSelection(a) {
            return a.text;
          }, theme: "default", width: "resolve" };
      }, D.prototype.set = function (b, c) {
        var d = a.camelCase(b),
            e = {};e[d] = c;var f = j._convertData(e);a.extend(this.defaults, f);
      }, new D();
    }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (a, b, c, d) {
      function e(b, e) {
        if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
          var f = a(this.get("amdBase") + "compat/inputData");this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f);
        }
      }return e.prototype.fromElement = function (a) {
        var c = ["select2"];null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));var e = {};e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();var f = b.extend(!0, {}, e);f = d._convertData(f);for (var g in f) {
          b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
        }return this;
      }, e.prototype.get = function (a) {
        return this.options[a];
      }, e.prototype.set = function (a, b) {
        this.options[a] = b;
      }, e;
    }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (a, b, c, d) {
      var e = function e(a, c) {
        null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);var d = a.attr("tabindex") || 0;a.data("old-tabindex", d), a.attr("tabindex", "-1");var f = this.options.get("dataAdapter");this.dataAdapter = new f(a, this.options);var g = this.render();this._placeContainer(g);var h = this.options.get("selectionAdapter");this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);var i = this.options.get("dropdownAdapter");this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);var j = this.options.get("resultsAdapter");this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);var k = this;this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (a) {
          k.trigger("selection:update", { data: a });
        }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this);
      };return c.Extend(e, c.Observable), e.prototype._generateId = function (a) {
        var b = "";return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b;
      }, e.prototype._placeContainer = function (a) {
        a.insertAfter(this.$element);var b = this._resolveWidth(this.$element, this.options.get("width"));null != b && a.css("width", b);
      }, e.prototype._resolveWidth = function (a, b) {
        var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if ("resolve" == b) {
          var d = this._resolveWidth(a, "style");return null != d ? d : this._resolveWidth(a, "element");
        }if ("element" == b) {
          var e = a.outerWidth(!1);return e <= 0 ? "auto" : e + "px";
        }if ("style" == b) {
          var f = a.attr("style");if ("string" != typeof f) return null;for (var g = f.split(";"), h = 0, i = g.length; h < i; h += 1) {
            var j = g[h].replace(/\s/g, ""),
                k = j.match(c);if (null !== k && k.length >= 1) return k[1];
          }return null;
        }return b;
      }, e.prototype._bindAdapters = function () {
        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
      }, e.prototype._registerDomEvents = function () {
        var b = this;this.$element.on("change.select2", function () {
          b.dataAdapter.current(function (a) {
            b.trigger("selection:update", { data: a });
          });
        }), this.$element.on("focus.select2", function (a) {
          b.trigger("focus", a);
        }), this._syncA = c.bind(this._syncAttributes, this), this._syncS = c.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;null != d ? (this._observer = new d(function (c) {
          a.each(c, b._syncA), a.each(c, b._syncS);
        }), this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1));
      }, e.prototype._registerDataEvents = function () {
        var a = this;this.dataAdapter.on("*", function (b, c) {
          a.trigger(b, c);
        });
      }, e.prototype._registerSelectionEvents = function () {
        var b = this,
            c = ["toggle", "focus"];this.selection.on("toggle", function () {
          b.toggleDropdown();
        }), this.selection.on("focus", function (a) {
          b.focus(a);
        }), this.selection.on("*", function (d, e) {
          -1 === a.inArray(d, c) && b.trigger(d, e);
        });
      }, e.prototype._registerDropdownEvents = function () {
        var a = this;this.dropdown.on("*", function (b, c) {
          a.trigger(b, c);
        });
      }, e.prototype._registerResultsEvents = function () {
        var a = this;this.results.on("*", function (b, c) {
          a.trigger(b, c);
        });
      }, e.prototype._registerEvents = function () {
        var a = this;this.on("open", function () {
          a.$container.addClass("select2-container--open");
        }), this.on("close", function () {
          a.$container.removeClass("select2-container--open");
        }), this.on("enable", function () {
          a.$container.removeClass("select2-container--disabled");
        }), this.on("disable", function () {
          a.$container.addClass("select2-container--disabled");
        }), this.on("blur", function () {
          a.$container.removeClass("select2-container--focus");
        }), this.on("query", function (b) {
          a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function (c) {
            a.trigger("results:all", { data: c, query: b });
          });
        }), this.on("query:append", function (b) {
          this.dataAdapter.query(b, function (c) {
            a.trigger("results:append", { data: c, query: b });
          });
        }), this.on("keypress", function (b) {
          var c = b.which;a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault());
        });
      }, e.prototype._syncAttributes = function () {
        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
      }, e.prototype._syncSubtree = function (a, b) {
        var c = !1,
            d = this;if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) {
          if (b) {
            if (b.addedNodes && b.addedNodes.length > 0) for (var e = 0; e < b.addedNodes.length; e++) {
              var f = b.addedNodes[e];f.selected && (c = !0);
            } else b.removedNodes && b.removedNodes.length > 0 && (c = !0);
          } else c = !0;c && this.dataAdapter.current(function (a) {
            d.trigger("selection:update", { data: a });
          });
        }
      }, e.prototype.trigger = function (a, b) {
        var c = e.__super__.trigger,
            d = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting" };if (void 0 === b && (b = {}), a in d) {
          var f = d[a],
              g = { prevented: !1, name: a, args: b };if (c.call(this, f, g), g.prevented) return void (b.prevented = !0);
        }c.call(this, a, b);
      }, e.prototype.toggleDropdown = function () {
        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open());
      }, e.prototype.open = function () {
        this.isOpen() || this.trigger("query", {});
      }, e.prototype.close = function () {
        this.isOpen() && this.trigger("close", {});
      }, e.prototype.isOpen = function () {
        return this.$container.hasClass("select2-container--open");
      }, e.prototype.hasFocus = function () {
        return this.$container.hasClass("select2-container--focus");
      }, e.prototype.focus = function (a) {
        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
      }, e.prototype.enable = function (a) {
        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != a && 0 !== a.length || (a = [!0]);var b = !a[0];this.$element.prop("disabled", b);
      }, e.prototype.data = function () {
        this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a = [];return this.dataAdapter.current(function (b) {
          a = b;
        }), a;
      }, e.prototype.val = function (b) {
        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val();var c = b[0];a.isArray(c) && (c = a.map(c, function (a) {
          return a.toString();
        })), this.$element.val(c).trigger("change");
      }, e.prototype.destroy = function () {
        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
      }, e.prototype.render = function () {
        var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b;
      }, e;
    }), b.define("select2/compat/utils", ["jquery"], function (a) {
      function b(b, c, d) {
        var e,
            f,
            g = [];e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function () {
          0 === this.indexOf("select2-") && g.push(this);
        })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function () {
          0 !== this.indexOf("select2-") && null != (f = d(this)) && g.push(f);
        })), b.attr("class", g.join(" "));
      }return { syncCssClasses: b };
    }), b.define("select2/compat/containerCss", ["jquery", "./utils"], function (a, b) {
      function c(a) {
        return null;
      }function d() {}return d.prototype.render = function (d) {
        var e = d.call(this),
            f = this.options.get("containerCssClass") || "";a.isFunction(f) && (f = f(this.$element));var g = this.options.get("adaptContainerCssClass");if (g = g || c, -1 !== f.indexOf(":all:")) {
          f = f.replace(":all:", "");var h = g;g = function g(a) {
            var b = h(a);return null != b ? b + " " + a : a;
          };
        }var i = this.options.get("containerCss") || {};return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e;
      }, d;
    }), b.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (a, b) {
      function c(a) {
        return null;
      }function d() {}return d.prototype.render = function (d) {
        var e = d.call(this),
            f = this.options.get("dropdownCssClass") || "";a.isFunction(f) && (f = f(this.$element));var g = this.options.get("adaptDropdownCssClass");if (g = g || c, -1 !== f.indexOf(":all:")) {
          f = f.replace(":all:", "");var h = g;g = function g(a) {
            var b = h(a);return null != b ? b + " " + a : a;
          };
        }var i = this.options.get("dropdownCss") || {};return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e;
      }, d;
    }), b.define("select2/compat/initSelection", ["jquery"], function (a) {
      function b(a, b, c) {
        c.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = c.get("initSelection"), this._isInitialized = !1, a.call(this, b, c);
      }return b.prototype.current = function (b, c) {
        var d = this;if (this._isInitialized) return void b.call(this, c);this.initSelection.call(null, this.$element, function (b) {
          d._isInitialized = !0, a.isArray(b) || (b = [b]), c(b);
        });
      }, b;
    }), b.define("select2/compat/inputData", ["jquery"], function (a) {
      function b(a, b, c) {
        this._currentData = [], this._valueSeparator = c.get("valueSeparator") || ",", "hidden" === b.prop("type") && c.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), a.call(this, b, c);
      }return b.prototype.current = function (b, c) {
        function d(b, c) {
          var e = [];return b.selected || -1 !== a.inArray(b.id, c) ? (b.selected = !0, e.push(b)) : b.selected = !1, b.children && e.push.apply(e, d(b.children, c)), e;
        }for (var e = [], f = 0; f < this._currentData.length; f++) {
          var g = this._currentData[f];e.push.apply(e, d(g, this.$element.val().split(this._valueSeparator)));
        }c(e);
      }, b.prototype.select = function (b, c) {
        if (this.options.get("multiple")) {
          var d = this.$element.val();d += this._valueSeparator + c.id, this.$element.val(d), this.$element.trigger("change");
        } else this.current(function (b) {
          a.map(b, function (a) {
            a.selected = !1;
          });
        }), this.$element.val(c.id), this.$element.trigger("change");
      }, b.prototype.unselect = function (a, b) {
        var c = this;b.selected = !1, this.current(function (a) {
          for (var d = [], e = 0; e < a.length; e++) {
            var f = a[e];b.id != f.id && d.push(f.id);
          }c.$element.val(d.join(c._valueSeparator)), c.$element.trigger("change");
        });
      }, b.prototype.query = function (a, b, c) {
        for (var d = [], e = 0; e < this._currentData.length; e++) {
          var f = this._currentData[e],
              g = this.matches(b, f);null !== g && d.push(g);
        }c({ results: d });
      }, b.prototype.addOptions = function (b, c) {
        var d = a.map(c, function (b) {
          return a.data(b[0], "data");
        });this._currentData.push.apply(this._currentData, d);
      }, b;
    }), b.define("select2/compat/matcher", ["jquery"], function (a) {
      function b(b) {
        function c(c, d) {
          var e = a.extend(!0, {}, d);if (null == c.term || "" === a.trim(c.term)) return e;if (d.children) {
            for (var f = d.children.length - 1; f >= 0; f--) {
              var g = d.children[f];b(c.term, g.text, g) || e.children.splice(f, 1);
            }if (e.children.length > 0) return e;
          }return b(c.term, d.text, d) ? e : null;
        }return c;
      }return b;
    }), b.define("select2/compat/query", [], function () {
      function a(a, b, c) {
        c.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), a.call(this, b, c);
      }return a.prototype.query = function (a, b, c) {
        b.callback = c, this.options.get("query").call(null, b);
      }, a;
    }), b.define("select2/dropdown/attachContainer", [], function () {
      function a(a, b, c) {
        a.call(this, b, c);
      }return a.prototype.position = function (a, b, c) {
        c.find(".dropdown-wrapper").append(b), b.addClass("select2-dropdown--below"), c.addClass("select2-container--below");
      }, a;
    }), b.define("select2/dropdown/stopPropagation", [], function () {
      function a() {}return a.prototype.bind = function (a, b, c) {
        a.call(this, b, c);var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];this.$dropdown.on(d.join(" "), function (a) {
          a.stopPropagation();
        });
      }, a;
    }), b.define("select2/selection/stopPropagation", [], function () {
      function a() {}return a.prototype.bind = function (a, b, c) {
        a.call(this, b, c);var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];this.$selection.on(d.join(" "), function (a) {
          a.stopPropagation();
        });
      }, a;
    }), function (c) {
      "function" == typeof b.define && b.define.amd ? b.define("jquery-mousewheel", ["jquery"], c) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = c : c(a);
    }(function (a) {
      function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
          if (1 === g.deltaMode) {
            var q = a.data(this, "mousewheel-line-height");j *= q, m *= q, l *= q;
          } else if (2 === g.deltaMode) {
            var r = a.data(this, "mousewheel-page-height");j *= r, m *= r, l *= r;
          }if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || n < f) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
            var s = this.getBoundingClientRect();o = b.clientX - s.left, p = b.clientY - s.top;
          }return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h);
        }
      }function c() {
        f = null;
      }function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 == 0;
      }var e,
          f,
          g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
          h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
          i = Array.prototype.slice;if (a.event.fixHooks) for (var j = g.length; j;) {
        a.event.fixHooks[g[--j]] = a.event.mouseHooks;
      }var k = a.event.special.mousewheel = { version: "3.1.12", setup: function setup() {
          if (this.addEventListener) for (var c = h.length; c;) {
            this.addEventListener(h[--c], b, !1);
          } else this.onmousewheel = b;a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
        }, teardown: function teardown() {
          if (this.removeEventListener) for (var c = h.length; c;) {
            this.removeEventListener(h[--c], b, !1);
          } else this.onmousewheel = null;a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
        }, getLineHeight: function getLineHeight(b) {
          var c = a(b),
              d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
        }, getPageHeight: function getPageHeight(b) {
          return a(b).height();
        }, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } };a.fn.extend({ mousewheel: function mousewheel(a) {
          return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
        }, unmousewheel: function unmousewheel(a) {
          return this.unbind("mousewheel", a);
        } });
    }), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (a, b, c, d) {
      if (null == a.fn.select2) {
        var e = ["open", "close", "destroy"];a.fn.select2 = function (b) {
          if ("object" == _typeof(b = b || {})) return this.each(function () {
            var d = a.extend(!0, {}, b);new c(a(this), d);
          }), this;if ("string" == typeof b) {
            var d,
                f = Array.prototype.slice.call(arguments, 1);return this.each(function () {
              var c = a(this).data("select2");null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."), d = c[b].apply(c, f);
            }), a.inArray(b, e) > -1 ? this : d;
          }throw new Error("Invalid arguments for Select2: " + b);
        };
      }return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c;
    }), { define: b.define, require: b.require };
  }(),
      c = b.require("jquery.select2");return a.fn.select2.amd = b, c;
});
function getScrollBarWidth() {
  var inner = document.createElement('p');
  inner.style.width = "100%";
  inner.style.height = "200px";

  var outer = document.createElement('div');
  outer.style.position = "absolute";
  outer.style.top = "0px";
  outer.style.left = "0px";
  outer.style.visibility = "hidden";
  outer.style.width = "200px";
  outer.style.height = "150px";
  outer.style.overflow = "hidden";
  outer.appendChild(inner);

  document.body.appendChild(outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;
  if (w1 == w2) w2 = outer.clientWidth;

  document.body.removeChild(outer);

  return w1 - w2;
};

$(document).ready(function () {
  // MMENU
  (function () {
    $("#menu").mmenu({
      "extensions": ["position-front", "position-right"],
      navbar: {
        title: ""
      }
    });

    var API = $("#menu").data("mmenu");

    $('.js-menu-btn-close').click(function () {
      API.close();
    });

    $('.js-menu-open').click(function () {
      API.open();
    });
  })();
  // END MMENU

  // MAGNIFIC POPUP
  (function () {
    $('.js-form-popup').magnificPopup({
      removalDelay: 300,
      mainClass: 'mfp-fade',
      callbacks: {
        open: function open() {
          var w = getScrollBarWidth();
          $('.header').css({ paddingRight: w });
          $('body').css({ paddingRight: w });
        },
        close: function close() {
          $('.header').css({ paddingRight: 0 });
          $('body').css({ paddingRight: 0 });
        }
      }
    });
  })();
  // END MAGNIFIC POPUP

  // SEARCH TOGGLE
  (function () {
    $('.js-search-show').on('click', function (evt) {
      evt.stopPropagation();

      var id = $(evt.currentTarget).data().show;
      var input = $(id).find('input');

      $(id).toggle();
      $(input).focus();
      $('body').toggleClass('search-field-show');
    });

    $(document).on('click', function (evt) {
      var target = evt.target;

      if (!$(target).parents('.search').length) {
        $('.search__field').hide();
        $('body').removeClass('search-field-show');
      }
    });
  })();
  // END SEARCH TOGGLE


  // SCROLL TOP
  $('.js-scroll-top').on('click', function (evt) {
    evt.preventDefault();

    var wrap = $(".mfp-wrap");

    wrap.stop().animate({ scrollTop: 0 }, 500, 'swing');
  });
  // END SCROLL TOP


  // MENU DROPDOWN
  $('.ui.dropdown').dropdown({
    direction: 'downward',
    action: 'hide'
  });
  // END MENU DROPDOWN

  // DROPDOWN
  $('.ui.dropdown.cont').dropdown({
    direction: 'downward'
  });
  // END DROPDOWN

  // UI SLIDER
  (function () {
    var sliders = document.querySelectorAll('.ui-slider');

    var _loop = function _loop(i) {
      var slider = noUiSlider.create(sliders[i], {
        start: 40,
        connect: "lower",
        range: {
          min: 0,
          max: 100
        }
      });

      sliders[i].noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
        sliders[i].nextElementSibling.innerHTML = Math.round(positions[handle]) + '%';
      });
    };

    for (var i = 0; i < sliders.length; i++) {
      _loop(i);
    }
  })();
  // END UI SLIDER


  (function () {
    var header = $('.header');
    var prevScrollTop = 0;

    $(window).on('scroll', function () {
      var scrollTop = $(window).scrollTop();

      if (prevScrollTop < scrollTop && scrollTop > 46) {
        header.addClass('header--scroll');
      } else {
        header.removeClass('header--scroll');
      }

      prevScrollTop = scrollTop;
    });
  })();

  var select = $('.js-example-basic-single');
  select.select2({
    minimumResultsForSearch: -1
  });

  $(window).on('scroll', function () {
    select.select2('close');
  });
});