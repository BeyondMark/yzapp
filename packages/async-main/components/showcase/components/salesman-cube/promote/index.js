"use strict";
var r = require("~/r");
r(
  "vCTz",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "3mrM": function (t, e, a) {
        e.a = class {
          constructor(t) {
            (this.timeCache = {}), (this.logFn = t);
          }
          startRecord(t) {
            void 0 === t && (t = "default"),
              this.timeCache[t] || (this.timeCache[t] = {}),
              (this.timeCache[t].startTime = Date.now());
          }
          endRecordAndReportLog(t, e) {
            this.endRecord(t), this.reportLog(t, e);
          }
          endRecord(t) {
            void 0 === t && (t = "default"),
              this.timeCache[t] && this.timeCache[t].startTime
                ? (this.timeCache[t].timeDifference =
                    Date.now() - this.timeCache[t].startTime)
                : (this.timeCache[t] = {});
          }
          reportLog(t, e) {
            void 0 === t && (t = "default"),
              this.timeCache[t] || (this.timeCache[t] = {}),
              this.logFn(this.timeCache[t].timeDifference || 0, e),
              this.reset(t);
          }
          reset(t) {
            this.timeCache[t] = {};
          }
        };
      },
      "5tio": function (t, e, a) {
        a.d(e, "a", function () {
          return r;
        });
        var i = a("8B9M"),
          s = Object(i.a)(),
          r = (t) => {
            var e = (s.logger.getGlobal() || {}).user || {},
              a = { is_share: 1, share_cmpt: t };
            return e.uuid && (a.from_uuid = e.uuid || ""), a;
          };
      },
      VQj9: function (t, e, a) {
        e.a = (t) =>
          new Promise((e, a) => {
            wx.getSetting({
              success: (i) => {
                i.authSetting[t]
                  ? e()
                  : wx.authorize({ scope: t, success: e, fail: a });
              },
              fail: a,
            });
          });
      },
      WmJz: function (t, e, a) {
        a.d(e, "a", function () {
          return d;
        }),
          a.d(e, "b", function () {
            return l;
          });
        a("Fcif");
        var i = a("Sd3C"),
          s = a("Yt9W"),
          r = (a("2wjL"), a("8B9M")),
          o = a("5tio"),
          n = Object(o.a)("poster");
        function c(t, e, a) {
          var i = Object(r.a)(),
            s = i.logger;
          i.carmen({
            api: "youzan.shop.weapp.codeimage/1.0.0/convert",
            method: "POST",
            data: { mimeType: "image/png", base64Str: "base64," + t },
            success: (t) => {
              var a = t.attachment_url || "";
              "string" == typeof a && (a = a.replace(/^http:/, "https:")), e(a);
            },
            fail: (e) => {
              s.requestError({
                alert: "warn",
                message: "小程序码转换失败",
                response: "err: " + JSON.stringify(e),
                request: { options: { base64Str: t } },
              }),
                a("小程序码地址获取失败");
            },
          });
        }
        function d(t, e, a) {
          void 0 === e && (e = {});
          var o = Object(r.a)(),
            n = s.b.getDCPS(),
            c = o.getOfflineId(),
            { chainStoreInfo: d = {} } = o.getShopInfoSync(),
            { isMultiOnlineShop: l } = d,
            u = l ? o.getHQKdtId() : o.getKdtId(),
            g = {
              kdtId: (a = a || (o.getAppKdtId && o.getAppKdtId()) || u),
              page: t,
              guestKdtId: o.getKdtId(),
            };
          return (
            Object.assign(g, e),
            e.nostoreid || Object.assign(g, { dcPs: n, offlineId: c }),
            (e = {
              scene: encodeURIComponent(JSON.stringify(g)),
              page: "pages/common/blank-page/index",
              kdtId: a,
              sid: o.getSessionId(),
              isWeapp: 1,
              hyaLine: e.hyaLine ? 1 : 0,
            }),
            Object(i.a)({
              origin: "h5",
              query: e,
              pathname: "/v3/weapp/ultra-code.png",
            }).then((t) => h(t))
          );
        }
        function l(t, e, a) {
          void 0 === e && (e = {});
          var i = Object(r.a)(),
            o = i.logger,
            { isYouzanApp: d } = i.globalData,
            l = s.b.getDCPS(),
            h = i.getOfflineId(),
            { chainStoreInfo: u = {} } = i.getShopInfoSync(),
            { isMultiOnlineShop: g } = u,
            p = g ? i.getHQKdtId() : i.getKdtId(),
            m = {
              kdtId: (a =
                a || (i.getAppKdtId && i.getAppKdtId()) || (d ? 40419900 : p)),
              page: t,
              guestKdtId: e.dsKdtId || i.getKdtId(),
            };
          return (
            Object.assign(m, e, n),
            e.nostoreid || Object.assign(m, { dcPs: l, offlineId: h }),
            new Promise((t, s) => {
              i.request({
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
                        request: { options: e },
                      }),
                      s("获取小程序码失败")
                    );
                  c(a.image_base64 || "", t, s);
                })
                .catch((t) => {
                  o.requestError({
                    alert: "warn",
                    message: "获取小程序码失败",
                    response: "err: " + JSON.stringify(t),
                    request: { options: e },
                  }),
                    s("获取小程序码失败");
                });
            })
          );
        }
        function h(t) {
          var e = Object(r.a)();
          return new Promise((a, i) => {
            e.downloadFile({
              url: t,
              success(t) {
                var { tempFilePath: e, header: s } = t;
                if (
                  s &&
                  !/image/.test(
                    s["content-type"] || s["Content-Type"] || s.contentType
                  )
                )
                  return i("获取图片失败");
                a(e);
              },
              fail: i,
            });
          });
        }
      },
      sTle: function (t, e, a) {
        var i = a("WmJz");
        a.d(e, "a", function () {
          return i.a;
        }),
          a.d(e, "b", function () {
            return i.b;
          });
      },
      vCTz: function (t, e, a) {
        a.r(e);
        var i = a("Fcif"),
          s = a("rqVN"),
          r = a("jA1y"),
          o = a("gZDa"),
          n = a("a1Mm"),
          c = a("w2Y9"),
          d = a.n(c),
          l = a("tuFO"),
          h = a.n(l),
          u = a("WOkX"),
          g = a("AIOl"),
          p = a("ycnm"),
          m = a("pNg0"),
          b = getApp();
        Object(s.b)({
          properties: {
            color: { type: String, value: "" },
            shortLinkPromoteUrl: { type: String, value: "" },
            shareData: { type: Object, value: () => ({}) },
            shareInfo: { type: Object, value: () => ({}) },
            smartTextData: { type: Object, value: () => ({}) },
            goodsInfo: {
              type: Object,
              value: () => ({}),
              observer(t) {
                var { goodsPrice: e = {} } = t,
                  {
                    maxOriginPrice: a,
                    minOriginPrice: i,
                    maxPrice: s,
                    minPrice: r,
                  } = e,
                  o = this.getPriceStr(r),
                  c = this.getPriceStr(s, r),
                  d = a || s,
                  l = i || r,
                  h = this.getPriceStr(d, l),
                  u = Object(m.a)(t, this.data.smartTextData),
                  g = t.goodsMainPictures.map((t) => t.url || t),
                  p = t.goodsMainPictures.map((t) =>
                    Object(n.a)(t.url || t, "!200x200.q100.jpg")
                  ),
                  b = (t.goodsOriginPictures || t.goodsMainPictures).map(
                    (t) => t.url || t
                  );
                this.setYZData({
                  activityMinPrice: o,
                  realPrice: c,
                  originPrice: h,
                  promoteText: u,
                  imgList: g,
                  showImgList: p,
                  originImgList: b,
                });
              },
            },
            config: { type: Object, value: () => ({}) },
            shopRights: {
              type: Object,
              value: () => ({}),
              observer(t) {
                var { barClass: e } = this.data;
                this.setYZData({
                  showPublish: t.allowMoments,
                  ifPublish: t.allowMoments,
                  barClass:
                    e +
                    (t.allowMoments && this.data.showPersonalSpace
                      ? ""
                      : " bar-right"),
                  publishIconColor: t.allowMoments ? this.data.color : "#ccc",
                });
              },
            },
            showPersonalSpace: { type: Boolean, value: !1 },
          },
          data: {
            imgWidth: 108,
            rangeStyle: "left: 0;",
            shortPromoteUrl: "",
            ifPublish: !0,
            barClass: "bar",
            promoteText: "",
            showPublish: !1,
            publishIconColor: "",
          },
          attached() {},
          ready() {
            var { shareData: t, smartTextData: e } = this.data,
              a = b.getKdtId(),
              s = Object(i.a)(
                {},
                Object(u.c)({ sl: t.seller || "", kdtId: a }),
                { sub_kdt_id: a || t.dsKdtId }
              ),
              o = this.getUrl();
            if (
              ((o = d.a.add(
                o,
                Object(i.a)({}, s, { share_cmpt: "savepictures" })
              )),
              e)
            ) {
              var { extra: n, promoteText: c } = e;
              null != n && n.alg && (o = d.a.add(o, { alg: n.alg })),
                c && (o = d.a.add(o, { content: "aiwriting" }));
            }
            Object(r.c)({
              path: "/wscshop/ump/salesman/short-url.json",
              data: { url: o },
            })
              .then((t) => {
                this.setYZData({ shortPromoteUrl: t.value });
              })
              .catch(() => {
                this.setYZData({ shortPromoteUrl: o });
              });
          },
          methods: {
            onScrollComputedWidth(t) {
              var e = this;
              wx.getSystemInfo({
                success(a) {
                  var { imgWidth: i } = e.data,
                    s =
                      t.detail.scrollLeft /
                      (i * e.data.imgList.length - a.windowWidth + 32);
                  e.setYZData({ rangeStyle: "left: " + 28 * s + "px;" });
                },
              });
            },
            getPriceStr: (t, e) =>
              t !== e && e
                ? (+e / 100).toFixed(2) + "-" + (+t / 100).toFixed(2)
                : "" + (+t / 100).toFixed(2),
            getCurrentMaterialItem(t) {
              void 0 === t && (t = {});
              var {
                  alias: e,
                  itemId: a,
                  id: i,
                  goodsId: s,
                  picture: r,
                  pic: o,
                  title: n,
                  goodsPrice: c = {},
                  goodsAlias: d,
                } = t,
                { maxPrice: l, realPrice: h } = c;
              return {
                alias: d || e,
                goodsId: i || a || s,
                image: o || r,
                title: n,
                price: +l || 100 * +h,
              };
            },
            changePublishState() {
              this.setYZData({
                ifPublish: !this.data.ifPublish,
                publishIconColor: this.data.ifPublish
                  ? "#ccc"
                  : this.data.color,
              });
            },
            preview(t) {
              var { index: e } = t.currentTarget.dataset,
                { imgList: a } = this.data;
              wx.previewImage({ urls: a, current: a[e] });
            },
            publish() {
              var {
                  ifPublish: t,
                  goodsInfo: e,
                  shareData: a,
                  smartTextData: { promoteText: s },
                } = this.data,
                { seller: r, salesmanType: n } = a,
                c = { sl: r, salesman_type: n };
              s && (c.content = "aiwriting"), Object(g.b)(p.b.savepictures, c);
              var d = { copy: 0, image: 1 };
              Promise.all([
                this.publishMaterial(t, e),
                this.copyText(),
                o.f.call(this),
              ]).then((t) => {
                wx.hideLoading();
                var e = Object(i.a)({}, d, t[0], t[1], t[2]);
                this.triggerEvent("publish-success", e);
              });
            },
            publishMaterial(t, e) {
              return new Promise((a) => {
                t && this.data.showPersonalSpace
                  ? Object(r.c)({
                      path: "/wscump/salesman/zone/publishMoments.json",
                      method: "POST",
                      data: {
                        imageList: this.data.imgList.slice(0, 9),
                        goods: this.getCurrentMaterialItem(e),
                        recommendInfo: escape(this.data.promoteText),
                      },
                    })
                      .then(() => {
                        a({ material: 1 });
                      })
                      .catch(() => {
                        a({ material: 0 });
                      })
                  : a({});
              });
            },
            copyText() {
              return new Promise((t) => {
                var { shortLinkPromoteUrl: e } = this.properties;
                wx.setClipboardData({
                  data:
                    this.data.promoteText + (e || this.data.shortPromoteUrl),
                  success: () => {
                    t({ copy: 1 });
                  },
                });
              });
            },
            getUrl() {
              var { goodsInfo: t = {} } = this.data,
                { alias: e } = t,
                {
                  activityType: a,
                  activityId: i,
                  activityAlias: s,
                } = t.goodsActivityInfo,
                r = s || e,
                o = h()("/v2/goods/" + r, "h5", b.getKdtId());
              return (
                "seckill" === a &&
                  (o = "https://h5.youzan.com/v2/seckill/" + r),
                "helpCut" === a &&
                  (o += "?activityId=" + i + "&activityType=helpCut"),
                o
              );
            },
          },
        });
      },
    }
  )
);
