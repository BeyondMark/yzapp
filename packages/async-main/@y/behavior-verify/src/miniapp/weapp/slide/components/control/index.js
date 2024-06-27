var r = require("~/r");
r("8sr5", {
  "8sr5": function (t, e) {
    Component({
      properties: { slideData: Object, status: String, statusText: String },
      methods: {
        handleExceptionRefresh() {
          -1 !== ["limit", "exception"].indexOf(this.properties.status) &&
            this.triggerEvent("refresh");
        },
      },
    });
  },
});
