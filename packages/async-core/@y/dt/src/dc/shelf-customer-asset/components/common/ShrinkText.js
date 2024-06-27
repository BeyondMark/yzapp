"use strict";
var r = require("~/r");
r(
  "ZTmF",
  Object.assign({}, require("~/v.js").modules, {
    ZTmF: function (e, t, i) {
      i.r(t);
      var n = {
          props: { text: String, initialSize: { type: Number, default: 20 } },
          data: () => ({ fontSize: 20 }),
          watch: {
            text() {
              this.getContainerWidth().then((e) => {
                this.getFontSize(e);
              });
            },
          },
          mounted() {
            (this.fontSize = this.initialSize),
              this.getContainerWidth().then((e) => {
                this.getFontSize(e);
              });
          },
          methods: {
            getContainerWidth() {
              return new Promise((e) => {
                this.getContainerSelect()
                  .select(".shrink-container")
                  .boundingClientRect()
                  .exec((t) => {
                    t[0] && e(t[0].width);
                  });
              });
            },
            getFontSize(e) {
              this.getInnerSelect()
                .select(".inner")
                .boundingClientRect()
                .exec((t) => {
                  var i;
                  this.fontSize <= 12 ||
                    ((null == (i = t[0]) ? void 0 : i.width) > e &&
                      ((this.fontSize -= 2),
                      this.$nextTick(() => {
                        this.getFontSize(e);
                      })));
                });
            },
            getContainerSelect() {
              return (
                this._containerSelect ||
                  (this._containerSelect = this.createSelectorQuery()),
                this._containerSelect
              );
            },
            getInnerSelect() {
              return (
                this._innerSelect ||
                  (this._innerSelect = this.createSelectorQuery()),
                this._innerSelect
              );
            },
          },
          ud: !0,
        },
        r = i("9ZMt");
      t.default = r.default.component(n);
    },
  })
);
