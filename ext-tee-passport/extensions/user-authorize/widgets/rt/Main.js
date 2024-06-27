"use strict";
var r = require("~/r");
r(
  "jKn0",
  Object.assign({}, require("~/v.js").modules, {
    jKn0: function (t, e, o) {
      o.r(e);
      var a = o("YeA1"),
        u = o("qo/7"),
        r = {
          mixins: [Object(u.a)("main")],
          props: {
            customStyle: String,
            scene: String,
            authTypeList: { type: Array, value: [] },
            kdtId: { type: [Number, String], required: !0 },
            needUpdateNicknameAndAvatar: { type: Boolean, default: !1 },
            needGetUnionId: Boolean,
            type: String,
            zIndex: { type: Number, default: 1e4 },
            privacyProtocol: {
              type: Object,
              default: () => ({
                text: "《隐私政策》",
                url: "https://www.youzan.com/intro/rule/detail?alias=132atyi19&pageType=rules",
              }),
            },
            userProtocol: {
              type: Object,
              default: () => ({
                text: "《用户协议》",
                url: "https://www.youzan.com/intro/rule/detail?alias=4f234e2f&pageType=rules",
              }),
            },
            popupCustomStyle: String,
            allowDeny: Boolean,
            hooks: Object,
          },
          data() {
            return { bindKdtId: this.ctx.data.kdtId };
          },
          computed: {
            authKdtId() {
              return this.kdtId || this.bindKdtId;
            },
          },
          created() {
            Object(a.b)(this, {
              kdtId: (t) => {
                this.bindKdtId = t;
              },
            });
          },
          methods: {
            handleStatusChange(t) {
              this.$emit("status-change", t);
            },
            handleNext(t) {
              var { ctx: e } = this;
              e.logger &&
                t.mobile &&
                e.logger.setUser({ li: t.userId, m: t.mobile }),
                this.$emit("next", t);
            },
            handleFail(t) {
              this.$emit("fail", t);
            },
            handleAuthPopupShow(t) {
              this.$emit("auth-popup-show", t);
            },
            handleAuthPopupAllow(t) {
              this.$emit("auth-popup-allow", t);
            },
            handleAuthPopupRefuse(t) {
              this.$emit("auth-popup-refuse", t);
            },
          },
        },
        i = o("9ZMt");
      e.default = i.default.component(r);
    },
    "qo/7": function (t, e, o) {
      o.d(e, "a", function () {
        return a;
      });
      function a(t) {
        return {
          data() {
            var { cloudDesignConfig: e } = this.ctx.data;
            return {
              protocolIsCloudSlot:
                !!e && e.replacedSlots.includes("user-auth-protocol-content"),
              protocolSource: "@ext/authorize/" + t + "_" + Date.now(),
            };
          },
        };
      }
    },
  })
);
