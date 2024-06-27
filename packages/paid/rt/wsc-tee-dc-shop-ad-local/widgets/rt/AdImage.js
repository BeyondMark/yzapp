"use strict";
var r = require("~/r");
r(
  "FSfC",
  Object.assign({}, require("~/v.js").modules, {
    FSfC: function (e, a, i) {
      i.r(a);
      var t = i("w2Y9"),
        n = i.n(t),
        o = {
          name: "ad-image",
          props: {
            adImage: String,
            hotAreas: Array,
            im: Object,
            isSwipe: Boolean,
            linkInfo: Object,
            isImLink: Boolean,
            imageStyle: String,
            isSlide: Boolean,
            isSkyline: Boolean,
          },
          methods: {
            handleClickAdPop(e) {
              this.$emit("handleClickAdPop", e);
            },
            onContactBack(e) {
              e && e.path && this.ctx.dmc.navigate(n.a.add(e.path, e.query));
            },
          },
          ud: !0,
        },
        r = i("9ZMt");
      a.default = r.default.component(o);
    },
  })
);
