"use strict";
var r = require("~/r");
r(
  "yQT8",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "01ar": function (a, s, e) {
      var t = e("aOlM");
      s.a = t.a;
    },
    yQT8: function (a, s, e) {
      e.r(s);
      var t = e("rqVN"),
        o = e("01ar"),
        r = getApp();
      Object(t.b)({
        data: { showGotoCardIcon: !1, showListIcon: !1, y: 20 },
        pageLifetimes: {
          show() {
            var a = r.globalData.bi_card_sales,
              s = r.globalData.bi_list_icon_posY || 20,
              e = getCurrentPages(),
              t = e[e.length - 1].route,
              o = "packages/retail/extra/sales/bi-card/index" === t,
              i =
                !o &&
                !!a &&
                "packages/retail/chat/index" !== t &&
                "packages/business-card/auth/index" !== t;
            (o || i) && this.setYZData({ y: s }),
              this.setYZData({ showListIcon: o, showGotoCardIcon: i });
          },
          hide() {
            var { showListIcon: a, showGotoCardIcon: s } = this.data;
            (a || s) &&
              this.setYZData({ showListIcon: !1, showGotoCardIcon: !1 });
          },
        },
        methods: {
          navigateToSalesPage() {
            var a =
              "new_bi_card" === r.globalData.bi_card_sales_from
                ? "/packages/business-card/detail/index?from_params=" +
                  r.globalData.from_params +
                  "&from_source=" +
                  r.globalData.from_source
                : "/packages/retail/extra/sales/bi-card/index?from_params=" +
                  r.globalData.from_params +
                  "&from_source=" +
                  r.globalData.from_source;
            wx.navigateTo({
              url: this.data.showListIcon
                ? "/packages/retail/extra/sales/bi-list/index"
                : a,
            });
          },
          onChange: Object(o.a)((a) => {
            var {
              detail: { y: s },
            } = a;
            r.globalData.bi_list_icon_posY = s;
          }, 100),
        },
      });
    },
  })
);
