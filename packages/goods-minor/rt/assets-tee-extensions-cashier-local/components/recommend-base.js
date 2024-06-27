"use strict";
var r = require("~/r");
r(
  "KTVn",
  Object.assign({}, require("~/v.js").modules, {
    KTVn: function (e, r, n) {
      n.r(r);
      var t = {
          props: { channel: { type: Object, required: !0 } },
          computed: {
            lowercase() {
              return this.channel.payChannel.toLowerCase();
            },
            tip() {
              var e;
              return null == (e = this.channel.ext) ? void 0 : e.cns;
            },
          },
          ud: !0,
        },
        a = n("9ZMt");
      r.default = a.default.component(t);
    },
  })
);
