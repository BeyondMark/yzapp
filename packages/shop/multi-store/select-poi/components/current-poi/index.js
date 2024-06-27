"use strict";
var r = require("~/r");
r(
  "c/Sj",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "c/Sj": function (e, t, r) {
      r.r(t);
      var i = r("Fcif"),
        c = r("rqVN");
      Object(c.b)({
        properties: { poi: Object },
        attached() {},
        methods: {
          handleClick(e) {
            var t = e.currentTarget.dataset.poi;
            this.triggerEvent(
              "getStore",
              Object(i.a)({}, t.location, { name: t.title })
            );
          },
          getLocation() {
            this.triggerEvent("getLocation");
          },
        },
      });
    },
  })
);
