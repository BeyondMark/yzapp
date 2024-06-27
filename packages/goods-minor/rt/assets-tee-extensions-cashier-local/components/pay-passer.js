"use strict";
var r = require("~/r");
r(
  "/ZaG",
  Object.assign({}, require("~/v.js").modules, {
    "/ZaG": function (t, e, s) {
      s.r(e);
      var r = {
          props: {
            show: Boolean,
            round: Boolean,
            overlay: Boolean,
            password: String,
            cashierType: String,
          },
          computed: {
            length() {
              return (this.password || []).length;
            },
          },
          methods: {
            onInput(t) {
              if (6 !== this.length) {
                var e = "" + this.password + t;
                this.$emit("update", e),
                  6 === e.length && this.$emit("full", e);
              }
            },
            onDelete() {
              if (6 !== this.length && 0 !== this.length) {
                var t = this.password.slice(0, -1);
                this.$emit("update", t);
              }
            },
          },
          ud: !0,
        },
        i = s("9ZMt");
      e.default = i.default.component(r);
    },
  })
);
