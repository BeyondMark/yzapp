"use strict";
var r = require("~/r");
r(
  "LryM",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      LryM: function (e, t, i) {
        i.r(t);
        var r = i("mztD"),
          a = i("R7Zb"),
          s = i("wN6D"),
          g = i("ZQSd"),
          m = {
            name: "ShowcaseVenueBanner",
            mixins: [Object(a.a)({ optDesc: g.a })],
            computed: {
              showTitle() {
                return this.opt.bgType === s.a.default;
              },
              imagesOpt() {
                return {
                  tpl: 1,
                  imgs: [
                    {
                      imageUrl: Object(r.a)(this.opt.bgImg.imageUrl),
                      imageWidth: this.opt.bgImg.width,
                      imageHeight: this.opt.bgImg.height,
                    },
                  ],
                };
              },
            },
            ud: !0,
          },
          u = i("9ZMt");
        t.default = u.default.component(m);
      },
    }
  )
);
