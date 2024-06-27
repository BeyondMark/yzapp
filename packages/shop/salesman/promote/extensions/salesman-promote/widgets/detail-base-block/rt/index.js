"use strict";
var r = require("~/r");
r(
  "qLhP",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    qLhP: function (e, t, s) {
      s.r(t);
      var a = s("VmHG"),
        o = s("7/pW");
      Object(o.a)({
        attached() {
          Object(a.d)(this, ["design", "displayPop"]),
            Object(a.b)(this, [
              "setSalesmanData",
              "showSharePop",
              "getNavItemTop",
            ]);
        },
        options: { multipleSlots: !0 },
        data: { loading: !0, showShopPopManager: !1, bottomFixedHeight: 0 },
        observers: {
          design(e) {
            e &&
              setTimeout(() => {
                this.setData({ loading: !1 });
              }, 150);
          },
        },
        ready() {
          var { design: e } = this;
          e.length > 0 &&
            setTimeout(() => {
              this.setData({ loading: !1 });
            }, 150),
            setTimeout(() => {
              this.setData({ showShopPopManager: !0 });
            }, 2e3);
        },
        methods: {
          getNavItemTop(e) {
            this.getNavItemTop({ self: this, scrollTop: e.detail });
          },
        },
      });
    },
  })
);
