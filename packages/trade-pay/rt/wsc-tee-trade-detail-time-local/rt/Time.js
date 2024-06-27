"use strict";
var r = require("~/r");
r(
  "M2+Q",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "M2+Q": function (e, r, t) {
      t.r(r);
      var o = t("9ZMt"),
        a = t("AGZf"),
        i = t("Q56H"),
        s = t("qYBx"),
        n = t("b4An"),
        d = t("2bgu"),
        c = t("YeA1"),
        p = {
          data: () => ({
            rootStyle: {},
            order: {},
            orderExtra: {},
            kdtId: 0,
            orderNo: "",
            time: {},
            orderBizUrl: {},
            isUsingNewSnapshot: !1,
            miniprogram: {},
            isEduOrder: !1,
          }),
          computed: {
            isFxZpp: () => !1,
            formatTime() {
              var { time: e } = this,
                r = {};
              return (
                ["createTime", "payTime", "expressTime", "successTime"].forEach(
                  (t) => {
                    r[t] = e[t]
                      ? s.b.formatDate(e[t], "YYYY-MM-DD HH:mm:ss")
                      : "";
                  }
                ),
                r
              );
            },
            showYZQuestionUrl() {
              var { miniprogram: e } = this;
              return !e.isAlipayApp && !e.isQQApp && !e.isKsApp;
            },
            isTradeComponent3() {
              var { orderExtra: e } = this,
                r = {};
              try {
                return (
                  "TRADE_COMPONENT_3_0" ===
                    (r = JSON.parse(
                      (null == e ? void 0 : e.BIZ_ORDER_ATTRIBUTE) || "{}"
                    )).WX_CHANNELS_COMPONENT_VERSION ||
                  "WX_VIDEO_XIAO_DIAN" === r.MULTI_PLAT_OUT_CHANNEL
                );
              } catch (e) {
                return !1;
              }
            },
          },
          created() {
            Object(c.b)(this, [
              "rootStyle",
              "order",
              "kdtId",
              "orderNo",
              "time",
              "orderBizUrl",
              "isUsingNewSnapshot",
              "miniprogram",
              "isEduOrder",
              "orderExtra",
            ]);
          },
          methods: {
            handleGoSnapshotClick() {
              var { kdtId: e, orderNo: r } = this;
              this.ctx.logger.log({
                et: "click",
                ei: "click_history",
                en: "进入交易快照",
                si: e,
              });
              var t = "/wsctrade/order/snapshot?order_no=" + r + "&kdt_id=" + e,
                o = s.f.args.add(
                  Object(n.a)("/wsctrade/order/snapshot", "h5"),
                  { order_no: r, kdt_id: e }
                );
              Object(d.b)({
                url:
                  "/pages/common/webview-page/index?src=" +
                  encodeURIComponent(t),
                type: "navigateTo",
                web: { type: "safeLink", safeLink: { url: o } },
              });
            },
            handleCopyBtnClick() {
              Object(i.b)(this.orderNo).then(() => {});
            },
            toMoneyToWhere() {
              var e = this.orderBizUrl.moneyToWhereUrl;
              e.startsWith("http://") && (e = e.replace("http://", "https://")),
                Object(d.b)({
                  url:
                    "/pages/common/webview-page/index?src=" +
                    e +
                    "&title=钱款去向",
                  type: "navigateTo",
                });
            },
            toOrderQuestion() {
              if (this.isTradeComponent3)
                Object(a.a)("视频号订单，请咨询腾讯客服 400-670-0700");
              else {
                var { orderNo: e } = this,
                  { wxChannelsOrder: r } = this.order,
                  t = r ? "wechatChannel" : "default",
                  o = s.f.args.add(this.orderBizUrl.orderQuestionUrl, {
                    from_scene: t,
                    order: e,
                  });
                Object(d.b)({
                  url:
                    "/pages/common/webview-page/index?src=" +
                    encodeURIComponent(o),
                  type: "navigateTo",
                });
              }
            },
            toYzGuaranteeUrl() {
              var { wxChannelsOrder: e } = this.order,
                r = e ? "wechatChannel_Youzan" : "Youzan_danbao";
              this.ctx.logger.log({
                et: "click",
                ei: "click_guarantee_cs",
                en: "点击有赞担保专属客服",
                si: this.kdtId,
                params: { from_scene: r },
              });
              var t = s.f.args.add(this.orderBizUrl.yzGuaranteeUrl, {
                from_biz: "wsc",
                from_scene: r,
                order: this.orderNo,
              });
              t.startsWith("http://") && (t = t.replace("http://", "https://")),
                Object(d.b)({
                  url:
                    "/pages/common/webview-page/index?src=" +
                    encodeURIComponent(t),
                  type: "navigateTo",
                });
            },
          },
          ud: !0,
        };
      r.default = o.default.component(p);
    },
  })
);
