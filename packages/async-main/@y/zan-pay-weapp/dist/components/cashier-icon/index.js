"use strict";
var r = require("~/r");
r(
  "W70g",
  Object.assign({}, require("../../../../../c.js").modules, {
    W70g: function (t, e, a) {
      a.r(e);
      var r = a("6ZX2");
      Object(r.a)({
        props: { channel: Object, scale: String, customStyle: String },
        computed: {
          style: function () {
            return (
              "transform: scale(" +
              (this.data.scale || 1) +
              "); " +
              (this.data.customStyle || "")
            );
          },
          className: function () {
            return "icon " + this.data.channel.payChannel.toLowerCase();
          },
        },
      });
    },
  })
);
