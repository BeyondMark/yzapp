"use strict";
var r = require("~/r");
r(
  "vfPe",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    vfPe: function (e, t, r) {
      r.r(t);
      var o = r("rqVN"),
        s = r("6i0Q");
      Object(o.b)({
        properties: {
          thumbsStatus: Number,
          showGoodsBtn: Boolean,
          goodsNum: Number,
          single: { type: Boolean, value: !1 },
        },
        data: { themeColor: "#f44" },
        methods: {
          thumbClick() {
            this.triggerEvent("thumbclick");
          },
          shareClick() {
            this.triggerEvent("shareclick");
          },
          showToast() {
            this.triggerEvent("showtoast");
          },
          gotoBuy() {
            this.triggerEvent("gotoBuy");
          },
        },
        attached() {
          s.a.getThemeColor("general").then((e) => {
            this.setYZData({ themeColor: e });
          });
        },
      });
    },
  })
);
