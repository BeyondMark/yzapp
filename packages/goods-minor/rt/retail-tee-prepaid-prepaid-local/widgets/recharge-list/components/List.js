"use strict";
var r = require("~/r");
r(
  "8jE/",
  Object.assign({}, require("~/v.js").modules, {
    "8jE/": function (e, t, r) {
      r.r(t);
      var l = {
          props: {
            list: { type: Array, default: () => [] },
            kdtId: Number,
            selectedIndex: Number,
            intro: Object,
            promotion: Boolean,
            hideBadge: Boolean,
          },
          computed: {
            layoutClass() {
              return 2 === this.list.length ? "recharge-item--full" : "";
            },
          },
          methods: {
            handleSelect(e, t) {
              this.$emit("select", { item: e, idx: t });
            },
          },
          ud: !0,
        },
        i = r("9ZMt");
      t.default = i.default.component(l);
    },
  })
);
