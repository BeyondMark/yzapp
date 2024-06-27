"use strict";
var r = require("~/r");
r(
  "Zx1r",
  Object.assign({}, require("~/v.js").modules, {
    Zx1r: function (e, t, r) {
      r.r(t);
      var s = {
          props: {
            show: { type: Boolean, default: !1 },
            list: { type: Array, default: () => [] },
            name: { type: String, default: "" },
          },
          computed: {
            visible() {
              return this.show && this.list.length > 0;
            },
            nameFormatted() {
              return this.list.map((e) =>
                this.formatName(this.name, e.corpName)
              );
            },
          },
          methods: {
            selectEnterprise(e) {
              var { companyId: t, corpName: r } = e;
              this.$emit("select", { id: t, name: r }), this.onClose();
            },
            onClose() {
              this.$emit("close");
            },
            formatName(e, t) {
              var r = e.split("").join("|").toString(),
                s = new RegExp(r, "g"),
                a = t.match(s) || [],
                i = [];
              return (
                t.split("").forEach((e) => {
                  i.push({ char: e, matched: a.includes(e) });
                }),
                i
              );
            },
          },
          ud: !0,
        },
        a = r("9ZMt");
      t.default = a.default.component(s);
    },
  })
);
