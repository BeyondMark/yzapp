"use strict";
var r = require("~/r");
r(
  "48jm",
  Object.assign({}, require("~/v.js").modules, {
    "48jm": function (e, t, s) {
      s.r(t);
      var h = {
          props: { textList: { type: Array } },
          data: () => ({ maxHeight: "4.5em", show: !1 }),
          watch: {
            textList() {
              this.showOpen();
            },
          },
          mounted() {
            this.showOpen();
          },
          methods: {
            open() {
              (this.show = !1), (this.maxHeight = "999em");
            },
            showOpen() {
              var e = this.createSelectorQuery();
              e.select(".collapse-wrapper-text").boundingClientRect(),
                e.select(".collapse-wrapper").boundingClientRect(),
                e.exec((e) => {
                  e[0].height <= e[1].height
                    ? (this.show = !1)
                    : (this.show = !0);
                });
            },
          },
          ud: !0,
        },
        i = s("9ZMt");
      t.default = i.default.component(h);
    },
  })
);
