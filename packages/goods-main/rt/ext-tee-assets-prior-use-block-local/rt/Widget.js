"use strict";
var r = require("~/r");
r(
  "FXDF",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      FXDF: function (e, a, t) {
        t.r(a);
        var s = t("Fcif"),
          i = t("YeA1"),
          n = t("ONqW"),
          r = t("9ZMt"),
          d = t("TTtO"),
          h = {
            data: () => ({
              env: {},
              abTraceId: "",
              goods: {},
              goodsPriceInfo: {},
              shopConfig: {},
              payWays: {},
              goodsBaseInfo: {},
              payWaysData: {},
              payChannels: [],
              umpActivity: {},
              goodsActivity: {},
              kdtId: 0,
              buyerId: 0,
              supportSkuDirectOrder: !1,
              themeVars: "",
              isSyncOrder: !1,
            }),
            computed: {
              recommend() {
                return this.payChannels.find((e) => e.recommend);
              },
              isPriorData() {
                return (
                  this.recommend &&
                  "PRIOR_USE" === this.recommend.payChannel &&
                  !this.isSyncOrder
                );
              },
            },
            watch: {
              recommend() {
                this.log({
                  ei: "wsc_g_pay_channels_recommend_view",
                  en: "商详页加载支付方式推荐位",
                });
              },
            },
            created() {
              Object(i.b)(this, [
                "env",
                "goods",
                "goodsPriceInfo",
                "shopConfig",
                "payWays",
                "goodsBaseInfo",
                "umpActivity",
                "goodsActivity",
                "kdtId",
                "buyerId",
                "supportSkuDirectOrder",
                "themeVars",
              ]),
                Object(i.d)(this, {
                  goodsSetupReady: () => {
                    this.initPayChannels();
                  },
                  "payWaysData:update": (e) => {
                    (this.payWaysData = Object(s.a)({}, this.payWaysData, e)),
                      (this.ctx.data.payWaysData = this.payWaysData);
                  },
                }),
                this.checkNeedSyncOrderScene();
            },
            methods: {
              initPayChannels() {
                var { kdtId: e } = this,
                  {
                    goodsPriceInfo: { minPrice: a },
                    payWays: { isInstallment: t = 0 },
                    goodsActivity: { presale: s },
                  } = this,
                  i = this.buyerId,
                  {
                    id: n,
                    isFastBuy: h = 0,
                    isVirtual: c = !1,
                  } = this.goodsBaseInfo || {},
                  y = r.default.getEnv();
                Object(d.a)({
                  isInstalment: "weapp" === y ? 0 : +t,
                  sourceFrom: "ITEM_DETAIL",
                  bizCode: "E_TRANS",
                  deviceType: "web" === y ? "WX_H5" : "WX_MINI_APP",
                  totalPrice: a,
                  kdtId: e,
                  userId: i,
                  itemList: JSON.stringify([
                    {
                      itemId: n || this.goods.id,
                      itemActivities: [
                        ...Object.keys(this.umpActivity).filter(
                          (e) => this.umpActivity[e] && "pageType" !== e
                        ),
                      ],
                      preSale: String(!!s),
                      virtual: String(c),
                      count: 1,
                    },
                  ]),
                  extInfo: JSON.stringify({
                    fastBuy: String(!!h),
                    defaultResult: String(
                      !!this.payChannels.find(
                        (e) => "PRIOR_USE" === e.payChannel
                      )
                    ),
                  }),
                }).then((e) => {
                  var { channels: a } = e;
                  if (this.isSyncOrder)
                    return (
                      (this.ctx.data.payChannels = []),
                      void (this.payChannels = [])
                    );
                  (this.ctx.data.payChannels = a), (this.payChannels = a);
                });
              },
              checkNeedSyncOrderScene() {
                this.ctx.env.getQueryAsync().then((e) => {
                  this.ctx.lambdas.checkIsNeedSyncOrderScene &&
                    this.ctx.lambdas.checkIsNeedSyncOrderScene(e).then((e) => {
                      (this.isSyncOrder = e),
                        this.isSyncOrder &&
                          ((this.ctx.data.payChannels = []),
                          (this.payChannels = []));
                    });
                });
              },
              closePopUp() {
                this.payWaysDataUpdate({ show: !1 });
              },
              payWaysDataUpdate(e) {
                (this.payWaysData = Object(s.a)({}, this.payWaysData, e)),
                  (this.ctx.data.payWaysData = this.payWaysData);
              },
              updatePopUp() {
                this.log({
                  ei: "wsc_g_pay_channels_recommend_click",
                  en: "商详页点击支付方式推荐位",
                }),
                  this.isPriorData
                    ? this.payWaysDataUpdate({ show: !0 })
                    : (this.ctx.event.emit("showNearSku"),
                      this.updatePreferredPayChannel("INSTALMENT"),
                      this.payWaysDataUpdate({ payWay: "installment" }));
              },
              toUse() {
                this.updatePreferredPayChannel("PRIOR_USE"),
                  this.payWaysDataUpdate({ show: !1, payWay: "PRIOR_USE" }),
                  this.ctx.event.emit("showNearSku"),
                  this.log({
                    ei: "wsc_g_prior_use_touse_click",
                    en: "商详页面先用后付面板点击去使用",
                  });
              },
              updatePreferredPayChannel(e) {
                this.supportSkuDirectOrder &&
                  (this.ctx.data.preferredPayChannel = e);
              },
              log(e) {
                var { ei: a, en: t } = e,
                  { payChannels: s = [] } = this;
                Object(n.a)().log({
                  et: "custom",
                  ei: a,
                  en: t,
                  params: {
                    goodsId: this.goods.id,
                    abTraceId: this.abTraceId,
                    channels: s.map((e) => e.payChannel).join(","),
                    recommend_channel: s[0].payChannel,
                    page_scene: "ranta",
                  },
                });
              },
            },
            ud: !0,
          };
        a.default = r.default.component(h);
      },
    }
  )
);
