"use strict";
var r = require("~/r");
r(
  "CagD",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      CagD: function (e, t, a) {
        a.r(t);
        var r = a("a1Mm"),
          o = a("rxfT"),
          n = {
            props: {
              assetInfoSetting: Object,
              assetInfoValue: Object,
              styleSetting: Object,
              extraSetting: Object,
              memberInfo: Object,
              extraData: Object,
              userInfo: Object,
              cardStyle: String,
              authMobile: Boolean,
              authUser: Boolean,
              themeColor: String,
              kdtId: Number,
              loadingData: Boolean,
            },
            data: () => ({}),
            computed: {
              userAvatar() {
                return Object(r.a)(this.userInfo.avatar || o.d, "!98x0.jpg");
              },
            },
            methods: {
              handleUserClick() {
                this.handleNavigate({ type: "person" });
              },
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
              handleShowMemberPop() {
                this.$emit("showMemberPop");
              },
            },
            ud: !0,
          },
          i = a("9ZMt");
        t.default = i.default.component(n);
      },
    }
  )
);
