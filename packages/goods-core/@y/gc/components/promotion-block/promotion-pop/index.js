"use strict";
var r = require("~/r");
r(
  "HPqt",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      HPqt: function (t, o, i) {
        i.r(o);
        var e = i("Fcif"),
          s = i("9ZMt"),
          a = i("NHEX"),
          n = i.n(a),
          p = i("US/N"),
          h = i("ONqW"),
          r = i("+66q"),
          c = i("YeA1"),
          u = i("tuFO"),
          l = i.n(u),
          d = i("AGZf"),
          m = i("Wzyf"),
          C = i("mC8k"),
          g = i("xJ+J"),
          v = { OPTIMAL: "optimal", UMP: "ump" },
          w = getApp(),
          b = !1;
        function P(t) {
          return {
            alias: t.alias,
            got: t.disabled,
            hasShowcase: !1,
            headValue: t.valueCopywriting,
            unit: t.unitCopywriting,
            condition: t.useThresholdCopywriting,
            extraCondition: t.upperLimitCopywriting,
            title: t.title,
            valid: t.validTimeCopywriting,
            key: "",
            id: t.id,
            actionText: t.disabled ? "已领取" : "立即领取",
            tag: "",
            disabled: t.disabled,
            isNewcomerVoucher: t.isNewcomerVoucher,
            overlayCopywriting: t.overlayCopywriting,
          };
        }
        var y = {
          props: {
            show: { type: Boolean, default: !1 },
            goodsPromotion: Array,
            showGoodsCoupon: Boolean,
            promotionActivity: Object,
            couponList: Array,
            kdtId: Number,
            panelSource: Number,
            goodsEstimatePriceData: Object,
            goodsSpe: Number,
            isCoupon: Boolean,
            showEstimatePrice: Boolean,
            templates: Array,
            showRuleBtn: { type: Boolean, default: !1 },
          },
          data: () => ({
            optimalCouponList: [],
            umpCouponList: [],
            COUPON_TYPE: v,
            isShowMore: !1,
            moreText: {},
            showCashBackRulePop: !1,
            showGuidePop: !1,
            isCashback: !1,
            isCashbackPro: !1,
            clickPromotion: {},
            cashbackProData: {},
            cashbackProTitle: "",
            estimateCouponList: [],
            showAllOptimalCoupon: !1,
            showComp: !1,
            showActivityRule: !1,
          }),
          computed: {
            hasCouponActivity() {
              return !!n()(this, "promotionActivity.coupon");
            },
            preferentialPrice() {
              return n()(
                this,
                "promotionActivity.coupon.voucherPreferenceCopyWriting",
                ""
              );
            },
            optimalPreferentialPrice() {
              var t = this.preferentialPrice.match(/￥\d+(\.\d+)?.*/g);
              return t ? t[0] : "";
            },
            optimalCouponShowList() {
              if (!this.showGoodsCoupon || !this.hasCouponActivity) return [];
              return !this.umpCouponShowList.length || this.showAllOptimalCoupon
                ? this.optimalCouponList.map(P)
                : this.optimalCouponList.slice(0, 1).map(P);
            },
            umpCouponShowList() {
              if (!this.showGoodsCoupon) return [];
              if (this.hasCouponActivity) {
                var t = this.optimalCouponList.reduce(
                  (t, o) => ((t[o.id] = !0), t),
                  {}
                );
                return (this.umpCouponList || [])
                  .filter((o) => !t[o.id])
                  .slice(0, 20)
                  .map(P);
              }
              return (this.umpCouponList || [])
                .slice(0, 20)
                .map(P)
                .map((t, o) =>
                  Object(e.a)({}, t, Object(g.a)(t, o, this.panelSource))
                );
            },
            estimateCouponShowList() {
              return this.showGoodsCoupon
                ? (this.estimateCouponList || []).map(P)
                : [];
            },
            showOptimalCouponMoreBtn() {
              return (
                (this.optimalCouponList || []).length > 1 &&
                this.umpCouponShowList.length &&
                !this.showAllOptimalCoupon
              );
            },
            formatedGoodsPromotion() {
              return (this.goodsPromotion || [])
                .map((t) => Object(m.a)(t))
                .slice(0, 4)
                .map((t, o) =>
                  Object(e.a)({}, t, Object(g.b)(t, o, this.panelSource))
                );
            },
            hasMemberGuide() {
              var { formatedGoodsPromotion: t } = this;
              return !!t.filter(
                (t) => t.matchIdentityType || 0 === t.matchIdentityType
              ).length;
            },
            ruleBtnName() {
              return (this.showActivityRule ? "收起" : "展示") + "活动规则";
            },
          },
          watch: {
            couponList(t) {
              this.umpCouponList = t;
            },
            isCashback(t) {
              t &&
                ((this.cashbackProTitle = this.getCashbackProTitle(
                  this.clickPromotion
                )),
                (this.cashbackProData = {
                  promotion: this.clickPromotion,
                  cashbackProTitle: this.cashbackProTitle,
                }));
            },
            show(t) {
              t
                ? ((this.showComp = !0),
                  Object(h.a)().log({
                    et: "view",
                    ei: "promotion_panel_view",
                    en: "优惠促销面板曝光",
                    params: {
                      panel_source: this.panelSource,
                      component: "promotion_panel",
                    },
                  }),
                  setTimeout(() => {
                    this.intersection = Object(C.a)(this)
                      .relativeTo(".goods-promotion__popup-wrapper", {
                        top: -80,
                        bottom: -80,
                        threshold: 1,
                      })
                      .observe(".J-viewlog");
                  }, 300))
                : this.intersection && this.intersection.disconnect();
            },
            goodsEstimatePriceData: {
              handler(t) {
                this.estimateCouponList = [
                  Object(e.a)({}, t.estimatedPriceCoupon),
                ];
              },
              immediate: !0,
              deep: !0,
            },
          },
          created() {
            (this.umpCouponList = this.couponList || []),
              (this.optimalCouponList = this.getOptimalCouponList());
          },
          methods: {
            unfoldOptimalCouponList() {
              this.showAllOptimalCoupon = !0;
            },
            closePop() {
              (this.showAllOptimalCoupon = !1), this.$emit("close");
            },
            openPop() {
              this.$emit("open");
            },
            getOptimalCouponList() {
              var { coupon: t = {} } = this.promotionActivity,
                { couponPreferenceModels: o = [] } = t;
              return o.slice(0, 20).map((t) => ((t.disabled = !1), t));
            },
            invokeSubscribeDialog(t, o) {
              var { templates: i = [] } = this,
                e = w.globalData.wxShopGoodsDetailCoupon;
              i.length > 0 && !e
                ? this.$emit("handleShowSubscribeGuide", {
                    templates: i,
                    index: t,
                    umpType: o,
                  })
                : this.handleCouponClick(t, o);
            },
            handleUmpCouponClick(t) {
              this.invokeSubscribeDialog(t, v.UMP);
            },
            handleOptimalCouponClick(t) {
              this.invokeSubscribeDialog(t, v.OPTIMAL);
            },
            handleCouponClick(t, o) {
              var i = null;
              (i =
                o === v.UMP
                  ? this.umpCouponShowList[t]
                  : this.optimalCouponShowList[t]) &&
                !i.disabled &&
                (this.handleGetCoupon({ id: i.id, alias: i.alias, type: o }),
                i.clickLog && Object(h.a)().log(i.clickLog));
            },
            showPopUpMore(t) {
              (this.moreText = t), (this.isShowMore = !0);
            },
            hidePopUpMore() {
              this.isShowMore = !1;
            },
            getCashbackProTitle() {
              var { key: t } = this.clickPromotion,
                { cashbackType: o } = this.promotionActivity[t];
              return "storedValue" === o ? "储值金返还" : "返现";
            },
            onPromotionClick(t) {
              var o = this.goodsPromotion[t];
              if (((this.clickPromotion = o), o)) {
                var i = this.formatedGoodsPromotion[t],
                  { clickLog: s } = i;
                Object(h.a)().log(s);
                var { more: a, url: n, key: p, alias: u } = o;
                if ("cashbackPro" === p || "cashBack" === p)
                  return (
                    (this.isCashback = !0),
                    (this.isCashbackPro = "cashbackPro" === p),
                    this.closePop(),
                    this.showCashBackRule(o)
                  );
                if (a) {
                  if ("postage" === a.key) {
                    var l,
                      d =
                        (null == (l = this.promotionActivity)
                          ? void 0
                          : l.meetReduce) || {};
                    this.showPopUpMore(
                      Object(e.a)({ meetReducePostageData: d }, a, {
                        title: "运费详情",
                        isShowMeetReducePostage: !0,
                      })
                    );
                  } else this.showPopUpMore(a);
                } else
                  [r.g.MEET_REDUCE, r.g.PRESENT].includes(p)
                    ? this.openActivity("meetReduce", "MeetReduce")
                    : p === r.g.MEET_SEND
                    ? this.openActivity(p, "MeetReduce")
                    : p === r.g.SECOND_HALF_DISCOUNT
                    ? this.openActivity(p, "SecondHalf")
                    : p === r.g.BALE
                    ? this.openActivity(p, "PackageBuy")
                    : p === r.g.PLUS_BUY && this.openActivity(p, "PlusBuy"),
                    [r.g.CARRIAGE_DISCOUNT, r.g.POSTAGE].includes(p) &&
                      (n
                        ? Object(c.a)().dmc.navigate(n)
                        : u &&
                          Object(c.a)().dmc.navigate("MeetReduce", {
                            activityId: u,
                            alias: u,
                            kdtId: this.kdtId || 0,
                          }));
              }
            },
            openActivity(t, o) {
              var {
                activityAlias: i,
                alias: e,
                id: s,
              } = this.getAvtivityByType(t);
              if (i || e || s) {
                var a = i || e || s;
                Object(c.a)().dmc.navigate(o, {
                  activityId: a,
                  alias: a,
                  kdtId: this.kdtId || 0,
                });
              }
            },
            getAvtivityByType(t) {
              return this.promotionActivity[t] || {};
            },
            showCashBackRule() {
              this.showCashBackRulePop = !0;
            },
            hideCashBackRule() {
              (this.showCashBackRulePop = !1), this.openPop();
            },
            showGuide() {
              this.showGuidePop = !0;
            },
            hideGuide() {
              this.showGuidePop = !1;
            },
            handleGetCoupon(t) {
              var { id: o, alias: i, type: e } = t;
              b ||
                ((b = !0),
                Object(p.default)({
                  path: "/wscgoods/getCoupon.json",
                  data: {
                    activityId: o,
                    alias: i,
                    source:
                      "goods_details_" +
                      (e === v.OPTIMAL ? "rcmd_take" : "take"),
                    requestId: o + "-" + new Date().getTime(),
                    kdtId: this.kdtId,
                    withCredentials: !0,
                  },
                })
                  .then(() => {
                    (b = !1),
                      this.setCouponDisabled(o, e),
                      d.a.success("恭喜你抢到了");
                  })
                  .catch((t) => {
                    var { msg: i = "", code: e } = t;
                    161201051 === e
                      ? this.getGuideInfo(o, i)
                      : ((b = !1),
                        Object(d.a)(i || "优惠券领取失败，请稍后重试"));
                  }));
            },
            getGuideInfo(t, o) {
              Object(p.default)({
                path: "/wscump/guide-member/get-guide-info.json",
                data: { guideType: "coupon", voucherActivityId: t },
              })
                .then((i) => {
                  i.needGuide
                    ? this.jumpToCouponDetail(t)
                    : (Object(d.a)(o || "优惠券领取失败，仅限部分用户领取"),
                      (b = !1));
                })
                .catch((t) => {
                  var { msg: o = "" } = t;
                  Object(d.a)(o || "优惠券领取失败，仅限部分用户领取"),
                    (b = !1);
                });
            },
            jumpToCouponDetail(t) {
              var { kdtId: o } = this;
              Object(p.default)({
                path: "/wscump/coupon/get_alias_by_id.json",
                data: { id: t, kdtId: o },
              })
                .then((t) => {
                  var { alias: i } = t;
                  if (!i) throw new Error();
                  var e = l()(
                      "/wscump/coupon/fetch?alias=" + i + "&shopAutoEnter=1",
                      "h5",
                      o
                    ),
                    a =
                      "/pages/common/webview-page/index?src=" +
                      encodeURIComponent(e);
                  return (
                    (b = !1),
                    Object(c.a)().dmc.navigate(
                      "web" === s.default.getEnv() ? e : a
                    )
                  );
                })
                .catch((t) => {
                  var { msg: o = "" } = t;
                  (b = !1), Object(d.a)(o || "领取失败，请稍后重试");
                });
            },
            setCouponDisabled(t, o) {
              function i(o) {
                return o.id === t && (o.disabled = !0), o;
              }
              o === v.OPTIMAL
                ? this.optimalCouponList &&
                  this.optimalCouponList.length &&
                  (this.optimalCouponList = this.optimalCouponList.map(i))
                : o === v.UMP &&
                  ((this.umpCouponList = this.umpCouponList.map(i)),
                  (this.estimateCouponList = this.estimateCouponList.map(i)));
            },
            clickRuleBtn() {
              this.showActivityRule = !this.showActivityRule;
            },
          },
          ud: !0,
        };
        o.default = s.default.component(y);
      },
    }
  )
);
