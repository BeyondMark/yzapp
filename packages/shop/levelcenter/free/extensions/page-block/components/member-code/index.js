"use strict";
var r = require("~/r");
r(
  "NEdH",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    NEdH: function (e, r, t) {
      t.r(r);
      var s = t("rqVN"),
        o = getApp();
      Object(s.b)({
        data: { userInfo: {} },
        properties: {
          isShow: Boolean,
          barCode: String,
          identityNo: String,
          qrCode: String,
          qrCodeExpired: Boolean,
          level: Number,
          memberCodeRefreshInterval: Number,
        },
        methods: {
          handleCloseClick() {
            this.triggerEvent("closeCodeDialog");
          },
          handleClickRecall() {
            this.triggerEvent("recall");
          },
          getUserInfo() {
            var e = o.getUserInfoSync() || {};
            this.setYZData({ userInfo: e });
          },
        },
        watch: {
          isShow(e) {
            e && this.getUserInfo();
          },
        },
        attached() {
          this.getUserInfo();
        },
      });
    },
  })
);
