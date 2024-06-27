"use strict";
var r = require("~/r");
r(
  "nEOG",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      nEOG: function (e, r, t) {
        t.r(r);
        var s = t("rqVN"),
          a = t("e33J"),
          o = t("Kf04");
        Object(s.b)({
          behaviors: [o.a, a.a],
          properties: {
            noteData: Object,
            thumbsStatus: { type: Number, observer: "thumbsStatusUpdate" },
            featureComponents: {
              type: Array,
              observer(e) {
                if (e.length) {
                  this.firstFlag = !0;
                  var r = [];
                  e.forEach((e) => {
                    var t = e.itemIds;
                    "goods" === e.type &&
                      Array.isArray(t) &&
                      r.push(t.join().split());
                  }),
                    r.length && this.getNoteGoodsByIds(r);
                }
              },
            },
          },
          attached() {},
        });
      },
    }
  )
);
