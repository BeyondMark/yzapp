"use strict";
var r = require("~/r");
r(
  "1SFz",
  Object.assign({}, require("~/v.js").modules, {
    "1SFz": function (e, t, i) {
      i.r(t);
      var n = {
          name: "LoginBottom",
          props: {
            modeChangeText: String,
            disabled: Boolean,
            theme: String,
            loading: Boolean,
          },
          data: () => ({ checked: !1 }),
          methods: {
            onChange() {
              (this.checked = !this.checked),
                this.$emit("on-change", { checked: this.checked });
            },
            handleChangeMode() {
              this.$emit("on-mode-change");
            },
            handleViewAgreement() {
              this.$emit("on-view-agreement");
            },
            handleSubmit() {
              this.checked
                ? this.$emit("on-submit")
                : this.$emit("on-toast", { message: "请阅读并勾选协议" });
            },
          },
          ud: !0,
        },
        h = i("9ZMt");
      t.default = h.default.component(n);
    },
  })
);
