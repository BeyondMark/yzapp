"use strict";
var r = require("~/r");
r(
  "0stb",
  Object.assign({}, require("~/v.js").modules, {
    "0stb": function (t, e, i) {
      i.r(e);
      var n = i("eijD"),
        a = {
          name: "FontCalculate",
          props: {
            maxWidth: { type: Number, default: 80 },
            item: { type: Object, default: () => ({}) },
            curFontSize: { type: Number, default: 30 },
            minFontSize: { type: Number, default: 16 },
            color: String,
            isSkyline: { type: Boolean, default: !1 },
          },
          data() {
            return {
              valueFontSize: this.curFontSize,
              calculating: !0,
              fontWidth: 0,
            };
          },
          computed: {
            fontStyle() {
              return (
                "font-size: " +
                this.valueFontSize +
                "px;opacity:" +
                (this.calculating ? 0 : 1) +
                ";" +
                (this.fontWidth ? "maxWidth:" + this.fontWidth + "px;" : "")
              );
            },
            containerStyle() {
              return (
                "max-width: " + this.maxWidth + "px;color: " + this.color + ";"
              );
            },
          },
          mounted() {
            setTimeout(
              () =>
                this.weappCalculate().then(() => {
                  this.calculating = !1;
                }),
              0
            );
          },
          methods: {
            weappCalculate() {
              var t = this;
              return Object(n.a)(function* () {
                for (;;) {
                  var e = yield t.getBoundingClientRectWidth(".font-calculate"),
                    i = yield t.getBoundingClientRectWidth(".value"),
                    { width: n, height: a } = e;
                  if (
                    n <= t.maxWidth &&
                    a < 2 * t.valueFontSize &&
                    i.width < t.maxWidth
                  )
                    return;
                  if (t.valueFontSize <= t.minFontSize) return;
                  t.valueFontSize -= 2;
                }
              })();
            },
            getBoundingClientRectWidth(t) {
              return new Promise((e) => {
                this.createSelectorQuery()
                  .select(t)
                  .boundingClientRect()
                  .exec((t) => {
                    var i = t[0] || {};
                    e(i);
                  });
              });
            },
          },
        },
        u = i("9ZMt");
      e.default = u.default.component(a);
    },
  })
);
