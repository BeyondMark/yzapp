"use strict";
var r = require("~/r");
r(
  "2g6q",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "2g6q": function (t, e, o) {
        o.r(e);
        var r = o("ORXP");
        Component({
          properties: { autoInit: { type: Boolean, value: !1 } },
          lifetimes: {
            ready: function () {
              this.properties.autoInit
                ? r.default.init()
                : this.triggerEvent("behaviorComponentReady");
            },
          },
          methods: {
            handleTouchStart(t) {
              this.onTouchStart && this.onTouchStart(t);
            },
            handlerTap(t) {
              this.onTouchEnd && this.onTouchEnd(t);
            },
          },
        });
      },
    }
  )
);
