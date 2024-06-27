"use strict";
var r = require("~/r");
r(
  "4bhc",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "4bhc": function (t, i, e) {
        e.r(i);
        var s = e("GFyo"),
          o = e("YeA1"),
          n = e("5iKS"),
          r = {
            data: () => ({
              kdtId: 0,
              visible: !1,
              themeCSS: "",
              themeColors: "",
              mpData: {},
              isAutoOpen: !1,
              subscriptionInfo: {},
              subscriptionModel: [],
              noMoreTips: !1,
              isSubscriptionShow: !1,
              btnCustomStyle:
                "color: var(--main-text, #fff); background: var(--main-bg, #323233); border: 1px solid var(--main-bg, #323233)",
            }),
            computed: {
              customPopupStyle() {
                return (
                  "border-top-left-radius: var(--theme-radius-dialog, 20px); border-top-right-radius: var(--theme-radius-dialog, 20px); text-align: center;" +
                  this.themeCSS
                );
              },
            },
            watch: {
              visible(t) {
                t &&
                  this.ctx.logger.log({
                    et: "view",
                    ei: "show_fuchuang_dingyuewuliu",
                    en: "“订阅物流”浮窗曝光",
                    si: this.kdtId,
                  });
              },
            },
            created() {
              var t = this;
              Object(o.b)(this, ["kdtId", "themeCSS", "themeColors"]),
                Object(o.b)(
                  this,
                  {
                    payResult: (t) => {
                      this.mpData = t.mpData || {};
                    },
                  },
                  { isSetData: !1 }
                ),
                Object(o.d)(this, {
                  showSubscriptionDialog: function (i) {
                    void 0 === i && (i = !1),
                      (t.isAutoOpen = i),
                      Object.keys(t.subscriptionInfo).length
                        ? ((t.subscriptionModel = t.handleImSubscriptionPop(
                            t.subscriptionInfo
                          )),
                          (t.visible = !0))
                        : Object(n.b)({
                            mpData: t.mpData,
                            kdtId: t.kdtId,
                          }).then((i) => {
                            i &&
                              ((t.subscriptionInfo = i),
                              (t.subscriptionModel =
                                t.handleImSubscriptionPop(i)),
                              (t.visible = !0));
                          });
                  },
                  hideSubscriptionDialog: () => {
                    (this.visible = !1),
                      this.ctx.event.emit("closeAutoOpenPopup", {
                        isRealClose: !0,
                      });
                  },
                });
            },
            methods: {
              psmshow(t) {
                (this.isSubscriptionShow = t || !1),
                  this.visible &&
                    (this.subscriptionModel = this.handleImSubscriptionPop(
                      this.subscriptionInfo
                    ));
              },
              handleImSubscriptionPop(t) {
                var i = t.content || [];
                return this.isSubscriptionShow && "focusMpAccount" === t.type
                  ? [
                      [
                        "你也可以长按识别下方二维码关注店铺公众号，查看订单物流",
                      ],
                      i[1],
                      [],
                    ]
                  : i;
              },
              onImgError() {
                var t;
                "focusMpAccount" ===
                  (null == (t = this.subscriptionInfo) ? void 0 : t.type) &&
                  ((this.subscriptionInfo.content = n.a.content),
                  (this.subscriptionModel = n.a.content));
              },
              onClose() {
                this.ctx.event.emit("hideSubscriptionDialog");
              },
              onManualClose() {
                Object(s.g)(
                  "pay_success_express_dialog_click_" + this.kdtId,
                  1
                ),
                  this.ctx.event.emit("hideSubscriptionDialog");
              },
            },
            ud: !0,
          },
          c = e("9ZMt");
        i.default = c.default.component(r);
      },
    }
  )
);
