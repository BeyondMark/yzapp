"use strict";
var r = require("~/r");
r(
  "Xn35",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      Xn35: function (e, t, r) {
        r.r(t);
        var o = r("VbWc"),
          s = r("2bgu"),
          c = {
            props: {},
            data: () => ({ showAgreement: !1, checked: !1, protocol: {} }),
            created() {
              Object(o.a)(["SHOP_MEMBER_AGREEMENT"]).then((e) => {
                var { protocolData: t = [] } = e || {};
                if (Array.isArray(t) && t.length) {
                  var [r] = t;
                  (this.protocol = r), (this.showAgreement = !0);
                }
              });
            },
            methods: {
              onChange() {
                this.checked = !this.checked;
              },
              openProtocol() {
                Object(s.b)({
                  url:
                    "/pages/common/webview-page/index?src=" +
                    encodeURIComponent(this.protocol.url),
                  type: "navigateTo",
                  web: {
                    type: "safeLink",
                    safeLink: { url: this.protocol.url },
                  },
                });
              },
              getAgreeStatus() {
                return {
                  showAgreement: this.showAgreement,
                  checked: this.checked,
                  id: this.protocol.agreementTplId,
                };
              },
            },
            ud: !0,
          },
          n = r("9ZMt");
        t.default = n.default.component(c);
      },
    }
  )
);
