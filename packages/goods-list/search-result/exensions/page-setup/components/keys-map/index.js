"use strict";
var r = require("~/r");
r(
  "EyD7",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    EyD7: function (e, r, t) {
      t.r(r);
      var s = t("rqVN");
      Object(s.b)({
        options: { multipleSlots: !0 },
        properties: { title: String, showKeys: Array },
        methods: {
          onKeyTap(e) {
            var {
              currentTarget: {
                dataset: { text: r },
              },
            } = e;
            this.triggerEvent("click", { text: r });
          },
        },
      });
    },
  })
);
