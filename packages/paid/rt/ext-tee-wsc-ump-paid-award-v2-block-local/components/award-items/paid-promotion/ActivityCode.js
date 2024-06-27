"use strict";
var r = require("~/r");
r(
  "bCj7",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      bCj7: function (e, t, i) {
        i.r(t);
        var r = i("YAk7"),
          o = i("Ekqs"),
          n = {
            name: "AwardActivityCode",
            props: {
              info: { type: Object, default: () => ({}) },
              navigateTo: Function,
              isWxReceipt: { type: Boolean, default: () => !1 },
              themeColor: String,
              returnUrl: String,
              cloudConfig: { type: Object, default: () => ({}) },
            },
            computed: {
              isPerson() {
                return this.info.activityQrCodeType === r.a.Person;
              },
            },
            methods: {
              afterContact() {
                this.$emit("pure-log", {
                  et: "click",
                  ei: "click_marketing_paidpro_service",
                  en: "无法识别按钮的点击",
                });
              },
              longTouch() {
                this.$emit("pure-log", {
                  et: "click",
                  ei: "long_press_paidpro_activity_code",
                  en: "支付有礼长按活码",
                });
              },
              clickBtn() {
                Object(o.a)({
                  type: r.f.ActivitiesQrCode,
                  isCustom: !1,
                  logFn: (e) => this.$emit("pure-log", e),
                }),
                  this.navigateTo(this.returnUrl);
              },
            },
            ud: !0,
          },
          c = i("9ZMt");
        t.default = c.default.component(n);
      },
    }
  )
);
