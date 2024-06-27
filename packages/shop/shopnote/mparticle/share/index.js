"use strict";
var r = require("~/r");
r(
  "jkns",
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
                i = r ? { componentIndex: r - 1 } : {};
              return Object(o.a)({}, e, i);
            });
          },
          i = {
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
                    i = r.slice(t, t + a);
                  s.a.trigger("feature-load:show-component" + o, {
                    components: i,
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
        t.a = i;
      },
      jkns: function (e, t, a) {
        a.r(t);
        var s = a("Fcif"),
          o = a("qJXH"),
          r = a("XgOO"),
          i = a("hHpg"),
          n = a("zMoS"),
          h = a("XCh3"),
          c = a("GFa9"),
          d = a("WOkX"),
          l = a("J8k1"),
          g = a("n7Pa"),
          u = a("1sfw"),
          p = a("MyiS"),
          m = getApp();
        Object(o.b)(r.a, {
          data: {
            themeClass: m.themeClass,
            noteData: {},
            noteId: "",
            salesmanAlias: "",
            salesmanName: "",
            noteAlias: "",
            iconList: p.a,
            posterSrc: "",
          },
          fetchNoteData(e) {
            return new Promise((t) => {
              m.getShopInfo().then((a) => {
                var { chainStoreInfo: o, kdt_id: r } = a,
                  { isRootShop: i = !1 } = o,
                  n = m.getKdtId(),
                  h = { noteAlias: e, targetKdtId: n || r };
                i
                  ? m.once("app:chainstore:kdtid:update", (e) => {
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
            return m
              .request({
                path: "/wscshop/shopnote/detail.json",
                data: {
                  noteAlias: t,
                  sourceKdtId: a,
                  targetKdtId: s,
                  isChain: o,
                  adaptorComponents: l.a.join(","),
                },
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
                  title: a,
                  description: s,
                  headPhoto: o = "",
                  coverPhotos: r = [],
                  noteItemsBriefInfo: i = [],
                } = e.noteData;
                this.setYZData({
                  noteId: t,
                  noteData: {
                    title: a,
                    noteId: t,
                    description: s,
                    sharePhoto:
                      o ||
                      Object(n.a)(r, "[0]") ||
                      Object(n.a)(i, "[0].imageUrl"),
                  },
                });
              }
            }
          },
          onLoad(e) {
            m.getShopInfo().then((t) => {
              var { shopMetaInfo: a = {} } = t || {};
              if (a.lock_status === g.c.LOCK)
                return wx.redirectTo({ url: "/packages/common/lock/index" });
              var { noteAlias: s, salesmanAlias: o } = e || {};
              s
                ? this.fetchNoteData(s)
                    .then((e) => {
                      this.initNoteData(e),
                        this.setYZData({ noteAlias: e, salesmanAlias: o });
                    })
                    .catch(() => {
                      Object(i.a)("页面参数错误");
                    })
                : Object(i.a)("页面参数错误");
            });
          },
          enterShop() {
            c.a.switchTab({ url: "/packages/home/dashboard/index" });
          },
          handleSetSrc(e) {
            var { src: t } = e.detail;
            this.setYZData({ posterSrc: t });
          },
          handleClickIcon(e) {
            var { alias: t } = e.currentTarget.dataset;
            "tuwenPoster" === t && this.saveImage();
          },
          saveImage() {
            var e = this,
              { posterSrc: t } = this.data;
            t &&
              (wx.showLoading({ title: "保存中" }),
              m.logger &&
                m.logger.log({
                  et: "click",
                  ei: "goods_savephoto",
                  en: "点击海报保存按钮",
                  si: "",
                  params: {},
                }),
              this.saveShareImage(t)
                .then(() => {
                  wx.hideLoading(),
                    wx.showToast({
                      title: "保存成功",
                      icon: "success",
                      duration: 2e3,
                    }),
                    this.triggerEvent("saved");
                })
                .catch(function (t) {
                  var { errMsg: a } = void 0 === t ? {} : t;
                  wx.hideLoading(),
                    "saveImageToPhotosAlbum:fail auth deny" !== a &&
                    "saveImageToPhotosAlbum:fail authorize no response" !== a
                      ? wx.showToast({
                          title: "保存失败",
                          icon: "none",
                          duration: 2e3,
                        })
                      : e.getSavePhotosRights();
                }));
          },
          saveShareImage: (e) =>
            new Promise((t, a) => {
              wx.saveImageToPhotosAlbum({ filePath: e, success: t, fail: a });
            }),
          getSavePhotosRights() {
            this.triggerEvent("open-setting"),
              wx.openSetting &&
                wx.openSetting({
                  success: (e) => {
                    var { authSetting: t } = e;
                    t["scope.writePhotosAlbum"] && this.saveImage();
                  },
                });
          },
          clickShareLog() {
            var e = { banner_id: Object(u.a)("share") },
              t = Object(h.b)("click_content", e);
            Object(h.a)(t);
          },
          formatObjToQuery: (e) =>
            Object.keys(e).reduce(
              (t, a) => (t += "&" + a + "=" + (e[a] || "")),
              ""
            ),
          getShareData() {
            var { noteAlias: e } = this.__query__,
              { title: t, description: a } = this.data.noteData || {},
              { salesmanAlias: s } = this.data,
              o = Object(n.a)(this.data, "CURRENT_GLOBAL_SHOP.shop_name", ""),
              r = a || o + "的精彩内容分享给你，快来看一看吧",
              i = this.data.noteData,
              h = Object(n.a)(i, "sharePhoto");
            return {
              title: t,
              desc: r,
              path:
                "packages/shop/shopnote/mparticle/detail/index?noteAlias=" +
                e +
                "&" +
                this.formatObjToQuery(Object(d.c)({ sl: s })),
              imageUrl: (h = /^(http|https):\/\//.test(h) ? h : "https:" + h),
            };
          },
          onShareAppMessage() {
            var e = this.getShareData();
            return this.clickShareLog(), e;
          },
          onUnload() {},
          redirectToHome() {
            c.a.switchTab({ url: "/packages/home/dashboard/index" });
          },
        });
      },
    }
  )
);
