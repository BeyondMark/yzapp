var r = require("~/r");
r("4cq7", {
  "4cq7": function (r, e) {
    Page({
      onLoad(r) {
        getApp().onPageNotFound({ path: this.route, query: r });
      },
    });
  },
});
