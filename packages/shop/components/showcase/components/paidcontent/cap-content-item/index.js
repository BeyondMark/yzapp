"use strict";
var r = require("~/r");
r(
  "OurE",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    OurE: function (t, e, i) {
      i.r(e);
      var a = i("rqVN"),
        s = 0,
        r = 1,
        u = 2,
        n = 3,
        o = 4,
        c = 5,
        l = 6,
        d = 7,
        p = 8;
      Object(a.b)({
        properties: {
          themeClass: String,
          content: { type: Object, value: {} },
          showPriceInfo: Boolean,
        },
        data: {
          buyStatus: 0,
          isPaid: !1,
          inColumn: !1,
          columnOnly: !1,
          typeSuffix: "",
        },
        attached() {
          this.initState();
        },
        methods: {
          getPaidStatus: (t) => t === s,
          getBuyStatus(t, e) {
            var { showPriceInfo: i } = this.data,
              {
                price: a,
                isBought: g = !1,
                isFree: h = !1,
                isVipDiscount: y = !1,
                isFreeForVip: S = !1,
                isGroupOn: f = !1,
              } = t;
            return i
              ? g
                ? s
                : h
                ? r
                : e
                ? n
                : S
                ? o
                : 0 === a
                ? d
                : f
                ? l
                : y
                ? c
                : u
              : p;
          },
          getTypeSuffix: (t) => ["", "读", "听", "看", "看"][+t],
          initState() {
            var { content: t = {} } = this.data,
              e = !!t.columnAlias,
              i = 2 === t.sellerType,
              a = this.getBuyStatus(t, i);
            this.setData({
              columnOnly: i,
              inColumn: e,
              buyStatus: a,
              isPaid: this.getPaidStatus(a),
              typeSuffix: this.getTypeSuffix(t.mediaType),
            });
          },
          goToContent(t) {
            var { alias: e } = t.currentTarget.dataset;
            e &&
              wx.navigateTo({
                url: "/packages/paidcontent/content/index?alias=" + e,
              });
          },
        },
      });
    },
  })
);
