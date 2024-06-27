"use strict";
var r = require("~/r");
r(
  "lGek",
  Object.assign(
    {},
    require("~/packages/async-tee/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      lGek: function (t, e, s) {
        s.r(e);
        var a = s("QxN7"),
          i = s("AGZf"),
          p = s("KrsW"),
          A = s("y/IX"),
          h = s("BILe"),
          o = s("StxY"),
          c = s("GEF7"),
          d = {
            mixins: [p.b.externalClassesMixin(["custom-class"])],
            props: {
              desc: { type: String, default: "有赞基础头像昵称授权能力" },
              customStyle: String,
              appId: String,
              kdtId: Number,
            },
            data: () => ({ loading: !1 }),
            computed: { canUseAPI: () => a.platform.canIUse("getUserProfile") },
            created() {
              a.platform
                .checkSession()
                .catch(() => Object(c.a)().then((t) => t.forceLogin()));
            },
            methods: {
              handleGetUserInfo(t) {
                this.loading ||
                  ((this.loading = !0),
                  Object(A.a)(t, {
                    appId: this.appId || Object(a.getAppId)(),
                    kdtId: this.kdtId,
                  })
                    .then((t) => {
                      this.$emit("success", {
                        data: t,
                        type: a.AuthPopType.NICKNAME_AND_AVATAR,
                        userAuthList: [a.AuthType.NICKNAME_AND_AVATAR],
                        popupType: h.b.NATIVE,
                        cb: () => {
                          (this.loading = !1), i.a.clear();
                        },
                      });
                    })
                    .catch((t) => this.fail(t)));
              },
              handleGetUserInfoFromAPI() {
                this.loading ||
                  ((this.loading = !0),
                  this.handleClick(),
                  a.platform
                    .getUserInfo({ desc: this.desc })
                    .then((t) => {
                      var e = t;
                      Object(A.a)(e, {
                        appId: this.appId || Object(a.getAppId)(),
                        kdtId: this.kdtId,
                      })
                        .then((t) => {
                          this.$emit("success", {
                            data: t,
                            type: a.AuthPopType.NICKNAME_AND_AVATAR,
                            userAuthList: [a.AuthType.NICKNAME_AND_AVATAR],
                            popupType: h.b.NATIVE,
                            cb: () => {
                              (this.loading = !1), i.a.clear();
                            },
                          });
                        })
                        .catch((t) => this.fail(t));
                    })
                    .catch((t) => this.fail(t)));
              },
              handleClick() {
                this.$emit("auth-click", {
                  authPopType: a.AuthPopType.NICKNAME_AND_AVATAR,
                  popupType: h.b.NATIVE,
                  canUseInfoAPI: this.canUseAPI,
                }),
                  this.$emit("auth-popup-show", {
                    authPopType: a.AuthPopType.NICKNAME_AND_AVATAR,
                    popupType: h.b.NATIVE,
                  });
              },
              fail(t) {
                if (
                  ((this.loading = !1),
                  this.$emit("fail", {
                    reasons: [a.AuthPopType.NICKNAME_AND_AVATAR],
                    authPopType: a.AuthPopType.NICKNAME_AND_AVATAR,
                    userAuthList: [a.AuthType.NICKNAME_AND_AVATAR],
                    popupType: h.b.NATIVE,
                  }),
                  t && t.code === o.a)
                )
                  return Object(c.a)().then((t) =>
                    t.forceLogin().then(() => {
                      this.$emit("toast", {
                        message: "解密失败，请稍后重试",
                        type: "fail",
                        duration: 2e3,
                      });
                    })
                  );
                this.$emit("toast", {
                  type: "fail",
                  message: t && t.msg ? t.msg : "获取头像昵称失败",
                });
              },
            },
            ud: !0,
          },
          u = s("9ZMt");
        e.default = u.default.component(d);
      },
    }
  )
);
