"use strict";
var r = require("~/r");
r(
  "doBv",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      doBv: function (t, e, s) {
        s.r(e);
        var i = s("Fcif"),
          r = s("AGZf"),
          o = s("YeA1"),
          c = s("mztD"),
          h = s("FvJv");
        function a(t, e) {
          return (
            void 0 === e && (e = 2), t ? (Math.abs(t) / 100).toFixed(e) : ""
          );
        }
        var u = {
            props: { goodsData: Object, selectSize: Number },
            data: () => ({
              themeColors: {},
              themeCSS: "",
              showSkuStatus: !1,
              iconUrl: Object(c.a)(
                "retail/ci_start/config/2023/08/30/icon-close.png"
              ),
              plusBuy: {},
              display: {},
              checked: !1,
              exchangePrice: 0,
              originalPrice: 0,
            }),
            created() {
              Object(o.b)(this, [
                "plusBuy",
                "display",
                "order",
                "themeColors",
                "themeCSS",
                "orderCreation",
              ]),
                Object(o.d)(this, {
                  "submit:act": (t) => this.onBuyClicked(t),
                });
            },
            methods: {
              onBuyClicked(t) {
                if ("plusBuySwiper" === t.module && this.showSkuStatus) {
                  this.ctx.event.emit("sku:afterSubmit"),
                    (this.showSkuStatus = !1);
                  var { switchData: e } = Object(h.d)(
                      this,
                      Object(i.a)({}, t, { module: 24 })
                    ),
                    { exchangePrice: s, originalPrice: r } =
                      this.getCurrentPrice(e),
                    o = this.getPropPrice(e);
                  (this.exchangePrice = a(s + o)),
                    (this.originalPrice = a(r + o)),
                    this.switchGoods(e);
                }
              },
              getCurrentPrice(t) {
                return (
                  this.goodsData.exchangeSkuList.find(
                    (e) => e.skuId === t.skuId
                  ) || {}
                );
              },
              getPropPrice(t) {
                var { propertyIds: e } = t;
                if (0 === (null == e ? void 0 : e.length)) return 0;
                var s = this.sku.itemSalePropList.map((t) => t.v).flat() || [],
                  i = 0;
                return (
                  s.forEach((t) => {
                    e.includes(t.id) && (i += t.price);
                  }),
                  parseInt(Math.round(i))
                );
              },
              onClickCard() {
                this.loading ||
                  (this.checked
                    ? this.switchGoods()
                    : !this.plusBuy.supportMulti && this.selectSize >= 1
                    ? r.a.fail("最多选一件换购商品")
                    : Object(h.c)(this).then((t) => {
                        var { sku: e, goodsAttributes: s, originSku: r } = t;
                        if (
                          ((this.goodsAttributes = s),
                          (this.originSku = r),
                          (this.sku = e),
                          !e.noneSku ||
                            (Array.isArray(e.messages) && e.messages.length) ||
                            (Array.isArray(e.itemSalePropList) &&
                              e.itemSalePropList.length))
                        )
                          (this.showSkuStatus = !0),
                            Object(h.e)(this, "plusBuySwiper");
                        else {
                          var o = Object(i.a)(
                            { num: 1, skuId: e.collectionId },
                            Object(h.b)(this)
                          );
                          this.switchGoods(o);
                        }
                      }));
              },
              switchGoods(t) {
                var { selectGoods: e } = this;
                (this.selectGoods = this.checked ? null : t),
                  (this.checked = !this.checked),
                  this.checked ||
                    ((this.exchangePrice = 0), (this.originalPrice = 0)),
                  this.update(t || e);
              },
              update(t) {
                this.$emit("update", {
                  item: this.selectGoods,
                  skuId: t.skuId,
                  goodsId: this.goodsData.goodsId,
                });
              },
              onClose() {
                this.$emit("close");
              },
            },
            ud: !0,
          },
          d = s("9ZMt");
        e.default = d.default.component(u);
      },
    }
  )
);
