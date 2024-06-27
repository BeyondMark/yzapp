"use strict";
var r = require("~/r");
r(
  "J9pA",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    J9pA: function (e, t, s) {
      s.r(t);
      var i = s("Fcif"),
        a = s("9ZMt"),
        c = s("US/N"),
        r = s("Tewj"),
        n = s("MLLI"),
        o = s("AGZf"),
        u = s("tS13"),
        d = s("F6OL"),
        p = s("lgMb"),
        l = (a.default.getEnv(), 20001);
      var b = {
        name: "pop-wx-subscription",
        props: {
          kdtId: Number,
          themeVars: String,
          goodsMetaInfo: Object,
          goodsBaseInfo: Object,
          goodsActivity: Object,
          umpActivity: Object,
          serverStatus: Object,
          staticConfig: Object,
        },
        data: () => ({
          templateIdList: null,
          showTips: !1,
          imgUrl: "",
          subscribeScene: "",
          btnData: {},
        }),
        computed: {
          isProductLaunch() {
            var e = "weapp" === a.default.getEnv(),
              t = Object.keys(this.umpActivity);
            return e && t.some((e) => "productLaunch" === e);
          },
        },
        created() {
          r.default.on("popupContainer:subscribe:show", (e) => {
            (this.btnData = e), this.handleBtnClick(e);
          });
        },
        destroyed() {
          r.default.off("popupContainer:subscribe:show");
        },
        methods: {
          getTemplateIdList(e) {
            var t = this;
            return Object(c.default)({
              path: "/wscump/common/get-template.json",
              data: { scene: e },
            }).then(function (e) {
              void 0 === e && (e = {}),
                (t.templateIdList = e.templateIdList || []);
            });
          },
          handleBtnClick(e) {
            var { subscribeSceneV2: t, subscribeStatus: s } = e;
            t &&
              (s
                ? this.handleNotify(t)
                : e.disabled ||
                  (this.templateIdList
                    ? this.subscriptionMessage(t)
                    : this.getTemplateIdList(t)
                        .then(() => {
                          this.subscriptionMessage(t);
                        })
                        .catch(() => {})));
          },
          handleNotify(e) {
            switch (e) {
              case u.e.SALE_REMINDER:
                Object(o.a)({
                  message: "开售前会发送小程序订阅消息提醒你",
                  position: "bottom",
                });
                break;
              case u.e.STOCK_REMINDER:
                Object(o.a)({
                  message: "商家已收到补货提醒，补货后通知你",
                  position: "bottom",
                });
            }
          },
          subscriptionMessage(e) {
            var t = this.templateIdList || [];
            if (t instanceof Array && t.length >= 2) {
              var { system: s, version: i } = Object(n.b)(),
                r =
                  s.indexOf("Android") > -1 &&
                  Object(d.compareVersions)(i, "7.0.6") >= 0,
                u =
                  s.indexOf("IOS") > -1 &&
                  Object(d.compareVersions)(i, "7.0.5") >= 0;
              r || u || (t = new Array(t[0]));
            }
            t instanceof Array &&
            t.length > 0 &&
            a.default.$native.canIUse("requestSubscribeMessage")
              ? a.default.$native.getSetting({
                  withSubscriptions: !0,
                  success: (s) => {
                    var { subscriptionsSetting: i } = s;
                    if (!["groupOn"].includes(e) || i.mainSwitch) {
                      var a = !1;
                      i.itemSettings
                        ? t.forEach((e) => {
                            i.itemSettings[e] || (a = !0);
                          })
                        : (a = !0),
                        a && (this.showTips = !0);
                    } else
                      this.handleWxSubscribeSuccess({
                        subscribeScene: e,
                        success: !0,
                      });
                  },
                  complete: () => {
                    a.default.$native.requestSubscribeMessage({
                      tmplIds: t,
                      success: (t) => {
                        var s = !1;
                        JSON.stringify(t).indexOf("accept") > -1
                          ? (this.subscribeCallback(e), (s = !0))
                          : JSON.stringify(t).indexOf("reject") > -1 &&
                            o.a.fail("请在小程序设置中允许订阅消息"),
                          this.handleWxSubscribeSuccess({
                            subscribeScene: e,
                            success: s,
                          });
                      },
                      fail: (s) => {
                        var i,
                          a,
                          r = "订阅微信通知失败";
                        s.errMsg && s.errMsg.indexOf("switched off") > -1
                          ? (r = "请在小程序设置中允许订阅消息")
                          : (null == s ? void 0 : s.errCode) === l &&
                            ((a = t),
                            Object(c.default)({
                              path: "/v3/message/wechat-push/callback-remove-unused-template.json",
                              method: "POST",
                              withCredentials: !0,
                              data: { wechatTemplateIdList: a },
                            })),
                          null == (i = getApp().logger) ||
                            i.appError({
                              message: "订阅微信通知失败",
                              detail: { error: s, tmplIds: t },
                            }),
                          o.a.fail(r),
                          this.handleWxSubscribeFail({
                            subscribeScene: e,
                            err: s,
                          });
                      },
                      complete: () => {
                        this.closeTips();
                      },
                    });
                  },
                })
              : this.handleWxSubscribeFail({ subscribeScene: e });
          },
          handleWxSubscribeSuccess(e) {
            switch (e.subscribeScene) {
              case u.e.SALE_REMINDER:
                this.$refs.saleReminderPopup.handleSaleReminderSuccess({
                  success: e.success,
                  btnData: this.btnData,
                });
                break;
              case u.e.STOCK_REMINDER:
                this.$refs.stockReminderPopup.handleStockReminderSuccess({
                  success: e.success,
                  btnData: this.btnData,
                });
                break;
              case "groupOn":
              case "lottery":
                r.default.trigger(
                  "popupContainer:sku:show",
                  Object(i.a)({}, this.btnData, {
                    btnActive: "openSku",
                    subscribeSceneV2: "",
                  })
                );
                break;
              case "helpcut":
              case "umpSeckillBookRemind":
                r.default.trigger("popupContainer:submit:act", this.btnData);
            }
          },
          handleWxSubscribeFail(e) {
            switch ((void 0 === e && (e = {}), e.subscribeScene)) {
              case u.e.SALE_REMINDER:
                this.$refs.saleReminderPopup.handleSaleReminderFail(e.err);
                break;
              case u.e.STOCK_REMINDER:
                this.$refs.stockReminderPopup.handleStockReminderFail(e.err);
                break;
              case "groupOn":
              case "lottery":
                r.default.trigger(
                  "popupContainer:sku:show",
                  Object(i.a)({}, this.btnData, {
                    btnActive: "openSku",
                    subscribeSceneV2: "",
                  })
                );
                break;
              case "helpcut":
              case "umpSeckillBookRemind":
                r.default.trigger("popupContainer:submit:act", this.btnData);
            }
          },
          subscribeCallback(e) {
            Object(c.default)({
              path: "/wscump/common/subscription-callback.json",
              data: { scene: e, templateIdList: this.templateIdList },
              withCredentials: !0,
            });
          },
          closeTips() {
            this.showTips = !1;
          },
          productLaunchReservation() {
            var { productLaunch: e } = this.umpActivity,
              { id: t } = this.goodsBaseInfo,
              { activityAlias: s, activityId: i } = e;
            Object(c.requestV2)({
              method: "POST",
              path: "/wscgoods/activity-api/product-launch/reservation.json",
              data: { goodsId: t, alias: s },
            })
              .then(() => {
                this.$emit("dmc-jump", {
                  type: "navigate",
                  page: "ProductLaunch",
                  options: {
                    kdtId: this.kdtId,
                    title: "新品发售",
                    activityId: i,
                  },
                });
              })
              .catch((e) => {
                Object(p.b)(e, { message: "新品发售预约失败，请稍后重试" });
              });
          },
          handleSaleReminderSuccess(e) {
            this.isProductLaunch && this.productLaunchReservation(),
              r.default.trigger("popupContainer:sale-reminder:success", e);
          },
          handleStockReminderSuccess(e) {
            var { skuId: t, status: s } = e,
              a = Object(i.a)({}, this.goodsMetaInfo.stockRemindStatus);
            t ? (a[t] = s) : (a.hasRemindSpuStock = s),
              this.$emit("stock-reminder-success", {
                goodsMetaInfo: Object(i.a)({}, this.goodsMetaInfo, {
                  stockRemindStatus: a,
                }),
              });
          },
          handleHideSku() {
            r.default.trigger("popupContainer:sku:hide");
          },
        },
        ud: !0,
      };
      t.default = a.default.component(b);
    },
  })
);
