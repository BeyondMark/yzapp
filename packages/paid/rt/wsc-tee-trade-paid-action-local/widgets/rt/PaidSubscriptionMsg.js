"use strict";
var r = require("~/r");
r(
  "rOGE",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      rOGE: function (e, s, t) {
        t.r(s);
        var r = t("9ZMt"),
          i = t("AGZf"),
          a = t("YehF"),
          c = (t("T9qh"), t("TWa4")),
          o = t("YeA1"),
          l = t("x52n"),
          n = getApp(),
          h = {
            0: "deliveryDetail",
            1: "order_pay_success_by_self_fetch",
            2: "order_pay_success_by_local_delivery",
          },
          u = 2,
          p = {
            props: {
              plainBtn: { type: Boolean, default: !0 },
              text: { type: String, default: "立即订阅" },
              bgColor: { type: String, default: "#fff" },
            },
            data: () => ({
              showTips: !1,
              themeGeneralColor: "",
              hasSubscribe: !1,
              templateIds: {},
              mpData: {},
              scene: "afterPaySuccess",
              themeCSS: "",
              themeColors: {},
              showSubscribeMsg: !0,
            }),
            computed: {
              btnStyle() {
                var e, s;
                return this.plainBtn
                  ? "color: " + this.themeColors.icon
                  : "background: " +
                      this.themeColors["main-bg"] +
                      "; color: " +
                      this.themeColors["main-text"] +
                      "; border-radius: " +
                      ((null == (e = this.ctx.data) ||
                      null == (s = e.themeRadius)
                        ? void 0
                        : s.button) || "15px");
              },
              showWxSubscribe() {
                var e, s;
                (e =
                  this.templateIds.length > 0 &&
                  r.default.$native.canIUse("requestSubscribeMessage")) &&
                  (null == (s = this.ctx.logger) ||
                    s.log({
                      et: "view",
                      ei: "subscription_order_view",
                      en: "订阅消息曝光",
                      params: { component: "subscribe_order" },
                    }));
                return e;
              },
            },
            created() {
              Object(o.b)(this, ["themeCSS"]),
                Object(o.b)(this, {
                  themeColors: (e) => {
                    var s = e.general;
                    (this.themeColors = e), (this.themeGeneralColor = s);
                  },
                  payResult: (e) => {
                    var s;
                    this.mpData = null != (s = e.mpData) ? s : {};
                    var { shopMetaInfo: t = {} } = n.getShopInfoSync() || {},
                      r = Object(a.e)(t);
                    if (((this.isRetailShop = r), r)) {
                      var { expressType: i } = e;
                      h[i] && (this.scene = h[i]);
                    }
                    Promise.all([Object(l.a)(), Object(l.c)(e.orderNo)])
                      .then((e) => {
                        var s,
                          [{ status: t }, [r]] = e;
                        t === u &&
                        ["retail_free_buy", "retail_scan_buy"].includes(
                          null == (s = r.source_info) ? void 0 : s.order_mark
                        )
                          ? this.fetchTemplateIds([
                              this.scene,
                              "crm_order_evaluation_msg",
                            ])
                          : this.fetchTemplateIds([this.scene]);
                      })
                      .catch(() => {
                        this.fetchTemplateIds([this.scene]);
                      });
                  },
                }),
                Object(o.d)(this, {
                  SubscribeNotice: (e) => {
                    this.showSubscribeMsg = e;
                  },
                });
            },
            methods: {
              clickSubscription() {
                var e,
                  { isRetailShop: s, scene: t } = this,
                  { templateIds: r = [] } = this;
                this.hasSubscribe ||
                  (this.ctx.process.invokePipe("requestSubscribeMessagePush", {
                    templates: r,
                    onFail: (e) => {
                      var s = "订阅微信通知失败";
                      e.errMsg &&
                        e.errMsg.indexOf("switched off") > -1 &&
                        (s = "请在小程序设置中允许订阅消息"),
                        n.logger.requestError({
                          name: "wxSubscribeError",
                          message: s,
                          alert: "info",
                          detail: e,
                        });
                    },
                    onSuccess: (e) => {
                      var r;
                      if (JSON.stringify(e).indexOf("accept") > -1)
                        (this.hasSubscribe = !0),
                          null == (r = this.ctx.logger) ||
                            r.log({
                              et: "click",
                              ei: "allow_click",
                              en: "点击允许",
                              params: { component: "subscribe_order" },
                            });
                      else if (JSON.stringify(e).indexOf("reject") > -1) {
                        var a;
                        Object(i.a)("请在小程序设置中允许订阅消息"),
                          n.logger.requestError({
                            name: "wxSubscribeError",
                            message: "请在小程序设置中允许订阅消息",
                            alert: "info",
                            detail: e,
                          }),
                          null == (a = this.ctx.logger) ||
                            a.log({
                              et: "click",
                              ei: "cancle_click",
                              en: "点击取消",
                              params: { component: "subscribe_order" },
                            });
                      }
                      if (s) {
                        var c,
                          o = JSON.stringify(e).indexOf("accept") > -1;
                        null == (c = this.ctx.logger) ||
                          c.log({
                            et: "click",
                            ei: o
                              ? "accept_msg_subscribe"
                              : "reject_msg_subscribe",
                            en: o
                              ? "接受授权订阅小程序消息"
                              : "拒绝授权订阅小程序消息",
                            params: {
                              subscribe_pos: "支付完成页",
                              delivery_way: t,
                            },
                          });
                      }
                    },
                    onShowTips: () => {
                      this.showTips = !0;
                    },
                    onCloseTips: () => {
                      this.showTips = !1;
                    },
                  }),
                  null == (e = this.ctx.logger) ||
                    e.log({
                      et: "click",
                      ei: "click_wx_subscription",
                      en: "点击订阅消息",
                      si: n.getKdtId(),
                    }));
              },
              closeTips() {
                this.showTips = !1;
              },
              fetchTemplateIds(e) {
                var s = this,
                  t = [];
                e.forEach((e) => {
                  t.push(Object(c.a)({ scene: e }));
                }),
                  Promise.all(t).then((e) => {
                    e.forEach(function (e) {
                      void 0 === e && (e = {}),
                        s.templateIds
                          ? (s.templateIds = [].concat(
                              s.templateIds,
                              e.templateIdList || []
                            ))
                          : (s.templateIds = e.templateIdList || []);
                    });
                  });
              },
            },
            ud: !0,
          };
        s.default = r.default.component(p);
      },
    }
  )
);
