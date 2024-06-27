"use strict";
var r = require("~/r");
r(
  "UpiF",
  Object.assign({}, require("~/v.js").modules, {
    UpiF: function (t, e, n) {
      n.r(e);
      var i = n("Fcif"),
        l = n("9ZMt"),
        o = {
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
                        Object(i.a)({}, t, {
                          desc: t.desc.map((t) => {
                            if ("object" == typeof t) {
                              var e = (null == t ? void 0 : t.text) || "",
                                n =
                                  null == t
                                    ? void 0
                                    : t.text.match(/\{\{(.*?)\}\}/g),
                                i = [];
                              return (
                                n.forEach((n) => {
                                  var l = n.match(/\{\{(.*?)\}\}/)[1],
                                    o =
                                      null == t
                                        ? void 0
                                        : t.link.find((t) => t.key === l);
                                  o &&
                                    ((i = e
                                      .split(n)
                                      .map((t) => ({ text: t }))).splice(1, 0, {
                                      text: null == o ? void 0 : o.text,
                                      url: null == o ? void 0 : o.href,
                                    }),
                                    (i = i.filter((t) => !!t.text)));
                                }),
                                i
                              );
                            }
                            return [{ text: t }];
                          }),
                        })
                      ),
              };
            },
            onClick(t) {
              l.default.navigate({ url: t, type: "navigateTo" });
            },
            onClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        };
      e.default = l.default.component(o);
    },
  })
);
