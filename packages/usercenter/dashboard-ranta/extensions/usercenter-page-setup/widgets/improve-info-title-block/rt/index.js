"use strict";
var r = require("~/r");
r(
  "rFuU",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    rFuU: function (e, t, r) {
      r.r(t);
      var l = r("7/pW"),
        a = r("dWkE"),
        d = r("QLod");
      Object(l.a)({
        properties: {
          levelGrowth: { type: Object, default: {} },
          hiddenInfoCompleted: Boolean,
          kdtId: { type: Number, value: 0 },
          userAgreePrivacy: { type: Boolean, default: !1 },
          isImmersive: { type: Boolean, default: !1 },
        },
        data: { immersiveInfoCompletedStyle: "top: " + Object(d.e)() + "px;" },
        methods: {
          handleCompleteInfoClick() {
            Object(a.a)("/wscuser/levelcenter/fill", {
              query: {
                kdt_id: this.data.kdtId,
                alias: this.data.levelGrowth.freeLevelGroupAlias,
              },
            });
          },
        },
      });
    },
  })
);
