"use strict";
var r = require("~/r");
r(
  "hHaS",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      J8p1: function (e, t, a) {
        var s = a("DXKY"),
          o = a("Fcif"),
          r = (e) => {
            var t = ((e) =>
              e.reduce((e, t, a) => {
                var { type: s } = t;
                try {
                  var r = Object.keys(e[s] || {}).length;
                  return (
                    (e[s] = Object(o.a)({}, e[s] || {}, { [a]: r + 1 })), e
                  );
                } catch (t) {
                  return e;
                }
              }, {}))(e);
            return e.map((e, a) => {
              var { type: s } = e,
                r = (t[s] || {})[a],
                n = r ? { componentIndex: r - 1 } : {};
              return Object(o.a)({}, e, n);
            });
          },
          n = {
            __featurePages: {},
            setFirstScreenComponents(e, t) {
              this.__featurePages[t + "_firstScreen"] = r(e);
            },
            clearFirstScreenComponents(e) {
              delete this.__featurePages[e + "_firstScreen"];
            },
            getFirstScreenComponents(e) {
              return this.__featurePages[e + "_firstScreen"];
            },
            getCurPageAllComponents(e) {
              return this.__featurePages[e] || [];
            },
            setShowcaseComponents(e, t, a, o) {
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
                (e = r(e)),
                (this.__featurePages[o] = e),
                s.a.on("feature-load:start" + o, () => {
                  s.a.trigger("feature-load:init" + o, []);
                }),
                s.a.on("feature-load:more" + o, (e) => {
                  var { startIndex: t, size: a } = e,
                    r = this.__featurePages[o],
                    n = r.slice(t, t + a);
                  s.a.trigger("feature-load:show-component" + o, {
                    components: n,
                    startIndex: t,
                    allComponents: r,
                    hasLoadFirstScreen:
                      !!this.__featurePages[o + "_firstScreen"],
                  });
                });
            },
            clearShowcaseComponents(e) {
              s.a.off("feature-load:init" + e),
                s.a.off("feature-load:show-component" + e),
                s.a.off("feature-load:start" + e),
                s.a.off("feature-load:more" + e),
                delete this.__featurePages[e];
            },
          };
        t.a = n;
      },
      gc3r: function (e, t, a) {
        a.d(t, "b", function () {
          return u;
        }),
          a.d(t, "a", function () {
            return d;
          });
        var s = a("Fcif"),
          o = a("jA1y"),
          r = a("vgcL"),
          n = a("2wjL"),
          i = a("u8kV"),
          h = a("rDSc"),
          c = a("8B9M"),
          l = function (e, t) {
            e || (!1 !== t.isNeedShareMore && this.setYZData({ salesman: t }));
          },
          u = (e) => {
            var t = Object(h.a)(Object(s.a)({}, e, { path: e.url }), "url");
            return Object(o.c)(t);
          },
          d = function (e) {
            var {
                scene: t,
                sst: a,
                gst: o,
                getSalesmanData: h = l,
                query: d,
              } = e,
              m = Object(c.a)() || {},
              p = m.getToken() || {},
              { route: g = "", options: f = {} } = Object(i.d)(),
              b = d || f,
              _ = n.a.add(g, b),
              S = { gst: (o = o || Object(r.e)(t)), sst: a, sourceUrl: _ },
              { yzUserId: v } = p;
            Object(r.f)({
              url: _,
              logParams: m.logger.getLogParams && m.logger.getLogParams(),
              userId: v,
              request: u,
            }),
              Object(r.a)(Object(s.a)({}, S)),
              Object(r.b)({}, h.bind(this));
          };
      },
      hHaS: function (e, t, a) {
        a.r(t);
        var s = a("Fcif"),
          o = a("qJXH"),
          r = a("XgOO"),
          n = a("hHpg"),
          i = a("zMoS"),
          h = a("2wjL"),
          c = a("5kn2"),
          l = a("XCh3"),
          u = a("GFa9"),
          d = a("J8k1"),
          m = a("kQKO"),
          p = a("n7Pa"),
          g = a("1sfw"),
          f = a("vgcL"),
          b = a("gc3r"),
          _ = a("u8kV"),
          S = getApp();
        Object(o.b)(r.a, {
          data: {
            themeClass: S.themeClass,
            noteData: {},
            noteGoodIds: [],
            thumbsStatus: 0,
            clickThumbFlag: !0,
            noteType: p.b,
            noteId: "",
            salesman: {},
            shopName: "",
            showCoverView: !1,
          },
          fetchNoteData(e) {
            return new Promise((t) => {
              S.getShopInfo().then((a) => {
                var { chainStoreInfo: o, kdt_id: r } = a,
                  { isRootShop: n = !1 } = o,
                  i = S.getKdtId(),
                  h = { noteAlias: e, targetKdtId: i || r };
                n
                  ? S.once("app:chainstore:kdtid:update", (e) => {
                      var { kdtId: a } = e;
                      this.getNoteDetailData(
                        Object(s.a)({}, h, { targetKdtId: a, isChain: !0 })
                      ).then((e) => {
                        t(e);
                      });
                    })
                  : this.getNoteDetailData(h).then((e) => {
                      t(e);
                    });
              });
            });
          },
          getNoteDetailData(e) {
            var {
              noteAlias: t,
              sourceKdtId: a,
              targetKdtId: s,
              isChain: o,
            } = e;
            return S.request({
              path: "/wscshop/shopnote/detail.json",
              data: {
                noteAlias: t,
                sourceKdtId: a,
                targetKdtId: s,
                isChain: o,
                adaptorComponents: d.a.join(","),
              },
            })
              .then((e) => {
                var t;
                if (
                  0 !==
                  (null == e || null == (t = e.requestData) ? void 0 : t.length)
                )
                  return e;
                Object(n.a)({ message: "公众号文章已失效", duration: 1e3 }),
                  setTimeout(() => {
                    wx.switchTab({ url: "/pages/home/dashboard/index" });
                  }, 1e3);
              })
              .catch(() => {});
          },
          bindCustomer(e, t) {
            var { route: a, options: s } = Object(_.d)(),
              o = h.a.add(a, s);
            return S.request({
              path: "/wscsalesman/bind-customer.json",
              method: "POST",
              data: { sellerFrom: e, fromParams: t, sourceUrl: o },
            })
              .then((e) => e)
              .catch(() => {});
          },
          initNoteData(e) {
            if (e) {
              if (e.isLocked)
                return wx.redirectTo({ url: "/packages/common/lock/index" });
              if (e.noteData) {
                var {
                  noteId: t,
                  noteType: a,
                  linkUrl: s,
                  noteGoodIds: o,
                  title: r,
                  showBrowseCount: n,
                  showThumbsUpCount: h,
                  thumbsUpCount: c,
                  browseCount: l,
                  publishTime: u,
                  showPublishTime: d,
                  templateId: m,
                  showEnterShop: p,
                  noteItemsBriefInfo: g = [],
                  description: f,
                  featureComponents: b = [],
                  headPhoto: _ = "",
                  coverPhotos: v = [],
                  userThumbsStatus: j,
                } = e.noteData;
                this.trigger("mpArticleDetail:loaded", t),
                  this.setYZData(
                    {
                      noteId: t,
                      noteData: {
                        linkUrl: s,
                        title: r,
                        showBrowseCount: n,
                        showThumbsUp: h,
                        thumbsUpCount: c || 0,
                        browseCount: l || 0,
                        publishTime: u,
                        showPublishTime: d,
                        templateId: m,
                        showEnterShop: p,
                        noteId: t,
                        noteItemsBriefInfo: g,
                        description: f,
                        sharePhoto:
                          _ ||
                          Object(i.a)(v, "[0]") ||
                          Object(i.a)(g, "[0].imageUrl"),
                        featureComponents: (b || []).map(
                          (e) => (
                            ("rich_text" !== e.type &&
                              "rich_text_xss" !== e.type) ||
                              (e.externalStyle = "padding: 0 15px"),
                            e
                          )
                        ),
                      },
                      noteGoodIds: o,
                      thumbsStatus: j || 0,
                    },
                    () => {
                      setTimeout(() => {
                        this.setYZData({ showCoverView: !0 }),
                          S.logger.log({
                            et: "custom",
                            ei: "shopnote",
                            en: "店铺笔记",
                            params: {
                              note_id: t,
                              note_type: a,
                              note_model_id: m,
                              spm: "shopnote." + t,
                            },
                          });
                      }, 1e3);
                    }
                  );
              } else
                this.setYZData({
                  noteData: {
                    linkUrl: "https://h5.youzan.com/wscshop/feature/emptypage",
                  },
                });
            }
          },
          initSalesmanData(e) {
            var { kdtId: t, query: a } = void 0 === e ? {} : e,
              { sl: s } = a || {},
              o = new c.c({
                kdtId: t,
                nativeAjax: S.request,
                nativeLogger: function () {
                  return S.logger.log(...arguments);
                },
                query: a,
                fromSeller: s,
              });
            try {
              o.getShareData().then((e) => {
                this.setYZData({
                  "salesman.show": e.share,
                  "salesman.icon": e.iconUrl,
                  "salesman.alias": e.seller,
                  "salesman.name": e.salesmanName,
                });
              });
            } catch (e) {}
          },
          onLoad(e) {
            S.getShopInfo().then((t) => {
              var { shopMetaInfo: a = {}, kdtId: s } = t || {};
              if (a.lock_status === p.c.LOCK)
                return wx.redirectTo({ url: "/packages/common/lock/index" });
              var { noteAlias: o, sl: r } = e || {};
              if (o) {
                this.initSalesmanData({ kdtId: s, query: e }),
                  this.setYZData({ sl: r });
                var i = h.a.add(
                  "packages/shop/shopnote/mparticle/detail/index",
                  e
                );
                Object(f.f)({ url: i, request: b.b });
                var { route: c, options: l } = Object(_.d)(),
                  u = h.a.add(c, l);
                Object(f.a)({ sst: 14, sourceUrl: u }),
                  this.fetchNoteData(o)
                    .then((e) => {
                      this.initNoteData(e);
                    })
                    .catch(() => {
                      Object(n.a)("页面参数错误");
                    });
              } else Object(n.a)("页面参数错误");
            });
          },
          onShow() {
            var { noteId: e = "" } = this.data;
            e && this.trigger("mpArticleDetail:show", e);
          },
          thumbClick() {
            if (!1 !== this.data.clickThumbFlag) {
              this.setYZData({ clickThumbFlag: !1 });
              var e = {
                thumbsStatus: this.data.thumbsStatus ? 0 : 1,
                shopNoteId: this.data.noteData.noteId,
              };
              Object(m.a)(e)
                .then((e) => {
                  if ((this.setYZData({ clickThumbFlag: !0 }), e)) {
                    var t = this.data.thumbsStatus ? 0 : 1;
                    this.setYZData({ thumbsStatus: t });
                  }
                })
                .catch((e) => {
                  this.setYZData({ clickThumbFlag: !0 });
                });
            }
          },
          salesmanClick() {
            var { noteAlias: e } = this.__query__,
              { alias: t, name: a } = this.data.salesman || {},
              s = h.a.add("/packages/shop/shopnote/mparticle/share/index", {
                noteAlias: e,
                salesmanAlias: t,
                salesmanName: a,
              });
            u.a.navigate({ url: s });
          },
          enterShop() {
            u.a.switchTab({ url: "/packages/home/dashboard/index" });
          },
          clickShareLog() {
            var e = { banner_id: Object(g.a)("share") },
              t = Object(l.b)("click_content", e);
            Object(l.a)(t);
          },
          getShareData() {
            var { noteAlias: e } = this.__query__,
              { noteData: t = {}, salesman: a } = this.data,
              { title: s, description: o } = t || {},
              { show: r, alias: n } = a || {},
              h = Object(i.a)(this.data, "CURRENT_GLOBAL_SHOP.shop_name", ""),
              c = o || h + "的精彩内容分享给你，快来看一看吧",
              l = Object(i.a)(t, "sharePhoto"),
              u =
                "packages/shop/shopnote/mparticle/detail/index?noteAlias=" +
                e +
                "&sl=" +
                (r ? n : "") +
                "&is_share=1&shopAutoEnter=1";
            return (
              (l = /^(http|https):\/\//.test(l) ? l : "https:" + l),
              this.setYZData({ shareUrl: u }),
              { title: s, desc: c, path: u, imageUrl: l }
            );
          },
          onShareAppMessage() {
            var e = this.getShareData();
            return this.clickShareLog(), e;
          },
          onUnload() {
            this.off("mpArticleDetail:loaded"),
              this.off("mpArticleDetail:show");
          },
          redirectToHome() {
            u.a.switchTab({ url: "/packages/home/dashboard/index" });
          },
        });
      },
    }
  )
);
