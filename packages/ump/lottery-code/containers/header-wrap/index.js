"use strict";
var r = require("~/r");
r(
  "G4qf",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    G4qf: function (t, s, e) {
      e.r(s);
      var a = e("Fcif"),
        i = e("u8kV"),
        r = e("svh/");
      Object(i.b)({
        mapData: Object(a.a)(
          {},
          Object(r.h)({
            status: (t) => t.activity.status,
            showSlider: (t) => t.sliderList.length,
            topNum: (t) => t.activity.topNum,
            isOpenRank: (t) => t.activity.isOpenRank,
          })
        ),
        data: { statusBarHeight: wx.getSystemInfoSync().statusBarHeight },
      });
    },
  })
);
