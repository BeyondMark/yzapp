"use strict";
var r = require("~/r");
r(
  "zJ1x",
  Object.assign({}, require("~/v.js").modules, {
    zJ1x: function (o, e, r) {
      r.r(e);
      var t = r("YeA1"),
        d = {
          data: () => ({
            order: { needIdCardPhoto: !1 },
            idcard: { name: "", number: "", backPhoto: "", frontPhoto: "" },
            tradeTag: {},
            showPopup: !1,
            themeColors: {},
            hasGoods: !1,
          }),
          computed: {
            idNumber() {
              var { order: o, idcard: e } = this;
              return (!o.needIdCardPhoto || (e.frontPhoto && e.backPhoto)) &&
                (e.name || e.number)
                ? e.name + " " + e.number
                : "";
            },
          },
          created() {
            Object(t.b)(this, [
              "order",
              "idcard",
              "tradeTag",
              "hasGoods",
              "themeColors",
            ]);
          },
          methods: {
            onShow() {
              this.showPopup = !0;
            },
            onClose() {
              this.showPopup = !1;
            },
          },
          ud: !0,
        },
        a = r("9ZMt");
      e.default = a.default.component(d);
    },
  })
);
