"use strict";
var r = require("~/r");
r(
  "YMa0",
  Object.assign({}, require("~/v.js").modules, {
    YMa0: function (t, e, i) {
      i.r(e);
      var a = i("Fcif"),
        s = i("QxN7"),
        l = {
          mixins: [i("KrsW").b.externalClassesMixin(["custom-class"])],
          props: {
            visible: Boolean,
            disabled: { type: Boolean, default: !0 },
            buttonType: String,
            customStyle: String,
            config: Object,
            appId: String,
            kdtId: Number,
            userInfo: { type: Object, default: () => ({}) },
            aNickList: Array,
            desc: { type: String, default: void 0 },
            downgrade: Boolean,
            noMobileFallback: Boolean,
            bizDataMap: Object,
          },
          data: () => ({
            AuthButtonType: s.AuthButtonType,
            btnStyle:
              "background:none;display:block;width:100%;height:100%;border:none;padding:0;",
          }),
          methods: {
            handleYZClick() {
              this.handleClick({ isYZ: !0 }), this.handlePopupShow();
            },
            handleEmptyClick() {
              this.disabled
                ? this.handleDisabledClick()
                : this.buttonType
                ? this.buttonType === s.AuthButtonType.YZButton &&
                  this.handleYZClick()
                : (this.handleClick({ isEmpty: !0 }),
                  this.$emit("success", {}));
            },
            handleDisabledClick() {
              this.disabled
                ? this.$emit("auth-disabled-click", this.getData())
                : this.handleEmptyClick();
            },
            handleClick(t) {
              var e = Object(a.a)({}, t, this.getData());
              this.$emit("auth-click", e);
            },
            getData() {
              return {
                buttonType: this.buttonType,
                visible: this.visible,
                disabled: this.disabled,
                downgrade: this.downgrade,
                kdtId: this.kdtId || 0,
              };
            },
            showToast(t) {
              this.$emit("toast", t);
            },
            openWebview(t) {
              this.$emit("on-open-webview", t);
            },
            handlePopupShow() {
              this.$emit("popup-show");
            },
            handleAuthPopupShow(t) {
              this.$emit("auth-popup-show", t);
            },
            handleSuccess(t) {
              this.$emit("success", t);
            },
            handleFail(t) {
              this.$emit("fail", t);
            },
            handleNativeAbliltyChange(t) {
              this.$emit("native-ability-change", t);
            },
          },
          ud: !0,
        },
        h = i("9ZMt");
      e.default = h.default.component(l);
    },
  })
);
