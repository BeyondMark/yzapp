"use strict";
var r = require("~/r");
r(
  "cJIm",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    cJIm: function (e, o, a) {
      a.r(o);
      var t = a("Fcif"),
        s = a("u8kV"),
        i = a("svh/"),
        r = a("2wjL"),
        h = a("DXKY"),
        n = a("YehF"),
        p = a("Sh92"),
        d = getApp();
      var c = getApp(),
        u = "shop:info:change";
      Object(s.b)({
        properties: {
          info: { type: Object },
          pageOptions: Object,
          isImmersion: { type: Boolean, default: !1 },
          immersionUpShow: { type: Boolean, default: !1 },
          showInNavigation: { type: Boolean, default: !1 },
          useImmersion: { type: Boolean, default: !1 },
          tableBooking: Boolean,
        },
        observers: {
          info(e) {
            if (this.data.needChangeShowTopBar) {
              var o = e.showBtn || !this.data.hqTopNavHidden;
              this.setYZData({ showTopBar: o });
            }
          },
        },
        store: () => c.$store,
        data: {
          showTopBar: !1,
          hqTopNavHidden: !1,
          needChangeShowTopBar: !1,
          userLocation: "",
          shopName: "",
          shopLogo: "",
        },
        mapData: Object(t.a)({}, Object(i.h)("/", ["shop"])),
        ready() {
          var e = this,
            o = function (o) {
              void 0 === o && (o = {});
              var { shop_name: a, logo: t } = o || {};
              a && t && e.setYZData({ shopName: a, shopLogo: t });
            };
          h.a.off(u, o), h.a.on(u, o);
          var a,
            { shopMetaInfo: t } = this.data.shop,
            s = Object(n.b)(t),
            i = Object(n.g)(t);
          s || i
            ? (this.setYZData({ needChangeShowTopBar: !0 }),
              ((a = "hide_top_bar"),
              d.request({
                path: "/wscshop/shop/getHqShopSettings.json",
                data: { keys: a },
              })).then((e) => {
                var o = !1,
                  a = !e.hide_top_bar || Boolean(+e.hide_top_bar);
                (!this.properties.info.showBtn && a) || (o = !0),
                  this.setYZData({ showTopBar: o, hqTopNavHidden: a });
              }),
              this.enterShopVisitConfig())
            : this.setYZData({ showTopBar: !0 });
        },
        methods: {
          handleChooseShop() {
            c.logger.log({
              et: "click",
              ei: "change_store_weapp",
              en: "切换店铺",
              si: c.getKdtId(),
            });
            var e = getCurrentPages(),
              o = e[e.length - 1],
              a = o.route,
              s = o.options || {},
              i = s.ump_alias || s.umpAlias || "",
              h = s.ump_type || s.umpType || "",
              n = h ? "umpAlias" : "location",
              { pageOptions: p } = this.data;
            p = p || {};
            var d = Object.keys(p).reduce((e, o) => {
                var a = p[o];
                return a && (e[o] = a), e;
              }, {}),
              u = r.a.add(a, Object(t.a)({}, s, d));
            c.getShopInfo().then(() => {
              var e =
                "/packages/shop-select/chain-store/shopselect/index?dbKey=" +
                n +
                "&redirectUrl=" +
                encodeURIComponent("/" + u);
              (e = r.a.add(e, { umpAlias: i, umpType: h })),
                wx.reLaunch({ url: e });
            });
          },
          goHome() {
            wx.reLaunch({ url: "/pages/home/dashboard/index" });
          },
          enterShopVisitConfig() {
            var { showUserLocation: e } = this.properties.info;
            e
              ? p.d
                  .getLocation()
                  .then((e) => {
                    var { address: o } = e;
                    this.setYZData({ userLocation: o });
                  })
                  .catch(() => {
                    this.setYZData({ userLocation: "" });
                  })
              : this.setYZData({ userLocation: "" });
          },
        },
      });
    },
  })
);
