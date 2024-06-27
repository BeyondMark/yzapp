"use strict";
var r = require("~/r");
r(
  "doHL",
  Object.assign({}, require("../../../../../c.js").modules, {
    doHL: function (t, e, r) {
      r.r(e);
      var o = r("6ZX2");
      Object(o.a)({
        props: { protocol: Object },
        methods: {
          navigate: function (t) {
            var e =
              "https://cashier.youzan.com/assets/protocol/" +
              t.target.dataset.link.no;
            this.$emit("navigate", e);
          },
        },
      });
    },
  })
);
