"use strict";
var r = require("~/r");
r(
  "fanj",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
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
    WmJz: function (e, t, a) {
      a.d(t, "a", function () {
        return h;
      }),
        a.d(t, "b", function () {
          return g;
        });
      a("Fcif");
      var s = a("Sd3C"),
        i = a("Yt9W"),
        o = (a("2wjL"), a("8B9M")),
        r = a("5tio"),
        n = Object(r.a)("poster");
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
      function h(e, t, a) {
        void 0 === t && (t = {});
        var r = Object(o.a)(),
          n = i.b.getDCPS(),
          d = r.getOfflineId(),
          { chainStoreInfo: h = {} } = r.getShopInfoSync(),
          { isMultiOnlineShop: g } = h,
          l = g ? r.getHQKdtId() : r.getKdtId(),
          p = {
            kdtId: (a = a || (r.getAppKdtId && r.getAppKdtId()) || l),
            page: e,
            guestKdtId: r.getKdtId(),
          };
        return (
          Object.assign(p, t),
          t.nostoreid || Object.assign(p, { dcPs: n, offlineId: d }),
          (t = {
            scene: encodeURIComponent(JSON.stringify(p)),
            page: "pages/common/blank-page/index",
            kdtId: a,
            sid: r.getSessionId(),
            isWeapp: 1,
            hyaLine: t.hyaLine ? 1 : 0,
          }),
          Object(s.a)({
            origin: "h5",
            query: t,
            pathname: "/v3/weapp/ultra-code.png",
          }).then((e) => c(e))
        );
      }
      function g(e, t, a) {
        void 0 === t && (t = {});
        var s = Object(o.a)(),
          r = s.logger,
          { isYouzanApp: h } = s.globalData,
          g = i.b.getDCPS(),
          c = s.getOfflineId(),
          { chainStoreInfo: l = {} } = s.getShopInfoSync(),
          { isMultiOnlineShop: p } = l,
          m = p ? s.getHQKdtId() : s.getKdtId(),
          u = {
            kdtId: (a =
              a || (s.getAppKdtId && s.getAppKdtId()) || (h ? 40419900 : m)),
            page: e,
            guestKdtId: t.dsKdtId || s.getKdtId(),
          };
        return (
          Object.assign(u, t, n),
          t.nostoreid || Object.assign(u, { dcPs: g, offlineId: c }),
          new Promise((e, i) => {
            s.request({
              data: {
                kdtId: a,
                page: "pages/common/blank-page/index",
                query: JSON.stringify(u),
              },
              method: "POST",
              path: "/v3/weapp/ultra-code.json",
            })
              .then((a) => {
                if (!a.image_base64)
                  return (
                    r.requestError({
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
                r.requestError({
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
      function c(e) {
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
    fanj: function (e, t, a) {
      a.r(t);
      var s = a("Fcif"),
        i = a("u8kV"),
        o = a("8B9M"),
        r = a("zMoS"),
        n = a("Sd3C"),
        d = a("a1Mm"),
        h = a("WOkX"),
        g = a("WmJz"),
        c = Object(o.a)();
      Object(i.c)({
        properties: {
          goodsImage: { type: String, value: "" },
          salesmanAlias: String,
          path: String,
          title: String,
          desc: String,
          shopName: String,
        },
        data: {
          canvasId: "drawerImage",
          showModal: !1,
          showCanvas: !1,
          src: "",
          img: "",
          weappCode: "",
          sheet: { show: !1, closeOnClickOverlay: !0 },
          isSupportOpenBusinessView: !!wx.openBusinessView,
          wrapperClass: "",
        },
        attached() {
          var { desc: e } = this.properties,
            t = e
              ? "share-image__container-wrapper"
              : "share-image__container-desc-wrapper";
          this.setYZData({ wrapperClass: t });
        },
        methods: {
          drawSalemanCard() {
            wx.showLoading({ title: "正在生成" }),
              this.setYZData({ showCanvas: !0 }, this.draw.bind(this));
          },
          showSheet(e) {
            this.setYZData({ "sheet.show": e });
          },
          closeActionSheet() {
            this.setYZData({ "sheet.show": !1 }), this.triggerEvent("finished");
          },
          handlePoster(e) {
            "share" !== e.detail.openType &&
              (wx.showLoading({ title: "正在生成" }),
              this.setYZData({ showCanvas: !0 }, this.draw.bind(this)));
          },
          handleRecommend() {
            this.shareGoodsRecommend(), this.closeActionSheet();
          },
          shareGoodsRecommend() {
            wx.showLoading({ title: "正在同步", mask: !0 });
            var e = () => {
              wx.hideLoading(),
                wx.openBusinessView({
                  businessType: "friendGoodsRecommend",
                  extraData: {
                    product: {
                      item_code: this.shareGoodsId || this.data.goodsId,
                      title: this.data.title,
                      image_list: this.data.goodsImageList.map((e) => e.url),
                    },
                  },
                  fail(e) {
                    var { errCode: t = -1 } = e;
                    0 !== t &&
                      -3 !== t &&
                      wx.showToast({
                        title: "推荐失败" + JSON.stringify(e) + e.errCode,
                        icon: "none",
                        duration: 2e3,
                      });
                  },
                });
            };
            c.request({
              path: "/wscshop/goods/query-mall.json",
              data: { alias: this.data.alias },
            })
              .then((t) => {
                (this.shareGoodsId = t.goodsId),
                  t.need_wait ? setTimeout(e, 1500) : e();
              })
              .catch(() => {
                wx.hideLoading(),
                  wx.showToast({
                    title: "同步失败",
                    icon: "none",
                    duration: 2e3,
                  });
              });
          },
          draw() {
            this.loadGoodsImage()
              .then(this.drawQrCode.bind(this))
              .then(this.createTempPath.bind(this))
              .then((e) => {
                this.setYZData({ showModal: !0, src: e }, () => {
                  this.triggerEvent("success");
                });
              })
              .catch((e) => {
                var t = "";
                if ("object" == typeof e)
                  try {
                    t = JSON.stringify(e);
                  } catch (a) {
                    t = String(e);
                  }
                else t = String(e);
                wx.showToast({ title: t || "生成图片路径失败", icon: "none" }),
                  c.getUserInfo((e) => {
                    c.logger &&
                      c.logger.appError({
                        name: "draw_goods_poster_error",
                        message: "绘制商品海报失败",
                        detail: {
                          errMsg: t,
                          userName: Object(r.a)(e, "userInfo.nickName"),
                        },
                      });
                  }),
                  this.triggerEvent("failed", { err: e });
              })
              .then(() => {
                this.setYZData({ showCanvas: !1 }),
                  this.closeActionSheet(),
                  this.triggerEvent("finished");
              });
          },
          drawQrCode() {
            var e = getCurrentPages(),
              t = e[e.length - 1];
            if (this.data.weappCode) return Promise.resolve();
            if (!e.length) return Promise.reject();
            var a = t.route,
              i = t.options;
            return (
              this.data.salesmanAlias &&
                (i = Object(s.a)(
                  {},
                  i,
                  Object(h.c)({ sl: this.data.salesmanAlias })
                )),
              Object(g.a)(a, i).then(
                (e) => (
                  this.setYZData({ weappCode: e }), this.drawShareImage(e)
                )
              )
            );
          },
          createTempPath() {
            return new Promise((e, t) => {
              setTimeout(() => {
                wx.canvasToTempFilePath(
                  {
                    canvasId: this.data.canvasId,
                    success: (t) => {
                      e(t.tempFilePath);
                    },
                    fail: t,
                    complete: () => {
                      wx.hideLoading(), this.setYZData({ show: !1 });
                    },
                  },
                  this
                );
              }, 100);
            });
          },
          loadGoodsImage() {
            return this.data.img
              ? Promise.resolve()
              : this.data.goodsImage
              ? new Promise((e, t) => {
                  var a = Object(d.a)(this.data.goodsImage, "!730x0.jpg"),
                    s = Object(n.d)(a);
                  if (!s)
                    return wx.showToast({
                      title: "生成卡片失败:",
                      icon: "none",
                      duration: 2e3,
                    });
                  (function (e) {
                    var t = Object(o.a)();
                    return new Promise((a, s) => {
                      t.downloadFile({
                        url: e,
                        success: (e) => {
                          a(e.tempFilePath);
                        },
                        fail: (e) => {
                          s(e);
                        },
                      });
                    });
                  })(s)
                    .then((t) => {
                      this.setYZData({ img: t }, e);
                    })
                    .catch((e) => {
                      e &&
                        wx.showToast({
                          title: "生成卡片失败:",
                          icon: "none",
                          duration: 2e3,
                        }),
                        t(e);
                    });
                })
              : Promise.reject();
          },
          getImageInfo: (e) =>
            new Promise((t, a) => {
              wx.getImageInfo({
                src: e,
                success: (e) => {
                  t(e);
                },
                error: (e) => a(e),
              });
            }),
          drawTwoLineText(e, t, a, s, i, o) {
            var r = e,
              n = "",
              d = Math.floor(224 / a),
              h = a + 5;
            r.length > d && ((n = r.slice(d)), (r = r.slice(0, d))),
              n.length >= d && (n = n.slice(0, d - 1) + "..."),
              s.setFontSize(a),
              s.setFillStyle(t),
              s.fillText(r, i, o),
              s.fillText(n, i, o + h);
          },
          drawShareImage(e) {
            var { img: t } = this.data,
              a = wx.createCanvasContext(this.data.canvasId, this),
              { desc: s } = this.data,
              i = (e) => (s ? e : e - 30);
            a.setFillStyle("white"),
              a.fillRect(0, 0, 260, i(320)),
              a.drawImage(t, 0, 0, 260, 145, 260, 145),
              a.setFontSize(18),
              a.setFillStyle("#000000");
            var { title: o } = this.data;
            this.drawTwoLineText(o, "#000000", 18, a, 17, 170),
              s && this.drawTwoLineText(s, "#AAAAAA", 9, a, 17, 213),
              e && a.drawImage(e, 17, i(252), 45, 45),
              a.setFontSize(9),
              a.setFillStyle("#AAAAAA"),
              a.fillText("长按小程序阅读全文", 69, i(273)),
              a.fillText("分享自" + this.data.shopName, 69, i(287)),
              a.draw(),
              this.triggerEvent(e ? "created" : "inited", {
                canvasId: this.data.canvasId,
              });
          },
          closeShareImageModal() {
            this.setYZData({ showModal: !1 });
          },
          clickSaveImage() {
            var e = this,
              { src: t } = this.data;
            t &&
              (wx.showLoading({ title: "保存中" }),
              c.logger &&
                c.logger.log({
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
                    this.closeShareImageModal(),
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
          getSavePhotosRights() {
            this.triggerEvent("open-setting"),
              wx.openSetting &&
                wx.openSetting({
                  success: (e) => {
                    var { authSetting: t } = e;
                    t["scope.writePhotosAlbum"] && this.clickSaveImage();
                  },
                });
          },
          saveShareImage: (e) =>
            new Promise((t, a) => {
              wx.saveImageToPhotosAlbum({ filePath: e, success: t, fail: a });
            }),
        },
      });
    },
  })
);
