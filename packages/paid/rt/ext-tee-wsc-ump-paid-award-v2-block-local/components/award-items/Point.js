"use strict";
var r = require("~/r");
r(
  "I4N3",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      I4N3: function (e, t, i) {
        i.r(t);
        var n = i("XGSL"),
          a = {
            name: "AwardPoint",
            props: {
              info: {
                type: Object,
                default: () => ({ credit: 100, creditName: "积分", num: 0 }),
              },
              themeColor: String,
              canUsePointsScene: Boolean,
              navigateTo: Function,
              isWxReceipt: { type: Boolean, default: () => !1 },
              cloudConfig: { type: Object, default: () => ({}) },
            },
            data: () => ({ hasTapPointsNav: !1 }),
            computed: {
              formatInfo() {
                var { credit: e, creditName: t, desc: i } = this.info,
                  { pointIcon: n } = this.cloudConfig;
                return {
                  icon:
                    n ||
                    "https://img01.yzcdn.cn/upload_files/2021/12/27/Fg4BGK9G5FmKG9NRflo9rtnEJnpZ.png",
                  text: "" + e + (null != t ? t : "积分"),
                  desc: i,
                  buttonText: "立即查看",
                };
              },
            },
            created() {
              this.$emit("log-attach", {
                et: "view",
                ei: "show_fanjifen",
                en: "返积分曝光",
              });
            },
            methods: {
              clickHandle() {
                this.$emit("log-attach", {
                  et: "click",
                  ei: "click_fanjifen_xiangqing",
                  en: "返积分“查看详情”点击",
                });
                var { url: e } = this.info,
                  t = () => {
                    this.navigateTo(e, "creditInfo");
                  };
                if (!this.hasTapPointsNav && this.canUsePointsScene)
                  return (
                    (this.hasTapPointsNav = !0),
                    Object(n.a)({
                      onClose() {
                        t();
                      },
                    })
                  );
                t();
              },
            },
            ud: !0,
          },
          o = i("9ZMt");
        t.default = o.default.component(a);
      },
    }
  )
);
