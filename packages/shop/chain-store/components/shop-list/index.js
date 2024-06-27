"use strict";
var r = require("~/r");
r(
  "uWD9",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    uWD9: function (e, i, n) {
      n.r(i);
      var o = n("rqVN"),
        t = n("u8kV");
      Object(o.b)({
        properties: {
          hidden: { type: Boolean, value: !1 },
          hiddenTitle: { type: Boolean, value: !1 },
          isOnline: Boolean,
          isOffline: Boolean,
          isShowAll: Boolean,
          disableLink: Boolean,
          title: String,
          blankContent: String,
          umpType: String,
          shopLists: Array,
          noMore: { type: Boolean, value: !1 },
        },
        ready() {
          var { options: e = {} } = Object(t.d)(this);
          this.setYZData({ disableLink: !!e.isRedirectDisable });
        },
        methods: {
          goAllStore() {
            var { isOnline: e, isOffline: i } = this.data;
            this.triggerEvent("go-list", { isOnline: e, isOffline: i });
          },
          handleChooseShop(e) {
            var { currentTarget: i } = e,
              { disableLink: n, isOffline: o, umpType: t } = this.data,
              { dataset: s = {} } = i,
              { shop: r = {} } = s,
              { offlineShopOpen: a, onlineShopOpen: l } = r,
              h = o || (a && !l);
            "coupon" === t && h
              ? wx.showToast({
                  title: "请前往该门店使用",
                  icon: "none",
                  duration: 3e3,
                })
              : h || n || this.triggerEvent("choose", { shop: r });
          },
        },
      });
    },
  })
);
