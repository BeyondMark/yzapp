var r = require("~/r");
r("/6L0", {
  "/6L0": function (r, e) {
    Page({
      onLoad(r) {
        getApp().onPageNotFound({ path: this.route, query: r });
      },
    });
  },
});
