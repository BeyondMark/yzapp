"use strict";
var r = require("~/r");
r(
  "3//F",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "3//F": function (e, t, a) {
        a.r(t);
        var i = a("Fcif"),
          s = a("qJXH"),
          n = a("2ktG"),
          o = a("hHpg"),
          r = a("cQKx"),
          c = a("7p8J"),
          d = a("mAK2"),
          { saveStoreAndJumpBack: u } = c.a,
          g = Object(n.a)(),
          l = getApp(),
          h = {
            data: {
              currentLongitude: "",
              currentLatitude: "",
              currentPoI: null,
              currentInfo: {},
              nearPoIs: [],
              addressList: [],
              positonDenied: !1,
              nearPoiPage: 1,
              nearPoiPageSize: 20,
            },
            onLoad() {
              this.getLocation();
            },
            onReachBottom() {
              this.getNearPois();
            },
            onShow() {
              this.getAddressList();
            },
            getNearPois() {
              var {
                coords: e,
                nearPoiPage: t,
                nearPoiPageSize: a,
                nearPoIs: i,
              } = this.data;
              e &&
                (wx.showLoading("加载中"),
                t++,
                Object(r.d)({
                  location: e,
                  get_poi: 1,
                  poi_options: "radius=500;page_size=" + a + ";page_index=" + t,
                  coord_type: 3,
                })
                  .then((e) => {
                    0 === e.status &&
                      (i.push(...e.result.pois),
                      this.setYZData({ nearPoiPage: t, nearPoIs: i }, () =>
                        setTimeout(() => wx.hideLoading(), 2e3)
                      )),
                      wx.hideLoading();
                  })
                  .catch(() => wx.hideLoading()));
            },
            getLocation() {
              wx.showLoading({ title: "定位中" }),
                this.setYZData({ currentPoI: null }),
                Object(r.f)(
                  (e) => {
                    var { lat: t, lng: a } = e;
                    this.getPoiInfo({ latitude: t, longitude: a });
                  },
                  (e) => {
                    setTimeout(() => wx.hideLoading(), 1e3),
                      e.code === e.PERMISSION_DENIED &&
                        this.setYZData({ currentPoI: {}, currentInfo: {} }),
                      this.getLocationByIp();
                  }
                );
            },
            getLocationByIp() {
              Object(d.b)()
                .then((e) => {
                  if ((wx.hideLoading(), null !== e)) {
                    var { lat: t, lng: a } = e;
                    this.getPoiInfo([t, a]);
                  } else this.setYZData({ currentPoI: {}, currentInfo: {} });
                })
                .catch(() => {
                  this.setYZData({ currentPoI: {}, currentInfo: {} }),
                    wx.hideLoading();
                });
            },
            getPoiInfo(e) {
              this.poiPage = 0;
              var { nearPoiPageSize: t } = this.data;
              Object(r.d)({
                location: e,
                get_poi: 1,
                poi_options: "radius=500;page_size=" + t + ";page_index=1",
                coord_type: 3,
              })
                .then((t) => {
                  if (0 === t.status) {
                    var a = t.result,
                      s = { name: a.address_component.city, coords: e },
                      n = a.pois[0],
                      o = a.pois;
                    this.data.autolocate &&
                      this.getStore({
                        detail: Object(i.a)({}, n.location, { name: n.title }),
                      }),
                      this.setYZData(
                        {
                          currentInfo: s,
                          currentPoI: n,
                          nearPoIs: o,
                          coords: e,
                        },
                        () => wx.hideLoading()
                      );
                  } else
                    this.setYZData({ currentPoi: {}, currentInfo: {} }, () =>
                      wx.hideLoading()
                    );
                })
                .catch(() => {
                  this.setYZData({ currentPoI: {}, currentInfo: {} }, () =>
                    wx.hideLoading()
                  );
                });
            },
            getStore(e) {
              var t = e.detail,
                { lng: a, lat: i } = Object(r.a)(t.lng, t.lat);
              Object(d.c)({ kdt_id: l.getKdtId(), lng: a, lat: i })
                .then((e) => {
                  l.setOfflineId(e.value),
                    l.$store &&
                      l.$store.commit(
                        "UPDATE_USER_INFO",
                        Object.assign(l.getUserInfoSync(), {
                          poi: { lng: t.lng, lat: t.lat, title: t.name },
                        })
                      ),
                    g.setAsync("multistore:user:poi", t.name, { expire: 0.8 }),
                    Object(d.d)({
                      kdt_id: l.getKdtId(),
                      store_id: e.value,
                      location: t.name,
                    }),
                    u.call(this, { id: e.value }, 0);
                })
                .catch((e) => {
                  Object(o.a)(e.msg || "系统忙～稍后再试");
                });
            },
            getAddressList() {
              var e,
                t = l.globalData;
              t.address_list
                ? ((e =
                    (t.address_list.length > 0 && t.address_list) || []).map(
                    (e) =>
                      Object(i.a)({}, e, {
                        addressDetail:
                          "" + e.province + e.city + e.address_detail,
                      })
                  ),
                  this.setYZData({ addressList: e }))
                : Object(d.a)().then((e) => {
                    var t = e;
                    this.setYZData({ addressList: t });
                  });
            },
            goAddAdress() {
              wx.navigateTo({
                url: "/packages/shop/multi-store/select-poi/address-edit/index",
              });
            },
          };
        Object(s.b)(h);
      },
      "7p8J": function (e, t, a) {
        var i = a("RY8z"),
          s = a("hHpg"),
          n = a("cQKx");
        function o(e, t, a) {
          wx.getSetting({
            success(i) {
              var { authSetting: s } = i;
              if (s["scope." + e]) return t();
              a();
            },
            fail: a,
          });
        }
        t.a = {
          tryLocationAgain: function (e, t) {
            var a = getApp();
            o(
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
                          var { authSetting: i } = a;
                          i["scope.userLocation"] && Object(n.f)(e, t);
                        },
                      });
                  },
                });
              }
            );
          },
          checkScope: o,
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
                    (e) => ((e.distance = Object(n.c)(e.distance)), e)
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
                    Object(s.a)(e.msg || "获取店铺列表失败");
                });
          },
          saveStoreAndJumpBack: function (e, t) {
            void 0 === t && (t = 1);
            var a = getApp(),
              s = getCurrentPages();
            if (
              (wx.showLoading({ title: "加载数据中..." }), s.length - 1 - t < 0)
            )
              return (
                a.setOfflineId(e.id),
                i.a.switchTab({ url: "/packages/home/dashboard/index" })
              );
            var n = s[s.length - 1 - t],
              o = this.redirectto || "/" + n.route,
              r = /packages\/shop\/multi-store/.test(o),
              c =
                /(packages\/(old-)?home\/(dashboard|feature|tab))|packages\/showcase-template/.test(
                  o
                );
            return this.redirectto
              ? (a.setOfflineId(e.id),
                wx.hideLoading(),
                i.a.switchTab({ url: this.redirectto }))
              : r || 1 === s.length
              ? (a.setOfflineId(e.id),
                wx.hideLoading(),
                i.a.switchTab({ url: "/packages/home/dashboard/index" }))
              : void (c
                  ? ((s[s.length - 1].__uniqueKey__ = n.__uniqueKey__),
                    a.setOfflineId(
                      e.id,
                      (e) => {
                        wx.hideLoading(),
                          e && 0 !== t && wx.navigateBack({ delta: t });
                      },
                      { delta: t, wxExparserNodeId: n.__wxExparserNodeId__ }
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
        var i = a("hY7o");
        t.a = i.a;
      },
      cQKx: function (e, t, a) {
        a.d(t, "f", function () {
          return u;
        }),
          a.d(t, "c", function () {
            return l;
          }),
          a.d(t, "a", function () {
            return g;
          }),
          a.d(t, "e", function () {
            return r;
          }),
          a.d(t, "b", function () {
            return c;
          }),
          a.d(t, "d", function () {
            return d;
          });
        var i = a("MqXn");
        function s() {
          var e = getCurrentPages() || [];
          return e.length ? e[e.length - 1].route : "";
        }
        var n = {
          "packages/order": new i.a({
            key: "XBXBZ-FU6EF-S6ZJZ-JI7ZL-OXMP5-T2F73",
          }),
          __default: new i.a({ key: "DE4BZ-X6DCP-WUNDV-L4DDA-6NWA7-3CBSO" }),
        };
        function o() {
          var e = getCurrentPages() || [],
            t = (e[e.length - 1] || {}).route || "",
            a = Object.keys(n).find((e) => t.indexOf(e) > -1);
          return n[a] || n.__default;
        }
        function r(e) {
          return new Promise((t, a) => {
            (e.success = t),
              (e.fail = (e) => {
                a(e),
                  getApp().logger.requestError({
                    message: "search-address-error",
                    detail: e,
                  });
              });
            var i,
              n,
              r = o();
            (i = r.key),
              (n = getApp()) &&
                n.logger.log({
                  et: "custom",
                  ei: "get_suggestion",
                  en: "关键词输入提示",
                  params: { route: s(), key: i },
                  si: n.getKdtId(),
                }),
              r.getSuggestion(e);
          });
        }
        function c(e) {
          return new Promise((t, a) => {
            (e.success = t), (e.fail = a), o().geocoder(e);
          });
        }
        function d(e) {
          return new Promise((t, a) => {
            (e.success = t), (e.fail = a);
            var i,
              n,
              r = o();
            (i = r.key),
              (n = getApp()) &&
                n.logger.log({
                  et: "custom",
                  ei: "reverse_geocoder",
                  en: "逆地址解析",
                  params: { route: s(), key: i },
                  si: n.getKdtId(),
                }),
              r.reverseGeocoder(e);
          });
        }
        function u(e, t, a) {
          wx.getLocation({
            type: "gcj02",
            success: (t) => {
              var { latitude: a, longitude: i } = t,
                { lng: s, lat: n } = g(i, a);
              e({ lng: s, lat: n }, { latitude: a, longitude: i });
            },
            fail: a ? a(e, t) : t,
          });
        }
        function g(e, t) {
          var a = (3e3 * Math.PI) / 180,
            i = e,
            s = t,
            n = Math.sqrt(i * i + s * s) + 2e-5 * Math.sin(s * a),
            o = Math.atan2(s, i) + 3e-6 * Math.cos(i * a);
          return {
            lng: (e = n * Math.cos(o) + 0.0065),
            lat: (t = n * Math.sin(o) + 0.006),
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
    }
  )
);
