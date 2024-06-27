"use strict";
var r = require("~/r");
r(
  "SLAj",
  Object.assign({}, require("~/v.js").modules, {
    SLAj: function (o, t, e) {
      e.r(t);
      var n = {
          name: "coupon-popup",
          mixins: [e("VNnE").a],
          props: {
            couponList: Array,
            showPopup: Boolean,
            themeColors: Object,
            themeCSS: Object,
            loggers: Object,
            kdtId: [Number, String],
          },
          data() {
            return (
              (this.firstPopup = !0),
              { show: this.showPopup, displayType: "flat" }
            );
          },
          computed: {
            themeStyle: () => ({
              btnStyle:
                "border-color: var(--ump-main-bg, #323233); background-color: var(--ump-main-bg, #323233); color: var(--ump-main-text, #fff)",
            }),
            couponOne() {
              return this.couponList[0] || {};
            },
            customStyle() {
              var o = 0;
              return (
                (o = this.popupBottom),
                this.safeBottom && (o = this.noSafeBottom),
                "bottom: " + o + "px"
              );
            },
          },
          watch: {
            showPopup: {
              immediate: !0,
              handler(o) {
                var t;
                ((this.show = o), o) &&
                  (null == (t = this.loggers) ||
                    null == t.logGatherPopupExpo ||
                    t.logGatherPopupExpo(),
                  setTimeout(() => {
                    this.observeCoupons();
                  }, 0));
              },
            },
            couponList: {
              immediate: !0,
              handler(o) {
                o &&
                  o.length &&
                  this.show &&
                  setTimeout(() => {
                    this.observeCoupons();
                  }, 0);
              },
            },
          },
          destroyed() {
            var o;
            null == (o = this.observer) || o.disconnect();
          },
          methods: {
            observeCoupons() {
              this.observer && this.observer.disconnect(),
                (this.observer = this.createIntersectionObserver({
                  thresholds: [0.5],
                  observeAll: !0,
                  cache: !0,
                }).relativeToViewport()),
                this.observer.observe(
                  ".coupon-popup__content >>> .coupon-card ",
                  (o) => {
                    if (o.intersectionRatio >= 0.5) {
                      var t,
                        e,
                        { coupon: n } = o.dataset;
                      if (!n.couponId)
                        null == (t = this.loggers) ||
                          null == t.logCouponGetExpo ||
                          t.logCouponGetExpo(n.activityId);
                      if (!n.satisfy && n.couponId && n.ableUse)
                        null == (e = this.loggers) ||
                          null == e.logGoAddonBtnExpo ||
                          e.logGoAddonBtnExpo(n.activityId);
                    }
                  }
                );
            },
            handleClose() {
              this.$emit("close");
            },
            handleSendCoupon(o) {
              this.$emit("sendCoupon", o);
            },
            clickItem(o) {
              var { item: t, coupon: e } = o;
              this.$emit("clickItem", { item: t, coupon: e });
            },
            goToAddOnPage(o) {
              var t;
              null == (t = this.loggers) ||
                null == t.logGoAddonBtnClick ||
                t.logGoAddonBtnClick(o.activityId);
            },
            toNavigate(o) {
              this.$emit("to-navigate", o);
            },
          },
        },
        s = e("9ZMt");
      t.default = s.default.component(n);
    },
    VNnE: function (o, t, e) {
      var n = getApp();
      t.a = {
        data: function () {
          return {
            popupBottom: 0,
            noSafeBottom: 0,
            safeBottom: "iPhone-X" === n.deviceType,
          };
        },
        beforeMount: function () {
          var o = this;
          n.isSwitchTab().then(function (t) {
            t &&
              ((o.popupBottom = 49), (o.noSafeBottom = o.safeBottom ? 83 : 49));
          });
        },
      };
    },
  })
);
