"use strict";
var r = require("~/r");
r(
  "AVy0",
  Object.assign({}, require("../../../../../c.js").modules, {
    AVy0: function (e, r, t) {
      t.r(r);
      var a = t("6ZX2");
      Object(a.a)({
        props: {
          tc: String,
          a: Object,
          i: Object,
          r: Object,
          info: Object,
          sg: Boolean,
          pi: Boolean,
        },
        computed: {
          sr: function () {
            var e = this.data,
              r = e.r,
              t = e.a;
            return (
              r &&
              r.channelNotice &&
              t &&
              !t.selectedBar &&
              t.payChannel !== r.payChannel
            );
          },
        },
      });
    },
  })
);
