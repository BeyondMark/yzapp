"use strict";
var r = require("~/r");
r(
  "DR/G",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "DR/G": function (i, e, r) {
        r.r(e);
        var t = r("Bt9F");
        r("svh/");
        Object(t.a)({
          name: "ActivityPrice",
          properties: {
            activityPrice: {
              type: Object,
              observer() {
                this.setOriginPrice();
              },
            },
          },
          data: { activityOriginPrice: "" },
          methods: {
            setOriginPrice() {
              var { originPrice: i } = this.properties.activityPrice;
              -1 !== i.indexOf("-") && (i = i.split("-")[0] + " 起"),
                this.setData({ activityOriginPrice: i });
            },
          },
        });
      },
    }
  )
);
