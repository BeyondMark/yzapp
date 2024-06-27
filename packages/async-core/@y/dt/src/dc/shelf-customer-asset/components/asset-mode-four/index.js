"use strict";
var r = require("~/r");
r(
  "qwgR",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      qwgR: function (e, t, a) {
        a.r(t);
        var r = a("a1Mm"),
          n = a("rxfT"),
          i = {
            props: {
              assetInfoSetting: Object,
              assetInfoValue: Object,
              styleSetting: Object,
              extraSetting: Object,
              memberInfo: Object,
              extraData: Object,
              userInfo: Object,
              authMobile: Boolean,
              authUser: Boolean,
              themeColor: String,
              cardStyle: String,
              kdtId: Number,
              entries: { type: Array, default: () => [] },
              templateType: Number,
              loadingData: Boolean,
              innerCardBorderStyle: String,
            },
            data: () => ({}),
            computed: {
              containerStyle() {
                var {
                  styleSetting: { pageMargin: e },
                } = this;
                return "margin: 10px " + e + "px;";
              },
              userAvatar() {
                return Object(r.a)(this.userInfo.avatar || n.d, "!98x0.jpg");
              },
              userName() {
                return this.userInfo.nickname || n.e;
              },
            },
            methods: {
              handleLogin(e) {
                this.$emit("authLogin", e);
              },
              handleAuthUserInfo(e) {
                this.$emit("authUserInfo", e);
              },
              handleNavigate(e) {
                this.$emit("jumpToLink", e);
              },
              handleLogger(e) {
                this.$emit("logger", e);
              },
              handleAvatarClick() {
                this.handleNavigate({ type: "person" });
              },
              handleUserClick() {
                this.handleNavigate({ type: "member" });
              },
            },
            ud: !0,
          },
          s = a("9ZMt");
        t.default = s.default.component(i);
      },
    }
  )
);
