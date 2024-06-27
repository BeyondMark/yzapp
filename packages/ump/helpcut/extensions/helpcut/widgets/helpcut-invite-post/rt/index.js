"use strict";
var r = require("~/r");
r(
  "hGC9",
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
      hGC9: function (e, t, a) {
        a.r(t);
        var s = a("Fcif"),
          i = a("7/pW"),
          o = a("VmHG"),
          r = a("TMo0"),
          n = a("jah2"),
          c = a("5tio"),
          h = a("8P+v"),
          l = Object(c.a)("poster"),
          p = getApp();
        Object(i.a)({
          data: {
            showPoster: !1,
            posterUrl: "",
            actions: [
              {
                name: "微信好友",
                icon: "wechat",
                type: "native",
                openType: "share",
              },
              {
                name: "分享海报",
                icon: "https://img01.yzcdn.cn/upload_files/2021/10/21/FqByUQkq0hmPFrrQcliaTwE7N9Mn.png",
                type: "poster",
              },
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
              "shopInfo",
            ]),
              Object(o.b)(this, ["SET_SHOW_ACTION_SHEET"]);
          },
          observers: {
            showActionSheet(e) {
              e &&
                Object(h.d)({
                  et: "view",
                  ei: "sharecard",
                  en: "分享组件曝光",
                  params: { page_type: "helpcut", component: "sharecard" },
                });
            },
          },
          methods: {
            onSelect(e) {
              var { type: t } = e.detail;
              "native" !== t
                ? ("poster" === t &&
                    Object(h.d)({
                      et: "click",
                      ei: "share_poster",
                      en: "分享",
                      params: { share_cmpt: "poster", page_type: "helpcut" },
                    }),
                  this.getPoster())
                : Object(h.d)({
                    et: "click",
                    ei: "share_miniprogram",
                    en: "微信好友点击",
                    params: { page_type: "helpcut" },
                  });
            },
            onCancel() {
              this.SET_SHOW_ACTION_SHEET(!1);
            },
            onClose() {
              this.setYZData({ showPoster: !1 });
            },
            getPoster() {
              var e = Object(s.a)({}, this.data.queryOptions, l),
                { name: t } = (null == this ? void 0 : this.shopInfo) || {},
                { cover: a, title: i, alias: o } = this.data.goodsDetail,
                { minPrice: r, originalPrice: c } = this.data.bargainDetail,
                h = {
                  alias: o,
                  page: "packages/ump/helpcut/index",
                  query: e,
                  shopName: t,
                  goods: { originalPrice: c, minPrice: r, title: i, cover: a },
                };
              wx.showLoading({ title: "正在生成" }),
                Object(n.e)(h)
                  .then((e) => {
                    return e.img
                      ? ((t = e.img),
                        p.downloadFile({ url: t }).then((e) => e.tempFilePath))
                      : Promise.reject();
                    var t;
                  })
                  .then((e) => {
                    wx.hideLoading(),
                      this.setYZData({ posterUrl: e, showPoster: !0 }),
                      this.onCancel();
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
            saveShareImage: (e) =>
              new Promise((t, a) => {
                wx.saveImageToPhotosAlbum({ filePath: e, success: t, fail: a });
              }),
          },
        });
      },
    }
  )
);
