"use strict";
var r = require("~/r");
r(
  "HPPE",
  Object.assign({}, require("~/v.js").modules, {
    HPPE: function (s, r, t) {
      t.r(r);
      var o = t("aOlM"),
        e = {
          props: { skuRow: Object, isFirst: Boolean, isLast: Boolean },
          data: () => ({ progress: 0 }),
          computed: {
            skuRowClass() {
              return (
                "sku-row " +
                (this.isFirst ? "is-first" : "") +
                " " +
                (this.isLast ? "is-last" : "")
              );
            },
            isScroll() {
              var { largeImageMode: s } = this.skuRow;
              return s;
            },
            showIndicator() {
              var { v: s = [] } = this.skuRow;
              return this.isScroll && s.length > 6;
            },
            width() {
              if (this.isScroll) {
                var { topLength: s } = this.skuRow;
                return 116 * s - 4 + "px;";
              }
              return "auto;";
            },
            indicatorStyle() {
              return this.showIndicator
                ? "transform: translate3d(" + 25 * this.progress + "px, 0, 0)"
                : "";
            },
          },
          methods: {
            onScroll(s) {
              if (this.showIndicator) {
                var { scrollLeft: r, scrollWidth: t } = s.detail || s.target;
                (this.progress = r / (t - 342)),
                  Object(o.a)(this.setProgress, 30)(r, t);
              }
            },
            setProgress(s, r) {
              this.progress = s / (r - 342);
            },
          },
          ud: !0,
        },
        i = t("9ZMt");
      r.default = i.default.component(e);
    },
  })
);
