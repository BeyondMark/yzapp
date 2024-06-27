"use strict";
var r = require("~/r");
r(
  "MyP8",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      MyP8: function (e, i, s) {
        s.r(i);
        var o = s("Fcif"),
          t = s("YeA1"),
          r = s("7m36"),
          a = {
            data: () => ({
              visible: !1,
              invoiceTipsVisible: !1,
              goodsInfoVisible: !1,
              display: {},
              tradeTag: {},
              prepayCardDecrease: 0,
              orderFinalPrice: 0,
              themeColors: {},
              goods: { list: [] },
              invoice: {
                themeGeneral: "",
                invoiceType: 1,
                submit: {
                  emailList: [],
                  invoiceDetailType: "",
                  raiseType: "",
                  taxpayerId: "",
                  userName: "",
                },
                common: { raiseType: "enterprise", emailList: [] },
                enterprise: {
                  userName: "",
                  taxpayerId: "",
                  bankAccount: "",
                  openingBankName: "",
                  phone: "",
                  address: "",
                  invoiceDetailType: "itemCategory",
                },
                personal: { userName: "", invoiceDetailType: "itemCategory" },
              },
            }),
            computed: {
              isElectronic() {
                var e;
                return null == (e = this.tradeTag)
                  ? void 0
                  : e.useElectronicInvoice;
              },
              warningTips() {
                var e;
                return this.prepayCardDecrease && 0 == +this.orderFinalPrice
                  ? "使用 余额/卡 支付暂不支持开具电子发票，不计入开票金额当中"
                  : ((null == (e = this.goods) ? void 0 : e.list) || []).every(
                      (e) => 10 == +e.goodsType || e.fx
                    )
                  ? "分销商品暂不支持开具电子发票，不计入开票金额当中"
                  : "";
              },
              invoiceContentType() {
                var e;
                return +(
                  (null == (e = this.display) ? void 0 : e.invoiceContent) || ""
                );
              },
              invoiceLimitType() {
                var e;
                return (
                  (null == (e = this.display) ? void 0 : e.invoiceType) || "10"
                );
              },
              invoiceGoods() {
                var e,
                  i = { hasCode: [], noCode: [] };
                return (
                  ((null == (e = this.goods) ? void 0 : e.list) || []).forEach(
                    (e) => {
                      var s = "noCode";
                      e.taxClassCode &&
                        10 != +e.goodsType &&
                        !e.fx &&
                        (s = "hasCode"),
                        i[s].push({ title: e.title });
                    }
                  ),
                  i
                );
              },
            },
            created() {
              Object(t.b)(this, [
                "tradeTag",
                "goods",
                "themeColors",
                "display",
                "prepayCardDecrease",
              ]),
                Object(t.d)(this, {
                  changeIsShowInvoicePopup: (e) => {
                    this.visible = e;
                  },
                }),
                Object(t.b)(
                  this,
                  {
                    invoice: (e) => {
                      this.invoice = JSON.parse(JSON.stringify(e));
                    },
                  },
                  { isSetData: !1 }
                );
            },
            methods: {
              closeInvoiceForm() {
                this.visible = !1;
              },
              submit() {
                var { invoiceFormRef: e } = this.$refs;
                if (e) {
                  if (this.warningTips) return void this.closeInvoiceForm();
                  var i = e.getInvoiceData();
                  if (!e.validateSubmitData(i)) return;
                  var {
                      common: s = {},
                      enterprise: t = {},
                      invoiceType: a,
                    } = i || {},
                    { raiseType: n, emailList: c } = s,
                    { userName: l, taxpayerId: p, invoiceDetailType: v } = t;
                  n === r.a.raiseType.enterprise &&
                    a === r.a.invoiceType.normal &&
                    (i = Object(o.a)({}, i, {
                      submit: {
                        emailList: c,
                        invoiceDetailType: v,
                        raiseType: n,
                        taxpayerId: p,
                        userName: l,
                      },
                      enterprise: {
                        userName: l,
                        taxpayerId: p,
                        invoiceDetailType: v,
                      },
                    })),
                    this.ctx.process.invoke("invoiceActionSubmit", i),
                    this.closeInvoiceForm();
                }
              },
              onOpenInvoiceTips() {
                this.invoiceTipsVisible = !0;
              },
              onCloseInvoiceTips() {
                this.invoiceTipsVisible = !1;
              },
              openInvalidGoodMessage() {
                this.goodsInfoVisible = !0;
              },
              closeInvalidGoodMessage() {
                this.goodsInfoVisible = !1;
              },
            },
            ud: !0,
          },
          n = s("9ZMt");
        i.default = n.default.component(a);
      },
    }
  )
);
