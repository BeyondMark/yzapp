"use strict";
var r = require("~/r");
r(
  "pkQr",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      pkQr: function (e, t, o) {
        o.r(t);
        var r = o("85sJ"),
          d = o("xoic"),
          s = o("OT4g"),
          a = Object(r.createTeeComponent)(new d.ProtocolComponent(), {
            methods: { safeLog: s.safeLog },
          }),
          c = {
            props: a.props,
            data: a.data,
            watch: a.watch,
            created: a.created,
            mounted: a.mounted,
            destroyed: a.destroyed,
            methods: a.methods,
            ud: !0,
          },
          n = o("9ZMt");
        t.default = n.default.component(c);
      },
    }
  )
);
