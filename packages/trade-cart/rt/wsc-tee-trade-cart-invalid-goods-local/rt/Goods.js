"use strict";
var r = require("~/r");
r(
  "9Rxp",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      "9Rxp": function (e, t, o) {
        o.r(t);
        var r = o("eXT+"),
          s = {
            props: {
              goods: { type: Object, required: !0 },
              themeGeneralAlpha10Color: String,
              themeGeneralColor: String,
            },
            data: () => ({
              GOODS_TAG_MAP: r.a,
              priceStyle: "",
              recommendList: [],
            }),
            computed: {
              goodsSettlementMark() {
                var e, t;
                return (
                  (null == (e = this.goods) || null == (t = e.settlementRule)
                    ? void 0
                    : t.settlementMark) || ""
                );
              },
            },
            watch: {
              goods: {
                handler(e) {
                  if (e.recommendListObj) {
                    var t = e.recommendListObj.recommendList || [];
                    this.recommendList = t.slice(0, 3);
                  }
                },
                immediate: !0,
              },
            },
            methods: {
              toGoodsRoute(e) {
                this.$emit("to-goods-detail", e);
              },
              toGoodsDetail() {
                var { alias: e } = this.goods,
                  t = "/pages/goods/detail/index?alias=" + e;
                this.toGoodsRoute({ link: t });
              },
            },
            ud: !0,
          },
          i = o("9ZMt");
        t.default = i.default.component(s);
      },
    }
  )
);
