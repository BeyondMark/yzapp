"use strict";
var r = require("~/r");
r(
  "X4H3",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    X4H3: function (e, t, r) {
      r.r(t);
      var n = r("u8kV");
      function a() {
        return getApp ? getApp().getShopTheme() : Promise.resolve(0);
      }
      Object(n.c)({
        properties: { template: { type: Function, observer: "updateStyle" } },
        data: { style: "" },
        attached() {
          this.updateStyle();
        },
        methods: {
          updateStyle() {
            var { template: e } = this.data;
            Promise.all([
              a().then((e) => {
                var { colors: t } = e;
                return [
                  t.general,
                  t["main-bg"],
                  t["main-text"],
                  t["vice-bg"],
                  t["vice-text"],
                  t["start-bg"],
                  t["end-bg"],
                ];
              }),
              a().then((e) => {
                var { colors: t } = e;
                return Object.keys(t).reduce(
                  (e, r) => e + "--" + r + ":" + t[r] + ";",
                  ""
                );
              }),
            ]).then((t) => {
              var [r, n] = t,
                a =
                  ((e) =>
                    "\n--theme-general: " +
                    e[0] +
                    ";\n--theme-main-bg: " +
                    e[1] +
                    ";\n--theme-main-text: " +
                    e[2] +
                    ";\n--theme-vice-bg: " +
                    e[3] +
                    ";\n--theme-vice-text: " +
                    e[4] +
                    ";\n--theme-gradient-start: " +
                    e[5] +
                    ";\n--theme-gradient-end: " +
                    e[6] +
                    ";\n")(r) + n;
              "function" == typeof e && (a += e(r)),
                this.setYZData({ style: a });
            });
          },
        },
      });
    },
  })
);
