"use strict";
var r = require("~/r");
r(
  "2Uyi",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "2Uyi": function (e, t, a) {
      a.r(t);
      var s = a("Fcif"),
        i = a("rqVN"),
        r = a("KQ2A"),
        d = a("aOlM"),
        o = a("8B9M"),
        u = Object(o.a)();
      Object(i.b)({
        properties: {
          themeClass: String,
          featureSkuData: { type: Object, observer: "observeData" },
        },
        data: { extra: {}, show: !1 },
        ready() {
          this.debouncedCalcPrice = Object(d.a)((e) => {
            Object(r.b)({
              kdtId: u.getKdtId(),
              itemId: this.properties.featureSkuData.skuGoodsDetail.id,
              skuId: e.id,
              itemSalePropList: e.properties,
            })
              .then((e) => {
                e &&
                  void 0 !== e.umpTotalPrice &&
                  this.setYZData({
                    "extra.displayPrice": (e.umpTotalPrice / 100).toFixed(2),
                  });
              })
              .catch((e) => {});
          }, 500);
        },
        methods: {
          observeData(e) {
            e &&
              (this.setYZData({
                extra: Object(s.a)({}, this.data.extra, e.extraData),
              }),
              e.showGoodsSku
                ? this.setYZData({ show: !0 })
                : setTimeout(() => {
                    this.setYZData({ show: !1 });
                  }, 500));
          },
          updatePropPrice(e) {
            var { selectedSkuComb: t } = e,
              { itemSalePropList: a } = this.properties.featureSkuData;
            a.length && t
              ? this.debouncedCalcPrice(t)
              : this.setYZData({ "extra.displayPrice": "" });
          },
          handleSkuSelect(e) {
            this.updatePropPrice(e.detail);
          },
          handlePropSelect(e) {
            this.updatePropPrice(e.detail);
          },
          handleBuy(e) {
            Object(r.d)(this.getPassData(e.detail, !0));
          },
          handleAddCart(e) {
            Object(r.a)(this.getPassData(e.detail), this.getLogParams(e.detail))
              .then(() => {
                if (u.getYouZanYunSdk) {
                  var t = getCurrentPages(),
                    a = "/" + t[t.length - 1].route;
                  u.getYouZanYunSdk().app.trigger("beforeAddCart", {
                    skuId: e.detail.skuId,
                    title: this.__preData.featureSkuData.skuGoodsDetail.title,
                    id: e.detail.goodsId,
                    selectedNum: e.detail.num,
                    pageUrl: a,
                  });
                }
                this.triggerEvent("close"),
                  u.trigger("component:sku:cart", { type: "add" });
              })
              .catch((e) => {
                var { msg: t } = e;
                wx.showToast({ title: t, icon: "none" });
              });
          },
          handleSkuClose() {
            this.triggerEvent("close");
          },
          getPropertyIds: (e) =>
            e
              ? (e.properties || []).reduce(
                  (e, t) => e.concat((t.v || []).map((e) => e.id)),
                  []
                )
              : [],
          getLogParams(e) {
            var { num: t, goodsId: a, skuId: s, selectedSkuValues: i = [] } = e,
              { featureSkuData: { skuGoodsDetail: { title: r } = {} } = {} } =
                this.data;
            return {
              params: {
                num: t,
                goods_id: a,
                goods_name: r,
                sku_id: s,
                sku_name: i,
                no_sku: i.length ? 0 : 1,
              },
            };
          },
          getPassData(e, t) {
            var { sku: a = {} } = this.properties.featureSkuData,
              { itemDataModel: i = {} } = a,
              r = e.selectedSkuComb.id,
              { birthdayInfo: d = {} } = e,
              o = { activityType: 0, activityId: 0, activityAlias: "" };
            if (t) {
              var c,
                {
                  activityType: l,
                  activitySkuIds: n,
                  activityId: p,
                  activityAlias: h,
                  noneSku: g,
                } = (null == (c = a.itemActivitySpuModels) ? void 0 : c[0]) ||
                {};
              6 === l &&
                (g || (null != n && n.includes(r))) &&
                (o = { activityType: l, activityId: p, activityAlias: h });
            }
            return Object(s.a)(
              {
                couponId: e.couponId,
                goodsId: e.goodsId,
                messages: e.messages,
                cartMessages: e.cartMessages,
                num: e.selectedNum,
                price: e.price,
                skuId: r,
                kdtId: u.getKdtId(),
                propertyIds: this.getPropertyIds(e.selectedSkuComb),
                itemDataModel: i,
                birthdayInfo: d,
              },
              o
            );
          },
        },
      });
    },
  })
);
