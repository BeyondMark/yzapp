"use strict";
var r = require("~/r");
r(
  "6uh5",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "6uh5": function (t, e, a) {
      a.r(e);
      var i = a("Fcif"),
        n = a("YeA1"),
        o = a("US/N"),
        s = a("MLLI"),
        h = a("fChk"),
        r = a("Ix7h"),
        l = a("pXyP"),
        c = a("Tewj"),
        p = a("Na6L"),
        d = a("9ZMt"),
        u = ["goods", "tag_list_left", "tag_list_top"],
        v = {
          data: () => ({
            tabsData: {},
            active: -1,
            stickyTop: 0,
            topNavId: "top-nav-ext",
            topNavFeatureComponents: [],
            topNavTabFeatureComponents: [],
            pid: Math.floor(1e3 * Math.random()),
            themeColors: {},
            isStartFixed: !1,
          }),
          computed: {
            searchDta() {
              return this.topNavFeatureComponents.find(
                (t) => "search" === t.type
              );
            },
            componentData() {
              return this.topNavFeatureComponents.find(
                (t) => "top_nav" === t.type
              );
            },
            swipeThreshold() {
              if (!this.componentData) return "";
              var { slide_setting: t, sub_entry: e } = this.componentData;
              return 1 == +t ? 0 : e.length;
            },
            tabStyle() {
              if (!this.componentData) return "";
              var {
                slide_setting: t,
                sub_entry: e,
                count: a,
              } = this.componentData;
              if (1 == +t) {
                var i = e.length < 4 ? e.length : +a;
                return (
                  i > e.length && (i = e.length),
                  "flex: 0 0 " + 100 / (i + (i < e.length ? 0.5 : 0)) + "%"
                );
              }
              return "";
            },
            lineHeight() {
              return this.componentData
                ? 2 == +this.componentData.show_method
                  ? 4
                  : 3
                : "";
            },
            lineClass() {
              return this.componentData && 2 == +this.componentData.show_method
                ? "top-nav-line-class"
                : "";
            },
            scrollLeft() {
              if (!this.swipeThreshold) {
                if (this.showTabs.length < 5) return 0;
                var t = Object(s.b)().windowWidth / 5;
                return this.active > 2
                  ? Math.min(this.active - 2, this.showTabs.length - 3) * t +
                      "px"
                  : 0;
              }
            },
            showTabs() {
              if (!this.componentData) return [];
              var { sub_entry: t = [], color: e } = this.componentData,
                a = Object(s.b)().windowWidth,
                n = 0;
              return (
                (n = this.swipeThreshold
                  ? a / this.swipeThreshold
                  : a / (t.length < 5 ? t.length : 5)),
                t.map((t, a) => {
                  var o = a === this.active;
                  return this.useCard
                    ? Object(i.a)({}, t, {
                        titleStyle:
                          "color: " +
                          (o ? "#fff" : e) +
                          "; margin: 8px auto; padding: 0 3px;border-radius: 4px; width: fit-content; height: 28px;align-items: center;box-sizing: border-box; width: 100%;background-color: " +
                          (o ? this.themeColors.general : "") +
                          " ",
                        bgStyle: "width: " + n + "px; padding: 0 4px;",
                      })
                    : Object(i.a)({}, t, {
                        titleStyle:
                          "color: " + (o ? this.themeColors.general : e),
                      });
                })
              );
            },
            useCard() {
              return this.componentData
                ? 3 == +this.componentData.show_method
                : [];
            },
          },
          created() {
            Object(n.b)(this, ["themeColors"]),
              (this.pageScrollEvent = "onPageScroll" + Object(p.a)()),
              (this.onPageScrollFn = Object(r.a)(this.onPageScroll, 50)),
              this.ctx.watch("topNavFeatureComponents", (t) => {
                if (
                  (t && t.length && this.setWillStickyComponent(),
                  t && t.length && !this.tabsData.tab_0)
                ) {
                  this.topNavFeatureComponents = t;
                  var e = t.find((t) => "top_nav" === t.type);
                  this.fetchFeatureDetail(e.sub_entry[0].alias, 0),
                    (this.active = 0),
                    l.a.setControlSub(this.handelStickyTop, this, "top-nav"),
                    l.a.setCheckItem("top-nav", 110),
                    c.default.on(this.pageScrollEvent, this.onPageScrollFn);
                } else if (t && t.length && this.tabsData.tab_0) {
                  (this.active = 0), (this.topNavFeatureComponents = t);
                  var a = t.find((t) => "top_nav" === t.type);
                  (this.tabsData = []),
                    this.fetchFeatureDetail(a.sub_entry[0].alias, 0);
                } else
                  t &&
                    0 === t.length &&
                    ((this.topNavFeatureComponents = []), (this.tabsData = []));
              });
          },
          destroyed() {
            c.default.off(this.pageScrollEvent, this.onPageScrollFn);
          },
          methods: {
            setWillStickyComponent() {
              l.a.setWillStickyComponent({
                name: "top-nav",
                type: "fixed",
                positionTop: 0,
                elementHeight: 44,
                zIndex: this.zIndex || 110,
              });
            },
            onPageScroll(t) {
              this.createSelectorQuery()
                .select("#" + this.topNavId)
                .boundingClientRect((e) => {
                  if (e) {
                    var a =
                      t.scrollTop === this.currentPageY
                        ? "bottom" === this.lastDirection
                        : t.scrollTop > this.currentPageY;
                    (this.lastDirection = a ? "bottom" : "up"),
                      (this.currentPageY = t.scrollTop);
                    var i = e.height;
                    i && !this.originHeight && (this.originHeight = i);
                    var n = l.a.getHasTop(),
                      o =
                        e.top <
                        (!a && this.isStartFixed
                          ? n - this.originHeight - 1
                          : n);
                    if (o !== this.isStartFixed) {
                      l.a.setItem("top-nav", i, o);
                      var { positionTop: s = 0 } = l.a.getItem("top-nav") || {};
                      (this.isStartFixed = o), (this.stickyTop = s);
                    }
                  }
                })
                .exec();
            },
            handelStickyTop(t) {
              var { type: e, stickyTop: a = 0 } = t;
              "stickyTop" === e && (this.stickyTop = a);
            },
            handleTabClick(t) {
              var { index: e } = t.currentTarget.dataset;
              this.handleVanTabClick({ index: e });
            },
            reListenPageScrollEvent() {
              setTimeout(() => {
                c.default.on(this.pageScrollEvent, this.onPageScrollFn);
              }, 100);
            },
            handleVanTabClick(t) {
              if (t.index !== this.active) {
                var e,
                  { alias: a } = this.componentData.sub_entry[t.index];
                if (
                  (t.index !== this.active &&
                    (l.a.resetData(),
                    l.a.setControlSub(this.handelStickyTop, this, "top-nav"),
                    l.a.setCheckItem("top-nav", 110),
                    this.setWillStickyComponent()),
                  Object(h.a)({ scrollTop: 0, duration: 0 }),
                  (this.active = t.index),
                  this.tabsData["tab_" + t.index])
                )
                  this.ctx.event.emit(
                    "topNavTabFeatureComponents:change",
                    (null == (e = this.tabsData["tab_" + t.index])
                      ? void 0
                      : e.components) || []
                  ),
                    this.reListenPageScrollEvent();
                else this.fetchFeatureDetail(a, t.index, !0);
              }
            },
            fetchFeatureDetail(t, e, a) {
              void 0 === a && (a = !1),
                Object(o.default)({
                  path: "/wscdeco/feature-detail.json",
                  data: { alias: t, stage: 16, check_old_home: 1 },
                }).then((t) => {
                  t.videoNumberId && this.getVideoNumberInfo(t.videoNumberId);
                  var n =
                    null == t
                      ? void 0
                      : t.components.map(
                          (t) => (
                            u.includes(t.type) && (t.isShowGoodsAddNumber = !0),
                            t
                          )
                        );
                  (this.tabsData = Object(i.a)({}, this.tabsData, {
                    ["tab_" + e]: t,
                  })),
                    this.ctx.event.emit(
                      "topNavTabFeatureComponents:change",
                      n || []
                    ),
                    a && this.reListenPageScrollEvent();
                });
            },
            getVideoNumberInfo(t) {
              d.default.$native.getChannelsLiveInfo &&
                d.default.$native.getChannelsLiveInfo({
                  finderUserName: t,
                  success: (t) => {
                    d.default.$native.setStorageSync(
                      "channelsLiveInfo",
                      JSON.stringify(t)
                    );
                  },
                  fail: (t) => {},
                });
            },
          },
          ud: !0,
        };
      e.default = d.default.component(v);
    },
  })
);
