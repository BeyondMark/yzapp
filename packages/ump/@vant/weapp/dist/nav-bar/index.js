"use strict";
var r = require("~/r");
r(
  "pUP/",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "pUP/": function (e, t, i) {
      i.r(t);
      var s = i("py6f"),
        a = i("6MKc");
      Object(s.a)({
        classes: ["title-class"],
        props: {
          title: String,
          fixed: { type: Boolean, observer: "setHeight" },
          placeholder: { type: Boolean, observer: "setHeight" },
          leftText: String,
          rightText: String,
          customStyle: String,
          leftArrow: Boolean,
          border: { type: Boolean, value: !0 },
          zIndex: { type: Number, value: 1 },
          safeAreaInsetTop: { type: Boolean, value: !0 },
        },
        data: { height: 46 },
        created() {
          var { statusBarHeight: e } = Object(a.e)();
          this.setData({ statusBarHeight: e, height: 46 + e });
        },
        mounted() {
          this.setHeight();
        },
        methods: {
          onClickLeft() {
            this.$emit("click-left");
          },
          onClickRight() {
            this.$emit("click-right");
          },
          setHeight() {
            this.data.fixed &&
              this.data.placeholder &&
              wx.nextTick(() => {
                Object(a.d)(this, ".van-nav-bar").then((e) => {
                  e && "height" in e && this.setData({ height: e.height });
                });
              });
          },
        },
      });
    },
  })
);
