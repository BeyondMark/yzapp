"use strict";
var r = require("~/r");
r(
  "apz0",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    apz0: function (o, t, a) {
      a.r(t);
      var e = a("DXKY"),
        i = a("9Bnu"),
        s = a("taYb"),
        l = a("2wjL"),
        r = a("GFa9"),
        c = a("jA1y");
      Component({
        properties: {},
        data: {
          crossDialogShow: !1,
          crossDialogTitle: "已经添加至我的优惠券",
          authDialogShow: !1,
          tempAlias: "",
        },
        attached() {
          e.a.on("feature-platform-coupon:open", (o) => {
            var t = s.a.toCamelCase(o),
              {
                promoterResourceAlias: a = "",
                linkType: e = "",
                linkUrl: r = "",
              } = t,
              c = "";
            (c =
              "platform_coupon" === e
                ? (l.a.getAll(r) || {}).promoterResourceAlias
                : a),
              Object(i.a)().then((o) => {
                o.mobile
                  ? this.touchPlatformCoupon(c)
                  : this.setData({ authDialogShow: !0, tempAlias: c });
              });
          });
        },
        methods: {
          computedDialogTitle(o) {
            this.setData({
              crossDialogTitle: o
                ? "你已添加过该优惠券"
                : "已经添加至我的优惠券",
              crossDialogShow: !0,
            });
          },
          onAuthClose() {
            this.setData({ authDialogShow: !1 });
          },
          onAuthSuccess() {
            this.setData({ authDialogShow: !1 }),
              this.touchPlatformCoupon(this.data.tempAlias);
          },
          touchPlatformCoupon(o) {
            var t = { operator: {}, alias: o };
            Object(c.c)({
              path: "/wscdeco/ump/platformCoupon/touchCoupon.json",
              method: "POST",
              data: t,
            })
              .then((o) => {
                var { code: t, msg: a } = o;
                t
                  ? 349303005 === t
                    ? this.computedDialogTitle(!0)
                    : wx.showToast({ title: a || "未知错误", icon: "none" })
                  : this.computedDialogTitle(!1);
              })
              .catch((o) => {
                wx.showToast({ title: o || "未知错误", icon: "none" }),
                  this.setData({ tempAlias: "" });
              });
          },
          viewCoupon() {
            r.a.navigate({ url: "/packages/user/mediator-coupon/list/index" }),
              this.onClickDialogConfirm();
          },
          onClickDialogConfirm() {
            this.setData({
              crossDialogShow: !1,
              crossDialogTitle: "已经添加至我的优惠券",
              tempAlias: "",
            });
          },
        },
      });
    },
  })
);
