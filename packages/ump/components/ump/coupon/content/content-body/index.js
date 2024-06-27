"use strict";
var r = require("~/r");
r(
  "oBkl",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "6SZ0": function (e, a, s) {
      a.a = Behavior({
        properties: {
          disabled: {
            type: Boolean,
            value: !1,
            observer() {
              this.disabledObserver && this.disabledObserver();
            },
          },
          unavailable: {
            type: Boolean,
            value: !1,
            observer() {
              this.disabledObserver && this.disabledObserver();
            },
          },
        },
      });
    },
    Lv7G: function (e, a, s) {
      a.a = Behavior({
        properties: {
          content: { type: String, value: "extra" },
          extra: { type: String, value: "" },
        },
      });
    },
    oBkl: function (e, a, s) {
      s.r(a);
      var r = s("u8kV"),
        i = s("Lv7G"),
        t = s("6SZ0"),
        l = [i.a, t.a];
      Object(r.c)({
        behaviors: l,
        data: { disabledClass: "", unavailableClass: "" },
        methods: {
          disabledObserver() {
            var { disabled: e, unavailable: a } = this.data;
            this.setYZData({
              disabledClass: e ? "coupon-contentbody__disabled" : "",
              unavailableClass: a ? "coupon-contentbody__unavailable" : "",
            });
          },
        },
      });
    },
  })
);
