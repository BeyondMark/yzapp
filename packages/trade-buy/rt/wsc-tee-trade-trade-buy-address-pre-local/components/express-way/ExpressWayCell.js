"use strict";
var r = require("~/r");
r(
  "0uGb",
  Object.assign({}, require("~/v.js").modules, {
    "0uGb": function (e, o, s) {
      s.r(o);
      var t = s("DXKY"),
        r = {
          props: {
            postage: Object,
            isRetailShop: Boolean,
            show: Boolean,
            isLink: Boolean,
            selected: Object,
            formattedPostageItems: Array,
            showPopup: Boolean,
            expressWayWords: String,
          },
          created() {
            t.a.on("onSelectExpressWay", (e) => {
              this.$emit("onSelectExpressWay", { index: e });
            });
          },
          destroyed() {
            t.a.off("onSelectExpressWay");
          },
          methods: {
            onClick() {
              this.$emit("onClick");
            },
            onClose() {
              this.$emit("onClose");
            },
            onSelectExpressWay(e, o) {
              this.$emit("onSelectExpressWay", { index: e, item: o });
            },
          },
          ud: !0,
        },
        a = s("9ZMt");
      o.default = a.default.component(r);
    },
  })
);
