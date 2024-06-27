"use strict";
var r = require("~/r");
r(
  "vlxs",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    vlxs: function (e, s, t) {
      t.r(s);
      var i = t("hHpg"),
        a = t("a1Mm"),
        c = t("rqVN"),
        b = t("bsB/"),
        r = t("lOyf"),
        n = Object(r.a)(),
        o = getApp();
      Object(c.b)({
        properties: {
          hasButton: Boolean,
          hasTabbar: Boolean,
          kdtId: String,
          showPayPlusExtraCls: { type: Boolean, value: !1 },
        },
        data: {
          isMsgOperationOpen: !1,
          hideMsgOperation: !1,
          showSubscirbeFail: !1,
          isIphoneX: n,
          bgUrl: Object(a.a)(
            "https://b.yzcdn.cn/public_files/99f21f7f10069ab3bfb9f4567d2bbd2c.png",
            "!160x160.jpg"
          ),
          iconUrl: Object(a.a)(
            "https://b.yzcdn.cn/public_files/c7b1ea7d3023a0047bb3f7df768643f0.png",
            "!12x16.jpg"
          ),
        },
        methods: {
          getCheckinRemind() {
            this.fetchSubscribeStatus()
              .then((e) => {
                var { hasSubscribeAbility: s = !1, isAuthPush: t = !0 } =
                  e || {};
                if (s && !t)
                  var i = setTimeout(() => {
                      this.setYZData({ isMsgOperationOpen: !0 }),
                        this.addLog({
                          et: "view",
                          ei: "memb_subscribe",
                          en: "会员中心订阅按钮曝光",
                        }),
                        clearTimeout(i);
                    }, 3e3),
                    a = setTimeout(() => {
                      this.setYZData({ hideMsgOperation: !0 }), clearTimeout(a);
                    }, 33e3);
                else this.setYZData({ isMsgOperationOpen: !1 });
              })
              .catch(() => {
                this.setYZData({ isMsgOperationOpen: !1 });
              });
          },
          fetchSubscribeStatus: () =>
            new Promise((e) => {
              Object(b.d)()
                .then((s) => {
                  s
                    ? Object(b.c)({ scene: "cimWeMiniProMsg" })
                        .then((t) => {
                          e({ hasSubscribeAbility: s, isAuthPush: t });
                        })
                        .catch(() => Object(i.a)("授权状态获取失败"))
                    : e({ hasSubscribeAbility: s });
                })
                .catch(() => Object(i.a)("授权能力获取失败"));
            }),
          openReminder() {
            var e = this;
            this.addLog({
              et: "click",
              ei: "memb_subscribe_click",
              en: "会员中心订阅按钮点击",
            }),
              Object(b.e)({
                scene: "cimWeMiniProMsg",
                needAlwaysToast: !1,
                successCallBack: () => {
                  e.setYZData({ isMsgOperationOpen: !1 });
                },
                failCallBack: () => {
                  e.setYZData({ showSubscirbeFail: !0 });
                },
              });
          },
          closeReminderPopup() {
            this.setYZData({ isMsgOperationOpen: !1 });
          },
          closeSubscribeFailPopup() {
            this.setYZData({ showSubscirbeFail: !1 });
          },
          addLog(e) {
            var s;
            null == (s = o.logger) || s.log(e);
          },
        },
        attached() {
          this.getCheckinRemind();
        },
      });
    },
  })
);
