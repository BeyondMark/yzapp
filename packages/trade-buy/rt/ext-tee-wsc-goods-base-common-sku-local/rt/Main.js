"use strict";
var r = require("~/r");
r(
  "1Kcb",
  Object.assign({}, require("~/v.js").modules, {
    "1Kcb": function (t, e, o) {
      o.r(e);
      var s = o("Fcif"),
        i = o("YeA1"),
        n = {
          mixins: [o("VNnE").a],
          data: () => ({ show: !1, skuInfo: {}, selectedSkuComb: {} }),
          watch: {
            show(t) {
              t || this.ctx.event.emit("sku:hide");
            },
          },
          created() {
            Object(i.e)(this, { setSkuInfo: this.setSkuInfo }),
              Object(i.d)(this, { afterSkuSubmit: this.afterSkuSubmit });
          },
          methods: {
            onClose() {
              this.show = !1;
            },
            onPreview(t) {
              this.ctx.event.emit("sku:preview", t);
            },
            onSubmit(t) {
              this.ctx.event.emit("sku:submit", t);
            },
            onSelected(t) {
              (this.selectedSkuComb = t.selectedSkuComb),
                this.ctx.event.emit("sku:selected", t);
            },
            onOpened() {
              this.ctx.event.emit("sku:opened");
            },
            onCustom(t) {
              this.ctx.event.emit("sku:custom", t);
            },
            setSkuInfo(t) {
              var {
                  customStyle: e = "",
                  goods: o = {},
                  sku: i = {},
                  skuConfig: n = {},
                  event: u = {},
                  themeTag: a = { plain: !1 },
                  pointsConfig: d = {},
                  messageConfig: c = {},
                  baseConfig: m = {},
                  initialSku: h = {},
                  goodsAttributes: r = { show: !1 },
                } = t || {},
                k =
                  (null == t ? void 0 : t.kdtId) || Number(this.ctx.data.kdtId),
                { price: f, skuId: p, id: b } = this.selectedSkuComb || {},
                { skuId: S, noneSku: g, itemSalePropList: l = [] } = i || {},
                { activityName: v } = u,
                { id: I, propertyIds: C } = o,
                w = Object(s.a)({}, r, {
                  kdtId: k,
                  show: !!l.length,
                  goodsAttributes: l,
                  skuId: p || S || b,
                  activityName: v,
                  goodsId: I,
                  propertyIds: C,
                  price:
                    g && "string" == typeof f
                      ? Math.round(parseFloat(100 * f)) || 0
                      : f || 0,
                }),
                x = e;
              (x +=
                "bottom: " +
                this.popupBottom +
                "px; " +
                (this.safeBottom ? "padding-bottom: 34px;" : "")),
                (this.skuInfo = {
                  kdtId: k,
                  customStyle: x,
                  goods: o,
                  sku: i,
                  skuConfig: n,
                  event: u,
                  themeTag: a,
                  pointsConfig: d,
                  messageConfig: c,
                  baseConfig: m,
                  initialSku: h,
                  goodsAttributes: w,
                }),
                (this.show = !0);
            },
            afterSkuSubmit() {
              this.clearData();
            },
            clearData() {
              (this.show = !1),
                (this.skuInfo = {}),
                (this.selectedSkuComb = {});
            },
          },
          ud: !0,
        },
        u = o("9ZMt");
      e.default = u.default.component(n);
    },
    VNnE: function (t, e, o) {
      var s = getApp();
      e.a = {
        data: function () {
          return {
            popupBottom: 0,
            noSafeBottom: 0,
            safeBottom: "iPhone-X" === s.deviceType,
          };
        },
        beforeMount: function () {
          var t = this;
          s.isSwitchTab().then(function (e) {
            e &&
              ((t.popupBottom = 49), (t.noSafeBottom = t.safeBottom ? 83 : 49));
          });
        },
      };
    },
  })
);
