"use strict";
var r = require("~/r");
r(
  "DtX1",
  Object.assign({}, require("~/v.js").modules, {
    DtX1: function (t, e, o) {
      o.r(e);
      var a = {};
      a = getApp();
      var i = {
          props: {
            businessTime: { type: String, default: "" },
            isMultiStore: { type: Boolean, default: !0 },
            isFill: { type: Boolean, default: !1 },
          },
          data: () => ({
            popupBottom: 0,
            noSafeBottom: 0,
            safeBottom: "iPhone-X" === a.deviceType,
          }),
          computed: {
            noSafeBottomPx() {
              return this.noSafeBottom + "px";
            },
          },
          created() {
            a.isSwitchTab().then((t) => {
              t &&
                ((this.popupBottom = 49),
                (this.noSafeBottom = this.safeBottom ? 83 : 49));
            });
          },
          ud: !0,
        },
        s = o("9ZMt");
      e.default = s.default.component(i);
    },
  })
);
