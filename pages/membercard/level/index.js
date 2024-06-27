var r = require("~/r");
r("Mh+k", {
  "Mh+k": function (r, e) {
    Page({
      onLoad(r) {
        getApp().onPageNotFound({ path: this.route, query: r });
      },
    });
  },
});
