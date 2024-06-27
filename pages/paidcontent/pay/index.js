var r = require("~/r");
r("1leC", {
  "1leC": function (e, r) {
    Page({
      onLoad(e) {
        getApp().onPageNotFound({ path: this.route, query: e });
      },
    });
  },
});
