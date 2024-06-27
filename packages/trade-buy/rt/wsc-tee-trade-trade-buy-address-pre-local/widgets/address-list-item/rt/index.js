"use strict";
var r = require("~/r");
r(
  "AcT6",
  Object.assign({}, require("~/v.js").modules, {
    AcT6: function (e, t, i) {
      i.r(t);
      var o = i("YeA1"),
        s = {
          props: {
            show: Boolean,
            item: Object,
            value: null,
            switchable: Boolean,
            themeColors: { type: Object, default: () => ({}) },
            inactive: Boolean,
            forcePoiSelect: Boolean,
          },
          data: () => ({ themeTag: {} }),
          computed: {
            showPoiPrompt() {
              return (
                this.forcePoiSelect &&
                2 !== this.item.type &&
                !this.item.downgrade
              );
            },
          },
          created() {
            Object(o.b)(this, ["themeTag"]);
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
        r = i("9ZMt");
      t.default = r.default.component(s);
    },
  })
);
