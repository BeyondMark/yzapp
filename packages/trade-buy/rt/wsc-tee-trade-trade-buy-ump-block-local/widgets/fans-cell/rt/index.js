"use strict";
var r = require("~/r");
r(
  "/0eo",
  Object.assign({}, require("~/v.js").modules, {
    "/0eo": function (e, t, n) {
      n.r(t);
      var r = n("YeA1"),
        s = n("znzr"),
        i = {
          data: () => ({ fansBenefit: { value: 0 }, show: !1, themeCSS: "" }),
          computed: {
            value() {
              var e,
                t = (null == (e = this.fansBenefit) ? void 0 : e.value) || 0;
              return t ? "-￥ " + (t / 100).toFixed(2) : 0;
            },
            title() {
              var e;
              return (null == (e = this.fansBenefit) ? void 0 : e.typeId) ===
                s.a.wechatWork
                ? "好友优惠"
                : "粉丝优惠";
            },
          },
          created() {
            Object(r.b)(this, ["fansBenefit", "themeCSS"]);
          },
          methods: {
            onClick() {
              this.show = !0;
            },
            onClose() {
              this.show = !1;
            },
          },
          ud: !0,
        },
        a = n("9ZMt");
      t.default = a.default.component(i);
    },
    znzr: function (e, t, n) {
      t.a = { subscription: 118, wechatWork: 119 };
    },
  })
);
