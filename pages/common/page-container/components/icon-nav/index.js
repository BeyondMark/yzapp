"use strict";
var r = require("~/r");
r(
  "YI/l",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "YI/l": function (t, a, e) {
      e.r(a);
      var i = e("rqVN"),
        n = e("RY8z"),
        r = [
          {
            icon: "https://img01.yzcdn.cn/weapp/wsc/rQqTLH.png?imageView2/2/w/200/h/200/q/75/format/png",
            action: "home",
            position: "right",
            style: "right: 0;",
            limit: {
              kdtId: ["40912016"],
              page: ["packages/goods/detail/index"],
            },
          },
          {
            icon: "https://img01.yzcdn.cn/weapp/wsc/fQQqOMx.png?imageView2/2/w/200/h/200/q/75/format/png",
            action: "contact",
            position: "right-bottom",
            limit: {
              kdtId: ["40912016"],
              page: ["packages/trade/order/list/index"],
            },
          },
          {
            icon: "https://img01.yzcdn.cn/weapp/wsc/fn0KMhb.png?imageView2/2/w/200/h/200/q/75/format/png",
            action: "jump-miniprogram",
            position: "right",
            style: "right: 0;margin-top: 60px;",
            extraData: { appid: "wxea304178344b8831" },
            limit: {
              kdtId: ["40912016"],
              page: ["packages/home/dashboard/index"],
            },
          },
        ];
      Object(i.b)({
        data: { navIcon: [] },
        ready() {
          var t = [];
          r.forEach((a) => {
            (function (t) {
              var a = t.limit || {};
              if (0 === Object.keys(a).length) return !0;
              var e = a.kdtId || [],
                i = getApp().getKdtId();
              if (e.length > 0 && e.indexOf("" + i) < 0) return !1;
              var n = a.page || [];
              if (!(n.length > 0)) return !0;
              var r = getCurrentPages(),
                o = r[r.length - 1].route;
              if (n.indexOf(o) > -1) return !0;
            })(a) &&
              t.push({
                icon: a.icon,
                action: a.action,
                position: a.position,
                style: a.style,
                extraData: a.extraData || {},
              });
          }),
            t.length > 0 && this.setYZData({ navIcon: t });
        },
        methods: {
          onContactBack: n.a.contactBack,
          __handleWscPageNavIconClick(t) {
            void 0 === t && (t = {});
            var { currentTarget: a = {} } = t,
              { dataset: e = {} } = a,
              { action: i = "" } = e;
            switch (i) {
              case "home":
                wx.reLaunch({ url: "/packages/home/dashboard/index" });
            }
          },
        },
      });
    },
  })
);
