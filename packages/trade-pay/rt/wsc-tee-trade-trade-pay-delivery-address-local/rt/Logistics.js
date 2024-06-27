"use strict";
var r = require("~/r");
r(
  "hd8y",
  Object.assign({}, require("~/v.js").modules, {
    hd8y: function (s, d, e) {
      e.r(d);
      var r = e("YeA1"),
        t = {
          data: () => ({
            dataLoaded: !1,
            showLogistics: !1,
            hasAddress: !1,
            currentAddress: {},
            fullAddress: "",
          }),
          created() {
            Object(r.b)(this, [
              "dataLoaded",
              "showLogistics",
              "hasAddress",
              "currentAddress",
              "fullAddress",
            ]);
          },
          ud: !0,
        },
        a = e("9ZMt");
      d.default = a.default.component(t);
    },
  })
);
