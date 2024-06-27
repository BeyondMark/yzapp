"use strict";
var r = require("~/r");
r(
  "IkqO",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    IkqO: function (e, t, s) {
      s.r(t);
      var l = s("u8kV");
      Object(l.b)({
        externalClasses: ["custom-class"],
        options: { multipleSlots: !0 },
        properties: {
          show: { type: Boolean, value: !1 },
          useHeaderSlot: { type: Boolean, value: !1 },
          title: { type: String, value: "任务" },
          btnText: { type: String, value: "我知道了" },
          showBtn: { type: Boolean, value: !0 },
        },
        methods: {
          onClose() {
            this.triggerEvent("close");
          },
          handleClick() {
            this.onClose(), this.triggerEvent("click");
          },
        },
      });
    },
  })
);
