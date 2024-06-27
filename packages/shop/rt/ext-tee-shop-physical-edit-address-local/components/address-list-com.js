"use strict";
var r = require("~/r");
r(
  "nka+",
  Object.assign({}, require("~/v.js").modules, {
    "nka+": function (t, e, i) {
      i.r(e);
      var r = {
          name: "AddressListCom",
          props: { addressList: null | Array, addressTitle: String },
          data: () => ({}),
          methods: {
            onItemClick(t) {
              this.$emit("item-click", t);
            },
            onTitleClick() {
              this.$emit("title-click");
            },
          },
          ud: !0,
        },
        s = i("9ZMt");
      e.default = s.default.component(r);
    },
  })
);
