"use strict";
var r = require("~/r");
r(
  "tvNx",
  Object.assign({}, require("../../../../../c.js").modules, {
    tvNx: function (t, e, i) {
      i.r(e);
      var a = i("lDC5"),
        u = 0,
        s = 1,
        n = 2,
        o = 3,
        r = 4,
        c = 5,
        p = 6,
        d = 7,
        l = 8;
      Component({
        properties: {
          content: { type: Object, value: {} },
          showPriceInfo: Boolean,
        },
        data: {
          buyStatus: 0,
          isPaid: !1,
          inColumn: !1,
          columnOnly: !1,
          typeSuffix: "",
          computed: {},
        },
        attached() {
          this.initState();
        },
        methods: {
          getPaidStatus: (t) => t === u,
          getBuyStatus(t, e) {
            var { showPriceInfo: i } = this.data,
              {
                price: a,
                isBought: m = !1,
                isFree: f = !1,
                isVipDiscount: h = !1,
                isFreeForVip: S = !1,
                isGroupOn: x = !1,
              } = t;
            return i
              ? m
                ? u
                : f
                ? s
                : e
                ? o
                : S
                ? r
                : 0 === a
                ? d
                : x
                ? p
                : h
                ? c
                : n
              : l;
          },
          getTypeSuffix: (t) => ["", "读", "听", "看", "看"][+t],
          getCountSuffix: (t) => ["", "学习", "学习", "观看", "观看"][+t],
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
              countSuffix: this.getCountSuffix(t.mediaType),
            }),
              this.parseComputed();
          },
          goToContent(t) {
            var { alias: e } = t.currentTarget.dataset;
            e &&
              wx.navigateTo({
                url: "/packages/paidcontent/content/index?alias=" + e,
              });
          },
          parseComputed() {
            var {
              content: t,
              inColumn: e,
              isPaid: i,
              typeSuffix: u,
              countSuffix: s,
              buyStatus: n,
            } = this.data;
            this.setData({
              "computed.subtitle": a.a.subtitle(t, e),
              "computed.thumbnailUrl": a.a.thumbnailUrl(t),
              "computed.icon": a.a.icon(t),
              "computed.statusList": a.a.statusList(t, i, s),
              "computed.priceText": a.a.priceText(t, n, u),
              "computed.priceTagText": a.a.priceTagText(t, n),
              "computed.contentUrl": a.a.contentUrl(t),
            });
          },
        },
      });
    },
  })
);
