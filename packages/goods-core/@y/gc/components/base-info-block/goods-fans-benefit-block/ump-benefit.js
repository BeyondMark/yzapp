"use strict";
var r = require("~/r");
r(
  "jT+a",
  Object.assign({}, require("~/v.js").modules, {
    "jT+a": function (e, t, i) {
      i.r(t);
      var r = {
          name: "UmpBenefit",
          props: {
            benefitData: Object,
            iconText: String,
            actionText: String,
            identityText: String,
          },
          methods: {
            become() {
              this.$emit("become");
            },
          },
          ud: !0,
        },
        n = i("9ZMt");
      t.default = n.default.component(r);
    },
  })
);
