"use strict";
var r = require("~/r");
r(
  "7ECu",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "7ECu": function (e, a, o) {
        o.r(a);
        var i = o("Fcif"),
          t = o("9ZMt"),
          n = o("KozD"),
          r = {
            name: "flow-change-ump",
            data: () => ({
              show: !1,
              shopAd: {},
              originData: {},
              isShowCoupon: !1,
              isShowSeckill: !1,
              isShowChoose: !1,
              isShowLottery: !1,
            }),
            created() {
              this.init();
            },
            mounted() {},
            methods: {
              init() {
                var e = this;
                Object(n.c)().then(function (a) {
                  if ((void 0 === a && (a = {}), !a.imageUrl)) {
                    var o,
                      i = Object(n.e)(a);
                    if (
                      ((e.shopAd = i || {}),
                      (e.originData = (null == i ? void 0 : i.data) || {}),
                      (e.show = !!i),
                      i && i.type)
                    )
                      (e.isShowCoupon = i.type === n.a.coupon),
                        (e.isShowSeckill = i.type === n.a.seckill),
                        (e.isShowChoose =
                          i.type === n.a.choose &&
                          3 === (null == (o = i.data) ? void 0 : o.length)),
                        (e.isShowLottery = i.type === n.a.lottery);
                  }
                });
              },
              handleToNavigator(e) {
                var { adImageConfig: a = "{}", psCode: o } = e,
                  { url: i, weappUrl: n, appId: r } = JSON.parse(a);
                t.default.$native.navigateToMiniProgram({
                  appId: r,
                  path: n + "&dc_ps=" + o,
                  envVersion: "trial",
                });
              },
              logger(e) {
                var {
                    data: a,
                    type: o,
                    eventType: t,
                    index: n,
                    isNavigator: r = !0,
                  } = e,
                  s = { et: "view", ei: "ad_exchange_view", en: "图片曝光" };
                "click" === t &&
                  ((s = {
                    et: "click",
                    ei: "ad_exchange_click",
                    en: "广告点击",
                  }),
                  r && this.handleToNavigator(a));
                var d,
                  { psCode: c, cooperateKdtId: l } = a;
                c &&
                  l &&
                  (null == (d = this.ctx.logger) ||
                    d.log(
                      Object(i.a)({}, s, {
                        params: {
                          ps_code: c,
                          type: o,
                          index: n,
                          channel: "weapp",
                          activity_kdt_id: l,
                          component: "ad_exchange_banner",
                        },
                      })
                    ));
              },
            },
            ud: !0,
          };
        a.default = t.default.component(r);
      },
    }
  )
);
