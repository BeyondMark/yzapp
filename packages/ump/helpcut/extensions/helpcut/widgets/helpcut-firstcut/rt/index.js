"use strict";
var r = require("~/r");
r(
  "hDyP",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    hDyP: function (t, e, i) {
      i.r(e);
      var a = i("7/pW"),
        r = i("VmHG");
      Object(a.a)({
        data: {
          show: !0,
          firstCut: 0,
          options: {
            during: 1.5,
            height: 60,
            cellWidth: 38,
            ease: "cubic-bezier(0, 1, 0, 1)",
            color: "#ffeea4",
            columnStyle:
              "font-size: 60px;background-image: linear-gradient(to bottom,#fff, #FEFF7C);-webkit-background-clip: text;-webkit-text-fill-color: transparen",
          },
        },
        attached() {
          Object(r.d)(this, ["bargainDetail"]);
        },
        ready() {
          setTimeout(() => {
            var t;
            this.setYZData({
              firstCut:
                (null == (t = this.data.bargainDetail) ? void 0 : t.firstCut) ||
                !1,
            });
          }, 800),
            setTimeout(() => {
              this.setYZData({ show: !1 });
            }, 3e3);
        },
      });
    },
  })
);
