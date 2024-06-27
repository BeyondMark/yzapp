"use strict";
var r = require("~/r");
r(
  "W8ga",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      W8ga: function (e, a, r) {
        r.r(a);
        var s = r("Fcif"),
          t = r("u8kV"),
          i = r("svh/"),
          o = r("NDSq"),
          d = r("2wjL");
        Object(t.b)({
          mapData: Object(s.a)({}, Object(i.f)(["formatRecommendGoods"])),
          methods: {
            gotoGoodsDetail(e) {
              var { item: a, index: r } = e.currentTarget.dataset,
                { alias: s, algs: t } = a,
                i = Object(o.c)(r),
                c = d.a.add("/packages/goods/detail/index", {
                  alias: s,
                  banner_id: i,
                  alg: t,
                });
              wx.navigateTo({ url: c });
            },
          },
        });
      },
    }
  )
);
