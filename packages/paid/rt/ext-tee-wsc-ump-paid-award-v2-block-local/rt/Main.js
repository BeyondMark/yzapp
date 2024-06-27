"use strict";
var r = require("~/r");
r(
  "LQoY",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "95W+": function (e, t, i) {
        i.d(t, "a", function () {
          return s;
        }),
          i.d(t, "b", function () {
            return c;
          });
        var a = i("eijD"),
          r = i("bsB/"),
          o = i("WNIS"),
          n = i("FDI5"),
          s = () =>
            new Promise((e) => {
              Object(n.a)().then((t) => {
                var { available: i } = t;
                i &&
                  Object(r.d)().then((t) => {
                    t &&
                      wx
                        .getStorage({ key: o.g })
                        .then((t) => {
                          t.data !== new Date().toLocaleDateString() && e(!0);
                        })
                        .catch(() => {
                          e(!0);
                        });
                  });
              });
            });
        function c(e) {
          return h.apply(this, arguments);
        }
        function h() {
          return (h = Object(a.a)(function* (e) {
            var { onClose: t = () => {} } = e;
            return Object(r.e)({
              scene: o.f,
              needAlwaysToast: !0,
              closeCallBack: () => {
                wx.setStorage({
                  key: o.g,
                  data: new Date().toLocaleDateString(),
                }),
                  t();
              },
            });
          })).apply(this, arguments);
        }
      },
      FDI5: function (e, t, i) {
        i.d(t, "a", function () {
          return r;
        });
        var a = getApp(),
          r = () => a.request({ path: "/wscuser/scrm/api/isCrmShop.json" });
      },
      LQoY: function (e, t, i) {
        i.r(t);
        var a = i("Fcif"),
          r = i("eijD"),
          o = i("+I+c"),
          n = i("YeA1"),
          s = i("jQ93"),
          c = i("9ZMt"),
          h = i("zzhz"),
          l = i("95W+"),
          u = i("enZZ"),
          d = i("YAk7"),
          p = ["fissionCoupon", "recommendCoupon"],
          f = null,
          w = {
            props: { cloudConfig: { type: Object, default: () => ({}) } },
            data() {
              return {
                kdtId: 0,
                orderNo: "",
                payResult: {},
                canUseTradeUmpV1: !1,
                newAwardInfo: {},
                award: {},
                showAwardV2Block: !1,
                showMemberGuide: !1,
                afterPayGuide: {},
                themeGeneralColor: "",
                showMask: !1,
                usePointsExpireScene: !1,
                blockHeight: 0,
                isExpand: !1,
                hideBenefitcard: !1,
                isWxReceipt: !1,
                realHeight: 0,
                haveFission: !1,
                themeVars: "",
                navigateTo: this.navigateTo,
                isSkyline: !1,
              };
            },
            computed: {
              paidPromotionInfoList() {
                var { paidPromotionInfoList: e, paidPromotionInfo: t } =
                  this.newAwardInfo;
                return e || (t ? [t] : []);
              },
              maskStyle() {
                return "left: 0;right:0;top: " + (this.blockHeight - 36) + "px";
              },
              awardStyle() {
                return (
                  "width:100%;height: " +
                  (0 === this.blockHeight ? "initial" : this.blockHeight + "px")
                );
              },
              curCoupon() {
                var e,
                  t,
                  i = [],
                  { recommendCoupon: a } = this.newAwardInfo;
                return this.isWxReceipt && a
                  ? [
                      {
                        type: d.f.Tradeincard,
                        goods:
                          (null == a ||
                          null == (e = a.recommendItemDTOList) ||
                          null == (t = e.recommendItemDTOList)
                            ? void 0
                            : t.map((e) => {
                                var t;
                                return {
                                  alias: e.alias,
                                  imageUrl: e.logo,
                                  price: e.price,
                                  title: e.title,
                                  algId:
                                    null != (t = a.recommendItemDTOList.algId)
                                      ? t
                                      : "",
                                };
                              })) || [],
                        coupon: a,
                        isRecommend: !0,
                      },
                    ]
                  : (this.paidPromotionInfoList.forEach((e) => {
                      var {
                        imageType: t,
                        promotionType: a,
                        coupon: r,
                        couponGiftBag: o,
                        detailUrl: n,
                        activityId: s,
                      } = null != e ? e : {};
                      if (Object(d.l)(t))
                        switch (a) {
                          case d.f.Couponpackage:
                            var c;
                            i.push({
                              type: d.f.Couponpackage,
                              coupons: o.coupons,
                              total:
                                null == (c = o.coupons) ? void 0 : c.length,
                              alias: o.alias,
                              receiveStatus: o.receiveStatus,
                              detailUrl: n,
                              activityId: s,
                            });
                            break;
                          case d.f.Promocode:
                          case d.f.Tradeincard:
                            var h;
                            i.push({
                              type: d.f.Tradeincard,
                              goods:
                                null != (h = null == r ? void 0 : r.goodsList)
                                  ? h
                                  : [],
                              coupon: r,
                              activityId: s,
                            });
                        }
                    }),
                    i);
              },
              curMember() {
                var e, t;
                return null !=
                  (e = null == (t = this.award.memberCardList) ? void 0 : t[0])
                  ? e
                  : null;
              },
              curPriorUse() {
                var e, t;
                return null == (e = this.award) || null == (t = e.creditPay)
                  ? void 0
                  : t.show;
              },
              awardTitle() {
                if (
                  1 === this.paidPromotionInfoList.length &&
                  !(
                    Object(h.c)(this.award.cashBack) ||
                    Object(h.c)(this.curCoupon) ||
                    Object(h.c)(this.award.memberCardList) ||
                    Object(h.c)(this.award.credit)
                  )
                ) {
                  var e,
                    { promotionType: t, activityQrCodeType: i } =
                      null != (e = this.paidPromotionInfoList[0]) ? e : {};
                  if (t === d.f.ActivitiesQrCode)
                    return (
                      "加微信" +
                      (i === d.a.Group ? "群" : "") +
                      "，获取更多优惠信息"
                    );
                  if (t === d.f.Feature) return "浏览更多内容";
                }
                return "恭喜你获得";
              },
            },
            created() {
              var e = this;
              Object(n.b)(this, [
                "kdtId",
                "orderNo",
                "canUseTradeUmpV1",
                "isWxReceipt",
                "realHeight",
                "returnUrl",
                "themeVars",
                "themeTag",
                "isSkyline",
              ]),
                (this.payResultUnWatch = this.ctx.watch(
                  "payResult",
                  function (t) {
                    void 0 === t && (t = {}),
                      (e.payResult = t),
                      (e.afterPayGuide = Object(h.b)(e.payResult)),
                      e.computeShowAwardV2({ afterPayGuide: e.afterPayGuide });
                  }
                )),
                (this.newAwardInfoUnWatch = this.ctx.watch(
                  "newAwardInfo",
                  function (t) {
                    void 0 === t && (t = {}),
                      (e.newAwardInfo = t || {}),
                      Object(h.c)(e.newAwardInfo) &&
                        e.computeShowAwardV2({ newAwardInfo: e.newAwardInfo });
                  }
                )),
                (this.unwatchThemeColors = this.ctx.watch(
                  "themeColors",
                  (e) => {
                    this.themeGeneralColor = e.general;
                  }
                )),
                this.ctx.event.listen("showActivateBenefitcardDialog", () => {
                  this.hideBenefitcard = !0;
                }),
                Object(l.a)().then((e) => {
                  this.usePointsExpireScene = e;
                });
            },
            destroyed() {
              this.payResultUnWatch && this.payResultUnWatch(),
                this.unwatchThemeColors && this.unwatchThemeColors(),
                this.ctx.event.remove("showActivateBenefitcardDialog");
            },
            mounted() {
              this.$nextTick(() => {
                this.getPaidActionHeight();
              });
            },
            methods: {
              computeShowAwardV2(e) {
                var t,
                  { afterPayGuide: i, newAwardInfo: a } = e,
                  r = a || {};
                i &&
                  (this.showMemberGuide = !(
                    null == (t = this.afterPayGuide) || !t.needGuide
                  ));
                if (a) {
                  var n = Object(s.a)(a);
                  (r = Object(u.a)(n, this.orderNo, this.kdtId)),
                    (this.award = r);
                }
                if (a || Object.keys(this.newAwardInfo).length) {
                  var c,
                    { fissionCoupon: l = {} } = r,
                    d = Object(o.a)(r, p),
                    f = Object.keys(l).length > 0,
                    w =
                      this.canUseTradeUmpV1 &&
                      (Object(h.c)(d) ||
                        this.showMemberGuide ||
                        (f && this.isWxReceipt)),
                    v =
                      !(null != (c = this.payResult) && c.isFxZppOrder) &&
                      (w || this.showAwardV2Block);
                  (this.ctx.data.showAwardV2Block = v),
                    (this.showAwardV2Block = v),
                    (this.haveFission = f),
                    this.getPaidActionHeight();
                }
              },
              getPaidActionHeight() {
                var e = this;
                clearTimeout(f),
                  (f = setTimeout(
                    Object(r.a)(function* () {
                      e.isExpand ||
                        ((yield e.getBoundingClientRectHeight(".award-block"))
                          .height > 400 &&
                          ((e.showMask = !0), (e.blockHeight = 400)),
                        e.showMask &&
                          e.logAttach({
                            et: "view",
                            ei: "show_morePreferential",
                            en: "查看更多优惠曝光",
                          }));
                    }),
                    50
                  ));
              },
              expandAll() {
                this.ctx.process.invoke(
                  "logger",
                  "click",
                  "click_morePreferential",
                  "点击查看更多优惠"
                ),
                  this.isWxReceipt
                    ? this.navigateTo(this.returnUrl)
                    : ((this.blockHeight = 0),
                      (this.showMask = !1),
                      (this.isExpand = !0));
              },
              logAttach(e) {
                var t,
                  { ei: i, et: r, en: o, params: n = {} } = e;
                this.isWxReceipt
                  ? this.ctx.process.invoke(
                      "logger",
                      r,
                      i,
                      o,
                      Object(a.a)({ si: this.kdtId, kdt_id: this.kdtId }, n)
                    )
                  : null == (t = this.ctx.logger) ||
                    t.log({ et: r, ei: i, en: o, si: this.kdtId, params: n });
              },
              getBoundingClientRectHeight(e) {
                return new Promise((t) => {
                  this.createSelectorQuery()
                    .select(e)
                    .boundingClientRect()
                    .exec((e) => {
                      var i = e[0] || {};
                      t(i);
                    });
                });
              },
              showSalesman() {
                (this.showAwardV2Block = this.canUseTradeUmpV1),
                  this.getPaidActionHeight();
              },
              navigate(e) {
                this.isWxReceipt
                  ? this.ctx.process.invoke("navigateTo", e)
                  : c.default.navigate({ url: e });
              },
              navigateTo(e, t) {
                this.ctx.process
                  .invokePipe("beforeGoToUrl", { type: t })
                  .then((t) => {
                    var { hasBindingByCloud: i = !1 } = t;
                    this.navigate(e);
                  })
                  .catch((e) => {});
              },
            },
          };
        t.default = c.default.component(w);
      },
      jQ93: function (e, t, i) {
        var a = i("rmWm"),
          r = i.n(a).a,
          o = i("YIkY"),
          n = i.n(o).a;
        function s(e) {
          return (
            !0 ==
              (null != (t = e) &&
                "object" == typeof t &&
                !1 === Array.isArray(t)) &&
            "[object Object]" === Object.prototype.toString.call(e)
          );
          var t;
        }
        var c = function (e) {
          var t, i;
          return (
            !1 !== s(e) &&
            "function" == typeof (t = e.constructor) &&
            !1 !== s((i = t.prototype)) &&
            !1 !== i.hasOwnProperty("isPrototypeOf")
          );
        };
        t.a = function (e) {
          var t,
            i = n(e);
          if ("object" !== i && "array" !== i) return r(e);
          for (
            var a = [],
              o = [{ value: e, key: void 0, ctx: null }],
              s = function () {
                var e = o.shift(),
                  { value: i, key: s, ctx: h } = e;
                a.forEach((e) => {
                  if (e === i) throw new Error("Deep copy circular structure");
                });
                var { value: l, needCycle: u } = (function (e) {
                  switch (n(e)) {
                    case "object":
                      return c(e)
                        ? { value: new e.constructor(), needCycle: !0 }
                        : { value: e, needCycle: !1 };
                    case "array":
                      return { value: new e.constructor(), needCycle: !0 };
                    default:
                      return { value: r(e), needCycle: !1 };
                  }
                })(i);
                h ? (h[s] = l) : (t = l),
                  u && a.push(i),
                  u &&
                    Object.keys(i).forEach((e) => {
                      o.push({ value: i[e], key: e, ctx: l });
                    });
              };
            o.length > 0;

          )
            s();
          return t;
        };
      },
    }
  )
);
