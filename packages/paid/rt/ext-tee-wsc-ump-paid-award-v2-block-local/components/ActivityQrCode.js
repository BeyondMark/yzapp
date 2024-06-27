"use strict";
var r = require("~/r");
r(
  "o9iq",
  Object.assign({}, require("~/v.js").modules, {
    o9iq: function (e, i, t) {
      t.r(i);
      var r = t("KEq0"),
        o = t.n(r),
        a = {
          props: {
            paidPromotion: { type: Object, defalut: {} },
            navigateTo: Function,
          },
          computed: {
            qrCodeTipImage() {
              var e =
                1 === this.paidPromotion.activityQrCodeType
                  ? "upload_files/2022/11/08/Frl1eI2EBA52caHM8RZuAljlvaWb.png"
                  : "upload_files/2022/11/08/FkzV40589u5fmr_6IWOB_6MN9qvS.png";
              return o()(e, "middle");
            },
            isDefaultImage() {
              return 1 == +this.paidPromotion.activitiesQrImageType;
            },
          },
          ud: !0,
        },
        u = t("9ZMt");
      i.default = u.default.component(a);
    },
  })
);
