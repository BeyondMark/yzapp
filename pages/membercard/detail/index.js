var r = require("~/r");
r("3b4Z", {
  "3b4Z": function (r, e) {
    Page({
      onLoad(r) {
        getApp().onPageNotFound({ path: this.route, query: r });
      },
    });
  },
});
