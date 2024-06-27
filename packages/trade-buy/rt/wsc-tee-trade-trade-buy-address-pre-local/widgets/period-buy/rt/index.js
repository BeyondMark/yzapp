"use strict";
var r = require("~/r");
r(
  "gm7+",
  Object.assign({}, require("~/v.js").modules, {
    "gm7+": function (e, t, r) {
      r.r(t);
      var o = r("Fcif"),
        s = r("YeA1"),
        d = {
          data: () => ({
            periodBuy: { chosenIndex: 0, options: [] },
            orderCreated: !1,
            themeColors: {},
            themeCSS: "",
          }),
          created() {
            Object(s.b)(this, ["orderCreated", "themeColors", "themeCSS"]),
              Object(s.b)(this, {
                periodBuy: (e) => {
                  this.periodBuy = Object(o.a)({}, e);
                },
              });
          },
          methods: {
            handleChangeChosen(e) {
              this.ctx.process.invoke("setPeriodBuyChosenIndex", e);
            },
          },
          ud: !0,
        },
        i = r("9ZMt");
      t.default = i.default.component(d);
    },
  })
);
