"use strict";
var r = require("~/r");
r(
  "+nuS",
  Object.assign({}, require("~/v.js").modules, {
    "+nuS": function (t, r, i) {
      i.r(r);
      var e = {
          props: { goodsActivity: Object, activity: Object },
          computed: {
            showProductLaunch() {
              return (
                "productLaunch" === this.activity.type &&
                this.activity.reservationNum &&
                this.goodsActivity.waitToSold
              );
            },
            formatNum() {
              var t = this.activity.reservationNum || 0;
              return t <= 999
                ? t
                : t <= 9999
                ? "999+"
                : Math.floor(t / 1e4) + "w+";
            },
          },
          ud: !0,
        },
        o = i("9ZMt");
      r.default = o.default.component(e);
    },
  })
);
