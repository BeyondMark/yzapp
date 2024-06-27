"use strict";
var r = require("~/r");
r(
  "hwhI",
  Object.assign({}, require("~/v.js").modules, {
    hwhI: function (t, e, i) {
      i.r(e);
      var r = {
          name: "font-calculate",
          props: {
            maxWidth: { type: Number, default: 80 },
            minFontSize: { type: Number, default: 14 },
            curFontSize: { type: Number, default: 24 },
          },
          mounted() {
            this.calculate();
          },
          methods: {
            calculate() {
              var { wrapper: t } = this.$refs || {};
              if (t) {
                t.style.fontSize = this.curFontSize + "px";
                for (
                  var e = t.offsetWidth, i = this.curFontSize;
                  e > this.maxWidth;

                ) {
                  if (i <= this.minFontSize) return;
                  i--, (t.style.fontSize = i + "px"), (e = t.offsetWidth);
                }
              }
            },
          },
          ud: !0,
        },
        u = i("9ZMt");
      e.default = u.default.component(r);
    },
  })
);
