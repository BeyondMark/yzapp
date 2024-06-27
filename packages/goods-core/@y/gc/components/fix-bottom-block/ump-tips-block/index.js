"use strict";
var r = require("~/r");
r(
  "HlfJ",
  Object.assign({}, require("~/v.js").modules, {
    HlfJ: function (o, t, r) {
      r.r(t);
      r("US/N");
      var e = setTimeout(() => {}, 3e3),
        i = {
          name: "UmpTipsBlock",
          props: {
            opt: Object,
            goodsBaseInfo: Object,
            goodsPriceInfo: Object,
            hideGroupBargin: Boolean,
            newCustomerCouponPopIcon: String,
            countDownIcon: String,
            userInfo: Object,
          },
          data: () => ({
            avatarPlaceHolder:
              "https://img01.yzcdn.cn/public_files/7143018bfc43039e852fb01459585d7b.png",
            showNewCustomerCouponTip: !1,
            showInSourcingSharePop: !1,
          }),
          computed: {
            currentActivity() {
              return this.opt.currentActivity;
            },
            goodsPicture() {
              return this.goodsBaseInfo.picture;
            },
            goodsCouponPrice() {
              var { tags: o = [] } = this.goodsPriceInfo,
                t = o.find((o) => "coupon" === o.umpType);
              return null == t ? void 0 : t.text;
            },
            goodsPrice() {
              var { maxPrice: o, minPrice: t } = this.goodsPriceInfo,
                r = this.goodsCouponPrice
                  ? this.goodsCouponPrice
                  : (t / 100).toFixed(2);
              return o !== t ? r + "起" : "" + r;
            },
            firstGrouponGoing() {
              var { ongoingGroup: o = [] } = this.currentActivity;
              return o.length ? o[0] : {};
            },
            seActivity() {
              return this.opt.seActivity;
            },
            buyButtonPop() {
              return this.opt.buyButtonPop;
            },
            showGrouponTip() {
              var { type: o, ongoingGroup: t = [] } = this.currentActivity;
              return "groupOn" === o && t.length > 0 && 0 !== this.opt.stockNum;
            },
            isProductLaunch: () => !0,
            showGroupBargin() {
              var { hasUnionId: o, mobile: t } = this.userInfo || {};
              if (!this.isProductLaunch || !o || !t) return !1;
              if (this.hideGroupBargin) return !1;
              var { type: r, groupType: e } = this.currentActivity;
              return "groupOn" === r && 2 === e;
            },
            showSharePop() {
              return this.opt.showSharePop;
            },
          },
          watch: {
            buyButtonPop(o) {
              var { valueCopywriting: t } = o;
              clearTimeout(e),
                t && (this.showNewCustomerCouponTip = !0),
                (e = setTimeout(() => {
                  this.showNewCustomerCouponTip = !1;
                }, 3e3));
            },
            showSharePop(o) {
              this.handleShowInSourcingSharePop(o);
            },
          },
          destroyed() {
            clearTimeout(e);
          },
          methods: {
            handleCountdownClick() {
              this.$emit("ump-countdown-click");
            },
            handleShowInSourcingSharePop(o) {
              this.showInSourcingSharePop = o;
            },
          },
          ud: !0,
        },
        n = r("9ZMt");
      t.default = n.default.component(i);
    },
  })
);
