"use strict";
var r = require("~/r");
r(
  "9X+E",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "9X+E": function (t, a, e) {
        e.r(a);
        var o = e("b8Sa"),
          r = e("R7Zb"),
          s = {
            mixins: [Object(r.a)({ optDesc: o.a })],
            data: () => ({ layout: "" }),
            watch: {
              layout() {
                var { layout: t = "" } = this.opt,
                  { showBrowseCount: a, showThumbsUpCount: e } =
                    this.opt.infoData,
                  o = "";
                "left" !== t || a
                  ? "right" !== t || e || (o = "right")
                  : (o = "left"),
                  (this.layout = o);
              },
            },
            ud: !0,
          },
          u = e("9ZMt");
        a.default = u.default.component(s);
      },
    }
  )
);
