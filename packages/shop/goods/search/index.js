var r = require("~/r");
r("oM73", {
  oM73: function (o, r) {
    Page({
      onLoad(o) {
        getApp().onPageNotFound({ path: this.route, query: o });
      },
    });
  },
});
