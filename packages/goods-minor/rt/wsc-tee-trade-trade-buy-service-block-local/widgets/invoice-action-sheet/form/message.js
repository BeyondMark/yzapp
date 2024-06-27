"use strict";
var r = require("~/r");
r(
  "OUAU",
  Object.assign({}, require("~/v.js").modules, {
    OUAU: function (e, i, t) {
      t.r(i);
      var o = {
          props: { invoice: Object },
          computed: {
            emailList() {
              return this.invoice.common.emailList;
            },
          },
          methods: {
            onEmailChange(e) {
              this.$emit("assign-invoice-common", { emailList: [e.value] });
            },
          },
          ud: !0,
        },
        s = t("9ZMt");
      i.default = s.default.component(o);
    },
  })
);
