"use strict";
var r = require("~/r");
r(
  "JH2x",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      JH2x: function (e, t, i) {
        i.r(t);
        var s = i("Fcif"),
          r = i("EqB2"),
          o = i("pedy"),
          a = i("6Itt"),
          d = i("qPiq"),
          c = i("lBkF"),
          u = {
            mixins: [Object(r.a)({ optDesc: a.a })],
            props: {
              kdtId: Number,
              shopInfo: { type: Object, default: () => ({}) },
              themeColors: { type: Object, default: () => ({}) },
            },
            data: () => ({ list: [] }),
            created() {
              this.getLiveList();
            },
            methods: {
              getLiveList() {
                var { dataFrom: e, ids: t } = this.opt,
                  { kdtId: i, shopInfo: r, themeColors: a } = this;
                Object(d.a)({
                  source: e,
                  ids: t.length > 0 ? t.join(",") : "",
                  kdt_id: i,
                  pageSize: 6,
                  liveQueryScene: 1,
                }).then((e) => {
                  e &&
                    (this.list = e.map((e) => {
                      var { buyStatusDTO: t = {} } = e,
                        { price: i = 0, priceText: d = "" } = t,
                        u = Object(s.a)({}, e, {
                          showPriceInfo:
                            Object(o.b)(r.virtualGoodsCannotWePay) && i && d,
                        });
                      return (u.itemOpt = Object(c.a)(u, a)), u;
                    }));
                });
              },
            },
            ud: !0,
          },
          n = i("9ZMt");
        t.default = n.default.component(u);
      },
    }
  )
);
