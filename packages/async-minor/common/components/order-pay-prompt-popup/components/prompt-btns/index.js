var r = require("~/r");
r("y8s1", {
  y8s1: function (e, t) {
    Component({
      properties: {},
      methods: {
        payHandle() {
          this.triggerEvent("btnevent", "pay");
        },
        laterHandle() {
          this.triggerEvent("btnevent", "close");
        },
      },
    });
  },
});
