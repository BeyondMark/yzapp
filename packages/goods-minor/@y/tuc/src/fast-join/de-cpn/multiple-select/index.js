"use strict";
var r = require("~/r");
r(
  "MYvd",
  Object.assign({}, require("~/v.js").modules, {
    MYvd: function (e, t, s) {
      s.r(t);
      var i = {
          name: "AttributeMultipleSelect",
          props: { item: { type: Object } },
          data: () => ({
            showValue: "",
            sysValues: [],
            currentValue: [],
            show: !1,
          }),
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
                var e = this.item.value
                  .split("、")
                  .filter((e) => !!e)
                  .map((e) => Number(e));
                (this.showValue = e
                  .map((e) => this.item.sysValues.find((t) => t.id === e).value)
                  .join("、")),
                  (this.currentValue = e);
              } else (this.currentValue = []), (this.showValue = "");
              this.sysValues = this.item.sysValues.map(
                (e) => (
                  (e.select = this.currentValue.includes(Number(e.id))
                    ? "1"
                    : "0"),
                  e
                )
              );
            },
            handleSelect() {
              this.init(),
                (this.show = !0),
                this.$emit("withSwitchOtherPopup", !0);
            },
            handleClick(e) {
              this.currentValue.includes(e)
                ? (this.currentValue = this.currentValue.filter((t) => t !== e))
                : this.currentValue.push(e);
              var t = this.sysValues.findIndex((t) => t.id === e),
                s = "1" === this.sysValues[t].select ? "0" : "1";
              (this.sysValues[t].select = (" " + s).slice(1)),
                (this.sysValues = this.sysValues.filter((e) => e.select));
            },
            handleSubmit() {
              (this.showValue = this.currentValue
                .map((e) => this.item.sysValues.find((t) => t.id === e).value)
                .join("、")),
                this.$emit("onChange", {
                  id: this.item.attributeId,
                  value: this.currentValue.join("、"),
                }),
                this.onClose();
            },
            onClose() {
              (this.show = !1), this.$emit("withSwitchOtherPopup", !1);
            },
          },
          ud: !0,
        },
        u = s("9ZMt");
      t.default = u.default.component(i);
    },
  })
);
