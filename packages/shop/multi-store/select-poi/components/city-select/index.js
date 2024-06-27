"use strict";
var r = require("~/r");
r(
  "Ei8/",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "01ar": function (e, t, r) {
      var a = r("aOlM");
      t.a = a.a;
    },
    "Ei8/": function (e, t, r) {
      r.r(t);
      var a = r("Fcif"),
        i = r("rqVN"),
        s = r("cQKx"),
        o = r("01ar");
      Object(i.b)({
        data: {
          selectedCity: "",
          keyWord: "",
          showkeyWordList: !1,
          showSearchedPoi: !1,
          showCityList: !1,
          historySearchList: [],
          searchedPoiList: [],
          searchEd: !1,
          isShowPop: !1,
        },
        properties: { current: Object },
        created() {
          this.getPoiInfo = Object(o.a)(this.__getPoiInfo, 200);
        },
        methods: {
          clearKeyword() {
            var { keyWord: e } = this.data;
            e && this.setYZData({ keyWord: "" });
          },
          redKeyWord(e, t) {
            var r = [];
            return (
              t.map((t) => {
                var i = t.title.split(e, 2);
                return (
                  r.push(
                    Object(a.a)({}, t, {
                      redText: 2 === i.length ? e : "",
                      beforeText: i[0],
                      afterText: i[1] || "",
                    })
                  ),
                  t
                );
              }),
              r
            );
          },
          closePop() {
            this.setYZData({
              showkeyWordList: !1,
              showSearchedPoi: !1,
              keyWord: "",
            });
          },
          showkeyWord() {
            this.showSearchedPoi || this.setYZData({ showkeyWordList: !0 });
          },
          handleSelectCity(e) {
            var { current: t } = this.data,
              r = e.detail.name;
            this.setYZData({
              showCityList: !1,
              selectedCity: e.detail.name,
              selectedCityName:
                r || (null === t ? "定位中" : (t && t.name) || "北京市"),
            });
          },
          goCityList() {
            this.setYZData({ showCityList: !0 });
          },
          getPoi(e) {
            this.getPoiInfo(e);
          },
          __getPoiInfo(e) {
            var t = e.detail;
            if (t.value && t.value) {
              this.setYZData({ keyWord: t.value });
              var r =
                this.data.selectedCity ||
                (null === this.data.current
                  ? "定位中"
                  : (this.data.current && this.data.current.name) || "北京市");
              Object(s.e)({ keyword: t.value, region: r, region_fix: 1 }).then(
                (e) => {
                  var r = this.redKeyWord(
                    t.value,
                    (e.data && e.data.slice(0, 5)) || []
                  );
                  this.setYZData({
                    showSearchedPoi: !0,
                    showkeyWordList: !0,
                    searchEd: !0,
                    searchedPoiList: r,
                  });
                }
              );
            }
          },
          handleClick(e) {
            var t = e.currentTarget.dataset.item;
            this.triggerEvent(
              "selectPoi",
              Object(a.a)({}, t.location, { name: t.title })
            );
          },
        },
      });
    },
    MqXn: function (e, t, r) {
      var a = r("hY7o");
      t.a = a.a;
    },
    cQKx: function (e, t, r) {
      r.d(t, "f", function () {
        return d;
      }),
        r.d(t, "c", function () {
          return l;
        }),
        r.d(t, "a", function () {
          return h;
        }),
        r.d(t, "e", function () {
          return n;
        }),
        r.d(t, "b", function () {
          return c;
        }),
        r.d(t, "d", function () {
          return u;
        });
      var a = r("MqXn");
      function i() {
        var e = getCurrentPages() || [];
        return e.length ? e[e.length - 1].route : "";
      }
      var s = {
        "packages/order": new a.a({
          key: "XBXBZ-FU6EF-S6ZJZ-JI7ZL-OXMP5-T2F73",
        }),
        __default: new a.a({ key: "DE4BZ-X6DCP-WUNDV-L4DDA-6NWA7-3CBSO" }),
      };
      function o() {
        var e = getCurrentPages() || [],
          t = (e[e.length - 1] || {}).route || "",
          r = Object.keys(s).find((e) => t.indexOf(e) > -1);
        return s[r] || s.__default;
      }
      function n(e) {
        return new Promise((t, r) => {
          (e.success = t),
            (e.fail = (e) => {
              r(e),
                getApp().logger.requestError({
                  message: "search-address-error",
                  detail: e,
                });
            });
          var a,
            s,
            n = o();
          (a = n.key),
            (s = getApp()) &&
              s.logger.log({
                et: "custom",
                ei: "get_suggestion",
                en: "关键词输入提示",
                params: { route: i(), key: a },
                si: s.getKdtId(),
              }),
            n.getSuggestion(e);
        });
      }
      function c(e) {
        return new Promise((t, r) => {
          (e.success = t), (e.fail = r), o().geocoder(e);
        });
      }
      function u(e) {
        return new Promise((t, r) => {
          (e.success = t), (e.fail = r);
          var a,
            s,
            n = o();
          (a = n.key),
            (s = getApp()) &&
              s.logger.log({
                et: "custom",
                ei: "reverse_geocoder",
                en: "逆地址解析",
                params: { route: i(), key: a },
                si: s.getKdtId(),
              }),
            n.reverseGeocoder(e);
        });
      }
      function d(e, t, r) {
        wx.getLocation({
          type: "gcj02",
          success: (t) => {
            var { latitude: r, longitude: a } = t,
              { lng: i, lat: s } = h(a, r);
            e({ lng: i, lat: s }, { latitude: r, longitude: a });
          },
          fail: r ? r(e, t) : t,
        });
      }
      function h(e, t) {
        var r = (3e3 * Math.PI) / 180,
          a = e,
          i = t,
          s = Math.sqrt(a * a + i * i) + 2e-5 * Math.sin(i * r),
          o = Math.atan2(i, a) + 3e-6 * Math.cos(a * r);
        return {
          lng: (e = s * Math.cos(o) + 0.0065),
          lat: (t = s * Math.sin(o) + 0.006),
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
  })
);
