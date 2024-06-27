"use strict";
var r = require("~/r");
r(
  "yCRs",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      yCRs: function (t, e, o) {
        o.r(e);
        var a = o("rqVN"),
          i = o("BoIy"),
          s = o("O829"),
          r = o("cgm0"),
          c = o("Eagg"),
          n = o("LOL7"),
          l = getApp();
        Object(a.b)({
          behaviors: [r.a],
          data: { popupController: { isShow: !1 }, isChannels: Object(c.b)() },
          properties: {
            customPosition: { type: Boolean, default: !1 },
            pBottom: { type: String, default: "" },
            pGoaway: { type: Number, default: !1 },
            zIndex: { type: Number, default: 140 },
          },
          attached() {
            Object(c.b)() ||
              this.data.customPosition ||
              (this.iconController = new i.a().setIcon(this, {
                priority: 80,
                height: 74,
                cb: [
                  (t) => {
                    this.setYZData({ bottom: t + "px" });
                  },
                  (t) => {
                    this.setYZData({ goaway: t });
                  },
                ],
              }));
          },
          detached() {
            this.data.customPosition ||
              (this.iconController.setIcon(this, { height: 0 }),
              this.iconController.destroy(this));
          },
          methods: {
            eventHandler(t) {
              var {
                target: {
                  dataset: { event: e },
                },
              } = t;
              switch (e) {
                case "closeContainer":
                  return (
                    Object(n.a)().catch(() => {}),
                    this.setYZData({ "state.isShow": !1 })
                  );
                case "navigateToActivityHomePage":
                  return (
                    l.logger.log({
                      et: "click",
                      ei: "click_collect_gift",
                      en: "点击收藏有礼",
                    }),
                    wx.navigateTo({ url: s.a.url.activityHomePage })
                  );
              }
            },
          },
        });
      },
    }
  )
);
