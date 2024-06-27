"use strict";
var r = require("~/r");
r(
  "LuY8",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    LuY8: function (t, e, s) {
      s.r(e);
      var a = s("rqVN"),
        r = getApp();
      Object(a.b)({
        options: { multipleSlots: !0 },
        properties: {
          themeClass: String,
          searchText: String,
          couponStatus: String,
          couponData: Object,
          logParams: Object,
          countDownNum: Number,
        },
        data: { timer: null, curTime: new Date().getTime(), themeImage: "" },
        attached() {
          this.countDown();
        },
        detached() {
          clearInterval(this.data.timer);
        },
        methods: {
          getPopupCloseLog() {
            return {
              et: "click",
              ei: "click_Popup_close",
              en: "发券弹窗关闭按钮点击",
              params: this.data.logParams,
            };
          },
          putawayHandle() {
            this.triggerEvent("onstatus"),
              r.logger && r.logger.log(this.getPopupCloseLog());
          },
          receivedHandle() {
            this.triggerEvent("received", this.data.countDownNum);
          },
          useHandle() {
            this.triggerEvent("use");
          },
          countDown() {
            var { countDownNum: t } = this.data;
            this.setYZData({
              timer: setInterval(() => {
                t--,
                  this.setYZData({ countDownNum: t }),
                  0 === t &&
                    (clearInterval(this.data.timer),
                    this.triggerEvent("onstatus"));
              }, 1e3),
            });
          },
          onChange(t) {
            var e = t.detail;
            e &&
              ((e.hours = e.hours < 10 ? "0" + e.hours : e.hours),
              (e.minutes = e.minutes < 10 ? "0" + e.minutes : e.minutes),
              (e.seconds = e.seconds < 10 ? "0" + e.seconds : e.seconds)),
              this.setYZData({ timeData: e });
          },
          onFinished() {
            this.triggerEvent("onstatus");
          },
        },
      });
    },
  })
);
