"use strict";
var r = require("~/r");
r(
  "5IAc",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "5IAc": function (t, e, o) {
        o.r(e);
        var r = o("Fcif"),
          i = o("VmHG"),
          c = o("YeA1"),
          a = o("ub5p"),
          s = {
            data() {
              return (
                (this.store = Object(a.a)(this.ctx)),
                Object(i.c)(this, [
                  "goodsBaseInfo",
                  "goodsActivity",
                  "goodsSkuData",
                  "goodsMetaInfo",
                ]),
                Object(r.a)(
                  {},
                  Object(i.d)(this, ["couponIntroOpt", "ecardIntroOpt"])
                )
              );
            },
            watch: {
              couponIntroOpt: {
                handler(t) {
                  t && (this.ctx.data.couponIntroDetail = t.detail);
                },
                immediate: !0,
              },
            },
            created() {
              Object(c.d)(this, {
                hideVirtualTicketIntro: this.store.hideVirtualTicketIntro,
              });
            },
          },
          d = o("9ZMt");
        e.default = d.default.component(s);
      },
    }
  )
);
