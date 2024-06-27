"use strict";
var r = require("~/r");
r(
  "XK+W",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "XK+W": function (e, t, r) {
      r.r(t);
      var o = r("rqVN"),
        i = getApp();
      Object(o.b)({
        properties: {
          isShow: { type: Boolean },
          isWeixinCardEnabled: { type: Boolean, require: !0 },
          pageQuery: { type: Object, required: !0 },
          showBottomPadding: { type: Boolean },
          bizDataMap: { type: Object, value: {} },
          neededMoreStoreBalance: { type: Boolean },
        },
        data: { btnText: "立即入会" },
        methods: {
          handleButtonConfirm() {
            i.logger &&
              i.logger.log({
                et: "click",
                ei: "click_fill",
                en: "入会按钮点击",
              }),
              this.triggerEvent("bindMobile");
          },
        },
        attached() {
          i.logger &&
            i.logger.log({
              et: "view",
              ei: "view_fill_button",
              en: "入会按钮曝光",
            }),
            this.setYZData({
              btnText: this.properties.neededMoreStoreBalance
                ? "充值入会"
                : "立即入会",
            });
        },
      });
    },
  })
);
