"use strict";
var r = require("~/r");
r(
  "hDm3",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    hDm3: function (e, t, o) {
      o.r(t);
      var i = o("Fcif"),
        s = o("rqVN"),
        a = o("a1Mm"),
        r = o("2wjL"),
        n = o("9KEa"),
        g = o("RY8z"),
        p = o("DXKY"),
        h = getApp();
      Object(s.b)({
        properties: {
          pageBgColor: { type: String, value: "#f9f9f9" },
          isShowStoreInfo: { type: Boolean, value: !1 },
          extraClipboardData: { type: Object, value: {} },
        },
        data: { copyright: {}, isBigShop: !1 },
        attached() {
          Promise.all([h.getHiddenPowerBy(), h.getCopyright()]).then((e) => {
            var [t, o] = e;
            this.setYZData({ isBigShop: t.isBigShop }),
              this.setCopyRight(o),
              (this.setCopyRightFn = this.setCopyRight.bind(this)),
              p.a.on("shop:copyright:resolved", this.setCopyRightFn);
          });
        },
        destroyed() {
          p.a.off("shop:copyright:resolved", this.setCopyRightFn);
        },
        methods: {
          setCopyRight(e) {
            this.setYZData({
              copyright: Object(i.a)({}, e, {
                logo: Object(a.a)(e.logo, "!300x0.jpg"),
                showCustomerTips: e.isWeixinSelfHoldPay,
              }),
            });
          },
          copyright__longpress() {
            var e = this,
              t = getApp();
            wx.getExtConfig &&
              wx.getExtConfig({
                success(o) {
                  var { extConfig: s = {} } = o,
                    {
                      scene: a = "无",
                      initPath: g = "",
                      initQuery: p = {},
                    } = (() => {
                      if (wx && wx.getEnterOptionsSync) {
                        var {
                          scene: e,
                          path: t,
                          query: o,
                        } = wx.getEnterOptionsSync() || {};
                        return { scene: e || "无", initPath: t, initQuery: o };
                      }
                      return {};
                    })(),
                    h = getCurrentPages(),
                    c = h[h.length - 1],
                    d = c.route,
                    l = c.options || {},
                    u = l && JSON.stringify(l),
                    y = [
                      "差异化应用：wsc",
                      "差异化版本：2.174.5",
                      "小程序版本号：" + (s.userVersion || ""),
                      "场景值：" + a,
                      "页面路径",
                      d,
                    ],
                    f = {};
                  u && "{}" !== u && y.push("页面参数", u),
                    (f.extConfig = s),
                    (f.kdtId = t.getKdtId()),
                    (f.page = d),
                    (f.query = l),
                    (f.isKQApp = !1),
                    (f.pagePath = r.a.add(d, Object(i.a)({}, l))),
                    (f.enterPath = r.a.add(g, Object(i.a)({}, p))),
                    (f.system = Object(n.b)(!1)),
                    (f.userId = (
                      t.getToken("buyerId") ||
                      t.getToken("userId") ||
                      0
                    ).toString(4)),
                    wx.showModal({
                      title: "小程序信息",
                      content: y.join("\n"),
                      confirmText: "确定",
                      showCancel: !1,
                      success() {
                        wx.setClipboardData({
                          data: JSON.stringify(
                            Object(i.a)({}, f, e.data.extraClipboardData)
                          ),
                        });
                      },
                    });
                },
                fail(e) {},
              });
          },
          linkToWeappWebsite() {
            var e = getApp();
            e.logger &&
              e.logger.log({
                et: "click",
                ei: "youzan_logo",
                en: "有赞提供技术支持",
                params: { from_source: "youzan_technic_yzxcx_0" },
                si: e.getKdtId(),
              }),
              this.linkToSupportPage();
          },
          linkToHomePage() {
            this.linkToSupportPage();
          },
          linkToSupportPage() {
            g.a.navigate({ url: "/packages/tech-support/index" });
          },
          linkToStoreInfo() {
            var e =
              "https://h5.youzan.com/wscassets/shopinfo?no_footer=1&no_btn=1&kdt_id=" +
              h.getKdtId();
            g.a.navigate({
              url:
                "/pages/common/webview-page/index?title=店铺信息&src=" +
                encodeURIComponent(e),
            });
          },
        },
      });
    },
  })
);
