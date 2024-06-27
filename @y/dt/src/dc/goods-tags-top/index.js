"use strict";
var r = require("~/r");
r(
  "DANr",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    DANr: function (t, e, o) {
      o.r(e);
      var i = o("Fcif"),
        s = o("EqB2"),
        a = o("/XVY"),
        r = Object(a.a)({
          isShowAllGoodsTag: { default: !1 },
          goodsListConfig: { default: () => ({}) },
          type: { default: "" },
          tagsConfig: { default: () => ({}) },
          tabs: { default: () => [] },
          queryExtra: { default: () => ({}) },
        }),
        d = o("pXyP"),
        n = o("MiJW"),
        c = o("Ix7h"),
        l = o("Tewj"),
        p = {
          mixins: [Object(s.a)({ optDesc: r })],
          props: {
            kdtId: { type: Number },
            pageScrollKey: {
              type: String,
              default: "showcase-container:page-scroll",
            },
          },
          data: () => ({
            activeTab: 0,
            activedTabs: { tab0: !0 },
            curId: "id_" + Math.round(1e3 * Math.random()),
            tabPid: Math.round(1e3 * Math.random()),
            zIndex: 1,
            stickyTop: 0,
            isSticky: !1,
          }),
          computed: {
            goodsTagsTopStyle() {
              return (
                "top: " +
                this.stickyTop +
                "px; margin-bottom: 7px; padding: 0 " +
                ("2" === this.opt.tagsConfig.navStyle ? "8px" : "0") +
                ";"
              );
            },
            goodsExtra() {
              var {
                type: t,
                tabs: e,
                itemCardOpt: o,
                layoutOpt: s,
                itemIds: a = null,
                queryExtra: r,
                preLoadGoodsInfoOpt: d,
                skeletonOpt: n,
              } = this.opt;
              return e.map((e, c) => {
                var {
                  prefetchGoodsIds: l = "",
                  hiddenGoodsIds: p = "",
                  sortType: h,
                } = e;
                return {
                  queryExtra: Object(i.a)({}, r || {}, {
                    type: t,
                    alias: e.alias || "",
                    pageSize: 12,
                    isGlobalTag: +e.isGlobalTag || 0,
                    isShowAll: e.isShowAll,
                    goodsNumber: e.goodsNumber,
                    activityPriceIndependent: 1,
                    needOPriceAndTagsOpt: 1,
                    supportCombo: 1,
                    prefetchGoodsIds: l,
                    hiddenGoodsIds: p,
                    sortType: h,
                  }),
                  itemCardOpt: o,
                  layoutOpt: s,
                  type: t,
                  itemIds: a,
                  preLoadGoodsInfoOpt: 0 === c ? d : null,
                  skeletonOpt: n,
                  isShowGoodsAddNumber: this._opt.isShowGoodsAddNumber,
                };
              });
            },
            isShowGoodsAddNumber() {
              var t;
              return (
                (null == (t = this._opt) ? void 0 : t.isShowGoodsAddNumber) ||
                !1
              );
            },
            curActiveTab: {
              get() {
                return this.activeTab;
              },
              set(t) {
                this.activeTab = t;
              },
            },
            tabInfo() {
              var { tagsConfig: t } = this.opt;
              return {
                tabType: "0" === t.navStyle ? "line" : "card",
                offsetTop: this.stickyTop,
              };
            },
            showTabs() {
              return (this.opt.tabs || []).map((t, e) => {
                var o = Object(i.a)({}, t || {});
                return (
                  this.activedTabs["tab" + e] && (o.isVIf = !0),
                  +e == +this.activeTab
                    ? (o.warpStyle = "display:block")
                    : (o.warpStyle = "display:none"),
                  o
                );
              });
            },
          },
          watch: {
            curActiveTab(t) {
              this.activedTabs["tab" + t] ||
                (this.activedTabs = Object(i.a)({}, this.activedTabs, {
                  ["tab" + t]: !0,
                }));
            },
          },
          mounted() {
            this.initSticky();
          },
          destroyed() {
            this.onPageScrollFn &&
              l.default.off(this.pageScrollKey, this.onPageScrollFn);
          },
          methods: {
            handleBuyClick(t) {
              this.$emit("button-click", t);
            },
            handleItemClick(t) {
              var e = Object(n.a)(t);
              this.$emit("item-click", e);
            },
            onClickTab(t) {
              var { index: e } = t;
              this.curActiveTab = e;
            },
            onPullDownRefresh() {
              this.curActiveTab = 0;
            },
            initSticky() {
              var { tagsConfig: t } = this.opt;
              "1" === t.sticky &&
                ((this.isSticky = !1),
                d.a.setControlSub(
                  this.handleStickyChange,
                  this,
                  "goodsTagsTop"
                ),
                d.a.setCheckItem("goodsTagsTop", this.opt.zIndex || 110),
                (this.onPageScrollFn = Object(c.a)(this.onPageScroll, 50)),
                (this.currentPageY = 0),
                this.$nextTick(() => {
                  this.createSelectorQuery()
                    .select("#" + this.curId)
                    .boundingClientRect((t) => {
                      t &&
                        d.a.setWillStickyComponent({
                          name: "goodsTagsTop",
                          type: "fixed",
                          positionTop: t.top,
                          elementHeight: 44,
                          zIndex: this.zIndex || 110,
                        });
                    })
                    .exec();
                }),
                l.default.on(this.pageScrollKey, this.onPageScrollFn));
            },
            onPageScroll(t) {
              this.createSelectorQuery()
                .select("#" + this.curId)
                .boundingClientRect((e) => {
                  if (e) {
                    var o =
                      t.scrollTop === this.currentPageY
                        ? "bottom" === this.lastDirection
                        : t.scrollTop > this.currentPageY;
                    (this.lastDirection = o ? "bottom" : "up"),
                      (this.currentPageY = t.scrollTop);
                    var i = e.bottom,
                      s = d.a.getHasTop(),
                      a = !1;
                    if (
                      (o
                        ? ((a = e.top < s && i > s),
                          !this.isSticky && e.top < s && i - s < 45 && (a = !1))
                        : (a =
                            i - (this.isSticky ? 0 : 44) > s &&
                            e.top + (this.isSticky ? 44 : 0) < s),
                      this.isSticky !== a)
                    ) {
                      (this.isSticky = a),
                        (this.zIndex = a ? 109 : 1),
                        d.a.setItem("goodsTagsTop", 44, a);
                      var { positionTop: r = 0 } =
                        d.a.getItem("goodsTagsTop") || {};
                      (this.isStartFixed = a), (this.stickyTop = r);
                    }
                  }
                })
                .exec();
            },
            handleStickyChange(t) {
              var { type: e, stickyTop: o = 0 } = t;
              if ("stickyTop" === e) this.stickyTop = o;
              else if ("setItem" === e) {
                var { positionTop: i = 0 } = d.a.getItem("goodsTagsTop") || {};
                this.stickyTop = i;
              }
            },
            handleGoodsComponentLoaded(t) {
              this.componentLoaded ||
                (this.$emit("component-loaded", t),
                (this.componentLoaded = !0));
            },
          },
          ud: !0,
        },
        h = o("9ZMt");
      e.default = h.default.component(p);
    },
  })
);
