"use strict";
var r = require("~/r");
r(
  "0bAs",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      "0bAs": function (t, e, i) {
        i.r(e);
        var s = i("YeA1"),
          o = i("ONqW"),
          r = i("dLlk"),
          n = i("tS13"),
          h = 0,
          c = 1,
          a = "points",
          l = {
            name: "trade-records-block",
            data: () => ({
              showPop: !1,
              shopBaseInfo: {},
              goodsBaseInfo: {},
              shopConfig: {},
              featureSwitch: {},
              originRecords: [],
              totalCount: 0,
              buyBtnText: "",
              recordsBuyButton: [],
              currentActivity: {},
              orderBuyBtn: {},
              initHeight: 75,
              swipeList: [],
              isRecordsPageVisible: !0,
              isRecordsBlockInView: !0,
              showSwipe: !0,
              themeCSS: "",
              pageStyleCSS: "",
            }),
            logicData: () => ({ hasLogBuyView: !1 }),
            computed: {
              isConfigOpen() {
                var { showBuyRecord: t, goodsDetailBuyRecord: e = null } =
                    this.shopConfig,
                  i = t ? [h, c] : [];
                if (e)
                  try {
                    i = JSON.parse(e) || i;
                  } catch (t) {}
                return i.indexOf(h) > -1;
              },
              isReachCount() {
                var t = this.shopConfig.goodsDetailBuyRecordMin;
                return t && this.totalCount >= t;
              },
              showBlock() {
                return this.isConfigOpen && this.isReachCount;
              },
              itemId() {
                return this.goodsBaseInfo.id;
              },
              isPageReady() {
                return !!(
                  this.showBlock &&
                  this.tradeRecords.length &&
                  this.isShowSwipe
                );
              },
              isShowSwipe() {
                var { type: t = "" } = this.currentActivity,
                  e = ![
                    "ladderGroupOn",
                    "groupOn",
                    "tuan",
                    "luckyDrawGroup",
                    "inSourcingFission",
                  ].includes(t);
                return this.showBlock && e;
              },
              showBuyBtn() {
                var { orderBuyBtn: t } = this;
                if (t.disabled) return !1;
                var { name: e = "", activityName: i = "" } = t;
                return (
                  [
                    "homepage",
                    "soldout-reminder",
                    "wait-sold-eminder",
                    "not-display",
                    "soldout",
                    "limit-buy",
                  ].indexOf(e) < 0 &&
                  ["presentExchange", "limitedSeckill"].indexOf(i) < 0
                );
              },
              isBlockVisible() {
                return this.isRecordsBlockInView && this.isRecordsPageVisible;
              },
              height() {
                return 1 === this.tradeRecords.length ? 35 : this.initHeight;
              },
              tradeRecords() {
                return this.isShowSwipe
                  ? this.originRecords
                  : this.originRecords.slice(0, 3);
              },
              themeVars() {
                return this.themeCSS + this.pageStyleCSS;
              },
            },
            watch: {
              showBlock(t) {
                this.ctx.event.emit("trade-records-block:show", t),
                  t &&
                    this.logger.log({
                      en: "成交记录模块-曝光",
                      ei: "trade_records_block_view",
                      et: "view",
                      pt: "g",
                      params: { goodsId: this.itemId },
                    });
              },
              isPageReady(t) {
                t &&
                  (this.$nextTick(() => {
                    this.bindObserver();
                  }),
                  this.showBuyBtn &&
                    this.isBlockVisible &&
                    this.logBuyBtnView(),
                  this.isShowSwipe &&
                    this.isBlockVisible &&
                    this.logTradeRecordsView());
              },
            },
            created() {
              (this.logger = Object(o.a)()),
                Object(s.b)(this, [
                  "shopConfig",
                  "goodsBaseInfo",
                  "shopBaseInfo",
                  "featureSwitch",
                  "currentActivity",
                  "themeCSS",
                  "pageStyleCSS",
                ]),
                Object(s.b)(this, {
                  recordsBuyButton: (t) => {
                    var e = t
                      .filter(
                        (t) =>
                          t.activityName === a && t.btnActive === n.a.OPEN_SKU
                      )
                      .pop();
                    e || (e = t.map((t) => t).pop());
                    var { name: i = "", skuScene: s = "" } = e || {};
                    (this.buyBtnText =
                      "add-cart" === i && s === n.c.ADD_CART
                        ? "去加购"
                        : "去下单"),
                      (this.orderBuyBtn = e);
                  },
                });
            },
            mounted() {
              this.fetchData();
            },
            destroyed() {
              this.unbindObserver();
            },
            methods: {
              togglePop() {
                (this.showPop = !this.showPop),
                  this.lockPageScroll(this.showPop);
              },
              fetchData() {
                var t = this;
                this.itemId &&
                  Object(r.a)(this.itemId, this.shopBaseInfo.rootKdtId).then(
                    function (e) {
                      void 0 === e && (e = {}),
                        (t.totalCount = e.totalItems || 0),
                        (t.originRecords = e.list || []),
                        (t.swipeList = t.setTwoDimensionalArray(e.list, 2));
                    }
                  );
              },
              lockPageScroll(t) {
                this.ctx.event.emit("page-container:scrollLocked", t);
              },
              clickButton(t) {
                var { orderBuyBtn: e } = this;
                this.ctx.event.emit("records-sku:show", e),
                  this.logBuyBtnClick(t);
              },
              bindObserver() {
                this.unbindObserver();
                (this.$_blockObserver = this.createIntersectionObserver({
                  thresholds: [0, 0.5, 1],
                })),
                  this.$_blockObserver
                    .relativeToViewport()
                    .observe("#js-trade-records", (t) => {
                      this.isRecordsBlockInView = t.intersectionRatio >= 0.5;
                    });
              },
              unbindObserver() {
                var t;
                null == (t = this.$_blockObserver) || t.disconnect(),
                  (this.$_blockObserver = null);
              },
              onChange() {
                this.showBuyBtn && this.logBuyBtnView();
              },
              setTwoDimensionalArray(t, e) {
                var i = t[0];
                t.length > 1 && t.length % 2 != 0 && t.push(i);
                for (var s = [], o = 0; o < t.length; o += e)
                  s.push(t.slice(o, o + e));
                return s;
              },
              logTradeRecordsView() {
                this.logger.log({
                  et: "view",
                  ei: "view_shop_list",
                  en: "新购买记录曝光",
                  pt: "g",
                  params: {
                    goodsId: this.itemId,
                    count: this.totalCount.toString(),
                    component: "shop_list",
                  },
                });
              },
              logBuyBtnView() {
                this.hasLogBuyView ||
                  (this.logger.log({
                    et: "view",
                    ei: "view_goto_buy",
                    en: "去下单曝光",
                    params: {
                      count: this.totalCount.toString(),
                      goodsId: this.itemId,
                      list_count: this.tradeRecords.length,
                      component: "shop_list",
                    },
                  }),
                  (this.hasLogBuyView = !0));
              },
              logBuyBtnClick(t) {
                this.logger.log({
                  en: "去下单点击",
                  ei: "click_goto_buy",
                  et: "click",
                  pt: "g",
                  params: {
                    count: this.totalCount.toString(),
                    goodsId: this.itemId,
                    list_count: this.tradeRecords.length,
                    position: t,
                    component: "shop_list",
                  },
                });
              },
            },
            ud: !0,
          },
          d = i("9ZMt");
        e.default = d.default.component(l);
      },
    }
  )
);
