"use strict";
var r = require("~/r");
r(
  "u8LA",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    u8LA: function (e, t, r) {
      r.r(t);
      var s = r("7/pW"),
        a = r("9mFz");
      Object(s.a)({
        data: {
          showShareFloating: !1,
          listQuery: {},
          totalAlias: [],
          iconUrl: "https://b.yzcdn.cn/goods_share/share-floating.png",
        },
        properties: {
          cloudConfig: { type: Object, observer: "handleSetIconUrl" },
        },
        attached() {
          Object(a.b)(this, ["showShareFloating", "listQuery", "totalAlias"]);
        },
        methods: {
          handleSetIconUrl(e) {
            e && e.icon && this.setYZData({ iconUrl: e.icon });
          },
        },
      });
    },
  })
);
