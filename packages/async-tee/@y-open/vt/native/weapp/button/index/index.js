"use strict";
var r = require("~/r");
r(
  "JZ5+",
  Object.assign({}, require("~/v.js").modules, {
    "JZ5+": function (t, e, i) {
      i.r(e);
      var n = i("9ZMt"),
        o = i("Zqpg");
      n.default.component({
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
        data: function () {
          return {
            loadingColor: this.getLoadingColor(),
            baseStyle: this.getBaseStyle(),
          };
        },
        created: function () {
          var t = this;
          this.mapComputed(["type", "color", "plain"], function () {
            t.loadingColor = t.getLoadingColor();
          }),
            this.mapComputed(["color", "plain", "customStyle"], function () {
              t.baseStyle = t.getBaseStyle();
            });
        },
        methods: {
          mapComputed: function (t, e) {
            var i = this;
            t.forEach(function (t) {
              i.$watch(t, e);
            });
          },
          getLoadingColor: function () {
            return this.plain
              ? this.color || "#c9c9c9"
              : "default" === this.type
              ? "#c9c9c9"
              : "white";
          },
          getBaseStyle: function () {
            var t = this.color,
              e = this.plain,
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
          onClick: function (t) {
            this.loading ||
              this.disabled ||
              this.$emit("click", t, { bubbles: !0, composed: !0 });
          },
          noop: function () {},
          bindGetUserInfo: function (t) {
            this.$emit("getuserinfo", t.detail);
          },
          bindContact: function (t) {
            this.$emit("contact", t.detail);
          },
          bindGetPhoneNumber: function (t) {
            this.$emit("getphonenumber", t.detail, {
              bubbles: !0,
              composed: !0,
            });
          },
          bindChooseAvatar: function (t) {
            this.$emit("chooseavatar", t.detail);
          },
          bindError: function (t) {
            this.$emit("error", t.detail);
          },
          bindLaunchApp: function (t) {
            this.$emit("launchapp", t.detail);
          },
          bindOpenSetting: function (t) {
            this.$emit("opensetting", t.detail);
          },
          bindAgreePrivacyAuthorization: function (t) {
            this.$emit("agreeprivacyauthorization", t.detail);
          },
        },
      });
    },
  })
);
