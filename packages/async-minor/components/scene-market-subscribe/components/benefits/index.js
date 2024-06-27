"use strict";
var r = require("~/r");
r(
  "zkNW",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    zkNW: function (e, t, i) {
      i.r(t);
      var r = i("rqVN");
      Object(r.b)({
        properties: { benefitList: Array, limit: Number },
        data: { renderBenefits: [] },
        attached() {
          this.initRenderBenefits();
        },
        methods: {
          initRenderBenefits() {
            var { benefitList: e, limit: t } = this.properties,
              i = [...e];
            if (i.length > t) {
              var r = i.length;
              i.splice(t - 1, 0, { appName: "全部权益", benefitCount: r });
            }
            this.setYZData({ renderBenefits: i.slice(0, t) });
          },
        },
      });
    },
  })
);
