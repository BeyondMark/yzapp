"use strict";
var r = require("~/r");
r(
  "NBOV",
  Object.assign({}, require("~/v.js").modules, {
    NBOV: function (e, s, t) {
      t.r(s);
      var i = t("US/N"),
        a = t("AGZf"),
        r = t("q29p"),
        o = t.n(r),
        d = t("lgMb"),
        m = {
          props: { saleReminder: Object },
          data: () => ({ isShow: !1, startTime: "" }),
          methods: {
            closeSaleReminderPopup() {
              this.isShow = !1;
            },
            handleSaleReminderSuccess(e) {
              var { success: s, btnData: t } = e,
                { itemId: r, startSoldTime: m } = t;
              (this.startTime = o()(m, "YYYY-MM-DD HH:mm:ss")),
                s
                  ? Object(i.requestV2)({
                      path: "/wscgoods/addSaleReminder.json",
                      data: { itemId: r },
                      method: "POST",
                      withCredentials: !0,
                    })
                      .then(() => {
                        Object(a.a)({
                          message: "开售前会发送小程序订阅消息提醒你",
                          position: "bottom",
                        }),
                          this.$emit("sale-reminder-success", { status: s });
                      })
                      .catch((e) => {
                        Object(d.b)(e, {
                          message: "开售提醒订阅失败，请稍后重试",
                        });
                      })
                  : (this.isShow = !0);
            },
            handleSaleReminderFail(e) {
              e && e.errMsg && e.errMsg.indexOf("switched off") > -1
                ? (this.isShow = !0)
                : Object(a.a)({
                    message: "订阅开售提醒失败",
                    position: "bottom",
                  });
            },
          },
          ud: !0,
        },
        n = t("9ZMt");
      s.default = n.default.component(m);
    },
  })
);
