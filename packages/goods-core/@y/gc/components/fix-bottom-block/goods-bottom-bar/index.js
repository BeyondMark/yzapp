"use strict";
var r = require("~/r");
r(
  "vzr9",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    vzr9: function (t, o, e) {
      e.r(o);
      var n = e("B9LC"),
        a = e("9ZMt"),
        r = e("q29p"),
        s = e.n(r),
        i = e("YeA1"),
        u = {
          name: "GoodsBottomBar",
          props: {
            serverStatus: Object,
            waitToSold: Object,
            commonTip: { type: Object, default: () => ({}) },
          },
          data: () => ({ timeData: {} }),
          computed: {
            countdown() {
              var { serverStatus: t = {}, waitToSold: o } = this,
                { serverDeltaTime: e = 0 } = t;
              return null != o && o.startSoldTime
                ? { desc: "距离开售仅剩", end: +o.startSoldTime - e }
                : null;
            },
            waitToSoldCountdown() {
              var t = this.countdown;
              return t && this.runCountDown(t), t;
            },
            moreDayText() {
              var t,
                o = null == (t = this.waitToSold) ? void 0 : t.startSoldTime;
              return o &&
                !!this.waitToSoldCountdown &&
                this.waitToSoldCountdown.end -
                  this.serverStatus.clientTimestamp >
                  864e5
                ? "商品将在 " + s()(o, "YYYY-MM-DD HH:mm:ss") + " 开售"
                : "";
            },
          },
          methods: {
            runCountDown(t) {
              var { end: o } = t,
                e = o - Date.now();
              e <= 0 ||
                isNaN(e) ||
                (this.countDown = new n.a(e, {
                  onChange: (t, e) => {
                    if (o - Date.now() <= 0)
                      return (
                        this.countDown &&
                          this.countDown.stop &&
                          this.countDown.stop(),
                        this.reload()
                      );
                    this.timeData = e || {};
                  },
                }));
            },
            reload() {
              a.default.$native.startPullDownRefresh();
            },
            onNavigate() {
              var { pageName: t, query: o } = this.commonTip || {};
              t && Object(i.a)().dmc.navigate(t, o);
            },
          },
          detached() {
            this.countDown && this.countDown.stop && this.countDown.stop();
          },
          ud: !0,
        };
      o.default = a.default.component(u);
    },
  })
);
