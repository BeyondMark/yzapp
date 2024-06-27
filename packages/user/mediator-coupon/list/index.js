"use strict";
var r = require("~/r");
r(
  "ygwm",
  Object.assign(
    {},
    require("../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      ygwm: function (t, e, s) {
        s.r(e);
        var a = s("qJXH"),
          o = s("zMoS"),
          i = s("rLi2"),
          n = s("6jrI");
        Object(a.b)({
          type: "coupon-list",
          data: { loading: !1, finished: !1, currentPage: 1, coupons: [] },
          onLoad() {
            this.fetchCouponAllList();
          },
          onPullDownRefresh() {
            this.clearCouponList(), this.fetchCouponAllList();
          },
          clearCouponList() {
            this.setYZData({
              coupons: [],
              loading: !1,
              finished: !1,
              currentPage: 1,
            });
          },
          fetchCouponAllList() {
            var t = {
              status: n.c,
              pageNum: this.data.currentPage,
              pageSize: 8,
            };
            this.data.loading ||
              this.data.finished ||
              (this.setYZData({ loading: !0 }),
              Object(i.a)(t)
                .then((t) => {
                  var e = (t.content || []).filter((t) => t.weappAppId);
                  this.setYZData({
                    loading: !1,
                    coupons: this.data.coupons
                      ? this.data.coupons.concat(e)
                      : [],
                    currentPage: this.data.currentPage + 1,
                    finished: Object(o.a)(t, "content.length") < 8,
                  }),
                    wx.stopPullDownRefresh();
                })
                .catch((t) => {
                  wx.showToast({
                    title: t.msg || "出了一点问题，请稍后试试",
                    icon: "none",
                    duration: 2e3,
                  }),
                    wx.stopPullDownRefresh(),
                    this.setYZData({ loading: !1 });
                }));
          },
        });
      },
    }
  )
);
