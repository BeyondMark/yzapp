"use strict";
var r = require("~/r");
r(
  "lT+R",
  Object.assign({}, require("../../../../../c.js").modules, {
    "lT+R": function (i, e, n) {
      n.r(e);
      var t = n("6ZX2");
      Object(t.a)({
        props: { show: Boolean, zIndex: Number, login: String, mobile: String },
        methods: {
          onLoginPassChange: function (i) {
            var e = i.detail;
            this.$emit("change", e && e.value);
          },
          onPayLoginSubmit: function () {
            this.$emit("submit", this.data.login);
          },
        },
      });
    },
  })
);
