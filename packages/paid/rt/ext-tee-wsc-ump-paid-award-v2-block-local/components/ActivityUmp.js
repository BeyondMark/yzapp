"use strict";
var r = require("~/r");
r(
  "WoUA",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      WoUA: function (e, t, o) {
        o.r(t);
        var i = o("Fcif"),
          r = o("w2Y9"),
          a = o.n(r),
          s = o("taYb"),
          d = o("YAk7"),
          l = {
            props: {
              orderNo: String,
              paidPromotion: { type: Object, defalut: {} },
              navigateTo: Function,
              isWxReceipt: { type: Boolean, default: () => !1 },
            },
            methods: {
              activityClickHandler() {
                var { orderNo: e } = this,
                  { detailUrl: t, promotionType: o } = this.paidPromotion,
                  r = d.g[o];
                this.isWxReceipt
                  ? this.navigateTo(t)
                  : r &&
                    r(
                      Object(i.a)(
                        { orderNo: e, detailUrl: t },
                        s.a.toCamelCase(a.a.getAll(t))
                      )
                    );
              },
            },
            ud: !0,
          },
          n = o("9ZMt");
        t.default = n.default.component(l);
      },
    }
  )
);
