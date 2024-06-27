"use strict";
var r = require("~/r");
r(
  "Xme2",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Xme2: function (e, t, r) {
      r.r(t);
      var i = r("rqVN"),
        a = r("dWkE");
      Object(i.b)({
        data: {
          type: "SHOP_MEMBER_AGREEMENT",
          title: "",
          changeType: "sign",
          protocolArr: [],
          btnConfig: { agreeBtn: "我已知晓，继续", hideDisagree: !0 },
          visible: !0,
        },
        methods: {
          initData(e) {
            var { sign: t = [], modify: r = [] } = e.detail;
            t.length
              ? this.setYZData({
                  title: "会员协议签署指引",
                  changeType: "sign",
                  protocolArr: t,
                })
              : r.length &&
                this.setYZData({
                  title: "会员协议更新通知",
                  changeType: "modify",
                  protocolArr: r,
                });
          },
          handleAgree() {
            this.setYZData({ visible: !1 }), this.triggerEvent("next", !1);
          },
          viewAgreement(e) {
            var {
              currentTarget: {
                dataset: { url: t },
              },
            } = e;
            Object(a.a)(t, {});
          },
        },
      });
    },
  })
);
