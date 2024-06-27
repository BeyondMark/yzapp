"use strict";
var r = require("~/r");
r(
  "lVYT",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      lVYT: function (e, r, t) {
        t.r(r);
        var n = t("9ZMt"),
          i = t("vbO4"),
          u = t("hNQY"),
          d = n.default.getGlobal("logger"),
          a = {
            name: "GuideButton",
            props: {
              guideType: { type: String, value: "" },
              beforGuide: { type: Function, value: () => {} },
              kdtId: { type: String || Number, value: "" },
              redirectUrl: { type: String, value: "" },
              showPop: { type: Boolean, value: !1 },
              guideInfo: {
                type: Object,
                value: { targetType: i.l.FreeMember, guideTargetAlias: "" },
              },
              mobile: { type: String, value: "" },
            },
            data: () => ({}),
            computed: {
              popupTitle() {
                var { targetType: e } = this.guideInfo;
                return i.n[e] + "即可" + i.g;
              },
              confirmButtonText() {
                var { targetType: e } = this.guideInfo;
                return this.guideType === i.f.Coupon ? i.b[e] : i.m[e];
              },
            },
            methods: {
              onCancel() {
                this.$emit("closeGuide");
              },
              onConfirm() {
                var e,
                  {
                    beforGuide: r,
                    redirectUrl: t,
                    kdtId: n,
                    guideInfo: a,
                    mobile: o,
                  } = this,
                  { targetType: c, guideTargetAlias: f } = a,
                  l = {
                    guideType: i.e,
                    targetType: c,
                    kdtId: n,
                    redirectUrl: t,
                    guideTargetAlias: f,
                  };
                (d &&
                  d.log({
                    et: "click",
                    ei: "click_" + i.e,
                    en: i.g + "引导点击",
                    params: { targetType: i.j[c] },
                  }),
                o)
                  ? Object(u.a)(l)
                  : (this.$emit("closeGuide"),
                    null == (e = r()) ||
                      e.catch((e) => {
                        i.c.includes(e.code) && Object(u.a)(l);
                      }));
              },
            },
            ud: !0,
          };
        r.default = n.default.component(a);
      },
      vbO4: function (e, r, t) {
        t.d(r, "h", function () {
          return n;
        }),
          t.d(r, "a", function () {
            return i;
          }),
          t.d(r, "i", function () {
            return u;
          }),
          t.d(r, "k", function () {
            return d;
          }),
          t.d(r, "d", function () {
            return a;
          }),
          t.d(r, "l", function () {
            return o;
          }),
          t.d(r, "e", function () {
            return c;
          }),
          t.d(r, "f", function () {
            return f;
          }),
          t.d(r, "n", function () {
            return l;
          }),
          t.d(r, "g", function () {
            return g;
          }),
          t.d(r, "b", function () {
            return p;
          }),
          t.d(r, "m", function () {
            return s;
          }),
          t.d(r, "j", function () {
            return m;
          }),
          t.d(r, "c", function () {
            return b;
          });
        var n = { OFF: "0", ON: "1" },
          i = 10,
          u = 6,
          d = { marketingPage: "marketing-page" },
          a = [160700605, 160700606, 161201051, 160700517],
          o = {
            FreeMember: 1,
            PaidMember: 2,
            FreeBenefitCard: 3,
            PaidBenefitCard: 4,
          },
          c = "coupon",
          f = { Coupon: "coupon", Goods: "goods", Casino: "casino" },
          l = {
            [o.FreeMember]: "开通会员",
            [o.PaidMember]: "开通会员",
            [o.FreeBenefitCard]: "获得权益卡",
            [o.PaidBenefitCard]: "获得权益卡",
          },
          g = "领券",
          p = {
            [o.FreeMember]: "注册会员",
            [o.PaidMember]: "开通会员",
            [o.FreeBenefitCard]: "立即开卡",
          },
          s = {
            [o.FreeMember]: "注册会员",
            [o.PaidMember]: "开通会员",
            [o.FreeBenefitCard]: "免费领卡",
            [o.PaidBenefitCard]: "立即开卡",
          },
          m = {
            [o.FreeMember]: "免费会员",
            [o.PaidMember]: "付费会员",
            [o.FreeBenefitCard]: "权益卡",
            [o.PaidBenefitCard]: "权益卡",
          },
          b = [160700605, 160700606, 161201051, 160700517];
      },
    }
  )
);
