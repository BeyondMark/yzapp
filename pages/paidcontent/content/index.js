var r = require("~/r");
r("tIqf", {
  tIqf: function (r, t) {
    Page({
      onLoad(r) {
        getApp().onPageNotFound({ path: this.route, query: r });
      },
    });
  },
});
