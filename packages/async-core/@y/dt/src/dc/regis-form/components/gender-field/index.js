"use strict";
var r = require("~/r");
r(
  "ADdg",
  Object.assign({}, require("~/v.js").modules, {
    ADdg: function (e, t, a) {
      a.r(t);
      var i = {
          props: {
            fieldInfo: {
              type: Object,
              default: () => ({
                itemId: "",
                feItemCustomName: "",
                itemValueList: [],
              }),
            },
            fieldValue: { type: String, value: "" },
          },
          data: () => ({}),
          computed: {
            fieldLabel() {
              var { fieldInfo: e } = this,
                { hasChangedName: t, itemName: a, feItemCustomName: i } = e;
              return t ? i : a;
            },
          },
          methods: {
            chooseGenderRadio(e) {
              var { fieldInfo: t } = this;
              this.$emit("change", { id: t.itemId, value: e });
            },
          },
          ud: !0,
        },
        d = a("9ZMt");
      t.default = d.default.component(i);
    },
  })
);
