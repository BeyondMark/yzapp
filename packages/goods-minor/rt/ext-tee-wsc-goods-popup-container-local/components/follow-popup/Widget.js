"use strict";
var r = require("~/r");
r(
  "3xdo",
  Object.assign({}, require("~/v.js").modules, {
    "3xdo": function (e, o, t) {
      t.r(o);
      var r = {
          name: "follow-popup",
          props: {
            themeVars: String,
            shopBaseInfo: Object,
            shopMpInfo: Object,
            goodsBaseInfo: Object,
            routeData: Object,
          },
          methods: {
            dmcJump(e) {
              this.$emit("dmc-jump", e);
            },
          },
          ud: !0,
        },
        s = t("9ZMt");
      o.default = s.default.component(r);
    },
  })
);
