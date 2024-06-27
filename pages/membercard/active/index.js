var r = require("~/r");
r("FgUL", {
  FgUL: function (r, e) {
    Page({
      onLoad(r) {
        getApp().onPageNotFound({ path: this.route, query: r });
      },
    });
  },
});
