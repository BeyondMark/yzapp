var r = require("~/r");
r("ztRr", {
  ztRr: function (r, t) {
    Page({
      onLoad(r) {
        getApp().onPageNotFound({ path: this.route, query: r });
      },
    });
  },
});
