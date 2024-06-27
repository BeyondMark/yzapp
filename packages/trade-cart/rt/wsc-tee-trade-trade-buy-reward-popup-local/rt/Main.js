"use strict";
var r = require("~/r");
r(
  "kC1r",
  Object.assign({}, require("~/v.js").modules, {
    kC1r: function (t, e, i) {
      i.r(e);
      var o = i("Fcif"),
        s = i("YeA1"),
        n = {
          data() {
            return Object(o.a)(
              { show: !1, initialShow: !1, promotionInfo: {}, scene: "" },
              Object(s.b)(this, [
                "themeColors",
                "state",
                "recommendPromotionInfoList",
              ])
            );
          },
          computed: {
            isCartScene() {
              return "cart" === this.scene;
            },
            isUse() {
              return !this.promotionInfo.includeActivityType;
            },
            popupTitle() {
              var { promotionTag: t = "" } = this.promotionInfo;
              return t.split("，")[0] + "，可得以下权益";
            },
            sendInfo() {
              return this.promotionInfo.umpSendPromotionInfo || {};
            },
            score() {
              return this.sendInfo.score;
            },
            noPostage() {
              return this.promotionInfo.orderPostageFree;
            },
            availablePresents() {
              var { presents: t = [] } = this.sendInfo;
              return t.filter((t) => !!t.num);
            },
            hasPresent() {
              return this.availablePresents.length;
            },
            hasCoupon() {
              var { coupons: t = [] } = this.sendInfo;
              return t.length;
            },
            hasCouponsCode() {
              var { couponsCode: t = [] } = this.sendInfo;
              return t.length;
            },
          },
          watch: {
            show: {
              handler(t) {
                t
                  ? (!this.initialShow && (this.initialShow = !0),
                    this.displayTimer && clearTimeout(this.displayTimer))
                  : (this.displayTimer = setTimeout(() => {
                      this.initialShow = !1;
                    }, 600));
              },
              immediate: !0,
            },
          },
          mounted() {
            this.subCtxDataAndEvent();
          },
          methods: {
            subCtxDataAndEvent() {
              Object(s.d)(this, {
                "reward:show": (t) => {
                  var { show: e = !0, scene: i = "trade-buy" } = t;
                  (this.show = e),
                    (this.scene = i),
                    this.isCartScene
                      ? (this.promotionInfo =
                          this.recommendPromotionInfoList || {})
                      : (this.promotionInfo = this.state.promotionInfo || {});
                },
              });
            },
            handleClose() {
              this.show = !1;
            },
            onSwitchChange() {
              var { activityId: t, includeActivityType: e } =
                this.promotionInfo;
              this.isCartScene
                ? (this.ctx.event.emit("updateCartGoodsListWithActivity", {
                    selectedPromotions: { activityId: t, activityType: e },
                  }),
                  this.ctx.process.invoke("changeDiscountDetailVisible", !1))
                : this.ctx.process.invoke("setUmpActivity", [
                    { activityId: t, umpType: e, appointUse: !0 },
                  ]),
                (this.show = !1);
            },
          },
        },
        r = i("9ZMt");
      e.default = r.default.component(n);
    },
  })
);
