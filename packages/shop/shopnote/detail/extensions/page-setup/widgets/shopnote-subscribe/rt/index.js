"use strict";
var r = require("~/r");
r(
  "xllf",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      xllf: function (e, t, s) {
        s.r(t);
        var a = s("7/pW"),
          i = s("YeA1"),
          r = s("GFa9"),
          o = s("ksi7");
        s("z9IR");
        Object(a.a)({
          data: { clickThumbFlag: !0 },
          attached() {
            Object(i.b)(this, [
              "showNav",
              "showSubBtn",
              "dialogCustomStyle",
              "subscribeStatus",
              "guideShow",
              "shop",
            ]);
          },
          ready() {},
          methods: {
            redirectToHome() {
              r.a.switchTab({ url: "/packages/home/dashboard/index" });
            },
            handleSubscribe() {
              var { subscribeStatus: e } = this.data,
                t = wx.getStorageSync("hasEnteredPage");
              if (e) {
                var s = this;
                wx.showModal({
                  title: "取消订阅将无法及时了解到商家的资讯信息和优惠活动",
                  confirmText: "继续订阅",
                  cancelText: "取消订阅",
                  success() {
                    s.editShopNoteSubscription();
                  },
                });
              } else
                t || e || this.setYZData({ guideShow: !0 }),
                  this.editShopNoteSubscription();
            },
            editShopNoteSubscription() {
              var { subscribeStatus: e } = this.data,
                t = wx.getStorageSync("hasEnteredPage");
              Object(o.a)({ channel: 3, status: e ? 0 : 1 }).then((s) => {
                s.value &&
                  (e || t
                    ? wx.showToast({
                        title: e ? "取消订阅成功" : "订阅成功",
                        icon: "none",
                      })
                    : wx.setStorageSync("hasEnteredPage", !0),
                  this.setYZData({ subscribeStatus: Number(!e) }));
              });
            },
            closeGuideDialog() {
              this.setYZData({ guideShow: !1 });
            },
          },
        });
      },
    }
  )
);
