"use strict";
var r = require("~/r");
r(
  "ggZj",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      ggZj: function (t, e, s) {
        s.r(e);
        var i = s("Fcif"),
          o = s("AGZf"),
          a = s("xyw3"),
          r = s("gaeN"),
          u = s("mztD"),
          l = s("lgMb"),
          n = { SECURED: Object(u.a)("icon/guarantee-icon.svg") },
          d = {
            HAITAO: Object(u.a)(
              "public_files/2019/08/19/fbd4c38994578e951ef1cdfd9104606d.png"
            ),
            PERIOD_BUY: Object(u.a)(
              "public_files/2019/08/19/aea27fff45f6edb02bfd31c0b7ff3f04.png"
            ),
            MEMBER_DISCOUNT: Object(u.a)(
              "cdn/FkhVnpHh7ZwFAvBaUwO8B0F2Gf4V-1.png"
            ),
            IS_DRUG_GOOD: Object(u.a)("path/to/cdn/dir/isDrugTag_3x.png"),
          };
        function h(t) {
          t && "string" == typeof t && (t = [t]);
          var { activityTag: e } = this.goods,
            s = e && "会员折扣" === e,
            i =
              this.goods.limitNum > 0 ? this.goods.limitNum : this.goods.stock,
            o = {
              goodsSettlementMark() {
                var t, e;
                return (
                  (null == (t = this.goods) || null == (e = t.settlementRule)
                    ? void 0
                    : e.settlementMark) || ""
                );
              },
              comboDetail() {
                var t,
                  e,
                  s,
                  i = [];
                return (
                  null != (t = this.goods) &&
                    null != (e = t.comboDetail) &&
                    null != (s = e.groupList) &&
                    s.length &&
                    this.goods.comboDetail.groupList.forEach((t) => {
                      var { subComboList: e } = t;
                      e.forEach((t) => {
                        var { num: e, thumbUrl: s } = t;
                        i.push({ src: s, num: e });
                      });
                    }),
                  i
                );
              },
              goodsTitleTag() {
                var t, e, s, i;
                return "1" ===
                  (null == (t = this.goods) ||
                  null == (e = t.bizExtension) ||
                  null == (s = e.cartBizMark)
                    ? void 0
                    : s.IS_PRESCRIPTION_DRUG)
                  ? d.IS_DRUG_GOOD
                  : d[
                      null == (i = this.goods.settlementRule)
                        ? void 0
                        : i.settlementMark
                    ];
              },
              isMemberDiscount: () => s,
              goodsTagList() {
                var t,
                  {
                    activityTag: e,
                    isInstallment: i,
                    bizExtension: o = {},
                  } = this.goods,
                  a = [];
                return (
                  "0" ===
                    (null == o || null == (t = o.cartBizMark)
                      ? void 0
                      : t.PRE_SALE_TYPE) && a.push("预售"),
                  s && a.push("会员价"),
                  e && "会员折扣" !== e && a.push(e),
                  a
                );
              },
              stockLimitText() {
                return this.goods.isShowStockShort
                  ? "库存紧张"
                  : this.goods.isShowStockNum
                  ? "仅剩" + this.goods.stock + "件"
                  : "";
              },
              goodsMaxNum: () => i,
              goodsLimitNum() {
                var t, e, s;
                return "1" ===
                  (null == (t = this.goods) ||
                  null == (e = t.bizExtension) ||
                  null == (s = e.cartBizMark)
                    ? void 0
                    : s.IS_PRESCRIPTION_DRUG)
                  ? Math.min(1e4, i)
                  : i;
              },
              goodsNum() {
                var t;
                return (null == (t = this.goods) ? void 0 : t.num) || 1;
              },
              stepperDisablePlus() {
                var { maxNum: t, num: e } = this.goods;
                return !!t && e >= t;
              },
              stepperDisableMinus() {
                return (
                  !!this.startSaleNum &&
                  this.goods.num <= this.startSaleNum &&
                  !this.goods.limitNum
                );
              },
              startSaleNumAndLimitDesc() {
                var { startSaleNum: t } = this,
                  { limitNum: e = 0 } = this.goods,
                  s = "";
                return (
                  t > 1 && e
                    ? (s = t + "件起售，限购" + e + "件")
                    : t > 1 && (s = t + "件起售"),
                  s
                );
              },
              cutPriceDesc() {
                var { cutPrice: t } = this.goods;
                return +t
                  ? "比加入时便宜" + Object(a.a)(t).toYuan() + "元"
                  : "";
              },
              isCanChangeSku() {
                var t =
                  !!this.startSaleNum && this.goods.num < this.startSaleNum;
                return !(
                  24 == +this.goods.activityType ||
                  t ||
                  this.isSub ||
                  this.goods.canyinId
                );
              },
              isCanStepperFormater() {
                var t = 24 == +this.goods.activityType;
                return this.isCanStepper && !t;
              },
              isNotStartSold() {
                var t = new Date().getTime() / 1e3,
                  { startSoldTime: e } = this.goods,
                  s = !1;
                return e && e > t && (s = !0), s;
              },
              isEduIosOnlineGoods() {
                return Object(r.a)(this.goods);
              },
              presaleDate() {
                var t, e, s;
                return (
                  (null == this ||
                  null == (t = this.goods) ||
                  null == (e = t.bizExtension) ||
                  null == (s = e.cartBizMark)
                    ? void 0
                    : s.PRE_SALE_DATE) || ""
                );
              },
              presaleDateStyle() {
                return "color: " + this.themeColors.notice;
              },
            };
          return (t && t.length ? t : Object.keys(o)).reduce(
            (t, e) => ((t[e] = o[e].call(this)), t),
            {}
          );
        }
        var g = {
            props: {
              goods: Object,
              editMode: Boolean,
              hideTag: Boolean,
              isCanStepper: { type: Boolean, default: !0 },
              isSub: { type: Boolean, value: !1 },
              startSaleNum: { type: Number, value: 0 },
              themeColors: { type: Object, default: () => ({}) },
              themeTag: { type: Object, default: () => ({}) },
              showEstimatedPrice: { type: Boolean, default: !1 },
              themeStyle: { type: String, default: "" },
            },
            data() {
              var t = h.call(this);
              return Object(i.a)(
                {
                  GOODS_TAG_MAP: d,
                  GOODS_IMG_TAG_MAP: n,
                  priceStyle: "",
                  isShowCutPriceDescDivider: !0,
                },
                t,
                {}
              );
            },
            watch: {
              goods() {
                this.updateComputedData();
              },
              themeColors() {
                this.updateComputedData(["presaleDateStyle"]);
              },
            },
            mounted() {
              this.viewLog(),
                this.computedPriceStyle(),
                this.computedMessageDivider();
            },
            methods: {
              updateComputedData(t) {
                var e = h.call(this, t);
                Object.keys(e).forEach((t) => {
                  this[t] = e[t];
                });
              },
              changeSwipeStatus(t) {
                this.$emit("change-swipe-status", t);
              },
              handleStepPlus() {
                this.handleStepPlusorMinusLogger(!0);
              },
              handleStepMinus() {
                this.handleStepPlusorMinusLogger(!1);
              },
              handleStepPlusorMinusLogger(t) {
                var {
                    sku: e,
                    skuData: s,
                    skuId: i,
                    goodsId: o,
                    title: a,
                  } = this.goods,
                  r = {
                    et: "click",
                    ei: "cart_" + (t ? "increase" : "decrease") + "_goods_num",
                    en: "购物车页面-" + (t ? "增加" : "减少") + "商品数量",
                    params: {
                      no_sku: e ? 0 : 1,
                      sku_id: i,
                      sku_name: s,
                      goods_id: o,
                      goods_name: a,
                    },
                  };
                this.$emit("item-num-change-logger", r);
              },
              handleStepChange(t) {
                var e = { cartId: this.goods.cartId, num: +t };
                this.$emit("item-num-change", e);
              },
              handleGoodsImgTap() {
                if (!this.editMode) {
                  var { alias: t } = this.goods;
                  t
                    ? this.$emit("goods-img-click", { alias: t })
                    : Object(l.b)(
                        { goods: this.goods },
                        { message: "商品数据异常，请刷新重试", log: !0 }
                      );
                }
              },
              handleStepOverLimit(t) {
                var e,
                  s,
                  i,
                  a = 31 === this.goods.goodsType;
                if (this.stepperDisableMinus)
                  Object(o.a)("该商品" + this.startSaleNum + "件起售哦");
                else if ("minus" === t)
                  Object(o.a)(a ? "最少购买1门课" : "最少购买1件哦");
                else {
                  if (
                    "1" ===
                      (null == (e = this.goods) ||
                      null == (s = e.bizExtension) ||
                      null == (i = s.cartBizMark)
                        ? void 0
                        : i.IS_PRESCRIPTION_DRUG) &&
                    this.goods.num >= 1e4 &&
                    "plus" === t
                  )
                    return Object(o.a)("为保障用药安全，不能添加更多");
                  !this.goods.limitNum ||
                  this.goods.limitNum > this.goods.stockNum
                    ? Object(o.a)(
                        a ? "超出该课程可购买数量" : "该商品不能购买更多哦"
                      )
                    : 4 === this.goods.quotaCycle
                    ? Object(o.a)("该商品每单限购" + this.goods.limitNum + "件")
                    : Object(o.a)("商品限购" + this.goods.limitNum + "件");
                }
              },
              handleChangeGoodsSku() {
                (this.isCanChangeSku || this.goods.revive) &&
                  this.$emit("change-goods-sku");
              },
              computedPriceStyle() {
                (this.priceStyle = ""),
                  this.createSelectorQuery()
                    .select(".goods-item--right")
                    .boundingClientRect((t) => {
                      if (t) {
                        var { height: e } = t;
                        e < 96 &&
                          (this.priceStyle = "padding-top: " + (96 - e) + "px");
                      }
                    })
                    .exec();
              },
              computedMessageDivider() {
                this.createSelectorQuery()
                  .select(".cart-goods__message-tips")
                  .boundingClientRect((t) => {
                    if (t) {
                      var { height: e } = t;
                      e > 24 && (this.isShowCutPriceDescDivider = !1);
                    }
                  })
                  .exec();
              },
              viewLog() {
                var t;
                1 == +this.goods.activityType &&
                  (null == (t = this.logger) ||
                    t.log({
                      et: "view",
                      ei: "cart_limited_discount_view",
                      en: " 购物车限时折扣曝光",
                      params: {
                        item_type: "limitdiscount",
                        activity_type: "limitdiscount",
                        kdt_id: this.goods.kdtId,
                      },
                    }));
              },
              noopFn() {},
            },
          },
          c = s("9ZMt");
        e.default = c.default.component(g);
      },
    }
  )
);
