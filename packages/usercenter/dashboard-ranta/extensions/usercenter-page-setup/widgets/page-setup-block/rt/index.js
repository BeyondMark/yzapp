"use strict";
var r = require("~/r");
r(
  "ytnT",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "+AjT": function (e, t, a) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          a("bb6g").__exportStar(a("DypG"), t);
      },
      DypG: function (e, t, a) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.mergeMulPluginList = void 0);
        var s = a("bb6g");
        t.mergeMulPluginList = function (e, t, a) {
          var i = a.key,
            n = new Map(),
            r = [],
            o = [],
            d = e.reduce(function (e, t) {
              return (e[t[i]] = !0), e;
            }, {});
          t.forEach(function (e) {
            var t = s.__assign({}, d);
            e.forEach(function (e, a) {
              var o = e[i];
              n.has(e) ||
                (d[o]
                  ? (t[o] = !1)
                  : (n.set(e, !0),
                    r.push(s.__assign(s.__assign({}, e), { index: a }))));
            }),
              o.push.apply(
                o,
                Object.keys(t).filter(function (e) {
                  return t[e];
                })
              );
          });
          var c = o.reduce(function (e, t) {
              return (e[t] = !0), e;
            }, {}),
            l = e.filter(function (e) {
              var t = e[i];
              return !c[t];
            }),
            h = {};
          return (
            r.forEach(function (e) {
              var t = e.index,
                a = s.__rest(e, ["index"]);
              h[a[i]] || ((h[a[i]] = !0), l.splice(t, 0, a));
            }),
            {
              newList: l,
              delKeyList: o,
              addKeyList: r.map(function (e) {
                return e[i];
              }),
            }
          );
        };
      },
      hIZB: function (e, t, a) {
        a.d(t, "a", function () {
          return p;
        });
        var s = a("GFa9"),
          i = a("yUfZ"),
          n = a("Fcif"),
          r = a("+I+c"),
          o = ["type"],
          d = getApp();
        var c = a("DXKY"),
          l = a("8B9M"),
          h = a("YeA1"),
          { dmc: u } = Object(h.a)();
        function p(e, t, a) {
          if ((void 0 === a && (a = {}), "offlinepage" === e))
            return (
              void 0 === (h = t.link_id) && (h = ""),
              void (
                h &&
                (Object(l.a)().setOfflineId(h),
                s.a.switchTab({ url: "/packages/home/dashboard/index" }))
              )
            );
          var h;
          if ("platform_coupon" !== e) {
            if ("video_number_dynamic" !== e) {
              if ("weapplink" === e) {
                var { extra_data: p } = t;
                if (p && "2" === p.link_type)
                  return void (+p.use_short_link
                    ? wx.navigateToMiniProgram({ shortLink: p.short_link })
                    : wx.navigateToMiniProgram({
                        appId: p.other_weapp_appid,
                        path: p.other_weapp_link,
                      }));
              }
              var {
                url: m,
                isTab: g,
                isReLaunch: f,
                dmcExtra: v,
              } = Object(i.a)(e, t, a);
              if (m || v) {
                var b = g ? "switchTab" : f ? "reLaunch" : "navigate";
                if (v) {
                  var { pageName: w, query: x } = v;
                  u[b](w, x);
                } else s.a[b]({ url: m });
              }
            } else
              !(function (e) {
                var { linkTitle: t } = e,
                  a = Object(r.a)(e.videoDynamicParams, o),
                  s = Object(n.a)({}, e.videoDynamicParams, {
                    image_url: null == e ? void 0 : e.imageUrl,
                    link_title: t,
                  });
                d.logger.log({
                  et: "click",
                  ei: "wxvideo_video_click",
                  en: "视频号动态点击",
                  params: s,
                }),
                  wx.openChannelsActivity &&
                    wx.openChannelsActivity(
                      Object(n.a)({}, a, {
                        success: () => {
                          d.logger.log({
                            et: "custom",
                            ei: "wxvideo_video_jump_success",
                            en: "视频号动态跳转成功",
                            params: s,
                          });
                        },
                        fail: (e) => {
                          d.logger.log({
                            et: "custom",
                            ei: "wxvideo_video_jump_fail",
                            en: "视频号动态跳转失败",
                            params: Object(n.a)({}, s, {
                              error_msg: null == e ? void 0 : e.errMsg,
                            }),
                          });
                        },
                      })
                    );
              })(t);
          } else c.a.trigger("feature-platform-coupon:open", t);
        }
      },
      oE0F: function (e, t, a) {
        a.d(t, "a", function () {
          return n;
        });
        var s = a("taYb"),
          i = a("hIZB");
        function n(e, t) {
          void 0 === t && (t = !1), t && (e = s.a.toSnakeCase(e));
          var { extra: a = {} } = e;
          Object(i.a)(e.link_type, e, a);
        }
      },
      yUfZ: function (e, t, a) {
        a.d(t, "a", function () {
          return g;
        });
        var s = a("Fcif"),
          i = a("8B9M"),
          n = a("x5Yp"),
          r = a("2wjL"),
          o = a("7WUL"),
          d = a("lRMv"),
          c = a("YeA1"),
          { dmc: l } = Object(c.a)(),
          h = "packages",
          u = Object(i.a)(),
          p = "/" + h + "/shop/goods/tag-list/index",
          m = "/" + h + "/shop/goods/all/index";
        function g(e, t, a) {
          var i = "",
            c = !1,
            l = !1,
            g = null,
            {
              alias: f,
              link_title: v = "",
              link_url: b = "",
              link_id: w,
              extra_data: x = {},
            } = t,
            { banner_id: y } = a || {},
            C = {};
          if ((y && (C.banner_id = y), "goods" === e && f))
            i = "/pages/goods/detail/index?alias=" + f;
          else if ("tag" === e) {
            var I = f ? { alias: f } : r.a.getAll(b);
            I.alias &&
              ((i =
                p + "?alias=" + I.alias + "&title=" + encodeURIComponent(v)),
              (g = {
                pageName: "GoodsTag",
                query: { alias: I.alias, title: v },
              }));
          } else if ("weappfeature" === e)
            i = "/pages/home/feature/index?id=" + w + "&title=" + v;
          else if ("feature" === e && f)
            i = "/pages/home/feature/index?alias=" + f;
          else if ("homepage" === e)
            (c = !0), (i = "/pages/home/dashboard/index");
          else if ("cart" === e) (c = !0), (i = "/" + h + "/goods/cart/index");
          else if ("usercenter" === e)
            (c = !0),
              (i = "/pages/usercenter/dashboard/index"),
              u.globalData.isRetailApp &&
                (i = "/" + h + "/retail/usercenter/dashboard-v2/index");
          else if ("allgoods" === e)
            (i = m + "?title=" + encodeURIComponent(v)),
              (g = { pageName: "AllGoodsList", query: { title: v } });
          else if ("pointsstore" === e)
            i = "/" + h + "/ump/integral-store/index";
          else if ("coupon" === e)
            i =
              "/" +
              h +
              "/user/coupon/detail/index?id=" +
              t.link_id +
              (7 === t.coupon_type ? "&type=promocard" : "");
          else if ("seckill" === e)
            i = "/" + h + "/goods/seckill/index?alias=" + f;
          else if ("weapplink" === e && "1" === x.link_type) {
            var k;
            if (
              ("/" !== (i = x.my_weapp_link)[0] && (i = "/" + i),
              null != (k = Object(d.o)()) && k.client_enter_shop_linkto_switch)
            )
              try {
                var D = r.a.getAll(i) || {},
                  { subKdtId: _, sub_kdt_id: S, kdtId: j, kdt_id: P } = D,
                  O = _ || S || j || P,
                  R = u.getKdtId(),
                  T = u.getHQKdtId();
                O && +O !== R && +O !== T && (l = !0),
                  Object(d.f)({ text: "[wx] 自定义外链处理ReLaunch" });
              } catch (e) {
                Object(d.f)({ text: "[wx] 自定义外链处理有误", err: e });
              }
            var N = i.split("?")[0];
            if (
              (o.a.indexOf(N) > -1 && (c = !0),
              0 ===
                (i = r.a.remove(i, "shopAutoEnter")).indexOf(
                  "/pages/common/blank-page/index"
                ))
            ) {
              var Y = r.a.getAll(i);
              if (Y.weappSharePath) {
                var L = decodeURIComponent(Y.weappSharePath);
                (L = r.a.remove(L, "shopAutoEnter")),
                  (Y.weappSharePath = encodeURIComponent(L)),
                  (i = r.a.add("/pages/common/blank-page/index", Y));
              }
            }
          } else if ("paidcolumn" === e)
            i = "/" + h + "/paidcontent/column/index?alias=" + f;
          else if ("paidcontent" === e)
            i = "/" + h + "/paidcontent/content/index?alias=" + f;
          else if ("mypaidcontent" === e)
            i = "/" + h + "/paidcontent/list/index";
          else if ("paidlive" === e)
            i = "/" + h + "/paidcontent/live/index?alias=" + f;
          else if ("allcourse" === e) i = "/" + h + "/edu/goods/list/index";
          else if (
            "course" === e ||
            "educourse" === e ||
            "allofflinecourse" === e ||
            "eduappointment" === e ||
            "course_group" === e ||
            "course_category" === e ||
            "edumoments" === e
          )
            i =
              "/" +
              h +
              "/edu/webview/index?targetUrl=" +
              encodeURIComponent(
                b.replace(/^http(s)?:\/\/shop\d+-?\d+/, "https://h5")
              );
          else if ("link" === e) {
            var B = t.link_url;
            B &&
              /mp.weixin.qq.com\/s/.test(B) &&
              (i =
                "/pages/common/webview-page/index?src=" +
                encodeURIComponent(B));
          } else if ("shopnote" === e)
            (c = !0), (i = "/" + h + "/shop/shopnote/list/index");
          else if ("calendar_checkin" === e)
            i = "/" + h + "/shop/ump/sign-in/index";
          else if ("zodiac" === e)
            i = "/" + h + "/ump/new-lottery/casino/index?alias=" + t.alias;
          else if (["guaguale", "wheel", "crazyguess"].includes(e)) {
            var A = "";
            null != b && b.includes("lottery") && (A = "LuckyLottery"),
              null != b && b.includes("cards") && (A = "Cards"),
              null != b && b.includes("zodiac") && (A = "Zodiac"),
              null != b && b.includes("crazy") && (A = "CrazyGuess"),
              A && (g = { pageName: A, query: Object(s.a)({ alias: f }, C) });
          } else if ("shopnote_detail" === e)
            i = "/" + h + "/shop/shopnote/detail/index?noteAlias=" + t.alias;
          else if ("mp_article" === e)
            i =
              "/" +
              h +
              "/shop/shopnote/mparticle/detail/index?noteAlias=" +
              t.alias;
          else if ("hotellist" === e)
            i = "/pages/common/webview-page/index?src=" + encodeURIComponent(b);
          else if ("recharge_center" === e)
            i = "/pages/common/webview-page/index?src=" + encodeURIComponent(b);
          else {
            if ("red-package" === e) return wx.showRedPackage({ url: b }), {};
            "member_code" === e
              ? (i = "/" + h + "/member-code/index")
              : "vipcenter" === e
              ? (i = "/" + h + "/shop/levelcenter/free/index")
              : "weapp_marketing_page" === e || "marketing_page" === e
              ? (i = "/" + h + "/ext-marketing-page/index?id=" + (x.id || ""))
              : "storelist" === e || "nearby_store_way" === e
              ? (i = "/" + h + "/shop/physical-store/index")
              : "goods_classify" === e &&
                (i =
                  "/pages/common/webview-page/index?src=" +
                  encodeURIComponent(b));
          }
          return (
            Object(n.a)(a) || c || (i = r.a.add(i, a)),
            { url: i, isTab: c, isReLaunch: l, dmcExtra: g }
          );
        }
        !(function () {
          try {
            Promise.all([
              l.route.readRoute("AllGoodsList"),
              l.route.readRoute("GoodsTag"),
            ]).then((e) => {
              var [t, a] = e;
              (m = t.path), (p = a.path);
            });
          } catch (e) {}
        })();
      },
      ytnT: function (e, t, a) {
        a.r(t);
        var s = a("Fcif"),
          i = a("7/pW"),
          n = a("dWkE"),
          r = a("DXKY"),
          o = a("zMoS"),
          d = a("oE0F"),
          c = a("taYb"),
          l = a("xyw3"),
          h = a("RY8z"),
          u = a("q29p"),
          p = a.n(u),
          m = a("YehF"),
          g = a("KDJo"),
          f = a("2xJD"),
          v = a("4jn8"),
          b = a("YeA1"),
          w = a("+AjT"),
          x = a("QxN7"),
          y = a("dAi7"),
          C = a("Mqxx"),
          I = a("NTBK"),
          k = a("kjqZ"),
          D = a("C1mc"),
          _ = getApp(),
          S = "packages",
          j = _.globalData.isRetailApp ? "#f8f8f8" : "#fff";
        Object(i.a)({
          data: {
            loading: !0,
            globalCustomLoading: !0,
            isDiyByFeature: !1,
            deviceType: _.deviceType || "",
            backgroundColor: j,
            userAgreePrivacy: !1,
            showUserAgreeMask: !0,
            kdtId: 0,
            userInfo: {},
            servicePhoneNumber: "",
            hasCheckIn: !1,
            showCheckIn: !0,
            level: 0,
            points: 0,
            pointsDiff: 0,
            im: { businessId: "" },
            bindTips: "登录手机号，同步全渠道订单和优惠券",
            showBindPhoneNumber: !1,
            salesman: {},
            templateName: "normal",
            isV2Balance: !1,
            showLevel: !0,
            user: {},
            shopInfo: {},
            config: {},
            globalConfig: {},
            globalData: {},
            backgroundImage: "",
            statsNames: I.f,
            stats: I.e,
            statsShowInfo: {
              showPoints: !0,
              showCoupon: !0,
              showBenefitcard: !0,
              showBalance: !0,
              showChange: !0,
            },
            orders: { toPay: 0, paid: 0, sent: 0 },
            promptOrderPay: {},
            promptOrderEvaluation: {},
            plugins: [],
            userLevel: "",
            isEnable: !0,
            pluginValues: { cart: 0, gifts: 0, drugList: 0 },
            baseLinks: I.a,
            orderLinks: {
              all: "/" + S + "/trade/order/list/index",
              toPay: "/" + S + "/trade/order/list/index?type=topay",
              toSend: "/" + S + "/trade/order/list/index?type=tosend",
              toReceive: "/" + S + "/trade/order/list/index?type=send",
              toEvaluate: "/" + S + "/trade/order/list/index?type=toevaluate",
            },
            pluginLinks: {
              promotionCode:
                "/" +
                S +
                "/user/coupon/list/index?type=promocode&title=我的优惠码",
              cashBack: "/" + S + "/user/cashback/list/index",
              giftsCommunityVer: "/" + S + "/ump/gift/gift-list/index",
              purchaseColumnAndContent: "/" + S + "/paidcontent/list/index",
              accountSettings: "/" + S + "/account/settings/index",
              grouponFounder: "/" + S + "/groupbuying/activity/list/index",
              taskCenter: "/" + S + "/user/task-center/index",
              gifts: "/" + S + "/ump/presents/index",
              agentCenter: "/" + S + "/channel/agent/index",
              blindBox:
                "/pages/common/webview-page/index?src=" +
                encodeURIComponent("/wscump/blind-box/list") +
                "&title=" +
                encodeURIComponent("盲盒列表"),
              indentorCenter: "/" + S + "/channel/indentor/index",
              ump_conference: "/" + S + "/ext-marketing-page/index",
              drugList: "/" + S + "/trade/order/list/index?isDrug=true",
              offlineStore: "/" + S + "/shop/physical-store/index",
              exchangeGiftCard:
                "/" + S + "/pre-card/exchange/index?from=Usercenter",
              exhibitionReserve: "/" + S + "/ump/booking/index?from=usercenter",
            },
            isSupportSign: !1,
            isSigned: !1,
            userCenterComponents: [],
            isYzEdu: !1,
            appointments: [],
            noViewNum: 0,
            isReadWorkset: !1,
            waitRewardCount: 0,
            reviewToReadNum: 0,
            momentsName: "家校圈",
            canShowMomentsFlag: !1,
            levelGrowth: {},
            memberLevelGradeText: "",
            introduction: {},
            hiddenInfoCompleted: !0,
            showActivatePop: !1,
            benefitcard: {},
            isRetail: !1,
            supportAdvancedBenefit: !1,
            isPureWscSingleStore: !1,
            benefitReminds: [],
            isMember: !1,
            statsList: I.g,
            isImmersive: !1,
            cloudDataStatus: 0,
          },
          observers: {
            userAgreePrivacy(e) {
              e && 0 !== this.data.cloudDataStatus && this.handleYunSkdData();
            },
          },
          attached() {
            this.setYZData({
              globalCustomLoading: _.globalData.globalCustomLoading,
            }),
              this.handleRanta(),
              this.handleShowBindPhoneNumber();
            var e = this.getKdtId();
            e
              ? (this.setKdtId(e), this.fetchUCData())
              : r.a.once("shop:kdt_id:change", this.updateUCData, this),
              (this.$_offAuth = Object(x.onUserAuthSuccess)(() =>
                this.updateUserInfo()
              )),
              this.updateUserInfo(),
              this.initProtocol(),
              _.getImData().then((e) => {
                this.setYZData({ "im.businessId": e.businessId || "" });
              });
            var { shopMetaInfo: t = {} } = _.getShopInfoSync() || {};
            this.setYZData({
              isRetail: Object(m.e)(t),
              supportAdvancedBenefit: Object(g.b)(t),
              isPureWscSingleStore: Object(g.c)(t),
            }),
              (this.ctx.data.recommendBizName = "uc~mg"),
              (this.ctx.data.buyerId = _.getBuyerId()),
              (this.ctx.data.recommendRequestExtraParams = ["note", "coupon"]);
          },
          detached() {
            var e;
            r.a.off("shop:kdt_id:change", this.updateUCData, this),
              this.data.isDiyByFeature &&
                _.off(
                  "home_dashboard_com_loaded",
                  this.logFinishWxMonitorLogger
                ),
              null == (e = this.$_offAuth) || e.call(this);
          },
          pageLifetimes: {
            show() {
              this.refershFirstScreenData(), this.handleShowBindPhoneNumber();
            },
            hide() {
              clearInterval(this.intervalTimer),
                (this.intervalTimer = null),
                _.off("app:token:success", null);
            },
          },
          methods: {
            handleRanta() {
              Object(b.e)(this, {
                hiddenInfoCompleted: this.hiddenInfoCompleted.bind(this),
                hideDrugRequirements: this.hideDrugRequirements.bind(this),
              }),
                this.ctx.watch("isPullDownRefresh", () => {
                  wx.startPullDownRefresh(), this.fetchUCData();
                });
            },
            refershFirstScreenData() {
              if (!this.data.loading) {
                var e = this.getGlobalAndFirstScreenParams();
                Object(y.a)(e).then((e) => {
                  var t = this.handleFirstScreenData(e);
                  this.setYZData(Object(s.a)({}, t));
                });
              }
            },
            onAccountSuccess() {
              this.setYZData({ showBindPhoneNumber: !1 }),
                this.fetchInitData().then(() => {
                  this.setYZData({ cloudDataStatus: 3 });
                });
            },
            handleShowBindPhoneNumber() {
              var e = !1;
              _.getBuyerId() ||
                ((e = !0),
                _.on("app:token:success", () => {
                  _.getBuyerId() && this.setYZData({ showBindPhoneNumber: !1 });
                })),
                this.setYZData({ showBindPhoneNumber: e });
            },
            updateUserInfo() {
              var e = this.getKdtId();
              _.getUserInfo((t) => {
                this.getUserInfoOutOfSensitive(t.userInfo).then((t) => {
                  this.setYZData({ userInfo: t, kdtId: e });
                });
              });
            },
            updateUCData() {
              var e = this.getKdtId();
              e && (this.setKdtId(e), this.fetchUCData());
            },
            getKdtId(e) {
              var { chainStoreInfo: t = {} } = _.getShopInfoSync(),
                { isMultiOnlineShop: a } = t;
              return a && !e ? _.getHQKdtId() : _.getKdtId();
            },
            fetchUCData() {
              this.fetchInitData(), this.fetchSalesmanData();
            },
            fetchShowcaseContainerData() {
              var { kdtId: e } = this.data;
              _.request({
                path: "/wscdeco/biz-component/list.json",
                method: "GET",
                query: {
                  bizName: "membercenter",
                  queryValues: encodeURIComponent(e + ",2"),
                  stage: 100,
                },
              })
                .then((e) => {
                  this.ctx.data.featureComponents = (e.components || []).filter(
                    (e) => "shop_usercenter" !== e.type
                  );
                })
                .catch((e) => {
                  k.a.end({
                    name: "个人中心渲染",
                    type: "error",
                    detail: { err: e },
                    extra: { bizScene: "fetchShowcaseContainerData" },
                  });
                });
            },
            initProtocol() {
              this.getProtocol().then((e) => {
                var { getProtocolStatus: t } = e;
                t().then((e) => {
                  !1 === e && wx.hideShareMenu();
                });
              });
            },
            getProtocol() {
              return (
                this.$_protocolPs ||
                  (this.$_protocolPs = a
                    .e("packages/async-main/chunk")
                    .then(a.t.bind(null, "HsSF", 7))
                    .then((e) => {
                      var { InvokeProtocol: t, getProtocolStatus: a } = e;
                      return { instance: new t(), getProtocolStatus: a };
                    })
                    .catch((e) => {
                      throw ((this.$_protocolPs = null), e);
                    })),
                this.$_protocolPs
              );
            },
            onProtocolInitListen() {
              this.data.userAgreePrivacy ||
                this.getProtocol().then((e) => {
                  var { instance: t } = e;
                  t.auth()
                    .then(() => {
                      this.setYZData({
                        userAgreePrivacy: !0,
                        showUserAgreeMask: !1,
                      });
                    })
                    .catch(() => {});
                });
            },
            setKdtId(e) {
              this.setYZData({ kdtId: e });
            },
            onContactBack: h.a.contactBack,
            jumpToExclusiveGuide() {
              var e =
                "https://h5.youzan.com/guide/customer/exclusive-guide/home?kdt_id=" +
                this.getKdtId();
              wx.navigateTo({
                url:
                  "/pages/common/webview-page/index?src=" +
                  encodeURIComponent(e) +
                  "&title=专属导购",
              });
            },
            jumpToMemberBenefit() {
              h.a.navigate({ url: "/" + S + "/member-benefit/benefit/index" });
            },
            jumpToDeliveryAddress() {
              var e = _.db.set({ switchable: !1 });
              h.a.navigate({
                url: "/" + S + "/order-native/address-list/index?dbid=" + e,
              });
            },
            jumpToMemberLevel() {
              var {
                levelName: e,
                payLevelName: t,
                freeLevelName: a,
              } = this.data.levelGrowth;
              if (e)
                return t
                  ? h.a.navigate({ url: "/" + S + "/levelcenter/plus/index" })
                  : void (
                      a &&
                      h.a.navigate({ url: "/" + S + "/levelcenter/free/index" })
                    );
            },
            jumpToMemberExam() {
              h.a.navigate({
                url:
                  "/packages/edu/webview/index?targetUrl=" +
                  encodeURIComponent(
                    "https://h5.youzan.com/wscvis/supv/examination/list?kdt_id=" +
                      this.getKdtId()
                  ),
              });
            },
            jumpToMemberCertificate() {
              h.a.navigate({
                url:
                  "/packages/edu/webview/index?targetUrl=" +
                  encodeURIComponent(
                    "https://h5.youzan.com/wscvis/edu/certificate/cert-list?kdt_id=" +
                      this.getKdtId()
                  ),
              });
            },
            jumpToMemberExerciseBook() {
              h.a.navigate({
                url:
                  "/packages/edu/webview/index?targetUrl=" +
                  encodeURIComponent(
                    "https://h5.youzan.com/wscvis/supv/homework/list?kdt_id=" +
                      this.getKdtId()
                  ),
              });
            },
            jumpToMemberEduReferral() {
              h.a.navigate({
                url:
                  "/packages/edu/webview/index?targetUrl=" +
                  encodeURIComponent(
                    "https://h5.youzan.com/wscvis/ump/activity-entry?kdt_id=" +
                      this.getKdtId()
                  ),
              });
            },
            jumpToFreeMemberLevel() {
              h.a.navigate({ url: "/" + S + "/levelcenter/free/index" });
            },
            jumpToCustomerSettings() {
              h.a.navigate({
                url: "/" + S + "/user/membercenter/setting/index",
              });
            },
            jumpToOrderRefund() {
              h.a.navigate({ url: "/" + S + "/trade/refund/list/index" });
            },
            jumpToRelationInfo() {
              wx.navigateTo({
                url:
                  "/pages/common/webview-page/index?src=" +
                  encodeURIComponent(
                    "https://h5.youzan.com/wscuser/scrm/relationPerson"
                  ),
              });
            },
            jumpToLink(e) {
              var { detail: t } = e;
              Object(d.a)(t, !0);
            },
            statsItemClicked(e) {
              var t = e.detail;
              "change" === t && Object(n.a)("/wscassets/change/profile"),
                "cards" === t &&
                  (this.setYZData({ "stats.showCardDot": !1 }),
                  _.request({
                    path: "/wscuser/scrm/api/benefitcard/cleanNewCardTag",
                  }));
            },
            getInactiveCard() {
              var e = this.getKdtId(),
                t = p()(new Date(), "YYYY-MM-DD"),
                a = "hasUnActivateBenefitcard_" + e,
                s = wx.getStorageSync(a);
              try {
                (s && JSON.parse(s)[t]) ||
                  _.request({
                    path: "/wscuser/scrm/api/benefitcard/getInactiveCard",
                  }).then((e) => {
                    null != e && e.cardAlias
                      ? (this.setYZData({
                          benefitcard: e,
                          showActivatePop: !0,
                        }),
                        wx.setStorage({
                          key: a,
                          data: JSON.stringify({ [t]: 1 }),
                        }))
                      : this.setYZData({
                          showActivatePop: !1,
                          benefitcard: {},
                        });
                  });
              } catch (e) {}
            },
            fetchBenefitRemind() {
              _.request({ path: "/wscuser/level/api/queryPlanRemind.json" })
                .then((e) => {
                  if (null != e && e.content) {
                    var { benefitReminds: t, userCenterComponents: a = [] } =
                      this.data;
                    t.push({ text: e.content, id: e.planId });
                    var s = a.findIndex((e) => "uc_stats" === e.type);
                    s > -1 &&
                      (a.splice(s, 0, { type: "uc_benefit" }),
                      this.setYZData({
                        benefitReminds: t,
                        userCenterComponents: a,
                      }));
                  }
                })
                .catch((e) => {
                  k.a.end({
                    name: "个人中心渲染",
                    type: "error",
                    detail: { err: e },
                    extra: { bizScene: "fetchBenefitRemind" },
                  });
                });
            },
            getNewCardTag() {
              _.request({
                path: "/wscuser/scrm/api/benefitcard/getNewCardTag",
              }).then((e) => {
                this.setYZData({ "stats.showCardDot": !!e.value });
              });
            },
            fetchCustomerService() {
              _.carmen({
                api: "weapp.wsc.shop.returnaddress/1.0.0/get",
                data: { kdt_id: this.getKdtId() },
                success: (e) => {
                  var t = "";
                  +e.show_notice_mobile &&
                    (e.notice_phone2
                      ? ((t = e.notice_phone2),
                        e.notice_phone1 && (t = e.notice_phone1 + "-" + t))
                      : e.notice_mobile && (t = e.notice_mobile)),
                    this.setYZData({ servicePhoneNumber: t });
                },
              });
            },
            getUserInfoOutOfSensitive: (e) =>
              new Promise((t) => {
                wx.getStorage({
                  key: "app:token",
                  success: (a) => {
                    var s = a.data,
                      i = Object(o.a)(s, "mobile", ""),
                      n = Object(o.a)(e, "nickName", "");
                    n === i &&
                      11 === n.length &&
                      (e.nickName = n.substr(0, 3) + "****" + n.substr(7, 10)),
                      t(e);
                  },
                });
              }),
            onGetUserInfo(e) {
              var t = Object(o.a)(e, "detail.userInfo", {});
              if (
                (this.setYZData({
                  isNotValid: e.detail && e.detail.isNotValid,
                }),
                e && e.detail && e.detail.userInfo)
              ) {
                var a = getApp().getKdtId();
                this.getUserInfoOutOfSensitive(t).then((e) => {
                  this.setYZData({ userInfo: e, kdtId: a });
                });
              }
            },
            handleTapUserInfo(e) {
              switch (e.detail) {
                case "level":
                  this.jumpToMemberLevel();
                  break;
                case "growth":
                  this.jumpToFreeMemberLevel();
                  break;
                case "account":
                  this.jumpToCustomerSettings();
              }
            },
            handleImageChange(e) {
              var { detail: t } = e,
                { userCenterComponents: a = [] } = this.data,
                s = a.find((e) => "uc_image_ad" === e.type);
              if (s && s.is_has_ad_exchange && void 0 !== t) {
                var { images: i = [] } = s;
                if (i[t]) {
                  var { psCode: n, cooperateKdtId: r } = i[t];
                  this.adExchangeLogger({ psCode: n, cooperateKdtId: r });
                }
              }
            },
            adExchangeLogger(e) {
              var { psCode: t, cooperateKdtId: a } = e;
              t &&
                a &&
                _.logger &&
                _.logger.log({
                  et: "view",
                  ei: "ad_exchange_view",
                  en: "图片曝光",
                  params: {
                    ps_code: t,
                    activity_kdt_id: a,
                    component: "ad_exchange_banner",
                  },
                });
            },
            handleSign() {
              if (Object(o.a)(this.data, "isSupportSign"))
                return h.a.navigate({
                  url: "/" + S + "/shop/ump/sign-in/index",
                });
            },
            handleSalesmanClick() {
              if (!_.getBuyerId())
                return wx.navigateTo({
                  url: "/" + S + "/salesman/tutorial/index",
                });
              var { salesman: e } = this.data;
              if (!e.salesman && !e.fired)
                return wx.navigateTo({
                  url: "/" + S + "/salesman/tutorial/index",
                });
              wx.navigateTo({
                url: "/" + S + "/salesman/salesman-center/index",
              });
            },
            handleGuideClick() {
              var e =
                "https://h5.youzan.com/guide/center/home?kdt_id=" +
                this.getKdtId();
              wx.navigateTo({
                url:
                  "/pages/common/webview-page/index?src=" +
                  encodeURIComponent(e) +
                  "&title=导购工作台",
              });
            },
            jumpCouponDetail(e) {
              h.a.navigate({
                url:
                  "/" +
                  S +
                  "/user/coupon/list/index?type=" +
                  e +
                  "&title=" +
                  ("promocard" === e ? "我的优惠券" : "我的优惠码"),
              });
            },
            handleContactCustomerService() {
              wx.showModal({
                title: this.data.servicePhoneNumber,
                confirmText: "呼叫",
                success: (e) => {
                  e.confirm &&
                    wx.makePhoneCall({
                      phoneNumber: this.data.servicePhoneNumber,
                    });
                },
              });
            },
            fetchSalesmanData() {
              _.carmen({
                api: "youzan.salesman.wap.account/1.0.0/get",
                success: (e) => {
                  this.setYZData({ salesman: e });
                },
              });
            },
            fetchChannelAgentInfo() {
              return _.request({
                path: "/wscsalesman/channels/common-api/getChannelEntrance.json",
                method: "get",
                data: { type: 1 },
              })
                .then((e) => {
                  if (e && e.isOpen) {
                    var t = this.data.plugins.findIndex(
                        (e) => "fxCenter" === e.type
                      ),
                      a = this.data.plugins.slice(),
                      s = { title: e.name, type: "agentCenter" };
                    -1 !== t ? a.splice(t, 0, s) : a.unshift(s),
                      this.setYZData({ plugins: a });
                  }
                })
                .catch((e) => {
                  k.a.end({
                    name: "个人中心渲染",
                    type: "error",
                    detail: { err: e },
                    extra: { bizScene: "fetchChannelAgentInfo" },
                  });
                });
            },
            fetchBlindBoxInfo() {
              return _.request({
                path: "/wscump/blind-box/checkBlindBoxEntrance.json",
                method: "get",
              })
                .then((e) => {
                  if (e && e.value) {
                    var t = this.data.plugins.slice();
                    t.unshift({ title: "我的盲盒", type: "blindBox" }),
                      this.setYZData({ plugins: t });
                  }
                })
                .catch(() => {});
            },
            fetchChannelIndentorInfo() {
              return _.request({
                path: "/wscsalesman/channels/common-api/getChannelEntrance.json",
                method: "get",
                data: { type: 2 },
              })
                .then((e) => {
                  if (e && e.isOpen) {
                    var t = this.data.plugins.findIndex(
                        (e) => "fxCenter" === e.type
                      ),
                      a = this.data.plugins.slice(),
                      s = { title: e.name, type: "indentorCenter" };
                    -1 !== t ? a.splice(t, 0, s) : a.unshift(s),
                      this.setYZData({ plugins: a });
                  }
                })
                .catch((e) => {});
            },
            onPluginItemClicked(e) {
              var { detail: t } = e,
                a = this.data.plugins.find((e) => e.type === t);
              if (null != a && a.isCloud)
                this.ctx.cloud.emit("onToolsClick", { type: t });
              else
                switch (t) {
                  case "cart":
                    Object(v.a)({
                      path: "/pages/goods/cart/index",
                      fail() {
                        h.a.switchTab({ url: "/" + S + "/goods/cart/index" });
                      },
                    });
                    break;
                  case "paidContentExamination":
                    this.jumpToMemberExam();
                    break;
                  case "paidContentCertificate":
                    this.jumpToMemberCertificate();
                    break;
                  case "paidContentExerciseBook":
                    this.jumpToMemberExerciseBook();
                    break;
                  case "paidContentEduReferral":
                    this.jumpToMemberEduReferral();
                    break;
                  case "deliveryAddress":
                    this.jumpToDeliveryAddress();
                    break;
                  case "merchantsCall":
                    this.handleContactCustomerService();
                    break;
                  case "customerSettings":
                    this.jumpToCustomerSettings();
                    break;
                  case "fxCenter":
                    this.handleSalesmanClick();
                    break;
                  case "dgCenter":
                    this.handleGuideClick();
                    break;
                  case "refund":
                    this.jumpToOrderRefund();
                    break;
                  case "scrmRelationInfo":
                    this.jumpToRelationInfo();
                    break;
                  case "exclusiveGuide":
                    this.jumpToExclusiveGuide();
                    break;
                  case "memberCode":
                    var { tabbarOriginList: s } = _.globalData,
                      i = s.findIndex(
                        (e) => "packages/member-code/index" === e.pagePath
                      );
                    Object(v.b)(s, {
                      tabBarIndex: i,
                      query: { navIndex: i },
                      fail: () => {
                        h.a.navigate({ url: "/packages/member-code/index" });
                      },
                    });
                }
            },
            checkEduServiceEntry(e, t) {
              var a = !1;
              return (
                e.forEach((e) => {
                  "edu_services" === e.type &&
                    e.plugins.forEach((e) => {
                      e.type === t && (a = !0);
                    });
                }),
                a
              );
            },
            fetchInitData() {
              return Promise.all([
                this.fetchBrandFeatureData(),
                this.fetchGlobalAndFirstScreenData(),
                _.getPointsName(),
              ])
                .then((e) => {
                  var [{ usercenter: t }, [a, s], { pointsName: i = "积分" }] =
                    e;
                  wx.stopPullDownRefresh(),
                    this.addLog(a),
                    t
                      ? this.handleDiyByFeatureData(t)
                      : ((_.globalData.usercenterPromise = null),
                        (s.pointsName = i),
                        this.handleGlobalAndFirstScreenData(a, s),
                        this.handleExtraData());
                })
                .finally(() => {
                  this.setYZData({ loading: !1 });
                });
            },
            fetchBrandFeatureData() {
              if (_.globalData.brandFeaturePromise)
                return _.globalData.brandFeaturePromise;
              var e = this.getKdtId();
              return Object(C.a)(e, _.request);
            },
            getGlobalAndFirstScreenParams() {
              return {
                version: _.getVersion(),
                kdtId: this.getKdtId(),
                onlineKdtId: _.getKdtId(),
              };
            },
            fetchGlobalAndFirstScreenData() {
              var e;
              if (
                _.globalData.usercenterPromise &&
                (null == (e = this.ctx.data.pageQuery) || !e.needUpdate)
              )
                return _.globalData.usercenterPromise;
              var t = this.getGlobalAndFirstScreenParams();
              return Object(y.b)(t);
            },
            addLog(e) {
              var { userCenterConfigV2: t } = e,
                { pageId: a } = t || {};
              a &&
                this.ctx.logger.setPageInitConfig({
                  pageType: "f",
                  pageId: a,
                  eventParams: { id: a },
                });
            },
            handleDiyByFeatureData(e) {
              this.setYZData({ isDiyByFeature: !0 }),
                _.on(
                  "home_dashboard_com_loaded",
                  this.logFinishWxMonitorLogger
                );
              var t = [...e.components],
                a = t.find((e) => "config" === e.type);
              a &&
                ((this.ctx.data.title = a.title || "个人中心"),
                (this.ctx.data.featureComponents = t.filter(
                  (e) => "shop_usercenter" !== e.type
                )),
                (this.ctx.data.alias = e.alias),
                this.setYZData({ backgroundColor: a.pageBgColor || a.color })),
                this.handleNavigationBarConfig(
                  t.find((e) => "navigationbar_config" === e.type)
                ),
                this.handleYunSkdData();
            },
            handleGlobalAndFirstScreenData(e, t) {
              var { shopInfo: a } = e,
                { kdtId: i } = a,
                { user: n } = e,
                r = n.level.name || "";
              this.getKdtId() === I.d &&
                this.setYZData({ memberLevelGradeText: r }),
                Object(o.a)(t, "level.mode", "") === I.c.GROWTH &&
                  this.setYZData({ isSupportGrowthValue: !0 });
              var d = e.plugins || [],
                l = e.components || [],
                { isV2Balance: h } = e,
                u = e.isYZEdu,
                p = Object(o.a)(e, "isYzSingleWsc", !1);
              this.data.isRetail &&
                (d = d.reduce((e, t) => {
                  if (
                    "memberCode" === t.type &&
                    !Object(o.a)(n, "level.identityNo", "")
                  )
                    return e;
                  return e.concat([t]);
                }, [])),
                h &&
                  this.setYZData({
                    "baseLinks.balance":
                      "/" + S + "/pre-card/home/index?entry=0&from=userCenter",
                  });
              var m = l.filter((e) => "shop_usercenter" === e.type)[0] || {
                  type: "shop_usercenter",
                  pageStyle: 1,
                  backgroundImage: "",
                  memberLevel: 1,
                  headPosition: 1,
                  backgroundGradient: 0,
                },
                g = l.filter((e) => "config" === e.type)[0] || {
                  type: "config",
                  title: "个人中心",
                };
              d.push({ title: "个人信息", type: "customerSettings" }),
                d.push({ title: "账号与安全", type: "accountSettings" });
              var f =
                  m.backgroundImage || Object(o.a)(g, "image.url", "") || "",
                v = e.background || j,
                b = Object(o.a)(e, "userCenterComponents", []),
                w = Object(o.a)(e, "supportSignInfo.isOpen", !1),
                x = Object(o.a)(e, "isCheckin", !1),
                y = Boolean(
                  Object(o.a)(e, "userCenterComponents[0].showLevel", !0)
                ),
                C = b.filter((e) => "uc_user_info" === e.type)[0] || {};
              (C.memberType = C.memberType || 1),
                this.setYZData({ memberType: C.memberType });
              var k = -1;
              (b = b.map((e, t) => {
                if (
                  "uc_image_ad" === e.type &&
                  ((e.images = c.a.toCamelCase(e.images)),
                  (k = t),
                  1 === e.images.length)
                ) {
                  var { psCode: a, cooperateKdtId: s } = e.images[0];
                  this.adExchangeLogger({ psCode: a, cooperateKdtId: s });
                }
                return e;
              })),
                k > -1 && b.splice(k + 1, 0, { type: "uc_flow_entrance" }),
                (u || p) && this.handleEduData(e, b),
                d.find((e) => "需求清单" === e.title) && this.fetchDrugList();
              var D = I.g;
              b.forEach((e) => {
                "uc_stats" === e.type &&
                  (D = (null == e ? void 0 : e.statsList) || I.g);
              }),
                (b = this.handleDesignData(b));
              var _ = this.handleFirstScreenData(t),
                P = !!Object(o.a)(g, "is_immersive", 0),
                O = this.handleStatsInfo(D, _["stats.showBalance"]);
              this.setYZData(
                Object(s.a)(
                  {
                    globalData: e,
                    shopInfo: a,
                    kdtId: i,
                    user: n,
                    userLevel: r,
                    plugins: d,
                    config: m,
                    globalConfig: g,
                    backgroundImage: f,
                    backgroundColor: v,
                    userCenterComponents: b,
                    isSupportSign: w,
                    isSigned: x,
                    isYzEdu: u,
                    isV2Balance: h,
                    showLevel: y,
                    statsList: D,
                    isImmersive: P,
                  },
                  _,
                  O
                ),
                { immediate: !0 }
              ),
                this.handleYunSkdData(),
                this.handleNavigationBarConfig(
                  P ? { origin_immersion: !0 } : {}
                );
            },
            logFinishWxMonitorLogger() {
              k.a.end({ type: "finish", name: "个人中心渲染" });
            },
            handleDesignData(e) {
              var { design: t = [] } = this.ctx.data.yunDesignConfig || {};
              return e;
            },
            handleEduData(e, t) {
              var a = Object(o.a)(e, "isYzSingleWsc", !1),
                s =
                  Object(o.a)(e, "manageAbilaty.valid", !1) ||
                  Object(o.a)(e, "PctAbility.valid", !1),
                i = 0,
                n = -1,
                { shopMetaInfo: r = {} } = _.getShopInfoSync() || {},
                d = Object(f.b)(r);
              t.forEach((e, t) => {
                "edu_services" === e.type && ((i = e.customed), (n = t));
              });
              var c = e.versionStatus.versionCode;
              -1 !== n &&
                (0 === i
                  ? ((t[n].plugins = I.b.filter(
                      (t) =>
                        !!a ||
                        ("exam" === t.type
                          ? "edu_version" !== c
                          : ("homework" === t.type && e.isInHomeworkGrayList) ||
                            "workset" === t.type
                          ? "edu_base_version" === c ||
                            "edu_profession_version" === c
                          : "leave" !== t.type ||
                            !("edu_profession_version" !== c && !d))
                    )),
                    s || (t[n].plugins = []))
                  : (t[n].plugins = t[n].plugins.filter((t) =>
                      "homework" === t.type
                        ? e.isInHomeworkGrayList && t.selected
                        : t.selected
                    )),
                this.fetchAppoint(),
                this.fetchCertificate(),
                this.checkEduServiceEntry(t, "workset") && this.fetchWorkset(),
                this.fetchMomentsNotice(),
                this.fetchReward(),
                this.fetchReviewToReadNum(),
                this.fetchMomentsName());
            },
            handleExtraData() {
              var e = [];
              this.fetchShowcaseContainerData(),
                this.fetchOrderPrompt(),
                e.push(this.fetchChannelAgentInfo()),
                e.push(this.fetchBlindBoxInfo()),
                e.push(this.fetchChannelIndentorInfo()),
                this.fetchBenefitRemind(),
                this.data.supportAdvancedBenefit &&
                  (this.getInactiveCard(), this.getNewCardTag()),
                (this.ctx.data.title =
                  this.data.globalConfig.title || "会员中心");
              var t = this.data.plugins.filter((e) => "fxCenter" === e.type)[0],
                a = this.data.plugins.filter(
                  (e) => "grouponFounder" === e.type
                )[0];
              if (t)
                for (
                  var s = this.data.user.salesman.settingName || "分销员",
                    i = 0;
                  i < this.data.plugins.length;
                  i += 1
                )
                  "fxCenter" === this.data.plugins[i].type &&
                    this.setYZData({
                      ["plugins[" + i + "].title"]: s + "中心",
                    });
              if (a)
                for (
                  var n = this.data.user.grouponFounder.groupName || "团长中心",
                    r = 0;
                  r < this.data.plugins.length;
                  r += 1
                )
                  "grouponFounder" === this.data.plugins[r].type &&
                    this.setYZData({ ["plugins[" + r + "].title"]: n });
              this.data.plugins.filter((e) => "cart" === e.type)[0] &&
                this.fetchCartNum(),
                this.data.plugins.filter((e) => "gifts" === e.type)[0] &&
                  this.fetchPresentCount(),
                this.data.plugins.filter(
                  (e) => "merchantsCall" === e.type
                )[0] && e.push(this.fetchContact()),
                this.handleColudPlugins(e);
            },
            handleColudPlugins(e) {
              Promise.all(e).then(() => {
                var { plugins: e } = this.data;
                this.ctx.cloud
                  .invoke("beforeToolsRender", {
                    userCenterTools: JSON.parse(JSON.stringify(e || [])),
                  })
                  .then((t) => {
                    if (t) {
                      var { newList: a, addKeyList: i } = Object(
                          w.mergeMulPluginList
                        )(
                          e,
                          t.map((e) => {
                            var { userCenterTools: t } = e;
                            return t;
                          }),
                          { key: "type" }
                        ),
                        n = i.reduce((e, t) => ((e[t] = !0), e), {});
                      this.setYZData({
                        plugins: a
                          .filter((e) => !n[e.type] || !D.c[e.type])
                          .map((e) =>
                            Object(s.a)({}, e, { isCloud: !!n[e.type] })
                          ),
                      });
                    }
                  });
              });
            },
            fetchDrugList() {
              var e = {
                method: "GET",
                data: {
                  kdtId: this.getKdtId(),
                  headKdtId: _.getHQKdtId(),
                  orderTags: "IS_PRESCRIPTION_DRUG_ORDER",
                  states: "CONFIRM",
                },
              };
              _.request(
                Object(s.a)({ path: "/wscuser/membercenter/drugList.json" }, e)
              )
                .then((e) => {
                  var t;
                  this.setYZData({
                    pluginValues: Object(s.a)({}, this.data.pluginValues, {
                      drugList:
                        (null == e || null == (t = e.totalMap)
                          ? void 0
                          : t.CONFIRM) || 0,
                    }),
                  });
                })
                .catch((e) => {});
            },
            handleYunSkdData() {
              var { userAgreePrivacy: e, cloudDataStatus: t } = this.data;
              if (3 !== t) {
                this.setYZData({ cloudDataStatus: e ? 2 : 1 });
                var a = (t) => (e ? t : null),
                  { stats: i, orders: n, statsNames: r } = this.data,
                  { balance: o, cards: d, coupons: c, points: h } = i,
                  {
                    balance: u,
                    points: p,
                    cards: m,
                    coupons: g,
                    change: f,
                  } = r,
                  { evaluate: v, feedback: b, paid: w, sent: x, toPay: y } = n,
                  C = null !== a(o) ? Object(l.a)(+a(o)).toCent() : a(o),
                  I = Object(s.a)(
                    {
                      balance: C,
                      points: a(h),
                      benefitcard: a(d),
                      coupon: a(c),
                      balanceDesc: u,
                      pointsDesc: p,
                      benefitcardDesc: m,
                      couponDesc: g,
                      changeDesc: f,
                    },
                    this.data.statsShowInfo
                  ),
                  k = {
                    waitPayCount: a(y),
                    shippedCount: a(x),
                    paidCount: a(w),
                    feedbackCount: a(b),
                    toEvaluateCount: a(v),
                  };
                (this.ctx.data.cloudData = {
                  assetsInfo: this.data.stats,
                  assetsInfoV2: I,
                  orderInfo: this.data.orders,
                  orderInfoV2: k,
                }),
                  this.ctx.cloud.emit(
                    "onPageInfoReady",
                    Object(s.a)({}, this.data.stats, this.data.orders)
                  );
              }
            },
            handleFirstScreenData(e) {
              var t = {},
                {
                  member: a,
                  balance: s,
                  orders: i,
                  level: n,
                  pointsName: r = "积分",
                } = e,
                {
                  stats: { points: o, cards: d, coupons: c },
                  status: l = {},
                } = a;
              if (
                ((t["stats.points"] = o || 0),
                (t["stats.cards"] = d || 0),
                (t["stats.coupons"] = c || 0),
                s && s.length)
              ) {
                var { denomination: h = 0, showAmount: u = !0 } = s[0];
                (t["stats.balance"] = (Number(h) / 100).toFixed(2)),
                  (t["stats.showBalance"] = u);
              }
              if (
                ((t.orders = i),
                (t["statsNames.points"] = r),
                this.getKdtId() !== I.d)
              ) {
                var p = n.levelName,
                  { payBenefitDesc: m, freeBenefitDesc: g } = n;
                2 !== this.data.memberType &&
                  (m && (p = "立即开通"), g && (p = "立即注册")),
                  (t.levelGrowth = n || {}),
                  (t.memberLevelGradeText = p),
                  (t.isMember = !m && !g);
              }
              if (_.checkSpecialShopDZ()) {
                var { pointError: f } = l;
                f &&
                  ((t["stats.points"] = "-"),
                  wx.showToast({
                    title:
                      (null == f ? void 0 : f.msg) ||
                      (null == f ? void 0 : f.message) ||
                      "获取用户积分失败",
                    icon: "none",
                    duration: 2500,
                  }));
              }
              return t;
            },
            handleStatsInfo(e, t) {
              var a = e;
              e.includes("balance") &&
                void 0 !== t &&
                !t &&
                (a = a.filter((e) => "balance" !== e));
              var s = {
                showPoints: a.includes("points"),
                showCoupon: a.includes("coupons"),
                showBenefitcard: a.includes("cards"),
                showBalance: a.includes("balance"),
                showChange: a.includes("change"),
              };
              return { statsList: a, statsShowInfo: s };
            },
            fetchAppoint() {
              _.request({
                path: "/wscuser/membercenter/appointments.json",
                method: "get",
                data: { kdt_id: this.getKdtId() },
              })
                .then((e) => {
                  this.setYZData({ appointments: e });
                })
                .catch((e) => {
                  k.a.end({
                    name: "个人中心渲染",
                    type: "error",
                    detail: { err: e },
                    extra: { bizScene: "fetchAppoint" },
                  });
                });
            },
            fetchCertificate() {
              _.request({
                path: "/wscuser/membercenter/findCertificate.json",
                method: "get",
                data: { kdtId: this.getKdtId(), findType: 2, status: 1 },
              })
                .then((e) => {
                  e && e.total > 0 && this.setYZData({ noViewNum: e.total });
                })
                .catch(() => {});
            },
            fetchWorkset() {
              _.request({
                path: "/wscuser/membercenter/findReadStatusNum.json",
                method: "get",
              })
                .then((e) => {
                  this.setYZData({ isReadWorkset: !e.isReadNum });
                })
                .catch(() => {
                  this.setYZData({ isReadWorkset: !1 });
                });
            },
            fetchMomentsNotice() {
              var e = this;
              _.request({
                path: "/wscuser/membercenter/momentsFindUserBadge.json",
                method: "get",
                data: { kdtId: this.getKdtId() },
              })
                .then(function (t) {
                  void 0 === t && (t = {}),
                    e.setYZData({ canShowMomentsFlag: t.value });
                })
                .catch(() => {});
            },
            fetchReward() {
              _.request({
                path: "/wscuser/membercenter/findReward.json",
                method: "get",
                data: { kdtId: this.getKdtId() },
              })
                .then((e) => {
                  e &&
                    e.waitRewardCount > 0 &&
                    this.setYZData({ waitRewardCount: e.waitRewardCount });
                })
                .catch(() => {});
            },
            fetchReviewToReadNum() {
              _.request({
                path: "/wscuser/membercenter/findReviewToReadNum.json",
                method: "get",
                data: { kdtId: this.getKdtId() },
              })
                .then((e) => {
                  e &&
                    e.value > 0 &&
                    this.setYZData({ reviewToReadNum: e.value });
                })
                .catch(() => {});
            },
            fetchMomentsName() {
              _.request({
                path: "/wscuser/membercenter/momentsgetCeresConfig.json",
                method: "get",
              })
                .then((e) => {
                  var { moduleName: t = "家校圈" } = e || {};
                  this.setYZData({ momentsName: t });
                })
                .catch(() => {});
            },
            linkToReward() {
              wx.navigateTo({
                url:
                  "/" +
                  S +
                  "/edu/webview/index?targetUrl=" +
                  encodeURIComponent(
                    "https://h5.youzan.com/wscvis/edu/reward/list/active?kdtId=" +
                      this.getKdtId()
                  ),
              });
            },
            fetchOrderPayPrompt() {
              return new Promise((e) => {
                _.request({
                  path: "/wscuser/membercenter/promptOrderPay.json",
                  method: "get",
                  data: { kdtId: this.getKdtId() },
                })
                  .then((t) => {
                    e(t);
                  })
                  .catch(() => {
                    e({});
                  });
              });
            },
            fetchOrderEvaluatePrompt() {
              return new Promise((e) => {
                _.request({
                  path: "/wscuser/membercenter/promptOrderEvaluate.json",
                  method: "get",
                  data: { kdtId: this.getKdtId() },
                })
                  .then((t) => {
                    e(t);
                  })
                  .catch(() => {
                    e({});
                  });
              });
            },
            fetchOrderPrompt() {
              var e = [this.fetchOrderPayPrompt()];
              this.data.isPureWscSingleStore &&
                e.push(this.fetchOrderEvaluatePrompt()),
                Promise.all(e).then((e) => {
                  var [t, a] = e;
                  this.setYZData({
                    promptOrderPay: t,
                    promptOrderEvaluation: a,
                  });
                });
            },
            fetchCartNum() {
              _.request({
                path: "/wscuser/membercenter/cart.json",
                method: "get",
                data: { kdt_id: this.getKdtId(!0) },
              })
                .then((e) => {
                  var { value: t } = e;
                  this.setYZData({ "pluginValues.cart": t });
                })
                .catch(() => {});
            },
            fetchPresentCount() {
              _.request({
                path: "/wscuser/membercenter/present.json",
                method: "get",
                data: { kdt_id: this.getKdtId() },
              })
                .then((e) => {
                  var { value: t } = e;
                  t && this.setYZData({ "pluginValues.gifts": t });
                })
                .catch(() => {});
            },
            fetchContact() {
              return _.request({
                path: "/wscuser/membercenter/contact.json",
                method: "get",
                data: { kdt_id: this.getKdtId() },
              })
                .then((e) => {
                  var { afterSaleContact: t } = e;
                  if (t) {
                    var { mobileNumber: a, areaCode: s, phoneNumber: i } = t,
                      n = "";
                    i && s ? (n = s + "-" + i) : i ? (n = i) : a && (n = a),
                      this.setYZData({ servicePhoneNumber: n });
                  } else
                    this.setYZData({
                      plugins: this.data.plugins.filter(
                        (e) => "merchantsCall" !== e.type
                      ),
                    });
                })
                .catch(() => {});
            },
            hiddenInfoCompleted(e) {
              this.setYZData({ hiddenInfoCompleted: e });
            },
            hideDrugRequirements() {
              var { plugins: e = [] } = this.data;
              this.setYZData({
                plugins: e.filter((e) => "drugList" !== e.type),
              });
            },
            handleNavigationBarConfig(e) {
              e && (this.ctx.data.navigationBarConfigData = e);
            },
          },
        });
      },
    }
  )
);
