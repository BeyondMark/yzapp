"use strict";
var r = require("~/r");
r(
  "oC81",
  Object.assign({}, require("~/v.js").modules, {
    oC81: function (e, t, u) {
      u.r(t);
      var i = u("9ZMt"),
        o = u("MLLI"),
        s = {
          props: {
            fieldStyle: { type: String, default: "" },
            fieldInfo: {
              type: Object,
              default: () => ({
                itemId: "",
                feItemCustomName: "",
                itemValueList: [],
                placeholder: "",
              }),
            },
            fieldValue: { type: String, value: "" },
            themeColors: { type: Object, default: () => ({}) },
          },
          data: () => ({ showPopup: !1 }),
          computed: {
            popupStyle: () =>
              "border-radius: " +
              i.default.style.useTpx(12) +
              " " +
              i.default.style.useTpx(12) +
              " 0 0;",
            radioListStyle() {
              var { windowHeight: e } = Object(o.b)();
              return (
                "min-height: " +
                i.default.style.useTpx(0.5 * e - 44) +
                ";\n        max-height: " +
                i.default.style.useTpx(0.8 * e - 44) +
                ";"
              );
            },
            fieldLabel() {
              var { fieldInfo: e } = this,
                { hasChangedName: t, itemName: u, feItemCustomName: i } = e;
              return t ? i : u;
            },
          },
          methods: {
            openPopup() {
              this.showPopup = !0;
            },
            closePopup() {
              this.showPopup = !1;
            },
            confirm(e) {
              this.closePopup();
              var { fieldInfo: t } = this;
              this.$emit("change", { id: t.itemId, value: e });
            },
          },
          ud: !0,
        };
      t.default = i.default.component(s);
    },
  })
);
