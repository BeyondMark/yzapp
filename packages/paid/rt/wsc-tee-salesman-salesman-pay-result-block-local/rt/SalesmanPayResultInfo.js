"use strict";
var r = require("~/r");
r(
  "0yeo",
  Object.assign({}, require("~/v.js").modules, {
    "0yeo": function (t, e, a) {
      a.r(e);
      var s = a("US/N"),
        o = a("YeA1"),
        i = {
          props: {
            type: { default: "line-style", type: String },
            navigateTo: Function,
          },
          data: () => ({
            orderNo: "",
            content: "",
            kdtId: "",
            normalTextList: [],
            boldTextList: [],
            themeColors: {},
            isWxReceipt: !1,
          }),
          created() {
            var t;
            (t = ["orderNo", "kdtId", "themeColors"]),
              Object(o.c)(this, t, {
                callback: (t) => {
                  var { orderNo: e } = t;
                  this.getData(e);
                },
              });
          },
          methods: {
            getData(t) {
              Object(s.default)({
                path: "/wscsalesman/tutorial/auto-join/afterPayAutoJoin.json",
                method: "POST",
                headers: { "content-type": "application/json" },
                data: { orderNo: t, kdtId: this.kdtId },
              }).then((t) => {
                var {
                  content: e,
                  autoSettle: a,
                  allowSellerBuy: s,
                  commissionRate: o,
                } = t;
                e &&
                  (a && o
                    ? s
                      ? ((this.normalTextList = ["恭喜获得自购省", "，分享赚"]),
                        (this.boldTextList = [o, o + "权益"]))
                      : ((this.normalTextList = ["恭喜获得分享给好友下单赚"]),
                        (this.boldTextList = [o + "权益"]))
                    : ((this.normalTextList = ["恭喜获得分享给好友下单赚"]),
                      (this.boldTextList = ["佣金权益"])),
                  (this.content = e),
                  this.$emit("show-salesman"));
              });
            },
            goPage() {
              var t;
              (t =
                "/packages/salesman/salesman-center/index?kdtId=" + this.kdtId),
                this.navigateTo(t, "salesman");
            },
          },
          ud: !0,
        },
        n = a("9ZMt");
      e.default = n.default.component(i);
    },
  })
);
