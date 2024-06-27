"use strict";
var r = require("~/r");
r(
  "aQSB",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    aQSB: function (t, e, s) {
      s.r(e);
      var a = s("Fcif"),
        i = s("YeA1"),
        o = s("NHEX"),
        n = s.n(o),
        r = s("9ZMt"),
        l = s("Tewj"),
        d = s("US/N"),
        h = s("Shdd"),
        c = 0,
        u = 1,
        f = {
          GoodsDetail: "goods",
          FAQ: "faq",
          Sales: "sales",
          Goods: "goods",
          Auction: "auction",
        },
        p = (t) => {
          var { alias: e, type: s, kdtId: a } = t;
          return {
            path: "GoodsFast",
            query: { alias: e, detail_type: s, kdt_id: a },
          };
        },
        g = {
          props: { placeholder: String },
          data() {
            var {
              shopConfig: t = {},
              shopBaseInfo: e = {},
              goodsBaseInfo: s = {},
              serverStatus: a = {},
              staticConfig: i = {},
              env: o = {},
              umpActivityData: { currentActivity: n = {} } = {},
            } = r.default.getGlobal("GOODS_DATA") || {};
            return {
              shopConfig: t,
              staticConfig: i,
              shopBaseInfo: e,
              goodsBaseInfo: s,
              serverStatus: a,
              currentActivity: n,
              env: o,
              pid: "goods-detail" + Math.random(),
              TAB_TYPE: f,
              showTabs: !1,
              tabs: [],
              eTabs: null,
              activeType: "",
              featureComponents: [],
              extraData: {},
              showBuyRecordListStyle: !1,
              eShowDesc: !0,
              showDetailTitleH5: !1,
              cloudShowDetailInfo: !0,
              isStartRender: !1,
            };
          },
          logicData: () => ({
            offlineId: 0,
            buyerId: 0,
            themeColors: {},
            shopMetaInfo: {},
            goodsPriceInfo: {},
          }),
          computed: {
            isShowDetailInfo() {
              return (
                this.activeType === f.GoodsDetail &&
                this.cloudShowDetailInfo &&
                this.eShowDesc
              );
            },
            showDetailTitle() {
              return this.featureComponents.length;
            },
            finalTabs() {
              return this.eTabs || this.tabs;
            },
            isNormalTplStyle() {
              var { itemDetailTplStyle: t } = this.goodsBaseInfo;
              return !(1 === t && "web" === r.default.getEnv());
            },
            simpleTabs() {
              var { alias: t } = this.goodsBaseInfo,
                { kdtId: e } = this.shopBaseInfo,
                s = [
                  {
                    type: f.Goods,
                    desc: this.isNormalTplStyle ? "商品详情" : "查看商品详情",
                    link: p({ alias: t, kdtId: e, type: f.Goods }),
                  },
                ];
              return (
                this.showBuyRecordListStyle &&
                  s.push({
                    type: f.Sales,
                    desc: "成交记录",
                    link: p({ alias: t, kdtId: e, type: f.Sales }),
                  }),
                s
              );
            },
            detailTabs() {},
            extra() {
              var t,
                { alias: e, title: s, pictures: a } = this.goodsBaseInfo,
                { price: i, oldPrice: o } = this.goodsPriceInfo,
                n = {
                  kdt_id: this.shopBaseInfo.kdtId,
                  source: "goods",
                  endpoint: "wx",
                  detail: JSON.stringify({
                    alias: e,
                    name: s,
                    price: i || "",
                    originPrice: o || "",
                    imgs: (a || []).map((t) => t.url).slice(0, 2),
                  }),
                };
              return (
                this.offlineId && (n.site_id = this.offlineId),
                {
                  appId: null == (t = getApp()) ? void 0 : t.getAppId(),
                  kdtId: this.shopBaseInfo.kdtId,
                  businessId: "",
                  offlineId: this.offlineId,
                  buyerId: this.buyerId,
                  hqKdtId: this.shopBaseInfo.rootKdtId,
                  sourceParam: JSON.stringify(n),
                }
              );
            },
          },
          watch: {
            activeType(t) {
              (this.ctx.data.activeType = t),
                t === f.GoodsDetail &&
                  this.ctx.cloud
                    .invoke("beforeDetailInfoRender")
                    .then(() => {
                      this.cloudShowDetailInfo = !0;
                    })
                    .catch(() => {
                      this.cloudShowDetailInfo = !1;
                    });
            },
          },
          created() {
            var t = this;
            this.getTabs(),
              this.initExtradata(),
              this.initGoodsDetail(),
              Object(i.b)(this, [
                "themeColors",
                "shopMetaInfo",
                "staticConfig",
                "serverStatus",
                "currentActivity",
                "offlineId",
                "buyerId",
              ]),
              Object(i.b)(this, { shopConfig: () => this.getTabs() }),
              Object(i.b)(this, { goodsPriceInfo: () => this.initExtradata() }),
              Object(i.b)(this, {
                distribution: () => this.handleFetchLocation(),
              }),
              Object(i.c)(this, ["goodsBaseInfo", "shopBaseInfo", "env"], {
                callback: () => {
                  this.setPriceIntro(),
                    this.setHaitaoDesc(),
                    this.initExtradata(),
                    this.initGoodsDetail();
                },
              }),
              Object(i.d)(this, {
                goodsSetupReady: () => {
                  this.getTabs();
                },
                "components:change": function (e) {
                  var s;
                  void 0 === e && (e = []),
                    (t.showDetailTitleH5 =
                      (null == (s = e) ? void 0 : s.length) > 0);
                },
              }),
              Object(i.e)(this, {
                getNavItemTop: Object(h.b)(
                  this,
                  "#js-nav-detail",
                  "goodsDetailBlock"
                ),
                hideTabs: () => (
                  this.showTabs && ((this.showTabs = !1), (this.eTabs = null)),
                  !1
                ),
                setTabs: function (e) {
                  return (
                    void 0 === e && (e = []),
                    (t.eTabs = e),
                    (t.showTabs = !0),
                    e
                  );
                },
                setActiveTab: (t) => {
                  var e = -1;
                  this.finalTabs.forEach((s, a) => {
                    var { type: i } = s;
                    i === t && (e = a);
                  }),
                    -1 !== e && this.handleTabChange({ index: e });
                },
                setShowDesc: (t) => {
                  this.eShowDesc = !!t;
                },
              });
            var e = setTimeout(() => {
              !this.isStartRender && (this.isStartRender = !0), clearTimeout(e);
            }, 5e3);
            l.default.once(
              "onPageScroll",
              () => {
                (this.isStartRender = !0), e && clearTimeout(e);
              },
              this
            );
          },
          methods: {
            setPriceIntro() {
              this.ctx.cloud.emit("onPriceIntroDataChange", {
                shopName: this.shopBaseInfo.name,
                goodsPriceIntro: this.staticConfig.goodsPriceIntro,
              });
            },
            setHaitaoDesc() {
              this.ctx.cloud.emit(
                "onHaitaoDescChange",
                Object(a.a)({}, this.staticConfig.haitaoDesc, {
                  isHaitao: !!this.goodsBaseInfo.isHaitao,
                })
              );
            },
            handleFetchLocation() {
              var { kdtId: t } = this.shopBaseInfo;
              this.ctx.lambdas.getUserInfo({ kdtId: t }).then((t) => {
                var e, a, i;
                null != t &&
                  null != (e = t.state) &&
                  e.protocol &&
                  null != (a = this.ctx.data) &&
                  null != (i = a.distribution) &&
                  i.supportSelfFetch &&
                  s
                    .e("packages/async-main/chunk")
                    .then(s.bind(null, "7y9c"))
                    .then((t) => {
                      var { registerLocation: e } = t;
                      e();
                    });
              });
            },
            getTabs() {
              var t = [{ type: f.GoodsDetail, desc: "商品详情" }];
              this.getBuyRecordListStyle(),
                (this.tabs = t),
                (this.ctx.data.detailTabs = t),
                (this.activeType = t[0].type),
                (this.showTabs = t.length > 1);
            },
            handleTabChange(t) {
              var e = this.finalTabs[t.index] || {};
              (this.activeType = e.type),
                this.ctx.process.invoke(
                  "detailTabClick",
                  Object(a.a)({}, e, { index: t.index })
                );
            },
            getBuyRecordListStyle() {
              var { showBuyRecord: t, goodsDetailBuyRecord: e = null } =
                  this.shopConfig,
                s = t ? [c, u] : [];
              if (e)
                try {
                  s = JSON.parse(e) || s;
                } catch (t) {}
              return (
                (this.showBuyRecordListStyle = s.indexOf(c) > -1),
                this.showBuyRecordListStyle
              );
            },
            initExtradata() {
              if (this.goodsBaseInfo && this.goodsPriceInfo) {
                var {
                    pictures: t = [],
                    alias: e,
                    title: s,
                  } = this.goodsBaseInfo,
                  { price: a } = this.goodsPriceInfo,
                  i = {
                    name: s,
                    alias: e,
                    price: a,
                    imgs: (t || []).map((t) => t.url).slice(0, 3),
                  };
                this.ctx.data.extraData = i;
              }
            },
            fetchComponentsList(t) {
              var { goodsBaseInfo: e, platform: s, env: a } = t,
                i = r.default.getGlobal("GOODS_BIZ_COMPONENTS");
              if (i instanceof Promise)
                return i.then(
                  (t) => (r.default.setGlobal("GOODS_BIZ_COMPONENTS", null), t)
                );
              var o = {
                alias: e.alias,
                isFastBuy: n()(e, "fastbuyFeature.isFastBuy", void 0),
                platform: s,
                danger: Number(a.isDangerous),
                bizName: "itemDetail",
                queryKeys: "alias,platform",
                stage: 100,
                teeEnv: r.default.getEnv(),
              };
              return Object(d.requestUseCdn)({
                path: "/wscdeco/biz-component/list.json",
                data: o,
                withCredentials: !0,
              });
            },
            initGoodsDetail() {
              var {
                goodsBaseInfo: t,
                platform: e,
                env: s,
                shopBaseInfo: a,
              } = this;
              a.kdtId &&
                t.alias &&
                void 0 !== s.platform &&
                this.fetchComponentsList({
                  goodsBaseInfo: t,
                  platform: e,
                  env: s,
                })
                  .then((e) => {
                    var { components: s = [] } = e;
                    if (s.length > 0) {
                      var a,
                        i = s.map(
                          (e) => (
                            (e.key =
                              String(Math.random()).slice(0, 6) + "-" + e.type),
                            (e.risk_type = 1),
                            (e.risk_alias = t.alias),
                            e
                          )
                        );
                      (getApp().globalData.featurePageConfig = {
                        alias: t.alias,
                        componentsFormatConfig: {
                          logo: this.shopBaseInfo.logo,
                          soldOutGoodsFlag:
                            null == (a = this.shopConfig)
                              ? void 0
                              : a.soldOutGoodsFlag,
                        },
                        shopMetaInfo: this.shopMetaInfo,
                        themeColors: this.themeColors,
                      }),
                        (this.ctx.data.featureAlias = t.alias),
                        (this.ctx.data.featureComponents = i),
                        (this.featureComponents = i);
                    }
                  })
                  .catch((t) => {});
            },
            onCellClick(t) {
              var { path: e, query: s } = t.link;
              this.ctx.dmc.navigate(e, s);
            },
            onShowcaseBuy(t) {
              var { detail: e } = t,
                { alias: s, id: i } = e;
              this.ctx.event.emit(
                "featureSku:show",
                Object(a.a)({}, e, {
                  alias: s,
                  goodsId: i,
                  containerStyle:
                    "padding-bottom: " + r.default.style.useTpx(40),
                })
              );
            },
          },
          ud: !0,
        };
      e.default = r.default.component(g);
    },
  })
);
