"use strict";
var r = require("~/r");
r(
  "3GAd",
  Object.assign({}, require("~/v.js").modules, {
    "3GAd": function (t, e, r) {
      r.r(e);
      var u = [
          {
            title: "什么是多人拼团？",
            text: "多人拼团（以下简称：拼团）是指由多人一起拼单购买的团购活动，通过拼团买家可以享受比一般网购更低的折扣。",
          },
          {
            title: "怎样算拼团成功？",
            text: "在拼团有效期内找到满足人数的用户参加拼团，即可算拼团成功。",
          },
          {
            title: "拼团失败，怎样退款？",
            text: "若拼团有效期内没有凑齐人数，即算作拼团失败。系统会自动将所支付的货款原路退回，具体到账时间以各银行为准。",
          },
        ],
        i = {
          name: "groupon-guide",
          props: { grouponActivity: Object },
          computed: {
            rules() {
              var { subType: t, groupType: e } = this.grouponActivity;
              return (
                "ladderGroupOn" === t &&
                  (u[0] = {
                    title: "什么是阶梯拼团",
                    text: "阶梯拼团（以下简称：拼团）是指团长在发起拼团时，选择指定的参团人数，邀请对应数量用户一起拼单购买的团购活动，参团人数越多，价格折扣越低。",
                  }),
                +e &&
                  u.push({
                    title: "怎样算作新用户？",
                    text: "用户未在店铺内有进行中的订单或已成交的订单则视为新用户。",
                  }),
                u
              );
            },
          },
          ud: !0,
        },
        o = r("9ZMt");
      e.default = o.default.component(i);
    },
  })
);
