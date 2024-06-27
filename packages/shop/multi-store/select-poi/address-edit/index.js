"use strict";
var r = require("~/r");
r(
  "zC2b",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "60MT": function (e, t, a) {
        function i(e) {
          e = e.replace(/[^-|\d]/g, "");
          var t = /^((\+86)|(86))?(1)\d{10}$/.test(e),
            a = /^0[0-9\-]{10,13}$/.test(e),
            i = /^((\+852)|(852))?(5|6|8|9)\d{7}$/.test(e),
            s = /^((\+886)|(886)|(0))?9\d{2}-?\d{3}-?\d{3}$/.test(e);
          return t || a || i || s;
        }
        a.d(t, "a", function () {
          return i;
        });
      },
      MqXn: function (e, t, a) {
        var i = a("hY7o");
        t.a = i.a;
      },
      cQKx: function (e, t, a) {
        a.d(t, "f", function () {
          return l;
        }),
          a.d(t, "c", function () {
            return g;
          }),
          a.d(t, "a", function () {
            return u;
          }),
          a.d(t, "e", function () {
            return n;
          }),
          a.d(t, "b", function () {
            return o;
          }),
          a.d(t, "d", function () {
            return c;
          });
        var i = a("MqXn");
        function s() {
          var e = getCurrentPages() || [];
          return e.length ? e[e.length - 1].route : "";
        }
        var r = {
          "packages/order": new i.a({
            key: "XBXBZ-FU6EF-S6ZJZ-JI7ZL-OXMP5-T2F73",
          }),
          __default: new i.a({ key: "DE4BZ-X6DCP-WUNDV-L4DDA-6NWA7-3CBSO" }),
        };
        function d() {
          var e = getCurrentPages() || [],
            t = (e[e.length - 1] || {}).route || "",
            a = Object.keys(r).find((e) => t.indexOf(e) > -1);
          return r[a] || r.__default;
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
            var i,
              r,
              n = d();
            (i = n.key),
              (r = getApp()) &&
                r.logger.log({
                  et: "custom",
                  ei: "get_suggestion",
                  en: "关键词输入提示",
                  params: { route: s(), key: i },
                  si: r.getKdtId(),
                }),
              n.getSuggestion(e);
          });
        }
        function o(e) {
          return new Promise((t, a) => {
            (e.success = t), (e.fail = a), d().geocoder(e);
          });
        }
        function c(e) {
          return new Promise((t, a) => {
            (e.success = t), (e.fail = a);
            var i,
              r,
              n = d();
            (i = n.key),
              (r = getApp()) &&
                r.logger.log({
                  et: "custom",
                  ei: "reverse_geocoder",
                  en: "逆地址解析",
                  params: { route: s(), key: i },
                  si: r.getKdtId(),
                }),
              n.reverseGeocoder(e);
          });
        }
        function l(e, t, a) {
          wx.getLocation({
            type: "gcj02",
            success: (t) => {
              var { latitude: a, longitude: i } = t,
                { lng: s, lat: r } = u(i, a);
              e({ lng: s, lat: r }, { latitude: a, longitude: i });
            },
            fail: a ? a(e, t) : t,
          });
        }
        function u(e, t) {
          var a = (3e3 * Math.PI) / 180,
            i = e,
            s = t,
            r = Math.sqrt(i * i + s * s) + 2e-5 * Math.sin(s * a),
            d = Math.atan2(s, i) + 3e-6 * Math.cos(i * a);
          return {
            lng: (e = r * Math.cos(d) + 0.0065),
            lat: (t = r * Math.sin(d) + 0.006),
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
      zC2b: function (e, t, a) {
        a.r(t);
        var i = a("qJXH"),
          s = a("60MT"),
          r = a("zwWb"),
          d = a("cQKx"),
          n = a("hHpg"),
          o = a("DsKV"),
          c = a("BZ1t"),
          l = getApp(),
          u = {
            data: {
              fetching: !0,
              status: "add",
              editData: {},
              areaOrigin: {},
              area: {},
              isSaving: !1,
              isDeleting: !1,
              searchResult: [],
              areaList: {},
              addressInfo: {},
              locationMap: [],
            },
            onLoad(e) {
              l.fetchAreaMapData((t) => {
                var a,
                  i = "add",
                  s = {
                    provinceIndex: 0,
                    cityIndex: 0,
                    countyIndex: 0,
                    selectedValue: 0,
                  };
                e.status && (i = e.status);
                var r = "新增收货地址";
                if ("edit" === i) {
                  r = "编辑收货地址";
                  var d = l.globalData.editAddress,
                    n = d.areaCode || 0;
                  a = o.a.formatAreaData(n, t);
                  var {
                    provinceIndex: c,
                    cityIndex: u,
                    countyIndex: g,
                  } = this.findSelectedAddressIndex(n, a);
                  Object.assign(d, {
                    provinceIndex: c,
                    cityIndex: u,
                    countyIndex: g,
                    selectedValue: n,
                  }),
                    (s = d);
                } else a = o.a.formatAreaData(0, t);
                wx.setNavigationBarTitle({ title: r }),
                  this.setYZData({
                    areaOrigin: t,
                    area: a,
                    status: i,
                    editData: s,
                  });
              }),
                (this.getSuggestion = Object(r.a)((e) => Object(d.e)(e), 1e3));
            },
            findSelectedAddressIndex(e, t) {
              var a = e.toString().slice(0, 2) + "0000",
                i = e.toString().slice(0, 4) + "00",
                s = 0,
                r = 0,
                d = 0;
              return e
                ? {
                    provinceIndex: (s = t.province.findIndex((e) => {
                      var { code: t } = e;
                      return t == a;
                    })),
                    cityIndex: (r = t.city.findIndex((e) => {
                      var { code: t } = e;
                      return t == i;
                    })),
                    countyIndex: (d = t.county.findIndex((t) => {
                      var { code: a } = t;
                      return a == e;
                    })),
                  }
                : { provinceIndex: s, cityIndex: r, countyIndex: d };
            },
            onShow() {
              this.setYZData({ searchResult: [] });
            },
            onAddressDelete() {
              wx.showModal({
                title: "友情提示",
                content: "确定要删除这个地址么?",
                success: (e) => {
                  if (e.confirm) {
                    wx.showToast({
                      title: "删除中",
                      icon: "loading",
                      duration: 1e4,
                    });
                    var { editData: t } = this.data;
                    c.a.removeAddress(
                      t.id,
                      () => {
                        wx.hideToast(), wx.navigateBack();
                      },
                      () => {
                        wx.hideToast(), Object(n.a)("删除地址失败, 请稍后重试");
                      }
                    );
                  }
                },
              });
            },
            onAddClick() {
              this.setYZData({
                editData: {
                  provinceIndex: 0,
                  cityIndex: 0,
                  countyIndex: 0,
                  selectedValue: 0,
                },
                area: o.a.formatAreaData(0, this.data.areaOrigin),
                status: "add",
              });
            },
            onAddressSave() {
              var { editData: e } = this.data,
                t = {
                  id: e.id || "",
                  user_name: e.userName || "",
                  tel: e.tel,
                  area_code: e.areaCode || 0,
                  address_detail: e.addressDetail || "",
                  postal_code: e.postalCode || "",
                  province: e.province || "",
                  city: e.city || "",
                  county: e.county || "",
                  lat: e.lat,
                  lon: e.lon,
                };
              this.validateAddress(t) ||
                (wx.showToast({
                  title: "地址数据提交中",
                  icon: "loading",
                  duration: 1e4,
                }),
                t.lat && t.lon
                  ? this.saveAddress(t)
                  : c.a.queryGeo(
                      t.city,
                      "" + t.province + t.city + t.county + t.address_detail,
                      (e) => {
                        var { lat: a, lon: i } = e;
                        (t.lon = i), (t.lat = a), this.saveAddress(t);
                      },
                      () => {
                        this.saveAddress(t);
                      }
                    ));
            },
            saveAddress(e) {
              var { status: t } = this.data;
              ("edit" == t ? c.a.save : c.a.add)(
                e,
                (e) => {
                  wx.hideToast(), e.value && wx.navigateBack();
                },
                function (e) {
                  void 0 === e && (e = {}), wx.hideToast();
                  var a = "edit" == t ? "编辑地址失败" : "新增地址失败";
                  Object(n.a)(e.msg || a);
                }
              );
            },
            onInputChange(e) {
              var t = e.currentTarget.dataset.type,
                a = e.detail.value || "",
                i = this.data.editData;
              (i[t] = a),
                this.setYZData({ editData: i }, { immediate: !0 }),
                "addressDetail" === t && this.onDetailChange(a);
            },
            onDetailChange(e) {
              var { editData: t } = this.data;
              (t.lat = ""),
                (t.lon = ""),
                this.setYZData({ editData: t }),
                e
                  ? this.getSuggestion({
                      keyword: e,
                      region: t.city || "",
                      policy: 1,
                      success: (e) => {
                        this.setYZData({
                          searchResult: e.data,
                          showDetailClear: !0,
                        });
                      },
                    })
                  : this.setYZData({ searchResult: [], showDetailClear: !1 });
            },
            onDetailFocus() {
              this.setYZData({
                showSearchResult: !0,
                showDetailClear: !!this.data.editData.addressDetail,
              });
            },
            onDetailBlur() {
              this.setYZData({ showDetailClear: !1, showSearchResult: !1 });
            },
            onSelectAddress(e) {
              var { index: t } = e.currentTarget.dataset,
                a = this.data.searchResult[t],
                { editData: i } = this.data,
                { location: s, title: r, district: n } = a,
                o = a.address || "";
              if (o && n && -1 !== o.findexOf(n)) {
                var c = o.split(n)[1];
                c && (o = c);
              }
              if (
                ((i.addressDetail = (o + " " + r).trim()), s && s.lat && s.lng)
              ) {
                var { lat: l, lng: u } = Object(d.a)(s.lng, s.lat);
                (i.lat = l), (i.lon = u);
              }
              this.setYZData({ editData: i, searchResult: [] });
            },
            clearDetail() {
              var e = this.data.editData;
              (e.addressDetail = ""),
                this.setYZData({ editData: e }, { immediate: !0 });
            },
            onAreaChange(e) {
              var t = e.detail.value || 0,
                a = e.currentTarget.dataset.type,
                i = this.data.editData,
                s = this.data.area[a][t].code;
              if (i[a + "Index"] != t) {
                var r = o.a.formatAreaData(s, this.data.areaOrigin),
                  d = i.provinceIndex || 0,
                  n = i.cityIndex || 0,
                  c = i.countyIndex || 0;
                switch (a) {
                  case "province":
                    (d = t),
                      (i.province = r.province[d].text),
                      (n = 0),
                      (c = 0),
                      (i.areaCode = void 0);
                    break;
                  case "city":
                    (n = t),
                      (i.city = r.city[n].text),
                      (c = 0),
                      (i.areaCode = void 0);
                    break;
                  case "county":
                    (c = t),
                      (i.county = r.county[c].text),
                      (i.areaCode = r.county[c].code);
                }
                (i = Object.assign({}, i, {
                  provinceIndex: d,
                  cityIndex: n,
                  countyIndex: c,
                  selectedValue: s,
                  lat: "",
                  lon: "",
                })),
                  this.setYZData({ editData: i, area: r });
              }
            },
            validateAddress: (e) =>
              e.user_name
                ? e.tel
                  ? e.area_code
                    ? e.address_detail
                      ? Object(s.a)(e.tel)
                        ? void 0
                        : (Object(n.a)("请填写正确的联系电话"),
                          { type: "error", field: "tel" })
                      : (Object(n.a)("请填写详细地址"),
                        { type: "empty", field: "address_detail" })
                    : (Object(n.a)("请选择收货地区"),
                      { type: "empty", field: "area_code" })
                  : (Object(n.a)("请填写联系电话"),
                    { type: "empty", field: "tel" })
                : (Object(n.a)("请填写收货人姓名"),
                  { type: "empty", field: "user_name" }),
          };
        Object(i.b)(u);
      },
      zwWb: function (e, t, a) {
        var i = a("Ix7h");
        t.a = i.a;
      },
    }
  )
);
