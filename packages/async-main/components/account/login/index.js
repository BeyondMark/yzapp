"use strict";
var r = require("~/r");
r(
  "Pbff",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Pbff: function (e, t, o) {
      o.r(t);
      var a = o("kv38");
      Component({
        properties: {
          show: { type: Boolean, value: !1 },
          loginType: { type: String, value: "sms" },
          redirectUrl: {
            type: String,
            value: "/packages/account/settings/index",
          },
          refresh: { type: Boolean, value: !0 },
          forbidClose: { type: Boolean, value: !0 },
          isFromAuthComponent: { type: Boolean, value: !1 },
        },
        data: {},
        behaviors: [a.a],
        lifetimes: { attached() {} },
        methods: {
          behaviorComponentReady() {
            o.e("packages/async-main/chunk")
              .then(o.bind(null, "ORXP"))
              .then((e) => {
                var { default: t } = e;
                t.init(this);
              });
          },
          onClose() {
            this.setData({ show: !1 }), this.triggerEvent("closeAccountLogin");
          },
          changeLoginType(e) {
            this.setData({ loginType: e.detail.type });
          },
          loginSuccess(e) {
            this.triggerEvent("loginSuccess", e.detail);
          },
          loginFail(e) {
            this.triggerEvent("loginFail", e.detail);
          },
        },
      });
    },
    kv38: function (e, t, o) {
      var a = o("8B9M"),
        i = Object(a.a)();
      t.a = Behavior({
        data: {
          popupBottom: 0,
          noSafeBottom: 0,
          authorizePopupCustomStyle: "",
          safeBottom: "iPhone-X" === i.deviceType,
        },
        attached() {
          i.isSwitchTab("", !0).then((e) => {
            e &&
              this.setData({
                popupBottom: 49,
                authorizePopupCustomStyle: "",
                noSafeBottom: this.data.safeBottom ? 83 : 49,
              });
          });
        },
      });
    },
  })
);
