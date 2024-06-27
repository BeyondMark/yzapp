"use strict";
var r = require("~/r");
r(
  "nJ35",
  Object.assign({}, require("~/v.js").modules, {
    nJ35: function (t, e, n) {
      n.r(e);
      var l = n("Fcif"),
        o = n("9ZMt"),
        i = {
          props: {
            value: { type: Boolean, default: !1 },
            zIndex: { type: Number, default: 100 },
            content: Object,
          },
          data: () => ({ contentFormat: {} }),
          watch: {
            content(t) {
              t && this.descParsing();
            },
          },
          methods: {
            descParsing() {
              var t, e;
              this.contentFormat = {
                title: (null == (t = this.content) ? void 0 : t.title) || "",
                content:
                  null == (e = this.content)
                    ? void 0
                    : e.content.map((t) =>
                        Object(l.a)({}, t, {
                          desc: t.desc.map((t) => {
                            if ("object" == typeof t) {
                              var e = (null == t ? void 0 : t.text) || "",
                                n =
                                  null == t
                                    ? void 0
                                    : t.text.match(/\{\{(.*?)\}\}/g),
                                l = [];
                              return (
                                n.forEach((n) => {
                                  var o = n.match(/\{\{(.*?)\}\}/)[1],
                                    i =
                                      null == t
                                        ? void 0
                                        : t.link.find((t) => t.key === o);
                                  i &&
                                    ((l = e
                                      .split(n)
                                      .map((t) => ({ text: t }))).splice(1, 0, {
                                      text: null == i ? void 0 : i.text,
                                      url: null == i ? void 0 : i.href,
                                    }),
                                    (l = l.filter((t) => !!t.text)));
                                }),
                                l
                              );
                            }
                            return [{ text: t }];
                          }),
                        })
                      ),
              };
            },
            onClick(t) {
              o.default.navigate({ url: t, type: "navigateTo" });
            },
            onClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        };
      e.default = o.default.component(i);
    },
  })
);
