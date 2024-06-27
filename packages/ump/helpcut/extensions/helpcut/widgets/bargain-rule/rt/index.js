"use strict";
var r = require("~/r");
r(
  "RL0l",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    RL0l: function (e, s, r) {
      r.r(s);
      var i = r("7/pW");
      Object(i.a)({
        data: { rulesVisible: !1 },
        methods: {
          openRules() {
            this.setYZData({ rulesVisible: !0 });
          },
          closeRules() {
            this.setYZData({ rulesVisible: !1 });
          },
        },
      });
    },
  })
);
