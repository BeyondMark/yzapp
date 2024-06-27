"use strict";
var r = require("~/r");
r(
  "+gyU",
  Object.assign({}, require("~/v.js").modules, {
    "+gyU": function (e, r, t) {
      t.r(r);
      var i = t("Fcif"),
        n = t("5Xe+"),
        o = t.n(n),
        l = t("jmjq"),
        c = t.n(l),
        u = {
          name: "AwardPresent",
          props: {
            info: { type: Object, default: () => ({}) },
            themeColor: String,
            isWxReceipt: { type: Boolean, default: () => !1 },
            isSkyline: Boolean,
          },
          computed: {
            themeBackground5Style: () =>
              "background: var(--ump-coupon-bg, #f2f2ff);display: flex;padding: 12px;",
            themeColorStyle: () => "color: var(--ump-price, #323233);",
            curInfo() {
              var e, r;
              return Object(i.a)(
                {},
                o()(this.info, ["detailUrl", "imgUrl"]),
                null != (e = null == (r = this.info) ? void 0 : r.presents)
                  ? e
                  : {}
              );
            },
            curGoodsPrice() {
              return c()(this.curInfo.originPrice, !0, !1);
            },
          },
          methods: {
            clickBtn() {
              this.$emit("click-handle");
            },
          },
          ud: !0,
        },
        a = t("9ZMt");
      r.default = a.default.component(u);
    },
  })
);
