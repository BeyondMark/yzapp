"use strict";
var r = require("~/r");
r(
  "B+fE",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "B+fE": function (t, e, a) {
      a.r(e);
      var i = a("3vAz"),
        r = {
          props: {
            themeType: Number,
            skuBannerData: { type: Object, default: () => ({}) },
            headerOptData: { type: Object, default: () => ({}) },
          },
          data: () => ({ remainObj: {} }),
          computed: {
            showAtmosphereBanner() {
              var t;
              return !(null == (t = this.skuBannerData) || !t.activityInfo);
            },
            activityType() {
              var t,
                { activityType: e } =
                  (null == (t = this.skuBannerData)
                    ? void 0
                    : t.activityInfo) || {};
              return e;
            },
            bgImg() {
              var { themeType: t } = this;
              return +t + 1
                ? "//su.yzcdn.cn/limitDiscount/skuBanner/2024-05-10/" +
                    (t + 1) +
                    ".png"
                : "";
            },
            soldTag() {
              var { soldNum: t } = this.headerOptData;
              return t && [11, 115].includes(this.activityType)
                ? t < 100
                  ? "已售" + t + "件"
                  : "热销" + t + "件"
                : "";
            },
            stockTag() {
              var { hideStock: t, stockNum: e } = this.headerOptData;
              return 11 === this.activityType && !t && e < 10 ? "即将售罄" : "";
            },
            activityName() {
              var { activityName: t } = this.skuBannerData;
              return 11 === this.activityType ? t || "限时折扣" : t;
            },
            isShowImgTitle() {
              return Object.keys(i.c).includes(this.activityName);
            },
            bannerTitleImg() {
              return this.isShowImgTitle ? i.c[this.activityName] : "";
            },
            countDown() {
              var t,
                { endAt: e } =
                  (null == (t = this.skuBannerData)
                    ? void 0
                    : t.activityInfo) || {};
              if (e) return e - Date.now();
            },
            minutes() {
              var t = this.remainObj.minutes;
              return t < 10 ? "0" + t : t;
            },
            seconds() {
              var t = this.remainObj.seconds;
              return t < 10 ? "0" + t : t;
            },
          },
          methods: {
            onChange(t) {
              this.remainObj = t;
            },
          },
          ud: !0,
        },
        n = a("9ZMt");
      e.default = n.default.component(r);
    },
  })
);
