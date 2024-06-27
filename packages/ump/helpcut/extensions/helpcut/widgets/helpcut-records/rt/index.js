"use strict";
var r = require("~/r");
r(
  "FCSI",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    FCSI: function (e, s, a) {
      a.r(s);
      var t = a("7/pW"),
        r = a("VmHG");
      Object(t.a)({
        data: { isCollapse: !0 },
        attached() {
          Object(r.d)(this, ["goodsDetail", "defaultAvatar"]),
            Object(r.d)(this, ["newBargainRecords"]);
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
