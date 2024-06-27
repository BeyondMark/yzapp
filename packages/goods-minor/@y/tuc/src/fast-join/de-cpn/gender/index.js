"use strict";
var r = require("~/r");
r(
  "2Rry",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "2Rry": function (e, t, i) {
        i.r(t);
        var s = i("MTtC"),
          h = {
            name: "AttributeGender",
            props: { item: { type: Object } },
            data: () => ({
              showValue: "",
              show: !1,
              actions: [
                { name: "男", type: s.e.MALE },
                { name: "女", type: s.e.FEMALE },
              ],
            }),
            created() {
              this.item.value && (this.showValue = s.d[this.item.value] || "");
            },
            computed: {
              displayValue() {
                return this.showValue || "请选择" + this.item.name;
              },
            },
            methods: {
              handleSelectGender() {
                (this.show = !0), this.$emit("withSwitchOtherPopup", !0);
              },
              onClose() {
                (this.show = !1), this.$emit("withSwitchOtherPopup", !1);
              },
              onSelect(e) {
                (this.showValue = s.d[e.type] || ""),
                  this.$emit("onChange", {
                    id: this.item.attributeId,
                    value: e.type,
                  }),
                  this.onClose();
              },
            },
            ud: !0,
          },
          a = i("9ZMt");
        t.default = a.default.component(h);
      },
    }
  )
);
