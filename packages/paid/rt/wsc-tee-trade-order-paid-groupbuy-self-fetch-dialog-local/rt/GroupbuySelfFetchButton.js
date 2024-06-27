"use strict";
var r = require("~/r");
r(
  "ZrQi",
  Object.assign({}, require("~/v.js").modules, {
    ZrQi: function (e, t, r) {
      r.r(t);
      var o = {
          props: { border: { type: Boolean, default: !0 } },
          data: () => ({ themeColors: {} }),
          created() {
            this.ctx.watch("themeColors", (e) => (this.themeColors = e));
          },
          methods: {
            onOpen() {
              this.ctx.event.emit("openGroupbuySelfFetchDialog");
            },
          },
          ud: !0,
        },
        s = r("9ZMt");
      t.default = s.default.component(o);
    },
  })
);
