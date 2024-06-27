"use strict";
var r = require("~/r");
r(
  "cAuh",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "6SZ0": function (e, t, i) {
      t.a = Behavior({
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
    S0En: function (e, t, i) {
      t.a = Behavior({
        properties: {
          description: { type: String, value: "" },
          validEndTime: { type: Number, optionalTypes: [String], value: 0 },
          validStartTime: { type: Number, optionalTypes: [String], value: 0 },
          isAuthFontSize: { type: Boolean },
        },
      });
    },
    cAuh: function (e, t, i) {
      i.r(t);
      var a = i("Fcif"),
        s = i("eijD"),
        r = i("u8kV"),
        n = i("S0En"),
        o = i("6SZ0"),
        d = i("03az"),
        l = [n.a, o.a];
      Object(r.c)({
        behaviors: l,
        externalClasses: ["custom-class"],
        options: { multipleSlots: !0 },
        data: {
          computedDescription: [],
          time: 0,
          timeDate: {},
          showTimeData: !1,
          valueStyle: "",
          disabledClass: "",
          unavailableClass: "",
        },
        ready() {
          this.initData(),
            setTimeout(() => {
              this.computedFontSize().then((e) => {
                this.setYZData({ valueStyle: "font-size: " + e + ";" });
              });
            });
        },
        methods: {
          computedFontSize() {
            var e = this;
            return Object(s.a)(function* () {
              var { isAuthFontSize: t, description: i } = e.data;
              if (!t || !i) return "12px";
              var a =
                (yield e.getBoundingClientRectWidth(".coupon-description")) /
                (yield e.getBoundingClientRectWidth(
                  ".coupon-description-copy"
                ));
              if (a > 1) return "12px";
              var s = Math.trunc(12 * a);
              return Math.max(s, 10) + "px";
            })();
          },
          getBoundingClientRectWidth(e) {
            return new Promise((t) => {
              wx.createSelectorQuery()
                .in(this)
                .select(e)
                .boundingClientRect(function (e) {
                  void 0 === e && (e = {}), t(e.width || 0);
                })
                .exec();
            });
          },
          disabledObserver() {
            var { disabled: e, unavailable: t } = this.data;
            this.setYZData({
              disabledClass: e ? "coupon-description__disabled" : "",
              unavailableClass: t ? "coupon-description__unavailable" : "",
            });
          },
          handleCountDownChange(e) {
            var { detail: t = {} } = e;
            this.setYZData(
              { showTimeData: !0, timeDate: Object(a.a)({}, t) },
              { immediate: !0 }
            );
          },
          initData() {
            this.setYZData({
              time: this.computedTime(),
              computedDescription: this.formatDescription(),
            });
          },
          formatDescription() {
            var {
              description: e,
              validStartTime: t,
              validEndTime: i,
            } = this.data;
            if (e) return e.split("-");
            if (t && i && i - t > 1728e5)
              return [
                Object(d.b)(Object(d.d)(t), "yyyy.MM.dd") + " ",
                " " + Object(d.b)(Object(d.d)(i), "yyyy.MM.dd"),
              ];
            return "";
          },
          computedTime() {
            var { validEndTime: e } = this.data,
              t = 0;
            if (e) {
              var i = e - +new Date();
              t = Math.max(0, i);
            }
            return t;
          },
        },
      });
    },
  })
);
