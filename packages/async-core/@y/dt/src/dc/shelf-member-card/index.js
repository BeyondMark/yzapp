"use strict";
var r = require("~/r");
r(
  "dEgw",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      dEgw: function (e, t, a) {
        a.r(t);
        var r = a("eijD"),
          l = a("Fcif"),
          i = a("9ZMt"),
          o = a("a1Mm"),
          n = a("03az"),
          s = a("DXqK"),
          d = a("wNgt"),
          c = a("mdAW"),
          v = a("lxX7"),
          u = i.default.getGlobal("logger"),
          m = Object(o.a)(
            "upload_files/2023/07/18/FmOryNrXUycpbZg8D7QIwRb50a5M.png"
          ),
          p = "https://h5.youzan.com/wscuser",
          h = "https://cashier.youzan.com/pay/wscuser_paylevel",
          g = {
            props: {
              kdtId: Number,
              componentData: { type: Object, default: () => ({}) },
              uniqueKey: String,
            },
            data: () => ({
              loaded: !1,
              supportPaidLevel: !1,
              isMember: !1,
              hasMobile: !1,
              nickName: "",
              identity: "",
              levelName: "",
              level: 0,
              hasCoverUrl: !1,
              cardTitle: "",
              cardDesc: "",
              currentGrowth: "",
              isMaxLevel: !1,
              nextLevelGrowthGap: "",
              hasPaidLevel: !1,
              coverUrl: m,
              cardColor: "#3f3f3f",
              paidLevelInfo: {},
              showPopup: !1,
              isRegistryComplete: !1,
              levelGroupAlias: "",
              progress: 0,
              benefitNum: 0,
              endDate: "",
              expired: !1,
              willExpireFlag: !1,
              borderRadiusType: 2,
              LevelMode: v.b,
              levelMode: v.b.Growth,
              prepaidMemberInfo: { isMaxLevel: !1, nextLevelRechargeGap: 0 },
              showBenefitsNotice: !1,
              consumeText: "",
              consumeProgress: 0,
            }),
            computed: {
              backgroundImage() {
                var { coverUrl: e } = this;
                return "url(" + Object(o.a)(e, "!400x0.jpg") + ")";
              },
              imageCdn: () => ({
                qrcodeImage: Object(o.a)(
                  "retail/weapp/icons/qr-new@3X.png",
                  "!72x0.jpg"
                ),
                prefixImage: Object(o.a)(
                  "/upload_files/2023/07/18/FuPulKEOH04VkIr3kCK4IBEB8t60.png",
                  "!96x0.jpg"
                ),
              }),
              isPaidMember() {
                var {
                  supportPaidLevel: e,
                  paidLevelInfo: t,
                  hasPaidLevel: a,
                } = this;
                return e && t.level && a;
              },
              memberCardStyle() {
                var { cardBgColor: e, cardMargin: t } = this.componentData;
                return "background-color: " + e + ";padding: 6px " + t + "px;";
              },
            },
            watch: {
              uniqueKey(e, t) {
                e !== t && this.fetchData();
              },
            },
            created() {
              this.fetchData(),
                this.initData(),
                this.handleLog(
                  "view",
                  "view_shelf_member_card",
                  "会员卡片曝光"
                );
            },
            methods: {
              handleLog(e, t, a, r) {
                void 0 === r && (r = {}),
                  u &&
                    u.log({
                      et: e,
                      ei: t,
                      en: a,
                      params: Object(l.a)({ component: "memberCard" }, r),
                    });
              },
              handleAuthFail() {
                this.handleLog("click", "auth_fail_smc", "会员卡片拒绝授权");
              },
              initData() {
                var e = this;
                return Object(r.a)(function* () {
                  var {
                    title: t,
                    desc: a,
                    borderRadiusType: r,
                  } = e.componentData;
                  (e.borderRadiusType = r || 2),
                    (e.cardTitle =
                      (null == t ? void 0 : t.length) > 0
                        ? t
                        : "注册会员享专属好礼"),
                    (e.cardDesc =
                      (null == a ? void 0 : a.length) > 0
                        ? a
                        : "更多会员权益等你解锁");
                })();
              },
              noop() {},
              fetchData(e) {
                var t = this;
                Promise.all([Object(c.c)(), e || Object(c.a)(), Object(c.b)()])
                  .then(
                    (function () {
                      var e = Object(r.a)(function* (e) {
                        var a,
                          [r, i, o] = e,
                          { nextProgress: n, nextText: s } = yield Object(d.e)(
                            null == i || null == (a = i.member_level_right)
                              ? void 0
                              : a.vip_level
                          );
                        t.setData({ consumeProgress: n, consumeText: s }),
                          t.$set(
                            t,
                            "data",
                            Object.assign(
                              t.data,
                              Object(l.a)(
                                { loaded: !0 },
                                t.transformPaidLevelInfo(r),
                                t.transformUserInfo(i),
                                t.transformLevelInfo(o)
                              )
                            )
                          );
                      });
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  )
                  .catch((e) => {});
              },
              transformUserInfo(e) {
                if (!e) return {};
                var {
                  asset_info: t,
                  customer_info: a,
                  user_info: r,
                  member_level_right: l = {},
                } = e;
                return a && r
                  ? {
                      isMember: 0 !== a.is_member,
                      hasMobile: r.mobile_flag,
                      nickName: r.nick_name,
                      identity: l.identity_no || "",
                      levelName: l.vip_name || "VIP " + (l.vip_level || 0),
                      level: l.vip_level || 0,
                      nextLevelGrowthGap: l.next_growth_limit_gap || "",
                      isMaxLevel: l.is_current_level_to_max || !1,
                      coverUrl: Object(o.a)(l.cover_url || m),
                      cardColor: this.getColorByCode(l.color_code),
                      hasCoverUrl: !!l.cover_url,
                      currentGrowth: t.growth_value,
                      progress: l.is_current_level_to_max
                        ? 100
                        : (t.growth_value /
                            (t.growth_value + l.next_growth_limit_gap)) *
                          100,
                      levelMode: t.level_mode,
                      prepaidMemberInfo: {
                        isMaxLevel: Number.isNaN(Number(t.next_thread_sold)),
                        nextLevelRechargeGap: t.next_thread_sold / 100 || 0,
                      },
                    }
                  : {};
              },
              transformPaidLevelInfo(e) {
                if (!e.enable) return {};
                if (Object.keys(e.info).length > 0) {
                  var { enable: t, info: a } = e;
                  if (!a.level) return {};
                  var r = Object(n.a)(new Date(), a.termEndAt),
                    i = {
                      supportPaidLevel: t,
                      paidLevelInfo: a,
                      hasPaidLevel: t && a.level,
                      benefitNum: this.getBenefitNum(e.detail),
                      endDate: Object(s.d)(a.termEndAt, "YYYY-MM-DD"),
                      expired: 0 === r,
                      willExpireFlag: r <= 30,
                    };
                  return t && a.level
                    ? Object(l.a)({}, i, {
                        coverUrl: Object(o.a)("retail/shelf/paid_level_bg.png"),
                      })
                    : i;
                }
                return {};
              },
              transformLevelInfo(e) {
                var t, a;
                return {
                  isRegistryComplete: null == (t = e.isRegistryComplete) || t,
                  levelGroupAlias: null != (a = e.levelGroupAlias) ? a : "",
                };
              },
              getColorByCode: (e) => v.a[e] || "#3f3f3f",
              becomeMember() {
                var e = this;
                return Object(r.a)(function* () {
                  var t,
                    a = yield Object(c.a)();
                  if (null != a && null != (t = a.customer_info) && t.is_member)
                    return e.fetchData(a);
                  Object(d.d)(
                    () => {
                      e.fetchData(),
                        (e.showBenefitsNotice = !0),
                        e.handleLog(
                          "click",
                          "login_member_success",
                          "会员卡片注册会员"
                        );
                    },
                    {
                      kdtId: e.kdtId,
                      member_src_way: 800,
                      member_src_channel: 1e3,
                      need_be_member: !0,
                    },
                    "",
                    { needLoading: !1 }
                  );
                })();
              },
              navigateToMemberCenter() {
                var { isMember: e, isPaidMember: t, kdtId: a } = this;
                e
                  ? (i.default.navigate({
                      type: "navigateTo",
                      url:
                        [v.b.Prepaid, v.b.Consume].indexOf(this.levelMode) > -1
                          ? "/packages/levelcenter/free/index"
                          : p + "/memberlevel?kdt_id=" + a + "&title=会员中心",
                    }),
                    this.handleLog(
                      "click",
                      "navigate_member",
                      "会员卡片跳转会员中心",
                      { isPaid: String(t) }
                    ))
                  : i.default.navigate({
                      url:
                        p +
                        "/memberlevel/mobilecheck?kdt_id=" +
                        a +
                        "&sales_id=0&referee_id=0&referee_scene=0",
                    });
              },
              navigateToPaidLevels() {
                i.default.navigate({
                  type: "navigateTo",
                  url: h + "?kdt_id=" + this.kdtId,
                });
              },
              navigateToLevelDetail() {
                var e,
                  t,
                  a =
                    null == (e = this.paidLevelInfo) || null == (t = e.level)
                      ? void 0
                      : t.levelAlias;
                i.default.navigate({
                  type: "navigateTo",
                  url: h + "?kdt_id=" + this.kdtId + "&alias=" + a,
                });
              },
              navigateToLevelCode() {
                i.default.navigate({
                  type: "navigateTo",
                  url: "/packages/member-code/index",
                });
              },
              getBenefitNum(e) {
                var t = 0,
                  a = e.levelBenefit;
                return (
                  a &&
                    Object.keys(a).forEach((e) => {
                      t += "diyTemplateList" === e ? a[e].length : 1;
                    }),
                  t
                );
              },
              navigateToCompletePage() {
                i.default.navigate({
                  url:
                    p +
                    "/levelcenter/simplified-fill?kdt_id=" +
                    this.kdtId +
                    "&alias=" +
                    this.levelGroupAlias +
                    "&jumpTo=Home",
                });
              },
              handleOpenPopup() {
                (this.showPopup = !0),
                  this.handleLog(
                    "click",
                    "view_member_code",
                    "会员卡片打开会员码"
                  );
              },
              handleClosePopup() {
                this.showPopup = !1;
              },
              handleCloseNotice() {
                this.showBenefitsNotice = !1;
              },
            },
            ud: !0,
          };
        t.default = i.default.component(g);
      },
    }
  )
);
