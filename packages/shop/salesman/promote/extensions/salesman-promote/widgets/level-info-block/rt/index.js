"use strict";
var r = require("~/r");
r(
  "0x/L",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "0x/L": function (e, t, r) {
        r.r(t);
        var s = r("7/pW"),
          c = r("VmHG"),
          o = r("2ncY"),
          i = r("we3t"),
          a = r("gcCW");
        Object(s.a)({
          name: "LevelInfo",
          attached() {
            Object(c.d)(this, [
              "commissionInfo",
              "levelUpgradeTextData",
              "sl",
              "showLevelBlock",
            ]),
              Object(c.b)(this, ["setTrackLooger"]);
          },
          methods: {
            goLevelCenter() {
              this.setTrackLooger(a.b.clickLevelCenter),
                this.data.commissionInfo.upgradeNewLevelVersion
                  ? Object(i.k)(Object(o.h)(o.f, {}))
                  : Object(i.k)(Object(o.h)(o.e, {}));
            },
          },
        });
      },
    }
  )
);
