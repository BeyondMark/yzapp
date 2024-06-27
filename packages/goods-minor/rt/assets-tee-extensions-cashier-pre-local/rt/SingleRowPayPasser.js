"use strict";
var r = require("~/r");
r(
  "UqH7",
  Object.assign({}, require("~/v.js").modules, {
    UqH7: function (e, s, t) {
      t.r(s);
      var a = t("YeA1"),
        P = {
          data: () => ({
            prePayShowPayPasser: !1,
            computedHeight: 0,
            prePayPass: "",
          }),
          created() {
            Object(a.b)(this, [
              "prePayShowPayPasser",
              "prePayPass",
              "computedHeight",
            ]);
          },
          methods: {
            onPayPassForget(e) {
              this.ctx.event.emit("onPrePayPassForget", e);
            },
            onPayPassUpdate(e) {
              this.ctx.event.emit("onPrePayPassUpdate", e);
            },
            onPayPassCheck(e) {
              this.ctx.event.emit("onPrePayPassCheck", e);
            },
            onPayPassClose(e) {
              this.ctx.event.emit("onPrePayPassClose", e);
            },
          },
          ud: !0,
        },
        r = t("9ZMt");
      s.default = r.default.component(P);
    },
  })
);
