"use strict";
var r = require("~/r");
r(
  "bg6c",
  Object.assign({}, require("~/v.js").modules, {
    bg6c: function (e, t, o) {
      o.r(t);
      var s = o("Fcif"),
        r = o("VmHG"),
        d = {
          data() {
            return Object(s.a)(
              {},
              Object(r.d)(this, [
                "tradeTag",
                "allMeetReduceActivities",
                "formattedGoods",
                "hasGoods",
              ])
            );
          },
          mounted() {
            this.store.onGoodsListMounted();
          },
          destroyed() {
            this.store.onGoodsListDestroyed();
          },
          methods: {
            handleChangePresentPopup(e) {
              this.store.handleChangePresentPopup(e);
            },
            onChangeNum(e) {
              this.store.onChangeNum(e);
            },
          },
        },
        n = o("9ZMt");
      t.default = n.default.component(d);
    },
  })
);
