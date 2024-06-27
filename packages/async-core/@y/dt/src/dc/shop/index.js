"use strict";
var r = require("~/r");
r(
  "288a",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "288a": function (t, e, o) {
        o.r(e);
        var r = o("9ZMt"),
          i = o("mztD"),
          a = o("EqB2"),
          u = o("C7a+"),
          { useTpx: g } = r.default.style,
          s = {
            name: "DcShop",
            mixins: [Object(a.a)({ optDesc: u.a })],
            computed: {
              heightStyle() {
                return "height: " + g(this.opt.height);
              },
              bottomStyle() {
                return "bottom: " + g(this.opt.bottom);
              },
              bannerImage() {
                return (
                  "background-image: url(" +
                  Object(i.a)(this.opt.bgImage, "!730x0.jpg") +
                  ");"
                );
              },
              logoImage() {
                return (
                  "background-image: url(" +
                  Object(i.a)(this.opt.logo, "!160x160.jpg") +
                  ");"
                );
              },
              logoBgCls() {
                return "0" === this.opt.logoBg ? "" : "has-bg";
              },
            },
            methods: {
              itemClick(t) {
                var { linkOpt: e = {} } = t;
                e.link && this.$emit("jumpToLink", e.link);
              },
            },
            ud: !0,
          };
        e.default = r.default.component(s);
      },
    }
  )
);
