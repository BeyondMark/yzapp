var r = require("~/r");
r("Z5sF", {
  Z5sF: function (r, e) {
    Page({
      onLoad(r) {
        getApp().onPageNotFound({ path: this.route, query: r });
      },
    });
  },
});
