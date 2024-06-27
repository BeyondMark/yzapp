"use strict";
var r = require("~/r");
r(
  "YZ46",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      YZ46: function (e, t, o) {
        o.r(t);
        var a = o("Yiq8"),
          i = o("YeA1"),
          n = {
            props: {
              show: { type: Boolean, default: !1 },
              amount: Number,
              valueCard: Object,
              hasExclusionCard: Boolean,
              recommendDetaid: String,
              newRecommend: Boolean,
              themeColors: { type: Object, default: () => ({}) },
              useCustomerDiscount: {
                type: Object,
                default: () => ({ open: !1, discount: "" }),
              },
              mobile: Number,
              prepayCardTotalAmount: { type: Number, default: 0 },
              disabledBalance: Boolean,
            },
            data: () => ({
              activeIndex: 0,
              product: {},
              isGiftFail: !1,
              that: {},
              kdtId: "",
              initialShow: !1,
            }),
            watch: {
              show(e) {
                e && !this.initialShow && (this.initialShow = !0);
              },
            },
            created() {
              Object(i.b)(this, ["kdtId"]);
            },
            mounted() {
              Object(a.f)();
            },
            methods: {
              onConfirm(e) {
                this.$emit("onConfirm", e), this.onClose();
              },
              onClose(e) {
                var { activeIndex: t } = this;
                "pay" !== e && 1 === t && Object(a.d)(), this.$emit("onClose");
              },
              onRefreshData() {
                this.$emit("onRefreshData");
              },
            },
            ud: !0,
          },
          s = o("9ZMt");
        t.default = s.default.component(n);
      },
    }
  )
);
