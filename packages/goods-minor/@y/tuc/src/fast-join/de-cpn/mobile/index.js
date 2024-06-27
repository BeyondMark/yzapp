"use strict";
var r = require("~/r");
r(
  "0W/n",
  Object.assign({}, require("~/v.js").modules, {
    "0W/n": function (e, t, i) {
      i.r(t);
      var r = {
          props: { item: { type: Object } },
          data: () => ({ mobile: "" }),
          created() {
            this.item.value && (this.mobile = this.item.value);
          },
          ud: !0,
        },
        a = i("9ZMt");
      t.default = a.default.component(r);
    },
  })
);
