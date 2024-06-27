"use strict";
var r = require("~/r");
r(
  "adZH",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    adZH: function (e, r, t) {
      t.r(r);
      var c = t("rqVN");
      Object(c.b)({
        properties: {
          currentFreeLevel: {
            type: Number,
            value: 0,
            observer(e) {
              e && this.setIconBgStyle({ currentFreeLevel: e });
            },
          },
          currentPlusLevel: {
            type: Number,
            value: 0,
            observer(e) {
              e && this.setIconBgStyle({ currentPlusLevel: e });
            },
          },
        },
        data: { iconStyle: "" },
        methods: {
          getPlusIconXByLevel(e) {
            var r = -69 * (e - 1) - 16;
            return e > 9 && (r -= 3), r;
          },
          getFreeIconXByLevel(e) {
            var r = -38 * (e - 1) - 16;
            return e > 9 && (r -= 4), r;
          },
          getIconBgStyle(e) {
            var r = e.currentPlusLevel || this.properties.currentPlusLevel,
              t = e.currentFreeLevel || this.properties.currentFreeLevel,
              c = t > 0;
            return r > 0
              ? "width: 58px; height: 16px; margin-left: 4px; background-size: 1230% 100%; background-image: url(//b.yzcdn.cn/public_files/43812ce7e311029abc53901dcf8c424f.png);background-position-x: " +
                  this.getPlusIconXByLevel(r) +
                  "px"
              : c
              ? "width: 27px; height: 16px; margin-left: 4px; background-size: 1500% 100%; background-image: url(//b.yzcdn.cn/public_files/683f97b8cccef830558636e173feb4ac.png);background-position-x: " +
                this.getFreeIconXByLevel(t) +
                "px"
              : "";
          },
          setIconBgStyle(e) {
            this.setYZData({ iconStyle: this.getIconBgStyle(e) });
          },
        },
      });
    },
  })
);
