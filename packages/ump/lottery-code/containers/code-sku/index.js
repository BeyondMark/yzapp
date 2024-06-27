"use strict";
var r = require("~/r");
r(
  "EbnC",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      EbnC: function (t, e, a) {
        a.r(e);
        var s = a("Fcif"),
          i = a("u8kV"),
          o = a("svh/"),
          c = a("KQ2A"),
          r = a("otsx"),
          d = a("i+tm"),
          n = a("9CuX"),
          u = getApp();
        Object(i.b)({
          mapData: Object(s.a)(
            {},
            Object(o.h)(["skuInfo", "activity", "showSku"])
          ),
          methods: Object(s.a)(
            {},
            Object(o.g)(["TOGGLE_POP_VISIBLE"]),
            Object(o.e)(["ADD_CART"]),
            {
              getSkuData: (t) => ({
                goodsData: {
                  goodsId: t.goodsId,
                  num: t.num,
                  skuId: t.skuId,
                  price: t.price,
                  qr: "",
                  tpps: "",
                },
                commonData: {
                  kdtId: u.getKdtId(),
                  postage: 0,
                  activityAlias: "",
                  activityId: 0,
                  activityType: "0",
                  useWxpay: 0,
                  orderFrom: "",
                  storeId: u.getOfflineId() || 0,
                },
                messages: t.messages,
                cartMessages: t.cartMessages,
              }),
              onBuyClick(t) {
                var { type: e } = this.data.skuInfo,
                  {
                    alias: a,
                    id: i,
                    shopId: o,
                    drawActivityId: I,
                  } = this.data.activity,
                  {
                    goodsData: g,
                    commonData: m,
                    messages: O,
                    cartMessages: v,
                  } = this.getSkuData(t.detail);
                if ("ADD_CART" === e) {
                  var y = {
                      promotionMark: JSON.stringify({
                        appType: r.b,
                        source: "TASK",
                        activityAlias: a,
                        activityId: i,
                      }),
                    },
                    h = Object(s.a)({}, g, m, {
                      messages: O,
                      cartMessages: v,
                      storeId: u.getOfflineId() || 0,
                      cartBizMarkDTO: y,
                    });
                  return (
                    Object(d.a)(n.a.CodeLottery),
                    void Object(c.a)(h, {}, "application/json")
                      .then(() => {
                        wx.showToast({
                          title: "成功加入购物车",
                          icon: "none",
                          duration: 2e3,
                        }),
                          this.onSkuClose();
                      })
                      .catch((t) => {
                        wx.showToast({
                          title: t.msg || "加入购物车失败",
                          icon: "none",
                          duration: 2e3,
                        });
                      })
                  );
                }
                Object(c.d)(
                  Object(s.a)({}, g, m, {
                    messages: O,
                    kdtId: o,
                    activityAlias: "" + I,
                    activityType: r.b,
                    activityId: i,
                  })
                ).then(() => {
                  this.onSkuClose();
                });
              },
              onSkuClose() {
                this.TOGGLE_POP_VISIBLE({ name: "showSku", value: !1 });
                var { type: t } = this.data.skuInfo;
                "ADD_CART" === t &&
                  this.TOGGLE_POP_VISIBLE({ name: "showBuy", value: !0 });
              },
            }
          ),
        });
      },
    }
  )
);
