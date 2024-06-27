"use strict";
var r = require("~/r");
r(
  "SPUm",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "5Mqe": function (e, t, s) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            if (!(0, i.default)(e)) return [];
            return e.reduce(function (e, t) {
              return (e = [].concat(e, t));
            }, []);
          });
        var r,
          i = (r = s("ajWA")) && r.__esModule ? r : { default: r };
        e.exports = t.default;
      },
      SPUm: function (e, t, s) {
        s.r(t);
        var r = s("Fcif"),
          i = s("DXqK"),
          a = s("4NdJ"),
          o = s("mztD"),
          u = s("AGZf"),
          n = s("NHEX"),
          l = s.n(n),
          h = s("aOlM"),
          d = s("5Mqe"),
          c = s.n(d),
          p = s("edpm"),
          g = s("VmHG"),
          m = {
            haitao: Object(o.a)(
              "public_files/3a774609c08dc284f27ba5a64be85fa6.png"
            ),
            periodBuy: Object(o.a)(
              "public_files/61954b0fdd8319a9c5722f16ca2e31de.png"
            ),
            memberPrice: Object(o.a)(
              "public_files/70bf2253b3860184cb8adacbe831e946.png"
            ),
            drug: Object(o.a)("path/to/cdn/dir/isDrugTag_3x.png"),
          },
          f = ["今天", "明天"];
        var b = (e) => {
            if (!e) return "";
            var t = (e) => "¥" + (Math.abs(e) / 100).toFixed(2);
            return e > 0 ? "" + t(e) : "-" + t(e);
          },
          v = {
            props: {
              good: { type: Object, default: () => ({}) },
              index: { type: Number },
              count: { type: Number },
              startSaleNum: Number,
            },
            data() {
              return Object(r.a)(
                {
                  showMessage: !1,
                  showToast: !1,
                  stepperDisableMinus: this.getStepperDisableMinus(),
                  isTTVerifyRetailScene: !1,
                },
                Object(g.d)(this, [
                  "hasGoodsExchangeCoupon",
                  "themeColors",
                  "expressType",
                  "display",
                  "selfFetch",
                  "delivery",
                  "pay",
                  "themeTag",
                ])
              );
            },
            computed: {
              isShowDeliveryTime() {
                var e, t;
                return (
                  ("self-fetch" !== this.expressType ||
                    null == (e = this.selfFetch) ||
                    !e.time) &&
                  ("express" !== this.expressType ||
                    null == (t = this.delivery) ||
                    !t.text)
                );
              },
              deliveryTime() {
                var { itemDeliveryTime: e } = this.good || {};
                if (!e || !e.isShowDeliveryTime || "" === e.weekDay) return "";
                var {
                    isShowOutOfStockMark: t,
                    canAppointmentStartDate: s,
                    diffDay: r,
                  } = e,
                  a = 60 * (new Date().getTimezoneOffset() + 480) * 1e3,
                  o = Object(i.d)(s + a, "MM-DD"),
                  u = Object(i.d)(s + a, "HH:mm");
                return (
                  (t ? "无现货 " : "") +
                  "最快" +
                  (function (e, t) {
                    var s = t.split("-");
                    return 0 === e
                      ? ""
                      : e < 2
                      ? "" + f[e]
                      : s[0] + "月" + s[1] + "日";
                  })(r, o) +
                  u +
                  ("self-fetch" === this.expressType ? "自提" : "送达")
                );
              },
              activityTag() {
                return this.good.isPeriodBuy
                  ? m.periodBuy
                  : 1 == +this.good.haitao
                  ? m.haitao
                  : this.good.isPrescriptionDrugGoods
                  ? m.drug
                  : "";
              },
              firstMessage() {
                if (this.good.hasMessage) {
                  var e = Object.keys(this.good.message)[0],
                    t = this.good.message[e];
                  if (/^\s*http(s)*:\/\/.+/.test(t)) return "查看留言";
                  var s = e + ": " + (t || "无");
                  return s.length > 14 ? s.substring(0, 14) + "..." : s;
                }
                return "";
              },
              messageList() {
                var e = [];
                return (
                  this.good.showVirtualTicketRefundingRule &&
                    e.push(this.good.virtualTicketRefundingRule),
                  this.good.expressPayMode && e.push("运费到付"),
                  e
                );
              },
              varStyle() {
                return (
                  "\n        --invoice-tag-active-background-color-alpha-10: " +
                  this.themeColors.general +
                  "22;\n        --invoice-tag-active-color: " +
                  this.themeColors.general +
                  ";\n      "
                );
              },
              texts() {
                var e, t, s;
                return null == (e = this.good) ||
                  null == (t = e.combo) ||
                  null == (s = t.subComboList)
                  ? void 0
                  : s
                      .map((e) => {
                        var t,
                          s,
                          {
                            num: r,
                            title: i,
                            sku: a,
                            properties: o,
                            addPrice: u,
                          } = e;
                        if (a)
                          try {
                            t = (a = JSON.parse(a))
                              .reduce((e, t) => (t.v && e.push(t.v), e), [])
                              .join(";");
                          } catch (e) {}
                        if (
                          (null != o &&
                            o.length &&
                            ((s = o.map((e) => {
                              var t;
                              return null == (t = e.propValueList)
                                ? void 0
                                : t.map(
                                    (e) => "" + e.propValueName + b(e.price)
                                  );
                            })),
                            (s = c()(s)
                              .filter((e) => e)
                              .join(";"))),
                          a || (null != o && o.length))
                        ) {
                          if (a && null != o && o.length)
                            return i + "（" + t + b(u) + ";" + s + "）x" + r;
                          if (a && (null == o || !o.length))
                            return i + "（" + t + b(u) + "）x" + r;
                          if (!a && null != o && o.length)
                            return i + "（" + s + "）x" + r;
                        }
                        return i + "x" + r;
                      })
                      .filter((e) => e);
              },
            },
            watch: {
              good() {
                this.stepperDisableMinus = this.getStepperDisableMinus();
              },
              startSaleNum() {
                this.stepperDisableMinus = this.getStepperDisableMinus();
              },
            },
            created() {
              this.changeNumDebounced = Object(h.a)(this.changeData, 300, !1);
            },
            mounted() {
              this.good.showStepper && Object(a.d)(void 0);
            },
            methods: {
              messageClick() {
                this.showMessage = !0;
              },
              onGoodsImageLoad() {
                if (0 === this.index) {
                  var { mark: e } = this.ctx.hummer || {};
                  e && e.log && e.log({ tag: "order-init", scene: ["route"] });
                }
              },
              handleCloseMessage() {
                this.showMessage = !1;
              },
              onPlusMinus(e) {
                Object(a.c)(void 0, { action: e });
              },
              onBlur(e) {
                Object(a.b)(void 0, { value: e.value });
              },
              onChange(e) {
                var t = Number(e),
                  { good: s } = this,
                  { goodsId: r, skuId: i } = s;
                this.changeNumDebounced(r, i, t);
              },
              changeData(e, t, s) {
                (this.showToast = !0),
                  this.$emit("changeNum", {
                    loading: !1,
                    goodsId: e,
                    skuId: t,
                    num: s,
                    successCB: () => {
                      this.showToast = !1;
                    },
                    errorCB: () => {
                      (this.showToast = !1),
                        (this.$refs.stepper.currentValue = String(
                          this.good.num
                        ));
                    },
                  });
              },
              overLimitAction(e) {
                var { good: t, stepperDisableMinus: s, startSaleNum: r } = this,
                  { num: i, goodMax: a } = t;
                return 1 === i && "minus" === e
                  ? Object(u.a)("最少购买1件")
                  : "minus" === e && s
                  ? Object(u.a)("该商品" + r + "件起售")
                  : i >= a && "plus" === e
                  ? Object(u.a)(Object(p.a)(t))
                  : void 0;
              },
              getGoodsPropertiesStr(e) {
                void 0 === e && (e = []);
                var t = [];
                return (
                  e.forEach((e) => {
                    l()(e, "propValueList", []).forEach((e) => {
                      t.push(e.propValueName);
                    });
                  }),
                  t.join("，")
                );
              },
              getStepperDisableMinus() {
                var { startSaleNum: e, good: t } = this;
                return t.num <= e || t.num <= 1;
              },
            },
          },
          y = s("9ZMt");
        t.default = y.default.component(v);
      },
    }
  )
);
