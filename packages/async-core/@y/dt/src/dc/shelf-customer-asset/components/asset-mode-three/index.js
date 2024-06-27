"use strict";
var r = require("~/r");
r(
  "tIkv",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      tIkv: function (e, t, r) {
        r.r(t);
        var a = r("a1Mm"),
          n = r("rxfT"),
          o = {
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
              kdtId: Number,
              entries: { type: Array, default: () => [] },
              loadingData: Boolean,
            },
            computed: {
              showGrowth() {
                return (
                  this.assetInfoValue.levelMode !== n.i.Prepaid &&
                  (!this.authMobile || this.memberInfo.isMember)
                );
              },
              innerCardStyle() {
                var {
                    styleSetting: { borderRadius: e, cardStyle: t },
                  } = this,
                  r = "";
                return (
                  "2" === t
                    ? (r = "box-shadow: 0 2px 10px rgba(125, 125, 125, 0.16);")
                    : "3" === t && (r = "border: 1px solid #ebedf0;"),
                  r + ("border-radius: " + e + "px;")
                );
              },
              leftCardStyle() {
                var {
                    styleSetting: {
                      bgColor: e,
                      bgImage: t,
                      cardStyle: r,
                      bgType: n,
                      cardMargin: o,
                    },
                  } = this,
                  i =
                    "image" === n
                      ? "background: url(" +
                        Object(a.a)(t, "!750x0.jpg") +
                        ") center center / cover no-repeat;"
                      : "background-color: " + e + ";",
                  s = "margin-right: " + o + "px;",
                  l = "";
                return (
                  ["1", "2", "3"].includes(r)
                    ? (l = i)
                    : "4" === r && (l = "background-color: transparent;"),
                  l + s
                );
              },
              userAvatar() {
                return Object(a.a)(this.userInfo.avatar || n.d, "!98x0.jpg");
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
              hanleShowMemberPop() {
                this.$emit("showMemberPop");
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
          i = r("9ZMt");
        t.default = i.default.component(o);
      },
    }
  )
);
