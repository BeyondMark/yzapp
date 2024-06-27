"use strict";
var r = require("~/r");
r(
  "cGS+",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "cGS+": function (e, a, t) {
        t.r(a);
        var r = t("Fcif"),
          s = t("rqVN"),
          i = t("xyw3"),
          c = t("RQUM");
        Object(s.b)({
          properties: {
            packagePrice: {
              type: Number,
              observer(e) {
                this.setYZData({ totalPrice: Object(i.a)(e).toYuan() });
              },
            },
            isMatchPackage: { type: Boolean, value: !1 },
            isStart: { type: Boolean, value: !1 },
            themeClass: { type: String, value: "default" },
            payGoodsList: {
              type: Array,
              observer(e) {
                var { packagePrice: a, isMatchPackage: t } = this.data,
                  s = Object(c.a)(e, t, a);
                this.setYZData(Object(r.a)({}, s));
              },
            },
          },
          externalClasses: ["submit-bar-class"],
          data: { totalPrice: 0, savePrice: 0, showSave: !0, originPrice: 0 },
          methods: {
            addCart() {
              this.triggerEvent("add-cart");
            },
            goPay() {
              this.data.isStart && this.triggerEvent("go-pay");
            },
          },
        });
      },
    }
  )
);
