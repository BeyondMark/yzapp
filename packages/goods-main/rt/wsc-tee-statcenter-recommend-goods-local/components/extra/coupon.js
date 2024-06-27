"use strict";
var r = require("~/r");
r(
  "1D6G",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "1D6G": function (e, t, r) {
        r.r(t);
        var u = r("LbBz"),
          i = {
            props: { info: Object, customStyle: { type: String, default: "" } },
            data() {
              return { value: +this.info.value };
            },
            computed: {
              title() {
                return this.info.title;
              },
              threshold() {
                var { threshold: e } = this.info,
                  t = Number(e);
                return 0 === t ? "满任意金额可用" : "满" + t + "元使用";
              },
              couponValidDesc() {
                return Object(u.a)(this.info);
              },
            },
          },
          o = r("9ZMt");
        t.default = o.default.component(i);
      },
    }
  )
);
