"use strict";
var r = require("~/r");
r(
  "Hvey",
  Object.assign({}, require("~/v.js").modules, {
    Hvey: function (t, e, i) {
      i.r(e);
      var l = i("9ZMt"),
        { useTpx: o } = l.default.style,
        r = {
          props: { componentTitle: { type: Object, default: () => {} } },
          computed: {
            titleAlignStyle() {
              var { align: t } = this.componentTitle;
              return "width: " + ("1" === t ? o("64") : "auto");
            },
            titleStyle() {
              var { titleFontSize: t, titleColor: e } = this.componentTitle;
              return "font-size: " + o(t) + "; color: " + e + ";";
            },
          },
          methods: {
            handleTitleClick() {
              this.$emit("btn-click");
            },
          },
          ud: !0,
        };
      e.default = l.default.component(r);
    },
  })
);
