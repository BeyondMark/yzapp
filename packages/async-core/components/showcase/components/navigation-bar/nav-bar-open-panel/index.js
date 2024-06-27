"use strict";
var r = require("~/r");
r(
  "bLVD",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    bLVD: function (e, t, a) {
      a.r(t);
      var n = a("u8kV"),
        r = a("GFa9");
      Object(n.b)({
        properties: {
          isMenuOpen: { type: Boolean, value: !1 },
          currentSupport: { type: Boolean, value: !1 },
          openMenuStyle: { type: String, value: "" },
          openMenuAfterStyle: { type: String, value: "" },
          configData: { type: Object, value: {} },
          contactExtra: { type: Object, value: {} },
        },
        data: {},
        attached() {},
        methods: {
          onMenuTap() {
            this.triggerEvent("onMenuTap");
          },
          onMenuCustomPathTap(e) {
            var {
              currentTarget: {
                dataset: { item: t },
              },
            } = e;
            this.triggerEvent("onMenuCustomPathTap", t);
          },
          onMenuSysPathTap(e) {
            var {
              currentTarget: {
                dataset: { key: t },
              },
            } = e;
            this.triggerEvent("onMenuSysPathTap", t);
          },
          onContactBack: r.a.contactBack,
        },
      });
    },
  })
);
