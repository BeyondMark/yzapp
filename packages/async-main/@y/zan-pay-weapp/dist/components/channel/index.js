"use strict";
var r = require("~/r");
r(
  "UmFa",
  Object.assign({}, require("../../../../../c.js").modules, {
    UmFa: function (a, e, n) {
      n.r(e);
      var r = n("6ZX2");
      Object(r.a)({
        props: { sb: Boolean, channel: Object, i: Object },
        computed: {
          displayName: function () {
            var a = this.data,
              e = a.channel,
              n = a.i;
            return e.payChannelName + (n ? "（" + n.num + "期）" : "");
          },
          iconStyle: function () {
            return (
              "margin-right: 8px; " +
              (this.data.channel.available ? "" : "opacity: 0.5")
            );
          },
        },
      });
    },
  })
);
