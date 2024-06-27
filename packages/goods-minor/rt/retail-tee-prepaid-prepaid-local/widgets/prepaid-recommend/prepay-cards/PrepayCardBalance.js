"use strict";
var r = require("~/r");
r(
  "ESDN",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      ESDN: function (e, a, t) {
        t.r(a);
        var r = t("U1kS"),
          s = t.n(r),
          i = t("AGZf"),
          n = t("z9IR"),
          o = t("k88A"),
          c = t("KPy4"),
          d = {
            props: {
              disabled: Boolean,
              cardType: String,
              valueCard: Object,
              valueCardRecommend: String,
              payAssetActivityTagDesc: String,
              newRecommend: Boolean,
              product: Object,
              themeColors: { type: Object, default: () => ({}) },
              kdtId: [Number, String],
              agreementUrl: String,
              disabledBalance: Boolean,
            },
            data: () => ({
              showBalance: !1,
              showReason: !1,
              checked: !1,
              showFreeze: !1,
              balance: {},
              prepaidPrefix: "储值卡消费者服务",
              giveRecharge: !1,
              balanceZero: !1,
              isRecharged: !0,
              kdt_id: "",
            }),
            computed: {
              formatBalanceFreezingSumDnom() {
                var e = this.balance.freezingSumDnom;
                return e % 100 == 0
                  ? Math.round(e / 100)
                  : (e / 100).toFixed(2);
              },
              showDisabled() {
                return this.disabled || this.disabledBalance;
              },
              themeStyle() {
                return this.themeColors["start-bg"] &&
                  this.themeColors["end-bg"]
                  ? "background-image: linear-gradient(to right, " +
                      this.themeColors["start-bg"] +
                      " 0%, " +
                      this.themeColors["end-bg"] +
                      " 100%)"
                  : " background-color: " + this.themeColors.general;
              },
            },
            watch: {
              valueCard() {
                this.initState();
              },
              valueCardRecommend() {
                this.initState();
              },
            },
            created() {
              this.initState();
            },
            methods: {
              initState(e) {
                var {
                    valueCardRecommend: a,
                    valueCard: t,
                    disabled: r,
                    payAssetActivityTagDesc: s,
                    newRecommend: i,
                  } = this,
                  n = a && JSON.parse(a),
                  o = c.a.balance({
                    valueCard: t,
                    disabled: r,
                    payAssetActivityTagDesc: s,
                    newRecommend: i,
                  });
                Object.assign(this, {
                  showBalance: c.a.showBalance(o),
                  showReason: c.a.showReason(r, o),
                  checked: c.a.checked(o, r, t),
                  showFreeze: c.a.showFreeze(r, o),
                  giveRecharge: !1 === e ? e : o.giveRecharge,
                  balance: o,
                  balanceZero: 0 === Number(o.balance),
                  isRecharged: !!n.cardNo,
                });
              },
              ensure() {
                var { that: e, checked: a, balance: t } = this;
                if (t.isExclusion) {
                  var r =
                    "若使用储值余额，将不能享受店铺活动、优惠券、积分、储值专享折扣等优惠，是否继续使用？";
                  return (
                    a
                      ? (r =
                          "若取消使用储值余额，系统将重新计算所有优惠活动价格")
                      : "overlay_carriageDiscount_customerPostageFree_deliveryCard_postFree" ===
                          t.overlayExclusionCode &&
                        (r =
                          "使用储值余额后将无法享受店铺活动、积分等优惠，但仍可享受包邮，确认是否继续使用？"),
                    n.a.confirm({ message: r, context: e })
                  );
                }
                return Promise.resolve();
              },
              onCheck() {
                if (!this.showDisabled) {
                  var {
                      balance: e,
                      disabled: a,
                      cardType: t,
                      valueCardRecommend: r,
                      checked: s,
                    } = this,
                    i = r && JSON.parse(r),
                    { cardNo: n } = i;
                  Number(e.balance) > 0 &&
                    !a &&
                    e.summaryCardNo &&
                    (s || n || !e.giveRecharge || this.signPrepaidAgreement(),
                    this.ensure()
                      .then(() => {
                        this.$emit(
                          "onCheck",
                          { card: e, cardType: t },
                          { bubbles: !0, composed: !0 }
                        );
                      })
                      .catch(() => {}));
                }
              },
              signPrepaidAgreement() {
                return Object(o.a)()
                  .then((e) => {
                    e.cardNo && this.$emit("onRefreshData"),
                      setTimeout(() => {
                        this.initState(!1);
                      }, 1e3 / 30);
                  })
                  .catch(() => {
                    i.a.fail("签约开卡失败");
                  });
              },
            },
            ud: !0,
            mixins: [s.a],
          },
          l = t("9ZMt");
        a.default = l.default.component(d);
      },
      U1kS: function (e, a, t) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = r(t("9ZMt"));
        a.default = {
          methods: {
            _t_hn_(e) {
              s.default.navigate({
                url: e.currentTarget.dataset.href,
                type: "navigateTo",
              });
            },
          },
        };
      },
    }
  )
);
