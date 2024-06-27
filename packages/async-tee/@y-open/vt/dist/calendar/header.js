"use strict";
var r = require("~/r");
r(
  "iKVo",
  Object.assign({}, require("~/v.js").modules, {
    iKVo: function (e, t, r) {
      r.r(t);
      var i = {
          props: {
            title: { type: String, default: "日期选择" },
            subtitle: String,
            showTitle: Boolean,
            showSubtitle: Boolean,
          },
          data: () => ({
            weekdays: ["日", "一", "二", "三", "四", "五", "六"],
          }),
          ud: !0,
        },
        o = r("9ZMt");
      t.default = o.default.component(i);
    },
  })
);
