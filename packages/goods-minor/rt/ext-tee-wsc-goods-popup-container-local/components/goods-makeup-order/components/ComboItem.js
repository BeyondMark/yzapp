"use strict";
var r = require("~/r");
r(
  "2bAh",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "2bAh": function (t, e, o) {
        o.r(e);
        var s = o("Fcif"),
          i = o("lCVF"),
          r = o.n(i),
          a = o("ZLeZ"),
          d = o("ZSrH"),
          c = o("AGZf"),
          h = {
            name: "combo-item",
            props: {
              combo: { type: Object },
              index: { type: Number },
              kdtId: { type: Number, default: () => 0 },
              ctx: { type: Object },
              offlineId: { type: Number },
            },
            data: () => ({
              goodsItems: [],
              sumPromotionTotalPrice: "",
              originPrice: "",
              totalDecrease: "",
              submitting: !1,
            }),
            computed: {
              justAddGoods() {
                return this.goodsItems[0];
              },
              comboGoodsList() {
                return this.goodsItems.slice(1);
              },
              sumPromotionTotalPriceFmt() {
                return r()(this.sumPromotionTotalPrice);
              },
              originPriceFmt() {
                return r()(this.originPrice);
              },
              totalDecreaseFmt() {
                return r()(this.totalDecrease);
              },
              totalNum() {
                return this.totalGoods.length;
              },
              totalGoods() {
                return [...this.inCartGoods, ...this.checkedGoods];
              },
              checkedGoods() {
                return this.goodsItems.filter((t) => t.isChecked);
              },
              inCartGoods() {
                return this.goodsItems.filter((t) => t.isAddToShoppingCart);
              },
              addCartDisabled() {
                return this.goodsItems.every(
                  (t) => "boolean" != typeof t.isChecked || !1 === t.isChecked
                );
              },
            },
            created() {
              this.initViewData();
            },
            methods: {
              discountedPreviewLog(t) {
                this.ctx.logger.log({
                  et: "view",
                  ei: "show_offerlabel",
                  en: "已优惠标签曝光",
                  params: {
                    discounted_price: t,
                    goods_num: this.combo.itemInfoList.length,
                    name: this.combo.comboTitleText,
                    sort: this.index,
                    component: "addcart_discounts",
                  },
                });
              },
              initViewData() {
                var {
                  itemInfoList: t = [],
                  sumPromotionTotalPrice: e,
                  originPrice: o,
                  totalDecrease: s,
                } = this.combo;
                (this.goodsItems = t),
                  (this.sumPromotionTotalPrice = e),
                  (this.originPrice = o),
                  (this.totalDecrease = s);
              },
              handleCheckedChange(t) {
                var e = this.goodsItems.findIndex((e) => e.skuId === t.skuId);
                if (!(e < 0)) {
                  (this.submitting = !0),
                    (this.goodsItems[e].isChecked =
                      !this.goodsItems[e].isChecked);
                  var o = Object(d.c)([
                    ...this.checkedGoods,
                    ...this.inCartGoods,
                  ]);
                  Object(a.d)(o, this.offlineId)
                    .then((t) => {
                      var {
                        sumPromotionTotalPrice: e,
                        originPrice: o,
                        totalDecrease: i,
                        itemInfoList: r,
                      } = t;
                      i && !this.totalDecrease && this.discountedPreviewLog(i),
                        (this.sumPromotionTotalPrice = e),
                        (this.originPrice = o),
                        (this.totalDecrease = i),
                        (this.goodsItems = this.goodsItems.map((t) => {
                          var e = r.find((e) => e.itemId === t.itemId);
                          return e
                            ? Object(s.a)({}, t, {
                                promotionTotalPrice: e.promotionTotalPrice,
                              })
                            : t;
                        })),
                        (this.submitting = !1);
                    })
                    .catch((t) => {
                      (this.submitting = !1),
                        !t.notoast && Object(c.a)(t.msg || t.message),
                        (this.goodsItems[e].isChecked =
                          !this.goodsItems[e].isChecked);
                    });
                }
              },
              handleGoCart() {
                this.ctx.logger.log(this.combo.goCartClickLog);
                var t = this.handleSelectedGoods();
                Promise.all(t)
                  .then(() => {
                    this.$emit("go-to-cart");
                  })
                  .catch((t) => {
                    !t.notoast && Object(c.a)(t.msg || t.message);
                  });
              },
              handleAddCart() {
                if (
                  (this.addCartlogger(),
                  !this.addCartDisabled && !this.submitting)
                ) {
                  this.submitting = !0;
                  var t = [
                    this.handleFetchBatchAddCart(),
                    ...this.handleSelectedGoods(),
                  ];
                  Promise.all(t)
                    .then((t) => {
                      var [e] = t,
                        o = e.filter((t) => t.success).length;
                      if (!o)
                        return (
                          Object(c.a)("加购失败，请选择其他套餐"),
                          void (this.submitting = !1)
                        );
                      Object(c.a)(
                        "成功添加" + o + "件商品到购物车，即将进入购物车结算"
                      ),
                        setTimeout(() => {
                          (this.submitting = !1), this.$emit("go-to-cart");
                        }, 1e3);
                    })
                    .catch((t) => {
                      (this.submitting = !1),
                        !t.notoast && Object(c.a)(t.msg || t.message);
                    });
                }
              },
              handleFetchBatchAddCart() {
                return Object(a.a)(Object(d.a)(this.checkedGoods, this.kdtId));
              },
              handleSelectedGoods() {
                return this.inCartGoods.map((t) =>
                  Object(a.c)(Object(d.b)(t, this.kdtId)).catch(() => !0)
                );
              },
              handlePopupClose() {
                this.$emit("popup-close");
              },
              addCartlogger() {
                try {
                  var t = this.combo.addCartClickLog;
                  if (!t) return;
                  (t.params.purchased_goodslist = this.checkedGoods.map(
                    (t) => t.itemId
                  )),
                    (t.params.purchased_goods_num = this.inCartGoods.length),
                    this.ctx.logger.log(t);
                } catch (t) {}
              },
            },
            ud: !0,
          },
          n = o("9ZMt");
        e.default = n.default.component(h);
      },
    }
  )
);
