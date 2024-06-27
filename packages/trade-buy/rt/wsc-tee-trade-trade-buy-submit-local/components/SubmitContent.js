"use strict";
var r = require("~/r");
r(
  "ipU7",
  Object.assign({}, require("~/v.js").modules, {
    ipU7: function (r, e, a) {
      a.r(e);
      var o = {
          mixins: [a("KrsW").b.externalClassesMixin(["order-pay-class"])],
          props: {
            showPriorUseSummary: { type: Boolean, default: !1 },
            themeColors: Object,
            orderFinalPrice: String,
            showPostage: Boolean,
            priceLabel: String,
            showComma: Boolean,
            formatPriceArray: Array,
            pointStr: String,
            payPostage: String,
            displayPrice: String,
            showDisplayCardPrice: Boolean,
            payRechargeInfo: Object,
          },
          ud: !0,
        },
        i = a("9ZMt");
      e.default = i.default.component(o);
    },
  })
);
