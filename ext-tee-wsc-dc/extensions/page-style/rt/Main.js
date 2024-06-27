"use strict";
var r = require("~/r");
r(
  "7/iR",
  Object.assign({}, require("~/v.js").modules, {
    "7/iR": function (t, e, a) {
      a.r(e);
      var c = a("9ZMt"),
        i = {
          created() {
            var { pageStyleCSS: t } = this.ctx.data,
              { setPageStyle: e } = this.$root;
            e && t && e(t),
              (this.unwatchCSS = this.ctx.watch("themeCSS", (t) => {
                e && e(t);
              })),
              (this.unwatchIcon = this.ctx.watch("themeIcon", (t) => {
                t &&
                  t.url &&
                  (this.loadIcon('url("' + t.url + '")'),
                  e("--van-icon-font-family:theme-icon;"));
              }));
          },
          destroyed() {
            this.unwatchCSS(), this.unwatchIcon();
          },
          methods: {
            loadIcon(t) {
              if (t) {
                c.default.$native.loadFontFace({
                  family: "theme-icon",
                  source: t,
                });
              }
            },
          },
          ud: !0,
        };
      e.default = c.default.component(i);
    },
  })
);
