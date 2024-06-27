"use strict";
var r = require("~/r");
r(
  "utnd",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      utnd: function (e, t, i) {
        i.r(t);
        var r = i("Fcif"),
          s = i("rqVN"),
          a = i("yar/"),
          n = getApp();
        Object(s.b)({
          properties: Object(r.a)({}, a.a, {
            bizDataMap: Object,
            crmFromScenePlanId: String,
            hasMobile: Boolean,
            nowLevel: Object,
            nowBenefitList: { type: Array, value: [] },
          }),
          data: { guideList: [], curIdx: -1 },
          attached() {
            this.initialize(),
              n.on("level-center:rejoin", () => {
                this.initialize();
              });
          },
          methods: {
            initialize() {
              this.initGuideList().then(() => {
                this.start();
              });
            },
            initGuideList() {
              var e = ["scene-market-subscribe", "level-welcome"];
              return (
                this.properties.hasLevel && e.unshift("protocol-guide"),
                this.setYZData({ guideList: e }),
                Promise.resolve(e)
              );
            },
            next() {
              var e = this.data.curIdx + 1;
              this.setYZData({ curIdx: e });
            },
            finish(e) {
              e.detail
                ? this.setYZData({ curIdx: -1 })
                : this.setYZData({ curIdx: this.data.curIdx + 1 });
            },
            start() {
              this.setYZData({ curIdx: 0 });
            },
            triggerBindMobile() {
              this.triggerEvent("bindMobile");
            },
            handleSubscribeCallback(e) {
              this.triggerEvent("subscribeCallback", e.detail);
            },
          },
        });
      },
    }
  )
);
