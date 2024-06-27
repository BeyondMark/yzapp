"use strict";
var r = require("~/r");
r(
  "GyJo",
  Object.assign({}, require("~/v.js").modules, {
    GyJo: function (e, t, r) {
      r.r(t);
      var o = {
          name: "PriceFilter",
          mixins: [r("R7Zb").a],
          props: {
            showFiter: {
              type: Boolean,
              default: function () {
                return !1;
              },
            },
            max: { type: Number, default: 200 },
            themeColors: {
              type: Object,
              default: () => ({
                general: "#f44",
                "vice-bg": "#f85",
                "vice-text": "#fff",
              }),
            },
          },
          data() {
            return { value: this.max };
          },
          computed: {
            textColor() {
              return ["color: " + this.themeColors["vice-text"]].join(";");
            },
          },
          methods: {
            onReset() {
              this.value = 200;
            },
            onComfirm() {
              this.$emit("comfirm", this.value);
            },
            changeVal(e) {
              this.value = e;
            },
          },
        },
        i = r("9ZMt");
      t.default = i.default.component(o);
    },
  })
);
