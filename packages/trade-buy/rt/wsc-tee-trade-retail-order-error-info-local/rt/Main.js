"use strict";
var r = require("~/r");
r(
  "PsGH",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      PsGH: function (e, r, t) {
        t.r(r);
        var o = t("Fcif"),
          s = t("DXKY"),
          i = t("YeA1"),
          h = t("nUon"),
          a = t("9ZMt"),
          d = t("2bgu"),
          c = {
            data: () => ({
              showOutOfDeliveryPop: !1,
              showNotEnoughPricePop: !1,
              supportSwitchExpressWay: !1,
              showSwitchShopConfirmPop: !1,
              showExpressTabTrigger: !1,
              showNeedRequiredPop: !1,
              switchDeliveryTabTrigger: !1,
              showSwitchBtn: !1,
              retailOrderErrorInfo: {},
              themeColors: {},
              currentExpressType: null,
            }),
            computed: {
              generalStyle() {
                var { general: e = "" } = this.themeColors;
                return "color: " + e;
              },
            },
            created() {
              Object(i.b)(this, ["themeColors", "bookKey"]),
                Object(i.b)(this, {
                  retailOrderErrorInfo: (e) => {
                    var {
                      showOutOfDeliveryPop: r,
                      showNotEnoughPricePop: t,
                      canSelfFetch: o,
                      showExpressTab: s,
                      isSupportExpress: i,
                      showNeedRequiredPop: h,
                      currentExpressType: a,
                    } = e;
                    (this.showOutOfDeliveryPop = r),
                      (this.showNotEnoughPricePop = t),
                      (this.supportSwitchExpressWay = o || (s && i)),
                      (this.showNeedRequiredPop = h),
                      (this.currentExpressType = a),
                      r && this.checkSwitchShop();
                  },
                }),
                Object(i.d)(this, {
                  toggleRequiredPopup: (e) => {
                    this.showNeedRequiredPop = e;
                  },
                });
            },
            mounted() {
              (this.query = this.$getPageQuery()),
                (this.route = this.$getPageRoute()),
                this.checkSwitchShopConfirmPop(),
                s.a.on("select-out-of-delivery-shop", (e) => {
                  this.onClose(),
                    setTimeout(() => {
                      a.default.navigate({
                        url: e.redirectUrl,
                        type: "reLaunch",
                      });
                    }, 0);
                });
            },
            destroyed() {
              this.retailOrderErrorInfoUnWatch &&
                this.retailOrderErrorInfoUnWatch(),
                s.a.off("select-out-of-delivery-shop");
            },
            methods: {
              checkSwitchShop() {
                var {
                  currentAddress: { lat: e, lon: r },
                  orderKdtId: t,
                } = this.retailOrderErrorInfo;
                Object(h.a)({ buyerLat: e, buyerLng: r, kdtId: t }).then(
                  (e) => {
                    this.showSwitchBtn = e;
                  }
                );
              },
              checkSwitchShopConfirmPop() {
                var { from_source: e } = this.query;
                this.showSwitchShopConfirmPop = "retailOrderShopSelect" === e;
              },
              closeConfirmPop() {
                this.showSwitchShopConfirmPop = !1;
              },
              onClose() {
                this.ctx.data.retailOrderErrorInfo = Object(o.a)(
                  {},
                  this.retailOrderErrorInfo,
                  {
                    showNotEnoughPricePop: !1,
                    showOutOfDeliveryPop: !1,
                    showNeedRequiredPop: !1,
                  }
                );
              },
              switchExpressWay() {
                this.onClose();
                var {
                  showExpressTab: e,
                  canSelfFetch: r,
                  currentExpressType: t,
                  isSupportExpress: o,
                } = this.retailOrderErrorInfo;
                e && o && 0 != +t
                  ? s.a.trigger("onSelectExpressWay", 1)
                  : r && this.ctx.process.invoke("switchDeliveryTab", 1);
              },
              onAddressTap() {
                this.onClose(),
                  this.ctx.event.emit("onDeliveryAddressCardClick");
              },
              onSelectShop() {
                var e,
                  {
                    goods: r,
                    currentAddress: t,
                    orderKdtId: s,
                  } = this.retailOrderErrorInfo,
                  i = this.query.bookKey || this.query.book_key || this.bookKey,
                  { list: h = [], unavailable: a = [] } = r,
                  c = {
                    goodsInfo: Object(o.a)({}, r, { list: h.concat(a) }),
                    bookKey: i,
                    address: t,
                    orderKdtId: s,
                    query: this.query,
                    route: this.route,
                  };
                (e = getApp().db.set(c)),
                  this.ctx.logger.log({
                    et: "click",
                    ei: "outOfDeliveryBtnClick",
                    en: "超出配送范围切换店铺按钮点击",
                    pt: "trade",
                    params: {},
                  }),
                  Object(d.b)({
                    url:
                      "/packages/shop-select/chain-store/retail-order-shop-select/index?dbid=" +
                      e,
                    web: {
                      type: "jumpLink",
                      jumpLink: {
                        url:
                          "/wsctrade/order/chainstore-switch-shop?bookKey=" +
                          i +
                          "&addressId=" +
                          t.id +
                          "&orderKdtId=" +
                          s,
                      },
                    },
                  });
              },
              navigateBack() {
                this.onClose(),
                  this.ctx.logger.log({
                    et: "click",
                    ei: "notEnoughPriceBtnClick",
                    en: "未满启动价返回凑单按钮点击",
                    pt: "trade",
                    params: {},
                  }),
                  wx.navigateBack({
                    fail: () => {
                      a.default.navigate({
                        url: "/pages/home/dashboard/index",
                        type: "reLaunch",
                      });
                    },
                  });
              },
              handleBackAddRequired() {
                this.onClose();
                var { currentAddress: e, currentExpressType: r } =
                    this.retailOrderErrorInfo,
                  { lat: t, lon: o } = e;
                t && o && 2 === r
                  ? (a.default.setGlobal("requiredGoods:deliveryAddress", {
                      lat: t,
                      lon: o,
                    }),
                    a.default.navigateBack())
                  : 1 === r &&
                    (a.default.setGlobal("requiredGoods:selfFetch", !0),
                    a.default.navigateBack());
              },
            },
            ud: !0,
          };
        r.default = a.default.component(c);
      },
    }
  )
);
