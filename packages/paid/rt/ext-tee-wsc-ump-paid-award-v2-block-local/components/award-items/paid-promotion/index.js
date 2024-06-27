"use strict";
var r = require("~/r");
r(
  "oItL",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      oItL: function (e, t, o) {
        o.r(t);
        var i = o("Fcif"),
          r = o("AGZf"),
          a = o("taYb"),
          n = o("2wjL"),
          c = o("YAk7"),
          s = o("Ekqs"),
          l = [
            c.f.Tradeincard,
            c.f.Couponpackage,
            c.f.Promocode,
            c.f.Present,
            c.f.Wheel,
            c.f.ActivitiesQrCode,
          ],
          p = [c.f.Survey, c.f.Feature, c.f.Seller, c.f.Seniorseller],
          u = {
            name: "AwardPaidPromotion",
            props: {
              promotionInfo: { type: Object, default: () => ({}) },
              themeColor: String,
              orderNo: String,
              navigateTo: Function,
              isWxReceipt: { type: Boolean, default: () => !1 },
              returnUrl: { type: String, default: () => "" },
              cloudConfig: { type: Object, default: () => ({}) },
              isSkyline: { type: Boolean, default: !1 },
            },
            data: () => ({
              PROMOTION_TYPES: c.f,
              ImageShow: "imageShow",
              DEFAULT_SHOW: "default-show",
            }),
            computed: {
              customPic() {
                var e;
                return null == (e = this.promotionInfo) ? void 0 : e.imgUrl;
              },
              isCustomActivityQrcode() {
                var { promotionType: e } = this.promotionInfo || {};
                return (
                  e === c.f.ActivitiesQrCode && "imageShow" === this.currentType
                );
              },
              currentType() {
                var { promotionType: e, imageType: t } = this.promotionInfo;
                return e === l.activitiesQrCode
                  ? c.f.ActivityCode
                  : l.includes(e) && Object(c.l)(t)
                  ? e
                  : Object(c.l)(t) && p.includes(e)
                  ? "default-show"
                  : "imageShow";
              },
            },
            mounted() {
              var { promotionType: e, imageType: t } = this.promotionInfo;
              [c.f.Tradeincard, c.f.Couponpackage, c.f.Promocode].includes(e) ||
                Object(s.a)({
                  type: e,
                  isCustom: !Object(c.l)(t),
                  track: "view",
                  logFn: this.pureLog,
                });
            },
            methods: {
              pureLog(e) {
                this.$emit("log-attach", e);
              },
              afterContact() {
                var { promotionType: e, imageType: t } = this.promotionInfo;
                Object(s.a)({
                  type: e,
                  isCustom: !Object(c.l)(t),
                  track: "click",
                  logFn: this.pureLog,
                });
              },
              clickImage() {
                var {
                  promotionType: e,
                  detailUrl: t,
                  imageType: o,
                } = this.promotionInfo;
                if (
                  (Object(s.a)({
                    type: e,
                    isCustom: !Object(c.l)(o),
                    track: "click",
                    logFn: this.pureLog,
                  }),
                  this.isWxReceipt || this.isCustomActivityQrcode)
                )
                  this.navigateTo(t);
                else {
                  var l = c.g[e];
                  l
                    ? l(
                        Object(i.a)(
                          { orderNo: this.orderNo, detailUrl: t },
                          a.a.toCamelCase(n.a.getAll(t))
                        )
                      )
                    : Object(r.a)(e + "跳转异常，请稍后重试");
                }
              },
            },
            ud: !0,
          },
          m = o("9ZMt");
        t.default = m.default.component(u);
      },
    }
  )
);
