"use strict";
var r = require("~/r");
r(
  "Ja3Q",
  Object.assign({}, require("~/v.js").modules, {
    Ja3Q: function (t, e, n) {
      n.r(e);
      var i = {
          props: {
            content: { type: Object, default: () => {} },
            docs: { type: Object, required: !0, default: () => {} },
          },
          computed: {
            icon() {
              var t, e;
              return (
                (null == (t = this.docs) || null == (e = t.icon)
                  ? void 0
                  : e.light[this.content.key]) ||
                "https://img01.yzcdn.cn/upload_files/2020/03/23/FsC5ZmJqm2yUIcKfgM9ChlX58Fu-.png"
              );
            },
            hasClickEvent() {
              return this.content.event || this.docs[this.content.key];
            },
          },
          methods: {
            onClick() {
              this.hasClickEvent && this.$emit("onClick", this.content);
            },
          },
          ud: !0,
        },
        c = n("9ZMt");
      e.default = c.default.component(i);
    },
  })
);
