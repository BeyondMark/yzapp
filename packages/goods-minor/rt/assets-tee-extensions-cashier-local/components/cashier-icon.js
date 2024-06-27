"use strict";
var r = require("~/r");
r(
  "arNF",
  Object.assign({}, require("~/v.js").modules, {
    arNF: function (e, t, r) {
      r.r(t);
      var a = {
          props: {
            channel: { type: String, required: !0 },
            scale: { type: String, default: "1" },
            customStyle: { type: String, default: "" },
          },
          computed: {
            style() {
              return (
                "transform: scale(" + this.scale + "); " + this.customStyle
              );
            },
            className() {
              return "zan-pay__icon zan-pay__icon--" + this.channel;
            },
          },
          ud: !0,
        },
        n = r("9ZMt");
      t.default = n.default.component(a);
    },
  })
);
