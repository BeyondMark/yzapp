"use strict";
var r = require("~/r");
r(
  "ZCLG",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      ZCLG: function (e, a, s) {
        s.r(a);
        var t = s("4U5+"),
          r = {
            name: "ump-tags",
            props: {
              showTags: { type: Array, default: [] },
              showDefaultTags: { type: Array, default: [] },
              maxNum: { type: Number, default: 0 },
            },
            data: () => ({ colors: t.a }),
            computed: {
              normalTags() {
                return this.showTags.slice(0, this.maxNum);
              },
              defaultTags() {
                return this.showDefaultTags.slice(0, this.maxNum);
              },
            },
            ud: !0,
          },
          u = s("9ZMt");
        a.default = u.default.component(r);
      },
    }
  )
);
