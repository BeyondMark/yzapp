"use strict";
var r = require("~/r");
r(
  "L7BR",
  Object.assign({}, require("../../../../../c.js").modules, {
    L7BR: function (e, t, a) {
      a.r(t);
      var r = a("Dq5y");
      Component({
        properties: {
          hideTag: { type: Boolean, value: !1 },
          themeClass: String,
          alias: { type: String, value: "" },
          cover: { type: String, value: "" },
          count: { type: Number, value: 0 },
          subCount: { type: Number, value: 0 },
          summary: { type: String, value: "" },
          title: { type: String, value: "" },
          price: null,
          time: { type: String, value: "" },
          noBorder: { type: Boolean, value: !1 },
          hasBuy: { type: Boolean, value: !1 },
          isGroupon: { type: Boolean, value: !1 },
          grouponNum: { type: Number, value: 0 },
          isFree: Number,
          isPaid: Boolean,
          isVip: { type: Boolean, value: !1 },
          tagName: { type: Number, value: 0 },
          showPriceInfo: Boolean,
        },
        data: { computed: {} },
        attached() {
          this.parseComputed();
        },
        methods: {
          goToMember(e) {
            var { alias: t } = e.currentTarget.dataset;
            t &&
              wx.navigateTo({
                url: "/packages/paidcontent/rights/index?alias=" + t,
              });
          },
          parseComputed() {
            var {
              count: e,
              subCount: t,
              isPaid: a,
              price: u,
              showPriceInfo: o,
            } = this.data;
            this.setData({
              "computed.statusList": r.a.statusList(e, t, a),
              "computed.priceText": r.a.priceText(a, u, o),
            });
          },
        },
      });
    },
  })
);
