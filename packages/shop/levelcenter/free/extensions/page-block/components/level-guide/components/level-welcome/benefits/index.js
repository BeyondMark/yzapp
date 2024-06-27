"use strict";
var r = require("~/r");
r(
  "F1Db",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    F1Db: function (e, t, i) {
      i.r(t);
      var r = i("rqVN");
      Object(r.b)({
        properties: { benefits: Array, planBenefits: Array, limit: Number },
        data: { renderBenefits: [] },
        attached() {
          this.initRenderBenefits();
        },
        methods: {
          initRenderBenefits() {
            var { benefits: e, planBenefits: t, limit: i } = this.properties,
              r = [].concat(e).concat(t);
            if (r.length > i) {
              var n = r.length;
              r.splice(i - 1, 0, { appName: "全部权益", benefitCount: n });
            }
            this.setYZData({ renderBenefits: r.slice(0, i) });
          },
        },
      });
    },
  })
);
