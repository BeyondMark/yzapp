"use strict";
var r = require("~/r");
r(
  "D0Wh",
  Object.assign({}, require("~/v.js").modules, {
    D0Wh: function (e, r, t) {
      t.r(r);
      var o = {
          props: {},
          data: () => ({}),
          methods: {
            onOpen() {
              this.ctx.event.emit("openGroupbuyShareDialog");
            },
          },
          ud: !0,
        },
        u = t("9ZMt");
      r.default = u.default.component(o);
    },
  })
);
