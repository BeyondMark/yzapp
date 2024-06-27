"use strict";
var r = require("~/r");
r(
  "Tnhz",
  Object.assign({}, require("~/v.js").modules, {
    Tnhz: function (e, t, o) {
      o.r(t);
      var r = {
          props: {
            show: Boolean,
            typeRule: String,
            shopName: String,
            shopMetaInfo: Object,
            kdtId: Number,
          },
          data: () => ({ curShopName: "" }),
          computed: {},
          mounted() {
            var e = this.shopMetaInfo;
            this.curShopName = e.shopName;
          },
          methods: {
            hideRule() {
              this.$emit("hide-rule");
            },
          },
          ud: !0,
        },
        s = o("9ZMt");
      t.default = s.default.component(r);
    },
  })
);
