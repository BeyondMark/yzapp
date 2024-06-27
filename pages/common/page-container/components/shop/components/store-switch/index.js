"use strict";
var r = require("~/r");
r(
  "WzNx",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    WzNx: function (e, t, i) {
      i.r(t);
      var o = i("2ktG"),
        s = i("rqVN"),
        r = Object(o.a)(),
        a = getApp(),
        n = "定位失败，请重试";
      Object(s.b)({
        properties: {
          storeName: String,
          storeImage: String,
          storeSwitch: Boolean,
          buyerAddress: String,
          hideTopBar: Boolean,
        },
        data: {
          showTopBar: !0,
          hideStore: !1,
          isHomePage: !1,
          poiInfo: n,
          iconUrl: "https://b.yzcdn.cn/public_files/2018/08/27/",
        },
        attached() {
          a.getOfflineId()
            ? this.initHideStore()
            : this.once("app:fetchedshopinfo", () => this.initHideStore());
        },
        methods: {
          initHideStore() {
            var e = a.getShopInfoSync().openHideStore || !1,
              t = a.getUserInfoSync("poi.title"),
              i = !1,
              o = getCurrentPages(),
              s = o[o.length - 1];
            /packages\/(ext-)?home\/dashboard\/index/.test(s.route) && (i = !0),
              e &&
                i &&
                !t &&
                a
                  .request({
                    path: "/wscshop/showcase/getPOIInfo.json",
                    data: { kdt_id: a.getKdtId(), store_id: a.getOfflineId() },
                  })
                  .then((e) => {
                    if (e) this.setYZData({ poiInfo: e.address || n });
                    else {
                      var t = r.get("multistore:user:poi");
                      t && this.setYZData({ poiInfo: t });
                    }
                  }),
              this.setYZData({ hideStore: e, isHomePage: i, poiInfo: t || n });
          },
        },
      });
    },
  })
);
