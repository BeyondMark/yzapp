"use strict";
var r = require("~/r");
r(
  "nQrm",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    nQrm: function (e, t, a) {
      a.r(t);
      var i = a("7/pW"),
        o = a("VmHG"),
        r = getApp();
      Object(i.a)({
        name: "BaseInfoBlock",
        attached() {
          Object(o.d)(this, [
            "goods",
            "shop",
            "showActivityBanner",
            "showGuaranteeBar",
            "baseInfoBarTag",
            "isWxPromise",
            "showOriginPrice",
            "salesmanActivityTags",
            "soldNumText",
            "commissionData",
            "countdown",
            "activityNotStart",
            "activityPrice",
          ]),
            Object(o.b)(this, ["countdownEnded"]);
        },
        methods: {
          guaranteeOnShow(e) {
            r.logger &&
              r.logger.log({
                et: "view",
                ei: "enterpage_goods_detail",
                en: "有赞担保曝光",
                params: { guarantee_on: null == e ? void 0 : e.detail },
                si: r.getKdtId(),
              });
          },
        },
      });
    },
  })
);
