"use strict";
var r = require("~/r");
r(
  "w+mY",
  Object.assign({}, require("~/v.js").modules, {
    "w+mY": function (e, t, n) {
      n.r(t);
      var r = {
          data() {
            var e;
            return {
              appContentAppendIsCloudSlot: !(
                null == (e = this.ctx.data.cloudDesignConfig) ||
                !e.replacedSlots.includes("app-content-append")
              ),
            };
          },
        },
        a = n("9ZMt");
      t.default = a.default.component(r);
    },
  })
);
