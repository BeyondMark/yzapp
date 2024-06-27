"use strict";
var r = require("~/r");
r(
  "M5Hh",
  Object.assign({}, require("~/v.js").modules, {
    M5Hh: function (e, t, r) {
      r.r(t);
      var s = r("m6kV"),
        i = Object(s.a)("t-key"),
        l = {
          props: {
            type: String,
            text: null,
            color: String,
            wider: Boolean,
            large: Boolean,
            loading: Boolean,
            customStyle: String,
          },
          computed: {
            classes() {
              return {
                key: i([
                  this.color,
                  {
                    large: this.large,
                    active: this.value,
                    delete: "delete" === this.type,
                  },
                ]),
              };
            },
          },
          methods: {
            onClick() {
              this.$emit("press", { text: this.text, type: this.type });
            },
          },
          ud: !0,
        },
        o = r("9ZMt");
      t.default = o.default.component(l);
    },
  })
);
