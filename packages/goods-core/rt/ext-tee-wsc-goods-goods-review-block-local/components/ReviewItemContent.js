"use strict";
var r = require("~/r");
r(
  "Ger5",
  Object.assign({}, require("~/v.js").modules, {
    Ger5: function (e, r, t) {
      t.r(r);
      var n = {
          name: "review-item-content",
          props: {
            content: String,
            skuDesc: String,
            images: Array,
            disablePreview: { type: Boolean, default: !0 },
          },
          ud: !0,
        },
        i = t("9ZMt");
      r.default = i.default.component(n);
    },
  })
);
