"use strict";
var r = require("~/r");
r(
  "9nds",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "9nds": function (e, t, a) {
        a.r(t);
        var c = a("jmjq"),
          i = a.n(c),
          r = a("YAk7"),
          s = 2,
          n = {
            name: "AwardStoreValue",
            props: {
              info: { type: Array, default: () => [] },
              themeColor: String,
              navigateTo: Function,
              isWxReceipt: { type: Boolean, default: () => !1 },
              cloudConfig: { type: Object, default: () => ({}) },
            },
            computed: {
              curInfo() {
                var e, t;
                return null != (e = null == (t = this.info) ? void 0 : t[0])
                  ? e
                  : {};
              },
              formatInfo() {
                var {
                    isUserCardActivated: e,
                    customerDesc: t,
                    cashbackType: a,
                  } = this.curInfo,
                  c = a === r.d.Money,
                  { creditIcon: i } = this.cloudConfig;
                return {
                  icon:
                    i ||
                    "https://img01.yzcdn.cn/upload_files/2021/12/27/Fo8KPY_kwgxWTQtJvU2kVx-qv-K2.png",
                  text: this.formatTitle(),
                  desc: t,
                  buttonText: e || c ? "立即查看" : "立即激活",
                };
              },
            },
            mounted() {
              var {
                  type: e,
                  cashbackType: t,
                  isUserCardActivated: a,
                } = this.curInfo,
                c = t === r.d.Money;
              this.$emit("log-attach", {
                et: "view",
                ei: "view_cashback",
                en: "返现曝光",
                params: {
                  cashback_plugin: e === s ? "团购返现" : "订单返现",
                  cashback_type: t === r.d.Money ? "现金" : "储值金",
                  is_active: a || c ? 1 : 0,
                },
              });
            },
            methods: {
              formatTitle() {
                var { cash: e, cashbackType: t } = this.curInfo,
                  a = t === r.d.Money ? "现金" : "储值金";
                return i()(e, !0, !1) + "元" + a;
              },
              clickHandle() {
                var {
                  isUserCardActivated: e,
                  url: t,
                  cashbackType: a,
                  type: c,
                } = this.curInfo;
                this.$emit("log-attach", {
                  et: "click",
                  ei: e ? "click_cashback" : "click_activate",
                  en: e ? "返现立即查看点击" : "返现立即激活点击",
                  params: {
                    cashback_plugin: c === s ? "团购返现" : "订单返现",
                    cashback_type: a === r.d.Money ? "现金" : "储值金",
                  },
                }),
                  this.navigateTo(t, "cash");
              },
            },
            ud: !0,
          },
          o = a("9ZMt");
        t.default = o.default.component(n);
      },
    }
  )
);
