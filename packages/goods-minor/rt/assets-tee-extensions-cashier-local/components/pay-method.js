"use strict";
var r = require("~/r");
r(
  "nnn/",
  Object.assign({}, require("~/v.js").modules, {
    "nnn/": function (e, n, a) {
      a.r(n);
      var t = {
          props: { hairline: Boolean, paying: Boolean, channel: Object },
          computed: {
            lowercase() {
              return this.channel.payChannel.toLowerCase();
            },
            disabled() {
              return !this.channel.available;
            },
            emphasize() {
              return "微信支付" === this.channel.payChannelName;
            },
            saleRightContent() {
              var e;
              return null == (e = this.channel.saleRight)
                ? void 0
                : e.rightContent;
            },
          },
          methods: {
            onClick() {
              this.disabled || this.$emit("pay", this.channel);
            },
          },
          ud: !0,
        },
        i = a("9ZMt");
      n.default = i.default.component(t);
    },
  })
);
