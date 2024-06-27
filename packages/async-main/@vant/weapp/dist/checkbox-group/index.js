"use strict";
var r = require("~/r");
r(
  "OyC1",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    OyC1: function (e, r, a) {
      a.r(r);
      var i = a("NeL/"),
        t = a("py6f");
      Object(t.a)({
        field: !0,
        relation: Object(i.a)("checkbox", function (e) {
          this.updateChild(e);
        }),
        props: {
          max: Number,
          value: { type: Array, observer: "updateChildren" },
          disabled: { type: Boolean, observer: "updateChildren" },
          direction: { type: String, value: "vertical" },
        },
        methods: {
          updateChildren() {
            this.children.forEach((e) => this.updateChild(e));
          },
          updateChild(e) {
            var { value: r, disabled: a, direction: i } = this.data;
            e.setData({
              value: -1 !== r.indexOf(e.data.name),
              parentDisabled: a,
              direction: i,
            });
          },
        },
      });
    },
  })
);
