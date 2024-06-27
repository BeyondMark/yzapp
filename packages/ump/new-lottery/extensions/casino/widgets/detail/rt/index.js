"use strict";
var r = require("~/r");
r(
  "DSW4",
  Object.assign(
    {},
    require("~/packages/ump/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      DSW4: function (e, t, r) {
        r.r(t);
        var a = r("7/pW"),
          s = r("yNXm"),
          i = r("v6dD");
        Object(a.a)({
          properties: {
            endDate: { type: Number, observer: "updateEndDate" },
            startDate: { type: Number, observer: "updateStartDate" },
            showDetail: { type: Boolean, value: !1 },
            shopName: String,
            description: String,
            joinThresholdDesc: String,
            themeColor: { type: String, value: s.g },
          },
          data: { end: "", start: "" },
          methods: {
            updateStartDate(e) {
              var t = Object(i.b)(e, "YYYY-MM-DD HH:mm:ss");
              this.setYZData({ start: t });
            },
            updateEndDate(e) {
              var t = Object(i.b)(e, "YYYY-MM-DD HH:mm:ss");
              this.setYZData({ end: t });
            },
            hideDetail() {
              this.triggerEvent("close");
            },
          },
        });
      },
    }
  )
);
