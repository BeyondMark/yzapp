"use strict";
var r = require("~/r");
r(
  "D36C",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "7p8J": function (e, t, s) {
        var a = s("RY8z"),
          n = s("hHpg"),
          r = s("cQKx");
        function i(e, t, s) {
          wx.getSetting({
            success(a) {
              var { authSetting: n } = a;
              if (n["scope." + e]) return t();
              s();
            },
            fail: s,
          });
        }
        t.a = {
          tryLocationAgain: function (e, t) {
            var s = getApp();
            i(
              "userLocation",
              () => t,
              () => {
                wx.showModal({
                  content:
                    '打开"' +
                    s.getShopInfoSync().base.shop_name +
                    '"的地理位置权限，为你推荐最近的门店，是否去打开',
                  success: (s) => {
                    s.cancel ||
                      wx.openSetting({
                        success: (s) => {
                          var { authSetting: a } = s;
                          a["scope.userLocation"] && Object(r.f)(e, t);
                        },
                      });
                  },
                });
              }
            );
          },
          checkScope: i,
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
                  var s = t.items || [];
                  (s = s.map(
                    (e) => ((e.distance = Object(r.c)(e.distance)), e)
                  )),
                    this.setYZData({
                      list: this.data.list.concat(s),
                      loading: !1,
                      nodata:
                        0 === this.data.list.length &&
                        0 === s.length &&
                        !this.data.isUsedLocation,
                      nomore: s.length < e.perpage,
                    });
                })
                .catch((e) => {
                  this.setYZData({ loading: !1 }),
                    Object(n.a)(e.msg || "获取店铺列表失败");
                });
          },
          saveStoreAndJumpBack: function (e, t) {
            void 0 === t && (t = 1);
            var s = getApp(),
              n = getCurrentPages();
            if (
              (wx.showLoading({ title: "加载数据中..." }), n.length - 1 - t < 0)
            )
              return (
                s.setOfflineId(e.id),
                a.a.switchTab({ url: "/packages/home/dashboard/index" })
              );
            var r = n[n.length - 1 - t],
              i = this.redirectto || "/" + r.route,
              o = /packages\/shop\/multi-store/.test(i),
              c =
                /(packages\/(old-)?home\/(dashboard|feature|tab))|packages\/showcase-template/.test(
                  i
                );
            return this.redirectto
              ? (s.setOfflineId(e.id),
                wx.hideLoading(),
                a.a.switchTab({ url: this.redirectto }))
              : o || 1 === n.length
              ? (s.setOfflineId(e.id),
                wx.hideLoading(),
                a.a.switchTab({ url: "/packages/home/dashboard/index" }))
              : void (c
                  ? ((n[n.length - 1].__uniqueKey__ = r.__uniqueKey__),
                    s.setOfflineId(
                      e.id,
                      (e) => {
                        wx.hideLoading(),
                          e && 0 !== t && wx.navigateBack({ delta: t });
                      },
                      { delta: t, wxExparserNodeId: r.__wxExparserNodeId__ }
                    ))
                  : (s.setOfflineId(e.id),
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
      D36C: function (e, t, s) {
        s.r(t);
        var a = s("e9pr"),
          n = s("7p8J");
        Component({
          properties: {
            themeColor: { type: String, default: "#ee0a24" },
            themeBgColor: String,
          },
          data: {
            userAddressList: [],
            selectedId: null,
            houseNumberRequired: !1,
          },
          pageLifetimes: {
            show() {
              this.getUserAddressList();
            },
          },
          attached() {
            this.getUserAddressList();
          },
          methods: {
            getUserAddressList() {
              var e = this;
              return Object(a.a)().then(function (t) {
                void 0 === t && (t = []), e.setData({ userAddressList: t });
              });
            },
            onSelect(e) {
              var {
                currentTarget: {
                  dataset: { address: t },
                },
              } = e;
              this.triggerEvent("select", {
                detailValue: {
                  name: t.location || t.addressDetail || "",
                  desc: t.addressDetail || "",
                  lon: t.lon || "",
                  lat: t.lat || "",
                },
              });
            },
            onReset() {
              var e = getApp();
              n.a.checkScope(
                "userLocation",
                () => {
                  this.triggerEvent("select");
                },
                () => {
                  wx.showModal({
                    content:
                      '"' +
                      e.getShopInfoSync().base.shop_name +
                      '"要获取你的地理位置，是否允许？',
                    success: (e) => {
                      e.cancel ||
                        wx.openSetting({
                          success: (e) => {
                            var { authSetting: t } = e;
                            this.triggerEvent("select"),
                              t["scope.userLocation"];
                          },
                        });
                    },
                  });
                }
              );
            },
          },
        });
      },
      MqXn: function (e, t, s) {
        var a = s("hY7o");
        t.a = a.a;
      },
      cQKx: function (e, t, s) {
        s.d(t, "f", function () {
          return d;
        }),
          s.d(t, "c", function () {
            return l;
          }),
          s.d(t, "a", function () {
            return g;
          }),
          s.d(t, "e", function () {
            return o;
          }),
          s.d(t, "b", function () {
            return c;
          }),
          s.d(t, "d", function () {
            return u;
          });
        var a = s("MqXn");
        function n() {
          var e = getCurrentPages() || [];
          return e.length ? e[e.length - 1].route : "";
        }
        var r = {
          "packages/order": new a.a({
            key: "XBXBZ-FU6EF-S6ZJZ-JI7ZL-OXMP5-T2F73",
          }),
          __default: new a.a({ key: "DE4BZ-X6DCP-WUNDV-L4DDA-6NWA7-3CBSO" }),
        };
        function i() {
          var e = getCurrentPages() || [],
            t = (e[e.length - 1] || {}).route || "",
            s = Object.keys(r).find((e) => t.indexOf(e) > -1);
          return r[s] || r.__default;
        }
        function o(e) {
          return new Promise((t, s) => {
            (e.success = t),
              (e.fail = (e) => {
                s(e),
                  getApp().logger.requestError({
                    message: "search-address-error",
                    detail: e,
                  });
              });
            var a,
              r,
              o = i();
            (a = o.key),
              (r = getApp()) &&
                r.logger.log({
                  et: "custom",
                  ei: "get_suggestion",
                  en: "关键词输入提示",
                  params: { route: n(), key: a },
                  si: r.getKdtId(),
                }),
              o.getSuggestion(e);
          });
        }
        function c(e) {
          return new Promise((t, s) => {
            (e.success = t), (e.fail = s), i().geocoder(e);
          });
        }
        function u(e) {
          return new Promise((t, s) => {
            (e.success = t), (e.fail = s);
            var a,
              r,
              o = i();
            (a = o.key),
              (r = getApp()) &&
                r.logger.log({
                  et: "custom",
                  ei: "reverse_geocoder",
                  en: "逆地址解析",
                  params: { route: n(), key: a },
                  si: r.getKdtId(),
                }),
              o.reverseGeocoder(e);
          });
        }
        function d(e, t, s) {
          wx.getLocation({
            type: "gcj02",
            success: (t) => {
              var { latitude: s, longitude: a } = t,
                { lng: n, lat: r } = g(a, s);
              e({ lng: n, lat: r }, { latitude: s, longitude: a });
            },
            fail: s ? s(e, t) : t,
          });
        }
        function g(e, t) {
          var s = (3e3 * Math.PI) / 180,
            a = e,
            n = t,
            r = Math.sqrt(a * a + n * n) + 2e-5 * Math.sin(n * s),
            i = Math.atan2(n, a) + 3e-6 * Math.cos(a * s);
          return {
            lng: (e = r * Math.cos(i) + 0.0065),
            lat: (t = r * Math.sin(i) + 0.006),
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
