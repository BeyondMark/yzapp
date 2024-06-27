"use strict";
var r = require("~/r");
r(
  "AiMq",
  Object.assign({}, require("~/v.js").modules, {
    AiMq: function (e, t, o) {
      o.r(t);
      var i = o("9ZMt"),
        n = o("tuFO"),
        a = o.n(n),
        r = o("w2Y9"),
        s = o.n(r),
        l = o("z9IR"),
        d = {
          props: {
            display: { type: Object, default: () => ({ openDisplayCard: !1 }) },
            info: { type: Object, default: () => ({}) },
            displayCardStyles: { type: Object, default: () => ({}) },
            orderCreated: { type: Boolean, default: !1 },
            kdtId: Number,
          },
          computed: {
            labelText() {
              var { cardName: e } = this.info;
              return e.length > 15 ? e.substring(0, 15) + "..." : e;
            },
            isSelect() {
              return this.display.openDisplayCard;
            },
          },
          mounted() {
            var { totalRecommendedDiscountPrice: e, couponNum: t } = this.info;
            this.isSelect &&
              0 === e &&
              t &&
              this.handleUseCouponConfirm("onShowVirtualCouponList");
          },
          methods: {
            postLog() {
              this.$emit("postLog", {
                et: "click",
                ei: "member_guide_click",
                en: "下单引导办卡组件点击",
              });
            },
            handleDetail() {
              var { cardType: e, alias: t } = this.info;
              if ((this.postLog(), 1 === e)) {
                var o,
                  n = a()(
                    s.a.add("/wscuser/scrm/benefitcard", {
                      kdt_id: this.kdtId,
                      card_alias: t,
                    }),
                    "h5",
                    this.kdtId
                  );
                (o =
                  "/pages/common/webview-page/index?src=" +
                  encodeURIComponent(n)) &&
                  i.default.navigate({ type: "navigateTo", url: o });
              } else if (2 === e) {
                var r;
                a()("/pay/wscuser_pluscenter", "cashier", this.kdtId);
                (r = "/packages/shop/levelcenter/plus/index"),
                  i.default.navigate({ type: "navigateTo", url: r });
              }
            },
            handleToggle() {
              this.postLog();
              var { totalRecommendedDiscountPrice: e, couponNum: t } =
                this.info;
              !this.isSelect && 0 === e && t
                ? this.handleUseCouponConfirm("onToggle")
                : this.ignoreVirtualCoupon("onToggle", !0);
            },
            handleUseCouponConfirm(e) {
              this.info.hasVirtualCouponSwitch
                ? l.a
                    .confirm({
                      title: "请选择可用优惠券",
                      confirmButtonText: "去使用",
                      cancelButtonText: "暂不使用",
                      confirmButtonColor: this.displayCardStyles.themeColor,
                      zIndex: 1e4,
                      customStyle: "color: #323233",
                      ref: this.$refs.guideDialog,
                    })
                    .then(() => {
                      this.ignoreVirtualCoupon(e, !1);
                    })
                    .catch(() => {
                      this.ignoreVirtualCoupon(e, !0);
                    })
                : this.ignoreVirtualCoupon(e, !0);
            },
            ignoreVirtualCoupon(e, t) {
              this.$emit(e, { ignoreVirtualCoupon: t });
            },
            handleLookProtocol() {
              var e = 1 === this.info.cardType ? "roattxf9" : "1odjry5d";
              this.$emit("openAgree", e);
            },
          },
          ud: !0,
        };
      t.default = i.default.component(d);
    },
  })
);
