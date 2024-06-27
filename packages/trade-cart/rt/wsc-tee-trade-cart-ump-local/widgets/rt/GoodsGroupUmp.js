"use strict";
var r = require("~/r");
r(
  "rfkv",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      rfkv: function (t, i, e) {
        e.r(i);
        var o = e("Fcif"),
          s = e("2Z9d"),
          a = e("xyw3"),
          c = e("taYb"),
          n = e("AGZf"),
          l = e("+66q"),
          r = e("b4An"),
          h = e("YeA1"),
          d = {
            [l.j.MEET_REDUCE]: "/packages/ump/meet-reduce-goods/index",
            [l.j.MEET_SEND]: "/packages/ump/meet-reduce-goods/index",
            [l.j.PACKAGE_BUY]: "/packages/ump/bundle-purchase/goods-list/index",
            [l.j.SECOND_HALF_DISCOUNT]:
              "/packages/ump/second-half-discount/index",
          },
          y = 101,
          u = 261,
          v = 24,
          p = 115,
          g = 10101,
          m = {
            [104]: l.j.PACKAGE_BUY,
            [y]: l.j.MEET_REDUCE,
            [u]: l.j.MEET_SEND,
            [v]: l.j.PLUS_BUY,
            [p]: l.j.SECOND_HALF_DISCOUNT,
            [g]: "multiCourseApply",
          };
        function A(t) {
          var i = (() => {
              var t = this.goodsList;
              return (
                !(
                  !this.isEditing &&
                  !(t = this.goodsList.filter((t) => !Object(s.e)(t))).length
                ) &&
                t.every((t) => -1 !== Object(s.h)(this.checkedGoodsList, t))
              );
            })(),
            e = {
              isAllActivityGoodsChoose: () => i,
              canShowPopup() {
                return this.activityInfo.activityDuration;
              },
              activityTypeAlias() {
                return m[this.activityInfo.activityType];
              },
              activityId() {
                return this.activityInfo.activityId;
              },
              iconName: () => (i ? "checked" : "circle"),
              iconColor() {
                return i ? this.themeGeneralColor : "#969799";
              },
            },
            a = Object.keys(e);
          t && Array.isArray(t) && t.length && (a = t);
          var c = a.reduce((t, i) => ((t[i] = e[i].call(this)), t), {});
          return Object(o.a)({ isAllActivityGoodsChoose: i }, c);
        }
        function f(t) {
          return t
            .filter((t) => !!t.activityId && +t.activityType === v)
            .map(
              (t) => (
                ((t = c.a.toCamelCase(t)).skuData = (function (t) {
                  var i = [];
                  try {
                    i = JSON.parse(t || "[]") || [];
                  } catch (t) {
                    i = [];
                  }
                  return i;
                })(t.sku)),
                t
              )
            );
        }
        var C = {
            name: "goods-group-ump",
            props: {
              kdtId: { type: Number, required: !0 },
              offlineId: Number,
              isEditing: { type: Boolean, default: !1 },
              activityInfo: { type: Object, default: () => ({}) },
              goodsList: { type: Array, default: () => [] },
              checkedGoodsList: { type: Array, default: () => [] },
              themeGeneralColor: String,
              themeGeneralAlpha10Color: String,
              themeCss: String,
              themeColors: { type: Object, default: () => ({}) },
              logger: { type: Object, default: () => ({}) },
              onlyShowExchange: { type: Boolean, default: !1 },
            },
            data() {
              var t = A.call(this),
                i = this.getUmpDataByGoodsList(t.activityTypeAlias);
              return Object(o.a)(
                {
                  showPopup: !1,
                  showExchangeModal: !1,
                  plusBuyGoods: [],
                  activityBtnTxt: "",
                  exchangeModalDesc: "",
                  themeTag: {},
                },
                t,
                i
              );
            },
            watch: {
              goodsList() {
                var t = A.call(this, [
                    "isAllActivityGoodsChoose",
                    "iconName",
                    "iconColor",
                    "activityTypeAlias",
                  ]),
                  i = this.getUmpDataByGoodsList(t.activityTypeAlias),
                  e = Object(o.a)({}, i, t);
                Object.keys(e).forEach((t) => {
                  this[t] = e[t];
                }),
                  this.onlyShowExchange && this.toActivityUrl();
              },
              isEditing() {
                this.changeComputedData([
                  "isAllActivityGoodsChoose",
                  "iconName",
                  "iconColor",
                ]);
              },
              checkedGoodsList() {
                this.changeComputedData([
                  "isAllActivityGoodsChoose",
                  "iconName",
                  "iconColor",
                ]);
              },
              activityInfo() {
                this.changeComputedData([
                  "canShowPopup",
                  "activityTypeAlias",
                  "activityId",
                ]);
              },
              themeGeneralColor() {
                this.changeComputedData([
                  "isAllActivityGoodsChoose",
                  "iconName",
                  "iconColor",
                ]);
              },
            },
            mounted() {
              this.plusBuyGoods = f(this.goodsList);
            },
            created() {
              Object(h.b)(this, ["themeTag"]);
            },
            methods: {
              changeComputedData(t) {
                var i = A.call(this, t);
                Object.keys(i).forEach((t) => {
                  this[t] = i[t];
                });
              },
              getUmpDataByGoodsList(t) {
                var i;
                return (
                  null == (i = this.logger) ||
                    i.log({
                      et: "view",
                      ei: "cart_activity_view",
                      en: "购物车优惠活动曝光",
                      params: {
                        activity_type: t,
                        activity_id: this.activityId,
                        kdt_id: this.kdtId,
                      },
                    }),
                  [
                    l.j.MEET_REDUCE,
                    l.j.MEET_SEND,
                    l.j.PACKAGE_BUY,
                    l.j.SECOND_HALF_DISCOUNT,
                  ].includes(t)
                    ? this.setCommonActivityInfo()
                    : [l.j.PLUS_BUY].includes(t)
                    ? this.setPlusBuyActivityInfo()
                    : ["multiCourseApply"].includes(t)
                    ? this.setMultiCourseApplyActivityInfo()
                    : void 0
                );
              },
              setCommonActivityInfo() {
                return this.activityInfo.meet
                  ? { activityBtnTxt: "再逛逛" }
                  : !this.activityInfo.meet && this.activityInfo.activityUrl
                  ? { activityBtnTxt: "去凑单" }
                  : void 0;
              },
              setPlusBuyActivityInfo() {
                this.plusBuyGoods = f(this.goodsList);
                var t = "",
                  i = "",
                  { conditionPrice: e } = this.activityInfo;
                return (
                  this.activityInfo.meet
                    ? this.plusBuyGoods.length
                      ? ((i = "已购满" + this.moneyToYuan(e) + "元，"),
                        (t = "重新换购"))
                      : ((i = "已购满" + this.moneyToYuan(e) + "元，"),
                        (t = "去换购"))
                    : (t = "去凑单"),
                  { activityBtnTxt: t, exchangeModalDesc: i }
                );
              },
              setMultiCourseApplyActivityInfo: () => ({
                activityBtnTxt: "去选报",
              }),
              handleCloseExchangeModal() {
                this.showExchangeModal = !1;
              },
              handleExchangeSucceed() {
                this.$emit("refresh-cart-goods-list");
              },
              moneyToYuan: (t) => Object(a.a)(t).toYuan(),
              clickActivityText() {
                this.canShowPopup && (this.showPopup = !0);
              },
              toActivityUrl() {
                var t,
                  i,
                  {
                    activityInfo: {
                      activityAlias: e,
                      activityId: o,
                      activityType: s,
                    },
                    activityTypeAlias: a,
                  } = this;
                if (
                  (null == (t = this.logger) ||
                    t.log({
                      et: "click",
                      ei: "cart_activity_click",
                      en: "购物车页活动点击",
                      params: {
                        activity_type: this.activityTypeAlias,
                        activity_id: this.activityId,
                        kdt_id: this.kdtId,
                      },
                    }),
                  ["plusBuy"].includes(a))
                ) {
                  if ("去凑单" !== this.activityBtnTxt)
                    this.showExchangeModal = !0;
                  else {
                    var c = this.kdtId;
                    (c = "/packages/ump/plusbuy/index?activityId=" + o),
                      this.ctx.process.invoke("navigateFromCart", { link: c });
                  }
                } else {
                  if (["multiCourseApply"].includes(a)) {
                    var n = Object(r.a)(
                      "/wscvis/ump/liangfan/" + e + "?kdt_id=" + this.kdtId,
                      "h5"
                    );
                    return (
                      (n =
                        "/pages/common/webview-page/index?src=" +
                        encodeURIComponent(
                          Object(r.a)(
                            "/wscvis/ump/liangfan/" +
                              e +
                              "?kdt_id=" +
                              this.kdtId,
                            "h5"
                          )
                        )),
                      void this.ctx.process.invoke("navigateFromCart", {
                        link: n,
                        navigateType: "navigateTo",
                      })
                    );
                  }
                  var l = null == (i = this.activityInfo) || i.activityUrl;
                  (l = d[a] + "?alias=" + e),
                    this.ctx.process.invoke("navigateFromCart", { link: l });
                }
              },
              chooseAllActivityGoods() {
                var t = this.isAllActivityGoodsChoose ? "remove" : "add",
                  i = this.goodsList;
                this.isEditing ||
                (i = this.goodsList.filter((t) => !Object(s.e)(t))).length
                  ? this.$emit("change-item-checked", {
                      rangeType: "batch",
                      type: t,
                      goodsList: i,
                      isActivity: !0,
                    })
                  : Object(n.a)(
                      "购物车里面尚未选中商品，请重新返回活动页/商品页加购"
                    );
              },
              closeUmpPopup() {
                this.showPopup = !1;
              },
            },
          },
          E = e("9ZMt");
        i.default = E.default.component(C);
      },
    }
  )
);
