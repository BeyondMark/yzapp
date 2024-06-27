"use strict";
var r = require("~/r");
r(
  "s07b",
  Object.assign({}, require("~/v.js").modules, {
    s07b: function (e, t, a) {
      a.r(t);
      var d = {
          props: {
            fieldStyle: { type: String, default: "" },
            fieldInfo: {
              type: Object,
              default: () => ({
                itemId: "",
                feItemCustomName: "",
                disabled: !1,
                placeholder: "",
              }),
            },
            type: { type: String, default: "text" },
            fieldValue: { type: String, value: "" },
          },
          data: () => ({}),
          computed: {
            fieldLabel() {
              var { fieldInfo: e } = this,
                { hasChangedName: t, itemName: a, feItemCustomName: d } = e;
              return t ? d : a;
            },
            placeholder() {
              return this.fieldInfo.placeholder;
            },
          },
          methods: {
            onTextInput(e) {
              var { value: t } = e,
                { fieldInfo: a } = this;
              this.$emit("change", { id: a.itemId, value: t });
            },
          },
          ud: !0,
        },
        l = a("9ZMt");
      t.default = l.default.component(d);
    },
  })
);
