"use strict";
var r = require("~/r");
r(
  "n4/J",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "n4/J": function (a, e, t) {
      t.r(e);
      var r = t("2wjL"),
        s = t("lZq6"),
        i = t("GXW/");
      Component({
        behaviors: [s.a, i.a],
        data: { src: "" },
        attached() {
          var {
              componentData: { data: a = {} },
            } = this.data,
            { images: e = [] } = a,
            t = e.length > 0 ? e[0].image_url : "";
          this.setData({ src: t });
        },
        methods: {
          jumpToGiftPage() {
            var a = this.getBannerId();
            wx.navigateTo({
              url: r.a.add("/packages/ump/gift/cart/index", { banner_id: a }),
            });
          },
        },
      });
    },
  })
);
