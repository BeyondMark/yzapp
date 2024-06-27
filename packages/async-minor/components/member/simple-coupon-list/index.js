"use strict";
var r = require("~/r");
r(
  "mCrv",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      mCrv: function (o, t, e) {
        e.r(t);
        var i = e("Fcif"),
          a = e("rqVN"),
          n = e("YeA1"),
          u = e("E4In"),
          p = e("WNIS"),
          { dmc: s } = Object(n.a)(),
          r = !1;
        Object(a.b)({
          properties: {},
          data: {
            initialWaiting: !0,
            couponCount: 0,
            couponPage: 0,
            couponTotal: 0,
            couponList: [],
            couponLoading: r,
            couponLoadFinished: !1,
          },
          attached() {
            setTimeout(() => {
              this.getCouponCount(),
                this.getCouponList(),
                this.setYZData({ initialWaiting: !1 });
            }, 1e3);
          },
          pageLifetimes: {
            show() {
              this.refreshCouponData();
            },
          },
          methods: {
            formatCoupon(o) {
              var {
                  title: t,
                  voucherIdentities: e,
                  valueCopywriting: a,
                  unitCopywriting: n,
                  thresholdCopywriting: u,
                  couponDetail: p,
                  validTimeCopywriting: s,
                } = o,
                r = e.length,
                c = r > 1 ? 5 : 8;
              return Object(i.a)({}, o, {
                name:
                  (null == t ? void 0 : t.length) > c + 1
                    ? t.slice(0, c) + "..."
                    : t,
                value: a,
                unit: n,
                threshold: u,
                verifyCode: null == p ? void 0 : p.verifyCode,
                validTime: s,
                count: r,
              });
            },
            getCouponCount() {
              Object(u.a)().then((o) => {
                var { cardCount: t = 0, thirdpartyCount: e = 0 } = o || {};
                this.setYZData({ couponCount: t + e });
              });
            },
            getCouponList() {
              if (!r && !this.data.couponLoadFinished) {
                (r = !0), this.setYZData({ couponLoading: !0 });
                var o = this.data.couponPage + 1;
                Object(u.b)({ pageNum: o, pageSize: 6 })
                  .then((t) => {
                    var { items: e = [], paginator: i } = t || {},
                      { couponTotal: a, couponLoadFinished: n } = this.data;
                    i && !a && (a = i.totalCount),
                      6 * o >= a && (n = !0),
                      this.setYZData({
                        couponPage: o,
                        couponList: this.data.couponList.concat(
                          e.map(this.formatCoupon)
                        ),
                        couponTotal: a,
                        couponLoadFinished: n,
                      });
                  })
                  .finally(() => {
                    (r = !1), this.setYZData({ couponLoading: !1 });
                  });
              }
            },
            refreshCouponData() {
              this.getCouponCount(),
                this.setYZData({
                  couponPage: 0,
                  couponTotal: 0,
                  couponList: [],
                  couponLoadFinished: !1,
                }),
                this.getCouponList();
            },
            handleNavigateCouponQrCode(o) {
              var { coupon: t } = o.detail,
                { verifyCode: e } = t.couponDetail,
                i = "/packages/user/coupon/qrcode/index?verifyCode=" + e;
              s.navigate(i);
            },
            handleCouponClick(o) {
              var { coupon: t } = o.detail,
                { couponId: e, couponType: i } =
                  t.couponDetail.voucherIdentity || {},
                a =
                  i === p.c.Code
                    ? p.e.Code
                    : i === p.c.Normal
                    ? p.e.Card
                    : p.e.Thirdparty;
              s.navigate("CouponDetail", {
                id: e,
                from: "list",
                type: a,
                couponType: i,
              });
            },
          },
        });
      },
    }
  )
);
