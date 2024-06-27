"use strict";
var r = require("~/r");
r(
  "PgY8",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    PgY8: function (e, r, t) {
      t.r(r);
      var i = t("rqVN");
      Object(i.b)({
        properties: {
          plugins: { type: Array, value: () => [] },
          mode: { type: Number, value: 1 },
          iconMode: { type: Number, value: 1 },
          values: {
            type: Object,
            value: { cart: 0, giftsCommunityVer: 0, gifts: 0, drugList: 0 },
          },
          userAgreePrivacy: { type: Boolean, default: !1 },
          links: Object,
          isNotValid: Boolean,
        },
        methods: {
          onPluginItemClicked(e) {
            var r = e.detail;
            this.triggerEvent("pluginItemClicked", r);
          },
          handleBindGetUserInfo(e) {
            this.triggerEvent("bindGetUserInfo", e.detail);
          },
        },
      });
    },
  })
);
