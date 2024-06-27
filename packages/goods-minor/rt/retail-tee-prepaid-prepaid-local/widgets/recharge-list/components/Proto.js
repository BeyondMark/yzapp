"use strict";
var r = require("~/r");
r(
  "SiZ/",
  Object.assign({}, require("~/v.js").modules, {
    "SiZ/": function (e, t, r) {
      r.r(t);
      var a = r("U1kS"),
        u = r.n(a),
        d = r("9ZMt"),
        n = r("tuFO"),
        i = r.n(n),
        s = {
          props: { kdtId: Number, mg: Boolean },
          computed: {
            agreementUrl() {
              return "web" === d.default.platform
                ? i()("/prepaid/card/agreement?kdt_id=" + this.kdtId, "h5")
                : "/packages/pre-card/agreement/index";
            },
          },
          ud: !0,
          mixins: [u.a],
        };
      t.default = d.default.component(s);
    },
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
  })
);
