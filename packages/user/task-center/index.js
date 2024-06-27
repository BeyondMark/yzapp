"use strict";
var r = require("~/r");
r(
  "foOv",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    foOv: function (s, r, i) {
      i.r(r);
      var e = i("qJXH"),
        t = getApp();
      Object(e.b)({
        data: { src: "" },
        onLoad(s) {
          var r = t.getKdtId(),
            { isBindFinish: i = "" } = s;
          this.setYZData({
            src:
              "https://h5.youzan.com/wscuser/scrm/missioncenter?kdt_id=" +
              r +
              "&is_bind_finish=" +
              i,
          });
        },
      });
    },
  })
);
