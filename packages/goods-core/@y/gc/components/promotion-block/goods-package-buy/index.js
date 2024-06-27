"use strict";
var r = require("~/r");
r(
  "xlrc",
  Object.assign({}, require("~/v.js").modules, {
    xlrc: function (e, a, t) {
      t.r(a);
      var r = t("YeA1"),
        u = {
          name: "PackageBuy",
          props: { opt: Object },
          computed: {
            packageBuy() {
              return this.opt.packageBuy;
            },
            isMultiPackage() {
              return this.packageBuy && this.packageBuy.goodsList.length > 1;
            },
          },
          methods: {
            goPackageList() {
              Object(r.a)().dmc.navigate(this.packageBuy.url);
            },
          },
          ud: !0,
        },
        c = t("9ZMt");
      a.default = c.default.component(u);
    },
  })
);
