"use strict";
var r = require("~/r");
r(
  "fxdR",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    fxdR: function (e, t, i) {
      i.r(t);
      var r = i("rqVN");
      Object(r.a)({
        properties: {
          show: Boolean,
          item: Object,
          value: null,
          switchable: Boolean,
          inactive: Boolean,
        },
        methods: {
          onEdit() {
            this.triggerEvent("edit", this.data.item);
          },
          onSelect() {
            this.triggerEvent("select", this.data.item);
          },
          noop() {},
        },
      });
    },
  })
);
