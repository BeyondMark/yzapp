"use strict";
var r = require("~/r");
r(
  "PAod",
  Object.assign({}, require("~/v.js").modules, {
    PAod: function (e, n, t) {
      t.r(n);
      var a = t("YeA1"),
        r = {
          props: { yzGuaranteeEnsureMt: Number },
          data: () => ({
            yzGuarantee: !1,
            itemList: [],
            icons: {
              deposit_paid:
                "https://b.yzcdn.cn/guarantee/gray/deposit_paid@3x.png",
              freight_insurance:
                "https://b.yzcdn.cn/guarantee/gray/freight_insurance@3x.png",
              free_pickup_return:
                "https://b.yzcdn.cn/guarantee/gray/free_pickup_return@3x.png",
              inferior_prod_return:
                "https://b.yzcdn.cn/guarantee/gray/inferior_prod_return@3x.png",
              overdue_return:
                "https://b.yzcdn.cn/guarantee/gray/overdue_return@3x.png",
              principal_cert_type:
                "https://b.yzcdn.cn/guarantee/gray/principal_cert_type@3x.png",
              persional_customer_service:
                "https://b.yzcdn.cn/guarantee/gray/persional_customer_service@3x.png",
              quality_guarantee:
                "https://b.yzcdn.cn/guarantee/gray/quality_guarantee@3x.png",
              priority_claims:
                "https://b.yzcdn.cn/guarantee/gray/priority_claims@3x.png",
              support_unconditional_return:
                "https://b.yzcdn.cn/guarantee/gray/support_unconditional_return@3x.png",
              quality_guarantee_satisfy:
                "https://b.yzcdn.cn/guarantee/gray/quality_guarantee@3x.png",
              quality_guarantee_unsatisfy:
                "https://b.yzcdn.cn/guarantee/gray/quality_guarantee@3x.png",
              after_sale_worry_free_satisfy:
                "https://b.yzcdn.cn/guarantee/gray/persional_customer_service@3x.png",
              after_sale_worry_free_unsatisfy:
                "https://b.yzcdn.cn/guarantee/gray/persional_customer_service@3x.png",
              damage_subsidy:
                "https://b.yzcdn.cn/guarantee/gray/overdue_return@3x.png",
              auto_delivery:
                "https://img01.yzcdn.cn/upload_files/2022/11/25/FuatP7Jo1fM_hs5EqJAAChIwiUus.png",
              can_refund:
                "https://img01.yzcdn.cn/upload_files/2022/11/25/Fioxb3dS6JZLn9-n_FGk2nPXwo9N.png",
              any_time_refund:
                "https://img01.yzcdn.cn/upload_files/2022/11/25/Fioxb3dS6JZLn9-n_FGk2nPXwo9N.png",
              merchant_quality_not_verified:
                "https://b.yzcdn.cn/guarantee/gray/quality_guarantee@3x.png",
              merchant_quality_verified:
                "https://b.yzcdn.cn/guarantee/gray/quality_guarantee@3x.png",
            },
            hideYzGuarantee: !1,
            logoAddYouzan: !1,
            guaranteeIcons: {},
          }),
          computed: {
            mt() {
              return this.yzGuaranteeEnsureMt
                ? this.yzGuaranteeEnsureMt + "px"
                : 0;
            },
            logo: () => "//b.yzcdn.cn/security/fangxin-green.svg",
          },
          created() {
            Object(a.b)(this, ["yzGuarantee", "yzGuaranteeDocs"]),
              (this.unwatchInfo = this.ctx.watch("yzGuaranteeInfo", (e) => {
                var n;
                (this.itemList =
                  (null == e || null == (n = e.mainSupportContent)
                    ? void 0
                    : n.slice(0, 4)) || []),
                  (this.hideYzGuarantee =
                    null == e ? void 0 : e.hideYzGuarantee);
              })),
              (this.unwatchDocs = this.ctx.watch("yzGuaranteeDocs", (e) => {
                var n;
                this.guaranteeIcons =
                  (null == e || null == (n = e.icon) ? void 0 : n.gray) ||
                  this.icons;
              }));
          },
          destroyed() {
            this.unwatchInfo && this.unwatchInfo(),
              this.unwatchDocs && this.unwatchDocs();
          },
          ud: !0,
        },
        u = t("9ZMt");
      n.default = u.default.component(r);
    },
  })
);
