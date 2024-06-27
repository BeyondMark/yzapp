"use strict";
var r = require("~/r");
r(
  "gswi",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    gswi: function (t, a, e) {
      e.r(a);
      var s = e("Fcif"),
        c = e("2wjL"),
        i = e("qJXH"),
        r = getApp();
      Object(i.b)({
        data: { src: "", alias: "" },
        onLoad(t) {
          var { alias: a, kdt_id: e, kdtId: i } = t;
          (this.query = t),
            (this.currentKdtId = e || i || r.getKdtId()),
            this.getCouponPackInfo({ kdtId: this.currentKdtId, alias: a }),
            this.setYZData({
              alias: a,
              src: c.a.add(
                "https://h5.youzan.com/wscump/coupon-pack/fetch",
                Object(s.a)({}, t, { kdtId: this.currentKdtId })
              ),
            });
        },
        getCouponPackInfo(t) {
          r.request({
            path: "/wscump/coupon-pack/getByAlias.json",
            method: "GET",
            query: t,
          }).then((t) => {
            t.isShare || wx.hideShareMenu();
          });
        },
        onShareAppMessage() {
          return {
            title: "优惠券礼包",
            path:
              "/packages/ump/coupon-pack/fetch/index?alias=" + this.data.alias,
            imageUrl:
              "https://img01.yzcdn.cn/wscump/coupon-pack/fetch/top_image_2.png",
          };
        },
      });
    },
  })
);
