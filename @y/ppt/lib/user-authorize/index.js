"use strict";
var r = require("~/r");
r(
  "8fIu",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "8fIu": function (e, t, a) {
      a.r(t);
      var o = a("Fcif"),
        n = a("9ZMt"),
        r = a("KrsW"),
        i = a("Pv1N"),
        u = a("QxN7"),
        s = {
          mixins: [r.b.externalClassesMixin(["button-class"])],
          props: {
            customStyle: String,
            scene: String,
            authTypeList: { type: Array, value: [] },
            disabled: { type: Boolean, value: !1 },
            kdtId: { type: [String, Number], required: !0 },
            type: { type: String, default: i.UserAuthorizeType.NORMAL },
            zIndex: { type: Number, default: 1e4 },
            desc: { type: String, default: void 0 },
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
            needUpdateNicknameAndAvatar: Boolean,
            needGetUnionId: Boolean,
            protocolSource: String,
            protocolIsCloudSlot: { type: Boolean, default: !1 },
            bizDataMap: Object,
            trigger: String,
            hooks: Object,
          },
          data: () => ({
            appId: Object(u.getAppId)(),
            isSinglePage: u.platform.checkInSinglePage(),
          }),
          computed: {
            intKdtId() {
              return +this.kdtId || 0;
            },
          },
          created() {
            this.getAPI();
          },
          methods: {
            getAPI() {
              return (
                this.$_pta ||
                  (this.$_pta = a
                    .e("packages/async-tee/chunk")
                    .then(a.bind(null, "JvWB"))
                    .then((e) => e.default)
                    .catch((e) => {
                      throw ((this.$_pta = null), e);
                    })),
                this.$_pta
              );
            },
            handleOpenWebview(e) {
              n.default.navigate({ url: e });
            },
            handleStatusChange(e) {
              this.$emit("status-change", e);
            },
            handleNext(e) {
              var { userInfo: t, authState: a } = e || {},
                {
                  userId: n,
                  buyerId: r,
                  gender: i,
                  hasPlatform: u,
                  hasUnionId: s,
                  userOpenId: l,
                  openId: d,
                } = t || {},
                p = {
                  userId: n,
                  buyerId: r,
                  gender: i,
                  hasPlatform: u,
                  hasUnionId: s,
                  userOpenId: l,
                  openId: d,
                  state: Object(o.a)({}, a),
                };
              a.mobile && a.protocol && (p.mobile = t.mobile),
                a.nicknameAndAvatar &&
                  a.protocol &&
                  ((p.nickname = t.nickname), (p.avatar = t.avatar)),
                this.$emit("next", p);
            },
            handleFail(e) {
              this.$emit("fail", e.reasons);
            },
            handleLogin(e) {
              var t = () =>
                u.hooks
                  .executeHookAsync(
                    u.hooks.authorizeHook.mobileChange.get,
                    [
                      {
                        path: this.$getPageRoute(),
                        query: this.$getPageQuery(),
                      },
                    ],
                    Promise.resolve()
                  )
                  .then(e)
                  .catch((t) => {
                    t && 302 === t.code ? n.default.navigate(t.data) : e();
                  });
              if (!u.isWeb)
                return this.getAPI().then((e) =>
                  e.login().then((a) => {
                    if (a.accessToken) return e.forceLogin().then(t);
                    t();
                  })
                );
              t();
            },
            handleAuthPopupShow(e) {
              this.$emit("auth-popup-show", e);
            },
            handleAuthPopupAllow(e) {
              this.$emit("auth-popup-allow", e);
            },
            handleAuthPopupRefuse(e) {
              this.$emit("auth-popup-refuse", e);
            },
          },
          ud: !0,
        };
      t.default = n.default.component(s);
    },
  })
);
