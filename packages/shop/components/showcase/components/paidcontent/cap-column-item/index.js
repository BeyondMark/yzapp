"use strict";
var r = require("~/r");
r(
  "b+Uv",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "b+Uv": function (t, e, i) {
      i.r(e);
      var s = i("rqVN"),
        a = 0,
        r = 1,
        u = 2,
        o = 3,
        n = 4,
        c = 5,
        h = 6;
      Object(s.b)({
        properties: {
          themeClass: String,
          column: { type: Object, value: {} },
          showPriceInfo: Boolean,
        },
        data: { buyStatus: 0, isPaid: !1 },
        attached() {
          this.initState();
        },
        methods: {
          getPaidStatus: (t) => t === a,
          getBuyStatus(t) {
            var { showPriceInfo: e } = this.data,
              {
                price: i,
                isBought: s = !1,
                isFree: d = !1,
                isVipDiscount: S = !1,
                isFreeForVip: b = !1,
                isGroupOn: v = !1,
              } = t;
            return e
              ? s
                ? a
                : d
                ? r
                : b
                ? o
                : 0 === i
                ? r
                : v
                ? c
                : S
                ? n
                : u
              : h;
          },
          initState() {
            var { column: t = {} } = this.data,
              e = this.getBuyStatus(t);
            this.setData({ buyStatus: e, isPaid: this.getPaidStatus(e) });
          },
        },
      });
    },
  })
);
