"use strict";
var r = require("~/r");
r(
  "qx8O",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    qx8O: function (t, e, s) {
      s.r(e);
      var r = s("u8kV"),
        o = [
          Behavior({
            properties: {
              status: { type: Number },
              color: { type: String },
              statusText: { type: String },
            },
          }),
        ],
        a = {
          1: { text: "有效的", color: "#969799" },
          2: { text: "已使用", color: "#969799" },
          3: { text: "已过期", color: "#969799" },
          4: { text: "无效的", color: "#969799" },
          5: { text: "已锁定", color: "#969799" },
          6: { text: "已转赠", color: "#969799" },
        };
      Object(r.c)({
        behaviors: o,
        externalClasses: ["custom-class"],
        options: { multipleSlots: !0 },
        ready() {
          this.computedData();
        },
        data: { style: "", statusData: {} },
        methods: {
          computedData() {
            var { color: t, status: e, statusText: s } = this.data,
              r = a[e] || {};
            1 === e && (r = {}), s && (r = { text: s });
            var o = t || r.color;
            this.setYZData({ statusData: r, style: "color: " + o + ";" });
          },
        },
      });
    },
  })
);
