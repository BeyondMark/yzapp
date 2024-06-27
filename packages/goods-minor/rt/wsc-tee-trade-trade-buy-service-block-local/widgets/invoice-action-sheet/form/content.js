"use strict";
var r = require("~/r");
r(
  "Kq2H",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      Kq2H: function (e, i, t) {
        t.r(i);
        var a = t("7m36"),
          s = {
            [a.a.invoiceDetailType.itemDetail]: "发票内容将显示详细商品名称",
            [a.a.invoiceDetailType.itemCategory]:
              "发票内容将显示商品相关类别名称",
          },
          r = {
            props: {
              invoice: Object,
              raiseType: String,
              invoiceDetailTypeSwitch: { type: Number, default: 11 },
            },
            data: () => ({ desc: s }),
            computed: {
              tags() {
                var { invoiceDetailTypeSwitch: e } = this;
                return [
                  {
                    label: "商品明细",
                    value: a.a.invoiceDetailType.itemDetail,
                    disabled: !(-1 !== [10, 11].indexOf(e)),
                  },
                  {
                    label: "商品类别",
                    value: a.a.invoiceDetailType.itemCategory,
                    disabled: !(-1 !== [1, 11].indexOf(e)),
                  },
                ];
              },
              invoiceDetailType() {
                var { raiseType: e } = this,
                  { invoice: i } = this;
                return (i[e] || {}).invoiceDetailType || "";
              },
              filteredTags() {
                return this.tags.filter((e) => !e.disabled);
              },
            },
            watch: {
              filteredTags(e) {
                if (1 === e.length) {
                  var i = e[0].value;
                  i &&
                    (this.$emit("assign-invoice-enterprise", {
                      invoiceDetailType: i,
                    }),
                    this.$emit("assign-invoice-personal", {
                      invoiceDetailType: i,
                    }));
                }
              },
            },
            methods: {
              checkTag(e) {
                var { value: i } = e,
                  { raiseType: t } = this;
                "enterprise" === t
                  ? this.$emit("assign-invoice-enterprise", {
                      invoiceDetailType: i,
                    })
                  : this.$emit("assign-invoice-personal", {
                      invoiceDetailType: i,
                    });
              },
            },
            ud: !0,
          },
          n = t("9ZMt");
        i.default = n.default.component(r);
      },
    }
  )
);
