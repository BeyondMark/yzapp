"use strict";
var r = require("~/r");
r(
  "jqh8",
  Object.assign({}, require("~/v.js").modules, {
    jqh8: function (e, t, o) {
      o.r(t);
      var i = {
          props: {
            show: Boolean,
            item: Object,
            value: null,
            switchable: Boolean,
            themeColors: { type: Object, default: () => ({}) },
            inactive: Boolean,
            forcePoiSelect: Boolean,
            themeTag: Object,
          },
          computed: {
            showPoiPrompt() {
              return (
                this.forcePoiSelect &&
                2 !== this.item.type &&
                !this.item.downgrade
              );
            },
          },
          methods: {
            onEdit() {
              this.$emit("edit", this.item);
            },
            onSelect() {
              this.$emit("select", this.item);
            },
          },
          ud: !0,
        },
        s = o("9ZMt");
      t.default = s.default.component(i);
    },
  })
);
