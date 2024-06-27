"use strict";
var r = require("~/r");
r(
  "Keyw",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Keyw: function (t, e, i) {
      i.r(e);
      var o = i("eijD"),
        s = i("Fcif"),
        r = i("9ZMt"),
        a = i("zMoS"),
        n = i("0hwI"),
        p = i("/XVY"),
        l = Object(p.a)({
          type: { default: "" },
          itemIds: { default: () => [] },
          queryExtra: { default: () => ({}) },
          loadMore: { default: "0" },
          pageType: {},
          showMoreButton: { default: !1 },
          items: {},
          isSync: { default: !1 },
          loading: { default: !1 },
        }),
        h = i("R7Zb"),
        u = 0,
        d = 2,
        g = 5,
        c = 6,
        m = {
          methods: {
            getSkeletonNumber: (t) =>
              +t === g || +t === d || +t === c ? 3 : +t === u ? 1 : 2,
          },
        },
        y = i("/3Ts"),
        L = i("bs6A"),
        O = i("yDO/"),
        f = i("2Dtx"),
        { useTpx: v } = r.default.style,
        w = {
          computed: {
            capLayoutStyle() {
              var { layoutMargin: t, itemMargin: e } = this.capLayoutOpt,
                i = v(-e / 2),
                o = v(t);
              return Object(f.a)({ padding: "0 " + o, margin: "0 " + i });
            },
          },
        },
        S = i("pF6A"),
        b = i("MLLI"),
        k = i("VdoR"),
        I = r.default.getApp(),
        _ = {
          mixins: [Object(h.a)({ optDesc: l }), L.a, m, w, S.a],
          props: {
            kdtId: Number,
            uuid: { type: String, default: "" },
            cloudLoggerField: { type: Array, default: () => [] },
          },
          data: () => ({
            curList: [],
            loading: !1,
            finished: !1,
            outCountdownOpt: null,
            showLoadMore: !1,
            heightStyle: "",
            direction: "",
            preListLength: 0,
          }),
          logicData: () => ({
            page: 1,
            moreLinkOpt: null,
            showSwipeLoadMore: !1,
            isTagsShow: !1,
            hasShowAll: !1,
            slg: "",
          }),
          computed: {
            dcGoodsStyle() {
              var t,
                e,
                { opt: i } = this,
                { itemCardOpt: o, layoutOpt: s } = this.opt,
                { type: r, layout: a } = o,
                { type: n, itemMargin: p } = s,
                l = Number(12 - p / 2),
                h =
                  null != (t = i.goodsComponentOpt) && t.style
                    ? i.goodsComponentOpt.style
                    : "";
              ("card" !== r && "border" !== r) ||
                "horizontal" !== a ||
                "one" !== n ||
                (h =
                  "background: #fff;padding: " +
                  (null != (e = this.waterfallListParts) && e.length ? l : 0) +
                  "px 0;" +
                  h);
              return h;
            },
            isUmpGoods() {
              var { type: t } = this.opt;
              return (
                "ump_limitdiscount" === t ||
                "ump_seckill" === t ||
                "member_goods" === t ||
                "groupon" === t ||
                "points_goods" === t ||
                "period_buy" === t ||
                "bargain" === t
              );
            },
            shouldTagsShow() {
              var t, e;
              return this.currentIsPreLoadShow
                ? !(
                    null == (t = this.opt) ||
                    null == (e = t.itemCardOpt) ||
                    !e.tagsOpt
                  )
                : this.isTagsShow;
            },
            shouldShowVanListLoading() {
              return (
                (!this.opt.preLoadGoodsInfoOpt ||
                  !this.opt.preLoadGoodsInfoOpt.length) &&
                this.loading
              );
            },
            capLayoutOpt() {
              var {
                layoutOpt: t,
                queryExtra: { layout: e = 0 },
              } = this.opt;
              return (
                t && "swipe" === t.type && (t.canUseScrollView = !1),
                Object(s.a)({ layout: e }, t)
              );
            },
            isLimitdDiscount() {
              return "ump_limitdiscount" === this.opt.type;
            },
            isGroupon() {
              return "groupon" === this.opt.type;
            },
            isLimitdDiscountOrGroupon() {
              return this.isLimitdDiscount || this.isGroupon;
            },
            isWaterfall() {
              var {
                itemCardOpt: { type: t },
              } = this.opt;
              return t === O.b.WATERFALL;
            },
            isSwipeMoreBtnShow() {
              return (
                "ump_limitdiscount" !== this.opt.type &&
                (this.hasShowAll ? this.hasShowAll : this.showSwipeLoadMore)
              );
            },
            isMoreBtnShow() {
              return (
                ("groupon" !== this.opt.type &&
                  "points_goods" !== this.opt.type) ||
                this.opt.showMoreButton
              );
            },
            waterfallListParts() {
              return this.addSkeletonList.reduce((t, e, i) => {
                var o = i % O.i;
                return (
                  t[o]
                    ? t[o].push(Object(s.a)({}, e, { itemIndex: o }))
                    : (t[o] = [Object(s.a)({}, e, { itemIndex: o })]),
                  t
                );
              }, []);
            },
            isSwipeLayout() {
              var {
                layoutOpt: { type: t },
              } = this.opt;
              return t === O.f.SWIPE;
            },
            isSwipeGoodsOptional() {
              var { type: t, itemIds: e } = this.opt;
              return !!("goods" === t && e && e.length && this.isSwipeLayout);
            },
            moreButtonOpt() {
              var {
                layoutOpt: { itemMargin: t },
                itemCardOpt: { corner: e },
              } = this.opt;
              return {
                corner: e,
                text:
                  this.isSwipeGoodsOptional || this.hasShowAll
                    ? "查看全部"
                    : "查看更多",
                loading: this.loading,
                margin: t / 2,
                isSwipe: this.isSwipeLayout,
              };
            },
            useLoadMore() {
              return this.opt.loadMore === O.g.ON;
            },
            isAutoFetch() {
              var { activitySource: t, goodsSource: e } =
                this.opt.queryExtra || {};
              switch (!0) {
                case this.isLimitdDiscount:
                  return t === O.a.auto;
                case this.isGroupon:
                  return e === O.d.auto;
                default:
                  return !1;
              }
            },
            currentIsPreLoadShow() {
              return (
                !this.curList.length &&
                this.opt.preLoadGoodsInfoOpt &&
                this.opt.preLoadGoodsInfoOpt.length
              );
            },
            addSkeletonList() {
              var t,
                e = {
                  isTagsShow: this.shouldTagsShow,
                  useSkeleton: !0,
                  compType: this.opt.type,
                  layoutOpt: this.opt.layoutOpt,
                  queryExtra: this.opt.queryExtra,
                };
              if (this.currentIsPreLoadShow)
                return this.opt.preLoadGoodsInfoOpt.map((t, i) =>
                  Object(s.a)({}, t, e, {
                    itemIndex: i,
                    layoutItemWrapStyle: this.getCapLayoutItemWrapStyle(i),
                  })
                );
              var { skeletonOpt: i } = this.opt,
                o = (t, e, i) =>
                  Object(s.a)({}, t[e], {
                    textAreaOpt: Object(s.a)({}, t[e].textAreaOpt, {
                      textAreaStyle: "height: auto;",
                    }),
                  }),
                r = [];
              if ((this.loading || this.opt.loading) && i) {
                (this.curList || []).length &&
                  this.curList[this.curList.length - 1];
                if (i.default) r.push(i.default);
                else if (i.two)
                  (this.curList || []).length % 2 == 0
                    ? (r.push(i.two), r.push(i.two))
                    : r.push(o(i, "two"));
                else if (i.three) {
                  var a = (this.curList || []).length % 3;
                  if (0 === a)
                    r.push(i.three), r.push(i.three), r.push(i.three);
                  else {
                    var n = o(i, "three");
                    2 === a ? r.push(n) : r.push(n, n);
                  }
                } else if (i.hybrid) {
                  var p = (this.curList || []).length % 3;
                  if (0 === p) r.push(i.hybrid.one);
                  else {
                    var l = o(i.hybrid, "two");
                    2 === p ? r.push(l) : r.push(l, l);
                  }
                }
              }
              var h = [...this.curList, ...r].map((t, i) => {
                var o = !1;
                return (
                  "soldout" === t.imgOpt.mask &&
                    "2" === e.queryExtra.showSoltOutDisplay &&
                    (o = !0),
                  Object(s.a)({}, t, e, {
                    itemIndex: i,
                    layoutItemWrapStyle: this.getCapLayoutItemWrapStyle(i),
                    isShowOutGoods: o,
                    preventBuyClickItem: this._opt.preventBuyClickItem || !1,
                  })
                );
              });
              if (
                (null == (t = this.opt.layoutOpt) ? void 0 : t.type) ===
                O.f.HYBRID
              ) {
                for (var u = [], d = 0; d < h.length; d++)
                  d % 3 == 0
                    ? u.push(h[d])
                    : d % 3 == 1 &&
                      (u.push({
                        type: "hybrid-line",
                        items: [
                          Object(s.a)({}, h[d], { hybridSmall: !0 }),
                          Object(s.a)({}, h[d + 1], { hybridSmall: !0 }),
                        ].filter((t) => t.type),
                      }),
                      d++);
                h = u;
              }
              return h;
            },
            isShowGoodsAddNumber() {
              var t;
              return (
                (null == (t = this._opt) ? void 0 : t.isShowGoodsAddNumber) ||
                !1
              );
            },
          },
          watch: {
            opt() {
              this.init();
            },
            kdtId() {
              this.init();
            },
          },
          created() {
            var t, e, i;
            (this._h_c = Date.now()),
              (null == (t = this.opt) ||
                !t.isSync ||
                (null != (e = this.opt) &&
                  null != (i = e.items) &&
                  i.length)) &&
                ((this.hasLogMonitor = !0),
                k.a.start({ name: "商品组件渲染" }));
            var o = this.isSwipeLayout ? O.c.SWIPE : O.c.UP;
            if (
              ((this.direction = o),
              this.opt.preLoadGoodsInfoOpt &&
                this.opt.preLoadGoodsInfoOpt.length)
            ) {
              var {
                capLayoutOpt: s,
                isWaterfall: r,
                addSkeletonList: a,
                capLayoutStyle: n,
                capLayoutItemStyle: p,
                opt: l,
              } = this;
              this.setData(
                {
                  opt: { layoutOpt: { type: l.layoutOpt.type } },
                  direction: o,
                  isWaterfall: r,
                  capLayoutOpt: s,
                  addSkeletonList: a,
                  capLayoutStyle: n,
                  capLayoutItemStyle: p,
                },
                { immediate: !0 }
              ),
                Promise.resolve().then(() =>
                  this.$emit("component-loaded", {
                    f: "goods",
                    goodsTime: Date.now() - this._h_c,
                  })
                );
            }
            this._opt.triggerCreateInit && this.getListData();
            var h = this.fetchList();
            Promise.resolve(h).then(() => {
              this.$nextTick(() => {
                this.$emit("component-loaded", {
                  f: "goodsFetch",
                  goodsFetchTime: Date.now() - this._h_c,
                });
              });
            });
          },
          methods: {
            init() {
              var t, e, i, o;
              (this.preListLength =
                null == (t = this.curList) ? void 0 : t.length),
                (this.curList = []),
                (this.page = 1),
                (this.loading = !1),
                (this.finished = !1),
                (this.moreLinkOpt = null),
                (this.outCountdownOpt = null),
                (this.showLoadMore = !1),
                (this.showSwipeLoadMore = !1),
                (this.hasShowAll = !1),
                (this.randomKey = Math.random()),
                this.getListData(),
                null != (e = this.opt) &&
                  e.isSync &&
                  null != (i = this.opt) &&
                  null != (o = i.items) &&
                  o.length &&
                  !this.hasLogMonitor &&
                  ((this.hasLogMonitor = !0),
                  k.a.start({ name: "商品组件渲染" }));
            },
            onPullDownRefresh() {
              this.opt.isSync || this.init();
            },
            formatListData(t) {
              var e,
                i,
                o,
                s,
                r =
                  (null == (e = this.opt) || null == (i = e.layoutOpt)
                    ? void 0
                    : i.type) || "";
              return (
                (this.slg =
                  null == (o = t[0]) || null == (s = o.extraInfo)
                    ? void 0
                    : s.slg),
                t.map((t, e) => {
                  var i = Object(y.a)(this.opt.itemCardOpt, t);
                  return (
                    i.countdownOpt &&
                      this.isLimitdDiscount &&
                      ((r !== O.f.THREE && r !== O.f.SWIPE) ||
                        (0 === e &&
                          ((i.countdownOpt.layout = "out"),
                          (this.outCountdownOpt = i.countdownOpt)),
                        delete i.countdownOpt)),
                    i
                  );
                })
              );
            },
            getListData() {
              if (this.opt.isSync) {
                var { items: t } = this.opt;
                return (
                  (this.finished = !0),
                  (this.curList = this.formatListData(t)),
                  void this.$nextTick(() => {
                    this.initCardHeight();
                  })
                );
              }
              this.fetchList();
            },
            fetchList() {
              var t = this;
              return Object(o.a)(function* () {
                var { itemIds: e = [], queryExtra: i, isSync: o } = t.opt;
                if (!o)
                  if (
                    "ump_limitdiscount" === i.type &&
                    "0" !== i.activitySource &&
                    e &&
                    0 === e.length
                  )
                    t.finished = !0;
                  else if (!t.hasShowAll && !t.loading) {
                    t.loading = !0;
                    var { pageSize: r = O.h } = i;
                    "tag_list_top" !== i.type ||
                      i.isShowAll ||
                      6 !== i.layout ||
                      (r =
                        i.goodsNumber < 10
                          ? i.goodsNumber
                          : i.goodsNumber > 10 * t.page
                          ? 10
                          : i.goodsNumber - 10 * (t.page - 1)),
                      "member_goods" === i.type &&
                        0 == +i.goodsFrom &&
                        (r = (e && e.length) || 30);
                    var a = Object(s.a)({}, i, {
                      page: t.page,
                      pageSize: r,
                      requestId: I.globalData.wscHomeRequestId || "",
                      supportCombo: !0,
                    });
                    if (e && e.length > 0) {
                      var p = (t.page - 1) * r,
                        l = e.slice(p, p + r).join(",");
                      if (((a.itemIds = l), 0 === l.length))
                        return (t.loading = !1), void (t.finished = !0);
                    }
                    var h,
                      { randomKey: u } = t;
                    try {
                      var {
                        list: d = [],
                        hasMore: g,
                        extra: c = {},
                        hasSwipeMoreBtn: m = !1,
                      } = yield ((h = a),
                      n.a.get({ url: "/wscdeco/tee/goods.json", data: h }));
                      if (
                        (1 == +a.page &&
                          0 === d.length &&
                          k.a.end({ type: "finish", name: "商品组件渲染" }),
                        t.randomKey !== u)
                      )
                        return;
                      var { moreLinkOpt: y } = c;
                      (t.moreLinkOpt = y),
                        t.isSwipeGoodsOptional &&
                          (t.moreLinkOpt = { type: "allgoods" }),
                        (t.curList = t.curList.concat(t.formatListData(d))),
                        t.$nextTick(() => {
                          t.initCardHeight(), t.goodsViewLogger(d);
                        }),
                        (t.finished =
                          t.isGroupon && !t.isAutoFetch
                            ? +r * t.page >= e.length
                            : !g),
                        "tag_list_top" === i.type &&
                          t.curList.length >= i.goodsNumber &&
                          ((t.finished = !0),
                          (t.curList = t.curList.slice(0, i.goodsNumber))),
                        t.page++,
                        (t.loading = !1),
                        t.page > 2 &&
                          g &&
                          t.isSwipeLayout &&
                          "ump_limitdiscount" !== t.opt.type &&
                          "goods" !== t.opt.type &&
                          (t.hasShowAll = !0),
                        t.finished &&
                          t.moreLinkOpt &&
                          setTimeout(() => {
                            t.showLoadMore = !0;
                          }, 1e3),
                        t.isSwipeLayout &&
                          ("goods" === t.opt.type
                            ? (t.showSwipeLoadMore = m)
                            : (t.showSwipeLoadMore =
                                t.curList.length && !t.finished)),
                        g &&
                          !t.isSwipeLayout &&
                          t.$nextTick(() => {
                            var { windowHeight: e } = Object(b.b)();
                            t.createSelectorQuery()
                              .select(".dc-goods")
                              .boundingClientRect((i) => {
                                i &&
                                  i.bottom >= 0 &&
                                  i.bottom <= e - 100 &&
                                  t.fetchList();
                              })
                              .exec();
                          });
                    } catch (e) {
                      (t.finished = !0),
                        (t.loading = !1),
                        k.a.end({
                          name: "商品组件渲染",
                          type: "error",
                          detail: { error: e },
                        });
                    }
                  }
              })();
            },
            goodsViewLogger(t) {
              if (this.isLimitdDiscountOrGroupon || "goods" === this.opt.type) {
                var e = t.map((t) => {
                  var e,
                    i,
                    o,
                    r = (this.cloudLoggerField || []).reduce((e, i) => {
                      var o,
                        r = {};
                      "img_url" === i &&
                        (r.img_url =
                          null == t || null == (o = t.imgOpt) ? void 0 : o.src);
                      if ("page_url" === i) {
                        var a,
                          n = getCurrentPages();
                        r.page_url =
                          null == (a = n[n.length - 1]) ? void 0 : a.route;
                      }
                      return Object(s.a)({}, e, r);
                    }, {}),
                    a = null == t || null == (e = t.actionOpt) ? void 0 : e.id;
                  return Object(s.a)(
                    {
                      goods_id: a,
                      item_id: a,
                      item_type:
                        (null == t || null == (i = t.itemType)
                          ? void 0
                          : i.type) || "goods",
                      banner_id: this.getBannerId(),
                      component: this.getLoggerComponentName(),
                      ump_params: this.getMarketingActivity(t),
                      good_title:
                        null == t || null == (o = t.titleOpt)
                          ? void 0
                          : o.title,
                    },
                    r
                  );
                });
                this.sendComponentLogger("logger", {
                  et: "view",
                  ei: "view",
                  en: "商品曝光",
                  params: { view_objs: e },
                });
              }
            },
            getMarketingActivity(t) {
              var { tagsOpt: e } = t;
              return ((null == e ? void 0 : e.list) || []).map((t) => ({
                activity_type: t.labelType,
              }));
            },
            getItemClickOpt(t) {
              var e,
                { type: i, queryExtra: o } = this.opt,
                r = Object(a.a)(o, "grouponType");
              "groupon" === i &&
                r === O.e.LUCKY &&
                t &&
                t.link &&
                (t.link.query = { type: "luckyDrawGroup", activityId: t.id });
              var { umpType: n, activityId: p } = t.link || {},
                l = {};
              return (
                n && p && (l = { activityId: p, umpType: n }),
                Object(s.a)({}, t, {
                  link: Object(s.a)({}, t.link || {}, {
                    query: Object(s.a)(
                      {},
                      (null == (e = t.link) ? void 0 : e.query) || {},
                      l,
                      { bannerId: this.getBannerId(), slg: this.slg },
                      this.getComponentLoggerExtraParams()
                    ),
                  }),
                })
              );
            },
            handleBuyClick(t) {
              this.clickBuyButtonLogger(t);
              var { isVirtual: e } = t;
              this.isUmpGoods ||
              3 == +e ||
              31 === (null == t ? void 0 : t.goodsType)
                ? this.$emit("item-click", this.getItemClickOpt(t))
                : this.$emit("button-click", t);
            },
            clickBuyButtonLogger(t) {
              try {
                var e = this.getLoggerComponentName();
                if (
                  ![
                    "limitdiscount",
                    "groupon",
                    "goods",
                    "tag_list_top",
                  ].includes(e)
                )
                  return;
                this.sendComponentLogger("logger", {
                  et: "click",
                  ei: "click_buy",
                  en: "点击购买",
                  params: {
                    component: e,
                    banner_id: this.getBannerId(),
                    ump_params: this.getMarketingActivity(t),
                    slg: this.slg,
                  },
                });
              } catch (t) {}
            },
            handleItemClick(t) {
              this.openDetailLogger(t),
                this.$emit("item-click", this.getItemClickOpt(t));
            },
            openDetailLogger(t) {
              try {
                var e = this.getLoggerComponentName();
                if (
                  ![
                    "limitdiscount",
                    "groupon",
                    "goods",
                    "tag_list_top",
                  ].includes(e)
                )
                  return;
                var { itemId: i, id: o, title: s = "" } = t;
                if (!i && !o) return;
                this.sendComponentLogger("logger", {
                  et: "click",
                  ei: "open_goods",
                  en: "打开商品详情",
                  params: {
                    component: e,
                    goods_id: i || o,
                    goods_name: s,
                    banner_id: this.getBannerId(),
                    ump_params: this.getMarketingActivity(t),
                    slg: this.slg,
                  },
                });
              } catch (t) {}
            },
            handleMoreClick() {
              this.moreLinkOpt &&
                this.$emit("item-click", { link: this.moreLinkOpt });
            },
            initCardHeight() {
              var { type: t, layoutOpt: e, itemCardOpt: i } = this.opt;
              if (t !== O.b.WATERFALL && e && e.type === O.f.TWO) {
                var o = 0;
                i.type === O.b.BORDER && e.type === O.f.TWO && (o = 2),
                  setTimeout(() => {
                    var t =
                      "web" === r.default.getEnv()
                        ? ".dc-goods .cap-item-card"
                        : ".dc-goods >>> .cap-item-card";
                    this.createSelectorQuery()
                      .select(t)
                      .boundingClientRect((t) => {
                        t &&
                          t.height > 0 &&
                          (this.heightStyle =
                            "height: " +
                            r.default.style.useTpx(t.height - o) +
                            ";");
                      })
                      .exec();
                  }, 500);
              }
            },
            handleLoadMore() {
              this.useLoadMore ? (this.loading = !1) : this.fetchList();
            },
            handleClickLoadNextPage() {
              this.fetchList(), this.clickLoadNextPageLogger();
            },
            clickLoadNextPageLogger() {
              var t = "";
              this.isLimitdDiscount && (t = "limitdiscount"),
                this.isGroupon && (t = "groupon"),
                this.sendComponentLogger("logger", {
                  et: "click",
                  ei: "viewmore_click",
                  en: "点击查看更多",
                  params: { component: t, banner_id: this.getBannerId() },
                });
            },
            onItemImageLoaded(t, e) {
              this.$emit("on-item-image-loaded", { index: t, parentIndex: e });
            },
          },
          ud: !0,
        };
      e.default = r.default.component(_);
    },
  })
);
