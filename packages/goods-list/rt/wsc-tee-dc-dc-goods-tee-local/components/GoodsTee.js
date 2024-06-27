"use strict";
var r = require("~/r");
r(
  "WyMi",
  Object.assign({}, require("~/v.js").modules, {
    WyMi: function (e, t, i) {
      i.r(t);
      var d = {
          props: {
            _opt: { type: Object, default: () => {} },
            kdtId: { type: Object, default: () => {} },
            uuid: { type: String, default: "" },
          },
          methods: {
            handleItemClick(e) {
              this.$emit("item-click", e);
            },
            showcaseHandleGoodsBuy(e) {
              this.$emit("button-click", e);
            },
            handleItemImageLoaded(e) {
              this.$emit("on-item-image-loaded", e);
            },
          },
          ud: !0,
        },
        a = i("9ZMt");
      t.default = a.default.component(d);
    },
  })
);
