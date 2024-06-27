"use strict";
var r = require("~/r");
r(
  "pvyC",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      pvyC: function (e, o, t) {
        t.r(o);
        var n = t("Fcif"),
          i = t("AGZf"),
          c = t("YeA1"),
          r = t("9ZMt"),
          u = t("QNtA"),
          a = t.n(u),
          s = t("jmjq"),
          l = t.n(s),
          d = t("eUvf"),
          p = t("jvKq"),
          h = t("EfyL"),
          m = {
            name: "auto-send-coupon-popup",
            data() {
              var e, o;
              return {
                isReceived: !1,
                visible: !1,
                newAwardInfo: {},
                loading: !1,
                couponTakenId: 0,
                curCouponValue: "",
                kdtId: 0,
                downTime: 0,
                validStartTime: 0,
                themeColors: {},
                orderNo: "",
                loggerSpm:
                  null == this ||
                  null == (e = this.ctx) ||
                  null == (o = e.logger)
                    ? void 0
                    : o.getPageSpm(),
                isSkyline: !1,
              };
            },
            computed: {
              recommendCoupon() {
                var e,
                  o,
                  t,
                  {
                    recommendItemDTOList: i = [],
                    startAt: c,
                    activityTypeGroup: r,
                    endAt: u,
                    valuesDesc: a,
                    unitDesc: s,
                    preDesc: l,
                    thresholdCopywriting: d,
                    validTimeCopywriting: p,
                    id: h,
                    receiveStatus: m,
                    expireDate: v,
                    alg: g,
                    couponId: C,
                  } = null !=
                  (e =
                    null == (o = this.newAwardInfo)
                      ? void 0
                      : o.recommendCoupon)
                    ? e
                    : {};
                return {
                  couponInfo: Object(n.a)(
                    {
                      startAt: c,
                      endAt: u,
                      preDesc: l,
                      valuesDesc: a,
                      unitDesc: s,
                      thresholdCopywriting: d,
                      validTimeCopywriting: p,
                      activityTypeGroup: r,
                      id: h,
                      receiveStatus: m,
                      expireDate: this.downTime || v,
                      validStartTime: this.validStartTime,
                      alg: g,
                      couponId: C,
                    },
                    this.curCouponText
                  ),
                  recommendItems: (null !=
                  (t = null == i ? void 0 : i.recommendItemDTOList)
                    ? t
                    : []
                  ).map((e) => ((e.algId = i.algId), e)),
                };
              },
              curAuthScene() {
                var e, o;
                return Object(d.c)(
                  null == (e = this.recommendCoupon) ||
                    null == (o = e.couponInfo)
                    ? void 0
                    : o.activityTypeGroup
                )
                  ? "get_coupon"
                  : "get_discount_code";
              },
              curCouponText() {
                return "" === this.curCouponValue
                  ? {}
                  : {
                      preDesc: "",
                      unitDesc: "",
                      valuesDesc: this.curCouponValue,
                    };
              },
              couponBg() {
                return (
                  "background: linear-gradient(to bottom, " +
                  this.themeColors["ump-start-bg"] +
                  ", " +
                  this.themeColors["ump-end-bg"] +
                  ")"
                );
              },
            },
            watch: {
              newAwardInfo: {
                immediate: !0,
                handler(e) {
                  var { recommendCoupon: o } = e;
                  o &&
                    ((this.isReceived = o.receiveStatus === h.c.RECEIVED),
                    (this.couponTakenId = o.couponId));
                },
              },
            },
            mounted() {},
            created() {
              Object(c.b)(this, ["kdtId", "isSkyline"]),
                this.ctx.event.listen(
                  "openAutoSendCouponPopup",
                  this.handleShow
                ),
                (this.unwatchNewAwardInfo = this.ctx.watch(
                  "newAwardInfo",
                  (e) => {
                    this.newAwardInfo = e;
                  }
                )),
                (this.unwatchThemeColors = this.ctx.watch(
                  "themeColors",
                  (e) => {
                    this.themeColors = e;
                  }
                )),
                (this.orderNoUnWatch = this.ctx.watch("orderNo", (e) => {
                  this.orderNo = e;
                }));
            },
            destroyed() {
              this.ctx.event.remove("openAutoSendCouponPopup"),
                this.unwatchNewAwardInfo && this.unwatchNewAwardInfo(),
                this.unwatchThemeColors && this.unwatchThemeColors(),
                this.orderNoUnWatch && this.orderNoUnWatch();
            },
            methods: {
              autoSendCoupon() {
                i.a.loading(),
                  Object(p.b)()
                    .then((e) => {
                      var o, t;
                      e.every((e) => e.scene !== this.curAuthScene)
                        ? this.takenCoupon()
                        : null == (o = (t = this.ctx.lambdas).getUserInfo) ||
                          o.call(t).then((e) => {
                            e.mobile && e.nickname && this.takenCoupon();
                          });
                    })
                    .catch(() => null)
                    .finally(() => {
                      i.a.clear(), (this.visible = !0);
                    });
              },
              handleShow() {
                var e, o, t, n;
                this.isReceived ? (this.visible = !0) : this.autoSendCoupon(),
                  this.ctx.logger.log({
                    et: "view",
                    ei: "view_rcmd_coupon_pop",
                    en: "自动推券弹窗曝光",
                    params: {
                      component: "rcmd_coupon_pop",
                      orderNo: this.orderNo,
                      item_type: "coupon",
                      item_id:
                        (null == (e = this.recommendCoupon) ||
                        null == (o = e.couponInfo)
                          ? void 0
                          : o.couponId) || "",
                      recommend_name: "优惠券推荐",
                      banner_id: Object(d.b)(this.loggerSpm),
                      alg:
                        (null == (t = this.recommendCoupon) ||
                        null == (n = t.couponInfo)
                          ? void 0
                          : n.alg) || "",
                    },
                  });
              },
              handleClose() {
                (this.visible = !1),
                  this.ctx.event.emit("closeAutoOpenPopup", {
                    isRealClose: !0,
                  }),
                  this.ctx.logger.log({
                    et: "click",
                    ei: "click_close_pop",
                    en: "关闭弹窗按钮点击",
                    params: {
                      component: "rcmd_coupon_pop",
                      orderNo: this.orderNo,
                    },
                  });
              },
              clickNowUse() {
                var e, o, t, n, c, u;
                Object(p.a)({
                  couponId: this.couponTakenId,
                  groupType:
                    2 ===
                    (null == (e = this.recommendCoupon) ||
                    null == (o = e.couponInfo)
                      ? void 0
                      : o.activityTypeGroup)
                      ? "code"
                      : "card",
                })
                  .then((e) => {
                    var { h5Url: o, weappUrl: t, isSwitchTab: n } = e,
                      i = "web" === r.default.getEnv() ? o : t;
                    if (n) return this.ctx.dmc.switchTab(i);
                    this.ctx.dmc.navigate(i);
                  })
                  .catch(() => Object(i.a)("跳转异常，请稍后重试")),
                  this.ctx.logger.log({
                    et: "click",
                    ei: "click_use",
                    en: "立即使用按钮点击",
                    params: {
                      component: "rcmd_coupon_pop",
                      orderNo: this.orderNo,
                      item_type: "coupon",
                      item_id:
                        (null == (t = this.recommendCoupon) ||
                        null == (n = t.couponInfo)
                          ? void 0
                          : n.couponId) || "",
                      recommend_name: "优惠券推荐",
                      banner_id: Object(d.b)(this.loggerSpm),
                      alg:
                        (null == (c = this.recommendCoupon) ||
                        null == (u = c.couponInfo)
                          ? void 0
                          : u.alg) || "",
                    },
                  });
              },
              handleLogin() {
                this.takenCoupon();
              },
              takenCoupon() {
                var e, o, t, n;
                (this.loading = !0),
                  Object(p.c)({
                    activityId: this.recommendCoupon.couponInfo.id,
                  })
                    .then((e) => {
                      var o,
                        t,
                        n = h.b[e.status];
                      if (n) throw new Error(n);
                      e.status === h.a.HAS_FETCHED &&
                        Object(i.a)("你已经领取过了"),
                        (this.isReceived = !0),
                        (this.couponTakenId = e.voucherIdentity.couponId),
                        (null == (o = this.recommendCoupon.couponInfo) ||
                        null == (t = o.preDesc)
                          ? void 0
                          : t.length) > 0 &&
                          (this.curCouponValue = +l()(e.value, !0, !1)),
                        (this.downTime = a()(e.validEndTime).getTime()),
                        (this.validStartTime = a()(e.validStartTime).getTime());
                    })
                    .catch((e) => {
                      Object(i.a)(e.msg || e.message || "领取失败");
                    })
                    .finally(() => {
                      this.loading = !1;
                    }),
                  this.ctx.logger.log({
                    et: "click",
                    ei: "click_receive",
                    en: "立即领取按钮点击",
                    params: {
                      component: "rcmd_coupon_pop",
                      orderNo: this.orderNo,
                      item_type: "coupon",
                      item_id:
                        (null == (e = this.recommendCoupon) ||
                        null == (o = e.couponInfo)
                          ? void 0
                          : o.couponId) || "",
                      recommend_name: "优惠券推荐",
                      banner_id: Object(d.b)(this.loggerSpm),
                      alg:
                        (null == (t = this.recommendCoupon) ||
                        null == (n = t.couponInfo)
                          ? void 0
                          : n.alg) || "",
                    },
                  });
              },
            },
          };
        o.default = r.default.component(m);
      },
    }
  )
);
