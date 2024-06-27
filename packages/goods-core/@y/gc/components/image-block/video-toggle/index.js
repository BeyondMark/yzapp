"use strict";
var r = require("~/r");
r(
  "3rmE",
  Object.assign({}, require("~/v.js").modules, {
    "3rmE": function (e, l, a) {
      a.r(l);
      var u = a("KEq0"),
        d = a.n(u),
        o = d()("public_files/222f5394268abf0a64569edd0da0014b.png", "small"),
        f = d()("public_files/e597ad1bd2f659edbfeb9eadb1f5a017.png", "small"),
        r = {
          name: "VideoToggle",
          props: {
            muted: { type: Boolean, default: !1 },
            fullscreen: { type: Boolean, default: !1 },
            isShowFullToggle: { type: Boolean, default: !0 },
          },
          data: () => ({ volumeOn: o, volumeOff: f, imageUrls: [o, f] }),
          ud: !0,
        },
        t = a("9ZMt");
      l.default = t.default.component(r);
    },
  })
);
