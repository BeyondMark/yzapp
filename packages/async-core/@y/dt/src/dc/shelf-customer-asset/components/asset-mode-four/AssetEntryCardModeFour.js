"use strict";
var r = require("~/r");
r(
  "+Ep6",
  Object.assign({}, require("~/v.js").modules, {
    "+Ep6": function (e, t, n) {
      n.r(t);
      var a = n("a1Mm"),
        r = n("taYb"),
        d = {
          props: {
            cardStyle: String,
            entries: { type: Array, default: () => [] },
            type: Number,
          },
          data: () => ({
            typePartIndexMap: {
              1: { oneIndex: [0, 1] },
              2: { oneIndex: [0], twoIndex: [1, 2] },
              3: { oneIndex: [0, 1, 2] },
              5: { oneIndex: [0, 1], twoIndex: [2, 3, 4] },
              6: { oneIndex: [0, 1], twoIndex: [2, 3] },
              7: { oneIndex: [0] },
            },
          }),
          computed: {
            formatEntries() {
              return this.entries.map((e) => {
                var { img: t, linkData: n } = e;
                return { image: Object(a.a)(t, "!680x0.jpg"), link: n };
              });
            },
          },
          methods: {
            handleNavigate(e) {
              this.$emit("jumpToLink", {
                type: "entryCard",
                linkData: r.a.toCamelCase(e),
              });
            },
          },
          ud: !0,
        },
        i = n("9ZMt");
      t.default = i.default.component(d);
    },
  })
);
