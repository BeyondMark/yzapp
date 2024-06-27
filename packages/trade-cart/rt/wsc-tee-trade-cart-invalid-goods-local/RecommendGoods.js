"use strict";
var r = require("~/r");
r(
  "cXaH",
  Object.assign({}, require("~/v.js").modules, {
    cXaH: function (e, a, o) {
      o.r(a);
      var d = o("2wjL"),
        r = o("ONqW"),
        i = {
          name: "recommend-goods",
          props: { recommendList: { type: Array, default: () => [] } },
          created() {
            this.log();
          },
          methods: {
            goToGoodsPage(e) {
              var { alias: a, algs: o, bannerId: r } = e,
                i = d.a.add("/pages/goods/detail/index", {
                  alias: a,
                  banner_id: r,
                  alg: o,
                });
              this.$emit("to-goods-detail", { link: i });
            },
            log() {
              this.recommendList.forEach(function (e) {
                var a = Object(r.a)();
                null == a ||
                  a.log({
                    et: "view",
                    ei: "view",
                    en: "商品曝光",
                    params: {
                      alg: e.algs,
                      banner_id: e.bannerId,
                      item_id: e.id,
                      item_type: "goods",
                      component: "expired_goods_recommend",
                      recommend_name: "失效商品推荐",
                    },
                  });
              });
            },
          },
          ud: !0,
        },
        n = o("9ZMt");
      a.default = n.default.component(i);
    },
  })
);
