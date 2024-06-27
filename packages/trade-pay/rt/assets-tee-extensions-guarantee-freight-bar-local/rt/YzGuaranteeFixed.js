"use strict";
var r = require("~/r");
r(
  "b9g3",
  Object.assign({}, require("~/v.js").modules, {
    b9g3: function (e, o, n) {
      n.r(o);
      var t = {
          props: {
            themeColors: Object,
            docs: {
              type: Object,
              default: () => ({
                icon: {
                  logo: {
                    iconShortTextGreen:
                      "//b.yzcdn.cn/security/fangxin-green.svg",
                  },
                },
              }),
            },
            padding: null,
            hideYzGuarantee: Boolean,
          },
          data: () => ({
            showPopup: !1,
            logoAddYouzan: !1,
            logo: "//b.yzcdn.cn/security/fangxin-green.svg",
          }),
          computed: {
            content() {
              var e, o;
              return (
                (null == (e = this.docs) || null == (o = e.orderBuyPage)
                  ? void 0
                  : o.fixedPopContent) || [
                  {
                    key: "persional_customer_service",
                    desc: "专属客服",
                    content:
                      "点击订单详情页-有赞放心购专线客服，快速解决售后问题。",
                    icon: "//b.yzcdn.cn/guarantee/dark/persional_customer_service.png",
                  },
                  {
                    key: "priority_claims",
                    desc: "优先赔付",
                    content:
                      "符合描述不当、运费争议、商家不履约等情况并提供有效凭证的，在赔付申请有效期内发起的，有赞将联合中国人寿保险先行赔付。",
                    icon: "//b.yzcdn.cn/guarantee/dark/priority_claims.png",
                  },
                ]
              );
            },
          },
          watch: {
            logoAddYouzan() {
              this.updateLogo();
            },
            "docs.icon.logo.iconShortTextGreen": function () {
              this.updateLogo();
            },
          },
          mounted() {
            this.abtest();
          },
          methods: {
            updateLogo() {
              var e, o, n;
              this.logo = this.logoAddYouzan
                ? "//b.yzcdn.cn/guarantee/youzan-fangxin-green.png"
                : (null == (e = this.docs) ||
                  null == (o = e.icon) ||
                  null == (n = o.logo)
                    ? void 0
                    : n.iconShortTextGreen) ||
                  "//b.yzcdn.cn/security/fangxin-green.svg";
            },
            showDetail() {
              this.ctx.logger &&
                this.ctx.logger.log({
                  et: "click",
                  ei: "click_gurantee",
                  en: "点击有赞担保",
                  params: { hide_guarantee: this.hideYzGuarantee },
                }),
                (this.showPopup = !0),
                this.$emit("fetch-doc");
            },
            onClose() {
              this.showPopup = !1;
            },
            abtest() {},
          },
          ud: !0,
        },
        i = n("9ZMt");
      o.default = i.default.component(t);
    },
  })
);
