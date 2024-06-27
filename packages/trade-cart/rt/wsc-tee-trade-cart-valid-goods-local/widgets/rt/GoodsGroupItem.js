"use strict";
var r = require("~/r");
r(
  "oOXO",
  Object.assign({}, require("~/v.js").modules, {
    oOXO: function (e, t, o) {
      o.r(t);
      var s = o("Fcif"),
        i = o("VmHG"),
        n = {
          name: "goods-group",
          props: {
            goodsGroup: { type: Object, default: () => ({}) },
            goodsGroupIndex: Number,
          },
          data() {
            var e,
              t,
              o,
              n,
              { logger: d } = this.ctx;
            return Object(s.a)(
              {
                logger: d,
                isShowCustomGoodsListHeader:
                  null == (e = this.ctx) || null == (t = e.widgets)
                    ? void 0
                    : t.CustomGoodsListHeader,
                isShowCustomGoodsItem:
                  null == (o = this.ctx) || null == (n = o.widgets)
                    ? void 0
                    : n.CustomGoodsItem,
              },
              Object(i.d)(this, [
                "kdtId",
                "offlineId",
                "editCheckedGoods",
                "checkedGoodsList",
                "themeCSS",
                "themeColors",
                "themeTag",
                "themeGeneralColor",
                "themeGeneralAlpha10Color",
                "canSelectPresent",
                "isIOS",
                "loadGoodsList",
                "isEditing",
                "presentData",
                "showEstimatedPrice",
                "themeStyle",
              ])
            );
          },
          mounted() {
            this.initActions();
          },
          methods: {
            handleItemNumChangeLogger(e) {
              this.ctx.logger && this.ctx.logger.log(e);
            },
            onGoodsImgLoad(e, t) {
              var o;
              0 === e &&
                0 === t &&
                (null == (o = this.ctx.hummer.mark) ||
                  null == o.log ||
                  o.log({ tag: "trade-cart", scene: ["route"] }));
            },
            openComboPopup(e) {
              var { comboDetail: t } = e;
              this.$refs["combo-detail-popup"].openPopup(t);
            },
            toGoodsDetail(e) {
              this.ctx.process.invoke("navigateFromCart", { link: e });
            },
            hideCountDown() {
              this.ctx.event.emit("updateCartGoodsList");
            },
            handleChangePresentPopup(e) {
              this.$emit("on-present-popup-show", e);
            },
            handleChangePresentSku(e) {
              this.$emit("change-present-sku", e);
            },
            handleChangeGoodsSku(e) {
              this.$emit("change-goods-sku", e);
            },
            initActions() {
              Object(i.b)(this, [
                "handleItemChecked",
                "handleItemDelete",
                "handleItemNumChange",
              ]);
            },
          },
        },
        d = o("9ZMt");
      t.default = d.default.component(n);
    },
  })
);
