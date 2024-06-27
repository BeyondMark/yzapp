"use strict";
var r = require("~/r");
r(
  "N8tc",
  Object.assign({}, require("~/v.js").modules, {
    N8tc: function (e, t, a) {
      a.r(t);
      var r = a("9ZMt"),
        i = a("R7Zb"),
        s = a("mztD"),
        n = a("Fcif"),
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
          img: "overflow: hidden; vertical-align: bottom; max-width: 100%!important; height: auto;margin-top: -1px;",
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
            "table-layout: fixed; border-collapse: collapse; width: auto !important; display: table; margin: 0 auto; margin-bottom: 10px;",
          tbody: "display: table-row-group;",
        },
        l = {
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
      function d(e) {
        var t = l[e.tag] || e.tag;
        return Object(n.a)({}, e, { tag: t, nodes: (e.nodes || []).map(d) });
      }
      function c(e, t) {
        return (o[e] || "") + (t || "");
      }
      function p(e, t) {
        var a,
          r,
          i,
          { attr: s = {}, index: o } = e;
        if ("element" === e.node) {
          if ("svg" === e.tag) {
            var {
              src: l,
              style: d,
              svgItem: g,
            } = (function (e) {
              var t = "",
                a = "";
              t = (t =
                e.indexOf("http://www.w3.org") < 0
                  ? e.replace(
                      /<svg(.*?)>/,
                      (e, t) =>
                        '<svg xmlns="http://www.w3.org/2000/svg" ' + t + ">"
                    )
                  : e.replace(
                      /\s+.*?http:\/\/www\.w3\.org.*?\s+/,
                      ' xmlns="http://www.w3.org/2000/svg" '
                    )).replace(
                /<svg(.*?)\s+style=('|")(.*?)\2/g,
                (e, t, r, i) => ((a = i), "<svg " + t + " ")
              );
              var r = "data:image/svg+xml;utf8," + encodeURI(t),
                i = {};
              t.replace(/<svg(.*?)\s+viewbox=('|")(.*?)\2/g, (e, t, a, s) => {
                var [, , n, o] = s.split(" ");
                i = { src: r, width: n, height: o };
              });
              var s =
                i.width &&
                "number" == typeof +i &&
                i.height &&
                "number" == typeof +i.height;
              return { src: s ? "" : r, svgItem: s ? i : null, style: a };
            })(decodeURI(s.src));
            return (
              Array.isArray(t) && t.push(Object(n.a)({}, g, { index: o })),
              {
                type: "node",
                name: "img",
                attrs: Object(n.a)({}, s, { src: l, style: d }),
              }
            );
          }
          return {
            type: "node",
            name: e.tag,
            attrs: Object(n.a)({}, s, {
              class:
                ((a = e.tag),
                (r = s.class),
                (i = Array.isArray(r) ? r : [r || ""]),
                i.push(a),
                i.join(" ")),
              style: c(e.tag, e.styleStr || ""),
            }),
            children: (e.nodes || []).map((e) => p(e, t)),
          };
        }
        return "text" === e.node ? { type: "text", text: e.text } : {};
      }
      var g =
          /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
        f = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
        u =
          /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
        h = w(
          "area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"
        ),
        m = w(
          "a,address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"
        ),
        b = w(
          "abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"
        ),
        v = w("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),
        x = w(
          "checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"
        ),
        y = w("wxxxcode-style,script,style,view,scroll-view,block");
      function w(e) {
        for (var t = {}, a = e.split(","), r = 0; r < a.length; r++)
          t[a[r]] = !0;
        return t;
      }
      var k = function (e, t) {
          var a,
            r,
            i,
            s = [],
            n = e;
          for (
            s.last = function () {
              return this[this.length - 1];
            };
            e;

          ) {
            if (((r = !0), s.last() && y[s.last()]))
              (e = e.replace(
                new RegExp("([\\s\\S]*?)</" + s.last() + "[^>]*>"),
                function (e, a) {
                  return (
                    (a = a.replace(
                      /<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,
                      "$1$2"
                    )),
                    t.chars && t.chars(a),
                    ""
                  );
                }
              )),
                d("", s.last());
            else if (
              (0 == e.indexOf("<!--")
                ? (a = e.indexOf("-->")) >= 0 &&
                  (t.comment && t.comment(e.substring(4, a)),
                  (e = e.substring(a + 3)),
                  (r = !1))
                : 0 == e.indexOf("</")
                ? (i = e.match(f)) &&
                  ((e = e.substring(i[0].length)), i[0].replace(f, d), (r = !1))
                : 0 == e.indexOf("<") &&
                  (i = e.match(g)) &&
                  ((e = e.substring(i[0].length)),
                  i[0].replace(g, l),
                  (r = !1)),
              r)
            ) {
              a = e.indexOf("<");
              for (var o = ""; 0 === a; )
                (o += "<"), (a = (e = e.substring(1)).indexOf("<"));
              (o += a < 0 ? e : e.substring(0, a)),
                (e = a < 0 ? "" : e.substring(a)),
                t.chars && t.chars(o);
            }
            if (e == n) throw "Parse Error: " + e;
            n = e;
          }
          function l(e, a, r, i) {
            if (((a = a.toLowerCase()), m[a]))
              for (; s.last() && b[s.last()]; ) d("", s.last());
            if (
              (v[a] && s.last() == a && d("", a),
              (i = h[a] || !!i) || s.push(a),
              t.start)
            ) {
              var n = [];
              r.replace(u, function (e, t) {
                var a = arguments[2]
                  ? arguments[2]
                  : arguments[3]
                  ? arguments[3]
                  : arguments[4]
                  ? arguments[4]
                  : x[t]
                  ? t
                  : "";
                n.push({
                  name: t,
                  value: a,
                  escaped: a.replace(/(^|[^\\])"/g, '$1\\"'),
                });
              }),
                t.start && t.start(a, n, i);
            }
          }
          function d(e, a) {
            if (a) {
              a = a.toLowerCase();
              for (r = s.length - 1; r >= 0 && s[r] != a; r--);
            } else var r = 0;
            if (r >= 0) {
              for (var i = s.length - 1; i >= r; i--) t.end && t.end(s[i]);
              s.length = r;
            }
          }
          d();
        },
        z = "",
        j = "",
        O = {},
        A =
          (Z(
            "area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"
          ),
          Z(
            "br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"
          )),
        S = Z(
          "abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"
        ),
        q = Z(
          "a,abbr,b,blockquote,br,code,col,colgroup,dd,del,div,dl,dt,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,ul"
        ),
        R = Z("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
      Z(
        "checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"
      ),
        Z("wxxxcode-style,script,style,view,scroll-view,block");
      function Z(e) {
        for (var t = {}, a = e.split(","), r = 0; r < a.length; r++)
          t[a[r]] = !0;
        return t;
      }
      function _(e, t) {
        e = (function (e) {
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
        );
        var a = [],
          r = { node: t, nodes: [], images: [], imageUrls: [] },
          i = 0;
        return (
          k(e, {
            start(e, n, o) {
              q[e] || (e = A[e] ? "div" : "span");
              var l,
                d,
                c = { tag: e, node: "element" };
              0 === a.length
                ? ((c.index = i.toString()), (i += 1))
                : (void 0 === (d = a[0]).nodes && (d.nodes = []),
                  (c.index = d.index + "." + d.nodes.length));
              if (
                (A[e]
                  ? (c.tagType = "block")
                  : S[e]
                  ? (c.tagType = "inline")
                  : R[e] && (c.tagType = "closeSelf"),
                0 !== n.length
                  ? (c.attr = n.reduce((e, t) => {
                      var a = t.name,
                        r = t.value;
                      return (
                        "class" == a && (c.classStr = r),
                        "style" == a && (c.styleStr = r),
                        e[a]
                          ? Array.isArray(e[a])
                            ? e[a].push(r)
                            : (e[a] = [e[a], r])
                          : (e[a] = r),
                        e
                      );
                    }, {}))
                  : (c.attr = c.attr || {}),
                "img" === c.tag)
              ) {
                c.imgIndex = r.images.length;
                var p = c.attr.src || "";
                "" == p[0] && p.splice(0, 1),
                  (l = p),
                  new RegExp("^//").test(l) && (l = "https:" + l),
                  (p = l.replace(
                    /http:\/\/img01.yzcdn.cn\/upload_files/g,
                    "https://img01.yzcdn.cn/upload_files"
                  )) &&
                    p.indexOf("!730x0.jpg") > -1 &&
                    (p = p.replace("!730x0.jpg", "")),
                  (c.attr.src = Object(s.a)(p, "!730x0.jpg")),
                  (c.from = t),
                  r.images.push(c),
                  r.imageUrls.push(p);
              }
              if ("font" === c.tag) {
                var g = [
                    "x-small",
                    "small",
                    "medium",
                    "large",
                    "x-large",
                    "xx-large",
                    "-webkit-xxx-large",
                  ],
                  f = {
                    color: "color",
                    face: "font-family",
                    size: "font-size",
                  };
                for (var u in (c.attr.style || (c.attr.style = []),
                c.styleStr || (c.styleStr = ""),
                f))
                  if (c.attr[u]) {
                    var h = "size" === u ? g[c.attr[u] - 1] : c.attr[u];
                    c.attr.style.push(f[u]),
                      c.attr.style.push(h),
                      (c.styleStr += f[u] + ": " + h + ";");
                  }
              }
              ("source" === c.tag && (r.source = c.attr.src), o)
                ? (void 0 === (d = a[0] || r).nodes && (d.nodes = []),
                  d.nodes.push(c))
                : a.unshift(c);
            },
            end(e) {
              var t = a.shift();
              if (
                (t.tag,
                "video" === t.tag &&
                  r.source &&
                  ((t.attr.src = r.source), delete r.source),
                0 === a.length)
              )
                r.nodes.push(t);
              else {
                var i = a[0];
                void 0 === i.nodes && (i.nodes = []), i.nodes.push(t);
              }
            },
            chars(e) {
              var t = { node: "text", text: e, textArray: I(e) };
              if (0 === a.length)
                (t.index = i.toString()), (i += 1), r.nodes.push(t);
              else {
                var s = a[0];
                void 0 === s.nodes && (s.nodes = []),
                  (t.index = s.index + "." + s.nodes.length),
                  s.nodes.push(t);
              }
            },
          }),
          r
        );
      }
      function I(e) {
        var t = [];
        if (0 == z.length || !O)
          return ((n = { node: "text" }).text = e), (r = [n]);
        e = e.replace(/\[([^\[\]]+)\]/g, ":$1:");
        for (
          var a = new RegExp("[:]"), r = e.split(a), i = 0;
          i < r.length;
          i++
        ) {
          var s = r[i],
            n = {};
          O[s]
            ? ((n.node = "element"),
              (n.tag = "emoji"),
              (n.text = O[s]),
              (n.baseSrc = j))
            : ((n.node = "text"), (n.text = s)),
            t.push(n);
        }
        return t;
      }
      var C = a("/XVY"),
        T = Object(C.a)({
          content: { default: "" },
          color: { default: "white" },
          fullscreen: { default: 0 },
        }),
        { useTpx: E } = r.default.style,
        U = {
          mixins: [Object(i.a)({ optDesc: T })],
          data: () => ({ nodes: [] }),
          computed: {
            style() {
              var { color: e, fullscreen: t } = this.opt;
              return (
                "\n        background-color: " +
                e +
                ";\n        padding: " +
                (1 !== t ? E(10) + " " + E(10) + " 0" : "") +
                ";\n      "
              );
            },
          },
          created() {
            var { content: e } = this.opt;
            this.nodes = this.getRichNodes(e);
          },
          methods: {
            getRichNodes(e) {
              return (
                _(
                  (e = e
                    .replace(/<a class="video-link".*?\/a>/g, "")
                    .replace(
                      /(<svg .*?\/svg>)/g,
                      (e) => '<svg src="' + encodeURI(e) + '"></svg>'
                    )
                    .replace(/<(canvas|audio|iframe) .*?\/\1>/g, "")),
                  this.data.canvasId
                ).nodes || []
              )
                .map(d)
                .map((e) => p(e));
            },
          },
          ud: !0,
        };
      t.default = r.default.component(U);
    },
  })
);
