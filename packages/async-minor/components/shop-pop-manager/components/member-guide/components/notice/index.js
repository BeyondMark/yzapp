"use strict";
var r = require("~/r");
r(
  "reFJ",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    reFJ: function (e, r, l) {
      l.r(r);
      var t = l("RY8z"),
        n = l("rqVN"),
        o = "/packages/ump/presents/index",
        i = "/packages/user/coupon/list/index?type=promocard&title=我的优惠券",
        s = "/packages/shop/levelcenter/free/index",
        a = "/packages/shop/levelcenter/free/index";
      Object(n.b)({
        options: { multipleSlots: !0 },
        properties: { benefits: { type: Object } },
        data: { buttons: [], renderedBenefits: [] },
        methods: {
          handleConfirm(e) {
            var r,
              l,
              n,
              o =
                null !=
                (r =
                  null == e || null == (l = e.target) || null == (n = l.dataset)
                    ? void 0
                    : n.url)
                  ? r
                  : a;
            t.a.navigate({ url: o });
          },
        },
        observers: {
          benefits(e) {
            var {
                presentList: r,
                couponList: l,
                points: t,
              } = void 0 === e ? {} : e,
              [n, a, u] = [
                null == r
                  ? void 0
                  : r.reduce(
                      (e, r) => e + ((null == r ? void 0 : r.number) || 0),
                      0
                    ),
                null == l
                  ? void 0
                  : l.reduce(
                      (e, r) => e + ((null == r ? void 0 : r.number) || 0),
                      0
                    ),
                null == t ? void 0 : t.points,
              ].map((e) => (null != e ? e : 0)),
              p = n > 0,
              c = a > 0,
              d = u > 0,
              b = [
                p && { label: "领取赠品", type: "primary", url: o },
                c && {
                  label: "查看优惠券",
                  type: p ? "normal" : "primary",
                  url: i,
                },
                !p && !c && { label: "查看权益", type: "primary", url: s },
              ].filter(Boolean);
            this.setYZData({
              buttons: b.slice(0, 2).reverse(),
              renderedBenefits: [
                p && { label: "赠品", icon: "present", count: n },
                c && { label: "优惠券", icon: "coupon", count: a },
                d && { label: "积分", icon: "points", count: u, operator: !1 },
              ].filter(Boolean),
            });
          },
        },
      });
    },
  })
);
