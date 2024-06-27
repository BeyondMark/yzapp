"use strict";
var r = require("~/r");
r(
  "QgyC",
  Object.assign({}, require("~/v.js").modules, {
    QgyC: function (o, e, t) {
      t.r(e);
      var s = t("lCVF"),
        i = t.n(s),
        c = t("YeA1"),
        g = {
          name: "goods-item",
          props: {
            goods: { type: Object, default: () => ({}) },
            ctx: { type: Object },
          },
          computed: {
            iconName() {
              return this.goods.isChecked ? "checked" : "circle";
            },
            totalPrice() {
              return i()(this.goods.promotionTotalPrice);
            },
          },
          methods: {
            handleCheckboxTap() {
              this.goods.isChecked
                ? this.ctx.logger.log(this.goods.unCheckedClickLog)
                : this.ctx.logger.log(this.goods.checkedClickLog),
                this.$emit("change-checked", this.goods);
            },
            handleGoDetail() {
              var { bannerId: o = "", alg: e = "", alias: t } = this.goods;
              t &&
                (Object(c.a)().dmc.navigate("GoodsDetail", {
                  alias: t,
                  alg: e,
                  banner_id: o,
                }),
                this.goods.goodsClickLog &&
                  this.ctx.logger.log(this.goods.goodsClickLog));
            },
          },
          ud: !0,
        },
        d = t("9ZMt");
      e.default = d.default.component(g);
    },
  })
);
