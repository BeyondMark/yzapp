"use strict";
var r = require("~/r");
r(
  "5Fz5",
  Object.assign({}, require("~/v.js").modules, {
    "5Fz5": function (e, r, t) {
      t.r(r);
      var u = {
          props: {
            needMobile: Boolean,
            userAuthorize: { type: Object },
            kdtId: Number,
            themeColor: String,
            channel: { type: Object, required: !0 },
          },
          ud: !0,
        },
        o = t("9ZMt");
      r.default = o.default.component(u);
    },
  })
);
