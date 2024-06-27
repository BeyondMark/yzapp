"use strict";
var r = require("~/r");
r(
  "eqXS",
  Object.assign({}, require("~/v.js").modules, {
    eqXS: function (e, t, i) {
      i.r(t);
      var r = i("lgMb"),
        n = i("AGZf"),
        a = i("tuFO"),
        o = i.n(a),
        u = i("vbO4"),
        s = i("Fcif"),
        d = i("US/N"),
        c = (e) => Object(d.requestV2)(Object(s.a)({}, e, { config: {} })),
        p = {
          externalClasses: ["custom-class"],
          props: {
            customStyle: { type: String, default: "" },
            item: { type: Object, default: () => ({}) },
            extra: { type: Object, default: () => ({}) },
            needSubscribeMessage: { type: Boolean, default: !1 },
            kdtId: Number,
            _opt: { type: Object, default: () => ({}) },
          },
          data: () => ({ beforGuide: () => {}, redirectUrl: "" }),
          created() {
            this.beforGuide = this.handleTap;
          },
          methods: {
            handleTap(e) {
              var { linkType: t, alias: i } = this.item || {};
              if ("coupon" === t && i)
                return (
                  this.needSubscribeMessage &&
                    this.$emit("handleCouponClick", {
                      windowType: "micro_dc_link_coupon",
                      subscribeType: "优惠券跳链",
                      next: () => {},
                    }),
                  this.getCoupon(i)
                );
              this.needSubscribeMessage && "platform_coupon" === t
                ? this.$emit("handleCouponClick", {
                    windowType: "micro_dc_link_coupon",
                    subscribeType: "优惠券跳链",
                    next: () => {
                      this.$emit("jumpToLink", e);
                    },
                  })
                : this.$emit("jumpToLink", e);
            },
            getCoupon(e) {
              if (!this.loading) {
                this.loading = !0;
                var { _opt: t = {} } = this;
                return ((i = {
                  alias: e,
                  source: "wap_showcase",
                  pageAlias: t.risk_alias,
                  pageType: t.risk_type,
                }),
                c({
                  path: "/wscshop/ump/coupon/takeCouponByAlias.json",
                  method: "POST",
                  data: i,
                }))
                  .then(() => {
                    (this.loading = !1), n.a.success("领取成功");
                  })
                  .catch((t) => {
                    if (((this.loading = !1), u.d.includes(t.data.code)))
                      return ((e) =>
                        c({
                          path: "/wscump/coupon/take-coupon-by-alias.json",
                          method: "GET",
                          data: e,
                        }))({ alias: e }).then((i) => {
                        var { couponGroupId: r } = i;
                        return (
                          (this.$refs[
                            "guide-button"
                          ].requestParam.voucherActivityId = r),
                          (this.$refs["guide-button"].redirectUrl = o()(
                            "/wscump/coupon/fetch?alias=" +
                              e +
                              "&shopAutoEnter=1",
                            "h5",
                            this.kdtId
                          )),
                          Promise.reject(t.data)
                        );
                      });
                    Object(r.b)(t, { message: "店铺太火爆啦，请稍后重试" });
                  });
              }
              var i;
            },
            handleClickContactBack() {
              var e = this.extra && this.extra.sourceParam;
              if ("string" == typeof e)
                try {
                  e = JSON.parse(this.extra.sourceParam);
                } catch (e) {}
              e && this.$emit("contact", this.item, e);
            },
            openGuideDialog(e) {
              var { needGuide: t, guideType: r, guideTargetAlias: n } = e;
              t &&
                i
                  .e("packages/async-tee/chunk")
                  .then(i.bind(null, "JvWB"))
                  .then((e) => e.default)
                  .then((e) => {
                    e.getUserInfo().then((e) => {
                      var { mobile: t } = e;
                      this.$emit("showGuideDialog", {
                        showGuide: !0,
                        guideInfo: { targetType: r, guideTargetAlias: n },
                        mobile: t,
                        beforGuide: this.beforGuide,
                        redirectUrl: this.redirectUrl,
                      });
                    });
                  });
            },
          },
          ud: !0,
        },
        h = i("9ZMt");
      t.default = h.default.component(p);
    },
    vbO4: function (e, t, i) {
      i.d(t, "h", function () {
        return r;
      }),
        i.d(t, "a", function () {
          return n;
        }),
        i.d(t, "i", function () {
          return a;
        }),
        i.d(t, "k", function () {
          return o;
        }),
        i.d(t, "d", function () {
          return u;
        }),
        i.d(t, "l", function () {
          return s;
        }),
        i.d(t, "e", function () {
          return d;
        }),
        i.d(t, "f", function () {
          return c;
        }),
        i.d(t, "n", function () {
          return p;
        }),
        i.d(t, "g", function () {
          return h;
        }),
        i.d(t, "b", function () {
          return l;
        }),
        i.d(t, "m", function () {
          return f;
        }),
        i.d(t, "j", function () {
          return m;
        }),
        i.d(t, "c", function () {
          return b;
        });
      var r = { OFF: "0", ON: "1" },
        n = 10,
        a = 6,
        o = { marketingPage: "marketing-page" },
        u = [160700605, 160700606, 161201051, 160700517],
        s = {
          FreeMember: 1,
          PaidMember: 2,
          FreeBenefitCard: 3,
          PaidBenefitCard: 4,
        },
        d = "coupon",
        c = { Coupon: "coupon", Goods: "goods", Casino: "casino" },
        p = {
          [s.FreeMember]: "开通会员",
          [s.PaidMember]: "开通会员",
          [s.FreeBenefitCard]: "获得权益卡",
          [s.PaidBenefitCard]: "获得权益卡",
        },
        h = "领券",
        l = {
          [s.FreeMember]: "注册会员",
          [s.PaidMember]: "开通会员",
          [s.FreeBenefitCard]: "立即开卡",
        },
        f = {
          [s.FreeMember]: "注册会员",
          [s.PaidMember]: "开通会员",
          [s.FreeBenefitCard]: "免费领卡",
          [s.PaidBenefitCard]: "立即开卡",
        },
        m = {
          [s.FreeMember]: "免费会员",
          [s.PaidMember]: "付费会员",
          [s.FreeBenefitCard]: "权益卡",
          [s.PaidBenefitCard]: "权益卡",
        },
        b = [160700605, 160700606, 161201051, 160700517];
    },
  })
);
