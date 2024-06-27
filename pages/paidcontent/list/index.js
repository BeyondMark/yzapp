var r = require("~/r");
r("hwKm", {
  hwKm: function (r, e) {
    Page({
      onLoad(r) {
        getApp().onPageNotFound({ path: this.route, query: r });
      },
    });
  },
});
