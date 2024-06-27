"use strict";
var r = require("~/r");
r(
  "RKHX",
  Object.assign({}, require("~/c.js").modules, {
    RKHX: function (e, t, c) {
      c.r(t);
      var s = c("0i4I");
      Object(s.a)({
        props: {
          value: { type: Boolean, default: !1 },
          zIndex: { type: Number, default: 100 },
          data: {
            type: Object,
            value: {
              title: "破损补偿",
              content: {
                shortDesc:
                  "收货时若发现商品损坏，提交证明后可补偿损失商品付款金额的10%，最高100元（仅限同城第三方配送订单）",
                desc: "有赞放心购为买家提供的专属售后服务。48小时内发现商品损坏，反馈客服核实无误后，消费者立享体验赔付。",
                grayDesc: "",
                support: [
                  {
                    icon: "https://b.yzcdn.cn/public_files/d7e93cb3bf6303f57265b4c95f699fe7.png",
                    name: "收到货品",
                    desc: "48小时内，发现商品损坏。",
                  },
                  {
                    icon: "https://b.yzcdn.cn/public_files/cc6bee0f97661e156a138eaef3b96c6c.png",
                    name: "反馈客服",
                    desc: "联系有赞放心购客服，提供商品损坏照片及订单信息。",
                  },
                  {
                    icon: "https://b.yzcdn.cn/public_files/6f94cb0f4df8b80ae72674ebf2842fce.png",
                    name: "收到赔付",
                    desc: "客服核实无误后，消费者立享体验赔付。",
                  },
                ],
              },
            },
          },
          icon: { type: Object, require: !0, default: {} },
        },
        data: { logo: "" },
        watch: {
          icon() {
            this.setLogo();
          },
        },
        methods: {
          setLogo() {
            var e, t;
            this.setData({
              logo:
                null ===
                  (t =
                    null === (e = this.data.icon) || void 0 === e
                      ? void 0
                      : e.white) || void 0 === t
                  ? void 0
                  : t.damage_subsidy,
            });
          },
          onClose() {
            this.$emit("close");
          },
        },
      });
    },
  })
);
