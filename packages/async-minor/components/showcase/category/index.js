"use strict";
var r = require("~/r");
r(
  "wKxz",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "94yW": function (e, t, i) {
      i.d(t, "a", function () {
        return a;
      });
      i("taYb"), i("7WUL");
      function a(e) {
        var { extraData: t = {} } = e;
        return {
          linkType:
            "weapplink" === e.linkType && 2 == t.linkType
              ? "otherWeapp"
              : e.linkType || "",
          appId: t.otherWeappAppid || "",
          path: t.otherWeappLink || "",
          useShortLink: +t.useShortLink || 0,
          shortLink: t.shortLink || "",
        };
      }
    },
    wKxz: function (e, t, i) {
      i.r(t);
      var a = i("Fcif"),
        r = i("taYb"),
        n = i("a1Mm"),
        s = i("zwWb"),
        o = i("9KEa"),
        c = i("94yW"),
        { windowHeight: l, system: h } = Object(o.b)(),
        d = -1 !== h.indexOf("Android");
      Component({
        properties: {
          componentData: { type: Object, value: {}, observer: "init" },
          extraData: { type: Object, value: {} },
        },
        data: {
          categoryList: [],
          skeletonNumList: [],
          activeIndex: 0,
          activeTitleIndex: -1,
          shouldCheckActive: !1,
          navScrollTop: 0,
          navFixed: !1,
        },
        attached() {
          (this.obList = []),
            (this.groupHeightList = []),
            (this.bannerHeightList = []),
            (this.top = 0),
            (this._handleScroll = null);
        },
        ready() {
          this.initObserver();
        },
        detached() {
          this.emptyObserver();
        },
        methods: {
          init() {
            var { categoryList: e = [] } = r.a.toCamelCase(
              this.properties.componentData
            );
            (e = e.map((e) => {
              var { subCategoryList: t = [], banner: i = {} } = e;
              return (
                t.forEach((e) => {
                  (e.imageUrl = Object(n.a)(e.imageUrl, "!400x0.jpg")),
                    (e.navInfo = Object(c.a)(e));
                }),
                i.imageUrl &&
                  (i.imageUrl = Object(n.a)(i.imageUrl, "!650x0.jpg")),
                Object(a.a)({}, e, {
                  navInfo: Object(c.a)(i),
                  subCategoryList: t,
                  banner: i,
                })
              );
            })),
              this.setData(
                {
                  categoryList: e,
                  skeletonNumList: this.getSkeletonNumList(e),
                  activeIndex: 0,
                  activeTitleIndex: -1,
                  shouldCheckActive: !1,
                  navScrollTop: 0,
                  navFixed: !1,
                },
                () => {
                  this.calcGroupHeight();
                }
              );
          },
          getSkeletonNumList: (e) =>
            e.map((e) => {
              var t = 3 - (e.subCategoryList.length % 3);
              return 3 === t ? 0 : t;
            }),
          initObserver() {
            var e = this.createIntersectionObserver();
            e.relativeToViewport().observe(".hairline", (e) => {
              0 === e.intersectionRatio
                ? this.setData({ navFixed: !0 })
                : this.setData({ navFixed: !1 });
            }),
              this.obList.push(e);
          },
          emptyObserver() {
            this.obList.forEach((e) => {
              e.disconnect();
            }),
              (this.obList = []);
          },
          calcGroupHeight() {
            wx
              .createSelectorQuery()
              .in(this)
              .selectAll(".group")
              .boundingClientRect((e) => {
                e && (this.groupHeightList = e.map((e) => e.height));
              })
              .exec(),
              wx
                .createSelectorQuery()
                .in(this)
                .selectAll(".groups >>> .banner")
                .boundingClientRect((e) => {
                  if (e && 0 !== e.length) {
                    var t = 0;
                    this.bannerHeightList = this.data.categoryList.map((i) =>
                      i.banner && i.banner.imageUrl ? e[t++].height : 0
                    );
                  }
                })
                .exec(),
              wx
                .createSelectorQuery()
                .in(this)
                .select(".category")
                .boundingClientRect((e) => {
                  e && (this.top = d ? e.top : e.top / 2);
                })
                .exec();
          },
          handleScroll(e) {
            this._handleScroll || this.createScrollHandler(),
              this._handleScroll(e);
          },
          createScrollHandler() {
            this._handleScroll = Object(s.a)((e) => {
              var { scrollTop: t, deltaY: i } = e.detail,
                {
                  activeIndex: a,
                  activeTitleIndex: r,
                  shouldCheckActive: n,
                  navFixed: s,
                } = this.data;
              if ((this.fixCategoryContainer(s, i), n)) {
                var [o, c] = this.getActiveIndex(t),
                  h = { activeTitleIndex: c };
                if (a !== o)
                  (h.activeIndex = o),
                    wx
                      .createSelectorQuery()
                      .in(this)
                      .select("#nav-item-" + o)
                      .boundingClientRect((e) => {
                        var t = e.top;
                        wx.createSelectorQuery()
                          .in(this)
                          .select(".nav")
                          .scrollOffset((e) => {
                            (h.navScrollTop = t + e.scrollTop - l / 3),
                              this.setData(h);
                          })
                          .exec();
                      })
                      .exec();
                else {
                  if (r === c) return;
                  this.setData(h);
                }
              }
            }, 100);
          },
          fixCategoryContainer(e, t, i) {
            void 0 === i && (i = 30),
              e &&
                t > i &&
                wx.pageScrollTo({ scrollTop: this.top, duration: 0 });
          },
          getActiveIndex(e) {
            var t = 0,
              i = 0,
              a = -1;
            return (
              this.groupHeightList.some((r, n) => {
                var { banner: s = {} } = this.data.categoryList[n];
                return t + r > e
                  ? ((i = n),
                    (a =
                      s.imageUrl && t + this.bannerHeightList[n] > e ? -1 : n),
                    !0)
                  : ((t += r), !1);
              }),
              [i, a]
            );
          },
          handleNavClick(e) {
            var { navIndex: t } = e.currentTarget.dataset,
              { banner: i = {} } = this.data.categoryList[t],
              a = { activeIndex: t, shouldCheckActive: !1 };
            i.imageUrl ? (a.activeTitleIndex = -1) : (a.activeTitleIndex = t),
              this.setData(a);
          },
          handleGroupTouchStart() {
            var { shouldCheckActive: e } = this.data;
            e || this.setData({ shouldCheckActive: !0 });
          },
          handleNavigate(e) {
            var { detail: t = {} } = e;
            this.triggerEvent("navigate", t);
          },
          handleContactBack(e) {
            var { detail: t = {} } = e;
            this.triggerEvent("contactback", t);
          },
        },
      });
    },
    zwWb: function (e, t, i) {
      var a = i("Ix7h");
      t.a = a.a;
    },
  })
);
