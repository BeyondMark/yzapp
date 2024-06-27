"use strict";
var r = require("~/r");
r(
  "PG3K",
  Object.assign({}, require("~/v.js").modules, {
    PG3K: function (t, r, o) {
      o.r(r);
      var e = o("YeA1"),
        i = {
          name: "groupon-intro-bar",
          props: {
            grouponActivity: Object,
            title: String,
            intro: String,
            kdtId: Number,
          },
          computed: {
            grouponIntroQuery() {
              var t = this.grouponActivity || {};
              return { kdt_id: this.kdtId, groupType: t.groupType };
            },
          },
          methods: {
            gotoPage() {
              Object(e.a)().dmc.navigate(
                "GrouponGuide",
                this.grouponIntroQuery
              );
            },
            onClick() {
              this.$emit("click");
            },
          },
          ud: !0,
        },
        u = o("9ZMt");
      r.default = u.default.component(i);
    },
  })
);
