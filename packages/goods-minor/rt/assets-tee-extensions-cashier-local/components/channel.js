"use strict";
var r = require("~/r");
r(
  "kKQM",
  Object.assign({}, require("~/v.js").modules, {
    kKQM: function (e, t, a) {
      a.r(t);
      var n = a("9ZMt"),
        r = {
          props: {
            showBalance: { type: Boolean, default: !1 },
            channel: { type: Object, required: !0 },
            instalment: { type: Object, required: !1, default: void 0 },
          },
          computed: {
            displayName() {
              return (
                this.channel.payChannelName +
                (this.instalment ? "（" + this.instalment.num + "期）" : "")
              );
            },
            lowerCase() {
              return this.channel.payChannel.toLowerCase();
            },
            iconStyle() {
              return (
                "margin-right: " +
                n.default.style.useTpx(8) +
                "; " +
                (this.channel.available ? "" : "opacity: 0.5")
              );
            },
          },
          ud: !0,
        };
      t.default = n.default.component(r);
    },
  })
);
