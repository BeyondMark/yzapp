"use strict";
var r = require("~/r");
r(
  "/dBf",
  Object.assign({}, require("~/v.js").modules, {
    "/dBf": function (t, e, r) {
      r.r(e);
      var s = r("YeA1"),
        u = {
          name: "show-cell",
          props: { count: Number, alias: String, kdtId: Number },
          computed: {
            cellTitle() {
              return "买家秀" + (this.count > 0 ? " (" + this.count + ")" : "");
            },
          },
          methods: {
            jumpPage() {
              Object(s.a)().dmc.navigate("BuyersShowList", {
                alias: this.alias,
                kdtId: this.kdtId,
              });
            },
          },
          ud: !0,
        },
        a = r("9ZMt");
      e.default = a.default.component(u);
    },
  })
);
