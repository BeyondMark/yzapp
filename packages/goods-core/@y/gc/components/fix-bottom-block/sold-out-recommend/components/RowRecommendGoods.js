"use strict";
var r = require("~/r");
r(
  "+nHg",
  Object.assign({}, require("~/v.js").modules, {
    "+nHg": function (e, a, o) {
      o.r(a);
      var t = o("YeA1"),
        r = o("ONqW"),
        n = {
          name: "RowRecommendGoods",
          props: {
            showContent: { type: Boolean, default: !0 },
            recommendGoods: { type: Array, default: () => [] },
          },
          data: () => ({
            layoutConfig: {
              type: "swipe ",
              itemWidth: 160,
              layoutMargin: 12,
              itemMargin: 24,
            },
          }),
          methods: {
            handleItemClick(e) {
              var {
                alias: a,
                loggerParams: { alg: o, banner_id: n },
              } = e;
              Object(r.a)().log({
                et: "click",
                ei: "open_goods",
                en: "打开商品详情",
                params: e.loggerParams,
              }),
                Object(t.a)().dmc.navigate("GoodsDetail", {
                  alias: a,
                  alg: o,
                  banner_id: n,
                });
            },
          },
          ud: !0,
        },
        i = o("9ZMt");
      a.default = i.default.component(n);
    },
  })
);
