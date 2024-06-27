"use strict";
var r = require("~/r");
r(
  "1FLH",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "1FLH": function (e, t, a) {
        a.r(t);
        var s = a("Fcif"),
          o = a("u8kV"),
          i = a("svh/"),
          r = a("TMo0"),
          n = a("DXqK"),
          c = a("TXmq"),
          h = a("5tio"),
          u = a("i+tm"),
          d = Object(h.a)("poster");
        Object(o.b)({
          mapData: Object(s.a)(
            {},
            Object(i.h)(["showSheet", "activity", "pageQuery", "userInfo"]),
            Object(i.f)(["prizeList"])
          ),
          data: {
            showPoster: !1,
            posterUrl: "",
            actions: [
              {
                name: "邀请好友参与活动",
                type: "native",
                openType: "share",
                shareType: "native_custom",
              },
              { name: "生成邀请海报", type: "poster", shareType: "poster" },
            ],
          },
          methods: Object(s.a)({}, Object(i.g)(["TOGGLE_SHEET_SHOW"]), {
            generateQrCode() {
              if (this.data.posterUrl)
                return this.setYZData({ showPoster: !0 }), void this.onCancel();
              wx.showLoading({ title: "海报生成中..." });
              var { shareVoucherAlias: e, endAt: t } = this.data.activity,
                a = Object(s.a)({}, this.data.pageQuery, d, {
                  voucherAlias: e,
                }),
                { avatar: o, nickName: i } = this.data.userInfo,
                r = {
                  lotteryTime: Object(n.d)(t, "MM月DD日 HH:mm"),
                  nickName: i,
                  avatar: o,
                  prizeInfo: this.data.prizeList,
                  page: "packages/ump/lottery-code/index",
                  query: a,
                };
              Object(c.b)(r)
                .then((e) => {
                  wx.hideLoading(),
                    this.setYZData({ posterUrl: e.img, showPoster: !0 }),
                    this.onCancel();
                })
                .catch(() => {
                  wx.hideLoading(),
                    wx.showToast({ title: "生成海报失败", icon: "none" });
                });
            },
            onSelect(e) {
              var { type: t, shareType: a } = e.detail;
              Object(u.e)(a), "native" !== t && this.generateQrCode();
            },
            onCancel() {
              this.TOGGLE_SHEET_SHOW();
            },
            onClose() {
              this.setYZData({ showPoster: !1 });
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
            saveShareImage: (e) =>
              new Promise((t, a) => {
                wx.downloadFile({
                  url: e,
                  success(e) {
                    200 === e.statusCode &&
                      wx.saveImageToPhotosAlbum({
                        filePath: e.tempFilePath,
                        success: t,
                        fail: a,
                      });
                  },
                  fail: a,
                });
              }),
          }),
        });
      },
      "5tio": function (e, t, a) {
        a.d(t, "a", function () {
          return i;
        });
        var s = a("8B9M"),
          o = Object(s.a)(),
          i = (e) => {
            var t = (o.logger.getGlobal() || {}).user || {},
              a = { is_share: 1, share_cmpt: e };
            return t.uuid && (a.from_uuid = t.uuid || ""), a;
          };
      },
    }
  )
);
