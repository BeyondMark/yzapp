"use strict";
var r = require("~/r");
r(
  "8QGs",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "8QGs": function (e, a, r) {
      r.r(a);
      var o = r("Fcif"),
        t = r("eijD"),
        p = getApp(),
        d = r("xyw3"),
        n = r("GFa9"),
        s = r("8B9M"),
        i = r("1Uvd"),
        c = r("Yfvy"),
        l = r("OPDa"),
        u = r("2wjL");
      function g(e) {
        return (
          void 0 === e && (e = 0),
          l.a.getPageSpmTypeId() +
            "~pending_payment_popup~" +
            (e + 1) +
            "~" +
            Object(i.a)(8)
        );
      }
      function h() {
        var e = getCurrentPages();
        return { ad_name: "催付弹窗", page_url: e[e.length - 1].route };
      }
      wx.onAppHide(() => {
        wx.removeStorageSync("order-pay-prompt-popup");
      }),
        Component({
          properties: { source: { type: String, value: "ITEM_DETAIL" } },
          data: { open: !1, orderInfo: {}, abTraceId: null, orderPath: "" },
          attached() {
            wx.getStorageSync("order-pay-prompt-popup")
              ? this.triggerEvent("close-pop")
              : this._batchPayPromptReceive();
          },
          methods: {
            _batchPayPromptReceive() {
              return ((e = { source: this.data.source }),
              p.request({
                data: e,
                method: "GET",
                path: "/wsctrade/order/pay-prompt-receive.json",
              }))
                .then((e) => {
                  if (e) {
                    if (e.popup) {
                      e.payPrice = Object(d.a)(e.payPrice).toYuan();
                      var a =
                        "/packages/order/index?orderNo=" +
                        e.orderNo +
                        "&banner_id=" +
                        g();
                      this.setData({
                        orderInfo: e,
                        open: e.popup,
                        abTraceId: e.abTraceId,
                        orderPath: a,
                      }),
                        wx.setStorageSync("order-pay-prompt-popup", !0),
                        this.logHandle(this.exposureLog());
                    } else
                      e.abTraceId
                        ? (this.setData({
                            orderInfo: e,
                            abTraceId: e.abTraceId,
                          }),
                          wx.setStorageSync("order-pay-prompt-popup", !0),
                          this.triggerEvent("close-pop"),
                          this.logHandle(this.exposureLog()))
                        : this.triggerEvent("close-pop");
                  } else this.triggerEvent("close-pop");
                })
                .catch(() => {
                  this.triggerEvent("close-pop");
                });
              var e;
            },
            timeEndHandle(e) {
              "close" === e.detail &&
                (this.setData({ open: !1 }),
                this.triggerEvent("close-pop", { isRealClose: !0 }));
            },
            handleLevelGoodsUrl() {
              var e,
                { goods: a = [] } = this.data.orderInfo || {},
                {
                  kdtId: r,
                  goodsId: o,
                  skuId: t,
                  payGradeCard: d = !1,
                } = a[0] || [];
              return !1 === d
                ? ""
                : ((e = { kdtId: r, goodsId: o }),
                  p.request({
                    data: e,
                    method: "GET",
                    path: "/wsctrade/scrm/level.json",
                  })).then((e) => {
                    var { autoRenew: a, levelAlias: o, levelGoods: p = {} } = e,
                      { skuList: d } = p,
                      n = d.find((e) => e.goodsSkuId == t),
                      { goodsSkuType: s } = n || [];
                    if (a && 2 == s) {
                      var i = u.a.add(
                        "https://cashier.youzan.com/pay/wscuser_paylevel",
                        { kdt_id: r, alias: o, banner_id: g() }
                      );
                      return (
                        "/pages/common/webview-page/index?src=" +
                        encodeURIComponent(i)
                      );
                    }
                    return "";
                  });
            },
            btnEventHandle(e) {
              var a = this;
              return Object(t.a)(function* () {
                if ("pay" === e.detail) {
                  var r = "";
                  return (
                    "" == (r = yield a.handleLevelGoodsUrl()) &&
                      (r = a.data.orderPath),
                    a.logHandle(a.payLog()),
                    void n.a.navigate({ url: r })
                  );
                }
                a.setData({ open: !1 }),
                  a.logHandle(a.abandonLog()),
                  a.triggerEvent("close-pop", { isRealClose: !0 });
              })();
            },
            exposureLog() {
              var e = Object(c.b)("shop_ad_pop", Object(o.a)({}, h()));
              return {
                et: "view",
                ei: "component_view",
                en: "组件曝光",
                params: Object(o.a)(
                  {
                    banner_id: g(),
                    order_no: this.data.orderInfo.orderNo || "",
                    popup_type: this.data.orderInfo.descTemplate
                      ? this.data.orderInfo.descTemplate.popupType
                      : "",
                    component: "pending_payment_popup",
                    abTraceId: this.data.abTraceId || null,
                  },
                  e
                ),
              };
            },
            payLog() {
              var e = Object(c.b)("shop_ad_pop", Object(o.a)({}, h()));
              return {
                et: "click",
                ei: "pay_click",
                en: "去支付点击",
                params: Object(o.a)(
                  {
                    banner_id: g(),
                    order_no: this.data.orderInfo.orderNo,
                    popup_type: this.data.orderInfo.descTemplate.popupType,
                    component: "pending_payment_popup",
                    abTraceId: this.data.abTraceId || null,
                  },
                  e
                ),
              };
            },
            abandonLog() {
              var e = Object(c.b)("shop_ad_pop", Object(o.a)({}, h()));
              return {
                et: "click",
                ei: "temporarily_abandon_click",
                en: "点击暂时放弃",
                params: Object(o.a)(
                  {
                    banner_id: g(),
                    order_no: this.data.orderInfo.orderNo,
                    popup_type: this.data.orderInfo.descTemplate.popupType,
                    component: "pending_payment_popup",
                    abTraceId: this.data.abTraceId || null,
                  },
                  e
                ),
              };
            },
            logHandle(e) {
              var a = Object(s.a)();
              a.logger && a.logger.log(e);
            },
          },
        });
    },
  })
);
