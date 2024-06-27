var r = require("~/r");
r("RlB7", {
  RlB7: function (r, e) {
    Page({
      onLoad(r) {
        getApp().onPageNotFound({ path: this.route, query: r });
      },
    });
  },
});
