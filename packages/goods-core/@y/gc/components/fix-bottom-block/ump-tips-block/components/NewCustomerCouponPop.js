"use strict";
var r = require("~/r");
r(
  "7hJv",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "7hJv": function (o, e, t) {
      t.r(e);
      var n = t("T6h7"),
        u = t.n(n),
        r = {
          name: "NewCustomerCouponPop",
          props: { buyButtonPop: Object, newCustomerCouponPopIcon: String },
          computed: {
            time() {
              var { validStartTime: o, validEndTime: e } = this.buyButtonPop,
                t = +new Date();
              return e > t && t > o ? u()(e, t) : 0;
            },
            popIcon() {
              return this.newCustomerCouponPopIcon
                ? this.newCustomerCouponPopIcon
                : "https://img01.yzcdn.cn/upload_files/2021/08/23/FgOqlu92sQFXNbv06Uu8gKnuizos.png";
            },
          },
          ud: !0,
        },
        s = t("9ZMt");
      e.default = s.default.component(r);
    },
  })
);
