"use strict";
var r = require("~/r");
r(
  "a1Tz",
  Object.assign({}, require("~/v.js").modules, {
    a1Tz: function (t, e, o) {
      o.r(e);
      var r = o("KEq0"),
        n = o.n(r),
        a = {
          name: "EarnIcon",
          props: {
            iconUrl: String,
            cubeIconData: {
              type: Object,
              default: () => ({ bottom: 200, goaway: void 0 }),
            },
            customStyle: { type: String, default: "" },
          },
          computed: {
            iconFullUrl() {
              return n()(this.iconUrl, "small");
            },
            iconStyle() {
              return (
                "bottom:" + this.cubeIconData.bottom + "px;" + this.customStyle
              );
            },
          },
          ud: !0,
        },
        u = o("9ZMt");
      e.default = u.default.component(a);
    },
  })
);
