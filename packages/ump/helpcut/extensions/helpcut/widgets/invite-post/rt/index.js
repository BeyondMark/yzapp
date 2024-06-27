"use strict";
var r = require("~/r");
r(
  "WNCj",
  Object.assign(
    {},
    require("~/packages/ump/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "53ek": function (e, t, a) {
        var s = (e, t, a) => {
          return ((i = e), Object.keys(i).map((e) => [e, i[e]]))
            .map((e) => {
              var [t, i] = e;
              return [t, "object" == typeof i ? s(i, [], a) : i(a)];
            })
            .concat(t.map((e) => [e, a[e]]))
            .reduce((e, t) => {
              var [a, s] = t;
              return (e[a] = s), e;
            }, {});
          var i;
        };
        t.a = s;
      },
      "5tio": function (e, t, a) {
        a.d(t, "a", function () {
          return o;
        });
        var s = a("8B9M"),
          i = Object(s.a)(),
          o = (e) => {
            var t = (i.logger.getGlobal() || {}).user || {},
              a = { is_share: 1, share_cmpt: e };
            return t.uuid && (a.from_uuid = t.uuid || ""), a;
          };
      },
      WNCj: function (e, t, a) {
        a.r(t);
        var s = a("Fcif"),
          i = a("7/pW"),
          o = a("VmHG"),
          n = a("WmJz"),
          r = a("TMo0"),
          d = a("jah2"),
          c = a("81F4"),
          u = a("lRMv");
        Object(i.a)({
          data: {
            showPoster: !1,
            posterUrl: "",
            actions: [
              { name: "邀请好友帮砍", type: "native", openType: "share" },
              { name: "生成邀请海报", type: "poster" },
            ],
          },
          attached() {
            Object(o.d)(this, [
              "showActionSheet",
              "bargainDetail",
              "initiatorInfo",
              "queryOptions",
              "goodsDetail",
              "isNewHelpCut",
            ]),
              Object(o.b)(this, ["SET_SHOW_ACTION_SHEET"]);
          },
          methods: {
            onSelect(e) {
              var { type: t } = e.detail;
              "native" !== t && this.generateQrCode();
            },
            onCancel() {
              this.SET_SHOW_ACTION_SHEET(!1);
            },
            onClose() {
              this.setYZData({ showPoster: !1 });
            },
            generateQrCode() {
              if (this.data.posterUrl)
                return this.setYZData({ showPoster: !0 }), void this.onCancel();
              var { sponsorId: e } = this.data.queryOptions || {},
                {
                  umpActivityId: t,
                  minPrice: a,
                  umpAlias: i,
                } = this.data.bargainDetail || {},
                { avatar: o, nickName: r } = this.data.initiatorInfo || {};
              wx.showLoading({ title: "海报生成中..." }),
                Object(n.b)(
                  c.b,
                  Object(s.a)({}, u.i, {
                    sponsorId: e,
                    umpAlias: i,
                    umpActivityId: t,
                  })
                )
                  .then((e) => {
                    var t = {
                      qrcode: e,
                      avatar: o,
                      nickName: r,
                      minPrice: a,
                      goodsDetail: this.data.goodsDetail,
                    };
                    Object(d.d)(t)
                      .then((e) => {
                        wx.hideLoading(),
                          this.setYZData({ posterUrl: e.img, showPoster: !0 }),
                          this.onCancel();
                      })
                      .catch(() => {
                        wx.hideLoading(),
                          wx.showToast({ title: "生成海报失败", icon: "none" });
                      });
                  })
                  .catch(() => {
                    wx.hideLoading(),
                      wx.showToast({ title: "生成海报失败", icon: "none" });
                  });
            },
            savePoster() {
              var { posterUrl: e } = this.data;
              e &&
                (wx.showLoading({ title: "保存中" }),
                Object(r.a)("scope.writePhotosAlbum")
                  .then(() => {
                    this.saveShareImage(e)
                      .then(() => {
                        wx.hideLoading(),
                          wx.showToast({
                            title: "保存成功",
                            icon: "success",
                            duration: 2e3,
                          }),
                          this.onClose();
                      })
                      .catch((e) => {
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
                      wx.showModal({
                        content:
                          "需要同意将分享图片保存到相册，点击确定后跳转至设置页操作",
                        success: (e) => {
                          e.cancel ||
                            wx.openSetting({
                              success: (e) => {
                                var { authSetting: t } = e;
                                t["scope.writePhotosAlbum"] &&
                                  this.savePoster();
                              },
                            });
                        },
                      });
                  }));
            },
            saveShareImage(e) {
              var t = getApp();
              return new Promise((a, s) => {
                t.downloadFile({
                  url: e,
                  success(e) {
                    200 === e.statusCode &&
                      wx.saveImageToPhotosAlbum({
                        filePath: e.tempFilePath,
                        success: a,
                        fail: s,
                      });
                  },
                  fail: s,
                });
              });
            },
          },
        });
      },
      WmJz: function (e, t, a) {
        a.d(t, "a", function () {
          return c;
        }),
          a.d(t, "b", function () {
            return u;
          });
        a("Fcif");
        var s = a("Sd3C"),
          i = a("Yt9W"),
          o = (a("2wjL"), a("8B9M")),
          n = a("5tio"),
          r = Object(n.a)("poster");
        function d(e, t, a) {
          var s = Object(o.a)(),
            i = s.logger;
          s.carmen({
            api: "youzan.shop.weapp.codeimage/1.0.0/convert",
            method: "POST",
            data: { mimeType: "image/png", base64Str: "base64," + e },
            success: (e) => {
              var a = e.attachment_url || "";
              "string" == typeof a && (a = a.replace(/^http:/, "https:")), t(a);
            },
            fail: (t) => {
              i.requestError({
                alert: "warn",
                message: "小程序码转换失败",
                response: "err: " + JSON.stringify(t),
                request: { options: { base64Str: e } },
              }),
                a("小程序码地址获取失败");
            },
          });
        }
        function c(e, t, a) {
          void 0 === t && (t = {});
          var n = Object(o.a)(),
            r = i.b.getDCPS(),
            d = n.getOfflineId(),
            { chainStoreInfo: c = {} } = n.getShopInfoSync(),
            { isMultiOnlineShop: u } = c,
            h = u ? n.getHQKdtId() : n.getKdtId(),
            g = {
              kdtId: (a = a || (n.getAppKdtId && n.getAppKdtId()) || h),
              page: e,
              guestKdtId: n.getKdtId(),
            };
          return (
            Object.assign(g, t),
            t.nostoreid || Object.assign(g, { dcPs: r, offlineId: d }),
            (t = {
              scene: encodeURIComponent(JSON.stringify(g)),
              page: "pages/common/blank-page/index",
              kdtId: a,
              sid: n.getSessionId(),
              isWeapp: 1,
              hyaLine: t.hyaLine ? 1 : 0,
            }),
            Object(s.a)({
              origin: "h5",
              query: t,
              pathname: "/v3/weapp/ultra-code.png",
            }).then((e) => p(e))
          );
        }
        function u(e, t, a) {
          void 0 === t && (t = {});
          var s = Object(o.a)(),
            n = s.logger,
            { isYouzanApp: c } = s.globalData,
            u = i.b.getDCPS(),
            p = s.getOfflineId(),
            { chainStoreInfo: h = {} } = s.getShopInfoSync(),
            { isMultiOnlineShop: g } = h,
            l = g ? s.getHQKdtId() : s.getKdtId(),
            m = {
              kdtId: (a =
                a || (s.getAppKdtId && s.getAppKdtId()) || (c ? 40419900 : l)),
              page: e,
              guestKdtId: t.dsKdtId || s.getKdtId(),
            };
          return (
            Object.assign(m, t, r),
            t.nostoreid || Object.assign(m, { dcPs: u, offlineId: p }),
            new Promise((e, i) => {
              s.request({
                data: {
                  kdtId: a,
                  page: "pages/common/blank-page/index",
                  query: JSON.stringify(m),
                },
                method: "POST",
                path: "/v3/weapp/ultra-code.json",
              })
                .then((a) => {
                  if (!a.image_base64)
                    return (
                      n.requestError({
                        alert: "warn",
                        message: "获取小程序码失败",
                        response: "res: " + JSON.stringify(a),
                        request: { options: t },
                      }),
                      i("获取小程序码失败")
                    );
                  d(a.image_base64 || "", e, i);
                })
                .catch((e) => {
                  n.requestError({
                    alert: "warn",
                    message: "获取小程序码失败",
                    response: "err: " + JSON.stringify(e),
                    request: { options: t },
                  }),
                    i("获取小程序码失败");
                });
            })
          );
        }
        function p(e) {
          var t = Object(o.a)();
          return new Promise((a, s) => {
            t.downloadFile({
              url: e,
              success(e) {
                var { tempFilePath: t, header: i } = e;
                if (
                  i &&
                  !/image/.test(
                    i["content-type"] || i["Content-Type"] || i.contentType
                  )
                )
                  return s("获取图片失败");
                a(t);
              },
              fail: s,
            });
          });
        }
      },
    }
  )
);
