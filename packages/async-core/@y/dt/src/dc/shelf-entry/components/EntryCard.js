"use strict";
var r = require("~/r");
r(
  "uZbY",
  Object.assign({}, require("~/v.js").modules, {
    uZbY: function (e, t, a) {
      a.r(t);
      var r = a("taYb"),
        i = {
          props: {
            cardData: { type: Object, default: () => ({}) },
            templateMode: Number,
            customerStyle: String,
            templateType: Number,
            iconPosition: String,
            iconSize: String,
            cardType: String,
            borderRadiusType: Number,
            imageAlignType: Number,
            textAlignType: Number,
            customClass: String,
            isFiveTop: Boolean,
          },
          computed: {
            backgroundImage() {
              var { cardData: e } = this;
              return "url(" + e.img + ")";
            },
            showCard() {
              var { templateType: e, cardData: t } = this;
              return !(0 === e && 1 === t.isShow);
            },
            cardLayout() {
              var { templateType: e } = this;
              return 0 === e ? "horizontal" : "vertical";
            },
          },
          methods: {
            handleNavigation() {
              var { cardData: e } = this;
              this.$emit("jumpToLink", r.a.toCamelCase(e.linkData));
            },
          },
          ud: !0,
        },
        o = a("9ZMt");
      t.default = o.default.component(i);
    },
  })
);
