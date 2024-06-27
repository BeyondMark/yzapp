"use strict";
var r = require("~/r");
r(
  "pcT8",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      pcT8: function (e, t, s) {
        s.r(t);
        var i = s("Fcif"),
          r = s("EqB2"),
          o = s("pedy"),
          a = s("/cxm"),
          c = s("XjAJ"),
          u = s("Vq7/"),
          n = {
            mixins: [Object(r.a)({ optDesc: a.a })],
            props: {
              kdtId: Number,
              shopInfo: { type: Object, default: () => ({}) },
              themeColors: { type: Object, default: () => ({}) },
            },
            data: () => ({ list: [] }),
            created() {
              this.getMemberList();
            },
            methods: {
              getMemberList() {
                var { dataFrom: e, ids: t } = this.opt,
                  { kdtId: s, shopInfo: r, themeColors: a } = this;
                Object(c.a)({
                  source: e,
                  ids: t.length > 0 ? t.join(",") : "",
                  kdt_id: s,
                  pageSize: 6,
                }).then((e) => {
                  e &&
                    (this.list = e.map((e) => {
                      var {
                          buyStatus: t = {},
                          buyStatusDTO: s = {},
                          name: c = "",
                          contentCount: n,
                          cardUserCount: d,
                        } = e,
                        { price: p = 0, isVipDiscount: b, isFree: m } = t,
                        { price: l = 0, priceText: h = "" } = s,
                        j = Object(i.a)({}, e, t, {
                          price: p,
                          title: c,
                          isVip: !!b,
                          count: n,
                          subCount: d,
                          isFree: 1 === m,
                          showPriceInfo:
                            Object(o.b)(r.virtualGoodsCannotWePay) && l && h,
                        });
                      return (j.itemOpt = Object(u.a)(j, a)), j;
                    }));
                });
              },
            },
            ud: !0,
          },
          d = s("9ZMt");
        t.default = d.default.component(n);
      },
    }
  )
);
