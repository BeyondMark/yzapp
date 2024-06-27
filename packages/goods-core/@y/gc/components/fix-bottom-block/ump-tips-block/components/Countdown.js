"use strict";
var r = require("~/r");
r(
  "9tKQ",
  Object.assign({}, require("~/v.js").modules, {
    "9tKQ": function (t, e, i) {
      i.r(e);
      var o = {
          name: "Countdown",
          props: {
            buttonUmpTimelimitModel: { type: Object, default: () => ({}) },
            isGroupOn: Boolean,
            countDownIcon: String,
          },
          data: () => ({ show: !0, timeData: {} }),
          computed: {
            activityName() {
              var { key: t, umpTitle: e = "营销" } =
                this.buttonUmpTimelimitModel || {};
              return ["bale", "secondHalfDiscount"].includes(t)
                ? e
                : e + "活动";
            },
            isCoupon() {
              var { key: t } = this.buttonUmpTimelimitModel || {};
              return "coupon" === t;
            },
            countDown() {
              var { leftTime: t } = this.buttonUmpTimelimitModel;
              return t - Date.now();
            },
            showBottomCountdown() {
              if (
                !this.buttonUmpTimelimitModel ||
                !this.buttonUmpTimelimitModel.key
              )
                return !1;
              if (this.isGroupOn) return !1;
              var { leftTime: t } = this.buttonUmpTimelimitModel;
              return t > Date.now();
            },
            countDownText() {
              var {
                days: t = 0,
                hours: e,
                minutes: i,
                seconds: o,
              } = this.timeData;
              return (
                24 * +t +
                e +
                ":" +
                (i < 10 ? "0" + i : i) +
                ":" +
                (o < 10 ? "0" + o : o)
              );
            },
          },
          methods: {
            handleClick() {
              this.$emit("click");
            },
            close() {
              this.show = !1;
            },
            onChange(t) {
              this.timeData = t;
            },
          },
          ud: !0,
        },
        n = i("9ZMt");
      e.default = n.default.component(o);
    },
  })
);
