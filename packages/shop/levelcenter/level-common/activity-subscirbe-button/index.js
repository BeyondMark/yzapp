"use strict";
var r = require("~/r");
r(
  "eLkV",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    eLkV: function (e, b, r) {
      r.r(b);
      var s = r("a1Mm"),
        t = r("rqVN"),
        a = r("lOyf"),
        c = Object(a.a)();
      Object(t.b)({
        properties: { hasButton: Boolean, hasTabbar: Boolean },
        data: {
          isIphoneX: c,
          bgUrl: Object(s.a)(
            "https://b.yzcdn.cn/public_files/99f21f7f10069ab3bfb9f4567d2bbd2c.png",
            "!160x160.jpg"
          ),
          iconUrl: Object(s.a)(
            "https://b.yzcdn.cn/public_files/c7b1ea7d3023a0047bb3f7df768643f0.png",
            "!12x16.jpg"
          ),
        },
        methods: {
          handleSubscribe() {
            this.triggerEvent("subscribe");
          },
        },
      });
    },
  })
);
