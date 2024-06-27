"use strict";
var r = require("~/r");
r(
  "28zJ",
  Object.assign({}, require("~/v.js").modules, {
    "28zJ": function (e, t, i) {
      i.r(t);
      var s = {
          name: "AttributeSingleSelect",
          props: { item: { type: Object } },
          data: () => ({ showValue: "", currentValue: "", show: !1 }),
          created() {
            this.init();
          },
          computed: {
            displayValue() {
              return this.showValue || "请选择" + this.item.name;
            },
          },
          methods: {
            init() {
              if (this.item.value) {
                var e =
                  this.item.sysValues.find(
                    (e) => e.id === Number(this.item.value)
                  ) || {};
                (this.showValue = e.value || ""),
                  (this.currentValue = Number(this.item.value));
              } else (this.currentValue = ""), (this.showValue = "");
            },
            handleSelect() {
              this.init(),
                (this.show = !0),
                this.$emit("withSwitchOtherPopup", !0);
            },
            handleClick(e) {
              this.currentValue = e;
            },
            handleSubmit() {
              var e =
                this.item.sysValues.find((e) => e.id === this.currentValue) ||
                {};
              (this.showValue = e.value || ""),
                this.$emit("onChange", {
                  id: this.item.attributeId,
                  value: String(this.currentValue),
                }),
                this.onClose();
            },
            onClose() {
              (this.show = !1), this.$emit("withSwitchOtherPopup", !1);
            },
          },
          ud: !0,
        },
        h = i("9ZMt");
      t.default = h.default.component(s);
    },
  })
);
