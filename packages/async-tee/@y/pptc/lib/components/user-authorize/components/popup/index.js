"use strict";
var r = require("~/r");
r(
  "MtD2",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      MtD2: function (o, t, e) {
        e.r(t);
        var i = e("Fcif"),
          n = e("9ZMt"),
          a = e("QxN7"),
          r = e("XZD8"),
          l = e("4cW6"),
          s = {
            props: {
              kdtId: Number,
              userInfo: Object,
              dialogType: String,
              userAuthList: Array,
              config: Object,
              hooks: Object,
              visible: Boolean,
              zIndex: Number,
              normal: Boolean,
              privacyProtocol: Object,
              userProtocol: Object,
              popupCustomStyle: String,
              nativeAuthPopType: String,
              aNickList: { type: Array, default: () => [] },
              supportFillNick: Boolean,
              bizDataMap: Object,
              protocolSource: String,
              protocolIsCloudSlot: { type: Boolean, default: !1 },
            },
            data: () => ({
              DialogType: a.AuthDialogType,
              paddingBottom: 0,
              event: {
                dialogType: "",
                userAuthList: [],
                config: {},
                kdtId: 0,
                userInfo: {},
                zIndex: void 0,
                visible: !1,
                privacyProtocol: null,
                userProtocol: null,
                popupCustomStyle: "",
                nativeAuthPopType: "",
                aNickList: [],
                supportFillNick: !1,
                protocolSource: null,
                protocolIsCloudSlot: !1,
              },
            }),
            computed: {
              commonDialogType() {
                return this.geConfig("dialogType");
              },
              commonUserAuthList() {
                return this.geConfig("userAuthList");
              },
              commonVisible() {
                return !!this.geConfig("visible");
              },
              commonConfig() {
                return this.geConfig("config");
              },
              commonTheme() {
                return this.commonConfig.theme;
              },
              commonUserInfo() {
                return this.geConfig("userInfo");
              },
              commonKdtId() {
                return this.geConfig("kdtId");
              },
              commonAppId() {
                return this.geConfig("appId");
              },
              commonZIndex() {
                return this.geConfig("zIndex");
              },
              commonPrivacyProtocol() {
                return this.geConfig("privacyProtocol");
              },
              commonUserProtocol() {
                return this.geConfig("userProtocol");
              },
              commonPopupCustomStyle() {
                return this.geConfig("popupCustomStyle");
              },
              commonNativeAuthPopType() {
                return this.geConfig("nativeAuthPopType");
              },
              commonANickList() {
                return this.geConfig("aNickList");
              },
              commonSupportFillNick() {
                return this.geConfig("supportFillNick");
              },
              commonBizDataMap() {
                return this.geConfig("bizDataMap");
              },
              commonNoMobileFallback() {
                return this.geConfig("noMobileFallback");
              },
              commonDowngrade() {
                return this.geConfig("downgrade");
              },
              commonProtocolSource() {
                return this.getValidConfig("protocolSource");
              },
              commonProtocolIsCloudSlot() {
                return this.getValidConfig("protocolIsCloudSlot");
              },
            },
            created() {
              var o = new r.a(this, this.$getPageRoute(), !this.normal);
              if (
                (o.onMainTrigger((o) => {
                  var { type: t, data: e } = o;
                  if (t === l.b.POPUP_SHOW) return this.showPopup(e);
                }),
                (this.$_event = o),
                !a.platform.canIUse("root-portal"))
              ) {
                var t = n.default.getApp() || {};
                null == t.isSwitchTab ||
                  t.isSwitchTab().then((o) => {
                    o && (this.paddingBottom = 59);
                  });
              }
            },
            destroyed() {
              this.$_event && this.$_event.destroyed();
            },
            methods: {
              geConfig(o) {
                return this.normal ? this[o] : this.event[o];
              },
              getValidConfig(o) {
                return this[o] || this.event[o];
              },
              showPopup(o) {
                this.$set(this, "event", Object(i.a)({}, this.event, o));
              },
              callbackToMain(o) {
                var { type: t, data: e } = o;
                this.$_event.callbackToMain(t, e);
              },
              handleShowToast(o) {
                this.callbackToMain({ type: l.a.SHOW_TOAST, data: o });
              },
              handleAuthStatusChange(o) {
                this.callbackToMain({ type: l.a.AUTH_STATUS_CHANGE, data: o });
              },
              handleOpenWebview(o) {
                this.callbackToMain({ type: l.a.OPEN_WEBVIEW, data: o });
              },
              handleClose() {
                this.callbackToMain({ type: l.a.POPUP_VISIBLE, data: !1 });
              },
              handlePopupAuthSuccess(o) {
                this.callbackToMain({ type: l.a.POPUP_AUTH_SUCCESS, data: o });
              },
              handleAuthFail(o) {
                this.callbackToMain({ type: l.a.POPUP_AUTH_FAIL, data: o });
              },
              handleAuthPopupShow(o) {
                this.callbackToMain({ type: l.a.AUTH_POPUP_SHOW, data: o });
              },
            },
            ud: !0,
          };
        t.default = n.default.component(s);
      },
    }
  )
);
