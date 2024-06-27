"use strict";
var r = require("~/r");
r(
  "RiIc",
  Object.assign({}, require("~/v.js").modules, {
    RiIc: function (t, e, o) {
      o.r(e);
      var r = {
          props: {
            opt: { type: Object, default: () => ({}) },
            item: { type: Object, default: () => ({}) },
          },
          computed: {
            showAction() {
              var { layoutOpt: t = {}, style: e } = this.opt,
                { type: o } = t;
              return (
                ((1 === e || 2 === e || 3 === e || 4 === e) && "one" === o) ||
                5 === e ||
                7 === e ||
                (8 === e && ("one" === o || "two" === o)) ||
                void 0
              );
            },
            showName() {
              var { layoutOpt: t = {}, style: e } = this.opt;
              return ("one" === t.type && 7 !== e) || 6 === e;
            },
            showText() {
              var { layoutOpt: t = {}, style: e } = this.opt,
                { type: o } = t;
              return !(
                (7 === e && ("one" === o || "two" === o)) ||
                !this.item.text
              );
            },
            conditionText() {
              var {
                thresholdCopyWriting: t,
                thresholdCopywriting: e,
                preferentialMode: o,
                deliveryTypeDesc: r,
                applicableGoodRangeDesc: i,
              } = this.item;
              return (t || e) + ",\n            " + (5 === o ? r : i);
            },
          },
          ud: !0,
        },
        i = o("9ZMt");
      e.default = i.default.component(r);
    },
  })
);
