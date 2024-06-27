"use strict";
var r = require("~/r");
r(
  "kqnf",
  Object.assign({}, require("~/v.js").modules, {
    kqnf: function (e, t, r) {
      r.r(t);
      var i = r("Zqpg"),
        a = ["error", "search", "default", "network"],
        n = {
          name: "t-empty",
          mixins: [Object(i.a)({ externalClasses: ["custom-class"] })],
          props: {
            description: String,
            image: { type: String, default: "default" },
          },
          computed: {
            imageUrl() {
              return -1 !== a.indexOf(this.image)
                ? "https://img01.yzcdn.cn/vant/empty-image-" +
                    this.image +
                    ".png"
                : this.image;
            },
          },
          ud: !0,
        },
        s = r("9ZMt");
      t.default = s.default.component(n);
    },
  })
);
