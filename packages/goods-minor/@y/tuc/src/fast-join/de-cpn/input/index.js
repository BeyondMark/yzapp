"use strict";
var r = require("~/r");
r(
  "1nQh",
  Object.assign({}, require("~/v.js").modules, {
    "1nQh": function (e, t, i) {
      i.r(t);
      var a = {
          props: {
            inputType: { type: String },
            label: { type: String },
            item: { type: Object },
          },
          data: () => ({ value: "" }),
          created() {
            this.value = this.item.value;
          },
          computed: {
            fieldPlaceHolder() {
              return "请输入" + this.item.name;
            },
          },
          methods: {
            onChange(e) {
              (this.value = e.value),
                "number" !== this.inputType
                  ? this.$emit("onChange", {
                      id: this.item.attributeId,
                      value: e.value,
                    })
                  : this.$emit("onChange", {
                      id: this.item.attributeId,
                      value: Number(e.value),
                    });
            },
          },
          ud: !0,
        },
        u = i("9ZMt");
      t.default = u.default.component(a);
    },
  })
);
