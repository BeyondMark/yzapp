"use strict";
var r = require("~/r");
r(
  "2AmF",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "2AmF": function (t, e, i) {
      i.r(e);
      var o = i("eijD"),
        n = i("87Y/"),
        a = i.n(n),
        r = {
          coupon: "优惠券",
          points: "积分",
          stock: "库存紧张",
          praise: "好评数",
          evaluationTag: "评价标签",
          sales: "销量",
          activity: "活动",
          discount: "优惠金额",
        },
        s = getApp(),
        l = {
          props: {
            show: { type: Boolean },
            displayData: { type: Object },
            themeColors: { type: Object },
          },
          data: () => ({
            couponValueStyle: "",
            type: "",
            hint: "",
            coupon: {},
            hasCoupon: !1,
            tags: [],
            format: {},
            initialShow: !1,
            tagBgColor: "",
            mainColor: "",
            mainBg: "",
            mainText: "",
          }),
          watch: {
            show(t) {
              if (((this.couponValueStyle = ""), (this.loading = !0), !t))
                return null;
              !this.initialShow && (this.initialShow = !0),
                setTimeout(() => {
                  this.computeFontSize(), this.logDialogShow();
                }, 500);
            },
            displayData(t) {
              var { content: e = {} } = t || {},
                { type: i = "", hint: o = "", trackType: n } = e,
                { coupon: a, tags: r, format: s } = e;
              (a = a || {}),
                (s = s || {}),
                (r = r || []),
                (this.trackType = n),
                (this.type = i),
                (this.hint = o),
                (this.coupon = a),
                (this.hasCoupon = !!a && Object.keys(a).length > 0),
                (this.tags = r),
                (this.format = s);
            },
            themeColors(t) {
              this.setStyle(t);
            },
          },
          mounted() {
            this.setStyle(this.themeColors);
          },
          methods: {
            setStyle(t) {
              void 0 === t && (t = {});
              var { general: e = "" } = t,
                i = t["main-text"];
              if (e) {
                var o = a()(e);
                (this.tagBgColor =
                  "rgba(" + o[0] + ", " + o[1] + ", " + o[2] + ", .1)"),
                  (this.mainColor = "color: " + e + "!important;"),
                  (this.mainBg = e);
              }
              (this.mainText = "color: " + i),
                (this.maxWidth = 80),
                (this.maxFontSize = 34),
                (this.minFontSize = 16);
            },
            logDialogShow() {
              var t = this.displayData || {},
                { content: e = {} } = t,
                { trackType: i } = e;
              s.logger &&
                s.logger.log({
                  et: "view",
                  ei: "continuepay_show",
                  en: "下单挽留弹窗展示",
                  pt: "trade",
                  params: {
                    ordernumber: t.orderNo || "",
                    money: t.price || "",
                    type: r[i],
                  },
                });
            },
            computeFontSize() {
              var t = this;
              return Object(o.a)(function* () {
                var {
                  content: { type: e, coupon: i },
                } = t.displayData;
                if ("COUPON" === e) {
                  var { valueDesc: o, unitDesc: n } = i || {},
                    a = yield t.getBoundingClientRectWidth(
                      ".order-keep__coupon--price"
                    ),
                    r = yield t.getBoundingClientRectWidth(
                      ".order-keep__coupon--unit"
                    ),
                    s = (t.maxWidth - r) / a,
                    l = 0;
                  if (s < 1) {
                    var c = Math.trunc(s * t.maxFontSize);
                    l = Math.max(c, t.minFontSize);
                  } else {
                    var h = null == n || "" === n;
                    o && o.length > 3 && h && (l = 20);
                  }
                  l &&
                    (t.couponValueStyle = "font-size: " + l + "px!important;");
                }
                t.loading = !1;
              })();
            },
            getBoundingClientRectWidth(t) {
              return new Promise((e) => {
                this.createSelectorQuery()
                  .select(t)
                  .boundingClientRect((t) => {
                    e((t || {}).width || 0);
                  })
                  .exec();
              });
            },
            onClose() {
              var t = this.displayData || {};
              s.logger &&
                s.logger.log({
                  et: "click",
                  ei: "continuepay_clickcancel",
                  en: "下单挽留弹窗点击取消支付",
                  pt: "trade",
                  params: {
                    ordernumber: t.orderNo || "",
                    money: t.price || "",
                    type: r[this.trackType],
                  },
                }),
                this.triggerEvent("close");
            },
            onConfirm() {
              var t = this.displayData || {};
              s.logger &&
                s.logger.log({
                  et: "click",
                  ei: "continuepay_clickcontinue",
                  en: "下单挽留弹窗点击继续支付",
                  pt: "trade",
                  params: {
                    ordernumber: t.orderNo || "",
                    money: t.price || "",
                    type: r[this.trackType],
                  },
                }),
                this.triggerEvent("confirm");
            },
          },
          ud: !0,
        },
        c = i("9ZMt");
      e.default = c.default.component(l);
    },
  })
);
