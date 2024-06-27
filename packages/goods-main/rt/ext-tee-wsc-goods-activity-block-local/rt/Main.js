"use strict";
var r = require("~/r");
r(
  "NHCP",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      NHCP: function (e, t, s) {
        s.r(t);
        var r = s("Fcif"),
          o = s("jzOx"),
          c = s("YeA1"),
          i = s("VmHG"),
          a = {
            data() {
              return (
                (this.store = Object(o.a)(this.ctx)),
                Object(i.c)(this, [
                  "goodsActivity",
                  "goodsPriceInfo",
                  "currentActivity",
                  "goodsBaseInfo",
                  "shopBaseInfo",
                  "theme",
                  "umpActivity",
                  "env",
                ]),
                Object(r.a)(
                  {},
                  Object(i.d)(this, [
                    "presaleProgressOpt",
                    "actDetailOpt",
                    "newProductLaunchOpt",
                  ])
                )
              );
            },
            created() {
              Object(c.e)(this, {
                showDepositPresalInfo: (e) => {
                  this.$refs.presaleProgressBlock.setShowDepositPresalInfo(e);
                },
              });
            },
          },
          u = s("9ZMt");
        t.default = u.default.component(a);
      },
    }
  )
);
