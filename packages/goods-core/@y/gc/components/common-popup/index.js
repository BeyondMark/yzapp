"use strict";
var r = require("~/r");
r(
  "LlOG",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      LlOG: function (e, t, r) {
        r.r(t);
        var n = {
            name: "CommonPop",
            mixins: [r("YXd/").a],
            props: {
              button: { type: String, default: "" },
              title: String,
              nested: Boolean,
              styles: { type: String, default: "" },
              closeIcon: { type: String, default: "arrow-left" },
            },
            ud: !0,
          },
          o = r("9ZMt");
        t.default = o.default.component(n);
      },
    }
  )
);
