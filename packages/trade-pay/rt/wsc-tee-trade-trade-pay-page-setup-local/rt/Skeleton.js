"use strict";
var r = require("~/r");
r(
  "0cRG",
  Object.assign({}, require("~/v.js").modules, {
    "0cRG": function (t, e, a) {
      a.r(e);
      var i = a("YeA1"),
        r = {
          data: () => ({ animationClass: "" }),
          created() {
            Object(i.b)(
              this,
              {
                dataLoaded: (t) => {
                  t &&
                    setTimeout(() => {
                      (this.animationClass = "fade-out"), this.ctx.inited();
                      try {
                        var t;
                        null == (t = this.ctx.hummer) ||
                          t.markRendered("trade-pay-skeleton-hide");
                      } catch (t) {}
                    }, 100);
                },
              },
              { isSetData: !1 }
            );
          },
          ud: !0,
        },
        s = a("9ZMt");
      e.default = s.default.component(r);
    },
  })
);
