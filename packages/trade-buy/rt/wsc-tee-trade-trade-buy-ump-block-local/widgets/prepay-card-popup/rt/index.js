"use strict";
var r = require("~/r");
r(
  "WB+6",
  Object.assign({}, require("~/v.js").modules, {
    "WB+6": function (e, t, o) {
      o.r(t);
      var s = o("Fcif"),
        r = o("YeA1"),
        i = o("VmHG"),
        a = {
          data() {
            return (
              (this.store = this.ctx.store),
              Object(s.a)(
                {
                  valueCard: { list: [], disabled: [], checked: [] },
                  display: {},
                  pay: { realPay: 0 },
                  recommendDetaid: JSON.stringify({
                    desc: "",
                    productInfos: [],
                    templateNo: "",
                  }),
                  payAssetActivityTagDesc: "",
                  shopStoredDiscountInfo: {},
                  useStoredCustomerDiscount: !1,
                  themeColors: {},
                  prepayCardTotalAmount: 0,
                  useStoredMemberCustomerDiscount: !1,
                  useStoreBalancePayInFull: !1,
                },
                Object(i.d)(this, [
                  "showRecommend",
                  "toRecharge",
                  "isSelectRc",
                  "hasExclusionCard",
                  "kdtId",
                  "showStoredDiscountTips",
                ])
              )
            );
          },
          computed: {
            realPay() {
              var e;
              return (null == (e = this.pay) ? void 0 : e.realPay) || 0;
            },
            tagDesc() {
              return this.payAssetActivityTagDesc;
            },
            newRecommend() {
              return !!this.display && this.display.newRecommend;
            },
            rechargeDiscountInfo() {
              return {
                open: this.useStoredCustomerDiscount,
                discount: this.shopStoredDiscountInfo.discount,
              };
            },
          },
          mounted() {},
          created() {
            Object(r.b)(this, [
              "pay",
              "display",
              "valueCard",
              "recommendDetaid",
              "payAssetActivityTagDesc",
              "shopStoredDiscountInfo",
              "useStoredCustomerDiscount",
              "themeColors",
              "prepayCardTotalAmount",
              "useStoredMemberCustomerDiscount",
              "useStoreBalancePayInFull",
            ]),
              Object(i.b)(this, [
                "onPrepayCardConfirm",
                "toggleToRecharge",
                "toggleShowRecommend",
                "toggleStoredDiscountTips",
              ]);
          },
          methods: {
            onRecommendClose() {
              this.toggleToRecharge(!1), this.toggleShowRecommend(!1);
            },
            onRefreshData() {
              this.ctx.process.invoke("confirmOrder");
            },
            onCloseTip() {
              this.toggleStoredDiscountTips(!1);
            },
          },
        },
        c = o("9ZMt");
      t.default = c.default.component(a);
    },
  })
);
