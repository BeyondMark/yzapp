var r = require("~/r");
r("+gRK", {
  "+gRK": function (r, e) {
    Page({
      onLoad(r) {
        getApp().onPageNotFound({ path: this.route, query: r });
      },
    });
  },
});
