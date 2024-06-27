"use strict";
var r = require("~/r");
r(
  "n7ge",
  Object.assign({}, require("~/v.js").modules, {
    n7ge: function (e, t, s) {
      s.r(t);
      var i = s("Fcif"),
        r = s("VmHG"),
        o = {
          data() {
            return Object(i.a)({}, Object(r.d)(this, ["showDiscountDetail"]));
          },
          computed: { customStyle: () => "height: 75vh;" },
          methods: {
            handleCloseDetail() {
              this.store.toggleDiscountDetail();
            },
          },
        },
        a = s("9ZMt");
      t.default = a.default.component(o);
    },
  })
);
