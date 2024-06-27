"use strict";
var r = require("~/r");
r(
  "nOhj",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    kv38: function (t, e, o) {
      var a = o("8B9M"),
        i = Object(a.a)();
      e.a = Behavior({
        data: {
          popupBottom: 0,
          noSafeBottom: 0,
          authorizePopupCustomStyle: "",
          safeBottom: "iPhone-X" === i.deviceType,
        },
        attached() {
          i.isSwitchTab("", !0).then((t) => {
            t &&
              this.setData({
                popupBottom: 49,
                authorizePopupCustomStyle: "",
                noSafeBottom: this.data.safeBottom ? 83 : 49,
              });
          });
        },
      });
    },
    nOhj: function (t, e, o) {
      o.r(e);
      var a = o("kv38");
      Component({
        properties: {
          businessTime: String,
          isMultiStore: { type: Boolean, value: !0 },
          isFill: { type: Boolean, value: !1 },
        },
        behaviors: [a.a],
      });
    },
  })
);
