"use strict";
var r = require("~/r");
r(
  "xyc3",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      xyc3: function (t, e, s) {
        s.r(e);
        var i = s("+I+c"),
          a = s("Fcif"),
          o = s("US/N"),
          r = s("deif"),
          u = s("2p7Y"),
          d = s("hOS2"),
          n = s("sqjt"),
          h = s("5HCC"),
          c = s("pgby"),
          k = s("tS13"),
          l = s("Oeeh"),
          m = s("52j6"),
          g = s("mY4v"),
          b = s("AGZf"),
          S = s("NHEX"),
          p = s.n(S),
          f = s("sctb"),
          D = s("YeA1"),
          y = ["itemDataModel", "option"],
          C = ["postData"],
          j = [
            "降价拍",
            "团购返现",
            "多人拼团",
            "周期购",
            "定金膨胀",
            "阶梯拼团",
            "积分兑换",
          ],
          v = getApp(),
          O = {
            props: {
              source: String,
              isShow: Boolean,
              searchParams: Object,
              skuScene: String,
            },
            data: () => ({
              showDecoSku: !1,
              offlineId: 0,
              kdtId: 0,
              containerStyle: "",
              multistore: {},
              goods: {},
              sku: {},
              skuConfig: {},
              showEvent: {},
              pointsConfig: {},
              themeVars: "",
              extraData: {},
              themeTag: { plain: !1 },
              selectedSkuId: 0,
              selectedSkuComb: {},
              buyBtnFirstClickTime: 0,
              buyBtnClicked: !1,
              loggerName: "",
            }),
            computed: {
              customStyle() {
                return this.containerStyle + this.themeVars;
              },
              goodsAttributesOpt() {
                var t,
                  e,
                  s = this.sku && this.sku.itemSalePropList;
                return {
                  show: !(null == s || !s.length),
                  goodsAttributes: s,
                  activityName:
                    null == (t = this.showEvent) ? void 0 : t.activityName,
                  goodsId: this.goods.id,
                  kdtId: Number(this.kdtId),
                  price:
                    (null == (e = this.selectedSkuComb) ? void 0 : e.price) ||
                    0,
                  skuId: this.selectedSkuId,
                };
              },
            },
            watch: {
              isShow: {
                handler(t) {
                  t
                    ? this.searchParams && this.searchParams.alias
                      ? this.getSkuInfo({ alias: this.searchParams.alias })
                      : Object(b.a)("缺少必要参数！")
                    : (this.showDecoSku = !1);
                },
              },
            },
            created() {
              (this.bizTrade = new f.a()),
                Object(D.b)(this, [
                  "offlineId",
                  "containerStyle",
                  "multistore",
                  "kdtId",
                  "pointsConfig",
                  "themeVars",
                  "themeTag",
                  "skuConfig",
                  "sku",
                  "goods",
                ]),
                Object(D.d)(this, {
                  "sku:show": (t) => this.getSkuInfo(t),
                  "sku:addCart": (t) => this.addCart(t),
                  "sku:independentShow": (t) => this.onSkuShow(t),
                  "sku:afterAddCart": (t) => this.afterAddCart(t),
                  "sku:afterBuy": (t) => this.afterBuy(t),
                  "time:clickSkuButton": (t) => {
                    this.buyBtnFirstClickTime = t;
                  },
                }),
                Object(D.e)(this, {
                  beforeFormatSku: (t) => {
                    var { res: e, alias: s } = t;
                    return this.judgeToGoodsDetailPage(e, s);
                  },
                });
            },
            methods: {
              onSkuShow(t) {
                (this.showEvent = t),
                  t.skuOptions.resetSku && (this.extraData = {}),
                  (this.showDecoSku = !0);
              },
              onSkuSelected(t) {
                var [e] = this.ctx.process.invoke(
                  "sku:selectData",
                  t,
                  this.skuData
                );
                this.ctx.cloud.emit("onSkuSelected", e),
                  (this.selectedSkuComb = t.selectedSkuComb);
                var { skuId: s, id: i } = this.selectedSkuComb || {};
                this.selectedSkuId = i || s || 0;
              },
              onPreview(t) {
                this.ctx.event.emit("sku:preview", t);
              },
              onHideSku() {
                try {
                  this.loggerName &&
                    (this.ctx.hummer.mark.end(this.loggerName),
                    (this.loggerName = ""));
                } catch (t) {}
                (this.showDecoSku = !1), this.ctx.cloud.emit("onClose");
              },
              onPluginsChange(t) {
                this.extraData = Object(a.a)({ viewUpdate: !0 }, t);
              },
              judgeToGoodsDetailPage(t, e) {
                var s = { res: t, jumpToGoodsPage: !1 },
                  i = p()(t, "itemDataModel.isVirtual", 0),
                  a = p()(t, "itemActivitySpuModels[0].type", ""),
                  o = p()(t, "activityInfo", []);
                return t.jumpToGoodsPage ||
                  3 == +i ||
                  "depositExpansion" === a ||
                  (o.length && j.some((t) => o.indexOf(t) >= 0))
                  ? ((s.jumpToGoodsPage = !0),
                    Object(D.a)().dmc.navigate("GoodsDetail", { alias: e }),
                    Promise.resolve(s))
                  : Promise.resolve(s);
              },
              getSkuInfo(t) {
                var { alias: e, timingSaleHideBuyBtnInSku: s } = t;
                t.containerStyle && (this.containerStyle = t.containerStyle),
                  this.buyBtnFirstClickTime ||
                    ("H5_DECORATE_GOODS" !== t.birthdayScene &&
                      "WEAAPP_DECORATE_GOODS" !== t.birthdayScene) ||
                    (this.buyBtnFirstClickTime = Date.now()),
                  Object(o.default)({
                    path: "/wscshop/sku/skudata.json",
                    data: Object(r.a)({ data: t, offlineId: this.offlineId }),
                  })
                    .then((t) => this.judgeToGoodsDetailPage(t, e))
                    .then((t) => {
                      var { res: o, jumpToGoodsPage: r } = t;
                      this.skuData = o;
                      var { itemDataModel: k, option: l = {} } = o,
                        m = Object(i.a)(o, y);
                      if (r) this.buyBtnFirstClickTime = 0;
                      else {
                        if (!m.stockNum)
                          return (
                            (this.buyBtnFirstClickTime = 0),
                            void Object(b.a)("该商品已售罄！")
                          );
                        var {
                          itemId: g,
                          comboMark: S = {},
                          comboDetailModel: p = {},
                        } = k || {};
                        this.ctx.data.goodsCombineInfoBizSku = Object(a.a)(
                          {},
                          S,
                          p
                        );
                        var f = Object(u.a)(l),
                          { shopConfig: D } = this.ctx.data;
                        (this.skuConfig = Object(d.a)({
                          data: o,
                          timingSaleHideBuyBtnInSku: s,
                          shopConfig: D,
                          couponId: f,
                          skuScene: this.skuScene,
                        })),
                          (this.sku = Object(n.a)(o, f));
                        var C = Object(h.a)({
                          goods: this.goods,
                          data: o,
                          itemId: g,
                          skuScene: this.skuConfig.skuScene,
                        });
                        (this.goods = Object(c.a)({
                          itemDataModel: k,
                          alias: e,
                        })),
                          this.onSkuShow(C);
                      }
                    })
                    .catch((t) => {
                      Object(b.a)(t.msg || "获取商品信息错误");
                    });
              },
              onSkuOpened() {
                if (this.buyBtnFirstClickTime && !this.buyBtnClicked)
                  try {
                    this.ctx.hummer.mark.start(
                      "non-goods-detail-sku-popup",
                      this.buyBtnFirstClickTime
                    ),
                      this.ctx.hummer.mark.end("non-goods-detail-sku-popup"),
                      (this.buyBtnClicked = !0);
                  } catch (t) {}
              },
              afterAddCart(t) {
                if (v.getYouZanYunSdk) {
                  var e = v.getYouZanYunSdk(),
                    s = getCurrentPages(),
                    i = "/" + s[s.length - 1].route;
                  e.app.trigger("beforeAddCart", {
                    skuId: t.skuId,
                    title: t.title,
                    id: t.goodsId,
                    selectedNum: t.num,
                    pageUrl: i,
                  });
                }
                this.afterSubmitData();
              },
              afterBuy(t) {
                var { postData: e } = t,
                  s = Object(i.a)(t, C);
                this.afterSubmitData();
                var o = p()(e, "common.orderFrom");
                this.bizTrade.onBuyEnd(
                  Object(a.a)({}, s, { kdtId: e.kdtId, orderFrom: o })
                );
              },
              submitData() {
                if (this.isLoading)
                  return Object(b.a)("数据提交中，请勿重复提交。");
                (this.isLoading = !0),
                  this.inSkuScene !== k.c.ADD_CART
                    ? this.ctx.process
                        .invokePipe("sku:beforeBuyAsync", this.postData)
                        .then(() => {
                          Object(l.a)(this.sku).then(() => {
                            this.bizTrade
                              .buyHandler(this.postData)
                              .then((t) => {
                                (this.bookKey = t.bookKey),
                                  this.ctx.process
                                    .invokePipe("sku:afterBuyAsync", t)
                                    .then(() => {
                                      this.afterBuy(
                                        Object(a.a)({}, t, {
                                          postData: this.postData,
                                        })
                                      );
                                    });
                              });
                          });
                        })
                    : this.ctx.process
                        .invokePipe("sku:beforeAddCartAsync", this.postData)
                        .then(() => {
                          this.bizTrade
                            .addCartHandler(this.postData)
                            .then(() => {
                              this.afterAddCart(
                                Object(a.a)({}, this.postData, {
                                  title: this.skuData.itemDataModel.title,
                                })
                              );
                            });
                        });
              },
              afterSubmitData() {
                (this.isLoading = !1), this.onHideSku();
              },
              addCart(t) {
                this.doSubmit(Object(a.a)({}, t, { skuScene: k.c.ADD_CART }));
              },
              doSubmit(t) {
                try {
                  (this.loggerName = "goods-buy-now"),
                    t.skuScene === k.c.ADD_CART &&
                      (this.loggerName = "goods-add-cart"),
                    this.ctx.hummer.mark.start(this.loggerName);
                } catch (t) {}
                if ("buyButton" !== this.source) {
                  var { skuScene: e, skuData: s } = t,
                    { goods: i, sku: a, multistore: o, kdtId: r } = this,
                    { goodsCombineInfoBizSku: u } = this.ctx.data,
                    d = this.ctx.logger.getLogParams();
                  (this.inSkuScene = e),
                    (this.postData = Object(m.a)({
                      logParams: d,
                      goodsCombineInfoBizSku: u,
                      sku: a,
                      submitData: t,
                      goods: i,
                      multistore: o,
                      kdtId: r,
                    })),
                    Object(g.a)(s, this.ctx.logger.log),
                    this.submitData();
                } else this.ctx.event.emit("submit:act", t);
              },
            },
            ud: !0,
          },
          I = s("9ZMt");
        e.default = I.default.component(O);
      },
    }
  )
);
