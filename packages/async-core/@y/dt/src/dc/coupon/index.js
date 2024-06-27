"use strict";
var r = require("~/r");
r(
  "w/Q4",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      vbO4: function (e, t, i) {
        i.d(t, "h", function () {
          return o;
        }),
          i.d(t, "a", function () {
            return n;
          }),
          i.d(t, "i", function () {
            return u;
          }),
          i.d(t, "k", function () {
            return r;
          }),
          i.d(t, "d", function () {
            return a;
          }),
          i.d(t, "l", function () {
            return s;
          }),
          i.d(t, "e", function () {
            return d;
          }),
          i.d(t, "f", function () {
            return c;
          }),
          i.d(t, "n", function () {
            return p;
          }),
          i.d(t, "g", function () {
            return h;
          }),
          i.d(t, "b", function () {
            return l;
          }),
          i.d(t, "m", function () {
            return g;
          }),
          i.d(t, "j", function () {
            return C;
          }),
          i.d(t, "c", function () {
            return m;
          });
        var o = { OFF: "0", ON: "1" },
          n = 10,
          u = 6,
          r = { marketingPage: "marketing-page" },
          a = [160700605, 160700606, 161201051, 160700517],
          s = {
            FreeMember: 1,
            PaidMember: 2,
            FreeBenefitCard: 3,
            PaidBenefitCard: 4,
          },
          d = "coupon",
          c = { Coupon: "coupon", Goods: "goods", Casino: "casino" },
          p = {
            [s.FreeMember]: "开通会员",
            [s.PaidMember]: "开通会员",
            [s.FreeBenefitCard]: "获得权益卡",
            [s.PaidBenefitCard]: "获得权益卡",
          },
          h = "领券",
          l = {
            [s.FreeMember]: "注册会员",
            [s.PaidMember]: "开通会员",
            [s.FreeBenefitCard]: "立即开卡",
          },
          g = {
            [s.FreeMember]: "注册会员",
            [s.PaidMember]: "开通会员",
            [s.FreeBenefitCard]: "免费领卡",
            [s.PaidBenefitCard]: "立即开卡",
          },
          C = {
            [s.FreeMember]: "免费会员",
            [s.PaidMember]: "付费会员",
            [s.FreeBenefitCard]: "权益卡",
            [s.PaidBenefitCard]: "权益卡",
          },
          m = [160700605, 160700606, 161201051, 160700517];
      },
      "w/Q4": function (e, t, i) {
        i.r(t);
        var o = i("Fcif"),
          n = i("9ZMt"),
          u = i("DXKY"),
          r = i("tuFO"),
          a = i.n(r),
          s = i("1Amh"),
          d = i("R7Zb"),
          c = i("bs6A"),
          p = i("vbO4"),
          h = i("VD5+"),
          l = i("AGZf"),
          g = i("lgMb"),
          C = {
            mixins: [Object(d.a)({ optDesc: s.a }), c.a],
            props: {
              kdtId: Number,
              needSubscribeMessage: { type: Boolean, default: !1 },
              _opt: { type: Object, default: () => ({}) },
            },
            data: () => ({
              curCoupons: [],
              voucherActivityId: "",
              redirectUrl: "",
              beforGuide: () => {},
              guideInfo: {},
              showGuide: !1,
              mobile: "",
            }),
            logicData: () => ({ allCoupons: [], loading: !1 }),
            computed: {
              layoutOptWithWidthAndScrollView() {
                var { curCoupons: e } = this,
                  { layoutOpt: t = {} } = this.opt;
                return (
                  "400tvw" === t.itemWidth &&
                    e &&
                    1 === e.length &&
                    (t.itemWidth = "940tvw"),
                  (t.canUseScrollView = !1),
                  t
                );
              },
              showLoadMore() {
                var { loadMore: e, maxNum: t } = this.opt,
                  i = t || p.a;
                return (
                  e === p.h.ON &&
                  this.curCoupons.length <= i &&
                  this.allCoupons.length > this.curCoupons.length
                );
              },
            },
            watch: {
              kdtId() {
                this.init();
              },
              opt() {
                this.init();
              },
            },
            created() {
              this.fetchCoupons(), (this.beforGuide = this.handleClickCoupon);
            },
            methods: {
              init() {
                (this.loading = !1), this.fetchCoupons();
              },
              onPullDownRefresh() {
                this.init();
              },
              loadMoreCoupons() {
                var { allCoupons: e, curCoupons: t } = this;
                if (!(t.length >= e.length)) {
                  t.length &&
                    this.sendComponentLogger("logger", {
                      et: "click",
                      ei: "viewmore_click",
                      en: "点击查看更多",
                      params: {
                        component: "promocard",
                        banner_id: this.getBannerId(),
                      },
                    });
                  var i = e.slice(t.length, t.length + p.i);
                  this.curCoupons = t.concat(i);
                }
              },
              fetchCoupons() {
                if (!this.loading) {
                  var {
                    couponActiveType: e,
                    coupon: t,
                    num: i,
                    aliases: n,
                    hideEmpty: u,
                    hideUnshared: r,
                    source: a,
                    maxNum: s = 10,
                    loadMore: d,
                  } = this.opt;
                  if ("manual" !== a || 0 !== n.length) {
                    var c = +i >= s ? s : +i;
                    "auto" === a && 0 == +i && (c = 10);
                    var l,
                      g = {};
                    1 === e
                      ? ((g = { alias: n, source: 1, hideInvalid: +u }),
                        (l = h.a.searchPlatformCoupons))
                      : ((g = {
                          aliases: n,
                          pageNum: 1,
                          pageSize: c,
                          type: 1,
                          timelineStatus: 2,
                          source: "wap_showcase",
                          activityTypeGroup: 1,
                          includeNotSupportSend: u,
                          isDisableUnshare: r,
                          bizIdentity: "SEC",
                          bizScene: "EC_BIZ_SD_VOUCHER_COMP",
                          refActivityScene: "SHOP_MICRO_PAGE",
                        }),
                        (l = h.a.searchCoupons)),
                      (this.loading = !0),
                      l(g).then((e) => {
                        this.couponViewLogger(e),
                          (this.allCoupons = (e || []).map((e) => {
                            var { valueCopyWriting: i, alias: n } = e || {},
                              u = {};
                            return (
                              t &&
                                0 !== t.length &&
                                (u = t.find((e) => e.alias === n)),
                              Object(o.a)({ sign: u.sign || "" }, e, {
                                isIncludeChineseCharacter:
                                  /(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(
                                    i
                                  ),
                                text: this.getCouponText(e),
                                isRecevied: !1,
                              })
                            );
                          })),
                          d === p.h.ON
                            ? this.loadMoreCoupons()
                            : (this.curCoupons = this.allCoupons),
                          (this.loading = !1);
                      });
                  }
                }
              },
              getCouponText(e) {
                var t,
                  { status: i, sendStockQty: o } = e || {},
                  { layoutOpt: n = {}, style: u } = this.opt,
                  { type: r } = n;
                return 7 !== u || ("one" !== r && "two" !== r)
                  ? (7 !== u &&
                      (t = 1 === i ? "已失效" : 0 === o ? "已抢光" : ""),
                    t || ("one" === r ? "立即领取" : "领取"))
                  : "";
              },
              handleNext(e) {
                return this.needSubscribeMessage
                  ? this.$emit("handleCouponClick", {
                      windowType: "micro_dc_coupon",
                      subscribeType: "优惠券组件",
                      next: e,
                    })
                  : e();
              },
              handleClickCoupon(e) {
                var { curCoupons: t = [], _opt: i = {} } = this,
                  {
                    layoutOpt: o = {},
                    style: r,
                    couponActiveType: s,
                    pageType: d,
                  } = this.opt,
                  { type: c } = o,
                  C = t[e];
                if (C && !C.disabled)
                  if (1 !== s) {
                    var {
                      receivedStatus: m,
                      userCouponId: f,
                      alias: v,
                      type: D = "card",
                    } = C;
                    if (
                      (this.sendComponentLogger(
                        "click_content",
                        this.computedCouponLoggerParams(C, e)
                      ),
                      3 !== m || !f)
                    ) {
                      var F = {
                        alias: v,
                        sign: C.sign || "",
                        source:
                          d === p.k.marketingPage
                            ? "umpCollection"
                            : "wap_showcase",
                        pageAlias: i.risk_alias,
                        pageType: i.risk_type,
                      };
                      return h.a
                        .takeCouponByAlias(F)
                        .then((e) => {
                          this.handleNext(() => {
                            var { id: i, type: o } = e || {};
                            l.a.success("领取成功"),
                              (C.userCouponId = i),
                              (C.isRecevied = !0),
                              (C.receivedStatus = 2),
                              (C.type = o),
                              "one" === c && 7 !== r && (C.text = "继续领取"),
                              (this.curCoupons = [...t]);
                          });
                        })
                        .catch((i) => {
                          if (p.d.includes(i.data.code))
                            return h.a
                              .takeCouponInfo(
                                C.sign
                                  ? { alias: v, sign: C.sign }
                                  : { alias: v }
                              )
                              .then((t) => {
                                var { couponGroupId: o } = t;
                                return (
                                  (this.$refs[
                                    "guide-button" + e
                                  ].requestParam.voucherActivityId = o),
                                  (this.$refs["guide-button" + e].redirectUrl =
                                    a()(
                                      "/wscump/coupon/fetch?alias=" +
                                        v +
                                        "&shopAutoEnter=1",
                                      "h5",
                                      this.kdtId
                                    )),
                                  Promise.reject(i.data)
                                );
                              });
                          this.handleNext(() => {
                            1 === C.receivedStatus
                              ? ((C.disabled = !0),
                                7 !== r && (C.text = "领取"))
                              : 2 === C.receivedStatus &&
                                ("one" === c &&
                                  7 !== r &&
                                  (C.text = "立即使用"),
                                (C.receivedStatus = 3)),
                              Object(g.b)(i, {
                                message: "店铺太火爆啦，请稍后重试",
                              }),
                              (this.curCoupons = [...t]);
                          });
                        });
                    }
                    h.a
                      .fetchCouponGoodsLink({ couponId: f, groupType: D })
                      .then((e) => {
                        this.handleNext(() => {
                          var { weappUrl: t = "", isSwitchTab: i } = e || {};
                          if (t) {
                            var o = i ? "switchTab" : "navigateTo";
                            n.default.navigate({ type: o, url: t });
                          }
                        });
                      });
                  } else u.a.trigger("feature-platform-coupon:open", C);
              },
              computedCouponLoggerParams(e, t) {
                return Object(o.a)(
                  {
                    index: t + 1,
                    id: e.id,
                    item_id: e.id,
                    act_id: e.id,
                    act_type: 105,
                    item_type: "promocard",
                    component: "promocard",
                    banner_id: this.getBannerId(t + 1),
                  },
                  this.getComponentLoggerExtraParams()
                );
              },
              couponViewLogger(e) {
                if (Array.isArray(e)) {
                  var t = e.map((e, t) => ({
                    act_id: e.alias,
                    act_type: "coupon",
                    activity_type: "coupon",
                    item_type: "coupon",
                    item_id: e.alias,
                    banner_id: this.getBannerId(t + 1),
                  }));
                  this.sendComponentLogger("logger", {
                    et: "view",
                    ei: "view",
                    en: "优惠券内容曝光",
                    params: { view_objs: t },
                  });
                }
              },
              openGuideDialog(e) {
                var { needGuide: t, guideType: o, guideTargetAlias: n } = e;
                t &&
                  i
                    .e("packages/async-core/chunk")
                    .then(i.bind(null, "JvWB"))
                    .then((e) => e.default)
                    .then((e) => {
                      e.getUserInfo().then((e) => {
                        var { mobile: t } = e;
                        (this.showGuide = !0),
                          (this.guideInfo = {
                            targetType: o,
                            guideTargetAlias: n,
                          }),
                          (this.mobile = t);
                      });
                    });
              },
              closeGuide() {
                this.showGuide = !1;
              },
            },
            ud: !0,
          };
        t.default = n.default.component(C);
      },
    }
  )
);
