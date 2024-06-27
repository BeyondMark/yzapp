"use strict";
var r = require("~/r");
r("dEtN", {
  dEtN: function (t, e, o) {
    o.r(e);
    Component({
      data: { colors: { tagTextColor: "#ee0a24", tagBgColor: "#ffe2e6" } },
      properties: {
        show: { type: Boolean, value: !1 },
        goodsInfo: Object,
        maxCount: { type: Number, value: 1 },
      },
      observers: {
        goodsInfo(t) {
          void 0 === t && (t = {});
          var { showDefaultTags: e = [], showTags: o = [] } = t;
          this.setData({
            normalTags: o.filter((t) => t).slice(0, this.data.maxCount),
            defaultTags: e.filter((t) => t).slice(0, this.data.maxCount),
          });
        },
      },
    });
  },
});
