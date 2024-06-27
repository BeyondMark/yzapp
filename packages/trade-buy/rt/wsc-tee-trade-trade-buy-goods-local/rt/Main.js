"use strict";
var r = require("~/r");
r(
  "OAlz",
  Object.assign({}, require("~/v.js").modules, {
    OAlz: function (s, e, t) {
      t.r(e);
      var i = t("Fcif"),
        o = t("YeA1"),
        l = t("YehF"),
        r = t("KDJo"),
        h = t("VmHG"),
        d = {
          props: { defaultGoodsBlockVisible: { type: Boolean, default: !0 } },
          data() {
            var s;
            return Object(i.a)(
              {
                visible: null == (s = this.defaultGoodsBlockVisible) || s,
                storeGiftsInfo: {},
                rewardModel: [],
                isRetailShop: !1,
                isWscShop: !0,
                reserves: {},
              },
              Object(h.d)(this, [
                "goods",
                "tradeTag",
                "display",
                "pay",
                "selfFetch",
                "formattedGoods",
              ])
            );
          },
          computed: {
            itemList() {
              var { list: s } = this.goods || {};
              return (s || []).filter((s) => !s.fromTmpAdded && !s.present);
            },
            isEmpty() {
              return this.itemList && 0 === this.itemList.length;
            },
            hasSelfFetchBenefit() {
              return (
                this.storeGiftsInfo &&
                Object.keys(this.storeGiftsInfo).length &&
                (this.storeGiftsInfo.coupons.length ||
                  this.storeGiftsInfo.couponsCode.length ||
                  this.storeGiftsInfo.presents.length)
              );
            },
            showStoreGoodsList() {
              var s,
                e,
                t,
                i,
                { showAddressTab: o, showExpressTab: l } = this.display || {};
              return o && l && null != (s = this.selfFetch) && s.isAllow
                ? this.hasSelfFetchBenefit &&
                    1 ===
                      (null == (t = this.state) || null == (i = t.address)
                        ? void 0
                        : i.activeTab)
                : this.hasSelfFetchBenefit &&
                    (null == (e = this.selfFetch) ? void 0 : e.isAllow);
            },
            showGoodsBlock() {
              var { activityId: s } = this.reserves;
              return (
                this.defaultGoodsBlockVisible &&
                this.goods.showGoodsBlock &&
                this.visible &&
                !s
              );
            },
          },
          created() {
            Object(o.b)(this, [
              "storeGiftsInfo",
              "dataLoaded",
              "rewardModel",
              "reserves",
            ]),
              Object(o.b)(this, {
                tradeGoodsVisible: (s) => {
                  this.visible = s;
                },
                appShop: (s) => {
                  (this.isRetailShop = Object(l.e)(null != s ? s : {})),
                    (this.isWscShop = Object(r.e)(null != s ? s : {}));
                },
              });
          },
        },
        a = t("9ZMt");
      e.default = a.default.component(d);
    },
  })
);
