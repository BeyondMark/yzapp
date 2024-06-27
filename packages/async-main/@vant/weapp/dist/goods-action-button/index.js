"use strict";
var r = require("~/r");
r(
  "gJ3I",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    gJ3I: function (e, t, i) {
      i.r(t);
      var r = i("py6f"),
        a = i("NeL/"),
        n = i("TzfB"),
        s = i("GYYO");
      Object(r.a)({
        mixins: [s.a, n.a],
        relation: Object(a.b)("goods-action"),
        props: {
          text: String,
          color: String,
          size: { type: String, value: "normal" },
          loading: Boolean,
          disabled: Boolean,
          plain: Boolean,
          type: { type: String, value: "danger" },
          customStyle: { type: String, value: "" },
        },
        methods: {
          onClick(e) {
            this.$emit("click", e.detail), this.jumpLink();
          },
          updateStyle() {
            if (null != this.parent) {
              var { index: e } = this,
                { children: t = [] } = this.parent;
              this.setData({ isFirst: 0 === e, isLast: e === t.length - 1 });
            }
          },
        },
      });
    },
  })
);
