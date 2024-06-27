"use strict";
var r = require("~/r");
r(
  "YTHZ",
  Object.assign({}, require("~/v.js").modules, {
    YTHZ: function (e, s, t) {
      t.r(s);
      var o = t("US/N"),
        i = t("AGZf"),
        a = t("lgMb"),
        d = {
          props: { stockReminder: Object },
          data: () => ({ isShow: !1 }),
          methods: {
            closeStockReminderPopup() {
              this.isShow = !1;
            },
            handleStockReminderSuccess(e) {
              var { success: s, btnData: t } = e,
                { itemId: d, skuData: c = {} } = t,
                r = {
                  itemId: d || c.goodsId,
                  remindTypeEnum: "ITEM_STOCK_REMIND",
                };
              if (t.skuData) {
                var {
                  selectedSkuComb: { skuId: m },
                } = c;
                r.skuId = m;
              }
              s
                ? Object(o.requestV2)({
                    path: "/wscgoods/addStockLackReminder.json",
                    data: r,
                    method: "POST",
                    withCredentials: !0,
                  })
                    .then(() => {
                      Object(i.a)({
                        message: "商家已收到补货提醒，补货后会通知你",
                        position: "bottom",
                      }),
                        this.$emit("stock-reminder-success", {
                          status: s,
                          skuId: r.skuId,
                        });
                    })
                    .catch((e) => {
                      Object(a.b)(e, {
                        message: "补货提醒订阅失败，请稍后重试",
                      });
                    })
                : (this.$emit("hide-sku"),
                  Object(i.a)({
                    message: "补货提醒订阅失败，请稍后重试",
                    position: "bottom",
                  }));
            },
            handleStockReminderFail(e) {
              e && e.errMsg && e.errMsg.indexOf("switched off") > -1
                ? (this.isShow = !0)
                : Object(i.a)({
                    message: "补货提醒订阅失败，请稍后重试",
                    position: "bottom",
                  });
            },
          },
          ud: !0,
        },
        c = t("9ZMt");
      s.default = c.default.component(d);
    },
  })
);
