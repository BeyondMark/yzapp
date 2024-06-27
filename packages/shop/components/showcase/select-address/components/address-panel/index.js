var r = require("~/r");
r("we3w", {
  we3w: function (e, d) {
    Component({
      properties: {
        addresses: { type: Array, value: [] },
        isSelectedId: Number,
        themeMainColor: String,
      },
      methods: {
        clickNewAddress() {
          this.triggerEvent("clickNewAddress");
        },
        handleEditAddress(e) {
          var { detail: d } = e;
          this.triggerEvent("handleEditAddress", d);
        },
        handleSelectAddress(e) {
          var { detail: d } = e;
          this.data.isSelectedId != d.id &&
            this.triggerEvent("handleSelectAddress", d);
        },
      },
    });
  },
});
