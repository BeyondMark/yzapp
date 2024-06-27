"use strict";
var r = require("~/r");
r(
  "NyI5",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    MqXn: function (e, t, r) {
      var s = r("hY7o");
      t.a = s.a;
    },
    NyI5: function (e, t, r) {
      r.r(t);
      var s = r("Fcif"),
        a = r("rqVN"),
        n = r("cQKx"),
        i = getApp();
      Object(a.b)({
        properties: {
          list: {
            type: Array,
            observer(e) {
              this.setYZData({
                renderAddressList: e.slice(
                  0,
                  this.data.showAllList ? e.length : 3
                ),
              });
            },
          },
        },
        data: { showAllList: !1, renderAddressList: [] },
        methods: {
          extend() {
            var { list: e, showAllList: t } = this.data;
            this.setYZData({
              showAllList: !t,
              renderAddressList: e.slice(0, t ? 3 : e.length),
            });
          },
          handleSelect(e) {
            var t = e.currentTarget.dataset.item;
            if (
              parseFloat(t.lat) &&
              parseFloat(t.lon) &&
              "" !== t.lat &&
              "" !== t.lon
            ) {
              var { lon: r, lat: a } = t;
              this.getPoiInfo({ longitude: r, latitude: a }).then((e) => {
                if (0 === e.status) {
                  var r = e.result;
                  this.triggerEvent(
                    "select",
                    Object(s.a)({}, r.location, {
                      name: r.formatted_addresses.recommend,
                      addressId: t.id,
                    })
                  );
                }
              });
            } else
              this.findPositionByAddress(t).then((e) => {
                if (0 === e.status) {
                  var r = e.result;
                  this.triggerEvent(
                    "select",
                    Object(s.a)({}, r.location, {
                      name: r.title,
                      addressId: t.id,
                    })
                  );
                }
              });
            i.globalData.choosed_address_id = t.id;
          },
          findPositionByAddress: (e) =>
            Object(n.b)({ address: e })
              .then((e) => e)
              .catch(() => "通过详细地址获取poi失败"),
          getPoiInfo: (e) =>
            Object(n.d)({
              location: e,
              get_poi: 1,
              poi_options: "radius=500",
              coord_type: 3,
            }).then((e) => e),
          handleEditAddress(e) {
            var t = e.currentTarget.dataset;
            (i.globalData.editAddress = t.item),
              wx.navigateTo({
                url: "/packages/shop/multi-store/select-poi/address-edit/index?status=edit",
              });
          },
        },
      });
    },
    cQKx: function (e, t, r) {
      r.d(t, "f", function () {
        return l;
      }),
        r.d(t, "c", function () {
          return g;
        }),
        r.d(t, "a", function () {
          return c;
        }),
        r.d(t, "e", function () {
          return o;
        }),
        r.d(t, "b", function () {
          return d;
        }),
        r.d(t, "d", function () {
          return u;
        });
      var s = r("MqXn");
      function a() {
        var e = getCurrentPages() || [];
        return e.length ? e[e.length - 1].route : "";
      }
      var n = {
        "packages/order": new s.a({
          key: "XBXBZ-FU6EF-S6ZJZ-JI7ZL-OXMP5-T2F73",
        }),
        __default: new s.a({ key: "DE4BZ-X6DCP-WUNDV-L4DDA-6NWA7-3CBSO" }),
      };
      function i() {
        var e = getCurrentPages() || [],
          t = (e[e.length - 1] || {}).route || "",
          r = Object.keys(n).find((e) => t.indexOf(e) > -1);
        return n[r] || n.__default;
      }
      function o(e) {
        return new Promise((t, r) => {
          (e.success = t),
            (e.fail = (e) => {
              r(e),
                getApp().logger.requestError({
                  message: "search-address-error",
                  detail: e,
                });
            });
          var s,
            n,
            o = i();
          (s = o.key),
            (n = getApp()) &&
              n.logger.log({
                et: "custom",
                ei: "get_suggestion",
                en: "关键词输入提示",
                params: { route: a(), key: s },
                si: n.getKdtId(),
              }),
            o.getSuggestion(e);
        });
      }
      function d(e) {
        return new Promise((t, r) => {
          (e.success = t), (e.fail = r), i().geocoder(e);
        });
      }
      function u(e) {
        return new Promise((t, r) => {
          (e.success = t), (e.fail = r);
          var s,
            n,
            o = i();
          (s = o.key),
            (n = getApp()) &&
              n.logger.log({
                et: "custom",
                ei: "reverse_geocoder",
                en: "逆地址解析",
                params: { route: a(), key: s },
                si: n.getKdtId(),
              }),
            o.reverseGeocoder(e);
        });
      }
      function l(e, t, r) {
        wx.getLocation({
          type: "gcj02",
          success: (t) => {
            var { latitude: r, longitude: s } = t,
              { lng: a, lat: n } = c(s, r);
            e({ lng: a, lat: n }, { latitude: r, longitude: s });
          },
          fail: r ? r(e, t) : t,
        });
      }
      function c(e, t) {
        var r = (3e3 * Math.PI) / 180,
          s = e,
          a = t,
          n = Math.sqrt(s * s + a * a) + 2e-5 * Math.sin(a * r),
          i = Math.atan2(a, s) + 3e-6 * Math.cos(s * r);
        return {
          lng: (e = n * Math.cos(i) + 0.0065),
          lat: (t = n * Math.sin(i) + 0.006),
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
  })
);
