"use strict";
var r = require("~/r");
r(
  "Yb0s",
  Object.assign({}, require("~/v.js").modules, {
    Yb0s: function (e, t, a) {
      a.r(t);
      var i = a("9ZMt"),
        o = {
          props: {
            themeColors: Object,
            orderPageConfig: Object,
            detailPageConfig: { type: Object, default: () => {} },
            isOrderPage: Boolean,
            content: String,
            isChoosedCard: Boolean,
            padding: null,
            defaultVisible: Boolean,
            isDirty: Boolean,
            freightInsurance: Object,
          },
          data: () => ({ showPopup: !1 }),
          methods: {
            showDetail() {
              this.ctx.logger &&
                this.ctx.logger.log({
                  et: "click",
                  ei: "click_freight_insurance",
                  en: "点击退货包运费",
                  params: {
                    hide_guarantee: this.orderPageConfig.hideYzGuarantee,
                  },
                });
              var e = this.detailPageConfig && this.detailPageConfig.url;
              e
                ? i.default.navigate({ url: e, type: "navigateTo" })
                : (this.showPopup = !0);
            },
            onClose() {
              this.showPopup = !1;
            },
          },
          ud: !0,
        };
      t.default = i.default.component(o);
    },
  })
);
