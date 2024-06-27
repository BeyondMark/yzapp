"use strict";
var r = require("~/r");
r(
  "yP28",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    yP28: function (e, r, t) {
      t.r(r);
      var i = t("7/pW"),
        s = t("RY8z");
      Object(i.a)({
        properties: {
          services: { type: Array, value: [] },
          mode: { type: Number, value: 2 },
          iconMode: { type: Number, value: 1 },
          badges: { type: Object, value: {} },
          links: { type: Object, value: {} },
        },
        methods: {
          handleWidgetClicked(e) {
            var r = e.detail;
            this.properties.links[r]
              ? s.a.navigate({
                  url:
                    "/packages/edu/webview/index?targetUrl=" +
                    encodeURIComponent(this.properties.links[r]),
                })
              : this.triggerEvent("eduServicesWidgetClicked", r);
          },
        },
      });
    },
  })
);
