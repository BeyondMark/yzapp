"use strict";
var r = require("~/r");
r(
  "ZfPr",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    ZfPr: function (t, e, r) {
      r.r(e);
      var i = r("u8kV");
      Object(i.c)({
        properties: {
          text: String,
          color: String,
          highlightText: { type: String, observer: "getHighlightText" },
          highlightColor: String,
        },
        data: { textArray: [] },
        methods: {
          getHighlightText() {
            var { text: t } = this.data,
              { highlightText: e } = this.data;
            if (!e || !t) return t || "";
            for (var r = 0; r < e.length; r++) {
              var i = new RegExp(e[r], "g");
              i.test(this.data.text) && (t = t.replace(i, "~~$&~~"));
            }
            this.setYZData({ textArray: t.split("~~") });
          },
        },
      });
    },
  })
);
