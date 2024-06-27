"use strict";
var r = require("~/r");
r(
  "npSf",
  Object.assign({}, require("~/v.js").modules, {
    npSf: function (e, t, o) {
      o.r(t);
      var s = o("Fcif"),
        a = o("YeA1"),
        r = {
          name: "MultiStoreBlock",
          props: { opt: { type: Object, default: () => ({}) } },
          data: () => ({
            show: !1,
            text: "该门店商品已售罄，你可以去其他门店购买",
          }),
          methods: {
            showPop() {
              this.show = !0;
            },
            hidePop() {
              this.show = !1;
            },
            jumpSalesStore(e) {
              var { query: t } = e;
              Object(a.a)().dmc.redirectTo(
                "GoodsDetail",
                Object(s.a)({}, t, { alias: this.opt.alias })
              );
            },
          },
          ud: !0,
        },
        i = o("9ZMt");
      t.default = i.default.component(r);
    },
  })
);
