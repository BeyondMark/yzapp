"use strict";
var r = require("~/r");
r(
  "k54F",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      k54F: function (e, r, a) {
        a.r(r);
        var t = a("a1Mm"),
          n = a("rxfT"),
          s = {
            props: {
              avatar: String,
              nickname: String,
              showAvatar: Boolean,
              showLevelIcon: Boolean,
              level: Number,
            },
            data: () => ({}),
            computed: {
              userAvatar() {
                return Object(t.a)(this.avatar || n.d, "!98x0.jpg");
              },
              userName() {
                return this.nickname || n.e;
              },
            },
            methods: {
              handleClick(e) {
                this.$emit("jumpToLink", { type: e });
              },
            },
            ud: !0,
          },
          u = a("9ZMt");
        r.default = u.default.component(s);
      },
    }
  )
);
