"use strict";
var r = require("~/r");
r(
  "CpWo",
  Object.assign({}, require("~/v.js").modules, {
    CpWo: function (t, e, i) {
      i.r(e);
      var r = i("9ZMt"),
        n = i("Zqpg"),
        s = i("m6kV"),
        c = i("BZkp"),
        o = Object(s.a)("t-loading");
      r.default.component({
        name: "t-loading",
        mixins: [Object(n.a)({ externalClasses: ["custom-class"] })],
        props: {
          color: String,
          vertical: Boolean,
          type: { type: String, default: "circular" },
          size: String,
          textSize: String,
          customStyle: String,
        },
        computed: {
          classes: function () {
            return {
              root: this.customClass + " " + o({ vertical: this.vertical }),
              spinner: o("spinner", [this.type]),
            };
          },
          width: function () {
            return Object(c.b)(this.size);
          },
          height: function () {
            return Object(c.b)(this.size);
          },
          fontSize: function () {
            return Object(c.b)(this.textSize);
          },
        },
        ud: !0,
      });
    },
  })
);
