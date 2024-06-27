"use strict";
var r = require("~/r");
r(
  "6UDy",
  Object.assign({}, require("~/v.js").modules, {
    "6UDy": function (e, t, a) {
      a.r(t);
      var o = a("Fcif"),
        n = a("YeA1"),
        i = "floating:nav:update:position",
        c = "floating:nav:init",
        r = "createOrUpdateIndependentIcon",
        s = {
          data: () => ({
            shareTag: null,
            showSceneMarketSubscribe: !1,
            canShowSceneMarketSubscribe: !1,
            crmFromScenePlanId: "",
            showShopPopManager: !1,
            bottom: 0,
            giftIconData: { bottom: 0, goaway: !1 },
            marketingIconData: { bottom: 0, goaway: !1 },
            isWebviewFeature: !1,
            isHomePage: !1,
            showLotteryCode: !1,
            extraData: {},
          }),
          created() {
            setTimeout(() => {
              this.canShowSceneMarketSubscribe = !0;
            }, 500),
              Object(n.b)(this, [
                "shareTag",
                "showSceneMarketSubscribe",
                "crmFromScenePlanId",
                "showShopPopManager",
                "isWebviewFeature",
                "isHomePage",
                "showLotteryCode",
                "extraData",
              ]),
              this.ctx.event.listen(i, this.onIconDataChange),
              this.ctx.event.listen(c, this.onFloatingNavInit);
          },
          beforeDestroy() {
            this.ctx.event.remove(i, this.onIconDataChange),
              this.ctx.event.remove(c, this.onFloatingNavInit);
          },
          methods: {
            onFloatingNavInit() {
              this.ctx.process.invoke(r, {
                type: "collect-gift",
                priority: 80,
                height: 48,
                canGoaway: !0,
              }),
                this.ctx.process.invoke(r, {
                  type: "marketing-page-icon",
                  priority: 60,
                  height: 48,
                  canGoaway: !0,
                });
            },
            handleCloseSceneMarketSubscribe() {
              this.ctx.process.invoke("handleCloseSceneMarketSubscribe");
            },
            onProtocolInitListen() {},
            onIconDataChange(e) {
              "collect-gift" === e.type &&
                (e.goaway
                  ? (this.giftIconData = Object(o.a)({}, this.giftIconData, {
                      goaway: !0,
                    }))
                  : (this.giftIconData = e)),
                "marketing-page-icon" === e.type &&
                  (e.goaway
                    ? (this.marketingIconData = Object(o.a)(
                        {},
                        this.marketingIconData,
                        { goaway: !0 }
                      ))
                    : (this.marketingIconData = e));
            },
          },
          ud: !0,
        },
        h = a("9ZMt");
      t.default = h.default.component(s);
    },
  })
);
