"use strict";
var r = require("~/r");
r(
  "y1QC",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      y1QC: function (e, t, i) {
        i.r(t);
        var o = i("Fcif"),
          s = i("9ZMt"),
          a = i("US/N"),
          n = i("Tewj"),
          h = i("tS13"),
          c = i("gBZH"),
          d = i("/zym"),
          r = i("ddKh"),
          u = {
            name: "live-coupon",
            props: { goodsBaseInfo: Object },
            data: () => ({
              isWechatLive: !1,
              show: !1,
              time: 0,
              formattedTime: "",
              detail: Object(o.a)({}, r.a),
              liveIconData: { goaway: void 0, bottom: r.b },
              timer: null,
            }),
            watch: {
              goodsBaseInfo: {
                handler() {
                  var { scene: e } = s.default.getAppOptions();
                  e === r.e && this.fetchSendCoupon();
                },
                immediate: !0,
              },
            },
            created() {},
            destroyed() {
              this.clearTimer(), n.default.off("popupContainer:update-nav-pos");
            },
            methods: {
              fetchSendCoupon() {
                this.goodsBaseInfo.id &&
                  Object(a.default)({
                    method: "POST",
                    path:
                      "/wscgoods/weapp/sendCoupon.json?alias=" +
                      this.goodsBaseInfo.alias,
                    data: { goodsId: this.goodsBaseInfo.id },
                  })
                    .then((e) => {
                      this.show = !0;
                      var {
                        value: t,
                        validEndTime: i,
                        isNewSend: o,
                        useThresholdCopywriting: s,
                      } = e;
                      (this.time = i - Date.now()),
                        this.time > 0 &&
                          ((this.isWechatLive = !0),
                          (this.detail = {
                            value: "" + Object(d.a)(t, 2, !0),
                            miniValue: Object(d.c)(t),
                            isNewSend: o,
                            useThresholdCopywriting: s,
                          }),
                          this.initIconPosition(),
                          this.setTimer());
                    })
                    .catch((e) => {});
              },
              initIconPosition() {
                n.default.on("popupContainer:update-nav-pos", (e) => {
                  "livecoupon" === e.type && (this.liveIconData = e);
                }),
                  this.$emit("update-icon", {
                    type: "livecoupon",
                    priority: 80,
                    height: 48,
                    canGoaway: !0,
                  });
              },
              setTimer() {
                this.clearTimer(),
                  (this.timer = setTimeout(() => {
                    this.closePopup(), this.clearTimer();
                  }, 5e3));
              },
              clearTimer() {
                this.timer && clearTimeout(this.timer);
              },
              showPopup() {
                this.show = !0;
              },
              closePopup() {
                this.show = !1;
              },
              onCountDownChange(e) {
                var { countDownTime: t } = e,
                  { hours: i = 0, minutes: o = 0, seconds: s = 0 } = t || {},
                  a = 0 == +i ? "mm:ss" : "HH:mm:ss";
                (this.formattedTime = Object(d.b)(a, t)),
                  0 === i && 0 === o && 0 === s && (this.isWechatLive = !1);
              },
              showSku() {
                n.default.trigger("popupContainer:sku:show", {
                  name: "act-buy",
                  activityName: "goods",
                  btnActive: h.a.OPEN_SKU,
                  skuScene: h.c.BUY,
                  accountUnionScene: c.a.NORMAL_BUY,
                }),
                  this.closePopup();
              },
            },
            ud: !0,
          };
        t.default = s.default.component(u);
      },
    }
  )
);
