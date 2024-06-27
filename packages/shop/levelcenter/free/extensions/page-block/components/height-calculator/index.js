"use strict";
var r = require("~/r");
r(
  "mes8",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    mes8: function (e, t, r) {
      r.r(t);
      var i = r("rqVN");
      Object(i.b)({
        attached() {
          setTimeout(() => {
            wx.createSelectorQuery()
              .in(this)
              .select("#height-cal")
              .boundingClientRect()
              .exec((e) => {
                var { height: t } = (e && e[0]) || {};
                t > 0 && this.triggerEvent("heightCalculate");
              });
          }, 10);
        },
      });
    },
  })
);
