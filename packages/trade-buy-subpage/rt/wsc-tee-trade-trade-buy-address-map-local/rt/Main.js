"use strict";
var r = require("~/r");
r(
  "9X90",
  Object.assign({}, require("~/v.js").modules, {
    "/+Uc": function (e, t, i) {
      i.d(t, "b", function () {
        return n;
      }),
        i.d(t, "a", function () {
          return r;
        });
      var o = i("US/N"),
        a = i("Uol7");
      var s = null;
      function n() {
        return null == s
          ? Object(o.requestUseCdn)({
              origin: "cashier",
              withCredentials: !0,
              method: "GET",
              path: "/wsctrade/uic/address/getAllRegion.json",
              data: { showOversea: !0 },
              config: a.a,
            }).then(function (e) {
              return (s = e), e;
            })
          : Promise.resolve(s);
      }
      function r(e) {
        return (
          (e = String(e)),
          n().then(function (t) {
            var i = t.county_list,
              o = t.city_list,
              a = t.province_list[1e4 * Math.floor(e / 1e4)] || "",
              s = o[100 * Math.floor(e / 100)] || "",
              n = i[e] || "";
            return "9" === e[0]
              ? { country: s, province: n, areaCode: e }
              : { province: a, city: s, county: n, areaCode: e };
          })
        );
      }
    },
    "4kmb": function (e, t, i) {
      i.r(t),
        i.d(t, "ADDRESS_TYPE", function () {
          return o;
        }),
        i.d(t, "ADDRESS_SOURCE", function () {
          return a;
        }),
        i.d(t, "ADDRESS_POI_TYPE", function () {
          return s;
        });
      var o = { INPUT: 1, POI: 2 },
        a = { YOUZAN: 1, WECHAT: 2 },
        s = { QQ: 1, BAIDU: 2, AMAP: 3 };
    },
    "7lfQ": function (e, t, i) {
      i.d(t, "a", function () {
        return a;
      });
      var o = i("9ZMt");
      t.b = function (e) {
        return new Promise(function (t, i) {
          o.default.$native.getSetting({
            success: function (a) {
              a.authSetting[e]
                ? t()
                : o.default.$native.authorize({
                    scope: e,
                    success: t,
                    fail: i,
                  });
            },
            fail: i,
          });
        });
      };
      var a = function (e) {
        return new Promise(function (t, i) {
          o.default.$native.getSetting({
            success: function (i) {
              i.authSetting[e] ? t(!0) : t(!1);
            },
            fail: i,
          });
        });
      };
    },
    "9X90": function (e, t, i) {
      i.r(t);
      var o = i("eijD"),
        a = i("Fcif"),
        s = i("mztD"),
        n = i("9ZMt"),
        r = i("AGZf"),
        c = i("YeA1"),
        l = i("/+Uc"),
        h = i("4kmb"),
        d = i("UlHH"),
        u = i("U6vv"),
        p = i("7lfQ"),
        g = {
          data: () => ({
            city: "",
            pois: [],
            showAuthDialog: !1,
            located: !0,
            loading: !1,
            showArea: !1,
            pickerTitle: "",
            countyOptions: [],
            themeColors: {},
            markers: [],
            showLabel: !1,
            markerLabel: "",
            longitude: "",
            latitude: "",
            showMap: !0,
            forcePoiSelect: !1,
            isRetryLocation: !1,
            iconHost: "//img01.yzcdn.cn/public_files",
          }),
          watch: {
            showMap(e) {
              e &&
                !this.mapContext &&
                this.$nextTick(() => {
                  this.initMapContext();
                });
            },
          },
          beforeMount() {
            Object(c.b)(this, ["themeColors"]);
            var { forcePoiSelect: e } = this.$getPageQuery();
            (this.forcePoiSelect = 1 == +e),
              this.setMarker(),
              this.init(),
              Object(c.d)(this, {
                addressMapPageShow: () => {
                  this.onPageShow();
                },
              }),
              Object(l.b)().then((e) => {
                this.areaList = e;
              });
          },
          mounted() {
            this.$nextTick(() => {
              this.initMapContext();
            });
          },
          methods: {
            onPageShow() {
              var { located: e, showAuthDialog: t } = this;
              !e &&
                t &&
                (this.authorizeLocation(!0).then(() => {
                  this.setAuthStatus(!0),
                    this.setMarker(),
                    this.onCloseAuthDialog();
                }),
                this.init());
            },
            setMarker() {
              this.getLocation().then((e) => {
                this.markers = [
                  Object(a.a)({}, e, {
                    iconPath: Object(s.a)(
                      "public_files/2019/05/23/a10e32e4bfeae621727c760f97274654.png"
                    ),
                    width: "22px",
                    height: "22px",
                    anchor: { x: 0.5, y: 0.5 },
                  }),
                ];
              });
            },
            init() {
              this.resetPosition();
            },
            initMapContext() {
              var e = this.createSelectorQuery();
              e.select("#map").fields({ context: !0 }),
                e.exec((e) => {
                  var t;
                  this.mapContext = null == (t = e[0]) ? void 0 : t.context;
                });
            },
            resetPosition() {
              var e = this;
              return Object(o.a)(function* () {
                e.getLocation()
                  .then((t) => {
                    e.$nextTick(() => {
                      e.setAuthStatus(!0),
                        (e.latitude = t.latitude),
                        (e.longitude = t.longitude);
                      try {
                        var i;
                        null == (i = e.mapContext) ||
                          i.moveToLocation({
                            longitude: t.longitude,
                            latitude: t.latitude,
                          });
                      } catch (e) {}
                    }),
                      e.updatePoi(t);
                  })
                  .catch((t) => {
                    e.setAuthStatus(!1), e.onUpdatePoi([]);
                  });
              })();
            },
            regionChange(e) {
              if ("begin" === e.type) this.showLabel = !1;
              else if ("end" === e.type) {
                var t;
                null == (t = this.mapContext) ||
                  t.getCenterLocation({
                    success: (e) => {
                      if (e && e.longitude && e.latitude) {
                        var { longitude: t, latitude: i } = this;
                        t === e.longitude && i === e.latitude
                          ? (this.showLabel = !0)
                          : this.updatePoi(e);
                      }
                    },
                  });
              }
            },
            getLocation() {
              return this.authorizeLocation().then(
                () =>
                  new Promise((e, t) => {
                    this.ctx.process.invokePipe("tryLocation", {
                      success: (t, i) => e(i),
                      fail: t,
                    });
                  })
              );
            },
            authorizeLocation(e) {
              return (
                (!e && this.locationPromise) ||
                  (this.locationPromise = Object(p.b)("scope.userLocation")),
                this.locationPromise
              );
            },
            updatePoi(e) {
              var t = this;
              (this.showLabel = !0),
                (this.markerLabel = "定位中..."),
                this.onUpdatePoi([]),
                this.onSetLoading(!0),
                this.$nextTick(() => {
                  var [i] = this.ctx.process.invoke("reverseGeocoder", {
                    location: e,
                    get_poi: 1,
                    poi_options:
                      "policy=2;radius=500;page_size=20;page_index=1",
                  });
                  i.catch(() => ({})).then(function (e) {
                    var i, o, a, s, n;
                    void 0 === e && (e = {});
                    var r =
                        (null == (i = e) ||
                        null == (o = i.result) ||
                        null == (a = o.formatted_addresses)
                          ? void 0
                          : a.recommend) || "",
                      c = (
                        (null == (s = e) || null == (n = s.result)
                          ? void 0
                          : n.pois) || []
                      ).filter(
                        (e) =>
                          !t.forcePoiSelect ||
                          "地名地址:行政地名" !== e.category
                      );
                    (t.markerLabel = r),
                      t.onUpdatePoi(c || []),
                      t.onSetLoading(!1),
                      c.length || (t.showLabel = !1);
                  });
                });
            },
            onInSearch(e) {
              this.showMap = !e;
            },
            onSetLoading(e) {
              this.loading = e;
            },
            onUpdatePoi(e) {
              this.pois = e;
            },
            setAuthStatus(e) {
              this.located = e;
            },
            onReTryLocation() {
              this.onShowAuthDialog();
            },
            onShowAuthDialog() {
              (this.showAuthDialog = !0),
                setTimeout(() => {
                  this.showMap = !1;
                }, 300);
            },
            onCloseAuthDialog() {
              (this.showAuthDialog = !1),
                (this.isRetryLocation = !1),
                setTimeout(() => {
                  this.showMap = !0;
                }, 300);
            },
            selectArea(e) {
              var t = this.areaList.county_list;
              return (
                (this.pickerTitle =
                  e.province === e.city
                    ? e.province
                    : e.province + " " + e.city),
                (this.countyOptions = Object.keys(t)
                  .filter((t) => t.slice(0, 4) === e.areaCode.slice(0, 4))
                  .map((i) => ({
                    text: t[i],
                    value: Object(a.a)({}, e, { county: t[i], areaCode: i }),
                  }))),
                (this.showArea = !0),
                new Promise((e, t) => {
                  (this.selectAreaResolve = e), (this.selectAreaReject = t);
                })
              );
            },
            onConfirm(e) {
              (this.showArea = !0), this.selectAreaResolve(e.value.value);
            },
            onCancel() {
              this.showArea = !1;
            },
            onSelectPoi(e) {
              var t = this.pois[e];
              this.onSelectAddress(Object(a.a)({}, t, t.ad_info));
            },
            onSelectAddress(e) {
              var { gcjToBaidu: t, triggerEvent: i } = this.ctx.lambdas,
                {
                  ADDRESS_POI_TYPE: o,
                  ADDRESS_SOURCE: s,
                  ADDRESS_TYPE: c,
                } = h || {},
                p = t(e.location.lng, e.location.lat);
              Promise.resolve()
                .then(() =>
                  Object(u.a)(p).then((e) =>
                    null != e && e.standRegionId
                      ? null == e
                        ? void 0
                        : e.standRegionId.toString()
                      : ""
                  )
                )
                .then((e) => Object(l.a)(e))
                .then((t) => {
                  if (
                    !t.province ||
                    !t.city ||
                    ("9" !== t.areaCode[0] && !t.county)
                  ) {
                    if (
                      (Object(r.a)({
                        zIndex: 10001,
                        message: "该地址省市区信息不全，请手动选择",
                      }),
                      !t.areaCode)
                    ) {
                      var a =
                        (e.address || "")
                          .replace(e.province, "")
                          .replace(e.city, "")
                          .replace(e.district, "") + (e.title || e.name);
                      return (
                        i(null == d.a ? void 0 : d.a.addressMap, {
                          addressDetail: a,
                          poiId: e.id,
                          poiType:
                            "weapp" === n.default.getEnv() ? o.QQ : e.poiType,
                          source: s.YOUZAN,
                          lat: p.lat,
                          lon: p.lng,
                          type: c.POI,
                          areaCode: String(e.adcode),
                          downgrade: !0,
                        }),
                        setTimeout(() => {
                          this.routerBack();
                        }, 1e3),
                        !1
                      );
                    }
                    return this.selectArea(t);
                  }
                  return t;
                })
                .then((t) => {
                  if (!t) return !1;
                  var r =
                    (e.address || "")
                      .replace(e.province, "")
                      .replace(e.city, "")
                      .replace(e.district, "") + (e.title || e.name);
                  i(
                    null == d.a ? void 0 : d.a.addressMap,
                    Object(a.a)({}, t, {
                      location: e.title || e.name,
                      addressDetail: r,
                      poiId: e.id,
                      poiType:
                        "weapp" === n.default.getEnv() ? o.QQ : e.poiType,
                      source: s.YOUZAN,
                      lat: p.lat,
                      lon: p.lng,
                      downgrade: !1,
                      type: c.POI,
                    })
                  ),
                    this.routerBack();
                })
                .catch((e) => {
                  Object(r.a)({ zIndex: 10001, message: "出错了，请稍候再试" });
                });
            },
            routerBack() {
              n.default.navigateBack();
            },
            onUseSearchAddress(e) {
              this.ctx.lambdas.triggerEvent(
                null == d.a ? void 0 : d.a.addressMap,
                e
              );
            },
          },
          ud: !0,
        };
      t.default = n.default.component(g);
    },
    U6vv: function (e, t, i) {
      i.d(t, "a", function () {
        return a;
      });
      var o = i("US/N");
      function a(e) {
        return Object(o.default)({
          origin: "cashier",
          withCredentials: !0,
          path: "/wsctrade/location/getRegionModelByName.json",
          method: "GET",
          data: { lat: e.lat, lon: e.lng },
        });
      }
    },
    UlHH: function (e, t, i) {
      t.a = {
        selfFetchCity: "self-fetch-city-change",
        addressSelect: "address-select",
        addressDelete: "address-delete",
        addressSave: "address-save",
        couponChange: "order-coupon-change",
        showExpressWay: "show-express-way",
        addressCity: "address-city-change",
        addressMap: "address-map-change",
        showContact: "show-contact",
        showSelfFetchShop: "show-self-fetch-shop",
        showSelfFetchTime: "show-self-fetch-time",
        showTradeRecharge: "show-trade-recharge",
        contactError: "contact-error",
        idcardError: "idcard-error",
        presaleDisagreeToast: "presale-disagree-toast",
        showIdcardPopup: "show-idcard-popup",
      };
    },
    Uol7: function (e, t, i) {
      i.d(t, "a", function () {
        return o;
      });
      var o = { skipKdtId: !0, skipShopInfo: !0 };
    },
  })
);
