var r = require("~/r");
r("Zo7p", {
  Zo7p: function (o, r) {
    Page({
      onLoad(o) {
        getApp().onPageNotFound({ path: this.route, query: o });
      },
    });
  },
});
