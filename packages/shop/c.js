"use strict";
(exports.ids = [3]),
  (exports.modules = {
    "+K8Z": function (e, t, a) {
      a.d(t, "a", function () {
        return n;
      }),
        a.d(t, "b", function () {
          return i;
        }),
        a.d(t, "c", function () {
          return r;
        });
      var o = a("1Uvd"),
        n = Object(o.a)(8),
        i = {
          NEW_ARRIVAL: 1,
          KEEPER_TALK: 2,
          SINGLE_PRODUCTION: 3,
          SHOP_CIRCLE: 4,
        },
        r = { LOCK: 1 };
    },
    "+Vbj": function (e, t, a) {
      var o = a("jgJv"),
        n = a("lYsT"),
        i = a("PqlX"),
        r = o ? o.isConcatSpreadable : void 0;
      e.exports = function (e) {
        return i(e) || n(e) || !!(r && e && e[r]);
      };
    },
    "+oxD": function (e, t, a) {
      a.d(t, "a", function () {
        return n;
      }),
        a.d(t, "b", function () {
          return i;
        }),
        a.d(t, "c", function () {
          return r;
        });
      var o = function (e) {
          var { width: t, fontSize: a, text: o = "" } = void 0 === e ? {} : e,
            n = Math.floor(t / a);
          return { charLen: n, isMore: o.length > n, isLess: o.length < n };
        },
        n = (e, t, a, n, i, r, s) => {
          var c = e,
            { charLen: u, isLess: d } = o({ width: s, fontSize: a, text: c });
          (c = d ? c : c.slice(0, u - 1) + "..."),
            n.setFontSize(a),
            n.setFillStyle(t),
            n.fillText(c, i, r);
        },
        i = (e, t, a, n, i, r, s, c) => {
          var u = e,
            d = "",
            {
              charLen: l,
              isMore: p,
              isLess: h,
            } = o({ width: c, fontSize: a, text: u });
          p && ((d = u.slice(l)), (u = u.slice(0, l))),
            h || (d = d.slice(0, l - 1) + "..."),
            n.setFontSize(a),
            n.setFillStyle(t),
            n.fillText(u, i, r),
            n.fillText(d, i, r + s);
        },
        r = function (e) {
          var { imageInfo: t, desc: a, title: n } = void 0 === e ? {} : e,
            { w: i, h: r } = t,
            s = i - 32,
            { isLess: c } = o({ width: s, fontSize: 20, text: n }),
            u = r + 32,
            d = u + 28 * (c ? 1 : 2) - 16 + 8,
            l = d + 16 + 4,
            p = s - 16,
            { isLess: h } = o({ width: p, fontSize: 12, text: a }),
            g = a ? 18 * (h ? 1 : 2) + 16 : 0,
            m = d + g + (a ? 16 : 8),
            f = 16 + m + 20 - 3;
          return {
            imgLRPadding: 16,
            posterWidth: i,
            coverImgHeight: r,
            textStartX: 16,
            titleWidth: s,
            titleFontSize: 20,
            titleLineHeight: 28,
            titleStartY: u,
            descShadowStartY: d,
            descStartY: l,
            descWidth: p,
            descShadowBorder: 4,
            descFontSize: 12,
            descLineHeight: 18,
            descHeight: g,
            qrCodeWH: 80,
            qrCodeStartY: m,
            qrCodeFontSize: 12,
            qrCodeTextLineHeight: 18,
            shareText: "分享自",
            qrCodeFirstTextShopNameWidth: s - 80 - 16 - 12 * "分享自".length,
            qrCodeFirstTextStartY: f,
            qrCodeSecondTextStartY: f + 12 + 6 + 4,
            posterHeight: m + 80 + 16,
          };
        };
    },
    "/JLS": function (e, t, a) {
      a.d(t, "a", function () {
        return o;
      }),
        a.d(t, "c", function () {
          return n;
        }),
        a.d(t, "d", function () {
          return i;
        }),
        a.d(t, "b", function () {
          return r;
        });
      var o = 2,
        n = 3,
        i = "directSeller",
        r = {
          note: {
            h5Url: "https://h5.youzan.com/wscshop/shopnote/detail",
            weappUrl: "/packages/shop/shopnote/detail/index",
          },
          feature: {
            h5Url: "https://h5.youzan.com/wscshop/showcase/feature",
            weappUrl: "/packages/home/feature/index",
          },
        };
    },
    "/Qyy": function (e, t, a) {
      var o = a("dIZa"),
        n = a("SyCk"),
        i = a("q+I6"),
        r = a("9aUh");
      e.exports = function (e, t, a) {
        if (!r(a)) return !1;
        var s = typeof t;
        return (
          !!("number" == s
            ? n(a) && i(t, a.length)
            : "string" == s && t in a) && o(a[t], e)
        );
      };
    },
    "/fWJ": function (e, t, a) {
      a.d(t, "b", function () {
        return d;
      }),
        a.d(t, "e", function () {
          return l;
        }),
        a.d(t, "h", function () {
          return p;
        }),
        a.d(t, "c", function () {
          return h;
        }),
        a.d(t, "g", function () {
          return g;
        }),
        a.d(t, "d", function () {
          return m;
        }),
        a.d(t, "a", function () {
          return f;
        }),
        a.d(t, "f", function () {
          return v;
        });
      var o = a("Fcif"),
        n = a("zMoS"),
        i = a("3tyi"),
        r = a("KEq0"),
        s = a.n(r),
        c = a("9zTU"),
        u = getApp(),
        d = (e, t) => e.find((e) => e.card.levelValue > t.levelValue),
        l = (e) => {
          var t = Object(i.a)(e, [
            "NEW_SALES_KDTID",
            "RECRUIT_ENTRANCE",
            "RECRUIT_MEMBER_TYPE",
            "RECRUIT_SRC",
            "from_params",
          ]);
          return (
            "true" === e.IS_SALES &&
              e.NEW_SALES_ID &&
              ((t.IS_SALES = e.IS_SALES), (t.NEW_SALES_ID = e.NEW_SALES_ID)),
            t
          );
        },
        p = (e) => {
          var t = l(e);
          if (t.NEW_SALES_ID) {
            var a = {
              bindSources: "SCRM_CREATED_H5_OR_APPLET",
              salesId: t.NEW_SALES_ID,
              salesKdtId: t.NEW_SALES_KDTID,
            };
            return getApp()
              .request({
                path: "/wscuser/shopping-guide/api/bindRelation.json",
                method: "post",
                data: a,
              })
              .catch(() => {});
          }
          return Promise.resolve();
        },
        h = (e) => {
          var { colorCode: t, cover: a } = e;
          return a
            ? {
                background: a,
                backgroundStyle:
                  "url(" + s()(a, "middle") + ") center/cover no-repeat",
              }
            : Object(o.a)(
                {},
                ((e) => {
                  (e && c.e[e]) || (e = c.m);
                  var t = c.e[e];
                  return {
                    backgroundStyle:
                      "linear-gradient(105.74deg, " +
                      [19.91, 70.53, 96.44].map(
                        (e, a) => (1 === a ? t + "74" : t) + " " + e + "%"
                      ) +
                      "),linear-gradient(0deg, #FFFFFF, #FFFFFF)",
                    reflectiveStyle:
                      "content: ''; position: absolute; right: 0; top: 0; width: 280px; height: 1px; left: 26px; background: radial-gradient(47.18% 951400.03% at 56.69% 0%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);",
                  };
                })(t)
              );
        },
        g = (e, t) => {
          var a = Object(n.a)(e, "level.levelAlias", null);
          return !t && null !== a;
        },
        m = (e, t) => {
          var a = Object(n.a)(e, "nowLevel.currentGrowth"),
            o = Object(n.a)(e, "nowLevel.levelValue", 0),
            i = Object(n.a)(t, "card.minGrowth");
          return 0 === o && a < i;
        },
        f = (e) => {
          var t;
          null == (t = u.logger) || t.log(e);
        },
        v = (e, t) => {
          var {
              neededMoreStoreBalance: a,
              hasCompleted: o,
              reachThreshold: n,
            } = t,
            { hasLevel: i, isRemoved: r } = e;
          return !!a || (!i && (!o || !!n));
        };
    },
    "/o60": function (e, t, a) {},
    "07F0": function (e, t) {
      e.exports = function (e, t) {
        for (
          var a = -1, o = null == e ? 0 : e.length, n = 0, i = [];
          ++a < o;

        ) {
          var r = e[a];
          t(r, a, e) && (i[n++] = r);
        }
        return i;
      };
    },
    "0Ip2": function (e, t, a) {
      a.d(t, "g", function () {
        return n;
      }),
        a.d(t, "f", function () {
          return i;
        }),
        a.d(t, "b", function () {
          return r;
        }),
        a.d(t, "c", function () {
          return s;
        }),
        a.d(t, "e", function () {
          return c;
        }),
        a.d(t, "a", function () {
          return u;
        }),
        a.d(t, "d", function () {
          return d;
        });
      var o = getApp(),
        n = (e) =>
          o.request({
            origin: "cashier",
            path: "/pay/wscuser/pluscenter/api/userLevelDetail.json",
            data: e,
          }),
        i = (e) =>
          o.request({
            origin: "cashier",
            path: "/pay/wscuser/pluscenter/api/getLevelListV2.json",
            data: e,
          }),
        r = () =>
          o.request({
            origin: "cashier",
            path: "/pay/wscuser/pluscenter/api/getExperienceHighestLevel.json",
          }),
        s = () =>
          o.request({
            origin: "cashier",
            path: "/pay/wscuser/pluscenter/api/getExperienceLevelList.json",
          }),
        c = (e) =>
          o.request({
            origin: "cashier",
            path: "/pay/wscuser/pluscenter/api/getNowExperienceInfo.json",
            data: e,
          }),
        u = () =>
          o.request({
            origin: "cashier",
            path: "/pay/wscuser/pluscenter/api/renew.json",
          }),
        d = (e) => {
          var { levelAlias: t } = e;
          return o.request({
            origin: "cashier",
            path: "/pay/wscuser/pluscenter/api/getLevelGoods.json",
            data: { levelAlias: t },
          });
        };
    },
    "0pZM": function (e, t, a) {},
    "0qVv": function (e, t, a) {
      var o = a("gKNW"),
        n = a("u2vY"),
        i = a("BwbT"),
        r = a("cTHi");
      e.exports = function (e) {
        return i(e) ? o(r(e)) : n(e);
      };
    },
    "1sfw": function (e, t, a) {
      a.d(t, "a", function () {
        return i;
      });
      var o = a("OPDa"),
        n = a("n7Pa"),
        i = function (e, t) {
          return (
            void 0 === t && (t = 0),
            o.a.getPageSpmTypeId() + "~" + e + "~" + t + "~" + n.a
          );
        };
    },
    "1uTS": function (e, t, a) {
      var o = a("Fcif"),
        n = (a("DUvn"), a("esrA")),
        i = "@wsc-tee-user/level-center-free-page-block",
        r = "@wsc-tee-decorate/navigation-bar",
        s = "@wsc-tee-decorate/cloud-open-process",
        c = "@wsc-tee-decorate/showcase-container",
        u = Object(n.a)({
          a: {
            p: [
              {
                r: ["/packages/shop/levelcenter/free/index"],
                c: [
                  { t: "m", c: ["b14-6"] },
                  { t: "m", c: ["b14-1", { moduleId: "b14-0", name: "Main" }] },
                ],
                m: ["b14-2", "b14-3", "b14-4", "b14-5"],
              },
            ],
          },
          m: [
            ["b14-0", i, null],
            ["b14-1", r, { d: { title: ["b14-0", "pageTitle"] } }],
            ["b14-2", s, null],
            ["b14-3", c, null],
            ["b14-4", "@wsc-tee-decorate/jump-link", null],
            [
              "b14-5",
              "@ext-tee-wsc-goods/biz-sku-manage",
              {
                d: {
                  themeVars: [
                    "@ext-tee-wsc-decorate/theme-color~EKBphALO",
                    "themeCSS",
                  ],
                },
              },
              { properties: { cloudExcluded: !0 } },
            ],
            [
              "b14-6",
              "@ext-tee-wsc-decorate/page-style",
              null,
              { properties: { useAppStyleIcon: !0 }, stage: "pre" },
            ],
          ],
          e: [
            [i, a("N94V"), { framework: "weapp" }],
            [r, a("/MSb")],
            [s, a("+qgQ")],
            [c, a("Y7pJ")],
            ["@wsc-tee-decorate/jump-link", a("OgbJ")],
            ["@ext-tee-wsc-goods/biz-sku-manage", a("O8mO")],
            ["@ext-tee-wsc-decorate/page-style", a("8v1J")],
          ],
          f: "weapp",
        }),
        d = a("9ZMt"),
        l = a("2wjL"),
        p = a("Zu4f"),
        h = a("UyoQ"),
        g = a("9hl2"),
        m = a("VmHG"),
        f = a("Tewj"),
        v = a("Na6L"),
        b = a("f9/1"),
        S = a("lRMv"),
        y = a("7sy2"),
        T = a("OTjV"),
        w = a("O3Bn"),
        O = a("n3cD"),
        I = a("9zTU"),
        _ = getApp(),
        E = {
          toMissionCenter: O.e,
          goodsRecommendTitleConfig: I.n,
          hasMobile: !1,
          hasCompleted: !0,
          showInfo: !1,
          showMission: !0,
          isShow: !1,
          isWeixinCardEnabled: !1,
          needMoreGrowth: !1,
          requireMobile: !1,
          mobileAuthorized: !1,
          qrCodeExpired: !1,
          fetchMissionFinished: !1,
          isSupportGoodsRecommend: !1,
          isConsume: !1,
          hasLevel: !1,
          isFullLevel: !1,
          isThirdPartyCenter: !1,
          isRemoved: !1,
          showNewMemberGift: !1,
          isUnionCode: !1,
          showTabBar: !1,
          needSubscribe: !1,
          showSubscribeFail: !1,
          subscribing: !1,
          templateIdList: [],
          reachThreshold: !0,
          showBenefitsAlert: !1,
          showRegisterCompleteBar: !1,
          neededMoreStoreBalance: !1,
          showRegisterBtn: !1,
          branchStoreOpenOnline: !1,
          isReady: !1,
          isFeatureMemberCenter: !1,
          kdtId: _.getKdtId(),
          deviceType: _.deviceType || "",
          redirectUrl: null,
          current: 0,
          groupAlias: "",
          nowLevelAlias: "",
          mode: I.f.GROWTH,
          barCode: "",
          identityNo: "",
          qrCode: "",
          cardName: "",
          guideScene: "",
          encodeCode: "",
          upgradeMissionList: [],
          recruitParams: {},
          pageQuery: {},
          assetsInfo: {},
          userLevel: {},
          userInfo: {},
          cards: [],
          nowLevel: {},
          nowBenefitList: [],
          nextCard: {},
          pointsInfo: {},
          joinGapInfo: {},
          benefitGift: {},
          bizDataMap: {},
          crmFromScenePlanId: "",
          memberCodeRefreshInterval: 3e4,
          loading: !0,
          globalCustomLoading: !0,
        },
        x = a("+I+c"),
        C = a("zMoS"),
        j = a("AGZf"),
        P = a("dWkE"),
        k = a("zeDP"),
        A = a("/fWJ"),
        L = a("bsB/"),
        D = a("WNIS"),
        R = a("of9M"),
        N = ["ctx"],
        M = getApp(),
        B = {
          checkWeixinCardEnabled(e, t) {
            var { state: a, commit: o } = e,
              { ctx: n } = t;
            return M.getShopInfo().then((e) => {
              var { chainStoreInfo: t = {} } = e,
                { isMultiOnlineShop: i } = t,
                r = i ? M.getHQKdtId() : a.kdtId;
              return R.c(r)
                .then((e) => {
                  o("SET_IS_WEIXIN_CARD_ENABLED", {
                    isWeixinCardEnabled: e.value,
                  }),
                    (n.data.isWeixinCardEnabled = e.value);
                })
                .catch(() => {
                  o("SET_IS_WEIXIN_CARD_ENABLED", { isWeixinCardEnabled: !1 }),
                    (n.data.isWeixinCardEnabled = !1);
                });
            });
          },
          checkRemove(e) {
            var { commit: t } = e;
            return R.b()
              .then((e) => {
                t("SET_IS_REMOVED", { isRemoved: e.value });
              })
              .catch((e) => {
                wx.showToast({ title: e.msg, icon: "none", duration: 1e3 });
              });
          },
          fetchUserLevel(e, t) {
            var { state: a, commit: n, dispatch: i } = e,
              { pageQuery: r } = a,
              { ctx: s, isRejoinMember: c } = t,
              u = Object(A.e)(r);
            return (
              n("SET_RECRUIT_PARAMS", { recruitParams: u }),
              Object(A.h)(r),
              a.globalCustomLoading || wx.showLoading({ title: "加载中..." }),
              R.l(Object(o.a)({}, u, { type: I.g.FREE, withConsumerData: "1" }))
                .then((e) => {
                  wx.hideLoading(),
                    R.d().then((e) => {
                      n("SET_ASSETS_INFO", { assetsInfo: e });
                    }),
                    n("SET_USER_LEVEL_AND_SWIPER", {
                      userLevel: e,
                      hasLevel: !!e.identityNo,
                      isConsume: e.mode === I.f.CONSUME,
                      mode: e.mode,
                    }),
                    (s.data.userLevel = e),
                    i("changeMemberGiftStatusByData", { userLevel: e }),
                    c && e.identityNo && M.trigger("level-center:rejoin"),
                    i("fetchLevelList", Object(o.a)({ ctx: s }, e));
                })
                .catch(() => {
                  wx.hideLoading();
                })
            );
          },
          changeMemberGiftStatusByData(e, t) {
            var a,
              { commit: o } = e,
              { userLevel: n } = t,
              i = wx.getStorageSync("hideMemberGiftModule"),
              r = Promise.resolve(!1);
            i ||
              (r = (
                null != n && null != (a = n.level) && a.levelId ? R.e : R.g
              )().then((e) => {
                var t, a, n;
                return (
                  o("SET_BENEFIT_GIFT", { benefitGift: e }),
                  (null == (t = e.couponList) ? void 0 : t.length) > 0 ||
                    (null == (a = e.presentList) ? void 0 : a.length) > 0 ||
                    (null == (n = e.points) ? void 0 : n.points) > 0
                );
              }));
            r.then((e) =>
              o("SET_SHOW_NEW_MEMBER_GIFT", { showNewMemberGift: e })
            );
          },
          fetchLevelList(e, t) {
            var { state: a, commit: o } = e,
              { ctx: n } = t,
              i = Object(x.a)(t, N);
            R.h({ type: I.g.FREE, withConsumerData: 1 })
              .then((e) => {
                e.levels = i;
                var t = Object(O.c)(e),
                  r = Object(C.a)(e, "levelList.[0].levelGroup.alias", ""),
                  s = Object(A.b)(t.cards, t.nowLevel),
                  c = Object(A.g)(i, e.hasCompleted),
                  u = Object(A.d)(t, s),
                  { userLevel: d, pageQuery: p, isConsume: h } = a,
                  g = !(!d || !d.identityNo),
                  m = Object(C.a)(t.cards, "[0].levelGapInfo", {}),
                  f = Object(C.a)(
                    t.cards,
                    "[0].levelGapInfo.hasEnterThreshold",
                    !1
                  ),
                  v = d.mode === I.f.STORE && !g && f,
                  b =
                    !Object(C.a)(t.cards, "[0].levelGapInfo", {})
                      .isRegistrationInfoCompleted && g,
                  S = Object(A.f)(a, {
                    neededMoreStoreBalance: v,
                    hasCompleted: e.hasCompleted,
                    reachThreshold: t.reachThreshold,
                  });
                o("SET_LEVEL_LIST_INFO", {
                  requireMobile: Object(C.a)(
                    e,
                    "levelList[0].levelV2List[0].levelGrantConditionList[1].registerCondition.requireMobile",
                    !1
                  ),
                  cards: t.cards,
                  isFullLevel: 1 === t.cards.length,
                  groupAlias: r,
                  nowLevel: t.nowLevel,
                  redirectUrl: l.a.add("/wscuser/levelcenter/fill", p),
                  hasCompleted: e.hasCompleted,
                  loading: !1,
                  nextCard: s,
                  showInfo: c,
                  needMoreGrowth: u,
                  reachThreshold: t.reachThreshold,
                  identityNo: Object(C.a)(e, "levels.identityNo"),
                  showRegisterCompleteBar: b,
                  neededMoreStoreBalance: v,
                  showRegisterBtn: S,
                  pointsInfo: e.pointsInfo,
                  joinGapInfo: m,
                }),
                  (n.data.groupAlias = r),
                  (n.data.neededMoreStoreBalance = v),
                  o("SET_CURRENT_INDEX", 0),
                  o("CHANGE_NOW_LEVEL_BENEFIT", t.cards[0]),
                  h &&
                    o("CHANGE_UPGRADE_MISSION_LIST", {
                      upgradeMissionList: Object(C.a)(
                        t,
                        "cards[0].upgradeMissionList",
                        []
                      ),
                    }),
                  (t.cards || []).every((e) => !e.isEnabled) &&
                    wx.showToast({
                      title: "会员等级已停用",
                      icon: "error",
                      duration: 1e3,
                    }),
                  o("CHANGE_READY", !0);
              })
              .catch(() => {
                wx.showToast({
                  title: "加载会员等级失败，请重试",
                  icon: "error",
                  duration: 1e3,
                });
              });
          },
          checkBenefitMatch(e) {
            var { commit: t } = e;
            return R.a().then((e) => {
              var { matched: a } = e;
              t("SET_SHOW_BENEFITS_ALERT", { showBenefitsAlert: !a });
            });
          },
          initIsThirdPartyCenter(e) {
            var { commit: t } = e;
            R.f().then((e) => {
              t("SET_IS_THIRD_PARTY_CENTER", { isThirdPartyCenter: e.value });
            });
          },
          checkIsFromSubscribeAndCanSubscribe(e) {
            var { commit: t } = e;
            Object(k.a)()
              .then((e) => {
                Object(L.a)({ scene: D.k }).then((a) => {
                  t("SET_TEMPLATE_LIST", a),
                    t("SET_NEED_SUBSCRIBE", { needSubscribe: e && a.length });
                });
              })
              .catch((e) => {
                Object(j.a)(e);
              });
          },
          handleSubscribe(e) {
            var { state: t, commit: a } = e;
            t.subscribing ||
              (a("SET_SUBSCRIBING", !0),
              Object(k.b)({
                templateIdList: t.templateIdList,
                onSuccess: () => {
                  a("SET_NEED_SUBSCRIBE", { needSubscribe: !1 }),
                    a("SET_SUBSCRIBING", !1);
                },
                onFail: () => {
                  a("SET_SHOW_SUBSCRIBE_FAIL", { showSubscribeFail: !0 }),
                    setTimeout(() => {
                      a("SET_NEED_SUBSCRIBE", !1);
                    }, 1e3);
                },
                onClose: () => {
                  a("SET_NEED_SUBSCRIBE", !1);
                },
              }));
          },
          handleSubscribeCallback(e, t) {
            var { commit: a } = e;
            t.detail
              ? a("SET_NEED_SUBSCRIBE", { needSubscribe: !1 })
              : a("SET_SHOW_SUBSCRIBE_FAIL", { showSubscribeFail: !0 });
          },
          closeSubscribeFailPopup(e) {
            var { commit: t } = e;
            t("SET_SHOW_SUBSCRIBE_FAIL", { showSubscribeFail: !1 });
          },
          handleSwipeChange(e, t) {
            var { state: a, commit: o } = e;
            if ("change" === t.type) {
              var { current: n } = t.detail,
                i = Object(C.a)(a.cards, "" + n, {});
              o("SET_CURRENT_INDEX", n),
                o("CHANGE_NOW_LEVEL_BENEFIT", i),
                o("CHANGE_UPGRADE_MISSION_LIST", {
                  upgradeMissionList: Object(C.a)(i, "upgradeMissionList", []),
                });
            }
          },
          missionsNumber(e) {
            var { state: t } = e;
            t.showMission = !1;
          },
          jumpToMissionCenter(e) {
            var { state: t } = e;
            Object(P.a)(t.toMissionCenter);
          },
          handleAfterFetchMission(e) {
            var { commit: t } = e;
            t("SET_FETCH_MISSION_FINISHED", !0);
          },
          hideMemberGift(e) {
            var { commit: t } = e;
            t("SET_SHOW_NEW_MEMBER_GIFT", { showNewMemberGift: !1 });
          },
          goToCompleteInfo(e) {
            var { state: t } = e,
              { kdtId: a, redirectUrl: n, groupAlias: i, pageQuery: r } = t,
              s = Object(o.a)(
                { kdtId: a, alias: i, fromScene: "complete" },
                Object(y.a)(r)
              );
            Object(A.h)(r).then(() => {
              Object(P.a)(n, Object(o.a)({}, s, { fromBiz: "levelcenter" }));
            });
          },
          handleProtocol(e) {
            var { state: t } = e;
            t.isFeatureMemberCenter &&
              a
                .e("packages/async-main/chunk")
                .then(a.t.bind(null, "HsSF", 7))
                .then((e) => {
                  var { InvokeProtocol: t } = e;
                  return { instance: new t() };
                })
                .then((e) => {
                  var { instance: t } = e;
                  t.auth()
                    .then(() => {})
                    .catch(() => {});
                });
          },
          fetchData(e, t) {
            var { commit: a, dispatch: o } = e,
              { branchStoreOpenOnline: n, isRejoinMember: i, ctx: r } = t;
            M.clearProtocolCache().then(() => {
              a("CHECK_BIND_PHONE");
              var e = [
                o("checkWeixinCardEnabled", { ctx: r }),
                o("checkRemove"),
                o("fetchUserLevel", { ctx: r, isRejoinMember: i }),
                o("initFeatureMemberCenterData", {
                  branchStoreOpenOnline: n,
                  ctx: r,
                }),
              ];
              Promise.all(e).finally(() => {
                setTimeout(() => {
                  a("HIDE_LOADING");
                }, 400);
              }),
                Object(w.f)().then((e) => {
                  a("SET_MOBILE_AUTHORIZED", {
                    mobileAuthorized: e.canMobileUse,
                  });
                });
            });
          },
          initFeatureMemberCenterData(e, t) {
            var { dispatch: a, commit: o } = e,
              { branchStoreOpenOnline: n, ctx: i } = t,
              r = M.globalData.brandFeaturePromise;
            r
              ? r
                  .then((e) => {
                    var { freeMemberCenter: t } = e;
                    !t
                      ? a("fetchComponentsOfType", {
                          branchStoreOpenOnline: n,
                          ctx: i,
                        })
                      : (o("SET_IS_FEATURE_MEMBER_CENTER", !0),
                        a("setBrandFeatureData", {
                          freeMemberCenter: t,
                          ctx: i,
                        }));
                  })
                  .catch(() => {
                    o("SET_IS_FEATURE_MEMBER_CENTER", !1),
                      a("fetchComponentsOfType", {
                        branchStoreOpenOnline: n,
                        ctx: i,
                      });
                  })
              : a("fetchComponentsOfType", {
                  branchStoreOpenOnline: n,
                  ctx: i,
                });
          },
          setBrandFeatureData(e, t) {
            var { dispatch: a } = e,
              { freeMemberCenter: o, ctx: n } = t,
              { components: i = [] } = o,
              r = i.find((e) => "config" === e.type),
              s = i.find((e) => "navigationbar_config" === e.type);
            r && (n.data.pageTitle = r.title || "会员中心"),
              (n.data.featureComponents = i),
              s && (n.data.navigationBarConfigData = s),
              a("handleProtocol");
          },
          fetchComponentsOfType(e, t) {
            var { branchStoreOpenOnline: a, ctx: o } = t;
            a &&
              Object(w.d)("member_free").then((e) => {
                o.data.featureComponents = e;
              });
          },
          reloadData(e, t) {
            var { state: a, dispatch: o, commit: n } = e,
              { isRejoinMember: i, ctx: r } = t,
              { branchStoreOpenOnline: s } = a;
            n("SET_CARDS_EMPTY_ARRAY"),
              o("fetchData", {
                branchStoreOpenOnline: s,
                isRejoinMember: i,
                ctx: r,
              });
          },
        },
        G = getApp(),
        U = {
          state: E,
          getters: {},
          actions: B,
          mutations: {
            SET_KDT_ID(e, t) {
              e.kdtId = t.kdtId;
            },
            SET_LEVEL_LIST_INFO(e, t) {
              var {
                requireMobile: a,
                cards: o,
                isFullLevel: n,
                groupAlias: i,
                nowLevel: r,
                redirectUrl: s,
                hasCompleted: c,
                nextCard: u,
                showInfo: d,
                needMoreGrowth: l,
                reachThreshold: p,
                identityNo: h,
                showRegisterCompleteBar: g,
                neededMoreStoreBalance: m,
                showRegisterBtn: f,
                pointsInfo: v,
                joinGapInfo: b,
              } = t;
              (e.requireMobile = a),
                (e.cards = o),
                (e.isFullLevel = n),
                (e.groupAlias = i),
                (e.nowLevel = r),
                (e.redirectUrl = s),
                (e.hasCompleted = c),
                (e.nextCard = u),
                (e.showInfo = d),
                (e.needMoreGrowth = l),
                (e.reachThreshold = p),
                (e.identityNo = h),
                (e.showRegisterCompleteBar = g),
                (e.neededMoreStoreBalance = m),
                (e.showRegisterBtn = f),
                (e.pointsInfo = v),
                (e.joinGapInfo = b);
            },
            SET_USER_LEVEL_AND_SWIPER(e, t) {
              (e.userLevel = t.userLevel),
                (e.hasLevel = t.hasLevel),
                (e.isConsume = t.isConsume),
                (e.mode = t.mode);
            },
            SET_IS_WEIXIN_CARD_ENABLED(e, t) {
              e.isWeixinCardEnabled = t.isWeixinCardEnabled;
            },
            SET_USER_INFO(e, t) {
              e.userInfo = t.userInfo;
            },
            SET_CARDS_EMPTY_ARRAY(e) {
              e.cards = [];
            },
            CHANGE_NOW_LEVEL_BENEFIT(e, t) {
              (e.nowBenefitList = Object(C.a)(t, "card.name")
                ? t.benefitList
                : []),
                (e.nowLevelAlias = t.card.alias);
            },
            SET_CURRENT_INDEX(e, t) {
              e.current = t;
            },
            SET_IS_SHOW(e) {
              e.isShow = !1;
            },
            SET_MEMBER_CODE_INFO(e, t) {
              (e.isShow = t.isShow),
                (e.barCode = t.barCode),
                (e.encodeCode = t.encodeCode),
                (e.qrCode = t.qrCode),
                (e.qrCodeExpired = t.qrCodeExpired);
            },
            SET_CARD_NAME(e, t) {
              e.cardName = t.cardName;
            },
            INIT_PAGE_DATA(e, t) {
              (e.guideScene = t.guideScene),
                (e.pageQuery = t.pageQuery),
                (e.crmFromScenePlanId = t.crmFromScenePlanId),
                (e.isUnionCode = t.isUnionCode),
                (e.bizDataMap = t.bizDataMap),
                (e.globalCustomLoading = t.globalCustomLoading);
            },
            SET_ASSETS_INFO(e, t) {
              e.assetsInfo = t.assetsInfo;
            },
            SET_MOBILE_AUTHORIZED(e, t) {
              e.mobileAuthorized = t.mobileAuthorized;
            },
            SET_BIND_MOBILE(e, t) {
              (e.hasMobile = t.hasMobile),
                (e.mobileAuthorized = t.mobileAuthorized);
            },
            CHECK_BIND_PHONE(e) {
              var t = !1;
              G.getBuyerId() || (t = !0), (e.hasMobile = !t);
            },
            SET_QR_CODE_EXPIRED(e, t) {
              e.qrCodeExpired = t.qrCodeExpired;
            },
            SET_FETCH_MISSION_FINISHED(e, t) {
              e.fetchMissionFinished = t;
            },
            SET_IS_SUPPORT_GOODS_RECOMMEND(e, t) {
              e.isSupportGoodsRecommend = t.isSupportGoodsRecommend;
            },
            SET_RECRUIT_PARAMS(e, t) {
              e.recruitParams = t.recruitParams;
            },
            CHANGE_UPGRADE_MISSION_LIST(e, t) {
              e.upgradeMissionList = t.upgradeMissionList;
            },
            SET_HAS_LEVEL(e, t) {
              e.hasLevel = t.hasLevel;
            },
            SET_IS_THIRD_PARTY_CENTER(e, t) {
              e.isThirdPartyCenter = t.isThirdPartyCenter;
            },
            SET_BENEFIT_GIFT(e, t) {
              e.benefitGift = t.benefitGift;
            },
            SET_IS_REMOVED(e, t) {
              e.isRemoved = t.isRemoved;
            },
            SET_SHOW_NEW_MEMBER_GIFT(e, t) {
              e.showNewMemberGift = t.showNewMemberGift;
            },
            CHECK_TAB_BAR_STATUS(e) {
              G.isSwitchTab().then((t) => {
                t &&
                  Object(A.a)({
                    et: "view",
                    ei: "member_nav",
                    en: "会员中心底导曝光",
                  }),
                  (e.showTabBar = t);
              });
            },
            SET_NEED_SUBSCRIBE(e, t) {
              e.needSubscribe = t.needSubscribe;
            },
            SET_SHOW_SUBSCRIBE_FAIL(e, t) {
              e.showSubscribeFail = t.showSubscribeFail;
            },
            SET_SUBSCRIBING(e, t) {
              e.subscribing = t;
            },
            SET_TEMPLATE_LIST(e, t) {
              e.templateIdList = t;
            },
            SET_SHOW_BENEFITS_ALERT(e, t) {
              e.showBenefitsAlert = t.showBenefitsAlert;
            },
            SET_BRANCH_STORE_OPEN_ONLINE(e, t) {
              e.branchStoreOpenOnline = t.branchStoreOpenOnline;
            },
            CHANGE_READY(e, t) {
              e.isReady = t;
            },
            SET_IS_FEATURE_MEMBER_CENTER(e, t) {
              e.isFeatureMemberCenter = t;
            },
            HIDE_LOADING(e) {
              e.loading = !1;
            },
          },
        },
        q = getApp(),
        F = a("quXu"),
        z = a("xBI0"),
        H = a("xW8c"),
        W = a("/pw/"),
        Y = a("ygrD"),
        K = a("rLrQ"),
        V = {
          config: u,
          builtinBundle: {
            "@wsc-tee-user/level-center-free-page-block": class {
              constructor(e) {
                var t = this,
                  { ctx: a } = e;
                (this.store = Object(T.a)(U)),
                  (this.beforePageMount = (e) => {
                    var { query: a } = e,
                      {
                        fromScene: n,
                        fromBiz: i,
                        waFromBiz: r,
                        activityInfo: s,
                        crmFromScenePlanId: c,
                      } = a;
                    delete a.crmFromScenePlanId, (this.query = a);
                    var u = Object(y.a)(a);
                    this.INIT_PAGE_DATA({
                      guideScene: n || "",
                      pageQuery: a,
                      crmFromScenePlanId: c || "",
                      isUnionCode:
                        ("union-code" === i && s) ||
                        ("wa" === i && "union-code" === r && s),
                      bizDataMap: Object(o.a)({}, u),
                      globalCustomLoading: q.globalData.globalCustomLoading,
                    }),
                      (this.ctx.data.pageQuery = a);
                    var d = !1;
                    q.getShopInfo().then((e) => {
                      var { chainStoreInfo: t = {}, shopMetaInfo: a = {} } =
                          e || {},
                        { isRootShop: n = !1 } = t;
                      (d = !Object(p.b)(a) || Object(h.a)(a)),
                        this.SET_BRANCH_STORE_OPEN_ONLINE({
                          branchStoreOpenOnline: d,
                        });
                      var i = Object(g.b)(a);
                      if (n || i) {
                        var { query: r } = Object(b.getCurrentPageOption)(),
                          s = l.a.add("/" + this.route, r);
                        Object(S.g)(
                          Object(o.a)({}, r, { redirectUrl: s })
                        ).then((e) => {
                          e !== this.kdtId && this.SET_KDT_ID({ kdtId: e }),
                            this.fetchData({
                              branchStoreOpenOnline: d,
                              ctx: this.ctx,
                            }),
                            this.checkBenefitMatch();
                        });
                      } else
                        this.fetchData({
                          branchStoreOpenOnline: d,
                          ctx: this.ctx,
                        }),
                          this.checkBenefitMatch();
                    }),
                      Object(w.c)({ type: 1 }).then(function (e) {
                        void 0 === e && (e = {}),
                          t.SET_IS_SUPPORT_GOODS_RECOMMEND({
                            isSupportGoodsRecommend: e.value,
                          });
                      }),
                      this.initIsThirdPartyCenter(),
                      this.checkIsFromSubscribeAndCanSubscribe(a);
                  }),
                  (this.onPageShow = () => {
                    this.CHECK_TAB_BAR_STATUS(),
                      this.SET_FETCH_MISSION_FINISHED(!1),
                      this.fetchUserLevel({
                        ctx: this.ctx,
                        isRejoinMember: !1,
                      });
                  }),
                  (this.onPageScroll = (e) => {
                    f.default.trigger("onPageScroll" + Object(v.a)(), e);
                  }),
                  (this.initDataAndActions = () => {
                    var e = Object(m.d)(this, ["kdtId", "userLevel"], {
                      setSelf: !0,
                    });
                    Object.assign(this, e),
                      Object(m.b)(this, [
                        "INIT_PAGE_DATA",
                        "SET_KDT_ID",
                        "SET_IS_SUPPORT_GOODS_RECOMMEND",
                        "CHECK_TAB_BAR_STATUS",
                        "SET_FETCH_MISSION_FINISHED",
                        "SET_BRANCH_STORE_OPEN_ONLINE",
                        "SET_HAS_LEVEL",
                        "checkBenefitMatch",
                        "initIsThirdPartyCenter",
                        "checkIsFromSubscribeAndCanSubscribe",
                        "fetchData",
                        "fetchUserLevel",
                        "reloadData",
                      ]),
                      this.store.watch("userLevel", (e) => {
                        this.SET_HAS_LEVEL({
                          hasLevel: !(!e || !e.identityNo),
                        });
                      });
                  }),
                  (this.initCtx = () => {
                    (this.ctx.data.navigationBarConfigData = {
                      origin_immersion: 1,
                    }),
                      (this.ctx.data.pageTitle = "会员中心"),
                      this.ctx.process.define("reloadData", (e) =>
                        this.reloadData({ isRejoinMember: e, ctx: this.ctx })
                      );
                  }),
                  (a.store = this.store),
                  (this.ctx = a),
                  this.initDataAndActions(),
                  this.initCtx();
              }
            },
            "@wsc-tee-decorate/navigation-bar": F.a,
            "@wsc-tee-decorate/cloud-open-process": z.a,
            "@wsc-tee-decorate/showcase-container": H.a,
            "@wsc-tee-decorate/jump-link": W.a,
            "@ext-tee-wsc-goods/biz-sku-manage": Y.a,
            "@ext-tee-wsc-decorate/page-style": K.a,
          },
        },
        J = d.default.getGlobal("ranta-app-runtime"),
        Z = J.getPageOptions({
          rantaOptions: Object(o.a)(
            { page: "/packages/shop/levelcenter/free/index" },
            V
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: J,
          tee: d.default,
          usedLifecycles: [
            "onPullDownRefresh",
            "onReachBottom",
            "onPageShow",
            "onPageHide",
            "beforePageMount",
            "onPageScroll",
          ],
        });
      d.default.page({ mixins: [Z] });
    },
    "26EH": function (e, t, a) {
      a.d(t, "d", function () {
        return c;
      }),
        a.d(t, "c", function () {
          return u;
        }),
        a.d(t, "b", function () {
          return l;
        }),
        a.d(t, "a", function () {
          return p;
        }),
        a.d(t, "e", function () {
          return h;
        });
      var o = a("Fcif"),
        n = a("1Uvd"),
        i = a("2wjL"),
        r = a("/JLS"),
        s = Object(n.a)(8),
        c = (e) => {
          var { materialId: t, spm: a } = e;
          return a + "." + t + "~goods.1~1~" + s;
        },
        u = (e) => {
          var { alias: t, materialType: a, kdtId: n } = e,
            s = r.b.feature,
            c = { alias: t };
          return (
            r.c === a && ((s = r.b.note), (c = { noteAlias: t })),
            {
              url: i.a.add(s.h5Url, Object(o.a)({}, c, { sub_kdt_id: n })),
              weappUrl: i.a.add(s.weappUrl, c),
            }
          );
        };
      function d(e) {
        return new Promise((t, a) => {
          wx.downloadFile({
            url: e,
            success(e) {
              200 === e.statusCode ? t(e.tempFilePath) : a();
            },
            fail(e) {
              a(e);
            },
          });
        });
      }
      function l(e) {
        return d(e).then((e) =>
          (function (e) {
            return new Promise((t, a) => {
              wx.saveVideoToPhotosAlbum({ filePath: e, success: t, fail: a });
            });
          })(e)
        );
      }
      function p(e) {
        return d(e).then((e) =>
          (function (e) {
            return new Promise((t, a) => {
              wx.saveImageToPhotosAlbum({ filePath: e, success: t, fail: a });
            });
          })(e)
        );
      }
      function h(e) {
        void 0 === e && (e = []);
        var t = [],
          a = {
            copy_0: "文案/链接复制失败",
            copy_1: "文案/链接已复制",
            material_0: "素材分享到动态失败",
            material_1: "素材已分享到动态",
            image_0: "图片保存到相册失败",
            image_1: "图片已保存到相册",
            video_0: "视频保存到相册失败",
            video_1: "视频已保存到相册",
          };
        return (
          e.forEach((e) => {
            if (e && e.type) {
              var { type: o, status: n } = e;
              (e.text = a[o + "_" + n]), t.push(e);
            }
          }),
          t
        );
      }
    },
    "2AbI": function (e, t, a) {
      var o = a("6TGQ"),
        n = a("tb+2"),
        i = a("h0av");
      e.exports = function (e) {
        return o(e, i, n);
      };
    },
    "2DFz": function (e, t, a) {
      var o = a("Fcif"),
        n = (a("xD10"), a("esrA")),
        i = "@wsc-tee-weapp/shop-note-page-setup",
        r = "@ext-tee-wsc-decorate/page-style",
        s = "@ext-tee-wsc-decorate/theme-color",
        c = "@wsc-tee-decorate/showcase-container",
        u = Object(n.a)({
          a: {
            p: [
              {
                r: ["/packages/shop/shopnote/detail/index"],
                c: [
                  { t: "m", c: ["b34-2"] },
                  { t: "m", c: ["b34-0"] },
                ],
                m: ["b34-1", "b34-3", "b34-4"],
              },
            ],
          },
          m: [
            ["b34-0", i, null],
            ["b34-1", "@wsc-tee-decorate/jump-link", null],
            [
              "b34-2",
              r,
              { d: { themeIcon: "b34-3", themeCSS: "b34-3" } },
              { properties: { useAppStyleIcon: !0 }, stage: "pre" },
            ],
            ["b34-3", s, null],
            ["b34-4", c, null],
          ],
          e: [
            [i, a("vr5V"), { framework: "weapp" }],
            ["@wsc-tee-decorate/jump-link", a("OgbJ")],
            [r, a("8v1J")],
            [s, a("oZkc")],
            [c, a("Y7pJ")],
          ],
          f: "weapp",
        }),
        d = a("9ZMt"),
        l = a("eijD"),
        p = a("hHpg"),
        h = a("zMoS"),
        g = a("2wjL"),
        m = a("XCh3"),
        f = a("GFa9"),
        v = a("J8k1"),
        b = a("ksi7"),
        S = a("+K8Z"),
        y = a("jc6w"),
        T = a("lRMv"),
        w = a("gc3r"),
        O = a("ZqJZ"),
        I = a.n(O),
        _ = a("jHjV"),
        E = a("Yt9W"),
        x = a("mKDx"),
        C = a("1F7m"),
        j = getApp(),
        P = a("/pw/"),
        k = a("rLrQ"),
        A = a("US/N"),
        L = a("MLLI"),
        D = a("50K0"),
        R = a("F6OL"),
        N = a("3tyi");
      function M(e, t) {
        void 0 === t && (t = "");
        var a = "";
        return (
          "object" != typeof e ||
            null == e ||
            Object.keys(e).forEach((o) => {
              a +=
                "" +
                t +
                (o.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() + ":") +
                e[o] +
                ";";
            }),
          a
        );
      }
      var B = {
        general: "#f44",
        "main-bg": "#f44",
        "main-text": "#fff",
        "vice-bg": "#f85",
        "vice-text": "#fff",
        "start-bg": "#ff6060",
        "end-bg": "#f44",
      };
      function G(e) {
        return "object" != typeof e || null == e
          ? ""
          : Object.keys(e)
              .map((t) => {
                var a = e[t];
                return "object" == typeof a
                  ? "--" +
                      t +
                      ": linear-gradient(to right, " +
                      a.start +
                      ", " +
                      a.end +
                      ")"
                  : "--" + t + ": " + a;
              })
              .join(";")
              .concat(";");
      }
      var U = { themeCSS: G(B), themeColors: B, shopStyleSettings: {} };
      var q = {};
      class F {
        constructor(e) {
          var { ctx: t } = e;
          (this.ctx = t),
            (this.isSupportCssVar = (function () {
              var { platform: e } = Object(L.b)();
              if ("ios" !== e) return !0;
              var { system: t } = d.default.$native.getSystemInfoSync();
              return Object(R.compareVersions)(t.split(" ")[1], "9.3") > -1;
            })()),
            (this.unwatch = null);
          var { kdtId: a } = t.data;
          (null != a && 0 != +a && this.isSupportCssVar) || this.setCtxData(U),
            this.prefetchThemeCSS(a),
            (this.unwatch = t.watch("kdtId", (e) => {
              !this.isSupportCssVar ||
                ("number" != typeof e && "string" != typeof e) ||
                0 == +e ||
                this.update(e);
            })),
            this.ctx.process.define("updateAppStyle", (e) => {
              var { shopStyleSettings: t = {} } = this.ctx.data,
                {
                  colors: a = {},
                  radius: n = {},
                  tag: i = {},
                  icon: r = {},
                } = e,
                s = Object(o.a)({}, t, {
                  colors: a,
                  radius: n,
                  tag: i,
                  icon: r,
                });
              (s.css = this.transformThemeCSS(s)),
                this.setCtxData(
                  Object(o.a)({}, this.buildThemeObj(s), { themeCSS: s.css })
                );
            });
        }
        prefetchThemeCSS(e) {
          return D.a
            .getMiniappPrefetchData("shopStyle")
            .then((t) => {
              if (!t) return this.fetchThemeCSS(e);
              this.setCtxData(this.handleThemeCSS(t));
            })
            .catch(() => {
              this.fetchThemeCSS(e);
            });
        }
        pageDestroyed() {
          this.unwatch();
        }
        update(e) {
          if (
            (function (e) {
              return (
                ("number" == typeof e || "string" == typeof e) && null != q[e]
              );
            })(e)
          )
            return this.setCtxData(q[e]);
          this.isUpdating ||
            ((this.isUpdating = !0),
            this.fetchThemeCSS(e)
              .then((t) => {
                (this.isUpdating = !1), (q[e] = t), this.setCtxData(t);
              })
              .catch(() => {
                this.setCtxData(U), (this.isUpdating = !1);
              }));
        }
        fetchThemeCSS(e) {
          return (function (e) {
            var t = null == e ? {} : { kdt_id: e };
            return Object(A.default)({
              path: "/wscshop/shop/shop_wide_style.json",
              query: t,
            });
          })(e).then((e) => this.handleThemeCSS(e));
        }
        handleThemeCSS(e) {
          var t, a;
          if (!e) return {};
          var n =
              null == (t = e.all_shop_styles)
                ? void 0
                : t.find((e) => "brand" === e.shop_style_type),
            i = n
              ? Object(N.a)(n, ["colors", "radius", "tag", "icon", "button"])
              : {};
          return (
            (e =
              (null == (a = e.all_shop_styles)
                ? void 0
                : a.find((e) => "market" === e.shop_style_type)) || e),
            Object(o.a)({}, this.buildThemeObj(e), {
              themeType: e.type,
              themeCSS: e.global_theme_vars || e.globalThemeVars || G(e.colors),
              shopStyleSettings: i,
            })
          );
        }
        buildThemeObj(e) {
          return e
            ? {
                themeColors: e.colors,
                themeIcon: e.icon,
                themeTag: e.tag,
                themeRadius: e.radius,
                themeButton: e.button,
              }
            : {};
        }
        transformThemeCSS(e) {
          var t,
            a,
            { colors: o, radius: n, tag: i, button: r } = e;
          return (
            G(o) +
            M(n, "--theme-radius-") +
            ((t = i),
            (a = ""),
            Object.keys(t).forEach((e) => {
              e.indexOf("brand-") > -1
                ? (a += "--" + e + ":" + t[e] + ";")
                : e.indexOf("tag-") > -1 &&
                  (a += "--theme-" + e + ":" + t[e] + ";");
            }),
            a) +
            (function (e) {
              return M(e, "--theme-");
            })(r)
          );
        }
        setCtxData(e) {
          Object.keys(e).forEach((t) => {
            this.ctx.data[t] = e[t];
          });
        }
      }
      F.lambdas = {
        hexToRgb: function (e) {
          var t = 0,
            a = 0,
            o = 0,
            n = (e) => parseInt(e, 16);
          if (3 === (e = e.slice(1)).length || 6 === e.length)
            return (
              3 === e.length
                ? ((t = 17 * n(e[0])), (a = 17 * n(e[1])), (o = 17 * n(e[2])))
                : ((t = n(e[1]) + 16 * n(e[0])),
                  (a = n(e[3]) + 16 * n(e[2])),
                  (o = n(e[5]) + 16 * n(e[4]))),
              [t, a, o]
            );
        },
        objectToCSS: M,
      };
      var z = a("xW8c"),
        H = {
          config: u,
          builtinBundle: {
            "@wsc-tee-weapp/shop-note-page-setup": class {
              constructor(e) {
                var { ctx: t } = e;
                (t.store = this.store),
                  (this.ctx = t),
                  (this.ctx.data.themeClass = j.themeClass),
                  (this.ctx.data.noteData = {}),
                  (this.ctx.data.theme = {}),
                  (this.ctx.data.noteGoodIds = []),
                  (this.ctx.data.thumbsStatus = 0),
                  (this.ctx.data.pageBgColor = "#fff"),
                  (this.ctx.data.noteType = S.b),
                  (this.ctx.data.noteId = ""),
                  (this.ctx.data.salesman = {}),
                  (this.ctx.data.noteAlias = ""),
                  (this.ctx.data.shopName = ""),
                  (this.ctx.data.showSubBtn = !1),
                  (this.ctx.data.subscribeStatus = !1),
                  (this.ctx.data.guideShow = !1),
                  (this.ctx.data.showNav = !1),
                  (this.ctx.data.dialogCustomStyle =
                    "background: transparent !important"),
                  (this.ctx.data.liveInfo = { hasLiving: !1, roomId: void 0 }),
                  (this.ctx.data.featureComponents = []),
                  (this.ctx.data.navigationbarConfigData = {
                    style_color_type: "global",
                    navigationbar_config_type: "global",
                  }),
                  (this.ctx.data.design = []),
                  (this.ctx.data.yunShareData = null);
              }
              beforePageMount(e) {
                this.initDesign(),
                  w.a.call(this, {
                    sst: 10,
                    gst: C.a.TINY_PAGE,
                    isUseRanta: !0,
                  }),
                  j.getShopInfo().then((t) => {
                    var { shopMetaInfo: a = {} } = t || {};
                    if (a.lock_status === S.c.LOCK)
                      return wx.redirectTo({
                        url: "/packages/common/lock/index",
                      });
                    var { noteAlias: o } = e.query || {};
                    (this.ctx.data.noteAlias = o),
                      o
                        ? (this.fetchSalesmanBaseData(),
                          this.fetchShopSubscribeSetting(),
                          this.fetchNoteData(o)
                            .then((e) => {
                              this.initNoteData(e);
                            })
                            .catch(() => {
                              Object(p.a)("页面参数错误");
                            }))
                        : Object(p.a)("页面参数错误");
                  });
              }
              setYZData(e) {
                Object.entries(e).forEach((e) => {
                  var [t, a] = e;
                  Object(_.a)(this.ctx.data, t, a);
                });
              }
              initDesign() {
                var { design: e } = I.a,
                  t = e.findIndex((e) => "config" === e.type);
                this.setYZData({ design: 0 === t ? e.slice(1) : e });
              }
              fetchNoteData(e) {
                return new Promise((t) => {
                  j.getShopInfo().then((a) => {
                    var { chainStoreInfo: n, kdt_id: i } = a,
                      { isRootShop: r = !1, isMultiOnlineShop: s = !1 } = n,
                      c = j.getKdtId(),
                      u = { noteAlias: e, targetKdtId: c || i };
                    s
                      ? r
                        ? j.once("app:chainstore:kdtid:update", (e) => {
                            var { kdtId: a } = e;
                            this.fetchLiveInfo(),
                              this.fetchShowcaseContainerData(
                                Object(o.a)({}, u, {
                                  targetKdtId: a,
                                  isChain: !0,
                                })
                              ),
                              this.getNoteDetailData(
                                Object(o.a)({}, u, {
                                  targetKdtId: a,
                                  isChain: !0,
                                })
                              ).then((e) => {
                                t(e);
                              });
                          })
                        : (this.fetchLiveInfo(),
                          this.fetchShowcaseContainerData(Object(o.a)({}, u)),
                          this.getNoteDetailData(Object(o.a)({}, u)).then(
                            (e) => {
                              t(e);
                            }
                          ))
                      : (this.fetchLiveInfo(),
                        this.getNoteDetailData(u).then((e) => {
                          t(e);
                        }),
                        this.fetchShowcaseContainerData(u));
                  });
                });
              }
              getNoteDetailData(e) {
                var {
                  noteAlias: t,
                  sourceKdtId: a,
                  targetKdtId: o,
                  isChain: n,
                } = e;
                return j
                  .request({
                    path: "/wscshop/shopnote/detail.json",
                    data: {
                      noteAlias: t,
                      sourceKdtId: a,
                      targetKdtId: o,
                      isChain: n,
                      adaptorComponents: v.a.join(","),
                    },
                  })
                  .then((e) => {
                    var t;
                    if (
                      0 !==
                      (null == e || null == (t = e.requestData)
                        ? void 0
                        : t.length)
                    )
                      return (this.noteDetailData = e), e;
                    Object(p.a)({ message: "店铺笔记已失效", duration: 1e3 }),
                      setTimeout(() => {
                        wx.switchTab({ url: "/pages/home/dashboard/index" });
                      }, 1e3);
                  })
                  .catch((e) => {
                    if (e && 302 === e.code) {
                      var { data: t } = e,
                        { location: a = "" } = t || {};
                      if (a && /^(\/?)pages|packages/.test(a))
                        return (
                          "/" !== a.slice(0, 1) && (a = "/" + a),
                          (a = g.a.add(a, this.options)),
                          wx.redirectTo({ url: a })
                        );
                    }
                  });
              }
              initNoteData(e) {
                if (e) {
                  if (e.isLocked)
                    return wx.redirectTo({
                      url: "/packages/common/lock/index",
                    });
                  if (e.noteData) {
                    var { noteData: t } = e;
                    this.setYZData({ noteId: t.noteId });
                    var a = this.ctx.env.route;
                    j.logger.performance("app", "pageshow"),
                      j.logger.performance("page", "pageshow", !1, a);
                    var { noteGoodIds: o } = e,
                      n =
                        t.headPhoto ||
                        Object(h.a)(t, "coverPhotos[0]") ||
                        Object(h.a)(t, "noteItemsBriefInfo[0].imageUrl"),
                      i = {
                        title: t.title,
                        showBrowseCount: t.showBrowseCount,
                        showThumbsUp: t.showThumbsUpCount,
                        thumbsUpCount: t.thumbsUpCount || 0,
                        browseCount: t.browseCount || 0,
                        publishTime: t.publishTime,
                        showPublishTime: t.showPublishTime,
                        templateId: t.templateId,
                        showEnterShop: t.showEnterShop,
                        noteId: t.noteId,
                        noteItemsBriefInfo: t.noteItemsBriefInfo,
                        sharePhoto: n,
                      };
                    (t.templateId !== S.b.KEEPER_TALK &&
                      t.templateId !== S.b.SHOP_CIRCLE &&
                      t.templateId !== S.b.SINGLE_PRODUCTION) ||
                      !t.showPublishTime ||
                      (i.showBottomTime = !0),
                      t.templateId === S.b.NEW_ARRIVAL
                        ? ((i.headPhoto = t.headPhoto),
                          (i.description = t.description),
                          this.setYZData({
                            noteData: i,
                            noteGoodIds: o,
                            thumbsStatus: t.userThumbsStatus || 0,
                          }))
                        : t.templateId === S.b.KEEPER_TALK
                        ? this.setYZData({
                            noteData: i,
                            thumbsStatus: t.userThumbsStatus || 0,
                          })
                        : t.templateId === S.b.SHOP_CIRCLE
                        ? ((i.description = t.description),
                          this.setYZData({
                            noteData: i,
                            noteGoodIds: o,
                            thumbsStatus: t.userThumbsStatus || 0,
                          }))
                        : t.templateId === S.b.SINGLE_PRODUCTION &&
                          ((i.description = t.description),
                          (i.highLights = t.highLights),
                          this.setYZData({
                            noteData: i,
                            thumbsStatus: t.userThumbsStatus || 0,
                            noteGoodIds: o,
                          })),
                      j.logger.log({
                        et: "custom",
                        ei: "shopnote",
                        en: "店铺笔记",
                        params: {
                          note_id: t.noteId,
                          note_type: t.noteTemplateType,
                          note_model_id: t.templateId,
                          spm: "shopnote." + t.noteId,
                        },
                      });
                  }
                }
              }
              fetchSalesmanBaseData() {
                j.carmen({
                  api: "youzan.salesman.wap.account/1.0.0/get",
                  success: (e) => {
                    this.setYZData({
                      "salesman.openSalesman": e.openSalesman,
                      "salesman.icon": e.settingIcon,
                      "salesman.name": e.settingName,
                      "salesman.isSalesman": e.salesman,
                      "salesman.alias": e.sls,
                    });
                  },
                });
              }
              fetchShopSubscribeSetting() {
                Object(b.e)().then((e) => {
                  1 === e.status &&
                    1 === e.weappPush &&
                    (this.setYZData({ showSubBtn: !0, showNav: !0 }),
                    Object(b.d)().then((e) => {
                      e.value && this.setYZData({ subscribeStatus: !0 });
                    }));
                });
              }
              fetchLiveInfo() {
                var e = this;
                return Object(l.a)(function* () {
                  var t = j.getKdtId(),
                    a = yield Object(b.b)(t);
                  return (
                    e.setYZData({
                      liveInfo: { hasLiving: a.hasLiving, roomId: a.roomId },
                    }),
                    a
                  );
                })();
              }
              fetchShowcaseContainerData(e) {
                var {
                  noteAlias: t,
                  sourceKdtId: a,
                  targetKdtId: o,
                  isChain: n,
                } = e;
                j.request({
                  path: "/wscdeco/biz-component/shop-note.json",
                  method: "GET",
                  data: {
                    noteAlias: t,
                    sourceKdtId: a,
                    targetKdtId: o,
                    isChain: n,
                    stage: 100,
                  },
                })
                  .then((e) => {
                    var t = e.components.map(
                      (e) => (
                        ("rich_text" !== e.type &&
                          "rich_text_xss" !== e.type) ||
                          (e.externalStyle = "padding: 0 15px"),
                        "goods" === e.type && (e.preventBuyClickItem = !0),
                        e
                      )
                    );
                    (t = Object(x.b)(
                      e.components,
                      x.a.SHOP_NOTE,
                      this.ctx.data.noteData.noteId
                    )),
                      this.setYZData({ featureComponents: t });
                  })
                  .catch(() => {});
              }
              onPageShow() {
                this.noteId &&
                  this.enterpageLog([this.ctx.env.route, this.noteId, {}]);
              }
              enterpageLog(e, t) {
                ((this.__firstShow = !1),
                (this._logParams = e || this._logParams || []),
                (this._logTitle = t || this._logTitle || ""),
                this._logTitle) && getApp().logger.setPageName(this._logTitle);
                Object(E.d)(...this._logParams);
              }
              onShareAppMessage() {
                var {
                    noteAlias: e,
                    noteData: t,
                    yunShareData: a,
                  } = this.ctx.data,
                  { title: n, description: i } = t || {},
                  r = Object(h.a)(this.ctx.data.shop, "shopName", ""),
                  s = i || r + "的精彩内容分享给你，快来看一看吧",
                  c = t,
                  u = Object(h.a)(c, "sharePhoto"),
                  d = g.a.add(
                    "packages/shop/shopnote/detail/index",
                    Object(o.a)({ noteAlias: e, is_share: "1" }, T.i)
                  );
                return (
                  (u = /^(http|https):\/\//.test(u) ? u : "https:" + u),
                  this.clickShareLog(),
                  a || { title: n, desc: s, path: d, imageUrl: u }
                );
              }
              clickShareLog() {
                var e = { banner_id: Object(y.a)("share") },
                  t = Object(m.b)("click_content", e);
                Object(m.a)(t);
              }
              handleEnterLiveRoom() {
                var { liveInfo: e = {} } = this;
                wx.navigateTo({
                  url: "/packages/weapp-live/room/index?id=" + e.roomId,
                });
              }
              enterShop() {
                f.a.switchTab({ url: "/packages/home/dashboard/index" });
              }
            },
            "@wsc-tee-decorate/jump-link": P.a,
            "@ext-tee-wsc-decorate/page-style": k.a,
            "@ext-tee-wsc-decorate/theme-color": F,
            "@wsc-tee-decorate/showcase-container": z.a,
          },
        },
        W = d.default.getGlobal("ranta-app-runtime"),
        Y = W.getPageOptions({
          rantaOptions: Object(o.a)(
            { page: "/packages/shop/shopnote/detail/index" },
            H
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: W,
          tee: d.default,
          usedLifecycles: [
            "onPullDownRefresh",
            "onReachBottom",
            "onPageShow",
            "onPageHide",
            "beforePageCreate",
            "beforePageMount",
            "onShareAppMessage",
            "onPageScroll",
          ],
        });
      d.default.page({ mixins: [Y] });
    },
    "2EQx": function (e, t, a) {
      var o = a("9aUh");
      e.exports = function (e) {
        return e == e && !o(e);
      };
    },
    "2ncY": function (e, t, a) {
      a.d(t, "b", function () {
        return i;
      }),
        a.d(t, "a", function () {
          return r;
        }),
        a.d(t, "g", function () {
          return c;
        }),
        a.d(t, "e", function () {
          return u;
        }),
        a.d(t, "f", function () {
          return d;
        }),
        a.d(t, "c", function () {
          return l;
        }),
        a.d(t, "d", function () {
          return h;
        }),
        a.d(t, "h", function () {
          return g;
        });
      var o = a("we3t"),
        n = 0,
        i = n++,
        r = n++,
        s = (n++, n++),
        c = n++,
        u = n++,
        d = n++,
        l = n++;
      function p(e, t) {
        return o.b.add("/pages/common/webview-page/index", {
          src: encodeURIComponent(o.b.add(e, t)),
        });
      }
      var h = {
        [i]: "/packages/home/dashboard/index",
        [r]: "/pages/goods/detail/index",
        [s]: "/packages/ump/membercard-groupon/index",
        [c]: "/packages/salesman/task-detail/index",
        [l]: "/packages/salesman/zone/material/index",
        [u]: (e) => p("/wscump/salesman/center-v2/level", e),
        [d]: (e) => p("/wscump/salesman/center-v2/new-level", e),
      };
      function g(e, t) {
        void 0 === t && (t = {});
        var a = h[e];
        if ("function" == typeof a) return o.b.add(a(t), t);
        if (!a || "string" != typeof a)
          throw Error("接收到一个错误的 " + e + "，请传入正确的 pageName");
        return o.b.add(a, t);
      }
    },
    "52+L": function (e, t, a) {},
    "5Avs": function (e, t) {
      e.exports = function (e, t) {
        for (var a = -1, o = null == e ? 0 : e.length; ++a < o; )
          if (t(e[a], a, e)) return !0;
        return !1;
      };
    },
    "61tF": function (e) {
      e.exports = JSON.parse("{}");
    },
    "6MkT": function (e, t) {
      e.exports = {
        d: "featureComponents;2;pageTitle;2;navigationBarConfigData;2",
        w: "SignInPage",
        wc: "ShowcaseContainer",
        li: "beforePageMount;onShareAppMessage",
      };
    },
    "6TGQ": function (e, t, a) {
      var o = a("gwRl"),
        n = a("PqlX");
      e.exports = function (e, t, a) {
        var i = t(e);
        return n(e) ? i : o(i, a(e));
      };
    },
    "6VDN": function (e, t) {
      e.exports = {
        d: "featureComponents;2;groupPageTitle;2;navigationBarConfigData;2",
        w: "GroupPage",
        wc: "ShowcaseContainer",
        li: "beforePageMount",
      };
    },
    "7CXW": function (e, t) {
      e.exports = {
        d: "searchPlaceholder;6",
        e: "search-focus;search-change;search-change:debounce;search-cancel",
        w: "Main",
        wd: "Main",
      };
    },
    "7dh9": function (e, t, a) {
      a.d(t, "a", function () {
        return p;
      });
      var o,
        n,
        i,
        r,
        s,
        c = {
          S: [
            ["411200", "三门峡市", "Sanmenxia", 111.194099, 34.777338, "0398"],
            ["350400", "三明市", "Sanming", 117.635001, 26.265444, "0598"],
            ["460300", "三沙市", "Sansha", 112.34882, 16.831039, "2898"],
            ["460200", "三亚市", "Sanya", 109.508268, 18.247872, "0899"],
            ["310000", "上海市", "Shanghai", 121.472644, 31.231706, "021"],
            ["611000", "商洛市", "Shangluo", 109.939776, 33.868319, "0914"],
            ["411400", "商丘市", "Shangqiu", 115.650497, 34.437054, "0370"],
            ["361100", "上饶市", "Shangrao", 117.971185, 28.44442, "0793"],
            ["542200", "山南地区", "Shannan", 91.766529, 29.236023, "0893"],
            ["440500", "汕头市", "Shantou", 116.708463, 23.37102, "0754"],
            ["441500", "汕尾市", "Shanwei", 115.364238, 22.774485, "0660"],
            ["440200", "韶关市", "Shaoguan", 113.591544, 24.801322, "0751"],
            ["330600", "绍兴市", "Shaoxing", 120.582112, 29.997117, "0575"],
            ["430500", "邵阳市", "Shaoyang", 111.46923, 27.237842, "0739"],
            [
              "429021",
              "神农架林区",
              "Shennongjia",
              110.671525,
              31.744449,
              "1719",
            ],
            ["210100", "沈阳市", "Shenyang", 123.429096, 41.796767, "024"],
            ["440300", "深圳市", "Shenzhen", 114.085947, 22.547, "0755"],
            ["659001", "石河子市", "Shihezi", 86.041075, 44.305886, "0993"],
            [
              "130100",
              "石家庄市",
              "Shijiazhuang",
              114.502461,
              38.045474,
              "0311",
            ],
            ["420300", "十堰市", "Shiyan", 110.785239, 32.647017, "0719"],
            ["640200", "石嘴山市", "Shizuishan", 106.376173, 39.01333, "0952"],
            [
              "230500",
              "双鸭山市",
              "Shuangyashan",
              131.157304,
              46.643442,
              "0469",
            ],
            ["140600", "朔州市", "Shuozhou", 112.433387, 39.331261, "0349"],
            ["220300", "四平市", "Siping", 124.370785, 43.170344, "0434"],
            ["220700", "松原市", "Songyuan", 124.823608, 45.118243, "0438"],
            ["231200", "绥化市", "Suihua", 126.99293, 46.637393, "0455"],
            ["510900", "遂宁市", "Suining", 105.571331, 30.513311, "0825"],
            ["421300", "随州市", "Suizhou", 113.37377, 31.717497, "0722"],
            ["321300", "宿迁市", "Suqian", 118.293328, 33.945154, "0527"],
            ["320500", "苏州市", "Suzhou", 120.619585, 31.299379, "0512"],
            ["341300", "宿州市", "Suzhou", 116.984084, 33.633891, "0557"],
            ["341300", "双河市", "Shuanghe", 82.353656, 44.840524, "1909"],
          ],
          T: [
            ["370900", "泰安市", "Tai'an", 117.129063, 36.194968, "0538"],
            ["120000", "天津市", "Tianjin", 117.190182, 39.125596, "022"],
            [
              "710000",
              "台湾省",
              "Taiwan Province",
              121.509062,
              25.044332,
              "1886",
            ],
            ["140100", "太原市", "Taiyuan", 112.549248, 37.857014, "0351"],
            ["331000", "台州市", "Taizhou", 121.428599, 28.661378, "0576"],
            ["321200", "泰州市", "Taizhou", 119.915176, 32.484882, "0523"],
            ["130200", "唐山市", "Tangshan", 118.175393, 39.635113, "0315"],
            ["429006", "天门市", "Tianmen", 113.165862, 30.653061, "1728"],
            ["620500", "天水市", "Tianshui", 105.724998, 34.578529, "0938"],
            ["211200", "铁岭市", "Tieling", 123.844279, 42.290585, "0410"],
            ["610200", "铜川市", "Tongchuan", 108.963122, 34.90892, "0919"],
            ["220500", "通化市", "Tonghua", 125.936501, 41.721177, "0435"],
            ["150500", "通辽市", "Tongliao", 122.263119, 43.617429, "0475"],
            ["340700", "铜陵市", "Tongling", 117.816576, 30.929935, "0562"],
            ["520600", "铜仁市", "Tongren", 109.191555, 27.718346, "0856"],
            ["659003", "图木舒克市", "Tumxuk", 79.077978, 39.867316, "1998"],
            ["469022", "屯昌县", "Tunchang", 110.102773, 19.362916, "1892"],
            ["652100", "吐鲁番市", "Turpan", 89.184078, 42.947613, "0995"],
            ["659006", "铁门关市", "Tiemenguan", 85.501218, 41.827251, "1996"],
            ["654200", "塔城地区", "Qoqek", 82.985732, 46.746301, "0901"],
          ],
          Q: [
            [
              "522600",
              "黔东南苗族侗族自治州",
              "Qiandongnan",
              107.977488,
              26.583352,
              "0855",
            ],
            ["429005", "潜江市", "Qianjiang", 112.896866, 30.421215, "2728"],
            [
              "522700",
              "黔南布依族苗族自治州",
              "Qiannan",
              107.517156,
              26.258219,
              "0854",
            ],
            [
              "522300",
              "黔西南布依族苗族自治州",
              "Qianxinan",
              104.897971,
              25.08812,
              "0859",
            ],
            ["370200", "青岛市", "Qingdao", 120.369557, 36.094406, "0532"],
            ["621000", "庆阳市", "Qingyang", 107.638372, 35.734218, "0934"],
            ["441800", "清远市", "Qingyuan", 113.036779, 23.704188, "0763"],
            [
              "130300",
              "秦皇岛市",
              "Qinhuangdao",
              119.586579,
              39.942531,
              "0335",
            ],
            ["450700", "钦州市", "Qinzhou", 108.624175, 21.967127, "0777"],
            ["469002", "琼海市", "Qionghai", 110.466785, 19.246011, "1894"],
            [
              "469030",
              "琼中黎族苗族自治县",
              "Qiongzhong",
              109.839996,
              19.03557,
              "1899",
            ],
            ["230200", "齐齐哈尔市", "Qiqihar", 123.953486, 47.348079, "0452"],
            ["230900", "七台河市", "Qitaihe", 131.015584, 45.771266, "0464"],
            ["350500", "泉州市", "Quanzhou", 118.589421, 24.908853, "0595"],
            ["530300", "曲靖市", "Qujing", 103.797851, 25.501557, "0874"],
            ["330800", "衢州市", "Quzhou", 118.87263, 28.941708, "0570"],
          ],
          H: [
            [
              "632200",
              "海北藏族自治州",
              "Haibei",
              100.901059,
              36.959435,
              "0970",
            ],
            ["630200", "海东市", "Haidong", 102.10327, 36.502916, "0972"],
            ["460100", "海口市", "Haikou", 110.33119, 20.031971, "0898"],
            [
              "632500",
              "海南藏族自治州",
              "Hainan",
              100.619542,
              36.280353,
              "0974",
            ],
            [
              "632800",
              "海西蒙古族藏族自治州",
              "Haixi",
              97.370785,
              37.374663,
              "0977",
            ],
            ["130400", "邯郸市", "Handan", 114.490686, 36.612273, "0310"],
            ["330100", "杭州市", "Hangzhou", 120.153576, 30.287459, "0571"],
            ["610700", "汉中市", "Hanzhong", 107.028621, 33.077668, "0916"],
            ["230100", "哈尔滨市", "Harbin", 126.642464, 45.756967, "0451"],
            ["410600", "鹤壁市", "Hebi", 114.295444, 35.748236, "0392"],
            ["451200", "河池市", "Hechi", 108.062105, 24.695899, "0778"],
            ["340100", "合肥市", "Hefei", 117.283042, 31.86119, "0551"],
            ["230400", "鹤岗市", "Hegang", 130.277487, 47.332085, "0468"],
            ["231100", "黑河市", "Heihe", 127.499023, 50.249585, "0456"],
            ["131100", "衡水市", "Hengshui", 115.665993, 37.735097, "0318"],
            ["430400", "衡阳市", "Hengyang", 112.607693, 26.900358, "0734"],
            ["441600", "河源市", "Heyuan", 114.697802, 23.746266, "0762"],
            ["371700", "菏泽市", "Heze", 115.469381, 35.246531, "0530"],
            ["451100", "贺州市", "Hezhou", 111.552056, 24.414141, "1774"],
            ["150100", "呼和浩特市", "Hohhot", 111.670801, 40.818311, "0471"],
            [
              "532500",
              "红河哈尼族彝族自治州",
              "Honghe",
              103.384182,
              23.366775,
              "0873",
            ],
            ["653200", "和田地区", "Hotan", 79.92533, 37.110687, "0903"],
            ["320800", "淮安市", "Huai'an", 119.021265, 33.597506, "0517"],
            ["340600", "淮北市", "Huaibei", 116.794664, 33.971707, "0561"],
            ["431200", "怀化市", "Huaihua", 109.97824, 27.550082, "0745"],
            ["340400", "淮南市", "Huainan", 117.025449, 32.645947, "0554"],
            ["421100", "黄冈市", "Huanggang", 114.879365, 30.447711, "0713"],
            [
              "632300",
              "黄南藏族自治州",
              "Huangnan",
              102.019988,
              35.517744,
              "0973",
            ],
            ["341000", "黄山市", "Huangshan", 118.317325, 29.709239, "0559"],
            ["420200", "黄石市", "Huangshi", 115.077048, 30.220074, "0714"],
            ["441300", "惠州市", "Huizhou", 114.412599, 23.079404, "0752"],
            ["211400", "葫芦岛市", "Huludao", 120.856394, 40.755572, "0429"],
            ["150700", "呼伦贝尔市", "Hulunber", 119.758168, 49.215333, "0470"],
            ["330500", "湖州市", "Huzhou", 120.102398, 30.867198, "0572"],
            ["652200", "哈密地区", "Kumul", 93.51316, 42.833248, "0902"],
          ],
          X: [
            [
              "810000",
              "香港特別行政區",
              "Hong Kong",
              114.173355,
              22.320048,
              "1852",
            ],
            ["610100", "西安市", "Xi'an", 108.948024, 34.263161, "029"],
            ["350200", "厦门市", "Xiamen", 118.11022, 24.490474, "0592"],
            ["430300", "湘潭市", "Xiangtan", 112.925083, 27.846725, "0732"],
            [
              "433100",
              "湘西土家族苗族自治州",
              "Xiangxi",
              109.739735,
              28.314296,
              "0743",
            ],
            ["420600", "襄阳市", "Xiangyang", 112.144146, 32.042426, "0710"],
            ["421200", "咸宁市", "Xianning", 114.328963, 29.832798, "0715"],
            ["429004", "仙桃市", "Xiantao", 113.453974, 30.364953, "0728"],
            ["610400", "咸阳市", "Xianyang", 108.705117, 34.333439, "0910"],
            ["420900", "孝感市", "Xiaogan", 113.926655, 30.926423, "0712"],
            [
              "152500",
              "锡林郭勒盟",
              "Xilin Gol",
              116.090996,
              43.944018,
              "0479",
            ],
            ["130500", "邢台市", "Xingtai", 114.508851, 37.0682, "0319"],
            ["630100", "西宁市", "Xining", 101.778916, 36.623178, "0971"],
            ["410700", "新乡市", "Xinxiang", 113.883991, 35.302616, "0373"],
            ["411500", "信阳市", "Xinyang", 114.075031, 32.123274, "0376"],
            ["360500", "新余市", "Xinyu", 114.930835, 27.810834, "0790"],
            ["140900", "忻州市", "Xinzhou", 112.733538, 38.41769, "0350"],
            [
              "460321",
              "西沙群岛",
              "Xisha Islands",
              112.025528,
              16.331342,
              "1895",
            ],
            [
              "532800",
              "西双版纳傣族自治州",
              "Xishuangbanna",
              100.797941,
              22.001724,
              "0691",
            ],
            ["341800", "宣城市", "Xuancheng", 118.757995, 30.945667, "0563"],
            ["411000", "许昌市", "Xuchang", 113.826063, 34.022956, "0374"],
            ["320300", "徐州市", "Xuzhou", 117.184811, 34.261792, "0516"],
            ["152200", "兴安盟", "Hinggan", 122.070317, 46.076268, "0482"],
          ],
          B: [
            ["220800", "白城市", "Baicheng", 122.841114, 45.619026, "0436"],
            ["451000", "百色市", "Baise", 106.616285, 23.897742, "0776"],
            [
              "469025",
              "白沙黎族自治县",
              "Baisha",
              109.452606,
              19.224584,
              "0802",
            ],
            ["220600", "白山市", "Baishan", 126.427839, 41.942505, "0439"],
            ["620400", "白银市", "Baiyin", 104.173606, 36.54568, "0943"],
            ["130600", "保定市", "Baoding", 115.482331, 38.867657, "0312"],
            ["610300", "宝鸡市", "Baoji", 107.14487, 34.369315, "0917"],
            ["530500", "保山市", "Baoshan", 99.167133, 25.111802, "0875"],
            [
              "469029",
              "保亭黎族苗族自治县",
              "Baoting",
              109.70245,
              18.636371,
              "0801",
            ],
            ["150200", "包头市", "Baotou", 109.840405, 40.658168, "0472"],
            [
              "150800",
              "巴彦淖尔市",
              "Bayan Nur",
              107.416959,
              40.757402,
              "0478",
            ],
            [
              "652800",
              "巴音郭楞蒙古自治州",
              "Bayingol",
              86.150969,
              41.768552,
              "0996",
            ],
            ["511900", "巴中市", "Bazhong", 106.753669, 31.858809, "0827"],
            ["450500", "北海市", "Beihai", 109.119254, 21.473343, "0779"],
            ["110000", "北京市", "Beijing", 116.405285, 39.904989, "010"],
            ["340300", "蚌埠市", "Bengbu", 117.36237, 32.934037, "0552"],
            ["210500", "本溪市", "Benxi", 123.770519, 41.297909, "0414"],
            ["520500", "毕节市", "Bijie", 105.28501, 27.301693, "0857"],
            ["371600", "滨州市", "Binzhou", 118.016974, 37.383542, "0543"],
            [
              "652700",
              "博尔塔拉蒙古自治州",
              "Bortala",
              82.074778,
              44.903258,
              "0909",
            ],
            ["341600", "亳州市", "Bozhou", 115.782939, 33.869338, "0558"],
            ["659005", "北屯市", "Beitun", 87.824932, 47.353177, "1906"],
          ],
          Z: [
            ["370400", "枣庄市", "Zaozhuang", 117.557964, 34.856424, "0632"],
            [
              "430800",
              "张家界市",
              "Zhangjiajie",
              110.479921,
              29.127401,
              "0744",
            ],
            [
              "130700",
              "张家口市",
              "Zhangjiakou",
              114.884091,
              40.811901,
              "0313",
            ],
            ["620700", "张掖市", "Zhangye", 100.455472, 38.932897, "0936"],
            ["350600", "漳州市", "Zhangzhou", 117.661801, 24.510897, "0596"],
            ["440800", "湛江市", "Zhanjiang", 110.405529, 21.195338, "0759"],
            ["441200", "肇庆市", "Zhaoqing", 112.472529, 23.051546, "0758"],
            ["530600", "昭通市", "Zhaotong", 103.717216, 27.336999, "0870"],
            ["410100", "郑州市", "Zhengzhou", 113.665412, 34.757975, "0371"],
            ["321100", "镇江市", "Zhenjiang", 119.452753, 32.204402, "0511"],
            [
              "460323",
              "中沙群岛的岛礁及其海域",
              "Zhongsha Islands",
              117.740071,
              15.112856,
              "2801",
            ],
            ["442000", "中山市", "Zhongshan", 113.382391, 22.521113, "0760"],
            ["640500", "中卫市", "Zhongwei", 105.189568, 37.514951, "1953"],
            ["411600", "周口市", "Zhoukou", 114.649653, 33.620357, "0394"],
            ["330900", "舟山市", "Zhoushan", 122.106863, 30.016028, "0580"],
            ["440400", "珠海市", "Zhuhai", 113.552724, 22.255899, "0756"],
            ["411700", "驻马店市", "Zhumadian", 114.024736, 32.980169, "0396"],
            ["430200", "株洲市", "Zhuzhou", 113.151737, 27.835806, "0733"],
            ["370300", "淄博市", "Zibo", 118.047648, 36.814939, "0533"],
            ["510300", "自贡市", "Zigong", 104.773447, 29.352765, "0813"],
            ["512000", "资阳市", "Ziyang", 104.641917, 30.122211, "0832"],
            ["520300", "遵义市", "Zunyi", 106.937265, 27.706626, "0852"],
          ],
          C: [
            ["130900", "沧州市", "Cangzhou", 116.857461, 38.310582, "0317"],
            ["220100", "长春市", "Changchun", 125.3245, 43.886841, "0431"],
            ["430700", "常德市", "Changde", 111.691347, 29.040225, "0736"],
            [
              "652300",
              "昌吉回族自治州",
              "Changji",
              87.304012,
              44.014577,
              "0994",
            ],
            [
              "469026",
              "昌江黎族自治县",
              "Changjiang",
              109.053351,
              19.260968,
              "0803",
            ],
            ["430100", "长沙市", "Changsha", 112.982279, 28.19409, "0731"],
            ["140400", "长治市", "Changzhi", 113.113556, 36.191112, "0355"],
            ["320400", "常州市", "Changzhou", 119.946973, 31.772752, "0519"],
            ["211300", "朝阳市", "Chaoyang", 120.451176, 41.576758, "0421"],
            ["445100", "潮州市", "Chaozhou", 116.632301, 23.661701, "0768"],
            ["130800", "承德市", "Chengde", 117.939152, 40.976204, "0314"],
            ["510100", "成都市", "Chengdu", 104.065735, 30.659462, "028"],
            ["469023", "澄迈县", "Chengmai", 110.007147, 19.737095, "0804"],
            ["431000", "郴州市", "Chenzhou", 113.032067, 25.793589, "0735"],
            ["150400", "赤峰市", "Chifeng", 118.956806, 42.275317, "0476"],
            ["341700", "池州市", "Chizhou", 117.489157, 30.656037, "0566"],
            ["500000", "重庆市", "Chongqing", 106.504962, 29.533155, "023"],
            ["451400", "崇左市", "Chongzuo", 107.353926, 22.404108, "1771"],
            [
              "532300",
              "楚雄彝族自治州",
              "Chuxiong",
              101.546046,
              25.041988,
              "0878",
            ],
            ["341100", "滁州市", "Chuzhou", 118.316264, 32.303627, "0550"],
            ["540300", "昌都市", "Qamdo", 97.178452, 31.136875, "0895"],
          ],
          L: [
            ["451300", "来宾市", "Laibin", 109.229772, 23.733766, "1772"],
            ["371200", "莱芜市", "Laiwu", 117.677736, 36.214397, "0634"],
            ["131000", "廊坊市", "Langfang", 116.713873, 39.529244, "0316"],
            ["620100", "兰州市", "Lanzhou", 103.823557, 36.058039, "0931"],
            [
              "469027",
              "乐东黎族自治县",
              "Ledong",
              109.175444,
              18.74758,
              "2802",
            ],
            ["511100", "乐山市", "Leshan", 103.761263, 29.582024, "0833"],
            ["540100", "拉萨市", "Lhasa", 91.132212, 29.660361, "0891"],
            [
              "513400",
              "凉山彝族自治州",
              "Liangshan",
              102.258746,
              27.886762,
              "0834",
            ],
            [
              "320700",
              "连云港市",
              "Lianyungang",
              119.178821,
              34.600018,
              "0518",
            ],
            ["371500", "聊城市", "Liaocheng", 115.980367, 36.456013, "0635"],
            ["211000", "辽阳市", "Liaoyang", 123.18152, 41.269402, "0419"],
            ["220400", "辽源市", "Liaoyuan", 125.145349, 42.902692, "0437"],
            ["530700", "丽江市", "Lijiang", 100.233026, 26.872108, "0888"],
            ["530900", "临沧市", "Lincang", 100.08697, 23.886567, "0883"],
            ["141000", "临汾市", "Linfen", 111.517973, 36.08415, "0357"],
            ["469024", "临高县", "Lingao", 109.687697, 19.908293, "1896"],
            [
              "469028",
              "陵水黎族自治县",
              "Lingshui",
              110.037218,
              18.505006,
              "0809",
            ],
            [
              "622900",
              "临夏回族自治州",
              "Linxia",
              103.212006,
              35.599446,
              "0930",
            ],
            ["371300", "临沂市", "Linyi", 118.326443, 35.065282, "0539"],
            ["331100", "丽水市", "Lishui", 119.921786, 28.451993, "0578"],
            ["520200", "六盘水市", "Liupanshui", 104.846743, 26.584643, "0858"],
            ["450200", "柳州市", "Liuzhou", 109.411703, 24.314617, "0772"],
            ["621200", "陇南市", "Longnan", 104.929379, 33.388598, "2935"],
            ["350800", "龙岩市", "Longyan", 117.02978, 25.091603, "0597"],
            ["431300", "娄底市", "Loudi", 112.008497, 27.728136, "0738"],
            ["341500", "六安市", "Lu'an", 116.507676, 31.752889, "0564"],
            ["411100", "漯河市", "Luohe", 114.026405, 33.575855, "0395"],
            ["410300", "洛阳市", "Luoyang", 112.434468, 34.663041, "0379"],
            ["510500", "泸州市", "Luzhou", 105.443348, 28.889138, "0830"],
            ["141100", "吕梁市", "Lvliang", 111.134335, 37.524366, "0358"],
            ["542600", "林芝市", "Nyingchi", 94.362348, 29.654693, "0894"],
          ],
          D: [
            [
              "232700",
              "大兴安岭地区",
              "Da Hinggan Ling",
              124.711526,
              52.335262,
              "0457",
            ],
            ["532900", "大理白族自治州", "Dali", 100.240037, 25.592765, "0872"],
            ["210200", "大连市", "Dalian", 121.618622, 38.91459, "0411"],
            ["210600", "丹东市", "Dandong", 124.383044, 40.124296, "0415"],
            ["460400", "儋州市", "Danzhou", 109.576782, 19.517486, "0805"],
            ["230600", "大庆市", "Daqing", 125.11272, 46.590734, "0459"],
            ["140200", "大同市", "Datong", 113.295259, 40.09031, "0352"],
            ["511700", "达州市", "Dazhou", 107.502262, 31.209484, "0818"],
            [
              "533100",
              "德宏傣族景颇族自治州",
              "Dehong",
              98.578363,
              24.436694,
              "0692",
            ],
            ["533400", "迪庆藏族自治州", "Deqen", 99.706463, 27.826853, "0887"],
            ["510600", "德阳市", "Deyang", 104.398651, 31.127991, "0838"],
            ["371400", "德州市", "Dezhou", 116.307428, 37.453968, "0534"],
            ["469021", "定安县", "Ding'an", 110.323959, 19.699211, "0806"],
            ["621100", "定西市", "Dingxi", 104.626294, 35.579578, "0932"],
            ["469007", "东方市", "Dongfang", 108.653789, 19.10198, "0807"],
            ["441900", "东莞市", "Dongguan", 113.760234, 23.048884, "0769"],
            ["370500", "东营市", "Dongying", 118.4963, 37.461266, "0546"],
          ],
          Y: [
            ["511800", "雅安市", "Ya'an", 103.001033, 29.987722, "0835"],
            ["610600", "延安市", "Yan'an", 109.49081, 36.596537, "0911"],
            [
              "222400",
              "延边朝鲜族自治州",
              "Yanbian",
              129.513228,
              42.904823,
              "1433",
            ],
            ["320900", "盐城市", "Yancheng", 120.139998, 33.377631, "0515"],
            ["441700", "阳江市", "Yangjiang", 111.975107, 21.859222, "0662"],
            ["140300", "阳泉市", "Yangquan", 113.583285, 37.861188, "0353"],
            ["321000", "扬州市", "Yangzhou", 119.421003, 32.393159, "0514"],
            ["370600", "烟台市", "Yantai", 121.391382, 37.539297, "0535"],
            ["511500", "宜宾市", "Yibin", 104.630825, 28.760189, "0831"],
            ["420500", "宜昌市", "Yichang", 111.290843, 30.702636, "0717"],
            ["360900", "宜春市", "Yichun", 114.391136, 27.8043, "0795"],
            ["230700", "伊春市", "Yichun", 128.899396, 47.724775, "0458"],
            ["640100", "银川市", "Yinchuan", 106.278179, 38.46637, "0951"],
            ["210800", "营口市", "Yingkou", 122.235151, 40.667432, "0417"],
            ["360600", "鹰潭市", "Yingtan", 117.033838, 28.238638, "0701"],
            ["430900", "益阳市", "Yiyang", 112.355042, 28.570066, "0737"],
            ["431100", "永州市", "Yongzhou", 111.608019, 26.434516, "0746"],
            ["430600", "岳阳市", "Yueyang", 113.132855, 29.37029, "0730"],
            ["450900", "玉林市", "Yulin", 110.154393, 22.63136, "0775"],
            ["610800", "榆林市", "Yulin", 109.741193, 38.290162, "0912"],
            ["140800", "运城市", "Yuncheng", 111.003957, 35.022778, "0359"],
            ["445300", "云浮市", "Yunfu", 112.044439, 22.929801, "0766"],
            ["632700", "玉树藏族自治州", "Yushu", 97.008522, 33.004049, "0976"],
            ["530400", "玉溪市", "Yuxi", 102.543907, 24.350461, "0877"],
            ["654000", "伊犁哈萨克自治州", "Ili", 81.317946, 43.92186, "0999"],
          ],
          J: [
            ["360800", "吉安市", "Ji'an", 114.986373, 27.111699, "0796"],
            ["230800", "佳木斯市", "Jiamusi", 130.361634, 46.809606, "0454"],
            ["440700", "江门市", "Jiangmen", 113.094942, 22.590431, "0750"],
            ["410800", "焦作市", "Jiaozuo", 113.238266, 35.23904, "0391"],
            ["330400", "嘉兴市", "Jiaxing", 120.750865, 30.762653, "0573"],
            ["620200", "嘉峪关市", "Jiayuguan", 98.277304, 39.786529, "1937"],
            ["445200", "揭阳市", "Jieyang", 116.355733, 23.543778, "0663"],
            ["220200", "吉林市", "Jilin", 126.55302, 43.843577, "0432"],
            ["370100", "济南市", "Jinan", 117.000923, 36.675807, "0531"],
            ["620300", "金昌市", "Jinchang", 102.187888, 38.514238, "0935"],
            ["140500", "晋城市", "Jincheng", 112.851274, 35.497553, "0356"],
            ["360200", "景德镇市", "Jingdezhen", 117.214664, 29.29256, "0798"],
            ["420800", "荆门市", "Jingmen", 112.204251, 31.03542, "0724"],
            ["421000", "荆州市", "Jingzhou", 112.23813, 30.326857, "0716"],
            ["330700", "金华市", "Jinhua", 119.649506, 29.089524, "0579"],
            ["370800", "济宁市", "Jining", 116.587245, 35.415393, "0537"],
            ["140700", "晋中市", "Jinzhong", 112.736465, 37.696495, "0354"],
            ["210700", "锦州市", "Jinzhou", 121.135742, 41.119269, "0416"],
            ["360400", "九江市", "Jiujiang", 115.992811, 29.712034, "0792"],
            ["620900", "酒泉市", "Jiuquan", 98.510795, 39.744023, "0937"],
            ["230300", "鸡西市", "Jixi", 130.975966, 45.300046, "0467"],
            ["419001", "济源市", "Jiyuan", 112.590047, 35.090378, "1391"],
          ],
          W: [
            ["650100", "乌鲁木齐市", "Urumqi", 87.617733, 43.792818, "0991"],
            ["150900", "乌兰察布市", "Ulanqab", 113.114543, 41.034126, "0474"],
            ["469006", "万宁市", "Wanning", 110.388793, 18.796216, "1898"],
            ["370700", "潍坊市", "Weifang", 119.107078, 36.70925, "0536"],
            ["371000", "威海市", "Weihai", 122.116394, 37.509691, "0631"],
            ["610500", "渭南市", "Weinan", 109.502882, 34.499381, "0913"],
            ["469005", "文昌市", "Wenchang", 110.753975, 19.612986, "1893"],
            [
              "532600",
              "文山壮族苗族自治州",
              "Wenshan",
              104.24401,
              23.36951,
              "0876",
            ],
            ["330300", "温州市", "Wenzhou", 120.672111, 28.000575, "0577"],
            ["150300", "乌海市", "Wuhai", 106.825563, 39.673734, "0473"],
            ["420100", "武汉市", "Wuhan", 114.298572, 30.584355, "027"],
            ["340200", "芜湖市", "Wuhu", 118.376451, 31.326319, "0553"],
            ["659004", "五家渠市", "Wujiaqu", 87.526884, 44.167401, "1994"],
            ["620600", "武威市", "Wuwei", 102.634697, 37.929996, "1935"],
            ["320200", "无锡市", "Wuxi", 120.301663, 31.574729, "0510"],
            ["469001", "五指山市", "Wuzhishan", 109.516662, 18.776921, "1897"],
            ["640300", "吴忠市", "Wuzhong", 106.199409, 37.986165, "0953"],
            ["450400", "梧州市", "Wuzhou", 111.316229, 23.472309, "0774"],
          ],
          O: [],
          U: [],
          A: [
            [
              "513200",
              "阿坝藏族羌族自治州",
              "Aba",
              102.221374,
              31.899792,
              "0837",
            ],
            ["652900", "阿克苏地区", "Aksu", 80.265068, 41.170712, "0997"],
            ["654300", "阿勒泰地区", "Altay", 88.13963, 47.848393, "0906"],
            ["152900", "阿拉善盟", "Alxa", 105.706422, 38.844814, "0483"],
            ["610900", "安康市", "Ankang", 109.029273, 32.6903, "0915"],
            ["340800", "安庆市", "Anqing", 117.053571, 30.524816, "0556"],
            ["210300", "鞍山市", "Anshan", 122.995632, 41.110626, "0412"],
            ["520400", "安顺市", "Anshun", 105.932188, 26.245544, "0853"],
            ["410500", "安阳市", "Anyang", 114.352482, 36.103442, "0372"],
            ["659002", "阿拉尔市", "Aral", 81.285884, 40.541914, "1997"],
            ["820000", "澳門特別行政區", "Macau", 113.54909, 22.198951, "1853"],
            ["542500", "阿里地区", "Ngari", 80.105498, 32.503187, "0897"],
          ],
          F: [
            [
              "450600",
              "防城港市",
              "Fangchenggang",
              108.345478,
              21.614631,
              "0770",
            ],
            ["440600", "佛山市", "Foshan", 113.122717, 23.028762, "0757"],
            ["210400", "抚顺市", "Fushun", 123.921109, 41.875956, "0413"],
            ["210900", "阜新市", "Fuxin", 121.648962, 42.011796, "0418"],
            ["341200", "阜阳市", "Fuyang", 115.819729, 32.896969, "1558"],
            ["361000", "抚州市", "Fuzhou", 116.358351, 27.98385, "0794"],
            ["350100", "福州市", "Fuzhou", 119.306239, 26.075302, "0591"],
          ],
          P: [
            ["211100", "盘锦市", "Panjin", 122.06957, 41.124484, "0427"],
            ["510400", "攀枝花市", "Panzhihua", 101.716007, 26.580446, "0812"],
            [
              "410400",
              "平顶山市",
              "Pingdingshan",
              113.307718,
              33.735241,
              "0375",
            ],
            ["620800", "平凉市", "Pingliang", 106.684691, 35.54279, "0933"],
            ["360300", "萍乡市", "Pingxiang", 113.852186, 27.622946, "0799"],
            ["530800", "普洱市", "Pu'er", 100.972344, 22.777321, "0879"],
            ["350300", "莆田市", "Putian", 119.007558, 25.431011, "0594"],
            ["410900", "濮阳市", "Puyang", 115.041299, 35.768234, "0393"],
          ],
          M: [
            ["340500", "马鞍山市", "Ma'anshan", 118.507906, 31.689362, "0555"],
            ["440900", "茂名市", "Maoming", 110.919229, 21.659751, "0668"],
            ["511400", "眉山市", "Meishan", 103.831788, 30.048318, "1833"],
            ["441400", "梅州市", "Meizhou", 116.117582, 24.299112, "0753"],
            ["510700", "绵阳市", "Mianyang", 104.741722, 31.46402, "0816"],
            ["231000", "牡丹江市", "Mudanjiang", 129.618602, 44.582962, "0453"],
          ],
          N: [
            ["542400", "那曲地区", "Nagqu", 92.060214, 31.476004, "0896"],
            ["360100", "南昌市", "Nanchang", 115.892151, 28.676493, "0791"],
            ["511300", "南充市", "Nanchong", 106.082974, 30.795281, "0817"],
            ["320100", "南京市", "Nanjing", 118.767413, 32.041544, "025"],
            ["450100", "南宁市", "Nanning", 108.320004, 22.82402, "0771"],
            ["350700", "南平市", "Nanping", 118.178459, 26.635627, "0599"],
            [
              "460322",
              "南沙群岛",
              "Nansha Islands",
              116.749998,
              11.471888,
              "1891",
            ],
            ["320600", "南通市", "Nantong", 120.864608, 32.016212, "0513"],
            ["411300", "南阳市", "Nanyang", 112.540918, 32.999082, "0377"],
            ["511000", "内江市", "Neijiang", 105.066138, 29.58708, "1832"],
            ["330200", "宁波市", "Ningbo", 121.549792, 29.868388, "0574"],
            ["350900", "宁德市", "Ningde", 119.527082, 26.65924, "0593"],
            [
              "533300",
              "怒江傈僳族自治州",
              "Nujiang",
              98.854304,
              25.850949,
              "0886",
            ],
          ],
          G: [
            [
              "623000",
              "甘南藏族自治州",
              "Gannan",
              102.911008,
              34.986354,
              "0941",
            ],
            ["360700", "赣州市", "Ganzhou", 114.940278, 25.85097, "0797"],
            [
              "513300",
              "甘孜藏族自治州",
              "Garze",
              101.963815,
              30.050663,
              "0836",
            ],
            ["632600", "果洛藏族自治州", "Golog", 100.242143, 34.4736, "0975"],
            ["511600", "广安市", "Guang'an", 106.633369, 30.456398, "0826"],
            ["510800", "广元市", "Guangyuan", 105.829757, 32.433668, "0839"],
            ["440100", "广州市", "Guangzhou", 113.280637, 23.125178, "020"],
            ["450800", "贵港市", "Guigang", 109.602146, 23.0936, "1755"],
            ["450300", "桂林市", "Guilin", 110.299121, 25.274215, "0773"],
            ["520100", "贵阳市", "Guiyang", 106.713478, 26.578343, "0851"],
            ["640400", "固原市", "Guyuan", 106.285241, 36.004561, "0954"],
          ],
          R: [
            ["371100", "日照市", "Rizhao", 119.461208, 35.428588, "0633"],
            ["540200", "日喀则市", "Shigatse", 88.885148, 29.267519, "0892"],
          ],
          K: [
            ["410200", "开封市", "Kaifeng", 114.341447, 34.797049, "0378"],
            ["650200", "克拉玛依市", "Karamay", 84.873946, 45.595886, "0990"],
            ["653100", "喀什地区", "Kashgar", 75.989138, 39.467664, "0998"],
            [
              "653000",
              "克孜勒苏柯尔克孜自治州",
              "Kizilsu",
              76.172825,
              39.713431,
              "0908",
            ],
            ["530100", "昆明市", "Kunming", 102.712251, 25.040609, "0871"],
          ],
          E: [
            [
              "422800",
              "恩施土家族苗族自治州",
              "Enshi",
              109.48699,
              30.283114,
              "0718",
            ],
            ["420700", "鄂州市", "Ezhou", 114.890593, 30.396536, "0711"],
            ["150600", "鄂尔多斯市", "Ordos", 109.99029, 39.817179, "0477"],
          ],
        },
        u = [],
        d = {};
      for (var l in c)
        if (c.hasOwnProperty(l)) {
          for ([], s = [], i = 0, r = (o = c[l]).length; i < r; i++)
            (d[(n = o[i])[0]] = {
              adcode: n[0],
              name: n[1],
              spell: n[2],
              lng: n[3],
              lat: n[4],
              areaCode: n[5],
            }),
              s.push(n[0]);
          u.push({ id: l, title: l, adcodes: s });
        }
      u.sort(function (e, t) {
        return e.id > t.id ? 1 : -1;
      });
      var p = { letterGroup: u, adcodeMap: d };
    },
    "9MQ6": function (e, t, a) {
      a.d(t, "a", function () {
        return o;
      });
      var o = { type: "default" };
    },
    "9kk/": function (e, t, a) {
      a.d(t, "e", function () {
        return l;
      }),
        a.d(t, "c", function () {
          return p;
        }),
        a.d(t, "d", function () {
          return h;
        }),
        a.d(t, "b", function () {
          return g;
        }),
        a.d(t, "a", function () {
          return m;
        });
      var o = a("Fcif"),
        n = a("2wjL"),
        i = a("rDSc"),
        r = a("f9/1"),
        s = a("AlIn"),
        c = a("u8kV"),
        u = a("As4l"),
        d = a.n(u);
      getApp();
      function l(e, t, a) {
        if (
          (Object(r.setIsReLaunch)(!1),
          (a = n.a.add(a, { subKdtId: t })),
          (a = n.a.remove(a, "shopAutoEnter")),
          e !== t)
        ) {
          var o = (function (e) {
            var t = e || "/packages/home/dashboard/index";
            if (
              (function (e) {
                return /pages\/common\/blank-page/.test(e);
              })(t)
            ) {
              var a = n.a.getAll(t).weappSharePath;
              if (a) {
                a = decodeURIComponent(a);
                var o = n.a.getAll(a),
                  r = Object(i.a)(o, "kdt_id"),
                  [s] = a.split("?");
                (s = n.a.add(s, r)),
                  (t =
                    "/pages/common/blank-page/index?weappSharePath=" +
                    encodeURIComponent(s));
              }
            }
            return t;
          })(a);
          wx.reLaunch({ url: o });
        } else wx.reLaunch({ url: a || "/packages/home/dashboard/index" });
      }
      function p(e) {
        return e.items.map((t) => {
          var {
              storeName: a,
              storeKdtId: o,
              distance: n,
              storeAddress: i,
              lat: r,
              lon: s,
              shopMetaInfo: c,
            } = t,
            { offlineShopOpen: u, onlineShopOpen: d } = c || {};
          return {
            name: a,
            kdtId: +o,
            isCurrent: o === e.lastVisitedKdtId,
            distance: n && n / 1e3,
            desc: i,
            lat: r,
            lon: s,
            offlineShopOpen: u,
            onlineShopOpen: d,
            rawItem: t,
          };
        });
      }
      function h(e, t) {
        var { deliveryMethod: a } = t || {};
        return d()(
          e.map((e) => {
            var { rawItem: t } = e,
              {
                onlineBusinessHours: n = {},
                supportDelivery: i = !0,
                customerServiceAreaCode: r = "",
                customerServicePhoneNumber: c = "",
              } = t,
              { summary: u = "", currentBusinessStatus: d = {} } = n,
              { isOpen: l = !0 } = d,
              p = +a === s.a.SelfFetch || i;
            return Object(o.a)({}, e, {
              isSupportDelivery: p,
              summary: u,
              isOpen: l,
              disableClick: !l || !p,
              customerServiceAreaCode: r,
              customerServicePhoneNumber: c,
            });
          }),
          (e) => !e.isOpen,
          (e) => !e.isSupportDelivery,
          "distance"
        );
      }
      function g(e) {
        return Object.keys(e).reduce((t, a) => (e[a] && (t[a] = e[a]), t), {});
      }
      function m() {
        var { options: e = {} } = Object(c.d)(this),
          { extOptJson: t } = e;
        try {
          return JSON.parse(decodeURIComponent(t)) || {};
        } catch (e) {
          return {};
        }
      }
    },
    "9zTU": function (e, t, a) {
      a.d(t, "g", function () {
        return c;
      }),
        a.d(t, "b", function () {
          return u;
        }),
        a.d(t, "l", function () {
          return d;
        }),
        a.d(t, "f", function () {
          return l;
        }),
        a.d(t, "h", function () {
          return p;
        }),
        a.d(t, "e", function () {
          return h;
        }),
        a.d(t, "m", function () {
          return g;
        }),
        a.d(t, "n", function () {
          return m;
        }),
        a.d(t, "i", function () {
          return f;
        }),
        a.d(t, "a", function () {
          return v;
        }),
        a.d(t, "j", function () {
          return b;
        }),
        a.d(t, "k", function () {
          return S;
        }),
        a.d(t, "d", function () {
          return y;
        }),
        a.d(t, "c", function () {
          return T;
        });
      var o = a("T6h7"),
        n = a.n(o),
        i = a("jmjq"),
        r = a.n(i);
      function s(e) {
        return Number(r()(e, !0, !1));
      }
      var c = { FREE: 1, PAY: 2 },
        u = { AMOUNT: 1, COUNT: 2, SINGLE: 3 },
        d = {
          totalTradeAmount(e, t, a, o) {
            (e = s(e)), (t = s(t));
            var i = n()(t, e),
              r = Number((e / t).toFixed(4));
            return {
              remark: "累计购买金额",
              type: u.AMOUNT,
              subTitle: "再购买" + i + "元商品",
              infoTitle: e + "/" + t,
              rate: r,
              need: i,
              unit: "元",
              current: e,
              condition: t,
              desc: o
                ? "您已升级为最高等级"
                : "再去购买" + i + "元商品即可升" + a,
              isFullLevel: o,
              icon: "https://b.yzcdn.cn/public_files/e2c3b82c8d7337ed7fcfdead41cee065.png",
            };
          },
          totalTradeCount(e, t, a, o) {
            var n = t - e,
              i = Number((e / t).toFixed(4));
            return {
              remark: "累计购买次数",
              type: u.COUNT,
              subTitle: "再去下单" + n + "次",
              infoTitle: e + "/" + t,
              rate: i,
              need: n,
              unit: "次",
              current: e,
              condition: t,
              desc: o
                ? "您已升级为最高等级"
                : "再去购买" + n + "次商品即可升" + a,
              isFullLevel: o,
              icon: "https://b.yzcdn.cn/public_files/03e79c38e9092d3e2156f1563f727e6f.png",
            };
          },
          singleTradeAmount(e, t, a) {
            var o = (e = s(e));
            return {
              remark: "单笔消费最大金额",
              type: u.SINGLE,
              subTitle: "单笔消费" + o + "元",
              infoTitle: "",
              rate: 0,
              need: o,
              current: "",
              condition: o,
              desc: a
                ? "您已升级为最高等级"
                : "单次购买" + o + "元立即升级到" + t,
              isFullLevel: a,
              icon: "https://b.yzcdn.cn/public_files/04fda855e49f36479fdbb4f49e26e10c.png",
            };
          },
          singleStoredValue(e, t, a) {
            var o = (e = s(e));
            return {
              remark: "单笔充值最大金额",
              type: u.SINGLE_STORE,
              subTitle: "单笔充值" + o + "元",
              infoTitle: "",
              rate: 0,
              need: o,
              current: "",
              condition: o,
              desc: a
                ? "您已升级为最高等级"
                : "单次充值" + o + "元立即升级到" + t,
              isFullLevel: a,
              icon: "https://b.yzcdn.cn/public_files/04fda855e49f36479fdbb4f49e26e10c.png",
            };
          },
        },
        l = { GROWTH: 1, CONSUME: 2, STORE: 3 },
        p = { GROWTH: 1, REGISTER: 2, CONSUME: 3 },
        h = {
          Color010: "#75b06d",
          Color020: "#48a97a",
          Color030: "#6ab7de",
          Color040: "#6385bd",
          Color050: "#9b6fc8",
          Color060: "#c0996f",
          Color070: "#eec154",
          Color080: "#eb962d",
          Color081: "#fb9f2e",
          Color082: "#aac564",
          Color090: "#e96c50",
          Color100: "#de5850",
          Color101: "#cf3e36",
          Color102: "#798795",
        },
        g = "Color060",
        m = { title: "更多精选商品", showTitleComponent: 1, showMethod: 1 },
        f = {
          SET: 1,
          MERGE: 2,
          RULE: 3,
          SYSTEM: 4,
          INITIATIVE_QUIT: 5,
          REENTER: 6,
        },
        v = { BIRTHDAY: "birthday" },
        b = {
          Unstart: 0,
          Ongoing: 1,
          InitiativeTerminate: 2,
          InitiativePause: 3,
          ErrorPause: 4,
          AutoTerminate: 5,
        },
        S = { FREE_MENBER: "free", PAY_MENBER: "pay" },
        y = { FREE_MENBER: 1, PAY_MENBER: 2 },
        T = {
          LEVEL_CHANGE: "LEVEL_CHANGE",
          BE_MEMBER: "BE_MEMBER",
          COMPLETE: "complete",
          NOT_MEMBER: "NOT_MEMBER",
        };
    },
    A6oz: function (e, t, a) {
      var o = a("Fcif"),
        n = a("esrA"),
        i = "@ext-tee-shop/physical-search-bar",
        r = "@ext-tee-shop/physical-edit-address",
        s = Object(n.a)({
          a: {
            p: [
              {
                r: ["/packages/shop/physical-address/index"],
                c: [{ t: "m", c: ["b22-0", "b22-1"] }],
                m: [],
              },
            ],
          },
          m: [
            ["b22-0", i, null],
            ["b22-1", r, null],
          ],
          e: [
            [i, a("7CXW")],
            [r, a("AUxo")],
          ],
        }),
        c = a("9ZMt"),
        u = a("fkHB"),
        d = a("Sh92"),
        l = a("uDzM"),
        p = a.n(l);
      class h extends d.a {
        constructor(e) {
          super(e),
            (this.ctx.data.searchPlaceholder = "请输入你的收货的小区、大楼等");
        }
      }
      (h.widgets = { Main: p.a }), (h.component = { ShopEditAddressData: p.a });
      var g = h,
        m = {
          config: s,
          builtinBundle: {
            "@ext-tee-shop/physical-search-bar": u.a,
            "@ext-tee-shop/physical-edit-address": g,
          },
        },
        f = c.default.getGlobal("ranta-app-runtime"),
        v = f.getPageOptions({
          rantaOptions: Object(o.a)(
            { page: "/packages/shop/physical-address/index" },
            m
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: f,
          tee: c.default,
          usedLifecycles: [],
        });
      c.default.page({ mixins: [v] });
    },
    A7jD: function (e, t, a) {
      a.d(t, "a", function () {
        return n;
      });
      var o = a("US/N"),
        n = function (e, t) {
          return (
            void 0 === t && (t = !0),
            Object(o.requestUseCdn)({
              path: "/wscshop/top-nav/getConfig.json",
              origin: "h5",
              data: { withCache: t, kdtId: e },
            })
          );
        };
    },
    AD9L: function (e, t, a) {
      var o = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      t.a = {
        calcDateAmount: function (e, t) {
          var a = o[t - 1];
          return (function (e) {
            return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
          })(e) && 2 === t
            ? a + 1
            : a;
        },
        calcPreviousMonth: function (e, t) {
          return new Date(e + "/" + t + "/01").getDay() - 0;
        },
        calcLastMonth: function (e, t, a) {
          return 6 - new Date(e + "/" + t + "/" + a).getDay();
        },
      };
    },
    AI6o: function (e, t, a) {
      a.d(t, "b", function () {
        return c;
      }),
        a.d(t, "a", function () {
          return u;
        });
      var o = a("fZnw"),
        n = a("9kk/"),
        i = (a("AlIn"), getApp()),
        r = Object(o.a)(i.carmen);
      function s(e, t) {
        var {
            lon: a,
            lat: o,
            keyword: r,
            umpAlias: s,
            umpType: c,
            page: u,
            pageSize: d = 20,
            kdt_id: l,
            mode: p,
            from: h,
            isNewEnterShop: g,
            appendShopMetaInfo: m,
            isFilterClose: f,
            countryName: v,
            provinceName: b,
            cityName: S,
            countyName: y,
            ignoreStoreLimit: T,
            enterShopOptionsJsonString: w,
            bizListJson: O,
            deliveryMethod: I,
            shopOperationStatusList: _,
          } = e,
          E = {
            mode: p,
            page: u,
            pageSize: d,
            hqKdtId: i.getHQKdtId(),
            kdt_id: l,
            storeName: r,
            from: h,
            isNewEnterShop: g,
            isFilterClose: f,
            countryName: v,
            provinceName: b,
            cityName: S,
            countyName: y,
            ignoreStoreLimit: T,
            enterShopOptionsJsonString: w,
            bizListJson: O,
            deliveryMethod: I,
            shopOperationStatusList: _,
          };
        return (
          o && a && ((E.lon = a), (E.lat = o)),
          s && c && ((E.umpAlias = s), (E.umpType = c)),
          m && (E.appendShopMetaInfo = 1),
          i.request({ path: t, data: Object(n.b)(E) })
        );
      }
      function c(e) {
        void 0 === e && (e = {});
        return s(e, "wscump/multistore/store/list.json");
      }
      function u(e) {
        var { goodsId: t, kdtId: a } = e,
          o = { goods_id: t, parent_kdt_id: i.getHQKdtId(), sub_kdt_id: a };
        return r({
          method: "GET",
          api: "youzan.retail.ump.common.subgoods/1.0.0/get",
          data: o,
        });
      }
    },
    AJMQ: function (e, t) {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    AQkN: function (e, t, a) {
      a.d(t, "d", function () {
        return o;
      }),
        a.d(t, "e", function () {
          return n;
        }),
        a.d(t, "c", function () {
          return i;
        }),
        a.d(t, "a", function () {
          return r;
        }),
        a.d(t, "b", function () {
          return s;
        }),
        a.d(t, "f", function () {
          return c;
        });
      var o = { MONTH: 1, QUARTER: 3, YEAR: 12, YEAR_3: 36, YEAR_5: 60 },
        n = {
          MONTH: "月",
          QUARTER: "季",
          YEAR: "年",
          YEAR_3: "3年",
          YEAR_5: "5年",
        },
        i = {
          [o.MONTH]: n.MONTH,
          [o.QUARTER]: n.QUARTER,
          [o.YEAR]: n.YEAR,
          [o.YEAR_3]: n.YEAR_3,
          [o.YEAR_5]: n.YEAR_5,
        },
        r = { Pay: 1, Renewal: 2, ExperienceRenewal: 3 },
        s = { Price: 1, Discount: 2, None: 3 },
        c = { 1: "startPrice", 2: "consecutivePrice" };
    },
    AUxo: function (e, t) {
      e.exports = {
        d: "searchPlaceholder;2",
        el: "search-change:debounce;search-focus;search-cancel",
        wd: "Main",
      };
    },
    "Akg/": function (e, t, a) {
      var o = a("2EQx"),
        n = a("h0av");
      e.exports = function (e) {
        for (var t = n(e), a = t.length; a--; ) {
          var i = t[a],
            r = e[i];
          t[a] = [i, r, o(r)];
        }
        return t;
      };
    },
    AlIn: function (e, t, a) {
      a.d(t, "d", function () {
        return o;
      }),
        a.d(t, "b", function () {
          return n;
        }),
        a.d(t, "a", function () {
          return i;
        }),
        a.d(t, "c", function () {
          return r;
        });
      var o = { LocalRetail: 4 },
        n = { Normal: "1", LocalRetail: "2" },
        i = { Local: 1, SelfFetch: 2 },
        r = "ExtraArgsFromShopSelectToOriginalPage";
    },
    As4l: function (e, t, a) {
      var o = a("IqJI"),
        n = a("BJBO"),
        i = a("bim0"),
        r = a("/Qyy"),
        s = i(function (e, t) {
          if (null == e) return [];
          var a = t.length;
          return (
            a > 1 && r(e, t[0], t[1])
              ? (t = [])
              : a > 2 && r(t[0], t[1], t[2]) && (t = [t[0]]),
            n(e, o(t, 1), [])
          );
        });
      e.exports = s;
    },
    B4Jh: function (e, t, a) {
      var o = a("fRAL"),
        n = Math.max;
      e.exports = function (e, t, a) {
        return (
          (t = n(void 0 === t ? e.length - 1 : t, 0)),
          function () {
            for (
              var i = arguments, r = -1, s = n(i.length - t, 0), c = Array(s);
              ++r < s;

            )
              c[r] = i[t + r];
            r = -1;
            for (var u = Array(t + 1); ++r < t; ) u[r] = i[r];
            return (u[t] = a(c)), o(e, this, u);
          }
        );
      };
    },
    BJBO: function (e, t, a) {
      var o = a("NmMy"),
        n = a("Exs5"),
        i = a("tDyL"),
        r = a("dbCC"),
        s = a("Ublk"),
        c = a("TsNJ"),
        u = a("Lqcn"),
        d = a("yoW1"),
        l = a("PqlX");
      e.exports = function (e, t, a) {
        t = t.length
          ? o(t, function (e) {
              return l(e)
                ? function (t) {
                    return n(t, 1 === e.length ? e[0] : e);
                  }
                : e;
            })
          : [d];
        var p = -1;
        t = o(t, c(i));
        var h = r(e, function (e, a, n) {
          return {
            criteria: o(t, function (t) {
              return t(e);
            }),
            index: ++p,
            value: e,
          };
        });
        return s(h, function (e, t) {
          return u(e, t, a);
        });
      };
    },
    BW49: function (e, t, a) {
      var o = a("sWZd"),
        n = a("lYsT"),
        i = a("PqlX"),
        r = a("q+I6"),
        s = a("ckUF"),
        c = a("cTHi");
      e.exports = function (e, t, a) {
        for (var u = -1, d = (t = o(t, e)).length, l = !1; ++u < d; ) {
          var p = c(t[u]);
          if (!(l = null != e && a(e, p))) break;
          e = e[p];
        }
        return l || ++u != d
          ? l
          : !!(d = null == e ? 0 : e.length) &&
              s(d) &&
              r(p, d) &&
              (i(e) || n(e));
      };
    },
    BZ1t: function (e, t, a) {
      var o = a("cQKx"),
        n = getApp();
      t.a = {
        save(e, t, a) {
          n.carmen({
            api: "account.address/1.0.0/modifyById",
            data: Object.assign({ community: "" }, e),
            success: (e) => {
              t(e);
            },
            fail: (e) => {
              a && a(e);
            },
          });
        },
        add(e, t, a) {
          n.carmen({
            api: "account.address/1.0.0/add",
            data: Object.assign({ id: "", community: "" }, e),
            success: (e) => {
              t(e);
            },
            fail: (e) => {
              a && a(e);
            },
          });
        },
        getAddressList(e, t) {
          n.carmen({
            api: "account.address/1.0.0/get",
            data: { type: 1 },
            success(t) {
              e(t);
            },
            fail(e) {
              t && t(e);
            },
          });
        },
        removeAddress(e, t, a) {
          n.carmen({
            api: "account.address/1.0.0/removeById",
            data: { id: e },
            success(e) {
              t(e);
            },
            fail() {
              a && a();
            },
          });
        },
        queryGeo(e, t, a, i) {
          n.carmen({
            api: "youzan.logistics.geo/1.0.0/get",
            data: { city: e, address: t },
            method: "GET",
            success(e) {
              var { lat: t, lng: n } = e,
                i = Object(o.a)(n, t);
              a({ lat: i.lat, lon: i.lng });
            },
            fail(e) {
              i && i(e);
            },
          });
        },
      };
    },
    BouC: function (e, t) {
      e.exports = {
        d: "featureComponents;2;extraData;0;customOptionListConfig;0;goodsBaseInfo;0;currentActivity;0;goodsSkuData;0;shopBaseInfo;0;goodsPriceInfo;0;shareInfo;0",
        e: "ready",
        el: "ready;share:query",
        w: "PromoteSetupBlock;DetailBaseBlock;ImageContainerBlock;BaseInfoContainerBlock;CouponContainerBlock;GoodsDetailContainerBlock;TaskAwardContainerBlock;PriceIntroContainerBlock;TradeCarouselContainerBlock;FixedBottomContainerBlock;SubmitContainerBlock;LevelInfoBlock;BottomHook;SubmitGoodsBottom;SubmitGoodsBottomBar;SubmitGoodsBottomBtns;SubmitTaskAwardTips;GoodsCouponBlock;PromotionPopBlock;PromotionCardBlock;OptimalGoodsCouponBlock;MaterialListBlock",
        wc: "PromoteSetupBlock;DetailBaseBlock;ImageContainerBlock;BaseInfoContainerBlock;CouponContainerBlock;GoodsDetailContainerBlock;TaskAwardContainerBlock;PriceIntroContainerBlock;TradeCarouselContainerBlock;FixedBottomContainerBlock;SubmitContainerBlock;LevelInfoBlock;BottomHook;SubmitGoodsBottom;SubmitGoodsBottomBar;SubmitGoodsBottomBtns;SubmitTaskAwardTips;GoodsCouponBlock;PromotionPopBlock;PromotionCardBlock;OptimalGoodsCouponBlock;MaterialListBlock;ShowcaseContainer;SalesmanCubeBlock",
        pi: "setShareInfo",
        li: "beforePageMount;onPullDownRefresh;onShareAppMessage;onPageScroll;onReachBottom;pageDestroyed",
      };
    },
    Bt9F: function (e, t, a) {
      a.d(t, "a", function () {
        return i;
      });
      var o = a("Fcif"),
        n = a("u8kV");
      function i(e) {
        (e.store =
          e.store ||
          function () {
            return Object(n.d)(this).$store;
          }),
          (e.options = Object(o.a)({ multipleSlots: !0 }, e.options));
        var t = e.properties || {};
        (e.properties = Object.keys(t).reduce((e, a) => {
          var o = (e[a] = t[a]);
          return o.default && (o.value = o.default), e;
        }, {})),
          Object(n.b)(e);
      }
    },
    BwbT: function (e, t, a) {
      var o = a("PqlX"),
        n = a("zXe4"),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        r = /^\w*$/;
      e.exports = function (e, t) {
        if (o(e)) return !1;
        var a = typeof e;
        return (
          !(
            "number" != a &&
            "symbol" != a &&
            "boolean" != a &&
            null != e &&
            !n(e)
          ) ||
          r.test(e) ||
          !i.test(e) ||
          (null != t && e in Object(t))
        );
      };
    },
    COrk: function (e, t, a) {
      var o = a("E1Sn"),
        n = a("T9Ud");
      e.exports = function e(t, a, i, r, s) {
        return (
          t === a ||
          (null == t || null == a || (!n(t) && !n(a))
            ? t != t && a != a
            : o(t, a, i, r, e, s))
        );
      };
    },
    CSCq: function (e, t) {
      e.exports = {
        d: "storeList;2;searchPlaceholder;2;storeConfig;4;location;4;kdtId;4",
        el: "search-focus;search-cancel",
        w: "Main",
        wd: "Main",
        lc: "formatStoreList",
        p: "fetchStoreList;clearStoreList",
        pi: "chooseStoreItem",
        c: "StoreListCom;StoreItemCom",
      };
    },
    Chmn: function (e, t) {
      e.exports = function (e) {
        return this.__data__.get(e);
      };
    },
    Cpb8: function (e, t, a) {
      a.d(t, "a", function () {
        return n;
      });
      var o = a("9ZMt").default.$native;
      function n(e) {
        o.openLocation(e);
      }
    },
    D202: function (e, t, a) {},
    DSjh: function (e, t, a) {
      var o = a("a1Mm"),
        n = getApp();
      t.a = {
        listName: "list",
        params: { alias: "", page_size: 20, page_no: 1 },
        components: [
          {
            size: 1,
            title: 1,
            price: 1,
            buy_btn: 1,
            buy_btn_type: 1,
            size_type: 0,
            type: "goods_weapp",
            show_corner_mark: 0,
            show_sub_title: 0,
            goods: [],
          },
        ],
        fetch(e) {
          return new Promise((t, a) => {
            var o = Object.assign(this.params, e);
            n.request({
              path: "/wscshop/goods/goodsByTagAlias.json",
              data: {
                alias: o.alias,
                page: o.page,
                pageSize: o.page_size,
                isShowPeriod: 1,
                supportCombo: !0,
                excludedComboSubType: '["optional_combo"]',
              },
            })
              .then((e) => {
                var { list: a = [] } = e;
                t(this.format(a));
              })
              .catch((e) => {
                a(e);
              });
          });
        },
        format: (e) =>
          e.map(
            (e) => (
              e.image_url
                ? (e.image_url = Object(o.a)(e.image_url))
                : (e.image_url = Object(o.a)(
                    "/upload_files/no_pic.png",
                    "!300x300.jpg"
                  )),
              e
            )
          ),
      };
    },
    DUvn: function (e) {
      e.exports = JSON.parse("{}");
    },
    DVqm: function (e, t, a) {},
    DsKV: function (e, t, a) {
      var o = a("JQZX"),
        n = function (e, t, a) {
          var n = [];
          return (
            a && n.push({ text: a, code: e }),
            Object(o.a)(t, (t, a) => {
              (e && 0 !== a.indexOf(e)) || n.push({ text: t, code: a });
            }),
            n
          );
        };
      t.a = {
        formatAreaData: function (e, t) {
          var a = {},
            o = e.toString().slice(0, 2) || -1,
            i = e.toString().slice(0, 4) || -1;
          return (
            (a.province = n(0, t.province, "省份")),
            (a.city = n(o, t.city, "城市")),
            (a.county = n(i, t.county, "区县")),
            a
          );
        },
      };
    },
    E1Sn: function (e, t, a) {
      var o = a("WRuO"),
        n = a("MBdc"),
        i = a("LdZC"),
        r = a("ji6j"),
        s = a("s3t7"),
        c = a("PqlX"),
        u = a("tfj2"),
        d = a("3kU/"),
        l = "[object Object]",
        p = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, a, h, g, m) {
        var f = c(e),
          v = c(t),
          b = f ? "[object Array]" : s(e),
          S = v ? "[object Array]" : s(t),
          y = (b = "[object Arguments]" == b ? l : b) == l,
          T = (S = "[object Arguments]" == S ? l : S) == l,
          w = b == S;
        if (w && u(e)) {
          if (!u(t)) return !1;
          (f = !0), (y = !1);
        }
        if (w && !y)
          return (
            m || (m = new o()),
            f || d(e) ? n(e, t, a, h, g, m) : i(e, t, b, a, h, g, m)
          );
        if (!(1 & a)) {
          var O = y && p.call(e, "__wrapped__"),
            I = T && p.call(t, "__wrapped__");
          if (O || I) {
            var _ = O ? e.value() : e,
              E = I ? t.value() : t;
            return m || (m = new o()), g(_, E, a, h, m);
          }
        }
        return !!w && (m || (m = new o()), r(e, t, a, h, g, m));
      };
    },
    E7Xw: function (e, t) {
      e.exports = function () {
        return [];
      };
    },
    EqBP: function (e, t, a) {
      var o = a("Fcif"),
        n = a("esrA"),
        i = "@ext-tee-shop/physical-store-data",
        r = "@ext-tee-shop/physical-location-bar",
        s = "@ext-tee-shop/physical-search-bar",
        c = "@ext-tee-shop/physical-store-list",
        u = Object(n.a)({
          a: {
            p: [
              {
                r: ["/packages/shop/physical-store/index"],
                c: [
                  {
                    t: "c",
                    c: [
                      { t: "m", c: ["b23-2"] },
                      { t: "m", c: ["b23-1"] },
                      { t: "m", c: ["b23-3"] },
                    ],
                  },
                ],
                m: ["b23-0"],
              },
            ],
          },
          m: [
            ["b23-0", i, { p: { getLocation: [["b23-1"]] } }],
            ["b23-1", r, null],
            ["b23-2", s, null],
            ["b23-3", c, null],
          ],
          e: [
            [i, a("V550")],
            [r, a("nrRS"), { lambdas: { provide: ["getLocation"] } }],
            [s, a("7CXW")],
            [c, a("CSCq")],
          ],
        }),
        d = a("9ZMt"),
        l = a("eijD"),
        p = a("Sh92"),
        h = a("TO+A"),
        g = a("US/N");
      var m = getApp();
      class f extends p.a {
        constructor(e) {
          var t;
          super(e),
            (this.pageQuery = {}),
            (this.page = 1),
            (this.cachePage = 0),
            (this.pageSize = 20),
            (this.hasMore = !0),
            (this.keywords = ""),
            (this.onSearching = !1),
            (this.storeConfig = {}),
            null == (t = this.ctx.env) ||
              null == t.getQueryAsync ||
              t.getQueryAsync().then((e) => {
                (this.pageQuery = e),
                  m.waitForEnterShop().then((e) => {
                    Object(g.setRequestDep)({ kdtId: e.kdt_id }), this.init();
                  });
              });
        }
        pageDestroyed() {
          this.ctx.event.remove("onLocation"),
            this.ctx.event.remove("search-change:debounce"),
            this.ctx.event.remove("search-focus"),
            this.ctx.event.remove("search-cancel");
        }
        init() {
          this.initAddress(), this.initCtx(), this.initExtensionData();
        }
        initCtx() {
          this.ctx.event.listen("onLocation", (e) => {
            (this.ctx.data.location = e), (this.page = 1), this.initStoreList();
          }),
            this.ctx.event.listen("search-change:debounce", (e) => {
              "" === e && this.onSearching
                ? this.ctx.process.invoke("clearStoreList")
                : ((this.keywords = e),
                  (this.page = 1),
                  (this.hasMore = !0),
                  this.initStoreList());
            }),
            this.ctx.event.listen("search-focus", () => {
              (this.cachePage = this.page), (this.onSearching = !0);
            }),
            this.ctx.event.listen("search-cancel", () => {
              (this.page = this.cachePage), (this.onSearching = !1);
            }),
            (this.ctx.data.searchPlaceholder = "请输入店铺名称");
        }
        initExtensionData() {
          (this.ctx.data.location
            ? Promise.resolve(this.ctx.data.location)
            : this.ctx.process.invoke("getLocation", {}).pop()
          )
            .then((e) => {
              this.ctx.data.location = e;
            })
            .finally(() => {
              this.initStoreList();
            });
        }
        initAddress() {
          var { location: e } = this.pageQuery,
            t = {};
          if (e) {
            try {
              t = JSON.parse(e);
            } catch (e) {}
            this.ctx.data.location = t;
          }
        }
        initStoreList() {
          var e = this;
          return Object(l.a)(function* () {
            void 0 === e.storeConfig.show_type &&
              void 0 === e.storeConfig.isNewTemplate &&
              (yield e.initStoreConfig());
            var { longitude: t, latitude: a } = e.ctx.data.location || {},
              { lng: o = 0, lat: n = 0 } = t || a ? Object(p.g)(+t, +a) : {},
              i = {
                pageSize: e.pageSize,
                page: e.page,
                lon: o,
                lat: n,
                storeName: e.keywords,
                showType: e.storeConfig.show_type,
              };
            e.ctx.process
              .invoke("fetchStoreList", i)
              .pop()
              .then((t) => {
                var { items: a = [] } = t;
                a.length < e.pageSize ? (e.hasMore = !1) : e.page++,
                  Object(h.b)();
              })
              .catch((e) => {});
          })();
        }
        initStoreConfig() {
          return Object(g.default)({
            method: "GET",
            path: "/wscshopcore/getStoreConfig.json",
          })
            .then((e) => {
              (this.storeConfig = e
                ? e.isNewTemplate
                  ? e
                  : JSON.parse(e.components)[0] || JSON.parse(e.components)
                : { show_type: 0 }),
                (this.ctx.data.storeConfig = this.storeConfig);
            })
            .catch((e) => {
              (this.storeConfig = { show_type: 1 }),
                (this.ctx.data.storeConfig = { show_type: 1 });
            });
        }
        onReachBottom() {
          this.hasMore && this.initStoreList();
        }
        onPullDownRefresh() {
          (this.page = 1),
            (this.keywords = ""),
            (this.hasMore = !0),
            this.initStoreList();
        }
      }
      f.lambdas = {
        formatStoreList: function (e) {
          return e.map((e) => ({
            storeKdtId: e.storeKdtId,
            storeName: e.storeName,
            logo: e.logo,
            distance: e.distance,
            address: e.storeAddress,
            location: e.location,
            summary: e.summary,
            physicalPicUrls: e.physicalPicUrls,
            phone: e.customerServiceAreaCode
              ? e.customerServiceAreaCode + "-" + e.customerServicePhoneNumber
              : e.customerServicePhoneNumber,
            isOnlineOpen: e.isOnlineOpen,
            onlineBusinessHours: e.onlineBusinessHours,
            shopOperationStatus: e.shopOperationStatus,
            shopRole: e.shopRole,
            linkedKdtId: e.linkedKdtId,
          }));
        },
      };
      var v = f,
        b = a("j2T3"),
        S = a.n(b),
        y = a("OosA");
      class T extends p.a {
        constructor(e) {
          super(e), this.ctx.process.define("getLocation", () => Object(y.a)());
        }
      }
      (T.widgets = { Main: S.a }), (T.lambdas = { getLocation: y.a });
      var w = T,
        O = a("fkHB"),
        I = a("ubwH"),
        _ = a.n(I),
        E = a("JZGP"),
        x = a.n(E),
        C = a("sijn"),
        j = a.n(C);
      class P extends p.a {
        constructor(e) {
          super(e), this.initCtx();
        }
        initCtx() {
          this.ctx.process.define("fetchStoreList", (e) => {
            return ((t = e),
            Object(g.default)({
              method: "GET",
              path: "/wscshopcore/getPhysicalStoreList.json",
              data: t,
            })).then((t) => {
              var { items: a } = t,
                o = this.ctx.lambdas.formatStoreList(a),
                n =
                  1 === e.page ? o : (this.ctx.data.storeList || []).concat(o);
              return (this.ctx.data.storeList = n), t;
            });
            var t;
          }),
            this.ctx.process.define("clearStoreList", () => {
              this.ctx.data.storeList = [];
            }),
            (this.ctx.data.searchPlaceholder = "请输入店铺名称");
        }
      }
      (P.widgets = { Main: _.a }),
        (P.components = { StoreListCom: x.a, StoreItemCom: j.a });
      var k = P,
        A = {
          config: u,
          builtinBundle: {
            "@ext-tee-shop/physical-store-data": v,
            "@ext-tee-shop/physical-location-bar": w,
            "@ext-tee-shop/physical-search-bar": O.a,
            "@ext-tee-shop/physical-store-list": k,
          },
        },
        L = d.default.getGlobal("ranta-app-runtime"),
        D = L.getPageOptions({
          rantaOptions: Object(o.a)(
            { page: "/packages/shop/physical-store/index" },
            A
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: L,
          tee: d.default,
          usedLifecycles: ["onPullDownRefresh", "onReachBottom"],
        });
      d.default.page({ mixins: [D] });
    },
    Exs5: function (e, t, a) {
      var o = a("sWZd"),
        n = a("cTHi");
      e.exports = function (e, t) {
        for (var a = 0, i = (t = o(t, e)).length; null != e && a < i; )
          e = e[n(t[a++])];
        return a && a == i ? e : void 0;
      };
    },
    F7Gz: function (e) {
      e.exports = JSON.parse("{}");
    },
    Ge4K: function (e, t, a) {
      var o = a("Fcif"),
        n = a("jA1y"),
        i = a("Yt9W");
      class r {
        ajax(e) {
          var {
            method: t,
            url: a,
            data: r,
            errorMsg: s = "",
            headers: c = {},
          } = e;
          return (
            (c = Object(o.a)(
              { Accept: "application/json, text/plain, */*" },
              c
            )),
            new Promise((u, d) =>
              Object(n.c)(
                Object(o.a)({}, e, {
                  path: a,
                  headers: c,
                  data: r,
                  withCredentials: !0,
                })
              )
                .then((e) => u(e))
                .catch(function (e) {
                  if (
                    (void 0 === e && (e = {}),
                    /request:/.test(e.msg || "") &&
                      (e = Object(o.a)({}, e, { msg: "网络错误" })),
                    302 === e.code)
                  )
                    return d(e);
                  d(e.msg || "string" == typeof e ? e : s),
                    Object(i.f)(t + " " + a, {
                      method: t,
                      url: a,
                      data: r,
                      code: e.code,
                      message: "string" == typeof e ? e : s,
                      response: e,
                    });
                })
            )
          );
        }
        jsonp(e) {
          return this.ajax(Object(o.a)({ dataType: "jsonp" }, e));
        }
      }
      ["get", "post", "delete", "put"].forEach((e) => {
        r.prototype[e] = function (t) {
          return this.ajax(Object(o.a)({ method: e }, t));
        };
      }),
        (t.a = new r());
    },
    HAFe: function (e, t, a) {},
    HvMf: function (e, t, a) {},
    I0XR: function (e, t, a) {
      var o = getApp();
      t.a = {
        getHotWords: () =>
          o.request({ path: "/wscdeco/decorate/search-page/hot-words.json" }),
        getAutomatedWords: (e) =>
          o.request({
            path: "/wscdeco/decorate/search-page/automated-words.json",
            data: { keyword: e },
          }),
        getRecommendWords: () =>
          o.request({
            path: "/wscdeco/decorate/search-page/recommend-words.json",
          }),
      };
    },
    IqJI: function (e, t, a) {
      var o = a("gwRl"),
        n = a("+Vbj");
      e.exports = function e(t, a, i, r, s) {
        var c = -1,
          u = t.length;
        for (i || (i = n), s || (s = []); ++c < u; ) {
          var d = t[c];
          a > 0 && i(d)
            ? a > 1
              ? e(d, a - 1, i, r, s)
              : o(s, d)
            : r || (s[s.length] = d);
        }
        return s;
      };
    },
    IzNX: function (e, t, a) {
      var o = a("Fcif"),
        n = (a("F7Gz"), a("esrA")),
        i = "@wsc-tee-user/levelcenter-plus-page-block",
        r = "@wsc-tee-decorate/navigation-bar",
        s = "@wsc-tee-decorate/showcase-container",
        c = "@ext-tee-wsc-im/im-message-contact",
        u = "@wsc-tee-decorate/feature-user-authorize-popup",
        d = Object(n.a)({
          a: {
            p: [
              {
                r: ["/packages/shop/levelcenter/plus/index"],
                c: [
                  {
                    t: "m",
                    c: [
                      "b15-7",
                      "b15-6",
                      "b15-1",
                      "b15-5",
                      { moduleId: "b15-0", name: "PlusPage" },
                    ],
                  },
                ],
                m: ["b15-2", "b15-3", "b15-4"],
              },
            ],
          },
          m: [
            ["b15-0", i, null],
            ["b15-1", r, { d: { title: ["b15-0", "pageTitle"] } }],
            [
              "b15-2",
              s,
              { d: { shopInfo: ["@wsc-tee-shop/shop-core~NzurILNk", "shop"] } },
            ],
            ["b15-3", "@wsc-tee-decorate/jump-link", null],
            ["b15-4", c, null],
            [
              "b15-5",
              "@ext-tee-wsc-goods/biz-sku-manage",
              {
                d: {
                  themeVars: [
                    "@ext-tee-wsc-decorate/theme-color~EKBphALO",
                    "themeCSS",
                  ],
                },
              },
            ],
            [
              "b15-6",
              "@ext-tee-wsc-decorate/page-style",
              null,
              { stage: "pre" },
            ],
            ["b15-7", u, null],
          ],
          e: [
            [i, a("N3TX"), { framework: "weapp" }],
            [r, a("/MSb")],
            [s, a("Y7pJ")],
            ["@wsc-tee-decorate/jump-link", a("OgbJ")],
            [c, a("7xhV")],
            ["@ext-tee-wsc-goods/biz-sku-manage", a("O8mO")],
            ["@ext-tee-wsc-decorate/page-style", a("8v1J")],
            [u, a("czXk")],
          ],
          f: "weapp",
        }),
        l = a("9ZMt"),
        p = a("quXu"),
        h = a("xW8c"),
        g = a("/pw/"),
        m = a("2Pst"),
        f = a("ygrD"),
        v = a("rLrQ"),
        b = a("qwv7"),
        S = {
          config: d,
          builtinBundle: {
            "@wsc-tee-user/levelcenter-plus-page-block": class {
              constructor(e) {
                var { ctx: t } = e;
                (this.ctx = t), (this.ctx.data.pageTitle = "PLUS会员中心");
              }
              beforePageMount(e) {
                var { query: t, route: a } = e;
                (this.ctx.data.query = t), (this.ctx.data.route = a);
              }
            },
            "@wsc-tee-decorate/navigation-bar": p.a,
            "@wsc-tee-decorate/showcase-container": h.a,
            "@wsc-tee-decorate/jump-link": g.a,
            "@ext-tee-wsc-im/im-message-contact": m.a,
            "@ext-tee-wsc-goods/biz-sku-manage": f.a,
            "@ext-tee-wsc-decorate/page-style": v.a,
            "@wsc-tee-decorate/feature-user-authorize-popup": b.a,
          },
        },
        y = l.default.getGlobal("ranta-app-runtime"),
        T = y.getPageOptions({
          rantaOptions: Object(o.a)(
            { page: "/packages/shop/levelcenter/plus/index" },
            S
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: y,
          tee: l.default,
          usedLifecycles: [
            "onPullDownRefresh",
            "onReachBottom",
            "onPageShow",
            "onPageHide",
            "beforePageMount",
          ],
        });
      l.default.page({ mixins: [T] });
    },
    Kf04: function (e, t, a) {
      var o = a("Fcif"),
        n = a("2wjL"),
        i = a("GrZP"),
        r = a("zMoS"),
        s = a("WOkX"),
        c = a("jc6w");
      t.a = Behavior({
        behaviors: [i.a],
        methods: {
          getBannerId: (e, t) => (void 0 === t && (t = 0), Object(c.a)(e, t)),
          setListLoggerParams(e, t) {
            return (
              void 0 === t && (t = "goods"),
              e.map((e, a) => this.setItemLoggerParams(e, a, t))
            );
          },
          setItemLoggerParams(e, t, a) {
            var i = Object(o.a)({}, e),
              c = this.getBannerId(a, t + 1),
              u = Object(r.a)(this.data, "salesman.seller", "");
            return (
              (i.loggerParams = {
                goods_id: e.id,
                banner_id: c,
                item_id: e.id,
                item_type: "goods",
              }),
              (i.url = n.a.add("/pages/goods/detail/index", {
                alias: e.alias,
                banner_id: c,
              })),
              u && (i.url = Object(s.a)({ url: i.url, sls: u })),
              i
            );
          },
          goodsLoadLogger(e) {
            var t = e.map((e) => e.loggerParams);
            this.ensureAppLogger("view", t);
          },
          clickLog(e) {
            var t = { banner_id: this.getBannerId(e) };
            this.ensureAppLogger("click_content", t);
          },
        },
      });
    },
    "KjZ+": function (e, t, a) {
      var o = a("s3UK").Uint8Array;
      e.exports = o;
    },
    LdZC: function (e, t, a) {
      var o = a("jgJv"),
        n = a("KjZ+"),
        i = a("dIZa"),
        r = a("MBdc"),
        s = a("rrk0"),
        c = a("OF9M"),
        u = o ? o.prototype : void 0,
        d = u ? u.valueOf : void 0;
      e.exports = function (e, t, a, o, u, l, p) {
        switch (a) {
          case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case "[object ArrayBuffer]":
            return !(e.byteLength != t.byteLength || !l(new n(e), new n(t)));
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return i(+e, +t);
          case "[object Error]":
            return e.name == t.name && e.message == t.message;
          case "[object RegExp]":
          case "[object String]":
            return e == t + "";
          case "[object Map]":
            var h = s;
          case "[object Set]":
            var g = 1 & o;
            if ((h || (h = c), e.size != t.size && !g)) return !1;
            var m = p.get(e);
            if (m) return m == t;
            (o |= 2), p.set(e, t);
            var f = r(h(e), h(t), o, u, l, p);
            return p.delete(e), f;
          case "[object Symbol]":
            if (d) return d.call(e) == d.call(t);
        }
        return !1;
      };
    },
    Lqcn: function (e, t, a) {
      var o = a("h9r5");
      e.exports = function (e, t, a) {
        for (
          var n = -1,
            i = e.criteria,
            r = t.criteria,
            s = i.length,
            c = a.length;
          ++n < s;

        ) {
          var u = o(i[n], r[n]);
          if (u) return n >= c ? u : u * ("desc" == a[n] ? -1 : 1);
        }
        return e.index - t.index;
      };
    },
    LuQ5: function (e, t, a) {
      a.d(t, "a", function () {
        return n;
      }),
        a.d(t, "b", function () {
          return i;
        });
      var o = getApp(),
        n = (e, t) =>
          o.request({
            path: "/wa/api/operation/qrcode-process/member-node/complete",
            method: "post",
            data: { activityInfo: e, targetKdtId: t },
          }),
        i = (e) =>
          o.request({
            path: "/wa/api/operation/qrcode-process/member-node/info",
            method: "GET",
            data: { activityInfo: e },
          });
    },
    MBdc: function (e, t, a) {
      var o = a("GE03"),
        n = a("5Avs"),
        i = a("+165");
      e.exports = function (e, t, a, r, s, c) {
        var u = 1 & a,
          d = e.length,
          l = t.length;
        if (d != l && !(u && l > d)) return !1;
        var p = c.get(e),
          h = c.get(t);
        if (p && h) return p == t && h == e;
        var g = -1,
          m = !0,
          f = 2 & a ? new o() : void 0;
        for (c.set(e, t), c.set(t, e); ++g < d; ) {
          var v = e[g],
            b = t[g];
          if (r) var S = u ? r(b, v, g, t, e, c) : r(v, b, g, e, t, c);
          if (void 0 !== S) {
            if (S) continue;
            m = !1;
            break;
          }
          if (f) {
            if (
              !n(t, function (e, t) {
                if (!i(f, t) && (v === e || s(v, e, a, r, c))) return f.push(t);
              })
            ) {
              m = !1;
              break;
            }
          } else if (v !== b && !s(v, b, a, r, c)) {
            m = !1;
            break;
          }
        }
        return c.delete(e), c.delete(t), m;
      };
    },
    MCNm: function (e, t, a) {
      var o = a("DXKY"),
        n = a("Fcif"),
        i = (e) => {
          var t = ((e) =>
            e.reduce((e, t, a) => {
              var { type: o } = t;
              try {
                var i = Object.keys(e[o] || {}).length;
                return (e[o] = Object(n.a)({}, e[o] || {}, { [a]: i + 1 })), e;
              } catch (t) {
                return e;
              }
            }, {}))(e);
          return e.map((e, a) => {
            var { type: o } = e,
              i = (t[o] || {})[a],
              r = i ? { componentIndex: i - 1 } : {};
            return Object(n.a)({}, e, r);
          });
        },
        r = {
          __featurePages: {},
          setShowcaseComponents(e, t, a, n) {
            (e = (function (e, t) {
              void 0 === t && (t = !1);
              var a = t;
              return e.map(
                (e) => (
                  "search" === e.type &&
                    (a
                      ? (e.positionType = "0")
                      : (a = 1 == +e.positionType || a)),
                  e
                )
              );
            })(e, a)),
              (e = i(e)),
              (this.__featurePages[n] = e),
              o.a.on("feature-load:start" + n, () => {
                o.a.trigger("feature-load:init" + n, []);
              }),
              o.a.on("feature-load:more" + n, (e) => {
                var { startIndex: t, size: a } = e,
                  i = this.__featurePages[n].slice(t, t + a);
                o.a.trigger("feature-load:show-component" + n, {
                  components: i,
                  startIndex: t,
                });
              });
          },
          clearShowcaseComponents(e) {
            o.a.off("feature-load:init" + e),
              o.a.off("feature-load:show-component" + e),
              o.a.off("feature-load:start" + e),
              o.a.off("feature-load:more" + e),
              delete this.__featurePages[e];
          },
        };
      t.a = r;
    },
    MfmI: function (e, t, a) {
      var o = a("jgJv"),
        n = a("NmMy"),
        i = a("PqlX"),
        r = a("zXe4"),
        s = o ? o.prototype : void 0,
        c = s ? s.toString : void 0;
      e.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (i(t)) return n(t, e) + "";
        if (r(t)) return c ? c.call(t) : "";
        var a = t + "";
        return "0" == a && 1 / t == -1 / 0 ? "-0" : a;
      };
    },
    MyiS: function (e, t, a) {
      a.d(t, "a", function () {
        return o;
      });
      var o = {
        share: {
          alias: "share",
          title: "转发",
          openType: "share",
          hidden: !1,
          type: "share",
          iconUrl: "//b.yzcdn.cn/salesman/cube/share.png",
        },
        tuwenPoster: {
          alias: "tuwenPoster",
          title: "保存海报",
          hidden: !1,
          iconUrl: "//b.yzcdn.cn/salesman/cube/poster.png",
        },
      };
    },
    N3TX: function (e, t) {
      e.exports = {
        d: "featureComponents;2;pageTitle;2;navigationBarConfigData;2;shopConfigs;4",
        w: "PlusPage",
        wc: "ShowcaseContainer",
        li: "beforePageMount",
      };
    },
    N94V: function (e, t) {
      e.exports = {
        d: "pageTitle;2;featureComponents;2;navigationBarConfigData;2;userLevel;2;groupAlias;2;neededMoreStoreBalance;2;isWeixinCardEnabled;2;pageQuery;2;shopConfigs;4",
        w: "Main",
        wc: "Main;ShowcaseContainer",
        p: "beforeOutMemberLevel;showMemberLevelBenefits;reloadData",
        pi: "beforeOutMemberLevel;showMemberLevelBenefits",
        li: "beforePageMount;onPageShow;onPageScroll",
      };
    },
    Negk: function (e, t, a) {
      var o = a("xyw3"),
        n = getApp();
      t.a = {
        listName: "list",
        params: { page_size: 20, page_no: 1, group_id: "" },
        paidPagination: { contentPage: 2, columnPage: 2 },
        components: [
          {
            type: "goods",
            layout: 3,
            size_type: 0,
            show_title: !0,
            show_price: !0,
            image_fill_style: 1,
            buy_button_type: 1,
            show_buy_button: !0,
            goods: [],
            show_sold_num: !1,
            page_margin: 15,
            goods_margin: 10,
            border_radius_type: 1,
          },
        ],
        fetch(e) {
          return (
            (e.page_no = e.page),
            delete e.page,
            n
              .request({
                path: "wscump/coupon/get_coupon_normal_goods.json",
                query: Object.assign(this.params, e),
              })
              .then(this.format)
          );
        },
        format: (e) =>
          (e.good_list || []).map(
            (e) => (
              (e.image_url =
                e.image_url ||
                "https://img01.yzcdn.cn/upload_files/no_pic.png?imageView2/2/w/280/h/280/q/75/format/webp?imageView2/2/w/380/h/380/q/75/format/webp"),
              (e.price = Object(o.a)(e.price).toYuan()),
              e
            )
          ),
        getCouponSupportGoodsInfo: (e) =>
          n.request({
            path: "wscump/coupon/get_coupon_support_goods_info.json",
            query: e,
          }),
        fetchOwlList(e) {
          var { owlType: t, group_id: a } = e,
            o = 1;
          1 === (t = +t)
            ? (o = this.paidPagination.columnPage)
            : 2 === t
            ? (o = this.paidPagination.contentPage)
            : (this.paidPagination = { contentPage: 2, columnPage: 2 });
          var i = { owlType: t, couponGroupId: a, page: o, pageSize: 3 };
          return n
            .request({
              path: "wscump/coupon/get_coupon_owl_goods.json",
              query: i,
            })
            .then(
              (e) => (
                1 === t
                  ? this.paidPagination.columnPage++
                  : 2 === t && this.paidPagination.contentPage++,
                e
              )
            );
        },
      };
    },
    NmMy: function (e, t) {
      e.exports = function (e, t) {
        for (var a = -1, o = null == e ? 0 : e.length, n = Array(o); ++a < o; )
          n[a] = t(e[a], a, e);
        return n;
      };
    },
    O3Bn: function (e, t, a) {
      a.d(t, "d", function () {
        return i;
      }),
        a.d(t, "f", function () {
          return r;
        }),
        a.d(t, "c", function () {
          return s;
        }),
        a.d(t, "a", function () {
          return c;
        }),
        a.d(t, "e", function () {
          return u;
        }),
        a.d(t, "h", function () {
          return d;
        }),
        a.d(t, "g", function () {
          return l;
        }),
        a.d(t, "k", function () {
          return p;
        }),
        a.d(t, "i", function () {
          return h;
        }),
        a.d(t, "b", function () {
          return g;
        }),
        a.d(t, "l", function () {
          return m;
        }),
        a.d(t, "j", function () {
          return f;
        });
      var o = a("J8k1"),
        n = getApp();
      function i(e) {
        return n
          .request({
            path: "wscdeco/biz-component/list-member.json?stage=100",
            method: "get",
            data: { adaptorComponents: o.a.join(","), type: e },
          })
          .then(function (e) {
            return (
              void 0 === e && (e = []),
              (e = e.filter(
                (e) =>
                  "image_ad" !== e.type ||
                  ("image_ad" === e.type && e.imgs.length > 0)
              ))
            );
          });
      }
      function r() {
        return n.request({ path: "/wscuser/scrm/api/getCustomerAuth.json" });
      }
      function s(e) {
        return n.request({
          path: "/wscuser/level/api/checkSupportRecommendGoods.json",
          data: e,
        });
      }
      function c(e) {
        return n.request({
          path: "/wscuser/level/api/checkBirthdayStatus.json",
          data: e,
        });
      }
      function u() {
        return n.request({
          path: "/wscuser/level/api/getBenefitFormatSwitch.json",
        });
      }
      var d = () =>
          n.request({ path: "/wscuser/level/api/getMemberCouponInfo.json" }),
        l = (e) =>
          n.request({
            path: "/wscuser/level/api/getLevelMemberCouponInfo.json",
            method: "get",
            data: e,
          }),
        p = (e) =>
          n.request({
            path: "/wscuser/level/api/receiveCoupon.json",
            data: e,
            method: "POST",
          });
      function h() {
        return n.request({
          path: "/wscuser/level/api/getPayAmountGiftList.json",
          method: "get",
        });
      }
      function g() {
        return n.request({
          path: "/wscuser/level/api/checkUserIsMember.json",
          method: "get",
        });
      }
      function m(e) {
        return n.request({
          path: "/wscuser/level/api/receivePayAmountGift.json",
          method: "post",
          data: e,
        });
      }
      function f(e) {
        return n.request({
          path: "/wscuser/salesman/getSlInfo.json",
          method: "get",
          data: { sl: e },
        });
      }
    },
    OFhO: function (e, t, a) {
      var o = a("Fcif"),
        n = a("zMoS"),
        i = getApp();
      t.a = {
        listName: "list",
        params: {
          page: 1,
          pageSize: 20,
          orderRule: "2",
          from: "weapp",
          v: "2",
        },
        components: [
          {
            type: "groupon",
            itemIds: [1033977009, 2782604347],
            itemCardOpt: {
              type: "card",
              layout: "vertical",
              corner: "rect",
              align: "left",
              imgOpt: {
                ratio: "1-1",
                fill: "cover",
                cornerMark: !1,
                showKeyLabel: !1,
                useGoodsCoverImage: !1,
              },
              priceOpt: {
                fontWeight: "400",
                fontSize: 18,
                tagGap: 2,
                style: "color: var(--ump-price, var(--general))",
              },
              btnOpt: {
                kdtId: 63077,
                type: "btn",
                corner: "circle",
                name: "去开团",
                btnStyle:
                  "color: var(--ump-icon, var(--general));border: 1px solid var(--ump-icon, var(--general));",
              },
              oPriceOpt: {
                fontSize: 12,
                delLine: !0,
                tagGap: 2,
                color: "#c8c9cc",
              },
              titleOpt: {
                titleFontWeight: "400",
                vMargin: 0,
                hMargin: 0,
                bgColor: "transparent",
                textAlign: "left",
                height: "36px",
                titleLines: 2,
              },
              subTitleOpt: null,
              tagsOpt: null,
              countdownOpt: null,
              extOpt: { align: "right", list: [] },
            },
            layoutOpt: { layoutMargin: 15, itemMargin: 10, type: "two" },
            moduleTitleOpt: {},
            queryExtra: {
              goodsSource: 0,
              grouponType: 0,
              type: "groupon",
              hideSoldOutGoods: 0,
              orderRule: 0,
              v: "2",
              layout: 1,
              goodsNum: 20,
              showPrice: !0,
              hideGoodsSold: 0,
            },
            showMoreButton: !1,
            uuid: "",
            items: [
              {
                activityEndTime: 1703779200,
                activityPrice: 1,
                activityStartTime: 1702526547,
                conditionNum: 2,
                groupNums: 0,
                id: 4347079501,
                isEnd: !1,
                isStart: !0,
                itemId: 1033977009,
                itemsInfo: {
                  abilityMarkCodeList: [
                    20001, 30002, 30003, 40008, 10012, 30007, 10020, 10022,
                    10023, 10021, 10029, 20002,
                  ],
                  alias: "362tywn1ei0s5h0",
                  attachmentUrl:
                    "https://img01.yzcdn.cn/upload_files/2021/01/15/aa90b7511c762d1df9435bc342a748f5.jpg",
                  goodsType: 0,
                  height: "360",
                  id: 1033977009,
                  isDisplay: 1,
                  subTitle: "",
                  supplierKdtId: 0,
                  title: "女巫003",
                  totalStock: 998,
                  width: "640",
                },
                kdtId: 63077,
                originPrice: 2e3,
                skuPrices: { 37819106: 1 },
                thumUrl:
                  "https://img01.yzcdn.cn/upload_files/2021/01/15/aa90b7511c762d1df9435bc342a748f5.jpg",
                title: "女巫测试",
              },
              {
                activityEndTime: 1704766147,
                activityPrice: 100,
                activityStartTime: 1702001347,
                conditionNum: 4,
                groupNums: 0,
                id: 4346815505,
                isEnd: !1,
                isStart: !0,
                itemId: 2782604347,
                itemsInfo: {
                  abilityMarkCodeList: [
                    20001, 10020, 30007, 40008, 10009, 10012, 10029, 10023,
                  ],
                  alias: "3f3z47evqg8t13l",
                  attachmentUrl:
                    "https://img01.yzcdn.cn/upload_files/2022/05/17/Fux_lrsgLLHBJR7JVPGR29X4O0iM.jpeg",
                  goodsType: 0,
                  height: "592",
                  id: 2782604347,
                  isDisplay: 1,
                  subTitle: "",
                  supplierKdtId: 0,
                  title: "一个有关税的橙子",
                  totalStock: 100,
                  width: "800",
                },
                kdtId: 63077,
                originPrice: 9900,
                skuPrices: { 14507949356: 100 },
                thumUrl:
                  "https://img01.yzcdn.cn/upload_files/2022/05/17/Fux_lrsgLLHBJR7JVPGR29X4O0iM.jpeg",
                title: "q1",
              },
            ],
          },
        ],
        fetch(e) {
          Object.assign(this.params, e);
          var t = Object(o.a)({ kdtId: i.getKdtId() }, this.params),
            a = +this.components[0].grouponType || 0;
          return new Promise((e, o) => {
            1 !== a
              ? e([])
              : i
                  .request({
                    path: "/wscshop/ump/groupon/grouponLuckyList.json",
                    data: t,
                  })
                  .then((t) => {
                    var { list: a = [] } = t;
                    e(this.format(a));
                  })
                  .catch((e) => {
                    o(e);
                  });
          });
        },
        format(e) {
          void 0 === e && (e = []);
          var { grouponType: t, showGrouponNum: a } = this.components[0];
          return e
            .filter((e) => 0 != +Object(n.a)(e, "goodsInfo.isDisplay", 1))
            .map((e) => {
              var { alias: n, id: i, extraTagText: r } = e,
                s =
                  1 == +t
                    ? "/packages/goods/lucky-draw-group/index?alias=" +
                      n +
                      "&type=luckyDrawGroup&activityId=" +
                      i
                    : "/packages/goods/groupon/index?alias=" + n;
              return Object(o.a)({}, e, { url: s, extraTagText: a ? r : "" });
            });
        },
      };
    },
    OMyM: function (e, t, a) {
      a.d(t, "f", function () {
        return r;
      }),
        a.d(t, "e", function () {
          return s;
        }),
        a.d(t, "b", function () {
          return c;
        }),
        a.d(t, "d", function () {
          return u;
        }),
        a.d(t, "c", function () {
          return d;
        }),
        a.d(t, "a", function () {
          return l;
        }),
        a.d(t, "g", function () {
          return p;
        });
      var o = a("zMoS"),
        n = a("7sy2"),
        i = getApp(),
        r = (e) =>
          Object(n.e)({
            path: "/wscuser/levelcenter/api/userLevelDetail.json",
            data: e,
          }),
        s = (e) =>
          i
            .request({
              path: "/wscuser/levelcenter/api/getLevelList.json",
              data: { type: e },
            })
            .then((e) => ({
              levelList: Object(o.a)(e, "levelList.0.levelV2List", []),
              planBenefits: Object(o.a)(e, "levelPlanBenefits", []),
            }))
            .catch(() => ({ levelList: [], planBenefits: [] })),
        c = () =>
          i
            .request({ path: "/wscuser/scrm/api/ump/getMissionListV2.json" })
            .then(function (e) {
              return (
                void 0 === e && (e = []),
                e.reduce(
                  (e, t) => (
                    3 === t.index
                      ? e.push(
                          ...Object(o.a)(t, "list", []).filter(
                            (e) => "DAILYSIGN" === e.name
                          )
                        )
                      : e.push(...t.list),
                    e
                  ),
                  []
                )
              );
            }),
        u = () =>
          i.request({
            path: "/wscuser/level/api/guide/levelCenterShowGuideV2.json",
          }),
        d = (e) =>
          i.request({
            path: "/wscuser/level/api/getCurrentBenefitInfo.json",
            method: "get",
            data: e,
          }),
        l = u,
        p = (e) =>
          i.request({
            path: "/wscuser/level/api/readPopContent",
            method: "post",
            data: e,
          });
    },
    OSBj: function (e, t, a) {
      a.d(t, "c", function () {
        return x;
      }),
        a.d(t, "a", function () {
          return j;
        }),
        a.d(t, "b", function () {
          return P;
        });
      var o = a("ScPz"),
        {
          NEW_FEATURE_ROUTE: n,
          APP_FEATURE_ROUTE: i,
          NEW_HOMEPAGE_ROUTE: r,
          APP_HOMEPAGE_ROUTE: s,
          OLD_GOODS_ROUTE: c,
          NEW_GOODS_ROUTE: u,
          TEMPLATE_ROUTE: d,
          TAB_THREE_ROUTE: l,
          APP_TAB_THREE_ROUTE: p,
          TAB_TWO_ROUTE: h,
          APP_TAB_TWO_ROUTE: g,
          TAB_ONE_ROUTE: m,
          APP_TAB_ONE_ROUTE: f,
          TEE_NEW_FEATURE_ROUTE: v,
          TEE_TAB_ONE_ROUTE: b,
          TEE_TAB_TWO_ROUTE: S,
          TEE_TAB_THREE_ROUTE: y,
          TEE_NEW_HOMEPAGE_ROUTE: T,
          EXT_NEW_FEATURE_ROUTE: w,
          EXT_TAB_ONE_ROUTE: O,
          EXT_TAB_TWO_ROUTE: I,
          EXT_TAB_THREE_ROUTE: _,
          EXT_NEW_HOMEPAGE_ROUTE: E,
        } = o.b,
        x = {
          home: "onHomeTap",
          search: "onSearchTap",
          usercenter: "onUserCenterTap",
          shopcar: "onShopCarTap",
          allGoods: "onAllGoodsTap",
          marketingPage: "onMarketingPageTap",
        },
        C = {
          [n]: 0,
          [i]: 0,
          [l]: 0,
          [p]: 0,
          [h]: 0,
          [g]: 0,
          [m]: 0,
          [f]: 0,
          [d]: 0,
          [d]: 5,
          [c]: 2,
          [u]: 2,
          [r]: 5,
          [s]: 5,
          [v]: 0,
          [b]: 0,
          [S]: 0,
          [y]: 0,
          [T]: 5,
          [w]: 0,
          [O]: 0,
          [I]: 0,
          [_]: 0,
          [E]: 5,
        },
        j = (e, t) => {
          var a = C[e];
          return void 0 !== a && (t || []).map((e) => +e).indexOf(a) > -1;
        },
        P = {
          navColor: "#ffffff",
          textColor: "#000000",
          sysPath: [],
          customPath: [],
          supportPages: ["0", "2", "5"],
          hotKeys: [],
        };
    },
    OosA: function (e, t, a) {
      a.d(t, "a", function () {
        return i;
      });
      var o = a("Sh92"),
        n = a("AGZf");
      function i() {
        return (
          n.a.loading({ message: "定位中...", duration: 3e3 }),
          o.d
            .getLocation()
            .then((e) => e)
            .catch((e) => Promise.reject(e))
            .finally(() => {
              n.a.clear();
            })
        );
      }
    },
    Q1wr: function (e, t, a) {
      a.d(t, "b", function () {
        return u;
      }),
        a.d(t, "a", function () {
          return d;
        });
      var o,
        n = a("0Ip2"),
        i = a("qlF2"),
        r = a("AQkN"),
        s = a("jmjq"),
        c = a.n(s),
        u = (e) => {
          var {
            list: t,
            lowestPrice: a,
            lowestType: o,
            lowestMonthPrice: n,
            hasMonthNotCheapest: s,
          } = ((e) => {
            var { skuList: t = [] } = e;
            if (!t.length) return {};
            for (
              var a = Number.POSITIVE_INFINITY,
                o = Number.POSITIVE_INFINITY,
                n = 0,
                s = !1,
                u = !1,
                d = [],
                l = r.d.QUARTER,
                p = t.length - 1;
              p > -1;
              p--
            ) {
              var h = t[p],
                g = h,
                { goodsSkuType: m, lifeTime: { termMonths: f } = {} } = h;
              if (
                ((g.goodsId = e.goodsId),
                (g.skuId = g.goodsSkuId),
                (l = f < l ? f : l),
                m !== r.a.ExperienceRenewal)
              ) {
                g.handlePrice = Object(i.a)(h);
                var v = Object(i.d)(g);
                (g.setName = v.name), (g.originCycle = v.originCycle);
                var b = v.lowestMonthPrice;
                (g.monthPirce = +c()(b, !1, !1)),
                  (s = s || g.handlePrice.isExperienceRenew || !1),
                  m === r.a.Renewal ? d.unshift(g) : d.push(g),
                  (o > b || (o === b && !u)) &&
                    ((o = b),
                    (u = v.isCheapestIsStart),
                    (a = v.lowestPrice),
                    (n = v.originCycle));
              }
            }
            var S = n;
            return (
              0 == +c()(o, !1, !1)
                ? (o = a)
                : l === r.d.MONTH && ((a = o), (n = r.c[l])),
              {
                lowestPrice: +c()(a, !1, !1),
                lowestMonthPrice: +c()(o, !1, !1),
                lowestType: n,
                originType: S,
                isStartCheapest: u,
                list: d,
                isExperienceRenew: s,
                hasMonthNotCheapest: l === r.d.MONTH && S !== n,
              }
            );
          })(e);
          return {
            skuList: t,
            bestPrice: +c()(a, !1, !1),
            bestType: o,
            lowestMonthPrice: n,
            hasMonthNotCheapest: s,
          };
        },
        d =
          ((o = {}),
          (e, t, a) => {
            var i = e.indexOf(t),
              r = [...e];
            return (
              i && r.splice(i, 1),
              r.map((e) => {
                if (!o[e])
                  return Object(n.d)({ levelAlias: e })
                    .then((t) => {
                      o[e] = a(t);
                    })
                    .catch((e) => {});
              }),
              [
                o[t],
                Object(n.d)({ levelAlias: t }).then((e) => {
                  var n = a(e);
                  return (o[t] = n), n;
                }),
              ]
            );
          });
    },
    Qn7i: function (e, t, a) {
      var o = a("xkFB");
      function n(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t))
          throw new TypeError("Expected a function");
        var a = function () {
          var o = arguments,
            n = t ? t.apply(this, o) : o[0],
            i = a.cache;
          if (i.has(n)) return i.get(n);
          var r = e.apply(this, o);
          return (a.cache = i.set(n, r) || i), r;
        };
        return (a.cache = new (n.Cache || o)()), a;
      }
      (n.Cache = o), (e.exports = n);
    },
    RJZ0: function (e, t, a) {
      a.d(t, "b", function () {
        return i;
      }),
        a.d(t, "a", function () {
          return r;
        }),
        a.d(t, "g", function () {
          return s;
        }),
        a.d(t, "d", function () {
          return c;
        }),
        a.d(t, "h", function () {
          return u;
        }),
        a.d(t, "e", function () {
          return d;
        }),
        a.d(t, "c", function () {
          return l;
        }),
        a.d(t, "f", function () {
          return p;
        });
      var o = getApp().request,
        n = "/wscsalesman/promotion/promote",
        i = (e) =>
          o({
            path: n + "/getGoodsRecommendRateInfo.json",
            data: e,
            method: "GET",
          }),
        r = function (e) {
          return (
            void 0 === e && (e = {}),
            o({
              path: n + "/getCouponsAndActivityInfo.json",
              data: e,
              method: "GET",
            })
          );
        },
        s = function (e) {
          return (
            void 0 === e && (e = {}),
            o({
              path: n + "/listMaterialPagedByConditionV2.json",
              data: e,
              method: "POST",
            })
          );
        },
        c = (e) =>
          o({ path: "/wscump/salesman/zone/getShortUrl.json", data: e }),
        u = (e) =>
          o({
            path: "/wscump/salesman/zone/publishMoments.json",
            data: e,
            method: "POST",
          }),
        d = (e) =>
          o({ path: n + "/getTaskByItemId.json", data: e, method: "GET" }),
        l = (e) =>
          o({ path: n + "/getRecommendRecord.json", data: e, method: "GET" }),
        p = (e) =>
          o({ path: "/wscgoods/poster/card/goods-v2", data: e, method: "GET" });
    },
    ScPz: function (e, t, a) {
      a.d(t, "b", function () {
        return r;
      }),
        a.d(t, "a", function () {
          return d;
        }),
        a.d(t, "c", function () {
          return l;
        });
      var o = a("MLLI"),
        n = a("F6OL"),
        i = a("9ZMt"),
        r = {
          NEW_FEATURE_ROUTE: "packages/home/feature/index",
          TAB_ONE_ROUTE: "packages/home/tab/one",
          TAB_TWO_ROUTE: "packages/home/tab/two",
          TAB_THREE_ROUTE: "packages/home/tab/three",
          NEW_HOMEPAGE_ROUTE: "packages/home/dashboard/index",
          APP_FEATURE_ROUTE: "pages/home/feature/index",
          APP_TAB_ONE_ROUTE: "pages/home/tab/one",
          APP_TAB_TWO_ROUTE: "pages/home/tab/two",
          APP_TAB_THREE_ROUTE: "pages/home/tab/three",
          APP_HOMEPAGE_ROUTE: "pages/home/dashboard/index",
          OLD_GOODS_ROUTE: "pages/goods/",
          NEW_GOODS_ROUTE: "packages/goods/",
          TEMPLATE_ROUTE: "packages/showcase-template/index",
          RETAIL_HOME: "pages-retail/home-shelf/index",
          TEE_NEW_FEATURE_ROUTE: "packages/tee-home/feature/index",
          TEE_TAB_ONE_ROUTE: "packages/tee-home/tab/one",
          TEE_TAB_TWO_ROUTE: "packages/tee-home/tab/two",
          TEE_TAB_THREE_ROUTE: "packages/tee-home/tab/three",
          TEE_NEW_HOMEPAGE_ROUTE: "packages/tee-home/dashboard/index",
          EXT_NEW_FEATURE_ROUTE: "packages/ext-home/feature/index",
          EXT_TAB_ONE_ROUTE: "packages/ext-home/tab/one",
          EXT_TAB_TWO_ROUTE: "packages/ext-home/tab/two",
          EXT_TAB_THREE_ROUTE: "packages/ext-home/tab/three",
          EXT_NEW_HOMEPAGE_ROUTE: "packages/ext-home/dashboard/index",
        },
        s =
          (Object.keys(r),
          {
            bottom: 58,
            height: 32,
            left: 278,
            right: 365,
            top: 26,
            width: 87,
            canUseNav: !0,
          }),
        c = { inited: !1, rectInfo: {} },
        u = () => {
          var e,
            {
              statusBarHeight: t = 20,
              SDKVersion: a,
              isAndroid: r,
            } = Object(o.b)(),
            s = t + (r ? 48 : 44);
          try {
            e = i.default.$native.getMenuButtonBoundingClientRect();
          } catch (e) {}
          return (
            e || (e = Object.create(null)),
            a && (e.canUseNav = Object(n.compareVersions)("2.5.2", a) < 1),
            (e.top = e.top || s),
            (c.rectInfo = e),
            (c.inited = !0),
            e
          );
        },
        d = Object.create(null);
      Object.keys(s).forEach((e) => {
        Object.defineProperty(d, e, {
          get() {
            if (!c.inited || (!c.rectInfo[e] && "canUseNav" !== e)) {
              var t = u()[e];
              return t || !1 === t ? t : (setTimeout(u, 300), s[e]);
            }
            return c.rectInfo[e];
          },
        });
      });
      var l = () => {
        var { top: e, height: t, canUseNav: a } = d,
          { statusBarHeight: n = 20 } = Object(o.b)(),
          i = e - n + 6 + t + n;
        return a ? (i <= 90 ? i : 90) : 0;
      };
    },
    T0uz: function (e, t, a) {
      var o = a("JIgs"),
        n = a("dxMw")(o);
      e.exports = n;
    },
    TEbo: function (e, t, a) {
      var o = a("Qn7i");
      e.exports = function (e) {
        var t = o(e, function (e) {
            return 500 === a.size && a.clear(), e;
          }),
          a = t.cache;
        return t;
      };
    },
    TRhu: function (e) {
      e.exports = JSON.parse("{}");
    },
    ULAX: function (e, t, a) {
      var o = a("TEbo"),
        n =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        r = o(function (e) {
          var t = [];
          return (
            46 === e.charCodeAt(0) && t.push(""),
            e.replace(n, function (e, a, o, n) {
              t.push(o ? n.replace(i, "$1") : a || e);
            }),
            t
          );
        });
      e.exports = r;
    },
    Ublk: function (e, t) {
      e.exports = function (e, t) {
        var a = e.length;
        for (e.sort(t); a--; ) e[a] = e[a].value;
        return e;
      };
    },
    V550: function (e, t) {
      e.exports = {
        d: "searchPlaceholder;2;storeConfig;0;location;2",
        el: "onLocation;search-focus;search-cancel;search-change:debounce",
        l: "formatStoreList",
        p: "chooseStoreItem",
        pi: "setLocation;getLocation;fetchStoreList;clearStoreList",
        li: "onPullDownRefresh;onReachBottom",
      };
    },
    V7Ua: function (e, t, a) {
      a.d(t, "a", function () {
        return n;
      }),
        a.d(t, "b", function () {
          return i;
        });
      var o = getApp(),
        n = (e) =>
          o.request({
            origin: "cashier",
            header: { "content-type": "application/x-www-form-urlencoded" },
            path: "/pay/wscuser/level/pay/bill.json",
            method: "POST",
            data: e,
          }),
        i = (e) =>
          o.request({
            origin: "cashier",
            header: { "content-type": "application/x-www-form-urlencoded" },
            path: "/pay/wscuser/level/pay/cache.json",
            method: "POST",
            data: e,
          });
    },
    VNQV: function (e, t, a) {
      var o = a("LSEb")(a("s3UK"), "DataView");
      e.exports = o;
    },
    VY7S: function (e, t, a) {
      var o = a("WRuO"),
        n = a("COrk");
      e.exports = function (e, t, a, i) {
        var r = a.length,
          s = r,
          c = !i;
        if (null == e) return !s;
        for (e = Object(e); r--; ) {
          var u = a[r];
          if (c && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
        }
        for (; ++r < s; ) {
          var d = (u = a[r])[0],
            l = e[d],
            p = u[1];
          if (c && u[2]) {
            if (void 0 === l && !(d in e)) return !1;
          } else {
            var h = new o();
            if (i) var g = i(l, p, d, e, t, h);
            if (!(void 0 === g ? n(p, l, 3, i, h) : g)) return !1;
          }
        }
        return !0;
      };
    },
    WRuO: function (e, t, a) {
      var o = a("RW/s"),
        n = a("e1Ej"),
        i = a("zEvu"),
        r = a("Chmn"),
        s = a("AJMQ"),
        c = a("kCQp");
      function u(e) {
        var t = (this.__data__ = new o(e));
        this.size = t.size;
      }
      (u.prototype.clear = n),
        (u.prototype.delete = i),
        (u.prototype.get = r),
        (u.prototype.has = s),
        (u.prototype.set = c),
        (e.exports = u);
    },
    Xeeb: function (e, t) {
      e.exports = { d: "", w: "Main", wd: "Main" };
    },
    XgOO: function (e, t, a) {
      var o = a("Fcif"),
        n = a("+I+c"),
        i = a("DXKY"),
        r = a("tqDJ"),
        s = a("J8p1"),
        c = a("vB9s"),
        u = a("1Uvd"),
        d = a("RY8z"),
        l = a("2wjL"),
        p = a("hTAu"),
        h = a("Tewj"),
        g = ["scenes"],
        m = {
          themes: [
            "default",
            "takeAway",
            "convenienceStore",
            "feature",
            "topNav",
            "ribecaCustom",
            "category-double11",
          ],
        },
        f = Object(c.a)({
          life: ["onPageScroll", "onPullDownRefresh", "onReachBottom"],
          exclude: [],
        }),
        v = getApp(),
        b = [
          "packages/home/dashboard/index",
          "packages/home/tab/one",
          "packages/home/tab/two",
          "packages/home/tab/three",
        ];
      t.a = f(
        {},
        {},
        {
          showShowcaseComponents(e, t, a, o, i, r, c, p) {
            void 0 === t && (t = 0),
              void 0 === o && (o = !1),
              void 0 === i && (i = !1),
              void 0 === r && (r = !1),
              void 0 === c && (c = {}),
              void 0 === p && (p = !1);
            var { scenes: h = "" } = c;
            c = Object(n.a)(c, g);
            var f = m.themes[t] || "";
            switch (
              (["default", "takeAway", "topNav", "ribecaCustom"].indexOf(f) <
                0 && (f = "feature"),
              f)
            ) {
              case "default":
              case "takeAway":
              case "ribecaCustom":
                var b = { fromRoute: encodeURIComponent(this.route) };
                this.data.id
                  ? (b.id = this.data.id)
                  : this.data.alias && (b.alias = this.data.alias);
                var S = getCurrentPages() || [],
                  y = { url: l.a.add("/packages/showcase-template/index", b) };
                S.length > 1 && !i
                  ? d.a.switchTab(y, "redirect")
                  : wx.reLaunch(y);
                break;
              case "feature":
              case "topNav":
                var T,
                  w = "topNav" === f;
                Array.isArray(e) &&
                  e.length >= 1 &&
                  "config" === e[0].type &&
                  (([T] = e.splice(0, 1)), this._setFeaturePageConfigData(T));
                var O = Array.isArray(e)
                  ? e.findIndex((e) => "contact_us" === e.type)
                  : -1;
                if (O > -1) {
                  var [I] = e.splice(O, 1);
                  e.unshift(I),
                    this._setImData({
                      config: T,
                      contactUsComponent: I,
                      otherParams: c,
                    });
                } else this._setImData({ config: T, otherParams: c });
                var { chainStoreInfo: _ = {} } = v.getShopInfoSync(),
                  { isMultiOnlineShop: E } = _,
                  x = E ? v.getHQKdtId() : v.getKdtId(),
                  C = {
                    type: f,
                    "theme.feature": [],
                    "theme.extra.kdtId": c.kdtId || v.getKdtId(),
                    "theme.extra.appId": v.getAppId(),
                    "theme.extra.lsKdtId": x,
                    "theme.extra.hqKdtId": v.getExtKdtId(),
                    "theme.extra.buyerId": v.getBuyerId() || "",
                    "theme.extra.offlineId": v.getOfflineId(),
                  };
                if ((r && (C["theme.feature"] = e), !r && !w)) {
                  this.uniqueKey &&
                    (s.a.clearFirstScreenComponents(this.uniqueKey),
                    s.a.clearShowcaseComponents(this.uniqueKey)),
                    (this.uniqueKey =
                      this.__wxExparserNodeId__ +
                      Object(u.a)(8) +
                      "&" +
                      h +
                      "&"),
                    (C["theme.componentsLength"] = e.length),
                    (C["theme.uniqueKey"] = this.uniqueKey);
                  var j = e.find((e) => "elevator_navigation" === e.type);
                  p &&
                    !j &&
                    s.a.setFirstScreenComponents(e.slice(0, 8), this.uniqueKey),
                    s.a.setShowcaseComponents(e, !1, !1, this.uniqueKey);
                }
                this.setYZData(C, {
                  immediate: !0,
                  cb: () => {
                    w && this.fetchTopNavThemeDataSuccess(e, a, o);
                  },
                });
            }
          },
          showcaseHandleGoodsBuy(e) {
            var {
                alias: t,
                activityTypes: a = null,
                timingSaleHideBuyBtnInSku: n,
                id: i = "",
                goodsId: s = "",
              } = e.detail,
              c = { activityTypes: a, timingSaleHideBuyBtnInSku: n },
              u = { goodsIdForBirthday: i || s };
            Object(r.a)(t, Object(o.a)({}, c, u))
              .then((e) => {
                this.setYZData({ "theme.featureSkuData": e });
              })
              .catch((e) => {});
          },
          onContactBack: d.a.contactBack,
          _setFeaturePageConfigData(e) {
            void 0 === e && (e = {}),
              v.getShopConfigData().then((t) => {
                var a = { "theme.extra.hideGift": 0 == +t.gift_plug_status };
                (a.pageBgColor =
                  (1 == +e.is_global_setting ? t.background_color : e.color) ||
                  ""),
                  this.setYZData(Object(o.a)({}, a));
              });
          },
          _setImData(e) {
            var { config: t, contactUsComponent: a, otherParams: o } = e,
              n = this.route,
              i = v.getOfflineId(),
              r = [v.getImData()];
            i > 0 && r.push(v.getShopInfo()),
              Promise.all(r)
                .then((e) => {
                  var [r, s] = e,
                    c = {
                      kdt_id: o.kdtId || v.getKdtId(),
                      endpoint: r.endpoint,
                      source: "none",
                    };
                  if (
                    (s &&
                      ((c.site_id = i),
                      (c.site_name = (s.store && s.store.name) || "")),
                    ("packages/home/feature/index" === n ||
                      "pages/home/feature/index" === n) &&
                      t)
                  ) {
                    var u = a && a.teamLogo;
                    (c.source = "page"),
                      (c.detail = JSON.stringify({
                        title: t.title,
                        desc: t.description,
                        alias: this.data.alias,
                        imgs: u ? [u] : [],
                      }));
                  }
                  this.setYZData({
                    "theme.extra.sourceParam": JSON.stringify(c),
                    "theme.extra.businessId": r.businessId || "",
                    "theme.extra.inTabPage": b.indexOf(n) > -1,
                  });
                })
                .catch((e) => {});
          },
          onPageScroll(e) {
            i.a.trigger("onPageScroll" + this.getPageKey(), e),
              h.default.trigger("onPageScroll" + this.getPageKey(), e),
              this.trigger("sdk:featurePageScroll" + this.getPageKey(), e);
          },
          onPullDownRefresh(e) {
            i.a.trigger("onPullDownRefresh" + this.getPageKey(), e);
          },
          onReachBottom(e) {
            i.a.trigger("onReachBottom" + this.getPageKey(), e),
              i.a.trigger("float-share:show" + this.getPageKey());
          },
          getPageKey() {
            return (
              this.__pageEventUniqueKey ||
                (this.__pageEventUniqueKey = Object(p.a)()),
              this.__pageEventUniqueKey
            );
          },
          handleSkuClose() {
            this.setYZData({ "theme.featureSkuData.showGoodsSku": !1 });
          },
          onUnload() {
            s.a.clearShowcaseComponents(this.uniqueKey || "");
          },
        }
      );
    },
    YCgX: function (e, t, a) {
      var o = a("Fcif"),
        n = (a("TRhu"), a("esrA")),
        i = "@wsc-tee-goods/goods-group-page-block",
        r = "@wsc-tee-decorate/navigation-bar",
        s = "@wsc-tee-decorate/showcase-container",
        c = "@ext-tee-wsc-im/im-message-contact",
        u = "@wsc-tee-decorate/feature-user-authorize-popup",
        d = Object(n.a)({
          a: {
            p: [
              {
                r: ["/packages/shop/goods/group/index"],
                c: [
                  {
                    t: "m",
                    c: [
                      "b8-7",
                      "b8-6",
                      "b8-1",
                      "b8-5",
                      { moduleId: "b8-0", name: "GroupPage" },
                    ],
                  },
                ],
                m: ["b8-2", "b8-3", "b8-4"],
              },
            ],
          },
          m: [
            ["b8-0", i, null],
            ["b8-1", r, { d: { title: ["b8-0", "groupPageTitle"] } }],
            [
              "b8-2",
              s,
              { d: { shopInfo: ["@wsc-tee-shop/shop-core~NzurILNk", "shop"] } },
            ],
            ["b8-3", "@wsc-tee-decorate/jump-link", null],
            ["b8-4", c, null],
            [
              "b8-5",
              "@ext-tee-wsc-goods/biz-sku-manage",
              {
                d: {
                  themeVars: [
                    "@ext-tee-wsc-decorate/theme-color~EKBphALO",
                    "themeCSS",
                  ],
                },
              },
            ],
            [
              "b8-6",
              "@ext-tee-wsc-decorate/page-style",
              null,
              { stage: "pre" },
            ],
            ["b8-7", u, null],
          ],
          e: [
            [i, a("6VDN"), { framework: "weapp" }],
            [r, a("/MSb")],
            [s, a("Y7pJ")],
            ["@wsc-tee-decorate/jump-link", a("OgbJ")],
            [c, a("7xhV")],
            ["@ext-tee-wsc-goods/biz-sku-manage", a("O8mO")],
            ["@ext-tee-wsc-decorate/page-style", a("8v1J")],
            [u, a("czXk")],
          ],
          f: "weapp",
        }),
        l = a("9ZMt"),
        p = a("quXu"),
        h = a("xW8c"),
        g = a("/pw/"),
        m = a("2Pst"),
        f = a("ygrD"),
        v = a("rLrQ"),
        b = a("qwv7"),
        S = {
          config: d,
          builtinBundle: {
            "@wsc-tee-goods/goods-group-page-block": class {
              constructor(e) {
                var { ctx: t } = e;
                this.ctx = t;
              }
              beforePageMount(e) {
                var { query: t, route: a } = e;
                (this.ctx.data.query = t), (this.ctx.data.route = a);
              }
            },
            "@wsc-tee-decorate/navigation-bar": p.a,
            "@wsc-tee-decorate/showcase-container": h.a,
            "@wsc-tee-decorate/jump-link": g.a,
            "@ext-tee-wsc-im/im-message-contact": m.a,
            "@ext-tee-wsc-goods/biz-sku-manage": f.a,
            "@ext-tee-wsc-decorate/page-style": v.a,
            "@wsc-tee-decorate/feature-user-authorize-popup": b.a,
          },
        },
        y = l.default.getGlobal("ranta-app-runtime"),
        T = y.getPageOptions({
          rantaOptions: Object(o.a)(
            { page: "/packages/shop/goods/group/index" },
            S
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: y,
          tee: l.default,
          usedLifecycles: [
            "onPullDownRefresh",
            "onReachBottom",
            "onPageShow",
            "onPageHide",
            "beforePageMount",
          ],
        });
      l.default.page({ mixins: [T] });
    },
    YaJL: function (e, t, a) {
      var o = a("LSEb"),
        n = (function () {
          try {
            var e = o(Object, "defineProperty");
            return e({}, "", {}), e;
          } catch (e) {}
        })();
      e.exports = n;
    },
    ZqJZ: function (e, t) {
      e.exports = {
        design: [
          { type: "config" },
          { type: "shopnote-subscribe" },
          { type: "shopnote-content" },
          { type: "shopnote-feature" },
          { type: "shopnote-readdata" },
          { type: "shopnote-shopinfo" },
        ],
      };
    },
    a7YA: function (e, t) {
      e.exports = function (e, t) {
        return function (a) {
          return null != a && a[e] === t && (void 0 !== t || e in Object(a));
        };
      };
    },
    aySV: function (e, t, a) {
      var o = a("Fcif"),
        n = (a("lX9x"), a("esrA")),
        i = "@wsc-tee-ump/sign-in-page-block",
        r = "@wsc-tee-decorate/navigation-bar",
        s = "@wsc-tee-decorate/showcase-container",
        c = "@ext-tee-wsc-im/im-message-contact",
        u = "@wsc-tee-decorate/feature-user-authorize-popup",
        d = Object(n.a)({
          a: {
            p: [
              {
                r: ["/packages/shop/ump/sign-in/index"],
                c: [
                  {
                    t: "m",
                    c: [
                      "b35-7",
                      "b35-6",
                      "b35-1",
                      "b35-5",
                      { moduleId: "b35-0", name: "SignInPage" },
                    ],
                  },
                ],
                m: ["b35-2", "b35-3", "b35-4"],
              },
            ],
          },
          m: [
            ["b35-0", i, null],
            ["b35-1", r, { d: { title: ["b35-0", "pageTitle"] } }],
            [
              "b35-2",
              s,
              { d: { shopInfo: ["@wsc-tee-shop/shop-core~NzurILNk", "shop"] } },
            ],
            ["b35-3", "@wsc-tee-decorate/jump-link", null],
            ["b35-4", c, null],
            [
              "b35-5",
              "@ext-tee-wsc-goods/biz-sku-manage",
              {
                d: {
                  themeVars: [
                    "@ext-tee-wsc-decorate/theme-color~EKBphALO",
                    "themeCSS",
                  ],
                },
              },
            ],
            [
              "b35-6",
              "@ext-tee-wsc-decorate/page-style",
              null,
              { stage: "pre" },
            ],
            ["b35-7", u, null],
          ],
          e: [
            [i, a("6MkT"), { framework: "weapp" }],
            [r, a("/MSb")],
            [s, a("Y7pJ")],
            ["@wsc-tee-decorate/jump-link", a("OgbJ")],
            [c, a("7xhV")],
            ["@ext-tee-wsc-goods/biz-sku-manage", a("O8mO")],
            ["@ext-tee-wsc-decorate/page-style", a("8v1J")],
            [u, a("czXk")],
          ],
          f: "weapp",
        }),
        l = a("9ZMt"),
        p = a("quXu"),
        h = a("xW8c"),
        g = a("/pw/"),
        m = a("2Pst"),
        f = a("ygrD"),
        v = a("rLrQ"),
        b = a("qwv7"),
        S = {
          config: d,
          builtinBundle: {
            "@wsc-tee-ump/sign-in-page-block": class {
              constructor(e) {
                var { ctx: t } = e;
                this.ctx = t;
              }
              beforePageMount(e) {
                var { query: t, route: a } = e;
                (this.ctx.data.query = t), (this.ctx.data.route = a);
              }
              onShareAppMessage() {
                var {
                  shareTitle: e,
                  bannerImageUrl: t,
                  checkInId: a,
                } = this.ctx.data;
                return {
                  title: e,
                  path: "packages/shop/ump/sign-in/index?checkin_id=" + a,
                  imageUrl: t,
                };
              }
            },
            "@wsc-tee-decorate/navigation-bar": p.a,
            "@wsc-tee-decorate/showcase-container": h.a,
            "@wsc-tee-decorate/jump-link": g.a,
            "@ext-tee-wsc-im/im-message-contact": m.a,
            "@ext-tee-wsc-goods/biz-sku-manage": f.a,
            "@ext-tee-wsc-decorate/page-style": v.a,
            "@wsc-tee-decorate/feature-user-authorize-popup": b.a,
          },
        },
        y = l.default.getGlobal("ranta-app-runtime"),
        T = y.getPageOptions({
          rantaOptions: Object(o.a)(
            { page: "/packages/shop/ump/sign-in/index" },
            S
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: y,
          tee: l.default,
          usedLifecycles: [
            "onPullDownRefresh",
            "onReachBottom",
            "onPageShow",
            "onPageHide",
            "beforePageMount",
            "onShareAppMessage",
          ],
        });
      l.default.page({ mixins: [T] });
    },
    b4fN: function (e, t, a) {
      a.d(t, "a", function () {
        return c;
      });
      var o = a("eijD"),
        n = a("Fcif"),
        i = getApp(),
        r = 10;
      function s(e, t) {
        return (
          void 0 === t && (t = {}),
          i.request({
            path: "/wscuser/ump/get-wechat-card-shop-info.json",
            data: Object(n.a)({ kdtId: e }, t),
          })
        );
      }
      function c(e, t) {
        return u.apply(this, arguments);
      }
      function u() {
        return (u = Object(o.a)(function* (e, t) {
          var { chainStoreInfo: a = {} } = yield i.getShopInfo(),
            { isMultiOnlineShop: o } = a,
            n = i.getKdtId(),
            c = o ? i.getHQKdtId() : i.getKdtId(),
            u = yield s(c, {
              fromParams: e.from_params,
              bizType: e.bizType || r,
              routeKdtId: n,
            });
          if (u)
            try {
              yield wx.navigateToMiniProgram({
                appId: "wxeb490c6f9b154ef9",
                path: "pages/card_open/card_open",
                extraData: {
                  create_card_appid: u.appId,
                  card_id: u.cardId,
                  outer_str: u.outerStr,
                  activate_type: "ACTIVATE_TYPE_NORMAL",
                  jump_appid: i.getAppId(),
                  jump_path: "packages/levelcenter/plus/index",
                },
              });
              var d = () => {
                wx.offAppShow(d), t && t();
              };
              wx.onAppShow(d);
            } catch (e) {}
        })).apply(this, arguments);
      }
    },
    bim0: function (e, t, a) {
      var o = a("yoW1"),
        n = a("B4Jh"),
        i = a("yqAG");
      e.exports = function (e, t) {
        return i(n(e, t, o), e + "");
      };
    },
    c4sB: function (e, t, a) {
      var o = a("Fcif"),
        n = (a("rquh"), a("esrA")),
        i = "@wsc-salesman/salesman-promote-block",
        r = "@ext-tee-wsc-goods/biz-sku-manage",
        s = "@wsc-tee-decorate/feature-user-authorize-popup",
        c = "@wsc-tee-decorate/showcase-container",
        u = "@wsc-tee-salesman/salesman-cube-block",
        d = Object(n.a)({
          a: {
            p: [
              {
                r: ["/packages/shop/salesman/promote/index"],
                c: [
                  {
                    t: "c",
                    c: [
                      {
                        t: "m",
                        c: [
                          { moduleId: "b29-0", name: "PromoteSetupBlock" },
                          "b29-4",
                        ],
                      },
                    ],
                  },
                  { t: "m", c: ["b29-2", "b29-1"] },
                  {
                    t: "m",
                    c: ["@wsc-tee-common/app-content-append~VAtrAMhi"],
                  },
                ],
                m: ["b29-3", "b29-5"],
              },
            ],
          },
          m: [
            [
              "b29-0",
              i,
              {
                e: { "share:query": [["b29-5"]] },
                w: { SalesmanCubeBlock: ["b29-5", "Widget"] },
                p: { setShareInfo: [["b29-5"]] },
              },
            ],
            ["b29-1", r, null],
            ["b29-2", s, null],
            ["b29-3", c, null],
            ["b29-4", "@wsc-tee-decorate/jump-link", null],
            ["b29-5", u, null],
          ],
          e: [
            [i, a("BouC"), { framework: "weapp" }],
            [r, a("O8mO")],
            [s, a("czXk")],
            [c, a("Y7pJ")],
            ["@wsc-tee-decorate/jump-link", a("OgbJ")],
            [u, a("beL+")],
          ],
          f: "weapp",
        }),
        l = a("9ZMt"),
        p = a("DXKY"),
        h = a("VmHG"),
        g = a("lRMv"),
        m = a("we3t"),
        f = a("Ge4K");
      function v(e) {
        return Promise.resolve().then(() =>
          ((e) => {
            var {
                goodsData: t,
                shopData: a,
                pageParams: n,
                shopMetaInfo: i,
              } = e,
              {
                alias: r,
                goods: { id: s },
                shopConfig: c = {},
                delivery: u = {},
              } = t,
              { kdtId: d } = a,
              { shopType: l, shopRole: p } = i,
              {
                supportExpress: h = !1,
                supportLocalDelivery: g = !1,
                supportSelfFetch: v = !1,
              } = u,
              {
                hideShoppingCart: b = 0,
                freightInsurance: S = 1,
                isGift: y = 1,
                isWebImInGoods: T = 1,
                isWish: w = 1,
                showBuyBtn: O = 1,
                showShopBtn: I = 1,
                showWscWebIm: _ = 1,
                scrmCreditDiyName: E = "{}",
              } = c,
              x = {};
            try {
              x = JSON.parse(E);
            } catch (e) {}
            var { name: C = "积分" } = x,
              j = Object(m.n)(n, ["refUrl", "salesmanType", "sl"]),
              P = Object(o.a)({}, j, {
                alias: r,
                goodsId: s,
                kdtId: d,
                offlineId: 0,
                stockNum: Object(m.e)(t, "skuInfo.spuStock.stockNum", 0),
                supportExpress: h,
                supportLocalDelivery: g,
                supportSelfFetch: v,
                shopType: l,
                shopRole: p,
                pointsName: C,
                hideShoppingCart: b,
                freightInsurance: S,
                isGift: y,
                isWebImInGoods: T,
                isWish: w,
                showBuyBtn: O,
                showShopBtn: I,
                showWscWebIm: _,
                soldOutRecommendSwitch: Object(m.e)(
                  t,
                  "shop.multiStore.setting.soldOutRecommendSwitch",
                  !1
                ),
                isFastBuy: Object(m.e)(t, "fastbuyFeature.isFastBuy", !1),
                buyBtnConfig: Object(m.e)(t, "shopConfig.buyBtnConfig", ""),
              });
            return f.a
              .post({
                url: "/wscgoods/weapp/user-goods-state.json",
                headers: { "content-type": "application/json" },
                data: P,
              })
              .then(function (e) {
                void 0 === e && (e = {});
                var t = (function (e, t) {
                  void 0 === e && (e = {});
                  var {
                    pageFeature: a,
                    quotaUsed: o,
                    hasPurchaseRight: n,
                    salableStores: i,
                    soldNum: r,
                    spuStock: s,
                    skuStocks: c,
                  } = e;
                  return {
                    pageFeature: a,
                    goodsExtra: {
                      quotaUsed: o,
                      hasPurchaseRight: n,
                      pointsName: t,
                    },
                    salableStores: i,
                    soldNum: r,
                    spuStock: s,
                    skuStocks: c,
                    isFastBuy: !1,
                  };
                })(e, C);
                return Promise.resolve(t);
              });
          })(e)
        );
      }
      var b = getApp(),
        S = Object(m.e)(b, "globalData.adData", {}),
        y = {
          promoteThemeConfig: {
            priceCommissionText: "最高赚",
            buyBtnMainText: "",
            buyBtnDescText: "购买后最高赚",
            shareBtnMainText: "分享赚钱",
            shareBtnDescText: "分享后预计可赚",
          },
          bottomHeight: 40,
          fetchSuccess: !1,
          serverDeltaTime: 0,
          clientTimestamp: +new Date(),
          serverTimestamp: +new Date(),
          design: [],
          env: {
            platform: "weixin",
            isMobile: !0,
            isWeixin: !0,
            wxpayEnv: {},
            version: "",
            showSku: !1,
            redirectLoginByPlatform: !1,
            isAllCart: !1,
            isNewHopeKdt: !1,
            hideGoodsBottom: !1,
          },
          pageSwitch: {},
          mpData: { account: {}, shop: {} },
          adConfig: {
            isGdt: S.gdt_vid,
            version: S.gdt_vid || "",
            adType: S.qz_gdt || "",
          },
          user: { logined: !0, isAdmin: !1 },
          buyConfig: { isFans: !1, noFansBuy: !1 },
          appEngineConfig: null,
          appConfig: null,
          pageParams: null,
          picture: { pictures: [], height: 320 },
          video: {
            width: 0,
            height: 0,
            coverUrl: "",
            videoUrl: "",
            countPlayedUrl: "",
          },
          goods: {
            type: "normal",
            id: 0,
            alias: "",
            title: "",
            path: "",
            picture: "",
            sellPoint: "",
            origin: "",
            isDisplay: 0,
            isOutlink: !1,
            outlinkUrl: "",
            isGoodsCollected: !1,
            limitBuy: !1,
            isSupportFCode: !1,
            isVirtual: 0,
            isVirtualCoupon: 0,
            isHaitao: !1,
            isCatering: !1,
            isHotel: !1,
            risk: null,
            pointsPrice: "",
            pointsName: "积分",
            price: "0.00",
            minPrice: 0,
            maxPrice: 0,
            soldNum: 0,
            stockNum: 0,
            hideStock: !1,
            totalStockNum: 0,
            limit: {
              quota: 0,
              quotaCycle: 0,
              quotaUsed: 0,
              singleQuota: 0,
              startSaleNum: 1,
            },
            subTitle: "",
            itemSalePropList: [],
            createdType: 0,
            supportUnconditionalReturn: !1,
            barterModel: { isSupportBarter: 0 },
          },
          goodsActivityInfo: {
            activityName: "",
            activityId: 0,
            status: !1,
            startTime: 0,
            endTime: 0,
            maxPrice: 0,
            minPrice: 0,
          },
          goodsCouponsInfo: { couponList: [], optimismCoupon: null },
          salesmanActivityTags: [],
          commissionInfo: {
            levelsVisible: 0,
            allowSelfBuy: 0,
            cpsRate: 0,
            nextLevelCpsRate: 0,
            nextLevelName: "",
            profit: 0,
            nextLevelProfit: 0,
            levelUpgradeInfo: "",
            showLevelInfoStatus: 3,
            isNotShowCpsRateWhenManualSettle: 0,
            isCustom: 0,
            constantCommission: 0,
            nextLevelCpsMoney: 0,
            profitRange: [],
            upgradeNewLevelVersion: !1,
          },
          taskAwardData: {
            hasRunningTask: !1,
            taskId: 0,
            unit: "",
            unitStr: "",
            nextAwardGap: "",
          },
          materials: { list: [], loading: !1 },
          accountInfo: { salesmanType: "", sl: "" },
          limit: { quota: 0, quotaCycle: 0, quotaUsed: 0, singleQuota: 0 },
          salesman: { seller: "" },
          shop: {
            kdtId: 0,
            rootKdtId: 0,
            logo: "",
            name: "",
            city: "",
            province: "",
            address: "",
            phone: "",
            shopType: "",
            isHqShopPreview: "",
          },
          shopConfig: {
            isShowBuyBtn: !1,
            isYouzanSecured: !1,
            isSecuredTransactions: !1,
            isCloseBusiness: !1,
            showBuyRecord: !1,
            principalCertType: 0,
            brandCertType: 0,
            showDefaultCartText: !0,
            cartText: "购物车",
            weixinTransactionSecured: "0",
          },
          followInfo: { qrcodeWeixinImg: "", qrcodeWeixinFetched: !1 },
          guarantee: { on: !1, style: 0, desc: [] },
          goodsDetail: {
            defaultType: "goods",
            featureLoaded: !1,
            tplStyle: 0,
            richText: "",
            showcaseComponents: [],
          },
          tradeRecords: { list: [], page: 1, loading: !1, finished: !1 },
          originSku: {},
          originNormalSku: null,
          originActivitySku: null,
          originPointsSku: null,
          activityInfo: {
            activityAlias: "",
            activityId: 0,
            activityType: 0,
            umpType: "",
          },
          skuData: {},
          staticSkuInfo: {
            spuPrice: {},
            skuPrices: [],
            spuStock: {},
            skuStocks: [],
          },
          postData: {},
          display: {
            forbidBuyReason: "",
            showBuyBtn: !0,
            showForbidBuyBtn: !1,
            showDefaultBuyButtonText: !0,
            buyButtonText: "",
          },
          displayPop: {
            sharePopShow: !1,
            skuPopShow: !1,
            maskShow: !1,
            showCouponPopUp: !1,
          },
          orderPromotionLimit: !1,
          orderPromotion: [],
          umpCouponList: [],
          optimalCouponList: [],
          tradeRecordsV2: [],
          userCenterTitle: "个人中心",
          goodsExtendInfo: { SHOP_NOTE: null, HOT_RECOMMEND: null },
          navItemTopList: [],
          shareCardInfo: {},
          thirdYunInfo: { share: {} },
        };
      var T = {
        showPrice: "",
        price: 0,
        pointsPrice: 0,
        oldPrice: 0,
        priceTitle: "",
        notShowPriceTitle: !1,
        soldNum: 0,
        stockNum: 0,
      };
      function w(e) {
        return (
          void 0 === e && (e = []),
          e.reduce((e, t) => Object(o.a)({}, e, { [t.skuId]: t }), {})
        );
      }
      function O(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = null);
        var {
            props: a = [],
            messages: n = [],
            skus: i = [],
            hideStock: r = !1,
          } = e,
          s = [],
          c = Object(o.a)({}, T, {
            hideStock: r,
            tree: a,
            list: s,
            messages: n,
          }),
          u = w(e.skuPrices),
          d = w(e.skuStocks);
        if (t) {
          var l = w(t.skuPrices),
            p = w(t.skuStocks);
          (s = i.map((e) => {
            var t = e.skuId,
              a = u[t].price,
              n = p[t];
            n && n.disable && (n = Object(o.a)({}, n, { stockNum: 0 }));
            var i = l[t];
            return (
              i &&
                i.price > 0 &&
                (i = Object(o.a)({}, i, { notShowPriceTitle: i.price >= a })),
              Object(o.a)({}, T, e, { oldPrice: a }, i, n, { id: t })
            );
          })),
            (c = Object(o.a)({}, c, t.spuStock, t.spuPrice, {
              collectionId: Object(m.e)(t, "spuStock.skuId", 0),
              collectionPrice: Object(m.e)(t, "spuPrice.price", 0),
              oldPrice: Object(m.e)(e, "spuPrice.price", 0),
              list: s,
            }));
        } else
          (s = i.map((e) => {
            var t = e.skuId;
            return Object(o.a)({}, T, e, { oldPrice: 0 }, u[t], d[t], {
              id: t,
            });
          })),
            (c = Object(o.a)({}, c, e.spuStock, e.spuPrice, {
              collectionId: Object(m.e)(e, "spuStock.skuId", 0),
              collectionPrice: Object(m.e)(e, "spuPrice.price", 0),
              list: s,
            }));
        var h = 1 / 0,
          g = 0,
          f = 1 / 0,
          v = 0,
          b = 1 / 0,
          S = 0,
          y = 0 === c.list.length,
          O = 0;
        return (
          y
            ? ((c.collectionPrice = h = g = c.price), (b = S = c.oldPrice || 0))
            : ((c.stockNum = c.list.reduce((e, t) => e + (t.stockNum || 0), 0)),
              c.list.forEach((e) => {
                if (!(e.disable || (c.stockNum > 0 && 0 === e.stockNum))) {
                  if (e.recommendedPrice) {
                    if (
                      ((e.isVipPriceAdvantage = e.recommendedPrice < e.price),
                      e.isVipPriceAdvantage)
                    ) {
                      var t = e.oldPrice - e.recommendedPrice;
                      (f = Math.min(f, t)), (v = Math.max(v, t));
                    }
                    0 === O && (O = e.isVipPriceAdvantage),
                      (O = O && e.isVipPriceAdvantage);
                  }
                  (h = Math.min(h, e.price)),
                    (g = Math.max(g, e.price)),
                    (b = Math.min(b, e.oldPrice)),
                    (S = Math.max(S, e.oldPrice));
                }
              }),
              (c.price = h || g || 0),
              (c.oldPrice = b || S || 0)),
          (c.price = c.price || h || g || 0),
          isFinite(S) || (S = 0),
          (c.oldPrice = c.oldPrice || b || S || 0),
          Object(m.l)(
            Object(o.a)({}, c, {
              noneSku: y,
              minPrice: h,
              maxPrice: g,
              minVipSavedPrice: f,
              maxVipSavedPrice: v,
              isAllVipPriceAdvantage: O,
              oldMinPrice: b,
              oldMaxPrice: S,
            })
          )
        );
      }
      function I(e) {
        return e && "number" == typeof e ? (e / 100).toFixed(2) : e;
      }
      function _(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = "积分");
        var {
            pointsPriceText: a = "",
            price: o = 0,
            minPrice: n = -1,
            maxPrice: i = -1,
            pointsPrice: r = -1,
            oldPrice: s = 0,
            oldMinPrice: c = -1,
            oldMaxPrice: u = -1,
          } = e,
          d = "",
          l = "";
        return (
          a
            ? (d = a)
            : r > 0
            ? ((d = "" + r + t), o > 0 && (d = d + "+￥" + I(o)))
            : (d = i > n && n >= 0 ? I(n) + "-" + I(i) : "" + I(o)),
          s > o || c > n
            ? u > c
              ? (l = I(c) + "-" + I(u))
              : s > 0 && (l = "" + I(s))
            : (l = ""),
          { showPrice: d, showOldPrice: l }
        );
      }
      var E = function (e, t) {
        return (
          void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          {
            state: Object(o.a)({}, e.state, t.state),
            getters: Object(o.a)({}, e.getters, t.getters),
            actions: Object(o.a)({}, e.actions, t.actions),
            mutations: Object(o.a)({}, e.mutations, t.mutations),
          }
        );
      };
      var x = a("cqgp");
      function C(e, t) {
        void 0 === t && (t = {});
        var { pageParams: a = {}, goods: n = {}, shopMetaInfo: i } = t,
          {
            type: r = "",
            goods: s = {},
            shop: c = {},
            shopConfig: u = {},
            voucherModelList: d = [],
            skuInfo: l,
            extendModelList: p,
          } = n,
          h = O(l),
          g = Object(o.a)({}, h),
          f = (function (e) {
            if ((void 0 === e && (e = []), !Array.isArray(e) || !e.length))
              return {};
            var t = {};
            return (
              e.forEach((e) => {
                t[e.type] = e;
              }),
              t
            );
          })(p);
        Object.assign(e, {
          originSku: h,
          originNormalSku: g,
          staticSkuInfo: l,
          goodsExtendInfo: f,
        }),
          Object.assign(e, {
            shop: {
              kdtId: c.kdtId,
              logo: c.logo,
              name: c.shopName,
              city: c.city || "",
              province: c.province || "",
              address: c.address || "",
              rootKdtId: i.rootKdtId,
              shopMetaInfo: i,
              phone: "",
              shopType: c.shopType || "",
              isHqShopPreview: c.isHqShopPreview,
            },
          });
        var v = Object(m.e)(s, "video", {});
        Object.assign(e.video, {
          width: +v.coverWidth,
          height: +v.coverHeight,
          coverUrl: v.coverUrl,
          videoUrl: v.videoUrl || "",
          countPlayedUrl: v.countPlayedUrl || "",
        });
        var { pictures: b } = s;
        v.coverUrl && b.unshift({ url: v.coverUrl }),
          Object.assign(e.picture, {
            pictures: b || [],
            height: s.pictureHeight,
          });
        var { showPrice: S, showOldPrice: y } = _(g),
          {
            umpAlias: T = "",
            umpType: w = "",
            activityId: I = "",
            activityType: E = "",
          } = Object(m.l)(a),
          x = Object(m.n)(a, [
            "ump_alias",
            "ump_type",
            "access_token",
            "app_id",
          ]),
          C = Object(m.h)(
            Object(o.a)({}, x, {
              umpType: w,
              umpAlias: T,
              activityId: I,
              activityType: E,
              alias: s.alias,
            })
          );
        Object.assign(e.goods, {
          type: r,
          id: s.id,
          alias: s.alias,
          title: s.title,
          subTitle: s.subTitle,
          path: C,
          picture: Object(m.d)(Object(m.e)(s, "pictures.0.url", "")),
          sellPoint: s.sellPoint || "",
          origin: s.origin,
          isDisplay: s.isDisplay,
          isOutlink: 0 === s.buyWay,
          outlinkUrl: Object(m.j)(s.buyUrl),
          isVirtual: s.isVirtual,
          isVirtualCoupon: s.isVirtualCoupon,
          isHaitao: s.isHaitao,
          isCatering: s.isCatering,
          isHotel: s.isHotel,
          risk: s.risk,
          limit: {
            quota: s.quota,
            quotaUsed: 0,
            singleQuota: s.isHaitao || s.isVirtualCoupon ? 100 : 0,
            quotaCycle: s.quotaCycle,
            startSaleNum: s.startSaleNum || 1,
          },
          soldNum: s.soldNum,
          stockNum: g.stockNum,
          hideStock: g.hideStock,
          price: S,
          oldPrice: y,
          minPrice: g.minPrice,
          maxPrice: g.maxPrice,
          oldMinPrice: 0,
          oldMaxPrice: 0,
          itemSalePropList: s.itemSalePropList || [],
          createdType: s.createdType,
          supportUnconditionalReturn: s.supportUnconditionalReturn,
          barterModel: s.barterModel,
        }),
          Object.assign(e.shop, { kdtId: c.kdtId, phone: c.phone }),
          Object.assign(e.shopConfig, {
            isYouzanSecured: u.isYouzanSecured,
            isSecuredTransactions: u.isSecuredTransactions,
            showBuyRecord: u.buyRecord,
            principalCertType: u.principalCertType || 0,
            brandCertType: u.brandCertType || 0,
            goodsDetailBuyRecord: u.goodsDetailBuyRecord || "",
            goodsDetailSales: u.goodsDetailSales || null,
            buyBtnConfig: u.buyBtnConfig || null,
            weixinTransactionSecured: u.weixinTransactionSecured,
          });
        var j = Object(m.e)(s, "youzanGuaranteeModel", {});
        Object.assign(e.guarantee, {
          on: j.youzanGuarantee || 0,
          style: u.guaranteeShowStyleType,
          desc: j.guaranteedComponents || [],
        });
        var P = s.itemDetailTplStyle || 0;
        Object.assign(e.goodsDetail, { defaultType: "goods", tplStyle: P }),
          Array.isArray(d) &&
            (e.umpCouponList = d.map((e) => ((e.disabled = !1), e)));
      }
      function j(e, t) {
        void 0 === t && (t = {});
        var {
          pageFeature: a = {},
          goodsExtra: n = {},
          soldNum: i = null,
          skuStocks: r,
          spuStock: s,
          goodsActivityInfo: c = {},
        } = t;
        !(function (e, t, a) {
          if (t || a) {
            a && Object.assign(e.staticSkuInfo, { skuStocks: a }),
              t && Object.assign(e.staticSkuInfo, { spuStock: t });
            var n = O(e.staticSkuInfo);
            e.originNormalSku = Object(o.a)({}, n);
          }
        })(e, s, r),
          (e.fetchSuccess = !0);
        var { hasPurchaseRight: u = !0, quotaUsed: d = 0 } = n;
        Object.assign(e.goods, {
          limitBuy: !u,
          soldNum: null === i ? e.goods.soldNum : i,
        }),
          Object.assign(e.goods.limit, { quotaUsed: d }),
          Object.assign(e.display, {
            forbidBuyReason: a.forbidBuyReason,
            showBuyBtn: a.showBuyButton,
            showForbidBuyBtn: a.showForbidBuyButton,
            showMiniShopBtn: a.showMiniShopButton,
            showShareBtn: a.showShareButton,
          }),
          c.activityName &&
            (function (e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = {});
              var { minPrice: a, maxPrice: n } = e.goods,
                { showPrice: i, showOldPrice: r } = _(
                  Object(o.a)({}, t, { oldMinPrice: a, oldMaxPrice: n })
                );
              e.goods = Object(o.a)({}, e.goods, {
                price: i,
                minPrice: t.minPrice,
                maxPrice: t.maxPrice,
                oldPrice: r,
                oldMinPrice: a,
                oldMaxPrice: n,
              });
            })(e, c),
          e.originActivitySku ||
            Object.assign(e, { originActivitySku: e.originNormalSku });
      }
      var P = {
          updatePageDesign(e, t) {
            e.design = t;
          },
          updateServerTime(e, t) {
            var { clientTimestamp: a, serverTimestamp: o } = t;
            (e.serverDeltaTime = o - a),
              (e.serverTimestamp = o),
              (e.clientTimestamp = a);
          },
          SET_PAGE_SWITCH(e, t) {
            e.pageSwitch = t;
          },
          SET_ITEM_ID(e, t) {
            e.goods.id = t;
          },
          initStaticData(e, t) {
            var {
              pageParams: a,
              goodsData: n,
              offlineData: i,
              shopMetaInfo: r,
            } = t;
            C(e, { pageParams: a, goods: n, offlineData: i, shopMetaInfo: r }),
              (function (e) {
                var t = e.goods.picture,
                  { itemSalePropList: a = [] } = e.goods,
                  { tree: n = [] } = e.originNormalSku,
                  i = [],
                  r = "",
                  s = n[0] || {};
                Object(m.e)(s, "v.0.imgUrl", "") &&
                  ((i = s.v.map((e) =>
                    Object(m.g)(Object(m.d)(e.imgUrl || t))
                  )),
                  (r = s.k));
                var c = i.length,
                  u = n.map((e) => ({ id: e.kId, name: e.k, value: null })),
                  d = a.map((e) => ({ id: e.kId, name: e.k, value: [] }));
                e.skuExtraData = Object(o.a)({}, e.skuExtraData, {
                  showSkuBar: u.length + d.length > 0,
                  barPictures: i.slice(0, 5),
                  barPictureName: r,
                  barPictureCount: c,
                  selectedSkuTree: u,
                  selectedPropList: d,
                });
              })(e),
              (e.pageParams = a);
          },
          initUserData(e, t) {
            Object.assign(e.buyConfig, {
              isFans: t.isFans,
              noFansBuy: !t.isFansBuy,
            });
          },
          initDisplayData(e, t) {
            !(function (e, t) {
              Object.assign(e.env, {
                isNewHopeKdt: t.isNewHopeKdt,
                isAllCart: t.isAllCart,
                hideGoodsBottom: t.hideGoodsBottom,
              });
            })(e, t);
          },
          UPDATE_GOODS_ASYNC_DATA(e, t) {
            j(e, t);
          },
          updateGoodsActivityInfo(e, t) {
            t && Object.assign(e.goodsActivityInfo, t);
          },
          updateActivityInfo(e, t) {
            t && Object.assign(e.activityInfo, t);
          },
          updateGoodsCouponsInfo(e, t) {
            Object.assign(e.goodsCouponsInfo, t);
          },
          updateSalesmanActivityTags(e, t) {
            e.salesmanActivityTags.some((e) => e.text === t.text) ||
              e.salesmanActivityTags.push(t);
          },
          updateCalendarData(e, t) {
            var { skuId: a, calendarData: n } = t;
            e.priceCalendarData = Object(o.a)({}, e.priceCalendarData, {
              activeSkuId: a,
              [a]: n,
            });
          },
          updateSalesmanTaskAwardData(e, t) {
            t && Object.assign(e.taskAwardData, t);
          },
          updateCommissionInfo(e, t) {
            if (t) {
              var a = (function (e, t) {
                void 0 === t && (t = {});
                var {
                  profitRange: a,
                  nextProfitRange: n,
                  commissionSendType: i,
                  commissionConfigDTO: r,
                  customPointsName: s,
                } = t;
                if (a && a.length) {
                  var { maxCommissionStr: c } = Object(x.a)({
                    profitRange: a,
                    commissionSendType: i,
                    commissionConfigDTO: r,
                    customPointsName: s,
                  });
                  t = Object(o.a)({}, t, { profit: c });
                }
                if (n && n.length) {
                  var { maxCommissionStr: u } = Object(x.a)({
                    profitRange: n,
                    commissionSendType: i,
                    commissionConfigDTO: r,
                    customPointsName: s,
                  });
                  t = Object(o.a)({}, t, { nextLevelProfit: u });
                }
                return t;
              })(0, t);
              Object.assign(e.commissionInfo, a);
            }
          },
          updateActivityProfitCommissionInfo(e, t) {
            if (t) {
              var a = (function (e, t) {
                void 0 === t && (t = {});
                var { maxPrice: a } = t,
                  { commissionInfo: n } = e,
                  { cpsRate: i, nextLevelCpsRate: r } = n;
                if (i && a) {
                  var s = Object(m.i)(i, a);
                  t = Object(o.a)({}, t, { profit: s });
                }
                if (r && a) {
                  var c = Object(m.i)(r, a);
                  t = Object(o.a)({}, t, { nextLevelProfit: c });
                }
                return t;
              })(e, t);
              Object.assign(e.commissionInfo, a);
            }
          },
          toggleGoodsMask(e, t) {
            void 0 === t && (t = !1), (e.displayPop.maskShow = t);
          },
          updateMiniButtons(e, t) {
            e.miniButtons = t;
          },
          UPDATE_SHOP_DATA(e, t) {
            void 0 === t && (t = {}), (e.shop = Object(o.a)({}, e.shop, t));
          },
          setSalesmanData(e, t) {
            void 0 === t && (t = {}),
              (e.salesman = Object(o.a)({}, e.salesman, t));
          },
          updateAccountInfo(e, t) {
            void 0 === t && (t = {}), (e.accountInfo = t);
          },
          hideSharePop(e) {
            e.displayPop.sharePopShow = !1;
          },
          showSharePop(e) {
            e.displayPop.sharePopShow = !0;
          },
          SET_BOTTOM_HRIGHT(e, t) {
            e.bottomHeight = t;
          },
          setNavItemTopList(e, t) {
            void 0 === t && (t = []), (e.navItemTopList = t);
          },
          updateShareCardInfo(e, t) {
            e.shareCardInfo = t;
          },
          updateThirdYunInfo(e, t) {
            e.thirdYunInfo = Object(o.a)({}, e.thirdYunInfo, t);
          },
          updatePromoteThemeConfig(e, t) {
            t &&
              (e.promoteThemeConfig = Object(o.a)({}, e.promoteThemeConfig, t));
          },
        },
        k = a("hHpg"),
        A = a("mBPn"),
        L = { platformSpecialUI: {}, platform: "weixin" };
      var D = a("RJZ0"),
        R = [
          { type: "image-block", slots: [], notShow: !1 },
          { type: "base-info-block", slots: [], notShow: !1 },
          { type: "coupon-block", slots: [], notShow: !1 },
          {
            type: "goods-detail-block",
            slots: [],
            notShow: !1,
            extra: { ref: "goodsDetail" },
          },
          { type: "task-award-block", slots: [], notShow: !1 },
          { type: "trade-carousel", slots: [], notShow: !1 },
          { type: "price-intro-block", slots: [], notShow: !1 },
          { type: "fixed-bottom-block", notShow: !1 },
        ],
        N = {
          fetchThemeConfig(e, t) {
            var { dispatch: a } = e;
            return f.a
              .get({ url: "/wscsalesman/common/getThemeConfig.json", query: t })
              .then((e) => {
                var { components: t } = e,
                  { promoteDetailPage: o } = JSON.parse(t)[0];
                a("updatePromoteThemeConfig", o);
              })
              .catch();
          },
          fetchGoodsData(e, t) {
            var { dispatch: a } = e;
            return f.a
              .get({
                url: "/wscgoods/weapp/detail-v2.json",
                query: Object(o.a)({}, t, {
                  notQueryVoucher: 1,
                  notQueryYouzanGuarantee: !0,
                  withSeckillError: !0,
                }),
                config: { noStoreId: !0 },
              })
              .then((e) => {
                var { goods: t } = e.goodsData;
                return 0 === t.buyWay
                  ? Promise.reject({
                      message: "外链商品不支持展示",
                      NO_TRY: !0,
                    })
                  : (delete e.pageParams.withSeckillError,
                    a(
                      "updateGoodsStaticData",
                      Object(o.a)({}, e, { design: R })
                    ),
                    a("getImgUrl"),
                    e);
              });
          },
          setItemId(e, t) {
            var { commit: a } = e;
            a("SET_ITEM_ID", t);
          },
          setActivityInfo(e, t) {
            var { commit: a } = e;
            a("updateActivityInfo", t);
          },
          updateGoodsStaticData(e, t) {
            var { commit: a } = e,
              {
                goodsData: o,
                pageParams: n,
                design: i,
                displayData: r,
                apolloSwitch: s,
                offlineData: c,
                shopMetaInfo: u,
                platformSpecialUI: d,
              } = t;
            a("initStaticData", {
              goodsData: o,
              pageParams: n,
              offlineData: c,
              shopMetaInfo: u,
            }),
              a("SET_PAGE_SWITCH", s),
              a("updatePageDesign", i),
              a("initDisplayData", r),
              (function (e, t) {
                void 0 === t && (t = {}), (L.platformSpecialUI = t);
              })();
          },
          updateGoodsAsyncData(e, t) {
            var { commit: a, dispatch: o } = e;
            o("updateCouponsAndActivityInfo", t);
            var n = +new Date(),
              { serverTimestamp: i = +new Date() } = t;
            a("updateServerTime", { serverTimestamp: i, clientTimestamp: n });
          },
          updateCouponsAndActivityInfo(e, t) {
            var { commit: a, getters: n } = e,
              { userState: i, activityData: r } = t,
              { itemId: s } = n;
            Object(D.a)(Object(o.a)({ itemId: s }, r))
              .then((e) => {
                var { activityInfo: t, couponsInfo: n } = e || {};
                a("updateGoodsActivityInfo", t),
                  a("updateActivityProfitCommissionInfo", t),
                  a("updateGoodsCouponsInfo", n);
                var r = Object(m.e)(n, "couponList", []),
                  s = Object(m.e)(n, "optimismCoupon", null);
                (r.length || s) &&
                  a("updateSalesmanActivityTags", { text: "可发券" }),
                  a(
                    "UPDATE_GOODS_ASYNC_DATA",
                    Object(o.a)({}, i, { goodsActivityInfo: t })
                  );
              })
              .catch((e) => {});
          },
          reload() {
            wx.startPullDownRefresh();
          },
          setSalesmanData(e, t) {
            var { commit: a } = e;
            a("setSalesmanData", t);
          },
          getGoodsRecommendRateLevelInfo(e) {
            var { getters: t, commit: a } = e,
              { itemId: o } = t;
            return Object(D.b)({ itemId: o })
              .then((e) => (a("updateCommissionInfo", e), e))
              .catch((e) => {});
          },
          initPageState(e) {
            var { getters: t, dispatch: a } = e;
            t.isRetailShop && a("getRetailShopInfo");
          },
          countdownEnded(e) {
            var { dispatch: t } = e;
            t("reload");
          },
          getNavItemTop(e, t) {
            var { getters: a, commit: o } = e;
            void 0 === t && (t = {});
            var { scrollTop: n = 0, self: i } = t,
              r = a.navTabList.map(
                (e) => ".page-goods >>> #js-nav-" + e.selector
              ),
              s = i.createSelectorQuery(),
              c = [];
            s.selectAll(r.join(","))
              .boundingClientRect((e) => {
                e &&
                  (e.reduce(
                    (e, t) => (t.id && t.id !== e.id && c.push(t.top + n), t),
                    {}
                  ),
                  o("setNavItemTopList", c));
              })
              .exec();
          },
          updateAccountInfo(e, t) {
            var { commit: a } = e;
            void 0 === t && (t = {}), a("updateAccountInfo", t);
          },
          toggleGoodsMask(e, t) {
            var { commit: a } = e;
            void 0 === t && (t = !1), a("toggleGoodsMask", t);
          },
          showCommonToast(e, t) {
            var { dispatch: a } = e;
            if ((void 0 === t && (t = {}), t)) {
              var { message: o = "", autoReload: n = 0 } = t;
              if (o) {
                var i = k.a.loading({
                  message: o,
                  duration: 1e3 * (n || 2),
                  forbidClick: !!n,
                });
                if (n) {
                  var r = n,
                    s = () => {
                      r--,
                        (i.message = o + "(" + r + "s)"),
                        r > 0 ? setTimeout(s, 1e3) : a("reload");
                    };
                  s();
                }
              }
            }
          },
          setTrackLooger(e, t, a) {
            var { getters: n } = e;
            void 0 === a && (a = {}),
              Object(A.a)(t, Object(o.a)({}, a, { sl: n.sl }));
          },
          getImgUrl(e) {
            var { state: t, commit: a } = e,
              { goods: n, activityInfo: i } = t,
              {
                activityAlias: r,
                activityType: s,
                activityId: c,
                umpType: u,
              } = i,
              { alias: d } = n,
              l = Object(m.f)({
                activityAlias: r,
                activityType: s,
                activityId: c,
                umpType: u,
              }),
              p = Object(o.a)({ alias: d }, l);
            Object(D.f)(p).then((e) => a("updateShareCardInfo", e));
          },
        },
        M = a("2ncY"),
        B = a("WOkX"),
        G = {
          kdtId: (e) => Object(m.e)(e, "shop.kdtId", 0),
          alias: (e) => Object(m.e)(e, "goods.alias", ""),
          itemId: (e) => Object(m.e)(e, "goods.id", 0),
          sl: (e) => Object(m.e)(e, "salesman.seller", 0),
          getGoodsActivityInfo: (e) => Object(m.e)(e, "goodsActivityInfo", {}),
          platform: (e) => Object(m.e)(e, "env.platform", ""),
          isSupportWish: () => !1,
          version: (e) => Object(m.e)(e, "env.version", ""),
          skuId(e, t) {
            var { getSkuData: a } = t,
              { skuExtraData: o } = e;
            return a.noneSku
              ? a.collectionId
              : o.selectedSkuComb
              ? o.selectedSkuComb.id
              : null;
          },
          customStock: () => !1,
          homepageUrl: (e, t) => Object(M.h)(M.b, { kdt_id: t.kdtId }),
          originGoodsPictures(e) {
            var {
              picture: { pictures: t },
            } = e;
            return t || [];
          },
          currentActivity: (e, t) =>
            t.isTimelimitedDiscount
              ? t.timelimitedDiscountActivity
              : t.isPresale
              ? t.presaleActivity
              : {},
          countdown(e, t) {
            var { timelimitedDiscountCountdown: a } = t;
            return a || null;
          },
          getSkuData(e, t) {
            var a = e.skuData || {};
            return t.isDepositPresale && !t.isDepositPresaleOver
              ? t.depositPresaleSkuData
              : t.isFCode
              ? e.originActivitySku
              : a;
          },
          isMultiStore: (e) => Object(m.e)(e, "multistore.id", 0) > 0,
          isNormalTplStyle: () => !0,
          isSellOut: (e) => e.goods.stockNum <= 0,
          activityInfoForPrice: () => ({}),
          shareWxData(e) {
            var {
                salesman: t,
                goods: a,
                activityInfo: n,
                shareCardInfo: i,
              } = e,
              {
                activityAlias: r,
                activityType: s,
                activityId: c,
                umpType: u,
              } = n,
              { title: d, alias: l, picture: p } = a,
              { shareTitle: h, imgUrl: g, alg: f = "", share_from: v = "" } = i,
              b = Object(m.f)({
                activityAlias: r,
                activityType: s,
                activityId: c,
                umpType: u,
              }),
              S = Object(o.a)({ alias: l }, b),
              y = {
                title: h || d,
                path: m.b.add(
                  "pages/goods/detail/index",
                  Object(o.a)({}, S, { alg: f, share_from: v })
                ),
              };
            return (
              (S.timestamp = +new Date()),
              (y.imageUrl = g || p),
              t &&
                t.seller &&
                (y.path = Object(B.a)({ url: y.path, sl: e.salesman.seller })),
              y
            );
          },
          jumpGoodsDetailQuery(e, t) {
            var {
                activityAlias: a,
                activityType: n,
                activityId: i,
                umpType: r,
              } = e.activityInfo,
              { alias: s } = t,
              c = Object(m.f)({
                activityAlias: a,
                activityType: n,
                activityId: i,
                umpType: r,
              });
            return Object(o.a)({ alias: s, fromType: "sp" }, c);
          },
        },
        U = a("9KEa"),
        q = {
          state: {},
          getters: {
            showGoodsVideo: (e) => !!e.video.videoUrl,
            goodsPictures: (e, t) =>
              t.originGoodsPictures.map((e) =>
                Object(m.d)(e.url, "!750x0.jpg")
              ),
            goodsPictureHeight(e, t) {
              var a = 0.75;
              t.originGoodsPictures.forEach(function (e) {
                void 0 === e && (e = {});
                var { height: t = 0, width: o = 0 } = e;
                t && o && (a = Math.max(a, t / o));
              }),
                (a = Math.min(4 / 3, a)),
                (a = Math.max(3 / 4, a));
              var o = Object(U.b)().windowWidth;
              return Math.floor(o * a);
            },
          },
          actions: {},
          mutations: {},
        },
        F = {
          state: {},
          getters: {},
          actions: {
            getTaskAwardData(e) {
              var { getters: t, commit: a } = e,
                o = { itemId: t.itemId, needShowNextGap: !0 };
              Object(D.e)(o)
                .then((e) => {
                  if (e) {
                    var { hasRunningTask: t } = e;
                    t && a("updateSalesmanActivityTags", { text: "任务奖励" }),
                      a("updateSalesmanTaskAwardData", e);
                  }
                })
                .catch((e) => {});
            },
          },
          mutations: {},
        },
        z = a("zMoS"),
        H = 0,
        W = 1;
      var Y = {
          state: {},
          getters: {
            showBuyRecordFloatStyle: (e, t) =>
              t.parsedGoodsDetailBuyRecord.indexOf(W) > -1,
            parsedGoodsDetailBuyRecord(e) {
              var t = Object(z.a)(e, "shopConfig.goodsDetailBuyRecord", null),
                { showBuyRecord: a } = e.shopConfig,
                o = a ? [H, W] : [];
              if (t)
                try {
                  o = JSON.parse(t) || o;
                } catch (e) {}
              return o;
            },
          },
          actions: {
            getTradeRecordsV2(e) {
              var { commit: t, getters: a } = e,
                { itemId: o } = a;
              o &&
                Object(D.c)({ itemId: o })
                  .then((e) => {
                    e && e.length && t("setTradeRecords", e);
                  })
                  .catch(() => {});
            },
          },
          mutations: {
            setTradeRecords(e, t) {
              e.tradeRecordsV2 = t.map((e) => {
                e.show = !1;
                var { cpsMoney: t, avatar: a } = e;
                return (
                  (e.avatar = Object(m.d)(a)),
                  (e.cpsMoneyFormat = Object(m.m)(t, !0)),
                  (e.desc = (function (e) {
                    var { dsNickName: t = "", cpsMoneyFormat: a = 0 } = e;
                    return (
                      t + " 成功卖出该商品" + (a > 0 ? "赚" + a + "元" : "")
                    );
                  })(e)),
                  e
                );
              });
            },
          },
        },
        K = {
          state: { cartInfo: { count: 0 } },
          getters: {
            buyBtnTextInfo(e) {
              var {
                  allowSelfBuy: t,
                  profitRange: a,
                  commissionSendType: o,
                  commissionConfigDTO: n,
                  customPointsName: i,
                } = e.commissionInfo,
                { buyBtnMainText: r, buyBtnDescText: s } = e.promoteThemeConfig;
              if (t) {
                var { maxCommissionStr: c } = Object(x.a)({
                  profitRange: a,
                  commissionSendType: o,
                  commissionConfigDTO: n,
                  customPointsName: i,
                });
                if (c)
                  return {
                    btnText: "" + (r || "自购省钱"),
                    btnDesc: s + " " + c,
                  };
              }
              return { btnText: (r || "立即购买") + " " };
            },
            shareBtnTextInfo(e) {
              var {
                  profitRange: t,
                  commissionSendType: a,
                  commissionConfigDTO: o,
                  customPointsName: n,
                } = e.commissionInfo,
                { shareBtnMainText: i, shareBtnDescText: r } =
                  e.promoteThemeConfig,
                { maxCommissionStr: s, compatibleCommission: c } = Object(x.a)({
                  commissionSendType: a,
                  commissionConfigDTO: o,
                  customPointsName: n,
                  profitRange: t,
                });
              return s
                ? { btnText: "" + i, btnDesc: "" + r + c }
                : { btnText: "" + i };
            },
            disabledBtnTextInfo(e, t) {
              var { stockNum: a = 0, isDisplay: o = 1 } = e.goods,
                { homepageUrl: n } = t;
              return 1 === o && a
                ? null
                : { btnText: "查看店铺其他商品", url: n };
            },
            goodsBottomDisabledTip(e, t) {
              var { stockNum: a = 0, isDisplay: o = 1, limitBuy: n } = e.goods,
                { homepageUrl: i } = t;
              return 1 !== o
                ? { text: "商品下架啦", url: i }
                : a
                ? n
                  ? { text: "该商品仅限特定会员购买", showTask: !0 }
                  : { text: "", url: "", showTask: !0 }
                : { text: "该商品售罄了", url: i };
            },
            cubeGoodsInfo(e, t) {
              var { goodsActivityInfo: a } = e,
                n = {
                  activityId: a.activityId,
                  activityType: a.activityType || a.umpType,
                  activityAlias: a.activityAlias,
                  activityName: a.activityName,
                };
              return Object(o.a)({}, e.goods, {
                goodsActivityInfo: n,
                goodsMainPictures: t.goodsPictures,
                goodsOriginPictures: t.originGoodsPictures,
                goodsPrice: {
                  maxPrice: e.goods.maxPrice,
                  minPrice: e.goods.minPrice,
                  maxOriginPrice: e.goods.oldMaxPrice,
                  minOriginPrice: e.goods.oldMinPrice,
                },
              });
            },
          },
          actions: {},
          mutations: {},
        },
        V = a("gcCW"),
        J = {
          state: {},
          getters: {
            showActivityBanner(e, t) {
              var { activityName: a } = t.goodsActivityInfo;
              return !!a;
            },
            activityPrice(e, t) {
              var { oldPrice: a = "" } = e.goods,
                { minPrice: o = 0, maxPrice: n = 0 } = t.goodsActivityInfo;
              return {
                isRange: o !== n,
                showPrice: Object(m.c)(+o).split("."),
                originPrice: a,
              };
            },
            activityNotStart(e) {
              var { status: t } = e.goodsActivityInfo;
              return !!t;
            },
            baseInfoBarTag(e, t) {
              var { activityName: a } = t.goodsActivityInfo;
              return a;
            },
            showOriginPrice(e) {
              var { price: t, oldPrice: a, origin: o } = e.goods;
              if (a && a !== t) return { label: "价格", price: "￥" + a };
              var n = o || "";
              return /^\s*\d+(\.\d{1,2})?\s*$/.test(n)
                ? { label: "价格", price: "￥" + n.trim() }
                : { label: "", price: n };
            },
            showGuaranteeBar: (e) => e.guarantee.on,
            isWxPromise: (e) => "1" === e.shopConfig.weixinTransactionSecured,
            guaranteeDesc(e) {
              var { guarantee: t = {} } = e;
              return t.on && t.style !== V.a.WHITE && t.style !== V.a.GREEN
                ? [...(t.desc || [])]
                    .sort((e, t) => e.sort - t.sort)
                    .slice(0, 5)
                    .map((e) => e.desc)
                    .join(" · ")
                : "";
            },
            soldNumText(e) {
              var { soldNum: t } = e.goods;
              return t ? "已成交 " + t + "笔" : "";
            },
            showLevelBlock(e) {
              var { commissionInfo: t = {} } = e,
                { showLevelInfoStatus: a } = t;
              return 3 !== a;
            },
            levelUpgradeTextData(e) {
              var { commissionInfo: t = {} } = e,
                {
                  nextLevelCpsRate: a,
                  nextLevelProfit: o,
                  nextLevelName: n,
                  showLevelInfoStatus: i,
                  nextLevelCpsMoney: r,
                } = t;
              return 1 == +i && (a || r || o)
                ? {
                    showNextLevelRate: !0,
                    nextLevelName: n,
                    nextLevelCpsRate: Object(m.a)(a, 100) + "%",
                    nextLevelProfit: o,
                  }
                : {};
            },
            commissionData(e) {
              var {
                  cpsRate: t,
                  isNotShowCpsRateWhenManualSettle: a,
                  profitRange: n,
                  commissionSendType: i,
                  commissionConfigDTO: r,
                  customPointsName: s,
                } = e.commissionInfo,
                { priceCommissionText: c } = e.promoteThemeConfig,
                u = { type: "money", text: c, value: 0 };
              if (a)
                return Object(o.a)({}, u, {
                  type: "none",
                  value: "人工结算",
                  text: "",
                });
              var { maxCommissionStr: d } = Object(x.a)({
                profitRange: n,
                isYuan: !0,
                commissionSendType: i,
                commissionConfigDTO: r,
                customPointsName: s,
              });
              return d
                ? Object(o.a)({}, u, { value: d })
                : t > 0
                ? {
                    type: "rate",
                    text: "佣金比例",
                    value: Object(m.a)(t, 100) + "%",
                  }
                : u;
            },
          },
          actions: {},
          mutations: {},
        },
        Z = a("cXWm"),
        Q = {
          showGoodsCoupon(e) {
            var { goodsCouponsInfo: t } = e,
              { couponList: a, optimismCoupon: o } = t;
            return !!(!!o || (a && a.length));
          },
          couponsList(e) {
            var { goodsCouponsInfo: t } = e,
              { couponList: a } = t;
            return a && a.length ? a : [];
          },
          couponsNumber(e) {
            var { goodsCouponsInfo: t } = e,
              { couponList: a, optimismCoupon: o } = t;
            return !!o ? a.length + 1 : a.length;
          },
          showMoreCoupon(e, t) {
            var a = t.couponsList.length > 10,
              { salesmanType: o } = e.accountInfo,
              n = o !== Z.b.INTERNAL_SALESMAN;
            return a && n;
          },
          optimalCouponData(e, t) {
            var { couponsList: a } = t,
              { goodsCouponsInfo: o } = e,
              { optimismCoupon: n } = o,
              i = !!n,
              r = {
                hasOptimalCoupon: i,
                couponText: i
                  ? "发放最优券给客户，最多可省" +
                    n.discountInfo +
                    n.discountUnit
                  : "给好友发券，好友领取后可绑定客户关系",
                optimismCoupon: n,
              };
            return !n && a && a.length && (r.optimismCoupon = a[0]), r;
          },
        },
        X = a("RY8z"),
        $ = {
          state: {},
          getters: Q,
          actions: {
            goCouponFetch(e, t) {
              var { state: a } = e,
                { sl: o, salesmanType: n } = a.accountInfo,
                i = n !== Z.b.INTERNAL_SALESMAN,
                r =
                  "/packages/user/coupon/detail/index?type=promocard&alias=" +
                  t;
              X.a.navigate({ url: i ? Object(B.a)({ url: r, sl: o }) : r });
            },
          },
          mutations: {},
        },
        ee = a("a1Mm"),
        te = {
          goodsDetailTabs(e) {
            var t = [],
              { list: a } = e.materials;
            return (
              a &&
                a.length > 0 &&
                t.push({ type: "material", desc: "精选素材" }),
              t.push({ type: "goods", desc: "商品详情" }),
              t
            );
          },
          activeDetailTabIndex: () => 0,
          isNormalTplStyle: () => !0,
          shopLogo(e) {
            var { shop: t } = e,
              a = t.image || t.logo;
            return /\?/.test(a) ? a : Object(ee.a)(a, "!100x100.png");
          },
          shopLink(e) {
            var { id: t } = e.multistore || {},
              { url: a = "" } = e.shop;
            if (t) {
              var o = ~a.indexOf("?") ? "&" : "?";
              a += o + "oid=" + t;
            }
            return a;
          },
        },
        ae = a("1Uvd"),
        oe = a("/JLS"),
        ne = (e) => {
          var { materialType: t, shopNoteMaterial: a, textContent: o = "" } = e;
          return oe.c === t ? a.description : o;
        },
        ie = {
          GET_SHOWCASE_COMPONENTS_SUCCESS(e, t) {
            var { components: a = [], alias: n = "" } = t;
            if (a.length > 0) {
              var i = a.map((e) =>
                "goods_recommend" === e.type
                  ? {}
                  : ((e.key = String(Math.random()).slice(0, 6) + "-" + e.type),
                    (e.risk_type = 1),
                    (e.risk_alias = n),
                    e)
              );
              e.goodsDetail = Object(o.a)({}, e.goodsDetail, {
                showcaseComponents: i,
                themeFeature: {
                  uniqueKey: n + Object(ae.a)(8),
                  componentsLength: i.length,
                },
              });
            } else this.commit("SET_FEATURE_LOADED");
          },
          SET_FEATURE_LOADED(e) {
            e.goodsDetail.featureLoaded = !0;
          },
          GET_MATERIAL_LIST(e) {
            e.materials.loading = !0;
          },
          getMaterialListSuccess(e, t) {
            var { list: a, totalItems: n } = t;
            e.showMoreMaterial = n > 2;
            var i = ((e) =>
              e.map((e) => {
                var {
                  id: t,
                  itemMaterialDTO: a,
                  imageMaterialDTOs: n = [],
                  videoMaterialDTO: i = {},
                  featureMaterial: r = {},
                  shopNoteMaterial: s = {},
                  name: c,
                  usedNum: u,
                  kdtId: d,
                  materialType: l,
                } = e;
                return {
                  id: t,
                  title: c,
                  text: ne(e),
                  imageList: n.map((e) => Object(m.d)(e.url)),
                  videoData: {
                    video: {
                      video_id: i.id,
                      cover_url: i.coverUrl,
                      coverHeight: i.coverHeight,
                      coverWidth: i.coverWidth,
                    },
                  },
                  item: a && {
                    goodsInfo: Object(o.a)({}, a, {
                      title: a.itemName,
                      image: a.pictureUrl,
                    }),
                  },
                  usedNum: u,
                  kdtId: d,
                  featureMaterial: r,
                  shopNoteMaterial: s,
                  materialType: l,
                  syncShareToZone: !0,
                  showAction: !1,
                  isClipboardDataReady: !1,
                  initOpenPop: !0,
                };
              }))(a);
            e.materials = { list: i, loading: !1 };
          },
          getMaterialListFail(e) {
            e.materials.loading = !1;
          },
          updateCheckMaterialStatus(e, t) {
            var a = Object(m.e)(e, "materials.list[" + t + "]");
            a.syncShareToZone = !a.syncShareToZone;
          },
          updateVideoSrcs(e, t) {
            e.videoSrcs.push(t);
          },
          updateSaveTipPublishStatus(e, t) {
            e.syncShareToZone = t;
          },
          SET_PERSONAL_SPACE_ABILITY(e, t) {
            e.hasPersonalSpaceAbility = t;
          },
        },
        re = getApp(),
        se = [
          q,
          F,
          Y,
          K,
          J,
          $,
          {
            state: {
              currentImages: [],
              clipboardBufferArr: [],
              syncShareToZone: !0,
              videoSrcs: [],
              showMoreMaterial: !1,
              hasPersonalSpaceAbility: !1,
            },
            getters: te,
            actions: {
              setVideoSrc(e, t) {
                var { commit: a } = e;
                a("updateVideoSrcs", t);
              },
              getShowcaseComponents(e) {
                var { getters: t, state: a, commit: o } = e;
                re.request({
                  path: "/wscdeco/biz-component/list.json",
                  method: "GET",
                  query: {
                    bizName: "salesmanDetail",
                    queryKeys: "alias,platform",
                    platform: "weapp",
                    alias: t.alias,
                    stage: 100,
                  },
                })
                  .then((e) => {
                    o("GET_SHOWCASE_COMPONENTS_SUCCESS", e);
                  })
                  .catch((e) => {});
              },
              getMaterialList(e) {
                var { state: t, commit: a, getters: o } = e,
                  { loading: n } = t.materials;
                if (!n) {
                  var i = o.itemId;
                  a("GET_MATERIAL_LIST");
                  var r = oe.d;
                  return Object(D.g)({ roleType: r, itemId: i, pageSize: 2 })
                    .then((e) => {
                      a("getMaterialListSuccess", e);
                      var t = Object(m.e)(e, "list.length");
                      return (
                        t &&
                          a("updateSalesmanActivityTags", { text: "精选素材" }),
                        t
                      );
                    })
                    .catch((e) => {
                      a("getMaterialListFail"),
                        Object(k.a)(e.msg || "精选素材获取失败");
                    });
                }
              },
              changeMaterialCheckStatus(e, t) {
                var { state: a, commit: o } = e,
                  { materials: n } = a;
                o(
                  "updateCheckMaterialStatus",
                  n.list.findIndex((e) => e.id === t.id)
                );
              },
              publishMaterial(e, t) {
                var { commit: a } = e;
                return new Promise((e) => {
                  var {
                    imageList: n = [],
                    item: i,
                    videoData: r,
                    text: s,
                    syncShareToZone: c,
                  } = t;
                  if ((a("updateSaveTipPublishStatus", c), c)) {
                    var u = (function (e) {
                        void 0 === e && (e = {});
                        var {
                          alias: t,
                          itemId: a,
                          pictureUrl: o,
                          itemName: n,
                          price: i,
                        } = e;
                        return {
                          alias: t,
                          goodsId: a,
                          image: o,
                          title: n,
                          price: i,
                        };
                      })(i.goodsInfo),
                      d = {
                        imageList: n.map((e) => Object(m.d)(e)),
                        goods: u,
                        recommendInfo: escape(s),
                      };
                    Object(m.e)(r, "video.video_id", "") &&
                      (d = Object(o.a)({}, d, { video: Object(m.l)(r.video) })),
                      Object(D.h)(d)
                        .then((t) => {
                          t && e({ type: "material", status: 1 });
                        })
                        .catch(() => {
                          e({ type: "material", status: 0 });
                        });
                  } else e({});
                });
              },
              getShopAbility(e, t) {
                var { commit: a } = e;
                re.requestUseCdn({
                  path: "/wscsalesman/salesman/shop/checkShopAbility.json",
                  method: "GET",
                  data: {
                    kdtId: t,
                    abilityName: "salesman_advance_personal_space_ability",
                  },
                }).then((e) => {
                  a("SET_PERSONAL_SPACE_ABILITY", e.valid);
                });
              },
            },
            mutations: ie,
          },
        ].reduce((e, t) => E(e, t), {}),
        ce = [
          { state: y, getters: G, actions: N, mutations: P },
          [
            {
              getters: {
                timelimitedDiscountCountdown(e, t) {
                  var {
                    endTime: a,
                    startTime: o,
                    status: n,
                  } = t.getGoodsActivityInfo;
                  return a
                    ? n
                      ? { desc: "后结束", end: a }
                      : { desc: "后开始", end: o }
                    : null;
                },
              },
            },
          ].reduce((e, t) => E(e, t), {}),
          se,
        ].reduce((e, t) => E(e, t), {});
      function ue(e, t) {
        void 0 === t && (t = !1);
        var { title: a = "提示", content: o } = e,
          n = getCurrentPages() || [];
        "/" + (n[n.length - 1] || {}).route === M.d[M.a] &&
          wx.showModal({
            title: a,
            content: o,
            showCancel: !t,
            cancelText: "进店逛逛",
            confirmText: t ? "进店逛逛" : "重试",
            success: (e) => {
              !e.confirm || t
                ? wx.reLaunch({ url: "/packages/home/dashboard/index" })
                : wx.startPullDownRefresh();
            },
          });
      }
      var de = a("Yt9W");
      a("MVmR");
      getApp();
      var le = a("umDW"),
        pe = a("nsWR"),
        he = a("OTjV"),
        ge = a("hTAu"),
        me = a("gc3r"),
        fe = getApp(),
        ve = a("ygrD"),
        be = a("qwv7"),
        Se = a("xW8c"),
        ye = a("/pw/"),
        Te = a("NV8i"),
        we = {
          config: d,
          builtinBundle: {
            "@wsc-salesman/salesman-promote-block": class {
              constructor(e) {
                var { ctx: t } = e;
                (this.store = Object(he.a)(ce)),
                  (t.store = this.store),
                  (this.ctx = t);
                var a = Object(h.d)(
                  this,
                  ["shareWxData", "jumpGoodsDetailQuery", "thirdYunInfo"],
                  { setSelf: !0 }
                );
                Object.assign(this, a),
                  Object(h.b)(this, [
                    "fetchThemeConfig",
                    "fetchGoodsData",
                    "setActivityInfo",
                    "fetchUmpData",
                    "updateModule",
                    "updateGoodsAsyncData",
                    "getGoodsRecommendRateLevelInfo",
                    "initPageState",
                    "setItemId",
                    "updateAccountInfo",
                    "resetActivityTags",
                    "setSalesmanData",
                  ]);
              }
              beforePageMount() {
                me.a.call(this, {
                  scene: "item_promote",
                  sst: 3,
                  getSalesmanData: this.setSalesmanInfo,
                });
                var e = getCurrentPages(),
                  t = e[e.length - 1],
                  { options: a, route: o } = t;
                (this.options = a), (this.route = o), this.bootstrap();
              }
              onShareAppMessage() {
                var { shareWxData: e, thirdYunInfo: t } = this;
                return Object(o.a)({}, e, t.share || {}) || {};
              }
              onPullDownRefresh(e) {
                p.a.trigger("home:refresh"),
                  p.a.trigger("onPullDownRefresh" + Object(ge.a)(this), e),
                  this.bootstrap({ forceRefresh: !0 }),
                  wx.stopPullDownRefresh();
              }
              onPageScroll(e) {
                p.a.trigger("onPageScroll", e);
              }
              onReachBottom(e) {
                p.a.trigger("onReachBottom" + Object(ge.a)(this), e);
              }
              pageDestroyed() {
                fe.off("app:chainstore:kdtid:update", null, this);
              }
              setSalesmanInfo(e, t) {
                e || this.setSalesmanData(t);
              }
              getActivity(e) {
                var { activityType: t = "", umpType: a = "" } = e,
                  { activityAlias: o = "", activityId: n = "" } = e;
                return (
                  ("seckill" !== t && "seckill" !== a) ||
                    o ||
                    !/\w/.test(n) ||
                    ((o = n), (n = "")),
                  {
                    activityAlias: o,
                    activityType: t,
                    activityId: n,
                    umpType: a,
                  }
                );
              }
              bootstrap(e) {
                var t = this,
                  a = Object(m.l)(this.options),
                  { salesmanType: o = "", sl: n = "" } = a,
                  {
                    activityAlias: i,
                    activityType: r,
                    activityId: s,
                    umpType: c,
                  } = this.getActivity({
                    activityAlias: a.activityAlias,
                    activityType: a.activityType,
                    activityId: a.activityId,
                    umpType: a.umpType,
                  });
                this.initGoodsBaseInfo(e)
                  .catch((e) => this.whenApiError(e))
                  .then((e) => {
                    var t = Object(m.e)(e, "goodsData.goods");
                    return (
                      (this.options.alias = t.alias),
                      this.setItemId(t.id),
                      p.a.trigger("salesmanDetail:loaded", t.id),
                      v(e)
                    );
                  })
                  .then((e) =>
                    this.updateGoodsAsyncData({
                      userState: e,
                      activityData: {
                        activityAlias: i,
                        activityType: r || c,
                        activityId: s,
                      },
                    })
                  )
                  .then(() => {
                    this.updateAccountInfo({ salesmanType: o, sl: n }),
                      this.getGoodsRecommendRateLevelInfo().then(function (e) {
                        void 0 === e && (e = {}),
                          e.isSalesman ||
                            Object(m.k)(
                              Object(M.h)(M.a, t.jumpGoodsDetailQuery)
                            );
                      }),
                      this.initPageState();
                  })
                  .catch((e) => {})
                  .then(() => wx.hideLoading());
              }
              initGoodsBaseInfo(e) {
                void 0 === e && (e = {});
                var t = Object(m.l)(this.options);
                if (!this.checkCanRequest(t))
                  return Promise.reject("不请求商品详情");
                var {
                  alias: a = "",
                  activityAlias: n = "",
                  activityType: i = "",
                  activityId: r = "",
                  umpType: s = "",
                } = t;
                delete t.activityId,
                  delete t.activityType,
                  delete t.umpAlias,
                  delete t.umpType,
                  this.setActivityInfo(
                    this.getActivity({
                      activityAlias: n,
                      activityType: i,
                      activityId: r,
                      umpType: s,
                    })
                  ),
                  wx.showLoading({ title: "加载中..." });
                var c = Object(o.a)({}, t, e, {
                  alias: a,
                  ump_alias: n,
                  ump_type: i || s,
                  activityId: r,
                  activityType: i,
                  version: 2,
                });
                return this.fetchGoodsData(c).then((e) => {
                  var {
                    isChainStore: t,
                    kdtId: a,
                    rootKdtId: i,
                  } = e.shopMetaInfo;
                  if ((this.fetchThemeConfig({ kdtId: i || a }), t)) {
                    var r = m.b.add("/" + this.route, this.options);
                    return Object(g.g)(
                      Object(o.a)({}, this.options, {
                        umpAlias: n,
                        umpType: s,
                        redirectUrl: r,
                      }),
                      a
                    ).then(
                      (t) => (
                        Object(g.h)(),
                        t
                          ? this.fetchGoodsData(
                              Object(o.a)({}, c, { subKdtId: t })
                            )
                          : Promise.resolve(e)
                      )
                    );
                  }
                  return Promise.resolve(e);
                });
              }
              reportSkynet(e, t) {
                void 0 === t && (t = {}),
                  Object(de.f)(
                    e,
                    Object(o.a)({}, t, {
                      launchInfo: wx.getLaunchOptionsSync(),
                    })
                  );
              }
              checkCanRequest(e) {
                return (
                  !!e.alias ||
                  (this.reportSkynet("商品alias为空"),
                  ue({ content: "访问的商品不存在" }, !0),
                  !1)
                );
              }
              whenApiError(e) {
                var { code: t, msg: a, res: o = {}, message: n } = e,
                  { NO_TRY: i } = e,
                  r = a || n || "",
                  { showError: s = !0 } = o.data || {};
                if (
                  ((301010050 !== t && 5001001 !== t) || (i = !0),
                  4001001 === t)
                )
                  if (
                    ((s = !1),
                    this.reportSkynet("以总店KDTID访问总店商品", {
                      entryKdtId: this._when_fetch_updated_kdtID_,
                      currentKdtId: fe.getKdtId(),
                      currentOptions: this.options,
                    }),
                    this._when_fetch_updated_kdtID_)
                  )
                    this.bootstrap({
                      subKdtId: this._when_fetch_updated_kdtID_,
                    });
                  else {
                    var c = !1,
                      u = setTimeout(() => {
                        !c &&
                          this.reportSkynet("可能进店失败", {
                            currentKdtId: fe.getKdtId(),
                            currentOptions: this.options,
                          }),
                          wx.navigateTo({
                            url: m.b.add(
                              "/packages/shop-select/chain-store/shopselect/index",
                              {
                                redirectUrl: encodeURIComponent(
                                  m.b.add("/" + this.route, this.options)
                                ),
                              }
                            ),
                          });
                      }, 3e3);
                    fe.once(
                      "app:chainstore:kdtid:update",
                      (e) => {
                        var { kdtId: t } = e;
                        (c = !0),
                          clearTimeout(u),
                          this.bootstrap({ subKdtId: t });
                      },
                      this
                    );
                  }
                if (
                  (4001002 === t &&
                    ((s = !1),
                    this.reportSkynet("强制以总店KDTID访问商品", {
                      currentOptions: this.options,
                    }),
                    wx.navigateTo({
                      url: m.b.add(
                        "/packages/shop-select/chain-store/shopselect/index",
                        {
                          redirectUrl: encodeURIComponent(
                            m.b.add("/" + this.route, this.options)
                          ),
                        }
                      ),
                    })),
                  302 === t)
                ) {
                  var { location: d } = o.data || {};
                  (r = "Redirect to " + d),
                    (s = !1),
                    d &&
                      (/^https:/.test(d)
                        ? Object(le.a)(d)
                        : wx.redirectTo({
                            url: m.b.add(d, Object(pe.a)(this.options)),
                          }));
                }
                if (
                  (160900100 === t &&
                    ((s = !1),
                    (r = "多网点，需要跳转至网点选择"),
                    wx.navigateTo({
                      url: "/packages/shop/multi-store/index/index",
                    })),
                  429 === t || 101302001 === t || 101302002 === t)
                ) {
                  var l;
                  (s = !1), (r = "店铺太火爆啦，请稍后重试");
                  try {
                    l = JSON.stringify(this.options);
                  } catch (e) {
                    l = "{}";
                  }
                  wx.redirectTo({
                    url: m.b.add("/packages/common/limit-page/index", {
                      redirectCount: 0,
                      callBackUrl: "/" + this.route,
                      options: l,
                    }),
                  });
                }
                return (
                  s && ue({ content: r || "网络开了个小差，请稍后再试" }, i),
                  Promise.reject(e)
                );
              }
            },
            "@ext-tee-wsc-goods/biz-sku-manage": ve.a,
            "@wsc-tee-decorate/feature-user-authorize-popup": be.a,
            "@wsc-tee-decorate/showcase-container": Se.a,
            "@wsc-tee-decorate/jump-link": ye.a,
            "@wsc-tee-salesman/salesman-cube-block": Te.a,
          },
        },
        Oe = l.default.getGlobal("ranta-app-runtime"),
        Ie = Oe.getPageOptions({
          rantaOptions: Object(o.a)(
            { page: "/packages/shop/salesman/promote/index" },
            we
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: Oe,
          tee: l.default,
          usedLifecycles: [
            "onPullDownRefresh",
            "onReachBottom",
            "onPageShow",
            "onPageHide",
            "beforePageMount",
            "onShareAppMessage",
            "onPageScroll",
            "pageDestroyed",
          ],
        });
      l.default.page({ mixins: [Ie] });
    },
    cLfL: function (e, t, a) {},
    cTHi: function (e, t, a) {
      var o = a("zXe4");
      e.exports = function (e) {
        if ("string" == typeof e || o(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
      };
    },
    d1lM: function (e, t) {
      e.exports = function (e, t) {
        return null != e && t in Object(e);
      };
    },
    d7f9: function (e, t, a) {
      var o = a("Fcif"),
        n = (a("61tF"), a("esrA")),
        i = Object(n.a)({
          a: {
            p: [
              {
                r: ["/packages/shop/levelcenter/member-fill-auth/index"],
                c: [{ t: "m", c: ["b16-0"] }],
                m: [],
              },
            ],
          },
          m: [["b16-0", "@wsc-tee-user/level-fill", null]],
          e: [["@wsc-tee-user/level-fill", a("u7Vq"), { framework: "weapp" }]],
          f: "weapp",
        }),
        r = a("9ZMt"),
        s = {
          config: i,
          builtinBundle: {
            "@wsc-tee-user/level-fill": class {
              constructor(e) {
                var { ctx: t } = e;
                this.ctx = t;
              }
              beforePageMount(e) {
                var { query: t } = e;
                this.ctx.data.pageQuery = t;
              }
            },
          },
        },
        c = r.default.getGlobal("ranta-app-runtime"),
        u = c.getPageOptions({
          rantaOptions: Object(o.a)(
            { page: "/packages/shop/levelcenter/member-fill-auth/index" },
            s
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: c,
          tee: r.default,
          usedLifecycles: ["beforePageMount"],
        });
      r.default.page({ mixins: [u] });
    },
    dbCC: function (e, t, a) {
      var o = a("T0uz"),
        n = a("SyCk");
      e.exports = function (e, t) {
        var a = -1,
          i = n(e) ? Array(e.length) : [];
        return (
          o(e, function (e, o, n) {
            i[++a] = t(e, o, n);
          }),
          i
        );
      };
    },
    "ds/A": function (e, t, a) {
      var o = a("Fcif"),
        n = a("zZvV"),
        i = a("MVmR"),
        r = {};
      Object(o.a)({}, n.a, {
        onLoad() {
          var e = Object(i.c)();
          e.setPageData(this, r);
        },
      });
    },
    dtdj: function (e, t, a) {
      var o = a("d1lM"),
        n = a("BW49");
      e.exports = function (e, t) {
        return null != e && n(e, t, o);
      };
    },
    dxMw: function (e, t, a) {
      var o = a("SyCk");
      e.exports = function (e, t) {
        return function (a, n) {
          if (null == a) return a;
          if (!o(a)) return e(a, n);
          for (
            var i = a.length, r = t ? i : -1, s = Object(a);
            (t ? r-- : ++r < i) && !1 !== n(s[r], r, s);

          );
          return a;
        };
      };
    },
    e1Ej: function (e, t, a) {
      var o = a("RW/s");
      e.exports = function () {
        (this.__data__ = new o()), (this.size = 0);
      };
    },
    e33J: function (e, t, a) {
      var o = a("ksi7"),
        n = getApp();
      t.a = Behavior({
        properties: { salesman: { type: Object, default: {} } },
        data: {
          toastShow: !1,
          goodsInfo: {
            type: "goods",
            layout: 1,
            size_type: 0,
            show_title: !0,
            show_price: !0,
            image_fill_style: 1,
            image_ratio: 1,
            buy_button_type: 1,
            show_buy_button: !0,
            page_margin: 0,
            goods_margin: 10,
            goods: [],
            contentGoods: [],
            border_radius_type: 2,
          },
        },
        methods: {
          getNoteGoodsByIds(e) {
            var t = e.join(",");
            Object(o.c)({
              page: 1,
              pageSize: 30,
              offlineId: n.getOfflineId() || 0,
              goodsIds: t,
            })
              .then((e) => {
                if (e) {
                  var t = e.list || [],
                    a = this.setListLoggerParams(t),
                    o = ((e) => {
                      var t = {};
                      return e.reduce((e, a) => {
                        var { id: o } = a;
                        return t[o] || (e.push(a), (t[o] = !0)), e;
                      }, []);
                    })(this.setListLoggerParams(t, "content_goods"));
                  this.goodsLoadLogger(a),
                    this.setYZData({
                      "goodsInfo.goods": a,
                      "goodsInfo.contentGoods": o,
                    });
                }
              })
              .catch((e) => {});
          },
          showToast() {
            if (
              (this.clickLog("content_goods"),
              this.setYZData({ toastShow: !0 }),
              !this.clickedContentGoods)
            ) {
              this.clickedContentGoods = !0;
              var {
                goodsInfo: { contentGoods: e = [] },
              } = this.data;
              this.goodsLoadLogger(e);
            }
          },
          thumbClick() {
            this.triggerEvent("thumbclick");
          },
          shareClick() {
            this.triggerEvent("shareclick");
          },
          closeClick() {
            this.setYZData({ toastShow: !1 });
          },
          thumbsStatusUpdate(e) {
            if (this.firstFlag) {
              var { thumbsUpCount: t } = this.data.noteData;
              e
                ? this.setYZData({ "noteData.thumbsUpCount": t + 1 })
                : this.setYZData({ "noteData.thumbsUpCount": t - 1 });
            }
          },
        },
      });
    },
    e9pr: function (e, t, a) {
      a.d(t, "a", function () {
        return n;
      });
      var o = getApp(),
        n = () =>
          o.request({
            path: "/wscshop/api/showcase-retail/getAddressList.json",
            method: "GET",
          });
    },
    edSL: function (e, t, a) {
      var o = a("Exs5");
      e.exports = function (e, t, a) {
        var n = null == e ? void 0 : o(e, t);
        return void 0 === n ? a : n;
      };
    },
    fRAL: function (e, t) {
      e.exports = function (e, t, a) {
        switch (a.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, a[0]);
          case 2:
            return e.call(t, a[0], a[1]);
          case 3:
            return e.call(t, a[0], a[1], a[2]);
        }
        return e.apply(t, a);
      };
    },
    fkHB: function (e, t, a) {
      var o = a("Sh92"),
        n = a("Dkks"),
        i = a.n(n);
      class r extends o.a {}
      (r.widgets = { Main: i() }), (t.a = r);
    },
    fxeQ: function (e, t, a) {
      var o = a("LSEb")(a("s3UK"), "WeakMap");
      e.exports = o;
    },
    gKNW: function (e, t) {
      e.exports = function (e) {
        return function (t) {
          return null == t ? void 0 : t[e];
        };
      };
    },
    gcCW: function (e, t, a) {
      a.d(t, "a", function () {
        return o;
      }),
        a.d(t, "b", function () {
          return n;
        });
      var o = { BASE: 0, WHITE: 1, GREEN: 2 },
        n = {
          copyMaterial: {
            et: "click",
            ei: "copy_material",
            en: "复制素材",
            pt: "salesmanpromotion",
          },
          shareStory: {
            et: "custom",
            ei: "share_story",
            en: "同步到动态",
            pt: "salesmanpromotion",
          },
          clickPurchase: {
            et: "click",
            ei: "click_purchase",
            en: "点击自购",
            pt: "salesmanpromotion",
          },
          clickLevelCenter: {
            et: "click",
            ei: "click_levelcenter",
            en: "等级中心",
            pt: "salesmanpromotion",
          },
          clickRewardCenter: {
            et: "click",
            ei: "click_rewardcenter",
            en: "点击奖励中心",
            pt: "salesmanpromotion",
          },
          issueCoupon: {
            et: "click",
            ei: "issue_coupon",
            en: "发放优惠券",
            pt: "salesmanpromotion",
          },
          enterpage: {
            et: "display",
            ei: "enterpage",
            en: "浏览页面",
            pt: "salesmanpromotion",
          },
        };
    },
    gwRl: function (e, t) {
      e.exports = function (e, t) {
        for (var a = -1, o = t.length, n = e.length; ++a < o; ) e[n + a] = t[a];
        return e;
      };
    },
    h9r5: function (e, t, a) {
      var o = a("zXe4");
      e.exports = function (e, t) {
        if (e !== t) {
          var a = void 0 !== e,
            n = null === e,
            i = e == e,
            r = o(e),
            s = void 0 !== t,
            c = null === t,
            u = t == t,
            d = o(t);
          if (
            (!c && !d && !r && e > t) ||
            (r && s && u && !c && !d) ||
            (n && s && u) ||
            (!a && u) ||
            !i
          )
            return 1;
          if (
            (!n && !r && !d && e < t) ||
            (d && a && i && !n && !r) ||
            (c && a && i) ||
            (!s && i) ||
            !u
          )
            return -1;
        }
        return 0;
      };
    },
    hEId: function (e, t, a) {
      a.d(t, "a", function () {
        return n;
      });
      var o = a("jA1y"),
        n = () =>
          Object(o.c)({
            path: "/wscump/salesman/getAccount.json",
            query: { type: "NORMAL" },
            config: { cache: !0, expire: 10 },
          }).then((e) => Promise.resolve(e));
    },
    hn6W: function (e, t, a) {
      var o = a("Fcif"),
        n = a("esrA"),
        i = "@wsc-tee-shop/again-enter-loaing",
        r = Object(n.a)({
          a: {
            p: [
              {
                r: ["/packages/shop/again-enter-loaing/index"],
                c: [{ t: "m", c: ["b24-0"] }],
                m: [],
              },
            ],
          },
          m: [["b24-0", i, null]],
          e: [[i, a("Xeeb")]],
        }),
        s = a("9ZMt"),
        c = a("FeRy"),
        u = a.n(c);
      class d {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      d.widgets = { Main: u.a };
      var l = {
          config: r,
          builtinBundle: { "@wsc-tee-shop/again-enter-loaing": d },
        },
        p = s.default.getGlobal("ranta-app-runtime"),
        h = p.getPageOptions({
          rantaOptions: Object(o.a)(
            { page: "/packages/shop/again-enter-loaing/index" },
            l
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: p,
          tee: s.default,
          usedLifecycles: [],
        });
      s.default.page({ mixins: [h] });
    },
    jc6w: function (e, t, a) {
      a.d(t, "a", function () {
        return i;
      });
      var o = a("OPDa"),
        n = a("+K8Z"),
        i = function (e, t) {
          return (
            void 0 === t && (t = 0),
            o.a.getPageSpmTypeId() + "~" + e + "~" + t + "~" + n.a
          );
        };
    },
    ji6j: function (e, t, a) {
      var o = a("2AbI"),
        n = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, a, i, r, s) {
        var c = 1 & a,
          u = o(e),
          d = u.length;
        if (d != o(t).length && !c) return !1;
        for (var l = d; l--; ) {
          var p = u[l];
          if (!(c ? p in t : n.call(t, p))) return !1;
        }
        var h = s.get(e),
          g = s.get(t);
        if (h && g) return h == t && g == e;
        var m = !0;
        s.set(e, t), s.set(t, e);
        for (var f = c; ++l < d; ) {
          var v = e[(p = u[l])],
            b = t[p];
          if (i) var S = c ? i(b, v, p, t, e, s) : i(v, b, p, e, t, s);
          if (!(void 0 === S ? v === b || r(v, b, a, i, s) : S)) {
            m = !1;
            break;
          }
          f || (f = "constructor" == p);
        }
        if (m && !f) {
          var y = e.constructor,
            T = t.constructor;
          y == T ||
            !("constructor" in e) ||
            !("constructor" in t) ||
            ("function" == typeof y &&
              y instanceof y &&
              "function" == typeof T &&
              T instanceof T) ||
            (m = !1);
        }
        return s.delete(e), s.delete(t), m;
      };
    },
    kCQp: function (e, t, a) {
      var o = a("RW/s"),
        n = a("0KRy"),
        i = a("xkFB");
      e.exports = function (e, t) {
        var a = this.__data__;
        if (a instanceof o) {
          var r = a.__data__;
          if (!n || r.length < 199)
            return r.push([e, t]), (this.size = ++a.size), this;
          a = this.__data__ = new i(r);
        }
        return a.set(e, t), (this.size = a.size), this;
      };
    },
    kHfR: function (e, t, a) {
      a.d(t, "b", function () {
        return o;
      }),
        a.d(t, "a", function () {
          return n;
        });
      var o = Behavior({
          pageLifetimes: {
            show() {
              this.timeRunner && this.timeRunner();
            },
            hide() {
              clearInterval(this.tid), clearTimeout(this.tid);
            },
          },
        }),
        n = Behavior({
          attached() {
            this.getThemeColor();
          },
          methods: {
            getThemeColor() {
              var e = getApp();
              e &&
                e
                  .getShopTheme()
                  .then((e) => {
                    var { colors: t } = e,
                      a = t.general;
                    this.setYZData({ mainColor: a });
                  })
                  .catch((e) => {
                    throw new Error(e.message);
                  });
            },
          },
        });
    },
    kQKO: function (e, t, a) {
      a.d(t, "a", function () {
        return n;
      });
      a("Fcif");
      var o = getApp(),
        n = (e) =>
          o.request({
            path: "/wscshop/shopnote/setThumbStatus.json",
            data: e,
            method: "POST",
          });
    },
    kXPx: function (e, t, a) {
      var o = a("COrk"),
        n = a("edSL"),
        i = a("dtdj"),
        r = a("BwbT"),
        s = a("2EQx"),
        c = a("a7YA"),
        u = a("cTHi");
      e.exports = function (e, t) {
        return r(e) && s(t)
          ? c(u(e), t)
          : function (a) {
              var r = n(a, e);
              return void 0 === r && r === t ? i(a, e) : o(t, r, 3);
            };
      };
    },
    ksi7: function (e, t, a) {
      a.d(t, "f", function () {
        return i;
      }),
        a.d(t, "c", function () {
          return r;
        }),
        a.d(t, "d", function () {
          return s;
        }),
        a.d(t, "e", function () {
          return c;
        }),
        a.d(t, "a", function () {
          return u;
        }),
        a.d(t, "b", function () {
          return d;
        });
      var o = a("Fcif"),
        n = getApp(),
        i = (e) =>
          n.request({
            path: "/wscshop/shopnote/setThumbStatus.json",
            data: e,
            method: "POST",
          }),
        r = (e) =>
          n.request({
            path: "/wscshop/showcase/goodsList.json",
            data: Object(o.a)({}, e, { isShowPeriod: 1 }),
          }),
        s = (e) =>
          n.request({
            path: "/wscshop/shopnote/queryShopNoteSubscription.json",
            data: e,
          }),
        c = function (e) {
          return (
            void 0 === e && (e = {}),
            n.request({
              path: "/wscshop/shopnote/querySubscriptionInfo.json",
              data: e,
            })
          );
        },
        u = (e) =>
          n.request({
            path: "/wscshop/shopnote/editShopNoteSubscription.json",
            data: e,
            method: "POST",
          });
      function d(e) {
        return n
          .request({
            path: "/wscshop/content-center/fetchLiveInfo.json",
            data: { kdtId: e, scene: 3 },
          })
          .then((e) => e);
      }
    },
    l0a2: function (e, t, a) {},
    lLPU: function (e, t, a) {
      var o = a("f/Xo"),
        n = a("YaJL"),
        i = a("yoW1"),
        r = n
          ? function (e, t) {
              return n(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: o(t),
                writable: !0,
              });
            }
          : i;
      e.exports = r;
    },
    lX9x: function (e) {
      e.exports = JSON.parse("{}");
    },
    mAK2: function (e, t, a) {
      function o(e) {
        return getApp().request({
          path: "/wscshop/showcase/getStore.json",
          data: e,
        });
      }
      function n(e) {
        return getApp().request({
          path: "/wscshop/showcase/getSavePOIInfo.json",
          data: e,
        });
      }
      function i() {
        return getApp().request({
          path: "/wscshop/showcase/getAddressList.json",
        });
      }
      function r() {
        return getApp().request({
          path: "/wscump/multistore/getPositionByIp.json",
        });
      }
      a.d(t, "c", function () {
        return o;
      }),
        a.d(t, "d", function () {
          return n;
        }),
        a.d(t, "a", function () {
          return i;
        }),
        a.d(t, "b", function () {
          return r;
        });
    },
    mBPn: function (e, t, a) {
      a.d(t, "a", function () {
        return i;
      });
      var o = a("Fcif"),
        n = getApp();
      function i(e, t) {
        void 0 === t && (t = {});
        var a = n.getKdtId(),
          { sl: i } = t,
          { params: r = {} } = e,
          s = a + "-" + i;
        (e.params = Object(o.a)({}, r, t, { mark: s })), n.logger.log(e);
      }
    },
    mK7v: function (e, t, a) {
      a.d(t, "a", function () {
        return i;
      });
      var o = a("4J1Q"),
        n = a("DoqY");
      function i(e) {
        return Object(o.b)(e, "shopRole") === n.b.PHYSICAL_OFFLINE_STORE;
      }
      i(a("O5ul").a);
    },
    mKDx: function (e, t, a) {
      function o(e, t, a) {
        return e.map((e) => ((e.risk_type = t), (e.risk_alias = a), e));
      }
      a.d(t, "b", function () {
        return o;
      }),
        a.d(t, "a", function () {
          return n;
        });
      var n = {
        MICROPAGE: 0,
        GOODS_DETAIL: 1,
        USER_CENTER: 3,
        UMP_CONFERENCE: 4,
        GOODS_CLASSIFY: 5,
        APP_OPEN_PAGE: 6,
        SHOP_NOTE: 7,
        CHECK_IN_PAGE: 8,
        CUSTOM_COMPONENT: 21,
        OTHER_SYSTEM_CONFIG: 99,
      };
    },
    mQ5w: function (e, t, a) {
      var o = getApp(),
        n = o.getKdtId(),
        i = {
          isWeapp: 1,
          delivery: {
            expressTypeChoice: 0,
            hasFreightInsurance: !1,
            contacts: { recipients: o.getMobile(), tel: o.getMobile() },
          },
          seller: { kdtId: n, storeId: 0 },
          config: {
            containsUnavailableItems: !1,
            paymentExpiry: 0,
            receiveMsg: !0,
            usePoints: !1,
            useWxpay: 1,
            paymentSuccessRedirect: "",
            forceZeroOrder: !1,
          },
          source: {
            kdtSessionId: o.getSessionId(),
            platform: "mobile",
            fromThirdApp: !1,
            fromScrmCenter: !0,
          },
        };
      t.a = i;
    },
    n3cD: function (e, t, a) {
      a.d(t, "a", function () {
        return p;
      }),
        a.d(t, "d", function () {
          return g;
        }),
        a.d(t, "c", function () {
          return y;
        }),
        a.d(t, "b", function () {
          return T;
        }),
        a.d(t, "e", function () {
          return w;
        });
      var o = a("+I+c"),
        n = a("Fcif"),
        i = a("zMoS"),
        r = a("3tyi"),
        s = a("rDSc"),
        c = a("Sei9"),
        u = a("9zTU"),
        d = a("xyw3"),
        l = ["list"],
        p = c.b,
        h = { 31: "天", 32: "周", 33: "月" },
        g = function (e) {
          void 0 === e && (e = {});
          var t = [],
            {
              birthdayInfoList: a,
              festivalInfoList: o,
              memberdayInfoList: n,
              memberVoucherInfoList: i,
            } = e;
          if (null != a && a.length) {
            var r = a[0] || {},
              { termType: s } = r.effectiveTime || {},
              c = {
                name: "birthday",
                pluginName: "生日好礼",
                icon: "//img01.yzcdn.cn/memberlevel/v2/birthday@2x.png",
              };
            (c.remark = h[s] ? "生日当" + h[s] + "享好礼" : "生日享好礼"),
              t.push(c);
          }
          if (
            (null != o &&
              o.length &&
              t.push({
                name: "festival",
                pluginName: "节日特权",
                remark: "节日专属优惠",
                icon: "//img01.yzcdn.cn/memberlevel/v2/festival@2x.png",
              }),
            null != n && n.length)
          ) {
            var u = n[0] || {},
              { termType: d } = u.effectiveTime || {},
              l = {
                name: "memberday",
                pluginName: "专属会员日",
                icon: "//img01.yzcdn.cn/memberlevel/v2/memberday@2x.png",
              };
            (l.remark =
              31 === d
                ? "每日专享优惠"
                : 32 === d
                ? "每周专享优惠"
                : 33 === d
                ? "每月专享优惠"
                : ""),
              t.push(l);
          }
          return (
            null != i &&
              i.length &&
              t.push({
                name: "membervoucher",
                pluginName: "会员专享券",
                remark: "会员定期可领的优惠券",
                icon: "//img01.yzcdn.cn/memberlevel/v2/membervoucher@2x.png",
              }),
            t
          );
        },
        m = (e, t) => {
          var a = p(e);
          return a.push(...g(t)), a;
        },
        f = (e) => {
          var t = {};
          return (
            (t.color = e.colorCode),
            (t.image = e.coverUrl),
            (t.alias = e.levelAlias),
            (t.levelGroupAlias = e.levelGroupAlias),
            (t.minGrowth = Object(i.a)(
              e,
              "levelGrantConditionList[0].minGrowth",
              0
            )),
            (t.name = e.name),
            (t.levelValue = e.levelValue),
            t
          );
        },
        v = function (e, t, a) {
          void 0 === a && (a = !0);
          var o = [],
            r =
              1 ===
              (e = e.filter((e) => {
                if (!(e.levelValue < t.levelValue) && (e.isEnabled || !a))
                  return !0;
              })).length,
            s = t.levelValue >= 1,
            c = !0;
          return (
            e.forEach((a, l) => {
              var p = a.mode === u.f.CONSUME,
                h = [],
                v = {},
                b = "";
              if (p) {
                var S = 0 === l && s && !r ? e[1] : a;
                h = ((e, t, a, o) => {
                  var {
                      currentTotalTradeAmount: n = 0,
                      currentTotalTradeCount: r = 0,
                    } = Object(i.a)(e, "levels[0].customerConsumeInfo", {}),
                    s = t.find((e) => e.conditionType === u.h.CONSUME),
                    c = [];
                  if (s) {
                    var d = (null == s ? void 0 : s.behaviorCondition) || [];
                    c = Object.keys(d)
                      .filter((e) => "op" !== e)
                      .map((e) => {
                        var t = d[e];
                        switch (e) {
                          case "minTotalTradeAmount":
                            return u.l.totalTradeAmount(n, t, a, o);
                          case "minTotalTradeCount":
                            return u.l.totalTradeCount(r, t, a, o);
                          case "minTradeAmount":
                            return u.l.singleTradeAmount(t, a, o);
                          case "minStoredValue":
                            return u.l.singleStoredValue(t, a, o);
                          default:
                            return {};
                        }
                      });
                  }
                  return c.sort((e, t) => t.rate - e.rate);
                })(
                  t,
                  Object(i.a)(S, "levelGrantConditionList"),
                  Object(i.a)(S, "name"),
                  r
                );
                var y =
                  a.levelGrantConditionList.find(
                    (e) => e.conditionType === u.h.CONSUME
                  ) || {};
                (y.behaviorCondition.minTotalTradeAmount = y.behaviorCondition
                  .minTotalTradeAmount
                  ? y.behaviorCondition.minTotalTradeAmount -
                    Object(i.a)(
                      t,
                      "levels[0].customerConsumeInfo.currentTotalTradeAmount",
                      0
                    )
                  : void 0),
                  (y.behaviorCondition.minTotalTradeCount = y.behaviorCondition
                    .minTotalTradeCount
                    ? y.behaviorCondition.minTotalTradeCount -
                      Object(i.a)(
                        t,
                        "levels[0].customerConsumeInfo.currentTotalTradeCount",
                        0
                      )
                    : void 0),
                  0 === l &&
                    ((void 0 !== y.behaviorCondition.minTotalTradeAmount &&
                      void 0 !== y.behaviorCondition.minTotalTradeCount) ||
                      (void 0 !== y.behaviorCondition.minTotalTradeAmount &&
                        y.behaviorCondition.minTotalTradeAmount <= 0) ||
                      (void 0 !== y.behaviorCondition.minTotalTradeCount &&
                        y.behaviorCondition.minTotalTradeCount <= 0) ||
                      (c = !1),
                    void 0 === y.behaviorCondition.minTotalTradeAmount &&
                      void 0 === y.behaviorCondition.minTotalTradeCount &&
                      (c = !0),
                    y.behaviorCondition.minTotalTradeAmount > 0 &&
                      y.behaviorCondition.minTotalTradeCount > 0 &&
                      (c = !1)),
                  (b = ((e) => {
                    var {
                        minTotalTradeAmount: t,
                        minTotalTradeCount: a,
                        minTradeAmount: o,
                        minStoredValue: n,
                      } = e.behaviorCondition || {},
                      i = !!t && t > 0,
                      r = !!a && a > 0,
                      s = !!o,
                      c = !!n;
                    if (
                      ((t = Object(d.a)(t).toYuan()),
                      (o = Object(d.a)(o).toYuan()),
                      (n = Object(d.a)(n).toYuan()),
                      !(t || a || o || n))
                    )
                      return "无门槛";
                    var u = "";
                    return (
                      i || r
                        ? ((u = "再消费"),
                          i
                            ? ((u += '<span class="big"> ' + t + " </span>元"),
                              r &&
                                (u +=
                                  '或<span class="big"> ' + a + "</span> 笔"))
                            : (u += '<span class="big"> ' + a + "</span> 笔"),
                          s &&
                            (u +=
                              '或单笔消费<span class="big"> ' +
                              o +
                              "</span> 元"),
                          c &&
                            (u +=
                              (u ? "或" : "") +
                              '单笔充值<span class="big"> ' +
                              n +
                              "</span> 元"))
                        : s
                        ? ((u +=
                            '单笔消费<span class="big"> ' + o + "</span> 元"),
                          c &&
                            (u +=
                              '或单笔充值<span class="big"> ' +
                              n +
                              "</span> 元"))
                        : c &&
                          (u =
                            '单笔充值<span class="big"> ' + n + "</span> 元"),
                      u ? u + "升级为该等级" : ""
                    );
                  })(y)),
                  (v =
                    (1 === e.length && h.find((e) => e.type === u.b.AMOUNT)) ||
                    h[0]);
              } else if (0 === l) {
                var T =
                  a.levelGrantConditionList.find(
                    (e) => e.conditionType === u.h.GROWTH
                  ) || {};
                T.minGrowth > 0 && t.currentGrowth < T.minGrowth && (c = !1);
              }
              var w = Object(i.a)(a, "benefitList", []),
                O = Object(n.a)({}, a, {
                  isEnabled: !!a.isEnabled,
                  card: p
                    ? Object(n.a)({}, f(a), {
                        priorityUpgradeCondition: v,
                        consumeNeed: b,
                      })
                    : Object(n.a)({}, f(a), {
                        currentGrowth: t.currentGrowth || 0,
                      }),
                  levelBenefit: Object(i.a)(a, "levelBenefit", {}),
                  planBenefits: g(Object(i.a)(a, "planBenefits", {})),
                  benefitList:
                    w.length > 0
                      ? w
                      : m(
                          Object(i.a)(a, "levelBenefit", []),
                          Object(i.a)(a, "planBenefits", {})
                        ),
                  levelGoods: Object(i.a)(a, "levelGoods", {}),
                  upgradeMissionList: h,
                  isConsume: p,
                });
              o.push(O);
            }),
            { list: o, reachThreshold: c }
          );
        },
        b = (e) => {
          var t = [],
            a = 1;
          return e && e.length
            ? (e.forEach((e) => {
                var o = ((e) => {
                  switch (e.ruleType) {
                    case 1:
                      return (
                        "每消费" +
                        (e.conditionVal / 100).toFixed(2) +
                        "元，交易完成即可获得" +
                        e.rewardGrowth +
                        "个成长值；"
                      );
                    case 2:
                      return (
                        "完成" +
                        e.conditionVal +
                        "笔订单，交易完成时即可获得" +
                        e.rewardGrowth +
                        "个成长值；"
                      );
                    default:
                      return "";
                  }
                })(e);
                o && t.push(a++ + "." + o);
              }),
              t)
            : t;
        },
        S = (e, t) => {
          var { customerGrowth: a, customerConsumeInfo: o } = t,
            n = null,
            r = e,
            c = Object(s.a)(e, "level"),
            u = c ? [c] : [];
          return (
            (n = Object(i.a)(r, "level", null))
              ? (n.identityNo = r.identityNo)
              : (n = { levelValue: 0 }),
            (n.currentGrowth = a.currentGrowth || 0),
            (n.totalGrowth = a.totalGrowth),
            (n.currentTotalTradeAmount = o.currentTotalTradeAmount || 0),
            (n.currentTotalTradeCount = o.currentTotalTradeCount || 0),
            (n.levels = u),
            n
          );
        },
        y = function (e, t, a) {
          var n;
          void 0 === t && (t = void 0);
          var s = {},
            c = Object(i.a)(e, "levelList[0].levelV2List", []);
          (null == (n = e.cardBenefitList) ? void 0 : n.length) > 0
            ? (c || []).forEach((t) => {
                var a = e.cardBenefitList.find(
                  (e) => e.levelAlias === t.levelAlias
                );
                t.benefitList = (null == a ? void 0 : a.benefitList) || [];
              })
            : (c || []).forEach((t) => {
                var a,
                  o =
                    null == e || null == (a = e.levelPlanBenefits)
                      ? void 0
                      : a.find((e) => e.levelId === t.levelId);
                o &&
                  (t.planBenefits = Object(r.a)(o, [
                    "birthdayInfoList",
                    "festivalInfoList",
                    "memberdayInfoList",
                    "memberVoucherInfoList",
                  ]));
              });
          var u = null,
            d = null,
            p = !0;
          if (t)
            (s = S(e.levels, {
              customerGrowth: e.customerGrowth,
              customerConsumeInfo: e.customerConsumeInfo || {},
            })),
              (u = (function (e, t, a, o) {
                void 0 === a && (a = !0);
                var n = e.find((e) => o === e.levelAlias) || e[0];
                if (!n.isEnabled && a) return [];
                var r = Object(i.a)(n, "benefitList", []);
                return [
                  {
                    isEnabled: !!n.isEnabled,
                    card: f(n),
                    levelBenefit: Object(i.a)(n, "levelBenefit", {}),
                    planBenefits: g(Object(i.a)(n, "planBenefits", {})),
                    benefitList:
                      r.length > 0
                        ? r
                        : m(
                            Object(i.a)(n, "levelBenefit", []),
                            Object(i.a)(n, "planBenefits", {})
                          ),
                    levelGoods: Object(i.a)(n, "levelGoods", {}),
                  },
                ];
              })(c, 0, e.isLevelGroupEnabled, t));
          else if (a) {
            s = S(e.levels, {
              customerGrowth: e.customerGrowth,
              customerConsumeInfo: e.customerConsumeInfo || {},
            });
            var h = (function (e, t, a, o) {
              void 0 === o && (o = {});
              var n = [],
                r = 0,
                s = {};
              return (
                e.forEach((e) => {
                  var t = Object(i.a)(o, "level.levelValue", ""),
                    a = Object(i.a)(o, "isExpired", !0);
                  if (
                    (e.isDisplay || e.levelValue === t) &&
                    (e.isDisplay || e.levelValue !== t || !a) &&
                    (!(t && e.levelValue < t) || a)
                  ) {
                    var c = Object(i.a)(e, "benefitList", []),
                      u = {
                        isDisplay: !!e.isDisplay,
                        card: f(e),
                        levelBenefit: Object(i.a)(e, "levelBenefit", {}),
                        benefitList:
                          c.length > 0
                            ? c
                            : m(
                                Object(i.a)(e, "levelBenefit", []),
                                Object(i.a)(e, "planBenefits", {})
                              ),
                        levelGoods: Object(i.a)(e, "levelGoods", {}),
                      };
                    (s[e.levelAlias] = r), n.push(u), r++;
                  }
                }),
                { list: n, indexMap: s }
              );
            })(c, 0, e.isLevelGroupEnabled, a);
            (u = h.list), (d = h.indexMap);
          } else {
            s = S(e.levels, {
              customerGrowth: e.customerGrowth,
              customerConsumeInfo: e.customerConsumeInfo || {},
            });
            var y = v(c, s, e.isLevelGroupEnabled),
              { list: T } = y;
            (u = T), (p = Object(o.a)(y, l).reachThreshold);
          }
          return {
            nowLevel: s,
            growthRule: b(e.growthRule),
            cards: u,
            indexMap: d,
            reachThreshold: p,
          };
        },
        T = function (e, t) {
          var a;
          void 0 === t && (t = []);
          var o = null == e || null == (a = e.level) ? void 0 : a.levelAlias,
            n = t.find((e) => e.card.alias === o);
          return ((null == n ? void 0 : n.benefitList) || []).findIndex(
            (e) => e.name === u.a.BIRTHDAY || e.key === u.a.BIRTHDAY
          );
        },
        w = "/wscuser/scrm/missioncenter";
    },
    n7Pa: function (e, t, a) {
      a.d(t, "a", function () {
        return n;
      }),
        a.d(t, "b", function () {
          return i;
        }),
        a.d(t, "c", function () {
          return r;
        });
      var o = a("1Uvd"),
        n = Object(o.a)(8),
        i = {
          NEW_ARRIVAL: 1,
          KEEPER_TALK: 2,
          SINGLE_PRODUCTION: 3,
          SHOP_CIRCLE: 4,
          MP_ARTICLE: 6,
        },
        r = { LOCK: 1 };
    },
    nrRS: function (e, t) {
      e.exports = {
        d: "location;4",
        e: "onLocation",
        el: "search-focus;search-cancel",
        w: "Main",
        wd: "Main",
        p: "setLocation;getLocation",
      };
    },
    nvdG: function (e, t, a) {
      a.d(t, "a", function () {
        return g;
      });
      var o = a("taYb"),
        n = a("9ZMt"),
        i = a("x5Yp"),
        r = a("2wjL"),
        s = [
          "/pages/home/dashboard/index",
          "/pages/goods/cart/index",
          "/pages/usercenter/dashboard/index",
          "/pages-retail/usercenter/dashboard-v2/index",
        ],
        c = a("YehF");
      var u = a("/duV"),
        d = a("Tewj"),
        l = a("YeA1"),
        { dmc: p } = Object(l.a)();
      function h(e, t, a) {
        if ((void 0 === a && (a = {}), "offlinepage" === e))
          return (
            void 0 === (o = t.link_id) && (o = ""),
            void (o && (Object(u.o)(o), p.switchTab("Home")))
          );
        var o;
        if ("platform_coupon" !== e) {
          var {
            url: l,
            isTab: h,
            pageName: g,
            query: m,
          } = (function (e, t, a) {
            var o = "",
              u = !1,
              d = "",
              l = {},
              {
                alias: p,
                link_title: h = "",
                link_url: g = "",
                link_id: m,
                extra_data: f = {},
              } = t;
            if ("goods" === e && p) o = "/pages/goods/detail/index?alias=" + p;
            else if ("tag" === e) {
              var v = p ? { alias: p } : r.a.getAll(g);
              v.alias &&
                ((o =
                  "/packages/shop/goods/tag-list/index?alias=" +
                  v.alias +
                  "&title=" +
                  h),
                (d = "GoodsTag"),
                (l = { alias: v.alias, title: h }));
            } else if ("weappfeature" === e)
              o = "/packages/home/feature/index?id=" + m + "&title=" + h;
            else if ("feature" === e && p)
              o = "/packages/home/feature/index?alias=" + p;
            else if ("homepage" === e)
              (u = !0), (o = "/packages/home/dashboard/index");
            else if ("cart" === e) (u = !0), (o = "/packages/goods/cart/index");
            else if ("usercenter" === e)
              (u = !0),
                (o = "/packages/usercenter/dashboard/index"),
                c.h && (o = "/packages/retail/usercenter/dashboard-v2/index");
            else if ("allgoods" === e)
              (o = "/packages/shop/goods/all/index?title=" + h),
                (d = "AllGoodsList"),
                (l = { title: h });
            else if ("pointsstore" === e)
              o = "/packages/ump/integral-store/index";
            else if ("coupon" === e)
              o =
                "/packages/user/coupon/detail/index?id=" +
                t.link_id +
                (7 === t.coupon_type ? "&type=promocard" : "");
            else if ("seckill" === e)
              o = "/packages/goods/seckill/index?alias=" + p;
            else if ("weapplink" === e && "1" === f.link_type) {
              "/" !== (o = f.my_weapp_link)[0] && (o = "/" + o);
              var b = o.split("?")[0];
              if (
                (s.indexOf(b) > -1 && (u = !0),
                0 ===
                  (o = r.a.remove(o, "shopAutoEnter")).indexOf(
                    "/pages/common/blank-page/index"
                  ))
              ) {
                var S = r.a.getAll(o);
                if (S.weappSharePath) {
                  var y = decodeURIComponent(S.weappSharePath);
                  (y = r.a.remove(y, "shopAutoEnter")),
                    (S.weappSharePath = encodeURIComponent(y)),
                    (o = r.a.add("/pages/common/blank-page/index", S));
                }
              }
            } else if ("weapplink" === e && "2" === f.linkType)
              +f.useShortLink
                ? wx.navigateToMiniProgram({ shortLink: f.shortLink })
                : wx.navigateToMiniProgram({
                    appId: f.otherWeappAppid,
                    path: f.otherWeappLink,
                  });
            else if ("paidcolumn" === e)
              o = "/packages/paidcontent/column/index?alias=" + p;
            else if ("paidcontent" === e)
              o = "/packages/paidcontent/content/index?alias=" + p;
            else if ("mypaidcontent" === e)
              o = "/packages/paidcontent/list/index";
            else if ("paidlive" === e)
              o = "/packages/paidcontent/live/index?alias=" + p;
            else if ("allcourse" === e) o = "/packages/edu/goods/list/index";
            else if (
              "course" === e ||
              "educourse" === e ||
              "allofflinecourse" === e ||
              "eduappointment" === e ||
              "course_group" === e ||
              "course_category" === e ||
              "edumoments" === e
            )
              o =
                "/packages/edu/webview/index?targetUrl=" +
                encodeURIComponent(
                  g.replace(/^http(s)?:\/\/shop\d+-?\d+/, "https://h5")
                );
            else if ("link" === e) {
              var T = t.link_url;
              T &&
                /mp.weixin.qq.com\/s/.test(T) &&
                (o =
                  "/pages/common/webview-page/index?src=" +
                  encodeURIComponent(T));
            } else if ("shopnote" === e)
              (u = !0), (o = "/packages/shop/shopnote/list/index");
            else if ("calendar_checkin" === e)
              o = "/packages/ump/sign-in/index";
            else if ("zodiac" === e)
              o = "/packages/ump/new-lottery/casino/index?alias=" + t.alias;
            else if ("shopnote_detail" === e)
              o = "/packages/shop/shopnote/detail/index?noteAlias=" + t.alias;
            else if ("hotellist" === e)
              o =
                "/pages/common/webview-page/index?src=" + encodeURIComponent(g);
            else if ("recharge_center" === e)
              o =
                "/pages/common/webview-page/index?src=" + encodeURIComponent(g);
            else {
              if ("red-package" === e)
                return n.default.$native.showRedPackage({ url: g }), {};
              "member_code" === e
                ? (o = "/packages/member-code/index")
                : "vipcenter" === e
                ? (o = "/packages/shop/levelcenter/free/index")
                : "weapp_marketing_page" === e || "marketing_page" === e
                ? (o = "/packages/ext-marketing-page/index?id=" + (f.id || ""))
                : "nearby_store_way" === e &&
                  (o = "/packages/shop/physical-store/index");
            }
            return (
              Object(i.a)(a) || u || (o = r.a.add(o, a)),
              { url: o, isTab: u, pageName: d, query: l }
            );
          })(e, t, a);
          if (l) {
            var f = g || l;
            h ? p.switchTab(f, m) : l && p.navigate(f, m);
          }
        } else d.default.trigger("feature-platform-coupon:open", t);
      }
      function g(e, t) {
        void 0 === t && (t = !1), t && (e = o.a.toSnakeCase(e));
        var { extra: a = {} } = e;
        h(e.link_type, e, a);
      }
    },
    of9M: function (e, t, a) {
      a.d(t, "k", function () {
        return i;
      }),
        a.d(t, "l", function () {
          return r;
        }),
        a.d(t, "h", function () {
          return s;
        }),
        a.d(t, "i", function () {
          return c;
        }),
        a.d(t, "d", function () {
          return u;
        }),
        a.d(t, "f", function () {
          return d;
        }),
        a.d(t, "g", function () {
          return l;
        }),
        a.d(t, "c", function () {
          return p;
        }),
        a.d(t, "e", function () {
          return h;
        }),
        a.d(t, "n", function () {
          return g;
        }),
        a.d(t, "b", function () {
          return m;
        }),
        a.d(t, "m", function () {
          return f;
        }),
        a.d(t, "j", function () {
          return v;
        }),
        a.d(t, "a", function () {
          return b;
        });
      var o = a("7sy2"),
        n = getApp();
      function i(e) {
        return n.request({
          method: "GET",
          path: "/intro/api/shop/getShopConfig",
          query: e,
        });
      }
      var r = (e) =>
          Object(o.e)({
            path: "/wscuser/levelcenter/api/userLevelDetail.json",
            data: e,
          }),
        s = (e) =>
          n.request({
            path: "/wscuser/levelcenter/api/getLevelListV2.json",
            data: e,
          }),
        c = (e) =>
          n.request({
            path: "/wscuser/memberlevel/api/genQrAndBaCode.json",
            data: e,
          }),
        u = (e) =>
          n.request({
            path: "/wscuser/level/api/getBenefitAssetInfo.json",
            data: e,
          }),
        d = () =>
          n.request({
            path: "/wscuser/level/api/isThirdPartyCenterLevel.json",
          }),
        l = (e) =>
          n.request({
            path: "/wscuser/level/api/getLevelGiftBag.json",
            data: e,
          }),
        p = (e) =>
          n.request({
            path: "/wscuser/wx/card-enabled.json",
            data: { kdtId: e },
          }),
        h = (e) =>
          n.request({
            path: "/wscuser/level/api/getCurrentBenefitInfo.json",
            data: e,
          });
      function g(e) {
        return n.request({
          path: "/wscuser/level/api/removeLevel.json",
          data: e,
        });
      }
      function m() {
        return n.request({ path: "/wscuser/level/api/checkRemoveLevel.json" });
      }
      var f = (e) =>
          Object(o.e)({
            path: "/wscuser/level/api/rejoin.json",
            data: e,
            method: "post",
          }),
        v = () =>
          n.request({ path: "/wscuser/level/api/queryUnderwayPlan.json" }),
        b = () =>
          n.request({ path: "/wscuser/membercenter/checkBenefitMatch.json" });
    },
    "p/Bx": function (e, t, a) {
      a.d(t, "b", function () {
        return i;
      }),
        a.d(t, "a", function () {
          return r;
        }),
        a.d(t, "d", function () {
          return s;
        }),
        a.d(t, "c", function () {
          return c;
        }),
        a.d(t, "e", function () {
          return d;
        }),
        a.d(t, "f", function () {
          return l;
        });
      var o = a("53ek"),
        n = a("v6dD"),
        i = { day: 1, coutinue: 2, surpriseCoupon: 3, noneAward: 4 },
        r = { credit: "credit", bonus: "bonus", coupon: "coupon" },
        s = { cash: 1, discount: 2, voucher: 3 },
        c = {
          backgroundImage:
            "https://img01.yzcdn.cn/upload_files/2021/11/02/Fky7vV_QA-ZpljXibtX50Ia8RU4R.png",
          themeColor: "#FF9300",
          backgroundBtn: "linear-gradient(-180deg,#ffa428 3%,#ff9300 98%)",
          dialogBackgroundColor: "linear-gradient(to bottom, #ffa347, #ff9300)",
        },
        u = (e) => e + (60 * new Date().getTimezoneOffset() * 1e3 - -288e5);
      function d(e, t, a) {
        var o = 12 * e + t + a.detail,
          n = Math.floor(o / 12),
          i = o % 12;
        return { year: 0 === i ? n - 1 : n, month: 0 === i ? 12 : i };
      }
      var l = (e) =>
        Object(o.a)(
          {
            startTime: (e) => {
              var { current_cycle_start_at: t } = e;
              return t ? Object(n.b)(u(t), "YYYY.MM.DD") : "";
            },
            endTime: (e) => {
              var { current_cycle_end_at: t } = e;
              return t ? Object(n.b)(u(t), "YYYY.MM.DD") : "";
            },
            checkInDates: (e) => {
              var { checkin_date: t } = e;
              return t.map((e) => ({
                year: new Date(u(e)).getFullYear(),
                month: new Date(u(e)).getMonth() + 1,
                date: new Date(u(e)).getDate(),
              }));
            },
          },
          [],
          e
        );
    },
    pIjP: function (e, t, a) {
      t.a = {
        formatTime: function (e) {
          if ("number" != typeof e || isNaN(e)) return "这里显示时间";
          var t = new Date(e),
            a = new Date().getTime() - t.getTime();
          return a < 0
            ? ""
            : a <= 6e4
            ? "刚刚"
            : a < 354e4
            ? Math.floor(a / 6e4) + "分钟前"
            : a < 864e5
            ? Math.floor(a / 36e5) + "小时前"
            : t.getMonth() + 1 + "月" + t.getDate() + "日";
        },
      };
    },
    q8nf: function (e, t) {
      e.exports = {
        design: [
          { type: "config" },
          { type: "search-input" },
          { type: "history-words-list" },
          { type: "hot-words-list" },
        ],
      };
    },
    qlF2: function (e, t, a) {
      a.d(t, "a", function () {
        return c;
      }),
        a.d(t, "d", function () {
          return u;
        }),
        a.d(t, "c", function () {
          return d;
        }),
        a.d(t, "b", function () {
          return l;
        });
      var o,
        n = a("xyw3"),
        i = a("0Ip2"),
        r = a("AQkN"),
        s = (e, t) =>
          e === Number.POSITIVE_INFINITY ? Number.POSITIVE_INFINITY : e / t,
        c = (e) => {
          if (!e) return "";
          var t = {},
            { levelSkuPreferentials: a = [], price: o } = e;
          return (
            (t.consecutivePrice = Object(n.a)(o).toYuan()),
            (t.hasDiscount = !1),
            (t.price = Object(n.a)(o).toYuan()),
            (t.ExperienceRenew = !1),
            a.length
              ? (a.forEach((e) => {
                  switch (e.preferentialType) {
                    case r.b.Price:
                      (t[r.f[e.sceneType]] = Object(n.a)(e.price).toYuan()),
                        (t.hasDiscount = !0);
                      break;
                    case r.b.Discount:
                      (t[r.f[e.sceneType]] =
                        Object(n.a)(o).toYuan() *
                          Object(n.a)(e.discount).toYuan() ||
                        Object(n.a)(o).toYuan()),
                        (t.hasDiscount = !0),
                        (t.ExperienceRenew = !0);
                  }
                }),
                t)
              : t
          );
        },
        u = (e) => {
          if (!e) return "";
          var t = {},
            {
              goodsSkuType: a,
              lifeTime: { termMonths: o } = {},
              handlePrice: {
                startPrice: n = Number.POSITIVE_INFINITY,
                consecutivePrice: i = Number.POSITIVE_INFINITY,
                price: c,
              } = {},
            } = e;
          return (
            (t.name =
              a === r.a.Renewal
                ? "连续包" + (o > 12 ? "/" : "") + r.c[o]
                : o > 12
                ? o / 12 + "年"
                : o + "个月"),
            (t.originCycle = r.c[o]),
            (t.lowestPrice = [c, n, i].reduce(
              (e, t) => (s(t, o) < s(e, o) ? t : e),
              Number.POSITIVE_INFINITY
            )),
            (t.isCheapestIsStart = Math.min(c, n, i) === Number(n)),
            (t.lowestMonthPrice = s(t.lowestPrice, o)),
            t
          );
        },
        d = (e) => {
          var t = Number.POSITIVE_INFINITY,
            a = Number.POSITIVE_INFINITY,
            o = 0,
            n = !1,
            i = !1,
            s = r.d.YEAR + 1,
            d = r.d.QUARTER;
          e.forEach((e) => {
            var l = e,
              { goodsSkuType: p, lifeTime: { termMonths: h } = {} } = e;
            if (p !== r.a.ExperienceRenewal) {
              (d = h < d ? h : d), (l.handlePrice = c(e));
              var g = u(l),
                m = g.lowestMonthPrice;
              (n = n || l.handlePrice.ExperienceRenew || !1),
                (a > m || (a === m && !i && s > h)) &&
                  ((a = m),
                  (i = g.isCheapestIsStart),
                  (t = g.lowestPrice),
                  (o = g.originCycle),
                  (s = h));
            }
          });
          var l = o;
          return (
            0 == Number(t).toFixed(2)
              ? (a = t)
              : d === r.d.MONTH && ((t = a), (o = r.c[d])),
            {
              bestPrice: Number(t).toFixed(2),
              ExperienceRenew: n,
              bestType: o,
              originType: l,
              monthPirce: Number(a).toFixed(2),
              isStartCheapest: i,
            }
          );
        },
        l =
          ((o = {}),
          (e, t) => {
            var a = e.indexOf(t),
              n = [...e];
            return (
              a && n.splice(a, 1),
              n.forEach((e) => {
                o[e] ||
                  Object(i.d)({ levelAlias: e })
                    .then((t) => {
                      o[e] = t;
                    })
                    .catch((e) => {});
              }),
              [
                o[t],
                Object(i.d)({ levelAlias: t }).then((e) => ((o[t] = e), e)),
              ]
            );
          });
    },
    qo4l: function (e, t, a) {
      a.d(t, "a", function () {
        return n;
      });
      var o = getApp(),
        n = (e) =>
          o.request({
            path: "/retail/h5/trade/queryTradeConfig",
            method: "GET",
            data: { key: e },
          });
    },
    quXu: function (e, t, a) {
      a.d(t, "a", function () {
        return s;
      });
      var o = a("HAKf"),
        n = a.n(o),
        i = a("yw36"),
        r = a.n(i);
      class s {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      s.widgets = { Main: n(), NavigationBar: r() };
    },
    rV0Y: function (e, t, a) {
      var o = a("LSEb")(a("s3UK"), "Promise");
      e.exports = o;
    },
    rquh: function (e) {
      e.exports = JSON.parse("{}");
    },
    rrk0: function (e, t) {
      e.exports = function (e) {
        var t = -1,
          a = Array(e.size);
        return (
          e.forEach(function (e, o) {
            a[++t] = [o, e];
          }),
          a
        );
      };
    },
    s3t7: function (e, t, a) {
      var o = a("VNQV"),
        n = a("0KRy"),
        i = a("rV0Y"),
        r = a("b2OE"),
        s = a("fxeQ"),
        c = a("GI0s"),
        u = a("bE7W"),
        d = u(o),
        l = u(n),
        p = u(i),
        h = u(r),
        g = u(s),
        m = c;
      ((o && "[object DataView]" != m(new o(new ArrayBuffer(1)))) ||
        (n && "[object Map]" != m(new n())) ||
        (i && "[object Promise]" != m(i.resolve())) ||
        (r && "[object Set]" != m(new r())) ||
        (s && "[object WeakMap]" != m(new s()))) &&
        (m = function (e) {
          var t = c(e),
            a = "[object Object]" == t ? e.constructor : void 0,
            o = a ? u(a) : "";
          if (o)
            switch (o) {
              case d:
                return "[object DataView]";
              case l:
                return "[object Map]";
              case p:
                return "[object Promise]";
              case h:
                return "[object Set]";
              case g:
                return "[object WeakMap]";
            }
          return t;
        }),
        (e.exports = m);
    },
    sWZd: function (e, t, a) {
      var o = a("PqlX"),
        n = a("BwbT"),
        i = a("ULAX"),
        r = a("zYYD");
      e.exports = function (e, t) {
        return o(e) ? e : n(e, t) ? [e] : i(r(e));
      };
    },
    sx5L: function (e, t, a) {},
    tDyL: function (e, t, a) {
      var o = a("wiKJ"),
        n = a("kXPx"),
        i = a("yoW1"),
        r = a("PqlX"),
        s = a("0qVv");
      e.exports = function (e) {
        return "function" == typeof e
          ? e
          : null == e
          ? i
          : "object" == typeof e
          ? r(e)
            ? n(e[0], e[1])
            : o(e)
          : s(e);
      };
    },
    "tb+2": function (e, t, a) {
      var o = a("07F0"),
        n = a("E7Xw"),
        i = Object.prototype.propertyIsEnumerable,
        r = Object.getOwnPropertySymbols,
        s = r
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  o(r(e), function (t) {
                    return i.call(e, t);
                  }));
            }
          : n;
      e.exports = s;
    },
    u2vY: function (e, t, a) {
      var o = a("Exs5");
      e.exports = function (e) {
        return function (t) {
          return o(t, e);
        };
      };
    },
    u7St: function (e, t) {
      var a = Date.now;
      e.exports = function (e) {
        var t = 0,
          o = 0;
        return function () {
          var n = a(),
            i = 16 - (n - o);
          if (((o = n), i > 0)) {
            if (++t >= 800) return arguments[0];
          } else t = 0;
          return e.apply(void 0, arguments);
        };
      };
    },
    u7Vq: function (e, t) {
      e.exports = {
        d: "pageQuery;2;pageQuery;6",
        w: "FillPage",
        wc: "FillPage",
        wd: "FillPage",
        li: "beforePageMount",
      };
    },
    vr5V: function (e, t) {
      e.exports = {
        d: "noteData;2;noteGoodIds;2;noteType;2;noteId;2;liveInfo;2;design;2;thumbsStatus;2;salesman;2;featureComponents;2;showNav;2;showSubBtn;2;dialogCustomStyle;2;subscribeStatus;2;guideShow;2;shop;4;yunDesignConfig;4",
        e: "",
        w: "Main;ShopnoteContent;ShopnoteFeature;ShopnoteReaddata;ShopnoteShopinfo;ShopnoteSubscribe",
        wc: "ShowcaseContainer;ShopnoteContent;ShopnoteFeature;ShopnoteReaddata;ShopnoteShopinfo;ShopnoteSubscribe",
        wd: "Main",
        p: "",
        li: "beforePageCreate;beforePageMount;onPageShow;onReachBottom;onPullDownRefresh;onShareAppMessage;onPageScroll",
      };
    },
    we3t: function (e, t, a) {
      a.d(t, "e", function () {
        return i.a;
      }),
        a.d(t, "b", function () {
          return n.a;
        }),
        a.d(t, "n", function () {
          return l.a;
        }),
        a.d(t, "a", function () {
          return c.a;
        }),
        a.d(t, "d", function () {
          return S;
        }),
        a.d(t, "g", function () {
          return T;
        }),
        a.d(t, "j", function () {
          return v;
        }),
        a.d(t, "c", function () {
          return f;
        }),
        a.d(t, "i", function () {
          return p;
        }),
        a.d(t, "l", function () {
          return b;
        }),
        a.d(t, "m", function () {
          return I;
        }),
        a.d(t, "k", function () {
          return y;
        }),
        a.d(t, "h", function () {
          return w;
        }),
        a.d(t, "o", function () {
          return m;
        }),
        a.d(t, "f", function () {
          return O;
        });
      var o = a("taYb"),
        n = a("2wjL"),
        i = a("zMoS"),
        r = a("a1Mm"),
        s = a("exMg"),
        c = a.n(s),
        u = a("GFa9");
      a("DXqK");
      var d = a("xyw3"),
        l = (a("AqAW"), a("rDSc"));
      function p(e, t) {
        var a = c()(+t, +e);
        return (Math.floor(a) / 100).toFixed(2);
      }
      function h(e, t, a) {
        if (
          (void 0 === t && (t = 2),
          void 0 === a && (a = !1),
          "number" != typeof e)
        )
          return "";
        var o = (e / 100).toFixed(t);
        return a ? parseFloat(o) : o;
      }
      function g(e, t) {
        if ((void 0 === e && (e = 0), void 0 === t && (t = 2), 2 === t))
          return e <= 9 ? "0" + e : "" + e;
        if (3 === t) {
          if (e <= 9) return "00" + e;
          if (e <= 99) return "0" + e;
        }
        return "" + e;
      }
      function m(e) {
        void 0 === e && (e = 0);
        var t = e,
          a = Math.floor(t / 864e5);
        t -= 864e5 * a;
        var o = Math.floor(t / 36e5);
        t -= 36e5 * o;
        var n = Math.floor(t / 6e4);
        t -= 6e4 * n;
        var i = Math.floor(t / 1e3),
          r = t - 1e3 * i;
        return {
          days: a,
          hours: g(o),
          minutes: g(n),
          seconds: g(i),
          milliseconds: g(r, 3),
          remainArr: [a, o, n, i, r],
        };
      }
      function f(e, t) {
        return (
          void 0 === t && (t = "~"),
          (o = typeof (a = e)),
          null == a || ("object" != o && "function" != o)
            ? h(e)
            : h(e.min) + t + h(e.max)
        );
        var a, o;
      }
      function v(e) {
        return e;
      }
      var b = o.a.toCamelCase,
        S = (o.a.toSnakeCase, r.a);
      function y(e) {
        u.a.navigate({ url: e });
      }
      function T(e, t) {
        return Object(r.a)(e, t || "!100x100.jpg");
      }
      function w(e) {
        return (
          void 0 === e && (e = {}), n.a.add("/pages/goods/detail/index", e)
        );
      }
      function O(e) {
        var {
            activityAlias: t,
            activityType: a,
            activityId: o,
            umpType: n,
          } = e,
          i = { activityType: a, activityId: o, activityAlias: t };
        return (
          "seckill" === n
            ? (i = { umpAlias: t, umpType: n || a })
            : ("helpCut" !== n && "helpcut" !== n) || (i.umpType = n),
          i
        );
      }
      function I(e) {
        return void 0 === e && (e = 0), Object(d.a)(e).toYuan();
      }
    },
    wiKJ: function (e, t, a) {
      var o = a("VY7S"),
        n = a("Akg/"),
        i = a("a7YA");
      e.exports = function (e) {
        var t = n(e);
        return 1 == t.length && t[0][2]
          ? i(t[0][0], t[0][1])
          : function (a) {
              return a === e || o(a, e, t);
            };
      };
    },
    xD10: function (e) {
      e.exports = JSON.parse("{}");
    },
    "yar/": function (e, t, a) {
      a.d(t, "a", function () {
        return o;
      });
      var o = {
        kdtId: { type: Number, required: !0 },
        groupAlias: { type: String, required: !0 },
        hasAuthorized: { type: Boolean, required: !0 },
        scene: { type: String, required: !0 },
        pageQuery: { type: Object, required: !0 },
        hasLevel: { type: Boolean, required: !0 },
        joinGapInfo: { type: Object, required: !1 },
        removed: { type: Boolean, required: !0 },
      };
    },
    yqAG: function (e, t, a) {
      var o = a("lLPU"),
        n = a("u7St")(o);
      e.exports = n;
    },
    "z+FW": function (e, t, a) {
      a.d(t, "a", function () {
        return c;
      });
      var o = a("AI6o"),
        n = a("9kk/"),
        i = a("AlIn"),
        r = a("2wjL"),
        s = getApp();
      function c(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {});
        var { desc: a, kdtId: c, extArgs: u } = e,
          { goodsId: d } = t,
          { redirectUrl: l } = t;
        u && ((l = r.a.add(l, u)), wx.setStorageSync(i.c, u));
        var p = s.getKdtId();
        s.updateKdtId(c, !1, { mark: "921" }).then(() => {
          s.getShopInfo().then(() => {
            d
              ? Object(o.a)({ kdtId: c, goodsId: d })
                  .then((e) => {
                    var { alias: t } = e;
                    (l += (-1 != l.indexOf("?") ? "&" : "?") + "alias=" + t),
                      Object(n.e)(p, c, l);
                  })
                  .catch((e) => {})
              : Object(n.e)(p, c, l);
          });
        }),
          s.storage.set("select-shop-info", { poi: a });
      }
    },
    zEvu: function (e, t) {
      e.exports = function (e) {
        var t = this.__data__,
          a = t.delete(e);
        return (this.size = t.size), a;
      };
    },
    zXe4: function (e, t, a) {
      var o = a("GI0s"),
        n = a("T9Ud");
      e.exports = function (e) {
        return "symbol" == typeof e || (n(e) && "[object Symbol]" == o(e));
      };
    },
    zYYD: function (e, t, a) {
      var o = a("MfmI");
      e.exports = function (e) {
        return null == e ? "" : o(e);
      };
    },
  });
