"use strict";
var r = require("~/r");
r(
  "uPzk",
  Object.assign({}, require("~/v.js").modules, {
    uPzk: function (e, r, t) {
      t.r(r);
      var a = t("882d"),
        i = t("KEq0"),
        s = t.n(i),
        d = {
          props: {
            images: Array,
            disablePreview: { type: Boolean, default: !1 },
          },
          computed: {
            formatedImages() {
              return this.images.map((e) => s()(e, "!300x0.jpg"));
            },
          },
          methods: {
            preview(e) {
              if (this.disablePreview) this.$emit("click-on-disabled");
              else {
                var { index: r } = e.target.dataset;
                (r || 0 === r) &&
                  Object(a.d)({
                    current: +r,
                    urls: this.images.map((e) => s()(e, "!730x0.jpg")),
                  });
              }
            },
          },
          ud: !0,
        },
        u = t("9ZMt");
      r.default = u.default.component(d);
    },
  })
);
