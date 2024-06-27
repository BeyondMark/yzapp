"use strict";
var r = require("~/r");
r(
  "AL0k",
  Object.assign({}, require("~/v.js").modules, {
    AL0k: function (e, t, r) {
      r.r(t);
      var i = r("MLLI"),
        s = {
          props: {
            type: Number,
            price: { type: Number },
            label: String,
            loading: Boolean,
            disabled: Boolean,
            buttonText: String,
            currency: { type: String, default: "¥" },
            buttonType: { type: String, default: "danger" },
            decimalLength: { type: Number, default: 2 },
            suffixLabel: String,
            themeColors: { type: Object, default: () => ({}) },
          },
          data: () => ({ isIPhoneX: !1, statusBarHeight: 0 }),
          computed: {
            hasPrice() {
              var { price: e } = this;
              return "number" == typeof e;
            },
            priceStr() {
              if (!this.hasPrice) return "";
              var { price: e, decimalLength: t } = this;
              return (e / 100).toFixed(t);
            },
            integerStr() {
              return this.priceStr.split(".")[0];
            },
            decimalStr() {
              return "." + this.priceStr.split(".")[1];
            },
          },
          mounted() {
            var e = Object(i.b)(),
              { model: t, statusBarHeight: r } = e,
              s = t.replace(/\s/g, "-"),
              a = /iphone-x|iPhone11|iPhone12/i.test(s);
            (this.isIPhoneX = a), (this.statusBarHeight = r);
          },
          methods: {
            onSubmit(e) {
              this.disabled || this.$emit("submit", e.detail);
            },
          },
          ud: !0,
        },
        a = r("9ZMt");
      t.default = a.default.component(s);
    },
  })
);
