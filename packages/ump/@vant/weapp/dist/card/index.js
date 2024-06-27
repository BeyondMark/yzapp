"use strict";
var r = require("~/r");
r(
  "MMi7",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    MMi7: function (t, e, i) {
      i.r(e);
      var r = i("GYYO"),
        s = i("py6f");
      Object(s.a)({
        classes: [
          "num-class",
          "desc-class",
          "thumb-class",
          "title-class",
          "price-class",
          "origin-price-class",
        ],
        mixins: [r.a],
        props: {
          tag: String,
          num: String,
          desc: String,
          thumb: String,
          title: String,
          price: { type: String, observer: "updatePrice" },
          centered: Boolean,
          lazyLoad: Boolean,
          thumbLink: String,
          originPrice: String,
          thumbMode: { type: String, value: "aspectFit" },
          currency: { type: String, value: "¥" },
        },
        methods: {
          updatePrice() {
            var { price: t } = this.data,
              e = t.toString().split(".");
            this.setData({
              integerStr: e[0],
              decimalStr: e[1] ? "." + e[1] : "",
            });
          },
          onClickThumb() {
            this.jumpLink("thumbLink");
          },
        },
      });
    },
  })
);
