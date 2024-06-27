"use strict";
var r = require("~/r");
r(
  "FwHG",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    FwHG: function (e, t, s) {
      s.r(t);
      var a = s("rqVN"),
        i = getApp();
      Object(a.b)({
        options: { multipleSlots: !0 },
        properties: {
          title: String,
          couponStatus: String,
          couponData: Object,
          logParams: Object,
        },
        data: {
          curTime: new Date().getTime(),
          timeData: {},
          remindClass: "putaway-desc",
        },
        ready() {
          this.remindHandle();
        },
        methods: {
          getCloseLog() {
            return {
              et: "click",
              ei: "click_close",
              en: "发券浮层关闭按钮点击",
              params: this.data.logParams,
            };
          },
          closeHandle() {
            this.triggerEvent("onstatus"),
              i.logger && i.logger.log(this.getCloseLog());
          },
          receivedHandle() {
            this.triggerEvent("received");
          },
          useHandle() {
            this.triggerEvent("use");
          },
          onChange(e) {
            var t = e.detail;
            t &&
              ((t.hours = t.hours < 10 ? "0" + t.hours : t.hours),
              (t.minutes = t.minutes < 10 ? "0" + t.minutes : t.minutes),
              (t.seconds = t.seconds < 10 ? "0" + t.seconds : t.seconds)),
              this.setYZData({ timeData: t });
          },
          onFinished() {
            this.triggerEvent("onstatus");
          },
          remindHandle() {
            this.data.couponData.validEndTime - this.data.curTime > 36e5
              ? this.setYZData({ remindClass: "putaway-desc" })
              : this.setYZData({ remindClass: "putaway-desc-remind" });
          },
        },
      });
    },
  })
);
