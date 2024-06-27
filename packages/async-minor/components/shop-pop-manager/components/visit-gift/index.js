"use strict";
var r = require("~/r");
r(
  "7Pl9",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "7Pl9": function (t, e, o) {
        o.r(e);
        var i = o("Fcif"),
          s = o("rqVN"),
          r = o("BoIy"),
          a = o("Jth9"),
          h = o("ayAB"),
          n = o("3cdT"),
          c = o("Yfvy"),
          l = o("JxL/"),
          d = getApp(),
          { logger: g } = d;
        Object(s.b)({
          behaviors: [l.a],
          properties: { source: { type: Number, value: null } },
          data: {
            showGiftPop: !1,
            showCouponIcon: !1,
            ruleVisible: !1,
            detail: {},
          },
          attached() {
            (this.cloudLoggerInfo = Object(c.b)(
              "shop_ad_pop",
              Object(i.a)({}, this.getCloudLoggerInfo("enter_shop"))
            )),
              this.joinVisitGift();
          },
          detached() {
            this.iconController && this.iconController.destroy(this);
          },
          methods: {
            getAdImageInfo: () => "",
            sendViewLogger() {
              g &&
                g.log({
                  et: "view",
                  ei: "Ad_view",
                  en: "图片广告曝光",
                  si: d.getKdtId(),
                  params: Object(i.a)(
                    { component: "popup_ad" },
                    this.cloudLoggerInfo
                  ),
                });
            },
            joinVisitGift(t) {
              void 0 === t && (t = !1);
              var { source: e } = this.data,
                o = d.getKdtId();
              Object(h.b)(e)
                .then((t) => {
                  var e = Object(a.a)(t, o);
                  this.setYZData({ showGiftPop: !0, detail: e }),
                    this.sendViewLogger();
                })
                .catch((e) => {
                  var i,
                    { code: s } = e;
                  if (t || s === n.c.ASYNC_SEND) {
                    var h = Object(a.a)({}, o, s);
                    return (
                      this.setYZData({ showGiftPop: !0, detail: h }),
                      void this.sendViewLogger()
                    );
                  }
                  s === n.c.BIND_MOBILE &&
                    (this.setYZData({ showCouponIcon: !0 }),
                    (this.iconController =
                      null == (i = new r.a())
                        ? void 0
                        : i.setIcon(this, {
                            priority: 70,
                            height: 48,
                            cb: [
                              (t) => {
                                this.setYZData({ bottom: t + "px" });
                              },
                              (t) => {
                                this.setYZData({ goaway: t });
                              },
                            ],
                          })));
                  this.triggerEvent("close-pop", {
                    currentShow: this.data.showCouponIcon,
                  });
                });
            },
            closeVisitGift(t, e) {
              void 0 === e && (e = !1),
                this.setYZData({ showGiftPop: !1 }),
                e ||
                  this.triggerEvent("close-pop", {
                    currentShow: !1,
                    isRealClose: !0,
                  });
            },
            showRule(t) {
              this.setYZData({ ruleVisible: t.detail });
            },
            handleLogin() {
              this.setYZData({ showCouponIcon: !1 }), this.joinVisitGift(!0);
            },
            toggleSubscribeMask(t) {
              this.triggerEvent("toggle-subscribe-mask", t.detail);
            },
          },
        });
      },
    }
  )
);
