"use strict";
var r = require("~/r");
r(
  "gTWL",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "3mrM": function (e, t, a) {
        t.a = class {
          constructor(e) {
            (this.timeCache = {}), (this.logFn = e);
          }
          startRecord(e) {
            void 0 === e && (e = "default"),
              this.timeCache[e] || (this.timeCache[e] = {}),
              (this.timeCache[e].startTime = Date.now());
          }
          endRecordAndReportLog(e, t) {
            this.endRecord(e), this.reportLog(e, t);
          }
          endRecord(e) {
            void 0 === e && (e = "default"),
              this.timeCache[e] && this.timeCache[e].startTime
                ? (this.timeCache[e].timeDifference =
                    Date.now() - this.timeCache[e].startTime)
                : (this.timeCache[e] = {});
          }
          reportLog(e, t) {
            void 0 === e && (e = "default"),
              this.timeCache[e] || (this.timeCache[e] = {}),
              this.logFn(this.timeCache[e].timeDifference || 0, t),
              this.reset(e);
          }
          reset(e) {
            this.timeCache[e] = {};
          }
        };
      },
      "5tio": function (e, t, a) {
        a.d(t, "a", function () {
          return i;
        });
        var r = a("8B9M"),
          s = Object(r.a)(),
          i = (e) => {
            var t = (s.logger.getGlobal() || {}).user || {},
              a = { is_share: 1, share_cmpt: e };
            return t.uuid && (a.from_uuid = t.uuid || ""), a;
          };
      },
      VQj9: function (e, t, a) {
        t.a = (e) =>
          new Promise((t, a) => {
            wx.getSetting({
              success: (r) => {
                r.authSetting[e]
                  ? t()
                  : wx.authorize({ scope: e, success: t, fail: a });
              },
              fail: a,
            });
          });
      },
      WmJz: function (e, t, a) {
        a.d(t, "a", function () {
          return c;
        }),
          a.d(t, "b", function () {
            return h;
          });
        a("Fcif");
        var r = a("Sd3C"),
          s = a("Yt9W"),
          i = (a("2wjL"), a("8B9M")),
          o = a("5tio"),
          n = Object(o.a)("poster");
        function d(e, t, a) {
          var r = Object(i.a)(),
            s = r.logger;
          r.carmen({
            api: "youzan.shop.weapp.codeimage/1.0.0/convert",
            method: "POST",
            data: { mimeType: "image/png", base64Str: "base64," + e },
            success: (e) => {
              var a = e.attachment_url || "";
              "string" == typeof a && (a = a.replace(/^http:/, "https:")), t(a);
            },
            fail: (t) => {
              s.requestError({
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
          var o = Object(i.a)(),
            n = s.b.getDCPS(),
            d = o.getOfflineId(),
            { chainStoreInfo: c = {} } = o.getShopInfoSync(),
            { isMultiOnlineShop: h } = c,
            p = h ? o.getHQKdtId() : o.getKdtId(),
            u = {
              kdtId: (a = a || (o.getAppKdtId && o.getAppKdtId()) || p),
              page: e,
              guestKdtId: o.getKdtId(),
            };
          return (
            Object.assign(u, t),
            t.nostoreid || Object.assign(u, { dcPs: n, offlineId: d }),
            (t = {
              scene: encodeURIComponent(JSON.stringify(u)),
              page: "pages/common/blank-page/index",
              kdtId: a,
              sid: o.getSessionId(),
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
        function h(e, t, a) {
          void 0 === t && (t = {});
          var r = Object(i.a)(),
            o = r.logger,
            { isYouzanApp: c } = r.globalData,
            h = s.b.getDCPS(),
            g = r.getOfflineId(),
            { chainStoreInfo: p = {} } = r.getShopInfoSync(),
            { isMultiOnlineShop: u } = p,
            l = u ? r.getHQKdtId() : r.getKdtId(),
            m = {
              kdtId: (a =
                a || (r.getAppKdtId && r.getAppKdtId()) || (c ? 40419900 : l)),
              page: e,
              guestKdtId: t.dsKdtId || r.getKdtId(),
            };
          return (
            Object.assign(m, t, n),
            t.nostoreid || Object.assign(m, { dcPs: h, offlineId: g }),
            new Promise((e, s) => {
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
                      o.requestError({
                        alert: "warn",
                        message: "获取小程序码失败",
                        response: "res: " + JSON.stringify(a),
                        request: { options: t },
                      }),
                      s("获取小程序码失败")
                    );
                  d(a.image_base64 || "", e, s);
                })
                .catch((e) => {
                  o.requestError({
                    alert: "warn",
                    message: "获取小程序码失败",
                    response: "err: " + JSON.stringify(e),
                    request: { options: t },
                  }),
                    s("获取小程序码失败");
                });
            })
          );
        }
        function g(e) {
          var t = Object(i.a)();
          return new Promise((a, r) => {
            t.downloadFile({
              url: e,
              success(e) {
                var { tempFilePath: t, header: s } = e;
                if (
                  s &&
                  !/image/.test(
                    s["content-type"] || s["Content-Type"] || s.contentType
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
      gTWL: function (e, t, a) {
        a.r(t);
        var r = a("+I+c"),
          s = a("Fcif"),
          i = a("rqVN"),
          o = a("6i0Q"),
          n = a("AIOl"),
          d = a("ycnm"),
          c = a("gZDa"),
          h = a("9Bnu"),
          g = a("R18q"),
          p = a("2wjL"),
          u = a("ROCX"),
          l = a("9KEa"),
          m = ["page"];
        Object(i.b)({
          properties: {
            shareData: { type: Object, value: () => ({}) },
            goodsInfo: { type: Object, value: () => ({}) },
            goodsPosterInfo: { type: Object, value: () => ({}) },
            height: { type: Number, value: 0 },
            isWxShareImg: { type: Boolean, value: !1 },
          },
          data: {
            imgMode: "widthFix",
            imgList: [],
            current: 0,
            posterImgArr: [],
            index: 0,
            flag: !1,
            loading: !0,
            imgWidth: 70,
            bannerStyle: "",
            posterClass: "poster",
            themeMainBgColor: "",
            hasAuth: !0,
          },
          attached() {
            var { seller: e, salesmanType: t } = this.data.shareData;
            Object(n.b)(d.b.clickPosterTab, { sl: e, salesman_type: t });
            var { windowWidth: a, windowHeight: r } = Object(l.b)(),
              s = r / a;
            this.setYZData({
              imgMode: s > 2.16 || s < 1.5 ? "widthFix" : "heightFix",
            });
          },
          ready() {
            o.a.getThemeColor("main-bg").then((e) => {
              this.setYZData({ themeMainBgColor: e });
            }),
              Object(h.a)()
                .then((e) => {
                  e.nicknameAndAvatar
                    ? (this.getPoster(), this.setYZData({ loading: !1 }))
                    : this.setYZData({ hasAuth: !1, loading: !1 });
                })
                .catch((e) => {
                  wx.showToast({ icon: "none", title: "用户授权失败" }),
                    g.a.capture("分销员：赚字用户授权失败" + e),
                    this.setYZData({ hasAuth: !1, loading: !1 });
                });
          },
          methods: {
            onSwiperChange(e) {
              var { detail: t } = e;
              this.setYZData({ current: t.current });
            },
            reGenPoster(e) {
              var { index: t } = e.target.dataset;
              this.genPoster(t);
            },
            updateTargetPoster(e, t) {
              this.setYZData({
                posterImgArr: this.data.posterImgArr.map((a, r) =>
                  r === t ? e : a
                ),
              });
            },
            genPoster(e) {
              var t = this.data.posterImgArr[e];
              this.updateTargetPoster(Object(s.a)({}, t, { loading: !0 }), e),
                c.a
                  .call(this, e)
                  .then((a) => {
                    a
                      ? this.updateTargetPoster(
                          { image: a, loading: !1, error: void 0 },
                          e
                        )
                      : this.updateTargetPoster(
                          Object(s.a)({}, t, { loading: !1, error: !0 }),
                          e
                        );
                  })
                  .catch((a) => {
                    this.updateTargetPoster(
                      Object(s.a)({}, t, { loading: !1, error: a }),
                      e
                    );
                  });
            },
            getPoster(e) {
              if (
                (e && this.setYZData({ hasAuth: !0, loading: !0 }),
                this.data.posterImgArr.length)
              )
                this.data.posterImgArr.forEach((e, t) => {
                  !e.loading && e.error && this.genPoster(t);
                });
              else {
                var { posterItemModel: t = {} } =
                    this.properties.goodsPosterInfo,
                  { pictures: a = [{}] } = t,
                  r = a.map((e) => ({
                    image: e.url,
                    loading: !0,
                    error: void 0,
                  }));
                this.setYZData({ posterImgArr: r }, { immediate: !0 }),
                  r.forEach((e, t) => {
                    this.genPoster(t);
                  });
              }
            },
            savePoster() {
              var e,
                { seller: t, salesmanType: a } = this.data.shareData;
              Object(n.b)(d.b.poster, {
                sl: t,
                posterType: "savePoster",
                salesman_type: a,
              });
              var r =
                null == (e = this.data.posterImgArr[this.data.current])
                  ? void 0
                  : e.image;
              c.e.call(this, r).then(() => {
                this.triggerEvent("complete");
              });
            },
            shareWechatFriends() {
              var e,
                t =
                  null == (e = this.data.posterImgArr[this.data.current])
                    ? void 0
                    : e.image,
                a = () => {
                  wx.previewImage({ current: t, urls: [t] });
                };
              if (this.properties.isWxShareImg) {
                var { seller: s, salesmanType: i } = this.data.shareData;
                Object(n.b)(d.b.poster, {
                  sl: s,
                  posterType: "wechatShareImg",
                  salesman_type: i,
                });
                var { scene: o } = c.b.bind(this)();
                try {
                  var h = JSON.parse(decodeURIComponent(o)),
                    { page: g } = h,
                    l = Object(r.a)(h, m),
                    f = p.a.add(g, l);
                  Object(u.o)(t, f, a);
                } catch (e) {
                  Object(n.a)({
                    msg: "赚字微信图片分享-JSON.parse失败",
                    err: e,
                  }),
                    a();
                }
              }
            },
          },
        });
      },
      sTle: function (e, t, a) {
        var r = a("WmJz");
        a.d(t, "a", function () {
          return r.a;
        }),
          a.d(t, "b", function () {
            return r.b;
          });
      },
    }
  )
);
