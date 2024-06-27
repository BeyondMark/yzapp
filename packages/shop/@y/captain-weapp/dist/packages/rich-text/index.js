"use strict";
var r = require("~/r");
r("Ydq0", {
  "+eav": function (e, r, t) {
    var n = t("zWQs"),
      a = Math.max,
      o = Math.min;
    e.exports = function (e, r) {
      return (e = n(e)) < 0 ? a(e + r, 0) : o(e, r);
    };
  },
  "/6KZ": function (e, r, t) {
    var n = t("41F1"),
      a = t("TaGV"),
      o = t("8Xl/"),
      i = t("PPkd"),
      l = t("qA3Z"),
      c = function (e, r, t) {
        var s,
          p,
          u,
          g = e & c.F,
          f = e & c.G,
          d = e & c.S,
          h = e & c.P,
          m = e & c.B,
          v = e & c.W,
          b = f ? a : a[r] || (a[r] = {}),
          x = b.prototype,
          y = f ? n : d ? n[r] : (n[r] || {}).prototype;
        for (s in (f && (t = r), t))
          ((p = !g && y && void 0 !== y[s]) && l(b, s)) ||
            ((u = p ? y[s] : t[s]),
            (b[s] =
              f && "function" != typeof y[s]
                ? t[s]
                : m && p
                ? o(u, n)
                : v && y[s] == u
                ? (function (e) {
                    var r = function (r, t, n) {
                      if (this instanceof e) {
                        switch (arguments.length) {
                          case 0:
                            return new e();
                          case 1:
                            return new e(r);
                          case 2:
                            return new e(r, t);
                        }
                        return new e(r, t, n);
                      }
                      return e.apply(this, arguments);
                    };
                    return (r.prototype = e.prototype), r;
                  })(u)
                : h && "function" == typeof u
                ? o(Function.call, u)
                : u),
            h &&
              (((b.virtual || (b.virtual = {}))[s] = u),
              e & c.R && x && !x[s] && i(x, s, u)));
      };
    (c.F = 1),
      (c.G = 2),
      (c.S = 4),
      (c.P = 8),
      (c.B = 16),
      (c.W = 32),
      (c.U = 64),
      (c.R = 128),
      (e.exports = c);
  },
  "/Lgp": function (e, r, t) {
    var n = t("Qqke"),
      a = t("miGZ");
    e.exports =
      Object.keys ||
      function (e) {
        return n(e, a);
      };
  },
  "/Vl9": function (e, r) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  "41F1": function (e, r) {
    var t = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = t);
  },
  "67sl": function (e, r, t) {
    var n = t("TaGV"),
      a = t("41F1"),
      o = a["__core-js_shared__"] || (a["__core-js_shared__"] = {});
    (e.exports = function (e, r) {
      return o[e] || (o[e] = void 0 !== r ? r : {});
    })("versions", []).push({
      version: n.version,
      mode: t("gtwY") ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
    });
  },
  "6wgB": function (e, r, t) {
    var n = t("g2rQ");
    e.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (e) {
          return "String" == n(e) ? e.split("") : Object(e);
        };
  },
  "8Xl/": function (e, r, t) {
    var n = t("HD3J");
    e.exports = function (e, r, t) {
      if ((n(e), void 0 === r)) return e;
      switch (t) {
        case 1:
          return function (t) {
            return e.call(r, t);
          };
        case 2:
          return function (t, n) {
            return e.call(r, t, n);
          };
        case 3:
          return function (t, n, a) {
            return e.call(r, t, n, a);
          };
      }
      return function () {
        return e.apply(r, arguments);
      };
    };
  },
  "ADe/": function (e, r, t) {
    var n = t("fGh/");
    e.exports = function (e) {
      if (!n(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  },
  AFnJ: function (e, r, t) {
    t("CAwg"), (e.exports = t("TaGV").Object.assign);
  },
  CAwg: function (e, r, t) {
    var n = t("/6KZ");
    n(n.S + n.F, "Object", { assign: t("tbIA") });
  },
  HD3J: function (e, r) {
    e.exports = function (e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    };
  },
  HbTz: function (e, r, t) {
    var n = t("fGh/");
    e.exports = function (e, r) {
      if (!n(e)) return e;
      var t, a;
      if (r && "function" == typeof (t = e.toString) && !n((a = t.call(e))))
        return a;
      if ("function" == typeof (t = e.valueOf) && !n((a = t.call(e)))) return a;
      if (!r && "function" == typeof (t = e.toString) && !n((a = t.call(e))))
        return a;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  Kz1y: function (e, r, t) {
    r.__esModule = !0;
    var n,
      a = t("PSh9"),
      o = (n = a) && n.__esModule ? n : { default: n };
    r.default =
      o.default ||
      function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }
        return e;
      };
  },
  PPkd: function (e, r, t) {
    var n = t("eOWL"),
      a = t("zJT+");
    e.exports = t("lBnu")
      ? function (e, r, t) {
          return n.f(e, r, a(1, t));
        }
      : function (e, r, t) {
          return (e[r] = t), e;
        };
  },
  PSh9: function (e, r, t) {
    e.exports = { default: t("AFnJ"), __esModule: !0 };
  },
  Q5TA: function (e, r, t) {
    var n = t("67sl")("keys"),
      a = t("ct/D");
    e.exports = function (e) {
      return n[e] || (n[e] = a(e));
    };
  },
  Qqke: function (e, r, t) {
    var n = t("qA3Z"),
      a = t("T/1i"),
      o = t("zeFm")(!1),
      i = t("Q5TA")("IE_PROTO");
    e.exports = function (e, r) {
      var t,
        l = a(e),
        c = 0,
        s = [];
      for (t in l) t != i && n(l, t) && s.push(t);
      for (; r.length > c; ) n(l, (t = r[c++])) && (~o(s, t) || s.push(t));
      return s;
    };
  },
  "T/1i": function (e, r, t) {
    var n = t("6wgB"),
      a = t("Xj5l");
    e.exports = function (e) {
      return n(a(e));
    };
  },
  TaGV: function (e, r) {
    var t = (e.exports = { version: "2.6.12" });
    "number" == typeof __e && (__e = t);
  },
  UTwT: function (e, r, t) {
    e.exports =
      !t("lBnu") &&
      !t("/Vl9")(function () {
        return (
          7 !=
          Object.defineProperty(t("m/Uw")("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  Xj5l: function (e, r) {
    e.exports = function (e) {
      if (null == e) throw TypeError("Can't call method on  " + e);
      return e;
    };
  },
  Ydq0: function (e, r, t) {
    t.r(r);
    var n = t("Kz1y"),
      a = t.n(n),
      o = {
        p: "margin: 0 0 1em;",
        div: "margin: 0; padding: 0;",
        h1: "font-size: 2em; margin: .67em 0; font-weight: bolder;",
        h2: "font-size: 18px; line-height: 22px; font-weight: bolder;",
        h3: "font-size: 15px; line-height: 18px; font-weight: bolder;",
        h4: "font-size: 15px;",
        h5: "font-size: 15px;",
        i: "font-style: italic;",
        cite: "font-style: italic;",
        em: "font-style: italic;",
        var: "font-style: italic;",
        address: "font-style: italic;",
        pre: "font-family: monospace; white-space: pre;",
        tt: "font-family: monospace;",
        code: "font-family: monospace; display: inline; background:#f5f5f5;",
        kbd: "font-family: monospace;",
        samp: "font-family: monospace;",
        big: "font-size: 1.17em;",
        small: "font-size: .83em;",
        sub: "font-size: .83em; vertical-align: sub;",
        sup: "font-size: .83em; vertical-align: super;",
        s: "text-decoration: line-through; display: inline;",
        strike: "text-decoration: line-through;",
        del: "text-decoration: line-through; display: inline;",
        strong: "display: inilne;",
        a: "color: deepskyblue; word-break: break-all; overflow: auto;",
        video: "text-align: center; margin: 10px 0;",
        img: "overflow: hidden; vertical-align: bottom; max-width: 100% !important; height: auto;",
        blockquote:
          'margin: 0 0 18px; padding: 0 0 0 15px; font-family:Courier, Calibri,"宋体"; border-left: 5px solid #eee;',
        ul: "margin: 20rpx 10rpx;",
        ol: "margin: 20rpx 10rpx;",
        li: "align-items: baseline; margin: 10rpx 0;",
        u: "text-decoration: underline;",
        hide: "display: none;",
        tr: "display: table-row;",
        th: "display: table-cell; vertical-align: middle; padding:5px 10px; font-size:28rpx; border:1px solid #ddd; word-break: break-all; background:#f0f0f0;",
        td: "display: table-cell; vertical-align: middle; padding:5px 10px; font-size:28rpx; border:1px solid #ddd; word-break: break-all;",
        figure: "overflow: hidden;",
        table:
          "table-layout: fixed; border-collapse: collapse; width: auto !important; display: table;",
        tbody: "display: table-row-group;",
      },
      i = {
        section: "div",
        header: "div",
        footer: "div",
        article: "div",
        nav: "div",
        figure: "div",
        figcaption: "div",
        detail: "div",
        hgroup: "div",
        summary: "div",
        aside: "div",
        inherit: "div",
      };
    var l = {
        strDiscode: function (e) {
          return (e = (function (e) {
            return (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
              (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
                (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
                  (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
                    (e = (e = (e = e.replace(/&Alpha;/g, "Α")).replace(
                      /&Beta;/g,
                      "Β"
                    )).replace(/&Gamma;/g, "Γ")).replace(
                      /&Delta;/g,
                      "Δ"
                    )).replace(/&Epsilon;/g, "Ε")).replace(
                    /&Zeta;/g,
                    "Ζ"
                  )).replace(/&Eta;/g, "Η")).replace(/&Theta;/g, "Θ")).replace(
                    /&Iota;/g,
                    "Ι"
                  )).replace(/&Kappa;/g, "Κ")).replace(
                    /&Lambda;/g,
                    "Λ"
                  )).replace(/&Mu;/g, "Μ")).replace(/&Nu;/g, "Ν")).replace(
                    /&Xi;/g,
                    "Ν"
                  )).replace(/&Omicron;/g, "Ο")).replace(/&Pi;/g, "Π")).replace(
                  /&Rho;/g,
                  "Ρ"
                )).replace(/&Sigma;/g, "Σ")).replace(/&Tau;/g, "Τ")).replace(
                  /&Upsilon;/g,
                  "Υ"
                )).replace(/&Phi;/g, "Φ")).replace(/&Chi;/g, "Χ")).replace(
                  /&Psi;/g,
                  "Ψ"
                )).replace(/&Omega;/g, "Ω")).replace(/&alpha;/g, "α")).replace(
                  /&beta;/g,
                  "β"
                )).replace(/&gamma;/g, "γ")).replace(/&delta;/g, "δ")).replace(
                  /&epsilon;/g,
                  "ε"
                )).replace(/&zeta;/g, "ζ")).replace(/&eta;/g, "η")).replace(
                /&theta;/g,
                "θ"
              )).replace(/&iota;/g, "ι")).replace(/&kappa;/g, "κ")).replace(
                /&lambda;/g,
                "λ"
              )).replace(/&mu;/g, "μ")).replace(/&nu;/g, "ν")).replace(
                /&xi;/g,
                "ξ"
              )).replace(/&omicron;/g, "ο")).replace(/&pi;/g, "π")).replace(
                /&rho;/g,
                "ρ"
              )).replace(/&sigmaf;/g, "ς")).replace(/&sigma;/g, "σ")).replace(
              /&tau;/g,
              "τ"
            )).replace(/&upsilon;/g, "υ")).replace(/&phi;/g, "φ")).replace(
              /&chi;/g,
              "χ"
            )).replace(/&psi;/g, "ψ")).replace(/&omega;/g, "ω")).replace(
              /&thetasym;/g,
              "ϑ"
            )).replace(/&upsih;/g, "ϒ")).replace(/&piv;/g, "ϖ")).replace(
              /&middot;/g,
              "·"
            ));
          })(
            (e = (function (e) {
              return (e = (e = (e = e.replace(/\r\n/g, "")).replace(
                /\n/g,
                ""
              )).replace(/code/g, "wxxxcode-style"));
            })(
              (e = (function (e) {
                return (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
                  (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
                    (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
                      (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
                        (e = (e = (e = (e = (e = e.replace(
                          /&OElig;/g,
                          "Œ"
                        )).replace(/&oelig;/g, "œ")).replace(
                          /&Scaron;/g,
                          "Š"
                        )).replace(/&scaron;/g, "š")).replace(
                          /&Yuml;/g,
                          "Ÿ"
                        )).replace(/&fnof;/g, "ƒ")).replace(
                        /&circ;/g,
                        "ˆ"
                      )).replace(/&tilde;/g, "˜")).replace(
                        /&ensp;/g,
                        ""
                      )).replace(/&emsp;/g, "")).replace(
                        /&thinsp;/g,
                        ""
                      )).replace(/&zwnj;/g, "")).replace(/&zwj;/g, "")).replace(
                        /&lrm;/g,
                        ""
                      )).replace(/&rlm;/g, "")).replace(
                        /&ndash;/g,
                        "–"
                      )).replace(/&mdash;/g, "—")).replace(
                      /&lsquo;/g,
                      "‘"
                    )).replace(/&rsquo;/g, "’")).replace(
                      /&sbquo;/g,
                      "‚"
                    )).replace(/&ldquo;/g, "“")).replace(
                      /&rdquo;/g,
                      "”"
                    )).replace(/&bdquo;/g, "„")).replace(
                      /&dagger;/g,
                      "†"
                    )).replace(/&Dagger;/g, "‡")).replace(
                      /&bull;/g,
                      "•"
                    )).replace(/&hellip;/g, "…")).replace(
                      /&permil;/g,
                      "‰"
                    )).replace(/&prime;/g, "′")).replace(
                    /&Prime;/g,
                    "″"
                  )).replace(/&lsaquo;/g, "‹")).replace(
                    /&rsaquo;/g,
                    "›"
                  )).replace(/&oline;/g, "‾")).replace(/&euro;/g, "€")).replace(
                    /&trade;/g,
                    "™"
                  )).replace(/&larr;/g, "←")).replace(/&uarr;/g, "↑")).replace(
                    /&rarr;/g,
                    "→"
                  )).replace(/&darr;/g, "↓")).replace(/&harr;/g, "↔")).replace(
                    /&crarr;/g,
                    "↵"
                  )).replace(/&lceil;/g, "⌈")).replace(
                  /&rceil;/g,
                  "⌉"
                )).replace(/&lfloor;/g, "⌊")).replace(
                  /&rfloor;/g,
                  "⌋"
                )).replace(/&loz;/g, "◊")).replace(/&spades;/g, "♠")).replace(
                  /&clubs;/g,
                  "♣"
                )).replace(/&hearts;/g, "♥")).replace(/&diams;/g, "♦")).replace(
                  /&#39;/g,
                  "'"
                ));
              })(
                (e = (function (e) {
                  return (e = (e = (e = (e = (e = (e = e.replace(
                    /&nbsp;/g,
                    " "
                  )).replace(/&quot;/g, "'")).replace(/&amp;/g, "&")).replace(
                    /&lt;/g,
                    "<"
                  )).replace(/&gt;/g, ">")).replace(/&#8226;/g, "•"));
                })(
                  (e = (function (e) {
                    return (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
                      (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
                        (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
                          (e = (e = (e = (e = (e = e.replace(
                            /&forall;/g,
                            "∀"
                          )).replace(/&part;/g, "∂")).replace(
                            /&exists;/g,
                            "∃"
                          )).replace(/&empty;/g, "∅")).replace(
                            /&nabla;/g,
                            "∇"
                          )).replace(/&isin;/g, "∈")).replace(
                          /&notin;/g,
                          "∉"
                        )).replace(/&ni;/g, "∋")).replace(
                          /&prod;/g,
                          "∏"
                        )).replace(/&sum;/g, "∑")).replace(
                          /&minus;/g,
                          "−"
                        )).replace(/&lowast;/g, "∗")).replace(
                          /&radic;/g,
                          "√"
                        )).replace(/&prop;/g, "∝")).replace(
                          /&infin;/g,
                          "∞"
                        )).replace(/&ang;/g, "∠")).replace(
                          /&and;/g,
                          "∧"
                        )).replace(/&or;/g, "∨")).replace(
                        /&cap;/g,
                        "∩"
                      )).replace(/&cap;/g, "∪")).replace(
                        /&int;/g,
                        "∫"
                      )).replace(/&there4;/g, "∴")).replace(
                        /&sim;/g,
                        "∼"
                      )).replace(/&cong;/g, "≅")).replace(
                        /&asymp;/g,
                        "≈"
                      )).replace(/&ne;/g, "≠")).replace(/&le;/g, "≤")).replace(
                        /&ge;/g,
                        "≥"
                      )).replace(/&sub;/g, "⊂")).replace(
                      /&sup;/g,
                      "⊃"
                    )).replace(/&nsub;/g, "⊄")).replace(
                      /&sube;/g,
                      "⊆"
                    )).replace(/&supe;/g, "⊇")).replace(
                      /&oplus;/g,
                      "⊕"
                    )).replace(/&otimes;/g, "⊗")).replace(
                      /&perp;/g,
                      "⊥"
                    )).replace(/&sdot;/g, "⋅"));
                  })(e))
                ))
              ))
            ))
          ));
        },
        urlToHttpUrl: function (e, r) {
          return new RegExp("^//").test(e) && (e = r + ":" + e), e;
        },
      },
      c =
        /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
      s = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
      p =
        /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
      u = v(
        "area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"
      ),
      g = v(
        "a,address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"
      ),
      f = v(
        "abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"
      ),
      d = v("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),
      h = v(
        "checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"
      ),
      m = v("wxxxcode-style,script,style,view,scroll-view,block");
    function v(e) {
      for (var r = {}, t = e.split(","), n = 0; n < t.length; n++) r[t[n]] = !0;
      return r;
    }
    var b = function (e, r) {
        var t,
          n,
          a,
          o = [],
          i = e;
        for (
          o.last = function () {
            return this[this.length - 1];
          };
          e;

        ) {
          if (((n = !0), o.last() && m[o.last()]))
            (e = e.replace(
              new RegExp("([\\s\\S]*?)</" + o.last() + "[^>]*>"),
              function (e, t) {
                return (
                  (t = t.replace(
                    /<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,
                    "$1$2"
                  )),
                  r.chars && r.chars(t),
                  ""
                );
              }
            )),
              b("", o.last());
          else if (
            (0 == e.indexOf("<!--")
              ? (t = e.indexOf("-->")) >= 0 &&
                (r.comment && r.comment(e.substring(4, t)),
                (e = e.substring(t + 3)),
                (n = !1))
              : 0 == e.indexOf("</")
              ? (a = e.match(s)) &&
                ((e = e.substring(a[0].length)), a[0].replace(s, b), (n = !1))
              : 0 == e.indexOf("<") &&
                (a = e.match(c)) &&
                ((e = e.substring(a[0].length)), a[0].replace(c, v), (n = !1)),
            n)
          ) {
            t = e.indexOf("<");
            for (var l = ""; 0 === t; )
              (l += "<"), (t = (e = e.substring(1)).indexOf("<"));
            (l += t < 0 ? e : e.substring(0, t)),
              (e = t < 0 ? "" : e.substring(t)),
              r.chars && r.chars(l);
          }
          if (e == i) throw "Parse Error: " + e;
          i = e;
        }
        function v(e, t, n, a) {
          if (((t = t.toLowerCase()), g[t]))
            for (; o.last() && f[o.last()]; ) b("", o.last());
          if (
            (d[t] && o.last() == t && b("", t),
            (a = u[t] || !!a) || o.push(t),
            r.start)
          ) {
            var i = [];
            n.replace(p, function (e, r) {
              var t = arguments[2]
                ? arguments[2]
                : arguments[3]
                ? arguments[3]
                : arguments[4]
                ? arguments[4]
                : h[r]
                ? r
                : "";
              i.push({
                name: r,
                value: t,
                escaped: t.replace(/(^|[^\\])"/g, '$1\\"'),
              });
            }),
              r.start && r.start(t, i, a);
          }
        }
        function b(e, t) {
          if (t) {
            t = t.toLowerCase();
            for (n = o.length - 1; n >= 0 && o[n] != t; n--);
          } else var n = 0;
          if (n >= 0) {
            for (var a = o.length - 1; a >= n; a--) r.end && r.end(o[a]);
            o.length = n;
          }
        }
        b();
      },
      x = "",
      y = "",
      w = {},
      k =
        (j(
          "area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"
        ),
        j(
          "br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"
        )),
      z = j(
        "abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"
      ),
      S = j(
        "a,abbr,b,blockquote,br,code,col,colgroup,dd,del,div,dl,dt,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,ul"
      ),
      O = j("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
    j(
      "checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"
    ),
      j("wxxxcode-style,script,style,view,scroll-view,block");
    function j(e) {
      for (var r = {}, t = e.split(","), n = 0; n < t.length; n++) r[t[n]] = !0;
      return r;
    }
    function T(e) {
      var r = [];
      if (0 == x.length || !w)
        return ((i = { node: "text" }).text = e), (n = [i]);
      e = e.replace(/\[([^\[\]]+)\]/g, ":$1:");
      for (
        var t = new RegExp("[:]"), n = e.split(t), a = 0;
        a < n.length;
        a++
      ) {
        var o = n[a],
          i = {};
        w[o]
          ? ((i.node = "element"),
            (i.tag = "emoji"),
            (i.text = w[o]),
            (i.baseSrc = y))
          : ((i.node = "text"), (i.text = o)),
          r.push(i);
      }
      return r;
    }
    var A = [],
      _ = parseInt(1e5 * Math.random(), 10);
    function P(e, r) {
      var t = Array.isArray(r) ? r : [r || ""];
      return t.push(e), t.join(" ");
    }
    function q(e) {
      var r = i[e.tag] || e.tag;
      return a()({}, e, { tag: r, nodes: (e.nodes || []).map(q) });
    }
    Component({
      properties: {
        html: { type: String, value: "", observer: "htmlHandler" },
        canvasId: { type: String, value: "rich-text-" + _ },
      },
      data: { nodes: [], showCanvas: !1 },
      methods: {
        htmlHandler: function (e) {
          var r = this,
            t = [],
            n = (
              (function (e, r) {
                (e = (function (e) {
                  return e
                    .replace(/\r?\n+/g, "")
                    .replace(/<!--.*?-->/gi, "")
                    .replace(/\/\*.*?\*\//gi, "")
                    .replace(/[ ]+</gi, "<");
                })(
                  (e = (function (e) {
                    return e
                      .replace(/<\?xml.*\?>\n/, "")
                      .replace(/<.*!doctype.*\>\n/, "")
                      .replace(/<.*!DOCTYPE.*\>\n/, "");
                  })(e))
                )),
                  (e = l.strDiscode(e));
                var t = [],
                  n = { node: r, nodes: [], images: [], imageUrls: [] },
                  a = 0;
                return (
                  b(e, {
                    start: function (e, o, i) {
                      S[e] || (e = k[e] ? "div" : "span");
                      var c,
                        s = { tag: e, node: "element" };
                      0 === t.length
                        ? ((s.index = a.toString()), (a += 1))
                        : (void 0 === (c = t[0]).nodes && (c.nodes = []),
                          (s.index = c.index + "." + c.nodes.length));
                      if (
                        (k[e]
                          ? (s.tagType = "block")
                          : z[e]
                          ? (s.tagType = "inline")
                          : O[e] && (s.tagType = "closeSelf"),
                        0 !== o.length &&
                          (s.attr = o.reduce(function (e, r) {
                            var t = r.name,
                              n = r.value;
                            return (
                              "class" == t && (s.classStr = n),
                              "style" == t && (s.styleStr = n),
                              e[t]
                                ? Array.isArray(e[t])
                                  ? e[t].push(n)
                                  : (e[t] = [e[t], n])
                                : (e[t] = n),
                              e
                            );
                          }, {})),
                        "img" === s.tag)
                      ) {
                        s.imgIndex = n.images.length;
                        var p = s.attr.src || "";
                        "" == p[0] && p.splice(0, 1),
                          (p = l.urlToHttpUrl(p, "https")),
                          (s.attr.src = p),
                          (s.from = r),
                          n.images.push(s),
                          n.imageUrls.push(p);
                      }
                      if ("font" === s.tag) {
                        var u = [
                            "x-small",
                            "small",
                            "medium",
                            "large",
                            "x-large",
                            "xx-large",
                            "-webkit-xxx-large",
                          ],
                          g = {
                            color: "color",
                            face: "font-family",
                            size: "font-size",
                          };
                        for (var f in (s.attr.style || (s.attr.style = []),
                        s.styleStr || (s.styleStr = ""),
                        g))
                          if (s.attr[f]) {
                            var d = "size" === f ? u[s.attr[f] - 1] : s.attr[f];
                            s.attr.style.push(g[f]),
                              s.attr.style.push(d),
                              (s.styleStr += g[f] + ": " + d + ";");
                          }
                      }
                      ("source" === s.tag && (n.source = s.attr.src), i)
                        ? (void 0 === (c = t[0] || n).nodes && (c.nodes = []),
                          c.nodes.push(s))
                        : t.unshift(s);
                    },
                    end: function (e) {
                      var r = t.shift();
                      if (
                        (r.tag,
                        "video" === r.tag &&
                          n.source &&
                          ((r.attr.src = n.source), delete n.source),
                        0 === t.length)
                      )
                        n.nodes.push(r);
                      else {
                        var a = t[0];
                        void 0 === a.nodes && (a.nodes = []), a.nodes.push(r);
                      }
                    },
                    chars: function (e) {
                      var r = { node: "text", text: e, textArray: T(e) };
                      if (0 === t.length)
                        (r.index = a.toString()), (a += 1), n.nodes.push(r);
                      else {
                        var o = t[0];
                        void 0 === o.nodes && (o.nodes = []),
                          (r.index = o.index + "." + o.nodes.length),
                          o.nodes.push(r);
                      }
                    },
                    comment: function (e) {},
                  }),
                  n
                );
              })(
                e
                  .replace(/<a class="video-link".*?\/a>/g, "")
                  .replace(/(<svg .*?\/svg>)/g, function (e) {
                    return '<svg src="' + encodeURI(e) + '"></svg>';
                  })
                  .replace(/<(canvas|audio|iframe) .*?\/\1>/g, ""),
                this.data.canvasId
              ).nodes || []
            )
              .map(q)
              .map(function (e) {
                return (function e(r, t) {
                  var n = r.attr,
                    i = void 0 === n ? {} : n,
                    l = r.index;
                  if ("element" === r.node) {
                    if ("svg" === r.tag) {
                      var c = (function (e) {
                          var r = "",
                            t = "";
                          r =
                            e.indexOf("http://www.w3.org") < 0
                              ? e.replace(/<svg(.*?)>/, function (e, r) {
                                  return (
                                    '<svg xmlns="http://www.w3.org/2000/svg" ' +
                                    r +
                                    ">"
                                  );
                                })
                              : e.replace(
                                  /\s+.*?http:\/\/www\.w3\.org.*?\s+/,
                                  ' xmlns="http://www.w3.org/2000/svg" '
                                );
                          r = r.replace(
                            /<svg(.*?)\s+style=('|")(.*?)\2/g,
                            function (e, r, n, a) {
                              return (t = a), "<svg " + r + " ";
                            }
                          );
                          var n = "data:image/svg+xml;utf8," + encodeURI(r),
                            a = {};
                          r.replace(
                            /<svg(.*?)\s+viewbox=('|")(.*?)\2/g,
                            function (e, r, t, o) {
                              var i = o.split(" "),
                                l = i[2],
                                c = i[3];
                              a = { src: n, width: l, height: c };
                            }
                          );
                          var o =
                            a.width &&
                            "number" == typeof +a &&
                            a.height &&
                            "number" == typeof +a.height;
                          return {
                            src: o ? "" : n,
                            svgItem: o ? a : null,
                            style: t,
                          };
                        })(decodeURI(i.src)),
                        s = c.src,
                        p = c.style,
                        u = c.svgItem;
                      return (
                        Array.isArray(t) && t.push(a()({}, u, { index: l })),
                        {
                          type: "node",
                          name: "img",
                          attrs: a()({}, i, { src: s, style: p }),
                        }
                      );
                    }
                    return {
                      type: "node",
                      name: r.tag,
                      attrs: a()({}, i, {
                        class: P(r.tag, i.class),
                        style:
                          ((g = r.tag),
                          (f = r.styleStr || ""),
                          (o[g] || "") + (f || "")),
                      }),
                      children: (r.nodes || []).map(function (r) {
                        return e(r, t);
                      }),
                    };
                  }
                  if ("text" === r.node) return { type: "text", text: r.text };
                  var g, f;
                  return {};
                })(e, t);
              });
          this.setData({ nodes: n, showCanvas: !!t.length }, function () {
            t.length && r.drawSvgImages(t);
          });
        },
        drawSvgImages: function (e) {
          var r = this;
          e.reduce(function (e, t) {
            return e.then(r.svgDrawerPromise.bind(r, t));
          }, Promise.resolve())
            .then(function () {
              r.setSvgImages(function () {
                r.setData({ showCanvas: !1 });
              });
            })
            .catch(function (e) {});
        },
        svgDrawerPromise: function (e) {
          var r = this,
            t = e.width,
            n = e.height,
            a = e.src;
          return new Promise(function (o, i) {
            var l = wx.createCanvasContext(r.data.canvasId, r);
            l.drawImage(a, 0, 0, t, n),
              l.draw(!1, function () {
                wx.canvasToTempFilePath(
                  {
                    x: 0,
                    y: 0,
                    width: t,
                    height: n,
                    canvasId: r.data.canvasId,
                    success: function (r) {
                      A.push({ src: r.tempFilePath, index: e.index }), o();
                    },
                    fail: i,
                  },
                  r
                );
              });
          });
        },
        setSvgImages: function (e) {
          var r = this.data.nodes;
          A.forEach(function (e) {
            var t = e.index,
              n = e.src,
              a = t.split(".").reduce(function (e, r) {
                return "object" == typeof e && Array.isArray(e.children)
                  ? e.children[r]
                  : e[r];
              }, r);
            "object" == typeof a &&
              "object" == typeof a.attrs &&
              (a.attrs.src = n);
          }),
            this.setData({ nodes: r }, e);
        },
        canvasErrorCallback: function (e) {},
      },
    });
  },
  "ct/D": function (e, r) {
    var t = 0,
      n = Math.random();
    e.exports = function (e) {
      return "Symbol(".concat(
        void 0 === e ? "" : e,
        ")_",
        (++t + n).toString(36)
      );
    };
  },
  dCrc: function (e, r, t) {
    var n = t("Xj5l");
    e.exports = function (e) {
      return Object(n(e));
    };
  },
  eOWL: function (e, r, t) {
    var n = t("ADe/"),
      a = t("UTwT"),
      o = t("HbTz"),
      i = Object.defineProperty;
    r.f = t("lBnu")
      ? Object.defineProperty
      : function (e, r, t) {
          if ((n(e), (r = o(r, !0)), n(t), a))
            try {
              return i(e, r, t);
            } catch (e) {}
          if ("get" in t || "set" in t)
            throw TypeError("Accessors not supported!");
          return "value" in t && (e[r] = t.value), e;
        };
  },
  "fGh/": function (e, r) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  g2rQ: function (e, r) {
    var t = {}.toString;
    e.exports = function (e) {
      return t.call(e).slice(8, -1);
    };
  },
  gou2: function (e, r, t) {
    var n = t("zWQs"),
      a = Math.min;
    e.exports = function (e) {
      return e > 0 ? a(n(e), 9007199254740991) : 0;
    };
  },
  gtwY: function (e, r) {
    e.exports = !0;
  },
  kBaS: function (e, r) {
    r.f = {}.propertyIsEnumerable;
  },
  lBnu: function (e, r, t) {
    e.exports = !t("/Vl9")(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  "m/Uw": function (e, r, t) {
    var n = t("fGh/"),
      a = t("41F1").document,
      o = n(a) && n(a.createElement);
    e.exports = function (e) {
      return o ? a.createElement(e) : {};
    };
  },
  miGZ: function (e, r) {
    e.exports =
      "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      );
  },
  phsM: function (e, r) {
    r.f = Object.getOwnPropertySymbols;
  },
  qA3Z: function (e, r) {
    var t = {}.hasOwnProperty;
    e.exports = function (e, r) {
      return t.call(e, r);
    };
  },
  tbIA: function (e, r, t) {
    var n = t("lBnu"),
      a = t("/Lgp"),
      o = t("phsM"),
      i = t("kBaS"),
      l = t("dCrc"),
      c = t("6wgB"),
      s = Object.assign;
    e.exports =
      !s ||
      t("/Vl9")(function () {
        var e = {},
          r = {},
          t = Symbol(),
          n = "abcdefghijklmnopqrst";
        return (
          (e[t] = 7),
          n.split("").forEach(function (e) {
            r[e] = e;
          }),
          7 != s({}, e)[t] || Object.keys(s({}, r)).join("") != n
        );
      })
        ? function (e, r) {
            for (
              var t = l(e), s = arguments.length, p = 1, u = o.f, g = i.f;
              s > p;

            )
              for (
                var f,
                  d = c(arguments[p++]),
                  h = u ? a(d).concat(u(d)) : a(d),
                  m = h.length,
                  v = 0;
                m > v;

              )
                (f = h[v++]), (n && !g.call(d, f)) || (t[f] = d[f]);
            return t;
          }
        : s;
  },
  "zJT+": function (e, r) {
    e.exports = function (e, r) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: r,
      };
    };
  },
  zWQs: function (e, r) {
    var t = Math.ceil,
      n = Math.floor;
    e.exports = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? n : t)(e);
    };
  },
  zeFm: function (e, r, t) {
    var n = t("T/1i"),
      a = t("gou2"),
      o = t("+eav");
    e.exports = function (e) {
      return function (r, t, i) {
        var l,
          c = n(r),
          s = a(c.length),
          p = o(i, s);
        if (e && t != t) {
          for (; s > p; ) if ((l = c[p++]) != l) return !0;
        } else
          for (; s > p; p++)
            if ((e || p in c) && c[p] === t) return e || p || 0;
        return !e && -1;
      };
    };
  },
});
