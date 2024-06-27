var r = require("~/r");
r("NL1P", {
  NL1P: function (r, e) {
    Page({
      onLoad(r) {
        getApp().onPageNotFound({ path: this.route, query: r });
      },
    });
  },
});
