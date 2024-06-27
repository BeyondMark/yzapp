var r = require("~/r");
r("Q2xU", {
  Q2xU: function (t, e) {
    Component({
      properties: {
        show: { type: Boolean, default: !1 },
        customPopupStyle: { type: String, default: "" },
        customOverlayStyle: { type: String, default: "" },
        customContainerStyle: { type: String, default: "" },
      },
      data: {
        containerClass: "popup-visible-false",
        contentClass: "content-visible-false",
      },
      observers: {
        show(t) {
          if (t)
            return (
              this.setData({ containerClass: "popup-visible-true" }),
              setTimeout(() => {
                this.setData({ contentClass: "content-visible-true" });
              }, 20)
            );
          this.setData({ contentClass: "content-visible-false" });
        },
      },
      methods: {
        handleClose() {
          this.triggerEvent("close");
        },
        handleOverlayTransionEnd() {
          this.properties.show ||
            this.setData({ containerClass: "popup-visible-false" });
        },
      },
    });
  },
});
