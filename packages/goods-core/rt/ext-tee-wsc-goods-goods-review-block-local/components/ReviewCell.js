"use strict";
var r = require("~/r");
r(
  "SOdg",
  Object.assign({}, require("~/v.js").modules, {
    SOdg: function (t, e, a) {
      a.r(e);
      var i = a("Fcif"),
        r = a("ONqW"),
        s = a("YeA1"),
        u = {
          props: {
            alias: String,
            kdtId: Number,
            count: { type: Number, default: 0 },
            rate: { type: Number, default: 0 },
            listParams: { type: Object, default: () => ({}) },
          },
          computed: {
            cellValue() {
              return this.count > 0
                ? this.rate > 0
                  ? "好评率：" + this.rate + "%"
                  : "查看全部"
                : "暂无评价";
            },
            cellTitle() {
              return (
                "商品评价" + (this.count > 0 ? " (" + this.count + ")" : "")
              );
            },
            showLink() {
              return this.count > 0;
            },
          },
          methods: {
            toEvaluationList() {
              if (
                (Object(r.a)().log({
                  et: "click",
                  ei: "customer_reviews",
                  en: "点击评价",
                }),
                0 !== this.count)
              ) {
                var { alias: t, kdtId: e } = this,
                  a = Object(i.a)({}, this.listParams, {
                    showSummaryTag: !0,
                    kdtId: e,
                    alias: t,
                  });
                Object(s.a)().dmc.navigate("GoodsEvaluationList", a);
              }
            },
          },
          ud: !0,
        },
        c = a("9ZMt");
      e.default = c.default.component(u);
    },
  })
);
