"use strict";
var r = require("~/r");
r(
  "f46S",
  Object.assign({}, require("~/v.js").modules, {
    f46S: function (t, e, c) {
      c.r(e);
      var s = c("Fcif"),
        i = c("YeA1"),
        a = c("VmHG"),
        o = {
          data() {
            return Object(s.a)(
              { goodsType: {} },
              Object(a.d)(this, ["selectContact", "isAddressFixed"])
            );
          },
          created() {
            Object(a.b)(this, ["handleContactCellClick", "fetchContactList"]),
              Object(i.b)(this, {
                goodsType: () => {
                  this.fetchContactList();
                },
              }),
              this.fetchContactList();
          },
          methods: {
            onCellClick() {
              this.handleContactCellClick();
            },
          },
        },
        l = c("9ZMt");
      e.default = l.default.component(o);
    },
  })
);
