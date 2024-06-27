"use strict";
var r = require("~/r");
r(
  "mPhS",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    mPhS: function (t, e, l) {
      l.r(e);
      var i = l("Fcif"),
        n = l("9ZMt"),
        o = 0,
        a = 2,
        r = 3,
        s = l("EqB2"),
        c = l("/XVY"),
        d = Object(c.a)({
          title: { default: "" },
          titleFontSize: { default: 16 },
          titleFontWeight: { default: 500 },
          titleColor: { default: "#323233" },
          titleExtraStyle: { default: () => ({}) },
          titleTags: { default: () => [] },
          titleAfterTags: { default: () => [] },
          titleLines: { default: 2 },
          desc: { type: [String, Object], default: "" },
          descFontSize: { default: 12 },
          descFontWeight: { default: 400 },
          descColor: { default: "#969799" },
          descExtraStyle: { default: () => ({}) },
          descLines: { default: 1 },
          bgColor: { default: "#fff" },
          textAlign: { default: "left" },
          vMargin: { default: 16 },
          hMargin: { default: 16 },
          pageMargin: { default: 0 },
          showLink: { default: !1 },
          linkType: { default: 1 },
          linkText: { default: "查看更多" },
          linkIcon: { default: "arrow" },
          linkFontSize: { default: 12 },
          linkColor: { default: "#969799" },
          linkVerticalAlign: { default: "center" },
          linkExtraStyle: { default: () => ({}) },
          showDivider: { default: !1 },
          descLineHeight: {},
          radius: { type: [Number, String] },
          skeleton: { type: Boolean, default: !1 },
          skeletonType: { type: Number, default: 1 },
          layout: { type: Number, default: 0 },
        }),
        u = l("2Dtx"),
        { useTpx: f } = n.default.style;
      function g(t, e, l, n, o) {
        void 0 === o && (o = {});
        var a = o;
        return (
          a.height &&
            "number" == typeof a.height &&
            (a = Object(i.a)({}, a, { height: f(a.height) })),
          Object(u.a)(
            Object(i.a)(
              {
                "font-size": f(t),
                "font-weight": e,
                "-webkit-line-clamp": l,
                color: n,
              },
              a
            )
          )
        );
      }
      var h = {
        mixins: [Object(s.a)({ optDesc: d })],
        computed: {
          containerConfig() {
            var {
              textAlign: t = "left",
              bgColor: e,
              hMargin: l,
              pageMargin: i,
              radius: n,
              skeleton: o,
            } = this.opt;
            return {
              class:
                "\n          cap-title\n          cap-title--" +
                t +
                "\n        ",
              style: Object(u.a)({
                "background-color": e,
                "text-align": t,
                padding: "0 " + f(o ? 0 : l),
                margin: "0 " + f(i),
                "border-radius": n,
              }),
            };
          },
          wrapStyle() {
            var { vMargin: t, skeleton: e } = this.opt;
            return Object(u.a)({ padding: f(e ? 0 : t) + " 0" });
          },
          tagsConfig() {
            var { titleTags: t } = this.opt;
            return t && 0 !== t.length
              ? t.map(
                  (t) => (
                    "text" === t.type &&
                      ((t.colorStyle = Object(u.a)({ color: t.color })),
                      (t.bgStyle = t.bgColor
                        ? Object(u.a)({ "background-color": t.bgColor })
                        : "")),
                    t
                  )
                )
              : [];
          },
          titleConfig() {
            var {
                titleFontSize: t,
                titleFontWeight: e,
                titleColor: l,
                titleExtraStyle: i,
                titleLines: n,
              } = this.opt,
              o = 1.375 * t;
            return {
              style: g(t, e, n, l, i),
              iconStyle: "vertical-align: top;line-height: " + f(o),
            };
          },
          descConfig() {
            var {
                desc: t,
                descFontSize: e,
                descFontWeight: l,
                descColor: n,
                descExtraStyle: o,
                descLines: a,
                descLineHeight: r,
              } = this.opt,
              s = !1,
              c = !1;
            if ("string" == typeof t && t) s = !0;
            else if ("object" == typeof t && t) {
              var { wxDate: d, wxAuthor: u, wxLinkTitle: f } = t;
              (c = !0), (s = d || u || f);
            }
            return {
              show: s,
              isWxTitle: c,
              style: g(e, l, a, n, Object(i.a)({}, o, { "line-height": r })),
            };
          },
          linkConfig() {
            var {
                linkFontSize: t,
                linkColor: e,
                linkVerticalAlign: l,
                linkExtraStyle: n = {},
                linkType: s,
                linkIcon: c,
                titleFontSize: d,
              } = this.opt,
              g = +s === o,
              h = f(1.375 * d),
              p = Object(i.a)(
                {
                  "font-size": f(t),
                  "align-self": {
                    top: "flex-start",
                    center: "center",
                    bottom: "flex-end",
                  }[l],
                  "line-height": h,
                  color: g ? "#38f" : e,
                },
                n
              );
            return {
              style: Object(u.a)(p),
              showIcon: +s !== o,
              iconName: +s === a ? c : "arrow",
              showText: +s !== a && +s !== r,
              iconStyle: Object(u.a)(
                Object(i.a)(
                  {
                    "line-height": h,
                    "vertical-align": "top",
                    "font-size": "" + f(t),
                    color: g ? "#38f" : e,
                  },
                  n
                )
              ),
            };
          },
          skeletonContent() {
            return this.opt.skeleton ? "content-skeleton" : "";
          },
        },
        methods: {
          handleTitleClick() {
            this.$emit("btn-click");
          },
        },
        ud: !0,
      };
      e.default = n.default.component(h);
    },
  })
);
