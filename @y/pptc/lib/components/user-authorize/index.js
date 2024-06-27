"use strict";
var r = require("~/r");
r(
  "qZUS",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    ODsq: function (t, e, i) {
      i.d(e, "b", function () {
        return o;
      }),
        i.d(e, "a", function () {
          return n;
        });
      var s,
        u = i("HnuB"),
        h =
          (((s = {})[u.AuthPopType.MOBILE] = [u.AuthType.MOBILE]),
          (s[u.AuthPopType.NICKNAME_AND_AVATAR] = [
            u.AuthType.NICKNAME_AND_AVATAR,
          ]),
          (s[u.AuthPopType.FILL_NICKNAME_AND_AVATAR] = [
            u.AuthType.NICKNAME_AND_AVATAR,
          ]),
          (s[u.AuthPopType.PROTOCOL] = [u.AuthType.PROTOCOL]),
          (s[u.AuthPopType.FILL_YZ_AUTH] = [u.AuthType.MOBILE]),
          (s[u.AuthPopType.YZ_AUTH] = [
            u.AuthType.MOBILE,
            u.AuthType.NICKNAME_AND_AVATAR,
          ]),
          (s[u.AuthPopType.EXTERNAL] = [
            u.AuthType.MOBILE,
            u.AuthType.PROTOCOL,
          ]),
          s);
      function o(t, e) {
        return (h[t] || []).filter(function (t) {
          return e.includes(t);
        });
      }
      function n(t, e) {
        var i = t.authTypeList,
          s = t.authPopupTypeList;
        if (!(null == e ? void 0 : e.length)) return t;
        var u = i.filter(function (t) {
            return !e.includes(t);
          }),
          h = s.filter(function (t) {
            return o(t, u).length > 0;
          });
        return { authTypeList: u, authPopupTypeList: h };
      }
    },
    qZUS: function (t, e, i) {
      i.r(e);
      var s,
        u = i("+I+c"),
        h = i("Fcif"),
        o = i("chrl"),
        n = i("dvf8"),
        a = i("ODsq"),
        r = i("pn6R"),
        p = i.n(r),
        l = i("5Xe+"),
        c = i.n(l),
        A = i("KrsW"),
        T = i("AGZf"),
        d = i("BILe"),
        y = i("Rm8A"),
        P = i("4cW6"),
        f = i("QxN7"),
        v = i("Pv1N"),
        b = i("HC+1"),
        g = i("0WZd"),
        O = ["zIndex", "duration"],
        I = ["kdtId", "scene", "authTypeList"],
        _ = {
          mixins: [A.b.externalClassesMixin(["button-class"])],
          props: Object(b.b)({}),
          data: () => ({
            InitStatus: d.a,
            config: {},
            userInfo: {},
            authState: {},
            aNickList: [],
            authList: [],
            userAuthList: [],
            popupVisible: !1,
            authPopType: "",
            buttonType: "",
            dialogType: "",
            nativeAuthPopType: "",
            status: d.a.NONE,
            supportFillNick: !0,
            downgrade: !1,
            noMobileFallback: !1,
            authorizing: !1,
          }),
          watch: {
            status() {
              this.$emit("status-change", this.status);
            },
          },
          created() {
            (this.$_offHandlers = []),
              this.initEvent(),
              this.watchStates(),
              this.kdtId &&
                this.rerender()
                  .then(this.autoTrigger)
                  .catch(() => {});
          },
          destroyed() {
            this.$_event && this.$_event.offEvent(),
              this.$_offHandlers.forEach((t) => t());
          },
          methods: Object(b.a)({
            watchStates() {
              var t = (t, e) => {
                Object(g.b)(t, e) ||
                  this.rerender()
                    .then(this.autoTrigger)
                    .catch(() => {});
              };
              I.forEach((e) => {
                var i = this.$watch(e, t);
                this.$_offHandlers.push(() => i());
              });
            },
            autoTrigger() {
              "auto" === this.trigger &&
                (s && clearTimeout(s),
                (s = setTimeout(() => {
                  this.$_init || ((this.$_init = !0), this.showPopup());
                }, 200)));
            },
            initEvent() {
              var {
                  POPUP_VISIBLE: t,
                  SHOW_TOAST: e,
                  OPEN_WEBVIEW: s,
                  POPUP_AUTH_SUCCESS: u,
                  POPUP_AUTH_FAIL: h,
                  AUTH_POPUP_SHOW: o,
                  AUTH_STATUS_CHANGE: n,
                } = P.a,
                a = this.type === v.UserAuthorizeType.SEPARATE,
                r = new y.a(this.$getPageRoute(), a);
              r.setCallback({
                [t]: this.togglePopup.bind(this),
                [e]: this.showToast.bind(this),
                [s]: this.handleOpenWebview.bind(this),
                [u]: this.handleAuthorize.bind(this),
                [h]: this.fail.bind(this),
                [o]: this.handleAuthPopupShow.bind(this),
                [n]: this.handleAuthStatusChange.bind(this),
              }),
                r.onAuthSync((t) => {
                  var { force: e } = t || {};
                  this.rerender({ ignoreCache: e });
                }),
                r.onAuthSuccess((t) => {
                  var { userDeny: e } = t || {};
                  e || this.rerender();
                }),
                r.onLoginEndEvent(() => {
                  this.rerender({ ignoreCache: !0 }),
                    i
                      .e("packages/async-main/chunk")
                      .then(i.t.bind(null, "HsSF", 7))
                      .then((t) => {
                        t.clearProtocolCache();
                      });
                }),
                r.onUserInfoChanged(() => this.rerender({ ignoreCache: !0 })),
                (this.$_event = r);
            },
            callPopup(t) {
              var e = Object(h.a)(
                {},
                c()(this, [
                  "authPopType",
                  "dialogType",
                  "userAuthList",
                  "config",
                  "kdtId",
                  "userInfo",
                  "zIndex",
                  "privacyProtocol",
                  "userProtocol",
                  "popupCustomStyle",
                  "nativeAuthPopType",
                  "aNickList",
                  "supportFillNick",
                  "bizDataMap",
                  "protocolSource",
                  "protocolIsCloudSlot",
                ]),
                { visible: t }
              );
              this.$_event.callPopup(
                e,
                (function (t) {
                  if ("weapp" === f.teeEnv) {
                    var e = getCurrentPages();
                    return e[e.length - 1];
                  }
                  return t;
                })(this.$root)
              );
            },
            togglePopup(t) {
              (this.popupVisible = t), this.callPopup(t);
            },
            handleNativeAbilityChange(t) {
              this.rerender({ nativeAbility: t });
            },
            showPopup() {
              var { authPopType: t, nativeAuthPopType: e } = this;
              (-1 !== d.c.indexOf(t) || o.b) &&
                !(t === e) &&
                this.togglePopup(!0);
            },
            showToast(t) {
              var e,
                { zIndex: i = 20009, duration: s = 1500 } = t,
                o = Object(u.a)(t, O);
              return (
                (e = this.$refs.toast),
                Object(T.a)(Object(h.a)({ zIndex: i, duration: s, ref: e }, o))
              );
            },
            handleOpenWebview(t) {
              this.$emit("open-webview", t);
            },
            handleAuthPopupShow(t) {
              Object(n.executeHookAsync)(n.authorizeHook.popupShowAfter.get),
                this.exposeAuthPopupEvent(
                  t.authPopType,
                  t.popupType,
                  "auth-popup-show"
                );
            },
            exposeAuthPopupEvent(t, e, i) {
              var s = Object(a.b)(t, this.userAuthList);
              this.$emit(i, { authType: s, popupType: e });
            },
            success() {
              var t = p()({
                userInfo: this.userInfo,
                authState: this.authState,
              });
              this.$emit("next", t);
            },
            fail(t) {
              var {
                  reasons: e,
                  authPopType: i,
                  userAuthList: s,
                  popupType: u,
                  forceFail: h,
                  data: o,
                  userDeny: n = !0,
                  cb: a,
                  onError: r,
                } = t,
                p = Object(g.a)({
                  allowDenyCustom: this.allowDeny,
                  scene: this.scene,
                  authTypeList: s,
                  authAllowDenyMap: this.$_authAllowDenyMap,
                }),
                l = !!this.userInfo.userId || !!this.userInfo.hasLogin,
                { mobile: c, verifyType: A, needMobileAuth: T } = o || {},
                d = () => {
                  this.logAuthOne({
                    authPopType: i,
                    agree: !1,
                    authTypeList: s,
                    allowDeny: p,
                    mobile: c,
                    verifyType: A,
                    needMobileAuth: T,
                  });
                };
              if (n && p && !h)
                return l
                  ? this.handleAuthorize({
                      type: i,
                      userAuthList: s,
                      popupType: u,
                      userDeny: n,
                      allowDeny: p,
                      data: o,
                      cb: a,
                      onError: r,
                    })
                  : (d(), this.success(), void (null == a || a()));
              d(),
                this.exposeAuthPopupEvent(i, u, "auth-popup-refuse"),
                this.execAuthOneAfterHooks({ agree: !1, authTypes: s }),
                this.$emit("fail", { reasons: e }),
                null == a || a();
            },
          }),
          ud: !0,
        },
        E = i("9ZMt");
      e.default = E.default.component(_);
    },
  })
);
