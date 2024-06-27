var r = require("~/r");
r("6Qvx", {
  "6Qvx": function (r, e) {
    Page({
      onLoad(r) {
        getApp().onPageNotFound({ path: this.route, query: r });
      },
    });
  },
});
