"use strict";
var r = require("~/r");
r(
  "fTAx",
  Object.assign({}, require("~/v.js").modules, {
    fTAx: function (t, e, i) {
      i.r(e);
      var r = i("MLLI"),
        { windowWidth: a } = Object(r.b)(),
        h = {
          props: { imageList: { type: Array, default: () => [] } },
          data() {
            var t = this.getSwipeWidth();
            return {
              height: this.getSwipeHeight(t, this.imageList),
              pid: "timeline-image-swipe-" + 10 * Math.random(),
            };
          },
          methods: {
            getSwipeWidth() {
              var t = a;
              return Math.min(t, 540);
            },
            getSwipeHeight(t, e) {
              var i = 3 / 4,
                r = e[0] || {};
              return (
                r.height && r.width && (i = r.height / r.width),
                (i = Math.min(2, i)),
                (i = Math.max(0.4, i)),
                Math.floor(t * i)
              );
            },
          },
        },
        d = i("9ZMt");
      e.default = d.default.component(h);
    },
  })
);
