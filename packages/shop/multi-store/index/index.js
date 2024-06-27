"use strict";
var r = require("~/r");
r(
  "nLFu",
  Object.assign(
    {},
    require("../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "7p8J": function (e, t, a) {
        var s = a("RY8z"),
          i = a("hHpg"),
          o = a("cQKx");
        function r(e, t, a) {
          wx.getSetting({
            success(s) {
              var { authSetting: i } = s;
              if (i["scope." + e]) return t();
              a();
            },
            fail: a,
          });
        }
        t.a = {
          tryLocationAgain: function (e, t) {
            var a = getApp();
            r(
              "userLocation",
              () => t,
              () => {
                wx.showModal({
                  content:
                    '打开"' +
                    a.getShopInfoSync().base.shop_name +
                    '"的地理位置权限，为你推荐最近的门店，是否去打开',
                  success: (a) => {
                    a.cancel ||
                      wx.openSetting({
                        success: (a) => {
                          var { authSetting: s } = a;
                          s["scope.userLocation"] && Object(o.f)(e, t);
                        },
                      });
                  },
                });
              }
            );
          },
          checkScope: r,
          fetchShops: function (e) {
            var t = getApp();
            1 === e.page && (this.data.list = []),
              this.setYZData({ loading: !0 }),
              t
                .request({
                  path: "/wscump/multistore/recommendOfflineListNew.json",
                  query: e,
                })
                .then((t) => {
                  var a = t.items || [];
                  (a = a.map(
                    (e) => ((e.distance = Object(o.c)(e.distance)), e)
                  )),
                    this.setYZData({
                      list: this.data.list.concat(a),
                      loading: !1,
                      nodata:
                        0 === this.data.list.length &&
                        0 === a.length &&
                        !this.data.isUsedLocation,
                      nomore: a.length < e.perpage,
                    });
                })
                .catch((e) => {
                  this.setYZData({ loading: !1 }),
                    Object(i.a)(e.msg || "获取店铺列表失败");
                });
          },
          saveStoreAndJumpBack: function (e, t) {
            void 0 === t && (t = 1);
            var a = getApp(),
              i = getCurrentPages();
            if (
              (wx.showLoading({ title: "加载数据中..." }), i.length - 1 - t < 0)
            )
              return (
                a.setOfflineId(e.id),
                s.a.switchTab({ url: "/packages/home/dashboard/index" })
              );
            var o = i[i.length - 1 - t],
              r = this.redirectto || "/" + o.route,
              n = /packages\/shop\/multi-store/.test(r),
              h =
                /(packages\/(old-)?home\/(dashboard|feature|tab))|packages\/showcase-template/.test(
                  r
                );
            return this.redirectto
              ? (a.setOfflineId(e.id),
                wx.hideLoading(),
                s.a.switchTab({ url: this.redirectto }))
              : n || 1 === i.length
              ? (a.setOfflineId(e.id),
                wx.hideLoading(),
                s.a.switchTab({ url: "/packages/home/dashboard/index" }))
              : void (h
                  ? ((i[i.length - 1].__uniqueKey__ = o.__uniqueKey__),
                    a.setOfflineId(
                      e.id,
                      (e) => {
                        wx.hideLoading(),
                          e && 0 !== t && wx.navigateBack({ delta: t });
                      },
                      { delta: t, wxExparserNodeId: o.__wxExparserNodeId__ }
                    ))
                  : (a.setOfflineId(e.id),
                    wx.hideLoading(),
                    0 !== t && wx.navigateBack({ delta: t })));
          },
          saveLocation: function (e) {
            getApp()
              .request({
                path: "/wscump/multistore/setBuyerLocation.json",
                query: e,
              })
              .catch(() => null);
          },
        };
      },
      MqXn: function (e, t, a) {
        var s = a("hY7o");
        t.a = s.a;
      },
      cQKx: function (e, t, a) {
        a.d(t, "f", function () {
          return d;
        }),
          a.d(t, "c", function () {
            return l;
          }),
          a.d(t, "a", function () {
            return u;
          }),
          a.d(t, "e", function () {
            return n;
          }),
          a.d(t, "b", function () {
            return h;
          }),
          a.d(t, "d", function () {
            return c;
          });
        var s = a("MqXn");
        function i() {
          var e = getCurrentPages() || [];
          return e.length ? e[e.length - 1].route : "";
        }
        var o = {
          "packages/order": new s.a({
            key: "XBXBZ-FU6EF-S6ZJZ-JI7ZL-OXMP5-T2F73",
          }),
          __default: new s.a({ key: "DE4BZ-X6DCP-WUNDV-L4DDA-6NWA7-3CBSO" }),
        };
        function r() {
          var e = getCurrentPages() || [],
            t = (e[e.length - 1] || {}).route || "",
            a = Object.keys(o).find((e) => t.indexOf(e) > -1);
          return o[a] || o.__default;
        }
        function n(e) {
          return new Promise((t, a) => {
            (e.success = t),
              (e.fail = (e) => {
                a(e),
                  getApp().logger.requestError({
                    message: "search-address-error",
                    detail: e,
                  });
              });
            var s,
              o,
              n = r();
            (s = n.key),
              (o = getApp()) &&
                o.logger.log({
                  et: "custom",
                  ei: "get_suggestion",
                  en: "关键词输入提示",
                  params: { route: i(), key: s },
                  si: o.getKdtId(),
                }),
              n.getSuggestion(e);
          });
        }
        function h(e) {
          return new Promise((t, a) => {
            (e.success = t), (e.fail = a), r().geocoder(e);
          });
        }
        function c(e) {
          return new Promise((t, a) => {
            (e.success = t), (e.fail = a);
            var s,
              o,
              n = r();
            (s = n.key),
              (o = getApp()) &&
                o.logger.log({
                  et: "custom",
                  ei: "reverse_geocoder",
                  en: "逆地址解析",
                  params: { route: i(), key: s },
                  si: o.getKdtId(),
                }),
              n.reverseGeocoder(e);
          });
        }
        function d(e, t, a) {
          wx.getLocation({
            type: "gcj02",
            success: (t) => {
              var { latitude: a, longitude: s } = t,
                { lng: i, lat: o } = u(s, a);
              e({ lng: i, lat: o }, { latitude: a, longitude: s });
            },
            fail: a ? a(e, t) : t,
          });
        }
        function u(e, t) {
          var a = (3e3 * Math.PI) / 180,
            s = e,
            i = t,
            o = Math.sqrt(s * s + i * i) + 2e-5 * Math.sin(i * a),
            r = Math.atan2(i, s) + 3e-6 * Math.cos(s * a);
          return {
            lng: (e = o * Math.cos(r) + 0.0065),
            lat: (t = o * Math.sin(r) + 0.006),
          };
        }
        function l(e) {
          return e
            ? (e =
                (e = +e || 0) > 1e4
                  ? "> 10km"
                  : e > 1e3
                  ? (e / 1e3).toFixed(2) + "km"
                  : e < 100
                  ? "< 100m"
                  : e.toFixed(2) + "m")
            : 0;
        }
      },
      nLFu: function (e, t, a) {
        a.r(t);
        var s = a("qJXH"),
          i = a("hHpg"),
          o = a("2wjL"),
          r = a("taYb"),
          n = a("cQKx"),
          h = a("7p8J"),
          c = a("/duV"),
          d = a("9MQ6"),
          {
            tryLocationAgain: u,
            saveLocation: l,
            fetchShops: g,
            saveStoreAndJumpBack: p,
          } = h.a,
          f = getApp(),
          y = {
            data: {
              themeClass: f.themeClass,
              activeTab: d.a.type,
              tabOrder: "default",
              shop: f.getShopInfoSync(),
              list: [],
              areaFilterLevel: 0,
              alphaGroupCityStores: {},
            },
            onLoad(e) {
              (this.queryAddress = e.address),
                (this.redirectto = e.to),
                delete e.address,
                (this.query = Object.assign({}, e, { page: 1, perpage: 20 })),
                e.useLocationTab && this.chooseCloseShop(),
                d.a &&
                  "location" === d.a.type &&
                  (this.setYZData({ tabOrder: d.a.type }),
                  this.query.lng && this.query.lat
                    ? this.fetchShops(this.query)
                    : this.chooseCloseShop()),
                this.getCitiesStoreNum().then((e) => {
                  var t = 0,
                    a = 0,
                    s = 0,
                    i = [];
                  for (var o in e)
                    "string" == typeof o &&
                      1 === o.length &&
                      o >= "A" &&
                      o <= "Z" &&
                      (e[o].forEach((e) => {
                        (t += e.num), e.num >= 20 && (a = 2);
                      }),
                      (s += e[o].length),
                      i.push({ beforeCities: s, alpha: o }));
                  (a = t >= 20 ? a || 1 : 0),
                    this.setYZData({
                      alphaGroupCityStores: e,
                      areaFilterLevel: a,
                      alphaStoresData: i,
                    });
                });
            },
            onReady() {
              f.getShopInfo().then(() => {
                this.setYZData({ shop: f.getShopInfoSync() });
              }),
                this.queryAddress &&
                  ((this.queryAddress = decodeURIComponent(this.queryAddress)),
                  this.setYZData({
                    activeTab: "location",
                    scrollPosition: 0,
                    queryAddress: this.queryAddress,
                  })),
                (d.a && "location" === d.a.type) || this.fetchShops(this.query);
            },
            onHide() {
              Object(c.r)(0);
            },
            onUnload() {
              Object(c.r)(0);
            },
            chooseDefaultShop() {
              this.setYZData({
                activeTab: "default",
                scrollPosition: 0,
                loading: !0,
              }),
                (this.query = { page: 1, perpage: 20 }),
                this.fetchShops({ page: 1, perpage: 20 });
            },
            chooseCloseShop() {
              Object(n.f)(
                (e, t) => {
                  var { lat: a, lng: s } = e,
                    i = { lng: s, lat: a, page: 1, perpage: 20 };
                  (this.query = i),
                    l({ lat: a, lng: s }),
                    this.setYZData({
                      activeTab: "location",
                      scrollPosition: 0,
                      loading: !0,
                      list: [],
                    }),
                    this.fetchShops(i),
                    this.getAddressByLocation(t);
                },
                (e) => {
                  if (/auth deny/.test(e.errMsg))
                    return (this.tryAlign = !0), this.chooseCloseShop();
                  Object(i.a)("位置获取失败，无法推荐你附近的店");
                },
                this.tryAlign ? u : null
              );
            },
            navigateBack(e) {
              var { itemIndex: t } = e.target.dataset;
              if (0 == +t || t) {
                var a = Object.assign({}, this.data.list[t]);
                (a.business_hours_advanced = a.openingTimeSections || []),
                  (a.image = a.images.map((e) =>
                    !/http[s]/i.test(e) || /^upload_files/.test(e)
                      ? "https://img01.yzcdn.cn/" + e
                      : e
                  )),
                  p.call(this, a);
              }
            },
            navToSearchPage() {
              wx.navigateTo({
                url: o.a.add("/packages/shop/multi-store/search/index", {
                  range: 1,
                  keyword: this.data.queryAddress,
                }),
              });
            },
            onScroll(e) {
              var t = e.detail.scrollTop;
              t > 120 && !this.data.isFixed
                ? this.setYZData({ isFixed: !0 })
                : t < 120 &&
                  this.data.isFixed &&
                  this.setYZData({ isFixed: !1 }),
                t >= 1136 && !this.data.showToTopBtn
                  ? this.setYZData({ showToTopBtn: !0 })
                  : t < 1136 &&
                    this.data.showToTopBtn &&
                    this.setYZData({ showToTopBtn: !1 });
            },
            onToLower() {
              this.data.loading ||
                this.data.nomore ||
                (this.setYZData({ loading: !0 }),
                (this.query.page = this.query.page + 1),
                this.fetchShops(this.query));
            },
            onScrollToTop() {
              this.setYZData({ scrollPosition: 0, showToTopBtn: !1 });
            },
            getCitiesStoreNum: () =>
              f
                .request({
                  path: "/wscump/multistore/getListEachCityStoreNumAndGroupByAlpha.json",
                })
                .then((e) => r.a.toCamelCase(e)),
            handleAreaFiltered(e) {
              var { regionId: t = "", city: a = "" } = e.detail;
              (this.query.regionId = t),
                (this.query.city = a),
                (this.query.page = 1),
                this.fetchShops(this.query);
            },
            getAddressByLocation: function (e) {
              Object(n.d)({ location: e, poi_options: "policy=2" })
                .then((e) => {
                  var { result: t } = e;
                  this.setYZData({
                    queryAddress:
                      t.formatted_addresses.recommend || t.address || "",
                  });
                })
                .catch((e) => {});
            },
          };
        (y.fetchShops = g), Object(s.b)({}, y);
      },
    }
  )
);
