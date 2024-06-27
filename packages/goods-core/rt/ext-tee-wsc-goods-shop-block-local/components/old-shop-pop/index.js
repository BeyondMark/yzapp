"use strict";
var r = require("~/r");
r(
  "csAp",
  Object.assign({}, require("~/v.js").modules, {
    csAp: function (e, o, s) {
      s.r(o);
      var t = {
          name: "old-shop-pop",
          props: {
            show: Boolean,
            shopInfo: Object,
            shopConfig: Object,
            multistore: Object,
            oldShopDesc: Object,
          },
          computed: {
            oldShopYears() {
              return this.shopConfig.shopOperateDurationYears || 0;
            },
            badgeClass() {
              return "osp__header-badge--" + this.oldShopYears;
            },
          },
          methods: {
            handleCloseModal() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        r = s("9ZMt");
      o.default = r.default.component(t);
    },
  })
);
