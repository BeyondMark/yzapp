"use strict";
var r = require("~/r");
r(
  "cdsf",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    cdsf: function (o, t, i) {
      i.r(t);
      var e = i("Fcif"),
        s = i("e2Yn"),
        n = i.n(s),
        r = i("9ZMt"),
        a = i("YeA1"),
        h = i("ONqW"),
        u = i("+66q"),
        c = [
          "meetReduce",
          "present",
          "meetSend",
          "postage",
          "cashBack",
          "cashbackPro",
          "bale",
          "plusBuy",
          "supplierMeetReduce",
          "secondHalfDiscount",
        ],
        p = [
          u.j.PRESENT_EXCHANGE,
          u.j.SECKILL,
          u.j.AUCTION,
          u.j.TUAN,
          u.j.HELPCUT,
          u.j.LUCKYDRAW_GROUP,
          u.j.HELP_DEPOSIT_EXPANSION,
        ],
        d = i("US/N"),
        m = {
          mixins: [
            {
              data: () => ({
                promotionPopShow: !1,
                showSubscribeGuide: !1,
                templates: [],
              }),
              computed: {
                goodsPromotion() {
                  var { orderPromotion: o = [] } = this.promotionActivity;
                  return o.filter((o) => c.indexOf(o.key) >= 0);
                },
              },
              methods: {
                judgeShowCoupon(o) {
                  var {
                    actType: t,
                    goodsBaseInfo: i,
                    showForbidBuyBtn: e,
                    stockNum: s,
                  } = o;
                  if ("helpDepositExpansion" === t) return !1;
                  if (i.isSupportFCode && e && 0 === s) return !1;
                  if (i.isVirtualCoupon) return !1;
                  var { umpCouponList: n = [] } = this;
                  return !(!n || !n.length) && !i.isOutlink;
                },
                fetchCouponData(o) {
                  var { kdtId: t, alias: i } = o;
                  return Object(d.default)({
                    path: "/wscump/coupon/goods-coupon-list.json",
                    data: { alias: i, kdtId: t },
                    withCredentials: !0,
                  });
                },
                estimaPriceLogger() {
                  var {
                      buttonUmpText: o = {},
                      num: t,
                      estimatedPrice: i,
                      estimatedPriceCoupon: e = {},
                    } = this.goodsEstimatePriceData || {},
                    { umpTag: s = "" } = o;
                  return {
                    isShowQi: s.indexOf("起") > -1,
                    estimatedPrice: i,
                    num: t,
                    estimatedPriceCoupon: e,
                  };
                },
                showPromotionPop() {
                  (this.promotionPopShow = !0),
                    Promise.all([
                      this.ctx.process.invokePipe(
                        "queryWechatSubscribeResult",
                        5
                      ),
                      this.ctx.process.invokePipe(
                        "getTemplateByScene",
                        "coupon_notice_scene"
                      ),
                    ]).then((o) => {
                      var [t, i] = o,
                        { templateList: e = [] } = t || {},
                        { templateIdList: s = [] } = i || {};
                      this.templates = e.concat(s);
                    });
                  var o = this.estimaPriceLogger(),
                    {
                      isShowQi: t,
                      num: i,
                      estimatedPrice: e,
                      estimatedPriceCoupon: s,
                    } = o;
                  this.checkTagsCount &&
                    Object(h.a)().log({
                      et: "click",
                      ei: "coupon_promotion_click",
                      en: "领券促销栏点击",
                      params: {
                        location: this.showTopGoodsPromotion ? 0 : 1,
                        number_tags: this.checkTagsCount(),
                        component: "coupo_promotion",
                      },
                    }),
                    this.showEstimatePriceTip &&
                      Object(h.a)().log({
                        et: "click",
                        ei: "click_unit_price",
                        en: "点击预估单价",
                        params: {
                          isshow_qi: t ? 0 : 1,
                          num: i,
                          position: this.showPromotionPosition,
                          price: e,
                          component: "estimated_price",
                        },
                      }),
                    s &&
                      s.id &&
                      Object(h.a)().log({
                        et: "view",
                        ei: "best_coupon_view",
                        en: "最佳券曝光",
                        params: {
                          coupon_conditions: s.useThresholdCopywriting,
                          coupon_name: s.title,
                          discounted_price: s.valueCopywriting,
                          index: 1,
                          source: this.showPromotionPosition,
                          component: "promotion_panel",
                        },
                      }),
                    o &&
                      o.num &&
                      Object(h.a)().log({
                        et: "view",
                        ei: "show_price_detail",
                        en: "曝光优惠明细",
                        params: { num: i, component: "promotion_panel" },
                      });
                },
                toggleShowSubscribeGuide(o) {
                  var { templates: t, index: i, umpType: e } = o;
                  (this.showSubscribeGuide = !0),
                    this.ctx.process.invokePipe("requestSubscribeMessagePush", {
                      templates: t,
                      onFail: () => {},
                      onSuccess: () => {},
                      onShowTips: () => {
                        this.showSubscribeGuide = !0;
                      },
                      onCloseTips: () => {
                        this.showSubscribeGuide = !1;
                      },
                      onComplete: () => {
                        var o;
                        (getApp().globalData.wxShopGoodsDetailCoupon = !0),
                          (this.showSubscribeGuide = !1),
                          null == (o = this.$refs.promotion) ||
                            null == o.handleCouponClick ||
                            o.handleCouponClick(i, e);
                      },
                      onSelfLog: {
                        subscribePos: "网店小程序商详优惠券",
                        subscribeSource: "wx_shop",
                      },
                    });
                },
                hidePropmotionPop() {
                  this.promotionPopShow = !1;
                },
              },
            },
          ],
          props: { preposition: { type: Number, default: 0 } },
          data() {
            var o,
              {
                kdtId: t,
                theme: i = {},
                goodsSkuData: e = {},
                pageFeature: s = {},
                umpActivityData: { promotionActivity: n = {} } = {},
              } = r.default.getGlobal("GOODS_DATA") || {};
            return {
              kdtId: t,
              theme: i,
              promotionActivity: n,
              umpCouponList: [],
              couponListReady: !1,
              promotionPopShow: !1,
              pageFeature: s,
              showEstimatePrice: !1,
              goodsEstimatePriceData: {},
              showEstimatePriceTip: !1,
              templates: [],
              showSubscribeGuide: !1,
              goodsSpe: null == (o = e.goods) ? void 0 : o.list.length,
              sassShowGoodsPromotion: !0,
              themeTag: {},
              innerStyle:
                "border-radius: 2px; color: var(--theme-tag-em-color, #ffffff); background-color: var(--theme-tag-em-bg-color, #323233)",
            };
          },
          logicData() {
            var {
              alias: o,
              goodsBaseInfo: t = {},
              goodsPriceInfo: i = {},
              shopBaseInfo: e = {},
              shopConfig: s = {},
              goodsSkuData: n = {},
              umpActivityData: { currentActivity: a = {} } = {},
            } = r.default.getGlobal("GOODS_DATA") || {};
            return {
              alias: o,
              goodsBaseInfo: t,
              goodsPriceInfo: i,
              currentActivity: a,
              shopBaseInfo: e,
              shopConfig: s,
              goodsSkuData: n,
            };
          },
          computed: {
            showPromotionPosition() {
              return this.showTopGoodsPromotion ? 0 : 1;
            },
            showGoodsPromotion() {
              var { goodsPromotionList: o = [] } = this;
              if (!this.sassShowGoodsPromotion) return !1;
              if (0 === o.length) return !1;
              if (!this.canFetchCouponData) return !1;
              if (p.indexOf(this.currentActivity.type) >= 0) return !1;
              var { isOutlink: t } = this.goodsBaseInfo,
                { orderPromotionLimit: i } = this.promotionActivity;
              return (
                !t &&
                (!!i ||
                  (1 === this.preposition) ===
                    !!this.shopConfig.goodsActivityTagsPreposition)
              );
            },
            canFetchCouponData() {
              var o =
                !!this.preposition ==
                !!this.shopConfig.goodsActivityTagsPreposition;
              return this.alias && this.kdtId && o
                ? this.kdtId + "-" + this.alias
                : "";
            },
            outShowGoodsPromotion() {
              var o = [...this.goodsPromotion],
                t = o.find((o) => o.key === u.g.PRESENT),
                i = o.findIndex((o) => o.key === u.g.MEET_SEND);
              return t && i > -1 && o.splice(i, 1), o;
            },
            showGoodsCoupon() {
              return this.judgeShowCoupon({
                actType: this.currentActivity.type,
                goodsBaseInfo: this.goodsBaseInfo,
                showForbidBuyBtn: this.pageFeature.showForbidBuyBtn,
                stockNum: this.goodsPriceInfo.stockNum,
              });
            },
            goodsPromotionList() {
              var o = this,
                { umpCouponList: t = [] } = this,
                i = [...this.outShowGoodsPromotion],
                e = t.slice(0, 3);
              if (t.length >= 3) {
                var s = e.reduce(
                  (o, t) => o + t.useThresholdAndValueCopywriting,
                  ""
                );
                n()(s) >= 32 && (e = e.slice(0, 2));
              }
              if (
                (t.length &&
                  this.showGoodsCoupon &&
                  i.unshift({
                    key: "umpCouponList",
                    title: "领券",
                    couponList: e,
                  }),
                i.length)
              ) {
                var r = i.slice(0, 3);
                return (
                  r.forEach(function (t) {
                    if ((void 0 === t && (t = {}), "present" === t.key)) {
                      var { presentOutList: i = [] } = t;
                      i.forEach(function (t, e) {
                        void 0 === t && (t = {});
                        var { presentSuffix: s = "" } = t;
                        t.formatedItemSuffix = o.formatItemSuffix(
                          s,
                          e,
                          i.length
                        );
                      });
                    }
                  }),
                  r
                );
              }
              return i;
            },
            topGoodsPromotionList() {
              var { umpCouponList: o = [] } = this,
                { outShowGoodsPromotion: t } = this,
                i = [...t] || !1,
                s = [],
                n = [];
              o.forEach((o) => {
                if (o.tag) {
                  var t = "券";
                  (t += o.tag), n.push(t);
                }
              }),
                o.length &&
                  this.showGoodsCoupon &&
                  i.unshift({
                    key: "umpCouponList",
                    title: "领券",
                    index: o[0].index,
                    couponList: o,
                    tags: n || [],
                  }),
                i.sort(this.compare("index"));
              var r = 0;
              i.length &&
                i.forEach((o) => {
                  o.tags && (r += o.tags.length);
                });
              var a = i.slice(0, 4),
                h = [],
                u = a.length;
              if (u >= 3) {
                if (r <= 4)
                  for (var c = 0; c < u; c++) {
                    var p = a[c].tags;
                    p &&
                      p.length &&
                      p[0] &&
                      (h[c] = Object(e.a)(
                        { arr: 0 === c ? p.slice(0, 2) : [p[0]] },
                        a[c]
                      ));
                  }
                else
                  for (var d = 0; d < u; d++) {
                    var m = a[d].tags;
                    null != m &&
                      m.length &&
                      m[0] &&
                      (h[d] = Object(e.a)({ arr: [m[0]] }, a[d]));
                  }
              } else if (2 === u)
                for (var l = 0; l < u; l++) {
                  var g = a[l].tags;
                  g &&
                    g.length &&
                    g[0] &&
                    (h[l] = Object(e.a)(
                      { arr: 0 === l ? g.slice(0, 2) : g },
                      a[l]
                    ));
                }
              else if (1 === u) {
                var f = a[0].tags;
                f &&
                  f.length &&
                  f[0] &&
                  ((s = [...f]), (h[0] = Object(e.a)({ arr: s }, a[0])));
              }
              return h;
            },
            couponLabelProcessing() {
              var o = [];
              return (
                this.topGoodsPromotionList.forEach((t) => {
                  var i,
                    { arr: e = [] } = t,
                    s =
                      1 === t.matchIdentityType ||
                      (0 === t.matchIdentityType &&
                        (null == (i = t.activityLeadInMembershipInfo)
                          ? void 0
                          : i.needGuide));
                  e.forEach((t) => {
                    var i = {};
                    s
                      ? o.push({ title: "VIP", cont: t, guide: !0 })
                      : "券" === t[0]
                      ? ((i.title = t[0]), (i.cont = t.substring(1)), o.push(i))
                      : o.push({ title: "", cont: t });
                  });
                }),
                o
              );
            },
            showTopGoodsPromotion() {
              return !!(
                this.shopConfig.goodsActivityTagsPreposition &&
                this.topGoodsPromotionList.length &&
                this.sassShowGoodsPromotion
              );
            },
            couponActionText() {
              var { umpCouponList: o = [] } = this;
              return o.length && this.showGoodsCoupon ? "领券" : "查看优惠";
            },
          },
          watch: {
            showGoodsPromotion(o) {
              o &&
                (Object(h.a)().log({
                  et: "view",
                  ei: "coupon_promotion_view",
                  en: "领券促销栏曝光",
                  params: {
                    location: this.showTopGoodsPromotion ? 0 : 1,
                    number_tags: this.checkTagsCount(),
                    component: "coupo_promotion",
                    coupon_id: this.umpCouponList.map((o) => o.id).join(","),
                  },
                }),
                (this.ctx.data.showGoodsPromotion = this.showGoodsPromotion));
            },
            goodsPromotion(o) {
              var t = o.find((o) => o.key === u.g.PRESENT),
                i = o.findIndex((o) => o.key === u.g.MEET_SEND);
              if (t && i > -1) {
                var e = o[i];
                t.presentOutList.push(...e.presentOutList);
              }
            },
            couponLabelProcessing(o) {
              this.couponListReady &&
                (this.ctx.data.topCouponLabelList = this.showTopGoodsPromotion
                  ? o
                  : []);
            },
          },
          created() {
            Object(a.b)(this, [
              "kdtId",
              "alias",
              "theme",
              "goodsBaseInfo",
              "goodsPriceInfo",
              "promotionActivity",
              "pageFeature",
              "shopBaseInfo",
              "currentActivity",
              "shopConfig",
              "isCoupon",
              "themeTag",
            ]),
              Object(a.c)(this, ["goodsSkuData", "goodsPriceInfo"], {
                callback: (o) => {
                  var t,
                    { goodsSkuData: i, goodsPriceInfo: e } = o,
                    { minPrice: s = 0, maxPrice: n = 0 } = e;
                  !(s === n) &&
                    this.showGoodsPromotion &&
                    this.umpCouponList.length > 0 &&
                    ((this.goodsSpe =
                      null == (t = i.goods) ? void 0 : t.list.length),
                    (this.ctx.data.goodsSpe =
                      0 === this.goodsSpe ? 1 : this.goodsSpe));
                },
              }),
              Object(a.b)(this, {
                goodsEstimatePriceData: (o) => {
                  var t = !0;
                  if (this.currentActivity.type === u.j.TIMELIMITED_DISCOUNT) {
                    var { isStart: i = !1 } = this.currentActivity;
                    t = i;
                  }
                  (this.showEstimatePrice = Boolean(
                    "{}" !== JSON.stringify(o) && !this.isCoupon && o.num && t
                  )),
                    (this.showEstimatePriceTip =
                      "{}" !== JSON.stringify(o) &&
                      !this.isCoupon &&
                      o.num > 1 &&
                      t);
                },
                marketing: (o) => {
                  var { voucherModelList: t = [] } = o;
                  t.length &&
                    ((this.umpCouponList = t),
                    (this.ctx.data.umpCouponList = t),
                    (this.couponListReady = !0));
                },
              }),
              Object(a.d)(this, {
                "promotion:show": () => {
                  this.promotionPopShow = !0;
                },
              }),
              Object(a.e)(this, {
                setShowGoodsPromotion: (o) => {
                  this.sassShowGoodsPromotion = !!o;
                },
              });
          },
          methods: {
            checkTagsCount() {
              return this.showTopGoodsPromotion
                ? this.couponLabelProcessing.length
                : this.goodsPromotionList.reduce(
                    (o, t) =>
                      "umpCouponList" === t.key
                        ? o + 1 + t.couponList.length
                        : o + 1,
                    0
                  );
            },
            formatItemSuffix(o, t, i) {
              var e = "";
              return o && (e += o), t < i - 1 && (e += ";"), e;
            },
            goGoodsDetail(o) {
              this.ctx.dmc.navigate("GoodsDetail", { alias: o });
            },
            getRealLen: (o) => o.replace(/[^\x00-\xff]/g, "__").length,
            compare: (o) =>
              function (t, i) {
                return t[o] - i[o];
              },
            isAllEqual: (o) => !(o.length > 0) || !o.some((t) => t !== o[0]),
          },
          ud: !0,
        };
      t.default = r.default.component(m);
    },
  })
);
