"use strict";
var r = require("~/r");
r(
  "1N7K",
  Object.assign({}, require("~/v.js").modules, {
    "1N7K": function (e, t, s) {
      s.r(t);
      var o = {
          props: { goods: Object, themeGeneralColor: String },
          externalClasses: ["custom-class"],
          methods: {
            handleItemDelete(e) {
              var { instance: t, position: s } = e;
              if ("cell" === s || "left" === s || "outside" === s)
                return t.close();
              this.$emit("item-delete", { cartId: this.goods.cartId }),
                t.close();
            },
            toGoodsDetail(e) {
              this.$emit("to-goods-detail", e);
            },
          },
          ud: !0,
        },
        r = s("9ZMt");
      t.default = r.default.component(o);
    },
  })
);
