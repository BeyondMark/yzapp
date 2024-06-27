"use strict";
var r = require("~/r");
r(
  "Dhgf",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      Dhgf: function (e, o, r) {
        Object.defineProperty(o, "__esModule", { value: !0 });
        var n = r("WaS2"),
          t = r("BI6g").createWxComponent(new n.ProtocolPopupComponent(), {
            methods: {
              onWxAgree: function (e) {
                var o = (e || {}).weappProtocol;
                this.onAgree({ env: "wx", weappProtocol: o });
              },
              onWxPrivacyAgree: function () {
                this.onWxAgree({ weappProtocol: !0 });
              },
            },
          });
        Component(t);
      },
    }
  )
);
