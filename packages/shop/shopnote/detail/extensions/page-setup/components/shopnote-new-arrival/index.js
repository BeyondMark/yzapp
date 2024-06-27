"use strict";
var r = require("~/r");
r(
  "rwF6",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      rwF6: function (t, e, o) {
        o.r(e);
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
              page_margin: 15,
              goods_margin: 10,
              goods: [],
              contentGoods: [],
              border_radius_type: 2,
            },
          },
          properties: {
            noteData: Object,
            noteGoodIds: Array,
            thumbsStatus: { type: Number, observer: "thumbsStatusUpdate" },
          },
          attached() {
            this.firstFlag = !0;
            var t = this.data.noteGoodIds;
            this.getNoteGoodsByIds(t);
          },
          methods: {
            showcaseHandleGoodsBuy(t) {
              this.triggerEvent("clickcart", t.detail);
            },
          },
        });
      },
    }
  )
);
