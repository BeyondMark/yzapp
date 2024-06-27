"use strict";
var r = require("~/r");
r(
  "emZT",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      emZT: function (e, t, o) {
        o.r(t);
        var i = o("Fcif"),
          s = o("YeA1"),
          n = o("AGZf"),
          p = o("VmHG"),
          a = o("sAuq"),
          u = {
            name: "coupon-popup",
            data() {
              return (
                (this.firstPopup = !0),
                Object(i.a)(
                  {
                    kdtId: 0,
                    sendedCoupons: [],
                    couponList: [],
                    themeColors: {},
                    displayType: "flat",
                    panelBgStyle: "",
                    valuesColorStyle: "",
                  },
                  Object(p.d)(this, ["couponPopupShow"])
                )
              );
            },
            computed: {
              avlCouponList() {
                return this.couponList.map((e) =>
                  Object(i.a)({}, e, {
                    isAvailable: !this.sendedCoupons.every((t) => t !== e.id),
                    isYuanUnit: "元" === e.unit_copywriting,
                    showDecimal:
                      e.value_copywriting.includes(".") &&
                      +e.value_copywriting.split(".")[0],
                    couponPriceDecimal: e.value_copywriting.split("."),
                  })
                );
              },
            },
            watch: {
              couponPopupShow(e) {
                e ? this.showPopup() : this.handleClose();
              },
            },
            created() {
              Object(s.b)(this, ["kdtId", "themeCSS", "couponList"]),
                Object(s.b)(this, {
                  themeColors: (e) => {
                    var t = this.ctx.lambdas.hexToRgb(e.general);
                    (e["general-alpha10"] =
                      "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", .1)"),
                      (this.themeColors = e);
                  },
                }),
                Object(p.b)(this, ["changeCouponPopupShow"]);
            },
            methods: {
              handleClose() {
                0 === this.sendedCoupons.length &&
                  Object(n.a)("你有可用优惠券还未领取");
              },
              showPopup() {
                this.firstPopup &&
                  ((this.firstPopup = !1),
                  this.couponList.forEach((e) => {
                    this.ctx.logger &&
                      this.ctx.logger.log({
                        et: "view",
                        ei: "view",
                        en: "领券列表的券曝光",
                        params: {
                          item_type: "coupon",
                          item_id: e.id,
                          component: "takeCoupon",
                          kdt_id: this.kdtId,
                        },
                      });
                  }));
              },
              handleSendCoupon(e) {
                var t;
                null == (t = this.ctx.logger) ||
                  t.log({
                    et: "click",
                    ei: "take_coupon_click_take",
                    en: "领券列表的券点击领取",
                    params: {
                      item_type: "coupon",
                      item_id: e.id,
                      component: "takeCoupon",
                      kdt_id: this.kdtId,
                    },
                  }),
                  Object(a.b)({ alias: e.alias })
                    .then((t) => {
                      null != t && t.couponId
                        ? (Object(n.a)("领取成功"),
                          (this.sendedCoupons = [...this.sendedCoupons, e.id]))
                        : Object(n.a)(t.msg || "领取失败");
                    })
                    .catch((e) => {
                      Object(n.a)(e.msg || "领取失败");
                    });
              },
              handleAuthorizeNext(e) {
                this.handleSendCoupon(e);
              },
            },
          },
          c = o("9ZMt");
        t.default = c.default.component(u);
      },
    }
  )
);
