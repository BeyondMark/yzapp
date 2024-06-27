"use strict";
var r = require("~/r");
r(
  "VAbV",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    VAbV: function (e, s, a) {
      a.r(s);
      var t = a("7/pW"),
        r = a("VmHG");
      Object(t.a)({
        data: { isCollapse: !0 },
        attached() {
          Object(r.d)(this, [
            "bargainRecords",
            "fetchRecordFail",
            "fetchRecordIng",
          ]);
        },
        methods: {
          toggleCollapse() {
            this.setYZData({ isCollapse: !this.data.isCollapse });
          },
        },
      });
    },
  })
);
