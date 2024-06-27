"use strict";
var r = require("~/r");
r(
  "On+p",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "On+p": function (s, e, t) {
        t.r(e);
        var o = t("Fcif"),
          i = t("YeA1"),
          r = t("+CLe"),
          d = {
            props: {
              goodsData: { type: Object, default: () => ({}) },
              isOne: Boolean,
            },
            data: () => ({
              plusBuy: {},
              goods: {},
              display: {},
              order: {},
              skuExtraData: { useCustomHeaderPrice: !0 },
              checked: !1,
              sku: {},
              themeColors: {},
              themeCSS: "",
            }),
            watch: {
              plusBuy() {
                var { plusBuy: s = {}, goodsData: e = {} } = this,
                  t = (s.selected || []).find((s) => +e.goodsId == +s.goodsId);
                (this.checked = !!t), (this.preChecked = t || {});
              },
            },
            created() {
              Object(i.b)(this, [
                "plusBuy",
                "goods",
                "display",
                "order",
                "themeColors",
                "themeCSS",
              ]);
            },
            methods: {
              onClickCard() {
                this.loading ||
                  (this.checked
                    ? this.switchGoods(this.goodsData)
                    : Object(r.c)(this).then((s) => {
                        var { sku: e, goodsAttributes: t, originSku: i } = s;
                        if (
                          ((this.goodsAttributes = t),
                          (this.originSku = i),
                          (this.sku = e),
                          !e.noneSku ||
                            (Array.isArray(e.messages) && e.messages.length) ||
                            (Array.isArray(e.itemSalePropList) &&
                              e.itemSalePropList.length))
                        )
                          Object(r.e)(this);
                        else {
                          var d = Object(o.a)(
                            { num: 1, skuId: e.collectionId },
                            Object(r.b)(this)
                          );
                          this.switchGoods(d);
                        }
                      }));
              },
              showSku() {
                Object(r.e)(this);
              },
              switchGoods(s) {
                this.ctx.process.invoke("switchGoods", s);
              },
            },
            ud: !0,
          },
          a = t("9ZMt");
        e.default = a.default.component(d);
      },
    }
  )
);
