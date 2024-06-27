"use strict";
var r = require("~/r");
r(
  "4Uf0",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "4Uf0": function (e, r, t) {
        t.r(r);
        var a = t("u55p");
        Component({
          options: { addGlobalClass: !0 },
          externalClasses: ["btn-wrap-class"],
          behaviors: [a.a],
          properties: {
            type: { type: Number, value: 1 },
            buttonText: String,
            redirectType: Number,
            appId: String,
            alias: String,
            extraData: { type: Object, value: {} },
            buttonSize: String,
            needWxAuth: { type: Boolean, value: !0 },
          },
          methods: {
            handleGoodsBuy() {
              var { redirectType: e } = this.data;
              0 != (1 & e) &&
                (this.triggerEvent("user-authorize-change", !1),
                this.triggerEvent("buy"));
            },
            handleUserAuthorizeOpen() {
              this.triggerEvent("user-authorize-change", !0);
            },
            handleUserAuthorizeClose() {
              this.triggerEvent("user-authorize-change", !1);
            },
            handleTap() {},
          },
        });
      },
    }
  )
);
