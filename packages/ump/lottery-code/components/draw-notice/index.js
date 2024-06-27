"use strict";
var r = require("~/r");
r(
  "5IQz",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "5IQz": function (e, s, t) {
      t.r(s);
      var i = t("Fcif"),
        a = t("u8kV"),
        r = t("svh/"),
        c = t("bsB/");
      Object(a.b)({
        mapData: Object(i.a)(
          {},
          Object(r.h)(["reminderIsOpen"]),
          Object(r.f)(["remainTime"])
        ),
        data: {
          hasSubscribeAbility: !1,
          days: 0,
          hours: "00",
          minutes: "00",
          seconds: "00",
        },
        attached() {
          this.getSubMsgAvailable();
        },
        methods: Object(i.a)(
          {},
          Object(r.e)(["SET_REMINDER_STATE", "GET_ACTIVITY"]),
          {
            onFinish() {
              this.GET_ACTIVITY(!0);
            },
            getSubMsgAvailable() {
              Object(c.d)()
                .then((e) => {
                  this.setYZData({ hasSubscribeAbility: e });
                })
                .catch(() => {
                  wx.showToast({ title: "授权能力获取失败", icon: "none" });
                });
            },
            fillZero: (e) => (e > 9 ? e : "0" + e),
            onChange(e) {
              var { detail: s = {} } = e,
                {
                  days: t,
                  hours: i,
                  minutes: a,
                  seconds: r,
                } = JSON.parse(JSON.stringify(s || {})),
                c = this.fillZero(i),
                n = this.fillZero(a),
                o = this.fillZero(r);
              setTimeout(() => {
                this.setYZData({ days: t, hours: c, minutes: n, seconds: o });
              }, 0);
            },
            onInput(e) {
              var { detail: s } = e;
              s
                ? Object(c.e)({
                    scene: "draw",
                    needAlwaysToast: !1,
                    successCallBack: () => {
                      this.SET_REMINDER_STATE(+s);
                    },
                    failCallBack: () => {
                      wx.showToast({
                        title: "订阅消息授权失败，请重试",
                        icon: "none",
                      });
                    },
                  })
                : this.SET_REMINDER_STATE(+s);
            },
          }
        ),
      });
    },
  })
);
