"use strict";
var r = require("~/r");
r(
  "xgL1",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      xgL1: function (e, t, a) {
        a.r(t);
        var r = a("VmHG"),
          s = a("7/pW"),
          c = a("2ncY"),
          d = a("we3t"),
          i = a("gcCW");
        Object(s.a)({
          name: "task-award-block",
          attached() {
            Object(r.d)(this, ["taskAwardData", "kdtId"]),
              Object(r.b)(this, ["getTaskAwardData", "setTrackLooger"]);
          },
          ready() {
            this.getTaskAwardData();
          },
          methods: {
            goTaskDetail(e) {
              var { currentTarget: t } = e,
                { query: a } = t.dataset;
              this.setTrackLooger(i.b.clickRewardCenter),
                Object(d.k)(Object(c.h)(c.g, a));
            },
          },
        });
      },
    }
  )
);
