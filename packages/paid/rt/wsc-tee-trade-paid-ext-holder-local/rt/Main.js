"use strict";
var r = require("~/r");
r(
  "L+62",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      "L+62": function (i, t, e) {
        e.r(t);
        var s = e("9ZMt"),
          o = e("YeA1"),
          a = e("NHEX"),
          r = e.n(a),
          n = e("72lf"),
          d = e("mztD"),
          c = getApp(),
          h = null,
          l = {
            data: () => ({
              showExtHolder: !1,
              hasPaid: !1,
              showOfficialAccount: !1,
              inSourcingFission: {},
              canUseTradeUmpV1: !1,
              isWholesaleOrder: !1,
              weappImg: Object(d.a)(
                "public_files/53007f232f165a057088c0cfe1ccd606.png"
              ),
              webImg: "",
              paidPromotion: {},
              fissionCoupon: {},
              widgetGuideCouponBlockInit: !1,
              widgetPaidSubscriptionMsgInit: !1,
              isWxReceipt: !1,
              showMask: !1,
              realHeight: 0,
              maskStyle: "",
              kdtId: 0,
              returnUrl: "",
            }),
            created() {
              var i = this;
              Object(o.b)(this, [
                "hasPaid",
                "canUseTradeUmpV1",
                "isWxReceipt",
                "kdtId",
                "returnUrl",
                "showExtHolder",
              ]),
                (this.widgetPaidSubscriptionMsgInit =
                  !!this.ctx.widgets.PaidSubscriptionMsg),
                (this.widgetGuideCouponBlockInit =
                  !!this.ctx.widgets.GuideCouponBlock),
                Object(o.b)(
                  this,
                  {
                    payResult: (i) => {
                      (this.inSourcingFission = Object(n.a)(i)),
                        (this.fissionCoupon = r()(
                          i,
                          "shopCoupons[0].orderCoupons[0]",
                          {}
                        )),
                        (this.isWholesaleOrder = r()(
                          i,
                          "isWholesaleOrder",
                          !1
                        )),
                        i.weappImg && (this.weappImg = i.weappImg),
                        i.paidPromotion &&
                          (this.paidPromotion = i.paidPromotion);
                    },
                    realHeight: (i) => {
                      (this.realHeight = i || 0),
                        i && this.getPaidActionHeight();
                    },
                  },
                  { isSetData: !1 }
                ),
                c.getShopConfigData().then(function (t) {
                  void 0 === t && (t = {});
                  var e =
                    s.default.$native.canIUse("official-account") &&
                    1 == +t.show_follow_mp_after_pay;
                  i.showOfficialAccount = e;
                });
            },
            mounted() {
              this.$nextTick(() => {
                this.getPaidActionHeight();
              });
            },
            methods: {
              getPaidActionHeight() {
                clearTimeout(h),
                  (h = setTimeout(() => {
                    this.showMask &&
                      this.ctx.process.invoke(
                        "logger",
                        "view",
                        "show_morePreferential",
                        "查看更多优惠曝光",
                        { si: this.kdtId, kdt_id: this.kdtId }
                      );
                  }, 50));
              },
              expandAll() {
                this.ctx.process.invoke(
                  "logger",
                  "click",
                  "click_morePreferential",
                  "点击查看更多优惠",
                  { si: this.kdtId, kdt_id: this.kdtId }
                ),
                  this.ctx.process.invoke("navigateTo", this.returnUrl);
              },
            },
            ud: !0,
          };
        t.default = s.default.component(l);
      },
    }
  )
);
