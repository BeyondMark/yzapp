"use strict";
var r = require("~/r");
r(
  "2tif",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "2tif": function (e, t, i) {
        i.r(t);
        var o = i("rqVN"),
          n = i("v6dD"),
          l = i("9zTU"),
          a = i("O3Bn"),
          r = !1,
          s = !1,
          p = getApp();
        Object(o.b)({
          properties: {
            planList: { type: Array },
            isMember: Boolean,
            levelType: { type: String, default: l.k.PAY_MENBER },
            levelAlias: String,
          },
          observers: {
            levelAlias(e) {
              this.reflashPayCoupon(e);
            },
          },
          data: {
            planList: [],
            levelPlanList: [],
            coupons: [],
            couponsLength: 0,
            subTitle: "",
            curPlanTimeRange: "",
            nextPlanTimeRange: "",
            checkTabIndex: 0,
          },
          attached() {
            this.getMemberCoupon();
          },
          methods: {
            getMemberCouponLoggerPageName() {
              return this.properties.levelType === l.k.FREE_MENBER
                ? "levelCenterFree"
                : "membercenterpay";
            },
            reflashPayCoupon(e) {
              if (this.properties.levelType === l.k.PAY_MENBER) {
                var t = (this.data.levelPlanList || []).find(
                  (t) => t.levelAlias === e
                );
                t
                  ? this.formatData((null == t ? void 0 : t.list) || [])
                  : this.setYZData({ planList: [] });
              }
            },
            getMemberCoupon() {
              if (this.properties.levelType === l.k.FREE_MENBER)
                return a.h().then((e) => {
                  (r = !1),
                    this.formatData(e || []),
                    !s &&
                      (null == e ? void 0 : e.length) > 0 &&
                      ((s = !0),
                      this.log({
                        et: "view",
                        ei: "memb_coupon",
                        en: "专享券组件曝光",
                        pt: this.getMemberCouponLoggerPageName(),
                      }));
                });
              if (this.properties.levelType === l.k.PAY_MENBER) {
                var e = { levelGroupType: l.d.PAY_MENBER };
                return a.g(e).then((e) => {
                  (r = !1),
                    this.setYZData({ levelPlanList: e || [] }, () => {
                      this.reflashPayCoupon(this.properties.levelAlias);
                    }),
                    !s &&
                      (null == e ? void 0 : e.length) > 0 &&
                      ((s = !0),
                      this.log({
                        et: "view",
                        ei: "memb_coupon",
                        en: "专享券组件曝光",
                        pt: this.getMemberCouponLoggerPageName(),
                      }));
                });
              }
            },
            formatData(e) {
              var t,
                [i, o] = e,
                n = this.getPlanTime(i),
                l = this.getPlanTime(o),
                a = "";
              a = o ? "定期上新、期期可领" : "活动时间：" + n;
              var r =
                (null == e || null == (t = e[0])
                  ? void 0
                  : t.voucherActivityList) || [];
              this.setYZData({
                checkTabIndex: 0,
                coupons: r,
                couponsLength: r.length,
                subTitle: a,
                curPlanTimeRange: n,
                nextPlanTimeRange: l,
                planList: e,
              });
            },
            checkTab(e) {
              var t,
                { index: i } = e.currentTarget.dataset,
                { planList: o } = this.data,
                n =
                  (null == o || null == (t = o[i])
                    ? void 0
                    : t.voucherActivityList) || [];
              this.setYZData({
                checkTabIndex: i,
                coupons: n,
                couponsLength: n.length,
              });
            },
            getPlanTime(e) {
              var { beginAt: t, endAt: i } = e || {};
              if (t && i) {
                var o = Object(n.b)(t, "MM.DD"),
                  l = Object(n.b)(i, "MM.DD");
                return o === l ? "" + o : o + "-" + l;
              }
              return "";
            },
            receiveCoupon(e) {
              if (
                (this.log({
                  et: "click",
                  ei: "memb_coupon_click",
                  en: "专享券立即领取",
                  pt: this.getMemberCouponLoggerPageName(),
                }),
                this.properties.isMember)
              ) {
                var { checkTabIndex: t, planList: i } = this.data,
                  o = (null == i ? void 0 : i[t]) || {};
                if (t > 0 || o.state !== l.j.Ongoing)
                  return wx.showToast({ title: "活动未开始", icon: "none" });
                if (r) return;
                r = !0;
                var n = e.detail,
                  s = "" + (o.planId || ""),
                  p = {
                    activityId: "" + (n.activityId || ""),
                    secondarySource: s,
                    source: "member_coupon_type",
                  };
                this.properties.levelType === l.k.PAY_MENBER &&
                  ((p.levelGroupType = l.d.PAY_MENBER),
                  (p.levelAlias = this.data.levelAlias)),
                  a
                    .k(p)
                    .then((e) => {
                      var { couponId: t, bizMsg: i } = e || {};
                      t
                        ? (wx.showToast({ title: "领取成功", icon: "none" }),
                          this.log({
                            et: "click",
                            ei: "memb_coupon_receive",
                            en: "专享券领取成功",
                            pt: this.getMemberCouponLoggerPageName(),
                          }),
                          this.getMemberCoupon())
                        : (wx.showToast({
                            title: i || "领取失败",
                            icon: "none",
                          }),
                          this.getMemberCoupon());
                    })
                    .catch(() => {
                      wx.showToast({ title: "领取失败", icon: "none" }),
                        (r = !1);
                    });
              } else
                wx.showToast({
                  title: "仅限会员领取，加入会员即可领券",
                  icon: "none",
                }),
                  this.log({
                    et: "click",
                    ei: "only_member_receive",
                    en: "仅限会员领取提示",
                    pt: this.getMemberCouponLoggerPageName(),
                  });
            },
            log(e) {
              p.logger && p.logger.log(e);
            },
          },
        });
      },
    }
  )
);
