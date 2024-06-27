"use strict";
var r = require("~/r");
r(
  "b7bs",
  Object.assign({}, require("~/v.js").modules, {
    b7bs: function (e, t, r) {
      r.r(t);
      var s = r("882d"),
        a = r("YeA1"),
        o = r("mztD");
      var d = {
          props: {
            message: { type: Array, default: () => [] },
            show: { type: Boolean, default: !1 },
          },
          data: () => ({ themeColors: {} }),
          computed: {
            formatedMessage() {
              return (
                void 0 === (e = this.message) && (e = []),
                e.forEach((e) => {
                  var { value: t } = e,
                    r = /^\s*http(s)*:\/\/.+/.test(t) ? "image" : "text";
                  (e.type = r),
                    "image" === r &&
                      (e.preview = Object(o.a)(t, "!200x200.jpg"));
                }),
                e
              );
              var e;
            },
          },
          created() {
            Object(a.b)(this, ["themeColors"]);
          },
          methods: {
            handleClose() {
              this.$emit("close");
            },
            previewImg(e) {
              var { src: t } = e.currentTarget.dataset;
              Object(s.d)({ current: t, urls: [t] });
            },
          },
          ud: !0,
        },
        u = r("9ZMt");
      t.default = u.default.component(d);
    },
  })
);
