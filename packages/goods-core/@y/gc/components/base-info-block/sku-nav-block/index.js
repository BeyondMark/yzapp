"use strict";
var r = require("~/r");
r(
  "+NEW",
  Object.assign({}, require("~/v.js").modules, {
    "+NEW": function (t, e, u) {
      u.r(e);
      var r = u("Fcif"),
        s = u("KEq0"),
        i = u.n(s),
        a = {
          name: "SkuNav",
          props: { opt: { type: Object, default: () => ({}) } },
          computed: {
            skuPictures() {
              return this.opt.skuPictures;
            },
            showSkuPictures() {
              return this.skuPictures.map((t) =>
                Object(r.a)({}, t, { url: i()(t.url, "small") })
              );
            },
          },
          methods: {
            selectSkuNav(t) {
              this.$emit("update", t);
            },
          },
          ud: !0,
        },
        c = u("9ZMt");
      e.default = c.default.component(a);
    },
  })
);
