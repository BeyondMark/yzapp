"use strict";
var r = require("~/r");
r(
  "RnBF",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    RnBF: function (i, s, t) {
      t.r(s);
      var a = t("2wjL"),
        e = t("qJXH"),
        c = t("jA1y"),
        r = getApp();
      Object(e.b)({
        data: { src: "" },
        onLoad(i) {
          void 0 === i && (i = {});
          var {
            activityId: s,
            umpAlias: t,
            inviterVoucherAlias: e,
            kdt_id: n,
            kdtId: h,
            sl: d,
          } = i;
          (this.activityId = s),
            (this.umpAlias = t),
            (this.inviterVoucherAlias = e),
            (this.kdtId = h || n || r.getKdtId());
          var u = { activityId: s, umpAlias: t, kdtId: this.kdtId };
          e && (u.inviterVoucherAlias = e),
            d && (u.sl = d),
            this.setYZData({
              src: a.a.add(
                "https://h5.youzan.com/wscump/in-sourcing-fission",
                u
              ),
            }),
            wx.hideShareMenu(),
            Object(c.c)({
              path: "/wscump/salesman/getAccount.json",
              query: { type: "NORMAL" },
              config: { cache: !0, expire: 10 },
            }).then((i) => {
              (this.sl = i.sls), wx.showShareMenu();
            }),
            r
              .request({
                path: "/wscump/in-sourcing-fission/get-activity.json",
                data: {
                  activityId: s,
                  activityAlias: t,
                  kdtId: this.kdtId,
                  page: 1,
                  pageSize: 1,
                },
              })
              .then((i) => {
                (this.shareLinkImgUrl = i.activityBackgroundUrl),
                  (this.canOverlaySales = i.canOverlaySales);
              })
              .catch((i) => {});
        },
        onWebviewLoad() {
          r.request({
            path: "/wscump/in-sourcing-fission/visit.json",
            data: { activityAlias: this.umpAlias },
          })
            .then((i) => {
              this.voucherAlias = i.voucherAlias;
            })
            .catch((i) => {});
        },
        onShareAppMessage() {
          var i =
              this.shareLinkImgUrl ||
              "https://b.yzcdn.cn/upload_files/2020/06/01/c06c6a6b63a3782d53920ea601415c2e.png",
            { shop_name: s = "" } = r.getShopInfoSync() || {},
            { activityId: t, umpAlias: e, voucherAlias: c, kdtId: n } = this,
            h = { activityId: t, umpAlias: e, kdtId: n };
          return (
            c && (h.inviterVoucherAlias = c),
            this.sl && this.canOverlaySales && (h.sl = this.sl),
            {
              imageUrl: i,
              title: "送你" + s + "内购福利！享受超低内购价！",
              path: a.a.add("/packages/ump/in-sourcing-fission/index", h),
            }
          );
        },
      });
    },
  })
);
