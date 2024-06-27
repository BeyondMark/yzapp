var r = require("~/r");
r("dNmK", {
  dNmK: function (r, e) {
    Page({
      onLoad(r) {
        getApp().onPageNotFound({ path: this.route, query: r });
      },
    });
  },
});
