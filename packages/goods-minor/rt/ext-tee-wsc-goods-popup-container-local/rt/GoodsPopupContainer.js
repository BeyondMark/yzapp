"use strict";
var r = require("~/r");
r(
  "oBJM",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      oBJM: function (e, t, o) {
        o.r(t);
        var s = o("YeA1"),
          a = o("ol0k"),
          i = o("Tewj"),
          n = o("+UkH"),
          r = o("2bgu"),
          p = {
            props: {
              showMakeupOrder: { type: Boolean, default: !0 },
              showGoodsShowcase: { type: Boolean, default: !0 },
              hideProtocol: Number,
              showVisitGift: { type: Boolean, default: !0 },
              showGoodsWish: { type: Boolean, default: !0 },
            },
            data() {
              return {
                hasGoodsShowcase: !1,
                routeData: {},
                pageReady: !1,
                themeVars: "",
                loggerObj: { logger: this.ctx.logger },
                kdtId: "",
                alias: "",
                goodsBaseInfo: {},
                marketing: {},
                offlineId: 0,
                buyerId: 0,
                shopMpInfo: {},
                shopBaseInfo: {},
                goodsMetaInfo: {},
                goodsActivity: {},
                umpActivity: {},
                serverStatus: {},
                staticConfig: {},
                pageFeature: {},
                multistore: {},
                shopMetaInfo: {},
                currentActivity: {},
                getUserInfo: () => ({}),
                explainVideoFullScreen: !1,
                openGoodsMakeupOrder: !1,
              };
            },
            created() {
              this.init();
              var { route: e, getQuery: t } = this.ctx.env;
              (this.routeData = { route: e, query: t() }),
                (this.getUserInfo = this.ctx.lambdas.getUserInfo),
                Object(s.b)(this, [
                  "kdtId",
                  "alias",
                  "goodsBaseInfo",
                  "themeVars",
                  "marketing",
                  "offlineId",
                  "shopBaseInfo",
                  "shopMpInfo",
                  "goodsMetaInfo",
                  "goodsActivity",
                  "umpActivity",
                  "serverStatus",
                  "staticConfig",
                  "pageFeature",
                  "multistore",
                  "shopMetaInfo",
                  "buyerId",
                  "hasGoodsShowcase",
                  "currentActivity",
                  "explainVideoFullScreen",
                ]),
                Object(s.b)(this, {
                  shopConfig: (e) => {
                    var { openGoodsMakeupOrder: t = 1 } = e;
                    this.openGoodsMakeupOrder = !!t;
                  },
                }),
                Object(s.d)(this, {
                  goodsSetupReady: () => {
                    this.pageReady = !0;
                  },
                  addCartCompleted: (e) =>
                    i.default.trigger("popupContainer:addCartCompleted", e),
                  "sku:show": () =>
                    i.default.trigger("popupContainer:makeup:sku:show"),
                  "sku:hide-after": () =>
                    i.default.trigger("popupContainer:sku:hide-after"),
                  "follow:show": (e) =>
                    i.default.trigger("popupContainer:follow:show", e),
                  "subscribe:show": (e) =>
                    i.default.trigger("popupContainer:subscribe:show", e),
                  "floating:nav:update:position": (e) =>
                    i.default.trigger("popupContainer:update-nav-pos", e),
                  "btn:click": (e) =>
                    i.default.trigger("popupContainer:nav-btn-click", e),
                  "sku:submit": (e) =>
                    i.default.trigger("popupContainer:sku:submit", e),
                  "goods:showcase": (e) =>
                    i.default.trigger("popupContainer:goods:showcase", e),
                  "question:show": (e) =>
                    i.default.trigger("popupContainer:question:show", e),
                  "wecomBenefit:show": (e) =>
                    i.default.trigger("popupContainer:wecomBenefit:show", e),
                  "helpcutErr:show": (e) =>
                    i.default.trigger("popupContainer:helpcutErr:show", e),
                  "qrcode:show": (e) =>
                    i.default.trigger("popupContainer:qrcode:show", e),
                }),
                i.default.on("popupContainer:sku:show", (e) => {
                  this.ctx.event.emit("sku:show", e);
                }),
                i.default.on("popupContainer:sku:hide", () => {
                  this.ctx.event.emit("sku:hide");
                }),
                i.default.on("popupContainer:sku:show:to-submit", (e) => {
                  this.ctx.event.emit("sku:show:to-submit", e);
                }),
                i.default.on("popupContainer:submit:act", (e) => {
                  this.ctx.event.emit("submit:act", e);
                }),
                i.default.on("popupContainer:sale-reminder:success", (e) => {
                  this.ctx.event.emit("saleReminderSuccess", e);
                }),
                this.ctx.process.define("checkShowFollow", a.a);
            },
            destroyed() {
              i.default.off("popupContainer:sku:show"),
                i.default.off("popupContainer:sku:hide"),
                i.default.off("popupContainer:submit:act"),
                i.default.off("popupContainer:sale-reminder:success"),
                i.default.off("popupContainer:wish:change"),
                i.default.off("popupContainer:sku:show:to-submit"),
                i.default.off("popupContainer:stateChange");
            },
            methods: {
              init() {
                var e = Object(n.a)({
                  openPop: (e) => {
                    "VISIT_GIFT" !== e
                      ? this.ctx.event.emit(e + ":open")
                      : i.default.trigger("popupContainer:visit-gift:open");
                  },
                });
                Object(s.d)(this, {
                  stateChange: (t) => {
                    e.handleStateChange(t);
                  },
                }),
                  i.default.on("popupContainer:stateChange", (t) => {
                    e.handleStateChange(t);
                  });
                var t = this.ctx.data.rootKdtId || this.ctx.data.kdtId;
                r.a.init({
                  kdtId: t,
                  wxOpenTagList: ["wx-open-subscribe"],
                  force: !0,
                });
              },
              doLog(e) {
                this.ctx.logger.log(e);
              },
              dmcJump(e) {
                var { type: t, page: o, options: s, extra: a } = e;
                this.ctx.dmc[t](o, s, a);
              },
              handleReminderSuccess(e) {
                var { goodsMetaInfo: t } = e;
                this.ctx.data.goodsMetaInfo = t;
              },
              updateIcon(e) {
                this.ctx.process.invoke("createOrUpdateIndependentIcon", e);
              },
              updateGoodsWish(e) {
                this.ctx.event.emit("wish:change", e);
              },
              openFloatGoods(e) {
                var { open: t } = e;
                this.ctx.data.openFloatGoods = t;
              },
              handleWechatSubscribeMessagePush(e) {
                this.ctx.process.invoke("requestWechatSubscribeMessagePush", e);
              },
            },
          },
          u = o("9ZMt");
        t.default = u.default.component(p);
      },
    }
  )
);
