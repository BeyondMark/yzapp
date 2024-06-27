"use strict";
var r = require("~/r");
r(
  "hJNC",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    hJNC: function (t, e, i) {
      i.r(e);
      var s = i("QxN7"),
        u = i("mztD"),
        h = i("/duV"),
        o = i("BILe"),
        r = {
          props: {
            theme: String,
            visible: Boolean,
            kdtId: Number,
            config: Object,
            userInfo: { type: Object, default: () => ({}) },
            authTypeList: { type: Array, default: () => [] },
            zIndex: Number,
            popupCustomStyle: String,
            supportFillNick: Boolean,
            paddingBottom: Number,
          },
          data: () => ({ shopName: "", shopLogo: "", submitting: !1 }),
          computed: {
            curAuthTypeList() {
              return this.supportFillNick
                ? this.authTypeList.filter(
                    (t) => t !== s.AuthType.NICKNAME_AND_AVATAR
                  )
                : this.authTypeList;
            },
            curAuthPopType() {
              return this.supportFillNick
                ? s.AuthPopType.FILL_YZ_AUTH
                : s.AuthPopType.YZ_AUTH;
            },
            needMobileAuth() {
              return this.curAuthTypeList.includes("mobile");
            },
            needNickAvatarAuth() {
              return this.curAuthTypeList.includes("nicknameAndAvatar");
            },
            userAuthList() {
              var t = [];
              return (
                this.needMobileAuth && t.push(s.AuthType.MOBILE),
                this.needNickAvatarAuth &&
                  t.push(s.AuthType.NICKNAME_AND_AVATAR),
                t
              );
            },
            title() {
              var { needMobileAuth: t, needNickAvatarAuth: e } = this;
              return !e && t
                ? "使用你在有赞绑定的手机号码"
                : "获取你的" +
                    (e ? "昵称、头像" : "") +
                    (t && e ? "及" : "") +
                    (t ? "手机号码" : "");
            },
            mobile() {
              var { mobile: t = "" } = this.userInfo;
              return t.replace(
                /(\d{3})\d{4}(\d{4})/,
                (t, e, i) => e + "****" + i
              );
            },
            iconUrl() {
              return Object(u.a)(this.config.checkIconUrl);
            },
          },
          created() {
            this.fetchShopInfo();
          },
          methods: {
            fetchShopInfo() {
              return Object(h.m)(this.kdtId).then((t) => {
                var { shop: e } = t;
                (this.shopName = e.shopName), (this.shopLogo = e.logo);
              });
            },
            handleClose() {
              this.$emit("close"), this.setSubmitting(!1);
            },
            setSubmitting(t) {
              this.submitting = t;
            },
            handleRefuse() {
              this.submitting ||
                (this.handleClose(),
                this.$emit("fail", {
                  data: {
                    needMobileAuth: this.needMobileAuth,
                    mobile: this.userInfo.mobile,
                    verifyType: s.MobileVerifyType.Yz,
                  },
                  reasons: [this.curAuthPopType],
                  authPopType: this.curAuthPopType,
                  userAuthList: this.userAuthList,
                  popupType: o.b.YOUZAN,
                }));
            },
            handleAllow() {
              this.submitting ||
                (this.setSubmitting(!0),
                this.$emit("success", {
                  data: {
                    needMobileAuth: this.needMobileAuth,
                    mobile: this.userInfo.mobile,
                    verifyType: s.MobileVerifyType.Yz,
                  },
                  cb: () => this.handleClose(),
                  onError: () => this.setSubmitting(!1),
                  type: this.curAuthPopType,
                  userAuthList: this.userAuthList,
                  popupType: o.b.YOUZAN,
                }));
            },
            handleUnuse() {
              this.$emit(
                "on-open-webview",
                "https://uic.youzan.com/passport/bind/dispatch"
              );
            },
            handlePoupEnterDone() {
              this.$emit("auth-popup-show", {
                authPopType: this.curAuthPopType,
                popupType: o.b.YOUZAN,
              });
            },
          },
          ud: !0,
        },
        p = i("9ZMt");
      e.default = p.default.component(r);
    },
  })
);
