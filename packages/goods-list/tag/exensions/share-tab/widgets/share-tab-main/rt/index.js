"use strict";
var r = require("~/r");
r(
  "Oc+h",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "Oc+h": function (r, a, e) {
      e.r(a);
      var s = e("7/pW"),
        t = e("9mFz");
      Object(s.a)({
        data: {
          showTab: !1,
          navBarTitle: "",
          canShowNavBar: !1,
          listQuery: {},
          totalAlias: [],
        },
        properties: { shareFrom: Number },
        observers: {},
        attached() {
          Object(t.b)(this, [
            "showTab",
            "navBarTitle",
            "canShowNavBar",
            "listQuery",
            "totalAlias",
          ]);
        },
        methods: {},
      });
    },
  })
);
