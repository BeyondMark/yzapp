"use strict";
var r = require("~/r");
r(
  "neYy",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      neYy: function (e, t, a) {
        a.r(t);
        var r = a("7/pW"),
          s = a("VmHG"),
          d = a("kHfR"),
          i = a("2ncY"),
          c = a("we3t");
        Object(r.a)({
          name: "task-award-tips",
          behaviors: [d.a],
          attached() {
            Object(s.d)(this, [
              "taskAwardData",
              "goodsBottomDisabledTip",
              "kdtId",
            ]);
          },
          methods: {
            goTaskDetail(e) {
              var { currentTarget: t } = e,
                { query: a } = t.dataset;
              Object(c.k)(Object(i.h)(i.g, a));
            },
          },
        });
      },
    }
  )
);
