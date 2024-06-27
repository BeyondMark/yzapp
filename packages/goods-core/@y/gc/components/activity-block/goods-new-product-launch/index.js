"use strict";
var r = require("~/r");
r(
  "b1uX",
  Object.assign({}, require("~/v.js").modules, {
    b1uX: function (t, e, i) {
      i.r(e);
      var r = i("q29p"),
        o = i.n(r),
        u = i("NHEX"),
        s = i.n(u),
        a = {
          props: { opt: { type: Object, default: () => ({}) } },
          data: () => ({}),
          computed: {
            themeVars() {
              var t;
              return (null == (t = this.opt) ? void 0 : t.themeVars) || "";
            },
            theme() {
              var t;
              return (null == (t = this.opt) ? void 0 : t.theme) || {};
            },
            isWaitSold() {
              var t;
              return Boolean(
                null == (t = this.opt) ? void 0 : t.goodsActivity.waitToSold
              );
            },
            isProductLaunch: () => !0,
            title() {
              return this.isWaitSold
                ? "[预约中] 预约后商品将加入购物车，及时抢购哦"
                : "[抢购中] 商品火热开售中，尽快加购下单哦";
            },
            desc() {
              var t, e;
              if (this.isProductLaunch) {
                var i = s()(
                    null == (t = this.opt) ? void 0 : t.goodsActivity,
                    "waitToSold.startSoldTime"
                  ),
                  { endTime: r } =
                    null == (e = this.opt)
                      ? void 0
                      : e.umpActivity.productLaunch;
                return (
                  "抢购时间：" +
                  o()(i, "YYYY.MM.DD HH:mm:ss") +
                  " 至 " +
                  o()(r, "YYYY.MM.DD HH:mm:ss")
                );
              }
            },
          },
          created() {},
          ud: !0,
        },
        d = i("9ZMt");
      e.default = d.default.component(a);
    },
  })
);
