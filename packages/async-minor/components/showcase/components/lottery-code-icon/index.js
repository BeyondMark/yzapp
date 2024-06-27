"use strict";
var r = require("~/r");
r(
  "QRDw",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    QRDw: function (t, e, i) {
      i.r(e);
      var s = i("rqVN"),
        o = i("GFa9"),
        r = i("gNlG"),
        a = i("8B9M"),
        n = Object(a.a)();
      Object(s.b)({
        data: { number: 0, showArrow: !0, btnText: "滑动浏览" },
        behaviors: [r.a],
        ready() {
          setTimeout(() => {
            this.setPageScrollControlSubscribe(this.handleScroll, this);
          }, 2e3);
        },
        detached() {
          clearTimeout(this.timer),
            this.delPageScrollControlSubscribe(this.handleScroll, this);
        },
        methods: {
          handleScroll(t) {
            var e = this,
              { scrollTop: i } = t,
              s = getCurrentPages(),
              { options: o } = s[s.length - 1];
            if (
              ((this.options = o),
              this.initScrollTop || (this.initScrollTop = i),
              i !== this.initScrollTop && !this.begin)
            ) {
              this.begin = !0;
              for (
                var r = function (t) {
                    e.timer = setTimeout(() => {
                      e.setYZData({ btnText: "浏览 " + (30 - t) + " 秒" }),
                        30 === t && e.joinActivity();
                    }, 1e3 * t);
                  },
                  a = 0;
                a < 31;
                a++
              )
                r(a);
            }
          },
          joinActivity() {
            var { alias: t, codeAlias: e } = this.options || {},
              i = { kdtId: n.getKdtId(), eventType: 3, pageAlias: t, alias: e };
            n.request({ path: "/wscump/lottery-code/join.json", data: i })
              .then((t) => {
                var e = t ? t.tickets.length : 0;
                e &&
                  (wx.showToast({
                    title: "任务完成，获得" + e + "个幸运码",
                    icon: "none",
                  }),
                  this.setYZData({
                    btnText: "返回抽奖页",
                    number: e,
                    showArrow: !1,
                  }));
              })
              .catch((t) => {
                wx.showToast({
                  title: t.msg || "获取抽奖码失败",
                  icon: "none",
                }),
                  this.setYZData({ btnText: "返回抽奖页", showArrow: !1 });
              });
          },
          toBack() {
            if ("返回抽奖页" === this.data.btnText) {
              var { codeAlias: t } = this.options || {};
              o.a.redirect({
                url: "/packages/ump/lottery-code/index?alias=" + t,
              });
            }
          },
        },
      });
    },
  })
);
