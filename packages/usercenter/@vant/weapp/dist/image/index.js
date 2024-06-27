"use strict";
var r = require("~/r");
r(
  "CjiW",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    CjiW: function (e, o, a) {
      a.r(o);
      var r = a("py6f"),
        l = a("TzfB");
      Object(r.a)({
        mixins: [l.a],
        classes: [
          "custom-class",
          "loading-class",
          "error-class",
          "image-class",
        ],
        props: {
          src: {
            type: String,
            observer() {
              this.setData({ error: !1, loading: !0 });
            },
          },
          round: Boolean,
          width: null,
          height: null,
          radius: null,
          lazyLoad: Boolean,
          useErrorSlot: Boolean,
          useLoadingSlot: Boolean,
          showMenuByLongpress: Boolean,
          fit: { type: String, value: "fill" },
          webp: { type: Boolean, value: !1 },
          showError: { type: Boolean, value: !0 },
          showLoading: { type: Boolean, value: !0 },
        },
        data: { error: !1, loading: !0, viewStyle: "" },
        methods: {
          onLoad(e) {
            this.setData({ loading: !1 }), this.$emit("load", e.detail);
          },
          onError(e) {
            this.setData({ loading: !1, error: !0 }),
              this.$emit("error", e.detail);
          },
          onClick(e) {
            this.$emit("click", e.detail);
          },
        },
      });
    },
  })
);
