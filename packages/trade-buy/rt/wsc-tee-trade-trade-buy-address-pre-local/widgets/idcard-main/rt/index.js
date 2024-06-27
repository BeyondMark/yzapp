"use strict";
var r = require("~/r");
r(
  "tOwL",
  Object.assign({}, require("~/v.js").modules, {
    tOwL: function (e, t, d) {
      d.r(t);
      var r = d("YeA1"),
        o = {
          props: {
            customStyle: {
              type: String,
              default:
                "padding: var(--theme-page-cell-padding-top, 10px) var(--theme-page-cell-padding-right, 12px) var(--theme-page-cell-padding-bottom, 10px) var(--theme-page-cell-padding-left, 12px)",
            },
            idcardClass: { type: String, default: "idcardInput" },
            idcardTitle: { type: String, default: "label-class" },
          },
          data: () => ({
            order: { needIdCardPhoto: !1 },
            idcard: { name: "", number: "", backPhoto: "", frontPhoto: "" },
            tradeTag: {},
            goods: { list: [] },
            showPopup: !1,
            themeColors: {},
          }),
          computed: {
            isEmpty() {
              var e, t;
              return (
                0 ===
                (null == (e = this.goods) || null == (t = e.list)
                  ? void 0
                  : t.length)
              );
            },
            idNumber() {
              var { order: e, idcard: t } = this;
              return (!e.needIdCardPhoto || (t.frontPhoto && t.backPhoto)) &&
                (t.name || t.number)
                ? t.name + " " + t.number
                : "";
            },
          },
          created() {
            Object(r.b)(this, [
              "order",
              "idcard",
              "tradeTag",
              "goods",
              "themeColors",
            ]),
              Object(r.d)(this, {
                "trade-buy-core:validate-effect": (e) => {
                  var { type: t } = e;
                  "validateIdCardAndPrompt:show" === t && this.onShow();
                },
              });
          },
          methods: {
            onShow() {
              this.showPopup = !0;
            },
            onClose() {
              this.showPopup = !1;
            },
          },
          ud: !0,
        },
        a = d("9ZMt");
      t.default = a.default.component(o);
    },
  })
);
