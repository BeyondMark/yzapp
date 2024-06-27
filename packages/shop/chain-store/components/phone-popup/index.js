var r = require("~/r");
r("69m7", {
  "69m7": function (e, r) {
    Component({
      properties: {
        show: { type: Boolean, value: !1 },
        customerServicePhoneNumber: String,
        customerServiceAreaCode: String,
      },
      data: { actions: [{ name: "呼叫" }] },
      methods: {
        onSelect() {
          var { customerServicePhoneNumber: e, customerServiceAreaCode: r } =
            this.properties;
          e && wx.makePhoneCall({ phoneNumber: r + e });
        },
        onClose() {
          this.triggerEvent("onClosePopup");
        },
      },
    });
  },
});
