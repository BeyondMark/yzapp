"use strict";
var r = require("~/r");
r(
  "MoCX",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      MoCX: function (e, o, r) {
        r.r(o);
        var t = r("Fcif"),
          i = r("w2Y9"),
          a = r.n(i),
          c = r("YAk7"),
          n = r("taYb"),
          u = {
            name: "CouponPackCard",
            props: {
              info: Object,
              orderNo: String,
              themeColor: String,
              isWxReceipt: { type: Boolean, default: () => !1 },
              kdtId: String,
              navigateTo: Function,
              isSkyline: Boolean,
            },
            computed: {
              themeBackground5Style: () =>
                "background: var(--ump-coupon-bg, #323233);",
              themeColorStyle: () => "color: var(--ump-icon, #323233);",
              themeBorder30Style: () =>
                "border-color: var(--ump-border, #c9c9ff);",
              themeBorder20Style: () =>
                "border-color: var(--ump-border, #c9c9ff);",
              curCoupons() {
                var e;
                return null == (e = this.info.coupons) ? void 0 : e.slice(0, 2);
              },
              receiveStatus() {
                return this.info.receiveStatus;
              },
            },
            methods: {
              clickBtn() {
                var { detailUrl: e, activityId: o } = this.info,
                  r = c.g.couponpackage;
                if (this.receiveStatus) {
                  this.navigateTo(
                    "/packages/user/coupon/list/index?type=promocard"
                  );
                } else
                  this.$emit("log-attach", !0),
                    r(
                      Object(t.a)(
                        { orderNo: this.orderNo, detailUrl: e },
                        n.a.toCamelCase(a.a.getAll(e))
                      )
                    );
              },
            },
            ud: !0,
          },
          l = r("9ZMt");
        o.default = l.default.component(u);
      },
    }
  )
);
