"use strict";
var r = require("~/r");
r(
  "r1hJ",
  Object.assign({}, require("~/v.js").modules, {
    r1hJ: function (t, e, o) {
      o.r(e);
      var r = {
          props: {
            value: { type: Boolean, default: !1 },
            zIndex: { type: Number, default: 100 },
            content: {
              type: Object,
              default: () => ({
                title: "放心吃",
                content: {
                  shortDesc:
                    "食品含异物、食用后不适引起就医，可提供凭证申请放心购赔付，最高可获与商品实付金额等额的赔付（上限500元）",
                  support: [],
                  noticeList: [
                    "含有异物：涉事食品照片，需清晰展示夹杂异物情况；同城配送、自提订单需在签收后24小时内申请赔付，物流发货订单需在确认收货后15天维权期内申请赔付；",
                    "食用后不适或中毒：提供二级或二级以上医院出具的病历或诊断证明，需包含身份信息、日期、诊断结果（ 需明确说明是由食源性导致的疾病）、医院出具的费用清单或发票；需在订单签收后72小时内就医，15 天维权期内申请赔付；",
                    "所有凭证需提供原图且保证内容真实、未经涂改和增删，否则视为无效凭证不予赔付；",
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
              var t, e;
              return null == (t = this.icon) || null == (e = t.white)
                ? void 0
                : e.eat_rights;
            },
          },
          methods: {
            onClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        n = o("9ZMt");
      e.default = n.default.component(r);
    },
  })
);
