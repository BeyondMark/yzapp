"use strict";
var r = require("~/r");
r(
  "Nxeu",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      Nxeu: function (e, t, o) {
        o.r(t);
        var s = o("rqVN"),
          r = o("Kf04"),
          a = o("e33J");
        Object(s.b)({
          behaviors: [r.a, a.a],
          data: {
            goodsInfo: {
              type: "goods",
              layout: 1,
              size_type: 0,
              show_title: !0,
              show_price: !0,
              image_fill_style: 1,
              image_ratio: 1,
              buy_button_type: 1,
              show_buy_button: !0,
              page_margin: 0,
              goods_margin: 10,
              goods: [],
              contentGoods: [],
              border_radius_type: 2,
            },
          },
          properties: {
            noteData: { type: Object },
            noteGoodIds: Array,
            thumbsStatus: { type: Number, observer: "thumbsStatusUpdate" },
          },
          attached() {
            this.firstFlag = !0;
            var e = this.data.noteGoodIds;
            this.getNoteGoodsByIds(e);
          },
          methods: {
            showcaseHandleGoodsBuy(e) {
              this.triggerEvent("clickcart", e.detail);
            },
          },
        });
      },
    }
  )
);
