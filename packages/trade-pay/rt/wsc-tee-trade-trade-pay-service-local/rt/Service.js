"use strict";
var r = require("~/r");
r(
  "FVcD",
  Object.assign({}, require("~/v.js").modules, {
    FVcD: function (e, s, r) {
      r.r(s);
      var o = r("YeA1"),
        p = {
          data: () => ({
            showDeliveryType: !1,
            showCheckDeliveryScope: !1,
            showDeliveryTime: !1,
            service: {},
            showExpressPopup: !1,
            kdtId: 0,
            orderNo: "",
            display: {},
          }),
          computed: { isFxZpp: () => !1 },
          created() {
            Object(o.b)(this, [
              "display",
              "showDeliveryType",
              "showCheckDeliveryScope",
              "showDeliveryTime",
              "service",
              "kdtId",
              "orderNo",
            ]);
          },
          methods: {
            toggleExpressPopup() {
              this.showExpressPopup = !this.showExpressPopup;
            },
          },
          ud: !0,
        },
        i = r("9ZMt");
      s.default = i.default.component(p);
    },
  })
);
