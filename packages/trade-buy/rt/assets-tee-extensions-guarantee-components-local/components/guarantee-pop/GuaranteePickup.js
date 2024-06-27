"use strict";
var r = require("~/r");
r(
  "GJx3",
  Object.assign({}, require("~/v.js").modules, {
    GJx3: function (e, t, c) {
      c.r(t);
      var n = {
          props: {
            value: { type: Boolean, default: !1 },
            zIndex: { type: Number, default: 100 },
            content: {
              type: Object,
              default: () => ({
                title: "免费上门取退",
                content: {
                  shortDesc: "快递免费上门，取退后优先退款到账",
                  desc: "有赞担保为买家提供的售后升级服务，包含上门取件、退货包运费、优先退款3项售后服务。",
                  grayDesc:
                    "服务履约受买家的地域、信誉等因素影响，请以实际执行为准。1个订单可享受1次免费上门取退服务。",
                  support: [
                    {
                      icon: "https://b.yzcdn.cn/public_files/d7e93cb3bf6303f57265b4c95f699fe7.png",
                      name: "上门取件",
                      desc: "快递员免费上门取件，运费一口价，低于全网均价。",
                    },
                    {
                      icon: "https://b.yzcdn.cn/public_files/8cc716c2315d99866eefd3b219649d63.png",
                      name: "退货包运费",
                      desc: "退换货成功后可补贴运费，若选择上门取件，也可直抵运费。",
                    },
                    {
                      icon: "https://b.yzcdn.cn/public_files/47dc1c2288c5c9929c5bffa2396f4b47.png",
                      name: "优先退款",
                      desc: "上门取件揽收完成后，退款原路退回。",
                    },
                  ],
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
                : t.free_pickup_return;
            },
          },
          methods: {
            onClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        o = c("9ZMt");
      t.default = o.default.component(n);
    },
  })
);
