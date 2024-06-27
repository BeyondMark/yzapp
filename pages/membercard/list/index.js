var r = require("~/r");
r("wbWa", {
  wbWa: function (r, a) {
    Page({
      onLoad(r) {
        getApp().onPageNotFound({ path: this.route, query: r });
      },
    });
  },
});
