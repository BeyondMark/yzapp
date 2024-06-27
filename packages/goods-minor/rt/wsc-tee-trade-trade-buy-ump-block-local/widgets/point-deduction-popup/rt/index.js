"use strict";
var r = require("~/r");
r(
  "a44i",
  Object.assign({}, require("~/v.js").modules, {
    a44i: function (t, i, o) {
      o.r(i);
      var n = o("Fcif"),
        e = o("VmHG"),
        s = {
          data() {
            return (
              (this.store = this.ctx.store),
              Object(n.a)(
                {},
                Object(e.d)(this, [
                  "isShowPointDeductionDialog",
                  "isShowPointDeductionPrompt",
                  "orderCreated",
                  "pointsName",
                  "pointDeduction",
                  "themeColors",
                  "useConditions",
                  "pointPrice",
                ])
              )
            );
          },
          computed: {
            pointsDeduction() {
              var {
                  pointDeductionRatioType: t,
                  deductionRequiredPoints: i,
                  deductionAmount: o,
                  rate: n,
                } = this.pointDeduction,
                e = { points: n, amount: 1 };
              return 2 === t && (e = { points: i, amount: o }), e;
            },
            pointTotal() {
              var { pointsName: t, pointDeduction: i } = this,
                { canCostPoints: o = 0 } = i || {};
              return "" + o + t;
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
            Object(e.b)(this, [
              "onPointDeductionSwitchChange",
              "togglePointDeductionInfoDialog",
              "togglePointDeductionDialog",
            ]);
          },
          methods: {
            closeInfoDialog() {
              this.togglePointDeductionInfoDialog(!1);
            },
            onSwitchChange() {
              this.onPointDeductionSwitchChange();
            },
            dropUsePoint() {
              this.isUse ? this.onSwitchChange() : this.closePointDialog();
            },
            closePointDialog() {
              this.togglePointDeductionDialog(!1);
            },
          },
        },
        a = o("9ZMt");
      i.default = a.default.component(s);
    },
  })
);
