"use strict";
var r = require("~/r");
r(
  "rZTh",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      rZTh: function (t, e, i) {
        i.r(e);
        var a = i("Fcif"),
          s = i("5tkZ"),
          o = {
            props: { value: { type: Boolean, default: !1 } },
            data: () => ({ apolloConfig: null, loading: !1 }),
            computed: {
              content() {
                if (this.apolloConfig)
                  return {
                    title: this.apolloConfig.title,
                    content: this.apolloConfig.content.map((t) =>
                      Object(a.a)({}, t, {
                        text: t.text.map((e, i) => ({
                          content: e,
                          isSpanTag: this.isSpanTag(t.tagSpan, i),
                          isBold: this.isBold(t.strong, i),
                          isImageTag: this.isImageTag(t.tagImg, i),
                          style: this.spanStyle(t.style, i),
                          isCategory: this.isCategory(t.category, i),
                        })),
                      })
                    ),
                  };
              },
              title() {
                var t;
                return (null == (t = this.content) ? void 0 : t.title) || "";
              },
            },
            watch: {
              value(t) {
                t &&
                  !this.content &&
                  ((this.loading = !0),
                  Object(s.a)()
                    .then((t) => {
                      this.apolloConfig = t;
                    })
                    .finally(() => {
                      this.loading = !1;
                    }));
              },
            },
            methods: {
              onClose() {
                this.$emit("close", !1);
              },
              isSpanTag: (t, e) => t && t.includes(e),
              isImageTag: (t, e) => t && t.includes(e),
              isCategory: (t, e) => t && t.includes(e),
              isBold: (t, e) => t && t.includes(e),
              spanStyle: (t, e) => (t && t[e]) || "",
            },
            ud: !0,
          },
          l = i("9ZMt");
        e.default = l.default.component(o);
      },
    }
  )
);
