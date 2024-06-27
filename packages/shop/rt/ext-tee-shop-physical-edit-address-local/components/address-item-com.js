"use strict";
var r = require("~/r");
r(
  "Q7uO",
  Object.assign({}, require("~/v.js").modules, {
    Q7uO: function (e, t, r) {
      r.r(t);
      var i = {
          name: "AddressItemCom",
          props: { item: { type: Object, default: () => ({}) } },
          methods: {
            onItemClick() {
              this.$emit("clickItem", this.item);
            },
          },
          ud: !0,
        },
        s = r("9ZMt");
      t.default = s.default.component(i);
    },
  })
);
