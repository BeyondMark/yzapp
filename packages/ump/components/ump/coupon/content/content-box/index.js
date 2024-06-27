"use strict";
var r = require("~/r");
r(
  "nDx+",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "6SZ0": function (e, a, t) {
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
    Lv7G: function (e, a, t) {
      a.a = Behavior({
        properties: {
          content: { type: String, value: "extra" },
          extra: { type: String, value: "" },
        },
      });
    },
    S0En: function (e, a, t) {
      a.a = Behavior({
        properties: {
          description: { type: String, value: "" },
          validEndTime: { type: Number, optionalTypes: [String], value: 0 },
          validStartTime: { type: Number, optionalTypes: [String], value: 0 },
          isAuthFontSize: { type: Boolean },
        },
      });
    },
    "nDx+": function (e, a, t) {
      t.r(a);
      var i = t("u8kV"),
        s = t("Lv7G"),
        r = t("S0En"),
        l = t("6SZ0"),
        o = [s.a, r.a, l.a];
      Object(i.c)({
        behaviors: o,
        options: { multipleSlots: !0 },
        properties: {},
        data: { disabledClass: "", unavailableClass: "" },
        methods: {
          disabledObserver() {
            var { disabled: e, unavailable: a } = this.data;
            this.setYZData({
              disabledClass: e ? "coupon-contentbox__disabled" : "",
              unavailableClass: a ? "coupon-contentbox__unavailable" : "",
            });
          },
        },
      });
    },
  })
);
