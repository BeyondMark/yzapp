"use strict";
var r = require("~/r");
r(
  "R5gK",
  Object.assign({}, require("~/v.js").modules, {
    R5gK: function (t, e, s) {
      s.r(e);
      var r = s("m6kV"),
        a = s("BZkp"),
        n = s("1pB4"),
        o = s("Zqpg"),
        c = Object(r.a)("t-badge"),
        l = {
          mixins: [
            Object(o.a)({ externalClasses: ["custom-class", "badge-class"] }),
          ],
          props: {
            dot: Boolean,
            max: [String, Number],
            color: String,
            content: String,
            useContentSlot: Boolean,
            standalone: Boolean,
          },
          computed: {
            renderContent() {
              var { dot: t, max: e, content: s, useContentSlot: r } = this;
              if (!t && !r)
                return Object(n.b)(e) && Object(n.e)(s) && +s > e ? e + "+" : s;
            },
            classes() {
              return {
                badge:
                  c({ dot: this.dot, fixed: !this.standalone }) +
                  " " +
                  this.badgeClass,
                wrapper: c("wrapper") + " " + this.customClass,
              };
            },
            badgeStyle() {
              return Object(a.k)({ background: this.color });
            },
          },
          ud: !0,
        },
        d = s("9ZMt");
      e.default = d.default.component(l);
    },
  })
);
