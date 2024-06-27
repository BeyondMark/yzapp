"use strict";
var r = require("~/r");
r(
  "+HlD",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "+HlD": function (t, e, o) {
        o.r(e);
        var u = o("US/N"),
          s = o("AGZf"),
          n = o("GOJL"),
          c = {
            name: "NewCustomerCoupon",
            props: { opt: { type: Object, default: () => ({}) } },
            data: () => ({ showContent: !0 }),
            computed: {
              isYuanUnit() {
                return "元" === this.opt.unit;
              },
              showDecimal() {
                return this.opt.value.includes(".");
              },
              couponPriceDecimal() {
                return this.opt.value.split(".");
              },
            },
            watch: {
              showNewCustomerCoupon(t) {
                var e,
                  { coupon: o = {} } = this.umpActivity,
                  { couponPreferenceModels: u = [] } = o;
                t && Object(n.b)(null == (e = u[0]) ? void 0 : e.id);
              },
            },
            methods: {
              handleCouponClick() {
                (this.showContent = !1),
                  Object(n.a)(this.opt.couponId),
                  Object(u.default)({
                    path: "/wscump/new-customer/send.json",
                    data: { alias: this.opt.couponAlias },
                  })
                    .then((t) => {
                      null != t && t.activityId
                        ? Object(s.a)("领取成功")
                        : Object(s.a)(t.msg || "领取失败");
                    })
                    .catch((t) => {
                      Object(s.a)(t.msg || "领取失败");
                    });
              },
            },
            ud: !0,
          },
          a = o("9ZMt");
        e.default = a.default.component(c);
      },
    }
  )
);
