"use strict";
var r = require("~/r");
r(
  "ZuT+",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "ZuT+": function (t, e, r) {
        r.r(e);
        var o = r("Fcif"),
          s = r("9ZMt"),
          a = r("mztD"),
          i = r("EqB2"),
          c = r("8cHE"),
          u = r("2Dtx"),
          { useTpx: n } = s.default.style,
          l = {
            mixins: [Object(i.a)({ optDesc: c.a })],
            logicData: () => ({ load: !1 }),
            computed: {
              showPreImg() {
                return !(!this.opt.needPreload || this.load);
              },
              imageUrl() {
                var { src: t, useCdn: e } = this.opt;
                return e ? Object(a.a)(t, "!400x0.jpg") : t;
              },
              itemImageClass() {
                return "circle" === this.opt.corner ? "circle" : "rect";
              },
              skeletonShow() {
                return this.opt.useSkeleton ? "photo-skeleton-bg" : "";
              },
              mode() {
                var { fill: t } = this.opt;
                return "width" === t
                  ? "widthFix"
                  : "cover" === t
                  ? "aspectFill"
                  : "aspectFit";
              },
              style() {
                var { ratio: t, fill: e } = this.opt;
                if ("width" === e) return "";
                var [r, o] = t.split("-");
                return Object(u.a)({
                  "border-radius": n(this.opt.radius),
                  "padding-top": (o / r) * 100 + "%",
                });
              },
              maskStyle() {
                var t = "",
                  { mask: e, soldOutGoodsImg: r } = this.opt;
                return (
                  "soldout" === e && r && (t = r),
                  Object(u.a)({
                    "background-size":
                      n(100 * this.opt.maskIconSize) +
                      " " +
                      n(100 * this.opt.maskIconSize),
                    "background-image": t
                      ? "url('" + t + "')"
                      : "https://img01.yzcdn.cn/v2/image/wsc-wap/showcase/soldout.png",
                  })
                );
              },
              cornerMarkIsIcon() {
                return (
                  -1 !==
                  ["new-arrival", "hot-sale", "new", "hot"].indexOf(
                    this.opt.cornerMark
                  )
                );
              },
              cornerMarkStyle() {
                return Object(u.a)(
                  Object(o.a)(
                    { "background-image": "url(" + this.opt.cornerMark + ")" },
                    this.opt.customCornerMaskStyle
                  )
                );
              },
            },
            methods: {
              loadSuccess() {
                this.load = !0;
              },
            },
            ud: !0,
          };
        e.default = s.default.component(l);
      },
    }
  )
);
