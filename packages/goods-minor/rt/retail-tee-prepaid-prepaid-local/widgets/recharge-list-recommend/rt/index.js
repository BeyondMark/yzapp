"use strict";
var r = require("~/r");
r(
  "/Fe6",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "/Fe6": function (e, t, i) {
        i.r(t);
        var s = i("eijD"),
          a = i("Fcif"),
          c = i("AGZf"),
          r = i("9ZMt"),
          n = i("Yiq8"),
          o = i("JLxb"),
          d = i("YcCB"),
          h = i("4s30"),
          l = i("Kfn+"),
          u = i("z9IR"),
          f = i("x/JP"),
          g = i("YeA1"),
          m = { FAIL: "充值超时", REFUND: "充值转入退款", CANCEL: "充值取消" },
          p = { weapp: 2, web: 5 };
        function P(e) {
          !0 !== e && Object(n.b)();
        }
        var k = {
          props: {
            kdtId: Number,
            product: { type: Object, default: () => ({}) },
            generalThemeColor: String,
            newRecommend: Boolean,
            exclusion: Boolean,
            realPay: Number,
            useStoredMemberCustomerDiscount: Boolean,
            useStoreBalancePayInFull: Boolean,
            originPay: Number,
          },
          data: () => ({
            payService: null,
            isRecharging: !1,
            cardNoSign: "",
            outBizNo: "",
            productGiftPacks: [],
            selectedIndex: -1,
            loading: !1,
            selectedGiftPackIndex: 0,
          }),
          computed: {
            introPrepaidMember() {
              return (
                this.useStoredMemberCustomerDiscount &&
                !this.useStoreBalancePayInFull
              );
            },
            selected() {
              return Array.isArray(this.productGiftPacks) &&
                0 !== this.productGiftPacks.length
                ? -1 === this.selectedIndex
                  ? this.productGiftPacks[0]
                  : this.productGiftPacks[this.selectedIndex]
                : null;
            },
            rechargeGiftPack() {
              return this.selectedGiftPacks[this.selectedGiftPackIndex];
            },
            selectedGiftPacks() {
              return this.selected ? this.selected.giftPacks : [];
            },
            deduction() {
              return this.exclusion ? this.originPay : this.realPay;
            },
            intro() {
              if (
                !Array.isArray(this.productGiftPacks) ||
                0 === this.productGiftPacks.length
              )
                return null;
              var e = this.productGiftPacks[0],
                { ruleRights: t } =
                  e.giftPacks.find((e) =>
                    Boolean(e.ruleRights.bonusAmountRights)
                  ) || {},
                i = t ? t.bonusAmountRights.bonusAmount : 0,
                s = Object(l.a)(this.deduction),
                a = i ? "送" + Object(l.a)(i) : "元";
              return this.newRecommend
                ? {
                    text:
                      "充值" +
                      Object(l.a)(e.amount) +
                      a +
                      "，本单可抵扣" +
                      s +
                      "元",
                  }
                : null;
            },
          },
          watch: {
            product: {
              handler() {
                Object(n.o)({ listType: this.getListType() }), this.initData();
              },
              immediate: !0,
            },
            kdtId: {
              handler() {
                this.initData();
              },
              immediate: !0,
            },
            selected: {
              handler(e) {
                this.ctx.data.giftPackSelected = e;
              },
              immediate: !0,
            },
            selectedGiftPacks: {
              handler(e) {
                this.ctx.data.giftPackSelectedGiftPacks = e;
              },
              immediate: !0,
            },
            selectedGiftPackIndex: {
              handler(e) {
                this.ctx.data.giftSelectedGiftPackIndex = e;
              },
              immediate: !0,
            },
          },
          created() {
            c.a.clear(),
              this.initDefineProcesses(),
              Object(g.d)(this, {
                onGiftPackClose: () => this.onClose(!0),
                onGiftPackRecharge: (e) => this.onRecharge(e),
                onSelectGiftPack: (e) => this.onSelectGiftPack(e),
              });
          },
          methods: {
            getListType() {
              return this.newRecommend ? "newRecommend" : "recommend";
            },
            resetStatus() {
              (this.selectedIndex = -1),
                this.ctx.data.payRechargeInfo &&
                  !this.exclusion &&
                  ((this.ctx.data.payRechargeInfo = null),
                  this.newRecommend && this.changeBalance(-1));
            },
            initData() {
              this.resetStatus(), this.kdtId && this.queryGiftPacks();
            },
            initDefineProcesses() {
              this.ctx.process.define("doRecharge", () => {
                this.onRecharge("out");
              }),
                this.ctx.process.define("showPrePayCardRecharge", () => {
                  this.ctx.event.emit("toggleGiftPack", !0);
                });
            },
            onSelect(e) {
              var { item: t, idx: i } = e;
              Object(n.m)({
                selectInfo: { idx: i, isSelect: this.selectedIndex === i },
                listType: this.getListType(),
              }),
                (this.selectedGiftPackIndex = 0);
              var s = (function (e) {
                return (
                  e.giftPacks.length > 1 ||
                  e.giftPacks.some(
                    (e) =>
                      Boolean(e.ruleRights.couponRights) ||
                      Object.keys(e.ruleRights).length > 2
                  )
                );
              })(t);
              this.beforeSelect(this.selectedIndex === i, s)
                .then(() => {
                  this.exclusion &&
                    this.selectedIndex !== i &&
                    Object(n.i)({ idx: i }),
                    this._select({ item: t, idx: i, needShowGiftPack: s });
                })
                .catch(() => {
                  Object(n.h)({ idx: i });
                });
            },
            _select(e) {
              var { item: t, idx: i, needShowGiftPack: s } = e,
                a = 0,
                c = t.giftPacks[0];
              if (
                (c &&
                  c.ruleRights &&
                  c.ruleRights.bonusAmountRights &&
                  (a = c.ruleRights.bonusAmountRights.bonusAmount),
                this.selectedIndex !== i)
              ) {
                this.selectedIndex = i;
                var r = "" + Object(l.a)(t.amount, !0);
                this.newRecommend &&
                  !this.exclusion &&
                  ((this.ctx.data.payRechargeInfo = {
                    btnText: "充值并支付",
                    amount: r,
                    tips: "本单抵扣¥" + Object(l.a)(this.deduction, !0),
                  }),
                  this.changeBalance(t.amount + a)),
                  this.newRecommend ||
                    (this.ctx.data.payRechargeInfo = {
                      btnText: "立即充值",
                      amount: r,
                      tips: "本单享受储值优惠",
                    }),
                  s
                    ? this.ctx.event.emit("toggleGiftPack", !0)
                    : !s && this.exclusion && this.onRecharge();
              } else this.resetStatus();
            },
            onRecharge(e) {
              void 0 === e && (e = "in"),
                Object(n.e)(),
                Object(n.l)({ logSource: e, listType: this.getListType() });
              var { templateNo: t, cardNo: i } = this.product;
              this.isRecharging = !0;
              var s = () => {
                var e = this.preparePrepay();
                this.newRecommend
                  ? this.ctx.event.emit("trade-recharge:on-select", e)
                  : this.startPay(e);
              };
              if ((i && (this.cardNoSign = i), !this.cardNoSign))
                return Object(d.e)({ templateNo: t })
                  .then((e) => {
                    this.cardNoSign = e.cardNo;
                  })
                  .catch(() => {
                    c.a.fail("签约开卡失败"), (this.isRecharging = !1);
                  })
                  .then(() => {
                    s();
                  });
              s();
            },
            queryGiftPacks() {
              0 !== this.product.productInfos.length &&
                ((this.loading = !0),
                Object(d.c)({
                  kdtId: this.kdtId,
                  productNoList: this.product.productInfos
                    .map((e) => {
                      var { productNo: t } = e;
                      return t;
                    })
                    .filter(Boolean),
                  disableFilter: !0,
                })
                  .then((e) => {
                    this.productGiftPacks = e.map((e) => {
                      var t = "";
                      if (
                        Array.isArray(e.giftPacks) &&
                        e.giftPacks.length > 0
                      ) {
                        var { rightSlogan: i } = e.giftPacks[0];
                        if (i && "string" == typeof i) {
                          var s = i.split("、"),
                            c = s.join("；");
                          t =
                            "送" +
                            (s.length > 2 ? s[0] + "；" + s[1] + "等" : c);
                        }
                      }
                      return Object(a.a)({}, e, { slogan: t });
                    });
                  })
                  .catch((e) => {
                    c.a.fail("获取礼包数据失败"),
                      f.a.info("下单页 - 查询充值礼包失败", {
                        data: { productInfos: this.product.productInfos, e: e },
                        extra: { timestamp: Date.now() },
                      });
                  })
                  .finally(() => {
                    this.loading = !1;
                  }));
            },
            onClose(e) {
              e &&
                Object(n.g)({
                  idx: this.selectedIndex,
                  gpIdx: this.selectedGiftPackIndex,
                  listType: this.getListType(),
                }),
                this.exclusion &&
                  setTimeout(() => {
                    this.resetStatus();
                  }, 200),
                this.ctx.event.emit("toggleGiftPack", !1);
            },
            preparePrepay() {
              var {
                  selected: { amount: e, templateNo: t, productNo: i },
                  cardNoSign: s = "",
                } = this,
                {
                  giftPackName: a = this.newRecommend
                    ? "充值并支付固定金额储值"
                    : "储值推荐固定金额储值",
                  factType: c = "VLCARD_RCHG",
                  giftPackId: n = "0",
                  giftPackVersion: o = "",
                  factType: d = "VLCARD_RCHG",
                } = this.rechargeGiftPack || {};
              return this.newRecommend
                ? (!0 === this.exclusion &&
                    (this.ctx.process.invoke("setOrderForbidCoupon", !0),
                    this.ctx.process.invoke("setOrderForbidPreference", !0)),
                  {
                    goodsName: a,
                    tradeDesc: d,
                    ruleNo: n,
                    ruleVersion: o,
                    payAmount: e,
                    cardNo: s,
                    source: p[r.default.platform],
                    templateNo: t,
                    productNo: i,
                    isStoreAndPayProcess: !0,
                  })
                : {
                    kdtId: this.kdtId,
                    cardNo: s,
                    payAmount: e,
                    goodsName: a,
                    tradeDesc: c,
                    ruleVersion: o,
                    ruleNo: n,
                    source: p[r.default.platform],
                    extendsInfo: {
                      kdtId: this.kdtId,
                      ruleNo: n,
                      cardNo: s,
                      productNo: this.selected.productNo,
                      amount: e,
                      pubKdtId: this.kdtId,
                      acpKdtId: this.kdtId,
                      marketChannel: "1",
                      weappRedirectUrl: "",
                      successRedirect: "",
                    },
                  };
            },
            initPayService() {
              if (this.payService) return !0;
              try {
                var [e] = this.ctx.process.invoke("prepaidCommonPay");
                return (
                  e.setConfig({
                    onPaySuccess: () => {
                      Object(h.b)("充值中，请稍候"), this.rollPayingStatus(1);
                    },
                    onCashierClose: () => P(!0),
                  }),
                  e.use(this.getPreOrderInfo),
                  e.use(h.a.bind(this)),
                  (this.payService = e),
                  !0
                );
              } catch (e) {
                return (
                  f.a.info("下单页 - 充值支付失败", { data: { e: e } }),
                  c.a.fail("收银台加载失败,请稍后重试"),
                  !1
                );
              }
            },
            getPreOrderInfo(e, t) {
              var i = this;
              return Object(s.a)(function* () {
                try {
                  var s = yield Object(d.a)(e.prepayParams);
                  e.preOrderInfo = Object(o.a)(s);
                } catch (e) {
                  return c.a.fail("预充值失败"), Promise.reject();
                }
                yield t(), (i.isRecharging = !1);
              })();
            },
            startPay(e) {
              var t = this;
              return Object(s.a)(function* () {
                if (t.initPayService()) {
                  Object(n.q)(), t.onClose();
                  var i = { prepayParams: e };
                  try {
                    yield t.payService.startPay(i);
                  } catch (e) {
                    t.isRecharging = !1;
                  }
                }
              })();
            },
            rollPayingStatus(e) {
              Object(h.c)(this.outBizNo)
                .then((t) => {
                  var { status: i } = t;
                  if (2 === i)
                    return (
                      Object(n.p)(),
                      this.onClose(),
                      P(!0),
                      c.a.clear(),
                      c.a.success({ message: "充值成功", duration: 1e3 }),
                      void setTimeout(() => {
                        this.ctx.process.invoke("confirmOrder");
                      }, 1e3)
                    );
                  if (3 === i || 4 === i) {
                    var s = new Error("充值状态异常, " + i);
                    throw ((s.msg = "" + m[i]), s);
                  }
                  if (e > 10) {
                    var a = new Error("充值超时");
                    throw ((a.msg = "充值超时"), a);
                  }
                  return setTimeout(() => this.rollPayingStatus(e + 1), 1e3);
                })
                .catch((e) => {
                  Object(n.k)({ listType: this.getListType() }),
                    c.a.clear(),
                    this.onClose(),
                    P(!0),
                    c.a.fail("充值失败, " + e.msg);
                });
            },
            onSelectGiftPack(e) {
              Object(n.n)({
                idx: this.selectedIndex,
                gpIdx: e,
                listType: this.getListType(),
              });
              var t = this.selectedGiftPacks[e],
                {
                  ruleRights: { bonusAmountRights: i = {} },
                } = t,
                { bonusAmount: s = 0 } = i;
              this.newRecommend &&
                !this.exclusion &&
                this.changeBalance(this.selected.amount + s),
                (this.selectedGiftPackIndex = e);
            },
            beforeSelect(e, t) {
              return this.exclusion && !e
                ? (Object(n.j)(),
                  u.a.confirm({
                    message:
                      "本单储值余额不能和营销同时享受，将以商品原价计算支付金额。",
                    confirmButtonText: t ? "去充值" : "立即充值",
                  }))
                : Promise.resolve(!0);
            },
            changeBalance(e) {
              this.$emit("changeBalance", { val: e });
            },
          },
          ud: !0,
        };
        t.default = r.default.component(k);
      },
    }
  )
);
