"use strict";
var r = require("~/r");
r(
  "W8M3",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      W8M3: function (e, t, n) {
        n.r(t);
        var c = n("YAk7"),
          i = {
            [c.f.Survey]: {
              img: "https://b.yzcdn.cn/public_files/80fa7fcede0ea92f7363f0b1735c25c6.png",
              text: "填写问卷，让我们可以提供更好的服务",
              btnText: "立即查看",
              cloudIcon: "questionnaireIcon",
            },
            [c.f.Feature]: {
              img: "https://b.yzcdn.cn/public_files/0708826399af0b984f500735b4c01a0e.png",
              text: "查看更多店铺优惠",
              desc: "赶紧去看看吧~~~",
              btnText: "立即查看",
              cloudIcon: "preferentialIcon",
            },
            [c.f.Seller]: {
              img: "https://b.yzcdn.cn/public_files/585699ec541cc9484bd329961686437b.png",
              text: "恭喜你可成为销售员，分享赚佣金",
              btnText: "立即申请",
              cloudIcon: "distributorIcon",
            },
          },
          o = {
            name: "AwardSimpleShow",
            props: {
              info: { type: Object, default: () => ({}) },
              themeColor: String,
              isWxReceipt: { type: Boolean, default: () => !1 },
              cloudConfig: { type: Object, default: () => ({}) },
              isSkyline: Boolean,
            },
            computed: {
              curInfo() {
                var e,
                  t =
                    this.info.promotionType === c.f.Seniorseller
                      ? c.f.Seller
                      : this.info.promotionType,
                  n = i[t];
                return (
                  (n.img =
                    (null == (e = this.cloudConfig)
                      ? void 0
                      : e[n.cloudIcon]) || n.img),
                  n
                );
              },
            },
            methods: {
              clickBtn() {
                this.$emit("click-btn");
              },
            },
            ud: !0,
          },
          l = n("9ZMt");
        t.default = l.default.component(o);
      },
    }
  )
);
