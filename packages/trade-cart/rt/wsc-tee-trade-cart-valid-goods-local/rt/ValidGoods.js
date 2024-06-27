"use strict";
var r = require("~/r");
r(
  "TtjP",
  Object.assign({}, require("~/v.js").modules, {
    TtjP: function (e, t, r) {
      r.r(t);
      var o = r("Fcif"),
        s = r("VmHG"),
        i = {
          data() {
            var e,
              t,
              r,
              i,
              { logger: a } = this.ctx;
            return Object(o.a)(
              {
                logger: a,
                isShowCustomGoodsListHeader:
                  null == (e = this.ctx) || null == (t = e.widgets)
                    ? void 0
                    : t.CustomGoodsListHeader,
                isShowCustomGoodsItem:
                  null == (r = this.ctx) || null == (i = r.widgets)
                    ? void 0
                    : i.CustomGoodsItem,
              },
              Object(s.d)(this, [
                "shopGoods",
                "kdtId",
                "offlineId",
                "editCheckedGoods",
                "checkedGoodsList",
                "themeCSS",
                "themeColors",
                "themeGeneralColor",
                "themeGeneralAlpha10Color",
                "presentInfo",
                "canSelectPresent",
                "isIOS",
                "loadGoodsList",
                "loadLoading",
                "finished",
                "isEditing",
                "presentData",
                "showEstimatedPrice",
                "themeStyle",
                "currentShowSkuGoods",
                "listObNeedReLoad",
                "cartActivityPopupShow",
                "cartActivityInfo",
                "currentActivityInfo",
                "currentActivityGoodsList",
              ])
            );
          },
          mounted() {
            this.initActions(), this.handleStopLoading(), this.initPageStyle();
          },
          methods: {
            obReload() {
              this.$nextTick(() => {
                this.updateListObNeedReLoad(!1);
              });
            },
            initPageStyle() {
              var e = [
                [
                  "--stepper-input-margin-right",
                  "var(--theme-page-stepper-input-margin-right)",
                ],
                [
                  "--stepper-input-margin-left",
                  "var(--theme-page-stepper-input-margin-left)",
                ],
                [
                  "--stepper-border-width",
                  "var(--theme-page-stepper-border-width)",
                ],
                [
                  "--stepper-border-style",
                  "var(--theme-page-stepper-border-style)",
                ],
                [
                  "--stepper-border-color",
                  "var(--theme-page-stepper-border-color)",
                ],
                [
                  "--stepper-background-color",
                  "var(--theme-page-stepper-background-color)",
                ],
                [
                  "--stepper-background-color-disabled",
                  "var(--theme-page-stepper-background-color-disabled)",
                ],
                [
                  "--stepper-border-top-left-radius",
                  "var(--theme-page-stepper-border-top-left-radius)",
                ],
                [
                  "--stepper-border-bottom-left-radius",
                  "var(--theme-page-stepper-border-bottom-left-radius)",
                ],
                [
                  "--stepper-border-top-right-radius",
                  "var(--theme-page-stepper-border-top-right-radius)",
                ],
                [
                  "--stepper-border-bottom-right-radius",
                  "var(--theme-page-stepper-border-bottom-right-radius)",
                ],
              ]
                .map((e) => e[0] + ":" + e[1] + ";")
                .join("");
              this.$root.setPageStyle && this.$root.setPageStyle(e);
            },
            initActions() {
              Object(s.b)(this, [
                "handleChangePresentPopup",
                "getLoadGoodsList",
                "handleStopLoading",
                "refreshCartGoodsList",
                "handleChangeGoodsSku",
                "handleChangePresentSku",
                "handleHideSkuShow",
                "updateListObNeedReLoad",
                "handleCloseCartActivityPopup",
              ]);
            },
          },
        },
        a = r("9ZMt");
      t.default = a.default.component(i);
    },
  })
);
