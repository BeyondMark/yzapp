"use strict";
var r = require("~/r");
r(
  "devj",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      devj: function (e, i, t) {
        t.r(i);
        var r = t("AGZf"),
          s = t("7m36"),
          a = t("aOlM"),
          n = t("taYb"),
          o = t("7Hse"),
          p = {
            props: {
              invoice: Object,
              raiseType: String,
              invoiceType: Number,
              invoiceLimitType: String,
              themeColors: { type: Object, default: () => ({}) },
            },
            data: () => ({
              showCorpTips: !1,
              corpList: [],
              enterpriseList: [
                {
                  label: "企业税号",
                  key: "taxpayerId",
                  placeholder: "请输入企业税号",
                },
                {
                  label: "开户银行",
                  key: "openingBankName",
                  placeholder: "请输入开户银行",
                },
                {
                  label: "银行帐号",
                  key: "bankAccount",
                  placeholder: "请输入银行帐号",
                },
                {
                  label: "企业地址",
                  key: "address",
                  placeholder: "请输入企业地址",
                },
                {
                  label: "企业电话",
                  key: "phone",
                  placeholder: "请输入企业电话",
                },
              ],
            }),
            computed: {
              userName() {
                var { raiseType: e } = this,
                  { invoice: i } = this;
                return (i[e] || {}).userName || "";
              },
              isEnterpriseType() {
                return "enterprise" === this.raiseType;
              },
              isNormalType() {
                return this.invoiceType === s.a.invoiceType.normal;
              },
              isVatType() {
                return this.invoiceType === s.a.invoiceType.vat;
              },
              isShowNormalInvoice() {
                var { normal: e, both: i } = s.a.invoiceLimitType;
                return (
                  this.invoiceLimitType === e || this.invoiceLimitType === i
                );
              },
              isShowVatInvoice() {
                var { vat: e, both: i } = s.a.invoiceLimitType;
                return (
                  this.invoiceLimitType === e || this.invoiceLimitType === i
                );
              },
            },
            methods: {
              cellDropdownBlur() {},
              onOpenInvoiceTips() {
                this.$emit("open-invoice-tips");
              },
              modifyRaiseType(e) {
                this.$emit("assign-invoice-common", { raiseType: e });
              },
              modifyInvoiceType(e) {
                this.$emit("assign-invoice-type", e);
              },
              modifyEnterprise(e) {
                this.$emit("assign-invoice-enterprise", e);
              },
              modifyPersonal(e) {
                this.$emit("assign-invoice-personal", e),
                  this.modifyInvoiceType(s.a.invoiceType.normal);
              },
              onUserNameInput(e) {
                var { value: i } = e;
                "enterprise" === this.raiseType
                  ? (this.$emit("assign-invoice-enterprise", { userName: i }),
                    this.getEnterpriseListByName())
                  : this.$emit("assign-invoice-personal", { userName: i });
              },
              getEnterpriseListByName: Object(a.a)(function () {
                var { invoice: e, raiseType: i } = this,
                  t = () => {
                    this.corpList = [];
                  };
                if (!e[i].userName) return t();
                Object(o.b)({ corpName: e[i].userName })
                  .then((e) => {
                    e = n.a.toCamelCase(e);
                    var i = [];
                    Array.isArray(e) && (i = e || []), (this.corpList = i);
                  })
                  .catch(() => {
                    t();
                  });
              }, 200),
              getEnterpriseTaxNumById(e) {
                var i = () => {
                  Object(r.a)("公司税号获取失败，请稍后重试"),
                    this.$emit("assign-invoice-enterprise", { taxpayerId: "" });
                };
                if (!e) return i();
                Object(o.a)({ companyId: e })
                  .then((e) => {
                    if (
                      !(e = n.a.toCamelCase(e)).creditCode ||
                      "- -" === e.creditCode
                    )
                      throw e;
                    this.$emit("assign-invoice-enterprise", {
                      taxpayerId: e.creditCode,
                    });
                  })
                  .catch(() => {
                    i();
                  });
              },
              onUserNameSelect(e) {
                if (e) {
                  var { id: i = "", name: t = "" } = e;
                  setTimeout(() => {
                    this.$emit("assign-invoice-enterprise", { userName: t }),
                      i && this.getEnterpriseTaxNumById(i);
                  }, 300);
                }
              },
              onUserNameFocus() {
                "enterprise" === this.raiseType && (this.showCorpTips = !0);
              },
              onUserNameClose() {
                "enterprise" === this.raiseType && (this.showCorpTips = !1);
              },
              onChangeEnterPrise(e, i) {
                var t, r;
                (r = null == i || null == (t = i.detail) ? void 0 : t.value),
                  this.$emit("assign-invoice-enterprise", { [e]: r });
              },
            },
            ud: !0,
          },
          c = t("9ZMt");
        i.default = c.default.component(p);
      },
    }
  )
);
