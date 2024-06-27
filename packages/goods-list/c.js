"use strict";
(exports.ids = [23]),
  (exports.modules = {
    "24XY": function (e, t) {
      e.exports = {
        d: "cpsConfigKey;2;kdtId;2;shopMetaInfo;2;shopBaseInfo;2;shopBlockInfo;2;showTab;2;navBarTitle;2;canShowNavBar;2;listQuery;2;totalAlias;2;showShareFloating;2;filters;2;themeClass;2;goodsOpt;2;uuid;2;goods_detail;2;listType;2;searchText;2;slg;2;pageBgColor;2;themeTagObj;2;themeCSS;4;themeTag;4",
        e: "featureSku:show",
        w: "SearchResultTop;SearchResultBottom;EmptyBlock",
        wc: "FilterBar;DcGoods;ShopPopManager;ShopBlock;featureSku",
        p: "handleItemClick;showcaseHandleGoodsBuy;handleFilterChange;handleChangeLayoutType;handleItemImageLoaded",
        li: "beforePageCreate;beforePageMount;onPageShow;onPullDownRefresh;onReachBottom;onShareAppMessage;onPageScroll",
      };
    },
    "3RKa": function (e, t) {
      e.exports = {
        d: "cpsConfigKey;2;kdtId;2;shopMetaInfo;2;shopBaseInfo;2;shopBlockInfo;2;showTab;2;navBarTitle;2;canShowNavBar;2;listQuery;2;totalAlias;2;filters;2;themeClass;2;goodsOpt;2;uuid;2;pageBgColor;2;themeTagObj;2;stickyHeight;2;featureComponents;0;themeCSS;4;themeTag;4;themeColors;4",
        e: "featureSku:show",
        w: "GoodsListTagPageSetup",
        wc: "CpsRecommendGoods;SearchBar;FilterBar;ShareTab;DcGoods;ShopStatus;ShopTopBar;ShopBlock;featureSku;ShowcaseContainer",
        p: "handleItemClick;showcaseHandleGoodsBuy;handleFilterChange;handleItemImageLoaded;handleChangeLayoutType",
        li: "beforePageCreate;onPageShow;beforePageMount;onPullDownRefresh;onShareAppMessage;onReachBottom;onPageScroll",
      };
    },
    "4U5+": function (e, t, a) {
      a.d(t, "a", function () {
        return o;
      });
      var o = { tagTextColor: "#ee0a24", tagBgColor: "#ffe2e6" };
    },
    5681: function (e, t) {
      e.exports = {
        d: "showTab;6;navBarTitle;6;canShowNavBar;6;listQuery;6;totalAlias;6",
        w: "ShareTabMain",
        li: "",
      };
    },
    "73P+": function (e, t, a) {
      a.d(t, "b", function () {
        return l;
      }),
        a.d(t, "a", function () {
          return c;
        });
      var o = a("Fcif"),
        s = a("OK7I"),
        i = a.n(s),
        r = a("w2Y9"),
        n = a.n(r);
      i()(8);
      function l(e) {
        return e.map((e) => {
          var t = {
            alias: e.alias,
            type: "card",
            layout: "vertical",
            theme: "theme",
            corner: "circle",
            align: "left",
            imgOpt: { corner: "circle", src: e.imageUrl },
            priceOpt: { price: e.price, tagGap: 2 },
            useTagsSlot: !0,
          };
          return Object(o.a)({}, e, { card: t });
        });
      }
      function c(e) {
        var {
          list: t = [],
          curLength: a = 0,
          bannerOpt: s,
          recommendName: i,
        } = e;
        return t.map((e, t) => {
          var r = (function (e) {
              var {
                loggerSpm: t,
                componentIndex: a,
                index: o,
                pageRandomNumber: s,
              } = e;
              return t + "~recService." + (a + 1) + "~" + o + "~" + s;
            })(Object(o.a)({ index: a + t + 1 }, s)),
            { itemType: l, algs: c } = e,
            d = {
              item_id: e.id,
              item_type: l || "goods",
              banner_id: r,
              alg: c,
              g_kdt_id: e.kdtId,
              recommend_name: i,
            },
            h = n.a.add(e.url, { banner_id: r, alg: c });
          return Object(o.a)({}, e, {
            type: l,
            bannerId: r,
            isExtra: "goods" !== l,
            url: h,
            loggerParams: d,
            originPrice: e.origin,
          });
        });
      }
    },
    "9nSG": function (e, t) {
      e.exports = {
        d: "filters;6;themeClass;6;goodsOpt;6",
        w: "FilterBarMain",
        wc: "ThemeIcon",
        pi: "handleFilterChange;handleChangeLayoutType",
        li: "",
      };
    },
    BIHN: function (e, t, a) {
      var o = a("Fcif"),
        s = (a("uky+"), a("esrA")),
        i = "@wsc-shop/search-result-page-setup",
        r = "@wsc-tee-salesman/salesman-cube-block",
        n = "@wsc-tee-statcenter/goods-showcase-block",
        l = "@wsc-tee-decorate/feature-user-authorize-popup",
        c = Object(s.a)({
          a: {
            p: [
              {
                r: ["/packages/goods-list/search-result/index"],
                c: [
                  {
                    t: "c",
                    c: [
                      {
                        t: "m",
                        c: [{ moduleId: "b32-1", name: "SearchResultTop" }],
                      },
                      {
                        t: "m",
                        c: [{ moduleId: "b32-1", name: "EmptyBlock" }],
                      },
                      {
                        t: "m",
                        c: [
                          { moduleId: "b32-1", name: "SearchResultBottom" },
                          "b32-6",
                          "b32-7",
                          "b32-0",
                          "b32-9",
                          "b32-10",
                        ],
                      },
                      {
                        t: "m",
                        c: [{ moduleId: "b32-11", name: "ShareFloatingMain" }],
                      },
                    ],
                  },
                ],
                m: ["b32-2", "b32-3", "b32-4", "b32-5", "b32-8", "b32-12"],
              },
            ],
          },
          m: [
            [
              "b32-0",
              "@ext-tee-wsc-decorate/page-style",
              null,
              { stage: "pre" },
            ],
            [
              "b32-1",
              i,
              {
                w: {
                  FilterBar: ["b32-4", "FilterBarMain"],
                  DcGoods: ["b32-5", "DcGoodsMain"],
                  featureSku: ["b32-8", "Main"],
                },
              },
            ],
            [
              "b32-2",
              "@wsc-shop/share-tab",
              {
                d: {
                  showTab: "b32-1",
                  navBarTitle: "b32-1",
                  canShowNavBar: "b32-1",
                  listQuery: "b32-1",
                  totalAlias: "b32-1",
                },
              },
              { properties: { shareFrom: 4 } },
            ],
            ["b32-3", "@wsc-shop/search-bar", null],
            [
              "b32-4",
              "@wsc-shop/filter-bar",
              {
                d: { filters: "b32-1", themeClass: "b32-1" },
                p: {
                  handleFilterChange: [["b32-1"]],
                  handleChangeLayoutType: [["b32-1"]],
                },
              },
            ],
            [
              "b32-5",
              "@wsc-shop/dc-goods",
              {
                d: { goodsOpt: "b32-1", uuid: "b32-1" },
                p: {
                  handleItemClick: [["b32-1"]],
                  showcaseHandleGoodsBuy: [["b32-1"]],
                  handleChangeLayoutType: [["b32-1"]],
                },
              },
              { properties: { pageType: "SERACH_RANTA_CONFIG" } },
            ],
            [
              "b32-6",
              r,
              { d: { shopBaseInfo: "b32-1" } },
              { properties: { needBindRelation: !1, showGoodsDetail: !1 } },
            ],
            ["b32-7", n, null],
            [
              "b32-8",
              "@ext-tee-wsc-goods/biz-sku-manage",
              { e: { "sku:show": [["b32-1", "featureSku:show"]] } },
              { properties: { cloudExcluded: !0 } },
            ],
            ["b32-9", l, null],
            ["b32-10", "@wsc-tee-decorate/jump-link", null],
            ["b32-11", "@wsc-shop/share-floating", null],
            ["b32-12", "@wsc-tee-decorate/dc-goods-tee", null],
          ],
          e: [
            ["@ext-tee-wsc-decorate/page-style", a("8v1J")],
            [i, a("24XY"), { framework: "weapp" }],
            ["@wsc-shop/share-tab", a("5681"), { framework: "weapp" }],
            ["@wsc-shop/search-bar", a("yiu3"), { framework: "weapp" }],
            ["@wsc-shop/filter-bar", a("9nSG"), { framework: "weapp" }],
            ["@wsc-shop/dc-goods", a("GV+9"), { framework: "weapp" }],
            [r, a("beL+")],
            [n, a("jURq")],
            ["@ext-tee-wsc-goods/biz-sku-manage", a("O8mO")],
            [l, a("czXk")],
            ["@wsc-tee-decorate/jump-link", a("OgbJ")],
            ["@wsc-shop/share-floating", a("zNNd"), { framework: "weapp" }],
            ["@wsc-tee-decorate/dc-goods-tee", a("U8nN")],
          ],
          f: "weapp",
        }),
        d = a("9ZMt"),
        h = a("rLrQ"),
        p = a("DXKY"),
        g = a("VmHG"),
        u = a("hHpg"),
        m = a("vf+9"),
        f = a("HmQ/"),
        b = a("AqAW"),
        w = a("Mqpn"),
        y = a("cH+H"),
        O = a("TioH"),
        S = a("hTAu"),
        v = { type: !1 },
        T = a("R18q"),
        k = a("yUw6"),
        _ = a("QFAZ"),
        x = a("oNZJ"),
        I = a("jHjV"),
        C = getApp(),
        L = 1,
        P = 0,
        B = null,
        j = a("iMae"),
        A = a("d9dF"),
        G = a("N49k"),
        M = a("ORrb"),
        R = a("NV8i"),
        N = a("C7Yh"),
        D = a("ygrD"),
        E = a("qwv7"),
        F = a("/pw/"),
        U = a("dHkL"),
        H = {
          config: c,
          builtinBundle: {
            "@ext-tee-wsc-decorate/page-style": h.a,
            "@wsc-shop/search-result-page-setup": class {
              constructor(e) {
                var { ctx: t } = e;
                (this.store = Object(g.a)({
                  state: () => ({
                    page: 1,
                    themeClass: C.themeClass,
                    loading: !1,
                    needLoadMore: !1,
                    exhibitionTag: !1,
                    inputValue: "",
                    keyword: "",
                    type: "",
                    focused: !1,
                    isLimitSold: !1,
                    limitSoldNum: 0,
                    filters: [
                      { title: "综合", value: "" },
                      { title: "上新", value: "createdTime" },
                    ],
                    orderBy: "",
                    order: "",
                    isEmpty: !1,
                    hotSearchKeys: [],
                    isShowProducts: !0,
                    searchHistory: [],
                    readyFocused: !1,
                    fetchListByHotSearch: !0,
                    isSupportGoodsRecommend: !1,
                    recommendHasData: !0,
                    showRecommend: !1,
                    layoutConfig: {
                      textStyleType: 2,
                      borderRadiusType: 2,
                      showCornerMark: !1,
                    },
                    shareImgUrl: "",
                    uuid: "",
                    slgStatus: !0,
                    slg: "",
                    hot: "",
                    salesman: {},
                    goodsOpt: x.k,
                    design: [],
                    showShareFloating: !1,
                    listQuery: {},
                    totalAlias: [],
                    __query__: "",
                    route: "",
                  }),
                  actions: {
                    setVal(e) {
                      Object.entries(e).forEach((e) => {
                        var [t, a] = e;
                        Object(I.a)(this, t, a);
                      });
                    },
                    fetchProductList() {
                      var {
                          order: e,
                          loading: t,
                          fetchListByHotSearch: a,
                          hotSearchKeys: s,
                          type: i,
                          orderBy: r,
                          exhibitionTag: n,
                        } = this,
                        { page: l, keyword: c } = this;
                      if (!t) {
                        a &&
                          !c &&
                          s.length &&
                          ((c = s[0]),
                          this.setVal({
                            keyword: c,
                            inputValue: c,
                            fetchListByHotSearch: !1,
                          })),
                          wx.showToast({ title: "加载中", icon: "loading" }),
                          this.setVal({
                            loading: !0,
                            "goodsOpt.loading": !0,
                            isEmpty: !1,
                          });
                        var d = Object(k.a)({
                          exhibitionTag: n,
                          type: i,
                          keyword: c,
                          extra: e ? { order: e } : {},
                        });
                        C.request({
                          path: "/wscshop/showcase/goods_search/goods.json",
                          method: "GET",
                          query: Object(o.a)({}, d, { page: l, order_by: r }),
                          cacheConfig: { forceUpdate: !1, expire: 60 },
                        })
                          .then((e) => {
                            var t,
                              a = 1 === l ? [] : this.goodsOpt.items,
                              s = e.map((e) => e.alias),
                              i = 1 !== l || (e || []).length >= 20,
                              { isLimitSold: n, limitSoldNum: h } = this,
                              {
                                page: p,
                                needLoadMore: g,
                                isEmpty: u,
                                list: m,
                              } = Object(_.a)(e, {
                                page: l,
                                pageSize: d.page_size,
                                isLimitSold: n,
                                limitSoldNum: h,
                                currentList: a,
                                spmType: "search",
                                pageType: "search",
                                layout: 3,
                                isUmpInfoShow: !1,
                                needFormatPrice: !1,
                                soldOutGoodsImg: this.soldOutGoodsImg,
                              }),
                              f = this.totalAlias.concat(s),
                              b =
                                (null == (t = (m[0] || {}).extraInfo)
                                  ? void 0
                                  : t.slg) || "0",
                              w = u || !g;
                            B.triggerLogger(b, "search"),
                              B.getSalesmanCard(m),
                              wx.hideToast();
                            var y = a.concat(m);
                            this.setVal({
                              loading: !1,
                              isShowProducts: !0,
                              needLoadMore: g,
                              isEmpty: u,
                              page: p,
                              "goodsOpt.loading": !1,
                              showRecommend: w,
                              slg: b,
                              showShareFloating: i,
                              listQuery: Object(o.a)({}, d, {
                                page: l,
                                order_by: r,
                              }),
                              totalAlias: f,
                              "goodsOpt.items": y,
                            }),
                              C.logger.log({
                                et: "callback",
                                ei: "search_callback",
                                en: "搜索反馈",
                                params: {
                                  status: e.length > 0 ? L : P,
                                  words: c,
                                  goods_id: e.map((e) => {
                                    var t;
                                    return null == e ||
                                      null == (t = e.actionOpt)
                                      ? void 0
                                      : t.id;
                                  }),
                                },
                              }),
                              B.setGoodsViewLog(m, "search");
                          })
                          .catch((e) => {
                            wx.hideToast(),
                              this.slgStatus &&
                                b.a.trigger("goodsTag:loaded", { slg: "0" }),
                              this.setVal({
                                loading: !1,
                                "goodsOpt.loading": !1,
                                isShowProducts: !0,
                                showRecommend: !0,
                                slgStatus: !1,
                              }),
                              Object(u.a)(e.msg || "没有找到商品哦～");
                          });
                      }
                    },
                    handleItemClick(e) {
                      B.handleItemClick(e);
                    },
                    showcaseHandleGoodsBuy(e) {
                      B.showcaseHandleGoodsBuy(e);
                    },
                    handleFilterChange(e) {
                      B.handleFilterChange(e);
                    },
                    handleItemImageLoaded(e) {
                      var t;
                      void 0 === e && (e = {});
                      var a,
                        { index: o, parentIndex: s } =
                          null == (t = e.detail) ? void 0 : t.payload;
                      0 === o &&
                        0 === s &&
                        (null == (a = T.a.mark) ||
                          null == a.log ||
                          a.log({ tag: "search-result", scene: ["route"] }));
                    },
                    handleRootTap(e) {
                      B.handleRootTap(e);
                    },
                    setGoodsViewLog(e, t) {
                      B.setGoodsViewLog(e, t);
                    },
                  },
                })),
                  (t.store = this.store),
                  (B = this),
                  (this.ctx = t),
                  Object.assign(
                    this,
                    Object(g.d)(
                      this,
                      [
                        "themeClass",
                        "needLoadMore",
                        "keyword",
                        "filters",
                        "searchHistory",
                        "readyFocused",
                        "shareImgUrl",
                        "uuid",
                        "slgStatus",
                        "slg",
                        "salesman",
                        "goodsOpt",
                        "listQuery",
                        "totalAlias",
                        "listType",
                        "hot",
                        "__query__",
                        "route",
                      ],
                      { setSelf: !0 }
                    ),
                    Object(g.b)(this, [
                      "setVal",
                      "fetchProductList",
                      "handleItemImageLoaded",
                    ]),
                    m.a,
                    w.a,
                    y.a,
                    f.a,
                    O.a
                  ),
                  (this.ctx.data.shopBlockInfo = {
                    showServiceDue: !1,
                    showStoreSwitch: !1,
                    showShopStatus: !1,
                    switchPageOptions: {},
                    buyerAddress: "",
                    isRetailShelf: !1,
                    navigationbarConfigData: {},
                  }),
                  this.store.watch("searchText", (e) => {
                    this.ctx.data.searchText = e;
                  }),
                  this.store.watch("slg", (e) => {
                    this.ctx.data.slg = e;
                  }),
                  this.ctx.watch("themeTag", (e) => {
                    this.ctx.data.themeTagObj = e;
                  }),
                  this.store.watch("showShareFloating", (e) => {
                    this.ctx.data.showShareFloating = e;
                  });
              }
              beforePageCreate() {
                this.commonBeforePageCreate({ slData: { sst: 9 } });
              }
              beforePageMount(e) {
                if (
                  (this.filterBarOnLoad(),
                  this.skuOnLoad(),
                  this.commonOnLoad(),
                  this.setVal({
                    exhibitionTag: v.type,
                    __query__: e.query,
                    route: e.route,
                  }),
                  C.checkReLaunchShopSelect(),
                  e.query.q)
                ) {
                  var t = decodeURIComponent(e.query.q);
                  this.setVal({
                    keyword: t,
                    inputValue: t,
                    isShowProducts: !0,
                    type: e.query.type,
                    hot: e.query.hot,
                  }),
                    this.fetchProductList();
                } else this.setVal({ readyFocused: !0, isShowProducts: !1 });
                try {
                  if (e.query.hot) {
                    var a = JSON.parse(decodeURIComponent(e.query.hot));
                    this.setVal({ hotSearchKeys: a });
                  }
                } catch (e) {}
                var o = wx.getStorageSync("search-history");
                o && this.setVal({ searchHistory: o }),
                  this.getUUid(),
                  this.fetchGoodsRecommend(),
                  this.readyFocused && this.setVal({ focused: !0 });
              }
              onPageShow() {
                this.commondOnShow();
              }
              onPageHide() {
                this.commonOnHide();
              }
              pageDestroyed() {
                this.commonOnUnload();
              }
              onReachBottom() {
                this.needLoadMore
                  ? this.fetchProductList()
                  : p.a.trigger("float-share:show" + Object(S.a)(this));
              }
              fetchGoodsRecommend() {
                C.request({
                  path: "/wscshop/showcase/goods_search/recommend.json",
                }).then((e) => {
                  var { goods_recommend_search_result: t = "0" } = e;
                  1 == +t && this.setVal({ isSupportGoodsRecommend: !0 });
                });
              }
              onPageScroll(e) {
                e.scrollTop <= 0 ||
                  p.a.trigger("onPageScroll" + Object(S.a)(this), e);
              }
              onShareAppMessage(e) {
                var { keyword: t, hot: a } = this,
                  o = {
                    path:
                      "/packages/goods-list/search-result/index?q=" +
                      t +
                      "&hot=" +
                      a,
                  };
                return (
                  this.shareImgUrl && (o.imageUrl = this.shareImgUrl),
                  this.getShareData(o, { extra: e })
                );
              }
            },
            "@wsc-shop/share-tab": j.a,
            "@wsc-shop/search-bar": A.a,
            "@wsc-shop/filter-bar": G.a,
            "@wsc-shop/dc-goods": M.a,
            "@wsc-tee-salesman/salesman-cube-block": R.a,
            "@wsc-tee-statcenter/goods-showcase-block": N.a,
            "@ext-tee-wsc-goods/biz-sku-manage": D.a,
            "@wsc-tee-decorate/feature-user-authorize-popup": E.a,
            "@wsc-tee-decorate/jump-link": F.a,
            "@wsc-shop/share-floating": class {
              constructor(e) {
                var { ctx: t } = e;
                this.ctx = t;
              }
            },
            "@wsc-tee-decorate/dc-goods-tee": U.a,
          },
        },
        V = d.default.getGlobal("ranta-app-runtime"),
        q = V.getPageOptions({
          rantaOptions: Object(o.a)(
            { page: "/packages/goods-list/search-result/index" },
            H
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: V,
          tee: d.default,
          usedLifecycles: [
            "beforePageMount",
            "beforePageCreate",
            "onPageShow",
            "onPullDownRefresh",
            "onReachBottom",
            "onShareAppMessage",
            "onPageScroll",
          ],
        });
      d.default.page({ mixins: [q] });
    },
    Ba3d: function (e, t, a) {
      a.d(t, "a", function () {
        return s;
      });
      var o = a("US/N");
      function s(e) {
        return Object(o.default)({
          method: "GET",
          path: "/wscstatcenter/recommend/getRecommendResultData.json",
          data: { params: JSON.stringify(e) },
          errorMsg: "获取推荐商品错误",
          withCredentials: !0,
        });
      }
    },
    C7Yh: function (e, t, a) {
      a.d(t, "a", function () {
        return i;
      });
      var o = a("P1Ym"),
        s = a.n(o);
      class i {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      i.widgets = { GoodsShowcase: s() };
    },
    E69o: function (e, t, a) {},
    EpCc: function (e, t, a) {},
    EzHl: function (e, t, a) {
      var o = a("Fcif"),
        s = (a("SZc0"), a("esrA")),
        i = "@wsc-shop/goods-list-all-page-setup",
        r = "@wsc-tee-salesman/salesman-cube-block",
        n = "@wsc-tee-statcenter/goods-showcase-block",
        l = "@ext-tee-wsc-im/im-message-contact",
        c = "@wsc-tee-decorate/feature-user-authorize-popup",
        d = Object(s.a)({
          a: {
            p: [
              {
                r: ["/packages/goods-list/all/index"],
                c: [
                  {
                    t: "c",
                    c: [
                      {
                        t: "m",
                        c: [
                          { moduleId: "b9-1", name: "GoodsListAllPageSetup" },
                          "b9-10",
                          "b9-0",
                          "b9-13",
                        ],
                      },
                    ],
                  },
                  {
                    t: "c",
                    c: [
                      { t: "m", c: ["b9-6", "b9-7", "b9-8", "b9-12", "b9-9"] },
                    ],
                  },
                ],
                m: ["b9-2", "b9-3", "b9-4", "b9-5", "b9-11", "b9-14"],
              },
            ],
          },
          m: [
            [
              "b9-0",
              "@ext-tee-wsc-decorate/page-style",
              null,
              { stage: "pre" },
            ],
            [
              "b9-1",
              i,
              {
                w: {
                  SearchBar: ["b9-3", "SearchBarMain"],
                  FilterBar: ["b9-4", "FilterBarMain"],
                  ShareTab: ["b9-2", "ShareTabMain"],
                  DcGoods: ["b9-5", "DcGoodsMain"],
                },
              },
            ],
            [
              "b9-2",
              "@wsc-shop/share-tab",
              {
                d: {
                  showTab: "b9-1",
                  navBarTitle: "b9-1",
                  canShowNavBar: "b9-1",
                  listQuery: "b9-1",
                  totalAlias: "b9-1",
                },
              },
              { properties: { shareFrom: 4 } },
            ],
            ["b9-3", "@wsc-shop/search-bar", null],
            [
              "b9-4",
              "@wsc-shop/filter-bar",
              {
                d: { filters: "b9-1", themeClass: "b9-1" },
                p: {
                  handleFilterChange: [["b9-1"]],
                  handleChangeLayoutType: [["b9-1"]],
                },
              },
            ],
            [
              "b9-5",
              "@wsc-shop/dc-goods",
              {
                d: { goodsOpt: "b9-1", uuid: "b9-1" },
                p: {
                  handleItemClick: [["b9-1"]],
                  showcaseHandleGoodsBuy: [["b9-1"]],
                  handleChangeLayoutType: [["b9-1"]],
                },
              },
              { properties: { pageType: "ALL_GOODS_CONFIG" } },
            ],
            [
              "b9-6",
              "@wsc-tee-decorate/floating-nav",
              { w: { FloatingNavBg: "b9-6" } },
            ],
            [
              "b9-7",
              r,
              { d: { shopBaseInfo: "b9-1" } },
              { properties: { needBindRelation: !1, showGoodsDetail: !1 } },
            ],
            ["b9-8", n, null],
            [
              "b9-9",
              "@ext-tee-wsc-goods/biz-sku-manage",
              {
                d: { themeVars: "b9-1" },
                e: { "sku:show": [["b9-1", "featureSku:show"]] },
              },
              { properties: { cloudExcluded: !0 } },
            ],
            ["b9-10", "@wsc-tee-shop/footer", null],
            ["b9-11", l, null],
            ["b9-12", c, null],
            ["b9-13", "@wsc-tee-decorate/jump-link", null],
            ["b9-14", "@wsc-tee-decorate/dc-goods-tee", null],
          ],
          e: [
            ["@ext-tee-wsc-decorate/page-style", a("8v1J")],
            [i, a("jTuQ"), { framework: "weapp" }],
            ["@wsc-shop/share-tab", a("5681"), { framework: "weapp" }],
            ["@wsc-shop/search-bar", a("yiu3"), { framework: "weapp" }],
            ["@wsc-shop/filter-bar", a("9nSG"), { framework: "weapp" }],
            ["@wsc-shop/dc-goods", a("GV+9"), { framework: "weapp" }],
            ["@wsc-tee-decorate/floating-nav", a("oimI")],
            [r, a("beL+")],
            [n, a("jURq")],
            ["@ext-tee-wsc-goods/biz-sku-manage", a("O8mO")],
            ["@wsc-tee-shop/footer", a("+zL3")],
            [l, a("7xhV")],
            [c, a("czXk")],
            ["@wsc-tee-decorate/jump-link", a("OgbJ")],
            ["@wsc-tee-decorate/dc-goods-tee", a("U8nN")],
          ],
          f: "weapp",
        }),
        h = a("9ZMt"),
        p = a("rLrQ"),
        g = a("DXKY"),
        u = a("VmHG"),
        m = a("hHpg"),
        f = a("vf+9"),
        b = a("HmQ/"),
        w = a("Mqpn"),
        y = a("TioH"),
        O = a("cH+H"),
        S = a("z1RG"),
        v = a("hTAu"),
        T = a("R18q"),
        k = a("l8Ce"),
        _ = a("QFAZ"),
        x = a("oNZJ"),
        I = a("jHjV"),
        C = a("w2Y9"),
        L = a.n(C),
        P = getApp(),
        B = null,
        j = a("iMae"),
        A = a("d9dF"),
        G = a("N49k"),
        M = a("ORrb"),
        R = a("WlwD"),
        N = a("NV8i"),
        D = a("C7Yh"),
        E = a("ygrD"),
        F = a("qnge"),
        U = a("2Pst"),
        H = a("qwv7"),
        V = a("/pw/"),
        q = a("dHkL"),
        z = {
          config: d,
          builtinBundle: {
            "@ext-tee-wsc-decorate/page-style": p.a,
            "@wsc-shop/goods-list-all-page-setup": class {
              constructor(e) {
                var { ctx: t } = e;
                (this.store = Object(u.a)({
                  state: () => ({
                    page: 1,
                    themeClass: P.themeClass,
                    loading: !1,
                    needLoadMore: !0,
                    isEmpty: !0,
                    searchConfig: {
                      border_style_color: "#fff",
                      border_style_height: 40,
                      border_style_method: "0",
                      color: "#f9f9f9",
                      hot_search_keys: [],
                      hot_search_keys_new: [],
                      position_show_method: "1",
                      position_type: "0",
                      show_search_component: "1",
                      text_align_method: "0",
                      text_color: "#999",
                      type: "search",
                      z_index: 121,
                    },
                    featureSkuData: null,
                    order: "",
                    orderBy: "algPVD30",
                    listQuery: {},
                    filterBarFixed: !1,
                    filterBarFixedTop: 0,
                    filters: [
                      { title: "综合", value: "algPVD30" },
                      { title: "上新", value: "createdTime" },
                    ],
                    isLimitSold: !1,
                    limitSoldNum: 0,
                    salesman: {},
                    shareImgUrl: "",
                    uuid: "",
                    slgStatus: !0,
                    goodsOpt: x.b,
                    showTab: !1,
                    navBarTitle: "",
                    canShowNavBar: !1,
                    totalAlias: [],
                    id: "",
                    __query__: "",
                    route: "",
                    firstPageList: null,
                  }),
                  actions: {
                    setVal(e) {
                      Object.entries(e).forEach((e) => {
                        var [t, a] = e;
                        Object(I.a)(this, t, a);
                      });
                    },
                    fetchProductList() {
                      var e,
                        t,
                        { loading: a, orderBy: s, order: i, page: r } = this;
                      if (!a) {
                        wx.showToast({ title: "加载中", icon: "loading" }),
                          this.setVal({ loading: !0, "goodsOpt.loading": !0 });
                        var n = Object(k.a)({
                          extra: Object(o.a)(
                            { page: r, order_by: s },
                            i ? { order: i } : {}
                          ),
                        });
                        return (
                          (null == (e = P.prefetchCache) ||
                          null == (t = e["prefetch:all-goods"])
                            ? void 0
                            : t.value) ||
                          P.request({
                            path: "/wscshop/weapp/goods/all-goods.json",
                            query: n,
                            method: "GET",
                            cacheConfig: { forceUpdate: !1, expire: 60 },
                          })
                        )
                          .then((e) => {
                            var t,
                              a,
                              { showUmpAmbience: s, list: i } = e,
                              l = 1 == +r ? [] : this.goodsOpt.items,
                              c = i.map((e) => e.alias),
                              d = this.totalAlias.concat(c),
                              h = d.length >= 20,
                              { isLimitSold: p, limitSoldNum: g } = this,
                              {
                                listData: u,
                                page: m,
                                needLoadMore: f,
                                isEmpty: b,
                                list: w,
                              } = Object(_.a)(i, {
                                page: r,
                                pageSize: n.pageSize,
                                isLimitSold: p,
                                limitSoldNum: g,
                                currentList: l,
                                spmType: "ag",
                                pageType: "goods",
                                layout: 1,
                                isUmpInfoShow: !!+s,
                                soldOutGoodsImg: this.soldOutGoodsImg,
                              }),
                              y = this.goodsOpt.items || [];
                            u["goodsOpt.items"]
                              ? ((this.firstPageList = [
                                  ...u["goodsOpt.items"],
                                ]),
                                (y = this.firstPageList.slice(0, 10)))
                              : (y = y.concat(Object.values(u))),
                              this.setVal(
                                Object(o.a)(
                                  {
                                    page: m,
                                    needLoadMore: f,
                                    isEmpty: b,
                                    loading: !1,
                                    "goodsOpt.loading": !1,
                                    "goodsOpt.itemCardOpt.type":
                                      "two" === this.goodsOpt.layoutOpt.type
                                        ? x.m[+s]
                                        : "list",
                                    showTab: h,
                                    totalAlias: d,
                                    canShowNavBar: !0,
                                    listQuery: n,
                                  },
                                  u,
                                  { "goodsOpt.items": y }
                                )
                              ),
                              setTimeout(() => {
                                T.a.markRendered("fs");
                              }, 0),
                              B.triggerLogger(
                                (null == (t = w[0]) || null == (a = t.extraInfo)
                                  ? void 0
                                  : a.slg) || "0",
                                "ag"
                              ),
                              B.getSalesmanCard(w),
                              B.setGoodsViewLog(w, "allpro");
                          })
                          .catch((e) => {
                            this.setVal({
                              loading: !1,
                              "goodsOpt.loading": !1,
                            }),
                              Object(m.a)(
                                (null == e ? void 0 : e.msg) ||
                                  "没有找到商品哦～"
                              ),
                              B.triggerLogger("0", "ag");
                          })
                          .finally(() => {
                            P.prefetchCache["prefetch:all-goods"] &&
                              delete P.prefetchCache["prefetch:all-goods"],
                              setTimeout(() => {
                                wx.hideToast();
                              }, 500);
                          });
                      }
                    },
                    handleItemClick(e) {
                      B.handleItemClick(e);
                    },
                    showcaseHandleGoodsBuy(e) {
                      B.showcaseHandleGoodsBuy(e);
                    },
                    handleFilterChange(e) {
                      B.handleFilterChange(e);
                    },
                    handleItemImageLoaded(e) {
                      void 0 === e && (e = {}),
                        P.logger.log({
                          et: "view",
                          ei: "view_list_goods",
                          en: "列表商品曝光",
                        });
                      var t,
                        { index: a, parentIndex: o } = (e.detail || {}).payload;
                      0 === a &&
                        0 === o &&
                        (null == (t = T.a.mark) ||
                          null == t.log ||
                          t.log({ tag: "goods-list", scene: ["route"] }));
                      this.setFirstPageRender();
                    },
                    handleRootTap(e) {
                      B.handleRootTap(e);
                    },
                    setFirstPageRender() {
                      this.firstPageList &&
                        (this.setVal({ "goodsOpt.items": this.firstPageList }),
                        (this.firstPageList = null));
                    },
                  },
                })),
                  (t.store = this.store),
                  (B = this),
                  (this.ctx = t),
                  Object.assign(
                    this,
                    Object(u.d)(
                      this,
                      [
                        "themeClass",
                        "loading",
                        "needLoadMore",
                        "filters",
                        "shareImgUrl",
                        "uuid",
                        "slgStatus",
                        "goodsOpt",
                        "showTab",
                        "listQuery",
                        "navBarTitle",
                        "canShowNavBar",
                        "totalAlias",
                        "__query__",
                        "route",
                        "id",
                      ],
                      { setSelf: !0 }
                    ),
                    Object(u.b)(this, [
                      "setVal",
                      "fetchProductList",
                      "handleItemImageLoaded",
                    ]),
                    f.a,
                    w.a,
                    O.a,
                    b.a,
                    y.a
                  ),
                  (this.ctx.data.themeVars =
                    "padding-bottom: constant(env(safe-area-inset-bottom) + 50px);z-index: 141;"),
                  (this.ctx.data.shopBlockInfo = {
                    showServiceDue: !1,
                    showStoreSwitch: !1,
                    showShopStatus: !1,
                    switchPageOptions: {},
                    buyerAddress: "",
                    isRetailShelf: !1,
                    navigationbarConfigData: {},
                  }),
                  this.store.watch("showTab", (e) => {
                    this.ctx.data.showTab = e;
                  }),
                  this.ctx.watch("themeTag", (e) => {
                    this.ctx.data.themeTagObj = e;
                  });
              }
              beforePageCreate() {
                this.commonBeforePageCreate({ slData: { sst: 7 } });
              }
              beforePageMount(e) {
                P.checkReLaunchShopSelect(), this.showLoading();
                var t = this.ctx.env.getQuery(),
                  a = {
                    redirectUrl: L.a.add(this.ctx.env.route, t),
                    logTag: "goods-list-all",
                  },
                  [o] = this.ctx.process.invoke("autoEnterShop", t, a);
                o.then(() => {
                  this.setVal({
                    id: P.getKdtId(),
                    __query__: e.query,
                    route: e.route,
                  }),
                    B.getUUid(),
                    this.filterBarOnLoad(),
                    this.skuOnLoad(),
                    this.fetchProductList(),
                    this.commonOnLoad();
                });
              }
              onPageShow() {
                this.filterBarSticky(), this.commondOnShow();
              }
              onPageHide() {
                this.commonOnHide();
              }
              pageDestroyed() {
                this.commonOnUnload();
              }
              onReachBottom() {
                var { needLoadMore: e, loading: t } = this;
                e || g.a.trigger("float-share:show" + Object(v.a)(this)),
                  (e || t) && this.fetchProductList();
              }
              onPageScroll(e) {
                e.scrollTop <= 0 ||
                  g.a.trigger("onPageScroll" + Object(v.a)(this), e);
              }
              filterBarSticky() {
                S.a.releaseStickyControl(),
                  S.a.setStickyControlCheckItem("searchTop", 121),
                  S.a.setStickyControlSubscribe(
                    this.handelScrollTop,
                    this,
                    "FilterBar"
                  );
              }
              handelScrollTop(e) {
                var { type: t, stickyTop: a = 0 } = e;
                "stickyTop" === t && this.setVal({ filterBarFixedTop: a });
              }
              handleTabScroll(e) {
                var { isFixed: t } = e.detail;
                t && (S.a.checkStickyControlItem("FilterBar") || (t = !1)),
                  S.a.setStickyControlItem("FilterBar", 42, t);
                var { positionTop: a = 0 } =
                  S.a.getStickyControlItem("FilterBar") || {};
                this.setVal({ filterBarFixedTop: a, filterBarFixed: t });
              }
              showLoading() {
                wx.showToast({ title: "加载中", icon: "loading" });
              }
              onShareAppMessage(e) {
                var t = {
                  path: "/packages/goods-list/all/index",
                  title: "全部商品",
                };
                return (
                  this.shareImgUrl && (t.imageUrl = this.shareImgUrl),
                  this.getShareData(t, { extra: e })
                );
              }
            },
            "@wsc-shop/share-tab": j.a,
            "@wsc-shop/search-bar": A.a,
            "@wsc-shop/filter-bar": G.a,
            "@wsc-shop/dc-goods": M.a,
            "@wsc-tee-decorate/floating-nav": R.a,
            "@wsc-tee-salesman/salesman-cube-block": N.a,
            "@wsc-tee-statcenter/goods-showcase-block": D.a,
            "@ext-tee-wsc-goods/biz-sku-manage": E.a,
            "@wsc-tee-shop/footer": F.a,
            "@ext-tee-wsc-im/im-message-contact": U.a,
            "@wsc-tee-decorate/feature-user-authorize-popup": H.a,
            "@wsc-tee-decorate/jump-link": V.a,
            "@wsc-tee-decorate/dc-goods-tee": q.a,
          },
        },
        Q = h.default.getGlobal("ranta-app-runtime"),
        W = Q.getPageOptions({
          rantaOptions: Object(o.a)(
            { page: "/packages/goods-list/all/index" },
            z
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: Q,
          tee: h.default,
          usedLifecycles: [
            "onPullDownRefresh",
            "onPageScroll",
            "beforePageMount",
            "beforePageCreate",
            "onPageShow",
            "onReachBottom",
            "onShareAppMessage",
          ],
        });
      h.default.page({ mixins: [W] });
    },
    "GV+9": function (e, t) {
      e.exports = {
        d: "goodsOpt;6;uuid;6",
        w: "DcGoodsMain",
        pi: "handleItemClick;showcaseHandleGoodsBuy;handleChangeLayoutType;handleItemImageLoaded",
        cc: "GoodsTee",
        li: "",
      };
    },
    HPig: function (e, t, a) {},
    "HmQ/": function (e, t, a) {
      var o = getApp();
      t.a = {
        getSalesmanCard(e) {
          if (
            e.length > 0 &&
            !this.shareImgUrl &&
            e.some((e) => e.salesmanRebatePrice || e.salesmanRebateMaxPrice)
          ) {
            var t = e.map((e) => e.imgOpt.src).slice(0, 2);
            o.request({
              path: "/wscgoodslist/weapp-poster/salesman-card.json",
              method: "POST",
              data: { imgList: t },
            }).then((e) => {
              this.setVal({ shareImgUrl: e.value });
            });
          }
        },
      };
    },
    JDRw: function (e, t, a) {
      a.d(t, "d", function () {
        return o;
      }),
        a.d(t, "c", function () {
          return s;
        }),
        a.d(t, "a", function () {
          return i;
        }),
        a.d(t, "b", function () {
          return r;
        }),
        a.d(t, "e", function () {
          return n;
        }),
        a.d(t, "f", function () {
          return l;
        });
      var o = "/wscstatcenter/recommend-showcase-page",
        s = [
          {
            title: "店铺热榜",
            iconUrl:
              "https://b.yzcdn.cn/public_files/49c98c9a4b9ee7070cda50774423b65e.png",
            backgroundImage:
              "https://b.yzcdn.cn/public_files/9fdadc51e3c57aa73cb2a4d35c5f687b.png",
            showCornerMark: !0,
            pathSuffix: "ranking",
            bizName: "g~hotGoods",
          },
          {
            title: "为你推荐",
            iconUrl:
              "https://b.yzcdn.cn/public_files/991bcb683a19c3cdb26fe11fbc5c3c79.png",
            showCornerMark: !1,
            pathSuffix: "recommend",
            bizName: "g~mayLike",
          },
          {
            title: "历史足迹",
            iconUrl:
              "https://b.yzcdn.cn/public_files/4a96aeb556b1b55dd5341b35db8df464.png",
            showCornerMark: !1,
            pathSuffix: "footmark",
            bizName: "g~history",
          },
        ],
        i = {
          "g~hotGoods": "GoodsShowcaseRanking",
          "g~mayLike": "GoodsShowcaseRecommend",
          "g~history": "GoodsShowcaseFootmark",
        },
        r = [1, 8, 9, 3],
        n = {
          1: [
            /^\/packages\/home\/dashboard/,
            /^\/packages\/tee-home|ext-home\/dashboard/,
          ],
          3: [
            /^\/packages\/home\/feature/,
            /^\/packages\/tee-home|ext-home\/feature/,
            /^\/packages\/home\/tab/,
            /^\/packages\/ext-home\/tab\/(one|two|three)/,
          ],
          8: [/^\/packages\/goods(:?-v\d+)?\//, /^pages\/goods\/detail/],
          9: [
            /^\/packages\/shop\/goods\/all/,
            /^\/packages\/shop\/goods\/group/,
            /^\/packages\/shop\/goods\/tag-list\/index/,
          ],
        },
        l = {
          1: [/\/(v2|wscshop)\/(showcase\/)?(homepage|home)/],
          3: [/\/(v2|wscshop)\/(showcase\/)?feature(?!\/goods\/all)/],
          8: [
            /\/(v2|wscshop)\/(showcase\/)?(goods|seckill)(\/adv)?/,
            /\/wscgoods\/(detail|seckill)/,
            /\/pay\/wscgoods_order/,
          ],
          9: [
            /\/wscshop\/(tag|allgoods)/,
            /\/v2\/(showcase\/)?(tag|allgoods)/,
            /\/feature\/goods\/all/,
            /\/wscshop\/showcase\/tag/,
          ],
        };
    },
    L2rW: function (e, t, a) {
      var o = a("Fcif"),
        s = (a("onYG"), a("esrA")),
        i = "@wsc-tee-decorate/showcase-container",
        r = "@wsc-shop/goods-list-tag-page-setup",
        n = "@wsc-tee-statcenter/cps-recommend-goods",
        l = "@wsc-tee-salesman/salesman-cube-block",
        c = "@wsc-tee-statcenter/goods-showcase-block",
        d = "@ext-tee-wsc-im/im-message-contact",
        h = "@wsc-tee-decorate/feature-user-authorize-popup",
        p = Object(s.a)({
          a: {
            p: [
              {
                r: ["/packages/goods-list/tag/index"],
                c: [
                  {
                    t: "c",
                    c: [
                      {
                        t: "m",
                        c: [
                          { moduleId: "b10-2", name: "GoodsListTagPageSetup" },
                          "b10-11",
                          "b10-9",
                          "b10-10",
                          "b10-12",
                          "b10-0",
                          "b10-15",
                          "b10-16",
                        ],
                      },
                    ],
                  },
                ],
                m: [
                  "b10-1",
                  "b10-3",
                  "b10-4",
                  "b10-5",
                  "b10-6",
                  "b10-7",
                  "b10-8",
                  "b10-13",
                  "b10-14",
                  "b10-17",
                ],
              },
            ],
          },
          m: [
            [
              "b10-0",
              "@ext-tee-wsc-decorate/page-style",
              null,
              { stage: "pre" },
            ],
            ["b10-1", i, null],
            [
              "b10-2",
              r,
              {
                w: {
                  CpsRecommendGoods: ["b10-8", "Main"],
                  SearchBar: ["b10-5", "SearchBarMain"],
                  FilterBar: ["b10-6", "FilterBarMain"],
                  ShareTab: ["b10-3", "ShareTabMain"],
                  DcGoods: ["b10-7", "DcGoodsMain"],
                  ShopBlock: ["b10-4", "ShopBlockMain"],
                  featureSku: ["b10-13", "Main"],
                },
              },
            ],
            [
              "b10-3",
              "@wsc-shop/share-tab",
              {
                d: {
                  showTab: "b10-2",
                  navBarTitle: "b10-2",
                  canShowNavBar: "b10-2",
                  listQuery: "b10-2",
                  totalAlias: "b10-2",
                },
              },
              { properties: { shareFrom: 3 } },
            ],
            [
              "b10-4",
              "@wsc-shop/shop-block",
              { d: { shopBlockInfo: "b10-2" } },
            ],
            ["b10-5", "@wsc-shop/search-bar", null],
            [
              "b10-6",
              "@wsc-shop/filter-bar",
              {
                d: { filters: "b10-2", themeClass: "b10-2" },
                p: { handleFilterChange: [["b10-2"]] },
              },
            ],
            [
              "b10-7",
              "@wsc-shop/dc-goods",
              {
                d: { goodsOpt: "b10-2", uuid: "b10-2" },
                p: {
                  handleItemClick: [["b10-2"]],
                  showcaseHandleGoodsBuy: [["b10-2"]],
                },
              },
              { properties: { pageType: "TAG_CONFIG" } },
            ],
            ["b10-8", n, null],
            [
              "b10-9",
              "@wsc-tee-decorate/floating-nav",
              { w: { FloatingNavBg: "b10-9" } },
            ],
            [
              "b10-10",
              l,
              { d: { shopBaseInfo: "b10-2" } },
              { properties: { needBindRelation: !1, showGoodsDetail: !1 } },
            ],
            ["b10-11", "@wsc-tee-shop/footer", null],
            ["b10-12", c, null],
            [
              "b10-13",
              "@ext-tee-wsc-goods/biz-sku-manage",
              { e: { "sku:show": [["b10-2", "featureSku:show"]] } },
              { properties: { cloudExcluded: !0 }, stage: "normal" },
            ],
            ["b10-14", d, null],
            ["b10-15", h, null],
            ["b10-16", "@wsc-tee-decorate/jump-link", null],
            ["b10-17", "@wsc-tee-decorate/dc-goods-tee", null],
          ],
          e: [
            ["@ext-tee-wsc-decorate/page-style", a("8v1J")],
            [i, a("Y7pJ")],
            [r, a("3RKa"), { framework: "weapp" }],
            ["@wsc-shop/share-tab", a("5681"), { framework: "weapp" }],
            ["@wsc-shop/shop-block", a("w0Oi"), { framework: "weapp" }],
            ["@wsc-shop/search-bar", a("yiu3"), { framework: "weapp" }],
            ["@wsc-shop/filter-bar", a("9nSG"), { framework: "weapp" }],
            ["@wsc-shop/dc-goods", a("GV+9"), { framework: "weapp" }],
            [n, a("NURP")],
            ["@wsc-tee-decorate/floating-nav", a("oimI")],
            [l, a("beL+")],
            ["@wsc-tee-shop/footer", a("+zL3")],
            [c, a("jURq")],
            ["@ext-tee-wsc-goods/biz-sku-manage", a("O8mO")],
            [d, a("7xhV")],
            [h, a("czXk")],
            ["@wsc-tee-decorate/jump-link", a("OgbJ")],
            ["@wsc-tee-decorate/dc-goods-tee", a("U8nN")],
          ],
          f: "weapp",
        }),
        g = a("9ZMt"),
        u = a("rLrQ"),
        m = a("xW8c"),
        f = a("VmHG"),
        b = a("DXKY"),
        w = a("hHpg"),
        y = a("f9/1"),
        O = a("lRMv"),
        S = a("AqAW"),
        v = a("umDW"),
        T = a("Sd3C"),
        k = a("Mqpn"),
        _ = a("cH+H"),
        x = a("HmQ/"),
        I = a("TioH"),
        C = a("hTAu"),
        L = a("2wjL"),
        P = a("vf+9"),
        B = a("yUw6"),
        j = a("QFAZ"),
        A = a("SxGv"),
        G = a("oNZJ"),
        M = a("R18q"),
        R = a("jHjV"),
        N = getApp(),
        D = 1,
        E = null,
        F = a("iMae"),
        U = a("d9dF"),
        H = a("N49k"),
        V = a("ORrb"),
        q = a("7ayS"),
        z = a("WlwD"),
        Q = a("NV8i"),
        W = a("qnge"),
        K = a("C7Yh"),
        J = a("ygrD"),
        Y = a("2Pst"),
        Z = a("qwv7"),
        X = a("/pw/"),
        $ = a("dHkL"),
        ee = {
          config: p,
          builtinBundle: {
            "@ext-tee-wsc-decorate/page-style": u.a,
            "@wsc-tee-decorate/showcase-container": m.a,
            "@wsc-shop/goods-list-tag-page-setup": class {
              constructor(e) {
                var { ctx: t } = e;
                (this.store = Object(f.a)({
                  state: () => ({
                    page: 1,
                    id: "",
                    tagParams: {},
                    layout: 0,
                    showUmpAmbience: !1,
                    themeClass: N.themeClass,
                    loading: !1,
                    needLoadMore: !0,
                    showSearchBar: !1,
                    isEmpty: !1,
                    listQuery: {},
                    salesman: {},
                    pageQuery: {},
                    featureSkuData: null,
                    order: "",
                    orderBy: "",
                    hasLoaded: !1,
                    tagComponents: [],
                    filters: [
                      { title: "综合", value: "" },
                      { title: "上新", value: "createdTime" },
                    ],
                    isLimitSold: !1,
                    limitSoldNum: 0,
                    cpsConfigKey: "cps_goods_recommend_goods_group",
                    shareImgUrl: "",
                    activeName: "",
                    soldOutGoodsImg: "",
                    groupData: [],
                    isAllGroupShow: !1,
                    emptyList: !1,
                    navBarHeight: 0,
                    searchConfig: {
                      border_style_color: "#fff",
                      border_style_height: 40,
                      border_style_method: "0",
                      color: "#f9f9f9",
                      hot_search_keys: [],
                      hot_search_keys_new: [],
                      position_show_method: "1",
                      position_type: "1",
                      show_search_component: "1",
                      text_align_method: "0",
                      text_color: "#999",
                      type: "search",
                      z_index: 121,
                    },
                    slgStatus: !0,
                    goodsOpt: G.o,
                    uuid: "",
                    showTab: !1,
                    navBarTitle: "",
                    canShowNavBar: !1,
                    totalAlias: [],
                    stickyHeight: 0,
                    shop: N.$store.state.shop,
                    __query__: "",
                    route: "",
                  }),
                  actions: {
                    setVal(e) {
                      Object.entries(e).forEach((e) => {
                        var [t, a] = e;
                        Object(R.a)(this, t, a);
                      });
                    },
                    fetchGroupPage(e) {
                      (this.id = N.getKdtId()),
                        wx.showToast({ title: "加载中", icon: "loading" }),
                        this.fetchAlias(e)
                          .then((e) => {
                            this.setVal({
                              tagAlias: e,
                              page: 1,
                              loading: !1,
                              needLoadMore: !0,
                            }),
                              this.getTagBaseInfo(e);
                          })
                          .finally(() => {
                            setTimeout(() => {
                              wx.hideToast();
                            }, 500);
                          });
                    },
                    fetchAlias(e) {
                      return new Promise((t) => {
                        N.getShopInfo().then((a) => {
                          var { chainStoreInfo: s } = a,
                            { isRootShop: i = !1, isMultiOnlineShop: r = !1 } =
                              s;
                          if (r) {
                            if (i) {
                              var n = L.a.add("/" + e.route, e.query || {});
                              Object(O.g)(
                                Object(o.a)({}, e.query || {}, {
                                  redirectUrl: n,
                                })
                              ).then((a) => {
                                a
                                  ? this.getAliasPromise(e.query.alias, a).then(
                                      (e) => {
                                        this.setVal({ alias: e }), t(e);
                                      }
                                    )
                                  : t(e.query.alias);
                              });
                            } else
                              this.getAliasPromise(
                                e.query.alias,
                                N.getKdtId() || a.kdt_id
                              ).then((e) => {
                                this.setVal({ alias: e }), t(e);
                              });
                          } else t(e.query.alias);
                        });
                      });
                    },
                    getComponents(e) {
                      N.request({
                        path: "/wscdeco/biz-component/list.json",
                        data: {
                          id: e,
                          kdtId: this.id,
                          stage: 100,
                          bizName: "itemTag",
                          queryKeys: "id,kdtId",
                        },
                      }).then((e) => {
                        this.setVal({ tagComponents: e.components });
                      });
                    },
                    getTagBaseInfo(e) {
                      (this.tagParams = Object(B.b)({ alias: e })),
                        N.request({
                          path: "/wscshop/goods-list/tag/base.json",
                          method: "GET",
                          query: Object(o.a)(
                            { alias: e },
                            this.tagParams || {}
                          ),
                          cacheConfig: { forceUpdate: !1, expire: 60 },
                        })
                          .then((t) => {
                            var { tagInfo: a, subTag: s } = t,
                              {
                                title: i,
                                subtitle: r,
                                parsedComponents: n,
                                groupId: l,
                              } = a;
                            this.getComponents(l);
                            var {
                                buy_btn: c,
                                show_title: d,
                                show_ump_ambience: h = 0,
                                show_search_bar: p,
                                buy_btn_type: g,
                                size: u,
                                size_type: m,
                                price: f,
                                title: b = "",
                                subtitle: w = "",
                              } = n[0] || {},
                              y = r || i || w || b || "商品分组",
                              O = [{ alias: e, title: "全部" }, ...s],
                              S = void 0 === p || 1 == +p,
                              v =
                                O.length > 1 && S
                                  ? 136
                                  : O.length <= 1 && !S
                                  ? 40
                                  : 92;
                            this.setVal({
                              layout: +u,
                              showUmpAmbience: 1 == +h,
                            });
                            var T = Object(A.b)(
                              {
                                size: this.layout,
                                buyBtn: c,
                                buyBtnType: g,
                                sizeType: m,
                                price: f,
                                showTitle: d,
                              },
                              this.goodsOpt.itemCardOpt,
                              { isTag: !0 }
                            );
                            this.setVal(
                              Object(o.a)(
                                {
                                  activeName: e,
                                  groupData: O,
                                  navBarTitle: y,
                                  listQuery: Object(o.a)(
                                    { alias: e },
                                    this.tagParams || {}
                                  ),
                                  isAllGroupShow: !1,
                                  pageQuery: {
                                    alias: e,
                                    title: b,
                                    subtitle: w,
                                  },
                                  stickyHeight: v,
                                  hasLoaded: !0,
                                  showSearchBar: S,
                                },
                                T
                              )
                            ),
                              t.fetchGoodsSuccess && t.tagGoods
                                ? this.setListData(t.tagGoods)
                                : this.fetchProductList();
                          })
                          .catch((e) => {
                            this.setVal({
                              activeName: "",
                              groupData: [],
                              isAllGroupShow: !1,
                            });
                          });
                    },
                    setListData(e) {
                      var t, a;
                      if (
                        (E.triggerLogger(
                          (e.list &&
                            (null == (t = e.list[0]) ||
                            null == (a = t.extraInfo)
                              ? void 0
                              : a.slg)) ||
                            "0",
                          "t"
                        ),
                        e.list || 1 !== this.page)
                      ) {
                        var { page: o } = this,
                          {
                            isLimitSold: s,
                            limitSoldNum: i,
                            goodsOpt: r = {},
                          } = this,
                          { hasMore: n } = e,
                          l = 1 == +o ? [] : r.items,
                          c = e.list.map((e) => e.alias),
                          d = this.totalAlias.concat(c),
                          h = d.length >= 20,
                          {
                            listData: p,
                            page: g,
                            needLoadMore: u,
                            isEmpty: m,
                            list: f,
                          } = Object(j.a)(e.list || [], {
                            page: o,
                            pageSize: this.tagParams.pageSize,
                            isLimitSold: s,
                            limitSoldNum: i,
                            spmType: "t",
                            pageType: "goods",
                            currentList: l,
                            hasMore: n,
                            loggerParam: { item_type: "goods" },
                            layout: this.layout,
                            isUmpInfoShow: this.showUmpAmbience,
                            needFormatPrice: !1,
                            titleConfig: {
                              layoutType: (r.itemCardOpt || {}).layoutType,
                              showTitle: (r.itemCardOpt || {}).titleOpt,
                              sizeType: (r.itemCardOpt || {}).type,
                            },
                            soldOutGoodsImg: this.soldOutGoodsImg,
                          }),
                          b = this.goodsOpt.items || [];
                        (b = p["goodsOpt.items"]
                          ? [...p["goodsOpt.items"]]
                          : b.concat(Object.values(p))),
                          E.getSalesmanCard(f),
                          this.setVal({
                            page: g,
                            needLoadMore: u,
                            isEmpty: m,
                            loading: !1,
                            showTab: h,
                            totalAlias: d,
                            canShowNavBar: !0,
                            "goodsOpt.items": b,
                          }),
                          E.setGoodsViewLog(f, "tags");
                      } else
                        this.setVal({
                          isEmpty: !0,
                          loading: !1,
                          "goodsOpt.items": [],
                        });
                    },
                    getAliasPromise: (e, t) =>
                      e
                        ? N.request({
                            path: "/wscshop/api/showcase-retail/getRetailSubShopTagInfo.json",
                            data: { source_alias: e, target_kdt_id: t },
                          })
                            .then((e) => e.alias)
                            .catch((e) => {
                              throw (
                                (Object(v.a)(
                                  "/wscshop/common/error/not-exist",
                                  {
                                    title: "分组创建中/不存在",
                                    method: "redirectTo",
                                    query: {
                                      kdt_id: N.getKdtId(),
                                      type: "tag",
                                      redirect_url: Object(T.c)({
                                        withSlash: !0,
                                        withQuery: !0,
                                      }),
                                    },
                                  }
                                ),
                                e)
                              );
                            })
                        : new Promise((t) => {
                            t(e);
                          }),
                    fetchProductList() {
                      var {
                        loading: e,
                        page: t,
                        order: a,
                        orderBy: s,
                        activeName: i,
                        groupData: r,
                      } = this;
                      if (!e) {
                        var n = this.showUmpAmbience || !1;
                        return (
                          this.setVal({ loading: !0 }),
                          N.request({
                            path: "/wscshop/goods/goodsByTagAlias.json",
                            data: Object(o.a)(
                              {},
                              this.tagParams || {},
                              {
                                page: t,
                                needActivity: n ? 1 : 0,
                                needGroupFilter: r.length > 1,
                                tagAlias: i,
                                order_by: s,
                              },
                              a ? { order: a } : {}
                            ),
                          })
                            .then((e) => {
                              this.setListData(e);
                            })
                            .catch((e) => {
                              this.setVal({ loading: !0 }),
                                Object(w.a)(e.msg || "没有找到商品哦～"),
                                E.triggerLogger("0", "t");
                            })
                        );
                      }
                    },
                    handleItemClick(e) {
                      E.handleItemClick(e);
                    },
                    showcaseHandleGoodsBuy(e) {
                      E.showcaseHandleGoodsBuy(e);
                    },
                    handleFilterChange(e) {
                      E.handleFilterChange(e);
                    },
                    handleItemImageLoaded(e) {
                      var t;
                      void 0 === e && (e = {}),
                        N.logger.log({
                          et: "view",
                          ei: "view_list_goods",
                          en: "列表商品曝光",
                        });
                      var a,
                        { index: o, parentIndex: s } =
                          null == (t = e.detail) ? void 0 : t.payload;
                      0 === o &&
                        0 === s &&
                        (wx.hideToast(),
                        null == (a = M.a.mark) ||
                          null == a.log ||
                          a.log({ tag: "goods-group", scene: ["route"] }));
                    },
                    handleRootTap(e) {
                      E.handleRootTap(e);
                    },
                  },
                })),
                  (t.store = this.store),
                  (E = this),
                  (this.ctx = t),
                  Object.assign(
                    this,
                    Object(f.d)(
                      this,
                      [
                        "id",
                        "themeClass",
                        "loading",
                        "needLoadMore",
                        "pageQuery",
                        "filters",
                        "shareImgUrl",
                        "slgStatus",
                        "goodsOpt",
                        "uuid",
                        "listQuery",
                        "showTab",
                        "navBarTitle",
                        "canShowNavBar",
                        "totalAlias",
                        "__query__",
                        "route",
                      ],
                      { setSelf: !0 }
                    ),
                    P.a,
                    k.a,
                    _.a,
                    x.a,
                    I.a
                  ),
                  Object(f.b)(this, [
                    "setVal",
                    "fetchGroupPage",
                    "fetchAlias",
                    "fetchProductList",
                    "getTagBaseInfo",
                    "setListData",
                    "handleItemImageLoaded",
                  ]),
                  (this.ctx.data.cpsConfigKey =
                    "cps_goods_recommend_goods_group"),
                  (this.ctx.data.shopBlockInfo = {
                    showServiceDue: !1,
                    showStoreSwitch: !0,
                    showShopStatus: !0,
                    switchPageOptions: {},
                    buyerAddress: "",
                    isRetailShelf: !1,
                    navigationbarConfigData: {},
                  }),
                  this.store.watch("showTab", (e) => {
                    this.ctx.data.showTab = e;
                  }),
                  this.store.watch("tagComponents", (e) => {
                    this.ctx.data.featureComponents = e;
                  }),
                  this.ctx.watch("themeTag", (e) => {
                    this.ctx.data.themeTagObj = e;
                  }),
                  this.store.watch("stickyHeight", (e) => {
                    this.ctx.data.stickyHeight = e;
                  });
              }
              beforePageCreate() {
                this.commonBeforePageCreate({ slData: { sst: 8 } });
              }
              beforePageMount(e) {
                var { navBarHeight: t } = Object(j.b)();
                this.setVal({
                  navBarHeight: t,
                  __query__: e.query,
                  route: e.route,
                });
                var { shopMetaInfo: a = {} } = N.getShopInfoSync() || {};
                if (
                  ((this.ctx.data.shopMetaInfo = JSON.parse(JSON.stringify(a))),
                  a.lock_status === D)
                )
                  return wx.redirectTo({ url: "/packages/common/lock/index" });
                this.showLoading(),
                  Object(y.checkReLaunchShopSelect)(),
                  this.filterBarOnLoad(),
                  this.skuOnLoad(),
                  this.commonOnLoad(),
                  S.a.on(
                    "app:offlineId:change",
                    () => {
                      this.fetchGroupPage(e);
                    },
                    this
                  ),
                  this.fetchGroupPage(e);
              }
              onPageShow() {
                this.commondOnShow();
              }
              onPageHide() {
                this.commonOnHide();
              }
              pageDestroyed() {
                this.commonOnUnload();
              }
              showLoading() {
                wx.showToast({ title: "加载中", icon: "loading" });
              }
              onReachBottom() {
                var { needLoadMore: e, loading: t } = this;
                e || b.a.trigger("float-share:show" + Object(C.a)(this)),
                  (e || t) && this.fetchProductList();
              }
              onPageScroll(e) {
                e.scrollTop <= 0 ||
                  b.a.trigger("onPageScroll" + Object(C.a)(this), e);
              }
              onShareAppMessage(e) {
                var { pageQuery: t = {} } = this,
                  {
                    alias: a = "",
                    title: o = "商品分组",
                    subtitle: s = "商品分组",
                  } = t,
                  i = {
                    path: L.a.add("/packages/goods-list/tag/index", {
                      alias: a,
                      title: o,
                      subtitle: s,
                    }),
                    title: s || o || "商品分组",
                  };
                return (
                  this.shareImgUrl && (i.imageUrl = this.shareImgUrl),
                  this.getShareData(i, { extra: e })
                );
              }
            },
            "@wsc-shop/share-tab": F.a,
            "@wsc-shop/shop-block": class {
              constructor(e) {
                var { ctx: t } = e;
                this.ctx = t;
              }
            },
            "@wsc-shop/search-bar": U.a,
            "@wsc-shop/filter-bar": H.a,
            "@wsc-shop/dc-goods": V.a,
            "@wsc-tee-statcenter/cps-recommend-goods": q.a,
            "@wsc-tee-decorate/floating-nav": z.a,
            "@wsc-tee-salesman/salesman-cube-block": Q.a,
            "@wsc-tee-shop/footer": W.a,
            "@wsc-tee-statcenter/goods-showcase-block": K.a,
            "@ext-tee-wsc-goods/biz-sku-manage": J.a,
            "@ext-tee-wsc-im/im-message-contact": Y.a,
            "@wsc-tee-decorate/feature-user-authorize-popup": Z.a,
            "@wsc-tee-decorate/jump-link": X.a,
            "@wsc-tee-decorate/dc-goods-tee": $.a,
          },
        },
        te = g.default.getGlobal("ranta-app-runtime"),
        ae = te.getPageOptions({
          rantaOptions: Object(o.a)(
            { page: "/packages/goods-list/tag/index" },
            ee
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: te,
          tee: g.default,
          usedLifecycles: [
            "onPullDownRefresh",
            "onReachBottom",
            "onPageShow",
            "onPageHide",
            "onPageScroll",
            "beforePageMount",
            "beforePageCreate",
            "onShareAppMessage",
          ],
        });
      g.default.page({ mixins: [ae] });
    },
    Mqpn: function (e, t, a) {
      var o = a("Fcif"),
        s = a("mQXz"),
        i = a.n(s),
        r = a("JIO9"),
        n = a("AqAW"),
        l = getApp();
      t.a = {
        skuOnLoad() {
          n.a.on("component:sku:cart", (e) => {
            e &&
              "add" === e.type &&
              wx.showToast({ title: "添加购物车成功", icon: "none" });
          });
        },
        showcaseHandleGoodsBuy(e) {
          var t,
            {
              alias: a,
              id: s,
              activityTypes: i,
              loggerParams: r = {},
            } = (null == e || null == (t = e.detail) ? void 0 : t.payload) ||
            {},
            { slg: n, alg: c } = r;
          l.logger.setContext({ slg: n || "", alg_id: c || "" }, 30);
          var d = {
            goodsIdForBirthday: s,
            birthdayScene: "WEAAPP_DECORATE_GOODS",
          };
          l.isSwitchTab().then((t) => {
            var r =
              "padding-bottom: " +
              (t
                ? "calc(env(safe-area-inset-bottom) + 50px)"
                : "calc(safe-area-inset-bottom)") +
              ";z-index: 141;";
            (this.ctx.data.themeVars = r),
              this.ctx.event.emit(
                "featureSku:show",
                Object(o.a)(
                  {},
                  e.detail.payload,
                  { alias: a, activityTypes: i, goodsId: s },
                  d
                )
              );
          });
        },
        handleSkuClose() {
          this.setVal({ "featureSkuData.showGoodsSku": !1 });
        },
        handleItemClick(e) {
          var t,
            {
              link: a,
              loggerParams: s,
              goodsPreloadOpt: n,
            } = (null == e || null == (t = e.detail) ? void 0 : t.payload) ||
            {};
          l.logger.log({
            et: "click",
            ei: "click_goods_detail",
            en: "点击商品详情",
          });
          var { alg: c, slg: d, banner_id: h, rank_no: p, rank_type: g } = s;
          a.query = i()(a.query, ["bannerId"]);
          var u = {};
          p && g && (u = { rank_type: g, rank_no: p }),
            Object(r.a)(
              a,
              Object(o.a)({}, u, {
                banner_id: h,
                alg: c,
                slg: d,
                goodsPreloadOpt: n,
              })
            );
        },
      };
    },
    N49k: function (e, t, a) {
      t.a = class {
        constructor(e) {
          var { ctx: t } = e;
          this.ctx = t;
        }
      };
    },
    ORrb: function (e, t, a) {
      t.a = class {
        constructor(e) {
          var { ctx: t } = e;
          this.ctx = t;
        }
      };
    },
    QFAZ: function (e, t, a) {
      a.d(t, "a", function () {
        return n;
      }),
        a.d(t, "b", function () {
          return l;
        });
      var o = a("Fcif");
      var s = function (e, t, a) {
          void 0 === t && (t = ""), void 0 === a && (a = 0);
          var o = {};
          return e && 0 !== e.length && "string" == typeof t
            ? (e.forEach((e, s) => {
                var i = a + s;
                o[t ? t + "[" + i + "]" : i] = e;
              }),
              o)
            : o;
        },
        i = a("1Uvd"),
        r = a("SxGv");
      function n(e, t) {
        var {
            page: a,
            pageSize: n,
            currentList: l,
            isLimitSold: c,
            limitSoldNum: d,
            hasMore: h,
            spmType: p,
            pageType: g,
            loggerParam: u = {},
            isUmpInfoShow: m = !1,
            layout: f,
            needFormatPrice: b = !0,
            titleConfig: w,
            soldOutGoodsImg: y,
          } = t,
          O = e || [],
          S = O.some(function (e) {
            void 0 === e && (e = {});
            var t = e.rankInfoDTO && 0 !== Object.keys(e.rankInfoDTO).length,
              a =
                +e.salesmanRebateMaxPrice ||
                (e.extension || {}).openSalesmanBooth,
              o = +e.guideCommission || (e.extension || {}).openGuideBooth;
            return t || a || e.showRecommendedCard || o;
          }),
          v = O.map((e, t) => {
            var a = Object(r.a)({
              goods: e,
              index: t,
              isUmpInfoShow: m,
              layout: f,
              needFormatPrice: b,
              showExtra: S,
              soldOutGoodsImg: y,
            });
            w && (a.titleOpt = Object(r.c)(a.titleOpt, w, t));
            var { totalSoldNum: s } = a.otherOpt,
              { rankType: n, rankNo: l } = a.rankOpt,
              { slg: h = "", alg: O = "" } = a.extraInfo || {},
              { id: v } = a.actionOpt,
              T = p + "." + v + "~" + g + "~" + (t + 1) + "~" + Object(i.a)(8);
            0 == +s || (c && +s < d) || (a.soldNumOpt = { totalSoldNum: s });
            var k = {};
            return (
              l && n && (k = { rank_type: n, rank_no: l }),
              (a.actionOpt = Object(o.a)({}, a.actionOpt, {
                loggerParams: Object(o.a)(
                  { goods_id: v, banner_id: T, item_id: v, alg: O, slg: h },
                  k,
                  u
                ),
              })),
              (a.salesmanRebatePrice = e.salesmanRebatePrice),
              (a.salesmanRebateMaxPrice = e.salesmanRebateMaxPrice),
              (a.guideCommission = e.guideCommission),
              a
            );
          }),
          T =
            1 == +a
              ? { "goodsOpt.items": v }
              : s(v, "goodsOpt.items", l.length),
          k = !1;
        return (
          (void 0 !== h ? h : e.length === n) && (a++, (k = !0)),
          {
            list: v,
            listData: T,
            needLoadMore: k,
            isEmpty: 1 === a && 0 === v.length,
            page: a,
          }
        );
      }
      function l() {
        var e = wx.getSystemInfoSync();
        return {
          navBarHeight: e.statusBarHeight + 44,
          statusBarHeight: e.statusBarHeight,
        };
      }
    },
    SZc0: function (e) {
      e.exports = JSON.parse("{}");
    },
    SxGv: function (e, t, a) {
      a.d(t, "b", function () {
        return p;
      }),
        a.d(t, "c", function () {
          return g;
        }),
        a.d(t, "a", function () {
          return b;
        });
      var o = a("Fcif"),
        s = a("zMoS"),
        i = a("jmjq"),
        r = a.n(i),
        n = a("oNZJ"),
        l = a("lCVF"),
        c = a.n(l),
        d = a("cqgp");
      function h(e) {
        var { layout: t, sizeType: a } = e,
          o = t === n.h.SMALL || (a === n.q.SAMPLE && t !== n.h.LIST) ? 8 : 12;
        return { marginTop: o, height: (t === n.h.BIG ? 22 : 36) + o };
      }
      function p(e, t, a) {
        void 0 === a && (a = {});
        var { titleOpt: s, priceOpt: i, imgOpt: r } = t,
          { fill: l } = r,
          {
            buyBtnType: c,
            buyBtn: d,
            sizeType: p,
            size: g,
            showTitle: u,
            price: m,
          } = e,
          f = 3 === g ? "one" : n.e[g],
          b = 1 == +d ? n.c[+c] : void 0;
        a.isTag && 1 == +c && b && (b.name = "cart-circle-o");
        var w = 3 === g ? n.d.HORIZONTAL : n.d.VERTICAL,
          y = n.m[+p],
          O = (function (e, t) {
            var { showTitle: a, layout: s, sizeType: i } = t;
            if (!a && s !== n.h.LIST) return null;
            var { height: r } = h({ sizeType: i, layout: s });
            return Object(o.a)({}, e, {
              titleFontSize: n.p[s],
              titleLines: s === n.h.BIG ? 1 : 2,
              bgColor: "transparent",
              height: r + "px",
            });
          })(s, { layout: g, showTitle: +u, sizeType: y });
        return (
          y === n.q.WATERFALL && (l = "width"),
          {
            "goodsOpt.itemCardOpt.imgOpt.fill": l,
            "goodsOpt.itemCardOpt.titleOpt": O,
            "goodsOpt.itemCardOpt.priceOpt": 1 == +m ? i : void 0,
            "goodsOpt.itemCardOpt.btnOpt": b,
            "goodsOpt.itemCardOpt.type": y,
            "goodsOpt.itemCardOpt.layoutType": f,
            "goodsOpt.itemCardOpt.layout": w,
            "goodsOpt.itemCardOpt.textAreaOpt": null,
            "goodsOpt.layoutOpt.type": f,
          }
        );
      }
      function g(e, t, a) {
        if (!t.showTitle) return null;
        if ("hybrid" === t.layoutType && e) {
          var s = {},
            { height: i } = h({
              sizeType: t.sizeType,
              layout: a % 3 == 0 ? n.h.BIG : n.h.SMALL,
            });
          a % 3 == 0 && ((s.titleFontSize = n.p[n.h.BIG]), (s.titleLines = 1)),
            Object.assign(e, Object(o.a)({}, s, { height: i + "px" }));
        }
        return e;
      }
      function u(e, t, a) {
        void 0 === t && (t = "goods"), void 0 === a && (a = {});
        var o = {},
          i = {};
        "groupon" === t && (i = Object(s.a)(e, "goodsInfo", {})),
          "period_buy" === t && (i = Object(s.a)(e, "itemsInfo", {})),
          "member_goods" === t && (i = Object(s.a)(e, "goodsItemDTO", {})),
          "points_goods" === t &&
            (i = Object(s.a)(e, "generalGoodsInfoDTO", {}));
        try {
          if ("ump_limitdiscount" === t)
            o = {
              image: { url: e.imageUrl, width: 0, height: 0 },
              alias: e.idAlias,
              price: a.price,
              title: e.title,
            };
          else if ("bargain" === t)
            o = {
              image: { url: e.thumbUrl, width: 0, height: 0 },
              alias: e.alias,
              price: a.price,
              title: e.title,
            };
          else if ("ump_seckill" === t)
            o = {
              image: { url: e.thumbUrl, width: 0, height: 0 },
              alias: e.goodsAlias,
              price: a.price,
              title: i.title,
            };
          else if ("points_goods" === t)
            o = {
              image: { url: i.generalGoodsImg, width: 0, height: 0 },
              alias: i.generalGoodsAlias,
              price: e.price || a.price,
              title: i.generalGoodsTitle,
            };
          else if ("member_goods" === t)
            o = {
              image: { url: i.goodsPic, width: 0, height: 0 },
              alias: i.goodsAlias,
              price: e.price || a.price,
              title: i.goodsTitle,
            };
          else if ("groupon" === t || "period_buy" === t)
            o = {
              image: { url: i.attachmentUrl, width: i.width, height: i.height },
              alias: i.alias,
              price: e.price || a.price,
              title: e.title,
            };
          else if (e.picture && "goods" === t) {
            var n = e.picture;
            "string" == typeof e.picture && (n = JSON.parse(e.picture)),
              (o = {
                image: n.find((t) => t.url === e.imageUrl),
                alias: e.alias,
                price: r()(
                  null == e.activityPrice ? e.price : e.activityPrice,
                  !0,
                  !1
                ),
                title: e.title,
              });
          } else
            "goods" === t &&
              e.imageUrl &&
              e.width &&
              e.height &&
              (o = {
                image: { url: e.imageUrl, width: e.width, height: e.height },
                alias: e.alias,
                price: r()(
                  null == e.activityPrice ? e.price : e.activityPrice,
                  !0,
                  !1
                ),
                title: e.title,
              });
        } catch (e) {}
        return (o._assign = !0), o;
      }
      function m(e, t) {
        var a =
          (function (e) {
            var { rankNo: t, rankType: a } = e.rankInfoDTO || {
              rankNo: "",
              rankType: "",
            };
            return t && a
              ? {
                  title: "本店" + n.l[a] + "第" + t,
                  titleColor: "var(--icon, #323233)",
                }
              : null;
          })(e) ||
          (function (e) {
            var { maxCommissionStr: t } = Object(d.a)({
                profitRange: [e.salesmanRebateMaxPrice],
                commissionSendType: e.salesmanCommissionSendType,
                commissionConfigDTO: e.salesmanCommissionConfigDTO,
                customPointsName: e.customPointsName,
              }),
              a = !!t;
            if (a || (e.extension && e.extension.openSalesmanBooth)) {
              var o = " ";
              return (
                a && (o = "最高赚 " + t),
                { title: o, titleColor: "var(--general, #ff720d)" }
              );
            }
            return null;
          })(e) ||
          (function (e) {
            var t = +e.salesmanRebatePrice,
              a = +e.guideCommission;
            if ((e.extension && e.extension.openGuideBooth) || a) {
              var o = " ";
              if (!t && a) o = "预计赚" + c()(Number(e.guideCommission)) + "元";
              return { title: o, titleColor: "#ff720d" };
            }
            return null;
          })(e) ||
          (function (e) {
            if (Object(s.a)(e, "showRecommendedCard", !0)) {
              return {
                title: e.recommendedCard || " ",
                titleColor: "var(--general, #999999)",
              };
            }
            return null;
          })(e);
        return a || t
          ? {
              _assign: !0,
              list: [
                Object(o.a)({ title: " " }, a, {
                  vMargin: 4,
                  hMargin: 0,
                  bgColor: "transparent",
                  titleFontSize: 12,
                  titleLines: 1,
                  titleFontWeight: "normal",
                  titleExtraStyle: { "line-height": 1 },
                }),
              ],
              align: "left",
            }
          : null;
      }
      function f(e, t) {
        if (t)
          return (function (e) {
            var t = e.map((e) => {
              var { labelThemeType: t, label: a, preLabel: o, type: s } = e;
              return (
                "other" === t && (e.color = "#FAAB0C"),
                { type: t, label: a, preLabel: o, labelType: s }
              );
            });
            return (
              (t = t.filter((e) => {
                var { labelType: t } = e;
                return t !== n.j;
              })).find((e) => {
                var { labelType: t } = e;
                return t && n.f.includes(t);
              }) &&
                (t = t.filter((e) => {
                  var { labelType: t } = e;
                  return t && !n.g.includes(t);
                })),
              t
            );
          })(e);
        var a,
          o,
          s,
          i = [],
          r = e.filter((e) => n.i.indexOf(e.type) < 0);
        return (
          (a = {}),
          (o = []),
          (s = []),
          (i = r
            .map((e, t) => {
              if (
                e.type === n.a.MEET_REDUCTION ||
                e.type === n.a.POSTAGE_FREE
              ) {
                var { postageFreeType: i } = e;
                if (a[0]) return o.push(t), e;
                0 == +i && (o = [...o, ...s]),
                  +i > 0 && s.push(t),
                  a[i]
                    ? +e.postageFreeThreshold >= a[i].postageFreeThreshold
                      ? o.push(t)
                      : (o.push(a[i].index),
                        (a[i] = {
                          postageFreeThreshold: +e.postageFreeThreshold,
                          index: t,
                        }))
                    : (a[i] = {
                        postageFreeThreshold: +e.postageFreeThreshold,
                        index: t,
                      });
              }
              return e;
            })
            .filter((e, t) => o.indexOf(t) < 0)),
          (i = (function (e) {
            return (
              (e = e.filter((e) => {
                var { type: t } = e;
                return t !== n.j;
              })).find((e) => {
                var { type: t } = e;
                return n.f.includes(t);
              }) &&
                (e = e.filter((e) => {
                  var { type: t } = e;
                  return !n.g.includes(t);
                })),
              e
            );
          })(r)).unshift(
            ...(function (e) {
              return e
                .filter((e) => n.i.indexOf(e.type) > -1)
                .map((e) => ({
                  preLabel: e.preLabel,
                  label: e.priceLabel,
                  type: "primary",
                }));
            })(e)
          ),
          i
        );
      }
      function b(e) {
        var {
            goods: t,
            index: a = 0,
            isUmpInfoShow: s,
            layout: i,
            needFormatPrice: l = !0,
            showExtra: c = !1,
            soldOutGoodsImg: d,
          } = e,
          { imageUrl: h, labelViewModel: p = {}, isImgCover: g } = t,
          b = "";
        2 == +t.soldStatus && 0 != +t.buyWay && (b = "soldout");
        var w = {
          _assign: !0,
          src: h,
          mask: b,
          keyLabel: void 0,
          soldOutGoodsImg: d,
          fill: g ? "cover" : "contain",
        };
        if (p.labelGroupModels) {
          var y = p.labelGroupModels.find((e) => 1 === e.type) || {},
            O = (y.labelModels && y.labelModels[0].name) || "";
          w.keyLabel = O;
        }
        var S = { title: t.title },
          v = t.extraInfo || {},
          T = t._originActivityPrice || t.activityPrice || t.price,
          k = { price: l ? r()(T, !0, !1) : T },
          _ = t._originPrice || t.price,
          x = {
            price:
              t.origin ||
              (+t.activityPrice < +_ ? (l ? r()(_, !0, !1) : _) : ""),
          },
          I = t.activityInfos || [],
          C = f(I, s),
          L = 3;
        void 0 !== i &&
          (i === n.h.THREE || i === n.h.SWIPE
            ? (L = 1)
            : i === n.h.SMALL || i === n.h.LIST
            ? (L = 2)
            : i === n.h.HYBRID && (L = a % 3 == 0 ? 3 : 2));
        var P = { _assign: !0, list: C.slice(0, L) },
          B = "",
          j = {};
        if (I && I.length) {
          var { type: A, activityAlias: G, activityId: M } = I[0] || {};
          "seckill" === A && (B = G),
            "helpCut" === A && (j = { activityId: M, umpType: A });
        }
        var { comboMark: R = {} } = t,
          N = R.isCombo && 1 === R.comboType,
          D = {
            _assign: !0,
            alias: t.alias,
            id: t.id,
            postage: t.postage,
            isVirtual: t.isVirtual,
            picture: t.imageUrl,
            link: Object(o.a)(
              { type: B ? "seckill" : "goods", alias: B || t.alias },
              j
            ),
            isOptionalCombo: N,
          },
          E = m(t, c),
          F = Object(o.a)({}, t.itemRankDTO || t.rankInfoDTO || {}),
          U = { sellPoint: t.sellPoint, totalSoldNum: t.totalSoldNum },
          H = t.goodsCartDTO
            ? Object(o.a)({}, t.goodsCartDTO, { _assign: !0 })
            : { num: 0, _assign: !0 };
        return Object(o.a)(
          {
            imgOpt: w,
            titleOpt: S,
            extraInfo: v,
            priceOpt: k,
            oPriceOpt: x,
            actionOpt: D,
            tagsOpt: P,
            goodsPreloadOpt: u(t),
          },
          t.preSale ? { activityOpt: { _assign: !0, text: "预售" } } : {},
          { extOpt: E, rankOpt: F, otherOpt: U, btnGoodsNumberOpt: H }
        );
      }
    },
    TioH: function (e, t, a) {
      var o = a("Fcif"),
        s = a("AqAW"),
        i = a("DXKY"),
        r = a("Yt9W"),
        n = a("7sy2"),
        l = a("2wjL"),
        c = a("lRMv"),
        d = a("4Kfr"),
        h = a("WOkX"),
        p = a("gc3r"),
        g = getApp();
      t.a = {
        commonBeforePageCreate(e) {
          var { slData: t } = e;
          (this.ctx.data.kdtId = g.getKdtId()),
            this.ctx.logger.setPageAsyncLog(),
            (this.ctx.data.shopBaseInfo = { kdtId: g.getKdtId() });
          var { shopMetaInfo: a = {} } = g.getShopInfoSync() || {};
          (this.ctx.data.shopMetaInfo = JSON.parse(JSON.stringify(a))),
            this.store.watch("navBarTitle", (e) => {
              this.ctx.data.navBarTitle = e;
            }),
            this.store.watch("canShowNavBar", (e) => {
              this.ctx.data.canShowNavBar = e;
            }),
            this.store.watch("listQuery", (e) => {
              this.ctx.data.listQuery = e;
            }),
            this.store.watch("filters", (e) => {
              this.ctx.data.filters = e;
            }),
            this.store.watch("themeClass", (e) => {
              this.ctx.data.themeClass = e;
            }),
            this.store.watch("totalAlias", (e) => {
              this.ctx.data.totalAlias = e;
            }),
            this.store.watch("uuid", (e) => {
              this.ctx.data.uuid = e;
            }),
            this.store.watch(
              "goodsOpt",
              (e) => {
                (this.ctx.data.goodsOpt = e),
                  (this.ctx.data.pageBgColor =
                    "list" === e.layoutOpt.type ? "#fff" : "#f7f8fa");
              },
              { deep: !0 }
            ),
            this.ctx.process.define("handleItemClick", (e) => {
              this.handleItemClick(e);
            }),
            this.ctx.process.define("showcaseHandleGoodsBuy", (e) => {
              this.showcaseHandleGoodsBuy(e);
            }),
            this.ctx.process.define("handleFilterChange", (e) => {
              this.handleFilterChange(e);
            }),
            this.ctx.process.define("handleItemImageLoaded", (e) => {
              this.handleItemImageLoaded(e);
            }),
            this.ctx.process.define("handleChangeLayoutType", (e) => {
              this.setVal(Object(o.a)({}, e));
            }),
            Object(p.a)(
              Object(o.a)(
                {
                  gst: 6,
                  getSalesmanData: (e, t) => {
                    e || (this.ctx.data.salesmanShareData = t);
                  },
                },
                t
              )
            );
        },
        commonOnLoad() {
          g._routeStack
            ? g._routeStack.push(this.route)
            : (g._routeStack = [this.route]);
        },
        commondOnShow() {
          var e = this,
            t = getCurrentPages() || [{}];
          i.a.trigger("page:lifetimes:show", { route: this.route }),
            s.a.once("goodsTag:loaded", function (a, o) {
              var { spmType: s } = void 0 === o ? {} : o;
              Object(r.d)(e.route, e.id, a, s, t);
            }),
            Object(n.d)({ path: this.route, query: this.__query__ });
        },
        commonOnHide() {
          i.a.trigger("page:lifetimes:hide", { route: this.route });
        },
        commonOnUnload() {
          var e = (g._routeStack || []).findIndex(
            (e) => this && e === this.route
          );
          -1 !== e && g._routeStack.splice(e, 1), s.a.off(null, null);
        },
        getShareData(e, t) {
          var { extra: a = {} } = t,
            s = getApp(),
            i = e.loggerParams || {};
          s.logger.log({
            et: "click",
            ei: "share",
            en: "转发",
            params: Object(o.a)({ share_cmpt: "native_custom" }, i),
          });
          var { from: r, target: n } = a,
            p = { menu: "native_wechat", button: "native_custom" }[r],
            g = e.path,
            u = l.a.getAll(g),
            { ban_default_kdt_id: m } = u,
            f = Object(o.a)({}, u, c.i, { is_share: 1, share_cmpt: p }),
            b = Object(d.a)();
          b && (f.guide_second_sharer_id = b);
          var { salesmanShareData: w } = this.ctx.data || {};
          w &&
            w.share &&
            (f = Object(o.a)({}, f, Object(h.c)({ sl: w.seller }))),
            (f.kdt_id =
              "true" === m
                ? u.kdt_id || s.getKdtId() || ""
                : s.getKdtId() || "");
          var y = s.logger.getGlobal() || {},
            O = y.context || {},
            S = y.user || {};
          O.dc_ps && (f.dc_ps = O.dc_ps || ""),
            S.uuid && (f.from_uuid = S.uuid || ""),
            s.getShopInfoSync().isMultiStore &&
              (f.offlineId = s.getOfflineId()),
            (g = l.a.add(g, f)),
            e.noOfflineId && (g = l.a.remove(g, "offlineId"));
          var v =
              "/pages/common/blank-page/index?weappSharePath=" +
              encodeURIComponent(g),
            T = Object(o.a)({}, e, { path: v });
          return (
            "salesman" === (null == n ? void 0 : n.id) &&
              (T.promise = new Promise((e) => {
                setTimeout(() => {
                  e(T);
                }, 300);
              })),
            T
          );
        },
      };
    },
    U8nN: function (e, t) {
      e.exports = { d: "kdtId;4", c: "GoodsTee", cc: "" };
    },
    UC9k: function (e, t, a) {
      var o = a("JDRw");
      a.d(t, "Biz2Dmc", function () {
        return o.a;
      }),
        a.d(t, "HAS_GOODS_SHOWCASE_PAGE_TYPES", function () {
          return o.b;
        }),
        a.d(t, "SHOWCASE_ITEM_LIST", function () {
          return o.c;
        }),
        a.d(t, "URL_PATTERN_MAP_MINI", function () {
          return o.e;
        }),
        a.d(t, "URL_PATTERN_MAP_WEB", function () {
          return o.f;
        });
      a("Wag8");
    },
    Wag8: function (e, t) {},
    "cH+H": function (e, t, a) {
      var o = { ascend: "asc", descend: "desc" },
        s = getApp();
      t.a = {
        filterBarOnLoad() {
          var e = this;
          s
            .request({
              path: "/wscshop/shop/config.json",
              data: { key: "goods_detail_sales" },
            })
            .then((e) => {
              var { goods_detail_sales: t = null } = e;
              if (t) {
                var {
                  show: a = 0,
                  limit: o = !1,
                  limit_num: i = 0,
                } = JSON.parse(t);
                this.computedFilters(a, o, i);
              } else
                s.getShopConfigData().then((e) => {
                  var { buy_record: t = 0 } = e;
                  this.computedFilters(t, !1, 0);
                });
            }),
            s.getShopConfigData().then(function (t) {
              void 0 === t && (t = {}),
                e.setVal({ soldOutGoodsImg: t.sold_out_goods_flag });
            });
        },
        computedFilters(e, t, a) {
          var o = this.filters.slice(),
            i = s.getOfflineId(),
            r = s.getOfflineSeparatePrice(),
            n = 0 == +i || (i && 0 == +r);
          n &&
            o.splice(1, 0, {
              title: "价格",
              value: "activityPrice",
              type: "sort",
              sortDirection: "ascend",
            }),
            1 == +e && o.splice(1, 0, { title: "销量", value: "totalSoldNum" }),
            (1 == +e || n) &&
              this.setVal({
                filters: o,
                isLimitSold: t,
                limitSoldNum: +a,
                "goodsOpt.itemCardOpt.soldNumOpt": +e ? {} : null,
              });
        },
        handleFilterChange(e) {
          var {
              detail: { filter: t },
            } = e,
            a = t.value !== this.orderBy || o[t.sortDirection] !== this.order;
          this.setVal({
            page: 1,
            orderBy: t.value,
            totalAlias: a ? [] : this.totalAlias,
            order: o[t.sortDirection] || "",
          }),
            wx.pageScrollTo({ scrollTop: 0, duration: 0 }),
            this.fetchProductList();
        },
      };
    },
    cZBx: function (e, t, a) {
      a.d(t, "a", function () {
        return s;
      });
      var o = a("US/N");
      function s(e) {
        return Object(o.default)({
          method: "GET",
          path: "/wscstatcenter/recommend/float-goods.json",
          data: e,
          errorMsg: "获取商品悬浮窗图标信息错误",
          config: { noQuery: !0 },
          options: { useCdn: !0 },
        });
      }
    },
    d9dF: function (e, t, a) {
      t.a = class {
        constructor(e) {
          var { ctx: t } = e;
          this.ctx = t;
        }
      };
    },
    dHkL: function (e, t, a) {
      a.d(t, "a", function () {
        return o;
      });
      class o {}
    },
    iMae: function (e, t, a) {
      t.a = class {
        constructor(e) {
          var { ctx: t } = e;
          this.ctx = t;
        }
      };
    },
    jS8r: function (e, t, a) {
      a.d(t, "a", function () {
        return l;
      }),
        a.d(t, "b", function () {
          return c;
        });
      var o = a("Fcif"),
        s = a("tuFO"),
        i = a.n(s),
        r = a("JDRw");
      function n(e) {
        var { kdtId: t, oid: a, pathSuffix: o } = e;
        return i()(r.d + "/" + o + "?kdtId=" + t + "&oid=" + a, "h5", t);
      }
      function l(e) {
        var { showcaseItemList: t, kdtId: a, oid: s } = e;
        return t.map((e) =>
          Object(o.a)({}, e, {
            moreUrl: n({ kdtId: a, oid: s, pathSuffix: e.pathSuffix }),
          })
        );
      }
      function c(e, t) {
        var a = 0;
        return (
          Object.keys(e).some((o) =>
            e[o].some((e) => !!e.test(t) && ((a = Number(o)), !0))
          ),
          a
        );
      }
    },
    jTuQ: function (e, t) {
      e.exports = {
        d: "cpsConfigKey;2;kdtId;2;shopMetaInfo;2;shopBaseInfo;2;shopBlockInfo;2;showTab;2;navBarTitle;2;canShowNavBar;2;listQuery;2;totalAlias;2;filters;2;themeClass;2;goodsOpt;2;uuid;2;goods_detail;2;listType;2;pageBgColor;2;themeVars;2;themeTagObj;2;themeCSS;4;themeTag;4",
        e: "featureSku:show",
        w: "GoodsListAllPageSetup",
        wc: "SearchBar;FilterBar;ShareTab;DcGoods;ShopStatus;ShopTopBar;ShopBlock;featureSku",
        p: "handleItemClick;showcaseHandleGoodsBuy;handleFilterChange;handleChangeLayoutType;handleItemImageLoaded",
        pi: "autoEnterShop",
        li: "beforePageCreate;beforePageMount;onPageShow;onReachBottom;onPullDownRefresh;onShareAppMessage;onPageScroll",
      };
    },
    jURq: function (e, t) {
      e.exports = {
        d: "openFloatGoods;2;themeVars;4;kdtId;4;buyerId;4;offlineId;4;shopMetaInfo;4;hasGoodsShowcase;4",
        e: "",
        el: "goods:showcase",
        w: "GoodsShowcase",
        wc: "",
        wd: "GoodsShowcase",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    oNZJ: function (e, t, a) {
      a.d(t, "m", function () {
        return s;
      }),
        a.d(t, "q", function () {
          return i;
        }),
        a.d(t, "h", function () {
          return r;
        }),
        a.d(t, "d", function () {
          return n;
        }),
        a.d(t, "c", function () {
          return l;
        }),
        a.d(t, "f", function () {
          return c;
        }),
        a.d(t, "g", function () {
          return d;
        }),
        a.d(t, "a", function () {
          return h;
        }),
        a.d(t, "i", function () {
          return p;
        }),
        a.d(t, "j", function () {
          return g;
        }),
        a.d(t, "p", function () {
          return u;
        }),
        a.d(t, "n", function () {
          return m;
        }),
        a.d(t, "e", function () {
          return w;
        }),
        a.d(t, "b", function () {
          return S;
        }),
        a.d(t, "o", function () {
          return v;
        }),
        a.d(t, "k", function () {
          return T;
        }),
        a.d(t, "l", function () {
          return k;
        });
      var o = a("Fcif"),
        s = {
          0: "card",
          1: "waterfall",
          2: "simple",
          3: "promotion",
          4: "multi",
          5: "card2",
          6: "points",
          7: "card-shadow",
          8: "tag-left",
        },
        i = { WATERFALL: "waterfall", SAMPLE: "simple" },
        r = { BIG: 0, SMALL: 1, HYBRID: 2, LIST: 3, THREE: 5, SWIPE: 6 },
        n = { HORIZONTAL: "horizontal", VERTICAL: "vertical" },
        l = {
          1: { name: "cart-o", type: "icon", size: 24 },
          2: { type: "icon", name: "add-o" },
          3: {
            corner: "circle",
            name: "马上抢",
            theme: "primary",
            type: "btn",
          },
          4: { type: "btn", name: "购买" },
        },
        c = ["customerDiscount", "mergedCustomerDiscount"],
        d = [
          "seckill",
          "limitTimeDiscount",
          "groupon",
          "tuan",
          "helpCut",
          "helpDepositExpansion",
          "coupon",
        ],
        h = {
          MEET_REDUCTION: "MEET_REDUCTION",
          SECKILL: "SECKILL",
          LIMIT_TIME_DISDCOUNT: "LIMIT_TIME_DISDCOUNT",
          BALE: "BALE",
          DEPOSIT_EXPANSION: "DEPOSIT_EXPANSION",
          HELP_DEPOSIT_EXPANSION: "HELP_DEPOSIT_EXPANSION",
          GROUPON: "GROUPON",
          POSTAGE_FREE: "POSTAGE_FREE",
          SECOND_HALF: "SECOND_HALF",
          TUAN: "TUAN",
          CUSTOMER_DISCOUNT: "CUSTOMER_DISCOUNT",
          MERGED_CUSTOMER_DISCOUNT: "MERGED_CUSTOMER_DISCOUNT",
          HELP_CUT: "HELP_CUT",
          COUPON: "COUPON",
          RECOMMENDED_CARD: "RECOMMENDED_CARD",
        },
        p = ["SECKILL", "GROUPON", "LIMIT_TIME_DISDCOUNT", "TUAN"],
        g = "recommendedCard",
        u = {
          [r.BIG]: 16,
          [r.SMALL]: 13,
          [r.HYBRID]: 13,
          [r.LIST]: 14,
          [r.THREE]: 13,
          [r.SWIPE]: 13,
        },
        m = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              type: "card",
              layoutType: "two",
              layout: n.VERTICAL,
              corner: "rect",
              imgOpt: { useSkeleton: !0 },
              textAreaOpt: {
                skeletonList: [
                  {
                    skeletonStyle:
                      "width: 100%;margin: 2px 0 8px 0;--skeleton-row-height: " +
                      (e.oneHeight || 20) +
                      "px",
                  },
                  {
                    skeletonStyle:
                      "height: 16px;margin-top: 6px; width: " +
                      (e.twoWidth || 100) +
                      "px;",
                  },
                  {
                    skeletonStyle:
                      "width: " +
                      (e.threeWidth || 60) +
                      "px;margin: " +
                      (e.threeMargin || "8px 0 12px 0") +
                      ";--skeleton-row-height: 20px",
                  },
                ],
                textAreaHeight: e.areaHeight || 98,
                useSkeleton: !0,
              },
            }
          );
        },
        f = {
          hMargin: 0,
          height: "44px",
          titleFontSize: 13,
          titleFontWeight: "400",
          titleLines: 2,
          vMargin: 0,
        },
        b = {
          layoutType: "two",
          align: "left",
          btnOpt: l[1],
          layout: n.VERTICAL,
          type: "card",
          corner: "circle",
          theme: "theme",
          imgOpt: {
            fill: "contain",
            ratio: "1-1",
            showKeyLabel: !0,
            needPreload: !0,
          },
          priceOpt: { fontSize: 18, fontWeight: "400", tagGap: 2 },
          oPriceOpt: { color: "#c8c9cc", delLine: !0, fontSize: 12, tagGap: 2 },
          tagsOpt: { textAlign: "left" },
          titleOpt: f,
          preSaleGoodsLabel: "0",
        },
        w = {
          0: "one",
          1: "two",
          2: "hybrid",
          3: "list",
          5: "three",
          6: "swipe",
        },
        y = { type: "two", itemMargin: 8, layoutMargin: 8 },
        O = {
          type: "goods",
          isSync: !0,
          loading: !1,
          items: [],
          triggerCreateInit: !0,
        },
        S = Object(o.a)({}, O, {
          itemCardOpt: b,
          layoutOpt: y,
          skeletonOpt: { two: m() },
          isShowGoodsAddNumber: !0,
        }),
        v = Object(o.a)({}, O, {
          itemCardOpt: b,
          layoutOpt: y,
          isShowGoodsAddNumber: !0,
        }),
        T =
          (Object(o.a)({}, O, {
            itemCardOpt: Object(o.a)({}, b, {
              titleOpt: Object(o.a)({}, f, {
                height: "48px",
                titleFontSize: 14,
              }),
              layoutType: "one",
              layout: n.HORIZONTAL,
            }),
            layoutOpt: Object(o.a)({}, y, { type: "one" }),
            skeletonOpt: {
              default: Object(o.a)(
                {},
                m({
                  oneHeight: 16,
                  twoWidth: 16,
                  threeWidth: 73,
                  threeMargin: "60px 0 12px 0",
                  areaHeight: 0,
                }),
                { layoutType: "one", layout: n.HORIZONTAL }
              ),
            },
          }),
          Object(o.a)({}, O, {
            itemCardOpt: b,
            layoutOpt: Object(o.a)({}, y, { type: "two" }),
            skeletonOpt: { two: m() },
            isShowGoodsAddNumber: !0,
          })),
        k = { hot_sale: "销量榜", popular: "人气榜", new_arrival: "新品榜" };
    },
    onYG: function (e) {
      e.exports = JSON.parse("{}");
    },
    rd5n: function (e, t, a) {
      a.d(t, "a", function () {
        return r;
      });
      a("Fcif");
      var o = a("taYb"),
        s = (a("2wjL"), a("a1Mm")),
        i = a("GFa9");
      a("DXqK"), a("1Uvd"), a("xyw3"), a("AqAW"), getApp();
      o.a.toCamelCase, o.a.toSnakeCase, s.a;
      function r(e) {
        i.a.navigate({ url: e });
      }
    },
    "uky+": function (e) {
      e.exports = JSON.parse("{}");
    },
    "vf+9": function (e, t, a) {
      var o = a("Fcif"),
        s = a("XCh3"),
        i = a("QLod"),
        r = a("F9Sv"),
        n = {
          search: {
            et: "view",
            ei: "search_goods_view",
            en: "商品数据曝光-小程序",
            pt: "GoodsSearch",
          },
          tags: {
            et: "view",
            ei: "tags_goods_view",
            en: "商品数据曝光-小程序",
            pt: "GoodsTags",
          },
          allpro: {
            et: "view",
            ei: "all_goods_view",
            en: "商品数据曝光-小程序",
            pt: "GoodsAll",
          },
        },
        l = getApp();
      t.a = {
        getUUid() {
          var { user: { uuid: e } = {} } = l.logger.getGlobal() || {};
          this.setVal({ uuid: e || "" });
        },
        setGoodsViewLog(e, t) {
          if ((void 0 === t && (t = "search"), e.length)) {
            var a = {
              slg: (e[0].extraInfo && e[0].extraInfo.slg) || "",
              alg_id: (e[0].extraInfo && e[0].extraInfo.alg) || "",
            };
            "search" !== t && ((a.words = ""), (a.words_type = "")),
              l.logger.setContext(a, 30),
              setTimeout(() => {
                l.logger.log(
                  Object.assign(n[t], { params: { goods: this.formatData(e) } })
                ),
                  Object(s.a)(Object(s.b)("view", this.formatLoggerList(e)));
              }, 1e3);
          }
        },
        formatData(e) {
          var t = e.map(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                goods_id: (e.actionOpt || {}).alias,
                goods_name: (e.titleOpt || {}).title,
              }
            );
          });
          return JSON.stringify(t);
        },
        formatLoggerList(e) {
          var t = [];
          return (
            e.forEach(function (e) {
              void 0 === e && (e = {}),
                t.push((e.actionOpt || {}).loggerParams);
            }),
            t
          );
        },
        triggerLogger(e, t) {
          this.slgStatus &&
            (this.setVal({ slgStatus: !1 }),
            setTimeout(() => {
              this.ctx.logger.setPageInitConfig({
                pageType: t,
                eventParams: { slg: e },
              });
            }, 0));
        },
        handleRootTap(e) {
          if (!this.route) {
            var t = getCurrentPages() || [];
            this.route = t[t.length - 1].route;
          }
          var a = Object(i.d)(this.route),
            s = Object(r.a)(e, { supportCustomNav: a });
          null !== s &&
            l.logger.log({
              et: "custom",
              ei: "hot_click",
              en: "热力图点击",
              si: l.getKdtId(),
              params: Object(o.a)({ is_fix: 0 }, s),
            });
        },
      };
    },
    w0Oi: function (e, t) {
      e.exports = {
        d: "shopBlockInfo;6;stickyHeight;6",
        w: "ShopBlockMain",
        li: "",
      };
    },
    yUw6: function (e, t, a) {
      a.d(t, "a", function () {
        return r;
      }),
        a.d(t, "b", function () {
          return n;
        });
      var o = a("Fcif"),
        s = a("8B9M"),
        i = (e) => {
          var { user: { uuid: t } = {} } = e.logger.getGlobal() || {};
          return t;
        },
        r = (e) => {
          var t = Object(s.a)(),
            { keyword: a, exhibitionTag: r = !1, type: n, extra: l = {} } = e;
          return Object(o.a)(
            {
              page_size: 20,
              page: 1,
              keyword: encodeURIComponent(a),
              order_by: "",
              offline_id: t.getOfflineId(),
              from: "weapp",
              support_paid_content: !0,
              json: 1,
              openIndependentPrice: t.getOfflineSeparatePrice(),
              activityPriceIndependent: 1,
              uuid: i(t),
              words_type: n,
              showMultiStagePromotion: r,
              needGoodsRank: !0,
            },
            l
          );
        },
        n = (e) => {
          var t = Object(s.a)(),
            { alias: a } = e || {};
          return {
            alias: a,
            pageSize: 20,
            page: 1,
            order_by: "",
            offline_id: t.getOfflineId(),
            json: 1,
            isShowPeriod: 1,
            openIndependentPrice: t.getOfflineSeparatePrice(),
            activityPriceIndependent: 1,
            uuid: i(t),
            tagAlias: a,
            needGoodsRank: !0,
            supportCombo: !0,
            excludedComboSubType: '["none"]',
          };
        };
    },
    yiu3: function (e, t) {
      e.exports = { w: "SearchBarMain", li: "" };
    },
    zNNd: function (e, t) {
      e.exports = {
        d: "showShareFloating;6;listQuery;6;totalAlias;6",
        w: "ShareFloatingMain",
        li: "",
      };
    },
  });
