"use strict";
var r = require("~/r");
r(
  "Iw99",
  Object.assign({}, require("~/v.js").modules, {
    Iw99: function (e, t, r) {
      r.r(t);
      var i = {
          mounted() {
            this.initObserver();
          },
          methods: {
            initObserver() {
              this.createIntersectionObserver()
                .relativeToViewport({ bottom: 100, top: -100 })
                .observe(".empty-block", () => {
                  this.$emit("load");
                });
            },
          },
          ud: !0,
        },
        o = r("9ZMt");
      t.default = o.default.component(i);
    },
  })
);
