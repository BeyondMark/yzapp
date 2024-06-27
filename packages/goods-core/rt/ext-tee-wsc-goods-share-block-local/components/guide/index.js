"use strict";
var r = require("~/r");
r(
  "Moc2",
  Object.assign({}, require("~/v.js").modules, {
    Moc2: function (e, o, r) {
      r.r(o);
      var s = {
          name: "share-guide",
          props: { show: { type: Boolean, default: !1 } },
          methods: {
            onClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        t = r("9ZMt");
      o.default = t.default.component(s);
    },
  })
);
