"use strict";
var r = require("~/r");
r(
  "5BFR",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "5BFR": function (e, r, t) {
      t.r(r);
      var s = t("Fcif"),
        a = t("rqVN");
      Object(a.b)({
        properties: {
          coords: Object,
          list: {
            type: Array,
            observer() {
              this.setYZData({ page: 1 });
            },
          },
        },
        data: {},
        methods: {
          handleClick(e) {
            var r = e.currentTarget.dataset.poi;
            this.triggerEvent(
              "select",
              Object(s.a)({}, r.location, { name: r.title })
            );
          },
        },
      });
    },
  })
);
