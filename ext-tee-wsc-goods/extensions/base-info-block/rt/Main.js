"use strict";
var r = require("~/r");
r(
  "o5Ko",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    o5Ko: function (t, e, i) {
      i.r(e);
      var o = i("Fcif"),
        s = i("YeA1"),
        r = i("VmHG"),
        n = i("9ZMt"),
        a = i("KEq0"),
        c = i.n(a),
        u = i("ONqW"),
        d = i("+66q"),
        h = i("lCVF"),
        p = i.n(h),
        m = 0,
        l = 1;
      var g = "benefitcard",
        v = "discount",
        f = "timeLimitedDiscount",
        y = {
          getters: {
            recommendedPriceModel() {
              var { discountInvite: t, discount: e } = this.memberActivity,
                { type: i } = this.currentActivity;
              return (
                (i === d.j.TIMELIMITED_DISCOUNT
                  ? this.currentActivity
                  : t || e || {}
                ).recommendedPriceModel || {}
              );
            },
            discountOpt() {
              var {
                  discountInvite: t,
                  discount: e,
                  goods: i,
                  timelimitedDiscount: s,
                } = this.goodsSkuData,
                { isHqShopPreview: r = !1, kdtId: n } = this.shopBaseInfo,
                a = !!this.memberActivity.scrmCarrier,
                { recommendedPriceModel: c } = this,
                { activityLeadInMembershipInfo: u } = this.currentActivity,
                h = {
                  supportFastJoin:
                    1001 === c.cardSubType ||
                    1 === (null == u ? void 0 : u.guideType),
                  fastJoin: this.launchFastJoin,
                };
              if (u)
                return Object(o.a)(
                  { show: !0, kdtId: n, mobile: this.userInfo.mobile },
                  u,
                  {
                    extraAction: h,
                    endAt: this.currentActivity.endAt,
                    themeType: this.themeType,
                    type: f,
                  }
                );
              var g = this.lmCardShow ? s || i : t || e || i,
                y = (function (t) {
                  var { recommendedPriceModel: e, recommendedActivity: i } = t,
                    {
                      recommendedBenefitNum: o,
                      recommendedMax: s,
                      recommendedMin: r,
                      cardName: n,
                      cardType: a,
                      cardSubType: c,
                      cardCouponType: u,
                      cardDenominationsCouponTotalAmount: h,
                    } = e,
                    {
                      isAllVipPriceAdvantage: g,
                      maxVipSavedPrice: v,
                      noneSku: f,
                      price: y,
                      oldPrice: I,
                      type: w,
                      minPrice: P,
                      isStarted: A,
                    } = i || {};
                  if (void 0 === o)
                    return {
                      mainText: "会员价: ￥" + p()({ min: r, max: s }, " - "),
                      actionText: "加入会员",
                    };
                  var O = 2 === a && 1001 === c,
                    b = O ? "加入会员" : "立即省钱",
                    B = O ? "加入会员" : "立即尊享",
                    S = f && r === s && r < y;
                  if (w === d.j.TIMELIMITED_DISCOUNT && r < P)
                    return {
                      mainText:
                        n +
                        "下单" +
                        (A ? "预计再省" : "原价再减") +
                        p()((A ? P : I) - r) +
                        "元",
                      actionText: b,
                    };
                  var T = {
                      mainText: "加入会员后，可享" + p()(I - r) + "元优惠",
                      actionText: b,
                    },
                    C = {
                      mainText: "加入会员后，最多享" + p()(v) + "元优惠",
                      actionText: b,
                    };
                  if (S) return T;
                  if (g) return C;
                  if (u !== m) {
                    var D = "入会送优惠券";
                    return (
                      u === l && (D = "入会立得" + p()(h) + "元优惠券"),
                      { mainText: D, actionText: "加入会员" }
                    );
                  }
                  var k = n || "会员";
                  return 0 == +o
                    ? { mainText: k + "尊享专属权益", actionText: B }
                    : {
                        mainText: k + "可享" + (o || "几") + "大权益",
                        actionText: B,
                      };
                })({ recommendedPriceModel: c, recommendedActivity: g }),
                { isStarted: I } = g || {},
                w = !(
                  !c.recommendedStatus ||
                  r ||
                  this.isNewcomerCoupon ||
                  a ||
                  !y
                ),
                { mainText: P = "", actionText: A = "" } = y;
              return {
                show: w,
                kdtId: n,
                cardShow: this.lmCardShow,
                isStarted: I,
                recommendedPriceModel: c,
                mobile: this.userInfo.mobile,
                mainText: P,
                extraAction: h,
                actionText: A,
                type: v,
              };
            },
            benefitcardOpt() {
              var { scrmCarrier: t = {} } = this.memberActivity,
                {
                  cardAlias: e = "",
                  cardName: i = "",
                  benefitDesc: o = "",
                } = t;
              return {
                show: !!e,
                kdtId: this.shopBaseInfo.kdtId,
                mainText: o,
                actionText: "立即激活",
                cardAlias: e,
                cardName: i,
                type: g,
              };
            },
            lmCardShow() {
              var {
                type: t,
                recommendedPriceModel: e,
                activityLeadInMembershipInfo: i,
              } = this.currentActivity;
              return t === d.j.TIMELIMITED_DISCOUNT && (e || i);
            },
            customerCardOpt() {
              var { show: t } = this.benefitcardOpt;
              return this.lmCardShow
                ? this.discountOpt
                : t
                ? this.benefitcardOpt
                : this.discountOpt;
            },
          },
        },
        I = i("US/N"),
        w = i("X9+V"),
        P = i("3tyi"),
        A = {
          timelimitedDiscount: { pending: !1, doing: !1 },
          seckill: { pending: !1, doing: !0 },
          groupOn: { pending: !1, doing: !1 },
          ladderGroupOn: { pending: !1, doing: !1 },
          depositExpansion: { pending: !1, doing: !1 },
          helpDepositExpansion: { pending: !1, doing: !1 },
          helpCut: { pending: !1, doing: !1 },
          tuan: { pending: !1, doing: !1 },
          luckyDrawGroup: { pending: !1, doing: !1 },
          auction: { pending: !0, doing: !0 },
          inSourcingFission: { pending: !1, doing: !1 },
          presale: { pending: !1, doing: !1 },
        },
        O = i("Nvad"),
        b = (t) => {
          var {
              umpPriceInfo: e,
              currentActivity: i,
              isDeposit: o,
              isAuction: s,
            } = t,
            {
              minPrice: r = 0,
              maxPrice: n = 0,
              tags: a = [],
              originMinPrice: c = 0,
              originMaxPrice: u = 0,
              oldMinPrice: h = 0,
              oldMaxPrice: p = 0,
            } = e,
            { originPrice: m = "" } = e,
            { startPrice: l } = e,
            g = a[0] || {};
          -1 !== m.indexOf("-") && (m = m.split("-")[0] + " 起");
          var v = Object(O.b)(Object(w.a)(r)).split("."),
            f = r !== n;
          if (o) {
            var y = c || h,
              I = u || p;
            (v = Object(O.b)(Object(w.a)(y)).split(".")), (f = y !== I);
          }
          if (
            ((i || {}).type === d.a.PRESALE && (g = {}), g.text && g.preText)
          ) {
            g.text = Object(O.b)(g.text);
            var P = (v[0] || "").length;
            P <= 2
              ? ((g.tagPreCls = "tag_pre-normal"), (g.tagCls = "tag_normal"))
              : 3 === P
              ? ((g.tagPreCls = "tag_pre-small"), (g.tagCls = "tag_normal"))
              : 4 === P
              ? ((g.tagPreCls = "tag_pre-small"), (g.tagCls = "tag_small"))
              : P >= 5 &&
                ((g.tagPreCls = "tag_pre-small"), (g.tagCls = "tag_mini")),
              (g.tagCls += " tag_price_font");
          }
          return {
            priceTag: g,
            isRange: f,
            preText: "价格",
            showPrice: v,
            originPrice: Object(O.b)(s ? Object(w.a)(l) : m),
          };
        },
        B = (t) => {
          var { isDeposit: e, currentActivity: i, price: o, minPrice: s } = t;
          if (!e) return "";
          var r = (null == i ? void 0 : i.type) || "",
            n = "定金 ￥" + o + " 可抵",
            a = "定金 ￥" + o + " 最多可抵";
          if (r === d.a.PRESALE) {
            var { showDepositRange: c = !0 } = i || {};
            return "定金 ￥" + (c ? o : Object(w.a)(s));
          }
          if (r === d.a.HELP_DEPOSIT_EXPANSION)
            return a + " ￥" + i.maxOfferWithoutSku / 100;
          var { spuPrice: u = {}, skuPrices: h = [] } = i;
          if (h.length > 0) {
            var p = -1 / 0,
              m = 1 / 0;
            h.forEach((t) => {
              (p = Math.max(p, t.depositOffer)),
                (m = Math.min(m, t.depositOffer));
            });
            var l = "￥" + p / 100;
            return p === m ? n + " " + l : a + " " + l;
          }
          var { depositOffer: g } = u;
          return n + " ￥" + g / 100;
        },
        S = {
          getState: () => {
            var {
              kdtId: t,
              alias: e,
              goodsBaseInfo: i = {},
              umpActivityData: {
                umpActivity: o = {},
                currentActivity: s = {},
              } = {},
            } = n.default.getGlobal("GOODS_DATA") || {};
            return {
              kdtId: t,
              alias: e,
              goodsBaseInfo: i,
              currentActivity: s,
              umpActivity: o,
              fansBenefit: null,
              wecomFansBenefit: null,
              buyButtonPop: {},
              isNewcomerCoupon: !1,
              showOriginPrice: !0,
              showCountDownTime: !0,
              hasReady: !1,
              couponValue: "",
              couponUnit: "元",
              couponId: 0,
              couponAlias: "",
            };
          },
          getters: {
            goodsFansBenefitOpt() {
              var { alias: t } = this.goodsBaseInfo;
              return {
                show: !(
                  (!this.fansBenefit && !this.wecomFansBenefit) ||
                  this.isNewcomerCoupon
                ),
                fansBenefit: this.fansBenefit,
                wecomFansBenefit: this.wecomFansBenefit,
                kdtId: this.kdtId,
                alias: t,
                isNewcomerCoupon: this.isNewcomerCoupon,
              };
            },
            goodsNewCustomerCouponOpt() {
              return {
                show: this.isNewcomerCoupon && "" !== this.couponValue,
                showPriceBlock: this.priceInfo.showPriceBlock,
                kdtId: this.kdtId,
                value: this.couponValue,
                unit: this.couponUnit,
                couponId: this.couponId,
                couponAlias: this.couponAlias,
              };
            },
            umpBannerOpt() {
              var t,
                e,
                { subType: i, type: o } = this.currentActivity,
                s = i || o,
                { showPriceBlock: r = !0 } = this.priceInfo,
                { price: n, minPrice: a } = this.goodsPriceInfo,
                c = this.hasReady && !r,
                u = c ? this.currentActivity : this.depositBanner,
                h = u.isStart ? "doing" : "pending",
                p = [
                  d.a.PRESALE,
                  d.a.DEPOSIT_EXPANSION,
                  d.a.HELP_DEPOSIT_EXPANSION,
                ].includes(u.type);
              return {
                isDeposit: p,
                currentActivity: u,
                price: n,
                show: c || this.depositBanner.show,
                alias: this.goodsBaseInfo.alias,
                showOriginPrice: this.showOriginPrice,
                showCountDownTime: this.showCountDownTime,
                showStockCountDown: !(null == (t = A[u.type]) || !t[h]),
                umpPriceInfo: this.priceInfo,
                skuData: this.goodsSkuData[s] || {},
                isEstimatePrice: !(
                  null == (e = this.estimatePriceData) || !e.num
                ),
                isCoupon: Object(w.b)({ umpActivity: this.umpActivity }),
                goodsActivity: Object(P.a)(this.goodsActivity, [
                  "presale",
                  "waitToSold",
                ]),
                activityPrice: b({
                  umpPriceInfo: this.priceInfo,
                  currentActivity: u,
                  isDeposit: p,
                  isAuction: this.isAuction,
                }),
                depositPriceText: B({
                  isDeposit: p,
                  currentActivity: u,
                  price: n,
                  minPrice: a,
                }),
              };
            },
          },
          getActions: (t) => ({
            setIsNewcomerCoupon(e) {
              void 0 === e && (e = !1),
                (this.isNewcomerCoupon = e),
                (t.data.isNewcomerCoupon = e);
            },
            setBuyButtonPop(e) {
              void 0 === e && (e = {}), (t.data.buyButtonPop = e);
            },
            fetchNewerCoupon(t) {
              var e,
                { umpActivity: i, goodsBaseInfo: o } = t;
              this.umpActivity = i;
              var { coupon: s = {} } = i,
                { couponPreferenceModels: r = [] } = s,
                n = o.id;
              if (r.length || (null != (e = r[0]) && e.isNewcomerVoucher)) {
                var {
                    isNewcomerVoucher: a,
                    valueCopywriting: c,
                    unitCopywriting: u,
                    id: d,
                    alias: h,
                  } = r[0],
                  p = a && c;
                (this.couponValue = c),
                  (this.couponUnit = u),
                  (this.couponId = d),
                  (this.couponAlias = h),
                  this.setIsNewcomerCoupon(p);
              } else this.setUsingNewCustomerCoupon(n);
            },
            setUsingNewCustomerCoupon(e) {
              void 0 === e && (e = this.goodsBaseInfo.id),
                e &&
                  Object(I.default)({
                    path: "/wscump/new-customer/optimal-newcomer-voucher.json",
                    data: { goodsId: e },
                  }).then(function (e) {
                    void 0 === e && (e = {}),
                      e.valueCopywriting &&
                        e.unitCopywriting &&
                        (t.data.buyButtonPop = e);
                  });
            },
            setUmpBannerInfo(t) {
              var { currentActivity: e, goodsActivity: i } = t;
              e.type &&
                ((this.hasReady = !0),
                "productLaunch" === e.type &&
                  ((this.showOriginPrice = !1),
                  i.waitToSold || (this.showCountDownTime = !1)));
            },
            launchFastJoin(e) {
              t.process.invoke(
                "launchFastJoinSDK",
                Object(o.a)({}, e, {
                  successCallback: () => {
                    n.default.$native.startPullDownRefresh();
                  },
                })
              );
            },
          }),
        },
        T = ["fullPresale", "deposit"],
        C = {
          priceInfo() {
            var { tags: t } = this.goodsPriceInfo,
              { type: e, isStart: i } = this.currentActivity || {},
              { timeLimitDiscountPromotion: s, customDiscountPromotion: r } =
                this.estimatePriceData || {},
              n = e === d.j.TIMELIMITED_DISCOUNT && !i;
            if (this.estimateTag && !n) {
              t = [this.estimateTag];
              var a = !!s,
                c = !!r;
              !this.hasLogger &&
                Object(u.a)().log({
                  et: "view",
                  ei: "show_hand_price",
                  en: "展示到手价",
                  params: {
                    isshow_qi: t[0].sufText ? 1 : 0,
                    is_activity: a ? 0 : c ? 1 : "",
                    component: "estimated_price",
                  },
                }),
                (this.hasLogger = !0);
            }
            return Object(o.a)(
              {},
              this.goodsBaseInfo.firstRenderPriceInfo || {},
              this.goodsPriceInfo,
              { tags: t }
            );
          },
          priceOpt() {
            var { origin: t, alias: e } = this.goodsBaseInfo,
              { presale: i } = this.goodsActivity,
              s = Object(o.a)({}, this.priceInfo, { origin: t }),
              r = ((t) => {
                var { tags: e = [] } = t;
                return e.filter(
                  (t) => !("coupon" !== t.umpType && T.indexOf(t.type) > -1)
                );
              })(s),
              n = ((t) => {
                var { origin: e, price: i, oldPrice: o } = t;
                return o && o !== i
                  ? { label: "价格", price: "￥" + o }
                  : /^\s*\d+(\.\d{1,2})?\s*$/.test(e)
                  ? { label: "价格", price: "￥" + e.trim() }
                  : { label: "", price: e };
              })(s);
            return {
              show: s.showPriceBlock && !s.showBanner,
              priceInfo: s,
              alias: e,
              isDeposit: null == i ? void 0 : i.isDeposit,
              priceTags: r,
              originPriceObj: n,
            };
          },
          presaleOpt() {
            var { presale: t } = this.goodsActivity;
            return { show: !!t, presale: t };
          },
          titleOpt() {
            var t,
              e,
              i,
              {
                id: s,
                alias: r,
                title: n,
                isHaitao: a,
                isMedicine: c,
                isPrescriptionCategory: u,
                sellPoint: d,
                brandInfoModel: h,
              } = this.goodsBaseInfo,
              { haitao: p, periodbuy: m, enjoyBuy: l } = this.goodsActivity;
            return {
              goodsId: s,
              alias: r,
              title: n,
              isHaitao: a,
              isMedicine: c,
              isPrescriptionCategory: u,
              sellPoint: d,
              brandInfoModel: h,
              retailShow: null == (t = this.retail) ? void 0 : t.show,
              goodsActivity: { haitao: p, periodbuy: m, enjoyBuy: l },
              shareIcon: Object(o.a)({}, this.shareIcon, {
                show:
                  !(null != (e = this.env) && e.hideShareIcon) &&
                  (null == (i = this.shareIcon) ? void 0 : i.show),
              }),
            };
          },
          depositBanner() {
            var { showPriceBlock: t, showBanner: e } = this.goodsPriceInfo,
              {
                isEnd: i,
                preSaleEnd: o,
                preSaleStart: s,
              } = this.goodsActivity.presale || {},
              r = s - Date.now() <= 0;
            return {
              show: t && e,
              startTimeAt: s,
              endTimeAt: r ? o : s,
              isEnd: i,
              isStart: r,
              type: "presale",
              countDownDesc: i ? "活动已结束" : r ? "距结束仅剩" : "距开始仅剩",
              showDepositRange: !1,
            };
          },
          skuPictures() {
            var { tree: t = [] } = this.goodsSkuData.goods || {},
              { picture: e } = this.goodsBaseInfo,
              i = [];
            return (
              t.forEach((t) => {
                t.v &&
                  i.push(
                    ...t.v
                      .filter((t) => !!t.imgUrl)
                      .map((i) =>
                        Object(o.a)({}, i, {
                          url: i.defaultSkuImg ? e : i.imgUrl,
                          ks: t.kS,
                          kId: t.kId,
                        })
                      )
                  );
              }),
              i
            );
          },
          skuNavOpt() {
            var {
                isDisplaySkuPicture: t,
                pictures: e,
                video: i,
              } = this.goodsBaseInfo,
              o = e || [],
              { videoUrl: s, coverUrl: r } = i || {},
              n = s ? r : (o[0] || {}).url,
              a = s ? 1 : 0,
              u = c()(n, "small"),
              d = a + o.length;
            return {
              show: t,
              skuPictures: this.skuPictures,
              pictureLength: d,
              goodsPic: u,
              current: t ? this.current : 1,
            };
          },
        },
        D = (t) => ({
          getShareIcon() {
            t.process.invokePipe("setShareIcon", this.shareIcon).then((t) => {
              this.shareIcon = t;
            });
          },
          setShareIconShow(t) {
            this.shareIcon.show = t;
          },
          setEstimateTag(t) {
            t && !this.estimateTag && (this.estimateTag = t);
          },
        });
      function k(t) {
        return Object(r.a)({
          state: () =>
            Object(o.a)(
              {},
              (() => {
                var {
                  themeVars: t = "",
                  themeColors: e = {},
                  goodsActivity: i = {},
                  goodsBaseInfo: o = {},
                  goodsPriceInfo: s = {},
                  goodsSkuData: r = {},
                  shopBaseInfo: a = {},
                  memberActivity: c = {},
                  themeTag: u = {},
                  env: d = {},
                  retail: h = {},
                  umpActivityData: {
                    currentActivity: p = {},
                    umpActivity: m = {},
                  } = {},
                } = n.default.getGlobal("GOODS_DATA") || {};
                return {
                  themeVars: t,
                  themeColors: e,
                  pageVars: "",
                  themeTag: u,
                  themeType: 0,
                  current: 0,
                  goodsActivity: i,
                  goodsBaseInfo: o,
                  goodsPriceInfo: s,
                  retail: h,
                  env: d,
                  goodsSkuData: r,
                  isNewcomerCoupon: !1,
                  memberActivity: c,
                  currentActivity: p,
                  umpActivity: m,
                  userInfo: {},
                  shopBaseInfo: a,
                  shareIcon: {
                    show: !0,
                    icon: "share",
                    color: "#323233",
                    size: "20px",
                    word: "分享",
                  },
                  estimatePriceData: null,
                  estimateTag: null,
                  goodsStockOpt: {},
                };
              })(),
              S.getState()
            ),
          getters: Object(o.a)({}, C, y.getters, S.getters),
          actions: Object(o.a)({}, D(t), S.getActions(t)),
        });
      }
      var x = {
        data() {
          return (
            (this.store = k(this.ctx)),
            Object(r.c)(this, [
              "current",
              "env",
              "goodsBaseInfo",
              "themeTag",
              "pageVars",
              "themeVars",
              "retail",
              "goodsActivity",
              "goodsSkuData",
              "goodsPriceInfo",
              "memberActivity",
              "isNewcomerCoupon",
              "userInfo",
              "shopBaseInfo",
              "fansBenefit",
              "wecomFansBenefit",
              "kdtId",
              "alias",
              "themeColors",
              "buyButtonPop",
              "currentActivity",
              "umpActivity",
              "estimatePriceData",
              "goodsStockOpt",
              "themeType",
            ]),
            Object(o.a)(
              {
                profit: 0,
                showGuaranteeBar: !0,
                youzanyunBanner: !0,
                youzanyunPrice: !0,
              },
              Object(r.d)(this, [
                "skuNavOpt",
                "priceOpt",
                "presaleOpt",
                "titleOpt",
                "pageVars",
                "themeVars",
                "customerCardOpt",
                "goodsFansBenefitOpt",
                "goodsNewCustomerCouponOpt",
                "umpBannerOpt",
                "themeTag",
                "goodsStockOpt",
                "themeType",
                "estimatePriceData",
              ])
            )
          );
        },
        logicData() {
          return Object(o.a)(
            {},
            Object(r.d)(this, [
              "skuPictures",
              "currentActivity",
              "umpActivity",
              "goodsBaseInfo",
            ])
          );
        },
        computed: {
          theme() {
            return this.pageVars + this.themeVars;
          },
        },
        watch: {
          skuPictures: {
            handler() {
              this.ctx.data.skuPictures = this.skuPictures;
            },
            immediate: !0,
          },
          estimatePriceData: {
            handler(t) {
              var { tag: e } = t || {};
              this.store.setEstimateTag(e);
            },
            immediate: !0,
          },
        },
        created() {
          Object(r.b)(this, [
            "getShareIcon",
            "setIsNewcomerCoupon",
            "setBuyButtonPop",
            "fetchNewerCoupon",
          ]),
            Object(s.d)(this, { goodsSetupReady: () => this.getShareIcon() }),
            Object(s.e)(this, {
              setShowGuaranteeBar: (t) => {
                this.showGuaranteeBar = !!t;
              },
              showActivityBanner: (t) => {
                this.youzanyunBanner = !!t;
              },
              showPriceBlock: (t) => {
                this.youzanyunPrice = !!t;
              },
              showShareIcon: (t) => {
                this.store.setShareIconShow(!!t);
              },
            }),
            Object(s.c)(this, ["currentActivity", "goodsActivity"], {
              callback: (t) => this.store.setUmpBannerInfo(t),
            }),
            Object(s.c)(this, ["umpActivity", "goodsBaseInfo"], {
              callback: (t) => {
                var { umpActivity: e, goodsBaseInfo: i } = t;
                this.fetchNewerCoupon({ umpActivity: e, goodsBaseInfo: i });
              },
            }),
            Object(s.c)(
              this,
              ["salesmanShareData", "goodsBaseInfo", "goodsPriceInfo"],
              {
                callback: (t) => {
                  var {
                      salesmanShareData: e = {},
                      goodsBaseInfo: i,
                      goodsPriceInfo: o,
                    } = t,
                    { isShoppingGuide: s = !1 } = e,
                    { id: r } = i,
                    { minPrice: n = 0 } = o;
                  s &&
                    r &&
                    ((t) =>
                      Object(I.default)({
                        path: "/guide/goods/batchBudgetCommission.json",
                        method: "POST",
                        data: t,
                      }))({ budgetGoods: [{ goodsId: r, minPrice: n }] }).then(
                      (t) => {
                        this.profit = t && p()(t);
                      }
                    );
                },
              }
            ),
            this.store.setUmpBannerInfo({
              currentActivity: this.currentActivity,
              goodsActivity: this.goodsActivity,
            }),
            this.fetchNewerCoupon({
              umpActivity: this.umpActivity,
              goodsBaseInfo: this.goodsBaseInfo,
            }),
            this.setBuyButtonPop(),
            this.setIsNewcomerCoupon();
        },
        methods: {
          onNavUpdate(t) {
            this.ctx.event.emit("nav:update", t);
          },
          setShareShow() {
            this.ctx.event.emit("share:show");
          },
          setFollowShow(t) {
            this.ctx.event.emit("follow:show", t);
          },
          setWecomBenefitShow(t) {
            this.ctx.event.emit("wecomBenefit:show", t);
          },
        },
      };
      e.default = n.default.component(x);
    },
  })
);
