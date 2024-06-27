"use strict";
var r = require("~/r");
r(
  "rWZn",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      rWZn: function (e, s, o) {
        o.r(s);
        var r = o("9ZMt"),
          t = o("RC8l"),
          a = o("YeA1"),
          i = {
            name: "CertDetailCom",
            props: { show: Boolean, close: Function, isWsc: Boolean },
            methods: {
              onClose() {
                this.$emit("close");
              },
              onNavigate() {
                var e = this.isWsc ? t.a.WSC : t.a.RETAIL,
                  { dmc: s } = Object(a.a)();
                s.navigate(e);
              },
            },
            ud: !0,
          };
        s.default = r.default.component(i);
      },
    }
  )
);
