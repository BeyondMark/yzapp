"use strict";
var r = require("~/r");
r(
  "fvqH",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      fvqH: function (e, t, r) {
        r.r(t);
        var a = r("rxfT"),
          o = {
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
              layoutStyle: Number,
              innerCardBorderStyle: String,
              orderCard: {
                type: Object,
                default: () => ({ show: !1, templateType: 7, items: [] }),
              },
            },
            data: () => ({ LevelMode: a.i }),
            computed: {
              showGrowth() {
                return (
                  this.assetInfoValue.levelMode !== a.i.Prepaid &&
                  (!this.authMobile || this.memberInfo.isMember)
                );
              },
              textPadding() {
                var { styleSetting: e, extraSetting: t } = this;
                return "horizontal" === e.textAlign && t.showAvatar
                  ? "56px"
                  : "0";
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
              handleShowMemberPop() {
                this.$emit("showMemberPop");
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
