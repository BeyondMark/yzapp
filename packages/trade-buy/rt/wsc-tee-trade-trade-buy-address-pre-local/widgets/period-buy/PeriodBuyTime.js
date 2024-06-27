"use strict";
var r = require("~/r");
r(
  "kKM3",
  Object.assign({}, require("~/v.js").modules, {
    kKM3: function (e, t, o) {
      o.r(t);
      var s = {
          props: {
            periodBuy: {
              type: Object,
              default: () => ({ chosenIndex: 0, options: [] }),
            },
            themeCss: { type: String, default: "" },
            themeColors: { type: Object, default: () => ({}) },
            orderCreated: { type: Boolean, default: !1 },
          },
          data: () => ({ showPicker: !1 }),
          computed: {
            timeText() {
              var {
                  options: e = [],
                  chosenIndex: t = 0,
                  chosenOption: o,
                } = this.periodBuy,
                s = e[t] || o;
              return s ? s + " 首次送达" : "";
            },
          },
          methods: {
            onClose() {
              this.showPicker = !1;
            },
            onShow() {
              this.showPicker = !0;
            },
            handleChangeChosen(e) {
              this.$emit("changeChosen", e);
            },
          },
          ud: !0,
        },
        r = o("9ZMt");
      t.default = r.default.component(s);
    },
  })
);
