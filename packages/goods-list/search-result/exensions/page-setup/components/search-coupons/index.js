"use strict";
var r = require("~/r");
r(
  "jN6c",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      jN6c: function (e, a, t) {
        t.r(a);
        var s = t("Fcif"),
          o = t("eijD"),
          i = t("rqVN"),
          n = t("9Bnu"),
          c = t("DXqK"),
          d = t("rd5n"),
          r = getApp(),
          u = { 0: "card", 1: "code" };
        Object(i.b)({
          options: { multipleSlots: !0 },
          properties: { searchText: String, goodsList: Array, slg: String },
          data: {
            show: !0,
            isPutaway: !1,
            isClose: !1,
            isExpansion: !1,
            isGetCoupon: !1,
            themeClass: "th0",
            isAuthorized: !1,
            couponStatus: "unaccalimed",
            couponData: {},
            couponId: 0,
            couponType: 0,
            alias: 0,
            logParams: {},
            countDownNum: 10,
            iPhoneX: !1,
          },
          attached() {
            var e = this;
            return Object(o.a)(function* () {
              var a = yield Object(n.a)(),
                t = a.mobile && a.nicknameAndAvatar,
                s = yield r.getShopTheme();
              e.setYZData({
                themeClass: s.themeClass,
                isAuthorized: t,
                iPhoneX: "iPhone-X" === r.deviceType,
              }),
                e.showCouponHandle();
            })();
          },
          methods: {
            setLogHandle(e) {
              r.logger && r.logger.log(e);
            },
            getViewLog() {
              return {
                et: "view",
                ei: "view",
                en: "搜索发券弹窗曝光",
                params: this.data.logParams,
              };
            },
            getReceiveLog() {
              return {
                et: "click",
                ei: "click_receive",
                en: "立即领取按钮点击",
                params: this.data.logParams,
              };
            },
            getUseLog() {
              return {
                et: "click",
                ei: "click_use",
                en: "去使用按钮点击",
                params: this.data.logParams,
              };
            },
            putawayHandle() {
              this.setYZData({ isPutaway: !0 });
            },
            closeHandle() {
              this.setYZData({ isClose: !0 });
            },
            updateCouponData(e, a, t) {
              void 0 === t && (t = !1);
              var s = {
                value: e.value_copywriting || this.data.couponData.value,
                unit: e.unit_copywriting || this.data.couponData.unit,
                name: e.use_threshold_copywriting || this.data.couponData.name,
              };
              if ("unaccalimed" === a) {
                var o = e.start_time,
                  i = e.end_time;
                s.validTime =
                  Object(c.d)(o, "YYYY.MM.DD") +
                  "-" +
                  Object(c.d)(i, "YYYY.MM.DD");
              }
              if ("received" === a && e.validEndTime) {
                var n = e.validStartTime,
                  d = e.validEndTime;
                (s.validTime =
                  Object(c.d)(n, "YYYY.MM.DD") +
                  "-" +
                  Object(c.d)(d, "YYYY.MM.DD")),
                  (s.validEndTime = e.validEndTime),
                  e.validEndTime - +new Date() <= 1728e5 && delete s.validTime;
              }
              this.setYZData({ couponData: s, couponStatus: a }),
                t &&
                  setTimeout(() => {
                    this.setYZData({ isExpansion: !0, isGetCoupon: !0 }, 500);
                  });
            },
            showCouponHandle() {
              this.data.searchText && this.getCouponData();
            },
            getCouponData() {
              var e = [];
              this.data.goodsList.forEach((a) => {
                var t, s;
                e.push(
                  null == a ||
                    null == (t = a.actionOpt) ||
                    null == (s = t.loggerParams)
                    ? void 0
                    : s.goods_id
                );
              });
              var a = "search_rcmd",
                t = {
                  goodsIdList: e.slice(0, 20).join(","),
                  searchKeywords: this.data.searchText,
                  source: a,
                  bizName: a,
                };
              r.request({
                path: "wscshop/ump/coupon/search-coupon.json",
                query: t,
              })
                .then((e) => {
                  e &&
                    !e.show &&
                    e.ab_trace_id &&
                    (this.setYZData({
                      logParams: {
                        component: "search_coupon_popup",
                        abTraceId: e.ab_trace_id,
                        slg: this.data.slg,
                      },
                    }),
                    this.setLogHandle(this.getViewLog())),
                    e && e.show
                      ? (this.setYZData({
                          alias: e.activity_alias,
                          logParams: {
                            component: "search_coupon_popup",
                            abTraceId: e.ab_trace_id,
                            slg: this.data.slg,
                          },
                        }),
                        this.data.isAuthorized
                          ? (this.updateCouponData(e, "unaccalimed", !1),
                            this.getCoupons())
                          : this.updateCouponData(e, "unaccalimed", !0),
                        this.setLogHandle(this.getViewLog()))
                      : this.setYZData({ show: !1 });
                })
                .catch((e) => {
                  this.setYZData({ show: !1 });
                });
            },
            receivedHandle(e) {
              e &&
                e.detail &&
                this.setYZData({ countDownNum: +e.detail < 2 ? 3 : e.detail }),
                this.getCoupons(),
                this.setLogHandle(this.getReceiveLog());
            },
            useHandle() {
              this.useCoupons(), this.setLogHandle(this.getUseLog());
            },
            getCoupons() {
              var e = {
                alias: this.data.alias,
                source: "search_rcmd",
                bizName: "search_rcmd",
              };
              r.request({
                path: "wscshop/ump/coupon/receive-search-coupon.json",
                data: e,
                method: "POST",
              })
                .then((e) => {
                  if (e) {
                    var a = {
                      validEndTime: +e.valid_end_time,
                      validStartTime: +e.valid_start_time,
                    };
                    this.setYZData({
                      couponId: e.coupon_id,
                      couponType: e.coupon_type,
                      isGetCoupon: !1,
                    }),
                      this.updateCouponData(Object(s.a)({}, a), "received", !0);
                  } else wx.showToast({ title: "领取失败", icon: "none" });
                })
                .catch((e) => {
                  wx.showToast({ title: e.msg || "领取失败", icon: "none" });
                });
            },
            useCoupons() {
              var e = {
                couponId: this.data.couponId,
                groupType: u[this.data.couponType],
                searchKeyword: this.data.searchText,
              };
              r.request({
                path: "wscump/coupon/coupon_use_redirect.json",
                query: e,
              })
                .then((e) => {
                  e &&
                    (e.h5Url.indexOf("showcase/homepage") > -1
                      ? this.setYZData({ isClose: !0 })
                      : Object(d.a)(e.weappUrl));
                })
                .catch((e) => {
                  wx.showToast({ title: e.msg || "领取失败", icon: "none" });
                });
            },
          },
        });
      },
    }
  )
);
