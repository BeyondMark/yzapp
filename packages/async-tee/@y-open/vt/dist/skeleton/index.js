"use strict";
var r = require("~/r");
r(
  "26el",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "26el": function (t, e, a) {
        a.r(e);
        var r = a("m6kV"),
          i = a("Gy0k"),
          l = Object(r.a)("t-skeleton"),
          s = Object(r.a)("t-skeleton__avatar"),
          n = {
            name: "t-skeleton",
            externalClasses: i.a,
            props: {
              row: { type: [String, Number], value: 0 },
              title: Boolean,
              avatar: Boolean,
              loading: { type: Boolean, default: !0 },
              animate: { type: Boolean, default: !0 },
              avatarSize: { type: [String, Number], default: "32px" },
              avatarShape: { type: String, default: "round" },
              titleWidth: { type: String, default: "40%" },
              rowWidth: { type: null, default: "100%" },
            },
            computed: {
              classes() {
                return {
                  root: "custom-class " + l([{ animate: this.animate }]),
                  avatar: "avatar-class " + s([this.avatarShape]),
                  content: "t-skeleton__content",
                  title: "title-class  t-skeleton__title",
                  row: "row-class t-skeleton__row",
                };
              },
              titleStyle() {
                return "width:" + this.titleWidth;
              },
              avatarStyle() {
                return "number" == typeof this.avatarSize
                  ? "width:" +
                      this.avatarSize +
                      "px;height:" +
                      this.avatarSize +
                      "px"
                  : "width:" + this.avatarSize + ";height:" + this.avatarSize;
              },
              rowArray() {
                return Array.from({ length: this.row });
              },
              isArray() {
                return this.rowWidth instanceof Array;
              },
            },
            ud: !0,
          },
          o = a("9ZMt");
        e.default = o.default.component(n);
      },
    }
  )
);
