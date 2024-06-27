"use strict";
var r = require("~/r");
r(
  "Ilzk",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      Ilzk: function (e, i, o) {
        o.r(i);
        var t = o("Fcif"),
          n = o("AGZf"),
          s = o("YAk7"),
          r = o("eaQp"),
          a = o("jmjq"),
          c = o.n(a),
          d = o("QNtA"),
          u = o.n(d),
          l = o("YeA1"),
          h = {
            name: "CouponCard",
            props: {
              info: { type: Object, default: () => ({}) },
              themeColor: String,
              orderNo: String,
              kdtId: String,
              navigateTo: Function,
              isWxReceipt: { type: Boolean, default: () => !1 },
              isSkyline: Boolean,
            },
            data: () => ({
              isReceived: !1,
              downTime: 0,
              curCouponValue: "",
              timeData: {},
              couponTakenId: 0,
              loading: !1,
              memorizedGoodsAlias: [],
            }),
            computed: {
              themeBackground5Style: () =>
                "background: var(--ump-coupon-bg, #f2f2ff);",
              curCouponText() {
                return "" === this.curCouponValue
                  ? this.curCoupon
                  : Object(t.a)({}, this.curCoupon, {
                      preDesc: "",
                      valuesDesc: this.curCouponValue + "",
                      unitDesc: "元",
                    });
              },
              couponInfo() {
                return this.info.coupon;
              },
              showCouponInfo() {
                var e;
                return (
                  !(null != (e = this.info.goods) && e.length) &&
                  this.couponInfo
                );
              },
              goodsInfo() {
                var e,
                  i,
                  o =
                    null != (e = null == (i = this.info.goods) ? void 0 : i[0])
                      ? e
                      : {},
                  n = +c()(o.price, !0, !1),
                  s = this.isNotUndefined(o.preferentialPrice)
                    ? +c()(o.preferentialPrice, !0, !1)
                    : o.curPrice;
                return Object(t.a)({}, o, { price: n, curPrice: s });
              },
              showGoodsInfo() {
                var e;
                return (
                  1 === (null == (e = this.info.goods) ? void 0 : e.length)
                );
              },
              curGoods() {
                var { goods: e = [] } = this.info,
                  i = e.slice(0, 3).map((e) => {
                    var i = Object(t.a)({}, e, {
                      price: +c()(e.price, !0, !1),
                    });
                    return (
                      this.isNotUndefined(i.preferentialPrice) &&
                        (i.curPrice = +c()(e.preferentialPrice, !0, !1)),
                      i
                    );
                  });
                if (
                  (i.forEach((e) => {
                    null != e &&
                      e.alias &&
                      !this.memorizedGoodsAlias.includes(e.alias) &&
                      (this.memorizedGoodsAlias.push(e.alias),
                      this.$emit("pure-log", {
                        et: "view",
                        ei: this.info.isRecommend
                          ? "view_rcmd_coupon_goods_recommend"
                          : "view_goods_recommend",
                        en: this.info.isRecommend
                          ? "推荐商品曝光"
                          : "支付有礼送券/码推荐商品曝光",
                        params: { goods_alias: e.alias },
                      }));
                  }),
                  i.length < 3)
                ) {
                  var o = new Array(3 - i.length).fill({});
                  return [...i, ...o];
                }
                return i;
              },
              curCoupon() {
                var e;
                return null != (e = this.info.coupon) ? e : {};
              },
              showDownTime() {
                return (
                  this.isReceived &&
                  this.downTime < 1728e5 &&
                  0 !== this.downTime
                );
              },
              downTimeStr() {
                var {
                  days: e,
                  hours: i,
                  minutes: o,
                  seconds: t,
                } = this.timeData;
                if (e > 1) return "";
                var n = [
                  e + "天",
                  this.timeFormat(i) +
                    ":" +
                    this.timeFormat(o) +
                    ":" +
                    this.timeFormat(t),
                ];
                return 0 === e && n.shift(), "仅剩" + n.join("");
              },
            },
            watch: {
              info: {
                immediate: !0,
                handler(e) {
                  var i;
                  (this.isReceived = e.coupon.receiveStatus === s.h.RECEIVED),
                    (this.couponTakenId = e.coupon.couponId),
                    (this.downTime =
                      (null != (i = e.coupon.expireAt) ? i : Date.now()) -
                      Date.now());
                },
              },
            },
            methods: {
              isNotUndefined: (e) => void 0 !== e,
              clickGoods(e) {
                if (e.alias) {
                  this.$emit("pure-log", {
                    et: "click",
                    ei: this.info.isRecommend
                      ? "click_rcmd_coupon_goods_recommend"
                      : "click_goods_recommend",
                    en: this.info.isRecommend
                      ? "推荐商品点击"
                      : "支付有礼送券/码推荐商品点击",
                    params: { goods_alias: e.alias },
                  });
                  var { dmc: i } = Object(l.a)();
                  i.navigate("GoodsDetail", { alias: e.alias });
                }
              },
              clickBtn() {
                if (
                  (this.$emit("log-attach", this.isReceived), this.isReceived)
                )
                  Object(r.a)({
                    couponId: this.couponTakenId,
                    groupType:
                      2 === this.info.coupon.activityTypeGroup
                        ? "code"
                        : "card",
                    kdtId: this.kdtId,
                  })
                    .then((e) => {
                      var { weappUrl: i, isSwitchTab: o, h5Url: t } = e,
                        { dmc: n } = Object(l.a)();
                      n[o ? "reLaunch" : "navigate"](i);
                    })
                    .catch(() => Object(n.a)("跳转异常，请稍后重试"));
                else {
                  this.loading = !0;
                  var e = this.info.isRecommend ? r.d : r.e,
                    i = this.info.isRecommend
                      ? { activityId: this.info.coupon.id }
                      : { activityId: this.info.activityId };
                  e(
                    Object(t.a)({}, i, {
                      orderNo: this.orderNo,
                      kdtId: this.kdtId,
                    })
                  )
                    .then((e) => {
                      var i,
                        o,
                        t = s.c[e.status];
                      if (t) throw new Error(t);
                      e.status === s.b.HAS_FETCHED &&
                        Object(n.a)("你已经领取过了"),
                        (this.couponTakenId = e.voucherIdentity.couponId),
                        (this.isReceived = !0),
                        (null == (i = this.curCoupon) || null == (o = i.preDesc)
                          ? void 0
                          : o.length) > 0 &&
                          (this.curCouponValue = +c()(e.value, !0, !1)),
                        (this.downTime =
                          u()(e.validEndTime).getTime() - Date.now());
                    })
                    .catch((e) => {
                      Object(n.a)(e.msg || e.message || "领取失败");
                    })
                    .finally(() => {
                      this.loading = !1;
                    });
                }
              },
              timeFormat: (e) => (e < 10 ? "0" + e : e),
              onChange(e) {
                this.timeData = e;
              },
            },
            ud: !0,
          },
          m = o("9ZMt");
        i.default = m.default.component(h);
      },
    }
  )
);
