var r = require("~/r");
r("Vior", {
  Vior: function (r, o) {
    Page({
      onLoad(r) {
        getApp().onPageNotFound({ path: this.route, query: r });
      },
    });
  },
});
