"use strict";
var r = require("~/r");
r(
  "v3wL",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    v3wL: function (e, t, a) {
      a.r(t);
      var i = a("py6f"),
        r = a("kFi4"),
        s = a("6MKc");
      Object(i.a)({
        props: {
          message: String,
          background: String,
          type: { type: String, value: "danger" },
          color: { type: String, value: r.f },
          duration: { type: Number, value: 3e3 },
          zIndex: { type: Number, value: 110 },
          safeAreaInsetTop: { type: Boolean, value: !1 },
          top: null,
        },
        data: { show: !1, onOpened: null, onClose: null, onClick: null },
        created() {
          var { statusBarHeight: e } = Object(s.e)();
          this.setData({ statusBarHeight: e });
        },
        methods: {
          show() {
            var { duration: e, onOpened: t } = this.data;
            clearTimeout(this.timer),
              this.setData({ show: !0 }),
              wx.nextTick(t),
              e > 0 &&
                e !== 1 / 0 &&
                (this.timer = setTimeout(() => {
                  this.hide();
                }, e));
          },
          hide() {
            var { onClose: e } = this.data;
            clearTimeout(this.timer),
              this.setData({ show: !1 }),
              wx.nextTick(e);
          },
          onTap(e) {
            var { onClick: t } = this.data;
            t && t(e.detail);
          },
        },
      });
    },
  })
);
