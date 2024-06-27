"use strict";
var r = require("~/r");
r(
  "9g4I",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "9g4I": function (t, e, s) {
        s.r(e);
        var i = s("Fcif"),
          r = s("EqB2"),
          o = s("pedy"),
          u = s("xgCG"),
          a = s("tuJE"),
          c = s("l9Ga"),
          n = {
            mixins: [Object(r.a)({ optDesc: u.a })],
            props: {
              kdtId: Number,
              shopInfo: { type: Object, default: () => ({}) },
              themeColors: { type: Object, default: () => ({}) },
            },
            data: () => ({ list: [] }),
            created() {
              this.getContentList();
            },
            methods: {
              getContentList() {
                var { dataFrom: t, ids: e } = this.opt,
                  { kdtId: s, shopInfo: r, themeColors: u } = this;
                Object(a.a)({
                  source: t,
                  ids: e.length > 0 ? e.join(",") : "",
                  kdt_id: s,
                  pageSize: 6,
                }).then((t) => {
                  t &&
                    (this.list = t.map((t) => {
                      var {
                          buyStatus: e = {},
                          buyStatusDTO: s = {},
                          picture: a = {},
                          publishAt: n,
                          contentCount: d,
                          cardUserCount: p,
                        } = t,
                        { price: b = 0, isVipDiscount: l, isFree: h } = e,
                        { price: j = 0, priceText: m = "" } = s,
                        O = Object(i.a)({}, t, e, a, {
                          publishAt: Object(o.a)(n),
                          price: b,
                          isVip: !!l,
                          count: d,
                          subCount: p,
                          isFree: 1 === h,
                          showPriceInfo:
                            Object(o.b)(r.virtualGoodsCannotWePay) && j && m,
                        });
                      return (O.itemOpt = Object(c.a)(O, u)), O;
                    }));
                });
              },
            },
            ud: !0,
          },
          d = s("9ZMt");
        e.default = d.default.component(n);
      },
    }
  )
);
