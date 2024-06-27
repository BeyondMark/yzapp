"use strict";
var r = require("~/r");
r(
  "65wY",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "65wY": function (e, t, i) {
        i.r(t);
        var a = i("9ZMt"),
          o = i("z9IR"),
          n = i("b4An"),
          c = i("j/Mq"),
          s = {
            name: "PriorUseNewUmp",
            props: {
              info: { type: Object, default: () => ({}) },
              themeColor: String,
              isWxReceipt: { type: Boolean, default: () => !1 },
              navigateTo: Function,
              kdtId: String,
            },
            computed: {
              formatInfo: () => ({
                icon: "https://b.yzcdn.cn/public_files/882f03f55476af5ab5b3f2cc75394ec5.png",
                text: "0元下单专属资格",
                desc: "先用后付，确认收货后付款",
                buttonText: "立即领取",
              }),
            },
            mounted() {
              var e = "weapp" === a.default.getEnv() ? "weapp" : "wechat";
              this.isWxReceipt
                ? this.$emit("log-attach", {
                    et: "view",
                    ei: "show_xianyonghoufu_xiaopiao",
                    en: "先用后付营销",
                  })
                : this.$emit("log-attach", {
                    et: "view",
                    ei: "show_ump_xianyonghoufu_" + e,
                    en: "“先用后付”营销曝光",
                  });
            },
            created() {},
            methods: {
              onClick() {
                var e = a.default.getEnv(),
                  t = { env: "weapp" === e ? "weapp" : "wechat" };
                this.isWxReceipt
                  ? (this.$emit("log-attach", {
                      et: "click",
                      ei: "open_xianyonghoufu_xiaopiao",
                      en: "先用后付开通",
                    }),
                    this.navigateTo(
                      Object(n.a)(
                        "/wscassets/prior-use/index",
                        "h5",
                        this.kdtId
                      )
                    ))
                  : (this.$emit("log-attach", {
                      et: "click",
                      ei: "open_xianyonghoufu_" + e,
                      en: "“先用后付”店家开通",
                    }),
                    Object(c.a)(t).catch((e) => {
                      "fail" === (null == e ? void 0 : e.errorType) &&
                        o.a.alert({
                          title: "领取失败",
                          context: e.msg,
                          ref: this.$refs.priorUseUmpDialog,
                        });
                    }));
              },
            },
            ud: !0,
          };
        t.default = a.default.component(s);
      },
    }
  )
);
