"use strict";
var r = require("~/r");
r(
  "FRIt",
  Object.assign({}, require("~/v.js").modules, {
    FRIt: function (t, e, r) {
      r.r(e);
      var l = r("KEq0"),
        s = r.n(l),
        o = {
          props: {
            normalTextList: { default: () => [], type: Array },
            boldTextList: { default: () => [], type: Array },
            themeColors: { type: Object, default: () => ({}) },
          },
          data: () => ({
            imgSrc: s()(
              "https://img01.yzcdn.cn/upload_files/2021/11/15/Fj-GsTjU8DZHMogRzHyJWK7wlAbd.png",
              "small"
            ),
          }),
          computed: {
            btnTextStyle() {
              return "color: " + (this.themeColors["ump-main-text"] || "#fff");
            },
          },
          methods: {
            click() {
              this.$emit("click");
            },
          },
          ud: !0,
        },
        a = r("9ZMt");
      e.default = a.default.component(o);
    },
  })
);
