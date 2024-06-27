"use strict";
var r = require("~/r");
r(
  "R9ge",
  Object.assign({}, require("~/v.js").modules, {
    R9ge: function (o, a, e) {
      e.r(a);
      var t = e("YeA1"),
        i = getApp(),
        s = {
          data() {
            var o, a;
            return {
              featureComLoaded: !1,
              isShowLoading: !0,
              coverAdLoaded: !1,
              globalCustomLoading: !0,
              appLogo:
                null == (o = __wxConfig) || null == (a = o.accountInfo)
                  ? void 0
                  : a.icon,
              isRetailApp: i.globalData.isRetailApp,
              isChainStore: i.isChainStoreSync(),
            };
          },
          created() {
            this.setCustomLoading(),
              i.on("app:loading:change", this.setCustomLoading),
              Object(t.b)(this, [
                "featureComLoaded",
                "isShowLoading",
                "coverAdLoaded",
              ]);
          },
          beforeDestroy() {
            i.off("app:loading:change", this.setCustomLoading);
          },
          methods: {
            setCustomLoading() {
              this.globalCustomLoading = i.globalData.globalCustomLoading;
            },
          },
          ud: !0,
        },
        d = e("9ZMt");
      a.default = d.default.component(s);
    },
  })
);
