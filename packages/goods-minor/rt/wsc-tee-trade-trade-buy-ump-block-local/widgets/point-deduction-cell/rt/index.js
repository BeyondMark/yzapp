"use strict";
var r = require("~/r");
r(
  "Z2bK",
  Object.assign({}, require("~/v.js").modules, {
    Z2bK: function (t, o, i) {
      i.r(o);
      var e = i("Fcif"),
        s = i("VmHG"),
        n = {
          data() {
            return (
              (this.store = this.ctx.store),
              Object(e.a)(
                {},
                Object(s.d)(this, [
                  "pointDesc",
                  "pointDeduction",
                  "disableValueClass",
                  "themeColors",
                  "pointsName",
                ])
              )
            );
          },
          computed: {
            pointTotal() {
              var { pointsName: t, pointDeduction: o } = this,
                { canCostPoints: i = 0 } = o || {};
              return "" + i + t;
            },
            canUse() {
              var { pointDeduction: t } = this;
              return 3 === t.status;
            },
            isUse() {
              var { pointDeduction: t } = this;
              return this.canUse && t.isUse;
            },
          },
          created() {
            (this.store = this.ctx.store),
              Object(s.b)(this, [
                "togglePointDeductionDialog",
                "togglePointDeductionInfoDialog",
              ]);
          },
          methods: {
            onShowInfoDialog() {
              this.togglePointDeductionInfoDialog(!0);
            },
            onShowPointDialog() {
              this.canUse && this.togglePointDeductionDialog(!0);
            },
          },
        },
        a = i("9ZMt");
      o.default = a.default.component(n);
    },
  })
);
