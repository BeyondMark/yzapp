"use strict";
var r = require("~/r");
r(
  "JTsT",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      JTsT: function (e, t, a) {
        a.r(t);
        var r = a("Fcif"),
          o = a("u8kV"),
          i = a("svh/"),
          s = a("MAT0"),
          O = a("i+tm"),
          c = a("9CuX");
        Object(o.b)({
          mapData: Object(r.a)(
            {},
            Object(i.f)(["actionBtns", "prizeInfo"]),
            Object(i.h)({
              userDrawResultDTO: (e) => e.activity.userDrawResultDTO || {},
            })
          ),
          methods: Object(r.a)(
            {},
            Object(i.e)(["JOIN", "GET_GOODS_SKU"]),
            Object(i.g)(["TOGGLE_SHEET_SHOW", "SET_USER_INFO"]),
            {
              toHomepage() {
                Object(s.c)();
              },
              toggleInvite() {
                Object(O.c)(c.a.CodeLottery), this.TOGGLE_SHEET_SHOW();
              },
              draw() {
                Object(O.d)(c.a.CodeLottery), this.JOIN({ eventType: 1 });
              },
              toMoney() {
                Object(s.d)();
              },
              fetchGoods() {
                var {
                    actualId: e,
                    alias: t,
                    img: a,
                    title: r,
                  } = this.data.prizeInfo,
                  o = { id: e, alias: t, price: "0.00", picture: a, title: r };
                this.GET_GOODS_SKU({
                  goods: o,
                  buyText: "立即购买",
                  type: "PAY",
                });
              },
              toCoupon() {
                Object(s.a)();
              },
              toOrder() {
                var { orderNo: e } = this.data.userDrawResultDTO;
                Object(s.e)(e);
              },
              handleBtnClick(e) {
                var { type: t } = e.target.dataset,
                  a = {
                    SHARE: "toggleInvite",
                    HOMEPAGE: "toHomepage",
                    DRAW: "draw",
                    MONEY: "toMoney",
                    ORDER: "toOrder",
                    COUPON: "toCoupon",
                    FETCH: "fetchGoods",
                  }[t];
                this.onGetUserInfo(e.detail), a && this[a]();
              },
              onGetUserInfo(e) {
                void 0 === e && (e = {});
                var { avatar: t, nickname: a } = e;
                this.SET_USER_INFO({ avatar: t, nickName: a });
              },
            }
          ),
        });
      },
    }
  )
);
