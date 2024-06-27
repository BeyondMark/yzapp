"use strict";
var r = require("~/r");
r(
  "uY2x",
  Object.assign({}, require("~/v.js").modules, {
    uY2x: function (t, a, e) {
      e.r(a);
      var i = e("YeA1"),
        r = {
          data: () => ({
            title: "",
            openCustomNav: !0,
            navigationBarConfigData: {},
          }),
          created() {
            Object(i.b)(this, [
              "title",
              "openCustomNav",
              "navigationBarConfigData",
            ]);
          },
          methods: {
            getHeight(t) {
              this.ctx &&
                this.ctx.data &&
                (this.ctx.data.topNavHeight = t.detail);
            },
            handleShare() {
              this.$emit("share");
            },
          },
          ud: !0,
        },
        s = e("9ZMt");
      a.default = s.default.component(r);
    },
  })
);
