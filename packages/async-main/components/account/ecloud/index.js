"use strict";
var r = require("~/r");
r(
  "crXY",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    crXY: function (e, r, t) {
      t.r(r);
      var i = t("z16c");
      Object(i.a)({
        properties: {
          authTypeList: { type: Array, value: [] },
          customStyle: String,
          trigger: { type: String, value: "click" },
        },
        externalClasses: ["btn-class"],
        methods: {
          handleNext(e) {
            this.triggerEvent("next", e.detail);
          },
          handleFail(e) {
            var r = e.detail;
            this.triggerEvent("fail", r);
          },
        },
      });
    },
  })
);
