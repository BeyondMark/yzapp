"use strict";
var r = require("~/r");
r(
  "50Kr",
  Object.assign({}, require("~/v.js").modules, {
    "50Kr": function (e, t, i) {
      i.r(t);
      var s = i("Fcif"),
        a = i("9ZMt"),
        r = i("YeA1"),
        n = i("Nvad"),
        o = i("VmHG"),
        l = new (i("Hpq+").a)();
      var p = {
          3: "降价拍",
          4: "拼团",
          6: "秒杀",
          8: "赠品",
          10: "会员价",
          11: "限时折扣",
          23: "抽奖团",
          403: "限时秒杀",
        },
        g = {
          props: {
            messagesOpt: Object,
            headerOpt: Object,
            sku: Object,
            rowOpt: Object,
            orderStepper: Object,
            selected: Object,
            originPrice: String,
            extraData: Object,
            estimatePriceDataProps: Object,
            skuBannerData: Object,
            goods: Object,
            goodsSkuData: Object,
          },
          data() {
            return Object(s.a)(
              {
                sellingPointOpt: {},
                goodsOrderData: {},
                themeTag: {},
                themeType: null,
                shopConfig: {},
                tagStyle: "margin-top: 6px",
              },
              Object(o.d)(this, ["goodsAttributesOpt"])
            );
          },
          computed: {
            headerOptData() {
              var {
                headerOpt: e,
                goodsOrderData: t,
                estimatePriceDataProps: i,
                goodsSkuData: a,
                goods: r,
              } = this;
              if (e) {
                var o = (e.tags || []).find((e) => "pointsExchange" === e.type),
                  { list: l = [] } = t,
                  {
                    payPrice: g = 0,
                    price: u = 0,
                    activities: d = [],
                  } = l[0] || {},
                  c = "";
                this.originPrice && (c = this.originPrice),
                  u && g !== u && (c = (u / 100).toFixed(2));
                var h = Object(n.b)((g / 100).toFixed(2)),
                  { priceTags: m = [] } = (null == a ? void 0 : a.goods) || {},
                  O = [
                    ...m,
                    ...d.map((e) => p[null == e ? void 0 : e.typeId]),
                  ].filter((e) => e),
                  v = null == i ? void 0 : i.tag;
                O = O.map((e) => {
                  var t;
                  return "string" == typeof e
                    ? e
                    : Object(s.a)({}, e, {
                        text:
                          null == (t = e.text)
                            ? void 0
                            : t.replace("全款预售", "预售"),
                      });
                });
                var b = g && !o ? h : e.price,
                  j = o
                    ? "font-size: " +
                      (function (e) {
                        return e.length > 20 ? 14 : e.length > 13 ? 16 : 22;
                      })(b) +
                      "px; display: block; max-width: 100%;"
                    : "",
                  y = o ? "" : e.priceSymbol,
                  { soldNum: f } = r;
                return Object(s.a)({}, e, {
                  tags: O,
                  estimateTags: v,
                  selectedText: "",
                  oldPrice: c ? Object(n.b)(c) : e.oldPrice,
                  price: b,
                  priceStyle: j,
                  priceSymbol: y,
                  soldNum: f,
                });
              }
            },
            oldPriceStyle() {
              return this.headerOptData.hideStock &&
                this.headerOptData.showImage
                ? "position: absolute; bottom: 0"
                : "margin-top: 6px";
            },
            stockStyle() {
              return this.headerOptData.showImage
                ? "position: absolute; bottom: 0; left: 0;"
                : "margin-top: -4px";
            },
            isShowUmpBanner() {
              return !(
                !this.shopConfig.paymentSettingOrderDisplayActivity &&
                !+this.shopConfig.payment_setting_order_display_activity
              );
            },
          },
          watch: {
            messagesOpt: {
              handler(e) {
                void 0 === e && (e = {}),
                  e.show &&
                    setTimeout(() => {
                      a.default.setGlobal(
                        "sku-message-ref",
                        this.$refs.messages
                      );
                    }, 0);
              },
              immediate: !0,
            },
          },
          created() {
            Object(r.b)(this, [
              "sellingPointOpt",
              "themeTag",
              "themeType",
              "shopConfig",
            ]),
              Object(r.b)(
                this,
                {
                  goods: (e) => {
                    this.goodsOrderData = e;
                  },
                },
                { isSetData: !1 }
              );
          },
          methods: {
            handleNumChange(e) {
              this.$emit("onStepperChange", e);
            },
            handleSkuPreview(e) {
              this.$emit("onPreview", e);
            },
            handleSkuSelect(e) {
              this.$emit("onSelect", e);
            },
            handleMessageChange(e) {
              this.$emit("onMessageChange", e);
            },
            handleDateTimeClick(e) {
              this.$emit("onDateTimeClick", e);
            },
            handleMessageBlur() {
              setTimeout(() => {
                this.$emit("onMessageBlur");
              }, 0);
            },
            onPluginsChange(e) {
              var t = l.update(e);
              this.$emit("onExtraDataChange", t);
            },
          },
        };
      t.default = a.default.component(g);
    },
    "Hpq+": function (e, t, i) {
      var s = i("Fcif"),
        a = i("xers"),
        r = i.n(a);
      t.a = class {
        constructor() {
          (this.plugins = {}), (this.priority = 0);
        }
        get sortedPlugins() {
          return Object.values(this.plugins).sort(
            (e, t) => e.priority - t.priority
          );
        }
        reset() {
          this.plugins = {};
        }
        update(e) {
          var { name: t, pluginsResult: i = {} } = e,
            a = this.plugins[t],
            n =
              JSON.stringify(i) ===
              JSON.stringify((null == a ? void 0 : a.pluginsResult) || {}),
            o = !r()(e.pluginsResult || {}) && !n,
            l =
              !r()((null == a ? void 0 : a.view) || {}) ||
              !r()((null == e ? void 0 : e.view) || {});
          return (
            (this.plugins[t] = e),
            Object(s.a)({}, this.getData(), {
              pluginsResultUpdate: o,
              viewUpdate: l,
            })
          );
        }
        getData() {
          return this.sortedPlugins.reduce(
            (e, t) => {
              var {
                view: i = {},
                pluginsResult: a = {},
                invalidMessage: r = {},
              } = t;
              return {
                view: Object(s.a)({}, e.view, i),
                pluginsResult: Object(s.a)({}, e.pluginsResult, a),
                invalidMessage: Object(s.a)({}, e.invalidMessage, r),
              };
            },
            { view: {}, pluginsResult: {}, invalidMessage: {} }
          );
        }
      };
    },
  })
);
