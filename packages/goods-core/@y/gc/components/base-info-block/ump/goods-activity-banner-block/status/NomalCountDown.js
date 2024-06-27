"use strict";
var r = require("~/r");
r(
  "7Fer",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "7Fer": function (e, t, n) {
      n.r(t);
      var o = n("3vAz"),
        i = {
          name: "NomalCountDown",
          props: {
            remainObj: Object,
            countDownForced: Boolean,
            showCountDownTime: Boolean,
            showMilliseconds: Boolean,
            isUmpBannerV2: Boolean,
            activityTitle: String,
            showBannerBg: Boolean,
          },
          computed: {
            isShowImgTitle() {
              return Object.keys(o.c).includes(this.activityTitle);
            },
            bannerTitleImg() {
              return this.isShowImgTitle ? o.c[this.activityTitle] : "";
            },
            fontSizeText() {
              return "font-size: " + (this.showBannerBg ? 10 : 12) + "px";
            },
          },
          ud: !0,
        },
        r = n("9ZMt");
      t.default = r.default.component(i);
    },
  })
);
