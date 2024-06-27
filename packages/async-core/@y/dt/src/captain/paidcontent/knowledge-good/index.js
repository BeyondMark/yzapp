"use strict";
var r = require("~/r");
r(
  "FZpv",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      FZpv: function (t, e, s) {
        s.r(e);
        var o = s("9ZMt"),
          u = s("EqB2"),
          a = s("qTBG"),
          d = s("mztD"),
          r = {
            mixins: [Object(u.a)({ optDesc: a.a })],
            props: {},
            data: () => ({}),
            computed: {
              wrapperClass() {
                var {
                    textStyle: t,
                    goodsRadius: e,
                    listMode: s,
                    itemIndex: o,
                  } = this.opt,
                  u =
                    "wrapper goods-text-style" +
                    t +
                    " goods-radius" +
                    e +
                    " list-mode-" +
                    s;
                return 4 === s ? (o % 3 == 0 ? u + "-big" : u + "-small") : u;
              },
              goodsPadding() {
                var { goodsPadding: t } = this.opt;
                return o.default.style.useTpx(t / 2);
              },
              topLeftGoodsRadius() {
                var { goodsRadius: t } = this.opt;
                return o.default.style.useTpx(1 === t ? 8 : 0);
              },
              topRightGoodsRadius() {
                var { goodsRadius: t, listMode: e } = this.opt;
                return o.default.style.useTpx(3 !== e && 1 === t ? 8 : 0);
              },
              bottomLeftGoodsRadius() {
                var { goodsRadius: t, goodsStyle: e, listMode: s } = this.opt;
                return o.default.style.useTpx(
                  (3 !== s && 3 !== e) || 1 !== t ? 0 : 8
                );
              },
              bottomRightGoodsRadius() {
                var { goodsRadius: t, goodsStyle: e } = this.opt;
                return o.default.style.useTpx(3 === e && 1 === t ? 8 : 0);
              },
              picUrl() {
                var { picUrl: t } = this.opt;
                return Object(d.a)(t, "!950x0.jpg");
              },
              iconMarginLeft: () => o.default.style.useTpx(4),
              columnSubTitle() {
                var { columnTitle: t, columnNum: e } = this.opt;
                return t + " " + (e > 1 ? "等" + e + "个专栏" : "");
              },
              tagBottomRadius: () => o.default.style.useTpx(8),
            },
            methods: {
              goToDetail() {
                var { url: t } = this.opt;
                o.default.navigate({ type: "navigateTo", url: t });
              },
            },
            ud: !0,
          };
        e.default = o.default.component(r);
      },
    }
  )
);
