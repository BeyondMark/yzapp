"use strict";
var r = require("~/r");
r(
  "92OU",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/c.js").modules,
    {
      "92OU": function (t, e, a) {
        a.r(e);
        var s = a("oePL"),
          i = 0,
          u = 1,
          r = 2,
          o = 3,
          c = 4,
          p = 5,
          d = 6;
        Component({
          properties: {
            themeClass: String,
            column: { type: Object, value: {} },
            showPriceInfo: Boolean,
          },
          data: { buyStatus: 0, isPaid: !1, computed: {} },
          attached() {
            this.initState();
          },
          methods: {
            getPaidStatus: (t) => t === i,
            getBuyStatus(t) {
              var { showPriceInfo: e } = this.data,
                {
                  price: a,
                  isBought: s = !1,
                  isFree: m = !1,
                  isVipDiscount: n = !1,
                  isFreeForVip: l = !1,
                  isGroupOn: h = !1,
                } = t;
              return e
                ? s
                  ? i
                  : m
                  ? u
                  : l
                  ? o
                  : 0 === a
                  ? u
                  : h
                  ? p
                  : n
                  ? c
                  : r
                : d;
            },
            initState() {
              var { column: t = {} } = this.data,
                e = this.getBuyStatus(t);
              this.setData({ buyStatus: e, isPaid: this.getPaidStatus(e) }),
                this.parseComputed();
            },
            parseComputed() {
              var { column: t, isPaid: e, buyStatus: a } = this.data;
              this.setData({
                "computed.subtitle": s.a.subtitle(t, e),
                "computed.thumbnailUrl": s.a.thumbnailUrl(t),
                "computed.statusList": s.a.statusList(t, e),
                "computed.priceText": s.a.priceText(t, a),
                "computed.priceTagText": s.a.priceTagText(t, a),
                "computed.columnUrl": s.a.columnUrl(t),
              });
            },
          },
        });
      },
    }
  )
);
