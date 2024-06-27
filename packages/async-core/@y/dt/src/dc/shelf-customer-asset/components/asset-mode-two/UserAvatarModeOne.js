"use strict";
var r = require("~/r");
r(
  "c+MQ",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "c+MQ": function (e, r, t) {
        t.r(r);
        var a = t("a1Mm"),
          o = t("rxfT"),
          n = {
            name: "UserAvatarModeOne",
            props: {
              authUser: Boolean,
              kdtId: Number,
              themeColor: String,
              avatar: String,
              nickname: String,
              showAvatar: Boolean,
              showLevelIcon: Boolean,
              level: Number,
            },
            data: () => ({ DEFAULT_AVATAR: o.d }),
            computed: {
              userAvatar() {
                return Object(a.a)(this.avatar || o.d, "!98x0.jpg");
              },
              userName() {
                return this.nickname || o.e;
              },
            },
            methods: {
              handleAuthUserInfo(e) {
                this.$emit("authUserInfo", e);
              },
              handleCodeClick() {
                this.$emit("showMemberPop"), this.$emit("logger", "memberCode");
              },
              handleClick(e) {
                this.$emit("jumpToLink", { type: e });
              },
            },
            ud: !0,
          },
          s = t("9ZMt");
        r.default = s.default.component(n);
      },
    }
  )
);
