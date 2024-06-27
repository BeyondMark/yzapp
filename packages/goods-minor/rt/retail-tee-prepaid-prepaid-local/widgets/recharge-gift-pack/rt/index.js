"use strict";
var r = require("~/r");
r(
  "Ff3n",
  Object.assign({}, require("~/v.js").modules, {
    Ff3n: function (e, t, c) {
      c.r(t);
      var i = c("YeA1"),
        a = {
          data: () => ({
            showGiftPack: !1,
            themeColors: {},
            display: {},
            kdtId: 0,
            giftPackSelected: null,
            giftPackSelectedGiftPacks: [],
            giftSelectedGiftPackIndex: 0,
          }),
          computed: {
            generalThemeColor() {
              return this.themeColors.general;
            },
            newRecommend() {
              return !!this.display && this.display.newRecommend;
            },
          },
          created() {
            Object(i.b)(this, [
              "themeColors",
              "kdtId",
              "display",
              "giftPackSelected",
              "giftPackSelectedGiftPacks",
              "giftSelectedGiftPackIndex",
            ]),
              Object(i.d)(this, {
                toggleGiftPack: (e) => {
                  this.showGiftPack = e;
                },
              });
          },
          methods: {
            handleClose() {
              this.ctx.event.emit("onGiftPackClose");
            },
            onRecharge(e) {
              this.ctx.event.emit("onGiftPackRecharge", e);
            },
            onSelectGiftPack(e) {
              this.ctx.event.emit("onSelectGiftPack", e);
            },
          },
          ud: !0,
        },
        s = c("9ZMt");
      t.default = s.default.component(a);
    },
  })
);
