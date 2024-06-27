"use strict";
var r = require("~/r");
r(
  "DGw0",
  Object.assign({}, require("~/v.js").modules, {
    DGw0: function (t, s, e) {
      e.r(s);
      var i = e("Fcif"),
        r = e("YeA1"),
        c = e("VmHG"),
        o = {
          props: { isShowYzGuarantee: Boolean },
          data() {
            return Object(i.a)(
              { titleText: "确认订单", serviceTitle: "", recordList: [] },
              Object(c.d)(this, ["selectedSkuComb"])
            );
          },
          computed: {
            carouselWrapClass() {
              return this.isShowYzGuarantee ? "move-right-block" : "";
            },
            recordListSorted() {
              return ["service", "ranking", "stock"]
                .map((t) => this.recordList.find((s) => s.class === t))
                .filter((t) => t);
            },
          },
          watch: {
            selectedSkuComb: {
              handler(t) {
                if (t) {
                  var { stockNum: s } = t;
                  s < 10 &&
                    !this.recordList.find((t) => "stock" === t.class) &&
                    (this.recordList = this.recordList.concat([
                      { content: "库存不足10件", class: "stock" },
                    ])),
                    s > 10 &&
                      (this.recordList = this.recordList.filter(
                        (t) => "stock" !== t.class
                      ));
                } else
                  this.recordList = this.recordList.filter(
                    (t) => "stock" !== t.class
                  );
              },
              immediate: !0,
            },
          },
          created() {
            Object(r.b)(
              this,
              {
                serviceDescList: (t) => {
                  var s = (t || [])
                    .filter((t) =>
                      [
                        "freightInsurance",
                        "supportQuickRefund",
                        "supportUnconditionalReturn",
                        "isExpiredAutoRefund",
                      ].includes(t.key)
                    )
                    .map((t) => t.tag)
                    .join(" · ");
                  t.includes("过期自动退") && (s = "过期自动退款"),
                    (s = s.replace("7天无理由退货", "7天无理由退"));
                  s &&
                    !this.recordList.find((t) => "service" === t.class) &&
                    (this.recordList = this.recordList.concat([
                      { content: s, class: "service" },
                    ]));
                },
              },
              { isSetData: !1 }
            ),
              Object(r.c)(this, ["ranking", "showGoodsRanking"], {
                callback: (t) => {
                  var { ranking: s, showGoodsRanking: e } = t;
                  e &&
                    !this.recordList.find((t) => "ranking" === t.class) &&
                    (this.recordList = this.recordList.concat([
                      { content: "店铺商品榜", class: "ranking", ranking: s },
                    ]));
                },
                isSetData: !1,
              });
          },
          methods: {
            onClose() {
              this.$emit("close");
            },
          },
        },
        a = e("9ZMt");
      s.default = a.default.component(o);
    },
  })
);
