webpackJsonp([1], [function (e, t, n) {
    var r, i;
    /*!
     * jQuery JavaScript Library v1.12.4
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2016-05-20T17:17Z
     */
    ! function (t, n) {
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function (n, o) {
        function a(e) {
            var t = !!e && "length" in e && e.length,
                n = ge.type(e);
            return "function" !== n && !ge.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function s(e, t, n) {
            if (ge.isFunction(t)) return ge.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n
            });
            if (t.nodeType) return ge.grep(e, function (e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (ke.test(t)) return ge.filter(t, e, n);
                t = ge.filter(t, e)
            }
            return ge.grep(e, function (e) {
                return ge.inArray(e, t) > -1 !== n
            })
        }

        function u(e, t) {
            do {
                e = e[t]
            } while (e && 1 !== e.nodeType);
            return e
        }

        function l(e) {
            var t = {};
            return ge.each(e.match(Le) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function c() {
            se.addEventListener ? (se.removeEventListener("DOMContentLoaded", f), n.removeEventListener("load", f)) : (se.detachEvent("onreadystatechange", f), n.detachEvent("onload", f))
        }

        function f() {
            (se.addEventListener || "load" === n.event.type || "complete" === se.readyState) && (c(), ge.ready())
        }

        function d(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var r = "data-" + t.replace(Oe, "-$1").toLowerCase();
                if ("string" == typeof (n = e.getAttribute(r))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Me.test(n) ? ge.parseJSON(n) : n)
                    } catch (e) {}
                    ge.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function p(e) {
            var t;
            for (t in e)
                if (("data" !== t || !ge.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function h(e, t, n, r) {
            if (_e(e)) {
                var i, o, a = ge.expando,
                    s = e.nodeType,
                    u = s ? ge.cache : e,
                    l = s ? e[a] : e[a] && a;
                if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = ae.pop() || ge.guid++ : a), u[l] || (u[l] = s ? {} : {
                    toJSON: ge.noop
                }), "object" != typeof t && "function" != typeof t || (r ? u[l] = ge.extend(u[l], t) : u[l].data = ge.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ge.camelCase(t)] = n), "string" == typeof t ? null == (i = o[t]) && (i = o[ge.camelCase(t)]) : i = o, i
            }
        }

        function m(e, t, n) {
            if (_e(e)) {
                var r, i, o = e.nodeType,
                    a = o ? ge.cache : e,
                    s = o ? e[ge.expando] : ge.expando;
                if (a[s]) {
                    if (t && (r = n ? a[s] : a[s].data)) {
                        ge.isArray(t) ? t = t.concat(ge.map(t, ge.camelCase)) : t in r ? t = [t] : (t = ge.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                        for (; i--;) delete r[t[i]];
                        if (n ? !p(r) : !ge.isEmptyObject(r)) return
                    }(n || (delete a[s].data, p(a[s]))) && (o ? ge.cleanData([e], !0) : me.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
                }
            }
        }

        function g(e, t, n, r) {
            var i, o = 1,
                a = 20,
                s = r ? function () {
                    return r.cur()
                } : function () {
                    return ge.css(e, t, "")
                },
                u = s(),
                l = n && n[3] || (ge.cssNumber[t] ? "" : "px"),
                c = (ge.cssNumber[t] || "px" !== l && +u) && Re.exec(ge.css(e, t));
            if (c && c[3] !== l) {
                l = l || c[3], n = n || [], c = +u || 1;
                do {
                    o = o || ".5", c /= o, ge.style(e, t, c + l)
                } while (o !== (o = s() / u) && 1 !== o && --a)
            }
            return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
        }

        function v(e) {
            var t = Ue.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function y(e, t) {
            var n, r, i = 0,
                o = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
            if (!o)
                for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || ge.nodeName(r, t) ? o.push(r) : ge.merge(o, y(r, t));
            return void 0 === t || t && ge.nodeName(e, t) ? ge.merge([e], o) : o
        }

        function x(e, t) {
            for (var n, r = 0; null != (n = e[r]); r++) ge._data(n, "globalEval", !t || ge._data(t[r], "globalEval"))
        }

        function b(e) {
            Ie.test(e.type) && (e.defaultChecked = e.checked)
        }

        function w(e, t, n, r, i) {
            for (var o, a, s, u, l, c, f, d = e.length, p = v(t), h = [], m = 0; m < d; m++)
                if ((a = e[m]) || 0 === a)
                    if ("object" === ge.type(a)) ge.merge(h, a.nodeType ? [a] : a);
                    else if (Je.test(a)) {
                for (u = u || p.appendChild(t.createElement("div")), l = ($e.exec(a) || ["", ""])[1].toLowerCase(), f = Ve[l] || Ve._default, u.innerHTML = f[1] + ge.htmlPrefilter(a) + f[2], o = f[0]; o--;) u = u.lastChild;
                if (!me.leadingWhitespace && Xe.test(a) && h.push(t.createTextNode(Xe.exec(a)[0])), !me.tbody)
                    for (a = "table" !== l || Ye.test(a) ? "<table>" !== f[1] || Ye.test(a) ? 0 : u : u.firstChild, o = a && a.childNodes.length; o--;) ge.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
                for (ge.merge(h, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
                u = p.lastChild
            } else h.push(t.createTextNode(a));
            for (u && p.removeChild(u), me.appendChecked || ge.grep(y(h, "input"), b), m = 0; a = h[m++];)
                if (r && ge.inArray(a, r) > -1) i && i.push(a);
                else if (s = ge.contains(a.ownerDocument, a), u = y(p.appendChild(a), "script"), s && x(u), n)
                for (o = 0; a = u[o++];) ze.test(a.type || "") && n.push(a);
            return u = null, p
        }

        function T() {
            return !0
        }

        function C() {
            return !1
        }

        function E() {
            try {
                return se.activeElement
            } catch (e) {}
        }

        function N(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
                "string" != typeof n && (r = r || n, n = void 0);
                for (s in t) N(e, s, n, r, t[s], o);
                return e
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = C;
            else if (!i) return e;
            return 1 === o && (a = i, i = function (e) {
                return ge().off(e), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = ge.guid++)), e.each(function () {
                ge.event.add(this, t, i, r, n)
            })
        }

        function k(e, t) {
            return ge.nodeName(e, "table") && ge.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function S(e) {
            return e.type = (null !== ge.find.attr(e, "type")) + "/" + e.type, e
        }

        function A(e) {
            var t = at.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function D(e, t) {
            if (1 === t.nodeType && ge.hasData(e)) {
                var n, r, i, o = ge._data(e),
                    a = ge._data(t, o),
                    s = o.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (r = 0, i = s[n].length; r < i; r++) ge.event.add(t, n, s[n][r])
                }
                a.data && (a.data = ge.extend({}, a.data))
            }
        }

        function j(e, t) {
            var n, r, i;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !me.noCloneEvent && t[ge.expando]) {
                    i = ge._data(t);
                    for (r in i.events) ge.removeEvent(t, r, i.handle);
                    t.removeAttribute(ge.expando)
                }
                "script" === n && t.text !== e.text ? (S(t).text = e.text, A(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), me.html5Clone && e.innerHTML && !ge.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ie.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }

        function L(e, t, n, r) {
            t = le.apply([], t);
            var i, o, a, s, u, l, c = 0,
                f = e.length,
                d = f - 1,
                p = t[0],
                h = ge.isFunction(p);
            if (h || f > 1 && "string" == typeof p && !me.checkClone && ot.test(p)) return e.each(function (i) {
                var o = e.eq(i);
                h && (t[0] = p.call(this, i, o.html())), L(o, t, n, r)
            });
            if (f && (l = w(t, e[0].ownerDocument, !1, e, r), i = l.firstChild, 1 === l.childNodes.length && (l = i), i || r)) {
                for (s = ge.map(y(l, "script"), S), a = s.length; c < f; c++) o = l, c !== d && (o = ge.clone(o, !0, !0), a && ge.merge(s, y(o, "script"))), n.call(e[c], o, c);
                if (a)
                    for (u = s[s.length - 1].ownerDocument, ge.map(s, A), c = 0; c < a; c++) o = s[c], ze.test(o.type || "") && !ge._data(o, "globalEval") && ge.contains(u, o) && (o.src ? ge._evalUrl && ge._evalUrl(o.src) : ge.globalEval((o.text || o.textContent || o.innerHTML || "").replace(st, "")));
                l = i = null
            }
            return e
        }

        function H(e, t, n) {
            for (var r, i = t ? ge.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ge.cleanData(y(r)), r.parentNode && (n && ge.contains(r.ownerDocument, r) && x(y(r, "script")), r.parentNode.removeChild(r));
            return e
        }

        function q(e, t) {
            var n = ge(t.createElement(e)).appendTo(t.body),
                r = ge.css(n[0], "display");
            return n.detach(), r
        }

        function _(e) {
            var t = se,
                n = ft[e];
            return n || (n = q(e, t), "none" !== n && n || (ct = (ct || ge("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (ct[0].contentWindow || ct[0].contentDocument).document, t.write(), t.close(), n = q(e, t), ct.detach()), ft[e] = n), n
        }

        function M(e, t) {
            return {
                get: function () {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function O(e) {
            if (e in kt) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Nt.length; n--;)
                if ((e = Nt[n] + t) in kt) return e
        }

        function F(e, t) {
            for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) r = e[a], r.style && (o[a] = ge._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Be(r) && (o[a] = ge._data(r, "olddisplay", _(r.nodeName)))) : (i = Be(r), (n && "none" !== n || !i) && ge._data(r, "olddisplay", i ? n : ge.css(r, "display"))));
            for (a = 0; a < s; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function R(e, t, n) {
            var r = Tt.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }

        function P(e, t, n, r, i) {
            for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += ge.css(e, n + Pe[o], !0, i)), r ? ("content" === n && (a -= ge.css(e, "padding" + Pe[o], !0, i)), "margin" !== n && (a -= ge.css(e, "border" + Pe[o] + "Width", !0, i))) : (a += ge.css(e, "padding" + Pe[o], !0, i), "padding" !== n && (a += ge.css(e, "border" + Pe[o] + "Width", !0, i)));
            return a
        }

        function B(e, t, n) {
            var r = !0,
                i = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = gt(e),
                a = me.boxSizing && "border-box" === ge.css(e, "boxSizing", !1, o);
            if (i <= 0 || null == i) {
                if (i = vt(e, t, o), (i < 0 || null == i) && (i = e.style[t]), pt.test(i)) return i;
                r = a && (me.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + P(e, t, n || (a ? "border" : "content"), r, o) + "px"
        }

        function W(e, t, n, r, i) {
            return new W.prototype.init(e, t, n, r, i)
        }

        function I() {
            return n.setTimeout(function () {
                St = void 0
            }), St = ge.now()
        }

        function $(e, t) {
            var n, r = {
                    height: e
                },
                i = 0;
            for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Pe[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function z(e, t, n) {
            for (var r, i = (V.tweeners[t] || []).concat(V.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                if (r = i[o].call(n, t, e)) return r
        }

        function X(e, t, n) {
            var r, i, o, a, s, u, l, c = this,
                f = {},
                d = e.style,
                p = e.nodeType && Be(e),
                h = ge._data(e, "fxshow");
            n.queue || (s = ge._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
                s.unqueued || u()
            }), s.unqueued++, c.always(function () {
                c.always(function () {
                    s.unqueued--, ge.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = ge.css(e, "display"), "inline" === ("none" === l ? ge._data(e, "olddisplay") || _(e.nodeName) : l) && "none" === ge.css(e, "float") && (me.inlineBlockNeedsLayout && "inline" !== _(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", me.shrinkWrapBlocks() || c.always(function () {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (r in t)
                if (i = t[r], Dt.exec(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
                        if ("show" !== i || !h || void 0 === h[r]) continue;
                        p = !0
                    }
                    f[r] = h && h[r] || ge.style(e, r)
                } else l = void 0;
            if (ge.isEmptyObject(f)) "inline" === ("none" === l ? _(e.nodeName) : l) && (d.display = l);
            else {
                h ? "hidden" in h && (p = h.hidden) : h = ge._data(e, "fxshow", {}), o && (h.hidden = !p), p ? ge(e).show() : c.done(function () {
                    ge(e).hide()
                }), c.done(function () {
                    var t;
                    ge._removeData(e, "fxshow");
                    for (t in f) ge.style(e, t, f[t])
                });
                for (r in f) a = z(p ? h[r] : 0, r, c), r in h || (h[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }

        function U(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (r = ge.camelCase(n), i = t[r], o = e[n], ge.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ge.cssHooks[r]) && "expand" in a) {
                    o = a.expand(o), delete e[r];
                    for (n in o) n in e || (e[n] = o[n], t[n] = i)
                } else t[r] = i
        }

        function V(e, t, n) {
            var r, i, o = 0,
                a = V.prefilters.length,
                s = ge.Deferred().always(function () {
                    delete u.elem
                }),
                u = function () {
                    if (i) return !1;
                    for (var t = St || I(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++) l.tweens[a].run(o);
                    return s.notifyWith(e, [l, o, n]), o < 1 && u ? n : (s.resolveWith(e, [l]), !1)
                },
                l = s.promise({
                    elem: e,
                    props: ge.extend({}, t),
                    opts: ge.extend(!0, {
                        specialEasing: {},
                        easing: ge.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: St || I(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var r = ge.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r), r
                    },
                    stop: function (t) {
                        var n = 0,
                            r = t ? l.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; n < r; n++) l.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                    }
                }),
                c = l.props;
            for (U(c, l.opts.specialEasing); o < a; o++)
                if (r = V.prefilters[o].call(l, e, c, l.opts)) return ge.isFunction(r.stop) && (ge._queueHooks(l.elem, l.opts.queue).stop = ge.proxy(r.stop, r)), r;
            return ge.map(c, z, l), ge.isFunction(l.opts.start) && l.opts.start.call(e, l), ge.fx.timer(ge.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }

        function J(e) {
            return ge.attr(e, "class") || ""
        }

        function Y(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                    o = t.toLowerCase().match(Le) || [];
                if (ge.isFunction(n))
                    for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function G(e, t, n, r) {
            function i(s) {
                var u;
                return o[s] = !0, ge.each(e[s] || [], function (e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
                }), u
            }
            var o = {},
                a = e === en;
            return i(t.dataTypes[0]) || !o["*"] && i("*")
        }

        function Q(e, t) {
            var n, r, i = ge.ajaxSettings.flatOptions || {};
            for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
            return n && ge.extend(!0, e, n), e
        }

        function K(e, t, n) {
            for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (a in s)
                    if (s[a] && s[a].test(i)) {
                        u.unshift(a);
                        break
                    } if (u[0] in n) o = u[0];
            else {
                for (a in n) {
                    if (!u[0] || e.converters[a + " " + u[0]]) {
                        o = a;
                        break
                    }
                    r || (r = a)
                }
                o = o || r
            }
            if (o) return o !== u[0] && u.unshift(o), n[o]
        }

        function Z(e, t, n, r) {
            var i, o, a, s, u, l = {},
                c = e.dataTypes.slice();
            if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
            for (o = c.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                    if ("*" === o) o = u;
                    else if ("*" !== u && u !== o) {
                if (!(a = l[u + " " + o] || l["* " + o]))
                    for (i in l)
                        if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                            break
                        } if (!0 !== a)
                    if (a && e.throws) t = a(t);
                    else try {
                        t = a(t)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: a ? e : "No conversion from " + u + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function ee(e) {
            return e.style && e.style.display || ge.css(e, "display")
        }

        function te(e) {
            if (!ge.contains(e.ownerDocument || se, e)) return !0;
            for (; e && 1 === e.nodeType;) {
                if ("none" === ee(e) || "hidden" === e.type) return !0;
                e = e.parentNode
            }
            return !1
        }

        function ne(e, t, n, r) {
            var i;
            if (ge.isArray(t)) ge.each(t, function (t, i) {
                n || an.test(e) ? r(e, i) : ne(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
            else if (n || "object" !== ge.type(t)) r(e, t);
            else
                for (i in t) ne(e + "[" + i + "]", t[i], n, r)
        }

        function re() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        }

        function ie() {
            try {
                return new n.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function oe(e) {
            return ge.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var ae = [],
            se = n.document,
            ue = ae.slice,
            le = ae.concat,
            ce = ae.push,
            fe = ae.indexOf,
            de = {},
            pe = de.toString,
            he = de.hasOwnProperty,
            me = {},
            ge = function (e, t) {
                return new ge.fn.init(e, t)
            },
            ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ye = /^-ms-/,
            xe = /-([\da-z])/gi,
            be = function (e, t) {
                return t.toUpperCase()
            };
        ge.fn = ge.prototype = {
            jquery: "1.12.4",
            constructor: ge,
            selector: "",
            length: 0,
            toArray: function () {
                return ue.call(this)
            },
            get: function (e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : ue.call(this)
            },
            pushStack: function (e) {
                var t = ge.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function (e) {
                return ge.each(this, e)
            },
            map: function (e) {
                return this.pushStack(ge.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function () {
                return this.pushStack(ue.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: ce,
            sort: ae.sort,
            splice: ae.splice
        }, ge.extend = ge.fn.extend = function () {
            var e, t, n, r, i, o, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || ge.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                if (null != (i = arguments[s]))
                    for (r in i) e = a[r], n = i[r], a !== n && (l && n && (ge.isPlainObject(n) || (t = ge.isArray(n))) ? (t ? (t = !1, o = e && ge.isArray(e) ? e : []) : o = e && ge.isPlainObject(e) ? e : {}, a[r] = ge.extend(l, o, n)) : void 0 !== n && (a[r] = n));
            return a
        }, ge.extend({
            expando: "jQuery" + ("1.12.4" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () {},
            isFunction: function (e) {
                return "function" === ge.type(e)
            },
            isArray: Array.isArray || function (e) {
                return "array" === ge.type(e)
            },
            isWindow: function (e) {
                return null != e && e == e.window
            },
            isNumeric: function (e) {
                var t = e && e.toString();
                return !ge.isArray(e) && t - parseFloat(t) + 1 >= 0
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function (e) {
                var t;
                if (!e || "object" !== ge.type(e) || e.nodeType || ge.isWindow(e)) return !1;
                try {
                    if (e.constructor && !he.call(e, "constructor") && !he.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                if (!me.ownFirst)
                    for (t in e) return he.call(e, t);
                for (t in e);
                return void 0 === t || he.call(e, t)
            },
            type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? de[pe.call(e)] || "object" : typeof e
            },
            globalEval: function (e) {
                e && ge.trim(e) && (n.execScript || function (e) {
                    n.eval.call(n, e)
                })(e)
            },
            camelCase: function (e) {
                return e.replace(ye, "ms-").replace(xe, be)
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function (e, t) {
                var n, r = 0;
                if (a(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(ve, "")
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (a(Object(e)) ? ge.merge(n, "string" == typeof e ? [e] : e) : ce.call(n, e)), n
            },
            inArray: function (e, t, n) {
                var r;
                if (t) {
                    if (fe) return fe.call(t, e, n);
                    for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n;) e[i++] = t[r++];
                if (n !== n)
                    for (; void 0 !== t[r];) e[i++] = t[r++];
                return e.length = i, e
            },
            grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                return r
            },
            map: function (e, t, n) {
                var r, i, o = 0,
                    s = [];
                if (a(e))
                    for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
                else
                    for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                return le.apply([], s)
            },
            guid: 1,
            proxy: function (e, t) {
                var n, r, i;
                if ("string" == typeof t && (i = e[t], t = e, e = i), ge.isFunction(e)) return n = ue.call(arguments, 2), r = function () {
                    return e.apply(t || this, n.concat(ue.call(arguments)))
                }, r.guid = e.guid = e.guid || ge.guid++, r
            },
            now: function () {
                return +new Date
            },
            support: me
        }), "function" == typeof Symbol && (ge.fn[Symbol.iterator] = ae[Symbol.iterator]), ge.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            de["[object " + t + "]"] = t.toLowerCase()
        });
        var we =
            /*!
             * Sizzle CSS Selector Engine v2.2.1
             * http://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2015-10-17
             */
            function (e) {
                function t(e, t, n, r) {
                    var i, o, a, s, l, f, d, p, h = t && t.ownerDocument,
                        m = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
                    if (!r && ((t ? t.ownerDocument || t : R) !== j && D(t), t = t || j, H)) {
                        if (11 !== m && (f = me.exec(e)))
                            if (i = f[1]) {
                                if (9 === m) {
                                    if (!(a = t.getElementById(i))) return n;
                                    if (a.id === i) return n.push(a), n
                                } else if (h && (a = h.getElementById(i)) && O(t, a) && a.id === i) return n.push(a), n
                            } else {
                                if (f[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                                if ((i = f[3]) && x.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(i)), n
                            } if (x.qsa && !$[e + " "] && (!q || !q.test(e))) {
                            if (1 !== m) h = t, p = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((s = t.getAttribute("id")) ? s = s.replace(ve, "\\$&") : t.setAttribute("id", s = F), d = C(e), o = d.length, l = ce.test(s) ? "#" + s : "[id='" + s + "']"; o--;) d[o] = l + " " + c(d[o]);
                                p = d.join(","), h = ge.test(e) && u(t.parentNode) || t
                            }
                            if (p) try {
                                return G.apply(n, h.querySelectorAll(p)), n
                            } catch (e) {} finally {
                                s === F && t.removeAttribute("id")
                            }
                        }
                    }
                    return N(e.replace(oe, "$1"), t, n, r)
                }

                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > b.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }
                    var t = [];
                    return e
                }

                function r(e) {
                    return e[F] = !0, e
                }

                function i(e) {
                    var t = j.createElement("div");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function o(e, t) {
                    for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
                }

                function a(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return r(function (t) {
                        return t = +t, r(function (n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function u(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }

                function l() {}

                function c(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function f(e, t, n) {
                    var r = t.dir,
                        i = n && "parentNode" === r,
                        o = B++;
                    return t.first ? function (t, n, o) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || i) return e(t, n, o)
                    } : function (t, n, a) {
                        var s, u, l, c = [P, o];
                        if (a) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || i) {
                                    if (l = t[F] || (t[F] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = u[r]) && s[0] === P && s[1] === o) return c[2] = s[2];
                                    if (u[r] = c, c[2] = e(t, n, a)) return !0
                                }
                    }
                }

                function d(e) {
                    return e.length > 1 ? function (t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function p(e, n, r) {
                    for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
                    return r
                }

                function h(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                    return a
                }

                function m(e, t, n, i, o, a) {
                    return i && !i[F] && (i = m(i)), o && !o[F] && (o = m(o, a)), r(function (r, a, s, u) {
                        var l, c, f, d = [],
                            m = [],
                            g = a.length,
                            v = r || p(t || "*", s.nodeType ? [s] : s, []),
                            y = !e || !r && t ? v : h(v, d, e, s, u),
                            x = n ? o || (r ? e : g || i) ? [] : a : y;
                        if (n && n(y, x, s, u), i)
                            for (l = h(x, m), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (x[m[c]] = !(y[m[c]] = f));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
                                    o(null, x = [], l, u)
                                }
                                for (c = x.length; c--;)(f = x[c]) && (l = o ? K(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f))
                            }
                        } else x = h(x === a ? x.splice(g, x.length) : x), o ? o(null, a, x, u) : G.apply(a, x)
                    })
                }

                function g(e) {
                    for (var t, n, r, i = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = f(function (e) {
                            return e === t
                        }, a, !0), l = f(function (e) {
                            return K(t, e) > -1
                        }, a, !0), p = [function (e, n, r) {
                            var i = !o && (r || n !== k) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                            return t = null, i
                        }]; s < i; s++)
                        if (n = b.relative[e[s].type]) p = [f(d(p), n)];
                        else {
                            if (n = b.filter[e[s].type].apply(null, e[s].matches), n[F]) {
                                for (r = ++s; r < i && !b.relative[e[r].type]; r++);
                                return m(s > 1 && d(p), s > 1 && c(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(oe, "$1"), n, s < r && g(e.slice(s, r)), r < i && g(e = e.slice(r)), r < i && c(e))
                            }
                            p.push(n)
                        } return d(p)
                }

                function v(e, n) {
                    var i = n.length > 0,
                        o = e.length > 0,
                        a = function (r, a, s, u, l) {
                            var c, f, d, p = 0,
                                m = "0",
                                g = r && [],
                                v = [],
                                y = k,
                                x = r || o && b.find.TAG("*", l),
                                w = P += null == y ? 1 : Math.random() || .1,
                                T = x.length;
                            for (l && (k = a === j || a || l); m !== T && null != (c = x[m]); m++) {
                                if (o && c) {
                                    for (f = 0, a || c.ownerDocument === j || (D(c), s = !H); d = e[f++];)
                                        if (d(c, a || j, s)) {
                                            u.push(c);
                                            break
                                        } l && (P = w)
                                }
                                i && ((c = !d && c) && p--, r && g.push(c))
                            }
                            if (p += m, i && m !== p) {
                                for (f = 0; d = n[f++];) d(g, v, a, s);
                                if (r) {
                                    if (p > 0)
                                        for (; m--;) g[m] || v[m] || (v[m] = J.call(u));
                                    v = h(v)
                                }
                                G.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                            }
                            return l && (P = w, k = y), g
                        };
                    return i ? r(a) : a
                }
                var y, x, b, w, T, C, E, N, k, S, A, D, j, L, H, q, _, M, O, F = "sizzle" + 1 * new Date,
                    R = e.document,
                    P = 0,
                    B = 0,
                    W = n(),
                    I = n(),
                    $ = n(),
                    z = function (e, t) {
                        return e === t && (A = !0), 0
                    },
                    X = 1 << 31,
                    U = {}.hasOwnProperty,
                    V = [],
                    J = V.pop,
                    Y = V.push,
                    G = V.push,
                    Q = V.slice,
                    K = function (e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ee = "[\\x20\\t\\r\\n\\f]",
                    te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
                    re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
                    ie = new RegExp(ee + "+", "g"),
                    oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                    ae = new RegExp("^" + ee + "*," + ee + "*"),
                    se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
                    ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
                    le = new RegExp(re),
                    ce = new RegExp("^" + te + "$"),
                    fe = {
                        ID: new RegExp("^#(" + te + ")"),
                        CLASS: new RegExp("^\\.(" + te + ")"),
                        TAG: new RegExp("^(" + te + "|[*])"),
                        ATTR: new RegExp("^" + ne),
                        PSEUDO: new RegExp("^" + re),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + Z + ")$", "i"),
                        needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
                    },
                    de = /^(?:input|select|textarea|button)$/i,
                    pe = /^h\d$/i,
                    he = /^[^{]+\{\s*\[native \w/,
                    me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ge = /[+~]/,
                    ve = /'|\\/g,
                    ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
                    xe = function (e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    be = function () {
                        D()
                    };
                try {
                    G.apply(V = Q.call(R.childNodes), R.childNodes), V[R.childNodes.length].nodeType
                } catch (e) {
                    G = {
                        apply: V.length ? function (e, t) {
                            Y.apply(e, Q.call(t))
                        } : function (e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }
                x = t.support = {}, T = t.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, D = t.setDocument = function (e) {
                    var t, n, r = e ? e.ownerDocument || e : R;
                    return r !== j && 9 === r.nodeType && r.documentElement ? (j = r, L = j.documentElement, H = !T(j), (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", be, !1) : n.attachEvent && n.attachEvent("onunload", be)), x.attributes = i(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), x.getElementsByTagName = i(function (e) {
                        return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length
                    }), x.getElementsByClassName = he.test(j.getElementsByClassName), x.getById = i(function (e) {
                        return L.appendChild(e).id = F, !j.getElementsByName || !j.getElementsByName(F).length
                    }), x.getById ? (b.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && H) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }, b.filter.ID = function (e) {
                        var t = e.replace(ye, xe);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete b.find.ID, b.filter.ID = function (e) {
                        var t = e.replace(ye, xe);
                        return function (e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), b.find.TAG = x.getElementsByTagName ? function (e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, b.find.CLASS = x.getElementsByClassName && function (e, t) {
                        if (void 0 !== t.getElementsByClassName && H) return t.getElementsByClassName(e)
                    }, _ = [], q = [], (x.qsa = he.test(j.querySelectorAll)) && (i(function (e) {
                        L.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + F + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || q.push(".#.+[+~]")
                    }), i(function (e) {
                        var t = j.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
                    })), (x.matchesSelector = he.test(M = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function (e) {
                        x.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), _.push("!=", re)
                    }), q = q.length && new RegExp(q.join("|")), _ = _.length && new RegExp(_.join("|")), t = he.test(L.compareDocumentPosition), O = t || he.test(L.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function (e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, z = t ? function (e, t) {
                        if (e === t) return A = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === j || e.ownerDocument === R && O(R, e) ? -1 : t === j || t.ownerDocument === R && O(R, t) ? 1 : S ? K(S, e) - K(S, t) : 0 : 4 & n ? -1 : 1)
                    } : function (e, t) {
                        if (e === t) return A = !0, 0;
                        var n, r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            s = [e],
                            u = [t];
                        if (!i || !o) return e === j ? -1 : t === j ? 1 : i ? -1 : o ? 1 : S ? K(S, e) - K(S, t) : 0;
                        if (i === o) return a(e, t);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (n = t; n = n.parentNode;) u.unshift(n);
                        for (; s[r] === u[r];) r++;
                        return r ? a(s[r], u[r]) : s[r] === R ? -1 : u[r] === R ? 1 : 0
                    }, j) : j
                }, t.matches = function (e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function (e, n) {
                    if ((e.ownerDocument || e) !== j && D(e), n = n.replace(ue, "='$1']"), x.matchesSelector && H && !$[n + " "] && (!_ || !_.test(n)) && (!q || !q.test(n))) try {
                        var r = M.call(e, n);
                        if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (e) {}
                    return t(n, j, null, [e]).length > 0
                }, t.contains = function (e, t) {
                    return (e.ownerDocument || e) !== j && D(e), O(e, t)
                }, t.attr = function (e, t) {
                    (e.ownerDocument || e) !== j && D(e);
                    var n = b.attrHandle[t.toLowerCase()],
                        r = n && U.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
                    return void 0 !== r ? r : x.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, t.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function (e) {
                    var t, n = [],
                        r = 0,
                        i = 0;
                    if (A = !x.detectDuplicates, S = !x.sortStable && e.slice(0), e.sort(z), A) {
                        for (; t = e[i++];) t === e[i] && (r = n.push(i));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return S = null, e
                }, w = t.getText = function (e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
                        } else if (3 === i || 4 === i) return e.nodeValue
                    } else
                        for (; t = e[r++];) n += w(t);
                    return n
                }, b = t.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: fe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(ye, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        },
                        PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(ye, xe).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function (e) {
                            var t = W[e + " "];
                            return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (e, n, r) {
                            return function (i) {
                                var o = t.attr(i, e);
                                return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                            }
                        },
                        CHILD: function (e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === i ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, u) {
                                var l, c, f, d, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    y = !u && !s,
                                    x = !1;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (d = t; d = d[m];)
                                                if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            h = m = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                        for (d = g, f = d[F] || (d[F] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === P && l[1], x = p && l[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (x = p = 0) || h.pop();)
                                            if (1 === d.nodeType && ++x && d === t) {
                                                c[e] = [P, p, x];
                                                break
                                            }
                                    } else if (y && (d = t, f = d[F] || (d[F] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === P && l[1], x = p), !1 === x)
                                        for (;
                                            (d = ++p && d && d[m] || (x = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++x || (y && (f = d[F] || (d[F] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [P, x]), d !== t)););
                                    return (x -= i) === r || x % r == 0 && x / r >= 0
                                }
                            }
                        },
                        PSEUDO: function (e, n) {
                            var i, o = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return o[F] ? o(n) : o.length > 1 ? (i = [e, e, "", n], b.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                                for (var r, i = o(e, n), a = i.length; a--;) r = K(e, i[a]), e[r] = !(t[r] = i[a])
                            }) : function (e) {
                                return o(e, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: r(function (e) {
                            var t = [],
                                n = [],
                                i = E(e.replace(oe, "$1"));
                            return i[F] ? r(function (e, t, n, r) {
                                for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function (e, r, o) {
                                return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: r(function (e) {
                            return function (n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: r(function (e) {
                            return e = e.replace(ye, xe),
                                function (t) {
                                    return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                                }
                        }),
                        lang: r(function (e) {
                            return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, xe).toLowerCase(),
                                function (t) {
                                    var n;
                                    do {
                                        if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function (e) {
                            return e === L
                        },
                        focus: function (e) {
                            return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function (e) {
                            return !1 === e.disabled
                        },
                        disabled: function (e) {
                            return !0 === e.disabled
                        },
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function (e) {
                            return !b.pseudos.empty(e)
                        },
                        header: function (e) {
                            return pe.test(e.nodeName)
                        },
                        input: function (e) {
                            return de.test(e.nodeName)
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: s(function () {
                            return [0]
                        }),
                        last: s(function (e, t) {
                            return [t - 1]
                        }),
                        eq: s(function (e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: s(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: s(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: s(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                            return e
                        }),
                        gt: s(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }, b.pseudos.nth = b.pseudos.eq;
                for (y in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) b.pseudos[y] = function (e) {
                    return function (t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }(y);
                for (y in {
                        submit: !0,
                        reset: !0
                    }) b.pseudos[y] = function (e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }(y);
                return l.prototype = b.filters = b.pseudos, b.setFilters = new l, C = t.tokenize = function (e, n) {
                    var r, i, o, a, s, u, l, c = I[e + " "];
                    if (c) return n ? 0 : c.slice(0);
                    for (s = e, u = [], l = b.preFilter; s;) {
                        r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = se.exec(s)) && (r = i.shift(), o.push({
                            value: r,
                            type: i[0].replace(oe, " ")
                        }), s = s.slice(r.length));
                        for (a in b.filter) !(i = fe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                            value: r,
                            type: a,
                            matches: i
                        }), s = s.slice(r.length));
                        if (!r) break
                    }
                    return n ? s.length : s ? t.error(e) : I(e, u).slice(0)
                }, E = t.compile = function (e, t) {
                    var n, r = [],
                        i = [],
                        o = $[e + " "];
                    if (!o) {
                        for (t || (t = C(e)), n = t.length; n--;) o = g(t[n]), o[F] ? r.push(o) : i.push(o);
                        o = $(e, v(i, r)), o.selector = e
                    }
                    return o
                }, N = t.select = function (e, t, n, r) {
                    var i, o, a, s, l, f = "function" == typeof e && e,
                        d = !r && C(e = f.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && H && b.relative[o[1].type]) {
                            if (!(t = (b.find.ID(a.matches[0].replace(ye, xe), t) || [])[0])) return n;
                            f && (t = t.parentNode), e = e.slice(o.shift().value.length)
                        }
                        for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]);)
                            if ((l = b.find[s]) && (r = l(a.matches[0].replace(ye, xe), ge.test(o[0].type) && u(t.parentNode) || t))) {
                                if (o.splice(i, 1), !(e = r.length && c(o))) return G.apply(n, r), n;
                                break
                            }
                    }
                    return (f || E(e, d))(r, t, !H, n, !t || ge.test(e) && u(t.parentNode) || t), n
                }, x.sortStable = F.split("").sort(z).join("") === F, x.detectDuplicates = !!A, D(), x.sortDetached = i(function (e) {
                    return 1 & e.compareDocumentPosition(j.createElement("div"))
                }), i(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), x.attributes && i(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || o("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), i(function (e) {
                    return null == e.getAttribute("disabled")
                }) || o(Z, function (e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), t
            }(n);
        ge.find = we, ge.expr = we.selectors, ge.expr[":"] = ge.expr.pseudos, ge.uniqueSort = ge.unique = we.uniqueSort, ge.text = we.getText, ge.isXMLDoc = we.isXML, ge.contains = we.contains;
        var Te = function (e, t, n) {
                for (var r = [], i = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (i && ge(e).is(n)) break;
                        r.push(e)
                    } return r
            },
            Ce = function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            Ee = ge.expr.match.needsContext,
            Ne = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            ke = /^.[^:#\[\.,]*$/;
        ge.filter = function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ge.find.matchesSelector(r, e) ? [r] : [] : ge.find.matches(e, ge.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, ge.fn.extend({
            find: function (e) {
                var t, n = [],
                    r = this,
                    i = r.length;
                if ("string" != typeof e) return this.pushStack(ge(e).filter(function () {
                    for (t = 0; t < i; t++)
                        if (ge.contains(r[t], this)) return !0
                }));
                for (t = 0; t < i; t++) ge.find(e, r[t], n);
                return n = this.pushStack(i > 1 ? ge.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function (e) {
                return this.pushStack(s(this, e || [], !1))
            },
            not: function (e) {
                return this.pushStack(s(this, e || [], !0))
            },
            is: function (e) {
                return !!s(this, "string" == typeof e && Ee.test(e) ? ge(e) : e || [], !1).length
            }
        });
        var Se, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (ge.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || Se, "string" == typeof e) {
                if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ae.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof ge ? t[0] : t, ge.merge(this, ge.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), Ne.test(r[1]) && ge.isPlainObject(t))
                        for (r in t) ge.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                if ((i = se.getElementById(r[2])) && i.parentNode) {
                    if (i.id !== r[2]) return Se.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = se, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ge.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ge) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ge.makeArray(e, this))
        }).prototype = ge.fn, Se = ge(se);
        var De = /^(?:parents|prev(?:Until|All))/,
            je = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ge.fn.extend({
            has: function (e) {
                var t, n = ge(e, this),
                    r = n.length;
                return this.filter(function () {
                    for (t = 0; t < r; t++)
                        if (ge.contains(this, n[t])) return !0
                })
            },
            closest: function (e, t) {
                for (var n, r = 0, i = this.length, o = [], a = Ee.test(e) || "string" != typeof e ? ge(e, t || this.context) : 0; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ge.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? ge.uniqueSort(o) : o)
            },
            index: function (e) {
                return e ? "string" == typeof e ? ge.inArray(this[0], ge(e)) : ge.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (e, t) {
                return this.pushStack(ge.uniqueSort(ge.merge(this.get(), ge(e, t))))
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ge.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return Te(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return Te(e, "parentNode", n)
            },
            next: function (e) {
                return u(e, "nextSibling")
            },
            prev: function (e) {
                return u(e, "previousSibling")
            },
            nextAll: function (e) {
                return Te(e, "nextSibling")
            },
            prevAll: function (e) {
                return Te(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return Te(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return Te(e, "previousSibling", n)
            },
            siblings: function (e) {
                return Ce((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return Ce(e.firstChild)
            },
            contents: function (e) {
                return ge.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ge.merge([], e.childNodes)
            }
        }, function (e, t) {
            ge.fn[e] = function (n, r) {
                var i = ge.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ge.filter(r, i)), this.length > 1 && (je[e] || (i = ge.uniqueSort(i)), De.test(e) && (i = i.reverse())), this.pushStack(i)
            }
        });
        var Le = /\S+/g;
        ge.Callbacks = function (e) {
            e = "string" == typeof e ? l(e) : ge.extend({}, e);
            var t, n, r, i, o = [],
                a = [],
                s = -1,
                u = function () {
                    for (i = e.once, r = t = !0; a.length; s = -1)
                        for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                    e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                },
                c = {
                    add: function () {
                        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                            ge.each(n, function (n, r) {
                                ge.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== ge.type(r) && t(r)
                            })
                        }(arguments), n && !t && u()), this
                    },
                    remove: function () {
                        return ge.each(arguments, function (e, t) {
                            for (var n;
                                (n = ge.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                        }), this
                    },
                    has: function (e) {
                        return e ? ge.inArray(e, o) > -1 : o.length > 0
                    },
                    empty: function () {
                        return o && (o = []), this
                    },
                    disable: function () {
                        return i = a = [], o = n = "", this
                    },
                    disabled: function () {
                        return !o
                    },
                    lock: function () {
                        return i = !0, n || c.disable(), this
                    },
                    locked: function () {
                        return !!i
                    },
                    fireWith: function (e, n) {
                        return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this
                    },
                    fire: function () {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!r
                    }
                };
            return c
        }, ge.extend({
            Deferred: function (e) {
                var t = [
                        ["resolve", "done", ge.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ge.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ge.Callbacks("memory")]
                    ],
                    n = "pending",
                    r = {
                        state: function () {
                            return n
                        },
                        always: function () {
                            return i.done(arguments).fail(arguments), this
                        },
                        then: function () {
                            var e = arguments;
                            return ge.Deferred(function (n) {
                                ge.each(t, function (t, o) {
                                    var a = ge.isFunction(e[t]) && e[t];
                                    i[o[1]](function () {
                                        var e = a && a.apply(this, arguments);
                                        e && ge.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? ge.extend(e, r) : r
                        }
                    },
                    i = {};
                return r.pipe = r.then, ge.each(t, function (e, o) {
                    var a = o[2],
                        s = o[3];
                    r[o[1]] = a.add, s && a.add(function () {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                        return i[o[0] + "With"](this === i ? r : this, arguments), this
                    }, i[o[0] + "With"] = a.fireWith
                }), r.promise(i), e && e.call(i, i), i
            },
            when: function (e) {
                var t, n, r, i = 0,
                    o = ue.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && ge.isFunction(e.promise) ? a : 0,
                    u = 1 === s ? e : ge.Deferred(),
                    l = function (e, n, r) {
                        return function (i) {
                            n[e] = this, r[e] = arguments.length > 1 ? ue.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) o[i] && ge.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --s;
                return s || u.resolveWith(r, o), u.promise()
            }
        });
        var He;
        ge.fn.ready = function (e) {
            return ge.ready.promise().done(e), this
        }, ge.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? ge.readyWait++ : ge.ready(!0)
            },
            ready: function (e) {
                (!0 === e ? --ge.readyWait : ge.isReady) || (ge.isReady = !0, !0 !== e && --ge.readyWait > 0 || (He.resolveWith(se, [ge]), ge.fn.triggerHandler && (ge(se).triggerHandler("ready"), ge(se).off("ready"))))
            }
        }), ge.ready.promise = function (e) {
            if (!He)
                if (He = ge.Deferred(), "complete" === se.readyState || "loading" !== se.readyState && !se.documentElement.doScroll) n.setTimeout(ge.ready);
                else if (se.addEventListener) se.addEventListener("DOMContentLoaded", f), n.addEventListener("load", f);
            else {
                se.attachEvent("onreadystatechange", f), n.attachEvent("onload", f);
                var t = !1;
                try {
                    t = null == n.frameElement && se.documentElement
                } catch (e) {}
                t && t.doScroll && function e() {
                    if (!ge.isReady) {
                        try {
                            t.doScroll("left")
                        } catch (t) {
                            return n.setTimeout(e, 50)
                        }
                        c(), ge.ready()
                    }
                }()
            }
            return He.promise(e)
        }, ge.ready.promise();
        var qe;
        for (qe in ge(me)) break;
        me.ownFirst = "0" === qe, me.inlineBlockNeedsLayout = !1, ge(function () {
                var e, t, n, r;
                (n = se.getElementsByTagName("body")[0]) && n.style && (t = se.createElement("div"), r = se.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", me.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
            }),
            function () {
                var e = se.createElement("div");
                me.deleteExpando = !0;
                try {
                    delete e.test
                } catch (e) {
                    me.deleteExpando = !1
                }
                e = null
            }();
        var _e = function (e) {
                var t = ge.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
            },
            Me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Oe = /([A-Z])/g;
        ge.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function (e) {
                    return !!(e = e.nodeType ? ge.cache[e[ge.expando]] : e[ge.expando]) && !p(e)
                },
                data: function (e, t, n) {
                    return h(e, t, n)
                },
                removeData: function (e, t) {
                    return m(e, t)
                },
                _data: function (e, t, n) {
                    return h(e, t, n, !0)
                },
                _removeData: function (e, t) {
                    return m(e, t, !0)
                }
            }), ge.fn.extend({
                data: function (e, t) {
                    var n, r, i, o = this[0],
                        a = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = ge.data(o), 1 === o.nodeType && !ge._data(o, "parsedAttrs"))) {
                            for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ge.camelCase(r.slice(5)), d(o, r, i[r])));
                            ge._data(o, "parsedAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof e ? this.each(function () {
                        ge.data(this, e)
                    }) : arguments.length > 1 ? this.each(function () {
                        ge.data(this, e, t)
                    }) : o ? d(o, e, ge.data(o, e)) : void 0
                },
                removeData: function (e) {
                    return this.each(function () {
                        ge.removeData(this, e)
                    })
                }
            }), ge.extend({
                queue: function (e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = ge._data(e, t), n && (!r || ge.isArray(n) ? r = ge._data(e, t, ge.makeArray(n)) : r.push(n)), r || []
                },
                dequeue: function (e, t) {
                    t = t || "fx";
                    var n = ge.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        o = ge._queueHooks(e, t),
                        a = function () {
                            ge.dequeue(e, t)
                        };
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
                },
                _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return ge._data(e, n) || ge._data(e, n, {
                        empty: ge.Callbacks("once memory").add(function () {
                            ge._removeData(e, t + "queue"), ge._removeData(e, n)
                        })
                    })
                }
            }), ge.fn.extend({
                queue: function (e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ge.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                        var n = ge.queue(this, e, t);
                        ge._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ge.dequeue(this, e)
                    })
                },
                dequeue: function (e) {
                    return this.each(function () {
                        ge.dequeue(this, e)
                    })
                },
                clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                },
                promise: function (e, t) {
                    var n, r = 1,
                        i = ge.Deferred(),
                        o = this,
                        a = this.length,
                        s = function () {
                            --r || i.resolveWith(o, [o])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = ge._data(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t)
                }
            }),
            function () {
                var e;
                me.shrinkWrapBlocks = function () {
                    if (null != e) return e;
                    e = !1;
                    var t, n, r;
                    return (n = se.getElementsByTagName("body")[0]) && n.style ? (t = se.createElement("div"), r = se.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(se.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
                }
            }();
        var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Re = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
            Pe = ["Top", "Right", "Bottom", "Left"],
            Be = function (e, t) {
                return e = t || e, "none" === ge.css(e, "display") || !ge.contains(e.ownerDocument, e)
            },
            We = function (e, t, n, r, i, o, a) {
                var s = 0,
                    u = e.length,
                    l = null == n;
                if ("object" === ge.type(n)) {
                    i = !0;
                    for (s in n) We(e, t, s, n[s], !0, o, a)
                } else if (void 0 !== r && (i = !0, ge.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                        return l.call(ge(e), n)
                    })), t))
                    for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
            },
            Ie = /^(?:checkbox|radio)$/i,
            $e = /<([\w:-]+)/,
            ze = /^$|\/(?:java|ecma)script/i,
            Xe = /^\s+/,
            Ue = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        ! function () {
            var e = se.createElement("div"),
                t = se.createDocumentFragment(),
                n = se.createElement("input");
            e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", me.leadingWhitespace = 3 === e.firstChild.nodeType, me.tbody = !e.getElementsByTagName("tbody").length, me.htmlSerialize = !!e.getElementsByTagName("link").length, me.html5Clone = "<:nav></:nav>" !== se.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), me.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", me.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = se.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), me.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, me.noCloneEvent = !!e.addEventListener, e[ge.expando] = 1, me.attributes = !e.getAttribute(ge.expando)
        }();
        var Ve = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: me.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;
        var Je = /<|&#?\w+;/,
            Ye = /<tbody/i;
        ! function () {
            var e, t, r = se.createElement("div");
            for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) t = "on" + e, (me[e] = t in n) || (r.setAttribute(t, "t"), me[e] = !1 === r.attributes[t].expando);
            r = null
        }();
        var Ge = /^(?:input|select|textarea)$/i,
            Qe = /^key/,
            Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ze = /^(?:focusinfocus|focusoutblur)$/,
            et = /^([^.]*)(?:\.(.+)|)/;
        ge.event = {
            global: {},
            add: function (e, t, n, r, i) {
                var o, a, s, u, l, c, f, d, p, h, m, g = ge._data(e);
                if (g) {
                    for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = ge.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function (e) {
                            return void 0 === ge || e && ge.event.triggered === e.type ? void 0 : ge.event.dispatch.apply(c.elem, arguments)
                        }, c.elem = e), t = (t || "").match(Le) || [""], s = t.length; s--;) o = et.exec(t[s]) || [], p = m = o[1], h = (o[2] || "").split(".").sort(), p && (l = ge.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = ge.event.special[p] || {}, f = ge.extend({
                        type: p,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && ge.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, u), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, l.setup && !1 !== l.setup.call(e, r, h, c) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), ge.event.global[p] = !0);
                    e = null
                }
            },
            remove: function (e, t, n, r, i) {
                var o, a, s, u, l, c, f, d, p, h, m, g = ge.hasData(e) && ge._data(e);
                if (g && (c = g.events)) {
                    for (t = (t || "").match(Le) || [""], l = t.length; l--;)
                        if (s = et.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                            for (f = ge.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = d.length; o--;) a = d[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
                            u && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || ge.removeEvent(e, p, g.handle), delete c[p])
                        } else
                            for (p in c) ge.event.remove(e, p + t[l], n, r, !0);
                    ge.isEmptyObject(c) && (delete g.handle, ge._removeData(e, "events"))
                }
            },
            trigger: function (e, t, r, i) {
                var o, a, s, u, l, c, f, d = [r || se],
                    p = he.call(e, "type") ? e.type : e,
                    h = he.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = c = r = r || se, 3 !== r.nodeType && 8 !== r.nodeType && !Ze.test(p + ge.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, e = e[ge.expando] ? e : new ge.Event(p, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : ge.makeArray(t, [e]), l = ge.event.special[p] || {}, i || !l.trigger || !1 !== l.trigger.apply(r, t))) {
                    if (!i && !l.noBubble && !ge.isWindow(r)) {
                        for (u = l.delegateType || p, Ze.test(u + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), c = s;
                        c === (r.ownerDocument || se) && d.push(c.defaultView || c.parentWindow || n)
                    }
                    for (f = 0;
                        (s = d[f++]) && !e.isPropagationStopped();) e.type = f > 1 ? u : l.bindType || p, o = (ge._data(s, "events") || {})[e.type] && ge._data(s, "handle"), o && o.apply(s, t), (o = a && s[a]) && o.apply && _e(s) && (e.result = o.apply(s, t), !1 === e.result && e.preventDefault());
                    if (e.type = p, !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), t)) && _e(r) && a && r[p] && !ge.isWindow(r)) {
                        c = r[a], c && (r[a] = null), ge.event.triggered = p;
                        try {
                            r[p]()
                        } catch (e) {}
                        ge.event.triggered = void 0, c && (r[a] = c)
                    }
                    return e.result
                }
            },
            dispatch: function (e) {
                e = ge.event.fix(e);
                var t, n, r, i, o, a = [],
                    s = ue.call(arguments),
                    u = (ge._data(this, "events") || {})[e.type] || [],
                    l = ge.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                    for (a = ge.event.handlers.call(this, e, u), t = 0;
                        (i = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = i.elem, n = 0;
                            (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((ge.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, e), e.result
                }
            },
            handlers: function (e, t) {
                var n, r, i, o, a = [],
                    s = t.delegateCount,
                    u = e.target;
                if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; u != this; u = u.parentNode || this)
                        if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                            for (r = [], n = 0; n < s; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? ge(i, this).index(u) > -1 : ge.find(i, this, null, [u]).length), r[i] && r.push(o);
                            r.length && a.push({
                                elem: u,
                                handlers: r
                            })
                        } return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            fix: function (e) {
                if (e[ge.expando]) return e;
                var t, n, r, i = e.type,
                    o = e,
                    a = this.fixHooks[i];
                for (a || (this.fixHooks[i] = a = Ke.test(i) ? this.mouseHooks : Qe.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ge.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || se), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, t) {
                    var n, r, i, o = t.button,
                        a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || se, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== E() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        if (this === E() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        if (ge.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                    },
                    _default: function (e) {
                        return ge.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function (e, t, n) {
                var r = ge.extend(new ge.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                ge.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
            }
        }, ge.removeEvent = se.removeEventListener ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        } : function (e, t, n) {
            var r = "on" + t;
            e.detachEvent && (void 0 === e[r] && (e[r] = null), e.detachEvent(r, n))
        }, ge.Event = function (e, t) {
            if (!(this instanceof ge.Event)) return new ge.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? T : C) : this.type = e, t && ge.extend(this, t), this.timeStamp = e && e.timeStamp || ge.now(), this[ge.expando] = !0
        }, ge.Event.prototype = {
            constructor: ge.Event,
            isDefaultPrevented: C,
            isPropagationStopped: C,
            isImmediatePropagationStopped: C,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = T, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = T, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = T, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ge.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            ge.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return i && (i === r || ge.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), me.submit || (ge.event.special.submit = {
            setup: function () {
                if (ge.nodeName(this, "form")) return !1;
                ge.event.add(this, "click._submit keypress._submit", function (e) {
                    var t = e.target,
                        n = ge.nodeName(t, "input") || ge.nodeName(t, "button") ? ge.prop(t, "form") : void 0;
                    n && !ge._data(n, "submit") && (ge.event.add(n, "submit._submit", function (e) {
                        e._submitBubble = !0
                    }), ge._data(n, "submit", !0))
                })
            },
            postDispatch: function (e) {
                e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && ge.event.simulate("submit", this.parentNode, e))
            },
            teardown: function () {
                if (ge.nodeName(this, "form")) return !1;
                ge.event.remove(this, "._submit")
            }
        }), me.change || (ge.event.special.change = {
            setup: function () {
                if (Ge.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (ge.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                }), ge.event.add(this, "click._change", function (e) {
                    this._justChanged && !e.isTrigger && (this._justChanged = !1), ge.event.simulate("change", this, e)
                })), !1;
                ge.event.add(this, "beforeactivate._change", function (e) {
                    var t = e.target;
                    Ge.test(t.nodeName) && !ge._data(t, "change") && (ge.event.add(t, "change._change", function (e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || ge.event.simulate("change", this.parentNode, e)
                    }), ge._data(t, "change", !0))
                })
            },
            handle: function (e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function () {
                return ge.event.remove(this, "._change"), !Ge.test(this.nodeName)
            }
        }), me.focusin || ge.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            var n = function (e) {
                ge.event.simulate(t, e.target, ge.event.fix(e))
            };
            ge.event.special[t] = {
                setup: function () {
                    var r = this.ownerDocument || this,
                        i = ge._data(r, t);
                    i || r.addEventListener(e, n, !0), ge._data(r, t, (i || 0) + 1)
                },
                teardown: function () {
                    var r = this.ownerDocument || this,
                        i = ge._data(r, t) - 1;
                    i ? ge._data(r, t, i) : (r.removeEventListener(e, n, !0), ge._removeData(r, t))
                }
            }
        }), ge.fn.extend({
            on: function (e, t, n, r) {
                return N(this, e, t, n, r)
            },
            one: function (e, t, n, r) {
                return N(this, e, t, n, r, 1)
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ge(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = C), this.each(function () {
                    ge.event.remove(this, e, n, t)
                })
            },
            trigger: function (e, t) {
                return this.each(function () {
                    ge.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return ge.event.trigger(e, t, n, !0)
            }
        });
        var tt = / jQuery\d+="(?:null|\d+)"/g,
            nt = new RegExp("<(?:" + Ue + ")[\\s/>]", "i"),
            rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            it = /<script|<style|<link/i,
            ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
            at = /^true\/(.*)/,
            st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            ut = v(se),
            lt = ut.appendChild(se.createElement("div"));
        ge.extend({
            htmlPrefilter: function (e) {
                return e.replace(rt, "<$1></$2>")
            },
            clone: function (e, t, n) {
                var r, i, o, a, s, u = ge.contains(e.ownerDocument, e);
                if (me.html5Clone || ge.isXMLDoc(e) || !nt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (lt.innerHTML = e.outerHTML, lt.removeChild(o = lt.firstChild)), !(me.noCloneEvent && me.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ge.isXMLDoc(e)))
                    for (r = y(o), s = y(e), a = 0; null != (i = s[a]); ++a) r[a] && j(i, r[a]);
                if (t)
                    if (n)
                        for (s = s || y(e), r = r || y(o), a = 0; null != (i = s[a]); a++) D(i, r[a]);
                    else D(e, o);
                return r = y(o, "script"), r.length > 0 && x(r, !u && y(e, "script")), r = s = i = null, o
            },
            cleanData: function (e, t) {
                for (var n, r, i, o, a = 0, s = ge.expando, u = ge.cache, l = me.attributes, c = ge.event.special; null != (n = e[a]); a++)
                    if ((t || _e(n)) && (i = n[s], o = i && u[i])) {
                        if (o.events)
                            for (r in o.events) c[r] ? ge.event.remove(n, r) : ge.removeEvent(n, r, o.handle);
                        u[i] && (delete u[i], l || void 0 === n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), ae.push(i))
                    }
            }
        }), ge.fn.extend({
            domManip: L,
            detach: function (e) {
                return H(this, e, !0)
            },
            remove: function (e) {
                return H(this, e)
            },
            text: function (e) {
                return We(this, function (e) {
                    return void 0 === e ? ge.text(this) : this.empty().append((this[0] && this[0].ownerDocument || se).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function () {
                return L(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        k(this, e).appendChild(e)
                    }
                })
            },
            prepend: function () {
                return L(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = k(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function () {
                return L(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return L(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ge.cleanData(y(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && ge.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return ge.clone(this, e, t)
                })
            },
            html: function (e) {
                return We(this, function (e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(tt, "") : void 0;
                    if ("string" == typeof e && !it.test(e) && (me.htmlSerialize || !nt.test(e)) && (me.leadingWhitespace || !Xe.test(e)) && !Ve[($e.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = ge.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (ge.cleanData(y(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function () {
                var e = [];
                return L(this, arguments, function (t) {
                    var n = this.parentNode;
                    ge.inArray(this, e) < 0 && (ge.cleanData(y(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), ge.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            ge.fn[e] = function (e) {
                for (var n, r = 0, i = [], o = ge(e), a = o.length - 1; r <= a; r++) n = r === a ? this : this.clone(!0), ge(o[r])[t](n), ce.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var ct, ft = {
                HTML: "block",
                BODY: "block"
            },
            dt = /^margin/,
            pt = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
            ht = function (e, t, n, r) {
                var i, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t) e.style[o] = a[o];
                return i
            },
            mt = se.documentElement;
        ! function () {
            function e() {
                var e, c, f = se.documentElement;
                f.appendChild(u), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t = i = s = !1, r = a = !0, n.getComputedStyle && (c = n.getComputedStyle(l), t = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, i = "4px" === (c || {
                    width: "4px"
                }).width, l.style.marginRight = "50%", r = "4px" === (c || {
                    marginRight: "4px"
                }).marginRight, e = l.appendChild(se.createElement("div")), e.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", l.style.width = "1px", a = !parseFloat((n.getComputedStyle(e) || {}).marginRight), l.removeChild(e)), l.style.display = "none", o = 0 === l.getClientRects().length, o && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", l.childNodes[0].style.borderCollapse = "separate", e = l.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", (o = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", o = 0 === e[0].offsetHeight)), f.removeChild(u)
            }
            var t, r, i, o, a, s, u = se.createElement("div"),
                l = se.createElement("div");
            l.style && (l.style.cssText = "float:left;opacity:.5", me.opacity = "0.5" === l.style.opacity, me.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", me.clearCloneStyle = "content-box" === l.style.backgroundClip, u = se.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", u.appendChild(l), me.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, ge.extend(me, {
                reliableHiddenOffsets: function () {
                    return null == t && e(), o
                },
                boxSizingReliable: function () {
                    return null == t && e(), i
                },
                pixelMarginRight: function () {
                    return null == t && e(), r
                },
                pixelPosition: function () {
                    return null == t && e(), t
                },
                reliableMarginRight: function () {
                    return null == t && e(), a
                },
                reliableMarginLeft: function () {
                    return null == t && e(), s
                }
            }))
        }();
        var gt, vt, yt = /^(top|right|bottom|left)$/;
        n.getComputedStyle ? (gt = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n), t.getComputedStyle(e)
        }, vt = function (e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || gt(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || ge.contains(e.ownerDocument, e) || (a = ge.style(e, t)), n && !me.pixelMarginRight() && pt.test(a) && dt.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 === a ? a : a + ""
        }) : mt.currentStyle && (gt = function (e) {
            return e.currentStyle
        }, vt = function (e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || gt(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), pt.test(a) && !yt.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
        });
        var xt = /alpha\([^)]*\)/i,
            bt = /opacity\s*=\s*([^)]*)/i,
            wt = /^(none|table(?!-c[ea]).+)/,
            Tt = new RegExp("^(" + Fe + ")(.*)$", "i"),
            Ct = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Et = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Nt = ["Webkit", "O", "Moz", "ms"],
            kt = se.createElement("div").style;
        ge.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = vt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: me.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = ge.camelCase(t),
                        u = e.style;
                    if (t = ge.cssProps[s] || (ge.cssProps[s] = O(s) || s), a = ge.cssHooks[t] || ge.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                    if (o = typeof n, "string" === o && (i = Re.exec(n)) && i[1] && (n = g(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (ge.cssNumber[s] ? "" : "px")), me.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                        u[t] = n
                    } catch (e) {}
                }
            },
            css: function (e, t, n, r) {
                var i, o, a, s = ge.camelCase(t);
                return t = ge.cssProps[s] || (ge.cssProps[s] = O(s) || s), a = ge.cssHooks[t] || ge.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = vt(e, t, r)), "normal" === o && t in Et && (o = Et[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
            }
        }), ge.each(["height", "width"], function (e, t) {
            ge.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n) return wt.test(ge.css(e, "display")) && 0 === e.offsetWidth ? ht(e, Ct, function () {
                        return B(e, t, r)
                    }) : B(e, t, r)
                },
                set: function (e, n, r) {
                    var i = r && gt(e);
                    return R(e, n, r ? P(e, t, r, me.boxSizing && "border-box" === ge.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }), me.opacity || (ge.cssHooks.opacity = {
            get: function (e, t) {
                return bt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function (e, t) {
                var n = e.style,
                    r = e.currentStyle,
                    i = ge.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = r && r.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === ge.trim(o.replace(xt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = xt.test(o) ? o.replace(xt, i) : o + " " + i)
            }
        }), ge.cssHooks.marginRight = M(me.reliableMarginRight, function (e, t) {
            if (t) return ht(e, {
                display: "inline-block"
            }, vt, [e, "marginRight"])
        }), ge.cssHooks.marginLeft = M(me.reliableMarginLeft, function (e, t) {
            if (t) return (parseFloat(vt(e, "marginLeft")) || (ge.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ht(e, {
                marginLeft: 0
            }, function () {
                return e.getBoundingClientRect().left
            }) : 0)) + "px"
        }), ge.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (e, t) {
            ge.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Pe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, dt.test(e) || (ge.cssHooks[e + t].set = R)
        }), ge.fn.extend({
            css: function (e, t) {
                return We(this, function (e, t, n) {
                    var r, i, o = {},
                        a = 0;
                    if (ge.isArray(t)) {
                        for (r = gt(e), i = t.length; a < i; a++) o[t[a]] = ge.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? ge.style(e, t, n) : ge.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function () {
                return F(this, !0)
            },
            hide: function () {
                return F(this)
            },
            toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    Be(this) ? ge(this).show() : ge(this).hide()
                })
            }
        }), ge.Tween = W, W.prototype = {
            constructor: W,
            init: function (e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || ge.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ge.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = W.propHooks[this.prop];
                return e && e.get ? e.get(this) : W.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = W.propHooks[this.prop];
                return this.options.duration ? this.pos = t = ge.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : W.propHooks._default.set(this), this
            }
        }, W.prototype.init.prototype = W.prototype, W.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ge.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function (e) {
                    ge.fx.step[e.prop] ? ge.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ge.cssProps[e.prop]] && !ge.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ge.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, W.propHooks.scrollTop = W.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ge.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, ge.fx = W.prototype.init, ge.fx.step = {};
        var St, At, Dt = /^(?:toggle|show|hide)$/,
            jt = /queueHooks$/;
        ge.Animation = ge.extend(V, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return g(n.elem, e, Re.exec(t), n), n
                    }]
                },
                tweener: function (e, t) {
                    ge.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Le);
                    for (var n, r = 0, i = e.length; r < i; r++) n = e[r], V.tweeners[n] = V.tweeners[n] || [], V.tweeners[n].unshift(t)
                },
                prefilters: [X],
                prefilter: function (e, t) {
                    t ? V.prefilters.unshift(e) : V.prefilters.push(e)
                }
            }), ge.speed = function (e, t, n) {
                var r = e && "object" == typeof e ? ge.extend({}, e) : {
                    complete: n || !n && t || ge.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !ge.isFunction(t) && t
                };
                return r.duration = ge.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ge.fx.speeds ? ge.fx.speeds[r.duration] : ge.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                    ge.isFunction(r.old) && r.old.call(this), r.queue && ge.dequeue(this, r.queue)
                }, r
            }, ge.fn.extend({
                fadeTo: function (e, t, n, r) {
                    return this.filter(Be).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function (e, t, n, r) {
                    var i = ge.isEmptyObject(e),
                        o = ge.speed(t, n, r),
                        a = function () {
                            var t = V(this, ge.extend({}, e), o);
                            (i || ge._data(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function (e, t, n) {
                    var r = function (e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = ge.timers,
                            a = ge._data(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a) a[i] && a[i].stop && jt.test(i) && r(a[i]);
                        for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                        !t && n || ge.dequeue(this, e)
                    })
                },
                finish: function (e) {
                    return !1 !== e && (e = e || "fx"), this.each(function () {
                        var t, n = ge._data(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = ge.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, ge.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), ge.each(["toggle", "show", "hide"], function (e, t) {
                var n = ge.fn[t];
                ge.fn[t] = function (e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, r, i)
                }
            }), ge.each({
                slideDown: $("show"),
                slideUp: $("hide"),
                slideToggle: $("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (e, t) {
                ge.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), ge.timers = [], ge.fx.tick = function () {
                var e, t = ge.timers,
                    n = 0;
                for (St = ge.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
                t.length || ge.fx.stop(), St = void 0
            }, ge.fx.timer = function (e) {
                ge.timers.push(e), e() ? ge.fx.start() : ge.timers.pop()
            }, ge.fx.interval = 13, ge.fx.start = function () {
                At || (At = n.setInterval(ge.fx.tick, ge.fx.interval))
            }, ge.fx.stop = function () {
                n.clearInterval(At), At = null
            }, ge.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ge.fn.delay = function (e, t) {
                return e = ge.fx ? ge.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, r) {
                    var i = n.setTimeout(t, e);
                    r.stop = function () {
                        n.clearTimeout(i)
                    }
                })
            },
            function () {
                var e, t = se.createElement("input"),
                    n = se.createElement("div"),
                    r = se.createElement("select"),
                    i = r.appendChild(se.createElement("option"));
                n = se.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", me.getSetAttribute = "t" !== n.className, me.style = /top/.test(e.getAttribute("style")), me.hrefNormalized = "/a" === e.getAttribute("href"), me.checkOn = !!t.value, me.optSelected = i.selected, me.enctype = !!se.createElement("form").enctype, r.disabled = !0, me.optDisabled = !i.disabled, t = se.createElement("input"), t.setAttribute("value", ""), me.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), me.radioValue = "t" === t.value
            }();
        var Lt = /\r/g,
            Ht = /[\x20\t\r\n\f]+/g;
        ge.fn.extend({
            val: function (e) {
                var t, n, r, i = this[0]; {
                    if (arguments.length) return r = ge.isFunction(e), this.each(function (n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, ge(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ge.isArray(i) && (i = ge.map(i, function (e) {
                            return null == e ? "" : e + ""
                        })), (t = ge.valHooks[this.type] || ge.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                    if (i) return (t = ge.valHooks[i.type] || ge.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Lt, "") : null == n ? "" : n)
                }
            }
        }), ge.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = ge.find.attr(e, "value");
                        return null != t ? t : ge.trim(ge.text(e)).replace(Ht, " ")
                    }
                },
                select: {
                    get: function (e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                            if (n = r[u], (n.selected || u === i) && (me.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ge.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ge(n).val(), o) return t;
                                a.push(t)
                            } return a
                    },
                    set: function (e, t) {
                        for (var n, r, i = e.options, o = ge.makeArray(t), a = i.length; a--;)
                            if (r = i[a], ge.inArray(ge.valHooks.option.get(r), o) > -1) try {
                                r.selected = n = !0
                            } catch (e) {
                                r.scrollHeight
                            } else r.selected = !1;
                        return n || (e.selectedIndex = -1), i
                    }
                }
            }
        }), ge.each(["radio", "checkbox"], function () {
            ge.valHooks[this] = {
                set: function (e, t) {
                    if (ge.isArray(t)) return e.checked = ge.inArray(ge(e).val(), t) > -1
                }
            }, me.checkOn || (ge.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var qt, _t, Mt = ge.expr.attrHandle,
            Ot = /^(?:checked|selected)$/i,
            Ft = me.getSetAttribute,
            Rt = me.input;
        ge.fn.extend({
            attr: function (e, t) {
                return We(this, ge.attr, e, t, arguments.length > 1)
            },
            removeAttr: function (e) {
                return this.each(function () {
                    ge.removeAttr(this, e)
                })
            }
        }), ge.extend({
            attr: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? ge.prop(e, t, n) : (1 === o && ge.isXMLDoc(e) || (t = t.toLowerCase(), i = ge.attrHooks[t] || (ge.expr.match.bool.test(t) ? _t : qt)), void 0 !== n ? null === n ? void ge.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = ge.find.attr(e, t), null == r ? void 0 : r))
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!me.radioValue && "radio" === t && ge.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function (e, t) {
                var n, r, i = 0,
                    o = t && t.match(Le);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++];) r = ge.propFix[n] || n, ge.expr.match.bool.test(n) ? Rt && Ft || !Ot.test(n) ? e[r] = !1 : e[ge.camelCase("default-" + n)] = e[r] = !1 : ge.attr(e, n, ""), e.removeAttribute(Ft ? n : r)
            }
        }), _t = {
            set: function (e, t, n) {
                return !1 === t ? ge.removeAttr(e, n) : Rt && Ft || !Ot.test(n) ? e.setAttribute(!Ft && ge.propFix[n] || n, n) : e[ge.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, ge.each(ge.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = Mt[t] || ge.find.attr;
            Rt && Ft || !Ot.test(t) ? Mt[t] = function (e, t, r) {
                var i, o;
                return r || (o = Mt[t], Mt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Mt[t] = o), i
            } : Mt[t] = function (e, t, n) {
                if (!n) return e[ge.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), Rt && Ft || (ge.attrHooks.value = {
            set: function (e, t, n) {
                if (!ge.nodeName(e, "input")) return qt && qt.set(e, t, n);
                e.defaultValue = t
            }
        }), Ft || (qt = {
            set: function (e, t, n) {
                var r = e.getAttributeNode(n);
                if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n)) return t
            }
        }, Mt.id = Mt.name = Mt.coords = function (e, t, n) {
            var r;
            if (!n) return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
        }, ge.valHooks.button = {
            get: function (e, t) {
                var n = e.getAttributeNode(t);
                if (n && n.specified) return n.value
            },
            set: qt.set
        }, ge.attrHooks.contenteditable = {
            set: function (e, t, n) {
                qt.set(e, "" !== t && t, n)
            }
        }, ge.each(["width", "height"], function (e, t) {
            ge.attrHooks[t] = {
                set: function (e, n) {
                    if ("" === n) return e.setAttribute(t, "auto"), n
                }
            }
        })), me.style || (ge.attrHooks.style = {
            get: function (e) {
                return e.style.cssText || void 0
            },
            set: function (e, t) {
                return e.style.cssText = t + ""
            }
        });
        var Pt = /^(?:input|select|textarea|button|object)$/i,
            Bt = /^(?:a|area)$/i;
        ge.fn.extend({
            prop: function (e, t) {
                return We(this, ge.prop, e, t, arguments.length > 1)
            },
            removeProp: function (e) {
                return e = ge.propFix[e] || e, this.each(function () {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (e) {}
                })
            }
        }), ge.extend({
            prop: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ge.isXMLDoc(e) || (t = ge.propFix[t] || t, i = ge.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = ge.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Pt.test(e.nodeName) || Bt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), me.hrefNormalized || ge.each(["href", "src"], function (e, t) {
            ge.propHooks[t] = {
                get: function (e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), me.optSelected || (ge.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            },
            set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), ge.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ge.propFix[this.toLowerCase()] = this
        }), me.enctype || (ge.propFix.enctype = "encoding");
        var Wt = /[\t\r\n\f]/g;
        ge.fn.extend({
            addClass: function (e) {
                var t, n, r, i, o, a, s, u = 0;
                if (ge.isFunction(e)) return this.each(function (t) {
                    ge(this).addClass(e.call(this, t, J(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(Le) || []; n = this[u++];)
                        if (i = J(n), r = 1 === n.nodeType && (" " + i + " ").replace(Wt, " ")) {
                            for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            s = ge.trim(r), i !== s && ge.attr(n, "class", s)
                        } return this
            },
            removeClass: function (e) {
                var t, n, r, i, o, a, s, u = 0;
                if (ge.isFunction(e)) return this.each(function (t) {
                    ge(this).removeClass(e.call(this, t, J(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(Le) || []; n = this[u++];)
                        if (i = J(n), r = 1 === n.nodeType && (" " + i + " ").replace(Wt, " ")) {
                            for (a = 0; o = t[a++];)
                                for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                            s = ge.trim(r), i !== s && ge.attr(n, "class", s)
                        } return this
            },
            toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ge.isFunction(e) ? this.each(function (n) {
                    ge(this).toggleClass(e.call(this, n, J(this), t), t)
                }) : this.each(function () {
                    var t, r, i, o;
                    if ("string" === n)
                        for (r = 0, i = ge(this), o = e.match(Le) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = J(this), t && ge._data(this, "__className__", t), ge.attr(this, "class", t || !1 === e ? "" : ge._data(this, "__className__") || ""))
                })
            },
            hasClass: function (e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && (" " + J(n) + " ").replace(Wt, " ").indexOf(t) > -1) return !0;
                return !1
            }
        }), ge.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            ge.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), ge.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        var It = n.location,
            $t = ge.now(),
            zt = /\?/,
            Xt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ge.parseJSON = function (e) {
            if (n.JSON && n.JSON.parse) return n.JSON.parse(e + "");
            var t, r = null,
                i = ge.trim(e + "");
            return i && !ge.trim(i.replace(Xt, function (e, n, i, o) {
                return t && n && (r = 0), 0 === r ? e : (t = i || n, r += !o - !i, "")
            })) ? Function("return " + i)() : ge.error("Invalid JSON: " + e)
        }, ge.parseXML = function (e) {
            var t, r;
            if (!e || "string" != typeof e) return null;
            try {
                n.DOMParser ? (r = new n.DOMParser, t = r.parseFromString(e, "text/xml")) : (t = new n.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
            } catch (e) {
                t = void 0
            }
            return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ge.error("Invalid XML: " + e), t
        };
        var Ut = /#.*$/,
            Vt = /([?&])_=[^&]*/,
            Jt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Yt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Gt = /^(?:GET|HEAD)$/,
            Qt = /^\/\//,
            Kt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Zt = {},
            en = {},
            tn = "*/".concat("*"),
            nn = It.href,
            rn = Kt.exec(nn.toLowerCase()) || [];
        ge.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: nn,
                type: "GET",
                isLocal: Yt.test(rn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": tn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ge.parseJSON,
                    "text xml": ge.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t ? Q(Q(e, ge.ajaxSettings), t) : Q(ge.ajaxSettings, e)
            },
            ajaxPrefilter: Y(Zt),
            ajaxTransport: Y(en),
            ajax: function (e, t) {
                function r(e, t, r, i) {
                    var o, f, y, x, w, C = t;
                    2 !== b && (b = 2, u && n.clearTimeout(u), c = void 0, s = i || "", T.readyState = e > 0 ? 4 : 0, o = e >= 200 && e < 300 || 304 === e, r && (x = K(d, T, r)), x = Z(d, x, T, o), o ? (d.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ge.lastModified[a] = w), (w = T.getResponseHeader("etag")) && (ge.etag[a] = w)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = x.state, f = x.data, y = x.error, o = !y)) : (y = C, !e && C || (C = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || C) + "", o ? m.resolveWith(p, [f, C, T]) : m.rejectWith(p, [T, C, y]), T.statusCode(v), v = void 0, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, d, o ? f : y]), g.fireWith(p, [T, C]), l && (h.trigger("ajaxComplete", [T, d]), --ge.active || ge.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, o, a, s, u, l, c, f, d = ge.ajaxSetup({}, t),
                    p = d.context || d,
                    h = d.context && (p.nodeType || p.jquery) ? ge(p) : ge.event,
                    m = ge.Deferred(),
                    g = ge.Callbacks("once memory"),
                    v = d.statusCode || {},
                    y = {},
                    x = {},
                    b = 0,
                    w = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (2 === b) {
                                if (!f)
                                    for (f = {}; t = Jt.exec(s);) f[t[1].toLowerCase()] = t[2];
                                t = f[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function () {
                            return 2 === b ? s : null
                        },
                        setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return b || (e = x[n] = x[n] || e, y[e] = t), this
                        },
                        overrideMimeType: function (e) {
                            return b || (d.mimeType = e), this
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (b < 2)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else T.always(e[T.status]);
                            return this
                        },
                        abort: function (e) {
                            var t = e || w;
                            return c && c.abort(t), r(0, t), this
                        }
                    };
                if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, d.url = ((e || d.url || nn) + "").replace(Ut, "").replace(Qt, rn[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ge.trim(d.dataType || "*").toLowerCase().match(Le) || [""], null == d.crossDomain && (i = Kt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === rn[1] && i[2] === rn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (rn[3] || ("http:" === rn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ge.param(d.data, d.traditional)), G(Zt, d, t, T), 2 === b) return T;
                l = ge.event && d.global, l && 0 == ge.active++ && ge.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Gt.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (zt.test(a) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = Vt.test(a) ? a.replace(Vt, "$1_=" + $t++) : a + (zt.test(a) ? "&" : "?") + "_=" + $t++)), d.ifModified && (ge.lastModified[a] && T.setRequestHeader("If-Modified-Since", ge.lastModified[a]), ge.etag[a] && T.setRequestHeader("If-None-Match", ge.etag[a])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + tn + "; q=0.01" : "") : d.accepts["*"]);
                for (o in d.headers) T.setRequestHeader(o, d.headers[o]);
                if (d.beforeSend && (!1 === d.beforeSend.call(p, T, d) || 2 === b)) return T.abort();
                w = "abort";
                for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[o](d[o]);
                if (c = G(en, d, t, T)) {
                    if (T.readyState = 1, l && h.trigger("ajaxSend", [T, d]), 2 === b) return T;
                    d.async && d.timeout > 0 && (u = n.setTimeout(function () {
                        T.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1, c.send(y, r)
                    } catch (e) {
                        if (!(b < 2)) throw e;
                        r(-1, e)
                    }
                } else r(-1, "No Transport");
                return T
            },
            getJSON: function (e, t, n) {
                return ge.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return ge.get(e, void 0, t, "script")
            }
        }), ge.each(["get", "post"], function (e, t) {
            ge[t] = function (e, n, r, i) {
                return ge.isFunction(n) && (i = i || r, r = n, n = void 0), ge.ajax(ge.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                }, ge.isPlainObject(e) && e))
            }
        }), ge._evalUrl = function (e) {
            return ge.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, ge.fn.extend({
            wrapAll: function (e) {
                if (ge.isFunction(e)) return this.each(function (t) {
                    ge(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = ge(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function (e) {
                return ge.isFunction(e) ? this.each(function (t) {
                    ge(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = ge(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function (e) {
                var t = ge.isFunction(e);
                return this.each(function (n) {
                    ge(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    ge.nodeName(this, "body") || ge(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ge.expr.filters.hidden = function (e) {
            return me.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : te(e)
        }, ge.expr.filters.visible = function (e) {
            return !ge.expr.filters.hidden(e)
        };
        var on = /%20/g,
            an = /\[\]$/,
            sn = /\r?\n/g,
            un = /^(?:submit|button|image|reset|file)$/i,
            ln = /^(?:input|select|textarea|keygen)/i;
        ge.param = function (e, t) {
            var n, r = [],
                i = function (e, t) {
                    t = ge.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = ge.ajaxSettings && ge.ajaxSettings.traditional), ge.isArray(e) || e.jquery && !ge.isPlainObject(e)) ge.each(e, function () {
                i(this.name, this.value)
            });
            else
                for (n in e) ne(n, e[n], t, i);
            return r.join("&").replace(on, "+")
        }, ge.fn.extend({
            serialize: function () {
                return ge.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = ge.prop(this, "elements");
                    return e ? ge.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !ge(this).is(":disabled") && ln.test(this.nodeName) && !un.test(e) && (this.checked || !Ie.test(e))
                }).map(function (e, t) {
                    var n = ge(this).val();
                    return null == n ? null : ge.isArray(n) ? ge.map(n, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(sn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(sn, "\r\n")
                    }
                }).get()
            }
        }), ge.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function () {
            return this.isLocal ? ie() : se.documentMode > 8 ? re() : /^(get|post|head|put|delete|options)$/i.test(this.type) && re() || ie()
        } : re;
        var cn = 0,
            fn = {},
            dn = ge.ajaxSettings.xhr();
        n.attachEvent && n.attachEvent("onunload", function () {
            for (var e in fn) fn[e](void 0, !0)
        }), me.cors = !!dn && "withCredentials" in dn, dn = me.ajax = !!dn, dn && ge.ajaxTransport(function (e) {
            if (!e.crossDomain || me.cors) {
                var t;
                return {
                    send: function (r, i) {
                        var o, a = e.xhr(),
                            s = ++cn;
                        if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (o in e.xhrFields) a[o] = e.xhrFields[o];
                        e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        for (o in r) void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
                        a.send(e.hasContent && e.data || null), t = function (n, r) {
                            var o, u, l;
                            if (t && (r || 4 === a.readyState))
                                if (delete fn[s], t = void 0, a.onreadystatechange = ge.noop, r) 4 !== a.readyState && a.abort();
                                else {
                                    l = {}, o = a.status, "string" == typeof a.responseText && (l.text = a.responseText);
                                    try {
                                        u = a.statusText
                                    } catch (e) {
                                        u = ""
                                    }
                                    o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                                } l && i(o, u, l, a.getAllResponseHeaders())
                        }, e.async ? 4 === a.readyState ? n.setTimeout(t) : a.onreadystatechange = fn[s] = t : t()
                    },
                    abort: function () {
                        t && t(void 0, !0)
                    }
                }
            }
        }), ge.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (e) {
                    return ge.globalEval(e), e
                }
            }
        }), ge.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), ge.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n = se.head || ge("head")[0] || se.documentElement;
                return {
                    send: function (r, i) {
                        t = se.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function () {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var pn = [],
            hn = /(=)\?(?=&|$)|\?\?/;
        ge.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = pn.pop() || ge.expando + "_" + $t++;
                return this[e] = !0, e
            }
        }), ge.ajaxPrefilter("json jsonp", function (e, t, r) {
            var i, o, a, s = !1 !== e.jsonp && (hn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && hn.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = ge.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(hn, "$1" + i) : !1 !== e.jsonp && (e.url += (zt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
                return a || ge.error(i + " was not called"), a[0]
            }, e.dataTypes[0] = "json", o = n[i], n[i] = function () {
                a = arguments
            }, r.always(function () {
                void 0 === o ? ge(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, pn.push(i)), a && ge.isFunction(o) && o(a[0]), a = o = void 0
            }), "script"
        }), ge.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || se;
            var r = Ne.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = w([e], t, i), i && i.length && ge(i).remove(), ge.merge([], r.childNodes))
        };
        var mn = ge.fn.load;
        ge.fn.load = function (e, t, n) {
            if ("string" != typeof e && mn) return mn.apply(this, arguments);
            var r, i, o, a = this,
                s = e.indexOf(" ");
            return s > -1 && (r = ge.trim(e.slice(s, e.length)), e = e.slice(0, s)), ge.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && ge.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                o = arguments, a.html(r ? ge("<div>").append(ge.parseHTML(e)).find(r) : e)
            }).always(n && function (e, t) {
                a.each(function () {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }), this
        }, ge.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            ge.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), ge.expr.filters.animated = function (e) {
            return ge.grep(ge.timers, function (t) {
                return e === t.elem
            }).length
        }, ge.offset = {
            setOffset: function (e, t, n) {
                var r, i, o, a, s, u, l, c = ge.css(e, "position"),
                    f = ge(e),
                    d = {};
                "static" === c && (e.style.position = "relative"), s = f.offset(), o = ge.css(e, "top"), u = ge.css(e, "left"), l = ("absolute" === c || "fixed" === c) && ge.inArray("auto", [o, u]) > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ge.isFunction(t) && (t = t.call(e, n, ge.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
            }
        }, ge.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                    ge.offset.setOffset(this, e, t)
                });
                var t, n, r = {
                        top: 0,
                        left: 0
                    },
                    i = this[0],
                    o = i && i.ownerDocument;
                if (o) return t = o.documentElement, ge.contains(t, i) ? (void 0 !== i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = oe(o), {
                    top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : r
            },
            position: function () {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        r = this[0];
                    return "fixed" === ge.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ge.nodeName(e[0], "html") || (n = e.offset()), n.top += ge.css(e[0], "borderTopWidth", !0), n.left += ge.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - ge.css(r, "marginTop", !0),
                        left: t.left - n.left - ge.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && !ge.nodeName(e, "html") && "static" === ge.css(e, "position");) e = e.offsetParent;
                    return e || mt
                })
            }
        }), ge.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, t) {
            var n = /Y/.test(t);
            ge.fn[e] = function (r) {
                return We(this, function (e, r, i) {
                    var o = oe(e);
                    if (void 0 === i) return o ? t in o ? o[t] : o.document.documentElement[r] : e[r];
                    o ? o.scrollTo(n ? ge(o).scrollLeft() : i, n ? i : ge(o).scrollTop()) : e[r] = i
                }, e, r, arguments.length, null)
            }
        }), ge.each(["top", "left"], function (e, t) {
            ge.cssHooks[t] = M(me.pixelPosition, function (e, n) {
                if (n) return n = vt(e, t), pt.test(n) ? ge(e).position()[t] + "px" : n
            })
        }), ge.each({
            Height: "height",
            Width: "width"
        }, function (e, t) {
            ge.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function (n, r) {
                ge.fn[r] = function (r, i) {
                    var o = arguments.length && (n || "boolean" != typeof r),
                        a = n || (!0 === r || !0 === i ? "margin" : "border");
                    return We(this, function (t, n, r) {
                        var i;
                        return ge.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ge.css(t, n, a) : ge.style(t, n, r, a)
                    }, t, o ? r : void 0, o, null)
                }
            })
        }), ge.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), ge.fn.size = function () {
            return this.length
        }, ge.fn.andSelf = ge.fn.addBack, r = [], void 0 !== (i = function () {
            return ge
        }.apply(t, r)) && (e.exports = i);
        var gn = n.jQuery,
            vn = n.$;
        return ge.noConflict = function (e) {
            return n.$ === ge && (n.$ = vn), e && n.jQuery === ge && (n.jQuery = gn), ge
        }, o || (n.jQuery = n.$ = ge), ge
    })
}, , , , , function (e, t, n) {
    function r() {}

    function i(e, t, n) {
        function i() {
            u.parentNode && u.parentNode.removeChild(u), window[f] = r, l && clearTimeout(l)
        }

        function s() {
            window[f] && i()
        }
        "function" == typeof t && (n = t, t = {}), t || (t = {});
        var u, l, c = t.prefix || "__jp",
            f = t.name || c + a++,
            d = t.param || "callback",
            p = null != t.timeout ? t.timeout : 6e4,
            h = encodeURIComponent,
            m = document.getElementsByTagName("script")[0] || document.head;
        return p && (l = setTimeout(function () {
            i(), n && n(new Error("Timeout"))
        }, p)), window[f] = function (e) {
            o("jsonp got", e), i(), n && n(null, e)
        }, e += (~e.indexOf("?") ? "&" : "?") + d + "=" + h(f), e = e.replace("?&", "?"), o('jsonp req "%s"', e), u = document.createElement("script"), u.src = e, m.parentNode.insertBefore(u, m), s
    }
    var o = n(8)("jsonp");
    e.exports = i;
    var a = 0
}, , , function (e, t, n) {
    (function (r) {
        function i() {
            return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        }

        function o(e) {
            var n = this.useColors;
            if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), n) {
                var r = "color: " + this.color;
                e.splice(1, 0, r, "color: inherit");
                var i = 0,
                    o = 0;
                e[0].replace(/%[a-zA-Z%]/g, function (e) {
                    "%%" !== e && (i++, "%c" === e && (o = i))
                }), e.splice(o, 0, r)
            }
        }

        function a() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }

        function s(e) {
            try {
                null == e ? t.storage.removeItem("debug") : t.storage.debug = e
            } catch (e) {}
        }

        function u() {
            var e;
            try {
                e = t.storage.debug
            } catch (e) {}
            return !e && void 0 !== r && "env" in r && (e = Object({
                NODE_ENV: "production"
            }).DEBUG), e
        }
        t = e.exports = n(10), t.log = a, t.formatArgs = o, t.save = s, t.load = u, t.useColors = i, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
            try {
                return window.localStorage
            } catch (e) {}
        }(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function (e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }, t.enable(u())
    }).call(t, n(9))
}, function (e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(e) {
        if (c === setTimeout) return setTimeout(e, 0);
        if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
        try {
            return c(e, 0)
        } catch (t) {
            try {
                return c.call(null, e, 0)
            } catch (t) {
                return c.call(this, e, 0)
            }
        }
    }

    function o(e) {
        if (f === clearTimeout) return clearTimeout(e);
        if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
        try {
            return f(e)
        } catch (t) {
            try {
                return f.call(null, e)
            } catch (t) {
                return f.call(this, e)
            }
        }
    }

    function a() {
        m && p && (m = !1, p.length ? h = p.concat(h) : g = -1, h.length && s())
    }

    function s() {
        if (!m) {
            var e = i(a);
            m = !0;
            for (var t = h.length; t;) {
                for (p = h, h = []; ++g < t;) p && p[g].run();
                g = -1, t = h.length
            }
            p = null, m = !1, o(e)
        }
    }

    function u(e, t) {
        this.fun = e, this.array = t
    }

    function l() {}
    var c, f, d = e.exports = {};
    ! function () {
        try {
            c = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            c = n
        }
        try {
            f = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (e) {
            f = r
        }
    }();
    var p, h = [],
        m = !1,
        g = -1;
    d.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        h.push(new u(e, t)), 1 !== h.length || m || i(s)
    }, u.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function (e) {
        return []
    }, d.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, d.cwd = function () {
        return "/"
    }, d.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, d.umask = function () {
        return 0
    }
}, function (e, t, n) {
    function r(e) {
        var n, r = 0;
        for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
        return t.colors[Math.abs(r) % t.colors.length]
    }

    function i(e) {
        function n() {
            if (n.enabled) {
                var e = n,
                    r = +new Date,
                    i = r - (l || r);
                e.diff = i, e.prev = l, e.curr = r, l = r;
                for (var o = new Array(arguments.length), a = 0; a < o.length; a++) o[a] = arguments[a];
                o[0] = t.coerce(o[0]), "string" != typeof o[0] && o.unshift("%O");
                var s = 0;
                o[0] = o[0].replace(/%([a-zA-Z%])/g, function (n, r) {
                    if ("%%" === n) return n;
                    s++;
                    var i = t.formatters[r];
                    if ("function" == typeof i) {
                        var a = o[s];
                        n = i.call(e, a), o.splice(s, 1), s--
                    }
                    return n
                }), t.formatArgs.call(e, o);
                (n.log || t.log || void 0).apply(e, o)
            }
        }
        return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = r(e), "function" == typeof t.init && t.init(n), n
    }

    function o(e) {
        t.save(e), t.names = [], t.skips = [];
        for (var n = ("string" == typeof e ? e : "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++) n[i] && (e = n[i].replace(/\*/g, ".*?"), "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
    }

    function a() {
        t.enable("")
    }

    function s(e) {
        var n, r;
        for (n = 0, r = t.skips.length; n < r; n++)
            if (t.skips[n].test(e)) return !1;
        for (n = 0, r = t.names.length; n < r; n++)
            if (t.names[n].test(e)) return !0;
        return !1
    }

    function u(e) {
        return e instanceof Error ? e.stack || e.message : e
    }
    t = e.exports = i.debug = i.default = i, t.coerce = u, t.disable = a, t.enable = o, t.enabled = s, t.humanize = n(11), t.names = [], t.skips = [], t.formatters = {};
    var l
}, function (e, t) {
    function n(e) {
        if (e = String(e), !(e.length > 100)) {
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (t) {
                var n = parseFloat(t[1]);
                switch ((t[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return n * c;
                    case "days":
                    case "day":
                    case "d":
                        return n * l;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return n * u;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return n * s;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return n * a;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return n;
                    default:
                        return
                }
            }
        }
    }

    function r(e) {
        return e >= l ? Math.round(e / l) + "d" : e >= u ? Math.round(e / u) + "h" : e >= s ? Math.round(e / s) + "m" : e >= a ? Math.round(e / a) + "s" : e + "ms"
    }

    function i(e) {
        return o(e, l, "day") || o(e, u, "hour") || o(e, s, "minute") || o(e, a, "second") || e + " ms"
    }

    function o(e, t, n) {
        if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
    }
    var a = 1e3,
        s = 60 * a,
        u = 60 * s,
        l = 24 * u,
        c = 365.25 * l;
    e.exports = function (e, t) {
        t = t || {};
        var o = typeof e;
        if ("string" === o && e.length > 0) return n(e);
        if ("number" === o && !1 === isNaN(e)) return t.long ? i(e) : r(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}]);