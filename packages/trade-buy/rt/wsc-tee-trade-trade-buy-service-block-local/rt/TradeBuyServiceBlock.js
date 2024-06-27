"use strict";
var r = require("~/r");
r(
  "Rv/O",
  Object.assign({}, require("~/v.js").modules, {
    "Rv/O": function (e, t, i) {
      i.r(t);
      var o = i("Fcif"),
        s = i("VmHG"),
        a = i("YeA1"),
        n = {
          props: {
            initShow: { type: Boolean, default: !1 },
            customInvoiceCellStyle: String,
          },
          data() {
            return (
              (this.store = this.ctx.store),
              Object(o.a)(
                {},
                Object(s.d)(this, [
                  "shopConfig",
                  "goods",
                  "order",
                  "dataLoaded",
                  "tradeTag",
                  "showInvoiceCell",
                  "hasHaitaoGoods",
                  "invoice",
                  "invoiceInfo",
                  "disableValueClass",
                  "showMessage",
                ])
              )
            );
          },
          created() {
            this.initActions(),
              Object(a.b)(this, {
                invoice: (e) => {
                  this.updateInvoiceData(JSON.parse(JSON.stringify(e)));
                },
              });
          },
          methods: {
            initActions() {
              Object(s.b)(this, [
                "setOrderMessage",
                "logFocus",
                "updateInvoiceData",
                "setInvoiceSubmit",
                "changeIsShowInvoicePopup",
              ]);
            },
          },
        },
        c = i("9ZMt");
      t.default = c.default.component(n);
    },
  })
);
