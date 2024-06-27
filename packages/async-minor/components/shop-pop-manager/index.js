"use strict";
var r = require("~/r");
r(
  "wU7m",
  Object.assign(
    {},
    require("../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      wU7m: function (e, t, r) {
        r.r(t);
        var s = r("Fcif"),
          o = r("rqVN"),
          a = r("91TL"),
          i = r("Eagg"),
          p = r("JxL/"),
          u = r("Yfvy");
        var h = getApp(),
          n = "pop_ad",
          d = "check_in",
          c = "enter_shop",
          g = "member_guide",
          m = "payment_reminders",
          O = "ump_conference",
          I = "member_repurchase_coupon",
          b = {
            [m]: "showOrderPayPromptPopup",
            [n]: "showShopAd",
            [d]: "showSignPop",
            [c]: "showVisitGift",
            [g]: "showMemberGuide",
            [O]: "showMarketingPage",
            [I]: "showCustomerRebuy",
          },
          l = {
            HOME: 1,
            GOODS: 2,
            TUAN: 3,
            MICRO: 4,
            GOODS_LIST: 5,
            RETAIL_SHELF: 6,
            RETAIL_INDEX: 7,
          },
          S = { [l.HOME]: "home", [l.MICRO]: "micro" },
          _ = {
            [l.HOME]: 1,
            [l.MICRO]: 2,
            [l.GOODS_LIST]: 4,
            [l.RETAIL_SHELF]: 6,
            [l.RETAIL_INDEX]: 7,
          },
          E = {
            1: "SHOP_HOME",
            2: "ITEM_DETAIL",
            4: "MICRO",
            5: "GOODS_LIST",
            6: "RETAIL_SHELF",
            7: "RETAIL_INDEX",
          },
          M = [n, d, c, g, m, O, I];
        Object(o.b)({
          behaviors: [p.a],
          properties: {
            source: {
              type: Number,
              value: null,
              observer(e) {
                this.setPopPosition(e);
              },
            },
            featureId: Number,
            targetKdtId: Number,
          },
          data: {
            showOrderPayPromptPopup: !1,
            showShopAd: !1,
            showVisitGift: !1,
            showMarketingPage: !1,
            showSignPop: !1,
            showMemberGuide: !1,
            order: [],
            currentIndex: 0,
            pageSource: "",
            popPosition: _[l.HOME],
            showSubscribeMask: !1,
            activeUmpId: 0,
          },
          methods: {
            getAdImageInfo() {
              return this.image_url;
            },
            setPopPosition(e) {
              this.setData({ popPosition: _[e] });
            },
            handleClosePop(e) {
              var t,
                r,
                o = getApp(),
                { logger: a } = o,
                i =
                  ((t = e.detail),
                  (r = typeof t),
                  null != t && ("object" == r || "function" == r)),
                {
                  currentShow: p = !1,
                  image_url: h = "",
                  isRealClose: d = !1,
                } = i ? e.detail : { currentShow: e.detail || !1 },
                { currentIndex: c, order: g } = this.data,
                m = g[c],
                O = g[c + 1],
                I = b[m],
                l = b[O],
                S = !0;
              if (d) {
                this.image_url = h;
                var _ = Object(u.b)(
                  "shop_ad_pop",
                  Object(s.a)({}, this.getCloudLoggerInfo(m))
                );
                a &&
                  a.log({
                    et: "click",
                    ei: "Ad_Close",
                    en: "关闭弹框广告",
                    si: o.getKdtId(),
                    params: Object(s.a)({ component: "popup_ad" }, _),
                  });
              }
              this.isPageShopAdNeedsMaxNumbers &&
                d &&
                this.pageMaxNumbers &&
                -1 !== M.indexOf(m) &&
                this.currentShopAdIndex++,
                this.pageMaxNumbers &&
                  this.currentShopAdIndex === this.pageMaxNumbers &&
                  (S = !1),
                setTimeout(() => {
                  this.setData({ currentIndex: c + 1, [I]: p, [l]: S }),
                    m === n && this.triggerEvent("closePop", { type: n });
                }, 1e3);
            },
            initData(e) {
              var t = e[0],
                r = b[t],
                { source: s = "" } = this.data,
                o = E[s];
              this.setData({
                order: e,
                currentIndex: 0,
                pageSource: o,
                [r]: !0,
              });
            },
            getDefaultKeys() {
              var { source: e = "" } = this.data,
                t = Object(i.e)();
              return +e === l.GOODS && 1177 === t
                ? []
                : [l.RETAIL_INDEX, l.RETAIL_SHELF].includes(e)
                ? [n]
                : (this.triggerEvent("closePop", { type: n }),
                  e === l.GOODS_LIST
                    ? [n]
                    : e === l.MICRO
                    ? [n, m, c]
                    : e === l.HOME
                    ? [n, d, c, g, m, O, I]
                    : [m, c]);
            },
            getOrder() {
              var { source: e = "", popPosition: t } = this.data,
                r = (e) => {
                  try {
                    return JSON.parse(e);
                  } catch (e) {
                    throw new Error(
                      "pop ads ump_confrerence ext ext parse error"
                    );
                  }
                };
              if (e !== l.HOME && e !== l.MICRO) {
                var s = this.getDefaultKeys();
                this.initData(s);
              } else {
                var o = this.getDefaultKeys();
                Object(a.a)({ keys: o, popPosition: t })
                  .then((e) => {
                    var t = [];
                    e
                      .filter((e) => 1 === e.status)
                      .sort((e, t) => e.sort - t.sort)
                      .forEach((e, r) => {
                        t[r] = e.popType;
                      }),
                      e
                        .filter((e) => 1 === e.status)
                        .some(
                          (e) =>
                            !!e.ext &&
                            (this.setData({ activeUmpId: Number(r(e.ext).id) }),
                            !0)
                        ),
                      this.initData(t);
                  })
                  .catch(() => {
                    this.initData(o);
                  });
              }
            },
            toggleSubscribeMask(e) {
              this.setData({ showSubscribeMask: e.detail });
            },
          },
          attached() {
            var e = this;
            (this.currentShopAdIndex = 0),
              h.getShopConfigData().then(function (t) {
                void 0 === t && (t = {});
                var { shop_ad_numbers_for_pages: r = "{}" } = t,
                  { source: s } = e.data;
                try {
                  e.pageMaxNumbers = (JSON.parse(r) || {})[S[s]];
                } catch (e) {}
                (e.isPageShopAdNeedsMaxNumbers = !0), e.getOrder();
              });
          },
        });
      },
    }
  )
);
