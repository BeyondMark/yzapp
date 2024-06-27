"use strict";
var r = require("~/r");
r(
  "xkA+",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "xkA+": function (e, s, t) {
      t.r(s);
      var a = t("Fcif"),
        i = t("u8kV"),
        o = t("svh/"),
        r = t("RY8z");
      Object(i.b)({
        properties: { goods: { type: Object, value: {} } },
        methods: Object(a.a)({}, Object(o.e)(["GET_GOODS_SKU"]), {
          onClickThumb() {
            r.a.navigate({
              url: "/pages/goods/detail/index?alias=" + this.data.goods.alias,
            });
          },
          onAddGoods() {
            var { goods: e } = this.data;
            this.GET_GOODS_SKU({
              goods: Object(a.a)({}, e, { picture: e.imageUrl }),
              buyText: "加入购物车",
              type: "ADD_CART",
            });
          },
        }),
      });
    },
  })
);
