"use strict";
var r = require("~/r");
r(
  "95NW",
  Object.assign({}, require("~/v.js").modules, {
    "95NW": function (e, t, a) {
      a.r(t);
      var s = a("YeA1"),
        o = {
          data: () => ({
            featurePageBgColor: "",
            isFromTimeline: !1,
            isWebviewFeature: !1,
            copyrightBgColor: "f9f9f9",
            showCustomTabBar: !1,
          }),
          created() {
            Object(s.b)(this, [
              "featurePageBgColor",
              "isFromTimeline",
              "isWebviewFeature",
              "copyrightBgColor",
            ]);
            var e = this.$getPageRoute();
            (this.showCustomTabBar = ![
              "pages/home/dashboard/index",
              "pages/tab/one/index",
              "pages/tab/two/index",
              "pages/tab/three/index",
            ].includes(e)),
              (this.buyButtonStyleUnWatch = this.ctx.watch(
                "buyButtonStyle",
                this.handleBuyButtonStyle
              ));
          },
          mounted() {
            var e;
            this.ctx.data.isHomePage &&
              (null == (e = this._$native.getTabBar()) ||
                e.setData({ selectedIndex: 0 }));
          },
          destroyed() {
            this.buyButtonStyleUnWatch && this.buyButtonStyleUnWatch();
          },
          methods: {
            handleBuyButtonStyle(e) {
              var { setPageStyle: t } = this.$root;
              t && e && t(e);
            },
            share() {
              this.ctx.event.emit("share:show");
            },
          },
          ud: !0,
        },
        i = a("9ZMt");
      t.default = i.default.component(o);
    },
  })
);
