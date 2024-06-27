"use strict";
var r = require("~/r");
r(
  "bxgz",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      bxgz: function (e, t, a) {
        a.r(t);
        var s = a("Fcif"),
          r = a("z9IR"),
          i = a("9ZMt"),
          u = a("JLg1"),
          d = [
            { title: "可用", value: "list" },
            { title: "不可用", value: "disabled" },
          ];
        var o = !1,
          l = {
            props: {
              show: Boolean,
              amount: Number,
              valueCardList: Object,
              hasExclusionCard: Boolean,
              recommendDetaid: String,
              payAssetActivityTagDesc: String,
              newRecommend: Boolean,
              useCustomerDiscount: Object,
              that: Object,
              product: Object,
              themeColors: { type: Object, default: () => ({}) },
              kdtId: [Number, String],
              disabledBalance: Boolean,
            },
            data: () => ({
              TAB_LIST: d,
              active: 0,
              prepayCardTotalAmount: 0,
              valueCard: { checked: [], disabled: [], list: [] },
              statusList: [],
            }),
            computed: {
              discountText() {
                return this.useCustomerDiscount.open
                  ? this.useCustomerDiscount.discount / 10 + "折"
                  : "";
              },
              emptyCard() {
                var {
                  valueCard: e,
                  payAssetActivityTagDesc: t,
                  newRecommend: a,
                } = this;
                return 0 === (e.list || []).length && (!t || a);
              },
              emptyDisabledCard() {
                var { valueCard: e } = this;
                return 0 === (e.disabled || []).length;
              },
              customerDiscountNotFullPay() {
                var {
                  useCustomerDiscount: e = {},
                  amount: t,
                  prepayCardTotalAmount: a,
                } = this;
                return e && e.open && a < t;
              },
              noticeText() {
                var { useCustomerDiscount: e = {}, amount: t } = this;
                return (
                  e &&
                  "需至少选择" +
                    (Math.abs(t) / 100).toFixed(2) +
                    "元，才能使用储值专享折扣（" +
                    e.discount / 10 +
                    "折）。"
                );
              },
              agreementUrl() {
                return "web" === i.default.platform
                  ? "//h5.youzan.com/prepaid/card/agreement?kdt_id=" +
                      this.kdtId
                  : "/packages/pre-card/agreement/index";
              },
              valueCard2Render() {
                return Object(s.a)({}, this.valueCard, {
                  list: this.valueCard.list.filter(
                    (e) => e.summaryCardNo !== u.a
                  ),
                });
              },
              checkedCardInfoList() {
                var { valueCard: e } = this,
                  t = [...e.checked],
                  a = [...e.list];
                return t
                  .map((e) => a.find((t) => t.summaryCardNo === e))
                  .filter(Boolean);
              },
            },
            watch: {
              show(e) {
                e && this.updateValueCard();
              },
            },
            mounted() {
              this.updateValueCard();
            },
            methods: {
              updateValueCard() {
                var { valueCardList: e, hasExclusionCard: t } = this;
                (o = t),
                  (this.valueCard = Object(s.a)({}, e)),
                  (this.statusList = this.calStatusList()),
                  this.calcPrepayCardTotalAmount(),
                  setTimeout(() => {
                    this.active = 0;
                  }, 1e3 / 30),
                  this.$refs.vanTabs &&
                    setTimeout((e) => {
                      var t, a;
                      (null == (t = this.$refs) || null == (a = t.vanTabs)
                        ? void 0
                        : a.resize) && this.$refs.vanTabs.resize();
                    }, 100);
              },
              calHasExclusionCard() {
                return this.checkedCardInfoList.some((e) => e.isExclusion);
              },
              calStatusList() {
                var e = [
                  ...new Set(
                    this.checkedCardInfoList
                      .map((e) => e.overlayExclusionCode)
                      .filter(Boolean)
                  ),
                ].sort();
                return e.length && e[0], e;
              },
              checkedCard(e) {
                var { card: t, cardType: a, valueCard: r } = e,
                  i = { valueCard: Object(s.a)({}, r) },
                  { checked: u } = i[a],
                  d = u.indexOf(t.summaryCardNo);
                (i[a].checked =
                  -1 !== d
                    ? [...u.filter((e) => e !== t.summaryCardNo)]
                    : [...u, t.summaryCardNo]),
                  (this.valueCard = Object(s.a)({}, i.valueCard)),
                  this.calcPrepayCardTotalAmount();
              },
              onRefreshData() {
                this.$emit("onRefreshData");
              },
              onCheck(e) {
                var { card: t, cardType: a } = e,
                  { valueCard: s } = this;
                this.checkedCard({ card: t, cardType: a, valueCard: s });
              },
              valueCardTotalAmount() {
                var { valueCard: e } = this,
                  t = ((e && e.list) || []).filter(
                    (t) => -1 !== e.checked.indexOf(t.summaryCardNo)
                  );
                return t.map((e) => e.balance).reduce((e, t) => e + t, 0);
              },
              calcPrepayCardTotalAmount() {
                var e = this.valueCardTotalAmount();
                this.prepayCardTotalAmount = e;
              },
              onTabChange(e) {
                var t = e.index || 0;
                this.active = t;
              },
              onConfirm() {
                var { valueCard: e, valueCardList: t } = this,
                  a = this.calHasExclusionCard() !== o,
                  i = this.calStatusList(),
                  u =
                    this.statusList.some((e, t) => e !== i[t]) ||
                    i.some((e, t) => e !== this.statusList[t]),
                  d = this.statusList ? u : a;
                this.customerDiscountNotFullPay
                  ? r.a
                      .confirm({
                        message:
                          "订单使用了“储值专享折扣（" +
                          this.discountText +
                          "）“，修改选卡金额将导致优惠不可用，确定操作吗？",
                      })
                      .then(
                        () => {
                          this.$emit(
                            "onConfirm",
                            {
                              valueCard: e,
                              keepSelect:
                                0 === e.checked.length &&
                                0 !== t.checked.length,
                              exclusionCard: d,
                              isCustomerDiscountNotFullPay: !0,
                            },
                            { bubbles: !0, composed: !0 }
                          ),
                            r.a.close();
                        },
                        () => {
                          var { valueCardList: e } = this;
                          (this.valueCard = Object(s.a)({}, e)),
                            this.calcPrepayCardTotalAmount();
                        }
                      )
                      .catch(() => {
                        r.a.close();
                      })
                  : this.$emit(
                      "onConfirm",
                      {
                        valueCard: e,
                        keepSelect:
                          0 === e.checked.length && 0 !== t.checked.length,
                        exclusionCard: d,
                        isCustomerDiscountNotFullPay: !1,
                      },
                      { bubbles: !0, composed: !0 }
                    );
              },
            },
            ud: !0,
          };
        t.default = i.default.component(l);
      },
    }
  )
);
