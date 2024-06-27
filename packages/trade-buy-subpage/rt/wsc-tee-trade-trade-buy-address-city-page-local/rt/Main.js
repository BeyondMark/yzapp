"use strict";
var r = require("~/r");
r(
  "qlen",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      qlen: function (t, i, e) {
        e.r(i);
        var s = e("9ZMt"),
          c = e("MLLI"),
          n = e("jNR8"),
          a = e("lgMb"),
          h = {
            data: () => ({
              city: "",
              locateStatus: 0,
              popularCity: [
                "上海市",
                "北京市",
                "广州市",
                "成都市",
                "苏州市",
                "深圳市",
                "南京市",
                "天津市",
                "重庆市",
                "厦门市",
                "武汉市",
                "西安市",
              ],
              cityList: [],
              searchList: [],
              isSearching: !1,
              toView: "",
              windowHeight: 0,
              popularCityRows: 0,
            }),
            mounted() {
              (this.popularCityRows = this.popularCity.length / 3),
                this.getCurrentPositionCity(),
                this.fetchCity(),
                this.initStyle();
            },
            methods: {
              initStyle() {
                Object(c.a)().then((t) => {
                  this.windowHeight = t.windowHeight;
                });
              },
              fetchCity() {
                Object(n.a)()
                  .then((t) => {
                    this.cityList = t;
                  })
                  .catch((t) => {
                    Object(a.b)(t, { message: "城市列表加载失败，请刷新重试" });
                  });
              },
              getCurrentPositionCity() {
                new Promise((t, i) =>
                  this.ctx.process.invokePipe("tryLocation", {
                    success: (i, e) => t(e),
                    fail: i,
                  })
                )
                  .then(
                    (t) =>
                      this.ctx.process.invoke("reverseGeocoder", {
                        location: t,
                      })[0]
                  )
                  .then(function (t) {
                    var { result: i } = void 0 === t ? {} : t;
                    return i.ad_info.city;
                  })
                  .then((t) => {
                    (this.locateStatus = 1), (this.city = t);
                  })
                  .catch((t) => {
                    throw ((this.locateStatus = -1), t);
                  });
              },
              onFocus() {
                this.isSearching = !0;
              },
              onCancel() {
                (this.searchList = []),
                  (this.isSearching = !1),
                  (this.isEmpty = !1);
              },
              onSearch(t) {
                var i = this.cityList.filter((i) => i.name.indexOf(t) > -1);
                (this.searchList = i),
                  (this.isSearching = !0),
                  (this.isEmpty = 0 === i.length);
              },
              onSelectCity(t) {
                this.ctx.lambdas.triggerEvent("address_city_change", t),
                  s.default.navigateBack();
              },
            },
            ud: !0,
          };
        i.default = s.default.component(h);
      },
    }
  )
);
