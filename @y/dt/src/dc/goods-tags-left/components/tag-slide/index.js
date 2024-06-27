"use strict";
var r = require("~/r");
r(
  "i/hd",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "i/hd": function (t, e, i) {
      i.r(e);
      var s = i("Fcif"),
        o = i("R7Zb"),
        l = i("GGNd"),
        a = i("MLLI"),
        h = i("9ZMt"),
        r = i("+Iya"),
        n = i("pXyP"),
        d = i("82CI"),
        c = i("Ix7h"),
        u = i("Tewj"),
        { windowHeight: p } = wx.canIUse("getWindowInfo")
          ? wx.getWindowInfo()
          : Object(a.b)(),
        g = {
          mixins: [Object(o.a)({ optDesc: l.a })],
          props: {
            kdtId: { type: Number },
            offlineId: { type: Number, default: 0 },
            appId: { type: String },
            pageScrollKey: {
              type: String,
              default: "showcase-container:page-scroll",
            },
          },
          data: () => ({
            selectedGroup: "",
            currentTagGoods: [],
            diff: 0,
            scrollId: 0,
            curId: "tag_left_id_" + Math.round(1e3 * Math.random()),
            isSticky: !1,
            stickyTop: 0,
            currentFinshed: !1,
            willFixedHeight: 0,
          }),
          computed: {
            scrollStyle() {
              return "height: calc(100vh - " + this.willFixedHeight + "px);";
            },
            scrollNavStyle() {
              return "height: calc(100vh - " + this.willFixedHeight + "px);";
            },
            scrollViewStyle() {
              return (
                "height: calc(100vh - " +
                this.willFixedHeight +
                "px);transform: translateY(" +
                ((this.isSticky || this.diff) > 0 ? this.diff : 0) +
                "px);"
              );
            },
            goodsStyle() {
              var { tagGroupOpt: t } = this.opt,
                { goodsMargin: e } = t;
              return "padding: " + h.default.style.useTpx(e / 2) + " 0";
            },
            groupStyle() {
              var { tagGroupOpt: t } = this.opt,
                { pageMargin: e } = t;
              return "padding: 0 " + h.default.style.useTpx(e);
            },
            loadNextPageContent() {
              return Math.abs(this.diff) > 50
                ? "释放加载下一分类"
                : "上拉加载下一分类";
            },
            isLastTag() {
              var { tags: t = [] } = this.opt;
              return (
                t.findIndex((t) => t.alias === this.selectedGroup) ===
                t.length - 1
              );
            },
            selectGroupTitle() {
              var { tags: t = [] } = this.opt,
                e = t.find((t) => t.alias === this.selectedGroup);
              return (null == e ? void 0 : e.title) || "";
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
          },
          created() {
            this.init(),
              (this.onPageScrollFn = Object(c.a)(this.onPageScroll, 50)),
              u.default.on(this.pageScrollKey, this.onPageScrollFn);
          },
          destroyed() {
            u.default.off(this.pageScrollKey, this.onPageScrollFn);
          },
          methods: {
            initWillStickyComponentHeight() {
              var t = n.a.getWillStickyComponent(),
                e = n.a.__map,
                i = n.a.getHasTop();
              t.forEach((t) => {
                "canChange" !== t.type && (e[t.name] || (i += t.elementHeight));
              }),
                (this.willFixedHeight = i);
            },
            onPageScroll(t) {
              this.isSticky &&
                this.createSelectorQuery()
                  .select("#" + this.curId)
                  .boundingClientRect((e) => {
                    if (e) {
                      var i =
                        t.scrollTop === this.currentPageY
                          ? "bottom" === this.lastDirection
                          : t.scrollTop > this.currentPageY;
                      if (
                        ((this.lastDirection = i ? "bottom" : "up"),
                        (this.currentPageY = t.scrollTop),
                        !i)
                      )
                        e.top < this.willFixedHeight + 20 ||
                          ((this.isSticky = !1),
                          setTimeout(() => {
                            this.observerToTopSub || this.observeToTop();
                          }, 1e3));
                    }
                  })
                  .exec();
            },
            observeToTop() {
              if (this.observerToTopSub)
                try {
                  this.observerToTop.disconnect(),
                    (this.observerToTopSub = null);
                } catch (t) {}
              var t = this.createIntersectionObserver({ thresholds: [0] });
              t
                .relativeToViewport({
                  bottom: -(p - this.willFixedHeight - 10),
                })
                .observe("#" + this.curId, (e) => {
                  t.disconnect(),
                    (this.observerToTopSub = null),
                    (this.isSticky = !0),
                    (this.stickyTop = this.willFixedHeight);
                }),
                (this.observerToTopSub = t);
            },
            handleNavChange(t) {
              var e,
                { alias: i } = t;
              ((this.selectedGroup = i), this.allTagGoodsData[i].finished)
                ? ((this.currentTagGoods = this.initSkeletonList(
                    Math.min(12, this.allTagGoodsData[i].list.length)
                  )),
                  setTimeout(() => {
                    this.setCurrentTagGoodsBySize(i, 1),
                      (this.currentFinshed = !0);
                  }, 200))
                : ((this.allTagGoodsData[i].list = []),
                  (this.allTagGoodsData[i].page = 1),
                  (this.currentTagGoods = this.allTagGoodsData[i].list || []),
                  (this.currentFinshed = !1),
                  1 ===
                    (null == (e = this.allTagGoodsData[i]) ? void 0 : e.page) &&
                    this.fetchList());
              this.diff = 0;
            },
            setCurrentTagGoodsBySize(t, e) {
              this.selectedGroup === t &&
                ((this.currentTagGoods = this.allTagGoodsData[t].list.slice(
                  0,
                  10 * e
                )),
                this.currentTagGoods.length <
                  this.allTagGoodsData[t].list.length &&
                  this.selectedGroup === t &&
                  setTimeout(() => {
                    this.setCurrentTagGoodsBySize(t, e + 1);
                  }, 100));
            },
            init() {
              (this.selectedGroup = ""),
                this.$nextTick(() => {
                  this.initComponent(),
                    this.initWillStickyComponentHeight(),
                    this.observeToTop(),
                    n.a.setWillStickyComponentChangeSub(
                      "goods-tag-letf",
                      () => {
                        this.initWillStickyComponentHeight(),
                          this.observeToTop();
                      }
                    );
                });
            },
            initComponent() {
              var { tags: t = [] } = this.opt,
                e = {};
              t.forEach((t) => {
                var {
                  alias: i,
                  number: s,
                  prefetchGoodsIds: o = "",
                  hiddenGoodsIds: l = "",
                  sortType: a,
                } = t;
                e[i] = {
                  list: [],
                  alias: i,
                  number: s,
                  page: 1,
                  loading: !1,
                  prefetchGoodsIds: o,
                  hiddenGoodsIds: l,
                  sortType: a,
                };
              }),
                (this.allTagGoodsData = e),
                this.handleNavChange({ alias: (t[0] || {}).alias });
            },
            scrolltolower() {
              this.fetchList();
            },
            initSkeletonList(t) {
              for (var e = [], i = 0; i < t; i++)
                e.push({ _id: i, _skeleton: !0 });
              return e;
            },
            getNextNavAlias(t) {
              void 0 === t && (t = "down");
              var { tags: e = [] } = this.opt,
                i = e.findIndex((t) => t.alias === this.selectedGroup);
              return "up" === t
                ? 0 === i
                  ? null
                  : e[i - 1].alias
                : i >= e.length - 1
                ? null
                : e[i + 1].alias;
            },
            bindtouchstart(t) {
              var { tags: e = [] } = this.opt,
                i = e.findIndex((t) => t.alias === this.selectedGroup),
                s = this.createSelectorQuery();
              s
                .select("#tag_scroll_view" + this.selectedGroup)
                .boundingClientRect(),
                s
                  .select("#tag_scroll_view" + this.selectedGroup)
                  .scrollOffset(),
                s.select("#" + this.curId).boundingClientRect(),
                s.selectViewport().scrollOffset(),
                s.exec((e) => {
                  if (e[0] && e[1] && e[2] && e[3]) {
                    var s = e[0].height,
                      o = e[1].scrollTop,
                      l = e[1].scrollHeight,
                      a = e[2],
                      h = e[3];
                    this.touchInfo = {
                      initTouchY: t.touches[0].pageY,
                      isInFirstTag: 0 === i,
                      isInScrollTop: o <= 4,
                      componentsPageTop: h.scrollTop + a.top,
                      beforeAlias: this.getNextNavAlias("up"),
                      nextAlias: this.getNextNavAlias(),
                      isInScrollBottom: l - s - o < 4,
                    };
                  }
                });
            },
            bindtouchmove(t) {
              if (((this.hasTouchMove = !0), this.touchInfo)) {
                var {
                    initTouchY: e,
                    nextAlias: i,
                    beforeAlias: s,
                  } = this.touchInfo,
                  o = -(e - t.touches[0].pageY);
                o > 5 && s && (this.diff = o),
                  this.isSticky &&
                    o < -5 &&
                    i &&
                    this.currentFinshed &&
                    (this.diff = o);
              }
            },
            bindtouchend(t) {
              var {
                componentsPageTop: e,
                initTouchY: i,
                beforeAlias: s,
              } = this.touchInfo || {};
              if (this.hasTouchMove && this.touchInfo) {
                this.diff < -10 && !this.isSticky && this.handleToTop(e);
                var o = -(i - t.changedTouches[0].pageY);
                o < -10 && !this.isSticky && this.handleToTop(e),
                  this.isSticky && !s && o > 20 && this.handleToBottom(e);
              } else if (this.touchInfo && !this.hasTouchMove) {
                -(i - t.changedTouches[0].pageY) < -10 &&
                  !this.isSticky &&
                  this.handleToTop(e);
              }
              if (this.diff > 50) {
                var l = this.getNextNavAlias("up");
                this.handleNavChange({ alias: l, direction: "up" });
              }
              if (this.isSticky && this.diff < -50 && this.currentFinshed) {
                var a = this.getNextNavAlias();
                this.handleNavChange({ alias: a });
              }
              (this.touchInfo = null),
                (this.diff = 0),
                (this.hasTouchMove = !1);
            },
            bindtouchNavMove() {
              this.isNavTouchMove = !0;
            },
            bindtouchNavEnd(t) {
              if (this.isNavTouchMove) {
                if (this.touchInfo) {
                  var { initTouchY: e, componentsPageTop: i } = this.touchInfo,
                    s = -(e - t.changedTouches[0].pageY);
                  s < -10 && !this.isSticky && this.handleToTop(i),
                    this.isSticky && s > 20 && this.handleToBottom(i);
                }
                (this.touchInfo = null),
                  (this.diff = 0),
                  (this.isNavTouchMove = !1);
              }
            },
            handleToTop(t) {
              wx.pageScrollTo({
                scrollTop: t - this.willFixedHeight,
                duration: 300,
              });
            },
            handleToBottom(t) {
              var e = t - p + 150;
              (this.isSticky = !1),
                wx.pageScrollTo({ scrollTop: e < 0 ? 0 : e, duration: 300 }),
                setTimeout(() => {
                  this.observeToTop();
                }, 1e3);
            },
            merge(t, e) {
              if (null === t) return null;
              if (!e) return t;
              if ("object" == typeof t && "object" == typeof e) {
                var i = {};
                for (var s of Object.keys(t))
                  "object" == typeof t[s] && "object" == typeof e[s]
                    ? (i[s] = this.merge(t[s], e[s]))
                    : void 0 === e[s]
                    ? (i[s] = t[s])
                    : (i[s] = e[s]);
                for (var o of Object.keys(e)) void 0 === i[o] && (i[o] = e[o]);
                return i;
              }
              return "object" != typeof t ? e : t;
            },
            hasTagsOpt(t) {
              var e, i, s;
              return (
                (null == (e = t.itemCardOpt) ||
                null == (i = e.tagsOpt) ||
                null == (s = i.list)
                  ? void 0
                  : s.length) > 0
              );
            },
            hasExtOpt(t) {
              var e, i, s;
              return (
                (null == (e = t.itemCardOpt) ||
                null == (i = e.extOpt) ||
                null == (s = i.list)
                  ? void 0
                  : s.length) > 0 && !this.isExtOptEmpty(t)
              );
            },
            isExtOptEmpty(t) {
              var e, i, s, o, l, a, h;
              return (
                1 ===
                  (null == (e = t.itemCardOpt) ||
                  null == (i = e.extOpt) ||
                  null == (s = i.list)
                    ? void 0
                    : s.length) &&
                "" ===
                  (null == (o = t.itemCardOpt) ||
                  null == (l = o.extOpt) ||
                  null == (a = l.list[0]) ||
                  null == (h = a.title)
                    ? void 0
                    : h.trim())
              );
            },
            hasSubTitleOpt(t) {
              var e, i;
              return (
                (null == (e = t.itemCardOpt) || null == (i = e.subTitleOpt)
                  ? void 0
                  : i.title) && !this.isSubTitleOptEmpty(t)
              );
            },
            isSubTitleOptEmpty(t) {
              var e, i, s;
              return (
                "" ===
                (null == (e = t.itemCardOpt) ||
                null == (i = e.subTitleOpt) ||
                null == (s = i.title)
                  ? void 0
                  : s.trim())
              );
            },
            fetchList() {
              var { kdtId: t, appId: e, offlineId: i } = this,
                o = this.allTagGoodsData[this.selectedGroup],
                {
                  alias: l,
                  page: a,
                  loading: n,
                  finished: c,
                  number: u,
                  prefetchGoodsIds: p = "",
                  hiddenGoodsIds: g = "",
                  sortType: T,
                } = o;
              if (!n && !c) {
                o.loading = !0;
                var f = Object(s.a)({}, o);
                (this.currentTagGoods = [
                  ...this.currentTagGoods,
                  ...this.initSkeletonList(
                    1 === a
                      ? Math.min(u, 10)
                      : Math.min(6, u - this.currentTagGoods.length)
                  ),
                ]),
                  Object(r.a)({
                    page: a,
                    alias: l,
                    json: 1,
                    offlineId: i,
                    kdt_id: t,
                    app_id: e,
                    pageSize: 6,
                    activityPriceIndependent: 1,
                    needOPriceAndTagsOpt: 1,
                    supportCombo: !0,
                    excludedComboSubType: ["none"],
                    prefetchGoodsIds: p,
                    hiddenGoodsIds: g,
                    sortType: T,
                  })
                    .then((t) => {
                      var e,
                        i,
                        o,
                        { itemCardOpt: r, goodsMargin: n } =
                          this.opt.tagGroupOpt,
                        { list: c, hasMore: u } = t,
                        p = c || [];
                      this.slg =
                        null == (e = p[0]) ||
                        null == (i = e.itemCardOpt) ||
                        null == (o = i.extraInfo)
                          ? void 0
                          : o.slg;
                      var g = (r && r.imgHeight) || d.b,
                        T = p.map((t) => {
                          var e = this.hasTagsOpt(t),
                            i = this.hasSubTitleOpt(t),
                            o = this.hasExtOpt(t),
                            l = g + +n;
                          return (
                            e && i && o && (l += d.c),
                            this.isSubTitleOptEmpty(t) &&
                              delete t.itemCardOpt.subTitleOpt,
                            this.isExtOptEmpty(t) &&
                              delete t.itemCardOpt.extOpt,
                            this.merge(
                              {
                                _skeleton: !1,
                                itemCardOpt: Object(s.a)({}, r, {
                                  cardStyle:
                                    "height:" + h.default.style.useTpx(l - n),
                                  isTagsShow: e,
                                }),
                              },
                              t
                            )
                          );
                        });
                      (f.page = a + 1),
                        (f.finished = !u),
                        (f.loading = !1),
                        (f.list = [...f.list, ...T]),
                        f.list.length > f.number &&
                          ((f.finished = !0),
                          (f.list = f.list.slice(0, f.number))),
                        (this.allTagGoodsData[l] = f),
                        this.selectedGroup === l &&
                          ((this.currentTagGoods = f.list),
                          (this.currentFinshed = f.finished)),
                        1 === a ? this.fetchList() : this.checkBottom();
                    })
                    .catch(() => {
                      (this.currentTagGoods = f.list),
                        (this.currentFinshed = !0);
                    });
              }
            },
            checkBottom() {
              this.createSelectorQuery()
                .select("#tag_scroll_view" + this.selectedGroup)
                .scrollOffset()
                .exec((t) => {
                  t[0] &&
                    p + t[0].scrollTop + 1500 > t[0].scrollHeight &&
                    this.fetchList();
                });
            },
            handleItemClick(t) {
              this.openDetailLogger(t);
              var { link: e = {} } = t,
                { query: i = {} } = e;
              this.$emit(
                "item-click",
                Object(s.a)({}, t, {
                  link: Object(s.a)({}, e, {
                    query: Object(s.a)({ slg: this.slg }, i),
                  }),
                })
              );
            },
            openDetailLogger(t) {
              try {
                var e = this.getLoggerComponentName();
                if (!["limitdiscount", "groupon", "tag_list_left"].includes(e))
                  return;
                var { itemId: i, id: s } = t;
                if (!i && !s) return;
                this.sendComponentLogger("logger", {
                  et: "click",
                  ei: "open_goods",
                  en: "打开商品详情",
                  params: {
                    component: e,
                    goods_id: i || s,
                    banner_id: this.getBannerId(),
                    slg: this.slg,
                  },
                });
              } catch (t) {}
            },
            handleGoodsBuy(t, e) {
              this.clickBuyButtonLogger(),
                this.$emit("button-click", Object(s.a)({ id: t }, e.detail));
            },
            clickBuyButtonLogger() {
              try {
                var t = this.getLoggerComponentName();
                if (!["limitdiscount", "groupon", "tag_list_left"].includes(t))
                  return;
                this.sendComponentLogger("logger", {
                  et: "click",
                  ei: "click_buy",
                  en: "点击购买",
                  params: {
                    component: t,
                    banner_id: this.getBannerId(),
                    slg: this.slg,
                  },
                });
              } catch (t) {}
            },
          },
          ud: !0,
        };
      e.default = h.default.component(g);
    },
  })
);
