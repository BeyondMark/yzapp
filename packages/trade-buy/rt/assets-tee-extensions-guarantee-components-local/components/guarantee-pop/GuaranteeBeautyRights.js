"use strict";
var r = require("~/r");
r(
  "rc3l",
  Object.assign({}, require("~/v.js").modules, {
    rc3l: function (e, t, c) {
      c.r(t);
      var n = {
          props: {
            value: { type: Boolean, default: !1 },
            zIndex: { type: Number, default: 100 },
            content: {
              type: Object,
              default: () => ({
                title: "过敏无忧",
                content: {
                  shortDesc:
                    "确认收货15天内，消费者使用含“过敏无忧”服务标识的商品后出现过敏情况，可获得相应赔付",
                  support: [
                    {
                      icon: "https://b.yzcdn.cn/public_files/fc24261cba622d8e495bfd80b9c1437a.png",
                      name: "申请售后",
                      desc: "出现过敏情况， 联系放心购客服申请售后",
                    },
                    {
                      icon: "https://b.yzcdn.cn/public_files/df10f4ad77499e63d89525f0cdc262cf.png",
                      name: "提供凭证",
                      desc: "提供过敏部位照片、诊断证明等相关凭证",
                    },
                    {
                      icon: "https://b.yzcdn.cn/public_files/b98e2d6556590eb081adfa3a04675321.png",
                      name: "收到赔付",
                      desc: "客服核实凭证无误后，消费者收到相应赔付",
                    },
                  ],
                  noticeList: [
                    "过敏部位照片+手持涉及事故的商品照片，需清晰 展示商品拆包情况和使用剩余量；",
                    "二级或二级以上医院出具的病历或诊断证明，需 包含身份信息、日期、诊断结果；",
                    "所有凭证需提供原图且保证内容真实、未经涂改 和增删，否则视为无效凭证不予赔付；",
                    "买家蓄意利用此服务牟利的，一经发现，有赞有权取消买家享受此服务的资格。",
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
                : t.beauty_rights;
            },
          },
          methods: {
            onClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        d = c("9ZMt");
      t.default = d.default.component(n);
    },
  })
);
