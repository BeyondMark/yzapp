"use strict";
var r = require("~/r");
r(
  "MO0N",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      MO0N: function (e, a, r) {
        r.r(a);
        var t = r("2wjL"),
          n = r("9ZMt"),
          i = r("nEPS"),
          d = r("EqB2"),
          s = {
            mixins: [Object(d.a)({ optDesc: i.a })],
            methods: {
              handleClick() {
                var e = this.getBannerId && this.getBannerId();
                n.default.navigate({
                  url: t.a.add("/packages/ump/gift/cart/index", {
                    banner_id: e,
                  }),
                });
              },
            },
            ud: !0,
          };
        a.default = n.default.component(s);
      },
    }
  )
);
