"use strict";
var r = require("~/r");
r(
  "09K3",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "09K3": function (e, a, s) {
      s.r(a);
      var t = s("rqVN"),
        d = s("RY8z");
      Object(t.b)({
        properties: {
          goods: Object,
          isMatchPackage: Boolean,
          packageIndex: Number,
          goodsIndex: Number,
          themeClass: { type: String, value: "default" },
        },
        data: { showSkuBtn: !1 },
        methods: {
          handleSkuBtnTap() {
            var { packageIndex: e, goodsIndex: a, goods: s } = this.data;
            s.totalStock &&
              this.triggerEvent("show-sku", { packageIndex: e, goodsIndex: a });
          },
          onClickThumb() {
            var { goods: e } = this.data;
            d.a.navigate({
              url:
                "/pages/goods/detail/index?alias=" +
                e.idAlias +
                "&banner_id=" +
                e.bannerId,
            });
          },
        },
      });
    },
  })
);
