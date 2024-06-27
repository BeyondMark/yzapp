"use strict";
var r = require("~/r");
r(
  "qDq6",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    qDq6: function (t, i, r) {
      r.r(i);
      var o = r("X9+V"),
        e = r("+66q"),
        u = {
          name: "groupon-intro",
          props: {
            grouponActivity: Object,
            kdtId: Number,
            goodsPriceInfo: Object,
          },
          data: () => ({ showActivityPop: !1, activityRules: {} }),
          computed: {
            ruleTitle() {
              return this.activityRules.ruleTitle || "玩法详情";
            },
            showGoingList() {
              return 0 !== this.goodsPriceInfo.stockNum;
            },
            activityInfo() {
              var t;
              return (
                (null == (t = this.grouponActivity)
                  ? void 0
                  : t.activityInfo) || {}
              );
            },
            grouponActivityIntro() {
              var t = this.grouponActivity || {},
                i =
                  "支付开团邀请" +
                  (t.joinNum - 1) +
                  "人参团，人数不足自动退款。";
              if (
                (1 === t.groupType &&
                  (i =
                    "支付开团邀请" +
                    (t.joinNum - 1) +
                    "名新用户参团，人数不足自动退款。"),
                this.isLadderGroupOn)
              ) {
                var { ladderList: r = {} } = t,
                  e = Object.values(r)[0].reduce(
                    (t, i) => (
                      t.push(
                        i.scale + "人团￥" + Object(o.a)(i.skuPrice) + "起"
                      ),
                      t
                    ),
                    []
                  );
                e.push(
                  "先选择参团人数，支付后开团邀请好友参团，人数不足自动退款。"
                ),
                  (i = e.join("，"));
              }
              return i;
            },
            isLadderGroupOn() {
              var t;
              return (
                (null == (t = this.grouponActivity) ? void 0 : t.subType) ===
                e.j.LADDER_GROUP_ON
              );
            },
            groupOnActivityTitle() {
              var { groupType: t } = this.grouponActivity || {};
              return this.isLadderGroupOn
                ? "拼团玩法-阶梯拼团"
                : 1 === t
                ? "拼团玩法-老带新拼团"
                : "拼团玩法";
            },
          },
          methods: {
            showPopUp() {
              this.showActivityPop = !0;
            },
            hidePopUp() {
              this.showActivityPop = !1;
            },
          },
          ud: !0,
        },
        s = r("9ZMt");
      i.default = s.default.component(u);
    },
  })
);
