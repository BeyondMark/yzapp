"use strict";
var r = require("~/r");
r(
  "NoNQ",
  Object.assign({}, require("~/v.js").modules, {
    NoNQ: function (e, s, t) {
      t.r(s);
      var r = {
          name: "review-tags",
          mixins: [t("KrsW").b.externalClassesMixin(["custom-tags-class"])],
          props: { tags: Array, showCount: { type: Boolean, default: !1 } },
          methods: {
            handleClick(e) {
              this.$emit("click", e);
            },
          },
          ud: !0,
        },
        a = t("9ZMt");
      s.default = a.default.component(r);
    },
  })
);
