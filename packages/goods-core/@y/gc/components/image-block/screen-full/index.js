"use strict";
var r = require("~/r");
r(
  "njOs",
  Object.assign({}, require("~/v.js").modules, {
    njOs: function (e, r, t) {
      t.r(r);
      var n = {
          name: "ScreenFull",
          props: {
            isFullscreen: { type: Boolean },
            navRect: { type: Object },
            allPictures: { type: Array },
            isVideoCurrent: { type: Boolean },
            isVideoStopped: { type: Boolean },
            current: { type: Number },
            goodsBaseInfo: { type: Object },
            currentSkuKey: { type: String },
          },
          ud: !0,
        },
        o = t("9ZMt");
      r.default = o.default.component(n);
    },
  })
);
