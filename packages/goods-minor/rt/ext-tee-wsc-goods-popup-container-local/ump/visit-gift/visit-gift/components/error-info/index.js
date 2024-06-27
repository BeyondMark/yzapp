"use strict";
var r = require("~/r");
r(
  "wMFC",
  Object.assign({}, require("~/v.js").modules, {
    U1kS: function (e, t, r) {
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = a(r("9ZMt"));
      t.default = {
        methods: {
          _t_hn_(e) {
            u.default.navigate({
              url: e.currentTarget.dataset.href,
              type: "navigateTo",
            });
          },
        },
      };
    },
    wMFC: function (e, t, r) {
      r.r(t);
      var a = r("U1kS"),
        u = { props: { detail: Object }, ud: !0, mixins: [r.n(a).a] },
        i = r("9ZMt");
      t.default = i.default.component(u);
    },
  })
);
