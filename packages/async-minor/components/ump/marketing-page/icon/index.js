"use strict";
var r = require("~/r");
r(
  "lk1m",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      lk1m: function (t, e, o) {
        o.r(e);
        var a = o("rqVN"),
          i = o("BoIy"),
          r = o("RY8z"),
          s = o("STCT"),
          n = o("1oaI");
        Object(a.b)({
          behaviors: [n.a],
          data: {
            popupController: { isShow: !1 },
            iconImgStyle:
              "background-image: url(https://img01.yzcdn.cn/upload_files/2021/10/19/Fod8WsdlHHOZgINop9qK4n0om66y.gif)",
          },
          properties: {
            customPosition: { type: Boolean, default: !1 },
            pBottom: { type: String, default: "" },
            pGoaway: { type: Number, default: !1 },
          },
          attached() {
            this.data.customPosition ||
              (this.iconController = new i.a().setIcon(this, {
                priority: 60,
                height: 48,
                cb: [
                  (t) => {
                    this.setYZData({ bottom: t + "px;" });
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
              "navigateToMarketingPage" === e &&
                r.a.navigate({ url: s.a.url.activityMarketingPage });
            },
          },
        });
      },
    }
  )
);
