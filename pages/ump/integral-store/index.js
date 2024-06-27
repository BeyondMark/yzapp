var r = require("~/r");
r("tyV2", {
  tyV2: function (r, t) {
    Page({
      onLoad(r) {
        getApp().onPageNotFound({ path: this.route, query: r });
      },
    });
  },
});
