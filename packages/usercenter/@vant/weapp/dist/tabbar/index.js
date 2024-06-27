"use strict";
var r = require("~/r");
r(
  "K1kI",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    K1kI: function (e, t, r) {
      r.r(t);
      var a = r("py6f"),
        i = r("NeL/"),
        o = r("6MKc");
      Object(a.a)({
        relation: Object(i.a)("tabbar-item", function () {
          this.updateChildren();
        }),
        props: {
          active: { type: null, observer: "updateChildren" },
          activeColor: { type: String, observer: "updateChildren" },
          inactiveColor: { type: String, observer: "updateChildren" },
          fixed: { type: Boolean, value: !0, observer: "setHeight" },
          placeholder: { type: Boolean, observer: "setHeight" },
          border: { type: Boolean, value: !0 },
          zIndex: { type: Number, value: 1 },
          safeAreaInsetBottom: { type: Boolean, value: !0 },
        },
        data: { height: 50 },
        methods: {
          updateChildren() {
            var { children: e } = this;
            Array.isArray(e) &&
              e.length &&
              e.forEach((e) => e.updateFromParent());
          },
          setHeight() {
            this.data.fixed &&
              this.data.placeholder &&
              wx.nextTick(() => {
                Object(o.d)(this, ".van-tabbar").then((e) => {
                  this.setData({ height: e.height });
                });
              });
          },
        },
      });
    },
  })
);
