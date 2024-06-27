"use strict";
var r = require("~/r");
r(
  "SxlE",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      SxlE: function (e, t, s) {
        s.r(t);
        var o = s("Fcif"),
          i = s("AGZf"),
          a = s("lgMb"),
          r = s("YeA1"),
          c = s("lQkc"),
          d = s("1Uvd"),
          l = function (e, t) {
            return (
              void 0 === t && (t = (e) => e),
              (e || []).reduce((e, s) => {
                if (e[s.goodsId]) {
                  var i = Object(o.a)({}, e);
                  return (i[s.goodsId][s.skuId] = t(s)), i;
                }
                return Object(o.a)({}, e, { [s.goodsId]: { [s.skuId]: t(s) } });
              }, {})
            );
          },
          n = {
            data: () => ({
              show: !1,
              list: [],
              finished: !1,
              loading: !1,
              selectedSkus: {},
              pageNo: 1,
              postageModel: {},
              order: {},
              state: {},
              timelyLimit: {},
              bodyStyle:
                "position: relative;display: flex;flex-direction: column;justify-content: space-between;",
            }),
            computed: {
              orderSkus() {
                var { goods: e } = this.state;
                return l(null == e ? void 0 : e.list, (e) => e.num);
              },
              meetText() {
                var { meetInfo: e = {}, meet: t } = this.postageModel || {},
                  { value: s, label: o } = e;
                return t || s <= 0 ? "已包邮" : "再买" + s + o + "包邮";
              },
            },
            watch: {
              show(e) {
                var { appType: t } = this.postageModel;
                e &&
                  ((this.selectedSkus = {}),
                  (this.pageNo = 1),
                  (this.list = []),
                  this.fetch(),
                  this.ctx.logger &&
                    this.ctx.logger.log({
                      et: "view",
                      ei: "component_view",
                      en: "组件曝光",
                      params: { ump_code: t, component: "free_shipping_list" },
                    }));
              },
              "order.items": function (e, t) {
                JSON.stringify(e) !== JSON.stringify(t) &&
                  (this.timelyLimit = l(
                    e.map((e) => ({
                      quota: e.quotaNum,
                      price: e.payPrice,
                      quotaUsed: e.buyedNum,
                      stockNum: e.stockNum,
                      goodsId: e.goodsId,
                      skuId: e.skuId,
                      postageToolNum: 0,
                    }))
                  ));
              },
            },
            created() {
              Object(r.b)(this, ["order", "state", "postageModel"]),
                Object(r.d)(this, {
                  "submit:act": this.onBuyClicked,
                  "postagetool:show": this.showPopup,
                  "postagetool:limitInfo": this.quantityFromConfirm,
                });
            },
            methods: {
              fetch() {
                var {
                    appType: e,
                    promotionId: t,
                    promotionAlias: s,
                    meetInfo: { fetchGoodsRange: a },
                  } = this.postageModel,
                  { seller: r } = this.order || {};
                this.loading = !0;
                var l = {
                  searchScene: "order_postage_page",
                  orderType: "asc",
                  orderBy: 1,
                };
                if (a) {
                  var [n, h] = a;
                  l = Object(o.a)({}, l, { minPrice: n, maxPrice: h });
                }
                var [g] = this.ctx.process.invoke(
                  "getAddsOnePageDetail",
                  Object(o.a)(
                    {
                      appType: e,
                      activityId: t,
                      kdtId: r.kdtId,
                      alias: s,
                      withGoodsInfo: !0,
                      storeId: this.ctx.data.offlineId,
                      pageNo: this.pageNo,
                      pageSize: 10,
                    },
                    l
                  )
                );
                g.then((e) => {
                  var { goodsList: t, totalSize: s, activityCommInfo: o } = e,
                    a = [],
                    r = this.list.length,
                    { stage: l } = o;
                  if (l !== c.a.start)
                    return (
                      i.a.fail("活动未在有效期内"),
                      void setTimeout(() => {
                        this.onClose();
                      }, 2e3)
                    );
                  t.forEach((e, t) => {
                    (e.bannerId = ((e, t) =>
                      e +
                      "~free_shipping_list~" +
                      (t + 1) +
                      "~" +
                      Object(d.a)(8))(this.ctx.logger.getPageSpm(), t + r)),
                      a.push({
                        banner_id: e.bannerId,
                        goods_id: e.id,
                        component: "free_shipping_list",
                      });
                  }),
                    (this.list = this.list.concat(t)),
                    (this.finished = 10 * this.pageNo >= s),
                    this.ctx.logger &&
                      this.ctx.logger.log({
                        et: "view",
                        ei: "goods_view",
                        en: "商品曝光",
                        params: {
                          view_objs: a,
                          component: "free_shipping_list",
                        },
                      });
                }).finally(() => {
                  this.loading = !1;
                });
              },
              calcMeetInfo() {
                var { config: e = {} } = this.postageModel,
                  { calcDowngrade: t } = e,
                  s = Object.values(this.selectedSkus).reduce(
                    (e, t) => Object(o.a)({}, e, { [t.skuId]: t }),
                    {}
                  );
                this.ctx.process.invoke("calcPostage", {
                  skus: s,
                  isBackend: !t,
                });
              },
              getPropertiesIds(e) {
                void 0 === e && (e = {});
                var t = [];
                return (
                  Object.values(e).forEach((e) => {
                    t = [...t, ...e];
                  }),
                  t
                );
              },
              getItemData() {
                var { order: e = {} } = this,
                  { seller: t } = e;
                return { kdtId: t.kdtId, storeId: t.storeId };
              },
              onBuyClicked(e) {
                if ("postageTool" === e.module) {
                  this.ctx.event.emit("sku:afterSubmit");
                  var { skuData: t = {}, pluginsResult: s = {} } = e,
                    {
                      selectedSkuComb: i,
                      goodsId: a,
                      selectedNum: r,
                      cartMessages: c,
                    } = t,
                    d = Object(o.a)(
                      {
                        num: r,
                        skuId: i.id,
                        propertyIds: this.getPropertiesIds(s.goodsAttributes),
                        itemMessage: JSON.stringify(c),
                        goodsId: a,
                        itemId: a,
                        selectedSkuInfo: Object(o.a)({}, i),
                        price: i.price,
                      },
                      this.getItemData()
                    );
                  (this.selectedSkus = Object(o.a)({}, this.selectedSkus, {
                    [a]: d,
                  })),
                    this.calcMeetInfo();
                }
              },
              onCardChange(e) {
                var t = Object(o.a)({}, this.selectedSkus);
                0 === e.num
                  ? (delete t[e.goodsId], (this.selectedSkus = t))
                  : (this.selectedSkus = Object(o.a)({}, t, {
                      [e.goodsId]: e,
                    })),
                  this.calcMeetInfo();
              },
              submit() {
                var { selectedSkus: e, list: t, postageModel: s } = this;
                if (t.length && Object.keys(e).length) {
                  var [o] = this.ctx.process.invoke("modifyCacheOrder", {
                    skus: Object.values(this.selectedSkus),
                  });
                  o
                    .then(() => {
                      (this.show = !1),
                        this.ctx.process.invoke("savePostageTool", () => {
                          this.ctx.process.invoke("confirmOrder");
                        });
                    })
                    .catch((e) => {
                      Object(a.b)(e, { message: "系统繁忙，请稍后重试" });
                    }),
                    this.ctx.logger &&
                      this.ctx.logger.log({
                        et: "custom",
                        ei: "bulk_buy",
                        en: "点击批量购买",
                        params: {
                          activity_type: s.appType,
                          goods_id_list: Object.keys(e),
                          component: "free_shipping_list",
                        },
                      });
                } else this.onClose();
              },
              showPopup() {
                this.show = !0;
              },
              onClose() {
                var { selectedSkus: e } = this;
                (this.show = !1),
                  Object.keys(e).length &&
                    (this.ctx.process.invoke("resetPostageTool"),
                    this.ctx.process.invoke("confirmOrder")),
                  (this.selectedSkus = {}),
                  (this.pageNo = 1),
                  this.ctx.logger &&
                    this.ctx.logger.log({
                      et: "click",
                      ei: "close_components",
                      en: "关闭组件",
                      params: { component: "free_shipping_list" },
                    });
              },
              onLoad() {
                (this.pageNo += 1), this.fetch();
              },
              quantityFromConfirm(e) {
                this.timelyLimit = l(e);
              },
            },
            ud: !0,
          },
          h = s("9ZMt");
        t.default = h.default.component(n);
      },
    }
  )
);
