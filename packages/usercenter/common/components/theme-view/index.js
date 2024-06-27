"use strict";
var r = require("~/r");
r(
  "HDmz",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    HDmz: function (e, r, t) {
      t.r(r);
      var a = t("u8kV"),
        n = t("6i0Q");
      Object(a.c)({
        properties: {
          bg: { type: String, observer: "generateStyle" },
          opacity: { type: String, value: 1, observer: "generateStyle" },
          color: { type: String, observer: "generateStyle" },
          border: { type: String, observer: "generateStyle" },
          borderAfter: { type: String, observer: "generateStyle" },
          gradient: { type: Boolean, observer: "generateStyle" },
          reverseGradient: Boolean,
          gradientDeg: { type: Number, value: 0 },
          twillGradient: { type: Number },
          gradientStart: String,
          gradientEnd: String,
          innerStyle: String,
        },
        data: { elementStyle: "", borderAfterStyle: "" },
        _themeType: 0,
        _colors: [],
        externalClasses: ["custom-class", "custom-after-class"],
        methods: {
          generateStyle() {
            if ("number" == typeof this._themeType) {
              var e = this._colors,
                {
                  bg: r,
                  opacity: t,
                  color: a,
                  border: i,
                  borderAfter: o,
                  gradient: g,
                  gradientDeg: s,
                  innerStyle: l,
                  twillGradient: d,
                  reverseGradient: c,
                } = this.data,
                b = this.data.gradientEnd || e[6],
                y = this.data.gradientStart || e[5],
                S = "",
                v = "",
                h = "",
                p = "";
              if (r) {
                var u = this.convertToStyle(r);
                if (((S = "background-color: " + u + ";"), 1 != +t)) {
                  var [m, f, T] = n.a.switchHexToRgb(u);
                  S =
                    "background-color: rgba(" +
                    m +
                    ", " +
                    f +
                    ", " +
                    T +
                    ", " +
                    t +
                    ");";
                }
              }
              if (a) v = "color: " + this.convertToStyle(a) + ";";
              if (i) h = "border-color: " + this.convertToStyle(i) + ";";
              if (o) p = "border-color: " + this.convertToStyle(o);
              if (g)
                S =
                  "background: " +
                  ("linear-gradient(" + s + "deg, " + y + ", " + b + ")") +
                  ";";
              if (c) {
                var [x, k, _] = n.a.switchHexToRgb(e[6]),
                  [w, D, H] = n.a.switchHexToRgb(e[5]);
                S =
                  "background: " +
                  ("linear-gradient(" +
                    s +
                    "deg, rgba(" +
                    x +
                    ", " +
                    k +
                    ", " +
                    _ +
                    ", 0.8), rgba(" +
                    w +
                    ", " +
                    D +
                    ", " +
                    H +
                    ", 0.8))") +
                  ";";
              }
              if (d)
                S =
                  "background: " +
                  ("linear-gradient(135deg, " +
                    e[6] +
                    " 0, " +
                    e[6] +
                    " 25%, transparent 25%, transparent 50%, " +
                    e[6] +
                    " 50%, " +
                    e[6] +
                    " 75%, transparent 75%, transparent)") +
                  "; background-size: 8px 8px;";
              var j = S + " " + h + " " + v + " " + l;
              this.setYZData({ elementStyle: j, borderAfterStyle: p });
            }
          },
          convertToStyle: (e) => n.a.getThemeColorWithType(e),
        },
        created() {
          n.a.getTheme().then((e) => {
            this._themeType = +e.type;
            var { colors: r } = e;
            (this._colors = [
              r.general,
              r["main-bg"],
              r["main-text"],
              r["vice-bg"],
              r["vice-text"],
              r["start-bg"],
              r["end-bg"],
            ]),
              this.generateStyle();
          });
        },
      });
    },
  })
);
