"use strict";
var r = require("~/r");
r(
  "Rcmm",
  Object.assign({}, require("~/v.js").modules, {
    Rcmm: function (t, e, r) {
      r.r(e);
      var o = r("Fcif"),
        s = r("mztD"),
        i = r("YeA1"),
        a = {
          data: () => ({ show: !1, goods: {}, themeColors: {} }),
          computed: {
            formattedGoods() {
              var { unavailable: t = [] } = this.goods;
              return t.map((t) =>
                Object(o.a)({}, t, {
                  url: Object(s.a)(t.img_url, "!180x180.jpg"),
                  price: parseFloat(t.price / 100, 10).toFixed(2),
                  sku: this.getSkuStr(t.sku),
                })
              );
            },
            formattedGoodsLimit() {
              return this.formattedGoods.slice(0, 3);
            },
            isEmpty() {
              var { list: t } = this.goods;
              return t && 0 === t.length;
            },
          },
          created() {
            Object(i.b)(this, ["goods", "themeColors"]);
          },
          methods: {
            getSkuStr: (t) =>
              (t = Array.isArray(t)
                ? t
                : t && "string" == typeof t
                ? JSON.parse(t)
                : [])
                .filter((t) => t.v)
                .map((t) => t.v)
                .join("；"),
            openDetail() {
              this.show = !0;
            },
            closeDetail() {
              this.show = !1;
            },
          },
          ud: !0,
        },
        d = r("9ZMt");
      e.default = d.default.component(a);
    },
  })
);
