"use strict";
(exports.ids = [20]),
  (exports.modules = {
    "0oZp": function (t, e, o) {},
    "2Z9d": function (t, e, o) {
      o.d(e, "a", function () {
        return d;
      }),
        o.d(e, "f", function () {
          return n;
        }),
        o.d(e, "g", function () {
          return c;
        }),
        o.d(e, "h", function () {
          return u;
        }),
        o.d(e, "d", function () {
          return l;
        }),
        o.d(e, "c", function () {
          return h;
        }),
        o.d(e, "e", function () {
          return p;
        }),
        o.d(e, "b", function () {
          return g;
        });
      var a = o("taYb"),
        s = o("MLLI"),
        i = o("NHEX"),
        r = o.n(i);
      function d(t) {
        void 0 === t && (t = []);
        var e = [];
        return (
          a.a.toCamelCase(t).forEach((t) => {
            r()(t, "propValueList", []).forEach((t) => {
              e.push(t.propValueId);
            });
          }),
          e
        );
      }
      function n(t) {
        return (
          void 0 === t && (t = []),
          a.a
            .toCamelCase(t)
            .map((t) => ({
              propId: t.kId,
              propName: t.k,
              propValueList: (t.v || []).map((t) => ({
                propValueId: t.id,
                propValueName: t.name,
              })),
            }))
        );
      }
      function c(t) {
        var e;
        return (
          void 0 === t && (t = []),
          (null == (e = t)
            ? void 0
            : e
                .map((t) => (null == t ? void 0 : t.propValueList))
                .flat()
                .map((t) => (null == t ? void 0 : t.propValueId))
                .filter(Boolean)) || []
        );
      }
      function u(t, e) {
        return (t || []).findIndex((t) =>
          e.cartId && t.cartId
            ? e.cartId === t.cartId
            : ((t.activityId = t.activityId || 0),
              t.goodsId === e.goodsId &&
                t.skuId === e.skuId &&
                t.canyinId === e.canyinId &&
                t.activityId === e.activityId)
        );
      }
      var l = (t) =>
          Object.keys(t)
            .filter((t) => /^s\d$/.test(t))
            .reduce((e, o) => (+t[o] && e.push({ kS: o, vId: t[o] }), e), []),
        h = (t, e) => {
          var o = (function (t) {
            void 0 === t && (t = []);
            var e = {};
            return (
              t.forEach((t) => {
                e[t.kS] = t.v;
              }),
              e
            );
          })(t);
          return Object.keys(e)
            .filter((t) => /^s\d$/.test(t))
            .reduce((t, a) => {
              var s = o[a],
                i = e[a];
              if (+i) {
                var r = s.filter((t) => +t.id == +i)[0];
                r && t.push(r);
              }
              return t;
            }, []);
        };
      function p(t) {
        var e,
          o,
          { platform: a } = Object(s.b)();
        return (
          "ios" === a &&
          31 === t.goodsType &&
          "1" ===
            (null == (e = t.bizExtension) || null == (o = e.cartBizMark)
              ? void 0
              : o.isOnlineCourse)
        );
      }
      function g(t, e) {
        var o;
        void 0 === t && (t = []), void 0 === e && (e = []);
        var a = 0;
        return (
          (null == (o = t) ? void 0 : o.map((t) => t.v).flat()).forEach((t) => {
            e.includes(null == t ? void 0 : t.id) && (a += t.price);
          }),
          parseInt(Math.round(a), 10) || 0
        );
      }
    },
    "5Nqz": function (t, e) {
      t.exports = {
        d: "canUseCouponAddOn;0;kdtId;4;offlineId;4;shopCart;4;themeCSS;4;themeColors;4;themeStyle;4;checkedGoodsList;4;selectedPromotions;4",
        e: "updateCartGoodsList",
        el: "updatingCart",
        w: "CouponAddonBar",
        wc: "UserAuthorize;ThemeIcon",
        wd: "CouponAddonBar",
        lc: "hexToRgb;getUserInfo",
        pi: "updateSelectGoods;navigateFromCart",
      };
    },
    "B+5+": function (t, e, o) {
      function a(t) {
        return (t = "00" + t).slice(-2);
      }
      function s(t) {
        var e = new Date(1e3 * t);
        return (
          e.getFullYear() + "." + a(e.getMonth() + 1) + "." + a(e.getDate())
        );
      }
      o.d(e, "b", function () {
        return s;
      }),
        o.d(e, "a", function () {
          return i;
        });
      var i = { 10: "抖音券", 11: "美团券" };
    },
    HtVK: function (t, e) {
      t.exports = {
        d: "couponList;2;kdtId;4;hasValidGoods;4;themeCSS;4;themeColors;4;themeStyle;4;couponList;4;checkedGoodsList;4;dataLoaded;4",
        e: "showCouponList;closeCouponList",
        el: "showCouponList;closeCouponList",
        w: "CouponBar;CouponListPopup",
        wc: "CouponBar;CouponListPopup;UserAuthorize;ThemeIcon",
        wd: "CouponBarBlock",
        lc: "hexToRgb",
      };
    },
    "O/RN": function (t, e) {
      t.exports = {
        d: "themeColors;4",
        w: "PresentGoods;Price;InvalidMask;CouponItem",
        wc: "Price;InvalidMask",
      };
    },
    P09H: function (t, e, o) {
      o.d(e, "a", function () {
        return d;
      }),
        o.d(e, "b", function () {
          return n;
        });
      var a = o("US/N"),
        s = o("tmLU"),
        i = o("Sipi");
      function r(t) {
        var { kdtId: e, storeId: o, selectedPromotions: s } = t;
        return Object(a.default)({
          path: "/wsctrade/cart/getCouponAddOnInfo.json",
          method: "GET",
          data: { store_id: o, selectedPromotions: s },
          withCredentials: !0,
        })
          .then((t) => t)
          .catch((t) => {});
      }
      function d(t) {
        var e = Object(i.b)("trade-cart-addon-prefetchkey");
        return e
          ? (Object(i.c)("trade-cart-addon-prefetchkey"),
            Object(s.b)({ prefetchKey: e, normalFetchCb: () => r(t) }))
          : r(t);
      }
      function n(t) {
        return Object(a.default)({
          path: "/wscump/coupon/cart/send-coupon.json",
          method: "GET",
          data: t,
        });
      }
    },
    "T9F/": function (t, e, o) {
      e.a = function (t) {
        var { buyerId: e, Logger: o } = t,
          a = (t) => {
            o.log({
              et: "view",
              ei: "recommended_goods_view",
              en: "推荐商品曝光",
              params: {
                buyer_id: e,
                goods_id: t,
                component: "cart_coupons_component",
              },
            });
          },
          s = {};
        return {
          destroy() {
            (a = null), (s = null);
          },
          logGatherBarExpo() {
            o.log({
              et: "view",
              ei: "gather_bar_view",
              en: "凑单条曝光",
              pt: "cart",
              params: { buyer_id: e },
            });
          },
          logGatherBarClick(t) {
            o.log({
              et: "click",
              ei: "gather_click",
              en: "凑单按钮点击",
              pt: "cart",
              params: { buyer_id: e, ooperation_name: t },
            });
          },
          logCouponGetClick(t) {
            var { couponId: a, activityId: s } = t;
            o.log({
              et: "click",
              ei: "coupon_redemption_click",
              en: "立即领取点击",
              params: {
                buyer_id: e,
                coupon_id: a,
                activity_id: s,
                source: "cart",
                component: "cart_coupons_component",
              },
            });
          },
          logGatherPopupExpo() {
            o.log({
              et: "view",
              ei: "cart_coupons_component_view",
              en: "购物车优惠券凑单面板曝光",
              params: { buyer_id: e, component: "cart_coupons_component" },
            });
          },
          logCouponGetExpo(t) {
            o.log({
              et: "view",
              ei: "coupon_redemption_view",
              en: "立即领取曝光",
              params: {
                buyer_id: e,
                component: "cart_coupons_component",
                activity_id: t,
              },
            });
          },
          logGoAddonBtnExpo(t) {
            o.log({
              et: "view",
              ei: "gather_view",
              en: "去凑单按钮曝光",
              params: {
                activity_id: t,
                buyer_id: e,
                component: "cart_coupons_component",
              },
            });
          },
          logGoAddonBtnClick(t) {
            o.log({
              et: "click",
              ei: "gather_click",
              en: "去凑单按钮点击",
              params: {
                activity_id: t,
                buyer_id: e,
                component: "cart_coupons_component",
              },
            });
          },
          logGoodsExpo: a,
          batchLogGoodsExpo(t) {
            void 0 === t && (t = []),
              null == t.forEach ||
                t.forEach((t) => {
                  var { allAbleCartGoods: e = [] } = t;
                  null == e.forEach ||
                    e.forEach((t) => {
                      var { goodsId: e, skuId: o } = t,
                        i = e + "_" + o;
                      s[i] || ((s[i] = 1), a(e));
                    });
                }),
              (s = {});
          },
          logGoodsClick(t) {
            var { goodsId: a, activityId: s, type: i } = t;
            o.log({
              et: "click",
              ei: "recommended_goods_click",
              en: "推荐商品点击",
              params: {
                activity_id: s,
                buyer_id: e,
                goods_id: a,
                component: "cart_coupons_component",
                type: i,
              },
            });
          },
          logGoodsDecreasedToastExpo() {
            o.log({
              et: "view",
              ei: "toast_view",
              en: "互斥toast提示曝光",
              params: { buyer_id: e, component: "cart_coupons_component" },
            });
          },
        };
      };
    },
    TvEF: function (t, e) {
      t.exports = {
        d: "themeTag;4",
        e: "exchangeGoodsSku:afterSubmit",
        el: "exchangeGoodsSku:submit;exchangeGoodsSku:hide",
        w: "GoodsGroupUmp;GoodsItemUmp;ExchangeModel;ExchangeList;UmpInfoPopup",
        wc: "ExchangeList;Price",
        p: "",
        pi: "navigateFromCart;setSkuInfo",
      };
    },
    XlGN: function (t, e) {
      t.exports = {
        d: "displayData;4;orderData;4;themeColors;4;kdtId;4",
        el: "open;close",
        w: "OrderKeep",
        wd: "OrderKeep",
        pi: "navigateToTradeBuy",
      };
    },
    YfL4: function (t, e) {
      t.exports = {
        d: "",
        e: "",
        el: "",
        w: "",
        wc: "MainContent",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    b7sl: function (t, e) {
      t.exports = {
        d: "checkedGoodsList;2;isCheckedAll;2;presentData;2;presentPopupInfo;2;isValidGoodsLoadFinish;0;editMode;4;shopCart;6;shopList;6;themeCSS;4;themeColors;4;themeStyle;4;themeTag;4;canSelectPresent;4;hasResponseValidGoods;4;offlineId;4",
        e: "changePresentSku;updateCartGoodsList;cartGoodsSku:afterSubmit;cartPresentSku:afterSubmit;cartPresentSku:fetch",
        el: "toggleCheckedAll;deleteCartItems;presentPopupClose;presentPopupConfirm;cartGoodsListDidUpdate;onPullDownRefresh;stopPullDownRefresh;cartGoodsSku:hide;cartGoodsSku:submit;cartPresentSku:submit;cartPresentSku:selected",
        w: "Present;GoodsGroupItem;GoodsItem;Goods;ComboDetailPopup",
        wc: "PresentGoods;Present;GoodsGroupUmp;GoodsItemUmp;UmpInfoPopup;CustomGoodsListHeader;CustomGoodsItem;GoodsGroupItem;GoodsItem;ComboDetailPopup;Goods;Price",
        wd: "ValidGoods",
        lc: "hexToRgb",
        p: "updateSelectGoods;emptyCart;deleteCartGoods;batchDeleteCartGoods;selectCartGoods;cancelSelectCartGoods;setCartGoodsNum;reselectGoods;showCartActivityPopup;showExchangeModal;changeGoodsSku",
        pi: "navigateFromCart;emptyCart;beforeCartClearHook;setSkuInfo",
        li: "onPageShow",
      };
    },
    "eXT+": function (t, e, o) {
      o.d(e, "a", function () {
        return s;
      });
      var a = o("mztD"),
        s = {
          HAITAO: Object(a.a)(
            "public_files/2019/08/19/fbd4c38994578e951ef1cdfd9104606d.png"
          ),
          PERIOD_BUY: Object(a.a)(
            "public_files/2019/08/19/aea27fff45f6edb02bfd31c0b7ff3f04.png"
          ),
          MEMBER_DISCOUNT: Object(a.a)(
            "cdn/FkhVnpHh7ZwFAvBaUwO8B0F2Gf4V-1.png"
          ),
        };
    },
    enn8: function (t, e, o) {
      o.d(e, "a", function () {
        return s;
      });
      var a = o("W1Ke");
      function s(t) {
        return [
          (function (t) {
            var e = [];
            try {
              e = JSON.parse(t || "[]") || [];
            } catch (t) {}
            return e.map((t) => t.v).join("，");
          })(t.sku),
          Object(a.a)(t.properties),
        ]
          .filter((t) => !!t)
          .join("，");
      }
    },
    gaeN: function (t, e, o) {
      o.d(e, "a", function () {
        return s;
      }),
        o.d(e, "b", function () {
          return i;
        });
      o("Fcif"), o("9DIb");
      var a = o("MLLI");
      o("NHEX"), o("5Xe+"), o("w4n3");
      function s(t) {
        var e,
          o,
          { platform: s } = Object(a.b)();
        return (
          "ios" === s &&
          31 === t.goodsType &&
          "1" ===
            (null == (e = t.bizExtension) || null == (o = e.cartBizMark)
              ? void 0
              : o.isOnlineCourse)
        );
      }
      function i(t, e) {
        if ((void 0 === e && (e = !1), e)) return !0;
        if (t.startSaleNum && t.num < t.startSaleNum) return !1;
        if (s(t)) return !1;
        if (t.revive) return !1;
        var o = new Date().getTime() / 1e3;
        return !(t.startSoldTime && t.startSoldTime > o);
      }
    },
    j61A: function (t, e) {
      t.exports = {
        d: "editMode;2;shopTitle;4;shopList;6;showEmptyCart;4;shopMetaInfo;4",
        wd: "ShopHeader",
        pi: "navigateFromCart;updateCartList",
      };
    },
    ntU4: function (t, e) {
      t.exports = {
        d: "unavailableItems;4;hasValidGoods;4;isControlRecommendShow;4;isValidGoodsLoadFinish;4",
        e: "updateCartGoodsList",
        w: "InvalidGoods;InvalidMask;Goods;GoodsBlock",
        wc: "InvalidGoods;InvalidMask;Goods;GoodsBlock",
        wd: "InvalidGoodsBlock",
        p: "clearInvalidGoods",
        pi: "navigateFromCart;beforeCartClear;beforeCartClearHook;clearInvalidGoods",
      };
    },
    "oJt/": function (t, e) {
      t.exports = {
        d: "cartBottomData;0;editMode;4;isDrugShop;4;kdtId;4;isCheckedAll;4;checkedGoodsList;4;presentData;4;themeCSS;4;themeStyle;4;bookKey;6;showEmptyCart;4;submitData;4;isTabPage;4;dataLoaded;4;shopCart;4;isHasSelfFetchGoodsSelected;4;navHeight;4;selectedPromotions;4",
        e: "toggleCheckedAll;deleteCartItems;updateCartGoodsListWithActivity;reward:show",
        wd: "Submit",
        lc: "setDb",
        p: "createAndGoOrder;changeSubmitText;changeDiscountDetailVisible",
        pi: "navigateToTradeBuy;navigateFromCart;createAndGoOrder;changeSubmitText",
      };
    },
    pHGa: function (t, e) {
      t.exports = {
        d: "kdtId;2;shopMetaInfo;2;isDrugShop;2;channelId;0;shopCart;2;shopList;2;unavailableItems;2;shopTitle;2;emptyCartPath;0;showEmptyCart;0;hasValidGoods;0;showShoppingCircle;0;title;2;pageSize;2;requestExtraParams;2;bizName;2;bookKey;2;displayData;2;orderData;2;canSelectPresent;2;dataLoaded;0;isAuthProtocol;0;submitData;0;isControlRecommendShow;0;hasResponseValidGoods;0;isTabPage;2;themeStyle;2;isHasSelfFetchGoodsSelected;2;recommendPromotionInfoList;2;selectedPromotions;2;isMultiStore;4;offlineId;4;openHideStore;4;themeColors;4;themeCSS;4;pageStyleConfig;4",
        e: "ORDER_KEEP:open;cartGoodsListDidUpdate;updatingCart;onPullDownRefresh;stopPullDownRefresh;cartGoodsSku:hide",
        el: "updateCartGoodsList;updateCartGoodsListWithActivity",
        wd: "Skeleton",
        lc: "getUserInfo",
        p: "authProtocol;navigateFromCart;setGroupId;updateCartList;beforeCartClearHook",
        pi: "emptyCart;clearInvalidGoods;invoke-protocol;deleteCartGoods;batchDeleteCartGoods;selectCartGoods;cancelSelectCartGoods;setCartGoodsNum;reselectGoods;setGroupId;updateCartList;changeGoodsSku;showCartActivityPopup;showExchangeModal",
        li: "onPullDownRefresh;onPageShow;pageDestroyed",
      };
    },
    pduN: function (t, e) {
      t.exports = {
        d: "emptyCartPath;4;showEmptyCart;4;themeColors;4;themeStyle;4;isAuthProtocol;4;shopMetaInfo;4;shopConfigs;4",
        w: "EmptyTip",
        wc: "EmptyTip",
        wd: "CartEmptyBlock",
        lc: "hexToRgb",
        pi: "authProtocol;navigateFromCart",
      };
    },
    qf5B: function (t, e, o) {
      o.d(e, "b", function () {
        return a;
      }),
        o.d(e, "c", function () {
          return s;
        }),
        o.d(e, "a", function () {
          return i;
        });
      var a = {
          COURSE_MIX_TYPE: "courseMixType",
          MIX_TYPE: "mixType",
          LOGISTICS: "logistics",
        },
        s = {
          [a.COURSE_MIX_TYPE]: "普通商品与课程暂不支持同时结算，请分开结算",
          [a.MIX_TYPE]: "以下商品暂不支持同时结算，请分开下单",
          [a.LOGISTICS]: "不同配送方式的商品暂不支持同时结算，请分开下单",
        },
        i = { EDIT: "edit", SUBMIT: "submit" };
    },
    sAuq: function (t, e, o) {
      o.d(e, "a", function () {
        return r;
      }),
        o.d(e, "b", function () {
          return d;
        });
      var a = o("Fcif"),
        s = o("US/N"),
        i = (t) => Object(s.default)(Object(a.a)({}, t, { config: {} }));
      function r(t) {
        return i({
          path: "/wscump/coupon/cart/get-avl-coupon.json",
          method: "GET",
          data: t,
        });
      }
      function d(t) {
        return i({
          path: "/wscump/coupon/cart/send-coupon.json",
          method: "GET",
          data: t,
        });
      }
    },
    sxu2: function (t, e) {
      t.exports = {
        d: "",
        e: "",
        el: "",
        l: "getTradeBuyPageData;getTradeBuyPreFetchQuery",
        lc: "",
        p: "navigateToTradeBuy",
        pi: "",
        c: "",
        cc: "",
      };
    },
    "t/Ap": function (t, e, o) {
      var a = o("US/N"),
        s = "/wsctrade/cart/deleteGoods.json",
        i = "/wsctrade/cart/deleteBatchList.json",
        r = "/wsctrade/cart/getMultiRecommendGoods.json";
      function d(t, e, o) {
        void 0 === o && (o = "POST");
        return Object(a.requestV2)({ path: t, data: e, method: o, config: {} });
      }
      function n(t) {
        var {
            kdtId: e,
            goodsId: o,
            skuId: a,
            storeId: s,
            channelId: i,
            activityId: r,
            cartId: d = null,
            activityAlias: n = "",
          } = t,
          c = {
            cartId: d,
            kdtId: e,
            goodsId: o,
            skuId: a,
            activityId: r,
            activityAlias: n,
          };
        return s > 0 && (c.storeId = s), i > 0 && (c.channelId = i), c;
      }
      e.a = {
        deleteCartItem: function (t) {
          return d(s, n(t));
        },
        deleteCartBatch: function (t) {
          var e = t.map((t) => n(t));
          return d(i, { ids: e });
        },
        getMultiRecommendGoods: function (t) {
          return d(r, { goodsIds: t });
        },
      };
    },
    xQ8D: function (t, e) {
      t.exports = {
        d: "showShoppingCircle;4;isAuthProtocol;4",
        wd: "ShoppingCircle",
      };
    },
    zIH3: function (t, e, o) {
      o.d(e, "b", function () {
        return c;
      }),
        o.d(e, "a", function () {
          return n;
        }),
        o.d(e, "d", function () {
          return d;
        }),
        o.d(e, "c", function () {
          return r;
        });
      var a = o("Fcif"),
        s = o("US/N"),
        i = (t) => Object(s.requestV2)(Object(a.a)({}, t, { config: {} })),
        r = (t) =>
          i({ data: t, path: "/wsctrade/cart/find-exchange-goods.json" }),
        d = (t) => i({ data: t, path: "/wsctrade/fetch-sku.json" }),
        n = (t) =>
          i({
            path: "/wsctrade/cart/batchAddGoods.json",
            method: "POST",
            data: { items: t },
          }),
        c = (t) =>
          i({
            path: "/wsctrade/cart/deleteBatchList.json",
            method: "POST",
            data: { ids: t },
          });
    },
    zgja: function (t, e, o) {
      var a = o("Fcif"),
        s = o("esrA"),
        i = "@wsc-tee-statcenter/recommend-goods",
        r = "@wsc-tee-trade/cart-shopping-circle",
        d = "@wsc-tee-trade/trade-buy-pre-fetch",
        n = "@wsc-tee-trade/cart-coupon-addon-bar",
        c = "@ext-tee-wsc-goods/combine-goods-block",
        u = "@wsc-tee-trade/cart-block-container",
        l = "@wsc-tee-trade/trade-buy-reward-popup",
        h = "@ext-tee-wsc-goods/base-common-sku",
        p = Object(s.a)({
          a: {
            p: [
              {
                r: ["/packages/trade-cart/cart/index"],
                c: [
                  {
                    t: "c",
                    c: [
                      { t: "m", c: ["b4-4"] },
                      { t: "m", c: ["b4-15", "b4-11"] },
                      { t: "m", c: ["b4-7"] },
                      { t: "m", c: ["b4-8"] },
                      { t: "m", c: ["b4-9"] },
                      { t: "m", c: ["b4-5"] },
                      { t: "m", c: ["b4-1"] },
                    ],
                  },
                  {
                    t: "c",
                    c: [
                      {
                        t: "m",
                        c: [
                          "@ext-tee-wsc-decorate/theme-color~EKBphALO",
                          "b4-10",
                          "b4-12",
                          "b4-21",
                          "b4-13",
                          "b4-0",
                          "b4-20",
                          "b4-22",
                        ],
                      },
                    ],
                  },
                ],
                m: [
                  "b4-2",
                  "b4-3",
                  "b4-6",
                  "b4-14",
                  "b4-16",
                  "b4-17",
                  "b4-18",
                  "b4-19",
                ],
              },
            ],
          },
          m: [
            [
              "b4-0",
              "@ext-tee-wsc-decorate/page-style",
              null,
              { stage: "pre" },
            ],
            [
              "b4-1",
              i,
              {
                d: { enableShow: ["b4-7", "isValidGoodsLoadFinish"] },
                w: { RecommendGoodsTitle: "b4-1" },
              },
              { stage: "post" },
            ],
            [
              "b4-2",
              "@wsc-tee-trade/cart-ump",
              {
                e: {
                  "exchangeGoodsSku:submit": [["b4-22", "sku:submit"]],
                  "exchangeGoodsSku:hide": [["b4-22", "sku:hide"]],
                },
                p: { setSkuInfo: [["b4-22"]] },
              },
              { stage: "pre" },
            ],
            [
              "b4-3",
              "@wsc-tee-trade/cart-page-setup",
              { e: { updateCartGoodsListWithActivity: [["b4-9"], ["b4-21"]] } },
              { stage: "pre", asyncInit: !0 },
            ],
            ["b4-4", "@wsc-tee-trade/cart-shop-header", null, { stage: "pre" }],
            [
              "b4-5",
              "@wsc-tee-trade/cart-empty-tip",
              { w: { EmptyTip: "b4-5" } },
              { stage: "post" },
            ],
            ["b4-6", r, null, { stage: "post" }],
            [
              "b4-7",
              "@wsc-tee-trade/cart-valid-goods",
              {
                e: {
                  presentPopupClose: [["b4-12"]],
                  presentPopupConfirm: [["b4-12"]],
                  "cartGoodsSku:hide": [["b4-22", "sku:hide"]],
                  "cartGoodsSku:submit": [["b4-22", "sku:submit"]],
                  "cartPresentSku:submit": [["b4-22", "sku:custom"]],
                  "cartPresentSku:selected": [["b4-22", "sku:selected"]],
                },
                w: {
                  Present: "b4-7",
                  GoodsGroupUmp: "b4-2",
                  GoodsGroupItem: "b4-7",
                  GoodsItem: "b4-7",
                  Goods: "b4-7",
                },
                p: { setSkuInfo: [["b4-22"]] },
              },
              { stage: "pre" },
            ],
            [
              "b4-8",
              "@wsc-tee-trade/cart-invalid-goods",
              {
                w: {
                  InvalidGoods: "b4-8",
                  InvalidMask: "b4-8",
                  Goods: "b4-8",
                  GoodsBlock: "b4-8",
                },
              },
              { stage: "pre" },
            ],
            ["b4-9", "@wsc-tee-trade/cart-submit", null, { stage: "pre" }],
            [
              "b4-10",
              "@wsc-tee-trade/cart-order-keep",
              { e: { open: [["b4-3", "ORDER_KEEP:open"]] } },
              { stage: "post" },
            ],
            [
              "b4-11",
              "@wsc-tee-trade/cart-coupon-bar",
              {
                w: {
                  CouponBar: "b4-11",
                  UserAuthorize: [
                    "@passport-tee/user-authorize~DDdJBmWG",
                    "Main",
                  ],
                },
              },
              { stage: "pre" },
            ],
            [
              "b4-12",
              "@wsc-tee-trade/cart-present-popup",
              {
                e: { "present-sku:fetch": [["b4-7", "cartPresentSku:fetch"]] },
              },
              { stage: "post" },
            ],
            [
              "b4-13",
              "@wsc-tee-trade/common-widgets",
              { w: { Price: "b4-13", InvalidMask: "b4-13" } },
              { stage: "pre" },
            ],
            ["b4-14", d, null, { stage: "pre" }],
            [
              "b4-15",
              n,
              {
                w: {
                  UserAuthorize: [
                    "@passport-tee/user-authorize~DDdJBmWG",
                    "Main",
                  ],
                },
              },
              { stage: "pre" },
            ],
            ["b4-16", c, null, { stage: "post" }],
            ["b4-17", "page-attached-hook", null, { stage: "pre" }],
            ["b4-18", u, null],
            ["b4-19", u, null],
            ["b4-20", "@wsc-tee-shop/footer", null],
            [
              "b4-21",
              l,
              {
                e: { "reward:show": [["b4-9"]] },
                w: { CouponItem: "b4-13", PresentGoods: "b4-13" },
              },
            ],
            [
              "b4-22",
              h,
              {
                e: {
                  afterSkuSubmit: [
                    ["b4-3", "cartGoodsSku:hide"],
                    ["b4-7", "cartGoodsSku:afterSubmit"],
                    ["b4-7", "cartPresentSku:afterSubmit"],
                    ["b4-12", "present-sku:afterSubmit"],
                    ["b4-2", "exchangeGoodsSku:afterSubmit"],
                  ],
                },
              },
            ],
          ],
          e: [
            ["@ext-tee-wsc-decorate/page-style", o("8v1J")],
            [i, o("+XBW")],
            ["@wsc-tee-trade/cart-ump", o("TvEF")],
            ["@wsc-tee-trade/cart-page-setup", o("pHGa"), { asyncInit: !0 }],
            ["@wsc-tee-trade/cart-shop-header", o("j61A")],
            ["@wsc-tee-trade/cart-empty-tip", o("pduN")],
            [r, o("xQ8D")],
            ["@wsc-tee-trade/cart-valid-goods", o("b7sl")],
            ["@wsc-tee-trade/cart-invalid-goods", o("ntU4")],
            ["@wsc-tee-trade/cart-submit", o("oJt/")],
            ["@wsc-tee-trade/cart-order-keep", o("XlGN")],
            ["@wsc-tee-trade/cart-coupon-bar", o("HtVK")],
            ["@wsc-tee-trade/cart-present-popup", o("8PT3")],
            ["@wsc-tee-trade/common-widgets", o("O/RN")],
            [d, o("sxu2")],
            [n, o("5Nqz")],
            [c, o("gheY")],
            ["page-attached-hook", o("Y7y7")],
            [u, o("YfL4")],
            ["@wsc-tee-shop/footer", o("+zL3")],
            [l, o("9Jq/")],
            [h, o("pAK7")],
          ],
        }),
        g = o("9ZMt"),
        m = o("rLrQ"),
        v = o("hDMN"),
        b = o("KUh3"),
        f = o.n(b),
        I = o("XBw/"),
        y = o.n(I),
        k = o("Hj1U"),
        C = o.n(k),
        S = o("c3N+"),
        G = o.n(S),
        L = o("zWWi"),
        P = o.n(L);
      class O {
        constructor(t) {
          this.ctx = t.ctx;
        }
      }
      O.widgets = {
        GoodsGroupUmp: y.a,
        GoodsItemUmp: f.a,
        ExchangeModel: C.a,
        ExchangeList: G.a,
        UmpInfoPopup: P.a,
      };
      var w = o("eijD"),
        T = o("taYb"),
        x = o("AGZf"),
        D = o("tmLU"),
        j = o("usDI"),
        E = o("/duV"),
        A = o("US/N"),
        _ = o("PKOW"),
        N = o("YeA1"),
        M = o("JQZX"),
        B = o("9DIb"),
        R = o.n(B),
        U = o("R2NP"),
        F = o("zjWU"),
        V = o("Ue/Y"),
        z = o.n(V),
        H = o("+I+c"),
        K = o("mztD"),
        W = o("W1Ke"),
        Y = o("87Y/"),
        q = o.n(Y);
      function J(t) {
        var e = [];
        try {
          e = JSON.parse(t || "[]") || [];
        } catch (t) {}
        return e.map((t) => t.v).join("，");
      }
      var X = (t) => {
          var e = [];
          try {
            e = JSON.parse(t || "[]") || [];
          } catch (t) {
            e = [];
          }
          return e;
        },
        Q = [
          "unavailableItems",
          "activities",
          "shopName",
          "kdtId",
          "selectedPreferencePrice",
          "goodsGroupList",
          "isShowEstimatedPrice",
          "isNewHopeShop",
          "isGoodsImgCover",
        ];
      function $(t) {
        var e = t.propertyIds || [];
        return (
          t.kdtId +
          "-" +
          t.goodsId +
          "-" +
          t.skuId +
          "-" +
          (t.activityId || 0) +
          "-" +
          e.join("-")
        );
      }
      function Z(t) {
        var { tariffRule: e, tariffPrice: o, num: a } = t;
        return 0 === e
          ? "预计 ￥ " + ((+o * a) / 100).toFixed(2)
          : 1 === e
          ? "商品已含税"
          : "";
      }
      var tt = o("pn6R"),
        et = o.n(tt),
        ot = (t, e) => {
          var o,
            s =
              (void 0 === (o = e) && (o = []),
              o.reduce(
                (t, e) => Object(a.a)({}, t, { [e.alias]: e.yzSecured }),
                {}
              )),
            i = et()(t);
          return (
            i.goodsGroupList.forEach((t) => {
              t.goodsList.forEach((t) => {
                t.yzGuarantee = s[t.alias];
              });
            }),
            i
          );
        },
        at = new Map(),
        st = {
          updateYzGuarantee(t) {
            var e,
              o,
              a = ((null == (e = t) ? void 0 : e.goodsGroupList) || [])
                .map((t) => (t.goodsList || []).map((t) => t.alias))
                .flat();
            return a.length
              ? ((t) => {
                  var e = t.sort().join(",");
                  return at.has(e);
                })(a)
                ? Promise.resolve(
                    ot(
                      t,
                      ((t) => {
                        var e = t.sort().join(",");
                        return at.get(e);
                      })(a)
                    )
                  )
                : ((o = a),
                  Object(A.default)({
                    method: "post",
                    path: "/wsctrade/goods-guarantee.json",
                    data: { aliases: o },
                    options: { rawResponse: !0 },
                  })).then((e) => {
                    var o,
                      s = null == (o = e.data) ? void 0 : o.securedItems;
                    if (!s) return t;
                    var i = ot(t, s);
                    return (
                      ((t, e) => {
                        var o = t.sort().join(",");
                        at.set(o, e);
                      })(a, s),
                      i
                    );
                  })
              : Promise.resolve(t);
          },
        },
        it = [
          "packages/shop/multi-store/index/index",
          "packages/shop/multi-store/search/index",
          "pages/common/blank-page/index",
          "packages/ump/carve-coupon/index",
          /packages\/tangshi\//,
          /packages\/groupbuying\//,
          "pages/account/login/index",
        ],
        rt = {
          161201035: "优惠券活动已失效，无法再领取",
          161201033: "优惠券库存不足，无法再领取",
          161201406: "领取规则调整，该券不可再领",
          161201050: "当前领取人数太多，请稍后再试",
        };
      var dt = { wechatSyncShoppingList: 0 },
        nt = [];
      nt.push(function () {
        var t = g.default.getApp(),
          { state: e } = t.$store,
          o = getCurrentPages().pop(),
          { route: a } = o || {};
        if (
          !it.some((t) => t === a || (t.test && t.test(a))) &&
          (void 0 === (s = a) && (s = ""),
          "string" != typeof s || !~s.indexOf("retail"))
        ) {
          var s,
            { isMultiStore: i, offlineId: r, openHideStore: d } = e.shop;
          return !i || r || (null != t && t.__doingSwitchStore)
            ? void 0
            : ((t.__doingSwitchStore = !0),
              d
                ? g.default.navigate({
                    url: "/packages/shop/multi-store/select-poi/index/index",
                  })
                : g.default.navigate({
                    url: "/packages/shop/multi-store/index/index",
                  }));
        }
      });
      var ct = null,
        ut = !1;
      function lt() {
        dt.wechatSyncShoppingList = 0;
      }
      function ht() {
        setTimeout(() => {
          nt &&
            nt.forEach((t) => {
              t();
            });
        }, 300);
      }
      function pt() {
        ut = !0;
      }
      function gt(t) {
        void 0 === t && (t = {}), ct && ct(t);
      }
      var mt,
        vt,
        bt,
        ft =
          ((mt = getApp()),
          (vt = {
            "shop:info:change": lt,
            "app:offlineId:change": ht,
            "component:sku:cart": pt,
            "trade:order:create": pt,
            "order:leave:stop": gt,
          }),
          (bt = Object.keys(vt)).forEach((t) => {
            mt.on(t, vt[t]);
          }),
          () => {
            bt.forEach((t) => {
              mt.off(t, vt[t]);
            });
          });
      lt();
      class It {
        constructor(t) {
          var e = this;
          (this.ctx = t.ctx),
            (this.isUpdatingCartGoodsList = !1),
            F.a.start({ name: F.b.cart_page, timeout: 4 }),
            Object(_.f)({
              type: _.a.REDIRECT,
              pageType: _.b.CART,
              fromRantaPage: !0,
            }),
            getApp()
              .isSwitchTab()
              .then((t) => {
                this.ctx.data.isTabPage = t;
              }),
            Object(j.b)(Object(E.c)()).then((t) => {
              this.ctx.data.shopMetaInfo = t;
            }),
            this.ctx.env.getQueryAsync().then(
              (function () {
                var t = Object(w.a)(function* (t) {
                  var o;
                  void 0 === t && (t = {});
                  var {
                    back: a = "",
                    channelId: s = 0,
                    repurchaseCouponStatus: i,
                    couponValue: r,
                    couponUnit: d,
                    prefetchKey: n,
                  } = T.a.toCamelCase(t);
                  (e.ctx.data.emptyCartPath = a),
                    (e.ctx.data.showEmptyCart = !1),
                    (e.ctx.data.channelId = s || 0),
                    (e.ctx.data.showShoppingCircle = dt.wechatSyncShoppingList),
                    (e.ctx.data.repurchaseCouponStatus = i),
                    (e.ctx.data.couponValue = r),
                    (e.ctx.data.couponUnit = d),
                    (e.ctx.data.hasValidGoods = !0),
                    (e.ctx.data.submitData = {
                      selectedPreferencePrice: 0,
                      isNewHopeShop: !1,
                    }),
                    (e.ctx.data.bizName = "cart"),
                    (e.ctx.data.requestExtraParams = "note,coupon"),
                    (e.ctx.data.bookKey = 0),
                    (e.ctx.data.displayData = {}),
                    (e.ctx.data.orderData = {}),
                    (e.ctx.data.isControlRecommendShow = !0),
                    (e.ctx.data.hasResponseValidGoods = !0),
                    (e.ctx.data.themeStyle = e.getThemeStyle());
                  var c,
                    u =
                      (yield null == (o = e.ctx.lambdas) ||
                      null == o.getUserInfo
                        ? void 0
                        : o.getUserInfo()) || {},
                    { protocol: l } = u.state || {};
                  (e.ctx.data.isAuthProtocol = l),
                    e.getCartGoodsList({
                      isPageFirstFetch: !0,
                      prefetchKey: n,
                    }),
                    e.queryShopIsDrug(),
                    (c = e.getCartGoodsList.bind(e)),
                    nt.push(c),
                    (function (t) {
                      ct = t;
                    })(e.setOrderKeepData.bind(e)),
                    e.initEvents(),
                    e.initProcess(),
                    e.initDataWatch(),
                    e.getPresentCanSelect(),
                    e.toastStatus();
                });
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()
            ),
            this.initCloudData();
        }
        getGoodsItemIdMap() {
          var { shopList: t, unavailableItems: e } = this.ctx.data,
            o = {};
          return (
            Object(M.a)(t, (t) => {
              (o[t.kdtId] = {}),
                Object(M.a)(t.goodsGroupList, (e) => {
                  Object(M.a)(e.goodsList, (e) => {
                    o[t.kdtId][e.cartId] = e;
                  });
                });
            }),
            Object(M.a)(e, (t) => {
              o[t.kdtId][t.cartId] = t;
            }),
            o
          );
        }
        getUniqueGoodsMap() {
          var { shopList: t, unavailableItems: e } = this.ctx.data,
            o = {};
          return (
            Object(M.a)(t, (t) => {
              (o[t.kdtId] = {}),
                Object(M.a)(t.items, (t) => {
                  o[t.kdtId][
                    t.goodsId + "_" + t.skuId + "_" + (t.activityId || 0)
                  ] = t;
                });
            }),
            Object(M.a)(e, (t) => {
              o[t.kdtId][
                t.goodsId + "_" + t.skuId + "_" + (t.activityId || 0)
              ] = t;
            }),
            o
          );
        }
        getCurrentGoods(t) {
          t = R()(t);
          var e = this.getGoodsItemIdMap(),
            o = this.getUniqueGoodsMap();
          return t.cartId
            ? e[t.kdtId][t.cartId]
            : o[t.kdtId][t.goodsId + "_" + t.skuId + "_" + (t.activityId || 0)];
        }
        getProtocol() {
          return (
            this.$_protocol ||
              (this.$_protocol = Promise.resolve(
                this.ctx.process.invoke("invoke-protocol").pop()
              )),
            this.$_protocol
          );
        }
        authProtocol() {
          return new Promise((t) => {
            this.getProtocol()
              .then((e) =>
                e.auth().then(() => {
                  (this.ctx.data.isAuthProtocol = !0),
                    (this.ctx.data.shopList = this.tmpShopList || []),
                    this.ctx.cloud.invoke("onGoodsListChange"),
                    this.setCartGoodsData({
                      shopCart: this.tmpShopCart || [],
                      unavailableItems: this.tmpUnavailableItems || [],
                    }),
                    (this.tmpShopList = []),
                    (this.tmpShopCart = []),
                    (this.tmpUnavailableItems = []),
                    t(!0);
                })
              )
              .catch(() => {
                (this.ctx.data.isAuthProtocol = !1), t(!1);
              });
          });
        }
        onPullDownRefresh() {
          this.ctx.event.emit("onPullDownRefresh"),
            this.getCartGoodsList({ isPull: !0 });
        }
        onPageShow() {
          Object(N.b)(this, {
            pageStyleConfig: (t) => {
              var { pageBgColor: e = "#f7f8fa" } = t || {};
              getApp().trigger("trade-cart-page-bg-color", e);
            },
          }),
            ut &&
              (this.getCartGoodsList({ isPull: !0 }),
              this.ctx.event.emit("onPullDownRefresh")),
            (ut = !1),
            lt();
        }
        pageDestroyed() {
          ft();
        }
        queryShopIsDrug() {
          return Object(A.default)({
            path: "/wsctrade/cartQueryShopIsDrug.json",
            method: "GET",
          }).then((t) => {
            var { valid: e = !1 } = t;
            (this.ctx.data.isDrugShop = e), e && Object(U.b)("需求清单");
          });
        }
        setCartGoodsData(t) {
          var { shopCart: e = {}, unavailableItems: o = [] } =
            void 0 === t ? {} : t;
          Object.assign(this.ctx.data, { unavailableItems: o }),
            (this.ctx.data.hasValidGoods = (e.goodsGroupList || []).some(
              (t) => !!t.goodsList.length
            )),
            (this.ctx.data.showEmptyCart =
              !this.ctx.data.hasValidGoods && !o.length),
            (this.ctx.data.submitData = {
              selectedPreferencePrice: e.selectedPreferencePrice,
              isNewHopeShop: e.isNewHopeShop,
            }),
            st
              .updateYzGuarantee(e)
              .then((t) => {
                Object.assign(this.ctx.data, { shopCart: t });
              })
              .catch(() => {}),
            this.handleDefaultSelfFetchPrefetch(e);
        }
        handleDefaultSelfFetchPrefetch(t) {
          var e;
          if (
            !this.locationIsAlready &&
            null != t &&
            null != (e = t.goodsGroupList) &&
            e.length
          ) {
            var a = t.goodsGroupList.some((t) =>
              t.goodsList.find(
                (t) =>
                  t.checked && (t.logisticsTypeList || []).includes("SELF_TAKE")
              )
            );
            (this.ctx.data.isHasSelfFetchGoodsSelected = a),
              a &&
                o
                  .e("packages/async-main/chunk")
                  .then(o.bind(null, "7y9c"))
                  .then((t) => {
                    var { registerLocation: e } = t;
                    (this.locationIsAlready = !0), e();
                  });
          }
        }
        getCartGoodsList(t) {
          var {
            isPageFirstFetch: e = !1,
            prefetchKey: o,
            isPull: s = !1,
          } = void 0 === t ? {} : t;
          return this.ctx.cloud.invoke("beforeCartRefresh").then(() => {
            if (this.isUpdatingCartGoodsList) return Promise.reject();
            this.ctx.event.emit("updatingCart"),
              (this.isUpdatingCartGoodsList = !0),
              !s && x.a.loading({ message: "加载中..." });
            var t = {
              store_id: this.ctx.data.offlineId || 0,
              supportReviveGroup: !0,
            };
            this.ctx.channelId > 0 && (t.channelId = this.ctx.channelId),
              this.ctx.data.groupId && (t.groupId = this.ctx.data.groupId),
              this.ctx.data.selectedPromotions &&
                (t.selectedPromotions = JSON.stringify(
                  this.ctx.data.selectedPromotions
                ));
            var i = () => {
              (this.isUpdatingCartGoodsList = !1),
                x.a.clear(),
                this.ctx.event.emit("stopPullDownRefresh"),
                g.default.$native.stopPullDownRefresh &&
                  g.default.$native.stopPullDownRefresh(),
                getApp().trigger("trade-cart-data-loaded");
            };
            return (
              (t.supportCombo = !0),
              (t.excludedComboSubType = JSON.stringify([])),
              (t.disableSearchYzGuarantee = !0),
              Object(D.b)({
                prefetchKey: o,
                normalFetchCb: () =>
                  Object(A.default)({
                    data: t,
                    path: "/wsctrade/cartGoodstList.json",
                    method: "GET",
                  }),
              })
                .then((t) => {
                  i();
                  var o,
                    s,
                    r,
                    d,
                    n =
                      ((o = t),
                      (s = []),
                      (r = T.a.toCamelCase(o)),
                      (d = []),
                      {
                        shopList: (r || []).map((t) => {
                          var {
                              unavailableItems: e,
                              activities: o,
                              shopName: i,
                              kdtId: r,
                              selectedPreferencePrice: n = 0,
                              goodsGroupList: c = [],
                              isShowEstimatedPrice: u,
                              isNewHopeShop: l = !1,
                              isGoodsImgCover: h = !1,
                            } = t,
                            p = Object(H.a)(t, Q),
                            g = h ? "aspectFill" : "aspectFit",
                            m = c.map(function (t) {
                              var e;
                              void 0 === t && (t = {});
                              var o = (
                                (null == (e = t) ? void 0 : e.goodsList) || []
                              ).map((t) => {
                                var e,
                                  {
                                    activityId: o,
                                    goodsId: a,
                                    comboDetail: s,
                                  } = t;
                                return (
                                  -1 === d.indexOf(a) && d.push(a),
                                  {
                                    comboDetail: s,
                                    cartId: t.cartId,
                                    kdtId: t.kdtId,
                                    channelId: t.channelId,
                                    canyinId: t.canyinId,
                                    goodsId: a,
                                    skuId: t.skuId,
                                    storeId: t.storeId,
                                    title: t.title,
                                    num: t.num,
                                    stock: t.stockNum,
                                    activityStartTime: t.activityStartTime,
                                    activityEndTime: t.activityEndTime,
                                    isShowStockNum: t.isShowStockNum,
                                    isShowStockShort: t.isShowStockShort,
                                    limitNum: t.limitNum || 0,
                                    cutPrice: t.cutPrice,
                                    estimatedPrice:
                                      "number" == typeof t.estimatedPrice
                                        ? t.estimatedPrice
                                        : "",
                                    price: t.payPrice,
                                    payPrice: t.payPrice,
                                    originPrice: t.originPrice,
                                    sku:
                                      ((e = t),
                                      [J(e.sku), Object(W.a)(e.properties)]
                                        .filter((t) => !!t)
                                        .join("，")),
                                    skuData: X(t.sku),
                                    propertyIds: t.propertyIds,
                                    checked: !!t.selectState,
                                    maxNum: +t.limitNum
                                      ? Math.min(t.limitNum, t.stockNum)
                                      : t.stockNum,
                                    attachmentUrl: t.attachmentUrl,
                                    imgUrl: Object(K.a)(
                                      t.attachmentUrl,
                                      "!300x300.jpg"
                                    ),
                                    unique: $(t),
                                    extraAttribute: t.extraAttribute || "{}",
                                    messages: t.messages || "{}",
                                    alias: t.alias,
                                    logisticsTypeList: t.logisticsTypeList,
                                    goodsType: t.goodsType,
                                    activityId: o,
                                    weight: t.weight,
                                    activityType: t.activityType,
                                    activityAlias: t.activityAlias || "",
                                    activityTag: t.activityTag || "",
                                    activityTypeStr: t.activityTypeStr || "",
                                    isInstallment: t.isInstallment || !1,
                                    settlementRule: t.settlementRule,
                                    tariffPrice: t.tariffPrice,
                                    tariffPriceText: Z(t),
                                    tariffRule: t.tariffRule,
                                    properties: t.properties || [],
                                    createdTime: t.createdTime,
                                    updatedTime: t.updatedTime,
                                    deliverTime: t.deliverTime,
                                    startSaleNum: t.startSaleNum || 0,
                                    revive: t.revive || !1,
                                    isSevenDayUnconditionalReturn:
                                      t.isSevenDayUnconditionalReturn || !1,
                                    yzGuarantee: t.yzGuarantee || !1,
                                    hideGuarantee: t.hideGuarantee || !1,
                                    startSoldTime: t.startSoldTime || "",
                                    disableSelectMsg: t.disableSelectMsg || "",
                                    bizExtension: t.bizExtension,
                                    birthdayRelation: t.birthdayRelation || {},
                                    quotaCycle: t.quotaCycle,
                                    imgMode: g,
                                  }
                                );
                              });
                              return Object(a.a)({}, t, { goodsList: o });
                            });
                          return (
                            (e || []).forEach((t) => {
                              var e =
                                  t.attachmentUrl ||
                                  Object(K.a)("v2/image/wap/no-pic-v2.png"),
                                o = t.activityId || 0;
                              s.push({
                                cartId: t.cartId,
                                kdtId: t.kdtId,
                                channelId: t.channelId,
                                goodsId: t.goodsId,
                                goodsType: t.goodsType,
                                skuId: t.skuId,
                                storeId: t.storeId,
                                productSkuId: t.skuId,
                                title: t.title || "",
                                messages: t.messages || "{}",
                                price: t.payPrice,
                                payPrice: t.payPrice,
                                originPrice: t.originPrice,
                                sku: J(t.sku),
                                num: t.num,
                                errorMsg: t.errorMsg,
                                imgUrl: Object(K.a)(e, "!300x300.jpg"),
                                unique: $(t),
                                alias: t.alias,
                                activityId: o,
                                activityType: t.activityType,
                                activityTag:
                                  "加价购" === t.activityTag
                                    ? "换购"
                                    : t.activityTag || "",
                                imgMode: g,
                              });
                            }),
                            Object(a.a)(
                              {
                                kdtId: r,
                                shopName: i,
                                isNewHopeShop: l,
                                goodsGroupList: m,
                                activities: o,
                                isShowEstimatedPrice: u,
                                selectedPreferencePrice: n,
                              },
                              p
                            )
                          );
                        }),
                        unAvailableGoodsList: s,
                        allGoodsIds: d,
                      }),
                    c = n.shopList || [],
                    u = c[0] || {};
                  (this.ctx.data.kdtId = u.kdtId || +Object(E.c)()),
                    (this.ctx.data.shopTitle = u.shopName || ""),
                    (this.ctx.data.hasResponseValidGoods = (
                      u.goodsGroupList || []
                    ).some((t) => !!t.goodsList.length)),
                    this.ctx.data.isAuthProtocol
                      ? ((this.ctx.data.shopList = c),
                        this.setCartGoodsData({
                          shopCart: u,
                          unavailableItems: n.unAvailableGoodsList || [],
                        }))
                      : ((this.tmpShopList = c),
                        (this.tmpShopCart = u),
                        (this.tmpUnavailableItems =
                          n.unAvailableGoodsList || []),
                        this.setCartGoodsData({
                          shopCart: [],
                          unavailableItems: [],
                        }),
                        this.authProtocol()),
                    (this.ctx.data.dataLoaded = !0);
                  var { recommendPromotionInfoList: l = [] } = u;
                  l[0] &&
                    (this.ctx.data.recommendPromotionInfoList = ((t) => {
                      var e,
                        {
                          activityId: o,
                          activityType: s,
                          promotionTag: i,
                          sendBenefitInfo: r = {},
                        } = t,
                        {
                          sendPointsGifts: d = [],
                          sendCouponsGifts: n = [],
                          sendPresentInfo: c = {},
                        } = r,
                        u = n.map((t) => {
                          var { couponTemplate: e = {} } = t;
                          return Object(a.a)({}, e, {
                            extraInfo: e.extra,
                            id: t.couponTemplateId,
                            num: t.num,
                            description: "",
                          });
                        });
                      return {
                        activityId: o,
                        includeActivityType: s,
                        promotionTag: i,
                        umpSendPromotionInfo: {
                          activityId: o,
                          activityType: s,
                          coupons: u.filter((t) => 1 === t.activityTypeGroup),
                          couponsCode: u.filter(
                            (t) => 2 === t.activityTypeGroup
                          ),
                          score: null == (e = d[0]) ? void 0 : e.num,
                          presents: c.allPresents,
                          canChoosePresentNum: c.choosePresentNum,
                        },
                      };
                    })(l[0])),
                    getApp()
                      .isSwitchTab()
                      .then((t) => {
                        this.ctx.data.isTabPage = t;
                      }),
                    this.ctx.cloud.invoke("onGoodsListChange"),
                    e && this.ctx.inited(),
                    F.a.end({ name: F.b.cart_page });
                })
                .catch(
                  (t) => (
                    F.a.end({
                      name: F.b.cart_page,
                      type: "error",
                      level: "error",
                      extra: {
                        message: JSON.stringify(t, ["message", "stack"]),
                      },
                    }),
                    i(),
                    e && this.ctx.inited(),
                    Promise.reject(t)
                  )
                )
            );
          });
        }
        setOrderKeepData(t) {
          var { displayData: e = {}, orderData: o = {} } = t || {},
            { bookKey: a } = o;
          a === this.ctx.data.bookKey &&
            ((this.ctx.data.displayData = e),
            (this.ctx.data.orderData = o),
            this.ctx.event.emit("ORDER_KEEP:open"));
        }
        getPresentCanSelect() {
          return Object(_.e)().then((t) => {
            var { order: e = !1 } = t || {};
            this.ctx.data.canSelectPresent = e;
          });
        }
        initProcess() {
          Object(N.e)(this, {
            authProtocol: () => {
              this.authProtocol().then((t) => {
                t && this.getCartGoodsList();
              });
            },
            navigateFromCart: (t) => {
              var { link: e, navigateType: o = "", znbType: a = "" } = t;
              g.default.navigate({ url: e, type: o });
            },
            setGroupId: (t) => {
              (this.ctx.data.groupId = t), this.getCartGoodsList();
            },
            updateCartList: () => this.getCartGoodsList(),
            beforeCartClearHook: (t) =>
              this.ctx.cloud.invoke("beforeCartClear", t),
          });
        }
        initEvents() {
          var t = this;
          Object(N.d)(this, {
            updateCartGoodsList: function (e) {
              var { scene: o } = void 0 === e ? {} : e;
              (t.ctx.data.selectedPromotions = null),
                t.getCartGoodsList().then(() => {
                  t.ctx.event.emit("cartGoodsListDidUpdate", { scene: o });
                });
            },
            updateCartGoodsListWithActivity: function (e) {
              var { selectedPromotions: o, scene: a } = void 0 === e ? {} : e;
              o && (t.ctx.data.selectedPromotions = o),
                t.getCartGoodsList().then(() => {
                  t.ctx.event.emit("cartGoodsListDidUpdate", { scene: a });
                });
            },
          });
        }
        initDataWatch() {
          Object(N.b)(this, ["themeColors"], {
            isSetData: !1,
            callback: () => {
              this.ctx.data.themeStyle = this.getThemeStyle();
            },
          });
        }
        toastStatus() {
          setTimeout(() => {
            var { repurchaseCouponStatus: t } = this.ctx.data;
            if (void 0 !== t) {
              if ("0" === t) {
                var { couponValue: e = "", couponUnit: o = "" } = this.ctx.data;
                return Object(x.a)("已为你领取" + e + o + "优惠券，下单享优惠");
              }
              rt[t] && Object(x.a)(rt[t]);
            }
          }, 5e3);
        }
        getThemeStyle() {
          var { themeColors: t = {} } = this.ctx.data,
            e = Object.keys(t).reduce(
              (e, o) => Object(a.a)({}, e, { ["--" + o]: t[o] }),
              {}
            );
          return Object.keys(e).reduce(
            (t, o) => "" + t + o + ":" + e[o] + ";",
            ""
          );
        }
        initCloudData() {}
      }
      It.widgets = { Main: z.a };
      var yt = o("VFJj"),
        kt = o.n(yt),
        Ct = "edit",
        St = "submit",
        Gt = {
          [Ct]: { btnText: "完成", nextMode: St },
          [St]: { btnText: "编辑", nextMode: Ct },
        },
        Lt = o("VmHG"),
        Pt = {
          isChainShop: !1,
          isSwitchOpen: !1,
          isWholesaler: !1,
          shopTitle: "",
          editMode: St,
          shopMetaInfo: {},
        },
        Ot = {
          btnText() {
            return Gt[this.editMode].btnText;
          },
        },
        wt = (t) => Object(A.default)(Object(a.a)({}, t, { config: {} }));
      var Tt = function (t) {
        return {
          initData() {
            Promise.all([
              Object(A.default)({
                path: "/wscshopcore/top-bar/get-top-bar-setting.json",
                method: "GET",
                withCredentials: !0,
              }),
              wt({ path: "/wsctrade/wholesale/isWholesaler.json" }),
            ]).then((t) => {
              var [e, o] = t;
              (this.isSwitchOpen = e.showSwitchBtn),
                (this.isWholesaler = o || !1),
                (this.isChainShop =
                  [1, 2].includes(+this.shopMetaInfo.shopRole) &&
                  2 == +this.shopMetaInfo.chainOnlineShopMode);
            });
          },
          switchEditMode() {
            var e = this;
            return Object(w.a)(function* () {
              var o = Gt[e.editMode].nextMode;
              if (((t.data.editMode = o), "edit" === o)) {
                var s,
                  i = ((null == (s = t.data) ? void 0 : s.shopList) || []).map(
                    (t) => {
                      var e = (t.goodsGroupList || []).map((t) => {
                        var e = (t.goodsList || []).map((t) =>
                          Object(a.a)({}, t, { checked: !1 })
                        );
                        return Object(a.a)({}, t, { goodsList: e });
                      });
                      return Object(a.a)({}, t, { goodsGroupList: e });
                    }
                  );
                t.data.shopList = i;
              } else yield t.process.invokePipe("updateCartList");
            })();
          },
        };
      };
      class xt {
        constructor(t) {
          var e;
          (this.ctx = t.ctx),
            (this.store =
              ((e = this.ctx),
              Object(Lt.a)({
                state: () => Object(a.a)({}, Pt),
                getters: Object(a.a)({}, Ot),
                actions: Object(a.a)({}, Tt(e)),
              }))),
            (this.ctx.data.editMode = St),
            Object(Lt.c)(this, ["editMode", "shopTitle", "shopMetaInfo"]);
        }
      }
      xt.widgets = { ShopHeader: kt.a };
      var Dt = o("2jxH"),
        jt = o.n(Dt),
        Et = o("1cLy"),
        At = o.n(Et);
      class _t {
        constructor(t) {
          (this.ctx = t.ctx),
            this.ctx.watch("shopConfigs", (t) => {
              this.cartEmptyInfo = {
                iconUrl: (null == t ? void 0 : t.buy_cart_logo_url) || "",
              };
            });
        }
      }
      _t.widgets = { EmptyTip: jt.a, CartEmptyBlock: At.a };
      var Nt = o("dpzq"),
        Mt = o.n(Nt);
      class Bt {
        constructor(t) {
          this.ctx = t.ctx;
        }
      }
      Bt.widgets = { ShoppingCircle: Mt.a };
      var Rt = o("z9IR"),
        Ut = o("pg6f"),
        Ft = o.n(Ut),
        Vt = o("lv/a"),
        zt = o.n(Vt),
        Ht = o("1+N7"),
        Kt = o.n(Ht),
        Wt = o("q7RU"),
        Yt = o.n(Wt),
        qt = o("3jVx"),
        Jt = o.n(qt),
        Xt = o("615I"),
        Qt = o.n(Xt),
        $t = ["goods"],
        Zt = (t) => Object(A.requestV2)(Object(a.a)({}, t, { config: {} }));
      function te(t) {
        var {
            kdtId: e,
            goodsId: o,
            skuId: a,
            activityId: s = 0,
            cartId: i = null,
            activityAlias: r = "",
            activityType: d,
          } = t,
          n = {
            kdtId: e,
            goodsId: o,
            skuId: a,
            activityId: s,
            cartId: i,
            activityAlias: r,
            activityType: d,
          };
        return (
          ["storeId", "channelId", "canyinId"].forEach((e) => {
            t[e] > 0 && (n[e] = t[e]);
          }),
          n
        );
      }
      function ee(t) {
        var { num: e, combo: o } = t;
        return Zt({
          path: "/wsctrade/cart/updateCartGoodsNum.json",
          data: Object(a.a)({}, te(t), { num: e, combo: o }),
          method: "POST",
        });
      }
      function oe(t) {
        var e = Object(a.a)({}, te(t), {
          messages: t.messages,
          propertyIds: t.propertyIds,
          extraAttribute: t.extraAttribute,
        });
        return (
          t.combo && (e.combo = t.combo),
          "number" == typeof t.deliverTime && (e.deliverTime = t.deliverTime),
          Zt({
            path: "/wsctrade/cart/reselect-goods.json",
            data: e,
            method: "POST",
          })
        );
      }
      function ae(t) {
        var { goodsList: e, type: o } = t,
          s = (e || []).map((t) => Object(a.a)({}, te(t)));
        return Zt({
          path:
            "add" === o
              ? "/wsctrade/cart/batchSelectGoods.json"
              : "/wsctrade/cart/batchUnselectGoods.json",
          method: "POST",
          data: { goodsList: s },
        });
      }
      function se(t) {
        var { goods: e, type: o } = t;
        return Zt({
          path:
            "add" === o
              ? "/wsctrade/cart/selectGoods.json"
              : "/wsctrade/cart/unselectGoods.json",
          method: "POST",
          data: te(e),
        });
      }
      function ie(t) {
        var { kdtId: e, type: o } = t;
        return Zt({
          path:
            "add" === o
              ? "/wsctrade/cart/selectAllGoods.json"
              : "/wsctrade/cart/unselectAllGoods.json",
          method: "POST",
          data: { kdtId: e },
        });
      }
      function re(t) {
        var { goods: e } = t,
          o = Object(H.a)(t, $t),
          { num: s } = e;
        return Zt({
          path: "/wsctrade/cart/deleteGoods.json",
          data: Object(a.a)({}, o, te(e), { num: s }),
          method: "POST",
        });
      }
      var de = o("MLLI"),
        { platform: ne } = Object(de.b)(),
        ce = {
          shopCart: {},
          shopGoods: {},
          editMode: "submit",
          editCheckedGoods: {},
          themeCSS: "",
          themeColors: {},
          themeTag: {},
          themeStyle: "",
          onlineCourseUnselectFlag: !1,
          isIOS: "ios" === ne,
          loadGoodsList: [],
          loadLoading: !0,
          finished: !1,
          pageNum: 1,
          offlineId: 0,
          listObNeedReLoad: !1,
          cartActivityPopupShow: !1,
          cartActivityInfo: {},
          currentActivityInfo: {},
          currentActivityGoodsList: [],
        },
        ue = o("gaeN"),
        le = {
          kdtId() {
            return this.shopCart.kdtId;
          },
          currentEditKdtId() {
            return "edit" === this.editMode ? this.shopGoods.kdtId : 0;
          },
          themeGeneralColor() {
            return this.themeColors.general;
          },
          themeGeneralAlpha10Color() {
            return q()(this.themeGeneralColor, 0.1);
          },
          isEditing() {
            return !!this.currentEditKdtId;
          },
          hasGoods() {
            return (this.shopGoods.goodsGroupList || []).some(
              (t) => !!t.goodsList.length
            );
          },
          computedGoodsGroupList() {
            return this.hasGoods
              ? this.shopGoods.goodsGroupList.map((t, e) =>
                  Object(a.a)({}, t, { uniqId: e })
                )
              : [];
          },
          provideData() {
            if (!this.shopGoods)
              return { checkedGoodsList: [], isCheckedAll: !1 };
            var t = [],
              e = !0;
            return (
              this.isEditing
                ? (this.shopGoods.goodsGroupList || []).forEach((o) => {
                    (o.goodsList || []).forEach((o) => {
                      this.editCheckedGoods[o.cartId + ""]
                        ? t.push(o)
                        : (e = !1);
                    });
                  })
                : (this.shopGoods.goodsGroupList || []).forEach((o) => {
                    var a = (o.goodsList || []).filter((t) => !Object(ue.a)(t));
                    a.length &&
                      a.forEach((o) => {
                        o.checked ? Object(ue.b)(o) && t.push(o) : (e = !1);
                      });
                  }),
              { checkedGoodsList: t, isCheckedAll: !!t.length && e }
            );
          },
          checkedGoodsList() {
            return this.provideData.checkedGoodsList;
          },
          showEstimatedPrice() {
            return this.shopCart.isShowEstimatedPrice;
          },
        },
        he = o("lgMb"),
        pe = {
          state: ce,
          getters: le,
          getActions: function (t) {
            return {
              handlePullDownRefresh() {
                (this.loadLoading = !0),
                  (this.finished = !1),
                  (this.pageNum = 1),
                  (this.loadGoodsList = []);
              },
              handleStopLoading() {
                this.loadLoading = !1;
              },
              handleToggleCheckedAll() {
                var { shopCart: e, editMode: o, isCheckedAll: s } = t.data;
                if ("edit" === o)
                  s
                    ? (this.editCheckedGoods = {})
                    : (e.goodsGroupList || []).forEach((t) => {
                        (t.goodsList || []).forEach((t) => {
                          this.editCheckedGoods = Object(a.a)(
                            {},
                            this.editCheckedGoods,
                            { [t.cartId + ""]: 1 }
                          );
                        });
                      });
                else {
                  if (this.loading) return;
                  (this.loading = !0),
                    (this.onlineCourseUnselectFlag = !1),
                    this.handleBatchUpdateSelectGoods({
                      rangeType: "shop",
                      type: s ? "remove" : "add",
                    });
                }
              },
              updateShopGoods(t) {
                this.shopGoods = t;
              },
              resetEditCheckedGoods() {
                this.editCheckedGoods = {};
              },
              handleWatchProvideData(e) {
                var { checkedGoodsList: o, isCheckedAll: a } = e;
                (t.data.checkedGoodsList = o), (t.data.isCheckedAll = a);
              },
              getLoadGoodsList(t) {
                var e;
                if ((void 0 === t && (t = !1), t && 1 === this.pageNum))
                  this.solveLoadGoodsList();
                else if (
                  (null == (e = this.computedGoodsGroupList)
                    ? void 0
                    : e.length) > 0
                ) {
                  var o =
                      Math.floor(this.computedGoodsGroupList.length / 6) + 1,
                    a = this.loadGoodsList.length;
                  (this.loadLoading = !0),
                    this.pageNum <= o &&
                      6 * this.pageNum > a &&
                      setTimeout(() => {
                        this.solveLoadGoodsList();
                      }, 300);
                }
              },
              updateLoadGoodsList() {
                this.loadGoodsList.length > 0
                  ? ((this.loadGoodsList = this.computedGoodsGroupList),
                    (this.finished = !0),
                    (this.loadLoading = !1))
                  : this.getLoadGoodsList(!0);
              },
              solveLoadGoodsList() {
                var e,
                  o = Math.floor(this.computedGoodsGroupList.length / 6) + 1;
                (this.loadGoodsList = [
                  ...this.loadGoodsList.concat(
                    null == (e = this.computedGoodsGroupList)
                      ? void 0
                      : e.slice(6 * (this.pageNum - 1), 6 * this.pageNum)
                  ),
                ]),
                  this.pageNum++,
                  (this.loadLoading = !1),
                  this.pageNum > o &&
                    ((this.finished = !0),
                    (t.data.isValidGoodsLoadFinish = !0));
              },
              handleBatchUpdateSelectGoods(e) {
                var { rangeType: o, type: a } = e,
                  s = { kdtId: this.kdtId, type: a };
                "shop" === o &&
                  ie(s)
                    .then(() => {
                      (this.loading = !1), t.event.emit("updateCartGoodsList");
                    })
                    .catch((t) => {
                      (this.loading = !1),
                        Object(he.b)(t, {
                          message:
                            ((null == t ? void 0 : t.msg) || "操作失败") +
                            ", 请刷新或者重试",
                        });
                    });
              },
              refreshCartGoodsList() {
                t.event.emit("updateCartGoodsList");
              },
              updateListObNeedReLoad(t) {
                this.listObNeedReLoad = t;
              },
              changeCartActivityPopupShow(t) {
                (this.cartActivityPopupShow = !0),
                  (this.cartActivityInfo = t || {});
              },
              showExchangeModal(t) {
                var { activityInfo: e, goodsList: o } = t;
                (this.currentActivityInfo = e),
                  (this.currentActivityGoodsList = o);
              },
              handleCloseCartActivityPopup() {
                this.cartActivityPopupShow = !1;
              },
            };
          },
          registerWatchs: function (t) {
            t.watch("shopCart", (e) => {
              var o = t.updatePresentSkuData(e);
              t.updateShopGoods(o),
                t.updatePresentInfo(),
                t.batchUnSelectEduOnlineGoods();
            }),
              t.watch("editMode", () => {
                t.resetEditCheckedGoods();
              }),
              t.watch("canSelectPresent", () => {
                t.getPresentListCookie();
              }),
              t.watch("provideData", (e) => {
                t.handleWatchProvideData(e);
              }),
              t.watch("presentData", () => {
                t.updatePresentInfo();
              }),
              t.watch("computedGoodsGroupList", (e, o) => {
                ((null == o ? void 0 : o.length) > 0 ||
                  (null == e ? void 0 : e.length) > 0) &&
                  t.updateLoadGoodsList();
              });
          },
        },
        ge = {
          presentData() {
            var t = {};
            return (
              (this.computedGoodsGroupList || []).forEach((e) => {
                var {
                    groupActivityInfoList: o = [],
                    groupActivityInfo: s = {},
                  } = e || {},
                  i = [];
                (null == o ? void 0 : o.length) > 0
                  ? (i = o)
                  : 0 === (null == o ? void 0 : o.length) && s && (i = [s]),
                  i.forEach((e) => {
                    var {
                        activityId: o,
                        activityType: s,
                        selectablePresents: i = [],
                        selectablePresentNum: r,
                      } = e,
                      d = this.pickPresentCookieData[o],
                      { skuIdList: n, selectablePresentNum: c } = d || {},
                      u = i.filter((t) => t.isSelected);
                    function l(t) {
                      return Object(a.a)({}, t, {
                        activityId: o,
                        activityType: s,
                        presentId: t.id,
                        goodsSkuInfoList: t.goodsSkuInfoList.map((e) =>
                          Object(a.a)({}, e, {
                            isSelected: t.skuId === e.skuId,
                          })
                        ),
                      });
                    }
                    if (((this.selectablePresentNumMap[o] = r), n && c === r)) {
                      var h = i.reduce((t, e) => {
                        var { skuId: o, goodsSkuInfoList: s = [] } = e;
                        return (
                          s.length
                            ? s.forEach((o) => {
                                t[o.skuId] = Object(a.a)({}, e, {
                                  sku: o.sku,
                                  skuId: o.skuId,
                                });
                              })
                            : (t[o] = e),
                          t
                        );
                      }, {});
                      n.every((t) => h[t]) &&
                        ((t.IS_SELECT_PRESENT = !0), (u = n.map((t) => h[t])));
                    }
                    (t[o] = u.map(l)), n || i.length !== r || (t[o] = i.map(l));
                  });
              }),
              t
            );
          },
        },
        me = o("Sipi"),
        ve = ["goodsList"],
        be = "pick_present_activity_id_map",
        fe = {
          state: {
            presentInfo: {
              goodsList: [],
              show: !1,
              activityId: 0,
              pickGoodsList: [],
              selectablePresentNum: 0,
            },
            pickPresentCookieData: {},
            selectablePresentNumMap: {},
            canSelectPresent: !1,
            currentShowSkuGoods: {},
          },
          getters: ge,
          getActions: function (t) {
            return {
              updatePresentSkuData(t) {
                var e,
                  o = (t) => {
                    var e;
                    return null != t &&
                      null != (e = t.groupActivityInfo) &&
                      e.selectablePresents
                      ? ((t.groupActivityInfo.selectablePresents =
                          t.groupActivityInfo.selectablePresents.map((t) => {
                            var e,
                              o,
                              s =
                                null !=
                                (e =
                                  null == (o = t.goodsSkuInfoList)
                                    ? void 0
                                    : o.find((t) => t.isSelected))
                                  ? e
                                  : t;
                            return Object(a.a)({}, t, {
                              sku: s.sku,
                              skuId: s.skuId,
                            });
                          })),
                        t)
                      : t;
                  };
                t.goodsGroupList &&
                  (t.goodsGroupList =
                    null == (e = t.goodsGroupList)
                      ? void 0
                      : e.map((t) => {
                          var e, a;
                          return (
                            (null == (e = t) ||
                            null == (a = e.groupActivityInfoList)
                              ? void 0
                              : a.length) > 0
                              ? (t.groupActivityInfoList =
                                  t.groupActivityInfoList.map((t) => o(t)))
                              : (t = o(t)),
                            t
                          );
                        }));
                return t;
              },
              updatePresentInfo() {
                var e = Object.keys(this.presentData).reduce(
                    (t, e) => (
                      "IS_SELECT_PRESENT" !== e &&
                        (t = t.concat(this.presentData[e])),
                      t
                    ),
                    []
                  ),
                  o = this.presentData.IS_SELECT_PRESENT ? 1 : 0;
                t.data.presentData = {
                  IS_SELECT_PRESENT: o,
                  SELECTED_PRESENTS: o ? e : [],
                };
              },
              getPresentListCookie() {
                t.env.getQueryAsync().then((t) => {
                  var e = (this.canSelectPresent && t) || {},
                    {
                      selectablePresentNum: o,
                      isUserSelectPresent: s,
                      activityId: i,
                    } = e,
                    { presentIds: r = "[]" } = e,
                    d = {};
                  try {
                    r = JSON.parse(r);
                  } catch (t) {
                    r = [];
                  }
                  try {
                    d = Object(me.b)(be) || {};
                    var { saveTime: n } = d || {};
                    new Date().valueOf() - n > 864e5 &&
                      ((d = {}), Object(me.d)(be, {}));
                  } catch (t) {
                    d = {};
                  }
                  if (i && r.length && ("1" === s || 1 === s)) {
                    d[i] = { skuIdList: r, selectablePresentNum: Number(o) };
                    try {
                      Object(me.d)(
                        be,
                        Object(a.a)({}, d, { saveTime: new Date().valueOf() })
                      );
                    } catch (t) {}
                  }
                  this.pickPresentCookieData = d;
                });
              },
              handleChangePresentPopup(e) {
                var { goodsList: o } = e,
                  s = Object(H.a)(e, ve),
                  i = {};
                o && (i.goodsList = o),
                  (i = Object(a.a)({}, this.presentInfo, i, s)),
                  (this.presentInfo = i),
                  (t.data.presentPopupInfo = i);
              },
              handlePickPresent(t) {
                var {
                    goodsList: e,
                    activityId: o,
                    selectablePresentNum: s,
                  } = t,
                  i = Object(a.a)({}, this.pickPresentCookieData, {
                    [o]: {
                      skuIdList: e.map((t) => {
                        var { skuId: e } = t;
                        return e;
                      }),
                      selectablePresentNum: s,
                    },
                    saveTime: new Date().valueOf(),
                  });
                (this.pickPresentCookieData = i),
                  Object(me.d)(be, i),
                  this.updatePresentInfo();
              },
              handleChangePresentSkuCallback(e) {
                var { activityId: o, goodsData: s, skuData: i } = e,
                  r = (this.presentData[o] || []).map((t) =>
                    t.skuId === s.skuId ? i.id : t.skuId
                  ),
                  d = Object(a.a)({}, this.pickPresentCookieData, {
                    [o]: {
                      skuIdList: r,
                      selectablePresentNum: this.selectablePresentNumMap[o],
                    },
                    saveTime: new Date().valueOf(),
                  }),
                  n = this.presentInfo.goodsList || [];
                if (n.length) {
                  var c = Object(a.a)({}, this.presentInfo, {
                    goodsList: n.map((t) => {
                      var e,
                        o,
                        a =
                          null !=
                          (e =
                            null == (o = s.goodsSkuInfoList)
                              ? void 0
                              : o.find((t) => t.skuId === i.id))
                            ? e
                            : {};
                      return (
                        t.id === s.id && ((t.sku = a.sku), (t.skuId = a.skuId)),
                        t
                      );
                    }),
                  });
                  t.data.presentPopupInfo = c;
                }
                Object(me.d)(be, d),
                  (this.pickPresentCookieData = d),
                  this.updatePresentInfo(),
                  t.event.emit("cartPresentSku:afterSubmit");
              },
              handleChangePresentSku(e) {
                var o,
                  s = Object(a.a)({}, e, {
                    goods: Object(a.a)({}, e.goods, {
                      presentSkuList:
                        (null == (o = e.goods) ? void 0 : o.goodsSkuInfoList) ||
                        [],
                    }),
                  });
                (this.currentShowSkuGoods = Object(a.a)({}, s, {
                  goodsData: s.goods,
                })),
                  t.event.emit("cartPresentSku:fetch", s);
              },
              handlePresentSkuSelect(t) {
                var { selectedSkuComb: e } = t;
                this.currentShowSkuGoods = Object(a.a)(
                  {},
                  this.currentShowSkuGoods,
                  { skuData: e }
                );
              },
            };
          },
        },
        Ie = {
          state: {},
          getters: {},
          getActions: function () {
            return {
              batchUnSelectEduOnlineGoods() {
                if (this.isIOS && !this.onlineCourseUnselectFlag) {
                  var t = [];
                  this.computedGoodsGroupList.forEach((e) => {
                    e.goodsList.forEach((e) => {
                      var o, a;
                      31 === e.goodsType &&
                        "1" ===
                          (null == (o = e.bizExtension) ||
                          null == (a = o.cartBizMark)
                            ? void 0
                            : a.isOnlineCourse) &&
                        t.push(e);
                    });
                  });
                  var e = { kdtId: this.kdtId, goodsList: t };
                  null != t &&
                    t.length &&
                    ae(e)
                      .then(() => {
                        (this.onlineCourseUnselectFlag = !0),
                          this.refreshCartGoodsList();
                      })
                      .catch((t) => {
                        Object(he.b)(t);
                      });
                }
              },
            };
          },
        },
        ye = function (t) {
          return {
            handleToggleCheckedAll() {
              var { shopCart: e, editMode: o, isCheckedAll: s } = t.data;
              if ("edit" === o)
                s
                  ? (this.editCheckedGoods = {})
                  : (e.goodsGroupList || []).forEach((t) => {
                      (t.goodsList || []).forEach((t) => {
                        this.editCheckedGoods = Object(a.a)(
                          {},
                          this.editCheckedGoods,
                          { [t.cartId + ""]: 1 }
                        );
                      });
                    }),
                  this.updateShopList({ isChecked: s });
              else {
                if (this.loading) return;
                (s
                  ? t.cloud.invoke("beforeGoodsSelect", { isAll: !0 })
                  : t.cloud.invoke("beforeGoodsUnselect", { isAll: !0 })
                ).then(() => {
                  (this.loading = !0),
                    (this.onlineCourseUnselectFlag = !1),
                    this.handleBatchUpdateSelectGoods({
                      rangeType: "shop",
                      type: s ? "remove" : "add",
                    });
                });
              }
            },
            handleBatchUpdateSelectGoods(e) {
              var { rangeType: o, type: a } = e,
                s = { kdtId: this.kdtId, type: a };
              "shop" === o &&
                ie(s)
                  .then(() => {
                    (this.loading = !1), t.event.emit("updateCartGoodsList");
                  })
                  .catch((t) => {
                    (this.loading = !1), Object(he.b)(t);
                  });
            },
            handleToggleSelectCartGoods(e) {
              var {
                rangeType: o,
                goods: a,
                kdtId: s,
                isActivity: i,
                type: r,
              } = e;
              return "single" === o
                ? ("add" === r
                    ? t.cloud.invoke("beforeGoodsSelect", { goodsList: [a] })
                    : t.cloud.invoke("beforeGoodsUnselect", { goodsList: [a] })
                  ).then(() =>
                    se({ kdtId: this.kdtId, goods: a, type: r, isActivity: i })
                      .then(
                        () => (
                          t.event.emit("updateCartGoodsList", {
                            scene: "selectedChange",
                          }),
                          t.cloud.emit("onGoodsChange", { goodsList: [a] }),
                          !0
                        )
                      )
                      .catch((t) => {
                        var e, o;
                        return (
                          (t.code =
                            t.code || (null == (e = t.data) ? void 0 : e.code)),
                          (t.msg =
                            t.msg || (null == (o = t.data) ? void 0 : o.msg)),
                          Object(he.b)(t),
                          Promise.reject(t)
                        );
                      })
                  )
                : "shop" === o
                ? s
                  ? ie({ kdtId: s, type: r })
                      .then(() => (t.event.emit("updateCartGoodsList"), !0))
                      .catch(
                        (t) => (
                          Object(he.b)(t, {
                            message:
                              ((null == t ? void 0 : t.msg) || "操作失败") +
                              ", 请刷新或者重试",
                          }),
                          Promise.reject(t)
                        )
                      )
                  : (Object(x.a)("kdtId为空"), Promise.resolve())
                : "all" === o
                ? ("add" === r
                    ? t.cloud.invoke("beforeGoodsSelect", { isAll: !0 })
                    : t.cloud.invoke("beforeGoodsUnselect", { isAll: !0 })
                  ).then(() => {
                    var { shopList: e } = t.data,
                      o = e.map((e) =>
                        ie({ kdtId: e.kdtId, type: r })
                          .then(() => (t.event.emit("updateCartGoodsList"), !0))
                          .catch(
                            (t) => (
                              Object(he.b)(t, {
                                message:
                                  ((null == t ? void 0 : t.msg) || "操作失败") +
                                  ", 请刷新或者重试",
                              }),
                              Promise.reject(t)
                            )
                          )
                      );
                    return Promise.all(o).then(
                      () => (t.cloud.emit("onGoodsChange", { isAll: !0 }), !0)
                    );
                  })
                : void 0;
            },
            handleItemChecked(e, o, s) {
              var { detail: i } = s,
                {
                  rangeType: r,
                  type: d,
                  goods: n,
                  goodsList: c = [],
                  isActivity: u,
                } = i;
              if ("edit" === t.data.editMode)
                "batch" === r
                  ? c.forEach((t) => {
                      this.editCheckedGoods = Object(a.a)(
                        {},
                        this.editCheckedGoods,
                        { [t.cartId + ""]: "add" === d ? 1 : 0 }
                      );
                    })
                  : (this.editCheckedGoods = Object(a.a)(
                      {},
                      this.editCheckedGoods,
                      { [n.cartId + ""]: "add" === d ? 1 : 0 }
                    )),
                  this.updateShopList({
                    propsGoodsList: "batch" === r ? c : [n],
                    isChecked: "add" === d,
                  });
              else if ("batch" === r) {
                var l = c.filter((t) => !Object(ue.a)(t));
                if (!l.length)
                  return void Object(x.a)(
                    "购物车里面尚未选中商品，请重新返回活动页/商品页加购"
                  );
                var h = {
                  kdtId: this.kdtId,
                  goodsList: l,
                  type: d,
                  isActivity: u,
                };
                (l[0].checked,
                t.cloud.invoke("beforeGoodsSelect", { goodsList: l })).then(
                  () => {
                    ae(h)
                      .then(() => {
                        t.cloud.emit("onGoodsChange", { goodsList: l }),
                          c.forEach((e, a) => {
                            o >= 0 &&
                              a >= 0 &&
                              this.updateGoodsList({
                                type: "UPDATE_GOODS_SELECT_STATE",
                                goodsGroupIndex: o,
                                goodsIndex: a,
                                val: "add" === d ? 1 : 0,
                              }),
                              t.event.emit("updateCartGoodsList");
                          });
                      })
                      .catch((t) => {
                        Object(he.b)(t);
                      });
                  }
                );
              } else {
                var p = { kdtId: this.kdtId, goods: n, type: d, isActivity: u };
                (n.checked
                  ? t.cloud.invoke("beforeGoodsUnselect", { goodsList: [n] })
                  : t.cloud.invoke("beforeGoodsSelect", { goodsList: [n] })
                ).then(() => {
                  t.cloud.emit("onGoodsChange", { goodsList: [n] }),
                    se(p)
                      .then(() => {
                        this.updateGoodsList({
                          type: "UPDATE_GOODS_SELECT_STATE",
                          goodsGroupIndex: o,
                          goodsIndex: e,
                          val: "add" === d ? 1 : 0,
                        }),
                          t.event.emit("updateCartGoodsList", {
                            scene: "selectedChange",
                          });
                      })
                      .catch((t) => {
                        Object(he.b)(t, {
                          message:
                            ((null == t ? void 0 : t.msg) || "操作失败") +
                            ", 请刷新或者重试",
                        });
                      });
                });
              }
            },
            updateShopList(e) {
              var o,
                { propsGoodsList: s = [], isChecked: i } = e,
                r = ((null == (o = t.data) ? void 0 : o.shopList) || []).map(
                  (t) => {
                    var e = (t.goodsGroupList || []).map((t) => {
                      var e = (t.goodsList || []).map((t) => {
                        s.length
                          ? s.find((e) => e.cartId === t.cartId) &&
                            (t.checked = i)
                          : (t.checked = i);
                        return t;
                      });
                      return Object(a.a)({}, t, { goodsList: e });
                    });
                    return Object(a.a)({}, t, { goodsGroupList: e });
                  }
                );
              t.data.shopList = r;
            },
            updateGoodsList(e) {
              var { type: o, goodsGroupIndex: s, goodsIndex: i, val: r } = e;
              if ("UPDATE_GOODS_NUM" === o) {
                if (s >= 0 && i >= 0) {
                  var { shopCart: d } = t.data;
                  (d.goodsGroupList[s].goodsList[i].num = r),
                    (t.data.shopCart = Object(a.a)({}, d));
                }
              } else if ("UPDATE_GOODS_SELECT_STATE" === o) {
                if (s >= 0 && i >= 0) {
                  var { shopCart: n } = t.data;
                  (n.goodsGroupList[s].goodsList[i].checked = !!r),
                    (t.data.shopCart = Object(a.a)({}, n));
                }
              } else if (
                "UPDATE_GOODS_AFTER_DELETE" === o &&
                s >= 0 &&
                i >= 0
              ) {
                var { shopCart: c } = t.data;
                c.goodsGroupList[s].goodsList.length &&
                  (c.goodsGroupList[s].goodsList.splice(i, 1),
                  (t.data.shopCart = Object(a.a)({}, c)));
              }
            },
            handleDeleteGoods(e) {
              var { goods: o, isActivity: a } = e,
                s = "edit" === t.data.editMode;
              return t.cloud
                .invoke("beforeGoodsDelete", { goodsList: [o] })
                .then(() =>
                  re({ goods: o, isActivity: a, needConfirm: s })
                    .then(
                      () => (
                        t.event.emit("updateCartGoodsList"),
                        t.cloud.emit("onGoodsChange", { goodsList: [o] }),
                        !0
                      )
                    )
                    .catch((t) => Promise.reject(t))
                );
            },
            handleItemDelete(e, o, a) {
              var {
                  detail: { goods: s, isActivity: i },
                } = a,
                r = "edit" === t.data.editMode;
              t.cloud
                .invoke("beforeGoodsDelete", { goodsList: [s] })
                .then(() => {
                  re({ goods: s, isActivity: i, needConfirm: r })
                    .then(() => {
                      this.updateGoodsList({
                        type: "UPDATE_GOODS_AFTER_DELETE",
                        goodsGroupIndex: o,
                        goodsIndex: e,
                      });
                      var {
                          sku: a,
                          skuData: i,
                          skuId: r,
                          goodsId: d,
                          title: n,
                        } = s,
                        c = {
                          no_sku: a ? 0 : 1,
                          sku_id: r,
                          sku_name: i,
                          goods_id: d,
                          goods_name: n,
                        };
                      t.logger &&
                        t.logger.log({
                          et: "click",
                          ei: "cart_decrease_goods_num",
                          en: "购物车页面-删除商品",
                          params: c,
                        }),
                        t.logger &&
                          t.logger.log({
                            et: "click",
                            ei: "remove_from_cart",
                            en: "购物车移除商品",
                            params: c,
                          }),
                        t.event.emit("updateCartGoodsList"),
                        t.cloud.emit("onGoodsChange", { goodsList: [s] });
                    })
                    .catch((t) =>
                      Object(he.b)(t, { message: "商品删除失败，请稍后重试" })
                    );
                });
            },
            handleSetCartGoodsNum(e) {
              var { val: o, goods: s } = e;
              return t.cloud
                .invoke("beforeGoodsNumChange", {
                  num: o,
                  cartId: s.cartId,
                  goodsId: s.goodsId,
                })
                .then(() => {
                  var e = Object(a.a)({}, s, { num: o });
                  return (
                    s.comboDetail &&
                      (e.combo = {
                        comboType: s.comboDetail.comboType,
                        groupList: s.comboDetail.groupList,
                      }),
                    ee(e)
                      .then(() => {
                        t.cloud.emit("onGoodsChange", {
                          goodsList: [Object(a.a)({}, s, { num: o })],
                        }),
                          t.cloud.emit(
                            "onGoodsNumChange",
                            Object(a.a)({}, s, { num: o })
                          ),
                          t.event.emit("updateCartGoodsList", {
                            scene: "numChange",
                          });
                      })
                      .catch((t) => {
                        Object(he.b)(t);
                      })
                  );
                });
            },
            handleItemNumChange(e, o, s) {
              var { detail: i } = s,
                { num: r, goods: d } = i;
              t.cloud
                .invoke("beforeGoodsNumChange", {
                  num: r,
                  cartId: d.cartId,
                  goodsId: d.goodsId,
                })
                .then(() => {
                  this.updateGoodsList({
                    type: "UPDATE_GOODS_NUM",
                    cartId: "",
                    goodsGroupIndex: o,
                    goodsIndex: e,
                    val: r,
                  });
                  var s = Object(a.a)({}, d, { num: r });
                  d.comboDetail &&
                    (s.combo = {
                      comboType: d.comboDetail.comboType,
                      groupList: d.comboDetail.groupList,
                    }),
                    ee(s)
                      .then(() => {
                        t.cloud.emit("onGoodsChange", {
                          goodsList: [Object(a.a)({}, d, { num: r })],
                        }),
                          t.cloud.emit(
                            "onGoodsNumChange",
                            Object(a.a)({}, d, { num: r })
                          ),
                          t.event.emit("updateCartGoodsList", {
                            scene: "numChange",
                          });
                      })
                      .catch((t) => {
                        Object(he.b)(t),
                          this.updateGoodsList({
                            type: "UPDATE_GOODS_NUM",
                            cartId: "",
                            goodsGroupIndex: o,
                            goodsIndex: e,
                            val: d.num,
                          });
                      });
                });
            },
            handleBatchDeleteGoods(e) {
              var { goodsList: o } = e;
              return t.cloud
                .invoke("beforeGoodsDelete", { goodsList: [o] })
                .then(
                  () => (
                    x.a.loading(),
                    (function (t) {
                      var e = (t || []).map((t) =>
                        Object(a.a)({}, te(t), { num: t.num })
                      );
                      return Zt({
                        path: "/wsctrade/cart/deleteBatchList.json",
                        method: "POST",
                        data: { ids: e },
                      });
                    })(o)
                      .then((e) => {
                        if (e)
                          return (
                            t.event.emit("updateCartGoodsList"),
                            t.cloud.emit("onGoodsChange", { goodsList: o }),
                            x.a.clear(),
                            Rt.a.close(),
                            Promise.resolve(!0)
                          );
                        Object(x.a)("请刷新或者重试");
                      })
                      .catch(
                        (t) => (
                          Object(he.b)(t, {
                            message: "删除商品失败，请稍后重试",
                          }),
                          Promise.reject(t)
                        )
                      )
                  )
                );
            },
            handleUpdateGoodsSku: (e) =>
              oe(e)
                .then(
                  () => (
                    t.event.emit("updateCartGoodsList"),
                    t.event.emit("cartGoodsSku:afterSubmit"),
                    t.cloud.emit("onGoodsChange", { goodsList: [e] }),
                    Promise.resolve(!0)
                  )
                )
                .catch((t) => (Object(he.b)(t), Promise.reject(t))),
            handleChangeGoodsSkuCallback(e) {
              var o = this;
              return Object(w.a)(function* () {
                if (o.currentSkuData) {
                  var { skuData: s = {}, pluginsResult: i = {} } = e || {},
                    { currentShowSkuGoods: r, currentSkuData: d } = o,
                    { messages: n, selectedSkuComb: c, selectedNum: u } = s,
                    { id: l } = c,
                    { goodsAttributes: h = {} } = i,
                    p = Object.keys(n).map((t) => n[t]),
                    g = p.length ? JSON.stringify(p) : "",
                    m = Object.values(h).reduce((t, e) => t.concat(e), []),
                    v = {};
                  try {
                    v = JSON.parse(r.messages);
                  } catch (t) {
                    v = {};
                  }
                  var b = Object.keys(v).map((t) => v[t]),
                    f = b.length ? JSON.stringify(b) : "";
                  if (
                    l !== r.skuId ||
                    g !== f ||
                    u !== r.num ||
                    m.join(",") !== (r.propertyIds || []).join(",")
                  ) {
                    var { itemDataModel: I = {} } = d,
                      { comboMark: y = {}, comboDetailModel: k = {} } = I,
                      C = null;
                    if (y.isCombo) {
                      var { comboGroupModels: S = [] } = k,
                        G = S.filter((t) => t.skuId === l);
                      if (null != G && G.length) {
                        var {
                            comboSubItemModels: L = [],
                            goodsComboGroupId: P,
                          } = G[0],
                          O = [];
                        L.forEach((t) => {
                          var { skuRelatedModels: e = [], propModels: o = [] } =
                              t,
                            a = o.reduce((t, e) => {
                              var { textModels: o = [] } = e;
                              return (
                                o.forEach((e) => {
                                  t.push(e.id);
                                }),
                                t
                              );
                            }, []);
                          e.forEach((t) => {
                            var {
                              combineNum: e,
                              itemId: o,
                              price: s,
                              skuId: i,
                            } = t;
                            O.push({
                              goodsId: o,
                              num: e,
                              price: s,
                              propertyIds: a,
                              skuId: i,
                            });
                          });
                        }),
                          (C = {
                            comboType: y.comboType,
                            groupList: [{ id: P, subComboList: O }],
                          });
                      }
                    }
                    return oe(
                      Object(a.a)({}, o.currentShowSkuGoods, {
                        skuId: l,
                        propertyIds: m,
                        messages: g,
                        combo: C,
                      })
                    )
                      .then(() => {
                        t.event.emit("updateCartGoodsList"),
                          t.event.emit("cartGoodsSku:afterSubmit"),
                          t.cloud.emit("onGoodsSkuChange", r),
                          t.cloud.emit("onGoodsChange", { goodsList: [r] });
                      })
                      .catch((t) => {
                        var e;
                        Object(he.b)(t, {
                          message:
                            ((null == t ? void 0 : t.msg) ||
                              (null == t || null == (e = t.data)
                                ? void 0
                                : e.msg) ||
                              "操作失败") + ", 请刷新或者重试",
                        });
                      });
                  }
                  t.event.emit("cartGoodsSku:afterSubmit");
                }
              })();
            },
            handleChangeGoodsSku(e) {
              var o = this;
              (this.currentSkuData = null), (this.currentShowSkuGoods = e);
              var s,
                i = { alias: (null == e ? void 0 : e.alias) || "" };
              e.storeId && (i.offlineId = e.storeId),
                ((s = i), Zt({ data: s, path: "/wsctrade/fetch-sku.json" }))
                  .then(function (s) {
                    var i, r, d;
                    void 0 === s && (s = {}),
                      (s = T.a.toCamelCase(s)),
                      (o.currentSkuData = s);
                    var n =
                        (null == (i = s.itemActivitySpuModels)
                          ? void 0
                          : i.length) > 0
                          ? s.itemActivitySpuModels[0]
                          : {},
                      c = {
                        sku: Object(a.a)({}, s, n, {
                          priceTags: n.priceTitle
                            ? [{ text: n.priceTitle }]
                            : [],
                        }),
                        goods: {
                          id: e.goodsId,
                          title: e.title,
                          picture: e.imgUrl,
                          alias: e.alias,
                          propertyIds: e.propertyIds,
                        },
                        skuConfig: { buyText: "确定", skuSence: "buy" },
                        messageConfig: {
                          initialMessages: JSON.parse(e.messages || "{}"),
                        },
                        baseConfig: { isShowSkuStepper: !1 },
                      },
                      u =
                        null !=
                        (r =
                          null == (d = s.list)
                            ? void 0
                            : d.find((t) => t.id === e.skuId))
                          ? r
                          : {};
                    t.process.invoke(
                      "setSkuInfo",
                      Object(a.a)({}, c, {
                        initialSku: Object(a.a)({}, u, { selectedNum: e.num }),
                        event: {
                          skuScene: "buy",
                          skuOptions: { resetSku: !0 },
                        },
                        goodsAttributes: { reset: !0 },
                      })
                    );
                  })
                  .catch((t) => {
                    Object(he.b)(t, {
                      message: "商品信息获取失败，请稍后重试",
                    });
                  });
            },
            handleHideSkuShow() {
              (this.currentSkuData = null), (this.currentShowSkuGoods = null);
            },
          };
        },
        ke = [pe, fe, Ie].reduce((t, e) => {
          return (
            void 0 === (o = t) && (o = {}),
            void 0 === (s = e) && (s = {}),
            {
              state: Object(a.a)({}, o.state, s.state),
              getters: Object(a.a)({}, o.getters, s.getters),
              actions: Object(a.a)({}, o.actions, s.actions),
            }
          );
          var o, s;
        }, {});
      function Ce(t) {
        var e = Object(Lt.a)({
          state: () => Object(a.a)({}, ke.state),
          getters: Object(a.a)({}, ke.getters),
          actions: Object(a.a)(
            {},
            ke.actions,
            pe.getActions(t),
            fe.getActions(t),
            Ie.getActions(),
            ye(t)
          ),
        });
        return (
          ((t) => {
            pe.registerWatchs(t);
          })(e),
          e
        );
      }
      class Se {
        constructor(t) {
          (this.ctx = t.ctx),
            (this.store = Ce(this.ctx)),
            (this.ctx.data.isValidGoodsLoadFinish = !1),
            this.initData(),
            this.initCtxData(),
            this.initCloudData(),
            this.initProcess(),
            this.initEvents();
        }
        onPageShow() {
          this.store.updateListObNeedReLoad(!0);
        }
        initData() {
          Object(N.b)(this, {
            hasResponseValidGoods: (t) => {
              t || (this.ctx.data.isValidGoodsLoadFinish = !0);
            },
          });
        }
        initCtxData() {
          Object(Lt.c)(this, [
            "offlineId",
            "shopCart",
            "editMode",
            "themeCSS",
            "themeColors",
            "themeStyle",
            "themeTag",
            "canSelectPresent",
            "hasResponseValidGoods",
          ]);
        }
        initEvents() {
          Object(N.d)(this, {
            "cartGoodsSku:submit": this.store.handleChangeGoodsSkuCallback,
            "cartPresentSku:submit": () => {
              var t;
              null != (t = this.store.currentShowSkuGoods) &&
                t.goodsData &&
                this.store.handleChangePresentSkuCallback(
                  this.store.currentShowSkuGoods
                );
            },
            "cartPresentSku:selected": this.store.handlePresentSkuSelect,
            "cartGoodsSku:hide": this.store.handleHideSkuShow,
            toggleCheckedAll: this.store.handleToggleCheckedAll,
            deleteCartItems: () => {
              var t,
                e =
                  (null == (t = this.ctx.data) ? void 0 : t.checkedGoodsList) ||
                  [];
              return Rt.a
                .confirm({
                  message: "确定删除所选店铺的" + e.length + "个商品？",
                })
                .then(() => {
                  this.store.handleBatchDeleteGoods({ goodsList: e });
                })
                .catch(() => {
                  Rt.a.close();
                });
            },
            presentPopupClose: this.store.handleChangePresentPopup,
            presentPopupConfirm: this.store.handlePickPresent,
            onPullDownRefresh: this.store.handlePullDownRefresh,
            stopPullDownRefresh: this.store.handleStopLoading,
          });
        }
        initProcess() {
          Object(N.e)(this, {
            emptyCart: () =>
              this.ctx.process
                .invokePipe("beforeCartClearHook", {
                  clearGoodsType: ["validGoods"],
                })
                .then(() => {
                  var { shopList: t = [] } = this.ctx.data,
                    e = [];
                  return (
                    t.forEach((t) => {
                      var { goodsGroupList: o = [] } = t;
                      o.forEach((t) => {
                        var { goodsList: o = [] } = t;
                        e = e.concat(o);
                      });
                    }),
                    this.store.handleBatchDeleteGoods({ goodsList: e })
                  );
                }),
            deleteCartGoods: (t) => {
              var { goods: e, isActivity: o } = t;
              return this.store.handleDeleteGoods({ goods: e, isActivity: o });
            },
            batchDeleteCartGoods: (t) => {
              var { goodsList: e } = t;
              return this.store.handleBatchDeleteGoods({ goodsList: e });
            },
            selectCartGoods: (t) => {
              var { rangeType: e, goods: o, kdtId: a, isActivity: s } = t;
              return this.store.handleToggleSelectCartGoods({
                rangeType: e,
                goods: o,
                kdtId: a,
                isActivity: s,
                type: "add",
              });
            },
            cancelSelectCartGoods: (t) => {
              var { rangeType: e, goods: o, kdtId: a, isActivity: s } = t;
              return this.store.handleToggleSelectCartGoods({
                rangeType: e,
                goods: o,
                kdtId: a,
                isActivity: s,
                type: "remove",
              });
            },
            setCartGoodsNum: (t) => {
              var { val: e, goods: o, isActivity: a } = t;
              return this.store.handleSetCartGoodsNum({
                val: e,
                goods: o,
                isActivity: a,
              });
            },
            reselectGoods: (t) => this.store.handleUpdateGoodsSku(t),
            changeGoodsSku: (t) => this.store.handleChangeGoodsSku(t),
            showCartActivityPopup: (t) =>
              this.store.changeCartActivityPopupShow(t),
            showExchangeModal: (t) => this.store.showExchangeModal(t),
            updateSelectGoods: (t) => se(t),
          });
        }
        initCloudData() {}
      }
      Se.widgets = {
        ValidGoods: Ft.a,
        Present: zt.a,
        GoodsGroupItem: Kt.a,
        GoodsItem: Yt.a,
        Goods: Jt.a,
        ComboDetailPopup: Qt.a,
      };
      var Ge = o("Dfji"),
        Le = o.n(Ge),
        Pe = o("2ndC"),
        Oe = o.n(Pe),
        we = o("Dp64"),
        Te = o.n(we),
        xe = o("IVNB"),
        De = o.n(xe),
        je = o("11l0"),
        Ee = o.n(je);
      class Ae {
        constructor(t) {
          (this.ctx = t.ctx), this.initCloudData();
        }
        initCloudData() {}
      }
      Ae.widgets = {
        Goods: Oe.a,
        GoodsBlock: Te.a,
        InvalidGoods: Le.a,
        InvalidMask: Ee.a,
        InvalidGoodsBlock: De.a,
      };
      var _e = o("36wS"),
        Ne = o.n(_e),
        Me = o("qf5B"),
        Be = o("Pz1p"),
        Re = {
          dataLoaded: !1,
          editMode: Me.a.SUBMIT,
          isCheckedAll: !1,
          loading: !1,
          submitData: {},
          showEmptyCart: !1,
          checkedGoodsList: [],
          separateBuy: { show: !1, type: "", data: [] },
          themeCSS: "",
          themeStyle: "",
          presentData: { IS_SELECT_PRESENT: 0, SELECTED_PRESENTS: [] },
          isDrugShop: !1,
          safeBottom: Object(Be.b)(),
          isTabPage: !1,
          shopCart: {},
          isHasSelfFetchGoodsSelected: !1,
          selectedPromotions: null,
          customButtonText: "",
        },
        Ue = o("NHEX"),
        Fe = o.n(Ue);
      function Ve(t, e) {
        if (
          ((d = typeof (r = t)),
          null != r && ("object" === d || "function" === d))
        )
          for (var o = Object.keys(t), a = -1, s = o.length; ++a < s; ) {
            var i = o[a];
            if (e(t[i], i, t)) break;
          }
        var r, d;
        return t;
      }
      function ze(t, e) {
        for (var o = -1, a = t.length; ++o < a && !1 !== e(t[o], o, t); );
        return t;
      }
      var He = {
          popupBottom() {
            return this.isTabPage ? 49 : 0;
          },
          iconName() {
            return this.isCheckedAll ? "checked" : "circle";
          },
          wrapperStyle() {
            return "bottom: " + this.popupBottom + "px; " + this.themeCSS;
          },
          rootClass() {
            return {
              root:
                "custom-class cart-bottom " +
                (this.safeBottom ? "cart-bottom--safe" : ""),
            };
          },
          iconCustomClass() {
            return this.isCheckedAll ? "icon--checked" : "icon--unchecked";
          },
          submitBtnClass() {
            return this.totalNum ? "pay-btn" : "pay-btn--disabled";
          },
          totalNum() {
            return this.checkedGoodsList.length;
          },
          btnName() {
            return this.isEditMode ? "删除" : "结算";
          },
          isReceiveBestCoupon() {
            var { shopCart: t = {} } = this,
              { promotionDetails: e = [], showPromotionDetail: o = !1 } = t,
              a = e.filter((t) => 105 === t.appType);
            return !a.length || a[0].benefitId || !o;
          },
          cartBottomData() {
            var t,
              e,
              { shopCart: o } = this,
              a = {
                num: 0,
                totalPrice: 0,
                desc: "不含运费",
                totalDiscount: 0,
                goodsTotalPrice: 0,
                promotionDetails: [],
                isShowPromotionDetail: !1,
              },
              s = o,
              i = Fe()(s, "selectedPreferencePrice", 0),
              r = Fe()(s, "selectedDiscountFee", 0);
            return (
              (a.promotionDetails = s.promotionDetails || []),
              (a.isShowPromotionDetail = s.showPromotionDetail),
              (a.totalDiscount =
                a.isShowPromotionDetail && a.promotionDetails.length ? r : i),
              (this.isShowDiscountBar =
                !!a.promotionDetails.length && a.isShowPromotionDetail),
              (t = this.checkedGoodsList),
              (e = (t) => {
                a.num += 1;
                var e = t.ingredientInfoList || [],
                  o = 0;
                e.length > 0 && (o = e.reduce((t, e) => t + e.payPrice, 0)),
                  this.isShowDiscountBar
                    ? (a.goodsTotalPrice += (t.originPrice + o) * t.num)
                    : (a.goodsTotalPrice += (t.payPrice + o) * t.num),
                  0 === t.tariffRule && (a.desc = "不含运费和进口税");
              }),
              (Array.isArray(t) ? ze : Ve)(t, e),
              (a.totalPrice = Math.max(a.goodsTotalPrice - a.totalDiscount, 0)),
              a
            );
          },
          isEditMode() {
            return this.editMode === Me.a.EDIT;
          },
          recommendPromotionInfoList() {
            var { shopCart: t = {} } = this,
              { recommendPromotionInfoList: e = [] } = t;
            return e[0] || {};
          },
        },
        Ke = o("w2Y9"),
        We = o.n(Ke),
        Ye = o("w4n3"),
        qe = o.n(Ye),
        Je = "/wsctrade/order/book.json",
        Xe = "/wsctrade/cart/getVoucher.json",
        Qe = "/wsctrade/drug/isInWhiteList.json",
        $e = "/wsctrade/cart/reselectGoodsActivity.json";
      function Ze(t, e, o) {
        void 0 === o && (o = "POST");
        return Object(A.default)({ path: t, data: e, method: o, config: {} });
      }
      function to(t, e, o) {
        void 0 === o && (o = "POST");
        return Object(A.requestV2)({ path: t, data: e, method: o, config: {} });
      }
      var eo = {
        postBookKey: function (t) {
          return to(Je, t);
        },
        getVoucher: function (t) {
          return Ze(Xe, t, "POST");
        },
        getDrugWhiteList: function () {
          return Ze(Qe, {}, "GET");
        },
        reselectGoodsActivity: function (t) {
          return to($e, t, "POST");
        },
      };
      o("xyw3");
      function oo(t) {
        void 0 === t && (t = []);
        var e = [];
        return (
          t.forEach((t) => {
            Fe()(t, "propValueList", []).forEach((t) => {
              e.push(t.propValueId);
            });
          }),
          e
        );
      }
      var ao = (t) => {
          if (!t) return {};
          var e = Object(me.b)("pick_present_activity_id_map") || {},
            o = Object.keys(e).filter((t) => /\d+/.test(t));
          return (
            (t.SELECTED_PRESENTS = t.SELECTED_PRESENTS.filter((t) =>
              o.includes(String(t.activityId))
            )),
            t
          );
        },
        so = (t) => {
          if (!t) return {};
          var { activityType: e, activityId: o } = t;
          return e
            ? {
                APPOINT_PROMOTION_INSTANCES: JSON.stringify([
                  { activityId: o, umpType: e, appointUse: !0 },
                ]),
              }
            : {};
        };
      var io = o("mM1a"),
        ro = function (t) {
          return {
            changeSubmitText(t) {
              this.customButtonText = t;
            },
            changeDiscountDetailVisible(t) {
              this.discountDetailVisible = t;
            },
            updatePopupBottom(t) {
              this.popupBottom = t;
            },
            handleCheckAllGoods() {
              t.event.emit("toggleCheckedAll");
            },
            showPromotionPopup() {
              t.event.emit("reward:show", { show: !0, scene: "cart" });
            },
            handleBtnTap() {
              if (this.totalNum && !this.loading)
                if (this.isEditMode) t.event.emit("deleteCartItems");
                else {
                  var e = this.checkedGoodsList.map((t) =>
                    Object(a.a)({}, t, qe()(t))
                  );
                  Promise.all([
                    t.cloud.invoke("handleCartSubmitBeforeAsync", { list: e }),
                    t.cloud.invoke("beforeOrderCreate"),
                  ]).then(() => {
                    this.buyWithGoods({ list: this.checkedGoodsList });
                  });
                }
            },
            isDrugGoodsValid() {
              var t = !0,
                e = {};
              return (
                this.checkedGoodsList.forEach((o) => {
                  var a, s;
                  "1" ===
                    (null == o ||
                    null == (a = o.bizExtension) ||
                    null == (s = a.cartBizMark)
                      ? void 0
                      : s.IS_PRESCRIPTION_DRUG) &&
                    ((e[o.goodsId] = (e[o.goodsId] || 0) + o.num),
                    e[o.goodsId] > 1e4 &&
                      (Object(x.a)("为保障用药安全，每种处方药不得超过10000件"),
                      (t = !1)));
                }),
                Object.keys(e).length > 1e4 &&
                  (Object(x.a)("一笔订单不得超过10000种处方药"), (t = !1)),
                t
              );
            },
            handleSeparateBuy(t) {
              var { list: e = [], expressType: o } = t;
              this.buyWithGoods({ list: e, expressType: o });
            },
            sendBestCoupon() {
              return new Promise((t) => {
                try {
                  var e = this.cartBottomData.promotionDetails.filter(
                    (t) => 105 === t.appType
                  );
                  eo.getVoucher({
                    activityId: e[0].activityIds[0],
                    bizName: "shopping_cart",
                    source: "shopping_cart_auto_take",
                  })
                    .then(() => {
                      t("已为你领取1张优惠券，下单享优惠");
                    })
                    .catch((e) => {
                      t(e.msg || "领券失败");
                    });
                } catch (e) {
                  t("");
                }
              });
            },
            buyWithGoods(e) {
              var o = this;
              return Object(w.a)(function* () {
                var { list: s = [], expressType: i } =
                  void 0 === e ? { list: [] } : e;
                o.loading = !0;
                var r,
                  d,
                  n,
                  c,
                  u,
                  l,
                  h = (function (t) {
                    var e = {
                        HAITAO: { title: "海淘商品", list: [], totalPrice: 0 },
                        PERIOD_BUY: {
                          title: "周期购商品",
                          list: [],
                          totalPrice: 0,
                        },
                        COMMON: { title: "普通商品", list: [], totalPrice: 0 },
                        COURSE: { title: "课程", list: [], totalPrice: 0 },
                      },
                      o = [];
                    return (
                      Object(M.a)(t, (t) => {
                        var o = Fe()(t, "settlementRule.settlementMark");
                        e[o] || (o = "COMMON"),
                          (e[o].totalPrice += t.payPrice * t.num),
                          e[o].list.push(t);
                      }),
                      Object(M.a)(e, (t) => {
                        t.list.length && o.push(t);
                      }),
                      o.length > 1
                        ? {
                            needSeparate: !0,
                            hasCourse: o.some((t) => "课程" === t.title),
                            data: o,
                          }
                        : { needSeparate: !1 }
                    );
                  })(s);
                if (
                  (h.hasCourse &&
                    t.logger.log({
                      et: "click",
                      ei: "cart_settlement_click",
                      en: "教育商品购物车结算",
                    }),
                  h.needSeparate)
                )
                  return (
                    (o.loading = !1),
                    void (o.separateBuy = {
                      show: !0,
                      type: h.hasCourse ? Me.b.COURSE_MIX_TYPE : Me.b.MIX_TYPE,
                      data: h.data,
                    })
                  );
                if (
                  ((d = {
                    NORMAL_EXPRESS: {
                      title: "快递发货",
                      expressType: 0,
                      list: [],
                    },
                    LOCAL_DELIVERY: {
                      title: "同城配送",
                      expressType: 2,
                      list: [],
                    },
                    SELF_TAKE: { title: "到店自提", expressType: 1, list: [] },
                  }),
                  (n = []),
                  (c = (r = s).length),
                  (u = !0),
                  (l = 0),
                  Object(M.a)(r, (t) => {
                    var { logisticsTypeList: e } = t;
                    Array.isArray(e) &&
                      0 === e.length &&
                      (l++,
                      Object(M.a)(d, (e) => {
                        e.list.push(t);
                      })),
                      Object(M.a)(e, (e) => {
                        var o = d[e];
                        o && o.list.push(t);
                      });
                  }),
                  Object(M.a)(d, (t) => {
                    var e = t.list.length,
                      o = 0;
                    (e > l || e === c) &&
                      (Object(M.a)(t.list, (t) => {
                        o += t.payPrice * t.num;
                      }),
                      (t.totalPrice = o),
                      n.push(t)),
                      e === c && (u = !1);
                  }),
                  (h = { needSeparate: u, data: n }).needSeparate)
                )
                  return (
                    (o.loading = !1),
                    void (o.separateBuy = {
                      show: !0,
                      type: Me.b.LOGISTICS,
                      data: h.data,
                    })
                  );
                if (o.submitData.isNewHopeShop) {
                  var p = (function (t) {
                    return (
                      void 0 === t && (t = []),
                      t.map((t) => {
                        var e = "",
                          o = "";
                        try {
                          (e = JSON.parse(t.extraAttribute).bizData || ""),
                            (o = JSON.parse(t.messages || null));
                        } catch (t) {}
                        var a = {
                          activityAlias: "",
                          activityId: 0,
                          activityType: 0,
                          message: o,
                          num: t.num,
                          price: t.payPrice,
                          skuId: t.skuId,
                          goodsId: t.goodsId,
                          kdtId: t.kdtId,
                          bizTracePointExt: e,
                          propertyIds: oo(t.properties),
                        };
                        return (
                          24 == +t.activityType &&
                            Object.assign(a, {
                              activityId: t.activityId,
                              activityType: 24,
                            }),
                          a
                        );
                      })
                    );
                  })(s);
                  p.length
                    ? ((o.separateBuy.show = !1),
                      o.goOrderNewShop({ goodsList: p, expressType: i }))
                    : Object(x.a)("请选择商品");
                } else {
                  var g = (function (t, e, o) {
                    void 0 === t && (t = []), void 0 === e && (e = {});
                    var s = { canyinChannel: 1, canyinIds: [] },
                      i = [],
                      r = [],
                      d = [],
                      n = [
                        {
                          kdtId: Fe()(t, "[0].kdtId"),
                          storeId: Fe()(t, "[0].storeId", 0),
                        },
                      ];
                    return (
                      t.forEach((t) => {
                        var e, o, n;
                        try {
                          n = JSON.parse(t.extraAttribute || "{}").bizData;
                        } catch (t) {}
                        var c = {
                            kdtId: t.kdtId,
                            goodsId: t.goodsId,
                            skuId: t.skuId,
                            propertyIds: t.propertyIds || [],
                            activityId: t.activityId,
                            activityType: +t.activityType || 0,
                          },
                          u = Fe()(t, "bizExtension.cartBizMark.tpps"),
                          { birthdayRelation: l = {} } = t,
                          h = Object(a.a)({}, c, {
                            storeId: t.storeId || 0,
                            price: t.payPrice || 0,
                            num: t.limitNum
                              ? Math.min(t.num, t.limitNum)
                              : t.num,
                            itemMessage: t.messages || "",
                            extensions: {
                              tpps: u,
                              CART_ID: t.cartId,
                              BIRTHDAY_RELATION_NET_ORDER_MARK:
                                l.birthdayRelationNetOrderMark,
                              RELATION_BLESSING: l.relationBlessing,
                              RELATION_TYPE_ID: l.relationTypeId,
                              RELATION_TYPE_NAME: l.relationTypeName,
                            },
                            isSevenDayUnconditionalReturn:
                              t.isSevenDayUnconditionalReturn || !1,
                          });
                        if (
                          null != t &&
                          null != (e = t.comboDetail) &&
                          null != (o = e.groupList) &&
                          o.length
                        ) {
                          var p = [];
                          t.comboDetail.groupList.forEach((t) => {
                            t.subComboList.forEach((t) => {
                              var {
                                  goodsId: e,
                                  groupId: o,
                                  num: a,
                                  skuId: s,
                                  properties: i = [],
                                } = t,
                                r = i.map((t) => t.valId);
                              p.push({
                                goodsId: e,
                                groupId: o,
                                num: a,
                                skuId: s,
                                propertyIds: r,
                              });
                            });
                          }),
                            (h.combo = {
                              comboType: t.comboDetail.comboType,
                              subComboList: p,
                            });
                        }
                        t.deliverTime && (h.deliverTime = t.deliverTime);
                        var g = Fe()(
                          t,
                          "bizExtension.cartBizMark.promotionMark",
                          ""
                        );
                        g && (h.promotionMark = g);
                        var m = Object(a.a)({}, c, {
                            bizTracePointExt: n,
                            cartCreateTime: t.createdTime,
                            cartUpdateTime: t.updatedTime,
                          }),
                          v = Object(a.a)({}, c, {
                            activityAlias: t.activityAlias,
                          });
                        i.push(h),
                          r.push(m),
                          d.push(v),
                          t.canyinId && s.canyinIds.push(t.canyinId),
                          (t.ingredientInfoList || []).forEach((e) => {
                            i.push({
                              kdtId: e.kdtId,
                              goodsId: e.goodsId,
                              skuId: e.skuId,
                              num: t.num,
                              price: e.price,
                              extensions: { tpps: u },
                            }),
                              d.push({
                                kdtId: e.kdtId,
                                goodsId: e.goodsId,
                                skuId: e.skuId,
                              });
                          });
                      }),
                      {
                        config: s,
                        items: i,
                        sellers: n,
                        source: { itemSources: r, orderFrom: "cart" },
                        ump: { activities: d },
                        extensions: Object(a.a)({}, ao(e), so(o)),
                      }
                    );
                  })(s, o.presentData, o.selectedPromotions);
                  if (!o.isReceiveBestCoupon) {
                    var m = yield o.sendBestCoupon();
                    g.config.preToastDesc = m;
                  }
                  g.items.length
                    ? ((o.separateBuy.show = !1),
                      o.goOrder({
                        goToBuyData: g,
                        expressType: i,
                        hasCourse: s.some((t) => 31 === t.goodsType),
                      }))
                    : Object(x.a)("请选择商品");
                }
              })();
            },
            goOrderNewShop(e) {
              var { goodsList: o, expressType: a } = e;
              t.logger.log({
                et: "click",
                ei: "cartpage_buy",
                en: "结算购物车",
                si: t.data.kdtId,
              });
              var s = { type: "goods", goods_list: o };
              "number" == typeof a && (s.expressTypeChoice = a),
                (this.loading = !1);
              var i = t.lambdas.setDb(s);
              t.process.invoke("navigateFromCart", {
                link: We.a.add("/packages/order/index", {
                  dbid: i,
                  orderFrom: "cart",
                }),
              });
            },
            handlePrefetchDefaultSelfFetch(e) {
              var a = e.items.map((t) => ({
                  goodsId: null == t ? void 0 : t.goodsId,
                  skuId: null == t ? void 0 : t.skuId,
                  num: null == t ? void 0 : t.num,
                })),
                { kdtId: s } = t.data;
              o.e("packages/async-main/chunk")
                .then(o.bind(null, "7y9c"))
                .then((t) => {
                  var { fetchDefaultSelffetchPoint: e } = t;
                  e({ kdtId: s, items: a, firstOneFill: !0 });
                });
            },
            goOrder(e) {
              var o = this;
              return Object(w.a)(function* () {
                var { goToBuyData: a, expressType: s, hasCourse: i } = e;
                t.logger.log({
                  et: "click",
                  ei: "cartpage_buy",
                  en: "结算购物车",
                  si: t.data.kdtId,
                }),
                  "number" == typeof s &&
                    (a.delivery = { expressTypeChoice: +s });
                try {
                  o.isHasSelfFetchGoodsSelected &&
                    o.handlePrefetchDefaultSelfFetch(a);
                } catch (t) {}
                return eo
                  .postBookKey(a)
                  .then(
                    (function () {
                      var e = Object(w.a)(function* (e) {
                        var { bookKey: a } = e;
                        (t.data.bookKey = a),
                          setTimeout(() => {
                            o.loading = !1;
                          }, 1500);
                        var s =
                          "https://cashier.youzan.com/pay/wsctrade_buy?book_key=" +
                          a +
                          "&showwxpaytitle=1&kdt_id=" +
                          t.data.kdtId;
                        if (!o.isDrugShop || !(yield o.isInDrugWhiteList()))
                          return i
                            ? ((s =
                                "https://cashier.youzan.com/pay/wscvis_buy?orderFrom=cart&book_key=" +
                                a +
                                "&showwxpaytitle=1&kdt_id=" +
                                t.data.kdtId),
                              void t.process.invoke("navigateFromCart", {
                                link: s,
                              }))
                            : void t.process.invoke("navigateToTradeBuy", {
                                navigateParams: {
                                  bookKey: a,
                                  orderFrom: "cart",
                                },
                              });
                        t.process.invoke("navigateFromCart", { link: s });
                      });
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  )
                  .catch(function (t) {
                    void 0 === t && (t = {}),
                      (o.loading = !1),
                      Object(he.b)(t, { message: "结算失败，请稍后重试" });
                  });
              })();
            },
            isInDrugWhiteList: () =>
              Object(w.a)(function* () {
                return new Promise((t, e) => {
                  var { scene: o } = Object(io.a)(),
                    a = (getCurrentPages && getCurrentPages()) || [],
                    s = a[a.length - 1] || { route: "" },
                    { route: i } = s;
                  1154 !== o &&
                  (i.indexOf("trade-buy/order/buy/index") > -1 ||
                    i.indexOf("goods-v2/detail/index") > -1)
                    ? eo
                        .getDrugWhiteList()
                        .then(function (e) {
                          void 0 === e && (e = { data: !1 }),
                            e.data ? t(!0) : t(!1);
                        })
                        .catch(() => {
                          t(!1);
                        })
                    : t(!1);
                });
              })(),
            handleCloseSeparateBuyPopup() {
              this.separateBuy.show = !1;
            },
            selectBestPrice() {
              var e = this.checkedGoodsList.map((t) => ({
                activityId: 0,
                activityType: "0",
                cartId: t.cartId,
                goodsId: t.goodsId,
                skuId: t.skuId,
                kdtId: t.kdtId,
              }));
              eo.reselectGoodsActivity({ items: e })
                .then((e) => {
                  e
                    ? t.event.emit("updateCartGoodsListWithActivity", {
                        selectedPromotions: {
                          activityId: 0,
                          activityType: "0",
                        },
                      })
                    : Object(he.b)(e.msg || e, {
                        message: "使用最佳优惠失败，请稍后重试",
                      });
                })
                .catch((t) => {
                  Object(he.b)(t, { message: "使用最佳优惠失败，请稍后重试" });
                });
            },
          };
        };
      class no {
        constructor(t) {
          var e;
          (this.ctx = t.ctx),
            (this.store =
              ((e = this.ctx),
              Object(Lt.a)({
                state: () => Object(a.a)({}, Re),
                getters: Object(a.a)({}, He),
                actions: Object(a.a)({}, ro(e)),
              }))),
            this.initMapCtxData(),
            this.initCloudData(),
            this.initProcess(),
            Object(Lt.e)(this, ["cartBottomData"]);
        }
        initMapCtxData() {
          Object(Lt.c)(this, [
            "showEmptyCart",
            "submitData",
            "editMode",
            "checkedGoodsList",
            "isCheckedAll",
            "presentData",
            "themeCSS",
            "themeStyle",
            "isDrugShop",
            "isTabPage",
            "dataLoaded",
            "shopCart",
            "isHasSelfFetchGoodsSelected",
            "selectedPromotions",
          ]);
        }
        initProcess() {
          Object(N.e)(this, {
            createAndGoOrder: () => this.store.handleBtnTap(),
            changeSubmitText: (t) => this.store.changeSubmitText(t),
            changeDiscountDetailVisible: (t) =>
              this.store.changeDiscountDetailVisible(t),
          });
        }
        initCloudData() {}
      }
      no.widgets = { Submit: Ne.a };
      var co = o("/REv"),
        uo = o.n(co);
      class lo {
        constructor(t) {
          this.ctx = t.ctx;
        }
      }
      lo.widgets = { OrderKeep: uo.a };
      var ho = o("YHox"),
        po = o.n(ho),
        go = o("DLsp"),
        mo = o.n(go),
        vo = o("mBgG"),
        bo = o.n(vo),
        fo = o("sAuq"),
        Io = {
          hasValidGoods: !0,
          themeCSS: "",
          themeColors: {},
          themeStyle: "",
          couponList: [],
          checkedGoodsList: [],
          couponPopupShow: !1,
          dataLoaded: !1,
        },
        yo = {
          showCouponBar() {
            return this.hasValidGoods && this.couponList.length > 0;
          },
          topCouponList() {
            var t = this.couponList.slice(0, 3);
            if (this.couponList.length >= 3) {
              var e = t.reduce(
                (t, e) => t + e.use_threshold_and_value_copywriting,
                ""
              );
              e.replace(/[^\x00-\xff]/g, "__").length > 32 &&
                (t = t.slice(0, 2));
            }
            return t;
          },
          themeGeneralAlpha10Color() {
            var { general: t } = this.themeColors;
            return q()(t, 0.1);
          },
          hasCheckedGoods() {
            return this.checkedGoodsList.length;
          },
        };
      class ko {
        constructor(t) {
          var e;
          (this.ctx = t.ctx),
            (this.store =
              ((e = {
                changeCouponPopupShow(t) {
                  this.couponPopupShow = t;
                },
              }),
              Object(Lt.a)({
                state: () => Object(a.a)({}, Io),
                getters: yo,
                actions: e,
              }))),
            this.initData(),
            this.initCloudData(),
            this.initEvents();
        }
        initData() {
          var t;
          (this.ctx.data.couponList = []),
            null ==
              (t = Object(fo.a)({ kdtId: this.ctx.data.kdtId, limit: 20 })) ||
              t.then((t) => {
                this.ctx.data.couponList = t || [];
              }),
            Object(Lt.c)(this, [
              "themeCSS",
              "couponList",
              "hasValidGoods",
              "themeColors",
              "themeStyle",
              "checkedGoodsList",
              "dataLoaded",
            ]);
        }
        initEvents() {
          Object(N.d)(this, {
            showCouponList: () => this.store.changeCouponPopupShow(!0),
            closeCouponList: () => this.store.changeCouponPopupShow(!1),
          });
        }
        initCloudData() {}
      }
      ko.widgets = {
        CouponBar: po.a,
        CouponListPopup: mo.a,
        CouponBarBlock: bo.a,
      };
      var Co = o("n4ao"),
        So = o.n(Co);
      class Go {
        constructor(t) {
          this.ctx = t.ctx;
        }
      }
      Go.widgets = { PresentPopup: So.a };
      var Lo = o("1lan"),
        Po = o.n(Lo),
        Oo = o("X197"),
        wo = o.n(Oo),
        To = o("/xs4"),
        xo = o.n(To),
        Do = o("lSsU"),
        jo = o.n(Do);
      class Eo {
        constructor(t) {
          this.ctx = t.ctx;
        }
      }
      Eo.widgets = {
        PresentGoods: Po.a,
        Price: wo.a,
        InvalidMask: xo.a,
        CouponItem: jo.a,
      };
      var Ao = o("YehF"),
        _o = getApp();
      function No(t) {
        var e = Object(a.a)(
          {
            useVersion2: !0,
            defaultPointDeductEffect: !0,
            useNewCoupon: !0,
            isSupportDefaultSelfFetch: !0,
            useOrderKeep: !0,
            isOptimalSolution: !0,
            isOverlyingCoupon: !0,
            isNewMemberFlow: !0,
          },
          t
        );
        return _o.getShopInfo().then((t) => {
          Object(Ao.e)(t.shopMetaInfo) &&
            Object.assign(e, { isSupportSpecialPeriodCost: !0 });
          var { scene: o } =
            (null == g.default.$native.getEnterOptionsSync
              ? void 0
              : g.default.$native.getEnterOptionsSync()) ||
            (null == g.default.$native.getLaunchOptionsSync
              ? void 0
              : g.default.$native.getLaunchOptionsSync()) ||
            {};
          return (
            o && (e.scene = o),
            Object(A.default)({
              origin: "cashier",
              withCredentials: !0,
              path: "/pay/wsctrade/order/buy/prepare-by-book-key.json",
              data: e,
            })
          );
        });
      }
      class Mo {
        constructor(t) {
          (this.ctx = t.ctx),
            this.ctx.process.define(
              "navigateToTradeBuy",
              this.navigateToTradeBuy.bind(this)
            );
        }
        navigateToTradeBuy(t) {
          var { navigateParams: e, requestParams: o = {} } = t;
          Object(_.e)().then((t) => {
            var { bookKey: s = "" } = e,
              i = Object(a.a)({ bookKey: s }, o),
              r = Object(a.a)({}, e);
            Object(D.c)({
              navigatePath: "trade-buy",
              navigateCb: (e) => {
                t.order && (r.prefetchKey = e),
                  Object(_.f)({ pageType: _.b.ORDER, query: r });
              },
              prefetchCb: () => No(i),
            });
          });
        }
      }
      Mo.lambdas = {
        getTradeBuyPreFetchQuery: function () {
          var t = _o.tradeBuyPreFetchQuery
            ? Object(a.a)({}, _o.tradeBuyPreFetchQuery)
            : null;
          return (_o.tradeBuyPreFetchQuery = null), t;
        },
        getTradeBuyPageData: function (t) {
          var { prefetchKey: e, params: o } = t;
          return Object(D.b)({ prefetchKey: e, normalFetchCb: () => No(o) });
        },
      };
      var Bo = o("nmlL"),
        Ro = o.n(Bo),
        Uo = {
          kdtId: 0,
          offlineId: 0,
          couponAddOnData: {},
          originData: {},
          canUseCouponAddOn: !1,
          themeColors: {},
          themeStyle: "",
          shopCart: {},
          coupons: [],
          checkedGoodsList: [],
        },
        Fo = {
          addOnCopywriting() {
            var t;
            return (
              (null == (t = this.couponAddOnData)
                ? void 0
                : t.addOnCopywriting) || ""
            );
          },
          addOnPromotionStr() {
            var t;
            return (
              (null == (t = this.couponAddOnData)
                ? void 0
                : t.addOnPromotionStr) || "优惠券"
            );
          },
          couponNotFullyFetched() {
            var t, e;
            return null == (t = this.couponAddOnData) ||
              null == (e = t.addOnVoucherDetailDTOList)
              ? void 0
              : e.some((t) => !t.couponId);
          },
          hasCheckedGoods() {
            return this.checkedGoodsList.length;
          },
        },
        Vo = o("P09H"),
        zo = o("qYBx");
      var Ho = ["allAbleCartGoods"],
        Ko = function (t) {
          return {
            initLogger(t) {
              this.loggers = t;
            },
            getCouponAddon(e) {
              var o = this;
              return Object(w.a)(function* () {
                var a;
                void 0 === e && (e = 0), e && (e = t.data.kdtId);
                var s = { kdtId: e, storeId: t.data.offlineId };
                t.data.selectedPromotions &&
                  (s.selectedPromotions = JSON.stringify(
                    t.data.selectedPromotions
                  ));
                var i = yield Object(Vo.a)(s);
                if (i) {
                  var { couponAddOnData: r = {}, canUseCouponAddOn: d = {} } =
                    i;
                  (o.canUseCouponAddOn = d),
                    (t.data.canUseCouponAddOn = d),
                    (o.couponAddOnData = r),
                    (o.originData = i),
                    (null != i &&
                      null != (a = i.couponAddOnData) &&
                      a.addOnCopywriting) ||
                      (o.gatherBarExposed = !1),
                    o.handleCouponAddOnDataChange(r);
                }
              })();
            },
            handleCouponAddOnDataChange(t) {
              var e, o;
              !this.gatherBarExposed &&
                null != t &&
                t.addOnCopywriting &&
                (null == (o = this.loggers) ||
                  null == o.logGatherBarExpo ||
                  o.logGatherBarExpo(),
                (this.gatherBarExposed = !0));
              if (
                (null == t || null == (e = t.addOnVoucherDetailDTOList)
                  ? void 0
                  : e.length) > 0
              ) {
                var s,
                  i = (null == t ? void 0 : t.addOnVoucherDetailDTOList) || [];
                if (
                  ((i = i.map((t) => {
                    var { allAbleCartGoods: e } = t,
                      o = Object(H.a)(t, Ho);
                    return Object(a.a)(
                      {
                        allAbleCartGoods: e.map((t) =>
                          Object(a.a)({}, t, { price: zo.c.toYuan(t.price) })
                        ),
                      },
                      o
                    );
                  })),
                  this.couponOriginOrder && this.showPopup)
                )
                  i = (function (t, e, o) {
                    void 0 === t && (t = []),
                      void 0 === e && (e = []),
                      void 0 === o && (o = () => {});
                    var a = [],
                      s = [...t],
                      i = !1;
                    return (
                      e.forEach((e, o) => {
                        var r,
                          d,
                          { activityId: n } = e;
                        null != (r = t[o]) &&
                          r.activityId &&
                          (null == (d = t[o]) || d.activityId);
                        var c = s.findIndex(
                          (t) => t.activityId === n && t.ableUse
                        );
                        if (c > -1) {
                          var u,
                            l,
                            [h] = s.splice(c, 1);
                          (null == (u = h.allAbleCartGoods)
                            ? void 0
                            : u.length) <
                            (null == (l = e.allAbleCartGoods)
                              ? void 0
                              : l.length) && (i = !0),
                            a.push(h);
                        }
                      }),
                      s.length && (a = [...a, ...s]),
                      i &&
                        (Object(x.a)(
                          "因活动规则配置，部分已选中商品无法使用该优惠券",
                          { duration: 1e3 }
                        ),
                        o()),
                      a
                    );
                  })(
                    i,
                    this.couponOriginOrder,
                    null == (s = this.loggers)
                      ? void 0
                      : s.logGoodsDecreasedToastExpo
                  );
                (this.couponOriginOrder = i), (this.coupons = i);
              } else
                this.showPopup &&
                  ((this.showPopup = !1), Object(x.a)("暂无可用优惠券")),
                  setTimeout(() => {
                    this.coupons = [];
                  }, 1e3);
            },
            clearCouponOriginOrder() {
              this.couponOriginOrder = null;
            },
          };
        };
      class Wo {
        constructor(t) {
          var e, o;
          (this.ctx = t.ctx),
            (this.store =
              ((e = this.ctx),
              (function (t) {
                t.watch("kdtId", (e) => {
                  e && t.getCouponAddon(e);
                });
              })(
                (o = Object(Lt.a)({
                  state: () => Object(a.a)({}, Uo),
                  getters: Object(a.a)({}, Fo),
                  actions: Object(a.a)({}, Ko(e)),
                }))
              ),
              (function (t, e) {
                t.event.listen("updatingCart", () => {
                  e.getCouponAddon();
                });
              })(e, o),
              o)),
            Object(Lt.c)(this, [
              "kdtId",
              "offlineId",
              "shopCart",
              "themeColors",
              "themeStyle",
              "checkedGoodsList",
              "selectedPromotions",
            ]);
        }
      }
      Wo.widgets = { CouponAddonBar: Ro.a };
      var Yo = o("1tb9"),
        qo = getApp();
      function Jo() {
        var t = getCurrentPages(),
          e = "";
        try {
          e = t[t.length - 1].__wxExparserNodeId__;
        } catch (t) {}
        return e;
      }
      var Xo = getApp();
      var Qo = o("rHzg"),
        $o = o.n(Qo);
      class Zo {
        constructor(t) {
          this.ctx = t.ctx;
        }
      }
      Zo.widgets = { Main: $o.a };
      var ta = o("qnge"),
        ea = o("R765"),
        oa = o.n(ea);
      class aa {
        constructor(t) {
          this.ctx = t.ctx;
        }
      }
      aa.widgets = { Main: oa.a };
      var sa = o("hEwM"),
        ia = o.n(sa);
      class ra {
        constructor(t) {
          this.ctx = t.ctx;
        }
      }
      ra.widgets = { Main: ia.a };
      var da = {
          config: p,
          builtinBundle: {
            "@ext-tee-wsc-decorate/page-style": m.a,
            "@wsc-tee-statcenter/recommend-goods": v.a,
            "@wsc-tee-trade/cart-ump": O,
            "@wsc-tee-trade/cart-page-setup": It,
            "@wsc-tee-trade/cart-shop-header": xt,
            "@wsc-tee-trade/cart-empty-tip": _t,
            "@wsc-tee-trade/cart-shopping-circle": Bt,
            "@wsc-tee-trade/cart-valid-goods": Se,
            "@wsc-tee-trade/cart-invalid-goods": Ae,
            "@wsc-tee-trade/cart-submit": no,
            "@wsc-tee-trade/cart-order-keep": lo,
            "@wsc-tee-trade/cart-coupon-bar": ko,
            "@wsc-tee-trade/cart-present-popup": Go,
            "@wsc-tee-trade/common-widgets": Eo,
            "@wsc-tee-trade/trade-buy-pre-fetch": Mo,
            "@wsc-tee-trade/cart-coupon-addon-bar": Wo,
            "@ext-tee-wsc-goods/combine-goods-block": Yo.a,
            "page-attached-hook": class {
              constructor(t) {
                (this.ctx = t.ctx), this.initEvent();
              }
              initEvent() {
                Xo.on("ranta-tab-page-ready-" + Jo(), () => {
                  this.triggerAttachedEvent();
                }),
                  this.triggerAttachedEvent();
              }
              triggerAttachedEvent() {
                var t;
                (t = { route: this.ctx.env.route, rantaCtx: this.ctx }),
                  qo.trigger("async-page-attached-" + Jo(), t);
              }
              pageDestroyed() {
                Xo.off("ranta-tab-page-ready-" + Jo(), null);
              }
            },
            "@wsc-tee-trade/cart-block-container": Zo,
            "@wsc-tee-shop/footer": ta.a,
            "@wsc-tee-trade/trade-buy-reward-popup": aa,
            "@ext-tee-wsc-goods/base-common-sku": ra,
          },
        },
        na = g.default.getGlobal("ranta-app-runtime"),
        ca = na.getPageOptions({
          rantaOptions: Object(a.a)(
            { page: "/packages/trade-cart/cart/index" },
            da
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: na,
          tee: g.default,
          usedLifecycles: [
            "beforePageCreate",
            "pageDestroyed",
            "onPullDownRefresh",
            "onPageShow",
          ],
        });
      g.default.page({
        mixins: [
          ca,
          {
            data: () => ({
              hideSkeleton: !1,
              fixedBottom: !0,
              isTabPage: !0,
              pageBgColor: "#f2f2f2",
              globalCustomLoading: "",
            }),
            beforeMount() {
              getApp()
                .isSwitchTab()
                .then((t) => {
                  this.isTabPage = t;
                });
            },
            created() {
              var t = getApp();
              (this.globalCustomLoading = t.globalData.globalCustomLoading),
                t.on("trade-cart-data-loaded", this.handleTradeCartDataLoaded),
                t.on("trade-cart-page-bg-color", this.setPageBgColor),
                setTimeout(() => {
                  this.handleTradeCartDataLoaded();
                }, 1800);
            },
            destroyed() {
              var t = getApp();
              t.off("trade-cart-data-loaded", this.handleTradeCartDataLoaded),
                t.off("trade-cart-page-bg-color", this.setPageBgColor);
            },
            methods: {
              setPageBgColor(t) {
                t && (this.pageBgColor = t);
              },
              handleTradeCartDataLoaded() {
                this.hideSkeleton = !0;
              },
            },
          },
        ],
      });
    },
  });
