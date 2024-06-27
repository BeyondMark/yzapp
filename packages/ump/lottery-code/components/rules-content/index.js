"use strict";
var r = require("~/r");
r(
  "mzDP",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    mzDP: function (e, s, i) {
      i.r(s);
      var t = i("Fcif"),
        r = i("u8kV"),
        a = i("svh/");
      Object(r.b)({
        mapData: Object(t.a)(
          {},
          Object(a.h)({
            showSlide: (e) => e.sliderList.length,
            isOpenRank: (e) => e.activity.isOpenRank,
          }),
          Object(a.f)(["rules"])
        ),
        data: { rulesVisible: !1 },
        methods: {
          toggleRules() {
            this.setYZData({ rulesVisible: !this.data.rulesVisible });
          },
        },
      });
    },
  })
);
