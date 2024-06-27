"use strict";
var r = require("~/r");
r(
  "eQR0",
  Object.assign({}, require("~/v.js").modules, {
    eQR0: function (e, t, a) {
      a.r(t);
      var r = a("EqB2"),
        l = a("/XVY"),
        i = Object(l.a)({
          selectedGroup: { default: "" },
          navList: { default: () => [] },
        }),
        s = {
          mixins: [Object(r.a)({ optDesc: i })],
          props: {
            scrollViewStyle: { type: String, default: "" },
            hideScrollbar: { type: Boolean, default: !1 },
          },
          data: () => ({}),
          methods: {
            handleScroll(e) {
              this.$emit("handle-scroll", e.detail);
            },
            handleChange(e) {
              if (e && e.currentTarget) {
                var { alias: t } = e.currentTarget.dataset;
                this.$emit("handle-change", { alias: t });
              }
            },
          },
          ud: !0,
        },
        d = a("9ZMt");
      t.default = d.default.component(s);
    },
  })
);
