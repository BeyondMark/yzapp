"use strict";
var r = require("~/r");
r(
  "m9/d",
  Object.assign({}, require("~/v.js").modules, {
    "m9/d": function (e, t, i) {
      i.r(t);
      var o = i("Tewj"),
        a = i("YeA1"),
        r = i("VmHG"),
        l = {
          props: { skuHeight: String, show: Boolean },
          data: () => ({ display: {}, initShow: !1 }),
          watch: {
            show: {
              handler(e) {
                setTimeout(() => {
                  this.initShow = e;
                }, 500);
              },
              immediate: !0,
            },
          },
          created() {
            Object(a.b)(this, ["display"]),
              Object(r.b)(this, ["togglePrivacyBillRulePopup"]);
          },
          methods: {
            onReHeight() {
              o.default.trigger("calculateSkuHeight");
            },
            onOpenPopup() {
              this.togglePrivacyBillRulePopup(!0);
            },
          },
          ud: !0,
        },
        s = i("9ZMt");
      t.default = s.default.component(l);
    },
  })
);
