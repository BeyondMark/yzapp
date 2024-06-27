"use strict";
var r = require("~/r");
r(
  "3bfW",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      "3bfW": function (e, t, i) {
        i.r(t);
        var s = i("9ZMt"),
          a = i("AGZf"),
          r = (i("YeA1"), i("u8NR")),
          c = i("7lfQ"),
          n = i("d57A"),
          o = {
            props: { forcePoiSelect: Boolean },
            data: () => ({
              city: "北京市",
              isSearching: !1,
              searchList: [],
              isEmpty: !1,
              keyword: "",
            }),
            created() {
              this.ctx.lambdas.onEvent("address_city_change", (e) => {
                (this.noAutoGetCity = !0), (this.city = e);
              });
              var {
                city: e,
                addressDetail: t,
                showPoiTips: i = 0,
              } = this.$getPageQuery();
              1 == +i && e && t
                ? ((this.city = e),
                  (this.keyword = t),
                  this.$emit("inSearch", !0),
                  (this.isSearching = !0),
                  this.onSearch(t))
                : Object(c.b)("scope.userLocation")
                    .then(
                      () =>
                        new Promise((e, t) =>
                          this.ctx.process.invokePipe("tryLocation", {
                            success: e,
                            fail: t,
                          })
                        )
                    )
                    .then(n.a)
                    .then((e) => {
                      this.city = e.cityName;
                    })
                    .catch((e) => {
                      throw e;
                    });
            },
            destroyed() {
              var e, t;
              null == (e = (t = this.ctx.lambdas).offEvent) ||
                e.call(t, "address_city_change");
            },
            methods: {
              onClickCity() {
                s.default.navigate({
                  url: "/packages/trade-buy-subpage/order/address-city/index",
                  type: "navigateTo",
                });
              },
              onFocus() {
                this.$emit("inSearch", !0), (this.isSearching = !0);
              },
              onCancel() {
                (this.keyword = ""),
                  this.$emit("inSearch", !1),
                  (this.isSearching = !1),
                  (this.searchList = []),
                  (this.isEmpty = !1);
              },
              onDownGrade() {
                Object(r.a)(this.ctx, {
                  region: this.city,
                  keyword: this.keyword,
                }),
                  this.$emit("onUseSearchAddress", {
                    addressDetail: this.keyword,
                    lat: "",
                    lon: "",
                    type: 1,
                    downgrade: !0,
                  }),
                  s.default.navigateBack();
              },
              onChange(e) {
                this.keyword = e.value;
              },
              onSearch(e) {
                this.keyword &&
                  0 !== this.keyword.trim().length &&
                  (a.a.loading({ message: "加载中..." }),
                  this.onWeappSearch(e),
                  a.a.clear());
              },
              onWeappSearch(e) {
                var t = this,
                  [i] = this.ctx.process.invoke("searchAddress", {
                    keyword: e,
                    policy: 1,
                    region: this.city,
                    page_size: 20,
                    page_index: 1,
                  });
                i.then(function (i) {
                  var { data: s = [] } = void 0 === i ? {} : i;
                  (t.searchList = s
                    .filter(
                      (e) =>
                        !(!e.province || !e.city) &&
                        (!t.forcePoiSelect ||
                          "地名地址:行政地名" !== e.category)
                    )
                    .map(
                      (t) => (
                        (t.titleArray = t.title.split(e)),
                        (t.searchKeyword = e),
                        t
                      )
                    )),
                    (t.isEmpty = 0 === s.length),
                    (t.keyword = e);
                }).catch(() => {
                  (this.searchList = []),
                    (this.isEmpty = !0),
                    (this.keyword = e);
                });
              },
              onSelectAddress(e) {
                this.$emit("select", e);
              },
            },
            ud: !0,
          };
        t.default = s.default.component(o);
      },
      "7lfQ": function (e, t, i) {
        i.d(t, "a", function () {
          return a;
        });
        var s = i("9ZMt");
        t.b = function (e) {
          return new Promise(function (t, i) {
            s.default.$native.getSetting({
              success: function (a) {
                a.authSetting[e]
                  ? t()
                  : s.default.$native.authorize({
                      scope: e,
                      success: t,
                      fail: i,
                    });
              },
              fail: i,
            });
          });
        };
        var a = function (e) {
          return new Promise(function (t, i) {
            s.default.$native.getSetting({
              success: function (i) {
                i.authSetting[e] ? t(!0) : t(!1);
              },
              fail: i,
            });
          });
        };
      },
    }
  )
);
