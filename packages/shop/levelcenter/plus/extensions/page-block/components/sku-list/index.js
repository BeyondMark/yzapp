"use strict";
var r = require("~/r");
r(
  "GIpu",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      GIpu: function (e, t, s) {
        s.r(t);
        var i = s("rqVN"),
          a = s("hHpg"),
          r = s("AQkN"),
          o = s("Q1wr");
        Object(i.b)({
          properties: {
            nowLevelAlias: {
              type: String,
              observer() {
                this.fetchLevelGoods(), this.resetRadio(), this.updateShow();
              },
            },
            userLevel: {
              type: Object,
              value: {},
              observer() {
                this.updateShow();
              },
            },
          },
          data: {
            hideSkuList: !0,
            current: 0,
            width: 130,
            height: 140,
            radio: 0,
            startPay: !1,
            skuHandleLst: [],
            needBindMoblie: !1,
            skuList: [],
            loading: !1,
            bestPrice: null,
            unitCycle: r.e,
            hasMonthNotCheapest: !1,
          },
          lifetimes: {
            attached() {
              var e = (wx.getSystemInfoSync().windowHeight - 22) / 6,
                t = 1.08 * e;
              this.setYZData({ width: e, height: t });
            },
          },
          methods: {
            updateShow() {
              var e,
                { userLevel: t, nowLevelAlias: s } = this.properties,
                i = null == t ? void 0 : t.isExperienceLevel,
                a = (null == t ? void 0 : t.isExpired) || !1,
                r = null == t || null == (e = t.level) ? void 0 : e.levelAlias;
              this.setYZData({ hideSkuList: r === s && !a && !i });
            },
            resetRadio() {
              this.setYZData({ radio: 0 });
            },
            toggle(e) {
              var t, s, i, a;
              this.triggerEvent(
                "onSkuChange",
                null == (t = e.currentTarget) || null == (s = t.dataset)
                  ? void 0
                  : s.skuInfo
              ),
                this.setYZData({
                  radio:
                    (null == (i = e.currentTarget) || null == (a = i.dataset)
                      ? void 0
                      : a.index) || 0,
                });
            },
            fetchLevelGoods() {
              this.setYZData({ loading: !0, skuList: [] });
              var e = this.properties.nowLevelAlias,
                [t, s] = Object(o.a)([], e, o.b);
              t && this.formatLevelInfoForDisplay(t),
                s
                  .then((e) => {
                    this.formatLevelInfoForDisplay(e);
                  })
                  .catch((e) => {
                    Object(a.a)(e);
                  });
            },
            formatLevelInfoForDisplay(e) {
              this.setYZData({
                loading: !1,
                skuList: e.skuList,
                bestPrice: e.lowestMonthPrice,
                hasMonthNotCheapest: e.hasMonthNotCheapest,
                radio: 0,
              }),
                this.triggerEvent("onSkuChange", e.skuList[0]);
            },
          },
        });
      },
    }
  )
);
