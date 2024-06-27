"use strict";
var r = require("~/r");
r(
  "gTm8",
  Object.assign({}, require("~/v.js").modules, {
    gTm8: function (e, t, a) {
      a.r(t);
      var r = {
          props: {
            themeColor: String,
            channel: { type: Object, required: !0 },
            active: { type: Object, required: !0 },
          },
          data: () => ({ checked: !1 }),
          watch: {
            active() {
              this.checked = this.active.payChannel === this.channel.payChannel;
            },
          },
          methods: {
            onCheckedChange(e) {
              this.$emit(e ? "enable" : "disable");
            },
          },
          ud: !0,
        },
        c = a("9ZMt");
      t.default = c.default.component(r);
    },
  })
);
