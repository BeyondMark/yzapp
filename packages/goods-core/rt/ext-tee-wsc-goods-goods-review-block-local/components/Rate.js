"use strict";
var r = require("~/r");
r(
  "Vj+C",
  Object.assign({}, require("~/v.js").modules, {
    "Vj+C": function (r, o, e) {
      e.r(o);
      var t = {
          name: "review-rate",
          props: {
            count: Number,
            size: String,
            score: Number,
            color: String,
            voidColor: String,
          },
          computed: {
            scoreList() {
              for (var r = [], o = 1; o <= this.count; o++) {
                var e = this.score > o && this.score < o + 1,
                  t = o <= this.score && !e ? this.color : this.voidColor;
                r.push({ color: t, isHalf: e, voidColor: this.color });
              }
              return r;
            },
          },
          ud: !0,
        },
        s = e("9ZMt");
      o.default = s.default.component(t);
    },
  })
);
