"use strict";
var r = require("~/r");
r(
  "Kp/J",
  Object.assign({}, require("~/v.js").modules, {
    "Kp/J": function (e, t, r) {
      r.r(t);
      var s = r("EqB2"),
        i = r("/XVY"),
        o = Object(i.a)({}),
        a = {
          mixins: [Object(s.a)({ optDesc: o })],
          props: {},
          data: () => ({}),
          mounted() {
            this.initObserver();
          },
          methods: {
            initObserver() {
              this.createIntersectionObserver()
                .relativeToViewport({ bottom: 100, top: -100 })
                .observe(".card-skeleton", () => {
                  this.$emit("load");
                });
            },
          },
          ud: !0,
        },
        n = r("9ZMt");
      t.default = n.default.component(a);
    },
  })
);
