"use strict";
var r = require("~/r");
r(
  "1UlK",
  Object.assign({}, require("~/v.js").modules, {
    "1UlK": function (e, t, i) {
      i.r(t);
      var n = i("Fcif"),
        r = i("+66q"),
        c = {
          name: "activity-banner-block",
          props: {
            opt: { type: Object, default: () => ({}) },
            goodsStockOpt: { type: Object, default: () => ({}) },
            cloudConfig: { type: Object, default: () => ({}) },
            themeType: Number,
          },
          data() {
            return { umpPriceInfo: this.opt.umpPriceInfo };
          },
          computed: {
            showBannerBg() {
              return (
                "boolean" != typeof this.cloudConfig.showBannerBgImage ||
                this.cloudConfig.showBannerBgImage
              );
            },
            fontSizeText() {
              return "font-size: " + (this.showBannerBg ? 10 : 12) + "px";
            },
            bgImg() {
              var { themeType: e, opt: t } = this,
                { type: i } = t.currentActivity;
              return i === r.a.TIMELIMITED_DISCOUNT
                ? "//su.yzcdn.cn/limitDiscount/banner/2024-5-9/" +
                    (e + 1) +
                    ".png"
                : "//img01.yzcdn.cn/public_files/2019/09/11/2532a9c220fbbe956de32ca9c0f662d5.png";
            },
          },
          watch: {
            opt: {
              handler() {
                this.umpPriceInfo = this.opt.umpPriceInfo;
              },
              immediate: !0,
            },
          },
          methods: {
            handleAuctionPriceUpdate(e) {
              var { umpPriceInfo: t, activity: i } = e,
                { minPrice: r, maxPrice: c } = t,
                { stepPrice: o } = i;
              this.umpPriceInfo = Object(n.a)({}, this.umpPriceInfo, {
                minPrice: r - o,
                maxPrice: c - o,
              });
            },
          },
        },
        o = i("9ZMt");
      t.default = o.default.component(c);
    },
  })
);
