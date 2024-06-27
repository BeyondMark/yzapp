"use strict";
var r = require("~/r");
r(
  "Riz3",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      Riz3: function (t, e, a) {
        a.r(e);
        var i = a("eijD"),
          n = a("Fcif"),
          o = a("9ZMt"),
          s = a("Sh92"),
          r = a("a1Mm"),
          c = a("fDQw"),
          l = a("wNgt"),
          d = o.default.getGlobal("logger"),
          g = {
            props: { componentData: { type: Object, default: () => ({}) } },
            data: () => ({
              hiddenCard: !1,
              storeData: {},
              containerStyle: "",
              imageHeight: 172,
            }),
            computed: {
              shopImg() {
                var {
                  componentData: { isShopImg: t },
                  storeData: { physicalPicUrls: e = [] },
                } = this;
                return t
                  ? Object(r.a)(
                      e[0] || "/wsc-minapp/icon/retail/default-shop-pic@3x.png",
                      "!960x0.png"
                    )
                  : "";
              },
              formatDistance() {
                var { distance: t } = this.storeData;
                return t >= 1 ? t + "km" : 1e3 * t + "m";
              },
            },
            created() {
              this.getStoreData(), this.initStyle(), this.initPrivateData();
            },
            methods: {
              handleLog(t, e, a, i) {
                void 0 === i && (i = {}),
                  d &&
                    d.log({
                      et: t,
                      ei: e,
                      en: a,
                      params: Object(n.a)({ component: "nearby_store" }, i),
                    });
              },
              initPrivateData() {
                this._denyAuth = !1;
              },
              getStoreData() {
                var t = this;
                return Object(i.a)(function* () {
                  var e = yield s.d.getLocation().catch(() => {
                      t._denyAuth = !0;
                    }),
                    { lat: a, lng: i } = e
                      ? Object(s.g)(+e.longitude, +e.latitude)
                      : {},
                    n = { pageSize: 1, page: 1, lat: a || 0, lon: i || 0 },
                    { items: o = [] } =
                      (yield Object(c.a)(n).catch(() => {})) || {};
                  (t.hiddenCard = o.length < 1), (t.storeData = o[0] || {});
                })();
              },
              initStyle() {
                var {
                    styleSetting: {
                      bgColor: t,
                      cardStyle: e,
                      borderRadius: a,
                      pageMargin: i,
                    },
                  } = this.componentData,
                  n = "margin: 10px " + i + "px;border-radius: " + a + "px",
                  o = "background-color: " + t + ";" + Object(l.b)(e);
                (this.containerStyle = o + n),
                  (this.imageHeight = (((351 - 2 * i) / 351) * 172).toFixed(0));
              },
              handleDistanceClick() {
                this.storeData.distance ||
                  (this.handleLog(
                    "click",
                    "open_setting",
                    "附近门店跳转微信设置页面"
                  ),
                  this.openSetting());
              },
              handleShopClick() {
                this._denyAuth ? this.openSetting() : this.goToMap();
              },
              openSetting() {
                this.handleLog(
                  "click",
                  "open_setting",
                  "附近门店跳转微信设置页面"
                ),
                  o.default.$native.openSetting({
                    success: (t) => {
                      var { authSetting: e } = t;
                      e["scope.userLocation"] &&
                        ((this._denyAuth = !1), this.getStoreData());
                    },
                  });
              },
              handleNavigatorClick() {
                this.handleLog(
                  "click",
                  "navigate_store_list",
                  "附近门店跳转门店列表"
                ),
                  o.default.navigate({
                    type: "navigateTo",
                    url: "packages/shop/physical-store/index",
                  });
              },
              goToMap() {
                var {
                  storeData: { location: t, storeName: e, storeAddress: a },
                } = this;
                if (t) {
                  var { longitude: i, latitude: n } = Object(s.f)(
                    +t.lon,
                    +t.lat
                  );
                  this.handleLog("click", "open_map", "附近门店打开地图"),
                    o.default.$native.openLocation({
                      longitude: i,
                      latitude: n,
                      name: e,
                      address: a,
                    });
                }
              },
            },
            ud: !0,
          };
        e.default = o.default.component(g);
      },
    }
  )
);
