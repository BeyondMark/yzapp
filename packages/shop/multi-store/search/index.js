"use strict";
var r = require("~/r");
r(
  "pGwT",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "01ar": function (e, t, a) {
      var s = a("aOlM");
      t.a = s.a;
    },
    "7p8J": function (e, t, a) {
      var s = a("RY8z"),
        i = a("hHpg"),
        n = a("cQKx");
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
                        s["scope.userLocation"] && Object(n.f)(e, t);
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
                (a = a.map((e) => ((e.distance = Object(n.c)(e.distance)), e))),
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
          var n = i[i.length - 1 - t],
            r = this.redirectto || "/" + n.route,
            o = /packages\/shop\/multi-store/.test(r),
            c =
              /(packages\/(old-)?home\/(dashboard|feature|tab))|packages\/showcase-template/.test(
                r
              );
          return this.redirectto
            ? (a.setOfflineId(e.id),
              wx.hideLoading(),
              s.a.switchTab({ url: this.redirectto }))
            : o || 1 === i.length
            ? (a.setOfflineId(e.id),
              wx.hideLoading(),
              s.a.switchTab({ url: "/packages/home/dashboard/index" }))
            : void (c
                ? ((i[i.length - 1].__uniqueKey__ = n.__uniqueKey__),
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
      var s = a("hY7o");
      t.a = s.a;
    },
    cQKx: function (e, t, a) {
      a.d(t, "f", function () {
        return l;
      }),
        a.d(t, "c", function () {
          return g;
        }),
        a.d(t, "a", function () {
          return h;
        }),
        a.d(t, "e", function () {
          return o;
        }),
        a.d(t, "b", function () {
          return c;
        }),
        a.d(t, "d", function () {
          return d;
        });
      var s = a("MqXn");
      function i() {
        var e = getCurrentPages() || [];
        return e.length ? e[e.length - 1].route : "";
      }
      var n = {
        "packages/order": new s.a({
          key: "XBXBZ-FU6EF-S6ZJZ-JI7ZL-OXMP5-T2F73",
        }),
        __default: new s.a({ key: "DE4BZ-X6DCP-WUNDV-L4DDA-6NWA7-3CBSO" }),
      };
      function r() {
        var e = getCurrentPages() || [],
          t = (e[e.length - 1] || {}).route || "",
          a = Object.keys(n).find((e) => t.indexOf(e) > -1);
        return n[a] || n.__default;
      }
      function o(e) {
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
            n,
            o = r();
          (s = o.key),
            (n = getApp()) &&
              n.logger.log({
                et: "custom",
                ei: "get_suggestion",
                en: "关键词输入提示",
                params: { route: i(), key: s },
                si: n.getKdtId(),
              }),
            o.getSuggestion(e);
        });
      }
      function c(e) {
        return new Promise((t, a) => {
          (e.success = t), (e.fail = a), r().geocoder(e);
        });
      }
      function d(e) {
        return new Promise((t, a) => {
          (e.success = t), (e.fail = a);
          var s,
            n,
            o = r();
          (s = o.key),
            (n = getApp()) &&
              n.logger.log({
                et: "custom",
                ei: "reverse_geocoder",
                en: "逆地址解析",
                params: { route: i(), key: s },
                si: n.getKdtId(),
              }),
            o.reverseGeocoder(e);
        });
      }
      function l(e, t, a) {
        wx.getLocation({
          type: "gcj02",
          success: (t) => {
            var { latitude: a, longitude: s } = t,
              { lng: i, lat: n } = h(s, a);
            e({ lng: i, lat: n }, { latitude: a, longitude: s });
          },
          fail: a ? a(e, t) : t,
        });
      }
      function h(e, t) {
        var a = (3e3 * Math.PI) / 180,
          s = e,
          i = t,
          n = Math.sqrt(s * s + i * i) + 2e-5 * Math.sin(i * a),
          r = Math.atan2(i, s) + 3e-6 * Math.cos(s * a);
        return {
          lng: (e = n * Math.cos(r) + 0.0065),
          lat: (t = n * Math.sin(r) + 0.006),
        };
      }
      function g(e) {
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
    pGwT: function (e, t, a) {
      a.r(t);
      var s = a("qJXH"),
        i = a("hHpg"),
        n = a("01ar"),
        r = a("2wjL"),
        o = a("cQKx"),
        c = a("7p8J"),
        {
          tryLocationAgain: d,
          saveLocation: l,
          fetchShops: h,
          saveStoreAndJumpBack: g,
        } = c.a,
        u = {
          data: {
            themeClass: getApp().themeClass,
            range: ["门店", "配送至"],
            rangeIndex: 0,
            keyword: "",
            placeholder: "可搜索区县、商圈、路名等",
            list: [],
          },
          onLoad(e) {
            (this.autoSearch = Object(n.a)(this._search, 1e3)),
              e.title && wx.setNavigationBarTitle({ title: e.title }),
              e.range && this.setYZData({ rangeIndex: +e.range });
          },
          pickerChange(e) {
            this.setYZData({
              rangeIndex: e.detail.value,
              placeholder:
                0 == e.detail.value
                  ? "可搜索区县、商圈、路名等"
                  : "你要配送的小区、大楼等",
            }),
              wx.setNavigationBarTitle({
                title:
                  0 == e.detail.value
                    ? "按名称、地址搜索门店"
                    : "按收货地址搜索门店",
              }),
              this.data.keyword && this._search(this.data.keyword);
          },
          clearInput() {
            this.setYZData({ keyword: "" });
          },
          cancelSearch() {
            wx.navigateBack();
          },
          inputChange(e) {
            this.setYZData({ keyword: e.detail }), this.autoSearch(e.detail);
          },
          search(e) {
            this.setYZData({ keyword: e.detail }),
              this._search(e.detail),
              this.autoSearch.cancel();
          },
          onToLower() {
            this.data.nomore ||
              this.data.loading ||
              1 == +this.data.rangeIndex ||
              (this.setYZData({ loading: !0 }),
              (this.lastQuery.page = this.lastQuery.page + 1),
              this.searchShops(this.lastQuery));
          },
          navigateBack(e) {
            var { itemIndex: t } = e.target.dataset;
            if (0 == +t || t) {
              var a = this.data.list[t];
              if (0 == +this.data.rangeIndex)
                return (a.image = a.images), void g.call(this, a, 2);
              var { lng: s, lat: i } = Object(o.a)(
                a.location.lng,
                a.location.lat
              );
              wx.navigateTo({
                url: r.a.add("/packages/shop/multi-store/index/index", {
                  address: a.name,
                  lng: s,
                  lat: i,
                }),
              });
            }
          },
          chooseCloseShop() {
            Object(o.f)(
              (e) => {
                var { lng: t, lat: a } = e;
                l({ lng: t, lat: a }),
                  this.setYZData({ rangeIndex: 0, isUsedLocation: !0 }),
                  this.searchShops({ lat: a, lng: t, page: 1, perpage: 20 });
              },
              () => Object(i.a)("获取位置失败"),
              d
            );
          },
          _search: function (e) {
            e &&
              !this.loading &&
              (this.setYZData({
                loading: !0,
                isUsedLocation: !1,
                nomore: !1,
                nodata: !1,
                list: [],
                scrollPosition: 0,
              }),
              1 == +this.data.rangeIndex
                ? this.searchKeyword(e)
                : this.searchShops({ keyword: e, page: 1, perpage: 20 }));
          },
          searchKeyword: function (e) {
            Object(o.e)({ keyword: e, policy: 1 })
              .then((e) => {
                var t = e.data.map((e) => {
                  var { title: t, address: a, location: s } = e;
                  return { name: t, address: a, location: s };
                });
                this.setYZData({
                  list: t,
                  loading: !1,
                  nodata: 0 === t.length,
                });
              })
              .catch((e) => {
                this.setYZData({ loading: !1 }),
                  Object(i.a)(e.message || "获取地址失败");
              });
          },
        };
      (u.searchShops = h), Object(s.b)(u);
    },
  })
);
