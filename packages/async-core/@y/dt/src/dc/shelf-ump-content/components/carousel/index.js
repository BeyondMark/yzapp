"use strict";
var r = require("~/r");
r(
  "GP+j",
  Object.assign({}, require("~/v.js").modules, {
    "GP+j": function (e, t, r) {
      r.r(t);
      var n = {
          props: { announcement: String, umpList: Array },
          computed: {
            animateClass() {
              var { carouselLength: e } = this;
              return e < 2 ? "" : "animate" + e;
            },
            carouselLength() {
              var e, t;
              return null ==
                (e = new Array(
                  (null == (t = this.umpList) ? void 0 : t.length) +
                    (this.announcement ? 1 : 0)
                ))
                ? void 0
                : e.length;
            },
          },
          methods: {
            more() {
              this.$emit("more");
            },
          },
          ud: !0,
        },
        u = r("9ZMt");
      t.default = u.default.component(n);
    },
  })
);
