"use strict";
var r = require("~/r");
r(
  "6OlA",
  Object.assign({}, require("~/v.js").modules, {
    "6OlA": function (e, a, t) {
      t.r(a);
      var i = t("Fcif"),
        n = t("5Xe+"),
        r = t.n(n),
        o = t("AGZf"),
        c = t("w2Y9"),
        s = t.n(c),
        d = {
          name: "AwardMember",
          props: {
            info: {
              type: Object,
              default: () => ({
                memberCards: [
                  {
                    icon: "https://img01.yzcdn.cn/upload_files/2021/06/29/FnY-2M1LsWgQ2LTTTE1aMvEFb9Zn.png",
                    showName: "生日特权",
                  },
                ],
                needActivated: !1,
                url: "",
                buttonText: "立即入会",
              }),
            },
            isWxReceipt: { type: Boolean, default: () => !1 },
            navigateTo: Function,
          },
          computed: {
            curInfo() {
              var e;
              return Object(i.a)({}, this.info, {
                text: this.info.needActivated
                  ? "领取权益卡，享以下超值权益"
                  : "你已获得以下超值权益",
                buttonText: this.info.needActivated ? "立即激活" : "立即查看",
                memberCards: this.formatMemberCardsInfo(
                  null == (e = this.info) ? void 0 : e.cardBenefitBagDTO
                ),
              });
            },
          },
          mounted() {
            var { needActivated: e } = this.curInfo;
            this.$emit("log-attach", {
              et: "view",
              ei: "show_quanyika",
              en: "返权益卡曝光",
            }),
              e &&
                this.$emit("log-attach", {
                  et: "view",
                  ei: "show_quanyika_jihuo",
                  en: "返权益卡“立即激活”曝光",
                });
          },
          methods: {
            handelClick() {
              var { url: e, needActivated: a } = this.info;
              if (
                (this.$emit("log-attach", {
                  et: "click",
                  ei: a ? "click_quanyika_jihuo" : "click_detail_quanyika",
                  en: a ? "返权益卡“立即激活”点击" : "返权益卡查看详情点击",
                }),
                e)
              ) {
                var t = s.a.get("card_alias", e);
                t
                  ? this.navigateTo(
                      "/packages/card/detail/index?alias=" + t,
                      "memberCard"
                    )
                  : Object(o.a)("card_alias参数解析失败");
              }
            },
            formatMemberCardsInfo(e) {
              void 0 === e && (e = {});
              var a = [],
                t = (e) => {
                  var t;
                  null != e &&
                    null != (t = e.benefitPluginInfo) &&
                    t.showName &&
                    a.push(r()(e.benefitPluginInfo, ["showName", "icon"]));
                };
              return (
                Object.keys(e).forEach((a) => {
                  var i = e[a];
                  Array.isArray(i) ? i.forEach(t) : t(i);
                }),
                a.length > 4
                  ? [
                      ...a.slice(0, 3),
                      {
                        showName: "更多权益",
                        icon: "//b.yzcdn.cn/public_files/a1fb1079aa056c48631a190bc5247dd9.png",
                      },
                    ]
                  : a
              );
            },
          },
          ud: !0,
        },
        l = t("9ZMt");
      a.default = l.default.component(d);
    },
  })
);
