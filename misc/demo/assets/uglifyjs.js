!function (n, e) {
    "use strict";
    function t(n) {
        for (var e = Object.create(null), t = 0; t < n.length; ++t)e[n[t]] = !0;
        return e
    }

    function r(n, e) {
        return Array.prototype.slice.call(n, e || 0)
    }

    function i(n) {
        return n.split("")
    }

    function o(n, e) {
        for (var t = e.length; --t >= 0;)if (e[t] == n)return !0;
        return !1
    }

    function a(n, e) {
        for (var t = 0, r = e.length; r > t; ++t)if (n(e[t]))return e[t]
    }

    function u(n, e) {
        if (0 >= e)return "";
        if (1 == e)return n;
        var t = u(n, e >> 1);
        return t += t, 1 & e && (t += n), t
    }

    function s(n, e) {
        Error.call(this, n), this.msg = n, this.defs = e
    }

    function c(n, e, t) {
        n === !0 && (n = {});
        var r = n || {};
        if (t)for (var i in r)r.hasOwnProperty(i) && !e.hasOwnProperty(i) && s.croak("`" + i + "` is not a supported option", e);
        for (var i in e)e.hasOwnProperty(i) && (r[i] = n && n.hasOwnProperty(i) ? n[i] : e[i]);
        return r
    }

    function f(n, e) {
        for (var t in e)e.hasOwnProperty(t) && (n[t] = e[t]);
        return n
    }

    function l() {
    }

    function p(n, e) {
        n.indexOf(e) < 0 && n.push(e)
    }

    function d(n, e) {
        return n.replace(/\{(.+?)\}/g, function (n, t) {
            return e[t]
        })
    }

    function h(n, e) {
        for (var t = n.length; --t >= 0;)n[t] === e && n.splice(t, 1)
    }

    function _(n, e) {
        function t(n, t) {
            for (var r = [], i = 0, o = 0, a = 0; i < n.length && o < t.length;)r[a++] = e(n[i], t[o]) <= 0 ? n[i++] : t[o++];
            return i < n.length && r.push.apply(r, n.slice(i)), o < t.length && r.push.apply(r, t.slice(o)), r
        }

        function r(n) {
            if (n.length <= 1)return n;
            var e = Math.floor(n.length / 2), i = n.slice(0, e), o = n.slice(e);
            return i = r(i), o = r(o), t(i, o)
        }

        return n.length < 2 ? n.slice() : r(n)
    }

    function m(n, e) {
        return n.filter(function (n) {
            return e.indexOf(n) < 0
        })
    }

    function v(n, e) {
        return n.filter(function (n) {
            return e.indexOf(n) >= 0
        })
    }

    function g(n) {
        function e(n) {
            if (1 == n.length)return t += "return str === " + JSON.stringify(n[0]) + ";";
            t += "switch(str){";
            for (var e = 0; e < n.length; ++e)t += "case " + JSON.stringify(n[e]) + ":";
            t += "return true}return false;"
        }

        n instanceof Array || (n = n.split(" "));
        var t = "", r = [];
        n:for (var i = 0; i < n.length; ++i) {
            for (var o = 0; o < r.length; ++o)if (r[o][0].length == n[i].length) {
                r[o].push(n[i]);
                continue n
            }
            r.push([n[i]])
        }
        if (r.length > 3) {
            r.sort(function (n, e) {
                return e.length - n.length
            }), t += "switch(str.length){";
            for (var i = 0; i < r.length; ++i) {
                var a = r[i];
                t += "case " + a[0].length + ":", e(a)
            }
            t += "}"
        } else e(n);
        return new Function("str", t)
    }

    function b(n, e) {
        for (var t = n.length; --t >= 0;)if (!e(n[t]))return !1;
        return !0
    }

    function y() {
        this._values = Object.create(null), this._size = 0
    }

    function A(n, e, t, r) {
        arguments.length < 4 && (r = W), e = e ? e.split(/\s+/) : [];
        var i = e;
        r && r.PROPS && (e = e.concat(r.PROPS));
        for (var o = "return function AST_" + n + "(props){ if (props) { ", a = e.length; --a >= 0;)o += "this." + e[a] + " = props." + e[a] + ";";
        var u = r && new r;
        (u && u.initialize || t && t.initialize) && (o += "this.initialize();"), o += "}}";
        var s = new Function(o)();
        if (u && (s.prototype = u, s.BASE = r), r && r.SUBCLASSES.push(s), s.prototype.CTOR = s, s.PROPS = e || null, s.SELF_PROPS = i, s.SUBCLASSES = [], n && (s.prototype.TYPE = s.TYPE = n), t)for (a in t)t.hasOwnProperty(a) && (/^\$/.test(a) ? s[a.substr(1)] = t[a] : s.prototype[a] = t[a]);
        return s.DEFMETHOD = function (n, e) {
            this.prototype[n] = e
        }, s
    }

    function w(n, e) {
        n.body instanceof Y ? n.body._walk(e) : n.body.forEach(function (n) {
            n._walk(e)
        })
    }

    function E(n) {
        this.visit = n, this.stack = []
    }

    function D(n) {
        return n >= 97 && 122 >= n || n >= 65 && 90 >= n || n >= 170 && qt.letter.test(String.fromCharCode(n))
    }

    function F(n) {
        return n >= 48 && 57 >= n
    }

    function S(n) {
        return F(n) || D(n)
    }

    function C(n) {
        return qt.non_spacing_mark.test(n) || qt.space_combining_mark.test(n)
    }

    function k(n) {
        return qt.connector_punctuation.test(n)
    }

    function x(n) {
        return !St(n) && /^[a-z_$][a-z0-9_$]*$/i.test(n)
    }

    function B(n) {
        return 36 == n || 95 == n || D(n)
    }

    function T(n) {
        var e = n.charCodeAt(0);
        return B(e) || F(e) || 8204 == e || 8205 == e || C(n) || k(n)
    }

    function $(n) {
        return /^[a-z_$][a-z0-9_$]*$/i.test(n)
    }

    function O(n) {
        return xt.test(n) ? parseInt(n.substr(2), 16) : Bt.test(n) ? parseInt(n.substr(1), 8) : Tt.test(n) ? parseFloat(n) : void 0
    }

    function M(n, e, t, r) {
        this.message = n, this.line = e, this.col = t, this.pos = r, this.stack = (new Error).stack
    }

    function N(n, e, t, r, i) {
        throw new M(n, t, r, i)
    }

    function R(n, e, t) {
        return n.type == e && (null == t || n.value == t)
    }

    function q(n, e, t) {
        function r() {
            return D.text.charAt(D.pos)
        }

        function i(n, e) {
            var t = D.text.charAt(D.pos++);
            if (n && !t)throw Ht;
            return "\n" == t ? (D.newline_before = D.newline_before || !e, ++D.line, D.col = 0) : ++D.col, t
        }

        function o(n) {
            for (; n-- > 0;)i()
        }

        function a(n) {
            return D.text.substr(D.pos, n.length) == n
        }

        function u(n, e) {
            var t = D.text.indexOf(n, D.pos);
            if (e && -1 == t)throw Ht;
            return t
        }

        function s() {
            D.tokline = D.line, D.tokcol = D.col, D.tokpos = D.pos
        }

        function c(n, t, r) {
            D.regex_allowed = "operator" == n && !Pt(t) || "keyword" == n && Ct(t) || "punc" == n && Mt(t), C = "punc" == n && "." == t;
            var i = {
                type: n,
                value: t,
                line: D.tokline,
                col: D.tokcol,
                pos: D.tokpos,
                endpos: D.pos,
                nlb: D.newline_before,
                file: e
            };
            if (!r) {
                i.comments_before = D.comments_before, D.comments_before = [];
                for (var o = 0, a = i.comments_before.length; a > o; o++)i.nlb = i.nlb || i.comments_before[o].nlb
            }
            return D.newline_before = !1, new L(i)
        }

        function f() {
            for (; Ot(r());)i()
        }

        function l(n) {
            for (var e, t = "", o = 0; (e = r()) && n(e, o++);)t += i();
            return t
        }

        function p(n) {
            N(n, e, D.tokline, D.tokcol, D.tokpos)
        }

        function d(n) {
            var e = !1, t = !1, r = !1, i = "." == n, o = l(function (o, a) {
                var u = o.charCodeAt(0);
                switch (u) {
                    case 120:
                    case 88:
                        return r ? !1 : r = !0;
                    case 101:
                    case 69:
                        return r ? !0 : e ? !1 : e = t = !0;
                    case 45:
                        return t || 0 == a && !n;
                    case 43:
                        return t;
                    case t = !1, 46:
                        return i || r || e ? !1 : i = !0
                }
                return S(u)
            });
            n && (o = n + o);
            var a = O(o);
            return isNaN(a) ? void p("Invalid syntax: " + o) : c("num", a)
        }

        function h(n) {
            var e = i(!0, n);
            switch (e.charCodeAt(0)) {
                case 110:
                    return "\n";
                case 114:
                    return "\r";
                case 116:
                    return "	";
                case 98:
                    return "\b";
                case 118:
                    return "";
                case 102:
                    return "\f";
                case 48:
                    return "\x00";
                case 120:
                    return String.fromCharCode(_(2));
                case 117:
                    return String.fromCharCode(_(4));
                case 10:
                    return "";
                default:
                    return e
            }
        }

        function _(n) {
            for (var e = 0; n > 0; --n) {
                var t = parseInt(i(!0), 16);
                isNaN(t) && p("Invalid hex-character pattern in string"), e = e << 4 | t
            }
            return e
        }

        function m(n) {
            var e, t = D.regex_allowed, r = u("\n");
            return -1 == r ? (e = D.text.substr(D.pos), D.pos = D.text.length) : (e = D.text.substring(D.pos, r), D.pos = r), D.comments_before.push(c(n, e, !0)), D.regex_allowed = t, E()
        }

        function v() {
            for (var n, e, t = !1, o = "", a = !1; null != (n = r());)if (t)"u" != n && p("Expecting UnicodeEscapeSequence -- uXXXX"), n = h(), T(n) || p("Unicode char: " + n.charCodeAt(0) + " is not valid in identifier"), o += n, t = !1; else if ("\\" == n)a = t = !0, i(); else {
                if (!T(n))break;
                o += i()
            }
            return Dt(o) && a && (e = o.charCodeAt(0).toString(16).toUpperCase(), o = "\\u" + "0000".substr(e.length) + e + o.slice(1)), o
        }

        function g(n) {
            function e(n) {
                if (!r())return n;
                var t = n + r();
                return $t(t) ? (i(), e(t)) : n
            }

            return c("operator", e(n || i()))
        }

        function b() {
            switch (i(), r()) {
                case"/":
                    return i(), m("comment1");
                case"*":
                    return i(), x()
            }
            return D.regex_allowed ? $("") : g("/")
        }

        function y() {
            return i(), F(r().charCodeAt(0)) ? d(".") : c("punc", ".")
        }

        function A() {
            var n = v();
            return C ? c("name", n) : Ft(n) ? c("atom", n) : Dt(n) ? $t(n) ? c("operator", n) : c("keyword", n) : c("name", n)
        }

        function w(n, e) {
            return function (t) {
                try {
                    return e(t)
                } catch (r) {
                    if (r !== Ht)throw r;
                    p(n)
                }
            }
        }

        function E(n) {
            if (null != n)return $(n);
            if (f(), s(), t) {
                if (a("<!--"))return o(4), m("comment3");
                if (a("-->") && D.newline_before)return o(3), m("comment4")
            }
            var e = r();
            if (!e)return c("eof");
            var u = e.charCodeAt(0);
            switch (u) {
                case 34:
                case 39:
                    return k();
                case 46:
                    return y();
                case 47:
                    return b()
            }
            return F(u) ? d() : Nt(e) ? c("punc", i()) : kt(e) ? g() : 92 == u || B(u) ? A() : void p("Unexpected character '" + e + "'")
        }

        var D = {
            text: n.replace(/\r\n?|[\n\u2028\u2029]/g, "\n").replace(/\uFEFF/g, ""),
            filename: e,
            pos: 0,
            tokpos: 0,
            line: 1,
            tokline: 0,
            col: 0,
            tokcol: 0,
            newline_before: !1,
            regex_allowed: !1,
            comments_before: []
        }, C = !1, k = w("Unterminated string constant", function () {
            for (var n = i(), e = ""; ;) {
                var t = i(!0);
                if ("\\" == t) {
                    var r = 0, o = null;
                    t = l(function (n) {
                        if (n >= "0" && "7" >= n) {
                            if (!o)return o = n, ++r;
                            if ("3" >= o && 2 >= r)return ++r;
                            if (o >= "4" && 1 >= r)return ++r
                        }
                        return !1
                    }), t = r > 0 ? String.fromCharCode(parseInt(t, 8)) : h(!0)
                } else if (t == n)break;
                e += t
            }
            return c("string", e)
        }), x = w("Unterminated multiline comment", function () {
            var n = D.regex_allowed, e = u("*/", !0), t = D.text.substring(D.pos, e), r = t.split("\n"), i = r.length;
            D.pos = e + 2, D.line += i - 1, i > 1 ? D.col = r[i - 1].length : D.col += r[i - 1].length, D.col += 2;
            var o = D.newline_before = D.newline_before || t.indexOf("\n") >= 0;
            return D.comments_before.push(c("comment2", t, !0)), D.regex_allowed = n, D.newline_before = o, E()
        }), $ = w("Unterminated regular expression", function (n) {
            for (var e, t = !1, r = !1; e = i(!0);)if (t)n += "\\" + e, t = !1; else if ("[" == e)r = !0, n += e; else if ("]" == e && r)r = !1, n += e; else {
                if ("/" == e && !r)break;
                "\\" == e ? t = !0 : n += e
            }
            var o = v();
            return c("regexp", new RegExp(n, o))
        });
        return E.context = function (n) {
            return n && (D = n), D
        }, E
    }

    function H(n, e) {
        function t(n, e) {
            return R(I.token, n, e)
        }

        function r() {
            return I.peeked || (I.peeked = I.input())
        }

        function i() {
            return I.prev = I.token, I.peeked ? (I.token = I.peeked, I.peeked = null) : I.token = I.input(), I.in_directives = I.in_directives && ("string" == I.token.type || t("punc", ";")), I.token
        }

        function o() {
            return I.prev
        }

        function u(n, e, t, r) {
            var i = I.input.context();
            N(n, i.filename, null != e ? e : i.tokline, null != t ? t : i.tokcol, null != r ? r : i.tokpos)
        }

        function s(n, e) {
            u(e, n.line, n.col)
        }

        function f(n) {
            null == n && (n = I.token), s(n, "Unexpected token: " + n.type + " (" + n.value + ")")
        }

        function l(n, e) {
            return t(n, e) ? i() : void s(I.token, "Unexpected token " + I.token.type + " «" + I.token.value + "», expected " + n + " «" + e + "»")
        }

        function p(n) {
            return l("punc", n)
        }

        function d() {
            return !e.strict && (I.token.nlb || t("eof") || t("punc", "}"))
        }

        function h() {
            t("punc", ";") ? i() : d() || f()
        }

        function _() {
            p("(");
            var n = De(!0);
            return p(")"), n
        }

        function m(n) {
            return function () {
                var e = I.token, t = n(), r = o();
                return t.start = e, t.end = r, t
            }
        }

        function v() {
            (t("operator", "/") || t("operator", "/=")) && (I.peeked = null, I.token = I.input(I.token.value.substr(1)))
        }

        function g() {
            var n = M(ut);
            a(function (e) {
                return e.name == n.name
            }, I.labels) && u("Label " + n.name + " defined twice"), p(":"), I.labels.push(n);
            var e = U();
            return I.labels.pop(), e instanceof te || n.references.forEach(function (e) {
                e instanceof Ae && (e = e.label.start, u("Continue label `" + n.name + "` refers to non-IterationStatement.", e.line, e.col, e.pos))
            }), new ee({body: e, label: n})
        }

        function b(n) {
            return new K({body: (n = De(!0), h(), n)})
        }

        function y(n) {
            var e, t = null;
            d() || (t = M(ct, !0)), null != t ? (e = a(function (n) {
                return n.name == t.name
            }, I.labels), e || u("Undefined label " + t.name), t.thedef = e) : 0 == I.in_loop && u(n.TYPE + " not inside a loop or switch"), h();
            var r = new n({label: t});
            return e && e.references.push(r), r
        }

        function A() {
            p("(");
            var n = null;
            return !t("punc", ";") && (n = t("keyword", "var") ? (i(), L(!0)) : De(!0, !0), t("operator", "in")) ? (n instanceof Te && n.definitions.length > 1 && u("Only one variable declaration allowed in for..in loop"), i(), E(n)) : w(n)
        }

        function w(n) {
            p(";");
            var e = t("punc", ";") ? null : De(!0);
            p(";");
            var r = t("punc", ")") ? null : De(!0);
            return p(")"), new ae({init: n, condition: e, step: r, body: j(U)})
        }

        function E(n) {
            var e = n instanceof Te ? n.definitions[0].name : null, t = De(!0);
            return p(")"), new ue({init: n, name: e, object: t, body: j(U)})
        }

        function D() {
            var n = _(), e = U(), r = null;
            return t("keyword", "else") && (i(), r = U()), new we({condition: n, body: e, alternative: r})
        }

        function F() {
            p("{");
            for (var n = []; !t("punc", "}");)t("eof") && f(), n.push(U());
            return i(), n
        }

        function S() {
            p("{");
            for (var n, e = [], r = null, a = null; !t("punc", "}");)t("eof") && f(), t("keyword", "case") ? (a && (a.end = o()), r = [], a = new Se({
                start: (n = I.token, i(), n),
                expression: De(!0),
                body: r
            }), e.push(a), p(":")) : t("keyword", "default") ? (a && (a.end = o()), r = [], a = new Fe({
                start: (n = I.token, i(), p(":"), n),
                body: r
            }), e.push(a)) : (r || f(), r.push(U()));
            return a && (a.end = o()), i(), e
        }

        function C() {
            var n = F(), e = null, r = null;
            if (t("keyword", "catch")) {
                var a = I.token;
                i(), p("(");
                var s = M(at);
                p(")"), e = new ke({start: a, argname: s, body: F(), end: o()})
            }
            if (t("keyword", "finally")) {
                var a = I.token;
                i(), r = new xe({start: a, body: F(), end: o()})
            }
            return e || r || u("Missing catch/finally blocks"), new Ce({body: n, bcatch: e, bfinally: r})
        }

        function k(n, e) {
            for (var r = []; r.push(new Oe({
                start: I.token,
                name: M(e ? tt : et),
                value: t("operator", "=") ? (i(), De(!1, n)) : null,
                end: o()
            })), t("punc", ",");)i();
            return r
        }

        function x() {
            var n, e = I.token;
            switch (e.type) {
                case"name":
                case"keyword":
                    n = O(st);
                    break;
                case"num":
                    n = new dt({start: e, end: e, value: e.value});
                    break;
                case"string":
                    n = new pt({start: e, end: e, value: e.value});
                    break;
                case"regexp":
                    n = new ht({start: e, end: e, value: e.value});
                    break;
                case"atom":
                    switch (e.value) {
                        case"false":
                            n = new wt({start: e, end: e});
                            break;
                        case"true":
                            n = new Et({start: e, end: e});
                            break;
                        case"null":
                            n = new mt({start: e, end: e})
                    }
            }
            return i(), n
        }

        function B(n, e, r) {
            for (var o = !0, a = []; !t("punc", n) && (o ? o = !1 : p(","), !e || !t("punc", n));)a.push(t("punc", ",") && r ? new bt({
                start: I.token,
                end: I.token
            }) : De(!1));
            return i(), a
        }

        function T() {
            var n = I.token;
            switch (i(), n.type) {
                case"num":
                case"string":
                case"name":
                case"operator":
                case"keyword":
                case"atom":
                    return n.value;
                default:
                    f()
            }
        }

        function $() {
            var n = I.token;
            switch (i(), n.type) {
                case"name":
                case"operator":
                case"keyword":
                case"atom":
                    return n.value;
                default:
                    f()
            }
        }

        function O(n) {
            var e = I.token.value;
            return new ("this" == e ? ft : n)({name: String(e), start: I.token, end: I.token})
        }

        function M(n, e) {
            if (!t("name"))return e || u("Name expected"), null;
            var r = O(n);
            return i(), r
        }

        function H(n, e, t) {
            return "++" != e && "--" != e || P(t) || u("Invalid use of " + e + " operator"), new n({
                operator: e,
                expression: t
            })
        }

        function z(n) {
            return _e(le(!0), 0, n)
        }

        function P(n) {
            return e.strict ? n instanceof ft ? !1 : n instanceof qe || n instanceof Ze : !0
        }

        function j(n) {
            ++I.in_loop;
            var e = n();
            return --I.in_loop, e
        }

        e = c(e, {strict: !1, filename: null, toplevel: null, expression: !1, html5_comments: !0});
        var I = {
            input: "string" == typeof n ? q(n, e.filename, e.html5_comments) : n,
            token: null,
            prev: null,
            peeked: null,
            in_function: 0,
            in_directives: !0,
            in_loop: 0,
            labels: []
        };
        I.token = i();
        var U = m(function () {
            var n;
            switch (v(), I.token.type) {
                case"string":
                    var e = I.in_directives, a = b();
                    return e && a.body instanceof pt && !t("punc", ",") ? new G({value: a.body.value}) : a;
                case"num":
                case"regexp":
                case"operator":
                case"atom":
                    return b();
                case"name":
                    return R(r(), "punc", ":") ? g() : b();
                case"punc":
                    switch (I.token.value) {
                        case"{":
                            return new Z({start: I.token, body: F(), end: o()});
                        case"[":
                        case"(":
                            return b();
                        case";":
                            return i(), new Q;
                        default:
                            f()
                    }
                case"keyword":
                    switch (n = I.token.value, i(), n) {
                        case"break":
                            return y(ye);
                        case"continue":
                            return y(Ae);
                        case"debugger":
                            return h(), new X;
                        case"do":
                            return new ie({body: j(U), condition: (l("keyword", "while"), n = _(), h(), n)});
                        case"while":
                            return new oe({condition: _(), body: j(U)});
                        case"for":
                            return A();
                        case"function":
                            return V(he);
                        case"if":
                            return D();
                        case"return":
                            return 0 == I.in_function && u("'return' outside of function"), new ve({value: t("punc", ";") ? (i(), null) : d() ? null : (n = De(!0), h(), n)});
                        case"switch":
                            return new Ee({expression: _(), body: j(S)});
                        case"throw":
                            return I.token.nlb && u("Illegal newline after 'throw'"), new ge({value: (n = De(!0), h(), n)});
                        case"try":
                            return C();
                        case"var":
                            return n = L(), h(), n;
                        case"const":
                            return n = W(), h(), n;
                        case"with":
                            return new se({expression: _(), body: U()});
                        default:
                            f()
                    }
            }
        }), V = function (n) {
            var e = n === he, r = t("name") ? M(e ? it : ot) : null;
            return e && !r && f(), p("("), new n({
                name: r, argnames: function (n, e) {
                    for (; !t("punc", ")");)n ? n = !1 : p(","), e.push(M(rt));
                    return i(), e
                }(!0, []), body: function (n, e) {
                    ++I.in_function, I.in_directives = !0, I.in_loop = 0, I.labels = [];
                    var t = F();
                    return --I.in_function, I.in_loop = n, I.labels = e, t
                }(I.in_loop, I.labels)
            })
        }, L = function (n) {
            return new Te({start: o(), definitions: k(n, !1), end: o()})
        }, W = function () {
            return new $e({start: o(), definitions: k(!1, !0), end: o()})
        }, Y = function () {
            var n = I.token;
            l("operator", "new");
            var e, r = J(!1);
            return t("punc", "(") ? (i(), e = B(")")) : e = [], ce(new Ne({
                start: n,
                expression: r,
                args: e,
                end: o()
            }), !0)
        }, J = function (n) {
            if (t("operator", "new"))return Y();
            var e = I.token;
            if (t("punc")) {
                switch (e.value) {
                    case"(":
                        i();
                        var r = De(!0);
                        return r.start = e, r.end = I.token, p(")"), ce(r, n);
                    case"[":
                        return ce(ne(), n);
                    case"{":
                        return ce(re(), n)
                }
                f()
            }
            if (t("keyword", "function")) {
                i();
                var a = V(de);
                return a.start = e, a.end = o(), ce(a, n)
            }
            return Vt[I.token.type] ? ce(x(), n) : void f()
        }, ne = m(function () {
            return p("["), new We({elements: B("]", !e.strict, !0)})
        }), re = m(function () {
            p("{");
            for (var n = !0, r = []; !t("punc", "}") && (n ? n = !1 : p(","), e.strict || !t("punc", "}"));) {
                var a = I.token, u = a.type, s = T();
                if ("name" == u && !t("punc", ":")) {
                    if ("get" == s) {
                        r.push(new Je({start: a, key: x(), value: V(pe), end: o()}));
                        continue
                    }
                    if ("set" == s) {
                        r.push(new Ke({start: a, key: x(), value: V(pe), end: o()}));
                        continue
                    }
                }
                p(":"), r.push(new Ge({start: a, key: s, value: De(!1), end: o()}))
            }
            return i(), new Ye({properties: r})
        }), ce = function (n, e) {
            var r = n.start;
            if (t("punc", "."))return i(), ce(new He({start: r, expression: n, property: $(), end: o()}), e);
            if (t("punc", "[")) {
                i();
                var a = De(!0);
                return p("]"), ce(new ze({start: r, expression: n, property: a, end: o()}), e)
            }
            return e && t("punc", "(") ? (i(), ce(new Me({start: r, expression: n, args: B(")"), end: o()}), !0)) : n
        }, le = function (n) {
            var e = I.token;
            if (t("operator") && zt(e.value)) {
                i(), v();
                var r = H(je, e.value, le(n));
                return r.start = e, r.end = o(), r
            }
            for (var a = J(n); t("operator") && Pt(I.token.value) && !I.token.nlb;)a = H(Ie, I.token.value, a), a.start = e, a.end = I.token, i();
            return a
        }, _e = function (n, e, r) {
            var o = t("operator") ? I.token.value : null;
            "in" == o && r && (o = null);
            var a = null != o ? It[o] : null;
            if (null != a && a > e) {
                i();
                var u = _e(le(!0), a, r);
                return _e(new Ue({start: n.start, left: n, operator: o, right: u, end: u.end}), e, r)
            }
            return n
        }, me = function (n) {
            var e = I.token, r = z(n);
            if (t("operator", "?")) {
                i();
                var a = De(!1);
                return p(":"), new Ve({start: e, condition: r, consequent: a, alternative: De(!1, n), end: o()})
            }
            return r
        }, be = function (n) {
            var e = I.token, r = me(n), a = I.token.value;
            if (t("operator") && jt(a)) {
                if (P(r))return i(), new Le({start: e, left: r, operator: a, right: be(n), end: o()});
                u("Invalid assignment")
            }
            return r
        }, De = function (n, e) {
            var o = I.token, a = be(e);
            return n && t("punc", ",") ? (i(), new Re({start: o, car: a, cdr: De(!0, e), end: r()})) : a
        };
        return e.expression ? De(!0) : function () {
            for (var n = I.token, r = []; !t("eof");)r.push(U());
            var i = o(), a = e.toplevel;
            return a ? (a.body = a.body.concat(r), a.end = i) : a = new fe({start: n, body: r, end: i}), a
        }()
    }

    function z(n, e) {
        E.call(this), this.before = n, this.after = e
    }

    function P(n, e, t) {
        this.name = t.name, this.orig = [t], this.scope = n, this.references = [], this.global = !1, this.mangled_name = null, this.undeclared = !1, this.constant = !1, this.index = e
    }

    function j(n) {
        function e(n, e) {
            return n.replace(/[\u0080-\uffff]/g, function (n) {
                var t = n.charCodeAt(0).toString(16);
                if (t.length <= 2 && !e) {
                    for (; t.length < 2;)t = "0" + t;
                    return "\\x" + t
                }
                for (; t.length < 4;)t = "0" + t;
                return "\\u" + t
            })
        }

        function t(t) {
            var r = 0, i = 0;
            return t = t.replace(/[\\\b\f\n\r\t\x22\x27\u2028\u2029\0]/g, function (n) {
                switch (n) {
                    case"\\":
                        return "\\\\";
                    case"\b":
                        return "\\b";
                    case"\f":
                        return "\\f";
                    case"\n":
                        return "\\n";
                    case"\r":
                        return "\\r";
                    case"\u2028":
                        return "\\u2028";
                    case"\u2029":
                        return "\\u2029";
                    case'"':
                        return ++r, '"';
                    case"'":
                        return ++i, "'";
                    case"\x00":
                        return "\\x00"
                }
                return n
            }), n.ascii_only && (t = e(t)), r > i ? "'" + t.replace(/\x27/g, "\\'") + "'" : '"' + t.replace(/\x22/g, '\\"') + '"'
        }

        function r(e) {
            var r = t(e);
            return n.inline_script && (r = r.replace(/<\x2fscript([>\/\t\n\f\r ])/gi, "<\\/script$1")), r
        }

        function i(t) {
            return t = t.toString(), n.ascii_only && (t = e(t, !0)), t
        }

        function o(e) {
            return u(" ", n.indent_start + A - e * n.indent_level)
        }

        function a() {
            return k.charAt(k.length - 1)
        }

        function s() {
            n.max_line_len && w > n.max_line_len && f("\n")
        }

        function f(e) {
            e = String(e);
            var t = e.charAt(0);
            if (C && (t && !(";}".indexOf(t) < 0) || /[;]$/.test(k) || (n.semicolons || x(t) ? (F += ";", w++, D++) : (F += "\n", D++, E++, w = 0), n.beautify || (S = !1)), C = !1, s()), !n.beautify && n.preserve_line && q[q.length - 1])for (var r = q[q.length - 1].start.line; r > E;)F += "\n", D++, E++, w = 0, S = !1;
            if (S) {
                var i = a();
                (T(i) && (T(t) || "\\" == t) || /^[\+\-\/]$/.test(t) && t == i) && (F += " ", w++, D++), S = !1
            }
            var o = e.split(/\r?\n/), u = o.length - 1;
            E += u, 0 == u ? w += o[u].length : w = o[u].length, D += e.length, k = e, F += e
        }

        function p() {
            C = !1, f(";")
        }

        function d() {
            return A + n.indent_level
        }

        function h(n) {
            var e;
            return f("{"), M(), O(d(), function () {
                e = n()
            }), $(), f("}"), e
        }

        function _(n) {
            f("(");
            var e = n();
            return f(")"), e
        }

        function m(n) {
            f("[");
            var e = n();
            return f("]"), e
        }

        function v() {
            f(","), B()
        }

        function b() {
            f(":"), n.space_colon && B()
        }

        function y() {
            return F
        }

        n = c(n, {
            indent_start: 0,
            indent_level: 4,
            quote_keys: !1,
            space_colon: !0,
            ascii_only: !1,
            unescape_regexps: !1,
            inline_script: !1,
            width: 80,
            max_line_len: 32e3,
            beautify: !1,
            source_map: null,
            bracketize: !1,
            semicolons: !0,
            comments: !1,
            preserve_line: !1,
            screw_ie8: !1,
            preamble: null
        }, !0);
        var A = 0, w = 0, E = 1, D = 0, F = "", S = !1, C = !1, k = null, x = g("( [ + * / - , ."), B = n.beautify ? function () {
            f(" ")
        } : function () {
            S = !0
        }, $ = n.beautify ? function (e) {
            n.beautify && f(o(e ? .5 : 0))
        } : l, O = n.beautify ? function (n, e) {
            n === !0 && (n = d());
            var t = A;
            A = n;
            var r = e();
            return A = t, r
        } : function (n, e) {
            return e()
        }, M = n.beautify ? function () {
            f("\n")
        } : l, N = n.beautify ? function () {
            f(";")
        } : function () {
            C = !0
        }, R = n.source_map ? function (e, t) {
            try {
                e && n.source_map.add(e.file || "?", E, w, e.line, e.col, t || "name" != e.type ? t : e.value)
            } catch (r) {
                W.warn("Couldn't figure out mapping for {file}:{line},{col} → {cline},{ccol} [{name}]", {
                    file: e.file,
                    line: e.line,
                    col: e.col,
                    cline: E,
                    ccol: w,
                    name: t || ""
                })
            }
        } : l;
        n.preamble && f(n.preamble.replace(/\r\n?|[\n\u2028\u2029]|\s*$/g, "\n"));
        var q = [];
        return {
            get: y,
            toString: y,
            indent: $,
            indentation: function () {
                return A
            },
            current_width: function () {
                return w - A
            },
            should_break: function () {
                return n.width && this.current_width() >= n.width
            },
            newline: M,
            print: f,
            space: B,
            comma: v,
            colon: b,
            last: function () {
                return k
            },
            semicolon: N,
            force_semicolon: p,
            to_ascii: e,
            print_name: function (n) {
                f(i(n))
            },
            print_string: function (n) {
                f(r(n))
            },
            next_indent: d,
            with_indent: O,
            with_block: h,
            with_parens: _,
            with_square: m,
            add_mapping: R,
            option: function (e) {
                return n[e]
            },
            line: function () {
                return E
            },
            col: function () {
                return w
            },
            pos: function () {
                return D
            },
            push_node: function (n) {
                q.push(n)
            },
            pop_node: function () {
                return q.pop()
            },
            stack: function () {
                return q
            },
            parent: function (n) {
                return q[q.length - 2 - (n || 0)]
            }
        }
    }

    function I(n, e) {
        return this instanceof I ? (z.call(this, this.before, this.after), void(this.options = c(n, {
            sequences: !e,
            properties: !e,
            dead_code: !e,
            drop_debugger: !e,
            unsafe: !1,
            unsafe_comps: !1,
            conditionals: !e,
            comparisons: !e,
            evaluate: !e,
            booleans: !e,
            loops: !e,
            unused: !e,
            hoist_funs: !e,
            keep_fargs: !1,
            hoist_vars: !1,
            if_return: !e,
            join_vars: !e,
            cascade: !e,
            side_effects: !e,
            pure_getters: !1,
            pure_funcs: null,
            negate_iife: !e,
            screw_ie8: !1,
            drop_console: !1,
            angular: !1,
            warnings: !0,
            global_defs: {}
        }, !0))) : new I(n, e)
    }

    function U(n) {
        function e(e, i, o, a, u, s) {
            if (r) {
                var c = r.originalPositionFor({line: a, column: u});
                if (null === c.source)return;
                e = c.source, a = c.line, u = c.column, s = c.name
            }
            t.addMapping({
                generated: {line: i + n.dest_line_diff, column: o},
                original: {line: a + n.orig_line_diff, column: u},
                source: e,
                name: s
            })
        }

        n = c(n, {file: null, root: null, orig: null, orig_line_diff: 0, dest_line_diff: 0});
        var t = new MOZ_SourceMap.SourceMapGenerator({
            file: n.file,
            sourceRoot: n.root
        }), r = n.orig && new MOZ_SourceMap.SourceMapConsumer(n.orig);
        return {
            add: e, get: function () {
                return t
            }, toString: function () {
                return t.toString()
            }
        }
    }

    e.UglifyJS = n, s.prototype = Object.create(Error.prototype), s.prototype.constructor = s, s.croak = function (n, e) {
        throw new s(n, e)
    };
    var V = function () {
        function n(n, o, a) {
            function u() {
                var u = o(n[s], s), l = u instanceof r;
                return l && (u = u.v), u instanceof e ? (u = u.v, u instanceof t ? f.push.apply(f, a ? u.v.slice().reverse() : u.v) : f.push(u)) : u !== i && (u instanceof t ? c.push.apply(c, a ? u.v.slice().reverse() : u.v) : c.push(u)), l
            }

            var s, c = [], f = [];
            if (n instanceof Array)if (a) {
                for (s = n.length; --s >= 0 && !u(););
                c.reverse(), f.reverse()
            } else for (s = 0; s < n.length && !u(); ++s); else for (s in n)if (n.hasOwnProperty(s) && u())break;
            return f.concat(c)
        }

        function e(n) {
            this.v = n
        }

        function t(n) {
            this.v = n
        }

        function r(n) {
            this.v = n
        }

        n.at_top = function (n) {
            return new e(n)
        }, n.splice = function (n) {
            return new t(n)
        }, n.last = function (n) {
            return new r(n)
        };
        var i = n.skip = {};
        return n
    }();
    y.prototype = {
        set: function (n, e) {
            return this.has(n) || ++this._size, this._values["$" + n] = e, this
        }, add: function (n, e) {
            return this.has(n) ? this.get(n).push(e) : this.set(n, [e]), this
        }, get: function (n) {
            return this._values["$" + n]
        }, del: function (n) {
            return this.has(n) && (--this._size, delete this._values["$" + n]), this
        }, has: function (n) {
            return "$" + n in this._values
        }, each: function (n) {
            for (var e in this._values)n(this._values[e], e.substr(1))
        }, size: function () {
            return this._size
        }, map: function (n) {
            var e = [];
            for (var t in this._values)e.push(n(this._values[t], t.substr(1)));
            return e
        }
    };
    var L = A("Token", "type value line col pos endpos nlb comments_before file", {}, null), W = A("Node", "start end", {
        clone: function () {
            return new this.CTOR(this)
        },
        $documentation: "Base class of all AST nodes",
        $propdoc: {start: "[AST_Token] The first token of this node", end: "[AST_Token] The last token of this node"},
        _walk: function (n) {
            return n._visit(this)
        },
        walk: function (n) {
            return this._walk(n)
        }
    }, null);
    W.warn_function = null, W.warn = function (n, e) {
        W.warn_function && W.warn_function(d(n, e))
    };
    var Y = A("Statement", null, {$documentation: "Base class of all statements"}), X = A("Debugger", null, {$documentation: "Represents a debugger statement"}, Y), G = A("Directive", "value scope", {
        $documentation: 'Represents a directive, like "use strict";',
        $propdoc: {
            value: "[string] The value of this directive as a plain string (it's not an AST_String!)",
            scope: "[AST_Scope/S] The scope that this directive affects"
        }
    }, Y), K = A("SimpleStatement", "body", {
        $documentation: "A statement consisting of an expression, i.e. a = 1 + 2",
        $propdoc: {body: "[AST_Node] an expression node (should not be instanceof AST_Statement)"},
        _walk: function (n) {
            return n._visit(this, function () {
                this.body._walk(n)
            })
        }
    }, Y), J = A("Block", "body", {
        $documentation: "A body of statements (usually bracketed)",
        $propdoc: {body: "[AST_Statement*] an array of statements"},
        _walk: function (n) {
            return n._visit(this, function () {
                w(this, n)
            })
        }
    }, Y), Z = A("BlockStatement", null, {$documentation: "A block statement"}, J), Q = A("EmptyStatement", null, {
        $documentation: "The empty statement (empty block or simply a semicolon)",
        _walk: function (n) {
            return n._visit(this)
        }
    }, Y), ne = A("StatementWithBody", "body", {
        $documentation: "Base class for all statements that contain one nested body: `For`, `ForIn`, `Do`, `While`, `With`",
        $propdoc: {body: "[AST_Statement] the body; this should always be present, even if it's an AST_EmptyStatement"},
        _walk: function (n) {
            return n._visit(this, function () {
                this.body._walk(n)
            })
        }
    }, Y), ee = A("LabeledStatement", "label", {
        $documentation: "Statement with a label",
        $propdoc: {label: "[AST_Label] a label definition"},
        _walk: function (n) {
            return n._visit(this, function () {
                this.label._walk(n), this.body._walk(n)
            })
        }
    }, ne), te = A("IterationStatement", null, {$documentation: "Internal class.  All loops inherit from it."}, ne), re = A("DWLoop", "condition", {
        $documentation: "Base class for do/while statements",
        $propdoc: {condition: "[AST_Node] the loop condition.  Should not be instanceof AST_Statement"},
        _walk: function (n) {
            return n._visit(this, function () {
                this.condition._walk(n), this.body._walk(n)
            })
        }
    }, te), ie = A("Do", null, {$documentation: "A `do` statement"}, re), oe = A("While", null, {$documentation: "A `while` statement"}, re), ae = A("For", "init condition step", {
        $documentation: "A `for` statement",
        $propdoc: {
            init: "[AST_Node?] the `for` initialization code, or null if empty",
            condition: "[AST_Node?] the `for` termination clause, or null if empty",
            step: "[AST_Node?] the `for` update clause, or null if empty"
        },
        _walk: function (n) {
            return n._visit(this, function () {
                this.init && this.init._walk(n), this.condition && this.condition._walk(n), this.step && this.step._walk(n), this.body._walk(n)
            })
        }
    }, te), ue = A("ForIn", "init name object", {
        $documentation: "A `for ... in` statement",
        $propdoc: {
            init: "[AST_Node] the `for/in` initialization code",
            name: "[AST_SymbolRef?] the loop variable, only if `init` is AST_Var",
            object: "[AST_Node] the object that we're looping through"
        },
        _walk: function (n) {
            return n._visit(this, function () {
                this.init._walk(n), this.object._walk(n), this.body._walk(n)
            })
        }
    }, te), se = A("With", "expression", {
        $documentation: "A `with` statement",
        $propdoc: {expression: "[AST_Node] the `with` expression"},
        _walk: function (n) {
            return n._visit(this, function () {
                this.expression._walk(n), this.body._walk(n)
            })
        }
    }, ne), ce = A("Scope", "directives variables functions uses_with uses_eval parent_scope enclosed cname", {
        $documentation: "Base class for all statements introducing a lexical scope",
        $propdoc: {
            directives: "[string*/S] an array of directives declared in this scope",
            variables: "[Object/S] a map of name -> SymbolDef for all variables/functions defined in this scope",
            functions: "[Object/S] like `variables`, but only lists function declarations",
            uses_with: "[boolean/S] tells whether this scope uses the `with` statement",
            uses_eval: "[boolean/S] tells whether this scope contains a direct call to the global `eval`",
            parent_scope: "[AST_Scope?/S] link to the parent scope",
            enclosed: "[SymbolDef*/S] a list of all symbol definitions that are accessed from this scope or any subscopes",
            cname: "[integer/S] current index for mangling variables (used internally by the mangler)"
        }
    }, J), fe = A("Toplevel", "globals", {
        $documentation: "The toplevel scope",
        $propdoc: {globals: "[Object/S] a map of name -> SymbolDef for all undeclared names"},
        wrap_enclose: function (n) {
            var e = this, t = [], r = [];
            n.forEach(function (n) {
                var e = n.lastIndexOf(":");
                t.push(n.substr(0, e)), r.push(n.substr(e + 1))
            });
            var i = "(function(" + r.join(",") + "){ '$ORIG'; })(" + t.join(",") + ")";
            return i = H(i), i = i.transform(new z(function (n) {
                return n instanceof G && "$ORIG" == n.value ? V.splice(e.body) : void 0
            }))
        },
        wrap_commonjs: function (n, e) {
            var t = this, r = [];
            e && (t.figure_out_scope(), t.walk(new E(function (n) {
                n instanceof nt && n.definition().global && (a(function (e) {
                    return e.name == n.name
                }, r) || r.push(n))
            })));
            var i = "(function(exports, global){ global['" + n + "'] = exports; '$ORIG'; '$EXPORTS'; }({}, (function(){return this}())))";
            return i = H(i), i = i.transform(new z(function (n) {
                if (n instanceof K && (n = n.body, n instanceof pt))switch (n.getValue()) {
                    case"$ORIG":
                        return V.splice(t.body);
                    case"$EXPORTS":
                        var e = [];
                        return r.forEach(function (n) {
                            e.push(new K({
                                body: new Le({
                                    left: new ze({
                                        expression: new st({name: "exports"}),
                                        property: new pt({value: n.name})
                                    }), operator: "=", right: new st(n)
                                })
                            }))
                        }), V.splice(e)
                }
            }))
        }
    }, ce), le = A("Lambda", "name argnames uses_arguments", {
        $documentation: "Base class for functions",
        $propdoc: {
            name: "[AST_SymbolDeclaration?] the name of this function",
            argnames: "[AST_SymbolFunarg*] array of function arguments",
            uses_arguments: "[boolean/S] tells whether this function accesses the arguments array"
        },
        _walk: function (n) {
            return n._visit(this, function () {
                this.name && this.name._walk(n), this.argnames.forEach(function (e) {
                    e._walk(n)
                }), w(this, n)
            })
        }
    }, ce), pe = A("Accessor", null, {$documentation: "A setter/getter function.  The `name` property is always null."}, le), de = A("Function", null, {$documentation: "A function expression"}, le), he = A("Defun", null, {$documentation: "A function definition"}, le), _e = A("Jump", null, {$documentation: "Base class for “jumps” (for now that's `return`, `throw`, `break` and `continue`)"}, Y), me = A("Exit", "value", {
        $documentation: "Base class for “exits” (`return` and `throw`)",
        $propdoc: {value: "[AST_Node?] the value returned or thrown by this statement; could be null for AST_Return"},
        _walk: function (n) {
            return n._visit(this, this.value && function () {
                    this.value._walk(n)
                })
        }
    }, _e), ve = A("Return", null, {$documentation: "A `return` statement"}, me), ge = A("Throw", null, {$documentation: "A `throw` statement"}, me), be = A("LoopControl", "label", {
        $documentation: "Base class for loop control statements (`break` and `continue`)",
        $propdoc: {label: "[AST_LabelRef?] the label, or null if none"},
        _walk: function (n) {
            return n._visit(this, this.label && function () {
                    this.label._walk(n)
                })
        }
    }, _e), ye = A("Break", null, {$documentation: "A `break` statement"}, be), Ae = A("Continue", null, {$documentation: "A `continue` statement"}, be), we = A("If", "condition alternative", {
        $documentation: "A `if` statement",
        $propdoc: {
            condition: "[AST_Node] the `if` condition",
            alternative: "[AST_Statement?] the `else` part, or null if not present"
        },
        _walk: function (n) {
            return n._visit(this, function () {
                this.condition._walk(n), this.body._walk(n), this.alternative && this.alternative._walk(n)
            })
        }
    }, ne), Ee = A("Switch", "expression", {
        $documentation: "A `switch` statement",
        $propdoc: {expression: "[AST_Node] the `switch` “discriminant”"},
        _walk: function (n) {
            return n._visit(this, function () {
                this.expression._walk(n), w(this, n)
            })
        }
    }, J), De = A("SwitchBranch", null, {$documentation: "Base class for `switch` branches"}, J), Fe = A("Default", null, {$documentation: "A `default` switch branch"}, De), Se = A("Case", "expression", {
        $documentation: "A `case` switch branch",
        $propdoc: {expression: "[AST_Node] the `case` expression"},
        _walk: function (n) {
            return n._visit(this, function () {
                this.expression._walk(n), w(this, n)
            })
        }
    }, De), Ce = A("Try", "bcatch bfinally", {
        $documentation: "A `try` statement",
        $propdoc: {
            bcatch: "[AST_Catch?] the catch block, or null if not present",
            bfinally: "[AST_Finally?] the finally block, or null if not present"
        },
        _walk: function (n) {
            return n._visit(this, function () {
                w(this, n), this.bcatch && this.bcatch._walk(n), this.bfinally && this.bfinally._walk(n)
            })
        }
    }, J), ke = A("Catch", "argname", {
        $documentation: "A `catch` node; only makes sense as part of a `try` statement",
        $propdoc: {argname: "[AST_SymbolCatch] symbol for the exception"},
        _walk: function (n) {
            return n._visit(this, function () {
                this.argname._walk(n), w(this, n)
            })
        }
    }, J), xe = A("Finally", null, {$documentation: "A `finally` node; only makes sense as part of a `try` statement"}, J), Be = A("Definitions", "definitions", {
        $documentation: "Base class for `var` or `const` nodes (variable declarations/initializations)",
        $propdoc: {definitions: "[AST_VarDef*] array of variable definitions"},
        _walk: function (n) {
            return n._visit(this, function () {
                this.definitions.forEach(function (e) {
                    e._walk(n)
                })
            })
        }
    }, Y), Te = A("Var", null, {$documentation: "A `var` statement"}, Be), $e = A("Const", null, {$documentation: "A `const` statement"}, Be), Oe = A("VarDef", "name value", {
        $documentation: "A variable declaration; only appears in a AST_Definitions node",
        $propdoc: {
            name: "[AST_SymbolVar|AST_SymbolConst] name of the variable",
            value: "[AST_Node?] initializer, or null of there's no initializer"
        },
        _walk: function (n) {
            return n._visit(this, function () {
                this.name._walk(n), this.value && this.value._walk(n)
            })
        }
    }), Me = A("Call", "expression args", {
        $documentation: "A function call expression",
        $propdoc: {expression: "[AST_Node] expression to invoke as function", args: "[AST_Node*] array of arguments"},
        _walk: function (n) {
            return n._visit(this, function () {
                this.expression._walk(n), this.args.forEach(function (e) {
                    e._walk(n)
                })
            })
        }
    }), Ne = A("New", null, {$documentation: "An object instantiation.  Derives from a function call since it has exactly the same properties"}, Me), Re = A("Seq", "car cdr", {
        $documentation: "A sequence expression (two comma-separated expressions)",
        $propdoc: {car: "[AST_Node] first element in sequence", cdr: "[AST_Node] second element in sequence"},
        $cons: function (n, e) {
            var t = new Re(n);
            return t.car = n, t.cdr = e, t
        },
        $from_array: function (n) {
            if (0 == n.length)return null;
            if (1 == n.length)return n[0].clone();
            for (var e = null, t = n.length; --t >= 0;)e = Re.cons(n[t], e);
            for (var r = e; r;) {
                if (r.cdr && !r.cdr.cdr) {
                    r.cdr = r.cdr.car;
                    break
                }
                r = r.cdr
            }
            return e
        },
        to_array: function () {
            for (var n = this, e = []; n;) {
                if (e.push(n.car), n.cdr && !(n.cdr instanceof Re)) {
                    e.push(n.cdr);
                    break
                }
                n = n.cdr
            }
            return e
        },
        add: function (n) {
            for (var e = this; e;) {
                if (!(e.cdr instanceof Re)) {
                    var t = Re.cons(e.cdr, n);
                    return e.cdr = t
                }
                e = e.cdr
            }
        },
        _walk: function (n) {
            return n._visit(this, function () {
                this.car._walk(n), this.cdr && this.cdr._walk(n)
            })
        }
    }), qe = A("PropAccess", "expression property", {
        $documentation: 'Base class for property access expressions, i.e. `a.foo` or `a["foo"]`',
        $propdoc: {
            expression: "[AST_Node] the “container” expression",
            property: "[AST_Node|string] the property to access.  For AST_Dot this is always a plain string, while for AST_Sub it's an arbitrary AST_Node"
        }
    }), He = A("Dot", null, {
        $documentation: "A dotted property access expression", _walk: function (n) {
            return n._visit(this, function () {
                this.expression._walk(n)
            })
        }
    }, qe), ze = A("Sub", null, {
        $documentation: 'Index-style property access, i.e. `a["foo"]`', _walk: function (n) {
            return n._visit(this, function () {
                this.expression._walk(n), this.property._walk(n)
            })
        }
    }, qe), Pe = A("Unary", "operator expression", {
        $documentation: "Base class for unary expressions",
        $propdoc: {
            operator: "[string] the operator",
            expression: "[AST_Node] expression that this unary operator applies to"
        },
        _walk: function (n) {
            return n._visit(this, function () {
                this.expression._walk(n)
            })
        }
    }), je = A("UnaryPrefix", null, {$documentation: "Unary prefix expression, i.e. `typeof i` or `++i`"}, Pe), Ie = A("UnaryPostfix", null, {$documentation: "Unary postfix expression, i.e. `i++`"}, Pe), Ue = A("Binary", "left operator right", {
        $documentation: "Binary expression, i.e. `a + b`",
        $propdoc: {
            left: "[AST_Node] left-hand side expression",
            operator: "[string] the operator",
            right: "[AST_Node] right-hand side expression"
        },
        _walk: function (n) {
            return n._visit(this, function () {
                this.left._walk(n), this.right._walk(n)
            })
        }
    }), Ve = A("Conditional", "condition consequent alternative", {
        $documentation: "Conditional expression using the ternary operator, i.e. `a ? b : c`",
        $propdoc: {condition: "[AST_Node]", consequent: "[AST_Node]", alternative: "[AST_Node]"},
        _walk: function (n) {
            return n._visit(this, function () {
                this.condition._walk(n), this.consequent._walk(n), this.alternative._walk(n)
            })
        }
    }), Le = A("Assign", null, {$documentation: "An assignment expression — `a = b + 5`"}, Ue), We = A("Array", "elements", {
        $documentation: "An array literal",
        $propdoc: {elements: "[AST_Node*] array of elements"},
        _walk: function (n) {
            return n._visit(this, function () {
                this.elements.forEach(function (e) {
                    e._walk(n)
                })
            })
        }
    }), Ye = A("Object", "properties", {
        $documentation: "An object literal",
        $propdoc: {properties: "[AST_ObjectProperty*] array of properties"},
        _walk: function (n) {
            return n._visit(this, function () {
                this.properties.forEach(function (e) {
                    e._walk(n)
                })
            })
        }
    }), Xe = A("ObjectProperty", "key value", {
        $documentation: "Base class for literal object properties",
        $propdoc: {
            key: "[string] the property name converted to a string for ObjectKeyVal.  For setters and getters this is an arbitrary AST_Node.",
            value: "[AST_Node] property value.  For setters and getters this is an AST_Function."
        },
        _walk: function (n) {
            return n._visit(this, function () {
                this.value._walk(n)
            })
        }
    }), Ge = A("ObjectKeyVal", null, {$documentation: "A key: value object property"}, Xe), Ke = A("ObjectSetter", null, {$documentation: "An object setter property"}, Xe), Je = A("ObjectGetter", null, {$documentation: "An object getter property"}, Xe), Ze = A("Symbol", "scope name thedef", {
        $propdoc: {
            name: "[string] name of this symbol",
            scope: "[AST_Scope/S] the current scope (not necessarily the definition scope)",
            thedef: "[SymbolDef/S] the definition of this symbol"
        }, $documentation: "Base class for all symbols"
    }), Qe = A("SymbolAccessor", null, {$documentation: "The name of a property accessor (setter/getter function)"}, Ze), nt = A("SymbolDeclaration", "init", {
        $documentation: "A declaration symbol (symbol in var/const, function name or argument, symbol in catch)",
        $propdoc: {init: "[AST_Node*/S] array of initializers for this declaration."}
    }, Ze), et = A("SymbolVar", null, {$documentation: "Symbol defining a variable"}, nt), tt = A("SymbolConst", null, {$documentation: "A constant declaration"}, nt), rt = A("SymbolFunarg", null, {$documentation: "Symbol naming a function argument"}, et), it = A("SymbolDefun", null, {$documentation: "Symbol defining a function"}, nt), ot = A("SymbolLambda", null, {$documentation: "Symbol naming a function expression"}, nt), at = A("SymbolCatch", null, {$documentation: "Symbol naming the exception in catch"}, nt), ut = A("Label", "references", {
        $documentation: "Symbol naming a label (declaration)",
        $propdoc: {references: "[AST_LoopControl*] a list of nodes referring to this label"},
        initialize: function () {
            this.references = [], this.thedef = this
        }
    }, Ze), st = A("SymbolRef", null, {$documentation: "Reference to some symbol (not definition/declaration)"}, Ze), ct = A("LabelRef", null, {$documentation: "Reference to a label symbol"}, Ze), ft = A("This", null, {$documentation: "The `this` symbol"}, Ze), lt = A("Constant", null, {
        $documentation: "Base class for all constants",
        getValue: function () {
            return this.value
        }
    }), pt = A("String", "value", {
        $documentation: "A string literal",
        $propdoc: {value: "[string] the contents of this string"}
    }, lt), dt = A("Number", "value", {
        $documentation: "A number literal",
        $propdoc: {value: "[number] the numeric value"}
    }, lt), ht = A("RegExp", "value", {
        $documentation: "A regexp literal",
        $propdoc: {value: "[RegExp] the actual regexp"}
    }, lt), _t = A("Atom", null, {$documentation: "Base class for atoms"}, lt), mt = A("Null", null, {
        $documentation: "The `null` atom",
        value: null
    }, _t), vt = A("NaN", null, {
        $documentation: "The impossible value",
        value: 0 / 0
    }, _t), gt = A("Undefined", null, {
        $documentation: "The `undefined` value",
        value: void 0
    }, _t), bt = A("Hole", null, {
        $documentation: "A hole in an array",
        value: void 0
    }, _t), yt = A("Infinity", null, {
        $documentation: "The `Infinity` value",
        value: 1 / 0
    }, _t), At = A("Boolean", null, {$documentation: "Base class for booleans"}, _t), wt = A("False", null, {
        $documentation: "The `false` atom",
        value: !1
    }, At), Et = A("True", null, {$documentation: "The `true` atom", value: !0}, At);
    E.prototype = {
        _visit: function (n, e) {
            this.stack.push(n);
            var t = this.visit(n, e ? function () {
                e.call(n)
            } : l);
            return !t && e && e.call(n), this.stack.pop(), t
        }, parent: function (n) {
            return this.stack[this.stack.length - 2 - (n || 0)]
        }, push: function (n) {
            this.stack.push(n)
        }, pop: function () {
            return this.stack.pop()
        }, self: function () {
            return this.stack[this.stack.length - 1]
        }, find_parent: function (n) {
            for (var e = this.stack, t = e.length; --t >= 0;) {
                var r = e[t];
                if (r instanceof n)return r
            }
        }, has_directive: function (n) {
            return this.find_parent(ce).has_directive(n)
        }, in_boolean_context: function () {
            for (var n = this.stack, e = n.length, t = n[--e]; e > 0;) {
                var r = n[--e];
                if (r instanceof we && r.condition === t || r instanceof Ve && r.condition === t || r instanceof re && r.condition === t || r instanceof ae && r.condition === t || r instanceof je && "!" == r.operator && r.expression === t)return !0;
                if (!(r instanceof Ue) || "&&" != r.operator && "||" != r.operator)return !1;
                t = r
            }
        }, loopcontrol_target: function (n) {
            var e = this.stack;
            if (n)for (var t = e.length; --t >= 0;) {
                var r = e[t];
                if (r instanceof ee && r.label.name == n.name)return r.body
            } else for (var t = e.length; --t >= 0;) {
                var r = e[t];
                if (r instanceof Ee || r instanceof te)return r
            }
        }
    };
    var Dt = "break case catch const continue debugger default delete do else finally for function if in instanceof new return switch throw try typeof var void while with", Ft = "false null true", St = "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized this throws transient volatile yield " + Ft + " " + Dt, Ct = "return new delete throw else case";
    Dt = g(Dt), St = g(St), Ct = g(Ct), Ft = g(Ft);
    var kt = g(i("+-*&%=<>!?|~^")), xt = /^0x[0-9a-f]+$/i, Bt = /^0[0-7]+$/, Tt = /^\d*\.?\d*(?:e[+-]?\d*(?:\d\.?|\.?\d)\d*)?$/i, $t = g(["in", "instanceof", "typeof", "new", "void", "delete", "++", "--", "+", "-", "!", "~", "&", "|", "^", "*", "/", "%", ">>", "<<", ">>>", "<", ">", "<=", ">=", "==", "===", "!=", "!==", "?", "=", "+=", "-=", "/=", "*=", "%=", ">>=", "<<=", ">>>=", "|=", "^=", "&=", "&&", "||"]), Ot = g(i("  \n\r	\f​᠎             　")), Mt = g(i("[{(,.;:")), Nt = g(i("[]{}(),;:")), Rt = g(i("gmsiy")), qt = {
        letter: new RegExp("[\\u0041-\\u005A\\u0061-\\u007A\\u00AA\\u00B5\\u00BA\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u0523\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0621-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971\\u0972\\u097B-\\u097F\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C33\\u0C35-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D28\\u0D2A-\\u0D39\\u0D3D\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC\\u0EDD\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8B\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10D0-\\u10FA\\u10FC\\u1100-\\u1159\\u115F-\\u11A2\\u11A8-\\u11F9\\u1200-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u1676\\u1681-\\u169A\\u16A0-\\u16EA\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u1900-\\u191C\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19A9\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u2094\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2183\\u2184\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2C6F\\u2C71-\\u2C7D\\u2C80-\\u2CE4\\u2D00-\\u2D25\\u2D30-\\u2D65\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005\\u3006\\u3031-\\u3035\\u303B\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31B7\\u31F0-\\u31FF\\u3400\\u4DB5\\u4E00\\u9FC3\\uA000-\\uA48C\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA65F\\uA662-\\uA66E\\uA67F-\\uA697\\uA717-\\uA71F\\uA722-\\uA788\\uA78B\\uA78C\\uA7FB-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA90A-\\uA925\\uA930-\\uA946\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAC00\\uD7A3\\uF900-\\uFA2D\\uFA30-\\uFA6A\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"),
        non_spacing_mark: new RegExp("[\\u0300-\\u036F\\u0483-\\u0487\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065E\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0900-\\u0902\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0955\\u0962\\u0963\\u0981\\u09BC\\u09C1-\\u09C4\\u09CD\\u09E2\\u09E3\\u0A01\\u0A02\\u0A3C\\u0A41\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81\\u0A82\\u0ABC\\u0AC1-\\u0AC5\\u0AC7\\u0AC8\\u0ACD\\u0AE2\\u0AE3\\u0B01\\u0B3C\\u0B3F\\u0B41-\\u0B44\\u0B4D\\u0B56\\u0B62\\u0B63\\u0B82\\u0BC0\\u0BCD\\u0C3E-\\u0C40\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0CBC\\u0CBF\\u0CC6\\u0CCC\\u0CCD\\u0CE2\\u0CE3\\u0D41-\\u0D44\\u0D4D\\u0D62\\u0D63\\u0DCA\\u0DD2-\\u0DD4\\u0DD6\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EB9\\u0EBB\\u0EBC\\u0EC8-\\u0ECD\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86\\u0F87\\u0F90-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039\\u103A\\u103D\\u103E\\u1058\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085\\u1086\\u108D\\u109D\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u18A9\\u1920-\\u1922\\u1927\\u1928\\u1932\\u1939-\\u193B\\u1A17\\u1A18\\u1A56\\u1A58-\\u1A5E\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7C\\u1A7F\\u1B00-\\u1B03\\u1B34\\u1B36-\\u1B3A\\u1B3C\\u1B42\\u1B6B-\\u1B73\\u1B80\\u1B81\\u1BA2-\\u1BA5\\u1BA8\\u1BA9\\u1C2C-\\u1C33\\u1C36\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1DC0-\\u1DE6\\u1DFD-\\u1DFF\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2CEF-\\u2CF1\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F\\uA67C\\uA67D\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA825\\uA826\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA951\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uAA29-\\uAA2E\\uAA31\\uAA32\\uAA35\\uAA36\\uAA43\\uAA4C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE26]"),
        space_combining_mark: new RegExp("[\\u0903\\u093E-\\u0940\\u0949-\\u094C\\u094E\\u0982\\u0983\\u09BE-\\u09C0\\u09C7\\u09C8\\u09CB\\u09CC\\u09D7\\u0A03\\u0A3E-\\u0A40\\u0A83\\u0ABE-\\u0AC0\\u0AC9\\u0ACB\\u0ACC\\u0B02\\u0B03\\u0B3E\\u0B40\\u0B47\\u0B48\\u0B4B\\u0B4C\\u0B57\\u0BBE\\u0BBF\\u0BC1\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCC\\u0BD7\\u0C01-\\u0C03\\u0C41-\\u0C44\\u0C82\\u0C83\\u0CBE\\u0CC0-\\u0CC4\\u0CC7\\u0CC8\\u0CCA\\u0CCB\\u0CD5\\u0CD6\\u0D02\\u0D03\\u0D3E-\\u0D40\\u0D46-\\u0D48\\u0D4A-\\u0D4C\\u0D57\\u0D82\\u0D83\\u0DCF-\\u0DD1\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0F3E\\u0F3F\\u0F7F\\u102B\\u102C\\u1031\\u1038\\u103B\\u103C\\u1056\\u1057\\u1062-\\u1064\\u1067-\\u106D\\u1083\\u1084\\u1087-\\u108C\\u108F\\u109A-\\u109C\\u17B6\\u17BE-\\u17C5\\u17C7\\u17C8\\u1923-\\u1926\\u1929-\\u192B\\u1930\\u1931\\u1933-\\u1938\\u19B0-\\u19C0\\u19C8\\u19C9\\u1A19-\\u1A1B\\u1A55\\u1A57\\u1A61\\u1A63\\u1A64\\u1A6D-\\u1A72\\u1B04\\u1B35\\u1B3B\\u1B3D-\\u1B41\\u1B43\\u1B44\\u1B82\\u1BA1\\u1BA6\\u1BA7\\u1BAA\\u1C24-\\u1C2B\\u1C34\\u1C35\\u1CE1\\u1CF2\\uA823\\uA824\\uA827\\uA880\\uA881\\uA8B4-\\uA8C3\\uA952\\uA953\\uA983\\uA9B4\\uA9B5\\uA9BA\\uA9BB\\uA9BD-\\uA9C0\\uAA2F\\uAA30\\uAA33\\uAA34\\uAA4D\\uAA7B\\uABE3\\uABE4\\uABE6\\uABE7\\uABE9\\uABEA\\uABEC]"),
        connector_punctuation: new RegExp("[\\u005F\\u203F\\u2040\\u2054\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFF3F]")
    };
    M.prototype.toString = function () {
        return this.message + " (line: " + this.line + ", col: " + this.col + ", pos: " + this.pos + ")\n\n" + this.stack
    };
    var Ht = {}, zt = g(["typeof", "void", "delete", "--", "++", "!", "~", "-", "+"]), Pt = g(["--", "++"]), jt = g(["=", "+=", "-=", "/=", "*=", "%=", ">>=", "<<=", ">>>=", "|=", "^=", "&="]), It = function (n, e) {
        for (var t = 0; t < n.length; ++t)for (var r = n[t], i = 0; i < r.length; ++i)e[r[i]] = t + 1;
        return e
    }([["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"]], {}), Ut = t(["for", "do", "while", "switch"]), Vt = t(["atom", "num", "string", "regexp", "name"]);
    z.prototype = new E, function (n) {
        function e(e, t) {
            e.DEFMETHOD("transform", function (e, r) {
                var i, o;
                return e.push(this), e.before && (i = e.before(this, t, r)), i === n && (e.after ? (e.stack[e.stack.length - 1] = i = this.clone(), t(i, e), o = e.after(i, r), o !== n && (i = o)) : (i = this, t(i, e))), e.pop(), i
            })
        }

        function t(n, e) {
            return V(n, function (n) {
                return n.transform(e, !0)
            })
        }

        e(W, l), e(ee, function (n, e) {
            n.label = n.label.transform(e), n.body = n.body.transform(e)
        }), e(K, function (n, e) {
            n.body = n.body.transform(e)
        }), e(J, function (n, e) {
            n.body = t(n.body, e)
        }), e(re, function (n, e) {
            n.condition = n.condition.transform(e), n.body = n.body.transform(e)
        }), e(ae, function (n, e) {
            n.init && (n.init = n.init.transform(e)), n.condition && (n.condition = n.condition.transform(e)), n.step && (n.step = n.step.transform(e)), n.body = n.body.transform(e)
        }), e(ue, function (n, e) {
            n.init = n.init.transform(e), n.object = n.object.transform(e), n.body = n.body.transform(e)
        }), e(se, function (n, e) {
            n.expression = n.expression.transform(e), n.body = n.body.transform(e)
        }), e(me, function (n, e) {
            n.value && (n.value = n.value.transform(e))
        }), e(be, function (n, e) {
            n.label && (n.label = n.label.transform(e))
        }), e(we, function (n, e) {
            n.condition = n.condition.transform(e), n.body = n.body.transform(e), n.alternative && (n.alternative = n.alternative.transform(e))
        }), e(Ee, function (n, e) {
            n.expression = n.expression.transform(e), n.body = t(n.body, e)
        }), e(Se, function (n, e) {
            n.expression = n.expression.transform(e), n.body = t(n.body, e)
        }), e(Ce, function (n, e) {
            n.body = t(n.body, e), n.bcatch && (n.bcatch = n.bcatch.transform(e)), n.bfinally && (n.bfinally = n.bfinally.transform(e))
        }), e(ke, function (n, e) {
            n.argname = n.argname.transform(e), n.body = t(n.body, e)
        }), e(Be, function (n, e) {
            n.definitions = t(n.definitions, e)
        }), e(Oe, function (n, e) {
            n.name = n.name.transform(e), n.value && (n.value = n.value.transform(e))
        }), e(le, function (n, e) {
            n.name && (n.name = n.name.transform(e)), n.argnames = t(n.argnames, e), n.body = t(n.body, e)
        }), e(Me, function (n, e) {
            n.expression = n.expression.transform(e), n.args = t(n.args, e)
        }), e(Re, function (n, e) {
            n.car = n.car.transform(e), n.cdr = n.cdr.transform(e)
        }), e(He, function (n, e) {
            n.expression = n.expression.transform(e)
        }), e(ze, function (n, e) {
            n.expression = n.expression.transform(e), n.property = n.property.transform(e)
        }), e(Pe, function (n, e) {
            n.expression = n.expression.transform(e)
        }), e(Ue, function (n, e) {
            n.left = n.left.transform(e), n.right = n.right.transform(e)
        }), e(Ve, function (n, e) {
            n.condition = n.condition.transform(e), n.consequent = n.consequent.transform(e), n.alternative = n.alternative.transform(e)
        }), e(We, function (n, e) {
            n.elements = t(n.elements, e)
        }), e(Ye, function (n, e) {
            n.properties = t(n.properties, e)
        }), e(Xe, function (n, e) {
            n.value = n.value.transform(e)
        })
    }(), P.prototype = {
        unmangleable: function (n) {
            return this.global && !(n && n.toplevel) || this.undeclared || !(n && n.eval) && (this.scope.uses_eval || this.scope.uses_with)
        }, mangle: function (n) {
            if (!this.mangled_name && !this.unmangleable(n)) {
                var e = this.scope;
                !n.screw_ie8 && this.orig[0]instanceof ot && (e = e.parent_scope), this.mangled_name = e.next_mangled(n, this)
            }
        }
    }, fe.DEFMETHOD("figure_out_scope", function (n) {
        n = c(n, {screw_ie8: !1});
        var e = this, t = e.parent_scope = null, r = null, i = 0, o = new E(function (e, a) {
            if (n.screw_ie8 && e instanceof ke) {
                var u = t;
                return t = new ce(e), t.init_scope_vars(i), t.parent_scope = u, a(), t = u, !0
            }
            if (e instanceof ce) {
                e.init_scope_vars(i);
                var u = e.parent_scope = t, s = r;
                return r = t = e, ++i, a(), --i, t = u, r = s, !0
            }
            if (e instanceof G)return e.scope = t, p(t.directives, e.value), !0;
            if (e instanceof se)for (var c = t; c; c = c.parent_scope)c.uses_with = !0; else if (e instanceof Ze && (e.scope = t), e instanceof ot)r.def_function(e); else if (e instanceof it)(e.scope = r.parent_scope).def_function(e); else if (e instanceof et || e instanceof tt) {
                var f = r.def_variable(e);
                f.constant = e instanceof tt, f.init = o.parent().value
            } else e instanceof at && (n.screw_ie8 ? t : r).def_variable(e)
        });
        e.walk(o);
        var a = null, u = e.globals = new y, o = new E(function (n, t) {
            if (n instanceof le) {
                var r = a;
                return a = n, t(), a = r, !0
            }
            if (n instanceof st) {
                var i = n.name, s = n.scope.find_variable(i);
                if (s)n.thedef = s; else {
                    var c;
                    if (u.has(i) ? c = u.get(i) : (c = new P(e, u.size(), n), c.undeclared = !0, c.global = !0, u.set(i, c)), n.thedef = c, "eval" == i && o.parent()instanceof Me)for (var f = n.scope; f && !f.uses_eval; f = f.parent_scope)f.uses_eval = !0;
                    a && "arguments" == i && (a.uses_arguments = !0)
                }
                return n.reference(), !0
            }
        });
        e.walk(o)
    }), ce.DEFMETHOD("init_scope_vars", function (n) {
        this.directives = [], this.variables = new y, this.functions = new y, this.uses_with = !1, this.uses_eval = !1, this.parent_scope = null, this.enclosed = [], this.cname = -1, this.nesting = n
    }), ce.DEFMETHOD("strict", function () {
        return this.has_directive("use strict")
    }), le.DEFMETHOD("init_scope_vars", function () {
        ce.prototype.init_scope_vars.apply(this, arguments), this.uses_arguments = !1
    }), st.DEFMETHOD("reference", function () {
        var n = this.definition();
        n.references.push(this);
        for (var e = this.scope; e && (p(e.enclosed, n), e !== n.scope);)e = e.parent_scope;
        this.frame = this.scope.nesting - n.scope.nesting
    }), ce.DEFMETHOD("find_variable", function (n) {
        return n instanceof Ze && (n = n.name), this.variables.get(n) || this.parent_scope && this.parent_scope.find_variable(n)
    }), ce.DEFMETHOD("has_directive", function (n) {
        return this.parent_scope && this.parent_scope.has_directive(n) || (this.directives.indexOf(n) >= 0 ? this : null)
    }), ce.DEFMETHOD("def_function", function (n) {
        this.functions.set(n.name, this.def_variable(n))
    }), ce.DEFMETHOD("def_variable", function (n) {
        var e;
        return this.variables.has(n.name) ? (e = this.variables.get(n.name), e.orig.push(n)) : (e = new P(this, this.variables.size(), n), this.variables.set(n.name, e), e.global = !this.parent_scope), n.thedef = e
    }), ce.DEFMETHOD("next_mangled", function (n) {
        var e = this.enclosed;
        n:for (; ;) {
            var t = Lt(++this.cname);
            if (x(t) && !(n.except.indexOf(t) >= 0)) {
                for (var r = e.length; --r >= 0;) {
                    var i = e[r], o = i.mangled_name || i.unmangleable(n) && i.name;
                    if (t == o)continue n
                }
                return t
            }
        }
    }), de.DEFMETHOD("next_mangled", function (n, e) {
        for (var t = e.orig[0]instanceof rt && this.name && this.name.definition(); ;) {
            var r = le.prototype.next_mangled.call(this, n, e);
            if (!t || t.mangled_name != r)return r
        }
    }), ce.DEFMETHOD("references", function (n) {
        return n instanceof Ze && (n = n.definition()), this.enclosed.indexOf(n) < 0 ? null : n
    }), Ze.DEFMETHOD("unmangleable", function (n) {
        return this.definition().unmangleable(n)
    }), Qe.DEFMETHOD("unmangleable", function () {
        return !0
    }), ut.DEFMETHOD("unmangleable", function () {
        return !1
    }), Ze.DEFMETHOD("unreferenced", function () {
        return 0 == this.definition().references.length && !(this.scope.uses_eval || this.scope.uses_with)
    }), Ze.DEFMETHOD("undeclared", function () {
        return this.definition().undeclared
    }), ct.DEFMETHOD("undeclared", function () {
        return !1
    }), ut.DEFMETHOD("undeclared", function () {
        return !1
    }), Ze.DEFMETHOD("definition", function () {
        return this.thedef
    }), Ze.DEFMETHOD("global", function () {
        return this.definition().global
    }), fe.DEFMETHOD("_default_mangler_options", function (n) {
        return c(n, {except: [], eval: !1, sort: !1, toplevel: !1, screw_ie8: !1})
    }), fe.DEFMETHOD("mangle_names", function (n) {
        n = this._default_mangler_options(n);
        var e = -1, t = [], r = new E(function (i, o) {
            if (i instanceof ee) {
                var a = e;
                return o(), e = a, !0
            }
            if (i instanceof ce) {
                var u = (r.parent(), []);
                return i.variables.each(function (e) {
                    n.except.indexOf(e.name) < 0 && u.push(e)
                }), n.sort && u.sort(function (n, e) {
                    return e.references.length - n.references.length
                }), void t.push.apply(t, u)
            }
            if (i instanceof ut) {
                var s;
                do s = Lt(++e); while (!x(s));
                return i.mangled_name = s, !0
            }
            return n.screw_ie8 && i instanceof at ? void t.push(i.definition()) : void 0
        });
        this.walk(r), t.forEach(function (e) {
            e.mangle(n)
        })
    }), fe.DEFMETHOD("compute_char_frequency", function (n) {
        n = this._default_mangler_options(n);
        var e = new E(function (e) {
            e instanceof lt ? Lt.consider(e.print_to_string()) : e instanceof ve ? Lt.consider("return") : e instanceof ge ? Lt.consider("throw") : e instanceof Ae ? Lt.consider("continue") : e instanceof ye ? Lt.consider("break") : e instanceof X ? Lt.consider("debugger") : e instanceof G ? Lt.consider(e.value) : e instanceof oe ? Lt.consider("while") : e instanceof ie ? Lt.consider("do while") : e instanceof we ? (Lt.consider("if"), e.alternative && Lt.consider("else")) : e instanceof Te ? Lt.consider("var") : e instanceof $e ? Lt.consider("const") : e instanceof le ? Lt.consider("function") : e instanceof ae ? Lt.consider("for") : e instanceof ue ? Lt.consider("for in") : e instanceof Ee ? Lt.consider("switch") : e instanceof Se ? Lt.consider("case") : e instanceof Fe ? Lt.consider("default") : e instanceof se ? Lt.consider("with") : e instanceof Ke ? Lt.consider("set" + e.key) : e instanceof Je ? Lt.consider("get" + e.key) : e instanceof Ge ? Lt.consider(e.key) : e instanceof Ne ? Lt.consider("new") : e instanceof ft ? Lt.consider("this") : e instanceof Ce ? Lt.consider("try") : e instanceof ke ? Lt.consider("catch") : e instanceof xe ? Lt.consider("finally") : e instanceof Ze && e.unmangleable(n) ? Lt.consider(e.name) : e instanceof Pe || e instanceof Ue ? Lt.consider(e.operator) : e instanceof He && Lt.consider(e.property)
        });
        this.walk(e), Lt.sort()
    });
    var Lt = function () {
        function n() {
            r = Object.create(null), t = i.split("").map(function (n) {
                return n.charCodeAt(0)
            }), t.forEach(function (n) {
                r[n] = 0
            })
        }

        function e(n) {
            var e = "", r = 54;
            do e += String.fromCharCode(t[n % r]), n = Math.floor(n / r), r = 64; while (n > 0);
            return e
        }

        var t, r, i = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";
        return e.consider = function (n) {
            for (var e = n.length; --e >= 0;) {
                var t = n.charCodeAt(e);
                t in r && ++r[t]
            }
        }, e.sort = function () {
            t = _(t, function (n, e) {
                return F(n) && !F(e) ? 1 : F(e) && !F(n) ? -1 : r[e] - r[n]
            })
        }, e.reset = n, n(), e.get = function () {
            return t
        }, e.freq = function () {
            return r
        }, e
    }();
    fe.DEFMETHOD("scope_warnings", function (n) {
        n = c(n, {
            undeclared: !1,
            unreferenced: !0,
            assign_to_global: !0,
            func_arguments: !0,
            nested_defuns: !0,
            eval: !0
        });
        var e = new E(function (t) {
            if (n.undeclared && t instanceof st && t.undeclared() && W.warn("Undeclared symbol: {name} [{file}:{line},{col}]", {
                    name: t.name,
                    file: t.start.file,
                    line: t.start.line,
                    col: t.start.col
                }), n.assign_to_global) {
                var r = null;
                t instanceof Le && t.left instanceof st ? r = t.left : t instanceof ue && t.init instanceof st && (r = t.init), r && (r.undeclared() || r.global() && r.scope !== r.definition().scope) && W.warn("{msg}: {name} [{file}:{line},{col}]", {
                    msg: r.undeclared() ? "Accidental global?" : "Assignment to global",
                    name: r.name,
                    file: r.start.file,
                    line: r.start.line,
                    col: r.start.col
                })
            }
            n.eval && t instanceof st && t.undeclared() && "eval" == t.name && W.warn("Eval is used [{file}:{line},{col}]", t.start), n.unreferenced && (t instanceof nt || t instanceof ut) && t.unreferenced() && W.warn("{type} {name} is declared but not referenced [{file}:{line},{col}]", {
                type: t instanceof ut ? "Label" : "Symbol",
                name: t.name,
                file: t.start.file,
                line: t.start.line,
                col: t.start.col
            }), n.func_arguments && t instanceof le && t.uses_arguments && W.warn("arguments used in function {name} [{file}:{line},{col}]", {
                name: t.name ? t.name.name : "anonymous",
                file: t.start.file,
                line: t.start.line,
                col: t.start.col
            }), n.nested_defuns && t instanceof he && !(e.parent()instanceof ce) && W.warn('Function {name} declared in nested statement "{type}" [{file}:{line},{col}]', {
                name: t.name.name,
                type: e.parent().TYPE,
                file: t.start.file,
                line: t.start.line,
                col: t.start.col
            })
        });
        this.walk(e)
    }), function () {
        function n(n, e) {
            n.DEFMETHOD("_codegen", e)
        }

        function e(n, e) {
            n.DEFMETHOD("needs_parens", e)
        }

        function t(n) {
            var e = n.parent();
            return e instanceof Pe ? !0 : e instanceof Ue && !(e instanceof Le) ? !0 : e instanceof Me && e.expression === this ? !0 : e instanceof Ve && e.condition === this ? !0 : e instanceof qe && e.expression === this ? !0 : void 0
        }

        function r(n, e, t) {
            var r = n.length - 1;
            n.forEach(function (n, i) {
                n instanceof Q || (t.indent(), n.print(t), i == r && e || (t.newline(), e && t.newline()))
            })
        }

        function i(n, e) {
            n.length > 0 ? e.with_block(function () {
                r(n, !1, e)
            }) : e.print("{}")
        }

        function o(n, e) {
            if (e.option("bracketize"))return void h(n.body, e);
            if (!n.body)return e.force_semicolon();
            if (n.body instanceof ie && !e.option("screw_ie8"))return void h(n.body, e);
            for (var t = n.body; ;)if (t instanceof we) {
                if (!t.alternative)return void h(n.body, e);
                t = t.alternative
            } else {
                if (!(t instanceof ne))break;
                t = t.body
            }
            s(n.body, e)
        }

        function a(n, e, t) {
            if (t)try {
                n.walk(new E(function (n) {
                    if (n instanceof Ue && "in" == n.operator)throw e
                })), n.print(e)
            } catch (r) {
                if (r !== e)throw r;
                n.print(e, !0)
            } else n.print(e)
        }

        function u(n) {
            return [92, 47, 46, 43, 42, 63, 40, 41, 91, 93, 123, 125, 36, 94, 58, 124, 33, 10, 13, 0, 65279, 8232, 8233].indexOf(n) < 0
        }

        function s(n, e) {
            e.option("bracketize") ? !n || n instanceof Q ? e.print("{}") : n instanceof Z ? n.print(e) : e.with_block(function () {
                e.indent(), n.print(e), e.newline()
            }) : !n || n instanceof Q ? e.force_semicolon() : n.print(e)
        }

        function c(n) {
            for (var e = n.stack(), t = e.length, r = e[--t], i = e[--t]; t > 0;) {
                if (i instanceof Y && i.body === r)return !0;
                if (!(i instanceof Re && i.car === r || i instanceof Me && i.expression === r && !(i instanceof Ne) || i instanceof He && i.expression === r || i instanceof ze && i.expression === r || i instanceof Ve && i.condition === r || i instanceof Ue && i.left === r || i instanceof Ie && i.expression === r))return !1;
                r = i, i = e[--t]
            }
        }

        function f(n, e) {
            return 0 == n.args.length && !e.option("beautify")
        }

        function p(n) {
            for (var e = n[0], t = e.length, r = 1; r < n.length; ++r)n[r].length < t && (e = n[r], t = e.length);
            return e
        }

        function d(n) {
            var e, t = n.toString(10), r = [t.replace(/^0\./, ".").replace("e+", "e")];
            return Math.floor(n) === n ? (n >= 0 ? r.push("0x" + n.toString(16).toLowerCase(), "0" + n.toString(8)) : r.push("-0x" + (-n).toString(16).toLowerCase(), "-0" + (-n).toString(8)), (e = /^(.*?)(0+)$/.exec(n)) && r.push(e[1] + "e" + e[2].length)) : (e = /^0?\.(0+)(.*)$/.exec(n)) && r.push(e[2] + "e-" + (e[1].length + e[2].length), t.substr(t.indexOf("."))), p(r)
        }

        function h(n, e) {
            return n instanceof Z ? void n.print(e) : void e.with_block(function () {
                e.indent(), n.print(e), e.newline()
            })
        }

        function _(n, e) {
            n.DEFMETHOD("add_source_map", function (n) {
                e(this, n)
            })
        }

        function m(n, e) {
            e.add_mapping(n.start)
        }

        W.DEFMETHOD("print", function (n, e) {
            function t() {
                r.add_comments(n), r.add_source_map(n), i(r, n)
            }

            var r = this, i = r._codegen;
            n.push_node(r), e || r.needs_parens(n) ? n.with_parens(t) : t(), n.pop_node()
        }), W.DEFMETHOD("print_to_string", function (n) {
            var e = j(n);
            return this.print(e), e.get()
        }), W.DEFMETHOD("add_comments", function (n) {
            var e = n.option("comments"), t = this;
            if (e) {
                var r = t.start;
                if (r && !r._comments_dumped) {
                    r._comments_dumped = !0;
                    var i = r.comments_before || [];
                    t instanceof me && t.value && t.value.walk(new E(function (n) {
                        return n.start && n.start.comments_before && (i = i.concat(n.start.comments_before), n.start.comments_before = []), n instanceof de || n instanceof We || n instanceof Ye ? !0 : void 0
                    })), e.test ? i = i.filter(function (n) {
                        return e.test(n.value)
                    }) : "function" == typeof e && (i = i.filter(function (n) {
                        return e(t, n)
                    })), i.forEach(function (e) {
                        /comment[134]/.test(e.type) ? (n.print("//" + e.value + "\n"), n.indent()) : "comment2" == e.type && (n.print("/*" + e.value + "*/"), r.nlb ? (n.print("\n"), n.indent()) : n.space())
                    })
                }
            }
        }), e(W, function () {
            return !1
        }), e(de, function (n) {
            return c(n)
        }), e(Ye, function (n) {
            return c(n)
        }), e(Pe, function (n) {
            var e = n.parent();
            return e instanceof qe && e.expression === this
        }), e(Re, function (n) {
            var e = n.parent();
            return e instanceof Me || e instanceof Pe || e instanceof Ue || e instanceof Oe || e instanceof qe || e instanceof We || e instanceof Xe || e instanceof Ve
        }), e(Ue, function (n) {
            var e = n.parent();
            if (e instanceof Me && e.expression === this)return !0;
            if (e instanceof Pe)return !0;
            if (e instanceof qe && e.expression === this)return !0;
            if (e instanceof Ue) {
                var t = e.operator, r = It[t], i = this.operator, o = It[i];
                if (r > o || r == o && this === e.right)return !0
            }
        }), e(qe, function (n) {
            var e = n.parent();
            if (e instanceof Ne && e.expression === this)try {
                this.walk(new E(function (n) {
                    if (n instanceof Me)throw e
                }))
            } catch (t) {
                if (t !== e)throw t;
                return !0
            }
        }), e(Me, function (n) {
            var e, t = n.parent();
            return t instanceof Ne && t.expression === this ? !0 : this.expression instanceof de && t instanceof qe && t.expression === this && (e = n.parent(1))instanceof Le && e.left === t
        }), e(Ne, function (n) {
            var e = n.parent();
            return f(this, n) && (e instanceof qe || e instanceof Me && e.expression === this) ? !0 : void 0
        }), e(dt, function (n) {
            var e = n.parent();
            return this.getValue() < 0 && e instanceof qe && e.expression === this ? !0 : void 0
        }), e(vt, function (n) {
            var e = n.parent();
            return e instanceof qe && e.expression === this ? !0 : void 0
        }), e(Le, t), e(Ve, t), n(G, function (n, e) {
            e.print_string(n.value), e.semicolon()
        }), n(X, function (n, e) {
            e.print("debugger"), e.semicolon()
        }), ne.DEFMETHOD("_do_print_body", function (n) {
            s(this.body, n)
        }), n(Y, function (n, e) {
            n.body.print(e), e.semicolon()
        }), n(fe, function (n, e) {
            r(n.body, !0, e), e.print("")
        }), n(ee, function (n, e) {
            n.label.print(e), e.colon(), n.body.print(e)
        }), n(K, function (n, e) {
            n.body.print(e), e.semicolon()
        }), n(Z, function (n, e) {
            i(n.body, e)
        }), n(Q, function (n, e) {
            e.semicolon()
        }), n(ie, function (n, e) {
            e.print("do"), e.space(), n._do_print_body(e), e.space(), e.print("while"), e.space(), e.with_parens(function () {
                n.condition.print(e)
            }), e.semicolon()
        }), n(oe, function (n, e) {
            e.print("while"), e.space(), e.with_parens(function () {
                n.condition.print(e)
            }), e.space(), n._do_print_body(e)
        }), n(ae, function (n, e) {
            e.print("for"), e.space(), e.with_parens(function () {
                !n.init || n.init instanceof Q ? e.print(";") : (n.init instanceof Be ? n.init.print(e) : a(n.init, e, !0), e.print(";"), e.space()), n.condition ? (n.condition.print(e), e.print(";"), e.space()) : e.print(";"), n.step && n.step.print(e)
            }), e.space(), n._do_print_body(e)
        }), n(ue, function (n, e) {
            e.print("for"), e.space(), e.with_parens(function () {
                n.init.print(e), e.space(), e.print("in"), e.space(), n.object.print(e)
            }), e.space(), n._do_print_body(e)
        }), n(se, function (n, e) {
            e.print("with"), e.space(), e.with_parens(function () {
                n.expression.print(e)
            }), e.space(), n._do_print_body(e)
        }), le.DEFMETHOD("_do_print", function (n, e) {
            var t = this;
            e || n.print("function"), t.name && (n.space(), t.name.print(n)), n.with_parens(function () {
                t.argnames.forEach(function (e, t) {
                    t && n.comma(), e.print(n)
                })
            }), n.space(), i(t.body, n)
        }), n(le, function (n, e) {
            n._do_print(e)
        }), me.DEFMETHOD("_do_print", function (n, e) {
            n.print(e), this.value && (n.space(), this.value.print(n)), n.semicolon()
        }), n(ve, function (n, e) {
            n._do_print(e, "return")
        }), n(ge, function (n, e) {
            n._do_print(e, "throw")
        }), be.DEFMETHOD("_do_print", function (n, e) {
            n.print(e), this.label && (n.space(), this.label.print(n)), n.semicolon()
        }), n(ye, function (n, e) {
            n._do_print(e, "break")
        }), n(Ae, function (n, e) {
            n._do_print(e, "continue")
        }), n(we, function (n, e) {
            e.print("if"), e.space(), e.with_parens(function () {
                n.condition.print(e)
            }), e.space(), n.alternative ? (o(n, e), e.space(), e.print("else"), e.space(), s(n.alternative, e)) : n._do_print_body(e)
        }), n(Ee, function (n, e) {
            e.print("switch"), e.space(), e.with_parens(function () {
                n.expression.print(e)
            }), e.space(), n.body.length > 0 ? e.with_block(function () {
                n.body.forEach(function (n, t) {
                    t && e.newline(), e.indent(!0), n.print(e)
                })
            }) : e.print("{}")
        }), De.DEFMETHOD("_do_print_body", function (n) {
            this.body.length > 0 && (n.newline(), this.body.forEach(function (e) {
                n.indent(), e.print(n), n.newline()
            }))
        }), n(Fe, function (n, e) {
            e.print("default:"), n._do_print_body(e)
        }), n(Se, function (n, e) {
            e.print("case"), e.space(), n.expression.print(e), e.print(":"), n._do_print_body(e)
        }), n(Ce, function (n, e) {
            e.print("try"), e.space(), i(n.body, e), n.bcatch && (e.space(), n.bcatch.print(e)), n.bfinally && (e.space(), n.bfinally.print(e))
        }), n(ke, function (n, e) {
            e.print("catch"), e.space(), e.with_parens(function () {
                n.argname.print(e)
            }), e.space(), i(n.body, e)
        }), n(xe, function (n, e) {
            e.print("finally"), e.space(), i(n.body, e)
        }), Be.DEFMETHOD("_do_print", function (n, e) {
            n.print(e), n.space(), this.definitions.forEach(function (e, t) {
                t && n.comma(), e.print(n)
            });
            var t = n.parent(), r = t instanceof ae || t instanceof ue, i = r && t.init === this;
            i || n.semicolon()
        }), n(Te, function (n, e) {
            n._do_print(e, "var")
        }), n($e, function (n, e) {
            n._do_print(e, "const")
        }), n(Oe, function (n, e) {
            if (n.name.print(e), n.value) {
                e.space(), e.print("="), e.space();
                var t = e.parent(1), r = t instanceof ae || t instanceof ue;
                a(n.value, e, r)
            }
        }), n(Me, function (n, e) {
            n.expression.print(e), n instanceof Ne && f(n, e) || e.with_parens(function () {
                n.args.forEach(function (n, t) {
                    t && e.comma(), n.print(e)
                })
            })
        }), n(Ne, function (n, e) {
            e.print("new"), e.space(), Me.prototype._codegen(n, e)
        }), Re.DEFMETHOD("_do_print", function (n) {
            this.car.print(n), this.cdr && (n.comma(), n.should_break() && (n.newline(), n.indent()), this.cdr.print(n))
        }), n(Re, function (n, e) {
            n._do_print(e)
        }), n(He, function (n, e) {
            var t = n.expression;
            t.print(e), t instanceof dt && t.getValue() >= 0 && (/[xa-f.]/i.test(e.last()) || e.print(".")), e.print("."), e.add_mapping(n.end), e.print_name(n.property)
        }), n(ze, function (n, e) {
            n.expression.print(e), e.print("["), n.property.print(e), e.print("]")
        }), n(je, function (n, e) {
            var t = n.operator;
            e.print(t), (/^[a-z]/i.test(t) || /[+-]$/.test(t) && n.expression instanceof je && /^[+-]/.test(n.expression.operator)) && e.space(), n.expression.print(e)
        }), n(Ie, function (n, e) {
            n.expression.print(e), e.print(n.operator)
        }), n(Ue, function (n, e) {
            n.left.print(e), e.space(), e.print(n.operator), "<" == n.operator && n.right instanceof je && "!" == n.right.operator && n.right.expression instanceof je && "--" == n.right.expression.operator ? e.print(" ") : e.space(), n.right.print(e)
        }), n(Ve, function (n, e) {
            n.condition.print(e), e.space(), e.print("?"), e.space(), n.consequent.print(e), e.space(), e.colon(), n.alternative.print(e)
        }), n(We, function (n, e) {
            e.with_square(function () {
                var t = n.elements, r = t.length;
                r > 0 && e.space(), t.forEach(function (n, t) {
                    t && e.comma(), n.print(e), t === r - 1 && n instanceof bt && e.comma()
                }), r > 0 && e.space()
            })
        }), n(Ye, function (n, e) {
            n.properties.length > 0 ? e.with_block(function () {
                n.properties.forEach(function (n, t) {
                    t && (e.print(","), e.newline()), e.indent(), n.print(e)
                }), e.newline()
            }) : e.print("{}")
        }), n(Ge, function (n, e) {
            var t = n.key;
            e.option("quote_keys") ? e.print_string(t + "") : ("number" == typeof t || !e.option("beautify") && +t + "" == t) && parseFloat(t) >= 0 ? e.print(d(t)) : (St(t) ? e.option("screw_ie8") : $(t)) ? e.print_name(t) : e.print_string(t), e.colon(), n.value.print(e)
        }), n(Ke, function (n, e) {
            e.print("set"), e.space(), n.key.print(e), n.value._do_print(e, !0)
        }), n(Je, function (n, e) {
            e.print("get"), e.space(), n.key.print(e), n.value._do_print(e, !0)
        }), n(Ze, function (n, e) {
            var t = n.definition();
            e.print_name(t ? t.mangled_name || t.name : n.name)
        }), n(gt, function (n, e) {
            e.print("void 0")
        }), n(bt, l), n(yt, function (n, e) {
            e.print("1/0")
        }), n(vt, function (n, e) {
            e.print("0/0")
        }), n(ft, function (n, e) {
            e.print("this")
        }), n(lt, function (n, e) {
            e.print(n.getValue())
        }), n(pt, function (n, e) {
            e.print_string(n.getValue())
        }), n(dt, function (n, e) {
            e.print(d(n.getValue()))
        }), n(ht, function (n, e) {
            var t = n.getValue().toString();
            e.option("ascii_only") ? t = e.to_ascii(t) : e.option("unescape_regexps") && (t = t.split("\\\\").map(function (n) {
                return n.replace(/\\u[0-9a-fA-F]{4}|\\x[0-9a-fA-F]{2}/g, function (n) {
                    var e = parseInt(n.substr(2), 16);
                    return u(e) ? String.fromCharCode(e) : n
                })
            }).join("\\\\")), e.print(t);
            var r = e.parent();
            r instanceof Ue && /^in/.test(r.operator) && r.left === n && e.print(" ")
        }), _(W, l), _(G, m), _(X, m), _(Ze, m), _(_e, m), _(ne, m), _(ee, l), _(le, m), _(Ee, m), _(De, m), _(Z, m), _(fe, l), _(Ne, m), _(Ce, m), _(ke, m), _(xe, m), _(Be, m), _(lt, m), _(Xe, function (n, e) {
            e.add_mapping(n.start, n.key)
        })
    }(), I.prototype = new z, f(I.prototype, {
        option: function (n) {
            return this.options[n]
        }, warn: function () {
            this.options.warnings && W.warn.apply(W, arguments)
        }, before: function (n, e) {
            if (n._squeezed)return n;
            var t = !1;
            return n instanceof ce && (n = n.hoist_declarations(this), t = !0), e(n, this), n = n.optimize(this), t && n instanceof ce && (n.drop_unused(this), e(n, this)), n._squeezed = !0, n
        }
    }), function () {
        function n(n, e) {
            n.DEFMETHOD("optimize", function (n) {
                var t = this;
                if (t._optimized)return t;
                var r = e(t, n);
                return r._optimized = !0, r === t ? r : r.transform(n)
            })
        }

        function e(n, e, t) {
            return t || (t = {}), e && (t.start || (t.start = e.start), t.end || (t.end = e.end)), new n(t)
        }

        function t(n, t, r) {
            if (t instanceof W)return t.transform(n);
            switch (typeof t) {
                case"string":
                    return e(pt, r, {value: t}).optimize(n);
                case"number":
                    return e(isNaN(t) ? vt : dt, r, {value: t}).optimize(n);
                case"boolean":
                    return e(t ? Et : wt, r).optimize(n);
                case"undefined":
                    return e(gt, r).optimize(n);
                default:
                    if (null === t)return e(mt, r).optimize(n);
                    if (t instanceof RegExp)return e(ht, r).optimize(n);
                    throw new Error(d("Can't handle constant of type: {type}", {type: typeof t}))
            }
        }

        function r(n) {
            if (null === n)return [];
            if (n instanceof Z)return n.body;
            if (n instanceof Q)return [];
            if (n instanceof Y)return [n];
            throw new Error("Can't convert thing to statement array")
        }

        function i(n) {
            return null === n ? !0 : n instanceof Q ? !0 : n instanceof Z ? 0 == n.body.length : !1
        }

        function u(n) {
            return n instanceof Ee ? n : (n instanceof ae || n instanceof ue || n instanceof re) && n.body instanceof Z ? n.body : n
        }

        function s(n, t) {
            function i(n) {
                function r(n, t) {
                    return e(K, n, {
                        body: e(Le, n, {
                            operator: "=",
                            left: e(He, t, {expression: e(st, t, t), property: "$inject"}),
                            right: e(We, n, {
                                elements: n.argnames.map(function (n) {
                                    return e(pt, n, {value: n.name})
                                })
                            })
                        })
                    })
                }

                return n.reduce(function (n, e) {
                    n.push(e);
                    var i = e.start, o = i.comments_before;
                    if (o && o.length > 0) {
                        var a = o.pop();
                        /@ngInject/.test(a.value) && (e instanceof he ? n.push(r(e, e.name)) : e instanceof Be ? e.definitions.forEach(function (e) {
                            e.value && e.value instanceof le && n.push(r(e.value, e.name))
                        }) : t.warn("Unknown statement marked with @ngInject [{file}:{line},{col}]", i))
                    }
                    return n
                }, [])
            }

            function o(n) {
                var e = [];
                return n.reduce(function (n, t) {
                    return t instanceof Z ? (_ = !0, n.push.apply(n, o(t.body))) : t instanceof Q ? _ = !0 : t instanceof G ? e.indexOf(t.value) < 0 ? (n.push(t), e.push(t.value)) : _ = !0 : n.push(t), n
                }, [])
            }

            function a(n, t) {
                var i = t.self(), o = i instanceof le, a = [];
                n:for (var s = n.length; --s >= 0;) {
                    var c = n[s];
                    switch (!0) {
                        case o && c instanceof ve && !c.value && 0 == a.length:
                            _ = !0;
                            continue n;
                        case c instanceof we:
                            if (c.body instanceof ve) {
                                if ((o && 0 == a.length || a[0]instanceof ve && !a[0].value) && !c.body.value && !c.alternative) {
                                    _ = !0;
                                    var f = e(K, c.condition, {body: c.condition});
                                    a.unshift(f);
                                    continue n
                                }
                                if (a[0]instanceof ve && c.body.value && a[0].value && !c.alternative) {
                                    _ = !0, c = c.clone(), c.alternative = a[0], a[0] = c.transform(t);
                                    continue n
                                }
                                if ((0 == a.length || a[0]instanceof ve) && c.body.value && !c.alternative && o) {
                                    _ = !0, c = c.clone(), c.alternative = a[0] || e(ve, c, {value: e(gt, c)}), a[0] = c.transform(t);
                                    continue n
                                }
                                if (!c.body.value && o) {
                                    _ = !0, c = c.clone(), c.condition = c.condition.negate(t), c.body = e(Z, c, {body: r(c.alternative).concat(a)}), c.alternative = null, a = [c.transform(t)];
                                    continue n
                                }
                                if (1 == a.length && o && a[0]instanceof K && (!c.alternative || c.alternative instanceof K)) {
                                    _ = !0, a.push(e(ve, a[0], {value: e(gt, a[0])}).transform(t)), a = r(c.alternative).concat(a), a.unshift(c);
                                    continue n
                                }
                            }
                            var l = m(c.body), p = l instanceof be ? t.loopcontrol_target(l.label) : null;
                            if (l && (l instanceof ve && !l.value && o || l instanceof Ae && i === u(p) || l instanceof ye && p instanceof Z && i === p)) {
                                l.label && h(l.label.thedef.references, l), _ = !0;
                                var d = r(c.body).slice(0, -1);
                                c = c.clone(), c.condition = c.condition.negate(t), c.body = e(Z, c, {body: r(c.alternative).concat(a)}), c.alternative = e(Z, c, {body: d}), a = [c.transform(t)];
                                continue n
                            }
                            var l = m(c.alternative), p = l instanceof be ? t.loopcontrol_target(l.label) : null;
                            if (l && (l instanceof ve && !l.value && o || l instanceof Ae && i === u(p) || l instanceof ye && p instanceof Z && i === p)) {
                                l.label && h(l.label.thedef.references, l), _ = !0, c = c.clone(), c.body = e(Z, c.body, {body: r(c.body).concat(a)}), c.alternative = e(Z, c.alternative, {body: r(c.alternative).slice(0, -1)}), a = [c.transform(t)];
                                continue n
                            }
                            a.unshift(c);
                            break;
                        default:
                            a.unshift(c)
                    }
                }
                return a
            }

            function s(n, e) {
                var t = !1, r = n.length, i = e.self();
                return n = n.reduce(function (n, r) {
                    if (t)c(e, r, n); else {
                        if (r instanceof be) {
                            var o = e.loopcontrol_target(r.label);
                            r instanceof ye && o instanceof Z && u(o) === i || r instanceof Ae && u(o) === i ? r.label && h(r.label.thedef.references, r) : n.push(r)
                        } else n.push(r);
                        m(r) && (t = !0)
                    }
                    return n
                }, []), _ = n.length != r, n
            }

            function f(n, t) {
                function r() {
                    i = Re.from_array(i), i && o.push(e(K, i, {body: i})), i = []
                }

                if (n.length < 2)return n;
                var i = [], o = [];
                return n.forEach(function (n) {
                    n instanceof K ? i.push(n.body) : (r(), o.push(n))
                }), r(), o = l(o, t), _ = o.length != n.length, o
            }

            function l(n, t) {
                function r(n) {
                    i.pop();
                    var e = o.body;
                    return e instanceof Re ? e.add(n) : e = Re.cons(e, n), e.transform(t)
                }

                var i = [], o = null;
                return n.forEach(function (n) {
                    if (o)if (n instanceof ae) {
                        var t = {};
                        try {
                            o.body.walk(new E(function (n) {
                                if (n instanceof Ue && "in" == n.operator)throw t
                            })), !n.init || n.init instanceof Be ? n.init || (n.init = o.body, i.pop()) : n.init = r(n.init)
                        } catch (a) {
                            if (a !== t)throw a
                        }
                    } else n instanceof we ? n.condition = r(n.condition) : n instanceof se ? n.expression = r(n.expression) : n instanceof me && n.value ? n.value = r(n.value) : n instanceof me ? n.value = r(e(gt, n)) : n instanceof Ee && (n.expression = r(n.expression));
                    i.push(n), o = n instanceof K ? n : null
                }), i
            }

            function p(n) {
                var e = null;
                return n.reduce(function (n, t) {
                    return t instanceof Be && e && e.TYPE == t.TYPE ? (e.definitions = e.definitions.concat(t.definitions), _ = !0) : t instanceof ae && e instanceof Be && (!t.init || t.init.TYPE == e.TYPE) ? (_ = !0, n.pop(), t.init ? t.init.definitions = e.definitions.concat(t.init.definitions) : t.init = e, n.push(t), e = t) : (e = t, n.push(t)), n
                }, [])
            }

            function d(n) {
                n.forEach(function (n) {
                    n instanceof K && (n.body = function t(n) {
                        return n.transform(new z(function (n) {
                            if (n instanceof Me && n.expression instanceof de)return e(je, n, {
                                operator: "!",
                                expression: n
                            });
                            if (n instanceof Me)n.expression = t(n.expression); else if (n instanceof Re)n.car = t(n.car); else if (n instanceof Ve) {
                                var r = t(n.condition);
                                if (r !== n.condition) {
                                    n.condition = r;
                                    var i = n.consequent;
                                    n.consequent = n.alternative, n.alternative = i
                                }
                            }
                            return n
                        }))
                    }(n.body))
                })
            }

            var _;
            do _ = !1, t.option("angular") && (n = i(n)), n = o(n), t.option("dead_code") && (n = s(n, t)), t.option("if_return") && (n = a(n, t)), t.option("sequences") && (n = f(n, t)), t.option("join_vars") && (n = p(n, t)); while (_);
            return t.option("negate_iife") && d(n, t), n
        }

        function c(n, e, t) {
            n.warn("Dropping unreachable code [{file}:{line},{col}]", e.start), e.walk(new E(function (e) {
                return e instanceof Be ? (n.warn("Declarations in unreachable code! [{file}:{line},{col}]", e.start), e.remove_initializers(), t.push(e), !0) : e instanceof he ? (t.push(e), !0) : e instanceof ce ? !0 : void 0
            }))
        }

        function f(n, e) {
            return n.print_to_string().length > e.print_to_string().length ? e : n
        }

        function m(n) {
            return n && n.aborts()
        }

        function v(n, t) {
            function i(i) {
                i = r(i), n.body instanceof Z ? (n.body = n.body.clone(), n.body.body = i.concat(n.body.body.slice(1)), n.body = n.body.transform(t)) : n.body = e(Z, n.body, {body: i}).transform(t), v(n, t)
            }

            var o = n.body instanceof Z ? n.body.body[0] : n.body;
            o instanceof we && (o.body instanceof ye && t.loopcontrol_target(o.body.label) === n ? (n.condition = n.condition ? e(Ue, n.condition, {
                left: n.condition,
                operator: "&&",
                right: o.condition.negate(t)
            }) : o.condition.negate(t), i(o.alternative)) : o.alternative instanceof ye && t.loopcontrol_target(o.alternative.label) === n && (n.condition = n.condition ? e(Ue, n.condition, {
                left: n.condition,
                operator: "&&",
                right: o.condition
            }) : o.condition, i(o.body)))
        }

        function A(n, e) {
            var t = e.option("pure_getters");
            e.options.pure_getters = !1;
            var r = n.has_side_effects(e);
            return e.options.pure_getters = t, r
        }

        function w(n, t) {
            return t.option("booleans") && t.in_boolean_context() ? e(Et, n) : n
        }

        n(W, function (n) {
            return n
        }), W.DEFMETHOD("equivalent_to", function (n) {
            return this.print_to_string() == n.print_to_string()
        }), function (n) {
            var e = ["!", "delete"], t = ["in", "instanceof", "==", "!=", "===", "!==", "<", "<=", ">=", ">"];
            n(W, function () {
                return !1
            }), n(je, function () {
                return o(this.operator, e)
            }), n(Ue, function () {
                return o(this.operator, t) || ("&&" == this.operator || "||" == this.operator) && this.left.is_boolean() && this.right.is_boolean()
            }), n(Ve, function () {
                return this.consequent.is_boolean() && this.alternative.is_boolean()
            }), n(Le, function () {
                return "=" == this.operator && this.right.is_boolean()
            }), n(Re, function () {
                return this.cdr.is_boolean()
            }), n(Et, function () {
                return !0
            }), n(wt, function () {
                return !0
            })
        }(function (n, e) {
            n.DEFMETHOD("is_boolean", e)
        }), function (n) {
            n(W, function () {
                return !1
            }), n(pt, function () {
                return !0
            }), n(je, function () {
                return "typeof" == this.operator
            }), n(Ue, function (n) {
                return "+" == this.operator && (this.left.is_string(n) || this.right.is_string(n))
            }), n(Le, function (n) {
                return ("=" == this.operator || "+=" == this.operator) && this.right.is_string(n)
            }), n(Re, function (n) {
                return this.cdr.is_string(n)
            }), n(Ve, function (n) {
                return this.consequent.is_string(n) && this.alternative.is_string(n)
            }), n(Me, function (n) {
                return n.option("unsafe") && this.expression instanceof st && "String" == this.expression.name && this.expression.undeclared()
            })
        }(function (n, e) {
            n.DEFMETHOD("is_string", e)
        }), function (n) {
            function e(n, e) {
                if (!e)throw new Error("Compressor must be passed");
                return n._eval(e)
            }

            W.DEFMETHOD("evaluate", function (e) {
                if (!e.option("evaluate"))return [this];
                try {
                    var r = this._eval(e);
                    return [f(t(e, r, this), this), r]
                } catch (i) {
                    if (i !== n)throw i;
                    return [this]
                }
            }), n(Y, function () {
                throw new Error(d("Cannot evaluate a statement [{file}:{line},{col}]", this.start))
            }), n(de, function () {
                throw n
            }), n(W, function () {
                throw n
            }), n(lt, function () {
                return this.getValue()
            }), n(je, function (t) {
                var r = this.expression;
                switch (this.operator) {
                    case"!":
                        return !e(r, t);
                    case"typeof":
                        if (r instanceof de)return "function";
                        if (r = e(r, t), r instanceof RegExp)throw n;
                        return typeof r;
                    case"void":
                        return void e(r, t);
                    case"~":
                        return ~e(r, t);
                    case"-":
                        if (r = e(r, t), 0 === r)throw n;
                        return -r;
                    case"+":
                        return +e(r, t)
                }
                throw n
            }), n(Ue, function (t) {
                var r = this.left, i = this.right;
                switch (this.operator) {
                    case"&&":
                        return e(r, t) && e(i, t);
                    case"||":
                        return e(r, t) || e(i, t);
                    case"|":
                        return e(r, t) | e(i, t);
                    case"&":
                        return e(r, t) & e(i, t);
                    case"^":
                        return e(r, t) ^ e(i, t);
                    case"+":
                        return e(r, t) + e(i, t);
                    case"*":
                        return e(r, t) * e(i, t);
                    case"/":
                        return e(r, t) / e(i, t);
                    case"%":
                        return e(r, t) % e(i, t);
                    case"-":
                        return e(r, t) - e(i, t);
                    case"<<":
                        return e(r, t) << e(i, t);
                    case">>":
                        return e(r, t) >> e(i, t);
                    case">>>":
                        return e(r, t) >>> e(i, t);
                    case"==":
                        return e(r, t) == e(i, t);
                    case"===":
                        return e(r, t) === e(i, t);
                    case"!=":
                        return e(r, t) != e(i, t);
                    case"!==":
                        return e(r, t) !== e(i, t);
                    case"<":
                        return e(r, t) < e(i, t);
                    case"<=":
                        return e(r, t) <= e(i, t);
                    case">":
                        return e(r, t) > e(i, t);
                    case">=":
                        return e(r, t) >= e(i, t);
                    case"in":
                        return e(r, t)in e(i, t);
                    case"instanceof":
                        return e(r, t)instanceof e(i, t)
                }
                throw n
            }), n(Ve, function (n) {
                return e(this.condition, n) ? e(this.consequent, n) : e(this.alternative, n)
            }), n(st, function (t) {
                var r = this.definition();
                if (r && r.constant && r.init)return e(r.init, t);
                throw n
            }), n(He, function (t) {
                if (t.option("unsafe") && "length" == this.property) {
                    var r = e(this.expression, t);
                    if ("string" == typeof r)return r.length
                }
                throw n
            })
        }(function (n, e) {
            n.DEFMETHOD("_eval", e)
        }), function (n) {
            function t(n) {
                return e(je, n, {operator: "!", expression: n})
            }

            n(W, function () {
                return t(this)
            }), n(Y, function () {
                throw new Error("Cannot negate a statement")
            }), n(de, function () {
                return t(this)
            }), n(je, function () {
                return "!" == this.operator ? this.expression : t(this)
            }), n(Re, function (n) {
                var e = this.clone();
                return e.cdr = e.cdr.negate(n), e
            }), n(Ve, function (n) {
                var e = this.clone();
                return e.consequent = e.consequent.negate(n), e.alternative = e.alternative.negate(n), f(t(this), e)
            }), n(Ue, function (n) {
                var e = this.clone(), r = this.operator;
                if (n.option("unsafe_comps"))switch (r) {
                    case"<=":
                        return e.operator = ">", e;
                    case"<":
                        return e.operator = ">=", e;
                    case">=":
                        return e.operator = "<", e;
                    case">":
                        return e.operator = "<=", e
                }
                switch (r) {
                    case"==":
                        return e.operator = "!=", e;
                    case"!=":
                        return e.operator = "==", e;
                    case"===":
                        return e.operator = "!==", e;
                    case"!==":
                        return e.operator = "===", e;
                    case"&&":
                        return e.operator = "||", e.left = e.left.negate(n), e.right = e.right.negate(n), f(t(this), e);
                    case"||":
                        return e.operator = "&&", e.left = e.left.negate(n), e.right = e.right.negate(n), f(t(this), e)
                }
                return t(this)
            })
        }(function (n, e) {
            n.DEFMETHOD("negate", function (n) {
                return e.call(this, n)
            })
        }), function (n) {
            n(W, function () {
                return !0
            }), n(Q, function () {
                return !1
            }), n(lt, function () {
                return !1
            }), n(ft, function () {
                return !1
            }), n(Me, function (n) {
                var e = n.option("pure_funcs");
                return e ? e.indexOf(this.expression.print_to_string()) < 0 : !0
            }), n(J, function (n) {
                for (var e = this.body.length; --e >= 0;)if (this.body[e].has_side_effects(n))return !0;
                return !1
            }), n(K, function (n) {
                return this.body.has_side_effects(n)
            }), n(he, function () {
                return !0
            }), n(de, function () {
                return !1
            }), n(Ue, function (n) {
                return this.left.has_side_effects(n) || this.right.has_side_effects(n)
            }), n(Le, function () {
                return !0
            }), n(Ve, function (n) {
                return this.condition.has_side_effects(n) || this.consequent.has_side_effects(n) || this.alternative.has_side_effects(n)
            }), n(Pe, function (n) {
                return "delete" == this.operator || "++" == this.operator || "--" == this.operator || this.expression.has_side_effects(n)
            }), n(st, function () {
                return !1
            }), n(Ye, function (n) {
                for (var e = this.properties.length; --e >= 0;)if (this.properties[e].has_side_effects(n))return !0;
                return !1
            }), n(Xe, function (n) {
                return this.value.has_side_effects(n)
            }), n(We, function (n) {
                for (var e = this.elements.length; --e >= 0;)if (this.elements[e].has_side_effects(n))return !0;
                return !1
            }), n(He, function (n) {
                return n.option("pure_getters") ? this.expression.has_side_effects(n) : !0
            }), n(ze, function (n) {
                return n.option("pure_getters") ? this.expression.has_side_effects(n) || this.property.has_side_effects(n) : !0
            }), n(qe, function (n) {
                return !n.option("pure_getters")
            }), n(Re, function (n) {
                return this.car.has_side_effects(n) || this.cdr.has_side_effects(n)
            })
        }(function (n, e) {
            n.DEFMETHOD("has_side_effects", e)
        }), function (n) {
            function e() {
                var n = this.body.length;
                return n > 0 && m(this.body[n - 1])
            }

            n(Y, function () {
                return null
            }), n(_e, function () {
                return this
            }), n(Z, e), n(De, e), n(we, function () {
                return this.alternative && m(this.body) && m(this.alternative)
            })
        }(function (n, e) {
            n.DEFMETHOD("aborts", e)
        }), n(G, function (n) {
            return n.scope.has_directive(n.value) !== n.scope ? e(Q, n) : n
        }), n(X, function (n, t) {
            return t.option("drop_debugger") ? e(Q, n) : n
        }), n(ee, function (n, t) {
            return n.body instanceof ye && t.loopcontrol_target(n.body.label) === n.body ? e(Q, n) : 0 == n.label.references.length ? n.body : n
        }), n(J, function (n, e) {
            return n.body = s(n.body, e), n
        }), n(Z, function (n, t) {
            switch (n.body = s(n.body, t), n.body.length) {
                case 1:
                    return n.body[0];
                case 0:
                    return e(Q, n)
            }
            return n
        }), ce.DEFMETHOD("drop_unused", function (n) {
            var t = this;
            if (n.option("unused") && !(t instanceof fe) && !t.uses_eval) {
                var r = [], i = new y, a = this, u = new E(function (e, o) {
                    if (e !== t) {
                        if (e instanceof he)return i.add(e.name.name, e), !0;
                        if (e instanceof Be && a === t)return e.definitions.forEach(function (e) {
                            e.value && (i.add(e.name.name, e.value), e.value.has_side_effects(n) && e.value.walk(u))
                        }), !0;
                        if (e instanceof st)return p(r, e.definition()), !0;
                        if (e instanceof ce) {
                            var s = a;
                            return a = e, o(), a = s, !0
                        }
                    }
                });
                t.walk(u);
                for (var s = 0; s < r.length; ++s)r[s].orig.forEach(function (n) {
                    var e = i.get(n.name);
                    e && e.forEach(function (n) {
                        var e = new E(function (n) {
                            n instanceof st && p(r, n.definition())
                        });
                        n.walk(e)
                    })
                });
                var c = new z(function (i, a, u) {
                    if (i instanceof le && !(i instanceof pe) && !n.option("keep_fargs"))for (var s = i.argnames, f = s.length; --f >= 0;) {
                        var l = s[f];
                        if (!l.unreferenced())break;
                        s.pop(), n.warn("Dropping unused function argument {name} [{file}:{line},{col}]", {
                            name: l.name,
                            file: l.start.file,
                            line: l.start.line,
                            col: l.start.col
                        })
                    }
                    if (i instanceof he && i !== t)return o(i.name.definition(), r) ? i : (n.warn("Dropping unused function {name} [{file}:{line},{col}]", {
                        name: i.name.name,
                        file: i.name.start.file,
                        line: i.name.start.line,
                        col: i.name.start.col
                    }), e(Q, i));
                    if (i instanceof Be && !(c.parent()instanceof ue)) {
                        var p = i.definitions.filter(function (e) {
                            if (o(e.name.definition(), r))return !0;
                            var t = {
                                name: e.name.name,
                                file: e.name.start.file,
                                line: e.name.start.line,
                                col: e.name.start.col
                            };
                            return e.value && e.value.has_side_effects(n) ? (e._unused_side_effects = !0, n.warn("Side effects in initialization of unused variable {name} [{file}:{line},{col}]", t), !0) : (n.warn("Dropping unused variable {name} [{file}:{line},{col}]", t), !1)
                        });
                        p = _(p, function (n, e) {
                            return !n.value && e.value ? -1 : !e.value && n.value ? 1 : 0
                        });
                        for (var d = [], f = 0; f < p.length;) {
                            var h = p[f];
                            h._unused_side_effects ? (d.push(h.value), p.splice(f, 1)) : (d.length > 0 && (d.push(h.value), h.value = Re.from_array(d), d = []), ++f)
                        }
                        return d = d.length > 0 ? e(Z, i, {body: [e(K, i, {body: Re.from_array(d)})]}) : null, 0 != p.length || d ? 0 == p.length ? d : (i.definitions = p, d && (d.body.unshift(i), i = d), i) : e(Q, i)
                    }
                    if (i instanceof ae && (a(i, this), i.init instanceof Z)) {
                        var m = i.init.body.slice(0, -1);
                        return i.init = i.init.body.slice(-1)[0].body, m.push(i), u ? V.splice(m) : e(Z, i, {body: m})
                    }
                    return i instanceof ce && i !== t ? i : void 0
                });
                t.transform(c)
            }
        }), ce.DEFMETHOD("hoist_declarations", function (n) {
            var t = n.option("hoist_funs"), r = n.option("hoist_vars"), i = this;
            if (t || r) {
                var o = [], u = [], s = new y, c = 0, f = 0;
                i.walk(new E(function (n) {
                    return n instanceof ce && n !== i ? !0 : n instanceof Te ? (++f, !0) : void 0
                })), r = r && f > 1;
                var l = new z(function (n) {
                    if (n !== i) {
                        if (n instanceof G)return o.push(n), e(Q, n);
                        if (n instanceof he && t)return u.push(n), e(Q, n);
                        if (n instanceof Te && r) {
                            n.definitions.forEach(function (n) {
                                s.set(n.name.name, n), ++c
                            });
                            var a = n.to_assignments(), f = l.parent();
                            return f instanceof ue && f.init === n ? null == a ? n.definitions[0].name : a : f instanceof ae && f.init === n ? a : a ? e(K, n, {body: a}) : e(Q, n)
                        }
                        if (n instanceof ce)return n
                    }
                });
                if (i = i.transform(l), c > 0) {
                    var p = [];
                    if (s.each(function (n, e) {
                            i instanceof le && a(function (e) {
                                return e.name == n.name.name
                            }, i.argnames) ? s.del(e) : (n = n.clone(), n.value = null, p.push(n), s.set(e, n))
                        }), p.length > 0) {
                        for (var d = 0; d < i.body.length;) {
                            if (i.body[d]instanceof K) {
                                var _, m, v = i.body[d].body;
                                if (v instanceof Le && "=" == v.operator && (_ = v.left)instanceof Ze && s.has(_.name)) {
                                    var g = s.get(_.name);
                                    if (g.value)break;
                                    g.value = v.right, h(p, g), p.push(g), i.body.splice(d, 1);
                                    continue
                                }
                                if (v instanceof Re && (m = v.car)instanceof Le && "=" == m.operator && (_ = m.left)instanceof Ze && s.has(_.name)) {
                                    var g = s.get(_.name);
                                    if (g.value)break;
                                    g.value = m.right, h(p, g), p.push(g), i.body[d].body = v.cdr;
                                    continue
                                }
                            }
                            if (i.body[d]instanceof Q)i.body.splice(d, 1); else {
                                if (!(i.body[d]instanceof Z))break;
                                var b = [d, 1].concat(i.body[d].body);
                                i.body.splice.apply(i.body, b)
                            }
                        }
                        p = e(Te, i, {definitions: p}), u.push(p)
                    }
                }
                i.body = o.concat(u, i.body)
            }
            return i
        }), n(K, function (n, t) {
            return t.option("side_effects") && !n.body.has_side_effects(t) ? (t.warn("Dropping side-effect-free statement [{file}:{line},{col}]", n.start), e(Q, n)) : n
        }), n(re, function (n, t) {
            var r = n.condition.evaluate(t);
            if (n.condition = r[0], !t.option("loops"))return n;
            if (r.length > 1) {
                if (r[1])return e(ae, n, {body: n.body});
                if (n instanceof oe && t.option("dead_code")) {
                    var i = [];
                    return c(t, n.body, i), e(Z, n, {body: i})
                }
            }
            return n
        }), n(oe, function (n, t) {
            return t.option("loops") ? (n = re.prototype.optimize.call(n, t), n instanceof oe && (v(n, t), n = e(ae, n, n).transform(t)), n) : n
        }), n(ae, function (n, t) {
            var r = n.condition;
            if (r && (r = r.evaluate(t), n.condition = r[0]), !t.option("loops"))return n;
            if (r && r.length > 1 && !r[1] && t.option("dead_code")) {
                var i = [];
                return n.init instanceof Y ? i.push(n.init) : n.init && i.push(e(K, n.init, {body: n.init})), c(t, n.body, i), e(Z, n, {body: i})
            }
            return v(n, t), n
        }), n(we, function (n, t) {
            if (!t.option("conditionals"))return n;
            var r = n.condition.evaluate(t);
            if (n.condition = r[0], r.length > 1)if (r[1]) {
                if (t.warn("Condition always true [{file}:{line},{col}]", n.condition.start), t.option("dead_code")) {
                    var o = [];
                    return n.alternative && c(t, n.alternative, o), o.push(n.body), e(Z, n, {body: o}).transform(t)
                }
            } else if (t.warn("Condition always false [{file}:{line},{col}]", n.condition.start), t.option("dead_code")) {
                var o = [];
                return c(t, n.body, o), n.alternative && o.push(n.alternative), e(Z, n, {body: o}).transform(t)
            }
            i(n.alternative) && (n.alternative = null);
            var a = n.condition.negate(t), u = f(n.condition, a) === a;
            if (n.alternative && u) {
                u = !1, n.condition = a;
                var s = n.body;
                n.body = n.alternative || e(Q), n.alternative = s
            }
            if (i(n.body) && i(n.alternative))return e(K, n.condition, {body: n.condition}).transform(t);
            if (n.body instanceof K && n.alternative instanceof K)return e(K, n, {
                body: e(Ve, n, {
                    condition: n.condition,
                    consequent: n.body.body,
                    alternative: n.alternative.body
                })
            }).transform(t);
            if (i(n.alternative) && n.body instanceof K)return u ? e(K, n, {
                body: e(Ue, n, {
                    operator: "||",
                    left: a,
                    right: n.body.body
                })
            }).transform(t) : e(K, n, {
                body: e(Ue, n, {
                    operator: "&&",
                    left: n.condition,
                    right: n.body.body
                })
            }).transform(t);
            if (n.body instanceof Q && n.alternative && n.alternative instanceof K)return e(K, n, {
                body: e(Ue, n, {
                    operator: "||",
                    left: n.condition,
                    right: n.alternative.body
                })
            }).transform(t);
            if (n.body instanceof me && n.alternative instanceof me && n.body.TYPE == n.alternative.TYPE)return e(n.body.CTOR, n, {
                value: e(Ve, n, {
                    condition: n.condition,
                    consequent: n.body.value || e(gt, n.body).optimize(t),
                    alternative: n.alternative.value || e(gt, n.alternative).optimize(t)
                })
            }).transform(t);
            if (n.body instanceof we && !n.body.alternative && !n.alternative && (n.condition = e(Ue, n.condition, {
                    operator: "&&",
                    left: n.condition,
                    right: n.body.condition
                }).transform(t), n.body = n.body.body), m(n.body) && n.alternative) {
                var l = n.alternative;
                return n.alternative = null, e(Z, n, {body: [n, l]}).transform(t)
            }
            if (m(n.alternative)) {
                var p = n.body;
                return n.body = n.alternative, n.condition = u ? a : n.condition.negate(t), n.alternative = null, e(Z, n, {body: [n, p]}).transform(t)
            }
            return n
        }), n(Ee, function (n, t) {
            if (0 == n.body.length && t.option("conditionals"))return e(K, n, {body: n.expression}).transform(t);
            for (; ;) {
                var r = n.body[n.body.length - 1];
                if (r) {
                    var i = r.body[r.body.length - 1];
                    if (i instanceof ye && u(t.loopcontrol_target(i.label)) === n && r.body.pop(), r instanceof Fe && 0 == r.body.length) {
                        n.body.pop();
                        continue
                    }
                }
                break
            }
            var o = n.expression.evaluate(t);
            n:if (2 == o.length)try {
                if (n.expression = o[0], !t.option("dead_code"))break n;
                var a = o[1], s = !1, c = !1, f = !1, l = !1, p = !1, d = new z(function (r, i, o) {
                    if (r instanceof le || r instanceof K)return r;
                    if (r instanceof Ee && r === n)return r = r.clone(), i(r, this), p ? r : e(Z, r, {
                        body: r.body.reduce(function (n, e) {
                            return n.concat(e.body)
                        }, [])
                    }).transform(t);
                    if (r instanceof we || r instanceof Ce) {
                        var u = s;
                        return s = !c, i(r, this), s = u, r
                    }
                    if (r instanceof ne || r instanceof Ee) {
                        var u = c;
                        return c = !0, i(r, this), c = u, r
                    }
                    if (r instanceof ye && this.loopcontrol_target(r.label) === n)return s ? (p = !0, r) : c ? r : (l = !0, o ? V.skip : e(Q, r));
                    if (r instanceof De && this.parent() === n) {
                        if (l)return V.skip;
                        if (r instanceof Se) {
                            var d = r.expression.evaluate(t);
                            if (d.length < 2)throw n;
                            return d[1] === a || f ? (f = !0, m(r) && (l = !0), i(r, this), r) : V.skip
                        }
                        return i(r, this), r
                    }
                });
                d.stack = t.stack.slice(), n = n.transform(d)
            } catch (h) {
                if (h !== n)throw h
            }
            return n
        }), n(Se, function (n, e) {
            return n.body = s(n.body, e), n
        }), n(Ce, function (n, e) {
            return n.body = s(n.body, e), n
        }), Be.DEFMETHOD("remove_initializers", function () {
            this.definitions.forEach(function (n) {
                n.value = null
            })
        }), Be.DEFMETHOD("to_assignments", function () {
            var n = this.definitions.reduce(function (n, t) {
                if (t.value) {
                    var r = e(st, t.name, t.name);
                    n.push(e(Le, t, {operator: "=", left: r, right: t.value}))
                }
                return n
            }, []);
            return 0 == n.length ? null : Re.from_array(n)
        }), n(Be, function (n) {
            return 0 == n.definitions.length ? e(Q, n) : n
        }), n(de, function (n, e) {
            return n = le.prototype.optimize.call(n, e), e.option("unused") && n.name && n.name.unreferenced() && (n.name = null), n
        }), n(Me, function (n, r) {
            if (r.option("unsafe")) {
                var i = n.expression;
                if (i instanceof st && i.undeclared())switch (i.name) {
                    case"Array":
                        if (1 != n.args.length)return e(We, n, {elements: n.args}).transform(r);
                        break;
                    case"Object":
                        if (0 == n.args.length)return e(Ye, n, {properties: []});
                        break;
                    case"String":
                        if (0 == n.args.length)return e(pt, n, {value: ""});
                        if (n.args.length <= 1)return e(Ue, n, {
                            left: n.args[0],
                            operator: "+",
                            right: e(pt, n, {value: ""})
                        }).transform(r);
                        break;
                    case"Number":
                        if (0 == n.args.length)return e(dt, n, {value: 0});
                        if (1 == n.args.length)return e(je, n, {expression: n.args[0], operator: "+"}).transform(r);
                    case"Boolean":
                        if (0 == n.args.length)return e(wt, n);
                        if (1 == n.args.length)return e(je, n, {
                            expression: e(je, null, {
                                expression: n.args[0],
                                operator: "!"
                            }), operator: "!"
                        }).transform(r);
                        break;
                    case"Function":
                        if (b(n.args, function (n) {
                                return n instanceof pt
                            }))try {
                            var o = "(function(" + n.args.slice(0, -1).map(function (n) {
                                    return n.value
                                }).join(",") + "){" + n.args[n.args.length - 1].value + "})()", a = H(o);
                            a.figure_out_scope({screw_ie8: r.option("screw_ie8")});
                            var u = new I(r.options);
                            a = a.transform(u), a.figure_out_scope({screw_ie8: r.option("screw_ie8")}), a.mangle_names();
                            var s;
                            try {
                                a.walk(new E(function (n) {
                                    if (n instanceof le)throw s = n, a
                                }))
                            } catch (c) {
                                if (c !== a)throw c
                            }
                            var l = s.argnames.map(function (t, r) {
                                return e(pt, n.args[r], {value: t.print_to_string()})
                            }), o = j();
                            return Z.prototype._codegen.call(s, s, o), o = o.toString().replace(/^\{|\}$/g, ""), l.push(e(pt, n.args[n.args.length - 1], {value: o})), n.args = l, n
                        } catch (c) {
                            if (!(c instanceof M))throw console.log(c), c;
                            r.warn("Error parsing code passed to new Function [{file}:{line},{col}]", n.args[n.args.length - 1].start), r.warn(c.toString())
                        }
                } else {
                    if (i instanceof He && "toString" == i.property && 0 == n.args.length)return e(Ue, n, {
                        left: e(pt, n, {value: ""}),
                        operator: "+",
                        right: i.expression
                    }).transform(r);
                    if (i instanceof He && i.expression instanceof We && "join" == i.property) {
                        var p = 0 == n.args.length ? "," : n.args[0].evaluate(r)[1];
                        if (null != p) {
                            var d = i.expression.elements.reduce(function (n, e) {
                                if (e = e.evaluate(r), 0 == n.length || 1 == e.length)n.push(e); else {
                                    var i = n[n.length - 1];
                                    if (2 == i.length) {
                                        var o = "" + i[1] + p + e[1];
                                        n[n.length - 1] = [t(r, o, i[0]), o]
                                    } else n.push(e)
                                }
                                return n
                            }, []);
                            if (0 == d.length)return e(pt, n, {value: ""});
                            if (1 == d.length)return d[0][0];
                            if ("" == p) {
                                var h;
                                return h = d[0][0]instanceof pt || d[1][0]instanceof pt ? d.shift()[0] : e(pt, n, {value: ""}), d.reduce(function (n, t) {
                                    return e(Ue, t[0], {operator: "+", left: n, right: t[0]})
                                }, h).transform(r)
                            }
                            var _ = n.clone();
                            return _.expression = _.expression.clone(), _.expression.expression = _.expression.expression.clone(), _.expression.expression.elements = d.map(function (n) {
                                return n[0]
                            }), f(n, _)
                        }
                    }
                }
            }
            return r.option("side_effects") && n.expression instanceof de && 0 == n.args.length && !J.prototype.has_side_effects.call(n.expression, r) ? e(gt, n).transform(r) : r.option("drop_console") && n.expression instanceof qe && n.expression.expression instanceof st && "console" == n.expression.expression.name && n.expression.expression.undeclared() ? e(gt, n).transform(r) : n.evaluate(r)[0]
        }), n(Ne, function (n, t) {
            if (t.option("unsafe")) {
                var r = n.expression;
                if (r instanceof st && r.undeclared())switch (r.name) {
                    case"Object":
                    case"RegExp":
                    case"Function":
                    case"Error":
                    case"Array":
                        return e(Me, n, n).transform(t)
                }
            }
            return n
        }), n(Re, function (n, t) {
            if (!t.option("side_effects"))return n;
            if (!n.car.has_side_effects(t)) {
                var r;
                if (!(n.cdr instanceof st && "eval" == n.cdr.name && n.cdr.undeclared() && (r = t.parent())instanceof Me && r.expression === n))return n.cdr
            }
            if (t.option("cascade")) {
                if (n.car instanceof Le && !n.car.left.has_side_effects(t)) {
                    if (n.car.left.equivalent_to(n.cdr))return n.car;
                    if (n.cdr instanceof Me && n.cdr.expression.equivalent_to(n.car.left))return n.cdr.expression = n.car, n.cdr
                }
                if (!n.car.has_side_effects(t) && !n.cdr.has_side_effects(t) && n.car.equivalent_to(n.cdr))return n.car
            }
            return n.cdr instanceof je && "void" == n.cdr.operator && !n.cdr.expression.has_side_effects(t) ? (n.cdr.operator = n.car, n.cdr) : n.cdr instanceof gt ? e(je, n, {
                operator: "void",
                expression: n.car
            }) : n
        }), Pe.DEFMETHOD("lift_sequences", function (n) {
            if (n.option("sequences") && this.expression instanceof Re) {
                var e = this.expression, t = e.to_array();
                return this.expression = t.pop(), t.push(this), e = Re.from_array(t).transform(n)
            }
            return this
        }), n(Ie, function (n, e) {
            return n.lift_sequences(e)
        }), n(je, function (n, t) {
            n = n.lift_sequences(t);
            var r = n.expression;
            if (t.option("booleans") && t.in_boolean_context()) {
                switch (n.operator) {
                    case"!":
                        if (r instanceof je && "!" == r.operator)return r.expression;
                        break;
                    case"typeof":
                        return t.warn("Boolean expression always true [{file}:{line},{col}]", n.start), e(Et, n)
                }
                r instanceof Ue && "!" == n.operator && (n = f(n, r.negate(t)))
            }
            return n.evaluate(t)[0]
        }), Ue.DEFMETHOD("lift_sequences", function (n) {
            if (n.option("sequences")) {
                if (this.left instanceof Re) {
                    var e = this.left, t = e.to_array();
                    return this.left = t.pop(), t.push(this), e = Re.from_array(t).transform(n)
                }
                if (this.right instanceof Re && this instanceof Le && !A(this.left, n)) {
                    var e = this.right, t = e.to_array();
                    return this.right = t.pop(), t.push(this), e = Re.from_array(t).transform(n)
                }
            }
            return this
        });
        var D = g("== === != !== * & | ^");
        n(Ue, function (n, t) {
            var r = t.has_directive("use asm") ? l : function (e, r) {
                if (r || !n.left.has_side_effects(t) && !n.right.has_side_effects(t)) {
                    e && (n.operator = e);
                    var i = n.left;
                    n.left = n.right, n.right = i
                }
            };
            if (D(n.operator) && (n.right instanceof lt && !(n.left instanceof lt) && (n.left instanceof Ue && It[n.left.operator] >= It[n.operator] || r(null, !0)), /^[!=]==?$/.test(n.operator))) {
                if (n.left instanceof st && n.right instanceof Ve) {
                    if (n.right.consequent instanceof st && n.right.consequent.definition() === n.left.definition()) {
                        if (/^==/.test(n.operator))return n.right.condition;
                        if (/^!=/.test(n.operator))return n.right.condition.negate(t)
                    }
                    if (n.right.alternative instanceof st && n.right.alternative.definition() === n.left.definition()) {
                        if (/^==/.test(n.operator))return n.right.condition.negate(t);
                        if (/^!=/.test(n.operator))return n.right.condition
                    }
                }
                if (n.right instanceof st && n.left instanceof Ve) {
                    if (n.left.consequent instanceof st && n.left.consequent.definition() === n.right.definition()) {
                        if (/^==/.test(n.operator))return n.left.condition;
                        if (/^!=/.test(n.operator))return n.left.condition.negate(t)
                    }
                    if (n.left.alternative instanceof st && n.left.alternative.definition() === n.right.definition()) {
                        if (/^==/.test(n.operator))return n.left.condition.negate(t);
                        if (/^!=/.test(n.operator))return n.left.condition
                    }
                }
            }
            if (n = n.lift_sequences(t), t.option("comparisons"))switch (n.operator) {
                case"===":
                case"!==":
                    (n.left.is_string(t) && n.right.is_string(t) || n.left.is_boolean() && n.right.is_boolean()) && (n.operator = n.operator.substr(0, 2));
                case"==":
                case"!=":
                    n.left instanceof pt && "undefined" == n.left.value && n.right instanceof je && "typeof" == n.right.operator && t.option("unsafe") && (n.right.expression instanceof st && n.right.expression.undeclared() || (n.right = n.right.expression, n.left = e(gt, n.left).optimize(t), 2 == n.operator.length && (n.operator += "=")))
            }
            if (t.option("booleans") && t.in_boolean_context())switch (n.operator) {
                case"&&":
                    var i = n.left.evaluate(t), o = n.right.evaluate(t);
                    if (i.length > 1 && !i[1] || o.length > 1 && !o[1])return t.warn("Boolean && always false [{file}:{line},{col}]", n.start), e(wt, n);
                    if (i.length > 1 && i[1])return o[0];
                    if (o.length > 1 && o[1])return i[0];
                    break;
                case"||":
                    var i = n.left.evaluate(t), o = n.right.evaluate(t);
                    if (i.length > 1 && i[1] || o.length > 1 && o[1])return t.warn("Boolean || always true [{file}:{line},{col}]", n.start), e(Et, n);
                    if (i.length > 1 && !i[1])return o[0];
                    if (o.length > 1 && !o[1])return i[0];
                    break;
                case"+":
                    var i = n.left.evaluate(t), o = n.right.evaluate(t);
                    if (i.length > 1 && i[0]instanceof pt && i[1] || o.length > 1 && o[0]instanceof pt && o[1])return t.warn("+ in boolean context always true [{file}:{line},{col}]", n.start), e(Et, n)
            }
            if (t.option("comparisons")) {
                if (!(t.parent()instanceof Ue) || t.parent()instanceof Le) {
                    var a = e(je, n, {operator: "!", expression: n.negate(t)});
                    n = f(n, a)
                }
                switch (n.operator) {
                    case"<":
                        r(">");
                        break;
                    case"<=":
                        r(">=")
                }
            }
            return "+" == n.operator && n.right instanceof pt && "" === n.right.getValue() && n.left instanceof Ue && "+" == n.left.operator && n.left.is_string(t) ? n.left : (t.option("evaluate") && "+" == n.operator && (n.left instanceof lt && n.right instanceof Ue && "+" == n.right.operator && n.right.left instanceof lt && n.right.is_string(t) && (n = e(Ue, n, {
                operator: "+",
                left: e(pt, null, {
                    value: "" + n.left.getValue() + n.right.left.getValue(),
                    start: n.left.start,
                    end: n.right.left.end
                }),
                right: n.right.right
            })), n.right instanceof lt && n.left instanceof Ue && "+" == n.left.operator && n.left.right instanceof lt && n.left.is_string(t) && (n = e(Ue, n, {
                operator: "+",
                left: n.left.left,
                right: e(pt, null, {
                    value: "" + n.left.right.getValue() + n.right.getValue(),
                    start: n.left.right.start,
                    end: n.right.end
                })
            })), n.left instanceof Ue && "+" == n.left.operator && n.left.is_string(t) && n.left.right instanceof lt && n.right instanceof Ue && "+" == n.right.operator && n.right.left instanceof lt && n.right.is_string(t) && (n = e(Ue, n, {
                operator: "+",
                left: e(Ue, n.left, {
                    operator: "+",
                    left: n.left.left,
                    right: e(pt, null, {
                        value: "" + n.left.right.getValue() + n.right.left.getValue(),
                        start: n.left.right.start,
                        end: n.right.left.end
                    })
                }),
                right: n.right.right
            }))), n.right instanceof Ue && n.right.operator == n.operator && ("*" == n.operator || "&&" == n.operator || "||" == n.operator) ? (n.left = e(Ue, n.left, {
                operator: n.operator,
                left: n.left,
                right: n.right.left
            }), n.right = n.right.right, n.transform(t)) : n.evaluate(t)[0])
        }), n(st, function (n, r) {
            if (n.undeclared()) {
                var i = r.option("global_defs");
                if (i && i.hasOwnProperty(n.name))return t(r, i[n.name], n);
                switch (n.name) {
                    case"undefined":
                        return e(gt, n);
                    case"NaN":
                        return e(vt, n);
                    case"Infinity":
                        return e(yt, n)
                }
            }
            return n
        }), n(gt, function (n, t) {
            if (t.option("unsafe")) {
                var r = t.find_parent(ce), i = r.find_variable("undefined");
                if (i) {
                    var o = e(st, n, {name: "undefined", scope: r, thedef: i});
                    return o.reference(), o
                }
            }
            return n
        });
        var F = ["+", "-", "/", "*", "%", ">>", "<<", ">>>", "|", "^", "&"];
        n(Le, function (n, e) {
            return n = n.lift_sequences(e), "=" == n.operator && n.left instanceof st && n.right instanceof Ue && n.right.left instanceof st && n.right.left.name == n.left.name && o(n.right.operator, F) && (n.operator = n.right.operator + "=", n.right = n.right.right), n
        }), n(Ve, function (n, t) {
            if (!t.option("conditionals"))return n;
            if (n.condition instanceof Re) {
                var r = n.condition.car;
                return n.condition = n.condition.cdr, Re.cons(r, n)
            }
            var i = n.condition.evaluate(t);
            if (i.length > 1)return i[1] ? (t.warn("Condition always true [{file}:{line},{col}]", n.start), n.consequent) : (t.warn("Condition always false [{file}:{line},{col}]", n.start), n.alternative);
            var o = i[0].negate(t);
            f(i[0], o) === o && (n = e(Ve, n, {condition: o, consequent: n.alternative, alternative: n.consequent}));
            var a = n.consequent, u = n.alternative;
            if (a instanceof Le && u instanceof Le && a.operator == u.operator && a.left.equivalent_to(u.left))return e(Le, n, {
                operator: a.operator,
                left: a.left,
                right: e(Ve, n, {condition: n.condition, consequent: a.right, alternative: u.right})
            });
            if (a instanceof Me && u.TYPE === a.TYPE && a.args.length == u.args.length && a.expression.equivalent_to(u.expression)) {
                if (0 == a.args.length)return e(Re, n, {car: n.condition, cdr: a});
                if (1 == a.args.length)return a.args[0] = e(Ve, n, {
                    condition: n.condition,
                    consequent: a.args[0],
                    alternative: u.args[0]
                }), a
            }
            return a instanceof Ve && a.alternative.equivalent_to(u) ? e(Ve, n, {
                condition: e(Ue, n, {
                    left: n.condition,
                    operator: "&&",
                    right: a.condition
                }), consequent: a.consequent, alternative: u
            }) : n
        }), n(At, function (n, t) {
            if (t.option("booleans")) {
                var r = t.parent();
                return r instanceof Ue && ("==" == r.operator || "!=" == r.operator) ? (t.warn("Non-strict equality against boolean: {operator} {value} [{file}:{line},{col}]", {
                    operator: r.operator,
                    value: n.value,
                    file: r.start.file,
                    line: r.start.line,
                    col: r.start.col
                }), e(dt, n, {value: +n.value})) : e(je, n, {operator: "!", expression: e(dt, n, {value: 1 - n.value})})
            }
            return n
        }), n(ze, function (n, t) {
            var r = n.property;
            if (r instanceof pt && t.option("properties")) {
                if (r = r.getValue(), St(r) ? t.option("screw_ie8") : $(r))return e(He, n, {
                    expression: n.expression,
                    property: r
                }).optimize(t);
                var i = parseFloat(r);
                isNaN(i) || i.toString() != r || (n.property = e(dt, n.property, {value: i}))
            }
            return n
        }), n(He, function (n, e) {
            return n.evaluate(e)[0]
        }), n(We, w), n(Ye, w), n(ht, w)
    }(), function () {
        function n(n) {
            var r = "prefix"in n ? n.prefix : "UnaryExpression" == n.type ? !0 : !1;
            return new (r ? je : Ie)({start: e(n), end: t(n), operator: n.operator, expression: i(n.argument)})
        }

        function e(n) {
            return new L({
                file: n.loc && n.loc.source,
                line: n.loc && n.loc.start.line,
                col: n.loc && n.loc.start.column,
                pos: n.start,
                endpos: n.start
            })
        }

        function t(n) {
            return new L({
                file: n.loc && n.loc.source,
                line: n.loc && n.loc.end.line,
                col: n.loc && n.loc.end.column,
                pos: n.end,
                endpos: n.end
            })
        }

        function r(n, r, a) {
            var u = "function From_Moz_" + n + "(M){\n";
            return u += "return new mytype({\nstart: my_start_token(M),\nend: my_end_token(M)", a && a.split(/\s*,\s*/).forEach(function (n) {
                var e = /([a-z0-9$_]+)(=|@|>|%)([a-z0-9$_]+)/i.exec(n);
                if (!e)throw new Error("Can't understand property map: " + n);
                var t = "M." + e[1], r = e[2], i = e[3];
                if (u += ",\n" + i + ": ", "@" == r)u += t + ".map(from_moz)"; else if (">" == r)u += "from_moz(" + t + ")"; else if ("=" == r)u += t; else {
                    if ("%" != r)throw new Error("Can't understand operator in propmap: " + n);
                    u += "from_moz(" + t + ").body"
                }
            }), u += "\n})}", u = new Function("mytype", "my_start_token", "my_end_token", "from_moz", "return(" + u + ")")(r, e, t, i), o[n] = u
        }

        function i(n) {
            a.push(n);
            var e = null != n ? o[n.type](n) : null;
            return a.pop(), e
        }

        var o = {
            TryStatement: function (n) {
                return new Ce({
                    start: e(n),
                    end: t(n),
                    body: i(n.block).body,
                    bcatch: i(n.handlers ? n.handlers[0] : n.handler),
                    bfinally: n.finalizer ? new xe(i(n.finalizer)) : null
                })
            }, CatchClause: function (n) {
                return new ke({start: e(n), end: t(n), argname: i(n.param), body: i(n.body).body})
            }, ObjectExpression: function (n) {
                return new Ye({
                    start: e(n), end: t(n), properties: n.properties.map(function (n) {
                        var r = n.key, o = "Identifier" == r.type ? r.name : r.value, a = {
                            start: e(r),
                            end: t(n.value),
                            key: o,
                            value: i(n.value)
                        };
                        switch (n.kind) {
                            case"init":
                                return new Ge(a);
                            case"set":
                                return a.value.name = i(r), new Ke(a);
                            case"get":
                                return a.value.name = i(r), new Je(a)
                        }
                    })
                })
            }, SequenceExpression: function (n) {
                return Re.from_array(n.expressions.map(i))
            }, MemberExpression: function (n) {
                return new (n.computed ? ze : He)({
                    start: e(n),
                    end: t(n),
                    property: n.computed ? i(n.property) : n.property.name,
                    expression: i(n.object)
                })
            }, SwitchCase: function (n) {
                return new (n.test ? Se : Fe)({
                    start: e(n),
                    end: t(n),
                    expression: i(n.test),
                    body: n.consequent.map(i)
                })
            }, Literal: function (n) {
                var r = n.value, i = {start: e(n), end: t(n)};
                if (null === r)return new mt(i);
                switch (typeof r) {
                    case"string":
                        return i.value = r, new pt(i);
                    case"number":
                        return i.value = r, new dt(i);
                    case"boolean":
                        return new (r ? Et : wt)(i);
                    default:
                        return i.value = r, new ht(i)
                }
            }, UnaryExpression: n, UpdateExpression: n, Identifier: function (n) {
                var r = a[a.length - 2];
                return new ("this" == n.name ? ft : "LabeledStatement" == r.type ? ut : "VariableDeclarator" == r.type && r.id === n ? "const" == r.kind ? tt : et : "FunctionExpression" == r.type ? r.id === n ? ot : rt : "FunctionDeclaration" == r.type ? r.id === n ? it : rt : "CatchClause" == r.type ? at : "BreakStatement" == r.type || "ContinueStatement" == r.type ? ct : st)({
                    start: e(n),
                    end: t(n),
                    name: n.name
                })
            }
        };
        r("Node", W), r("Program", fe, "body@body"), r("Function", de, "id>name, params@argnames, body%body"), r("EmptyStatement", Q), r("BlockStatement", Z, "body@body"), r("ExpressionStatement", K, "expression>body"), r("IfStatement", we, "test>condition, consequent>body, alternate>alternative"), r("LabeledStatement", ee, "label>label, body>body"), r("BreakStatement", ye, "label>label"), r("ContinueStatement", Ae, "label>label"), r("WithStatement", se, "object>expression, body>body"), r("SwitchStatement", Ee, "discriminant>expression, cases@body"), r("ReturnStatement", ve, "argument>value"), r("ThrowStatement", ge, "argument>value"), r("WhileStatement", oe, "test>condition, body>body"), r("DoWhileStatement", ie, "test>condition, body>body"), r("ForStatement", ae, "init>init, test>condition, update>step, body>body"), r("ForInStatement", ue, "left>init, right>object, body>body"), r("DebuggerStatement", X), r("FunctionDeclaration", he, "id>name, params@argnames, body%body"), r("VariableDeclaration", Te, "declarations@definitions"), r("VariableDeclarator", Oe, "id>name, init>value"), r("ThisExpression", ft), r("ArrayExpression", We, "elements@elements"), r("FunctionExpression", de, "id>name, params@argnames, body%body"), r("BinaryExpression", Ue, "operator=operator, left>left, right>right"), r("AssignmentExpression", Le, "operator=operator, left>left, right>right"), r("LogicalExpression", Ue, "operator=operator, left>left, right>right"), r("ConditionalExpression", Ve, "test>condition, consequent>consequent, alternate>alternative"), r("NewExpression", Ne, "callee>expression, arguments@args"), r("CallExpression", Me, "callee>expression, arguments@args");
        var a = null;
        W.from_mozilla_ast = function (n) {
            var e = a;
            a = [];
            var t = i(n);
            return a = e, t
        }
    }(), n.array_to_hash = t, n.slice = r, n.characters = i, n.member = o, n.find_if = a, n.repeat_string = u, n.DefaultsError = s, n.defaults = c, n.merge = f, n.noop = l, n.MAP = V, n.push_uniq = p, n.string_template = d, n.remove = h, n.mergeSort = _, n.set_difference = m, n.set_intersection = v, n.makePredicate = g, n.all = b, n.Dictionary = y, n.DEFNODE = A, n.AST_Token = L, n.AST_Node = W, n.AST_Statement = Y, n.AST_Debugger = X, n.AST_Directive = G, n.AST_SimpleStatement = K, n.walk_body = w, n.AST_Block = J, n.AST_BlockStatement = Z, n.AST_EmptyStatement = Q, n.AST_StatementWithBody = ne, n.AST_LabeledStatement = ee, n.AST_IterationStatement = te, n.AST_DWLoop = re, n.AST_Do = ie, n.AST_While = oe, n.AST_For = ae, n.AST_ForIn = ue, n.AST_With = se, n.AST_Scope = ce, n.AST_Toplevel = fe, n.AST_Lambda = le, n.AST_Accessor = pe, n.AST_Function = de, n.AST_Defun = he, n.AST_Jump = _e, n.AST_Exit = me, n.AST_Return = ve, n.AST_Throw = ge, n.AST_LoopControl = be, n.AST_Break = ye, n.AST_Continue = Ae, n.AST_If = we, n.AST_Switch = Ee, n.AST_SwitchBranch = De, n.AST_Default = Fe, n.AST_Case = Se, n.AST_Try = Ce, n.AST_Catch = ke, n.AST_Finally = xe, n.AST_Definitions = Be, n.AST_Var = Te, n.AST_Const = $e, n.AST_VarDef = Oe, n.AST_Call = Me, n.AST_New = Ne, n.AST_Seq = Re, n.AST_PropAccess = qe, n.AST_Dot = He, n.AST_Sub = ze, n.AST_Unary = Pe, n.AST_UnaryPrefix = je, n.AST_UnaryPostfix = Ie, n.AST_Binary = Ue, n.AST_Conditional = Ve, n.AST_Assign = Le, n.AST_Array = We, n.AST_Object = Ye, n.AST_ObjectProperty = Xe, n.AST_ObjectKeyVal = Ge, n.AST_ObjectSetter = Ke, n.AST_ObjectGetter = Je, n.AST_Symbol = Ze, n.AST_SymbolAccessor = Qe, n.AST_SymbolDeclaration = nt, n.AST_SymbolVar = et, n.AST_SymbolConst = tt, n.AST_SymbolFunarg = rt, n.AST_SymbolDefun = it, n.AST_SymbolLambda = ot, n.AST_SymbolCatch = at, n.AST_Label = ut, n.AST_SymbolRef = st, n.AST_LabelRef = ct,n.AST_This = ft,n.AST_Constant = lt,n.AST_String = pt,n.AST_Number = dt,n.AST_RegExp = ht,n.AST_Atom = _t,n.AST_Null = mt,n.AST_NaN = vt,n.AST_Undefined = gt,n.AST_Hole = bt,n.AST_Infinity = yt,n.AST_Boolean = At,n.AST_False = wt,n.AST_True = Et,n.TreeWalker = E,n.KEYWORDS = Dt,n.KEYWORDS_ATOM = Ft,n.RESERVED_WORDS = St,n.KEYWORDS_BEFORE_EXPRESSION = Ct,n.OPERATOR_CHARS = kt,n.RE_HEX_NUMBER = xt,n.RE_OCT_NUMBER = Bt,n.RE_DEC_NUMBER = Tt,n.OPERATORS = $t,n.WHITESPACE_CHARS = Ot,n.PUNC_BEFORE_EXPRESSION = Mt,n.PUNC_CHARS = Nt,n.REGEXP_MODIFIERS = Rt,n.UNICODE = qt,n.is_letter = D,n.is_digit = F,n.is_alphanumeric_char = S,n.is_unicode_combining_mark = C,n.is_unicode_connector_punctuation = k,n.is_identifier = x,n.is_identifier_start = B,n.is_identifier_char = T,n.is_identifier_string = $,n.parse_js_number = O,n.JS_Parse_Error = M,n.js_error = N,n.is_token = R,n.EX_EOF = Ht,n.tokenizer = q,n.UNARY_PREFIX = zt,n.UNARY_POSTFIX = Pt,n.ASSIGNMENT = jt,n.PRECEDENCE = It,n.STATEMENTS_WITH_LABELS = Ut,n.ATOMIC_START_TOKEN = Vt,n.parse = H,n.TreeTransformer = z,n.SymbolDef = P,n.base54 = Lt,n.OutputStream = j,n.Compressor = I,n.SourceMap = U
}({}, function () {
    return this
}());