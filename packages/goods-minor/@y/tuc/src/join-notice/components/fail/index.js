"use strict";
var r = require("~/r");
r(
  "StMU",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      StMU: function (e, t, n) {
        n.r(t);
        var a = n("2bgu"),
          r = n("jmjq"),
          o = n.n(r),
          l = n("z0eK"),
          s = {
            props: {
              mode: { type: Number },
              missionList: { type: Array },
              levelGapInfo: { type: Object },
            },
            data: () => ({ LevelMode: l.a }),
            computed: {
              needCompleteRegistrationInfo() {
                return (
                  this.levelGapInfo &&
                  !1 === this.levelGapInfo.isRegistrationInfoCompleted
                );
              },
              growthValue() {
                return this.levelGapInfo.neededGrowth;
              },
              consumeTextObject() {
                return this.levelGapInfo.neededMinTradeAmount
                  ? {
                      isOnceConsume: !0,
                      price: this.levelGapInfo.neededMinTradeAmount
                        ? o()(this.levelGapInfo.neededMinTradeAmount)
                        : "",
                    }
                  : {
                      isOnceConsume: !1,
                      times: this.levelGapInfo.neededTotalTradeCount || "",
                      hasOr:
                        this.levelGapInfo.neededTotalTradeCount > 0 &&
                        this.levelGapInfo.neededTotalTradeAmount > 0,
                      price: this.levelGapInfo.neededTotalTradeAmount
                        ? o()(this.levelGapInfo.neededTotalTradeAmount)
                        : "",
                    };
              },
              storeValue() {
                return this.levelGapInfo.neededStoreBalance
                  ? o()(this.levelGapInfo.neededStoreBalance)
                  : "";
              },
            },
            methods: {
              handleGrowthClick(e) {
                void 0 === e && (e = {}),
                  Object(a.b)({
                    url: e.weappUrl || "/packages/shop/levelcenter/free/index",
                    type: e.type || "navigateTo",
                    web: {
                      type: "safeLink",
                      safeLink: { url: e.url || "/wscuser/levelcenter" },
                    },
                  });
              },
              handleConsumeClick() {
                Object(a.b)({
                  url: "/pages/home/dashboard/index",
                  type: "switchTab",
                  web: {
                    type: "safeLink",
                    safeLink: { url: "/wscshop/showcase/homepage" },
                  },
                });
              },
              handleStoreClick() {
                Object(a.b)({
                  url: "/packages/pre-card/recharge/index",
                  type: "navigateTo",
                  web: {
                    type: "safeLink",
                    safeLink: { url: "/pay/new_prepaid_balance_recharge" },
                  },
                });
              },
            },
            ud: !0,
          },
          d = n("9ZMt");
        t.default = d.default.component(s);
      },
    }
  )
);
