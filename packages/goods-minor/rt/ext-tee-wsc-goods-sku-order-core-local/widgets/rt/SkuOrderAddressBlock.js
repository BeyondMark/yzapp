"use strict";
var r = require("~/r");
r(
  "W2SM",
  Object.assign({}, require("~/v.js").modules, {
    W2SM: function (e, t, r) {
      r.r(t);
      var s = r("Fcif"),
        i = r("VmHG"),
        u = {
          data() {
            return Object(s.a)(
              {},
              Object(i.d)(this, [
                "isPhysical",
                "isVirtualTicket",
                "isShowAddressPopup",
              ])
            );
          },
          computed: {
            customStyle() {
              return "z-index: " + (this.isShowAddressPopup ? "100" : "90");
            },
          },
        },
        c = r("9ZMt");
      t.default = c.default.component(u);
    },
  })
);
