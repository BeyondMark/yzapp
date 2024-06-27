"use strict";
var r = require("~/r");
r(
  "FgU7",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      FgU7: function (e, t, a) {
        a.r(t);
        var r = a("KEq0"),
          i = a.n(r),
          s = a("gycV"),
          n = a("q29p"),
          u = a.n(n),
          m = i()("public_files/08d3d75bf4079a955f673d5f6aabab65.png", "small"),
          o = {
            name: "trade-records-item",
            inheritAttrs: !1,
            externalClasses: ["custom-class"],
            props: {
              buyerName: String,
              avatar: { type: String, default: m },
              num: { type: Number, default: 0 },
              payTime: Number,
              hairline: { type: Boolean, default: !1 },
              showBuyBtn: { type: Boolean, default: !1 },
              position: { type: Array, default: () => [] },
              buyBtnText: String,
              showSwipe: { type: Boolean, default: !1 },
            },
            computed: {
              relativePayTime() {
                var e = Object(s.a)(this.payTime);
                return this.showSwipe ? this.formatPayTime(e, this.payTime) : e;
              },
              avatarUrl() {
                return i()(this.avatar, "small");
              },
              lastStyle() {
                return this.showBuyBtn ? "margin-right: 12px;" : "";
              },
              recordsPayTime() {
                var e = Object(s.a)(this.payTime);
                return this.formatPayTime(e, this.payTime);
              },
            },
            methods: {
              placeOrder() {
                this.$emit("touchMainBtn", this.position);
              },
              formatPayTime: (e, t) =>
                /\d{1,2}:\d{1,2}:\d{1,2}$/.test(e) ? u()(t, "MM月DD日") : e,
            },
            ud: !0,
          },
          l = a("9ZMt");
        t.default = l.default.component(o);
      },
    }
  )
);
