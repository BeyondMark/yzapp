"use strict";
var r = require("~/r");
r(
  "kkxS",
  Object.assign({}, require("~/v.js").modules, {
    kkxS: function (t, e, r) {
      r.r(e);
      var i = r("9ZMt"),
        n = {
          props: {
            url: String,
            linkType: { type: String, default: "navigateTo" },
          },
          methods: {
            jumpLink(t) {
              void 0 === t && (t = "url");
              var e = this[t];
              e && i.default[this.linkType]({ url: e });
            },
          },
        },
        s = r("Zqpg"),
        a = {
          name: "t-card",
          mixins: [
            n,
            Object(s.a)({
              externalClasses: [
                "custom-class",
                "num-class",
                "desc-class",
                "thumb-class",
                "title-class",
                "price-class",
                "origin-price-class",
              ],
            }),
          ],
          props: {
            tag: String,
            num: String,
            desc: String,
            thumb: String,
            title: String,
            price: { type: String, default: "" },
            centered: Boolean,
            lazyLoad: Boolean,
            thumbLink: String,
            originPrice: String,
            thumbMode: { type: String, default: "aspectFit" },
            currency: { type: String, default: "¥" },
          },
          computed: {
            integerStr() {
              var { price: t } = this;
              return t.toString().split(".")[0];
            },
            decimalStr() {
              var { price: t } = this,
                e = t.toString().split(".");
              return e[1] ? "." + e[1] : "";
            },
          },
          methods: {
            onClickThumb() {
              this.jumpLink("thumbLink");
            },
          },
          ud: !0,
        };
      e.default = i.default.component(a);
    },
  })
);
