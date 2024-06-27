"use strict";
var r = require("~/r");
r(
  "X7x+",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "X7x+": function (t, e, r) {
        r.r(e);
        var a = r("Fcif"),
          s = r("u8kV"),
          i = r("svh/"),
          c = r("MAT0"),
          u = r("otsx");
        Object(s.b)({
          data: { activedId: 0 },
          mapData: Object(a.a)(
            {},
            Object(i.h)({
              userDrawResultDTO: (t) => t.activity.userDrawResultDTO || {},
              showTip: (t) => {
                var { status: e, joinStatus: r } = t.activity;
                return e === u.m.ING && 1 === r;
              },
              showLotteryIcon: (t) => t.activity.status === u.m.DRAWED,
            }),
            Object(i.f)(["actionBtns", "prizeList"])
          ),
          methods: {
            onSlider(t) {
              var { current: e } = t.detail;
              this.setYZData({ activedId: e });
            },
            clickPrize(t) {
              var { prizeType: e, alias: r } = t.currentTarget.dataset.prize;
              e === u.l.GOODS && Object(c.b)(r);
            },
          },
        });
      },
    }
  )
);
