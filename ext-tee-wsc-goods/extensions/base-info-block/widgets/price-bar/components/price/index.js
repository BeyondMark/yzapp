"use strict";
var r = require("~/r");
r(
  "NxGF",
  Object.assign({}, require("~/v.js").modules, {
    NxGF: function (e, r, t) {
      t.r(r);
      var i = t("Fcif"),
        c = t("Nvad"),
        s = {
          name: "goods-price-info",
          props: { priceInfo: Object, priceTags: Array },
          computed: {
            price() {
              return Object(c.b)(this.priceInfo.price);
            },
            hasMemberPriceTag() {
              return (this.priceTags || []).some((e) => "会员价" === e.text);
            },
            filteredPriceTags() {
              return (this.priceTags || [])
                .filter((e) => "会员价" !== e.text)
                .map((e) => Object(i.a)({}, e, { text: Object(c.b)(e.text) }));
            },
          },
          ud: !0,
        },
        a = t("9ZMt");
      r.default = a.default.component(s);
    },
  })
);
