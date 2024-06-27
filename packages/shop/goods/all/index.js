var r = require("~/r");
r("Tc/S", {
  "Tc/S": function (r, e) {
    Page({
      onLoad(r) {
        getApp().onPageNotFound({ path: this.route, query: r });
      },
    });
  },
});
