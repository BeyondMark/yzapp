"use strict";
var r = require("~/r");
r(
  "Pl47",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "+AjT": function (e, t, s) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          s("bb6g").__exportStar(s("DypG"), t);
      },
      DypG: function (e, t, s) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.mergeMulPluginList = void 0);
        var a = s("bb6g");
        t.mergeMulPluginList = function (e, t, s) {
          var i = s.key,
            n = new Map(),
            o = [],
            r = [],
            h = e.reduce(function (e, t) {
              return (e[t[i]] = !0), e;
            }, {});
          t.forEach(function (e) {
            var t = a.__assign({}, h);
            e.forEach(function (e, s) {
              var r = e[i];
              n.has(e) ||
                (h[r]
                  ? (t[r] = !1)
                  : (n.set(e, !0),
                    o.push(a.__assign(a.__assign({}, e), { index: s }))));
            }),
              r.push.apply(
                r,
                Object.keys(t).filter(function (e) {
                  return t[e];
                })
              );
          });
          var c = r.reduce(function (e, t) {
              return (e[t] = !0), e;
            }, {}),
            l = e.filter(function (e) {
              var t = e[i];
              return !c[t];
            }),
            u = {};
          return (
            o.forEach(function (e) {
              var t = e.index,
                s = a.__rest(e, ["index"]);
              u[s[i]] || ((u[s[i]] = !0), l.splice(t, 0, s));
            }),
            {
              newList: l,
              delKeyList: r,
              addKeyList: o.map(function (e) {
                return e[i];
              }),
            }
          );
        };
      },
      IORD: function (e, t, s) {
        var a = s("9ZMt"),
          i = s("HbRL"),
          n = s("MLLI"),
          o = s("0hwI");
        t.a = () =>
          new Promise((e, t) => {
            try {
              !(function () {
                var { SDKVersion: e } = Object(n.b)();
                return (
                  Object(i.a)(e, "3.2.5") >= 0 &&
                  !!a.default.$native.showShareImageMenu
                );
              })()
                ? e(!1)
                : o.a
                    .get({
                      url: "/wscshop/showcase/share/useWxImageShare.json",
                      data: s,
                    })
                    .then((t) => {
                      e(t);
                    })
                    .catch(() => {
                      e(!1);
                    });
            } catch (e) {
              t(e);
            }
            var s;
          });
      },
      Pl47: function (e, t, s) {
        s.r(t);
        var a = s("eijD"),
          i = s("+I+c"),
          n = s("Fcif"),
          o = s("9ZMt"),
          r = s("YeA1"),
          h = s("US/N"),
          c = s("Y28S"),
          l = s("5kn2"),
          u = s("bPmV"),
          d = s("w2Y9"),
          m = s.n(d),
          p = s("AGZf"),
          g = s("+AjT"),
          f = s("Nl8I"),
          S = s("Dj8g"),
          b = s("asvp"),
          v = s("IORD"),
          P = ["invokePage"],
          I = ["invokePage"],
          y = o.default.getEnv(),
          x = Object(S.d)(),
          k = [
            { name: "推广图文", type: "promote" },
            { name: "生成海报", type: "poster" },
          ],
          O = {
            props: {
              customIcon: Boolean,
              iconStyle: { type: String, default: "" },
              cubeIconData: {
                type: Object,
                default: () => ({ goaway: void 0, bottom: 200 }),
              },
              sourceType: Number,
              guideBindSourceType: { type: Number, default: 14 },
              scenes: String,
              getShareOpportunity: String,
              needBindRelation: { type: Boolean, default: !0 },
              showGoodsDetail: { type: Boolean, default: !0 },
              popCustomStyle: { type: String, default: "" },
              isShareStyle: { type: Boolean, default: !1 },
              isGuideNeedPkgShareUrl: { type: Boolean, default: !1 },
              needSetShare: { type: Boolean, default: !1 },
              shareInfo: { type: Object, default: () => ({}) },
              goodsInfo: { type: Object, default: () => ({}) },
              customOptionListConfig: { type: Object, default: () => ({}) },
              kdtId: [Number, String],
              offlineId: [Number, String],
            },
            data() {
              var e,
                t,
                s,
                a,
                i,
                n = !(
                  null == (e = this.ctx.data.cloudDesignConfig) ||
                  !e.replacedSlots.includes("salesman-share-popup")
                ),
                o = !(
                  null == (t = this.ctx.data.cloudDesignConfig) ||
                  !t.replacedSlots.includes("salesman-share-popup-footer")
                ),
                r = !(
                  null == (s = this.ctx.data.cloudDesignConfig) ||
                  !s.replacedSlots.includes("salesman-share-popup-tabs")
                ),
                h = !(
                  null == (a = this.ctx.data.cloudDesignConfig) ||
                  !a.replacedSlots.includes("salesman-share-popup-header")
                ),
                c = !(
                  null == (i = this.ctx.data.cloudDesignConfig) ||
                  !i.replacedSlots.includes(
                    "salesman-share-popup-custom-tab-content"
                  )
                ),
                u = String(Math.random());
              return (
                (this.ctx.instance[u] = new l.c({})),
                {
                  shareData: {},
                  shopRights: {},
                  mainFrameVisible: !1,
                  copyText: "",
                  smartTextData: {},
                  shortPromoteUrl: "",
                  shortLinkPromoteUrl: "",
                  shortLinkCopyText: "",
                  shareMoney: 0,
                  hasGuideMaterial: !1,
                  shareMoneyInfo: {
                    shareMoneyRange: [],
                    maxCommissionStr: "",
                    commissionRangeStr: "",
                  },
                  salesmanPopupTabs: k,
                  cloudShareMoneyInfo: {},
                  sharePopupIsCloudSlot: n,
                  sharePopupFooterIsCloudSlot: o,
                  sharePopupTabsIsCloudSlot: r,
                  sharePopupHeaderIsCloudSlot: h,
                  sharePopupCustomTabContentIsCloudSlot: c,
                  instanceId: u,
                  curPageRoute: "",
                  activeTab: "",
                  isWxShareImg: !1,
                  hasWxshareRes: !1,
                  goodsPosterInfo: void 0,
                  hasAuth: !1,
                  dataParams: {},
                  sceneParams: {},
                }
              );
            },
            computed: {
              instance() {
                return this.ctx.instance[this.instanceId];
              },
              copyLinkText() {
                var { title: e = "" } = this.shareInfo || {};
                return e + " " + this.copyText;
              },
              earnIconShow() {
                var e = o.default.getEnv();
                return (
                  ("web" === e || "qq" === e || "weapp" === e) &&
                  !this.cubeIconData.goaway &&
                  l.c.getCubeShow(this.shareData)
                );
              },
            },
            watch: {
              shareInfo(e) {
                if ("goods" === this.scenes) {
                  var t = e.path || e.url;
                  (t = m.a.remove(t, "sid")),
                    (t = m.a.remove(t, "isWeapp")),
                    (t = m.a.remove(t, "hide_buy_btn")),
                    this.instance.batchUpdate({
                      shareInfo: Object(n.a)({}, e, { url: t }),
                      query: Object(n.a)({}, this.instance.query, {
                        alias: this.goodsInfo.alias,
                      }),
                    });
                }
                if (!this.isShareStyle && "goods" === this.scenes && e.path) {
                  var s = /^\//,
                    { path: a } = e,
                    i = s.test(a) ? a.replace(s, "") : a;
                  this.instance.update("path", i);
                }
              },
              kdtId(e) {
                this.instance.update("kdtId", e),
                  this.instance.rootKdtId ||
                    this.instance.update("rootKdtId", e);
              },
              goodsInfo(e, t) {
                var s = null == t ? void 0 : t.alias;
                s &&
                  (null == e ? void 0 : e.alias) !== s &&
                  this.onGoodsInfoChange(),
                  this.setCloudSalesmanPromoteGoodsInfo(e),
                  this.instance.update("goodsInfo", e);
              },
            },
            created() {
              this.initSalesmanSharePopup(),
                this.instance.batchUpdate({
                  nativeAjax: h.default,
                  nativeAjaxUseCdn: h.requestUseCdn,
                  nativeNavigate: o.default.navigate,
                  nativeLogger: b.a,
                  runEnv: x,
                  buildEnv: y,
                });
            },
            mounted() {
              this.initShopRights();
              var { fromSeller: e, sl: t, sls: s } = this.$getPageQuery() || {};
              (this.curPageRoute = this.$getPageRoute()),
                this.instance.batchUpdate({
                  guideBindSourceType: this.guideBindSourceType,
                  fromSeller: e || t || s,
                  scenes: this.scenes,
                  path: this.$getPageRoute(),
                }),
                void 0 !== this.sourceType &&
                  this.instance.update("st", this.sourceType),
                this.needBindRelation && this.instance.bindRelation();
            },
            destroyed() {
              delete this.ctx.instance[this.instanceId],
                this.ctx.process.invoke("toggleSalesmanSharePopup", {
                  isShow: !1,
                });
            },
            methods: {
              handleUpdateAuth() {
                this.hasAuth = !0;
              },
              initShopRights() {
                1154 !== wx.getLaunchOptionsSync().scene &&
                  this.instance
                    .getShopRights()
                    .then((e) => (this.shopRights = e));
              },
              initSalesmanSharePopup() {
                var e,
                  t = this;
                Object(r.e)(this, {
                  setFeatureAlias: (e) => {
                    var { dataParams: t, sceneParams: s, invokePage: a } = e;
                    Object(f.g)(this, a) &&
                      ((this.dataParams = t), (this.sceneParams = s));
                  },
                  setUserInfo: (e) => {
                    var t,
                      { invokePage: s } = e,
                      a = Object(i.a)(e, P);
                    Object(f.g)(this, s) &&
                      (this.hasAuth =
                        null == a || null == (t = a.state)
                          ? void 0
                          : t.nicknameAndAvatar);
                  },
                  updateCloudData: (e) => {
                    var { invokePage: t } = e;
                    Object(f.g)(this, t) &&
                      this.setCloudSalesmanPromoteGoodsInfo(this.goodsInfo);
                  },
                  initSalesmanSharePageInfo: (e) => {
                    var { query: t, route: s, invokePage: a } = e;
                    Object(f.g)(this, a) &&
                      this.instance.batchUpdate({ path: s, query: t });
                  },
                  initSalesmanShareData: (e) => {
                    var { invokePage: t } = e;
                    return Object(f.g)(this, t)
                      ? this.instance
                          .getShareData()
                          .then(
                            (e) => (
                              (this.shareData = e),
                              this.tryEmitShareData(),
                              this.instance.setShareOption(
                                e,
                                this.needSetShare
                              ),
                              this.setCloudSalesmanIdentityInfo(e),
                              e
                            )
                          )
                      : this.shareData;
                  },
                  setSalesmanSharePopupShareInfo:
                    ((e = Object(a.a)(function* (e) {
                      var { invokePage: s } = e,
                        a = Object(i.a)(e, I);
                      if (t.shareData.seller && Object(f.g)(t, s)) {
                        var o = { title: "[分享]" + a.title };
                        if (a.path && t.kdtId) {
                          var r = yield t.beforeSalesmanShareInfoSet(
                            Object(n.a)({}, o, { url: a.path })
                          );
                          (o.path = Object(c.a)({
                            url: r.url || a.path,
                            kdtId: t.kdtId,
                            sl: t.shareData.seller,
                          })),
                            r.title && (o.title = r.title);
                        }
                        t.instance.setShareOption(
                          Object(n.a)({}, a, { url: o.path }),
                          t.needSetShare
                        ),
                          (a = Object(n.a)({}, a, o));
                      }
                      return a;
                    })),
                    function (t) {
                      return e.apply(this, arguments);
                    }),
                  setNativeYunExtension: (e) => {
                    var { fn: t, invokePage: s } = e;
                    Object(f.g)(this, s) &&
                      this.instance.update("nativeYunExtension", t);
                  },
                  toggleSalesmanSharePopup: (e) => {
                    var { isShow: t } = e;
                    t
                      ? this.handleSalesmanPopupShow("cloud-hook")
                      : this.closeMainFrame();
                  },
                });
              },
              setCloudSalesmanIdentityInfo(e) {
                var {
                  salesmanName: t,
                  share: s,
                  seller: a,
                  sl: i,
                  dsKdtId: n,
                  salesmanType: o,
                } = e;
                s &&
                  (this.ctx.data.salesmanIdentityInfo = {
                    name: t,
                    sl: a || i,
                    salesmanKdtId: n,
                    salesmanType: Object(f.e)(o),
                  });
              },
              setCloudSalesmanPromoteGoodsInfo(e) {
                var t = Object(f.d)(e);
                this.ctx.data.salesmanPromoteGoodsInfo = t;
              },
              handleTabChange(e) {
                this.activeTab = e;
              },
              closeMainFrame() {
                this.ctx.event.emit("salesman:share:popup:close"),
                  this.mainFrameVisible &&
                    ((this.mainFrameVisible = !1),
                    this.ctx.process.invoke("toggleSalesmanSharePopup", {
                      isShow: !1,
                    }));
              },
              showPosterPop(e) {
                this.$refs.poster_pop.showPosterImg(e);
              },
              showShareMask() {},
              openAssistant() {
                this.$refs.assistant_pop.handleCheck(this.instance);
              },
              showPromoteTip(e) {
                this.$refs.promote_tip.handleCheck(e);
              },
              tryEmitShareData() {
                this.kdtId &&
                  this.shareData.seller &&
                  (this.ctx.event.emit(
                    "salesman:share:popup:query",
                    Object(c.c)({
                      sl: this.shareData.seller,
                      kdtId: this.kdtId,
                    })
                  ),
                  this.hasWxshareRes ||
                    Object(v.a)({ kdtId: this.kdtId }).then((e) => {
                      (this.hasWxshareRes = !0), (this.isWxShareImg = e);
                    }),
                  this.goodsInfo.id &&
                    !this.goodsPosterInfo &&
                    this.updateGoodsPosterInfo());
              },
              onGoodsInfoChange() {
                this.updateGoodsPosterInfo();
              },
              updateGoodsPosterInfo() {
                this.kdtId &&
                  this.shareData.seller &&
                  this.instance.getGoodsPosterInfo
                    .call(this.instance)
                    .then((e) => {
                      this.goodsPosterInfo = e;
                    });
              },
              handleSalesmanPopupShow(e) {
                p.a.loading({ duration: 5e3 });
                var t = [
                    this.instance.checkIconIsRecruitEntry.bind(this.instance),
                    this.instance.subscribeMessage.bind(this.instance),
                    this.checkTaxSign.bind(this),
                    this.beforeSalesmanSharePopupDisplay.bind(this),
                  ],
                  s = [
                    this.getSmartText.bind(this),
                    this.batchFetchPopupContentInfos.bind(this),
                    this.batchFetchPopupFooterInfos.bind(this),
                    this.beforeSalesmanSharePopupContentRender.bind(this),
                    this.toggleMainFramePanel.bind(this),
                    this.checkNewBegin.bind(this),
                  ];
                "click" === e
                  ? Object(S.b)([...t, ...s])()
                  : "cloud-hook" === e && Object(S.b)(s)();
              },
              handleIconClick() {
                this.instance.handleLog(l.b.clickShare),
                  this.handleSalesmanPopupShow("click");
              },
              checkTaxSign(e) {
                this.$refs.tax_sign_pop.handleCheck(e, this.instance);
              },
              checkNewBegin(e) {
                this.$refs.new_begin_pop.handleCheck(e, this.instance);
              },
              getSmartText(e) {
                var { goodsInfo: t, shareData: s } = this;
                if (t.id && !s.isShoppingGuide) {
                  var a = this.instance.getSmartText({ goodsId: t.id });
                  return Promise.all([a, this.beforeGoodsSmartInfoGet()])
                    .then((t) => {
                      var [s, a] = t,
                        i = s;
                      a.promoteDesc && (i.promoteText = a.promoteDesc),
                        (i.cloudSalesPriceDesc = a.salesPriceDesc),
                        (this.smartTextData = i),
                        e();
                    })
                    .catch(e);
                }
                e();
              },
              batchFetchPopupContentInfos(e) {
                return Promise.all([
                  this.getCloudShareMoney(),
                  this.getShareMoney(),
                  this.checkHasGuideMaterial(),
                  this.getShortPromoteUrl(),
                  this.getShortLinkUrl(),
                ])
                  .then(e)
                  .catch(e);
              },
              batchFetchPopupFooterInfos(e) {
                return Promise.all([
                  this.getCopyText(),
                  this.getShortLinkText(),
                ])
                  .then(e)
                  .catch(e);
              },
              toggleMainFramePanel(e) {
                p.a.clear(),
                  (this.mainFrameVisible = !this.mainFrameVisible),
                  this.mainFrameVisible &&
                    this.ctx.event.emit("salesman:share:popup:show"),
                  e();
              },
              checkHasGuideMaterial() {
                var { shareData: e } = this;
                if (e.isShoppingGuide)
                  return this.instance
                    .checkHasGuideMaterial()
                    .then((e) => {
                      this.hasGuideMaterial = e;
                    })
                    .catch(() => {});
              },
              setProfit(e) {
                var {
                    profitRange: t,
                    commissionSendType: s,
                    commissionConfigDTO: a,
                    customPointsName: i,
                  } = e,
                  { maxCommissionStr: n, compatibleCommission: o } = Object(
                    u.a
                  )({
                    profitRange: t,
                    commissionSendType: s,
                    commissionConfigDTO: a,
                    customPointsName: i,
                  });
                this.shareMoneyInfo = {
                  shareMoneyRange: t,
                  maxCommissionStr: n,
                  commissionRangeStr: o,
                };
              },
              getShareMoney() {
                var e,
                  t,
                  s,
                  a,
                  i,
                  { shareData: n } = this,
                  { id: o, goodsSkuData: r = {} } = this.goodsInfo,
                  h =
                    (null == r || null == (e = r.goods) ? void 0 : e.list) ||
                    [],
                  c =
                    null == (t = this.goodsInfo.goodsActivityInfo)
                      ? void 0
                      : t.type,
                  { minPrice: l = 0, maxPrice: d = 0 } =
                    (null == (s = this.goodsInfo) ? void 0 : s.goodsPrice) ||
                    {};
                c &&
                  r &&
                  null != (a = r[c]) &&
                  a.list &&
                  (h = null == (i = r[c]) ? void 0 : i.list);
                var { profit: m, profitRange: p } = this.goodsInfo;
                if (p) this.setProfit(this.goodsInfo);
                else if (m) this.shareMoney = m;
                else if (o)
                  return n.isShoppingGuide
                    ? this.instance
                        .getShareMoney(o, h, { minPrice: l })
                        .then((e) => {
                          this.shareMoney = e / 100;
                        })
                        .catch(() => {
                          this.shareMoney = Object(u.c)(
                            this.goodsInfo,
                            this.shareData
                          );
                        })
                    : this.instance
                        .getShareMoneyRange(o, h, { minPrice: l, maxPrice: d })
                        .then((e) => {
                          this.setProfit(e);
                        })
                        .catch(() => {});
              },
              getShortPromoteUrl() {
                if (this.goodsInfo.id) {
                  var { smartTextData: e, offlineId: t } = this,
                    s = Object(f.f)(e, t),
                    a = this.isShareStyle
                      ? m.a.add(this.shareInfo.path, s)
                      : this.instance.getH5GoodsUrl(
                          this.goodsInfo,
                          this.shareData,
                          s,
                          "item_promote" !== this.scenes
                        );
                  return this.beforePromoteLinkGenerate(a)
                    .then((e) => this.instance.getShortUrl(e))
                    .then((e) => {
                      this.shortPromoteUrl = e;
                    })
                    .catch(() => {});
                }
              },
              getShortLinkUrl() {
                if (this.goodsInfo.id) {
                  var { smartTextData: e, offlineId: t } = this,
                    s = Object(f.f)(e, t),
                    a = this.instance.path;
                  return this.beforePromoteLinkGenerate(a)
                    .then(
                      (e) => (
                        this.instance.update("path", e),
                        this.instance.getShortLink(s)
                      )
                    )
                    .then((e) => {
                      (this.shortLinkPromoteUrl = e.miniProgramUrl),
                        this.instance.update("path", a);
                    })
                    .catch((e) => {
                      this.instance.update("path", a);
                    });
                }
              },
              getCopyText() {
                var {
                    smartTextData: { extra: e },
                  } = this,
                  t = { st: 2, share_cmpt: "copylink" };
                null != e && e.alg && (t.alg = e.alg);
                var s = m.a.add(this.instance.shareInfo.url, t);
                return this.beforePromoteLinkGenerate(s)
                  .then((e) => this.instance.getSlUrl(e))
                  .then((e) => {
                    this.copyText = e;
                  })
                  .catch(() => {});
              },
              getShortLinkText() {
                var e = this.instance.path;
                return this.beforePromoteLinkGenerate(e)
                  .then(
                    (e) => (
                      this.instance.update("path", e),
                      this.instance.getShortLink()
                    )
                  )
                  .then((t) => {
                    (this.shortLinkCopyText = t.miniProgramUrl),
                      this.instance.update("path", e);
                  })
                  .catch((t) => {
                    this.instance.update("path", e);
                  });
              },
              handleCustomEvent(e) {},
              beforeSalesmanShareInfoSet(e) {
                var t = this;
                return Object(a.a)(function* () {
                  var s = {};
                  if (Object(f.a)(t.curPageRoute))
                    try {
                      s =
                        (yield t.ctx.cloud.invoke(
                          "beforeSalesmanShareInfoSet",
                          {
                            bizScene: Object(f.b)(t.scenes),
                            title: e.title,
                            url: e.url,
                          }
                        )) || {};
                    } catch (e) {}
                  return s;
                })();
              },
              beforeSalesmanSharePopupDisplay(e) {
                var { goodsInfo: t, scenes: s } = this;
                if (Object(f.a)(this.curPageRoute))
                  try {
                    this.ctx.cloud
                      .invoke(
                        "beforeSalesmanSharePopupDisplay",
                        Object(n.a)({}, Object(f.c)(t, s))
                      )
                      .then(() => {
                        e();
                      });
                  } catch (e) {
                    p.a.clear();
                  }
                else e();
              },
              beforeGoodsSmartInfoGet() {
                var e = this;
                return Object(a.a)(function* () {
                  var { goodsInfo: t, scenes: s } = e;
                  if (Object(f.a)(e.curPageRoute))
                    try {
                      return e.ctx.cloud
                        .invoke(
                          "beforeGoodsSmartInfoGet",
                          Object(n.a)({}, Object(f.c)(t, s))
                        )
                        .then(function (e) {
                          return void 0 === e && (e = {}), e;
                        });
                    } catch (e) {
                      return {};
                    }
                  return {};
                })();
              },
              getCloudShareMoney() {
                var e = this;
                return Object(a.a)(function* () {
                  var { goodsInfo: t, scenes: s } = e;
                  if (Object(f.a)(e.curPageRoute))
                    try {
                      return e.ctx.cloud
                        .invoke(
                          "beforeShareMoneyGet",
                          Object(n.a)({}, Object(f.c)(t, s))
                        )
                        .then(function (t) {
                          void 0 === t && (t = {}), (e.cloudShareMoneyInfo = t);
                        });
                    } catch (e) {}
                  return {};
                })();
              },
              beforePromoteLinkGenerate(e) {
                var t = this;
                return Object(a.a)(function* () {
                  var { goodsInfo: s, scenes: a } = t;
                  if (Object(f.a)(t.curPageRoute))
                    try {
                      return t.ctx.cloud
                        .invoke(
                          "beforePromoteLinkGenerate",
                          Object(n.a)({}, Object(f.c)(s, a), { url: e })
                        )
                        .then((t) => {
                          var s = e;
                          return t && t.url && (s = t.url), Promise.resolve(s);
                        });
                    } catch (t) {
                      return Promise.resolve(e);
                    }
                  return e;
                })();
              },
              beforeSalesmanSharePopupContentRender(e) {
                var t = this,
                  { goodsInfo: s, scenes: a } = this;
                if (Object(f.a)(this.curPageRoute))
                  try {
                    return this.ctx.cloud
                      .invoke(
                        "beforeSalesmanSharePopupContentRender",
                        Object(n.a)({}, Object(f.c)(s, a), {
                          tabs: this.salesmanPopupTabs,
                        })
                      )
                      .then(function (s) {
                        void 0 === s && (s = []);
                        var a = s
                            .map((e) => (e && e.tabs ? e.tabs : null))
                            .filter(Boolean),
                          { newList: i } = Object(g.mergeMulPluginList)(
                            t.salesmanPopupTabs,
                            a,
                            { key: "type" }
                          );
                        (t.salesmanPopupTabs = i), e();
                      });
                  } catch (t) {
                    e();
                  }
                else e();
              },
            },
          };
        t.default = o.default.component(O);
      },
      cqgp: function (e, t, s) {
        var a = function () {
          return (a =
            Object.assign ||
            function (e) {
              for (var t, s = 1, a = arguments.length; s < a; s++)
                for (var i in (t = arguments[s]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        };
        t.a = function (e) {
          var t = e.profitRange,
            s = void 0 === t ? [] : t,
            i = e.commissionSendType,
            n = void 0 === i ? 0 : i,
            o = e.customPointsName,
            r = void 0 === o ? "积分" : o,
            h = e.commissionConfigDTO,
            c = s[0],
            l = s[1],
            u = (function (e) {
              var t = e.sendType,
                s = e.pointsName,
                a = e.config,
                i = e.maxCommission,
                n = e.minCommission,
                o = !!t;
              if (o && a) {
                var r = a.everyMoneyFen,
                  h = void 0 === r ? 0 : r,
                  c = a.points,
                  l = void 0 === c ? 0 : c;
                (i = parseInt(String(Math.floor(i / h) * l), 10)),
                  (n = parseInt(String(Math.floor(n / h) * l), 10));
              } else (i /= 100), (n /= 100);
              return {
                maxCommissionStr: o ? "" + i + s : "¥" + i,
                minCommissionStr: o ? "" + n + s : "¥" + n,
                maxCommissionAmount: i,
                minCommissionAmount: n,
              };
            })({
              sendType: n,
              pointsName: r,
              config: h,
              maxCommission: (l = l || c),
              minCommission: c,
            }),
            d = u.maxCommissionStr,
            m = u.minCommissionStr,
            p = u.maxCommissionAmount,
            g = p !== u.minCommissionAmount,
            f = {
              commissionText: "分享后最高赚" + d,
              commissionRangeText: "分享后预计可赚 " + m + " - " + d,
              commissionRange: s,
              maxCommission: p,
              unit: r,
              maxCommissionStr: p > 0 ? d : "",
              isMultiCommission: g,
            };
          return a(a({}, f), {
            compatibleCommissionText: g
              ? f.commissionRangeText
              : f.commissionText,
            compatibleCommission: g ? m + " - " + d : d,
          });
        };
      },
    }
  )
);
