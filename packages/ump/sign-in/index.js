var r = require("~/r");
r("LeSx", {
  LeSx: function (e, r) {
    Page({
      onLoad(e) {
        getApp().onPageNotFound({ path: this.route, query: e });
      },
    });
  },
});
