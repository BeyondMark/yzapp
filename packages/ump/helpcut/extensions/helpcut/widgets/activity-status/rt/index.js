"use strict";
var r = require("~/r");
r(
  "GHBn",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    GHBn: function (e, t, a) {
      a.r(t);
      var i = a("7/pW"),
        n = a("VmHG"),
        s = a("2wjL"),
        r = a("Om1d"),
        o = a("RY8z"),
        c = getApp();
      Object(i.a)({
        observers: {
          expireTime(e) {
            e && this.setCountDown(e);
          },
        },
        attached() {
          Object(n.d)(this, ["bargainDetail", "goodsDetail"]),
            Object(n.d)(this, [
              "isActionSuccess",
              "bargainProgress",
              "actionBtnGroup",
              "actionTip",
              "expireTime",
              "activityStatus",
            ]),
            Object(n.b)(this, ["SET_SHOW_ACTION_SHEET"]),
            Object(n.b)(this, ["HANDLE_PURCHASE", "HANDLE_HELP_CUT"]);
        },
        ready() {
          this.data.expireTime && this.setCountDown(this.data.expireTime);
        },
        methods: {
          onHelpCut(e) {
            var { detail: t = {} } = e,
              { data: { userInfo: a = {} } = {} } = t;
            c.logger &&
              c.logger.log({
                et: "click",
                ei: "click_help",
                en: "帮好友点一刀",
              }),
              this.HANDLE_HELP_CUT(a);
          },
          handleSuccessEvent(e) {
            var {
                target: {
                  dataset: { event: t },
                },
              } = e,
              { alias: a } = this.data.goodsDetail || {},
              { umpAlias: i, activityId: n } = this.data.bargainDetail || {};
            switch (t) {
              case "onInviteFriend":
                return (
                  c.logger &&
                    c.logger.log({
                      et: "click",
                      ei: "click_join",
                      en: "邀请好友帮砍",
                    }),
                  void this.SET_SHOW_ACTION_SHEET(!0)
                );
              case "onPurchase":
                return void this.HANDLE_PURCHASE();
              case "onCreateNewBargain":
                return void wx.redirectTo({
                  url: s.a.add("/pages/goods/detail/index?alias=" + a, {
                    umpAlias: i,
                    activityId: n,
                    type: "helpcut",
                    umpType: "helpCut",
                    alias: a,
                  }),
                });
            }
          },
          handleFailEvent(e) {
            var {
              target: {
                dataset: { navigateto: t, opentype: a },
              },
            } = e;
            return "switchTab" === a
              ? o.a.switchTab({ url: t })
              : o.a.navigate({ url: t });
          },
          setCountDown(e) {
            var t = this,
              a = new r.a(e - Date.now().valueOf(), {
                onChange: function (e, a) {
                  void 0 === a && (a = {}),
                    t.setYZData({
                      remainTime: {
                        hour: e.hour + 24 * e.day,
                        minute: a.minute,
                        second: e.second + "." + e.hundredMilliseconds,
                      },
                    });
                },
                timeout: 100,
              });
            this.countdownInstance = a;
          },
        },
        detached() {
          this.countdownInstance && this.countdownInstance.stop();
        },
      });
    },
    Om1d: function (e, t, a) {
      var i = a("B9LC");
      t.a = i.a;
    },
  })
);
