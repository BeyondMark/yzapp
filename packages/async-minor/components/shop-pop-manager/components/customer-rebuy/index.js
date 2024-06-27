"use strict";
var r = require("~/r");
r(
  "gZlB",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      gZlB: function (e, t, i) {
        i.r(t),
          i.d(t, "SOURCE_LOG_MAP", function () {
            return l;
          });
        var o = i("Fcif"),
          n = i("eijD"),
          a = i("rqVN"),
          s = i("lGl3"),
          r = i("eCH0"),
          l = { 1: "首页", 2: "商详页", 3: "社区团购", 4: "微页面" };
        Object(a.b)({
          properties: {
            show: { type: Boolean, value: !0 },
            source: { type: Number, value: null },
          },
          data: { showSubscribeMask: !1, couponList: [], suffix: "" },
          attached() {
            this.initCouponData();
          },
          methods: {
            initCouponData() {
              var e = this;
              Object(s.b)()
                .then(
                  (function () {
                    var t = Object(n.a)(function* (t) {
                      e.setYZData({
                        couponList: t.couponTipList.map((e) => {
                          return Object(o.a)({}, e, {
                            condition: e.condition / 100,
                            amount:
                              ((n = e.denominations),
                              (a = n / 100),
                              a >= 1e4 ? (0 | a) / 1e4 : a),
                            moneySuffix:
                              e.denominations / 100 >= 1e4 ? "万" : "",
                            moneyFontSize:
                              ((t = e.denominations / 100),
                              (i =
                                t >= 1e4
                                  ? String((0 | t) / 1e4).length
                                  : String(t).length),
                              i >= 5 ? 22 : i >= 4 ? 38 : i >= 3 ? 56 : 60),
                          });
                          var t, i, n, a;
                        }),
                      }),
                        e.data.show &&
                          t.couponTipList.length > 0 &&
                          (Object(s.a)({
                            extraParams: { plan_id: t.planId },
                          }).catch((e) => {}),
                          (e._templateIdList = yield e.getTemplateIdList())),
                        t.couponTipList.length ||
                          e.triggerEvent("close-pop", {
                            currentShow: !1,
                            isRealClose: !0,
                          });
                    });
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })()
                )
                .catch((e) => {});
            },
            toggleSubscribeMask(e) {
              this.triggerEvent("toggle-subscribe-mask", e.detail);
            },
            getTemplateIdList: () =>
              Object(n.a)(function* () {
                var e = [];
                try {
                  var [{ templateIdList: t = [] }, { templateList: i = [] }] =
                    yield Promise.all([
                      Object(r.b)("retial_coupon_notice_scene"),
                      Object(r.c)(4),
                    ]);
                  e = [...t.map((e) => ({ templateId: e })), ...i];
                } catch (t) {
                  e = [];
                }
                return e;
              })(),
            handleClosePop() {
              var e = this;
              return Object(n.a)(function* () {
                Object(r.d)({
                  templates:
                    0 === e._templateIdList.length
                      ? yield e.getTemplateIdList()
                      : e._templateIdList,
                  next: () => {
                    e.triggerEvent("close-pop", {
                      currentShow: !1,
                      isRealClose: !0,
                    });
                  },
                  onShowTips: () => {
                    e.toggleSubscribeMask({ detail: !0 });
                  },
                  onCloseTips: () => {
                    e.toggleSubscribeMask({ detail: !1 }),
                      e.triggerEvent("close-pop", {
                        currentShow: !1,
                        isRealClose: !0,
                      });
                  },
                  onFail: () => {
                    e.toggleSubscribeMask({ detail: !1 }),
                      e.triggerEvent("close-pop", {
                        currentShow: !1,
                        isRealClose: !0,
                      });
                  },
                });
              })();
            },
          },
        });
      },
    }
  )
);
