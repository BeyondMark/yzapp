"use strict";
var r = require("~/r");
r(
  "ZSDX",
  Object.assign({}, require("~/v.js").modules, {
    ZSDX: function (t, s, e) {
      e.r(s);
      var o = e("US/N"),
        h = e("YeA1"),
        i = {
          name: "buyer-show-block",
          data: () => ({
            buyerShowList: [],
            count: 0,
            kdtId: 0,
            alias: "",
            shopConfig: {},
            pageStyleCSS: "",
          }),
          computed: {
            showBuyerShows() {
              return !!this.shopConfig.showBuyerShows;
            },
          },
          watch: {
            showBuyerShows(t) {
              t && this.getBuyerShows(this.alias);
            },
          },
          created() {
            Object(h.b)(
              this,
              ["alias", "kdtId", "shopConfig", "pageStyleCSS"],
              this
            );
          },
          methods: {
            getBuyerShows(t) {
              Object(o.default)({
                path: "/wscgoods/buyer-show-info.json",
                data: { alias: t },
                options: { useCdn: !0 },
                withCredentials: !0,
              }).then((t) => {
                (this.buyerShowList = t.list), (this.count = t.count);
              });
            },
          },
          ud: !0,
        },
        a = e("9ZMt");
      s.default = a.default.component(i);
    },
  })
);
