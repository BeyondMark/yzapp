var r = require("~/r");
r("91MK", {
  "91MK": function (d, t) {
    Page({
      data: { kdtId: 0 },
      onLoad(d) {
        this.setData({ kdtId: d.kdtId });
      },
    });
  },
});
