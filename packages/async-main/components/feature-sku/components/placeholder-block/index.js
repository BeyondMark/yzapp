"use strict";
var r = require("~/r");
r(
  "RSj+",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "RSj+": function (e, t, r) {
      r.r(t);
      var s = r("u8kV");
      Object(s.c)({
        properties: {
          sku: { type: Object, observer: "initData" },
          selectedSkuComb: { type: Object, observer: "initData" },
        },
        data: { showPlaceHolder: !1 },
        methods: {
          initData() {
            var { sku: e, selectedSkuComb: t } = this.properties;
            if (e)
              try {
                var { itemDataModel: r = {} } = e,
                  { comboMark: s = {} } = r,
                  { isCombo: a = !1 } = s;
                a && !t
                  ? this.setYZData({ showPlaceHolder: !0 })
                  : this.setYZData({ showPlaceHolder: !1 });
              } catch (e) {
                this.setYZData({ showPlaceHolder: !1 });
              }
          },
        },
      });
    },
  })
);
