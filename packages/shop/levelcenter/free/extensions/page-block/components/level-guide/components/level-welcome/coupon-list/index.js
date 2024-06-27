"use strict";
var r = require("~/r");
r(
  "kutB",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    kutB: function (e, i, r) {
      r.r(i);
      var t = r("Fcif"),
        o = r("rqVN"),
        n = (e, i) => Number((e / i).toFixed(2));
      Object(o.b)({
        properties: { coupons: Array, limit: Number },
        data: { renderCoupons: [], couponCount: 0 },
        attached() {
          this.initRenderCoupons();
        },
        methods: {
          initRenderCoupons() {
            var { coupons: e, limit: i } = this.properties,
              r = (e || [])
                .slice(0, i)
                .map((e) =>
                  Object(t.a)({}, e, {
                    value:
                      1 === e.preferentialType
                        ? n(e.denominations || 0, 100)
                        : n(e.discount || 0, 10),
                    unit: 1 === e.preferentialType ? "元" : "折",
                    threshold: e.usingThresholdCopywriting || "",
                    name: e.title,
                    validEndTime: void 0,
                    validStartTime: void 0,
                  })
                );
            this.setYZData({ renderCoupons: r });
          },
        },
      });
    },
  })
);
