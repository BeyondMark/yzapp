"use strict";
var r = require("~/r");
r(
  "UazH",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      UazH: function (e, t, a) {
        a.r(t);
        var i = a("Fcif"),
          o = a("eijD"),
          s = a("9ZMt"),
          h = a("GFyo"),
          n = a("taYb"),
          r = a("a1Mm"),
          p = a("2wjL"),
          c = a("SVbq"),
          d = a("wNgt"),
          u = a("R7Zb"),
          g = a("GjRw"),
          l = a("zHs4"),
          m = s.default.getApp(),
          b = {
            mixins: [Object(u.a)({ optDesc: l.a })],
            props: {
              themeColors: { type: Object, default: () => ({}) },
              kdtId: Number,
              extraData: { type: Object, default: () => ({}) },
            },
            data: () => ({
              vanSwiperKey: "shelf-banner",
              shopName: "",
              logo: "",
              notice: "",
              showNotice: !1,
              showUmp: !1,
              autoHeight: !1,
              couponData: [],
              hasUmpData: !1,
              umpData: {},
              shopAddress: "",
              isSingleShop: !1,
              currentKdtId: 0,
              alignCenter: !1,
              isShowNotice: !1,
              cardType: 2,
              swiperHeight: "160px",
              borderRadiusType: 2,
              showSubscribeGuide: !1,
              userLocation: null,
              showOnlineShopSwitch: !1,
            }),
            computed: {
              themeRgbColor() {
                return Object(d.c)(this.themeColors.general);
              },
            },
            watch: {
              opt(e) {
                e && (this.setUmpData(), this.initCommonData());
              },
              kdtId(e) {
                e > 0 &&
                  e !== this._kdtId &&
                  (this.initShopBannerData(), this.getPersonalizedConfigs());
              },
            },
            created() {
              this.setUmpData(),
                this.initCommonData(),
                this.initShopBannerData(),
                this.getPersonalizedConfigs();
            },
            methods: {
              getPersonalizedConfigs() {
                var e = this;
                Object(g.a)()
                  .then(
                    (function () {
                      var t = Object(o.a)(function* (t) {
                        var {
                          configs: { retail_online_shop_visit_model: a = 1 },
                          showOnlineShopSwitch: i,
                        } = t;
                        if (
                          ((e.showOnlineShopSwitch = i),
                          (e.enterShopMode = +a),
                          [3, 4].includes(+e.enterShopMode))
                        ) {
                          var o = m.storage.get("select-shop-info") || {};
                          null != o && o.poi
                            ? (e.userLocation = o.poi)
                            : Object(d.a)()
                                .then((t) => {
                                  var { address: a } = t;
                                  e.userLocation = a;
                                })
                                .catch((e) => {});
                        }
                      });
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })()
                  )
                  .catch((e) => {});
              },
              initCommonData() {
                var {
                  alignType: e,
                  heightType: t,
                  isShowNotice: a,
                  isShowUmp: i,
                  cardType: o = 2,
                  bannerImages: s = [],
                  borderRadiusType: h,
                } = this.opt;
                (this.alignCenter = 1 === e),
                  (this.autoHeight = 1 === t),
                  (this.showNotice = 0 === a),
                  (this.showUmp = 0 === i),
                  (this.cardType = o),
                  (this.swiperHeight = s.length
                    ? this.getImageHeight(s[0])
                    : "160px"),
                  s.length &&
                    this.opt.bannerImages.forEach((e) => {
                      e.image_url = Object(r.a)(e.image_url, "!750x0.jpg");
                    }),
                  (this.borderRadiusType = h || 2);
              },
              initShopBannerData() {
                m.getShopInfo().then((e) => {
                  (this.shopName = e.shop_name),
                    (this.logo = Object(r.a)(e.logo, "!120x0.jpg")),
                    (this.isSingleShop = 0 === e.shopMetaInfo.shop_role),
                    (this.currentKdtId = e.kdtId),
                    Object(g.b)().then((e) => {
                      var { address: t } = e;
                      this.shopAddress = t;
                    });
                });
              },
              handleChangeShop() {
                if (
                  this.showOnlineShopSwitch &&
                  "function" == typeof getCurrentPages
                ) {
                  var e = getCurrentPages(),
                    t = e[e.length - 1],
                    { route: a, options: i } = t;
                  Object(c.o)({
                    redirectUrl: encodeURIComponent(p.a.add("/" + a, i)),
                  });
                }
              },
              handleNavigation(e) {
                this.$emit("jumpToLink", n.a.toCamelCase(e), this.extraData);
              },
              getUmpData(e) {
                var {
                    type: t,
                    hideEmptyCoupon: a,
                    activities: i,
                    addType: o,
                    autoType: s,
                    autoValue: h,
                  } = e,
                  n = [];
                return void 0 === o
                  ? Promise.resolve([])
                  : (0 === o &&
                      (n = i.map((e) => {
                        var { id: t } = e;
                        return t;
                      })),
                    Object(g.c)(t, n, 1 === s ? +h : 10, 0 !== o, a));
              },
              setUmpData() {
                var { shopName: e, showNotice: t, opt: a } = this;
                Object(h.g)("RETAIL_SHELF_UMP_DATA", {}),
                  this.getUmpData(Object(i.a)({ type: "coupon" }, a.umpCoupon))
                    .then((o) => {
                      var s = { hasUmpData: o.length > 0, couponData: o };
                      (this.umpData = s),
                        Object(h.g)(
                          "RETAIL_SHELF_UMP_DATA",
                          Object(i.a)({}, s, {
                            shopName: e,
                            notice: t && a.notice,
                          })
                        );
                    })
                    .catch((e) => {});
              },
              getImageHeight: (e) =>
                ((375 / e.image_width) * e.image_height).toFixed(2) + "px",
              handleShowSubscribeGuide(e) {
                this.showSubscribeGuide = e;
              },
              handleCouponTake(e) {
                this.$emit("handleCouponTake", e);
              },
            },
            ud: !0,
          };
        t.default = s.default.component(b);
      },
    }
  )
);
