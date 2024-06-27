"use strict";
var r = require("~/r");
r(
  "B7Cb",
  Object.assign({}, require("~/v.js").modules, {
    B7Cb: function (e, t, a) {
      a.r(t);
      var s = {
          props: {
            channel: { type: Object, required: !0, default: null },
            scale: { type: String, default: "1" },
            customStyle: { type: String, default: "" },
          },
          data() {
            return { className: this.getClassName() };
          },
          computed: {
            style() {
              return (
                "transform: scale(" + this.scale + "); " + this.customStyle
              );
            },
          },
          watch: {
            channel() {
              this.className = this.getClassName();
            },
          },
          methods: {
            getClassName() {
              return "zan-pay__icon--" + this.channel.payChannel.toLowerCase();
            },
          },
        },
        r = a("9ZMt");
      t.default = r.default.component(s);
    },
  })
);
