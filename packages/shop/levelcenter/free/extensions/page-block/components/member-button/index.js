"use strict";
var r = require("~/r");
r(
  "9N3Q",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "9N3Q": function (e, r, t) {
      t.r(r);
      var i = t("rqVN"),
        o = getApp();
      Object(i.b)({
        properties: {
          bizDataMap: { type: Object, value: {} },
          neededMoreStoreBalance: Boolean,
        },
        methods: {
          handleButtonConfirm() {
            o.logger &&
              o.logger.log({
                et: "click",
                ei: "click_fill",
                en: "入会按钮点击",
              }),
              this.triggerEvent("confirm");
          },
        },
        attached() {
          o.logger &&
            o.logger.log({
              et: "view",
              ei: "view_fill_button",
              en: "入会按钮曝光",
            });
        },
      });
    },
  })
);
