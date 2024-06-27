"use strict";
var r = require("~/r");
r(
  "eS/9",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "eS/9": function (t, e, a) {
      a.r(e);
      var r = a("RY8z"),
        i = a("2wjL"),
        s = ["navigate", "redirect", "switchTab"];
      Component({
        properties: {
          path: String,
          query: Object,
          type: { type: String, value: "navigate" },
          collectFormId: { type: Boolean, value: !1 },
          formIdBusinessModule: { type: String, value: "" },
        },
        data: {},
        attached() {
          this.data.path, s.indexOf(this.data.type);
        },
        methods: {
          navigateTo() {
            r.a[this.data.type] &&
              r.a[this.data.type]({
                url: i.a.add(this.data.path, this.data.query || {}),
              });
          },
        },
      });
    },
  })
);
