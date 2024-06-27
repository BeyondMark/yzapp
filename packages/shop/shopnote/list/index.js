"use strict";
var r = require("~/r");
r(
  "m3rz",
  Object.assign(
    {},
    require("../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      m3rz: function (e, s, t) {
        t.r(s);
        var a = t("Fcif"),
          r = t("qJXH"),
          o = t("zMoS"),
          i = t("WOkX"),
          n = t("hEId"),
          d = t("lRMv"),
          l = t("w2Y9"),
          c = t.n(l),
          p = t("8mzt"),
          h = getApp();
        Object(r.b)({
          data: { src: "", sl: "" },
          onLoad(e) {
            var { navIndex: s = "", sl: t } = e,
              a = "https://h5.youzan.com/wscshop/shopnote/list";
            h.isSwitchTab().then((e) => {
              e &&
                (a =
                  a +
                  "?newTabbarColor=1&customNav=1&navIndex=" +
                  s +
                  ("iPhone-X" === h.deviceType ? "&isNewIphone=1" : "")),
                t && (a = Object(i.a)({ url: a, sl: t })),
                this.setYZData({ src: a });
            }),
              Object(n.a)().then((e) => {
                this.sl = e.sls;
              });
          },
          onError(e) {
            p.a.log({
              appName: "wsc-h5-decorate",
              logIndex: "wsc_decorate_log",
              level: "info",
              name: "[weapp]店铺笔记列表页webview加载失败",
              extra: Object(a.a)({}, null == e ? void 0 : e.detail, {
                appId: h.getAppId(),
                kdtId: h.getKdtId(),
                buyerId: h.getBuyerId(),
                appVersion: h.getVersion(),
              }),
            });
          },
          onShareAppMessage() {
            var e = Object(o.a)(this.data, "CURRENT_GLOBAL_SHOP.shop_name", ""),
              s = e ? e + "-品牌内容推荐给你" : "品牌故事分享",
              t = e ? e + "-品牌精彩内容分享给你" : "品牌故事分享",
              a = "pages/shop/shopnote/list/index",
              { sl: r } = this.__query__;
            return (
              r || (a = c.a.add(a, d.i)),
              this.sl && (a = Object(i.a)({ url: a, sl: this.sl })),
              { title: s, path: a, desc: t }
            );
          },
        });
      },
    }
  )
);
