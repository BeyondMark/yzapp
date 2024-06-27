"use strict";
var r = require("~/r");
r(
  "93uY",
  Object.assign({}, require("~/v.js").modules, {
    "93uY": function (e, t, o) {
      o.r(t);
      var r = o("YehF"),
        u = getApp(),
        n = {
          props: {
            value: { type: Boolean, default: !1 },
            zIndex: { type: Number, default: 100 },
            content: {
              type: Object,
              default: () => ({
                title: "坏损无忧",
                content: {
                  shortDesc:
                    "签收后24小时内发现商品破损、污渍、生鲜类变质/坏果等情况，可申请放心购赔付（仅限快递配送、同城第三方配送订单）",
                  shortDescRetail:
                    "签收后24小时内发现商品破损、污渍、生鲜类变质/坏果等情况，可申请放心购赔付（仅限同城第三方配送订单）",
                  desc: {
                    text: [
                      "申请放心购赔付须提供商品特写照片、配送信息等凭证，所有凭证需保证内容真实、未经涂改和增删，否则视为无效凭证不予赔付。",
                    ],
                    strong: [1],
                  },
                  grayDesc: "",
                  support: [],
                },
              }),
            },
            icon: { type: Object, require: !0, default: () => {} },
          },
          data: () => ({ contentFormat: {} }),
          computed: {
            logo() {
              var e, t;
              return null == (e = this.icon) || null == (t = e.white)
                ? void 0
                : t.damage_subsidy;
            },
            isRetailShop() {
              var e;
              return (e = u.getShopInfoSync() || {}), Object(r.e)(e || {});
            },
          },
          methods: {
            onClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        s = o("9ZMt");
      t.default = s.default.component(n);
    },
  })
);
