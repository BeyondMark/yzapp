"use strict";
var r = require("~/r");
r(
  "zKeQ",
  Object.assign({}, require("~/v.js").modules, {
    zKeQ: function (r, t, e) {
      e.r(t);
      var a = e("a1Mm"),
        i = e("taYb"),
        n = {
          props: {
            cardStyle: String,
            cardMargin: String,
            entries: { type: Array, default: () => [] },
          },
          data: () => ({}),
          computed: {
            formatEntries() {
              return this.entries.map((r) => {
                var { image: t, link: e } = r;
                return { image: Object(a.a)(t, "!480x0.jpg"), link: e };
              });
            },
            entryCardMargin() {
              return "margin-bottom: " + this.cardMargin + "px;";
            },
          },
          methods: {
            handleNavigate(r) {
              this.$emit("jumpToLink", {
                type: "entryCard",
                linkData: i.a.toCamelCase(r),
              });
            },
          },
          ud: !0,
        },
        s = e("9ZMt");
      t.default = s.default.component(n);
    },
  })
);
