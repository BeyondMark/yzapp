"use strict";
var r = require("~/r");
r(
  "ALaX",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      ALaX: function (e, t, a) {
        a.r(t);
        var o = a("2wjL"),
          i = a("tkH8"),
          s = a("rqVN"),
          u = a("6jrI");
        Object(s.b)({
          type: "coupon-item",
          properties: { coupon: { type: Object, value: {} } },
          data: {
            couponClass: "",
            statuDetail: "",
            countDownTime: 0,
            isLessTwoDay: !1,
            isComposite: !1,
            isInvalid: !1,
            isUnused: !1,
            valueBefore: "",
            valueAfter: "",
            getValueStyle: "",
            couponTitleTags: "",
            formattedTime: "0",
          },
          attached() {
            this.setYZData({
              statuDetail: this.computeStatuDetail(),
              countDownTime: this.computeCountDownTime(),
              isLessTwoDay: this.computeIsLessTwoDay(),
              isUnused: this.computeUnused(),
              isComposite: this.computeIsComposite(),
              isInvalid: this.computeIsInvalid(),
              valueBefore: this.computeValueBefore(),
              valueAfter: this.computeValueAfter(),
              valueStyle: this.computeValueStyle(),
              couponTitleTags: this.computeCouponTitleTags(),
            });
          },
          methods: {
            computeStatuDetail() {
              var { state: e } = this.data.coupon || {};
              return u.b[e] || "";
            },
            computeCountDownTime() {
              var { validEndTime: e } = this.data.coupon || {};
              return e - new Date().getTime();
            },
            computeIsLessTwoDay() {
              var { validEndTime: e, state: t } = this.data.coupon || {},
                a = new Date().getTime();
              return e && t === u.c && e - a < 1728e5;
            },
            computeIsComposite() {
              var { voucherIdentities: e = [] } = this.data.coupon || {};
              return e.length > 1;
            },
            computeIsInvalid() {
              return this.data.coupon.state !== u.c;
            },
            computeUnused() {
              return this.data.coupon.state === u.a.UNUSED;
            },
            computeValueBefore() {
              var { valueCopywriting: e = "", preferentialMode: t } =
                  this.data.coupon,
                a = e.split(".")[0];
              return 1 == +t && a ? a : this.data.coupon.valueCopywriting;
            },
            computeValueAfter() {
              var {
                  unitCopywriting: e,
                  valueCopywriting: t = "",
                  preferentialMode: a,
                } = this.data.coupon,
                o = t.split(".")[1];
              return 1 == +a && o ? (t % 1 == 0 ? e : "." + o + e) : e;
            },
            computeValueStyle() {
              var { preferentialMode: e, maxPreferenceCopywriting: t } =
                this.data.coupon;
              return 3 == +e ? "exchange-goods" : t ? "discount-max" : "";
            },
            computeCouponTitleTags() {
              var { tags: e = [] } = this.data.coupon || {},
                t = { GROUPBUY_CARD: "[社区团购券]" };
              return e.map((e) => t[e]).join("");
            },
            onChange(e) {
              this.setYZData({
                formattedTime: Object(i.b)("HH:mm:ss", e.detail),
              });
            },
            redirectToCouponDetail() {
              var {
                id: e,
                weappAppId: t,
                couponActivityAlias: a,
                state: i,
                psCode: s,
              } = this.data.coupon;
              if (i === u.a.TOGET || i === u.a.GOT) {
                var r = o.a.add("/packages/user/coupon/fetch/index", {
                  mediatorRecordId: e,
                  alias: a,
                  dc_ps: s,
                });
                wx.navigateToMiniProgram({
                  appId: t,
                  path: r,
                  fail() {
                    wx.showToast({
                      title: "跳转失败",
                      icon: "none",
                      duration: 2e3,
                    });
                  },
                });
              }
            },
          },
        });
      },
    }
  )
);
