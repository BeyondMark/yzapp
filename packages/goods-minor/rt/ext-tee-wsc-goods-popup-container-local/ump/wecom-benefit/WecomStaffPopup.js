"use strict";
var r = require("~/r");
r(
  "aGMk",
  Object.assign({}, require("~/v.js").modules, {
    aGMk: function (e, t, a) {
      a.r(t);
      var o = {
          name: "wecom-staff-popup",
          props: { qrCodeUrl: String, nested: Boolean },
          data: () => ({
            qrcodeWarnImg:
              "https://b.yzcdn.cn/v2/image/wap/cannot_follow@2x.png",
          }),
          methods: {
            handleClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        r = a("9ZMt");
      t.default = r.default.component(o);
    },
  })
);
