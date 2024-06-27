"use strict";
var r = require("~/r");
r(
  "lwMs",
  Object.assign({}, require("~/v.js").modules, {
    lwMs: function (s, e, a) {
      a.r(e);
      var o = a("YeA1"),
        t = a("9ZMt"),
        d = {
          data: () => ({
            dataLoaded: !1,
            shopName: "",
            formattedGoods: [],
            hasGoods: !1,
            hasHotelGoods: !1,
            display: {},
            showMessage: !1,
            currentMessage: [],
            isFxZpp: !1,
          }),
          created() {
            Object(o.b)(this, [
              "dataLoaded",
              "shopName",
              "formattedGoods",
              "hasGoods",
              "hasHotelGoods",
              "display",
            ]);
            this.isFxZpp = !1;
          },
          methods: {
            showGoodsMessage(s) {
              var e = this.formattedGoods[s];
              e &&
                ((this.showMessage = !0),
                (this.currentMessage = Object.keys(e.message).map((s) => ({
                  name: s,
                  value: e.message[s],
                }))));
            },
            handleCloseMessage() {
              this.showMessage = !1;
            },
            doReselectGoods() {
              t.default.navigateBack();
            },
          },
          ud: !0,
        };
      e.default = t.default.component(d);
    },
  })
);
