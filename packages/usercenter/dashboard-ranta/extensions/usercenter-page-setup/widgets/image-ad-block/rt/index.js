"use strict";
var r = require("~/r");
r(
  "wMyG",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    wMyG: function (e, a, t) {
      t.r(a);
      var r = t("7/pW"),
        i = t("taYb");
      Object(r.a)({
        properties: { template: Number, images: { type: Array, value: [] } },
        data: {},
        methods: {
          handleImageClick(e) {
            var { detail: a } = e;
            a.extraData && (a.extra_data = i.a.toSnakeCase(a.extraData)),
              this.triggerEvent("jumpToLink", a);
          },
          handleImageChange(e) {
            var { detail: a } = e;
            this.triggerEvent("imageChange", a.value);
          },
          handleContactBack(e) {
            this.triggerEvent("contactback", e.detail);
          },
        },
      });
    },
  })
);
