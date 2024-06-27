"use strict";
var r = require("~/r");
r(
  "UCw5",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    UCw5: function (e, t, a) {
      a.r(t);
      var i = a("rqVN"),
        r = a("DXKY"),
        n = a("YeA1"),
        s = a("hTAu"),
        o = getApp();
      Object(i.b)({
        data: {
          dineData: null,
          dineFold: !1,
          showDineEntry: !1,
          tableNumber: "",
          themeMainColor: "#fff",
        },
        properties: { themeColors: { type: Object, default: () => ({}) } },
        methods: {
          initDineNavData() {
            var {
                startTime: e,
                lifeTime: t,
                data: a,
              } = wx.getStorageSync("retail:dineData") || {},
              i = new Date().getTime();
            !e || i - e > t
              ? this.resetDineNavData()
              : (this.handleDineTimer(t - (i - e)),
                this.setYZData({
                  dineData: a,
                  tableNumber: a.queryData.tableNumber,
                  showDineEntry: !0,
                }),
                r.a.once("onPageScroll" + Object(s.a)(), () => {
                  this.setYZData({ dineFold: !0 });
                }));
          },
          handleDineTimer(e) {
            this.dineTimer && clearTimeout(this.dineTimer),
              (this.dineTimer = setTimeout(() => {
                this.resetDineNavData();
              }, e));
          },
          resetDineNavData() {
            this.setYZData({ showDineEntry: !1, dineData: null }),
              wx.setStorage("retail:dineData", {});
          },
          linkToShelf() {
            var { dmc: e } = Object(n.a)(),
              { route: t, queryData: a } = this.data.dineData;
            e.navigate(t, a);
          },
        },
        attached() {
          o.getShopTheme().then((e) => {
            this.setYZData({ themeMainColor: e.colors["main-bg"] });
          }),
            this.initDineNavData(),
            r.a.on("retail:update:kdtid", () => {
              wx.setStorage({ key: "retail:dineData", data: "{}" });
            });
        },
      });
    },
  })
);
