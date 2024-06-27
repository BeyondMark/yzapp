"use strict";
var r = require("~/r");
r(
  "b9OL",
  Object.assign({}, require("~/v.js").modules, {
    b9OL: function (e, t, r) {
      r.r(t);
      var s = r("mztD"),
        a = r("882d"),
        o = {
          props: {
            messages: { type: Object, value: {} },
            show: Boolean,
            color: String,
          },
          computed: {
            formatMessage() {
              var e = this.messages || {},
                t = Object.keys(e),
                r = [];
              return (
                t.forEach((t) => {
                  var a = e[t],
                    o = /^\s*http(s)*:\/\/.+/.test(a) ? "image" : "text",
                    u = "";
                  "image" === o && (u = Object(s.a)(a, "!200x200.jpg")),
                    r.push({ value: a, type: o, label: t + "：", preview: u });
                }),
                r
              );
            },
          },
          methods: {
            handleClose() {
              this.$emit("close");
            },
            previewImg(e) {
              var { src: t } = e.currentTarget.dataset;
              Object(a.d)({ current: t, urls: [t] });
            },
          },
          ud: !0,
        },
        u = r("9ZMt");
      t.default = u.default.component(o);
    },
  })
);
