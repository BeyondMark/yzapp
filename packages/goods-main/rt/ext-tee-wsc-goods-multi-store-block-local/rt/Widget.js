"use strict";
var r = require("~/r");
r(
  "bFu6",
  Object.assign({}, require("~/v.js").modules, {
    bFu6: function (e, t, s) {
      s.r(t);
      var a = s("Fcif"),
        i = s("YeA1"),
        o = {
          name: "multi-store-block",
          data: () => ({
            themeCSS: "",
            pageStyleCSS: "",
            multistore: {},
            showRecommend: !1,
            alias: "",
          }),
          computed: {
            themeVars() {
              return this.themeCSS + this.pageStyleCSS;
            },
            layoutStyle() {
              return "margin-bottom: " + this.recommendBottom;
            },
            availableStores() {
              var { salableStores: e = [] } = this.multistore || {};
              return this.multistore.asyncGetLocationFinished ? e : [];
            },
          },
          created() {
            Object(i.b)(this, [
              "themeCSS",
              "multistore",
              "alias",
              "pageStyleCSS",
            ]);
          },
          methods: {
            jumpLink(e) {
              var { query: t } = e;
              this.ctx.dmc.redirectTo(
                "GoodsDetail",
                Object(a.a)({}, t, { alias: this.alias })
              );
            },
            toggleRecommend() {
              this.showRecommend = !this.showRecommend;
            },
          },
          ud: !0,
        },
        r = s("9ZMt");
      t.default = r.default.component(o);
    },
  })
);
