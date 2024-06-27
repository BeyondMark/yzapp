"use strict";
var r = require("~/r");
r(
  "basg",
  Object.assign({}, require("~/v.js").modules, {
    basg: function (t, e, s) {
      s.r(e);
      var i = {
          props: {
            show: Boolean,
            password: String,
            height: String,
            overlayStyle: String,
          },
          computed: {
            length() {
              var t;
              return (null == (t = this.password) ? void 0 : t.length) || 0;
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
        r = s("9ZMt");
      e.default = r.default.component(i);
    },
  })
);
