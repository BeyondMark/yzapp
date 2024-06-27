"use strict";
var r = require("~/r");
r(
  "LEXk",
  Object.assign({}, require("~/v.js").modules, {
    LEXk: function (t, e, p) {
      p.r(e);
      var o = p("YeA1"),
        r = p("mztD"),
        s = Object(r.a)("v2/image/wap"),
        i = {
          groupon: [
            { path: "/ump/guide/step1_2@2x.png", title: "1.选择商品开团/参团" },
            { path: "/ump/guide/step2_2@2x.png", title: "2.邀请好友参团" },
            { path: "/ump/guide/step3_2@2x.png", title: "3.人满成团" },
          ],
          hotel: [
            {
              path: "/trade/new_order/hotel_guide/step1_2@2x.png",
              title: "1.选择房型并支付",
            },
            {
              path: "/trade/new_order/hotel_guide/step2_2@2x.png",
              title: "2.商家接单确认",
            },
            {
              path: "/trade/new_order/hotel_guide/step3_2@2x.png",
              title: "3.预订成功",
            },
          ],
        },
        a = {
          data: () => ({ isGroupon: !1, hasHotelGoods: !1 }),
          computed: {
            type() {
              return this.isGroupon
                ? "groupon"
                : this.hasHotelGoods
                ? "hotel"
                : "";
            },
            steps() {
              return (
                i[this.type] &&
                i[this.type].map((t) => ((t.logo = s + t.path), t))
              );
            },
          },
          created() {
            Object(o.b)(this, ["isGroupon", "hasHotelGoods"]);
          },
          ud: !0,
        },
        u = p("9ZMt");
      e.default = u.default.component(a);
    },
  })
);
