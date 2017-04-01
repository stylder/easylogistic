// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 3
(function(w, g) {
    w[g] = w[g] || {};
})(window, 'google_tag_manager');
(function() {

    var ib = this;
    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var jb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        kb = function(a) {
            if (null == a) return String(a);
            var b = jb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        lb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        va = function(a) {
            if (!a || "object" != kb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !lb(a, "constructor") && !lb(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || lb(a, b)
        },
        Ca = function(a, b) {
            var c = b || ("array" == kb(a) ? [] : {}),
                d;
            for (d in a)
                if (lb(a, d)) {
                    var e = a[d];
                    "array" == kb(e) ? ("array" != kb(c[d]) && (c[d] = []), c[d] = Ca(e, c[d])) : va(e) ? (va(c[d]) || (c[d] = {}), c[d] = Ca(e, c[d])) : c[d] = e
                }
            return c
        };
    var Va = null,
        mb = Math.random(),
        nb = null,
        ma = null,
        Aa = !1,
        ob = {},
        pb = {},
        Ba = {};
    var Da, Fa, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, U, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc, nc, oc, pc, qc, rc, sc, tc, uc, vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc, Ec, Fc, Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc, Qc, Rc, Sc, Tc, Uc, Vc, Wc, Xc, Yc, Zc, $c, ad, bd, cd, dd, ed, fd, V, gd, hd, jd, kd, ld, md, nd, od, pd, qd, rd, sd, td, ud, vd, wd, xd, yd, zd, Ad, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd, Yd, Zd, $d, ae, be, ce, de, ee, fe, ge, he, ie, je, ke, le, me, ne, oe, pe, qe, re, se, te, ue,
        ve, we, xe, ye, ze, Ae, Be, Ce, De, Ee, Fe, Ge, He, Ie, Je, Ke, Le, Me, Ne, Oe, Pe, Qe, Re, Se, Te, Ue, Ve, We, Xe, Ye, Ze, $e, af, bf, cf, df, ef, ff, gf, hf, jf, kf, lf;
    (function() {
        var a = function(a) {
            return {
                toString: function() {
                    return a
                }
            }
        };
        qb = a("");
        rb = a("0");
        sb = "";
        tb = a("");
        ub = a("");
        vb = a("");
        wb = a("");
        xb = a("");
        yb = a("");
        zb = a("");
        Ab = a("");
        Bb = a("2");
        U = a("3");
        Cb = a("");
        Db = a("");
        Eb = a("");
        Fb = a("");
        Gb = a("");
        Hb = a("");
        Ib = a("");
        Jb = a("");
        Kb = a("");
        Lb = a("");
        Mb = a("");
        Nb = a("");
        Ob = a("");
        Pb = a("");
        Qb = a("");
        Rb = a("");
        Sb = a("");
        Tb = a("");
        Ub = a("");
        Vb = a("4");
        Wb = a("");
        Xb = a("");
        Yb = a("");
        Zb = a("5");
        $b = a("");
        ac = a("");
        bc = a("");
        cc = a("");
        dc = a("");
        ec = a("");
        fc = a("");
        gc = a("");
        hc = a("");
        ic = a("");
        jc = a("");
        kc = a("");
        lc = a("");
        mc = a("");
        nc = a("");
        oc = a("6");
        pc = a("");
        qc = a("");
        rc = a("");
        sc = a("7");
        tc = a("");
        uc = a("");
        vc = a("8");
        wc = a("");
        xc = a("");
        yc = a("");
        zc = a("");
        Ac = a("");
        Bc = a("");
        Cc = a("");
        Dc = a("");
        Ec = a("9");
        Fc = a("");
        Gc = a("10");
        Hc = a("");
        Ic = a("");
        Jc = a("");
        Kc = a("");
        Lc = a("");
        Mc = a("");
        Nc = a("11");
        Oc = a("");
        Pc = a("");
        Qc = a("");
        Rc = a("");
        Sc = a("");
        Tc = a("");
        Uc = a("");
        Vc = a("");
        Wc = a("");
        Xc = a("");
        Yc = a("");
        Zc = a("");
        $c = a("");
        Da = a("12");
        ad = a("");
        bd = a("22");
        cd = a("23");
        dd = a("");
        ed = a("");
        fd = a("");
        V = a("13");
        gd = a("");
        hd = a("");
        jd = a("");
        kd = a("");
        Fa = a("14");
        ld = a("");
        md = a("");
        nd = a("");
        od = a("");
        pd = a("");
        qd = a("");
        rd = a("");
        sd = a("");
        td = a("");
        ud = a("");
        vd = a("15");
        wd = a("");
        xd = a("");
        yd = a("");
        zd = a("");
        Ad = a("");
        Bd = a("");
        Cd = a("");
        Dd = a("");
        Ed = a("");
        Fd = a("");
        Gd = a("");
        Hd = a("");
        Id = a("");
        Jd = a("");
        Kd = a("");
        Ld = a("");
        Md = a("");
        Nd = a("");
        Od = a("");
        Pd = a("");
        Qd = a("");
        Rd = a("");
        Sd = a("");
        Td = a("");
        Ud = a("");
        Vd = a("");
        Wd = a("");
        Xd = a("");
        Yd = a("");
        Zd = a("");
        $d = a("");
        ae = a("");
        be = a("");
        ce = a("");
        de = a("");
        ee = a("");
        fe = a("");
        ge = a("");
        he = a("");
        ie = a("");
        je = a("");
        ke = a("");
        le = a("");
        me = a("");
        ne = a("");
        oe = a("");
        pe = a("");
        qe = a("");
        re = a("");
        se = a("");
        te = a("");
        ue = a("");
        ve = a("");
        we = a("");
        xe = a("");
        ye = a("17");
        ze =
            a("");
        Ae = a("");
        Be = a("");
        Ce = a("");
        De = a("");
        Ee = a("");
        Fe = a("");
        Ge = a("");
        He = a("");
        Ie = a("");
        Je = a("");
        Ke = a("");
        Le = a("");
        Me = a("");
        Ne = a("");
        Oe = a("");
        Pe = a("");
        Qe = a("");
        Re = a("");
        Se = a("");
        Te = a("");
        Ue = a("");
        Ve = "";
        We = a("");
        Xe = a("18");
        Ye = a("");
        Ze = a("");
        $e = a("");
        af = a("19");
        bf = a("");
        cf = a("");
        df = a("");
        ef = a("");
        ff = a("");
        gf =
            a("");
        hf = a("");
        jf = a("");
        kf = a("20");
        lf = a("21")
    })();
    var eb = function() {},
        O = function(a) {
            return "function" == typeof a
        },
        S = function(a) {
            return "[object Array]" == Object.prototype.toString.call(Object(a))
        },
        mf = function(a) {
            return "number" == kb(a) && !isNaN(a)
        },
        nf = function(a) {
            return /^[0-9]+$/.test(a)
        },
        of = function(a, b) {
            if (Array.prototype.indexOf) {
                var c = a.indexOf(b);
                return "number" == typeof c ? c : -1
            }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1
        },
        la = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Q = function(a) {
            return Math.round(Number(a)) || 0
        },
        xa = function(a) {
            return "false" ==
            String(a).toLowerCase() ? !1 : !!a
        },
        pf = function(a) {
            var b = [];
            if (S(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        I = function() {
            return new Date
        },
        ra = function(a, b) {
            if (!mf(a) || !mf(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        sf = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    sf.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    sf.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    sf.prototype.contains = function(a) {
        return void 0 !== this.get(a)
    };
    var tf = function(a, b, c) {
            try {
                if (!a[Ad]) return a[Da](a, b || eb, c || eb);
                c && c()
            } catch (d) {}
            return !1
        },
        uf = function(a, b) {
            function c(b, c) {
                a.contains(b) || a.set(b, []);
                a.get(b).push(c)
            }
            for (var d = la(b).split("&"), e = 0; e < d.length; e++)
                if (d[e]) {
                    var f = d[e].indexOf("=");
                    0 > f ? c(d[e], "1") : c(d[e].substring(0, f), d[e].substring(f + 1))
                }
        },
        vf = function(a) {
            var b = a ? a.length : 0;
            return 0 < b ? a[b - 1] : ""
        },
        wf = function(a) {
            return function() {
                return a("GTM-K57FHH")
            }
        },
        xf = function(a) {
            for (var b = 0; b < a.length; b++) a[b]()
        },
        ta = function() {
            return "gtm" + yf()
        },
        yf = function() {
            var a = Va.sequence || 0;
            Va.sequence = a + 1;
            return a
        },
        wa = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        zf = function(a) {
            return null !== a && void 0 !== a && void 0 !== a.length
        },
        Af = function(a, b) {
            0 == b ? a.gb = !0 : a.Y = !0;
            var c = a.f;
            a.h && (a.h.La[c] = b);
            ob[c] && (ob[c].state = b)
        },
        Bf = function(a, b) {
            a.sort(function(a, d) {
                return b(a, d) ? -1 : b(d, a) ? 1 : 0
            })
        };
    var z = window,
        L = document,
        Df = navigator,
        R = function(a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        },
        K = function(a, b, c, d) {
            return (d || "http:" != z.location.protocol ? a : b) + c
        },
        Ef = function(a) {
            var b = L.getElementsByTagName("script")[0] || L.body || L.head;
            b.parentNode.insertBefore(a, b)
        },
        Za = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        r = function(a, b, c) {
            var d = L.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = a;
            Za(d, b);
            c && (d.onerror = c);
            Ef(d);
            return d
        },
        ea = function(a, b) {
            var c = L.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            Ef(c);
            Za(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        H = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a
        },
        T = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        u = function(a) {
            z.setTimeout(a, 0)
        },
        ab = !1,
        bb = [],
        Ff = function(a) {
            if (!ab) {
                var b = L.createEventObject,
                    c = "complete" == L.readyState,
                    d = "interactive" == L.readyState;
                if (!a || "readystatechange" != a.type || c || !b && d) {
                    ab = !0;
                    for (var e = 0; e < bb.length; e++) u(bb[e])
                }
                bb.push = function() {
                    for (var a = 0; a < arguments.length; a++) u(arguments[a]);
                    return 0
                }
            }
        },
        Gf = 0,
        Hf = function() {
            if (!ab && 140 > Gf) {
                Gf++;
                try {
                    L.documentElement.doScroll("left"), Ff()
                } catch (a) {
                    z.setTimeout(Hf, 50)
                }
            }
        },
        ha = function(a) {
            var b = L.getElementById(a);
            if (b && ia(b, "id") != a)
                for (var c = 1; c < document.all[a].length; c++)
                    if (ia(document.all[a][c],
                            "id") == a) return document.all[a][c];
            return b
        },
        ia = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Qa = function(a) {
            return a.target || a.srcElement || {}
        },
        ja = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        hb = function(a) {
            var b = L.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            for (var b = b.lastChild, c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        Sa = function(a, b) {
            for (var c = {}, d = 0; d < b.length; d++) c[b[d]] = !0;
            for (var e = a, d = 0; e && !c[String(e.tagName).toLowerCase()] && 100 > d; d++) e = e.parentElement;
            e && !c[String(e.tagName).toLowerCase()] && (e = null);
            return e
        },
        If = !1,
        Jf = [],
        Kf = function() {
            if (!If) {
                If = !0;
                for (var a = 0; a < Jf.length; a++) u(Jf[a])
            }
        },
        Lf = function(a) {
            a = a || z;
            var b = a.location.href,
                c = b.indexOf("#");
            return 0 > c ? "" : b.substring(c + 1)
        },
        fb = function(a) {
            window.console && window.console.log && window.console.log(a)
        };
    var pa = function(a, b, c, d, e) {
            var f, g = (a.protocol.replace(":", "") || z.location.protocol.replace(":", "")).toLowerCase();
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = (a.hostname || z.location.hostname).split(":")[0].toLowerCase();
                    if (c) {
                        var h = /^www\d*\./.exec(f);
                        h && h[0] && (f = f.substr(h[0].length))
                    }
                    break;
                case "port":
                    f = String(1 * (a.hostname ? a.port : z.location.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var k =
                        f.split("/");
                    0 <= of(d || [], k[k.length - 1]) && (k[k.length - 1] = "");
                    f = k.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    if (e) a: {
                        for (var l = f.split("&"), m = 0; m < l.length; m++) {
                            var n = l[m].split("=");
                            if (decodeURIComponent(n[0]).replace(/\+/g, " ") == e) {
                                f = decodeURIComponent(n.slice(1).join("=")).replace(/\+/g, " ");
                                break a
                            }
                        }
                        f = void 0
                    }
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        oa = function(a) {
            var b = "";
            if (a && a.href) var c = a.href.indexOf("#"),
                b = 0 > c ? a.href : a.href.substr(0, c);
            return b
        },
        na = function(a) {
            var b = L.createElement("a");
            a && (b.href = a);
            return b
        };
    var ya = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var ca = function(a, b, c) {
            H(a, b, c)
        },
        da = function(a) {
            var b = ["veinteractive.com", "ve-interactive.cn"];
            if (!a) return !1;
            var c = pa(na(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        fa = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        },
        Xa = function(a, b) {
            for (var c = [], d = 0; a && d < a.length; d++) a[d] && a[d].hasOwnProperty(b) && c.push(a[d][b]);
            return c
        };
    var Mf = new sf,
        Nf = {},
        Pf = {
            set: function(a, b) {
                Ca(Of(a, b), Nf)
            },
            get: function(a) {
                return W(a, 2)
            },
            reset: function() {
                Mf = new sf;
                Nf = {}
            }
        },
        W = function(a, b) {
            if (2 == b) {
                var c = a.split(".");
                for (var f = Nf, e = 0; e < c.length; e++) {
                    if (void 0 === f[c[e]]) return;
                    f = f[c[e]]
                }
                return f
            }
            return Mf.get(a)
        },
        Qf = function(a, b) {
            Mf.set(a, b);
            Ca(Of(a, b), Nf)
        },
        Of = function(a, b) {
            for (var c = {}, d = c, e = a.split("."),
                     f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        };
    var Rf = !1,
        Sf = !1;
    var Tf = Math.random(),
        Uf = "0.100000" > Tf;
    var Vf = function(a, b) {
            if (Uf) {
                var c = "//www.googletagmanager.com/a?id=GTM-K57FHH&cv=3",
                    d = function(a, b) {
                        b && (c += a + encodeURIComponent(b))
                    };
                d("&v=", "t");
                d("&n=", a);
                d("&s=", b && b.state);
                d("&h=", b && b.hideLatency);
                d("&g=", b && b.gaLatency);
                d("&p=", b && b.loadBy);
                d("&o=", b && b.timeout);
                d("&l=", I().getTime() - Q(nb));
                c += "&sr=0.100000";
                d("&ps=", Tf);
                d("&cb=", ra());
                H(c)
            }
        },
        Wf = eb,
        Xf = function() {
            var a = !1;
        };
    var Zf = function(a) {
            var b = Va.zones;
            return b ? b.checkState("GTM-K57FHH", a) : Yf
        },
        Yf = {
            active: !0,
            isWhitelisted: function() {
                return !0
            }
        };
    var ag = eb,
        bg = [],
        cg = !1,
        sa = function(a) {
            return z["dataLayer"].push(a)
        },
        dg = function(a) {
            var b = !1;
            return function() {
                !b && O(a) && u(wf(a));
                b = !0
            }
        },
        jg = function() {
            for (var a = !1; !cg && 0 < bg.length;) {
                cg = !0;
                var b = bg.shift();
                if (O(b)) try {
                    b.call(Pf)
                } catch (Ea) {} else if (S(b)) a: {
                    var c = b;
                    if ("string" == kb(c[0])) {
                        for (var d = c[0].split("."), e = d.pop(), f = c.slice(1), g = Nf, h = 0; h < d.length; h++) {
                            if (void 0 === g[d[h]]) break a;
                            g = g[d[h]]
                        }
                        try {
                            g[e].apply(g, f)
                        } catch (Ea) {}
                    }
                } else {
                    var m = void 0,
                        n = void 0,
                        q = b;
                    for (n in q) q.hasOwnProperty(n) && Qf(n, q[n]);
                    var x = !1,
                        y = q.event;
                    if (y) {
                        q.hasOwnProperty("gtm.uniqueEventId") || (q["gtm.uniqueEventId"] = yf(), Qf("gtm.uniqueEventId", q["gtm.uniqueEventId"]));
                        m = q["gtm.uniqueEventId"];
                        ma = y;
                        var t = Zf(m);
                        if (t.active) {
                            var w = dg(q.eventCallback),
                                C = q.eventTimeout;
                            C && z.setTimeout(w, Number(C));
                            x = ag(m, y, t.isWhitelisted, w, q.eventReporter)
                        }
                    }
                    nb || (nb = q["gtm.start"]) && Wf();
                    var A = q,
                        B = m,
                        J = y,
                        G = Nf;
                    if (!x) {
                        var E = m,
                            F = y;
                    }
                    ma = null;
                    a = x || a
                }
                var M = b,
                    N = Nf;
                ig();
                cg = !1
            }
            return !a
        },
        kg = function() {
            var a = jg();
            try {
                var b = z["dataLayer"].hide;
                if (b && void 0 !== b["GTM-K57FHH"] && b.end) {
                    b["GTM-K57FHH"] = !1;
                    var c = !0,
                        d;
                    for (d in b)
                        if (b.hasOwnProperty(d) && !0 === b[d]) {
                            c = !1;
                            break
                        }
                    c && (b.end(), b.end = null)
                }
            } catch (e) {}
            return a
        },
        lg = function() {
            var a = R("dataLayer", []),
                b = R("google_tag_manager", {}),
                b = b["dataLayer"] = b["dataLayer"] || {};
            bb.push(function() {
                b.gtmDom || (b.gtmDom = !0, a.push({
                    event: "gtm.dom"
                }))
            });
            Jf.push(function() {
                b.gtmLoad || (b.gtmLoad = !0, a.push({
                    event: "gtm.load"
                }))
            });
            var c = a.push;
            a.push = function() {
                var b = [].slice.call(arguments, 0);
                c.apply(a, b);
                for (bg.push.apply(bg, b); 300 < this.length;) this.shift();
                return jg()
            };
            bg.push.apply(bg, a.slice(0));
            u(kg)
        };
    var Pa = function(a, b, c) {
            T(a, b, c, void 0)
        },
        ba = function(a, b, c) {
            r(a, b, c)
        },
        P = function(a, b) {
            return W(a, b || 2)
        },
        aa = function(a, b) {
            z[a] = b
        },
        p = function(a, b, c) {
            var d = z;
            b && (void 0 === d[a] || c && !d[a]) && (d[a] = b);
            return d[a]
        },
        v = function(a, b, c, d) {
            return (d || "https:" == z.location.protocol ? a : b) + c
        };
    var mg = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        ng = {
            customPixels: ["nonGooglePixels"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        og = {
            customPixels: ["customScripts", "html"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels",
                "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"
            ],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        pg = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        qg = function(a) {
            var b = W("gtm.whitelist");
            var c = b && pg(pf(b), ng),
                d = W("gtm.blacklist") || W("tagTypeBlacklist") || [];
            mg.test(z.location && z.location.hostname) && (d = pf(d), d.push("nonGooglePixels", "nonGoogleScripts"));
            var e = d && pg(pf(d), og),
                f = {};
            return function(g) {
                var h = g && g[Da];
                if (!h) return !0;
                if (void 0 !== f[h.a]) return f[h.a];
                var k = a(h.a);
                if (b) {
                    var l;
                    if (l = k) a: {
                        if (0 > of(c, h.a))
                            if (h.b && 0 < h.b.length)
                                for (var m = 0; m < h.b.length; m++) {
                                    if (0 >
                                        of(c, h.b[m])) {
                                        l = !1;
                                        break a
                                    }
                                } else {
                                l = !1;
                                break a
                            }
                        l = !0
                    }
                    k = l
                }
                var n = !1;
                if (d) {
                    var q;
                    if (!(q = 0 <= of(e, h.a))) a: {
                        for (var x = h.b || [], y = new sf, t = 0; t < e.length; t++) y.set(e[t], !0);
                        for (t = 0; t < x.length; t++)
                            if (y.get(x[t])) {
                                q = !0;
                                break a
                            }
                        q = !1
                    }
                    n = q
                }
                return f[h.a] = !k || n
            }
        };
    var ga = function(a) {
            var b = L;
            return rg ? b.querySelectorAll(a) : null
        },
        sg = !1;
    if (L.querySelectorAll) try {
        var tg = L.querySelectorAll(":root");
        tg && 1 == tg.length && tg[0] == L.documentElement && (sg = !0)
    } catch (a) {}
    var rg = sg;
    var _eu = function(a) {
        var b = String(W("gtm.elementUrl") || a[yc] || ""),
            c = na(b);
        return b
    };
    _eu.a = "eu";
    _eu.b = ["google"];
    var _e = function() {
        return ma
    };
    _e.a = "e";
    _e.b = ["google"];
    var yg = /(^|\.)doubleclick\.net$/i,
        zg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Ta = function(a) {
            for (var b = String(L.cookie).split(";"), c = [], d = 0; d < b.length; d++) {
                var e = b[d].split("="),
                    f = la(e[0]);
                if (f && f == a) {
                    var g = la(e.slice(1).join("="));
                    g && (g = decodeURIComponent(g));
                    c.push(g)
                }
            }
            return c
        },
        Ag = function(a, b, c, d, e) {
            if (yg.test(L.location.hostname) || "/" == c && zg.test(d)) return !1;
            var f = a + "=" + b + "; ";
            c && (f += "path=" + c + "; ");
            e && (f += "expires=" + e.toGMTString() + "; ");
            d && (f += "domain=" + d + ";");
            var g = L.cookie;
            L.cookie = f;
            return g !=
                L.cookie || 0 <= of(Ta(a), b)
        },
        Bg = function(a) {
            if ("none" == a) return 0;
            0 == a.indexOf(".") && (a = a.substr(1));
            return a.split(".").length
        },
        Cg = function(a) {
            var b = a;
            b ? (1 < b.length && b.lastIndexOf("/") == b.length - 1 && (b = b.substr(0, b.length - 1)), 0 != b.indexOf("/") && (b = "/" + b), a = b) : a = "/";
            return "/" == a ? 1 : a.split("/").length
        },
        Dg = function() {
            var a = pa(z.location, "host", !0).split(".");
            if (4 == a.length && /^[0-9]*$/.exec(a[3])) return ["none"];
            for (var b = [], c = a.length - 2; 0 <= c; c--) b.push(a.slice(c).join("."));
            b.push("none");
            return b
        };
    var Eg = function(a, b) {
        this.g = a;
        this.m = b
    };
    Eg.prototype.toString = function() {
        var a = "" + this.g;
        1 < this.m && (a = a + "-" + this.m);
        return a
    };
    var Fg = function(a, b) {
        this.Ja = a;
        this.oa = b
    };
    Fg.prototype.toString = function() {
        return "" + this.oa + "." + this.Ja
    };
    var Ig = function(a, b) {
            var c = new Gg(null, a, b);
            Hg(c);
            return c
        },
        Gg = function(a, b, c) {
            this.Va = Math.floor(I().getTime() / 864E5);
            this.na = b || "auto";
            this.ea = c || "/";
            var d = Bg(this.na),
                e = Cg(this.ea);
            this.G = a || new Eg(d, e);
            this.i = [];
            this.C = new sf
        },
        Kg = function(a, b, c) {
            b && ("" == c.Ja ? Jg(a, b) : (a.C.contains(b) || a.i.push(b), a.C.set(b, c)))
        },
        Lg = function(a, b) {
            for (var c = 0; c < b.length; c++) Kg(a, b[c][0], b[c][1])
        },
        Jg = function(a, b) {
            var c = of(a.i, b);
            0 <= c && a.i.splice(c, 1);
            a.C.set(b, void 0)
        },
        Mg = function(a) {
            for (var b = [], c = 0; c < a.i.length; c++) {
                var d =
                    a.i[c];
                b.push([d, a.C.get(d)])
            }
            return b
        },
        Ng = function(a) {
            for (var b = 0, c = 0; c < a.i.length; c++) b = Math.max(b, a.C.get(a.i[c]).oa);
            return 864E5 * b
        };
    Gg.prototype.toString = function() {
        if (0 == this.i.length) return "";
        for (var a = [], b = 0; b < this.i.length; b++) {
            var c = this.i[b];
            a.push("" + c + "." + this.C.get(c).toString())
        }
        return "GAX1." + this.G.toString() + "." + a.join("!")
    };
    var Og = function(a, b) {
            for (var c = new Date, d = Cg(a.ea), e = [], f = 0; f < a.i.length; f++) {
                var g = a.i[f];
                a.C.get(g).oa < a.Va && e.push(g)
            }
            for (f = 0; f < e.length; f++) Jg(a, e[f]);
            if (a.i.length > (b || 10)) return !1;
            c.setTime(Ng(a));
            if ("auto" != a.na) return Ag("_gaexp", a.toString(), a.ea, a.na, c);
            for (var h = Dg(), k = 0; k < h.length; k++)
                if ("none" != h[k] && (a.G = new Eg(Bg(h[k]), d), Ag("_gaexp", a.toString(), a.ea, h[k], c))) return !0;
            return !1
        },
        Hg = function(a) {
            for (var b = a.G.g, c = a.G.m, d = Ta("_gaexp"), e = [], f = 0; f < d.length; f++) {
                var g = Pg(a, d[f]);
                g && e.push(g)
            }
            Bf(e,
                function(a, d) {
                    var e = a.G,
                        f = d.G;
                    return e.g == f.g && e.m == f.m ? !1 : e.g == b && e.m == c ? !0 : f.g == b && f.m == c ? !1 : e.g == b ? f.g != b || e.m < f.m : f.g == b ? !1 : e.m == c ? f.g != b && (f.m != c || e.g < f.g) : f.m == c ? !1 : e.g < f.g || e.g == f.g && e.m < f.m
                });
            a.G = 0 < e.length ? e[0].G : new Eg(b, c);
            for (f = e.length - 1; 0 <= f; f--) Lg(a, Mg(e[f]))
        },
        Pg = function(a, b) {
            var c = b.match(/GAX1\.([^.]+).(.*)/);
            if (c) {
                var d;
                a: {
                    var e = (c[1] || "").split("-");
                    if (!(0 == e.length || 2 < e.length)) {
                        var f = la(e[0]);
                        if (0 != f.length) {
                            var g = 2 == e.length ? la(e[1]) : "1";
                            if (nf(f) && nf(g)) {
                                d = new Eg(Q(f), Q(g));
                                break a
                            }
                        }
                    }
                    d = void 0
                }
                if (d) {
                    for (var h = new Gg(d, a.na, a.ea), k = (c[2] || "").split("!"), l = 0; l < k.length; l++) {
                        var m = k[l].split(".");
                        if (3 == m.length) {
                            if (!nf(m[1])) return;
                            Kg(h, m[0], new Fg(m[2], Q(m[1])))
                        }
                    }
                    return h
                }
            }
        };
    var _f = function(a) {
        var b = String(W("gtm.referrer") || L.referrer);
        if (!b) return b;
        var c = na(b);
        return b
    };
    _f.a = "f";
    _f.b = ["google"];
    var Tg = function(a) {
            var b = z.location,
                c;
            (c = a[nc] ? a[nc] : W("gtm.url")) && (b = na(String(c)));
            var d = b.href,
                e = d.indexOf("#"),
                f = 0 > e ? d : d.substr(0, e);
            a[Zb] && (f = pa(b, a[Zb], a[se], a[xc], a[fe]));
            return f
        },
        _u = Tg;
    _u.a = "u";
    _u.b = ["google"];
    var _cn = function(a) {
        return 0 <= String(a[Bb]).indexOf(String(a[U]))
    };
    _cn.a = "cn";
    _cn.b = ["google"];
    var _eq = function(a) {
        return String(a[Bb]) == String(a[U])
    };
    _eq.a = "eq";
    _eq.b = ["google"];
    var Ua = new String("undefined"),
        cb = function(a) {
            this.resolve = function(b) {
                for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Ua ? b : a[d]);
                return c.join("")
            }
        };
    cb.prototype.toString = function() {
        return this.resolve("undefined")
    };
    cb.prototype.valueOf = cb.prototype.toString;
    var ch = {},
        db = function(a, b) {
            var c = yf();
            ch[c] = [a, b];
            return c
        },
        dh = function(a) {
            var b = a ? 0 : 1;
            return function(a) {
                var c = ch[a];
                if (c && O(c[b])) c[b]();
                ch[a] = void 0
            }
        };
    var eh = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        fh = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var gh;
    a: {
        var hh = ib.navigator;
        if (hh) {
            var ih = hh.userAgent;
            if (ih) {
                gh = ih;
                break a
            }
        }
        gh = ""
    }
    var X = function(a) {
        return -1 != gh.indexOf(a)
    };
    var jh = function() {
            X("iPod")
        },
        kh = function() {
            return X("iPhone") && !X("iPod") && !X("iPad")
        };
    var lh = function(a) {
        lh[" "](a);
        return a
    };
    lh[" "] = function() {};
    var nh = function(a, b) {
        var c = mh;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var oh = X("Opera"),
        ph = X("Trident") || X("MSIE"),
        qh = X("Edge"),
        rh;
    if (rh = X("Gecko")) {
        var sh = gh.toLowerCase();
        rh = !(-1 != sh.indexOf("webkit") && !X("Edge"))
    }
    var th = rh && !(X("Trident") || X("MSIE")) && !X("Edge"),
        uh = gh.toLowerCase(),
        vh = -1 != uh.indexOf("webkit") && !X("Edge");
    vh && X("Mobile");
    X("Macintosh");
    X("Windows");
    X("Linux") || X("CrOS");
    var wh = ib.navigator || null;
    wh && (wh.appVersion || "").indexOf("X11");
    X("Android");
    kh();
    X("iPad");
    jh();
    kh() || X("iPad") || jh();
    var xh = function() {
            var a = ib.document;
            return a ? a.documentMode : void 0
        },
        yh;
    a: {
        var zh = "",
            Ah = function() {
                var a = gh;
                if (th) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (qh) return /Edge\/([\d\.]+)/.exec(a);
                if (ph) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (vh) return /WebKit\/(\S+)/.exec(a);
                if (oh) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
        Ah && (zh = Ah ? Ah[1] : "");
        if (ph) {
            var Bh = xh();
            if (null != Bh && Bh > parseFloat(zh)) {
                yh = String(Bh);
                break a
            }
        }
        yh = zh
    }
    var Ch = yh,
        mh = {},
        Dh = function(a) {
            return nh(a, function() {
                for (var b = 0, c = eh(String(Ch)).split("."), d = eh(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var g = c[f] || "",
                        h = d[f] || "";
                    do {
                        var k = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""],
                            l = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                        if (0 == k[0].length && 0 == l[0].length) break;
                        b = fh(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == l[1].length ? 0 : parseInt(l[1], 10)) || fh(0 == k[2].length, 0 == l[2].length) || fh(k[2], l[2]);
                        g = k[3];
                        h = l[3]
                    } while (0 == b)
                }
                return 0 <= b
            })
        },
        Eh;
    var Fh = ib.document;
    Eh = Fh && ph ? xh() || ("CSS1Compat" == Fh.compatMode ? parseInt(Ch, 10) : 5) : void 0;
    var Gh;
    if (!(Gh = !th && !ph)) {
        var Hh;
        if (Hh = ph) Hh = 9 <= Number(Eh);
        Gh = Hh
    }
    Gh || th && Dh("1.9.1");
    ph && Dh("9");
    var gb = function(a, b) {
            var c = "";
            ph && !Ih(a) && (c = '<script>document.domain="' + document.domain + '";\x3c/script>' + c);
            var d = "<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>" + c + "</head><body>" + b + "</body></html>";
            if (Jh) a.srcdoc = d;
            else if (Kh) {
                var e = a.contentWindow.document;
                e.open("text/html", "replace");
                e.write(d);
                e.close()
            } else Lh(a, d)
        },
        Jh = vh && "srcdoc" in document.createElement("iframe"),
        Kh = th || vh || ph && Dh(11),
        Lh = function(a, b) {
            ph && Dh(7) && !Dh(10) && 6 > Mh() && Nh(b) && (b = Oh(b));
            var c = function() {
                a.contentWindow.goog_content =
                    b;
                a.contentWindow.location.replace("javascript:window.goog_content")
            };
            ph && !Ih(a) ? Ph(a, c) : c()
        },
        Mh = function() {
            var a = navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);
            return a ? parseFloat(a[1]) : 0
        },
        Ih = function(a) {
            try {
                var b;
                var c = a.contentWindow;
                try {
                    var d;
                    if (d = !!c && null != c.location.href) b: {
                        try {
                            lh(c.foo);
                            d = !0;
                            break b
                        } catch (e) {}
                        d = !1
                    }
                    b = d
                } catch (e) {
                    b = !1
                }
                return b
            } catch (e) {
                return !1
            }
        },
        Qh = 0,
        Ph = function(a, b) {
            var c = "goog_rendering_callback" + Qh++;
            ib[c] = b;
            a.src = "javascript:'<script>(function() {document.domain = \"" +
                document.domain + '";var continuation = window.parent.' + c + ";window.parent." + c + " = null;continuation();})()\x3c/script>'"
        },
        Nh = function(a) {
            for (var b = 0; b < a.length; ++b)
                if (127 < a.charCodeAt(b)) return !0;
            return !1
        },
        Oh = function(a) {
            for (var b = unescape(encodeURIComponent(a)), c = Math.floor(b.length / 2), d = [], e = 0; e < c; ++e) d[e] = String.fromCharCode(256 * b.charCodeAt(2 * e + 1) + b.charCodeAt(2 * e));
            1 == b.length % 2 && (d[c] = b.charAt(b.length - 1));
            return d.join("")
        };
    /*
     Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

    var fi = function(a, b, c, d, e) {
            var f = a + "{" + (b + ": " + c + (d ? " !important" : "")) + "}";
            e && (f = e + "{" + f + "}");
            var g = document;
            if (g.createStyleSheet) {
                var h = ci(g),
                    k = h.rules.length;
                h.insertRule(f, k);
                return function() {
                    h.deleteRule ? h.deleteRule(k) : h.removeRule(k);
                    h.insertRule("x {}", k)
                }
            }
            var l = di(f, g);
            ei(l, g);
            var m = l.parentNode;
            return function() {
                m.removeChild(l)
            }
        },
        gi = null,
        ci = function(a) {
            if (gi) return gi;
            for (var b = a.styleSheets.length - 1; 0 <= b; b--) {
                var c = a.styleSheets[b],
                    d = c.ownerNode;
                if (d && d.parentNode && "HEAD" == d.parentNode.tagName) return gi =
                    c
            }
            0 == a.styleSheets.length && a.createStyleSheet();
            return gi = a.styleSheets[0]
        },
        di = function(a, b) {
            var c = (b || document).createElement("style");
            void 0 !== c.cssText ? c.cssText = a : c.innerHTML = a;
            return c
        },
        ei = function(a, b) {
            var c = b || document,
                d = c.getElementsByTagName("head")[0];
            d || (d = c.createElement("head"), c.body.parentNode.insertBefore(d, c.body));
            d.appendChild(a)
        };
    var ni = {},
        oi = void 0,
        pi = function(a) {
            var b = ni[a];
            b || (b = {
                id: a,
                v: [],
                ba: 0,
                Na: null,
                Ca: void 0,
                Ga: !1
            }, ni[a] = b);
            oi = b
        },
        ri = function(a, b, c, d) {
            var e = oi;
            if (!rg || !e) return !1;
            var f = {
                id: e.id + ":" + e.v.length,
                ob: b,
                X: [],
                jb: c,
                H: a,
                ya: 0,
                wa: d || null,
                Ua: 0,
                aa: !1
            };
            e.v.push(f);
            null === a ? (f.aa = !0, b(null)) : qi(e);
            return !0
        },
        si = function(a) {
            var b = fi(a, "visibility", "hidden", !0);
            return function() {
                O(b) && b.apply();
                b = null
            }
        },
        ti = function(a, b, c, d) {
            var e = b;
            if (!ab) {
                var f = si(a.A);
                bb.push(f);
                e = function(a, c) {
                    var d = b(a, c);
                    f();
                    return d
                }
            }
            return ri(a,
                e, c, d)
        },
        qi = function(a) {
            if (!a.Ga) {
                for (var b = a.ba; b < a.v.length; b++) {
                    var c = a.v[b],
                        d = b == a.ba;
                    if (!c.aa && !ui(d, c)) break;
                    c.aa && d && a.ba++
                }
                a.v.length > a.ba ? (a.Na || (a.Na = z.setTimeout(function() {
                    a.Na = null;
                    qi(a)
                }, 80)), ab || a.Ca || (a.Ca = function() {
                    u(function() {
                        qi(a)
                    })
                }, T(L, "DOMContentLoaded", a.Ca))) : vi(a)
            }
        },
        vi = function(a) {
            for (var b = 0; b < a.v.length; b++) {
                var c = a.v[b];
                if (c.H)
                    for (var d = ga(c.H.A) || [], e = 0; e < d.length; e++) {
                        var f = d[e];
                        f.gtmProgressiveApplied && f.gtmProgressiveApplied[c.id] || (wi(f, c.id), c.X.push(xi(f, c.id)))
                    }
            }
        },
        ui = function(a, b) {
            var c = [];
            if (b.H) {
                var d = yi(b.H, b.id),
                    e = null;
                b.wa && (e = yi(b.wa, b.id + "-t"));
                for (var f = 0; f < d.length; f++) {
                    var g = d[f],
                        h;
                    if (null != e && (h = e.length > f ? e[f] : null, !h && !ab && (null === b.wa.s || b.Ua + c.length < b.wa.s))) break;
                    c.push({
                        element: g,
                        ac: h
                    })
                }
            }
            if (!ab && b.jb && (!a || null == b.H.s || b.H.s != b.ya + c.length)) return !1;
            for (var k = 0; k < c.length; k++) {
                var l = c[k].element,
                    m = c[k].ac,
                    n;
                b.ya++;
                wi(l, b.id);
                m && (b.Ua++, n = b.id + "-t", wi(m, n));
                var q = b.ob(l, m);
                O(q) && b.X.push(q);
                b.X.push(xi(l, b.id));
                m && n && b.X.push(xi(m, n))
            }
            if (b.H.s &&
                b.H.s == b.ya || ab) b.aa = !0;
            return !0
        },
        wi = function(a, b) {
            a.gtmProgressiveApplied || (a.gtmProgressiveApplied = {});
            a.gtmProgressiveApplied[b] = !0
        },
        xi = function(a, b) {
            return function() {
                a.gtmProgressiveApplied && delete a.gtmProgressiveApplied[b]
            }
        },
        yi = function(a, b) {
            for (var c = ga(a.A) || [], d = [], e = 0; e < c.length; e++) {
                var f = c[e];
                if (!f.gtmProgressiveApplied || !f.gtmProgressiveApplied[b]) {
                    if (a.F && !zi(f)) break;
                    d.push(f)
                }
            }
            return d
        },
        zi = function(a) {
            if (ab) return !0;
            for (; a;) {
                if (a.nextSibling) return !0;
                a = a.parentNode
            }
            return !1
        };
    var Ha, Ai, Bi, Na = /(Firefox\D28\D)/g.test(Df.userAgent),
        Di = function(a, b) {
            return function(c) {
                c = c || z.event;
                var d = Qa(c),
                    e = !1;
                if (3 !== c.which || "LINK_CLICK" != a) {
                    "LINK_CLICK" == a && (d = Sa(d, ["a", "area"]), e = !d || !d.href || Ci(d.href) || 2 === c.which || null == c.which && 4 == c.button || c.ctrlKey || c.shiftKey || c.altKey || !0 === c.metaKey);
                    var f = "FORM_SUBMIT" == a ? Ha : Bi;
                    if (c.defaultPrevented || !1 === c.returnValue || c.ca && c.ca()) {
                        if (d) {
                            var g = {
                                    simulateDefault: !1
                                },
                                h = Ia(f, ["wnc", "nwnc"]);
                            h && Ja(a, d, g, f.wt, h)
                        }
                    } else {
                        if (d) {
                            var g = {},
                                k, l = Ia(f, ["wnc", "nwnc", "nwc", "wc"]);
                            (k = Ja(a, d, g, f.wt, l)) || (Ka(g.eventReport, f) ? b = !0 : e = !0);
                            e = e || k || "LINK_CLICK" == a && Na;
                            g.simulateDefault = !k && b && !e;
                            g.simulateDefault && (e = Oa(d, g) || e, !e && c.preventDefault && c.preventDefault());
                            c.returnValue = k || !b || e;
                            return c.returnValue
                        }
                        return !0
                    }
                }
            }
        },
        Ja = function(a, b, c, d, e) {
            var f = d || 2E3,
                g = {
                    "gtm.element": b,
                    "gtm.elementClasses": b.className,
                    "gtm.elementId": b["for"] || ia(b, "id") || "",
                    "gtm.elementTarget": b.formTarget || b.target || ""
                };
            switch (a) {
                case "LINK_CLICK":
                    g["gtm.triggers"] = e || "";
                    g.event =
                        "gtm.linkClick";
                    g["gtm.elementUrl"] = b.href;
                    g.eventTimeout = f;
                    g.eventCallback = Ei(b, c);
                    g.eventReporter = function(a) {
                        c.eventReport = a
                    };
                    break;
                case "FORM_SUBMIT":
                    g["gtm.triggers"] = e || "";
                    g.event = "gtm.formSubmit";
                    g["gtm.elementUrl"] = Fi(b);
                    g.eventTimeout = f;
                    g.eventCallback = Gi(b, c);
                    g.eventReporter = function(a) {
                        c.eventReport = a
                    };
                    break;
                case "CLICK":
                    g.event = "gtm.click";
                    g["gtm.elementUrl"] = (b.attributes && b.attributes.formaction ? b.formAction : "") || b.action || b.href || b.src || b.code || b.codebase || "";
                    break;
                default:
                    return !0
            }
            return sa(g)
        },
        Fi = function(a) {
            var b = a.action;
            b && b.tagName && (b = a.cloneNode(!1).action);
            return b
        },
        Ma = function(a) {
            var b = a.target;
            if (!b) switch (String(a.tagName).toLowerCase()) {
                case "a":
                case "area":
                case "form":
                    b = "_self"
            }
            return b
        },
        Oa = function(a, b) {
            var c = !1,
                d = /(iPad|iPhone|iPod)/g.test(Df.userAgent),
                e = Ma(a).toLowerCase();
            switch (e) {
                case "":
                case "_self":
                case "_parent":
                case "_top":
                    var f;
                    f = (e || "_self").substring(1);
                    b.targetWindow = z.frames && z.frames[f] || z[f];
                    break;
                case "_blank":
                    d ? (b.simulateDefault = !1, c = !0) : (b.targetWindowName =
                        "gtm_autoEvent_" + I().getTime(), b.targetWindow = z.open("", b.targetWindowName));
                    break;
                default:
                    d && !z.frames[e] ? (b.simulateDefault = !1, c = !0) : (z.frames[e] || (b.targetWindowName = e), b.targetWindow = z.frames[e] || z.open("", e))
            }
            return c
        },
        Ei = function(a, b, c) {
            return function() {
                b.simulateDefault && (b.targetWindow ? b.targetWindow.location.href = a.href : (c = c || I().getTime(), 500 > I().getTime() - c && z.setTimeout(Ei(a, b, c), 25)))
            }
        },
        Gi = function(a, b, c) {
            return function() {
                if (b.simulateDefault)
                    if (b.targetWindow) {
                        var d;
                        b.targetWindowName &&
                        (d = a.target, a.target = b.targetWindowName);
                        L.gtmSubmitFormNow = !0;
                        La(a).call(a);
                        b.targetWindowName && (a.target = d)
                    } else c = c || I().getTime(), 500 > I().getTime() - c && z.setTimeout(Gi(a, b, c), 25)
            }
        },
        Ia = function(a, b) {
            for (var c = [], d = 0; d < b.length; d++) {
                var e = a[b[d]],
                    f;
                for (f in e) e.hasOwnProperty(f) && e[f] && c.push(f)
            }
            return c.join(",")
        },
        Hi = function(a, b, c, d, e) {
            var f = e;
            if (!f || "0" == f) {
                if (a.l) return;
                a.l = !0;
                f = "0"
            }
            var g = a.wt;
            b && (!g || g > d) && (a.wt = d);
            a[b ? c ? "wc" : "wnc" : c ? "nwc" : "nwnc"][f] = !0
        },
        Ka = function(a, b) {
            if (b.wnc["0"] || b.wc["0"]) return !0;
            for (var c = 0; c < Ii.length; c++)
                if (a.passingRules[c]) {
                    var d = Ji[c],
                        e = d && d[0] && d[0][0] || d[1] && d[1][0];
                    if (e && "0" != e && (b.wc[e] || b.wnc[e]))
                        for (var f = Ii[c][1], g = 0; g < f.length; g++)
                            if (a.resolvedTags[f[g]]) return !0
                }
            return !1
        },
        qa = function(a, b, c, d, e) {
            var f, g, h = !1;
            switch (a) {
                case "CLICK":
                    if (L.gtmHasClickListenerTag) return;
                    L.gtmHasClickListenerTag = !0;
                    f = "click";
                    g = function(a) {
                        var b = Qa(a);
                        b && Ja("CLICK", b, {}, d)
                    };
                    h = !0;
                    break;
                case "LINK_CLICK":
                    b && !Ai && (Ai = oa(L.location));
                    Hi(Bi, b || !1, c || !1, d, e);
                    if (L.gtmHasLinkClickListenerTag) return;
                    L.gtmHasLinkClickListenerTag = !0;
                    f = "click";
                    g = Di(a, b || !1);
                    break;
                case "FORM_SUBMIT":
                    Hi(Ha, b || !1, c || !1, d, e);
                    if (L.gtmHasFormSubmitListenerTag) return;
                    L.gtmHasFormSubmitListenerTag = !0;
                    f = "submit";
                    g = Di(a, b || !1);
                    break;
                default:
                    return
            }
            T(L, f, g, h)
        },
        Ci = function(a) {
            if (!Ai) return !0;
            var b = a.indexOf("#");
            if (0 > b) return !1;
            if (0 == b) return !0;
            var c = na(a);
            return Ai == oa(c)
        },
        La = function(a) {
            try {
                if (a.constructor && a.constructor.prototype) return a.constructor.prototype.submit
            } catch (b) {}
            if (a.gtmReplacedFormSubmit) return a.gtmReplacedFormSubmit;
            L.gtmFormElementSubmitter || (L.gtmFormElementSubmitter = L.createElement("form"));
            return L.gtmFormElementSubmitter.submit.call ? L.gtmFormElementSubmitter.submit : a.submit
        },
        Ki = function() {
            var a = function(a) {
                var b = R("google_tag_manager", {}),
                    d = b[a];
                d || (d = b[a] = {}, d.nwnc = {}, d.nwc = {}, d.wnc = {}, d.wc = {}, d.wt = null, d.l = !1);
                return d
            };
            Bi = a("linkClickMap");
            Ha = a("formSubmitMap")
        };
    var za = function(a, b) {
        var c = b || ib,
            d = c.onerror,
            e = !1;
        vh && !Dh("535.3") && (e = !e);
        c.onerror = function(b, c, h, k, l) {
            d && d(b, c, h, k, l);
            a({
                message: b,
                fileName: c,
                ab: h,
                sc: k,
                error: l
            });
            return e
        }
    };
    var dj = function(a) {
            var b = function(b) {
                b = b || z.event;
                var c = a.call(this, b);
                b.returnValue = !1 !== c && (b.returnValue || void 0 === b.returnValue);
                return c
            };
            b.gtmOnclickWrapper = !0;
            return b
        },
        _lcl = function(a, b) {
            var c = wa(a, kf, !0),
                d = wa(a, Vb, !0),
                e = Q(a[lf]);
            0 >= e && (e = 2E3);
            var f = wa(a, Xe, "");
            qa("LINK_CLICK", !!c, !!d, e, String(f));
            if (!L.gtmLinkClickListener && (L.gtmLinkClickListener = !0, !L.addEventListener)) {
                var g = function(a) {
                    a = a || z.event;
                    for (var b = Qa(a); b;) b.onclick && !b.onclick.gtmOnclickWrapper && (b.onclick = dj(b.onclick)),
                        b = b.parentElement
                };
                T(L, "mousedown", g, !1);
                T(L, "keydown", function(a) {
                    a = a || z.event;
                    13 == a.keyCode && g(a)
                }, !1)
            }
            u(b)
        };
    _lcl.a = "lcl";
    _lcl.b = [];
    var ej = function(a) {
        if (!a) return !1;
        if (a[Ab] && S(a[U])) {
            for (var b = a[U], c = 0; c < b.length; c++)
                if (a[U] = b[c], tf(a)) return !0;
            return !1
        }
        return tf(a)
    };
    var zj = 39,
        Aj = [],
        Bj = [],
        Cj = [],
        Dj = new sf,
        Ej = [],
        Z = [],
        Ii = [],
        Ji = [],
        Fj = function() {
            this.N = []
        };
    Fj.prototype.set = function(a, b) {
        this.N.push([a, b]);
        return this
    };
    Fj.prototype.resolve = function(a, b) {
        for (var c = {}, d = 0; d < this.N.length; d++) {
            var e = Gj(this.N[d][0], a, b),
                f = Gj(this.N[d][1], a, b);
            c[e] = f
        }
        return c
    };
    var Hj = function(a) {
        this.index = a
    };
    Hj.prototype.resolve = function(a, b) {
        var c = Cj[this.index];
        if (c && !b(c)) {
            var d = c[Fa];
            if (a) {
                if (a.get(d)) return;
                a.set(d, !0)
            }
            c = Gj(c, a, b);
            a && a.set(d, !1);
            return tf(c)
        }
    };
    var _M = function(a) {
            return new Hj(a)
        },
        Ij = function(a) {
            this.resolve = function(b, c) {
                for (var d = [], e = !1, f = 0; f < a.length; f++) {
                    var g = Gj(Aj[a[f]], b, c);
                    g === Ua && (e = !0);
                    d.push(g)
                }
                return e ? new cb(d) : d.join("")
            }
        },
        _T = function(a) {
            return new Ij(arguments)
        },
        Jj = function(a) {
            function b(b) {
                for (var c = 1; c < a.length; c++)
                    if (a[c] == b) return !0;
                return !1
            }
            this.resolve =
                function(c, d) {
                    var e = Gj(a[0], c, d);
                    if (a[0] instanceof Hj && b(8) && b(16)) {
                        if (e === Ua) return e;
                        var f = ta();
                        Dj.set(f, e);
                        return 'google_tag_manager["GTM-K57FHH"].macro(\'' + f + "')"
                    }
                    for (var e = String(e), g = 1; g < a.length; g++) e = Y[a[g]](e);
                    return e
                }
        },
        _E = function(a, b) {
            return new Jj(arguments)
        },
        Kj = function(a, b) {
            this.w = a;
            this.va = b
        },
        _R = function(a, b) {
            return new Kj(a, b)
        };
    var Gj = function(a, b, c) {
            var d = a;
            if (a instanceof Hj || a instanceof Fj || a instanceof Ij || a instanceof Jj) return a.resolve(b, c);
            if (!(a instanceof Kj))
                if (S(a))
                    for (var d = [], e = 0; e < a.length; e++) d[e] = Gj(a[e], b, c);
                else if (a && "object" == typeof a) {
                    var d = {},
                        f;
                    for (f in a) a.hasOwnProperty(f) && (d[f] = Gj(a[f], b, c))
                }
            return d
        },
        Nj = function() {
            for (var a = [_eq, _e, '_event', _M(0), 'gtm.js', '1509816_2147479553', _ua, true, 'UA-46803427-2', false, '\x26tid', {
                10: 8
            }, 1, _sp, '966923546', '', 2, _cn, _u, 'Page URL', _M(1), 'http://the8guild.com/themes/wordpress/appica2/ios-parallax/', '1509816_2', _lcl, '1509816_1', '2000', 3, 'Page Hostname', 'host', 'Page Path', 'path', _f, 'Referrer', 'Event'], b = [], c = 0; c < a.length; c++) b[c] =
                Mj(c, a);
            return b
        },
        Mj = function(a, b) {
            var c = b[a],
                d = c;
            if (c instanceof Hj || c instanceof Jj || c instanceof Ij || c instanceof Kj) d = c;
            else if (S(c))
                for (var d = [], e = 0; e < c.length; e++) d[e] = Mj(c[e], b);
            else if ("object" == typeof c) {
                var d = new Fj,
                    f;
                for (f in c) c.hasOwnProperty(f) && d.set(b[f], Mj(c[f], b))
            }
            return d
        },
        Pj = function(a, b) {
            for (var c = b ? b.split(",") : [], d = 0; d < c.length; d++) {
                var e = c[d] = c[d].split(":");
                0 == a && (e[1] =
                    Aj[e[1]]);
                if (1 == a)
                    for (var f = Oj(e[0]), e = c[d] = {}, g = 0; g < f.length; g++) {
                        var h = Bj[f[g]];
                        e[h[0]] = h[1]
                    }
                if (2 == a)
                    for (g = 0; 4 > g; g++) e[g] = Oj(e[g]);
                3 == a && (c[d] = Aj[e[0]]);
                if (4 == a)
                    for (g = 0; 2 > g; g++)
                        if (e[g]) {
                            e[g] = e[g].split(".");
                            for (var k = 0; k < e[g].length; k++) e[g][k] = Aj[e[g][k]]
                        } else e[g] = [];
                5 == a && (c[d] = e[0])
            }
            return c
        },
        Oj = function(a) {
            var b = [];
            if (!a) return b;
            for (var c = 0, d = 0; d < a.length && c < zj; c += 6, d++) {
                var e = a && a.charCodeAt(d) || 65;
                if (65 != e) {
                    var f;
                    f = 65 < e && 90 >= e ? e - 65 : 97 <= e && 122 >= e ? e - 97 + 26 : 95 == e ? 63 : 48 <= e ? e - 48 + 52 : 62;
                    1 & f && b.push(c);
                    2 & f && b.push(c + 1);
                    4 & f && b.push(c + 2);
                    8 & f && b.push(c + 3);
                    16 & f && b.push(c + 4);
                    32 & f && b.push(c + 5)
                }
            }
            return b
        },
        Qj = function(a, b, c) {
            a.push.apply(a, Pj(b, c))
        };
    var fg = function() {},
        Yj = function(a) {},
        ig = function() {},
        Zj = function(a) {},
        ak = function(a, b) {},
        bk = function(a, b) {},
        gg = function(a) {};
    var ck, dk;
    var pk = function(a) {
            return function() {}
        },
        qk = function(a) {
            return function() {}
        };
    var rk = function(a) {
            var b = this;
            this.f = a;
            this.Y = this.gb = !1;
            this.ua = [];
            this.pa = [];
            this.V = function() {
                if (b.h && b.h.event) {
                    var c = b.h.event,
                        d = b.f;
                }
                b.Y || xf(b.ua);
                Af(b, 1);
                if (pb[a])
                    for (var e = 0; e < pb[a].length; e++) pb[a].shift().V()
            };
            this.U = function() {
                if (b.h && b.h.event) {
                    var c = b.h.event,
                        d = b.f;
                }
                b.Y || xf(b.pa);
                Af(b, 2);
                if (pb[a])
                    for (var e = 0; e < pb[a].length; e++) pb[a].shift().U()
            };
            this.B = eb
        },
        sk = function(a, b) {
            a.ua.push(b)
        },
        tk = function(a, b) {
            a.pa.push(b)
        },
        uk = function(a) {
            this.J = [];
            this.Ka = [];
            this.Wa = {};
            this.bb = [];
            this.T = 0;
            this.Ia = {};
            this.Ma = {};
            this.La = {};
            this.event = a
        };
    uk.prototype.addListener = function(a) {
        this.bb.push(a)
    };
    var vk = function(a) {
            0 < a.T || xf(a.bb)
        },
        wk = function(a, b, c, d, e, f) {
            if (!c.Y) {
                a.J[b] = c;
                void 0 == d && (d = []);
                void 0 == e && (e = []);
                void 0 == f && (f = []);
                d = S(d) ? d.slice() : ["or", d];
                e = S(e) ? e.slice() : [e];
                f = S(f) ? f.slice() : [f];
                a.Wa[b] = d;
                a.Ia[b] = 0 < e.length;
                a.Ma[b] = 0 < f.length;
                a.T++;
                var g = function() {
                    0 < a.T && !a.Ia[b] && !a.Ma[b] && a.T--;
                    vk(a)
                };
                sk(c, g);
                tk(c, g)
            }
        },
        Bk = function(a) {
            for (var b = [], c = {}, d = 0; d < a.J.length; c = {
                O: c.O
            }, d++)
                if (c.O = a.J[d], c.O) {
                    var e = a.Wa[d],
                        f = a.Ia[d],
                        g = a.Ma[d];
                    if (0 != e.length || f || g) {
                        if (0 < e.length)
                            for (var h = xk(e, c.O.B),
                                     k = 0; k < e.length; k++) e[k] instanceof Kj && e[k].w != d && yk(a, e[k].w, h);
                        (f || g) && zk(a, d, function(a) {
                            return function() {
                                0 < a.O.h.T && a.O.h.T--;
                                vk(a.O.h)
                            }
                        }(c))
                    } else b.push(d)
                }
            for (d = 0; d < b.length; d++) a.J[b[d]].B();
            for (d = 0; d < a.Ka.length; d++) {
                var l = a.Ka[d];
                Ak(l);
                0 < l.length && l[0].B()
            }
        },
        yk = function(a, b, c) {
            a.J[b] && (sk(a.J[b], function() {
                c(b, !0)
            }), tk(a.J[b], function() {
                c(b, !1)
            }))
        },
        xk = function(a, b) {
            var c = eb,
                d = !1;
            return function(e, f) {
                var g;
                a: {
                    for (var h = 0; h < a.length; h++)
                        if (a[h] instanceof Kj && a[h].w === e || a[h] === e) {
                            g = h;
                            break a
                        }
                    g = -1
                }
                d || 0 > g || ("or" == a[0] ? f ? (d = !0, b()) : (a.splice(g, 1), 1 == a.length && (d = !0, c())) : f ? (a.splice(g, 1), 1 == a.length && (d = !0, b())) : (d = !0, c()))
            }
        },
        zk = function(a, b, c) {
            var d = [],
                e = !1,
                f = function(b) {
                    var c, g, h = Z[b];
                    if (a.event.c(h)) {} else g = Ck(h, b, a.event.c, a);
                    if (c = g) {
                        var k = Dk(b, !0);
                        0 < k.length && f(k[0].w);
                        d.push(c);
                        var l = Dk(b, !1);
                        0 < l.length && f(l[0].w)
                    } else e = !0
                };
            f(b);
            if (!e) {
                for (var g = 0; g < d.length; g++) {
                    var h = d[g],
                        k = Dk(h.f, !0);
                    if (0 < k.length) {
                        var l = d[g - 1],
                            m = Ek(h);
                        sk(l, m);
                        0 == k[0].va ? tk(l, m) : tk(l, c)
                    }
                    var n = Dk(h.f, !1);
                    0 < n.length && (m = Ek(d[g + 1]), sk(h, m), 0 == n[0].va ? tk(h, m) : tk(h, c))
                }
                sk(d[d.length - 1], c);
                tk(d[d.length - 1], c);
                a.Ka.push(d)
            }
        },
        Dk = function(a, b) {
            var c = b ? pe : Ge,
                d = Z[a],
                e = void 0 === d[c] ? [] : d[c];
            return S(e) ? e : [e]
        },
        Ek = function(a) {
            return function() {
                a.B()
            }
        },
        Ak = function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = d.f,
                    f = ob[e],
                    g = f.firingOption;
                0 != g && (1 == g && void 0 !==
                d.h.La[e] || 2 == g && void 0 !== f.state) && b.push(d)
            }
            var h = Fk(b),
                k;
            for (k in h)
                if (h.hasOwnProperty(k)) {
                    for (var l = void 0, m = void 0, n = h[k], q = n[0], x = n[n.length - 1], y, t = 0; t < a.length; t++) {
                        var w = a[t];
                        !l && w.f == q && 0 < t && (l = a[t - 1]);
                        w.f == x && t < a.length - 1 && (m = a[t + 1]);
                        if (-1 < of(n, w.f))
                            if (y = a.splice(t, 1)[0], w.f == x) break;
                            else t--
                    }
                    if (y) {
                        var C = Number(k),
                            A = l,
                            B = m;
                        if (A) {
                            var J = A.ua[0],
                                G = A.pa[0],
                                D = A;
                            D.ua = [];
                            D.pa = [];
                            sk(A, J);
                            tk(A, G)
                        }
                        if (A && B) {
                            var E = Ek(B);
                            sk(A, E);
                            var F = Dk(A.f, !1);
                            0 < F.length && F[0].w != C && 0 == F[0].va && tk(A, E);
                            var M = Dk(B.f, !0);
                            0 < M.length && M[0].w != C && 0 == M[0].va && tk(A, E)
                        }
                    }
                }
        },
        Fk = function(a) {
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = a[c],
                    e = [],
                    f = function(a) {
                        var b = Dk(a, !0);
                        0 < b.length && f(b[0].w);
                        e.push(a);
                        var c = Dk(a, !1);
                        0 < c.length && f(c[0].w)
                    };
                f(d.f);
                b[d.f] = e
            }
            Gk(a, b);
            return b
        },
        Gk = function(a, b) {
            for (var c = 0; c < a.length; c++) {
                var d = a[c].f,
                    e;
                for (e in b)
                    if (b.hasOwnProperty(e) && e != d && -1 < of(b[e], d)) {
                        delete b[d];
                        break
                    }
            }
        };
    var Ik = function(a, b, c) {
            return function() {
                a[bd] = b.V;
                a[cd] = b.U;
                var d = b.f,
                    e = b.h && b.h.La[d],
                    f = ob[d] && ob[d].state,
                    g = e ? void 0 !== e : b.gb || b.Y,
                    h = ob[d] && ob[d].firingOption,
                    k = h && 2 == h,
                    l = h && 1 == h;
                if (!g && void 0 === f || !g && !k || !k && !l) {
                    Af(b, 0);
                    var m = b.h ? b.h.event : void 0;
                    a = Hk(a, c);
                    if (m) {
                        var n = a;
                        ak(m, d)
                    }
                    tf(a, b.V, b.U)
                } else k && 0 == f || l && 0 == e ? pb[d].push(b) : k && 1 == f || l && 1 == e ? b.V() : b.U()
            }
        },
        Hk = function(a, b) {
            a = Gj(a, new sf, b);
            return a
        },
        Ck = function(a, b, c, d) {
            var e = d && d.J,
                f;
            if (f = e) a: {
                if (e && S(e) && 0 != e.length)
                    for (var g = 0; g < e.length; g++)
                        if (e[g] && e[g].f === b) {
                            f = e[g];
                            break a
                        }
                f = void 0
            }
            var h = f || new rk(b);
            h.h = d;
            sk(h, pk(a));
            tk(h, qk(a));
            h.B = Ik(a, h, c);
            return h
        };
    var _sp = function(a, b, c) {
        r("//www.googleadservices.com/pagead/conversion_async.js", function() {
            var d = z.google_trackConversion;
            O(d) ? d({
                google_conversion_id: a[V],
                google_conversion_label: a[qd],
                google_custom_params: a[oc] || {},
                google_remarketing_only: !0,
                onload_callback: b
            }) || c() : c()
        }, c)
    };
    _sp.a = "sp";
    _sp.b = ["google"];
    var Nk = !1,
        _ua = function(a, b, c) {
            function d(a) {
                var b = [].slice.call(arguments, 0);
                b[0] = n + b[0];
                z[l()].apply(window, b)
            }

            function e(b, c) {
                void 0 !== a[c] && d("set", b, a[c])
            }

            function f(a, b) {
                return void 0 === b ? b : a(b)
            }

            function g(a, b) {
                if (b)
                    for (var c in b) b.hasOwnProperty(c) && d("set", a + c, b[c])
            }

            function h() {
                var b = function(a, b, c) {
                        if (!va(b)) return !1;
                        for (var e = wa(Object(b), c, []), f = 0; e && f < e.length; f++) d(a, e[f]);
                        return !!e && 0 < e.length
                    },
                    c;
                if (a[Gc]) {
                    c = W("ecommerce");
                } else a[Fc] && (c = a[Fc].ecommerce);
                if (!va(c)) return;
                c = Object(c);
                var e = wa(a[Yc], "currencyCode", c.currencyCode);
                void 0 !== e && d("set", "&cu", e);
                b("ec:addImpression", c, "impressions");
                if (b("ec:addPromo", c[c.promoClick ? "promoClick" : "promoView"], "promotions") && c.promoClick) {
                    d("ec:setAction", "promo_click", c.promoClick.actionField);
                    return
                }
                for (var f = "detail checkout checkout_option click add remove purchase refund".split(" "), g = 0; g < f.length; g++) {
                    var h =
                        c[f[g]];
                    if (h) {
                        b("ec:addProduct", h, "products");
                        d("ec:setAction", f[g], h.actionField);
                        break
                    }
                }
            }

            function k(a, b, c) {
                var d = 0;
                if (void 0 !== a)
                    for (var e in a)
                        if (a.hasOwnProperty(e) && (c && y[e] || !c && void 0 === y[e])) {
                            var f = t[e] ? xa(a[e]) : a[e];
                            "anonymizeIp" != e || f || (f = void 0);
                            b[e] = f;
                            d++
                        }
                return d
            }
            R("GoogleAnalyticsObject", a[Gd] || "ga");
            var l = function() {
                    return z.GoogleAnalyticsObject
                },
                m = R(l(), function() {
                    var a = z[l()];
                    a.q = a.q || [];
                    a.q.push(arguments)
                });
            m.l = Number(I());
            var n = "",
                q = "";
            "string" != typeof a[Te] ? (q = ta(), n = q + ".") : "" !== a[Te] && (q = a[Te], n = q + ".");
            var x = !1;
            var w = {
                name: q
            };
            m("create", a[rb], w);
            d("set", "&gtm", "GTM-K57FHH");
            var A;
            a[vd] && d("require", "linkid", "linkid.js");
            d("set", "hitCallback", function() {
                if (O(a[dd])) a[dd]();
                else {
                    var c = a[Yc],
                        d = c && c.hitCallback;
                    O(d) && d()
                }
                b()
            });
            if (a[Pe]) {} else if (a[Qe]) {} else if (a[Se]) {} else if (a[Re]) {} else if (a[wc]) {} else if (a[uc]) {} else if (a[Oe]) {} else {
                a[Nc] && (d("require", "ec", "ec.js"), h());
                if (a[Ec] && !a[Pc]) {
                    var N = "_dc_gtm_" + String(a[rb]).replace(/[^A-Za-z0-9-]/g,
                            "");
                    d("require", "displayfeatures", void 0, {
                        cookieName: N
                    })
                }
                A ? d("send", "pageview", A) : d("send", "pageview");
            }
            if (!Nk) {
                var ua = a[sc] ? "u/analytics_debug.js" : "analytics.js";
                a[ld] && !a[sc] && (ua = "internal/" + ua);
                Nk = !0;
                r(K("https:", "http:", "//www.google-analytics.com/" + ua, x), function() {
                    z[l()].loaded || c()
                }, c)
            }
        };
    _ua.a = "ua";
    _ua.b = ["google"];
    var Ok = function() {
            var a = [];
            return function(b, c) {
                if (void 0 === a[b]) {
                    var d = Ej[b] && Gj(Ej[b], new sf, c),
                        e = d;
                    d && (e = ej(d));
                    a[b] = [e, d]
                }
                return a[b]
            }
        },
        Xj = function(a, b) {
            for (var c = b[0], d = 0; d < c.length; d++)
                if (!a.S(c[d], a.c)[0]) return !1;
            for (var e = b[2], d = 0; d < e.length; d++)
                if (a.S(e[d], a.c)[0]) return !1;
            return !0
        },
        Pk = function(a) {
            for (var b = new uk(a), c = 0; c < zj; c++)
                if (a.ka[c] && !a.ta[c])
                    if (a.c(Z[c])) {} else {
                        var d = a.W[c],
                            e = Ck(d, c, a.c, b);
                        wk(b, c, e, d[zc], d[pe], d[Ge]);
                        if (d[qb]) break
                    }
            b.addListener(a.la);
            Bk(b);
            vk(b)
        },
        Qk = !1,
        ag = function(a, b, c, d, e) {
            switch (b) {
                case "gtm.js":
                    if (Qk) return !1;
                    Qk = !0;
                    break;
                case "gtm.sync":
                    if (W("gtm.snippet") != mb) return !1
            }
            for (var f = {
                id: a,
                name: b,
                la: d || eb,
                ka: Oj(),
                ta: Oj(),
                S: Ok(),
                c: qg(c)
            }, g = [], h = 0; h < Ii.length; h++)
                if (Xj(f, Ii[h])) {
                    g[h] = !0;
                    for (var k =
                        f, l = Ii[h], m = l[1], n = 0; n < m.length; n++) k.ka[m[n]] = !0;
                    for (var q = l[3], n = 0; n < q.length; n++) k.ta[q[n]] = !0
                } else g[h] = !1;
            ak(f);
            var y = [];
            for (var t = 0; t < zj; t++)
                if (f.ka[t] && !f.ta[t])
                    if (f.c(Z[t])) {} else {
                        y[t] = Z[t];
                    }
            f.W = y;
            Pk(f);
            e && O(e) && e({
                passingRules: g,
                resolvedTags: f.W
            });
            if ("gtm.js" == b || "gtm.sync" == b) a: {}
            for (var G in f.W)
                if (f.W.hasOwnProperty(G)) {
                    var D = f.W[G],
                        E;
                    if (!(E = void 0 == D[Fa])) {
                        var F = D[Fa];
                        E = !("function" != typeof String.prototype.startsWith ? 0 === F.indexOf("_implicit") : F.startsWith("_implicit"))
                    }
                    if (E) return !0
                }
            return !1
        };
    var Sk = function() {};
    var Tk = function() {};
    var Rk = {
        macro: function(a) {
            if (Dj.contains(a)) return Dj.get(a)
        }
    };
    Rk.dataLayer = Pf;
    Rk.onHtmlSuccess = dh(!0);
    Rk.onHtmlFailure = dh(!1);
    Rk.callback = function(a) {
        Ba.hasOwnProperty(a) && O(Ba[a]) && Ba[a]();
        delete Ba[a]
    };
    Rk.vb = function() {
        var a = z.google_tag_manager;
        a || (a = z.google_tag_manager = {});
        Va = a;
        if (a["GTM-K57FHH"]) {
            var b = Va.zones;
            b && b.registerNatural("GTM-K57FHH")
        } else {
            a["GTM-K57FHH"] = Rk;
            Ki();
            Aj.push.apply(Aj, Nj());
            Qj(Bj, 0, "12:0,12:1,14:2,2:3,3:4,12:6,16:7,0:8,11:9,10:9,19:9,7:9,8:9,1:11,15:9,9:7,17:12,12:13,13:14,6:15,17:16,12:17,12:18,14:19,2:20,3:21,12:23,20:7,4:7,18:24,21:25,17:26,14:27,5:28,14:29,5:30,12:31,14:32,14:33");
            Qj(Cj, 1, "G,AAAw,AAAQAM,AAAQAw,AAAAAAD,CAAAAAE");
            Qj(Ej, 1, "Z,AAAID");
            Qj(Z, 1, "g_f,ABgH,AAAA8D");
            Qj(Ii, 2, "B:D::,D:E::");
            Qj(Ji, 4, "5.5:,22:");
            for (var c = 0; c < Z.length; c++) {
                var d = Z[c],
                    e = 1;
                d[Nd] ? e = 2 : d[Ye] && (e = 0);
                ob[c] = {
                    firingOption: e,
                    state: void 0
                };
                pb[c] = []
            }
            Xf();
            lg();
            var q = z;
            if ("interactive" == L.readyState && !L.createEventObject || "complete" == L.readyState) Ff();
            else {
                T(L, "DOMContentLoaded", Ff);
                T(L, "readystatechange", Ff);
                if (L.createEventObject && L.documentElement.doScroll) {
                    var x = !0;
                    try {
                        x = !q.frameElement
                    } catch (y) {}
                    x && Hf()
                }
                T(q,
                    "load", Ff)
            }
            "complete" === L.readyState ? Kf() : T(z, "load", Kf);
            Tk();
            Sk()
        }
    };
    Rk.vb();
    var _vs = "res_ts:1441692990324000,srv_cl:151748609,ds:live,cv:3";
})()