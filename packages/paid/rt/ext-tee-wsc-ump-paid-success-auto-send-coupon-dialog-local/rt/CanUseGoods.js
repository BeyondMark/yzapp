"use strict";
var r = require("~/r");
r(
  "CsqJ",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      CsqJ: function (e, o, t) {
        t.r(o);
        var s = t("jmjq"),
          i = t.n(s),
          d = t("eUvf"),
          r = t("YeA1"),
          a = {
            name: "CanUseGoods",
            props: {
              type: { type: Number, default: 0 },
              goods: { type: Array, default: () => [] },
              loggerSpm: { type: String, default: "" },
              themeColors: { type: Object, default: () => ({}) },
              isSkyline: { type: Boolean, default: !1 },
            },
            data: () => ({ loading: !1, memorizedGoodsIds: new Set() }),
            computed: {
              itemClass() {
                var e = this.goodsList.length;
                return e > 2
                  ? "goods-item-multi"
                  : ["goods-item-single", "goods-item-double"][e - 1] || "";
              },
              goodsList() {
                var e = this.goods;
                return this.appendGoodsListBlock(e);
              },
              swpieList() {
                var e = Object(d.a)(this.goodsList, 3);
                return (
                  setTimeout(() => {
                    var e;
                    null == (e = this.$refs["van-swiper-ref"]) || e.resize();
                  }, 2e3),
                  e
                );
              },
            },
            created() {},
            methods: {
              priceHelper: (e) => +i()(e, !0, !1) + "",
              onSwipeChange(e) {
                var o = this.swpieList[e];
                for (var t of o) {
                  var s,
                    i = t.id;
                  if (i && !this.memorizedGoodsIds.has(i))
                    this.memorizedGoodsIds.add(i),
                      this.ctx.logger.log({
                        et: "view",
                        ei: "view_goods_recommend",
                        en: "推荐商品曝光",
                        pt: "paySuccess",
                        params: {
                          component: "rcmd_coupon_pop",
                          goods_id: i,
                          alg:
                            null != (s = null == t ? void 0 : t.algId) ? s : "",
                          item_type: "goods",
                          item_id: i || "",
                          recommend_name: "优惠券商品推荐",
                          banner_id: Object(d.b)(this.loggerSpm, e),
                        },
                      });
                }
              },
              goodsClick(e, o) {
                if (e.alias) {
                  var t = Object(d.b)(this.loggerSpm, o),
                    s = (null == e ? void 0 : e.algId) || "";
                  this.ctx.logger.log({
                    et: "click",
                    ei: "click_goods_recommend",
                    en: "推荐商品点击",
                    pt: "paySuccess",
                    params: {
                      component: "rcmd_coupon_pop",
                      goods_id: e.id,
                      alg: s,
                      item_type: "goods",
                      item_id: e.id || "",
                      recommend_name: "优惠券商品推荐",
                      banner_id: t,
                    },
                  });
                  var { alias: i } = e;
                  Object(r.a)().dmc.navigate("GoodsDetail", { alias: i });
                }
              },
              appendGoodsListBlock(e) {
                var o = e.length;
                if (o < 3 || o % 3 == 0) return e;
                for (var t = 3 - (o % 3), s = 0; s < t; s++) e.push({});
                return e;
              },
            },
            ud: !0,
          },
          n = t("9ZMt");
        o.default = n.default.component(a);
      },
    }
  )
);
