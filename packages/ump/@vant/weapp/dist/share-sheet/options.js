"use strict";
var r = require("~/r");
r(
  "kvKh",
  Object.assign({}, require("~/v.js").modules, {
    kvKh: function (e, r, t) {
      t.r(r);
      var s = t("py6f");
      Object(s.a)({
        props: { options: Array, showBorder: Boolean },
        methods: {
          onSelect(e) {
            var { index: r } = e.currentTarget.dataset,
              t = this.data.options[r];
            this.$emit(
              "select",
              Object.assign(Object.assign({}, t), { index: r })
            );
          },
        },
      });
    },
  })
);
