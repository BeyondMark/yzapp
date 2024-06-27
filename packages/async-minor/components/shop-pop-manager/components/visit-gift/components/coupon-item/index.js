"use strict";
var r = require("~/r");
r(
  "FhX9",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      FhX9: function (e, t, s) {
        s.r(t);
        var a = s("Fcif"),
          r = s("rqVN"),
          o = s("ayAB"),
          i = s("3cdT"),
          c = s("RY8z"),
          n = s("Yfvy"),
          u = s("eCH0"),
          d = getApp(),
          { logger: p } = d,
          g = 11,
          l = { KEY: 1, VALUE: "card" },
          b = { KEY: 2, VALUE: "code" };
        Object(r.b)({
          externalClasses: ["custom-class"],
          properties: {
            disabled: { type: Boolean, default: !1 },
            coupon: { type: Object, default: () => ({}) },
            source: { type: Number, value: null },
            kdtId: Number,
          },
          methods: {
            subscribeMessage() {
              var e = this,
                { source: t } = e.data;
              Object(u.e)({
                scene: u.a.COUPON,
                subscribePage: i.e[t],
                subscribeType: "进店有礼",
                authorizationType: "coupon",
                windowType: "micro_visit_gift",
                options: {
                  next: e.handleUse.bind(this),
                  onShowTips: () => {
                    e.triggerEvent("toggle-subscribe-mask", !0);
                  },
                  onCloseTips: () => {
                    e.triggerEvent("toggle-subscribe-mask", !1), e.handleUse();
                  },
                },
              });
            },
            handleUse() {
              this.sendUseLogger();
              var {
                fetchId: e,
                activityType: t,
                activityTypeGroup: s,
              } = this.data.coupon;
              if (t !== g) {
                var a = "card";
                s === l.KEY && (a = l.VALUE),
                  s === b.KEY && (a = b.VALUE),
                  Object(o.a)({
                    couponId: e,
                    groupType: a,
                    kdtId: this.data.kdtId,
                  })
                    .then((e) => {
                      var { weappUrl: t, isSwitchTab: s } = e,
                        a = s ? "switchTab" : "navigate";
                      c.a[a]({ url: t });
                    })
                    .catch((e) => {
                      var { msg: t } = e;
                      wx.showToast({ title: t, icon: "none" });
                    });
              } else
                c.a.navigate({
                  url: "/packages/groupbuying/buyer-trade/buying/index?from_coupon=1",
                });
            },
            sendUseLogger() {
              var { openId: e } = getApp().getUserInfoSync(),
                t = getCurrentPages(),
                s = { open_id: e },
                r = Object(n.b)("shop_ad_pop", {
                  ad_name: "进店有礼弹窗",
                  page_url: t[t.length - 1].route,
                });
              p &&
                p.log({
                  et: "click",
                  ei: "Ad_Click",
                  en: "图片广告打开次数",
                  si: d.getKdtId(),
                  params: Object(a.a)({ component: "popup_ad" }, s, r),
                });
            },
          },
        });
      },
    }
  )
);
