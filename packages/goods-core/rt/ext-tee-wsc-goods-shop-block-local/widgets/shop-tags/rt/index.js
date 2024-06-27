"use strict";
var r = require("~/r");
r(
  "Bnfa",
  Object.assign({}, require("~/v.js").modules, {
    Bnfa: function (o, t, a) {
      a.r(t);
      var e = a("YeA1"),
        n = {
          name: "shop-tags",
          props: {
            showShopBrandTag: Boolean,
            showShopOfficialTag: Boolean,
            kdtId: String,
          },
          computed: {},
          methods: {
            gotoShopInfo() {
              Object(e.a)().dmc.navigate("ShopInfo", { kdt_id: this.kdtId });
            },
          },
          ud: !0,
        },
        d = a("9ZMt");
      t.default = d.default.component(n);
    },
  })
);
