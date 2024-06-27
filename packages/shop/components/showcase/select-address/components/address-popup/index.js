var r = require("~/r");
r("Ll4e", {
  Ll4e: function (e, o) {
    Component({
      properties: {
        show: { type: Boolean, value: !1 },
        title: { type: String, value: "选择收货地址" },
      },
      methods: {
        closePopup() {
          this.triggerEvent("closePopup");
        },
      },
    });
  },
});
