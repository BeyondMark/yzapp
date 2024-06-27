"use strict";
var r = require("~/r");
r(
  "wli8",
  Object.assign({}, require("~/v.js").modules, {
    wli8: function (t, e, r) {
      r.r(e);
      var o = r("Fcif"),
        i = r("VmHG"),
        s = {
          props: { customStyle: String, overlayStyle: String },
          data() {
            return (
              (this.store = this.ctx.store),
              Object(o.a)(
                {},
                Object(i.d)(this, [
                  "showActivityDialog",
                  "orderPromotions",
                  "themeColors",
                ])
              )
            );
          },
          computed: {
            formattedActs() {
              return (this.orderPromotions || []).map((t) =>
                Object(o.a)({}, t, { priceText: this.price(t.decrease) })
              );
            },
            decreaseTotal() {
              var t = (this.orderPromotions || []).reduce(function (t, e) {
                return t + e.decrease;
              }, 0);
              return this.price(t);
            },
          },
          created() {
            Object(i.b)(this, ["onActivityDialogClose"]);
          },
          methods: {
            onClose() {
              this.onActivityDialogClose();
            },
            price: (t) => (t /= 100).toFixed(2),
          },
        },
        c = r("9ZMt");
      e.default = c.default.component(s);
    },
  })
);
