"use strict";
var r = require("~/r");
r(
  "KJRX",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      KJRX: function (e, t, a) {
        a.r(t);
        var i = a("Fcif"),
          o = a("eijD"),
          s = a("9ZMt"),
          n = a("mztD"),
          r = a("rxfT"),
          l = a("WpLr"),
          d = a("wNgt"),
          h = a("Pn2I"),
          u = a("bs6A"),
          g = {
            mixins: [u.a],
            props: {
              themeColors: String,
              componentData: { type: Object, default: () => ({}) },
              kdtId: Number,
              uniqueKey: String,
              shopInfo: { type: Object, default: () => ({}) },
            },
            data: () => ({
              assetInfoSetting: [],
              styleSetting: {},
              userInfo: {},
              cardStyle: "",
              assetInfoValue: {},
              memberInfo: {},
              extraData: {},
              authMobile: !0,
              authUser: !0,
              showMemberPopup: !1,
              entries: [],
              showBenefitsNotice: !1,
              isRegistryComplete: !0,
              benefitTextInfo: {
                prefix: "注册",
                text: "享丰富会员权益",
                noBenefits: !0,
              },
              benefitTextWithoutMemberName: "",
              assetInfoCombination: null,
              loadingData: !1,
              showLoading: !0,
              layoutStyle: null,
              assetStyle: "",
              extraSetting: {},
            }),
            computed: {
              welcomeInfo() {
                var { shopName: e = "" } = this.shopInfo;
                return (
                  "欢迎加入" +
                  (e.length > 6 ? e.substring(0, 6) + "..." : e) +
                  "会员"
                );
              },
              unauthorizedStyleMode() {
                var { mode: e, layoutStyle: t } = this.componentData;
                return 2 == +e && 1 == +t
                  ? "hello"
                  : "1" === e || "2" === e
                  ? "horizontal"
                  : "3" === e
                  ? "vertical"
                  : "horizontal";
              },
              innerCardBorderStyle() {
                var e;
                return (
                  "border-radius: " +
                  (null == (e = this.styleSetting) ? void 0 : e.borderRadius) +
                  "px;"
                );
              },
            },
            watch: {
              uniqueKey(e, t) {
                e !== t && this.initData();
              },
            },
            created() {
              this.initData(),
                (this.showLoading = !0),
                this.handleLogger(r.j.VIEW, "view");
            },
            methods: {
              onPullDownRefresh() {
                (this.showLoading = !1), this.initData();
              },
              initData() {
                var {
                  componentData: {
                    assetInfoSetting: e,
                    styleSetting: t,
                    entry: i = [],
                    layoutStyle: o,
                    extraSetting: s = { showVIP: !0, showAvatar: !0 },
                  },
                } = this;
                (this.assetInfoSetting = e.filter((e) => e.show)),
                  (this.styleSetting = t),
                  (this.entries = i),
                  (this.layoutStyle = o),
                  (this.extraSetting = s),
                  a
                    .e("packages/async-core/chunk")
                    .then(a.bind(null, "JvWB"))
                    .then((e) => e.default)
                    .then((e) => {
                      e.getUserInfo({ kdtId: this.kdtId, cache: !1 })
                        .then((e) => {
                          var {
                            state: { mobile: t, nicknameAndAvatar: a },
                            avatar: i,
                            nickname: o,
                          } = e;
                          (this.authMobile = t),
                            (this.authUser = !!(a || (i && o))),
                            (this.userInfo = e),
                            this.getCardStyle(),
                            t && (this.getAssetInfo(), this.getRegistryState());
                        })
                        .catch(() => {});
                    }),
                  this.getLevelGiftBag();
              },
              getAssetInfo(e) {
                var t = this;
                return Object(o.a)(function* () {
                  void 0 === e && (e = null), (t.loadingData = t.showLoading);
                  var {
                      assetInfo: a,
                      memberInfo: o,
                      extraData: s,
                    } = e || (yield Object(l.a)()),
                    { levelMode: n } = a,
                    { vipLevel: h } = o;
                  if (
                    (a.storedBalanceValue && (a.storedBalanceValue /= 100),
                    (a.levelMode = Number.isNaN(Number(a.levelMode))
                      ? r.i.Growth
                      : Number(a.levelMode)),
                    (t.assetInfoValue = a),
                    (t.memberInfo = o),
                    (t.extraData = s),
                    (t.loadingData = !1),
                    +n === r.i.Consume)
                  ) {
                    var {
                      nextProgress: u,
                      nextText: g,
                      progressText: c,
                    } = yield Object(d.e)(h);
                    t.memberInfo = Object(i.a)({}, t.memberInfo, {
                      freeConsumeNextProgress: u,
                      freeConsumeNextText: g,
                      consumeProgressText: c,
                    });
                  }
                })();
              },
              getCardStyle() {
                var {
                    componentData: {
                      mode: e,
                      layoutStyle: t,
                      styleSetting: {
                        bgColor: a,
                        bgImage: i,
                        pageMargin: o,
                        borderRadius: s,
                        cardStyle: r,
                        bgType: l,
                        cardBgColor: h,
                        textColor: u,
                        realTextColor: g = "#333333",
                      },
                    },
                  } = this,
                  c =
                    "border-radius: " +
                    s +
                    "px;" +
                    (2 == +e && 1 == +t && this.authMobile
                      ? "padding-top: 24px;"
                      : ""),
                  m =
                    ("image" === l
                      ? "background: url(" +
                        Object(n.a)(i, "!750x0.jpg") +
                        ") center center / cover no-repeat;"
                      : "background-color: " + a + ";") + Object(d.b)(r);
                (this.assetStyle =
                  "padding: 6px " +
                  o +
                  "px;background-color: " +
                  h +
                  ";--textColor: " +
                  u +
                  ";--realTextColor: " +
                  g),
                  (this.cardStyle = m + c);
              },
              handleLogin(e) {
                var t = this;
                return Object(o.a)(function* () {
                  var a;
                  (t.loadingData = !0),
                    (t.userInfo = e),
                    (t.authMobile = !0),
                    t.handleLogger(r.j.AUTH_SUCCESS);
                  var i = yield Object(l.a)();
                  null != i && null != (a = i.memberInfo) && a.isMember
                    ? (t.getAssetInfo(i), t.getRegistryState())
                    : Object(d.d)(
                        () => {
                          (t.showBenefitsNotice = !0),
                            t.getAssetInfo(i),
                            t.getRegistryState(),
                            t.handleLogger("login");
                        },
                        {
                          kdtId: t.kdtId,
                          member_src_way: 800,
                          member_src_channel: 1e3,
                          need_be_member: !0,
                        },
                        "授权中",
                        { needLoading: !1 }
                      );
                })();
              },
              handleAuthUserInfo(e) {
                (this.userInfo = e), (this.authUser = !0);
              },
              handleAuthFail() {
                this.handleLogger(r.j.AUTH_FAIL);
              },
              handleNavigate(e) {
                var { type: t, linkData: a } = e,
                  i = r.f[t];
                if (t !== r.j.ENTRY_CARD) {
                  if (this.authMobile) {
                    if (t === r.j.MEMBER)
                      i =
                        [r.i.Prepaid, r.i.Consume].indexOf(
                          this.assetInfoValue.levelMode
                        ) > -1
                          ? "/packages/levelcenter/free/index"
                          : i + "?kdt_id=" + this.kdtId + "&title=会员中心";
                    else if (t === r.b.SET_POINT) {
                      var { collectPointsActiveId: o } = this.assetInfoValue;
                      i = o
                        ? i +
                          "?activity_id=" +
                          this.assetInfoValue.collectPointsActiveId +
                          "&kdt_id=" +
                          this.kdtId
                        : r.f.allSetPoint + "?kdt_id=" + this.kdtId;
                    }
                    s.default.navigate({ type: "navigateTo", url: i }),
                      this.handleLogger(t);
                  }
                } else this.$emit("jumpToLink", a);
              },
              handleLogger(e, t) {
                void 0 === t && (t = "click");
                var a = s.default.getGlobal("logger");
                a &&
                  a.log({
                    et: t,
                    ei: r.g[e].ei,
                    en: r.g[e].en,
                    params: {
                      component: "ShelfCustomerAsset",
                      where: "客户资产组件",
                    },
                  });
              },
              handleShowMemberPop() {
                this.showMemberPopup = !0;
              },
              handleCloseMemberPopup() {
                this.showMemberPopup = !1;
              },
              handleCloseBenefitsNotice() {
                this.showBenefitsNotice = !1;
              },
              getLevelGiftBag() {
                var e = s.default.getApp();
                Promise.all([e.getPointsName(), Object(l.b)()]).then((e) => {
                  var [t, a] = e,
                    o = Object(h.a)(
                      Object(i.a)({}, a, {
                        pointsName:
                          (null == t ? void 0 : t.pointsName) || "积分",
                      })
                    );
                  (this.benefitTextInfo = o),
                    (this.benefitTextWithoutMemberName = o.text);
                });
              },
              getRegistryState() {
                Object(l.c)().then((e) => {
                  var t;
                  this.isRegistryComplete =
                    null == (t = e.isRegistryComplete) || t;
                });
              },
            },
            ud: !0,
          };
        t.default = s.default.component(g);
      },
    }
  )
);
