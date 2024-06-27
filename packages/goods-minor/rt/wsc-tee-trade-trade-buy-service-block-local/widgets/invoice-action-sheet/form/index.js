"use strict";
var r = require("~/r");
r(
  "Y6R8",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "+dBL": function (e, i, t) {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.default = void 0);
        var n = function (e) {
          return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
            e
          );
        };
        (i.default = n), (e.exports = i.default);
      },
      Y6R8: function (e, i, t) {
        t.r(i);
        var n = t("Fcif"),
          F = t("AGZf"),
          u = t("+dBL"),
          a = t.n(u),
          o = t("7m36"),
          r = {
            props: {
              disabled: Boolean,
              text: String,
              isElectronic: Boolean,
              invoice: Object,
              goods: Object,
              invoiceLimitType: String,
              invoiceDetailTypeSwitch: [String, Number],
              themeColors: { type: Object, default: () => ({}) },
            },
            data() {
              return {
                internalInvoice: JSON.parse(JSON.stringify(this.invoice || {})),
              };
            },
            computed: {
              raiseType() {
                return ((this.internalInvoice || {}).common || {}).raiseType;
              },
              invoiceType() {
                return (this.internalInvoice || {}).invoiceType;
              },
            },
            watch: {
              invoice(e) {
                this.internalInvoice = JSON.parse(JSON.stringify(e));
              },
            },
            mounted() {
              this.invoiceLimitType === o.a.invoiceLimitType.vat &&
                (this.internalInvoice = Object(n.a)({}, this.internalInvoice, {
                  invoiceType: o.a.invoiceType.vat,
                }));
            },
            methods: {
              onOpenInvoiceTips() {
                this.$emit("open-invoice-tips");
              },
              openInvalidGoodMessage() {
                this.$emit("open-goods-message");
              },
              modifyCommon(e) {
                this.internalInvoice.common.raiseType = e.raiseType;
              },
              modifyInvoiceType(e) {
                1 !== e &&
                  (this.internalInvoice.common.raiseType = "enterprise"),
                  (this.internalInvoice.invoiceType = e);
              },
              modifyEnterprise(e) {
                void 0 === e && (e = {}),
                  (this.internalInvoice = Object(n.a)(
                    {},
                    this.internalInvoice,
                    {
                      enterprise: Object(n.a)(
                        {},
                        this.internalInvoice.enterprise,
                        e
                      ),
                    }
                  ));
              },
              modifyPersonal(e) {
                Object.assign(this.internalInvoice.personal, e);
              },
              modifyMessage(e) {
                void 0 !== e.emailList &&
                  (this.internalInvoice.common.emailList = e.emailList);
              },
              getInvoiceData() {
                var { internalInvoice: e = {} } = this,
                  { raiseType: i } = this,
                  t = e[i];
                return (e.submit = Object(n.a)({}, e.common, t)), e;
              },
              validateSubmitData(e) {
                var i,
                  {
                    raiseType: t = "",
                    userName: n = "",
                    emailList: u = "",
                    taxpayerId: r = "",
                    address: s = "",
                    phone: c = "",
                    openingBankName: v = "",
                    bankAccount: d = "",
                  } = e.submit,
                  p = (e, i) => {
                    var t = "企业电话" === i ? 30 : 100;
                    return e.length <= 1
                      ? i + "字数必须大于1"
                      : e.length > t
                      ? i + "不能超过" + t + "个字"
                      : "";
                  },
                  l = [p(n, "发票抬头")];
                t === o.a.raiseType.enterprise &&
                  (l.push(
                    (i = r).length <= 1
                      ? "企业税号字数必须大于1"
                      : /^[A-Z0-9]+$/.test(i)
                      ? /^(.{15}|.{17}|.{18}|.{20})$/.test(i)
                        ? ""
                        : "企业税号只能是15位、17位、18位或者20位"
                      : "企业税号只能是数字或者大写字母"
                  ),
                  2 === e.invoiceType &&
                    (l = l.concat([
                      p(c, "企业电话"),
                      p(s, "企业地址"),
                      p(s + c, "企业电话 + 企业地址"),
                      p(d, "银行帐号"),
                      p(v, "开户银行"),
                      p(v + d, "银行帐号 + 开户银行"),
                    ]))),
                  l.push(
                    ((e) =>
                      a()(e) &&
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(e)
                        ? ""
                        : "请输入正确的邮箱")(u)
                  );
                var m = l.filter((e) => e)[0] || "";
                return (
                  m &&
                    Object(F.a)({
                      message: m,
                      ref: this.$refs["new-invoice-toast"],
                    }),
                  !m
                );
              },
            },
          },
          s = t("9ZMt");
        i.default = s.default.component(r);
      },
    }
  )
);
