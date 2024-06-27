"use strict";
var r = require("~/r");
r(
  "k2+G",
  Object.assign(
    {},
    require("~/packages/async-tee/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "k2+G": function (t, e, a) {
        a.r(e);
        var i = a("9ZMt"),
          s = a("chrl"),
          h = a("QxN7"),
          n = a("AGZf"),
          r = a("y/IX"),
          o = a("6NLS"),
          d = a("/duV"),
          p = a("BILe"),
          l = a("StxY"),
          u = a("GEF7"),
          c = h.platform.getSystemInfoSync().system.indexOf("Android") > -1,
          m = {
            props: {
              visible: Boolean,
              desc: { type: String, default: "有赞基础头像昵称授权能力" },
              theme: String,
              appId: String,
              kdtId: Number,
              aNickList: { type: Array, default: () => [] },
              userInfo: { type: Object, default: () => ({}) },
              zIndex: { type: Number, default: 10001 },
              popupCustomStyle: String,
              paddingBottom: Number,
            },
            data: () => ({
              shopName: "",
              shopLogo: "",
              title: "获取你的昵称、头像",
              defaultAvatarUrl:
                "https://img01.yzcdn.cn/upload_files/2020/08/04/Fj1Bufd7kfFGdybb8P4Irqnc1RUv.png",
              avatarUrl: "",
              nickName: "",
              notAvatar: !1,
              notNickname: !1,
              textStyle:
                "width:100%; display: flex; justify-content: space-between; align-items: center;",
              random: -1,
              keyboardHeight: 0,
              submitting: !1,
            }),
            computed: {
              toastZIndex() {
                return Number(this.zIndex) + 1;
              },
            },
            watch: {
              visible(t) {
                t && this.update();
              },
            },
            created() {
              this.fetchShopInfo(),
                this.update(),
                s.b ||
                  "tt" === i.default.getEnv() ||
                  h.platform
                    .checkSession()
                    .catch(() => Object(u.a)().then((t) => t.forceLogin()));
            },
            methods: {
              update() {
                this.initUserInfo(), this.initPopupHeight();
              },
              fetchShopInfo() {
                return Object(d.m)(this.kdtId).then((t) => {
                  var { shop: e } = t;
                  (this.shopName = e.shopName), (this.shopLogo = e.logo);
                });
              },
              initUserInfo() {
                var { avatar: t, nickname: e } = this.userInfo;
                (this.avatarUrl = t || ""), (this.nickName = e || "");
              },
              initPopupHeight() {
                this.paddingBottom &&
                  (this.keyboardHeight = this.paddingBottom + "px");
              },
              handleClose() {
                n.a.clear(),
                  this.notAvatar && (this.notAvatar = !1),
                  this.notNickname && (this.notNickname = !1),
                  this.$emit("close");
              },
              handleAvaNick() {
                var { aNickList: t } = this,
                  e = t.length;
                if (0 !== e) {
                  var a = Math.floor(Math.random() * e);
                  this.random === a && (a = a > 0 ? a - 1 : a);
                  var { avatar: i, nickName: s } = t[a];
                  (this.random = a), (this.avatarUrl = i), (this.nickName = s);
                }
              },
              handleNicknameChange(t) {
                var e = t.value.replace(/\s/g, "");
                this.nickName = e;
              },
              handleFocus(t) {
                var { height: e } = t,
                  a = c ? 168 : 68;
                (this.keyboardHeight = e + a + "rpx"),
                  this.notNickname && (this.notNickname = !1);
              },
              handleNicknameBlur(t) {
                var e = this.paddingBottom;
                this.handleNicknameChange(t),
                  (this.keyboardHeight = (e && e + "px") || 0);
              },
              handleChooseAvatar(t) {
                var { avatarUrl: e } = t;
                this.notAvatar && (this.notAvatar = !1), (this.avatarUrl = e);
              },
              handleRefuse() {
                !this.submitting && this.fail();
              },
              handleAllow() {
                if (this.avatarUrl && this.nickName) {
                  var t = {
                    avatarUrl: this.avatarUrl,
                    nickName: this.nickName,
                  };
                  if (
                    [/^http:\/\/tmp/, /^wxfile:\/\/tmp/].some((t) =>
                      t.test(this.avatarUrl)
                    )
                  ) {
                    (this.submitting = !0),
                      n.a.clear(),
                      n.a.loading({
                        overlay: !0,
                        forbidClick: !0,
                        loadingType: "spinner",
                        duration: 0,
                        zIndex: this.toastZIndex,
                      });
                    var e = { kdtId: this.kdtId };
                    Object(o.a)(this.avatarUrl, e)
                      .then((e) => {
                        (t.avatarUrl = e.attachment_url), this.saveUserInfo(t);
                      })
                      .catch((t) => {
                        (this.submitting = !1),
                          n.a.clear(),
                          n.a.fail({
                            message: t && t.msg ? t.msg : "上传头像昵称失败",
                            zIndex: this.toastZIndex,
                          });
                      });
                  } else this.saveUserInfo(t);
                } else
                  (this.notAvatar = !this.avatarUrl),
                    (this.notNickname = !this.nickName);
              },
              saveUserInfo(t) {
                (this.submitting = !0),
                  Object(r.a)(
                    { userInfo: t },
                    {
                      appId: this.appId || Object(h.getAppId)(),
                      kdtId: this.kdtId,
                    }
                  )
                    .then((t) => {
                      this.$emit("success", {
                        data: t,
                        type: h.AuthPopType.FILL_NICKNAME_AND_AVATAR,
                        userAuthList: [h.AuthType.NICKNAME_AND_AVATAR],
                        popupType: p.b.NATIVE,
                        cb: () => {
                          (this.submitting = !1),
                            this.handleClose(),
                            n.a.clear();
                        },
                        onError: () => {
                          this.submitting = !1;
                        },
                      });
                    })
                    .catch((t) => this.fail(t));
              },
              fail(t) {
                if (
                  ((this.submitting = !1),
                  this.handleClose(),
                  this.$emit("fail", {
                    reasons: [h.AuthPopType.FILL_NICKNAME_AND_AVATAR],
                    authPopType: h.AuthPopType.FILL_NICKNAME_AND_AVATAR,
                    userAuthList: [h.AuthType.NICKNAME_AND_AVATAR],
                    popupType: p.b.NATIVE,
                  }),
                  t && t.code === l.a)
                )
                  return Object(u.a)().then((t) =>
                    t.forceLogin().then(() => {
                      n.a.fail({
                        message: "解密失败，请稍后重试",
                        duration: 2e3,
                        zIndex: this.toastZIndex,
                      });
                    })
                  );
                t &&
                  n.a.fail({
                    message: t && t.msg ? t.msg : "获取头像昵称失败",
                    zIndex: this.toastZIndex,
                  });
              },
              handleShowUserInfoPopup() {
                this.$emit("auth-popup-show", {
                  authPopType: h.AuthPopType.FILL_NICKNAME_AND_AVATAR,
                  popupType: p.b.NATIVE,
                });
              },
            },
            ud: !0,
          };
        e.default = i.default.component(m);
      },
    }
  )
);
