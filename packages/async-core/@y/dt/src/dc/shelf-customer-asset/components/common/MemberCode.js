"use strict";
var r = require("~/r");
r(
  "JCTM",
  Object.assign({}, require("~/v.js").modules, {
    JCTM: function (e, o, r) {
      r.r(o);
      var t = {
          methods: {
            handleCodeClick() {
              this.$emit("showMemberPop"), this.$emit("logger", "memberCode");
            },
            handleClosePopup() {
              this.showPopup = !1;
            },
          },
          ud: !0,
        },
        s = r("9ZMt");
      o.default = s.default.component(t);
    },
  })
);
