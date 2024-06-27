"use strict";
var r = require("~/r");
r(
  "WLLm",
  Object.assign({}, require("~/v.js").modules, {
    WLLm: function (t, o, i) {
      i.r(o);
      var n = i("Fcif"),
        e = i("VmHG"),
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
                  deductionRequiredPoints: o,
                  deductionAmount: i,
                  rate: n,
                } = this.pointDeduction,
                e = { points: n, amount: 1 };
              return 2 === t && (e = { points: o, amount: i }), e;
            },
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
        c = i("9ZMt");
      o.default = c.default.component(s);
    },
  })
);
