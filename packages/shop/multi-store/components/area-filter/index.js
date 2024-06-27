"use strict";
var r = require("~/r");
r(
  "3hQf",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "3hQf": function (t, e, r) {
      r.r(e);
      var a = r("rqVN"),
        i = r("taYb"),
        s = getApp();
      Object(a.b)({
        properties: {
          cityList: Object,
          alphaStoresData: Array,
          filterLevel: { type: Number, value: 0 },
        },
        data: {
          currentFilter: "全部城市",
          show: !1,
          currentTabIndex: 0,
          areaList: [],
          currentRegionId: null,
          loading: !1,
        },
        methods: {
          startSelect() {
            this.setYZData({ show: !0 });
          },
          selectTab(t) {
            var { tabIndex: e } = t.currentTarget.dataset,
              { currentWord: r = "" } = this.data;
            0 !== e && (r = ""),
              this.setYZData({ currentTabIndex: e, currentWord: r });
          },
          handleCityListScroll(t) {
            var { alphaStoresData: e } = this.data,
              r = t.detail.scrollTop;
            if (r < 44) this.setYZData({ currentWord: "" });
            else
              for (var a = e.length, i = 0; i < a; i++)
                if (r < 44 * (e[i].beforeCities + 1) + 26 * (i + 1) - 7) {
                  this.setYZData({ currentWord: e[i].alpha });
                  break;
                }
          },
          handleCitySelected(t) {
            var { city: e } = t.currentTarget.dataset;
            if (!e)
              return (
                this.setYZData({
                  currentCity: "全部城市",
                  currentRegionId: null,
                  currentFilter: "全部门店",
                  show: !1,
                  loading: !1,
                }),
                void this.triggerEvent("areafiltered", {
                  regionId: "",
                  city: "",
                })
              );
            var { filterLevel: r } = this.data;
            if (1 === r)
              return (
                this.setYZData({
                  currentFilter: e.city,
                  currentCity: e.city,
                  show: !1,
                  loading: !1,
                }),
                void this.triggerEvent("areafiltered", { city: e.city })
              );
            this.setYZData({ loading: !0 }),
              this.getCityRegionsData(e.city)
                .then((t) => {
                  this.setYZData({
                    areaList: t,
                    currentTabIndex: 1,
                    loading: !1,
                    currentWord: "",
                  });
                })
                .catch(() => {
                  this.setYZData({ loading: !1 });
                }),
              this.setYZData({ currentRegionId: null, currentCity: e.city }),
              setTimeout(() => {
                this.setYZData({ loading: !1 });
              }, 6e3);
          },
          getCityRegionsData: (t) =>
            s
              .request({
                path: "/wscump/multistore/getListDistrictByKdtIdAndCity.json",
                data: { city: t },
              })
              .then((t) => i.a.toCamelCase(t)),
          handleAreaSelected(t) {
            var { area: e } = t.currentTarget.dataset,
              { currentCity: r } = this.data;
            if (!e)
              return (
                this.setYZData({
                  currentRegionId: -1,
                  show: !1,
                  currentFilter: r + "\\全部区县",
                }),
                void this.triggerEvent("areafiltered", {
                  regionId: "",
                  city: r,
                })
              );
            this.setYZData({
              currentRegionId: e.regionId,
              currentFilter: e.city + "\\" + e.district,
              show: !1,
            }),
              this.triggerEvent("areafiltered", {
                city: e.city,
                regionId: e.regionId,
              });
          },
          handleCloseClick() {
            this.setYZData({ show: !1 });
          },
        },
      });
    },
  })
);
