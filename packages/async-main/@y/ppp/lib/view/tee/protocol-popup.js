"use strict";
var r = require("~/r");
r(
  "xq51",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      xq51: function (e, t, r) {
        r.r(t);
        var o = r("85sJ"),
          s = r("WaS2"),
          a = Object(o.createTeeComponent)(new s.ProtocolPopupComponent()),
          d = {
            isGlobalCss: !0,
            props: a.props,
            data: a.data,
            watch: a.watch,
            created: a.created,
            destroyed: a.destroyed,
            methods: a.methods,
            ud: !0,
          },
          c = r("9ZMt");
        t.default = c.default.component(d);
      },
    }
  )
);
