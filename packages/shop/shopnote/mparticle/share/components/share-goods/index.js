"use strict";
var r = require("~/r");
r(
  "22ay",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "22ay": function (e, t, a) {
        a.r(t);
        var r = a("eijD"),
          i = a("Fcif"),
          s = a("u8kV"),
          n = a("8B9M"),
          o = a("zMoS"),
          d = a("Sd3C"),
          g = a("a1Mm"),
          h = a("WOkX"),
          c = a("WmJz"),
          l = a("+oxD"),
          p = Object(n.a)(),
          { windowHeight: u } = wx.getSystemInfoSync();
        Object(s.c)({
          properties: {
            goodsImage: { type: String, value: "" },
            salesmanAlias: String,
            shopName: String,
            path: String,
            title: String,
            desc: String,
          },
          data: {
            canvasId: "drawerImage",
            showCanvas: !1,
            src: "",
            img: "",
            weappCode: "",
            posterStyle: {
              width: "292px",
              height: "320px",
              top: "16px",
              left: 0,
            },
          },
          attached() {},
          methods: {
            drawSalemanCard() {
              wx.showLoading({ title: "正在生成" }),
                this.setYZData({ showCanvas: !0 }, this.draw.bind(this));
            },
            handlePoster(e) {
              void 0 === e && (e = {});
              var { openType: t } = e.detail || {};
              "share" !== t &&
                (wx.showLoading({ title: "正在生成" }),
                this.setYZData({ showCanvas: !0 }, this.draw.bind(this)));
            },
            draw() {
              this.loadGoodsImage()
                .then(this.drawQrCode.bind(this))
                .then(this.createTempPath.bind(this))
                .then((e) => {
                  this.setYZData({ src: e }, () => {
                    this.triggerEvent("success"),
                      this.triggerEvent("set-src", { src: e });
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
                  wx.showToast({
                    title: t || "生成图片路径失败",
                    icon: "none",
                  }),
                    p.getUserInfo((e) => {
                      p.logger &&
                        p.logger.appError({
                          name: "draw_goods_poster_error",
                          message: "绘制海报失败",
                          detail: {
                            errMsg: t,
                            userName: Object(o.a)(e, "userInfo.nickName"),
                          },
                        });
                    }),
                    this.triggerEvent("failed", { err: e });
                })
                .then(() => {
                  this.setYZData({ showCanvas: !1 }),
                    this.triggerEvent("finished");
                });
            },
            drawQrCode() {
              var { weappCode: e, salesmanAlias: t } = this.data,
                a = getCurrentPages(),
                r = a[a.length - 1];
              if (e) return Promise.resolve();
              if (!a.length) return Promise.reject();
              var { noteAlias: s } = r.options,
                n = { noteAlias: s };
              return (
                t && (n = Object(i.a)({}, n, Object(h.c)({ sl: t }))),
                Object(c.a)(
                  "packages/shop/shopnote/mparticle/detail/index",
                  n
                ).then(
                  (e) => (
                    this.setYZData({ weappCode: e }), this.drawShareImage(e)
                  )
                )
              );
            },
            createTempPath() {
              return new Promise((e, t) => {
                setTimeout(() => {
                  var { canvasId: a } = this.data;
                  wx.canvasToTempFilePath(
                    {
                      canvasId: a,
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
                    var a = Object(g.a)(this.data.goodsImage, "!730x0.jpg"),
                      r = Object(d.d)(a);
                    if (!r)
                      return wx.showToast({
                        title: "生成卡片失败:",
                        icon: "none",
                        duration: 2e3,
                      });
                    (function (e) {
                      var t = Object(n.a)();
                      return new Promise((a, r) => {
                        t.downloadFile({
                          url: e,
                          success: (e) => {
                            a(e.tempFilePath);
                          },
                          fail: (e) => {
                            r(e);
                          },
                        });
                      });
                    })(r)
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
            handleLoad(e) {
              var { width: t, height: a } = e.detail;
              this.setYZData({ imageInfo: { width: t, height: a } }, () => {
                this.drawSalemanCard();
              });
            },
            getGoodImageInfo() {
              var { imageInfo: { width: e = 0, height: t = 0 } = {} } =
                  this.data,
                a = Number((e / t).toFixed(2));
              return a < 1 || a > 2.35
                ? { w: 292, h: 292 }
                : { w: 292, h: 292 / a };
            },
            drawShareImage(e) {
              var t = this;
              return Object(r.a)(function* () {
                var {
                    img: a,
                    desc: r,
                    title: i,
                    canvasId: s,
                    shopName: n,
                  } = t.data,
                  {
                    imgLRPadding: o,
                    posterWidth: d,
                    coverImgHeight: g,
                    textStartX: h,
                    titleWidth: c,
                    titleFontSize: p,
                    titleLineHeight: m,
                    titleStartY: w,
                    descShadowStartY: f,
                    descShadowBorder: S,
                    descWidth: I,
                    descFontSize: v,
                    descLineHeight: b,
                    descStartY: O,
                    descHeight: j,
                    qrCodeWH: y,
                    qrCodeStartY: x,
                    qrCodeFontSize: F,
                    qrCodeFirstTextStartY: C,
                    shareText: P,
                    qrCodeFirstTextShopNameWidth: T,
                    qrCodeSecondTextStartY: q,
                    posterHeight: Y,
                  } = Object(l.c)({
                    imageInfo: t.getGoodImageInfo(),
                    desc: r,
                    title: i,
                  }),
                  D = u - 100 - 32,
                  K = Number(D / Y).toFixed(2),
                  N = Y > D ? d * K : d,
                  k = Y > D ? D : Y;
                t.setYZData(
                  {
                    posterHeight: Y,
                    posterStyle: {
                      width: N + "px",
                      height: k + "px",
                      top: (D - k) / 2 + "px",
                      left: (292 - N) / 2 + "px",
                    },
                  },
                  () => {
                    var u = wx.createCanvasContext(t.data.canvasId, t),
                      D = (e) => (r ? e : e - j);
                    u.setFillStyle("white"),
                      u.fillRect(0, 0, d, Y),
                      u.drawImage(a, 0, 0, d, g, d, g),
                      Object(l.b)(
                        i,
                        "#323233",
                        p,
                        u,
                        h + 1,
                        w + (m - p) / 2,
                        m,
                        c
                      ),
                      r &&
                        (u.setFillStyle("#F7F8FA"),
                        (u.lineJoin = "round"),
                        (u.lineWidth = S),
                        (u.strokeStyle = "#F7F8FA"),
                        u.strokeRect(h + 1, f, c, j),
                        u.fillRect(h + 1, f, c, j),
                        Object(l.b)(
                          r,
                          "#969799",
                          v,
                          u,
                          h + 8 + 1,
                          O + (b - v) / 2,
                          b,
                          I
                        )),
                      e && u.drawImage(e, h + 1, D(x), y, y),
                      u.setFontSize(F),
                      u.setFillStyle("#969799"),
                      u.fillText(P, h + y + o + 1, D(C)),
                      u.setFillStyle("#323233"),
                      Object(l.a)(
                        n,
                        "#323233",
                        F,
                        u,
                        h + y + o + 1 + P.length * F + 2,
                        D(C),
                        T
                      ),
                      u.setFillStyle("#969799"),
                      u.fillText(
                        "长按识别小程序码阅读全文",
                        h + y + o + 1,
                        D(q)
                      ),
                      u.draw(),
                      t.triggerEvent(e ? "created" : "inited", { canvasId: s });
                  }
                );
              })();
            },
          },
        });
      },
      "5tio": function (e, t, a) {
        a.d(t, "a", function () {
          return s;
        });
        var r = a("8B9M"),
          i = Object(r.a)(),
          s = (e) => {
            var t = (i.logger.getGlobal() || {}).user || {},
              a = { is_share: 1, share_cmpt: e };
            return t.uuid && (a.from_uuid = t.uuid || ""), a;
          };
      },
      WmJz: function (e, t, a) {
        a.d(t, "a", function () {
          return g;
        }),
          a.d(t, "b", function () {
            return h;
          });
        a("Fcif");
        var r = a("Sd3C"),
          i = a("Yt9W"),
          s = (a("2wjL"), a("8B9M")),
          n = a("5tio"),
          o = Object(n.a)("poster");
        function d(e, t, a) {
          var r = Object(s.a)(),
            i = r.logger;
          r.carmen({
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
        function g(e, t, a) {
          void 0 === t && (t = {});
          var n = Object(s.a)(),
            o = i.b.getDCPS(),
            d = n.getOfflineId(),
            { chainStoreInfo: g = {} } = n.getShopInfoSync(),
            { isMultiOnlineShop: h } = g,
            l = h ? n.getHQKdtId() : n.getKdtId(),
            p = {
              kdtId: (a = a || (n.getAppKdtId && n.getAppKdtId()) || l),
              page: e,
              guestKdtId: n.getKdtId(),
            };
          return (
            Object.assign(p, t),
            t.nostoreid || Object.assign(p, { dcPs: o, offlineId: d }),
            (t = {
              scene: encodeURIComponent(JSON.stringify(p)),
              page: "pages/common/blank-page/index",
              kdtId: a,
              sid: n.getSessionId(),
              isWeapp: 1,
              hyaLine: t.hyaLine ? 1 : 0,
            }),
            Object(r.a)({
              origin: "h5",
              query: t,
              pathname: "/v3/weapp/ultra-code.png",
            }).then((e) => c(e))
          );
        }
        function h(e, t, a) {
          void 0 === t && (t = {});
          var r = Object(s.a)(),
            n = r.logger,
            { isYouzanApp: g } = r.globalData,
            h = i.b.getDCPS(),
            c = r.getOfflineId(),
            { chainStoreInfo: l = {} } = r.getShopInfoSync(),
            { isMultiOnlineShop: p } = l,
            u = p ? r.getHQKdtId() : r.getKdtId(),
            m = {
              kdtId: (a =
                a || (r.getAppKdtId && r.getAppKdtId()) || (g ? 40419900 : u)),
              page: e,
              guestKdtId: t.dsKdtId || r.getKdtId(),
            };
          return (
            Object.assign(m, t, o),
            t.nostoreid || Object.assign(m, { dcPs: h, offlineId: c }),
            new Promise((e, i) => {
              r.request({
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
        function c(e) {
          var t = Object(s.a)();
          return new Promise((a, r) => {
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
                  return r("获取图片失败");
                a(t);
              },
              fail: r,
            });
          });
        }
      },
    }
  )
);
