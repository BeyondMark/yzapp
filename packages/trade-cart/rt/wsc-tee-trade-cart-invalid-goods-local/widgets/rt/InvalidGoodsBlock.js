"use strict";
var r = require("~/r");
r(
  "lMoo",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      lMoo: function (o, s, e) {
        e.r(s);
        var t = e("t/Ap"),
          a = e("lgMb"),
          i = e("YeA1"),
          l = {
            data: () => ({
              show: !1,
              unavailableItems: [],
              hasValidGoods: !0,
              isControlRecommendShow: !0,
              isValidGoodsLoadFinish: null,
            }),
            externalClasses: ["custom-class"],
            computed: {
              rootClass() {
                return {
                  root:
                    "custom-class invalid-block " +
                    (this.hasValidGoods ? "" : "no-valid-goods"),
                };
              },
              isShow() {
                var {
                  isValidGoodsLoadFinish: o,
                  isControlRecommendShow: s,
                  show: e,
                } = this;
                return s ? o && e : e;
              },
            },
            created() {
              Object(i.b)(this, [
                "hasValidGoods",
                "isValidGoodsLoadFinish",
                "isControlRecommendShow",
              ]),
                Object(i.b)(this, {
                  unavailableItems: (o) => {
                    this.show = o.length > 0;
                  },
                }),
                Object(i.e)(this, {
                  clearInvalidGoods: () =>
                    this.ctx.process
                      .invokePipe("beforeCartClearHook", {
                        clearGoodsType: ["invalidGoods"],
                      })
                      .then(() => t.a.deleteCartBatch(this.unavailableItems))
                      .then(() => {
                        this.ctx.event.emit("updateCartGoodsList");
                      })
                      .catch(
                        (o) => (
                          Object(a.b)(o, {
                            message: "商品删除失败，请稍后重试",
                          }),
                          Promise.reject(o)
                        )
                      ),
                });
            },
            ud: !0,
          },
          d = e("9ZMt");
        s.default = d.default.component(l);
      },
    }
  )
);
