"use strict";
var r = require("~/r");
r(
  "3lW7",
  Object.assign({}, require("~/v.js").modules, {
    "3lW7": function (e, t, r) {
      r.r(t);
      var s = r("ONqW"),
        u = {
          props: { opt: Object },
          computed: {
            skuBarClass() {
              return this.opt.skuExtraData.barPictureCount
                ? "sku-bar-cell"
                : "big-sku-bar-cell";
            },
          },
          methods: {
            handleClick() {
              Object(s.a)().log({
                et: "click",
                ei: "click_sku",
                en: "点击SKU模块",
              }),
                this.$emit("skuShow");
            },
          },
          ud: !0,
        },
        a = r("9ZMt");
      t.default = a.default.component(u);
    },
  })
);
