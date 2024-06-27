"use strict";
var r = require("~/r");
r(
  "H6K7",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    H6K7: function (e, r, s) {
      s.r(r);
      var t = s("rqVN");
      Object(t.b)({
        properties: {
          show: { type: Boolean, value: !1 },
          openImageSrc: {
            type: String,
            value:
              "https://img01.yzcdn.cn/public_files/2019/12/23/7b987495fc6bbd066262153577881592.png",
          },
        },
        methods: {
          onClose() {
            this.triggerEvent("close");
          },
        },
      });
    },
  })
);
