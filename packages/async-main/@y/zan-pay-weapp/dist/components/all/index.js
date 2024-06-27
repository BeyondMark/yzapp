"use strict";
var r = require("~/r");
r(
  "KY7Y",
  Object.assign({}, require("../../../../../c.js").modules, {
    KY7Y: function (e, n, t) {
      t.r(n);
      var a = t("6ZX2");
      Object(a.a)({
        props: {
          tc: String,
          a: Object,
          i: Object,
          channels: Array,
          loading: { type: Boolean, value: !0 },
        },
        methods: {
          onChannelClick: function (e) {
            var n,
              t = e.target.dataset,
              a = t.channel,
              i = t.i;
            ((null === (n = a.ext) || void 0 === n ? void 0 : n.instalments) &&
              !i) ||
              this.$emit("change", { channel: a, i: i });
          },
        },
      });
    },
  })
);
