"use strict";
var r = require("~/r");
r(
  "gFKE",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    gFKE: function (t, a, e) {
      e.r(a);
      var o = e("rqVN"),
        s = getApp();
      Object(o.b)({
        properties: {
          show: { type: Boolean, value: !1 },
          topOffset: { type: String, value: "0" },
        },
        data: { globalCustomLoading: !0 },
        created() {
          s.on("app:loading:change", this.setCustomLoading);
        },
        detached() {
          s.off("app:loading:change", this.setCustomLoading);
        },
        attached() {
          this.setCustomLoading();
        },
        methods: {
          setCustomLoading() {
            this.setData({
              globalCustomLoading: s.globalData.globalCustomLoading,
            });
          },
        },
      });
    },
  })
);
