"use strict";
var r = require("~/r");
r(
  "RWn5",
  Object.assign({}, require("~/v.js").modules, {
    RWn5: function (t, e, a) {
      a.r(e);
      var r = a("Fcif"),
        o = {
          props: { show: Boolean, info: Object },
          data: () => ({ extraData: {} }),
          watch: {
            show(t) {
              t || (this.extraData = {});
            },
          },
          methods: {
            onEvent(t, e) {
              var { detail: a } = e || {};
              this.$emit(t, a);
            },
            onChangeGoodsAttributes(t) {
              this.extraData = Object(r.a)({ viewUpdate: !0 }, t);
            },
          },
          ud: !0,
        },
        s = a("9ZMt");
      e.default = s.default.component(o);
    },
  })
);
