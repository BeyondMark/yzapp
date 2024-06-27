"use strict";
var r = require("~/r");
r(
  "pb5K",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    pb5K: function (e, t, a) {
      a.r(t);
      var i = a("7/pW"),
        s = a("VmHG");
      Object(i.a)({
        attached() {
          Object(s.d)(this, [
            "showCutSuccess",
            "bargainDetail",
            "goodsDetail",
            "userCutPrice",
          ]),
            Object(s.b)(this, ["SET_SHOW_CUT_SUCESS"]);
        },
        methods: {
          onCreateNewBargain() {
            var { alias: e } = this.data.goodsDetail || {},
              { activityId: t } = this.data.bargainDetail || {};
            wx.redirectTo({
              url:
                "/pages/goods/detail/index?alias=" +
                e +
                "&type=helpcut&activityId=" +
                t,
            });
          },
          closeCutPop() {
            this.SET_SHOW_CUT_SUCESS();
          },
        },
      });
    },
  })
);
