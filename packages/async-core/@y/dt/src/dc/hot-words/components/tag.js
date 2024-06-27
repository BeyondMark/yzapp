"use strict";
var r = require("~/r");
r(
  "bJ/V",
  Object.assign({}, require("~/v.js").modules, {
    "bJ/V": function (e, t, r) {
      r.r(t);
      var o = {
          name: "cap-hot-words-tag",
          props: {
            wordItem: { type: Object, default: () => {} },
            showHot: { type: Boolean, default: !1 },
            themeStyle: String,
            extraCls: String,
          },
          methods: {
            onClick() {
              this.$emit("search");
            },
          },
          ud: !0,
        },
        a = r("9ZMt");
      t.default = a.default.component(o);
    },
  })
);
