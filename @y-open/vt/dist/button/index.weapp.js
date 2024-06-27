"use strict";
var r = require("~/r");
r(
  "n1v6",
  Object.assign({}, require("~/v.js").modules, {
    n1v6: function (t, e, i) {
      i.r(e);
      var o = i("Zqpg"),
        a = {
          name: "t-button",
          mixins: [
            Object(o.a)({
              externalClasses: [
                "custom-class",
                "text-class",
                "hover-class",
                "loading-class",
              ],
            }),
          ],
          props: {
            buttonId: String,
            lang: String,
            businessId: Number,
            sessionFrom: String,
            sendMessageTitle: String,
            sendMessagePath: String,
            sendMessageImg: String,
            showMessageCard: Boolean,
            appParameter: String,
            ariaLabel: String,
            openType: String,
            icon: String,
            plain: Boolean,
            block: Boolean,
            round: Boolean,
            square: Boolean,
            loading: Boolean,
            hairline: Boolean,
            disabled: Boolean,
            loadingText: String,
            customStyle: String,
            textStyle: String,
            loadingType: { type: String, default: "circular" },
            type: { type: String, default: "default" },
            dataset: String,
            size: { type: String, default: "normal" },
            loadingSize: { type: String, default: "20px" },
            color: { type: String },
            phoneNumberNoQuotaToast: { type: Boolean, default: !0 },
          },
          data() {
            return {
              loadingColor: this.getLoadingColor(),
              baseStyle: this.getBaseStyle(),
            };
          },
          created() {
            this.mapComputed(["type", "color", "plain"], () => {
              this.loadingColor = this.getLoadingColor();
            }),
              this.mapComputed(["color", "plain", "customStyle"], () => {
                this.baseStyle = this.getBaseStyle();
              });
          },
          methods: {
            mapComputed(t, e) {
              t.forEach((t) => {
                this.$watch(t, e);
              });
            },
            getLoadingColor() {
              return this.plain
                ? this.color || "#c9c9c9"
                : "default" === this.type
                ? "#c9c9c9"
                : "white";
            },
            getBaseStyle() {
              var { color: t, plain: e } = this,
                i = "";
              return (
                t &&
                  ((i += "color: " + (e ? t : "white") + ";"),
                  e || (i += "background: " + t + ";"),
                  -1 !== t.indexOf("gradient")
                    ? (i += "border: 0;")
                    : (i += "border-color: " + t + ";")),
                i + " " + this.customStyle
              );
            },
            onClick(t) {
              this.loading ||
                this.disabled ||
                this.$emit("click", t, { bubbles: !0, composed: !0 });
            },
            noop() {},
            bindGetUserInfo(t) {
              this.$emit("getuserinfo", t.detail);
            },
            bindContact(t) {
              this.$emit("contact", t.detail);
            },
            bindGetPhoneNumber(t) {
              this.$emit("getphonenumber", t.detail, {
                bubbles: !0,
                composed: !0,
              });
            },
            bindChooseAvatar(t) {
              this.$emit("chooseavatar", t.detail);
            },
            bindError(t) {
              this.$emit("error", t.detail);
            },
            bindLaunchApp(t) {
              this.$emit("launchapp", t.detail);
            },
            bindOpenSetting(t) {
              this.$emit("opensetting", t.detail);
            },
            bindAgreePrivacyAuthorization(t) {
              this.$emit("agreeprivacyauthorization", t.detail);
            },
          },
        },
        n = i("9ZMt");
      e.default = n.default.component(a);
    },
  })
);
