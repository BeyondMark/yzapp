"use strict";
var r = require("~/r");
r(
  "+vxo",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "+vxo": function (e, t, i) {
        i.r(t);
        var r = i("zzhz"),
          a = i("YeA1"),
          s = getApp(),
          n = {
            props: {
              afterPayGuide: Object,
              navigateTo: Function,
              kdtId: String,
            },
            data: () => ({
              shopName: s.getShopInfoSync().base.shop_name || "",
            }),
            computed: {
              benefitList() {
                return this.formatData(this.afterPayGuide);
              },
              showMemberGuide() {
                var e,
                  t = null == (e = this.afterPayGuide) ? void 0 : e.needGuide;
                try {
                  t && this.logger("view");
                } catch (e) {}
                return t;
              },
              benefitOver3() {
                return this.benefitList.length > 3;
              },
            },
            methods: {
              formatData(e) {
                if (0 === Object.keys(e || {}).length) return [];
                var {
                    levelBenefit: t,
                    birthdayInfoList: i,
                    festivalInfoList: a,
                    memberdayInfoList: s,
                    memberVoucherInfoList: n,
                  } = e,
                  o = Object(r.d)({
                    birthdayInfoList: i,
                    festivalInfoList: a,
                    memberdayInfoList: s,
                    memberVoucherInfoList: n,
                  }),
                  c = Object(r.a)(t, o);
                return c.length > 4
                  ? c
                      .slice(0, 3)
                      .concat({ appName: "全部权益", benefitCount: c.length })
                  : c;
              },
              gotoMemberPage() {
                this.logger("click");
                var { dmc: e } = Object(a.a)();
                e.navigate("MemberCenter", { kdt_id: this.kdtId });
              },
              logger(e) {
                var t =
                  "view" === e
                    ? {
                        et: "view",
                        ei: "paysuccess_mj",
                        en: "支付成功页入会组件曝光",
                      }
                    : {
                        et: "click",
                        ei: "paysuccess_mj_click",
                        en: "支付成功页入会组件点击",
                      };
                this.$emit("log-attach", t);
              },
            },
            ud: !0,
          },
          o = i("9ZMt");
        t.default = o.default.component(n);
      },
    }
  )
);
