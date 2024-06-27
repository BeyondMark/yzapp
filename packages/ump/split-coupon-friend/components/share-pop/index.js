"use strict";
var r = require("~/r");
r(
  "/hIX",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "/hIX": function (e, t, s) {
        s.r(t);
        var a = s("Fcif"),
          o = s("u8kV"),
          i = s("svh/"),
          h = s("TMo0"),
          r = s("i+tm"),
          n = s("dUha"),
          c = s("jmjq"),
          d = s.n(c);
        Object(o.b)({
          data: {
            showPoster: !1,
            posterUrl: "",
            actions: [
              {
                name: "微信",
                type: "native",
                openType: "share",
                shareType: "native_custom",
                icon: "wechat",
                url: "",
              },
              {
                name: "分享海报",
                type: "poster",
                shareType: "poster",
                icon: "poster",
              },
            ],
          },
          mapData: Object(a.a)(
            {},
            Object(i.h)(["sheetShow", "shopName", "activityInfo"]),
            Object(i.f)(["weappSharePath"])
          ),
          methods: Object(a.a)({}, Object(i.g)(["SET_SHEET_SHOW"]), {
            generateQrCode() {
              var e;
              if (this.data.posterUrl)
                return this.setYZData({ showPoster: !0 }), void this.onCancel();
              wx.showLoading({ title: "海报生成中..." }),
                Object(n.c)({
                  shopName: this.data.shopName,
                  page: this.data.weappSharePath,
                  coupon: {
                    value: +d()(
                      null == (e = this.data.activityInfo.startGroupCoupon)
                        ? void 0
                        : e.amount,
                      !0,
                      !1
                    ),
                    unit: "元",
                  },
                })
                  .then((e) => {
                    var { img: t } = e;
                    wx.hideLoading(),
                      this.setYZData({ showPoster: !0, posterUrl: t });
                  })
                  .catch((e) => {
                    wx.hideLoading(), wx.showToast({ title: e, icon: "none" });
                  });
            },
            onSelect(e) {
              var { type: t, shareType: s } = e.detail;
              Object(r.e)(s),
                "poster" === t &&
                  (this.SET_SHEET_SHOW(!1), this.generateQrCode());
            },
            onCancel() {
              this.SET_SHEET_SHOW(!1);
            },
            onClose() {
              this.setYZData({ showPoster: !1 });
            },
            savePoster() {
              var { posterUrl: e } = this.data;
              e &&
                (wx.showLoading({ title: "保存中" }),
                Object(h.a)("scope.writePhotosAlbum")
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
            saveShareImage: (e) =>
              new Promise((t, s) => {
                wx.downloadFile({
                  url: e,
                  success(e) {
                    200 === e.statusCode &&
                      wx.saveImageToPhotosAlbum({
                        filePath: e.tempFilePath,
                        success: t,
                        fail: s,
                      });
                  },
                  fail: s,
                });
              }),
          }),
        });
      },
    }
  )
);
