"use strict";
var r = require("~/r");
r(
  "fSUB",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      fSUB: function (t, e, i) {
        i.r(e);
        var r = i("a1Mm"),
          l = i("rxfT"),
          u = {
            props: {
              styleMode: { type: String, default: "horizontal" },
              kdtId: { type: Number, default: 0 },
              titleInfo: {
                type: Object,
                default: () => ({
                  prefix: "注册",
                  text: "享丰富会员权益",
                  noBenefits: !0,
                }),
              },
              themeColor: { type: String, default: "#a8865d" },
              subTitleProp: String,
            },
            data: () => ({ defaultAvatar: Object(r.a)(l.d, "!98x0.jpg") }),
            computed: {
              fullTitle() {
                return "" + this.titleInfo.prefix + this.titleInfo.text;
              },
              subTitle() {
                return !0 === this.titleInfo.noBenefits
                  ? "立即入会享会员特权"
                  : "更多会员权益等你解锁";
              },
            },
            mounted() {
              this.$emit("view");
            },
            methods: {
              handleLogin(t) {
                this.$emit("login", t);
              },
              handleAuthFail(t) {
                this.$emit("auth-fail", t);
              },
            },
            ud: !0,
          },
          n = i("9ZMt");
        e.default = n.default.component(u);
      },
    }
  )
);
