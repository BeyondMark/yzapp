"use strict";
var r = require("~/r");
r(
  "e+82",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "e+82": function (e, t, a) {
      a.r(t);
      var i = a("rqVN"),
        s = a("a1Mm");
      Object(i.b)({
        properties: {
          value: {
            type: Boolean,
            value: !1,
            observer(e, t) {
              e !== t && this.setYZData({ visible: e });
            },
          },
          skuInfo: { type: Object, default: () => ({}) },
          hasMobile: Boolean,
          bizDataMap: { type: Object, value: {} },
        },
        data: {
          visible: !1,
          bgUrl: Object(s.a)(
            "https://b.yzcdn.cn/public_files/e63c79fbe797c4304e7d7c1cd925abb1.png"
          ),
        },
        methods: {
          handleCloseDialog() {
            this.setYZData({ visible: !1 });
          },
          handleToPay() {
            this.triggerEvent("experience"), this.handleCloseDialog();
          },
          bindGetPhoneNumber() {
            this.triggerEvent("bindMobile");
          },
        },
        attached() {},
      });
    },
  })
);
