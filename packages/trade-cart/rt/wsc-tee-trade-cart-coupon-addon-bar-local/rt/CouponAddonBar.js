"use strict";
var r = require("~/r");
r(
  "rROs",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      rROs: function (o, t, e) {
        e.r(t);
        var i = e("eijD"),
          n = e("Fcif"),
          s = e("AGZf"),
          r = e("P09H"),
          l = e("T9F/"),
          d = e("VmHG"),
          a = {
            data() {
              return Object(n.a)(
                { loggers: {}, isDirty: !1, showPopup: !1 },
                Object(d.d)(this, [
                  "kdtId",
                  "couponAddOnData",
                  "originData",
                  "canUseCouponAddOn",
                  "themeColors",
                  "shopCart",
                  "addOnCopywriting",
                  "addOnPromotionStr",
                  "hexToRgb",
                  "couponNotFullyFetched",
                  "themeStyle",
                  "shopCart",
                  "coupons",
                  "hasCheckedGoods",
                ])
              );
            },
            created() {
              var o = this;
              return Object(i.a)(function* () {
                var t,
                  e =
                    (yield null == (t = o.ctx.lambdas) || null == t.getUserInfo
                      ? void 0
                      : t.getUserInfo()) || {},
                  { buyerId: i } = e;
                (o.loggers = Object(l.a)({ buyerId: i, Logger: o.ctx.logger })),
                  o.initActions(),
                  o.initLogger(o.loggers);
              })();
            },
            destroyed() {
              var o;
              this.clearCouponOriginOrder(),
                null == (o = this.loggers) || null == o.destroy || o.destroy();
            },
            methods: {
              initActions() {
                Object(d.b)(this, [
                  "clearCouponOriginOrder",
                  "getCouponAddon",
                  "initLogger",
                ]);
              },
              updateSelectGoods() {
                for (
                  var o, t, e = arguments.length, i = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  i[n] = arguments[n];
                return null == (o = this.ctx) || null == (t = o.process)
                  ? void 0
                  : t.invokePipe("updateSelectGoods", ...i);
              },
              onClickItem(o) {
                var t,
                  { item: e, coupon: i } = o,
                  { selectState: n } = e;
                null == (t = this.loggers) ||
                  null == t.logGoodsClick ||
                  t.logGoodsClick({
                    goodsId: e.goodsId,
                    activityId: i.activityId,
                    type: n ? "unselect" : "select",
                  }),
                  this.updateSelectGoods({
                    type: n ? "remove" : "add",
                    goods: e,
                  }).then(() => {
                    this.ctx.event.emit("updateCartGoodsList");
                  });
              },
              onPopupClose() {
                (this.showPopup = !1),
                  this.clearCouponOriginOrder(),
                  this.couponNotFullyFetched &&
                    Object(s.a)("你有可用的优惠券还未领取");
              },
              onPopupOpen() {
                var o, t, e, i;
                this.couponAddOnData.actionTagStr &&
                  (null == (o = this.loggers) ||
                    null == o.logGatherBarClick ||
                    o.logGatherBarClick(
                      null == (t = this.couponAddOnData)
                        ? void 0
                        : t.actionTagStr
                    ),
                  null == (e = this.loggers) ||
                    null == e.batchLogGoodsExpo ||
                    e.batchLogGoodsExpo(
                      null == (i = this.couponAddOnData)
                        ? void 0
                        : i.addOnVoucherDetailDTOList
                    ),
                  (this.showPopup = !0),
                  (this.isDirty = !0));
              },
              handleSendCoupon(o) {
                Object(r.b)({ alias: o.alias })
                  .then((t) => {
                    var e,
                      i = null == t ? void 0 : t.couponId;
                    null == (e = this.loggers) ||
                      null == e.logCouponGetClick ||
                      e.logCouponGetClick({
                        activityId: o.activityId,
                        couponId: i,
                      }),
                      i
                        ? (Object(s.a)("领取成功"),
                          this.getCouponAddon(this.kdtId))
                        : Object(s.a)(t.msg || "领取失败");
                  })
                  .catch((o) => {
                    Object(s.a)(o.msg || "领取失败");
                  });
              },
              toNavigate(o) {
                this.ctx.process.invoke("navigateFromCart", o);
              },
            },
          },
          c = e("9ZMt");
        t.default = c.default.component(a);
      },
    }
  )
);
