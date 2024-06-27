var r = require("~/r");
r("Ii1h", {
  Ii1h: function (r, e) {
    Page({
      onLoad(r) {
        getApp().onPageNotFound({ path: this.route, query: r });
      },
    });
  },
});
