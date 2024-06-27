"use strict";
var r = require("~/r");
r(
  "mCci",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    mCci: function (t, e, o) {
      o.r(e);
      var i = o("eijD"),
        a = o("YeA1"),
        r = o("PKOW"),
        n = o("87Y/"),
        s = o.n(n),
        c = o("9ZMt"),
        h = {
          coupon: "优惠券",
          points: "积分",
          stock: "库存紧张",
          praise: "好评数",
          evaluationTag: "评价标签",
          sales: "销量",
          activity: "活动",
          discount: "优惠金额",
        },
        l = {
          data: () => ({
            displayData: {},
            orderData: {},
            show: !1,
            couponValueStyle: "",
            loading: !1,
            hint: "",
            type: "",
            coupon: {},
            tags: [],
            format: {},
            themeMainColor: "",
            themeGeneralAlpha10Color: "",
            initialShow: !1,
            btnCustomStyle:
              "color: var(--main-text, #fff); background: var(--main-bg, #323233); border: 1px solid var(--main-bg, #323233)",
          }),
          computed: {
            hasCoupon() {
              return !!Object.keys(this.coupon);
            },
            mainColorStyle() {
              return "color: " + this.themeMainColor + "!important;";
            },
          },
          watch: {
            show(t) {
              t && !this.initialShow && (this.initialShow = !0);
            },
          },
          created() {
            (this.maxWidth = 80),
              (this.maxFontSize = 34),
              (this.minFontSize = 16),
              (this.trackType = ""),
              Object(a.d)(this, {
                open: () => {
                  (this.show = !0), this.logDialogShow();
                },
                close: () => {
                  this.show = !1;
                },
              }),
              Object(a.b)(this, ["orderData"]),
              Object(a.b)(this, {
                displayData: (t) => {
                  var { content: e = {} } = t || {},
                    {
                      type: o = "",
                      hint: i = "",
                      coupon: a = {},
                      tags: r = [],
                      format: n = {},
                      trackType: s,
                    } = e;
                  (this.trackType = s),
                    (this.type = o),
                    (this.hint = i),
                    (this.coupon = a),
                    (this.tags = r),
                    (this.format = n),
                    (this.displayData = t),
                    "COUPON" === o &&
                      ((this.loading = !0),
                      setTimeout(() => {
                        this.computeFontSize();
                      }, 500));
                },
                themeColors: (t) => {
                  var e = t.general;
                  (this.themeMainColor = e),
                    (this.themeGeneralAlpha10Color = s()(e, 0.1));
                },
              });
          },
          methods: {
            logDialogShow() {
              var t = this.displayData || {},
                { content: e = {} } = t,
                { trackType: o } = e;
              this.ctx.logger &&
                this.ctx.logger.log({
                  et: "view",
                  ei: "continuepay_show",
                  en: "下单挽留弹窗展示",
                  pt: "trade",
                  params: {
                    ordernumber: t.orderNo || "",
                    money: t.price || "",
                    type: h[o],
                  },
                });
            },
            computeFontSize() {
              var t = this;
              return Object(i.a)(function* () {
                var { coupon: e } = t.displayData,
                  { valueDesc: o, unitDesc: i } = e || {},
                  a = yield t.getBoundingClientRectWidth(
                    ".keep__coupon--price"
                  ),
                  r = yield t.getBoundingClientRectWidth(".keep__coupon--unit"),
                  n = (t.maxWidth - r) / a,
                  s = 0;
                if (n < 1) {
                  var c = Math.trunc(n * t.maxFontSize);
                  s = Math.max(c, t.minFontSize);
                } else {
                  var h = null == i || "" === i;
                  o && o.length > 3 && h && (s = 20);
                }
                s && (t.couponValueStyle = "font-size: " + s + "px!important;"),
                  (t.loading = !1);
              })();
            },
            getBoundingClientRectWidth(t) {
              return new Promise((e) => {
                this.createSelectorQuery()
                  .select(t)
                  .boundingClientRect()
                  .exec((t) => {
                    var o = t[0] ? t[0] : {};
                    e(o.width || 0);
                  });
              });
            },
            onClose() {
              var t = this.displayData || {};
              this.ctx.logger &&
                this.ctx.logger.log({
                  et: "click",
                  ei: "continuepay_clickcancel",
                  en: "下单挽留弹窗点击取消支付",
                  pt: "trade",
                  params: {
                    ordernumber: t.orderNo || "",
                    money: t.price || "",
                    type: h[this.trackType],
                  },
                }),
                (this.show = !1);
            },
            onConfirm() {
              var t = this.displayData || {};
              this.ctx.logger &&
                this.ctx.logger.log({
                  et: "click",
                  ei: "continuepay_clickcontinue",
                  en: "下单挽留弹窗点击继续支付",
                  pt: "trade",
                  params: {
                    ordernumber: t.orderNo || "",
                    money: t.price || "",
                    type: h[this.trackType],
                  },
                }),
                (this.show = !1);
              var e,
                {
                  bookKey: o,
                  addressId: i,
                  orderFrom: a,
                  orderNo: n,
                  bookKey: s,
                } = this.orderData || {};
              n
                ? ((e = {
                    addressId: i,
                    orderFrom: a,
                    orderNo: n,
                    prevBookKey: s,
                  }),
                  Object(r.f)({ pageType: r.b.PAY, query: e }))
                : ((e = { addressId: i, orderFrom: a, bookKey: o }),
                  this.ctx.process.invoke("navigateToTradeBuy", {
                    navigateParams: e,
                  }));
            },
          },
          ud: !0,
        };
      e.default = c.default.component(l);
    },
  })
);
