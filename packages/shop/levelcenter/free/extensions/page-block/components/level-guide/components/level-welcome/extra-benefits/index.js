"use strict";
var r = require("~/r");
r(
  "Is11",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Is11: function (e, t, r) {
      r.r(t);
      var i = r("Fcif"),
        s = r("rqVN"),
        n = r("zMoS");
      Object(s.b)({
        properties: {
          benefit: Object,
          limit: Number,
          presentInfo: Object,
          pointsName: String,
        },
        attached() {
          this.initRenderBenefits();
        },
        methods: {
          initRenderBenefits() {
            var { benefit: e, limit: t } = this.properties;
            if (!e) return [];
            var r = t - Object(n.a)(e, "coupon.couponList", []).length;
            if (r <= 0) return [];
            var s = ["present", "points"]
              .reduce(
                (t, r) => (
                  e[r] && t.push(Object(i.a)({}, e[r], { key: r })), t
                ),
                []
              )
              .slice(0, r);
            this.setYZData({ renderBenefits: s });
          },
        },
      });
    },
  })
);
