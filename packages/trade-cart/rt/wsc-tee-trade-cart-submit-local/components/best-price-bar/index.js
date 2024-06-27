"use strict";
var r = require("~/r");
r(
  "RbvI",
  Object.assign({}, require("~/v.js").modules, {
    RbvI: function (t, e, r) {
      r.r(e);
      var i = {
          name: "best-price-bar",
          props: { info: { type: Object, default: () => {} } },
          computed: {
            promotionTag() {
              var { info: t } = this,
                { promotionTag: e = "" } = t;
              return e.split("¥");
            },
            showBar() {
              var { info: t } = this;
              return (
                0 === t.activityId &&
                0 === t.activityType &&
                this.promotionTag[0]
              );
            },
          },
          methods: {
            select() {
              this.$emit("select");
            },
          },
          ud: !0,
        },
        o = r("9ZMt");
      e.default = o.default.component(i);
    },
  })
);
