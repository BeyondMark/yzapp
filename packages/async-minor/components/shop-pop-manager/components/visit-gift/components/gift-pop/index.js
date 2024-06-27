"use strict";
var r = require("~/r");
r(
  "xjpr",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      xjpr: function (e, s, t) {
        t.r(s);
        var r = t("rqVN"),
          i = t("eCH0"),
          o = t("3cdT");
        Object(r.b)({
          properties: {
            show: { type: Boolean, value: !1 },
            detail: { type: Object, value: {} },
            source: { type: Number, value: null },
          },
          data: { showSubscribeMask: !1 },
          methods: {
            toggleSubscribeMask(e) {
              this.triggerEvent("toggle-subscribe-mask", e.detail);
            },
            onClose() {
              var e = this,
                { source: s } = this.data;
              Object(i.e)({
                scene: i.a.COUPON,
                subscribePage: o.e[s],
                subscribeType: "进店有礼",
                authorizationType: "coupon",
                windowType: "micro_visit_gift",
                options: {
                  next: () => {
                    this.triggerEvent("close");
                  },
                  onShowTips: () => {
                    e.toggleSubscribeMask({ detail: !0 });
                  },
                  onCloseTips: () => {
                    e.toggleSubscribeMask({ detail: !1 }),
                      this.triggerEvent("close");
                  },
                },
              });
            },
            toggleRules() {
              this.triggerEvent("toggleRules", !0);
            },
          },
        });
      },
    }
  )
);
