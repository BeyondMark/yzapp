"use strict";
var r = require("~/r");
r(
  "UW2L",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      IORD: function (e, t, a) {
        var s = a("9ZMt"),
          o = a("HbRL"),
          i = a("MLLI"),
          h = a("0hwI");
        t.a = () =>
          new Promise((e, t) => {
            try {
              !(function () {
                var { SDKVersion: e } = Object(i.b)();
                return (
                  Object(o.a)(e, "3.2.5") >= 0 &&
                  !!s.default.$native.showShareImageMenu
                );
              })()
                ? e(!1)
                : h.a
                    .get({
                      url: "/wscshop/showcase/share/useWxImageShare.json",
                      data: a,
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
            var a;
          });
      },
      UW2L: function (e, t, a) {
        a.r(t);
        var s = a("Fcif"),
          o = a("xRet"),
          i = a("0lqJ"),
          h = a("rqVN"),
          r = a("Yt9W"),
          n = a("IORD"),
          c = a("VQj9"),
          l = a("LzxJ"),
          d = a("kv38"),
          g = a("WOkX"),
          u = a("lRMv"),
          p = getApp();
        Object(h.b)({
          behaviors: [d.a],
          properties: {
            showSharePop: {
              type: Boolean,
              value: !1,
              observer(e) {
                this.showSheet(e);
              },
            },
            pageType: { type: String, value: "" },
            salesman: { type: Object, value: {} },
            featureAlias: { type: String },
            noBottom: { type: Boolean, default: !1 },
            activity: { type: Object, default: {} },
          },
          data: {
            showModal: !1,
            src: "",
            sheet: {
              show: !1,
              overlay: !0,
              cancelText: "取消",
              closeOnClickOverlay: !0,
              actions: [
                { name: "发送给朋友", openType: "share" },
                { name: "生成海报" },
              ],
            },
            shareTag: "",
            paddingBottom: 0,
            useWxImageShare: !1,
            kdtId: void 0,
            pagePath: void 0,
            popStyle: "",
            containerStyle: "",
            posterStyle: "",
            showWhitePop: !1,
          },
          attached() {
            var e = this;
            this.data.noBottom ||
              p.isSwitchTab().then((e) => {
                this.setData({ paddingBottom: e ? 49 : 0 });
              });
            var { chainStoreInfo: t = {} } = p.getShopInfoSync(),
              { isMultiOnlineShop: a } = t,
              s = a ? p.getHQKdtId() : p.getKdtId(),
              o = (p.getAppKdtId && p.getAppKdtId()) || s;
            this.setData({ kdtId: o }),
              Object(n.a)({ kdtId: o }).then(function (t) {
                void 0 === t && (t = {}), e.setData({ useWxImageShare: t });
              }),
              (getApp().globalData.eventBusPoster =
                this.onPosterCallback.bind(this));
          },
          detached() {
            getApp().globalData.eventBusPoster = null;
          },
          methods: {
            showSheet(e) {
              this.setData(
                Object(s.a)({ "sheet.show": e }, e && { "sheet.overlay": !0 })
              );
            },
            closeActionSheet() {
              this.setData({ "sheet.show": !1 }), this.triggerEvent("finished");
            },
            onShareCallback() {
              this.setData({ "sheet.overlay": !1 }),
                this.triggerEvent("finished");
            },
            onPosterCallback() {
              wx.showLoading({ title: "正在生成" }), this.doGetPoster(!0);
            },
            setReservePosterStyle(e) {
              var { width: t, height: a } = e,
                s = a / (t / 560),
                o = s + 144;
              this.setData({
                popStyle: "height: " + (o + 72) + "rpx",
                containerStyle: "height: " + o + "rpx",
                posterStyle: "height: " + s + "rpx",
              });
            },
            doGetPoster(e, t) {
              void 0 === e && (e = !1), void 0 === t && (t = 0);
              var {
                src: a,
                pageType: h,
                featureAlias: n,
                shareTag: c,
                kdtId: d,
                pagePath: v,
                useWxImageShare: w,
                activity: S,
              } = this.data;
              if (a) return wx.hideLoading(), void this.showPoster(a, v);
              var m,
                b = p.getKdtId(),
                P = (m = getCurrentPages())[m.length - 1],
                I = ("micropage" === h && n) || P.options.alias || "",
                f = P.route.split("?")[0],
                y = r.b.getDCPS(),
                x = p.getOfflineId();
              if (o.d.test(f)) {
                var O = (getApp().globalData.tabbarOriginList || [])[
                    Object(i.a)()
                  ],
                  { pagePath: j } = O || {};
                f = j || f;
              }
              var T = Object(s.a)(
                  {
                    page: f,
                    guestKdtId: b,
                    kdtId: d,
                    dcPs: y,
                    offlineId: x,
                    alias: I,
                  },
                  u.i
                ),
                { salesman: D = {} } = this.data,
                { seller: k } = D;
              k && (T = Object(s.a)({}, T, Object(g.c)({ sls: k }))),
                S && (T = Object(s.a)({}, T, S)),
                c && (T = Object(s.a)({}, T, { shareTag: c }));
              var B = "pages/common/blank-page/index",
                M = [
                  Object(l.a)({
                    retry: t,
                    kdtId: b,
                    alias: I,
                    pageType: h,
                    page: B,
                    scene: T,
                    activity: S,
                  }),
                ];
              w && M.push(Object(l.d)({ page: B, scene: T })),
                Promise.all(M)
                  .then((e) => {
                    var [t, a] = e;
                    wx.hideLoading();
                    var { value: s, theme: o, height: i, width: h } = t,
                      r =
                        null != a && a.scene ? B + "?scene=" + a.scene : void 0;
                    this.setReservePosterStyle({ width: h, height: i }),
                      this.setData({
                        src: s,
                        showWhitePop: "white" === o,
                        pagePath: r,
                      }),
                      this.showPoster(s, r);
                  })
                  .catch(() => {
                    e
                      ? setTimeout(() => {
                          this.doGetPoster(!1, 1);
                        }, 1e3)
                      : (wx.showToast({
                          title: "生成卡片失败",
                          icon: "none",
                          duration: 2e3,
                        }),
                        this.closeShareImageModal(),
                        this.closeActionSheet());
                  });
            },
            closeShareImageModal() {
              this.setData({ showModal: !1 });
            },
            clickSaveImage() {
              var { src: e } = this.data;
              e &&
                (wx.showLoading({ title: "保存中" }),
                Object(c.a)("scope.writePhotosAlbum")
                  .then(() => {
                    this.saveShareImage(e)
                      .then(() => {
                        wx.hideLoading(),
                          wx.showToast({
                            title: "保存成功",
                            icon: "success",
                            duration: 2e3,
                          }),
                          this.closeShareImageModal();
                      })
                      .catch(() => {
                        wx.hideLoading(),
                          wx.showToast({
                            title: "保存失败",
                            icon: "none",
                            duration: 2e3,
                          });
                      });
                  })
                  .catch(() => {
                    wx.hideLoading(),
                      wx.showToast({
                        title: "请允许访问相册后重试",
                        icon: "none",
                        duration: 1e3,
                      }),
                      setTimeout(() => {
                        wx.openSetting({
                          success: (e) => {
                            var { authSetting: t } = e;
                            t["scope.writePhotosAlbum"] &&
                              this.clickSaveImage();
                          },
                        });
                      }, 1e3);
                  }));
            },
            saveShareImage: (e) =>
              new Promise((t, a) => {
                p.downloadFile({
                  url: e,
                  success(e) {
                    200 === e.statusCode
                      ? wx.saveImageToPhotosAlbum({
                          filePath: e.tempFilePath,
                          success: t,
                          fail: a,
                        })
                      : a();
                  },
                  fail: a,
                });
              }),
            updateShareTag(e) {
              var {
                detail: { shareTag: t },
              } = e;
              t && this.setData({ shareTag: t });
            },
            updateShareStatus() {
              this.triggerEvent("update-share-status");
            },
            showPosterModal() {
              this.setData({ showModal: !0 }, () => {
                this.triggerEvent("finished");
              });
            },
            showPoster(e, t) {
              if (e) {
                var { useWxImageShare: a } = this.data;
                a
                  ? wx.downloadFile({
                      url: e,
                      success: (e) => {
                        this.closeActionSheet(),
                          wx.showShareImageMenu({
                            path: e.tempFilePath,
                            needShowEntrance: !0,
                            entrancePath: t,
                          });
                      },
                      fail: () => {
                        this.showPosterModal();
                      },
                    })
                  : this.showPosterModal();
              }
            },
          },
        });
      },
      VQj9: function (e, t, a) {
        t.a = (e) =>
          new Promise((t, a) => {
            wx.getSetting({
              success: (s) => {
                s.authSetting[e]
                  ? t()
                  : wx.authorize({ scope: e, success: t, fail: a });
              },
              fail: a,
            });
          });
      },
      kv38: function (e, t, a) {
        var s = a("8B9M"),
          o = Object(s.a)();
        t.a = Behavior({
          data: {
            popupBottom: 0,
            noSafeBottom: 0,
            authorizePopupCustomStyle: "",
            safeBottom: "iPhone-X" === o.deviceType,
          },
          attached() {
            o.isSwitchTab("", !0).then((e) => {
              e &&
                this.setData({
                  popupBottom: 49,
                  authorizePopupCustomStyle: "",
                  noSafeBottom: this.data.safeBottom ? 83 : 49,
                });
            });
          },
        });
      },
    }
  )
);
