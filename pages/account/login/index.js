var r = require("~/r");
r("7ai7", {
  "7ai7": function (r, a) {
    Page({
      onLoad(r) {
        getApp().onPageNotFound({ path: this.route, query: r });
      },
    });
  },
});
