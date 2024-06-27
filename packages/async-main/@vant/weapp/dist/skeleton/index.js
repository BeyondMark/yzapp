"use strict";
var r = require("~/r");
r(
  "DPi2",
  Object.assign({}, require("~/v.js").modules, {
    DPi2: function (a, r, e) {
      e.r(r);
      var t = e("py6f");
      Object(t.a)({
        classes: ["avatar-class", "title-class", "row-class"],
        props: {
          row: {
            type: Number,
            value: 0,
            observer(a) {
              this.setData({ rowArray: Array.from({ length: a }) });
            },
          },
          title: Boolean,
          avatar: Boolean,
          loading: { type: Boolean, value: !0 },
          animate: { type: Boolean, value: !0 },
          avatarSize: { type: String, value: "32px" },
          avatarShape: { type: String, value: "round" },
          titleWidth: { type: String, value: "40%" },
          rowWidth: {
            type: null,
            value: "100%",
            observer(a) {
              this.setData({ isArray: a instanceof Array });
            },
          },
        },
        data: { isArray: !1, rowArray: [] },
      });
    },
  })
);
