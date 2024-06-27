"use strict";
var r = require("~/r");
r(
  "N7GL",
  Object.assign({}, require("~/v.js").modules, {
    N7GL: function (t, e, r) {
      r.r(e);
      var i = r("YeA1"),
        c = r("NHEX"),
        s = r.n(c),
        o = {
          data: () => ({ goodsActivity: {} }),
          computed: {
            ecardInstructions() {
              return s()(
                this.goodsActivity,
                "virtualTicket.ecardInstructions",
                []
              );
            },
          },
          created() {
            Object(i.b)(this, ["goodsActivity"]);
          },
          ud: !0,
        },
        u = r("9ZMt");
      e.default = u.default.component(o);
    },
  })
);
