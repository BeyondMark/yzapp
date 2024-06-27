"use strict";
var r = require("~/r");
r(
  "+MDv",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "+MDv": function (e, t, o) {
        o.r(t);
        var a = o("Fcif"),
          s = o("u8kV"),
          i = o("svh/"),
          r = o("MAT0"),
          c = o("otsx"),
          O = {
            HOME: "toHome",
            FETCH: "fetchGoods",
            COUPON: "toCoupon",
            MONEY: "toMoney",
            CONCAT: "makePhone",
          };
        Object(s.b)({
          mapData: Object(a.a)(
            {},
            Object(i.h)({
              showPrizePop: (e) => e.showPrizePop,
              status: (e) => e.activity.status,
              userDrawResultDTO: (e) => e.activity.userDrawResultDTO || {},
            }),
            Object(i.f)([
              "prizePop",
              "prizeList",
              "isWin",
              "prizeInfo",
              "concat",
            ])
          ),
          data: { statusMap: Object.freeze(c.m) },
          methods: Object(a.a)(
            {},
            Object(i.g)(["TOGGLE_POP_VISIBLE"]),
            Object(i.e)(["GET_GOODS_SKU"]),
            {
              onClose() {
                this.TOGGLE_POP_VISIBLE({ name: "showPrizePop", value: !1 });
              },
              toHome() {
                Object(r.c)();
              },
              toCoupon() {
                Object(r.a)();
              },
              toMoney() {
                Object(r.d)();
              },
              toOrder() {
                var { orderNo: e } = this.data.userDrawResultDTO || {};
                Object(r.e)(e);
              },
              fetchGoods() {
                var {
                    alias: e,
                    actualId: t,
                    img: o,
                    title: a,
                  } = this.data.prizeInfo || {},
                  s = { id: t, alias: e, price: "0.00", picture: o, title: a };
                this.GET_GOODS_SKU({
                  goods: s,
                  buyText: "立即购买",
                  type: "PAY",
                });
              },
              makePhone() {
                var { concat: e } = this.data;
                e && wx.makePhoneCall({ phoneNumber: e });
              },
              handleClick() {
                var { type: e } = this.data.prizePop.btnInfo,
                  t = O[e];
                this.onClose(), t && this[t]();
              },
              handleDesc() {
                var { isFail: e } = this.data.prizePop;
                e && this.toHome();
              },
            }
          ),
        });
      },
    }
  )
);
