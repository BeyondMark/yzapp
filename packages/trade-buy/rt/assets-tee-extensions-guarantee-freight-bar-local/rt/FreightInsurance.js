"use strict";
var r = require("~/r");
r(
  "YioQ",
  Object.assign({}, require("~/v.js").modules, {
    YioQ: function (e, t, i) {
      i.r(t);
      var o = i("9ZMt"),
        a = {
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
                ? o.default.navigate({ url: e, type: "navigateTo" })
                : (this.showPopup = !0);
            },
            onClose() {
              this.showPopup = !1;
            },
          },
          ud: !0,
        };
      t.default = o.default.component(a);
    },
  })
);
