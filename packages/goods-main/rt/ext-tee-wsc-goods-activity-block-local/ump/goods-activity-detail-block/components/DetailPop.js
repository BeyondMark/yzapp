"use strict";
var r = require("~/r");
r(
  "RXI3",
  Object.assign({}, require("~/v.js").modules, {
    RXI3: function (e, t, i) {
      i.r(t);
      var r = {
          name: "activity-detail-pop",
          props: {
            show: { type: Boolean, default: !1 },
            title: { type: String, default: "" },
            customStyle: { type: String, value: "" },
          },
          methods: {
            hidePopUp() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        o = i("9ZMt");
      t.default = o.default.component(r);
    },
  })
);
