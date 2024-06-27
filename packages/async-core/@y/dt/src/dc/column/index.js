"use strict";
var r = require("~/r");
r(
  "VTqy",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      VTqy: function (t, e, s) {
        s.r(e);
        var i = s("Fcif"),
          r = s("EqB2"),
          o = s("pedy"),
          a = s("FU/j"),
          u = s("gNCw"),
          c = s("5FN0"),
          d = {
            mixins: [Object(r.a)({ optDesc: a.a })],
            props: {
              kdtId: Number,
              shopInfo: { type: Object, default: () => ({}) },
              themeColors: { type: Object, default: () => ({}) },
            },
            data: () => ({ list: [] }),
            created() {
              this.getColumnList();
            },
            methods: {
              getColumnList() {
                var { dataFrom: t, ids: e } = this.opt,
                  { kdtId: s, shopInfo: r, themeColors: a } = this;
                Object(u.a)({
                  source: t,
                  ids: e.length > 0 ? e.join(",") : "",
                  kdt_id: s,
                  pageSize: 3,
                }).then((t) => {
                  t &&
                    (this.list = t.map((t) => {
                      var {
                          buyStatus: e = {},
                          buyStatusDTO: s = {},
                          picture: u = {},
                          lastUpdatedInfo: d = {},
                          contentCount: n,
                          cardUserCount: p,
                        } = t,
                        { price: l = 0, isVipDiscount: b, isFree: h } = e,
                        { price: j = 0, priceText: m = "" } = s;
                      d.publishAt = Object(o.a)(d.publishAt);
                      var f = Object(i.a)({}, t, e, u, {
                        lastUpdatedInfo: d,
                        price: l,
                        isVip: !!b,
                        count: n,
                        subCount: p,
                        isFree: 1 === h,
                        showPriceInfo:
                          Object(o.b)(r.virtualGoodsCannotWePay) && j && m,
                      });
                      return (f.itemOpt = Object(c.a)(f, a)), f;
                    }));
                });
              },
            },
            ud: !0,
          },
          n = s("9ZMt");
        e.default = n.default.component(d);
      },
    }
  )
);
