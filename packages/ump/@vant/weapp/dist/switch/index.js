"use strict";
var r = require("~/r");
r(
  "6PbK",
  Object.assign({}, require("~/v.js").modules, {
    "6PbK": function (e, a, i) {
      i.r(a);
      var t = i("py6f");
      Object(t.a)({
        field: !0,
        classes: ["node-class"],
        props: {
          checked: null,
          loading: Boolean,
          disabled: Boolean,
          activeColor: String,
          inactiveColor: String,
          size: { type: String, value: "30" },
          activeValue: { type: null, value: !0 },
          inactiveValue: { type: null, value: !1 },
        },
        methods: {
          onClick() {
            var {
              activeValue: e,
              inactiveValue: a,
              disabled: i,
              loading: t,
            } = this.data;
            if (!i && !t) {
              var l = this.data.checked === e ? a : e;
              this.$emit("input", l), this.$emit("change", l);
            }
          },
        },
      });
    },
  })
);
