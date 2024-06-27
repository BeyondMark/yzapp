"use strict";
var r = require("~/r");
r(
  "o016",
  Object.assign({}, require("~/v.js").modules, {
    o016: function (e, t, r) {
      r.r(t);
      var o = {
          props: {},
          data: () => ({}),
          methods: {
            onOpen() {
              this.ctx.event.emit("openSolitaireDialog");
            },
          },
          ud: !0,
        },
        i = r("9ZMt");
      t.default = i.default.component(o);
    },
  })
);
