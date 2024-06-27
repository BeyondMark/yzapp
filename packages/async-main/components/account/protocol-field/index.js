"use strict";
var r = require("~/r");
r(
  "vYCP",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    vYCP: function (e, t, o) {
      o.r(t);
      var r = o("GFa9"),
        a = o("u8kV"),
        { resolveProtocol: s } = getApp();
      Object(a.b)({
        properties: {},
        data: { isProtocolAgreed: !1, protocols: [] },
        attached() {
          this.getProtocol();
        },
        methods: {
          getProtocol() {
            s().then((e) => {
              var { getProtocolData: t } = e;
              t().then((e) => {
                var { protocolData: t = [] } = e;
                this.setYZData({
                  protocols: t.map((e) => ({
                    name: e.agreementTplName,
                    url: e.url,
                  })),
                });
              });
            });
          },
          handleAgreementChange(e) {
            this.setYZData({ isProtocolAgreed: !!e.detail }),
              this.triggerEvent("agreementChange", !!e.detail);
          },
          readProtocol(e) {
            var { protocol: t } = e.target.dataset || {};
            if (t) {
              var o = encodeURIComponent(t.url);
              r.a.navigate({
                url: "/pages/common/webview-page/index?src=" + o,
                fail: () => {
                  wx.showToast({
                    icon: "none",
                    title: "打开《" + t.name + "》失败",
                  });
                },
              });
            }
          },
        },
      });
    },
  })
);
