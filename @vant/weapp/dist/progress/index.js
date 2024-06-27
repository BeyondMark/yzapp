"use strict";
var r = require("~/r");
r(
  "MClr",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    MClr: function (t, e, r) {
      r.r(e);
      var i = r("py6f"),
        o = r("kFi4"),
        s = r("6MKc");
      Object(i.a)({
        props: {
          inactive: Boolean,
          percentage: { type: Number, observer: "setLeft" },
          pivotText: String,
          pivotColor: String,
          trackColor: String,
          showPivot: { type: Boolean, value: !0 },
          color: { type: String, value: o.a },
          textColor: { type: String, value: "#fff" },
          strokeWidth: { type: null, value: 4 },
        },
        data: { right: 0 },
        mounted() {
          this.setLeft();
        },
        methods: {
          setLeft() {
            Promise.all([
              Object(s.d)(this, ".van-progress"),
              Object(s.d)(this, ".van-progress__pivot"),
            ]).then((t) => {
              var [e, r] = t;
              e &&
                r &&
                this.setData({
                  right: (r.width * (this.data.percentage - 100)) / 100,
                });
            });
          },
        },
      });
    },
  })
);
