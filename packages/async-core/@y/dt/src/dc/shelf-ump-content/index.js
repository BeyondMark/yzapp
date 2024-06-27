"use strict";
var r = require("~/r");
r(
  "LVQB",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      LVQB: function (t, e, o) {
        o.r(e);
        var i = o("Fcif"),
          s = o("9ZMt"),
          a = o("2Xbd"),
          h = s.default.getGlobal("logger"),
          n = s.default.getApp(),
          l = {
            props: {
              showUmp: { type: Boolean },
              umpData: { type: Object, default: () => ({}) },
              shopAnnouncementText: { type: String },
              shopName: { type: String },
              themeColor: { type: String, default: "#ee0a24" },
              themeRgbColor: { type: String, default: "#ee0a2499" },
              isTabPage: Boolean,
              currentShop: Object,
              showDetailButton: { type: Boolean, default: !1 },
              showShopCertification: { type: Boolean, default: !1 },
            },
            data: () => ({
              vouchers: [],
              frontTwoUmp: [],
              groups: [],
              showPop: !1,
              position: null,
              upperSheetAd: {},
              templates: [],
            }),
            computed: {
              themeColorStyle() {
                return (
                  "--theme-color: " +
                  this.themeColor +
                  "; --theme-rgb-color: rgba(" +
                  this.themeRgbColor +
                  ", 0.1);--theme-rgb-color-2: rgba(" +
                  this.themeRgbColor +
                  ", 0.3);--theme-rgb-color-3: rgba(" +
                  this.themeRgbColor +
                  ", 0.05)"
                );
              },
              shopNodeInfo() {
                var t;
                return (
                  (null == (t = this.currentShop) ? void 0 : t.shopNodeInfo) ||
                  {}
                );
              },
              showCoupon() {
                var { show: t, takeCouponComponentType: e = [] } = this.umpData;
                return void 0 === t ? this.showUmp : !!e.includes(1) && t;
              },
              bannerVouchers() {
                var { couponData: t = [] } = this.umpData || {};
                return t.slice(0, 2);
              },
            },
            watch: {
              umpData(t) {
                if (this.showUmp) {
                  this.init();
                  var e = (null == t ? void 0 : t.couponData) || [];
                  e.length > 0 && this.initVouchers(e);
                }
              },
            },
            created() {
              this.init();
            },
            methods: {
              init() {
                this.showUmp &&
                  Object(a.b)().then((t) => {
                    var { groups: e = [] } = t;
                    (this.frontTwoUmp = e.slice(0, 2)), (this.groups = e);
                  });
              },
              togglePop() {
                var t;
                (null == n || null == (t = n.globalData)
                  ? void 0
                  : t.shelfGoodsDetailCoupon) || this.fetchTemplateIds(),
                  (this.showPop = !this.showPop),
                  this.showPop &&
                    h &&
                    h.log({
                      et: "view",
                      ei: "view_coupons",
                      en: "优惠券曝光",
                      params: { component: "coupons_pop" },
                    });
              },
              fetchTemplateIds() {
                Promise.all([
                  Object(a.e)(5),
                  Object(a.d)("coupon_notice_scene"),
                ]).then((t) => {
                  var [e, o] = t,
                    { templateList: i = [] } = e || {},
                    { templateIdList: s = [] } = o || {};
                  this.templates = i.concat(s);
                });
              },
              onClose() {
                this.showPop = !1;
              },
              initVouchers(t) {
                Object(a.c)(null == t ? void 0 : t.map((t) => +t.id)).then(
                  (t) => {
                    this.vouchers = t;
                  }
                );
              },
              handleTakeCoupon(t, e) {
                var { templates: o } = this.data,
                  i = n.globalData.shelfGoodsDetailCoupon;
                0 === o.length || i
                  ? this.fetchCoupon(t)
                  : (h &&
                      h.log({
                        et: "click",
                        ei: "claim_coupons",
                        en: "领取优惠券",
                        params: {
                          activity_id: t,
                          component: "coupons_pop",
                          position: e,
                        },
                      }),
                    this.$emit("takeCoupon", {
                      templates: o,
                      onFail: (t) => {},
                      onSuccess: (t) => {},
                      onShowTips: () => {
                        this.$emit("subscribeGuide", !0);
                      },
                      onComplete: () => {
                        (n.globalData.shelfGoodsDetailCoupon = !0),
                          this.$emit("subscribeGuide", !1),
                          this.fetchCoupon(t);
                      },
                      onSelfLog: {
                        subscribePos: "点单页/首页优惠券",
                        subscribeSource: "24h_shelf",
                      },
                    }));
              },
              fetchCoupon(t) {
                Object(a.a)(t)
                  .then(
                    () => (
                      s.default.$native.showToast({
                        title: "领取成功",
                        icon: "success",
                      }),
                      this.$emit("takeCouponSuccess", t),
                      Object(a.c)([t])
                    )
                  )
                  .then((e) => {
                    this.vouchers = this.vouchers.map((o) =>
                      o.activityId === t
                        ? Object(i.a)({}, o, null == e ? void 0 : e[0])
                        : o
                    );
                  })
                  .catch((t) => {
                    s.default.$native.showToast({
                      title: "领取失败",
                      icon: "fail",
                    });
                  });
              },
              handleGoToActivityDetail(t) {
                this.$emit("goToActivityDetail", t);
              },
              handleGoToShopCertification() {
                this.$emit("goToShopCertification");
              },
            },
            ud: !0,
          };
        e.default = s.default.component(l);
      },
    }
  )
);
