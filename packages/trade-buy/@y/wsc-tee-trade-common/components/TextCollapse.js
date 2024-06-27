"use strict";
var r = require("~/r");
r(
  "t1GZ",
  Object.assign({}, require("~/v.js").modules, {
    t1GZ: function (t, e, i) {
      i.r(e);
      var s = {
          name: "text-collapse",
          props: {
            content: { type: Array, default: () => [] },
            rows: { type: Number, default: 3 },
            alias: { type: String, default: "" },
          },
          data: () => ({ showMore: !1, initFinish: !1 }),
          computed: {
            showComp() {
              return !(
                !Array.isArray(this.content) || 0 === this.content.length
              );
            },
            maxHeight() {
              return !this.initFinish || this.showMore
                ? 1.5 * this.rows + "em"
                : "100em";
            },
          },
          watch: {
            content: {
              handler(t) {
                this.showComp && this.init();
              },
              immediate: !0,
            },
          },
          methods: {
            init() {
              this.$nextTick(() => {
                var t = this.createSelectorQuery();
                t
                  .select(".collapse-wrapper-text-" + this.alias)
                  .boundingClientRect(),
                  t
                    .select(".collapse-wrapper-" + this.alias)
                    .boundingClientRect(),
                  t.exec((t) => {
                    t[0] || t[1]
                      ? ((this.initFinish = !0),
                        (this.showMore = t[0].height > t[1].height))
                      : this.init();
                  });
              });
            },
            onShowMore() {
              this.showMore = !1;
            },
          },
          ud: !0,
        },
        r = i("9ZMt");
      e.default = r.default.component(s);
    },
  })
);
