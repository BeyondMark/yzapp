"use strict";
var r = require("~/r");
r(
  "Nm2g",
  Object.assign({}, require("~/v.js").modules, {
    Nm2g: function (e, t, l) {
      l.r(t);
      var a = l("Fcif"),
        r = l("9ZMt"),
        i = l("MLLI"),
        s = {
          props: {
            fieldInfo: {
              type: Object,
              default: () => ({
                itemId: "",
                feItemCustomName: "",
                feRequired: !0,
                placeholder: "请选择",
              }),
            },
            fieldValue: { type: Array, value: [] },
            options: { type: Array, value: () => [] },
            themeColors: { type: Object, default: () => ({}) },
          },
          data: () => ({ showSelector: !1, currentSelect: {} }),
          computed: {
            popupStyle: () =>
              "border-radius: " +
              r.default.style.useTpx(12) +
              "px " +
              r.default.style.useTpx(12) +
              "px 0 0;",
            checkBoxIconSize: () => r.default.style.useTpx(18),
            optionsStyle() {
              var { windowHeight: e } = Object(i.b)();
              return (
                "min-height: " +
                r.default.style.useTpx(0.5 * e - 94) +
                ";\n        max-height: " +
                r.default.style.useTpx(0.8 * e - 94)
              );
            },
            fieldLabel() {
              var { fieldInfo: e } = this,
                { hasChangedName: t, itemName: l, feItemCustomName: a } = e;
              return t ? a : l;
            },
          },
          created() {
            this.init();
          },
          methods: {
            init() {
              var { fieldValue: e = [], currentSelect: t } = this;
              e.map((e, l) => {
                t[l] = !0;
              });
            },
            toggleSelector() {
              this.showSelector = !0;
            },
            handleCancel() {
              this.showSelector = !1;
            },
            handleValueChange(e) {
              var { currentSelect: t } = this;
              (t[e] = !t[e]), (this.currentSelect = Object(a.a)({}, t));
            },
            handleConfirm() {
              var { currentSelect: e, fieldInfo: t, options: l } = this,
                a = Object.keys(e)
                  .filter((t) => e[t])
                  .map((e) => l[e]);
              this.handleCancel(),
                this.$emit("change", { id: t.itemId, value: a });
            },
          },
          ud: !0,
        };
      t.default = r.default.component(s);
    },
  })
);
