"use strict";
var r = require("~/r");
r(
  "BCUi",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      BCUi: function (e, t, a) {
        a.r(t);
        var r = a("eijD"),
          o = a("7/pW"),
          i = a("CgAV"),
          l = a("RY8z"),
          n = a("v8b6"),
          s = a("dWkE"),
          u = a("2wjL"),
          h = a("KEq0"),
          p = a.n(h),
          d = a("R18q"),
          c = a("QLod"),
          g = a("9mFz"),
          m = a("kjqZ"),
          v =
            "https://img01.yzcdn.cn/upload_files/2023/10/10/FkMUnwxPCnuuf8kLQGYaq1N7sTbA.png",
          b = [
            "",
            "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), ",
          ],
          y = getApp();
        Object(o.a)({
          properties: {
            avatar: {
              type: String,
              value:
                "https://img01.yzcdn.cn/upload_files/2023/09/04/FltKOZRsA5JMymppPdhtGVdqqvi-.png",
              observer() {
                this._initStyle();
              },
            },
            userName: {
              type: String,
              value: "",
              observer() {
                this._initStyle();
              },
            },
            userNameColor: {
              type: String,
              value: "#333",
              observer() {
                this._initStyle();
              },
            },
            grade: {
              type: String,
              value: "",
              observer() {
                this._initStyle();
              },
            },
            isSupportSign: { type: Boolean, value: !0 },
            showLevel: { type: Boolean, value: !0 },
            showSign: { type: Boolean, value: !1 },
            isMember: { type: Boolean, value: !0 },
            memberType: {
              type: Number,
              value: 1,
              observer() {
                this._initStyle();
              },
            },
            backgroundImage: {
              type: String,
              value: v,
              observer() {
                this._initStyle();
              },
            },
            showBindUser: { type: Boolean, value: !1 },
            align: {
              type: Number,
              value: 1,
              observer() {
                this._initStyle();
              },
            },
            gradient: {
              type: Number,
              value: 1,
              observer() {
                this._initStyle();
              },
            },
            links: { type: Object, value: {} },
            bindTips: String,
            isNotValid: Boolean,
            isLevelEnable: { type: Boolean, value: !0 },
            growthValue: { type: Number, value: 0 },
            showGrowth: { type: Boolean, value: !1 },
            isSupportGrowthValue: { type: Boolean, value: !1 },
            levelValue: { type: Number, value: 0 },
            benefitText: { type: String, value: "" },
            levelIconType: { type: Number, value: 0 },
            userAgreePrivacy: { type: Boolean, default: !1 },
            isImmersive: { type: Boolean, default: !1 },
            showInfoCompleted: { type: Boolean, default: !1 },
          },
          data: {
            layoutClx: ["avatar-at-left", "avatar-at-top", "avatar-at-right"],
            layoutStyle: "",
            outerStyle: "",
            type2LevelColor: "",
            levelClx: "",
            userNameStyle: "",
            userAvatarStyle: "",
            signAndCodeStyle: "",
            shopName: "",
            tapData: {},
            levelBtnText: "",
            showMemberCode: !0,
            hasAuthorized: !1,
            subscribeMarkShow: !1,
            needAuthMobileBeforeMemberCode: !1,
            imageUrl: "",
            deafultAvatar: "",
          },
          attached() {
            Object(g.e)(this, {
              showMemberCode: this.showMemberCode.bind(this),
            }),
              Object(g.b)(this, {
                shopConfigs: (e) => {
                  this.setYZData({
                    deafultAvatar:
                      (null == e ? void 0 : e.usercenter_center_logo_url) ||
                      "https://img01.yzcdn.cn/upload_files/2023/09/04/FltKOZRsA5JMymppPdhtGVdqqvi-.png",
                  });
                },
              });
          },
          ready() {
            this._initStyle(),
              this.initAuthStatusAndNeedAuthMobileBeforeMemberCode();
          },
          methods: {
            handlePerReport() {
              var e;
              null == (e = d.a.mark) ||
                null == e.log ||
                e.log({ tag: "usercenter", scene: ["route"] }),
                m.a.end({ type: "finish", name: "个人中心渲染" });
            },
            onAccountSuccess() {
              this.triggerEvent("onAccountSuccess");
            },
            noop() {},
            handleRegistryMemStart() {
              var e;
              null == (e = y.logger) ||
                e.log({
                  et: "click",
                  ei: "registry_mem_start",
                  en: "尝试注册会员",
                  params: { where: "个人中心" },
                });
            },
            handleRegistryMem() {
              var e = this;
              this.properties.isMember
                ? this.jumpTo("level")
                : y
                    .request({
                      path: "/wscuser/level/api/checkMemRegistrationState.json",
                    })
                    .then(function (t) {
                      var a,
                        { needFillInfo: r = !1 } = void 0 === t ? {} : t;
                      r
                        ? Object(s.a)(
                            u.a.add("/wscuser/levelcenter/simplified-fill", {
                              kdt_id: getApp().getKdtId(),
                              levelType: 1,
                              fromScene: "complete",
                              jumpTo: "Home",
                            }),
                            { title: "完善信息" }
                          )
                        : (e.jumpTo("level"),
                          null == (a = y.logger) ||
                            a.log({
                              et: "click",
                              ei: "registry_mem_succuss",
                              en: "注册会员成功",
                              params: { where: "个人中心" },
                            }));
                    });
            },
            handleRejectRegistryMem() {
              var e;
              null == (e = y.logger) ||
                e.log({
                  et: "click",
                  ei: "reject_registry_phone",
                  en: "拒绝授权手机号",
                  params: { where: "个人中心" },
                });
            },
            handleProtocolAuthorize(e) {
              var t = this;
              return Object(r.a)(function* () {
                var a, r, o, i, l;
                if (
                  "authorize" ===
                  (null == (a = e.currentTarget) || null == (r = a.dataset)
                    ? void 0
                    : r.nav)
                )
                  if (
                    (t.data.hasAuthorized &&
                      !Object(n.b)() &&
                      (yield Object(n.c)(n.a.USER_CENTER, {
                        onShowTips: () => {
                          t.setYZData({ subscribeMarkShow: !0 });
                        },
                        onCloseTips: () => {
                          t.setYZData({ subscribeMarkShow: !1 });
                        },
                      }).catch(() => {})),
                    t.data.hasAuthorized)
                  ) {
                    var s =
                      null == (o = t.data.tapData) ||
                      null == (i = o.currentTarget) ||
                      null == (l = i.dataset)
                        ? void 0
                        : l.nav;
                    s &&
                      ("sign" !== s
                        ? "code" !== s
                          ? t.goto(t.data.tapData)
                          : t.handleCode(t.data.tapData)
                        : t.handleSign(t.data.tapData));
                  } else t.setYZData({ hasAuthorized: !0 });
              })();
            },
            handleTap(e) {
              this.setYZData({ tapData: e });
            },
            clearTapData() {
              this.setYZData({ tapData: {} });
            },
            handleTapNeedAuthMobileCode(e) {
              var t, a;
              "code-authorize-mobile" ===
                (null == (t = e.currentTarget) || null == (a = t.dataset)
                  ? void 0
                  : a.nav) && this.handleCode();
            },
            handleMobileAuthFail() {
              wx.showToast({
                title: "请完成手机号授权后再打开会员码",
                icon: "none",
              }),
                this.clearTapData();
            },
            goto(e) {
              if (this.properties.userName) {
                var t = e.currentTarget.dataset.nav;
                this.jumpTo(t);
              } else this.triggerEvent("bindGetUserInfo", e.detail);
            },
            jumpTo(e) {
              ("level" === e && 47999 === y.getKdtId()) ||
                (this.traceLog(e),
                this.properties.links[e]
                  ? l.a.navigate({ url: this.properties.links[e] })
                  : this.triggerEvent("tapUserInfo", e));
            },
            traceLog(e) {
              if (y.logger)
                switch (e) {
                  case "growth":
                    y.logger.log({
                      et: "click",
                      ei: "click_membercenter_grow",
                      en: "个人中心-点击成长值",
                    });
                    break;
                  case "level":
                    y.logger.log({
                      et: "click",
                      ei: "click_membercenter_card",
                      en: "个人中心-点击会员卡入口",
                    });
                }
            },
            handleSign() {
              this.triggerEvent("tapSign");
            },
            handleCode() {
              l.a.navigate({ url: "/packages/member-code/index" });
            },
            isLayout() {
              var { memberType: e = 1, align: t = 1 } = this.properties;
              return 1 === t && (1 === e || 3 === e);
            },
            _initStyle() {
              var {
                  backgroundImage: e = v,
                  gradient: t = 1,
                  memberType: a = 1,
                  align: r = 1,
                  isImmersive: o = !1,
                  showInfoCompleted: i = !1,
                } = this.properties,
                l = getApp().getShopInfoSync(),
                n = l.shopName || l.shop_name,
                s = p()(e, "large"),
                u = Object(c.e)(),
                h =
                  "height: 172px; " +
                  (2 === a ? "overflow: hidden;" : "") +
                  (3 === a ? "margin-bottom: 35px;" : "") +
                  ";",
                d = o
                  ? "background-size: cover;background-position: center;"
                  : "background-size: 100% 100%;",
                g = o ? u : 0,
                m = "";
              if (o && ((m = "top:" + (u + 15) + "px"), i)) {
                (g = Number(g)), (g += 40), (m = "top:" + (u + 40 + 15) + "px");
              }
              var y =
                  "background-image: " +
                  b[t] +
                  "url('" +
                  s +
                  "');padding-top: " +
                  g +
                  "px;" +
                  d,
                f = this.properties.grade ? "#e3c86f" : "#fff",
                S = this.properties.userNameColor || "#333",
                A = "width: 60px; height: 60px;",
                w = "";
              2 === r &&
                ((w += "margin-top: 10px"),
                a && 2 !== a
                  ? a && (A += "margin-top: 25px")
                  : (A += "margin-top: 55px;")),
                this.isLayout() &&
                  ((A += "margin-bottom: 34px;"),
                  (w += "margin-bottom: 34px;")),
                1 === r &&
                  2 === a &&
                  ((w += "margin-bottom: 0px;"), (A += "margin-bottom: 0px;")),
                this.setYZData({
                  layoutStyle: h,
                  outerStyle: y,
                  signAndCodeStyle: m,
                  type2LevelColor: "color: " + f,
                  levelClx: this.properties.grade ? "level" : "become-member",
                  userNameStyle: "color: " + S + ";",
                  userAvatarStyle: A,
                  userInfoStyle: w,
                  shopName: n,
                  imageUrl: s,
                });
            },
            loginBywxAuthorize(e) {
              var t = { event: e, context: this };
              return Object(i.a)(t);
            },
            showMemberCode(e) {
              this.setYZData({ showMemberCode: e });
            },
            initAuthorizeStatus() {
              return y
                .resolveTeeAPI()
                .then((e) => e.getUserPrivacy())
                .then((e) => {
                  var { userName: t, avatar: a } = this.properties,
                    r = "" !== t && "" !== a && !!e.nicknameAndAvatar;
                  return (
                    this.setYZData({ hasAuthorized: r }),
                    { hasAuthorized: r, hasMobileAuthorized: !!e.mobile }
                  );
                });
            },
            getNeedAuthMobileOfCode: () =>
              Object(r.a)(function* () {
                return y
                  .request({
                    path: "/wscuser/common/pre-check.json",
                    method: "get",
                    data: { type: "memberCode" },
                  })
                  .then((e) => (null == e ? void 0 : e.needAuthMobile))
                  .catch((e) => !1);
              })(),
            initAuthStatusAndNeedAuthMobileBeforeMemberCode() {
              var e = this;
              return Object(r.a)(function* () {
                var [t, a] = yield Promise.all([
                  e.getNeedAuthMobileOfCode(),
                  e.initAuthorizeStatus(),
                ]);
                e.setYZData({
                  needAuthMobileBeforeMemberCode:
                    t && !(null != a && a.hasMobileAuthorized),
                });
              })();
            },
          },
          observers: {
            "isSupportGrowthValue, levelValue, growthValue": function (
              e,
              t,
              a
            ) {
              var r = "";
              (r = e ? "成长值" + a : t > 0 ? "LV." + t + " >" : "会员中心"),
                this.setYZData({ levelBtnText: r }, { immediate: !0 });
            },
          },
        });
      },
      CgAV: function (e, t, a) {
        var r = a("WRHT");
        t.a = r.a;
      },
      WRHT: function (e, t, a) {
        a.d(t, "b", function () {
          return o;
        });
        var r = a("z24M");
        var o = () => {
          var e = getApp().getSystemInfoSync();
          return (
            !Object(r.a)("transactionWeappFlag") &&
            (!e.environment ||
              "wxwork" !== e.environment ||
              "ios" !== e.platform)
          );
        };
        t.a = function (e) {
          void 0 === e && (e = {});
          var t = getCurrentPages();
          e = Object.assign(
            {
              selector: "#account-wx-login",
              context: t.length ? t[t.length - 1] : null,
            },
            e
          );
          var { context: a } = e;
          if (!a || !a.selectComponent) throw new Error("context is required");
          var r = a.selectComponent(e.selector);
          if (!r) throw new Error("Can not find the selector " + e.selector);
          (e.selectComponent = r), r.wxLogin && r.wxLogin(e);
        };
      },
    }
  )
);
