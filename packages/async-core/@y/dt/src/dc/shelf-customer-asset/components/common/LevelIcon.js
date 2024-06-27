"use strict";
var r = require("~/r");
r(
  "pysq",
  Object.assign({}, require("~/v.js").modules, {
    pysq: function (e, r, t) {
      t.r(r);
      var u = {
          props: {
            currentFreeLevel: { type: Number, value: 0 },
            currentPlusLevel: { type: Number, value: 0 },
          },
          data: () => ({}),
          computed: {
            iconStyle() {
              var { currentFreeLevel: e, currentPlusLevel: r } = this;
              return e
                ? this.getIconBgStyle({ currentFreeLevel: e })
                : r
                ? this.getIconBgStyle({ currentPlusLevel: r })
                : "";
            },
          },
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
              var r = e.currentPlusLevel || this.currentPlusLevel,
                t = e.currentFreeLevel || this.currentFreeLevel,
                u = t > 0;
              return r > 0
                ? "width: 58px; height: 16px; margin-left: 4px; background-size: 1230% 100%; background-image: url(//b.yzcdn.cn/public_files/43812ce7e311029abc53901dcf8c424f.png);background-position-x: " +
                    this.getPlusIconXByLevel(r) +
                    "px"
                : u
                ? "width: 27px; height: 16px; margin-left: 4px; background-size: 1500% 100%; background-image: url(//b.yzcdn.cn/public_files/683f97b8cccef830558636e173feb4ac.png);background-position-x: " +
                  this.getFreeIconXByLevel(t) +
                  "px"
                : "";
            },
          },
          ud: !0,
        },
        c = t("9ZMt");
      r.default = c.default.component(u);
    },
  })
);
