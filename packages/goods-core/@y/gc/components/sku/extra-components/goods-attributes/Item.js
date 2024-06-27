"use strict";
var r = require("~/r");
r(
  "aK1G",
  Object.assign({}, require("~/v.js").modules, {
    aK1G: function (t, e, s) {
      s.r(e);
      var i = {
          props: {
            attribute: Object,
            skuValue: Object,
            selectedStr: String,
            disabled: Boolean,
          },
          computed: {
            isChoosed() {
              var { kId: t } = this.attribute,
                e = t + ":" + this.skuValue.id;
              return this.selectedStr && this.selectedStr.indexOf(e) > -1;
            },
          },
          methods: {
            onSelect() {
              this.disabled ||
                this.$emit("select", {
                  attribute: this.attribute,
                  skuValue: this.skuValue,
                });
            },
          },
          ud: !0,
        },
        r = s("9ZMt");
      e.default = r.default.component(i);
    },
  })
);
