"use strict";
var r = require("~/r");
r(
  "nmge",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    nmge: function (e, t, o) {
      o.r(t);
      var a = o("Fcif"),
        r = o("svh/"),
        i = o("u8kV"),
        l = o("F9Sv"),
        n = o("QLod"),
        s = o("OMz+"),
        p = getApp();
      Object(i.b)({
        mapData: Object(a.a)({}, Object(r.h)("/", ["shop"])),
        store: () => p.$store,
        data: {
          deviceType: p.deviceType || "",
          forbidCopyrightData: !1,
          pageBgColorData: "#f2f2f2",
          isNativeTabPage: !1,
        },
        options: { multipleSlots: !0 },
        properties: {
          forbidCopyright: {
            type: Boolean,
            observer(e) {
              this.setYZData({ forbidCopyrightData: e || !1 });
            },
          },
          customCopyright: Boolean,
          noProtocol: { type: Boolean, value: !1 },
          fixedBottom: Boolean,
          showServiceDue: Boolean,
          showStoreSwitch: Boolean,
          showShopStatus: Boolean,
          switchPageOptions: Object,
          pageBgColor: {
            type: String,
            value: "#f2f2f2",
            observer(e) {
              this.setYZData({ pageBgColorData: e || "#f2f2f2" });
            },
          },
          copyrightBgColor: { type: String, value: "#f2f2f2" },
          isShowStoreInfo: { type: Boolean, value: !1 },
          buyerAddress: String,
          titleText: String,
          openCustomNav: Boolean,
          isTabPage: Boolean,
          themeTemplate: null,
          hasSkeleton: { type: Boolean, value: !1 },
          pageContainerStyle: { type: String, value: "" },
          pageContainerItemStyle: { type: String, value: "" },
          navigationbarConfigData: { type: Object, value: {} },
          showCanDeferComponent: { type: Boolean, value: !0 },
          extraClipboardData: { type: Object, value: {} },
          isRetailShelf: Boolean,
          noAutoAuth: { type: Boolean, value: !1 },
          protocolIndex: { type: Number, value: 10001 },
        },
        externalClasses: ["page-container-class"],
        attached() {
          this.setData({ isNativeTabPage: Object(s.a)() });
        },
        methods: {
          handleRootTap(e) {
            var t = getApp();
            if (!this.route) {
              var o = getCurrentPages() || [];
              this.route = o[o.length - 1].route;
            }
            var r = Object(n.d)(this.route),
              i = Object(l.a)(e, { supportCustomNav: r });
            null !== i &&
              t.logger.log({
                et: "custom",
                ei: "hot_click",
                en: "热力图点击",
                si: t.getKdtId(),
                params: Object(a.a)({ is_fix: 0 }, i),
              });
          },
          onProtocolInitListen() {
            this.triggerEvent("onProtocolInitListen");
          },
        },
      });
    },
  })
);
