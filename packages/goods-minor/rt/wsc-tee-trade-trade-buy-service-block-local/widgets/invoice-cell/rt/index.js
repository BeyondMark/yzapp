"use strict";
var r = require("~/r");
r(
  "t/lV",
  Object.assign({}, require("~/v.js").modules, {
    "t/lV": function (e, t, o) {
      o.r(t);
      var i = {
          props: {
            hasHaitaoGoods: { type: Boolean, default: !1 },
            invoiceInfo: String,
            disableValueClass: String,
            customStyle: String,
          },
          methods: {
            onCellClick() {
              this.ctx.event.emit("changeIsShowInvoicePopup", !0);
            },
          },
          ud: !0,
        },
        s = o("9ZMt");
      t.default = s.default.component(i);
    },
  })
);
