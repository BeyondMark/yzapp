"use strict";
var r = require("~/r");
r(
  "ac7r",
  Object.assign({}, require("~/v.js").modules, {
    VNnE: function (t, e, o) {
      var a = getApp();
      e.a = {
        data: function () {
          return {
            popupBottom: 0,
            noSafeBottom: 0,
            safeBottom: "iPhone-X" === a.deviceType,
          };
        },
        beforeMount: function () {
          var t = this;
          a.isSwitchTab().then(function (e) {
            e &&
              ((t.popupBottom = 49), (t.noSafeBottom = t.safeBottom ? 83 : 49));
          });
        },
      };
    },
    ac7r: function (t, e, o) {
      o.r(e);
      var a = o("VNnE"),
        n = {
          101: "参与的满减满赠活动仅含虚拟商品时不送实物赠品。",
          261: "1）参与的实付满赠活动仅含虚拟商品时不送实物赠品；2）实付金额门槛计算不含运费，商品优惠扣减积分抵现之后即为实付金额。商城订单使用储值余额支付时仍可享受实付满赠。",
        },
        i = {
          mixins: [a.a],
          props: {
            activityInfo: { type: Object },
            showPopup: { type: Boolean, default: !1 },
            themeGeneralColor: String,
            themeGeneralAlpha10Color: String,
            themeCss: String,
            themeColors: { type: Object, default: () => ({}) },
            themeTag: { type: Object, default: () => ({}) },
          },
          data: () => ({ show: !1 }),
          computed: {
            customPopupStyle() {
              var t = 0;
              return (
                (t = this.popupBottom),
                this.safeBottom && (t = this.noSafeBottom),
                "bottom: " + t + "px"
              );
            },
            showExplain() {
              var t;
              return (
                n[null == (t = this.activityInfo) ? void 0 : t.activityType] ||
                ""
              );
            },
          },
          methods: {
            handlePopupClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        r = o("9ZMt");
      e.default = r.default.component(i);
    },
  })
);
