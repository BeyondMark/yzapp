"use strict";
var r = require("~/r");
r(
  "O0BT",
  Object.assign({}, require("~/v.js").modules, {
    O0BT: function (e, t, a) {
      a.r(t);
      var r = a("9ZMt"),
        o = r.default.getApp(),
        s = {
          props: { show: { type: Boolean, default: !1 } },
          data: () => ({ imgUrl: "" }),
          created() {
            this.setImgUrl(), o.on("app:loading:change", this.setImgUrl);
          },
          beforeDestroy() {
            o.off("app:loading:change", this.setImgUrl);
          },
          methods: {
            setImgUrl() {
              this.imgUrl = o.globalData.globalCustomLoading;
            },
          },
          ud: !0,
        };
      t.default = r.default.component(s);
    },
  })
);
