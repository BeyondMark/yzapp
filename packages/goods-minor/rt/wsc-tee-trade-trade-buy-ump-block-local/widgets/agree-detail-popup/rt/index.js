"use strict";
var r = require("~/r");
r(
  "YRwq",
  Object.assign({}, require("~/v.js").modules, {
    YRwq: function (e, t, r) {
      r.r(t);
      var s = r("Fcif"),
        a = r("VmHG"),
        i = {
          data() {
            return (
              (this.store = this.ctx.store),
              Object(s.a)(
                {},
                Object(a.d)(this, ["showFreeMemberDialog", "agreeDetail"])
              )
            );
          },
          created() {
            Object(a.b)(this, ["handleFreeMemberClose"]);
          },
          methods: {
            handleClose() {
              this.handleFreeMemberClose();
            },
          },
        },
        o = r("9ZMt");
      t.default = o.default.component(i);
    },
  })
);
