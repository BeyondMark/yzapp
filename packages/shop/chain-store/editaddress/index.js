"use strict";
var r = require("~/r");
r(
  "vktu",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "01ar": function (e, t, a) {
      var r = a("aOlM");
      t.a = r.a;
    },
    MqXn: function (e, t, a) {
      var r = a("hY7o");
      t.a = r.a;
    },
    cQKx: function (e, t, a) {
      a.d(t, "f", function () {
        return u;
      }),
        a.d(t, "c", function () {
          return g;
        }),
        a.d(t, "a", function () {
          return c;
        }),
        a.d(t, "e", function () {
          return i;
        }),
        a.d(t, "b", function () {
          return d;
        }),
        a.d(t, "d", function () {
          return l;
        });
      var r = a("MqXn");
      function n() {
        var e = getCurrentPages() || [];
        return e.length ? e[e.length - 1].route : "";
      }
      var s = {
        "packages/order": new r.a({
          key: "XBXBZ-FU6EF-S6ZJZ-JI7ZL-OXMP5-T2F73",
        }),
        __default: new r.a({ key: "DE4BZ-X6DCP-WUNDV-L4DDA-6NWA7-3CBSO" }),
      };
      function o() {
        var e = getCurrentPages() || [],
          t = (e[e.length - 1] || {}).route || "",
          a = Object.keys(s).find((e) => t.indexOf(e) > -1);
        return s[a] || s.__default;
      }
      function i(e) {
        return new Promise((t, a) => {
          (e.success = t),
            (e.fail = (e) => {
              a(e),
                getApp().logger.requestError({
                  message: "search-address-error",
                  detail: e,
                });
            });
          var r,
            s,
            i = o();
          (r = i.key),
            (s = getApp()) &&
              s.logger.log({
                et: "custom",
                ei: "get_suggestion",
                en: "关键词输入提示",
                params: { route: n(), key: r },
                si: s.getKdtId(),
              }),
            i.getSuggestion(e);
        });
      }
      function d(e) {
        return new Promise((t, a) => {
          (e.success = t), (e.fail = a), o().geocoder(e);
        });
      }
      function l(e) {
        return new Promise((t, a) => {
          (e.success = t), (e.fail = a);
          var r,
            s,
            i = o();
          (r = i.key),
            (s = getApp()) &&
              s.logger.log({
                et: "custom",
                ei: "reverse_geocoder",
                en: "逆地址解析",
                params: { route: n(), key: r },
                si: s.getKdtId(),
              }),
            i.reverseGeocoder(e);
        });
      }
      function u(e, t, a) {
        wx.getLocation({
          type: "gcj02",
          success: (t) => {
            var { latitude: a, longitude: r } = t,
              { lng: n, lat: s } = c(r, a);
            e({ lng: n, lat: s }, { latitude: a, longitude: r });
          },
          fail: a ? a(e, t) : t,
        });
      }
      function c(e, t) {
        var a = (3e3 * Math.PI) / 180,
          r = e,
          n = t,
          s = Math.sqrt(r * r + n * n) + 2e-5 * Math.sin(n * a),
          o = Math.atan2(n, r) + 3e-6 * Math.cos(r * a);
        return {
          lng: (e = s * Math.cos(o) + 0.0065),
          lat: (t = s * Math.sin(o) + 0.006),
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
    vktu: function (e, t, a) {
      a.r(t);
      var r = a("cQKx"),
        n = a("01ar"),
        s = a("qJXH"),
        o = getApp();
      Object(s.b)({
        data: { navigationTitle: "搜索地址" },
        onLoad(e) {
          var {
            redirectUrl: t,
            alias: a,
            goodsId: r,
            dbKey: n,
            extOptJson: s = {},
          } = e;
          this.setData({
            redirectUrl: t,
            alias: a,
            goodsId: r,
            dbKey: n,
            extOptJson: s,
          });
        },
        onShow() {
          Object(r.f)((e) => {
            var { lng: t, lat: a } = e;
            Object(r.d)({
              location: { latitude: a, longitude: t },
              poi_options: "policy=2",
            }).then((e) => {
              var { result: { formatted_addresses: t = {} } = {} } = e;
              t.recommend && this.fetchAddress({ keyword: t.recommend });
            });
          });
        },
        handleFocus(e) {
          var { detail: t } = e;
          this.setData({ isFocus: t.isFocus });
        },
        parseLocation: (e) =>
          e.map((e) => {
            var { title: t, address: a, location: n } = e,
              { lng: s, lat: o } = Object(r.a)(n.lng, n.lat);
            return {
              name: t,
              isCurrent: !1,
              distance: null,
              desc: a,
              id: e.adcode,
              lon: s,
              lat: o,
            };
          }),
        fetchAddress(e) {
          Object(r.e)(e).then((e) => {
            this.setData({ shopLists: this.parseLocation(e.data) });
          });
        },
        handleInputChange: Object(n.a)(function (e) {
          e.detail &&
            e.detail.detailValue &&
            this.fetchAddress({ keyword: e.detail.detailValue });
        }, 800),
        handleSelect(e) {
          var { detail: { detailValue: t = {} } = {} } = e,
            {
              redirectUrl: a,
              alias: r,
              goodsId: n,
              dbKey: s,
              extOptJson: i,
            } = this.data,
            d = o.db.set({
              name: (null == t ? void 0 : t.name) || "",
              poi: (null == t ? void 0 : t.desc) || "",
              lng: (null == t ? void 0 : t.lon) || "",
              lat: (null == t ? void 0 : t.lat) || "",
            });
          wx.reLaunch({
            url:
              "/packages/shop-select/chain-store/shopselect/index?dbid=" +
              d +
              "&redirectUrl=" +
              a +
              "&alias=" +
              r +
              "&goodsId=" +
              n +
              "&dbKey=" +
              (s || "location") +
              "&extOptJson=" +
              i,
          });
        },
      });
    },
  })
);
