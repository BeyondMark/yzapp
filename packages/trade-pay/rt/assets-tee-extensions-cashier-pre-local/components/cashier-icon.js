"use strict";
var r = require("~/r");
r(
  "8mPg",
  Object.assign({}, require("~/v.js").modules, {
    "8mPg": function (e, t, a) {
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
