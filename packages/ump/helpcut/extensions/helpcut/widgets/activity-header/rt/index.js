"use strict";
var r = require("~/r");
r(
  "+Mi3",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "+Mi3": function (e, s, i) {
      i.r(s);
      var t = i("7/pW"),
        r = i("VmHG");
      Object(t.a)({
        data: { rulesVisible: !1 },
        attached() {
          Object(r.d)(this, ["goodsDetail"]);
        },
        methods: {
          toggleRules() {
            this.setYZData({ rulesVisible: !this.data.rulesVisible });
          },
        },
      });
    },
  })
);
