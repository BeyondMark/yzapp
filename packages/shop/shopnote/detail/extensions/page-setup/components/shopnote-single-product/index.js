"use strict";
var r = require("~/r");
r(
  "sp+n",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "sp+n": function (t, e, a) {
        a.r(e);
        var o = a("rqVN"),
          s = a("zMoS"),
          r = a("RY8z"),
          d = a("Kf04"),
          i = a("e33J");
        Object(o.b)({
          behaviors: [d.a, i.a],
          data: { headPhoto: "" },
          properties: {
            noteData: Object,
            noteGoodIds: Array,
            thumbsStatus: { type: Number, observer: "thumbsStatusUpdate" },
          },
          attached() {
            var t = this.data.noteGoodIds,
              e =
                Object(s.a)(this, "data.noteData.headPhoto", "") ||
                Object(s.a)(
                  this,
                  "data.noteData.noteItemsBriefInfo[0].imageUrl",
                  ""
                );
            this.setYZData({ headPhoto: e }),
              (this.firstFlag = !0),
              this.getNoteGoodsByIds(t);
          },
          methods: {
            gotoBuy() {
              var t = Object(s.a)(this.data, "goodsInfo.goods[0].url", "");
              r.a.navigate({ url: t });
            },
          },
        });
      },
    }
  )
);
