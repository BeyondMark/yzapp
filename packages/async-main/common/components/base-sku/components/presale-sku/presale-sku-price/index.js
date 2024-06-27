"use strict";
var r = require("~/r");
r(
  "9LVE",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "9LVE": function (e, t, r) {
        r.r(t);
        var a,
          s,
          i,
          l = r("u8kV"),
          o = r("4k4N"),
          u = r("xyw3"),
          c = r("6i0Q");
        Object(l.c)({
          behaviors: [o.a],
          properties: {
            selectedSkuComb: {
              type: Object,
              observer(e) {
                e &&
                  e.deposit_offer &&
                  this.setYZData({
                    selectedDecrease:
                      "¥" + Object(u.a)(e.deposit_offer).toYuan(),
                  });
              },
            },
          },
          data: {
            themeGeneral: "",
            isRetailApp:
              null !=
                (a =
                  null == (s = getApp()) || null == (i = s.globalData)
                    ? void 0
                    : i.isRetailApp) && a,
          },
          ready() {
            c.a.getThemeColor("general").then((e) => {
              this.setYZData({ themeGeneral: e });
            });
          },
        });
      },
    }
  )
);
