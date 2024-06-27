"use strict";
var r = require("~/r");
r(
  "1CT9",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "1CT9": function (e, t, r) {
      r.r(t);
      var a = r("rqVN"),
        s = getApp();
      Object(a.b)({
        properties: {
          show: { type: Boolean, value: !1 },
          typeRule: { type: String, value: "" },
          shopName: { type: String, value: "本店铺" },
        },
        data: { curShopName: "" },
        attached() {
          var { shop_name: e } = s.getShopInfoSync();
          this.setYZData({ curShopName: e });
        },
        methods: {
          onClose() {
            this.triggerEvent("toggleRules", !1);
          },
        },
      });
    },
  })
);
