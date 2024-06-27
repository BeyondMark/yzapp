"use strict";
var r = require("~/r");
r(
  "Y+ox",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "5tio": function (e, t, s) {
        s.d(t, "a", function () {
          return o;
        });
        var r = s("8B9M"),
          n = Object(r.a)(),
          o = (e) => {
            var t = (n.logger.getGlobal() || {}).user || {},
              s = { is_share: 1, share_cmpt: e };
            return t.uuid && (s.from_uuid = t.uuid || ""), s;
          };
      },
      VQj9: function (e, t, s) {
        t.a = (e) =>
          new Promise((t, s) => {
            wx.getSetting({
              success: (r) => {
                r.authSetting[e]
                  ? t()
                  : wx.authorize({ scope: e, success: t, fail: s });
              },
              fail: s,
            });
          });
      },
      WmJz: function (e, t, s) {
        s.d(t, "a", function () {
          return c;
        }),
          s.d(t, "b", function () {
            return u;
          });
        s("Fcif");
        var r = s("Sd3C"),
          n = s("Yt9W"),
          o = (s("2wjL"), s("8B9M")),
          i = s("5tio"),
          a = Object(i.a)("poster");
        function d(e, t, s) {
          var r = Object(o.a)(),
            n = r.logger;
          r.carmen({
            api: "youzan.shop.weapp.codeimage/1.0.0/convert",
            method: "POST",
            data: { mimeType: "image/png", base64Str: "base64," + e },
            success: (e) => {
              var s = e.attachment_url || "";
              "string" == typeof s && (s = s.replace(/^http:/, "https:")), t(s);
            },
            fail: (t) => {
              n.requestError({
                alert: "warn",
                message: "小程序码转换失败",
                response: "err: " + JSON.stringify(t),
                request: { options: { base64Str: e } },
              }),
                s("小程序码地址获取失败");
            },
          });
        }
        function c(e, t, s) {
          void 0 === t && (t = {});
          var i = Object(o.a)(),
            a = n.b.getDCPS(),
            d = i.getOfflineId(),
            { chainStoreInfo: c = {} } = i.getShopInfoSync(),
            { isMultiOnlineShop: u } = c,
            p = u ? i.getHQKdtId() : i.getKdtId(),
            h = {
              kdtId: (s = s || (i.getAppKdtId && i.getAppKdtId()) || p),
              page: e,
              guestKdtId: i.getKdtId(),
            };
          return (
            Object.assign(h, t),
            t.nostoreid || Object.assign(h, { dcPs: a, offlineId: d }),
            (t = {
              scene: encodeURIComponent(JSON.stringify(h)),
              page: "pages/common/blank-page/index",
              kdtId: s,
              sid: i.getSessionId(),
              isWeapp: 1,
              hyaLine: t.hyaLine ? 1 : 0,
            }),
            Object(r.a)({
              origin: "h5",
              query: t,
              pathname: "/v3/weapp/ultra-code.png",
            }).then((e) => g(e))
          );
        }
        function u(e, t, s) {
          void 0 === t && (t = {});
          var r = Object(o.a)(),
            i = r.logger,
            { isYouzanApp: c } = r.globalData,
            u = n.b.getDCPS(),
            g = r.getOfflineId(),
            { chainStoreInfo: p = {} } = r.getShopInfoSync(),
            { isMultiOnlineShop: h } = p,
            l = h ? r.getHQKdtId() : r.getKdtId(),
            f = {
              kdtId: (s =
                s || (r.getAppKdtId && r.getAppKdtId()) || (c ? 40419900 : l)),
              page: e,
              guestKdtId: t.dsKdtId || r.getKdtId(),
            };
          return (
            Object.assign(f, t, a),
            t.nostoreid || Object.assign(f, { dcPs: u, offlineId: g }),
            new Promise((e, n) => {
              r.request({
                data: {
                  kdtId: s,
                  page: "pages/common/blank-page/index",
                  query: JSON.stringify(f),
                },
                method: "POST",
                path: "/v3/weapp/ultra-code.json",
              })
                .then((s) => {
                  if (!s.image_base64)
                    return (
                      i.requestError({
                        alert: "warn",
                        message: "获取小程序码失败",
                        response: "res: " + JSON.stringify(s),
                        request: { options: t },
                      }),
                      n("获取小程序码失败")
                    );
                  d(s.image_base64 || "", e, n);
                })
                .catch((e) => {
                  i.requestError({
                    alert: "warn",
                    message: "获取小程序码失败",
                    response: "err: " + JSON.stringify(e),
                    request: { options: t },
                  }),
                    n("获取小程序码失败");
                });
            })
          );
        }
        function g(e) {
          var t = Object(o.a)();
          return new Promise((s, r) => {
            t.downloadFile({
              url: e,
              success(e) {
                var { tempFilePath: t, header: n } = e;
                if (
                  n &&
                  !/image/.test(
                    n["content-type"] || n["Content-Type"] || n.contentType
                  )
                )
                  return r("获取图片失败");
                s(t);
              },
              fail: r,
            });
          });
        }
      },
      "Y+ox": function (e, t, s) {
        s.r(t);
        var r = s("rqVN"),
          n = s("ROCX");
        Object(r.b)({
          properties: {
            show: Boolean,
            posterImg: String,
            needDownload: { type: Boolean, value: !1 },
            csPrefix: { type: String, value: "poster" },
          },
          methods: {
            close() {
              this.triggerEvent("close");
            },
            save() {
              wx.showLoading({ title: "保存中" }),
                this.data.needDownload
                  ? Object(n.l)(this.data.posterImg)
                      .then((e) => {
                        if (!e)
                          return wx.showToast({
                            title: "图片下载失败",
                            icon: "error",
                          });
                        this.savePoster(e).then(this.close.bind(this));
                      })
                      .catch(() =>
                        wx.showToast({ title: "图片下载失败", icon: "error" })
                      )
                  : this.savePoster(this.data.posterImg).then(
                      this.close.bind(this)
                    );
            },
            savePoster(e) {
              return Object(n.a)("scope.writePhotosAlbum")
                .then(n.n.bind(this, e))
                .then(() => {
                  wx.hideLoading(),
                    wx.showToast({ title: "保存成功", icon: "success" });
                })
                .catch((e) => {
                  wx.showToast({
                    title: e || "保存失败，请检查保存到相册的权限",
                    icon: "error",
                  });
                });
            },
          },
        });
      },
      sTle: function (e, t, s) {
        var r = s("WmJz");
        s.d(t, "a", function () {
          return r.a;
        }),
          s.d(t, "b", function () {
            return r.b;
          });
      },
    }
  )
);
