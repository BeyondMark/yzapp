"use strict";
var r = require("~/r");
r(
  "4SR8",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      "4SR8": function (e, t, a) {
        a.r(t);
        var s = a("Fcif"),
          o = a("lgMb"),
          i = a("mztD"),
          d = a("OK7I"),
          r = a.n(d),
          n = a("YeA1"),
          c = a("t/Ap"),
          l = a("eXT+"),
          m = {
            data: () => ({
              unavailableItems: [],
              GOODS_TAG_MAP: l.a,
              hasValidGoods: !0,
            }),
            externalClasses: ["custom-class"],
            created() {
              Object(n.b)(this, ["hasValidGoods"]),
                Object(n.b)(this, ["unavailableItems"], {
                  callback: () => {
                    this.getRecommendList();
                  },
                });
            },
            methods: {
              clearGoods() {
                this.ctx.process.invoke("clearInvalidGoods");
              },
              handleItemDelete(e) {
                var { cartId: t } = e,
                  { goods: a } = this._findGoodsInList(t),
                  s = a;
                return c.a
                  .deleteCartItem(s)
                  .then(() => {
                    this.ctx.event.emit("updateCartGoodsList");
                  })
                  .catch((e) => {
                    Object(o.b)(e, { message: "商品删除失败，请稍后重试" });
                  });
              },
              _findGoodsInList(e) {
                var t,
                  a = -1;
                return (
                  this.unavailableItems.forEach((s, o) => {
                    s.cartId === e && ((a = o), (t = s));
                  }),
                  { goodsGroupIndex: -1, goodsIndex: a, goods: t }
                );
              },
              getRecommendList() {
                var e = this,
                  t = [];
                this.unavailableItems.forEach((e) => {
                  t.push(e.goodsId);
                }),
                  t.length &&
                    c.a
                      .getMultiRecommendGoods(t)
                      .then(function (t) {
                        void 0 === t && (t = []);
                        var a = JSON.parse(JSON.stringify(e.unavailableItems));
                        e.unavailableItems = a.map((e) => {
                          var a,
                            o = t.find((t) => e.goodsId === t.goodsId) || {};
                          return Object(s.a)({}, e, {
                            recommendListObj: Object(s.a)({}, o, {
                              recommendList:
                                (null == (a = o.recommendList)
                                  ? void 0
                                  : a.map((e, t) =>
                                      Object(s.a)({}, e, {
                                        imageUrl: Object(i.a)(
                                          e.imageUrl,
                                          "!200x200.jpg"
                                        ),
                                        price: (e.price / 100).toFixed(2),
                                        bannerId:
                                          "cart~expired_goods_recommend~" +
                                          t +
                                          "~" +
                                          r()(8),
                                      })
                                    )) || [],
                            }),
                          });
                        });
                      })
                      .catch();
              },
              toGoodsDetail(e) {
                this.ctx.process.invoke("navigateFromCart", e);
              },
            },
            ud: !0,
          },
          u = a("9ZMt");
        t.default = u.default.component(m);
      },
    }
  )
);
