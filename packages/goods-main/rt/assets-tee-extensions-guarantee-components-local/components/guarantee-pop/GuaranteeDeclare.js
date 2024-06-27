"use strict";
var r = require("~/r");
r(
  "wU7z",
  Object.assign({}, require("~/v.js").modules, {
    wU7z: function (t, e, s) {
      s.r(e);
      var a = s("Fcif"),
        i = {
          props: {
            value: { type: Boolean, default: !1 },
            zIndex: { type: Number, default: 100 },
            content: Object,
          },
          computed: {
            data() {
              if (this.content)
                return {
                  title: this.content.title,
                  content: this.content.content.map((t) =>
                    Object(a.a)({}, t, {
                      text: t.text.map((e, s) => ({
                        content: e,
                        isSpanTag: this.isSpanTag(t.tagSpan, s),
                        isBold: this.isBold(t.strong, s),
                        isImageTag: this.isImageTag(t.tagImg, s),
                        style: this.spanStyle(t.style, s),
                        isCategory: this.isCategory(t.category, s),
                      })),
                    })
                  ),
                };
            },
          },
          methods: {
            onClose() {
              this.$emit("close");
            },
            isSpanTag: (t, e) => t && t.includes(e),
            isImageTag: (t, e) => t && t.includes(e),
            isCategory: (t, e) => t && t.includes(e),
            isBold: (t, e) => t && t.includes(e),
            spanStyle: (t, e) => (t && t[e]) || "",
          },
          ud: !0,
        },
        n = s("9ZMt");
      e.default = n.default.component(i);
    },
  })
);
