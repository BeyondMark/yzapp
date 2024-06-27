"use strict";
var r = require("~/r");
r("ngzr", {
  Qwxn: function (e, t, r) {
    t.a = Behavior({
      properties: {
        appId: String,
        goodsInfo: { type: Object, value: {} },
        infoData: { type: Object, value: {} },
        goodsIndex: Number,
        layout: { type: Number, value: 0 },
        sizeType: { type: Number, value: 0 },
        redirectType: { type: Number, value: 1 },
        extraData: { type: Object, value: {} },
        textStyleType: { type: Number, value: 1 },
        textAlignType: { type: String, value: "left" },
      },
    });
  },
  ngzr: function (e, t, r) {
    r.r(t);
    var a = r("Qwxn");
    Component({ behaviors: [a.a], options: { addGlobalClass: !0 } });
  },
});
